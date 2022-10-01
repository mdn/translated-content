---
title: Navigator.maxTouchPoints
slug: Web/API/Navigator/maxTouchPoints
---

{{APIRef("HTML DOM")}}

{{domxref("Navigator")}} インターフェイスの **`maxTouchPoints`** プロパティは読み取り専用で、現在の端末で対応している同時タッチコンタクト点の最大数を返します。

## 構文

```
touchPoints = navigator.maxTouchPoints;
```

## 例

```js
if (navigator.maxTouchPoints > 1) {
  // ブラウザーがマルチタッチに対応
}
```

## 仕様書

| 仕様書                                                                                                                   | 状態                                     | 備考               |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------ |
| {{SpecName('Pointer Events 2','#extensions-to-the-navigator-interface', 'maxTouchPoints')}} | {{Spec2('Pointer Events 2')}} | 非安定バージョン。 |
| {{SpecName('Pointer Events', '#extensions-to-the-navigator-interface', 'maxTouchPoints')}} | {{Spec2('Pointer Events')}}     | 初回定義           |

## ブラウザーの対応

{{Compat("api.Navigator.maxTouchPoints")}}
