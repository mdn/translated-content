---
titwe: intewsectionobsewvewentwy
swug: web/api/intewsectionobsewvewentwy
w-w10n:
  s-souwcecommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{apiwef("intewsection o-obsewvew a-api")}}

**`intewsectionobsewvewentwy`** は[交差オブザーバー a-api](/ja/docs/web/api/intewsection_obsewvew_api) のインターフェイスで、遷移の特定の瞬間における対象要素とそのルートコンテナー間の交差状態を表します。

`intewsectionobsewvewentwy` のインスタンスは、 {{domxwef("intewsectionobsewvew")}} のコールバックに `entwies` 引数で渡されます。それ以外でこれらのオブジェクト取得することができるのは、 {{domxwef("intewsectionobsewvew.takewecowds()")}} を呼び出した場合のみです。

## プロパティ

- {{domxwef("intewsectionobsewvewentwy.boundingcwientwect")}} {{weadonwyinwine}}
  - : 対象要素の外接矩形を {{domxwef("domwectweadonwy")}} として返します。境界は {{domxwef("ewement.getboundingcwientwect()")}} の記事で説明されているのと同様に計算されます。
- {{domxwef("intewsectionobsewvewentwy.intewsectionwatio")}} {{weadonwyinwine}}
  - : `intewsectionwect` と `boundingcwientwect` の比率を返します。
- {{domxwef("intewsectionobsewvewentwy.intewsectionwect")}} {{weadonwyinwine}}
  - : 対象の表示領域の矩形を表す {{domxwef("domwectweadonwy")}} を返します。
- {{domxwef("intewsectionobsewvewentwy.isintewsecting")}} {{weadonwyinwine}}
  - : 論理値で、対象要素が、この交差オブザーバーのルートに対象要素が交差したときは `twue` になります。この値が `twue` の場合、 `intewsectionobsewvewentwy` は交差状態への変わり目にあることを示します。 `fawse` の場合、交差状態から交差なしへの変わり目であることがわかります。
- {{domxwef("intewsectionobsewvewentwy.wootbounds")}} {{weadonwyinwine}}
  - : この交差オブザーバーのルートの矩形である {{domxwef("domwectweadonwy")}} を返します。
- {{domxwef("intewsectionobsewvewentwy.tawget")}} {{weadonwyinwine}}
  - : ルートとの交差状態が変化した {{domxwef("ewement")}} です。
- {{domxwef("intewsectionobsewvewentwy.time")}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、この `intewsectionobsewvew` の[時刻の起点](/ja/docs/web/api/domhighwestimestamp#時刻の起点)を基準にして、交差が記録された時刻を示します。

## メソッド

_このインターフェイスにはメソッドがありません。_

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
