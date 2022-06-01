---
title: メディアクエリーの初心者向けガイド
slug: Learn/CSS/CSS_layout/Media_queries
tags:
  - Beginner
  - CSS
  - Layout
  - Learn
  - media query
translation_of: Learn/CSS/CSS_layout/Media_queries
---
<p>{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}</p>

<p><strong>CSS メディアクエリー</strong>（CSS Media Query）を使用すると、例えば、「ビューポートは 480 ピクセルよりも広い」というような、ブラウザーとデバイスの環境が指定した規則に一致する場合にのみ CSS を適用できます。 メディアクエリーは、ビューポートのサイズに応じて異なるレイアウトを作成できるため、レスポンシブ Web デザイン（responsive web design、RWD）の重要な部分ですが、例えば、ユーザーはマウスではなくタッチスクリーンを使用しているというような、サイトが実行されている環境に関する他のものを検出するためにも使用できます。 このレッスンでは、最初にメディアクエリーで使用される構文について学習し、次に単純なデザインでどのようにレスポンシブにするかを示す実際の例で使用してみます。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/First_steps">CSS の第一歩</a>と <a href="/ja/docs/Learn/CSS/Building_blocks">CSS の構成要素</a>を学ぶ）。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>メディアクエリーの使用方法、およびそれらを使用してレスポンシブデザインを作成するための最も一般的なアプローチを理解する。</td>
  </tr>
 </tbody>
</table>

<h2 id="Media_Query_Basics" name="Media_Query_Basics">メディアクエリーの基本</h2>

<p>最も単純なメディアクエリーの構文は次のようになります。</p>

<pre class="brush: css notranslate">@media <em>media-type</em> and (<em>media-feature-rule</em>) {
  /* CSS 規則をここに */
}</pre>

<p>これは、次のもので構成されます。</p>

<ul>
 <li>メディア種別（media type）。 このコードがどのようなメディア（例えば、印刷、画面）のためのものであるかをブラウザーに伝えます。</li>
 <li>メディア式。 規則（rule）または、含まれている CSS を適用するために合格する必要があるテストです。</li>
 <li>CSS 規則のセット。 テストに合格し、メディア種別が正しい場合に適用されます。</li>
</ul>

<h3 id="Media_types" name="Media_types">メディア種別</h3>

<p>指定できるメディアの種類は次のとおりです。</p>

<ul>
 <li><code>all</code>（すべて）</li>
 <li><code>print</code>（印刷）</li>
 <li><code>screen</code>（画面）</li>
 <li><code>speech</code>（音声合成）</li>
</ul>

<p>次のメディアクエリーは、ページが印刷される場合にのみ <code>body</code> を <code>12pt</code> に設定します。 ページがブラウザーにロードされるときは適用されません。</p>

<pre class="brush: css notranslate"><code>@media print {
    body {
        font-size: 12pt;
    }
}</code></pre>

<div class="blockIndicator note">
<p><strong>注</strong>: ここでのメディア種別は、いわゆる {{glossary("MIME type","MIME タイプ")}}とは異なります。</p>
</div>

<div class="blockIndicator note">
<p><strong>注</strong>: レベル3のメディアクエリー仕様には、他にも多くのメディア種別が定義されています。 これらは非推奨であり、避けるべきです。</p>
</div>

<div class="blockIndicator note">
<p><strong>注</strong>: メディア種別はオプションです。 メディアクエリーでメディア種別を指定しない場合、メディアクエリーはデフォルトですべてのメディア種別用になります。</p>
</div>

<h3 id="Media_feature_rules" name="Media_feature_rules">メディア特性の規則</h3>

<p>タイプを指定したら、規則を使用してメディア特性（media feature）を対象にできます。</p>

<h4 id="Width_and_height" name="Width_and_height">幅と高さ</h4>

<p>レスポンシブデザインを作成するために最も頻繁に検出される特性（そして広範なブラウザーサポートを備えた特性）は、ビューポートの幅で、ビューポートが特定の幅よりも上または下にある（または正確な幅の）場合に、CSS を適用できます。 これには、<code>min-width</code>、<code>max-width</code>、<code>width</code> のメディア特性を使用します。</p>

<p>これらの特性は、さまざまな画面サイズに対応するレイアウトを作成するために使用されます。 例えば、ビューポートが正確に 600 ピクセルの場合に <code>body</code> のテキストの色を赤に変更するには、次のメディアクエリーを使用します。</p>

<pre class="brush: css notranslate"><code>@media screen and (width: 600px) {
    body {
        color: red;
    }
}</code></pre>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/width.html">この例を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/width.html">ソースを表示</a>します。</p>

<p><code>width</code>（および <code>height</code>）のメディア特性は範囲として使用でき、<code>min-</code> または <code>max-</code> を前に付けて、指定された値が最小または最大であることを示します。 例えば、ビューポートが 600 ピクセルより狭い場合に色を青にするには、次のように <code>max-width</code> を使用します。</p>

<pre class="brush: css notranslate"><code>@media screen and (max-width: 600px) {
    body {
        color: blue;
    }
}</code></pre>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/max-width.html">この例を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/max-width.html">ソースを表示</a>します。</p>

<p>実際には、レスポンシブデザインでは最小値または最大値を使用する方がはるかに便利であるため、<code>width</code> または <code>height</code> を単独で使用することはほとんどありません。</p>

<p>テストできるメディア特性は他にも多数ありますが、メディアクエリー仕様のレベル4および5で導入された新しい特性の一部は、ブラウザーサポートが制限されています。 各特性は、ブラウザーサポート情報とともに MDN で文書化されていて、完全なリストは、<a href="/ja/docs/Web/CSS/@media#メディア特性">メディアクエリーの使用: メディア特性</a>で見つけることができます。</p>

<h4 id="Orientation" name="Orientation">オリエンテーション</h4>

<p>よくサポートされているメディア特性の1つはオリエンテーション（<code>orientation</code>）です。 これにより、ポートレートモード（<code>portrait</code> mode、肖像画のような縦長）またはランドスケープモード（<code>landscape</code> mode、風景画のような横長）をテストできます。 デバイスがランドスケープの場合に本文の色を変更するには、次のメディアクエリーを使用します。</p>

<pre class="brush: css notranslate"><code>@media (orientation: landscape) {
    body {
        color: rebeccapurple;
    }
}</code></pre>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/orientation.html">この例を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/orientation.html">ソースを表示</a>します。</p>

<p>標準のデスクトップビューはランドスケープであり、このオリエンテーションで適切に機能するデザインは、ポートレートモードの携帯電話またはタブレットで表示した場合に機能しない場合があります。 オリエンテーションのテストは、ポートレートモードのデバイス用に最適化されたレイアウトの作成に役立ちます。</p>

<h4 id="Use_of_pointing_devices" name="Use_of_pointing_devices">ポインティングデバイスの使用</h4>

<p>レベル4仕様の一部として、ホバー（<code>hover</code>）メディア特性が導入されました。 この特性は、ユーザーが要素の上にポインターを乗せることができるかどうかをテストできることを意味します。 つまり、本質的に何らかのポインティングデバイスを使用していることを意味します。 タッチスクリーンとキーボードナビゲーションはホバーしません。</p>

<pre class="brush: css notranslate"><code>@media (hover: hover) {
    body {
        color: rebeccapurple;
    }
}</code></pre>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/hover.html">この例を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/hover.html">ソースを表示</a>します。</p>

<p>ユーザーがホバーできないことがわかっている場合、デフォルトでいくつかのインタラクティブ機能を表示できます。 ホバーできるユーザーの場合、リンクの上にポインターを乗せたときにそれらを利用可能にすることを選択できます。</p>

<p>レベル4には、ポインター（<code>pointer</code>）メディア特性もあります。 これには、<code>none</code>（なし）、<code>fine</code>（細かい）、<code>coarse</code>（粗い）の3つの値があります。 <code>fine</code> ポインターは、マウスやトラックパッドのようなものです。 これにより、ユーザーは狭い領域を正確に対象にすることができます。 <code>coarse</code> ポインターは、タッチスクリーン上の指です。 値 <code>none</code> は、ユーザーにポインティングデバイスがないことを意味し、おそらく、キーボードのみ、または音声コマンドでナビゲートしています。</p>

<p><code>pointer</code> を使用すると、ユーザーが画面に対して行っている操作の種類に対応する、より優れたインターフェイスを設計できます。 例えば、ユーザーがタッチスクリーンでデバイスと対話していることがわかっている場合、より大きなヒット領域を作成できます。</p>

<h2 id="More_complex_media_queries" name="More_complex_media_queries">より複雑なメディアクエリー</h2>

<p>考えられるさまざまなメディアクエリーのすべてを使用して、それらを組み合わせたり、いずれにも一致する可能性があるクエリーのリストを作成したりすることができます。</p>

<h3 id="and_logic_in_media_queries" name="and_logic_in_media_queries">メディアクエリーの "and" 論理</h3>

<p>メディア特性を組み合わせるには、上記で <code>and</code> を使用してメディア種別とメディア特性を組み合わせるのとほぼ同じ方法で <code>and</code> を使用できます。 例えば、<code>min-width</code> と <code>orientation</code> をテストする場合があります。 ビューポートの幅が少なくとも 600 ピクセルで、デバイスがランドスケープモードの場合にのみ <code>body</code> のテキストは青色になります。</p>

<pre class="brush: css notranslate"><code>@media screen and (min-width: 600px) and (orientation: landscape) {
    body {
        color: blue;
    }
}</code></pre>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/and.html">この例を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/and.html">ソースを表示</a>します。</p>

<h3 id="or_logic_in_media_queries" name="or_logic_in_media_queries">メディアクエリーの "or" 論理</h3>

<p>クエリーのセットがあり、そのいずれかが一致する場合、これらのクエリーをコンマで区切ることができます。 次の例では、ビューポートの幅が少なくとも 600 ピクセルの場合、<strong>または</strong>デバイスがランドスケープの場合、テキストは青になります。 これらのいずれかが当てはまる場合、クエリーは一致します。</p>

<pre class="brush: css notranslate"><code>@media screen and (min-width: 600px), screen and (orientation: landscape) {
    body {
        color: blue;
    }
}</code></pre>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/or.html">この例を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/or.html">ソースを表示</a>します。</p>

<h3 id="not_logic_in_media_queries" name="not_logic_in_media_queries">メディアクエリーの "not" 論理</h3>

<p><code>not</code> 演算子を使用して、メディアクエリー全体を否定することができます。 これにより、メディアクエリー全体の意味が逆になります。 したがって、次の例では、オリエンテーションがポートレートの場合にのみテキストが青になります。</p>

<pre class="brush: css notranslate"><code>@media not all and (orientation: landscape) {
    body {
        color: blue;
    }
}</code></pre>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/not.html">この例を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/not.html">ソースを表示</a>します。</p>

<h2 id="How_to_choose_breakpoints" name="How_to_choose_breakpoints">ブレークポイントの選択方法</h2>

<p>レスポンシブデザインの初期には、多くのデザイナーが非常に具体的な画面サイズを対象にしようとしました。 人気のある携帯電話やタブレットの画面のサイズのリストは、それらのビューポートにきちんと一致するデザインを作成できるように公開されました。</p>

<p>現在、非常に多様なサイズのデバイスが多すぎて、それを実現できません。 つまり、すべてのデザインにおいて特定のサイズを対象にするのではなく、コンテンツが何らかの方法で壊れ始める（starts to break）サイズでデザインを変更することをお勧めします。 おそらく、行の長さが非常に長くなるか、枠で囲まれたサイドバーが押しつぶされて読みにくくなります。 これが、メディアクエリーを使用して、使用可能なスペースに合わせてデザインをより良いものに変更するポイントです。 このアプローチは、使用されているデバイスの正確な寸法は問題ではなく、あらゆる範囲に対応できることを意味します。 メディアクエリーが導入されるポイントは、<strong>ブレークポイント</strong>（breakpoints）と呼ばれます。</p>

<p>Firefox 開発ツールの<a href="/ja/docs/Tools/Responsive_Design_Mode">レスポンシブデザインモード</a>は、これらのブレークポイントがどこに行くべきかを判断するのに非常に便利です。 メディアクエリーを追加してデザインを微調整しながら、ビューポートを小さくしたり大きくしたりして、コンテンツが改善される場所を簡単に確認できます。</p>

<p><img alt="Firefox 開発ツールのモバイルビューのレイアウトのスクリーンショット。" src="https://mdn.mozillademos.org/files/16867/rwd-mode.png" style="height: 917px; width: 1443px;"></p>

<h2 id="Active_learning_mobile_first_responsive_design" name="Active_learning_mobile_first_responsive_design">能動的学習: モバイルファースト レスポンシブデザイン</h2>

<p>レスポンシブデザインには、大きく分けて2つのアプローチがあります。 デスクトップまたは最も広いビューから始めて、ビューポートが小さくなるにつれて並べ替えるためのブレークポイントを追加するか、最小のビューから始めて、ビューポートが大きくなるにつれてレイアウトを追加することができます。 この2番目のアプローチは、<strong>モバイルファースト</strong> レスポンシブデザインと呼ばれ、多くの場合、従うべき最善のアプローチです。</p>

<p>非常に小さなデバイスのビューは、通常フローで見られるように、多くの場合、コンテンツの単純な1列です。 これは、小さなデバイスに対して多くのレイアウトを行う必要がほとんどないことを意味します — ソースを適切な順序にすれば、デフォルトで読みやすいレイアウトになります。</p>

<p>以下のチュートリアルでは、非常に単純なレイアウトでこのアプローチを説明します。 実稼働サイトでは、メディアクエリー内で調整する必要があるものが多くありますが、アプローチはまったく同じです。</p>

<h3 id="Walkthrough_a_simple_mobile-first_layout" name="Walkthrough_a_simple_mobile-first_layout">チュートリアル: 単純なモバイルファーストのレイアウト</h3>

<p>出発点は、レイアウトのさまざまな部分に背景色を追加するために CSS を適用した HTML ドキュメントです。</p>

<pre class="brush: css notranslate"><code>* {
    box-sizing: border-box;
}

body {
    width: 90%;
    margin: 2em auto;
    font: 1em/1.3 Arial, Helvetica, sans-serif;
}

a:link,
a:visited {
    color: #333;
}

nav ul,
aside ul {
    list-style: none;
    padding: 0;
}

nav a:link,
nav a:visited {
    background-color: rgba(207, 232, 220, 0.2);
    border: 2px solid rgb(79, 185, 227);
    text-decoration: none;
    display: block;
    padding: 10px;
    color: #333;
    font-weight: bold;
}

nav a:hover {
    background-color: rgba(207, 232, 220, 0.7);
}

.related {
    background-color: rgba(79, 185, 227, 0.3);
    border: 1px solid rgb(79, 185, 227);
    padding: 10px;
}

.sidebar {
    background-color: rgba(207, 232, 220, 0.5);
    padding: 10px;
}

article {
    margin-bottom: 1em;
}
</code></pre>

<p>レイアウトの変更は行っていませんが、ドキュメントのソースはコンテンツが読みやすいように並べられています。 これは重要な最初のステップであり、コンテンツがスクリーンリーダーで読み上げられる場合に理解できるようにするものです。</p>

<pre class="brush: html notranslate"><code>&lt;body&gt;
    &lt;div class="wrapper"&gt;
      &lt;header&gt;
        &lt;nav&gt;
          &lt;ul&gt;
            &lt;li&gt;&lt;a href=""&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=""&gt;Contact&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=""&gt;Meet the team&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=""&gt;Blog&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/nav&gt;
      &lt;/header&gt;
      &lt;main&gt;
        &lt;article&gt;
          &lt;div class="content"&gt;
            &lt;h1&gt;Veggies!&lt;/h1&gt;
            &lt;p&gt;
              ...
            &lt;/p&gt;
          &lt;/div&gt;
          &lt;aside class="related"&gt;
            &lt;p&gt;
              ...
            &lt;/p&gt;
          &lt;/aside&gt;
        &lt;/article&gt;

        &lt;aside class="sidebar"&gt;
          &lt;h2&gt;External vegetable-based links&lt;/h2&gt;
          &lt;ul&gt;
            &lt;li&gt;
              ...
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/aside&gt;
      &lt;/main&gt;

      &lt;footer&gt;&lt;p&gt;&amp;copy;2019&lt;/p&gt;&lt;/footer&gt;
    &lt;/div&gt;
  &lt;/body&gt;
</code></pre>

<p>この単純なレイアウトはモバイルでもうまく機能します。 開発ツールのレスポンシブデザインモードでレイアウトを眺めると、サイトのモバイルビューそのものと同じように機能することがわかります。</p>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/step1.html">ステップ1を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/step1.html">ソースを表示</a>します。</p>

<p><strong>この例をフォローして実装してみたい場合は、コンピューターに <a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/step1.html">step1.html</a> のローカルコピーを作成します。</strong></p>

<p>このポイントから、行の長さが非常に長くなり、ナビゲーションのためのスペースが水平線で表示されるまで、レスポンシブデザインモードのビューのドラッグを始めます。 これが、最初のメディアクエリーを追加する場所です。 <code>em</code> を使用すると、ユーザーがテキストのサイズを大きくした場合、テキストのサイズが小さいユーザーよりも、同様の行長で広いビューポートでブレークポイントが発生します。</p>

<p><strong>step1.html の CSS の下部に以下のコードを追加します。</strong></p>

<pre class="brush: css notranslate"><code>@media screen and (min-width: 40em) {
    article {
        display: grid;
        grid-template-columns: 3fr 1fr;
        column-gap: 20px;
    }

    nav ul {
        display: flex;
    }

    nav li {
        flex: 1;
    }
}
</code></pre>

<p>この CSS は、記事（<code>article</code>）内の2列のレイアウトで、記事のコンテンツ（<code>content</code>）および余談（<code>aside</code>）要素の関連（<code>related</code>）情報を提供します。 また、フレックスボックスを使用してナビゲーション（<code>nav</code>）を1行に配置します。</p>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/step2.html">ステップ2を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/step2.html">ソースを表示</a>します。</p>

<p>サイドバー（<code>sidebar</code>）が新しい列を形成するのに十分なスペースがあると感じるまで、幅を拡張し続けます。 メディアクエリー内で、主要な（<code>main</code>）要素を2列のグリッドにします。 次に、2つのサイドバーが互いに揃うように <code>article</code> の {{cssxref("margin-bottom")}} を削除する必要があります。 フッター（<code>footer</code>）の上部に {{cssxref("border")}} を追加します。 通常、これらの小さな調整は、各ブレークポイントでデザインをきれいに見せるために行うことです。</p>

<p><strong>再び、step1.html の CSS の下部に以下のコードを追加します。</strong></p>

<pre class="brush: css notranslate"><code>@media screen and (min-width: 70em) {
    main {
        display: grid;
        grid-template-columns: 3fr 1fr;
        column-gap: 20px;
    }

    article {
        margin-bottom: 0;
    }

    footer {
        border-top: 1px solid #ccc;
        margin-top: 2em;
    }
}</code>
</pre>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/step3.html">ステップ3を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/step3.html">ソースを表示</a>します。</p>

<p>さまざまな幅で最後の例を見ると、デザインがどのように反応し、利用可能な幅に応じて1列、2列、または3列として機能するかを確認できます。 これは、モバイルファースト レスポンシブデザインの非常に単純な例です。</p>

<h2 id="The_viewport_meta_tag">The viewport meta tag</h2>

<p>If you look at the HTML source in the above example, you'll see the following element included in the head of the document:</p>

<pre class="brush: html notranslate">&lt;meta name="viewport" content="width=device-width,initial-scale=1"&gt;</pre>

<p>This is the <a href="/ja/docs/Mozilla/Mobile/Viewport_meta_tag">viewport meta tag</a> — it exists as a way control how mobile browsers render content. This is needed because by default, most mobile browsers lie about their viewport width. Non-responsive sites commonly look really bad when rendered in a narrow viewport, so mobile browsers usually render the site with a viewport width wider than the real device width by default (usually 960 pixels), and then shrink the rendered result so that it fits in the display.</p>

<p>This is all well and good, but it means that responsive sites are not going to work as expected. If the viewport width is reported as 960 pixels, then mobile layouts (for example created using a media query of <code>@media screen and (max-width: 600px) { ... }</code>) are not going to render as expected.</p>

<p>To remedy this, including a viewport meta tag like the one above on your page tells the browser "don't render the content with a 960 pixel viewport — render it using the real device width instead, and set a default initial scale level for better consistency." The media queries will then kick in as expected.</p>

<p>There are a number of other options you can put inside the <code>content</code> attribute of the viewport meta tag — see <a href="/ja/docs/Mozilla/Mobile/Viewport_meta_tag">Using the viewport meta tag to control layout on mobile browsers</a> for more details.</p>

<h2 id="Do_you_really_need_a_media_query" name="Do_you_really_need_a_media_query">メディアクエリーが本当に必要ですか？</h2>

<p>フレックスボックス、グリッド、および段組みのレイアウトはすべて、メディアクエリーを必要とせずに、柔軟でレスポンシブなコンポーネントを作成する方法を提供します。 これらのレイアウト方法が、メディアクエリーを追加せずに目的を達成できるかどうかを常に検討する価値があります。 例えば、少なくとも 200 ピクセル幅のカードのセットが必要な場合があります。 これらの 200 ピクセルの多くは、<code>main</code> の <code>article</code> に収まります。 これは、メディアクエリーをまったく使用せずに、グリッドレイアウトで実現できます。</p>

<p>これは、次を使用して実現できます。</p>

<pre class="brush: html notranslate"><code>&lt;ul class="grid"&gt;
    &lt;li&gt;
        &lt;h2&gt;Card 1&lt;/h2&gt;
        &lt;p&gt;...&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;h2&gt;Card 2&lt;/h2&gt;
        &lt;p&gt;...&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;h2&gt;Card 3&lt;/h2&gt;
        &lt;p&gt;...&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;h2&gt;Card 4&lt;/h2&gt;
        &lt;p&gt;...&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;h2&gt;Card 5&lt;/h2&gt;
        &lt;p&gt;...&lt;/p&gt;
    &lt;/li&gt;
&lt;/ul&gt;</code></pre>

<pre class="brush: css notranslate"><code>.grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.grid li {
    border: 1px solid #666;
    padding: 10px;
}</code></pre>

<p>ブラウザーで<a href="https://mdn.github.io/css-examples/learn/media-queries/grid.html">グリッドレイアウトの例を開く</a>か、<a href="https://github.com/mdn/css-examples/blob/master/learn/media-queries/grid.html">ソースを表示</a>します。</p>

<p>ブラウザーで例を開いた状態で、画面を拡大および縮小して、列トラック数の変更を確認します。 このメソッドの良い点は、グリッドがビューポートの幅ではなく、このコンポーネントで使用可能な幅を見ていることです。 メディアクエリーに関するセクションに、それがまったく必要ないかもしれないという提案をまとめるのは奇妙に思えるかもしれません！ しかしながら、実際には、メディアクエリーで強化された最新のレイアウト方法を適切に使用すると、最良の結果が得られることがわかります。</p>

<h2 id="Test_your_skills!">Test your skills!</h2>

<p>You've reached the end of this article, but can you remember the most important information? You can find a test to verify that you've retained this information before you move on — see <a href="/ja/docs/Learn/CSS/CSS_layout/rwd_skills">Test your skills: Responsive Web Design</a>.</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>このレッスンでは、メディアクエリーについて学び、実際にそれらを使用してモバイルファースト レスポンシブデザインを作成する方法もみいだしました。</p>

<p>作成した開始点を使用して、さらにメディアクエリーをテストできます。 例えば、<code>pointer</code> メディア特性を使用して、訪問者が粗いポインターを持つことを検出した場合、ナビゲーションのサイズを変更できます。</p>

<p>また、さまざまなコンポーネントを追加して、メディアクエリーを追加するか、フレックスボックスやグリッドなどのレイアウト方法を使用するのがコンポーネントをレスポンシブにするのに最も適切な方法かどうかを試すこともできます。 多くの場合、正しい方法も間違った方法もありません。 あなたのデザインとコンテンツに最適な方法を試してみてください。</p>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール内の文書</h2>

<ul>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Introduction">CSS レイアウト入門</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Normal_Flow">通常フロー</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Grids">グリッド</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Floats">フロート</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Positioning">位置指定</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">段組みレイアウト</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Responsive_Design">レスポンシブデザイン</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Media_queries">メディアクエリーの初心者向けガイド</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">過去のレイアウト方法</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">古いブラウザーのサポート</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension">基礎的なレイアウトの理解</a></li>
</ul>
