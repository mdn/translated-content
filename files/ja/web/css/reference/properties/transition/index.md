---
title: transition
slug: Web/CSS/Reference/Properties/transition
original_slug: Web/CSS/transition
l10n:
  sourceCommit: bed59f268d5e299beb538e435f08c4f4ce685980
---

**`transition`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{ cssxref("transition-property") }}、 {{ cssxref("transition-duration") }}、 {{ cssxref("transition-timing-function") }}、 {{ cssxref("transition-delay") }}、 {{ cssxref("transition-behavior") }} の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)です。

{{InteractiveExample("CSS デモ: transition")}}

```css interactive-example-choice
transition: margin-right 2s;
```

```css interactive-example-choice
transition: margin-right 2s 0.5s;
```

```css interactive-example-choice
transition: margin-right 2s ease-in-out;
```

```css interactive-example-choice
transition: margin-right 2s ease-in-out 0.5s;
```

```css interactive-example-choice
transition:
  margin-right 2s,
  color 1s;
```

```css interactive-example-choice
transition: all 1s ease-out;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Hover to see<br />the transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #909;
  color: #fff;
  margin-right: 40%;
}
```

トランジション (transition) は、要素の 2 つの状態間の変化を定義するためのものです。それぞれの状態は {{cssxref(":hover")}} や {{cssxref(":active")}} のような[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で定義されたり、 JavaScript を使用して動的に設定されたりします。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`transition-behavior`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior) {{experimental_inline}}
- [`transition-delay`](/ja/docs/Web/CSS/Reference/Properties/transition-delay)
- [`transition-duration`](/ja/docs/Web/CSS/Reference/Properties/transition-duration)
- [`transition-property`](/ja/docs/Web/CSS/Reference/Properties/transition-property)
- [`transition-timing-function`](/ja/docs/Web/CSS/Reference/Properties/transition-timing-function)

## 構文

```css
/* 1 つのプロパティへの適用 */
/* プロパティ名 | 再生時間 */
transition: margin-right 4s;

/* プロパティ名 | 再生時間 | 待ち時間 */
transition: margin-right 4s 1s;

/* プロパティ名 | 再生時間 | イージング関数 */
transition: margin-right 4s ease-in-out;

/* プロパティ名 | 再生時間 | イージング関数 | 待ち時間 */
transition: margin-right 4s ease-in-out 1s;

/* プロパティ名 | 再生時間 | 振る舞い */
transition: display 4s allow-discrete;

/* 2 つのプロパティへの適用 */
transition:
  margin-right 4s,
  color 1s;

/* 変化するすべてのプロパティへの適用 */
transition: all 0.5s ease-out allow-discrete;
transition: 200ms linear 50ms;

/* グローバル値 */
transition: inherit;
transition: initial;
transition: revert;
transition: revert-layer;
transition: unset;
```

`transition` プロパティの値は、以下のどちらかで指定します。

- 特別な値 `none` は、この要素にトランジションが発生しないことを指定します。これが既定値です。
- カンマ区切りの、トランジションする 1 つ以上の単体プロパティ。

それぞれの単体プロパティのトランジションでは、単体のプロパティまたはすべてのプロパティに適用されるトランジションを記述します。記述は以下の通りです。

- トランジションを適用するプロパティ（群）を表す 0 ～ 1 個の値。以下のいずれかで設定することができます。
  - {{cssxref("&lt;custom-ident&gt;")}} は単体のプロパティを表します。
  - 特別な値 `all` は、要素の状態が変化したときに変化するすべてのプロパティにトランジションを適用することを指定します。
  - 値を指定しない場合、値は `all` とみなされ、指定したトランジションは変化するすべてのプロパティに適用されます。
- 使用するイージング関数を表す 0 ～ 1 個の {{cssxref("&lt;easing-function&gt;")}} の値。
- 0 ～ 2 個の {{cssxref("&lt;time&gt;")}} の値。 1 番目の値は {{cssxref("transition-duration")}} に割り当てられる再生時間として解釈され、 2 番目の値は {{cssxref("transition-delay")}} に割り当てられる待ち時間として解釈されます。
- アニメーション動作が[離散的](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#離散)であるプロパティに対して、トランジションを始めるかどうかを宣言する 0 または 1 つの値。この値が存在する場合、キーワード `allow-discrete` またはキーワード `normal` のどちらかになります。

単体プロパティのトランジションに、 `all` をトランジションするプロパティとして指定したものの、その後で {{cssxref("&lt;custom-ident&gt;")}} の値によって単体のプロパティを指定した場合、後のトランジションが先のものを上書きします。例えば次のように指定されていたとします。

```css
transition:
  all 200ms,
  opacity 400ms;
```

この場合、要素の状態が変わると変化するプロパティは、 {{cssxref("opacity")}} を除き、すべて 200ms の再生時間でトランジションします。

プロパティ値の一覧が同じ長さではない場合については、[プロパティ値のリストの長さが異なる場合](/ja/docs/Web/CSS/Guides/Transitions/Using#when_property_value_lists_are_of_different_lengths)を参照してください。つまり、実際にアニメーション化されているプロパティの数を超える余分なトランジションの記述は無視されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、ユーザーが要素の上にポインターを当てたとき、 4 秒間の `font-size` のトランジションが起こるまでに 1 秒の待ち時間があります。

#### HTML

```html
<a class="target">ポインターを当ててください</a>
```

#### CSS

2 つの {{cssxref("time")}} 値を記述しています。 `transition` の一括指定では、最初の `<time>` 値は `transition-duration` です。 2 つ目の time 値は `transition-delay` です。省略した場合の既定値はどちらも `0s` です。

```css
.target {
  font-size: 14px;
  transition: font-size 4s 1s;
}

.target:hover {
  font-size: 36px;
}
```

{{EmbedLiveSample('Basic_example', 600, 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)モジュール
- [CSS トランジションの使用](/ja/docs/Web/CSS/Guides/Transitions/Using)
- {{ domxref("TransitionEvent") }}
