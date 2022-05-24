---
title: 複数のアイテムのドラッグ＆ドロップ
slug: Web/API/HTML_Drag_and_Drop_API/Multiple_items
tags:
  - Gecko
  - ガイド
  - 標準外
  - ドラッグ＆ドロップ
translation_of: Web/API/HTML_Drag_and_Drop_API/Multiple_items
original_slug: DragDrop/Dragging_and_Dropping_Multiple_Items
---
{{DefaultAPISidebar("HTML Drag and Drop API")}}

> **Warning:** **moz** の接頭辞がついたメソッドやプロパティ（**mozSetDataAt()** など）は Gecko 固有のインターフェイスです。これらのインターフェイスは Gecko ベースのブラウザーで**しか**動作しません。

Mozilla はいくつかの標準外の機能を使用した、複数のアイテムのドラッグができる機能に対応しています。これは {{domxref("DataTransfer.types","types")}} プロパティと、同様に {{domxref("DataTransfer.getData","getData()")}}, {{domxref("DataTransfer.setData","setData()")}}, {{domxref("DataTransfer.clearData","clearData()")}} メソッドを反映したものですが、取得、修正、削除するアイテムの位置を指定する追加の引数を取ります。

この記事で説明するドラッグ処理は、 {{domxref("DataTransfer")}} インターフェイスを利用します．この処理は {{domxref("DataTransferItem")}} インターフェイスおよび {{domxref("DataTransferItemList")}} インターフェイスは使用しません。

## 位置を使用した設定および取得

{{domxref("DataTransfer.mozSetDataAt","mozSetDataAt()")}} メソッドで、 {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントの間に
複数のアイテムを追加することができます。これは {{domxref("DataTransfer.setData","setData()")}} と似ています。

```js
var dt = event.dataTransfer;
dt.mozSetDataAt("text/plain", "ドラッグされるデータ", 0);
dt.mozSetDataAt("text/plain", "ドラッグされる 2 つ目のデータ", 1);
```

この例では 2 つのドラッグアイテムを追加しています。最後の引数は追加するアイテムの位置を示しています。これらのアイテムは 0 番から順番に登録する必要があり、最後の方（位置の大きなもの）から逆順に登録することはできません。また、すでにデータが登録されている位置を指定してもう一度データを登録すると、前に登録したデータを置き換えることができます。位置として 0 を指定すると、 {{domxref("DataTransfer.setData","setData()")}} を呼び出すことと同等になります。

アイテムを削除するには、 {{domxref("DataTransfer.mozClearDataAt","mozClearDataAt()")}} メソッドを使用します。

```js
event.dataTransfer.mozClearDataAt("text/plain", 1);
```

注意: ある位置で示されるアイテムについて、最後のデータ形式の削除によってアイテム全体を削除すると、残りのアイテムが繰り上がってアイテムの位置が変わることに注意してください。例えば、次のようのコードを見てください。

```js
var dt = event.dataTransfer;
dt.mozSetDataAt("text/uri-list", "URL1", 0);
dt.mozSetDataAt("text/plain",    "URL1", 0);
dt.mozSetDataAt("text/uri-list", "URL2", 1);
dt.mozSetDataAt("text/plain",    "URL2", 1);
dt.mozSetDataAt("text/uri-list", "URL3", 2);
dt.mozSetDataAt("text/plain",    "URL3", 2);
// [item1] data=URL1, index=0
// [item2] data=URL2, index=1
// [item3] data=URL3, index=2
```

このように 2 つの異なる形式による 3 つのアイテムを登録した後で、

```js
dt.mozClearDataAt("text/uri-list", 1);
dt.mozClearDataAt("text/plain", 1);
```

このように 2 番目のアイテムについてすべての形式のデータを削除すると、 3 番目だったアイテムが繰り上がって 2 番目になり、位置が 2 から 1 に変わります。

```js
// [item1] data=URL1, index=0
// [item2] data=URL3, index=1
```

幸いなことに、通常はアイテムを削除する必要がある場合は希で、それよりも、必要に応じてアイテムを追加するだけの場合の方がずっと多いです。

複数のアイテムのドラッグが使われる場合の代表例は、複数のファイルやブックマークをドラッグする時です。この場合には、適切な形式でそれらのアイテムを追加してください。また必須ではありませんが、それぞれのアイテムは常に同じ形式でデータを追加するべきです。これによりドロップ対象は、一貫したデータの受け取りを期待できます。

複数のファイルがドラッグされているかどうかを確認するには、 {{domxref("DataTransfer.mozItemCount","mozItemCount")}} プロパティを調べます。このプロパティにはドラッグされているアイテムの数がセットされます。もしそのドロップ先が 1 つのアイテムのドロップだけを受け付ける場合には、ドラッグされたアイテムすべてを拒否することもできますし、最初のアイテムだけを受け取ることもできます。複数のアイテムの受け取りを拒否するには、 {{domxref("HTMLElement/dragover_event", "dragover")}} イベントをキャンセルしないか、 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} プロパティに `none` を指定します。他のイベントリスナーがすでにイベントをキャンセルしている場合に備えて、両方を実行しても構いません。

ドロップされたアイテムのうち最初のアイテムだけを扱う場合は、 1 つだけのアイテムのドラッグの場合と同様に {{domxref("DataTransfer.getData","getData()")}} を使います。これは、何も追加の処理が必要ないドロップアイテムを1つだけ受け取るドロップ対象のために有用です。

それに対して、任意の位置のアイテムをデータトランスファーから取得するには {{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} メソッドを使います。以下の例は、ドラッグされたファイルを取得し、それらを配列に追加するものです。

```js
function onDrop(event)
{
  var files = [];
  var dt = event.dataTransfer;
  for (var i = 0; i < dt.mozItemCount; i++)
    files.push(dt.mozGetDataAt("application/x-moz-file", i));
}
```

{{domxref("DataTransfer.mozTypesAt","mozTypesAt")}} メソッドを使って、望んでいる形式のデータが存在しているかどうかを確かめたくなるかもしれません。 {{domxref("DataTransfer.types","types")}} プロパティと同様に、このメソッドは、そのアイテムが保持しているデータの型の文字列を返します。 {{domxref("DataTransfer.types","types")}} プロパティを取得する事は、位置が 0 のアイテムの型のリストを取得する事に等しくなります。

```js
var types = event.dataTransfer.mozTypesAt(1);
```

## 文字列でないデータのドラッグ

上で解説した追加のメソッドが扱えるデータは文字列に限定されず、どんな種類のデータでも指定することができます。例えば、ファイルは [application/x-moz-file](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file) 型で `nsIFile` のオブジェクトとして保持されてドラッグされます。 {{domxref("DataTransfer.setData","setData()")}} メソッドは文字列しか対応しておらず、 ドラッグするファイルを指定するのには利用できないため、代わりに {{domxref("DataTransfer.mozSetDataAt","mozSetDataAt()")}} メソッドを使わなくてはなりません。

```js
dt.mozSetDataAt("application/x-moz-file", file, 0);
```

複数のアイテムを扱う必要がない場合でも、このメソッドを使うことによって任意のオブジェクトをデータに指定できます。この場合には、位置として 0 を指定しておきます。

同様に、ファイルやその他のオブジェクトを取得するには {{domxref("DataTransfer.mozGetDataAt","mozGetDataAt()")}} メソッドを使う必要があります。もし {{domxref("DataTransfer.getData","getData()")}} を使った場合は、値が文字列でない型のデータは空文字として取得されます。ただし、数値のような単純な型のデータについては文字列に変換できるため、この場合は {{domxref("DataTransfer.getData","getData()")}} を使っても問題ありません。

## 複数アイテムのドロップの例

次の例では、ドロップしたアイテムとフォーマットのリストが表示されるボックスが用意されています。

```html
<html>
<head>
<script>

function dodrop(event)
{
  var dt = event.dataTransfer;
  var count = dt.mozItemCount;
  output("Items: " + count + "\n");

  for (var i = 0; i < count; i++) {
    output(" Item " + i + ":\n");
    var types = dt.mozTypesAt(i);
    for (var t = 0; t < types.length; t++) {
      output("  " + types[t] + ": ");
      try {
        var data = dt.mozGetDataAt(types[t], i);
        output("(" + (typeof data) + ") : <" + data + " >\n");
      } catch (ex) {
        output("<<error>>\n");
        dump(ex);
      }
    }
  }
}

function output(text)
{
  document.getElementById("output").textContent += text;
  dump(text);
}

</script>
</head>
<body>

<div id="output" style="min-height: 100px; white-space: pre; border: 1px solid black;"
      ondragenter="document.getElementById('output').textContent = ''; event.stopPropagation(); event.preventDefault();"
      ondragover="event.stopPropagation(); event.preventDefault();"
      ondrop="event.stopPropagation(); event.preventDefault(); dodrop(event);">

<div>

  Fix</div>
</div>

</body>
</html>
```
この例では、 {{domxref("HTMLElement/dragenter_event", "dragenter")}} と `{{domxref("HTMLElement/dragover_event", "dragover")}}` の両イベントを {{domxref("Event.preventDefault","preventDefault()")}} メソッドでキャンセルします。これにより、要素の上でのドロップが可能になっています。

アイテムをドロップした時に、 `dodrop` イベントハンドラーが呼び出されます。この関数は {{domxref("DataTransfer.mozItemCount","mozItemCount")}} プロパティを見て、いくつのアイテムがドロップされたのかを調べ、それらに繰り返し処理を行います。それぞれのアイテムについて、型の一覧を得るために {{domxref("DataTransfer.mozTypesAt","mozTypesAt")}} メソッドが呼ばれます。この一覧の生成処理は、ドラッグに対して関連づけられたすべてのデータに対して繰り返されます。

この例は、あるドラッグ操作が保持しているデータを確かめたい時に便利です。ただアイテムをこの例のドロップ対象にドロップするだけで、ドラッグされたどのアイテムがどんな形式でどのようなデータを保持しているのかを見ることができます。

## 関連情報

- [HTML ドラッグ＆ドロップ API （概要）](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
