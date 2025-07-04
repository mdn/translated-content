---
title: "IDBFactory: databases() メソッド"
short-title: databases()
slug: Web/API/IDBFactory/databases
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

**`databases`** は {{domxref("IDBFactory")}} インターフェイスのメソッドで、利用できるすべてのデータベースの名前とバージョンを格納したオブジェクトの配列を履行される {{jsxref("Promise")}} を返します。

これはデータベースのスナップショットで、主にウェブアプリケーションがどのようなデータベースが作成されたかを調べるためのものです。例えば、以前のバージョンのアプリケーションコードによって作成されたデータベースをクリーンアップするためのものです。

## 構文

```js-nolint
databases()
```

### 引数

なし。

### 返値

利用できるデータベースのスナップショットを表すオブジェクトの配列で履行される（または下記エラー/例外で拒否される） {{jsxref("Promise")}} です。

各配列オブジェクトには、以下のプロパティがあります。

- `name`
  - : データベースの名前です。
- `version`
  - : データベースのバージョンです。

なお、返されるオブジェクトの並びは未定義です。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : メソッドが[不透明なオリジン](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802#42242802)から呼ばれたときに発生します。

- `UnknownError` {{domxref("DOMException")}}
  - : 何らかの理由で利用できるデータベースを設定できない場合に発生します。

## 例

### データベースの作成と列挙

この例では、いくつかのデータベースを作成したり開いたりします。
各データベースの初期化に成功すると、利用できるデータベースをすべて一覧表示します。

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 240px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

最初に、利用できるデータベースを取得し、ログ出力するために使用する関数を定義します。
これは `indexedDB.databases()` が返すプロミスを待ち、配列を反復処理して各要素の値を返します。

```js
async function getDb() {
  const databases = await indexedDB.databases();
  log("List databases:");
  databases.forEach((element) => {
    log(`name: ${element.name}, version: ${element.version}`);
  });
}
```

上記の関数がどのように使用されるかを示すために、下記では 2 つのデータベースを作成しています。
それぞれのデータベースについて、データベースを開くためのログを出力します。
また、初期化に成功した（あるいはエラーが発生した）場合にもログを出力し、利用できるデータベースについてもログを出力します。

```js
// Create a database named toDoList with default version (1)
const dbName1 = "toDoList";
log(`Opening: ${dbName1}`);
let DBOpenRequest = window.indexedDB.open(dbName1);

DBOpenRequest.addEventListener("error", (event) => {
  log(`Error opening: ${dbName1}`);
  getDb();
});

DBOpenRequest.addEventListener("success", (event) => {
  log(`Initialized: ${dbName1}`);
  getDb();
});

// Create database "AnotherDb"
const dbName2 = "AnotherDb";
log(`Opening ${dbName2}`);
DBOpenRequest = window.indexedDB.open(dbName2, 2);

DBOpenRequest.addEventListener("error", (event) => {
  log(`Error opening: ${dbName2}`);
  getDb();
});

DBOpenRequest.addEventListener("success", (event) => {
  log(`Initialized: ${dbName2}`);
  getDb();
});
```

#### 結果

結果を下記に示します。データベースとその順序を取得するのにかかる時間は未定義であることに注意してください。

{{EmbedLiveSample('Create and list databases', '100%', '280px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- トランザクションの開始: {{domxref("IDBDatabase")}}
- トランザクションの使用: {{domxref("IDBTransaction")}}
- キーの範囲の設定: {{domxref("IDBKeyRange")}}
- データの取得と変更: {{domxref("IDBObjectStore")}}
- カーソルの使用: {{domxref("IDBCursor")}}
- リファレンス例: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([動く例を見る](https://mdn.github.io/dom-examples/to-do-notifications/))
