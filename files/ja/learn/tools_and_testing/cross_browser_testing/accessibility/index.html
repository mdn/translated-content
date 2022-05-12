---
title: よくあるアクセシビリティの問題を扱う
slug: Learn/Tools_and_testing/Cross_browser_testing/Accessibility
tags:
  - Accessibility
  - Article
  - Beginner
  - CSS
  - CodingScripting
  - HTML
  - JavaScript
  - Learn
  - Testing
  - Tools
  - cross browser
  - keyboard
translation_of: Learn/Tools_and_testing/Cross_browser_testing/Accessibility
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}</div>

<p class="summary">次に、私たちはアクセシビリティに注意を向け、一般的な問題、簡単なテストの方法、そしてアクセシビリティの問題を見つけるための監査/自動化ツールの使い方を説明します。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td>コア <a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、および <a href="/ja/docs/Learn/JavaScript">JavaScript</a> 言語に精通していること。 高水準の<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">クロスブラウザーテストの原則</a>の理解。</td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>一般的なアクセシビリティの問題を診断し、それらを修正するための適切なツールとテクニックを使用できるようにすること。</td>
  </tr>
 </tbody>
</table>

<h2 id="What_is_accessibility" name="What_is_accessibility">アクセシビリティとは？</h2>

<p>ウェブ技術のコンテキストでアクセシビリティと言うとき、ほとんどの人は即座にウェブサイトやアプリが障碍のある人にも使えるようにすることを考えます。 例えば、</p>

<ul>
 <li>視覚障碍者は、スクリーンリーダーや拡大/ズームを使用してテキストにアクセスします。</li>
 <li>運動機能障碍を持つ人々は、キーボード（または他のマウス以外の機能）を使用してウェブサイトの機能をアクティブ化します。</li>
 <li>聴覚障碍を持つ人々は、音声や動画のコンテンツのキャプション/字幕またはその他の代替テキストに依存しています。</li>
</ul>

<p>しかし、アクセシビリティが単に障碍に関するものであると言うのは間違っています。 実際、アクセシビリティの目的は、高性能デスクトップコンピュータを使用しているユーザーだけでなく、できるだけ多くのコンテキストで、できるだけ多くのユーザーがウェブサイトやアプリを使用できるようにすることです。 極端な例には次のものが含まれます。</p>

<ul>
 <li>モバイルデバイスのユーザー。</li>
 <li>テレビ、腕時計などの代替ブラウジングデバイスのユーザー。</li>
 <li>最新のブラウザーを搭載していない可能性がある古いデバイスのユーザー。</li>
 <li>低速プロセッサを搭載している可能性がある、低スペックデバイスのユーザー。</li>
</ul>

<p>ある意味では、このモジュール全体がアクセシビリティについてのものです — クロスブラウザーテストは、あなたのサイトができるだけ多くの人々によって使用できることを確認します。<a href="/ja/docs/Learn/Accessibility/What_is_accessibility"> アクセシビリティとは？</a>では、この記事よりも完全かつ徹底的にアクセシビリティを定義します。</p>

<p>とは言っても、この記事では、クロスブラウザーと障碍のある人々を取り巻く問題のテスト、そして彼らのウェブの使い方について説明します。 モジュール内の他の場所で、<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Responsive_design_problems">レスポンシブデザイン</a>と<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Performance_issues">パフォーマンス</a>のような他の分野についてはすでに説明しました。</p>

<div class="note">
<p><strong>注</strong>: ウェブ開発における多くのことと同様に、アクセシビリティは 100% 成功したかどうかではありません。 特にサイトが複雑になるにつれて、100% のアクセシビリティを全てのコンテンツに対して達成することはほとんど不可能です。 その代わりに、防御的なコーディングを介して、できるだけ多くの人があなたのコンテンツのできるだけ多くにアクセスできるようにし、ベストプラクティスに従うようにする努力をします。</p>
</div>

<h2 id="Common_accessibility_issues" name="Common_accessibility_issues">よくあるアクセシビリティの問題</h2>

<p>このセクションでは、従うべきベストプラクティスと共に、特定の技術と結びつけて、ウェブのアクセシビリティに関して生じる主な問題のいくつかと、サイトが正しい方向に進んでいるかどうかを確認するための簡単なテストについて、詳細を説明します。</p>

<div class="note">
<p><strong>注</strong>: アクセシビリティは道徳的に正しいことであり、ビジネスには適していますし（多くの障碍のあるユーザー、モバイルデバイスのユーザーなどが重要な市場セグメントを提示しています）、ウェブ資産を障碍のある人々がアクセスできないようにすることは、世界の多くの地域で法律にも違反しています。 詳しくは<a href="/ja/docs/Learn/Accessibility/What_is_accessibility#Accessibility_guidelines_and_the_law">アクセシビリティのガイドラインと法律</a>を読んでください。</p>
</div>

<h3 id="HTML" name="HTML">HTML</h3>

<p>意味論的 HTML（要素が正しい目的のために使用されているもの）は箱から出してすぐにアクセスできます — そのようなコンテンツは晴眼者でも読めますし（CSS を使用して、テキストを小さくしすぎたり、隠したりするような愚かなことはしないでください）、スクリーンリーダー（文字通りウェブページをユーザーに読み上げるアプリ）などの支援技術でも使用可能になり、他の利点も付与されます。</p>

<h4 id="Semantic_structure" name="Semantic_structure">意味論的構造</h4>

<p>意味論的 HTML で最も重要なすばやい勝利は、コンテンツに見出しと段落の構造を使用することです。 これは、スクリーンリーダーのユーザーが、必要なコンテンツをすばやく見つけるために文書の見出しを道標として使用する傾向があるためです。 あなたのコンテンツが見出しを持っていない場合、彼らが得るのは、何かを見つけるための道標のないテキストの巨大な壁だけです。 悪い HTML と良いHTML の例としては、</p>

<pre class="brush: html example-bad">&lt;font size="7"&gt;私の見出し&lt;/font&gt;
&lt;br&gt;&lt;br&gt;
これが私の文書の最初のセクションです。
&lt;br&gt;&lt;br&gt;
ここにも段落を追加します。
&lt;br&gt;&lt;br&gt;
&lt;font size="5"&gt;私の副見出し&lt;/font&gt;
&lt;br&gt;&lt;br&gt;
これが私の文書の最初のサブセクションです。 私は人々がこのコンテンツを見つけることができるようにしたいです！
&lt;br&gt;&lt;br&gt;
&lt;font size="5"&gt;私の2番目の副見出し&lt;/font&gt;
&lt;br&gt;&lt;br&gt;
これは私のコンテンツの2番目のサブセクションです。 私は最後のものよりも面白いと思います。</pre>

<pre class="brush: html example-good">&lt;h1&gt;私の見出し&lt;/h1&gt;

&lt;p&gt;これが私の文書の最初のセクションです。&lt;/p&gt;

&lt;p&gt;ここにも段落を追加します。&lt;/p&gt;

&lt;h2&gt;私の副見出し&lt;/h2&gt;

&lt;p&gt;これが私の文書の最初のサブセクションです。 私は人々がこのコンテンツを見つけることができるようにしたいです！&lt;/p&gt;

&lt;h2&gt;私の2番目の副見出し&lt;/h2&gt;

&lt;p&gt;これは私のコンテンツの2番目のサブセクションです。 私は最後のものよりも面白いと思います。&lt;/p&gt;</pre>

<p>さらに、あなたのコンテンツはそのソース順で論理的に意味があるべきです — あなたは後で CSS を使い、いつでもそれを望んだ所に置くことができますが、最初から正しいソース順を手にするべきです。</p>

<p>テストとして、あなたはサイトの CSS をオフにして、CSS がなければそれがどれほど理解できるか見ることができます。 コードから CSS を取り除くだけでこれを手動で行うことができますが、最も簡単な方法はブラウザー機能を使用することです。 例えば、</p>

<ul>
 <li>Firefox: メニューバーから [表示] &gt; [スタイルシート] &gt; [スタイルシートを使用しない] を選択します。</li>
 <li>Safari: メインメニューから [開発] &gt; [スタイルを無効にする] を選択します（[開発] メニューを有効にするには、[Safari] &gt; [環境設定] &gt; [詳細] &gt; [メニューバーに開発メニューを表示] を選択）。</li>
 <li>Chrome: Web Developer Toolbar 拡張機能をインストールしてから、ブラウザーを再起動します。 表示される歯車のアイコンをクリックしてから、[CSS] &gt; [全てのスタイルを無効にする] を選択します。</li>
 <li>Edge: メインメニューから [表示] &gt; [スタイル] &gt; [スタイルなし] を選択します。</li>
</ul>

<h4 id="Using_native_keyboard_accessibility" name="Using_native_keyboard_accessibility">ネイティブなキーボード・アクセシビリティを使う</h4>

<p>特定の HTML 機能はキーボードのみを使用して選択できます — これはデフォルトの動作で、ウェブの初期の頃から使用可能です。 この機能を持つ要素は、ユーザーがウェブページと対話することを可能にする一般的なもの、すなわちリンク、{{htmlelement("button")}}、そして {{htmlelement("input")}} のようなフォーム要素です。</p>

<p><a href="http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html">native-keyboard-accessibility.html</a> の例を使ってこれを試すことができます（<a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html">ソースコード</a>を見る） — これを新しいタブで開いて、そして <kbd>Tab</kbd> キーを押してみてください。 数回押すと、タブフォーカスがさまざまなフォーカス可能な要素を通過し始めます。 どの要素がフォーカスされているかわかるように、フォーカスされた要素には全てのブラウザーでハイライトされたデフォルトのスタイルが与えられます（ブラウザーによって若干異なります）。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14215/button-focused-unfocused.png" style="border-style: solid; border-width: 1px; display: block; height: 39px; margin: 0px auto; width: 288px;"></p>

<p>次に <kbd>Enter</kbd> / <kbd>Return</kbd> を押してフォーカスのあるリンクをたどるか、ボタンを押すか（ボタンにメッセージを知らせるための JavaScript が含まれています）、テキスト入力にテキストを入力するためにタイプし始めることができます（他のフォーム要素には異なるコントロールがあります。 例えば、{{htmlelement("select")}} 要素では、<kbd>上下の矢印</kbd>キーを使用してそのオプションを表示したり切り替えたりできます）。</p>

<p>ブラウザーが異なれば、使用可能なキーボードコントロールオプションも異なることに注意してください。 最近のほとんどのブラウザーは上記のタブパターンに従いますが（フォーカス可能な要素を逆方向に移動するために <kbd>Shift</kbd> + <kbd>Tab</kbd> を押すこともできます）、次のようにブラウザーによっては独自の特徴があります。</p>

<ul>
 <li>Mac 用の Firefox はデフォルトではタブ移動を行いません。 オンにするには、 [環境設定] &gt; [詳細] &gt; [一般] の順に選択してから、[常にページ内を移動するにはカーソルキーを使用する] のチェックを外します。 次に、Mac のシステム環境設定アプリを開き、[キーボード] &gt; [ショートカット] の順に選択して、[全てのコントロール] ラジオボタンを選択します。</li>
 <li>Safari では、デフォルトではリンクをタブ操作することはできません。 これを有効にするには、Safari の [環境設定] を開き、[詳細] に移動し、[Tab キーを押してウェブページの各項目をハイライトする] チェックボックスをオンにする必要があります。</li>
</ul>

<div class="warning">
<p><strong>重要</strong>: あなたが書く新しいページのどれでも、この種のテストを実行するべきです — 機能がキーボードによってアクセスできることを確認してください。</p>
</div>

<p>この例では、正しい仕事に正しい意味論的要素を使用することの重要性を強調しています。 任意の要素を、CSS でリンクやボタンのように見せたり、JavaScript でリンクやボタンのように振る舞うようにスタイルすることは可能ですが、実際にはリンクやボタンにはならず、あなたはこれらの要素が無料で与えるアクセシビリティの多くを失うでしょう。 あなたがそれを避けることができるならばしないでください。</p>

<p>もう1つのヒント — 次の例に示すように、{{cssxref(":focus")}} 疑似クラスを使用して、フォーカス可能要素のフォーカス時の外観をコントロールできます。 フォーカスとホバーのスタイルを倍増するのは良い考えです。 それにより、マウスやキーボードを使用しているかどうかに関わらず、ユーザーがコントロールをアクティブにしたときに何かが行われるという視覚的な手がかりを得ることができます。</p>

<pre class="brush: css">a:hover, input:hover, button:hover, select:hover,
a:focus, input:focus, button:focus, select:focus {
  font-weight: bold;
}</pre>

<div class="note">
<p><strong>注</strong>: CSS を使用してデフォルトのフォーカススタイルを取り除く場合は、デザインに適した他のスタイルに置き換えてください — これは非常に有用なアクセシビリティツールであり、取り除くべきではありません。</p>
</div>

<h4 id="Building_in_keyboard_accessibility" name="Building_in_keyboard_accessibility">キーボード・アクセシビリティを組み込む</h4>

<p>時にはキーボード・アクセシビリティを失うことが避けられないこともあります。 意味論的にあまり良くないサイトを継承したかもしれませんし（<code>&lt;div&gt;</code> で作られたボタンを生成する恐ろしい {{glossary("CMS")}} に行き着くかもしれません）、HTML5 の {{htmlelement("video")}} 要素のようにキーボード・アクセシビリティが組み込まれていない複雑なコントロールを使用しているかもしれません（驚くべきことに、Opera は <code>&lt;video&gt;</code> 要素のデフォルトのブラウザーコントロールをタブ操作できる唯一のブラウザーです）。 次のようないくつかの選択肢があります。</p>

<ol>
 <li><code>&lt;button&gt;</code> 要素（デフォルトでタブ移動可能）と JavaScript を使用してカスタムコントロールを作成し、それらの機能を関連付けます。 これについての良い例は、<a href="/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player">クロスブラウザーのビデオプレーヤーの作成</a>を参照してください。</li>
 <li>JavaScript でキーボードショートカットを作成すると、キーボードの特定のキーを押すことで機能をアクティブにできます。 あらゆる目的に適応できるゲーム関連の例については、<a href="/ja/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard">デスクトップのマウスとキーボードのコントロール</a>を参照してください。</li>
 <li>偽のボタンの振る舞いのために、いくつかの興味深い戦術を使ってください。 例えば、<a href="http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html">fake-div-buttons.html</a> の例を見てください（<a href="https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html">ソースコード</a>を見る）。 ここでは、それぞれの属性に <code>tabindex="0"</code> という属性を与えることで（もっと有用な詳細については WebAIM の <a href="http://webaim.org/techniques/keyboard/tabindex">tabindex の記事</a>（英語）を見てください）、偽の <code>&lt;div&gt;</code> ボタンにフォーカスできるようにしました（タブを介すことも含む）。 これにより、ボタンにタブ移動することはできますが、<kbd>Enter</kbd> / <kbd>Return</kbd> キーでそれらをアクティブにすることはできません。 そのためには、次のちょっとした JavaScript トリックを追加する必要があります。
  <pre class="brush: js">document.onkeydown = function(e) {
  if(e.keyCode === 13) { // The Enter/Return key
    document.activeElement.onclick(e);
  }
};</pre>
  ここでは、<code>document</code> オブジェクトにリスナーを追加して、キーボードのボタンが押されたことを検出します。 イベントオブジェクトの <code><a href="/ja/docs/Web/API/KeyboardEvent/keyCode">keyCode</a></code> プロパティを使ってどのボタンが押されたかをチェックし、<kbd>Return</kbd> / <kbd>Enter</kbd> と一致するキーコードであれば、<code>document.activeElement.onclick()</code> を使用してボタンの <code>onclick</code> ハンドラに格納されている関数を実行します。 <code><a href="/ja/docs/Web/API/Document/activeElement">activeElement</a></code> は現在ページにフォーカスしている要素を与えます。</li>
</ol>

<div class="note">
<p><strong>注</strong>: この手法は、イベントハンドラ・プロパティ（<code>onclick</code> など）を使ってオリジナルのイベントハンドラを設定した場合にのみ機能します。 <code>addEventListener</code> は機能しません。 これは、機能を再構築するための非常に面倒な作業です。 それに他にも問題があるはずです。 そもそも正しい要素を正しい仕事に使うほうがよいでしょう。</p>
</div>

<h4 id="Text_alternatives" name="Text_alternatives">代替テキスト</h4>

<p>代替テキストは、アクセシビリティにとって非常に重要です — ある人が視覚障碍または聴覚障碍を抱えているためにコンテンツを見たり聞いたりすることができなくなると、これが問題になります。 最も単純な代替テキストは、控え目な {{htmlattrxref("alt","img")}} 属性で、関連するコンテンツを含む全ての画像に含めるべきです。 これはスクリーンリーダーが拾ってユーザーに読み上げるために、ページ上にその意味と内容をうまく伝える画像の説明を含むべきです。</p>

<div class="note">
<p><strong>注</strong>: 詳しくは、<a href="/ja/docs/Learn/Accessibility/HTML#Text_alternatives">代替テキスト</a>をお読みください。</p>
</div>

<p>欠落している代替テキストは、アクセシビリティ<a href="#auditing_tools">監査ツール</a>を使用するなど、さまざまな方法でテストできます。</p>

<p>代替テキストは、動画と音声のコンテンツにとってはもう少し複雑です。 テキストトラック（字幕など）を定義し、動画の再生時にそれらを {{htmlelement("track")}} 要素と <a href="/ja/docs/Web/API/Web_Video_Text_Tracks_Format">WebVTT</a> 形式の形式で表示する方法があります（詳細なチュートリアルについては、<a href="/ja/docs/Web/Apps/Build/Manipulating_media/Adding_captions_and_subtitles_to_HTML5_video">HTML5 の動画へのキャプションと字幕の追加</a>を参照してください）。 これらの機能に対する<a href="/ja/Apps/Fundamentals/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#Browser_Compatibility">ブラウザーの互換性</a>はかなり良いのですが、音声用の代替テキストを提供したり、古いブラウザーをサポートしたりする場合は、ページのどこかや別のページに提示した単純なテキストトランスクリプトをお勧めします。</p>

<h4 id="Element_relationships_and_context" name="Element_relationships_and_context">要素の関係とコンテキスト</h4>

<p>HTML には、他に存在しない要素間のコンテキストと関係を提供するように設計された特定の機能とベストプラクティスがあります。 最も一般的な3つの例は、リンク、フォームラベル、およびデータ表です。</p>

<p>アクセス可能なリンクテキストの鍵は、スクリーンリーダーを使用している人々が、ページ上の全てのリンクのリストを引き出すという共通の機能を使用することが多いということです。 この場合、リンクテキストはコンテキスト外で意味を成す必要があります。 例えば、「ここをクリック」、「ここをクリック」などのラベルが付いたリンクのリストは、アクセシビリティにとって本当に悪いものです。 リンクテキストはコンテキスト内でもコンテキスト外でも意味を成すのが得策です。</p>

<p>次に、フォームの {{htmlelement("label")}} 要素は、フォームをアクセス可能にすることを可能にする中心的な機能の1つです。 フォームの悩みは、各フォーム入力にどのデータを入力するべきかを示すためにラベルが必要なことです。 各ラベルを {{htmlelement("label")}} 内に含めて相方のフォーム入力に明確にリンクする必要があり（各 <code>&lt;label&gt;</code> の <code>for</code> 属性値はフォーム要素の <code>id</code> 値と一致する必要があります）、ソース順が完全に論理的ではなくても（これは公平であるべきです）、それは意味があります。</p>

<div class="note">
<p><strong>注</strong>：リンクテキストとフォームラベルの詳細については、<a href="/ja/docs/Learn/Accessibility/HTML#Meaningful_text_labels">わかりやすいテキストラベル</a>を参照してください。</p>
</div>

<p>最後に、データ表について簡単に説明します。 基本的なデータ表は非常に簡単なマークアップで書くことができますが（bad-table.html の<a href="http://mdn.github.io/learning-area/accessibility/html/bad-table.html">ライブ</a>と<a href="https://github.com/mdn/learning-area/blob/master/accessibility/html/bad-table.html">ソース</a>を見る）、問題があります — スクリーンリーダーのユーザーがデータのグループとして行や列を関連付ける方法はありません — これを行うには、ヘッダー行がどれであるか、そしてそれらが行、列などを見出ししているかどうかを知る必要があります。 これはそのような表に対しては視覚的にしかできません。</p>

<p>代わりに punk-bands-complete.html の例（<a href="https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html">ライブ</a>、<a href="https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-complete.html">ソース</a>）を見ると、表のヘッダー（{{htmlelement("th")}} と <code>scope</code> 属性）、{{htmlelement("caption")}} 要素など、いくつかのアクセシビリティ補助機能が働いていることがわかります。</p>

<div class="note">
<p><strong>注</strong>: アクセス可能な表の詳細については、<a href="/ja/docs/Learn/Accessibility/HTML#Accessible_data_tables">アクセス可能なデータ表</a>を参照してください。</p>
</div>

<h3 id="CSS" name="CSS">CSS</h3>

<p>CSS は HTML よりもはるかに少ない基本的なアクセシビリティ機能を提供する傾向がありますが、それでも誤って使用された場合、それはアクセシビリティにちょうど同じくらい多くの損害を与えることができます。 CSS に関するアクセシビリティのヒントをいくつかすでに説明しました。</p>

<ul>
 <li>HTML においてさまざまなコンテンツをマークアップするには、正しい意味論的要素を使用してください。 別の視覚効果を作成したい場合は、CSS を使用します — 必要な外観を得るために HTML 要素を悪用しないでください。 例えば、もっと大きなテキストが必要な場合は、{{htmlelement("h1")}} 要素ではなく {{cssxref("font-size")}} を使用してください。</li>
 <li>ソース順が CSS なしで意味を成すことを確認してください。 常に CSS を使用することで後で好きなようにページをスタイルできます。</li>
 <li>ユーザーに機能に関する視覚的な手がかりを与えるため、ボタンやリンクのようなインタラクティブな要素に適切なフォーカス/ホバー/アクティブ状態が設定されていることを確認するべきです。 スタイル上の理由でデフォルトを取り除いた場合は、代替スタイルが含まれていることを確認してください。</li>
</ul>

<p>考慮すべき点が他にもいくつかあります。</p>

<h4 id="Color_and_color_contrast" name="Color_and_color_contrast">色とカラーコントラスト</h4>

<p>ウェブサイトの配色を選択するときは、テキスト（前景）のカラーコントラストが背景色とよく合うことを確認するべきです。 あなたのデザインはかっこいいかもしれませんが、色覚異常のような視覚障碍を持つ人々がコンテンツを読むことができないならば、それは良くありません。 配色に十分なコントラストがあるかどうかチェックするために WebAIM の<a href="http://webaim.org/resources/contrastchecker/">カラーコントラストチェッカー</a>（英語）のようなツールを使ってください。</p>

<p>もう1つのヒントは、道標や情報を色だけに頼らないようにすることです。 これは、色が見えない人には良くないでしょう。 例えば、必須のフォームフィールドを赤でマークする代わりに、赤いアスタリスクでマークします。</p>

<div class="note">
<p><strong>注</strong>: コントラスト比が高いと、光沢のある画面を備えたスマートフォンやタブレットを使用している人は誰でも、日光のような明るい環境にいるときにページを読みやすくなります。</p>
</div>

<h4 id="Hiding_content" name="Hiding_content">コンテンツを隠す</h4>

<p>ビジュアルデザインでは、全てのコンテンツを一度に表示する必要がない多くの実例があります。 例えば、<a href="http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html">タブ付き情報ボックスの例</a>（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html">ソースコード</a>を見る）には3つの情報パネルがありますが、それらを重ねて<a href="/ja/docs/Learn/CSS/CSS_layout/Positioning">配置</a>し、それぞれを表示するためにクリックできるタブを提供しています（キーボードからもアクセス可能です — 代わりに <kbd>Tab</kbd> と <kbd>Enter</kbd> / <kbd>Return</kbd> を使って選択することもできます）。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16918/20191022144107.png" style="display: block; height: 1131px; margin: 0px auto; max-width: 450px; width: 1272px;"></p>

<p>スクリーンリーダーのユーザーは、このことを気にしません — コンテンツのソース順が意味を成す限り幸せで、全てに到達できます。 絶対配置（この例で使用されているような）は一般に視覚効果のためにコンテンツを隠す最も良いメカニズムの1つとして見られます、なぜならそれはスクリーンリーダーがそれに到達するのを止めないからです。</p>

<p>一方で、スクリーンリーダーからコンテンツを隠すので、{{cssxref("visibility")}}<code>:hidden</code> や {{cssxref("display")}}<code>:none</code> は使用しないでください。 正当な理由があるのでなければ、なぜこのコンテンツをスクリーンリーダーから隠したいのでしょうか。</p>

<div class="note">
<p><strong>注</strong>: <a href="http://webaim.org/techniques/css/invisiblecontent/">スクリーンリーダーのユーザーには見えないコンテンツ</a>（英語）には、このトピックに関するもっと有用な詳細があります。</p>
</div>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<p>JavaScript はアクセシビリティに関して CSS と同じ種類の問題を抱えています — それが悪用されたり、乱用されたりするとアクセシビリティの災害になる可能性があります。 JavaScript に関連するアクセシビリティの問題、主に意味論的 HTML の分野についてはすでに示唆しています — 例えば、リンクやボタンを適切に使用するなど、適切な意味論的 HTML を使用して機能を実装するべきです。 可能であれば、JavaScript コードで <code>&lt;div&gt;</code> 要素を使用して機能を偽造しないでください — エラーが発生しやすく、HTML の無料機能を使用するよりも手間がかかります。</p>

<h4 id="Simple_functionality" name="Simple_functionality">単純な機能</h4>

<p>一般的に単純な機能は HTML だけで適切に機能するはずです — JavaScript は機能を強化するためにのみ使用されるべきであり、完全には組み込みません。 JavaScript の良い使い方には次のものが含まれます。</p>

<ul>
 <li>クライアント側のフォーム検証を提供します。 これは、サーバーがデータをチェックするのを待たずに、フォームエントリに関する問題をユーザーにすばやく知らせるものです。 利用できない場合でもフォームは機能しますが、検証が遅くなる可能性があります。</li>
 <li>キーボードのみのユーザーがアクセスできる HTML5 の <code>&lt;video&gt;</code> のカスタムコントロールを提供します（前述したように、デフォルトのブラウザーコントロールはほとんどのブラウザーでキーボードからアクセスできません）。</li>
</ul>

<div class="note">
<p><strong>注</strong>: WebAIM の<a href="http://webaim.org/techniques/javascript/">アクセス可能な JavaScript</a>（英語）は、アクセス可能な JavaScript の考慮事項に関する有用な詳細をいくつか提供します。</p>
</div>

<p>より複雑な JavaScript による実装はアクセシビリティに問題をもたらす可能性があります — できる限りのことをする必要があります。 例えば、<a href="/ja/docs/Web/API/WebGL_API/Tutorial">WebGL</a> を 100% を使用して書かれた複雑な 3D ゲームを視覚障碍者が利用できるようにすることは期待できませんが、マウス以外のユーザーが使用できるように<a href="/ja/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard">キーボードコントロール</a>を実装し、色覚異常のある人にも使えるように配色に十分なコントラストがあるようにすることができます。</p>

<h4 id="Complex_functionality" name="Complex_functionality">複雑な機能</h4>

<p>アクセシビリティにとって問題となる主な分野の1つは、（日付の選択のような）複雑なフォームコントロールを含む複雑なアプリと、頻繁に増分的に更新される動的コンテンツです。</p>

<p>ネイティブではない複雑なフォームコントロールは、ネストされた <code>&lt;div&gt;</code> が多数含まれる傾向があり、ブラウザーがデフォルトでそれらをどう処理するかわからないため、問題があります。 自分でそれらを考案しているのなら、それらがキーボードからアクセスできることを確認する必要があります。 何らかのサードパーティ製フレームワークを使用している場合は、利用可能なオプションを慎重に検討して、飛びつく前にそれらがどれほどアクセス可能かを確認してください。 <a href="http://getbootstrap.com/">Bootstrap</a> は、アクセシビリティにはかなり適しているように見えます。 例えば、Rhiana Heath による <a href="https://www.sitepoint.com/making-bootstrap-accessible/">Bootstrap をもう少しアクセス可能にする</a>（英語）では、その問題のいくつかを調べ（主にカラーコントラストに関連した）、いくつかの解決策を検討しています。</p>

<p>定期的に更新される動的コンテンツは、スクリーンリーダーのユーザーがそれを見逃す可能性があるため、特に突然更新される場合は問題になる可能性があります。 <a href="/ja/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a> または <a href="/ja/docs/Web/API/Fetch_API">Fetch</a> を使用して定期的に更新されるメインコンテンツパネルを備えた単一ページのアプリがある場合、スクリーンリーダーのユーザーはそれらの更新を見逃す可能性があります。</p>

<h4 id="WAI-ARIA" name="WAI-ARIA">WAI-ARIA</h4>

<p>そのような複雑な機能を使用する必要がありますか、それともごく普通の意味論的 HTML が代わりにやりますか？ 複雑なものが必要な場合は、<a href="https://www.w3.org/TR/wai-aria-1.1/">WAI-ARIA</a>（Accessible Rich Internet Applications）を使用することを検討するべきです。 これは、ほとんどのブラウザーやスクリーンリーダーが理解できる複雑なフォームコントロールや更新パネルのような項目に（新しい HTML 属性の形式で）意味論を提供する仕様です。</p>

<p>複雑なフォームウィジェットを扱うには、さまざまな要素がウィジェット内でどのような役割を担っているか（例えば、タブなのか、タブパネルなのか）を示す <code>role</code>、コントロールが無効かどうかを示す <code>aria-disabled</code> などの ARIA 属性を使う必要があります。</p>

<p>定期的に更新されるコンテンツのリージョンを扱うには、更新されるリージョンを識別する <code>aria-live</code> 属性を使用できます。 その値は、次のようにスクリーンリーダーがどれほど緊急にそれを読み上げるべきかを示します。</p>

<ul>
 <li><code>off</code>: デフォルト。 更新はアナウンスされるべきではありません。</li>
 <li><code>polite</code>: 更新はユーザーがアイドル状態の場合にのみアナウンスされるべきです。</li>
 <li><code>assertive</code>: 更新はできるだけ早くユーザーにアナウンスされるべきです。</li>
 <li><code>rude</code>: ユーザーに割り込んだとしても、更新はすぐにアナウンスされるべきです。</li>
</ul>

<p>これが一例です。</p>

<pre class="brush: html">&lt;p&gt;&lt;span id="LiveRegion1" aria-live="polite" aria-atomic="false"&gt;&lt;/span&gt;&lt;/p&gt;</pre>

<p>Freedom Scientific の <a href="http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm">ARIA（Accessible Rich Internet Applications）のライブリージョン</a>（英語）の例で実行中の例を見ることができます — 強調表示された段落はその内容を10秒ごとに更新し、スクリーンリーダーはユーザーにこれを読み上げるべきです。<a href="http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegionsAtomic.htm"> ARIA のライブリージョン - Atomic</a>（英語）は別の有用な例を提​​供しています。</p>

<p>ここでは WAI-ARIA を詳細にカバーするためのスペースはありません。 <a href="/ja/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA の基本</a>でもっと詳しく学ぶことができます。</p>

<h2 id="Accessibility_tools" name="Accessibility_tools">アクセシビリティツール</h2>

<p>今まで（キーボードナビゲーションやカラーコントラストチェッカーのような）いくつかのテストのテクニックを含め、さまざまなウェブ技術に対するアクセシビリティの考慮事項について説明してきました。 次に、アクセシビリティのテストを実行するときに使用できる他のツールを見てみましょう。</p>

<h3 id="Auditing_tools" name="Auditing_tools">監査ツール</h3>

<p>あなたのウェブページを指さすことができる利用可能な監査ツールがいくつかあります。 それらはページを見て、ページに存在するアクセシビリティ問題のリストを返すでしょう。 例えば次のものが含まれます。</p>

<ul>
 <li><a href="https://tenon.io">Tenon</a>: 提供された URL でコードを調べて、メトリクス、WCAG 基準が影響を及ぼす WCAG 基準に沿った特定のエラー、および修正案を含むアクセシビリティエラーに関する結果を返す、かなりいいオンラインアプリです。</li>
 <li><a href="http://khan.github.io/tota11y/">tota11y</a>: Khan Academy のアクセシビリティツールで、JavaScript ライブラリの形式を取り、ページに添付するいくつかのアクセシビリティツールを提供します。</li>
 <li><a href="http://wave.webaim.org/">Wave</a>: ウェブアドレスを受け入れて、そのページの有用な注釈付きビューを強調表示したアクセシビリティの問題とともに返すオンラインのアクセシビリティテストツールです。</li>
</ul>

<p>Tenon を使って例を見てみましょう。</p>

<ol>
 <li><a href="https://tenon.io">Tenon のホームページ</a>（英語）に行きます。</li>
 <li><a href="http://mdn.github.io/learning-area/accessibility/html/bad-semantics.html">bad-semantics.html</a> の例の URL（または分析したい別のウェブページの URL）をページ上部のテキスト入力に入力して [Analyze Your Webpage] を押します。</li>
 <li>次に示すように、error/description のセクションが見つかるまで下にスクロールします。</li>
</ol>

<p><img alt="" src="https://mdn.mozillademos.org/files/14217/tenon-screenshot.png" style="border-style: solid; border-width: 1px; display: block; height: 593px; margin: 0px auto; width: 870px;"></p>

<p>また、Tenon をプログラム的に使用するための API と同様に、探索できるいくつかのオプション（ページ上部の近くにある [Show Options] リンクを参照）もあります。</p>

<div class="note">
<p><strong>注</strong>: このようなツールは、アクセシビリティの問題を全て自分で解決するのに十分ではありません。 全体像を把握するには、これらの組み合わせ、知識と経験、ユーザーテストなどが必要です。</p>
</div>

<h3 id="Automation_tools" name="Automation_tools">自動化ツール</h3>

<p><a href="https://www.deque.com/products/axe/">Deque の aXe ツール</a>（英語）は、前述した監査ツールよりも少しばかり進化しています。 他のものと同様に、ページをチェックしてアクセシビリティエラーを返します。 その最もすぐに役立つ形式は、おそらく次のブラウザー拡張機能です。</p>

<ul>
 <li><a href="http://bitly.com/aXe-Chrome">Chrome 用の aXe</a>（英語）</li>
 <li><a href="http://bit.ly/aXe-Firefox">Firefox 用の aXe</a>（英語）</li>
</ul>

<p>これらはブラウザー開発者ツールにアクセシビリティタブを追加します。 例えば、Firefox 用のバージョンをインストールし、それを使用して <a href="http://mdn.github.io/learning-area/accessibility/html/bad-table.html">bad-table.html</a> の例を監査すると、次の結果が得られます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14213/aXe-screenshot.png" style="display: block; height: 580px; margin: 0px auto; width: 800px;"></p>

<p>aXe は <code>npm</code> を使ってもインストール可能で、<a href="http://gruntjs.com/">Grunt</a> や <a href="http://gulpjs.com/">Gulp</a> のようなタスクランナー、<a href="http://www.seleniumhq.org/">Selenium</a> や <a href="https://cucumber.io/">Cucumber</a> のような自動化フレームワーク、<a href="http://jasmine.github.io/">Jasmin</a> のような単体テストフレームワークなどと統合することができます（やはり、詳細については<a href="https://www.deque.com/products/axe/">メインの aXe ページ</a>（英語）を参照してください）。</p>

<h3 id="Screenreaders" name="Screenreaders">スクリーンリーダー</h3>

<p>重度の視覚障碍者がウェブをどのように使用しているかに慣れるには、スクリーンリーダーを使ってテストする価値があります。 次のように利用可能なスクリーンリーダーは多数あります。</p>

<ul>
 <li><a href="http://www.freedomscientific.com/Products/Blindness/JAWS">JAWS</a>（Windows）や <a href="http://www.gwmicro.com/window-eyes/">Window Eyes</a>（Windows、販売終了）のような有料製品もあります。</li>
 <li><a href="http://www.nvaccess.org/">NVDA</a>（Windows）、<a href="http://www.chromevox.com/">ChromeVox</a>（Chrome、Windows、Mac OS X）、<a href="https://wiki.gnome.org/Projects/Orca">Orca</a>（Linux）などの無料製品もあります。</li>
 <li><a href="http://www.apple.com/accessibility/osx/voiceover/">VoiceOver</a>（Mac OS X、iOS）、<a href="http://www.chromevox.com/">ChromeVox</a>（Chromebook 上）、および <a href="https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback">TalkBack</a> （Android）など、一部はオペレーティングシステムに組み込まれています。</li>
</ul>

<p>一般的に、スクリーンリーダーはホストオペレーティングシステム上で動作する独立したアプリで、ウェブページだけでなく他のアプリのテキストも読むことができます。 これは必ずしもそうとは限りませんが（ChromeVox はブラウザーの拡張機能です）、通常はそうです。 スクリーンリーダーは少し異なる方法で動作し、異なるコントロールを持つ傾向があるので、全ての詳細を得るためにはあなたが選んだスクリーンリーダーのドキュメントを参照しなければなりません — と言っても、それらは全て基本的に同じような方法で機能します。</p>

<p>いくつかの異なるスクリーンリーダーを使っていくつかのテストを行い、それらがどのように機能するのか、またどのようにテストするのかについての一般的な考えを説明しましょう。</p>

<div class="note">
<p><strong>注</strong>: WebAIM の<a href="http://webaim.org/techniques/screenreader/">スクリーンリーダーの互換性のための設計</a>（英語）では、スクリーンリーダーの使用方法とスクリーンリーダーに最適な機能についての役立つ情報が提供されています。 いくつかの興味深いスクリーンリーダーの使用統計については、<a href="http://webaim.org/projects/screenreadersurvey6/#used">第6回スクリーンリーダーのユーザー調査の結果</a>（英語）も参照してください。</p>
</div>

<h4 id="VoiceOver" name="VoiceOver">VoiceOver</h4>

<p>VoiceOver（VO）は Mac / iPhone / iPad には無料で含まれているので、あなたが Apple 製品を使っているならそれはデスクトップ/モバイルでテストするのに役に立ちます。 ここでは、MacBook Pro の Mac OS X でテストします。</p>

<p>オンにするには、<kbd>Cmd</kbd> + <kbd>Fn</kbd> + <kbd>F5</kbd> を押します。 今までに VO を使ったことがない場合は、ようこそ画面が表示され、そこで VO を起動するかどうかを選択できます。 また、使い方を学ぶためにかなり役に立つチュートリアルを実行することもできます。 再びオフにするには、もう一度 <kbd>Cmd</kbd> + <kbd>Fn</kbd> + <kbd>F5</kbd> を押します。</p>

<div class="note">
<p><strong>注</strong>: チュートリアルは少なくとも一度は実行するべきです — これは VO を学ぶ上で非常に便利な方法です。</p>
</div>

<p>VO がオンになっていると、ディスプレイはほぼ同じに見えますが、画面の左下に、現在選択されている VO に関する情報を含む黒いボックスが表示されます。 現在の選択範囲も黒枠で強調表示されます — この強調表示は <strong>VO カーソル</strong>と呼ばれます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14219/voiceover.png" style="border-style: solid; border-width: 1px; display: block; height: 386px; margin: 0px auto; width: 800px;"></p>

<p>VO を使用するには、「VO 修飾キー」を多用します — これは、実際の VO キーボードショートカットに加えて、それらを機能させるために押す必要があるキーまたはキーの組み合わせです。 このような修飾キーを使用するのは、スクリーンリーダーに共通で、他のコマンドとコマンドが衝突しないようにするためです。 VO の場合、修飾キーは <kbd>CapsLock</kbd> または <kbd>Ctrl</kbd> + <kbd>Option</kbd> のいずれかです。</p>

<p>VO にはたくさんのキーボードコマンドがありますので、ここではそれら全てをリストしません。 ウェブページのテストに必要な基本的なものは、次の表のとおりです。 キーボードショートカットでは、<kbd>VO</kbd> は「VoiceOver 修飾キー」を意味します。</p>

<table class="standard-table">
 <caption>最も一般的な VoiceOver のキーボードショートカット</caption>
 <thead>
  <tr>
   <th scope="col">キーボードショートカット</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><kbd>VO</kbd> + <kbd>矢印キー</kbd></td>
   <td>VO カーソルを上下左右に移動します。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>スペースバー</kbd></td>
   <td>VO カーソルで強調表示されている項目を選択/アクティブ化します。 これには、ローター（下記参照）で選択した項目が含まれます。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>下矢印</kbd></td>
   <td>（HTML の表やフォームなどの）項目のグループ内に入ります。 グループ内に入ると、通常どおり上記のコマンドを使用してそのグループ内の項目を移動して選択できます。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>上矢印</kbd></td>
   <td>グループから出ます。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>C</kbd></td>
   <td>（表内の場合）現在の列のヘッダーを読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>R</kbd></td>
   <td>（表内の場合）現在の行のヘッダーを読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>C</kbd> + <kbd>C</kbd>（2つの連続した C）</td>
   <td>（表内の場合）ヘッダーを含む現在の列全体を読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>R</kbd> + <kbd>R</kbd>（2つの連続した R）</td>
   <td>（表内の場合）各セルに対応するヘッダーを含め、現在の行全体を読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>左矢印</kbd>、<kbd>VO</kbd> + <kbd>右矢印</kbd></td>
   <td>（日付の選択や時刻の選択などの一部の水平オプション内の場合）オプション間を移動します。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>上矢印</kbd>、<kbd>VO</kbd> + <kbd>下矢印</kbd></td>
   <td>（日付の選択や時刻の選択などの一部の水平オプション内の場合）現在のオプションを変更します。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>U</kbd></td>
   <td>簡単にナビゲーションできるように、見出し、リンク、フォームコントロールなどのリストを表示するローターを使用します。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>左矢印</kbd>、<kbd>VO</kbd> + <kbd>右矢印</kbd></td>
   <td>（ローター内の場合）ローターで利用可能な異なるリスト間を移動します。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>上矢印</kbd>、<kbd>VO</kbd> + <kbd>下矢印</kbd></td>
   <td>（ローター内の場合）現在のローターリスト内の異なる項目間を移動します。</td>
  </tr>
  <tr>
   <td><kbd>Esc</kbd></td>
   <td>（ローター内の場合）ローターを終了します。</td>
  </tr>
  <tr>
   <td><kbd>Ctrl</kbd></td>
   <td>（VO が話している場合）読み上げを一時停止/再開します。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>Z</kbd></td>
   <td>読み上げの最後の部分をやり直します。</td>
  </tr>
  <tr>
   <td><kbd>VO</kbd> + <kbd>D</kbd></td>
   <td>Mac の Dock に入るので、その中で実行するアプリを選択できます。</td>
  </tr>
 </tbody>
</table>

<p>これはたくさんのコマンドのように思えますが、慣れればそれほど悪くはありません。 VO は、特定の場所でどのコマンドを使用するかについて定期的に注意を促します。 今は VO で遊びましょう。 その後、<a href="#screenreader_testing">スクリーンリーダーのテスト</a>のセクションで例のいくつかを試してみることができます。</p>

<h4 id="NVDA" name="NVDA">NVDA</h4>

<p>NVDA は Windows 専用で、インストールする必要があります。</p>

<ol>
 <li><a href="http://www.nvaccess.org/">nvaccess.org</a> からダウンロードしてください。 寄付をするか無料でダウンロードするかを選択できます。 ダウンロードできるようになる前にあなたのメールアドレスを与える必要もあるでしょう。</li>
 <li>ダウンロードしたら、インストールします — インストーラをダブルクリックし、ライセンスに同意して指示に従います。</li>
 <li>NVDA を起動するには、プログラムファイル/ショートカットをダブルクリックするか、キーボードショートカットの <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd> を使用します。 起動すると NVDA にようこそダイアログが表示されます。 ここでは、いくつかのオプションから選択し、次に [OK] ボタンを押して作業を進めます。</li>
</ol>

<p>これで NVDA はあなたのコンピュータ上でアクティブになります。</p>

<p>NVDA を使用するには、「NVDA 修飾キー」を多用します — これは、実際の NVDA のキーボードショートカットに加えて、それらを機能させるために押す必要があるキーです。 このような修飾キーを使用するのは、スクリーンリーダーに共通で、他のコマンドとコマンドが衝突しないようにするためです。 NVDA の場合、修飾キーは <kbd>Insert</kbd>（デフォルト）、または <kbd>CapsLock</kbd>（[OK] を押す前に NVDA へようこそダイアログボックスの最初のチェックボックスをオンにして選択できます）のいずれかになります。</p>

<div class="note">
<p><strong>注</strong>: NVDA は、VoiceOver よりも、それがどこにあるのか、また何をしているのかを強調する方法という点では微妙です。 あなたが見出しやリストなどをスクロールしているとき、あなたが選択している項目は一般的に微妙なアウトラインでハイライトされますが、これはいつも全てのことに当てはまるわけではありません。 完全に迷子になった場合は、<kbd>Ctrl</kbd> + <kbd>F5</kbd> を押して現在のページを更新し、もう一度上から始めることができます。</p>
</div>

<p>NVDA にはたくさんのキーボードコマンドがありますので、ここではそれら全てをリストしません。 ウェブページのテストに必要な基本的なものは、次の表のとおりです。 キーボードショートカットでは、<kbd>NVDA</kbd> は「NVDA 修飾キー」を意味します。</p>

<table class="standard-table">
 <caption>最も一般的な NVDA のキーボードショートカット</caption>
 <thead>
  <tr>
   <th scope="col">キーボードショートカット</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><kbd>NVDA</kbd> + <kbd>Q</kbd></td>
   <td>起動している NVDA を再びオフにします。</td>
  </tr>
  <tr>
   <td><kbd>NVDA</kbd> + <kbd>上矢印</kbd></td>
   <td>現在行を読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>NVDA</kbd> + <kbd>下矢印</kbd></td>
   <td>現在位置から読み上げを始めます。</td>
  </tr>
  <tr>
   <td><kbd>上矢印</kbd> と <kbd>下矢印</kbd>、または <kbd>Shift</kbd> + <kbd>Tab</kbd> と <kbd>Tab</kbd></td>
   <td>ページ内の前/次の項目に移動して、それを読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>左矢印</kbd> と <kbd>右矢印</kbd></td>
   <td>現在の項目の前/次の文字に移動して、それを読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>H</kbd> と <kbd>H</kbd></td>
   <td>前/次の見出しに移動して、それを読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>K</kbd> と <kbd>K</kbd></td>
   <td>前/次のリンクに移動して、それを読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>D</kbd> と <kbd>D</kbd></td>
   <td>前/次の文書のランドマーク（<code>&lt;nav&gt;</code> など）に移動して、それを読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>1</kbd> 〜 <kbd>6</kbd> と <kbd>1</kbd> 〜 <kbd>6</kbd></td>
   <td>前/次の見出し（レベル 1 〜 6）に移動して読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>F</kbd> と <kbd>F</kbd></td>
   <td>前/次のフォーム入力に移動して、それにフォーカスを当てます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>T</kbd> と <kbd>T</kbd></td>
   <td>前/次のデータ表に移動して、それにフォーカスを当てます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>B</kbd> と <kbd>B</kbd></td>
   <td>前/次のボタンに移動して、ラベルを読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>L</kbd> と <kbd>L</kbd></td>
   <td>前/次のリストに移動して、その最初のリスト項目を読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>I</kbd> と <kbd>I</kbd></td>
   <td>前/次のリスト項目に移動して、それを読み上げます。</td>
  </tr>
  <tr>
   <td><kbd>Enter</kbd> / <kbd>Return</kbd></td>
   <td>（リンク/ボタンまたは他のアクティブ化可能項目が選択されている場合）項目をアクティブ化します。</td>
  </tr>
  <tr>
   <td><kbd>NVDA</kbd> + <kbd>スペースバー</kbd></td>
   <td>（フォームが選択されている場合）個々の項目を選択できるようにフォーム内に入るか、すでにフォームに入っている場合はフォームから出ます。</td>
  </tr>
  <tr>
   <td><kbd>Shift</kbd> + <kbd>Tab</kbd> と <kbd>Tab</kbd></td>
   <td>（フォーム内の場合）フォーム入力間を移動します。</td>
  </tr>
  <tr>
   <td><kbd>上矢印</kbd> と <kbd>下矢印</kbd></td>
   <td>（フォーム内の場合）フォーム入力の値を変更します（選択ボックスなどの場合）。</td>
  </tr>
  <tr>
   <td><kbd>スペースバー</kbd></td>
   <td>（フォーム内の場合）選択値を選択します。</td>
  </tr>
  <tr>
   <td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>矢印キー</kbd></td>
   <td>（表が選択されている場合）表のセル間を移動します。</td>
  </tr>
 </tbody>
</table>

<h4 id="Screenreader_testing" name="Screenreader_testing">スクリーンリーダーのテスト</h4>

<p>スクリーンリーダーを使用することに慣れてきましたが、スクリーンリーダーがどのようにウェブページの良い機能と悪い機能に対処するかを理解するために、簡単なアクセシビリティテストを行うためにスクリーンリーダーを使用したいと思います。</p>

<ul>
 <li><a href="http://mdn.github.io/learning-area/accessibility/html/good-semantics.html">good-semantics.html</a> を見て、見出しがスクリーンリーダーによってどのように見つけられ、ナビゲーションに使用できるかに注目してください。 では、<a href="http://mdn.github.io/learning-area/accessibility/html/bad-semantics.html">bad-semantics.html</a> を見て、スクリーンリーダーがどのようにしてこの情報を取得できないのかに注目してください。 本当に長いページのテキストをナビゲートしようとすると、これがどれほど面倒なことになるか想像してください。</li>
 <li><a href="http://mdn.github.io/learning-area/accessibility/html/good-links.html">good-links.html</a> を見て、コンテキストから見たときにそれらがどのように意味をなすかに注目してください。 <a href="http://mdn.github.io/learning-area/accessibility/html/bad-links.html">bad-links.html</a> ではそうではありません — それらは全てただの「ここをクリック」です。</li>
 <li><a href="http://mdn.github.io/learning-area/accessibility/html/good-form.html">good-form.html</a> を見て、<code>&lt;label&gt;</code> 要素を適切に使用することで、フォーム入力がラベルでどのように説明されるかに注目してください。 <a href="http://mdn.github.io/learning-area/accessibility/html/bad-form.html">bad-form.html</a> では、それらは「空白」の行に沿って役に立たないラベルを取得します。</li>
 <li><a href="http://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html">punk-bands-complete.html</a> の例を見て、ヘッダーを正しく定義したので、スクリーンリーダーがどのようにしてコンテンツの列と行を関連付け、それらを全て読み取ることができるかを確認します。 <a href="http://mdn.github.io/learning-area/accessibility/html/bad-table.html">bad-table.html</a> では、どのセルも関連付けることができません。 1つのページに1つの表しかない場合、NVDA はやや奇妙なふるまいをするようです。 代わりに <a href="http://webaim.org/articles/nvda/tables.htm">WebAIM の表のテストのページ</a>（英語）を試すことができます。</li>
 <li>先ほど見た <a href="http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm">WAI-ARIA のライブリージョンの例</a>（英語）を見て、スクリーンリーダーが絶えず更新されているセクションが更新されるたびにそれを読み上げていくかに注目してください。</li>
</ul>

<h3 id="User_testing" name="User_testing">ユーザーテスト</h3>

<p>上記のように、あなたはあなたのサイトのアクセシビリティ問題を決定するために自動化されたツールだけに頼ることはできません。 テスト計画を立てる際には、可能であればアクセシビリティユーザーグループをいくつか含めることをお勧めします（詳細については、コースの前半の<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#User_testing">ユーザーテスト</a>のセクションを参照してください）。 必要に応じて、スクリーンリーダーを使用するユーザー、キーボードを使用するユーザー、聴覚を持たないユーザー、および他のグループも参加してください。</p>

<h2 id="Accessibility_testing_checklist" name="Accessibility_testing_checklist">アクセシビリティテストのチェックリスト</h2>

<p>次のリストは、プロジェクトで推奨されるアクセシビリティテストを確実に実行したことを確認するためのチェックリストです。</p>

<ol>
 <li>HTML が意味論的にできるだけ正しいことを確認してください。 <a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Auditing_tools">監査ツール</a>を使用して、<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Validation">それを検証する</a>ことは良いスタートです。</li>
 <li>CSS がオフになっているときにコンテンツが意味をなすことを確認してください。</li>
 <li>機能が<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility">キーボードからアクセス可能であること</a>を確認してください。 <kbd>Tab</kbd>、<kbd>Return</kbd> / <kbd>Enter</kbd> などを使ってテストします。</li>
 <li>テキスト以外のコンテンツに<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Text_alternatives">代替テキスト</a>があることを確認してください。 <a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Auditing_tools">監査ツール</a>はそのような問題を捉えるのに適しています。</li>
 <li>適切なチェックツールを使用して、サイトの<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Color_and_color_contrast">カラーコントラスト</a>が許容範囲内であることを確認してください。</li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Hiding_content">隠されたコンテンツ</a>がスクリーンリーダーに見えるようにしてください。</li>
 <li>可能な限り JavaScript がなくても機能が使えることを確認してください。</li>
 <li>適切な場合は、ARIA を使用してアクセシビリティを向上させます。</li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Auditing_tools">監査ツール</a>を通してサイトを運営してください。</li>
 <li>スクリーンリーダーでテストしてください。</li>
 <li>あなたが行ったことを言うために、あなたのサイトのどこかに見つけることができるアクセシビリティの方針/声明を含めてください。</li>
</ol>

<h2 id="Finding_help" name="Finding_help">助けを探す</h2>

<p>あなたがアクセシビリティに関して遭遇するであろう他の多くの問題があります。 本当に知っておくべき最も重要なことは、オンラインで答えを見つける方法です。 HTML と CSS の記事の<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Finding_help">助けを探すのセクション</a>を参考にしてください。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>たぶん、この記事はあなたが遭遇するかもしれない主なアクセシビリティ問題とそれらをどうやってテストして克服するかについての良い下地を与えたでしょう。</p>

<p>次の記事では、機能の検出について詳しく説明します。</p>

<p>{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール内の文書</h2>

<ul>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">はじめてのクロスブラウザーテスト</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies">テスト実行戦略</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS">よくある HTML や CSS の問題を扱う</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript">よくある JavaScript の問題を扱う</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility">よくあるアクセシビリティの問題を扱う</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection">機能検出の実装</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing">はじめての自動テスト</a></li>
 <li><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment">テスト自動化環境をセットアップする</a></li>
</ul>
