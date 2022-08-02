---
title: Firefox ユーザーエージェント文字列リファレンス
slug: Web/HTTP/Headers/User-Agent/Firefox
tags:
  - Compatibility
  - Firefox
  - Firefox 4
  - Gecko
  - Gecko 2.0
  - Guide
  - User-agent
  - 互換性
translation_of: Web/HTTP/Headers/User-Agent/Firefox
---
<div>{{HTTPSidebar}}</div>

<p>この文書では、 Firefox 4 以降および <a href="/ja/docs/Mozilla/Gecko">Gecko</a> 2.0 以降ベースのアプリケーションで用いられるユーザーエージェント文字列について説明します。 Gecko 2.0 での変更点について詳しくは <a class="external" href="http://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/">Final User Agent string for Firefox 4</a> (ブログ記事) をご覧ください。<a href="/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent">ユーザーエージェントの検出</a>に関する文書や <a href="https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/">Hacks の投稿</a>もご覧ください。</p>

<h2 id="General_form" name="General_form">一般形</h2>

<p>Firefox 自身のユーザーエージェント文字列は、4つの部分に分けられます。</p>

<p><code>Mozilla/5.0 (<var>platform</var>; rv:<var>geckoversion</var>) Gecko/<var>geckotrail</var> Firefox/<var>firefoxversion</var></code></p>

<ul>
 <li><code>Mozilla/5.0</code> はブラウザーが Mozilla 互換であることを示す一般的なトークンであり、今日のほとんどすべてのブラウザーで共通しています。</li>
 <li>
  <p><code><var>platform</var></code> は、ブラウザーが動作しているネイティブプラットフォーム (例: Windows、Mac、Linux、または Android)、およびモバイル端末であるかを表します。 Firefox OS 端末は単に "<code>Mobile</code>" となり、ウェブがプラットフォームです。 <code><var>platform</var></code> は "; " (セミコロン) 区切りの複数トークンで構成されることがある点に注意してください。詳細や例については後述します。</p>

  <div class="blockIndicator note">
  <p>Firefox 69 で修正されましたが、以前の32ビット版の Firefox は64ビットプロセッサーで実行されている場合、システムが32ビット CPU であると報告していました。</p>
  </div>
 </li>
 <li><code>rv:<var>geckoversion</var></code> は、Gecko のリリースバージョンを示します (例: "<code>17.0</code>")。最近のブラウザーでは <code><var>geckoversion</var></code> と <code><var>firefoxversion</var></code> が同じです。</li>
 <li><code>Gecko/<var>geckotrail</var></code> は、ブラウザーが Gecko ベースであることを示します。</li>
 <li>デスクトップ版では、 <code><var>geckotrail</var></code> は固定文字列 "<code>20100101</code>" です。</li>
 <li><code>Firefox/<var>firefoxversion</var></code> はブラウザーが Firefox であることを示すとともに、バージョン番号を提供します (例: "<code>17.0</code>")。</li>
 <li>{{gecko_minversion_inline("10.0")}} モバイル版は Firefox 10 より、 <code><var>geckotrail</var></code> と <code><var>firefoxversion</var></code> が同じです。</li>
</ul>

<div class="note"><strong>メモ:</strong> Gecko ベースのブラウザー向けに推奨するスニッフィング法 (機能の検出を行う代わりにブラウザーエンジンのスニッフィングを<em>行わなければならない</em>場合) は、 "<code>Gecko</code>" および "<code>rv:</code>" の文字列が存在するかの検出です。これは、他ブラウザーの一部に "<code>like Gecko</code>" というトークンが含まれるためです。</div>

<p>Gecko ベースの他製品では下記 2 つの形式のいずれかであり、各トークンの意味は以下に記載した内容を除いて同じです:</p>

<p><code>Mozilla/5.0 (<var>platform</var>; rv:<var>geckoversion</var>) Gecko/<var>geckotrail</var> <var>appname</var>/<var>appversion</var></code><br>
 <code>Mozilla/5.0 (<var>platform</var>; rv:<var>geckoversion</var>) Gecko/<var>geckotrail</var> Firefox/<var>firefoxversion</var> <var>appname</var>/<var>appversion</var></code></p>

<ul>
 <li><code><var>appname</var>/<var>appversion</var></code> は、アプリケーションの名称とバージョンを示します。例えばこれは、"<code>Camino/2.1.1</code>" や "<code>SeaMonkey/2.7.1</code>" となります。</li>
 <li>
  <p><code>Firefox/<var>firefoxversion</var></code> は、Firefox を想定する Web サイトと最大限の互換性を得るために一部の Gecko ベースのブラウザーが組み入れる場合がある、省略可能な互換性トークンです。 <code><var>firefoxversion</var></code> は一般的に、導入した Gecko のバージョンに相当する Firefox のリリースを表します。一部の Gecko ベースのブラウザーはこのトークンを使用しないかもしれません。従って、スニッフィングの際は Firefox ではなく Gecko を探してください! このトークンを表示するかは、<em>"general.useragent.compatMode.firefox"</em> という真偽値の設定項目で制御できます。</p>
 </li>
</ul>

<h2 id="Mobile_and_Tablet_indicators" name="Mobile_and_Tablet_indicators">モバイルおよびタブレットの標示</h2>

<div class="note">
<p>Firefox 11 以降のみです。</p>
</div>

<p>UA 文字列で <code><var>platform</var></code> の部分は、 Firefox が携帯電話サイズまたはタブレットの機器で動作しているかを示します。携帯電話フォームファクターの機器で Firefox が動作している場合は、 <code>Mobile;</code> というトークンが UA 文字列で <code><var>platform</var></code> の部分に現れます。一方タブレット機器で Firefox が動作している場合は、 <code>Tablet;</code> というトークンが UA 文字列で <code><var>platform</var></code> の部分に現れます。例えば:</p>

<pre>Mozilla/5.0 (Android 4.4; <strong>Mobile</strong>; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; <strong>Tablet</strong>; rv:41.0) Gecko/41.0 Firefox/41.0</pre>

<div class="note">バージョン番号は重要ではありません。バージョン番号を基に判断しないでください。</div>

<p>ある機器のフォームファクター向けのコンテンツを決めるために好ましい方法は、CSS メディアクエリの使用です。しかし機器のフォームファクターの対象コンテンツを決めるために UA スニッフィングを用いている場合は、携帯電話フォームファクターでは <strong>Mobi</strong> (Opera Mobile が "Mobile" ではなく "Mobi" と表記するため) を検索するようにして、"Android" と機器のフォームファクターに対応関連があるとは<strong>考えない</strong>ようにしてください。そうすることで Firefox を他の携帯電話やタブレットのオペレーティングシステム向けに公開した場合や Android がラップトップ PC に使用された場合でもコードが動作します。また、タッチ対応端末を検出するには "Mobi" や "Tablet" を検索するのではなく、タッチ機能を検出してください。タブレットではないタッチ対応端末の場合もあります。</p>

<div class="note">Firefox OS 端末では、オペレーティングシステムを示す部分がない形式となります (例: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0")。Web がプラットフォームです。</div>

<h2 id="Windows" name="Windows">Windows</h2>

<p>Windows のユーザーエージェントには以下のバリエーションがあり、その中で <em>x.y</em> は Windows NT のバージョンを表します (例えば、Windows NT 6.1)。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Windows のバージョン</th>
   <th scope="col">Gecko のユーザーエージェント文字列</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>x86 CPU の Windows NT</td>
   <td>Mozilla/5.0 (Windows NT <em>x</em>.<em>y</em>; rv:10.0) Gecko/20100101 Firefox/10.0</td>
  </tr>
  <tr>
   <td>x64 CPU の Windows NT</td>
   <td>Mozilla/5.0 (Windows NT <em>x</em>.<em>y</em>; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0</td>
  </tr>
 </tbody>
</table>

<h2 id="Macintosh" name="Macintosh">Macintosh</h2>

<p>ここで <em>x.y</em> は Mac OS X のバージョンを表します (例えば、Mac OS X 10.6)。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Mac OS X のバージョン</th>
   <th scope="col">Gecko のユーザーエージェント文字列</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Intel x86 または x86_64 環境の Mac OS X</td>
   <td>Mozilla/5.0 (Macintosh; Intel Mac OS X <em>x.y</em>; rv:10.0) Gecko/20100101 Firefox/10.0</td>
  </tr>
  <tr>
   <td>PowerPC 環境の Mac OS X</td>
   <td>Mozilla/5.0 (Macintosh; PPC Mac OS X <em>x.y</em>; rv:10.0) Gecko/20100101 Firefox/10.0</td>
  </tr>
 </tbody>
</table>

<h2 id="Linux" name="Linux">Linux</h2>

<p>Linux には多様なプラットフォームが存在します。 Linux ディストリビューションによってはユーザーエージェント文字列を変更する拡張機能を含んでいることがあります。いくつかの一般的な例は以下のとおりです。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Linux のバージョン</th>
   <th scope="col">Gecko のユーザーエージェント文字列</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>i686 CPU の Linux デスクトップ</td>
   <td>Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0</td>
  </tr>
  <tr>
   <td>x86_64 CPU の Linux デスクトップ</td>
   <td>Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0</td>
  </tr>
  <tr>
   <td>Nokia N900 Linux モバイルの Fennec ブラウザー</td>
   <td>Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0</td>
  </tr>
 </tbody>
</table>

<h2 id="Android_version_40_and_below" name="Android_version_40_and_below">Android (バージョン 40 以下)</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">フォームファクター</th>
   <th scope="col">Gecko のユーザーエージェント文字列</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>携帯電話</td>
   <td>Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0</td>
  </tr>
  <tr>
   <td>タブレット</td>
   <td>Mozilla/5.0 (Android; Tablet; rv:40.0) Gecko/40.0 Firefox/40.0</td>
  </tr>
  <tr>
  </tr>
 </tbody>
</table>

<h2 id="Android_version_41_and_above" name="Android_version_41_and_above">Android (バージョン 41 以降)</h2>

<p>バージョン 41 以降の Android 版 Firefox では <var>platform</var> トークンに Android バージョンが含まれます。相互運用性向上のため、 Android 4 以前のバージョンでブラウザーが動作している場合は 4.4 と出力します。 Android バージョン 4 以降では実際のバージョン番号が出力されます。なお、Gecko エンジンはすべての Android バージョンに対して同じ機能を提供しています。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">フォームファクター</th>
   <th scope="col">Gecko のユーザーエージェント文字列</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>携帯電話</td>
   <td>Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0</td>
  </tr>
  <tr>
   <td>タブレット</td>
   <td>Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0</td>
  </tr>
 </tbody>
</table>

<h2 id="Focus_for_Android" name="Focus_for_Android">Focus for Android</h2>

<p>バージョン1から、 Focus は Android WebView によって実現されており、以下のユーザーエージェント文字列書式を使用しています。</p>

<pre>Mozilla/5.0 (Linux; &lt;Android Version&gt; &lt;Build Tag etc.&gt;) AppleWebKit/&lt;WebKit Rev&gt; (KHTML, like Gecko) Version/4.0 Focus/&lt;focusversion&gt; Chrome/&lt;Chrome Rev&gt; Mobile Safari/&lt;WebKit Rev&gt;</pre>

<p>タブレット版の WebView はモバイル版のミラーですが、 <code>Mobile</code> トークンを含みません。</p>

<p>バージョン6から、ユーザーが GeckoView ベースの Focus for Android を隠し設定で選択できるようになっています。 Gecko との互換性を示すため、 GeckoView の UA 文字列を使用します。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Focus Version (レンダリングエンジン)</th>
   <th scope="col">ユーザーエージェント文字列</th>
  </tr>
  <tr>
   <td>1.0 (WebView Mobile)</td>
   <td>Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36</td>
  </tr>
  <tr>
   <td>1.0 (WebView Tablet)</td>
   <td>Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36</td>
  </tr>
  <tr>
   <td>6.0 (GeckoView)</td>
   <td>Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0</td>
  </tr>
 </tbody>
</table>

<h2 id="Klar_for_Android">Klar for Android</h2>

<p>バージョン 4.1 以降、 Klar for Android は <a href="#Focus_for_Android">Focus for Android</a> と同じ UA 文字列を使用します。バージョン 4.1 より前では、 <var>Klar/&lt;version&gt;</var> <var>product/version</var> のトークンを送っていました。.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Klar バージョン (レンダリングエンジン)</th>
   <th scope="col">iOS 版 Firefox のユーザーエージェント文字列</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>1.0 (WebView)</td>
   <td>Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Klar/1.0 Chrome/58.0.3029.83 Mobile Safari/537.36</td>
  </tr>
  <tr>
   <td>4.1+ (WebView)</td>
   <td>Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/4.1 Chrome/62.0.3029.83 Mobile Safari/537.36</td>
  </tr>
  <tr>
   <td>6.0+ (GeckoView)</td>
   <td>Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0</td>
  </tr>
 </tbody>
</table>

<h2 id="Focus_for_iOS" name="Focus_for_iOS">Focus for iOS</h2>

<p>Focus for iOS のバージョン7は、以下の形式のユーザーエージェント文字列を使用します。</p>

<pre>Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15</pre>

<p>メモ: このユーザーエージェント文字列は iPhone XR シミュレーターから取得したもので、端末によって異なるかもしれません。</p>

<h2 id="Firefox_for_Fire_TV" name="Firefox_for_Fire_TV">Firefox for Fire TV</h2>

<p>Firefox for Fire TV のバージョン3 (およびそれ以前もおそらく) は、以下の書式のユーザーエージェント文字列を使用します。</p>

<pre>Mozilla/5.0 (Linux; &lt;Android version&gt;) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/&lt;firefoxversion&gt; Chrome/&lt;Chrome Rev&gt; Safari/&lt;WebKit Rev&gt;</pre>

<table class="standard-table">
 <tbody>
  <tr>
   <td><strong>Firefox TV バージョン</strong></td>
   <td><strong>ユーザーエージェント文字列</strong></td>
  </tr>
  <tr>
   <td>v3.0</td>
   <td>Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36</td>
  </tr>
 </tbody>
</table>

<h2 id="Firefox_for_Echo_Show" name="Firefox_for_Echo_Show">Firefox for Echo Show</h2>

<p>Firefox for Echo Show はバージョン1.1から、以下の書式のユーザーエージェント文字列を使用しています。</p>

<pre>Mozilla/5.0 (Linux; &lt;Android version&gt;) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/&lt;firefoxversion&gt; Chrome/&lt;Chrome Rev&gt; Safari/&lt;WebKit Rev&gt;
</pre>

<table class="standard-table">
 <tbody>
  <tr>
   <td><strong>Firefox for Echo Show バージョン</strong></td>
   <td><strong>ユーザーエージェント文字列</strong></td>
  </tr>
  <tr>
   <td>v1.1</td>
   <td>Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36</td>
  </tr>
 </tbody>
</table>

<h2 id="Firefox_OS" name="Firefox_OS">Firefox OS</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">フォームファクター</th>
   <th scope="col">Gecko のユーザーエージェント文字列</th>
  </tr>
  <tr>
   <td>携帯電話</td>
   <td>Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0</td>
  </tr>
  <tr>
   <td>タブレット</td>
   <td>Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0</td>
  </tr>
  <tr>
   <td>テレビ</td>
   <td>Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0</td>
  </tr>
  <tr>
   <td>端末特有</td>
   <td>Mozilla/5.0 (Mobile; <em><strong>nnnn;</strong></em> rv:26.0) Gecko/26.0 Firefox/26.0</td>
  </tr>
 </tbody>
</table>

<h3 id="Device-specific_user_agent_strings" name="Device-specific_user_agent_strings">端末特有のユーザーエージェント文字列</h3>

<p>Mozilla は<strong>強く反対</strong>していますが、残念ながら一部の機器メーカーは端末の ID を表すトークンを、ユーザーエージェント文字列に含めています。これに当てはまる場合は Firefox OS のユーザーエージェント文字列が、前出の表で示したように端末特有の文字列になります。 <em><strong>nnnn;</strong></em> が、端末を示すメーカーのコードです (<a href="https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements">ガイドライン</a>もご覧ください)。私たちは "<strong>NexusOne;</strong>", "<strong>ZTEOpen;</strong>", "<strong>Open C;</strong>" などを見つけました (空白を入れることも非推奨です)。ユーザーエージェント検出のロジックを支援するためにこの情報を提供しますが、 Mozilla はユーザーエージェント文字列で端末 ID を検出することを推奨しません。</p>

<p>ユーザーエージェント文字列に端末 ID を持つ場合を含むすべてのモバイル端末を検出するであろう、JavaScript の正規表現は以下のとおりです。</p>

<pre>/mobi/i</pre>

<p><code>i</code> は大文字・小文字を区別しないことを示し、 <code>mobi</code> がすべてのモバイルブラウザーに一致します。</p>

<h3 id="Firefox_OS_version_number" name="Firefox_OS_version_number">Firefox OS のバージョン番号</h3>

<p>Firefox OS のバージョン番号は UA 文字列に含まれませんが、 UA 文字列には Gecko のバージョンからバージョン情報を特定することができます。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Firefox OS のバージョン番号</th>
   <th scope="col">Gecko のバージョン番号</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>1.0.1</td>
   <td>18.0</td>
  </tr>
  <tr>
   <td>1.1</td>
   <td>18.1</td>
  </tr>
  <tr>
   <td>1.2</td>
   <td>26.0</td>
  </tr>
  <tr>
   <td>1.3</td>
   <td>28.0</td>
  </tr>
  <tr>
   <td>1.4</td>
   <td>30.0</td>
  </tr>
  <tr>
   <td>2.0</td>
   <td>32.0</td>
  </tr>
  <tr>
   <td>2.1</td>
   <td>34.0</td>
  </tr>
  <tr>
   <td>2.2</td>
   <td>37</td>
  </tr>
  <tr>
   <td>2.5</td>
   <td>44</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p>この対応関係は <a href="https://hg.mozilla.org/releases">Mercurial リポジトリ名</a>から容易に判断できます。<code>mozilla-b2g</code> で始まるリポジトリが Firefox OS のリリースリポジトリであり、Firefox OS と Gecko の両バージョンがその名前に含まれています。</p>
</div>

<p>Firefox OS のバージョン番号は 4 つの数字があります: <samp>X.X.X.Y</samp>. 始めの 2 つの数字は Mozilla の製品チームが管理しており、新機能を伴うバージョンを表します (例: v1.1、1.2 など)。3 番目の番号はセキュリティ更新向けの定期的なバージョンの識別 (最大 6 週間ごと) として増えていきます。4 番目の番号は OEM が管理します。</p>

<h2 id="iOS">iOS</h2>

<p>iOS 版の Firefox では既定の Mobile Safari の UA 文字列に <strong>FxiOS/&lt;version&gt;</strong> トークンを追加したものになります。これは <a href="https://developer.chrome.com/multidevice/user-agent#chrome_for_ios_user_agent">Chrome for iOS の UA 定義と同じ形式です</a>。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">フォームファクター</th>
   <th scope="col">iOS 版 Firefox のユーザエージェント文字列</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>iPod</td>
   <td>Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) <strong>FxiOS/1.0</strong> Mobile/12F69 Safari/600.1.4</td>
  </tr>
  <tr>
   <td>iPhone</td>
   <td>Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) <strong>FxiOS/1.0</strong> Mobile/12F69 Safari/600.1.4</td>
  </tr>
  <tr>
   <td>iPad</td>
   <td>Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) <strong>FxiOS/1.0</strong> Mobile/12F69 Safari/600.1.4</td>
  </tr>
 </tbody>
</table>

<h2 id="Firefox_Web_Runtime">Firefox Web Runtime</h2>

<p>Web Runtime はデスクトップ版 Firefox と同じユーザーエージェント文字列を使います。</p>

<h2 id="Other_Gecko-based_browsers" name="Other_Gecko-based_browsers">その他の Gecko ベースのブラウザー</h2>

<p>以下は、さまざまなプラットフォームの Gecko ベースのブラウザーにおける UA 文字列の一例です。これらの多くはまだ Gecko 2.0 ベースで公開されていないことに注意してください!</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">ブラウザー</th>
   <th scope="col">Gecko のユーザーエージェント文字列</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Maemo 版 Firefox (Nokia N900)</td>
   <td>Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1</td>
  </tr>
  <tr>
   <td>Mac 版 Camino</td>
   <td>Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Camino/2.2.1</td>
  </tr>
  <tr>
   <td>Windows 版 SeaMonkey</td>
   <td>Mozilla/5.0 (Windows NT 5.2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1</td>
  </tr>
  <tr>
   <td>Mac 版 SeaMonkey</td>
   <td>Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1</td>
  </tr>
  <tr>
   <td>Linux 版 SeaMonkey</td>
   <td>Mozilla/5.0 (X11; Linux i686; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1</td>
  </tr>
 </tbody>
</table>

<h2 id="Implementation_notes_for_applications.2C_vendors.2C_and_extensions" name="Implementation_notes_for_applications.2C_vendors.2C_and_extensions"><span><span id="implementation">アプリケーション、ベンダー、拡張向けの実装上の注意</span></span></h2>

<p>Firefox 4 および Gecko 2.0 以前では、拡張機能が設定項目 <code>general.useragent.extra.<em>identifier</em></code> を通してユーザーエージェント文字列を追加することができました (<a href="/ja/docs/User_Agent_Strings_Reference" title="User_Agent_Strings_Reference">ユーザーエージェント文字列の旧版リファレンス</a> をご覧ください。しかし、これは {{Bug(581008)}} により不可能になりました。</p>

<p>以前は特定のプラグイン・アドオン・拡張機能が、自身がインストールされていることを知らせるためにユーザーエージェント文字列を追加していました。現在、やむを得ず必要である場合に推奨される方法 (すべての要求が遅くなることに留意してください) は、<a href="/ja/docs/Setting_HTTP_request_headers" title="Setting_HTTP_request_headers">カスタム HTTP ヘッダを設定すること</a> です。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://lawrencemandel.com/2012/07/27/decision-made-firefox-os-user-agent-string/">Firefox OS User Agent String</a> (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=777710">bug 777710</a> に言及したブログ投稿)</li>
 <li><a class="external" href="https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/">Final User Agent string for Firefox 4</a> (ブログ記事)</li>
 <li><a href="/ja/docs/Browser_Detection_and_Cross_Browser_Support" title="Browser_Detection_and_Cross_Browser_Support">クロスブラウザーで UA 文字列のスニッフィングをサポートする</a> ための推奨事項</li>
 <li><a href="/ja/docs/Web/API/window.navigator.userAgent">window.navigator.userAgent</a></li>
 <li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1169772">Add Android version to Fennec UA String (bug 1169772)</a></li>
</ul>

<hr>
<p><a class="link-news" href="news://news.mozilla.org/netscape.public.mozilla.netlib">mozilla.dev.platform</a> へのコメント</p>
