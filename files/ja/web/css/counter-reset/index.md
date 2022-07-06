---
title: counter-reset
slug: Web/CSS/counter-reset
tags:
  - CSS
  - CSS カウンター
  - CSS リスト
  - CSS プロパティ
  - recipe:css-property
browser-compat: css.properties.counter-reset
translation_of: Web/CSS/counter-reset
---
{{CSSRef}}

**`counter-reset`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 [CSS カウンター](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)を指定された値で初期化します。
このプロパティは新しいカウンターや逆行カウンターを、指定された要素の指定された名前で生成します。

通常のカウンターは、初期値が 0 になっています。
逆行カウンターはカウントダウンのためのものであり、既定の初期値は現在のレベルでの要素の数に設定されます。
既定の初期値により、 2 つの最も一般的な数値のパターン、 1 から要素の数までのカウントアップと、要素の数から 1 までのカウントダウンを簡単に実装することができます。

カウンターの値は CSS の {{cssxref("counter-increment")}} プロパティを使用して増加または減少させ、既存のカウンターの値は {{cssxref("counter-set")}} を使用して設定することができます。

{{EmbedInteractiveExample("pages/css/counter-reset.html")}}

独自に作成したカウンターに加え、このプロパティは（{{HTMLElement("ol")}} 要素で作成される）順序付きリストで使用される `list-item` カウンターもリセットすることができます。
これらは独自に作成したカウンタと同じ動作をしますが、それぞれのリスト要素で自動的に 1 ずつ増加または減少する点が異なります。
この動作は {{cssxref("counter-increment")}} で上書きすることができます。

## 構文

```css
/* "my-counter" を 0 に設定 */
counter-reset: my-counter;

/* "my-counter" を -1 に設定 */
counter-reset: my-counter -3;

/* 逆行の "my-counter" を counter1" を 1 に、 "counter2" を 4 に設定 */
counter-reset: reversed(my-counter);

/* 逆行の "my-counter" を -1 に設定 */
counter-reset: reversed(my-counter) -1;

/* counter2 を 9 に、逆行の "counter1" と "counter3" をそれぞれ 1 と 4 に設定*/
counter-reset: reversed(counter1) 1 counter2 9 reversed(counter3) 4;

/* より詳細度が低い規則による値の初期化をキャンセル */
counter-reset: none;

/* グローバル値 */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: unset;
```

`counter-reset` プロパティは、以下のうちの一つで指定します。

- `<custom-ident>` または `reversed(<custom-ident>)` でカウンターに名前を付けます。 `<integer>` を続けることもできます。
  なお、 `reversed()` メソッドは「逆行」カウンターを生成するために使用することができます。
  初期化するカウンターや逆行カウンターはいくつでも指定することができ、それぞれのカウンターとカウンター値の組は空白で区切ります。
- キーワード値 `none`。

`list-item` という名前の「暗黙的な」カウンターを使用すると、 {{HTMLElement("ol")}} を使用して生成される順序付きリストの番号付けを制御に使用することができます。

### 値

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : 初期化の対象となる、カウンターの名前です。
- {{cssxref("&lt;integer&gt;")}}
  - : 要素が出現するごとに、カウンターを初期化するための値です。与えられない場合、初期値の `0` なります。
- `none`
  - : カウンターの初期化は行われません。これはより詳細度の低い規則によって定義された `counter-reset` を上書きするために使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

以下の例はカウンターの初期化方法を紹介していますが、増加、減少、表示の方法は示していません。

もっと完全な例は、 [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)を参照してください。

### 名前付きカウンターの初期化

```css
h1 {
  counter-reset: chapter section 1 page;
  /* chapter と page カウンターを 0 に、
     section カウンターを 1 に設定します。 */
}
```

### 逆行カウンター

```css
h1 {
  counter-reset: reversed(chapter) reversed(section) 1 page;
  /* chapter カウンターと section カウンターに逆行フラグを設定します。
    chapter カウンターと page カウンターを 0 に、section カウンターを
    1 に設定します */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-set")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter()")}} および {{cssxref("counters()")}} 関数
- {{cssxref("content")}} プロパティ
