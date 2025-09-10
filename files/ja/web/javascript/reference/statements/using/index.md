---
title: using
slug: Web/JavaScript/Reference/Statements/using
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

**`using`** 宣言は、同期的に破棄されるブロックスコープのローカル変数を宣言します。 {{jsxref("Statements/const", "const")}} と同様に、 `using` で宣言された変数は初期化が必要であり、再代入できません。変数の値は `null`、`undefined`、または [`[Symbol.dispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) メソッドを持つオブジェクトのいずれかでなければなりません。変数がスコープ外になると、リソースを解放するために、オブジェクトの `[Symbol.dispose]()` メソッドが呼び出されます。

## 構文

```js-nolint
using name1 = value1;
using name1 = value1, name2 = value2;
using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : 宣言する変数の名前。各変数名は、 JavaScript で有効な[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)でなければならず、[構造分解バインドパターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)であってはなりません。
- `valueN`
  - : 変数の初期値。有効な式であれば何でも指定可能ですが、その値は `null`、`undefined`、または `[Symbol.dispose]()` メソッドを持つオブジェクトのいずれかでなければなりません。

## 解説

この宣言は以下の場所で使用できます。

- [ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)の中
- 任意の[関数の本体](/ja/docs/Web/JavaScript/Reference/Statements/function)または[クラスの静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)の中
- [モジュール](/ja/docs/Web/JavaScript/Guide/Modules)の最上位
- [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for)、[`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of)、[`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) ループの初期化子

特に、以下では使用できません。

- スクリプトの最上位。スクリプトのスコープは持続的であるため。
- [`switch`](/ja/docs/Web/JavaScript/Reference/Statements/switch) 文の最上位。
- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループの初期化子の中。ループ変数は文字列またはシンボルにしかならないため、これは意味をなしません。

`using` は、変数のスコープ（ブロック、関数、モジュールなど）の寿命に紐づく破棄可能リソースを宣言します。スコープが終了すると、リソースは同期的に破棄されます。変数は `null` または `undefined` の値を持つことが許されるため、リソースはオプションとすることができます。

変数が最初に宣言され、その値がヌル値でない場合、オブジェクトからディスポーザーが取得されます。 `[Symbol.dispose]` プロパティに関数が含まれていない場合、 `TypeError` が発生します。このディスポーザーはスコープに保存されます。

変数がスコープ外になると、ディスポーザーが呼び出されます。スコープ内に複数の `using` または {{jsxref("Statements/await_using", "await using")}} 宣言が含まれる場合、宣言の順序とは逆の順序で全てのディスポーザーが実行されます（宣言の種類は問いません）。全てのディスポーザーの実行が保証されます（{{jsxref("Statements/try...catch", "try...catch...finally")}} の `finally` ブロックと同様です）。破棄処理中に発生したすべてのエラー（スコープ終了の原因となった初期エラーを含む）は、 1 つの {{jsxref("SuppressedError")}} 内に集約されます。それぞれの例外は順に `suppressed` プロパティと `error` プロパティとして保持され、破棄処理完了後にこの `SuppressedError` が発生します。

`using` はリソース管理を字句スコープに結び付けます。これは便利であると同時に、時に混乱を招くこともあります。変数自体がスコープ外になった際にその値を保持する方法は多数存在するため、既に破棄されたリソースへの参照を保持したままになる可能性があります。期待通りに動作しない可能性がある例を以下に示します。エラー処理の保証を維持しつつリソースの破棄を手動で管理したい場合は、代わりに {{jsxref("DisposableStack")}} を使用することができます。

## 例

以下の例では、単純な `Resource` クラスに `getValue` メソッドと `[Symbol.dispose]()` メソッドがある状態を想定します。

```js
class Resource {
  value = Math.random();
  #isDisposed = false;

  getValue() {
    if (this.#isDisposed) {
      throw new Error("リソースは破棄されています");
    }
    return this.value;
  }

  [Symbol.dispose]() {
    this.#isDisposed = true;
    console.log("リソースが破棄されました");
  }
}
```

### `using` をブロック内で使用

`using`で宣言されたリソースは、ブロックを終了する際に破棄されます。

```js
{
  using resource = new Resource();
  console.log(resource.getValue());
  // resource はここで破棄される
}
```

### `using` を関数内で使用

関数本体内で `using` を使用することができます。この場合、リソースは関数の実行が終了したとき、 関数から戻る直前に破棄されます。

```js
function example() {
  using resource = new Resource();
  return resource.getValue();
}
```

ここで、 `resource[Symbol.dispose]()` は `getValue()` の後、 `return` 文が実行される前に呼び出されます。

リソースは、[クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)によってキャプチャされていると、宣言よりも長く存続する可能性があります。

```js
function example() {
  using resource = new Resource();
  return () => resource.getValue();
}
```

この場合、 `example()()` を呼び出すと、 `example` から返った時点でリソースが破棄されているため、常に破棄済みのリソースに対して `getValue` が実行されます。コールバックが一度呼び出された直後にリソースを破棄したい場合は、次のパターンを検討してください。

```js
function example() {
  const resource = new Resource();
  return () => {
    using resource2 = resource;
    return resource2.getValue();
  };
}
```

ここでは、 `const` 宣言されたリソースの別名を `using` 宣言されたリソースとして作成しています。これにより、コールバックが呼び出された後にのみリソースが破棄されます。コールバックが一度も呼び出されない場合、リソースは解放されないことに注意してください。

### `using` をモジュール内で使用

モジュールの最上位レベルで `using` を使用できます。この場合、リソースはモジュールの実行が終了したときに破棄されます。

```js
using resource = new Resource();
export const value = resource.getValue();
// リソースはここで破棄される
```

`export using` は不正な構文ですが、`using` を使用して他の場所で宣言された変数を `export` することは可能です。

```js
using resource = new Resource();
export { resource };
```

これも推奨されません。インポーターは常に破棄されたリソースを受け取るためです。クロージャの問題と同様に、これによりリソースの値が変数よりも長く存続することになります。

### `using` を `for...of` で使用

`for...of` ループの初期化子で `using` を使用することができます。この場合、リソースはループの反復ごとに破棄されます。

```js
const resources = [new Resource(), new Resource(), new Resource()];
for (using resource of resources) {
  console.log(resource.getValue());
  // リソースはここで破棄される
}
```

### 複数の `using`

以下の 2 つは、複数の使い捨てリソースを宣言する同等の方法です。

```js
using resource1 = new Resource(),
  resource2 = new Resource();

// または

using resource1 = new Resource();
using resource2 = new Resource();
```

どちらの場合でも、スコープが終了する際に `resource2` が `resource1` より先に破棄されます。これは `resource2` が `resource1` に依存している可能性があるためで、`resource2` が破棄される時点で `resource1` がまだ利用可能であることを保証するために先に破棄されるのです。

### オプションの `using`

`using` では変数に `null` または `undefined` の値を持たせられるため、リソースの有無を任意にすることができます。つまり、以下のような記述は不要です。

```js
function acquireResource() {
  // ここで、このリソースに割り当てる空間が存在するかどうかなど、
  // 現実世界に関連する条件を想像してください。
  if (Math.random() < 0.5) {
    return null;
  }
  return new Resource();
}

const maybeResource = acquireResource();

if (maybeResource) {
  using resource = maybeResource;
  console.log(resource.getValue());
} else {
  console.log(undefined);
}
```

このようにすることができます。

```js
using resource = acquireResource();
console.log(resource?.getValue());
```

### `using` 宣言で変数を使用しない

`using` 文を使用すれば、変数を使用せずにリソースの自動破棄が実現できます。これは、ロックの作成など、ブロック内でコンテキストを設定するのにとても便利です。

```js
{
  using _ = new Lock();
  // ここで並行処理を実行
  // ここでロックが解除される
}
```

`_` は通常の識別子ですが、使い捨て変数として使用するのが慣例です。変数を使用せずに複数の宣言を行うには、`_` を接頭辞とした変数名など、異なる名前を使用する必要があります。

### 初期化と一時的なデッドゾーン

`using` 変数は、 `let` および `const` 変数と同様の[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)の制約を受けます。これは、変数が初期化される前にアクセスできないことを意味します。つまり、リソースの有効なライフタイムは、厳密に初期化からそのスコープの終了までとなります。これにより、 [RAII](https://https://ja.wikipedia.org/wiki/RAII) スタイルのリソース管理が可能になります。

```js
let useResource;
{
  useResource = () => resource.getValue();
  useResource(); // Error: Cannot access 'resource' before initialization
  using resource = new Resource();
  useResource(); // 有効
}
useResource(); // Error: Resource is disposed
```

### エラー処理

`using` 宣言は、エラー発生時のリソース解放管理において最も有用です。注意を怠ると、エラーによって後続のコードが実行されなくなるため、一部のリソースがリークする可能性があります。

```js
function handleResource(resource) {
  if (resource.getValue() > 0.5) {
    throw new Error("リソース値が大きすぎます");
  }
}

try {
  using resource = new Resource();
  handleResource(resource);
} catch (e) {
  console.error(e);
}
```

これにより、 `handleResource` が発生させたエラーを確実に捕捉してログに記録します。また、 `handleResource` がエラーを発生させたかどうかにかかわらず、 `try` ブロックを終了する前にリソースは破棄されます。

ここで、`using`を使用しない場合、次のようなことを行う可能性があります。

```js example-bad
try {
  const resource = new Resource();
  handleResource(resource);
  resource[Symbol.dispose]();
} catch (e) {
  console.error(e);
}
```

しかし、 `handleResource()` がエラーを発生させた場合、制御は `resource[Symbol.dispose]()` に到達せず、リソースがリークします。さらに、リソースが 2 つ存在する場合、先行する破棄処理で発生したエラーが後続の破棄処理の実行を妨げ、より多くのリークを引き起こす可能性があります。

より複雑な場合、つまりディスポーザ自身がエラーを発生させる場合を考えてみましょう。

```js
class CantDisposeMe {
  #name;
  constructor(name) {
    this.#name = name;
  }
  [Symbol.dispose]() {
    throw new Error(`${this.#name} を破棄できません`);
  }
}

let error;

try {
  using resource1 = new CantDisposeMe("resource1");
  using resource2 = new CantDisposeMe("resource2");
  throw new Error("メインブロックでのエラー");
} catch (e) {
  error = e;
}
```

発生したエラーはブラウザーのコンソールで確認できます。その構造は以下の通りです。

```plain
SuppressedError: An error was suppressed during disposal
  suppressed: SuppressedError: An error was suppressed during disposal
    suppressed: Error: resource1 を破棄できません
    error: Error: メインブロックでのエラー
  error: Error: resource2 を破棄できません
```

ご覧の通り、 `error` には破棄処理中に発生したすべてのエラーが {{jsxref("SuppressedError")}} として格納されています。追加されるそれぞれのエラーは `error` プロパティとして追加され、元のエラーは `suppressed` プロパティとして追加されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("Symbol.dispose")}}
- {{jsxref("DisposableStack")}}
