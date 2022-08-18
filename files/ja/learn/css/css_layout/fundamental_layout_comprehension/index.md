---
title: 基礎的なレイアウトの理解
slug: Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension
tags:
  - Assessment
  - Beginner
  - CSS
  - Layout
  - Learn
translation_of: Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}</div>

<p class="summary"><span class="seoSummary">このモジュールを乗り越えてきたならば、今日 CSS レイアウトを行うために知っておくべきことや、より古い CSS を使って作業するために必要なことの基本についてはすでに説明しているはずです。 このタスクでは、さまざまなテクニックを使用して簡単なウェブページレイアウトを作成することによって、あなたの知識の一部をテストします。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>この評価を試みる前に、このモジュールのすべての記事を読んでおくべきです。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>このモジュールで説明してきた基本的なレイアウトスキルの理解をテストすること。</td>
  </tr>
 </tbody>
</table>

<h2 id="Project_Brief" name="Project_Brief">プロジェクトの概要</h2>

<p>生の HTML、基本的な CSS、そして画像が提供されています — これで、次の画像にそっくりなデザインのレイアウトを作成する必要があります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16076/layout-task-complete.png" style="height: 706px; width: 1000px;"></p>

<h3 id="Basic_Setup" name="Basic_Setup">基本設定</h3>

<p>HTML、CSS、および6枚の画像を<a href="https://github.com/mdn/learning-area/tree/master/css/css-layout/fundamental-layout-comprehension">ここからダウンロード</a>できます。</p>

<p>HTML ドキュメントとスタイルシートをコンピュータ上のディレクトリに保存し、画像を <code>images</code> という名前のフォルダに追加します。 ブラウザーで <code>index.html</code> ファイルを開くと、次の画像のような基本的なスタイルは設定されているがレイアウトが設定されていないページが表示されます。</p>

<p>この出発点には、通常フローでブラウザーに表示されるレイアウトのすべての内容が含まれています。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16075/layout-task-start.png" style="height: 675px; width: 1000px;"></p>

<h3 id="Your_tasks" name="Your_tasks">あなたのタスク</h3>

<p>あなたは今レイアウトを実装する必要があります。 達成する必要があるタスクは次のとおりです。</p>

<ol>
 <li>ナビゲーション項目を、項目間に等間隔のスペースを置いて、1行に並べて表示します。</li>
 <li>ナビゲーションバーはコンテンツと一緒にスクロールし、ビューポートの上部に到達するとそこに固定されるべきです。</li>
 <li>記事の中にある画像は、それを囲むテキストを持つべきです。</li>
 <li>{{htmlelement("article")}} 要素と {{htmlelement("aside")}} 要素は、2列のレイアウトとして表示するべきです。 ブラウザーウィンドウが小さくなると列が狭くなるように、列は柔軟なサイズにするべきです。</li>
 <li>写真は、画像間に1ピクセルの間隔を空けて2列のグリッドとして表示するべきです。</li>
</ol>

<p>このレイアウトを実現するために HTML を編集する必要はなく、使用するべきテクニックは次のとおりです。</p>

<ul>
 <li>位置指定</li>
 <li>フロート</li>
 <li>フレックスボックス</li>
 <li>CSS グリッドレイアウト</li>
</ul>

<p>これらのタスクのいくつかを達成することができるいくつかの方法があり、物事を行うための唯一の正しい方法も間違った方法も、多くの場合ありません。 いくつかの異なる方法を試して、どれが最もうまくいくかを確かめてください。 実験しながらメモを取ってください。 この演習のディスカッションスレッドまたは <a href="irc://irc.mozilla.org/mdn">#mdn</a> IRC チャンネルで、自分のアプローチについて常に議論することができます。</p>

<h2 id="Assessment" name="Assessment">評価</h2>

<p>組織的コースの一環としてこの評価に従っている場合は、採点のために作品を教師や指導者に渡すことができるはずです。 自己学習をしている場合は、<a href="https://discourse.mozilla.org/t/fundamental-layout-comprehension-assessment/29982">この演習についてのディスカッションスレッド</a>や <a href="https://wiki.mozilla.org/IRC">Mozilla IRC</a> の <a href="irc://irc.mozilla.org/mdn">#mdn</a> IRC チャンネルで尋ねることで、かなり簡単に採点の手引きを得ることができます。 まず演習を試してみてください — 不正行為によって得られるものは何もありません！</p>

<div>{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}</div>

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
