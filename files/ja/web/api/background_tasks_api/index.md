---
title: バックグラウンドタスク API
slug: Web/API/Background_Tasks_API
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("Background Tasks")}}

**協調的スケジューリングのバックグラウンドタスク API**（バックグラウンドタスク API または `requestIdleCallback()` API とも呼ばれます）は、ユーザーエージェントが実行するための空き時間があると判断したときに自動的に実行されるタスクをキューに登録する機能を提供します。

> [!NOTE]
> この API は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では利用できません。

## 概念と使い方

ブラウザーのメインスレッドは、そのイベントループを中心に構成されています。このコードは、現在表示されている {{domxref("Document")}} に対する保留中の更新を描画し、ページが実行する必要のある JavaScript コードを実行し、入力機器からのイベントを受け入れ、それらのイベントを受信する要素に配信します。さらに、イベントループはオペレーティングシステムとの対話、ブラウザー自身のユーザーインターフェイスの更新なども処理します。これは非常に忙しいコードの塊であり、メインの JavaScript コードもこれらすべてと一緒にこのスレッド内で実行される可能性があります。確かに、DOM に変更を加えることができるコードのほとんど（あるいはすべて）がメインスレッドで実行されているでしょう。なぜなら、ユーザーインターフェイスの変更はメインスレッドでのみ利用可能であることが一般的だからです。

イベント処理と画面の更新は、ユーザーがパフォーマンスの問題に気付く最も分かりやすい方法のうちの 2 つであるため、コードがウェブの良き市民であり、イベントループの実行の停滞を防ぐのに役立つことが重要です。過去には、可能な限り効率的なコードを書き、できるだけ多くの作業を[ワーカー](/ja/docs/Web/API/Web_Workers_API)に分担させること以外に、これを確実に行う方法はありませんでした。{{domxref("Window.requestIdleCallback()")}} を使用すると、ブラウザーがシステムの遅延を引き起こすことなく、安全に使用できる時間をコードに伝えることができるようになるため、ブラウザーのイベントループがスムーズに実行されるように積極的に関与できるようになります。指定された制限内にとどまることで、ユーザー体験を大幅に向上させることができます。

### アイドルコールバックを最大限に活用する

アイドルコールバックは、システムを最大限に活用しつつ過負荷による遅延やその他のパフォーマンス問題を回避するため、コードがイベントループと連携する手段を提供することを目的としているため、その使用方法については慎重に検討すべきです。

- **優先度の低いタスクにアイドルコールバックを使用してください。** どれだけ多くのコールバックが確立されているか、ユーザーのシステムがどれだけ忙しいかはわからないため、コールバックがどれだけ頻繁に実行されるかはわかりません（`timeout` を指定しない限り）。イベントループの各パス（または画面更新サイクルごと）に、アイドルコールバックが実行されることが保証されているわけではありません。イベントループが利用可能なすべての時間を使用する場合、運が悪いことになります（再度、`timeout` を使用した場合を除きます）。
- **アイドルコールバックは、割り当てられた時間を超過しないよう最善を尽くす必要があります。** 指定された時間制限を超えた場合でも（大幅に超えた場合でも）、ブラウザー、コード、およびウェブ全体は通常通り動作し続けますが、時間制限は、システムにイベントループの現在のパスを終了し、他のコードの動作が途切れたりアニメーション効果が引っかかったりすることなく次のパスに進むための十分な時間を残すことを確実にすることを目的としています。現在、{{domxref("IdleDeadline.timeRemaining", "timeRemaining()")}} の上限は 50 ミリ秒ですが、実際には、複雑なサイトでイベントループがすでにその時間を消費している可能性があるため、その時間よりも短いことがよくあります。ブラウザー拡張機能がプロセッサー時間を必要とする場合なども同様です。
- **アイドルコールバック内で DOM に変更を加えることは避けてください。** コールバックが実行される時点では、現在のフレームの描画はすでに終了しており、すべてのレイアウトの更新と計算も完了しています。レイアウトに影響を与える変更を加えると、ブラウザーが停止して、そうでなければ不要な再計算を行う必要がある状況を強制する可能性があります。コールバックが DOM を変更する必要がある場合は、{{domxref("Window.requestAnimationFrame()")}} を使用してそれをスケジュールする必要があります。
- **長時間実行されるタスクは避けてください。** アイドルコールバックは、予測不可能な時間がかかる可能性のあることを避ける必要があります。たとえば、レイアウトに影響を与える可能性のあるものは避ける必要があります。また、{{jsxref("Promise")}} の解決または拒否も避けるべきです。なぜなら、コールバックが戻るとすぐに、そのプロミスの解決または拒否のハンドラーが呼び出されるからです。
- **必要に応じてタイムアウトを使用してください。ただし、必要な場合にのみ使用してください。** タイムアウトを使用すると、コードが適時に実行されることを保証できますが、ブラウザーに対して、パフォーマンスを妨げることなく実行できる十分な時間がない場合に呼び出すように指示することで、遅延やアニメーションの引っかかりを引き起こす可能性もあります。

## インターフェイス

バックグラウンドタスク API は、1 つの新しいインターフェイスのみを追加します。

- {{domxref("IdleDeadline")}}
  - : アイドルコールバックに渡されるオブジェクトの型を表します。このオブジェクトは、コールバックが実行されるまでにどれだけの時間が残っているかを判断するためのメソッドと、コールバックがタイムアウトによって実行されているかどうかを判断するためのプロパティを提供します。

{{domxref("Window")}} インターフェイスもこの API によって拡張され、新しい {{domxref("window.requestIdleCallback", "requestIdleCallback()")}} および {{domxref("window.cancelIdleCallback", "cancelIdleCallback()")}} メソッドを提供します。

## 例

この例では、{{domxref("window.requestIdleCallback", "requestIdleCallback()")}} を使用して、ブラウザーがアイドル状態になる時間に時間のかかる優先度の低いタスクを実行する方法を見ていきます。さらに、この例では、{{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}} を使用して文書コンテンツの更新をスケジュールする方法も示しています。

以下では、この例の HTML と JavaScript のみを示します。CSS は、この機能を理解する上で特に重要ではないため、示されていません。

### HTML

何を達成しようとしているのかを把握するために、HTML を見てみましょう。ここでは、操作の進行状況を表示するために使用されるボックス（`id="container"`）と、テキスト出力を表示するために使用される 2 番目のメインボックス（`id="logBox"`）が確立されています。

```html
<p>
  この例では、バックグラウンドでタスクを実行しながら、進行状況を表示します。
</p>

<div id="container">
  <div class="label">量子フィラメント・タキオン放射の解読…</div>

  <progress id="progress" value="0"></progress>

  <button class="button" id="startButton">Start</button>

  <div class="label counter">
    Task <span id="currentTaskNumber">0</span> of
    <span id="totalTaskCount">0</span>
  </div>
</div>

<div id="logBox">
  <div class="logHeader">Log</div>
  <div id="log"></div>
</div>
```

進捗ボックスは、進捗を表示するために {{HTMLElement("progress")}} 要素を使用し、進捗に関する数値情報を提示するために変更されるセクションを備えたラベルも使用しています。さらに、"Start" ボタン（ID が "startButton" と創造的に付けられています）もあり、ユーザーはこれを使用してデータ処理を開始します。

```css hidden
body {
  font-family: "Open Sans", "Lucida Grande", "Arial", sans-serif;
  font-size: 16px;
}

#logBox {
  margin-top: 16px;
  width: 400px;
  height: 500px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
}

.logHeader {
  margin: 0;
  padding: 0 6px 4px;
  height: 22px;
  background-color: lightblue;
  border-bottom: 1px solid black;
  border-radius: 6px 6px 0 0;
}

#log {
  font:
    12px "Courier",
    monospace;
  padding: 6px;
  overflow: auto;
  overflow-y: scroll;
  width: 388px;
  height: 460px;
}

#container {
  width: 400px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid black;
  box-shadow: 4px 4px 2px black;
  display: block;
  overflow: auto;
}

.label {
  display: inline-block;
}

.counter {
  text-align: right;
  padding-top: 4px;
  float: right;
}

.button {
  padding-top: 2px;
  padding-bottom: 4px;
  width: 100px;
  display: inline-block;
  float: left;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  margin-top: 0;
  color: white;
  background-color: darkgreen;
}

#progress {
  width: 100%;
  padding-top: 6px;
}
```

### JavaScript

これで文書の構造が定義されたので、実際に作業を行う JavaScript コードを構築しましょう。目標は、関数を呼び出すリクエストをキューに追加できるようにし、システムが十分にアイドル状態になるたびにそれらの関数を実行するアイドルコールバックを備えたものにすることです。

#### 変数の宣言

```js
const taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;
```

これらの変数は、実行待ちのタスクのリストを管理するとともに、タスクキューとその実行に関する状態情報を管理するために使用されます。

- `taskList` はオブジェクトの配列 ({{jsxref("Array")}}) で、それぞれが実行待機中のタスクを表します。
- `totalTaskCount` はキューに追加されたタスクの数を数えるカウンターです。この値は増加するのみで、減少することはありません。この値を用いて、全体の作業量に対する進捗率をパーセントで表示するための計算を行います。
- `currentTaskNumber` は、これまでに処理されたタスクの数を追跡するために使用されます。
- `taskHandle` は、現在実行中のタスクへの参照です。

```js
const totalTaskCountElem = document.getElementById("totalTaskCount");
const currentTaskNumberElem = document.getElementById("currentTaskNumber");
const progressBarElem = document.getElementById("progress");
const startButtonElem = document.getElementById("startButton");
const logElem = document.getElementById("log");
```

次に、操作する必要があるいくつかの DOM 要素への参照を表す変数を用意します。
対象となる要素は次のとおりです。

- `totalTaskCountElem` は、作成されたタスクの総数を進捗ボックスのステータス表示に挿入するために使用する {{HTMLElement("span")}} です。
- `currentTaskNumberElem` は、これまでに処理されたタスクの数を表示するために使用される要素です。
- `progressBarElem` は、これまでに処理されたタスクの割合を示す {{HTMLElement("progress")}} 要素です。
- `startButtonElem` はスタートボタンです。
- `logElem`は、ログ出力されたテキストメッセージを挿入する対象となる {{HTMLElement("div")}} です。

```js
let logFragment = null;
let statusRefreshScheduled = false;
```

最後に、他のアイテムのために 2 つの変数を用意します。

- `logFragment` は、次のアニメーションフレームがレンダリングされる際にログに追加するコンテンツを作成するために、ログ記録関数によって生成される {{domxref("DocumentFragment")}} を格納するために使用されます。
- `statusRefreshScheduled` は、次のフレームに向けてステータス表示ボックスの更新を既にスケジュール済みかどうかを追跡するために使用され、これによりフレームごとに一度だけ更新が行われるようにします。

```js hidden
window.requestIdleCallback ||= (handler) => {
  const startTime = Date.now();

  return setTimeout(() => {
    handler({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50.0 - (Date.now() - startTime));
      },
    });
  }, 1);
};

window.cancelIdleCallback ||= (id) => {
  clearTimeout(id);
};
```

#### タスクキューの管理

次に、実行が必要なタスクの管理方法を見ていきましょう。これを行うために、タスクの FIFO キューを作成し、アイドルコールバック期間中に時間が許す限り実行します。

##### タスクをキューに入れる

まず、将来の実行のためにタスクをキューに入れる関数が必要です。その関数 `enqueueTask()` は次のようになります。

```js
function enqueueTask(taskHandler, taskData) {
  taskList.push({
    handler: taskHandler,
    data: taskData,
  });

  totalTaskCount++;

  taskHandle ||= requestIdleCallback(runTaskQueue, { timeout: 1000 });

  scheduleStatusRefresh();
}
```

`enqueueTask()` は、入力として 2 つの引数を受け取ります。

- `taskHandler` は、タスクを処理するために呼び出される関数です。
- `taskData` は、タスクハンドラーに入力引数として渡され、タスクが独自のデータを受け取ることができるようにするオブジェクトです。

タスクをキューに入れるには、`taskList` 配列にオブジェクトを[追加](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push)します。オブジェクトには `taskHandler` と `taskData` の値が、それぞれ `handler` と `data` という名前で含まれています。次に、キューに入れられたタスクの総数を反映する `totalTaskCount` を増加させます（キューからタスクが削除されても減少させません）。

次に、アイドルコールバックがすでに作成されているかどうかを確認します。 `taskHandle` が 0 であった場合、アイドルコールバックがまだないことが分かりますので、 {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}} を呼び出して作成します。`runTaskQueue()`、これは後ほど説明しますが、この関数を呼び出すように構成されており、`timeout`は1秒に設定されているため、実際のアイドル時間がなくても、少なくとも1秒に1回は実行されるようになっています。

##### タスクの実行

アイドルコールバックハンドラーである `runTaskQueue()` は、ブラウザーが作業を実行するのに十分なアイドル時間が確保されたと判断したとき、または 1 秒のタイムアウトが経過したときに呼び出されます。この関数の役割は、キューに登録されたタスクを実行することです。

```js
function runTaskQueue(deadline) {
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
    taskList.length
  ) {
    const task = taskList.shift();
    currentTaskNumber++;

    task.handler(task.data);
    scheduleStatusRefresh();
  }

  if (taskList.length) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 });
  } else {
    taskHandle = 0;
  }
}
```

`runTaskQueue()` の中心はループであり、残存時間（{{domxref("IdleDeadline.timeRemaining", "deadline.timeRemaining")}} のチェックにより判定）が 0 より大きいことを確認できる限り、またはタイムアウト制限（{{domxref("IdleDeadline.didTimeout", "deadline.didTimeout")}} が真）となるか、タスクリストにタスクが残っている限り継続します。

キュー内の各タスクについて、実行する時間がある場合に以下の処理を行います。

1. [キューからタスクオブジェクトを除去します](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)。
2. 実行したタスクの数を追跡するために、`currentTaskNumber` を増加させます。
3. タスクのハンドラーである`task.handler`を呼び出し、タスクのデータオブジェクト (`task.data`) を渡します。
4. 進行状況の変化を反映した画面更新のスケジュール処理を行うため、`scheduleStatusRefresh()` 関数を呼び出します。

時間が過ぎると、リストにまだタスクが残っている場合、再び {{domxref("Window.requestIdleCallback", "requestIdleCallback()")}} を呼び出して、次にアイドル時間が利用可能になったときにタスクの処理を続行できるようにします。キューが空の場合、taskHandle を 0 に設定して、スケジュールされたコールバックがないことを示します。これにより、次回 `enqueueTask()` が呼び出されたときにコールバックを要求する必要があることがわかります。

#### 状態表示の更新

できるようになりたいことの 1 つは、ログ出力と進行状況情報で文書を更新することです。ただし、アイドルコールバック内から DOM を安全に変更することはできません。代わりに、{{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} を使用して、表示を更新するのに安全なときにブラウザーに呼び出してもらうようにします。

##### 表示の更新のスケジュール

DOM の更新は、`scheduleStatusRefresh()` 関数を呼び出すことでスケジュールされます。

```js
function scheduleStatusRefresh() {
  if (!statusRefreshScheduled) {
    requestAnimationFrame(updateDisplay);
    statusRefreshScheduled = true;
  }
}
```

これは単純な関数です。これは、`statusRefreshScheduled` の値を確認することで、すでに更新がスケジュールされているかどうかを確認します。これが `false` の場合、更新をスケジュールするために {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} を呼び出し、`updateDisplay()` 関数を次のアニメーションフレームで呼び出すように指示します。

##### 表示の更新

`updateDisplay()` 関数は、進捗ボックスとログ出力の中身を描画する責任があります。これは、次のフレームのレンダリング処理中に変更を適用しても安全な状態にある DOM に対して、ブラウザーによって呼び出されます。

```js
function updateDisplay() {
  const scrolledToEnd =
    logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;

  if (totalTaskCount) {
    if (progressBarElem.max !== totalTaskCount) {
      totalTaskCountElem.textContent = totalTaskCount;
      progressBarElem.max = totalTaskCount;
    }

    if (progressBarElem.value !== currentTaskNumber) {
      currentTaskNumberElem.textContent = currentTaskNumber;
      progressBarElem.value = currentTaskNumber;
    }
  }

  if (logFragment) {
    logElem.appendChild(logFragment);
    logFragment = null;
  }

  if (scrolledToEnd) {
    logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
  }

  statusRefreshScheduled = false;
}
```

まず、ログ内のテキストが最下部までスクロールされた場合、`scrolledToEnd` が `true` に設定されます。それ以外の場合は `false` に設定されます。この値を用いて、ログへのコンテンツ追加完了後もログが最下部に表示されるよう、スクロール位置を更新すべきかどうかを判断します。

次に、タスクがキューに追加された場合、進捗状況とステータス情報を更新します。

1. 現在の進捗バーの最大値が、キューに追加されたタスクの現在の総数 (`totalTaskCount`) と異なる場合、表示されるタスク総数 (`totalTaskCountElem`) の内容と進捗バーの最大値を更新し、適切にスケーリングされるようにします。
2. 同様に、これまでに処理されたタスク数についても同様の処理を行います。`progressBarElem.value` が現在処理中のタスク番号 (`currentTaskNumber`) と異なる場合、現在処理中のタスクの表示値とプログレスバーの現在の値を更新します。

それから、ログへの追加を待っているテキストがある場合（すなわち、`logFragment` が `null` でない場合）、{{domxref("Node.appendChild", "Element.appendChild()")}} を使用してそれをログ要素に追加し、`logFragment` を `null` にリセットして、再び追加されないようにします。

#### ログへのテキスト追加

`log()` 関数は指定されたテキストをログに追加します。`log()` が呼び出された時点で、直ちに DOM を操作しても安全かどうかがわからないため、ログテキストは更新が安全になるまでキャッシュされます。上記の `updateDisplay()` のコード内では、アニメーションフレームの更新時にログテキストを実際にログ要素に追加する処理を確認できます。

```js
function log(text) {
  logFragment ??= document.createDocumentFragment();
  const el = document.createElement("div");
  el.textContent = text;
  logFragment.appendChild(el);
}
```

まず、`logFragment` という名前の {{domxref("DocumentFragment")}} オブジェクトが存在しない場合は、それを作成します。この要素は擬似 DOM であり、メインの DOM 自体を直ちに変更することなく要素を挿入できます。

次に、新しい {{HTMLElement("div")}} 要素を作成し、その内容を入力された `text` と一致するように設定します。
それから、その要素を `logFragment` の擬似 DOM の末尾に追加します。
`logFragment` は、DOM が変更の準備が整い、次に `updateDisplay()` が呼び出されるまでログ項目を蓄積します。

### タスクの実行

タスク管理と表示保守のコードが完成したので、実際に作業を実行するタスクを実行するコードの設定を始められます。

#### タスクハンドラー

タスクハンドラーとして使用する関数、つまりタスクオブジェクトの `handler` プロパティの値として使用される関数は `logTaskHandler()` です。これは各タスクごとにログに様々な情報を出力する単純な関数です。実際のアプリケーションでは、このコードをアイドル時間中に実行したい任意のタスクに置き換えてください。ただし、DOM を変更する操作はすべて {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} を介して処理する必要がある点に注意してください。

```js
function logTaskHandler(data) {
  log(`Running task #${currentTaskNumber}`);

  for (let i = 0; i < data.count; i += 1) {
    log(`${(i + 1).toString()}. ${data.text}`);
  }
}
```

#### メインプログラム

ユーザーが開始ボタンをクリックすると、すべての処理が開始され、`decodeTechnoStuff()` 関数が呼び出されます。

```js hidden
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

```js
function decodeTechnoStuff() {
  totalTaskCount = 0;
  currentTaskNumber = 0;
  updateDisplay();

  const n = getRandomIntInclusive(100, 200);

  for (let i = 0; i < n; i++) {
    const taskData = {
      count: getRandomIntInclusive(75, 150),
      text: `This text is from task number ${i + 1} of ${n}`,
    };

    enqueueTask(logTaskHandler, taskData);
  }
}

document
  .getElementById("startButton")
  .addEventListener("click", decodeTechnoStuff);
```

`decodeTechnoStuff()` はまず、totalTaskCount（これまでにキューに追加されたタスクの数）と currentTaskNumber（現在実行中のタスク）の値をゼロにリセットし、その後 `updateDisplay()` を呼び出して表示を「まだ何も起きていない」状態にリセットします。

この例では、ランダムな数のタスク（100 ～ 200 個）を作成します。そのために、{{jsxref("Math.random()")}} のドキュメントで例として提供されている[`getRandomIntInclusive()` 関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive)を使用して、作成するタスクの数を取得します。

それから、実際にタスクを作成するループを開始します。各タスクについて、`taskData` というオブジェクトを作成します。このオブジェクトには 2 つのプロパティが含まれています。

- `count` は、タスクからログに出力する文字列の数です。
- `text` は、`count` で指定された回数だけログに出力されるテキストです。

各タスクは、`enqueueTask()` を呼び出してキューに追加されます。この際、ハンドラー関数として `logTaskHandler()` を、関数が呼び出された際に渡すオブジェクトとして `taskData` オブジェクトを渡します。

### 結果

以下のコードは、上記のコードが実際に動作した結果です。ブラウザーの開発者ツールで試してみてください。自分のコードで活用する方法を試してみてください。

{{ EmbedLiveSample('Example', 600, 700) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.requestIdleCallback()")}}
- {{domxref("Window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
