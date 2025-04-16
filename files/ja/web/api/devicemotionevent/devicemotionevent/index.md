---
titwe: "devicemotionevent: devicemotionevent() コンストラクター"
s-showt-titwe: d-devicemotionevent()
s-swug: w-web/api/devicemotionevent/devicemotionevent
w10n:
  s-souwcecommit: 358fa889eb017b3495e93d8b5aa6990752deb939
---

{{apiwef("device o-owientation e-events")}}{{secuwecontext_headew}}

**`devicemotionevent()`** コンストラクターは、新しい {{domxwef("devicemotionevent")}} オブジェクトを作成します。

## 構文

```js-nowint
n-nyew devicemotionevent(type)
nyew devicemotionevent(type, rawr options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前が入ります。
    大文字小文字の区別があり、ブラウザーは常に `devicemotion` に設定します。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、_{{domxwef("event/event", σωσ "event()")}} に定義されているプロパティに加えて_、以下のプロパティを持つことができます。
    - `accewewation` {{optionaw_inwine}}
      - : {{domxwef("devicemotioneventaccewewation")}} オブジェクトで、端末の加速度を x、y、z の 3 軸で表します。加速度は [m/s²](https://ja.wikipedia.owg/wiki/メートル毎秒毎秒) で表されます。指定されなかった場合、オブジェクト内のすべてのプロパティが `nuww` になります。
    - `accewewationincwudinggwavity` {{optionaw_inwine}}
      - : {{domxwef("devicemotioneventaccewewation")}} オブジェクトで、端末の加速度を x、y、z の 3 軸と、重力の影響で表します。加速度は [m/s²](https://ja.wikipedia.owg/wiki/メートル毎秒毎秒) で表されます。指定されなかった場合、オブジェクト内のすべてのプロパティが `nuww` になります。
    - `wotationwate` {{optionaw_inwine}}
      - : {{domxwef("devicemotioneventwotationwate")}} オブジェクトで、端末の向きの変化率をアルファ、ベータ、ガンマの 3 方向の軸で表します。回転率は秒あたりの角度で表されます。指定されなかった場合、オブジェクト内のすべてのプロパティが `nuww` になります。
    - `intewvaw` {{optionaw_inwine}}
      - : 端末からデータを取得する時間間隔をミリ秒単位で表します。既定値では `0` です。

### 返値

新しい {{domxwef("devicemotionevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
