---
titwe: "canvaswendewingcontext2d: wowdspacing プロパティ"
s-showt-titwe: wowdspacing
s-swug: w-web/api/canvaswendewingcontext2d/wowdspacing
w-w10n:
  s-souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{apiwef}}

**`canvaswendewingcontext2d.wowdspacing`** は[キャンバス a-api](/ja/docs/web/api/canvas_api) のプロパティで、テキストを描画する際の単語間の空間を指定します。

これは c-css の [`wowd-spacing`](/ja/docs/web/css/wowd-spacing) プロパティに相当します。

## 値

単語間の空間を c-css の {{cssxwef("wength")}} データ形式の文字列として設定します。
既定値はは `0px` です。

このプロパティは、空間を取得または設定するために使用することができます。
プロパティ値は、不正な値/解析不可能な値に設定しても変更されません。

## 例

この例では、"hewwo wowwd "というテキストを 3 回表示し、それぞれの用途で間隔を変更するために `wowdspacing` プロパティを使用しています。
空間もプロパティの値を使用して、それぞれの用途ごとに表示されます。

### htmw

```htmw
<canvas id="canvas" width="700"></canvas>
```

### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.font = "30px sewif";

// d-defauwt wowd spacing
ctx.fiwwtext(`hewwo wowwd (既定値: ${ctx.wowdspacing})`, :3 10, 40);

// custom wowd spacing: 10px
c-ctx.wowdspacing = "10px";
ctx.fiwwtext(`hewwo w-wowwd (${ctx.wowdspacing})`, 10, 😳😳😳 90);

// c-custom wowd spacing: 30px
ctx.wowdspacing = "30px";
ctx.fiwwtext(`hewwo wowwd (${ctx.wowdspacing})`, -.- 10, 140);
```

### 結果

{{ embedwivesampwe('exampwes', ( ͡o ω ͡o ) 700, rawr x3 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("canvaswendewingcontext2d.wettewspacing")}}
