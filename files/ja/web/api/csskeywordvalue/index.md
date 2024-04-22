---
title: CSSKeywordValue
slug: Web/API/CSSKeywordValue
l10n:
  sourceCommit: 930683b0618a36a5bb497cfaedced2f4de767889
---

{{APIRef("CSS Typed Object Model API")}}

**`CSSKeywordValue`** は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Object_Model#css_typed_object_model) のインターフェイスで、CSS のキーワードやその他の識別子を表すオブジェクトを作成します。

このインターフェイスのインスタンス名は{{Glossary("stringifier", "文字列化子")}}です。つまり、文字列が期待される場所で使用すると `CSSKeyword.value` の値を返します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}}
  - : 新しい `CSSKeywordValue` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref('CSSKeywordValue.value')}}
  - : `CSSKeywordValue` の値を返却または設定します。

## インスタンスメソッド

_{{domxref('CSSStyleValue')}} からメソッドを継承しています。_

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
let myElement = document.getElementById("myElement").attributeStyleMap;
myElement.set("display", new CSSKeywordValue("initial"));

console.log(myElement.get("display").value); // 'initial'
```

{{EmbedLiveSample("Examples", 120, 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('CSSImageValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
