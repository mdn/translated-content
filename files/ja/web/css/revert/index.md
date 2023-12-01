---
title: revert
slug: Web/CSS/revert
---

{{CSSRef}}

**`revert`** は CSS のキーワードで、現在の要素にカスケードされたプロパティの値を、現在の**{{Glossary("style origin", "スタイルオリジン")}}**が変更を行わなければそのプロパティが持っていたであろう値に戻します。したがって、そのプロパティが親から継承されている場合にはその継承された値に、またはユーザーエージェントのスタイルシート（またはユーザーのスタイルが存在する場合にはユーザーのスタイル）によって確立された既定値にリセットされます。これは、 CSS の一括指定 {{cssxref("all")}} を含む、あらゆる CSS プロパティに適用することができます。

これは、ロールバックされるスタイルに到達するまで、オーバーライドされたすべてのスタイルをカスケードから削除します。

- サイト独自のスタイル（作成者のオリジン）で使用された場合、 `revert` はプロパティのカスケードされた値を、ユーザー独自のスタイルが存在する場合はそのスタイルにロールバックし、それ以外の場合はユーザーエージェントの既定のスタイルにロールバックします。
- ユーザー独自のスタイルシートで使用された場合、またはスタイルがユーザーによって適用された場合（ユーザーオリジン）、 `revert` はカスケードされた値をユーザーエージェントの既定のスタイルにロールバックします。
- ユーザーエージェントの既定のスタイル内で使用された場合、このキーワードは機能的に {{cssxref("unset")}} と等価です。

`revert` キーワードは多くの場合、 [`unset`](/ja/docs/Web/CSS/unset) とまったく同じ動作をします。唯一の違いは、ブラウザーやユーザーによって作成された独自スタイルシート（ブラウザー側に設定されたもの）が設定した値があるプロパティについてです。

revert は、リセットした要素の子に適用されているルールには影響しません（ただし、子に対する親のルールの効果は除去されます）。つまり、すべてのセクションに `color: green` を設定し、特定のセクションに `all: revert` を設定した場合、そのセクションの色は黒になります。しかし、すべての段落を赤にするルールがある場合、すべての段落はすべてのセクションで赤のままです。

> **メモ:** revert は単なる値です。 `revert` の値は[詳細度](/ja/docs/Web/CSS/Specificity)を使用して上書きすることができます。

> **メモ:** `revert` キーワードは {{cssxref("initial")}} とは異なりますし、混同しないでください。これは CSS の仕様書でプロパティごとに定義された[初期値](/ja/docs/Web/CSS/initial_value)です。それに対して、既定値はユーザーエージェントのスタイルシートが CSS セレクターに基づいて定義しています。
>
> 例えば、 {{cssxref("display")}} プロパティの[初期値](/ja/docs/Web/CSS/initial_value)は `inline` ですが、普通のユーザーエージェントスタイルシートは、 {{cssxref("display")}} の既定値を {{HTMLElement("div")}} では `block`、 {{HTMLElement("table")}} では `table` というように設定します。

## 例

### Revert と unset

`revert` と `unset` は似ていますが、一部の要素、一部のプロパティには異なります。

以下の例では、グローバルスタイルシートで独自の `font-weight` を設定し、その後、設定を解除して元に戻そうとします。これは font-weight プロパティの初期値であるため、 unset はテキストを通常のままにします。元に戻すと、ほとんどのブラウザーで見出しの既定値である太字に戻ります。

```css
h3 {
  font-weight: normal;
  color: blue;
}
```

```html
<h3 style="font-weight: unset; color: unset;">
  これは font-weight: normal ですが、 color: black になります
</h3>
<p>いくらかのテキスト</p>
<h3 style="font-weight: revert; color: revert;">
  これは本来通り font-weight (bold) と color: black です
</h3>
<p>いくらかのテキスト</p>
```

{{EmbedLiveSample('Revert_vs_unset')}}

### すべてを revert

すべての値を revert することは、何かを大きく変更した後、既定値に戻したい場合に有効です。つまり、上記の例を反復すると、 font-weight と color を別々に戻す代わりに、それらすべてを戻すことができます。

```css
h3 {
  font-weight: normal;
  color: blue;
  border-bottom: 1px solid grey;
}
```

```html
<h3>ここは独自のスタイルです</h3>
<p>いくらかのテキスト</p>
<h3 style="all: revert">これはブラウザーやユーザーの既定値に戻されます</h3>
<p>いくらかのテキスト</p>
```

{{EmbedLiveSample('Revert_all')}}

### 親で revert

revert は、何らかのルールで選択した要素の値を、その要素に限って効果的に削除します。例として、セクションに緑色、段落に赤色を設定します。

```css
section {
  color: darkgreen;
}
p {
  color: red;
}
section.with-revert {
  color: revert;
}
```

```html
<section>
  <h3>これは深緑になります</h3>
  <p>この段落のテキストは赤になります。</p>
  これも深緑になります。
</section>
<section class="with-revert">
  <h3>これは黒になります</h3>
  <p>この段落のテキストは赤になります。</p>
  これも黒になります。
</section>
```

section の color プロパティが元に戻されたにもかかわらず、段落の色が赤のままであることに注目してください。また、ヘッダーとプレーンテキストノードの両方が黒色であることにも注意してください。これは、 2 番目のセクションに `section { color: darkgreen }` が存在しないのとまったく同じです。

{{EmbedLiveSample('Revert_on_a_parent')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("initial")}} を使用すると、プロパティを初期値に設定します。
- {{cssxref("unset")}} を使用すると、継承プロパティは継承値に、それ以外は初期値に設定します。
- {{cssxref("inherit")}} を使用すると、要素のプロパティを親と同じ値にします。
- {{cssxref("all")}} プロパティは、すべてのプロパティを一度に initial, inherit, revert, unset の状態にします。
