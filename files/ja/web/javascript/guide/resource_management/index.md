---
title: JavaScript のリソース管理
slug: Web/JavaScript/Guide/Resource_management
l10n:
  sourceCommit: 29b752c82ab56376109a1d8b851075349b7054c4
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

このガイドでは、JavaScript でリソース管理を行う方法について説明します。リソース管理は、より高度なトピックであり、通常は JavaScript によって自動的に処理される[メモリー管理](/ja/docs/Web/JavaScript/Guide/Memory_management)とまったく同じでは ありません。リソース管理とは、JavaScript によって自動的にはクリーンアップされないリソースを管理することです。アプリケーションのロジックに支障をきたさない限り、メモリーに未使用のオブジェクトを保持していても問題ない場合もありますが、リソースリークは多くの場合、動作不良やメモリー使用量の過剰な増加につながります。したがって、これは単なる最適化のためのオプション機能ではなく、正しいプログラムを書くための核心的な機能なのです。

> [!NOTE]
> メモリー管理とリソース管理は別個のトピックですが、最終手段として、メモリー管理システムを利用してリソース管理するのが最適です。例えば、外部リソースのハンドルを表す JavaScript オブジェクトがある場合、そのハンドルがガベージコレクションされた際にリソースをクリーンアップするために {{jsxref("FinalizationRegistry")}} を作成することができます。なぜなら、その後そのリソースにアクセスする手段は確実に存在しなくなるからです。ただし、ファイナライザーが確実に実行されるとは限らないため、重要なリソースについてはこれに依存するのは得策ではありません。

## 問題

まず、管理する必要があるリソースの例をいくつか見ていきましょう。

- **ファイルハンドル**: ファイルハンドルは、ファイル内のバイト列を読み書きするために使用されます。使い終わったら、[`fileHandle.close()`](https://nodejs.org/api/fs.html#filehandleclose) を呼び出す必要があります。そうしないと、JS オブジェクトにアクセスできなくなった後もファイルが開いたままになってしまいます。リンク先の Node.js ドキュメントにも次のように記載されています。

  > `<FileHandle>` を `fileHandle.close()` メソッドで閉じなかった場合、ファイル記述子は自動的に閉じられようとするため、プロセス警告が出力されます。これにより、メモリーリークの防止に役立ちます。ただし、この動作は信頼性が低く、ファイルが閉じられない可能性があるため、この動作に依存しないでください。代わりに、常に `<FileHandle>` を明示的に閉じてください。Node.js では、将来この動作が変更される可能性があります。

- **ネットワーク接続**：{{domxref("WebSocket")}} や {{domxref("RTCPeerConnection")}} などの一部のコネクションでは、メッセージが送信されない場合、閉じなければならない場合があります。そうしないと接続が開いたままになり、接続プールのサイズはとても制限されているためです。
- **ストリームリーダー**: {{domxref("ReadableStreamDefaultReader.releaseLock()")}} を呼び出さなかった場合、ストリームはロックされ、他のリーダーが消費することができなくなります。

読み取り可能なストリームを使用した具体的な例を挙げます。

```js
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("a");
    controller.enqueue("b");
    controller.enqueue("c");
    controller.close();
  },
});

async function readUntil(stream, text) {
  const reader = stream.getReader();
  let chunk = await reader.read();

  while (!chunk.done && chunk.value !== text) {
    console.log(chunk);
    chunk = await reader.read();
  }
  // ここでロックを解除し忘れた
}

readUntil(stream, "b").then(() => {
  const anotherReader = stream.getReader();
  // TypeError: ReadableStreamDefaultReader constructor can only
  // accept readable streams that are not yet locked to a reader
});
```

ここでは、3 つのデータチャンクを出力するストリームがあります。文字 "b" を探すまで、このストリームから読み込みを行います。`readUntil` から戻った時点で、ストリームは部分的にしか消費されていないため、別のリーダーを使用して読み込みを続けることができるはずです。しかし、ロックの解放を忘れてしまったため、`reader` は利用できなくなりました。しかし、ストリームはロックされたままであり、別のリーダーを作成することができません。

この場合の解決策は単純明快です。`readUntil`の最後に`reader.releaseLock()`を呼び出せばよいのです。しかし、まだいくつかの課題が残っています。

- 一貫性がないこと: リソースごとに解放方法が異なります。例えば、`close()`、`releaseLock()`、`disconnect()` などがあります。このパターンは一般化できません。
- エラー処理: `reader.read()` の呼び出しが失敗した場合はどうなるでしょうか？その場合、`readUntil` は終了してしまい、`reader.releaseLock()` の呼び出しには決して到達しません。これは {{jsxref("Statements/try...catch", "try...finally")}} を使って対処できます。

  ```js
  async function readUntil(stream, text) {
    const reader = stream.getReader();
    try {
      let chunk = await reader.read();

      while (!chunk.done && chunk.value !== text) {
        console.log(chunk);
        chunk = await reader.read();
      }
    } finally {
      reader.releaseLock();
    }
  }
  ```

  ただし、重要なリソースを公開するたびに、この作業を行う必要があることを覚えておく必要があります。

- スコープについて: 上記の例では、`reader` は `try...finally` 文を終了した時点ですでに閉じられていますが、そのスコープ内では引き続き利用できます。つまり、閉じられた後に誤って使用してしまうことがあります。
- 複数のリソース: 異なるストリーム上に 2 つのリーダーを持つ場合、両方を解放することを忘れないようにしなければなりません。これは、そのための試みです。

  ```js
  const reader1 = stream1.getReader();
  const reader2 = stream2.getReader();
  try {
    // reader1 と reader2 で何かを行う
  } finally {
    reader1.releaseLock();
    reader2.releaseLock();
  }
  ```

  しかし、このことによってエラー処理の複雑さが増します。もし `stream2.getReader()` で例外が発生した場合、`reader1` は解放されません。また、`reader1.releaseLock()` で例外が発生した場合、`reader2` は解放されません。つまり、実際にはそれぞれのリソースの取得と解放のペアを、それぞれ独自の `try...finally` ブロックで囲む必要があります。

  ```js
  const reader1 = stream1.getReader();
  try {
    const reader2 = stream2.getReader();
    try {
      // reader1 と reader2 で何かを行う
    } finally {
      reader2.releaseLock();
    }
  } finally {
    reader1.releaseLock();
  }
  ```

`releaseLock` を呼び出すという、一見単純な作業が、すぐに複雑に絡み合った入れ子状の定型コードにつながってしまうことがお分かりいただけるでしょう。だからこそ、JavaScript ではリソース管理のための言語レベルでのサポートが提供されているのです。

## `using` 宣言と `await using` 宣言

用意されている解決策は、2種類の特別な変数宣言、{{jsxref("Statements/using", "using")}} と {{jsxref("Statements/await_using", "await using")}} です。これらは `const` に似ていますが、リソースが破棄可能である場合、変数スコープ外に出た際に自動的にリソースを解放します。前述の例を用いて、次のように書き換えることができます。

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // reader1 と reader2 で何かを行う

  // ブロックを終了する前に、reader1 と reader2 は自動的に解放される
}
```

> [!NOTE]
> この記事の執筆時点では、{{domxref("ReadableStreamDefaultReader")}} は破棄可能プロトコルを実装していません。これはあくまで仮定の例です。

まず、コードを囲む追加の波括弧に注目してください。これにより、`using` 宣言のための新しい [ブロックスコープ](/ja/docs/Web/JavaScript/Reference/Statements/block) が作成されます。`using` で宣言されたリソースは、`using` のスコープ外に出たときに自動的に解放されます。この場合、スコープ外に出るタイミングは、すべての文が実行されたとき、あるいはどこかでエラーや `return`/`break`/`continue` に遭遇したときなど、ブロックを終了するときです。

つまり、`using` は明確な有効期間を持つスコープ内でのみ使用できます。すなわち、スクリプトの最上位では使用できません。なぜなら、スクリプトの最上位にある変数は、そのページ上の今後のすべてのスクリプトにおいてスコープ内にあるため、ページがアンロードされない限り、実質的にそのリソースは解放されないことになるからです。ただし、[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)の最上位では使用可能です。モジュールのスコープは、モジュールの実行が完了すると終了するためです。

これで、`using` がいつクリーンアップを行うかがわかりました。では、どのように行われるのでしょうか。`using` を使用するには、リソースが破棄可能プロトコルを実装している要求されます。オブジェクトが [`[Symbol.dispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) メソッドを保有している場合、そのオブジェクトは破棄可能です。このメソッドは引数なしで呼び出され、クリーンアップを実行します。例えば、リーダーの場合、`[Symbol.dispose]` プロパティは `releaseLock` の単純な別名やラッパーにすることができます。

```js
// デモ用
class MyReader {
  // ラッパー
  [Symbol.dispose]() {
    this.releaseLock();
  }
  releaseLock() {
    // リソースを開放するロジック
  }
}

// または別名を使用して
MyReader.prototype[Symbol.dispose] = MyReader.prototype.releaseLock;
```

この破棄プロトコルにより、`using` は、リソースの種類を把握することなく、すべてのリソースを一貫した方法で破棄することができます。

各スコープには、宣言された順序で関連付けられたリソースのリストがあります。スコープが終了すると、リソースは `[Symbol.dispose]()` メソッドを呼び出すことで、逆順で破棄されます。例えば、上記の例では、`reader1` が `reader2` よりも前に宣言されているため、`reader2` がまず破棄され、次に `reader1` が破棄されます。あるリソースの破棄を試みた際に発生するエラーは、他のリソースの破棄を妨げることはありません。これは `try...finally` パターンと整合しており、リソース間の依存関係を考慮した設計となっています。

`await using` は `using` とよく似ています。この構文は、`await` がどこかで現れることを指示しています。つまり、リソースが宣言されたときではなく、実際に破棄される際に現れるということです。`await using` を使用するには、リソースが非同期に破棄可能である必要があります。つまり、[`[Symbol.asyncDisposable]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) メソッドを持っている必要があります。このメソッドは引数なしで呼び出され、クリーンアップが完了したときにプロミスを返します。これは、`fileHandle.close()` のようにクリーンアップが非同期である場合に有益です。この場合、破棄の結果は非同期にしか確認できません。

```js
{
  await using fileHandle = open("file.txt", "w");
  await fileHandle.write("Hello");

  // fileHandle.close() が実行され待機される
}
```

`await using` は `await` の実行が要求されるため、`await` が許可されているコンテキストでのみ使用できます。これには、`async` 関数内や、モジュール内の最上位での `await` が含まれます。

リソースのクリーンアップは並行して行われるのではなく、順次行われます。つまり、あるリソースの `[Symbol.asyncDispose]()` メソッドの返値が `await` されるまで、次のリソースの `[Symbol.asyncDispose]()` メソッドは呼び出されません。

注意点：

- `using` および `await using` はオプトインです。リソースを `let`、`const`、`var` を使用して宣言した場合、他の破棄されない値と同様に、自動的な破棄は行われません。
- `using` および `await using` を使用するには、リソースが破棄可能（または非同期破棄可能）である必要があります。リソースがそれぞれ `[Symbol.dispose]()` または `[Symbol.asyncDispose]()` メソッドを持たない場合、その宣言行で `TypeError` が発生します。ただし、リソースは `null` または `undefined` であっても構わないため、条件に応じてリソースを取得することができます。
- `const` と同様に、`using` と `await using` の変数には再代入はできませんが、それらが保持するオブジェクトのプロパティを変更することは可能です。ただし、`[Symbol.dispose]()`/`[Symbol.asyncDispose]()` メソッドは宣言時にすでに保存されるため、宣言後にメソッドを変更してもクリーンアップには影響しません。
- スコープとリソースのライフタイムを混同する際には、いくつか注意点があります。例については、[`using`](/ja/docs/Web/JavaScript/Reference/Statements/using#examples) を参照してください。

## `DisposableStack` オブジェクトと `AsyncDisposableStack` オブジェクト

`using` と `await using` は特別な構文です。構文は便利で、複雑さの多くを隠してくれますが、時には手動で行う必要がある場合もあります。

例えば、リソースをこのスコープの終了時に破棄するのではなく、それより後のスコープで破棄したい場合はどうでしょうか。次のようなケースを考えてみてください。

```js
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
```

前述の通り、`using` は `const` と同様に、初期化する必要があり、再代入することはできないので、次のように書こうとするかもしれません。

```js
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
```

しかし、これではすべてのロジックを `if` や `else` の内部に記述しなければならず、コードの重複が発生してしまいます。私たちが実現したいのは、あるスコープでリソースを取得・登録し、別のスコープで破棄することです。そのためには {{jsxref("DisposableStack")}} を使用することができます。これは、破棄可能なリソースの集合を保持し、それ自体が破棄可能なオブジェクトです。

```js
{
  using disposer = new DisposableStack();
  let reader;
  if (someCondition) {
    reader = disposer.use(stream.getReader());
  } else {
    reader = disposer.use(stream.getReader({ mode: "byob" }));
  }
  // リーダーで何かを行う
  // スコープから脱出する前、ディスポーザーが破棄されると、リーダーを破棄する
}
```

まだ破棄可能プロトコルを実装していないリソースがある場合、`using` はそれを受け付けません。その場合は、{{jsxref("DisposableStack/adopt", "adopt()")}} を使用することができます。

```js
{
  using disposer = new DisposableStack();
  // リーダーに [Symbol.dispose]() メソッドがないとする。
  // そうすると using では使用できなくなる。
  // しかし、手動でディスポーザー関数を disposer.adopt に渡すことができる
  const reader = disposer.adopt(stream.getReader(), (reader) =>
    reader.releaseLock(),
  );
  // リーダーで何かを行う
  // スコープから脱出する前、ディスポーザーが破棄されると、リーダーを破棄する
}
```

特定の資源に「紐づけられて」いないが、実行すべき破棄処理を設定したい場合もあります。たとえば、複数の接続が同時に開かれている際に、「すべてのデータベース接続が閉じられました」というメッセージをログに出したい場合などが挙げられます。このような場合、{{jsxref("DisposableStack/defer", "defer()")}} を使用することができます。

```js
{
  using disposer = new DisposableStack();
  disposer.defer(() => console.log("すべてのデータベース接続が閉じられました"));
  const connection1 = disposer.use(openConnection());
  const connection2 = disposer.use(openConnection());
  // connection1 と connection2 で何かを行う
  // スコープから脱出する前に、ディスポーザーが破棄されると、まず connection1 と
  // connection2 を破棄してからメッセージをログ出力する
}
```

_条件付き_での破棄をしたい場合があるかもしれません。例えば、エラーが発生した場合にのみ、割り当てられたリソースを破棄するなどです。その場合は、{{jsxref("DisposableStack/move", "move()")}} を使用することで、通常であれば破棄されるはずのリソースを保持することができます。

```js
class MyResource {
  #resource1;
  #resource2;
  #disposables;
  constructor() {
    using disposer = new DisposableStack();
    this.#resource1 = disposer.use(getResource1());
    this.#resource2 = disposer.use(getResource2());
    // ここまでたどり着いたということは、構築中にエラーはなかったということであり、
    // 破棄可能なものを `disposer` から `#disposables` へ安全に移動可能
    this.#disposables = disposer.move();
    // 構築に失敗した場合、`disposer` は上の行に到達する前に破棄され、
    // `#resource1` と `#resource2` も破棄される
  }
  [Symbol.dispose]() {
    this.#disposables.dispose(); // `#resource2` と `#resource1` を破棄
  }
}
```

`AsyncDisposableStack` は `DisposableStack` と似ていますが、非同期の破棄可能リソースを使用するためのものです。その `use()` メソッドは非同期の破棄可能オブジェクトを受け取り、`adopt()` メソッドは非同期のクリーンアップ関数を受け取り、`dispose()` メソッドは非同期のコールバックを受け取ります。また、`[Symbol.asyncDispose]()` メソッドも提供しています。同期リソースと非同期リソースが混在している場合でも、同期リソースを渡すことが可能です。

{{jsxref("DisposableStack")}} のリファレンスには、他にも例と詳細があります。

## エラー処理

リソース管理機能の主な用途は、エラーが発生した場合でも、リソースが常に解放されるように実現することです。ここでは、いくつかの複雑なエラー処理のシナリオについて見ていきましょう。

まず、`using` を使用することでエラーに対して堅牢な、以下のコードから始めます。

```js
async function readUntil(stream, text) {
  // `await using` ではなく `using` を使用するのは `releaseLock` が同期であるため
  using reader = stream.getReader();
  let chunk = await reader.read();

  while (!chunk.done && chunk.value !== text) {
    console.log(chunk.toUpperCase());
    chunk = await reader.read();
  }
}
```

`chunk` が `null` だったと仮定します。その場合、`!chunk.done` は `TypeError` を発生させ、関数が終了します。関数が終了する前に、`stream[Symbol.dispose]()` が呼び出され、ストリームのロックが解放されます。

```js
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("a");
    controller.enqueue(null);
    controller.enqueue("b");
    controller.enqueue("c");
    controller.close();
  },
});

readUntil(stream, "b")
  .catch((e) => console.error(e)) // TypeError: chunk.toUpperCase is not a function
  .then(() => {
    const anotherReader = stream.getReader();
    // 他のリーダーの作成に成功
  });
```

つまり、`using` はエラーを隠蔽しません。発生したエラーはすべて送出されますが、その直前にリソースは閉じられます。では、リソースのクリーンアップ処理自体がエラーを送出した場合はどうなるでしょうか。もう少し極端な例を見てみましょう。

```js
class MyReader {
  [Symbol.dispose]() {
    throw new Error("ロックの開放に失敗");
  }
}

function doSomething() {
  using reader = new MyReader();
  throw new Error("読み取りに失敗");
}

try {
  doSomething();
} catch (e) {
  console.error(e); // SuppressedError: An error was suppressed during disposal
}
```

`doSomething()` の呼び出しで2つのエラーが発生しています。1 つは `doSomething` の実行中に送出されたエラー、もう 1 つは最初のエラーが原因で `reader` の破棄中に送出されたエラーです。これら 2 つのエラーは同時に送出されるため、捕捉されたものは {{jsxref("SuppressedError")}} となります。これは 2 つのエラーを内包する特殊なエラーであり、{{jsxref("SuppressedError/error", "error")}} プロパティには後者のエラーが、{{jsxref("SuppressedError/suppressed", "suppressed")}} プロパティには前者のエラーが含まれていて、前者のエラーは後者のエラーによって「抑制」されています。

リソースが複数あり、その両方が破棄中にエラーを発生した場合（これは極めて稀なケースであるはずだです。そもそも破棄に失敗すること自体が稀であるためです）、それぞれの先行するエラーは後続のエラーによって抑制され、抑制されたエラーの連鎖が形成されます。

```js
class MyReader {
  [Symbol.dispose]() {
    throw new Error("リーダーのロックの開放に失敗");
  }
}

class MyWriter {
  [Symbol.dispose]() {
    throw new Error("ライターのロックの開放に失敗");
  }
}

function doSomething() {
  using reader = new MyReader();
  using writer = new MyWriter();
  throw new Error("読み取りに失敗");
}

try {
  doSomething();
} catch (e) {
  console.error(e); // SuppressedError: An error was suppressed during disposal
  console.error(e.suppressed); // SuppressedError: An error was suppressed during disposal
  console.error(e.error); // Error: リーダーのロックの開放に失敗
  console.error(e.suppressed.suppressed); // Error: 読み取りに失敗
  console.error(e.suppressed.error); // Error: ライターのロックの開放に失敗
}
```

- `reader` は最後に解放されるため、そのエラーが最新のものとなり、他のすべてのエラーを上書きします。つまり、`e.error` として示されます。
- `writer` が先に解放されるため、そのエラーは元の終了エラーよりも遅く発生しますが、`reader` のエラーよりは早く発生します。そのため、`e.suppressed.error` として示されます。
- 「読み込みに失敗しました」という元のエラーは最も古いエラーであるため、`e.suppressed.suppressed` として示されます。

## 例

### オブジェクト URL の自動解放

次の例では、Blob の[オブジェクト URL](/ja/docs/Web/URI/Reference/Schemes/blob) を作成し（実際のアプリケーションでは、この Blob はファイルやフェッチレスポンスなどから取得されることになります）、Blob をファイルとしてダウンロード可能にします。リソースリークを防ぐため、オブジェクトURLが不要になった時点（つまり、ダウンロードが正常に始まった時点）で、{{domxref("URL/revokeObjectURL_static", "URL.revokeObjectURL()")}} を使用してオブジェクトURLを解放しなければなりません。URL 自体は単なる文字列であり、破棄可能プロトコルを実装していないため、`url` を `using` で直接宣言することはできません。そのため、`url` のディスポーザーとして機能する `DisposableStack` を作成します。オブジェクト URL は、`link.click()` が完了するか、どこかでエラーが発生したかした時点で `disposer` がスコープ外になるとすぐに破棄されます。

```js
const downloadButton = document.getElementById("download-button");
const exampleBlob = new Blob(["example data"]);

downloadButton.addEventListener("click", () => {
  using disposer = new DisposableStack();
  const link = document.createElement("a");
  const url = disposer.adopt(
    URL.createObjectURL(exampleBlob),
    URL.revokeObjectURL,
  );

  link.href = url;
  link.download = "example.txt";
  link.click();
});
```

### 処理中のリクエストの自動キャンセル

次の例では、リソースのリストを並行して [fetch](/ja/docs/Web/API/Window/fetch) で読み取るために {{jsxref("Promise.all()")}} を使用しています。`Promise.all()` は、1 つのリクエストが失敗すると直ちに失敗し、結果のプロミスを拒否します。しかし、他の待機中のリクエストは、プログラムからその結果にアクセスできなくなっても、実行され続けます。これらの残りのリクエストが不必要にリソースを消費するのを避けるには、`Promise.all()` が決定した際に、進行中のリクエストを自動的にキャンセルする必要があります。キャンセル処理は {{domxref("AbortController")}} を使用して実装し、その {{domxref("AbortController/signal", "signal")}} をすべての `fetch()` 呼び出しに渡します。`Promise.all()` が履行された場合、関数は通常通り戻り、コントローラーは中止されます。この時点ではキャンセルすべき待機中のリクエストが存在しないため、問題はありません。一方、`Promise.all()` が拒否され、関数が例外を送出した場合、コントローラーは中止され、すべての待機中のリクエストがキャンセルされます。

```js
async function getAllData(urls) {
  using disposer = new DisposableStack();
  const { signal } = disposer.adopt(new AbortController(), (controller) =>
    controller.abort(),
  );

  // すべての URL を並行して取得
  // いずれかのリクエストが失敗した場合、未完了のリクエストがすべて自動的に取り消される可能性がある
  const pages = await Promise.all(
    urls.map((url) =>
      fetch(url, { signal }).then((response) => {
        if (!response.ok)
          throw new Error(
            `レスポンスエラー: ${response.status} - ${response.statusText}`,
          );
        return response.text();
      }),
    ),
  );
  return pages;
}
```

## 落とし穴

リソース解放の構文には、どのような状況でもリソースが常に解放されるよう強力なエラー処理機能が数多く備わっていますが、それでも遭遇しうる落とし穴があります。

- `using` や `await using` を使用し忘れること。リソース管理の構文は、必要だと分かっている場合にのみ役立つものであり、使い忘れたとしても警告してくれるような仕組みはありません。残念ながら、これを事前に防ぐ良い方法はありません。なぜなら、何かが破棄可能なリソースであることを示す構文上の手がかりがない上、破棄可能なリソースであっても、自動破棄なしで宣言したい場合があるからです。こうした課題を検出するには、おそらく型チェッカーとリンターを組み合わせる必要があります。例えば、[typescript-eslint](https://typescript-eslint.io/) などです（[この機能については現在も開発が計画されています](https://github.com/typescript-eslint/typescript-eslint/issues/8255)）。
- 解放後の使用。一般的に、`using` 構文はリソースがスコープ外に出た際に確実に解放されるようにしますが、バインディング変数の範囲を超えて値を維持する方法は数多くあります。JavaScript には Rust のような所有権メカニズムを持たないため、`using` を使用しないエイリアスを宣言したり、[クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)内でリソースを保持したりすることが可能です。{{jsxref("Statements/using", "using")}} の参照には、こうした落とし穴の例が数多く掲載されています。繰り返しになりますが、複雑な制御フローの中でこれを適切に検出する確実な方法はないため、注意が必要です。

リソース管理機能は万能薬ではありません。手動で破棄メソッドを呼び出すよりも確実に改善されていますが、リソース管理に関するすべてのバグを防ぐほど賢くはありません。使用するリソースの仕様を十分に理解し、注意を払う必要があります。

## まとめ

リソース管理システムの主要な成分は以下の通りです。

- {{jsxref("Statements/using", "using")}} および {{jsxref("Statements/await_using", "await using")}} 宣言は、自動的にリソースを破棄します。
- 破棄可能プロトコルと非同期破棄可能プロトコル。リソースが実装するためには、それぞれ {{jsxref("Symbol.dispose")}} および {{jsxref("Symbol.asyncDispose")}} を使用します。
- {{jsxref("DisposableStack")}} オブジェクトと {{jsxref("AsyncDisposableStack")}} オブジェクト。`using` および `await using` が適合しない場合に使用します。

これらの API を適切に使用すれば、多くの定型コードを記述することなく、あらゆるエラー状況に対しても堅牢で信頼性の高い、外部リソースと対話するシステムを生成できます。

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}
