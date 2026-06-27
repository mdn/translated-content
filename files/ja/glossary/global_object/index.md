---
title: Global object (グローバルオブジェクト)
slug: Glossary/Global_object
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**グローバルオブジェクト**は JavaScript において、{{glossary("global scope", "グローバルスコープ")}}を表す{{glossary("object", "オブジェクト")}}です。

> [!NOTE]
> {{glossary("global scope", "グローバルスコープ")}}内のオブジェクトであるグローバルに利用可能なオブジェクトは、グローバルオブジェクトと呼ばれることもありますが、厳密に言えば、環境ごとにグローバルオブジェクトは 1 つしか存在しません。

どの JavaScript 環境においても、常にグローバルオブジェクトが定義されています。グローバルオブジェクトのインターフェイスは、スクリプトが実行されている実行コンテキストによって異なります。例を示します。

- ウェブブラウザーでは、明示的にバックグランドタスクとして起動されるコードを除き、 {{domxref("Window")}} がグローバルオブジェクトになります。ウェブにおける JavaScript コードのほとんどはこのケースに該当します。
- {{domxref("Worker")}} 内で実行されるコードでは {{domxref("WorkerGlobalScope")}} オブジェクトがグローバルオブジェクトになります。
- {{Glossary("Node.js")}} で実行されるスクリプトの場合、 [`global`](https://nodejs.org/api/globals.html#globals_global) と呼ばれるオブジェクトがグローバルオブジェクトになります。

[`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) グローバルプロパティを使用すると、現在の環境に関係なくグローバルオブジェクトにアクセスすることができます。

スクリプトの最上位にある [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) 文および [関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function) は、グローバルオブジェクトのプロパティを作成します。一方、{{jsxref("Statements/let", "let")}} および {{jsxref("Statements/const", "const")}} 宣言は、グローバルオブジェクトのプロパティを作成することはありません。

グローバルオブジェクトのプロパティは、自動的に{{glossary("global scope", "グローバルスコープ")}}に追加されます。

JavaScriptでは、グローバルオブジェクトは常に自分自身への参照を保持しています。

```js
console.log(globalThis === globalThis.globalThis); // true （どこでも）
console.log(window === window.window); // true （ブラウザーで）
console.log(self === self.self); // true （ブラウザーまたはウェブワーカーで）
console.log(frames === frames.frames); // true （ブラウザーで）
console.log(global === global.global); // true （Node.js で）
```

## 関連情報

- 関連用語:
  - {{glossary("global scope", "グローバルスコープ")}}
  - {{glossary("object", "オブジェクト")}}
- {{jsxref("globalThis")}}
- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- {{domxref("Window.window")}}
- {{domxref("Window.self")}}
- {{domxref("Window.frames")}}
- {{domxref("WorkerGlobalScope.self")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
