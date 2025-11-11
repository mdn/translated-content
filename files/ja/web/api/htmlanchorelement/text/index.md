---
title: "HTMLAnchorElement: text プロパティ"
short-title: text
slug: Web/API/HTMLAnchorElement/text
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{ApiRef("HTML DOM")}}

**`text`** は {{domxref("HTMLAnchorElement")}} のプロパティで、要素内のテキストを表します。
このプロパティは {{domxref("Node.textContent")}} と同じ情報を表します。

## 値

文字列です。

## 例

```html
<a id="exampleLink" href="https://example.com">Example Link</a>
<p class="text"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".text");
pTag.textContent = `Text property: ${anchorElement.text}`;
```

### 結果

{{EmbedLiveSample("Example",100,100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLScriptElement.text")}} プロパティ
- {{domxref("HTMLOptionElement.text")}} プロパティ
