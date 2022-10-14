---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
---

{{JSRef}}

**`WeakRef`** オブジェクトにより、ガベージコレクションが行われることを妨げない他のオブジェクトへの弱い参照を保持します。

## 解説

`WeakRef` オブジェクトはオブジェクトへの弱い参照を含み、これは*ターゲット*または*リファレント*と呼ばれます。オブジェクトへの弱い参照は、ガベージコレクターによるオブジェクトの回収を妨げない参照です。対照的に、通常の (または*強い*) 参照はオブジェクトをメモリに保持します。オブジェクトが強い参照を持たなくなった場合、 JavaScript エンジンのガベージコレクターはオブジェクトを破棄してメモリを再取得することがあります。そうなると、弱い参照からオブジェクトを取得することはできなくなります。

> **メモ:** 下記の[できる限り避ける](#Avoid_where_possible)の節をご覧ください。正しい `WeakRef` の使用は注意深く考える必要があり、可能であれば避けるのが最良です。

## コンストラクター

- {{jsxref("WeakRef/WeakRef", "WeakRef()")}}
  - : 新しい `WeakRef` オブジェクトを生成します。

## インスタンスメソッド

- {{jsxref("WeakRef.deref", "WeakRef.prototype.deref()")}}
  - : `WeakRef` オブジェクトの対象オブジェクトを返すか、対象オブジェクトが既に回収されている場合は `undefined` を返します。

## 可能な限り避ける

`WeakRef` の正しい使用には慎重な検討が必要であり、可能であれば避けた方が良いでしょう。また、仕様で保証されていない特定の動作に依存しないことも重要です。ガベージコレクションがいつ、どのように、そしてどのように発生するかは、使用している JavaScript エンジンの実装に依存します。あるエンジンで観察した動作が、別のエンジン、同じエンジンの別のバージョン、あるいは同じエンジンの同じバージョンでも少し違う状況では異なる可能性があります。ガベージコレクションは、 JavaScript エンジンの実装者が常に解決策を改良している難しい問題です。

ここでは、 WeakRef の提案の著者がその[説明文書](https://github.com/tc39/proposal-weakrefs/blob/master/README.md)に盛り込んだ具体的なポイントをいくつか紹介します。

> [ガベージコレクション](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%99%E3%83%BC%E3%82%B8%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3)は複雑です。アプリケーションもしくはライブラリが WeakRef のガベージコレクションの解放処理か、即時にファイナライザ (解放処理のコールバック) の呼出処理に依存している場合は、予想した動作とは異なる動作を行うかもしれません。解放処理は予想よりもかなり後に行われるか、もしくは行われないからです。以下に挙げた様々な原因が考えられます。
>
> - One object might be garbage-collected much sooner than another object, even if they become unreachable at the same time, e.g., due to generational collection.
> - Garbage collection work can be split up over time using incremental and concurrent techniques.
> - Various runtime heuristics can be used to balance memory usage, responsiveness.
> - The JavaScript engine may hold references to things which look like they are unreachable (e.g., in closures, or inline caches).
> - Different JavaScript engines may do these things differently, or the same engine may change its algorithms across versions.
> - Complex factors may lead to objects being held alive for unexpected amounts of time, such as use with certain APIs.

## WeakRef における注意

Some notes on `WeakRef`s:

- If your code has just created a `WeakRef` for a target object, or has gotten a target object from a `WeakRef`'s `deref` method, that target object will not be reclaimed until the end of the current JavaScript [job](https://tc39.es/ecma262/#job) (including any promise reaction jobs that run at the end of a script job). That is, you can only "see" an object get reclaimed between turns of the event loop. This is primarily to avoid making the behavior of any given JavaScript engine's garbage collector apparent in code — because if it were, people would write code relying on that behavior, which would break when the garbage collector's behavior changed. (Garbage collection is a hard problem; JavaScript engine implementers are constantly refining and improving how it works.)
- If multiple `WeakRef`s have the same target, they're consistent with one another. The result of calling `deref` on one of them will match the result of calling `deref` on another of them (in the same job), you won't get the target object from one of them but `undefined` from another.
- If the target of a `WeakRef` is also in a {{jsxref("FinalizationRegistry")}}, the `WeakRef`'s target is cleared at the same time or before any cleanup callback associated with the registry is called; if your cleanup callback calls `deref` on a `WeakRef` for the object, it will receive `undefined`.
- You cannot change the target of a `WeakRef`, it will always only ever be the original target object or `undefined` when that target has been reclaimed.
- A `WeakRef` might never return `undefined` from `deref`, even if nothing strongly holds the target, because the garbage collector may never decide to reclaim the object.

## 例

### WeakRef オブジェクトの使用

This example starts a counter shown in a DOM element, stopping when the element doesn't exist anymore:

```js
class Counter {
  constructor(element) {
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // Get the element from the weak reference, if it still exists
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        // The element doesn't exist anymore
        console.log("The element is gone.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
counter.start();
setTimeout(() => {
  document.getElementById("counter").remove();
}, 5000);
```

## 仕様書

| 仕様書                                                                           |
| -------------------------------------------------------------------------------- |
| {{SpecName('WeakRefs', '#sec-weak-ref-objects', 'WeakRef')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.WeakMap")}}

## 関連情報

- {{jsxref("FinalizationRegistry")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
