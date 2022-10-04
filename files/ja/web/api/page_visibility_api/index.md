---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
original_slug: Web/Guide/User_experience/Using_the_Page_Visibility_API
---

{{DefaultAPISidebar("Page Visibility API")}}

タブを使って閲覧している場合、どのウェブページもバックグラウンドにあってユーザーから見えていない場合があります。 Page Visibility API では、現在ページが見えているかどうかを調べる機能とともに、文書が表示されたり非表示になったりした時を監視することができるイベントを提供します。

> **メモ:** The Page Visibility API は、文書が表示されていない時に不必要なタスクの実行を抑止することで、リソースを節約したり実行効率を上げたりするために特に有用です。

ユーザーがウィンドウを最小化したり他のタブに切り替えたりした時、 API は {{event("visibilitychange")}} イベントを送信してリスナーにページの状態が変化したことを知らせます。イベントを検出していくつかの操作を実行したり、様々な動作をしたりすることができます。例えば、ウェブアプリで動画を再生している場合、ユーザーがタブをバックグラウンドにした場合に動画を一時停止させ、ユーザーがこのタブに戻ったときに再生を再開させたりすることができます。ユーザーは動画の位置に迷うことがなく、動画の音声が新しく前景になったタブの音声を邪魔せず、ユーザーがその間に動画を見落とすことがなくなります。

{{HTMLElement("iframe")}} の可視状態は、親文書と同じになります。 CSS プロパティにより ({{cssxref("display", "display: none;")}} のように) `<iframe>` を隠しても visibility のイベントは発生せず、またフレームに含まれる文書の状態も変わりません。

### 使用例

Page Visibility API の使用例をいくつか考えてみましょう。

- 画像のスライドショーがあるサイトで、ユーザーが見ていない間に次のスライドに進むべきではないもの
- 情報をダッシュボードに表示するアプリケーションで、ページが見えていないときは更新情報をサーバーへ問い合わせてほしくないもの
- 正確なページビューをカウントできるよう、ページがプリレンダリングされている状態を検出したい。
- デバイスがスタンバイモードである (ユーザーが電源ボタンを押して、画面を消灯している) ときに、音声を止めたいサイト。

以前、開発者はこれを検出するために不完全な代替手段を使用していました。例えば window で onblur/onfocus ハンドラーを登録することでページがアクティブではないときを知る助けになりますが、ページがユーザーから隠された状態であることは知らせてくれません。 Page Visibility API はこれを解決します。

> **メモ:** {{domxref("GlobalEventHandlers.onblur", "onblur")}} 及び {{domxref("GlobalEventHandlers.onfocus", "onfocus")}} はユーザーがウィンドウを切り替えたことを教えてくれますが、非表示にしたという意味になるとは限りません。ページが非表示になるのは、ユーザーがタブを切り替えたり、タブを含むブラウザーウィンドウを最小化したりした時だけです。

### Policies in place to aid background page performance

Separately from the Page Visibility API, user agents typically have a number of policies in place to mitigate the performance impact of background or hidden tabs. These may include:

- Most browsers stop sending {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} callbacks to background tabs or hidden {{ HTMLElement("iframe") }}s in order to improve performance and battery life.
- Timers such as {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}} are throttled in background/inactive tabs to help improve performance. See [Reasons for delays longer than specified](/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified) for more details.
- Budget-based background timeout throttling is now available in modern browsers (Firefox 58+, Chrome 57+), placing an additional limit on background timer CPU usage. This operates in a similar way across modern browsers, with the details being as follows:

  - In Firefox, windows in background tabs each have their own time budget in milliseconds — a max and a min value of +50 ms and -150 ms, respectively. Chrome is very similar except that the budget is specified in seconds.
  - Windows are subjected to throttling after 30 seconds, with the same throttling delay rules as specified for window timers (again, see [Reasons for delays longer than specified](/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified)). In Chrome, this value is 10 seconds.
  - Timer tasks are only permitted when the budget is non-negative.
  - Once a timer's code has finished running, the duration of time it took to execute is subtracted from its window's timeout budget.
  - The budget regenerates at a rate of 10 ms per second, in both Firefox and Chrome.

Some processes are exempt from this throttling behavior. In these cases, you can use the Page Visibility API to reduce the tabs' performance impact while they're hidden.

- Tabs which are playing audio are considered foreground and aren’t throttled.
- Tabs running code that's using real-time network connections ([WebSockets](/ja/docs/Web/API/WebSockets_API) and [WebRTC](/ja/docs/Web/API/WebRTC_API)) go unthrottled in order to avoid closing these connections timing out and getting unexpectedly closed.
- [IndexedDB](/ja/docs/Web/API/IndexedDB_API) processes are also left unthrottled in order to avoid timeouts.

## 例

[ライブサンプル](http://daniemon.com/tech/webapps/page-visibility/)をご覧ください (音声つき動画あり)。

この例では別のタブに切り替えたときに動画再生を一時停止、また元のタブに戻った時に再生を再開しており、以下のコードで作られました:

```js
// hidden プロパティおよび可視性の変更イベントの名前を設定
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
```

## Document インターフェイスに追加されたプロパティ

The Page Visibility API adds the following properties to the {{domxref("Document")}} interface:

- {{domxref("Document.hidden")}} {{ReadOnlyInline}}
  - : ページがユーザーから隠された状態であると思われる場合に `true` を、そうでない場合に `false` を返します。
- {{domxref("Document.visibilityState")}} {{ReadOnlyInline}}

  - : 文書の現在の可視状態を示す {{domxref("DOMString")}} です。取りうる値は以下の通りです。

    - `visible`
      - : ページのコンテンツは少なくとも部分的に可視状態です。実際は、最小化されていないウィンドウのフォアグラウンドのタブにページがあることを意味します。
    - `hidden`
      - : ページのコンテンツはユーザーから見えていません。実際は、文書がバックグラウンドのタブか最小化されているウィンドウにある、あるいは OS のスクリーンがロックされていることを意味します。
    - `prerender`

      - : ページのコンテンツはプリレンダリングされており、ユーザーから見えていません (`document.hidden` では隠されているとみなされます)。文書は `prerender` の状態から始まるかもしれませんが、プリレンダリングは 1 つの文書は 1 回しか行われないので、他の状態からこの状態に移ることはありません。

        > **メモ:** すべてのブラウザーがプリレンダリングに対応しているわけではありません。

    - `unloaded`

      - : ページがメモリからアンロードされている途中です。

        > **メモ:** すべてのブラウザーが `unloaded` の値に対応しているわけではありません。

- {{domxref("Document.onvisibilitychange")}}
  - : {{event("visibilitychange")}} イベントが発生したときに呼び出されるコードを提供する {{domxref("EventListener")}} です。

```js
//startSimulation および pauseSimulation は別途定義される
function handleVisibilityChange() {
  if (document.hidden) {
    pauseSimulation();
  } else  {
    startSimulation();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
```

## 仕様書

| 仕様書                                           | 状態                                         | 備考     |
| ------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName('Page Visibility API')}} | {{Spec2('Page Visibility API')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.Document.visibilityState")}}

## 関連情報

- IEBlog での [Page Visibility API](http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx) の解説
- Google による [Page Visibility API](http://code.google.com/chrome/whitepapers/pagevisibility.html) の解説
