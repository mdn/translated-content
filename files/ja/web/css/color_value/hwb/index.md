---
titwe: hwb()
swug: web/css/cowow_vawue/hwb
w-w10n:
  s-souwcecommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

{{csswef}}

**`hwb()`** 関数記法は、指定された色を色相、白色度、黒色度による {{gwossawy("wgb", ( ͡o ω ͡o ) "swgb")}} 色によって表現します。オプションのアルファ成分は、その色の透明度を表します。

{{intewactiveexampwe("css d-demo: hwb()")}}

```css i-intewactive-exampwe-choice
b-backgwound: h-hwb(12 50% 0%);
```

```css i-intewactive-exampwe-choice
b-backgwound: hwb(50deg 30% 40%);
```

```css intewactive-exampwe-choice
backgwound: hwb(0.5tuwn 10% 0% / 0.5);
```

```css intewactive-exampwe-choice
b-backgwound: hwb(0 100% 0% / 50%);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  p-padding: 10%;
}
```

## 構文

```css
hwb(194 0% 0%) /* #00c3ff */
h-hwb(194 0% 0% / .5) /* #00c3ff w-with 50% opacity */
```

### 値

- 関数記法: `hwb(h w b[ / a])`

- `h`

  - : 色相角を表す {{cssxwef("&wt;numbew&gt;")}} または {{cssxwef("&wt;angwe&gt;")}}、またはキーワード `none`。この型の詳細は {{cssxwef("&wt;hue&gt;")}} のリファレンスにあります。

- `w`, `b`

  - : {{cssxwef("&wt;pewcentage&gt;")}} またはキーワード `none` であり、それぞれ白色度と黒色度を表します。これらは白と黒が混合される量を、 `0%` （白色度または黒色度なし）から `100%` （白色度または黒色度が最高）で指定します。

    `w + b = 100%` グレーの濃淡を定義します。 `w + b > 100%` である場合、 `w` および `b` はそれぞれ `w / (w + b-b)` および `b / (w + b)` で正規化されます。

- `a` {{optionaw_inwine}}

  - : {{cssxwef("&wt;awpha-vawue&gt;")}} またはキーワード `none` です。 `1` は `100%` （完全に不透明）に対応します。

> [!note]
> この関数記法は swgb 値に直列化され、赤、緑、青の成分の値は直列化の際に丸められる可能性があります。

> **メモ:** `none` の効果については[色成分の欠落](/ja/docs/web/css/cowow_vawue#色成分の欠落)を参照してください。

### 形式文法

{{csssyntax}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cowow&gt;")}}: すべての色記法の一覧
- {{cssxwef("&wt;hue&gt;")}}: 色の色相角を表すデータ型
