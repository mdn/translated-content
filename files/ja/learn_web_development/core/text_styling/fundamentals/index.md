---
title: 基本的なテキストとフォントのスタイル設定
short-title: テキストとフォントの基本
slug: Learn_web_development/Core/Text_styling/Fundamentals
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}

この記事では、 {{glossary("CSS")}} によるテキストの装飾の習得に向けて旅を始めましょう。 ここでは、フォントの太さ、ファミリーそしてスタイルの設定、フォントの一括指定、テキストの配置とその他のエフェクト、ラインと文字の間隔などを含んだ、テキストやフォントの装飾の基本について詳しく説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML によるコンテンツの構造化</a
        >、および <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS によるスタイル設定の基本</a>で学習）。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>フォントファミリー、フォントスタック、ウェブセーフフォントの概念を理解すること。</li>
          <li>フォントの色、太さ、サイズ、スタイルを設定すること。</li>
          <li>テキストの配置、変換、装飾を設定すること。</li>
          <li>行の高さを設定すること。</li>
          <li>他にもいくつかのフォントやテキストのスタイル設定プロパティがあることを知り、それらを探索してみたいと思うこと。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## CSS でテキストの装飾に関連するものは何か

HTML と CSS を使った作業ですでに経験したように、要素内のテキストは要素の[コンテンツボックス](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ボックスの構成)内にレイアウトされます。 コンテンツ領域の左上（RTL 言語のコンテンツの場合は右上）から始まり、ラインの終りに向かって流れます。 終りに達すると、次のラインに進み、続けてすべてのコンテンツがボックスに配置されるまで次のラインに進みます。 テキストコンテンツは事実上一連のインライン要素のようにふるまい、互いに隣接するラインに配置され、ラインの終りに達するまで、または、{{htmlelement("br")}} 要素を使用して手動で改行を強制しない限り改行を作成しません。

> [!NOTE]
> 上の段落で混乱していると感じても問題ありません — 先に進む前に、ボックスモデル理論を磨くために、[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)の記事に戻って見直してください。

テキストを装飾するために使用される CSS プロパティは、一般的に次の 2 つのカテゴリーに分類されます。 この記事では、これらのプロパティを個別に説明します。

- **フォントスタイル**: テキストに適用されるフォントに影響するプロパティで、適用するフォント、大きさ、太字、斜体などに影響します。
- **テキストのレイアウトスタイル**: テキストの間隔やその他のレイアウト機能に影響するプロパティで、例えば、行間や文字間のスペースや、コンテンツボックス内でのテキストの配置方法などを操作できます。

> [!NOTE]
> 要素内のテキストはすべて単一の実体として影響を受けることに注意してください。 テキストの一部分を（{{htmlelement("span")}} や {{htmlelement("strong")}} など）適切な要素で囲んだり、[`::first-letter`](/ja/docs/Web/CSS/Reference/Selectors/::first-letter)（要素のテキストの最初の文字を選択）、[`::first-line`](/ja/docs/Web/CSS/Reference/Selectors/::first-line)（要素のテキストの最初の行を選択）、[`::selection`](/ja/docs/Web/CSS/Reference/Selectors/::selection)（現在カーソルで強調表示されているテキストを選択）のようなテキスト固有の擬似要素を使用しない限り、テキストの一部分を選択して装飾することはできません。

## フォント

フォントを装飾するためのプロパティを見るためにまっすぐに進みましょう。 この例では、次のような同じ HTML サンプルにいくつかの異なる CSS プロパティを適用します。

```html live-sample___0unstyled live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

### 色

{{cssxref("color")}} プロパティは、選択された要素の前景のコンテンツの色を設定します（通常はテキストですが、{{cssxref("text-decoration")}} プロパティを使用してテキストに下線や上線を配置するなど、他のいくつかの要素を含めることもできます）。

`color` は次のように任意の [CSS カラー単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#色)を受け入れることができます。

```css live-sample___1color live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
}
```

これにより、次のように段落は標準のブラウザー既定の黒ではなく赤になります。

{{ EmbedLiveSample('1color', '100%', 230) }}

### フォントファミリー

テキストに別のフォントを設定するには、{{cssxref("font-family")}} プロパティを使用します — これにより、選択した要素に適用するブラウザーのフォント（またはフォントのリスト）を指定できます。 ウェブサイトにアクセスしているマシンで利用可能な場合にのみ、ブラウザーはフォントを適用します。 そうでない場合は、ブラウザーの[既定のフォント](#既定のフォント)を使用するだけです。 簡単な例はこんな感じです。

```css
p {
  font-family: "Arial";
}
```

これにより、ページ上のすべての段落に、どのコンピューターでも見られる arial フォントが採用されます。

> [!NOTE]
> Scrimba の [Web-safe fonts](https://scrimba.com/learn-html-and-css-c0p/~01r?via=mdn) <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> では、フォントの重要性、ウェブセーフフォント、CSS でのフォント指定方法についてインタラクティブなガイドを提供します。さらに、知識を試すチャレンジも用意されています。

#### ウェブセーフフォント

フォントの入手可能性と言えば、すべてのシステムで一般的に利用でき、したがってそれほど心配することなく使用できるフォントの数は限られています。これらはいわゆる**ウェブセーフフォント** (web safe fonts) です。

ほとんどの場合、ウェブ開発者は、テキストコンテンツの表示に使用されるフォントをより具体的に制御したいと考えています。 問題は、ウェブページを見るために使用されているコンピューターでどのフォントが利用可能かを知る方法を見つけることです。 あらゆる場合にこれを知る方法はありませんが、ウェブセーフフォントは最も使用されているオペレーティングシステム（Windows、Mac、最も一般的な Linux ディストリビューション、Android、および iOS）のほぼすべての実例で使用可能です。

実際のウェブセーフフォントのリストは、オペレーティングシステムが進化するにつれて変わりますが、少なくとも現時点では次のフォントをウェブセーフと見なすことをお勧めします（それらの多くは 90 年代後半から 2000 年代初頭にかけての Microsoft の[ウェブのコアフォント](https://ja.wikipedia.org/wiki/コアフォント)の先鞭のおかげで普及しました）。

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">名前</th>
      <th scope="col">総称型</th>
      <th scope="col">メモ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arial</td>
      <td>sans-serif</td>
      <td>
        <em>Arial</em> に推奨される代替として <em>Helvetica</em> を追加するのがベストプラクティスと考えられることがよくあります。 フォントフェイスはほぼ同じですが、 <em>Arial</em> の方が広く入手可能であっても <em>Helvetica</em> はより良い形状をしていると考えられます。
      </td>
    </tr>
    <tr>
      <td>Courier New</td>
      <td>monospace</td>
      <td>
        一部の OS は <em>Courier New</em> フォントの代替（おそらく古い）バージョンとして <em>Courier</em> と呼ばれるフォントを持っています。推奨される代替として、 <em>Courier New</em> を併用することを推奨します。
      </td>
    </tr>
    <tr>
      <td>Georgia</td>
      <td>serif</td>
      <td></td>
    </tr>
    <tr>
      <td>Times New Roman</td>
      <td>serif</td>
      <td>
        一部の OS は <em>Times New Roman</em> フォントの代替（おそらく古い）バージョンとして <em>Times</em> と呼ばれるフォントを持っています。推奨される代替として、 <em>Times New Roman</em> を併用することを推奨します。
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>sans-serif</td>
      <td>
        このフォントの使用には注意が必要です。モバイル OS では広く使用されていません。
      </td>
    </tr>
    <tr>
      <td>Verdana</td>
      <td>sans-serif</td>
      <td></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> さまざまなリソースの中で、[cssfontstack.com](https://www.cssfontstack.com/) ウェブサイトには、Windows および macOS オペレーティングシステムで利用可能なウェブセーフフォントのリストがあり、使用しても安全と見なせるものについて判断を下すことができます。

> [!NOTE]
> ウェブページとともにカスタムフォントをダウンロードして、フォントの使用方法を自由にカスタマイズできる方法があります。 それは、**ウェブフォント**（web fonts）です。 これはもう少し複雑で、このモジュールの後の[別な記事](/ja/docs/Learn_web_development/Core/Text_styling/Web_fonts)で説明します。

#### 既定のフォント

CSS はフォントに `serif`、`sans-serif`、`monospace`、`cursive`、`fantasy` の 5 つの総称名を定義しています。 これらは非常に一般的なものであり、それらの総称名を使用するときに使用される正確なフォントは各ブラウザー次第であり、それらが実行されているオペレーティングシステムごとに異なります。 これは、ブラウザーが最低限適切なフォントを提供するように最善を尽くそうとする場合の*最悪のシナリオ*を表します。 `serif`、`sans-serif`、`monospace` はかなり予測可能であり、妥当なものを提供するはずです。 その一方で、`cursive` や `fantasy` はそれほど予測できないので、慎重に使用してテストすることをお勧めします。

5 つの名前は次のように定義されています。

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">用語</th>
      <th scope="col">定義</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>serif</code></td>
      <td>
        セリフ（いくつかの書体でストロークの末尾に見られる隆起やその他の小さな細部）を持つフォントです。
      </td>
      <td id="serif-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: serif;
}</pre
        >
        {{EmbedLiveSample("serif-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>sans-serif</code></td>
      <td>セリフがないフォントです。</td>
      <td id="sans-serif-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: sans-serif;
}</pre
        >
        {{EmbedLiveSample("sans-serif-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>monospace</code></td>
      <td>
        すべての文字が同じ幅を持つフォントで、通常はコードのリストで使用されます。
      </td>
      <td id="monospace-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: monospace;
}</pre
        >
        {{EmbedLiveSample("monospace-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>cursive</code></td>
      <td>
        流れるような連続したストロークで、手書き文字を模倣することを目的としたフォントです。
      </td>
      <td id="cursive-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: cursive;
}</pre
        >
        {{EmbedLiveSample("cursive-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>fantasy</code></td>
      <td>装飾的なフォントです。</td>
      <td id="fantasy-example">
        <pre class="brush: html hidden">My big red elephant</pre>
        <pre class="brush: css hidden">
body {
  font-family: fantasy;
}</pre
        >
        {{EmbedLiveSample("fantasy-example", 100, 60)}}
      </td>
    </tr>
  </tbody>
</table>

#### フォントスタック

ウェブページで使用したいフォントの可用性を保証することはできないため（ウェブフォントでさえ何らかの理由で失敗する*可能性*もあります）、ブラウザーに複数のフォントから選択できるように**フォントスタック** (font stack) が指定できます。 これは単に、次のようにカンマで区切られた複数のフォント名からなる `font-family` の値です。

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

そのような場合、ブラウザーはリストの先頭から始めて、そのフォントがマシンで利用可能かどうかを確認します。 そうであれば、そのフォントを選択した要素に適用します。 そうでない場合は、次のフォントに移動します。

列挙されているフォントがどれも利用できない場合、ブラウザーが少なくともほぼ適切なものを提供できるように、スタックの最後に適切な総称フォント名を指定することをお勧めします。 この点を強調するために、他のオプションが利用できない場合、段落にはブラウザーの既定の serif フォントを使用します — これは通常は Times New Roman です — これは sans-serif フォントには不適切です！

> [!NOTE]
> `Trebuchet MS` のような空白を含むフォントファミリー名も、引用符で囲むことなく使用することができますが、エスケープの間違いを避けるために、空白、数字、ハイフン以外の句読点を含むフォントファミリー名は引用符で囲むことをお勧めします。

> [!WARNING]
> 一般的なファミリー名や CSS 全体のキーワードと誤解される可能性のあるフォントファミリー名は、引用符で囲む必要があります。フォントファミリー名は {{cssxref("custom-ident")}} または {{cssxref("string")}} として記述することができますが、 `initial` や `inherit` のような CSS 全体のプロパティ値と同じであるフォントファミリー名や、 `sans-serif` や `fantasy` のような CSS の一般的なフォントファミリー名と同じ名前があるフォントファミリー名は、引用符で囲んだ文字列として記述しなければなりません。そうでない場合、フォントファミリー名は同等の CSS キーワードまたは一般的なフォントファミリー名であると解釈されます。キーワードとして使用する場合、`serif`、`sans-serif`、`monospace`、`cursive`、`fantasy` といった一般的なフォントファミリー名とグローバル CSS キーワードは、引用符で囲んでは**いけません**。文字列は CSS キーワードとして解釈されないためです。

#### font-family の例

前の例に追加して、次のように段落に sans-serif フォントを付けます。

```css live-sample___2fonts live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
p {
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('2fonts', '100%', 220) }}

### フォントサイズ

前のモジュールの [CSS の値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)の記事で、[長さとサイズの単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#長さ)を確認しました。 フォントサイズ（{{cssxref("font-size")}} プロパティで設定）は、これらの単位のほとんど（および[パーセント](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages)などの他の単位）で測定された値を取ることができますが、テキストのサイズを設定するために使用する最も一般的な単位は次のとおりです。

- `px` (pixels): テキストを表示したい高さのピクセル数。 これは絶対的な単位です。それはほとんどどんな状況でもページ上のフォントの同じ最終的な計算値になります。
- `em`: 1 `em`は、現在スタイル設定している要素の親要素に設定されているフォント サイズ（具体的には、親要素の中に格納されている大文字の M の幅）に等しくなります。異なるフォントサイズを設定した入れ子要素がたくさんある場合、これは動作がトリッキーになる可能性がありますが、下記で説明するように実現可能です。面倒でしょうか？慣れてしまえばとても自然なことですし、 `em` を使用することで、テキストだけでなくすべてのもののサイズを設定することができます。ウェブサイト全体のサイズを `em` を使用して設定することができるので、メンテナンスが簡単になります。
- `rem`: これは `em` と同じように動作しますが、1 `rem` は親要素ではなく、文書のルート要素（つまり {{htmlelement("html") }}）に設定したフォントサイズに等しくなります。これにより、フォントサイズの計算がとても簡単になります。

要素の `font-size` は、その要素の親要素から継承されます。 これはすべてドキュメント全体のルート要素 — {{htmlelement("html")}} — で始まり、`font-size` はブラウザー間で標準で `16px` に設定されています。 ルート要素内の段落（またはブラウザーによって設定された異なるサイズを持たない他の要素）は、最終サイズが `16px` になります。 他の要素は既定のサイズが異なる場合があります。 例えば、 {{htmlelement("Heading_Elements", "h1")}} 要素のサイズは既定で `2em` に設定されているため、最終的なサイズは `32px` になります。

入れ子になった要素のフォントサイズを変更し始めると、物事はより複雑になります。 例えば、ページに {{htmlelement("article")}} 要素があり、その `font-size` を `1.5em`（これは計算すると `24px` の最終的なサイズになります）に設定し、次に `<article>` 要素内の段落に `20px` で計算したフォントサイズを使用するようにしたい場合に、あなたは何 `em` の値を使用しますか？

```html
<!-- 文書のベースフォントサイズは 16px です -->
<article>
  <!-- ここのフォントサイズが 1.5em の場合 -->
  <p>My paragraph</p>
  <!-- 20px のフォントサイズにするにはどう計算しますか？ -->
</article>
```

その `em` 値を 20 / 24 、つまり 0.83333333 `em` に設定する必要があります。この計算は複雑なので、スタイル設定には注意が必要です。可能であれば、 `rem` を使用することで、物事を単純にすることができ、コンテナー要素の `font-size` を設定することは避けることができます。

### フォントスタイル、フォントの太さ、テキスト変換、テキスト装飾

CSS は、テキストの視覚的な太さや強調を変更するために次の 4 つの共通のプロパティを提供します。

- {{cssxref("font-style")}}: イタリック体テキストのオンとオフを切り替えるために使用されます。 可能な値は次のとおりです（何らかの理由でイタリック装飾をオフにしたい場合を除いて、これを使用することはめったにありません）。
  - `normal`: テキストを通常のフォントに設定します（既存のイタリック体をオフにします）。
  - `italic`: 利用できる場合は、*イタリック体版のフォント*を使用するようにテキストを設定します。 利用できない場合は、代わりに `oblique` でイタリック体をシミュレートします。
  - `oblique`: 通常版を斜めにして作成された、イタリック体フォントのシミュレート版を使用するようにテキストを設定します。

- {{cssxref("font-weight")}}: テキストの太さを設定します。 利用可能なフォントのバリエーションが多数ある場合（_-light_、_-normal_、_-bold_、_-extrabold_、_-black_ など）、これには多くの値がありますが、現実的には `normal` と `bold` 以外のものを使用することはほとんどありません。
  - `normal`, `bold`: 標準および**太字**のフォントの太さ。
  - `lighter`, `bolder`: 現在の要素の太さを、親要素の太さよりも 1 段階細くまたは太くします。
  - `100` ～ `900`: 必要に応じて、上記のキーワードよりもきめ細かい制御を提供する太さの数値。

- {{cssxref("text-transform")}}: フォントを変換するように設定できます。 値は次のとおりです。
  - `none`: 変換を禁止します。
  - `uppercase`: すべてのテキストを大文字に変換します。
  - `lowercase`: すべてのテキストを小文字に変換します。
  - `capitalize`: すべての単語を最初の文字が大文字になるように変換します。
  - `full-width`: すべてのグリフを等幅フォントに似た固定された正方形の中に書くように変換します。例えば、ラテン文字とアジア言語 (中国語、日本語、韓国語など) の字体に配置できるようにします。（訳注: 全角文字に変換します。）

- {{cssxref("text-decoration")}}: フォントのテキスト装飾を設定/設定解除します（主にリンクの既定の下線を解除するために使用します）。 使用可能な値は次のとおりです。
  - `none`: 既に存在するテキスト装飾をすべて解除します。
  - `underline`: テキストに下線を引きます。
  - `overline`: テキストに上線を付けます。
  - `line-through`: テキストの上に取り消し線を引きます。

  {{cssxref("text-decoration")}} は、複数の装飾を同時に追加したい場合、例えば `text-decoration: underline overline` のように、一度に複数の値を受け入れることができることに注意してください。また、 {{cssxref("text-decoration")}} は {{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-style")}}、{{cssxref("text-decoration-color")}} の一括指定プロパティであることにも注意してください。例えば `text-decoration: line-through red wavy` のように、これらのプロパティ値の組み合わせを使用して、興味深い効果を生み出すことができます。

例にこれらのプロパティをいくつか追加してみましょう。

```css live-sample___3font-style live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: "Helvetica", "Arial", sans-serif;
}
```

新しい結果はこんな感じです。

{{ EmbedLiveSample('3font-style', '100%', 260) }}

### テキストのドロップシャドウ

{{cssxref("text-shadow")}} プロパティを使ってテキストにドロップシャドウを付けることができます。 次の例に示すように、これは最大 4 つの値を取ります。

```css
text-shadow: 4px 4px 5px red;
```

4 つのプロパティは次のとおりです。

1. 元のテキストからの影の水平方向のオフセット。これは、ほとんどの CSS の[長さとサイズの単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#長さ)を取ることができますが、最も一般的には `px` を使用します。この値は含める必要があります。
2. 元のテキストからの影の垂直方向のオフセット。基本的に水平方向のオフセットと同じようにふるまいますが、影を左右ではなく上下に移動する点が異なります。 この値は含める必要があります。
3. ぼかし半径。値が大きいほど、影はより広く拡散されます。 この値が含まれていない場合、既定値は 0 になり、ぼかしは行われません。 これは、ほとんどの CSS の[長さとサイズの単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#長さ)を取ることができます。
4. 影のベースカラー — 任意の [CSS カラー単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#colors) を取ります。含まれていない場合、既定値は [`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード) であり、影の色は要素の [`color`](/ja/docs/Web/CSS/Reference/Properties/color) プロパティから導かれます。

#### 複数の影

複数の影の値をカンマで区切って記述することで、次のように同じテキストに複数の影を付けることができます。

```css live-sample___4shadows live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

これを Tommy The Cat の例の {{htmlelement("Heading_Elements", "&lt;h1>")}} 要素に適用すると、結果は次のようになります。

{{ EmbedLiveSample('4shadows', '100%', 260) }}

> [!NOTE]
> Sitepoint の記事 [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/) で、`text-shadow` の使い方のより興味深い例を見ることができます。

## テキストのレイアウト

基本的なフォントのプロパティ以外の方法で、テキストのレイアウトに影響を与えるために使用できるプロパティを見てみましょう。

### テキストの配置

{{cssxref("text-align")}} プロパティは、テキストを含むコンテンツボックス内でのテキストの配置方法を制御するために使用されます。 利用可能な値は次の通りで、通常のワードプロセッサーアプリケーションとほとんど同じように機能します。

- `left`: テキストを左揃えにします。
- `right`: テキストを右揃えにします。
- `center`: テキストを中央揃えにします。
- `justify`: テキストを両端揃えにします。 すべてのテキストのラインが同じ幅になるように、単語の間隔を変えてテキストを広げます。 これは慎重に使用する必要があります — 特に、長い単語が多数含まれている段落に適用すると、ひどく見えます。 もしこれを使うつもりなら、{{cssxref("hyphens")}} のような他の何かを使用して、複数ラインにまたがる長い単語を分割することも考えてください。

例の {{htmlelement("Heading_Elements", "&lt;h1>")}} に、`text-align: center;` を適用した場合、次のようになるでしょう。

```css hidden live-sample___5text-align live-sample___6line-height live-sample___7letter-word-spacing
h1 {
  text-align: center;
}
```

{{ EmbedLiveSample('5text-align', '100%', 260) }}

### 行の高さ

{{cssxref("line-height")}} プロパティはテキストの各行の高さを設定します。これはほとんどの[長さとサイズの単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#長さ)をとることができますが、乗数として機能し、一般的に最良の選択肢と考えられる単位なしの値をとることもできます。 {{cssxref("font-size")}} が乗算されて `line-height` が得られます。 本文は行が離れていると、一般的に見栄えがよく、読みやすくなります。 推奨される行の高さは約 1.5 〜 2 （倍の高さ）です。テキストの行をフォントの高さの 1.6 倍に設定するには、次のようにします。

```css live-sample___6line-height live-sample___7letter-word-spacing
p {
  line-height: 1.6;
}
```

この例の {{htmlelement("p")}} 要素にこれを適用すると、次のようになります。

{{ EmbedLiveSample('6line-height', '100%', 300) }}

### 文字と単語の間隔設定

{{cssxref("letter-spacing")}} プロパティと {{cssxref("word-spacing")}} プロパティを使用すると、テキスト内の文字と単語の間隔を設定できます。 これらはあまり使用しませんが、ある外観を得るためや、特に濃いフォントの読みやすさを向上させるために使用することがあります。 それらはほとんどの[長さとサイズの単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units#長さ)を取ることができます。

例として、この例の {{htmlelement("p")}} 要素の最初の行に次を適用したとします。

```css live-sample___7letter-word-spacing
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

HTML は次のようにレンダリングされます。

{{ EmbedLiveSample('7letter-word-spacing', '100%', 330) }}

### その他の検討に値するプロパティ

上記のプロパティは、ウェブページ上でテキストを装飾する方法のアイデアを与えますが、使うことができるもっと多くのプロパティがあります。 ここでは最も重要なものだけを取り上げたいと思います。 上記の使い方に慣れてきたら、次のことも調べてください。

フォントスタイルです。

- {{cssxref("font-variant")}}: スモールキャップと通常の代替フォントを切り替えます。
- {{cssxref("font-kerning")}}: フォントのカーニングオプションのオンとオフを切り替えます。
- {{cssxref("font-feature-settings")}}: さまざまな [OpenType](https://en.wikipedia.org/wiki/OpenType) フォント機能のオンとオフを切り替えます。
- {{cssxref("font-variant-alternates")}}: 与えられたフォントフェイスのための代替グリフの使用を制御します。
- {{cssxref("font-variant-caps")}}: 代替大文字グリフの使用を制御します。
- {{cssxref("font-variant-east-asian")}}: 日本語や中国語など、東アジアの文字の代替グリフの使用方法を制御します。
- {{cssxref("font-variant-ligatures")}}:テキストで使用される合字と文脈形式を制御します。
- {{cssxref("font-variant-numeric")}}: 数字、分数、および序数記号の代替グリフの使用方法を制御します。
- {{cssxref("font-variant-position")}}: 上付き文字または下付き文字として配置された、小さいサイズの代替グリフの使用方法を制御します。
- {{cssxref("font-size-adjust")}}: 実際のフォントサイズとは無関係にフォントの表示サイズを調整します。
- {{cssxref("font-stretch")}}: 与えられたフォントの可能な代替の伸縮バージョン間で切り替えます。
- {{cssxref("text-underline-position")}}: `text-decoration-line` プロパティの `underline` 値を使用して設定された下線の位置を指定します。
- {{cssxref("text-rendering")}}: テキストレンダリングの最適化を試します。

テキストのレイアウトスタイルです。

- {{cssxref("text-indent")}}: テキスト内容の最初のラインの始まりの前にどれだけの水平スペースを残すべきかを指定します。
- {{cssxref("text-overflow")}}: 表示されないオーバーフローしたコンテンツがユーザーに通知される方法を定義します。
- {{cssxref("white-space")}}: 要素内の空白とそれに関連する改行の扱い方を定義します。
- {{cssxref("word-break")}}: 単語内で改行するかどうかを指定します。
- {{cssxref("direction")}}: テキストの方向を定義します（これは言語に依存します。 通常、テキストの内容に結び付けられているので、HTML にその部分を処理させる方が良いです）。
- {{cssxref("hyphens")}}: サポートしている言語のハイフネーションをオンまたはオフにします。
- {{cssxref("line-break")}}: アジア言語の改行を緩和または強化します。
- {{cssxref("text-align-last")}}: ブロックの最後のラインまたは強制改行の直前のラインの配置方法を定義します。
- {{cssxref("text-orientation")}}: ライン内での文字の向きを定義します。
- {{cssxref("overflow-wrap")}}: オーバーフローを防ぐために、ブラウザーが単語内で改行できるかどうかを指定します。
- {{cssxref("writing-mode")}}: テキストのラインを水平に配置するか垂直に配置するか、およびそれに続いてラインが流れる方向を定義します。

## フォントの一括指定

多くのフォントプロパティは、一括指定プロパティの {{cssxref("font")}} を介して設定することもできます。 これらは、{{cssxref("font-style")}}、{{cssxref("font-variant")}}、{{cssxref("font-weight")}}、{{cssxref("font-stretch")}}、{{cssxref("font-size")}}、{{cssxref("line-height")}}、{{cssxref("font-family")}} の順に書きます。

これらすべてのプロパティのうち、`font` 一括指定プロパティを使用する場合に必要なのは、`font-size` と `font-family` のみです。

{{cssxref("font-size")}} プロパティと {{cssxref("line-height")}} プロパティの間にスラッシュを入れる必要があります。

完全な例は次のようになります。

```css
font:
  italic normal bold normal 3em/1.5 "Helvetica",
  "Arial",
  sans-serif;
```

## テキストの装飾で遊ぶ

では、あなたの番です。この課題では、特定の演習は用意していません。フォントやテキストレイアウトのプロパティを自由に試してみてください。どんな結果が生まれるか、ぜひ自分で確かめてみましょう！

1. 下記のコードブロックの **"Play"** をクリックし、この例を MDN Playground で編集します。
2. 提供された空の `p { }` ルールに宣言を追加し、指定されたテキストのスタイルを変更してください。自由に創造性を発揮してください。

誤った操作をした場合は、MDN Playground の _Reset_ ボタンで作業内容をクリアできます。設定可能なフォントやテキストスタイルの詳細については、本記事の前の節を参考にしてください。

```html live-sample___fonts_text
<p>お楽しみのためのサンプルテキスト</p>
```

```css-nolint live-sample___fonts_text
p {

}
```

{{ EmbedLiveSample('fonts_text', "100%", 60) }}

## まとめ

この記事のテキストで遊んで楽しんでください。次の記事では、HTML リストのスタイル設定について知っておくべきことをすべて説明します。

## 関連情報

- [All about the CSS font-family property](https://explainers.dev/font-family/), explainers.dev
- [Web-safe fonts](https://scrimba.com/the-frontend-developer-career-path-c0j/~02b?via=mdn), Scrimba <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>

{{NextMenu("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling")}}
