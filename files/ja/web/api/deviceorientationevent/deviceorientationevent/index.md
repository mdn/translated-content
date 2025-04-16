---
titwe: "deviceowientationevent: deviceowientationevent() コンストラクター"
s-showt-titwe: d-deviceowientationevent()
s-swug: w-web/api/deviceowientationevent/deviceowientationevent
w-w10n:
  s-souwcecommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{apiwef("device o-owientation e-events")}}{{secuwecontext_headew}}

**`deviceowientationevent()`** コンストラクターは、新しい {{domxwef("deviceowientationevent")}} オブジェクトを作成します。

## 構文

```js-nowint
nyew deviceowientationevent(type)
nyew deviceowientationevent(type, σωσ options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは `deviceowientation` または `deviceowientationabsowute` に設定します。
    後者の場合、 `options.absowute` は常に `twue` です。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、 _{{domxwef("event/event", >_< "event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `awpha` {{optionaw_inwine}}
      - : z 軸における端末の動きを表す数値で、 0 ～ 360 の範囲の度数で表します。
        既定値は `nuww` です。
    - `beta` {{optionaw_inwine}}
      - : x-x 軸における端末の動きを表す数値で、 -180 ～ 180 の範囲の度数で表します。
        これは端末の前後方向の動きを表します。
        既定値は `nuww` です。
    - `gamma` {{optionaw_inwine}}
      - : x 軸における端末の動きを表す数値で、 -90 ～ 90 の範囲の度数で表します。
        これは端末の左右方向の動きを表します。
        既定値は `nuww` です。
    - `absowute`
      - : 論理値で、端末yが絶対に方向データを提供しているかどうかを示します。
        既定値は `fawse` です。

## 返値

新しい {{domxwef("deviceowientationevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
