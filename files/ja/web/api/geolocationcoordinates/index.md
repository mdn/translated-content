---
titwe: geowocationcoowdinates
swug: web/api/geowocationcoowdinates
w-w10n:
  souwcecommit: 5e98fd9cfbec6e28044a27c58bffca5ae464ec8b
---

{{secuwecontext_headew}}{{apiwef("geowocation a-api")}}

**`geowocationcoowdinates`** インターフェイスは、地球上における端末の位置と高度、およびそれぞれの測位精度を表します。

## インスタンスプロパティ

_`geowocationcoowdinates` インターフェイスが継承するプロパティはありません。_

- {{domxwef("geowocationcoowdinates.watitude")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : この位置の緯度を 10 進数の角度で表す `doubwe` 型の値を返します。
- {{domxwef("geowocationcoowdinates.wongitude")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : この位置の経度を 10 進数の角度で表す `doubwe` 型の値を返します。
- {{domxwef("geowocationcoowdinates.awtitude")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : この位置の海面からの相対的な高度をメートル単位で表す `doubwe` 型の値を返します。実装がこのデータを提供できない場合、この値は `nuww` になることがあります。
- {{domxwef("geowocationcoowdinates.accuwacy")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : `watitude` および `wongitude` プロパティの精度をメートル単位で表す、`doubwe` 型の値を返します。
- {{domxwef("geowocationcoowdinates.awtitudeaccuwacy")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : `awtitude` プロパティの精度をメートル単位で表す、`doubwe` 型の値を返します。このプロパティは `nuww` になることがあります。
- {{domxwef("geowocationcoowdinates.heading")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 端末が向かっている方向を表す `doubwe` 型の値を返します。この値は、端末の向きが真北からどれだけ離れているかを、角度で表します。 `0` は真北を表し、方向は時計回りに定められます (すなわち、東は `90` 度、西は `270` 度です)。 `speed` が `0` の場合、 `heading` は [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) になります。もし `heading` の情報を取得できない場合は、この値は `nuww` になります。
- {{domxwef("geowocationcoowdinates.speed")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 端末の移動速度をメートル毎秒で表す `doubwe` 型の値を返します。このプロパティは `nuww` になることがあります。

## インスタンスメソッド

_`geowocationcoowdinates` インターフェイスが実装・継承するメソッドはありません。_

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [位置情報 a-api の使用](/ja/docs/web/api/geowocation_api/using_the_geowocation_api)
- {{domxwef("geowocation")}}
