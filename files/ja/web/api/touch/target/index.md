---
title: "Touch: target プロパティ"
short-title: target
slug: Web/API/Touch/target
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

**`target`** は `Touch` インターフェイスの読み取り専用プロパティで、タッチ点がその要素の操作領域外に移動した場合や、文書から取り除かれた場合でも、タッチ点が最初に配置されたときに接触が開始された ({{domxref("EventTarget")}}) を返します。対象要素が文書から除去されても、イベントはその要素を対象とし、ウィンドウや文書にバブルアップされるとは限らないことに注意してください。タッチしている間に要素が除去されるおそれがある場合は、タッチリスナーを対象に直接取り付けるのが最善の手法です。

## 値

{{domxref("Touch")}} オブジェクトが適用される {{domxref("EventTarget")}}。

## 例

この例では、{{domxref("Touch")}} オブジェクトの {{domxref("Touch.target")}} プロパティにアクセスする方法を示します。 {{domxref("Touch.target")}} プロパティは {{domxref("Element")}} ({{domxref("EventTarget")}}) であり、表面に最初に連絡先が配置されたときにこの点を開始します。

以下の単純なコードでは、ユーザーが `source` 要素に 1 つ以上の接触を開始することを想定しています。この要素の {{domxref("Element/touchstart_event", "touchstart")}} イベントハンドラーが呼び出されると、各タッチ点の {{domxref("Touch.target")}} プロパティは、イベントの {{domxref("TouchEvent.targetTouches")}} リスト経由でアクセスします。

```js
// touchmove リスナーを 'source' 要素に登録
const src = document.getElementById("source");

src.addEventListener(
  "touchstart",
  (e) => {
    // この要素で有効化されたタッチ点を反復処理
    for (let i = 0; i < e.targetTouches.length; i++) {
      console.log(`touchpoint[${i}].target = ${e.targetTouches[i].target}`);
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
