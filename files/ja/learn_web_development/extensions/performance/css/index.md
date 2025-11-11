---
title: CSS のパフォーマンス最適化
short-title: 性能の良い CSS
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

ウェブサイトを開発する際には、ブラウザーがサイトの CSS をどのように処理しているかを考慮する必要があります。 CSS が引き起こす可能性のあるパフォーマンスの課題を軽減するには、 CSS を最適化する必要があります。例えば、[レンダリングブロック](/ja/docs/Glossary/Render_blocking) を軽減し、再フローをしなければならない数を最小限に抑えるために、CSS を最適化する必要があります。この記事では、CSS のパフォーマンスを最適化するための重要な手法について説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a
          href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >基本的なソフトウェアのインストール</a
        >、
        <a href="/ja/docs/Learn_web_development/Getting_started/Your_first_website"
          >クライアント側のウェブ技術</a
        >の基本的な知識
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        CSS がウェブサイトのパフォーマンスに与える影響、およびパフォーマンスを改善するために CSS を最適化する方法について学びます。
      </td>
    </tr>
  </tbody>
</table>

## 最適化するか、しないか

CSS の最適化を開始する前に答えるべき最初の質問は、「何を最適化する必要があるか」です。下記で説明するヒントやテクニックのいくつかは、ほとんどすべてのウェブプロジェクトに好ましいことですが、一部は特定の状況でのみ必要なものです。これらのテクニックをすべてあらゆる場所に適用しようとすることは、おそらく不必要であり、時間の無駄になるかもしれません。各プロジェクトで実際に必要なパフォーマンスの最適化は何かを見極める必要があります。

このためには、サイトの[パフォーマンスを測定](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance)する必要があります。前のリンクが示すように、パフォーマンスを測定するにはいくつかの方法があり、その中には高度な[パフォーマンス API](/ja/docs/Web/API/Performance_API) を使用するものもあります。しかし、始めるには、ブラウザーに組み込まれている[ネットワーク](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance#ネットワークモニターツール)や[パフォーマンス](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance#パフォーマンスモニターツール)などのツールを使用して、ページ読み込みのどの部分が時間がかかり、最適化が必要かを確認します。

## レンダリングの最適化

ブラウザーは特定のレンダリングパスに従います。つまり、レンダリングツリーが作成された後にレイアウトが行われ、レイアウトの後でペイントが行われます。レイアウトには DOM ツリーと CSSOM ツリーの両方が要求されます。

スタイルが設定されていないページをユーザーに表示し、CSS スタイルが構文解析された後にページを再描画すると、使い勝手が悪くなります。このため、CSS は、ブラウザーが CSS が要求されていると判断するまで、レンダリングをブロックします。ブラウザは、CSS をダウンロードし、 [CSS オブジェクトモデル (CSSOM)](/ja/docs/Glossary/CSSOM) を構築した後、ページを描画することができます。

CSSOM の構築を最適化し、ページのパフォーマンスを改善するには、CSS の現在の状態に応じて、以下のいずれかを実行してください。

- **不要なスタイルを削除する**: 当たり前のように聞こえるかもしれませんが、開発中にスタイルシートに追加され、結局使用されなかった CSS ルールを、開発者が削除し忘れるケースは驚くほど多くあります。レイアウトや描画で使用されているかどうかに関係なく、すべてのスタイルは構文解析されます。そのため、使用されていないスタイルを削除することで、ページのレンダリングを高速化することができます。 [How Do You Remove Unused CSS From a Site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) で要約されているように、これは大規模なコードベースでは解決が難しい問題であり、未使用の CSS を確実に探して除去する魔法の解決策はありません。CSS をモジュール化して、追加および除去するものを慎重に検討するという大変な作業を行う必要があります。

- **CSS を別個のモジュールに分割する**: CSS をモジュール化すると、ページの読み込み時に必要のない CSS は後で読み込むことができるため、初期 CSS のレンダリングを妨げる要素を削減し、読み込み時間を短縮できます。これを行う最も簡単な方法は、CSS を別個のファイルに分割し、必要なものだけを読み込むことです。

  ```html
  <!-- styles.css の読み込みと解釈はレンダリングブロック -->
  <link rel="stylesheet" href="styles.css" />

  <!-- print.css の読み込みと解釈はレンダリングブロックされない -->
  <link rel="stylesheet" href="print.css" media="print" />

  <!-- mobile.css の読み込みと解釈は、広い画面ではレンダリングブロックされない -->
  <link
    rel="stylesheet"
    href="mobile.css"
    media="screen and (max-width: 480px)" />
  ```

  上記の例では、3 組のスタイルが提供されています。常に読み込まれる既定のスタイル、文書が出力される場合にのみ読み込まれるスタイル、画面が狭い端末でのみ読み込まれるスタイルです。既定では、ブラウザーは指定されたスタイルシートがレンダリングブロックされることを想定しています。スタイルシートが適用されるタイミングは、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)を使って `media` 属性を追加してブラウザーに指示します。ブラウザーはスタイルシートを見ると、特定のシナリオにのみ適用する必要があることを認識し、スタイルシートをダウンロードしますが、描画はブロックしません。CSS を複数のファイルに区切ることで、描画をブロックするメインのファイル（この場合は `styles.css`）をより小さくし、描画がブロックされる時間を短縮しています。

- **CSS を縮約および圧縮する**: 縮約とは、コードが本番環境に移された後、人間の読みやすさのためにのみ存在するファイル内のすべての空白を削除することです。CSS を縮約する事で、読み込み時間を大幅に短縮することができます。縮約は通常、ビルドプロセスの一部として行われます（例えば、ほとんどの JavaScript フレームワークでは、展開の準備ができたプロジェクトをビルドする際にコードを縮約します）。縮約に加えて、サイトがホストされているサーバーが、ファイルを提供する前に gzip などの圧縮を使用していることを確認してください。

- **セレクターを簡略化する**: 必要なスタイルを適用するために必要以上に複雑なセレクターを書くことがよくあります。これはファイルサイズを大きくするだけでなく、それらのセレクターの構文解析の時間も長くなります。例えば、次のような場合です。

  ```css
  /* とても具体的なセレクター */
  body div#main-content article.post h2.headline {
    font-size: 24px;
  }

  /* おそらくこれだけあれば十分 */
  .headline {
    font-size: 24px;
  }
  ```

  セレクターを複雑で詳細でないものにすると、メンテナンスも容易になります。単純なセレクターは、その動作が理解しやすく、セレクターの[詳細度](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#詳細度_2)が低い場合は、後で必要に応じてスタイルを簡単に上書きすることができます。

- **必要以上に要素にスタイルを適用しないでください**: よくある間違いは、[全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)を使用して、すべての要素、あるいは少なくとも必要以上に多くの要素にスタイルを適用することです。この種のスタイル設定は、特に大規模なサイトでは、パフォーマンスに悪影響を及ぼす可能性があります。

  ```css
  /* Selects every element inside the <body> */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  多くのプロパティ ({{cssxref("font-size")}} など) は親から値を継承するため、すべての場所に適用する必要はないことを覚えておいてください。また、[フレックスボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox) などの強力なツールは、控えめに使用する必要があります。これらをあらゆる場所で使用すると、あらゆる種類の予期しない動作が発生させる可能性があります。

- **CSS スプライトを使用して画像の HTTP リクエストを削減**： [CSS スプライト](https://css-tricks.com/css-sprites/) は、サイトで使用する複数の小さな画像 (アイコンなど) を 1 つの画像ファイルにまとめ、 {{cssxref("background-position")}} の異なる値を使用して、各場所に表示したい画像の塊を表示する手法です。これにより、画像を取得するために必要な HTTP リクエストの数を大幅に削減できます。

- **重要な資産を事前読み込み**: [`rel="preload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) を使用すると、 {{htmlelement("link")}} 要素を重要な資産を事前読み込みに変えることができます。これには、CSS ファイル、フォント、画像などが含まれます。

  ```html
  <link rel="preload" href="style.css" as="style" />

  <link
    rel="preload"
    href="ComicSans.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(min-width: 601px)" />
  ```

  `preload` を指定すると、ブラウザーは参照されているリソースをできるだけ早く取得し、ブラウザーのキャッシュで利用できるようにします。これにより、その後のコードで参照されたときに、そのリソースをすぐに使用できるようになります。ページでユーザーが最初に遭遇する優先度の高いリソースを事前読み込みして、使い勝手をできるだけスムーズにする場合に便利です。`media` 属性を使用して、レスポンシブな事前読み込みを作成する方法にも注意してください。

  [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) (web.dev, 2020) も参照してください。

## アニメーションの処理

アニメーションは知覚的パフォーマンスを改善し、インターフェイスをより軽快に感じさせ、ユーザーがページの読み込みを待っている間に進行状況が進んでいることを同様に感じさせることができます（例えば、読み込みスピナーなど）。しかし、アニメーションが大きくなったり、アニメーションの数が増えたりすると、当然、処理能力もより多く要求されるようになり、パフォーマンスが低下する可能性があります。

最も簡単なアドバイスは、不要なアニメーションをすべて削減することです。また、低電力の端末やバッテリー電力が限られているモバイル端末を使用しているユーザー向けに、アニメーションをオフにするコントロール/サイト設定を用意することもできます。 JavaScript を使用して、アニメーションをページに適用するかどうかを最初に制御することもできます。また、ユーザーの OS レベルでのアニメーションに関する環境設定に基づいて、アニメーションのスタイルを適用するかどうかを選択的に指定できる [`prefers-reduced-motion`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) というメディアクエリーも使用できます。

基本的な DOM アニメーションについては、JavaScript アニメーションではなく、可能な場合は [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using) を使用することをお勧めします（[ウェブアニメーション API] (/ja/docs/Web/API/Web_Animations_API) は、 JavaScript を使用して CSS アニメーションに直接フックする方法を提供しています）。

### アニメーションするプロパティの選択

次に、アニメーションのパフォーマンスは、アニメーションするプロパティに大きく依存します。一部のプロパティは、アニメーションを行うと [再フロー](/ja/docs/Glossary/Reflow) （したがって [再描画](/ja/docs/Glossary/Repaint) も）が発生するため、避ける必要があります。これには、次のようなプロパティがあります。

- 要素の寸法を変更するもの。たとえば、[`width`](/ja/docs/Web/CSS/Reference/Properties/width)、[`height`](/ja/docs/Web/CSS/Reference/Properties/height)、[`border`](/ja/docs/Web/CSS/Reference/Properties/border)、[`padding`](/ja/docs/Web/CSS/Reference/Properties/padding) など。
- 要素の位置を変更するもの。たとえば、[`margin`](/ja/docs/Web/CSS/Reference/Properties/margin)、[`top`](/ja/docs/Web/CSS/Reference/Properties/top)、[`bottom`](/ja/docs/Web/CSS/Reference/Properties/bottom)、[`left`](/ja/docs/Web/CSS/Reference/Properties/left)、[`right`](/ja/docs/Web/CSS/Reference/Properties/right) など。
- 要素のレイアウトを変更するもの。たとえば、[`align-content`](/ja/docs/Web/CSS/Reference/Properties/align-content)、[`align-items`](/ja/docs/Web/CSS/Reference/Properties/align-items)、[`flex`](/ja/docs/Web/CSS/Reference/Properties/flex) など。
- 要素の形状を変化させる視覚効果を追加するもの。たとえば、[`box-shadow`](/ja/docs/Web/CSS/Reference/Properties/box-shadow) など。

現在のブラウザーは、ページ全体ではなく、変更された部分のみを再描画する賢い機能を備えています。その結果、アニメーションが大きくなると、コストもかかります。

可能であれば、再フローや再描画を引き起こさないプロパティをアニメーションさせる方がよいでしょう。これには、次のようなものがあります。

- [座標変換](/ja/docs/Web/CSS/Guides/Transforms)
- [`opacity`](/ja/docs/Web/CSS/Reference/Properties/opacity)
- [`filter`](/ja/docs/Web/CSS/Reference/Properties/filter)

### GPU でのアニメーション

パフォーマンスをさらに向上させるには、アニメーションの処理をメインスレッドから端末の GPU に移動させる（合成とも呼ばれる）ことを検討してください。これは、ブラウザーが GPU に自動的に送信して処理する、特定の種類のアニメーションを選択することで実現できます。これには、次のようなものがあります。

- 3D 座標変換。例えば [`transform: translateZ()`](/ja/docs/Web/CSS/Reference/Properties/transform) や [`rotate3d()`](/ja/docs/Web/CSS/Reference/Values/transform-function/rotate3d) など。
- 特定の他のプロパティがアニメーションする要素、たとえば [`position: fixed`](/ja/docs/Web/CSS/Reference/Properties/position) など。
- [`will-change`](/ja/docs/Web/CSS/Reference/Properties/will-change) が適用されている要素（下記の節を参照）。
- 独自のレイヤーで描画される一部の要素、例えば [`<video>`](/ja/docs/Web/HTML/Reference/Elements/video)、[`<canvas>`](/ja/docs/Web/HTML/Reference/Elements/canvas)、 [`<iframe>`](/ja/docs/Web/HTML/Reference/Elements/iframe) など。

GPU でのアニメーションは、特にモバイル端末においてパフォーマンスの改善につながります。しかし、アニメーションを GPU に移動することは、必ずしもそれほど単純ではありません。とても有益で詳細な分析については、 [CSS GPU Animation: Doing It Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) (smashingmagazine.com, 2016) をご覧ください。

### `will-change` による要素の変更の最適化

ブラウザーは、要素が実際に変更される前に最適化を設定することがあります。この種の最適化は、実際に必要とされる前に高価な可能性のある作業を行うことで、ページのレスポンスを向上させることができます。 CSS の [`will-change`](/ja/docs/Web/CSS/Reference/Properties/will-change) プロパティは、要素がどのように変化することが予想されるかをブラウザーに示唆します。

> [!NOTE]
> `will-change`は、既存のパフォーマンス問題に対処するための最後の手段として使用することを意図しています。パフォーマンス上の問題を予測するために使用するべきではありません。

```css
.element {
  will-change: opacity, transform;
}
```

## レンダリングブロックの最適化

CSS では、メディアクエリーを使用して、スタイルを特定の条件に限定することができます。メディアクエリーは、レスポンシブウェブデザインにとって重要であり、重要なレンダリングパスを最適化するのに役立ちます。ブラウザーは、これらのスタイルをすべて構文解析するまでレンダリングをブロックしますが、印刷用スタイルシートなど、使用しないことが分かっているスタイルについてはレンダリングをブロックしません。メディアクエリーに基づいて CSS を複数のファイルに分割することで、使用されない CSS のダウンロード中にレンダリングがブロックされるのを防ぐことができます。ブロックしない CSS リンクを作成するには、印刷スタイルなど、すぐには使用されないスタイルを別個のファイルに移動し、 HTML マークアップに [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) を追加し、メディアクエリーを追加します。この例では、印刷スタイルシートであることを指定しています。

```html
<!-- styles.css の読み込みと解釈はレンダリングブロック -->
<link rel="stylesheet" href="styles.css" />

<!-- print.css の読み込みと解釈はレンダリングブロックされない -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- mobile.css の読み込みと解釈は、広い画面ではレンダリングブロックされない -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />
```

既定では、ブラウザーは、指定された各スタイルシートがレンダリングをブロックすると想定します。スタイルシートを適用するタイミングをブラウザーに指示するには、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using) を使用して `media` 属性を追加します。ブラウザーは、スタイルシートを認識すると、そのスタイルシートを特定のシナリオにのみ適用する必要があることを認識しますが、スタイルシートはダウンロードします。CSS を複数のファイルに分割することで、レンダリングをブロックする主なファイル（この場合は `styles.css`）のサイズが大幅に小さくなり、レンダリングがブロックされる時点が早くなります。

## フォントのパフォーマンスの改善

この節では、ウェブフォントのパフォーマンスを改善するための有益なヒントが含まれています。

一般的には、サイトで使用するフォントは慎重に検討してください。フォントファイルは、非常に大きなもの（数メガバイト）もあります。視覚的なインパクトを与えるために多くのフォントを使用したいと思うかもしれませんが、ページ読み込みが大幅に遅くなり、サイトが見づらくなる原因となります。おそらく 2、3 種類のフォントで十分でしょう。また、[ウェブセーフフォント](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals#ウェブセーフフォント)を使用することを選択すれば、それよりも少ないフォントで済みます。

### フォントの読み込み

フォントは、 [`font-family`](/ja/docs/Web/CSS/Reference/Properties/font-family) プロパティを使用して要素に実際に適用されたときにのみ読み込まれることを覚えておいてください。アットルール [`@font-face`](/ja/docs/Web/CSS/Reference/At-rules/@font-face) を使用して最初に参照されたときではありません。

```css
/* フォントはここでは読み込まれない */
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
}

h1,
h2,
h3 {
  /* 実際にはここで読み込まれる */
  font-family: "Open Sans";
}
```

したがって、重要なフォントを早期に読み込むために `rel="preload"` を使用すると、実際に必要になったときにすばやく利用できるようになり、有益です。

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

これは、`font-family` 宣言が大きな外部スタイルシート内に隠れていて、構文解析プロセスのかなり後半まで到達しない場合に有効です。ただし、フォントファイルはサイズがかなり大きいため、先読みしすぎると他のリソースの読み込みが遅くなる可能性があるというトレードオフがあります。

また、以下も検討してみてください。

- [`rel="preconnect"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preconnect) を使用して、フォントプロバイダーと早めに接続します。詳細については、[重要なサードパーティーのオリジンへの事前接続](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins)を参照してください。
- [CSS フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API) を使用して、JavaScript 経由でフォントの読み込み動作をカスタマイズします。

### 必要な文字のみを読み込む

本文のフォントを選択する場合、特にユーザー生成コンテンツや複数の言語のコンテンツを扱う場合は、そのフォントで使用される文字を確実に把握することが困難です。

しかし、特定のグリフのセット（例えば、見出し用のグリフや特定の句読点文字のみ）を使用することが分かっている場合は、ブラウザーがダウンロードするグリフの数を制限することができます。これは、必要なサブセットのみを含むフォントファイルを作成することで実現できます。このプロセスは、[サブセット](https://fonts.google.com/knowledge/glossary/subsetting)と呼ばれています。[`unicode-range`](/ja/docs/Web/CSS/Reference/At-rules/@font-face/unicode-range) `@font-face` 記述子を使用して、サブセットフォントが使用される場合を指定することができます。ページがこの範囲の文字を使用していない場合、フォントはダウンロードされません。

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### `font-display` 記述子によるフォント表示の動作の定義

`@font-face` アットルールに適用される [`font-display`](/ja/docs/Web/CSS/Reference/At-rules/@font-face/font-display) 記述子は、フォントファイルがどのようにブラウザーで読み込まれて表示されているのか、フォントの読み込み中、または読み込みが失敗した時に代替フォントでテキストを表示できるようにするかを定義します。これにより、空白の画面を表示することなくテキストを表示することができ、パフォーマンスを向上させることができます。

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## CSS コンテナーによるスタイル設定の再計算の最適化

[CSS コンテナー](/ja/docs/Web/CSS/Guides/Containment)モジュールで定義されているプロパティを使用すると、ページ内のさまざまな部分を分離し、それぞれを個別に最適化してレンダリングするようにブラウザーに指示することができます。これにより、個々の部分のレンダリングのパフォーマンスが向上します。例えば、ビューポートに表示されるまで特定のコンテナーをレンダリングしないようにブラウザーに指定することができます。

{{cssxref("contain")}} プロパティを使用すると、制作者は、ページ上の個々のコンテナーに適用する[抑制型](/ja/docs/Web/CSS/Guides/Containment/Using)を正確に指定することができます。これにより、ブラウザーはレイアウト、スタイル、ペイント、サイズ、またはこれらの組み合わせを再計算するのに DOM の制限された部分のみで行うことができます。

```css
article {
  contain: content;
}
```

{{cssxref("content-visibility")}} プロパティは、制作者が一連のコンテナーに強力な抑制を適用し、必要になるまでブラウザーがそれらのコンテナーをレイアウトおよびレンダリングしないように指定できる、便利なショートカットです。

2 つ目のプロパティ {{cssxref("contain-intrinsic-size")}} を利用すると、コンテナーが抑制の効果を受けている間に、コンテナーのプレースホルダーサイズを指定することができます。これは、コンテンツがまだレンダリングされていない場合でも、コンテナーが空間を占有することを意味します。これにより、要素がレンダリングされて表示されても、スクロールバーが移動したり、動作が不安定になるリスクなしに、抑制のパフォーマンスを最大限に発揮することができます。これにより、コンテンツが読み込まれる際の使い勝手が向上します。

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## 関連情報

- [CSS アニメーションのパフォーマンス](/ja/docs/Web/Performance/CSS_JavaScript_animation_performance)
- [Best practices for fonts](https://web.dev/articles/font-best-practices) on web.dev (2022)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/articles/content-visibility) on web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/HTML", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
