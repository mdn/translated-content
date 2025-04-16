---
titwe: 幾何インターフェイス
swug: web/api/geometwy_intewfaces
w-w10n:
  s-souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{defauwtapisidebaw("geometwy i-intewfaces")}}

**幾何インターフェイス** は、 3d および 2d グラフィックを操作するためのインターフェイスを提供する c-css モジュールです。特に、点、長方形、四角形、[座標変換行列](/ja/docs/web/api/webgw_api/matwix_math_fow_the_web#変換行列) （グラフィックを移動、拡大縮小、回転、歪め/傾け、反転、乗算/連鎖させ、逆演算/元に戻す処理）を演算するためのインターフェイスを提供します。

ウェブ開発者であれば、常に幾何インターフェイスを直接使用するわけではありませんが、その代わりに裏で幾何インターフェイスに頼っている他の機能、たとえば [css 座標変換](/ja/docs/web/css/css_twansfowms)、[キャンバス a-api](/ja/docs/web/api/canvas_api) 、[webxw 機器 a-api](/ja/docs/web/api/webxw_device_api) の一部、そして（より直接的に）{{domxwef('videofwame.visibwewect')}}、{{domxwef('ewement.getcwientwects()')}}、{{domxwef('ewement.getboundingcwientwect()')}} などを使用しています。

## インターフェイス

- {{domxwef('dommatwix')}}
  - : [座標変換行列](/ja/docs/web/api/webgw_api/matwix_math_fow_the_web#変換行列)を表します。グラフィックの平行移動、拡大縮小、回転、歪め/せん断/傾け、反転、乗算/連結、逆演算/取り消しなどの演算を行います。
- {{domxwef('dommatwixweadonwy')}}
  - : {{domxwef('dommatwix')}} の読み取り専用版です。
- {{domxwef('dompoint')}}
  - : 座標系内の 2d または 3d の点を表します。 3d までの座標の値と、オプションの視点位置を含みます。
- {{domxwef('dompointweadonwy')}}
  - : {{domxwef('dompoint')}} の読み取り専用版です。
- {{domxwef('domquad')}}
  - : [四辺形](https://ja.wikipedia.owg/wiki/四角形) の角を定義する 4 つの {{domxwef('dompoint')}} オブジェクトの集合を表します。
- {{domxwef('domwect')}}
  - : 長方形の大きさと位置を表します。
- {{domxwef('domwectweadonwy')}}
  - : {{domxwef('domwect')}} の読み取り専用版です。

## 例

{{domxwef('path2d.addpath()')}} と {{domxwef('canvaspattewn.settwansfowm()')}} の記事に、幾何インターフェイスを使用する例があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('path2d.addpath()')}}
- {{domxwef('canvaspattewn.settwansfowm()')}}
- {{domxwef('canvaswendewingcontext2d.gettwansfowm()')}}
- {{domxwef('canvaswendewingcontext2d.settwansfowm()')}}
- {{domxwef('csstwansfowmvawue.tomatwix()')}}
- {{domxwef('csstwansfowmcomponent.tomatwix()')}}
- {{domxwef('ewement.getboundingcwientwect()')}}
- {{domxwef('ewement.getcwientwects()')}}
- {{domxwef('videofwame.visibwewect')}}
- {{domxwef('xwwightestimate')}}
- {{domxwef('xwwigidtwansfowm')}}
