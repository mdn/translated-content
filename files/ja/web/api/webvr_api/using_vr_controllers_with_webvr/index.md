---
title: WebVR での VR ゲームパッドの使用
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: 54fe4cbcaa46720a432cbcc20adfdc573bd474c2
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

多くの WebVR ハードウェアは、ヘッドセットとゲームパッドがセットになっています。WebVR アプリにおいては、ヘッドセットとゲームパッドは[ゲームパッド API](/ja/docs/Web/API/Gamepad_API)を通じて接続されます。中でも、[ゲームパッド拡張 API](/ja/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) は、ゲームパッドの状態([controller pose](/ja/docs/Web/API/GamepadPose))、触覚アクチュエータ([haptic actuators](/ja/docs/Web/API/GamepadHapticActuator))などの情報を取得します。この記事では、その基礎となる部分を解説します。

> [!NOTE]
> WebVR API は [WebXR API](/ja/docs/Web/API/WebXR_Device_API) に置き換えられました。 WebVR は標準として批准されることはなく、ごく少数のブラウザーでしか既定で実装・有効化されず、少数の端末しか対応していませんでした。

## WebVR API

[WebVR API](/ja/docs/Web/API/WebVR_API) は初期段階ではあるが、開発者がウェブベースのバーチャルリアリティー経験を生み出すことのできるとても興味深いウェブの新しい機能です。コンピュータとつながっている VR ヘッドセット（VR ディスプレイ）へのアクセスを与えることで、ディスプレイをスタートしたり、ストップする操作ができます。動きのデータ（例：方向や位置）へアクセスして得られたデータは、各アニメーションループのフレームごとにディスプレイをアップデートするためなどに使用されます。

この記事を読む前提として、Web VR API の基礎についてすでに知っていることを想定しています。 — もしまだ [WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)にを読んでいない場合には、まずはそちらを読んでみましょう。その記事の中では、ブラウザ側がハードウェアの設定をサポートしたり、設定を要求したりすることについて詳しく説明しています。

## ゲームパッド API

[ゲームパッド API](/ja/docs/Web/API/Gamepad_API) はよくサポートされた API であり、 これを使用することで PC につながっているゲームパッドやゲームパッドに開発者がアクセスすることができるようになります。また、ウェブアプリケーションをゲームパッドやゲームパッドを通じて操作することもできるようになります。基本としてゲームパッド API は、ゲームパッドオブジェクトとしてつながっているゲームパッドに対してアクセスの許可を与えます。そしてどのボタンが押されているか、軸がどの方向に向いているかなどの情報を取得するよう要求します。

ゲームパッド API の基本的な使い方については、[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)や[ゲームパッド API を使用した制御の実装](/ja/docs/Games/Techniques/Controls_Gamepad_API)の中で詳しく知ることができます。

しかしながら、この記事では主に、位置、方向、触覚アクチュエーター（バイブレーション）などの高度なゲームパッド情報へのアクセスのような、[ゲームパッド拡張](https://w3c.github.io/gamepad/extensions.html) API で与えられたいくつかの新しい特徴に注目します。この API はとても新しく、Firefox 55+ Beta や Firefox Nightly のブラウザでのみデフォルトで WebVR API がサポートされています。

## ゲームパッドの種類

VR ハードウェアに付随するゲームパッドには、２つの種類があります。

- ６軸に対して自由度を持つゲームパッドは位置と方向のデータを取得することができる。具体的には、ゲームパッドが VR シーンや動きや回転のある物体を操作することができる。例えば、HTC VIVE のゲームパッドがそれにあたる。
- ３軸に対して自由度を持つゲームパッドは、位置データは取得できないが方向のデータを取得することができる。例えば Google Daydream のゲームパッドである。具体的には、3D 空間で異なる物体をレーザーポインターのように指し示すことはできるが、3D 空間を動き回ることはできない。

## ゲームパッドへのアクセス方法

ここではいくつかのコードを紹介します。まず、Gamepad API を使用して VR ゲームパッドへの基本的なアクセス方法を見ていきましょう。いくつかのおかしなニュアンスを心に留めておきましょう、それは後から調べる価値があるものです。

シンプルな例を紹介します。-[vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) のソースコード ([see it running live here also](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)) を御覧ください。この例は VR ディスプレイやコンピューターと接続したゲームゲームパッドへ情報を出力するシンプルなものです。

### ディスプレイの情報を取得

最初のコードです。

```js
let initialRun = true;

if (navigator.getVRDisplays && navigator.getGamepads) {
  info.textContent = "WebVR API and Gamepad API supported.";
  reportDisplays();
} else {
  info.textContent =
    "WebVR API and/or Gamepad API not supported by this browser.";
}
```

ここでは、`initialRun`　というトラッキングの変数を使います。これは、「このページを初めてロードした」ことを示します。この点については、あとで詳しく述べます。次に、{{domxref("Navigator.getVRDisplays()")}} と {{domxref("Navigator.getGamepads()")}}メソッドがあるかないかをチェックして、WebVR と Gamepad APIs がサポートされているかどうかを検知します。もし、サポートされていれば、検知するプロセスを OFF にするために、カスタム機能である `reportDisplays()` を実行します。 `reportDisplays()` は、以下のような構成になっています。

```js
function reportDisplays() {
  navigator.getVRDisplays().then((displays) => {
    console.log(`${displays.length} displays`);
    displays.forEach((display, i) => {
      const cap = display.capabilities;
      // cap is a VRDisplayCapabilities object
      const listItem = document.createElement("li");
      listItem.innerHTML =
        `<strong>Display ${i + 1}</strong><br>` +
        `VR Display ID: ${display.displayId}<br>` +
        `VR Display Name: ${display.displayName}<br>` +
        `Display can present content: ${cap.canPresent}<br>` +
        `Display is separate from the computer's main display: ${cap.hasExternalDisplay}<br>` +
        `Display can return position info: ${cap.hasPosition}<br>` +
        `Display can return orientation info: ${cap.hasOrientation}<br>` +
        `Display max layers: ${cap.maxLayers}`;
      list.appendChild(listItem);
    });

    setTimeout(reportGamepads, 1000);
    // For VR, controllers will only be active after their corresponding headset is active
  });
}
```

この関数は最初にプロミスベースの {{domxref("Navigator.getVRDisplays()")}} メソッドを使用し、接続されたディスプレイを表す {{domxref("VRDisplay")}} オブジェクトを含む配列を使用して解決します。次に、各ディスプレイの {{domxref("VRDisplay.displayId")}} と {{domxref("VRDisplay.displayName")}} 値、およびそのディスプレイに関連付けられた {{domxref("VRCapabilities")}} オブジェクトに格納されている多くの有用な値が表示されます。これらのうち最も有益なのは {{domxref("VRCapabilities.hasOrientation", "hasOrientation")}} と {{domxref("VRCapabilities.hasPosition", "hasPosition")}} で、これにより機器が向きと位置のデータを返すことができるかどうかを検出し、それに応じてアプリを設定することができます。

この関数に含まれる最後の行は {{domxref("setTimeout()")}} 呼び出しで、 1 秒後に `reportGamepads()` 関数を実行します。なぜこのようなことが必要なのでしょうか？まず第一に、 VR コントローラーは関連する VR ヘッドセットがアクティブになって初めて準備が整います。そのため、`getVRDisplays()`が呼び出されてディスプレイ情報を返した後に、この関数を呼び出す必要があります。 2 つ目として、ゲームパッド API は WebVR API よりもずっと古く、プロミスベースではありません。後ほど説明しますが、`getGamepads()` メソッドは同期型で、`Gamepad` オブジェクトをすぐに返すだけです - コントローラーが情報を報告する準備ができるまで待つことはありません。少し待たないと、返された情報は正確ではないかもしれません（少なくとも、我々のテストではそうでした）。

### ゲームゲームパッドの情報を取得

`reportGamepads()` 関数は、このような構成になっています。

```js
function reportGamepads() {
  const gamepads = navigator.getGamepads();
  console.log(`${gamepads.length} controllers`);
  for (const gp of gamepads) {
    const listItem = document.createElement("li");
    listItem.classList = "gamepad";
    listItem.innerHTML =
      `<strong>Gamepad ${gp.index}</strong> (${gp.id})<br>` +
      `Associated with VR Display ID: ${gp.displayId}<br>` +
      `Gamepad associated with which hand: ${gp.hand}<br>` +
      `Available haptic actuators: ${gp.hapticActuators.length}<br>` +
      `Gamepad can return position info: ${gp.pose.hasPosition}<br>` +
      `Gamepad can return orientation info: ${gp.pose.hasOrientation}`;
    list.appendChild(listItem);
  }
  initialRun = false;
}
```

これは `reportDisplays()` と同じように動作します。プロミスでない `getGamepads()` メソッドを使用して {{domxref("Gamepad")}} オブジェクトの配列を取得し、それぞれのオブジェクトを循環して情報を表示しています。

- {{domxref("Gamepad.displayId")}} プロパティは、コントローラーが関連付けられているヘッドセットの `displayId` と同じなので、コントローラーとヘッドセットの情報を結び付けて使用するのに有益な情報です。
- {{domxref("Gamepad.index")}} プロパティは、接続された各コントローラーを識別するための固有の数値インデックスです。
- {{domxref("Gamepad.hand")}}は、コントローラーがどちらの手で握られることを想定しているかを返すプロパティです。
- {{domxref("Gamepad.hapticActuators")}} は、コントローラーで利用できるハプティックアクチュエータの配列を返します。ここでは、それぞれが利用できる数を確認するために、その長さを返しています。
- 最後に、コントローラーが位置と方向のデータを返すことができるかどうかを示すために、{{domxref("GamepadPose.hasPosition")}} と {{domxref("GamepadPose.hasOrientation")}} を返すようにしています。これはディスプレイの場合と同じように動作しますが、ゲームパッドの場合、これらの値は capabilities オブジェクトではなく pose オブジェクトで利用できます。

コントローラー情報を含むリスト項目には、それぞれ `gamepad` というクラス名を付けていることに注意してください。これが何のためにあるのかは、後で説明します。

最後に、`initialRun` 変数を `false` に設定します。これで初期実行は終わりです。

### ゲームパッドのイベント

この章の仕上げとして、ゲームパッドに関連するイベントを見ていきます。1 人または 2 人です - {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} と {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} - そしてこれらが行うことはかなり明白です。

この例の終わりには、まず `removeGamepads()` 関数を記載しています。

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll(".gamepad");
  for (let i = 0; i < gpLi.length; i++) {
    list.removeChild(gpLi[i]);
  }
  reportGamepads();
}
```

この関数は、クラス名が `gamepad` であるすべてのリスト項目への参照を取得し、DOM から削除します。その後、`reportGamepads()` を再実行して、接続されているコントローラのリストを更新しています。

`removeGamepads()` は、ゲームパッドが接続または切断されるたびに、以下のイベントハンドラーで実行されます。

```js
window.addEventListener("gamepadconnected", (e) => {
  info.textContent = `Gamepad ${e.gamepad.index} connected.`;
  if (!initialRun) {
    setTimeout(removeGamepads, 1000);
  }
});

window.addEventListener("gamepaddisconnected", (e) => {
  info.textContent = `Gamepad ${e.gamepad.index} disconnected.`;
  setTimeout(removeGamepads, 1000);
});
```

ここでは、スクリプト上部の初期化コードで行ったように `setTimeout()` を所有しており、各ケースで `reportGamepads()` が呼び出されたときにゲームパッドが情報を報告する準備ができていることを確認することができます。

しかし、もう一つメモがあります。 `gamepadconnected` ハンドラーの内部では、 `initialRun` が `false` のときだけタイムアウトが実行されることがわかると思います。これは、文書内の最初のロード時にゲームパッドが接続されている場合、ゲームパッドごとに `gamepadconnected` が発行されるため、 `removeGamepads()`/`reportGamepads()` が複数回実行されることになるからです。そのため、`removeGamepads()`は `gamepadconnected` ハンドラーの中で、最初の実行時ではなく、実行後に実行するようにしたいです。そのために `initialRun` があります。

## 実際のデモの紹介

実際の WebVR のデモで使用された Gamepad API を見てみましょう。このデモは[raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example) ([ライブデモご覧ください](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)).で見ることができます。

私達の[raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example) (詳しくは [Using the WebVR API](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API) を御覧ください。)と同じ方法で、このデモにおいても回転する 3D 立方体をレンダリングしています。また、これを VR ディスプレイへ投影することもできます。唯一の違いとしては、VR ディスプレイへ投影モードでは、VR ゲームパッドを使って立方体を動かすことができます。（オリジナルのデモ動画では、VR ヘッドセットを動かすことで、立方体を動かすことができる。）

以下に、このバージョンでのコードの違いをより詳しく紹介します。[webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js) を御覧ください。

### ゲームパッドデータへのアクセス

`drawVRScene()` 関数についてのコードの一部です。

```js
const gamepads = navigator.getGamepads();
const gp = gamepads[0];

if (gp) {
  const gpPose = gp.pose;
  const curPos = gpPose.position;
  const curOrient = gpPose.orientation;
  if (poseStatsDisplayed) {
    displayPoseStats(gpPose);
  }
}
```

{{domxref("Navigator.getGamepads")}}を利用して、ゲームパッドが接続されました。また `gp` 変数の中に最初に認識したゲームパッドを保存します。 デモでは、ゲームパッドを一つしか使用しないので、その他のゲームパッドは無視します。

次に行うことは、gpPose に格納されているコントローラーの {{domxref("GamepadPose")}} オブジェクトを取得し ({{domxref("Gamepad.pose")}} をクエリーして)、またこのフレームの現在のゲームパッドの位置と方向を変数に格納して、後で容易にアクセスできるようにすることです。また、 `displayPoseStats()` 関数を使用して、このフレームのポスト統計情報を DOM に表示します。この処理はすべて `gp` が実際に値を保有している場合（ゲームパッドが接続されている場合）にのみ行われ、ゲームパッドを接続していない場合にデモがエラーにならないようにしています。

コードの少し後に、このブロックを見つけることができます。

```js
if (gp && gpPose.hasPosition) {
  mvTranslate([
    0.0 + curPos[0] * 15 - curOrient[1] * 15,
    0.0 + curPos[1] * 15 + curOrient[0] * 15,
    -15.0 + curPos[2] * 25,
  ]);
} else if (gp) {
  mvTranslate([0.0 + curOrient[1] * 15, 0.0 + curOrient[0] * 15, -15.0]);
} else {
  mvTranslate([0.0, 0.0, -15.0]);
}
```

ここでは、接続されたコントローラーから受け取った {{domxref("GamepadPose.position", "position")}} と {{domxref("GamepadPose.orientation", "orientation")}} データに従って、画面上のCubeの位置を変更します。これらの値(`curPos` と `curOrient` に格納されます)は X、Y、Z の値を含む {{jsxref("Float32Array")}}s です (ここでは X である \[0] と Y である \[1] だけ使用しています)。

変数 `gp` の中に `Gamepad` オブジェクトがあり、位置値を返すことができる場合 (`gpPose.hasPosition`) は、6DoF コントローラーを示しているので、位置と方向の値を使ってキューブの位置を変更しま す。前者のみが真の場合、3DoF コントローラーを示し、方向値のみを使用してキューブの位置を変更します。ゲームパッドが接続されていない場合、キューブの位置はすべて変更されません。

### ゲームパッドの姿勢データの表示

`displayPoseStats()` 関数では、{{domxref("GamepadPose")}} オブジェクトのうちの表示したいすべての情報を取得することができます。そして、そのようなデータを表示するためのデモの中に存在する UI パネルに表示します。

```js
function displayPoseStats(pose) {
  const pos = pose.position;

  const formatCoords = ([x, y, z]) =>
    `x ${x.toFixed(3)}, y ${y.toFixed(3)}, z ${z.toFixed(3)}`;

  posStats.textContent = pose.hasPosition
    ? `Position: ${formatCoords(pose.position)}`
    : "Position not reported";

  orientStats.textContent = pose.hasOrientation
    ? `Orientation: ${formatCoords(pose.orientation)}`
    : "Orientation not reported";

  linVelStats.textContent = `Linear velocity: ${formatCoords(
    pose.linearVelocity,
  )}`;
  angVelStats.textContent = `Angular velocity: ${formatCoords(
    pose.angularVelocity,
  )}`;

  linAccStats.textContent = pose.linearAcceleration
    ? `Linear acceleration: ${formatCoords(pose.linearAcceleration)}`
    : "Linear acceleration not reported";

  angAccStats.textContent = pose.angularAcceleration
    ? `Angular acceleration: ${formatCoords(pose.angularAcceleration)}`
    : "Angular acceleration not reported";
}
```

## まとめ

この記事は、WebVR アプリの中で VR ゲームパッドを使うためには、どのように Gamepad Extensions を用いればよいのかというとても基本的な概念を解説したものです。実際の WebVR アプリの中では、VR ゲームパッドのボタンに紐付けられたゲームパッドにより、おそらくより複雑なコントロールシステムをもたせることになるでしょう。 そして、ディスプレイとゲームパッドの両方の情報（位置や方向）を同期的にディスプレイへフィードバックするという複雑な処理を行うことになります。しかし、この記事でやりたかったのは、Gamepad Extensions の中の純粋な Gamepad Extensions 部分を切り分けるということです。

## 関連項目

- [WebVR API](/ja/docs/Web/API/WebVR_API)
- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API)
- [WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [ゲームパッド API を使用した制御の実装](/ja/docs/Games/Techniques/Controls_Gamepad_API)
