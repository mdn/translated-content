---
title: BlobBuilder
slug: Web/API/BlobBuilder
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOM リファレンス
  - File API
  - 非推奨
  - リファレンス
browser-compat: api.BlobBuilder
translation_of: Web/API/BlobBuilder
---
{{APIRef("File API")}}{{ deprecated_header}}

> **Note:** `BlobBuilder` インターフェイスは新しく導入された {{domxref('Blob')}} コンストラクターに置き換えられて非推奨になりました。

**`BlobBuilder`** インターフェイスは {{domxref("Blob")}} オブジェクトを構築する簡単な方法を提供します。単に `BlobBuilder` を作成し、 [`append()`](#append) メソッドを使ってデータのチャンクを付け足していってください。 blob の生成が完了したら [`getBlob()`](#getblob) メソッドを呼んで、ビルダーに送り込んだデータの {{domxref("Blob")}} を取得してください。

## メソッド概要

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code>void <a href="/ja/docs/Web/API/BlobBuilder#append()">append</a>(in ArrayBuffer data);</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>void <a href="/ja/docs/Web/API/BlobBuilder#append()">append</a>(in Blob data);</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>void <a href="/ja/docs/Web/API/BlobBuilder#append()">append</a>(in String data, [optional] in String endings);</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>Blob <a href="/ja/docs/Web/API/BlobBuilder#getblob()">getBlob</a>([optional] in DOMString contentType);</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>File <a href="/ja/docs/Web/API/BlobBuilder#getfile()">getFile</a>(in DOMString name, [optional] in DOMString contentType);</code>
      </td>
    </tr>
  </tbody>
</table>

## メソッド

### append()

生成中の {{domxref("Blob")}} に対して、指定された JavaScript オブジェクトの内容を付け足します。もし指定した値が {{domxref("Blob")}} 、[`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)、[`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) のいずれでもなければ、文字列に変換されたのち、 blob に付け足されます。

```js
void append(
  in ArrayBuffer data
);

void append(
  in Blob data
);

void append(
  in String data,
  [optional] in String endings
);
```

#### 引数

- `data`
  - : 構築中の {{domxref("Blob")}} に追加するデータです。
- `endings`
  - : `\n` を含む文字列をどのように書き出するかを指定します。これは
    `"transparent"` （改行を変更しない）または `"native"` （ホスト OS のファイルシステムの習慣に合うよう改行を変更する）のどちらかを取ります。既定値は `"transparent"` です。

### getBlob()

{{domxref("Blob")}} オブジェクトで、 [`append()`](#append) の呼び出し経由で渡されたデータを使用して構築した結果を返します。

```js
Blob getBlob(
  in DOMString contentType {{optional_inline}}
);
```

#### 引数

- `contentType` {{optional_inline}}
  - : {{domxref("Blob")}} で返されるデータの MIME タイプです。これは `Blob` オブジェクトの type プロパティの値になります。

#### 返値

{{domxref("Blob")}} オブジェクトで、 `BlobBuilder` が作成されてから行われた [`append()`](#append) への呼び出しに渡されたすべてのデータを含むものです。また、これは `BlobBuilder` をリセットし、次に [`append()`](#append) を呼び出すと、新しい空の blob が開始されるようにします。

### getFile() {{non-standard_inline}}

{{domxref("File")}} オブジェクトを返します。

```js
File getFile(
  in DOMString name,
  [optional] in DOMString contentType
);
```

#### 引数

- `name`
  - : ファイル名です。
- `contentType` {{optional_inline}}
  - : {{domxref("File")}} で返されるデータの MIME タイプを指定します。これは `File` オブジェクトの type プロパティの値になります。

#### 返値

{{domxref("File")}} オブジェクトです。

## 仕様書

この機能はどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Blob")}}
- {{domxref("File")}}
