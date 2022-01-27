---
title: CSS カウンターの使用
slug: Web/CSS/CSS_Counter_Styles/Using_CSS_counters
tags:
  - 上級者
  - CSS
  - CSS カウンタースタイル
  - ガイド
  - レイアウト
  - リファレンス
  - ウェブ
translation_of: Web/CSS/CSS_Counter_Styles/Using_CSS_counters
original_slug: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
---
{{CSSRef}}

**CSS カウンター**では、文書内の位置に基づいてコンテンツの表示方法を調整することができます。
例えば、ウェブページ内の見出し番号を自動的に振ったり、順序付きリストの番号を変更したりするのに使用することができます。

カウンターは本質的に、 CSS が管理する変数であり、 CSS のルールによって増加・現象し、何回使用されたかを追跡するものです。
名前付きカウンターを定義したり、あらゆる順序付きリストで既定で生成される `list-item` のカウンターを操作したりすることもできます。

## カウンターの使用

### カウンターの値の操作

カウンターを使用するには、最初に必ず {{cssxref("counter-reset")}} プロパティで値を初期化する必要があります。
このプロパティを使用して、カウンターの値を特定の数値に変更することもできます。

下記の例では、 `section` という名前のカウンターを既定値  (0) に初期化しています。

```css
counter-reset: section;
```

複数のカウンターを初期化することもできます。任意でそれぞれに初期値を指定することができます。
下記の例では、 `section` と `topic` のカウンターを既定値で、 `page` のカウンターを 3 で初期化しています。

```css
counter-reset: section page 3 topic;
```

初期化されると、カウンターの値は {{cssxref("counter-increment")}} で増加させたり減少させたりすることができます。
例えば、以下の宣言では `section` のカウンターを `h3` タグごとに 1 つずつ増加させます。

```css
h3::before {
  counter-increment: section; /* section の値を 1 つずつ増加させる */
}
```

カウンター名の後に正の数や負の数を使用すると、そのカウンターを増加または減少させる値を指定することができます。

カウンターの名前を `none`, `inherit`, `initial` にすることはできません。そうすると宣言が無視されます。

### カウンターの表示

カウンターの値は、 {{cssxref("counter()", "counter()")}} または {{cssxref("counters()", "counters()")}} 関数を {{cssxref("content")}} の中で使用して表示することができます。

例えば、以下の宣言は `counter()` をそれぞれの `h3` 見出しの前に `Section <数値>:` というテキストを付けるために使用しています。ここで `<数値>` は、 10 進数 (既定の表示スタイル) でのカウントの値です。

```css
h3::before {
  counter-increment: section;                 /* カウンター section の値を 1 つずつ増加 */
  content: "Section " counter(section) ": ";  /* カウンターの値を既定のスタイル（10 進数）で表示 */
}
```

{{cssxref("counter()")}} 関数は、内側のレベルの番号付けに親レベルのコンテキストが含まれない時に使用します。
例えば、それぞれの内側のレベルは 1 からやり直します。

```
1 One
  1 Nested one
  2 Nested two
2 Two 
  1 Nested one
  2 Nested two
  3 Nested three
3 Three
```

{{cssxref("counters()", "counters()")}} 関数は、内側のレベルのカウントに親レベルのカウントが含まれる場合に使用されます。
例えば、これを使用すると次のようにセクションをレイアウトすることができます。

```
1 One
  1.1 Nested one
  2.1 Nested two
2 Two 
  1.1 Nested one
  2.1 Nested two
  3.1 Nested three
3 Three
```

{{cssxref("counter()")}} 関数には `counter(<カウンター名>)` と `counter(<カウンター名>, <カウンタースタイル>)` の 2 つの形があります。
生成される文字列は、その擬似要素のスコープにある指定された名前の最も内側にあるカウンターの値です。

{{cssxref("counters()")}} 関数にも、 `counters(<カウンター名>, <セパレーター>)` と `counters(<カウンター名>, <セパレーター>, <カウンタースタイル>)` の 2 つの形があります。生成される文字列は、その擬似要素のスコープにある指定された名前のすべてのカウンターの値が、外側から内側に向けて、指定された文字列 (`<セパレーター>`) で区切られたものになります。

どちらのメソッドでも、カウンターは指定された `<カウンタースタイル>` で表示されます（既定では `decimal` です）。
{{cssxref("list-style-type")}} の値のいずれか、または[カスタムスタイル](/ja/docs/Web/CSS/CSS_Counter_Styles)を使用することができます。

`counter()` と `counter()` の使用方法を示す例は、それぞれ下記の[基本的な例](#基本的な例)と[入れ子になったカウンターの例](#入れ子になったカウンターの例)です。

### 逆行カウンター

逆行カウンターは、カウントアップ（インクリメント）ではなく、カウントダウン（デクリメント）を目的としたものです。
逆行カウンターは `reversed()` という関数記法を使って {{cssxref("counter-reset")}} でカウンターの名前を指定する際に作成します。

逆行カウンターは、初期値が要素数と等しくなります（初期値が 0 である通常のカウンターとは異なります）。
このため、要素数から 1 までカウントするカウンターを簡単に実装することができます。

例えば、 `section` という名前の逆行カウンターを初期値で作成するには、次のような構文を使用します。

```css
counter-reset: reversed(section); 
```

もちろん、初期値は自由に指定することができます。

{{cssxref("counter-increment")}} に負の値を指定すると、カウンター値が減少します。

> **Note:** 逆行ではないカウンターを減少させるには、 {{cssxref("counter-increment")}} を使うこともできます。
> 逆行カウンターを使用する主な利点は、既定の初期値と、 `list-item` カウンターが自動的に逆行カウンターを減少させてくれることです。

### list-item カウンター

{{HTMLElement("ol")}} 要素で作成される順序付きリストは、暗黙のうちに `list-item` という名前のカウンターを持っています。

他のカウンターと同様に、これは既定の初期値として、順方向のカウンターでは 0、逆行カウンターでは「項目数」を持っています。
作者が作成したカウンターとは異なり、 `list-item` はカウンタが逆行しているかどうかによって、リスト要素ごとに _自動的に_ 1 つずつ増加または減少します。

`list-item` カウンターは、CSS を使用して、順序付きリストの既定の動作を操作するために使用することができます。
例えば、既定の初期値を変更したり、 {{cssxref("counter-increment")}} を使用してリスト項目の増加または減少の方法を変更したりすることができます。

## 例

### 基本的な例

この例ではそれぞれの見出しの先頭に "第 \[カウンターの値] 章:" を追加します。

#### CSS

```css
body {
  counter-reset: section;                      /* 'section' という名前のカウンターを設定し、 0 で初期化する */
}

h3::before {
  counter-increment: section;                  /* section カウンターの値に 1 を加算 */
  content: "第 " counter(section) " 章: ";     /* '第 ' という語、 section カウンターの値、
                                                   ' 章' という語、コロンをそれぞれの
                                                   h3 の内容の前に表示 */
}
```

#### HTML

```html
<h3>導入</h3>
<h3>本文</h3>
<h3>結論</h3>
```

#### 結果

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### 基本的な例: 逆行カウンター

この例は逆行カウンターを使用していることを除けば、上記のものと同じです。
ブラウザーが `reversed()` 関数記法に対応している場合は、結果は次のようになります。

![逆行カウンター](reversed_headings_basic.png)

#### CSS

```css
body {
  counter-reset: reversed(section);           /* 'section' という名前のカウンターを設定し、初期値を 0 とする */
}

h3::before {
  counter-increment: section -1;              /* section カウンターの値から 1 を減算 */
  content: "第 " counter(section) " 章: ";     /* '第 ' という語、 section カウンターの値、
                                                   ' 章' という語、コロンをそれぞれの
                                                   h3 の内容の前に表示 */
}
```

#### HTML

```html
<h3>導入</h3>
<h3>本文</h3>
<h3>結論</h3>
```

#### 結果

{{EmbedLiveSample("Reversing a counter", "100%", 150)}}

### より洗練された例

カウンターは、必ずしもインクリメントするたびに表示する必要はありません。
この例はすべてのリンクをカウントし、リンクにテキストがないときだけ便利な代用品としてカウンターを表示します。

#### CSS

```css
:root {
  counter-reset: link;
}

a[href] {
  counter-increment: link;
}

a[href]:empty::after {
  content: "[" counter(link) "]";
}
```

#### HTML

```html
<p>See <a href="https://www.mozilla.org/"></a></p>
<p>Do not forget to <a href="contact-me.html">leave a message</a>!</p>
<p>See also <a href="https://developer.mozilla.org/"></a></p>
```

#### 結果

{{EmbedLiveSample("A_more_sophisticated_example", "100%", 150)}}

## カウンターの入れ子

CSS カウンターはアウトラインのリストを作成するのには特に便利で、子要素でカウンターの新しいインスタンスが自動的に生成されます。 
{{cssxref("counters()")}} 関数を使用して、入れ子になったカウンターの階層間に区切り文字列を挿入することができます。

### 入れ子になったカウンターの例

#### CSS

```css
ol {
  counter-reset: section;                /* それぞれの ol 要素に、 section
                                            カウンターの新しいインスタンスを
                                            生成 */
  list-style-type: none;
}

li::before {
  counter-increment: section;            /* section カウンターのこのインスタンス
                                            のみを加算 */
  content: counters(section, ".") " ";   /* section カウンターのすべての
                                            インスタンスの値を、ピリオドで区切って
                                            結合 */
}
```

#### HTML

```html
<ol>
  <li>項目</li>          <!-- 1     -->
  <li>項目               <!-- 2     -->
    <ol>
      <li>項目</li>      <!-- 2.1   -->
      <li>項目</li>      <!-- 2.2   -->
      <li>項目           <!-- 2.3   -->
        <ol>
          <li>項目</li>  <!-- 2.3.1 -->
          <li>項目</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>項目</li>  <!-- 2.3.1 -->
          <li>項目</li>  <!-- 2.3.2 -->
          <li>項目</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>項目</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>項目</li>          <!-- 3     -->
  <li>項目</li>          <!-- 4     -->
</ol>
<ol>
  <li>項目</li>          <!-- 1     -->
  <li>項目</li>          <!-- 2     -->
</ol>
```

#### 結果

{{EmbedLiveSample("Example_of_a_nested_counter", "100%", 350)}}

## 仕様書

| 仕様書                                                           | 状態                    | 備考     |
| ---------------------------------------------------------------- | ----------------------- | -------- |
| {{SpecName("CSS3 Lists", "#auto-numbering", "CSS Counters")}}    | {{Spec2("CSS3 Lists")}} | 変更なし |
| {{SpecName("CSS2.1", "generate.html#counters", "CSS Counters")}} | {{Spec2("CSS2.1")}}     | 初回定義 |

## 関連情報

- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
