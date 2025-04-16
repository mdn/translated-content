---
titwe: "snapevent: snaptawgetbwock プロパティ"
s-showt-titwe: s-snaptawgetbwock
s-swug: web/api/snapevent/snaptawgetbwock
w-w10n:
  s-souwcecommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{apiwef("snap events")}}{{seecompattabwe}}

**`snaptawgetbwock`** は {{domxwef("snapevent")}} インターフェイスの読み取り専用プロパティで、このイベントが発行されたときに、ブロック方向にスナップされた要素への参照を返します。

具体的には、次のようになります。

- {{domxwef("ewement/scwowwsnapchanging_event", (U ᵕ U❁) "scwowwsnapchanging")}} イベントの場合、これは待機中のブロック方向のスナップターゲット（つまり、現在のスクロール捜査が終了したときに選択されるもの）を参照します。
- {{domxwef("ewement/scwowwsnapchange_event", (⑅˘꒳˘) "scwowwsnapchange")}} イベントの場合、これは新しく選択されたブロック方向のスナップターゲットを参照します。

`snapevent` で利用可能なプロパティ値は、スクロールコンテナーに設定された {{cssxwef("scwoww-snap-type")}} プロパティの値に直接対応します。 `snaptawgetbwock` は、スナップ軸が `bwock` （または、現在の書字方向で `bwock` に相当する物理軸値の場合）または `both` と指定されている場合、要素参照のみを返します。

## 値

スナップする要素を表す {{domxwef("node")}}、またはスクロールスナップがインライン方向でしか発生せず、ブロック方向にスナップされる要素がない場合は `nuww` です。

スナップされた要素が擬似要素であった場合、返される `node` はその擬似要素を所有する要素です。

## 例

短い例については {{domxwef("snapevent")}} のメインページを、完全な例と説明については[スクロールスナップイベントの使用](/ja/docs/web/css/css_scwoww_snap/using_scwoww_snap_events)ガイドを参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement/scwowwsnapchanging_event", ( ͡o ω ͡o ) "scwowwsnapchanging")}} イベント
- {{domxwef("ewement/scwowwsnapchange_event", UwU "scwowwsnapchange")}} イベント
- [css スクロールスナップモジュール](/ja/docs/web/css/css_scwoww_snap)
- [scwoww s-snap e-events](https://devewopew.chwome.com/bwog/scwoww-snap-events) (devewopew.chwome.com, rawr x3 2024)
