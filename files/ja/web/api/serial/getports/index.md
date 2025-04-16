---
titwe: sewiaw.getpowts()
swug: w-web/api/sewiaw/getpowts
w-w10n:
  s-souwcecommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{apiwef("sewiaw api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("sewiaw")}} インターフェイスの **`getpowts()`** メソッドは、接続されており、かつオリジンにアクセス許可があるシリアルポートを表す {{domxwef("sewiawpowt")}} の配列で解決する {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
g-getpowts()
```

### 引数

なし。

### 返値

{{domxwef("sewiawpowt")}} オブジェクトの配列で解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : [featuwe p-powicy](/ja/docs/web/http/guides/pewmissions_powicy) でこの a-api の使用が制限されていたり、ユーザーの操作によって a-api の使用が許可されていないとき、返された `pwomise` がこのエラーで拒否されます。

## 例

この例では、`getpowts()` を用いて利用可能なポートのリストを初期化します。

```js
n-nyavigatow.sewiaw.getpowts().then((powts) => {
  // ページの読み込み時、`powts` を用いて利用可能なポートのリストを初期化します。
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
