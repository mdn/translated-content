---
title: "Window: storage イベント"
slug: Web/API/Window/storage_event
---

{{APIRef}}

`storage` イベントは、保存領域 (`localStorage` または `sessionStorage`) が変更されたときに発生します。詳しくは [Web Storage API](/ja/docs/Web/API/Web_Storage_API) をご覧ください。

> **メモ:** これは変更を行ったのと同じページでは動作しません。本来、これは同じ保存領域を使用している同じドメインの他のページが更新を同期するための仕組みです。他のドメインのページは、同じ保存領域オブジェクトにはアクセスできません。

## 一般情報

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">仕様</th>
      <td><em><a href="http://www.w3.org/TR/webstorage/#the-storage-event">Web Storage</a></em></td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("StorageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">バブリング</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能か</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">ターゲット</th>
      <td>DefaultView (<code>&lt;window&gt;</code>)</td>
    </tr>
    <tr>
      <th scope="row">既定のアクション</th>
      <td>なし</td>
    </tr>
  </tbody>
</table>

## 文法

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
addEventListener('storage', (event) => { });
onstorage = (event) => { };
```

## イベント型

{{domxref("Event")}} を継承した {{domxref("StorageEvent")}}
<br>

{{InheritanceDiagram("StorageEvent")}}

## イベントプロパティ

| プロパティ                       | 型                                | 説明                                         |
| -------------------------------- | --------------------------------- | -------------------------------------------- |
| `target` {{readonlyInline}}      | {{domxref("EventTarget")}}        | イベントの対象 (DOMツリーの中で最上位の対象) |
| `type` {{readonlyInline}}        | {{domxref("DOMString")}}          | イベントの種類                               |
| `bubbles` {{readonlyInline}}     | {{jsxref("Boolean")}}             | イベントが通常バブリングするか               |
| `cancelable` {{readonlyInline}}  | {{jsxref("Boolean")}}             | イベントをキャンセル可能か                   |
| `key` {{readonlyInline}}         | {{domxref("DOMString")}} (string) | 変更されたキー                               |
| `oldValue` {{readonlyInline}}    | {{domxref("DOMString")}} (string) | 変更されたキーの変更前の値                   |
| `newValue` {{readonlyInline}}    | {{domxref("DOMString")}} (string) | 変更されたキーの変更後の値                   |
| `url` {{readonlyInline}}         | {{domxref("DOMString")}} (string) | キーが変更されたドキュメントのアドレス       |
| `storageArea` {{readonlyInline}} | {{domxref("Storage")}}            | 変更された `Storage` オブジェクト            |

## イベントハンドラーエイリアス

`Window` インターフェイスに加え、イベントハンドラープロパティ `onstorage` は以下の対象でも利用可能です。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 例

`storage` イベントが発生した時、項目 `sampleList` をコンソールに記録します。

```js
window.addEventListener('storage', () => {
  // ローカルストレージが変更された時、
  // リストをコンソールに書き出す。
  console.log(JSON.parse(window.localStorage.getItem('sampleList')));
});
```

`onstorage` イベントハンドラープロパティを用いても、同じことができます。

```js
window.onstorage = () => {
  // ローカルストレージが変更された時、
  // リストをコンソールに書き出す。
  console.log(JSON.parse(window.localStorage.getItem('sampleList')));
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Storage API](/ja/docs/Web/API/Web_Storage_API)
- [Web Storage API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [StorageEvent を使用してストレージの変更に反応する](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#storageevent_%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AB%E5%8F%8D%E5%BF%9C%E3%81%99%E3%82%8B)
