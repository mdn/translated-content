---
title: コンパイルされた WebAssembly モジュールのキャッシュ
slug: WebAssembly/Caching_modules
l10n:
  sourceCommit: 2c2f8caac8cbf8e41019c01be5635e10fe65f2cd
---

{{WebAssemblySidebar}}

> **警告:** 実験的な {{jsxref("WebAssembly.Module")}} IndexedDB のシリアル化サポートがブラウザーから削除されています。{{bug("1469395")}} と[この仕様の問題](https://github.com/WebAssembly/spec/issues/821)を参照してください。

キャッシュはアプリケーションのパフォーマンスを向上させるのに役立ちます。コンパイルされた WebAssembly モジュールをクライアントに格納することによって、毎回ダウンロードしてコンパイルする必要がなくなります。この記事では、キャッシュまわりのベストプラクティスについて解説します。

## IndexedDB を用いたキャッシュ

[IndexedDB](/ja/docs/Web/API/IndexedDB_API) はクライアント側で構造化されたデータを格納、検索できるトランザクショナルデータベースシステムです。 これはテキスト、blob、他のクローン可能なオブジェクトをアプリケーションのステートの保存、アセットの永続化をするのに理想的な方法です。

これには wasm モジュール ({{jsxref("WebAssembly.Module")}} JavaScript オブジェクト) も含まれます。

## キャッシュライブラリーのセットアップ

IndexedDB はやや昔ながらの API です。まず、私たちは今日のより現代的な API にあわせて、キャッシュするコードを素早く書け、よりよく機能させるためのライブラリー関数を提供します。

wasm-utils.js ライブラリースクリプトに `instantiateCachedURL()` があります。この関数は `url` と `dbVersion` から wasm モジュールを読み取り、 `importObject` を指定してインスタンス化を行います。そして、成功時に wasm インスタンスを渡すプロミスを返します。さらに、コンパイルされた wasm モジュールをキャッシュするデータベースの作成、新しいモジュールのデータベースへの格納、事前にキャッシュされたモジュールのデータベースからの取得（再度ダウンロードする必要がなくなります）を行います。

> **メモ:** サイト全体の wasm のキャッシュ（指定された URL だけではありません）は関数に渡す `dbVersion` によってバージョン管理されます。wasm モジュールコードが更新された場合や、URL が変更された場合は `dbVersion` を更新する必要があります。以降 `instantiateCachedURL()` を呼び出すと、キャッシュ全体がクリアされ、期限切れのモジュールの使用を避けることができます。

この関数はいくつかの必要な定数を定義することから始まります。

```js
function instantiateCachedURL(dbVersion, url, importObject) {
  const dbName = 'wasm-cache';
  const storeName = 'wasm-cache';
```

### データベースのセットアップ

`instantiateCachedURL()` に含まれる最初のヘルパー関数 — `openDatabase()` — は wasm モジュールを格納するためのオブジェクトストアーを作成し、 `dbVersion` が更新された場合はデータベースをクリアする処理をハンドリングも行います。これは解決時に新しいデータベースを渡すプロミスを返します。

```js
  function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, dbVersion);
      request.onerror = reject.bind(null, 'Error opening wasm cache database');
      request.onsuccess = () => { resolve(request.result) };
      request.onupgradeneeded = (event) => {
        const db = request.result;
        if (db.objectStoreNames.contains(storeName)) {
          console.log(`Clearing out version ${event.oldVersion} wasm cache`);
          db.deleteObjectStore(storeName);
        }
        console.log(`Creating version ${event.newVersion} wasm cache`);
        db.createObjectStore(storeName)
      };
    });
  }
```

### データベースからのモジュールの検索

次の関数 — `lookupInDatabase()` — は上で作成したオブジェクトストアーから指定した `url` で検索するプロミスベースの操作を提供します。解決時に格納されたコンパイル済モジュール、棄却時にエラーを渡すプロミスを返します。

```js
  function lookupInDatabase(db) {
    return new Promise((resolve, reject) => {
      const store = db.transaction([storeName]).objectStore(storeName);
      const request = store.get(url);
      request.onerror = reject.bind(null, `Error getting wasm module ${url}`);
      request.onsuccess = (event) => {
        if (request.result) {
          resolve(request.result);
        } else {
          reject(`Module ${url} was not found in wasm cache`);
        }
      }
    });
  }
```

### モジュールの保存とインスタンス化

次に `storeInDatabase()` 関数を定義します。この関数は非同期に指定された wasm モジュールを指定したデータベースに保存します。

```js
  function storeInDatabase(db, module) {
    const store = db.transaction([storeName], 'readwrite').objectStore(storeName);
    const request = store.put(module, url);
    request.onerror = (err) => { console.log(`Failed to store in wasm cache: ${err}`) };
    request.onsuccess = (err) => { console.log(`Successfully stored ${url} in wasm cache`) };
  }
```

### ヘルパー関数を使用する

プロミスベースのヘルパー関数が全て定義されました。これらを使用して IndexDB のキャッシュルックアップするコアロジックを表現できるようになりました。データベースをオープンし、`url` をキーとして `db` に格納されているコンパイル済モジュールの有無を確認してみましょう。

```js
  return openDatabase().then((db) => {
    return lookupInDatabase(db).then((module) => {
```

成功したら、インポートオブジェクトを指定してモジュールをインスタンス化します。

```js
      console.log(`Found ${url} in wasm cache`);
      return WebAssembly.instantiate(module, importObject);
    },
```

失敗した場合、スクラッチでコンパイルします。次回以降に使用するためにコンパイルしたモジュールを url をキーとしてデータベースに格納します。

```js
    (errMsg) => {
      console.log(errMsg);
      return WebAssembly.instantiateStreaming(fetch(url)).then((results) => {
        storeInDatabase(db, results.module);
        return results.instance;
      });
    })
  },
```

> **メモ:** {{jsxref("WebAssembly.instantiate()")}} は {{jsxref("WebAssembly.Module()", "Module")}} と {{jsxref("WebAssembly.Instance()", "Instance")}} の両方を返します。Module はコンパイルされたコードを表し、IDB に格納したり、[`postMessage()`](/ja/docs/Web/API/MessagePort/postMessage) を通じて ワーカーとの間で共有することができます。Instance はステートフルで、呼び出し可能な JavaScript の関数を含んでいるため、格納/共有することは出来ません。

データベースをオープンすることに失敗した場合(例えば、パーミッションやクォータ等の原因による)、モジュールをフェッチしてコンパイルするだけにし、結果を格納しないでください (格納するデータベースがないため) 。

```js
  (errMsg) => {
    console.log(errMsg);
    return WebAssembly.instantiateStreaming(fetch(url)).then((results) => {
      return results.instance
    });
  });
}
```

## wasm モジュールをキャッシュする

上で定義されたライブラリー関数を使用して、wasm モジュールインスタンスの取得やエクスポートされた機能を使用することが (その間にバックグラウンドでキャッシュのハンドリングをしています) 、次のパラメータで呼び出すだけのシンプルなものになります:

- キャッシュバージョン — 詳細は上で説明されています — wasm モジュールが更新されたときや別 URL に移動したときに更新する必要があります。
- インスタンス化したい wasm モジュールの URL。
- インポートオブジェクト (必要ならば)

```js
const wasmCacheVersion = 1;

instantiateCachedURL(wasmCacheVersion, 'test.wasm').then((instance) =>
  console.log(`Instance says the answer is: ${instance.exports.answer()}`)
).catch((err) =>
  console.error(`Failure to instantiate: ${err}`)
);
```

## ブラウザーの対応

現時点では、WebAssembly モジュールの構造化された複製をサポートしているため、この手法は Firefox と Edge で動作します。

Chrome は WebAssembly 構造化クローンサポートフラグの背後にサポートが実装されていますが、いくつかの懸念があるため、既定ではまだ有効にしていません (たとえば、[この説明を参照](https://github.com/WebAssembly/design/issues/972))。

Safari ではまだ実装されていません。
