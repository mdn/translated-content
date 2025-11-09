---
title: if()
slug: Web/CSS/Reference/Values/if
original_slug: Web/CSS/if
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

{{SeeCompatTable}}

**`if()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、条件付き検査の結果に応じて、プロパティに異なる値を設定することができます。この検査は、[スタイルクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナースタイルクエリー)、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)、[機能クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)に基づいて行うことができます。

## 構文

```css-nolint
/* 単独の <if-test> */
if(style(--scheme: dark): #eeeeee;)
if(media(print): black;)
if(media(width > 700px): 0 auto;)
if(supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);)

/* <if-test> に else をつけたもの */
if(style(--size: "2xl"): 1em; else: 0.25em;)
if(media(print): white; else: black;)
if(media(width < 700px): 0 auto; else: 20px auto)
if(
  supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);
  else: #03045e;
)
if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
)

/* 複数の <if-test> */
if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
  else: none;
)

/* 一括指定内の <if-test> */
3px yellow if(
  style(--color: green): dashed;
  style(--color: yellow): inset;
  else: solid;
)
```

### 引数

この引数は、セミコロンで区切られた `<if-branch>` のリストです。それぞれの `<if-branch>` は、 `<if-condition>` にコロンと `<value>` が続く形式です。

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : `<if-test>` または `else` キーワード。
    - `<if-test>`
      - : [スタイルクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナースタイルクエリー)、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)、[機能クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)のいずれか。

    - `else`
      - : 常に true と評価される `<if-condition>` を表すキーワード。

- `<value>`
  - : プロパティの値。

### 返値

値または {{glossary("guaranteed_invalid_value", "guaranteed-invalid")}}。

## 解説

CSS の `if()` 関数は、CSS プロパティの値に条件付き論理を提供し、JavaScript の [`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文と同様に動作します。

`if(!)` 関数は、任意のプロパティの値内で使用することができ、セミコロンで区切られた `<if-condition>` を 0 個以上含めることができます。それぞれの `<if-condition>` は、`<if-test> : <value>` のペア、または `else : <value>` のペアのいずれかです。最後の `<if-condition>` の後のセミコロンはオプションです。

返値は次のように計算されます。

1. `<if-condition>` 式は、関数に現れる順に評価されます。
2. 最初の `true` と評価される `<if-condition>` は、関連付けられた `<value>` を返します。
3. `<if-condition>` が `true` と評価されない場合、関数は {{glossary("guaranteed_invalid_value", "&lt;guaranteed-invalid&gt:")}} を返します。これは、[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) や {{cssxref("anchor()")}} 関数など、代替値を持つ値文で `if()` 関数が使用されている場合、不正または `false` として動作します。

例を示します。

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

この場合、`--scheme` [カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) が `ice` と`fire` のどちらに設定されているかによって、{{htmlelement("div")}} 要素の {{cssxref("background-image")}} として異なる {{cssxref("gradient/linear-gradient", "linear-gradient()")}} を設定しています。 `--scheme` が存在しない場合、または存在しても他の値に設定されている場合は、 `else` の値が適用され、 `background-image` プロパティは `none` に設定されます。

> [!NOTE]
> それぞれの条件は、関連付けられた値とコロンで区切り、それぞれの `<if-condition> : <value>` ペアはセミコロンで区切る必要が あります。最後の `<if-condition> : <value>` ペアでは、セミコロンはオプションです。

> [!WARNING]
> `if` と開き括弧 (`(`) の間に空白があってはなりません。空白がある場合、宣言全体が不正になります。

単一の `<if-condition>` または `<value>` が不正な場合、`if()` 関数全体が不正になるわけではありません。代わりに、パーサーは次の `<if-condition> : <value>` ペアに移動します。 `<if-condition>` および `<value>` のいずれも有効でない場合、関数は {{glossary("guaranteed_invalid_value", "guaranteed-invalid")}} を返します。

### `else : <value>` ペアの頻度と位置

`if()` 関数内には、任意の位置に複数の `else : <value>` ペアを含めることができます。ただし、ほとんどの場合、セミコロンで区切られたリストの最後に 1 つの `else : <value>` ペアを指定して、`<if-test>` のいずれも真と評価されなかった場合に常に返される既定値を指定します。

`<if-test> : <value>` ペアの前に `else : <value>` ペアを含めると、`else` は常に `true` と評価されるため、それに続く条件は評価されません。したがって、次の `if()` は常に `none` を返し、2 つの `<if-test> : <value>` ペアは決して評価されません。

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

期待どおりに動作していない値をデバッグする場合、値リストの末尾以外の位置に `else : <value>` を配置したい場合があります。次の例では、最初の `<if-test> : <value>` ペアが正しく動作しているかどうかを調べます。正常に動作していない場合、`else : <value>` ペアは `url("debug.png")` の値を返し、最初の `<if-test> : <value>` ペアを修正する必要があることを示す画像を表示します。最後の 2 つの `<if-test> : <value>` ペアは、ここでも評価されません。

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    else: url("debug.png");
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

`if()` 関数は、`else : <value>` のペアのみ、またはまったく何も含まれていない場合でも、有効であることに注意してください。次のプロパティ値はどちらも有効です。

```css
background-color: if(else: yellow);
background-image: if();
```

これらの関数はあまり有用ではありません。妥当性を示すために記載してあります。この場合、{{cssxref("background-color")}} の値は常に `yellow` に設定され、 `background-image` は初期値に設定されます。 `background-color` を直接 `yellow` に、 `background-image` を `initial` または `none` に設定したほうがいいでしょう。

### if-test の型

`<if-test>` は 3 つのクエリー型のいずれかを受け入れます。この節では、それぞれの型について詳しく見ていきます。

#### スタイルクエリー

[スタイルクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナースタイルクエリー) の `<if-test>` を使用すると、要素に特定のプロパティ値が設定されているかどうかを検査し、その結果に応じて別のプロパティに値を適用することができます。先ほど、いくつかのスタイルクエリーの例を追ってみましたが、もう 1 つ例を見てみましょう。

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

同じ要素で `--scheme` 独自のプロパティが `ice` の値に設定されている場合、指定された `linear-gradient()` の値が返されます。そうでない場合、`none` が返されます。

`if(()` 文内でスタイルクエリーを使用すると、 {{cssxref("@container")}} クエリーよりも利点があります。コンテナーの親要素に設定されているスタイルをチェックする代わりに、独自のプロパティが設定されているかどうかによって、スタイルが設定されている要素を直接指定できるからです。

スタイルクエリー内では、`and`、`or`、`not` の論理も使用することができます。例を示します。

```css-nolint
background-color: if(
  style((--scheme: dark) or (--scheme: very-dark)): black;
);

background-color: if(
  style((--scheme: dark) and (--contrast: hi)): black;
);

background-color: if(
  not style(--scheme: light): black;
);
```

`@container` クエリーにはいくつかの利点があります。`if()` スタイルのクエリーでは、一度に 1 つのプロパティ値しか設定できませんが、`@container` クエリーを使用すると、一連のルール全体を条件付きで適用することができます。この 2 つの手法は相互に補完的であり、用途も異なります。

コンテナースタイルクエリーは、現在、通常の CSS プロパティは対応していません。CSS のカスタムプロパティのみ対応しています。例えば、以下は機能しません。

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### メディアクエリー

[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using) の `<if-test>` を使用すると、メディアクエリー検査の返値が true であるかどうかに応じて、プロパティの値を設定することができます。

メディア種別を使用することができます。例えば、次の `<if-test> : <value>` ペアは、印刷メディアでは `white` の値を返しますが、`else` 節は、印刷以外のメディアでは `#eeeeee` を返します。

```css-nolint
background-color: if(
  media(print): white;
  else: #eeeeee;
)
```

メディア特性も使用できます。次のコードは、現在のビューポートの幅が `700px` 未満の場合は `0 auto`、それ以外の場合は `20px auto` という値を返します。

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

これは、メディアクエリー結果に基づいて 1 つのプロパティの値を変更する必要がある場合に、実に有益です。

メディアクエリー内では、`and`、`or`、`not` の論理も使用することができます。例を示します。

```css-nolint
border-color: if(
  media((width > 700px) and (width < 1000px)): blue;
);

border-color: if(
  media((width < 500px) or (orientation: landscape)): blue;
);

background-color: if(
  not media(width < 500px): blue;
  else: red
);
```

1 つのメディアクエリーに基づいて複数の宣言やルールを設定したい場合は、通常の {{cssxref("@media")}} 構文を使用する必要があります。この 2 つの手法は相互に補完的であり、それぞれ異なる用途があります。

#### 機能クエリー

[機能クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) の `<if-test>` を使用すると、ブラウザーが特定のプロパティ値に対応しているかどうかによって、プロパティの値を設定することができます。

例えば、`lch()` 色に対応している場合は {{cssxref("color_value/lch()")}} 色を、対応していない場合は {{cssxref("color_value/rgb()")}} 色を返します。

```css-nolint
color: if(
  supports(color: lch(75% 0 0)): lch(75% 0 0);
  else: rgb(185 185 185);
)
```

セレクター対応クエリーも動作します。ブラウザーが {{cssxref(":buffering")}} 擬似クラスに対応している場合、次のクエリーは `1em` を返します。対応していない場合は `initial` を返します。

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

機能クエリー内では、`and`、`or`、`not` 論理も使用できます。例を示します。

```css-nolint
margin-top: if(
  supports((selector(:buffering)) and (color: blue)): 1em;
);

margin-top: if(
  supports((selector(:buffering)) or (color: not-a-color)): 1em;
);

margin-top: if(
  supports(not selector(:buffering)): 1em;
);
```

機能クエリーは、特定の値または別個のプロパティの対応状況に 基づいて単一のプロパティの値を変更する必要がある場合、 `if()` 文内で実に便利です。1 つの機能クエリーに基づいて複数の宣言またはルールを設定する場合は、通常の {{cssxref("@supports")}} 構文を使用することをお勧めします。この 2 つの手法は相互に補完的であり、用途も異なります。

### 代替値の指定

`if()` 文は、うまく機能しなくなることはありません。対応していないブラウザー用に、明示的な代替手段を指定しておく必要があります。

例えば、この例では、`if()` に対応していないブラウザー用に、静的な {{cssxref("padding")}} 値を指定しています。`if()` に対応しているブラウザーでは、最初の宣言は 2 つ目の宣言で上書きされ、 `--size: "2xl"` という独自のプロパティが設定されているかどうかによって、異なるパディング値が設定されます。

```css
padding: 1em;
padding: if(style(--size: "2xl"): 1em; else: 0.25em);
```

> [!NOTE]
> `else` 条件を忘れずに記載してください。`if()` に対応しているブラウザーでは、`else` 値が記載されておらず、`--size` が `"2xl"` 以外の場合、パディングは `initial` に設定されます。

### 全体および部分的な値

`if()` 関数は、任意の CSS プロパティの値として設定することができますが、プロパティ値の一部を決定するためにも使用できます。例えば、次の例では、{{cssxref("color_value/lch()")}} の色指定に対応しているかどうかによって、{{cssxref("border")}} 一括指定プロパティ内の {{cssxref("border-color")}} に異なる値を設定しています。

```css-nolint
border: if(
  supports(color: lch(75% 0 0)): 3px solid lch(75% 0 0);
  else: 3px solid silver;
);
```

しかし、`if()` 関数を使用すると、{{cssxref("border-color")}} 要素のみを指定することができます。

```css-nolint
border: 3px solid
  if(
    supports(color: lch(75% 0 0)): lch(75% 0 0); else: silver;
  );
```

### if() 関数の入れ子

`if()` 関数は、プロパティ値全体または個々の要素の場所として取ることができるため、`if()` 関数を他の `if()` 関数内、および {{cssxref("calc()")}} などの他の関数内に入れ子にして使用することができます。

例えば、この宣言では、`if()` を使用して、さまざまな条件に応じて `color` プロパティの値を設定しています。外側の `if()` 関数は、カスタムプロパティ `--scheme` が `ice` と `fire` のどちらに設定されているかによって、具体的な値を返します（どちらの条件も真を返さない場合は、 `else` 値 `black` が返されます）。

ただし、2 つの `<value>` も `if()` 関数です。これらの内部 `if()` 関数は、ユーザーが暗い色スキームを推奨している場合（[`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) メディアクエリーを使用して決定）、明るい色の値を返し、そうでない場合は暗い色の値を返します。

```css-nolint
color: if(
  style(--scheme: ice):
    if(
      media(prefers-color-scheme: dark): #caf0f8;
      else: #03045e;
    );
  style(--scheme: fire):
    if(
      media(prefers-color-scheme: dark): #ffc971;
      else: #621708;
    );
  else: black
);
```

次の例では、`width` プロパティを、親要素の幅のパーセント値から `50px` を差し引く `calc()` 関数に設定します。パーセント値は、`--scheme: wide` というカスタムプロパティが設定されているかどうかを検査する `if()` 関数で表します。設定されている場合、パーセント値は `70%` なので、外側の関数は `calc(70% - 50px)` と評価されます。設定されていない場合、パーセント値は `50%` なので、外側の関数は `calc(50% - 50px)` と評価されます。

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な `if()` の使い方

この例では、3 つの種類の `<if-test>` のそれぞれの基本的な使用法を示します。

#### HTML

この HTML には、2 つの {{htmlelement("article")}} 要素を含む {{htmlelement("section")}} 要素があり、その中に `<h2>` [見出し](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)が含まれています。 `<section>` には、[`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性内にカスタムプロパティ `--show-apple:true` が設定されています。このプロパティは、後でプロパティの値を条件付きで設定するために使用します。

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>最初の記事</h2></article>
  <article><h2>次の記事</h2></article>
</section>
```

#### CSS

CSS では、最初に `<section>` 要素を対象とし、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout) でレイアウトし、2 つの子要素 `<article>` 要素の間に {{cssxref("gap")}} を設定します。次に、 [`orientation`](/ja/docs/Web/CSS/Reference/At-rules/@media/orientation) メディアクエリー `<if-test>` を含む `if()` 関数を使用して、文書が横向きの場合に {{cssxref("flex-direction")}} プロパティの値を `row` に、縦向きの場合に `column` に設定します。これにより、広い画面では `article` 要素が横に並んだレイアウトになり、狭い画面では上下に並んだレイアウトになります。

```css hidden live-sample___basic
html {
  height: 100%;
  font-family: sans-serif;
}

body,
section {
  height: inherit;
}

h2 {
  text-align: center;
}

article {
  background-color: cyan;
  border: 3px solid gray;
  flex: 1;
}
```

```css-nolint live-sample___basic
section {
  display: flex;
  gap: 16px;
  flex-direction: if(
    media(orientation: landscape): row;
    else: column;
  )
}
```

次に、`<h2>` 要素の {{cssxref("::before")}} 擬似要素をターゲットとし、その {{cssxref("content")}} プロパティをリンゴの絵文字に設定します。ただし、`--show-apple: true` が設定されている場合のみです（これは、HTML でインライン {{htmlelement("style")}} を使用して、先ほど設定しました）。これは、[スタイルクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナースタイルクエリー) の `<if-test>` に対応する `if()` 関数を使用して実現しています。

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple: true): "🍎 ";
  );
}
```

最後に、`<h2>` 要素自体をターゲットにします。機能クエリー `<if-test>` を使用して、ブラウザーが `lch()` 色に対応しているかどうかを検査し、対応している場合は {{cssxref("color")}} プロパティを `lch()` 色に設定し、対応していない場合は 16 進数で表現した色に設定します。

```css-nolint live-sample___basic
h2 {
  color: if(
    supports(color: lch(29.57% 43.25 344.44)): lch(29.57% 43.25 344.44);
    else: #792359;
  )
}
```

#### 結果

{{EmbedLiveSample("basic", "100%", "240")}}

スタイル設定がどのように適用されているかに注目してください。ブラウザーの開発者ツールを使用して、レンダリングされたデモを変更し、最初の 2 つの `if()` クエリーに対する条件付きスタイル設定を検査してください。

- `<section>` 要素の `style` 属性を除去し、リンゴの絵文字が表示されなくなったことを確認してください。
- 埋め込み `<iframe>` の `height` 属性を `1200px` に変更します。これにより、方向が横向きから縦向きに変更されます。その結果、レイアウトがどのように変化するかを確認してください。

### `if()` による配色の制御

このデモでは、CSS の `if()` 関数を使って、CSS をより楽しく使う方法をご紹介します。それ以外にも、`if()` 関数を使って、カスタムプロパティの値を条件に応じて設定し、配色全体を制御することができます。

#### HTML

HTML には、いくつかのコンテンツを含む {{htmlelement("article")}} 要素が含まれています。最上位の見出し、2 つの {{htmlelement("p")}} 要素、および {{htmlelement("aside")}} です。また、配色を選択できる {{htmlelement("select")}} ドロップダウンを含む {{htmlelement("form")}} も含んでいます。

```html-nolint live-sample___color-scheme
<article>
  <h1>Main heading</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipiscing elit.
    Quisque faucibus ex sapien vitae pellentesque sem placerat.
    In id cursus mi pretium tellus duis convallis.
  </p>
  <aside>
    <h2>An aside</h2>
    <p>
      Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
      fringilla lacus nec metus bibendum egestas.
    </p>
  </aside>
  <p>
    Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
    hendrerit semper vel class aptent taciti sociosqu. Ad litora
    torquent per conubia nostra inceptos himenaeos.
  </p>
</article>
<form>
  <label for="scheme">配色を選択:</label>
  <select id="scheme">
    <option value="">既定</option>
    <option value="ice">Ice</option>
    <option value="fire">Fire</option>
  </select>
</form>
```

### JavaScript

JavaScript は、`<select>` 要素に [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントリスナーを追加します。新しい値が選択されると、スクリプトは `<article>` 要素の [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) 属性をその値に設定します。

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

CSS では、`<body>` 要素に `700px` の {{cssxref("max-width")}} を指定し、`auto` {{cssxref("margin")}} の値を使用して中央に配置しています。しかし、メディアクエリー `<if-test>` を含む `if()` 関数を使用して、ビューポートの幅が `700px` 未満の場合は `margin` 一括指定内の {{cssxref("margin-top")}} 要素を `0` に、それより広い場合は `20px` に設定します。これは、広い画面ではコンテンツの上部に少しマージンが取得されるが、狭い画面ではそれが除去され、少し奇妙に見えることを意味している。

```css hidden live-sample___color-scheme
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  line-height: 1.5;
}

form {
  padding-left: 20px;
  margin-top: 20px;
}

article h2 {
  margin: 0;
  font-size: 1.8rem;
}
```

```css-nolint live-sample___color-scheme
body {
  max-width: 700px;
  margin: if(
    media(width < 700px): 0;
    else: 20px;
  ) auto 0;
}
```

次に、`<article>` 要素の `class` 名と一致するように、`--scheme` というカスタムプロパティを設定します。このクラスは、`<select>` 要素で新しい値が選択されると、JavaScript によって設定されます。カスタム要素の値の重要性は、次の CSS ブロックでわかります。

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

CSS の `if()` 関数の真の実力は、カスタムプロパティと組み合わせたときに発揮されます。ここでは、`if()` 関数を使用して、カスタムプロパティ `--scheme` の値に応じて、カスタムプロパティ `--color1` と `--color2` に異なる色値を設定しています。次に、`<article>` 要素の {{cssxref("color")}}、{{cssxref("border")}}、{{cssxref("background-image")}} プロパティ、および `<aside>` 要素の `color` および `background-color` プロパティで、`--color1` および `--color2` の値を使用しています。

ここでは、独自のプロパティを使用して、 `if()` 関数で設定したさまざまな値によって、配色全体を制御しています。

```css-nolint live-sample___color-scheme
article {
  padding: 20px;
  --color1: if(
    style(--scheme: ice): #03045e;
    style(--scheme: fire): #621708;
    else: black;
  );
  --color2: if(
    style(--scheme: ice): #caf0f8;
    style(--scheme: fire): #ffc971;
    else: white;
  );

  color: var(--color1);
  border: 3px solid var(--color1);
  background-image: linear-gradient(
    to left,
    var(--color2),
    white,
    var(--color2)
  );
}

aside {
  color: var(--color2);
  background-color: var(--color1);
  padding: 20px;
}
```

最後に、`if()` 関数をさらに 2 か所で使用します。

- ビューポートの幅が `700px` より広い場合は、`<h1>` 要素の {{cssxref("font-size")}} を `calc(3rem + 2vw)` に設定し、それ以外の場合は `3rem` に設定します。これは、広い画面ではフォントサイズがビューポートの幅の変化に応じて動的に更新され、狭い画面ではフォントサイズが変更されないことを意味しています。
- `--scheme` カスタムプロパティの値に応じて、`<h1>` 要素の {{cssxref("::before")}} 擬似クラスの {{cssxref("content")}} に適切な絵文字を設定します。

```css-nolint live-sample___color-scheme
h1 {
  margin: 0;
  font-size: if(
    media(width > 700px): calc(3rem + 2vw);
    else: 3rem;
  );
}

h1::before {
  content: if(
    style(--scheme: ice): "❄️ ";
    style(--scheme: fire): "🔥 ";
    else: "";
  );
}
```

#### 結果

このデモは次のように表示されます。

{{EmbedLiveSample("color-scheme", "100%", "500")}}

さまざまな配色値を選択して、外観や操作感に与える効果を確認してみてください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテナースタイルクエリー](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#コンテナースタイルクエリー)
- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [機能クエリー](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS 値と単位モジュール](/ja/docs/Web/CSS/Guides/Values_and_units)
