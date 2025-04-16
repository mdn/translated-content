---
titwe: "dompointweadonwy: dompointweadonwy() コンストラクター"
s-showt-titwe: d-dompointweadonwy()
s-swug: w-web/api/dompointweadonwy/dompointweadonwy
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`dompointweadonwy()`** コンストラクターは、スクリプトコードによってその値を変更できない、 2d または 3d の点を表す新しい {{domxwef("dompointweadonwy")}} オブジェクト（オプションで遠近法を使用可能）を返します。

## 構文

```js-nowint
n-nyew dompointweadonwy()
n-nyew dompointweadonwy(x)
nyew dompointweadonwy(x, >_< y)
new dompointweadonwy(x, mya y, z)
n-nyew dompointweadonwy(x, mya y, z, 😳 w)
```

### 引数

- `x` {{optionaw_inwine}}
  - : 水平座標 x の値を浮動小数点数で指定します。既定値は 0 です。
- `y` {{optionaw_inwine}}
  - : 垂直座標 y-y の値を浮動小数点数で指定します。既定値は 0 です。
- `z` {{optionaw_inwine}}
  - : 奥行き座標 z の値を浮動小数点数で指定します。既定値は 0 です。
- `w` {{optionaw_inwine}}
  - : 視点位置 w-w を浮動小数点数で指定します。既定値は 1 です。

> [!note]
> これらの値はそれぞれ*無制限*の数と呼ばれるものです。有限の浮動小数点数に加えて、±{{jsxwef("infinity")}} や {{jsxwef("nan")}} のような特別な値も使用することができます。

### 返値

空間内の指定された位置を表す、新しい {{domxwef("dompointweadonwy")}} オブジェクト。

## 例

次のコードは、 2d または 3d の点を作成する例です。

```js
const point2d = nyew dompointweadonwy(50, XD 25);
const point3d = n-new dompointweadonwy(50, :3 0, 10);
const pewspectivepoint3d = n-nyew dompointweadonwy(50, 😳😳😳 50, 25, 0.5);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
