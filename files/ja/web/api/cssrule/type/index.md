---
title: CSSRule.type
slug: Web/API/CSSRule/type
tags:
  - API
  - CSSOM
  - プロパティ
  - リファレンス
  - 読み取り専用
  - 非推奨
browser-compat: api.CSSRule.type
translation_of: Web/API/CSSRule/type
---
{{APIRef("CSSOM")}}{{Deprecated_header}}

**`type`** は {{domxref("CSSRule")}} インターフェイスの読み取り専用プロパティで、非推奨です。この {{domxref("CSSRule")}} が表すルールの型を示す整数を返します。

様々な CSS ルールの型を見分ける必要がある場合は、 [`constructor.name`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/name) を使用するのが良い代替手段です。

```js
const sheets = Array.from(document.styleSheets);
const rules = sheets.map(sheet => Array.from(sheet.cssRules)).flat();

for (const rule of rules) {
  console.log(rule.constructor.name);
}
```

## 値

下表に示す定数のいずれかとなる整数です。

<table class="no-markdown">
  <tbody>
    <tr>
      <th>型</th>
      <th>値</th>
      <th>ルールに特化したインターフェイス</th>
      <th>コメントと例</th>
    </tr>
    <tr>
      <td><code>CSSRule.STYLE_RULE</code></td>
      <td><code>1</code></td>
      <td>{{domxref("CSSStyleRule")}}</td>
      <td>
        この種のルールで最も一般的なもの:<br /><code
          >selector { prop1: val1; prop2: val2; }</code
        >
      </td>
    </tr>
    <tr>
      <td><code>CSSRule.IMPORT_RULE</code></td>
      <td><code>3</code></td>
      <td>{{domxref("CSSImportRule")}}</td>
      <td>
        {{cssxref("@import")}} ルールです（文書が完了するまでは、 Mozilla のソースコードのインターフェイス定義
        <a
          href="http://mxr.mozilla.org/mozilla-central/source/dom/interfaces/css/nsIDOMCSSImportRule.idl#9"
          >nsIDOMCSSImportRule</a
        > を参照してください、）
      </td>
    </tr>
    <tr>
      <td><code>CSSRule.MEDIA_RULE</code></td>
      <td><code>4</code></td>
      <td>{{domxref("CSSMediaRule")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.FONT_FACE_RULE</code></td>
      <td><code>5</code></td>
      <td>{{domxref("CSSFontFaceRule")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.PAGE_RULE</code></td>
      <td><code>6</code></td>
      <td>{{domxref("CSSPageRule")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.KEYFRAMES_RULE</code></td>
      <td><code>7</code></td>
      <td>
        {{domxref("CSSKeyframesRule")}}
        {{experimental_inline}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.KEYFRAME_RULE</code></td>
      <td><code>8</code></td>
      <td>
        {{domxref("CSSKeyframeRule")}}
        {{experimental_inline}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><em>将来使用するために予約</em></td>
      <td><code>9</code></td>
      <td></td>
      <td>将来的にカラープロファイルを定義するために使用する予定。</td>
    </tr>
    <tr>
      <td><code>CSSRule.NAMESPACE_RULE</code></td>
      <td><code>10</code></td>
      <td>
        {{domxref("CSSNamespaceRule")}}
        {{experimental_inline}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.COUNTER_STYLE_RULE</code></td>
      <td><code>11</code></td>
      <td>
        {{domxref("CSSCounterStyleRule")}}
        {{experimental_inline}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.SUPPORTS_RULE</code></td>
      <td><code>12</code></td>
      <td>{{domxref("CSSSupportsRule")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.DOCUMENT_RULE</code></td>
      <td><code>13</code></td>
      <td>
        {{domxref("CSSDocumentRule")}}
        {{experimental_inline}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.FONT_FEATURE_VALUES_RULE</code></td>
      <td><code>14</code></td>
      <td>{{domxref("CSSFontFeatureValuesRule")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.VIEWPORT_RULE</code></td>
      <td><code>15</code></td>
      <td>
        {{domxref("CSSViewportRule")}}
        {{experimental_inline}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.REGION_STYLE_RULE</code></td>
      <td><code>16</code></td>
      <td>
        {{domxref("CSSRegionStyleRule")}}
        {{experimental_inline}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.UNKNOWN_RULE</code></td>
      <td><code>0</code></td>
      <td>
        {{domxref("CSSUnknownRule")}} {{deprecated_inline}}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>CSSRule.CHARSET_RULE</code></td>
      <td><code>2</code></td>
      <td><code>CSSCharsetRule</code> {{deprecated_inline}}</td>
      <td>（多くのブラウザーでは削除済み。）</td>
    </tr>
  </tbody>
</table>

## 例

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].type);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
