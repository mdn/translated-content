---
title: WebVR API
slug: Web/API/WebVR_API
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}

> **メモ:** WebVR API は [WebXR API](/ja/docs/Web/API/WebXR_API) に置き換えられました。 WebVR は標準として批准されることはなく、ごく少数のブラウザでしか既定で実装・有効化されず、少数の端末しか対応していませんでした。

WebVR は，バーチャルリアリティデバイス — 例えば Oculus Rift のようなヘッドマウントディスプレイ — をウェブアプリへ公開し，ヘッドマウントディスプレイの位置や動きを 3D 空間上の動きへと変換する手助けを行います．これによって，バーチャルな製品紹介やインタラクティブな訓練アプリといったものから超臨場感のファーストパーソン・シューティングゲームといったものまで，非常に面白い様々なアプリケーションをつくることができます．

## 概念と利用方法

コンピュータに接続されている VR 装置は {{DOMxRef("Navigator.getVRDisplays()")}} メソッドによって返されます。それぞれの装置は {{DOMxRef("VRDisplay")}} オブジェクトで表されます。

![Sketch of a person in a chair with wearing goggles labelled "Head mounted display (HMD)" facing a monitor with a webcam labelled "Position sensor"](https://mdn.mozillademos.org/files/11035/hw-setup.png)

{{DOMxRef("VRDisplay")}} VRDisplay は WebVR API の中心的なインターフェイスであり、そのプロパティとメソッドを介して、以下の機能にアクセスすることができます。

- ディスプレイを識別するための有用な情報を取得し、ディスプレイにどのような機能があるのか、ディスプレイに関連付けられたコントローラなどを確認することができます。
- ディスプレイに表示したいコンテンツの各フレームの {{DOMxRef("VRFrameData", "frame data")}} を取得し、一貫したレートで表示するためにそれらのフレームを送信します。
- ディスプレイへの表示の開始と停止。

典型的な (シンプルな) WebVR アプリは次のように動作します。

1. {{DOMxRef("Navigator.getVRDisplays()")}} を使用して VR ディスプレイの参照を取得します。
2. {{DOMxRef("VRDisplay.requestPresent()")}} を使用して VR ディスプレイの表示を開始します。
3. WebVR 専用の {{DOMxRef("VRDisplay.requestAnimationFrame()")}} メソッドを使用して、ディスプレイの正しいリフレッシュレートでアプリのレンダリングループを実行します。
4. レンダリングループ内では、現在のフレームを表示するために必要なデータを取得し ({{DOMxRef("VRDisplay.getFrameData()")}})、表示されたシーンを 2 回 — それぞれの目の画像を 1 回ずつ描画し、レンダリングされたビューをディスプレイに送信してユーザーに表示します ({{DOMxRef("VRDisplay.submitFrame()")}})。

また WebVR 1.1 では、 {{DOMxRef("Window")}} オブジェクトに多数のイベントが追加され、 JavaScript が表示状態の変化に対応できるようになっています。

> **メモ:** [WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)と [WebVR の概念](/ja/docs/Web/API/WebVR_API/Concepts)の記事で、この API の使用方法がもっとわかります。

### API の可用性

Web 標準として承認されることのなかった WebVR API は、標準化プロセスの終了に向けて順調に進んでいる [WebXR API](/ja/docs/Web/API/WebXR_Device_API) に取って代わられて非推奨となりました。そのため、既存のコードを更新して、代わりに新しい API を使用するようにしてください。一般的には、移行はかなり苦痛のないものになるはずです。

さらに、端末やブラウザーによっては、 WebVR は HTTPS 接続を介して安全なコンテキストを使用してページをロードする必要があります。ページが完全に安全でない場合、 WebVR のメソッドや機能は利用できません。これは、 {{DOMxRef("Navigator")}} の {{DOMxRef("Navigator.getVRDisplays", "getVRDisplays()")}} メソッドが `NULL` であるかどうかを確認することで簡単にテストできます。

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* WebVR を使用する */
}
```

### コントローラーの使用: WebVR と Gamepad API の組み合わせ

多くの WebVR ハードウェアは、ヘッドセットと一緒に使用するコントローラーをセットアップします。これらは [Gamepad API](/ja/docs/Web/API/Gamepad_API) を介して WebVR アプリで使用することができ、特に [Gamepad Extensions API](/ja/docs/Web/API/Gamepad_API#Experimental_Gamepad_extensions) は、コントローラーの[コントローラーのポーズ](/ja/docs/Web/API/GamepadPose)や[触覚アクチュエーター](/ja/docs/Web/API/GamepadHapticActuator)などにアクセスするための API 機能を追加します。

> **メモ:** [WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)の記事では、 WebVR アプリでの VR コントローラーの使い方の基本を解説しています。

## WebVR インターフェイス

- {{DOMxRef("VRDisplay")}}
  - : この API でサポートされている VR デバイスを表します．デバイス ID や説明など汎用的な情報や，VR シーンの表示を開始するためのメソッドや，両目のパラメータやディスプレイの対応機能を受け取るメソッド，その他の重要な機能のためのメソッドを含んでいます．
- {{DOMxRef("VRDisplayCapabilities")}}
  - : {{DOMxRef("VRDisplay")}} の利用可能な機能を示しています — この機能は VR デバイスで使える機能テストを実行するために使うことができ，例えば位置情報を返すことが可能かに使えます．
- {{DOMxRef("VRDisplayEvent")}}
  - : WebVR 関連イベントのイベントオブジェクトを表します (下記の [window オブジェクト拡張](#window)を参照)。
- {{DOMxRef("VRFrameData")}}
  - : VR シーンの 1 フレームをレンダリングするために必要なすべての情報を表します。 {{DOMxRef("VRDisplay.getFrameData()")}} から構築されます。
- {{DOMxRef("VRPose")}}
  - : 指定した時刻における位置の状態を表します（これには向き，位置，速度，加速度を含んでいます）．
- {{DOMxRef("VREyeParameters")}}
  - : 指定した目に対応するシーンを正しくレンダリングするために必要となるすべての情報へのアクセスを提供します．これには FOV 情報を含まれています．
- {{DOMxRef("VRFieldOfView")}}
  - : 中心点からの視界を記述する 4 つの異なる角度値で定義される FOV を表します．
- {{DOMxRef("VRLayerInit")}}
  - : {{DOMxRef("VRDisplay")}} 内に表示されるレイヤを表します.
- {{DOMxRef("VRStageParameters")}}
  - : ルームスケール体験をサポートしているデバイスで，ステージエリアを示す値を表します．

### その他のインターフェイスの拡張

The WebVR API extends the following APIs, adding the listed features.

#### Gamepad

- {{DOMxRef("Gamepad.displayId")}} {{readonlyInline}}
  - : _関連付いている {{DOMxRef("VRDisplay")}} の {{DOMxRef("VRDisplay.displayId")}} を返します — その `VRDisplay` はゲームパッドが表示シーンのコントロールします．_

#### Navigator

- {{DOMxRef("Navigator.activeVRDisplays")}} {{readonlyInline}}
  - : 現在表示されている（{{DOMxRef("VRDisplay.ispresenting")}} が `true の`）すべての {{DOMxRef("VRDisplay")}} オブジェクトを持つ配列を返します．
- {{DOMxRef("Navigator.getVRDisplays()")}}
  - : コンピュータに接続されている利用可能な VR デバイスを表す {{DOMxRef("VRDisplay")}} オブジェクトの配列へ解決する promise を返します．

#### Window イベント

- {{DOMxRef("Window.onvrdisplaypresentchange")}}
  - : VR デバイスの表示状態が変更されたとき — すなわち，表示状態から非表示状態へ変化したときあるいはその逆（ {{event("onvrdisplaypresentchange")}} イベントが発行されたとき）に実行されるイベントハンドラを表します．
- {{DOMxRef("Window.onvrdisplayconnect")}}
  - : 互換性のある VR デバイスがコンピュータに接続されたとき（ {{event("vrdisplayconnect")}} イベントが発行されたとき）に実行されるイベントハンドラを表します．
- {{DOMxRef("Window.onvrdisplaydisconnect")}}
  - : 互換性のある VR デバイスがコンピュータから接続解除されたとき（ {{event("vrdisplaydisconnect")}} イベントが発行されたとき）に実行されるイベントハンドラを表します．
- {{DOMxRef("Window.onvrdisplayactivate")}}
  - : ディスプレイが表示できるようになったとき ({{event("vrdisplayactivate")}} イベントが発生したとき) に実行されるイベントハンドラーを表します。例えば、HMD を移動させて待機状態を解除した場合や、電源を入れたことで起動した場合などです。
- {{DOMxRef("Window.onvrdisplaydeactivate")}}
  - : ディスプレイが表示できなくなったとき ({{event("vrdisplaydeactivate")}} イベントが発生したとき) に実行されるイベントハンドラーを表します。例えば、HMD が一定期間使用されていなかったためにスタンバイモードやスリープモードになった場合などです。
- {{DOMxRef("Window.onvrdisplayblur")}}
  - : ブラウザ、OS、または VR ハードウェアによってディスプレイへの表示が何らかの理由で一時停止された場合 ({{event("vrdisplayblur")}} イベントが発生した場合) に実行されるイベントハンドラーを表します。例えば、ユーザーがシステムメニューやブラウザーと対話している間などに、トラッキングや体験の喪失を防ぐためです。
- {{DOMxRef("Window.onvrdisplayfocus")}}
  - : 一時停止後に ({{event("vrdisplayfocus")}} イベントが発生したときに) ディスプレイへの提示が再開されたときに実行されるイベントハンドラーを表します。

## 例

次の Github リポジトリでいくつかの例を見つけられます。

- [webvr-tests](https://github.com/mdn/webvr-tests): 基本的な機能の使い方を示すためのシンプルなデモ。
- [Carmel starter kit](https://github.com/facebook/Carmel-Starter-Kit) — nice simple, well-commented examples that go along with Carmel, Facebook's WebVR browser.
- [WebVR.info samples](https://webvr.info/samples/) — slightly more in-depth examples plus source code
- [WebVR.rocks Firefox demos](https://webvr.rocks/firefox#demos) — showcase examples
- [A-Frame homepage](https://aframe.io/) — examples showing A-Frame usage

## 仕様書

| 仕様書                                       | 状態                                     | 備考                                                                                                     |
| -------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| {{SpecName("GamepadExtensions")}} | {{Spec2("GamepadExtensions")}} | [Experimental Gamepad extensions](/ja/docs/Web/API/Gamepad_API#Experimental_Gamepad_extensions) を定義。 |
| {{SpecName("WebVR 1.1")}}             | {{Spec2("WebVR 1.1")}}             | 初回定義                                                                                                 |

## Browser compatibility

### `Navigator.getVRDisplays`

{{Compat("api.Navigator.getVRDisplays")}}

## 関連情報

- [vr.mozilla.org](https://vr.mozilla.org) — Mozilla VR team から提供されるデモ，ダウンロード，その他のリソース．
- [A-Frame](https://aframe.io/) — Open source web framework for building VR experiences.
- [webvr.info](https://webvr.info) — Up-to-date information about WebVR, browser setup, and community.
- [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate) — A useful starter template for writing WebVR apps into.
- [Web VR polyfill](https://github.com/googlevr/webvr-polyfill/) — JavaScript implementation of WebVR.
- [Supermedium](https://www.supermedium.com) — A pure WebVR browser to easily access the best WebVR content.
- [WebVR Directory](http://webvr.directory/) — List of quality WebVR sites.
