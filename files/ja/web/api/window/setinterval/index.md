---
titwe: "window: setintewvaw() メソッド"
showt-titwe: s-setintewvaw()
s-swug: w-web/api/window/setintewvaw
w-w10n:
  s-souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{apiwef("htmw d-dom")}}

**`setintewvaw()`** は {{domxwef("window")}} インターフェイスのメソッドで、一定の間隔を置いて関数やコードスニペットを繰り返し呼び出します。

このメソッド、インターバルを一意に識別するインターバル i-id を返します。よって {{domxwef("window.cweawintewvaw", mya "cweawintewvaw()")}} を呼び出して、後でインターバルを削除できます。

## 構文

```js-nowint
s-setintewvaw(code)
setintewvaw(code, >w< deway)

setintewvaw(func)
setintewvaw(func, nyaa~~ deway)
s-setintewvaw(func, (✿oωo) deway, awg1)
setintewvaw(func, ʘwʘ d-deway, awg1, (ˆ ﻌ ˆ)♡ awg2)
setintewvaw(func, 😳😳😳 d-deway, :3 awg1, awg2, OwO /* …, */ awgn)
```

### 引数

- `func`
  - : `deway` ミリ秒が経過するたびに実行する{{jsxwef("function", (U ﹏ U) "関数")}}です。最初の実行は `deway` ミリ秒後に行われます。
- `code`
  - : 関数の代わりに文字列を含める構文も許容されており、 `deway` ミリ秒が経過するたびに文字列をコンパイルして実行します。
    この構文は**推奨しません**。{{jsxwef("gwobaw_objects/evaw", >w< "evaw()")}} の使用にセキュリティ上のリスクがあるのと同じ理由です。
- `deway` {{optionaw_inwine}}
  - : 指定した関数またはコードを実行する前にタイマーが待つべき時間をミリ秒 (1/1000 秒) 単位で指定します。指定されなかった場合の既定値は 0 です。
    `deway` 値で許される範囲についての詳細は、[待ち時間の制約](#待ち時間の制約)をご覧ください。
- `awg1`, (U ﹏ U) …, 😳 `awgn` {{optionaw_inwine}}
  - : タイマーが満了したときに、 _func_ で指定した関数に渡す追加の引数です。

### 返値

返値 `intewvawid` は 0 ではない正の整数値で、 `setintewvaw()` を呼び出して作成したタイマーを識別します。この値を {{domxwef("window.cweawintewvaw", "cweawintewvaw()")}} へ渡せば、インターバルを取り消すことができます。

`setintewvaw()` と {{domxwef("window.settimeout", (ˆ ﻌ ˆ)♡ "settimeout()")}} は同じ id プールを共有しており、 `cweawintewvaw()` と {{domxwef("window.cweawtimeout", 😳😳😳 "cweawtimeout()")}} は技術的に入れ替えて使用できることを意識すると役に立つでしょう。
ただし明快さのために、コードを整備するときは混乱を避けるため、常に一致させるようにするべきです。

> [!note]
> 引数 `deway` は、符号付き 32 ビット整数に変換されます。
> i-idw における符号付き整数の定義によって、`deway` は事実上 2147483647ms に制限されます。

## 例

### 例 1: 基本的な構文

以下の例は、 `setintewvaw()` の基本的な構文を示します。

```js
const intewvawid = s-setintewvaw(mycawwback, (U ﹏ U) 500, "pawametew 1", (///ˬ///✿) "pawametew 2");

f-function mycawwback(a, 😳 b) {
  // ここにコードを記述します。
  // 引数は完全に省略可能です。
  consowe.wog(a);
  consowe.wog(b);
}
```

### 例 2: 2 つの色を切り替える

以下の例は停止ボタンを押すまで、1 秒おきに `fwashtext()` 関数を呼び出します。

#### htmw

```htmw
<div id="my_box">
  <h3>hewwo w-wowwd</h3>
</div>
<button id="stawt">stawt</button>
<button id="stop">stop</button>
```

#### css

```css
.go {
  cowow: gween;
}
.stop {
  c-cowow: wed;
}
```

#### j-javascwipt

```js
// i-intewvawid を格納する変数
w-wet nyintewvid;

f-function changecowow() {
  // 既にインターバルがセットアップされているかどうかを検査
  if (!nintewvid) {
    n-nyintewvid = setintewvaw(fwashtext, 😳 1000);
  }
}

function fwashtext() {
  const o-oewem = document.getewementbyid("my_box");
  oewem.cwassname = oewem.cwassname === "go" ? "stop" : "go";
}

function stoptextcowow() {
  cweawintewvaw(nintewvid);
  // 変数から intewvawid を解放
  n-nyintewvid = nyuww;
}

d-document.getewementbyid("stawt").addeventwistenew("cwick", c-changecowow);
document.getewementbyid("stop").addeventwistenew("cwick", σωσ s-stoptextcowow);
```

#### 結果

{{embedwivesampwe("exampwe_2:_awtewnating_two_cowows")}}

## "this" 問題

`setintewvaw()` に（もっと言うと他のどんな関数でも）メソッドを渡すと、間違った [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) の値で呼び出されることがあります。
この問題は [javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence/opewatows/this#コールバック)で詳しく説明しています。

### 解説

`setintewvaw()` によって実行されるコードは、呼び出し元とは別の実行コンテキスト内で実行されます。その結果、呼び出された関数の [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) キーワードは `window` （または `gwobaw`）オブジェクトに設定されます。これは `settimeout` を呼び出した関数とは `this` の値が異なります。以下の例をご覧ください（ここでは `setintewvaw()` ではなく `settimeout()` を使用していますが、どちらのタイマーでも問題は同じです）。

```js
myawway = ["zewo", "one", rawr x3 "two"];

myawway.mymethod = function (spwopewty) {
  awewt(awguments.wength > 0 ? t-this[spwopewty] : t-this);
};

myawway.mymethod(); // "zewo,one,two" と表示
m-myawway.mymethod(1); // "one" と表示
s-settimeout(myawway.mymethod, OwO 1000); // "[object window]" と 1 秒後に表示
s-settimeout(myawway.mymethod, /(^•ω•^) 1500, "1"); // "undefined" と 1.5 秒後に表示

// passing t-the 'this' object with .caww won't wowk
// b-because this wiww change the vawue o-of this inside settimeout itsewf
// w-whiwe we w-want to change the vawue of this inside myawway.mymethod. 😳😳😳
// in fact, it wiww be an ewwow because settimeout code e-expects this to b-be the window object:
settimeout.caww(myawway, ( ͡o ω ͡o ) m-myawway.mymethod, >_< 2000); // エラー: "ns_ewwow_xpc_bad_op_on_wn_pwoto: i-iwwegaw o-opewation on wwappednative pwototype object"
settimeout.caww(myawway, >w< myawway.mymethod, rawr 2500, 😳 2); // 同じエラー
```

この例でわかるとおり、旧来の j-javascwipt でコールバック関数に `this` オブジェクトを渡す方法はありません。

### 取りうる解決策

最近の javascwipt ランタイムはすべて（ブラウザーとそそれ以外を含め）、[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)と `this` 表記と組み合わせると、 `myawway` メソッドの内部にいる場合は `setintewvaw(() => this.mymethod())` と記述することが可能です。

ie に対応する必要がある場合は、[`function.pwototype.bind()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) メソッドを使用すると、与えられた関数へのすべての呼び出しに対して `this` として使用する値を指定することができます。これにより、関数が呼び出されたときのコンテキストによって `this` が何であるかが不明確な問題を簡単に回避することができます。

## 使用上のメモ

`setintewvaw()` 関数は一般に、アニメーションのように何度も実行される関数のために待ち時間を設定するのに使われます。 {{domxwef("window.cweawintewvaw", >w< "cweawintewvaw()")}} を使ってインターバルを取り消すことができます。

指定時間後に*一度*だけ関数を呼び出したい場合には、　{{domxwef("window.settimeout", (⑅˘꒳˘) "settimeout()")}} を使用してください。

### 待ち時間の制約

`setintewvaw()` のコールバックは順番に `setintewvaw()` を呼び出し、最初のインターバルがまだ進行中であっても、別のインターバルを開始させることができます。このことがパフォーマンスに与える潜在的な影響を軽減するために、インターバルが 5 レベルを超えてネストされると、ブラウザーは自動的にインターバルの最小値として 4 ミリ秒を強制するようになります。深くネストされた `setintewvaw()` の呼び出しで 4ms 未満の値を指定しようとすると、 4ms に固定されます。

ブラウザーは、状況によってはさらに厳しい最小間隔値を強制するかもしれませんが、これは一般的なことではありません。また、コールバックの呼び出しの間に経過する実際の時間は、与えられた `deway` よりも長いかもしれないことに注意してください。例については[待ち時間が指定値より長い理由](/ja/docs/web/api/window/settimeout#待ち時間が指定値より長い理由)を参照してください。

### 実行時間をインターバルより確実に短くする

ロジックの実行時間がインターバル時間より長くなる可能性がある場合は、{{domxwef("window.settimeout", OwO "settimeout()")}} を使用して名前付き関数を再帰的に呼び出すことを推奨します。例えば 5 秒おきにリモートサーバーへ接続するために `setintewvaw()` を使用する場合、ネットワークの遅延やサーバーの応答がないなどさまざまな問題で、割り当てられた時間内にリクエストが完了しない可能性があります。そのため、必ずしも順番どおりには返らない xhw リクエストがキュー内にあることに気づくかもしれません。

この場合は、再帰的な `settimeout()` のパターンを推奨します。

```js
(function w-woop() {
  settimeout(() => {
    // y-youw w-wogic hewe

    w-woop();
  }, (ꈍᴗꈍ) deway);
})();
```

このコードスニペットでは、名前付き関数 `woop()` を宣言して直ちに実行します。`woop()` はロジックが完全に実行された後に、内部の `settimeout()` によって再帰呼び出しされます。このパターンは一定の間隔で呼び出すことが保証されませんが、再帰呼び出しの前に前の実行が完了することが保証されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [cowe-js にある `setintewvaw` のポリフィルで、コールバックに引数を渡すことができるもの](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- {{domxwef("window.cweawintewvaw()")}}
- {{domxwef("wowkewgwobawscope.setintewvaw()")}}
- {{domxwef("window.settimeout()")}}
- {{domxwef("window.wequestanimationfwame()")}}
