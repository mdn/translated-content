---
title: "Attr: name プロパティ"
slug: Web/API/Attr/name
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`name`** は {{domxref("Attr")}} インターフェイスの読み取り専用プロパティで、属性の*修飾名*、すなわち属性名に、名前空間接頭辞があればそれが前に付いたものが返されます。例えば、ローカル名が `lang` で名前空間接頭辞が `xml` であった場合、返される修飾名は `xml:lang` になります。

修飾名は、属性が作成されたときの大文字小文字に関わらず、常に小文字になります。

## 値

この属性の修飾名を表す文字列です。

## 例

次の例では、適切なボタンをクリックすると、 2 つの最初の要素の最初の属性の修飾名が表示されます。

### HTML コンテンツ

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Click me</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>&lt;svg&gt; の場合の値を表示</button>
  <button>&lt;label&gt; の場合の値を表示</button>
</p>

<p>
  <code>xml:lang</code> 属性の修飾名:
  <output id="result">なし。</output>
</p>
```

### JavaScript コンテンツ

```js
const elements = document.querySelectorAll(".struct");
const buttons = document.querySelectorAll("button");
const outputEl = document.querySelector("#result");

let i = 0;
for (const button of buttons) {
  const element = elements[i];
  button.addEventListener("click", () => {
    const attribute = element.attributes[0];
    outputEl.value = attribute.name;
  });
  i++;
}
```

### 結果

{{ EmbedLiveSample('Example','100%',100) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Attr.localName")}} プロパティはこの属性の修飾名のローカル名の部分を返し、 {{domxref("Attr.prefix")}} は名前空間接頭辞を返します。
- {{domxref("Element.tagName()")}} プロパティは {{domxref("Element")}} の修飾名を返します。
