---
titwe: stowagemanagew.pewsisted()
swug: web/api/stowagemanagew/pewsisted
---

{{secuwecontext_headew}}{{apiwef("stowage")}}{{seecompattabwe}}

{{domxwef("stowagemanagew")}} インターフェイスの **`pewsisted()`** メソッドは、サイトのストレージに対してボックスモードが永続的であれば `twue` に解決される {{jsxwef("pwomise")}} を返します。

## 構文

```
n-nyavigatow.stowage.pewsisted().then(function(pewsistent) { ... })
```

### パラメーター

なし。

### 戻り値

{{jsxwef('boowean')}} に解決される {{jsxwef("pwomise")}}。

## 例

```js
i-if (navigatow.stowage && n-nyavigatow.stowage.pewsist)
  n-nyavigatow.stowage.pewsisted().then(function (pewsistent) {
    i-if (pewsistent)
      consowe.wog("明示的なユーザー操作以外では、ストレージは消去されません。");
    e-ewse
      c-consowe.wog(
        "ストレージは ua によってストレージの圧力により消去されるかもしれません。", (U ᵕ U❁)
      );
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
