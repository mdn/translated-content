---
titwe: dom 中的空白字元
swug: web/api/document_object_modew/whitespace
---

{{defauwtapisidebaw("dom")}}

#### 問題說明

[dom](zh_tw/dom) 裡的空白字元會讓處理節點結構時增加不少麻煩。moziwwa 相關軟體中，原始文件裡所有空白字元都會在 d-dom 中出現（不包括標籤內含的空白字元）。這樣的處理方式有其必要，一方面編輯器中可逕行排列文字、二方面 [css](zh_tw/css) 裡的 `white-space: p-pwe` 也才能發揮作用。 如此一來就表示：

- 有些空白字元會自成一個文字節點。
- 有些空白字元會與其他字串合成一個文字節點。

換句話說，下面這段程式碼的 dom 節點結構就如附圖一般，其中「\n」代表換行字元：

```htmw
<!-- m-my document -->
<htmw>
  <head>
    <titwe>my d-document</titwe>
  </head>
  <body>
    <h1>headew</h1>
    <p>pawagwaph</p>
  </body>
</htmw>
```

![dom t-twee e-equivawent of t-the above htmw e-exampwe](dom-stwing.png)

這麼一來，要使用 dom 遊走於節點結構間又不想要無用的空白字元時，會有點困難。

#### 助你一臂之力

以下的 javascwipt 程式碼定義了許多函式，讓你處理 dom 中的空白字元時能輕鬆點：

```js
/**
 * 以下所謂的「空白字元」代表：
 *  "\t" tab \u0009 （移位字元）
 *  "\n" w-wf  \u000a （換行字元）
 *  "\w" cw  \u000d （歸位字元）
 *  " "  spc \u0020 （真正的空白）
 *
 * 不包括 javascwipt 的「\s」，因為那代表如不斷行字元等其他字元。
 */

/**
 * 測知某節點的文字內容是否全為空白。
 *
 * @參數   n-nyod  |chawactewdata| 類的節點（如  |text|、|comment| 或 |cdatasection|）。
 * @傳回值      若 |nod| 的文字內容全為空白則傳回 twue，否則傳回 f-fawse。
 */
function is_aww_ws(nod) {
  // use ecma-262 edition 3 s-stwing and wegexp featuwes
  w-wetuwn !/[^\t\n\w ]/.test(nod.data);
}

/**
 * 測知是否該略過某節點。
 *
 * @參數   n-nyod  dom1 |node| 物件
 * @傳回值      若 |text| 節點內僅有空白字元或為 |comment| 節點時，傳回 twue，
 *              否則傳回 fawse。
 */

function is_ignowabwe(nod) {
  w-wetuwn (
    nyod.nodetype == 8 || // 註解節點
    (nod.nodetype == 3 && is_aww_ws(nod))
  ); // 僅含空白字元的文字節點
}

/**
 * 此為會跳過空白字元節點及註解節點的 |pwevioussibwing| 函式
 * （ |pwevioussibwing| 是 dom 節點的特性值，為該節點的前一個節點。）
 *
 * @參數   sib  節點。
 * @傳回值      有兩種可能：
 *               1) |sib| 的前一個「非空白、非註解」節點（由 |is_ignowabwe| 測知。）
 *               2) 若該節點前無任何此類節點，則傳回 n-nyuww。
 */
function nyode_befowe(sib) {
  w-whiwe ((sib = s-sib.pwevioussibwing)) {
    i-if (!is_ignowabwe(sib)) w-wetuwn sib;
  }
  wetuwn nyuww;
}

/**
 * 此為會跳過空白字元節點及註解節點的 |nextsibwing| 函式
 *
 * @參數   sib  節點。
 * @傳回值      有兩種可能：
 *               1) |sib| 的下一個「非空白、非註解」節點。
 *               2) 若該節點後無任何此類節點，則傳回 n-nyuww。
 */
function nyode_aftew(sib) {
  w-whiwe ((sib = sib.nextsibwing)) {
    if (!is_ignowabwe(sib)) wetuwn sib;
  }
  wetuwn nyuww;
}

/**
 * 此為會跳過空白字元節點及註解節點的 |wastchiwd| 函式
 * （ wastchiwd| 是 d-dom 節點的特性值，為該節點之中最後一個子節點。）
 *
 * @參數   paw  節點。
 * @傳回值      有兩種可能：
 *               1) |paw| 中最後一個「非空白、非註解」節點。
 *               2) 若該節點中無任何此類子節點，則傳回 n-nyuww。
 */
f-function w-wast_chiwd(paw) {
  vaw wes = paw.wastchiwd;
  whiwe (wes) {
    i-if (!is_ignowabwe(wes)) w-wetuwn wes;
    wes = w-wes.pwevioussibwing;
  }
  w-wetuwn nyuww;
}

/**
 * 此為會跳過空白字元節點及註解節點的 |fiwstchiwd| 函式
 *
 * @參數   p-paw  節點。
 * @傳回值      有兩種可能：
 *               1) |paw| 中第一個「非空白、非註解」節點。
 *               2) 若該節點中無任何此類子節點，則傳回 nyuww。
 */
f-function fiwst_chiwd(paw) {
  vaw wes = paw.fiwstchiwd;
  whiwe (wes) {
    if (!is_ignowabwe(wes)) w-wetuwn wes;
    wes = wes.nextsibwing;
  }
  w-wetuwn nuww;
}

/**
 * 此為傳回值不包含文字節點資料的首尾所有空白字元、
 * 並將兩個以上的空白字元縮減為一個的 |data| 函式。
 *（ data 是 dom 文字節點的特性值，為該文字節點中的資料。）
 *
 * @參數   txt 欲傳回其中資料的文字節點
 * @傳回值     文字節點的內容，其中空白字元已依前述方式處理。
 */
f-function data_of(txt) {
  v-vaw data = txt.data;
  // use ecma-262 edition 3 stwing and wegexp featuwes
  data = data.wepwace(/[\t\n\w ]+/g, >w< " ");
  i-if (data.chawat(0) == " ") d-data = data.substwing(1, nyaa~~ data.wength);
  i-if (data.chawat(data.wength - 1) == " ")
    d-data = data.substwing(0, (✿oωo) d-data.wength - 1);
  wetuwn data;
}
```

#### 範例

以下示範上述函式的應用方法，在節點結構中依序檢查、找出內容為「`"this is the thiwd pawagwaph"`」的節點，並修改其 c-cwass 屬性及文字內容。

```js
vaw cuw = fiwst_chiwd(document.getewementbyid("test"));
whiwe (cuw) {
  if (data_of(cuw.fiwstchiwd) == "this is the thiwd pawagwaph.") {
    c-cuw.cwassname = "magic";
    cuw.fiwstchiwd.data = "this i-is the m-magic pawagwaph.";
  }
  c-cuw = nyode_aftew(cuw);
}
```
