---
title: "@function"
slug: Web/CSS/Reference/At-rules/@function
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

{{SeeCompatTable}}

**`@function`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、[CSS カスタム関数](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)を定義することができます。定義された独自の関数は、任意のプロパティ値内で {{cssxref("&lt;dashed-function>")}} 構文（`--my-function(30px, 3)` など）を使用して呼び出すことができます。

## 構文

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

`@function`構文のそれぞれの部分は次の通りです。

- `--function-name`
  - : 関数の識別名。`--` で始まり、有効なユーザー定義識別子が続く {{cssxref("dashed-ident")}} です。大文字小文字を区別します。
- `<function-parameter>#?` {{optional_inline}}
  - : 関数のゼロ個以上の引数定義です。複数ある場合はカンマで区切ります。それぞれの引数は以下のような構成です。
    - `--param-name`
      - : 引数を識別する [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)名。これは `--` で始まり、有効なユーザー定義識別子が続く {{cssxref("dashed-ident")}} です。大文字小文字を区別します。関数の引数は、関数本体にローカルスコープを持つカスタムプロパティと考えることができます。
    - `<css-type>` {{optional_inline}}
      - : 引数で受け入れられるデータ型を定義する CSS データ型または {{cssxref("type()")}} 関数です。指定しなかった場合、引数にはあらゆるデータ型が有効となります（`type(*)` を指定した場合と同様）。
    - `<default-value>` {{optional_inline}}
      - : 関数が呼び出された際に引数が指定されていない場合に設定されるデフォルト値を指定する CSS 値です。この値は、`<css-type>` が指定されている場合、それに従って有効なものでなければなりません。デフォルト値は、コロン (`:`) で引数定義の他の部分から区切られます。
- `[returns <css-type>]?` {{optional_inline}}
  - : CSS データ型または {{cssxref("type()")}} 関数を `returns` キーワードに続けて指定し、受け入れられる返値の型を定義します。これを指定しない場合、返値には任意のデータ型が有効となります（`returns type(*)` を指定した場合と同様）。ただし、返値の型が `result` 記述子によって生成される型と一致しない場合、関数は無効な状態になることに注意してください。
- `<declaration-rule-list>`
  - : この関数の論理を定義する関数本体を構成する、1 つ以上の CSS 宣言またはアットルールです。中の宣言には以下を含めることができます。
    - 関数本体にローカルにスコープされる CSS カスタムプロパティ。
    - `result` 記述子は。`@function` アットルール内に直接記述するか、またはネストされたアットルール内に記述します。

### 記述子

- `result`
  - : CSS カスタム関数が返す結果を定義する有効なプロパティ値です。値に含まれる式が評価され、その結果が返されます。

## 解説

CSS カスタム関数を使用すると、再利用可能な論理セクションを定義することができます。これは入力値として受け入れる引数と、関数本体内に定義された論理に応じて、様々な値を返します。

一般的な CSS 関数は次のようになります。

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

この関数は `--transparent` という名前を持ち、`--color` と `--alpha` という 2 つ のカスタムプロパティを引数として受け取ります。これらは関数本体内でローカルに使用することができます。本体には 1 行のみが含まれており、これは関数が返す値を定義する `result` 記述子です。`result` 記述子の値は、[CSS 相対色構文](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)を使用して入力された `--color` 値を変換し、入力された `--alpha` 値で指定されたアルファチャンネル値を持つ {{cssxref("color_value/oklch")}} 色を生成します。

この関数は、既存の色の半透明バージョンを生成したい任意の場所で呼び出すことができます。例えば次のようにします。

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

関数は、関数名の末尾に括弧を付けた {{cssxref("&lt;dashed-function>")}} 構文を使用して呼び出されます。必要な引数値は括弧内に指定します。

> [!NOTE]
> 複数の CSS 関数に同じ名前が指定された場合、より強いカスケードレイヤー ({{cssxref("@layer")}}) 内の関数が優先されます。すべてが同じレイヤーにある場合、ソース順で最後に定義された関数が優先されます。

### データ型の指定

関数の引数や返値のデータ型を指定できます。例えば次のようにします。

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

これで、この関数は入力引数がそれぞれ {{cssxref("&lt;color&gt;")}} と {{cssxref("&lt;number&gt;")}} であり、かつ `result` が {{cssxref("&lt;color&gt;")}} であった場合のみ有効な値を生成します。そうでない場合、例えば、

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

すると、計算値の時点で値が不正になります（指定された `--alpha` 引数が `<percentage>` であり、期待される `<number>` ではないため）。その結果、`background-color` は `transparent` に設定されます。

複数の型を受け付ける場合は、{{cssxref("type()")}} 関数とセパレーターの `|` 記号を使用して、次の例のように指定することができます。

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

この調整により、`--transparent(var(--base-color), 50%)` という関数呼び出しが有効になりました。

## デフォルト値の指定

引数の定義の末尾にコロンを付けて、デフォルト値を指定することも可能です。例を示します。

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

`--alpha` 引数のデフォルト値は `0.8` に指定されました。この値を使用する場合は、関数呼び出し時に第二引数を省略できます。

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> 関数の引数として不正な値が渡され、かつその引数定義でデフォルト値が指定されている場合、不正な値は無視され、代わりにデフォルト値が使用されます。

### 引数としてカンマを含んだ値を渡す

次の例では、`--max-plus-x()` 関数は引数として、長さ値のカンマ区切りリストと単一の長さ値を渡すと想定しています。この関数は CSS の {{cssxref("max()")}} 関数を用いて、長さ値のリストの中で最大値を判定し、それを単一の長さ値に追加した結果を返します。

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

最初の引数はカンマ区切りのリストである必要がありますが、これは 3 つの別個の引数と誤解釈される可能性があります。この問題を回避するには、関数呼び出し時に渡す際に値を中括弧で囲みます。

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### 関数内にカスタムプロパティを含める

これまで見てきたように、関数の引数はカスタムプロパティとして定義され、関数本体内で利用することができます。

関数本体内でカスタムプロパティを指定することもでき、それらはローカルスコープの定数として機能します。次の例では、`--anim-1s()` という関数を定義しています。この関数は、再生時間とイージング値が常に同じで、アニメーション名とカウントのみが変化する {{cssxref("animation")}} の一括指定値を返します。

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

この種の使用法により、アニメーションに対してより簡潔で表現力豊かな構文を記述することができます。ただし、再生時間とイージング関数を常に同じ値に指定することを前提とします。

```css
animation: --anim-1s(bounce, 2);
```

また、あるカスタム関数から別のカスタム関数を呼び出すことも可能である点も特筆すべきでしょう。このような場合、カスタム関数はコールスタックの上位にある関数からローカル変数や関数引数にアクセスできます。ここでは、外側の関数の引数とローカルカスタムプロパティが内側の関数のスコープ内で利用できます。

```css
@function --outer(--outer-arg) {
  --outer-local: 2;
  result: --inner();
}

@function --inner() returns <number> {
  result: calc(var(--outer-arg) + var(--outer-local));
}

div {
  z-index: --outer(1); /* 3 */
}
```

さらに、カスタム関数が呼び出されるのと同じ要素上に定義されたカスタムプロパティは、その関数から利用することができます。

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

同じ名前のカスタムプロパティが複数の場所で定義されている場合、関数の引数は同じ要素に定義されたカスタムプロパティを上書きし、関数本体内で定義されたローカルカスタムプロパティは両方を上書きします。次の例では、`--add-a-b-c()` 関数は `--a` プロパティを `div` ルールのカスタムプロパティから、`--b` プロパティを関数の引数から、そして `--c` はローカルカスタムプロパティを使用します。

```css
@function --add-a-b-c(--b, --c) {
  --c: 300;
  result: calc(var(--a) + var(--b) + var(--c));
}

div {
  --a: 1;
  --b: 2;
  --c: 3;
  z-index: --add-a-b-c(20, 30); /* 321 */
}
```

### 複雑な論理を組み込む

関数内では {{cssxref("@media")}} アットルールや {{cssxref("if()")}} 関数などの構文を用いて、より複雑なロジックを含めることができます。例えば、次の関数は 2 つの引数を取ります。1 つは狭い画面レイアウト用、もう 1 つは広画い面レイアウト用です。デフォルトで後者を返しますが、メディアクエリーで検出されたビューポート幅が `700px` 未満の場合、前者を返します。

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

様々な論理の出力について異なる結果を表すために、複数の `result` 記述子を含めることができます。

> [!NOTE]
> CSS 関数は、競合解決に関して他の CSS 要素と同様の挙動を示します——ソース順序で後から記述されたものが優先されます。したがって、上記の関数では、メディアクエリーの検査が真を返さない限り、`result` は `var(--wide)` となります。メディアクエリーの検査が真を返した場合、`var(--narrow)` によって上書きされます。
>
> CSS 関数には JavaScript 関数のような早期復帰はありません。上記の関数では、メディアクエリーを単体の `result` の前に書くと、`result` は常に `var(--wide)` となります。メディアクエリーの検査が真を返したとしても、`var(--narrow)` が上書きされてしまうからです。

代わりに CSS カスタム関数を、`if()` 関数を使用するように書き換えることもできます。

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## 形式文法

{{csssyntax}}

## 例

その他の例については、[CSS カスタム関数の使用](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)ガイドを参照してください。

### 基本的な `@function` の使い方

この例は、渡された値を 2 倍にする基本的な関数を示しています。

#### HTML

このマークアップには、テキストコンテンツを含む {{htmlelement("p")}} 要素があります。

```html live-sample___basic-example
<p>いくらかのコンテンツ</p>
```

#### CSS

このスタイルでは、まず CSS カスタム関数を定義しています。この関数は `--double` と呼ばれ、任意の型の単一の引数（`--value` と命名）を受け取ります。関数本体には、渡された引数を 2 倍にするために `calc()` 関数を使用する `result` 記述子があります。

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

次に、`--base-spacing` カスタムプロパティを値 `10px` で定義します。このプロパティを {{cssxref("border-radius")}} の値に割り当てますが、その後で {{cssxref("padding")}} の値に対しては `--double()` カスタム関数を使用して 2 倍にしています。

```css hidden live-sample___basic-example
html,
body {
  height: 100%;
}

body {
  margin: 0;
  display: grid;
  place-items: center;
  font-family: system-ui;
}
```

```css live-sample___basic-example
p {
  --base-spacing: 10px;
  border-radius: var(--base-spacing);
  padding: --double(var(--base-spacing));
  width: 50%;
  background-color: wheat;
}
```

#### 結果

{{ EmbedLiveSample('basic-example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("&lt;dashed-function>")}} データ型
- [`type()`](/ja/docs/Web/CSS/Reference/Values/type) 関数
- [CSS カスタム関数の使用](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [CSS カスタム関数とミックスイン](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins)モジュール
