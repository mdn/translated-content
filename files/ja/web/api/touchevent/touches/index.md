---
title: "TouchEvent: touches プロパティ"
short-title: touches
slug: Web/API/TouchEvent/touches
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

**`touches`** は読み取り専用の {{ domxref("TouchList") }} で、現在タッチ面に接触しているタッチ点の {{ domxref("Touch") }} オブジェクトをすべて列挙します。タッチ点の変更の有無や、 {{domxref("Element/touchstart_event", "touchstart")}} 時点で対象としていた要素が何であったかは関係ありません。

何本の別個の指が画面に触れていると識別されるか、と考えればよいでしょう。

> [!NOTE]
> 配列内のタッチは必ずしも発生順（配列の i 番目の要素が発生した i 番目のタッチ）に並んでいるとは限りません。固有の順序を想定することはできません。タッチの発生順序を決定するには、 `touch` オブジェクト ID を使用してください。

## 値

{{ domxref("TouchList") }} で、現在タッチ面に接触しているタッチ点の {{ domxref("Touch") }} オブジェクトをすべて列挙します。タッチ点の変更の有無や、 `touchstart` 時点で対象としていた要素が何であったかは関係ありません。

## 例

この例では、 {{domxref("TouchEvent")}} オブジェクトの {{domxref("TouchEvent.touches")}} プロパティを説明しています。 {{domxref("TouchEvent.touches")}} プロパティは {{domxref("TouchList")}} オブジェクトであり、現在タッチ面に接触しているすべてのタッチ点の {{domxref("Touch")}} オブジェクトのリストを格納しています。

以下のコードでは、 {{domxref("Element/touchstart_event", "touchstart")}} イベントハンドラーは {{domxref("TouchEvent.touches")}} リストの長さを調べてアクティブになったタッチ点の数を決定し、タッチ点の数に応じて異なるハンドラーを呼び出しています。

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // タッチ点の数に応じて適切なハンドラーを呼び出す
    switch (e.touches.length) {
      case 1:
        handle_one_touch(e);
        break;
      case 2:
        handle_two_touches(e);
        break;
      case 3:
        handle_three_touches(e);
        break;
      default:
        console.log("未対応です");
        break;
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
