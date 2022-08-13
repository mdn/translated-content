---
title: MDN 上のものはどこにあるのか - リポジトリのガイド
slug: MDN/Community/Contributing/Our_repositories
tags:
  - Best practices
  - Community
  - GitHub
  - MDN
  - Beginners
  - Repos
translation_of: MDN/Contribute/Where_is_everything
original_slug: MDN/Contribute/Where_is_everything
---
<p>{{MDNSidebar}}</p>

<p>MDN は、たくさんの変化する部分がある複雑なプロジェクトです。 GitHub の知識を少し持っていて、簡単なタイプミスの修正やコードスニペットの改良から始めるのであれば、サイトへの貢献は簡単です。しかし、新しいページ全体を追加するなど、もっと大きな貢献を行おうとすると、ページのソースには格納されていない、どこか別の場所から来たコンテンツがかなりあることに気づくでしょう。</p>

<p>この記事は、 MDN のコンテンツの様々な部分を更新するために編集する必要がある、様々なリポジトリを見つけるためのクイックガイドの役割をします。</p>

<h2 id="core_repos">コアリポジトリ</h2>

<ul>
  <li><strong>コアコンテンツ</strong>: <a href="https://github.com/mdn/content">https://github.com/mdn/content</a>。 MDN のコンテンツで最も重要なリポジトリです。 — ここには、サイトの中核となる英語のコンテンツがすべて保存されており、ページコンテンツの標準的な変更はすべてここで行われます。</li>
  <li><strong>MDN プラットフォーム</strong>: <a href="https://github.com/mdn/yari">https://github.com/mdn/yari</a>。 これは、 MDN プラットフォームが保存されている場所であり、 MDN の高次元のページ構造やレンダリングの仕組みに変更を加えたい場合に行く場所です。</li>
  <li><strong>ブラウザー互換性データ</strong>: <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>。ここには、リファレンスページに掲載されているブラウザーの互換性テーブルを生成するためのデータが保存されています (例)。互換性データを変更するにはここに行ってください。</li>
  <li><strong>インタラクティブな例</strong>: <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a>。このリポジトリには、レンダリングコードとサンプルコードブロックが格納されています。これらは、多くのリファレンスページ (例) の上部にある、編集やコピーが可能な素敵な例を生み出します。これらの例はその場で編集できます。</li>
  <li><strong>翻訳コンテンツ</strong>: <a href="https://github.com/mdn/translated-content">https://github.com/mdn/translated-content</a>。ここは、ローカライズされたコンテンツのための場所です。現在凍結されていない第 1 階層のロケール (現在は<code>fr</code>、<code>ja</code>、<code>zh-CN</code>/<code>zh-TW</code>) の保守に協力したい人はここに行ってください。現在、他のロケールへの編集は許可していません。</li>
  <li><strong>CSS データ</strong>: <a href="https://github.com/mdn/data">https://github.com/mdn/data</a>。当初は、 MDN の一般的なデータを保持するためのリポジトリとして想定されていましたが、現在では、形式文法、継承、計算値、アニメーション型など、 CSS の機能に関するデータを保持する目的で使用されています。このデータは、 CSS のリファレンスページの公式定義 (例) や形式文法 (例) などの節を生成するために使用されます。</li>
</ul>

<h2 id="other_repos">それ以外のリポジトリ</h2>

<ul>
  <li><strong>デモリポジトリ</strong>。 MDN の GitHub には、 <a href="https://github.com/mdn/css-examples">css-examples</a>, <a href="https://github.com/mdn/dom-examples">dom-examples</a>, <a href="https://github.com/mdn/webaudio-examples">webaudio-examples</a> などの膨大な数のデモリポジトリがあります。これらは通常、 MDN のページからリンクされている独立したサンプルを含んでいますが、ときどき、 \{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}} のようなマクロ呼び出しを使用してページに埋め込まれた例を見かけることがあります。スタンドアロンのライブ例を編集したい場合は、常にこれらの例のリポジトリのいずれかにあります。</li>
  <li><strong>MDN-minimalist</strong>: <a href="https://github.com/mdn/mdn-minimalist">https://github.com/mdn/mdn-minimalist</a>。 MDN のベースとなるスタイル付け情報です。 MDN の CSS スタイルを改善したい場合は、ここが訪れるべき場所です。</li>
</ul>
