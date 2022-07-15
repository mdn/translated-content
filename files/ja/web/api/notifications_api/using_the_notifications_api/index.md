---
title: 通知 API の使用
slug: Web/API/Notifications_API/Using_the_Notifications_API
tags:
  - API
  - Advanced
  - DOM
  - Guide
  - Notifications
  - Push
  - Tutorial
  - ガイド
  - チュートリアル
  - プッシュ
  - 通知
  - 通知 API
translation_of: Web/API/Notifications_API/Using_the_Notifications_API
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p class="summary"><a href="/ja/docs/Web/API/Notifications_API">通知 API</a> は、ウェブページやアプリからシステムレベルでページ外部に表示される通知を送ることを可能にします。これにより、アプリケーションがアイドルやバックグラウンドの状態であっても、アプリからユーザーに情報を送信することができます。この記事では、アプリで API を使用する方法の基本を見ていきます。</p>

<p>一般的にシステム通知とは、オペレーティングシステムの標準的な通知メカニズムを指します。一般的なデスクトップシステムやモバイル端末が、通知を行う方法の実例を思い出しましょう。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/10959/android-notification.png" style="display: block; height: 184px; margin: 0px auto; width: 300px;"></p>

<p>当然ながらシステム通知の仕組みはプラットフォームやブラウザーによって異なりますが問題はなく、通知 API はほとんどのシステム通知に対して十分な互換性を持つようになっています。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>ウェブ通知の最も顕著な用途の一つが、ウェブベースのメールや IRC アプリケーションにおいて、新しいメッセージを受信したときに、ユーザーがほかのアプリケーションで何かをしていても通知をする必要がある場合です。これには数多くの事例が存在し、例えば <a href="https://slack.com/">Slack</a> などがあります。</p>

<p>ウェブ通知がどのように利用できるのかの考えを深めるために、実世界の例を — To-do リストアプリ — を書いてみました。これは <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> を使用してローカルにデータを格納し、タスクの期限が来たときにシステム通知を使用してユーザーに通知します。 <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do リストのコードをダウンロード</a>するか、<a href="https://mdn.github.io/to-do-notifications/">ライブで実行するアプリを見る</a>かしてみましょう。</p>

<h2 id="Requesting_permission" name="Requesting_permission">許可の要求</h2>

<p>アプリが通知を送信できるようになる前に、ユーザーはアプリがそれを行う権限を認めなければなりません。これは API がウェブページの外部にあるものと対話しようとする際の一般的な要件です。ユーザは少なくとも 1 回はアプリケーションが通知を送ることを認めなければならず、これによりどのアプリやサイトが通知を表示してよいかをユーザーが制御することができます。</p>

<p>過去にプッシュ通知が悪用されることがあったため、ウェブブラウザーや開発者はこの問題を緩和するための対策を実装し始めています。通知を表示することの許可を求めるのは、ユーザーの操作 (ボタンをクリックするなど) の反応として行うべきです。ユーザーが同意していない通知でユーザーに迷惑をかけるべきではないので、これはベストプラクティスであるだけでなく、今後ブラウザーはユーザーの操作によって起動されたものではない通知の許可の要求を明示的に拒否するようになるでしょう。例えば、 Firefox はバージョン72からすでにこれを行っており、 Safari もしばらく前からこれを行っています。</p>

<p>加えて、 Chrome と Firefox では、サイトが安全なコンテキスト (すなわち HTTPS) ではない限り通知を要求することができず、また別オリジンの {{htmlelement("iframe")}} から要求された通知を許可することができなくなりました。</p>

<h3 id="Checking_current_permission_status" name="Checking_current_permission_status">現在の許可状態を確認する</h3>

<p>読取専用の {{domxref("Notification.permission")}} プロパティの値を調べると、すでに許可を得ているかを確認できます。このプロパティは、3 種類のいずれかの値を取ります。</p>

<dl>
 <dt><code>default</code></dt>
 <dd>ユーザーはまだ許可を求められたことがなく、したがって通知は表示されない。</dd>
 <dt><code>granted</code></dt>
 <dd>ユーザーは以前に通知表示の許可を求められており、許可した。</dd>
 <dt><code>denied</code></dt>
 <dd>ユーザーは、通知を表示することを明示的に拒否した。</dd>
</dl>

<h3 id="Getting_permission" name="Getting_permission">許可を得る</h3>

<p>通知を表示する許可をまだ得ていない場合は、アプリケーションは {{domxref("Notification.requestPermission()")}} メソッドを使用してユーザーに要求する必要があります。もっとも簡単な形では、次のようなものがあります。</p>

<pre class="brush: js notranslate">Notification.requestPermission().then(function(result) {
  console.log(result);
});</pre>

<p>これはメソッドのプロミスベースの版を使用しています。古いバージョンに対応したい場合は、次のように古いコールバック版を使用する必要があります。</p>

<pre class="brush: js notranslate">Notification.requestPermission();</pre>

<p>コールバック版はオプションで、ユーザーが表示を許可する要求に答えた時に呼び出されるコールバック関数を受け入れます。</p>

<h3 id="Example" name="Example">例</h3>

<p>To-do リストのデモでは、 "Enable notifications" ボタンを配置し、押されたときにアプリの通知を要求します。</p>

<pre class="brush: html notranslate">&lt;button id="enable"&gt;Enable notifications&lt;/button&gt;</pre>

<p>これをクリックすると、 <code>askNotificationPermission()</code> 関数が呼び出されます。</p>

<pre class="brush: js notranslate">function askNotificationPermission() {
  // function to actually ask the permissions
  function handlePermission(permission) {
    // Whatever the user answers, we make sure Chrome stores the information
    if(!('permission' in Notification)) {
      Notification.permission = permission;
    }

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
      .then((permission) =&gt; {
        handlePermission(permission);
      })
    } else {
      Notification.requestPermission(function(permission) {
        handlePermission(permission);
      });
    }
  }
}</pre>

<p>最初に 2 番目のメインブロックを見てみると、まず最初に通知に対応しているかどうかチェックしているのが分かります。もし対応していれば、次に <code>Notification.requestPermission()</code> のプロミスベース版に対応しているかどうかチェックします。対応している場合は、プロミスベース版 (Safari 以外で対応) を実行し、対応していない場合は古いコールバックベース版 (Safari で対応) を実行します。</p>

<p>コードの重複を避けるために、このスニペットの最初のメインブロックである <code>handlePermission()</code> 関数の中に、多少のハウスキーピングコードを格納しています。この内部では、 <code>Notification.permission</code> の値を明示的に設定し (古いバージョンの Chrome では自動的に設定できないものがありました)、ユーザーが許可ダイアログで選択した内容に応じてボタンを表示・非表示にしています。すでに許可されている場合は表示したくありませんが、ユーザーが許可を拒否することを選択した場合は、後で変更できるようにしたいと考えています。</p>

<div class="note">
<p><strong>注:</strong> バージョン 37 より前の Chrome では、 {{domxref("Notification.requestPermission()")}} を <code>load</code> イベントのハンドラー内で呼び出すことを許可していませんでした (<a href="https://code.google.com/p/chromium/issues/detail?id=274284">issue 274284</a> をご覧ください)。</p>
</div>

<h3 id="Feature-detecting_the_requestPermission_promise" name="Feature-detecting_the_requestPermission_promise">requestPermission() プロミスの機能検出</h3>

<p>前に、ブラウザーがプロミス版の <code>Notification.requestPermission()</code> に対応しているかどうかをチェックする必要があると言いました。これは以下のようにして行います。</p>

<pre class="brush: js notranslate">function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }

    return true;
  }</pre>

<p>基本的には、 <code>.then()</code> メソッドが <code>requestPermission()</code> で利用できるかどうかを確認します。成功した場合は <code>true</code> を返します。失敗した場合は、 <code>false</code> を <code>catch() {}</code> ブロック内で返します。</p>

<h2 id="Creating_a_notification" name="Creating_a_notification">通知の作成</h2>

<p>通知の作成は簡単です。 {{domxref("Notification")}} コンストラクターを使用するだけです。このコンストラクターは通知内に表示するタイトルと、通知を拡張するためのアイコン ({{domxref("Notification.icon","icon")}}) やテキスト本文 ({{domxref("Notification.body","body")}}) などのオプションを受け取ります。</p>

<p>例えば To-do リストの例では必要に応じて以下のスニペットを使用して通知を作成します (<code>createNotification()</code> 内にあります)。</p>

<pre class="brush: js notranslate">var img = '/to-do-notifications/img/icon-128.png';
var text = 'HEY! Your task "' + title + '" is now overdue.';
var notification = new Notification('To do list', { body: text, icon: img });</pre>

<h2 id="Closing_notifications" name="Closing_notifications">通知を閉じる</h2>

<p>{{domxref("Notification.close","close()")}} を使用して、ユーザーに関係がなくなった通知を除去します (例えば、メッセージアプリなどで、ユーザーが既にウェブページ上の通知を読んだ場合や、音楽アプリですでに次の曲が始まっているため、曲の変更を行うための通知を閉じるなど)。最近のブラウザーの多くは、数秒 (約4秒) 経過すると通知を自動的に解除しますが、これはユーザーやユーザーエージェントの判断に委ねられているため、一般的には気にする必要はありません。通知の削除はオペレーティングシステムレベルでも発生する可能性があり、ユーザーが制御できるようにしておく必要があります。古いバージョンの Chrome は通知を自動的に削除しないので、他のブラウザーの通知トレイから通知を削除しないように、古いバージョンのブラウザーでのみ {{domxref("WindowTimers.setTimeout","setTimeout()")}} の後に削除してください。</p>

<pre class="brush: js notranslate">var n = new Notification('My Great Song');
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // The tab has become visible so clear the now-stale Notification.
    n.close();
  }
});
</pre>

<div class="note">
<p><strong>注:</strong> この API は、 (現代のブラウザーで) 一定時間経過後に通知を画面から消去するだけのために使用すべきではありません。通知が最初に表示された後にユーザーがそれとやりとりすることを防ぐため、このメソッドは通知トレイからも通知を削除するためです。</p>
</div>

<div class="note">
<p><strong>注</strong>: "close" イベントを受け取ったとき、それが通知を閉じたユーザーであるという保証はありません。これは仕様書に準拠しており、以下のように記載されています。「通知が基礎となる通知プラットフォームによって、またはユーザーによって閉じられるとき、その通知のための閉じるステップを実行しなければなりません。」</p>
</div>

<h2 id="Notification_events" name="Notification_events">Notification イベント</h2>

<p>Notifications API の仕様では、{{domxref("Notification")}} のインスタンスで発生するイベントを 2 つ定義しています:</p>

<dl>
 <dt><code>click</code></dt>
 <dd>ユーザーが通知をクリックしたときに発生します。</dd>
 <dt><code>close</code></dt>
 <dd>通知が閉じられたときに一度発生します。</dd>
 <dt><code>error</code></dt>
 <dd>通知で問題が発生したときに発生します。通常、なんらかの理由で通知が表示されなかったためです。</dd>
 <dt><code>show</code></dt>
 <dd>通知がユーザーに表示されたときに発生します。</dd>
</dl>

<p>これらのイベントは {{domxref("Notification.onclick","onclick")}}, {{domxref("Notification.onclose","onclose")}}, {{domxref("Notification.onerror","onerror")}}, {{domxref("Notification.onshow","onshow")}} の各ハンドラーを使用して追跡することができます。 {{domxref("Notification")}} は {{domxref("EventTarget")}} も継承していますので {{domxref("EventTarget.addEventListener","addEventListener()")}} メソッドも使用することができます。</p>

<h2 id="Replacing_existing_notifications" name="Replacing_existing_notifications">既存の通知を置き換える</h2>

<p>ユーザが短期間に多くの通知を受け取ることは、通常望ましくありません。例えばメッセンジャーアプリがメッセージを受け取るたびに通知を行って、それが大量になったらどうなるでしょうか。大量の通知によるスパム状態を避けるため、準備中の通知キューを変更して 1 つ以上の未表示通知を新た通知で置き換えることができます。</p>

<p>これを行うために、任意の新たな通知にタグ付けすることができます。すでに同じタグがついている通知がまだ表示されていない場合は、新しい通知が以前の通知を置き換えます。同じタグがついている通知がすでに表示されている場合は、前の通知が閉じられて新しい通知が表示されます。</p>

<h3 id="Tag_example" name="Tag_example">タグの例</h3>

<p>以下の基本的な HTML を想定してください。</p>

<pre class="brush: html notranslate">&lt;button&gt;Notify me!&lt;/button&gt;</pre>

<p>以下の方法で、複数の通知を扱うことが可能です。</p>

<pre class="brush: js notranslate">window.addEventListener('load', function () {
  // 始めに、通知の許可を得ているかを確認しましょう
  // 得ていなければ、尋ねましょう
  if (window.Notification &amp;&amp; Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }

  var button = document.getElementsByTagName('button')[0];

  button.addEventListener('click', function () {
    // 通知されることにユーザが同意している場合
    // 10 個の通知を送信してみましょう
    if (window.Notification &amp;&amp; Notification.permission === "granted") {
      var i = 0;
      // 一部のブラウザ (Firefox を含む) は一定の期間内に大量の通知を行うとブロックするため、interval を使用します。
      var interval = window.setInterval(function () {
        // タグのおかげで、 "Hi!9" の通知だけが見えます
        var n = new Notification("Hi! " + i, {tag: 'soManyNotification'});
        if (i++ == 9) {
          window.clearInterval(interval);
        }
      }, 200);
    }

    // 通知を受けたいか否かをユーザが告げていない場合
    // 注: Chrome のために permission プロパティが設定されているかの確信が
    // 持てないため、値 "default" を確認するのは安全ではありません。
    else if (window.Notification &amp;&amp; Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        // ユーザーが許可している場合
        if (status === "granted") {
          var i = 0;
          // 一部のブラウザー (Firefox を含む) は一定の期間内に大量の通知を行うとブロックするため、interval を使用します。
          var interval = window.setInterval(function () {
            // タグのおかげで、 "Hi!9" の通知だけが見えます
            var n = new Notification("Hi! " + i, {tag: 'soManyNotification'});
            if (i++ == 9) {
              window.clearInterval(interval);
            }
          }, 200);
        }

        // 許可していなければ、通常型の alert にフォールバックします
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
});</pre>

<p>結果は以下のとおりです:</p>

<p>{{ EmbedLiveSample('Tag_example', '100%', 30) }}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{page("/ja/Web/API/Notification","Browser compatibility")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/Apps/Build/User_notifications">ユーザー通知のリファレンス</a></li>
 <li>{{ domxref("Notification") }}</li>
</ul>
