---
title: display の新しい 2 値構文への対応
slug: Web/CSS/display/multi-keyword_syntax_of_display
---

{{CSSRef}}

[CSS Display Module Level 3](https://drafts.csswg.org/css-display/) では、[`display`](/ja/docs/Web/CSS/display) プロパティの 2 値構文について記述しています。このガイドでは、この構文の変更について、その理由も含めて説明します。また、 `display` プロパティに組み込まれた後方互換性についても詳しく説明します。

## display プロパティの値を変更するとどうなるのか

CSS について最初に学ぶことのひとつに、ある要素はブロックレベル、ある要素はインラインレベルである、ということがあります。例えば `<h1>` や `<p>` は既定でブロックレベルであり、 `<span>` はインラインレベルです。 {{cssxref("display")}} プロパティを使用すると、ブロックとインラインを切り替えることができます。例えば、見出しをインラインにするには次のような CSS を使用します。

```css
h1 {
  display: inline;
}
```

最近では、[CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout)と[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)が追加されました。これらにアクセスするためには、 `display` プロパティの値、つまり `display: grid` と `display: flex` も使用します。 `display` の値が変更されて初めて、子プロパティはフレックスやグリッドのアイテムとなり、グリッドやフレックスボックスの仕様にある他のプロパティに反応するようになります。要素の `display` の値を変更すると、その直接の子要素の整形コンテキストが変更されます。

しかし、グリッドとフレックスボックスが示すのは、要素には**外部**と**内部**の両方の表示型があるということです。外側の表示型は、その要素がブロックレベルかインラインレベルかを表します。内側の表示型は、そのボックスの子要素がどのように動作するかを記述します。

例として、 `display: flex` を使用すると、ブロックレベルのコンテナーを作成し、フレックスの子を持つことになります。子要素はフレックス整形コンテキストに参加するように記述されます。 これは、 `<span>` — 通常はインラインレベルの要素 — に `display: flex` を適用すると分かります。 `<span>` はブロックレベル要素になります。レイアウト内の他のボックスとの関係では、ブロックレベルのものと同じように動作します。あたかも span に `display: block` を適用したかのようですが、子要素の動作も変更されます。

以下のライブサンプルでは、`<span>` に `display: flex` を適用しています。これはブロックレベルのボックスとなり、インライン方向に利用可能なすべての空間を占有しています。ここで、 `justify-content: space-between;` を使用すると、 2 つのフレックスアイテムの間にこの空間を入れることができます。

{{EmbedGHLiveSample("css-examples/display/multi-keyword/span-flex.html", '100%', 440)}}

インラインフレックスコンテナーを作成することができます。 `inline-flex` という単一の値を使ってフレックスコンテナーを作成すると、インラインレベルのボックスとフレックスの子が作成されます。この子はブロックレベルコンテナーのフレックスの子と同じように動作します。唯一変わったことは、親がインラインレベルボックスになったということです。したがって、他のインラインレベルのものと同様に動作し、ブロックレベルのボックスのように完全な幅（またはインライン軸のサイズ）を取りません。つまり、次のようなテキストがフレックスコンテナーと一緒に表示される可能性があります。

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-flex.html", '100%', 440)}}

グリッドレイアウトで作業する場合も同様です。 `display: grid` を使用すると、ブロックレベルのボックスが表示され、直接の子にはグリッド整形コンテキストが作成されます。 `display: inline-grid` を使用すると、インラインレベルのボックスが作成され、子要素にグリッド整形コンテキストが作成されます。

## 2 値の構文

上記の説明からわかるように、 `display` プロパティはかなりの新しい力を手に入れました。ページ上の他のボックスとの関係でブロックレベルかインラインレベルかを示すだけでなく、それが適用されているボックス内の整形コンテキストも示すようになりました。この動作をよりよく説明するために、`display` プロパティは再構築され、これまで使われてきた単一の値だけでなく、外部と内部の 2 つの値を設定することができるようになりました。

つまり、 `display: flex` を設定して、フレックスの子を持つブロックレベルのボックスを作成する代わりに、 `display: block flex` を使用することになります。フレックスの子要素を持つインラインレベルのボックスを作成するには、 `display: inline-flex` の代わりに `display: inline flex` を使用します。以下の例は、 Firefox 70 以上で動作するもので、これらの値を示しています。

{{EmbedGHLiveSample("css-examples/display/multi-keyword/multi-keyword-flex.html", '100%', 640)}}

`display` の既存のすべての値に対応するものがあります。最も一般的なものを以下の表に示します。最も一般的なものを下の表に示します。完全なリストを見るには、 [`display` property specification](https://drafts.csswg.org/css-display/#display-value-summary) にある表を参照してください。

| 単一の値       | 新しい値           |
| -------------- | ------------------ |
| `block`        | `block flow`       |
| `flow-root`    | `block flow-root`  |
| `inline`       | `inline flow`      |
| `inline-block` | `inline flow-root` |
| `flex`         | `block flex`       |
| `inline-flex`  | `inline flex`      |
| `grid`         | `block grid`       |
| `inline-grid`  | `inline grid`      |

## display: block flow-root と display: inline flow-root

これらの新しい値が CSS レイアウトの明確化にどのように役立つかについて、表にあるあまり馴染みがないと思われる値について見てみましょう。 2 つの値 `display: block flow-root` は、かなり新しい 1 つの値 `display: flow-root` に対応します。この値の唯一の目的は、新しい[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context) (BFC) を作成することです。BFC は、ボックスの中にあるものはボックスの中にとどまり、ボックスの外から入ってくるものはボックスの中に入り込めないようにします。新しい BFC を作成する最も明白な用途は、浮動要素を中に収め、clearfix のハックのしなくてもよくすることです。

以下の例では、コンテナーの中に浮動しているアイテムがあります。浮動要素は枠のついたボックスで囲まれており、その中に浮動要素とテキストが一緒に入っています。もし `display: flow-root` という行を削除すると、浮動要素はボックスの底面からはみ出るようになります。 Firefox を使用している場合は、より新しい `display: block flow-root` に置き換えることで、単一の `flow-root` 値と同じことが実現できます。

{{EmbedGHLiveSample("css-examples/display/multi-keyword/block-flow-root.html", '100%', 440)}}

`flow-root` の値は、ブロックとインラインのレイアウトについて考えれば、理にかなっています。これは、[通常フロー](/ja/docs/Learn/CSS/CSS_layout/Normal_Flow)と呼ばれることもあるようです。 HTML ページは新しい整形コンテキストを作成し（浮動要素やマージンが境界からはみ出さない）、コンテンツはブロックとインラインレイアウトを使用して、通常のフローで表示されます。グリッドやフレックスのコンテナーを作成すると、新しい整形コンテキスト（それぞれグリッド整形コンテキストとフレックス整形コンテキスト）も作成されます。しかし、浮動要素やマージンを含めてもブロックやインラインレイアウトを使い続けたい場合は、新しいフロールートを作成し、ブロックやインラインレイアウトでやり直すことができます。その位置から下方向は、すべて新しいフロールートの中に含まれます。

したがって、`display: flow-root` の 2 値構文が `display: block flow-root` であることは、非常に理にかなっていると言えます。ブロックレベルのボックスと通常のフローに参加する子オブジェクトを持つ、ブロック整形コンテキストを作成しているのです。対応する組である `display: inline flow-root` についてはどうでしょうか？これは `display: inline-block` を記述する新しい方法です。

`display: inline-block` という値は、 CSS の初期から存在しています。この値を使用する理由は、例えばナビゲーションアイテムを作成する際に、インラインアイテムを要素から離して距離を置くことができるようにするため、または以下の例のようにインライン要素にパディング付きの背景を追加したい場合です。

{{EmbedGHLiveSample("css-examples/display/multi-keyword/inline-block.html", '100%', 440)}}

しかし、 `display: inline-block` を持つ要素は、浮動要素も含むことになります。それは、インラインレベルのボックスの中にあるすべてのものを含みます。したがって、 `display: inline-block` は `display: flow-root` と全く同じですが、ブロックレベルのボックスではなく、インラインレベルのボックスで行います。新しい構文は、この値で何が起こっているかを正確に表現しています。上記の例では、 Firefox で `display: inline-block` を `display: inline flow-root` に変更しても同じ結果になります。

## display の古い値について

上の表で示したように、それぞれの 2 値版は旧来版に直接マッピングされているので、 2 値版を使用するメリットは今のところありません。

`display` の値が一つだけの場合、[仕様書](https://www.w3.org/TR/css-display-3/#outer-role)では、外側の値である `block` や `inline` のみを使用した場合にどうするかが説明されています。

> 「`<display-outside>` の値が指定されたものの、 `<display-inside>` が省略された場合、その要素の内側の表示型は既定で flow になります。」

つまり、単一の値の世界での動作と全く同じです。 `display: block` や `display: inline` を指定すると、ボックスの外側の表示値が変更されますが、子オブジェクトは通常のフローで続行されます。

もし、内側の値である `flex`, `grid`, `flow-root` のみを指定した場合、[仕様書](https://www.w3.org/TR/css-display-3/#inner-model)では、外側の値として `block` を指定するように説明されています。

> 「`<display-inside>` の値が指定されたものの、 `<display-outside>` が省略された場合、その要素の外側の表示型は既定で block になります。ただし、 ruby は例外で既定で inline になります。」

最後に、いくつか旧来の[合成済みインラインレベル値](https://www.w3.org/TR/css-display-3/#legacy-display)があります。

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

対応しているブラウザーがこれらを単一の値として見つけた場合、以下の 2 値版と同じように扱われます。

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

つまり、単一の値を使用する既存サイトと新規サイトの互換性を維持しつつ、仕様の進化を可能にすることで、現状の状況をすべてきちんとカバーしているのです。

## 2 値の構文を使い始めることはできるのか？

上で示したように、今すぐ 2 値版を使うメリットはあまりありません。もし使ったとしても、そのページは Firefox でしか動かないでしょう 他のブラウザーはまだ 2 値版を実装していません。そのため、 `display: block flex` は Firefox でのみフレックスレイアウトを実現し 、Chrome では無効なものとして無視されます。 2 値構文に対する現在の対応状況は、互換性データで確認することができます。

{{Compat("css.properties.display.multi-keyword_values", 10)}}

- Chromium bug: <https://bugs.chromium.org/p/chromium/issues/detail?id=804600>

しかし、このように `display` の値を 2 値の方法で考えることには価値があります。 `display` の値を変更するときに、外側と内側の値を考慮すれば、その値がボックス自体にどのような影響を与えるか、レイアウトでの表示や動作、そして直接の子オブジェクトにどのように影響するかをすぐに理解することができます。
