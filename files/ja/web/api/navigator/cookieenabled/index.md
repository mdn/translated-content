---
title: "Navigator: cookieEnabled プロパティ"
short-title: cookieEnabled
slug: Web/API/Navigator/cookieEnabled
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}

`navigator.cookieEnabled` は、クッキーが有効かどうかを示す論理値を返します。

このプロパティは読み取り専用です。

## 値

論理値です。

> **メモ:** ブラウザーがサードパーティのクッキーをブロックするように構成されていた場合で、 `navigator.cookieEnabled` がサードパーティの iframe の中で呼び出された場合、 Safari, Edge Spartan, IE では `true` を返します (この場合にクッキーを設定しようとしても失敗するにもかかわらず)。 Firefox および Chromium ベースのブラウザーでは `false` を返します。

> **メモ:** ウェブブラウザーは特定の場面で特定のクッキーを書き込むことを阻止することがあります。例えば、 Chrome ベースのブラウザーや、 Firefox の一部の実験的なバージョンでは、 [`SameSite=None`](/ja/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 属性の付いたクッキーを作成することを許可しませんが、 HTTPS 上で生成され `Secure` 属性がある場合は例外です。

## 例

```js
if (!navigator.cookieEnabled) {
  // ブラウザーが対応していないか、クッキーが設定されることをブロックしています。
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
