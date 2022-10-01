---
title: Navigator.vendor
slug: Web/API/Navigator/vendor
---

{{ APIRef("HTML DOM") }}

現在のブラウザーのブラウザーベンダーの名前を返します。

## 構文

```
venString = window.navigator.vendor
```

### 値

- _venString_ は、 {{domxref("DOMString")}} です。

## 例

```
window.navigator.vendor
// "Netscape6" などの文字列が返る
```

## メモ

`vendor` は、ユーザエージェントを表す文字列の内の一部分です。 product と vendor は異なる可能性があります。例えば、Netscape 6.1 の場合、レンダリングに Gecko product を利用しています。 [navigator.product](/ja/docs/DOM/window.navigator.product)、[navigator.userAgent](/ja/docs/DOM/window.navigator.userAgent) も参照してください。

## 仕様書

| 仕様書                                                                                               | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', '#dom-navigator-vendor', 'NavigatorID: vendor')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの対応

{{Compat("api.Navigator.vendor")}}
