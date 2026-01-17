---
title: var()
slug: Web/CSS/Reference/Values/var
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`var()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、他のプロパティの値の一部に代わって[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) (「CSS 変数」と呼ばれることもあります) の値を挿入できます。

{{InteractiveExample("CSS デモ: var()")}}

```css interactive-example-choice
border-color: var(--color-a);
```

```css interactive-example-choice
border-color: var(--color-b);
```

```css interactive-example-choice
border-color: var(--color-c);
```

```html-nolint interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    :root に 3 つの色オプションが設定されています。これらを使用して境界線の色を変更してください。
  </div>
</section>
```

```css interactive-example
:root {
  --color-a: pink;
  --color-b: green;
  --color-c: rebeccapurple;
}

#example-element {
  border: 10px solid black;
  padding: 10px;
}
```

`var()` 関数は、プロパティ名やセレクターなど、プロパティ値以外では使用できません。（使用してしまうと、無効な構文が生成されるか、もしくはその変数に接続していない値が生成されてしまいます。）

## 構文

```css
/* 基本的な使用 */
var(--custom-prop);

/* 代替値つき */
var(--custom-prop,);  /* 代替値は空の値 */
var(--custom-prop, initial); /* 代替値はプロパティの初期値 */
var(--custom-prop, red);
var(--custom-prop, var(--default-value));
var(--custom-prop, var(--default-value, red));
```

関数の最初の引数は、置換されるカスタムプロパティの名前です。関数のオプションの 2 番目の引数は、代替値として機能します。最初の引数で参照されるカスタムプロパティが定義されていなかったり、[CSS 全体のキーワード](/ja/docs/Web/CSS/Reference/Values/Data_types#css_全体のキーワード)に等しかったりした場合、関数は 2 つ目の値を使用します。

代替の構文は、カスタムプロパティの構文と同様にカンマを使用できます。たとえば `var(--foo, red, blue)` では、 `red, blue` を代替として定義します。つまり、最初のカンマから関数の最後にかけてのすべてが、代替値と見なされます。

### 値

- `<custom-property-name>`
  - : カスタムプロパティの名前で、 2 つのハイフンで始まる識別子で表されます。カスタムプロパティは、作成者とユーザーだけが使用できます。CSS はここに提示されているものを超えて意味を与えません。
- `<declaration-value>`
  - : カスタムプロパティの代替値で、カスタムプロパティが定義されていなかったり、[CSS 全体のキーワード](/ja/docs/Web/CSS/Reference/Values/Data_types#css_全体のキーワード)に等しかったりした場合に使用されます。この値には、改行、不等式の閉じ括弧、つまり `)`, `]`, `}`, トップレベルのセミコロン、感嘆符などの特別な意味を持つ文字を除く任意の文字を含めることができます。代替値も `var()` 構文を使用したカスタムプロパティとして定義できます。代替値が省略され、かつカスタムプロパティが定義されていない場合、`var()` 関数は[無効な値](#無効な値)として解決されます。

    > [!NOTE]
    > `var(--a,)` は有効であり、独自のプロパティ `--a` が定義されていなかったり、[CSS 全体のキーワード](/ja/docs/Web/CSS/Reference/Values/Data_types#css_全体のキーワード)に等しかったりした場合は、`var()` を無に置き換えられます。

## 形式文法

{{CSSSyntax}}

## 例

### :root に設定したカスタムプロパティの使用

#### CSS

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

#### 結果

{{EmbedLiveSample("Using a custom property set on :root")}}

ここでは、`background-color` プロパティの値がカスタムプロパティ `--main-bg-color` を通じて設定されます。したがって、HTML 本体の背景色はピンクになります。

### 設定前にカスタムプロパティを使用

#### CSS

```css
body {
  background-color: var(--main-bg-color);
}

:root {
  --main-bg-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Using a custom property before it is set")}}

この例では、カスタムプロパティの設定が後になったとしても、HTML の body の背景色はピンクのままになります。

### 他のファイルで設定されたカスタムプロパティの使用

#### HTML

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="1.css" />
    <link rel="stylesheet" href="2.css" />
  </head>
  <body></body>
</html>
```

#### CSS

```css
/* 1.css */
body {
  background-color: var(--main-bg-color);
}
```

```css
/* 2.css */
:root {
  --main-bg-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Using a custom property set in another file")}}

カスタムプロパティが別のファイルで宣言されていても、HTML の body の背景色はピンクになります。

### プロパティが設定されていなかった場合に使用する代替値付きのカスタムプロパティ

#### HTML

```html
<div class="component">
  <h1 class="header">見出し</h1>
  <p class="text">テキスト</p>
</div>
```

#### CSS

```css
/* component のスタイルでは */
.component .header {
  /* header-color が設定されていなければ、代替値である青のままになる */
  color: var(--header-color, blue);
}

.component .text {
  color: var(--text-color, black);
}

/* より規模の大きなアプリケーションのスタイルでは */
.component {
  --text-color: #008800;
}
```

#### 結果

{{EmbedLiveSample("Custom properties with fallbacks for use when the property has not been set")}}

`--header-color` が設定されていないため、テキスト「見出し」は代替値である青色になります。

### 代替値としてカスタムプロパティを使用

#### CSS

```css
:root {
  --backup-bg-color: teal;
}

body {
  background-color: var(--main-bg-color, var(--backup-bg-color, white));
}
```

#### 結果

{{EmbedLiveSample("Using a custom property as a fallback")}}

`--main-bg-color` が設定されていないため、本体の `background-color` は `--backup-bg-color`（ティール色）に代替されます。

### 無効な値

`var()` 関数は次の場合に、無効な値に解決することがあります。

- カスタムプロパティが定義されておらず、代替値も指定されていない。
- カスタムプロパティは定義されているが、その値が使用されているプロパティに対して不正な値である。

この場合、プロパティは値 {{cssxref("unset")}} を持つものとして扱われます。これは、変数が他の構文エラーのように「早期に失敗」することができないためです。つまり、ユーザーエージェントがプロパティ値が無効であると認識する時点では、他のカスケードされた値が既に投げられているからです。

例を示します。

#### HTML

```html
<p class="p1">未定義の変数</p>
<p class="p2">不正な変数</p>
<p class="p3">不正なリテラル色</p>
```

#### CSS

```css
p {
  color: red;
}

.p1 {
  color: var(--invalid-color);
}

.p2 {
  --invalid-color: 20px;
  color: var(--invalid-color);
}

.p3 {
  color: 20px;
}
```

#### 結果

{{EmbedLiveSample("Invalid values")}}

`var()` を使用している段落はデフォルトの黒に戻りますが、不正なリテラル色が指定された段落は赤のままであることに注意してください。これは `color: 20px` 宣言が単に無視されるためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("env","env(…)")}} – ユーザーエージェントによって制御される読み取り専用の環境変数
- [CSS カスタムプロパティ（変数）](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- {{cssxref("@property")}} アットルール
- [カスケード変数のための CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables)モジュール
