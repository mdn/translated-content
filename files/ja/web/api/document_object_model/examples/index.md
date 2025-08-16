---
title: DOM を使用したウェブと XML の開発の例
slug: Web/API/Document_Object_Model/Examples
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{DefaultAPISidebar("DOM")}}

この章では、DOM を利用したウェブと XML 開発のより長い例をいくつか紹介します。可能な限りこれらの例ではドキュメントオブジェクトを操作する上でよく用いられる API や技法や JavaScript のパターンを利用しています。

## 例 1: 高さと幅

以下の例は、様々な寸法の画像について、`height` と `width` プロパティを使用しています。

```html
<p>
  画像 1: 高さ、幅、スタイル無し
  <img id="image1" src="https://www.mozilla.org/images/mozilla-banner.gif" />
</p>

<p>
  画像 2: height="50"、width="500"、スタイル無し
  <img
    id="image2"
    src="https://www.mozilla.org/images/mozilla-banner.gif"
    height="50"
    width="500" />
</p>

<p>
  画像 3: 高さと幅なし、style="height: 50px; width: 500px;"
  <img
    id="image3"
    src="https://www.mozilla.org/images/mozilla-banner.gif"
    style="height: 50px; width: 500px;" />
</p>

<div id="output"></div>
```

```js
const arrImages = [
  document.getElementById("image1"),
  document.getElementById("image2"),
  document.getElementById("image3"),
];

const objOutput = document.getElementById("output");
let strHtml = "<ul>";

for (const img of arrImages) {
  strHtml += `<li>image${i + 1}: height=${img.height}, width=${img.width}, style.height=${img.style.height}, style.width=${img.style.width}</li>`;
}

strHtml += "</ul>";

objOutput.innerHTML = strHtml;
```

{{EmbedLiveSample("example_1_height_and_width", "", "300")}}

## 例 2: 境界線の属性

```html
<div id="box"></div>

<form name="FormName">
  <button id="btn1">境界線を 20px 幅にする</button>
  <button id="btn2">境界線を 5px 幅にする</button>
</form>
```

```css
#box {
  border: 5px solid green;
  width: 100px;
  height: 100px;
}
```

```js
function setBorderWidth(width) {
  document.getElementById("box").style.borderWidth = `${width}px`;
}

document.getElementById("btn1").addEventListener("click", () => {
  setBorderWidth(20);
});
document.getElementById("btn2").addEventListener("click", () => {
  setBorderWidth(5);
});
```

{{EmbedLiveSample("example_2_border_styles", "", "200")}}

## 例 3: スタイルの操作

この簡単な例では、HTML の段落要素のいくつかの基本的なスタイルプロパティに、要素上のスタイルオブジェクトと、DOM から取得したり設定したりできるそのオブジェクトの CSS スタイルプロパティを使ってアクセスしています。この例では、個々のスタイルを直接操作しています。次の例 (例 4 参照) では、スタイルシートとそのルールを使って、文書全体のスタイルを変更することができます。

```html
<p id="pid">テキスト</p>
<form>
  <p><button type="button">テキストを変更</button></p>
</form>
```

```js
function changeText() {
  const p = document.getElementById("pid");

  p.style.color = "blue";
  p.style.fontSize = "18pt";
}

document.querySelector("button").addEventListener("click", () => {
  changeText();
});
```

{{EmbedLiveSample("example_3_manipulating_styles", "", "200")}}

## 例 4: スタイルシートの使用

{{domxref("document")}} オブジェクト上の {{domxref("document.styleSheets", "styleSheets")}} プロパティは、その文書に読み込まれたスタイルシートの一覧を返します。このページの例に示されているように、stylesheet、style、{{domxref("CSSRule")}} オブジェクトを利用して、これらのスタイルシートとその規則に個別にアクセスが可能です。そしてこの例では、すべてのスタイル規則のセレクターがコンソールへ表示されます。

```js
for (const styleSheet of document.styleSheets) {
  for (const rule of styleSheet.cssRules) {
    console.log(`${rule.selectorText}\n`);
  }
}
```

次の 3 つのルールが定義されている単一のスタイルシートを持つ文書の場合です。

```css
body {
  background-color: darkblue;
}
p {
  font-family: Arial;
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

このスクリプトは以下の項目を表示します。

```plain
BODY
P
#LUMPY
```

## 例 5: イベント伝播 (propagation)

この例は DOM でイベントが発生したときの対処方法を、ごく単純化して紹介します。下記の HTML 文書の BODY が読み込まれる時、イベントリスナーが TABLE の第 1 行を使って登録されます。イベントリスナーは関数 stopEvent を実行することでイベントを処理します。この関数は、table の一番下のセルの値を変更します。

しかし、stopEvent はまたイベントオブジェクトのメソッド {{domxref("event.stopPropagation")}} を呼び出します。このメソッドはイベントが発生してこれ以上 DOM に入り込むのを防止します。テーブル自体は、クリックされた時、メッセージを表示する必要のある {{domxref("Element/click_event","onclick")}} イベントハンドラーを備えています。しかし stopEvent メソッドは伝播を停止していますので、テーブル内のデータが更新された後では、イベントは効率的に終了し、これを確認するための警告ダイアログが表示されます。

```html
<table id="t-daddy">
  <tr id="tbl1">
    <td id="c1">one</td>
  </tr>
  <tr>
    <td id="c2">two</td>
  </tr>
</table>
```

```css
#t-daddy {
  border: 1px solid red;
}

#c1 {
  background-color: pink;
}
```

```js
function stopEvent(event) {
  const c2 = document.getElementById("c2");
  c2.textContent = "hello";

  // this ought to keep t-daddy from getting the click.
  event.stopPropagation();
  console.log("event propagation halted.");
}

const elem = document.getElementById("tbl1");
elem.addEventListener("click", stopEvent, false);

document.getElementById("t-daddy").addEventListener("click", () => {
  console.log("t-daddy clicked");
});
```

{{EmbedLiveSample("example_5_event_propagation", "", "300")}}

## 例 6: getComputedStyle

この例は、{{domxref("window.getComputedStyle")}} メソッドを使用して要素の `style` 属性あるいは JavaScript (例: `elt.style.backgroundColor="rgb(173 216 230)"`) で設定されていないスタイルを取得する方法を示します。後者の種類のスタイルは、もっと直接的な {{domxref("HTMLElement.style", "elt.style")}} プロパティを使って取得でき、そのプロパティは [DOM CSS プロパティ一覧](/ja/docs/Web/CSS/Reference)に挙げられています。

`getComputedStyle()` は {{domxref("CSSStyleDeclaration")}} オブジェクトを返し、下記のサンプルにあるように、このオブジェクトの {{domxref("CSSStyleDeclaration.getPropertyValue()", "getPropertyValue()")}} メソッドによって個々のスタイルプロパティを参照できます。

```html
<div id="d1">&nbsp;</div>

<form action="">
  <p>
    <button type="button">getComputedStyle</button>
    height<input id="t1" type="text" value="1" /> max-width<input
      id="t2"
      type="text"
      value="2" />
    bg-color<input id="t3" type="text" value="3" />
  </p>
</form>
```

```css
#d1 {
  margin-left: 10px;
  background-color: rgb(173 216 230);
  height: 20px;
  max-width: 20px;
}
```

```js
function cStyles() {
  const refDiv = document.getElementById("d1");
  const txtHeight = document.getElementById("t1");
  const hStyle = document.defaultView
    .getComputedStyle(refDiv, null)
    .getPropertyValue("height");

  txtHeight.value = hStyle;

  const txtWidth = document.getElementById("t2");
  const wStyle = document.defaultView
    .getComputedStyle(refDiv, null)
    .getPropertyValue("width");

  txtWidth.value = wStyle;

  const txtBackgroundColor = document.getElementById("t3");
  const bStyle = document.defaultView
    .getComputedStyle(refDiv, null)
    .getPropertyValue("background-color");

  txtBackgroundColor.value = bStyle;
}

document.querySelector("button").addEventListener("click", cStyles);
```

{{EmbedLiveSample("example_6_getComputedStyle", "", "300")}}

## 例 7: イベントオブジェクトのプロパティの表示

この例では、DOM メソッドを使って、 {{domxref("Window.load_event", "onload")}} [イベント](/ja/docs/Web/API/Event)オブジェクトのプロパティとそれらの値をすべて表として表示しています。また、オブジェクトのプロパティを反復し、それらの値を取得するために、[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループを使った役に立つテクニックをお見せします。

イベントオブジェクトのプロパティはブラウザーによって大きく異なります。 [WHATWG DOM Standard](https://dom.spec.whatwg.org/) に標準のプロパティが載っていますが、多くのブラウザーはこれらを大幅に拡張しています。

以下のコードをテキストファイルとして保存し、様々なブラウザーで読み込ませてみてください。プロパティの数や名称が異なることに驚かれることでしょう。ページにいくつか要素を追加して、異なるイベントハンドラーからこの関数を呼び出してみるのも良いでしょう。

```html
<h1>DOM <span id="eventType"></span> イベントオブジェクトのプロパティ</h1>
```

```css
table {
  border-collapse: collapse;
}
thead {
  font-weight: bold;
}
td {
  padding: 2px 10px 2px 10px;
}

.odd {
  background-color: #efdfef;
}
.even {
  background-color: #ffffff;
}
```

```js
function showEventProperties(e) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  const event = e || window.event;
  document.getElementById("eventType").textContent = event.type;

  const table = document.createElement("table");
  const thead = table.createTHead();
  let row = thead.insertRow(-1);
  const labelList = ["#", "Property", "Value"];
  const len = labelList.length;

  for (let i = 0; i < len; i++) {
    addCell(row, labelList[i]);
  }

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const p in event) {
    row = tbody.insertRow(-1);
    row.className = row.rowIndex % 2 ? "odd" : "even";
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, event[p]);
  }

  document.body.appendChild(table);
}

window.onload = (event) => {
  showEventProperties(event);
};
```

{{EmbedLiveSample("example_7_displaying_event_object_properties", "", "300")}}

## 例 8: DOM のテーブルインターフェイスの使用

DOM の {{domxref("HTMLTableElement")}} インターフェイスで、テーブルを生成、操作するための便利なメソッドがいくつか提供されています。よく利用される 2 つのメソッドは {{domxref("HTMLTableElement.insertRow")}} と {{domxref("HTMLTableRowElement.insertCell")}} です。

以下の例では、既存のテーブルに行といくつかのセルを追加しています。

```html
<table id="table0">
  <tr>
    <td>Row 0 Cell 0</td>
    <td>Row 0 Cell 1</td>
  </tr>
</table>
```

```js
const table = document.getElementById("table0");
const row = table.insertRow(-1);
let cell;
let text;

for (let i = 0; i < 2; i++) {
  cell = row.insertCell(-1);
  text = `Row ${row.rowIndex} Cell ${i}`;
  cell.appendChild(document.createTextNode(text));
}
```

{{EmbedLiveSample("example_8_using_the_dom_table_interface", "", "300")}}

### メモ

- テーブルの {{domxref("element.innerHTML","innerHTML")}} プロパティは、テーブル全体あるいはセルの内容を記述するために使うことはできますが、テーブルを操作するために使うべきではありません。
- DOM Core メソッドの {{domxref("document.createElement")}} と {{domxref("Node.appendChild")}} を使って行とセルを生成する場合、他のブラウザーでは table 要素に直接追加できる (行は最後の {{HTMLElement("tbody")}} 要素に追加される) のに対して、IE ではそれらを `<tbody>` 要素に対して追加する必要があります。
- [`HTMLTableElement` インターフェイス](/ja/docs/Web/API/HTMLTableElement#インスタンスメソッド)には、この他にも、テーブルを生成したり操作するのに利用できる多くの便利なメソッドがあります。
