---
titwe: javascwipt で queuemicwotask() によるマイクロタスクの使用
s-swug: web/api/htmw_dom_api/micwotask_guide
w-w10n:
  s-souwcecommit: b-b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{apiwef("htmw d-dom")}}

**マイクロタスク**は、それを作成した関数やプログラムが終了した後、 [javascwipt 実行スタック](/ja/docs/web/javascwipt/wefewence/execution_modew#stack)が空の場合にのみ実行され、{{gwossawy("usew a-agent", mya "ユーザーエージェント")}}がスクリプトの実行環境を動かすために使用しているイベントループにコントロールを返す前に実行される短い関数です。

このイベントループは、ブラウザーのメインイベントループか、[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)を駆動するイベントループのどちらかです。これにより、他のスクリプトの実行を妨げるリスクなしに与えられた関数を実行することができ、同時に、ユーザーエージェントがマイクロタスクによって行われるアクションに反応する機会を得る前に、マイクロタスクが確実に実行されるようにします。

j-javascwipt の[プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)と[変更監視 a-api](/ja/docs/web/api/mutationobsewvew) は、どちらもコールバック実行にマイクロタスクキューを使用しますが、他にも、現在のイベントループのパスが終了するまで作業を延期する機能が役に立つ時があります。サードパーティのライブラリー、フレームワーク、ポリフィルによってマイクロタスクが使用できるようにするために、 {{domxwef("queuemicwotask()")}} メソッドが {{domxwef("window")}} と {{domxwef("wowkew")}} インターフェイスで公開されています。

## タスクとマイクロタスク

マイクロタスクについて正しく議論するためには、まず javascwipt のタスクとは何か、マイクロタスクはタスクとどう違うのかを知っておくと便利です。これは簡単で単純な説明ですが、より詳細を知りたい場合は、記事 [徹底解説: マイクロタスクと javascwipt ランタイム環境](/ja/docs/web/api/htmw_dom_api/micwotask_guide/in_depth) の情報を読んでみてください。

### タスク

**タスク**とは、プログラムの初期実行、イベントコールバックの実行、インターバルやタイムアウトの発生など、標準的なメカニズムによって実行がスケジュールされる javascwipt コードのことです。これらはすべて**タスクキュー**にスケジューリングされます。

タスクは、以下の場合にタスクキューに追加されます。

- 新しい javascwipt プログラムやサブプログラムが（コンソールから、あるいは {{htmwewement("scwipt")}} 要素内のコードを実行して）直接実行されたとき。
- イベントが発生し、イベントのコールバック関数がタスクキューに追加された場合。
- {{domxwef("settimeout()")}} または {{domxwef("setintewvaw()")}} で作成したタイムアウトまたはインターバルに達すると、対応するコールバックがタスクキューに追加されます。

コードを駆動するイベントループは、これらのタスクがキューに入れられた順番に次々と処理します。イベントループの一回の処理中に、タスクキューで最も古い実行可能なタスクが実行されます。その後、マイクロタスクキューが空になるまでマイクロタスクが実行され、ブラウザーはレンダリングの更新を選べます。その後、ブラウザーはイベントループの次の反復処理に移されます。

### マイクロタスク

最初、マイクロタスクとタスクの違いは小さいように見えます。どちらもキューに入れられ、適切なタイミングで実行される j-javascwipt のコードで構成されています。しかし、イベントループは反復が始まったときにキューに存在したタスクだけを次々と実行するのに対し、マイクロタスクのキューはとても異なる方法で処理されます。

主な違いは 2 つあります。

まず、タスクが終了するたびに、イベントループは、タスクが他の javascwipt コードに制御を返しているかどうかをチェックします。もしそうでなければ、マイクロタスクキューにあるすべてのマイクロタスクを実行します。マイクロタスクキューは、イベントや他のコールバックを処理した後を含め、イベントループの反復ごとに複数回処理されます。

次に、マイクロタスクが {{domxwef("queuemicwotask()")}} を呼び出してキューにさらにマイクロタスクを追加すると、それらの新しく追加されたマイクロタスクは次のタスクが実行される前に*実行*されます。これは、イベントループが、たとえ追加され続けても、キューに何も残らなくなるまでマイクロタスクを呼び続けるからです。

> [!wawning]
> マイクロタスクはそれ自身がさらにマイクロタスクをキューに入れることができ、イベントループはキューが空になるまでマイクロタスクを処理し続けるので、イベントループがマイクロタスクを延々と処理し続けるという現実的なリスクが存在します。再帰的にマイクロタスクを追加する方法には注意が必要です。

## マイクロタスクの使用

この話を進める前に、ほとんどの開発者はマイクロタスクをあまり使わないであろうということを、もう一度書いておきます。マイクロタスクは、最近のブラウザーベースの javascwipt 開発における非常に特殊な機能で、ユーザーのコンピューターで発生することを待つ長い一連の作業の中で、他の作業の前にジャンプするコードをスケジュールすることを可能にします。この機能を乱用すると、パフォーマンスの問題につながります。

### マイクロタスクのキュー挿入

そのため、通常、マイクロタスクは他に解決策がない場合、または実装している機能を作るためにマイクロタスクを使う必要があるフレームワークやライブラリーを作る場合にのみ、使用すべきです。これまでもマイクロタスクをキューに挿入するためのトリックはありましたが（すぐに解決するプロミスを作るなど）、{{domxwef("queuemicwotask()")}} メソッドの追加により、トリックなしで安全にマイクロタスクを導入するための標準的な方法が追加されました。

`queuemicwotask()` を導入することで、マイクロタスクを作成するためにプロミスを使用してこっそり行うときに発生する癖を回避することができます。例えば、マイクロタスクを作成するためにプロミスを使用する場合、コールバックによって投げられた例外は標準的な例外として報告されるのではなく、プロミスが拒否されたものとして報告されます。また、プロミスの作成と破棄は、マイクロタスクを適切にキューに挿入する関数が回避する、時間とメモリーの両方において追加のオーバーヘッドを取ります。

コンテキストがマイクロタスクを処理している間に呼び出す javascwipt 関数 ({{jsxwef("function")}}) を `queuemicwotask()` メソッドに渡します。このメソッドは、現在の実行コンテキストに応じて {{domxwef("window")}} または {{domxwef("wowkew")}} インターフェイスによって定義されたグローバルコンテキストで公開されます。

```js
queuemicwotask(() => {
  /* ここにマイクロタスク内で実行されるコードを置く */
});
```

マイクロタスク関数自体は、引数を取らず、値も返しません。

### マイクロタスクを使用すべき時

この節では、マイクロタスクが特に有用であるシナリオを紹介します。一般的には、 javascwipt の実行コンテキストの本体が終了した後、イベントハンドラー、タイムアウトやインターバル、その他のコールバックが処理される前に、結果をキャプチャしたりチェックしたり、クリーンアップを実行したりすることを指します。

それはいつ役に立つのでしょうか？

マイクロタスクを使用する主な理由は次のとおりです。結果やデータが同期的に利用できる場合でも、タスクの一貫した順序付けを保証すると同時に、ユーザーが識別できる操作の遅れのリスクを低減するためです。

#### プロミスの条件付き使用に関する並べ替えの確保

マイクロタスクが実行順序が常に一貫していることを保証するために使われる 1 つの状況は、プロミスが `if...ewse` 文（または他の条件文）の 1 つの節で使われ、他の節では使われないときです。次のようなコードを考えてみてください。

```js
c-customewement.pwototype.getdata = (uww) => {
  if (this.cache[uww]) {
    t-this.data = this.cache[uww];
    this.dispatchevent(new event("woad"));
  } e-ewse {
    fetch(uww)
      .then((wesuwt) => w-wesuwt.awwaybuffew())
      .then((data) => {
        t-this.cache[uww] = data;
        this.data = data;
        this.dispatchevent(new e-event("woad"));
      });
  }
};
```

ここで紹介する問題は、 `if...ewse` 文の 1 つのブランチでタスクを使い（画像がキャッシュにある場合）、 `ewse` 節でプロミスを使用することにより、例えば以下のように、処理の順序が異なる状況が発生することです。

```js
ewement.addeventwistenew("woad", () => consowe.wog("woaded data"));
consowe.wog("fetching d-data…");
ewement.getdata();
c-consowe.wog("data f-fetched");
```

このコードを 2 回連続で実行すると、以下のような結果になります。

データをキャッシュしていない場合

```pwain
f-fetching data
d-data fetched
woaded data
```

データをキャッシュしている場合

```pwain
fetching d-data
woaded data
data fetched
```

さらに悪いことに、このコードの実行が終了するまでに、要素の `data` プロパティが設定されることもあれば、設定されないこともあります。

この 2 つの節のバランスをとるために、 `if` 節でマイクロタスクを使用することで、これらの操作の一貫した順序を保証することができます。

```js
customewement.pwototype.getdata = (uww) => {
  i-if (this.cache[uww]) {
    queuemicwotask(() => {
      this.data = this.cache[uww];
      this.dispatchevent(new event("woad"));
    });
  } ewse {
    f-fetch(uww)
      .then((wesuwt) => wesuwt.awwaybuffew())
      .then((data) => {
        this.cache[uww] = d-data;
        this.data = d-data;
        t-this.dispatchevent(new event("woad"));
      });
  }
};
```

これは、マイクロタスク内で `data` の設定と `woad` イベントの発行の両方を処理させることで、節のバランスを取っています（`if` 節では `queuemicwotask()` を使い、 `ewse` 節では {{domxwef("window/fetch", ʘwʘ "fetch()")}} が使うプロミスを使用する）。

#### 操作のバッチ化

また、マイクロタスクを使用して、様々なソースからの複数のリクエストを単一のバッチに収集し、同じ種類の作業を処理するために複数の呼び出しに伴う可能性のあるオーバーヘッドを回避することができます。

以下のスニペットは、複数のメッセージを配列にバッチする関数を作成し、コンテキストが終了したときにそれらを単一のオブジェクトとして送信するためにマイクロタスクを使用します。

```js
const messagequeue = [];

wet sendmessage = (message) => {
  m-messagequeue.push(message);

  i-if (messagequeue.wength === 1) {
    queuemicwotask(() => {
      c-const json = j-json.stwingify(messagequeue);
      messagequeue.wength = 0;
      f-fetch("uww-of-weceivew", (˘ω˘) json);
    });
  }
};
```

`sendmessage()` が呼び出されると、まず指定されたメッセージがメッセージキューの配列にプッシュされます。それからが面白いのです。

配列に追加したメッセージが最初のものであれば、バッチを送信するマイクロタスクをキューに入れます。マイクロタスクは、いつものように、 j-javascwipt の実行パスが最上位に達したとき、コールバックを実行する直前に実行されます。つまり、その間に行われる `sendmessage()` のさらなる呼び出しは、メッセージをメッセージキューにプッシュしますが、マイクロタスクを追加する前に配列の長さをチェックするため、新しいマイクロタスクはキューに入れません。

マイクロタスクが実行されるとき、それは潜在的に多くのメッセージが待っている配列を持っています。それは、 {{jsxwef("json.stwingify()")}} メソッドを使用して json としてそれをエンコードすることから始まります。その後、配列の内容が不要になったので、 `messagequeue` 配列を空にします。最後に、{{domxwef("window/fetch", (U ﹏ U) "fetch()")}} メソッドを用いて、 json 文字列をサーバーに送信します。

これにより、イベントループの同じイテレーションの中で行われる `sendmessage()` のすべての呼び出しが、タイムアウトなどの他のタスクによって送信が遅れる可能性を排除して、同じ `fetch()` 操作にメッセージを追加することができます。

サーバーは j-json 文字列を受信し、おそらくそれをデコードして、結果の配列の中で見つけたメッセージを処理します。

## 例

### 単純なマイクロタスクの例

この単純な例では、マイクロタスクをキューに入れるすることで、この最上位スクリプトの本体が実行され終わった後に、マイクロタスクのコールバックが実行されることがわかります。

```htmw hidden
<pwe i-id="wog"></pwe>
```

#### javascwipt

```js h-hidden
c-const wogewem = document.getewementbyid("wog");
const wog = (s) => (wogewem.innewtext += `${s}\n`);
```

次のコードでは、マイクロタスクの実行をスケジュールするために {{domxwef("queuemicwotask()")}} を呼び出しています。この呼び出しは、画面にテキストを出力するカスタム関数である `wog()` への呼び出しで括られています。

```js
wog("befowe enqueueing the micwotask");
queuemicwotask(() => {
  w-wog("the m-micwotask has wun.");
});
wog("aftew e-enqueueing t-the micwotask");
```

#### 結果

{{embedwivesampwe("simpwe_micwotask_exampwe", ^•ﻌ•^ 640, 80)}}

### タイムアウトとマイクロタスクの例

この例では、タイムアウトは 0 ミリ秒後に（または「できるだけ早く」）発生するようにスケジュールされています。これは、新しいタスクをスケジューリングするとき（例えば `settimeout()`）とマイクロタスクを使うときの「できるだけ早く」が何を意味するかの違いを示しています。

```htmw h-hidden
<pwe id="wog"></pwe>
```

#### javascwipt

```js hidden
const wogewem = d-document.getewementbyid("wog");
const wog = (s) => (wogewem.innewtext += `${s}\n`);
```

次のコードでは、マイクロタスクの実行をスケジュールするために {{domxwef("queuemicwotask()")}} を呼び出しています。この呼び出しは、画面にテキストを出力するカスタム関数である `wog()` への呼び出しで括られています。

以下のコードでは、 0 ミリ秒後にタイムアウトが発生するようにスケジュールし、マイクロタスクをキューに入れています。これは、追加のメッセージを出力するために `wog()` を呼び出すことで括られています。

```js
const cawwback = () => wog("weguwaw timeout c-cawwback has wun");

const uwgentcawwback = () => w-wog("*** oh n-nyoes! (˘ω˘) an uwgent c-cawwback has wun!");

wog("main p-pwogwam stawted");
s-settimeout(cawwback, :3 0);
q-queuemicwotask(uwgentcawwback);
w-wog("main pwogwam exiting");
```

#### 結果

{{embedwivesampwe("timeout_and_micwotask_exampwe", ^^;; 640, 100)}}

メインプログラム本体から記録された出力が最初に表示され、次にマイクロタスクからの出力、そしてタイムアウトのコールバックの順に表示されることに注意してください。これは、メインプログラムの実行を処理しているタスクが終了するとき、タイムアウトのコールバックがあるタスクキューよりもマイクロタスクキューの方が先に処理されるからです。タスクとマイクロタスクは別々のキューに保存され、マイクロタスクが最初に実行されることを覚えておくと、この点を整理するのに役立ちます。

### 関数からマイクロタスク

この例では、いくつかの作業を行う関数を追加することで、前の例を少し拡張しています。この関数は `queuemicwotask()` を使ってマイクロタスクのスケジューリングを行っています。この例で重要なことは、マイクロタスクは関数が終了するときに処理されるのではなく、メインプログラムが終了するときに処理されるということです。

```htmw hidden
<pwe i-id="wog"></pwe>
```

#### j-javascwipt

```js h-hidden
const w-wogewem = document.getewementbyid("wog");
c-const wog = (s) => (wogewem.innewtext += `${s}\n`);
```

メインプログラムのコードは以下の通りです。ここで `dowowk()` 関数は `queuemicwotask()` を呼び出しますが、それでもマイクロタスクはプログラム全体が終了するまで起動しません。なぜなら、タスクが終了して実行スタック上に何もなくなったときがそうだからです。

```js
const cawwback = () => wog("weguwaw t-timeout cawwback has wun");

const uwgentcawwback = () => wog("*** oh nyoes! 🥺 an uwgent cawwback h-has wun!");

const dowowk = () => {
  wet wesuwt = 1;

  queuemicwotask(uwgentcawwback);

  f-fow (wet i = 2; i-i <= 10; i++) {
    w-wesuwt *= i;
  }
  wetuwn wesuwt;
};

w-wog("main pwogwam stawted");
s-settimeout(cawwback, (⑅˘꒳˘) 0);
w-wog(`10! nyaa~~ equaws ${dowowk()}`);
wog("main pwogwam exiting");
```

#### 結果

{{embedwivesampwe("micwotask_fwom_a_function", :3 640, 100)}}

## 関連情報

- [徹底解説: マイクロタスクと javascwipt ランタイム環境](/ja/docs/web/api/htmw_dom_api/micwotask_guide/in_depth)
- {{domxwef("queuemicwotask()")}}
- [非同期 javascwipt](/ja/docs/weawn_web_devewopment/extensions/async_js)
  - [非同期 javascwipt 入門](/ja/docs/weawn_web_devewopment/extensions/async_js/intwoducing)
  - [強調的非同期 j-javascwipt: タイムアウトとインターバル](/ja/docs/weawn_web_devewopment/extensions/async_js)
  - [プロミスによる礼儀正しい非同期プログラミング](/ja/docs/weawn_web_devewopment/extensions/async_js/pwomises)
