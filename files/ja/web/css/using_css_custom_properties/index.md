---
title: CSS カスタムプロパティ（変数）の使用
slug: Web/CSS/Using_CSS_custom_properties
l10n:
  sourceCommit: 13c58b0430c3972566ea2d3a254129c18b1ed800
---

{{CSSRef}}

**カスタムプロパティ**（**CSS 変数**や**カスケード変数**と呼ばれることもあります）は、CSS の作者によって作成され、文書全体で再利用可能な特定の値を含むエンティティです。カスタムプロパティ記法（たとえば、**`--main-color: black;`**）で設定し、{{cssxref("var", "var()")}} 関数（たとえば、 `color: var(--main-color);`）でアクセスします。

複雑なウェブサイトには、膨大な量の CSS があり、しばしば同じ値が使われています。たとえば、同じ色が異なる場所で数百も使われており、色を変更する場合、グローバルに検索し、置き換えをしなくてはなりません。カスタムプロパティを使えば、一ヶ所に値を保存しておき、複数の場所から参照することができます。更なるメリットとして、意味的な識別をしやすくなります。たとえば、 `--main-text-color` は `#00ff00` より、とりわけ同じ色がさまざまな文脈で使われる場合は理解しやすいでしょう。

カスタムプロパティはカスケードの対象であり、親から値を継承します。

> **メモ:** 変数は、メディアクエリーやコンテナークエリーの中では動作しません。{{cssxref("var", "var()")}} 関数は、要素のすべてのプロパティの、任意の場所で使用することができます。{{cssxref("var", "var()")}} 関数はプロパティ名やセレクターなど、プロパティ値以外のところでは使用できません。従って、メディアクエリーやコンテんなークエリーの中では使用できません。

## 基本的な使用方法

カスタムプロパティの宣言は、ハイフン 2 つ (`--`) で始まるカスタムプロパティ名と、何らかの有効な CSS 値になるプロパティ値を使用することで行われます。他のプロパティと同様、これはルールセットの中で次のように書きます。

```css
element {
  --main-bg-color: brown;
}
```

なお、ルールセットに指定されたセレクターは、カスタムプロパティを使用することができるスコープを定義します。よく使われる方法は、カスタムプロパティを {{cssxref(":root")}} 擬似クラスで定義することで、これにより HTML 文書の全体にわたって適用することができます。

```css
:root {
  --main-bg-color: brown;
}
```

但し、これは常にこうしなければならないわけではありません。カスタムプロパティのスコープを制限する良い理由があるかもしれません。

> **メモ:** カスタムプロパティの名前は大文字小文字を区別します。 — `--my-color` は `--My-color` とは別なカスタムプロパティとして扱われます。

前述の通り、普通のプロパティ値の代わりに {{cssxref("var", "var()")}} 関数の中でカスタムプロパティ名を使用することで、カスタムプロパティの値を使用することができます。

```css
element {
  background-color: var(--main-bg-color);
}
```

## カスタムプロパティの第一歩

それぞれ異なるクラスの要素に同じ色を適用するシンプルな CSS から始めましょう。

```css
.one {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}

.five {
  background-color: brown;
}
```

これを下の HTML に適用します。

```html
<div>
  <div class="one">1:</div>
  <div class="two">2: Text <span class="five">5 - more text</span></div>
  <input class="three" />
  <textarea class="four">4: Lorem Ipsum</textarea>
</div>
```

このようになるはずです。

{{EmbedLiveSample("First_steps_with_custom_properties",600,180)}}

## :root 擬似クラスの使用

CSS 中に同じ宣言が繰り返し出てくることに注意してください。いろいろな場所で背景色が `brown` に設定されています。 CSS の宣言によっては、カスケードの上流でこれを宣言し、 CSS の継承によってこの問題を自然に解決することもできます。些末なプロジェクトを除いて、常にこの手法が使えるわけではありません。 {{cssxref(":root")}} 擬似クラスでカスタムプロパティを宣言し、文書内の必要な場所で使用することで、繰り返して書く必要性を減らすことができるのです。

```css
:root {
  --main-bg-color: brown;
}

.one {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.five {
  background-color: var(--main-bg-color);
}
```

```html hidden
<div>
  <div class="one"></div>
  <div class="two">Text <span class="five">- more text</span></div>
  <input class="three" />
  <textarea class="four">Lorem Ipsum</textarea>
</div>
```

この例では、前回の例と同じ結果になりますが、目的のプロパティ値の正規宣言を1つだけ行うことができます。後でページ全体の値を変更したい場合に、とても有益です。

## カスタムプロパティの継承

カスタムプロパティは継承されます。これはつまり、もし与えられた要素にカスタムプロパティの値がない場合、その値は親の値を使用するということです。 HTML を見てみましょう。

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
```

下記の CSS を適用するとします。

```css
.two {
  --test: 10px;
}

.three {
  --test: 2em;
}
```

この場合、 `var(--test)` の結果は以下の通りです。

- `class="two"` の要素: `10px`
- `class="three"` の要素: `2em`
- `class="four"` の要素: `10px` (親から継承)
- `class="one"` の要素: _無効な値_、これはすべてのカスタムプロパティの既定値です。

これらはカスタムプロパティであり、実際には他のプログラミング言語で見られるような変数ではないことに留意してください。値は必要に応じて計算され、他のルールで使用するために格納されるわけではありません。例えば、要素にプロパティを設定して、兄弟の子孫のルールで受け取ることを期待することはできません。通常の CSS と同様、プロパティは一致するセレクターおよびその子孫に対してのみ設定されます。

## カスタムプロパティ代替値

[`var()`](/ja/docs/Web/CSS/var) 関数を使用して、指定された変数が定義されていない場合の**代替値**を複数定義することができます。[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)および[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) で作業するときに便利なことがあります。

> **メモ:** 代替値はブラウザーの互換性を修正するためには使用されません。ブラウザーが CSS カスタムプロパティに対応していない場合、代替値は助けになりません。これは CSS カスタムプロパティに対応しているブラウザーのための単なるバックアップであり、与えられた変数が定義されていなかったり、無効な値であったりした場合に別な値を選択させるためのものです。

関数の最初の引数は、代替される[カスタムプロパティ](https://www.w3.org/TR/css-variables/#custom-property)の名前です。関数の二番目の引数は、もしあれば、参照された[カスタムプロパティ](https://www.w3.org/TR/css-variables/#custom-property)が無効であった場合に代わりに使用される代替値です。この関数は引数を 2 つだけ受け付けるので、最初のカンマの後のものは、すべて二番目の引数として割り当てます。二番目の引数が無効な場合、次のように代替処理は失敗します。

```css
.two {
  /* --my-var が定義されていなければ red */
  color: var(--my-var, red);
}

.three {
  /* my-var 及び --my-background が定義されていなければ pink */
  background-color: var(--my-var, var(--my-background, pink));
}

.three {
  /* 無効: "--my-background, pink" */
  background-color: var(--my-var, --my-background, pink);
}
```

代替としてのカスタムプロパティを含めるには、上記の二番目の例のようにすることが、複数の代替値を提供するための正しい方法です。この技法は変数全体を解釈するのにより時間が掛かるので、性能上の問題が見られます。

> **メモ:** 代替値の構文は、[カスタムプロパティ](https://www.w3.org/TR/css-variables/#custom-property)の場合のように、カンマを使用することができます。例えば、 `var(--foo, red, blue)` は `red, blue` という代替値を定義します。最初のカンマから関数の終わりまでが代替値とみなされます。

## 値と妥当性

CSS の各プロパティには、定義された値のセットを割り当てることができます。プロパティに有効な値の集合から外れた値を割り当てた場合、そのプロパティは「無効」とみなされます。

ブラウザーは、通常のプロパティに無効な値が設定された場合、その値を破棄し、要素には、その宣言が単に存在しない場合に設定されるはずの値が割り当てられます。

しかし、カスタムプロパティの値が解釈されるとき、ブラウザーはその値がどこで使用されるかをまだ知らないので、ほとんどすべての値を*妥当*とみなす必要があります。

残念なことに、これらの値は妥当であっても、意味のない可能性がある場所で `var()` 関数表記で使用することができてしまいます。プロパティとカスタム変数が無効な CSS 文を生成する可能性があることから、*計算時に妥当*という新しい概念が導かれます。

ブラウザーが無効な `var()` の置き換えに遭遇した場合、プロパティの[初期値](/ja/docs/Web/CSS/initial_value)または[継承値](/ja/docs/Web/CSS/Inheritance)が使用されます。

次の 2 つの例でこれを説明します。

### 無効な通常プロパティ

この例では、`16px` という値を {{cssxref("color")}} プロパティに適用しようとしています。これは無効であるため、CSS は破棄され、結果はルールが存在しなかったかのようになり、代わりに前回の `color: blue` ルールが適用され、段落は青色となります。

#### HTML

```html
<p>この段落は初期値で黒です。</p>
```

#### CSS

```css
p {
  color: blue;
}

p {
  color: 16px;
}
```

#### 結果

{{EmbedLiveSample('Invalid normal properties', 100, 100)}}

### 無効なカスタムプロパティ

この例は前回のものと同様ですが、カスタムプロパティを使用しています。

期待通りに、ブラウザーは `--text-color` の値で `var(--text-color)` の場所を置き換えようとしますが、 `16px` は {{cssxref("color")}} に妥当なプロパティ値ではありません。置き換え後、プロパティは意味をなさなくなります。ブラウザーはこの状況を 2 段階で扱います。

1. {{cssxref("color")}} プロパティが継承可能であるかを確認します。可能ですが、 `<p>` には `color` プロパティを持つ親がありません。よって次の段階に進みます。
2. 値を**既定の初期値**、つまり、黒に設定します。

#### HTML

```html
<p>この段落は初期値で黒です。</p>
```

#### CSS

```css
:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

#### 結果

{{EmbedLiveSample('Invalid custom properties', 100, 100)}}

## JavaScript での値

カスタムプロパティを JavaScript で使用するには、標準のプロパティのようにします。

```js
// インラインスタイルから値を取得
element.style.getPropertyValue("--my-var");

// あらゆる場所の変数を取得
getComputedStyle(element).getPropertyValue("--my-var");

// インラインスタイルに値を設定
element.style.setProperty("--my-var", jsVar + 4);
```

## 関連情報

- [カスタムプロパティの構文](/ja/docs/Web/CSS/--*)
- [`var()`](/ja/docs/Web/CSS/var)
