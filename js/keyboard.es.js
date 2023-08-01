/**
 * @Author       : Xiao Xiang Lun
 * @Date         : 2023-08-01 18:18:06
 * @LastEditors  : snowlove xiaoxl@botech.com.cn
 * @LastEditTime : 2023-08-01 18:18:10
 * @FilePath     : /js/keyboard.es.js
 * @Environment  : mac node v16.3.0
 * @Description  : 
 * @关注作者请访问 https://snowlove.synology.me:5 
 * @备用地址:https://nas.snowlove.top:5
 */
var KeyCode = /* @__PURE__ */ ((KeyCode2) => {
  KeyCode2[KeyCode2["BACKSPACE"] = 8] = "BACKSPACE";
  KeyCode2[KeyCode2["TAB"] = 9] = "TAB";
  KeyCode2[KeyCode2["CLEAR"] = 12] = "CLEAR";
  KeyCode2[KeyCode2["ENTER"] = 13] = "ENTER";
  KeyCode2[KeyCode2["SHIFT"] = 16] = "SHIFT";
  KeyCode2[KeyCode2["CONTROL"] = 17] = "CONTROL";
  KeyCode2[KeyCode2["ALT"] = 18] = "ALT";
  KeyCode2[KeyCode2["PAUSE"] = 19] = "PAUSE";
  KeyCode2[KeyCode2["CAPSLOCK"] = 20] = "CAPSLOCK";
  KeyCode2[KeyCode2["ESCAPE"] = 27] = "ESCAPE";
  KeyCode2[KeyCode2["PRIOR"] = 33] = "PRIOR";
  KeyCode2[KeyCode2["SPACE"] = 32] = "SPACE";
  KeyCode2[KeyCode2["NEXT"] = 34] = "NEXT";
  KeyCode2[KeyCode2["END"] = 35] = "END";
  KeyCode2[KeyCode2["HOME"] = 36] = "HOME";
  KeyCode2[KeyCode2["LEFT"] = 37] = "LEFT";
  KeyCode2[KeyCode2["UP"] = 38] = "UP";
  KeyCode2[KeyCode2["RIGHT"] = 39] = "RIGHT";
  KeyCode2[KeyCode2["DOWN"] = 40] = "DOWN";
  KeyCode2[KeyCode2["SELECT"] = 41] = "SELECT";
  KeyCode2[KeyCode2["PRINT"] = 42] = "PRINT";
  KeyCode2[KeyCode2["EXECUTE"] = 43] = "EXECUTE";
  KeyCode2[KeyCode2["INSERT"] = 45] = "INSERT";
  KeyCode2[KeyCode2["DELETE"] = 46] = "DELETE";
  KeyCode2[KeyCode2["HELP"] = 47] = "HELP";
  KeyCode2[KeyCode2["ZERO"] = 48] = "ZERO";
  KeyCode2[KeyCode2["ONE"] = 49] = "ONE";
  KeyCode2[KeyCode2["TWO"] = 50] = "TWO";
  KeyCode2[KeyCode2["THREE"] = 51] = "THREE";
  KeyCode2[KeyCode2["FOUR"] = 52] = "FOUR";
  KeyCode2[KeyCode2["FIVE"] = 53] = "FIVE";
  KeyCode2[KeyCode2["SIX"] = 54] = "SIX";
  KeyCode2[KeyCode2["SEVEN"] = 55] = "SEVEN";
  KeyCode2[KeyCode2["EIGHT"] = 56] = "EIGHT";
  KeyCode2[KeyCode2["NINE"] = 57] = "NINE";
  KeyCode2[KeyCode2["A"] = 65] = "A";
  KeyCode2[KeyCode2["B"] = 66] = "B";
  KeyCode2[KeyCode2["C"] = 67] = "C";
  KeyCode2[KeyCode2["D"] = 68] = "D";
  KeyCode2[KeyCode2["E"] = 69] = "E";
  KeyCode2[KeyCode2["F"] = 70] = "F";
  KeyCode2[KeyCode2["G"] = 71] = "G";
  KeyCode2[KeyCode2["H"] = 72] = "H";
  KeyCode2[KeyCode2["I"] = 73] = "I";
  KeyCode2[KeyCode2["J"] = 74] = "J";
  KeyCode2[KeyCode2["K"] = 75] = "K";
  KeyCode2[KeyCode2["L"] = 76] = "L";
  KeyCode2[KeyCode2["M"] = 77] = "M";
  KeyCode2[KeyCode2["N"] = 78] = "N";
  KeyCode2[KeyCode2["O"] = 79] = "O";
  KeyCode2[KeyCode2["P"] = 80] = "P";
  KeyCode2[KeyCode2["Q"] = 81] = "Q";
  KeyCode2[KeyCode2["R"] = 82] = "R";
  KeyCode2[KeyCode2["S"] = 83] = "S";
  KeyCode2[KeyCode2["T"] = 84] = "T";
  KeyCode2[KeyCode2["U"] = 85] = "U";
  KeyCode2[KeyCode2["V"] = 86] = "V";
  KeyCode2[KeyCode2["W"] = 87] = "W";
  KeyCode2[KeyCode2["X"] = 88] = "X";
  KeyCode2[KeyCode2["Y"] = 89] = "Y";
  KeyCode2[KeyCode2["Z"] = 90] = "Z";
  KeyCode2[KeyCode2["NUMBER_ZERO"] = 96] = "NUMBER_ZERO";
  KeyCode2[KeyCode2["NUMBER_ONE"] = 97] = "NUMBER_ONE";
  KeyCode2[KeyCode2["NUMBER_TWO"] = 98] = "NUMBER_TWO";
  KeyCode2[KeyCode2["NUMBER_THREE"] = 99] = "NUMBER_THREE";
  KeyCode2[KeyCode2["NUMBER_FOUR"] = 100] = "NUMBER_FOUR";
  KeyCode2[KeyCode2["NUMBER_FIVE"] = 101] = "NUMBER_FIVE";
  KeyCode2[KeyCode2["NUMBER_SIX"] = 102] = "NUMBER_SIX";
  KeyCode2[KeyCode2["NUMBER_SEVEN"] = 103] = "NUMBER_SEVEN";
  KeyCode2[KeyCode2["NUMBER_EIGHT"] = 104] = "NUMBER_EIGHT";
  KeyCode2[KeyCode2["NUMBER_NINE"] = 105] = "NUMBER_NINE";
  KeyCode2[KeyCode2["NUMBER_MULTIPLICATION"] = 106] = "NUMBER_MULTIPLICATION";
  KeyCode2[KeyCode2["NUMBER_PLUS"] = 107] = "NUMBER_PLUS";
  KeyCode2[KeyCode2["NUMBER_ENTER"] = 108] = "NUMBER_ENTER";
  KeyCode2[KeyCode2["NUMBER_MINUS"] = 109] = "NUMBER_MINUS";
  KeyCode2[KeyCode2["NUMBER_DOT"] = 110] = "NUMBER_DOT";
  KeyCode2[KeyCode2["NUMBER_DIVISION"] = 111] = "NUMBER_DIVISION";
  KeyCode2[KeyCode2["F1"] = 112] = "F1";
  KeyCode2[KeyCode2["F2"] = 113] = "F2";
  KeyCode2[KeyCode2["F3"] = 114] = "F3";
  KeyCode2[KeyCode2["F4"] = 115] = "F4";
  KeyCode2[KeyCode2["F5"] = 116] = "F5";
  KeyCode2[KeyCode2["F6"] = 117] = "F6";
  KeyCode2[KeyCode2["F7"] = 118] = "F7";
  KeyCode2[KeyCode2["F8"] = 119] = "F8";
  KeyCode2[KeyCode2["F9"] = 120] = "F9";
  KeyCode2[KeyCode2["F10"] = 121] = "F10";
  KeyCode2[KeyCode2["F11"] = 122] = "F11";
  KeyCode2[KeyCode2["F12"] = 123] = "F12";
  KeyCode2[KeyCode2["F13"] = 124] = "F13";
  KeyCode2[KeyCode2["F14"] = 125] = "F14";
  KeyCode2[KeyCode2["F15"] = 126] = "F15";
  KeyCode2[KeyCode2["F16"] = 127] = "F16";
  KeyCode2[KeyCode2["F17"] = 128] = "F17";
  KeyCode2[KeyCode2["F18"] = 129] = "F18";
  KeyCode2[KeyCode2["F19"] = 130] = "F19";
  KeyCode2[KeyCode2["F20"] = 131] = "F20";
  KeyCode2[KeyCode2["F21"] = 132] = "F21";
  KeyCode2[KeyCode2["F22"] = 133] = "F22";
  KeyCode2[KeyCode2["F23"] = 134] = "F23";
  KeyCode2[KeyCode2["F24"] = 135] = "F24";
  KeyCode2[KeyCode2["NUMBER_LOCK"] = 136] = "NUMBER_LOCK";
  KeyCode2[KeyCode2["SEMICOLON"] = 186] = "SEMICOLON";
  KeyCode2[KeyCode2["EQUAL"] = 187] = "EQUAL";
  KeyCode2[KeyCode2["COMMA"] = 188] = "COMMA";
  KeyCode2[KeyCode2["MINUS"] = 189] = "MINUS";
  KeyCode2[KeyCode2["DOT"] = 190] = "DOT";
  KeyCode2[KeyCode2["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
  KeyCode2[KeyCode2["BACKQUOTE"] = 192] = "BACKQUOTE";
  KeyCode2[KeyCode2["LEFT_BRACKET"] = 219] = "LEFT_BRACKET";
  KeyCode2[KeyCode2["BACK_SLASH"] = 220] = "BACK_SLASH";
  KeyCode2[KeyCode2["RIGHT_BRACKET"] = 221] = "RIGHT_BRACKET";
  KeyCode2[KeyCode2["QUOTES"] = 222] = "QUOTES";
  KeyCode2[KeyCode2["MODE"] = 600] = "MODE";
  KeyCode2[KeyCode2["DIGITAL"] = 601] = "DIGITAL";
  KeyCode2[KeyCode2["ASSOCIATION"] = 700] = "ASSOCIATION";
  KeyCode2[KeyCode2["ASSOCIATION_CLOSE"] = 701] = "ASSOCIATION_CLOSE";
  KeyCode2[KeyCode2["ASSOCIATION_PREV"] = 702] = "ASSOCIATION_PREV";
  KeyCode2[KeyCode2["ASSOCIATION_NEXT"] = 703] = "ASSOCIATION_NEXT";
  KeyCode2[KeyCode2["ASSOCIATION_INPUT"] = 704] = "ASSOCIATION_INPUT";
  KeyCode2[KeyCode2["HTTP"] = 800] = "HTTP";
  return KeyCode2;
})(KeyCode || {});
const BASE_WIDTH = 3.5;
const BASE_GRID_GAP = 0.5;
const BASE_DIGITAL_WIDTH = 4;
const BASE_DIGITAL_GRID_GAP = 0.5;
var MouseTrigger = /* @__PURE__ */ ((MouseTrigger2) => {
  MouseTrigger2["FOCUS"] = "click";
  MouseTrigger2["INPUT"] = "mousedown";
  return MouseTrigger2;
})(MouseTrigger || {});
var TouchTrigger = /* @__PURE__ */ ((TouchTrigger2) => {
  TouchTrigger2["FOCUS"] = "touchend";
  TouchTrigger2["INPUT"] = "touchstart";
  return TouchTrigger2;
})(TouchTrigger || {});
const qwertyLayout = [
  [
    { keyCode: KeyCode.BACKQUOTE, pri: "`", sec: "~" },
    { keyCode: KeyCode.ONE, pri: "1", sec: "!" },
    { keyCode: KeyCode.TWO, pri: "2", sec: "@" },
    { keyCode: KeyCode.THREE, pri: "3", sec: "#" },
    { keyCode: KeyCode.FOUR, pri: "4", sec: "$" },
    { keyCode: KeyCode.FIVE, pri: "5", sec: "%" },
    { keyCode: KeyCode.SIX, pri: "6", sec: "^" },
    { keyCode: KeyCode.SEVEN, pri: "7", sec: "&" },
    { keyCode: KeyCode.EIGHT, pri: "8", sec: "*" },
    { keyCode: KeyCode.NINE, pri: "9", sec: "(" },
    { keyCode: KeyCode.ZERO, pri: "0", sec: ")" },
    { keyCode: KeyCode.MINUS, pri: "-", sec: "_" },
    { keyCode: KeyCode.EQUAL, pri: "=", sec: "+" },
    { keyCode: KeyCode.BACKSPACE, pri: "Backspace", size: 2 }
  ],
  [
    { keyCode: KeyCode.TAB, pri: "Tab", size: 1.5 },
    { keyCode: KeyCode.Q, pri: "q" },
    { keyCode: KeyCode.W, pri: "w" },
    { keyCode: KeyCode.E, pri: "e" },
    { keyCode: KeyCode.R, pri: "r" },
    { keyCode: KeyCode.T, pri: "t" },
    { keyCode: KeyCode.Y, pri: "y" },
    { keyCode: KeyCode.U, pri: "u" },
    { keyCode: KeyCode.I, pri: "i" },
    { keyCode: KeyCode.O, pri: "o" },
    { keyCode: KeyCode.P, pri: "p" },
    { keyCode: KeyCode.LEFT_BRACKET, pri: "[", sec: "{" },
    { keyCode: KeyCode.RIGHT_BRACKET, pri: "]", sec: "}" },
    { keyCode: KeyCode.BACK_SLASH, pri: "\\", sec: "|", size: 1.5 }
  ],
  [
    { keyCode: KeyCode.CAPSLOCK, pri: "Capslock", size: 2 },
    { keyCode: KeyCode.A, pri: "a" },
    { keyCode: KeyCode.S, pri: "s" },
    { keyCode: KeyCode.D, pri: "d" },
    { keyCode: KeyCode.F, pri: "f" },
    { keyCode: KeyCode.G, pri: "g" },
    { keyCode: KeyCode.H, pri: "h" },
    { keyCode: KeyCode.J, pri: "j" },
    { keyCode: KeyCode.K, pri: "k" },
    { keyCode: KeyCode.L, pri: "l" },
    { keyCode: KeyCode.SEMICOLON, pri: ";", sec: ":" },
    { keyCode: KeyCode.QUOTES, pri: "'", sec: '"' },
    { keyCode: KeyCode.ENTER, pri: "Enter", size: "auto" }
  ],
  [
    { keyCode: KeyCode.SHIFT, pri: "Shift", size: 2.5 },
    { keyCode: KeyCode.Z, pri: "z" },
    { keyCode: KeyCode.X, pri: "x" },
    { keyCode: KeyCode.C, pri: "c" },
    { keyCode: KeyCode.V, pri: "v" },
    { keyCode: KeyCode.B, pri: "b" },
    { keyCode: KeyCode.N, pri: "n" },
    { keyCode: KeyCode.M, pri: "m" },
    { keyCode: KeyCode.COMMA, pri: ",", sec: "<" },
    { keyCode: KeyCode.DOT, pri: ".", sec: ">" },
    { keyCode: KeyCode.FORWARD_SLASH, pri: "/", sec: "?" },
    { keyCode: KeyCode.SHIFT, pri: "Shift", size: "auto" }
  ],
  [
    { keyCode: KeyCode.MODE, pri: "英" },
    { keyCode: KeyCode.SPACE, pri: "space", size: "auto" },
    { keyCode: KeyCode.LEFT, pri: "←" },
    { keyCode: KeyCode.RIGHT, pri: "→" },
    { keyCode: KeyCode.DELETE, pri: "Delete" },
    { keyCode: KeyCode.DIGITAL, pri: "数字" }
    //
  ]
];
const qwertyZhLayout = [
  [
    { keyCode: KeyCode.BACKQUOTE, pri: "·", sec: "～" },
    { keyCode: KeyCode.ONE, pri: "1", sec: "！" },
    { keyCode: KeyCode.TWO, pri: "2", sec: "@" },
    { keyCode: KeyCode.THREE, pri: "3", sec: "#" },
    { keyCode: KeyCode.FOUR, pri: "4", sec: "¥" },
    { keyCode: KeyCode.FIVE, pri: "5", sec: "%" },
    { keyCode: KeyCode.SIX, pri: "6", sec: "…" },
    { keyCode: KeyCode.SEVEN, pri: "7", sec: "&" },
    { keyCode: KeyCode.EIGHT, pri: "8", sec: "*" },
    { keyCode: KeyCode.NINE, pri: "9", sec: "（" },
    { keyCode: KeyCode.ZERO, pri: "0", sec: "）" },
    { keyCode: KeyCode.MINUS, pri: "-", sec: "——" },
    { keyCode: KeyCode.EQUAL, pri: "=", sec: "+" },
    { keyCode: KeyCode.BACKSPACE, pri: "Backspace", size: 2 }
  ],
  [
    { keyCode: KeyCode.TAB, pri: "Tab", size: 1.5 },
    { keyCode: KeyCode.Q, pri: "q" },
    { keyCode: KeyCode.W, pri: "w" },
    { keyCode: KeyCode.E, pri: "e" },
    { keyCode: KeyCode.R, pri: "r" },
    { keyCode: KeyCode.T, pri: "t" },
    { keyCode: KeyCode.Y, pri: "y" },
    { keyCode: KeyCode.U, pri: "u" },
    { keyCode: KeyCode.I, pri: "i" },
    { keyCode: KeyCode.O, pri: "o" },
    { keyCode: KeyCode.P, pri: "p" },
    { keyCode: KeyCode.LEFT_BRACKET, pri: "【", sec: "「" },
    { keyCode: KeyCode.RIGHT_BRACKET, pri: "】", sec: "」" },
    { keyCode: KeyCode.BACK_SLASH, pri: "、", sec: "｜", size: 1.5 }
  ],
  [
    { keyCode: KeyCode.CAPSLOCK, pri: "Capslock", size: 2 },
    { keyCode: KeyCode.A, pri: "a" },
    { keyCode: KeyCode.S, pri: "s" },
    { keyCode: KeyCode.D, pri: "d" },
    { keyCode: KeyCode.F, pri: "f" },
    { keyCode: KeyCode.G, pri: "g" },
    { keyCode: KeyCode.H, pri: "h" },
    { keyCode: KeyCode.J, pri: "j" },
    { keyCode: KeyCode.K, pri: "k" },
    { keyCode: KeyCode.L, pri: "l" },
    { keyCode: KeyCode.SEMICOLON, pri: "；", sec: "：" },
    { keyCode: KeyCode.QUOTES, pri: "‘", sec: "“" },
    { keyCode: KeyCode.ENTER, pri: "Enter", size: "auto" }
  ],
  [
    { keyCode: KeyCode.SHIFT, pri: "Shift", size: 2.5 },
    { keyCode: KeyCode.Z, pri: "z" },
    { keyCode: KeyCode.X, pri: "x" },
    { keyCode: KeyCode.C, pri: "c" },
    { keyCode: KeyCode.V, pri: "v" },
    { keyCode: KeyCode.B, pri: "b" },
    { keyCode: KeyCode.N, pri: "n" },
    { keyCode: KeyCode.M, pri: "m" },
    { keyCode: KeyCode.COMMA, pri: "，", sec: "《" },
    { keyCode: KeyCode.DOT, pri: "。", sec: "》" },
    { keyCode: KeyCode.FORWARD_SLASH, pri: "/", sec: "？" },
    { keyCode: KeyCode.SHIFT, pri: "Shift", size: "auto" }
  ],
  [
    { keyCode: KeyCode.MODE, pri: "中" },
    { keyCode: KeyCode.SPACE, pri: "space", size: "auto" },
    { keyCode: KeyCode.LEFT, pri: "←" },
    { keyCode: KeyCode.RIGHT, pri: "→" },
    { keyCode: KeyCode.DELETE, pri: "Delete" },
    { keyCode: KeyCode.DIGITAL, pri: "数字" }
  ]
];
const digitalLayout = [
  [
    { keyCode: KeyCode.ONE, pri: "1", sec: ".", size: 1.5 },
    { keyCode: KeyCode.TWO, pri: "2", sec: "·", size: 1.5 },
    { keyCode: KeyCode.THREE, pri: "3", sec: "@", size: 1.5 }
  ],
  [
    { keyCode: KeyCode.FOUR, pri: "4", sec: "=", size: 1.5 },
    { keyCode: KeyCode.FIVE, pri: "5", sec: "#", size: 1.5 },
    { keyCode: KeyCode.SIX, pri: "6", sec: "+", size: 1.5 }
  ],
  [
    { keyCode: KeyCode.SEVEN, pri: "7", sec: "-", size: 1.5 },
    { keyCode: KeyCode.EIGHT, pri: "8", sec: "*", size: 1.5 },
    { keyCode: KeyCode.NINE, pri: "9", sec: "%", size: 1.5 }
  ],
  [
    { keyCode: KeyCode.SHIFT, pri: "Shift", size: 1.5 },
    { keyCode: KeyCode.ZERO, pri: "0", sec: "X", size: 1.5 },
    { keyCode: KeyCode.DIGITAL, pri: "全键", size: 1.5 }
  ],
  [{ keyCode: KeyCode.BACKSPACE, pri: "Backspace", size: 4.75 }]
];
const isHTMLElement = (variable) => {
  if (typeof variable === "undefined" || variable === null)
    return false;
  else if (typeof variable === "string")
    return "string";
  else if (variable instanceof Element)
    return "Element";
  else
    return false;
};
const isTouchScreen = () => {
  return "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;
};
const isSingleLetter = (key) => {
  return !!key && /^[a-zA-Z]$/.test(key);
};
const toggleCase = (key) => {
  console.log(key);
  return key.toUpperCase() === key ? key.toLowerCase() : key.toUpperCase();
};
function initInputEl(inputEl) {
  console.log("initInputEl", isHTMLElement(inputEl));
  switch (isHTMLElement(inputEl)) {
    case "string":
      const ele = document.querySelector(inputEl);
      return ele;
    case "Element":
      return inputEl;
    default:
      return void 0;
  }
}
function computeInputSelection(action, inputEl, text = "") {
  const selectionStart = inputEl.selectionStart || 0, selectionEnd = inputEl.selectionEnd || 0, oldValue = inputEl.value || "", oldLen = oldValue.length, newLen = (text == null ? void 0 : text.length) ?? 0, selected = selectionEnd - selectionStart;
  let result = "", range = [0, 0];
  switch (action) {
    case "insert":
      if (!selected) {
        if (selectionEnd == 0 && selectionStart == 0) {
          if (oldLen)
            result = text + oldValue;
          else
            result = text;
          range = [newLen, newLen];
        } else if (selectionEnd == oldLen) {
          result = oldValue + text;
          range = [selectionEnd + newLen, selectionEnd + newLen];
        } else {
          result = oldValue.slice(0, selectionEnd) + text + oldValue.slice(selectionEnd);
          range = [selectionEnd + newLen, selectionEnd + newLen];
        }
      } else {
        result = oldValue.replace(
          oldValue.substring(selectionStart, selectionEnd),
          text
        );
        range = [selectionStart + newLen, selectionStart + newLen];
      }
      break;
    case "delete":
      if (!selected) {
        if (selectionEnd == oldLen) {
          result = oldValue.slice(0, -1);
          range = [selectionEnd - 1, selectionEnd - 1];
        } else {
          result = oldValue.slice(0, selectionEnd - 1) + oldValue.slice(selectionEnd);
          range = [selectionEnd - 1, selectionEnd - 1];
        }
      } else {
        result = oldValue.replace(
          oldValue.substring(selectionStart, selectionEnd),
          ""
        );
        range = [selectionStart, selectionStart];
      }
      break;
  }
  return [result, range];
}
function moveCursor(inputEl, forward) {
  const selectionStart = inputEl.selectionStart || 0, selectionEnd = inputEl.selectionEnd || 0;
  if (selectionEnd == 0)
    return;
  if (forward) {
    inputEl.setSelectionRange(selectionStart, selectionEnd + 1);
  } else {
    inputEl.setSelectionRange(selectionStart - 1, selectionEnd);
  }
}
function computeBaeFont(size) {
  const html = document.querySelector("html");
  if (html) {
    html.setAttribute("style", `font-size:${size}px`);
  }
}
function createElement(tagName, attribute, innerHTML) {
  const ele = document.createElement(tagName);
  Object.keys(attribute).forEach((key) => {
    ele.setAttribute(key, attribute[key]);
  });
  if (innerHTML) {
    ele.innerHTML = innerHTML;
  }
  return ele;
}
const TAGS_ARR = [
  "div",
  "span",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "a",
  "img",
  "tr",
  "td",
  "ol",
  "li",
  "input",
  "textarea",
  "button"
];
function isHTMLElementTagName(tagName) {
  return TAGS_ARR.includes(tagName);
}
function createNestElement(tree) {
  let father;
  while (true) {
    if (isHTMLElementTagName(tree.tagName)) {
      father = createElement(
        tree.tagName,
        tree.attribute,
        tree.innerHTML
      );
      if (!!tree.children) {
        tree.children.forEach((item) => {
          father.appendChild(createNestElement(item));
        });
        break;
      } else {
        break;
      }
    }
  }
  return father;
}
function createKeyButtonElement(item) {
  const keyWapper = document.createElement("div"), switchKey = document.createElement("span");
  switchKey.setAttribute("class", "switch-key");
  switchKey.innerHTML = item.sec || "";
  keyWapper.setAttribute("class", "key_wapper");
  keyWapper.setAttribute("data-pri", item.pri + "");
  if (item.sec) {
    keyWapper.setAttribute("data-sec", item.sec + "");
    keyWapper.classList.add("is-double");
  }
  if (item.keyCode == KeyCode.SHIFT) {
    keyWapper.classList.add("is-shift");
  }
  keyWapper.setAttribute("data-keycode", item.keyCode + "");
  keyWapper.innerHTML = item.pri;
  keyWapper.appendChild(switchKey);
  return keyWapper;
}
function combineElement(newEle, targetEle) {
  const parentEle = targetEle.parentNode;
  if ((parentEle == null ? void 0 : parentEle.lastChild) == targetEle) {
    parentEle.appendChild(newEle);
  } else {
    if ((parentEle == null ? void 0 : parentEle.firstChild) == targetEle) {
      parentEle == null ? void 0 : parentEle.insertBefore(newEle, targetEle);
    } else if (targetEle.nextSibling) {
      parentEle == null ? void 0 : parentEle.insertBefore(newEle, targetEle.nextSibling);
    } else {
      parentEle == null ? void 0 : parentEle.appendChild(newEle);
    }
  }
  return parentEle;
}
function createCandidateElement() {
  const candWapper = document.createElement("div");
  candWapper.setAttribute("class", "candidate-word_wapper");
  ["one", "two", "three", "four"].forEach((_i, index) => {
    const child = document.createElement("div");
    child.setAttribute("class", "candidate-word-item_wapper");
    switch (index) {
      case 0:
        const circular = document.createElement("div"), close = document.createElement("div");
        circular.setAttribute("class", "close_wapper");
        close.setAttribute("class", "close");
        circular.appendChild(close);
        child.append(circular);
        break;
      case 1:
        break;
      case 2:
        "我正在测试这预选字体".split("").forEach((t) => {
          child.append(createCandidateWordElement(t));
        });
        break;
      case 3:
        const arrowWapper = document.createElement("div"), left = document.createElement("div"), right = document.createElement("div");
        arrowWapper.setAttribute("class", "arrow_wapper");
        left.setAttribute("class", "arrow-left_wapper");
        right.setAttribute("class", "arrow-right_wapper");
        arrowWapper.appendChild(left);
        arrowWapper.appendChild(right);
        child.append(arrowWapper);
        break;
    }
    candWapper.appendChild(child);
  });
  return candWapper;
}
function createCandidateWordElement(item) {
  const word = document.createElement("div");
  word.setAttribute("class", "word_wapper");
  word.innerText = item;
  return word;
}
function removeAllGridItem(parent, className) {
  if (parent instanceof HTMLElement) {
    parent.querySelectorAll(className).forEach((ele) => {
      parent.removeChild(ele);
    });
  }
}
function dispatchInput(input, value) {
  const inputEvent = new Event("input", { bubbles: true });
  input.value = value;
  input.dispatchEvent(inputEvent);
}
var ModeType = /* @__PURE__ */ ((ModeType2) => {
  ModeType2["DIGITAL"] = "digital-keyboard";
  ModeType2["FULL"] = "full-keyboard";
  return ModeType2;
})(ModeType || {});
class Keyboard {
  constructor({
    mode,
    size,
    layout
  }) {
    this.top = 0;
    this.mode = mode;
    this.size = size;
    if (SnowKeyboard.inputEl)
      this.render(mode, size, SnowKeyboard.inputEl, layout);
  }
  // 创建键盘
  render(mode, size, inputEl, layout) {
    const keyboardWapper = this.keyboardDocumentElement ? this.keyboardDocumentElement : createElement("div", {
      class: "keyboard_wapper"
    }), { top, height } = inputEl.getBoundingClientRect(), scrollTop = window.scrollY || document.documentElement.scrollTop;
    computeBaeFont(size);
    this.top = scrollTop + top + height + 20;
    keyboardWapper.style.top = `${this.top}px`;
    switch (mode) {
      case "full-keyboard":
        for (let k = 0; k < layout.length; k++) {
          const wapper = layout[k], keyWapper = createElement("div", {
            class: `key-row-base_wapper key-row_${k + 1}`,
            style: this.computeGridTemplateColumns(wapper)
          });
          for (let j = 0; j < wapper.length; j++) {
            keyWapper.appendChild(createKeyButtonElement(wapper[j]));
          }
          keyboardWapper.appendChild(keyWapper);
        }
        document.body.appendChild(keyboardWapper);
        this.keyboardDocumentElement = keyboardWapper;
        this.keyboardEl = keyboardWapper;
        return this.keyboardEl;
      case "digital-keyboard":
        keyboardWapper.classList.add("digital_wapper");
        for (let k = 0; k < layout.length; k++) {
          const wapper = layout[k], keyWapper = createElement("div", {
            class: `key-row-base_wapper key-row_${k + 1} digital-row`,
            style: this.computeGridTemplateColumns(wapper, true)
          });
          for (let j = 0; j < wapper.length; j++) {
            keyWapper.appendChild(createKeyButtonElement(wapper[j]));
          }
          keyboardWapper.appendChild(keyWapper);
        }
        document.body.appendChild(keyboardWapper);
        this.keyboardDocumentElement = keyboardWapper;
        this.keyboardEl = keyboardWapper;
        return this.keyboardEl;
      default:
        return null;
    }
  }
  // 计算grid网格布局 gridTemplateColumns
  computeGridTemplateColumns(wapper, digital = false) {
    return "grid-template-columns:" + wapper.map(
      (w) => w.size != void 0 ? typeof w.size == "string" ? w.size : `${digital ? BASE_DIGITAL_WIDTH * w.size : BASE_WIDTH * w.size}em` : `${digital ? BASE_DIGITAL_WIDTH : BASE_WIDTH}em`
    ).join(" ");
  }
  // 展示预选字体部分
  showCandidateWordWapper(show) {
    var _a, _b;
    if (show) {
      (_a = this.keyboardEl) == null ? void 0 : _a.classList.add("candidate-word-active_wapper");
    } else {
      (_b = this.keyboardEl) == null ? void 0 : _b.classList.remove("candidate-word-active_wapper");
    }
  }
  // 切换展示键盘
  toggleKeyboardShow(show = false) {
    var _a, _b, _c, _d, _e;
    console.log("toggleKeyboardShow");
    if (show) {
      if (((_a = this.keyboardEl) == null ? void 0 : _a.style) !== void 0) {
        this.keyboardEl.style.top = `${this.top}px`;
        this.keyboardEl.style.pointerEvents = "auto";
        this.keyboardEl.style.removeProperty("bottom");
        (_b = this.keyboardEl) == null ? void 0 : _b.classList.remove("hidden");
      }
    } else {
      if (((_c = this.keyboardEl) == null ? void 0 : _c.style) !== void 0) {
        this.keyboardEl.style.pointerEvents = "none";
        this.keyboardEl.style.removeProperty("top");
        this.keyboardEl.style.bottom = `${BASE_WIDTH * 2}em`;
      }
      (_d = this.keyboardEl) == null ? void 0 : _d.classList.add("hidden");
      (_e = this.keyboardEl) == null ? void 0 : _e.classList.remove("candidate-word-active_wapper");
    }
  }
  // 切换数字展示键盘
  toggleDigitalKeyboardShow(show = false) {
    var _a, _b, _c, _d;
    console.log("toggleDigitalKeyboardShow");
    if (show) {
      if (((_a = this.keyboardEl) == null ? void 0 : _a.style) !== void 0) {
        this.keyboardEl.style.top = `${this.top}px`;
        this.keyboardEl.style.pointerEvents = "auto";
        this.keyboardEl.style.removeProperty("bottom");
        (_b = this.keyboardEl) == null ? void 0 : _b.classList.remove("hidden");
      }
    } else {
      if (((_c = this.keyboardEl) == null ? void 0 : _c.style) !== void 0) {
        this.keyboardEl.style.pointerEvents = "none";
        this.keyboardEl.style.removeProperty("top");
        this.keyboardEl.style.bottom = `${BASE_DIGITAL_WIDTH * 2}em`;
      }
      (_d = this.keyboardEl) == null ? void 0 : _d.classList.add("hidden");
    }
  }
  // 获取键盘元素
  getKeyboardEl() {
    return this.keyboardEl;
  }
  // 获取键盘元素
  getKeyboardFirstEl() {
    var _a;
    return (_a = this.keyboardEl) == null ? void 0 : _a.querySelector(".key-row_1");
  }
  // 获取键盘预选字部分
  getCandidateWordEl() {
    var _a;
    return ((_a = this.keyboardEl) == null ? void 0 : _a.querySelector(
      ".candidate-word_wapper"
    )) || null;
  }
  // 切换键盘正副键
  toggleKeys() {
    var _a;
    (_a = this.keyboardEl) == null ? void 0 : _a.querySelectorAll(".key_wapper:not(.is-double)").forEach((key) => {
      if (key instanceof HTMLElement) {
        const keyText = key.innerText;
        isSingleLetter(keyText) ? key.innerText = toggleCase(keyText) : null;
        console.log("key.innerText", key.innerText);
      }
    });
  }
  // 切换键盘模式
  setKeyboardMode(layout) {
    this.keyboardDocumentElement && removeAllGridItem(this.keyboardDocumentElement, ".key-row-base_wapper");
    SnowKeyboard.inputEl && this.render(this.mode, this.size, SnowKeyboard.inputEl, layout);
  }
  // 绑定键盘事件
  toggleShiftKeys(flag) {
    var _a, _b;
    (_a = this.keyboardEl) == null ? void 0 : _a.querySelectorAll(".is-shift").forEach((target, index) => {
      if (target instanceof HTMLElement) {
        const {
          dataset: { pri }
        } = target;
        flag ? target.innerHTML = `${pri} <span class="switch-key ${!index ? "dot" : "dot-right"}"></span>` : target.innerHTML = `${pri} <span class="switch-key"></span>`;
      }
    });
    (_b = this.keyboardEl) == null ? void 0 : _b.querySelectorAll(".is-double").forEach((target) => {
      if (target instanceof HTMLElement) {
        const {
          dataset: { pri, sec }
        } = target;
        flag ? target.innerHTML = `${sec} <span class="switch-key">${pri}</span>` : target.innerHTML = `${pri} <span class="switch-key">${sec}</span>`;
      }
    });
    this.toggleKeys();
  }
  // 切换已经存在的键盘对象
  turnKeyboardEl(oldEle, newEle) {
    console.log(33333, oldEle, newEle);
    document.body.removeChild(oldEle);
    document.body.appendChild(newEle);
  }
}
class Association {
  constructor(globalEvent, dictionary) {
    this.assoArr = [];
    this.keyword = "";
    this.limit = 10;
    this.current = 1;
    this.total = 0;
    this.globalEvent = globalEvent;
    this.associationEl = createElement("div", {
      class: "candidate-word_wapper"
    });
    this.closeEl = createNestElement({
      tagName: "div",
      attribute: {
        class: "candidate-word-item_wapper"
      },
      children: [
        {
          tagName: "div",
          attribute: {
            class: "close_wapper",
            "data-keycode": "-10"
          },
          children: [
            {
              tagName: "div",
              attribute: {
                class: "close"
              }
            }
          ]
        }
      ]
    });
    this.inputEl = createElement("div", {
      class: "candidate-word-item_wapper",
      "data-keycode": "-11"
    });
    this.candidateListEl = createNestElement({
      tagName: "div",
      attribute: {
        class: "candidate-word-item_wapper"
      },
      children: new Array(this.limit).fill(null).map(() => ({
        tagName: "div",
        attribute: {
          class: "word_wapper",
          "data-keycode": "-12"
        }
      }))
    });
    this.arrowEl = createNestElement({
      tagName: "div",
      attribute: {
        class: "candidate-word-item_wapper"
      },
      children: [
        {
          tagName: "div",
          attribute: {
            class: "arrow_wapper"
          },
          children: [
            {
              tagName: "div",
              attribute: {
                class: "arrow-left_wapper",
                "data-keycode": "-14"
              }
            },
            {
              tagName: "div",
              attribute: {
                class: "arrow-right_wapper",
                "data-keycode": "-15"
              }
            }
          ]
        }
      ]
    });
    this.prvKey = this.arrowEl.querySelector(".arrow-left_wapper");
    this.nextKey = this.arrowEl.querySelector(".arrow-right_wapper");
    [this.closeEl, this.inputEl, this.candidateListEl, this.arrowEl].forEach(
      (el) => {
        this.associationEl.appendChild(el);
      }
    );
    this.dictionary = dictionary;
    this.initEvent();
  }
  // 初始化时间
  initEvent() {
    this.globalEvent.getClickKeyTarget().addEventListener("clickKeyTarget", (event) => {
      if (event instanceof CustomEvent) {
        const {
          detail: { target, pri, keyCode }
        } = event;
        pri && this.setAssociationText(pri);
        console.log("clickKeyTarget", this.inputEl.innerText, this.keyword);
        [-10, -11, -12, -14, -15].some((n) => n == keyCode) ? this.associationClickEvent(target, keyCode) : this.sssociationwordsbar();
      }
    });
    this.globalEvent.getBackSpaceKeyTarget().addEventListener("backSpaceKeyTarget", () => {
      var _a, _b;
      const [text, range] = computeInputSelection(
        "delete",
        SnowKeyboard.inputEl
      );
      if (((_a = SnowKeyboard.inputEl) == null ? void 0 : _a.value) != void 0) {
        SnowKeyboard.inputEl.value = text;
      }
      (_b = SnowKeyboard.inputEl) == null ? void 0 : _b.setSelectionRange(range[0], range[1]);
    });
    this.globalEvent.getCaplockKeyTarget().addEventListener("caplockKeyTarget", () => {
      this.insertText("	");
    });
    this.globalEvent.getEnterKeyTarget().addEventListener("enterKeyTarget", () => {
      this.insertText();
      this.keyword = "";
    });
  }
  // 根据输入信息渲染候选字列表
  sssociationwordsbar() {
    const associationStr = this.dictionary && this.keyword && this.dictionary[this.keyword] || null;
    this.current = 1;
    if (associationStr) {
      this.assoArr = associationStr.split("");
      this.total = this.assoArr.length;
      this.getArrowAction();
      this.setAssociationBar(this.assoArr);
    }
  }
  // 判断左右箭头行为
  getArrowAction() {
    this.setArrowStatus(this.prvKey, 0, this.current > 1);
    this.setArrowStatus(
      this.nextKey,
      1,
      Math.ceil(this.total / (this.current * this.limit)) > 1
    );
  }
  // 设置箭头状态
  setArrowStatus(arrow, foaward, allowed) {
    allowed ? arrow == null ? void 0 : arrow.classList.remove(
      foaward ? "arrow-right_disabled" : "arrow-left_disabled"
    ) : arrow == null ? void 0 : arrow.classList.add(
      foaward ? "arrow-right_disabled" : "arrow-left_disabled"
    );
  }
  // 设置预选字列表
  setAssociationBar(assoArr) {
    const currentArr = assoArr.slice(
      (this.current - 1) * this.limit,
      this.current * this.limit
    );
    if (currentArr.length) {
      this.candidateListEl.querySelectorAll(".word_wapper").forEach((ele, index) => {
        if (ele instanceof HTMLElement) {
          if (currentArr[index]) {
            ele.innerText = currentArr[index];
            ele.style.pointerEvents = "auto";
          } else {
            ele.innerText = "";
            ele.style.pointerEvents = "none";
          }
        }
      });
    } else {
      this.candidateListEl.querySelectorAll(".word_wapper").forEach((ele) => {
        if (ele instanceof HTMLElement) {
          ele.innerText = "";
          ele.style.pointerEvents = "none";
        }
      });
    }
  }
  // 联想部分点击事件
  associationClickEvent(target, keyCode) {
    switch (keyCode) {
      case -10:
        this.keyword = "";
        this.setAssociationText("");
        break;
      case -11:
        this.insertText();
        this.keyword = "";
        break;
      case -12:
        if (target instanceof HTMLElement) {
          if (SnowKeyboard.inputEl instanceof HTMLInputElement) {
            target.innerText && this.insertText(target.innerText);
            this.keyword = "";
          }
        }
        break;
      case -14:
      case -15:
        this.current = keyCode == -14 ? this.current - 1 : this.current + 1;
        this.getArrowAction();
        this.setAssociationBar(this.assoArr);
        break;
    }
  }
  // 根据光标位置插入内容
  insertText(input = "") {
    var _a, _b;
    const [text, range] = computeInputSelection(
      "insert",
      SnowKeyboard.inputEl,
      input || this.keyword
    );
    ((_a = SnowKeyboard.inputEl) == null ? void 0 : _a.value) != void 0 && dispatchInput(SnowKeyboard.inputEl, text);
    (_b = SnowKeyboard.inputEl) == null ? void 0 : _b.setSelectionRange(range[0], range[1]);
  }
  // 删除所有内容
  // public clearText() {
  //   console.log('clearText', this.inputEl.innerText, this.keyword)
  //   if (this.inputEl instanceof HTMLInputElement) {
  //     this.associationClickEvent(this.inputEl, -10)
  //   }
  // }
  // 删除一位联想部分字符
  deleteAssociationText() {
    this.inputEl.innerText = this.keyword = this.keyword.slice(0, -1);
    if (!this.keyword)
      return this.setAssociationBar([]);
    this.sssociationwordsbar();
  }
  // 联想部分是否为空
  hasAssociationKeyword() {
    return !this.keyword;
  }
  // 获取联想部分
  getAssociationEl() {
    return this.associationEl;
  }
  // 获取联想部分
  clearAssociationKeyword() {
    return this.keyword = "";
  }
  // 设置联想部分文字
  setAssociationText(text) {
    if (this.keyword.length > this.limit)
      return;
    this.keyword += text;
    this.inputEl.innerText = this.keyword;
  }
  // 设置联想部分添加空格
  spaceAssociationText() {
    this.insertText(" ");
  }
  // input左键光标移动
  moveCursor(forward) {
    moveCursor(SnowKeyboard.inputEl, forward);
  }
  // 切换输入法时 设置当前字典信息
  setDictionary(dictionary) {
    this.dictionary = dictionary;
    this.keyword = "";
    console.log("setDictionary");
    this.setAssociationBar([]);
  }
}
class GlobalEvent {
  constructor() {
    this.clickKeyTarget = new EventTarget();
    this.closeTarget = new EventTarget();
    this.inputTarget = new EventTarget();
    this.candidateListTarget = new EventTarget();
    this.prvKeyTarget = new EventTarget();
    this.nextKeyTarget = new EventTarget();
    this.backSpaceKeyTarget = new EventTarget();
    this.caplockKeyTarget = new EventTarget();
    this.enterKeyTarget = new EventTarget();
    this.deleteKeyTarget = new EventTarget();
    this.shiftKeyTarget = new EventTarget();
  }
  getClickKeyTarget() {
    return this.clickKeyTarget;
  }
  getCloseTarget() {
    return this.closeTarget;
  }
  getInputTarget() {
    return this.inputTarget;
  }
  getCandidateListTarget() {
    return this.candidateListTarget;
  }
  getPrvKeyTarget() {
    return this.prvKeyTarget;
  }
  getNextKeyTarget() {
    return this.nextKeyTarget;
  }
  getBackSpaceKeyTarget() {
    return this.backSpaceKeyTarget;
  }
  getEnterKeyTarget() {
    return this.enterKeyTarget;
  }
  getCaplockKeyTarget() {
    return this.caplockKeyTarget;
  }
  getDeleteKeyTarget() {
    return this.deleteKeyTarget;
  }
  getShiftKeyTarget() {
    return this.shiftKeyTarget;
  }
}
const ZH_PINYIN_DICT = {
  // 常用模糊音
  b: "不本被北报宝必波博布步碧",
  c: "茶插擦差察才猜菜踩采彩仓",
  d: "的大到道地东低底读堵顿独渡",
  f: "非飞肺废封扶浮幅覆富符繁缚佛防",
  g: "共工公告构更供关管观果国光郭固干",
  h: "和好后会活话海黄红花行户火湖河",
  i: "一以已义意医易益衣艺宜伊翼异夷",
  j: "加家机接间件健见建进江教军九记",
  k: "可空科口快考靠扣抗块苦库裤宽",
  l: "了来离里利量理连类路流领六楼绿",
  m: "们美没民面名明目母麻密秘幕迷",
  n: "你年南内能女牛农逆难拿脑怒纳",
  p: "平品批盘片配评派迫破普朋票皮",
  q: "其起前清亲钱气强求秋区取七权",
  r: "如人入热日容染任认软润绕仁",
  s: "是山上生事少说时手使实社四",
  t: "同天头听调体通提题图土退停 ",
  u: "有与于优育语玉遇愉宇雨愚渔",
  v: "无为文位微违唯维卫围伟委威",
  w: "我问位无五物务武晚文王微卧",
  x: "下向性学新心先选修幸相现小",
  y: "一有以与也要样业院月阳音运",
  z: "在中主之重装做子自至资字组",
  // 拼音
  a: "啊阿呵嗄锕",
  ai: "埃挨哎唉哀艾皑蔼矮碍爱隘癌",
  an: "鞍氨安俺按暗岸胺案",
  ang: "肮昂盎",
  ao: "凹敖熬翱袄傲奥懊澳",
  ba: "八巴疤拔罢扒爸叭吧捌跋靶把坝笆芭霸耙",
  bai: "白摆佰败拜柏百稗伯",
  ban: "斑班搬扳颁板版扮拌伴瓣半办绊般",
  bang: "邦帮梆榜绑棒镑傍谤膀磅蚌",
  bao: "苞胞包褒雹保饱宝抱报豹鲍爆剥薄暴刨炮曝瀑堡",
  bei: "杯碑悲卑北辈背贝钡倍狈备惫焙被",
  ben: "奔苯本笨",
  beng: "崩绷甭泵蹦迸蚌",
  bi: "逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必壁避陛辟臂秘",
  bian: "鞭边编贬变卞辨辩辫扁便遍",
  biao: "标彪表飙婊裱膘镖鳔",
  bie: "别憋瘪鳖",
  bin: "彬斌濒鬓滨宾摈缤殡",
  bing: "兵冰柄丙秉饼炳病并屏",
  bo: "玻菠播拨钵博勃搏铂箔帛舶脖膊渤驳柏剥薄波泊卜般伯",
  bu: "捕哺补埠布步簿部怖卜不埔堡",
  ca: "擦",
  cai: "猜裁材才财睬踩采彩菜蔡",
  can: "餐残惭惨灿蚕参掺",
  cang: "苍舱仓沧藏",
  cao: "操糙槽曹草",
  ce: "策册测厕侧",
  cen: "参岑涔",
  ceng: "层蹭曾",
  cha: "插叉茶碴搽察岔诧茬查刹喳差",
  chai: "柴豺拆差",
  chan: "搀蝉馋谗缠铲产阐颤掺单",
  chang: "昌猖场尝常偿肠厂畅唱倡长敞裳",
  chao: "超抄钞潮巢吵炒朝嘲绰剿",
  che: "扯撤掣彻澈车",
  chen: "郴臣辰尘晨忱沉陈趁衬橙沈称秤",
  cheng: "撑城成呈程惩诚承逞骋橙乘澄盛称秤",
  chi: "痴持池迟弛驰耻齿侈赤翅斥炽吃匙尺",
  chong: "充冲崇宠虫重",
  chou: "抽酬畴踌稠愁筹仇绸瞅丑臭",
  chu: "初出橱厨躇锄雏滁除楚础储矗搐触处畜",
  chuai: "揣",
  chuan: "川穿椽船喘串传",
  chuang: "疮窗床闯创",
  chui: "吹炊捶锤垂椎",
  chun: "春椿醇唇淳纯蠢",
  chuo: "戳绰",
  ci: "疵茨磁雌辞慈瓷词此刺赐次伺兹差",
  cong: "聪葱囱匆从丛",
  cou: "凑",
  cu: "粗醋簇促卒",
  cuan: "蹿篡窜攒",
  cui: "摧崔催脆瘁粹淬翠",
  cun: "村存寸",
  cuo: "磋搓措挫错撮",
  da: "搭达答瘩打大",
  dai: "歹傣戴带殆代贷袋待逮怠大呆",
  dan: "耽担丹郸胆旦氮但惮淡诞蛋掸弹石单",
  dang: "当挡党荡档",
  dao: "刀捣蹈倒岛祷导到稻悼道盗",
  de: "德得的地",
  dei: "",
  deng: "蹬灯登等瞪凳邓澄",
  di: "低滴迪敌笛狄涤嫡抵蒂第帝弟递缔的堤翟底地提",
  dian: "颠掂滇碘点典靛垫电甸店惦奠淀殿佃",
  diao: "碉叼雕凋刁掉吊钓调",
  die: "跌爹碟蝶迭谍叠",
  ding: "盯叮钉顶鼎锭定订丁",
  diu: "丢",
  dong: "东冬董懂动栋冻洞侗恫",
  dou: "兜抖斗陡豆逗痘都",
  du: "督毒犊独堵睹赌杜镀肚渡妒都读度",
  duan: "端短锻段断缎",
  dui: "兑队对堆",
  dun: "墩吨钝遁蹲敦顿囤盾",
  duo: "掇哆多夺垛躲朵跺剁惰度舵堕",
  e: "峨鹅俄额讹娥厄扼遏鄂饿阿蛾恶哦",
  en: "恩",
  er: "而耳尔饵洱二贰儿",
  fa: "发罚筏伐乏阀法珐",
  fan: "藩帆翻樊矾钒凡烦反返范贩犯饭泛番繁",
  fang: "坊芳方肪房防妨仿访纺放",
  fei: "菲非啡飞肥匪诽吠肺废沸费",
  fen: "芬酚吩氛分纷坟焚汾粉奋份忿愤粪",
  feng: "丰封枫蜂峰锋风疯烽逢缝讽奉凤冯",
  fo: "佛",
  fou: "否",
  fu: "夫敷肤孵扶辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐佛拂脯",
  ga: "噶嘎夹咖",
  gai: "该改概钙溉盖芥",
  gan: "干甘杆柑竿肝赶感秆敢赣乾",
  gang: "冈刚钢缸肛纲岗港杠扛",
  gao: "篙皋高膏羔糕搞稿镐告",
  ge: "哥歌搁戈鸽疙割葛格阁隔铬个各胳革蛤咯",
  gei: "给",
  gen: "根跟",
  geng: "耕更庚羹埂耿梗粳颈",
  gong: "工攻功恭龚供躬公宫弓巩拱贡共汞",
  gou: "钩勾沟苟狗垢构购够",
  gu: "辜菇咕箍估沽孤姑古蛊骨股故顾固雇鼓谷贾",
  gua: "刮瓜剐寡挂褂卦呱栝鸹",
  guai: "乖拐怪掴",
  guan: "棺关官冠观管馆罐惯灌贯纶",
  guang: "光逛广犷咣胱",
  gui: "瑰规圭归闺轨鬼诡癸桂柜跪贵刽硅傀炔龟",
  gun: "辊滚棍",
  guo: "锅郭国果裹过涡",
  ha: "蛤哈",
  hai: "骸孩海氦亥害骇还咳",
  han: "酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉",
  hang: "杭航夯吭巷行",
  hao: "壕嚎豪毫郝好耗号浩镐貉",
  he: "喝荷菏禾何盒阂河赫褐鹤贺核合涸吓呵貉和",
  hei: "黑嘿",
  hen: "痕很狠恨",
  heng: "亨横衡恒哼行",
  hong: "轰哄烘虹鸿洪宏弘红",
  hou: "喉侯猴吼厚候后",
  hu: "呼乎忽瑚壶葫胡蝴狐糊湖弧虎护互沪户唬和",
  hua: "花华猾画化话哗滑划",
  huai: "怀徊坏槐淮踝",
  huan: "欢环桓缓换患唤痪豢焕涣宦幻还",
  huang: "荒慌黄磺蝗簧皇凰惶煌晃幌恍谎",
  hui: "灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽烩汇讳诲绘会",
  hun: "昏婚魂浑混荤婫",
  huo: "活伙火获或惑霍货祸豁和",
  ji: "击圾基机畸积箕肌饥迹激讥鸡姬绩吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎剂悸济寄寂计记既忌际妓继纪给稽缉祭藉期奇齐系",
  jia: "嘉枷佳加荚颊甲钾假稼架驾嫁夹贾价搅茄缴家",
  jian: "歼监坚尖笺间煎兼肩艰奸缄茧检柬碱拣捡简俭剪减荐鉴践贱键箭件健舰剑饯渐溅涧建槛见浅",
  jiang: "僵姜浆江疆蒋桨奖讲匠酱将降强",
  jiao: "椒礁焦胶交郊浇骄娇脚教轿较叫窖蕉嚼搅铰狡饺绞酵觉校矫侥角缴剿",
  jie: "揭接皆秸街阶截劫节杰捷睫竭洁结姐戒界借介疥诫届桔解藉芥",
  jin: "巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲",
  jing: "荆兢茎睛晶鲸京惊精经井警静境敬镜径痉靖竟竞净劲粳景颈",
  jiong: "炯窘囧炅迥",
  jiu: "揪究纠玖韭久灸九酒厩救旧臼舅咎就疚",
  ju: "鞠拘狙疽驹菊局矩举沮聚拒据巨具距踞锯俱惧炬剧车桔居咀句蛆足",
  juan: "捐鹃娟倦眷绢卷圈",
  jue: "撅攫抉掘倔爵决诀绝嚼觉角",
  jun: "菌钧军君峻俊竣郡骏均浚",
  ka: "喀咖卡咯",
  kai: "开揩凯慨楷",
  kan: "刊堪勘坎砍看槛嵌",
  kang: "康慷糠抗亢炕扛",
  kao: "考拷烤靠",
  ke: "坷苛柯棵磕颗科可渴克刻客课壳呵咳",
  ken: "肯啃垦恳",
  keng: "坑吭",
  kong: "空恐孔控",
  kou: "抠口扣寇",
  ku: "枯哭窟苦酷库裤",
  kua: "夸垮挎跨胯",
  kuai: "块筷侩快会",
  kuan: "宽款",
  kuang: "匡筐狂框矿眶旷况",
  kui: "亏盔岿窥葵奎魁馈愧傀溃",
  kun: "坤昆捆困",
  kuo: "扩廓阔括",
  la: "垃拉喇辣啦蜡腊落",
  lai: "莱来赖",
  lan: "婪栏拦篮阑兰澜谰揽览懒缆烂滥蓝",
  lang: "琅榔狼廊郎朗浪",
  lao: "捞劳牢老佬涝姥酪烙潦落",
  le: "了乐勒肋",
  lei: "雷镭蕾磊累儡垒擂类泪勒肋",
  leng: "楞冷棱",
  li: "厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利例俐痢立粒沥隶力璃哩",
  lia: "",
  lian: "联莲连镰廉涟帘敛脸链恋炼练怜",
  liang: "粮凉梁粱良两辆量晾亮谅俩",
  liao: "撩聊僚疗燎寥辽撂镣廖料潦了",
  lie: "列裂烈劣猎",
  lin: "琳林磷霖临邻鳞淋凛赁吝拎",
  ling: "玲菱零龄铃伶羚凌灵陵岭领另令棱怜",
  liu: "溜琉榴硫馏留刘瘤流柳六陆",
  long: "龙聋咙笼窿隆垄拢陇弄",
  lou: "楼娄搂篓漏陋露",
  lu: "芦卢颅庐炉掳卤虏鲁麓路赂鹿潞禄录戮吕六碌露陆绿",
  luan: "峦挛孪滦卵乱",
  lun: "抡轮伦仑沦论纶",
  luo: "萝螺罗逻锣箩骡裸洛骆烙络落咯",
  lv: "驴铝侣旅履屡缕虑氯律滤绿率",
  lve: "掠略",
  ma: "妈麻玛码蚂马骂嘛吗摩抹么",
  mai: "买麦卖迈埋脉",
  man: "瞒馒蛮满曼慢漫谩埋蔓",
  mang: "茫盲氓忙莽芒",
  mao: "猫茅锚毛矛铆卯茂帽貌贸冒",
  me: "么庅嚒",
  mei: "玫枚梅酶霉煤眉媒镁每美昧寐妹媚没糜",
  men: "门闷们焖扪懑",
  meng: "萌蒙檬锰猛梦孟盟",
  mi: "眯醚靡迷弥米觅蜜密幂糜谜泌秘",
  mian: "棉眠绵冕免勉缅面娩",
  miao: "苗描瞄藐秒渺庙妙",
  mie: "蔑灭咩滅",
  min: "民抿皿敏悯闽",
  ming: "明螟鸣铭名命",
  miu: "谬缪",
  mo: "摸摹蘑膜磨魔末莫墨默沫漠寞陌脉没模摩抹",
  mou: "谋某牟",
  mu: "拇牡亩姆母墓暮幕募慕木目睦牧穆姥模牟",
  na: "拿钠纳呐那娜哪",
  nai: "氖乃奶耐奈哪",
  nan: "南男难",
  nang: "囊馕攮",
  nao: "挠脑恼闹淖",
  ne: "呢哪讷那呐",
  nei: "馁内那哪",
  nen: "嫩恁",
  neng: "能",
  ni: "妮霓倪泥尼拟你匿腻逆溺呢",
  nian: "蔫拈年碾撵捻念粘",
  niang: "娘酿",
  niao: "鸟尿袅",
  nie: "捏聂孽啮镊镍涅",
  nin: "您",
  ning: "柠狞凝宁拧泞",
  niu: "牛扭钮纽",
  nong: "脓浓农弄",
  nu: "奴怒努",
  nuan: "暖暧煖",
  nuo: "挪懦糯诺娜",
  nv: "女钕",
  nve: "虐疟",
  o: "哦噢喔",
  ou: "欧鸥殴藕呕偶沤区",
  pa: "啪趴爬帕怕扒耙琶",
  pai: "拍排牌徘湃派迫",
  pan: "攀潘盘磐盼畔判叛番胖般",
  pang: "乓庞耪膀磅旁胖",
  pao: "抛咆袍跑泡刨炮",
  pei: "呸胚培裴赔陪配佩沛坏",
  pen: "喷盆",
  peng: "砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰",
  pi: "坯砒霹批披劈琵毗啤脾疲皮痞僻屁譬辟否匹坏",
  pian: "篇偏片骗扁便",
  piao: "飘漂瓢票朴",
  pie: "撇瞥丿苤氕潎",
  pin: "拼频贫品聘",
  ping: "乒坪萍平凭瓶评苹屏",
  po: "坡泼颇婆破粕泊迫魄朴",
  pou: "剖抔",
  pu: "扑铺仆莆葡菩蒲圃普浦谱脯埔曝瀑堡朴",
  qi: "欺戚妻七凄柒沏棋歧崎脐旗祈祁骑起岂乞企启器气迄弃汽讫稽缉期栖其奇畦齐砌泣漆契",
  qia: "掐卡洽",
  qian: "牵扦钎千迁签仟谦黔钱钳前潜遣谴堑欠歉铅乾浅嵌纤",
  qiang: "枪呛腔羌墙蔷抢强",
  qiao: "锹敲悄桥乔侨巧撬翘峭俏窍壳橇瞧鞘雀",
  qie: "切窃砌茄且怯",
  qin: "钦侵秦琴勤芹擒禽寝亲沁",
  qing: "青轻氢倾卿清擎晴氰情顷请庆亲",
  qiong: "琼穷穹",
  qiu: "秋丘邱球求囚酋泅",
  qu: "趋曲躯屈驱渠取娶龋去区蛆趣",
  quan: "颧权醛泉全痊拳犬券劝卷圈",
  que: "缺瘸却鹊榷确炔雀",
  qun: "裙群",
  ran: "然燃冉染",
  rang: "瓤壤攘嚷让",
  rao: "饶扰绕",
  re: "惹热",
  ren: "壬仁人忍韧任认刃妊纫",
  reng: "扔仍",
  ri: "日",
  rong: "戎茸蓉荣融熔溶容绒冗",
  rou: "揉柔肉糅蹂",
  ru: "茹儒孺如辱乳汝入褥蠕",
  ruan: "软阮朊",
  rui: "蕊瑞锐",
  run: "闰润",
  ruo: "弱若",
  sa: "撒洒萨",
  sai: "腮鳃赛塞",
  san: "三叁伞散",
  sang: "桑嗓丧搡",
  sao: "搔骚扫嫂梢",
  se: "瑟涩塞色",
  sen: "森",
  seng: "僧",
  sha: "砂杀沙纱傻啥煞莎刹杉厦",
  shai: "筛晒色",
  shan: "珊苫山删煽衫闪陕擅赡膳善汕扇缮杉栅掺单",
  shang: "墒伤商赏晌上尚裳汤",
  shao: "捎稍烧芍勺韶少哨邵绍鞘梢召",
  she: "奢赊舌舍赦摄慑涉社设蛇拾折射",
  shei: "",
  shen: "砷申呻伸身深绅神审婶肾慎渗沈甚参娠什",
  sheng: "声生甥牲升绳剩胜圣乘省盛",
  shi: "师失狮施湿诗尸虱十时蚀实史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰市恃室视试匙石拾食识氏似嘘殖峙什",
  shou: "收手首守寿授售受瘦兽熟",
  shu: "蔬枢梳殊抒输叔舒淑疏书赎孰薯暑曙署蜀黍鼠述树束戍竖墅庶漱恕熟属术数",
  shua: "刷耍",
  shuai: "摔甩帅衰率",
  shuan: "栓拴",
  shuang: "霜双爽",
  shui: "水睡税谁说",
  shun: "顺瞬舜吮",
  shuo: "说硕朔烁数槊",
  si: "斯撕嘶私司丝死肆寺嗣四饲巳食思伺似",
  song: "松耸怂颂送宋讼诵",
  sou: "搜擞嗽艘",
  su: "苏酥俗素速粟僳塑溯诉肃宿缩",
  suan: "酸蒜算",
  sui: "虽隋随绥髓碎岁穗遂隧祟尿",
  sun: "孙损笋",
  suo: "蓑梭唆琐索锁所莎缩",
  ta: "塌他它她獭挞蹋踏塔拓",
  tai: "胎苔抬台泰酞太态汰",
  tan: "坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭弹",
  tang: "塘搪堂棠膛唐糖躺淌趟烫敞汤倘",
  tao: "掏涛滔绦萄桃逃淘讨套陶",
  te: "特",
  teng: "藤腾疼誊",
  ti: "梯剔踢锑题蹄啼体替嚏惕涕剃屉提",
  tian: "天添填田甜恬舔腆蚕",
  tiao: "挑条迢眺跳调",
  tie: "贴铁帖",
  ting: "厅烃汀廷停亭庭挺艇听",
  tong: "通桐酮瞳同铜彤童桶捅筒统痛侗恫",
  tou: "偷投头透",
  tu: "秃突图徒途涂屠土吐兔凸余",
  tuan: "湍团",
  tui: "推颓腿蜕退褪",
  tun: "吞屯臀囤",
  tuo: "拖托脱鸵陀驼椭妥唾驮拓",
  wa: "挖哇蛙洼娃瓦袜",
  wai: "歪外",
  wan: "豌弯湾玩顽丸烷完碗挽晚惋婉腕蔓皖宛万",
  wang: "汪王枉网往旺望忘妄亡",
  wei: "威巍微危韦违桅围唯惟为潍维苇萎委伟伪纬未味畏胃喂魏位渭谓慰卫尾蔚尉",
  wen: "瘟温蚊文闻纹吻稳紊问",
  weng: "嗡翁瓮",
  wo: "挝蜗窝我斡卧握沃涡",
  wu: "巫呜钨乌污诬屋芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误恶无",
  xi: "昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯汐犀檄袭席习媳喜隙细栖溪铣洗系戏",
  xia: "瞎匣霞辖暇峡侠狭下虾厦夏吓",
  xian: "掀锨先仙鲜咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线铣纤",
  xiang: "相厢镶香箱襄湘乡翔祥详想响享项橡像向象降巷",
  xiao: "萧硝霄哮销消宵晓小孝肖啸笑效削嚣淆校",
  xie: "楔些歇鞋协携胁谐写械卸蟹懈泄泻谢屑解蝎挟邪斜血叶契",
  xin: "薪芯锌欣辛新忻心衅信",
  xing: "星腥猩惺兴刑型形邢醒幸杏性姓省行",
  xiong: "兄凶胸匈汹雄熊",
  xiu: "休修羞朽嗅锈秀袖绣臭宿",
  xu: "墟需虚须徐许蓄酗叙旭序恤絮婿绪续戌嘘畜吁",
  xuan: "轩喧宣悬旋玄选癣眩绚",
  xue: "靴薛学穴雪削血",
  xun: "勋熏循旬询驯巡殉汛训讯逊迅浚寻",
  ya: "压押鸦鸭呀丫牙蚜衙涯雅哑亚讶芽崖轧",
  yan: "焉阉淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验铅咽烟殷",
  yang: "殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾",
  yao: "邀腰妖瑶摇尧遥窑谣姚咬舀药要耀约钥侥",
  ye: "椰噎耶爷野冶也页业夜咽掖叶腋液拽曳",
  yi: "一壹医揖铱依伊衣颐夷移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎遗屹",
  yin: "茵荫因音阴姻吟银淫寅饮尹引隐印殷",
  ying: "英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映",
  yo: "哟",
  yong: "拥佣臃痈庸雍踊蛹咏泳永恿勇用涌",
  you: "幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼",
  yu: "迂淤于盂榆虞愚舆逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁遇喻峪御愈欲狱誉浴寓裕预豫驭尉余俞吁育",
  yuan: "鸳渊冤元垣袁原援辕园圆猿源缘远苑愿怨院员",
  yue: "曰越跃岳粤月悦阅乐约钥",
  yun: "耘云郧匀陨允运蕴酝晕韵孕均员",
  za: "匝砸杂扎咱咋",
  zai: "栽哉灾宰载再在仔",
  zan: "暂赞攒咱",
  zang: "赃脏葬藏",
  zao: "遭糟藻枣早澡蚤躁噪造皂灶燥凿",
  ze: "责则泽择侧咋",
  zei: "贼",
  zen: "怎",
  zeng: "增憎赠曾综",
  zha: "渣札铡闸眨榨乍炸诈查扎喳栅柞轧咋",
  zhai: "斋债寨翟祭择摘宅窄侧",
  zhan: "瞻毡詹沾盏斩辗崭展蘸栈占战站湛绽颤粘",
  zhang: "樟章彰漳张掌涨杖丈帐账仗胀瘴障长",
  zhao: "招昭找沼赵照罩兆肇朝召爪着",
  zhe: "遮哲蛰辙者蔗浙折锗这着",
  zhei: "",
  zhen: "珍斟真甄砧臻贞针侦枕疹诊震振镇阵帧",
  zheng: "蒸挣睁征狰争怔整拯正政症郑证",
  zhi: "芝支蜘知肢脂汁之织职直植执值侄址指止趾只旨纸志挚掷至致置帜制智秩稚质炙痔滞治窒识枝吱殖峙",
  zhong: "中盅忠钟衷终肿仲众种重",
  zhou: "舟周州洲诌轴肘帚咒皱宙昼骤粥",
  zhu: "珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主柱助蛀贮铸筑住注祝驻属著",
  zhua: "抓爪",
  zhuai: "拽",
  zhuan: "专砖撰篆传转赚",
  zhuang: "桩庄装妆壮状幢撞",
  zhui: "锥追赘坠缀椎",
  zhun: "准谆",
  zhuo: "捉拙卓桌茁酌啄灼浊琢缴着",
  zi: "咨资姿滋淄孜紫籽滓子自渍字吱兹仔",
  zong: "鬃棕踪宗总纵综",
  zou: "邹走奏揍",
  zu: "租族祖诅阻组足卒",
  zuan: "钻纂",
  zui: "嘴醉最罪",
  zun: "尊遵樽撙鳟噂",
  zuo: "昨左佐做作坐座撮琢柞"
};
var Mode = /* @__PURE__ */ ((Mode2) => {
  Mode2["中"] = "zh";
  Mode2["英"] = "en";
  Mode2["日"] = "ri";
  Mode2["数字"] = "digital";
  return Mode2;
})(Mode || {});
const base_css_ts_vanilla = "";
class SnowKeyboard {
  constructor({ inputEl, theme, mode, type, size }) {
    this.focusTrigger = MouseTrigger.FOCUS;
    this.inputTrigger = MouseTrigger.INPUT;
    this.digitalKeyboard = null;
    this.fnKeyMap = /* @__PURE__ */ new Map();
    this.theme = "dark";
    this.mode = ModeType["FULL"];
    this.isDigital = false;
    this.type = Mode["英"];
    this.size = 16;
    this.showAssociation = false;
    this.shiftMode = false;
    this.capslockMode = false;
    this.focusHandler = (e) => {
      var _a, _b;
      console.log("focusHandler");
      const { target } = e, { type: type2, id } = target;
      if (type2 == "text" && (id == null ? void 0 : id.indexOf("keyboard-input")) >= 0) {
        if (this.mode === ModeType["FULL"])
          this.keyboard.toggleKeyboardShow(true);
        else if (this.mode === ModeType["DIGITAL"])
          (_a = this.digitalKeyboard) == null ? void 0 : _a.toggleDigitalKeyboardShow(true);
        (_b = SnowKeyboard.inputEl) == null ? void 0 : _b.addEventListener("blur", this.blurHandler);
      }
    };
    this.blurHandler = () => {
      var _a;
      console.log("blurHandler");
      if (this.mode === ModeType["FULL"]) {
        this.showAssociation = false;
        this.association.clearAssociationKeyword();
        this.keyboard.showCandidateWordWapper(false);
        this.keyboard.toggleKeyboardShow(false);
      } else if (this.mode === ModeType["DIGITAL"]) {
        (_a = this.digitalKeyboard) == null ? void 0 : _a.toggleDigitalKeyboardShow(false);
      }
    };
    this.keyboardHandler = (e) => {
      e.preventDefault();
      if (e.target instanceof HTMLElement) {
        const {
          dataset: { keycode, pri, sec }
        } = e.target;
        console.log("keycode keycode", keycode, this.fnKeyMap);
        const fn = this.fnKeyMap.get(Number(keycode));
        console.log("fn", fn);
        if (fn)
          return fn == null ? void 0 : fn.call(this, {});
        const text = this.shiftMode || this.capslockMode ? isSingleLetter(pri) ? pri == null ? void 0 : pri.toLocaleUpperCase() : sec : pri;
        if (isNaN(Number(keycode)) && !text)
          return;
        this.globalClickKeyEvent(e.target, this.type, Number(keycode), text);
      }
    };
    SnowKeyboard.inputEl = initInputEl(inputEl);
    console.log("SnowKeyboard.inputEl", SnowKeyboard.inputEl);
    this.theme = theme ?? this.theme;
    this.mode = mode ?? this.mode;
    this.type = type ?? this.type;
    this.size = size ?? this.size;
    const [layout, dictionary] = this.getLayoutAndDictionary(type);
    this.layout = layout;
    this.dictionary = dictionary;
    this.globalEvent = new GlobalEvent();
    this.keyboard = new Keyboard({
      mode: this.mode,
      size: this.size,
      layout: this.layout
      // theme:this.theme
    });
    this.digitalKeyboard = new Keyboard({
      mode: ModeType["DIGITAL"],
      size: this.size,
      layout: digitalLayout
    });
    this.association = new Association(this.globalEvent, this.dictionary);
    this.associationEl = this.association.getAssociationEl();
    const combineEle = combineElement(
      this.associationEl,
      this.keyboard.getKeyboardFirstEl()
    );
    if (combineEle && combineEle instanceof HTMLElement)
      this.keyboardEl = combineEle;
    this.keyboard.toggleKeyboardShow(false);
    this.digitalKeyboard.toggleDigitalKeyboardShow(false);
    console.log("combineEle", combineEle, this.keyboard);
    this.initEvent();
    this.setFnKeys();
  }
  // 初始化事件
  initEvent() {
    var _a, _b, _c;
    if (isTouchScreen()) {
      this.focusTrigger = TouchTrigger.FOCUS;
      this.inputTrigger = TouchTrigger.INPUT;
    }
    document.addEventListener(this.focusTrigger, this.focusHandler, true);
    (_a = this.keyboardEl) == null ? void 0 : _a.addEventListener(this.inputTrigger, this.keyboardHandler);
    (_c = (_b = this.digitalKeyboard) == null ? void 0 : _b.keyboardEl) == null ? void 0 : _c.addEventListener(
      this.inputTrigger,
      this.keyboardHandler
    );
  }
  // 设置功能键
  setFnKeys() {
    this.fnKeyMap.set(KeyCode.BACKSPACE, this.backSpaceEvent);
    this.fnKeyMap.set(KeyCode.TAB, this.tabEvent);
    this.fnKeyMap.set(KeyCode.CAPSLOCK, this.capslockEvent);
    this.fnKeyMap.set(KeyCode.ENTER, this.enterEvent);
    this.fnKeyMap.set(
      KeyCode.SHIFT,
      (e) => this.shfitEvent({ ...e, initShift: -1 })
    );
    this.fnKeyMap.set(KeyCode.DELETE, this.deleteEvent);
    this.fnKeyMap.set(KeyCode.SPACE, this.spaceEvent);
    this.fnKeyMap.set(KeyCode.LEFT, this.leftEvent);
    this.fnKeyMap.set(KeyCode.RIGHT, this.rightEvent);
    this.fnKeyMap.set(KeyCode.DIGITAL, this.digitalEvent);
    this.fnKeyMap.set(KeyCode.MODE, this.changeModeEvent);
  }
  // 初始全局按键事件
  globalClickKeyEvent(target, type, keyCode, text) {
    if (type == Mode["中"] && !this.isDigital) {
      this.globalEvent.getClickKeyTarget().dispatchEvent(
        new CustomEvent("clickKeyTarget", {
          detail: { target, keyCode, pri: text }
        })
      );
      if (!this.showAssociation) {
        this.showAssociation = true;
        this.keyboard.showCandidateWordWapper(true);
      }
      if (this.association.hasAssociationKeyword()) {
        this.showAssociation = false;
        this.keyboard.showCandidateWordWapper(false);
      }
      return;
    }
    this.setInputValue(text);
  }
  // 初始化后退功能键事件
  backSpaceEvent() {
    this.globalEvent.getBackSpaceKeyTarget().dispatchEvent(new CustomEvent("backSpaceKeyTarget"));
    if (this.type == Mode["英"] && this.association.hasAssociationKeyword()) {
      this.showAssociation = false;
      this.keyboard.showCandidateWordWapper(false);
    }
  }
  // 初始化tab功能键事件
  tabEvent() {
    this.globalEvent.getCaplockKeyTarget().dispatchEvent(new CustomEvent("caplockKeyTarget"));
  }
  // 初始化capslock功能键事件
  capslockEvent() {
    if (this.shiftMode) {
      this.keyboard.toggleShiftKeys(
        this.capslockMode = this.shiftMode = false
      );
    } else {
      this.capslockMode = !this.capslockMode;
      this.keyboard.toggleKeys();
    }
  }
  // 初始化后退功能键事件
  enterEvent() {
    this.globalEvent.getEnterKeyTarget().dispatchEvent(new CustomEvent("enterKeyTarget"));
    if (this.type == Mode["英"] && this.showAssociation) {
      this.showAssociation = false;
      this.keyboard.showCandidateWordWapper(false);
    }
  }
  // 初始化shfit功能键事件
  // {
  //   initShift: -1
  // }:{
  //   initShift:boolean | number;
  // }
  shfitEvent({
    initShift = -1
  }) {
    var _a, _b;
    console.log("shfitEvent", initShift, this.isDigital, this.shiftMode);
    if (this.isDigital) {
      if (initShift !== -1) {
        (_a = this.digitalKeyboard) == null ? void 0 : _a.toggleShiftKeys(
          this.capslockMode ? this.shiftMode = this.capslockMode = initShift : this.shiftMode = initShift
        );
      } else
        (_b = this.digitalKeyboard) == null ? void 0 : _b.toggleShiftKeys(
          this.capslockMode ? this.shiftMode = this.capslockMode = false : this.shiftMode = !this.shiftMode
        );
      console.log("this.shiftMode", this.shiftMode, this.capslockMode);
    } else {
      if (initShift !== -1) {
        this.keyboard.toggleShiftKeys(
          this.capslockMode ? this.shiftMode = this.capslockMode = initShift : this.shiftMode = initShift
        );
      } else
        this.keyboard.toggleShiftKeys(
          this.capslockMode ? this.shiftMode = this.capslockMode = false : this.shiftMode = !this.shiftMode
        );
    }
  }
  // 初始化delete功能键事件
  deleteEvent() {
    this.association.deleteAssociationText();
  }
  // 初始化space功能键事件
  spaceEvent() {
    this.association.spaceAssociationText();
  }
  // 初始化left功能键事件
  leftEvent() {
    this.association.moveCursor(0);
  }
  // 初始化right功能键事件
  rightEvent() {
    this.association.moveCursor(1);
  }
  // 初始化切换数字功能键事件
  digitalEvent() {
    console.log("digitalEvent");
    this.switchDigitalLayout();
  }
  // 初始化输入法切换功能键事件
  changeModeEvent() {
    this.type = this.type == Mode["中"] ? Mode["英"] : Mode["中"];
    const [layout, dictionary] = this.getLayoutAndDictionary(this.type);
    console.log("changeModeEvent123123", this.type);
    this.shiftMode = false;
    this.keyboard.toggleShiftKeys(false);
    this.showAssociation = false;
    this.keyboard.showCandidateWordWapper(false);
    this.keyboard.setKeyboardMode(layout);
    this.association.setDictionary(dictionary);
  }
  // 输入框赋值
  setInputValue(text) {
    if (SnowKeyboard.inputEl instanceof HTMLInputElement) {
      this.association.insertText(text);
    }
  }
  // 根据初始化模式获取layout数据
  getLayoutAndDictionary(type) {
    switch (type) {
      case Mode["英"]:
        return [qwertyLayout, null];
      case Mode["中"]:
        return [qwertyZhLayout, ZH_PINYIN_DICT];
      case Mode["日"]:
        return [qwertyLayout, null];
      default:
        return [qwertyLayout, null];
    }
  }
  // 切换为数字按键键盘
  switchDigitalLayout() {
    var _a, _b;
    this.isDigital = !this.isDigital;
    this.mode = this.isDigital ? ModeType["DIGITAL"] : ModeType["FULL"];
    console.log("222", this.mode, this.digitalKeyboard, this.keyboard);
    if (this.mode === ModeType["DIGITAL"]) {
      this.layout = digitalLayout;
      this.dictionary = null;
      this.shfitEvent({ initShift: false });
      (_a = this.digitalKeyboard) == null ? void 0 : _a.toggleDigitalKeyboardShow(true);
      this.keyboard.toggleKeyboardShow(false);
    } else if (this.mode === ModeType["FULL"]) {
      const [layout, dictionary] = this.getLayoutAndDictionary(this.type);
      this.layout = layout;
      this.dictionary = dictionary;
      this.shfitEvent({ initShift: false });
      (_b = this.digitalKeyboard) == null ? void 0 : _b.toggleDigitalKeyboardShow(false);
      this.keyboard.toggleKeyboardShow(true);
    }
    return this.mode;
  }
}
export {
  BASE_DIGITAL_GRID_GAP,
  BASE_DIGITAL_WIDTH,
  BASE_GRID_GAP,
  BASE_WIDTH,
  KeyCode,
  Keyboard,
  Mode,
  MouseTrigger,
  SnowKeyboard,
  TouchTrigger,
  ZH_PINYIN_DICT,
  combineElement,
  computeBaeFont,
  computeInputSelection,
  createCandidateElement,
  createCandidateWordElement,
  createElement,
  createKeyButtonElement,
  createNestElement,
  digitalLayout,
  dispatchInput,
  initInputEl,
  isHTMLElement,
  isSingleLetter,
  isTouchScreen,
  moveCursor,
  qwertyLayout,
  qwertyZhLayout,
  removeAllGridItem,
  toggleCase
};
