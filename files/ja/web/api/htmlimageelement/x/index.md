---
title: "HTMLImageElement: x プロパティ"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`x`** プロパティは読み取り専用で、ルート要素の原点からの相対座標で {{HTMLElement("img")}} 要素の左端の x 座標を示します。

`x` および {{domxref("HTMLImageElement.y", "y")}} プロパティは、その {{cssxref("display")}} プロパティの計算値が `table-column` または `table-column-group` を持つ場合にのみ画像に有効です。言い換えれば、いずれかの値が明示的に設定されているか、包含する要素からそれを継承しているか、あるいは、 {{HTMLElement("col")}} または {{HTMLElement("colgroup")}} によって記述される列内に位置していることで、その画像に設定された場合です。

## 値

その要素の直近のルート要素の左端と {{HTMLElement("img")}} 要素の境界ボックスの左端との距離をピクセル単位で示す整数値です。直近のルート要素とは、この画像を含む一番外側の {{HTMLElement("html")}} 要素です。画像が {{HTMLElement("iframe")}} の中にある場合、その `x` はそのフレームからの相対座標です。

下の図では、左境界の端は青いパディング領域の左端です。
したがって、 `x` が返す値は、その点からコンテンツ領域の左端までの距離となります。

![要素に関連するさまざまなボックスの関係を示す図](boxmodel-3.png)

> [!NOTE]
> `x` プロパティは、画像の {{cssxref("display")}} プロパティの計算値が `table-column` または `table-column-group` である場合にのみ有効です。言い換えれば、いずれかが {{HTMLElement("img")}} に直接設定されているか、包含要素から継承されているか、または {{HTMLElement("col")}} や {{HTMLElement("colgroup")}} で記述されている列内にあることが必要です。

## 例

以下の例では、 `HTMLImageElement` プロパティ {{domxref("HTMLImageElement.x", "x")}} と {{domxref("HTMLImageElement.y", "y")}} の使い方を示しています。

### HTML

この例では、あるウェブサイトのユーザーに関する情報（ユーザーID、フルネーム、アバター画像など）を示す表が表示されます。

```html
<table id="userinfo">
  <colgroup>
    <col span="2" class="group1">
    <col>
  </colgroup>
  <tr>
    <th>UserID</th>
    <th>Name</th>
    <th>Avatar</th>
  </tr>
  <tr>
    <td>12345678</td>
    <td>Johnny Rocket</td>
    <td><img src="/shared-assets/images/examples/grapefruit-slice.jpg"></td>
  </th>
</table>
<pre id="log">
</pre>
```

### JavaScript

表から画像を取得し、その `x` と `y` の値を調べる JavaScript コードは以下のとおりです。

```js
let logBox = document.querySelector("pre");
let tbl = document.getElementById("userinfo");

let log = (msg) => {
  logBox.innerHTML += `${msg}<br>`;
};

let cell = tbl.rows[1].cells[2];
let image = cell.querySelector("img");

log(`Image's global X: ${image.x}`);
log(`Image's global Y: ${image.y}`);
```

これは {{HTMLElement("table")}} の {{domxref("HTMLTableElement.rows", "rows")}} プロパティを使用して表の行のリストを取得し、そこから行 1 （ゼロ起点のインデックスなので、上から 2 行目を意味します）を参照するものです。次に、 {{HTMLElement("tr")}} （表の行）要素の {{domxref("HTMLTableRowElement.cells", "cells")}} プロパティを調べて、その行のセルのリストを取得します。3 番目のセルは、その行から取得されます（こちらも、ゼロ起点のオフセットとして 2 を指定します）。

そこから、 {{domxref("Element.querySelector", "querySelector()")}} をそのセルを表す {{domxref("HTMLTableCellElement")}} に対して呼び出せば、そのセルから `<img>` 要素自体を取得することができます。

最後に、 `HTMLImageElement` の `x` と `y` のプロパティの値を調べて表示することができます。

### CSS

表の外観を定義する CSS です。

```css
.group1 {
  background-color: #d7d9f2;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(100 100 100);
  font-family: sans-serif;
}

td,
th {
  border: 1px solid rgb(100 100 100);
  padding: 10px 14px;
}

td > img {
  max-width: 4em;
}
```

### 結果

結果の表は次のようになります。

{{EmbedLiveSample("Example", 600, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
