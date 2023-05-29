---
title: CSS カスタムプロパティ (変数) の使用
slug: Web/CSS/Using_CSS_custom_properties
---

{{cssref}}

**カスタムプロパティ** (**CSS 変数**や**カスケード変数**と呼ばれることもあります) は、 CSS の作者によって作成され、文書全体で再利用可能な特定の値を含むエンティティです。それらは、カスタムプロパティ記法 (たとえば、**`--main-color: black;`**) によって設定し、 [`var()`](/ja/docs/Web/CSS/var) 関数 (たとえば、 `color: var(--main-color);`) を使ってアクセスします。

複雑なウェブサイトには、膨大な量の CSS があり、しばしば同じ値が使われています。たとえば、同じ色が異なる場所で数百使われており、色を変更する場合、グローバルに検索し、置き換えをしなくてはなりません。カスタムプロパティを使えば、一ヶ所に値を保存しておき、複数の場所から参照することができます。更なるメリットとして、意味的な識別をしやすくなります。たとえば、 `--main-text-color` は `#00ff00` より、とりわけ同じ色がさまざまな文脈で使われる場合は理解しやすいでしょう。

カスタムプロパティはカスケードの対象であり、親から値を継承します。

## 基本的な使用方法

カスタムプロパティの宣言は、ハイフン 2 つ (`--`) で始まるカスタムプロパティ名と、何らかの有効な CSS 値になるプロパティ値を使用することで行われます。他のプロパティと同様、これは規則セットの中で次のように書きます。

```css
element {
  --main-bg-color: brown;
}
```

なお、規則セットに指定されたセレクターは、カスタムプロパティを使用することができるスコープを定義します。よく使われる方法は、カスタムプロパティを {{cssxref(":root")}} 擬似クラスで定義することで、これにより HTML 文書の全体にわたって適用することができます。

```css
:root {
  --main-bg-color: brown;
}
```

但し、これは常にこうしなければならないわけではありません。カスタムプロパティのスコープを制限する良い理由があるかもしれません。

> **メモ:** カスタムプロパティの名前は大文字小文字を区別します。 — `--my-color` は `--My-color` とは別なカスタムプロパティとして扱われます。

前述の通り、普通のプロパティ値の代わりに {{cssxref("var()")}} 関数の中でカスタムプロパティ名を使用することで、カスタムプロパティの値を使用することができます。

```css
element {
  background-color: var(--main-bg-color);
}
```

## カスタムプロパティの最初のステップ

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
  <input class="three">
  <textarea class="four">4: Lorem Ipsum</textarea>
</div>
```

このようになるはずです。

{{EmbedLiveSample("sample1",600,180)}}

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
    <input class="three">
    <textarea class="four">Lorem Ipsum</textarea>
</div>
```

この結果は前の例と同じになるはずであり、望んだプロパティを一つの標準的な宣言で実現することができます。

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

これらはカスタムプロパティであり、実際には他のプログラミング言語で見られるような変数ではないことに留意してください。値は必要に応じて計算され、他の規則で使用するために格納されるわけではありません。例えば、要素にプロパティを設定して、兄弟の子孫の規則で受け取ることを期待することはできません。通常の CSS と同様、プロパティは一致するセレクターおよびその子孫に対してのみ設定されます。

## カスタムプロパティ代替値

[`var()`](/ja/docs/Web/CSS/var) 関数を使用して、指定された変数が定義されていない場合の**代替値**を複数定義することができます。[カスタム要素](/ja/docs/Web/Web_Components/Using_custom_elements)および[シャドウ DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) で作業するときに便利なことがあります。

> **メモ:** **代替値はブラウザーの互換性を修正するためには使用されません。**ブラウザーが CSS カスタムプロパティに対応していない場合、代替値は助けになりません。**これは CSS カスタムプロパティに対応しているブラウザーのための単なるバックアップであり**、与えられた変数が定義されていなかったり、無効な値であったりした場合に別な値を選択させるためのものです。

関数の最初の引数は、代替される[カスタムプロパティ](https://www.w3.org/TR/css-variables/#custom-property)の名前です。関数の二番目の引数は、もしあれば、参照された[カスタムプロパティ](https://www.w3.org/TR/css-variables/#custom-property)が無効であった場合に代わりに使用される代替値です。この関数は引数を 2 つだけ受け付けるので、最初のカンマの後のものは、すべて二番目の引数として割り当てます。二番目の引数が無効な場合、例えばカンマで区切られたリストが提供された場合、次のように代替処理は失敗します。

```css
.two {
  color: var(--my-var, red); /* --my-var が定義されていなければ red */
}

.three {
  background-color: var(--my-var, var(--my-background, pink)); /* my-var 及び --my-background が定義されていなければ pink */
}

.three {
  background-color: var(--my-var, --my-background, pink); /* 無効: "--my-background, pink" */
}
```

代替としてのカスタムプロパティを含めるには、上記の二番目の例のようにすることが、複数の代替値を提供するための正しい方法です。この技法は変数全体を解釈するのにより時間が掛かるので、性能上の問題が見られます。

> **メモ:** 代替値の構文は、[カスタムプロパティ](https://www.w3.org/TR/css-variables/#custom-property)の場合のように、カンマを使用することができます。例えば、 `var(--foo, red, blue)` は `red, blue` という代替値を定義します。 — 最初のカンマから関数の終わりまでが代替値とみなされます。

## 値と妥当性

それぞれのプロパティに結び付けられるという CSS の妥当性の伝統的な概念は、カスタムプロパティに関してはあまり使いやすものではありません。カスタムプロパティの値が解析されるとき、ブラウザーはそれがどこで使用されるのか知りません。そのため、ほぼすべての値を*妥当*なものとみなす必要があります。

残念なことに、これらの値は妥当であっても、意味のない可能性がある場所で `var()` 関数表記で使用することができてしまいます。プロパティとカスタム変数が無効な CSS 文を生成する可能性があることから、*計算時に妥当*という新しい概念が導かれます。

## 無効な変数では何が起こるか

ブラウザーが無効な `var()` による置き換えに遭遇した場合、プロパティの初期値または継承値が使用されます。

以下のコードスニペットを考えてみてください。

### HTML

```html
<p>この段落は初期値で黒です。</p>
```

### CSS

```css
:root { --text-color: 16px; }
p { color: blue; }
p { color: var(--text-color); }
```

期待通りに、ブラウザーは `var(--text-color)` の場所を `--text-color` の値で置き換えようとしますが、 `16px` は {{cssxref("color")}} に妥当なプロパティ値ではありません。置き換え後、プロパティは意味をなさなくなります。ブラウザーはこの状況を二段階で扱います。

1. color プロパティが継承可能であるかを確認します。可能ですが、 `<p>` には color プロパティを持つ親がありません。よって次の段階に進みます。
2. 値を**既定の初期値**、つまり、黒に設定します。

### 結果

{{EmbedLiveSample('What_happens_with_invalid_variables')}}

置き換えが無効な場合は代替値ではなく、初期値に置き換えられるため、段落の色は青にはなりません。変数による置き換えなしで `color: 16px` と書いた場合は、構文エラーとなります。その場合はそれ以前の宣言が使用されます。

> **メモ:** CSS プロパティと値の組に構文エラーがあるとその行が無視されるので、無効な代替値を使用した継承値 -- 無効なカスタムプロパティの値を使用すること -- は無視されず、継承される値になります。

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

## ブラウザーの互換性

{{Compat("css.properties.custom-property")}}

> **メモ:** 初期仕様のカスタムプロパティの接頭辞は `var-` でしたが、最新の仕様では `--` に変更されました。 Firefox 31 以上は最新仕様に従っています。 ([Firefox バグ 985838](https://bugzil.la/985838))

## 関連情報

- {{cssxref("--*", "Custom properties")}}
