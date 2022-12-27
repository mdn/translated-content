---
title: Document.scripts
slug: Web/API/Document/scripts
---

{{APIRef("DOM")}}

{{domxref("Document")}} インターフェイスの **`scripts`** プロパティは、文書中の {{HTMLElement("script")}} 要素のリストを返します。返されるオブジェクトは単一の {{domxref("HTMLCollection")}} オブジェクトです。

## 構文

```
var scriptList = document.scripts;
```

### 値

{{domxref("HTMLCollection")}} です。これを使用して、リスト中のすべての要素を配列のように取得することができます。

## 例

ページ内の {{HTMLElement("script")}} 要素の存在を確認する例を以下に示します。

```js
let scripts = document.scripts;

if (scripts.length) {
  alert("このページには script 要素があります。");
}
```

## 仕様書

| 仕様書                                                                                           | 状態                                 | 備考 |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ---- |
| {{SpecName('HTML WHATWG', '#dom-document-scripts', 'Document.scripts')}} | {{ Spec2('HTML WHATWG') }} |      |

## ブラウザーの互換性

{{Compat}}
