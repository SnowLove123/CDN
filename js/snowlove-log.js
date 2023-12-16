/**
 * @Author       : Xiao Xiang Lun
 * @Date         : 2023-12-16 17:30:59
 * @LastEditors  : snowlove xiaoxl@botech.com.cn
 * @LastEditTime : 2023-12-16 17:31:03
 * @FilePath     : /js/snowlove-log.js
 * @Environment  : macOS Ventura node v16.3.0
 * @Description  : 
 * @ * 关注作者请访问 https://www.snowlove.top 
 * @* 备用地址:https://snowlove.synology.me:5
 */
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
 * @Author: Xiao Xiang Lun
 * @LastEditors: Xiao Xiang Lun
 * @Date: 2022-04-27 15:23:44
 * @LastEditTime: 2022-07-15 16:50:11
 * @FilePath: /projects/test-collect/vue自建npm包/src/logRequest.js
 * @Environment: Win 10 node.js V 12.13.0
 * @Description: 
 */
var axios = require('axios');

var _require = require('lodash'),
    get = _require.get;

var utils = require('../utils/utils');
var cookie = require('../utils/cookie');

var _require2 = require('encryptlong'),
    JSEncrypt = _require2.JSEncrypt;

// 简单队列


var globalRequest = [];
var baseURL = '';
var pem = null;
var jsEncrypt = null;

var service = null,
    cookieService = null;

// 是否含有/
function hasSlash() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return url.substr(-1) === '/' ? url.substring(0, url.length - 1) : url;
}

function isJSON(str) {
  try {
    var json = JSON.parse(str);
    return json;
  } catch (e) {
    if (typeof str === 'string') {}
    return false;
  }
}

function getQueryVariableToObj(QueryV) {
  if (!QueryV) return null;
  var list = QueryV.split("&"),
      obj = {};
  list.map(function (i) {
    var mapList = i.split("=");
    obj[mapList[0]] = mapList[1];
  });
  return obj;
}

// 获取chrome浏览器版本信息
function chromeVersion() {
  try {
    var arr = navigator.userAgent.split(' '),
        _chromeVersion = '';
    for (var i = 0; i < arr.length; i++) {
      if (/chrome/i.test(arr[i])) _chromeVersion = arr[i];
    }
    if (_chromeVersion) {
      return Number(_chromeVersion.split('/')[1].split('.')[0]);
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}
// 0 chrome过低 -1 未获取到版本
function getChromeVersion() {
  if (chromeVersion()) {
    var version = chromeVersion();
    console.log("version", version);
    if (version < 32) {
      return 0;
    } else return version;
  } else {
    return -1;
  }
}

// 获取域名
function getDomainName(domain) {
  if (domain) {
    var arr = domain.match(/(?![https:\/\/|http:\/\/])([0-9a-zA-Z._-]*)/);
    return Array.isArray(arr) && arr[0] ? arr[0] : null;
  } else return null;
}

// 处理cookie_name格式
function getCookieData(cookie_name) {
  if (Array.isArray(cookie_name)) {
    return cookie_name.join(',');
  } else if (typeof cookie_name === 'string') {
    return cookie_name;
  } else return '';
}

// 设置cookie数据
function setCookieFun(cookie_name, data) {
  if (Array.isArray(cookie_name)) {
    cookie_name.forEach(function (c, ind) {
      var value = Array.isArray(data) && data.length ? data[ind] : null;
      cookie.setCookie('my-' + c, value);
    });
  } else if (typeof cookie_name === 'string') {
    cookie.setCookie('my-' + cookie_name, Array.isArray(data) ? data[0] : data);
  }
}

// 获取本地浏览器cookie信息
function getLocalBrowersCookie() {
  var cookie_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['SESSION'];
  var cookie_dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var cookie_dir_path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return new Promise(function (resolve) {
    cookieService({
      url: 'http://127.0.0.1:5000',
      method: 'get',
      params: {
        version: getChromeVersion(),
        domain_name: getDomainName(process.env.VUE_APP_BASE_API),
        cookie_dir: cookie_dir,
        cookie_dir_path: cookie_dir_path,
        cookie_name: getCookieData(cookie_name)
      },
      timeout: 3 * 1000
    }).then(function (resJson) {
      try {
        var _resJson$data = resJson.data,
            code = _resJson$data.code,
            _resJson$data$data = _resJson$data.data,
            data = _resJson$data$data === undefined ? null : _resJson$data$data;
        // 0 chrome过低 -1 未获取到版本

        switch (code) {
          case 0:
            // cookie.setCookie('LogAdmin',data)
            setCookieFun(cookie_name, data);
            break;
          case -1:
            // cookie.setCookie('LogAdmin','获取失败,请手动赋值')
            setCookieFun(cookie_name, '获取失败,请手动赋值');
            break;
          case -2:
            // cookie.setCookie('LogAdmin','浏览器版本过低,请手动赋值')
            setCookieFun(cookie_name, '浏览器版本过低,请手动赋值');
            break;
          case -3:
            // cookie.setCookie('LogAdmin','错误或不支持获取,请手动赋值')
            setCookieFun(cookie_name, '错误或不支持获取,请手动赋值');
          case -4:
            // cookie.setCookie('LogAdmin','获取失败,未找到浏览器cookie路径')
            setCookieFun(cookie_name, '获取失败,未找到浏览器cookie路径');
            break;
          default:
            // cookie.setCookie('LogAdmin','未匹配返回值,请手动赋值')
            setCookieFun(cookie_name, '未匹配返回值,请手动赋值');
            break;
        }
        resolve(true);
      } catch (err) {
        // cookie.setCookie('LogAdmin','出现未知错误,请手动赋值')
        setCookieFun(cookie_name, '出现未知错误,请手动赋值');
        resolve(false);
      }
    }).catch(function (err) {
      console.log('获取cookie错误', err);
      // cookie.setCookie('LogAdmin','本地未启用cookie程序,请手动赋值')
      setCookieFun(cookie_name, '本地未启用cookie程序,请手动赋值');
      resolve(false);
    });
  });
}

// 处理参数
function sendRequestLog(receivePesponse, err) {
  // return new Promise(resolve=>{
  // request
  // 使用loadsh请求错误返回请求
  if (err) receivePesponse = get(receivePesponse, 'response');
  var _receivePesponse = receivePesponse,
      config = _receivePesponse.config,
      request = _receivePesponse.request,
      status = _receivePesponse.status,
      responseHeaders = _receivePesponse.headers;

  var uuid = utils.getUUID();
  var data = config.data,
      params = config.params,
      headers = config.headers,
      url = config.url,
      method = config.method,
      baseURL = config.baseURL;

  var request_create_time = Number(utils.getQueryVariable(url, 't'));
  // console.log("url.replace(baseURL,'')",url.replace(baseURL,''))
  var req_args = {
    request_base_url: baseURL,
    request_url: url.replace(baseURL, '') || url,
    request_headers: headers,
    request_method: method,
    request_data: isJSON(params) || getQueryVariableToObj(data),
    request_create_time: request_create_time
    // response
  };var responseURL = request.responseURL,
      response = request.response,
      readyState = request.readyState,
      responseType = request.responseType,
      statusText = request.statusText;

  var response_create_time = new Date().getTime();
  // 错误文案处理
  var response_data = function response_data() {
    return isJSON(response) || { code: status, msg: statusText, data: response };
  };
  var rep_args = {
    response_url: responseURL.replace(baseURL, '') || responseURL,
    response_headers: responseHeaders,
    response_data: response_data(),
    ready_state: readyState,
    response_type: responseType,
    response_status: status,
    response_create_time: response_create_time
    // interval:(response_create_time - request_create_time) / 1000
  };
  try {
    var args = _extends({
      uuid: uuid,
      system_name: process.env.VUE_APP_NAME + '' || '未指定项目'
    }, req_args, rep_args);
    globalRequest.push(args);
    sendRequest(args, uuid);
  } catch (err) {
    throw new SyntaxError('请在env中配置VUE_APP_NAME的值!');
  }
}
// 处理websocket
function handleWesocketLog(_ref) {
  var _ref$reqData = _ref.reqData,
      reqData = _ref$reqData === undefined ? null : _ref$reqData,
      _ref$resData = _ref.resData,
      resData = _ref$resData === undefined ? null : _ref$resData,
      _ref$api = _ref.api,
      api = _ref$api === undefined ? '' : _ref$api,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'send' : _ref$type;

  var uuid = utils.getUUID();
  var args = {
    request_create_time: new Date().getTime(),
    request_data: reqData,
    request_method: "websocket",
    request_url: api,
    response_create_time: new Date().getTime(),
    response_data: resData,
    response_status: type,
    system_name: process.env.VUE_APP_NAME + '' || '未指定项目',
    uuid: uuid
  };
  globalRequest.push(args);
  sendRequest(args, uuid);
}

// 发送日志
function sendRequest(args, uuid) {

  service({
    url: hasSlash(baseURL) + '/log/insert_today_logs',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      sec_text: jsEncrypt.encryptLong(JSON.stringify(args))
    }
  }).then(function (res) {
    var code = res.code,
        data = res.data;

    if (code === 0) {
      for (var i = 0; i < globalRequest.length; i++) {
        if (globalRequest[i].uuid === uuid) {
          globalRequest.splice(globalRequest.findIndex(function (i) {
            return i.uuid === uuid;
          }), 1);
          break;
        }
      }
    } else {
      console.log("sendRequestLog error", data);
    }
  }).catch(function (err) {
    throw new SyntaxError('\u53D1\u9001\u65E5\u5FD7\u9519\u8BEF:' + err);
    console.log("sendRequestLog catch error", err);
  });
}

// 请求系统发送密钥 加密传输
function getSystemPemKey(args) {
  return new Promise(function (resolve) {
    service({
      url: hasSlash(baseURL) + '/log/get_pem_key',
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: args
    }).then(function (res) {
      var code = res.code,
          data = res.data;

      if (code === 0) {
        resolve(data);
      } else {
        resolve(false);
        console.log("sendRequestLog error", data);
      }
    }).catch(function (err) {
      throw new SyntaxError('\u83B7\u53D6\u5BC6\u94A5\u9519\u8BEF:' + err);
      resolve(false);
      // console.log("sendRequestLog catch error",err)
    });
  });
}

var reqInterceptors = function reqInterceptors(config) {
  // if(!config) return throw('请传输config')
  return _extends({}, config, {
    url: config.url + '?t=' + new Date().getTime()
  });
};

var sendLogrequest = function sendLogrequest(config) {
  var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // if(!config) return throw('请传输config')
  sendRequestLog(config, err);
};

var initLogAxios = async function initLogAxios() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _args$baseURL = args.baseURL,
      baseURL = _args$baseURL === undefined ? '' : _args$baseURL;
  // if(!baseURL) return throw('请配置baseURL地址')

  if (baseURL.indexOf('http') === -1) {
    baseURL = '';
  }
  var defaultAxios = axios.create(_extends({
    baseURL: baseURL,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5 * 1000 }, args));
  defaultAxios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    console.log(error);
    return Promise.reject(error);
  });

  // response interceptor
  defaultAxios.interceptors.response.use(function (response) {
    var res = response.data;
    return response.data;
  }, function (error) {
    console.log('err' + error);
    return Promise.reject(error);
  });

  service = defaultAxios;
  cookieService = axios.create();
  pem = await getSystemPemKey(args);
  if (!pem) throw new SyntaxError('\u672A\u83B7\u53D6\u516C\u94A5,\u8BF7\u68C0\u67E5');else {
    jsEncrypt = new JSEncrypt();
    //初始化公钥
    jsEncrypt.setPublicKey(pem);
  }
};

module.exports = {
  initLogAxios: initLogAxios,
  reqInterceptors: reqInterceptors,
  sendLogrequest: sendLogrequest,
  handleWesocketLog: handleWesocketLog,
  getLocalBrowersCookie: getLocalBrowersCookie
};
