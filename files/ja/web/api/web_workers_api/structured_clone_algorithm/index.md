---
title: 構造化複製アルゴリズム
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
translation_of: Web/API/Web_Workers_API/Structured_clone_algorithm
---
**構造化複製アルゴリズム** は複雑な JavaScript オブジェクトをコピーするためのアルゴリズムです。これは {{domxref("Worker.postMessage()", "postMessage()")}} を介して [Worker](/ja/docs/Web/API/Worker) と送受信するとき、[IndexedDB](/ja/docs/Glossary/IndexedDB) にオブジェクトを格納するとき、[他の API](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm$edit#See_Also) のためにオブジェクトをコピーするときなど、データ転送時に内部で用いられています。無限ループを避けるため、以前にアクセスした参照のマップを保持しながら、入力オブジェクトを再帰処理することで複製していきます。

## 構造化複製で動作しないもの

- [`Function`](/ja/JavaScript/Reference/Global_Objects/Function "en/JavaScript/Reference/Global Objects/Function") オブジェクトは構造化複製アルゴリズムでは複製されません。複製しようとすると `DATA_CLONE_ERR` 例外が送出されます。
- DOM ノードを複製するときも同様に `DATA_CLONE_ERR` 例外が送出されます。
- 以下に挙げるオブジェクトのパラメーターは保持されません。

  - [`RegExp`](/ja/JavaScript/Reference/Global_Objects/RegExp "en/JavaScript/Reference/Global Objects/regexp") オブジェクトの `lastIndex` フィールドは保持されません。
  - プロパティ記述子、セッター、ゲッター (もしくは同様のメタデータ系機能) は複製されません。たとえば、オブジェクトに [プロパティ記述子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) を使用して読み取り専用にしている場合でも、複製したものではデフォルトの条件である読み取り/書き込みに変わります。
  - プロトタイプチェーンは探索、複製されません。

> **Note:** **メモ**: ネイティブの [`Error`](/ja/JavaScript/Reference/Global_Objects/Error "en/JavaScript/Reference/Global Objects/Error") 型は Chrome では複製できます。Firefox は [対応中](https://bugzilla.mozilla.org/show_bug.cgi?id=1556604) です。

## サポート済みの型

| オブジェクトの型                                                                      | 備考                                                                      |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [すべてのプリミティブ型](/ja/docs/Web/JavaScript/Data_structures#Primitive_values)    | symbol を除く                                                             |
| [Boolean](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean) オブジェクト      |                                                                           |
| [String](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/String) オブジェクト |                                                                           |
| [Date](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date)                         |                                                                           |
| [RegExp](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)                     | `lastIndex` フィールドは保持されません。                                  |
| {{ domxref("Blob") }}                                                          |                                                                           |
| {{ domxref("File") }}                                                          |                                                                           |
| {{ domxref("FileList") }}                                                      |                                                                           |
| [ArrayBuffer](/ja/docs/Web/API/ArrayBuffer)                                           |                                                                           |
| [ArrayBufferView](/ja/docs/Web/API/ArrayBufferView)                                   | 他の [型付き配列](/ja/docs/Web/JavaScript/Typed_arrays) を含む            |
| {{ domxref("ImageBitmap") }}                                                  |                                                                           |
| {{ domxref("ImageData") }}                                                  |                                                                           |
| [Array](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)                       |                                                                           |
| [Object](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)                     | これはプレーンオブジェクト (オブジェクトリテラルなど) **のみ** を含みます |
| [Map](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map)                           |                                                                           |
| [Set](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)                           |                                                                           |

## 関連情報

- [HTML Specification: Safe passing of structured data](http://www.w3.org/TR/html5/infrastructure.html#safe-passing-of-structured-data)
- {{ domxref("window.history") }}
- {{ domxref("window.postMessage()") }}
- [Web Workers](/ja/docs/Web/API/Web_Workers_API)
- [IndexedDB](/ja/docs/Web/API/IndexedDB_API)
- [Components.utils.cloneInto](/ja/docs/Components.utils.cloneInto)
