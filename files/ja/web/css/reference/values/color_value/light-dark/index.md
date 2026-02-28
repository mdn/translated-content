---
title: light-dark()
slug: Web/CSS/Reference/Values/color_value/light-dark
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`light-dark()`** は [CSS](/ja/docs/Web/CSS) の [`<color>` 関数](/ja/docs/Web/CSS/Reference/Values/Functions#色関数)で、プロパティに 2 つの色を設定することができます。開発者が明るい配色または暗い配色を設定したか、ユーザーがライト色またはダーク色のテーマをリクエストしたか検出することによって、 2 つの色の選択肢のいずれかを返します。テーマ色を [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) [メディア特性](/ja/docs/Web/CSS/Guides/Media_queries/Using#メディア特性を対象にする)クエリーに入れる必要はありません。
ユーザーは OS の設定（ライトモードやダークモードなど）やユーザーエージェントの設定を通じて、環境設定を推奨することができます。 `light-dark()` 関数は、任意の `<color>` 値が受け入れられる場合に、 2 つの色の値を指定することができます。 CSS の `light-dark()` 色関数は、ユーザーの環境設定が `light` に設定されている場合、または何も設定されていない場合に最初の値を返し、ユーザーの環境設定が `dark` に設定されている場合に 2 つ目の値を返します。

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

## 構文

```css
/* 名前付きのカラー値 */
color: light-dark(black, white);

/* RGB カラー値 */
color: light-dark(rgb(0 0 0), rgb(255 255 255));

/* カスタムプロパティ */
color: light-dark(var(--light), var(--dark));
```

### 値

関数記法: `light-dark(light-color, dark-color)`

- `light-color`
  - : {{CSSXref("&lt;color&gt;")}} 値で、明るい配色 (light {{CSSXref("color-scheme")}}) で設定するものです。

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} 値で、暗い配色 (dark {{CSSXref("color-scheme")}}) で設定するものです。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("color-scheme")}}
- {{CSSXref("&lt;color&gt;")}}
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- [`prefers-contrast`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) （{{cssxref("@media")}} 特性）
- [`contrast()`](/ja/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [WCAG: 色のコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) および {{cssxref("var")}}
