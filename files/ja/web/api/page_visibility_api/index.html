---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
tags:
  - DOM
  - Intermediate
  - Tutorials
translation_of: Web/API/Page_Visibility_API
original_slug: Web/Guide/User_experience/Using_the_Page_Visibility_API
---
<div>{{DefaultAPISidebar("Page Visibility API")}}</div>

<p>タブを使って閲覧している場合、どのウェブページもバックグラウンドにあってユーザーから見えていない場合があります。 <span class="seoSummary">Page Visibility API では、現在ページが見えているかどうかを調べる機能とともに、文書が表示されたり非表示になったりした時を監視することができるイベントを提供します。</span></p>

<div class="note">
<p><strong>メモ:</strong> The Page Visibility API は、文書が表示されていない時に不必要なタスクの実行を抑止することで、リソースを節約したり実行効率を上げたりするために特に有用です。</p>
</div>

<p>ユーザーがウィンドウを最小化したり他のタブに切り替えたりした時、 API は {{event("visibilitychange")}} イベントを送信してリスナーにページの状態が変化したことを知らせます。イベントを検出していくつかの操作を実行したり、様々な動作をしたりすることができます。例えば、ウェブアプリで動画を再生している場合、ユーザーがタブをバックグラウンドにした場合に動画を一時停止させ、ユーザーがこのタブに戻ったときに再生を再開させたりすることができます。ユーザーは動画の位置に迷うことがなく、動画の音声が新しく前景になったタブの音声を邪魔せず、ユーザーがその間に動画を見落とすことがなくなります。</p>

<p>{{HTMLElement("iframe")}} の可視状態は、親文書と同じになります。 CSS プロパティにより ({{cssxref("display", "display: none;")}} のように) <code>&lt;iframe&gt;</code> を隠しても visibility のイベントは発生せず、またフレームに含まれる文書の状態も変わりません。</p>

<h3 id="Use_cases" name="Use_cases">使用例</h3>

<p>Page Visibility API の使用例をいくつか考えてみましょう。</p>

<ul>
 <li>画像のスライドショーがあるサイトで、ユーザーが見ていない間に次のスライドに進むべきではないもの</li>
 <li>情報をダッシュボードに表示するアプリケーションで、ページが見えていないときは更新情報をサーバーへ問い合わせてほしくないもの</li>
 <li>正確なページビューをカウントできるよう、ページがプリレンダリングされている状態を検出したい。</li>
 <li>デバイスがスタンバイモードである (ユーザーが電源ボタンを押して、画面を消灯している) ときに、音声を止めたいサイト。</li>
</ul>

<p>以前、開発者はこれを検出するために不完全な代替手段を使用していました。例えば window で onblur/onfocus ハンドラーを登録することでページがアクティブではないときを知る助けになりますが、ページがユーザーから隠された状態であることは知らせてくれません。 Page Visibility API はこれを解決します。</p>

<div class="note">
<p><strong>メモ:</strong> {{domxref("GlobalEventHandlers.onblur", "onblur")}} 及び {{domxref("GlobalEventHandlers.onfocus", "onfocus")}} はユーザーがウィンドウを切り替えたことを教えてくれますが、非表示にしたという意味になるとは限りません。ページが非表示になるのは、ユーザーがタブを切り替えたり、タブを含むブラウザーウィンドウを最小化したりした時だけです。</p>
</div>

<h3 id="Policies_in_place_to_aid_background_page_performance" name="Policies_in_place_to_aid_background_page_performance">Policies in place to aid background page performance</h3>

<p>Separately from the Page Visibility API, user agents typically have a number of policies in place to mitigate the performance impact of background or hidden tabs. These may include:</p>

<ul>
 <li>Most browsers stop sending {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} callbacks to background tabs or hidden {{ HTMLElement("iframe") }}s in order to improve performance and battery life.</li>
 <li>Timers such as {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}} are throttled in background/inactive tabs to help improve performance. See <a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified">Reasons for delays longer than specified</a> for more details.</li>
 <li>Budget-based background timeout throttling is now available in modern browsers (Firefox 58+, Chrome 57+), placing an additional limit on background timer CPU usage. This operates in a similar way across modern browsers, with the details being as follows:
  <ul>
   <li>In Firefox, windows in background tabs each have their own time budget in milliseconds — a max and a min value of +50 ms and -150 ms, respectively. Chrome is very similar except that the budget is specified in seconds.</li>
   <li>Windows are subjected to throttling after 30 seconds, with the same throttling delay rules as specified for window timers (again, see <a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified">Reasons for delays longer than specified</a>). In Chrome, this value is 10 seconds.</li>
   <li>Timer tasks are only permitted when the budget is non-negative.</li>
   <li>Once a timer's code has finished running, the duration of time it took to execute is subtracted from its window's timeout budget.</li>
   <li>The budget regenerates at a rate of 10 ms per second, in both Firefox and Chrome.</li>
  </ul>
 </li>
</ul>

<p>Some processes are exempt from this throttling behavior. In these cases, you can use the Page Visibility API to reduce the tabs' performance impact while they're hidden.</p>

<ul>
 <li>Tabs which are playing audio are considered foreground and aren’t throttled.</li>
 <li>Tabs running code that's using real-time network connections (<a href="/ja/docs/Web/API/WebSockets_API">WebSockets</a> and <a href="/ja/docs/Web/API/WebRTC_API">WebRTC</a>) go unthrottled in order to avoid closing these connections timing out and getting unexpectedly closed.</li>
 <li><a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> processes are also left unthrottled in order to avoid timeouts.</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<p><a href="http://daniemon.com/tech/webapps/page-visibility/">ライブサンプル</a>をご覧ください (音声つき動画あり)。</p>

<p>この例では別のタブに切り替えたときに動画再生を一時停止、また元のタブに戻った時に再生を再開しており、以下のコードで作られました:</p>

<pre class="brush: js">// hidden プロパティおよび可視性の変更イベントの名前を設定
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 や Firefox 18 以降でサポート
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

var videoElement = document.getElementById("videoElement");

// ページが隠れたとき、動画再生を一時停止する。
// ページが表示されたとき、動画を再生する。
function handleVisibilityChange() {
  if (document[hidden]) {
    videoElement.pause();
  } else {
    videoElement.play();
  }
}

// ブラウザーが addEventListener または Page Visibility API をサポートしない場合に警告
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  // Page Visibility の変更を扱う
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

  // 動画が一時停止されたときに、タイトルを設定する。
  // 一時停止したことを示す。
  videoElement.addEventListener("pause", function(){
    document.title = 'Paused';
  }, false);

  // 動画を再生するときに、タイトルを設定する。
  videoElement.addEventListener("play", function(){
    document.title = 'Playing';
  }, false);

}
</pre>

<h2 id="Properties_added_to_the_Document_interface" name="Properties_added_to_the_Document_interface">Document インターフェイスに追加されたプロパティ</h2>

<p>The Page Visibility API adds the following properties to the {{domxref("Document")}} interface:</p>

<dl>
 <dt>{{domxref("Document.hidden")}} {{ReadOnlyInline}}</dt>
 <dd>ページがユーザーから隠された状態であると思われる場合に <code>true</code> を、そうでない場合に <code>false</code> を返します。</dd>
 <dt>{{domxref("Document.visibilityState")}} {{ReadOnlyInline}}</dt>
 <dd>文書の現在の可視状態を示す {{domxref("DOMString")}} です。取りうる値は以下の通りです。
 <dl>
  <dt><code>visible</code></dt>
  <dd>ページのコンテンツは少なくとも部分的に可視状態です。実際は、最小化されていないウィンドウのフォアグラウンドのタブにページがあることを意味します。</dd>
  <dt><code>hidden</code></dt>
  <dd>ページのコンテンツはユーザーから見えていません。実際は、文書がバックグラウンドのタブか最小化されているウィンドウにある、あるいは OS のスクリーンがロックされていることを意味します。</dd>
  <dt><code>prerender</code></dt>
  <dd>ページのコンテンツはプリレンダリングされており、ユーザーから見えていません (<code>document.hidden</code> では隠されているとみなされます)。文書は <code>prerender</code> の状態から始まるかもしれませんが、プリレンダリングは1つの文書は1回しか行われないので、他の状態からこの状態に移ることはありません。
  <div class="note"><strong>メモ:</strong> すべてのブラウザーがプリレンダリングに対応しているわけではありません。</div>
  </dd>
  <dt><code>unloaded</code></dt>
  <dd>ページがメモリからアンロードされている途中です。
  <div class="note"><strong>メモ:</strong> すべてのブラウザーが <code>unloaded</code> の値に対応しているわけではありません。</div>
  </dd>
 </dl>
 </dd>
 <dt>{{domxref("Document.onvisibilitychange")}}</dt>
 <dd>{{event("visibilitychange")}} イベントが発生したときに呼び出されるコードを提供する {{domxref("EventListener")}} です。</dd>
</dl>

<pre class="brush: js">//startSimulation および pauseSimulation は別途定義される
function handleVisibilityChange() {
  if (document.hidden) {
    pauseSimulation();
  } else  {
    startSimulation();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName('Page Visibility API')}}</td>
   <td>{{Spec2('Page Visibility API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.visibilityState")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>IEBlog での <a href="http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx" title="Page Visibility on IEBlog">Page Visibility API</a> の解説</li>
 <li>Google による <a href="http://code.google.com/chrome/whitepapers/pagevisibility.html" title="Page Visibility API by Google">Page Visibility API</a> の解説</li>
</ul>
