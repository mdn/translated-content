---
title: HTMLElement.hidden
slug: Web/API/HTMLElement/hidden
tags:
  - API
  - Attribute
  - Element
  - HTML
  - HTML element
  - Property
  - Reference
  - hidden
translation_of: Web/API/HTMLElement/hidden
---
<div>
<div>{{ APIRef("HTML DOM") }}</div>
</div>

<p><span class="seoSummary">{{domxref("HTMLElement")}} の <strong><code>hidden</code></strong> プロパティは {{jsxref("Boolean")}}  で、要素が非表示の場合は <code>true</code> で、それ以外の場合は <code>false</code> です。 これは、CSS プロパティの {{cssxref("display")}} を使用して要素の可視性を制御することとはまったく異なります。</span> <code>hidden</code> プロパティはすべてのプレゼンテーションモードに適用され、ユーザーが直接アクセスできるコンテンツを非表示にするために使用しないでください。</p>

<p><code>hidden</code> の適切な使用例は次のとおりです。</p>

<ul>
 <li>まだ関連性はないが、後で必要になる可能性のあるコンテンツ</li>
 <li>以前は必要であったが、もはや存在しないコンテンツ</li>
 <li>テンプレートのようにページの他の部分で再利用されるコンテンツ</li>
 <li>描画バッファとしてオフスクリーンのキャンバスを作成する</li>
</ul>

<p>不適切な使用例には次のものがあります。</p>

<ul>
 <li>タブ付きダイアログボックスでのパネルの非表示</li>
 <li>あるプレゼンテーションでコンテンツを非表示にし、他のプレゼンテーションでは表示されるようにする</li>
</ul>

<div class="note">
<p><code>hidden</code> でない要素は、<code>hidden</code> 要素にリンクしてはいけません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>isHidden</em> = <em>HTMLElement</em>.hidden;


<em>HTMLElement</em>.hidden = true | false;</pre>

<h3 id="Value" name="Value">値</h3>

<p>要素がビューから隠されている場合に <code>true</code> になる <code>Boolean</code>。 それ以外の場合、値は <code>false</code> です。</p>

<h2 id="Example" name="Example">例</h2>

<p>次に、非表示のブロックを使用して、ユーザーが珍しい要求に同意した後に表示されるお礼のメッセージを含める例を示します。</p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<pre class="brush: js">document.getElementById("okButton")
        .addEventListener("click", function() {
  document.getElementById("welcome").hidden = true;
  document.getElementById("awesome").hidden = false;
}, false);</pre>

<p>このコードは、ウェルカムパネルを非表示にして、その場所に "awesome" という名前のフォローアップパネルを表示する、ウェルカムパネルの [OK] ボタンのハンドラを設定します。</p>

<h3 id="HTML" name="HTML">HTML</h3>

<p>2つのボックスの HTML は次のとおりです。</p>

<h4 id="The_welcome_panel" name="The_welcome_panel">ウェルカムパネル</h4>

<pre class="brush: html">&lt;div id="welcome" class="panel"&gt;
  &lt;h1&gt;Foobar.com へようこそ！&lt;/h1&gt;
  &lt;p&gt;[OK] をクリックすると、あなたは毎日が素晴らしいことに同意します！&lt;/p&gt;
  &lt;button class="button" id="okButton"&gt;OK&lt;/button&gt;
&lt;/div&gt;</pre>

<p>この HTML は、ユーザーをサイトに歓迎し、[OK] ボタンをクリックして同意していることを伝えるパネルを（{{HTMLElement("div")}} ブロック内に）作成します。</p>

<h4 id="The_follow-up_panel" name="The_follow-up_panel">フォローアップパネル</h4>

<p>ユーザーがウェルカムパネルの [OK] ボタンをクリックすると、JavaScript コードは2つのパネルのそれぞれの <code>hidden</code> の値を変更して2つのパネルを入れ替えます。 フォローアップパネルは、HTML では次のようになります。</p>

<pre class="brush: html">&lt;div id="awesome" class="panel" hidden&gt;
  &lt;h1&gt;ありがとう！&lt;/h1&gt;
  &lt;p&gt;今日は素晴らしいことに同意してくれてありがとう！
  さあ、世界をもっと素晴らしいものにするために、
  そこから出て、素晴らしいことをしてください！&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<p>コンテンツは、以下の CSS を使用してスタイル設定されます。</p>

<pre class="brush: css">.panel {
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font: 22px "Open Sans", Helvetica, Arial, sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Example', 560, 200) }}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "interaction.html#dom-hidden", "HTMLElement.hidden")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "editing.html#the-hidden-attribute", "HTMLElement.hidden")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "editing.html#the-hidden-attribute", "HTMLElement.hidden")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.hidden")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Element.hidden")}}</li>
 <li>{{cssxref("display")}}</li>
</ul>
