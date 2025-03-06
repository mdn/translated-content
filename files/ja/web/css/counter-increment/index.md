---
title: counter-increment
slug: Web/CSS/counter-increment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

**`counter-increment`** は [CSS](/ja/docs/Web/CSS) のプロパティで、指定された値によって [CSS カウンター](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)の値を増加または減少させたり、すべてのカウンターまたはここのカウンターが変化することを防いだりするためのプロパティです。

空白で区切られたカウンターと値のリストに掲載されている名前付きカウンターが存在しない場合、作成されます。カウンターのリストでカウンターに値が指定されていない場合、カウンターは `1` だけ増加します。

カウンターの値は CSS の {{cssxref("counter-reset")}} プロパティを使用して任意の値にリセットすることができます。

{{EmbedInteractiveExample("pages/css/counter-increment.html")}}

## 構文

```css
/* "my-counter" を 1 増加 */
counter-increment: my-counter;

/* "my-counter" を 1 減少 */
counter-increment: my-counter -1;

/* "counter1" を 1 増加、 "counter2" を 4 減少 */
counter-increment: counter1 counter2 -4;

/* "page" を 1 増加、"section" を 2 増加、"chapter" は変化しない */
counter-increment: chapter 0 section 2 page;

/* 増加または減少させない。より詳細度が低いルールを上書きするために使用 */
counter-increment: none;

/* グローバル値 */
counter-increment: inherit;
counter-increment: initial;
counter-increment: revert;
counter-increment: revert-layer;
counter-increment: unset;
```

### 値

`counter-increment` プロパティは、空白で区切られている `<custom-ident>` として指定されたカウンター名のリストと、オプションで `<integer>` 値、またはキーワード `none` のどちらかを値として受け取ります。 増加するカウンターは、名前または名前と数値の組み合わせを空白で区切って、いくつでも指定することができます。

- {{cssxref("&lt;custom-ident&gt;")}}
  - : 増加または減少させるカウンターの名前です。
- {{cssxref("&lt;integer&gt;")}}
  - : カウンタに加算する値を指定します。整数に `-` 符号を付けると、その値がカウンターから減算されます。値が指定されていない場合、既定では `1` です。
- `none`
  - : カウンターを増加または減少させる必要がないことを示します。この値は、特定のルールでカウンターが増加または減少するのをすべてキャンセルする場合にも使用することができます。これはプロパティの既定値です。

> **メモ:** `none` 値を指定すると、このルールが適用される選択された要素のすべてのカウンターの増減が防止されます。特定のカウンターの増減のみを防止するには、関連するカウンターの `integer` 値を `0` に設定してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンター値の減少

この例では、逆順に数える一連の数値を表示します。そのために、 100 から始めて、その時点ごとに 7 ずつ減少する数値を表示するカウンターを使用します。

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

`sevens` という名前のカウンターの初期値を `100` にするために、{{cssxref("counter-reset")}} を使用します。次に、それぞれの {{HTMLElement("i")}} に対して、カウンターを `7`ずつ減らします。

最初の値を `100` に設定するには、 {{cssxref(":first-of-type")}} 擬似クラスを使用して最初の `<i>` 要素を特定し、 `counter-increment: none;` を設定します。さらに、 {{cssxref("content")}} プロパティを {{cssxref("::before")}} 擬似要素で使用して、 [`counter()`](/ja/docs/Web/CSS/counter) 関数を使用してカウンターの値を表示します。

```css
div {
  counter-reset: sevens 100;
}
i {
  counter-increment: sevens -7;
}
i:first-of-type {
  counter-increment: none;
}
i::before {
  content: counter(sevens);
}
```

```css hidden
div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  width: 200px;
}
i {
  flex: 0 0 2em;
}
```

#### 結果

{{EmbedLiveSample("Decreasing the counter value", 140, 300)}}

カウンターを作成し、値を `100` に設定するために `counter-reset` （または {{cssxref("counter-set")}}）を使用しなかった場合でも、 `sevens` カウンターは作成されますが、初期値は `0` になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- カウンターのプロパティ: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- カウンターのアットルール: {{cssxref("@counter-style")}}
- カウンターの関数: {{cssxref("counter", "counter()")}} および {{cssxref("counters", "counters()")}}
- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)ガイド
- [CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)モジュール
