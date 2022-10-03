---
title: Document.implementation
slug: Web/API/Document/implementation
---

{{ ApiRef("DOM") }}

**`Document.implementation`** プロパティは、現在の文書に関連付けられた {{domxref("DOMImplementation")}} オブジェクトを返します。

## 構文

```
DOMImpObj = document.implementation;
```

## 例

```js
var modName = "HTML";
var modVer = "2.0";
var conformTest = document.implementation.hasFeature( modName, modVer );

alert( "DOM " + modName + " " + modVer + " supported?: " + conformTest );

// DOM Level 2 HTML module に対応している場合、"DOM HTML 2.0 supported?: true" とアラート表示されます。
```

モジュール名 (※ Core 、HTML 、XML 等) の一覧は [Conformance Section](http://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance-h2) で入手可能です。

## メモ

W3C's DOM Level 1 勧告では `hasFeature` メソッドのみが定義されているので、ブラウザーが DOM モジュールに対応しているかどうかを判断する方法の一つです。 (上記の例と [What does your user agent claim to support?](http://www.w3.org/2003/02/06-dom-support.html) を参照してください)。利用できるのであれば、 `DOMImplementation` の他のメソッドが、単一文書の外のものを制御するサービスを提供します。例えば、 `DOMImplementation` インターフェイスは `createDocumentType` メソッドを含んでおり、実装によって管理された 1 つ以上の文書に DTD が作成されます。

## 仕様書

| 仕様書                                                                                                           | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('DOM WHATWG', '#dom-document-implementation', 'document.implementation')}} | {{Spec2('DOM WHATWG')}} |      |

## ブラウザーの互換性

{{Compat}}

### Gecko に特有のメモ

- Gecko 19.0 {{geckoRelease("19.0")}} から、 {{domxref("DOMImplementation.hasFeature","hasFeature")}} メソッドは常に true を返します。
