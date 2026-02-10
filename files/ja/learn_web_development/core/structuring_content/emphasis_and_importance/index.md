---
title: 強調と重要性
slug: Learn_web_development/Core/Structuring_content/Emphasis_and_importance
l10n:
  sourceCommit: cc7ed25d67ec3df5df8cfa255e1066cb5845e293
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}

前回は、 HTML においてなぜ意味づけが重要なのか、また見出しと段落に焦点を当てて見ていきました。この記事では、意味づけというテーマを続け、テキストに強調や重要性を適用する HTML 要素を（印刷メディアにおけるイタリック体や太字のテキストと並べて）見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>強調や重要性ということの持つ意味、そして、HTML でそれを適用する基本要素である <code>&lt;em&gt;</code> や <code>&lt;strong&gt;</code>。</li>
          <li>全く使用しなくなった表現用マークアップ（<code>&lt;big&gt;</code> や <code>&lt;font&gt;</code> など）を識別すること。これは非推奨です。</li>
          <li>新しい意味をもって再提案された表現用マークアップ（<code>&lt;i&gt;</code> や <code>&lt;b&gt;</code> など）を識別すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 強調と重要性とは

人間の言語では、文の意味を変えるために特定の単語を強調することが多く、特定の単語を何らかの意味で重要または異なるものとしてマークしたい場面がよくあります。HTML は、そのような効果でテキストコンテンツをマークアップすることを可能にするためにさまざまなセマンティック要素を提供します。そしてこの節では、最も一般的なもののいくつかを見ていきます。

### 強調

話し言葉で強調したいときは、特定の言葉を強く発音し、自分の言っていることの意味を微妙に変えます。同様に、書き言葉では、イタリック体にすることによって単語を強調する傾向があります。たとえば、次の 2 つの文は意味が異なります。

> I am glad you weren't late.
>
> I am _glad_ you weren't _late_.

最初の文は、その人が遅刻しなかったことに純粋にほっとしているように聞こえます。これに対して 2 つ目の文は、 "glad" と "late" の両方が斜体になっており、相手が少し遅れてきたことに腹を立てている、嫌味な、あるいは受動的な表現に聞こえます。

HTML では、このようなものをマークアップするために {{htmlelement("em")}} （強調）要素を使用します。文書を読みやすくするだけでなく、これらはスクリーンリーダーによって認識され、異なるトーンの音声で話されます。ブラウザーでは既定でイタリック体になっていますが、純粋にイタリック体にするだけの場合にはこのタグを使用しないでください。その場合は、 {{htmlelement("span")}} 要素と CSS、あるいは {{htmlelement("i")}} 要素（下記参照）を使用してください。

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### 重要性が高い

重要な言葉を強調するために、話し言葉でそれらを強調し、そして書面でそれらを **太字** にする傾向があります。例えば。

> This liquid is **highly toxic**.
>
> I am counting on you. **Do not** be late!

HTML では、このようなものをマークアップするために {{htmlelement("strong")}} （強い重要性）要素を使用します。 この文書をより便利にするだけでなく、これらもスクリーンリーダーによって認識され、異なるトーンの音声で話されています。ブラウザーでは既定で太字のテキストとしてスタイル設定されていますが、太字のスタイルにするだけの場合にはこのタグを使用しないでください。そのためには、{{htmlelement("span")}} 要素といくつかの CSS、あるいは {{htmlelement("b")}} 要素（下記参照）を使用してください。

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

必要に応じて、 strong と em を相互に入れ子にすることができます。

```html-nolint
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

{{EmbedLiveSample('Strong importance')}}

### 強調と重要性で遊んでみよう

この章では、強調と重要性をつけて取り組んでください。

1. 下記コードブロック内の **"Play"** をクリックして、MDN Playground で例を編集してください。
2. メインの見出しでは「強調」という語を強調し、「重要性」という語の重要性を高くしましょう。
3. 最初の段落では、コーヒーマシンの名称を特に重要視し、コーヒーを説明する際に使用された形容詞を強調してください。
4. 第二段落では、温度の描写（「寒い」）と取るべき措置（「風邪を引かないよう厚着する」）を特に強調してください。「風邪を引く」には追加のマークアップを施し、強調と重要性を両立させてください。

間違えた場合は、MDN Playground の _Reset_ ボタンで作業内容をクリアできます。どうしても行き詰まった場合は、コードブロックの下にある解答を参照してください。

```css hidden live-sample___emphasis_importance
h1 {
  font-weight: normal;
}
```

```html-nolint live-sample___emphasis_importance
<h1>強調と重要性</h1>

<p>
  私の新しいコーヒーマシンは Percolator 2000 と言います。それは至高で素晴らしい一杯を生み出します。
</p>

<p>
  真冬の時期は寒くなります。風邪を引かないよう厚着してください。
</p>
```

{{ EmbedLiveSample('emphasis_importance', "100%", 160) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した HTML は次のようになります。

```html-nolint
<h1><em>強調</em>と<strong>重要性</strong></h1>

<p>
  私の新しいコーヒーマシンは <strong>Percolator 2000</strong> と言います。それは<em>至高</em>で<em>素晴らしい</em>一杯を生み出します。
</p>

<p>
  真冬の時期は<strong>寒く</strong>なります。<strong><em>風邪を引かない</em>よう厚着して</strong>ください。
  >.
</p>
```

</details>

### イタリック、太字、下線…

これまで説明してきた要素には、明確に関連付けられた意味があります。{{htmlelement("b")}}、{{htmlelement("i")}}、{{htmlelement("u")}} の状況はやや複雑です。CSS がまだ十分に対応されていないか、まったく対応されていなかった時代に、太字、斜体、下線付きのテキストを書くことができるように作られたものです。このような要素は表示にのみ影響を与え、意味には影響を与えない**表示要素**として知られていますが、もはや使用するべきではありません。これまで見てきたように、セマンティクスはアクセシビリティ、SEO などにとって非常に重要だからです。

HTML5 では `<b>`、`<i>`、`<u>` が新しい、やや混乱しやすい意味的な役割で再定義されました。

最適な経験則は次のとおりです。`<b>`、`<i>`、`<u>` を使用するのは、伝統的に太字、斜体、下線を使って意味を伝えてきたものを、より適切な要素がない場合のみで使用してください。通常はあるはずです。 `<strong>`、`<em>`、`<mark>`、`<span>` の方が適切ではないかどうか考えてみてください。

アクセシビリティの考え方を守ることは常に重要です。 イタリック体の概念は、スクリーンリーダーを使っている人、またはラテン系のアルファベット以外の書記体系を使っている人にとってはあまり役に立ちません。

- {{HTMLElement('i')}} は、伝統的にイタリック体で伝えられた意味を伝えるために使われます：外来語、分類名、技術用語、考え...
- {{HTMLElement('b')}} は、伝統的に太字で伝えられている意味を伝えるために使用されます。キーワード、製品名、リードセンテンス...
- {{HTMLElement('u')}} は、下線で伝統的に伝えられている意味を伝えるために使用されます。適切な名前、スペルミス...

> [!NOTE]
> 人々は下線をハイパーリンクと強く関連付けています。したがって、ウェブ上では、リンクのみに下線を引くのが最善です。ウェブ上では、意味的に適切な場合は `<u>` 要素を使用しますが、 CSS を使用して既定の下線をより適切なものに変更することを検討してください。以下の例はその方法を示しています。

<!-- cSpell:ignore spel -->

```html
<!-- scientific names -->
<p>
  The Ruby-throated Hummingbird (<i>Archilochus colubris</i>) is the most common
  hummingbird in Eastern North America.
</p>

<!-- foreign words -->
<p>
  The menu was a sea of exotic words like <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> and <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- a known misspelling -->
<p>Someday I'll learn how to <u class="spelling-error">spel</u> better.</p>

<!-- term being defined when used in a definition -->
<dl>
  <dt>Semantic HTML</dt>
  <dd>
    Use the elements based on their <b>semantic</b> meaning, not their
    appearance.
  </dd>
</dl>
```

{{EmbedLiveSample('Italic, bold, underline…','100%','270')}}

## まとめ

強調と重要性の見方はひとまずこれで終わりです。次に、 HTML ではリストをどのように表すかを見ていきましょう。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}
