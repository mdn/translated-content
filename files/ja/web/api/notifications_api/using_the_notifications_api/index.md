---
title: 通知 API の使用
slug: Web/API/Notifications_API/Using_the_Notifications_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

[通知 API](/ja/docs/Web/API/Notifications_API) は、ウェブページやアプリからシステムレベルでページ外部に表示される通知を送ることを可能にします。これにより、アプリケーションがアイドルやバックグラウンドの状態であっても、アプリからユーザーに情報を送信することができます。この記事では、アプリで API を使用する方法の基本を見ていきます。

一般的にシステム通知とは、オペレーティングシステムの標準的な通知メカニズムを指します。一般的なデスクトップシステムやモバイル端末が、通知を行う方法の実例を思い出しましょう。

![デスクトップ通知: To do list via mdn.github.io HEY! Your task "Go shopping" is now overdue](desktop-notification.png)

当然ながらシステム通知の仕組みはプラットフォームやブラウザーによって異なりますが問題はなく、通知 API はほとんどのシステム通知に対して十分な互換性を持つようになっています。

## 例

ウェブ通知の最も顕著な用途の一つが、ウェブベースのメールや IRC アプリケーションにおいて、新しいメッセージを受信したときに、ユーザーがほかのアプリケーションで何かをしていても通知をする必要がある場合です。これには数多くの事例が存在し、例えば [Slack](https://slack.com/) などがあります。

ウェブ通知がどのように利用できるのかの考えを深めるために、実世界の例を — To-do リストアプリ — を書いてみました。これは [IndexedDB](/ja/docs/Web/API/IndexedDB_API) を使用してローカルにデータを格納し、タスクの期限が来たときにシステム通知を使用してユーザーに通知します。 [To-do リストのコードをダウンロード](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)するか、[ライブで実行するアプリを見る](https://mdn.github.io/dom-examples/to-do-notifications/)かしてみましょう。

## 許可の要求

アプリが通知を送信できるようになる前に、ユーザーはアプリがそれを行う権限を認めなければなりません。これは API がウェブページの外部にあるものと対話しようとする際の一般的な要件です。ユーザーは少なくとも 1 回はアプリケーションが通知を送ることを認めなければならず、これによりどのアプリやサイトが通知を表示してよいかをユーザーが制御することができます。

過去にプッシュ通知が悪用されることがあったため、ウェブブラウザーや開発者はこの問題を緩和するための対策を実装し始めています。通知を表示することの許可を求めるのは、ユーザーの操作 (ボタンをクリックするなど) の反応として行うべきです。ユーザーが同意していない通知でユーザーに迷惑をかけるべきではないので、これはベストプラクティスであるだけでなく、今後ブラウザーはユーザーの操作によって起動されたものではない通知の許可の要求を明示的に拒否するようになるでしょう。例えば、 Firefox はバージョン72からすでにこれを行っており、 Safari もしばらく前からこれを行っています。

加えて、 Chrome と Firefox では、サイトが保護されたコンテキスト (すなわち HTTPS) ではない限り通知を要求することができず、また別オリジンの {{htmlelement("iframe")}} から要求された通知を許可することができなくなりました。

### 現在の許可状態を確認する

読み取り専用の {{domxref("Notification.permission_static", "Notification.permission")}} プロパティの値を調べると、すでに許可を得ているかを確認できます。このプロパティは、3 種類のいずれかの値を取ります。

- `default`
  - : ユーザーはまだ許可を求められたことがなく、したがって通知は表示されない。
- `granted`
  - : ユーザーは以前に通知表示の許可を求められており、許可した。
- `denied`
  - : ユーザーは、通知を表示することを明示的に拒否した。

### 許可を得る

通知を表示する許可をまだ得ていない場合は、アプリケーションは {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}} メソッドを使用してユーザーに要求する必要があります。もっとも簡単な形では、次のようなものがあります。

```js
Notification.requestPermission().then((result) => {
  console.log(result);
});
```

これはメソッドのプロミスベースの版を使用しています。古いバージョンに対応したい場合は、次のように古いコールバック版を使用する必要があります。

```js
Notification.requestPermission((result) => {
  console.log(result);
});
```

コールバック版はオプションで、ユーザーが表示を許可する要求に答えた時に呼び出されるコールバック関数を受け入れます。

> [!NOTE]
> `Notification.requestPermission` がプロミスベース版に対応しているかどうかを、確実に機能テストする方法はありません。古いブラウザーの対応が必要な場合は、コールバック版を使用してください。非推奨ではありますが、新しいブラウザーでも動作します。詳しくは、[ブラウザー互換性表](/ja/docs/Web/API/Notification/requestPermission_static#ブラウザーの互換性)を参照してください。

### 例

To-do リストのデモでは、 "Enable notifications" ボタンを配置し、押されたときにアプリの通知を要求します。

```html
<button id="enable">Enable notifications</button>
```

これをクリックすると、 `askNotificationPermission()` 関数が呼び出されます。

```js
function askNotificationPermission() {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
    return;
  }
  Notification.requestPermission().then((permission) => {
    // set the button to shown or hidden, depending on what the user answers
    notificationBtn.style.display = permission === "granted" ? "none" : "block";
  });
}
```

最初に 2 番目のメインブロックを見てみると、まず最初に通知に対応しているかどうかチェックしているのが分かります。もしそうであれば、プロミスベース版の `Notification.requestPermission()` を実行し、そうでない場合は、コンソールにメッセージをログ出力します。

`then` に渡されるプロミス解決ハンドラー内で、ユーザーが権限ダイアログで選んだ内容に応じてボタンの表示・非表示を切り替えます。すでにその権限が許可されている場合はボタンを表示させたくありませんが、ユーザーが権限を拒否するよう選んだ場合は、後で考えを変えるチャンスを与えるべきです。

## 通知の作成

通知の作成は簡単です。 {{domxref("Notification")}} コンストラクターを使用するだけです。このコンストラクターは通知内に表示するタイトルと、通知を拡張するためのアイコン ({{domxref("Notification.icon","icon")}}) やテキスト本文 ({{domxref("Notification.body","body")}}) などのオプションを受け取ります。

例えば To-do リストの例では必要に応じて以下のスニペットを使用して通知を作成します (`createNotification()` 内にあります)。

```js
const img = "/to-do-notifications/img/icon-128.png";
const text = `HEY! Your task "${title}" is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });
```

## 通知を閉じる

{{domxref("Notification.close","close()")}} を使用して、ユーザーに関係がなくなった通知を除去します (例えば、メッセージアプリなどで、ユーザーが既にウェブページ上の通知を読んだ場合や、音楽アプリですでに次の曲が始まっているため、曲の変更を行うための通知を閉じるなど)。最近のブラウザーの多くは、数秒 (約 4 秒) 経過すると通知を自動的に解除しますが、これはユーザーやユーザーエージェントの判断に委ねられているため、一般的には気にする必要はありません。通知の削除はオペレーティングシステムレベルでも発生する可能性があり、ユーザーが制御できるようにしておく必要があります。古いバージョンの Chrome は通知を自動的に削除しないので、他のブラウザーの通知トレイから通知を削除しないように、古いバージョンのブラウザーでのみ {{domxref("Window.setTimeout", "setTimeout()")}} の後に削除してください。

```js
const n = new Notification("My Great Song");
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // The tab has become visible so clear the now-stale Notification.
    n.close();
  }
});
```

> [!NOTE]
> この API は、 (現代のブラウザーで) 一定時間経過後に通知を画面から消去するだけのために使用すべきではありません。通知が最初に表示された後にユーザーがそれとやりとりすることを防ぐため、このメソッドは通知トレイからも通知を削除するためです。

> [!NOTE]
> "close" イベントを受け取ったとき、それが通知を閉じたユーザーであるという保証はありません。これは仕様書に準拠しており、以下のように記載されています。「通知が基礎となる通知プラットフォームによって、またはユーザーによって閉じられるとき、その通知のための閉じるステップを実行しなければなりません。」

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
<button id="notify">Notify me!</button>
<section id="demo-logs"></section>
```

```css hidden
#demo-logs {
  width: 90%;
  height: 100px;
  background-color: #ddd;
  overflow-x: auto;
}
```

以下の方法で、複数の通知を扱うことが可能です。

```js
const demoLogs = document.querySelector("#demo-logs");

window.addEventListener("load", () => {
  const button = document.querySelector("#notify");

  button.addEventListener("click", () => {
    if (Notification?.permission === "granted") {
      demoLogs.innerText += `The site has permission to show notifications. Showing notifications.\n`;
      // If the user agreed to get notified
      // Let's try to send ten notifications
      let i = 0;
      // Using an interval cause some browsers (including Firefox) are blocking notifications if there are too much in a certain time.
      const interval = setInterval(() => {
        // Thanks to the tag, we should only see the "Hi no 9 from MDN." notification
        const n = new Notification(`Hi no ${i} from MDN.`, {
          tag: "soManyNotification",
        });
        if (i === 9) {
          clearInterval(interval);
        }
        i++;
      }, 200);
    } else if (Notification && Notification.permission !== "denied") {
      demoLogs.innerText += "Requesting notification permission.\n";
      // If the user hasn't told if they want to be notified or not
      // Note: because of Chrome, we are not sure the permission property
      // is set, therefore it's unsafe to check for the "default" value.
      Notification.requestPermission().then((status) => {
        // If the user said okay
        if (status === "granted") {
          demoLogs.innerText +=
            "User granted the permission. Sending notifications.\n";
          let i = 0;
          // Using an interval cause some browsers (including Firefox) are blocking notifications if there are too much in a certain time.
          const interval = setInterval(() => {
            // Thanks to the tag, we should only see the "Hi! 9" notification
            const n = new Notification(`Message no ${i} from MDN.`, {
              tag: "soManyNotification",
            });
            if (i === 9) {
              clearInterval(interval);
            }
            i++;
          }, 200);
        } else {
          // Otherwise, we can fallback to a regular modal alert
          demoLogs.innerText += `User denied the permission request.\n`;
        }
      });
    } else {
      // If the user refuses to get notified, we can fallback to a regular modal alert
      demoLogs.innerText += `The site does not have permission to show notifications.\n`;
    }
  });
});
```

### 結果

{{ EmbedLiveSample('Tag_example', '100%', 150) }}

上記の例をテストするには、ウェブサイト `https://live.mdnplay.dev` の[通知設定](https://support.mozilla.org/en-US/kb/firefox-page-info-window#w_permissions)を変更してください。

## 関連情報

- {{ domxref("Notification") }}
