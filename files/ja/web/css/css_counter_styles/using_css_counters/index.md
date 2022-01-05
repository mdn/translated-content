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

**CSS カウンター**では、文書内の位置に基づいてコンテンツの表示方法を調整することができます。例えば、ウェブページ内の見出し番号を自動的に振るのに使ったりします。カウンターは本質的に、 CSS が管理する変数であり、 CSS の規則によって増加し、何回使用されたかを追跡するものです。

## カウンターの使用

### カウンターの値の操作

カウンターを使用すると、最初に必ず {{cssxref("counter-reset")}} プロパティで値を初期化する必要があります (既定値は `0`)。このプロパティで値を特定の数に変更することができます。いったん初期化されると、カウンターの値は {{cssxref("counter-increment")}} で増加させたり減少させたりすることができます。カウンターの名前を "none", "inherit", "initial" にすることはできません。そうすると宣言が無視されます。

### カウンターの表示

カウンターの値は、 {{cssxref("counter()", "counter()")}} または {{cssxref("counters()", "counters()")}} 関数を {{cssxref("content")}} の中で使用して表示することができます。

{{cssxref("counter()")}} 関数には 'counter(_name_)' または 'counter(_name_, _style_)' の 2 つの形があります。生成される文字列は、その擬似要素のスコープにある指定された name の最も内側にあるカウンターの値です。これは指定されたスタイルで整形されます (既定値は `decimal` です)。

{{cssxref("counters()")}} 関数にも、 'counters(_name_, _string_)' または 'counters(_name_, _string_, _style_)' の 2 つの形があります。生成される文字列は、その擬似要素のスコープにある指定された name のすべてのカウンターの値が、外側から内側に向けて、指定された文字列で区切られたものになります。カウンターは指定されたスタイルで表示されます (既定値は `decimal` です)。

### 基本的な例

この例ではそれぞれの見出しの先頭に "第 \[カウンターの値] 章:" を追加します。

#### CSS

```css
body {
  counter-reset: section;                       /* 'section' という名前のカウンターを設定し、 0 で初期化する */
}

h3::before {
  counter-increment: section;                   /* section カウンターの値に 1 を加算 */
  content: "第 " counter(section) " 章: ";    /* '第 ' という語、 section カウンターの値、
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

### より洗練された例

カウンターは増加するたびに表示する必要はありません。この例では、すべてのリンクを数えますが、カウンターはリンクにテキストがない場合の便利な代替手段として表示されます。

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

CSS カウンターはアウトラインのリストを作成するのには特に便利で、子要素でカウンターの新しいインスタンスが自動的に生成されます。 {{cssxref("counters()")}} 関数を使用して、入れ子になったカウンターの階層間に区切り文字列を挿入することができます。

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
