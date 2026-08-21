---
title: 構造化複製アルゴリズム
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
l10n:
  sourceCommit: 0be2158a250dc07932891157dad8341d90a44930
---

{{DefaultAPISidebar("Web Workers API") }}

**構造化複製アルゴリズム**は、複雑な JavaScript オブジェクトをコピーします。
これは、{{DOMxRef("WorkerGlobalScope.structuredClone", "structuredClone()")}} を呼び出したとき、{{domxref("Worker.postMessage()", "postMessage()")}} を介して[ワーカー](/ja/docs/Web/API/Worker)と送受信するとき、 [IndexedDB](/ja/docs/Glossary/IndexedDB) にオブジェクトを格納するとき、[他の API](#関連情報) のためにオブジェクトをコピーするときなどに、内部で用いられています。

無限ループを避けるため、以前にアクセスした参照のマップを保持しながら、入力オブジェクトを再帰処理することで複製していきます。

## 構造化複製で動作しないもの

- {{jsxref("Function")}} オブジェクトは構造化複製アルゴリズムでは複製されません。複製しようとすると `DataCloneError` 例外が発生します。
- DOM ノードを複製するときも同様に `DataCloneError` 例外発生します。
- 一部のオブジェクトのプロパティは保持されません。
  - {{jsxref("RegExp")}} オブジェクトの `lastIndex` フィールドは保持されません。
  - プロパティ記述子、セッター、ゲッター（もしくは同様のメタデータ系機能）は複製されません。
    たとえば、あるオブジェクトが[プロパティ記述子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)によって読み取り専用になっている場合でも、複製したものでは既定の条件である読み取り/書き込みに変わります。
  - プロトタイプチェーンは探索、複製されません。
  - [クラスのプライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)は複製されません（ただし、組み込み型の内部フィールドは複製されることがあります）。

## 対応している型

### JavaScript 型

- {{jsxref("Array")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Boolean")}}
- {{jsxref("DataView")}}
- {{jsxref("Date")}}
- {{jsxref("Error")}} 型（ただし下記の[エラー型](#エラー型)を参照）。
- {{jsxref("Map")}}
- {{jsxref("Number")}}
- {{jsxref("Object")}} オブジェクト。ただしプレーンオブジェクトのみ（オブジェクトリテラルから作成した場合など）。
- [プリミティブ型](/ja/docs/Web/JavaScript/Guide/Data_structures#primitive_values)（`symbol` を除く）
- {{jsxref("RegExp")}}: ただし `lastIndex` は保存されないことに注意
- {{jsxref("Set")}}
- {{jsxref("String")}}
- {{jsxref("TypedArray")}}

#### エラー型

`Error` 型では、エラー名は {{jsxref("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} のいずれかでなければなりません（そうでなければ "Error" に設定されます）。

ブラウザーは、`name` および `message` プロパティをシリアライズしなければならないし、`stack` や `cause` など、エラーのそれ以外の「興味深い」プロパティについてもシリアライズすることが期待されます。

{{JSxRef("AggregateError")}} については、[whatwg/html#5749](https://github.com/whatwg/html/pull/5749) で仕様に対応が追加される見込みです（一部のブラウザーではすでに対応しています）。

### Web/API 型

- {{domxref("AudioData")}}
- {{domxref("Blob")}}
- {{domxref("CropTarget")}}
- {{domxref("CryptoKey")}}
- {{domxref("DOMException")}}: ブラウザーは {{domxref("DOMException.name","name")}} および {{domxref("DOMException.message","message")}} プロパティをシリアライズする必要があります。その他の属性もシリアライズ・クローンされることがあります。
- {{domxref("DOMMatrix")}}
- {{domxref("DOMMatrixReadOnly")}}
- {{domxref("DOMPoint")}}
- {{domxref("DOMPointReadOnly")}}
- {{domxref("DOMQuad")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMRectReadOnly")}}
- {{domxref("EncodedAudioChunk")}}
- {{domxref("EncodedVideoChunk")}}
- {{domxref("FencedFrameConfig")}}
- {{domxref("File")}}
- {{domxref("FileList")}}
- {{domxref("FileSystemDirectoryHandle")}}
- {{domxref("FileSystemFileHandle")}}
- {{domxref("FileSystemHandle")}}
- {{domxref("GPUCompilationInfo")}}
- {{domxref("GPUCompilationMessage")}}
- {{domxref("GPUPipelineError")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("RTCCertificate")}}
- {{domxref("RTCEncodedAudioFrame")}}
- {{domxref("RTCEncodedVideoFrame")}}
- {{domxref("VideoFrame")}}
- {{domxref("WebTransportError")}}

> [!NOTE]
> シリアライズ可能なオブジェクトは、[ウェブ IDL ファイル](https://github.com/w3c/webref/tree/main/ed/idl) において、`[Serializable]` 属性をつけてマークアップされます。

## 関連情報

- [HTML Specification: Safe passing of structured data](https://html.spec.whatwg.org/multipage/infrastructure.html#safe-passing-of-structured-data)
- [移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)
- {{DOMxRef("Window.structuredClone()")}}
- {{DOMxRef("WorkerGlobalScope.structuredClone()")}}
- {{domxref("window.postMessage()")}}
- [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)
- [IndexedDB](/ja/docs/Web/API/IndexedDB_API)
