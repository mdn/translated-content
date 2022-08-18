---
title: モバイルのアクセシビリティ
slug: Learn/Accessibility/Mobile
tags:
  - Accessibility
  - コードスクリプト
  - スクリーンリーダー
  - タッチ
  - モバイル
  - レスポンシブ
  - 初心者
  - 学習
  - 記事
translation_of: Learn/Accessibility/Mobile
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}</div>

<p class="summary">モバイルデバイスでのウェブアクセスは非常に人気があり、iOS や Android などの一般的なプラットフォームには本格的なアクセシビリティツールが備わっているため、これらのプラットフォームでのウェブコンテンツのアクセシビリティを考慮することが重要です。この記事では、モバイル固有のアクセシビリティについて検討します。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識</th>
   <td>基本的なコンピューターの知識、HTML、CSS、JavaScript の基本的な知識、<a href="/ja/docs/Learn/Accessibility">前回までの記事</a>の理解。</td>
  </tr>
  <tr>
   <th scope="row">学習目標</th>
   <td>モバイルデバイスのアクセシビリティにどのような問題があるのか、またそれらを克服する方法を理解すること。</td>
  </tr>
 </tbody>
</table>

<h2 id="Accessibility_on_mobile_devices" name="Accessibility_on_mobile_devices">モバイルデバイスのアクセシビリティ</h2>

<p>アクセシビリティの現状と、ウェブ標準全般のサポートは、現代のモバイルデバイスでは優れています。モバイルデバイスがデスクトップブラウザーとはまったく異なるウェブ技術を実行し、開発者がブラウザースニッフィングを使用してそれらを完全に別々のサイトで提供することを余儀なくされた時代は終わりました（ただし、かなりの数の企業が依然としてモバイルデバイスの使用を検出し、それらに別のモバイルドメインを提供しています）。</p>

<p>最近の一般的なモバイルデバイスは、「脂肪分たっぷり」のウェブサイトを扱うことができ、主なプラットフォームには視覚障害のあるユーザーがそれらをうまく使えるようにスクリーンリーダーが組み込まれています。最近のモバイルブラウザーは <a href="/ja/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA</a> もよくサポートしています。</p>

<p>ウェブサイトをモバイルでアクセス可能かつ使用可能にするには、一般的な優れたウェブデザインとアクセシビリティのベストプラクティスに従う必要があるだけです。</p>

<p>モバイルに特別な配慮が必要な例外がいくつかあります。主なものは次のとおりです。</p>

<ul>
 <li>制御機構 — ボタンのようなインターフェイスのコントロールが、デスクトップやラップトップ（主にマウスとキーボード）と同様に、モバイル（主にタッチスクリーン）でアクセス可能であることを確認する。</li>
 <li>ユーザー入力 — モバイルでのユーザー入力要件をできるだけ苦痛でないものにします（例えば、フォームでは、タイピングを最小限に抑えます）。</li>
 <li>レスポンシブデザイン — レイアウトがモバイルで機能することを確認し、画像のダウンロードサイズを節約し、高解像度画面用の画像の提供について検討します。</li>
</ul>

<h2 id="Summary_of_screenreader_testing_on_Android_and_iOS" name="Summary_of_screenreader_testing_on_Android_and_iOS">Android および iOS でのスクリーンリーダーテストの概要</h2>

<p>最も一般的なモバイルプラットフォームは完全に機能的なスクリーンリーダーを持っています。これらはデスクトップのスクリーンリーダーとほとんど同じように機能しますが、キーの組み合わせではなくタッチジェスチャーを使用して主に操作される点が異なります。</p>

<p>主な 2 つを見てみましょう: Android の TalkBack と iOS の VoiceOver です。</p>

<h3 id="Android_TalkBack" name="Android_TalkBack">Android TalkBack</h3>

<p>TalkBack スクリーンリーダーは Android オペレーティングシステムに組み込まれています。</p>

<p>オンにするには、スマートフォンのモデルと Android バージョンを調べて、TalkBack メニューの場所を探します。これは Android のバージョンやスマートフォンのモデルによっても大きく違います。あるスマートフォンメーカー(Samusung など)では、最新の機種で TalkBack がなくて、代わりに独自のスクリーンリーダーを選んでいることもあります。</p>

<p>TalkBack メニューが見つかったら、スライダースイッチを押してオンにします。画面に表示される追加の指示に従います。</p>

<p>TalkBack がオンになっているとき、あなたの Android デバイスの基本的なコントロールは少し違います。例えば、</p>

<ol>
 <li> アプリをシングルタップするとそれが選択され、デバイスはそのアプリが何かを読み上げます。</li>
 <li>左右にスワイプすると、アプリ間、またはコントロールバーにいる場合はボタンやコントロールの間を移動します。デバイスは各オプションを読み上げます。</li>
 <li>どこでもダブルタップするとアプリが開いたり、オプションが選択されたりします。</li>
 <li>また、「タッチで探索」することもできます — ドラッグ（指を画面に置いたまま移動）すると、デバイスは移動先のさまざまなアプリや項目を読み上げます。</li>
</ol>

<p>TalkBack をオフにしたい場合は、</p>

<ol>
 <li>上記のジェスチャーを使用して [設定] アプリに移動します。</li>
 <li>[ユーザー補助] &gt; [TalkBack] に移動します。</li>
 <li>スライダースイッチに移動してアクティブにすると、オフになります。</li>
</ol>

<div class="blockIndicator note">
<p><strong>注</strong>: 連続した動きで上にスワイプしてから左にスワイプすると、いつでもホーム画面にアクセスできます。複数のホーム画面がある場合は、左右に 2本指でスワイプすることでそれらの間を移動できます。</p>
</div>

<p>TalkBack ジェスチャーのより完全なリストについては、<a href="https://support.google.com/accessibility/android/answer/6151827?hl=ja">TalkBack ジェスチャーを利用する</a>を参照してください。</p>

<h4 id="Unlocking_the_phone" name="Unlocking_the_phone">端末のロックを解除する</h4>

<p>TalkBack がオンになっているとき、端末のロック解除は少し違います。</p>

<p>ロック画面の下から上に 2本指でスワイプすることができます。デバイスのロックを解除するためのパスコードまたはパターンを設定している場合は、関連する入力画面に移動して入力します。</p>

<p>画面の中央下部にある [ロック解除] ボタンをタッチで探索してから、ダブルタップすることもできます。</p>

<h4 id="Global_and_local_menus" name="Global_and_local_menus">グローバルメニューとローカルメニュー</h4>

<p>TalkBack を使用すると、デバイス上のどこに移動しても、グローバルおよびローカルのコンテキストメニューにアクセスできます。前者はデバイス全体に関するグローバルオプションを提供し、後者は現在のアプリや画面だけに関するオプションを提供します。</p>

<p>これらのメニューにアクセスするには、</p>

<ol>
 <li>すばやく下にスワイプしてから右にスワイプしてグローバルメニューにアクセスします。</li>
 <li>すばやく上にスワイプしてから右にスワイプしてローカルメニューにアクセスします。</li>
 <li>左右にスワイプしてさまざまなオプションを切り替えます。</li>
 <li>必要なオプションを選択したら、ダブルタップしてそのオプションを選択します。</li>
</ol>

<p>グローバルおよびローカルのコンテキストメニューで使用可能なすべてのオプションの詳細については、<a href="https://support.google.com/accessibility/android/answer/6007066?hl=ja">グローバル コンテキストメニューとローカル コンテキスト メニューを使う</a>を参照してください。</p>

<h4 id="Browsing_web_pages" name="Browsing_web_pages">ウェブページのブラウジング</h4>

<p>ウェブブラウザーでローカルコンテキストメニューを使用して、見出し、フォームコントロール、リンク、行単位の移動などウェブページを移動するためのオプションを見つけることができます。</p>

<p>例えば、TalkBack をオンにした場合、</p>

<ol>
 <li>ウェブブラウザーを開きます。</li>
 <li>URL バーをアクティブにします。</li>
 <li>Ebbc.co.uk のフロントページのように、見出しがたくさんあるウェブページを入力します。URL のテキストを入力するには、
  <ul>
   <li>URL バーが得られるまで左右にスワイプしてから、ダブルタップして URL バーを選択します。</li>
   <li>目的の文字が得られるまで仮想キーボードに指を置いたまま動かしてから、指を離して入力します。これを各文字について繰り返します。</li>
   <li>終わったら、<kbd>Enter</kbd> キーを見つけて押します。</li>
  </ul>
 </li>
 <li>左右にスワイプすると、ページ上のさまざまな項目間を移動できます。</li>
 <li>連続した動きで上にスワイプしてから右にスワイプして、ローカルコンテキストメニューに入ります。</li>
 <li>[見出しとランドマーク] オプションが見つかるまで右にスワイプします。</li>
 <li>ダブルタップして選択します。これで、見出しと ARIA のランドマークの間を移動するために左右にスワイプすることができます。</li>
 <li>デフォルトモードに戻るには、上にスワイプしてから右にスワイプしてローカルコンテキストメニューに再度入り、[デフォルト] を選択してからダブルタップしてアクティブにします。</li>
</ol>

<p><strong>注</strong>: より完全なドキュメントは <a href="https://support.google.com/accessibility/android/answer/6283677?hl=ja">Android で TalkBack を使ってみる</a>をご覧ください。</p>

<h3 id="iOS_VoiceOver" name="iOS_VoiceOver">iOS VoiceOver</h3>

<p>VoiceOver のモバイル版は iOS オペレーティングシステムに組み込まれています。</p>

<p>それをオンにするには、あなたの設定アプリに行き、[一般] &gt; [アクセシビリティ] &gt; [VoiceOver] を選択してください。VoiceOver スライダを押して有効にします（このページには VoiceOver に関連する他の多数のオプションも表示されます）。</p>

<div class="blockIndicator note">
<p><strong>記</strong>: 古い iOS 端末では VoiceOver メニューは <em>設定</em> &gt; <em>一般</em> &gt; <em>アクセシビリティ</em> &gt; <em>VoiceOver</em>にあります。</p>
</div>

<p>VoiceOver が有効になると、iOS の基本的なコントロールジェスチャーは次のように少し違います。</p>

<ol>
 <li>シングルタップすると、タップした項目が選択されます。デバイスはあなたがタップした項目を読み上げるでしょう。</li>
 <li>左右にスワイプして項目間を移動したり、画面上で指をスライドさせてさまざまな項目間を移動したりして、画面上の項目を移動することもできます（必要な項目が見つかったら、指を離して選択できます）。</li>
 <li>選択した項目をアクティブにする（例えば、選択したアプリを開く）には、画面上のどこでもダブルタップします。</li>
 <li>3本指でスワイプしてページをスクロールします。</li>
 <li>カメラアプリで写真を撮るなど、状況に応じたアクションを実行するには、2本指でタップします。</li>
</ol>

<p>もう一度オフにするには、上記のジェスチャを使用して [設定] &gt; [一般] &gt; [アクセシビリティ] &gt; [VoiceOver] に戻り、[VoiceOver] スライダをオフに切り替えます。</p>

<h4 id="Unlock_phone" name="Unlock_phone">端末のロック解除</h4>

<p>端末のロックを解除するには、通常どおりホームボタンを押す（またはスワイプする）必要があります。パスコードが設定されている場合は、上で説明したようにスワイプ/スライドして各番号を選択し、次に正しい番号を見つけたらダブルタップして各番号を入力できます。</p>

<h4 id="Using_the_Rotor" name="Using_the_Rotor">ローターを使用する</h4>

<p>VoiceOver がオンになっているとき、ローターと呼ばれるナビゲーション機能を使えます。それは素早く多くの一般的で役に立つオプションから選ぶことを可能にします。それを使用するには、</p>

<ol>
 <li>ダイヤルを回すように、画面上で 2本の指をひねります。あなたがさらにひねるにつれて、各オプションを読み上げるでしょう。あなたは行ったり来たりしてオプションを切り替えることができます。</li>
 <li>あなたが望むオプションを見つけたら、
  <ul>
   <li>指を離して選択します。</li>
   <li>それが（音量や話す速度のような）値を反復できるオプションである場合は、選択した項目の値を増減するために上下にスワイプすることができます。</li>
  </ul>
 </li>
</ol>

<p>ローターで利用可能なオプションは状況依存型です — それらはどのアプリやビューにいるかによって異なります（例については下記を参照）。</p>

<h4 id="Browsing_web_pages_2" name="Browsing_web_pages_2">ウェブページのブラウジング</h4>

<p>VoiceOver を使ったウェブブラウジングを試してみましょう。</p>

<ol>
 <li>ウェブブラウザーを開きます。</li>
 <li>URL バーをアクティブにします。</li>
 <li>bbc.co.uk のフロントページのように、見出しがたくさんあるウェブページを入力します。URL のテキストを入力するには、
  <ul>
   <li> URL バーが得られるまで左右にスワイプしてダブルタップし、URL バーを選択します。</li>
   <li>各文字について、目的の文字が得られるまで仮想キーボードに指を置いたまま動かしてから、指を離して選択します。ダブルタップして入力します。</li>
   <li>終ったら、<kbd>Enter</kbd> キーを見つけて押します。</li>
  </ul>
 </li>
 <li>左右にスワイプすると、ページ上の項目間を移動できます。項目をダブルタップして選択することができます（例えば、リンクをたどる）。</li>
 <li>デフォルトでは、選択されたローターオプションは話す速度です。現在は上下にスワイプして話す速度を上げ下げできます。</li>
 <li>今、ダイヤルのように 2本指で画面を回転させてローターを表示し、ローターのオプション間を移動します。利用可能なオプションの例をいくつか示します。
  <ul>
   <li>話す速度: 話す速度を変更します。</li>
   <li>コンテナ: ページ上のさまざまな意味論的コンテナ間を移動します。</li>
   <li>見出し: ページ上の見出し間を移動します。</li>
   <li>リンク: ページ上のリンク間を移動します。</li>
   <li>フォームコントロール: ページ上のフォームコントロール間を移動します。</li>
   <li>言語: 利用可能な場合は、さまざまな翻訳間を移動します。</li>
  </ul>
 </li>
 <li>見出しを選択します。これで、上下にスワイプしてページ上の見出し間を移動できます。</li>
</ol>

<p>注: 利用可能な VoiceOver ジェスチャおよび iOS でのアクセシビリティテストに関するその他のヒントを網羅した詳細なリファレンスについては、<a href="https://developer.apple.com/library/archive/technotes/TestingAccessibilityOfiOSApps/TestAccessibilityonYourDevicewithVoiceOver/TestAccessibilityonYourDevicewithVoiceOver.html">VoiceOver を使用してデバイスのアクセシビリティをテストする</a>（英語）を参照してください。</p>

<h2 id="Control_mechanisms" name="Control_mechanisms">制御機構</h2>

<p>CSS および JavaScript のアクセシビリティの記事では、特定の種類の制御機構に固有のイベントの概念を調べました（<a href="/ja/docs/Learn/Accessibility/CSS_and_JavaScript#mouse-specific_events">マウスに特有のイベント</a>を参照）。要約すると、他の制御機構は関連する機能をアクティブにできないため、これらはアクセシビリティの問題を引き起こします。</p>

<p>例えば、<a href="/ja/docs/Web/API/GlobalEventHandlers/onclick">click</a> イベントはアクセシビリティの点で優れています — 関連付けられているイベントハンドラは、ハンドラが設定されている要素をクリックするか、タブ移動して <kbd>Enter</kbd> / <kbd>Return</kbd> キーを押すか、タッチスクリーンデバイスでタップすることで起動できます。<a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/simple-button-example.html">simple-button-example.html</a> の例を試してみてください（<a href="http://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html">ライブで動いているのを見る</a>）。</p>

<p>あるいは、<a href="/ja/docs/Web/API/GlobalEventHandlers/onmousedown">mousedown</a> や <a href="/ja/docs/Web/API/GlobalEventHandlers/onmouseup">mouseup</a> のようなマウス固有のイベントは問題を引き起こします — それらのイベントハンドラはマウス以外の制御を使って呼び出すことはできません。</p>

<p>キーボードまたはタッチで、<a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/simple-box-drag.html">simple-box-drag.html</a> の例を制御しようとすると、問題が発生します（<a href="http://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html">ライブで例を見る</a>）。これは、次のようなコードを使用しているために発生します。</p>

<pre><code>div.onmousedown = function() {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
}

document.onmouseup = stopMove;</code></pre>

<p>他の形式の制御を有効にするには、異なるが同等のイベントを使用する必要があります — 例えば、タッチイベントはタッチスクリーンデバイスで機能します。</p>

<pre><code>div.ontouchstart = function(e) {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
}

panel.ontouchend = stopMove;</code></pre>

<p>マウスイベントとタッチイベントを一緒に使用する方法を示す簡単な例を示しました — <a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/multi-control-box-drag.html">multi-control-box-drag.html</a> を参照してください（<a href="http://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html">この例もライブで見てください</a>）。</p>

<p><strong>注</strong>: <a href="/ja/docs/Games/Techniques/Control_mechanisms">ゲーム制御機構の実装</a>では、さまざまな制御機構を実装する方法を示す完全に機能する例も見ることができます。</p>

<h2 id="Responsive_design" name="Responsive_design">レスポンシブデザイン</h2>

<p><a href="/ja/docs/Web/Progressive_web_apps">レスポンシブデザイン</a>は、画面のサイズや解像度などの要因に応じて、レイアウトやその他のアプリの機能を動的に変更することです。だから、さまざまなデバイスタイプのユーザーにとって使用可能でアクセス可能です。</p>

<p>特に、モバイルに関して対処する必要がある最も一般的な問題は次のとおりです。</p>

<ul>
 <li>モバイルデバイス用のレイアウトの適合性。例えば、複数列のレイアウトは狭い画面ではうまくいきませんし、見やすくするためにテキストサイズを大きくする必要があるかもしれません。このような問題は、<a href="/ja/docs/Web/CSS/Media_Queries">メディアクエリ</a>、<a href="/ja/docs/Mobile/Viewport_meta_tag">ビューポート</a>、<a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a>などの技術を使用してレスポンシブレイアウトを作成することで解決できます。</li>
 <li>ダウンロードした画像サイズを節約する。一般的に、小型画面のデバイスは、デスクトップと同等の大きさの画像を必要としませんし、低速のネットワーク接続上にある可能性が高くなります。したがって、必要に応じて狭い画面のデバイスに小さい画像を提供することが賢明です。<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">レスポンシブ画像のテクニック</a>を使用してこれを扱えます。</li>
 <li>高解像度について考える。多くのモバイルデバイスは高解像度の画面を持っているため、ディスプレイがくっきりと鮮明に見えるようにするために、より高解像度の画像が必要です。ここでも、レスポンシブ画像テクニックを使用して、必要に応じて画像を提供できます。さらに、SVG ベクター画像フォーマットを使用して多くの画像要件を満たすことができます。これは今日のブラウザー間で十分にサポートされています。SVG はファイルサイズが小さく、表示されているサイズに関係なく鮮明に保たれます（詳細は<a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web">ウェブにベクターグラフィックスを追加する</a>を参照）。</li>
</ul>

<p><strong>注</strong>: レスポンシブデザインのテクニックについては、MDN の他の場所で説明されているため、ここでは詳しく説明しません（上記のリンクを参照）。</p>

<h3 id="Specific_mobile_considerations" name="Specific_mobile_considerations">特定のモバイルに関する考慮事項</h3>

<p>モバイルでサイトにアクセスしやすくするために考慮すべき他の重要な問題があります。ここにその一部を列挙しましたが、私たちがそれらを考えるときにはさらに追加します。</p>

<h4 id="Not_disabling_zoom" name="Not_disabling_zoom">ズームを無効にしない</h4>

<p><a href="/ja/docs/Mobile/Viewport_meta_tag">ビューポート</a>を使用すると、ズームを無効にすることができます。常にリサイズ可能にして、{{htmlelement("head")}} で端末の幅にあわせるにはこうします:</p>

<pre class="brush: html"><code>&lt;meta name="viewport" content="width=device-width; user-scalable=yes"&gt;</code></pre>

<p>なるべく<code>user-scalable=no</code> とはセットしないでください — 多くの人があなたのウェブサイトのコンテンツを見るためにズームに頼るので、この機能を奪うことは本当に悪い考えです。ズーミングによって UI が壊れる場合があります。そのような場合、絶対にズームを無効にする必要があると感じる場合は、UI を壊さないようにテキストサイズを大きくするためのコントロールのような、他の同等の機能を提供するべきです。</p>

<h4 id="Keeping_menus_accessible" name="Keeping_menus_accessible">メニューにアクセスしやすくする</h4>

<p>モバイルデバイスでは画面が非常に狭いため、メディアクエリやその他の技術を使用して、ナビゲーションメニューをディスプレイ上部の小さなアイコンに縮小するのがとても一般的です — これは一般的に「3本の水平線」アイコンで表され、デザインパターンでは「ハンバーガーメニュー」と呼ばれています — サイトがモバイルで表示されるときに必要です。</p>

<p>そのようなメニューを実装するときは、上記の制御機構で説明したように、それを明らかにするためのコントロールは適切な制御機構（通常はモバイル用タッチ）でアクセスできること確認する必要があります。また、メニューの操作中に混乱しないように、メニューにアクセスしている間はページの残りの部分が邪魔にならないように移動するか、何らかの方法で非表示にします。</p>

<p><a href="http://fritz-weisshart.de/meg_men/">良いハンバーガーメニューの例</a>（ドイツ語）を参照してください。</p>

<h2 id="User_input" name="User_input">ユーザー入力</h2>

<p>モバイルデバイスでは、データを入力することは、デスクトップコンピューター上の同等の経験よりもユーザーにとってより面倒なことが多いです。タッチスクリーンの仮想キーボードや小型のモバイル物理キーボードよりも、デスクトップやラップトップのキーボードを使用してテキストをフォーム入力に入力する方が便利です。</p>

<p>このため、必要なタイピングの量を最小限に抑えることを試みる価値があります。例として、通常のテキスト入力を使用して毎回ユーザーに役職を記入させるのではなく、最も一般的な選択肢を含む &lt;select&gt; メニューを提供できます（データ入力の一貫性を保つのにも役立ちます）。そして、それ以外の値を入力するテキストフィールドを表示する「その他」選択肢を提供できます。<a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/common-job-types.html">common-job-types.html</a> で、このアイデアの簡単な例を実際に見ることができます（<a href="http://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html">一般的な仕事の例をライブで見る</a>）。</p>

<p>モバイルプラットフォームでの日付などの HTML5 フォームの入力タイプを使用することも考慮する価値があります。例えば、Android と iOS の両方で、デバイスエクスペリエンスに適した使用可能なウィジェットが表示されます。いくつかの例については <a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/html5-form-examples.html">html5-form-examples.html</a> を参照してください（<a href="http://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html">HTML5 フォームの例をライブで見る</a>） - これらをモバイルデバイスでロードして操作してみてください。例えば、</p>

<ul>
 <li>番号（<code>number</code>）、電話番号（<code>tel</code>）、電子メール（<code>email</code>）の入力では、番号や電話番号を入力するための適切な仮想キーボードを表示します。</li>
 <li>日時（<code>date</code>, <code>time</code>）の入力では、日時を選択するための適切なピッカーを表示します。</li>
</ul>

<p>デスクトップとは別の解決策を提供したい場合は、機能検出を使用して、モバイルデバイスに常に別のマークアップを提供できます。さまざまな入力タイプの検出に関する生の情報については<a href="http://diveinto.html5doctor.com/detect.html#input-types">入力タイプ</a>（英語）を参照してください。また、より多くの情報については<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection">機能検出の記事</a>をチェックしてください。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>この記事では、モバイルのアクセシビリティ固有の一般的な問題とその解決方法について詳しく説明しました。また、アクセシビリティテストを支援するために、最も一般的なスクリーンリーダーの使い方を紹介しました。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.smashingmagazine.com/guidelines-for-mobile-web-development/">モバイルウェブ開発のためのガイドライン</a>（英語） — モバイルウェブデザインのためのさまざまな技術を網羅した <em>Smashing Magazine</em> の記事のリスト。</li>
 <li><a href="http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644">サイトをタッチデバイスで機能させる</a>（英語） — タッチイベントを使用してモバイルデバイスで対話を機能させるための便利な記事。</li>
</ul>

<div>{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}</div>

<div>
<h2 id="In_this_module" name="In_this_module">このモジュール内の文書</h2>

<ul>
 <li><a href="/ja/docs/Learn/Accessibility/What_is_accessibility">アクセシビリティとは？</a></li>
 <li><a href="/ja/docs/Learn/Accessibility/HTML">HTML: アクセシビリティの基礎</a></li>
 <li><a href="/ja/docs/Learn/Accessibility/CSS_and_JavaScript">CSS と JavaScript のアクセシビリティのベスト・プラクティス</a></li>
 <li><a href="/ja/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA の基本</a></li>
 <li><a href="/ja/docs/Learn/Accessibility/Multimedia">アクセシブルなマルチメディア</a></li>
 <li><a href="/ja/docs/Learn/Accessibility/Mobile">モバイルのアクセシビリティ</a></li>
 <li><a href="/ja/docs/Learn/Accessibility/Accessibility_troubleshooting">アクセシビリティのトラブルシューティング</a></li>
</ul>
</div>
