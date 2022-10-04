---
title: HTML ドラッグ＆ドロップ API
slug: Web/API/HTML_Drag_and_Drop_API
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML ドラッグ & ドロップ**インターフェイスにより、アプリケーションはブラウザーでドラッグ＆ドロップ機能を使用することができます。ユーザーはマウスで*ドラッグ可能*な要素を選択し、その要素を*ドロップ可能*な要素へドラッグし、マウスボタンを離すことでドロップすることができます。ドラッグ操作の間、*ドラッグ可能な*要素の半透明の表示がマウスポインターに続きます。

ウェブサイト、拡張機能、XUL アプリケーションでは、*ドラッグ可能*にできる要素の種類、*ドラッグ可能な*要素が生成するフィードバックの種類、および*ドロップ可能な*要素をカスタマイズできます。

この HTML ドラッグ＆ドロップの概要では、インターフェイスの説明、アプリケーションにドラッグ＆ドロップのサポートを追加するための基本的なステップ、およびインターフェイスの相互運用性の要約が含まれています。

## ドラッグイベント

HTML ドラッグ & ドロップ では {{domxref("Event","DOM イベントモデル")}} と {{domxref("MouseEvent","マウスイベント")}} を継承した _{{domxref("DragEvent","ドラッグイベント")}}_ を使います。典型的な*ドラッグ操作は* ユーザーが*ドラッグ可能な*要素を選択したときと、*ドロップ可能な*要素に要素をドラッグしたとき、ドラッグ可能な要素を離したときに開始します。

ドラッグ操作のあいだ、いくつかのイベント種類が発生し、そのうちいくつかは {{domxref('Document/drag_event', 'drag')}} や {{domxref('Document/dragover_event', 'dragover')}} イベントのように、複数発生することもあります。

おのおのの [ドラッグイベントタイプ](/ja/docs/Web/API/DragEvent#Event_types)には関連した[グローバルイベントハンドラー](/ja/docs/Web/API/DragEvent#GlobalEventHandlers)があります。

| イベント                                                             | On イベントハンドラー                                                            | 発生する条件…                                                                                                                                                                                        |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref('Document/drag_event', 'drag')}}             | {{domxref('GlobalEventHandlers.ondrag','ondrag')}}             | …ドラッグ項目 (要素や選択テキスト) がドラッグされた場合                                                                                                                                              |
| {{domxref('Document/dragend_event', 'dragend')}}     | {{domxref('GlobalEventHandlers.ondragend','ondragend')}}     | …ドラッグ操作の終了 (マウスボタンを離したり、Esc キーを押したりした場合。詳しくは[ドラッグの終了](/ja/docs/DragDrop/Drag_Operations#dragend)を参照してください。) |
| {{domxref('Document/dragenter_event', 'dragenter')}} | {{domxref('GlobalEventHandlers.ondragenter','ondragenter')}} | …ドラッグ項目が有効なドロップ対象に入った場合([Specifying Drop Targets](/ja/docs/DragDrop/Drag_Operations#droptargets) を見てください)                                     |
| {{domxref('Document/dragexit_event', 'dragexit')}} | {{domxref('GlobalEventHandlers.ondragexit','ondragexit')}}     | …要素がドラッグ操作の選択対象でなくなった場合                                                                                                                                                        |
| {{domxref('Document/dragleave_event', 'dragleave')}} | {{domxref('GlobalEventHandlers.ondragleave','ondragleave')}} | …ドラッグ項目が有効なドロップ対象を離れた場合                                                                                                                                                        |
| {{domxref('Document/dragover_event', 'dragover')}} | {{domxref('GlobalEventHandlers.ondragover','ondragover')}}     | …ドラッグ項目が有効なドロップ対象にドラッグされた場合、数百ミリ秒ごとに                                                                                                                              |
| {{domxref('Document/dragstart_event', 'dragstart')}} | {{domxref('GlobalEventHandlers.ondragstart','ondragstart')}} | …ユーザーが項目をドラッグ開始した場合([ドラッグ操作の開始](/ja/docs/DragDrop/Drag_Operations#dragstart) を見てください)                                                  |
| {{domxref('Document/drop_event', 'drop')}}             | {{domxref('GlobalEventHandlers.ondrop','ondrop')}}             | …項目が有効なドロップ対象にドロップされた場合([ドロップの実行](/ja/docs/DragDrop/Drag_Operations#drop) を見てください)                                                           |

> **メモ:** `dragstart` と `dragend` イベントは、どちらも OS からブラウザーにファイルをドラッグしたときには発生しません。

## インターフェイス

HTML ドラッグとドロップのインターフェイスは {{domxref("DragEvent")}}, {{domxref("DataTransfer")}}, {{domxref("DataTransferItem")}} {{domxref("DataTransferItemList")}} です。

{{domxref("DragEvent")}} インターフェイスには、コンストラクターと {{domxref("DragEvent.dataTransfer","dataTransfer")}} プロパティ一つがあり、これは {{domxref("DataTransfer")}} オブジェクトです。

{{domxref("DataTransfer")}} オブジェクトはドラッグイベントの状態、例えば (`copy` や `move` のような) ドラッグの種類や、ドラッグのデータ (1 つ以上の項目)や、各*ドラッグ項目*の MIME タイプのようなものを含んでいます。{{domxref("DataTransfer")}} オブジェクトにはドラッグデータを追加・削除するメソッドもあります。

{{domxref("DragEvent")}} と {{domxref("DataTransfer")}} インターフェイスは、アプリケーションに HTML ドラッグ & ドロップ機能を追加するために必要な唯一のものです。 (Firefox では [Gecko 独自拡張](#gecko_specific_interfaces) を {{domxref("DataTransfer")}} オブジェクトへ施していますが、この拡張機能は Firefox でのみ動作します。)

それぞれの {{domxref("DataTransfer")}} オブジェクトには {{domxref("DataTransfer.items","items")}} プロパティがあり、これは {{domxref("DataTransferItem")}} オブジェクトの {{domxref("DataTransferItemList","list")}} です。 {{domxref("DataTransferItem")}} オブジェクトは単一の*ドラッグ項目*を表し、それぞれが {{domxref("DataTransferItem.kind","kind")}} プロパティ (`string` か `file` の値を取る) と項目の MIME タイプを表す {{domxref("DataTransferItem.type","type")}} プロパティを持ちます。{{domxref("DataTransferItem")}} オブジェクトにはドラッグ項目のデータを取得するメソッドもあります。

{{domxref("DataTransferItemList")}} オブジェクトは {{domxref("DataTransferItem")}} オブジェクトのリストです。このリストオブジェクトはリストにドラッグ項目を追加したり、リストからドラッグ項目を削除したり、ドラッグ項目のリストをクリアするメソッドを持ちます。

{{domxref("DataTransfer")}} と{{domxref("DataTransferItem")}} インターフェイスの主な違いは、前者が同期の {{domxref("DataTransfer.getData","getData()")}} メソッドを使ってドラッグ項目のデータにアクセスするのに対し、後者は代わりに非同期の{{domxref("DataTransferItem.getAsString","getAsString()")}} メソッドを使うことです。.

> **メモ:** {{domxref("DragEvent")}} と {{domxref("DataTransfer")}} はデスクトップブラウザーでは広く対応していますが、 {{domxref("DataTransferItem")}} と {{domxref("DataTransferItemList")}} インターフェイスのブラウザーの対応は限られています。相互運用性について、より詳しくは[相互運用性](#interoperability)を見てください。

### Gecko-特有のインターフェイス

Mozilla と Firefox は、標準のドラッグ＆ドロップのモデルに含まれていないいくつかの機能に対応しています。複数の項目や、文字列以外のデータ (ファイルなど) をドラッグしたりする補助になる*便利な関数*があります。詳しくは[複数の項目のドラッグ＆ドロップ](/ja/docs/DragDrop/Dragging_and_Dropping_Multiple_Items)を参照してください。加えて、{{domxref("DataTransfer")}} リファレンスページを見るとすべての [Gecko 固有プロパティ](/ja/docs/Web/API/DataTransfer#Gecko_properties)と [Gecko 固有メソッド](/ja/docs/Web/API/DataTransfer#Gecko_methods)がわかります。

## 基本

この節は、アプリにドラッグ&ドロップ機能を追加する基本手順のまとめです。

### *ドラッグ可能なものを*特定する

要素を*ドラッグ可能*とするには、以下のコードのように {{htmlattrxref("draggable")}} 属性と {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} のグローバルイベントハンドラを追加することが求められます:

```html
<script>
  function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
  });
</script>

<p id="p1" draggable="true">この要素はドラッグできます。</p>
```

詳しくは、以下の記事を参照してください。

- [draggable 属性リファレンス](/ja/docs/Web/HTML/Global_attributes/draggable)
- [ドラッグ操作ガイド](/ja/docs/Web/Guide/HTML/Drag_operations#draggableattribute)

### ドラッグするデータの定義

アプリケーションは、ドラッグ操作にいくつでもデータ項目を含めることが自由にできます。各データ項目は特定 `type` の {{domxref("DOMString","string")}} —よくあるのは `text/html` のような MIME タイプです。

各{{domxref("DragEvent","ドラッグイベント")}}はイベントのデータを格納する{{domxref("DragEvent.dataTransfer","dataTransfer")}} プロパティを持ちます。このプロパティ (これは {{domxref("DataTransfer")}} オブジェクトです) にはドラッグデータを管理するメソッドもあります。{{domxref("DataTransfer.setData","setData()")}} メソッドはドラッグデータに項目を追加するのに使用され、その例は下記の通りです。

```js
function dragstart_handler(ev) {
  // 異なる種類のドラッグデータを追加する
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);
}
```

- ドラッグ＆ドロップで使用される一般的なデータ型の一覧 (テキスト、HTML、リンク、ファイルなど) については、[推奨されるドラッグ型](/ja/docs/DragDrop/Recommended_Drag_Types)をご覧ください。
- ドラッグデータについて詳しくは、[ドラッグデータ](/ja/docs/DragDrop/Drag_Operations#dragdata)をご覧ください。

### ドラッグ画像の定義

既定では、ブラウザーはドラッグ操作中にポインターの横に現れる画像を提供します。しかし以下の例のように、アプリケーションは {{domxref("DataTransfer.setDragImage","setDragImage()")}} メソッドでカスタム画像を定義できます。

```js
function dragstart_handler(ev) {
  // 画像を作成し、ドラッグ画像として使う。
  // 注: "example.gif" は実際の画像の URL に変更してください。
  // でないと、既定ののドラッグ画像が使用されます。
  let img = new Image();
  img.src = 'example.gif';
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

ドラッグフィードバック画像について詳しくは、下記を参照してください。

- [ドラッグフィードバック画像の設定](/ja/docs/DragDrop/Drag_Operations#dragfeedback)

### ドラッグ*効果*の定義

{{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティはドラッグ&ドロップ操作中のユーザーへのフィードバックを管理するのに使います。よくあるのはドラッグ中にどのカーソルをブラウザーが表示するかに影響します。例えば、ユーザーがドロップターゲット上に持ってきたとき、ブラウザーのカーソルは起こる動作の種類を示すことがあります。

3 通りの効果が発生する可能性があります。

1. **`copy`** はドラッグしたデータが現在の場所からドロップされる場所にコピーされることを示します。
2. **`move`** はドラッグデータが現在の場所からドロップされる場所に移動されることを示します。
3. **`link`** はドラッグデータが元からドロップ先にある種の関連や接続が作成されることを示します。

ドラッグ操作の間、ある効果はある場所にだけ許可されることを示すために、ドラッグ効果は変更される場合があります。

下記の例はこのプロパティの使い方を示します。

```js
function dragstart_handler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

詳しくは以下を参照してください。

- [Drag の効果](/ja/docs/Web/Guide/HTML/Drag_operations#drageffects)

### *ドロップゾーン*の定義

既定では、ブラウザーはほとんどの HTML 要素に何かがドロップされたとき、あらゆることが発生するのを防いでいます。この動作を変更して要素を*ドロップゾーン*や*ドロップ可能*にするには、要素は{{domxref("GlobalEventHandlers.ondragover","ondragover")}} と {{domxref("GlobalEventHandlers.ondrop","ondrop")}} イベントハンドラー属性を持たねばなりません。

以下の例は、この属性の使い方と、各属性の基本的なイベントハンドラーを示しています。

```html
<script>
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
 ev.preventDefault();
 // 移動された要素のidを取得して、その要素をtargetのDOMに追加する
 var data = ev.dataTransfer.getData("text/plain");
 ev.target.appendChild(document.getElementById(data));
}
</script>

<p id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Drop Zone</p>
```

各ハンドラーが {{domxref("Event.preventDefault","preventDefault()")}} を呼んで、このイベントが ([タッチイベント](/ja/docs/Web/API/Touch_events)や[ポインターイベント](/ja/docs/Web/API/Pointer_events)などに) 追加で処理されることを防いでいるのに注意してください

詳しくは、以下を参照してください。

- [ドロップ先の指定](/ja/docs/Web/Guide/HTML/Drag_operations#droptargets)

### ドロップ*効果*を扱う

{{domxref("Document/drop_event", "drop")}} イベントのハンドラーでは、アプリケーション固有の方法でドラッグデータを自由に処理できます。

ふつう、アプリケーションは{{domxref("DataTransfer.getData","getData()")}} メソッドでドラッグ項目を取得して、そのようよ処理します。加えて、アプリケーションのセマンティクスは {{domxref("DataTransfer.dropEffect","dropEffect")}} の値や修飾キーの状態により異なります。

下記の例では、ドラッグデータからソース要素の `id` を取得し、 `id` を使ってソース要素をドロップ要素に移動するドロップハンドラのを示しています。

```html
<script>
function dragstart_handler(ev) {
 // 対象となる要素の id を DataTransfer オブジェクトに追加する
 ev.dataTransfer.setData("application/my-app", ev.target.id);
 ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
 ev.preventDefault();
 // 移動された要素の id を取得して、その要素を target の DOM に追加する
 const data = ev.dataTransfer.getData("application/my-app");
 ev.target.appendChild(document.getElementById(data));
}
</script>

<p id="p1" draggable="true" ondragstart="dragstart_handler(event)">This element is draggable.</p>
<div id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Drop Zone</div>
```

詳しくは、以下を参照してください。

- [ドロップの実行](/ja/docs/Web/Guide/HTML/Drag_operations#drop)

### ドラッグの終了

ドラッグ操作の終わりに、 {{domxref("Document/dragent_event", "dragend")}} イベントが*ドラッグ元の*要素で発生します。 — ドラッグが開始された対象の要素です。

このイベントはドラッグの完了とキャンセルのどちらでも発生します。 {{domxref("Document/dragent_event", "dragend")}} イベントハンドラーは {{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティの値をチェックしてドラッグ操作が成功したか否かを決定できます。

ドラッグ操作の終了を扱うことの詳細は、以下を参照してください。

- [ドラッグの終了](/ja/docs/DragDrop/Drag_Operations#dragend)

## 相互運用性

[DataTransferItem インターフェイスのブラウザー互換性テーブル](/ja/docs/Web/API/DataTransferItem#Browser_compatibility)に見られるように、ドラッグ&ドロップの相互接続性はデスクトップブラウザーでは相対的に広いです(サポートの少ない{{domxref("DataTransferItem")}} と{{domxref("DataTransferItemList")}} インターフェイスを除いて)。このデータはモバイルブラウザーでのドラッグ&ドロップサポートはとても低いことも示しています。

## 例とデモ

- [Copying and moving elements with the `DataTransfer` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copying and moving elements with the `DataTransferListItem` interface](http://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- ファイルのドラッグ&ドロップ (Firefox のみ): <http://jsfiddle.net/9C2EF/>
- ファイルのドラッグ&ドロップ (全ブラウザー): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Drag and Drop API を使った駐車場プロジェクト: <https://park.glitch.me/> ([ここで](https://glitch.com/edit/#!/park)編集できます)

## 関連情報

- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [複数アイテムのドラッグとドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop interoperability data from CanIUse](http://caniuse.com/#search=draganddrop)
