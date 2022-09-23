---
title: Gamepad API
slug: Web/API/Gamepad_API
---

{{DefaultAPISidebar("Gamepad API")}}

**Gamepad API** は開発者に様々な種類のゲームパッドや単純で一貫した異なるゲームのコントローラーと接続する方法を提供しています。これには、ゲームパッドの接続や切断、ゲームパッドに関するその他の情報へのアクセス、現在押されているボタンやその他のコントロールなど、3 つのインターフェイス、2 つのイベントと 1 つの特別な機能が含まれています。

## インターフェイス

- [`Gamepad`](/ja/docs/Web/API/Gamepad)
  - : コンピュータに接続しているゲームパッド・コントローラーを表します。
- [`GamepadButton`](/ja/docs/Web/API/GamepadButton)
  - : 接続されているコントローラーのいずれかのボタンを表します。
- [`GamepadEvent`](/ja/docs/Web/API/GamepadEvent)
  - : ゲームパッドに関連するイベントを表すイベントオブジェクトです。

### Gamepad の実験的な拡張機能

- [`GamepadHapticActuator`](/ja/docs/Web/API/GamepadHapticActuator)
  - : ユーザに触覚フィードバックを提供するように設計されたコントローラー内のハードウェア (使用可能な場合)、最も一般的には振動ハードウェアを表します。
- [`GamepadPose`](/ja/docs/Web/API/GamepadPose)
  - : [WebVR](/ja/docs/Web/API/WebVR_API)コントローラーの場合のコントローラーの姿勢 (3D 空間内の位置と向きなど) を表します。これはより新しい [WebXR](/ja/docs/Web/API/WebXR_Device_API) 標準では使用*されません。*

上記の情報にアクセスできる機能については、[Gamepad インターフェイスの拡張機能](/ja/docs/Web/API/Gamepad#Experimental_extensions_to_Gamepad)を参照してください。

### 他のインターフェイスの拡張

#### ナビゲータ

- {{domxref("Navigator.getGamepads()")}}
  - : 接続されたゲームパッドごとに一つの {{domxref("Gamepad")}} オブジェクトの配列を返す {{domxref("Navigator")}} オブジェクトの拡張です。

#### Window イベント

- {{domxref("Window.ongamepadconnected")}}
  - : ゲームパッドが接続したとき ({{event('gamepadconnected')}}イベントが発生したとき) に実行されるイベントハンドラを表します。
- {{domxref("Window.ongamepaddisconnected")}}
  - : ゲームパッドが切断したとき ({{event('gamepaddisconnected')}}イベントが発生したとき) に実行されるイベントハンドラを表します。

## チュートリアルとガイド

- [Gamepad API の利用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Gamepad API を利用したコントロールの実装](/ja/docs/Games/Techniques/Controls_Gamepad_API)

## 仕様書

| 仕様                                                                             | 状態                                     | コメント                                               |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------ |
| {{SpecName("GamepadExtensions")}}                                     | {{Spec2("GamepadExtensions")}} | [実験的な Gamepad 拡張](#実験的な_gamepad_拡張) の定義 |
| {{SpecName("Gamepad", "", "The Gamepad API specification")}} | {{Spec2("Gamepad")}}             | 初期定義                                               |

## ブラウザーの互換性

{{Compat("api.Gamepad")}}

## 関連情報

- Ted Mielczarek と Robert Nyman による [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) の紹介
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([ソース](https://github.com/luser/gamepadtest))
