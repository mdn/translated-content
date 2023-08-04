---
title: DataTransfer
slug: Web/API/DataTransfer
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer`** オブジェクトは、ドラッグ＆ドロップ操作中にドラッグされているデータを保持するために使用されます。これは、1 つ以上のデータ項目を保持することができ、それぞれが 1 つ以上のデータ型を持ちます。ドラッグ＆ドロップの詳細については、[HTML ドラッグ＆ドロップ API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) を参照してください。

このオブジェクトはすべての {{domxref("DragEvent","ドラッグイベント")}} の {{domxref("DragEvent.dataTransfer","dataTransfer")}} プロパティからアクセスすることができます。

## コンストラクター

- {{domxref("DataTransfer.DataTransfer","DataTransfer()")}}
  - : 新しい `DataTransfer` オブジェクトを作成して返す。

## プロパティ

### 標準プロパティ

- {{domxref("DataTransfer.dropEffect")}}
  - : 現在選択されているドラッグ&amp;ドロップ操作の種類を取得したり、新しい操作の種類をセットしたりします。値は `none`, `copy`, `link`, `move` のいずれかです。
- {{domxref("DataTransfer.effectAllowed")}}

  - : とりうるすべての操作の種類を与えます。`none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all`, `uninitialized` のいずれかです。

- {{domxref("DataTransfer.files")}}
  - : データトランスファーが保持していて利用可能なすべてのローカルファイルのリストを保持します。ドラッグ操作がファイルのドラッグによるものではない場合、このプロパティは空のリストになります。
- {{domxref("DataTransfer.items")}} {{readonlyInline}}
  - : 全てのドラッグデータのリストである {{domxref("DataTransferItemList")}} オブジェクトを返します。
- {{domxref("DataTransfer.types")}} {{readonlyInline}}
  - : 文字列の配列で、 {{domxref("HTMLElement/dragstart_event", "dragstart")}} イベントで設定されたフォーマットを示します。

### Gecko プロパティ

{{SeeCompatTable}}

> **メモ:** この節のすべてのプロパティは Gecko 固有のものです。

- {{domxref("DataTransfer.mozCursor")}}
  - : ドラッグカーソルの状態を返します。主にタブドラッグの際のカーソルを制御するのに使います。
- {{domxref("DataTransfer.mozSourceNode")}} {{readonlyInline}}
  - : ドラッグ操作を開始するためにボタンを押下したときにマウスカーソルのあった{{ domxref("Node") }}を返します。外部アプリケーションからのドラッグの場合や、ドラッグを開始したノードが呼び出し元からアクセスできない物であった場合は、値は `null` となります。
- {{domxref("DataTransfer.mozUserCancelled")}} {{readonlyInline}}
  - : このプロパティは `dragend` イベントに対してのみ適用され、ユーザーが Esc キーを押下してドラッグ操作を取り消した場合は値が `true` となります。不正な場所でドロップした場合など、その他の理由でドラッグ操作に失敗した場合には、値は `false` となります。

### 非推奨のプロパティ

- {{domxref("DataTransfer.mozItemCount")}} {{readonlyInline}} {{deprecated_inline}}
  - : ドラッグされている項目の個数を返します。Firefox 71 で削除されました。

## メソッド

### 標準メソッド

- {{domxref("DataTransfer.clearData()")}}
  - : 指定された型のデータを削除します。型の指定は省略可能です。型として空の文字列を指定した場合、もしくは型を指定しなかった場合、すべての型のデータが削除されます。指定された型のデータが存在しない場合、またはデータトランスファーが何もデータを持っていない場合、このメソッドは何もしません。
- {{domxref("DataTransfer.getData()")}}
  - : 指定された型のデータを取得します。指定された型のデータが存在しない場合、またはデータトランスファーが何もデータを保持していない場合、空文字を返します。
- {{domxref("DataTransfer.setData()")}}
  - : 指定された型のデータを設定します。その型のデータが存在しない場合、データはリストの最後に追加されるため、データ型のリストの最後の項目は、最後に追加された新しいデータ型となります。その型のデータがすでに存在している場合、データ型のリストにおける元と同じ位置で、古いデータが新しいデータと置き換わります。
- {{domxref("DataTransfer.setDragImage()")}}
  - : 独自のものが求められる場合、ドラッグ中に使われる画像を設定します。

### Gecko メソッド

{{Non-standard_header()}}

> **メモ:** この節のすべてのメソッドは Gecko 固有のものです。

- {{domxref("DataTransfer.addElement()")}}
  - : ドラッグ元の要素を指定します。

### 非推奨のメソッド

- {{domxref("DataTransfer.mozClearDataAt()")}} {{deprecated_inline}}
  - : 指定されたインデックスの項目について、指定された形式に関連付けられたデータを削除します。インデックスは 0 〜 (項目の数 - 1）の範囲です。Firefox 71 で削除されました。
- {{domxref("DataTransfer.mozGetDataAt()")}} {{deprecated_inline}}
  - : 指定されたインデックスの項目の、指定された形式のデータを取得します。存在しない項目またはデータ形式を指定した場合は null を返します。インデックスは 0〜(項目の数-1）の範囲です。Firefox 71 で削除されました。
- {{domxref("DataTransfer.mozSetDataAt()")}} {{deprecated_inline}}
  - : データトランスファーは複数の項目を保持する事ができ、それぞれの項目には 0 から始まるインデックスが付けられます。`mozSetDataAt()` は、すでに存在する項目を変更する場合には `mozItemCount` より小さい値をインデックスとして指定し、新しい項目を追加する場合は `mozItemCount` に等しい値をインデックスとして指定します。また、`mozItemCount` は項目を追加する度に増加します。Firefox 71 で削除されました。
- {{domxref("DataTransfer.mozTypesAt()")}} {{deprecated_inline}}
  - : 指定されたインデックスの項目が保持しているデータの形式のリスト（文字列の配列）を返します。0〜(項目の数-1）の範囲外のインデックスを指定した場合は、空のリストを返します。Firefox 71 で削除されました。

## 例

この記事に記載されているすべてのメソッドとプロパティには、それぞれリファレンスページがあり、それぞれのリファレンスページには、インターフェイスの例が直接記載されているか、例へのリンクが張られています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [ドラッグ操作](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推奨されるドラッグ型](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
