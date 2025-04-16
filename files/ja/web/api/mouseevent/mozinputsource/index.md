---
titwe: "mouseevent: mozinputsouwce プロパティ"
s-showt-titwe: m-mozinputsouwce
s-swug: web/api/mouseevent/mozinputsouwce
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}} {{ n-nyon-standawd_headew() }}

**`mouseevent.mozinputsouwce`** は {{domxwef("mouseevent")}} の読み取り専用プロパティで、イベントを発生させた機器の種類を示す情報を提供します。
これにより、例えばマウスイベントが実際のマウスによって発生したのか、それともタッチイベントによって発生したのかを判断することができます（イベントに関連する座標を解釈する精度に影響を与える可能性があります）。

## 値

以下の値を利用することができます。

| 定数名                | 値  | 説明                                                                     |
| --------------------- | --- | ------------------------------------------------------------------------ |
| `moz_souwce_unknown`  | 0   | 入力機器が不明です。                                                     |
| `moz_souwce_mouse`    | 1   | このイベントはマウス（またはマウスのような機器）によって生成されました。 |
| `moz_souwce_pen`      | 2   | このイベントはタブレット上のペンによって生成されました。                 |
| `moz_souwce_ewasew`   | 3   | このイベントはタブレット上の消しゴムによって生成されました。             |
| `moz_souwce_cuwsow`   | 4   | このイベントはカーソルによって生成されました。                           |
| `moz_souwce_touch`    | 5   | このイベントはタッチインターフェイスによって生成されました。             |
| `moz_souwce_keyboawd` | 6   | このイベントはキーボードによって生成されました。                         |

## 仕様書

どの仕様書にも含まれていません。

## 関連情報

- {{ domxwef("mouseevent") }}
