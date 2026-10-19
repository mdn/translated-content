---
title: 全画面 API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: 2c6874c58a262083450afcc76789d4399adb6583
---

{{DefaultAPISidebar("Fullscreen API")}}

**全画面 API** (Fullscreen API) は、特定の要素 ({{DOMxRef("Element")}}) （およびその子孫）を全画面モードで表示したり、必要なくなったときに全画面モードを抜けたりする方法を追加します。これによって、要求されたコンテンツ — オンラインゲームなど — がユーザーの画面全体で表示され、全画面モードが終了するまで、ブラウザーのユーザーインターフェイス要素や他のアプリケーションをすべて画面から排除することができます。

API の使い方についての詳細は、 [全画面 API ガイド](/ja/docs/Web/API/Fullscreen_API/Guide)をご覧ください。

## インターフェイス

_全画面 API 自体に独自のインターフェイスはありません。その代わりに、全画面機能を提供するために必要なメソッド、プロパティ、イベントハンドラーを数多くの他のインターフェイスに追加しています。これらは以下の節に挙げています。_

## インスタンスメソッド

全画面 API は {{DOMxRef("Document")}} および {{DOMxRef("Element")}} インターフェイスにメソッドを追加して、全画面モードを起動したり終了したりすることができるようにしています。

### Document インターフェイスのインスタンスメソッド

- {{DOMxRef("Document.exitFullscreen()")}}
  - : {{Glossary("user agent", "ユーザーエージェント")}}が全画面モードからウィンドウモードに切り替えることをリクエストします。返される {{jsxref("Promise")}} は、全画面モードが完全に終了したときに解決します。

### Element インターフェイスのインスタンスメソッド

- {{DOMxRef("Element.requestFullscreen()")}}
  - : ユーザーエージェントに対して、指定された要素 (および、子孫まで) を全画面モードに配置し、ブラウザーのユーザーインターフェイス要素や他のアプリケーションをすべて画面から排除します。返される {{jsxref("Promise")}} は、全画面モードが起動したときに解決します。

## インスタンスプロパティ

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : `fullscreenElement` プロパティで、現在全画面モードで表示されている DOM （またはシャドウ DOM）上の要素 ({{DOMxRef("Element")}}) が分かります。これが `null` の場合、文書（またはシャドウ DOM）は全画面モードになっていません。
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : `fullscreenEnabled` プロパティで、全画面モードになることができるかどうかが分かります。何らかの理由で全画面モードが利用できない場合（例えば `"fullscreen"` 機能が許可されていない、あるいは全画面モードが対応していない場合）、これは `false` となります。

### 廃止されたプロパティ

- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
  - : 論理値で、文書に現在全画面モードで表示されている要素があるのであれば `true`、 それ以外は `false` を返します。

    > [!NOTE]
    > 代わりに {{DOMxRef("Document")}} または {{DOMxRef("ShadowRoot")}} の {{DOMxRef("Document.fullscreenElement", "fullscreenElement")}} プロパティを使用してください。これが `null` ではない場合、現在全画面モードで表示されている {{DOMxRef("Element")}} を表します。

## イベント

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : 全画面モードに移行したり、終了したりした時に、 {{DOMxRef("Element")}} に対して送られます。
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : 全画面モードに切り替えたり、終了したりした際にエラーが発生した時に、 `Element` に対して送られます。

## アクセス制御

全画面モードが利用可能であるかは、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)を使用して制御することができます。全画面モードの機能は `"fullscreen"` の文字列によって識別され、既定の許可リストの値は `"self"` であり、最上位の文書コンテキストでは全画面モードが許可されており、最上位文書と同じオリジンから読み込まれた内側の閲覧コンテキストも同様です。

## 使用上のメモ

ユーザーは全画面モードを解除するのを、サイトやアプリがプログラム的に行うのを待つのではなく、 <kbd>ESC</kbd> または <kbd>F11</kbd> キーを押すことで抜けることを選択することができます。ユーザーインターフェイスの中で、これができることをユーザーに知らせるための適切なユーザーインターフェイス要素を、ユーザーインターフェイスのどこかで提供することを忘れないでください。

> [!NOTE]
> 全画面モードであるときに別のページへ移動する、タブを切り替える、あるいは別のアプリケーションに切り替える（例えば <kbd>Alt</kbd>-<kbd>Tab</kbd> を使用）と、同様に全画面モードを解除します。

## 例

### 単純な全画面の使用

この例では、ウェブページ内に動画が表示されます。 <kbd>Enter</kbd> キーを押すと、動画をウィンドウ内表示と全画面表示とで切り替えることができます。

[ライブデモを表示](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

### Enter キーの監視

ページが読み込まれると、 <kbd>Enter</kbd> キーを監視するイベントリスナーを設定するコードが実行されます。

```js
const video = document.getElementById("video");

// ENTER を押したときに toggleFullScreen メソッドを呼び出す
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggleFullScreen(video);
  }
});
```

### 全画面モードの切り替え

このコードは、ユーザーが <kbd>Enter</kbd> キーを押したときに呼び出されます。

```js
function toggleFullScreen(video) {
  if (!document.fullscreenElement) {
    // この文書が全画面モードでなければ
    // 動画を全画面にする
    video.requestFullscreen();
  } else {
    // そうでなければ全画面から抜ける
    document.exitFullscreen?.();
  }
}
```

これは {{DOMxRef("Document", "document")}} の `fullscreenElement` 属性の値を確認することから始まります。値が `null` である場合は、文書がウィンドウモードであるので、全画面モードへ切り替えることが必要です。 {{DOMxRef("Element.requestFullscreen()")}} を呼び出して、全画面モードへ切り替えます。

すでに全画面モードが有効である (`fullscreenElement` が `null` ではない) 場合は、 `document` の {{DOMxRef("Document.exitFullscreen()")}} を呼び出すことで、全画面モードを終了します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/ja/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
