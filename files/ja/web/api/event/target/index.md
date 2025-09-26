---
title: "Event: target プロパティ"
short-title: target
slug: Web/API/Event/target
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`target`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントが配信されたオブジェクトへの参照です。これは、イベントのバブリングまたはキャプチャ段階でイベントハンドラーが呼び出されたときの {{domxref("Event.currentTarget")}} とは異なります。

## 値

関連する {{domxref("EventTarget")}} です。

## 例

`event.target` プロパティは、**イベントデリゲーション**を実装するために使用できます。

```js
// リストの作成
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target はクリックされた <li> 要素を参照しています。
  // これはこのコンテキストで親である <ul> を参照している evt.currentTarget とは異なります。
  evt.target.style.visibility = "hidden";
}

// リストにリスナーを接続します
// <li> がクリックされた時に発行されます。
ul.addEventListener("click", hide, false);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: イベントのバブリング](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling)
