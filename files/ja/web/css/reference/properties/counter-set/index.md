---
title: counter-set
slug: Web/CSS/Reference/Properties/counter-set
original_slug: Web/CSS/counter-set
l10n:
  sourceCommit: cdc0015b727804fa293bb33e5abcefce688729ab
---

**`counter-set`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[CSS カウンター](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters)を指定された値に設定します。

そのカウンターが存在しない場合、`counter-set`プロパティは、空白で区切られたカウンターと値のペアのリストに名前付きカウンターが含まれている場合、新しいカウンターを作成します。しかし、新しいカウンターを作成するには、 {{cssxref("counter-reset")}} プロパティを使用することをお勧めします。

リストに含まれている名前付きカウンターに値が設定されていない場合、そのカウンターの値は `0` に設定されます。

{{InteractiveExample("CSS デモ: counter-set")}}

```css interactive-example-choice
counter-set: none;
```

```css interactive-example-choice
counter-set: chapter-count 0;
```

```css interactive-example-choice
counter-set: chapter-count;
```

```css interactive-example-choice
counter-set: chapter-count 5;
```

```css interactive-example-choice
counter-set: chapter-count -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="chapters">
    <h1>Alice's Adventures in Wonderland</h1>
    <h2>Down the Rabbit-Hole</h2>
    <h2 id="example-element">The Pool of Tears</h2>
    <h2>A Caucus-Race and a Long Tale</h2>
    <h2>The Rabbit Sends in a Little Bill</h2>
  </div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-set: chapter-count;
}

#example-element {
  background-color: #37077c;
  color: white;
}

h2 {
  counter-increment: chapter-count;
  font-size: 1em;
}

h2::before {
  content: "Chapter " counter(chapter-count) ": ";
}
```

> [!NOTE]
> カウンターの値は {{cssxref("counter-increment")}} プロパティを使用して増減させることができます。

## 構文

```css
/* "my-counter" を 0 に設定 */
counter-set: my-counter;

/* "my-counter" を -1 に設定 */
counter-set: my-counter -1;

/* "counter1" を 1 に、 "counter2" を 4 に設定 */
counter-set: counter1 1 counter2 4;

/* より詳細度が低いルールで設定されたカウンターをすべて消去 */
counter-set: none;

/* グローバル値 */
counter-set: inherit;
counter-set: initial;
counter-set: revert;
counter-set: revert-layer;
counter-set: unset;
```

`counter-set` プロパティは、以下のうちの何れかで指定します。

- カウンターの名前を指定する `<custom-ident>` と、それに続く任意の `<integer>`。カウンターはいくつでも指定することができ、それぞれの名前や名前と数値の組は空白で区切ります。
- キーワード値 `none`。

### 値

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : 設定するカウンターの名前です。
- {{cssxref("&lt;integer&gt;")}}
  - : この要素が現れるたびにカウンターに設定する値です。指定されなかった場合の既定値は `0` です。現在、この要素に指定された名前のカウンターが存在しない場合、この要素は指定された名前の新しいカウンターを、開始値 0 で指定します（ただし、その後で直ちに異なる値に設定されたり増加したりする可能性があります）。
- `none`
  - : カウンターの設定は行われません。これはより詳細度の低い規則によって定義された `counter-set` を上書きするために使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きカウンターの設定

```css
h1 {
  counter-set: chapter section 1 page;
  /* chapter および page のカウンターを 0 に、
     section カウンターを 1 に設定 */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter", "counter()")}} および {{cssxref("counters", "counters()")}} 関数
- {{cssxref("content")}} プロパティ
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
