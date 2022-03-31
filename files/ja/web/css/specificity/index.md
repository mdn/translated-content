---
title: 詳細度
slug: Web/CSS/Specificity
tags:
  - CSS
  - Example
  - ガイド
  - リファレンス
  - ウェブ
translation_of: Web/CSS/Specificity
---
{{CSSRef}}

**詳細度** (Specificity) は、どの CSS プロパティが要素に最も関係があるか、すなわち適用されるかをブラウザーが決定する手段です。詳細度は様々な組み合わせの [CSS セレクター](/ja/docs/Web/CSS/Reference#selectors)で構成される照合ルールに基づいています。

## 詳細度の計算方法

詳細度は CSS 宣言が適用される際の重みであり、一致するセレクターそれぞれの[種類](#セレクターの種類)の数によって特定されます。複数の宣言が同じ詳細度であれば、 CSS の中で最後に宣言されたものが要素に適用されます。詳細度は、同じ要素に対して複数の宣言が行われている場合のみ適用されます。 CSS のルールでは、[直接対象となった要素](#直接対象の要素と継承されたスタイル)は要素が祖先から継承したルールよりも常に優先されます。

> **Note:** 文書ツリー内における[要素の近接性](#文書ツリー内の近接性の無視)は、詳細度には影響を与えません。

### セレクターの種類

以下のリストは、セレクターを詳細度の小さな順に並べたものです。

1.  [要素型セレクター](/ja/docs/Web/CSS/Type_selectors)（`h1` など）と擬似要素（`::before` など）
2.  [クラスセレクター](/ja/docs/Web/CSS/Class_selectors)（`.example` など）、属性セレクター（`[type="radio"]` など)、擬似クラス（`:hover` など）
3.  [ID セレクター](/ja/docs/Web/CSS/ID_selectors)（`#example` など）

全称セレクター（{{CSSxRef("Universal_selectors", "*")}}）、結合子（{{CSSxRef("Adjacent_sibling_combinator", "+")}}、{{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("General_sibling_combinator", "~")}}, ['` `'](/ja/docs/Web/CSS/Descendant_combinator), {{CSSxRef("Column_combinator", "||")}}）、否定擬似クラス（{{CSSxRef(":not", ":not()")}}）は詳細度に影響を与えません。（但し、 `:not()` の*中で*宣言されたセレクターは影響を与えます。）

詳しくは[「カスケードと継承」の「詳細度」](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2)または [https://specifishity.com](https://specifishity.com) をご覧ください。

要素に追加されたインラインスタイル (例えば `style="font-weight: bold;"`) は、常に外部スタイルシートの中のスタイルを上書きしますので、最も高い詳細度を持っていると考えることもできます。

### !important の例外

`!important` ルールがスタイル宣言で使われたとき、それが宣言リストのどこであっても、この宣言は CSS 内で作られたその他の宣言を上書きします。技術的には `!important` は詳細度とは無関係ですが、直接作用します。しかし、スタイルの自然の[カスケード](/ja/docs/Web/CSS/Cascade)を破壊するためデバッグが難しくなるので、 `!important` を使用することは**悪い習慣**であり、使用を避けるべきです。同じ要素に二つの競合する宣言が `!important` ルール付きで適用された場合、より高い詳細度の宣言が適用されます。

**いくつかの経験則**

- `!important` を考える前に、**常に**詳細度を使用する方法を探しましょう。
- ページ固有の CSS が外部の CSS (ブートストラップや正規化 CSS などの外部ライブラリーなど) を上書きする場合**のみ**、 `!important` を使用しましょう。
- **決して**プラグインやマッシュアップを書いている時に、 `!important` を使わないようにしましょう。
- **決して**サイト全体の CSS で `!important` を使わないようにしましょう。

**`!important` を使用する代わりに、以下のことを検討してください。**

1.  CSS のカスケードをもっと利用する
2.  もっと詳細なルールを使う。ルールの選択時に要素の前に１つまたは複数の要素を示すと、詳細度が上がり、より優先度が高くなります。

    ```html
    <div id="test">
      <span>Text</span>
    </div>
    ```

    ```css
    div#test span { color: green; }
    div span { color: blue; }
    span { color: red; }
    ```

    順番に関わらず、テキストは最も詳細度が高いルールである緑色になります。 (また、青のルールはルールの順番にかかわらず、赤のルールを上書きします)

3.  (2)のナンセンスの特殊なケースとして、何も指定する必要がない場合には、単純にセレクターを複製することで詳細度を高めることができます。

    ```css
    #myId#myId span { color: yellow; }
    .myClass.myClass span { color: orange; }
    ```

#### !important の用途

##### A) インラインスタイルの上書き

サイトの視覚的な側面をグローバルに設定するグローバル CSS ファイルは、それぞれの要素に直接定義されたインラインスタイルによって上書きされることがあります。インラインスタイルと !important はどちらもとても悪い習慣とみなされていますが、時には前者を上書きするために後者が必要とされることがあります。

この場合、特定のスタイルをグローバル CSS ファイルの中で !important として設定することで、要素に直接設定されたインラインスタイルを上書きすることができます。

```html
<div class="foo" style="color: red;">What color am I?</div>
```

```css
.foo[style*="color: red"] {
  color: firebrick !important;
}
```

多くの JavaScript フレームワークやライブラリがインラインスタイルを追加します。 `!important` をとても限定的なセレクターで使用することは、これらのインラインスタイルを上書きする方法の一つです。

##### B) 高い詳細度の上書き

```css
#someElement p {
  color: blue;
}

p.awesome {
  color: red;
}
```

`#someElement` の中にある場合であっても、 `awesome` の段落を常に赤くするにはどうすればよいでしょうか。 `!important` がないと、第一のルールがより詳細度が高いので、第二のルールに勝ちます。

#### `!important` を上書きする方法

A) `!important` の付いた CSS ルールと、それにより高い詳細度のセレクターを与えるか (タグ、 id、 class のセレクターへの追加)、同じセレクターで既存の位置より後に CSS ルールを追加するかします。これが動作するのは、詳細度が同じであるとき、最後に定義されたルールが勝つからです。

詳細度を高める例です。

```css
table td    { height: 50px !important; }
.myTable td { height: 50px !important; }
#myTable td { height: 50px !important; }
```

B) または、既存のものの後に同じセレクターを追加します。

```css
td { height: 50px !important; }
```

C) また、できれば、元のルールを書き換えて、どちらも `!important` を使用しないようにします。

```css
[id="someElement"] p {
  color: blue;
}

p.awesome {
  color: red;
}
```

ID セレクターの代わりとして属性セレクターの一部に id を入れると、クラスと同じ詳細度になります。上記の両方のセレクターとも同じ重みをもつようになりました。詳細度が同等の場合、後に定義されたルールが優先されます。

#### 詳細情報

- <https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css>
- <https://stackoverflow.com/questions/9245353/what-does-important-in-css-mean>
- <https://stackoverflow.com/questions/5701149/when-to-use-important-property-in-css>
- <https://stackoverflow.com/questions/11178673/how-to-override-important>
- <https://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css>

### :is() および :not() の例外

全一致の擬似クラス {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} および否定擬似クラスの {{CSSxRef(":not", ":not()")}} は、詳細度の計算では擬似クラスとは見なされません。しかし、[セレクターの種類](#セレクターの種類)の数を数える時には、これらの擬似クラスの中に置かれたセレクターは、通常のセレクターのように計算されます。

以下の CSS を...

```css
div.outer p {
  color: orange;
}

div:not(.outer) p {
  color: blueviolet;
}
```

以下の HTML に適用した場合...

```html
<div class="outer">
  <p>これは outer の div の中にあります。</p>
  <div class="inner">
    <p>これは inner の div の中にあります。</p>
  </div>
</div>
```

画面では、以下のように表示されるでしょう。

{{EmbedLiveSample("The_is_and_not_exceptions")}}

### :where() の例外

詳細度を調整する擬似クラス {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} は、自分自身の詳細度が常にゼロで置き換えられます。

この一連の CSS で...

```css
div:where(.outer) p {
  color: orange;
}

div p {
  color: blueviolet;
}
```

```css hidden
#no-where-support {
  margin: 0.5em;
  border: 1px solid red;
}

#no-where-support:where(*) {
  display: none !important;
}
```

... 以下の HTML と一緒に使用されたとき ...

```html hidden
<div id="no-where-support">
⚠️ ブラウザーが <code><a href="https://developer.mozilla.org/docs/Web/CSS/:where" target="_top">:where()</a></code> 擬似クラスに対応していません。
</div>
```

```html
<div class="outer">
  <p>これは outer の div の中にあります。</p>
  <div class="inner">
    <p>これは inner の div の中にあります。</p>
  </div>
</div>
```

... このように画面に表示されます。

{{EmbedLiveSample("The_where_exception")}}

### 形状に基づく詳細度

詳細度は、セレクターの形に基づきます。次の場合、セレクター `*[id="foo"]` は ID を選択しているにもかかわらず、セレクターの詳細度を決定する目的においては属性セレクターとして計算されます。

以下のスタイル宣言を...

```css
*#foo {
  color: green;
}

*[id="foo"] {
  color: purple;
}
```

この HTML に対して適用すると...

```html
<p id="foo">I am a sample text.</p>
```

このようになってしまうでしょう。

{{EmbedLiveSample("Form-based_specificity")}}

なぜなら、それは同じ要素に一致しますが、 ID セレクターがより高い詳細度をもっているからです。

## 文書ツリー内の近接性の無視

指定されたセレクターで参照される要素と他の要素との近接性は、詳細度には影響を与えません。以下のスタイル宣言と...

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

... 以下の HTML で...

```html
<html>
  <body>
    <h1>これがタイトルです。</h1>
  </body>
</html>
```

... このように描画されるでしょう。

{{EmbedLiveSample("Tree_proximity_ignorance")}}

これは、 2 つの宣言で[セレクターの種類](#セレクターの種類)の数が同じですが、 `html h1` セレクターが後に宣言されているからです。

### 直接対象の要素と継承されたスタイル

直接対象となる要素のスタイル付けは、継承されたルールの詳細度に関わらず、常に継承されたスタイルより優先されます。この CSS は ...

```css
#parent {
  color: green;
}

h1 {
  color: purple;
}
```

... 以下の HTML と共に使用します ...

```html
<html>
  <body id="parent">
    <h1>これがタイトルです。</h1>
  </body>
</html>
```

... 以下のように表示されます。

{{EmbedLiveSample("Directly_targeted_elements_vs._inherited_styles")}}

これは、 `h1` セレクターが要素を具体的に対象としていますが、緑のセレクターは親から継承されているだけだからです。

## 仕様書

| 仕様書                                                                                                                | 状態                               | 備考                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Selectors", "#specificity-rules", "Calculating a selector's specificity")}} | {{Spec2("CSS4 Selectors")}} | 詳細度調整セレクター {{CSSxRef(":where", ":where()")}} を追加 |
| {{SpecName("CSS3 Selectors", "#specificity", "Calculating a selector's specificity")}}         | {{Spec2("CSS3 Selectors")}} | [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を追加 |
| {{SpecName("CSS2.1", "cascade.html#specificity", "Calculating a selector's specificity")}}     | {{Spec2("CSS2.1")}}             | [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)を追加     |
| {{SpecName("CSS1", "#cascading-order", "Cascading order")}}                                             | {{Spec2("CSS1")}}             | 初回定義                                                                   |

## 関連情報

- 詳細度の計算: An interactive website to test and understand your own CSS rules - <https://specificity.keegan.st/>
- CSS3 セレクターの詳細度 - <https://www.w3.org/TR/selectors/#specificity>
- {{CSS_Key_Concepts}}
