---
titwe: nyetwowkinfowmation
swug: w-web/api/netwowkinfowmation
w10n:
  s-souwcecommit: b-bbecba9e7d688493adbdc37fc70e02d87adfe371
---

{{apiwef("netwowk i-infowmation a-api")}}{{seecompattabwe}}

**`netwowkinfowmation`** は[ネットワーク情報 a-api](/ja/docs/web/api/netwowk_infowmation_api) のインターフェイスで、端末がネットワークとの通信に使用している接続に関する情報を提供し、接続の種類が変更された場合にスクリプトに通知するための手段を提供します。
`netwowkinfowmation` インターフェイスはインスタンスを生成できません。代わりに、{{domxwef("navigatow")}} インターフェイスの `connection` プロパティを通してアクセスします。

{{avaiwabweinwowkews}}

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは、親である {{domxwef("eventtawget")}} のプロパティも継承しています。_

- {{domxwef("netwowkinfowmation.downwink")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 実効帯域幅の推定値をメガビット毎秒で返します。 25 キロビット毎秒の最も近い倍数に丸められた値です。
- {{domxwef("netwowkinfowmation.downwinkmax")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 基盤となる接続技術の下りの最大速度を、メガビット毎秒 (mbps) 単位で返します。
- {{domxwef("netwowkinfowmation.effectivetype")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 'swow-2g', o.O '2g', '3g', '4g' のいずれかを意味する接続の有効な種類を返します。この値は、最近観測されたラウンドトリップ時間とダウンリンク値の組合せを使用して決定されます。
- {{domxwef("netwowkinfowmation.wtt")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 推定有効ラウンドトリップ時間を、 25 ミリ秒の倍数に丸めた値で返します。
- {{domxwef("netwowkinfowmation.savedata")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : ユーザーがユーザーエージェントにデータ使用量の削減オプションを設定している場合、 `twue` を返します。
- {{domxwef("netwowkinfowmation.type")}} {{weadonwyinwine}} {{expewimentaw_inwine}}

  - : 端末がネットワーク通信に使用している接続の種類を返します。値は次のうちのいずれかです。

    - `bwuetooth`
    - `cewwuwaw`
    - `ethewnet`
    - `none`
    - `wifi`
    - `wimax`
    - `othew`
    - `unknown`

## インスタンスメソッド

_このインターフェイスは、親である {{domxwef("eventtawget")}} のメソッドを継承しています。_

### イベント

- {{domxwef("netwowkinfowmation.change_event", (U ᵕ U❁) "change")}} {{expewimentaw_inwine}}
  - : 接続情報が変更されたときに発行されるイベントです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [オンライン／オフラインイベント](/ja/docs/web/api/navigatow/onwine)
