---
title: HTML のパフォーマンス機能
short-title: 性能の良い HTML
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML は既定で高速でアクセシビリティに優れています。開発者としての私たちの仕事は、HTML コードを作成・編集する際に、この 2 つの特性を確実に維持することです。例えば、{{htmlelement("video")}} の埋め込みファイルのサイズが大きすぎる場合や、ウェブページがモバイル端末に最適化されていない場合など、複雑な問題が発生することがあります。このモジュールでは、ウェブページの品質を劇的に向上させることができる、主要な HTML パフォーマンス機能を説明します。

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
        HTML 要素や属性がウェブのパフォーマンス最適化に与える影響について学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## 最適化するか、しないか

HTML の最適化を開始する前に答えるべき最初の質問は、「何を最適化する必要があるか」です。下記で説明するヒントやテクニックのいくつかは、ほとんどすべてのウェブプロジェクトに好ましいことですが、一部は特定の状況でのみ必要なものです。これらのテクニックをすべてあらゆる場所に適用しようとすることは、おそらく不必要であり、時間の無駄になるかもしれません。各プロジェクトで実際に必要なパフォーマンスの最適化は何かを見極める必要があります。

このためには、サイトの[パフォーマンスを測定](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance)する必要があります。このリンクが示すように、パフォーマンスを測定するにはいくつかの方法があり、その中には高度な[パフォーマンス API](/ja/docs/Web/API/Performance_API) を使用するものもあります。しかし、始めるには、ブラウザーに組み込まれている[ネットワーク](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance#ネットワークモニターツール)や[パフォーマンス](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance#パフォーマンスモニターツール)などのツールを使用して、読み込みに時間がかかり、最適化が必要なページの部分を調べることをお勧めします。

## HTML のパフォーマンスに関する主な課題

HTML はパフォーマンスの点でシンプルです。ほとんどはテキストで、サイズも小さいため、ダウンロードやレンダリングがほとんどの場合すばやく行えます。ウェブページのパフォーマンスに影響を与える主な課題には、次のようなものがあります。

- 画像および動画ファイルのサイズ: {{htmlelement("img")}} や {{htmlelement("video")}} などの置換要素のコンテンツをどのように処理するかを検討することが重要です。画像および動画ファイルはサイズが大きく、ページの重量を大幅に増加させる可能性があります。そのため、ユーザーの端末にダウンロードされるバイト数を最小限に抑えることが重要です（例えば、モバイル向けにより小さな画像を提供するなど）。また、画像や動画は必要な場合にのみページに読み込むことで、知覚的パフォーマンスの改善も検討する必要があります。
- 埋め込みコンテンツの配信: これは通常、{{htmlelement("iframe")}} 要素に埋め込まれたコンテンツです。コンテンツを `<iframe>` に読み込むと、パフォーマンスに大きな影響を与える可能性があるため、慎重に検討する必要があります。
- リソースの読み込み順序: 知覚的パフォーマンスと実際のパフォーマンスを最大化するには、 HTML をページに表示される順序で最初に読み込む必要があります。その後、さまざまな機能を使用して、パフォーマンスを向上させるためにリソースの読み込み順序を変更することができます。例えば、重要な CSS やフォントは早めに先読みし、重要度の低い JavaScript は後で読み込むようにすることができます。

> [!NOTE]
> HTML 構造を簡略化し、ソースコードを[縮小](<https://en.wikipedia.org/wiki/Minification_(programming)>)して、レンダリングとダウンロードを高速化するという意見もあります。しかし、HTML ファイルのサイズは画像や動画に比べればごくわずかであり、最近のブラウザーのレンダリング速度はとても高速です。HTML ソースが巨大で複雑すぎて、レンダリングやダウンロードのパフォーマンスに悪影響が出ている場合は、おそらくもっと大きな問題が存在していると考えられます。

## 置換要素のレスポンシブな扱い

[レスポンシブデザイン](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) は、さまざまな端末でウェブコンテンツのレイアウトを処理する方法に革命をもたらしました。この設計の主な利点の 1 つは、画面のサイズに合わせて、ワイド画面用とモバイル端末用のレイアウトを動的に切り替えることができることです。また、解像度や明るい色調と暗い色調のどちらを好むかといった、端末の属性に応じてコンテンツを動的に切り替えることもできます。

いわゆる「モバイルファースト」という手法を使えば、既定のレイアウトを小さな画面の端末用に確実に保持できます。これにより、モバイル端末は自分の画面に適した画像だけをダウンロードすればよく、デスクトップ用の大きな画像をダウンロードしてパフォーマンスを低下させる必要がなくなります。ただし、これは CSS 内の[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)を使用して制御されるため、CSS で読み込まれた画像のパフォーマンスにのみ正の影響を与えます。

以下の節では、レスポンシブな置換要素を実装する方法をまとめます。
これらの実装の詳細については、 [HTML 動画と音声](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)および[レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)ガイドで詳しく説明しています。

### srcset によってさまざまな画像解像度を提供

端末の解像度やビューポートのサイズに応じて、同じ画像の様々な解像度のバージョンを提供するには、 [`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) および [`sizes`](/ja/docs/Web/HTML/Reference/Elements/img#sizes) 属性を使用することができます。

この例では、画面の幅に応じて異なるサイズの画像を提供しています。

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` は、ソース画像のファイル名とともにその内在サイズを指定し、 `sizes` は、各ケースで埋める必要のある画像スロットの幅とともにメディアクエリーを指定します。その後、ブラウザーは、各スロットに読み込むべき画像を判断します。例えば、画面の幅が `600px` 以下の場合、 `max-width: 600px` が真となり、したがって、埋めるべきスロットは `480px` となります。この場合、ブラウザーは 480w.jpg ファイル（幅 480px の画像）を読み込むことを選択するでしょう。これにより、ブラウザーは必要な以上の大きな画像を読み込むことがなくなるため、パフォーマンスが向上します。

この例では、画面の解像度に応じて異なる解像度の画像を提供しています。

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`、`2x` などは相対的な解像度を示します。画像のスタイルが幅 320 ピクセルであるように設定されている場合 (例えば、CSS で `width: 320px` と指定されている場合)、端末の解像度が低い（CSS ピクセル 1 ピクセルあたり 1 デバイスピクセル）場合は `320w.jpg` が、端末の解像度が高い (CSS ピクセル 1 ピクセルあたり 2 デバイスピクセル以上) 場合は `640x.jpg` が読み込まれます。

どちらの場合も、`src` 属性は、ブラウザーが `src`/`srcset` に対応していない場合に読み込む既定の画像を提供します。

### 画像や動画のさまざまなソースを提供します

{{htmlelement("picture")}} 要素は、従来の {{htmlelement("img")}} 要素を拡張したもので、さまざまな状況に応じて複数の異なるソースを提供することができます。例えば、レイアウトが広い場合は幅の広い画像、狭い場合はそのコンテキストで機能する幅の狭い画像を使用したいでしょう。

もちろん、これはモバイル端末での情報のダウンロード量を減らし、パフォーマンスの向上にも役立ちます。

次の例を見てください。

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

{{htmlelement("source")}} 要素は、 `media` 属性内にメディアクエリーを含みます。メディアクエリーが true を返した場合、 `<source>` 要素の `srcset` 属性で参照されている画像が読み込まれます。上記の例では、ビューポートの幅が `799px` 以下の場合、 `narrow-banner-480w.jpg` 画像が読み込まれます。また、 `<picture>` 要素が `<img>` 要素を含んでいることにご注目ください。これは、 `<picture>` に対応していないブラウザーで読み込む既定の画像を提供します。

この例での `srcset` 属性の使用に注目してください。前の節で示したように、画像ソースごとに異なる解像度を指定することができます。

`<video>` 要素も、異なるソースを提供するという点では同様の動作をします。

```html
<video controls>
  <source src="video/smaller.mp4" type="video/mp4" />
  <source src="video/smaller.webm" type="video/webm" />
  <source src="video/larger.mp4" type="video/mp4" media="(min-width: 800px)" />
  <source
    src="video/larger.webm"
    type="video/webm"
    media="(min-width: 800px)" />

  <!-- video 要素に 対応していないブラウザーのための代替 -->
  <a href="video/larger.mp4">動画をダウンロード</a>
</video>
```

ただし、画像と動画のソースの提供には、いくつかの重要な違いがあります。

- 上記の例では、 `srcset` ではなく `src` を使用しています。 `srcset` では、動画の異なる解像度を指定することはできません。
- 代わりに、それぞれの `<source>` 要素内でそれぞれの解像度を指定します。
- それぞれの `<source>` 要素内で、それぞれの動画形式も指定していることに注意してください。各形式は、`type` 属性内の MIME タイプによって識別されます。ブラウザーは、メディアクエリーテストが true を返す、対応している形式のうち、最初に検出したものを読み込みます。

### 画像の遅延読み込み

パフォーマンスを改善するための非常に有益な手法として、**遅延読み込み**があります。これは、 HTML がレンダリングされたときにすべての画像をすぐに読み込むのではなく、ビューポートでユーザーに実際に表示される（またはすぐに表示される）画像のみを読み込むという手法です。これは、すぐに表示/使用できるコンテンツはよりすばやく使用できるようになり、それ以降のコンテンツはスクロールして表示されたときにのみ画像がレンダリングされるため、ユーザーが決して見ることのない画像を読み込むことでブラウザーの帯域幅を無駄にしないということです。

遅延読み込みは、過去には JavaScript を使用して処理されていましたが、ブラウザーには、画像の遅延読み込みを自動的に指示する `loading` 属性が利用できるようになりました。

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

詳細については、web.dev の [Browser-level image lazy loading for the web](https://web.dev/articles/browser-level-image-lazy-loading) を参照してください。

`preload` 属性を使用すると、動画コンテンツも遅延読み込みすることができます。例えば、次のようにします。

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

`preload` に `none` の値を指定すると、ユーザーが再生を決定する前に動画データを先読みしないようにブラウザーに指示します。これは明らかにパフォーマンスの向上に役立ちます。その代わりに、 `poster` 属性で指定された画像が表示されます。さまざまなブラウザーでは、動画の読み込みの既定の動作が異なるため、明示的に指定することをお勧めします。
詳細については、web.dev の [Fast playback with audio and video preload](https://web.dev/articles/fast-playback-with-preload) を参照してください。

## 埋め込みコンテンツの処理

コンテンツが他のソースからウェブページに埋め込まれることはよくあります。これは、収益を得るためにサイトに広告を表示する場合に最もよく行われます。通常、広告はサードパーティー企業によって生成され、ページに埋め込まれます。その他の用途としては、次のようなものがあります。

- ショッピングカートやプロフィール情報など、ユーザーが複数のページで必要とする可能性のある共有コンテンツを表示する場合。
- ソーシャルメディアの投稿フィードなど、組織のメインサイトに関連するサードパーティーのコンテンツを表示する場合。

コンテンツの埋め込みは、 {{htmlelement("iframe")}} 要素を使用して行うのが最も一般的ですが、 {{htmlelement("object")}} や {{htmlelement("embed")}} など、あまり使用されない埋め込み要素も存在します。この節では、 `<iframe>` に焦点を当てて説明します。

`<iframe>` を使用する際の最も重要かつ重要なアドバイスは、「絶対に必要な場合を除き、埋め込み `<iframe>` を使用しないでください」です。複数の異なる情報ペインを含むページを作成する場合、それらを別個のページに分割し、別々の `<iframe>` に読み込む方が、組織的に理にかなっているように聞こえるかもしれません。しかし、これには、パフォーマンスなどの点で、いくつかの問題があります。

- コンテンツを `<iframe>` に読み込むことは、同じ直接ページの一部としてコンテンツを読み込むよりもはるかにコストがかかります。コンテンツを読み込むために追加の HTTP リクエストが必要になるだけでなく、ブラウザーはそれぞれについて別個のページのインスタンスを作成する必要があります。それぞれは、事実上、最上位のウェブページに埋め込まれた別個のウェブページのインスタンスです。
- 上記の点に続き、CSS スタイル設定や JavaScript 操作も、異なる `<iframe>` ごとに個別に処理する必要があります（埋め込みページが同じオリジンからのものである場合を除く）。これにより、処理がさらに複雑になります。最上位のページに適用された CSS や JavaScript を、埋め込みコンテンツに適用することはできません。その逆も同様です。これは、Web の基本となる賢明なセキュリティ対策です。サードパーティーの埋め込みコンテンツが、埋め込まれたページに対して任意にスクリプトを実行できる場合、どのような問題が発生するかを想像してみてください。
- それぞれの `<iframe>` は、共有データやメディアファイルも個別に読み込む必要があります。キャッシュされた資産は、異なるページに埋め込まれた場合、共有することはできません（ここでも、埋め込まれたページが同じオリジンからのものである場合を除きます）。これにより、予想以上に多くの帯域幅を使用するページになる可能性があります。

コンテンツは 1 つのページにまとめることをお勧めします。ページが変更される際に新しいコンテンツを動的に取り込みたい場合でも、 `<iframe>` に入れるよりも同じページに読み込むほうがパフォーマンスの点で優れています。例えば、 {{domxref("Window/fetch", "fetch()")}} メソッドを使用して新しいデータを取得し、 DOM スクリプトを使用してページに挿入することができます。詳細については、「[ネットワークリクエストを JavaScript で作成](/ja/docs/Learn_web_development/Core/Scripting/Network_requests)」および「[DOM スクリプト入門](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)」をご覧ください。

> [!NOTE]
> コンテンツを制御でき、それが比較的単純な場合は、 `src` 属性に base-64 エンコードされたコンテンツを使用して `<iframe>` を埋めるか、 `srcdoc` 属性に生の HTML を挿入することを考えることができます ( [Iframe のパフォーマンスパート 2: 良いニュース](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429) で詳細情報をご覧ください)。

`<iframe>` を使用しなければならない場合は、控えめに使用してください。

### IFrame の遅延読み込み

`<img>` 要素と同じ方法で、`loading` 属性を使用して、最初は画面外にある `<iframe>` コンテンツを遅延読み込みするようにブラウザーに指示し、パフォーマンスを改善することができます。

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

詳細については、 [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) をご覧ください。

## リソースの読み込み順の処理

知覚的パフォーマンスと実際のパフォーマンスを最大化するには、リソースの読み込み順序が重要です。ウェブページが読み込まれると、次の処理が行われます。

1. 通常、HTML はページに表示される順序で最初に構文解析されます。
2. 得られたすべての CSS が解釈され、ページに適用する必要のあるスタイルが理解されます。この間に、画像やウェブフォントなどのリンクされた資産が取得され始めます。
3. 見つかった JavaScript は、構文解析され、評価され、ページに対して実行されます。既定では、JavaScript が検出された {{htmlelement("script")}} 要素の後に表示される HTML の構文解析はブロックされます。
4. 少し後に、ブラウザーは、各 HTML 要素に適用される CSS を指定して、各要素のスタイルを決定します。
5. スタイルが適用された結果は、画面に描画されます。

> [!NOTE]
> これは、現れる現象を非常に単純化した説明ですが、おおよその概要はご理解いただけると思います。

さまざまな HTML 機能を使用して、リソースの読み込み方法を変更し、パフォーマンスを改善することができます。ここでは、そのうちのいくつかについて説明します。

### JavaScript の読み込みの処理

JavaScript を構文解析して実行すると、その後の DOM コンテンツの構文解析がブロックされます。これにより、そのコンテンツがレンダリングされ、ページのユーザーが使用できるようになるまでの時点が遅くなります。小さなスクリプトではそれほど問題にはなりませんが、最近のウェブアプリケーションは JavaScript を多用する傾向があるということを考慮してください。

JavaScript の既定の構文解析動作のもう 1 つの副作用は、レンダリングされるスクリプトが、ページの後ろに現れる DOM コンテンツに依存している場合、エラーが発生することです。

例えば、ページに単純な段落があるとします。

```html
<p>My paragraph</p>
```

ここで、次のコードが含まれている JavaScript ファイルがあるとします。

```js
const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("You clicked the paragraph");
});
```

このスクリプトは、次のように `<script>` 要素で参照することで、ページに適用することができます。

```html
<script src="index.js"></script>
```

この `<script>` 要素をソースの順序で `<p>` 要素の前に配置すると（例えば、{{htmlelement("head")}} 要素内に配置すると）、ページでエラーが発生します（例えば、Chrome では "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" というエラーがコンソールに報告されます）。これは、スクリプトが動作するために `<p>` 要素に依存しているのに、スクリプトが構文解析される時点で、ページ上に `<p>` 要素が存在しないためです。これはまだレンダリングされていません。

上記の課題は、`<script>` 要素を `<p>` 要素の後（例えば、文書の本体の終わり）に配置するか、適切なイベントハンドラー内でコードを実行することで修正できます（例えば、DOM が完全に解析されたときに発行される [`DOMContentLoaded`](/ja/docs/Web/API/Document/DOMContentLoaded_event) で実行します）。

ただし、これではスクリプトが読み込まれるまで待つという問題は解決されません。パフォーマンスを向上させるには、 `<script>` 要素に `async` 属性を追加します。

```html
<script async src="index.js"></script>
```

これにより、スクリプトは DOM の構文解析と並列して取得されるため、同時に準備が完了し、レンダリングがブロックされることがなく、パフォーマンスが改善されます。

> [!NOTE]
> もう 1 つの属性 `defer` があります。これは、文書が構文解析された後、`DOMContentLoaded` が発行される前にスクリプトを実行します。これは `async` と同様の効果があります。

JavaScript の読み込みを処理するもう 1 つのヒントは、スクリプトをコードモジュールに分割し、必要なときに各部分を個別に読み込むことです。すべてのコードを 1 つの巨大なスクリプトに入れて、最初にすべてを読み込むのではなく、です。これは、[JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules) を使用して行います。詳細なガイドについては、リンク先の記事をご覧ください。

### rel="preload" によるコンテンツの先読み

HTML、CSS、JavaScript からリンクされている他のリソース（画像、動画、フォントファイルなど）の取得も、パフォーマンスの問題を引き起こし、コードの実行を妨げ、使い勝手を低下させる原因となります。このような問題を軽減する方法の 1 つは、`rel="preload"` を使用して {{htmlelement("link")}} 要素を先読みに変えることです。例えば、

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

`rel="preload"` リンクが認識されると、ブラウザーはできるだけ早く参照先のリソースを取得し、ブラウザーのキャッシュで利用可能にして、その後のコードで参照されたときにすぐに使用できるようにします。ユーザーがページで最初に遭遇する優先度の高いリソースを先読みして、使い勝手をできるだけスムーズにする場合に役立ちます。

`rel="preload"` の使用に関する詳細情報は、次の記事をご覧ください。

- [`rel="preload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload)
- [Preload critical assets to improve loading speed](https://web.dev/articles/preload-critical-assets) (web.dev, 2020)

> [!NOTE]
> `rel="preload"` を使用して、CSS および JavaScript ファイルも先読みすることができます。

> [!NOTE]
> それ以外にも、ページの読み込みのさまざまな側面を高速化するために設計された [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 値があります。`dns-prefetch`、`preconnect`、`modulepreload`、`prefetch`、`prerender` です。リンク先のページで、それぞれの機能を探してみてください。

## 関連情報

- [ネットワークリクエストを JavaScript で作成](/ja/docs/Learn_web_development/Core/Scripting/Network_requests)
- [DOM スクリプト入門](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/JavaScript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
