---
title: "LockManager: request() メソッド"
slug: Web/API/LockManager/request
l10n:
  sourceCommit: bcf59ab11a8c254ab4c2616943b1bd48f9f35784
---

{{APIRef("Web Locks")}}

{{domxref("LockManager")}} インターフェイスの **`request()`** メソッドは、名前と性質を指定する引数をとり、{{domxref('Lock')}} オブジェクトを要求します。要求された `Lock` はコールバックに渡されます。この関数自体は、ロックの解放後にコールバックの結果で解決 (または拒否) され、リクエストが中止された場合は拒否される {{jsxref('Promise')}} を返します。

引数 `options` のプロパティ `mode` は、`"exclusive"` と `"shared"` のいずれかをとることができます。

一度に 1 個のコードインスタンスのみがロックを確保するべきときは、`"exclusive"` ロックを要求します。これはタブで実行するコードにもワーカーで実行するコードにも当てはまります。これはリソースへの互いに排他的なアクセスを表します。ある名前の `"exclusive"` ロックが確保されているときは、同じ名前の他のロックは一切確保できません。

コードの複数のインスタンスがリソースへのアクセスを共有できるときは、`"shared"` ロックを要求します。ある名前の `"shared"` ロックが確保されているときは、同じ名前の他の `"shared"` ロックを獲得することはできますが、その名前の `"exclusive"` ロックを獲得・確保することができません。

この共有 / 排他ロックのパターンは、読み込みは同時に複数 (それぞれが `"shared"` ロックを要求する) 行うことを許し、書き込みは 1 個だけ (単一の `"exclusive"` ロック) 許すなど、データベースのトランザクションのアーキテクチャではよくみられます。これは readers-writer パターンとして知られています。[IndexedDB API](/ja/docs/Web/API/IndexedDB_API) では、これは同じ意味の `"readonly"` および `"readwrite"` トランザクションとして公開されています。

## 構文

```js-nolint
request(name, callback)
request(name, options, callback)
```

### 引数

- `name`

  - : 要求するロックの識別子です。

- `options` {{optional_inline}}

  - : 生成するロックの性質を記述するオブジェクトです。以下の値が有効です。

    - `mode` {{optional_inline}}

      - : `"exclusive"` または `"shared"` です。デフォルト値は `"exclusive"` です。

    - `ifAvailable` {{optional_inline}}

      - : `true` に設定した場合、ロックが既に確保されていない場合のみロックを獲得できます。ロックを獲得できない場合は、コールバックには `Lock` のインスタンスではなく `null` が渡されます。デフォルト値は `false` です。

    - `steal` {{optional_inline}}

      - : `true` に設定した場合、同じ名前の既に確保されているロックはすべて解放され、待機中のすべての要求よりも優先してロックを獲得します。デフォルト値は `false` です。

        > [!WARNING]
        > 使用には注意が必要です！
        > これまでロック内で実行されていたコードの実行は継続し、新しくロックを確保したコードと衝突する可能性があります。

    - `signal` {{optional_inline}}
      - : `AbortSignal` (`AbortController` の `signal` プロパティ) です。指定され、対応する `AbortController` が中断された場合、獲得できていないロックの要求は破棄されます。

- `callback`
  - : ロックを獲得したとき呼び出されるメソッドです。ロックはコールバックから返ったとき (または例外が投げられたとき) 自動的に解放されます。通常、コールバックは非同期関数で、この場合はロックは非同期の実行が完全に完了するまで解放されません。

### 返値

ロックの解放後コールバックの結果で解決 (または拒否) し、要求が中断されると拒否される {{jsxref('Promise')}} を返します。

### 例外

このメソッドは、以下のいずれかの種類の {{domxref("DOMException")}} で拒否される {{jsxref('Promise')}} を返す可能性があります。

- `InvalidStateError` {{domxref("DOMException")}}
  - : ドキュメントが完全にアクティブでない環境のとき。
- `SecurityError` {{domxref("DOMException")}}
  - : 現在の環境でロックマネージャーが取得できないとき。
- `NotSupportedError` {{domxref("DOMException")}}
  - : `name` がハイフン (`-`) で始まるとき、`steal` と `ifAvailable` の両方が `true` に設定されているとき、`signal` が設定されておりかつ `steal` と `ifAvailable` の _いずれか_ が `true` に設定されているとき。
- `AbortError` {{domxref("DOMException")}}
  - : `signal` が設定されており、中断されたとき。

## 例

### 一般の例

以下の例では、非同期関数をコールバックとして用いる `request()` メソッドの基本的な使用法を示します。コールバックが呼び出されると、それが帰るまでこのオリジンで実行中の他のコードは `my_resource` を確保できません。

```js
await navigator.locks.request("my_resource", async (lock) => {
  // ロックを確保した
});
```

### モードの例

以下の例では、リーダーとライターがどのように `mode` を用いるかを示します。

両方の関数が `my_resource` というロックを用いることに注意してください。`do_read()` は `'shared'` モードでロックを要求します。これは、異なるイベントハンドラー・タブ・ワーカーが同時に呼び出せるということです。

```js
async function do_read() {
  await navigator.locks.request(
    "my_resource",
    { mode: "shared" },
    async (lock) => {
      // ここで読み込みを行う
    },
  );
}
```

`do_write()` 関数は、同じロックを `'exclusive'` モードで用います。これは、書き込み操作が完了するまで `do_read()` 関数内の `request()` の呼び出しを遅らせます。これはイベントハンドラー・タブ・ワーカーにまたがって適用されます。

```js
async function do_write() {
  await navigator.locks.request(
    "my_resource",
    { mode: "exclusive" },
    async (lock) => {
      // ここで書き込みを行う
    },
  );
}
```

### ifAvailable の例

既に確保されていないときのみロックを獲得するには、`ifAvailable` オプションを用います。この関数では、`await` によりメソッドをコールバックが完了するまで帰らないようにしています。ロックは利用可能なときのみ獲得できるので、この呼び出しはロックが他のどこかで解放されるのを待たずにすみます。

```js
await navigator.locks.request(
  "my_resource",
  { ifAvailable: true },
  async (lock) => {
    if (!lock) {
      // ロックが獲得できなかったので、早期脱出する
      return;
    }

    // ロックが獲得できた。このオリジンで実行中の他のコードは
    // このコードが帰るまで 'my_res_lock' ロックを確保できない。
  },
);
```

### signal の例

短時間のみロックを待機するには、`signal` オプションを用います。

```js
const controller = new AbortController();
// 200ms まで待つ
setTimeout(() => controller.abort(), 200);

try {
  await navigator.locks.request(
    "my_resource",
    { signal: controller.signal },
    async (lock) => {
      // ロックが獲得できた！
    },
  );
} catch (ex) {
  if (ex.name === "AbortError") {
    // ロックの獲得前に要求が中断された
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
