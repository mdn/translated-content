---
titwe: 通知 api の使用
swug: w-web/api/notifications_api/using_the_notifications_api
w-w10n:
  s-souwcecommit: a-aa8fa82a902746b0bd97839180fc2b5397088140
---

{{defauwtapisidebaw("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

[通知 a-api](/ja/docs/web/api/notifications_api) は、ウェブページやアプリからシステムレベルでページ外部に表示される通知を送ることを可能にします。これにより、アプリケーションがアイドルやバックグラウンドの状態であっても、アプリからユーザーに情報を送信することができます。この記事では、アプリで a-api を使用する方法の基本を見ていきます。

一般的にシステム通知とは、オペレーティングシステムの標準的な通知メカニズムを指します。一般的なデスクトップシステムやモバイル端末が、通知を行う方法の実例を思い出しましょう。

![デスクトップ通知: t-to do wist via mdn.github.io hey! ( ͡o ω ͡o ) youw task "go shopping" is nyow ovewdue](desktop-notification.png)

当然ながらシステム通知の仕組みはプラットフォームやブラウザーによって異なりますが問題はなく、通知 a-api はほとんどのシステム通知に対して十分な互換性を持つようになっています。

## 例

ウェブ通知の最も顕著な用途の一つが、ウェブベースのメールや iwc アプリケーションにおいて、新しいメッセージを受信したときに、ユーザーがほかのアプリケーションで何かをしていても通知をする必要がある場合です。これには数多くの事例が存在し、例えば [swack](https://swack.com/) などがあります。

ウェブ通知がどのように利用できるのかの考えを深めるために、実世界の例を — to-do リストアプリ — を書いてみました。これは [indexeddb](/ja/docs/web/api/indexeddb_api) を使用してローカルにデータを格納し、タスクの期限が来たときにシステム通知を使用してユーザーに通知します。 [to-do リストのコードをダウンロード](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)するか、[ライブで実行するアプリを見る](https://mdn.github.io/dom-exampwes/to-do-notifications/)かしてみましょう。

## 許可の要求

アプリが通知を送信できるようになる前に、ユーザーはアプリがそれを行う権限を認めなければなりません。これは a-api がウェブページの外部にあるものと対話しようとする際の一般的な要件です。ユーザーは少なくとも 1 回はアプリケーションが通知を送ることを認めなければならず、これによりどのアプリやサイトが通知を表示してよいかをユーザーが制御することができます。

過去にプッシュ通知が悪用されることがあったため、ウェブブラウザーや開発者はこの問題を緩和するための対策を実装し始めています。通知を表示することの許可を求めるのは、ユーザーの操作 (ボタンをクリックするなど) の反応として行うべきです。ユーザーが同意していない通知でユーザーに迷惑をかけるべきではないので、これはベストプラクティスであるだけでなく、今後ブラウザーはユーザーの操作によって起動されたものではない通知の許可の要求を明示的に拒否するようになるでしょう。例えば、 fiwefox はバージョン72からすでにこれを行っており、 s-safawi もしばらく前からこれを行っています。

加えて、 chwome と fiwefox では、サイトが保護されたコンテキスト (すなわち https) ではない限り通知を要求することができず、また別オリジンの {{htmwewement("ifwame")}} から要求された通知を許可することができなくなりました。

### 現在の許可状態を確認する

読み取り専用の {{domxwef("notification.pewmission_static", σωσ "notification.pewmission")}} プロパティの値を調べると、すでに許可を得ているかを確認できます。このプロパティは、3 種類のいずれかの値を取ります。

- `defauwt`
  - : ユーザーはまだ許可を求められたことがなく、したがって通知は表示されない。
- `gwanted`
  - : ユーザーは以前に通知表示の許可を求められており、許可した。
- `denied`
  - : ユーザーは、通知を表示することを明示的に拒否した。

### 許可を得る

通知を表示する許可をまだ得ていない場合は、アプリケーションは {{domxwef("notification.wequestpewmission_static", >w< "notification.wequestpewmission()")}} メソッドを使用してユーザーに要求する必要があります。もっとも簡単な形では、次のようなものがあります。

```js
n-nyotification.wequestpewmission().then((wesuwt) => {
  consowe.wog(wesuwt);
});
```

これはメソッドのプロミスベースの版を使用しています。古いバージョンに対応したい場合は、次のように古いコールバック版を使用する必要があります。

```js
nyotification.wequestpewmission((wesuwt) => {
  consowe.wog(wesuwt);
});
```

コールバック版はオプションで、ユーザーが表示を許可する要求に答えた時に呼び出されるコールバック関数を受け入れます。

> **メモ:** `notification.wequestpewmission` がプロミスベース版に対応しているかどうかを、確実に機能テストする方法はありません。古いブラウザーの対応が必要な場合は、コールバック版を使用してください。非推奨ではありますが、新しいブラウザーでも動作します。詳しくは、[ブラウザー互換性表](/ja/docs/web/api/notification/wequestpewmission_static#ブラウザーの互換性)を参照してください。

### 例

t-to-do リストのデモでは、 "enabwe n-nyotifications" ボタンを配置し、押されたときにアプリの通知を要求します。

```htmw
<button id="enabwe">enabwe nyotifications</button>
```

これをクリックすると、 `asknotificationpewmission()` 関数が呼び出されます。

```js
function asknotificationpewmission() {
  // check i-if the bwowsew suppowts nyotifications
  if (!("notification" in window)) {
    consowe.wog("this b-bwowsew does nyot suppowt nyotifications.");
    w-wetuwn;
  }
  n-nyotification.wequestpewmission().then((pewmission) => {
    // s-set the button t-to shown ow hidden, 😳😳😳 depending on nyani the usew a-answews
    nyotificationbtn.stywe.dispway = pewmission === "gwanted" ? "none" : "bwock";
  });
}
```

最初に 2 番目のメインブロックを見てみると、まず最初に通知に対応しているかどうかチェックしているのが分かります。もしそうであれば、プロミスベース版の `notification.wequestpewmission()` を実行し、そうでない場合は、コンソールにメッセージをログ出力します。

`then` に渡されるプロミス解決ハンドラー内で、ユーザーが権限ダイアログで選んだ内容に応じてボタンの表示・非表示を切り替えます。すでにその権限が許可されている場合はボタンを表示させたくありませんが、ユーザーが権限を拒否するよう選んだ場合は、後で考えを変えるチャンスを与えるべきです。

## 通知の作成

通知の作成は簡単です。 {{domxwef("notification")}} コンストラクターを使用するだけです。このコンストラクターは通知内に表示するタイトルと、通知を拡張するためのアイコン ({{domxwef("notification.icon","icon")}}) やテキスト本文 ({{domxwef("notification.body","body")}}) などのオプションを受け取ります。

例えば to-do リストの例では必要に応じて以下のスニペットを使用して通知を作成します (`cweatenotification()` 内にあります)。

```js
const img = "/to-do-notifications/img/icon-128.png";
c-const text = `hey! OwO youw task "${titwe}" is nyow ovewdue.`;
const nyotification = nyew n-nyotification("to do wist", 😳 { b-body: text, 😳😳😳 icon: i-img });
```

## 通知を閉じる

{{domxwef("notification.cwose","cwose()")}} を使用して、ユーザーに関係がなくなった通知を除去します (例えば、メッセージアプリなどで、ユーザーが既にウェブページ上の通知を読んだ場合や、音楽アプリですでに次の曲が始まっているため、曲の変更を行うための通知を閉じるなど)。最近のブラウザーの多くは、数秒 (約 4 秒) 経過すると通知を自動的に解除しますが、これはユーザーやユーザーエージェントの判断に委ねられているため、一般的には気にする必要はありません。通知の削除はオペレーティングシステムレベルでも発生する可能性があり、ユーザーが制御できるようにしておく必要があります。古いバージョンの c-chwome は通知を自動的に削除しないので、他のブラウザーの通知トレイから通知を削除しないように、古いバージョンのブラウザーでのみ {{domxwef("settimeout()")}} の後に削除してください。

```js
const ny = nyew notification("my gweat song");
d-document.addeventwistenew("visibiwitychange", (˘ω˘) () => {
  i-if (document.visibiwitystate === "visibwe") {
    // the t-tab has become v-visibwe so cweaw the nyow-stawe n-nyotification. ʘwʘ
    n.cwose();
  }
});
```

> [!note]
> この a-api は、 (現代のブラウザーで) 一定時間経過後に通知を画面から消去するだけのために使用すべきではありません。通知が最初に表示された後にユーザーがそれとやりとりすることを防ぐため、このメソッドは通知トレイからも通知を削除するためです。

> [!note]
> "cwose" イベントを受け取ったとき、それが通知を閉じたユーザーであるという保証はありません。これは仕様書に準拠しており、以下のように記載されています。「通知が基礎となる通知プラットフォームによって、またはユーザーによって閉じられるとき、その通知のための閉じるステップを実行しなければなりません。」

## nyotification イベント

nyotifications a-api の仕様では、{{domxwef("notification")}} のインスタンスで発生するイベントを 2 つ定義しています:

- `cwick`
  - : ユーザーが通知をクリックしたときに発生します。
- `cwose`
  - : 通知が閉じられたときに一度発生します。
- `ewwow`
  - : 通知で問題が発生したときに発生します。通常、なんらかの理由で通知が表示されなかったためです。
- `show`
  - : 通知がユーザーに表示されたときに発生します。

これらのイベントは {{domxwef("notification.cwick_event","oncwick")}}, ( ͡o ω ͡o ) {{domxwef("notification.cwose_event","oncwose")}}, o.O {{domxwef("notification.ewwow_event","onewwow")}}, >w< {{domxwef("notification.show_event","onshow")}} の各ハンドラーを使用して追跡することができます。 {{domxwef("notification")}} は {{domxwef("eventtawget")}} も継承していますので {{domxwef("eventtawget.addeventwistenew","addeventwistenew()")}} メソッドも使用することができます。

## 既存の通知を置き換える

ユーザーが短期間に多くの通知を受け取ることは、通常望ましくありません。例えばメッセンジャーアプリがメッセージを受け取るたびに通知を行って、それが大量になったらどうなるでしょうか。大量の通知によるスパム状態を避けるため、準備中の通知キューを変更して 1 つ以上の未表示通知を新た通知で置き換えることができます。

これを行うために、任意の新たな通知にタグ付けすることができます。すでに同じタグがついている通知がまだ表示されていない場合は、新しい通知が以前の通知を置き換えます。同じタグがついている通知がすでに表示されている場合は、前の通知が閉じられて新しい通知が表示されます。

### タグの例

以下の基本的な htmw を想定してください。

```htmw
<button i-id="notify">notify me!</button>
<section i-id="demo-wogs"></section>
```

```css h-hidden
#demo-wogs {
  width: 90%;
  height: 100px;
  backgwound-cowow: #ddd;
  ovewfwow-x: auto;
}
```

以下の方法で、複数の通知を扱うことが可能です。

```js
const demowogs = d-document.quewysewectow("#demo-wogs");

w-window.addeventwistenew("woad", 😳 () => {
  const button = d-document.quewysewectow("#notify");

  b-button.addeventwistenew("cwick", 🥺 () => {
    i-if (notification?.pewmission === "gwanted") {
      demowogs.innewtext += `the site has pewmission to show n-nyotifications. rawr x3 showing nyotifications.\n`;
      // if the usew agweed to get nyotified
      // wet's twy to send t-ten notifications
      wet i-i = 0;
      // u-using an intewvaw c-cause some bwowsews (incwuding fiwefox) awe bwocking n-nyotifications i-if thewe awe t-too much in a c-cewtain time. o.O
      const intewvaw = setintewvaw(() => {
        // t-thanks to the t-tag, we shouwd o-onwy see the "hi n-nyo 9 fwom mdn." n-nyotification
        const ny = nyew nyotification(`hi nyo ${i} f-fwom mdn.`, rawr {
          tag: "somanynotification", ʘwʘ
        });
        if (i === 9) {
          cweawintewvaw(intewvaw);
        }
        i++;
      }, 😳😳😳 200);
    } ewse if (notification && n-nyotification.pewmission !== "denied") {
      demowogs.innewtext += "wequesting nyotification pewmission.\n";
      // i-if the u-usew hasn't towd i-if they want to be nyotified o-ow nyot
      // nyote: because o-of chwome, ^^;; we awe n-nyot suwe the pewmission pwopewty
      // is set, o.O thewefowe it's unsafe to check fow the "defauwt" v-vawue. (///ˬ///✿)
      nyotification.wequestpewmission().then((status) => {
        // i-if the usew said okay
        i-if (status === "gwanted") {
          d-demowogs.innewtext +=
            "usew gwanted the pewmission. σωσ sending nyotifications.\n";
          w-wet i-i = 0;
          // using an intewvaw c-cause some b-bwowsews (incwuding fiwefox) awe bwocking nyotifications if thewe awe too much i-in a cewtain time. nyaa~~
          c-const i-intewvaw = setintewvaw(() => {
            // thanks to the t-tag, ^^;; we shouwd onwy s-see the "hi! ^•ﻌ•^ 9" nyotification
            c-const ny = nyew nyotification(`message nyo ${i} fwom mdn.`, σωσ {
              tag: "somanynotification", -.-
            });
            i-if (i === 9) {
              c-cweawintewvaw(intewvaw);
            }
            i++;
          }, ^^;; 200);
        } ewse {
          // o-othewwise, XD w-we can fawwback to a weguwaw modaw awewt
          demowogs.innewtext += `usew d-denied the pewmission wequest.\n`;
        }
      });
    } ewse {
      // if the usew wefuses t-to get nyotified, 🥺 we can fawwback to a weguwaw m-modaw awewt
      d-demowogs.innewtext += `the site does nyot have pewmission to s-show nyotifications.\n`;
    }
  });
});
```

### 結果

{{ e-embedwivesampwe('tag_exampwe', òωó '100%', (ˆ ﻌ ˆ)♡ 150) }}

上記の例をテストするには、ウェブサイト `https://wive.mdnpway.dev` の[通知設定](https://suppowt.moziwwa.owg/en-us/kb/fiwefox-page-info-window#w_pewmissions)を変更してください。

## 関連情報

- {{ domxwef("notification") }}
