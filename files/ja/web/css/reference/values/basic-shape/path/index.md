---
title: path()
slug: Web/CSS/Reference/Values/basic-shape/path
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`path()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、[SVG パス](/ja/docs/Web/SVG/Reference/Element/path)文字列を受け取り、 [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)や CSS モーションパスで描かれるを図形を有効にするために使用します。`path()` 関数は、{{cssxref("basic-shape")}} データ型の値です。これは、CSS の {{cssxref("offset-path")}} および {{cssxref("clip-path")}} プロパティ、それに SVG の [`d`](/ja/docs/Web/SVG/Reference/Attribute/d) 属性で使用できます。

`path()` 関数を使用する際にはいくつかの制限があります。パスは単一の文字列として定義する必要があるため、変数（`var()` 関数）を使用して独自のパスを作成することはできません。同時に、パス内のすべての長さは暗黙的に[ピクセル](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#絶対的な長さの単位) (`px`) 単位で定義され、それ以外の単位は使用できません。[`shape()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/shape) 関数は `path()` 関数よりも柔軟性があります。

{{InteractiveExample("CSS デモ: path()")}}

```css interactive-example-choice
clip-path: path(
  "M  20  240 \
 L  20  80 L 160  80 \
 L 160  20 L 280 100 \
 L 160 180 L 160 120 \
 L  60 120 L  60 240 Z"
);
```

```css interactive-example-choice
clip-path: path(
  "M 20 240 \
 C 20 0 300 0 300 240 Z"
);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## 構文

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")

/* clip-path のみで使用される */
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")
```

### 引数

- [`<fill-rule>`](/ja/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : パス内の塗りつぶしルールです。指定可能な値は次の通りです。
    - `nonzero`: ある点が図形の内側にあるとみなされるのは、点から描画された光線がパス区間を左から右へ通過する数が右から左へ通過する数よりも多く、その結果がゼロ以外の値となる場合です。これが、`<fill-rule>` が省略された場合のデフォルト値です。

    - `evenodd`: ある点が図形の内側にあるとみなされるのは、その点から引かれた光線が横切るパス区間の数が奇数の場合です。これは、光線が図形に入るたびに、同数の回数だけ出ていないことを意味し、対応する出口のない奇数の進入回数を示します。

    > [!WARNING]
    > `<fill-rule>` は {{cssxref("offset-path")}} では対応しておらず、使用するとプロパティが無効になります。

- {{cssxref("string")}}
  - : 引用符に囲まれた[データ文字列](/ja/docs/Web/SVG/Reference/Attribute/d)で、[SVG パス](/ja/docs/Web/SVG/Reference/Element/path)を定義します。SVG パスデータ文字列には、[パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)が含まれており、暗黙的にピクセル単位を使用します。空のパスは無効と見なされます。

### 返値

{{cssxref("basic-shape")}} 値を返します。

## 形式文法

{{csssyntax}}

## 例

### `path()` 関数を `offset-path` 値として使用

次の例では、ボールが移動する楕円形のパスを作成するために、`path()` 関数が {{cssxref("offset-path")}} 値として指定されています。

```html
<div id="path">
  <div id="ball"></div>
</div>
<button>アニメーション</button>
```

```css
#path {
  margin: 40px;
  width: 400px;
  height: 200px;

  /* 灰色の坂を描画 */
  background: radial-gradient(at 50% 0%, transparent 70%, grey 70%, grey 100%);
}

#ball {
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;

  /* 楕円形のパスをマーク */
  offset-path: path("M 15 15 A 6 5.5 10 0 0 385 15");
}
```

```js
const btn = document.querySelector("button");
const ball = document.getElementById("ball");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", true);
  setTimeout(() => btn.removeAttribute("disabled"), 6000);

  ball.animate(
    // オフセットのパスをアニメーション
    { offsetDistance: [0, "100%"] },
    {
      duration: 1500,
      iterations: 4,
      easing: "cubic-bezier(.667,0.01,.333,.99)",
      direction: "alternate",
    },
  );
});
```

{{EmbedLiveSample("Use as the value of offset-path", "100%", 350)}}

### SVG パスで d 属性の値を変更する

`path()` は SVG の [`d` 属性](/ja/docs/Web/SVG/Reference/Attribute/d) の値を変更するために使用することができます。 CSS で `none` に設定することも可能です。

"V" マークは、 CSS のプロパティとして `d` が対応していれば、カーソルを置いたときに縦に反転します。

#### CSS

```css
html,
body,
svg {
  height: 100%;
}

/* ホバー時にこのパスを表示 */
#svg_css_ex1:hover path {
  d: path("M20,80 L50,20 L80,80");
}
```

#### HTML

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d="M20,20 L50,80 L80,20" />
</svg>
```

#### 結果

{{EmbedLiveSample('Modify the value of the SVG path d attribute', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)モジュール
- [CSS シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
- [The SVG `path` syntax: an illustrated guide](https://css-tricks.com/svg-path-syntax-illustrated-guide/) - CSS-tricks (2021)
