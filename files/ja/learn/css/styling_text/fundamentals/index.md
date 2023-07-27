---
title: 基本的なテキストとフォントの装飾
slug: Learn/CSS/Styling_text/Fundamentals
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}

この記事では、{{glossary("CSS")}} によるテキストの装飾の習得に向けて旅を始めましょう。 ここでは、フォントの太さ、ファミリーそしてスタイルの設定、フォントの一括指定、テキストの配置とその他のエフェクト、ラインと文字の間隔などを含んだ、テキストやフォントの装飾の基本について詳しく説明します。

| 前提知識: | 基本的なコンピューターリテラシー、HTML の基本（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、CSS の基本（[CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)を学ぶ）。 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | ウェブページのテキストを装飾するために必要な基本的なプロパティとテクニックを学ぶこと。                                                                                                 |

## CSS においてテキストの装飾には何が関係していますか？

HTML と CSS を使った作業ですでに経験したように、要素内のテキストは要素のコンテンツボックス内にレイアウトされます。 コンテンツ領域の左上（RTL 言語のコンテンツの場合は右上）から始まり、ラインの終りに向かって流れます。 終りに達すると、次のラインに進み、続けてすべてのコンテンツがボックスに配置されるまで次のラインに進みます。 テキストコンテンツは事実上一連のインライン要素のようにふるまい、互いに隣接するラインに配置され、ラインの終りに達するまで、または、{{htmlelement("br")}} 要素を使用して手動で改行を強制しない限り改行を作成しません。

> **メモ:** 上の段落で混乱していると感じても問題ありません — 先に進む前に、ボックスモデル理論を磨くために、[ボックスモデル](/ja/docs/Learn/CSS/Introduction_to_CSS/Box_model)の記事に戻って見直してください。

テキストを装飾するために使用される CSS プロパティは、一般的に次の 2 つのカテゴリに分類されます。 この記事では、これらのプロパティを個別に説明します。

- **フォントスタイル**: テキストに適用されるフォントに影響するプロパティで、適用するフォント、大きさ、太字、斜体などに影響します。
- **テキストのレイアウトスタイル**: テキストの間隔やその他のレイアウト機能に影響するプロパティで、例えば、行間や文字間のスペースや、コンテンツボックス内でのテキストの配置方法などを操作できます。

> **メモ:** 要素内のテキストはすべて単一の実体として影響を受けることに注意してください。 テキストの一部分を（{{htmlelement("span")}} や {{htmlelement("strong")}} など）適切な要素でラップしたり、{{cssxref("::first-letter")}}（要素のテキストの最初の文字を選択）、{{cssxref("::first-line")}}（要素のテキストの最初の行を選択）、{{cssxref("::selection")}}（現在カーソルで強調表示されているテキストを選択）のようなテキスト固有の疑似要素を使用しない限り、テキストの一部分を選択して装飾することはできません。

## フォント

フォントを装飾するためのプロパティを見るためにまっすぐに進みましょう。 この例では、次のような同じ HTML サンプルにいくつかの異なる CSS プロパティを適用します。

```html
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

[完成した例](http://mdn.github.io/learning-area/css/styling-text/fundamentals/)は Github にあります（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/styling-text/fundamentals/index.html)も参照してください）。

### 色

{{cssxref("color")}} プロパティは、選択された要素の前景のコンテンツの色を設定します（通常はテキストですが、{{cssxref("text-decoration")}} プロパティを使用してテキストに下線や上線を配置するなど、他のいくつかの要素を含めることもできます）。

`color` は次のように任意の [CSS カラー単位](/ja/Learn/CSS/Introduction_to_CSS/Values_and_units#Colors)を受け入れることができます。

```css
p {
  color: red;
}
```

これにより、次のように段落は標準のブラウザーのデフォルトの黒ではなく赤になります。

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

{{ EmbedLiveSample('Color', '100%', 220) }}

### フォントファミリー

テキストに別のフォントを設定するには、{{cssxref("font-family")}} プロパティを使用します — これにより、選択した要素に適用するブラウザーのフォント（またはフォントのリスト）を指定できます。 ウェブサイトにアクセスしているマシンで利用可能な場合にのみ、ブラウザーはフォントを適用します。 そうでない場合は、ブラウザーの[デフォルトフォント](#default_fonts)を使用するだけです。 簡単な例はこんな感じです。

```css
p {
  font-family: arial;
}
```

これにより、ページ上のすべての段落に、どのコンピュータでも見られる arial フォントが採用されます。

#### ウェブセーフフォント

フォントの入手可能性と言えば、すべてのシステムで一般的に利用でき、したがってそれほど心配することなく使用できるフォントの数は限られています。これらはいわゆる**ウェブセーフフォント** (web safe fonts) です。

ほとんどの場合、ウェブ開発者は、テキストコンテンツの表示に使用されるフォントをより具体的に制御したいと考えています。 問題は、ウェブページを見るために使用されているコンピュータでどのフォントが利用可能かを知る方法を見つけることです。 あらゆる場合にこれを知る方法はありませんが、ウェブセーフフォントは最も使用されているオペレーティングシステム（Windows、Mac、最も一般的な Linux ディストリビューション、Android、および iOS）のほぼすべての実例で使用可能です。

実際のウェブセーフフォントのリストは、オペレーティングシステムが進化するにつれて変わりますが、少なくとも現時点では次のフォントをウェブセーフと見なすことをお勧めします（それらの多くは 90 年代後半から 2000 年代初頭にかけての Microsoft の [Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web) の先鞭のおかげで普及しました）。

| 名前            | 総称タイプ | 注                                                                                                                                                                                                                                            |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arial           | sans-serif | _Arial_ に好ましい代替として _Helvetica_ を追加するのがベストプラクティスと考えられることがよくあります。 それらのフォントフェースはほぼ同じですが、_Arial_ の方が広く入手可能であっても _Helvetica_ はより良い形状をしていると考えられます。 |
| Courier New     | monospace  | いくつかの OS は _Courier_ と呼ばれる _Courier New_ フォントの代替（おそらく古い）バージョンを持っています。 _Courier New_ と一緒に両方を使用することを推奨します。                                                                           |
| Georgia         | serif      |                                                                                                                                                                                                                                               |
| Times New Roman | serif      | いくつかの OS は _Times_ と呼ばれる _Times New Roman_ フォントの代替（おそらく古い）バージョンを持っています。 _Times New Roman_ と一緒に両方を使用することを推奨します。                                                                     |
| Trebuchet MS    | sans-serif | このフォントの使用には注意が必要です — モバイル OS では広く使用されていません。                                                                                                                                                               |
| Verdana         | sans-serif |                                                                                                                                                                                                                                               |

> **メモ:** さまざまなリソースの中で、[cssfontstack.com](http://www.cssfontstack.com/) ウェブサイトには、Windows および macOS オペレーティングシステムで利用可能なウェブセーフフォントのリストがあり、使用しても安全と見なせるものについて判断を下すことができます。

> **メモ:** ウェブページとともにカスタムフォントをダウンロードして、フォントの使用方法を自由にカスタマイズできる方法があります。 それは、**ウェブフォント**（web fonts）です。 これはもう少し複雑で、このモジュールの後の別の記事でこれを議論するでしょう。

#### デフォルトフォント

CSS はフォントの 5 つの総称名を定義しています: セリフ（`serif`）、サンセリフ（`sans-serif`）、等幅（`monospace`）、筆記体（`cursive`）、ファンタジー（`fantasy`）。 これらは非常に一般的なものであり、それらの総称名を使用するときに使用される正確なフォントは各ブラウザー次第であり、それらが実行されているオペレーティングシステムごとに異なります。 これは、ブラウザーが最低限適切なフォントを提供するように最善を尽くそうとする場合の*最悪のシナリオ*を表します。 `serif`、`sans-serif`、および `monospace` はかなり予測可能であり、妥当なものを提供するはずです。 その一方で、`cursive` や `fantasy` はそれほど予測できないので、慎重に使用してテストすることをお勧めします。

5 つの名前は次のように定義されています。

| 用語         | 定義                                                                                         | 例                  |
| ------------ | -------------------------------------------------------------------------------------------- | ------------------- |
| `serif`      | セリフ（いくつかの書体のストロークの終わりに見られる隆起やその他の細部）を持つフォントです。 | My big red elephant |
| `sans-serif` | セリフがないフォントです。                                                                   | My big red elephant |
| `monospace`  | すべての文字が同じ幅を持つフォントで、通常はコードリストで使用されます。                     | My big red elephant |
| `cursive`    | 流れるような連続したストロークで、手書き文字を模倣することを目的としたフォントです。         | My big red elephant |
| `fantasy`    | 装飾的なフォントです。                                                                       | My big red elephant |

#### フォントスタック

ウェブページで使用したいフォントの可用性を保証することはできないため（ウェブフォントでさえ何らかの理由で失敗する*可能性*もあります）、ブラウザーに複数のフォントから選択できるように**フォントスタック**（font stack）を指定できます。 これは単に、次のようにカンマで区切られた複数のフォント名からなる `font-family` の値です。

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

そのような場合、ブラウザーはリストの先頭から始めて、そのフォントがマシンで利用可能かどうかを確認します。 そうであれば、そのフォントを選択した要素に適用します。 そうでない場合は、次のフォントに移動します。

リストされているフォントがどれも利用できない場合、ブラウザーが少なくともほぼ適切なものを提供できるように、スタックの最後に適切な総称フォント名を指定することをお勧めします。 この点を強調するために、他のオプションが利用できない場合、段落にはブラウザーのデフォルトの serif フォントを使用します — これは通常は Times New Roman です — これは sans-serif フォントには不適切です！

> **メモ:** `Trebuchet MS` のように、複数の単語を含むフォント名は `"Trebuchet MS"` のように引用符で囲む必要があります。

#### font-family の例

前の例に追加して、次のように段落に sans-serif フォントを付けます。

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

これにより、次のような結果が得られます。

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

{{ EmbedLiveSample('A_font-family_example', '100%', 220) }}

### フォントサイズ

前のモジュールの [CSS の値と単位](/ja/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)の記事で、[長さとサイズの単位](/ja/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size)を確認しました。 フォントサイズ（{{cssxref("font-size")}} プロパティで設定）は、これらの単位のほとんど（および[パーセント](/ja/Learn/CSS/Introduction_to_CSS/Values_and_units#Percentages)などの他の単位）で測定された値を取ることができますが、テキストのサイズを設定するために使用する最も一般的な単位は次のとおりです。

- `px` (pixels): テキストを表示したい高さのピクセル数。 これは絶対的な単位です — それはほとんどどんな状況でもページ上のフォントの同じ最終的な計算値になります。
- `em`: `1em` は、現在装飾している要素の親要素に設定されているフォントサイズ（より具体的には、親要素の内側に含まれる大文字の M の幅）に等しくなります。 フォントサイズの異なるネストされた要素が多数設定されている場合には厄介な作業になるかもしれませんが、以下に示すように、それは実行可能です。 なぜわざわざそうする？ 慣れると非常に自然になり、テキストだけでなく、`em` を使用してすべてのサイズを変更できます。 ウェブサイト全体を `em` を使用してサイズ設定することができ、これにより、メンテナンスが簡単になります。
- `rem`: これらは `em` とまったく同じように機能しますが、`1rem` が親要素ではなく文書のルート要素に設定されたフォントサイズ（つまり {{htmlelement("html")}}）に等しい点が異なります。 これにより、フォントサイズを簡単に計算することができますが、残念ながら Internet Explorer 8 以下では `rem` はサポートされていません。 プロジェクトで古いブラウザーをサポートする必要がある場合は、`em` や `px` を使用するか、[REM-unit-polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill) などの{{glossary("polyfill","ポリフィル")}}を使用することができます。

要素の `font-size` は、その要素の親要素から継承されます。 これはすべてドキュメント全体のルート要素 — {{htmlelement("html")}} — で始まり、`font-size` はブラウザー間で標準で `16px` に設定されています。 ルート要素内の段落（またはブラウザーによって設定された異なるサイズを持たない他の要素）は、最終サイズが `16px` になります。 他の要素はデフォルトサイズが異なる場合があります。 例えば、{{htmlelement("h1")}} 要素のサイズはデフォルトで `2em` に設定されているため、最終的なサイズは `32px` になります。

入れ子になった要素のフォントサイズを変更し始めると、物事はより複雑になります。 例えば、ページに {{htmlelement("article")}} 要素があり、その `font-size` を `1.5em`（これは計算すると `24px` の最終的なサイズになります）に設定し、次に `<article>` 要素内の段落に `20px` で計算したフォントサイズを使用するようにしたい場合に、あなたは何 `em` の値を使用しますか？

```html
<!-- ドキュメントのベースフォントサイズは 16px です -->
<article>
  <!-- ここのフォントサイズが 1.5em の場合 -->
  <p>My paragraph</p>
  <!-- 20px のフォントサイズにするにはどう計算しますか？ -->
</article>
```

その `em` 値を 20 / 24 、つまり `0.83333333em` に設定する必要があります。 数学は複雑になる可能性があるため、装飾方法には注意が必要です。 可能な限り `rem` を使用して、物事を単純にし、可能な限りコンテナ要素のフォントサイズを設定しないようにするのが最善です。

#### 簡単なサイズ設定の例

テキストのサイズを変更するときは、通常、ドキュメントのベース `font-size` を `10px` に設定することをお勧めします。 そうすれば、数学の計算がはるかに簡単になります — その場合、必要な `(r)em` 値は、16 ではなく、10 で割ったピクセルフォントサイズです。 これで、ドキュメント内のさまざまな種類のテキストのサイズを簡単に変更できます。 スタイルシートの指定された領域にすべての `font-size` の規則セットをリストすることをお勧めします。 そうすれば、それらは簡単に見つけられます。

新しい結果はこんな感じです。

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('A_simple_sizing_example', '100%', 220) }}

### フォントスタイル、フォントの太さ、テキスト変換、テキスト飾り

CSS は、テキストの視覚的な太さや強調を変更するために次の 4 つの共通のプロパティを提供します。

- {{cssxref("font-style")}}: イタリック体テキストのオンとオフを切り替えるために使用されます。 可能な値は次のとおりです（何らかの理由でイタリック装飾をオフにしたい場合を除いて、これを使用することはめったにありません）。

  - `normal`: テキストを通常のフォントに設定します（既存のイタリック体をオフにします）。
  - `italic`: 利用できる場合は、*イタリック体版のフォント*を使用するようにテキストを設定します。 利用できない場合は、代わりに `oblique` でイタリック体をシミュレートします。
  - `oblique`: 通常版を斜めにして作成された、イタリック体フォントのシミュレート版を使用するようにテキストを設定します。

- {{cssxref("font-weight")}}: テキストの太さを設定します。 利用可能なフォントのバリエーションが多数ある場合（_-light_、_-normal_、_-bold_、_-extrabold_、_-black_ など）、これには多くの値がありますが、現実的には `normal` と `bold` 以外のものを使用することはほとんどありません。

  - `normal`, `bold`: 標準および**太字**のフォントの太さ。
  - `lighter`, `bolder`: 現在の要素の太さを、親要素の太さよりも 1 段階細くまたは太くします。
  - `100`～`900`: 必要に応じて、上記のキーワードよりもきめ細かい制御を提供する太さの数値。

- {{cssxref("text-transform")}}: フォントを変換するように設定できます。 値は次のとおりです。

  - `none`: 変換を禁止します。
  - `uppercase`: すべてのテキストを大文字（all text to capitals）に変換します。
  - `lowercase`: すべてのテキストを小文字（ALL TEXT TO LOWER CASE）に変換します。
  - `capitalize`: すべての単語を最初の文字を大文字にする（have the first letter capitalized）ように変換します。
  - `full-width`: 例えば、ラテン文字を（中国語、日本語、韓国語など）アジア言語のグリフと一緒に揃えて、等幅フォントのように、固定幅の四角形の中にすべてのグリフを書く（written inside a fixed-width square）ように変換します。

- {{cssxref("text-decoration")}}: フォントのテキスト飾りを設定/設定解除します（主にリンクのデフォルトの下線を解除するために使用します）。 使用可能な値は次のとおりです。

  - `none`: 既に存在するテキスト飾りをすべて解除します。
  - `underline`: **テキストに下線を引きます**。
  - `overline`: テキストに上線を付けます。
  - `line-through`: ~~テキストの上に取り消し線を引きます~~。

  複数の飾りを同時に追加したい場合は、`text-decoration: underline overline` のように、{{cssxref("text-decoration")}} は一度に複数の値を受け入れることができます。 また、{{cssxref("text-decoration")}} は、{{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-style")}}、および {{cssxref("text-decoration-color")}} の一括指定プロパティです。 例えば、`text-decoration: line-through red wavy` のように、これらのプロパティ値の組み合わせを使用して、興味深い効果を生み出すことができます。

例にこれらのプロパティをいくつか追加してみましょう。

新しい結果はこんな感じです。

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Font_style_font_weight_text_transform_and_text_decoration', '100%', 220) }}

### テキストのドロップシャドウ

{{cssxref("text-shadow")}} プロパティを使ってテキストにドロップシャドウを付けることができます。 次の例に示すように、これは最大 4 つの値を取ります。

```css
text-shadow: 4px 4px 5px red;
```

4 つのプロパティは次のとおりです。

1. 元のテキストからの影の水平方向のオフセット — これは、ほとんどの CSS の[長さとサイズの単位](/ja/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size)を取ることができますが、最も一般的には `px` を使用します。 この値を含める必要があります。
2. 元のテキストからの影の垂直方向のオフセット — 基本的に水平方向のオフセットと同じようにふるまいますが、影を左右に移動するのではなく上下に移動する点が異なります。 この値を含める必要があります。
3. ぼかし半径 — 値が大きいほど、影はより広く分散されます。 この値が含まれていない場合、デフォルトは 0 になり、ぼかしは行われません。 これは、ほとんどの CSS の[長さとサイズの単位](/ja/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size)を取ることができます。
4. 影のベースカラー — 任意の [CSS カラー単位](/ja/Learn/CSS/Introduction_to_CSS/Values_and_units#Colors)を取ります。 含まれていない場合、デフォルトは `black` です。

> **メモ:** 正のオフセット値は影を右下に移動させますが、`-1px -1px` のように負のオフセット値を使用して影を左上に移動させることもできます。

#### 複数の影

複数の影の値をコンマで区切って含めることで、次のように同じテキストに複数の影を付けることができます。

```css
text-shadow:
  -1px -1px 1px #aaa,
  0px 4px 1px rgba(0, 0, 0, 0.5),
  4px 4px 5px rgba(0, 0, 0, 0.7),
  0px 0px 7px rgba(0, 0, 0, 0.4);
```

これを Tommy the cat の例の {{htmlelement("h1")}} 要素に適用すると、結果は次のようになります。

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 26px;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 14px;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Multiple_shadows', '100%', 220) }}

> **メモ:** Sitepoint の記事 [Moonlighting with CSS text-shadow](http://www.sitepoint.com/moonlighting-css-text-shadow/) で、`text-shadow` の使い方のより興味深い例を見ることができます。

## テキストのレイアウト

基本的なフォントのプロパティ以外の方法で、テキストのレイアウトに影響を与えるために使用できるプロパティを見てみましょう。

### テキストの配置

{{cssxref("text-align")}} プロパティは、テキストを含むコンテンツボックス内でのテキストの配置方法を制御するために使用されます。 利用可能な値は次の通りで、通常のワードプロセッサアプリケーションとほとんど同じように機能します。

- `left`: テキストを左揃えにします。
- `right`: テキストを右揃えにします。
- `center`: テキストを中央揃えにします。
- `justify`: テキストを両端揃えにします。 すべてのテキストのラインが同じ幅になるように、単語の間隔を変えてテキストを広げます。 これは慎重に使用する必要があります — 特に、長い単語が多数含まれている段落に適用すると、ひどく見えます。 もしこれを使うつもりなら、{{cssxref("hyphens")}} のような他の何かを使用して、複数ラインにまたがる長い単語を分割することも考えてください。

例の {{htmlelement("h1")}} に、`text-align: center;` を適用した場合、次のようになるでしょう。

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Text_alignment', '100%', 220) }}

### ラインの高さ

{{cssxref("line-height")}} プロパティはテキストの各ラインの高さを設定します — これはほとんどの[長さとサイズの単位](/ja/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size)をとることができますが、乗数として機能し、一般的に最良の選択肢と考えられる単位なしの値をとることもできます — `line-height` を得るために {{cssxref("font-size")}} が乗算されます。 本文はラインが離れていると、一般的に見栄えがよく、読みやすくなります。 推奨されるラインの高さは約 1.5 〜 2（ダブルスペース）です。 したがって、テキストのラインをフォントの高さの 1.5 倍に設定するには、次のようにします。

```css
line-height: 1.5;
```

この例の {{htmlelement("p")}} 要素にこれを適用すると、次のようになります。

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
}
```

{{ EmbedLiveSample('Line_height', '100%', 250) }}

### 文字と単語の間隔設定

{{cssxref("letter-spacing")}} プロパティと {{cssxref("word-spacing")}} プロパティを使用すると、テキスト内の文字と単語の間隔を設定できます。 これらはあまり使用しませんが、ある外観を得るためや、特に濃いフォントの読みやすさを向上させるために使用することがあります。 それらはほとんどの[長さとサイズの単位](/ja/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size)を取ることができます。

例として、この例の {{htmlelement("p")}} 要素の最初のラインに次を適用したとします。

```css
p::first-line {
  letter-spacing: 2px;
  word-spacing: 4px;
}
```

次のようになります。

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p::first-line {
  letter-spacing: 2px;
  word-spacing: 4px;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
}
```

{{ EmbedLiveSample('Letter_and_word_spacing', '100%', 250) }}

### その他の検討に値するプロパティ

上記のプロパティは、ウェブページ上でテキストを装飾する方法のアイデアを与えますが、使うことができるもっと多くのプロパティがあります。 ここでは最も重要なものだけを取り上げたいと思います。 上記の使い方に慣れてきたら、次のことも調べてください。

フォントスタイル

- {{cssxref("font-variant")}}: スモールキャップと通常の代替フォントを切り替えます。
- {{cssxref("font-kerning")}}: フォントのカーニングオプションのオンとオフを切り替えます。
- {{cssxref("font-feature-settings")}}: さまざまな [OpenType](https://en.wikipedia.org/wiki/OpenType) フォント機能のオンとオフを切り替えます。
- {{cssxref("font-variant-alternates")}}: 与えられたフォントフェースのための代替グリフの使用を制御します。
- {{cssxref("font-variant-caps")}}: 代替大文字グリフの使用を制御します。
- {{cssxref("font-variant-east-asian")}}: 日本語や中国語など、東アジアの文字の代替グリフの使用方法を制御します。
- {{cssxref("font-variant-ligatures")}}:テキストで使用される合字と文脈形式を制御します。
- {{cssxref("font-variant-numeric")}}: 数字、分数、および序数記号の代替グリフの使用方法を制御します。
- {{cssxref("font-variant-position")}}: 上付き文字または下付き文字として配置された、小さいサイズの代替グリフの使用方法を制御します。
- {{cssxref("font-size-adjust")}}: 実際のフォントサイズとは無関係にフォントの表示サイズを調整します。
- {{cssxref("font-stretch")}}: 与えられたフォントの可能な代替の伸縮バージョン間で切り替えます。
- {{cssxref("text-underline-position")}}: `text-decoration-line` プロパティの `underline` 値を使用して設定された下線の位置を指定します。
- {{cssxref("text-rendering")}}: テキストレンダリングの最適化を試します。

テキストのレイアウトスタイル

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
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## 能動的学習: テキストの装飾で遊ぶ

この能動的学習セッションでは、具体的な演習はありません。 フォントやテキストのレイアウトのプロパティをいくつか試してみて、作成できるものを確認してください！ オフラインの HTML / CSS ファイルを使用してこれを行うか、下記のライブ編集可能な例にコードを入力することができます。

間違えた場合は、_Reset_ ボタンを使用していつでもリセットできます。

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
  <p>Some sample text for your delight</p></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
p {

  }</textarea
  >

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");

var styleElem = document.createElement("style");
var headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## まとめ

この記事のテキストで遊んで楽しんでくださいね！ 次の記事では、HTML リストの装飾について知っておくべきことをすべて説明します。

{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}
