---
title: "ReadableStream: from() 静的メソッド"
short-title: from()
slug: Web/API/ReadableStream/from_static
l10n:
  sourceCommit: e862ea87669db4c9f9d28d141613fbc7ce558838
---

{{APIRef("Streams")}}{{SeeCompatTable}}

**`ReadableStream.from()`** は静的メソッドで、指定された反復可能または非同期反復可能オブジェクトから {{domxref("ReadableStream")}} を返します。

このメソッドは、配列、設定、プロミスの配列、非同期ジェネレーター、`ReadableStreams`、Node.js の `readable` ストリームなど、反復可能オブジェクトや非同期反復可能オブジェクトを読み取り可能なストリームとしてラップするために使用することができます。

## 構文

```js-nolint
ReadableStream.from(anyIterable)
```

### 引数

- `anyIterable`
  - : [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)または[非同期反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)オブジェクトです。

### 返値

{{domxref("ReadableStream")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 渡された引数が反復可能オブジェクトまたは非同期反復可能オブジェクトではない（`@@iterator` または `@@asyncIterator` メソッドを定義していない）場合に発生します。
    また、反復処理中に、次の反復処理の結果がオブジェクトでない場合、またはオブジェクトに解決されないプロミスである場合にも発生します。

## 例

### 非同期イテレーターを ReadableStream に変換

このライブ例では、非同期イテレーターを `ReadableStream` に変換し、このストリームをどのように使用するかを示します。

#### HTML

HTMLはログ出力に用いる単一の要素 `<pre>` で構成されています。

```html
<pre id="log"></pre>
```

#### JavaScript

例えば、このコードでは `log()` 関数を作成してログ HTML 要素に出力しています。

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

そして、静的メソッドが対応しているかどうかを調べ、対応していない場合はその結果をログ出力します。

```js
if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

非同期反復可能オブジェクトは、 3 回呼び出されると 1、2、3 の値を返す匿名ジェネレーター関数です。
これを `ReadableStream.from()` に渡して `ReadableStream` を作成します。

```js
// 非同期イテレーターを定義
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();

// ReadableStream をイテレーターから作成
const myReadableStream = ReadableStream.from(asyncIterator);
```

[読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)では、ストリームを利用する何通りかの方法を示しています。
以下のコードは `for ...await` ループを使用しています。このメソッドは最もシンプルだからです。
ループのそれぞれの反復処理は、ストリームから現在のチャンクをログ出力します。

```js
consumeStream(myReadableStream);

// Iterate a ReadableStream asynchronously
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // Do something with each chunk
    // Here we just log the values
    log(`chunk: ${chunk}`);
  }
}
```

#### 結果

ストリームを消費したときの出力は下記のように表示されます（`ReadableStream.from()` に対応している場合）。

{{EmbedLiveSample("Convert an async iterator to a ReadableStream","100%", "80")}}

### 配列から ReadableStream への変換

この例は `Array` を `ReadableStream` に変換する方法を示しています。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}

if (!ReadableStream.from) {
  log("ReadableStream.from() is not supported");
}
```

#### JavaScript

反復可能オブジェクトは単なる文字列の配列で、 `ReadableStream.from()` に渡して `ReadableStream` を作成します。

```js
// 野菜の名前の配列
const vegetables = ["Carrot", "Broccoli", "Tomato", "Spinach"];

// 配列から ReadableStream を作成
const myReadableStream = ReadableStream.from(vegetables);
```

```js hidden
consumeStream(myReadableStream);

// ReadableStream を非同期に反復処理
async function consumeStream(readableStream) {
  for await (const chunk of myReadableStream) {
    // チャンクごとに何かをする
    // ここでは値をログ出力するだけ
    log(`chunk: ${chunk}`);
  }
}
```

前回の例のログ出力とストリームの利用と同じ手法を使用しているので、ここでは表示させません。

#### 結果

出力結果は次の通りです。

{{EmbedLiveSample("Convert an Array to a ReadableStream","100%", "100")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStream")}}
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
