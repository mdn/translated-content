---
title: レシピを投稿する
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
tags:
  - CSS
  - Contribute
  - Layout
  - Templates
  - cookbook
  - recipes
translation_of: Web/CSS/Layout_cookbook/Contribute_a_recipe
---
<div>{{CSSRef}}</div>

<p class="summary"><span class="seoSummary">レイアウト料理帳の一例を提供したい場合は、このページでは、あなたの例を公開するための手順について説明します。</span></p>

<h2 id="What_makes_a_good_recipe" name="What_makes_a_good_recipe">何が良いレシピになりますか？</h2>

<p><strong>あらゆる便利なウェブデザインのパターンの最も単純なバージョンです</strong>。 含まれている CSS の各行は、パターンを示すのを助けるためにそこにあるべきですので、例をきれいに見せるためだけのものは省略してください。 アイデアは、誰かがパターンを手に取り、自分のスタイルでサイトでそれを使用できるということです。</p>

<h2 id="Steps_to_publish_a_recipe" name="Steps_to_publish_a_recipe">レシピを公開する手順</h2>

<p>英語で考えるんだ！ — en-US のページを作ります。</p>

<p>GitHub のアカウントで MDN のアカウントを作ります。</p>

<p>MDN の編集機能はもちろん GitHub と Git の扱いにも慣れている必要があります。</p>

<p>レシピの名前とスラグ、例に使うファイル名を以下を読みながら決めます。</p>

<p>レシピは以下で構成されています。</p>

<ol>
 <li>実例（live example）は、<a href="https://github.com/mdn/css-examples">CSS Examples GitHub リポジトリ</a>に保存します。</li>
 <li>その例のダウンロード可能なバージョンも、CSS Examples リポジトリに保存します。</li>
 <li><a href="/ja/docs/Web/CSS/Layout_cookbook">CSS レイアウト料理帳</a>の中のページで、詳細は次のとおりです。
  <ol>
   <li> 要件（Requirements）</li>
   <li>レシピ（Recipe）</li>
   <li>行った選択（Choices made）</li>
   <li>便利な代替方法（Useful fallbacks or alternative methods）</li>
   <li>アクセシビリティへの懸念（Accessibility concerns）</li>
   <li>ブラウザー実装状況（Browser compatibility）</li>
   <li>関連情報（See also）</li>
  </ol>
 </li>
</ol>

<h3 id="1._Build_your_pattern" name="1._Build_your_pattern">1. パターンを作ります</h3>

<p>あなたの例をレシピに変える前に、まずパターンを単純な HTML ページとして作成します。 何を示そうとしているのかを考え、できるだけ単純にします。 誰もがこれらに精通しているわけではないので、（BEM など）特定の CSS の規約を使用しないでください。 必要以上に複雑に見えることがあります。</p>

<p>HTML と CSS が有効であることを確認し、複数のブラウザーでテストしてください。 どこでもサポートされていない CSS プロパティを使用していても問題ありません！ ページを作成するときにブラウザーのサポート情報を含めることができます。 場合によっては、代替のサポートを含む、例の2番目のバージョンを作成すると便利な場合があります。</p>

<h3 id="2._Creating_a_live_example" name="2._Creating_a_live_example">2. 実例を作成する</h3>

<p>料理帳のページや MDN の他の場所で見ることができる実例は、訪問者が必要なすべてのコードに圧倒されることなくコードで遊んで関連部分を変更することを可能にします。 あなたのレシピは一つ以上の例として示されます。</p>

<p><a href="https://github.com/mdn/css-examples">CSS Examples リポジトリ</a>をフォークして（右上の Fork ボタンを押すと自分のアカウントにコピーが作られます）、<code>css-cookbook</code> フォルダを調べてください。 出発点としてコピーできる <code><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template.html">cookbook-template.html</a></code> ファイルがあります。 これを <code>css-cookbook</code> ディレクトリにあなたのパターンにとって意味のある名前で保存してください。 テンプレート（template）は、さまざまなパーツを適切な場所に追加するのに役立つようにコメントされています。</p>

<p>これの重要なパーツは次のとおりです。</p>

<p>エディタパネルのスタイル用のスタイルシート、基本的な body のスタイル、およびエディタ機能用の JavaScript ファイルがあります。 これらのファイルはそのままにしておきます。</p>

<p>head の中には2つのスタイルのブロックがあります。 1つ目は、ページへの訪問者がこの例で遊ぶために変更する必要がないものです。 2つ目は、実例で遊びたい項目のどれかです。 通常、1つ目のブロックに実例の CSS をすべて追加してから、2番目のブロックに移動する必要がある規則のセットを選択します。 2番目のブロックの規則は、パターンの基本となる規則、おそらくユーザーが CSS の値を変更してパターンの更新を確認できるような規則にする必要があります。</p>

<p>コンポーネント用の HTML を2回追加する必要があります。 最初に <code>preview</code> クラスの <code>section</code> の中に、次に <code>playable-html</code> クラスの <code>textarea</code> の中にです。</p>

<p>head の中の2番目のブロックからの <code>editable</code> クラスの CSS も、<code>playable-css</code> クラスの <code>textarea</code> にコピーする必要があります。</p>

<p>単純な例は <code><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/center.html">center.html</a></code> で、これは<a href="/ja/docs/Web/CSS/Layout_cookbook/Center_an_element">要素を中央に配置</a>のページに埋め込まれています。 これを使用して、さまざまな細部を正しく追加する方法を確認できます。</p>

<p>リポジトリをフォークしたので、私たちの CSS と JavaScript ファイルをあなたの例と一緒に持っているなら、ブラウザーであなたの実例を開くと、ページに含まれている時と全く同じように動くのを見るでしょう。</p>

<h4 id="Useful_tips" name="Useful_tips">役に立つヒント</h4>

<ol>
 <li><code>textarea</code> 内で CSS と HTML をインデントしないでください。 代わりにラインの先頭にぶつけてください。 レンダリングすると見栄えがよくなります。</li>
 <li>必要な画像がある場合は、例と共にディレクトリにポップします。 または、すでにそこにあるものを使用することを歓迎します。</li>
 <li>インラインスタイルで高さを変更して、<code>textarea</code> の高さを調整できます。</li>
</ol>

<h3 id="3._Create_a_downloadable_version" name="3._Create_a_downloadable_version">3. ダウンロード版を作成する</h3>

<p>実例にはすべての実例コードが含まれているので、そのすべてを含まない簡単な例を訪問者に提供したいと思います。 実例を <code>--download</code> を付けてコピーしてください。 例えば、<code>center.html</code> には <code>center--download.html</code> という名前のダウンロードバージョンがあります。 このファイルはあなたの最初の例と似ています。 これは単一の HTML ページとしてのパターンの基本バージョンです。 含まれたスタイルシートにある body の CSS 規則を含めると便利かもしれません。 <code><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template--download.html">cookbook-template--download.html</a></code> を見ればこれらは出発点として含まれています。</p>

<h3 id="4._Make_a_Pull_Request_with_your_example" name="4._Make_a_Pull_Request_with_your_example">4. あなたの例でプルリクエストをする</h3>

<p><a href="https://github.com/mdn/css-examples">CSS Examples リポジトリ</a>でプルリクエスト（Pull Request、PR）を作成してください。 このようにして、ページを作成する前に必要になる可能性のある例の変更を手助けすることができます。 さらに、この例は実際のものである必要があり、最初に作成するのが理にかなっています。 プルリクエストにパターンの説明とあなたが何を示しているかを含めてください。</p>

<h3 id="5._Create_your_page" name="5._Create_your_page">5. ページを作成する</h3>

<p>あなたの例がマージされたら、あなたのページを作成することができます。 そのためには<a href="/ja/docs/MDN/Contribute/Howto/Create_and_edit_pages#Getting_page-creation_permissions">ページ作成権限</a>付き MSDN アカウントが必要です。 その後、そのページを CSS 料理帳のページのサブページとして作成できます。 <a href="/ja/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template">ここに料理帳のページ用のテンプレートがあります</a>。</p>

<p>テンプレートは各セクションの一部になるべきものを説明し、より多くの助けを得るために他の料理帳の例を参照することができます。 これらのページのいずれかの編集ボタンをクリックすると、実装状況データを埋め込むために使用されるマクロや実例などが表示されます。</p>

<p>MDN Wiki の使用に関する一般的なガイダンスが必要な場合は、こちらのヘルプページを参照してください。</p>

<p>質問をする必要がある場合、または誰かにあなたのページを見てもらいたい場合は、<a href="https://discourse.mozilla.org/c/mdn">MDN 談話</a>（Discourse）を利用するか、<a href="/ja/docs/MDN/Community/Conversations#Chat_in_IRC">IRC でチャット</a>してください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template">料理帳ページのテンプレート</a></li>
 <li><a href="https://github.com/mdn/css-examples">CSS Examples リポジトリ</a></li>
</ul>
