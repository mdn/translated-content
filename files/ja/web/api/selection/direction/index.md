---
title: "Selection: direction プロパティ"
short-title: direction
slug: Web/API/Selection/direction
l10n:
  sourceCommit: 99bd3264839f6d0b2ee5331078b5e2862cd5f0c1
---

{{APIRef("DOM")}}

**`direction`** は {{domxref("Selection")}} インターフェイスの読み取り専用プロパティで、現在の選択範囲の方向を表す文字列です。

この値は、ユーザーが選択範囲の境界点を指定する順序によって決まります。
たとえば、ユーザーが開始境界点をクリックし、カーソルをドラッグして、終了境界点でクリックを解除することで選択を行う場合があります。
終了境界点が開始点よりも文書内の後方に位置する場合、方向は「前方」(forward) となり、終了点が開始点よりも文書内の前方に位置する場合は「後方」(backward) となります。
ユーザーによって方向が示されていない場合、この値は「方向なし」(none) となります。たとえば、ユーザーが単語や要素をダブルクリックして選択を行った場合や、プログラムによって選択が行われた場合などがこれにあたります。

{{DOMxRef("Range.selectNode()")}} などのメソッドを使用して、選択範囲が変更されても、方向は変わりません。

## 値

現在の選択範囲の種類を記述する文字列。
取り得る値は以下の通りです。

- `backward`
  - : 選択が逆方向です。
- `forward`
  - : 選択は順方向です。
- `none`
  - : 選択が行われていないか、あるいは選択の方向性が定まっていません。

## 例

この例では、段落内で選択されたテキストの現在の方向をログに出力することで、`direction` プロパティの動作を確認することができます。

### HTML

この HTML は、選択可能なテキストを含む段落要素を表示するだけです。

```html
<p id="text-box">
  この段落のテキストを選択すると、選択方向を確認できます。
</p>
```

なお、ライブ例の作成ガイド、[単一の項目をログ出力](/ja/docs/MDN/Writing_guidelines/Page_structures/Live_samples#単一の項目をログ出力)のパターンに従った、「非表示」のログ入力ボックス（および関連するコード）も用意されている点にご注意ください。

```css hidden
#log {
  height: 50px;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

### JavaScript

```js hidden
const logElement = document.querySelector("#log");

function log(text) {
  logElement.innerText = text;
}
```

このコードは、`direction` プロパティが定義されているかどうかを確認し、定義されている場合は、[`selectionchange` イベント](/ja/docs/Web/API/Document/selectionchange_event) のリスナーを追加します。このリスナーは、現在の選択範囲を取得し、その方向をログに出力します。
このプロパティに対応していない場合、コードはその旨をログに出力し、選択対象となるテキストを非表示にします。

```js
const input = document.getElementById("text-box");

if ("direction" in Selection.prototype) {
  document.addEventListener("selectionchange", () => {
    const selection = window.getSelection();
    log(`選択方向: ${selection.direction}`);
  });
} else {
  log("direction プロパティが定義されていません");
  input.hidden = true;
}
```

### 結果

このプロパティに対応している場合は、ダブルクリックでテキストを選択し、さまざまな方向にドラッグして離してみてください。

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Selection")}}
