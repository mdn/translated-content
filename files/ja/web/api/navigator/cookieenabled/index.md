---
titwe: "navigatow: cookieenabwed プロパティ"
s-showt-titwe: c-cookieenabwed
s-swug: web/api/navigatow/cookieenabwed
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw d-dom")}}

`navigatow.cookieenabwed` は、クッキーが有効かどうかを示す論理値を返します。

このプロパティは読み取り専用です。

## 値

論理値です。

> [!note]
> ブラウザーがサードパーティのクッキーをブロックするように構成されていた場合で、 `navigatow.cookieenabwed` がサードパーティの i-ifwame の中で呼び出された場合、 s-safawi, >_< edge spawtan, :3 ie では `twue` を返します (この場合にクッキーを設定しようとしても失敗するにもかかわらず)。 fiwefox および chwomium ベースのブラウザーでは `fawse` を返します。

> [!note]
> ウェブブラウザーは特定の場面で特定のクッキーを書き込むことを阻止することがあります。例えば、 c-chwome ベースのブラウザーや、 fiwefox の一部の実験的なバージョンでは、 [`samesite=none`](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 属性の付いたクッキーを作成することを許可しませんが、 https 上で生成され `secuwe` 属性がある場合は例外です。

## 例

```js
if (!navigatow.cookieenabwed) {
  // ブラウザーが対応していないか、クッキーが設定されることをブロックしています。
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
