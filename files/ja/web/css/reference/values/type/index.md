---
title: type()
slug: Web/CSS/Reference/Values/type
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{seecompattable}}

**`type()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、以下の CSS 機能で使用され、特定のデータ型を指定することができます。

- {{cssxref("attr()")}} 関数で、属性を解釈する際のデータ型を指定する。
- {{cssxref("@function")}} アットルールで、[CSS カスタム関数](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)の引数と返値で、許可されるデータ型を指定する。

> [!NOTE]
> {{cssxref("@property")}} アットルールの {{cssxref("@property/syntax", "syntax")}} 記述子の値は、同じ `<syntax>` を使用して、登録済み[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)で許可されるデータ型を定義することがっできますが、これは常に文字列の形で受け取ります。

## 構文

```css
/* 単一の値 */
type(<color>)
type(auto)

/* 複数の型を指定するための "|" 結合子 */
type(<length> | <percentage>)

/* 値の空白区切りのリスト */
type(<color>+)

/* 値のカンマ区切りのリスト */
type(<length>#)

/* 複数のキーワード */
type(red | blue | green)

/* データ型とキーワードの組み合わせ */
type(<percentage> | auto)

/* 全称構文型 */
type(*)
```

### 引数

`type()` 関数の構文は次の通りです。

```plain
type(<syntax>)
```

`<syntax>` 引数はデータ型を定義する式です。以下の形式を取ることができます。

- `<ident>`
  - : CSS キーワード値で、山括弧なしで記述します。

- `<syntax-type>`
  - : CSS データ型を表す、山括弧で囲まれた型名。以下のデータ型に対応しています。
    - `<angle>`
      - : 任意の {{cssxref("angle")}} 値を受け付けます。
    - `<color>`
      - : 任意の {{cssxref("&lt;color&gt;")}} 値を受け付けます。
    - `<custom-ident>`
      - : 任意の {{cssxref("&lt;custom-ident&gt;")}} 値を受け付けます。
    - `<image>`
      - : 任意の {{cssxref("image")}} 値を受け付けます。
    - `<integer>`
      - : 任意の {{cssxref("&lt;integer&gt;")}} 値を受け付けます。
    - `<length>`
      - : 任意の {{cssxref("&lt;length&gt;")}} 値を受け付けます。
    - `<length-percentage>`
      - : 任意の {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値、それに `<length>` と `<percentage>` の値を組み合わせた有効な任意の {{cssxref("calc()")}} を受け付けます。
    - `<number>`
      - : 任意の {{cssxref("&lt;number&gt;")}} 値を受け付けます。
    - `<percentage>`
      - : 任意の {{cssxref("&lt;percentage&gt;")}} 値を受け付けます。
    - `<resolution>`
      - : 任意の {{cssxref("resolution")}} 値を受け付けます。
    - `<string>`
      - : 任意の {{cssxref("&lt;string&gt;")}} 値を受け付けます。
    - `<time>`
      - : 任意の {{cssxref("&lt;time&gt;")}} 値を受け付けます。
    - `<transform-function>`
      - : 任意の {{cssxref("&lt;transform-function&gt;")}} 値を受け付けます。
    - `<transform-list>`
      - : 有効な {{cssxref("&lt;transform-function&gt;")}} 値のリストを受け付けます。これは `"<transform-function>+"` と等価であり、後に `+` や `#` トークンを付けることはできません。
    - `<url>`
      - : 任意の {{cssxref("url_value", "&lt;url&gt;")}} 値を受け付けます。

- `*`
  - : 全称構文です。

`<syntax-type>` の値は、次のトークンを使用して組み合わせることができます。

- `+`
  - : 空白区切りの値のリストが期待されます。
- `#`
  - : カンマ区切りの値のリストが期待されます。

さらに、`|` トークンは、複数の値を指定する際や、期待される構文の `<ident>` や `<syntax-type>` の値を組み合わせる際の区切り文字として使用できます。

### 返値

データ型定義です。

## 解説

`type()` 関数は、データ型を定義する必要がある場合に使用されます。これは、すべての CSS プロパティと関数に対して有効な値の集合を定義するために使用される、全体的な値定義構文のサブセットと考えることができます。

最も一般的な使用法として、`type()` は単一のデータ型を指定するために使用されます。次の例では、{{cssxref("attr()")}} 関数を使用して、{{cssxref("background-color")}} プロパティをユーザー定義の `data-background` 関数の値に設定しています。値に必要なデータ型は {{cssxref("&lt;color>")}} として指定されています。

```css
background-color: attr(data-background type(<color>), red);
```

正確なキーワード要件（`type(blue)` など）を指定することも可能ですが、これは制限が厳しすぎるかもしれません。

`type(*)` を指定すると、有効な CSS 値がすべて許可されます。これは全称構文であり、他の構文要素と組み合わせたり、重複して使用したりすることはできません。

### 複数の型が許容される指定

複数の受け入れ可能なデータ型を指定するには、区切り文字として `|` 記号を使用します。例を示します。

- `type(<length> | <percentage>)`
- `type(red | green)`
- `type(<length> | auto)`

次の例では、{{cssxref("@function")}} アットルールを使用して[カスタム関数](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)を定義することができる様子を示しています。この関数は 2 つの色引数を受け取り、ビューポートの幅が `700px` 未満である場合は 2 番目の引数を返し、それ以外の場合は最初の引数を返します。最初の引数は `red` または `green` であることが許可されていますが、2 番目の引数は `blue` でなければなりません。

```css
@function --color-choice(--color1 type(red | green), --color2 blue) {
  result: var(--color1);
  @media (width < 700px) {
    result: var(--color2);
  }
}
```

> [!NOTE]
> `@function` のデータ型の場合、指定されるデータ型またはキーワードが1つだけの場合には、`type()` 関数を省略し、値のみを指定することができます。これは、上記のカスタム関数における `blue` 型の定義が該当します。ただし、`attr()` 関数ではこの方法は機能しません。

### 型のリストを指定

次のように `+` および `#` トークン を `<syntax-type>` に付加することで、それぞれ空白区切りリストまたはカンマ区切りリストを期待していることを指定できます。

- `<color>+` 引数は `<color>` 値の空白区切りリストを期待します。例えば `red blue #a60000 rgb(234 45 100)` などです。
- `<length>#` 引数は `<length>` 値のカンマ区切りリストを期待します。例えば `30px, 1em, 15vw` などです。

複数のトークンを、区切り文字として `|` を使用して組み合わせることができます。例えば、`<color># | <integer>#` は、`<color>` 値のカンマ区切りリスト、または `<integer>` 値のカンマ区切りリストを期待します。

## 形式文法

{{csssyntax}}

## 例

{{cssxref("attr()")}} または {{cssxref("@function")}} のドキュメントで、他の例をいくつか見ることができます。

### 基本的な `@function` データ型定義

この例は、複数の文字列を結合する CSS カスタム関数を定義しています。

#### HTML

この HTML には、いくらかのテキストの入った単一の {{htmlelement("section")}} 要素があります。

```html live-sample___basic-data-type
<section>言いたいことは？</section>
```

#### CSS

CSS では、まずの `@function` を `--combine-strings` という名前で定義します。この関数には `--strings` という引数があり、そのデータ型は空白で区切った `<string>` 値を 1 つ以上と指定されています。この関数は、文字列値の末尾に空白とハートの絵文字を追加した結果を返します。

```css-nolint live-sample___basic-data-type
@function --combine-strings(--strings type(<string>+)) {
  result: var(--strings) " ❤️";
}
```

次に、`<section>` 要素の基本スタイルを指定し、`--combine-strings()` 関数を使用してその {{cssxref("content")}} プロパティの値を指定します。引数として空白区切りの 2 つの文字列を含みます。

```css live-sample___basic-data-type
section {
  font-family: system-ui;
  background-color: lime;
  padding: 20px;
}

section::after {
  content: --combine-strings("こんにちは" "さようなら");
}
```

#### 結果

{{ EmbedLiveSample('basic-data-type', '100%', '70') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@function")}} アットルール
- {{cssxref("attr()")}} 関数
- [CSS カスタム関数の使用](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
