---
title: 履歴 API の操作
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{DefaultAPISidebar("History API")}}

{{DOMxRef("History.pushState", "pushState()")}} および {{DOMxRef("History.replaceState", "replaceState()")}} メソッドは、それぞれ履歴項目を追加したり変更したりします。これらのメソッドは {{domxref("Window/popstate_event", "popstate")}} イベントと一緒に動作します。

## 履歴項目の追加と修正

{{DOMxRef("History.pushState","pushState()")}} を使うことで、履歴の状態を変更した後に生成される {{domxref("XMLHttpRequest")}} オブジェクトの HTTP ヘッダー中のリファラも変更されます。リファラーは {{domxref("XMLHttpRequest")}} オブジェクトが生成された時点での `this` となるウィンドウの持つ文書の URL となります。

### pushState() の例

以下の JavaScript が `https://mozilla.org/foo.html` で実行されると想定してください。

```js
const stateObj = {
  foo: "bar",
};

history.pushState(stateObj, "page 2", "bar.html");
```

これにより URL バーには `https://mozilla.org/bar.html` と表示されますが、ブラウザーは `bar.html` を読み込むことはなくまたその存在をチェックすることはありません。

ユーザーが `https://google.com` へ移動し、それから**戻る**ボタンをクリックしたとします。このとき、 URL バーは `https://mozilla.org/bar.html` を表示し、`history.state` は `stateObj` になります。`popstate` イベントはページが再読み込みされたために発行されません。ページそれ自体は `bar.html` のように見えます。

再び**戻る**ボタンをクリックすると、URL は `https://mozilla.org/foo.html` へ変化し、 `popstate` イベントが発行され、状態は null オブジェクトとなります。ここでもまた、`popstate` イベントを受け取って手動でコンテンツを変更することは可能ですが、戻るという操作によって戻る前のコンテンツが変更されるわけではありません。

### pushState() メソッド

`pushState()` は、 **状態オブジェクト**、**title** （今は無視されます）、（任意で） **URL** の 3 つの引数を使用します。

これら 3 つの引数について詳細に見ていきましょう。

- **状態オブジェクト**
  - : 状態オブジェクトは JavaScript のオブジェクトで、 `pushState()` によって作成された新しい履歴項目と関連付けられています。ユーザーが新しい状態に遷移するたびに `popstate` イベントが発行され、そのイベントの `state` プロパティに履歴項目の状態オブジェクトのコピーが格納されます。
    状態オブジェクトはシリアライズ可能なものであれば何でも構いません。Firefox は状態オブジェクトをユーザーのディスクに保存し、ユーザーがブラウザーを再起動した後に復元できるようにするため、状態オブジェクトのシリアライズ表現に 640k 文字というサイズ制限を課しています。もし、シリアライズされた表現がこれより大きい状態オブジェクトを `pushState()` に渡すと、このメソッドは例外を発生します。これ以上の領域が必要な場合は、 `sessionStorage` や `localStorage` を使用することをおすすめします。
- **title**
  - : [Safari 以外のすべてのブラウザーは、現在この引数を無視しています](https://github.com/whatwg/html/issues/2174)。ただし、将来的には使用する可能性があります。ここで空文字列を渡せば、将来このメソッドが変更されても安全です。あるいは、移動先の状態を表す短いタイトルを渡すこともできます。
- **URL**
  - : 新しい履歴項目の URL はこの引数で与えられます。ブラウザーは `pushState()` の呼び出しの後にはこの URL を読み込もうとしませんが、例えばユーザーがブラウザーを再起動した後などには URL を読み込もうとする可能性があることに注意してください。新しい URL は絶対的である必要はありません。相対的である場合、現在の URL に対して相対的に解決されます。新しい URL は現在の URL と同じオリジンでなければなりません。そうでない場合、`pushState()` は例外を発生します。この引数はオプションです。指定しなかった場合、文書の現在の URL が設定されます。

ある意味では、`pushState()` の呼び出しは `window.location = "#foo"` と設定するのと似ています。どちらも、現在の文書に関連する別の履歴項目の生成と有効化を行います。

しかし、 `pushState()` にはいくらかの利点があります。

- 新しい URL は、現在の URL と同じオリジンであればどの URL にもなることができます。対照的に、 `window.location` では同じ {{ domxref("document") }} のままで、ハッシュの変更のみが可能です。
- 必ずしも URL を変更する必要はありません。逆に、 `window.location = "#foo";` では、現在のハッシュが `#foo` でない場合、新しい履歴項目の作成以外のことはできません。
- 新しい履歴項目に任意のデータを関連付けることができます。ハッシュを基にしたアプローチでは、関連するデータを含めた短い文字列を全てエンコードする必要があります。
- その後、 `title` がブラウザーで使用された場合、このデータを（例えばハッシュとは関係なく）使用することができます。

新しい URL が古い URL とハッシュだけ異なっていても、 `pushState()` は決して `hashchange` イベントを発行させないことに注意してください。

他の文書では、 `null` の名前空間 URI を持つ要素を作成します。

### replaceState() メソッド

`history.replaceState()` はちょうど `history.pushState()` のように動作しますが、 `replaceState()` は新しく履歴項目を作成するのではなく、現在の履歴項目を修正します。ただし、グローバルなブラウザー履歴に新しい項目が作成されるのを防ぐものではありません。

具体的には、何らかのユーザーのアクションを受け、現在の履歴項目の URL または 状態オブジェクトを更新したい場合に `replaceState()` が役立ちます。

### replaceState() の例

`https://mozilla.org/foo.html` で次の JavaScript を実行したとします。

```js
const stateObj = {
  foo: "bar",
};
history.pushState(stateObj, "page 2", "bar.html");
```

上記2行の説明は、上記の _[pushState() メソッドの例](#pushstate_の例)_ の部分で得ることができます。

次に、`https://mozilla.org/bar.html` で次の JavaScript を実行したとします。

```js
history.replaceState(stateObj, "page 3", "bar2.html");
```

これによって URL バーには `https://mozilla.org/bar2.html` が表示されますが、ブラウザーは `bar2.html` の読み込みを行わず、`bar2.html` が存在するかどうかもチェックしません。

仮に今、ユーザーが `https://www.microsoft.com` へ移動し、**戻る**ボタンを押したとします。この時点で URL バーには `https://mozilla.org/bar2.html` が表示されています。もしユーザーが再び**戻る**ボタンを押すと、 URL バーには `https://mozilla.org/foo.html` が表示され、`bar.html` を完全に回避します。

### popstate イベント

アクティブな履歴項目が変更される度にウィンドウへと `popstate` イベントが発行されます。`pushState` の呼び出しまたは `replaceState` の呼び出しの影響によって、アクティベートされた履歴項目が作成された場合、`popstate` イベントの `state` プロパティは履歴項目の 状態オブジェクトのコピーを含みます。

使い方の例は {{domxref("Window/popstate_event", "popstate")}} を参照してください。

### 現在の状態を読み取る

ページが読み込まれたとき、 ページには null ではない状態オブジェクトがあるかもしれません。これが起こるのは、例えば、（{{DOMxRef("History.pushState","pushState()")}} または {{DOMxRef("History.replaceState","replaceState()")}}) の使用によって）ページに状態オブジェクトが設定されており、ユーザーがブラウザーを再起動した場合です。ページを再読み込みした際にページは `onload` イベントを受け取りますが `popstate` イベントは受け取られません。しかしながら {{DOMxRef("History.state","history.state")}} プロパティを読み取った場合、`popstate` が発行された際に取得できるであろう状態オブジェクトを得ることができるでしょう。

このように {{DOMxRef("History.state","history.state")}} プロパティを用いることで、 `popstate` イベントを待つことなく現在の履歴項目の状態を読み取ることができます。

```js
const currentState = history.state;
```

## 関連情報

- [履歴 API](/ja/docs/Web/API/History_API)
- [履歴ナビゲーションの例](/ja/docs/Web/API/History_API/Working_with_the_History_API)
- {{domxref("window.history", "history")}} グローバルオブジェクト
