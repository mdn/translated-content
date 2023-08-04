---
title: "CSSKeywordValue: CSSKeywordValue() コンストラクター"
slug: Web/API/CSSKeywordValue/CSSKeywordValue
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed Object Model API")}}

**`CSSKeywordValue()`** コンストラクターは、新しい {{domxref("CSSKeywordValue")}} オブジェクトを生成します。これは CSS のキーワードおよびその他の識別子を表します。

## 構文

```js-nolint
new CSSKeywordValue(val)
```

### 引数

- `value`
  - : 新しい `CSSKeywordValue` の値に設定または返却します。

### 例外

- {{jsxref("TypeError")}}
  - : `value` 引数が指定されていなかったり、文字列型ではなかったりした場合。

## 例

次の例は、CSS の {{cssxref('display')}} プロパティを既定値にリセットするために、インラインの [`style`](/ja/docs/Web/HTML/Global_attributes/style) 属性を `style="display: initial"` に設定します。これは[開発者ツールインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html)で見られます。

```css hidden
#myElement {
  display: flex;
}
```

```html hidden
<div id="myElement">
  開発者ツールでコンソールのログを確認し、この div の style
  属性を調べてみてください。
</div>
```

```js
const keyword = new CSSKeywordValue("initial");
const myElement = document.getElementById("myElement").attributeStyleMap;
myElement.set("display", keyword);

console.log(myElement.get("display").value); // 'initial'
console.dir(keyword);
```

{{EmbedLiveSample("Examples", 120, 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
