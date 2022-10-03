---
title: Document.referrer
slug: Web/API/Document/referrer
---

{{APIRef("DOM")}}

**`Document.referrer`** プロパティは、このページへリンクしていたページの [URI](http://www.w3.org/Addressing/#background) を返します。

## 構文

```
var referrer = document.referrer;
```

### 値

この値は、ユーザーが (リンクではなく、例えばブックマークから) ページに直接移動した場合は空文字列になります。プロパティはただ文字列を返すものであるため、参照先のページの DOM アクセスを提供するものではありません。

{{HTMLElement("iframe")}} の中では、 `Document.referrer` は最初、親ウィンドウの {{domxref("Window/location", "Window.location")}} の {{domxref("HTMLHyperlinkElementUtils/href", "href")}} と同じ値が設定されます。

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', '#dom-document-referrer-dev', 'document.referrer')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの互換性

{{Compat}}
