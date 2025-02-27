---
title: HTML ドラッグ & ドロップ API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML ドラッグ & ドロップ**インターフェイスにより、アプリケーションはブラウザーでドラッグ & ドロップ機能を使用することができます。

ユーザーはマウスで*ドラッグ可能*な要素を選択し、その要素を*ドロップ可能*な要素へドラッグし、マウスボタンを離すことでドロップすることができます。ドラッグ操作の間、*ドラッグ可能な*要素の半透明の表示がマウスポインターに続きます。

*ドラッグ可能*にできる要素の種類、*ドラッグ可能な*要素が生成するフィードバックの種類、および*ドロップ可能な*要素はカスタマイズできます。

この HTML ドラッグ & ドロップの概要では、インターフェイスの説明、アプリケーションにドラッグ & ドロップのサポートを追加するための基本的なステップ、およびインターフェイスの相互運用性の要約があります。

## ドラッグイベント

HTML ドラッグ & ドロップ では {{domxref("Event", "DOM イベントモデル", "", 1)}} と {{domxref("MouseEvent", "マウスイベント", "", 1)}} を継承した _{{domxref("DragEvent", "ドラッグイベント", "", 1)}}_ を使います。典型的な*ドラッグ操作*は、ユーザーが*ドラッグ可能な*要素を選択したときに始まり、ユーザーが*ドロップ可能な*要素に要素をドラッグしたときに継続し、ユーザーがドラッグ可能な要素を離したときに終わります。

ドラッグ操作のあいだ、いくつかのイベント種類が発生し、そのうちいくつかは {{domxref('HTMLElement/drag_event', 'drag')}} や {{domxref('HTMLElement/dragover_event', 'dragover')}} イベントのように、複数発生することもあります。

それぞれの[ドラッグイベントの種類](/ja/docs/Web/API/DragEvent#イベントの種類)には、関連したイベントハンドラーがあります。

| イベント                                                | 発生する条件…                                                                                                                                                                |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref('HTMLElement/drag_event', 'drag')}}           | …ドラッグ項目（要素や選択テキスト）がドラッグされた場合                                                                                                                      |
| {{domxref('HTMLElement/dragend_event', 'dragend')}}     | …ドラッグ操作の終了（マウスボタンを離したり、Esc キーを押したりした場合。詳しくは[ドラッグの終了](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragend)を参照。） |
| {{domxref('HTMLElement/dragenter_event', 'dragenter')}} | …ドラッグ項目が有効なドロップ対象に入った場合（[ドラッグターゲットの特定](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets)を参照）                       |
| {{domxref('HTMLElement/dragleave_event', 'dragleave')}} | …ドラッグ項目が有効なドロップ対象を離れた場合                                                                                                                                |
| {{domxref('HTMLElement/dragover_event', 'dragover')}}   | …ドラッグ項目が有効なドロップ対象にドラッグされた場合、数百ミリ秒ごとに                                                                                                      |
| {{domxref('HTMLElement/dragstart_event', 'dragstart')}} | …ユーザーが項目をドラッグ開始した場合（[ドラッグ操作の開始](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragstart) を参照）                                      |
| {{domxref('HTMLElement/drop_event', 'drop')}}           | …項目が有効なドロップ対象にドロップされた場合（[ドロップの実行](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop) を参照）                                       |

> **メモ:** `dragstart` と `dragend` イベントは、どちらも OS からブラウザーにファイルをドラッグしたときには発生しません。

## インターフェイス

HTML ドラッグ & ドロップのインターフェイスは {{domxref("DragEvent")}}、{{domxref("DataTransfer")}}、{{domxref("DataTransferItem")}}、{{domxref("DataTransferItemList")}} です。

{{domxref("DragEvent")}} インターフェイスには、コンストラクターと {{domxref("DragEvent.dataTransfer","dataTransfer")}} プロパティ一つがあり、これは {{domxref("DataTransfer")}} オブジェクトです。

{{domxref("DataTransfer")}} オブジェクトはドラッグイベントの状態、例えば (`copy` や `move` のような) ドラッグの種類や、ドラッグのデータ (1 つ以上の項目)や、各*ドラッグ項目*の MIME タイプのようなものを含んでいます。{{domxref("DataTransfer")}} オブジェクトにはドラッグデータを追加・削除するメソッドもあります。

{{domxref("DragEvent")}} と {{domxref("DataTransfer")}} インターフェイスは、アプリケーションに HTML ドラッグ & ドロップ機能を追加するために必要な唯一のものです。 (Firefox では [Gecko 独自拡張](#gecko_特有のインターフェイス)を {{domxref("DataTransfer")}} オブジェクトへ施していますが、この拡張機能は Firefox でのみ動作します。)

それぞれの {{domxref("DataTransfer")}} オブジェクトには {{domxref("DataTransfer.items","items")}} プロパティがあり、これは {{domxref("DataTransferItem")}} オブジェクトの {{domxref("DataTransferItemList","list")}} です。 {{domxref("DataTransferItem")}} オブジェクトは単一の*ドラッグ項目*を表し、それぞれが {{domxref("DataTransferItem.kind","kind")}} プロパティ (`string` か `file` の値を取る) と項目の MIME タイプを表す {{domxref("DataTransferItem.type","type")}} プロパティを持ちます。{{domxref("DataTransferItem")}} オブジェクトにはドラッグ項目のデータを取得するメソッドもあります。

{{domxref("DataTransferItemList")}} オブジェクトは {{domxref("DataTransferItem")}} オブジェクトのリストです。このリストオブジェクトはリストにドラッグ項目を追加したり、リストからドラッグ項目を削除したり、ドラッグ項目のリストをクリアするメソッドを持ちます。

{{domxref("DataTransfer")}} と{{domxref("DataTransferItem")}} インターフェイスの主な違いは、前者が同期の {{domxref("DataTransfer.getData","getData()")}} メソッドを使ってドラッグ項目のデータにアクセスするのに対し、後者は代わりに非同期の{{domxref("DataTransferItem.getAsString","getAsString()")}} メソッドを使うことです。

> **メモ:** {{domxref("DragEvent")}} と {{domxref("DataTransfer")}} はデスクトップブラウザーでは広く対応していますが、 {{domxref("DataTransferItem")}} と {{domxref("DataTransferItemList")}} インターフェイスのブラウザーの対応は限られています。相互運用性について、より詳しくは[相互運用性](#相互運用性)を見てください。

## 基本

この節は、アプリにドラッグ & ドロップ機能を追加する基本手順のまとめです。

### ドラッグ可能なものを特定

要素を*ドラッグ可能*とするには、以下のコードのように [`draggable`](/ja/docs/Web/HTML/Global_attributes#draggable) 属性と {{domxref("HTMLElement.dragstart_event","ondragstart")}} のイベントハンドラーを追加することが求められます。

```html
<script>
  function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
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
- [ドラッグ操作ガイド](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#draggableattribute)

### ドラッグするデータの定義

アプリケーションは、ドラッグ操作にいくつでもデータ項目を含めることが自由にできます。各データ項目は特定の `type` の文字列、よくあるのは `text/html` のような MIME タイプです。

各{{domxref("DragEvent","ドラッグイベント")}}はイベントのデータを格納する{{domxref("DragEvent.dataTransfer","dataTransfer")}} プロパティを持ちます。このプロパティ (これは {{domxref("DataTransfer")}} オブジェクトです) にはドラッグデータを管理するメソッドもあります。{{domxref("DataTransfer.setData","setData()")}} メソッドはドラッグデータに項目を追加するのに使用され、その例は下記の通りです。

```js
function dragstart_handler(ev) {
  // 異なる種類のドラッグデータを追加する
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData(
    "text/uri-list",
    ev.target.ownerDocument.location.href,
  );
}
```

- ドラッグ & ドロップで使用される一般的なデータ型の一覧 (テキスト、HTML、リンク、ファイルなど) については、[推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)をご覧ください。
- ドラッグデータについて詳しくは、[ドラッグデータ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragdata)をご覧ください。

### ドラッグ画像の定義

既定では、ブラウザーはドラッグ操作中にポインターの横に現れる画像を提供します。しかし以下の例のように、アプリケーションは {{domxref("DataTransfer.setDragImage","setDragImage()")}} メソッドでカスタム画像を定義できます。

```js
function dragstart_handler(ev) {
  // 画像を作成し、ドラッグ画像として使う。
  // 注: "example.gif" は実際の画像の URL に変更してください。
  // でないと、既定ののドラッグ画像が使用されます。
  let img = new Image();
  img.src = "example.gif";
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

ドラッグフィードバック画像について詳しくは、下記を参照してください。

- [ドラッグフィードバック画像の設定](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドラッグのフィードバック画像の設定)

### ドラッグ効果の定義

{{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティはドラッグ & ドロップ操作中のユーザーへのフィードバックを管理するのに使います。よくあるのはドラッグ中にどのカーソルをブラウザーが表示するかに影響します。例えば、ユーザーがドロップターゲット上に持ってきたとき、ブラウザーのカーソルは起こる動作の種類を示すことがあります。

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

- [ドラッグの効果](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドラッグの効果)

### ドロップゾーンの定義

既定では、ブラウザーはほとんどの HTML 要素に何かがドロップされたとき、あらゆることが発生するのを防いでいます。この動作を変更して要素を*ドロップゾーン*や*ドロップ可能*にするには、要素は {{domxref("HTMLElement.dragover_event","ondragover")}} と {{domxref("HTMLElement.drop_event","ondrop")}} イベントハンドラー属性を持たねばなりません。

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
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

<p
  id="target"
  ondrop="drop_handler(event)"
  ondragover="dragover_handler(event)">
  Drop Zone
</p>
```

各ハンドラーが {{domxref("Event.preventDefault","preventDefault()")}} を呼んで、このイベントが ([タッチイベント](/ja/docs/Web/API/Touch_events)や[ポインターイベント](/ja/docs/Web/API/Pointer_events)などに) 追加で処理されることを防いでいるのに注意してください

詳しくは、以下を参照してください。

- [ドロップ先の指定](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドロップ先の指定)

### ドロップ効果の扱い

{{domxref("HTMLElement/drop_event", "drop")}} イベントのハンドラーでは、アプリケーション固有の方法でドラッグデータを自由に処理できます。

ふつう、アプリケーションは{{domxref("DataTransfer.getData","getData()")}} メソッドでドラッグ項目を取得して、そのようよ処理します。加えて、アプリケーションのセマンティクスは {{domxref("DataTransfer.dropEffect","dropEffect")}} の値や修飾キーの状態により異なります。

下記の例では、ドラッグデータからソース要素の `id` を取得し、 `id` を使ってソース要素をドロップ要素に移動するドロップハンドラーを示しています。

```html
<script>
  function dragstart_handler(ev) {
    // 対象となる要素の id を DataTransfer オブジェクトに追加する
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // 移動された要素の id を取得して、その要素を target の DOM に追加する
    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

<p id="p1" draggable="true" ondragstart="dragstart_handler(event)">
  This element is draggable.
</p>
<div
  id="target"
  ondrop="drop_handler(event)"
  ondragover="dragover_handler(event)">
  Drop Zone
</div>
```

詳しくは、以下を参照してください。

- [ドロップの実行](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドロップの実行)

### ドラッグの終了

ドラッグ操作の終わりに、 {{domxref("HTMLElement/dragend_event", "dragend")}} イベントが*ドラッグ元の*要素で発生します。 — ドラッグが開始された対象の要素です。

このイベントはドラッグの完了とキャンセルのどちらでも発生します。 {{domxref("HTMLElement/dragend_event", "dragend")}} イベントハンドラーは {{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティの値をチェックしてドラッグ操作が成功したか否かを決定できます。

ドラッグ操作の終了を扱うことの詳細は、以下を参照してください。

- [ドラッグの終了](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#ドラッグの終了)

## 相互運用性

[DataTransferItem インターフェイスのブラウザー互換性テーブル](/ja/docs/Web/API/DataTransferItem#ブラウザーの互換性)に見られるように、ドラッグ & ドロップの相互接続性はデスクトップブラウザーでは相対的に広いです（対応の少ない {{domxref("DataTransferItem")}} と {{domxref("DataTransferItemList")}} インターフェイスを除いて）。このデータはモバイルブラウザーでのドラッグ & ドロップの対応はとても低いことも示しています。

## 例とデモ

- [Copying and moving elements with the `DataTransfer` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copying and moving elements with the `DataTransferListItem` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- ファイルのドラッグ & ドロップ (Firefox のみ): <https://jsfiddle.net/9C2EF/>
- ファイルのドラッグ & ドロップ (全ブラウザー): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Drag and Drop API を使った駐車場プロジェクト: <https://park.glitch.me/> ([ここで](https://glitch.com/edit/#!/park)編集できます)

## 仕様書

{{Specifications}}

## 関連情報

- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop interoperability data from CanIUse](https://caniuse.com/#search=draganddrop)
