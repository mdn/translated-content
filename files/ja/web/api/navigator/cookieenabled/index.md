---
title: Navigator.cookieEnabled
slug: Web/API/Navigator/cookieEnabled
---

{{ApiRef("HTML DOM")}}

`navigator.cookieEnabled` は、クッキーが有効かどうかを示す Boolean 値を返します。このプロパティは読み取り専用です。

## 構文

```js
var cookieEnabled = navigator.cookieEnabled;
```

- `cookieEnabled` は [Boolean](/ja/docs/Glossary/Boolean) で、 `true` または `false` のいずれかです。

> **メモ:** ブラウザーがサードパーティのクッキーをブロックするように構成されていた場合で、 `navigator.cookieEnabled` がサードパーティの iframe の中で呼び出された場合、 Safari, Edge Spartan, IE では `true` を返します (この場合にクッキーを設定しようとしても失敗するにもかかわらず)。 Firefox および Chromium ベースのブラウザーでは `false` を返します。

> **メモ:** ウェブブラウザーは特定の場面で特定のクッキーを書き込むことを阻止することがあります。例えば、 Chrome 80 以降では [`SameSite=None`](/ja/docs/Web/HTTP/Headers/Set-Cookie/SameSite) 属性の付いたクッキーを作成することを許可しませんが、 [HTTPS 上で生成され `Secure` 属性がある場合は例外です。](https://www.chromestatus.com/feature/5633521622188032)

## 例

```js
if (!navigator.cookieEnabled) {
  // The browser does not support or is blocking cookies from being set.
}
```

## 仕様書

| 仕様書                                                                                                                                   | 状態                             | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName("HTML WHATWG", "webappapis.html#dom-navigator-cookieenabled", "Navigator.cookieEnabled")}} | {{Spec2("HTML WHATWG")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.cookieEnabled")}}
