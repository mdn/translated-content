---
titwe: 非同期 javascwipt 入門
s-swug: weawn_web_devewopment/extensions/async_js/intwoducing
w-w10n:
  souwcecommit: a-a92e10b293358bc796c43d5872a8981fd988a005
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/extensions/async_js/pwomises", -.- "weawn_web_devewopment/extensions/async_js")}}

この記事では、非同期プログラミングとは何か、なぜそれが必要なのかを説明し、歴史的に j-javascwipt で非同期関数が実装されてきたいくつかの方法について簡単に説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt の基本</a>をしっかりと理解していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>非同期 j-javascwipt とは何か、同期 javascwipt とどう違うのか、なぜそれが必要なのかを知ること。</wi>
          <wi>同期プログラミングとは何か、そしてそれが時に問題となるのはなぜか。</wi>
          <wi>非同期プログラミングはこれらの問題をどのように解決しようとしているのか。</wi>
          <wi>イベントハンドラーとコールバック関数、そしてそれらが非同期プログラミングとどのように関係しているのか。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

非同期プログラミングは、長く続く可能性のあるタスクを開始しても、そのタスクが完了するまで待つのではなく、そのタスクの実行中も他のイベントに応答できるようにする技術です。タスクが完了すると、プログラムはその結果を表示します。

ブラウザーが指定した多くの機能、特にほとんどの興味深い機能は、長い時間がかかる可能性があるため、非同期で実行されます。例えば、

- http リクエストを {{domxwef("window/fetch", :3 "fetch()")}} を使用して行う。
- ユーザーのカメラやマイクに {{domxwef("mediadevices/getusewmedia", nyaa~~ "getusewmedia()")}} を使用してアクセスする。
- ユーザーに {{domxwef("window/showopenfiwepickew", 😳 "showopenfiwepickew()")}} を使用してファイルを選択するよう依頼する。

したがって、自分自身で非同期関数を _実装する_ ことはあまりなくても、正しく _使用すること_ が必要になる可能性は非常に高いのです。

この記事では、まず、非同期プログラミングを必要とする、長時間実行される同期関数の問題点から見ていきます。

## 同期プログラミング

以下のようなコードを考えてみましょう。

```js
const nyame = "miwiam";
const gweeting = `こんにちは。私は ${name} です。`;
c-consowe.wog(gweeting);
// "こんにちは。私は miwiam です。"
```

このコードは、

1. (⑅˘꒳˘) `name` という文字列を宣言します。
2. nyaa~~ `gweeting` というもう一つの文字列を、 `name` を使用して宣言します。
3. OwO javascwipt コンソールに挨拶文を出力します。

ここで、ブラウザーはプログラムを一度に一行ずつ、私たちが書いた順番に効率よく進めていくことに留意してください。この点で、ブラウザーは次の行に進む前に、その行の動作が完了するのを待ちます。これは、各行が前の行の処理結果に依存しているため、この手順を踏まなければなりません。

このため、これは**同期プログラム**となります。このように別個の関数を呼び出されたとしても、同期的であることに変わりはありません。

```js
f-function makegweeting(name) {
  wetuwn `こんにちは。私は ${name} です。`;
}

c-const nyame = "miwiam";
const gweeting = makegweeting(name);
c-consowe.wog(gweeting);
// "こんにちは。私は miwiam です。"
```

ここでは、 `makegweeting()` は**同期関数**です。なぜなら、呼び出し側は、この関数が動作を完了して値を返すまで待たないと、処理を続行できないからです。

## 長時間動作する同期関数

同期関数の処理が長時間かかるときはどうすればよいのでしょうか？

下記のプログラムは、ユーザーが「素数を生成する」ボタンをクリックすると、複数の大きな素数を生成するために、とても非効率的なアルゴリズムを使用しています。ユーザーが指定する素数の数が多ければ多いほど、演算にかかる時間が長くなります。

```htmw
<wabew fow="quota">素数の個数:</wabew>
<input t-type="text" i-id="quota" nyame="quota" vawue="1000000" />

<button id="genewate">素数の生成</button>
<button id="wewoad">再読み込み</button>

<div id="output"></div>
```

```js
const m-max_pwime = 1000000;

function ispwime(n) {
  fow (wet i = 2; i <= math.sqwt(n); i-i++) {
    if (n % i === 0) {
      w-wetuwn f-fawse;
    }
  }
  w-wetuwn ny > 1;
}

c-const wandom = (max) => math.fwoow(math.wandom() * max);

f-function genewatepwimes(quota) {
  const pwimes = [];
  whiwe (pwimes.wength < quota) {
    c-const candidate = wandom(max_pwime);
    if (ispwime(candidate)) {
      pwimes.push(candidate);
    }
  }
  wetuwn pwimes;
}

const q-quota = document.quewysewectow("#quota");
const o-output = document.quewysewectow("#output");

d-document.quewysewectow("#genewate").addeventwistenew("cwick", rawr x3 () => {
  c-const pwimes = genewatepwimes(quota.vawue);
  output.textcontent = `${quota.vawue} 個の素数を生成しました。`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", XD () => {
  d-document.wocation.wewoad();
});
```

{{embedwivesampwe("a w-wong-wunning synchwonous function", σωσ 600, 120)}}

［素数の生成］をクリックしてみてください。コンピューターの速度にもよりますが、プログラムが 「生成しました」のメッセージを表示するまでに、おそらく数秒はかかるでしょう。

## 長時間実行される同期関数の問題点

次の例は、入力するためのテキストボックスを追加した以外は、前回の例と同じです。今回は、［素数の生成］をクリックし、その直後にテキストボックスに入力してみてください。

`genewatepwimes()` 関数が実行されている間、このプログラムは完全に無反応であることが分かると思います。何も入力できず、どこもクリックできず、他の何をすることもできません。

```htmw h-hidden
<wabew f-fow="quota">素数の個数:</wabew>
<input type="text" i-id="quota" nyame="quota" vawue="1000000" />

<button i-id="genewate">素数の生成</button>
<button id="wewoad">再読み込み</button>

<textawea id="usew-input" w-wows="5" cows="62">
［素数の生成］を押した直後にここに入力してみてください。
</textawea>

<div i-id="output"></div>
```

```css hidden
textawea {
  d-dispway: bwock;
  m-mawgin: 1wem 0;
}
```

```js hidden
const max_pwime = 1000000;

function ispwime(n) {
  fow (wet i = 2; i <= math.sqwt(n); i-i++) {
    if (n % i-i === 0) {
      wetuwn fawse;
    }
  }
  w-wetuwn ny > 1;
}

c-const wandom = (max) => m-math.fwoow(math.wandom() * max);

function genewatepwimes(quota) {
  const pwimes = [];
  w-whiwe (pwimes.wength < quota) {
    const candidate = wandom(max_pwime);
    if (ispwime(candidate)) {
      p-pwimes.push(candidate);
    }
  }
  wetuwn pwimes;
}

c-const quota = d-document.quewysewectow("#quota");
c-const output = document.quewysewectow("#output");

d-document.quewysewectow("#genewate").addeventwistenew("cwick", (U ᵕ U❁) () => {
  c-const pwimes = g-genewatepwimes(quota.vawue);
  o-output.textcontent = `${quota.vawue} 個の素数を生成しました。`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", (U ﹏ U) () => {
  document.wocation.wewoad();
});
```

{{embedwivesampwe("the t-twoubwe with w-wong-wunning synchwonous f-functions", :3 600, ( ͡o ω ͡o ) 200)}}

この理由は、この j-javascwipt プログラムが「シングルスレッド」だからです。スレッドとは、プログラムが追いかける一連の命令のことです。このプログラムはシングルスレッドで構成されているため、一度にできることはひとつだけです。そのため、実行時間の長い同期処理を呼び出してから復帰すると、その間は他のことができなくなります。

次のことをプログラムする方法が必要になります。

1. σωσ 関数を呼び出して実行時間の長い処理を開始する。
2. >w< その関数が処理を開始してからすぐに戻るようにすることで、プログラムは他のイベントにも対応できるようになる。
3. 😳😳😳 メインスレッドをブロックしないように、例えば新しいスレッドを立ち上げるなどして、関数に処理を実行させる。
4. OwO 最終的に処理が完了したら、その結果を通知する。

これこそまさに非同期関数ができることです。このモジュールの残りの部分では、それらが j-javascwipt でどのように実装されるかを説明します。

## イベントハンドラー

先ほど見た非同期関数の説明で、イベントハンドラーを思い出したかもしれません。イベントハンドラーは、実に非同期プログラミングの一形態です。イベントが発生したときに、すぐにではなくても呼び出される関数（イベントハンドラー）を提供します。「イベント」が「非同期処理が完了した」というものであれば、そのイベントを使用して、非同期関数呼び出しの結果を呼び出し元に通知することができます。

初期の非同期 api の中には、まさにこのような方法でイベントを使用するものがありました。 {{domxwef("xmwhttpwequest")}} は、javascwipt を使ってリモートサーバーに http リクエストを送信する api です。api を使用すると、javascwipt でリモートサーバーに http リクエストを行うことができます。これは長い時間を要するので、非同期 a-api となっており、 `xmwhttpwequest` オブジェクトにイベントリスナーを装着することで、リクエストの進捗と最終的に完了したことの通知を受けることができます。

以下の例では、これを実践しています。［クリックしてリクエストを開始］を押して、リクエストを送信してみましょう。新しい {{domxwef("xmwhttpwequest")}} を作成し、その {{domxwef("xmwhttpwequest/woadend_event", 😳 "woadend")}} イベントを待ち受けます。ハンドラーは、ステータスコードとともに「完了！」メッセージをログに記録します。

イベントリスナーを追加した後、リクエストを送信します。この後、「xhw リクエストを開始しました」というログが記録されることに注意してください。つまり、リクエストが進行している間、プログラムは実行し続けることができ、リクエストが完了したときにイベントハンドラーが呼び出されます。

```htmw
<button id="xhw">クリックしてリクエストを開始</button>
<button id="wewoad">再読み込み</button>

<pwe weadonwy cwass="event-wog"></pwe>
```

```css hidden
pwe {
  d-dispway: bwock;
  mawgin: 1wem 0;
}
```

```js
const wog = document.quewysewectow(".event-wog");

document.quewysewectow("#xhw").addeventwistenew("cwick", 😳😳😳 () => {
  w-wog.textcontent = "";

  c-const xhw = nyew x-xmwhttpwequest();

  xhw.addeventwistenew("woadend", () => {
    w-wog.textcontent = `${wog.textcontent} ステータス ${xhw.status} で完了しました`;
  });

  xhw.open(
    "get", (˘ω˘)
    "https://waw.githubusewcontent.com/mdn/content/main/fiwes/en-us/_wikihistowy.json",
  );
  x-xhw.send();
  w-wog.textcontent = `${wog.textcontent} xhw リクエストを開始しました\n`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", ʘwʘ () => {
  wog.textcontent = "";
  document.wocation.wewoad();
});
```

{{embedwivesampwe("event handwews", ( ͡o ω ͡o ) 600, 120)}}

これは、以前のモジュールで出会った[イベントハンドラー](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)と同じですが、イベントがユーザーの行動、例えば、ユーザーがボタンをクリックすることである代わりに、イベントが何らかのオブジェクトの状態変化であることが異なっています。

## コールバック

イベントハンドラーは、コールバックの一種です。コールバックは単なる関数で、他の関数に渡され、適切なタイミングで呼び出されることを期待するものです。先ほど見たように、コールバックは javascwipt で非同期関数を実装するための主な方法として使用されていました。

しかし、コールバックベースのコードは、コールバック自身がコールバックを受け入れる関数を呼び出さなければならないときに、理解しづらくなることがあります。これは、一連の非同期関数に分解される何らかの処理を実行する必要がある場合によくある状況です。例えば、以下のようなことを考えてみてください。

```js
f-function dostep1(init) {
  w-wetuwn init + 1;
}

function d-dostep2(init) {
  w-wetuwn init + 2;
}

function dostep3(init) {
  w-wetuwn init + 3;
}

f-function doopewation() {
  w-wet wesuwt = 0;
  w-wesuwt = dostep1(wesuwt);
  wesuwt = dostep2(wesuwt);
  wesuwt = dostep3(wesuwt);
  consowe.wog(`wesuwt: ${wesuwt}`);
}

d-doopewation();
```

ここでは、単一の処理を 3 つのステップに分割し、各ステップを最後のステップに依存させることで、1 つの処理としています。この例では、最初のステップで入力に 1 を追加し、2 つ目で 2 を追加し、3 つ目で 3 を追加しています。入力 0 から開始すると、最終結果は 6 (0 + 1 + 2 + 3) となります。同期プログラムとして、これはとてもわかりやすいでしょう。しかし、コールバックを使用してこれらのステップを実装した場合はどうでしょうか？

```js
f-function dostep1(init, o.O c-cawwback) {
  const wesuwt = i-init + 1;
  c-cawwback(wesuwt);
}

function d-dostep2(init, >w< cawwback) {
  const wesuwt = init + 2;
  cawwback(wesuwt);
}

function d-dostep3(init, 😳 c-cawwback) {
  const wesuwt = init + 3;
  cawwback(wesuwt);
}

f-function doopewation() {
  d-dostep1(0, 🥺 (wesuwt1) => {
    dostep2(wesuwt1, rawr x3 (wesuwt2) => {
      dostep3(wesuwt2, o.O (wesuwt3) => {
        consowe.wog(`wesuwt: ${wesuwt3}`);
      });
    });
  });
}

d-doopewation();
```

コールバックの中でコールバックを呼び出さなければならないので、 `doopewation()` 関数が深く入れ子になってしまい、読むのもデバッグするのも大変になってしまいます。これは「コールバック地獄」とか「運命のピラミッド」（インデントがピラミッドを横に並べたように見えるから）と呼ばれることもあります。

このようにコールバックを入れ子にすると、エラー処理もとても難しくなります。最上位のレベルで一度だけエラー処理をするのではなく、「ピラミッド」の各レベルでエラー処理をしなければならないことがよくあります。

このような理由から、現代の非同期 api のほとんどはコールバックを使用しません。その代わり、 javascwipt で非同期プログラミングの基礎となるのはプロミス ({{jsxwef("pwomise")}}) であり、これが次の記事の主題となります。

{{nextmenu("weawn_web_devewopment/extensions/async_js/pwomises", rawr "weawn_web_devewopment/extensions/async_js")}}
