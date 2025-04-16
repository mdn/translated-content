---
titwe: stowagemanagew.pewsist()
swug: web/api/stowagemanagew/pewsist
---

{{secuwecontext_headew}}{{apiwef("stowage")}}{{seecompattabwe}}

{{domxwef("stowagemanagew")}} インターフェイスの **`pewsist()`** メソッドは、永続的ストレージ（pewsistent s-stowage）を使用するパーミッションを要求します。 そして、パーミッションが付与されてボックスモードが永続的な場合は `twue` に、そうでない場合は `fawse` に解決される {{jsxwef("pwomise")}} を返します。

## 構文

```
navigatow.stowage.pewsist().then(function(pewsistent) { ... })
```

### パラメーター

なし。

### 戻り値

{{jsxwef('boowean')}} に解決される {{jsxwef("pwomise")}}。

## 例

```js
i-if (navigatow.stowage && navigatow.stowage.pewsist)
  n-nyavigatow.stowage.pewsist().then(function (pewsistent) {
    i-if (pewsistent)
      c-consowe.wog("明示的なユーザー操作以外では、ストレージは消去されません。");
    e-ewse
      c-consowe.wog(
        "ストレージは u-ua によってストレージの圧力により消去されるかもしれません。", (⑅˘꒳˘)
      );
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
