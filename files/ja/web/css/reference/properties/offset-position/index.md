---
title: offset-position
slug: Web/CSS/Reference/Properties/offset-position
original_slug: Web/CSS/offset-position
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`offset-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、パスに沿った要素の初期位置を定義します。このプロパティは通常、 {{cssxref("offset-path")}} プロパティと組み合わせて、動きの効果を作成するために使用されます。 `offset-position` の値は、 {{cssxref("basic-shape/path", "path()")}} などの `offset-path` 関数が独自の開始位置を指定していない場合、オフセットパスに沿って移動するための要素の初期配置位置を決定します。

`offset-position` プロパティは、 {{cssxref("offset")}} の構成プロパティ（{{cssxref("offset-anchor")}}, {{cssxref("offset-distance")}}, `offset-path` など）に基づくモーションシステムの一部です。これらのプロパティは連携して、パスに沿ってさまざまなモーション効果を作成します。

## 構文

```css
/* キーワード値 */
offset-position: normal;
offset-position: auto;
offset-position: top;
offset-position: bottom;
offset-position: left;
offset-position: right;
offset-position: center;

/* <percentage> 値 */
offset-position: 25% 75%;

/* <length> 値 */
offset-position: 0 0;
offset-position: 1cm 2cm;
offset-position: 10ch 8em;

/* 辺とオフセット値 */
offset-position: bottom 10px right 20px;
offset-position: right 3em bottom 10px;
offset-position: bottom 10px right;
offset-position: top right 10px;

/* グローバル値 */
offset-position: inherit;
offset-position: initial;
offset-position: revert;
offset-position: revert-layer;
offset-position: unset;
```

### 値

- `normal`
  - : 要素にオフセット開始位置がないことを示し、要素を包含ブロックの `50% 50%` の位置に配置します。これは既定値です。
- `auto`
  - : オフセットの開始位置が要素のボックスの左上隅であることを示します。
- {{cssxref("&lt;position&gt;")}}
  - : 要素をそのボックスの端を基準として配置する位置を x/y 座標で指定します。位置は 1 つから 4 つの値を使用して定義することができます。2 つのキーワード以外の値が使用された場合、最初の値は水平位置、2 つ目の値は垂直位置を表します。1 つの値だけが指定された場合、 2 つ目の値は `center` とみなされます。 3 つまたは 4 つの値が使用された場合、 {{cssxref("length-percentage")}} 値は、その前のキーワードの値に対するオフセットとなります。これらの値の型について詳しくは、 {{cssxref("background-position")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 初期オフセット位置の設定

この例では、 {{cssxref("offset-path")}} プロパティを使用して、 `cyan` 要素が移動するパスを定義しています。 {{cssxref("basic-shape/path", "path()")}} CSS 関数の値は、曲線を記述する [SVG データパス](/ja/docs/Web/SVG/Reference/Attribute/d)です。要素は、 `move` アニメーションの実行中に、この曲線に沿って移動します。

#### HTML

```html
<div id="wrap">
  <div id="motion-demo"></div>
</div>
```

#### CSS

```css hidden
#wrap {
  width: 260px;
  height: 160px;
  border: 1px dashed black;
}
```

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  offset-position: left top;
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0%,
  20% {
    offset-distance: 0%;
  }
  80%,
  100% {
    offset-distance: 100%;
  }
}
```

#### 結果

{{EmbedLiveSample('Setting_initial_offset_position_for_an_offset-path', '100%', 200)}}

### 様々なオフセット開始位置の比較

この例では、 {{cssxref("ray", "ray()")}} を使用して {{cssxref("offset-path")}} プロパティの値を指定した場合、要素のさまざまな初期オフセット開始位置を視覚的に比較しています。要素ボックス内の数値は、CSS が適用される要素と、その要素のアンカー点を示しています。

```html hidden
<div class="wrap">
  <div class="box">0</div>
  <div class="box box0">0</div>
  <pre>
    offset-position: normal;
    /* offset-path は未指定 */
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box1">1</div>
  <pre>
    offset-position: normal;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box2">2</div>
  <pre>
    offset-position: auto;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box3">3</div>
  <pre>
    offset-position: left top;
    offset-path: ray(0deg);
  </pre>
</div>

<div class="wrap">
  <div class="box">0</div>
  <div class="box box4">4</div>
  <pre>
    offset-position: 30% 70%;
    offset-path: ray(120deg);
  </pre>
</div>
```

```css hidden
.wrap {
  position: relative;
  width: 80vw;
  height: 120px;
  border: 1px solid black;
  margin: 0 2em 4em 5em;
  text-align: center;
}

pre {
  font-size: 1em;
  text-align: right;
  padding-right: 10px;
  line-height: 1em;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.box + .box {
  opacity: 1;
}
```

```css
.box {
  background-color: green;
  border-top: 6px dashed white;
  background-clip: border-box;
  position: absolute;
  top: 20px;
  left: 20px;
  opacity: 20%;
  color: white;
}

.box0 {
  offset-position: normal;
}

.box1 {
  offset-position: normal;
  offset-path: ray(0deg);
}

.box2 {
  offset-position: auto;
  offset-path: ray(0deg);
}

.box3 {
  offset-position: left top;
  offset-path: ray(0deg);
}

.box4 {
  offset-position: 30% 70%;
  offset-path: ray(120deg);
}
```

#### 結果

{{EmbedLiveSample('Comparing various offset starting positions', '100%', 930)}}

`box0` では、`offset-path` プロパティがないということは、`offset-position` が `normal` または `auto` の場合、その効果がないことを意味します。`offset-position` が `normal` の場合、光線は包含ブロックの中心（つまり `50% 50%`）から始まります。これは、オフセットパスの既定の開始位置であり、`offset-position` が指定されていない場合に使用されます。オフセットの開始位置 `auto` と `left top` の違いに注意してください。値 `auto` は、要素のアンカーポイントをその要素の左上隅に配置しますが、値 `left top` は、要素のアンカーポイントを包含ブロックの左上隅に配置します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-rotate")}}
