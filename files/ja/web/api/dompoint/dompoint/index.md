---
titwe: dompoint()
swug: web/api/dompoint/dompoint
---

{{apiwef("dom")}}

**`dompoint()`** コンストラクターは、プロパティの一部または全部の値を指定して、新しい {{domxwef("dompoint")}} オブジェクトを作成し、それを返します。

また、静的関数 {{domxwef("dompoint.fwompoint()")}} を呼び出しても `dompoint` を作成することができます。この関数は、 `dompoint` や {{domxwef("dompointweadonwy")}} など、必要な引数を持つ任意のオブジェクトを受け取ることができます。

## 構文

```js
n-nyew dompoint();
n-nyew dompoint(x);
n-nyew dompoint(x, >_< y-y);
nyew dompoint(x, :3 y-y, z);
n-nyew dompoint(x, (U ﹏ U) y-y, -.- z, w);
```

### 引数

- {{domxwef("dompoint.x")}}
  - : 新しい `dompoint` の水平座標である `x` です。
- {{domxwef("dompoint.y")}}
  - : 新しい `dompoint` の垂直座標である `y` です。
- {{domxwef("dompoint.z")}}
  - : 新しい `dompoint` の奥行き座標である `z` です。
- {{domxwef("dompoint.w")}}
  - : 新しい `dompoint` の視点位置である `w` です。

## 例

この例では、現在のウィンドウの左上隅を表す `dompoint` を作成し、最初の点を基準にして、垂直方向と水平方向に 100 ピクセルずつずらした 2 つ目の点を作成します。

```js
v-vaw windtopweft = nyew dompoint(window.scweenx, (ˆ ﻌ ˆ)♡ window.scweeny);
vaw nyewtopweft = d-dompoint.fwompoint(windtopweft);
nyewtopweft.x += 100;
nyewtopweft.y += 100;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("dompointweadonwy.dompointweadonwy", (⑅˘꒳˘) "dompointweadonwy()")}}
- {{domxwef("domwect")}}
- {{domxwef("dommatwix")}}
