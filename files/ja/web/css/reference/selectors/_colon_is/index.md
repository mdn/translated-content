---
title: :is()
slug: Web/CSS/Reference/Selectors/:is
original_slug: Web/CSS/:is
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:is()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)関数で、セレクターのリストを引数に取り、リスト中のセレクターのいずれか一つに当てはまる要素をすべて選択します。数多くのセレクターを小さくまとめて書くのに便利です。

> [!NOTE]
> 元々は `:matches()` （および `:any()`）という名前でしたが、[CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258) で `:is()` に改名されました。

{{InteractiveExample("CSS デモ: :is", "tabbed-shorter")}}

```css interactive-example
ol {
  list-style-type: upper-alpha;
  color: darkblue;
}

:is(ol, ul, menu:unsupported) :is(ol, ul) {
  color: green;
}

:is(ol, ul) :is(ol, ul) ol {
  list-style-type: lower-greek;
  color: chocolate;
}
```

```html interactive-example
<ol>
  <li>Saturn</li>
  <li>
    <ul>
      <li>Mimas</li>
      <li>Enceladus</li>
      <li>
        <ol>
          <li>Voyager</li>
          <li>Cassini</li>
        </ol>
      </li>
      <li>Tethys</li>
    </ul>
  </li>
  <li>Uranus</li>
  <li>
    <ol>
      <li>Titania</li>
      <li>Oberon</li>
    </ol>
  </li>
</ol>
```

## 構文

```css-nolint
:is(<forgiving-selector-list>) {
  /* ... */
}
```

### 引数

擬似クラス `:is()` には、引数として、1 つ以上のセレクターをカンマで区切ったリストである[セレクターリスト](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#セレクターリスト)が要求されます。このリストには、[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)は含まれていてはなりませんが、その他の単純、複合、複雑セレクターは使用できます。

### :is() と :where() の違い

この 2 つの違いは、 `:is()` がセレクター全体の詳細度にカウントされる（最も詳細な引数の詳細度を取る）のに対し、 [`:where()`](/ja/docs/Web/CSS/Reference/Selectors/:where) は詳細度の値が 0 であることです。これは、 [`:where()` 参照ページの例](/ja/docs/Web/CSS/Reference/Selectors/:where#例)で実証されています。

### セレクターの解釈の許容

仕様では `:is()` と `:where()` が[省略可能なセレクターリスト](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)を受け入れることを定義しています。

CSS でセレクターリストを使用している場合、セレクターのどれかが無効な場合、リスト全体が無効とみなされます。 `:is()` や `:where()` を使用している場合、1 つでも解釈に失敗するとセレクターのリスト全体が無効とみなされるのではなく、不正なセレクターや対応していないセレクターは無視され、他のセレクターが使用されます。

```css
:is(:valid, :unsupported) {
  /* … */
}
```

`:unsupported` に対応していないブラウザーでも、正しく解釈して `:valid` に一致します。一方、

```css
:valid,
:unsupported {
  /* … */
}
```

`:unupported` に対応していないブラウザーでは、 `:valid` に対応していても無視します。

## 例

### リストセレクターの簡略化

`:is()` 擬似クラスは CSS セレクターをとても簡潔にすることができます。例えば以下の CSS の場合、

```css
/* 3 層（以上）の順序なしリストに四角形を使用 */
ol ol ul,
ol ul ul,
ol menu ul,
ol dir ul,
ol ol menu,
ol ul menu,
ol menu menu,
ol dir menu,
ol ol dir,
ol ul dir,
ol menu dir,
ol dir dir,
ul ol ul,
ul ul ul,
ul menu ul,
ul dir ul,
ul ol menu,
ul ul menu,
ul menu menu,
ul dir menu,
ul ol dir,
ul ul dir,
ul menu dir,
ul dir dir,
menu ol ul,
menu ul ul,
menu menu ul,
menu dir ul,
menu ol menu,
menu ul menu,
menu menu menu,
menu dir menu,
menu ol dir,
menu ul dir,
menu menu dir,
menu dir dir,
dir ol ul,
dir ul ul,
dir menu ul,
dir dir ul,
dir ol menu,
dir ul menu,
dir menu menu,
dir dir menu,
dir ol dir,
dir ul dir,
dir menu dir,
dir dir dir {
  list-style-type: square;
}
```

... これを次のように置き換えることができます。

```css
/* 3 層（以上）の順序なしリストに四角形を使用 */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### section セレクターの簡略化

`:is()` 擬似クラスは、 HTML の[セクションと見出し](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)を扱うときに特に便利です。 {{HTMLElement("section")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("nav")}} は互いによく入れ子になりますので、 `:is()` がないと、 1 つ 1 つを選択してスタイルを適用するのが難しくなります。

例えば、 `:is()` を使わずに、異なる深さの {{HTMLElement("Heading_Elements", "h1")}} 要素にスタイルを適用すると、とても複雑になります。

```css
/* レベル 0 */
h1 {
  font-size: 30px;
}

/* レベル 1 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}

/* レベル 2 */
section section h1,
section article h1,
section aside h1,
section nav h1,
article section h1,
article article h1,
article aside h1,
article nav h1,
aside section h1,
aside article h1,
aside aside h1,
aside nav h1,
nav section h1,
nav article h1,
nav aside h1,
nav nav h1 {
  font-size: 20px;
}

/* レベル 3 */
/* ... 考えたくありません! */
```

`:is()` を使用すると、ずっと簡単になります。

```css
/* レベル 0 */
h1 {
  font-size: 30px;
}
/* レベル 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* レベル 2 */
:is(section, article, aside, nav) :is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* レベル 3 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```

### :is() は擬似要素を選択しない

`:is()` 擬似クラスは擬似要素に一致しません。したがって、次のようにしたり、

```css example-bad
some-element:is(::before, ::after) {
  display: block;
}
```

または、次のようにする代わりに、

```css example-bad
:is(some-element::before, some-element::after) {
  display: block;
}
```

以下のようにしましょう。

```css example-good
some-element::before,
some-element::after {
  display: block;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":where", ":where()")}} - `:is()` と同様ですが、[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)が 0 です。
- [セレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list)
- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
