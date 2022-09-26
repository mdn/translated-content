---
title: Gamepad
slug: Web/API/Gamepad
---

{{APIRef("Gamepad API")}}

[Gamepad API](/ja/docs/Web/API/Gamepad_API) の **`Gamepad`** インターフェイスはそれぞれのゲームパッドやその他のコントローラーを定義し、ボタンのプッシュや軸位置や ID といった情報にアクセスできるようにします。

Gamepad オブジェクトは２つのうちのどちらかの方法で取得できます : Gamepad オブジェクトは、{{event("gamepadconnected")}} イベントと {{event("gamepaddisconnected")}} イベントの `gamepad` プロパティを使用する方法、{{domxref("Navigator.getGamepads()")}} メソッドが返した配列内の任意の位置を取得する方法のいずれかで返すことができます。

## プロパティ

- {{domxref("Gamepad.axes")}} {{readonlyInline}}
  - : デバイス上に軸があるコントロールを表す配列です (例 : アナログスティック)。
- {{domxref("Gamepad.buttons")}} {{readonlyInline}}
  - : デバイス上のボタンを表す {{domxref("gamepadButton")}} のオブジェクトの配列。
- {{domxref("Gamepad.connected")}} {{readonlyInline}}
  - : ゲームパッドがシステムに繋がっているかを表す真偽値。
- {{domxref("Gamepad.displayId")}} {{readonlyInline}}
  - : 関連する _{{domxref("VRDisplay")}}_ の _{{domxref("VRDisplay.displayId")}}_ を返します (該当する場合)*— *ゲームパッドが表示されているシーンを制御している _`VRDisplay`_ を返します。
- {{domxref("Gamepad.id")}} {{readonlyInline}}
  - : コントローラーに関する識別情報を含む {{domxref("DOMString")}}。
- {{domxref("Gamepad.index")}} {{readonlyInline}}
  - : システムに現在接続しているそれぞれのデバイスを表すユニークな整数値。
- {{domxref("Gamepad.mapping")}} {{readonlyInline}}
  - : ブラウザがデバイス上のコントロールを既知のレイアウトに再マップしたかどうかを示す文字列。
- {{domxref("Gamepad.timestamp")}} {{readonlyInline}}
  - : このゲームパッドのデータが最後に更新された時刻を表す {{domxref("DOMHighResTimeStamp")}}。

### Gamepad の実験的な拡張機能

以下のインターフェイスは、{{SpecName("GamepadExtensions")}} の仕様で定義されており、触覚フィードバックや WebVR コントローラーのポーズ情報などの実験的機能へのアクセスを提供します。

- {{domxref("Gamepad.hand")}} {{readonlyInline}}
  - : コントローラーがどの手で持っているか、または持っている可能性が最も高いかを定義する列挙型。
- {{domxref("Gamepad.hapticActuators")}} {{readonlyInline}}
  - : {{domxref("GamepadHapticActuator")}} オブジェクトを含む配列。各オブジェクトはコントローラーで使用できる触覚フィードバックハードウェアを表します。
- {{domxref("Gamepad.pose")}} {{readonlyInline}}
  - : WebVR コントローラーに関連付けられたポーズ情報 (例えば 3D 空間における位置と向き) を表す {{domxref("GamepadPose")}} オブジェクト。

## 例

```js
window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
});
```

## 仕様書

| 仕様                                                                                                             | 状態                                     | コメント                                                                         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------- |
| {{SpecName("Gamepad", "#gamepad-interface", "Gamepad")}}                                     | {{Spec2("Gamepad")}}             | 初期定義                                                                         |
| {{SpecName('WebVR 1.1', '#gamepad-getvrdisplays-attribute', 'displayId')}}             | {{Spec2("WebVR 1.1")}}             | {{domxref("Gamepad.displayId")}} プロパティの定義。                  |
| {{SpecName("GamepadExtensions", "#partial-gamepad-interface", "Gamepad extensions")}} | {{Spec2("GamepadExtensions")}} | [Experimental extensions to Gamepad](#experimental_extensions_to_gamepad) の定義 |

## ブラウザーの互換性

{{Compat("api.Gamepad")}}

## 関連情報

- [Gamepad API の利用](/ja/docs/Web/Guide/API/Gamepad)
- [Gamepad API](/ja/docs/Web/API/Gamepad_API)
