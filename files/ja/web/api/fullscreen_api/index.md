---
title: Fullscreen API
slug: Web/API/Fullscreen_API
---

{{DefaultAPISidebar("Fullscreen API")}}

**Fullscreen API** は、特定の {{DOMxRef("Element")}} (およびその子孫) を全画面モードで表示したり、必要なくなったときに全画面モードを抜けたりする方法を追加します。これによって、要求されたコンテンツ — オンラインゲームなど — がユーザーの画面全体で表示され、全画面モードが終了するまで、ブラウザーのユーザーインターフェイス要素や他のアプリケーションをすべて画面から排除することができます。

API の使い方についての詳細は、 [Fullscreen API ガイド](/ja/docs/Web/API/Fullscreen_API/Guide)をご覧ください。

> **メモ:** この API の対応はブラウザーによって、ベンダー接頭辞が必要かどうか、最新の仕様を実装しているかどうかがいくらか異なっています。この API の実装状況の詳細は、 [Browser compatibility](#browser_compatibility) の節を参照してください。ベンダーに依存せずに Fullscreen API にアクセスできる [Fscreen](https://github.com/rafrex/fscreen) のようなライブラリの使用を検討したほうが良いかもしれません。

## インターフェイス

_Fullscreen API 自体に独自のインターフェイスはありません。その代わりに、全画面機能を提供するために必要なメソッド、プロパティ、イベントハンドラーを数多くの他のインターフェイスに追加しています。これらは以下の節に挙げています。_

## メソッド

Fullscreen API は {{DOMxRef("Document")}} および {{DOMxRef("Element")}} インターフェイスにメソッドを追加して、全画面モードを起動したり終了したりすることができるようにしています。

### Document インターフェイスのメソッド

- {{DOMxRef("Document.exitFullscreen()")}}
  - : {{Glossary("user agent", "ユーザーエージェント")}}が全画面モードからウィンドウモードに切り替えることをリクエストします。返される {{jsxref("Promise")}} は、全画面モードが完全に終了するときに解決します。

### Element インターフェイスのメソッド

- {{DOMxRef("Element.requestFullscreen()")}}
  - : ユーザーエージェントに対して、指定された要素 (および、子孫まで) を全画面モードに配置し、ブラウザーのユーザーインターフェイス要素や他のアプリケーションをすべて画面から排除します。返される {{jsxref("Promise")}} は、全画面モードが起動したときに解決します。

## プロパティ

全画面モードで表示したい要素 (例えば {{HTMLElement("video")}} 要素) があるときに、その要素で `requestFullscreen()` メソッドを呼び出すと全画面で表示できます。

- {{DOMxRef("DocumentOrShadowRoot.fullscreenElement")}}
  - : `fullscreenElement` プロパティで、現在全画面モードで表示されている DOM (またはシャドウ DOM) 上の {{DOMxRef("Element")}} が分かります。これが `null` の場合、文書は全画面モードになっていません。
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : `fullscreenEnabled` プロパティで、全画面モードになることができるかどうかが分かります。全画面モードが何らかの理由で利用できない場合 (`"fullscreen"` 機能が許可されていない場合や、全画面モードに対応していない場合など) は `false` になります。

### イベントハンドラー

_Fullscreen API は二つのイベントを定義しており、全画面モードに移行したときと終了したとき、また全画面モードとウィンドウモードを切り替える途中でエラーが発生したことを検出するために利用することができます。これらのイベントのイベントハンドラーは {{DOMxRef("Document")}} および {{DOMxRef("Element")}} インターフェイスで利用できます。_

> **メモ:** これらのイベントハンドラープロパティは、 HTML の content 属性として利用することは*できません*。言い換えれば、 {{Event("fullscreenchange")}} および {{Event("fullscreenerror")}} のためのイベントハンドラーを HTML コンテンツから指定することができません。 JavaScript コードによって追加する必要があります。

#### 文書のイベントハンドラー

- {{DOMxRef("Document.onfullscreenchange")}}
  - : 文書が全画面モードに配置されたとき、または全画面モードを終了したときに {{DOMxRef("Document")}} に対して送信される {{Event("fullscreenchange")}} イベントのイベントハンドラーです。このハンドラーは文書全体が全画面モードで表示された時のみ呼び出されます。
- {{DOMxRef("Document.onfullscreenerror")}}
  - : 文書全体に対して全画面モードを有効または無効にしようとした際にエラーが発生したとき、 {{DOMxRef("Document")}} に対して送信される {{Event("fullscreenerror")}} イベントのイベントハンドラーです。

#### 要素のイベントハンドラー

- {{DOMxRef("Element.onfullscreenchange")}}
  - : 要素が全画面モードに配置されたとき、または全画面モードを終了したときに要素に対して送信される {{Event("fullscreenchange")}} イベントのイベントハンドラーです。
- {{DOMxRef("Element.onfullscreenerror")}}
  - : 要素が全画面モードに移行または終了しようとした際にエラーが発生したとき、要素に対して送信される {{Event("fullscreenerror")}} イベントのイベントハンドラーです。

### 廃止されたプロパティ

- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}

  - : 真偽値で、文書に現在全画面モードで表示されている要素があるのであれば `true`、 それ以外は `false` を返します。

    > **メモ:** 代わりに {{DOMxRef("Document")}} または {{DOMxRef("ShadowRoot")}} の {{DOMxRef("Document.fullscreenElement", "fullscreenElement")}} プロパティを使用してください。これが `null` ではない場合、現在全画面モードで表示されている {{DOMxRef("Element")}} を表します。

## イベント

_Fullscreen API は二つのイベントを定義しており、全画面モードに移行したときと終了したとき、また全画面モードとウィンドウモードを切り替える途中でエラーが発生したことを検出するために利用することができます。_

- {{Event("fullscreenchange")}}
  - : 全画面モードに移行したり、終了したりした時に、 {{DOMxRef("Document")}} または {{DOMxRef("Element")}} に対して送られます。
- {{Event("fullscreenerror")}}
  - : 全画面モードに切り替えたり、終了したりした際にエラーが発生した時に、その `Document` または `Element` に対して送られます。

## Dictionary

- {{DOMxRef("FullscreenOptions")}}
  - : {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} を呼び出す時に指定することができる任意の設定を提供します。

## アクセス制御

全画面モードが利用可能であるかは、[機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)を使用して制御することができます。全画面モードの機能は `"fullscreen"` の文字列によって識別され、既定の許可リストの値は `"self"` であり、最上位の文書コンテキストでは全画面モードが許可されており、最上位文書と同じオリジンから読み込まれた内側の閲覧コンテキストも同様です。

機能ポリシーを使用して API へのアクセスを制御することについて、詳しくは[機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)を参照してください。

## 使用上のメモ

ユーザーは全画面モードを解除するのを、サイトやアプリがプログラム的に行うのを待つのではなく、 <kbd>ESC</kbd> または <kbd>F11</kbd> キーを押すことで抜けることを選択することができます。ユーザーインターフェイスの中で、これができることをユーザーに知らせるための適切なユーザーインターフェイス要素を、ユーザーインターフェイスのどこかで提供することを忘れないでください。

> **メモ:** 全画面モードであるときに別のページへ移動する、タブを切り替える、あるいは別のアプリケーションに切り替える (例えば <kbd>Alt</kbd>-<kbd>Tab</kbd> を使用) と、同様に全画面モードを解除します。

## 例

この例では、ウェブページ内に動画が表示されます。 <kbd>Return</kbd> または <kbd>Enter</kbd> キーを押すと、動画をウィンドウ内表示と全画面表示とで切り替えることができます。

[ライブデモを確認](/samples/domref/fullscreen.html)

### Enter キーの監視

ページが読み込まれると、 <kbd>Enter</kbd> キーを監視するイベントリスナーを設定するコードが実行されます。

```js
document.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    toggleFullScreen();
  }
}, false);
```

### 全画面モードの切り替え

このコードは、ユーザーが <kbd>Enter</kbd> キーを押したときに呼び出されます。

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

これは {{DOMxRef("Document", "document")}} の `fullscreenElement` 属性の値を確認することから始まります。現実の配信では現時点で、接頭辞付きのバージョン (例えば `mozFullscreenElement`, `msFullscreenElement`, `webkitFullscreenElement`) をチェックしたほうがいいでしょう。値が `null` である場合は、文書がウィンドウモードであるので、全画面モードへ切り替えることが必要です。 {{DOMxRef("Element.requestFullscreen()")}} を呼び出して、全画面モードへ切り替えます。

すでに全画面モードが有効である (`fullscreenElement` が `null` ではない) 場合は、 `document` の {{DOMxRef("Document.exitFullscreen()")}} を呼び出すことで、全画面モードを終了します。

## 仕様書

| 仕様書                               | 状態                             | 備考     |
| ------------------------------------ | -------------------------------- | -------- |
| {{SpecName("Fullscreen")}} | {{Spec2("Fullscreen")}} | 初回定義 |

## ブラウザーの対応

### `Document.fullscreen`

{{Compat("api.Document.fullscreen")}}

### `Document.fullscreenEnabled`

{{Compat("api.Document.fullscreenEnabled")}}

## 関連情報

- [全画面モードの使用](/ja/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- {{HTMLAttrXRef("allowfullscreen", "iframe")}}
