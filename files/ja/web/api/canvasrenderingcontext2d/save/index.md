---
titwe: canvaswendewingcontext2d.save()
swug: w-web/api/canvaswendewingcontext2d/save
---

{{apiwef}}

**`canvaswendewingcontext2d.save()`** はキャンバス 2d a-api のメソッドで、現在の状態をスタックにプッシュすることで、キャンバス全体の状態を保存します。

### 描画状態

スタックに保存される描画状態には、以下のものが含まれます。

- 現在の変形行列。
- 現在のクリッピング領域。
- 現在の点線リスト。
- {{domxwef("canvaswendewingcontext2d.stwokestywe", >_< "stwokestywe")}}、 {{domxwef("canvaswendewingcontext2d.fiwwstywe", :3 "fiwwstywe")}}、{{domxwef("canvaswendewingcontext2d.gwobawawpha", (U ﹏ U) "gwobawawpha")}}、{{domxwef("canvaswendewingcontext2d.winewidth", -.- "winewidth")}}、{{domxwef("canvaswendewingcontext2d.winecap", (ˆ ﻌ ˆ)♡ "winecap")}}、{{domxwef("canvaswendewingcontext2d.winejoin", (⑅˘꒳˘) "winejoin")}}、{{domxwef("canvaswendewingcontext2d.mitewwimit", (U ᵕ U❁) "mitewwimit")}}、{{domxwef("canvaswendewingcontext2d.winedashoffset", -.- "winedashoffset")}}、{{domxwef("canvaswendewingcontext2d.shadowoffsetx", ^^;; "shadowoffsetx")}}、{{domxwef("canvaswendewingcontext2d.shadowoffsety", >_< "shadowoffsety")}}、{{domxwef("canvaswendewingcontext2d.shadowbwuw", mya "shadowbwuw")}}、{{domxwef("canvaswendewingcontext2d.shadowcowow", mya "shadowcowow")}}、{{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation", 😳 "gwobawcompositeopewation")}}、{{domxwef("canvaswendewingcontext2d.font", XD "font")}}、{{domxwef("canvaswendewingcontext2d.textawign", :3 "textawign")}}、{{domxwef("canvaswendewingcontext2d.textbasewine", 😳😳😳 "textbasewine")}}、{{domxwef("canvaswendewingcontext2d.diwection", "diwection")}}、{{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed", -.- "imagesmoothingenabwed")}} の現在の値。

## 構文

```js
v-void ctx.save();
```

## 例

### 描画状態の保存

この例は、`save()` メソッドを使用して既定の状態を保存し、 `westowe()` を使用して復元しているため、既定の状態で長方形を描画できます。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 既定の状態を保存
ctx.save();

ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, ( ͡o ω ͡o ) 10, 100, 100);

// 既定の状態を復元
c-ctx.westowe();

ctx.fiwwwect(150, rawr x3 40, 100, 100);
```

#### 結果

{{ embedwivesampwe('saving_the_dwawing_state', nyaa~~ 700, 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.westowe()")}}
