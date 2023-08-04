---
title: "Window: beforeunload イベント"
slug: Web/API/Window/beforeunload_event
---

{{APIRef}}

**`beforeunload`** イベントは、ウィンドウ、文書、およびそのリソースがアンロードされる直前に発生します。文書はまだ表示されており、この時点ではイベントはキャンセル可能です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラー</th>
      <td>
        {{domxref("WindowEventHandlers/onbeforeunload", "onbeforeunload")}}
      </td>
    </tr>
  </tbody>
</table>

このイベントによって、ウェブページがダイアログボックスを表示し、ユーザーにページを終了するかどうかの確認が求めることができます。ユーザーが確認すれば、ブラウザーは新しいページへ遷移し、そうでなければ遷移をキャンセルします。

仕様書によれば、確認ダイアログを表示するためにはイベントハンドラーでイベントの {{domxref("Event.preventDefault()", "preventDefault()")}} を呼び出すことになっています。

しかし、すべてのブラウザーがこのメソッドに対応しているわけではなく、一部はイベントハンドラーに古い方法二つのうちの一つを実装するよう求めていることに注意してください。

- イベントの `returnValue` プロパティに文字列を代入する
- イベントハンドラーから文字列を返す

一部のブラウザーでは返された文字列を確認ダイアログで表示するために使用し、イベントハンドラーがユーザーに独自のメッセージを表示できるようにしていました。しかし、これは非推奨であり、すでに多くのブラウザーが対応していません。

望ましくないポップアップに対処するために、ブラウザーはページが操作されていない限り、 `beforeunload` のイベントハンドラーで生成したプロンプトを表示しなかったり、全くプロンプトを表示しなかったりする可能性があります。

イベントハンドラー/リスナーを `window` または`document` の `beforeunload` イベントに割り当てると、ブラウザーはメモリ内のページナビゲーションキャッシュ、例えば [Firefox の Back-Forward キャッシュ](/ja/docs/Using_Firefox_1.5_caching)や [WebKit のページキャッシュ](https://webkit.org/blog/516/webkit-page-cache-ii-the-unload-event/)などを使用することを防ぎます。

HTML 仕様書は {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, {{domxref("window.prompt()")}} などのメソッドが、このイベントの実行中には無視されることがあることを示しています。詳しくは、 [HTML 仕様書](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#user-prompts)をご覧ください。

## 例

HTML の仕様では、 {{domxref("Event.returnValue")}} を使用する代わりに {{domxref("Event.preventDefault()")}} メソッドを使用する必要があります。ただし、これはすべてのブラウザーで対応しているわけではありません。

```js
window.addEventListener('beforeunload', (event) => {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = '';
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Window.beforeunload_event")}}

## 関連情報

- 関連イベント: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}, {{domxref("Window/unload_event", "unload")}}
- [Unloading Documents — Prompt to unload a document](https://html.spec.whatwg.org/#prompt-to-unload-a-document)
- [Remove Custom Messages in onbeforeload Dialogs after Chrome 51](https://developers.google.com/web/updates/2016/04/chrome-51-deprecations?hl=en#remove_custom_messages_in_onbeforeunload_dialogs)
