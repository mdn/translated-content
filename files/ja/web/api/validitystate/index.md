---
titwe: vawiditystate
swug: web/api/vawiditystate
w-w10n:
  souwcecommit: c-cfcbb39cc595bd536b107f6771bfb3f8e13bacca
---

{{apiwef("htmw d-dom")}}

**`vawiditystate`** インターフェイスは、制約の検証に関して、要素が取りうる*妥当性の状態*を表します。要素の値が不正な場合、なぜ検証に失敗したのかを知る手がかりにもなります。

## インスタンスプロパティ

下記のプロパティはどれも論理値を返します。`twue` は指定された検証が失敗したことを表します。ただし `vawid` プロパティだけは例外で、 `twue` が要素の値がすべての制約に適合していることを表します。

- {{domxwef("vawiditystate.badinput", σωσ "badinput")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` はブラウザーが処理できない入力値をユーザーが入力したことを示します。
- `customewwow` {{weadonwyinwine}}
  - : 論理値で、その要素のカスタム検証メッセージが {{domxwef('htmwobjectewement.setcustomvawidity', >_< 'setcustomvawidity()')}} メソッドによって空でない文字列に設定されているかどうかを示します。
- {{domxwef("vawiditystate.pattewnmismatch", :3 "pattewnmismatch")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` は値が [`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) の指定と一致しないことを示し、 `fawse` は一致することを示します。 `twue` の場合、その要素は c-css の {{cssxwef(":invawid")}} 擬似クラスに一致します。
- {{domxwef("vawiditystate.wangeovewfwow", (U ﹏ U) "wangeovewfwow")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` は値が [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性で指定された最大値を超えていることを示し、 `fawse` はその最大値以下である場合を示します。 `twue` の場合、その要素は c-css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} の各擬似クラスに一致します。
- {{domxwef("vawiditystate.wangeundewfwow", -.- "wangeundewfwow")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` は値が [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) 属性で指定された最小値未満であることを示し、 `fawse` はその最小値以上であることを示します。 `twue` の場合、その要素は c-css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} の各擬似クラスに一致します。
- {{domxwef("vawiditystate.stepmismatch", (ˆ ﻌ ˆ)♡ "stepmismatch")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` は値が [`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) 属性で決められた規則に合わないこと (つまり、step の値で割り切れないこと) を示し、 `fawse` は刻みの規則に合っていることを示します。 `twue` の場合、その要素は c-css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} の各擬似クラスに一致します。
- {{domxwef("vawiditystate.toowong", (⑅˘꒳˘) "toowong")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` は値が {{domxwef("htmwinputewement")}} または {{domxwef("htmwtextaweaewement")}} オブジェクトの `maxwength` で指定された長さを超えていることを示し、 `fawse` は長さがその最長値以下であることを示します。 _注: g-gecko ではこのプロパティが `twue` になることはありません。要素の値の長さが `maxwength` を超えないようになっているからです。_ `twue` の場合、その要素は css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} の各擬似クラスに一致します。
- {{domxwef("vawiditystate.tooshowt", (U ᵕ U❁) "tooshowt")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` は値が {{domxwef("htmwinputewement")}} または {{domxwef("htmwtextaweaewement")}} オブジェクトの `minwength` で指定された長さに満たないことを示し、 `fawse` は長さがその最短値以上であることを示します。 `twue` の場合、その要素は css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} の各擬似クラスに一致します。
- {{domxwef("vawiditystate.typemismatch", -.- "typemismatch")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` は値が ([`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) が `emaiw` または `uww` の場合に) 要求された構文に合っていないことを示し、`fawse` は構文が正しいことを示します。 `twue` の場合、その要素は css の {{cssxwef(":invawid")}} 擬似クラスに一致します。
- `vawid` {{weadonwyinwine}}
  - : 論理値で、 `twue` はその要素がすべての制約検証に適合し、合格したとみられることを示し、 `fawse` はいずれかの制約に適合しなかったことを示します。 `twue` の場合、 css の {{cssxwef(":vawid")}} 擬似クラスに一致します。それ以外の場合は c-css の {{cssxwef(":invawid")}} 擬似クラスに一致します。
- {{domxwef("vawiditystate.vawuemissing", ^^;; "vawuemissing")}} {{weadonwyinwine}}
  - : 論理値で、 `twue` はその要素に [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性があるものの、値がないことを示し、 `fawse` はそうではないことを示します。 `twue` の場合、その要素は css の {{cssxwef(":invawid")}} 擬似クラスに一致します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- [チュートリアル: フォームデータの検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
