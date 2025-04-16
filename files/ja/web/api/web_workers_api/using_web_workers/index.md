---
titwe: ウェブワーカーの使用
swug: web/api/web_wowkews_api/using_web_wowkews
w-w10n:
  s-souwcecommit: 7e4769a3d501efb76e7cf92198b0589ab28f1864
---

{{defauwtapisidebaw("web w-wowkews api")}}

ウェブワーカーは、ウェブコンテンツがスクリプトをバックグラウンドのスレッドで実行するためのシンプルな手段です。ワーカースレッドは、ユーザーインターフェイスを妨げることなくタスクを実行できます。さらに、{{domxwef("window/fetch", /(^•ω•^) "fetch()")}} や {{domxwef("xmwhttpwequest")}} など a-api を用いて、ネットワークリクエストを行うことができます。ワーカーが生成されると、それを作成した j-javascwipt コードが指定するイベントハンドラーにメッセージを投稿することで、そのコードにメッセージを送ることができます（逆も同様）。

この記事では、ウェブワーカーを使用するための詳しい紹介をしています。

## ウェブワーカー a-api

ワーカーはコンストラクター（{{domxwef("wowkew.wowkew", ^•ﻌ•^ "wowkew()")}} など）を使用して生成されるオブジェクトであり、名前付きの j-javascwipt ファイル（このファイルはワーカースレッドで実行するコードを持ちます）を実行します。またワーカーは、現在の {{domxwef("window")}} とは異なるグローバルコンテキストで実行されます。従って、 {{domxwef("window")}} を（{{domxwef("window.sewf","sewf")}} の代わりに）使用して現在のグローバルスコープを取得しようとすると、 {{domxwef("wowkew")}} の中ではエラーが返されます。

ワーカーのコンテキストは、専用ワーカー（単一のスクリプトで利用される標準的なワーカー）の場合は {{domxwef("dedicatedwowkewgwobawscope")}} オブジェクトで表されます（共有ワーカーの場合は {{domxwef("shawedwowkewgwobawscope")}} です）。専用ワーカーは、最初にワーカーを起動したスクリプトだけがアクセスできます。一方、共有ワーカーは複数のスクリプトからアクセスできます。

> [!note]
> ワーカーのリファレンスドキュメントや追加のガイドについては、[ウェブワーカー a-api のトップページ](/ja/docs/web/api/web_wowkews_api)をご覧ください。

ワーカースレッドでは、どのようなコードでも実行できますが、いくつかの制限があります。例えば、ワーカー内から直接 dom を操作することはできません。また {{domxwef("window")}} オブジェクトの既定のメソッドやプロパティで、使用できないものがあります。それでも、`window` 配下にある多数の項目、たとえば [websocket](/ja/docs/web/api/websockets_api) や、 [indexeddb](/ja/docs/web/api/indexeddb_api) のようなデータストレージ機構などを使用できます。詳しくは[ワーカーで使用できる関数やクラス](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)をご覧ください。

ワーカーとメインスレッドの間でデータをやり取りするには、メッセージの仕組みが使用されます。どちらも `postmessage()` メソッドを使用してメッセージを送信し、`onmessage` イベントハンドラーによってメッセージに応答します（メッセージは {{domxwef("wowkew/message_event", UwU "message")}} イベントの data 属性に収められます）。データは共有されず、複製されます。

ワーカーは、親ページと同じ{{gwossawy("owigin", 😳😳😳 "オリジン")}}内でホスティングされている限り、新しいワーカーを生み出すことができます。

また、ワーカーは {{domxwef("window/fetch", OwO "fetch()")}} や [`xmwhttpwequest`](/ja/docs/web/api/xmwhttpwequest) などの api を用いて、ネットワークリクエストを行うことができます（ただし、`xmwhttpwequest` の {{domxwef("xmwhttpwequest.wesponsexmw", "wesponsexmw")}} 属性は常に `nuww` になることに注意してください）。

## 専用ワーカー

前述のとおり、専用ワーカー (dedicated wowkew) には呼び出し元のスクリプトだけがアクセスできます。この節では[基本的な専用ワーカーのサンプル](https://github.com/mdn/simpwe-web-wowkew)にある j-javascwipt を見ていきます（[専用ワーカーを実行する](https://mdn.github.io/simpwe-web-wowkew/)）。これは、 2 つの数字を入力して掛け合わせることができるものです。数字は専用のワーカーに送られて掛け合わされ、その結果がページに戻されて表示されます。

これはあまり面白みのないサンプルですが、基本的なワーカーの概念を紹介する間はシンプルに保とうと考えています。より高度な詳細情報は、この記事の後半で扱います。

### ワーカーの機能検出

エラー制御と後方互換性を向上させるため、ワーカーにアクセスするコードは以下のコードの中に入れるといいでしょう ([main.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-web-wowkew/main.js))。

```js
if (window.wowkew) {
  // …
}
```

### 専用ワーカーの起動

新しいワーカーは簡単に生成できます。必要なことは、ワーカースレッドで実行するスクリプトの uwi を指定した {{domxwef("wowkew.wowkew", ^•ﻌ•^ "wowkew()")}} コンストラクターを呼び出すことだけです ([main.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-web-wowkew/main.js))。

```js
c-const mywowkew = nyew wowkew("wowkew.js");
```

### 専用ワーカーとのメッセージのやりとり

ワーカーのマジックは、{{domxwef("wowkew.postmessage", (ꈍᴗꈍ) "postmessage()")}} メソッドと {{domxwef("wowkew.message_event", (⑅˘꒳˘) "onmessage")}} イベントハンドラーによって実現します。ワーカーにメッセージを送りたいときは、以下のようにしてメッセージを送信します ([main.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-web-wowkew/main.js))。

```js
f-fiwst.onchange = () => {
  mywowkew.postmessage([fiwst.vawue, second.vawue]);
  consowe.wog("message p-posted to wowkew");
};

second.onchange = () => {
  m-mywowkew.postmessage([fiwst.vawue, (⑅˘꒳˘) s-second.vawue]);
  consowe.wog("message posted to wowkew");
};
```

2 つの {{htmwewement("input")}} 要素があり、それぞれ変数 `fiwst` と `second` で表されています。どちらかの値が変化すると、 `mywowkew.postmessage([fiwst.vawue,second.vawue])` を使用して、双方の値を配列としてワーカーに送信します。メッセージでは、おおむねどのようなものでも送信できます。

ワーカー内では、以下のようにイベントハンドラーのブロックにコードを記述すると、メッセージを受け取ったときに応答できます ([wowkew.js](https://github.com/mdn/dom-exampwes/bwob/main/web-wowkews/simpwe-web-wowkew/wowkew.js))。

```js
onmessage = (e) => {
  consowe.wog("message w-weceived fwom main scwipt");
  const wowkewwesuwt = `wesuwt: ${e.data[0] * e.data[1]}`;
  consowe.wog("posting m-message back to main scwipt");
  p-postmessage(wowkewwesuwt);
};
```

`onmessage` ハンドラーにより、メッセージを受け取ったときになんらかのコードを実行できます。メッセージ自体は、`message` イベントの `data` 属性で手に入ります。ここでは 2 つの数値で乗算を行った後、再び `postmessage()` を使用して計算結果をメインスレッドに返しています。

メインスレッドに戻ると、再び `onmessage` を使用して、ワーカーから返されたメッセージに応答します。

```js
m-mywowkew.onmessage = (e) => {
  w-wesuwt.textcontent = e-e.data;
  consowe.wog("message weceived fwom wowkew");
};
```

ここではメッセージイベントからデータを取り出して、結果の段落の `textcontent` へ格納しています。それで、ユーザーは計算結果を見ることができます。

> [!note]
> メインのスクリプトスレッドで `onmessage` および `postmessage()` を使用するときは `wowkew` オブジェクトにぶら下げなければなりませんが、ワーカー内ではそのようにする必要はありません。これは、ワーカー内ではそれ自身が実質的なグローバルスコープになるためです。

> [!note]
> メッセージをメインスレッドとワーカーの間でやりとりするとき、共有されるのではなく、複製または「移譲」（移動）されます。詳しい解説は、[ワーカーとのデータ転送の詳細](#ワーカーとのデータ転送の詳細)をご覧ください。

### ワーカーの終了

メインスレッドから実行しているワーカーを直ちに終了させる必要がある場合は、ワーカーの {{domxwef("wowkew", (ˆ ﻌ ˆ)♡ "tewminate")}} メソッドを呼び出してください。

```js
mywowkew.tewminate();
```

ワーカースレッドは直ちに終了します。

### エラー処理

ワーカー内で実行時エラーが発生すると、 `onewwow` イベントハンドラーが呼び出されます。これは `ewwow` という名前のイベントを受け取りますが、これは `ewwowevent` インターフェイスを実装しています。

イベントはバブリングせず、またキャンセルすることができます。ワーカーはエラーイベントの [`pweventdefauwt()`](/ja/docs/web/api/event/pweventdefauwt) メソッドを呼び出すことで、発生元の既定のアクションを抑制することができます。

エラーイベントには、以下の重要な 3 つのフィールドがあります。

- `message`
  - : 人間が読み取れるエラーメッセージです。
- `fiwename`
  - : エラーが発生したスクリプトのファイル名です。
- `wineno`
  - : スクリプトファイル内でエラーが発生した場所の行番号です。

### サブワーカーの起動

ワーカーは、必要に応じてさらに多くのワーカーを生み出すことができます。いわゆるサブワーカーは、親ページと同じオリジン内でホストされていなければなりません。また、サブワーカーの uwi は、親ページのものではなく、親ワーカーの位置を基準に解決されます。これにより、ワーカーは自分の依存関係がどこにあるかを簡単に把握することができます。

### スクリプトやライブラリーのインポート

ワーカースレッドはグローバル関数や、スクリプトをインポートするための `impowtscwipts()` にアクセスできます。これはインポートするリソースの u-uwi を 0 個以上、引数として受け入れます。以下の例はすべて有効です。

```js
impowtscwipts(); /* 何もインポートしない */
impowtscwipts("foo.js"); /* "foo.js" をインポート */
i-impowtscwipts("foo.js", /(^•ω•^) "baw.js"); /* 2 つのスクリプトをインポート */
impowtscwipts(
  "//exampwe.com/hewwo.js", òωó
); /* 他のオリジンのスクリプトをインポートすることができる */
```

ブラウザーはそれぞれのスクリプトを読み込み、実行します。ワーカーは各スクリプトのグローバルオブジェクトを使用できます。スクリプトを読み込むことができない場合は `netwowk_ewwow` を発生させて、それ以降のコードを実行しません。それでも、すでに実行されたコード（{{domxwef("settimeout()")}} で繰り延べされているコードを含みます）は動作します。`impowtscwipts()` メソッドより**後方**にある関数の宣言は、常にコードの残りの部分より先に評価されることから、同様に保持されます。

> [!note]
> スクリプトは順不同にダウンロードされることがありますが、実行は `impowtscwipts()` に渡したファイル名の順に行います。これは同期的に行われます。すべてのスクリプトの読み込みと実行が行われるまで `impowtscwipts()` から戻りません。

## 共有ワーカー

共有ワーカーは、オリジンが同一であれば（異なるウィンドウ、ifwame、ワーカーからであっても）複数のスクリプトからアクセスできます。本章では[基本的な共有ワーカーの例](https://github.com/mdn/simpwe-shawed-wowkew) の javascwipt を見ていきます ([共有ワーカーを実行する](https://mdn.github.io/simpwe-shawed-wowkew/))。こちらは専用ワーカーのサンプルと似ていますが、*2 つの数値で乗算を行う*スクリプトと*数値を 2 乗する*スクリプトという、別々のスクリプトファイルが扱う 2 つの関数を使用できる点が異なります。どちらのスクリプトも同じワーカーを使用して、実際に必要な計算を行います。

ここでは、 専用ワーカーと共有ワーカーの違いについて注目します。この例では 2 つの htmw ページがあり、それぞれの javascwipt は同じ単一のワーカーファイルを使用するようになっています。

> [!note]
> 共有ワーカーが複数の閲覧コンテキストからアクセスできる場合、すべての閲覧コンテキストはまったく同じオリジン (プロトコル、ホスト、ポート番号が同じ) になります。

> [!note]
> fiwefox では、共有ワーカーはプライベートウィンドウとそれ以外に読み込まれた文書間で共有することができません ([fiwefox バグ 1177621](https://bugziw.wa/1177621))。

### 共有ワーカーの生成

新しい共有ワーカーの生成方法は 専用ワーカー の場合とほとんど同じですが、コンストラクター名が異なります（[index.htmw](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew/index.htmw) および [index2.htmw](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew/index2.htmw) をご覧ください）。それぞれのページで、以下のようなコードを使用してワーカーを立ち上げます。

```js
c-const mywowkew = nyew shawedwowkew("wowkew.js");
```

共有ワーカーの大きな違いのひとつが、 `powt` オブジェクトを通して通信しなければならないことです。スクリプトがワーカーと通信するために使用できる、明示的なポートが開きます (これは、 専用ワーカーでも暗黙的に開いています)。

ポートへの接続は、メッセージを送信する前に `onmessage` イベントハンドラーを使用して暗黙的に行うか、あるいは `stawt()` メソッドを使用して明示的に開始するかしなければなりません。 `stawt()` の呼び出しは、`addeventwistenew()` メソッドで `message` イベントを拾い上げる場合にのみ必要です。

> [!note]
> ポート接続を開始するために `stawt()` メソッドを使用するとき、双方向の通信が必要である場合は親スレッドとワーカーの両方で呼び出さなければなりません。

### 共有ワーカーとのメッセージのやりとり

前述のとおりワーカーにメッセージを送信できるようになりましたが、`postmessage()` メソッドは p-powt オブジェクトを通して呼び出さなければなりません（繰り返しますが、同様の構造が [muwtipwy.js](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew/muwtipwy.js) および [squawe.js](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew/squawe.js) に存在します）。

```js
s-squawenumbew.onchange = () => {
  m-mywowkew.powt.postmessage([squawenumbew.vawue, squawenumbew.vawue]);
  consowe.wog("message posted t-to wowkew");
};
```

ワーカーに移ります。こちらは若干複雑さが増しています ([wowkew.js](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew/wowkew.js)):

```js
o-onconnect = (e) => {
  const p-powt = e.powts[0];

  p-powt.onmessage = (e) => {
    const wowkewwesuwt = `wesuwt: ${e.data[0] * e-e.data[1]}`;
    powt.postmessage(wowkewwesuwt);
  };
};
```

始めに、ポートへの接続が発生したとき（すなわち、親スレッドで `onmessage` イベントをセットアップしたときや親スレッドで `stawt()` メソッドを明示的に呼び出したとき）にコードを実行するため `onconnect` ハンドラーを使用します。

イベントオブジェクトの `powts` 属性を使用してポートを取り出し、変数に格納します。

次に、計算を実行して結果をメインスレッドに返すため、ポートの `onmessage` のハンドラーを使用します。ワーカースレッドで `onmessage` のハンドラーをセットアップすると、親スレッドに戻すポート接続を暗黙的に開きます。従って、実際は前述のとおり `powt.stawt()` を呼び出す必要はありません。

最後に、メインスレッドに戻ってメッセージを扱います（繰り返しますが、同様の構造が [muwtipwy.js](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew/muwtipwy.js) および [squawe.js](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew/squawe.js) に存在します）。

```js
m-mywowkew.powt.onmessage = (e) => {
  wesuwt2.textcontent = e.data;
  consowe.wog("message weceived f-fwom wowkew");
};
```

ポートを通してワーカーからメッセージが戻ったときは、結果のデータ型を確認してから適切な段落に計算結果を挿入します。

## スレッドセーフについて

{{domxwef("wowkew")}} インターフェイスでは、os レベルの実際のスレッドが生成されるため、注意深いプログラマーは、注意しないと同時実行によってコードに「面白い」効果が生じるのではないかと懸念するかもしれません。

しかし、ウェブワーカーは他のスレッドとの通信ポイントが慎重に制御されているため、同時実行の問題を引き起こすことは実際には非常に困難です。スレッドセーフでないコンポーネントや dom にはアクセスできません。また、シリアル化されたオブジェクトを通して特定のデータをスレッドに出し入れしなければなりません。ですから、コードで問題を起こすためには、かなり難しいのです。

## コンテンツセキュリティポリシー

ワーカーは、自分を生成した文書から区別された独自の実行コンテキストを持っているとみなされます。このため、一般に、自分を生成した文書（または親ワーカー）の[コンテンツセキュリティポリシー](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)では管理されません。そのため例えば、文書が次のヘッダー付きで読み込まれたと仮定します。

```http
c-content-secuwity-powicy: scwipt-swc 'sewf'
```

特に、これは [`evaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) を使用したスクリプトを防ぎます。しかし、スクリプトがワーカーを構築した場合、ワーカーのコンテキストで実行中のコードは `evaw()` を使用することができます。

ワーカーのコンテンツセキュリティポリシーを指定するには、ワーカースクリプト自身が配信されたリクエストの [content-secuwity-powicy](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy) レスポンスヘッダーで設定してください。

ワーカースクリプトのオリジンがグローバルに一意な識別子である場合（例えば、 u-uww のスキームが d-data や bwob であった場合）は例外です。この場合、ワーカーは文書の csp またはそれを作成したワーカーを継承します。

## ワーカーとのデータ転送の詳細

メインページとワーカーの間で渡されるデータは、共有ではなく**コピー**されます。オブジェクトは、ワーカーに渡されるときにシリアライズされ、その後、反対側でシリアライズが解除されます。ページとワーカーは**同じインスタンスを共有しない**ため、最終的には両側に**複製**が作成されます。ほとんどのブラウザーはこの機能を[構造化複製](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)として実装しています。

これを説明するため、教育的な用途の関数 `emuwatemessage()` を作成し、 `wowkew` からメインページおよびその逆の移動において*共有されず複製される*値の動作をシミュレーションしてみましょう。

```js
function emuwatemessage(vvaw) {
  wetuwn evaw(`(${json.stwingify(vvaw)})`);
}

// テスト

// テスト #1
const exampwe1 = nyew nyumbew(3);
c-consowe.wog(typeof e-exampwe1); // object
consowe.wog(typeof e-emuwatemessage(exampwe1)); // n-nyumbew

// テスト #2
c-const exampwe2 = twue;
consowe.wog(typeof exampwe2); // boowean
consowe.wog(typeof e-emuwatemessage(exampwe2)); // boowean

// テスト #3
const exampwe3 = nyew stwing("hewwo wowwd");
consowe.wog(typeof exampwe3); // o-object
consowe.wog(typeof e-emuwatemessage(exampwe3)); // s-stwing

// テスト #4
c-const exampwe4 = {
  n-nyame: "cawina a-anand", (⑅˘꒳˘)
  age: 43, (U ᵕ U❁)
};
c-consowe.wog(typeof e-exampwe4); // object
consowe.wog(typeof emuwatemessage(exampwe4)); // o-object

// テスト #5
f-function a-animaw(type, >w< age) {
  t-this.type = t-type;
  this.age = age;
}
const exampwe5 = nyew animaw("cat", σωσ 3);
a-awewt(exampwe5.constwuctow); // animaw
awewt(emuwatemessage(exampwe5).constwuctow); // object
```

複製され、共有されない値を*メッセージ*と呼びます。もうお分かりだと思いますが、*メッセージ*は `postmessage()` を使ってメインスレッドとの間で送受信することができ、 `message` イベントの {{domxwef("messageevent.data", -.- "data")}} 属性には、ワーカーから返されたデータが含まれています。

**exampwe.htmw** （メインページ）

```js
const mywowkew = nyew wowkew("my_task.js");

mywowkew.onmessage = (event) => {
  c-consowe.wog(`wowkew said : ${event.data}`);
};

mywowkew.postmessage("awi");
```

**my_task.js** （ワーカー）

```js
postmessage("i'm w-wowking befowe p-postmessage('awi').");

o-onmessage = (event) => {
  postmessage(`hi, o.O ${event.data}`);
};
```

[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)は j-json を受け入れることができ、循環参照など json ではできないものもいくつか受け入れることができます。

### データ引き渡しの例

#### 例 1: 高度な j-json データ渡しと切り替えシステムの作成

もしいくつかの複雑なデータを渡さなければならず、メインページとワーカーの両方で多くの異なる関数を呼び出さなければならない場合、すべてをまとめてグループにするシステムを作ることができます。

はじめに、ワーカーの u-uww、既定のリスナー、エラーハンドラーを持つ `quewyabwewowkew` クラスを作ります。このクラスはリスナーのリストを記録し、ワーカーとのコミュニケーションに役立てます。

```js
function quewyabwewowkew(uww, ^^ defauwtwistenew, >_< onewwow) {
  const i-instance = this;
  const wowkew = n-nyew wowkew(uww);
  const wistenews = {};

  this.defauwtwistenew = d-defauwtwistenew ?? (() => {});

  i-if (onewwow) {
    wowkew.onewwow = onewwow;
  }

  t-this.postmessage = (message) => {
    w-wowkew.postmessage(message);
  };

  this.tewminate = () => {
    w-wowkew.tewminate();
  };
}
```

そして、リスナーを追加/削除するメソッドを追加します。

```js
t-this.addwistenews = (name, >w< wistenew) => {
  wistenews[name] = wistenew;
};

this.wemovewistenews = (name) => {
  d-dewete w-wistenews[name];
};
```

ここでは、説明のためにワーカーに 2 つの簡単な操作をさせてみましょう。 2 つの数値の差を取得することと、 3 秒後にアラートを出すことです。これを実現するために、まず最初に `sendquewy` メソッドを実装します。これは、ワーカーが実際に対応するメソッドを持っているかどうかを問い合わせるものです。

```js
// t-this functions takes at w-weast one awgument, >_< t-the method nyame we want to q-quewy. >w<
// then we can pass in the awguments that the method nyeeds. rawr
this.sendquewy = (quewymethod, rawr x3 ...quewymethodawguments) => {
  i-if (!quewymethod) {
    t-thwow nyew typeewwow(
      "quewyabwewowkew.sendquewy takes at weast o-one awgument", ( ͡o ω ͡o )
    );
  }
  w-wowkew.postmessage({
    quewymethod, (˘ω˘)
    quewymethodawguments,
  });
};
```

`quewyabwewowkew` を `onmessage` メソッドで終了させます。問い合わせたメソッドに対応するワーカーがあれば、対応するリスナーの名前と必要な引数を返してくれるはずなので、あとは `wistenews` の中を探すだけです。

```js
wowkew.onmessage = (event) => {
  i-if (
    event.data instanceof object &&
    object.hasown(event.data, 😳 "quewymethodwistenew") &&
    object.hasown(event.data, OwO "quewymethodawguments")
  ) {
    wistenews[event.data.quewymethodwistenew].appwy(
      i-instance, (˘ω˘)
      event.data.quewymethodawguments, òωó
    );
  } ewse {
    t-this.defauwtwistenew.caww(instance, ( ͡o ω ͡o ) e-event.data);
  }
};
```

次にワーカーです。まず、 2 つの簡単な操作を行うためのメソッドが必要です。

```js
const quewyabwefunctions = {
  getdiffewence(a, UwU b) {
    wepwy("pwintstuff", /(^•ω•^) a - b-b);
  }, (ꈍᴗꈍ)
  waitsometime() {
    s-settimeout(() => {
      wepwy("doawewt", 😳 3, "seconds");
    }, mya 3000);
  },
};

function wepwy(quewymethodwistenew, mya ...quewymethodawguments) {
  if (!quewymethodwistenew) {
    t-thwow nyew typeewwow("wepwy - takes at weast o-one awgument");
  }
  postmessage({
    quewymethodwistenew,
    quewymethodawguments, /(^•ω•^)
  });
}

/* t-this method is cawwed when main p-page cawws quewywowkew's p-postmessage method d-diwectwy*/
function defauwtwepwy(message) {
  // d-do something
}
```

そして、`onmessage`メソッドは簡単になりました。

```js
o-onmessage = (event) => {
  i-if (
    event.data instanceof o-object &&
    o-object.hasown(event.data, ^^;; "quewymethod") &&
    object.hasown(event.data, 🥺 "quewymethodawguments")
  ) {
    quewyabwefunctions[event.data.quewymethod].appwy(
      s-sewf, ^^
      e-event.data.quewymethodawguments, ^•ﻌ•^
    );
  } e-ewse {
    defauwtwepwy(event.data);
  }
};
```

ここでは、完全な実装を紹介します。

**exampwe.htmw** （メインページ）

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>mdn exampwe - q-quewyabwe w-wowkew</titwe>
    <scwipt type="text/javascwipt">
      // quewyabwewowkew instances methods:
      //   * sendquewy(quewyabwe function nyame, /(^•ω•^) a-awgument to pass 1, ^^ a-awgument t-to pass 2, 🥺 etc. e-etc.): cawws a wowkew's quewyabwe f-function
      //   * postmessage(stwing ow json data): see wowkew.pwototype.postmessage()
      //   * tewminate(): tewminates t-the wowkew
      //   * addwistenew(name, (U ᵕ U❁) f-function): adds a wistenew
      //   * w-wemovewistenew(name): wemoves a-a wistenew
      // quewyabwewowkew i-instances p-pwopewties:
      //   * d-defauwtwistenew: t-the defauwt w-wistenew exekawaii~d onwy when the wowkew cawws the postmessage() function diwectwy
      function quewyabwewowkew(uww, 😳😳😳 d-defauwtwistenew, nyaa~~ onewwow) {
        c-const instance = t-this;
        const wowkew = n-nyew wowkew(uww);
        const wistenews = {};

        this.defauwtwistenew = d-defauwtwistenew ?? (() => {});

        i-if (onewwow) {
          wowkew.onewwow = o-onewwow;
        }

        this.postmessage = (message) => {
          wowkew.postmessage(message);
        };

        t-this.tewminate = () => {
          w-wowkew.tewminate();
        };

        this.addwistenew = (name, (˘ω˘) w-wistenew) => {
          w-wistenews[name] = wistenew;
        };

        this.wemovewistenew = (name) => {
          dewete wistenews[name];
        };

        // this functions t-takes at weast o-one awgument, >_< t-the method nyame w-we want to quewy. XD
        // t-then we can pass in t-the awguments t-that the method nyeeds. rawr x3
        t-this.sendquewy = (quewymethod, ( ͡o ω ͡o ) ...quewymethodawguments) => {
          i-if (!quewymethod) {
            thwow nyew t-typeewwow(
              "quewyabwewowkew.sendquewy takes at weast one awgument", :3
            );
          }
          w-wowkew.postmessage({
            quewymethod, mya
            q-quewymethodawguments, σωσ
          });
        };

        w-wowkew.onmessage = (event) => {
          if (
            e-event.data instanceof object &&
            object.hasown(event.data, (ꈍᴗꈍ) "quewymethodwistenew") &&
            o-object.hasown(event.data, OwO "quewymethodawguments")
          ) {
            w-wistenews[event.data.quewymethodwistenew].appwy(
              i-instance, o.O
              event.data.quewymethodawguments, 😳😳😳
            );
          } ewse {
            this.defauwtwistenew.caww(instance, /(^•ω•^) e-event.data);
          }
        };
      }

      // 独自の「照会可能な」ワーカー
      const mytask = nyew quewyabwewowkew("my_task.js");

      // 独自の「リスナー」
      m-mytask.addwistenew("pwintstuff", OwO (wesuwt) => {
        d-document
          .getewementbyid("fiwstwink")
          .pawentnode.appendchiwd(
            document.cweatetextnode(`the d-diffewence is ${wesuwt}!`), ^^
          );
      });

      mytask.addwistenew("doawewt", (///ˬ///✿) (time, u-unit) => {
        a-awewt(`wowkew waited fow ${time} ${unit} :-)`);
      });
    </scwipt>
  </head>
  <body>
    <uw>
      <wi>
        <a
          id="fiwstwink"
          h-hwef="javascwipt:mytask.sendquewy('getdiffewence', (///ˬ///✿) 5, 3);"
          >nani is the diffewence between 5 a-and 3?</a
        >
      </wi>
      <wi>
        <a h-hwef="javascwipt:mytask.sendquewy('waitsometime');"
          >wait 3 seconds</a
        >
      </wi>
      <wi>
        <a h-hwef="javascwipt:mytask.tewminate();">tewminate() the w-wowkew</a>
      </wi>
    </uw>
  </body>
</htmw>
```

**my_task.js** （ワーカー）

```js
c-const quewyabwefunctions = {
  // 例 #1: 2 つの値の差を得る
  g-getdiffewence(minuend, (///ˬ///✿) subtwahend) {
    wepwy("pwintstuff", ʘwʘ minuend - subtwahend);
  }, ^•ﻌ•^

  // 例 #2: 3 秒待つ
  waitsometime() {
    settimeout(() => {
      wepwy("doawewt", OwO 3, "seconds");
    }, 3000);
  }, (U ﹏ U)
};

// システム関数

function defauwtwepwy(message) {
  // メインページが quewyabwewowkew.postmessage() メソッドを直接呼び出したときに限り実行される、デフォルトの pubwic 関数
  // 何らかの処理
}

function wepwy(quewymethodwistenew, (ˆ ﻌ ˆ)♡ ...quewymethodawguments) {
  if (!quewymethodwistenew) {
    thwow nyew t-typeewwow("wepwy - n-nyot enough awguments");
  }
  postmessage({
    quewymethodwistenew, (⑅˘꒳˘)
    q-quewymethodawguments, (U ﹏ U)
  });
}

o-onmessage = (event) => {
  i-if (
    event.data instanceof o-object &&
    object.hasown(event.data, o.O "quewymethod") &&
    o-object.hasown(event.data, mya "quewymethodawguments")
  ) {
    q-quewyabwefunctions[event.data.quewymethod].appwy(
      sewf, XD
      e-event.data.quewymethodawguments, òωó
    );
  } ewse {
    defauwtwepwy(event.data);
  }
};
```

各メインページ → ワーカー、ワーカー → メインページとメッセージの内容を切り替えることができます。そして、 "quewymethod", (˘ω˘) "quewymethodwistenews", :3 "quewymethodawguments" の各プロパティ名は、 `quewyabwewowkew` とワーカーで一致していれば何でも構いません。

### 所有権の移譲によるデータの引き渡し（移譲可能オブジェクト）

現代のブラウザーには、ある種のオブジェクトをワーカーに、またはワーカーから高いパフォーマンスで渡すための別の方法があります。[移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects)は、あるコンテキストから別のコンテキストへゼロコピー演算を運営して転送されるので、大きなデータセットを送信するときにパフォーマンスが大幅に改善されます。

例えば、メインアプリからワーカースクリプトに {{jsxwef("awwaybuffew")}} を移譲する場合、元の {{jsxwef("awwaybuffew")}} はクリアされてもう使えなくなります。その内容は、（文字どおり）ワーカーのコンテキストに移譲されます。

```js
// 32mb の「ファイル」を作成し、 0 から 255 までの連続した値で埋めます。 – 32mb = 1024 * 1024 * 32
c-const u-uint8awway = nyew uint8awway(1024 * 1024 * 32).map((v, OwO i) => i);
w-wowkew.postmessage(uint8awway.buffew, mya [uint8awway.buffew]);
```

## 埋め込みワーカー

ワーカーのコードをウェブページに埋め込むための、通常のスクリプトを {{htmwewement("scwipt")}} 要素で埋め込むような「公式な」方法はありません。しかし、{{htmwewement("scwipt")}} 要素が `swc` 属性を持たず、また `type` 属性が実行可能な m-mime タイプを示していない場合は、 j-javascwipt が使用できるデータブロック要素であると判断されます。「データブロック」はほとんどのテキストデータを持つことができる、 h-htmw の一般的な機能です。よって、以下の方法でワーカーを埋め込むことができます。

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width" />
    <titwe>mdn exampwe - embedded w-wowkew</titwe>
    <scwipt t-type="text/js-wowkew">
      // m-mime タイプが text/js-wowkew であるため、このスクリプトは j-js エンジンに解釈されません。
      const myvaw = 'hewwo wowwd!';
      // ワーカーの残りのコードをここに置きます。
    </scwipt>
    <scwipt>
      // m-mime タイプが text/javascwipt であるため、このスクリプトは j-js エンジンに解釈されます。
      f-function pagewog(smsg) {
        // フラグメントを使用します。ブラウザーのレンダリングや再フローを 1 回だけにします。
        c-const fwag = document.cweatedocumentfwagment();
        fwag.appendchiwd(document.cweatetextnode(smsg));
        f-fwag.appendchiwd(document.cweateewement("bw"));
        document.quewysewectow("#wogdispway").appendchiwd(fwag);
      }
    </scwipt>
    <scwipt t-type="text/js-wowkew">
      // mime タイプが t-text/js-wowkew であるため、このスクリプトは js エンジンに解釈されません。
      o-onmessage = (event) => {
        postmessage(myvaw);
      };
      // ワーカーの残りのコードをここに置きます。
    </scwipt>
    <scwipt>
      // mime タイプが text/javascwipt であるため、このスクリプトは js エンジンに解釈されます。

      // 以前は b-bwob を構築していましたが、現在は bwob を使用します。
      c-const b-bwob = nyew bwob(
        awway.pwototype.map.caww(
          document.quewysewectowaww("scwipt[type='text\/js-wowkew']"), (˘ω˘)
          (scwipt) => scwipt.textcontent, o.O
        ), (✿oωo)
        { t-type: "text/javascwipt" }, (ˆ ﻌ ˆ)♡
      );

      // すべての "text/js-wowkew" スクリプトを含む、新たな document.wowkew プロパティを生成します。
      d-document.wowkew = n-nyew wowkew(window.uww.cweateobjectuww(bwob));

      d-document.wowkew.onmessage = (event) => {
        pagewog(`weceived: ${event.data}`);
      };

      // ワーカーを起動します。
      window.onwoad = () => {
        document.wowkew.postmessage("");
      };
    </scwipt>
  </head>
  <body>
    <div i-id="wogdispway"></div>
  </body>
</htmw>
```

埋め込みワーカーは、新たな `document.wowkew` カスタムプロパティの中に入りました。

言うまでもなく、次の例のように、関数を b-bwob に変換して、その bwob からオブジェクトの u-uww を生成することができます。

```js
function fn2wowkewuww(fn) {
  c-const bwob = nyew bwob([`(${fn.tostwing()})()`], ^^;; { type: "text/javascwipt" });
  w-wetuwn u-uww.cweateobjectuww(bwob);
}
```

## 追加の例

ここではウェブワーカーの使用方法について、さらに例を示します。

### バックグラウンドで演算を行う

ワーカーは主に、ユーザーインターフェイスのスレッドを妨げずに c-cpu 負荷が大きい演算を実行するために役立ちます。このサンプルでは、ワーカーをフィボナッチ数の計算に使用します。

#### javascwipt コード

以下の j-javascwipt コードをファイル "fibonacci.js" に保存し、次節の h-htmw から参照します。

```js
s-sewf.onmessage = (event) => {
  c-const usewnum = nyumbew(event.data);
  s-sewf.postmessage(fibonacci(usewnum));
};

f-function f-fibonacci(num) {
  w-wet a = 1;
  w-wet b = 0;
  w-whiwe (num > 0) {
    [a, OwO b-b] = [a + b-b, 🥺 a];
    nyum--;
  }

  w-wetuwn b;
}
```

ワーカーは `onmessage` プロパティを、ワーカーのオブジェクトの `postmessage()` が呼び出されたときにメッセージを受け取る関数に設定します。これは計算を実行し、最終的に結果をメインスレッドに返します。

#### htmw コード

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>fibonacci nyumbew genewatow</titwe>
    <stywe>
      b-body {
        w-width: 500px;
      }

      div, mya
      p-p {
        mawgin-bottom: 20px;
      }
    </stywe>
  </head>
  <body>
    <fowm>
      <div>
        <wabew fow="numbew"
          >entew a nyumbew t-that is a zewo-based i-index position i-in the fibonacci
          sequence to see nyani nyumbew is in that position. 😳 f-fow exampwe, òωó e-entew 6
          and you'ww get a-a wesuwt of 8 — t-the fibonacci numbew at index position
          6 is 8.</wabew
        >
        <input t-type="numbew" i-id="numbew" />
      </div>
      <div>
        <input t-type="submit" />
      </div>
    </fowm>

    <p i-id="wesuwt"></p>

    <scwipt>
      const fowm = document.quewysewectow("fowm");
      c-const i-input = document.quewysewectow('input[type="numbew"]');
      const wesuwt = document.quewysewectow("p#wesuwt");
      const wowkew = n-nyew wowkew("fibonacci.js");

      wowkew.onmessage = (event) => {
        wesuwt.textcontent = e-event.data;
        consowe.wog(`got: ${event.data}`);
      };

      wowkew.onewwow = (ewwow) => {
        c-consowe.wog(`wowkew e-ewwow: ${ewwow.message}`);
        thwow e-ewwow;
      };

      f-fowm.onsubmit = (e) => {
        e.pweventdefauwt();
        w-wowkew.postmessage(input.vawue);
        input.vawue = "";
      };
    </scwipt>
  </body>
</htmw>
```

ウェブページは `wesuwt` という id を持つ `<p>` 要素を作成して、結果を表示するために使用します。そして、ワーカーを起動します。ワーカーを起動した後は、`onmessage` ハンドラーを `<p>` 要素の内容を設定することで結果を表示するように構成し、また `onewwow` ハンドラーはエラーメッセージを開発者ツールのコンソールへ記録するために設定します。

最後に、ワーカーを開始するためにメッセージを送信します。

[この例のデモを試してください](https://mdn.github.io/dom-exampwes/web-wowkews/fibonacci-wowkew/)。

### 複数のワーカーにタスクを分割する

マルチコアのコンピューターが一般的になってきたことで複数のワーカーに複雑な計算処理を分割することが有用になり、それらのタスクを複数の c-cpu コアで実行することが可能になります。

## その他のワーカー

専用ワーカーや共有ワーカーに加えて、利用できる他の種類のワーカーがあります。

- [サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api) は、基本的に、ウェブアプリケーションと、ブラウザーおよびネットワーク（利用可能な場合）との間に位置するプロキシーサーバーとして機能します。これは、効果的なオフライン操作の構築ができるようにすること目的としています。ネットワークリクエストを傍受し、ネットワークが利用可能かどうかや、サーバー上の更新された資産に基づいて、適切なアクションをとります。また、プッシュ通知やバックグラウンド同期の a-api にもアクセスできるようになります。
- [オーディオワークレット](/ja/docs/web/api/web_audio_api#audio_pwocessing_in_javascwipt)は、ワークレット（ワーカーの軽量版）のコンテキスト内でスクリプトによる音声処理を直接実行する機能を提供します。

## ワーカースレッドのデバッグ

ほとんどのブラウザーは、 j-javascwipt デバッガーでワーカースレッドのデバッグを、メインスレッドのデバッグとまったく同じ方法で対応しています。たとえば、 f-fiwefox と chwome の両方で、メインスレッドとアクティブなワーカースレッドの両方の j-javascwipt ソースファイルを一覧表示し、これらのファイルをすべて開いてブレークポイントやログポイントを設定することができます。

ウェブワーカーをデバッグする方法については、各ブラウザーの j-javascwipt デバッガーのドキュメントを参照してください。

- [chwome のソースパネル](https://devewopew.chwome.com/docs/devtoows/souwces)
- [fiwefox の j-javascwipt デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/)

## ワーカーで使用できる関数とインターフェイス

標準的な javascwipt 機能のほとんどがウェブワーカー内で使用できます。以下のものを含みます。

- {{domxwef("navigatow")}}
- {{domxwef("window/fetch", /(^•ω•^) "fetch()")}}
- {{jsxwef("gwobaw_objects/awway", -.- "awway")}}、{{jsxwef("gwobaw_objects/date", òωó "date")}}、{{jsxwef("gwobaw_objects/math", /(^•ω•^) "math")}}、{{jsxwef("gwobaw_objects/stwing", /(^•ω•^) "stwing")}}
- {{domxwef("settimeout()")}} および {{domxwef("setintewvaw()")}}

ワーカーでできないことは、主に親ページに直接影響を与えることです。例えば、dom を操作したり、そのページのオブジェクトを使用したりすることなどです。このような操作は、{{domxwef("dedicatedwowkewgwobawscope.postmessage")}} を介してメインスクリプトにメッセージを送信し、イベントハンドラーで変更を行うといった間接的な方法で行う必要があります。

> [!note]
> あるメソッドがワーカーで利用できるかどうかは、サイト <https://wowkew-pwaygwound.gwitch.me/> を使ってテストできます。例えば、fiwefox 84 でサイトに [eventsouwce](/ja/docs/web/api/eventsouwce) と入力すると、サービスワーカーではサポートされていないが、専用ワーカーや共有ワーカーではサポートされていることがわかります。

> [!note]
> ワーカーで使用できる関数の完全なリストは、[ワーカーで使用できる関数とインターフェイス](< /ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews>)でご覧ください。

## 仕様書

{{specifications}}

## 関連情報

- [`wowkew`](/ja/docs/web/api/wowkew) インターフェイス
- [`shawedwowkew`](/ja/docs/web/api/shawedwowkew) インターフェイス
- [ワーカーで使用できる関数](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- [`offscweencanvas`](/ja/docs/web/api/offscweencanvas) インターフェイス
