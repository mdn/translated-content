---
title: SVG 効果の HTML コンテンツへの適用
slug: Web/SVG/Applying_SVG_effects_to_HTML_content
---

最近のブラウザーは、 [SVG](/ja/docs/Web/SVG) を [CSS](/ja/docs/Web/CSS) スタイルの中で使用して、 HTML コンテンツに対してグラフィカルな効果を適用することに対応しています。

SVG をスタイルで指定するには、同一文書内または外部のスタイルシートで指定することができます。使用できるプロパティは [`mask`](/ja/docs/Web/CSS/mask), [`clip-path`](/ja/docs/Web/CSS/clip-path), [`filter`](/ja/docs/Web/CSS/filter) の 3 つです。

> **メモ:** 外部ファイル内の SVG を参照する場合、参照側の文書と[同じオリジン](/ja/docs/Web/Security/Same-origin_policy)でなければなければなりません。

## 埋め込み SVG の使用

SVG 効果を CSS スタイルで適用するには、まず最初に 適用する SVG を参照する CSS スタイルを作る必要があります。

```html
<style>
  p {
    mask: url(#my-mask);
  }
</style>
```

上の例では、すべての段落が、 [ID](/ja/docs/Web/SVG/Element/mask) に `my-mask` を持つ [SVG の `<mask>`](/ja/docs/Web/HTML/Global_attributes/id) によってマスクされます。

### 例: マスキング

たとえば、次に示すような SVG のコードを HTML 文章に埋め込むと、HTML コンテンツに対してグラデーションマスクを提供する CSS スタイルを宣言することができます。

```html
<svg height="0">
  <mask id="mask-1">
    <linearGradient id="gradient-1" y2="1">
      <stop stop-color="white" offset="0" />
      <stop stop-opacity="0" offset="1" />
    </linearGradient>
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white" />
    <rect x="0.5" y="0.2" width="300" height="100" fill="url(#gradient-1)" />
  </mask>
</svg>
```

```css
.target {
  mask: url(#mask-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

この CSS の中で、`#mask-1` という ID への URL を使用してマスクが指定されていることに注目してください。これがその後ろで設定されている SVG マスクの ID です。それ以外の部分は、グラデーションマスクの詳細について記述しています。

実際に SVG の効果を HTML に適用する場合、次のように単純に上で定義した `target` スタイルをその要素に割り当てるだけです。

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>
```

上の例では、要素に適用されたマスクがレンダリングされるはずです。

{{EmbedLiveSample('Example_Masking', 650, 200)}}

### 例: クリッピング

この例では、 SVG を HTML コンテンツを切り抜くために使用する方法を実演します。リンクの反応範囲ごと切り取られていることに注目してください。

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>

<button onclick="toggleRadius()">Toggle radius</button>

<svg height="0">
  <clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox">
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" />
    <rect x="0.5" y="0.2" width="0.5" height="0.8" />
  </clipPath>
</svg>
```

```css
.target {
  clip-path: url(#clipping-path-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

これは、円と四角形からなる切り取りエリアを作り、`#clipping-path-1` という ID に割り当てています。これにより、スタイルから参照されています。このように `target` スタイルが確立されると、クリップパスはあらゆるエレメントに割り当てることができるようになります。

SVG にリアルタイムで変更を加えることができ、その変更は HTML のレンダリングに即座に反映されることに注目してください。たとえば、次のコードで上で定義したクリップパスの円の大きさを変更することができます。

```js
function toggleRadius() {
  var circle = document.getElementById("circle");
  circle.r.baseVal.value = 0.4 - circle.r.baseVal.value;
}
```

{{EmbedLiveSample('Example_Clipping', 650, 200)}}

### 例: フィルタリング

この例では HTML コンテンツに対して SVG を使用してフィルターを適用する方法を実演します。いくつかのフィルターを定義し、CSS を使って 3 つの要素それぞれに対して、通常の状態とマウスをホバーした状態の2つの状態にフィルターを適用します。

```html
<p class="target" style="background: lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<pre class="target">lorem</pre>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>
```

同じようにしてあらゆる SVG フィルタが適用できます。たとえば、ガウスぼかし効果を適用する場合は次のように書きます。

```html
<svg height="0">
  <filter id="f1">
    <feGaussianBlur stdDeviation="3" />
  </filter>
</svg>
```

あるいは色行列を適用するのであれば、次のようにします。

```html
<svg height="0">
  <filter id="f2">
    <feColorMatrix
      values="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </filter>
</svg>
```

さらに、いくつかのフィルタを示します。

```html
<svg height="0">
  <filter id="f3">
    <feConvolveMatrix
      filterRes="100 100"
      style="color-interpolation-filters:sRGB"
      order="3"
      kernelMatrix="0 -1 0   -1 4 -1   0 -1 0"
      preserveAlpha="true" />
  </filter>
  <filter id="f4">
    <feSpecularLighting
      surfaceScale="5"
      specularConstant="1"
      specularExponent="10"
      lighting-color="white">
      <fePointLight x="-5000" y="-10000" z="20000" />
    </feSpecularLighting>
  </filter>
  <filter id="f5">
    <feColorMatrix
      values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 1 0 0 0"
      style="color-interpolation-filters:sRGB" />
  </filter>
</svg>
```

5 つのフィルターは、次の CSS を用いて適用できます。

```css
p.target {
  filter: url(#f3);
}
p.target:hover {
  filter: url(#f5);
}
em.target {
  filter: url(#f1);
}
em.target:hover {
  filter: url(#f4);
}
pre.target {
  filter: url(#f2);
}
pre.target:hover {
  filter: url(#f3);
}
```

{{EmbedLiveSample('Example_Filtering', 650, 200)}}

### 例: ぼかし文字

文字にぼかしを入れるには、 Webkit ベースのブラウザーでは（接頭辞付きの）blur という CSS フィルターが使えます。 SVG のフィルターを用いても同じ効果が実現できます。

```html
<p class="blur">Time to clean my glasses</p>
<svg height="0">
  <defs>
    <filter id="wherearemyglasses" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
  </defs>
</svg>
```

SVG と CSS のフィルタは、同じクラス内で適用できます。

```css
.blur {
  filter: url(#wherearemyglasses);
}
```

{{ EmbedLiveSample('Example_Blurred_Text', 300, 100) }}

ぼかしは計算が重いので、特にスクロールやアニメーションを行う要素では、控えめに使用するようにしてください。

### Example: テキスト効果

SVG の効果を使用することで、プレーンな HTML のテキストと比較して、よりダイナミックで柔軟な方法でテキストを追加することができます。

SVG 要素と HTML の組み合わせでテキストを作成することで、さまざまなテキスト効果を作ることができます。テキストを回転させることができます。

```html
<svg height="60" width="200">
  <text x="0" y="15" fill="blue" transform="rotate(30 20,50)">
    Example text
  </text>
</svg>
```

## 外部参照の使用

クリッピング、マスキング、フィルタリングに使用できるSVGは、そのソースが適用されるHTMLの文書と同じオリジンである限り、外部ソースから読み込むことができます。

例えば、CSS が `default.css` という名前のファイルであれば、次のようになります。

```css
.target {
  clip-path: url(resources.svg#c1);
}
```

これで SVG が `resources.svg` という名前のファイルからインポートされ、クリップパスの ID に `c1` が使用されます。

## 関連情報

- [SVG](/ja/docs/Web/SVG)
- [SVG Effects for HTML Content](https://robert.ocallahan.org/2008/06/applying-svg-effects-to-html-content_04.html) (ブログ記事)
