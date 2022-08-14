---
title: Event.target
slug: Web/API/Event/target
page-type: web-api-instance-property
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Event.target
translation_of: Web/API/Event/target
---
{{ApiRef("DOM")}}

**`target`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントが配信されたオブジェクトへの参照です。これは、イベントのバブリングまたはキャプチャ段階でイベントハンドラーが呼び出されたときの {{domxref("Event.currentTarget")}} とは異なります。

## 値

関連する {{domxref("EventTarget")}} です。

## 例

`event.target` プロパティは、**イベントデリゲーション**を実装するために使用できます。

```js
// リストの作成
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target はクリックされた <li> 要素を参照しています。
  // これはこのコンテキストで親である <ul> を参照している evt.currentTarget とは異なります。
  evt.target.style.visibility = 'hidden';
}

// リストにリスナーを接続します
// <li> がクリックされた時に発行されます。
ul.addEventListener('click', hide, false);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントターゲットの比較](/ja/docs/Web/API/Event/Comparison_of_Event_Targets)
