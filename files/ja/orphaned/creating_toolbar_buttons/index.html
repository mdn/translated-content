---
title: Creating toolbar buttons
slug: orphaned/Creating_toolbar_buttons
tags:
  - Add-ons
  - Extensions
original_slug: Creating_toolbar_buttons
---
<p> </p>
<p>この記事ではツールキットアプリケーション（Firefox、Thunderbird、Nvu など）に <a href="ja/XUL_Overlays">オーバレイ</a> を使用してツールバーボタンを追加する方法を説明します。<a href="ja/XUL">XUL</a> と <a href="ja/CSS">CSS</a> の基礎知識を備えた <a href="ja/Extension">拡張機能</a> の開発者が対象です。</p>
<p>また、Firefox の拡張機能の作り方の基礎に通じており、<a href="ja/Building_an_Extension">Hello World 拡張機能</a> を動作させられることも前提です。別のチュートリアルも <a href="ja/Custom_Toolbar_Button">利用可能</a> です。そちらは全体の過程を最初から見ていく形式です。</p>
<h3 id=".E3.82.AA.E3.83.BC.E3.83.90.E3.83.AC.E3.82.A4.E3.81.AE.E4.BD.9C.E6.88.90" name=".E3.82.AA.E3.83.BC.E3.83.90.E3.83.AC.E3.82.A4.E3.81.AE.E4.BD.9C.E6.88.90">オーバレイの作成</h3>
<p>はじめに、機能を強化させたいツールバーを含む文書への <a href="ja/XUL_Overlays">オーバレイ</a> を作成する必要があります。オーバレイの説明はこのチュートリアルでは扱いません。<a href="ja/XUL_Tutorial/Cross_Package_Overlays">XUL チュートリアル</a> をご覧ください。</p>
<p>文書をオーバレイするには、その文書の URI を知らなければなりません。よくオーバレイされる文書の URI は <a href="#.E3.82.88.E3.81.8F.E3.82.AA.E3.83.BC.E3.83.90.E3.83.AC.E3.82.A4.E3.81.95.E3.82.8C.E3.82.8B.E3.83.84.E3.83.BC.E3.83.AB.E3.83.90.E3.83.BC.E3.82.92.E6.8C.81.E3.81.A4.E3.82.A6.E3.82.A3.E3.83.B3.E3.83.89.E3.82.A6.E3.81.AE.E3.83.AA.E3.82.B9.E3.83.88">このページの最後</a> にあります。</p>
<div class="note">
 注意：
 <i>
  <a class="external" rel="freelink">chrome://messenger/content/mailWindowOverlay.xul</a></i>
 にオーバレイする人がいます。これによって mailWindowOverlay.xul が適用されるすべてのウィンドウ（たとえばメインウィンドウやメッセージ表示ウィンドウ）にボタンが現れます。確認してください。</div>
<h3 id=".E3.83.84.E3.83.BC.E3.83.AB.E3.83.90.E3.83.BC.E3.83.9C.E3.82.BF.E3.83.B3.E3.81.AE.E8.BF.BD.E5.8A.A0" name=".E3.83.84.E3.83.BC.E3.83.AB.E3.83.90.E3.83.BC.E3.83.9C.E3.82.BF.E3.83.B3.E3.81.AE.E8.BF.BD.E5.8A.A0">ツールバーボタンの追加</h3>
<p>ツールキットアプリケーションのツールバーはカスタマイズ可能です。そのため、拡張機能の練習として、直接ツールバーにボタンを追加するのではなく、ツールバーボタンをツールバーパレットに追加するというものがよくあります。直接追加することも可能ですが、非推奨であり、実装も面倒です。</p>
<p>ツールバーパレットにボタンを追加するのはとても簡単です。このようにこのコードをオーバレイに追加するだけです：</p>
<pre>&lt;toolbarpalette id="BrowserToolbarPalette"&gt;
  &lt;toolbarbutton id="myextension-button" class="toolbarbutton-1"
    label="&amp;toolbarbutton.label;" tooltiptext="&amp;toolbarbutton.tooltip;"
    oncommand="MyExtension.onToolbarButtonCommand(event);"/&gt;
&lt;/toolbarpalette&gt;
</pre>
<p>注意：</p>
<ul>
 <li>パレットの <code>id</code>（この例では <code>BrowserToolbarPalette</code>）はボタンを追加したいツールバーのあるウィンドウによって異なります。<a href="#.E3.82.88.E3.81.8F.E3.82.AA.E3.83.BC.E3.83.90.E3.83.AC.E3.82.A4.E3.81.95.E3.82.8C.E3.82.8B.E3.83.84.E3.83.BC.E3.83.AB.E3.83.90.E3.83.BC.E3.82.92.E6.8C.81.E3.81.A4.E3.82.A6.E3.82.A3.E3.83.B3.E3.83.89.E3.82.A6.E3.81.AE.E3.83.AA.E3.82.B9.E3.83.88">下</a> のよく使われるパレットの ID のリストを参照してください。</li>
 <li><code>class="toolbarbutton-1"</code> によって、「アイコンと文字」モードで正常にツールバーボタンが表示されるようになります。さらにパッディングも調整されます。</li>
 <li><code>oncommand</code> 属性で、ボタンがクリックされたときに実行されるコマンドを指定してください。ミドルクリックを扱いたい場合は <code>onclick</code> ハンドラを追加し、その中で <code>event.button</code> を確認してください。</li>
</ul>
<pre>onclick: function(event) {
  switch(event.button) {
    case 0:
      // Left click
      break;
    case 1:
      // Middle click
      break;
    case 2:
      // Right click
      break;
  }
}
</pre>
<p>さらにボタンを追加するには、<code>&lt;toolbarbutton&gt;</code> 要素を <code>&lt;toolbarpalette&gt;</code> 要素の内側にさらに追加してください。<code>&lt;toolbarbutton&gt;</code> 以外の要素は <code>&lt;toolbaritem&gt;</code> 内に内包するようにしてください。</p>
<h3 id=".E3.83.9C.E3.82.BF.E3.83.B3.E3.81.AE.E8.A3.85.E9.A3.BE" name=".E3.83.9C.E3.82.BF.E3.83.B3.E3.81.AE.E8.A3.85.E9.A3.BE">ボタンの装飾</h3>
<p>ツールバーボタンのほとんどはアイコンが付いています。ボタンに画像を付けるには Mozilla のスキン機能を使用します。これについてよく知らないのであれば、<a class="external" href="http://www.borngeek.com/firefox/toolbar-tutorial/ch_5.html">Jonah Bishop によるすばらしいツールバーチュートリアルのスキンの使用に関するセクション</a> を読んでおくことをお勧めします。その記事ではボタンを作るだけというよりもむしろツールバー全体を作ることを扱っていますが、私たちがここで使うテクニックの説明としてはすばらしいものです。</p>
<h4 id=".E3.82.A2.E3.82.A4.E3.82.B3.E3.83.B3.E3.81.AE.E3.82.B5.E3.82.A4.E3.82.BA" name=".E3.82.A2.E3.82.A4.E3.82.B3.E3.83.B3.E3.81.AE.E3.82.B5.E3.82.A4.E3.82.BA">アイコンのサイズ</h4>
<p>ツールバーボタンは大小 2 種類のサイズを持ちえます。つまり、ツールバーボタンにそれぞれ 2 つのアイコンを持たせる必要があるということです。さまざまなアプリケーションでの大小両方のアイコンの寸法は以下の表のとおりです（他のアプリケーションについての情報もご自由に追加してください【訳註：英語版に追加すべき】）：</p>
<table>
 <tbody>
  <tr>
   <th>アプリケーション（テーマ名）</th>
   <th>大きいアイコンのサイズ</th>
   <th>小さいアイコンのサイズ</th>
  </tr>
  <tr>
   <td>Firefox 1.0 (Winstripe)</td>
   <td>24x24</td>
   <td>16x16</td>
  </tr>
  <tr>
   <td>Thunderbird 1.0 (Qute)</td>
   <td>24x24</td>
   <td>16x16</td>
  </tr>
 </tbody>
</table>
<h4 id=".E3.82.B9.E3.82.BF.E3.82.A4.E3.83.AB.E3.82.B7.E3.83.BC.E3.83.88" name=".E3.82.B9.E3.82.BF.E3.82.A4.E3.83.AB.E3.82.B7.E3.83.BC.E3.83.88">スタイルシート</h4>
<p>ツールバーボタンに画像を指定するために、以下の CSS ルールを使用してください：</p>
<pre>/*  skin/toolbar-button.css  */

#myextension-button {
  list-style-image: url("chrome://myextension/skin/btn_large.png");
}

toolbar[iconsize="small"] #myextension-button {
  list-style-image: url("chrome://myextension/skin/btn_small.png");
}
</pre>
<h4 id=".E3.82.B9.E3.82.BF.E3.82.A4.E3.83.AB.E3.82.B7.E3.83.BC.E3.83.88.E3.81.AE.E9.81.A9.E7.94.A8" name=".E3.82.B9.E3.82.BF.E3.82.A4.E3.83.AB.E3.82.B7.E3.83.BC.E3.83.88.E3.81.AE.E9.81.A9.E7.94.A8">スタイルシートの適用</h4>
<p>作成したスタイルシートをオーバレイファイルと Customize Toolbar ウィンドウの両方に適用するのを忘れないでください。オーバレイファイルに適用するには、この処理命令 (PI) をオーバレイファイルの頭に付けてください：</p>
<pre class="eval">&lt;?xml-stylesheet href="<a class="external" rel="freelink">chrome://myextension/skin/toolbar-button.css</a>" type="text/css"?&gt;
</pre>
<p>Customize Toolbar ウィンドウ (&lt;tt&gt;<a class="external" rel="freelink">chrome://global/content/customizeToolbar.xul</a>&lt;/tt&gt;) に適用するには、以下のような &lt;tt&gt;skin/contents.rdf&lt;/tt&gt; を使用することのがよいでしょう：</p>
<pre>&lt;?xml version="1.0"?&gt;
&lt;RDF xmlns="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:chrome="http://www.mozilla.org/rdf/chrome#"&gt;

  &lt;Seq about="urn:mozilla:skin:root"&gt;
    &lt;li resource="urn:mozilla:skin:classic/1.0"/&gt;
  &lt;/Seq&gt;

  &lt;Description about="urn:mozilla:skin:classic/1.0"&gt;
    &lt;chrome:packages&gt;
      &lt;Seq about="urn:mozilla:skin:classic/1.0:packages"&gt;
        &lt;li resource="urn:mozilla:skin:classic/1.0:myextension"/&gt;
      &lt;/Seq&gt;
    &lt;/chrome:packages&gt;
  &lt;/Description&gt;

  &lt;Seq about="urn:mozilla:stylesheets"&gt;
    &lt;li resource="chrome://global/content/customizeToolbar.xul"/&gt;
  &lt;/Seq&gt;

  &lt;Seq about="chrome://global/content/customizeToolbar.xul"&gt;
    &lt;li&gt;chrome://myextension/skin/toolbar-button.css&lt;/li&gt;
  &lt;/Seq&gt;
&lt;/RDF&gt;
</pre>
<p>Firefox/Thunderbird 1.5 向けの拡張機能では代わりに以下のような <a href="ja/Chrome.manifest">chrome.manifest</a> を使用すべきです：</p>
<pre class="eval">skin	myextension	classic/1.0	chrome/skin/
style	<a class="external" rel="freelink">chrome://global/content/customizeToolbar.xul</a>	<a class="external" rel="freelink">chrome://myextension/skin/toolbar-button.css</a>
</pre>
<h3 id=".E3.82.88.E3.81.8F.E3.81.82.E3.82.8B.E9.96.93.E9.81.95.E3.81.84" name=".E3.82.88.E3.81.8F.E3.81.82.E3.82.8B.E9.96.93.E9.81.95.E3.81.84">よくある間違い</h3>
<p>これは拡張機能作者がよく起こす間違いとその症状、そしてその解決策のリストです。</p>
<p><b>問題点：</b> ツールバー上や Customize Toolbars ウィンドウ内に自分のアイコンではなく、デフォルトのボタン全体が表示される。</p>
<p><b>原因：</b> スタイルシートが正しく記述されていないか、またはスタイルシートが適用されていない。</p>
<p><b>解決法：</b> スタイルシートに誤りがないか、&lt;tt&gt;contents.rdf&lt;/tt&gt;（または &lt;tt&gt;chrome.manifest&lt;/tt&gt;）に誤りがないかを確認し、確実に &lt;tt&gt;customizeToolbar.xul&lt;/tt&gt; に <a href="#.E3.82.B9.E3.82.BF.E3.82.A4.E3.83.AB.E3.82.B7.E3.83.BC.E3.83.88.E3.81.AE.E9.81.A9.E7.94.A8">スタイルシートを適用する</a>。</p>
<h3 id=".E3.82.88.E3.81.8F.E3.82.AA.E3.83.BC.E3.83.90.E3.83.AC.E3.82.A4.E3.81.95.E3.82.8C.E3.82.8B.E3.83.84.E3.83.BC.E3.83.AB.E3.83.90.E3.83.BC.E3.82.92.E6.8C.81.E3.81.A4.E3.82.A6.E3.82.A3.E3.83.B3.E3.83.89.E3.82.A6.E3.81.AE.E3.83.AA.E3.82.B9.E3.83.88" name=".E3.82.88.E3.81.8F.E3.82.AA.E3.83.BC.E3.83.90.E3.83.AC.E3.82.A4.E3.81.95.E3.82.8C.E3.82.8B.E3.83.84.E3.83.BC.E3.83.AB.E3.83.90.E3.83.BC.E3.82.92.E6.8C.81.E3.81.A4.E3.82.A6.E3.82.A3.E3.83.B3.E3.83.89.E3.82.A6.E3.81.AE.E3.83.AA.E3.82.B9.E3.83.88">よくオーバレイされるツールバーを持つウィンドウのリスト</h3>
<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>URL</th>
   <th>アプリケーションと影響のあるウィンドウ</th>
   <th>パレット id</th>
  </tr>
  <tr>
   <td><small><a class="external" rel="freelink">chrome://browser/content/browser.xul</a></small></td>
   <td>Firefox - メインウィンドウ</td>
   <td>BrowserToolbarPalette</td>
  </tr>
  <tr>
   <td><small><a class="external" rel="freelink">chrome://messenger/content/messenger.xul</a></small></td>
   <td>Thunderbird - メインウィンドウ</td>
   <td>MailToolbarPalette</td>
  </tr>
  <tr>
   <td><small><a class="external" rel="freelink">chrome://messenger/content/messenger...gercompose.xul</a></small></td>
   <td>Thunderbird - 編集ウィンドウ</td>
   <td>MsgComposeToolbarPalette</td>
  </tr>
  <tr>
   <td><small><a class="external" rel="freelink">chrome://messenger/content/addressbo...ddressbook.xul</a></small></td>
   <td>Thunderbird - アドレス帳</td>
   <td>AddressBookToolbarPalette</td>
  </tr>
  <tr>
   <td><small><a class="external" rel="freelink">chrome://editor/content/editor.xul</a></small></td>
   <td>Nvu - メインウィンドウ</td>
   <td>NvuToolbarPalette</td>
  </tr>
  <tr>
   <td><small><a class="external" rel="freelink">chrome://calendar/content/calendar.xul</a></small></td>
   <td>Sunbird - メインウィンドウ</td>
   <td>calendarToolbarPalette</td>
  </tr>
 </tbody>
</table>
<h3 id=".E8.A9.B3.E7.B4.B0.E6.83.85.E5.A0.B1" name=".E8.A9.B3.E7.B4.B0.E6.83.85.E5.A0.B1">詳細情報</h3>
<ul>
 <li>XulPlanet.com リファレンス: <a class="external" href="http://xulplanet.com/references/elemref/ref_toolbarbutton.html"><code>&lt;toolbarbutton&gt;</code></a>、<a class="external" href="http://xulplanet.com/references/elemref/ref_toolbaritem.html"><code>&lt;toolbaritem&gt;</code></a></li>
 <li><a class="external" href="http://forums.mozillazine.org/viewtopic.php?t=220220">ツールバーボタンのラベルの位置を調整する方法</a></li>
 <li>拡張機能のインストール直後に（パレットにではなく）ツールバーにアイテムを追加することに関する <a class="external" href="http://forums.mozillazine.org/viewtopic.php?t=189667">フォーラムのスレッド</a>。この方法は非推奨であることに注意。</li>
 <li>MDC 上には SeaMonkey のさまざまなウィンドウにボタンを追加することについての <a href="ja/Custom_Toolbar_Button/SeaMonkey">別のページ</a> があります。ChatZilla へのオーバレイについての便利な情報が載っています。</li>
</ul>
