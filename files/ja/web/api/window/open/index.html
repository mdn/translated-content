---
title: Window.open()
slug: Web/API/Window/open
tags:
  - API
  - DOM
  - Method
  - NeedsMarkupWork
  - NeedsUpdate
  - Reference
  - Window
  - open
translation_of: Web/API/Window/open
---
<div>{{APIRef}}</div>

<p>{{domxref("Window")}} インターフェイスの <strong><code>open()</code></strong> メソッドは、指定されたリソースを、新しい、または既存の指定された名前を持った閲覧コンテキスト (ウィンドウ、 {{HTMLElement("iframe")}}、タブ) に読み込みます。その名前が存在しない場合は、新しい閲覧コンテキストが新しいタブまたは新しいウィンドウに開かれ、指定されたリソースがそこに読み込まれます。</p>

<h2 id="Syntax">構文</h2>

<pre
  class="brush: js">var window = window.open(url, windowName, [windowFeatures]);</pre>

<h3 id="Parameters">引数</h3>

<dl>
 <dt><code><var>url</var></code></dt>
 <dd>{{domxref("DOMString")}} で、読み込むリソースの URL を示します。これは HTML ページ、画像ファイル、その他のブラウザーが対応しているリソースのパスまたは URL にすることができます。空文字列 ("") が <code><var>url</var></code> として指定されると、対象の閲覧コンテキストに空のページが開きます。</dd>
 <dt><code><var>windowName</var></code> {{optional_inline}}</dt>
 <dd>{{domxref("DOMString")}} で、指定したリソースを読み込むための閲覧コンテキスト (ウィンドウ、 {{HTMLElement("iframe")}}、タブ) の名前を指定します。名前が既存のコンテキストを示していない場合は、新しいウィンドウが作成され、 <code><var>windowName</var></code> で指定した名前が与えられます。<br>
 <br>
 この名前は {{HTMLElement("a", "", "#attr-target")}} や {{HTMLElement("form", "", "#attr-target")}} 要素の <code>target</code> 属性のターゲットとして使うことができます。この名前はホワイトスペースを含んではいけません。これはウィンドウのタイトルとしては使用されないことに注意してください。</dd>
 <dt><code><var>windowFeatures</var></code> {{optional_inline}}</dt>
 <dd>{{domxref("DOMString")}} で、ウィンドウ特性とそれに対応する値を "name=value" の形式で指定したもののカンマで区切りのリストです。これらの機能には、ウィンドウの既定のサイズや位置、ツールバーを含めるかどうかなどのオプションが含まれます。文字列にはホワイトスペースを入れてはいけません。指定できる各機能については、下記の<a href="#window_features">ウィンドウ特性</a>を参照してください。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p><code>WindowProxy</code> オブジェクトで、基本的には新しく作成されたウィンドウを表す {{domxref("Window")}} オブジェクトの薄いラッパーであり、すべての機能が利用可能なものです。ウィンドウを開くことができなかった場合、返される値は代わりに <code>null</code> となります。返された参照は、<a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンポリシー</a>のセキュリティ要件に準拠している限り、新しいウィンドウのプロパティやメソッドにアクセスするために使用することができます。</p>

<h2 id="Description">解説</h2>

<p><code>open()</code> メソッドは、ブラウザーの新しい副ウィンドウを生成します。それは、ファイルメニューから新しいウィンドウを選ぶのに似ています。引数 <code><var>url</var></code> は、新しいウィンドウにおいて読み取り読み込む URL を指定します。 <code><var>url</var></code> が空文字列の場合は、メインウィンドウの既定のツールバーを持った新しい空のウィンドウ (URL は <code>about:blank</code>) が生成されます。</p>

<p>リモートの URL は、すぐには読み込まれないことに注意してください。 <code>window.open()</code> から返ったとき、ウィンドウは常に <code>about:blank</code> を含んでいます。 URL が実際に読み込まれるまでには猶予期間があり、現在のスクリプトブロックが実行を終えた後に開始されます。ウィンドウの生成と参照されるリソースの読み込みは、非同期に行われます。</p>

<h2 id="Examples">例</h2>

<pre class="brush:js">var windowObjectReference;
var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

function openRequestedPopup() {
  windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", windowFeatures);
}</pre>

<pre class="brush:js">var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "http://www.domainname.ext/path/ImageFile.png",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}</pre>

<p>その名前を持っているウィンドウがすでに存在する場合は、 <code><var>url</var></code> は<em>既存の</em>ウィンドウに読み込まれます。この場合、メソッドの返値は既存のウィンドウであり、 <code>windowFeatures</code> は無視されます。 <code><var>url</var></code> に空の文字列を指定すると、開いているウィンドウの場所を変更せずにその名前で参照を取得することができます。そうでない場合は、 <code>window.open()</code> を呼び出すと、ただ新しいウィンドウが作成されます。</p>

<p><em>新しい</em>ウィンドウを <code>window.open()</code> を呼び出すたびに開きたい場合は、特別な値 <code>_blank</code> を <code>windowName</code> に使用してください。</p>

<div class="note">
<p id="Note_on_use_of_window_open"><code>window.open()</code> を使用して既存のウィンドウを <code><var>windowName</var></code> という名前で再オープンする場合の注意点: この機能はすべてのブラウザーで有効であるわけではなく、もっと様々な条件があります。<s>Firefox (50.0.1) の機能は説明した通りです。同じドメイン＋ポート番号から同じ名前で再オープンすると、以前に作成されたウィンドウにアクセスできます。</s> Google Chrome (55.0.2883.87 m ) は、同じ親からのみアクセスできます (あたかもウィンドウが「オープナー」に依存して作成されたかのように)。これは広い制限であり、信じられないほどの開発の複雑さを生み出しています。 Firefox (51.) はハンドルを取得しますが、 <code>Element.focus()</code> は実行できません。一方、 Chrome はオープナーから子への <code>focus()</code> は実行できますが、兄弟間や逆に子からオープナーへのは実行できません。この関数は、その名前 (名前はクッキーやローカルストレージで保存できますが、ウィンドウオブジェクトのハンドルはできません) にしかアクセスできない場合、ウィンドウ上のハンドルを取り戻すためのたった一つの鍵となります。 2017 年 10 月 01 日時点で、最近発見された動作の違いは、他のブラウザーではまだテストされていません。</p>
</div>

<h2 id="Window_features">ウィンドウ特性</h2>

<p><code><var>windowFeatures</var></code> はオプションの文字列で、新しいウィンドウに指定する特性をカンマで分割したリストを指定します。ウィンドウが開かれた後、ウィンドウの特性を変えるために JavaScript を用いることはできません。 <code><var>windowName</var></code> が既存のウィンドウを指定せず、かつ、引数 <code><var>windowFeatures</var></code> を与えなかった場合 (もしくは、引数 <code><var>windowFeatures</var></code> が空文字列だった場合) は、新しい副ウィンドウにはメインウィンドウの既定のツールバーが表示されます。</p>

<div class="note">
  <p><strong>豆知識</strong>: ブラウザーによっては、ユーザーが <code><var>windowFeatures</var></code> の設定を上書きして機能を有効にする (または無効にすることを防ぐ) ことができます。</p>
</div>

<h3 id="Position_and_size_features">位置と大きさの特性</h3>

<p>引数 <code><var>windowFeatures</var></code> で、新しいウィンドウの位置と大きさを指定することができます。</p>

<p><a href="#note_on_position_and_dimension_error_correction">位置と大きさのエラーの修正における注意</a></p>

<h4 id="Position">位置</h4>

<div class="notecard warning">
  <p>どちらか一方だけが指定されている場合は、動作は実装に依存しており、ウェブの作者はそれに依存してはいけません。</p>
</div>

<dl>
  <dt id="left"><code>left</code> または <code>screenX</code></dt>
  <dd>ユーザーのオペレーティングシステムのアプリケーションの作業領域の左端から、ブラウザーウィンドウの左端の境界線 (リサイズハンドル) までの距離を指定します。新しいウィンドウを最初に画面外に配置することはできません。</dd>
  <dt id="top"><code>top</code> または <code>screenY</code></dt>
  <dd>ユーザーのオペレーティングシステムのアプリケーションの作業領域の上端から、ブラウザーウィンドウの上端の境界線 (リサイズハンドル) までの新しいウィンドウの配置距離を指定します。新しいウィンドウを最初から画面外に配置することはできません。</dd>
</dl>

<p>引数 <code><var>windowFeatures</var></code> 空でなく、位置の特性が定義されなかった場合は、新しいウィンドウの左上の座標は、最も新しく表示されたウィンドウがあった位置から 22 ピクセル離れた位置になります。オフセットはブラウザーの開発者によって全般的に実装されており (IE6 SP2 で既定のテーマの場合は 29 ピクセルです)、これは新しいウィンドウが開いたことをユーザーが気付きやすくするためのものです。最も新しく使用されたウィンドウが最大化された状態である場合は、オフセットはありません。新しいウィンドウも同様に最大化されます。</p>

<h4 id="Size">大きさ</h4>

<div class="notecard warning">
<p>どちらか一方だけが指定されている場合は、動作は実装に依存しており、ウェブの作者はそれに依存してはいけません。</p>
</div>

<dl>
 <dt id="width"><code>width</code> または <code>innerWidth</code></dt>
 <dd>コンテンツ領域、新しい副ウィンドウの表示領域の幅をピクセル単位で指定します。幅の値は、垂直スクロールバーが存在すれば、その高さを含みます。幅の値は、サイドバーが展開されていても、その幅を含みません。最小の要求値は 100 です。</dd>
 <dt id="height"><code>height</code> または <code>innerHeight</code></dt>
 <dd>コンテンツ領域、新しい副ウィンドウの表示領域の高さをピクセル単位で指定します。高さの値は、水平スクロールバーが存在するならば、その高さを含めます。最小の要求値は 100 です。</dd>
</dl>

<p>引数 <code><var>windowFeatures</var></code> 空でなく、位置の特性が定義されなかった場合は、新しいウィンドウの大きさは最も新しく表示されたウィンドウと同じ大きさになります。</p>

<h3 id="Browser-dependent_size_features">ブラウザー固有の大きさの特性</h3>

<div class="notecard warning">
  <p>使用しないでください。</p>
</div>

<dl>
  <dt><code>outerWidth</code> {{deprecated_inline}} (Firefox のみ、 Firefox 80 で廃止)</dt>
  <dd>ブラウザーウィンドウ全体の高さをピクセル単位で指定します。この <code>outerWidth</code> の値は、ウィンドウの垂直スクロールバー (存在する場合)、左と右のウィンドウリサイズ枠を含みます。</dd>
  <dt><code>outerHeight</code> {{deprecated_inline}} (Firefox のみ、 Firefox 80 で廃止)</dt>
  <dd>ブラウザーウィンドウ全体の高さをピクセル単位で指定します。この <code>outerHeight</code> の値は、すべての存在するツールバー、ウィンドウの水平スクロールバー (存在する場合)、上と下のウィンドウリサイズ枠を含みます。下限の値は 100 です。</dd>
</dl>

<h3 id="Toolbar_and_UI_parts_features">ツールバーと UI 部品の特性</h3>

<div class="notecard warning">
<p>最近のブラウザー (Firefox 76 以降、 Google Chrome、Safari、Chromium Edge) では、以下の機能は単にポップアップを開くかどうかの条件です。<a href="#popup_condition">ポップアップの条件</a>の項を参照してください。</p>
</div>

<p>以下の機能は、各 UI パーツの表示を制御します。すべての機能は <code>yes</code> または <code>1</code> に設定するか、単に存在していればオンになります。設定できます。それらを <code>no</code> または <code>0</code> に設定するか、多くの場合はそれらを省略すればオフにすることができます。</p>

<p>例: <code>status=yes</code>, <code>status=1</code>, <code>status</code> は同じ結果になります。</p>

<dl>
  <dt><code>menubar</code></dt>
  <dd>この特性がオンに設定されている場合、新しい副ウィンドウにメニューバーが表示されます。<br>
  <br>
  <code><var>windowFeatures</var></code> が空でない場合、 <code>menubar</code> の既定値はオフです。</dd>
  <dt><code>toolbar</code></dt>
  <dd>この特性がオンに設定されている場合、新しい副ウィンドウにツールバーボタン (戻る、進む、更新、中止ボタン) が表示されます。<br>
    <br>
    ツールバーボタンに加えて、 Firefox (before 76) は親ウィンドウにタブバーが存在し、表示されていればタブバーが表示されます。 (この機能がオフに設定されている場合、ウィンドウ内のすべてのツールバーが非表示になります)。<br>
    <br>
    <code><var>windowFeatures</var></code> が空でない場合、 <code>toolbar</code> の既定値はオフです。
  </dd>
  <dt><code>location</code></dt>
  <dd>この特性がオンに設定されている場合、新しい副ウィンドウにロケーションバーまたはアドレスバーが表示されます。<br>
    <br>
    <code><var>windowFeatures</var></code> が空でない場合、 <code>location</code> の既定値はオフです。
  </dd>
  <dt><code>status</code></dt>
  <dd>この特性がオンに設定されている場合、新しい副ウィンドウにステータスバーが表示されます。<br>
    <br>
    <code><var>windowFeatures</var></code> が空でない場合、 <code>status</code> の既定値はオフです。
  </dd>
  <dt><code>resizable</code></dt>
  <dd>この特性がオンに設定されている場合、新しい副ウィンドウの大きさが変更可能になります。<br>
    <br>
    <code><var>windowFeatures</var></code> が空でない場合、 <code>resizable</code> の既定値はオンです。
    <div class="note">
      <p><strong>豆知識</strong>: アクセシビリティ上の理由から、この特性は常にオンにするよう強く推奨します。</p>
    </div>
  </dd>
  <dt><code>scrollbars</code></dt>
  <dd>この特性がオンに設定されている場合、新しい副ウィンドウで文書がウィンドウのビューポートに収まりきらない場合、水平・垂直スクロールバーが表示されます。<br>
    <br>
    <code><var>windowFeatures</var></code> が空でない場合、 <code>scrollbars</code> の既定値はオフです。<br>
    <br>
    <a href="#note_on_scrollbars">スクロールバーの注意</a>を参照してください。
    <div class="note">
      <p><strong>豆知識</strong>: アクセシビリティ上の理由から、この特性は常にオンにするよう強く推奨します。</p>
    </div>
  </dd>
</dl>

<h3 id="Window_functionality_features">ウィンドウ機能の特性</h3>

<dl>
  <dt id="noopener"><code>noopener</code></dt>
  <dd>この機能が設定されている場合、新しく開いたウィンドウは通常通りに開きますが、元のウィンドウには ({{domxref("Window.opener")}} からは — <code>null</code> を返すため) アクセスできなくなります。さらに、 <code>window.open()</code> の呼び出しも <code>null</code> を返すので、元のウィンドウも新しいウィンドウにアクセスできなくなります。これは、信頼されていないサイトが <code>window.open()</code> で開かれたサイトが元のウィンドウを改ざんしないようにするために便利ですし、その逆も同様です。
  </dd>
  <dd><code>noopener</code> が使用されている場合、 <code>_top</code>, <code>_self</code>, <code>_parent</code> 以外の空でないターゲット名は、新しいウィンドウやタブを開くかどうかを決定する際に、すべて <code>_blank</code> と同じように扱われることに注意してください。<br>
    <br>
    これはChrome, や Firefox 52 以降など、最近のブラウザーで対応しています。詳しくは <code><a href="/ja/docs/Web/HTML/Link_types#noopener">rel="noopener"</a></code> およびブラウザーの互換性の詳細、補助的な効果の情報を含めて参照してください。
  </dd>
  <dt id="noreferrer"><code>noreferrer</code></dt>
  <dd>この特性が設定されている場合、指定された URL のコンテンツを読み込むリクエストは、リクエストの <code>referrer</code> を <code>noreferrer</code> に設定して読み込まれます。これにより、リクエストを開始したページの URL を、リクエストを送信するサーバーに送信することを防ぎます。さらに、この機能を設定すると自動的に <code><a href="#noopener">noopener</a></code> も設定されます。詳細や互換性については <code><a href="/ja/docs/Web/HTML/Link_types#noreferrer">rel="noreferrer"</a></code> を参照してください。 Firefox では Firefox 68 で <code>noreferrer</code> の対応が導入されました。</dd>
</dl>

<h2 id="Best_practices"">ベストプラクティス</h2>

<pre class="brush:js">&lt;script type="text/javascript"&gt;
var windowObjectReference = null; // グローバル変数

function openFFPromotionPopup() {
  if(windowObjectReference == null || windowObjectReference.closed)
  /* メモリ内のウィンドウオブジェクトへのポインターが存在しないか、
     そのようなポインターが存在するが、そのウィンドウが閉じられている場合 */

  {
    windowObjectReference = window.open("http://www.spreadfirefox.com/",
   "PromoteFirefoxWindowName", "resizable,scrollbars,status");
    /* 真であれば、ウィンドウを生成。新しいウィンドウが生成され、
       他のウィンドウの最前面に移動します。*/
  }
  else
  {
    windowObjectReference.focus();
    /* 偽であれば、ウィンドウへの参照は存在しなればならず、ウィンドウは
       閉じられていません。それゆえ、 focus() メソッドで他のウィンドウの
       最前面にそのウィンドウを移動させることができます。ウィンドウを再生成し、
       参照されているリソースを更新させる必要はありません。 */
  };
}
&lt;/script&gt;

(...)

&lt;p&gt;&lt;a
 href="http://www.spreadfirefox.com/"
 target="PromoteFirefoxWindowName"
 onclick="openFFPromotionPopup(); return false;"
 title="このリンクは、新しいウィンドウを生成するか、すでに開かれているウィンドウを再利用します。"
&gt;Firefox 採用の宣伝&lt;/a&gt;&lt;/p&gt;
</pre>

<p>上記のコードは、副ウィンドウを開くリンクに関する、わずかなユーザービリティの問題を解決します。コード内の <code>return false</code> の目的は、リンクの既定のアクションをキャンセルすることです。 onclick イベントハンドラーが実行される場合、リンクの既定のアクションを実行する必要はありません。しかし、ユーザーのブラウザー
で javascript サポートが無効、もしくは、存在しない場合、onclick イベントハンドラーは無視され、ブラウーーは、target の "PromoteFirefoxWindowName" という名前のフレーム、もしくは、ウィンドウ内の参照されたリソースを読みこみます。"PromoteFirefoxWindowName" という名前のフレームもウィンドウも存在しない場合は、ブラウザーは新しいウィンドウを生成し、そのウィンドウに "PromoteFirefoxWindowName" という名前を付けます。</p>

<p>target 属性の使い方の参考ページ:</p>

<p><a href="https://www.w3.org/TR/html401/present/frames.html#h-16.3.2">HTML 4.01 Target attribute specifications</a>（<a href="https://www.asahi-net.or.jp/~sd5a-ucd/rec-html401j/present/frames.html#h-16.3.2">日本語訳</a>）</p>

<p><a href="https://www.htmlhelp.com/faq/html/links.html#new-window">How do I create a link that opens a new window?</a></p>

<p>また、この関数をパラメーター化して、より多くの状況に対応できるようにし、スクリプトやウェブページで再利用できるようにすることもできます。</p>

<pre class="brush:js">&lt;script type="text/javascript"&gt;
var windowObjectReference = null; // グローバル変数

function openRequestedPopup(url, windowName) {
  if(windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName,
           "resizable,scrollbars,status");
  } else {
    windowObjectReference.focus();
  };
}
&lt;/script&gt;

(...)

&lt;p&gt;&lt;a
 href="http://www.spreadfirefox.com/"
 target="PromoteFirefoxWindow"
 onclick="openRequestedPopup(this.href, this.target); return false;"
 title="このリンクは、新しいウィンドウを生成するか、すでに開かれているウィンドウを再利用します。"
&gt;Firefox 採用の宣伝&lt;/a&gt;&lt;/p&gt;
</pre>

<p>この関数を、 副ウィンドウを 1 枚だけ開くようにし、その単一の既定のウィンドウをこの関数で開く他のリンクで再利用するようにすることもできます。</p>

<pre class="brush:js">&lt;script type="text/javascript"&gt;
var windowObjectReference = null; // グローバル変数
var PreviousUrl; /* 既定のウィンドウ内の現在の URL を
                    保存しているであろうグローバル変数 */

function openRequestedSinglePopup(url) {
  if(windowObjectReference == null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName",
         "resizable,scrollbars,status");
  } else if(PreviousUrl != url) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName",
      "resizable=yes,scrollbars=yes,status=yes");
    /* 読み込まれるリソースが異なる場合、
       それをすでに開かれている副ウィンドウに読み込み、
       そのウィンドウをその親ウィンドウの最前面に再移動します。 */
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  };

  PreviousUrl = url;
  /* 説明: 現在の URL を保存し、この関数が再度呼び出されたときの
     URL と比較できるようにします。 */
}
&lt;/script&gt;

(...)

&lt;p&gt;&lt;a
 href="http://www.spreadfirefox.com/"
 target="SingleSecondaryWindowName"
 onclick="openRequestedSinglePopup(this.href); return false;"
 title="このリンクは、新しいウィンドウを生成するか、すでに開かれているウィンドウを再利用します。"
&gt;Firefox 採用の宣伝&lt;/a&gt;&lt;/p&gt;

&lt;p&gt;&lt;a
 href="https://www.mozilla.org/support/firefox/faq"
 target="SingleSecondaryWindowName"
 onclick="openRequestedSinglePopup(this.href); return false;"
title="このリンクは、新しいウィンドウを生成するか、すでに開かれているウィンドウを再利用します。"
&gt;Firefox FAQ&lt;/a&gt;&lt;/p&gt;
</pre>

<h2 id="FAQ">FAQ</h2>

<dl>
  <dt>どのようにすれば、ユーザーにウィンドウを閉じるかどうか確認するメッセージを出さないようにすることができますか？</dt>
  <dd>できません。 <strong>JavaScript によって開かれていない新しいウィンドウは、 JavaScript によって閉じることは原則としてできません。</strong> Mozilla ベースブラウザーの JavaScript コンソールには、 <code>"Scripts may not close windows that were not opened by script."</code> という警告メッセージが報告されるでしょう。そうしなければ、ブラウザーセッション中の訪問した URL の履歴が失われてしまいます。</dd>
  <dd>詳細は、{{domxref("window.close()")}} メソッドを参照してください</dd>
  <dt>どのようにすれば、ウィンドウを最小化状態または他のウィンドウの背後にある状態から復帰することができますか？</dt>
  <dd>まず、対象ウィンドウのウィンドウオブジェクトへの参照が存在するかどうかを調べてください。それが存在し、かつ、閉じてしまっていない場合は、<a href="/ja/docs/Web/API/Window/focus">focus()</a> メソッドを使用してください。他に確実な方法はありません。 <a href="#best_practices">focus() メソッドの使用方法を説明している例</a>でテストすることができます。</dd>
  <dt>ウィンドウを強制的に最大化するにはどうすればいいのですか？</dt>
  <dd>できません。どのブラウザーメーカーも、ユーザーが混乱しないように、新しい副ウィンドウが開いたことをユーザーが知り、気づけるように努力しています。</dd>
  <dt>どのようにすれば、ウィンドウのリサイズを無効にしたり、ツールバーを非表示にできますか？</dt>
  <dd>これを強制することはできません。Mozilla ベースのブラウザーを使用しているユーザーは、サイズ変更、スクロール、ツールバーの有無などのウィンドウの機能を <code>about:config</code> のユーザー設定で絶対的に制御することができます。このようなウィンドウを使用するのはユーザーですので (ウェブ制作者であるあなたではありません)、ユーザーの習慣や好みに干渉しないようにするのが一番です。コンテンツへのアクセシビリティとウィンドウの使いやすさを確保するために、リサイズ機能とスクロールバーの有無 (必要に応じて) を常に yes に設定することをお勧めします。これは、ウェブ制作者とユーザーの双方にとって最善の方法です。</dd>
  <dt>どのようにすれば、ウィンドウをコンテンツに合うようにリサイズできますか。</dt>
  <dd>確実にはできません。 <code>about:config</code> で <code>dom.disable_window_move_resize</code> を <code>true</code> に設定するか、ユーザーの <a href="https://www.mozilla.org/support/firefox/edit#user">user.js file</a> ファイルを編集することで、ユーザーがウィンドウのサイズを変更できないようにすることができるためです。</dd>
  <dd>一般に、ユーザーはたいてい、ウィンドウの移動またはリサイズを無効にしています。その理由は、過去に開発者のそのようなスクリプトを許可することで、大変な弊害を受けており、この特性を濫用しない、めったにないスクリプトでも、ウィンドウをリサイズするときに、間違ったリサイズをしばしば行うからです。これらのスクリプトの 99% は、ウィンドウのリサイズを不可能にしたり、スクロールバーを非表示にしたりします。そのような場合、本来は、それらのスクリプトの計算が間違っている場合のための、用心深く、分別のある代替の仕組みとして、それらの特性の両方が有効であるべきです。</dd>
  <dd>window オブジェクトのメソッドである、<a href="/ja/docs/Web/API/Window/sizeToContent">sizeToContent()</a> も無効にすることができます。スクリプトを使ってユーザーの画面上で遠隔的にウィンドウを移動したりサイズを変更したりすることは、多くの場合、ユーザーを悩ませ、ユーザーを混乱させ、そしてせいぜい間違ったことをするだけです。ウェブ制作者は、ユーザーのブラウザーウィンドウのあらゆる位置やサイズを完全に制御できる (決定できる) と期待していますが、それは真実ではありません。</dd>
  <dt>開いたウィンドウがまだ開かれているかどうかを知るにはどうすればいいですか。</dt>
  <dd>ウィンドウオブジェクトへの参照が存在するかどうかで検査することができます。それは、window.open() メソッドの呼び出しが成功した場合の返値です。また、<var>windowObjectReference</var>.closed プロパティの返値が <var>false</var> であるかどうかを調べることでもできます。</dd>
  <dt>どのようにすれば、ウィンドウがポップアップブロッカーによってブロックされていることを知ることができますか？</dt>
  <dd>組み込みポップアップブロッカーでは、 <code>window.open()</code> の返値を調べる必要があります。ウィンドウが開くことが許可されなかった場合の返値は、 <code>null</code> です。しかし、他の多くのポップアップブロッカーに対しては、そのような方法はありません。</dd>
  <dt>主ウィンドウと副ウィンドウの JavaScript での関係は？</dt>
  <dd><code>window.open()</code> メソッドは、主ウィンドウに副ウィンドウへの参照を渡します。 <a href="/ja/docs/Web/API/Window/opener">opener</a> プロパティは、副ウィンドウに主ウィンドウへの参照を渡します。</dd>
  <dt>新しい副ウィンドウのプロパティにアクセスできません。 JavaScript コンソールに、"Error: uncaught exception: Permission denied to get property &lt;プロパティ名またはメソッド名&gt;" と表示されます。どうしてですか。</dt>
  <dd>それは、クロスドメインスクリプトセキュリティの制限 (または「同一オリジンポリシー」) のためです。異なるオリジン (ドメイン名) からウィンドウ (またはフレーム) に読み込まれたスクリプトは、他のウィンドウ (またはフレーム) や他の離れたオリジン (ドメイン名) からきたあらゆる HTML オブジェクトのプロパティを<strong>取得または設定することができません</strong>。そのため、主ウィンドウのブラウザーは、副ウィンドウを対象としたスクリプトを実行する前に、副ウィンドウが同じドメイン名を持っているかを調べます。</dd>
  <dd>クロスドメインスクリプトセキュリティ制限については、 <a href="https://www.mozilla.org/projects/security/components/same-origin.html">http://www.mozilla.org/projects/secu...me-origin.html</a> (<a class="external" href="https://www.mozilla-japan.org/projects/security/components/same-origin.html">日本語訳</a>) で詳細を参照してください。</dd>
</dl>

<h2 id="Usability_issues">ユーザビリティの問題</h2>

<h3 id="Avoid_resorting_to_window.open">window.open() への依存の回避</h3>

<p>一般的に言えば、いくつかの理由で、<code>window.open()</code> への依存を回避することをお勧めします。</p>

<ul>
 <li>最近のデスクトップブラウザーは、ほとんどがタブ機能を備えており、タブ機能を備えたブラウザーのユーザーは、ウェブページの大半の場面で、新しいウィンドウを開くよりも新しいタブを開くことを好むと言われています。</li>
 <li>最近のブラウザーの多くが、ポップアップブロック機能を提供しています。</li>
 <li>ユーザーはブラウザーに内蔵されている機能や拡張機能を使って、リンクを新しいウィンドウで開くか、同じウィンドウで開くか、新しいタブで開くか、「バックグラウンド」で開くかどうかなどを設定することができます。不用意に新しいウィンドウを開くようにコーディングしても、もはや成功は保証されませんし、強制的に成功させることもできませんし、もし成功したとしても、大多数のユーザーに迷惑をかけることになるでしょう。</li>
 <li>新しいウィンドウには、メニューバーがなかったり、スクロールバーがなかったり、ステータスバーがなかったり、ウィンドウのサイズ変更ができなかったりすることがあります。新しいタブにはこうした機能やツールバー (少なくとも、既定で存在するツールバー) がないことはありえません。したがって、タブブラウジングが多くのユーザーに好まれているのは、彼らが好むブラウザーウィンドウの通常のユーザーインターフェイスががそのまま維持され、安定しているからです。</li>
 <li>新しいウィンドウを開くには、機能を減らしたとしても、ユーザーのシステムリソース (CPU や RAM) を大量に使用し、ソースコードのコーディングもかなりの量になります (セキュリティ管理、メモリ管理、様々なコードの分岐 (非常に複雑な場合もある)、ウィンドウフレーム/クローム/ツールバーの構築、ウィンドウの位置やサイズの調整など)。新しいタブを開くことは、新しいウィンドウを開くことに比べて、ユーザーのシステムリソースへの負担が少ない (そして、より速く実現できる) のです。</li>
</ul>

<h3 id="Offer_to_open_a_link_in_a_new_window_using_these_guidelines">リンクを新しいウィンドウで開く場合は、以下のガイドラインに則ることを提案します</h3>

<p>リンクを新しいウィンドウで開く機能を提供したい場合は、テスト済みで推奨されるユーザービリティとアクセシビリティのガイドラインに従ってください。</p>

<h4 id="Never_use_this_form_of_code_for_links_&lt;a_hrefjavascriptwindow.open..._...>">リンクに &lt;a href="javascript:window.open(...)" ...&gt; の形のコードを使用しない</h4>

<p>"javascript:" 形式のリンクは、どのブラウザーでもウェブページのアクセシビリティとユーザービリティを損ないます。</p>

<ul>
 <li>"javascript:" 擬似リンクは、 JavaScript の対応が無効化または存在しない場合、機能しなくなります。いくつかの企業では、従業員がウェブを閲覧することを許可していますが、 javascript を有効にしない、 java を使用しない、 activeX を使用しない、 Flash を使用しないなど、厳しいセキュリティポリシーのもとで使用しています。さまざまな理由 (セキュリティ、公共の場でのアクセス、テキストブラウザーなど) から、ウェブ上のユーザーの約 5% から 10% が javascript を無効にしてウェブを閲覧しています。</li>
 <li>"javascript:" リンクは、リンクの中央ボタンクリック、 Ctrl + クリック、拡張機能におけるタブブラウジングの機能など、タブ機能があるブラウザーの高度な機能を妨害する可能性があります。</li>
 <li>"javascript:" リンクは、検索エンジンによるウェブページのインデックス処理を妨害する可能性があります。</li>
 <li>"javascript:" リンクは、支援技術 (音声ブラウーーなど) や一部のウェブを利用するアプリケーション (<abbr title="Personal Digital Assistant">PDA</abbr> やモバイルブラウザーなど) を妨害します。</li>
 <li>"javascript:" リンクは、ブラウザーに実装された「マウスジェスチャー」機能も妨害します。</li>
 <li>プロトコルスキームとしての "javascript:" は、リンクバリデーターやリンクチェッカーでは、エラーとして報告されます。</li>
</ul>

<p><strong>参考記事:</strong></p>

<ul>
 <li><a href="https://www.useit.com/alertbox/20021223.html">Top Ten Web-Design Mistakes of 2002</a>, 6. JavaScript in Links, Jakob Nielsen, December 2002 (<a class="external" href="https://www.usability.gr.jp/alertbox/20021223.html">日本語版</a>)</li>
 <li><a href="https://www.evolt.org/article/Links_and_JavaScript_Living_Together_in_Harmony/17/20938/">Links &amp; JavaScript Living Together in Harmony</a>, Jeff Howden, February 2002</li>
 <li><a href="https://jibbering.com/faq/#FAQ4_24">comp.lang.javascript newsgroup discussion FAQ on "javascript:" links</a></li>
</ul>

<h4 id="Never_use_&lt;a_href_onclickwindow.open...>">&lt;a href="#" onclick="window.open(...);"&gt; を使わない</h4>

<p>このような疑似リンクも、リンクのアクセシビリティを損ないます。 <strong>href 属性の値には必ず本物の URL を使用してください。</strong>そうすれば、 javascript のサポートが無効または存在しない場合や、ユーザーエージェントが副ウィンドウを開くことに対応していない場合 (MS-Web TVやテキストブラウザーなど) でも、そのユーザーエージェントが参照されたリソースを開く/処理する既定のモードに従って、参照されたリソースをロードすることができます。この形のコードは、リンクの中央クリック、リンクの Ctrl + クリック、リンクの Ctrl + Enter、「マウスジェスチャー」など、タブ機能付きブラウザーの高度な機能にも干渉します。</p>

<h4 id="Always_identify_links_that_will_create_or_will_re-use_a_new_secondary_window">新しい副ウィンドウを生成 (もしくは再利用) するリンクを常に識別できるようにする</h4>

<p>リンクに title 属性を記述したり、リンクの最後にアイコンを追加したり、反応するカーソルを記述することによってユーザーに情報を与え、新しいウィンドウを開くことになるリンクを識別できるようにしてください。</p>

<p>ユーザーに警告をする目的は、コンテキストが変化するときに、ユーザーの混乱を最小限にするためです。現在のウィンドウが変化したり、新しいウィンドウがポップアップしたりすると、ユーザーが混乱します (ツールバーの戻るボタンが使えません)。</p>

<blockquote>
<p>"ユーザーが新しいウィンドウが開いたことに気づかないことはけっこうあります。特に、小さなモニターを使用していて、ウィンドウが最大化されている場合です。元のページに戻ろうとするユーザーは、<em>戻る</em>ボタンがグレーアウトしているので、混乱してしまいます。"<br>
 引用元：<a href="https://www.useit.com/alertbox/990530.html">The Top Ten<em>New</em> Mistakes of Web Design</a>: 2. Opening New Browser Windows, Jakob Nielsen, May 1999 (<a class="external" href="https://www.usability.gr.jp/alertbox/990530.html">日本語版</a>)/p>
</blockquote>

<p>コンテキストの極端な変化が発生する前に明示されていれば、ユーザーは先に進みたいかどうかを判断することができ、変化に備えることができます。ユーザーが混乱したり、混乱を感じたりすることがないだけでなく、経験豊富なユーザーは、そのようなリンクをどのように開くか (新しいウィンドウで開くか、同じウィンドウで開くか、新しいタブで開くか、「バックグラウンド」で開くか) をより適切に判断することができます。</p>

<p><strong>リファレンス</strong></p>

<ul>
 <li>"リンクが新しいウィンドウを開いたり、別のウィンドウをディスプレイにポップアップさせたり、システムのフォーカスを新しいフレームやウィンドウに移動させる場合、行うべき良策は、ユーザーにそのようなことが起きるということを伝えることです。" <a href="https://www.w3.org/WAI/wcag-curric/sam77-0.htm">World Wide Web Consortium Accessibility Initiative regarding popups</a></li>
 <li>"リンクをクリックする前に、そのリンクでどこへ行くかの情報をユーザーに提供するためにリンクタイトルを使用してください。" <a href="https://www.useit.com/alertbox/991003.html">Ten Good Deeds in Web Design</a>, Jakob Nielsen, October 1999（<a class="external" href="https://www.usability.gr.jp/alertbox/991003.html">日本語版</a>）</li>
 <li><a href="https://www.useit.com/alertbox/980111.html">Using Link Titles to Help Users Predict Where They Are Going</a>, Jakob Nielsen, January 1998（<a class="external" href="https://www.usability.gr.jp/alertbox/980111.html">日本語版</a>）</li>
</ul>

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header" colspan="4">「新しいウィンドウ」を示すアイコンとカーソルの例</td>
    </tr>
    <tr>
      <td><img alt="yahoo.com の新しいウィンドウアイコン" src="newwindowyahoo.png"></td>
      <td><img alt="microsoft.com の新しいウィンドウアイコン" src="newwinmsie.gif"></td>
      <td><img alt="webaim.org の新しいウィンドウアイコン" src="popup_requested_new_window.gif"></td>
      <td><img alt="sun.com の新しいウィンドウアイコン" src="popupimagesun.gif"></td>
    </tr>
    <tr>
      <td><img alt="bbc.co.uk の新しいウィンドウアイコン" src="opennews_rb.gif"></td>
      <td><img alt="Accessible Internet Solutions の新しいウィンドウアイコン" src="ais_newwindowicon.png"></td>
      <td><img alt="accessify.com の新しいウィンドウアイコン" src="pop-up-launcher.gif"></td>
      <td><img alt="webstyleguide.com の新しいウィンドウアイコン" src="webstyleguide_com_newwind.gif"></td>
    </tr>
    <tr>
      <td><img alt="ソース不明の新しいウィンドウアイコン" src="popicon_1.gif"></td>
      <td><img alt="ソース不明の新しいウィンドウアイコン" src="new.gif"></td>
      <td><img alt="ソース不明の新しいウィンドウアイコン" src="willcreateorrecyclenewwindow.gif"></td>
      <td><img alt="gtalbot.org の新しいウィンドウアイコン" src="openrequestedpopup.png"></td>
    </tr>
    <tr>
    <td colspan="2"><img alt="draig.de の新しいウィンドウカーソル" src="cursor_linknewwindowtargetblank.png"></td>
    <td colspan="2"><img alt="mithgol.ru の新しいウィンドウカーソル" src="cursor_newwindowsergeysokoloff.png"></td>
    </tr>
  </tbody>
</table>

<h4 id="Always_use_the_target_attribute">常に target 属性を使う</h4>

<p>JavaScript サポートが無効化されている、もしくは、存在しない場合、ユーザーエージェントは、自身の target 属性の扱い方に従って副ウィンドウを生成するか、参照されるリソースを表示するでしょう。例えば、MS Web TV のような、新しいウィンドウを生成できないいくつかのユーザーエージェントは、参照されたリソースを取りだしてから、それを現在のウィンドウの最後に追加します。その最終目的と考え方は、ユーザーに参照されるリソースを開く方法、つまり、リンクを開く形式を提供しようとすることであり、 - <strong>強制することではありません。</strong> - あなたのコードはユーザーが自由に選択できるブラウザーの機能を妨害すべきではありませんし、ユーザーに与えられる最終決定権を妨害すべきではありません。</p>

<h4 id="Do_not_use_target_blank"><code>target="_blank"</code> を使わない</h4>

<p>target 属性には常に意味のある名前を付け、そのような target 属性をページ内で再利用するようにしましょう。そうすれば、他のリンクをクリックしたときに、すでに作成されレンダリングされたウィンドウに参照されているリソースを読み込むことができ (したがって、ユーザーの処理を高速化することができ)、そもそも副ウィンドウを作成する理由 (およびユーザーのシステムリソース、費やした時間) を正当化することができます。単一のターゲット属性値を使用し、リンクで再利用することは、再利用される単一の副ウィンドウを作成するだけなので、はるかにユーザーリソースに優しいものとなります。一方、 target 属性値として "_blank" を使用すると、ユーザーのデスクトップ上にいくつもの新しい無名のウィンドウが作成され、再利用されることはありません。いずれにしても、コードがよくできていれば、ユーザーの最終的な選択を妨げることはなく、むしろ、ユーザーに選択肢を増やし、リンクを開く方法を増やし、ユーザーが使っているツール (ブラウザー) をより強力にするものになるはずです。</p>

<h2 id="Glossary">用語集</h2>

<dl>
 <dt>オープナーウィンドウ、親ウィンドウ、メインウィンドウ、最初のウィンドウ</dt>
 <dd>同じウィンドウを説明したり、識別するためによく使われる用語です。新しいウィンドウが作成される元となるウィンドウです。別の新しいウィンドウの作成につながるリンクをユーザーがクリックしたウィンドウです。</dd>
 <dt>サブウィンドウ、子ウィンドウ、副ウィンドウ、第2ウィンドウ</dt>
 <dd>同じウィンドウを説明したり、識別するためによく使われる用語。生成された新しいウィンドウのことです。</dd>
 <dt>リクエストのないポップアップウィンドウ</dt>
 <dd>スクリプトが起動し、ユーザーの同意なしに自動的に開くウィンドウのことです。</dd>
</dl>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'window-object.html#dom-open', 'Window.open()')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{ SpecName('CSSOM View', '#the-features-argument-to-the-open()-method', 'The features argument to the open() method') }}</td>
      <td>{{ Spec2('CSSOM View') }}</td>
      <td><code>features</code> 引数の効果を定義します</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.open")}}</p>

<h2 id="Notes">注意事項</h2>

<h3 id="Popup_condition">ポップアップの条件</h3>

<p>ほとんどの最新ブラウザー (以下に記載) では、ウェブコンテンツが UI パーツの表示・非表示を個別に制御することはできません。</p>

<ul>
 <li>Firefox 76 以降</li>
 <li>Google Chrome</li>
 <li>Safari</li>
 <li>Chromium Edge</li>
</ul>

<p>ポップアップを開くか新規タブを開くか、新規ウィンドウを開くかの条件として <code><var>windowFeatures</var></code> の UI 関連項目を使用し、それぞれの UI パーツの表示状態を固定しています。</p>

<p>この条件は実装上のものであり、安定性を保証するものではありません。</p>

<h3 id="Note_on_scrollbars">スクロールバーに関する注意</h3>

<p>コンテンツがビューポートの範囲からはみ出すときは、スクロールバー (またはスクロールする仕組み) によってコンテンツにユーザーがアクセスできることを保証する必要があります。ウェブ開発者が制御できないいくつかの理由で、コンテンツがウィンドウの範囲をはみ出すことがあります。</p>

<ul>
  <li>ユーザーによるウィンドウのサイズ変更</li>
  <li>Mozilla の場合は表示/テキストの拡大率(%)、 Firefox の場合は表示/テキストのサイズ/拡大または縮小を使用した、ユーザーによるフォントの文字サイズの拡大</li>
  <li>ユーザーがウェブ制作者が要求したフォントサイズよりも大きい最小フォントサイズをページに設定している場合。 40 歳以上の方や、特定の閲覧習慣や読書傾向のある方は、Mozilla ベースのブラウザーで最小のフォントサイズをよく設定しています。</li>
  <li>ウェブ制作者が、様々なブラウザーおよび様々なブラウザーのバージョンの、ルート要素または body ノードに適用される既定の margin (や境界やパディング) の値に気づいていない場合
  </li>
  <li>ユーザーがユーザースタイルシート (<a href="https://www.mozilla.org/support/firefox/edit#content">Mozilla ベースのブラウザーでは userContent.css</a>) を使用して、文書のボックスの大きさ (margin、padding、既定のフォントサイズ）を拡大する閲覧習慣に対応しています。</li>
  <li>オペレーティングシステムの設定により、ほとんどのツールバーのサイズ (高さまたは幅) を個別にカスタマイズできます。例えば Windows XP では、ウィンドウのサイズ変更、ブラウザのタイトルバー、メニューバー、スクロールバーの高さ、フォントサイズなどをユーザーが自由にカスタマイズできます。これらのツールバーの大きさは、ブラウザのテーマやスキン、オペレーティングシステムのテーマでも設定できます。</li>
  <li>ウェブ制作者は、ユーザーの既定のブラウザーウィンドウが、特定の目的のためにカスタムツールバーを持っていることに無関心です (例えば、環境設定バー、ウェブ開発者バー、アクセシビリティツールバー、ポップアップブロックおよび検索ツールバー、多機能ツールバーなど)。</li>
  <li>アプリケーションのために OS の作業領域を変更する支援技術やアドオン機能を使用している場合。例えば MS-Magnifier (拡大鏡) など。</li>
  <li>ユーザーは、オペレーティングシステムのアプリケーションの作業領域を直接または間接的に再配置やリサイズすることがあります。例えば、ユーザーが Windows のタスクバーのサイズを変更したり、 Windows のタスクバーを左端 (アラビア語ベース) または右端 (ヘブライ語ベース) に配置したり、 MS-Office のクイック起動ツールバーを固定したりします。</li>
  <li>一部のオペレーティングシステム (Mac OS X) は、強制的にツールバーを表示させるため、ウェブ制作者の予想を裏切りってブラウザーウィンドウの有効寸法を計算してしまうことがあります。</li>
</ul>

<h3 id="Note_on_position_and_dimension_error_correction">位置と大きさのエラー修正に関する注意</h3>

<p><var>特性</var>リストで要求された位置と寸法の値が守られず、そのような要求された値のいずれかが、ユーザーのオペレーティングシステムのアプリケーションのための作業領域内にブラウザーウィンドウ全体をレンダリングすることができない場合は<strong>修正されます</strong>。<strong>新しいウィンドウの一部が画面外に初期配置されることはありません。これは、Mozilla ベースのブラウザーではすべてのリリースで既定となっています。</strong></p>

<p><a href="https://msdn2.microsoft.com/en-us/library/ms997645.aspx#xpsp_topic5">MSIE 6 SP2にも同様のエラー修正機構があります</a>が、既定ではすべてのセキュリティレベルで有効になっているわけではありません。セキュリティ設定により、このエラー修正機構を無効にすることができます。</p>

<h2 id="Tutorials">チュートリアル</h2>

<ul>
  <li><a href="https://www.infimum.dk/HTML/JSwindows.html">JavaScript windows (tutorial)</a> by Lasse Reichstein Nielsen</li>
  <li><a href="https://accessify.com/features/tutorials/the-perfect-popup/">The perfect pop-up (tutorial)</a> by Ian Lloyd</li>
  <li><a href="https://www.gtalbot.org/FirefoxSection/Popup/PopupAndFirefox.html">Popup windows and Firefox (interactive demos)</a> by Gérard Talbot</li>
</ul>

<h2 id="References">リファレンス</h2>

<ul>
  <li><a href="https://www.cs.tut.fi/~jkorpela/www/links.html">Links Want To Be Links</a> by Jukka K. Korpela</li>
  <li><a href="https://www.evolt.org/article/Links_and_JavaScript_Living_Together_in_Harmony/17/20938/">Links &amp; JavaScript Living Together in Harmony</a> by Jeff Howden</li>
</ul>

<h2 id="Others">その他</h2>

<ul>
  <li><a href="/ja/docs/Web/API/Window/open/Obsolete_features">古い機能</a></li>
  <li><a href="/ja/docs/Web/API/Window/open/Privileged_features">特権が必要な機能</a></li>
</ul>
