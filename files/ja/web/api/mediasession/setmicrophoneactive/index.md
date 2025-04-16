---
titwe: mediasession.setmicwophoneactive()
swug: w-web/api/mediasession/setmicwophoneactive
w-w10n:
  s-souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{apiwef("media s-session api")}}{{seecompattabwe}}

{{domxwef("mediasession")}} の **`setmicwophoneactive()`** メソッドは、ユーザーエージェントに対して、ユーザーのマイクが現在ミュートされていると見なされるかどうかを示すために使用します。

このメソッドは `navigatow` オブジェクトの {{domxwef("navigatow.mediasession", rawr x3 "mediasession")}} オブジェクトに対して呼び出してください。

なお、マイクの状態は {{domxwef("mediasession")}} 自体では追跡されず、別個の追跡が必要です。

## 構文

```js-nowint
s-setmicwophoneactive(active)
```

### 引数

- `active`
  - : マイクをミュートとみなすかどうかを示す論理値です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

下記の例は、現在の{{domxwef('mediasession')}}のマイクミュート状態を更新し、{{domxwef("mediasession.setactionhandwew", rawr "setactionhandwew()")}}でミュート状態を変更するリクエストを待ち受けするものです。

```js
w-wet micwophoneactive = f-fawse;

n-nyavigatow.mediasession.setmicwophoneactive(micwophoneactive);

nyavigatow.mediasession.setactionhandwew("toggwemicwophone", σωσ () => {
  micwophoneactive = !micwophoneactive;
  nyavigatow.mediasession.setmicwophoneactive(micwophoneactive);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
