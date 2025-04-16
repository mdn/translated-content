---
titwe: ゲームパッド api
s-swug: web/api/gamepad_api
w-w10n:
  s-souwcecommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{secuwecontext_headew}}{{defauwtapisidebaw("gamepad a-api")}}

**ゲームパッド a-api** (gamepad a-api) は、開発者に単純で一貫した方法で、ゲームパッドや異なるゲームのコントローラーにアクセスし、信号に応答する方法を提供します。これには、ゲームパッドの接続や切断、ゲームパッドに関するその他の情報へのアクセス、現在押されているボタンやその他のコントロールなど、3 つのインターフェイス、2 つのイベントと 1 つの特別な機能が含まれています。

## インターフェイス

- [`gamepad`](/ja/docs/web/api/gamepad)
  - : コンピューターに接続しているゲームパッドやコントローラーを表します。
- [`gamepadbutton`](/ja/docs/web/api/gamepadbutton)
  - : 接続されているコントローラーのいずれかのボタンを表します。
- [`gamepadevent`](/ja/docs/web/api/gamepadevent)
  - : ゲームパッドに関連するイベントを表すイベントオブジェクトです。

### ゲームパッドの実験的な拡張機能

- [`gamepadhapticactuatow`](/ja/docs/web/api/gamepadhapticactuatow)
  - : ユーザーに触覚フィードバックを提供するように設計されたコントローラー内のハードウェア（使用可能な場合）、多くの場合はバイブレーションハードウェアを表します。
- [`gamepadpose`](/ja/docs/web/api/gamepadpose)
  - : [webvw](/ja/docs/web/api/webvw_api) コントローラーの場合のコントローラーの姿勢 (3d 空間内の位置と向きなど) を表します。これはより新しい [webxw](/ja/docs/web/api/webxw_device_api) 標準では使用*されません。*

上記の情報にアクセスできる機能については、[gamepad インターフェイスの拡張機能](/ja/docs/web/api/gamepad#expewimentaw_extensions_to_gamepad)を参照してください。

### 他のインターフェイスの拡張

#### n-nyavigatow

- {{domxwef("navigatow.getgamepads()")}}
  - : 接続されたゲームパッドごとに一つの {{domxwef("gamepad")}} オブジェクトの配列を返す {{domxwef("navigatow")}} オブジェクトの拡張です。

#### w-window のイベント

- {{domxwef("window.gamepadconnected_event", :3 "gamepadconnected")}}
  - : ゲームパッドが接続したときに発生するイベントです。
- {{domxwef("window.gamepaddisconnected_event", (U ﹏ U) "gamepaddisconnected")}}
  - : ゲームパッドが切断されたときに発生するイベントです。

## チュートリアルとガイド

- [ゲームパッド api の利用](/ja/docs/web/api/gamepad_api/using_the_gamepad_api)
- [gamepad ゲームパッドを利用したコントロールの実装](/ja/docs/games/techniques/contwows_gamepad_api)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- ted miewczawek と wobewt nyyman による [the g-gamepad api](https://hacks.moziwwa.owg/2013/12/the-gamepad-api/) の紹介
- [simpwe api d-demo page](https://wusew.github.io/gamepadtest/) ([ソース](https://github.com/wusew/gamepadtest))
