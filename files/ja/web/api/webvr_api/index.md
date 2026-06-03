---
title: WebVR API
slug: Web/API/WebVR_API
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{DefaultAPISidebar("WebVR API")}}{{Deprecated_Header}}{{Non-standard_header}}

> [!NOTE]
> WebVR API は [WebXR API](/ja/docs/Web/API/WebXR_Device_API) に置き換えられました。 WebVR は標準として批准されることはなく、ごく少数のブラウザーでしか既定で実装・有効化されず、少数の端末しか対応していませんでした。

WebVR は、バーチャルリアリティデバイス — 例えば Oculus Rift のようなヘッドマウントディスプレイ — をウェブアプリへ公開し、ヘッドマウントディスプレイの位置や動きを 3D 空間上の動きへと変換する手助けを行います。これによって、バーチャルな製品紹介やインタラクティブな訓練アプリといったものから超臨場感のファーストパーソン・シューティングゲームといったものまで、非常に面白い様々なアプリケーションをつくることができます。

## 概念と利用方法

コンピュータに接続されている VR 装置は {{DOMxRef("Navigator.getVRDisplays()")}} メソッドによって返されます。それぞれの装置は {{DOMxRef("VRDisplay")}} オブジェクトで表されます。

!["Head mounted display (HMD)" とラベル付けされたゴーグルを装着し、 "Position sensor" とラベル付けされたウェブカメラ付きモニターに向かって椅子に座る人のスケッチ。](hw-setup.png)

{{DOMxRef("VRDisplay")}} は WebVR API の中心的なインターフェイスであり、そのプロパティとメソッドを介して、以下の機能にアクセスすることができます。

- ディスプレイを識別するための有用な情報を取得し、ディスプレイにどのような機能があるのか、ディスプレイに関連付けられたコントローラなどを確認することができます。
- ディスプレイに表示したいコンテンツの各フレームの {{DOMxRef("VRFrameData", "frame data")}} を取得し、一貫したレートで表示するためにそれらのフレームを送信します。
- ディスプレイへの表示の開始と停止。

典型的な (シンプルな) WebVR アプリは次のように動作します。

1. {{DOMxRef("Navigator.getVRDisplays()")}} を使用して VR ディスプレイの参照を取得します。
2. {{DOMxRef("VRDisplay.requestPresent()")}} を使用して VR ディスプレイの表示を開始します。
3. WebVR 専用の {{DOMxRef("VRDisplay.requestAnimationFrame()")}} メソッドを使用して、ディスプレイの正しいリフレッシュレートでアプリのレンダリングループを実行します。
4. レンダリングループ内では、現在のフレームを表示するために必要なデータを取得し ({{DOMxRef("VRDisplay.getFrameData()")}})、表示されたシーンを 2 回 — それぞれの目の画像を 1 回ずつ描画し、レンダリングされたビューをディスプレイに送信してユーザーに表示します ({{DOMxRef("VRDisplay.submitFrame()")}})。

また WebVR 1.1 では、 {{DOMxRef("Window")}} オブジェクトに多数のイベントが追加され、 JavaScript が表示状態の変化に対応できるようになっています。

> [!NOTE]
> [WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)と [WebVR の概念](/ja/docs/Web/API/WebVR_API/Concepts)の記事で、この API の使用方法がもっとわかります。

### API の可用性

ウェブ標準として承認されることのなかった WebVR API は、標準化プロセスの終了に向けて順調に進んでいる [WebXR API](/ja/docs/Web/API/WebXR_Device_API) に取って代わられて非推奨となりました。そのため、既存のコードを更新して、代わりに新しい API を使用するようにしてください。一般的には、移行はあまり苦痛のないものになるはずです。

さらに、端末やブラウザーによっては、 WebVR は HTTPS 接続を介して保護されたコンテキストを使用してページをロードする必要があります。ページが完全に安全でない場合、 WebVR のメソッドや機能は利用できません。これは、 {{domxref("Navigator")}} の {{domxref("Navigator.getVRDisplays", "getVRDisplays()")}} メソッドが `NULL` であるかどうかを確認することで簡単にテストできます。

```js
if (!navigator.getVRDisplays) {
  console.error("WebVR is not available");
} else {
  /* WebVR を使用する */
}
```

### コントローラーの使用: WebVR と Gamepad API の組み合わせ

多くの WebVR ハードウェアは、ヘッドセットと一緒に使用するコントローラーをセットアップします。これらは[ゲームパッド API](/ja/docs/Web/API/Gamepad_API) を介して WebVR アプリで使用することができ、特に[ゲームパッド拡張 API](/ja/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) は、コントローラーの[コントローラーのポーズ](/ja/docs/Web/API/GamepadPose)や[触覚アクチュエーター](/ja/docs/Web/API/GamepadHapticActuator)などにアクセスするための API 機能を追加します。

> [!NOTE]
> [VR コントローラーの WebVR での使用](/ja/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR)の記事では、 WebVR アプリでの VR コントローラーの使い方の基本を解説しています。

## WebVR インターフェイス

- {{DOMxRef("VRDisplay")}}
  - : この API でサポートされている VR 機器を表します。機器 ID や説明など汎用的な情報や、VR シーンの表示を開始するためのメソッドや、両目のパラメータやディスプレイの対応機能を受け取るメソッド、その他の重要な機能のためのメソッドを含んでいます。
- {{DOMxRef("VRDisplayCapabilities")}}
  - : {{DOMxRef("VRDisplay")}} の利用可能な機能を示しています — この機能は VR 機器で使える機能テストを実行するために使うことができ、例えば位置情報を返すことが可能かに使えます。
- {{DOMxRef("VRDisplayEvent")}}
  - : WebVR 関連イベントのイベントオブジェクトを表します (下記の [window オブジェクト拡張](#window)を参照)。
- {{DOMxRef("VRFrameData")}}
  - : VR シーンの 1 フレームをレンダリングするために必要なすべての情報を表します。 {{DOMxRef("VRDisplay.getFrameData()")}} から構築されます。
- {{DOMxRef("VRPose")}}
  - : 指定した時刻における位置の状態を表します（これには向き、位置、速度、加速度を含んでいます）。
- {{DOMxRef("VREyeParameters")}}
  - : 指定した目に対応するシーンを正しくレンダリングするために必要となるすべての情報へのアクセスを提供します。これには FOV 情報を含まれています。
- {{DOMxRef("VRFieldOfView")}}
  - : 中心点からの視界を記述する 4 つの異なる角度値で定義される FOV を表します。
- {{DOMxRef("VRLayerInit")}}
  - : {{DOMxRef("VRDisplay")}} 内に表示されるレイヤーを表します。
- {{DOMxRef("VRStageParameters")}}
  - : ルームスケール体験に対応している機器で、ステージ領域を示す値を表します。

### その他のインターフェイスの拡張

WebVR API は、以下の API を継承することで、掲載されている機能を追加しています。

#### Gamepad

- {{DOMxRef("Gamepad.displayId")}} {{ReadOnlyInline}}
  - : _関連する {{DOMxRef("VRDisplay")}} の {{DOMxRef("VRDisplay.displayId")}} を返します — その `VRDisplay` はゲームパッドが表示シーンのコントロールします。_

#### Navigator

- {{DOMxRef("Navigator.activeVRDisplays")}} {{ReadOnlyInline}}
  - : 現在表示されている（{{DOMxRef("VRDisplay.ispresenting")}} が `true の`）すべての {{DOMxRef("VRDisplay")}} オブジェクトを持つ配列を返します。
- {{DOMxRef("Navigator.getVRDisplays()")}}
  - : コンピュータに接続されている利用可能な VR 機器を表す {{DOMxRef("VRDisplay")}} オブジェクトの配列へ解決する promise を返します。

#### Window イベント

- {{DOMxRef("Window.vrdisplaypresentchange_event", "vrdisplaypresentchange")}}
  - : VR ディスプレイの表示状態が変更されたとき — すなわち、表示状態から非表示状態へ変化したときあるいはその逆に発生します。
- {{DOMxRef("Window.vrdisplayconnect_event", "vrdisplayconnect")}}
  - : 互換性のある VR 機器がコンピューターに接続されたときに発生します。
- {{DOMxRef("Window.vrdisplaydisconnect_event", "vrdisplaydisconnect")}}
  - : 互換性のある VR 機器がコンピューターから接続解除されたときに発生します。
- {{DOMxRef("Window.vrdisplayactivate_event", "vrdisplayactivate")}}
  - : ディスプレイが表示できるようになったときに発生します。
- {{DOMxRef("Window.vrdisplaydeactivate_event", "vrdisplaydeactivate")}}
  - : ディスプレイが表示できなくなったときに発生します。
- {{DOMxRef("Window.vrdisplayblur_event", "vrdisplayblur")}}
  - : ブラウザー、OS、VR ハードウェアによってディスプレイへの表示が何らかの理由で一時停止された場合に発生します。
- {{DOMxRef("Window.vrdisplayfocus_event", "vrdisplayfocus")}}
  - : 一時停止後にディスプレイの表示が再開されたときに発生します。

## 例

次の Github リポジトリーでいくつかの例を見つけられます。

- [webvr-tests](https://github.com/mdn/webvr-tests): 基本的な機能の使い方を示すためのシンプルなデモ。
- [Carmel starter kit](https://github.com/facebookarchive/Carmel-Starter-Kit) — Facebook の WebVR ブラウザーである Carmel に沿った、単純でよくコメントされた素敵な例です。
- [WebVR.info samples](https://webvr.info/samples/) — より詳細な例とソースコード
- [WebVR.rocks Firefox demos](https://webvr.rocks/firefox#demos) — ショーケースの例
- [A-Frame homepage](https://aframe.io/) — A-Frameの使用例を示します。

## 仕様書

この API は古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部であり、これは [WebXR 機器 API](https://immersive-web.github.io/webxr/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [WebXR API](/ja/docs/Web/API/WebXR_Device_API/Fundamentals) を実装するまで、 [A-Frame](https://aframe.io/)、[Babylon.js](https://www.babylonjs.com/)、[Three.js](https://threejs.org/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immersive-web/webxr-polyfill)を使用することが、すべてのブラウザーで動作する WebXR アプリを開発する上で推奨されます。[\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [A-Frame](https://aframe.io/) — VR 体験を構築するためのオープンソースのウェブフレームワーク。
- [webvr.info](https://webvr.info) — WebVR の最新情報、ブラウザー設定、コミュニティなど。
- [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — WebVR アプリを書き込むための有益なスターターテンプレートです。
- [Web VR polyfill](https://github.com/immersive-web/webvr-polyfill) — JavaScript による WebVR の実装です。
- [Supermedium](https://www.supermedium.com) — 最高の WebVR コンテンツに簡単にアクセスするための純粋な WebVR ブラウザーです。
- [WebVR Directory](https://webvr.directory/) — 良質な WebVR サイトを掲載しています。
