---
title: CSSStyleRule.selectorText
slug: Web/API/CSSStyleRule/selectorText
---

{{APIRef("CSSOM") }}

**`CSSRule.selectorText`** プロパティは、この規則集合のセレクターのテキスト表現を取得します。これは、一部のブラウザーで読み取り専用で実装されています。スタイルシート規則をクロスブラウザーで動的に設定するには、 [動的なスタイル情報の利用](/ja/docs/DOM/Using_dynamic_styling_information) を参照してください。

## 構文

```
string = cssRule.selectorText
```

## 例

```js
// for cssrule: body { background-color: darkblue; }
var stylesheet = document.styleSheets[0];

alert(stylesheet.cssRules[0].selectorText); // body
```

## 補記

実装は、セレクターの解析中に無意味な空白を取り除くことがあります。解析できないセレクター文字列を設定すると、SyntaxError が発生します。

## 仕様書

| 仕様書                                                                                                           | 策定状況                 | コメント |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('CSSOM', '#dom-cssstylerule-selectortext', 'CSSStyleRule.selectorText')}} | {{Spec2('CSSOM')}} |          |

## ブラウザー実装状況

{{Compat("api.CSSStyleRule.selectorText")}}
