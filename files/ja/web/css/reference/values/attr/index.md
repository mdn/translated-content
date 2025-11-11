---
title: attr()
slug: Web/CSS/Reference/Values/attr
original_slug: Web/CSS/attr
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

> [!NOTE]
> `attr()` 関数はどの CSS プロパティでも使用することができますが、 {{CSSxRef("content")}} 以外のプロパティでの対応は実験的です。

**`attr()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、選択した要素の属性の値を取得し、それをプロパティ値で使用するために使用されます。これは、 {{cssxref("var", "var()")}} 関数が独自のプロパティ値を置き換える方法と似ています。[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で使用することもでき、その場合は擬似要素を作る元になった要素の属性値が返されます。

{{InteractiveExample("CSS デモ: attr()", "tabbed-shorter")}}

```css interactive-example
blockquote {
  margin: 1em 0;
}

blockquote::after {
  display: block;
  content: " (source: " attr(cite) ") ";
  color: hotpink;
}
```

```html interactive-example
<blockquote cite="https://mozilla.org/en-US/about/">
  Mozilla makes browsers, apps, code and tools that put people before profit.
</blockquote>

<blockquote cite="https://web.dev/about/">
  Google believes in an open, accessible, private, and secure web.
</blockquote>
```

## 構文

```css
/* 単純な使用法 */
attr(data-count)
attr(href)

/* 型付き */
attr(data-width px)
attr(data-size rem)
attr(data-name raw-string)
attr(id type(<custom-ident>))
attr(data-count type(<number>))
attr(data-size type(<length> | <percentage>))

/* 代替値付き */
attr(data-count type(<number>), 0)
attr(data-width px, inherit)
attr(data-something, "default")
```

### 引数

`attr()` 関数の構文は次のようになります。

```plain
attr(<attr-name> <attr-type>? , <fallback-value>?)
```

引数は次の通りです。

- `<attr-name>`
  - : 選択した HTML 要素から取得すべき値の属性名です。
- `<attr-type>`
  - : 属性値が CSS 値に構文解析される方法を指定します。これは、`raw-string` キーワード、`type()` 関数、または CSS のサイズ単位（`<attr-unit>` 識別子を使用して指定）です。省略した場合は、既定で `raw-string` になります。
    - `raw-string`
      - : キーワード `raw-string` は、属性のリテラル値を CSS 文字列の値として扱い、CSS の構文解析（CSS エスケープ、空白の除去、コメントなど）を行わないようにします。`<fallback-value>` は、属性が省略されている場合にのみ使用されます。空の値を指定しても、代替値は適用されません。

        ```css
        attr(data-name raw-string, "stranger")
        ```

        > [!NOTE]
        > このキーワードは、元々は Chromium ブラウザーで `string` という名前で対応されていました。下位互換性を確保するため、しばらくは両方のキーワードが対応されます。

    - `type()`
      - : `type()` 関数は、値を構文解析する [データ型](/ja/docs/Web/CSS/Reference/Values/Data_types) を指定する `<syntax>` を引数として取ります。 `<syntax>` は {{CSSxRef("&lt;angle&gt;")}}、{{CSSxRef("&lt;color&gt;")}}、{{CSSxRef("&lt;custom-ident&gt;")}}、{{CSSxRef("&lt;image&gt;")}}、{{CSSxRef("&lt;integer&gt;")}}、{{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;length-percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;resolution&gt;")}}、{{CSSxRef("&lt;string&gt;")}}、{{CSSxRef("&lt;time&gt;")}}、{{CSSxRef("&lt;transform-function&gt;")}}、またはこれらの組み合わせです。

        ```css
        attr(id type(<custom-ident>), none)
        attr(data-count type(<number>), 0)
        ```

        複数の型を受け入れるには `type()` 関数に、許可するすべての `<syntax>` を `|` で区切って列挙します。

        ```css
        attr(data-size type(<length> | <percentage>), 0px)
        ```

        > [!NOTE]
        > [セキュリティ上の理由](#limitations_and_security) により、 {{CSSxRef("url_value", "&lt;url&gt;")}} は `<syntax>` として使用できません。

        あらゆるデータ型を受け入れるには、型として `*` を使用します。この場合も CSS の構文解析は発生しますが、構文解析が有効であること以外の要件は設定されず、構文解析の結果は `<string>` 値ではなく、トークンとして直接置換されます。

        ```css
        attr(data-content type(*))
        ```

    - `<attr-unit>`
      - : `<attr-unit>` 識別子は、数値が持つべき単位（ある場合）を指定します。これは、`%` 文字（パーセント値）、または [CSS の距離単位](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#distance_units) （`px`、`rem`、`deg`、`s` など）です。

        ```css
        attr(data-size rem)
        attr(data-width px, inherit)
        attr(data-rotation deg)
        ```

- `<fallback-value>`
  - : 指定した属性が存在しないか、または不正な値が含まれている場合に使用する値です。

### 返値

`attr()` の返値は、名前が `<attr-name>` である HTML 属性の値で、指定された `<attr-type>` として構文解析されるか、 CSS 文字列として解釈されるかのどちらかです。

`<attr-type>` が設定されている場合、 `attr()` は属性を指定された `<attr-type>` に構文解析して返します。属性を指定された `<attr-type>` に構文解析できない場合、代わりに `<fallback-value>` が返されます。 `<attr-type>` が設定されていない場合、属性は CSS 文字列に解釈されます。

`<fallback-value>` が設定されていない場合、 `<attr-type>` が設定されていないときは返値は空文字列になり、 `<attr-type>` が設定されているときは[保証された無効な値](/ja/docs/Glossary/guaranteed_invalid_value)になります。

## 解説

### 制限およびセキュリティ

`attr()` 関数は、ページ作成者がスタイル設定に使用することを意図しなかった属性、および機密情報（例えば、ページ上のスクリプトで使用されるセキュリティトークン）を含む可能性のある属性を参照することができます。通常、これは問題ありませんが、URL で使用するとセキュリティ上の脅威となる可能性があります。そのため、 `attr()` を使用して URL を動的に構築することはできません。

```html
<!-- これは動作しません -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
```

```css
span[data-icon] {
  background-image: url(attr(data-icon));
}
```

`attr( )` を使用する値は、「`attr()` 汚染」としてマークされます。 `attr()` 汚染された値を `<url>` として、または `<url>` 内で使用すると、宣言は[「計算値の時点において無効」（略して IACVT）](https://www.bram.us/2024/02/26/css-what-is-iacvt/)となります。

### 後方互換性

一般的に、現行の `attr()` 構文は下位互換性があります。これは、`<attr-type>` を指定しない従来の使用方法が以前と同じ動作をするためです。コードに `attr(data-attr)` があることは、 `attr(data-attr type(<string>))` またはより単純な `attr(data-attr string))` と記述することと同じです。

ただし、現行の `attr()` 構文が旧構文とは異なった動作をする 2 つの特殊なケースが 2 つあります。

次のスニペットでは、現行の `attr()` 構文に対応していないブラウザーは、2 つ目の宣言を構文解析できないため、それを破棄します。これらのブラウザーでの結果は `"Hello World"` になります。

```html
<div text="Hello"></div>
```

```css
div::before {
  content: attr(text) " World";
}
div::before {
  content: attr(text) 1px;
}
```

現行の構文に対応しているブラウザーでは、出力は何も表示されません。これらのブラウザーは 2 つ目の宣言を正しく構文解析しますが、 `content` プロパティとしては不正なコンテンツであるため、宣言は[「計算値の時点において無効」（略して IACVT）](https://www.bram.us/2024/02/26/css-what-is-iacvt/)となります。

このような状況を防ぐには、[機能検出](#機能検出)を使用することをお勧めします。

2 つ目の特殊なケースは次のとおりです。

```html
<div id="parent"><div id="child" data-attr="foo"></div></div>
```

```css
#parent {
  --x: attr(data-attr);
}
#child::before {
  content: var(--x);
}
```

現行の構文に対応していないブラウザーでは、テキスト `"foo"` が表示されます。現行の `attr()` に対応しているブラウザーでは、出力はありません。

これは、 `attr()` が `var()` 関数を使用する独自のプロパティと同様に、[計算値時点](https://www.bram.us/2024/02/26/css-what-is-iacvt/#custom-properties)で置換されるためです。現行の動作では、 `--x` は最初に `data-attr` 属性を `#parent` 要素から読み込もうとします。しかし、 `#parent` にはそのような属性がないため、空文字列が取得されます。その空文字列は `#child` 要素に継承され、その結果、`content: ;` という宣言が設定されます。

このような状況にならないように、明示的にそうしたい場合を除き、継承された `attr()` の値を子に渡さないでください。

### 機能検出

現行の `attr()` の構文に対応しているかどうか、 {{CSSxRef("@supports")}} アットルールを使用して機能検出することができます。検査では、高度な `attr()` を（カスタムではない）CSS プロパティに代入してみてください。

例を示します。

```css
@supports (x: attr(x type(*))) {
  /* ブラウザ－は現行の attr() に対応している */
}

@supports not (x: attr(x type(*))) {
  /* ブラウザーは現行の attr() に対応していない */
}
```

JavaScript では、[`CSS.supports()`](/ja/docs/Web/API/CSS/supports_static) を使用して、同じ検査を行うことができます。

```js
if (CSS.supports("x: attr(x type(*))")) {
  /* ブラウザ－は現行の attr() に対応している */
}}

if (!CSS.supports("x: attr(x type(*))")) {
  /* ブラウザーは現行の attr() に対応していない */
}
```

### 形式文法

{{CSSSyntax}}

## 例

### content プロパティ

この例では、 `data-foo` という [`data-*`](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)の値を、{{HTMLElement("p")}} 要素のコンテンツの前に追加しています。

#### HTML

```html
<p data-foo="hello">world</p>
```

#### CSS

```css
[data-foo]::before {
  content: attr(data-foo) " ";
}
```

#### 結果

{{EmbedLiveSample("content プロパティ", "100%", 50)}}

### 代替値の使用

{{SeeCompatTable}}

この例では、 `data-browser` という [`data-*`](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)の値を {{HTMLElement("p")}} 要素に追加しています。{{HTMLElement("p")}} 要素に `data-browser` 属性が存在しない場合、代替値「**不明**」を追加します。

#### HTML

```html
<p data-browser="Firefox">私の好きなブラウザー:</p>
<p>あなたの好きなブラウザー:</p>
```

#### CSS

```css
p::after {
  content: " " attr(data-browser, "不明");
  color: tomato;
}
```

#### 結果

{{EmbedLiveSample("using_fallback", "100%", 90)}}

### color 値

{{SeeCompatTable}}

この例では、 {{CSSXRef("background-color")}} の CSS 値を、 {{HTMLElement("div")}} 要素に割り当てられた `data-background` という [`data-*`](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)の値に設定しています。

#### HTML

```html-nolint
<div class="background" data-background="lime">
  ブラウザーが attr() の高度な使い方に 対応していない場合、背景は赤になるはずです。
</div>
```

#### CSS

```css hidden
.background {
  height: 100vh;
}
```

```css
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background type(<color>), red);
}
```

#### 結果

{{EmbedLiveSample("color 値", "100%", 50)}}

### 距離の単位の使用

{{SeeCompatTable}}

この例では、`data-rotation` 属性は `deg` 単位に構文解析され、要素の回転を指定します。

#### HTML

```html
<div data-rotation="-3">これは -3 度回転しています</div>
<div data-rotation="2">これ 2 度回転しています</div>
<div>これあｈ、代替値である 1.5deg の値を使用しています</div>
```

#### CSS

```css hidden
body {
  min-height: 100svh;
  display: grid;
  place-content: center;
  gap: 1em;
}
div {
  margin: 0 auto;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.5em;
}
```

```css
div {
  width: fit-content;
  transform-origin: 50% 50%;
  rotate: attr(data-rotation deg, 1.5deg);
}
```

#### 結果

{{EmbedLiveSample("using_dimension_units", "100%", 300)}}

### `attr()` の値を `<custom-ident>` として解釈

{{SeeCompatTable}}

この例では、{{cssxref("view-transition-name")}} プロパティの値は、要素の `id` 属性から派生しています。この属性は、 {{CSSxRef("&lt;custom-ident&gt;")}} に構文解析され、{{cssxref("view-transition-name")}} が値として受け入れるものになります。

{{cssxref("view-transition-name")}} の結果の値は、`card-1`、`card-2`、`card-3` などになります。

#### HTML

この HTML には 4 つのカードがあり、それぞれ異なる `id` 属性を持っています。そして「カードを切る」という `<button>` があり、これでカードを切ります。

```html
<div class="cards">
  <div class="card" id="card-1">1</div>
  <div class="card" id="card-2">2</div>
  <div class="card" id="card-3">3</div>
  <div class="card" id="card-4">4</div>
</div>
<button>カードを切る</button>
```

```html-nolint hidden
<div class="warning">
  <p>
    お使いのブラウザーは高度な <code>attr()</code> に対応していません。そのため、このデモは何も動作しません。
  </p>
</div>
```

#### CSS

カードはフレックスコンテナー内にレイアウトされます。

```css
.cards {
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 1em;
}
```

```css hidden
:root {
  view-transition-name: none;
}
::view-transition {
  pointer-events: none;
}

@supports (x: attr(x type(*))) {
  .warning {
    display: none;
  }
}

@layer layout {
  .card {
    border-radius: 0.25em;
    width: 20vw;
    max-width: 5em;
    aspect-ratio: 1 / 1.6;
    background: lightgrey;

    display: grid;
    place-content: center;
    font-size: 2em;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100svh;
    display: grid;
    place-content: center;
  }

  button {
    justify-self: center;
  }
}

@layer warning {
  .warning {
    padding: 1em;
    border: 1px solid #cccccc;
    background: rgb(255 255 205 / 0.8);
    text-align: center;
    order: -1;
    margin: 1em;
  }

  .warning > :first-child {
    margin-top: 0;
  }
  .warning > :last-child {
    margin-bottom: 0;
  }
}
```

それぞれのカードで、`attr()` 関数は `id` 属性を取得し、それを {{CSSxRef("&lt;custom-ident&gt;")}} に構文解析します。これは、 {{cssxref("view-transition-name")}} プロパティの値として使用されます。カードに `id` が設定されていない場合は、代わりにフォールバック値 `none` が使用されます。

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

`<button>` が押されると、カードがシャッフルされます。これは、すべてのカードへの参照を含む配列の順序をランダム化し、それぞれのカードの {{CSSxRef("order")}} プロパティを新しい配列のインデックス位置に更新することで実現されています。

それぞれのカードを新しい位置にアニメーションするために、[ビュー遷移](/ja/docs/Web/API/View_Transition_API/Using)を使用します。これは、`order` の更新を [`document.startViewTransition`](/ja/docs/Web/API/Document/startViewTransition) の呼び出しで囲むことで実現します。

```js
const shuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

document.querySelector("button").addEventListener("click", (e) => {
  const $cards = Array.from(document.querySelectorAll(".card"));
  shuffle($cards);
  document.startViewTransition(() => {
    $cards.forEach(($card, i) => {
      $card.style.setProperty("order", i);
    });
  });
});
```

#### 結果

{{EmbedLiveSample("parsing_attr_values_as_custom-idents", "100%", 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [HTML `data-*` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*)
- [SVG `data-*` 属性](/ja/docs/Web/SVG/Reference/Attribute/data-*)
