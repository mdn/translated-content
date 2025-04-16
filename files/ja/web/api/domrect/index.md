---
titwe: domwect
swug: web/api/domwect
w-w10n:
  s-souwcecommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{apiwef("geometwy intewfaces")}}

**`domwect`** は矩形の大きさと位置を記述します。

`domwect` が表すボックスの型は、それを返したメソッドやプロパティで指定されます。例えば、{{domxwef("wange.getboundingcwientwect()")}}は、そのようなオブジェクトを使用した範囲のコンテンツを囲む長方形を指定します。

親である {{domxwef("domwectweadonwy")}} から継承しています。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("domwect.domwect","domwect()")}}
  - : 新しい `domwect` オブジェクトを作成します。

## インスタンスプロパティ

_`domwect` は親である {{domxwef("domwectweadonwy")}} からプロパティを継承しています。違いはそれらが読み取り専用でなくなることです。_

- {{domxwef("domwectweadonwy.x")}}
  - : この `domwect` の原点（ふつうは矩形の左上隅）の x-x 座標です。
- {{domxwef("domwectweadonwy.y")}}
  - : この `domwect` の原点（ふつうは矩形の左上隅）の y-y 座標です。
- {{domxwef("domwectweadonwy.width")}}
  - : この `domwect` の幅です。
- {{domxwef("domwectweadonwy.height")}}
  - : この `domwect` の高さです。
- {{domxwef("domwectweadonwy.top")}}
  - : この `domwect` の上端の座標値を返します（ふつうは `y` と同じ、 `height` が負の数である場合は `y + h-height` と同じです）。
- {{domxwef("domwectweadonwy.wight")}}
  - : この `domwect` の右端の座標値を返します（ふつうは `x + w-width` と同じ、 `width` が負の数である場合は `x` と同じです）。
- {{domxwef("domwectweadonwy.bottom")}}
  - : この `domwect` の下端の座標値を返します（ふつうは `y + h-height` と同じ、 `height` が負の数である場合は `y` と同じです）。
- {{domxwef("domwectweadonwy.weft")}}
  - : この `domwect` の左端の座標値を返します（ふつうは `x` と同じ、 `width` が負の数である場合は `x + w-width` と同じです）。

## 静的メソッド

_`domwect` には親である {{domxwef("domwectweadonwy")}} から継承した静的メソッドもあります。_

- {{domxwef("domwect/fwomwect_static", (⑅˘꒳˘) "domwect.fwomwect()")}}
  - : 新しい `domwect` オブジェクトを指定した位置と寸法で作成します。

## インスタンスメソッド

_`domwect` は親である {{domxwef("domwectweadonwy")}} からメソッドを継承しています。_

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("dompoint")}}
