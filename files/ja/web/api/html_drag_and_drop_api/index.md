---
title: HTML ドラッグ＆ドロップ API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML ドラッグ＆ドロップ**インターフェイスにより、アプリケーションはブラウザーでドラッグ＆ドロップ機能を使用することができます。

ユーザーはマウスで*ドラッグ可能*な要素を選択し、その要素を*ドロップ可能*な要素へドラッグし、マウスボタンを離すことでドロップすることができます。ドラッグ操作の間、*ドラッグ可能な*要素の半透明の表示がマウスポインターに続きます。

*ドラッグ可能*にできる要素の種類、*ドラッグ可能な*要素が生成するフィードバックの種類、および*ドロップ可能な*要素はカスタマイズできます。

この HTML ドラッグ＆ドロップの概要では、インターフェイスの説明、アプリケーションにドラッグ＆ドロップのサポートを追加するための基本的なステップ、およびインターフェイスの相互運用性の要約があります。

## 概念と使用法

表面上、ドラッグ＆ドロップには実際には 3 つの異なる用途があります。[ページ内での要素のドラッグ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board)、ページからのデータのドラッグ、そして[ページへのデータのドラッグ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)です。これらは微妙に異なる要件と実装を有しています。しかしながら、ドラッグ＆ドロップ API は、これら全てのインタラクションを統一的なモデルで捉えることを可能にしています。

ドラッグ操作の核心には、以下の 3 つの要素が含まれます。

- [ドラッグされるアイテム](#ドラッグ可能なアイテム)
- [転送される背後のデータ](#ドラッグデータストア)
- [ドロップターゲット](#ドロップターゲット)

必ずしもこれら 3 つすべてが自分の制御下にあるとは限りませんし、自分で定義する必要があるわけでもありません。

- 外部データをページにドラッグする場合、定義すべきドラッグ可能なアイテムは存在しません（例えば、オペレーティングシステムのファイルエクスプローラー内のファイルなどが該当します）。
- ページ内で要素をドラッグする際、転送されるデータを定義する必要はほとんどありません。ドラッグされた要素を操作するだけで十分です。
- ページ外へドラッグする場合、ドロップ先を定義する必要はありません。

それぞれがどのように定義され、使用されるかについて見ていきましょう。

### ドラッグイベント

HTML ドラッグ＆ドロップ では [DOM イベントモデル](/ja/docs/Web/API/Event)と、[マウスイベント](/ja/docs/Web/API/MouseEvent)から継承した[ドラッグイベント](/ja/docs/Web/API/DragEvent)を使います。ドラッグ操作のあいだ、いくつかのイベント種類が発生し、そのうちいくつかは {{domxref('HTMLElement/drag_event', 'drag')}} や {{domxref('HTMLElement/dragover_event', 'dragover')}} イベントのように、複数発生することもあります。

| イベント                                                | 発生する条件                                                                                                    |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{domxref('HTMLElement/dragstart_event', 'dragstart')}} | [ドラッグ可能なアイテム](#draggable_items)のドラッグが開始されたとき。                                          |
| {{domxref('HTMLElement/drag_event', 'drag')}}           | ドラッグ可能なアイテムがドラッグされているとき、数百ミリ秒ごとに。                                              |
| {{domxref('HTMLElement/dragenter_event', 'dragenter')}} | その要素に入ってきたドラッグ可能なアイテムがあるとき。                                                          |
| {{domxref('HTMLElement/dragleave_event', 'dragleave')}} | その要素から出ていくドラッグ可能なアイテムがあるとき。                                                          |
| {{domxref('HTMLElement/dragover_event', 'dragover')}}   | その要素の上をドラッグ可能なアイテムがドラッグされているとき、数百ミリ秒ごとに。                                |
| {{domxref('HTMLElement/drop_event', 'drop')}}           | その要素が[ドロップターゲット](#ドロップターゲット)であり、ドラッグ可能なアイテムがその上にドロップされたとき。 |
| {{domxref('HTMLElement/dragend_event', 'dragend')}}     | ドラッグ可能なアイテムのドラッグが終了されたとき。                                                              |

> [!NOTE]
> `dragstart` と `dragend` イベントは、どちらも OS からブラウザーにファイルをドラッグしたときには発生しません。
>
> 同様に、`dragenter`、`dragleave`、`dragover`、`drop` の各イベントは、ドロップ先となりうる要素上で発生します。したがって、アイテムをブラウザーの外へドラッグしている際には発生しません。

詳しくは、[ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)を参照してください。

### ドラッグ可能なアイテム

HTML では、画像、リンク、および選択範囲はデフォルトでドラッグ可能です。任意の要素をドラッグ可能にするには、[`draggable`](/ja/docs/Web/HTML/Reference/Global_attributes/draggable) 属性を `"true"` の値に設定してください。

```html live-sample___draggable_element live-sample___drop_target
<p id="p1" draggable="true">この要素はドラッグ可能です。</p>
```

この時点で、要素にはドラッグ用の外観が既に適用されていますが、動作はまだ定義されていません。

{{EmbedLiveSample("draggable_element", "", 100)}}

画像やリンクについては、`draggable` プロパティはデフォルトで `true` に設定されています。これらの要素のドラッグ機能を無効にする場合のみ、`false` に設定してください。ドラッグ不可の要素では、通常「ドラッグ」操作を行うと、代わりにテキストが選択されます。

> [!NOTE]
> 要素がドラッグ可能に設定されると、その内部のテキストやその他の要素は、通常のマウスクリックとドラッグ操作では選択できなくなります。代わりに、ユーザーはテキストを選択する際、<kbd>Alt</kbd> キーを押したままマウスを使用するか、キーボード操作を行わなければなりません。

選択範囲もドラッグ可能です。この場合、ソースノード、すなわち `dragstart` や `dragend` といった各種イベントは、ドラッグが開始されたテキストノードで発生します。選択範囲は、テキストノードや要素ノードを含む複数のノードを部分的または完全に包含することができ、これらはすべて同時にドラッグされているものとみなされます。

前述の通り、ドラッグされるアイテムはウェブページ上にないもの、例えばオペレーティングシステムのファイルエクスプローラー内のファイルなども対象となります。ただし、 {{domxref('HTMLElement/dragstart_event', 'dragstart')}} および {{domxref('HTMLElement/dragend_event', 'dragend')}} イベントを発生させることができるのは、ウェブページ上のアイテムのみです。

詳しくは、[ドラッグ操作ガイド](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)を参照してください。

### ドラッグデータストア

JavaScript オブジェクトを任意のウェブページへ直接転送することはできませんし、外部アプリケーションへの転送はなおさら不可能です。そのため、ウェブページとデータのやり取りを行うには、データを文字列に（または {{domxref("File")}} として）シリアライズする必要があります。ドラッグ＆ドロップでは、この文字列は {{domxref("DataTransferItem")}} オブジェクトにカプセル化されます。このオブジェクトは特定の `type`（通常は `text/html` などの MIME タイプ）も定義しており、文字列の解釈方法を規定します。

それぞれのドラッグ＆ドロップ操作には、関連付けられた「ドラッグデータストア」が存在します。これは、{{domxref("DragEvent")}} の {{domxref("DragEvent.dataTransfer","dataTransfer")}} プロパティを通じてアクセス可能な {{domxref("DataTransfer")}} オブジェクトです。画像、リンク、選択範囲などのデフォルトでドラッグ可能な項目については、ドラッグデータはブラウザーによって既に定義されています。一方、`draggable`属性を使用して定義されたカスタムのドラッグ可能要素については、ドラッグデータを自身で定義する必要があります。データストアへの変更を加えられるのは、 {{domxref("HTMLElement/dragstart_event", "dragstart")}} ハンドラー内のみです。その他のドラッグイベントにおける `dataTransfer` では、データストアは変更できません。

{{domxref("DataTransfer.setData","setData()")}} メソッドはドラッグデータに項目を追加するのに使用され、その例は下記の通りです。

```js live-sample___drop_target
function dragstartHandler(ev) {
  // 異なる種類のドラッグデータを追加する
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData(
    "text/uri-list",
    ev.target.ownerDocument.location.href,
  );
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

さらに、データストアから「読み取り」が可能なのは、`dragstart` イベントを除き、`drop` イベント中のみとなります（これによりドロップ先がデータを取得できます）。その他のイベントでは、データストアにアクセスすることはできません。

詳しくは、[ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)を参照してください。

### ドロップターゲット

「ドロップターゲット」とは、ユーザーがドラッグしたアイテムをドロップできる要素のことです。デフォルトでは、ほとんどの要素はドロップターゲットではありません。ドラッグを解除すると、「フライバック」アニメーションが表示され、ドラッグ＆ドロップが失敗したことを示します。任意の要素は、自身で発生する {{domxref("HTMLElement.dragover_event","dragover")}} イベントを `preventDefault()` でキャンセルすることにより、ドロップターゲットとなることが可能です。

{{domxref("HTMLElement/drop_event", "drop")}} イベントはドロップターゲット上でしか発生せず、ドラッグデータストアを読み取れる唯一のタイミングとなります。

以下の例は、最小限の有効なドロップターゲットを示しており、また、これ以前の例のコードも組み合わせています。

```html live-sample___drop_target
<p id="target">ドロップゾーン</p>
```

```js live-sample___drop_target
const target = document.getElementById("target");

// dragover をキャンセルすると、drop が発生する
target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});
target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  ev.target.append(data);
});
```

{{EmbedLiveSample("drop_target", "", 300)}}

詳しい情報は、[ドロップ先の指定](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドロップ先の指定)を参照してください。

## ガイド

- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
  - : ドラッグ＆ドロップ操作中に発生する手順について説明し、各ハンドラー内でアプリケーションが実行すべき処理を記述します。
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
  - : ドラッグ＆ドロップ操作中に、ドラッグデータストアへの読み書きを行う方法について説明します。
- [ファイルのドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
  - : ファイルのドラッグ＆ドロップ操作を受け付ける基本インターフェイスの実装に関する実践ガイドです。
- [ドラッグ＆ドロップのできるカンバンボード](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board)
  - : ウェブページ内で要素をドラッグ＆ドロップする機能を備えたカンバンボードを実装するための実践ガイドです。

## インターフェイス

- {{domxref("DragEvent")}}
  - : ドラッグイベントハンドラーに渡されるイベントオブジェクトです。
- {{domxref("DataTransfer")}}
  - : コンテキスト間で転送されるあらゆるデータを保持します。テキストアイテムとファイルアイテムで構成されています。当初はドラッグ＆ドロップ用に設計されたものですが、現在では[クリップボード API](/ja/docs/Web/API/Clipboard_API) などの他のコンテキストでも使用されています。
- {{domxref("DataTransferItem")}}
  - : ドラッグデータストア内の 1 つのアイテムを表します。これはテキストアイテムまたはファイルアイテムとなります。
- {{domxref("DataTransferItemList")}}
  - : ドラッグデータストア内の {{domxref("DataTransferItem")}} オブジェクトのリストを表します。

## 例とデモ

- [Copying and moving elements with the `DataTransfer` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copying and moving elements with the `DataTransferListItem` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)

各インターフェイスのリファレンスページには、個別の例も掲載されています。

## 仕様書

{{Specifications}}

## 関連情報

- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [ドラッグデータストアでの作業](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop interoperability data from CanIUse](https://caniuse.com/#search=draganddrop)
