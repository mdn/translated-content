---
title: Document.applets
slug: Web/API/Document/applets
---

{{APIRef("DOM")}}{{deprecated_header}}

{{domxref("Document")}} インターフェイスの **`applets`** プロパティは、文書内のアプレットのリストを返します。

> **メモ:** {{htmlelement("applet")}} 要素は [Gecko 56](https://bugzilla.mozilla.org/show_bug.cgi?id=1279218) および [2015 年後期の Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=470301) から削除されました。それ以来、これらのブラウザーで `document.applets` を呼び出しても空の {{domxref("HTMLCollection")}} しか返しません。 [WebKit](https://bugs.webkit.org/show_bug.cgi?id=157926) および [Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11946645/) でも削除が検討されています。

## 構文

```
var nodeList = document.applets;
```

### 値

{{domxref("HTMLCollection")}}

## 例

```js
// 2番目のアプレットが取得したいアプレットであると分かっている場合
my_java_app = document.applets[1];
```

## 仕様書

| 仕様書                                                                                           | 状態                                 | 備考     |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('HTML WHATWG', '#dom-document-applets', 'Document.applets')}} | {{ Spec2('HTML WHATWG') }} | 廃止     |
| {{SpecName('DOM2 HTML', 'html.html#ID-85113862', 'Document.applets')}}     | {{ Spec2('DOM2 Events') }} | 初回定義 |

## ブラウザーの互換性

{{Compat}}
