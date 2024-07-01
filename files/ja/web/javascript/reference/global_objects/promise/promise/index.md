---
title: Promise() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
---

{{JSRef}}

**`Promise`** コンストラクターは、主にまだプロミスに対応していない関数をラップするために使用します。

{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}

## 構文

```js
new Promise(executor);
```

### 引数

- `executor`

  - : 新しい `Promise` オブジェクトを構築する過程でコンストラクターによって呼び出される関数 ({{jsxref("function")}}) です。 `executor` は結果をプロミスに結びつけるカスタムコードです。プログラマーが `executor` を書きます。この関数の形式は次のようなものであると期待されます。

    ```js
        function(resolutionFunc, rejectionFunc){
          // 通常は非同期操作です。
        }
    ```

    `resolutionFunc` と `rejectionFunc` も関数で、実際には好きな名前を付けることができます。呼び出し形式は単純で、単一の任意の型の引数を受け付けます。

    <!-- prettier-ignore -->
    ```js
        resolutionFunc(value) // 解決した時に呼び出し
        rejectionFunc(reason) // 拒否した時に呼び出し
    ```

    `resolutionFunc` の `value` 引数は他のプロミスオブジェクトにすることもでき、そうするとそのプロミスは[プロミス連鎖](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)の中に動的に挿入されます。

    `executor` については、以下のことを理解することが重要です。

    - `executor` の返値は無視されます。
    - `executor` の中でエラーが発生した場合、プロミスは拒否されます。

    つまり、 `executor` の中のコードが効果を発揮する仕組みは、次のようなものです。

    - コンストラクターが新しい `Promise` オブジェクトを生成した時点で、対応する `resolutionFunc` と `rejectionFunc` の一対の関数も生成されます。これらは `Promise` オブジェクトに「結束」されます。
    - `executor` 内のコードは、何らかの操作を行う機会を得、その結果を（値が他の Promise オブジェクトでない場合）「解決済み」または「拒否済み」として反映し、それぞれ `resolutionFunc` または `rejectionFunc` を呼び出して終了します。
    - つまり、`executor` 内のコードは、 `resolutionFunc` や `rejectionFunc` による副次的影響を介して通信を行います。その副次的影響とは、 `Promise` オブジェクトが「解決済み」または「拒否済み」になることです。

    以上のことを踏まえて、典型的な流れをまとめてみました。

    1. `executor` の中の操作は非同期であり、コールバックを提供します。
    2. コールバックは `executor` コードの中で定義されます。
    3. コールバックは `resolutionFunc` を呼び出して終了します。
    4. `resolutionFunc` の呼び出しには `value` 引数が含まれます。
    5. `value` は繋がっている `Promise` オブジェクトに送り返されます。
    6. `Promise` オブジェクトは（非同期に）関連付けられた `.then(handleResolved)` を呼び出します。
    7. `.then(handleResolved)` から受け取った `value` は、 `handleResolved` の呼び出しで入力引数として渡されます（[プロミスの連鎖](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)を参照してください）。

### 返値

`new` を通じて呼び出された場合、 `Promise` コンストラクターはプロミスオブジェクトを返します。このプロミスオブジェクトは、 `resolutionFunc` 関数または `rejectionFunc` 関数が呼び出されると「解決」になります。なお、 `resolutionFunc` または `rejectionFunc` を別な Promise オブジェクトを引数にして呼び出すと、これが「解決」であると言えますが、「満足」であるとは言えません。

## 例

### 新しい Promise の作成

`Promise` オブジェクトは `new` キーワードとコンストラクターで作成されます。コンストラクターは「executor 関数」と呼ばれる引数を取ります。 これは 2 つの関数を引数として取ります。 1 つ目の関数 (`resolve`) は非同期タスクが成功して完了した場合に呼び出され、タスクの結果を値として返します。2 つ目の関数 (`reject`) はタスクが失敗した場合に呼び出され、失敗した理由（ふつうはエラーオブジェクト）を返します。

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // 次のどちらかを呼び出す非同期処理を行います。
  //
  //   resolve(someValue)        // 履行
  // または
  //   reject("failure reason")  // 拒否
});
```

### Promise を返す関数の作成

関数にプロミス機能を提供するには、次のように単にプロミスを返すようにします。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Promise` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-promise) で利用できます
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)
