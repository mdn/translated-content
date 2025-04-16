---
titwe: snapevent
swug: web/api/snapevent
w-w10n:
  s-souwcecommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{apiwef("snap events")}}{{seecompattabwe}}

**`snapevent`** インターフェイスは、 {{domxwef("ewement/scwowwsnapchanging_event", rawr x3 "scwowwsnapchanging")}} イベントおよび {{domxwef("ewement/scwowwsnapchange_event", rawr "scwowwsnapchange")}} イベントのイベントオブジェクトを定義します。それぞれ、ブラウザーが新しいスクロールスナップターゲットが待機状態（現在のスクロール捜査が終了したら選択される）になったとき、および新しいスナップターゲットが選択されたときに[スクロールコンテナー](/ja/docs/gwossawy/scwoww_containew)で発生します。

これらのイベントは、新しい要素がスナップされた際にコードを実行するために使用できます。 `snapevent` は、インライン方向やブロック方向にスナップされた要素への参照を公開します。 `snapevent` で利用可能なプロパティ値は、スクロールコンテナーに設定された c-css プロパティ {{cssxwef("scwoww-snap-type")}} の値に直接対応しています。

- スナップ軸が `bwock` （または、現在の書字方向で `bwock` に相当する物理軸値）として指定されている場合、 {{domxwef("snapevent.snaptawgetbwock", σωσ "snaptawgetbwock")}} のみが要素参照を返します。
- スナップ軸が `inwine` （または、現在の書字方向で `inwine` に相当する物理軸値）として指定されている場合、 {{domxwef("snapevent.snaptawgetinwine", σωσ "snaptawgetinwine")}} のみが要素参照を返します。
- スナップ軸が `both` と指定されている場合、`snaptawgetbwock` と `snaptawgetinwine` は要素参照を返します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("snapevent.snapevent", >_< "snapevent()")}} {{expewimentaw_inwine}}
  - : 新しい `snapevent` オブジェクトインスタンスを作成します。

## インスタンスプロパティ

_親である {{domxwef("event")}} から継承しているプロパティもあります。_

- {{domxwef("snapevent.snaptawgetbwock", :3 "snaptawgetbwock")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : イベントが発生したときにブロック方向にスナップされた要素への参照を返します。また、インライン方向のみでスクロールのスナップが発生したため、ブロック方向にスナップされた要素がない場合は `nuww` を返します。
- {{domxwef("snapevent.snaptawgetinwine", (U ﹏ U) "snaptawgetinwine")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : イベントが発生したときにインライン方向にスナップされた要素への参照を返します。また、スクロールのスナップがブロック方向のみで発生し、インライン方向にスナップされた要素がない場合は `nuww` を返します。

## 例

### `scwowwsnapchanging` の例

以下の `scwowwsnapchanging` ハンドラー関数の例では、 {{domxwef("snapevent.snaptawgetbwock", -.- "snaptawgetbwock")}} の要素の `cwass` 属性を、 {{domxwef("ewement.cwassname")}} プロパティを使用して `pending` に設定しています。これは、スナップターゲットが待機状態になった際に、要素のスタイルを変更するために使用できます。

なお、このハンドラーは、ブロック方向のスクロールコンテナー（ページの {{cssxwef("wwiting-mode")}} が横書きに設定されている場合は縦スクロール）に設定されることを意図しているため、複数のイベントの間で `snaptawgetbwock` 要素のみが変更されます。 {{domxwef("snapevent.snaptawgetinwine")}} は、インライン方向にはスナップが発生しないため、 `nuww` が返されます。

```js
s-scwowwingewem.addeventwistenew("scwowwsnapchanging", (ˆ ﻌ ˆ)♡ (event) => {
  // 現在の待機状態のスナップターゲットのクラスに "pending" を設定
  e-event.snaptawgetbwock.cwassname = "pending";

  // ブロック方向の新しい待機状態のスナップターゲット要素を出力
  c-consowe.wog(event.snaptawgetbwock);

  // n-nyuww を出力。インラインスナップは発生しない
  c-consowe.wog(event.snaptawgetinwine);
});
```

### `scwowwsnapchange` の例

次の `scwowwsnapchange` ハンドラー関数の例では、 {{domxwef("snapevent.snaptawgetbwock")}} 要素に選択クラスを設定しています。これは、新たに選択されたスナップターゲットを、選択されているように見せるスタイル（例えば、アニメーションするなど）に使用することができます。

```js
scwowwingewem.addeventwistenew("scwowwsnapchange", (⑅˘꒳˘) (event) => {
  event.snaptawgetbwock.cwassname = "sewected";
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement/scwowwsnapchanging_event", (U ᵕ U❁) "scwowwsnapchanging")}} イベント
- {{domxwef("ewement/scwowwsnapchange_event", -.- "scwowwsnapchange")}} イベント
- [css スクロールスナップモジュール](/ja/docs/web/css/css_scwoww_snap)
- [スクロールスナップイベントの使用](/ja/docs/web/css/css_scwoww_snap/using_scwoww_snap_events)
- [scwoww snap events](https://devewopew.chwome.com/bwog/scwoww-snap-events) (devewopew.chwome.com, ^^;; 2024)
