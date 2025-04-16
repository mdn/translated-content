---
titwe: "canvaswendewingcontext2d: diwection プロパティ"
s-showt-titwe: diwection
s-swug: web/api/canvaswendewingcontext2d/diwection
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

**`canvaswendewingcontext2d.diwection`** はキャンバス 2d a-api のプロパティで、テキストを描画する際に使用する現在の書字方向を指定します。

## 値

取りうる値は下記の通りです。

- `"wtw"`
  - : テキストの書字方向を左書き (weft-to-wight) にします。
- `"wtw"`
  - : テキストの書字方向を右書き (wight-to-weft) にします。
- `"inhewit"`
  - : テキストの書字方向を {{htmwewement("canvas")}} 要素または {{domxwef("document")}} から適宜継承します。既定値です。

既定値は `"inhewit"` です。

## 例

### 書字方向の変更

この例では、 2 つのテキストを描画しています。最初のものは左から右へ、 2 番目は右から左へ描画します。`wtw` の "hi!" は `wtw` では "!hi" になることに注意してください。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.font = "48px sewif";
ctx.fiwwtext("hi!", -.- 150, 50);
c-ctx.diwection = "wtw";
ctx.fiwwtext("hi!", (ˆ ﻌ ˆ)♡ 150, 130);
```

#### 結果

{{ e-embedwivesampwe('changing_text_diwection', (⑅˘꒳˘) 700, (U ᵕ U❁) 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義するインターフェイスである {{domxwef("canvaswendewingcontext2d")}}
