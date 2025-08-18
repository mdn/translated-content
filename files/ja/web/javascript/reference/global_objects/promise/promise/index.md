---
title: Promise() コンストラクター
short-title: Promise()
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Promise`** コンストラクターは、主にまだプロミスに対応していない関数をラップするために使用します。

{{InteractiveExample("JavaScript デモ: Promise() コンストラクター", "taller")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // 予想される結果: "foo"
});

console.log(promise1);
// 予想される結果: [object Promise]
```

## 構文

```js-nolint
new Promise(executor)
```

> [!NOTE]
> `Promise()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでないと構築できません。`new` なしで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `executor`
  - : コンストラクターが実行する関数 ({{jsxref("function")}}) です。これは、引数として `resolveFunc` と `rejectFunc` の 2 つの関数を受け取ります。`executor` で発生したエラーはすべてプロミスを拒否させ、返値は無視されます。`executor` の意味づけについては下記で詳しく説明します。

### 返値

`new` で呼び出されると、`Promise` コンストラクターはプロミスオブジェクトを返します。このプロミスオブジェクトは、関数 `resolveFunc` または `rejectFunc` のいずれかが呼び出されると、「解決済み」になります。 `resolveFunc` を呼び出して別のプロミスオブジェクトを引数として渡すと、最初のプロミスは「解決済み」となりますが、まだ「確定済み」ではないことに注意してください。詳しくは[プロミスの解説](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#description)を参照してください。

## 解説

従来（プロミス以前）、非同期タスクはコールバックとして設計されていました。

```js
readFile("./data.txt", (error, result) => {
  // このコールバックは、最終的な `error` または `result` を含む
  // タスクが完了したときに呼び出されます。結果に依存する操作は、
  // このコールバック内で定義する必要があります。
});
// ここに書かれたコードは、`readFile` リクエストが発生すると
// すぐに実行されます。 コールバックが呼ばれるのを待たないため、
// `readFile` は「非同期」となります。
```

プロミスが提供するコードの読み取りやすさの向上と言語機能を活用するために、`Promise()` コンストラクターを使用すると、コールバックベースの API をプロミスベースの API に変換することができます。

> [!NOTE]
> タスクがすでにプロミスベースである場合、`Promise()` コンストラクターは不要でしょう。

`executor` は、コールバックの結果をプロミスに結びつけるカスタムコードです。プログラマーであるあなたが `executor` を書きます。そのシグネチャは次のようになります。

```js
function executor(resolveFunc, rejectFunc) {
  // 通常、コールバックを受け入れる非同期操作、
  // 例えば上記の `readFile` 関数のようなもの
}
```

`resolveFunc` と `rejectFunc` も関数で、実際には好きな名前を付けることができます。呼び出し形式は単純で、単一の任意の型の引数を受け付けます。

```js
resolveFunc(value); // 解決した時の呼び出し
rejectFunc(reason); // 拒否した時の呼び出し
```

`resolveFunc` に渡す `value` 引数は、別のプロミスオブジェクトにすることができます。その場合、新たに構築されたプロミスの状態は、渡されたプロミスに「ロックイン」されます（[解決](#resolve_関数)プロミスの一部として）。`rejectFunc` は、[`throw`](/ja/docs/Web/JavaScript/Reference/Statements/throw) 文に近い意味を持ちます。そのため、`reason` は通常、[`Error`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error) インスタンスです。`value` または `reason` のいずれかを省略すると、プロミスは `undefined` で履行/拒否されます。

`executor` の完了状態は、プロミスの状態に制限された効果しか持ちません。

- `executor` の返値は無視されます。 `executor` 内の `return` 文は制御フローに影響を与えるだけで、関数の一部が実行されるかどうかを変更しますが、プロミスの履行値には影響を与えません。 `executor` が終了し、今後 `resolveFunc` または `rejectFunc` が呼び出されることが不可能な場合（例えば、非同期タスクがスケジュールされていない場合）、プロミスは永遠に待機状態のままとなります。
- エラーが `executor` で発生した場合、`resolveFunc` または `rejectFunc` がすでに呼び出されていない限り、プロミスは拒否されます。

> [!NOTE]
> 待機中のプロミスの存在は、プログラムの終了を妨げることはありません。イベントループが空の場合、待機中のプロミスがあってもプログラムは終了します（必ず永遠に待機中であるため）。

以下に、典型的な流れの概要を示します。

1. コンストラクターが新しい `Promise` オブジェクトを生成する時点において、`resolveFunc` と `rejectFunc` に対応する関数ペアも生成されます。これらは `Promise` オブジェクトに「結び付け」られます。
2. `executor` は通常、コールバックベースの API を指定された非同期操作をラップします。 コールバック（元のコールバックベースの API に渡すもの）は `executor` コード内で定義されるため、`resolveFunc` と `rejectFunc` にアクセスすることができます。
3. `executor` は、`resolveFunc` および `rejectFunc` 関数を引数として、同期的に（`Promise` が構築されるとすぐに）呼び出されます。
4. `executor` 内のコードには、何らかの操作を実行する機会があります。非同期タスクの最終的な完了は、`resolveFunc`または`rejectFunc`によって発生する付随する効果を通じて、プロミスインスタンスに通知されます。この付随する効果により、`Promise` オブジェクトが「解決済み」となります。
   - `resolveFunc` が最初に呼び出されると、渡された値が[解決](#resolve_関数)されます。プロミスは、待機状態のままになる場合（別の [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) が渡された場合）、履行される場合（thenable ではない値が渡されたほとんどの場合）、または拒否される場合（不正な解決値の場合）があります。
   - `rejectFunc` が最初の呼び出された場合、プロミスは即座に拒否されます。
   - 解決関数（`resolveFunc` または `rejectFunc`）のいずれかが呼び出されると、プロミスは解決された状態になります。 `resolveFunc` または `rejectFunc` の最初の呼び出しのみがプロミスの最終的な状態に影響し、その後のいずれかの関数への呼び出しは、履行値/拒否理由を変更することも、最終的な状態を「履行済み」から「拒否済み」またはその反対に切り替えることもできません。
   - `executor` がエラーを発生して終了した場合、プロミスは拒否されます。ただし、解決関数のいずれかがすでに呼び出されている場合（プロミスがすでに解決されている場合）、そのエラーは無視されます。
   - プロミスを解決しても、必ずしもプロミスが履行されたり拒否されたり（決定）するわけではありません。プロミスは、別の thenable で解決されているため、まだ待機状態である可能性がありますが、最終的な状態は解決された thenable の状態と一致します。
5. プロミスが確定すると、（非同期で） {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, {{jsxref("Promise/finally", "finally()")}} を通じて関連付けられたハンドラーが呼び出されます。最終的な履行値または拒否理由は、履行および拒否ハンドラーの呼び出しに引数として渡されます（[プロミスの連鎖](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの連鎖)を参照）。

例えば、上記のコールバックベースの `readFile` API は、プロミスベースの API に変換することができます。

```js
const readFilePromise = (path) =>
  new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

readFilePromise("./data.txt")
  .then((result) => console.log(result))
  .catch((error) => console.error("Failed to read data"));
```

`resolve` コールバックと `reject` コールバックは、実行関数のスコープ内でのみ利用できるため、プロミスが構築された後にそれらにアクセスすることはできません。プロミスの解決方法を決定する前にプロミスを構築したい場合は、代わりに {{jsxref("Promise.withResolvers()")}} メソッドを使用することができます。このメソッドは、`resolve` と `reject` の関数を公開します。

### resolve 関数

`resolve` 関数は、以下の動作をします。

- 新しく作成したプロミスと同じ値でプロミスが呼ばれた場合（「連結された」プロミス）、プロミスは {{jsxref("TypeError")}} で拒否されます。
- [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) でない値（プリミティブ、またはプロパティが存在しない場合も含め、`then` プロパティが呼び出せないオブジェクト）で名付けられた場合、プロミスは即座にその値で履行されます。
- もし、thenable 値（別の `Promise` インスタンスを含みます）で呼び出された場合、thenable の `then` メソッドが保存され、将来呼び出されます（常に非同期で呼び出されます）。`then` メソッドは、2 つのコールバックとともに呼び出されます。このコールバックは、`executor` 関数に渡す `resolveFunc` および `rejectFunc` とまったく同じ動作をする 2 つの新しい関数です。 `then` メソッドを呼んで例外が発生すると、現在のプロミスは発生したエラーとともに拒否されます。

最後の場合、これは次のようなコードを意味しています。

```js
new Promise((resolve, reject) => {
  resolve(thenable);
});
```

Is roughly equivalent to:

```js
new Promise((resolve, reject) => {
  try {
    thenable.then(
      (value) => resolve(value),
      (reason) => reject(reason),
    );
  } catch (e) {
    reject(e);
  }
});
```

ただし、`resolve(thenable)` の場合は例外です。

1. `resolve` は同期的に呼び出されるため、たとえ `anotherPromise.then()` を通して添付されたハンドラーがまだ呼び出されていない場合でも、`resolve` または `reject` を再度呼び出しても効果はありません。
2. `then` メソッドは非同期で呼び出されるため、thenable が渡されてもプロミスは即座に解決されることはありません。

`resolve` は、`thenable.then()` が `value` として渡した何かを再び呼び出すため、リゾルバー関数は入れ子になった thenable を平坦化することができます。つまり、thenable が別の thenable を呼び出して `onFulfilled` ハンドラーを実行するような場合です。この効果により、実際のプロミスの履行ハンドラーが thenable を履行値として受け取ることは決してありません。

## 例

### コールバックベースの API をプロミスベースのものに変換

プロミス機能を指定された関数に持たせるには、適切な時点で `resolve` および `reject` 関数を呼んでプロミスを返します。

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

### resolveFunc の呼び出しの効果

`resolveFunc` を呼び出すとプロミスが解決されるため、その後 `resolveFunc` または `rejectFunc` を再度呼び出しても効果はありません。 ただし、プロミスは待機中、履行済みまたは拒否済みの、いずれかの状態を持つことがあります。

この `pendingResolved` プロミスは、作成された時点で解決されます。なぜなら、それはすでに内部プロミスの最終的な状態と一致するように「ロックイン」されているためであり、実行者内で後から `resolveOuter` や `rejectOuter` を呼び出したり、エラーが発生しても、最終的な状態には何の効果もありません。しかし、内部プロミスは 100 ミリ秒後まで待機状態であるため、外部プロミスも待機状態となります。

```js
const pendingResolved = new Promise((resolveOuter, rejectOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(() => {
        resolveInner("inner");
      }, 100);
    }),
  );
});
```

この `fulfilledResolved` プロミスは、それが解決された瞬間に履行されます。なぜなら、それはthenable ではない値で解決されるからです。しかし、それが作成された時点では、まだ `resolve` や `reject` が呼び出されていないため、未解決の状態です。未解決のプロミスは、必ず待機状態に置かれます。

```js
const fulfilledResolved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("outer");
  }, 100);
});
```

`rejectFunc` を呼び出すと、明らかにプロミスが拒否されます。しかし、`resolveFunc` コールバックが呼び出された場合でも、プロミスを即座に拒否させるには、2 つの方法があります。

```js
// 1. プロミスそのもので解決
const rejectedResolved1 = new Promise((resolve) => {
  // メモ: resolve は非同期で呼び出されなければならず、
  // rejectedResolved1変数が初期化される
  setTimeout(() => resolve(rejectedResolved1)); // TypeError: Chaining cycle detected for promise #<Promise>
});

// 2. `then` プロパティにアクセスすると発生するオブジェクトで解決
const rejectedResolved2 = new Promise((resolve) => {
  resolve({
    get then() {
      throw new Error("then プロパティが取得できません");
    },
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Promise` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-promise)
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise.withResolvers()")}}
