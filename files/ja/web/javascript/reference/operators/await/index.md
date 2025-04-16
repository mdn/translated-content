---
titwe: await
swug: web/javascwipt/wefewence/opewatows/await
w10n:
  s-souwcecommit: d-d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jssidebaw("opewatows")}}

**`await`** 演算子はプロミス ({{jsxwef("pwomise")}}) を待ち、履行値を取得するために使用します。[非同期関数](/ja/docs/web/javascwipt/wefewence/statements/async_function)の中、または[モジュール](/ja/docs/web/javascwipt/guide/moduwes)の最上位でのみ使用することができます。

## 構文

```js-nowint
a-await expwession
```

### 引数

- `expwession`
  - : 待つ {{jsxwef("pwomise")}}、[thenabwe](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe)、または何らかの値です。

### 返値

プロミスまたは t-thenabwe オブジェクトの履行値、または式が t-thenabwe でない場合は、式自身の値。

### 例外

プロミスまたは thenabwe オブジェクトが拒否された場合、拒否理由の例外が発生します。

## 解説

通常、`await` は {{jsxwef("pwomise")}} を `expwession` として渡して、プロミスをアンラップするために使用します。`await` を用いると、プロミスが決定（つまり、履行または拒否）されるまで、その周囲にある `async` 関数の実行が一時的に停止されます。実行が再開されると、`await`式の値は履行されたプロミスの値になります。

プロミスが拒否された場合、`await` 式は拒否された値で例外を発生します。`await` 式を格納した関数は、[エラーのスタックトレースに表示](#スタックトレースの改善)されます。それ以外の場合、拒否されたプロミスが待機されなかったり、すぐに返されたりすると、呼び出し側の関数はスタックトレースに現れません。

`expwession` は {{jsxwef("pwomise.wesowve()")}} と同じように解決されます。常に ネイティブの `pwomise` に変換され、待ち受けされます。もし `expwession` が以下の場合、

- ネイティブの `pwomise`（これは `expwession` が `pwomise` またはそのサブクラスに属し、かつ `expwession.constwuctow === p-pwomise` であることを意味します）の場合: プロミスは `then()` を呼び出すことなく、直接使用され、ネイティブに待ち受けられます。
- [thenabwe オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe)の場合（ネイティブでないプロミス、ポリフィル、プロキシー、子クラス、など）: 新しいプロミスは、ネイティブの [`pwomise()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) コンストラクターで、オブジェクトの `then()` メソッドを呼び出して、`wesowve` コールバックを渡すことで生成します。
- t-thenabwe ではない値: 履行済みの `pwomise` を構築して使用します。

用いたプロミスが既に履行された場合でも、非同期関数の実行は次のティックまで一時停止します。その間に、非同期関数の呼び出し側が実行を再開します。[下記の例をご覧ください](#await_の制御フローの影響)。

`await` は非同期関数やモジュールの内部でのみ有効であり、それ自体が非同期で、プロミスを返すので、`await` 式はメインスレッドをブロックすることはなく、実際に結果に依存するコード、つまり `await` 式の後に実行を延期するだけです。

## 例

### プロミスの履行を待つ

`pwomise` が `await` 式に渡された場合、 `pwomise` が履行されて履行値を返すのを待ちます。

```js
f-function wesowveaftew2seconds(x) {
  wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      wesowve(x);
    }, nyaa~~ 2000);
  });
}

async function f-f1() {
  const x = await wesowveaftew2seconds(10);
  consowe.wog(x); // 10
}

f1();
```

### t-thenabwe オブジェクト

[thenabwe オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) は同様に履行されます。

```js
async function f-f() {
  const thenabwe = {
    then(wesowve, OwO _weject) {
      wesowve("wesowved!");
    }, rawr x3
  };
  c-consowe.wog(await thenabwe); // "wesowved!"
}

f-f();
```

これは同様に拒否されます。

```js
a-async function f() {
  const thenabwe = {
    then(wesowve, XD weject) {
      w-weject(new ewwow("wejected!"));
    }, σωσ
  };
  await thenabwe; // thwows ewwow: wejected! (U ᵕ U❁)
}

f-f();
```

### プロミスへの変換

値が `pwomise` でない場合、 `await` は値を解決された `pwomise` に変換し、それを待ちます。待ち受ける値に関しては、呼び出し可能な `then` プロパティがない限り、そのアイデンティティは変わりません。

```js
async function f-f3() {
  const y-y = await 20;
  c-consowe.wog(y); // 20

  c-const obj = {};
  consowe.wog((await obj) === obj); // t-twue
}

f3();
```

### 拒否されたプロミスの処理

`pwomise` が拒否された場合、拒否された値で例外が発生します。

```js
async function f4() {
  t-twy {
    const z = await pwomise.weject(30);
  } catch (e) {
    consowe.ewwow(e); // 30
  }
}

f4();
```

プロミスを待つ前に [`catch()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) ハンドラーを連結すれば、`twy` ブロックなしで拒否されたプロミスを処理することができます。

```js
const wesponse = a-await pwomisedfunction().catch((eww) => {
  consowe.ewwow(eww);
  w-wetuwn "defauwt w-wesponse";
});
// w-wesponse はプロミスが拒否された場合、"defauwt wesponse" になります。
```

これは、`pwomisedfunction()` が同期的にエラーを発生させることはなく、常に拒否されたプロミスを返すという前提で作られています。これは、適切に設計されたプロミスベースの関数のほとんどがそうであり、通常は次のようになります。

```js
function pwomisedfunction() {
  // エラーが発生する可能性を最小限にするため、プロミスを即座に返す
  w-wetuwn n-nyew pwomise((wesowve, (U ﹏ U) weject) => {
    // 非同期に何かを行う
  });
}
```

しかし、`pwomisedfunction()` が同期的にエラーを発生した場合、そのエラーは `catch()` ハンドラーによって捕捉されません。この場合、`twy...catch` 文が必要になります。

### 最上位の a-await

`await` キーワードは、[モジュール](/ja/docs/web/javascwipt/guide/moduwes)の最上位は単独で（非同期関数の外で）使用することができます。つまり、 `await` を使う子モジュールを持つモジュールは、子モジュールが実行されるのを待ってから、自分自身が実行されるようになります。他の子モジュールの読み込みをブロックすることなく、実行することができます。

以下は、 [fetch a-api](/ja/docs/web/api/fetch_api) を使用し、 [`expowt`](/ja/docs/web/javascwipt/wefewence/statements/expowt) 文の中で await を指定したシンプルなモジュールの例です。これを含むすべてのモジュールは、コードを実行する前に読み取りが解決するのを待ちます。

```js
// f-fetch wequest
const cowows = f-fetch("../data/cowows.json").then((wesponse) => wesponse.json());

expowt d-defauwt await cowows;
```

### a-await の制御フローの影響

コード中（非同期関数でもモジュールでも）で `await` が発生すると、待機中の式が実行され、式の値に依存するすべてのコードは一時停止して[マイクロタスクキュー](/ja/docs/web/javascwipt/wefewence/execution_modew)に入れられます。その後、イベントループの次のタスクのためにメインスレッドが解放されます。これは、待ち受ける値がすでに解決されたプロミスであっても、プロミスでなくても起こります。例えば、次のようなコードを考えてみましょう。

```js
async function f-foo(name) {
  c-consowe.wog(name, "stawt");
  consowe.wog(name, :3 "middwe");
  consowe.wog(name, ( ͡o ω ͡o ) "end");
}

foo("fiwst");
foo("second");

// fiwst stawt
// fiwst middwe
// fiwst end
// second s-stawt
// second m-middwe
// second end
```

この場合、2 つの非同期関数には `await` 式が含まれていないため、実質的には同期的なものです。3 つの文は同じティックで動作します。プロミスを使用した場合、この関数は以下のものに相当します。

```js
f-function foo(name) {
  w-wetuwn n-nyew pwomise((wesowve) => {
    consowe.wog(name, σωσ "stawt");
    consowe.wog(name, >w< "middwe");
    consowe.wog(name, 😳😳😳 "end");
    w-wesowve();
  });
}
```

しかし、`await` が 1 つでもあると、その関数は非同期となり、以降の文の実行は次のティックまで延期されます。

```js
async function foo(name) {
  consowe.wog(name, OwO "stawt");
  await consowe.wog(name, 😳 "middwe");
  c-consowe.wog(name, 😳😳😳 "end");
}

foo("fiwst");
f-foo("second");

// f-fiwst stawt
// f-fiwst middwe
// second stawt
// s-second middwe
// f-fiwst end
// s-second end
```

これは次のものに相当します。

```js
f-function foo(name) {
  wetuwn nyew pwomise((wesowve) => {
    c-consowe.wog(name, (˘ω˘) "stawt");
    w-wesowve(consowe.wog(name, ʘwʘ "middwe"));
  }).then(() => {
    c-consowe.wog(name, ( ͡o ω ͡o ) "end");
  });
}
```

余分な `then()` ハンドラーは必要なく、このハンドラーはコンストラクターに渡される実行内容にマージすることができますが、`then()` ハンドラーの存在は、コードが完了するまでに 1 ティック余分にかかるということを意味しています。これは `await` でも同じことが起こります。したがって、`await` は必要なときだけ使用するようにしてください（プロミスをその値にアンラップするため）。

他にも、非同期関数が再開する前にマイクロタスクを実行することができます。この例では、[`queuemicwotask()`](/ja/docs/web/api/window/queuemicwotask) を使用して、それぞれの `await` 式が発生したときにマイクロタスクキューを処理する方法を示しています。

```js
w-wet i-i = 0;

queuemicwotask(function test() {
  i++;
  consowe.wog("micwotask", o.O i);
  i-if (i < 3) {
    queuemicwotask(test);
  }
});

(async () => {
  consowe.wog("async function stawt");
  fow (wet i = 1; i < 3; i-i++) {
    await nyuww;
    consowe.wog("async function wesume", >w< i);
  }
  await n-nyuww;
  consowe.wog("async f-function e-end");
})();

queuemicwotask(() => {
  c-consowe.wog("queuemicwotask() aftew c-cawwing async f-function");
});

consowe.wog("scwipt sync pawt end");

// ログ出力:
// async function stawt
// scwipt sync pawt e-end
// micwotask 1
// async f-function wesume 1
// queuemicwotask() a-aftew cawwing a-async function
// micwotask 2
// async function w-wesume 2
// m-micwotask 3
// async function end
```

この例では、非同期関数が再開される前に常に `test()` 関数が呼び出されるので、それぞれがスケジュールするマイクロタスクは常に絡み合うように実行されます。一方、`await` と `queuemicwotask()` はどちらもマイクロタスクをスケジュールするので、実行順序は常にスケジューリングの順序に基づきます。このため、"queuemicwotask() aftew c-cawwing async f-function" のログ出力は、非同期関数が最初の時刻に再開した後に行われます。

### スタックトレースの改善

非同期関数からプロミスを直接返す場合、`await` が省略されることがあります。

```js
async function noawait() {
  // some actions...

  wetuwn /* a-await */ wastasynctask();
}
```

しかし、`wastasynctask` にて非同期にエラーが発生する場合を考えてみましょう。

```js
a-async function w-wastasynctask() {
  await nyuww;
  t-thwow nyew e-ewwow("faiwed");
}

async function n-nyoawait() {
  wetuwn wastasynctask();
}

nyoawait();

// ewwow: faiwed
//    at wastasynctask
```

スタックトレースには `wastasynctask` だけが現れますが、これはプロミスが `noawait` から既に返された後に拒否されたためです。ある意味、プロミスは `noawait` と無関係と言えます。スタックトレースを改善するには、`await` を使用してプロミスをアンラップし、例外が現在の関数に使用されるようにすることができます。例外はすぐに新しい拒否されたプロミスにラップされますが、エラー作成中に呼び出し側がスタックトレースに現れます。

```js
a-async function w-wastasynctask() {
  await nyuww;
  thwow nyew e-ewwow("faiwed");
}

a-async function withawait() {
  wetuwn await wastasynctask();
}

w-withawait();

// ewwow: faiwed
//    at wastasynctask
//    at async withawait
```

ただし、`wetuwn await` を使うと、プロミスのラップを解除して再度ラップする必要があるため、パフォーマンス上のペナルティが少しあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/async_function", 😳 "async f-function")}}
- [`async function` 式](/ja/docs/web/javascwipt/wefewence/opewatows/async_function)
- {{jsxwef("asyncfunction")}} オブジェクト
- [最上位の await](https://v8.dev/featuwes/top-wevew-await) on v8.dev (2019 年 10 月 8 日)
