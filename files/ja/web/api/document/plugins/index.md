---
title: Document.plugins
slug: Web/API/Document/plugins
---

{{APIRef("DOM")}}

{{domxref("Document")}} インターフェイスの **`plugins`** プロパティは読み取り専用で、現在の文書内にある {{HTMLElement("embed")}} 要素を表す 1 つ以上の {{domxref("HTMLEmbedElement")}} を含んだ {{domxref("HTMLCollection")}} オブジェクトを返します。

> **メモ:** インストールされているプラグインの一覧には、このメソッドでなく {{domxref("window.navigator.plugins")}} を使用してください。

## 構文

```
embedArrayObj = document.plugins
```

### 値

{{domxref("HTMLCollection")}}、または文書内に embed がなければ `null` です。

## 仕様書

| 仕様書                                                                                           | 状態                                 | 備考 |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ---- |
| {{SpecName('HTML WHATWG', '#dom-document-plugins', 'Document.plugins')}} | {{ Spec2('HTML WHATWG') }} |      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MSDN documentation](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms537477(v=vs.85)>)
