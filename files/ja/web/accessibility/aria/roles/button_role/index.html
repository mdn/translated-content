---
title: 'ARIA: button ロール'
slug: Web/Accessibility/ARIA/Roles/button_role
tags:
  - ARIA
  - ARIA Role
  - ARIA button
  - Accessibility
  - Button Role
  - Reference
---
<p class="summary"><span class="seoSummary">ボタン (<strong><a href="https://www.w3.org/WAI/PF/aria/roles#button">button</a></strong>) ロールは、ユーザーによってアクティブ化されたときに反応を引き起こすクリック可能な要素に使用する必要があります。 <code>role="button"</code> を追加すると、要素がスクリーンリーダーにボタンコントロールとして表示されます。 このロールを <code>aria-pressed</code> 属性と組み合わせて使用することで、トグルボタンを作成できます。 

</span></p>

<pre class="brush: html">&lt;div id="saveChanges" tabindex="0" role="button" aria-pressed="false"&gt;Save&lt;/div&gt;</pre>

<p>上記の例では、フォーカス順で最初の単純なボタンを作成しますが、次のように、ボタンには {{HTMLElement("button")}} や {{HTMLElement("input")}} と <code>type="button"</code> を使用するべきです。
</p>

<pre class="brush: html">&lt;button id="saveChanges"&gt;Save&lt;/button&gt;</pre>

<div class="note">
<p><strong>注</strong>: 意味論的な <code>&lt;button&gt;</code> や <code>&lt;input type="button"&gt;</code> 要素の代わりに role="button" を使用する場合は、要素をフォーカス可能にし、ユーザーの入力を処理するためにクリック ({{event("click")}}) イベントと <kbd>Enter</kbd> キーと <kbd>Space</kbd> キーを含むキーダウン ({{event("keydown")}}) イベントのイベントハンドラーを定義する必要があります。 <a href="https://www.w3.org/TR/wai-aria-practices/examples/button/button.html">公式の WAI-ARIA サンプルコード</a>を参照してください。</p>
</div>

<h2 id="Description">説明</h2>

<p>ボタンロールは、要素をボタンとしてスクリーンリーダーに認識させます。 ボタンは、フォームの送信、ダイアログのオープン、アクションのキャンセル、新しいレコードの挿入や情報の表示などのコマンドの実行などのアクションを実行するために使用するウィジェットです。</p>

<p>ボタンがダイアログを開くことをユーザーに通知する一般的な規則は、ボタンのラベルに "…" (省略記号) を追加することです (例: 「名前を付けて保存…」) 。</p>

<p>通常のボタンウィジェットに加えて、ボタン以外の要素を使用してトグルボタンまたはメニューボタンを作成する場合は、<code>role="button"</code> を含める必要があります。 トグルボタンは、オフ (押されていない) またはオン (押されている) のいずれかが可能な2つの状態のボタンです。 <code>true</code> または <code>false</code> の <code>aria-pressed</code> 属性値は、ボタンをトグルボタンとして認識させます。 メニューボタンは、メニューを制御するボタンであり、<code>aria-haspopup</code> プロパティ属性に menu または <code>true</code> が設定されています。</p>

<h3 class="highlight-spanned" id="Associated_ARIA_roles_states_and_properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<dl>
 <dt><code><span class="highlight-span">aria-pressed</span></code></dt>
 <dd>ボタンをトグルボタンとして定義します。 <code>aria-pressed</code> の値は、ボタンの状態を表します。 値には、ボタンが現在押されていない場合は <code>aria-pressed="false"</code>、ボタンが現在押されていることを示す <code>aria-pressed="true"</code>、ボタンが部分的に押されていると見なされる場合は <code>aria-pressed="mixed"</code> が含まれます。 属性が省略されているか、デフォルト値の <code>aria-pressed="undefined"</code> に設定されている場合、要素は押されている状態をサポートしません。</dd>
 <dt><code>aria-expanded</code></dt>
 <dd>ボタンが他の要素のグループ化を制御している場合、<code>aria-expanded</code> 状態は、制御されているグループ化が現在展開されているか折りたたまれているかを示します。 ボタンに <code>aria-expanded="false"</code> が設定されている場合、グループ化は現在展開されていません。 ボタンに <code>aria-expanded="true"</code> が設定されている場合、現在展開されています。 ボタンに <code>aria-expanded="undefined"</code> が設定されているか、属性が省略されている場合、展開不可能です。</dd>
</dl>

<h3 id="Basic_buttons">基本的なボタン</h3>

<p>ボタンには常にアクセス可能な名前を付ける必要があります。 ほとんどのボタンでは、この名前はボタン内のテキストと同じになります。 場合によっては、例えばアイコンで表されるボタンの場合、アクセス可能な名前は <code><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute">aria-label</a></code> または <code><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a></code> 属性から提供される場合があります。</p>

<h3 id="Toggle_buttons">トグルボタン</h3>

<p>トグルボタンには通常、押された状態と押されていない状態の2つの状態があります。 3番目の混合 (mixed) 状態は、他のトグルボタンやチェックボックスなど、すべてが同じ値を共有するわけではない他の要素を制御するトグルボタンで使用できます。 要素がトグルボタンであるかどうかは、 (要素がまだネイティブなボタン要素でない場合に) ボタン (<code>button</code>) ロールに加えて <code>aria-pressed</code> 属性で示すことができます。
</p>

<ul>
 <li><code>aria-pressed</code> が使用されていない場合、または "undefined" 状態に設定されている場合、ボタンはトグルボタンではありません。</li>
 <li><code>aria-pressed="false"</code> が使用されている場合、ボタンは現在押されていないトグルボタンです。</li>
 <li><code>aria-pressed="true"</code> が使用されている場合、ボタンは現在押されているトグルボタンです。</li>
 <li><code>aria-pressed="mixed"</code> が使用されている場合、ボタンは部分的に押されていると見なされます。</li>
</ul>

<p>例として、「ミュート」というラベルの付いたオーディオプレーヤーのミュートボタンは、<code>aria-pressed</code> 状態を true に設定することで、音がミュートされていることを示します。 トグルボタンのラベルは、その状態が変化しても変更してはいけません。 この例では、ラベルは「ミュート」のままで、スクリーンリーダーは、<code>aria-pressed</code> の値に応じて、「ミュートトグルボタンが押されました」や「ミュートトグルボタンが押されていません」と読み上げます。 ボタンのラベルを「ミュート」から「ミュート解除」に変わるようなデザインであれば、トグルボタンは適切ではないため、<code>aria-pressed</code> 属性は省略されます。</p>

<h3 id="Keyboard_interactions">キーボードインタラクション</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">キー</th>
   <th scope="col">機能</th>
  </tr>
  <tr>
   <td><kbd>Enter</kbd></td>
   <td>ボタンをアクティブ化する。</td>
  </tr>
  <tr>
   <td><kbd>Space</kbd></td>
   <td>ボタンをアクティブ化する。</td>
  </tr>
 </tbody>
</table>

<p>ボタンのアクティブ化に続いて、ボタンが実行するアクションのタイプに応じてフォーカスが設定されます。 例えば、ボタンをクリックしてダイアログを開いた場合、フォーカスはダイアログに移動する必要があります。 ボタンがダイアログを閉じる場合、ダイアログのコンテキストで実行された機能が論理的に別の要素につながる場合を除いて、フォーカスはダイアログを開いたボタンに戻る必要があります。 オーディオファイルのミュートやミュート解除など、ボタンが現在のコンテキストを変更する場合、通常はボタンにフォーカスが残ります。</p>

<h3 id="Required_JavaScript_Features">必要な JavaScript 機能</h3>

<h4 id="Required_event_handlers">必要なイベントハンドラー</h4>

<p>ボタンは、マウス、タッチ、およびキーボードのユーザーが操作できます。 ネイティブな HTML の <code>&lt;button&gt;</code> 要素の場合、ボタンの <code>onclick</code> イベントは、マウスクリックの場合、およびボタンにフォーカスがあるときにユーザーが <kbd>Space</kbd> または <kbd>Enter</kbd> を押した場合に発生します。  ただし、別のタグを使用してボタンを作成すると、<code>role="button"</code> が使用されている場合でも、<code>onclick</code> イベントはマウスカーソルでクリックされたときにのみ発生します。 このため、<kbd>Space</kbd> キーまたは <kbd>Enter</kbd> キーが押されたときにボタンがトリガーされるように、個別のキーイベントハンドラーを要素に追加する必要があります。</p>

<dl>
 <dt><code>onclick</code></dt>
 <dd>マウスクリックイベントやタッチイベントを使用してボタンがアクティブ化されたときに発生するイベントを処理します。</dd>
 <dt><code>onKeyDown</code></dt>
 <dd>キーボードの Enter キーまたは Space キーを使用してボタンがアクティブ化されたときに発生するイベントを処理します。 (<a href="/ja/docs/Web/API/Document/keypress_event">非推奨の onKeyPress</a> ではないことに注意してください)</dd>
</dl>

<h4 id="Changing_attribute_values">属性値の変更</h4>

<h4 id="aria-pressed">aria-pressed</h4>

<p>aria-pressed の値は、トグルボタンの状態を定義します。 この属性には、次の4つの値のいずれかがあります。</p>

<p><code>true</code>, <code>false</code>, <code>mixed</code>, <code>undefined</code></p>

<h2 id="Examples">例</h2>

<h3 id="Basic_button_example">基本的なボタンの例</h3>

<p>この例では、スパン要素にボタン (<code>button</code>) ロールが与えられています。 <code>&lt;span&gt;</code> 要素が使用されるため、ボタンをフォーカス可能にし、ページのタブ順序の一部にするために、<code>tabindex</code> 属性が必要です。 含まれている CSS スタイルは、<code>&lt;span&gt;</code> 要素をボタンのように見せ、ボタンにフォーカスがあるときに視覚的な合図を提供するために提供されています。</p>

<p><code>handleBtnClick</code> イベントハンドラーと <code>handleBtnKeyDown</code> イベントハンドラーは、マウスクリックまたは <kbd>Space</kbd> キーや <kbd>Enter</kbd> キーを使用してアクティブ化されると、ボタンのアクションを実行します。 この場合のアクションは、名前のリストに新しい名前を追加することです。
</p>

<p>テキストボックスに名前を入れて、例を試してください。 ボタンを押すと、名前がリストに追加されます。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">    &lt;h1&gt;ARIA Button Example&lt;/h1&gt;
    &lt;ul id="nameList"&gt;&lt;/ul&gt;
    &lt;label for="newName"&gt;Enter your Name: &lt;/label&gt;
    &lt;input type="text" id="newName"&gt;
    &lt;span role="button" tabindex="0" onclick="handleCommand()" onKeyDown="handleCommand()"&gt;Add Name&lt;/span&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">[role="button"] {
  padding: 2px;
  background-color: navy;
  color: white;
  cursor: default;
}
[role="button"]:hover,
[role="button"]:focus,
[role="button"]:active {
   background-color: white;
   color: navy;
}
ul {
    list-style: none;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">function handleCommand(event) {
    // マウスクリックと Enter または Space での
    // キーボードアクティブ化の両方を処理します

    // input 要素から新しい名前の値を取得します
    let newNameInput = document.getElementById('newName');
    let name = newNameInput.value;
    newNameInput.value = ''; // テキストフィールドをクリアします
    newNameInput.focus();  // テキストフィールドにフォーカスを与えて、追加する名前を入力できるようにします。

    // リストに空白のエントリーを追加しません。
    if(name.length &gt; 0) {
        listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(name));

        // 新しい名前をリストに追加します。
        let list = document.getElementById('nameList');
        list.appendChild(listItem);
    }
}</pre>

<p>{{EmbedLiveSample("Basic_button_example")}}</p>

<h3 id="Toggle_button_example">トグルボタンの例</h3>

<p>このスニペットでは、{{HTMLElement("span")}} 要素がボタン (<code>button</code>) ロールと <code>aria-pressed</code> 属性を使用してトグルボタンに変換されます。 ボタンがアクティブ化すると、<code>aria-pressed</code> の値の状態が切り替わり、<code>true</code> から <code>false</code> になり、そしてまた元に戻ります。 </p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;button type="button" onclick="handleBtnClick()" onKeyDown="handleBtnKeyDown()"&gt;
  Mute Audio
&lt;/button&gt;

&lt;span role="button" tabindex="0"
 aria-pressed="false" onclick="handleBtnClick(event)"
 onKeyDown="handleBtnKeyDown(event)"&gt;
  Mute Audio
&lt;/span&gt;

&lt;audio id="audio" src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3"&gt;
  Your browser does not support the &lt;code&gt;audio&lt;/code&gt; element.
&lt;/audio&gt;

</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">button,
[role="button"] {
    padding: 3px;
    border: 2px solid transparent;
}

button:active,
button:focus,
[role="button"][aria-pressed="true"] {
    border: 2px solid #000;
}
</pre>

<h4 id="JavaScript_2">JavaScript</h4>

<pre class="brush: js">function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyDown(event) {
  // Space や Enter が押されたかどうかを確認します
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // <a href="/ja/docs/Web/API/KeyboardEvent/key/Key_Values#whitespace_keys">IE11 サポートのための "Spacebar"</a>
    // デフォルトのアクションを防止して Space が押されたときにスクロールするのを止める
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  var audio = document.getElementById('audio');
  // ボタンが押されているかを確認します
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // aria-pressed を反対の状態に変更します
  element.setAttribute("aria-pressed", !pressed);
  // オーディオファイルの再生状態を切り替えます
  if(pressed) {
     audio.pause();
  } else {
     audio.play();
  }
}</pre>

<h4 id="Result">結果</h4>

<p>{{EmbedLiveSample('Toggle_button_example')}}</p>

<h2 id="Accessibility_concerns">アクセシビリティの懸念</h2>

<p>ボタンはインタラクティブなコントロールであるため、フォーカス可能です。 ボタン (<code>button</code>) ロールがそれ自体ではフォーカスできない要素 (<code>&lt;span&gt;</code>、<code>&lt;div&gt;</code>、<code>&lt;p&gt;</code> など) に追加された場合、ボタンをフォーカス可能にするには <code>tabindex</code> 属性を使用する必要があります。</p>

<p class="warning"><strong>警告:</strong> ボタンロールでリンクをマークアップするときは注意してください。 ボタンは <kbd>Space</kbd> キーや <kbd>Enter</kbd> キーを使用してトリガーされることが期待されますが、リンクは <kbd>Enter</kbd> キーを使用してトリガーされることが期待されます。 つまり、リンクがボタンのように振る舞うために使用される場合、<code>role="button"</code> を追加するだけでは不十分です。 ネイティブなボタンとの一貫性を保つために、<kbd>Space</kbd> キーをリッスンするキーイベントハンドラーを追加する必要もあります。</p>

<p>ボタン (<code>button</code>) ロールを使用すると、スクリーンリーダーは要素をボタンとしてアナウンスします。 通常、「クリック」の後にボタンのアクセス可能な名前が続きます。 アクセス可能な名前は、要素のコンテンツ、または <code>aria-label</code> の値、または <code>aria-labelledby</code> 属性によって参照される要素、または含まれている場合は説明のいずれかです。</p>

<h2 id="Best_practices">ベストプラクティス</h2>

<p>リンクがボタンのアクションを実行する場合、要素に <code>role="button"</code> を指定すると、支援技術のユーザーが要素の機能を理解するのに役立ちます。 ただし、より良い解決策は、機能と ARIA のロールに一致するようにビジュアルデザインを調整することです。 可能な場合は、ボタン (<code>button</code>) ロールではなく、ネイティブな HTML のボタン (<code>&lt;button&gt;</code>、<code>&lt;input type="button"&gt;</code>、<code>&lt;input type="submit"&gt;</code>、<code>&lt;input type="reset"&gt;</code>、および　<code>&lt;input type="image"&gt;</code>) を使用することをお勧めします。 ネイティブな HTML のボタンは、すべてのユーザーエージェントと支援技術によってサポートされており、追加のカスタマイズを必要とせずに、デフォルトでキーボードとフォーカスの要件を提供します。</p>

<h2 id="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#button","button")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
  <tr>
   <td>{{SpecName("ARIA Authoring Practices","#button","button")}}</td>
   <td>{{Spec2('ARIA Authoring Practices')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Notes">注記</h2>

<h3 id="ARIA_attributes_used">使用された ARIA 属性</h3>

<ul>
 <li><code><a href="https://www.w3.org/TR/wai-aria/roles#button">button</a></code></li>
 <li><code><a href="https://www.w3.org/TR/wai-aria-1.1/#aria-pressed">aria-pressed</a></code></li>
 <li><code>aria-expanded</code></li>
 <li><code>aria-haspopup</code></li>
</ul>

<h3 id="Additional_resources">その他のリソース</h3>

<ul>
 <li><a href="https://www.w3.org/TR/html5/dom.html#aria-usage-note">HTML5 の強力でネイティブな意味論</a> (英語)</li>
 <li><a href="https://www.w3.org/TR/aria-in-html/">HTML での ARIA の使用に関する注意</a> (英語)</li>
 <li><a href="https://www.w3.org/TR/wai-aria-practices/examples/button/button.html">公式の WAI-ARIA サンプルコード</a> (英語)</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menubutton_role">ARIA: menubutton ロール</a></li>
</ul>


<section id="Quick_links">
  <ol>
   <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
  </ol>
</section>