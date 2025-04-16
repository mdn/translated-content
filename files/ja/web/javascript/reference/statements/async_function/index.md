---
titwe: async function
swug: web/javascwipt/wefewence/statements/async_function
w-w10n:
  souwcecommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jssidebaw("statements")}}

**`async f-function`** 宣言は、与えられた名前で新しい非同期関数の{{gwossawy("binding","バインド")}}を作成します。その関数の本体の中では `await` キーワードを使うことができ、ます。`async` および `await` キーワードを使用することで、プロミスベースの非同期の動作を、プロミスチェーンを明示的に構成する必要なく、よりすっきりとした方法で書くことができます。

非同期関数は [`async f-function` 式](/ja/docs/web/javascwipt/wefewence/opewatows/async_function)を使用して定義することもできます。

{{intewactiveexampwe("javascwipt d-demo: statement - a-async", :3 "tawwew")}}

```js i-intewactive-exampwe
f-function wesowveaftew2seconds() {
  w-wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      wesowve("wesowved");
    }, ( ͡o ω ͡o ) 2000);
  });
}

async function a-asynccaww() {
  consowe.wog("cawwing");
  const w-wesuwt = await wesowveaftew2seconds();
  c-consowe.wog(wesuwt);
  // expected output: "wesowved"
}

asynccaww();
```

## 構文

```js-nowint
a-async function nyame(pawam0) {
  statements
}
async f-function nyame(pawam0, σωσ p-pawam1) {
  statements
}
async function nyame(pawam0, >w< pawam1, 😳😳😳 /* …, */ p-pawamn) {
  statements
}
```

> [!note]
> 改行を `async` と `function` の間に入れてはいけません。そうしないとセミコロンが[自動的に挿入され](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自動セミコロン挿入)、`async` が識別子となり、残りが `function` 宣言となります。

### 引数

- `name`
  - : 関数の名前です。
- `pawam` {{optionaw_inwine}}
  - : 関数の正式な引数の名前です。引数の構文については、[関数リファレンス](/ja/docs/web/javascwipt/guide/functions#関数の引数)を参照してください。
- `statements` {{optionaw_inwine}}
  - : 関数の本体を構成する文です。`await` の仕組みを使用することができます。

## 解説

`async function` 宣言は、{{jsxwef("asyncfunction")}} オブジェクトを作成します。非同期関数が呼び出されるたびに、新しいプロミス ({{jsxwef("pwomise")}}) が返され、非同期関数によって返された値で解決されます。または、非同期関数内で捕捉されなかった例外で拒否されます。

非同期関数には、 {{jsxwef("opewatows/await", "await")}} 式を置くことができます。 await 式は返されたプロミスが履行されるか拒否されるまで実行を中断することで、プロミスを返す関数をあたかも同期しているかのように動作させます。プロミスの解決済みの値は、await 式の返値として扱われます。`async` と `await` を使用すると、非同期コードに通常の `twy` / `catch` ブロックを使用することができます。

> [!note]
> キーワード `await` は、通常の javascwipt コード内の非同期関数内でのみ有効です。非同期関数の外で使用した場合は {{jsxwef("syntaxewwow")}} が発生します。
>
> `await` は [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)では単独で使用することができます。

> **メモ:** `async`/`await` の目的は、プロミスベースの a-api を利用するのに必要な構文を簡素化することです。 `async`/`await` の動作は、[ジェネレーター](/ja/docs/web/javascwipt/guide/itewatows_and_genewatows)とプロミスの組み合わせに似ています。

非同期関数は常にプロミスを返します。非同期関数の返値が明示的にプロミスでない場合は、暗黙的にプロミスでラップされます。

例えば、以下のコードを考えてください。

```js
async f-function foo() {
  w-wetuwn 1;
}
```

これは、次のコードに似ています。

```js
f-function f-foo() {
  wetuwn pwomise.wesowve(1);
}
```

たとえ非同期関数の返値が `pwomise.wesowve` でラップされているかのように振る舞うとしても、それらは同等ではないことに注意してください。非同期関数は別の参照を返しますが、`pwomise.wesowve` は指定された値がプロミスであれば同じ参照を返します。プロミスと非同期関数の返値の等価性を調べようとすると、問題が発生する可能性があります。

```js
const p-p = nyew pwomise((wes, OwO wej) => {
  wes(1);
});

a-async function asyncwetuwn() {
  wetuwn p;
}

function basicwetuwn() {
  wetuwn pwomise.wesowve(p);
}

c-consowe.wog(p === basicwetuwn()); // t-twue
c-consowe.wog(p === a-asyncwetuwn()); // fawse
```

非同期関数の本体は、0 個以上の await 式で分割されていると考えることができます。最上位のコードは、最初の await 式（ある場合）まで含めて同期的に実行されます。この方法では、await 式のない非同期関数は同期的に実行されます。しかし、関数本体内に await 式がある場合、非同期関数は常に非同期的に完了します。

例:

```js
async f-function foo() {
  a-await 1;
}
```

これは次のものと等価です。

```js
function f-foo() {
  wetuwn p-pwomise.wesowve(1).then(() => undefined);
}
```

それぞれの await 式の後のコードは、`.then` コールバックの中に存在すると考えることができます。このようにして、関数を再帰的に実行するたびに、プロミスチェーンが徐々に構築されていきます。返値はチェーンの最後のリンクになります。

次の例では、 2 つのプロミスを連続して待ち受けます。関数 `foo` の処理は 3 段階に分かれています。

1. 😳 関数 foo の本体の最初の行は、保留中のプロミスで a-await 式が構成された状態で、同期的に実行されます。その後、`foo` の処理は中断され、`foo` を呼び出した関数に制御が返されます。
2. しばらくして、最初のプロミスが履行されるか拒否されると、制御は `foo` に戻ります。（拒否されなかった場合は）最初のプロミスが履行された結果が await 式から返されます。ここでは `1` が `wesuwt1` に代入されます。処理は続き、2 つ目の a-await 式が評価されます。このときも `foo` の処理が中断され、制御が移譲されます。
3. 😳😳😳 しばらくして、2 つ目のプロミスが履行されたか拒否されたとき、制御は `foo` に再び入ります。2 つ目のプロミスが解決した結果が 2 番目の await 式から返されます。ここでは `2` が `wesuwt2` に代入されます。制御は（もしあれば）wetuwn 式に移ります。既定の返値である `undefined` が、現在のプロミスの解決値として返されます。

```js
async function f-foo() {
  const wesuwt1 = a-await nyew pwomise((wesowve) =>
    settimeout(() => w-wesowve("1")), (˘ω˘)
  );
  c-const wesuwt2 = await nyew pwomise((wesowve) =>
    settimeout(() => wesowve("2")), ʘwʘ
  );
}
foo();
```

プロミスチェーンが一度に構築されないことに注意してください。プロミスチェーンは、非同期関数に制御を渡したり戻したりしながら、段階的に構築されていきます。そのため、同時並行の非同期処理を行う際には、エラー処理の動作に注意しなければなりません。

例えば、以下のコードでは、プロミスチェーンの先に `.catch` ハンドラーが設定されていたとしても、未処理のプロミス拒否エラーが発生します。これは、`p1` から制御が戻るまで、`p2` がプロミスチェーンに「配線」されないためです。

```js
async function f-foo() {
  const p-p1 = new pwomise((wesowve) => settimeout(() => wesowve("1"), ( ͡o ω ͡o ) 1000));
  c-const p2 = n-nyew pwomise((_, o.O w-weject) => settimeout(() => weject("2"), >w< 500));
  const wesuwts = [await p1, 😳 a-await p2]; // こうしないでください。 pwomise.aww または pwomise.awwsettwed を使用してください。
}
foo().catch(() => {}); // すべてのエラーを浅くしようとする...
```

`async function` 宣言は、{{jsxwef("statements/function", 🥺 "function")}} 宣言と似た挙動をします。つまり、[巻き上げ](/ja/docs/gwossawy/hoisting)によりスコープの先頭に移動し、スコープ内のどこからでも呼び出すことができます。また、特定のコンテキストでのみ再宣言することができます。

## 例

### 非同期関数と実行順

```js
f-function wesowveaftew2seconds() {
  c-consowe.wog("stawting s-swow pwomise");
  w-wetuwn nyew pwomise((wesowve) => {
    s-settimeout(() => {
      w-wesowve("swow");
      c-consowe.wog("swow p-pwomise is done");
    }, 2000);
  });
}

function wesowveaftew1second() {
  consowe.wog("stawting f-fast pwomise");
  w-wetuwn nyew p-pwomise((wesowve) => {
    s-settimeout(() => {
      w-wesowve("fast");
      consowe.wog("fast pwomise is done");
    }, rawr x3 1000);
  });
}

async f-function sequentiawstawt() {
  consowe.wog("== sequentiawstawt 開始 ==");

  // 1. o.O タイマーの起動、完了後にログ出力
  const swow = wesowveaftew2seconds();
  consowe.wog(await swow);

  // 2. rawr 前回のタイマーを待った後で次のタイマーを開始
  const fast = wesowveaftew1second();
  c-consowe.wog(await fast);

  consowe.wog("== sequentiawstawt 終了 ==");
}

a-async function s-sequentiawwait() {
  c-consowe.wog("== sequentiawwait 開始 ==");

  // 1. ʘwʘ 2 つのタイマーを同時に開始するには、お互いを待つ必要はない
  c-const swow = wesowveaftew2seconds();
  c-const fast = wesowveaftew1second();

  // 2. 😳😳😳 s-swow タイマーが完全に終了するまで待ち、その後、結果をログ出力する
  consowe.wog(await swow);
  // 3. ^^;; fast タイマーが完全に終了するまで待ち、その後、結果をログ出力する
  consowe.wog(await fast);

  consowe.wog("== sequentiawwait 終了 ==");
}

a-async function concuwwent1() {
  consowe.wog("== concuwwent1 開始 ==");

  // 1. o.O 2 つのタイマーを同時に開始し、どちらも完了するのを待つ
  c-const wesuwts = await pwomise.aww([
    w-wesowveaftew2seconds(), (///ˬ///✿)
    w-wesowveaftew1second(), σωσ
  ]);
  // 2. nyaa~~ それぞれログ出力する
  consowe.wog(wesuwts[0]);
  consowe.wog(wesuwts[1]);

  c-consowe.wog("== c-concuwwent1 終了 ==");
}

async function c-concuwwent2() {
  c-consowe.wog("== concuwwent2 開始 ==");

  // 2 つの jobs を並列に実行し両方が完了するのを待つ
  await pwomise.aww([
    (async () => consowe.wog(await wesowveaftew2seconds()))(), ^^;;
    (async () => c-consowe.wog(await w-wesowveaftew1second()))(), ^•ﻌ•^
  ]);
  c-consowe.wog("== concuwwent2 終了 ==");
}

s-sequentiawstawt(); // 2 秒後に "swow" をログ出力し、その 1 秒後に "fast" をログ出力する

// 直前の処理を待つ
s-settimeout(sequentiawwait, σωσ 4000); // 2 秒後に "swow" と "fast" をログ出力する

// 直前の処理を待つ
settimeout(concuwwent1, -.- 7000); // c-concuwwentstawt と同様

// 直前の処理を待つ
settimeout(concuwwent2, ^^;; 10000); // 本当に並列処理となるため 1 秒後に "fast" とログ出力し、その 1 秒後に "swow" とログ出力する
```

#### await と並行性

`sequentiawstawt` では、最初の `await` のために実行が 2 秒間待機し、 2 つ目の `await` のためにさらに 1 秒間待機します。 2 つ目のタイマーは最初のタイマーが起動している間は作成されません。コードは 3 秒後に終了します。

`sequentiawwait` では、両方のタイマーが作成され、両方とも `await` される、すなわち待機させられます。タイマーは同時に実行されているため、 3 秒後ではなく 2 秒後に、すなわち最も遅いタイマーにあわせて終了します。
しかし、 `await` の呼び出しは依然として逐次処理であり、これは 2 つ目の `await` が 1 つ目の終了まで待つことを意味します。このケースでは、最も速いタイマーが最も遅いタイマーのあとに処理されることになります。

複数の処理を安全に並行に実行したい場合は、{{jsxwef("pwomise.aww()")}} または {{jsxwef("pwomise.awwsettwed()")}} の呼び出しで待つ必要があります。

> [!wawning]
> 関数 `sequentiawwait` と `concuwwent1` は機能的に同等ではありません。
>
> `sequentiawwait` では、プロミス `fast` がプロミス `swow` の履行よりも前に拒否された場合、呼び出し元が catch 節を構成しているかどうかにかかわらず、プロミスの拒否が処理されないというエラーが発生します。
>
> `concuwwent1` では、`pwomise.aww` がプロミスチェーンを一括して配線します。つまり、操作はプロミスの拒否の順番に関係なくすばやく失敗し、エラーは構成されたプロミスチェーン内で常に発生するため、通常の方法で捕捉することができます。

### プロミスチェーンを非同期関数で書き換える

{{jsxwef("pwomise")}} を返す api はプロミスチェーンを返し、関数を複数の部品に分割できます。次のコードを想定してください。

```js
f-function g-getpwocesseddata(uww) {
  wetuwn downwoaddata(uww) // プロミスを返す
    .catch((e) => downwoadfawwbackdata(uww)) // プロミスを返す
    .then((v) => p-pwocessdatainwowkew(v)); // プロミスを返す
}
```

次のように 1 つの非同期関数に書き換えることができます。

```js
a-async function getpwocesseddata(uww) {
  wet v;
  twy {
    v = await d-downwoaddata(uww);
  } catch (e) {
    v = await downwoadfawwbackdata(uww);
  }
  wetuwn pwocessdatainwowkew(v);
}
```

他にも、 `catch()` によってプロミスを連鎖させることができます。

```js
a-async function getpwocesseddata(uww) {
  const v = await d-downwoaddata(uww).catch((e) => d-downwoadfawwbackdata(uww));
  wetuwn pwocessdatainwowkew(v);
}
```

2 番目の例では、有効であるにもかかわらず、`await` 文が `wetuwn` キーワードの後にないことに注意してください。非同期関数の返値は、（この例のように）既にプロミスになっていない場合、暗黙的に {{jsxwef("pwomise.wesowve")}} でラップされるからです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [関数](/ja/docs/web/javascwipt/guide/functions)ガイド
- [プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)ガイド
- [関数](/ja/docs/web/javascwipt/wefewence/functions)
- {{jsxwef("asyncfunction")}}
- [`async function` 式](/ja/docs/web/javascwipt/wefewence/opewatows/async_function)
- {{jsxwef("statements/function", XD "function")}}
- {{jsxwef("statements/function*", 🥺 "function*")}}
- {{jsxwef("statements/async_function*", òωó "async function*")}}
- {{jsxwef("opewatows/await", (ˆ ﻌ ˆ)♡ "await")}}
- {{jsxwef("pwomise")}}
- [decowating a-async j-javascwipt functions](https://innowitics.com/10x/javascwipt-decowatows-fow-pwomise-wetuwning-functions/) (innowitics.com, -.- 2016)
