---
title: DataTransfer.files
slug: Web/API/DataTransfer/files
---

{{APIRef("HTML Drag and Drop API")}}

**`files`** は [`DataTransfer`](/ja/docs/Web/API/DataTransfer) オブジェクトのプロパティで、ドラッグ操作中の{{domxref("FileList", "ファイルのリスト", "", 1)}}です。操作にファイルが含まれていない場合、リストは空になります。

この機能を利用して、ユーザーのデスクトップからブラウザーにファイルをドラッグすることができます。

> **メモ:** [`DataTransfer`](/ja/docs/Web/API/DataTransfer) オブジェクトの `files` プロパティは、 `drop` イベントの中からのみアクセスできます。それ以外のどのイベントでも、 `files` プロパティは空になります。その基礎となるデータストアが[保護モード](https://html.spec.whatwg.org/multipage/dnd.html#the-drag-data-store)になるからです。

## 返値

ドラッグ操作中のファイルの{{domxref("FileList", "リスト", "", 1)}}で、 1 つのリスト項目が 1 つのファイルを表します。操作にファイルが含まれていない場合、リストは空になります。

## 例

このインターフェイスには 2 つのライブ例があります。

- Firefox 専用: <https://jsfiddle.net/9C2EF/>
- すべてのブラウザー: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
