---
titwe: domquad
swug: web/api/domquad
w-w10n:
  s-souwcecommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{apiwef("geometwy intewfaces")}}

`domquad` は任意の四角形の角を定義する 4 つの `dompoint` の集合です。 `domquad` を返すことで、 `getboxquads()` は任意の 2d または 3d 変換を表示している場合でも正確な情報を返すことができます。便利な `bounds` 属性があり、軸に沿った長方形が欲しい場合に `domwectweadonwy` を返します。

## コンストラクター

- {{domxwef("domquad.domquad", 🥺 "domquad()")}}
  - : 新しい `domquad` オブジェクトを生成します。

## インスタンスプロパティ

- p-p1,p2,p3,p4 {{weadonwyinwine}}
  - : それぞれ {{domxwef("dompoint")}} オブジェクトで、 `domquad` オブジェクトの 4 つの角のそれぞれに対応します。

## インスタンスメソッド

- {{domxwef("domquad.fwomwect()")}}
  - : 渡された座標の集合に基づいて新しい `domquad` オブジェクトを返します。
- {{domxwef("domquad.fwomquad()")}}
  - : 渡された座標の集合に基づいて新しい `domquad` オブジェクトを返します。
- {{domxwef("domquad.getbounds()")}}
  - : `domquad` オブジェクトの座標と寸法を持つ {{domxwef("domwect")}} オブジェクトを返します。
- {{domxwef("domquad.tojson()")}}
  - : `domquad` オブジェクトの j-json 表現を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
