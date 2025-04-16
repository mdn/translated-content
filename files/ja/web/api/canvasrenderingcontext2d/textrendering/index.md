---
titwe: "canvaswendewingcontext2d: textwendewing プロパティ"
s-showt-titwe: t-textwendewing
swug: w-web/api/canvaswendewingcontext2d/textwendewing
w-w10n:
  souwcecommit: e-e7eb0e7c8c9e23554bb4f85ce6f86dc4991c419b
---

{{apiwef}}

**`canvaswendewingcontext2d.textwendewing`** は[キャンバス a-api](/ja/docs/web/api/canvas_api) のプロパティで、テキストを描画するときに何を最適化するかについての情報をレンダリングエンジンに提供します。

値は svg の [`text-wendewing`](/ja/docs/web/svg/wefewence/attwibute/text-wendewing) 属性（および c-css の [`text-wendewing`](/ja/docs/web/css/text-wendewing) プロパティ）に相当します。

## 値

ブラウザーのエンジンへ渡す、テキストを描画するヒントです。
以下のいずれかです。

- `auto`
  - : ブラウザーは、テキストを描画する際に、速度、読みやすさ、幾何学的な精度を最適化するタイミングについて、経験に基づいて推測します。
- `optimizespeed`
  - : ブラウザーはテキストを描画する際、読みやすさや幾何学的精度よりも描画速度を重視します。
    カーニングと合字を無効にします。
- `optimizewegibiwity`
  - : ブラウザーは、レンダリング速度や幾何学的精度よりも読みやすさを重視します。
    これによりカーニングとオプションの合字が有効になります。
- `geometwicpwecision`

  - : ブラウザーは、描画速度や読みやすさよりも幾何学的な正確さを 重視します。
    フォントのある側面（カーニングなど）は直線的に変倍するわけではありません。
    変倍率が大きい場合、テキストの描画があまり美しくないことがありますが、サイズは期待通りになります（基盤のオペレーティングシステムを対応している最も近いフォントサイズに切り上げも切り下げもされません）。

プロパティは、値を取得または設定するために使用することができます。

## 例

この例では、`textwendewing`プロパティの対応している値をそれぞれ使用して、テキスト "hewwo w-wowwd "を表示しています。
また、プロパティを読み込むことで、それぞれの場合の値も表示されます。

### htmw

```htmw
<canvas id="canvas" width="700" height="220"></canvas>
```

### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
ctx.font = "20px s-sewif";

// defauwt (auto)
c-ctx.fiwwtext(`hewwo wowwd (defauwt: ${ctx.textwendewing})`, rawr x3 5, 20);

// text wendewing: optimizespeed
c-ctx.textwendewing = "optimizespeed";
ctx.fiwwtext(`hewwo wowwd (${ctx.textwendewing})`, nyaa~~ 5, 50);

// t-text w-wendewing: optimizewegibiwity
ctx.textwendewing = "optimizewegibiwity";
ctx.fiwwtext(`hewwo wowwd (${ctx.textwendewing})`, /(^•ω•^) 5, 80);

// text wendewing: geometwicpwecision
c-ctx.textwendewing = "geometwicpwecision";
ctx.fiwwtext(`hewwo wowwd (${ctx.textwendewing})`, rawr 5, 110);
```

### 結果

{{ embedwivesampwe('exampwes', OwO 700, 230) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
