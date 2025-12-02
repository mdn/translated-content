---
title: <overflow>
slug: Web/CSS/Reference/Values/overflow_value
original_slug: Web/CSS/overflow_value
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

**`<overflow>`** {{glossary("enumerated", "列挙")}}値型は、{{cssxref("overflow-block")}}、{{cssxref("overflow-inline")}}、{{cssxref("overflow-x")}}、{{cssxref("overflow-y")}} の個別指定プロパティと {{cssxref("overflow")}} 一括指定プロパティのキーワード値を表します。これらのプロパティは、ブロックコンテナー、フレックスコンテナー、グリッドコンテナーに適用されます。

## 構文

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## 値

列挙型の値 `<overflow>` は、下記の一覧のいずれかの値を使用して指定します。

- `visible`
  - : はみ出したコンテンツは切り取られず、要素のパディングボックス外に表示されることがあります。要素ボックスは{{glossary("scroll container", "スクロールコンテナー")}}にはなりません。これが `<overflow>` 列挙型を持つすべてのプロパティの既定値です。
- `hidden`
  - : はみ出したコンテンツは要素のパディングボックスで切り取られます。スクロールバーはなく、切り取られたコンテンツは表示されません（つまり、切り取られたコンテンツは非表示になります）が、コンテンツは存在します。ユーザーエージェントはスクロールバーを追加しませんし、タッチ画面をドラッグしたり、マウスのスクロールホイールを使用したりする操作によって、ユーザーが切り取られた領域の外にあるコンテンツを表示することもできません。要素はプログラムによって（例えば、 {{domxref("Element.scrollLeft", "scrollLeft")}} プロパティや {{domxref("Element.scrollTo", "scrollTo()")}} メソッドの値を設定することで）コンテンツをスクロールすることができます。コンテンツは、キーボード操作でもスクロールすることができます。矢印でコンテンツをスクロールすることができ、隠されたコンテンツ内のフォーカス可能な要素へタブ操作をすると、フォーカスされた要素をビューにスクロールさせることができます。この値が設定されている要素ボックスは、スクロールコンテナーになります。
- `clip`
  - : はみ出したコンテンツは、 [`overflow-clip-margin`](/ja/docs/Web/CSS/Reference/Properties/overflow-clip-margin) プロパティを使用して定義した要素の _オーバーフロークリップ辺_ でクリップされます。その結果、コンテンツは要素のパディングボックスから `overflow-clip-margin` の {{cssxref("&lt;length&gt;")}} 値、または設定されていない場合は `0px` だけはみ出します。クリップ領域外にはみ出したコンテンツは表示されず、ユーザーエージェントはスクロールバーを表示させず、プログラムによるスクロールにも対応しません。新しい[整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)は作成されません。
- `scroll`
  - : はみ出したコンテンツは要素のパディングボックスでクリップされ、はみ出したコンテンツはスクロールバーを使用してスクロールして表示することができます。ユーザーエージェントは、コンテンツがはみ出したり切り取られたりするかどうかにかかわらず、 1 つの値だけを設定すると水平方向と垂直方向の両方にスクロールバーを表示します。したがって、このキーワード値を使用することで、コンテンツの変更に伴ってスクロールバーが現れたり消えたりするのを防ぐことができます。プリンターでは、はみ出したコンテンツが出力されることがあります。この値が設定されている要素ボックスは、スクロールコンテナーになります。
- `auto`
  - : はみ出したコンテンツは要素のパディングボックスで切り取られ、はみ出したコンテンツはスクロールして表示することができます。 `scroll` とは異なり、ユーザーエージェントはコンテンツがはみ出した場合のみスクロールバーを表示し、既定ではスクロールバーを非表示にします。コンテンツが要素のパディングボックス内に収まる場合、 `visible` と同じように見えますが、新しい整形コンテキストが確立されます。この値が設定された要素ボックスはスクロールコンテナーになります。

> [!NOTE]
> キーワード値 `overlay` は `auto` の古い値の別名です。 `overlay` を指定すると、スクロールバーは空間を占めるのではなく、コンテンツの上に描画されます。

## 例

この例では、 {{cssxref("overflow")}} プロパティの `<overflow>` 列挙値をすべてデモしています。

### HTML

この例の HTML は {{HTMLELement("pre")}} 要素内にいくつかの歌詞を格納しています。 HTML はまた、オーバーフローとスクロールの動作に対するキーボードフォーカスの効果をテストできるようにリンクテキストを格納しています。それぞれの `<overflow>` 列挙値の効果を表示させるために、同じ HTML コードが複数回繰り返されています。

```html
<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>
```

```html hidden
<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>
```

### CSS

デモのため、`<pre>`要素のボックスのサイズは、インラインとブロックの両方向でコンテンツがそのコンテナーから確実にはみ出すように定義されています。繰り返される `<pre>` 要素にはそれぞれ異なる `<overflow>` 値が設定されています。 `clip` 値のデモのために、 {{CSSXref("overflow-clip-margin")}} を追加しています。

```css hidden
pre {
  border: 2px dashed red;
  margin-bottom: 3em;
}

::before {
  font-weight: bold;
  color: white;
  background: crimson;
  display: inline-block;
  width: 100%;
  padding: 3px 5px;
  box-sizing: border-box;
}
```

```css
pre {
  block-size: 100px;
  inline-size: 295px;
}

pre:nth-of-type(1) {
  overflow: hidden;
}
pre:nth-of-type(1)::before {
  content: "hidden: ";
}

pre:nth-of-type(2) {
  overflow: clip;
  overflow-clip-margin: 1em;
}
pre:nth-of-type(2)::before {
  content: "clip: ";
}

pre:nth-of-type(3) {
  overflow: scroll;
}
pre:nth-of-type(3)::before {
  content: "scroll: ";
}

pre:nth-of-type(4) {
  overflow: auto;
}
pre:nth-of-type(4)::before {
  content: "auto: ";
}

pre:nth-of-type(5) {
  overflow: clip;
  overflow: overlay;
  overflow-clip-margin: 3em;
}
pre:nth-of-type(5)::before {
  content: "overlay （対応していない場合は clip）: ";
}

pre:nth-of-type(6) {
  overflow: visible;
}
pre:nth-of-type(6)::before {
  content: "visible: ";
}
```

### 結果

{{EmbedLiveSample("Examples", "500", "800")}}

キーボードフォーカスがオーバーフローやスクロールの動作に与える効果を見るには、例えばこの例のリンクをすべてタブで表示してみてください。 `clip` ボックスはスクロールコンテナーを作成せず、リンクにフォーカスが当たってもリンクが表示されないことに注意してください。常にリンクが表示されている `visible` 値もスクロールコンテナーにはなりません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}}, {{cssxref("overflow")}}
- [CSS オーバーフローモジュール](/ja/docs/Web/CSS/Guides/Overflow)
