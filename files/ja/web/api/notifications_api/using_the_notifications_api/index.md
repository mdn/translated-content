---
title: 通知 API の使用
slug: Web/API/Notifications_API/Using_the_Notifications_API
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

[通知 API](/ja/docs/Web/API/Notifications_API) は、ウェブページやアプリからシステムレベルでページ外部に表示される通知を送ることを可能にします。これにより、アプリケーションがアイドルやバックグラウンドの状態であっても、アプリからユーザーに情報を送信することができます。この記事では、アプリで API を使用する方法の基本を見ていきます。

一般的にシステム通知とは、オペレーティングシステムの標準的な通知メカニズムを指します。一般的なデスクトップシステムやモバイル端末が、通知を行う方法の実例を思い出しましょう。

![](android-notification.png)

当然ながらシステム通知の仕組みはプラットフォームやブラウザーによって異なりますが問題はなく、通知 API はほとんどのシステム通知に対して十分な互換性を持つようになっています。

## 例

ウェブ通知の最も顕著な用途の一つが、ウェブベースのメールや IRC アプリケーションにおいて、新しいメッセージを受信したときに、ユーザーがほかのアプリケーションで何かをしていても通知をする必要がある場合です。これには数多くの事例が存在し、例えば [Slack](https://slack.com/) などがあります。

ウェブ通知がどのように利用できるのかの考えを深めるために、実世界の例を — To-do リストアプリ — を書いてみました。これは [IndexedDB](/ja/docs/Web/API/IndexedDB_API) を使用してローカルにデータを格納し、タスクの期限が来たときにシステム通知を使用してユーザーに通知します。 [To-do リストのコードをダウンロード](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)するか、[ライブで実行するアプリを見る](https://mdn.github.io/dom-examples/to-do-notifications/)かしてみましょう。

## 許可の要求

アプリが通知を送信できるようになる前に、ユーザーはアプリがそれを行う権限を認めなければなりません。これは API がウェブページの外部にあるものと対話しようとする際の一般的な要件です。ユーザは少なくとも 1 回はアプリケーションが通知を送ることを認めなければならず、これによりどのアプリやサイトが通知を表示してよいかをユーザーが制御することができます。

過去にプッシュ通知が悪用されることがあったため、ウェブブラウザーや開発者はこの問題を緩和するための対策を実装し始めています。通知を表示することの許可を求めるのは、ユーザーの操作 (ボタンをクリックするなど) の反応として行うべきです。ユーザーが同意していない通知でユーザーに迷惑をかけるべきではないので、これはベストプラクティスであるだけでなく、今後ブラウザーはユーザーの操作によって起動されたものではない通知の許可の要求を明示的に拒否するようになるでしょう。例えば、 Firefox はバージョン72からすでにこれを行っており、 Safari もしばらく前からこれを行っています。

加えて、 Chrome と Firefox では、サイトが安全なコンテキスト (すなわち HTTPS) ではない限り通知を要求することができず、また別オリジンの {{htmlelement("iframe")}} から要求された通知を許可することができなくなりました。

### 現在の許可状態を確認する

読取専用の {{domxref("Notification.permission")}} プロパティの値を調べると、すでに許可を得ているかを確認できます。このプロパティは、3 種類のいずれかの値を取ります。

- `default`
  - : ユーザーはまだ許可を求められたことがなく、したがって通知は表示されない。
- `granted`
  - : ユーザーは以前に通知表示の許可を求められており、許可した。
- `denied`
  - : ユーザーは、通知を表示することを明示的に拒否した。

### 許可を得る

通知を表示する許可をまだ得ていない場合は、アプリケーションは {{domxref("Notification.requestPermission()")}} メソッドを使用してユーザーに要求する必要があります。もっとも簡単な形では、次のようなものがあります。

```js
Notification.requestPermission().then(function(result) {
  console.log(result);
});
```

これはメソッドのプロミスベースの版を使用しています。古いバージョンに対応したい場合は、次のように古いコールバック版を使用する必要があります。

```js
Notification.requestPermission();
```

コールバック版はオプションで、ユーザーが表示を許可する要求に答えた時に呼び出されるコールバック関数を受け入れます。

### 例

To-do リストのデモでは、 "Enable notifications" ボタンを配置し、押されたときにアプリの通知を要求します。

```html
<button id="enable">Enable notifications</button>
```

これをクリックすると、 `askNotificationPermission()` 関数が呼び出されます。

```js
function askNotificationPermission() {
  // function to actually ask the permissions
  function handlePermission(permission) {
    // set the button to shown or hidden, depending on what the user answers
    if(Notification.permission === 'denied' || Notification.permission === 'default') {
      notificationBtn.style.display = 'block';
    } else {
      notificationBtn.style.display = 'none';
    }
  }

  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log("This browser does not support notifications.");
  } else {
    if(checkNotificationPromise()) {
      Notification.requestPermission()
      .then((permission) => {
        handlePermission(permission);
      })
    } else {
      Notification.requestPermission(function(permission) {
        handlePermission(permission);
      });
    }
  }
}
```

最初に 2 番目のメインブロックを見てみると、まず最初に通知に対応しているかどうかチェックしているのが分かります。もし対応していれば、次に `Notification.requestPermission()` のプロミスベース版に対応しているかどうかチェックします。対応している場合は、プロミスベース版 (Safari 以外で対応) を実行し、対応していない場合は古いコールバックベース版 (Safari で対応) を実行します。

コードの重複を避けるために、このスニペットの最初のメインブロックである `handlePermission()` 関数の中に、多少のハウスキーピングコードを格納しています。この内部では、 `Notification.permission` の値を明示的に設定し (古いバージョンの Chrome では自動的に設定できないものがありました)、ユーザーが許可ダイアログで選択した内容に応じてボタンを表示・非表示にしています。すでに許可されている場合は表示したくありませんが、ユーザーが許可を拒否することを選択した場合は、後で変更できるようにしたいと考えています。

> **メモ:** バージョン 37 より前の Chrome では、 {{domxref("Notification.requestPermission()")}} を `load` イベントのハンドラー内で呼び出すことを許可していませんでした ([issue 274284](https://bugs.chromium.org/p/chromium/issues/detail?id=274284) をご覧ください)。

### requestPermission() プロミスの機能検出

前に、ブラウザーがプロミス版の `Notification.requestPermission()` に対応しているかどうかをチェックする必要があると言いました。これは以下のようにして行います。

```js
function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }

    return true;
  }
```

基本的には、 `.then()` メソッドが `requestPermission()` で利用できるかどうかを確認します。成功した場合は `true` を返します。失敗した場合は、 `false` を `catch() {}` ブロック内で返します。

<h2 id="Creating_a_notification" name="Creating_a_notification">通知の作成</h2>

通知の作成は簡単です。 {{domxref("Notification")}} コンストラクターを使用するだけです。このコンストラクターは通知内に表示するタイトルと、通知を拡張するためのアイコン ({{domxref("Notification.icon","icon")}}) やテキスト本文 ({{domxref("Notification.body","body")}}) などのオプションを受け取ります。

例えば To-do リストの例では必要に応じて以下のスニペットを使用して通知を作成します (`createNotification()` 内にあります)。

```js
const img = '/to-do-notifications/img/icon-128.png';
const text = 'HEY! Your task "' + title + '" is now overdue.';
const notification = new Notification('To do list', { body: text, icon: img });
```

## 通知を閉じる

{{domxref("Notification.close","close()")}} を使用して、ユーザーに関係がなくなった通知を除去します (例えば、メッセージアプリなどで、ユーザーが既にウェブページ上の通知を読んだ場合や、音楽アプリですでに次の曲が始まっているため、曲の変更を行うための通知を閉じるなど)。最近のブラウザーの多くは、数秒 (約 4 秒) 経過すると通知を自動的に解除しますが、これはユーザーやユーザーエージェントの判断に委ねられているため、一般的には気にする必要はありません。通知の削除はオペレーティングシステムレベルでも発生する可能性があり、ユーザーが制御できるようにしておく必要があります。古いバージョンの Chrome は通知を自動的に削除しないので、他のブラウザーの通知トレイから通知を削除しないように、古いバージョンのブラウザーでのみ {{domxref("setTimeout()")}} の後に削除してください。

```js
const n = new Notification('My Great Song');
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // The tab has become visible so clear the now-stale Notification.
    n.close();
  }
});
```

> **メモ:** この API は、 (現代のブラウザーで) 一定時間経過後に通知を画面から消去するだけのために使用すべきではありません。通知が最初に表示された後にユーザーがそれとやりとりすることを防ぐため、このメソッドは通知トレイからも通知を削除するためです。

> **メモ:** "close" イベントを受け取ったとき、それが通知を閉じたユーザーであるという保証はありません。これは仕様書に準拠しており、以下のように記載されています。「通知が基礎となる通知プラットフォームによって、またはユーザーによって閉じられるとき、その通知のための閉じるステップを実行しなければなりません。」

## Notification イベント

Notifications API の仕様では、{{domxref("Notification")}} のインスタンスで発生するイベントを 2 つ定義しています:

- `click`
  - : ユーザーが通知をクリックしたときに発生します。
- `close`
  - : 通知が閉じられたときに一度発生します。
- `error`
  - : 通知で問題が発生したときに発生します。通常、なんらかの理由で通知が表示されなかったためです。
- `show`
  - : 通知がユーザーに表示されたときに発生します。

これらのイベントは {{domxref("Notification.click_event","onclick")}}, {{domxref("Notification.close_event","onclose")}}, {{domxref("Notification.error_event","onerror")}}, {{domxref("Notification.show_event","onshow")}} の各ハンドラーを使用して追跡することができます。 {{domxref("Notification")}} は {{domxref("EventTarget")}} も継承していますので {{domxref("EventTarget.addEventListener","addEventListener()")}} メソッドも使用することができます。

## 既存の通知を置き換える

ユーザーが短期間に多くの通知を受け取ることは、通常望ましくありません。例えばメッセンジャーアプリがメッセージを受け取るたびに通知を行って、それが大量になったらどうなるでしょうか。大量の通知によるスパム状態を避けるため、準備中の通知キューを変更して 1 つ以上の未表示通知を新た通知で置き換えることができます。

これを行うために、任意の新たな通知にタグ付けすることができます。すでに同じタグがついている通知がまだ表示されていない場合は、新しい通知が以前の通知を置き換えます。同じタグがついている通知がすでに表示されている場合は、前の通知が閉じられて新しい通知が表示されます。

### タグの例

以下の基本的な HTML を想定してください。

```html
<button>Notify me!</button>
```

以下の方法で、複数の通知を扱うことが可能です。

```js
window.addEventListener('load', function () {
  const button = document.getElementsByTagName('button')[0];

  if (window.self !== window.top) {
    // Ensure that if our document is in a frame, we get the user
    // to first open it in its own tab or window. Otherwise, it
    // won't be able to request permission to send notifications.
    button.textContent = "View live result of the example code above";
    button.addEventListener('click', () => window.open(location.href));
    return;
  }

  button.addEventListener('click', function () {
    // If the user agreed to get notified
    // Let's try to send ten notifications
    if (window.Notification && Notification.permission === "granted") {
      let i = 0;
      // Using an interval cause some browsers (including Firefox) are blocking notifications if there are too much in a certain time.
      const interval = window.setInterval(function () {
        // Thanks to the tag, we should only see the "Hi! 9" notification
        const n = new Notification("Hi! " + i, {tag: 'soManyNotification'});
        if (i++ == 9) {
          window.clearInterval(interval);
        }
      }, 200);
    }

    // If the user hasn't told if they want to be notified or not
    // Note: because of Chrome, we are not sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        // If the user said okay
        if (status === "granted") {
          let i = 0;
          // Using an interval cause some browsers (including Firefox) are blocking notifications if there are too much in a certain time.
          const interval = window.setInterval(function () {
            // Thanks to the tag, we should only see the "Hi! 9" notification
            const n = new Notification("Hi! " + i, {tag: 'soManyNotification'});
            if (i++ == 9) {
              window.clearInterval(interval);
            }
          }, 200);
        }

        // Otherwise, we can fallback to a regular modal alert
        else {
          alert("Hi!");
        }
      });
    }

    // ユーザが通知を拒否している場合
    else {
      // 通常型の alert にフォールバックできます
      alert("Hi!");
    }
  });
});
```

結果は以下のとおりです。

{{ EmbedLiveSample('Tag_example', '100%', 30) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Notification") }}
