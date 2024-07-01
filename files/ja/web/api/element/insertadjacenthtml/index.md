---
title: "Element: insertAdjacentHTML() メソッド"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`insertAdjacentHTML()`** は {{domxref("Element")}} インターフェイスのメソッドで、指定されたテキストを HTML または XML として解釈し、結果のノードを DOM ツリーの指定された位置に挿入します。

## 構文

```js-nolint
insertAdjacentHTML(position, text)
```

### 引数

- `position`

  - : 文字列で、要素の相対的な位置を表します。以下のいずれかでなければなりません。

    - `"beforebegin"`
      - : 要素の前。要素が DOM ツリー内にあり、親要素がある場合にのみ有効です。
    - `"afterbegin"`
      - : 要素のすぐ内側、最初の子の前。
    - `"beforeend"`
      - : 要素のすぐ内側、最後の子の後。
    - `"afterend"`
      - : 要素の後。要素が DOM ツリー内にあり、親要素がある場合にのみ有効です。

- `text`
  - : HTML または XML として解釈し、ツリーに挿入する文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

このメソッドは、以下の種類の {{domxref("DOMException")}} を発生させることがあります。

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : `position` が `"beforebegin"` または `"afterend"` で、要素が親を持っていないか、親が `Document` オブジェクトである場合に発生します。
- `SyntaxError` {{domxref("DOMException")}}
  - : `position` が掲載されている 4 つの値のいずれでもない場合に発生します。

## 解説

`insertAdjacentHTML()` は挿入先の要素を再解釈するものではないため、既存の要素や要素内部の破壊を伴いません。余分なシリアル化のステップを回避できる分、{{domxref("Element.innerHTML", "innerHTML")}} の操作よりもはるかに高速な動作となります。

挿入されるコンテンツの使用可能な位置は、以下のように可視化できます。

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

### セキュリティの考慮事項

`insertAdjacentHTML()` を使用してページに HTML を挿入する場合、エスケープされていないユーザー入力を使用しないように注意してください。

プレーンテキストを挿入する場合は、`insertAdjacentHTML()` を使用しないでください。代わりに {{domxref("Node.textContent")}} プロパティか {{domxref("Element.insertAdjacentText()")}} メソッドを使用してください。これは、渡されたコンテンツを HTML として解釈せず、生のテキストとして挿入します。

## 例

### HTML の挿入

#### HTML

```html
<select id="position">
  <option>beforebegin</option>
  <option>afterbegin</option>
  <option>beforeend</option>
  <option>afterend</option>
</select>

<button id="insert">Insert HTML</button>
<button id="reset">Reset</button>

<p>
  Some text, with a <code id="subject">code-formatted element</code> inside it.
</p>
```

#### CSS

```css
code {
  color: red;
}
```

#### JavaScript

```js
const insert = document.querySelector("#insert");
insert.addEventListener("click", () => {
  const subject = document.querySelector("#subject");
  const positionSelect = document.querySelector("#position");
  subject.insertAdjacentHTML(
    positionSelect.value,
    "<strong>inserted text</strong>",
  );
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### 結果

{{EmbedLiveSample("Examples", 100, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("XMLSerializer")}}: DOM ツリーを XML 文字列へシリアライズ
- Henri Sivonen 氏による [hacks.mozilla.org へのゲストポスト](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) には、幾つかのケースでは insertAdjacentHTML がより速い方法であることを示すベンチマークが含まれています。
