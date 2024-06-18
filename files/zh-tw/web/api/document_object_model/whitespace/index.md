---
title: DOM 中的空白字元
slug: Web/API/Document_Object_Model/Whitespace
---

{{DefaultAPISidebar("DOM")}}

#### 問題說明

[DOM](zh_tw/DOM) 裡的空白字元會讓處理節點結構時增加不少麻煩。Mozilla 相關軟體中，原始文件裡所有空白字元都會在 DOM 中出現（不包括標籤內含的空白字元）。這樣的處理方式有其必要，一方面編輯器中可逕行排列文字、二方面 [CSS](zh_tw/CSS) 裡的 `white-space: pre` 也才能發揮作用。 如此一來就表示：

- 有些空白字元會自成一個文字節點。
- 有些空白字元會與其他字串合成一個文字節點。

換句話說，下面這段程式碼的 DOM 節點結構就如附圖一般，其中「\n」代表換行字元：

```html
<!-- My document -->
<html>
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

![dom tree equivalent of the above HTML example](dom-string.png)

這麼一來，要使用 DOM 遊走於節點結構間又不想要無用的空白字元時，會有點困難。

#### 助你一臂之力

以下的 JavaScript 程式碼定義了許多函式，讓你處理 DOM 中的空白字元時能輕鬆點：

```js
/**
 * 以下所謂的「空白字元」代表：
 *  "\t" TAB \u0009 （移位字元）
 *  "\n" LF  \u000A （換行字元）
 *  "\r" CR  \u000D （歸位字元）
 *  " "  SPC \u0020 （真正的空白）
 *
 * 不包括 JavaScript 的「\s」，因為那代表如不斷行字元等其他字元。
 */

/**
 * 測知某節點的文字內容是否全為空白。
 *
 * @參數   nod  |CharacterData| 類的節點（如  |Text|、|Comment| 或 |CDATASection|）。
 * @傳回值      若 |nod| 的文字內容全為空白則傳回 true，否則傳回 false。
 */
function is_all_ws(nod) {
  // Use ECMA-262 Edition 3 String and RegExp features
  return !/[^\t\n\r ]/.test(nod.data);
}

/**
 * 測知是否該略過某節點。
 *
 * @參數   nod  DOM1 |Node| 物件
 * @傳回值      若 |Text| 節點內僅有空白字元或為 |Comment| 節點時，傳回 true，
 *              否則傳回 false。
 */

function is_ignorable(nod) {
  return (
    nod.nodeType == 8 || // 註解節點
    (nod.nodeType == 3 && is_all_ws(nod))
  ); // 僅含空白字元的文字節點
}

/**
 * 此為會跳過空白字元節點及註解節點的 |previousSibling| 函式
 * （ |previousSibling| 是 DOM 節點的特性值，為該節點的前一個節點。）
 *
 * @參數   sib  節點。
 * @傳回值      有兩種可能：
 *               1) |sib| 的前一個「非空白、非註解」節點（由 |is_ignorable| 測知。）
 *               2) 若該節點前無任何此類節點，則傳回 null。
 */
function node_before(sib) {
  while ((sib = sib.previousSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * 此為會跳過空白字元節點及註解節點的 |nextSibling| 函式
 *
 * @參數   sib  節點。
 * @傳回值      有兩種可能：
 *               1) |sib| 的下一個「非空白、非註解」節點。
 *               2) 若該節點後無任何此類節點，則傳回 null。
 */
function node_after(sib) {
  while ((sib = sib.nextSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * 此為會跳過空白字元節點及註解節點的 |lastChild| 函式
 * （ lastChild| 是 DOM 節點的特性值，為該節點之中最後一個子節點。）
 *
 * @參數   par  節點。
 * @傳回值      有兩種可能：
 *               1) |par| 中最後一個「非空白、非註解」節點。
 *               2) 若該節點中無任何此類子節點，則傳回 null。
 */
function last_child(par) {
  var res = par.lastChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.previousSibling;
  }
  return null;
}

/**
 * 此為會跳過空白字元節點及註解節點的 |firstChild| 函式
 *
 * @參數   par  節點。
 * @傳回值      有兩種可能：
 *               1) |par| 中第一個「非空白、非註解」節點。
 *               2) 若該節點中無任何此類子節點，則傳回 null。
 */
function first_child(par) {
  var res = par.firstChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.nextSibling;
  }
  return null;
}

/**
 * 此為傳回值不包含文字節點資料的首尾所有空白字元、
 * 並將兩個以上的空白字元縮減為一個的 |data| 函式。
 *（ data 是 DOM 文字節點的特性值，為該文字節點中的資料。）
 *
 * @參數   txt 欲傳回其中資料的文字節點
 * @傳回值     文字節點的內容，其中空白字元已依前述方式處理。
 */
function data_of(txt) {
  var data = txt.data;
  // Use ECMA-262 Edition 3 String and RegExp features
  data = data.replace(/[\t\n\r ]+/g, " ");
  if (data.charAt(0) == " ") data = data.substring(1, data.length);
  if (data.charAt(data.length - 1) == " ")
    data = data.substring(0, data.length - 1);
  return data;
}
```

#### 範例

以下示範上述函式的應用方法，在節點結構中依序檢查、找出內容為「`"This is the third paragraph"`」的節點，並修改其 class 屬性及文字內容。

```js
var cur = first_child(document.getElementById("test"));
while (cur) {
  if (data_of(cur.firstChild) == "This is the third paragraph.") {
    cur.className = "magic";
    cur.firstChild.data = "This is the magic paragraph.";
  }
  cur = node_after(cur);
}
```
