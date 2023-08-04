---
title: 構造化複製アルゴリズム
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
l10n:
  sourceCommit: 0be2158a250dc07932891157dad8341d90a44930
---

{{DefaultAPISidebar("Web Workers API") }}

**構造化複製アルゴリズム** は複雑な JavaScript オブジェクトをコピーするためのアルゴリズムです。これは {{domxref("Worker.postMessage()", "postMessage()")}} を介して[ワーカー](/ja/docs/Web/API/Worker)と送受信するとき、 [IndexedDB](/ja/docs/Glossary/IndexedDB) にオブジェクトを格納するとき、[他の API](#関連情報) のためにオブジェクトをコピーするときなど、データ転送時に内部で用いられています。

無限ループを避けるため、以前にアクセスした参照のマップを保持しながら、入力オブジェクトを再帰処理することで複製していきます。

## 構造化複製で動作しないもの

- {{jsxref("Function")}} オブジェクトは構造化複製アルゴリズムでは複製されません。複製しようとすると `DataCloneError` 例外が発生します。
- DOM ノードを複製するときも同様に `DataCloneError` 例外発生します。
- 一部のオブジェクトのプロパティは保持されません。

  - {{jsxref("RegExp")}} オブジェクトの `lastIndex` フィールドは保持されません。
  - プロパティ記述子、セッター、ゲッター（もしくは同様のメタデータ系機能）は複製されません。
    たとえば、あるオブジェクトが[プロパティ記述子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)によって読み取り専用になっている場合でも、複製したものでは既定の条件である読み取り/書き込みに変わります。
  - プロトタイプチェーンは探索、複製されません。

## 対応済みの型

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">オブジェクト型</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ja/docs/Web/JavaScript/Data_structures#プリミティブ値">すべてのプリミティブ型</a>
      </td>
      <td>ただし、シンボルを除く</td>
    </tr>
    <tr>
      <td>{{jsxref("Boolean")}} オブジェクト</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("String")}} オブジェクト</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("Date")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp")}}</td>
      <td><code>lastIndex</code> は保持されません。</td>
    </tr>
    <tr>
      <td>{{domxref("Blob")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{domxref("File")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{domxref("FileList")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("ArrayBuffer")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("TypedArray")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("DataView")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{domxref("ImageBitmap")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{domxref("ImageData")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("Array")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("Object")}}</td>
      <td>プレーンなオブジェクト（オブジェクトリテラルなど）<strong>のみ</strong>です。</td>
    </tr>
    <tr>
      <td>{{jsxref("Map")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("Set")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{domxref("DOMException")}}</td>
      <td>ブラウザーは、プロパティ {{domxref("DOMException.name", "name")}} と {{domxref("DOMException.message", "message")}} をシリアライズしなければなりません。
      他の属性もシリアライズ/複製することができます。</td>
    </tr>
    <tr>
      <td><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Error">ネイティブの <code>Error</code> 型</a></td>
      <td>
        <p>エラー名は、 {{jsxref("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} （または "Error" に設定）の何れかでなければなりません。</p>
        <p>ブラウザーは <code>name</code> および <code>message</code> プロパティをシリアライズしなければならず、 <code>stack</code>, <code>cause</code> などのエラーの他の「興味深い」プロパティをシリアライズすることが期待されています。</p>
        <p>{{JSxRef("AggregateError")}} の対応が <a href="https://github.com/whatwg/html/pull/5749">whatwg/html#5749</a> で仕様書に追加される予定です（そして、既に一部のブラウザーが対応しています）。</p>
      </td>
    </tr>
  </tbody>
</table>

## 関連情報

- [HTML Specification: Safe passing of structured data](https://html.spec.whatwg.org/multipage/infrastructure.html#safe-passing-of-structured-data)
- {{Glossary("Transferable objects")}}
- {{domxref("structuredClone()")}}
- {{domxref("window.history")}}
- {{domxref("window.postMessage()")}}
- [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)
- [IndexedDB](/ja/docs/Web/API/IndexedDB_API)
