---
title: light-dark()
slug: Web/CSS/color_value/light-dark
l10n:
  sourceCommit: e1fe6bef090d700b63dae5da44b53ca603fcc6c1
---

{{CSSRef}}{{SeeCompatTable}}

**`light-dark()`** は [CSS](/ja/docs/Web/CSS) の [`<color>` 関数](/ja/docs/Web/CSS/CSS_Functions#color_functions)で、プロパティに 2 つの色を設定することができます。開発者が明色カラースキームまたは暗色カラースキームを設定したか、ユーザーがライト色またはダーク色のテーマをリクエストしたか検出することによって、 2 つの色の選択肢のいずれかを返します。テーマ色を [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme) [メディア特性](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features)クエリーに入れる必要はありません。
ユーザーは O Sの設定（ライトモードやダークモードなど）やユーザーエージェントの設定を通じて、環境設定を推奨することができます。 `light-dark()` 関数は、任意の `<color>` 値が受け入れられる場合に、 2 つの色の値を指定することができます。 CSS の `light-dark()` 色関数は、ユーザーの環境設定が `light` に設定されている場合、または何も設定されていない場合に最初の値を返し、ユーザーの環境設定が `dark` に設定されている場合に 2 つ目の値を返します。

`light-dark()` 色の関数の対応を有効にするには、{{CSSXref("color-scheme")}} に `light dark` という値がなければなりません。ふつうはこれを {{CSSXref(":root")}} [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)に設定します。

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

  - : {{CSSXref("&lt;color&gt;")}} 値で、明色カラースキーム (light {{CSSXref("color-scheme")}}) で設定するものです。

- `dark-color`
  - : {{CSSXref("&lt;color&gt;")}} 値で、暗色カラースキーム (dark {{CSSXref("color-scheme")}}) で設定するものです。

### 形式文法

{{csssyntax}}

## 例

### カラースキームに基づいた色の設定

対応しているブラウザーでは、既定で、 `light-dark()` 色関数で返される色は、オペレーティングシステムの設定（ライトモードやダークモードなど）やユーザーエージェントの設定から設定されたユーザー環境に依存します。この設定は、ブラウザーの {{glossary("developer tools")}} で変更することもできます。

#### HTML

ライト色、ダーク色、ユーザーの推奨する配色に基づいて選択した色を対象とすることができるように、 3 つのセクションを設けています。

```html-nolint
<h1>CSS の <code>light-dark()</code> 関数</h1>
<section>
  <h2>自動</h2>
  <p>
    このセクションは、ユーザーシステムまたはユーザーエージェントの設定に反応します。
  </p>
</section>
<section class="light">
  <h2>ライト</h2>
  <p>
    このセクションは <code>color-scheme: light;</code> のために明色になっています。
  </p>
</section>
<section class="dark">
  <h2>ダーク</h2>
  <p>このセクションは <code>color-scheme: dark;</code> のために暗色になっています。</p>
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

`light-dark()` 関数を有効にするだけでなく、 `color-scheme` プロパティは文書内のセクションのユーザーの配色を上書きすることができます。ページセクションに明暗の配色のみを使用するように強制するには、 `color-scheme` プロパティを `light` または `dark` に設定するだけです。

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
- [CSS 色](/ja/docs/Web/CSS/CSS_colors)モジュール
