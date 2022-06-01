---
title: UIEvent.sourceCapabilities
slug: Web/API/UIEvent/sourceCapabilities
tags:
  - API
  - DOM
  - プロパティ
  - リファレンス
  - UIEvent
browser-compat: api.UIEvent.sourceCapabilities
---
{{SeeCompatTable}}{{APIRef()}}

**`UIEvent.sourceCapabilities`** は読み取り専用のプロパティで、タッチイベントの生成を担当した物理的な機器に関する情報を提供する {{domxref('InputDeviceCapabilities')}} インターフェイスのインスタンスを返します。このイベントを担当した入力機器がない場合は、 `null` を返します。

ユーザーがある入力機器を操作したときに、一連の様々な入力イベントが発生した場合、すべての入力イベントの `sourceCapabilities` プロパティは、同じ `InputDeviceCapabilities` のインスタンスを指すことになります。例えば、ユーザーがタッチ画面から指を離したとき、 いくつかの UIEvent 、例えば `touchend`、`mousedown`、`click`、`focus` などが生成されるかもしれません。これらのイベントはすべて、タッチ画面を表す同じ `sourceCapabilities` を持っている必要があります。

機器がイベントを「担当している」と見なされるのは、その操作がウェブプラットフォームによって提供される抽象化の一部である場合のみです。例えば、多くのユーザーエージェントはマウスやキーボードでウィンドウのサイズを変更することができますが、この詳細はウェブプラットフォームには一切公開されないため、 resize イベントの sourceCapabilities は通常 null になります。

## 構文

```js
var iDC = event.sourceCapabilities
```

### 値

{{domxref('InputDeviceCapabilities')}} のインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
