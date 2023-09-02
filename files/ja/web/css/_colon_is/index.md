---
title: ":is() (:matches(), :any())"
slug: Web/CSS/:is
---

{{CSSRef}}

> **メモ:** `:matches()` は `:is()` に改名されました。 ([CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258))

**`:is()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)関数で、セレクターのリストを引数に取り、リスト中のセレクターの何れか一つに当てはまる要素をすべて選択します。数多くのセレクターを小さくまとめて書くのに便利です。

```css
/* header, main, footer 要素の中の段落で
   マウスポインターが通過中のものをすべて選択 */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* 上記のものは以下のものと同じ */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
```

擬似要素は `:is()` のセレクターリストでは無効です。

なお、現在のところ、ブラウザーはこの機能を `:matches()` や、古いバージョンの Chrome, Firefox, Safari では、さらに古い接頭辞付きの擬似クラス — `:any()` で対応しています。 `:any()` は `:matches()`/`:is()` とまったく同じものとして動作しますが、ベンダー接頭辞が必要であり、[複合セレクター](/ja/docs/Learn/CSS/Introduction_to_CSS/Selectors)に対応していません。

後方互換性のために古い擬似クラスを使用することができます。

```css
/* -*-any() および :matches() と後方互換性のあるバージョン
   (無効なセレクターがあるとルール全体が無効になるため、
   セレクターを単一のルールにグループ化することはできません。) */
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

### :is() と :where() の違い

この 2 つの違いは、 `:is()` がセレクター全体の詳細度にカウントされる（最も詳細な引数の詳細度を取る）のに対し、 [`:where()`](/ja/docs/Web/CSS/:where) は詳細度の値が 0 であることです。これは、 [`:where()` 参照ページの例](/ja/docs/Web/CSS/:where#examples)で実証されています。

### セレクターの解釈の許容

仕様では `:is()` と `:where()` が[省略可能なセレクターリスト](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)を受け入れることを定義しています。

<p>CSS でセレクターリストを使用している場合、セレクターのどれかが無効な場合、リスト全体が無効とみなされます。 `:is()` や `:where()` を使用している場合、1 つでも解釈に失敗するとセレクターのリスト全体が無効とみなされるのではなく、不正なセレクターや対応していないセレクターは無視され、他のセレクターが使用されます。

```css
:is(:valid, :unsupported) {
  ...
}
```

`:unsupported` に対応していないブラウザーでも、正しく解釈して `:valid` に一致します。

```css
:valid, :unsupported {
  ...
}
```

`:unupported` に対応していないブラウザーでは、 `:valid` に対応していても無視します。

## 例

### クロスブラウザーの例

```html
<header>
  <p>This is my header paragraph</p>
</header>

<main>
  <ul>
    <li>
      <p>This is my first</p>
      <p>list item</p>
    </li>
    <li>
      <p>This is my second</p>
      <p>list item</p>
    </li>
  </ul>
</main>

<footer>
  <p>This is my footer paragraph</p>
</footer>
```

```css
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

```js
let matchedItems;

try {
  matchedItems = document.querySelectorAll(":is(header, main, footer) p");
} catch (e) {
  try {
    matchedItems = document.querySelectorAll(
      ":matches(header, main, footer) p",
    );
  } catch (e) {
    try {
      matchedItems = document.querySelectorAll(
        ":-webkit-any(header, main, footer) p",
      );
    } catch (e) {
      try {
        matchedItems = document.querySelectorAll(
          ":-moz-any(header, main, footer) p",
        );
      } catch (e) {
        console.log(
          "Your browser doesn't support :is(), :matches(), or :any()",
        );
      }
    }
  }
}

matchedItems.forEach(applyHandler);

function applyHandler(elem) {
  elem.addEventListener("click", function (e) {
    alert("This paragraph is inside a " + e.target.parentNode.nodeName);
  });
}
```

{{EmbedLiveSample("Cross-browser_example", "100%", 300)}}

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
/* 3層（以上）の順序なしリストに四角形を使用 */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
  list-style-type: square;
}
```

### section セレクターの簡略化

`:is()` 擬似クラスは、 HTML5 の[セクションと見出し](/ja/docs/Sections_and_Outlines_of_an_HTML5_document)を扱うときに特に便利です。 {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} は互いによく入れ子になりますので、 `:is()` がないと、 1 つ 1 つを選択してスタイルを適用するのが難しくなります。

例えば、 `:is()` を使わずに、異なる深さの {{HTMLElement("h1")}} 要素にスタイルを適用すると、とても複雑になります。

```css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}
/* Level 2 */
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
/* Level 3 */
/* ... 考えたくありません! */
```

`:is()` を使用すると、ずっと簡単になります。

```css
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Level 2 */
:is(section, article, aside, nav),
:is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav),
:is(section, article, aside, nav),
:is(section, article, aside, nav) h1 {
  font-size: 15px;
}
```

### :is() は擬似要素を選択しない

The `:is()` pseudo-class does not match pseudo-elements. So rather than this:

```css example-bad
some-element:is(::before, ::after) {
  display: block;
}
```

instead do:

```css example-good
some-element::before,
some-element::after {
  display: block;
}
```

## 構文

```
:is( <forgiving-selector-list> )
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":where", ":where()")}} - `:is()` と同様ですが、[詳細度](/ja/docs/Web/CSS/Specificity)が 0 です。
- [セレクターリスト](/ja/docs/Web/CSS/Selector_list)
- [ウェブコンポーネント](/ja/docs/Web/Web_Components)
