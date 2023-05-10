---
title: ゲームパッド API
slug: Web/API/Gamepad_API
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{securecontext_header}}{{DefaultAPISidebar("Gamepad API")}}

**ゲームパッド API** (Gamepad API) は、開発者に単純で一貫した方法で、ゲームパッドや異なるゲームのコントローラーにアクセスし、信号に応答する方法を提供します。これには、ゲームパッドの接続や切断、ゲームパッドに関するその他の情報へのアクセス、現在押されているボタンやその他のコントロールなど、3 つのインターフェイス、2 つのイベントと 1 つの特別な機能が含まれています。

## インターフェイス

- [`Gamepad`](/ja/docs/Web/API/Gamepad)
  - : コンピューターに接続しているゲームパッドやコントローラーを表します。
- [`GamepadButton`](/ja/docs/Web/API/GamepadButton)
  - : 接続されているコントローラーのいずれかのボタンを表します。
- [`GamepadEvent`](/ja/docs/Web/API/GamepadEvent)
  - : ゲームパッドに関連するイベントを表すイベントオブジェクトです。

### ゲームパッドの実験的な拡張機能

- [`GamepadHapticActuator`](/ja/docs/Web/API/GamepadHapticActuator)
  - : ユーザーに触覚フィードバックを提供するように設計されたコントローラー内のハードウェア（使用可能な場合）、多くの場合はバイブレーションハードウェアを表します。
- [`GamepadPose`](/ja/docs/Web/API/GamepadPose)
  - : [WebVR](/ja/docs/Web/API/WebVR_API) コントローラーの場合のコントローラーの姿勢 (3D 空間内の位置と向きなど) を表します。これはより新しい [WebXR](/ja/docs/Web/API/WebXR_Device_API) 標準では使用*されません。*

上記の情報にアクセスできる機能については、[Gamepad インターフェイスの拡張機能](/ja/docs/Web/API/Gamepad#experimental_extensions_to_gamepad)を参照してください。

### 他のインターフェイスの拡張

#### Navigator

- {{domxref("Navigator.getGamepads()")}}
  - : 接続されたゲームパッドごとに一つの {{domxref("Gamepad")}} オブジェクトの配列を返す {{domxref("Navigator")}} オブジェクトの拡張です。

#### Window のイベント

- {{domxref("Window.gamepadconnected_event", "gamepadconnected")}}
  - : ゲームパッドが接続したときに発生するイベントです。
- {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}
  - : ゲームパッドが切断されたときに発生するイベントです。

## チュートリアルとガイド

- [ゲームパッド API の利用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Gamepad ゲームパッドを利用したコントロールの実装](/ja/docs/Games/Techniques/Controls_Gamepad_API)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Ted Mielczarek と Robert Nyman による [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) の紹介
- [Simple API demo page](https://luser.github.io/gamepadtest/) ([ソース](https://github.com/luser/gamepadtest))
