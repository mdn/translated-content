---
title: キーボードでナビゲート可能な JavaScript ウィジェット
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
tags:
  - Accessibility
  - DOM
  - JavaScript
translation_of: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
---
<h3 id="Overview" name="Overview">概要</h3>

<p>ウェブアプリケーションは、メニュー、ツリービュー、リッチテキストフィールド、タブパネルなどのデスクトップウィジェットを模倣するために JavaScript を使用することがよくあります。 これらのウィジェットは通常、{{htmlelement("div")}} 要素と {{htmlelement("span")}} 要素で構成されています。これらの要素は本来、デスクトップのものと同じキーボード機能を提供しません。 このドキュメントは JavaScript ウィジェットをキーボードでアクセス可能にするためのテクニックを説明します。</p>

<h3 id="Using_tabindex" name="Using_tabindex">tabindex を使う</h3>

<p>デフォルトでは、人々がウェブページを閲覧するために <kbd>Tab</kbd> キーを使うとき、（リンクやフォームコントロールのような）インタラクティブ要素だけがフォーカスされます。 {{htmlattrxref("tabindex")}} <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>を使うと、作成者は他の要素もフォーカス可能にできます。 <code>0</code> に設定すると、要素はキーボードとスクリプトによってフォーカス可能になります。 <code>-1</code> に設定すると、要素はスクリプトによってフォーカス可能になりますが、キーボードによるフォーカスの順序の一部にはなりません。</p>

<p>キーボードを使用したときに要素がフォーカスを得る順序は、デフォルトではソースの順序です。 例外的な状況では、作成者は順序を再定義したいと思うかもしれません。 これを行うために、作成者は <code>tabindex</code> を任意の正数に設定することができます。</p>

<div class="warning">
<p><strong>警告</strong>: <code>tabindex</code> に正の値を使わないでください。 <code>tabindex</code> に正の値を持つ要素は、ページ上のデフォルトのインタラクティブ要素の前に配置されます。 つまり、ページ作成者は、<code>tabindex</code> に 1 以上の正の値を使用する時は必ず、ページ上の全てのフォーカス可能要素に対して <code>tabindex</code> の値を設定（および維持）する必要があります。</p>
</div>

<p>次の表は、最新のブラウザーにおける <code>tabindex</code> の動作を説明しています。</p>

<table class="fullwidth-table" style="width: 75% !important;">
 <tbody>
  <tr>
   <th><code>tabindex</code> 属性</th>
   <th><code>element.focus()</code> を介してマウスや JavaScript でフォーカス可能</th>
   <th>タブでナビゲート可能</th>
  </tr>
  <tr>
   <td>存在しない</td>
   <td>要素のプラットフォーム規約に従います（フォームコントロール、リンクなどでは、可）。</td>
   <td>要素のプラットフォーム規約に従います。</td>
  </tr>
  <tr>
   <td>負（つまり、<code>tabindex="-1"</code>）</td>
   <td>可</td>
   <td>不可。 作成者は、矢印キーなどの押下に応答して、<code><a href="/ja/docs/Web/API/HTMLElement/focus">focus()</a></code> で要素をフォーカスしなければなりません。</td>
  </tr>
  <tr>
   <td>ゼロ（つまり、<code>tabindex="0"</code>）</td>
   <td>可</td>
   <td>ドキュメント内の要素の位置を基準としたタブ順序（{{htmlelement("a")}} のようなインタラクティブ要素は、デフォルトでこの振る舞いをすることに注意してください。 それらにこの属性は不要です）。</td>
  </tr>
  <tr>
   <td>正（例えば、<code>tabindex="33"</code>）</td>
   <td>可</td>
   <td><code>tabindex</code> の値は、この要素がタブ順序のどこに配置されるかを決定します。 小さい値は、大きい値よりもタブ順序の早い位置に要素を配置します（例えば、<code>tabindex="7"</code> は <code>tabindex="11"</code> の前に配置されます）。</td>
  </tr>
 </tbody>
</table>

<h4 id="Non-native_controls" name="Non-native_controls">ネイティブでないコントロール</h4>

<p>{{htmlelement("a")}}、{{htmlelement("input")}}、{{htmlelement("select")}} のようなインタラクティブなネイティブ HTML 要素はすでにキーボードによりアクセス可能であるため、これらのいずれかを使用することが、コンポーネントをキーボードで使えるようにするための最速の方法です。</p>

<p>作成者は、<code>0</code> の <code>tabindex</code> を追加することによって、{{htmlelement("div")}} や {{htmlelement("span")}} をキーボードでアクセス可能にすることもできます。 これは、HTML には存在しないインタラクティブ要素を使用するコンポーネントに特に役立ちます。</p>

<h4 id="Grouping_controls" name="Grouping_controls">コントロールのグループ化</h4>

<p>メニュー、タブリスト、グリッド、ツリービューなどのウィジェットをグループ化するには、親要素をタブ順序に入れて（<code>tabindex="0"</code>）、各子孫の選択項目/タブ/セル/行をタブ順序から除く（<code>tabindex="-1"</code>）必要があります。 ユーザーは矢印キーを使って子孫要素をナビゲートできるべきです。 （典型的なウィジェットに通常期待されるキーボードサポートの詳細な説明については、<a href="https://www.w3.org/TR/wai-aria-practices-1.1/">WAI-ARIA のオーサリングプラクティス</a>（英語）を参照してください。）</p>

<p>以下の例は、入れ子になったメニューコントロールで使用されるこのテクニックを示しています。 キーボードフォーカスが含まれている {{htmlelement("ul")}} 要素に到達したら、JavaScript 開発者はプログラム的にフォーカスを管理し、矢印キーに応答する必要があります。 ウィジェット内でフォーカスを管理するためのテクニックについては、以下の「グループ内のフォーカス管理」を参照してください。</p>

<p>例 2: tabindex を使用してキーボードアクセスを制御するメニューコントロール</p>

<pre class="brush: html">&lt;ul id="mb1" tabindex="0"&gt;
  &lt;li id="mb1_menu1" tabindex="-1"&gt; フォント
    &lt;ul id="fontMenu" title="フォント" tabindex="-1"&gt;
      &lt;li id="sans-serif" tabindex="-1"&gt;サンセリフ&lt;/li&gt;
      &lt;li id="serif" tabindex="-1"&gt;セリフ&lt;/li&gt;
      &lt;li id="monospace" tabindex="-1"&gt;モノスペース&lt;/li&gt;
      &lt;li id="fantasy" tabindex="-1"&gt;ファンタジー&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li id="mb1_menu2" tabindex="-1"&gt; スタイル
    &lt;ul id="styleMenu" title="スタイル" tabindex="-1"&gt;
      &lt;li id="italic" tabindex="-1"&gt;斜体&lt;/li&gt;
      &lt;li id="bold" tabindex="-1"&gt;太字&lt;/li&gt;
      &lt;li id="underline" tabindex="-1"&gt;下線&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li id="mb1_menu3" tabindex="-1"&gt; 位置揃え
    &lt;ul id="justificationMenu" title="位置揃え" tabindex="-1"&gt;
      &lt;li id="left" tabindex="-1"&gt;左&lt;/li&gt;
      &lt;li id="center" tabindex="-1"&gt;中央&lt;/li&gt;
      &lt;li id="right" tabindex="-1"&gt;右&lt;/li&gt;
      &lt;li id="justify" tabindex="-1"&gt;両端&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="Disabled_controls" name="Disabled_controls">無効なコントロール</h4>

<p>カスタムコントロールが無効になったら、<code>tabindex="-1"</code> を設定して、タブ順序から除きます。 グループ化されたウィジェット内の無効な項目（メニュー内のメニュー項目など）は、矢印キーを使用してナビゲート可能なままにするべきであることに注意してください。</p>

<h3 id="Managing_focus_inside_groups" name="Managing_focus_inside_groups">グループ内のフォーカス管理</h3>

<p>ユーザーがウィジェットからタブで離れてから戻ると、フォーカスはフォーカスを持っていた特定の要素、例えば、ツリーアイテムやグリッドセルに戻るべきです。 これを実現するには次の2つのテクニックがあります。</p>

<ol>
 <li>動き回る <code>tabindex</code>: プログラム的にフォーカスを移動</li>
 <li><code>aria-activedescendant</code>: 「仮想」フォーカスの管理</li>
</ol>

<h4 id="Technique_1_Roving_tabindex" name="Technique_1_Roving_tabindex">テクニック 1: 動き回る tabindex</h4>

<p>フォーカスされた要素の <code>tabindex</code> を <code>"0"</code> に設定すると、ユーザーがウィジェットからタブで離れてから戻ってきた場合でも、グループ内の選択された項目にフォーカスが保持されます。 <code>tabindex</code> を <code>"0"</code> に更新したら、以前に選択した項目を <code>tabindex="-1"</code> に更新する必要もあることに注意してください。 このテクニックでは、キーイベントに応答してプログラムでフォーカスを移動し、現在フォーカスされた項目を反映するように <code>tabindex</code> を更新します。 次を行います。</p>

<p>キーダウンハンドラをグループ内の各要素にバインドし、矢印キーを使用して別の要素に移動した場合、</p>

<ol>
 <li>プログラム的に新しい要素にフォーカスを適用します。</li>
 <li>フォーカスされた要素の <code>tabindex</code> を <code>"0"</code> に更新します。</li>
 <li>以前にフォーカスされた要素の <code>tabindex</code> を <code>"-1"</code> に更新します。</li>
</ol>

<p>これはこのテクニックを使った <a href="https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html">WAI-ARIA ツリービュー</a>の例です。</p>

<h5 id="Tips" name="Tips">ヒント</h5>

<h6 id="Use_element.focus()_to_set_focus" name="Use_element.focus()_to_set_focus">element.focus() を使ってフォーカスを設定する</h6>

<p>要素にフォーカスを移すために <code>createEvent()</code>、<code>initEvent()</code>、および <code>dispatchEvent()</code> を使用しないでください。 DOM フォーカスイベントは情報提供のみを目的としています。 何かがフォーカスされた後にシステムによって生成されますが、実際にはフォーカスの設定には使用されません。 代わりに <code>element.focus()</code> を使用してください。</p>

<h6 id="Use_onfocus_to_track_the_current_focus" name="Use_onfocus_to_track_the_current_focus">onfocus を使って現在のフォーカスを追跡する</h6>

<p>全てのフォーカスの変更がキーイベントやマウスイベントを介して行われるとは限りません。 スクリーンリーダーなどの支援技術では、フォーカスを任意のフォーカス可能な要素に設定できます。 代わりに <code>onfocus</code> と <code>onblur</code> を使ってフォーカスを追跡します。</p>

<p><code>onfocus</code> と <code>onblur</code> は全ての要素で使用できるようになりました。 現在のドキュメントのフォーカスを取得するための標準的な DOM インターフェースはありません。 フォーカスの状態を追跡したい場合は、<code><a href="/ja/docs/Web/API/DocumentOrShadowRoot/activeElement">document.activeElement</a></code> を使ってアクティブな要素を取得できます。 <code><a href="/ja/docs/Web/API/Document/hasFocus">document.hasFocus</a></code> を使って、現在のドキュメントのフォーカスかどうかを確認することもできます。</p>

<h4 id="Technique_2_aria-activedescendant" name="Technique_2_aria-activedescendant">テクニック 2: aria-activedescendant</h4>

<p>このテクニックでは、単一のイベントハンドラをコンテナウィジェットにバインドし、<code>aria-activedescendant</code> を使用して「仮想」フォーカスを追跡します。 （ARIA に関する詳細は、<a href="/ja/docs/Web/Accessibility/An_Overview_of_Accessible_Web_Applications_and_Widgets">アクセス可能なウェブアプリケーションとウィジェットの概要</a>を参照してください。）</p>

<p><code>aria-activedescendant</code> プロパティは、現在仮想フォーカスを持っている子孫要素の ID を識別します。 コンテナのイベントハンドラーは、<code>aria-activedescendant</code> の値を更新し、（例えば、境界線や背景色で）現在の項目が適切にスタイル設定されていることを確実にすることで、キーイベントおよびマウスイベントに応答する必要があります。</p>

<h3 id="General_Guidelines" name="General_Guidelines">一般的なガイドライン</h3>

<h4 id="Use_onkeydown_to_trap_key_events_not_onkeypress" name="Use_onkeydown_to_trap_key_events_not_onkeypress">onkeypress ではなく onkeydown を使ってキーイベントをトラップする</h4>

<p>IE は、英数字以外のキーに対する <code>keypress</code> イベントを発生させません。 代わりに <code>onkeydown</code> を使用してください。</p>

<h4 id="Ensure_that_keyboard_and_mouse_produce_the_same_experience" name="Ensure_that_keyboard_and_mouse_produce_the_same_experience">キーボードとマウスが同じエクスペリエンスを生み出すことを確実にする</h4>

<p>ユーザーエクスペリエンスが入力デバイスに関係なく一貫していることを保証するために、キーボードとマウスのイベントハンドラは適切な場所でコードを共有するべきです。 例えば、ユーザーが矢印キーを使用して移動したときに <code>tabindex</code> やスタイルを更新するコードは、マウスクリックハンドラでも同じ変化を生み出すために使用するべきです。</p>

<h4 id="Ensure_that_the_keyboard_can_be_used_to_activate_element" name="Ensure_that_the_keyboard_can_be_used_to_activate_element">キーボードを使用して要素をアクティブにできることを確実にする</h4>

<p>キーボードを使用して要素をアクティブにできることを確実にするには、マウスイベントにバインドされているハンドラもキーボードイベントにバインドするべきです。 例えば、<code>onclick="doSomething()"</code> がある場合、<kbd>Enter</kbd> キーで要素がアクティブにできることを確実にするには、<code>onkeydown="return event.keyCode != 13 || doSomething();"</code> で <code>doSomething()</code> をキーダウンイベントにもバインドするべきです。</p>

<h4 id="Always_draw_the_focus_for_tabindex-1_items_and_elements_that_receive_focus_programatically" name="Always_draw_the_focus_for_tabindex-1_items_and_elements_that_receive_focus_programatically">tabindex="-1" 項目およびプログラムでフォーカスを受け取る要素に常にフォーカスを描画する</h4>

<p>プログラム的にフォーカスを受け取る項目には、IE は自動的にフォーカスの輪郭を描画しません。 背景色を <code>this.style.backgroundColor = "gray";</code> のようなもので変更するか、または <code>this.style.border = "1px dotted invert"</code> で点線の境界線を追加することの中から選らんでください。 点線の境界線の場合は、最初から見えない 1px の境界線があるようにして、境界線スタイルを適用しても要素が大きくならないようにする必要があります（境界線はスペースを取り、IE は CSS アウトラインを実装しません）。</p>

<h4 id="Prevent_used_key_events_from_performing_browser_functions" name="Prevent_used_key_events_from_performing_browser_functions">使用したキーイベントがブラウザー機能を実行しないようにする</h4>

<p>ウィジェットがキーイベントを処理する場合は、イベントハンドラのリターンコードを使用して、ブラウザーもそれを処理しないようにします（例えば、矢印キーに応答してスクロールするなど）。 イベントハンドラが <code>false</code> を返した場合、そのイベントはハンドラを超えて伝播しません。</p>

<p>例えば、次で、</p>

<pre class="brush: html">&lt;span tabindex="-1" onkeydown="return handleKeyDown();"&gt;</pre>

<p><code>handleKeyDown()</code> が <code>false</code> を返すと、イベントは消費され、ブラウザーはキーストロークに基づいたアクションを実行できなくなります。</p>

<h4 id="Don't_rely_on_consistent_behavior_for_key_repeat_at_this_point" name="Don't_rely_on_consistent_behavior_for_key_repeat_at_this_point">現時点では、キーリピートに一貫した動作を当てにしないこと</h4>

<p>残念ながら <code>onkeydown</code> は、使用しているブラウザーや OS によってはリピートするかもしれないし、しないかもしれません。</p>
