---
title: Navigator.hardwareConcurrency
slug: Web/API/Navigator/hardwareConcurrency
---

{{APIRef("HTML DOM")}}

**`navigator.hardwareConcurrency`** は読み取り専用のプロパティで、ユーザーのコンピューター上でスレッドを実行するために使用可能な論理プロセッサー数を返します。

## 構文

```js
logicalProcessors = window.navigator.hardwareConcurrency
```

## 値

論理プロセッサーのコア数を示す数値です。

現代のコンピューターは CPU に複数の物理プロセッサーのコアがあります (通常は 2 コアか 4 コア)。しかし、通常それぞれの物理コアは高度なスケジューリング技術を用いて、一度に複数スレッドを実行することができます。 したがって、例えば 4 コアの CPU は 8 個の**論理プロセッサーコア**を提供することができます。論理プロセッサーのコア数は、コンテキスト切り替えを必要とせずに一度に効果的に実行できるスレッドの数を測定するために利用できます。

しかしながら、ブラウザーはより少ない論理コア数を報告することを選択することで、一度に実行できる {{domxref("Worker")}} の数をより正確に表すことがあります。したがって、この数値をユーザーのシステムのコア数の絶対的な測定値として扱わないようにしてください。

## 例

この例では、ブラウザーが報告した論理プロセッサーごとに {{domxref("Worker")}} が 1 つ作られ、新しいワーカーへの参照と、そのワーカーをまだ使用しているかどうかを示す論理値の値を含むレコードを作っています。これらのオブジェクトは後で使用するために配列に順々に格納されています。後でリクエストを処理するために使うワーカーのプールを作っています。

```js
let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker('cpuworker.js'),
    inUse: false
  };
  workerList.push(newWorker);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Navigator")}}
- {{domxref("WorkerNavigator")}}
