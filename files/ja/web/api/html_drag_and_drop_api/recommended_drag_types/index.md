---
title: 推奨されるドラッグのデータ型
slug: Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
l10n:
  sourceCommit: a122e87245c624ba56197641b4d7b21b643a6021
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML ドラッグ & ドロップ API は、プレーンテキスト、URL、HTML コード、ファイルなど、さまざまな形式のデータのドラッグをサポートしています。この記事では、一般的なドラッグ可能なデータ形式のベストプラクティスについて説明しています。

> **メモ:** この記事の中で、 `mozSetDataAt()` のような `moz` の接頭辞を持つすべてのメソッドとプロパティは、Gecko ベースのブラウザーでのみ動作します。

## テキストのドラッグ

テキストをドラッグする時は、`text/plain` 型を使用してください。2 番目の引数には、ドラッグした文字列を指定します。例えば、以下のようになります。

```js
event.dataTransfer.setData("text/plain", "これはドラッグされるテキストです");
```

ウェブページのテキストボックスや選択範囲の文字列のドラッグは、ブラウザーが自動的に処理を行うので、自分で処理する必要はありません。

そのデータが代替テキストでは表現できない物である場合を除いて、他のデータ形式に対応していないアプリケーションやドロップ対象のためのフォールバック用に、常に `text/plain` 型のデータを提供することをおすすめします。そのために、データを追加する時には最後に `text/plain` 型のデータを登録しておいてください。

メモ: 古いコードにおいて、`text/unicode` や `Text` といった型の記述を見かけることがあるかもしれません。これらはどちらも `text/plain` と等しく扱われ、プレーンテキスト型のデータとして登録・取得されます。

## リンクのドラッグ

ドラッグされたハイパーリンクには、`text/uri-list` と `text/plain` の*2 種類*のデータを含める必要があります。どちらの形式もリンクの URL をデータに使用しなければなりません。例えば、以下のようになります。

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

`text/uri-list` 型のフォールバックとして、`text/plain` 型を最後に設定します。

メモ: URL 用の型は `uri-list` で、L ではなく I であることに注意してください。

複数のリンクをドラッグするには、それぞれのリンクを `text/uri-list` データ内で CRLF 改行で区切ってください。ナンバー記号 (`#`) で始まる行はコメントで、有効な URL として扱われません。コメントは、リンクの目的を示したり、リンクに関連づけられたタイトルを保持したりする目的で利用できます

> **警告:** 複数のリンクのための `text/plain` 型のフォールバックは、すべての URL を含むべきですが、コメントを含めるべきではありません。

例えば、以下のサンプル `text/uri-list` データには、2 つのリンクと 1 つのコメントが含まれています。

```
http://www.mozilla.org
# 2 つ目のリンク
http://www.example.com
```

ドロップされたリンクを取得する時は、コメントを含めて複数のリンクをドラッグした場合の処理を確実に行ってください。便宜上、`text/uri-list` 型のデータ内の最初の有効なリンクを参照するために、特別な型として `URL` を使用することができます。

> **警告:** `URL` 型でデータを追加しないでください - それを行うと、代わりに `text/uri-list` 型のデータとして登録されます。

```js
const url = event.dataTransfer.getData("URL");
```

Mozilla 特有の型として、`text/x-moz-url` 型のデータを見かけることがあるかもしれません。この型が表示される場合は、`text/uri-list` 型の前に表示されるはずです。この型のデータは、リンクの URL に続いてリンクのタイトルが保持されており。例えば、以下のようになります。

```
http://www.mozilla.org
Mozilla
http://www.example.com
Example
```

## HTML と XML のドラッグ

HTML の内容は `text/html` 型を使用します。この型のデータはドラッグされる HTML をシリアライズしたものであるべきです。具体的には、この型のデータとして登録されるのに適した値は、要素の `{{domxref("Element.innerHTML","innerHTML")}}` プロパティの値です。

XML の内容は `text/xml` 型を使用することができますが、内容は整形式の XML に変換しておくべきです。

また、`text/plain` 型を使用して、HTML または XML のプレーンテキストでの表現を提供することもできます。その場合のデータは単純なテキストであるべきで、タグや属性などのソース文字列を含めるべきではありません。例えば、以下のようになります。

```js
const dt = event.dataTransfer;
dt.setData("text/html", "こんにちは、<strong>見知らぬ人</strong>");
dt.setData("text/plain", "こんにちは、見知らぬ人");
```

## ファイルのドラッグ

ローカルのファイルは `application/x-moz-file` 型で、 `nsIFile` のオブジェクトとしてドラッグされます。特権を持っていないウェブページでは、この型のデータを取得することも変更することもできません。

ファイルを文字列にはできないため、データを登録するには {{domxref("DataTransfer.mozSetDataAt","mozSetDataAt()")}} メソッドを使用する必要があります。同様に、データを取得するには {{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} メソッドを使わなくてはなりません。

```js
event.dataTransfer.mozSetDataAt("application/x-moz-file", file, 0);
```

可能であれば、`text/uri-list` 型と `text/plain` 型の両方を使ってファイルの URL を含めてください。これらの型は最後に登録されるべきで、それによって、 `application/x-moz-file` 型は優先度の高い、より適切な型となります。

複数のファイルは、データ転送中に複数のアイテムとしてドロップ中に受信されます。これについての詳細は、[複数の項目のドラッグ & ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)を参照してください。

以下の例は、ドロップしたファイルを受信するための領域を作成する方法を示しています。

```html
<listbox
  ondragenter="return checkDrag(event)"
  ondragover="return checkDrag(event)"
  ondrop="doDrop(event)" />

<script>
  function checkDrag(event) {
    return event.dataTransfer.types.contains("application/x-moz-file");
  }

  function doDrop(event) {
    const file = event.dataTransfer.mozGetDataAt("application/x-moz-file", 0);
    if (file instanceof Components.interfaces.nsIFile) {
      event.currentTarget.appendItem(file.leafName);
    }
  }
</script>
```

この例では、データ転送に `application/x-moz-file` 型が含まれている場合にのみ、イベントが false を返します。ドロップイベントの間、ファイル型に関連付けられたデータが取得され、ファイルのファイル名がリストボックスに追加されます。{{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} メソッドは、`nsISupports` を返すので、nsIFile 型に変換するために、ここでは `instanceof` 演算子を使用していることに注意してください。これは、誤ってファイルではない型のデータを登録した場合のためのチェックとしても有効です。

### DataTransfer.types の更新

最新の仕様では、{{domxref("DataTransfer.types")}} は {{domxref("DOMStringList")}} ではなく、凍結された文字列の配列返すようになっています（これは Firefox 52 以上でサポートされています）。

その結果、[contains](/ja/docs/Web/API/Node/contains) メソッドはもう機能しません。代わりに [includes](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) メソッドを使用し、以下のようなコードで特定の形式のデータが提供されているかどうかを確認する必要があります。

```js
if ([...event.dataTransfer.types].includes('text/html')) {
  // 実行するコード
}
```

機能検出を使用して、どのメソッドがサポートされている`型`なのかを判断し、適切なコードを実行することができます。

## 画像のドラッグ

画像の直接のドラッグは一般的ではありません。そのため、Mozilla は Mac と Linux での画像の直接のドラッグをサポートしていません。その代わり、画像は通常その URL としてドラッグされます。そのためには、他の URL と同様に `text/uri-list` 型を使用します。データは、画像の URL、または画像が Web 上やディスク上に無い場合は [データ URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) である必要があります。

リンクと同様に、`text/plain` 型のデータには URL も含まれている必要があります。しかし、[データ URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) は通常のテキストの内容には有用ではないので、このような状況では `text/plain` 型のデータを除外した方がよいでしょう。

Chrome などの特権的なコードでは、画像の種類に応じて、`image/jpeg`、`image/png`、`image/gif` のいずれかの形式を使用することもできます。データは `nsIInputStream` インターフェイスを実装したオブジェクトでなければなりません。このストリームが読み込まれる時には、そのファイル形式での画像のデータビットを提供しなければなりません。

画像がディスク上にある場合は、`application/x-moz-file` 型も含める必要があります。実際に、これは画像ファイルをドラッグする一般的なやり方です。

最も適切なデータ形式からそうでない形式まで、正しい順序でデータを登録することが重要です。最初に `image/jpeg` のような標準的な画像型を設定し、次に `application/x-moz-file` 型を設定します。次に、`text/uri-list` 型を設定し、最後に `text/plain` 型を設定します。例えば、以下のようになります。

```js
const dt = event.dataTransfer;
dt.mozSetDataAt("image/png", stream, 0);
dt.mozSetDataAt("application/x-moz-file", file, 0);
dt.setData("text/uri-list", imageurl);
dt.setData("text/plain", imageurl);
```

{{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} メソッドは、テキスト以外のデータに使用されることに注意してください。内容によっては、これらの型の一部しか含まれていない場合があるので、ドロップされた画像を受信する時には、どの型が利用可能になっているかを確認することが重要です。

## ノードのドラッグ

ドキュメント内のノードや要素は、`application/x-moz-node` 型を使ってドラッグすることができます。型のデータは DOM ノードでなければなりません。これにより、ドロップ対象はドラッグが開始された実際のノードを受け取ることができます。ノードがドロップされていても、異なるドメインからの呼び出し元はそのノードにアクセスできないことに注意してください。

ノードの内容は常に `text/plain` 型の代替文字列で提供するべきです。

## 独自データのドラッグ

独自の目的のために、他の型を使うこともできます。そのデータが特定のサイトやアプリケーションに固有のものでない限り、常に `text/plain` 型の代替文字列を含めるようにしてください。代替テキストを用意しなかった場合は、他の場所にドロップできなくなります。

## OS のフォルダーにファイルをドラッグ

既存のドラッグイベントセッションにファイルを追加したり、コードが対象フォルダーの場所の通知を受信したときに、オペレーティングシステム内のフォルダーに対してのドロップ操作だった場合、ファイルをディスクに書き出したい場合があります。これは拡張機能（またはその他の特権コード）でのみ動作し、`application/moz-file-promise` 型を使用する必要があります。次のサンプルでは、この高度なケースの概要を説明します。

```js
// currentEvent is an existing drag operation event

currentEvent.dataTransfer.setData("text/x-moz-url", URL);
currentEvent.dataTransfer.setData("application/x-moz-file-promise-url", URL);
currentEvent.dataTransfer.setData("application/x-moz-file-promise-dest-filename", leafName);
currentEvent.dataTransfer.mozSetDataAt('application/x-moz-file-promise',
                  new dataProvider(success,error),
                  0, Components.interfaces.nsISupports);

function dataProvider(){}

dataProvider.prototype = {
  QueryInterface(iid) {
    if (iid.equals(Components.interfaces.nsIFlavorDataProvider)
                  || iid.equals(Components.interfaces.nsISupports))
      return this;
    throw Components.results.NS_NOINTERFACE;
  },
  getFlavorData(aTransferable, aFlavor, aData, aDataLen) {
    if (aFlavor === 'application/x-moz-file-promise') {

       const urlPrimitive = {};
       const dataSize = {};

       aTransferable.getTransferData('application/x-moz-file-promise-url', urlPrimitive, dataSize);
       const url = urlPrimitive.value.QueryInterface(Components.interfaces.nsISupportsString).data;
       console.log(`URL file original is = ${url}`);

       const namePrimitive = {};
       aTransferable.getTransferData('application/x-moz-file-promise-dest-filename', namePrimitive, dataSize);
       const name = namePrimitive.value.QueryInterface(Components.interfaces.nsISupportsString).data;

       console.log(`target filename is = ${name}`);

       const dirPrimitive = {};
       aTransferable.getTransferData('application/x-moz-file-promise-dir', dirPrimitive, dataSize);
       const dir = dirPrimitive.value.QueryInterface(Components.interfaces.nsILocalFile);

       console.log(`target folder is = ${dir.path}`);

       const file = Cc['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
       file.initWithPath(dir.path);
       file.appendRelativePath(name);

       console.log(`output final path is = ${file.path}`);

       // now you can write or copy the file yourself…
    }
  }
}
```

## 関連情報

- [HTML ドラッグ & ドロップ API (概要)](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [複数のアイテムのドラッグ & ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
