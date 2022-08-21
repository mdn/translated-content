---
title: Gamepad.connected
slug: Web/API/Gamepad/connected
tags:
  - API
  - Gamepad API
  - Games
  - NeedsBetterSpecLink
  - NeedsMarkupWork
  - Property
  - Reference
  - Référence(2)
translation_of: Web/API/Gamepad/connected
---
{{APIRef("Gamepad API")}}

{{domxref("Gamepad") }} インターフェースの **`Gamepad.connected`** プロパティはゲームパッドがシステムに接続しているかどうかを示す真偽値を返します。

ゲームパッドが接続している場合の値は `true` 、繋がっていない場合は `false`となります。

## 構文

```
 readonly    attribute boolean             connected;
```

## 例

```js
var gp = navigator.getGamepads()[0];
console.log(gp.connected);
```

## 値

{{domxref("boolean")}} 。

## 仕様

| 仕様                                                                                             | ステータス                   | 備考     |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName("Gamepad", "#widl-Gamepad-connected", "Gamepad.connected")}} | {{Spec2("Gamepad")}} | 初回定義 |

## ブラウザの互換性

{{Compat("api.Gamepad.connected")}}

## 参照

[Gamepad API を利用する](/ja/docs/Web/Guide/API/Gamepad)
