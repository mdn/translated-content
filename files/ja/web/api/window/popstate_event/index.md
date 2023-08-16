---
title: "Window: popstate イベント"
slug: Web/API/Window/popstate_event
---

{{APIRef}}

**`popstate`** は {{domxref("Window")}} インターフェイスのイベントで、ユーザーがセッション履歴を操作している間にアクティブな履歴項目が変更されたときに発行されます。これは現在の履歴項目をユーザーが最後に訪れたページのものに変更するか、または {{domxref("history.pushState()")}} が履歴項目を履歴スタックに追加するために使用されていた場合、その履歴項目が代わりに使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("PopStateEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("WindowEventHandlers.onpopstate", "onpopstate")}}
      </td>
    </tr>
  </tbody>
</table>

## 履歴スタック

アクティブ化される履歴項目が [`history.pushState()`](/ja/docs/Web/API/History/pushState) の呼び出しによって作成されたものである場合、または [`history.replaceState()`](/ja/docs/Web/API/History/replaceState) の呼び出しの影響を受けた場合、 `popstate` イベントの `state` プロパティには履歴項目の状態オブジェクトのコピーが格納されます。

これらのメソッドと対応するイベントは、履歴スタックにデータを追加して、動的に生成されたページを再構築したり、同じ {{domxref("Document")}} にいながら表示されているコンテンツの状態を変更するために使用することができます。

ただ、 `history.pushState()` や `history.replaceState()` を呼び出すだけでは、 `popstate` イベントが発行されないことに注意してください。 `popstate` イベントは、戻るボタンや進むボタンをクリックする（あるいは JavaScript で `history.back()` や `history.forward()` を呼び出す）など、ブラウザーの操作によって発行されます。

ブラウザーは、ページ読み込み時に `popstate` イベントを異なる方法で処理する傾向があります。 Chrome （v34 以前）と Safari ではページ読み込み時に常に `popstate` イベントが発行されますが、 Firefox では発行されません。

> **メモ:** `popstate` イベントを処理する関数を書くときには、 `window.location` のようなプロパティはすでに状態の変化を反映していますが（それが現在の URL に影響する場合）、 `document` はまだ反映されていないかもしれないことを考慮に入れておくことが重要です。新しい文書の状態が完全に反映された瞬間を捉えることが目的であれば、遅延ゼロの {{domxref("setTimeout()")}} メソッド呼び出しを使用して、処理を行う内部の _callback_ 関数をブラウザーのイベントループの最後に効果的に配置する必要があります。例えば `window.onpopstate = () => setTimeout(doSomeThing, 0);` のようにします。

## popstate が送信される場面

ユーザーがブラウザーの「戻る」ボタンを押すなどして遷移が発生した場合、 `popstate` イベントは新しい場所に遷移するためのプロセスの終了間際に発行されます。新しい場所の読み込み（必要な場合）、表示、可視化などが行われた後に {{domxref("Window.pageshow_event", "pageshow")}} イベントが送信され、持続的なユーザー状態情報が復元されて {{domxref("Window.hashchange_event", "hashchange")}} イベントが送信される前に発行されます。

`popstate` イベントが発行されるタイミングをよりよく理解するために、ユーザーがサイトを移動するか、履歴をプログラムで走査することによって、現在の履歴項目が変更されたときに発行されるイベントのシーケンスを単純化して考えてみましょう。ここでは、現在の履歴項目を**新しい項目**と呼ぶものに変更する遷移を示します。現在のページのセッション履歴スタック項目は**現在の項目**と呼びます。

1. もし**新しい項目** が現在、既存の {{domxref("Document")}} を含んでいなければ、続行する前にコンテンツを取得し、その `Document` を作成します。これは {{domxref("Window.DOMContentLoaded_event", "DOMContentLoaded")}} や {{domxref("Window.load_event", "load")}} イベントを最終的に文書を含む {{domxref("Window")}} に送信しますが、以下のステップはその間に実行され続けます。
2. **現在の項目**のタイトルが履歴 API のメソッド、 ({{domxref("History.pushState", "pushState()")}} または {{domxref("History.replaceState", "replaceState()")}} の何れかで設定されなかった場合は、その項目のタイトルが {{domxref("document.title")}} 属性が返す文字列に設定されます。
3. もし、ブラウザーが**現在の項目**から離れる前に保存したい状態情報を持っている場合は、保存します。このとき、その項目は「ユーザーの状態を保持した」とみなされます。ブラウザーが履歴セッションの項目に追加する可能性のあるこの情報には、たとえば、文書のスクロール位置、フォーム入力の値、および他のそのようなデータが含まれる場合があります。
4. もし、**新しい項目**が**現在の項目**と異なる `Document` オブジェクトを持っている場合は、その閲覧コンテキストは、その {{domxref("Window.document", "document")}} プロパティが**新しい項目**によって参照される文書を参照するように更新され、コンテキストの名前は現在の文書のコンテキスト名と一致するように更新されます。
5. **新しい項目**の {{domxref("Document")}} 内の各フォームコントロールで、自動入力フィールド名が `off` に設定された [`autocomplete`](/ja/docs/Web/HTML/Element/input#autocomplete) が設定されているものは、リセットされます。自動補完されるフィールド名や自動補完の仕組みについては [HTML の自動補完](/ja/docs/Web/HTML/Attributes/autocomplete)を参照してください。
6. **新しい項目**の文書が既に完全に読み込まれ準備されている場合、つまり、その {{domxref("Document.readyState", "readyState")}} が `complete` で、文書がまだ表示されていない場合、文書が表示され、 {{domxref("Window.pageshow_event", "pageshow")}} イベントは {{domxref("PageTransitionEvent")}} の {{domxref("PageTransitionEvent.persisted", "persisted")}} 属性が `true` に設定された状態でその文書で発行されます。
7. この文書の {{domxref("Document.URL", "URL")}} が**新しい項目**のものに設定されます。
8. 履歴の走査が置換を有効にして行われている場合、（{{domxref("History.go", "go()") }} などのメソッドの `delta` パラメータを考慮して）目的の項目の直前の項目が履歴スタックから削除されます。
9. もし**新しい項目**が持続的なユーザーの状態を持っておらず、その URL のフラグメントが `null` でなければ、その文書はそのフラグメントまでスクロールされます。
10. 次に、**現在の項目**が**新しい項目**に設定されます。宛先の項目は現在のものであると認識されます。
11. **新しい項目** にシリアライズされた状態情報が保存されている場合、その情報は {{domxref("History.state")}} にデシリアライズされます。それ以外の場合は `state` は `null` となる。
12. `state` の値が変化した場合、文書に `popstate` イベントが送信されます。
13. ブラウザーが選択した場合、永続化されたユーザー状態が復元されます。
14. 元の項目と新しい項目が同じ文書を共有しているが、 URL のフラグメントが異なる場合、 {{domxref("Window.hashchange_event", "hashchange")}} イベントをウィンドウに送ります。

ご覧の通り、`popstate` イベントは、この方法でページ間を移動する過程で、ほぼ最後に発行されます。

## 例

`http://example.com/example.html` にあるページで以下のコードを実行すると、書かれている通りのログを出力します。

```js
window.addEventListener('popstate', (event) => {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
});
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // "location: http://example.com/example.html?page=1, state: {"page":1}" と出力
history.back(); // "location: http://example.com/example.html, state: null" と出力
history.go(2);  // "location: http://example.com/example.html?page=3, state: {"page":3}" と出力
```

同じ例で、 `onpopstate` イベントハンドラープロパティを使用したものです。

```js
window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // "location: http://example.com/example.html?page=1, state: {"page":1}" と出力
history.back(); // "location: http://example.com/example.html, state: null" と出力
history.go(2);  // "location: http://example.com/example.html?page=3, state: {"page":3}" と出力
```

元のの履歴項目（`http://example.com/example.html`）には、状態オブジェクトが関連付けられていませんが、 2 回目の `history.back()` の呼び出しの後にその項目をアクティブにすると、 `popstate` イベントが発生することに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ブラウザーの履歴の操作（履歴 API）](/ja/docs/Web/API/History_API)
- [Window: `hashchange` イベント](/ja/docs/Web/API/Window/hashchange_event)
