---
title: 全画面 API のガイド
slug: Web/API/Fullscreen_API/Guide
---

{{DefaultAPISidebar("Fullscreen API")}}

この記事では、[全画面 API](/ja/docs/Web/API/Fullscreen_API) を使用して指定された要素を全画面モードにする方法と、ブラウザーの全画面モードへの移行と終了を検出する方法について説明します。

## 全画面モードの有効化

全画面モードで表示したい要素（例えば {{HTMLElement("video") }} など）がある場合、その {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} メソッドを呼び出すことによって、全画面モードで表示させることができます。

この {{HTMLElement("video")}} 要素について考えてみましょう。

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

この video 要素を以下のように全画面化することができます。

```js
const elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

このコードでは、`requestFullscreen()` メソッドが存在するかどうかを調べてから、それを呼び出しています。

### 表示の差異について

ここで、現時点での Gecko と WebKit の実装の重要な違いに注目しておきましょう。Gecko は自動的に CSS ルール "`width: 100%; height: 100%;`" を要素に追加し、画面の内側へ引き伸ばすようにします。 WebKit はこのようなことはせず、代わりに全画面表示の要素を同じ大きさで、それ以外は真っ黒な画面の中央に配置します。 WebKit で同じ全画面表示を取得するには、自分自身で "`width: 100%; height: 100%;`" を CSS ルールに追加する必要があります。

```css
#myvideo:-webkit-full-screen {
  width: 100%;
  height: 100%;
}
```

一方、 WebKit の動作を Gecko 上で模倣しようとする場合、表示したい要素を別の要素の内部に配置し、その要素を代わりに全画面化し、 CSS ルールを使用して内側の要素を表示したい外観に一致するように調整する必要があります。

### 通知

全画面モードが正常に実行されると、その要素を含む文書は {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} イベントを受け取ります。全画面モードが終了すると、その文書は再び {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} イベントを受け取ります。なお、 {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} イベントは、文書が全画面モードに入るか抜けるかについての情報そのものは提供しませんが、もし文書に null ではない {{DOMxRef("document.fullscreenElement", "fullscreenElement")}} があれば、全画面モードであることが分かります。

### 全画面リクエストに失敗した場合

全画面モードに切り替わることは保証されていません。例えば、{{HTMLElement("iframe")}} 要素には全画面モードでコンテンツを表示することを許可するための[`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen) 属性があります。また、ウィンドウ形式のプラグインなど、特定の種類の中身は全画面モードで表示することができません。全画面表示できない要素（またはその親や子孫）を全画面表示にしようとしても、これはうまくいきません。その代わりに、全画面表示をリクエストされた要素は `mozfullscreenerror` イベントを受け取ります。全画面表示に失敗した場合、 Firefox はウェブコンソールにエラーメッセージをログ出力し、なぜ失敗したのかを説明します。しかし、 Chrome や Opera の新しいバージョンでは、そのような警告は生成されません。

> **メモ:** 全画面リクエストは、イベントハンドラー内で呼び出す必要があり、そうでない場合は拒否されます。

## 全画面モードからの脱出

ユーザーは常に自分自身で全画面モードを終了することができます。[ユーザーが知りたいこと](#ユーザーが知りたいこと)を参照してください。また、 {{DOMxRef("Document.exitFullscreen()")}} メソッドを呼び出すことで、プログラム的にそうすることも可能です。

## その他の情報

{{DOMxRef("Document")}} は、全画面表示のウェブアプリケーションを開発する際に有益な追加情報を提供します。

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : `fullscreenElement` プロパティは、現在全画面表示されている {{DOMxRef("Element")}} を指示します。これが null でない場合、文書（またはシャドウ DOM）は全画面モードになっています。もしこれが null ならば、文書（またはシャドウ DOM）は全画面モードではありません。
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : `fullscreenEnabled` プロパティは、現在文書内の全画面モードがリクエストされる状態であるかどうかを指示します。

## ユーザーが知りたいこと

ユーザーには、<kbd>Esc</kbd> キー（または <kbd>F11</kbd>）を押して全画面モードを終了できることを必ず伝えておくとよいでしょう。

また、全画面モード中に他のページに移動したり、タブを切り替えたり、他のアプリケーションに切り替える（例: <kbd>Alt</kbd>-<kbd>Tab</kbd> など）と、全画面モードも終了してしまいます。

## 例

この例では、ウェブページの中に動画を表示しています。<kbd>Return</kbd> または <kbd>Enter</kbd> キーを押すと、ユーザーは動画のウィンドウ表示と全画面表示を切り替えて表示することができます。

[ライブ例の表示](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### Enter キーの監視

ページが読み込まれると、このコードが実行され、 <kbd>Enter</kbd> キーを待ち受けるためのイベントリスナーが設定されます。

```js
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    toggleFullScreen();
  }
}, false);
```

### 全画面モードのトグル切り替え

このコードは、上図のようにユーザーが <kbd>Enter</kbd> キーを押したときに呼び出されます。

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

これは {{DOMxRef("document")}} の `fullscreenElement` 属性の値を調べることから始まります（`moz`, `ms`, `webkit` のいずれかを接頭辞に持つものをチェックします）。もし `null` ならば、文書内のモードは現在ウィンドウモードなので、フルスクリーンモードに切り替える必要があります。全画面モードへの切り替えは {{DOMxRef("element.requestFullscreen()")}} を呼び出すことで行われます。

もし既に全画面モードが有効な場合（`fullscreenElement` が non`null`）、 {{DOMxRef("document.exitFullscreen()")}} を呼び出すことになります。

## 接頭辞

今のところ、すべてのブラウザーが接頭辞なしバージョンの API を実装しているわけではありません（ベンダーに依存しない全画面 API へのアクセスには [Fscreen](https://github.com/rafgraph/fscreen) を使用することができます）。以下は、接頭辞と名前の異なる形をまとめた表です。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">標準</th>
      <th scope="col">WebKit (Safari) / Blink (Chrome &#x26; Opera) / Edge</th>
      <th scope="col">Gecko (Firefox)</th>
      <th scope="col">Internet Explorer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
      </th>
      <td><code>webkitIsFullScreen</code></td>
      <td><code>mozFullScreen</code></td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">
        {{DOMxRef("Document.fullscreenEnabled")}}
      </th>
      <td><code>webkitFullscreenEnabled</code></td>
      <td><code>mozFullScreenEnabled</code></td>
      <td><code>msFullscreenEnabled</code></td>
    </tr>
    <tr>
      <th scope="row">
        {{DOMxRef("Document.fullscreenElement")}}
      </th>
      <td><code>webkitFullscreenElement</code></td>
      <td><code>mozFullScreenElement</code></td>
      <td><code>msFullscreenElement</code></td>
    </tr>
    <tr>
      <th scope="row">{{DOMxRef("Document.exitFullscreen()")}}</th>
      <td><code>webkitExitFullscreen()</code></td>
      <td><code>mozCancelFullScreen()</code></td>
      <td><code>msExitFullscreen()</code></td>
    </tr>
    <tr>
      <th scope="row">
        {{DOMxRef("Element.requestFullscreen()")}}
      </th>
      <td><code>webkitRequestFullscreen()</code></td>
      <td><code>mozRequestFullScreen()</code></td>
      <td><code>msRequestFullscreen()</code></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [全画面モードの使用](/ja/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen)
