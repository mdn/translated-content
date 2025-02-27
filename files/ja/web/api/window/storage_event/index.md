---
title: "Window: storage イベント"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`storage`** イベントは、保存領域 (`localStorage`) が変更されたときに発生します。詳しくは[ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API) をご覧ください。

> [!NOTE]
> これは変更を行ったのと同じページでは動作しません。本来、これは同じ保存領域を使用している同じドメインの他のページが更新を同期するための仕組みです。他のドメインのページは、同じ保存領域オブジェクトにはアクセスできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使うか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("storage", (event) => {});
onstorage = (event) => {};
```

## イベント型

{{domxref("StorageEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("StorageEvent")}}

## イベントプロパティ

- {{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}
  - : 変更されたキーを表す文字列を返します。
    変更が発生したのがこのストレージの `clear()` メソッドによるものであれば、 `key` 属性は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) になります。
- {{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}
  - : `key` の新しい値を文字列で返します。
    このストレージの `clear()` メソッドが呼び出されたり、その `key` がストレージから削除されたりして変更が行われた場合は、この値は `null` になります。
- {{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}
  - : `key` の元の値を文字列で返します。
    その `key` が新しく追加されたものであるため、以前の値が存在しない場合は、この値は `null` になります。
- {{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}
  - : 変更が行われたストレージを表す {{DOMxRef("Storage")}} オブジェクトを返します。
- {{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}
  - : `key` を変更した文書の URL を文字列で返します。

## イベントハンドラーの別名

`Window` インターフェイスに加え、イベントハンドラープロパティ `onstorage` は以下のターゲットでも利用可能です。

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 例

`storage` イベントが発生した時、項目 `sampleList` をコンソールに記録します。

```js
window.addEventListener("storage", () => {
  // ローカルストレージが変更された時、
  // リストをコンソールに書き出す。
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
});
```

`onstorage` イベントハンドラープロパティを用いても、同じことができます。

```js
window.onstorage = () => {
  // ローカルストレージが変更された時、
  // リストをコンソールに書き出す。
  console.log(JSON.parse(window.localStorage.getItem("sampleList")));
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API)
- [ウェブストレージ API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [StorageEvent を使用してストレージの変更に反応する](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#storageevent_%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8%E3%81%AE%E5%A4%89%E6%9B%B4%E3%81%AB%E5%8F%8D%E5%BF%9C%E3%81%99%E3%82%8B)
