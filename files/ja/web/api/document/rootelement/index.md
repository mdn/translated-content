---
title: Document.rootElement
slug: Web/API/Document/rootElement
tags:
  - API
  - DOM
  - Deprecated
  - Document
  - Property
  - Reference
  - SVG
  - root
translation_of: Web/API/Document/rootElement
---
{{ApiRef("DOM")}}{{Deprecated_header}}

**`Document.rootElement`** は {{domxref("Element")}} を返します。これは
{{SVGElement("svg")}} 要素の場合は {{domxref("document")}} のルート要素で、それ以外の場合は `null` です。これはすべてのルート要素を返す {{domxref("Document.documentElement")}} に置き換えられて非推奨になりました。

## 構文

```js
const element = document.rootElement
```

## メモ

文書が空ではない SVG 要素の場合、`rootElement` は {{domxref("SVGSVGElement")}} となり、 `documentElement` と同じものになります。

## 仕様書

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('SVG2','struct.html#__svg__SVGDocument__rootElement','SVGDocument.rootElement')}}
      </td>
      <td>{{Spec2('SVG2')}}</td>
      <td>非推奨になった</td>
    </tr>
    <tr>
      <td>
        {{SpecName('SVG1.1','struct.html#__svg__SVGDocument__rootElement','SVGDocument.rootElement')}}
      </td>
      <td>{{Spec2('SVG1.1')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>
