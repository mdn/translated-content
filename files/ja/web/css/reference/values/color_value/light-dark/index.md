---
title: CSS `light-dark()` 関数
short-title: light-dark()
slug: Web/CSS/Reference/Values/color_value/light-dark
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

**`light-dark()`** は [CSS](/ja/docs/Web/CSS) の [関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、2 つの色または 2 つの画像を受け取り、[`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) [メディア特性](/ja/docs/Web/CSS/Guides/Media_queries/Using#メディア特性を対象にする)を使用することなく、アクティブな配色に基づいて色または画像を返します。

## 構文

```css-nolint
/* 名前付きのカラー値 */
light-dark(
  black,
  white
);

/* RGB カラー値 */
light-dark(
  rgb(0 0 0),
  rgb(255 255 255)
);

/* 画像 URL 値 */
light-dark(
  url("light-icon.png"),
  url("dark-icon.png")
);

/* linear-gradient 値 */
light-dark(
  linear-gradient(135deg, ghostwhite 20%, tomato),
  linear-gradient(45deg, darkslategray 20%, gold)
);

/* カスタムプロパティ値 */
light-dark(
  var(--light),
  var(--dark)
);
```

### 値

light-dark() 関数には 2 つの形式があります。

- 2 つの `<color>` 値を受け入れた場合:
  - `<color>` (ライト)
    - : {{CSSXref("color-scheme")}} が `light` であるか、設定されていない場合に使用される {{CSSXref("&lt;color&gt;")}} 値。
  - `<color>` (ダーク)
    - : {{CSSXref("color-scheme")}} が `dark` である場合に使用される {{CSSXref("&lt;color&gt;")}} 値。
- 2 つの `<image>` 値を受け入れた場合:
  - `<image>` (ライト)
    - : {{CSSXref("color-scheme")}} が `light` であるか、設定されていない場合に使用される {{CSSXref("&lt;image&gt;")}} 値。
  - `<image>` (ダーク)
    - : {{CSSXref("color-scheme")}} が `dark` である場合に使用される {{CSSXref("&lt;image&gt;")}} 値。
  - `none`
    - : `none` キーワードは、自然なサイズがない完全に透明な画像を生成します。

## 解説

ユーザーは、オペレーティングシステムの設定（例：ライトモードやダークモード）やユーザーエージェントの設定を通じて、好みの配色を示すことができます。`light-dark()` 関数は、任意の `<color>` 値が受け入れられる場合に、 2 つの色の値を指定することができます。`light-dark()` 関数は、ユーザーの環境設定が `light` に設定されている場合、または何も設定されていない場合に 1 つ目の値を返し、ユーザーの環境設定が `dark` に設定されている場合に 2 つ目の値を返します。

`light-dark()` 色の関数の対応を有効にするには、{{CSSXref("color-scheme")}} に `light dark` という値がなければなりません。ふつうはこれを {{CSSXref(":root")}} [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)に設定します。

```css
:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
```

## 形式文法

{{CSSSyntax}}

## 例

### 配色に基づいた色の設定

対応しているブラウザーでは、既定で、 `light-dark()` 色関数で返される色は、オペレーティングシステムの設定（ライトモードやダークモードなど）やユーザーエージェントの設定から設定されたユーザー環境に依存します。この設定は、ブラウザーの {{glossary("developer tools")}} で変更することもできます。

#### HTML

ライト色、ダーク色、ユーザーの推奨する配色に基づいて選択した色を対象とすることができるように、 3 つの部分を設けています。

```html-nolint
<h1>CSS の <code>light-dark()</code> 関数</h1>
<section>
  <h2>自動</h2>
  <p>この部分は、ユーザーシステムまたはユーザーエージェントの設定に反応します。</p>
</section>
<section class="light">
  <h2>ライト</h2>
  <p>
    この部分は <code>color-scheme: light;</code> のために明色になっています。
  </p>
</section>
<section class="dark">
  <h2>ダーク</h2>
  <p>この部分は <code>color-scheme: dark;</code> のために暗色になっています。</p>
</section>
```

#### CSS

ライトテーマとダークテーマの両方の色を含めています。また、文書全体の `light-dark()` 色関数を有効にするために、`:root` で文書の `color-scheme` を定義しています。

```css-nolint
:root {
  /* これは、明暗の切り替えを設定する必要がある */
  color-scheme: light dark;

  --light-bg: ghostwhite;
  --light-color: darkslategray;
  --light-code: tomato;

  --dark-bg: darkslategray;
  --dark-color: ghostwhite;
  --dark-code: gold;
}
* {
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  color: light-dark(var(--light-color), var(--dark-color));
}
code {
  color: light-dark(var(--light-code), var(--dark-code));
}
```

`light-dark()` 関数を有効にするだけでなく、 `color-scheme` プロパティは文書内の部分のユーザーの配色を上書きすることができます。ページ部分に明暗の配色のみを使用するように強制するには、 `color-scheme` プロパティを `light` または `dark` に設定するだけです。

> [!NOTE]
> 一般的にはこのようなことはすべきではありません。ここではデモのために使用しています。ユーザーが環境設定をした場合、通常はユーザーの環境設定を上書きしてはいけません。

```css
.light {
  /* 強制的にライトモードにする */
  color-scheme: light;
}
.dark {
  /* 強制的にダークモードにする */
  color-scheme: dark;
}
```

```css hidden
section {
  padding: 0.8rem;
}
```

#### 結果

{{EmbedLiveSample("setting_colors_based_on_color_scheme", "100%", 500)}}

### 配色に基づいてグラデーション背景を設定

この例では、前回の例と同じ HTML コードを使用していますが、`<p>` の代わりに `<div>` を設置しています。

```html hidden
<h1>CSS の <code>light-dark()</code> 関数で画像を使用</h1>
<p class="supports">
  このブラウザーは、画像に対する <code>light-dark()</code> に対応していません。
</p>
<div class="wrapper">
  <section>
    <h2>自動</h2>
    <div></div>
  </section>
  <section class="light">
    <h2>ライト</h2>
    <div></div>
  </section>
  <section class="dark">
    <h2>ダーク</h2>
    <div></div>
  </section>
</div>
```

#### CSS

```css-nolint hidden
:root {
  /* ライトモードとダークモードを切り替えるためにこれが必要 */
  color-scheme: light dark;

  --light-bg: ghostwhite;
  --light-color: darkslategray;
  --light-code: tomato;

  --dark-bg: darkslategray;
  --dark-color: ghostwhite;
  --dark-code: gold;
}
* {
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  color: light-dark(var(--light-color), var(--dark-color));
}
.wrapper {
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
}
.light {
  /* 強制的にライト配色 */
  color-scheme: light;
}
.dark {
  /* 強制的にダーク配色 */
  color-scheme: dark;
}
section {
  width: 25%;
  padding: 5px;
  color: light-dark(
    var(--light-code),
    var(--dark-code)
  );
  border: 2px solid light-dark(var(--light-code), var(--dark-code));
}
@supports (background-image: light-dark(url("light.png"), url("dark.png"))) {
  .supports {display:none;}
}
```

まず、明るい色と暗い色の `linear-gradient()` の値をカスタムプロパティとして定義します。

```css
:root {
  /* ライトとダークのグラデーション */
  --light-grad: linear-gradient(135deg, var(--light-bg) 20%, var(--light-code));
  --dark-grad: linear-gradient(45deg, var(--dark-bg) 30%, var(--dark-code));
}
```

```css hidden
section div {
  width: 80%;
  aspect-ratio: 1/1;
  margin: auto;
  border: 1px solid light-dark(var(--light-code), var(--dark-code));
}
@supports not (
  background-image: light-dark(url("light.png"), url("dark.png"))
) {
  section div {
    width: 60%;
  }
}
```

次に、`light-dark()` を使用して独自のプロパティを設定し、アクティブな配色に基づいて `background-image` プロパティを設定します。

```css-nolint
section div {
  background-image: light-dark(
    var(--light-grad),
    var(--dark-grad)
  );
}
```

#### 結果

{{EmbedLiveSample("setting_gradient_background_based_on_a_color_scheme", "100%", 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("color-scheme")}}
- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;image&gt;")}}
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- [`prefers-contrast`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) （{{cssxref("@media")}} 特性）
- [`contrast()`](/ja/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [WCAG: 色のコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) および {{cssxref("var")}}
