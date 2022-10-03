---
title: Navigator.vendorSub
slug: Web/API/Navigator/vendorSub
---

{{ApiRef}}{{deprecated_header}}

**`Navigator.vendorSub`** プロパティは読み取り専用で、ベンダーバージョン番号が付いたベンダーの部分文字列です。仕様書ではブラウザーが常に空文字列を返して良いことになっているため、このプロパティから頼れる回答を期待しないでください。

## 構文

```
venSub = window.navigator.vendorSub
```

### 値

- _venSub_ は {{domxref("DOMString")}} です。

## 例

```js
window.navigator.vendorSub
// "6.1" を返す場合、userAgent のべンダー名は、
// Netscape6/6.1 などです。
```

## メモ

`vendorSub` は、ユーザーエージェント文字列全体の一部分です。バージョン番号は、ベンダー自身がそのブラウザーに与えたものです (製品のバージョンとは異なるかもしれません)。 Netscape 6.1 では、 `productSub` は `"5.0"` ですが、 `vendorSub` は `"6.1"` です。 {{domxref("window.navigator.productSub","navigator.productSub")}}, {{domxref("window.navigator.userAgent","navigator.userAgent")}}, {{domxref("window.navigator.vendor","navigator.vendor")}} も参照してください。

## 仕様書

| 仕様書                                                                                                       | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#dom-navigator-vendorsub', 'NavigatorID: vendorSub')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.Navigator.vendorSub")}}
