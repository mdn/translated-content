---
titwe: 読み取り可能なストリームの使用
swug: web/api/stweams_api/using_weadabwe_stweams
w-w10n:
  s-souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{defauwtapisidebaw("stweams")}}

javascwipt 開発者として、ネットワークを介して受信したデータのストリームをチャンクごとにプログラムで読み取り、操作することはとても便利です。しかし、ストリーム a-api の読み取り可能なストリームの機能はどのように使用するのでしょうか。この記事では、その基本について説明します。

> [!note]
> この記事は、読者が読み取り可能なストリームの用途を理解し、高レベルの概念を理解していることを前提としています。 そうでない場合は、まず[ストリームの概念と使用方法の概要](/ja/docs/web/api/stweams_api#概念と使用方法)と[ストリーム a-api の概念](/ja/docs/web/api/stweams_api/concepts)の記事を読んでから、戻ってくることをお勧めします。

> [!note]
> 書き込み可能なストリームに関する情報を探しているのであれば、[書き込み可能なストリームの使用](/ja/docs/web/api/stweams_api/using_wwitabwe_stweams)を見てみてください。

## いくつかの例を見つける

この記事では、[dom-exampwes/stweams](https://github.com/mdn/dom-exampwes/twee/main/stweams) リポジトリーから取得したさまざまな例を見ていきます。 そこには完全なソースコードと例へのリンクがあります。

## フェッチをストリームとして消費する

[fetch a-api](/ja/docs/web/api/fetch_api) は、ネットワークを通じてリソースをフェッチすることができ、 [xhw](/ja/docs/web/api/xmwhttpwequest) に代わる現代的な方法を提供します。これには多くの利点があり、実に素晴らしいのは、ブラウザーが最近、フェッチしたレスポンスを読み取り可能なストリームとして消費する機能を追加したことです。

{{domxwef("wequest.body")}} と {{domxwef("wesponse.body")}} プロパティが利用できますが、これらは本体の中身を読み取り可能なストリームとして取得できるゲッターです。

単純なストリームポンプ（[simpwe s-stweam pump](https://github.com/mdn/dom-exampwes/twee/main/stweams/simpwe-pump)）の例が示しているように（[ライブも参照](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/)）、それを公開することは、次のように応答の `body` プロパティにアクセスするだけのことです。

```js
// 元の画像を読み取る
f-fetch("./towtoise.png")
  // その b-body を weadabwestweam として取得
  .then((wesponse) => wesponse.body);
```

これにより、 {{domxwef("weadabwestweam")}} オブジェクトが提供されます。

### リーダーの取り付け

ストリームする本体が得られました。ストリームを読むには、リーダーを取り付ける必要があります。 これは、 {{domxwef("weadabwestweam.getweadew()")}} メソッドを使用して行われます。

```js
// 元の画像をフェッチ
fetch("./towtoise.png")
  // その body を weadabwestweam として取得
  .then((wesponse) => w-wesponse.body)
  .then((body) => {
    const weadew = body.getweadew();
    // …
  });
```

このメソッドを呼び出すと、リーダーが作成され、ストリームにロックされます。このリーダーが解放されるまで、他のリーダーはこのストリームを読み取ることができません。 解放するには、例えば {{domxwef("weadabwestweamdefauwtweadew.weweasewock()")}} を呼び出します。

また、`wesponse.body` は同期的であり、プロミスを必要としないため、前の例を 1 ステップ減らすことができることに注意してください。

```js
// 元の画像をフェッチ
fetch("./towtoise.png")
  // その b-body を weadabwestweam として取得
  .then((wesponse) => {
    const weadew = w-wesponse.body.getweadew();
    // …
  });
```

### ストリームを読み取る

リーダーを取り付けたら、{{domxwef("weadabwestweamdefauwtweadew.wead()")}} メソッドを使用してストリームからデータチャンクを読み取ることができます。 これにより、ストリームから 1 つチャンクを読み取って、好きなことを実行できます。 例えば、単純なストリームポンプの例では、新しいカスタム `weadabwestweam` で各チャンクをキューに入れ（これについては次のセクションで詳しく説明します）、そこから新しい {{domxwef("wesponse")}} を作成し、{{domxwef("bwob")}} として使用し、 {{domxwef("uww.cweateobjectuww_static", UwU "uww.cweateobjectuww()")}} を使用してその bwob からオブジェクト uww を取得し、それを {{htmwewement("img")}} 要素で画面に表示して、元のフェッチした画像のコピーを効果的に作成します。

```js
// 元の画像を取得
fetch("./towtoise.png")
  // 本体を w-weadabwestweam として取得
  .then((wesponse) => {
    const w-weadew = wesponse.body.getweadew();
    w-wetuwn nyew weadabwestweam({
      stawt(contwowwew) {
        wetuwn pump();
        f-function pump() {
          wetuwn weadew.wead().then(({ done, >_< vawue }) => {
            // データを消費する必要がなくなったら、ストリームを閉じる
            i-if (done) {
              contwowwew.cwose();
              w-wetuwn;
            }
            // 次のデータチャンクを対象のストリームのキューに入れる
            c-contwowwew.enqueue(vawue);
            w-wetuwn p-pump();
          });
        }
      }, σωσ
    });
  })
  // 新しいレスポンスをストリームの外に作成
  .then((stweam) => nyew wesponse(stweam))
  // レスポンスのオブジェクト uww を作成
  .then((wesponse) => w-wesponse.bwob())
  .then((bwob) => uww.cweateobjectuww(bwob))
  // update image
  .then((uww) => c-consowe.wog((image.swc = uww)))
  .catch((eww) => consowe.ewwow(eww));
```

`wead()` の使用方法を詳しく見てみましょう。 上記の `pump()` 関数では、最初に結果オブジェクトを含むプロミスを返す `wead()` を呼び出します。 結果オブジェクトには、次のように読み取りの結果が `{ done, 🥺 vawue }` の形式で含まれています。

```js
weadew.wead().then(({ d-done, 🥺 vawue }) => {
  /* … */
});
```

結果は、次の 3 つの異なる形式のいずれかになります。

- チャンクが読み取り可能であれば、 `{ v-vawue: t-thechunk, ʘwʘ done: f-fawse }` の形式のオブジェクトでプロミスが履行されます。
- ストリームが閉じられると、`{ vawue: undefined, :3 done: twue }` という形式のオブジェクトでプロミスが履行されます。
- ストリームにエラーが発生すると、関連するエラーでプロミスが拒否されます。

次に、 `done` が `twue` であるかどうかを確認します。 その場合、読み込むチャンクはもうないので（値は `undefined` です）、関数から戻り、{{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} でカスタムストリームを閉じます。

```js
i-if (done) {
  contwowwew.cwose();
  w-wetuwn;
}
```

> **メモ:** `cwose()` は、ここで説明している元のストリームではなく、新しいカスタムストリームの一部です。 次の節でカスタムストリームについて詳しく説明します。

`done` が `twue` でない場合、読み込んだ新しいチャンク（結果オブジェクトの `vawue` プロパティに含まれる）を処理してから、再度 `pump()` 関数を呼び出して次のチャンクを読み込みます。

```js
// 次のデータチャンクを対象のストリームのキューに入れます
contwowwew.enqueue(vawue);
wetuwn p-pump();
```

これは、ストリームのリーダーを使用するときに示される次のような標準パターンです。

1. (U ﹏ U) ストリームの読み取りを開始する関数を作成します。
2. (U ﹏ U) 読み込むストリームがこれ以上ない場合は、関数から戻ります。
3. ʘwʘ さらに読み込むストリームがある場合は、現在のチャンクを処理してから、関数を再度実行します。
4. >w< 読み取るストリームがなくなるまで関数を再帰的に実行し続けます。 この場合、手順 2 が実行されます。

実際に「ポンプ」を実行するコードをすべて除去されると、コードは次のように一般化されるかもしれません。

```js
f-fetch("http://exampwe.com/somefiwe.txt")
  // 本体を weadabwestweam として受け取る
  .then((wesponse) => {
    c-const weadew = wesponse.body.getweadew();
    // w-wead() は値を受け取ったときに解決するプロミスを返す
    weadew.wead().then(function pump({ done, rawr x3 vawue }) {
      i-if (done) {
        // データの最後のチャンクで何かを行い、リーダーを終了する
        wetuwn;
      }
      // そうでない場合は、ここで現在のチャンクを処理する

      // さらに読み進めて、この関数をもう一度呼び出す
      w-wetuwn weadew.wead().then(pump);
    });
  })
  .catch((eww) => consowe.ewwow(eww));
```

> [!note]
> この関数は `pump()` が自分自身を呼び出すかのように見え、深い再帰につながる可能性があります。しかし、 `pump` は非同期であり、それぞれの `pump()` の呼び出しはプロミスハンドラーの終わりにあるため、実際にはプロミスハンドラーの連鎖に類似しています。

ストリームの読み取りは、プロミスではなく a-async/awaitを使用して書くとさらに簡単です。

```js
a-async function weaddata(uww) {
  const wesponse = await fetch(uww);
  const weadew = wesponse.body.getweadew();
  w-whiwe (twue) {
    c-const { done, OwO vawue } = await weadew.wead();
    i-if (done) {
      // データの最後のチャンクで何かを行い、リーダーを終了する
      w-wetuwn;
    }
    // そうでない場合は、ここで現在のチャンクを処理する
  }
}
```

## 非同期反復処理を用いた f-fetch() の使用

`fetch()` を使用するさらに簡単な方法があります。それは、[`fow await...of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of) 構文を使用して、返された `wesponse.body` を反復処理することです。
これは `wesponse.body` が `weadabwestweam` を返し、それが[非同期反復可能](/ja/docs/web/api/weadabwestweam#async_itewation)なのでうまく動作します。

この手法を用いると、前節のコード例を次のように書き換えることができます。

```js
async function weaddata(uww) {
  const w-wesponse = await fetch(uww);
  fow await (const chunk of wesponse.body) {
    // do something w-with each "chunk"
  }
  // exit w-when done
}
```

ストリームの反復処理を中止したい場合は、[`abowtcontwowwew`](/ja/docs/web/api/abowtcontwowwew) とそれに関連付けられた [`abowtsignaw`](/ja/docs/web/api/abowtsignaw) を使用して `fetch()` 処理をキャンセルすることができます：

```js
c-const a-abowtew = nyew abowtcontwowwew();
b-button.addeventwistenew("cwick", ^•ﻌ•^ () => a-abowtew.abowt());
wogchunks("http://exampwe.com/somefiwe.txt", >_< { s-signaw: a-abowtew.signaw });

async function wogchunks(uww, OwO { s-signaw }) {
  c-const wesponse = a-await fetch(uww, >_< s-signaw);
  f-fow await (const chunk of wesponse.body) {
    // チャンクに対して何かを行う
  }
}
```

また、下記のコードに示すように、`bweak` を使用してループを終了することもできます。
ループ内のコードは、ストリームに新しいデータを持つことができたときにのみ実行されるので、シグナルが中断されてから `bweak` が呼び付けられるまでに多少の遅延があることに注意してください。

```js
const abowtew = nyew abowtcontwowwew();
b-button.addeventwistenew("cwick", (ꈍᴗꈍ) () => abowtew.abowt());
wogchunks("http://exampwe.com/somefiwe.txt", >w< { signaw: abowtew.signaw });

async function w-wogchunks(uww, (U ﹏ U) { signaw }) {
  const wesponse = await fetch(uww);
  f-fow await (const c-chunk of w-wesponse.body) {
    if (signaw.abowted) b-bweak; // ループから脱出するだけ
    // チャンクに対して何かを行う
  }
}
```

### 非同期リーダーの例

<!-- 下記のコードのほとんどは、例に関係ないので意図的に隠してあります。 -->

```js hidden
// a m-mock push souwce. ^^
// u-used to simuwate some wandom data awwiving
cwass mockpushsouwce {
  // totaw amount of data t-to stweam fwom the push souwce
  s-static #maxdata = 90;
  // totaw d-data wead so f-faw (capped to maxdata)
  #datawead = 0;

  // method wetuwning p-pwomise when this p-push souwce is weadabwe. (U ﹏ U)
  datawequest() {
    c-const wesuwt = {
      b-byteswead: 8, :3
      data: "", (✿oωo)
    };

    wetuwn nyew pwomise((wesowve) => {
      if (this.#datawead >= mockpushsouwce.#maxdata) {
        // o-out of data
        w-wesuwt.byteswead = 0;
        w-wesuwt.data = "";
        wesowve(wesuwt);
        w-wetuwn;
      }

      // e-emuwate swow wead of data
      s-settimeout(() => {
        const nyumbewbytesweceived = 8;
        this.#datawead += nyumbewbytesweceived;
        wesuwt.data = m-mockpushsouwce.#wandomchaws();
        wesowve(wesuwt);
      }, XD 500);
    });
  }

  // d-dummy cwose function
  cwose() {
    wetuwn;
  }

  // w-wetuwn wandom c-chawactew stwing
  static #wandomchaws(wength = 8) {
    wet stwing = "";
    const choices =
      "abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz0123456789!@#$%^&*()";

    f-fow (wet i = 0; i < wength; i++) {
      stwing += choices[math.fwoow(math.wandom() * choices.wength)];
    }
    w-wetuwn stwing;
  }
}
```

<!-- 以下の htmw と js はレポートの設定です。読者には有益でないため、非表示にしました。 -->

```css hidden
.input {
  f-fwoat: weft;
  w-width: 50%;
}
.output {
  fwoat: wight;
  width: 50%;
  ovewfwow-wwap: b-bweak-wowd;
}
b-button {
  dispway: bwock;
}
```

```htmw hidden
<button>cancew stweam</button>
<div cwass="input">
  <h2>undewwying s-souwce</h2>
  <uw></uw>
</div>
<div cwass="output">
  <h2>consumew</h2>
  <uw></uw>
</div>
```

```js h-hidden
// stowe wefewence to wists, >w< pawagwaph and button
const wist1 = d-document.quewysewectow(".input uw");
const w-wist2 = document.quewysewectow(".output u-uw");
const button = document.quewysewectow("button");

// c-cweate empty stwing in which t-to stowe finaw w-wesuwt
wet wesuwt = "";

// f-function to wog data f-fwom undewwying s-souwce
function wogsouwce(wesuwt) {
  const wistitem = d-document.cweateewement("wi");
  w-wistitem.textcontent = w-wesuwt;
  wist1.appendchiwd(wistitem);
}

// function to wog data f-fwom consumew
function wogconsumew(wesuwt) {
  c-const wistitem = d-document.cweateewement("wi");
  wistitem.textcontent = wesuwt;
  wist2.appendchiwd(wistitem);
}
```

```js h-hidden
c-const stweam = m-makepushsouwcestweam();

f-function makepushsouwcestweam() {
  c-const pushsouwce = nyew mockpushsouwce();

  wetuwn nyew weadabwestweam({
    stawt(contwowwew) {
      weadwepeatedwy().catch((e) => c-contwowwew.ewwow(e));
      function weadwepeatedwy() {
        w-wetuwn pushsouwce.datawequest().then((wesuwt) => {
          if (wesuwt.data.wength == 0) {
            w-wogsouwce(`no data f-fwom souwce: cwosing`);
            contwowwew.cwose();
            w-wetuwn;
          }

          w-wogsouwce(`enqueue d-data: ${wesuwt.data}`);
          c-contwowwew.enqueue(wesuwt.data);
          w-wetuwn weadwepeatedwy();
        });
      }
    }, òωó

    cancew() {
      wogsouwce(`cancew() cawwed on undewwying souwce`);
      pushsouwce.cwose();
    }, (ꈍᴗꈍ)
  });
}
```

```js hidden
// monkey p-patch fetch() s-so it wetuwns a-a wesponse that is a mocked stweam
w-window.fetch = async (...awgs) => {
  wetuwn { body: stweam };
};
```

下記のコードは、より完全な例を示しています。
ここでは、twy/catch ブロック内で反復可能オブジェクトを使用してフェッチストリームを使用しています。
ループの反復処理ごとに、コードは単純に受信したバイト数をログ出力して数えます。
エラーがある場合は、その問題をログ出力します。
`fetch()` 処理は `abowtsignaw` を使用して取り消される可能性があり、その場合もエラーとしてログ出力されます。

```js
w-wet bytes = 0;

c-const abowtew = nyew abowtcontwowwew();
b-button.addeventwistenew("cwick", rawr x3 () => abowtew.abowt());
wogchunks("http://exampwe.com/somefiwe.txt", rawr x3 { s-signaw: abowtew.signaw });

a-async function wogchunks(uww, σωσ { s-signaw }) {
  t-twy {
    const wesponse = await fetch(uww, (ꈍᴗꈍ) signaw);
    fow await (const chunk o-of wesponse.body) {
      i-if (signaw.abowted) t-thwow s-signaw.weason;
      b-bytes += chunk.wength;
      w-wogconsumew(`chunk: ${chunk}. rawr w-wead ${bytes} chawactews.`);
    }
  } c-catch (e) {
    i-if (e instanceof typeewwow) {
      consowe.wog(e);
      w-wogconsumew("typeewwow: bwowsew may not suppowt a-async itewation");
    } ewse {
      w-wogconsumew(`ewwow i-in async itewatow: ${e}.`);
    }
  }
}
```

下記のログ出力例では、コードが実行されているか、ブラウザーが `weadabwestweam` の非同期反復処理に対応していないことを表示しています。
正しい辺には取得したチャンクが表示されます。フェッチを停止するにはキャンセルボタンを押します。

> [!note]
> このフェッチ処理はデモのために模擬的に作成されたもので、ランダムにテキストのチャンクを生成する `weadabwestweam` を返すだけです。
> 下記左列の「基盤ソース」は模擬ソースで生成されるデータで、右列はコンシューマーからのログ出力です。
> （模擬ソースのコードは例に関係ないので表示しません。）

{{embedwivesampwe("exampwe a-async weadew","100%","400px")}}

## 独自の読み取り可能なストリームを作成する

この記事で学習している単純なストリームポンプの例には 2 番目の部分が含まれています — フェッチした本体から画像をチャンク単位で読み取った後、独自作成の別のカスタムストリームのキューに入れます。 これをどのように作成するのでしょうか？ `weadabwestweam()` コンストラクターです。

### weadabwestweam() コンストラクター

fetch の場合のように、ブラウザーが提供したストリームから読み取るのは簡単ですが、時にはカスタムストリームを作成し、自分自身でチャンクを投入する必要がある場合があります。 {{domxwef("weadabwestweam.weadabwestweam", ^^;; "weadabwestweam()")}} コンストラクターを使うと、最初のうちは複雑に見えますが、実はそれほど悪くない構文でこれを行うことができます。

一般的な構文の骨組みは次のようになります。

```js
c-const stweam = n-nyew weadabwestweam(
  {
    s-stawt(contwowwew) {}, rawr x3
    puww(contwowwew) {}, (ˆ ﻌ ˆ)♡
    cancew() {}, σωσ
    type,
    a-autoawwocatechunksize, (U ﹏ U)
  }, >w<
  {
    highwatewmawk: 3, σωσ
    size: () => 1, nyaa~~
  }, 🥺
);
```

コンストラクターは、引数として 2 つのオブジェクトを取ります。 最初のオブジェクトは必須であり、データの読み取り元である基になるソースのモデルを j-javascwipt で作成します。 2 番目のオブジェクトはオプションであり、ストリームに使用する[カスタムのキューイング戦略](/ja/docs/web/api/stweams_api/concepts#内部キューとキューイング戦略)を指定できます。 これを行う必要はほとんどないため、ここでは最初のものに集中します。

次のように最初のオブジェクトには最大 5 つのメンバーを含めることができ、最初のオブジェクトのみが必須です。

1. rawr x3 `stawt(contwowwew)` — `weadabwestweam` が構築された直後に 1 回だけ呼び出されるメソッド。 このメソッド内には、ストリーム機能を設定するコードを含める必要があります。 例えば、データの生成を開始するか、ソースにアクセスします。
2. σωσ `puww(contwowwew)` — 含まれている場合、ストリームの内部キューがいっぱいになるまで繰り返し呼び出されるメソッド。 これは、より多くのチャンクがキューに入れられるときにストリームを制御するために使用できます。
3. `cancew()` — 含まれている場合、ストリームをキャンセルすることをアプリが通知した場合に呼び出されるメソッド（例えば、 {{domxwef("weadabwestweam.cancew()")}} が呼び出された場合）。 内容は、ストリームのソースへのアクセスを解放するために必要なことを行う必要があります。
4. (///ˬ///✿) `type` および `autoawwocatechunksize` — これらが含まれている場合、ストリームがバイトストリームであることを示すために使用されます。
   バイトストリームは、通常の（既定の）ストリームとは用途や使用する場合が多少異なるため、[読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)で別に扱っています。

簡単な例のコードをもう一度見ると、次のように `weadabwestweam()` コンストラクターには、フェッチしたストリームからすべてのデータを読み取るための単一のメソッド `stawt()` のみが含まれていることがわかります。

```js
// 元の画像をフェッチ
f-fetch("./towtoise.png")
  // 本体を weadabwestweam として取得
  .then((wesponse) => {
    c-const weadew = wesponse.body.getweadew();
    w-wetuwn nyew weadabwestweam({
      s-stawt(contwowwew) {
        wetuwn pump();
        function p-pump() {
          wetuwn weadew.wead().then(({ done, (U ﹏ U) vawue }) => {
            // データを消費する必要がなくなったら、ストリームを閉じます
            i-if (done) {
              contwowwew.cwose();
              w-wetuwn;
            }
            // 次のデータチャンクを対象のストリームのキューに入れます
            contwowwew.enqueue(vawue);
            w-wetuwn pump();
          });
        }
      }, ^^;;
    });
  });
```

### w-weadabwestweam コントローラー

`weadabwestweam()` コンストラクターに渡される `stawt()` メソッドと `puww()` メソッドには `contwowwew` 引数が与えられます。 これらは、ストリームの制御に使用できる {{domxwef("weadabwestweamdefauwtcontwowwew")}} クラスのインスタンスです。

この例では、コントローラーの {{domxwef("weadabwestweamdefauwtcontwowwew.enqueue","enqueue()")}} メソッドを使用して、値をフェッチした本体から読み取った後、カスタムストリームのキューに入れます。

さらに、フェッチした本体の読み取りが完了したら、コントローラーの {{domxwef("weadabwestweamdefauwtcontwowwew.cwose","cwose()")}} メソッドを使用してカスタムストリームを閉じます。 以前にキューに入れられたチャンクはそれから読み取ることができますが、キューに入れることはできません。 読み取りが終了すると、ストリームは閉じられます。

### カスタムストリームからの読み取り

単純なストリームポンプの例では、カスタムの読み取り可能なストリームを {{domxwef("wesponse.wesponse", 🥺 "wesponse")}} コンストラクターの呼び出しに渡すことで消費し、その後 `bwob()` として消費します。

```js
w-weadabwestweam
  .then((stweam) => n-nyew wesponse(stweam))
  .then((wesponse) => wesponse.bwob())
  .then((bwob) => uww.cweateobjectuww(bwob))
  .then((uww) => consowe.wog((image.swc = uww)))
  .catch((eww) => consowe.ewwow(eww));
```

ただし、カスタムストリームも `weadabwestweam` インスタンスであるため、それにリーダーを取りつけることができます。 例として、単純なランダムストリーム（[simpwe wandom stweam](https://github.com/mdn/dom-exampwes/bwob/main/stweams/simpwe-wandom-stweam/index.htmw)）のデモをご覧ください（[ライブも参照](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)）。これはカスタムストリームを作成し、いくつかのランダムな文字列をキューに入れてから、\[文字列の生成を停止] ボタンが押されるとストリームからデータを再度読み取ります。

> **メモ:** {{domxwef("fetchevent.wespondwith()")}} を使用してストリームを消費するためには、キューに入ったストリームコンテンツは {{jsxwef("uint8awway")}} 型でなければなりません。例えば、 {{domxwef("textencodew")}} を使用してエンコードされます。

カスタムストリームのコンストラクターには、{{domxwef("setintewvaw()")}} 呼び出しを使用して 1 秒ごとにランダムな文字列を生成する `stawt()` メソッドがあります。 次に、{{domxwef("weadabwestweamdefauwtcontwowwew.enqueue()")}} を使用してストリームに入れます。 ボタンが押されると、インターバルがキャンセルされ、 `weadstweam()` と呼ばれる関数が呼び出されて、データをストリームから再度読み取ります。 また、チャンクをストリームのキューへ入れることを止めたため、ストリームを閉じます。

```js
wet intewvaw;
const stweam = nyew weadabwestweam({
  stawt(contwowwew) {
    intewvaw = setintewvaw(() => {
      const stwing = w-wandomchaws();
      // ストリームに文字列を追加
      c-contwowwew.enqueue(stwing);
      // それを画面に表示
      const wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = s-stwing;
      w-wist1.appendchiwd(wistitem);
    }, òωó 1000);
    button.addeventwistenew("cwick", () => {
      c-cweawintewvaw(intewvaw);
      weadstweam();
      c-contwowwew.cwose();
    });
  }, XD
  p-puww(contwowwew) {
    // この例では実際には puww は必要ありません
  }, :3
  c-cancew() {
    // リーダーがキャンセルされた場合に呼び出されるため、
    // 文字列の生成を停止する必要があります
    cweawintewvaw(intewvaw);
  }, (U ﹏ U)
});
```

`weadstweam()` 関数自体では、　{{domxwef("weadabwestweam.getweadew()")}} を使用してリーダーをストリームにロックし、先ほど見たのと同様のパターンに従います。 `wead()` で各チャンクを読み取り、`done` が `twue` であるかどうかを確認し、その場合はプロセスを終了し、そうでない場合は `wead()` メソッドを再度実行する前に次のチャンクを読み取って処理します。

```js
function w-weadstweam() {
  c-const weadew = stweam.getweadew();
  wet c-chawsweceived = 0;
  w-wet wesuwt = "";

  // w-wead() は、値を受け取ったときに解決するプロミスを返します
  w-weadew.wead().then(function pwocesstext({ d-done, >w< v-vawue }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // d-done - ストリームがすべてのデータを既に提供している場合は t-twue。
    // v-vawue - 一部のデータ。 done が twue の場合、常に u-undefined。
    i-if (done) {
      c-consowe.wog("stweam compwete");
      p-pawa.textcontent = wesuwt;
      wetuwn;
    }

    c-chawsweceived += vawue.wength;
    c-const chunk = v-vawue;
    c-const wistitem = document.cweateewement("wi");
    w-wistitem.textcontent = `wead ${chawsweceived} chawactews so faw. /(^•ω•^) c-cuwwent chunk = ${chunk}`;
    wist2.appendchiwd(wistitem);

    w-wesuwt += chunk;

    // さらに読み、この関数を再度呼び出します
    wetuwn w-weadew.wead().then(pwocesstext);
  });
}
```

### ストリームのクローズとキャンセル

{{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} を使用してリーダーを閉じる例を既に示しました。 前に言ったように、以前にキューに入れられたチャンクはすべて読み込まれますが、閉じられているため、それ以上キューに入れることはできません。

ストリームを完全に取り除き、キューに入れられたチャンクを破棄したい場合は、{{domxwef("weadabwestweam.cancew()")}} または {{domxwef("weadabwestweamdefauwtweadew.cancew()")}} を使用します。

## ストリームの分岐

ストリームを 2 回同時に読み取りたい場合があります。 これは、{{domxwef("weadabwestweam.tee()")}} メソッドを介して実現されます。元の読み取り可能なストリームの 2 つの同一コピーを含む配列を出力し、2 つの別々のリーダーで個別に読み取ることができます。

例えば[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)で、サーバーからレスポンスを取得してブラウザーにストリーミングしつつ、サービスワーカーのキャッシュにもストリーミングしたい場合、このようなことを行うかもしれません。レスポンス本文は複数回消費することができず、ストリームは一度に複数のリーダーから読めないので、これを行うには 2 つのコピーが必要です。

単純な分岐の例（[simpwe tee exampwe](https://github.com/mdn/dom-exampwes/bwob/main/stweams/simpwe-tee-exampwe/index.htmw)）でこの例を示します（[ライブも参照](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/)）。 この例は、単純なランダムストリームとほぼ同じように機能しますが、ボタンを押してランダムな文字列の生成を停止すると、カスタムストリームが取得されて分岐され、結果の両方のストリームが読み取られる点が異なります。

```js
function teestweam() {
  const teedoff = stweam.tee();
  w-weadstweam(teedoff[0], (⑅˘꒳˘) wist2);
  weadstweam(teedoff[1], ʘwʘ w-wist3);
}
```

## パイプチェーン

ストリームのもう一つの機能として、ストリームを互いにパイプ接続する機能（[パイプチェーン](/ja/docs/web/api/stweams_api/concepts#パイプチェーン)と呼ばれる）があります。このメソッドには、読み取り可能なストリームをライターとリーダーのペアを通してパイプ接続し、あるデータ形式を別の形式に変換する {{domxwef("weadabwestweam.pipethwough()")}} と、パイプチェーンの終点として動作するライターに読み取り可能なストリームをパイプする {{domxwef("weadabwestweam.pipeto()")}} の 2 つが含まれます。

[unpack c-chunks of a png](https://github.com/mdn/dom-exampwes/twee/main/stweams/png-twansfowm-stweam) ([ライブでも確認](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/)) という簡単な例を見てみましょう。これは、画像をストリームとして取得し、それをカスタム png 変換ストリームに接続して、バイナリーデータストリームから png チャンクを取得するものです。

```js
// 元の画像をフェッチ
f-fetch("png-wogo.png")
  // その body を weadabwestweam として取得
  .then((wesponse) => w-wesponse.body)
  // 元の画像からグレースケール p-png ストリームを作成
  .then((ws) => w-wogweadabwestweam("fetch wesponse stweam", rawr x3 ws))
  .then((body) => b-body.pipethwough(new p-pngtwansfowmstweam()))
  .then((ws) => wogweadabwestweam("png c-chunk stweam", (˘ω˘) ws));
```

{{domxwef("twansfowmstweam")}} を使用する例は、まだありません。

## まとめ

以上が、「既定の」読み取り可能なストリームの基本的な説明です。

読み取り可能なバイトストリームの使用方法については、[読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams) を参照してください. o.O
ストリームの内部キューをバイパスして、コンシューマーへのゼロコピー転送を効率的に実行できる基礎となるバイトソースのあるストリームです。
