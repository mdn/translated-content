---
title: Blob
slug: Web/API/Blob
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("File API")}}

**`Blob`** オブジェクトは blob、すなわち不変の生データであるファイルのようなオブジェクトを表します。テキストやバイナリーデータとして読み込んだり、{{DOMxRef("ReadableStream")}} に変換してそのメソッドを使ったデータ処理をしたりすることができます。

Blob が表現することができるデータは必ずしも JavaScript ネイティブ形式である必要はありません。{{DOMxRef("File")}} インターフェイスは Blob をベースにしており、 Blob の機能を継承してユーザーのシステム上のファイルをサポートするように拡張しています。

## Blob の使用

他の Blob 以外のオブジェクトやデータから `Blob` を作成するには、{{DOMxRef("Blob.Blob", "Blob()")}} コンストラクターを使用します。他の Blob のデータのサブセットを含む Blob を作成するには、 {{DOMxRef("Blob.slice()", "slice()")}} メソッドを使用します。ユーザーのファイルシステム上のファイルの `Blob` オブジェクトを取得するには、 {{DOMxRef("File")}} のドキュメントを参照してください。

`Blob` オブジェクトを受け入れる API も、 {{DOMxRef("File")}} のドキュメントに掲載しています。

## コンストラクター

- {{DOMxRef("Blob.Blob", "Blob()")}}
  - : コンストラクターに渡された配列内のすべてのデータを連結したものを含む、新しく作成された `Blob` オブジェクトを返します。

## インスタンスプロパティ

- {{DOMxRef("Blob.prototype.size")}} {{ReadOnlyInline}}
  - : `Blob` オブジェクトに含まれるデータのサイズ（バイト単位）。
- {{DOMxRef("Blob.prototype.type")}} {{ReadOnlyInline}}
  - : `Blob` に含まれるデータの MIME タイプを示す文字列。タイプが不明な場合、この文字列は空です。

## インスタンスメソッド

- {{DOMxRef("Blob.prototype.arrayBuffer()")}}
  - : `Blob` の全内容をバイナリーデータとして含む {{jsxref("ArrayBuffer")}} で解決するプロミスを返します。
- {{DOMxRef("Blob.prototype.slice()")}}
  - : 呼び出された Blob の指定されたバイト数範囲のデータを含む新しい `Blob` オブジェクトを返します。
- {{DOMxRef("Blob.prototype.stream()")}}
  - : `Blob` の内容を読み込むために使用できる {{DOMxRef("ReadableStream")}} を返します。
- {{DOMxRef("Blob.prototype.text()")}}
  - : UTF-8 テキストとして解釈された Blob の内容全体を含む文字列で解決するプロミスを返します。

## 例

## Blob の作成

{{DOMxRef("Blob.Blob", "Blob()")}} コンストラクターは、他のオブジェクトから Blob を作成することができます。たとえば、JSON 文字列から Blob を作成するには、次のようにします。

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### 型付き配列の内容を表す URL の作成

次のコードは、 JavaScript の[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)を作成し、型付き配列のデータを含む新しい `Blob` を作成します。次に、{{DOMxRef("URL.createObjectURL()")}} を呼び出して、Blob を {{glossary("URL")}} に変換します。

#### HTML

```html
<p>
  この例では、スペース文字から文字 Z までの ASCII
  コードを含む型付けされた配列を作成し、それをオブジェクト URL
  に変換します。そのオブジェクト URL
  を開くためのリンクが作成されます。リンクをクリックすると、デコードされたオブジェクト
  URL が表示されます。
</p>
```

#### JavaScript

このコードの例の主要な部分は `typedArrayToURL()` 関数で、与えられた型付き配列から `Blob` を作成し、それに対するオブジェクト URL を返します。データをオブジェクト URL に変換した後は、要素の {{HTMLElement("img")}} 属性の値として含む、さまざまな方法で使用することができます（もちろん、データに画像が含まれていることを前提としています）。

```js
function showViewLiveResultButton() {
  if (window.self !== window.top) {
    // この文書がフレーム内にある場合、最初にユーザーに独自のタブ
    // またはウィンドウで開くよう指示します。そうでなければ、
    // この例はうまく動作しません。
    const p = document.querySelector("p");
    p.textContent = "";
    const button = document.createElement("button");
    button.textContent = "上記のコード例の結果をライブで見る";
    p.append(button);
    button.addEventListener("click", () => window.open(location.href));
    return true;
  }
  return false;
}

if (!showViewLiveResultButton()) {
  function typedArrayToURL(typedArray, mimeType) {
    return URL.createObjectURL(
      new Blob([typedArray.buffer], { type: mimeType }),
    );
  }
  const bytes = new Uint8Array(59);

  for (let i = 0; i < 59; i++) {
    bytes[i] = 32 + i;
  }

  const url = typedArrayToURL(bytes, "text/plain");

  const link = document.createElement("a");
  link.href = url;
  link.innerText = "Open the array URL";

  document.body.appendChild(link);
}
```

#### 結果

{{EmbedLiveSample("Creating_a_URL_representing_the_contents_of_a_typed_array", 600, 200)}}

### Blob からデータを抽出する

`Blob` から内容を読み込む方法の 1 つは、{{DOMxRef("FileReader")}} を使用することです。次のコードは、`Blob` の内容を型付き配列として読み込みます。

```js
const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result には blob の内容が型付き配列として格納されます。
});
reader.readAsArrayBuffer(blob);
```

`Blob` から内容を読み込む別の方法としては、 {{domxref("Response")}} を使用する方法があります。次のコードは、`Blob` の内容をテキストとして読み取るものです。

```js
const text = await new Response(blob).text();
```

または、{{DOMxRef("Blob.prototype.text()")}} を使用します。

```js
const text = await blob.text();
```

`FileReader` の他のメソッドを使用することで、Blob の内容を文字列またはデータ URL として読み込むことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("FileReader")}}
- {{DOMxRef("File")}}
- {{DOMxRef("URL.createObjectURL")}}
- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
