---
title: MutationObserver
slug: Web/API/MutationObserver
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("DOM WHATWG")}}

**`MutationObserver`** インターフェイスは、 [DOM](/ja/docs/Web/API/Document_Object_Model) ツリーへ変更が加えられたことを監視することができる機能を提供します。これは DOM3 Events の仕様で定義されていた [Mutation Events](/ja/docs/Web/API/MutationEvent) 機能の置き換えとして設計されたものです。

## コンストラクター

- {{domxref("MutationObserver.MutationObserver", "MutationObserver()")}}
  - : DOM の変更が行われたときに指定されたコールバック関数を呼び出す新しい `MutationObserver` を生成して返します。

## メソッド

- {{domxref("MutationObserver.disconnect()", "disconnect()")}}
  - : `MutationObserver` のインスタンスが今後の通知を受け取ることを、 {{domxref("MutationObserver.observe", "observe()")}} が再び呼び出されるまで停止します。
- {{domxref("MutationObserver.observe()", "observe()")}}
  - : 指定したオプションに合う DOM の変更が発生したときに、コールバック関数を介して通知を受信し始めるように `MutationObserver` を構成します。
- {{domxref("MutationObserver.takeRecords()", "takeRecords()")}}
  - : `MutationObserver` の通知キューから保留中の通知をすべて削除し、 {{domxref("MutationRecord")}} の新しい配列 ({{jsxref("Array")}}) で返します。

## Mutation Observer と resize イベントリスナーのカスタマイズとデモ

<https://codepen.io/milofultz/pen/LYjPXPw>

## 例

以下の例は [このブログ記事](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/) を参考にしたものです。

```js
// 変更を監視するノードを選択
const targetNode = document.getElementById("some-id");

// (変更を監視する) オブザーバーのオプション
const config = { attributes: true, childList: true, subtree: true };

// 変更が発見されたときに実行されるコールバック関数
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("子ノードが追加または削除されました。");
    } else if (mutation.type === "attributes") {
      console.log(`${mutation.attributeName} 属性が変更されました。`);
    }
  }
};

// コールバック関数に結びつけられたオブザーバーのインスタンスを生成
const observer = new MutationObserver(callback);

// 対象ノードの設定された変更の監視を開始
observer.observe(targetNode, config);

// その後で、監視を停止することができる
observer.disconnect();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
- [A brief overview](https://developer.chrome.com/blog/detect-dom-changes-with-mutation-observers/)
- [A more in-depth discussion](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](https://www.youtube.com/watch?v=eRZ4pO0gVWw)
