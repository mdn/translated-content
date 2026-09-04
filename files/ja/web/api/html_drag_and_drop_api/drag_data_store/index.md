---
title: ドラッグデータストアでの作業
slug: Web/API/HTML_Drag_and_Drop_API/Drag_data_store
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

{{domxref("DragEvent")}} インターフェイスには {{domxref("DragEvent.dataTransfer","dataTransfer")}} プロパティがあり、これは {{domxref("DataTransfer")}} インターフェイスのオブジェクトです。{{domxref("DataTransfer")}} オブジェクトはドラッグ操作のメインコンテンツを表し、様々なイベントの発生にまたがって一貫して存在します。これは[ドラッグデータ](/ja/docs/Web/API/HTML_Drag_and_Drop_API#ドラッグデータストア)、[ドラッグ画像](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドラッグのフィードバック画像の設定)、[ドロップ効果](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドロップ効果)、などがあります。この記事は、ドラッグデータストアの使用方法に焦点を当てています。

## ドラッグデータストアの構造

基本的に、ドラッグデータストアはアイテムのリストであり、{{domxref("DataTransferItem")}}
オブジェクトの {{domxref("DataTransferItemList")}} として表します。それぞれのアイテムは 2 [種類](/ja/docs/Web/API/DataTransferItem/kind) のどちらかです。

- `string` - 本体は文字列であり、{{domxref("DataTransferItem.getAsString", "getAsString()")}} で取得できます。
- `file` - 本体はファイルであり、{{domxref("DataTransferItem.getAsFile", "getAsFile()")}} （または {{domxref("DataTransferItem.getAsFileSystemHandle", "getAsFileSystemHandle()")}}、またはもっと複雑なファイルシステムが必要であれば {{domxref("DataTransferItem.webkitGetAsEntry", "webkitGetAsEntry()")}}）で取得できます。

さらに、アイテムは[型](/ja/docs/Web/API/DataTransferItem/type)によっても識別されます。これは慣例により [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)の形式を取ります。この型は、型の解析方法やデコード方法を利用側に指示することができます。すべてのテキストアイテムにおいて、リストにはそれぞれの型につきアイテムを 1 つしか置くことができません。したがって、リストは実質的に 2 つの互いに排他的 (disjoint) な集合を含みます。重複する型を持つ可能性のあるファイルのリストと、型をキーとするテキストアイテムの {{jsxref("Map")}} です。一般的に、ファイルリストは複数のファイルがドラッグされていることを表します。テキストマップは複数の転送リソースを表すものではなく、同一リソースの異なる形式エンコーディングを表します。これにより受信側はサポートする最適な解釈を選択できます。テキスト項目は優先度降順でソートされることを意図しています。

このリストは {{domxref("DataTransfer.items")}} プロパティからアクセス可能です。

HTML ドラッグ＆ドロップ API は複数の改訂を経て、データストアを管理する 2 つの方法が共存する結果となりました。`DataTransferItemList` および `DataTransferItem` インターフェイスが導入される前の「旧方式」では、`DataTransfer` 上で以下のプロパティが使用されていました。

- {{domxref("DataTransfer.types", "types")}}: リスト内のテキストアイテムの `type` プロパティに加え、ファイル項目が存在する場合、値 `"files"` を含みます。
- {{domxref("DataTransfer.setData", "setData()")}}, {{domxref("DataTransfer.getData", "getData()")}}, {{domxref("DataTransfer.clearData", "clearData()")}}: リスト内のテキストアイテムへのアクセスを "type-to-payload mapping" モデルを用いて提供します。
- {{domxref("DataTransfer.files", "files")}}: リスト内のファイル項目へのアクセスを、{{domxref("FileList")}} として提供します。

ファイル項目の型が直接公開されていないことに気づくかもしれません。これらはアクセスは可能ですが、`files` リスト内の各 {{domxref("File")}} オブジェクトの {{domxref("Blob.type", "type")}} プロパティ経由でのみアクセスできます。したがって、ファイルを読み取れない場合、その型も知ることができません（ストアが読み取り可能になるタイミングについては[ドラッグデータストアの読み取り](#ドラッグデータストアの読み取り)を参照してください）。

ファイルとその型を取得するには、 `items` プロパティの使用をお勧めします。これはより柔軟で一貫性のあるインターフェイスを提供するためです。テキストアイテムについても、一貫性を保つために `items` プロパティの使用を推奨します。ただし、特定の型へのアクセスや削除には `getData()` メソッドの方が便利です。

{{domxref("DataTransfer")}} と {{domxref("DataTransferItem")}} インターフェイスのもう一つの重要な違いは、前者がテキストペイロードへのアクセスに同期的な {{domxref("DataTransfer.getData","getData()")}} メソッドを使用するのに対し、後者は非同期的な {{domxref("DataTransferItem.getAsString","getAsString()")}} メソッドを使用する点です。

## ドラッグデータストアの変更

画像、リンク、選択範囲などのデフォルトでドラッグ可能なアイテムについては、ドラッグデータはブラウザーによって既に定義されています。`draggable` 属性を使用して定義されたカスタムドラッグ可能要素については、ドラッグデータを自身で定義する必要があります。データストアに変更を加えることができるのは、{{domxref("HTMLElement/dragstart_event", "dragstart")}} ハンドラー内のみです。その他のドラッグイベントの `dataTransfer` については、データストアは変更不可能です。

テキストデータをドラッグデータストアに追加するために、「新しい方法」では {{domxref("DataTransferItemList.add()")}} メソッドを使用するのに対し、「古い方法」では {{domxref("DataTransfer.setData()")}} メソッドを使用します。

```js
function dragstartHandler(ev) {
  // 新しい方法: add(data, type)
  ev.dataTransfer.items.add(ev.target.innerText, "text/plain");
  // 古い方法: setData(type, data)
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

どちらの方法も、データストアが変更不可状態のときに呼び出された場合、何も起こりません。同じ型のテキストアイテムが既に存在する場合、`add()` はエラーを発生させますが、`setData()` は既存のアイテムを上書きします。

ファイルデータをドラッグデータストアに追加するには、「新しい方法」ではやはり {{domxref("DataTransferItemList.add()")}} メソッドを使用します。「古い方法」ではファイル項目は {{domxref("DataTransfer.files")}} プロパティ（読み取り専用の {{domxref("FileList")}}）に保存されるため、直接対応する方法は存在しません。

```js
function dragstartHandler(ev) {
  // 新しい方法: add(data)
  ev.dataTransfer.items.add(new File([blob], "image.png"));
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

ファイルデータを追加する際、`add()` は `type` 引数を無視し、`File` オブジェクトの {{domxref("Blob.type", "type")}} プロパティを使用することに注意してください。

> [!NOTE]
> 読み取り/書き込み保護は[ジョブ単位](/ja/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop)で行われます。つまり、`dragstart` ハンドラー内の同期コードのみがデータストアを変更できます。非同期操作後にデータストアにアクセスしようとすると、書き込み権限は失われます。例えば、次のものは機能しません。
>
> ```js example-bad
> function dragstartHandler(ev) {
>   canvas.toBlob((blob) => {
>     ev.dataTransfer.items.add(new File([blob], "image.png"));
>   });
> }
> ```

{{domxref("DataTransferItemList.remove()")}}, {{domxref("DataTransferItemList.clear()")}}, {{domxref("DataTransfer.clearData()")}} の各メソッドを使用してデータを削除する場合も同様です。

## ドラッグデータストアの読み取り

データストアから読み取りできるタイミングは、データストアへの完全なアクセス権を持つ `dragstart` イベント時と、{{domxref("HTMLElement/drop_event", "drop")}} イベント時に限られます。これによりドロップ先がデータを取得できます。

ドラッグデータストアからテキストデータを読み取るには、「新しい方法」では {{domxref("DataTransferItemList")}} オブジェクトを使用し、「古い方法」では {{domxref("DataTransfer.getData()")}} メソッドを使用します。新しい方法はすべてのアイテムをループ処理するのに便利ですが、古い方法は特定の型にアクセスするのに便利です。

```js
function dropHandler(ev) {
  // 新しい方法: アイテム群をループ処理
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      item.getAsString((data) => {
        // データで何かをする
      });
    }
  }
  // 古い方法: getData(type)
  const data = ev.dataTransfer.getData("text/plain");
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

ドラッグデータストアからファイルデータを読み取る場合、「新しい方法」では依然として {{domxref("DataTransferItemList")}} オブジェクトを使用しますが、「古い方法」では {{domxref("DataTransfer.files")}} プロパティを使用します。

```js
function dropHandler(ev) {
  // 新しい方法: アイテム群をループ処理
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "file") {
      const file = item.getAsFile(); // File オブジェクト
    }
  }
  // 古い方法: ファイルをループ処理
  for (const file of ev.dataTransfer.files) {
    // ファイルで何かをする
  }
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

### 保護モード

`dragstart` および `drop` イベント以外では、データストアは「保護モード」となり、コードがデータ本体にアクセスすることを許可しません。具体的には、

- [変更](#ドラッグデータストアの変更)を試みるとすべて、静かに何もしないか、 `DOMException` を発生させるかです（`items.add()` および `items.remove()` のみ）。
- `DataTransfer.getData()` は常に空文字列を返します。
- `DataTransfer.files` は常に空のリストを返します。
- `DataTransferItem.getAsString()` はコールバックを呼び出すことなく戻ります。
- `DataTransferItem.getAsFile()` は常に `null` を返します。

繰り返しますが、読み取り/書き込み保護は[ジョブ単位](/ja/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop)で実施されます。つまり、`drop` ハンドラー内の同期コードのみがデータストアを読み取れます。非同期操作後にデータストアにアクセスしようとすると、書き込み権限は失われます。例えば、以下は動作しません。

```js example-bad
function getDataPromise(item) {
  return new Promise((resolve) => {
    item.getAsString((data) => {
      resolve(data);
    });
  });
}

async function dropHandler(ev) {
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      // 悪い例：これが 2 回目に実行されると、同じジョブにはならない
      const data = await getDataPromise(item);
    }
  }
}

const p1 = document.getElementById("p1");
p1.addEventListener("drop", dropHandler);
```

代わりに、すべてのアクセスメソッドを事前に同期的に呼び出し、結果を後で待機する必要があります。

```js example-good
async function dropHandler(ev) {
  const promises = [];
  for (const item of ev.dataTransfer.items) {
    if (item.kind === "string") {
      // 悪い例：これが 2 回目に実行されると、同じジョブにはならない
      promises.push(getDataPromise(item));
    }
  }
  const results = await Promise.all(promises);
}
```

## 一般的なドラッグデータ型

仕様書では一部のデータ型に対する動作のみを定義していますが、ブラウザーによってはより多くの型にネイティブで対応している場合があります。一般的に、型は MIME タイプと同様のプロトコルとして意図されており、受信側（別のウェブページ、同一ウェブページ内の別の部分、あるいはブラウザー外の場所）が理解できる限り、任意の型を使用できます。この節では、一般的な慣習とブラウザーのデフォルト動作について説明します。

以下のシナリオは「意図」を指し、「動作」を指すものではないことに注意してください。例えば「リンクをドラッグする」と言う場合、ユーザーが実際に `<a>` 要素をドラッグしているとは限りません。1 つ以上のリンクを含むコンテナをドラッグしている可能性もありますが、その意図はリンクをデータとして転送することです。したがって、ユーザーが実際のリンクをドラッグしている場合と同様に、準備するデータストアを設定できます。

### テキストのドラッグ

テキストをドラッグするには、`text/plain` タイプを使用し、ドラッグされた文字列を値として指定します。

```js
event.dataTransfer.items.add("これがドラッグするテキストです", "text/plain");
```

論理的なテキスト代替が存在しない場合を除き、他の型に非対応のアプリケーションやドロップ先に対しては、常に `text/plain` 型のデータを予備として追加すべきです。この `text/plain` 型は最も特異性が低いため優先されるべきではないため、常に最後に追加してください。

`getData()`、`setData()`、`clearData()` では、`Text` 型（大文字小文字を区別しない）は `text/plain` として扱われます。

デフォルトでは、選択範囲をドラッグすると、以下のデータ項目が作成されます。

- `text/plain`: 選択されたテキストを含む。Firefox と Safari はこのアイテムを `text/html` の後に配置するが、仕様では最初に配置することが要求されている。
- `text/html`: 選択された要素の完全な HTML ソース（すべてのスタイルがインライン化された状態）を含む。

仕様書では、`application/microdata+json` 型の別のアイテムとして、ドラッグ選択された要素から抽出された[マイクロデータ](/ja/docs/Web/HTML/Guides/Microdata)を含めることを要求しています。このアイテムを実装しているブラウザーはありません。

編集可能なテキストフィールド（例： {{HTMLElement("textarea")}} や [`<input type="text">`](/ja/docs/Web/HTML/Reference/Elements/input/text)）にドロップした場合、`text/plain` アイテムはデフォルトでフィールドにコピーされます（イベント処理なし）。

### リンクのドラッグ

ドラッグされたハイパーリンクには、`text/uri-list` と `text/plain` の 2 種類 のデータを含める必要があります。どちらの形式もリンクの URL をデータに使用しなければなりません。なお、URL 用の型は `uri-list` であり、_L_ ではなく _I_ であることに注意してください。

通常、`text/plain` 型を `text/uri-list` 型のフォールバックとして最後に設定します。

```js
event.dataTransfer.items.add("https://www.mozilla.org", "text/uri-list");
event.dataTransfer.items.add("https://www.mozilla.org", "text/plain");
```

複数のリンクをドラッグするには、それぞれのリンクを `text/uri-list` データ内で CRLF 改行で区切ってください。ナンバー記号 (`#`) で始まる行はコメントで、有効な URL として扱われません。コメントは、リンクの目的を示したり、リンクに関連づけられたタイトルを保持したりする目的で利用できます。

> [!WARNING]
> 複数のリンクのための `text/plain` 型のフォールバックは、すべての URL を含むべきですが、コメントを含めるべきではありません。

例えば、以下のサンプル `text/uri-list` データには、2 つのリンクと 1 つのコメントが含まれています。

```plain
https://www.mozilla.org
# 2 つ目のリンク
http://www.example.com
```

ドロップされたリンクを取得する時は、コメントを含めて複数のリンクをドラッグした場合の処理を確実に行ってください。

`getData()`、`setData()`、`clearData()` では、`URL` 型（大文字小文字を区別しない）は `text/uri-list` として扱われます。`getData()` の場合、結果はリストの最初の URL のみを含みます。

デフォルトでは、 {{HTMLElement("a")}} 要素がドラッグされると、以下のデータ項目が作成されます：

- `text/x-moz-url` （Firefox のみ）: `href` 属性とリンクテキストの両方が、改行区切りで設定される。
- `text/x-moz-url-data` （Firefox のみ）: `href` のみが設定される。
- `text/x-moz-url-desc` （Firefox のみ）: リンクテキストのみが設定される。
- `text/uri-list`: `href` 属性のみが設定される。
- `text/html` （Chrome および Firefox のみ）: `<a>` 要素の完全な HTML ソースが（すべてのスタイルをインラインでつけて）設定される。
- `text/plain`: これも `href` 属性が設定される。 Chrome はこれを `text/uri-list` の前に配置する。

### 画像のドラッグ

画像の直接のドラッグ（すなわち、データはピクセルのコンテンツ）は一般的ではなく、一部のプラットフォームでは対応していないことがあります。その代わり、画像は通常その URL としてドラッグされます。そのためには、他の URL と同様に `text/uri-list` 型を使用します。データは、画像の URL、または画像がウェhブサイトやディスク上にない場合は [`data:` URL](/ja/docs/Web/URI/Reference/Schemes/data) である必要があります。

リンクと同様に、`text/plain` 型のデータにも URL を含める必要があります。ただし、`data:` URL はテキスト のコンテキストでは通常有用ではないため、この状況では `text/plain` データを除外することをお勧めします。

```js
event.dataTransfer.items.add(imageURL, "text/uri-list");
event.dataTransfer.items.add(imageURL, "text/plain");
```

デフォルトでは、 {{HTMLElement("img")}} 要素がドラッグされると、以下のデータ項目が作成されます。

- `text/x-moz-url` （Firefox のみ）: `src` 属性と代替テキストの両方が（または代替テキストが空であれば `src` を繰り返して）、改行区切りで設定される。
- `text/x-moz-url-data` （Firefox のみ）: `src` 属性のみが設定される。
- `text/x-moz-url-desc` （Firefox のみ）: 代替テキストのみ（または代替テキストが空であれば `src`）が設定される。
- `text/uri-list`: `src` 属性が設定される。
- `text/html`: `<img>` 要素の完全な HTML ソースが（すべてのスタイルをインラインでつけて）設定される。
- `text/plain` （Firefox のみ）: `src` 属性が設定される。

Safari は、画像データを含むファイル項目も作成します。このファイル項目には、`image/png` などの適切な MIME タイプが設定されます。

### 要素のドラッグ

ドラッグされたアイテムが任意の要素に `draggable="true"` をつけたものである場合、設定するデータは転送するものによって異なります。

要素を転送する一般的な方法は、シリアライズされた HTML ソースコードを含む `text/html` 型を送信し、受信側で解析して挿入することです。例えば、要素の {{domxref("Element/outerHTML","outerHTML")}} プロパティの値をそのデータに設定するのが適しています。`text/xml` も使用可能ですが、データが整形式の XML であることを確認してください。

HTML または XML データのプレーンテキスト表現を `text/plain` 型で含めることもできます。データはソースタグや属性を一切含まず、テキストのみであるべきです。

```js
event.dataTransfer.items.add("text/html", element.outerHTML);
event.dataTransfer.items.add("text/plain", element.innerText);
```

独自の目的のために作成した他の型を使用することもできます。ドラッグ対象が特定のサイトやアプリケーションに限定されているわけではないのであれば、常に `text/plain` 形式の代替を必ず含めるようにしてください。この場合、カスタム型を使用することで、データが他の場所にドロップされることが防げます。

### オペレーティングシステムのファイルエクスプローラーからのファイルのドラッグ

ドラッグされたアイテムがファイルの場合、ドラッグデータに `file` 型のアイテムが追加されます。`type` はファイルの MIME タイプ（オペレーティングシステムから提供されるもの）に設定され、型が不明な場合は `application/octet-stream` となります。現在、ドラッグされたファイルはファイルエクスプローラーなど、ブラウザー外部からのみ発生可能です。

Firefox はまた、ユーザーのファイルシステム上のファイルの完全なパスを含む、標準外の `application/x-moz-file` 型のテキスト項目を追加します。特権コード（拡張機能など）内でない限り、その値は空文字列です。

### オペレーティングシステムのファイルエクスプローラーへのファイルのドラッグ

ブラウザーの外部に転送できる内容は、主に使用するブラウザーとドラッグ先の場所によって異なります。[画像のドラッグ](#画像のドラッグ)は一般にローカルファイルシステムへの転送ができるようになっており、画像がダウンロードされます。

Chrome は標準外の `DownloadURL` 型に対応しています。データ本体は　`<MIME タイプ>:<ファイル名>:<ファイル URL>` の形式のテキストである必要があります。

```js
event.dataTransfer.items.add(
  "DownloadURL",
  "image/png:example.png:data:image/png;base64,iVBORw0K...",
);
```

これにより、任意のファイルをファイルエクスプローラーにドラッグしたとき、または別のブラウザーウィンドウにドロップしたときに、あたかも[ファイルがドロップされたかのように](#オペレーティングシステムのファイルエクスプローラーからのファイルのドラッグ)ダウンロードできます（ただし CORS 制限が適用される場合があります）。実用例については [Gmail のようなファイルドラッグ機能](https://ryanseddon.com/html5/gmail-dragout/)を参照してください。

## 関連情報

- [HTML ドラッグ＆ドロップ API (概要)](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
