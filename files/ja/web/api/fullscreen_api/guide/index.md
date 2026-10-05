---
title: 全画面 API のガイド
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: d4d05693841eba16c40260d48cd29b353d50dd03
---

{{DefaultAPISidebar("Fullscreen API")}}

この記事では、[全画面 API](/ja/docs/Web/API/Fullscreen_API) を使用して指定された要素を全画面モードにする方法と、ブラウザーの全画面モードへの移行と終了を検出する方法について説明します。

## 全画面モードの有効化

全画面モードで表示したい要素（例えば {{HTMLElement("video") }} など）がある場合、その {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} メソッドを呼び出すことによって、全画面モードで表示させることができます。

この {{HTMLElement("video")}} 要素について考えてみましょう。

```html
<video controls id="my-video">
  <source src="somevideo.webm" />
  <source src="somevideo.mp4" />
</video>
```

この video 要素を以下のように全画面化することができます。

```js
const elem = document.getElementById("my-video");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

このコードでは、`requestFullscreen()` メソッドが存在するかどうかを調べてから、それを呼び出しています。

要素が全画面モードになると、{{cssxref(":fullscreen")}} に一致するようになり、画面全体を占めるなどのデフォルトのスタイルが適用されます。また、その要素は{{glossary("top layer", "最上位レイヤー")}}に配置されます。

複数の要素が全画面モードでの表示をリクエストされた場合、それらはすべて {{cssxref(":fullscreen")}} に一致するようになり、すべて最上位レイヤーに配置されます。これらは互いに積み重なり、より新しくリクエストされた要素が古い要素の上に表示されます。最も新しくリクエストされた要素が表示され、{{domxref("Document.fullscreenElement")}} によって返されます。

### 通知

全画面モードが正常に実行されると、その要素を含む文書は {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} イベントを受け取ります。全画面モードが終了すると、その文書は再び {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} イベントを受け取ります。なお、 {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} イベントは、文書が全画面モードに入るか抜けるかについての情報そのものは提供しませんが、もし文書に null ではない {{DOMxRef("document.fullscreenElement", "fullscreenElement")}} があれば、全画面モードであることが分かります。

### 全画面リクエストに失敗した場合

全画面モードに切り替わることは保証されていません。例えば、{{HTMLElement("iframe")}} 要素には全画面モードでコンテンツを表示することを許可するための[`allowfullscreen`](/ja/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) 属性があります。また、ウィンドウ形式のプラグインなど、特定の種類の中身は全画面モードで表示することができません。全画面表示できない要素（またはその親や子孫）を全画面表示にしようとしても、これはうまくいきません。その代わりに、全画面表示をリクエストされた要素は `mozfullscreenerror` イベントを受け取ります。全画面表示に失敗した場合、 Firefox はウェブコンソールにエラーメッセージをログ出力し、なぜ失敗したのかを説明します。しかし、 Chrome や Opera の新しいバージョンでは、そのような警告は生成されません。

> [!NOTE]
> 全画面リクエストは、イベントハンドラー内で呼び出す必要があり、そうでない場合は拒否されます。

## 全画面モードからの脱出

ユーザーは常に自分自身で全画面モードを終了することができます。[ユーザーが知りたいこと](#ユーザーが知りたいこと)を参照してください。また、 {{DOMxRef("Document.exitFullscreen()")}} メソッドを呼び出すことで、プログラム的にそうすることも可能です。

全画面モードで複数の要素がある場合、`exitFullscreen()` を呼び出すと、最上位の要素のみが全画面モードを終了し、その下にある要素が表示されます。<kbd>Esc</kbd> または <kbd>F11</kbd> を押すと、すべての全画面要素が終了します。

## その他の情報

{{DOMxRef("Document")}} は、全画面表示のウェブアプリケーションを開発する際に有益な追加情報を提供します。

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : `fullscreenElement` プロパティは、現在全画面表示されている {{DOMxRef("Element")}} を指示します。これが null でない場合、文書（またはシャドウ DOM）は全画面モードになっています。もしこれが null ならば、文書（またはシャドウ DOM）は全画面モードではありません。
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : `fullscreenEnabled` プロパティは、現在文書内の全画面モードがリクエストされる状態であるかどうかを指示します。

### モバイルブラウザーのビューポートの拡大縮小

モバイルブラウザーによっては、全画面モードのときにビューポートメタタグの設定を無視し、ユーザーによる拡大縮小をブロックするものがあります。例えば、全画面モードでないときにピンチ操作で拡大縮小することができたとしても、全画面モードで表示されたページではピンチ操作で拡大縮小するジェスチャーが動作しないことがあります。

## ユーザーが知りたいこと

ユーザーには、<kbd>Esc</kbd> キー（または <kbd>F11</kbd>）を押して全画面モードを終了できることを必ず伝えておくとよいでしょう。

また、全画面モード中に他のページに移動したり、タブを切り替えたり、他のアプリケーションに切り替える（例: <kbd>Alt</kbd>-<kbd>Tab</kbd> など）と、全画面モードも終了してしまいます。

## 例

[mdn/dom-examples GitHub リポジトリー](https://github.com/mdn/)には、全画面 API の完全な例が掲載されています。

[例を実行](https://mdn.github.io/dom-examples/fullscreen-api/index.html)し、[ソースコードを閲覧](https://github.com/mdn/dom-examples/tree/main/fullscreen-api)してください。

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
- [`allowfullscreen`](/ja/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
