---
title: WebVR での VR ゲームパッドの使用
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{DefaultAPISidebar("WebVR API")}}

多くの WebVR ハードウェア構成には、ヘッドセットと組み合わせて使うコントローラーが含まれています。これらのコントローラーは、[ゲームパッド API](/ja/docs/Web/API/Gamepad_API)、特に [ゲームパッド拡張 API](/ja/docs/Web/API/Gamepad_API#experimental_gamepad_extensions) を通じて WebVR アプリで使用できます。この API は、[コントローラーの姿勢](/ja/docs/Web/API/GamepadPose)や[触覚アクチュエーター](/ja/docs/Web/API/GamepadHapticActuator)などにアクセスする機能を追加します。この記事では、その基本を解説します。

> [!NOTE]
> WebVR API は [WebXR API](/ja/docs/Web/API/WebXR_Device_API) に置き換えられました。 WebVR は標準として批准されることはなく、ごく少数のブラウザーでしか既定で実装・有効化されず、少数の端末しか対応していませんでした。

## WebVR API

[WebVR API](/ja/docs/Web/API/WebVR_API) はまだ初期段階ですが、開発者がウェブベースのバーチャルリアリティ体験を作成できる、とても興味深いウェブプラットフォームの機能です。コンピューターに接続された VR ヘッドセットに {{domxref("VRDisplay")}} オブジェクトとしてアクセスでき、ディスプレイへの表示を開始・停止したり、アニメーションループの各フレームで表示を更新するための移動データ（向きや位置など）を取得したりできます。

この記事を読む前に、WebVR API の基本を理解しておく必要があります。まだ[WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)を読んでいない場合は、先に読んでください。この記事では、ブラウザーの対応状況や必要なハードウェアのセットアップについても説明しています。

## ゲームパッド API

[ゲームパッド API](/ja/docs/Web/API/Gamepad_API) は広く対応されており、コンピューターに接続されたゲームパッドやコントローラーにアクセスして、ウェブアプリを操作できるようにします。基本的なゲームパッド API では、接続されたコントローラーに {{domxref("Gamepad")}} オブジェクトとしてアクセスし、押されているボタンや動かされているスティック（軸）などを調べられます。

ゲームパッド API の基本的な使い方については、[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)や[ゲームパッド API を使用した制御の実装](/ja/docs/Games/Techniques/Controls_Gamepad_API)の中で詳しく知ることができます。

この記事では主に、位置や向きなどの高度なコントローラー情報へのアクセスや、触覚アクチュエーター（振動機能）の制御などを可能にする[ゲームパッド拡張](https://w3c.github.io/gamepad/extensions.html) API の機能に注目します。この API は非常に新しく、現在のところ Firefox 55 以降のベータ版および Nightly チャンネルでのみサポートされ、デフォルトで有効になっています。

## ゲームパッドの種類

VR ハードウェアに付属するコントローラーには、次の 2 種類があります。

- 6 自由度 (6DoF) のコントローラーは、位置と向きの両方のデータを取得できます。動きと回転の両方で VR シーン内のオブジェクトを操作できます。例として HTC VIVE のコントローラーがあります。
- 3 自由度 (3DoF) のコントローラーは、位置データは取得できず、向きのデータのみ取得できます。例として Google Daydream のコントローラーがあります。3D 空間内の物体をレーザーポインターのように指し示すために回転させることはできますが、3D シーン内で移動させることはできません。

## ゲームパッドへのアクセス方法

ここからはいくつかコードを見ていきましょう。まず、ゲームパッド API を使用して VR コントローラーにアクセスする基本を説明します。いくつか注意すべき特殊な点があるため、詳しく見ていく価値があります。

例として、[vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/main/webvr/vr-controller-basic-info/index.html) のソースコードと[ライブデモ](https://mdn.github.io/webvr-tests/webvr/vr-controller-basic-info/)をご覧ください。このデモは、コンピューターに接続された VR ディスプレイとゲームパッドの情報を出力します。

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

まず、トラッキング用の変数 `initialRun` を使い、このページが初めて読み込まれたことを記録します。この点については後で説明します。次に、{{domxref("Navigator.getVRDisplays()")}} メソッドと {{domxref("Navigator.getGamepads()")}} メソッドの有無を調べ、WebVR API とゲームパッド API がサポートされているか確認します。サポートされていれば、処理を開始するために独自の関数 `reportDisplays()` を実行します。この関数は次のようになっています。

```js
function reportDisplays() {
  navigator.getVRDisplays().then((displays) => {
    console.log(`${displays.length} displays`);
    displays.forEach((display, i) => {
      const cap = display.capabilities;
      // cap は VRDisplayCapabilities オブジェクト
      const listItem = document.createElement("li");
      listItem.innerText = `
VR Display ID: ${display.displayId}
VR Display Name: ${display.displayName}
Display can present content: ${cap.canPresent}
Display is separate from the computer's main display: ${cap.hasExternalDisplay}
Display can return position info: ${cap.hasPosition}
Display can return orientation info: ${cap.hasOrientation}
Display max layers: ${cap.maxLayers}`;
      listItem.insertBefore(
        document.createElement("strong"),
        listItem.firstChild,
      ).textContent = `Display ${i + 1}`;
      list.appendChild(listItem);
    });

    setTimeout(reportGamepads, 1000);
    // VR コントローラーは、対応するヘッドセットがアクティブになってから使用可能になる
  });
}
```

この関数はまず、プロミスベースの {{domxref("Navigator.getVRDisplays()")}} メソッドを使います。このメソッドは、接続されたディスプレイを表す {{domxref("VRDisplay")}} オブジェクトの配列で履行されるプロミスを返します。次に、各ディスプレイの {{domxref("VRDisplay.displayId")}} と {{domxref("VRDisplay.displayName")}} の値、および関連付けられた {{domxref("VRDisplayCapabilities")}} オブジェクト内の有用な値を出力します。特に有用なのは {{domxref("VRDisplayCapabilities.hasOrientation", "hasOrientation")}} と {{domxref("VRDisplayCapabilities.hasPosition", "hasPosition")}} です。これらを使うと、デバイスが向きと位置のデータを返せるかを検出し、それに応じてアプリを設定できます。

この関数の最後では {{domxref("Window.setTimeout", "setTimeout()")}} を呼び出し、1 秒後に `reportGamepads()` 関数を実行します。なぜ必要なのでしょうか？まず、VR コントローラーは対応する VR ヘッドセットがアクティブになってからでないと使用できないため、`getVRDisplays()` が呼び出されてディスプレイ情報が返された後に実行する必要があります。また、ゲームパッド API は WebVR API より古く、プロミスベースではありません。後で説明するように、`getGamepads()` メソッドは同期的に `Gamepad` オブジェクトをすぐ返し、コントローラーが情報を報告できるようになるまで待ちません。少し待たないと、返される情報が正確でない場合があります（少なくとも、私たちのテストではそうでした）。

### ゲームパッドの情報を取得

`reportGamepads()` 関数は、このような構成になっています。

```js
function reportGamepads() {
  const gamepads = navigator.getGamepads();
  console.log(`${gamepads.length} controllers`);
  for (const gp of gamepads) {
    const listItem = document.createElement("li");
    listItem.classList = "gamepad";
    listItem.innerText = `
Associated with VR Display ID: ${gp.displayId}
Gamepad associated with which hand: ${gp.hand}
Available haptic actuators: ${gp.hapticActuators.length}
Gamepad can return position info: ${gp.pose.hasPosition}
Gamepad can return orientation info: ${gp.pose.hasOrientation}`;
    listItem.insertBefore(
      document.createElement("strong"),
      listItem.firstChild,
    ).textContent = `Gamepad ${gp.index}`;
    list.appendChild(listItem);
  }
  initialRun = false;
}
```

これは `reportDisplays()` と同じように動作します。プロミスベースではない `getGamepads()` メソッドを使って {{domxref("Gamepad")}} オブジェクトの配列を取得し、それぞれのオブジェクトについて情報を表示します。

- {{domxref("Gamepad.displayId")}} プロパティは、コントローラーが関連付けられているヘッドセットの `displayId` と同じなので、コントローラーとヘッドセットの情報を結び付けて使用するのに有益な情報です。
- {{domxref("Gamepad.index")}} プロパティは、接続された各コントローラーを識別するための固有の数値インデックスです。
- {{domxref("Gamepad.hand")}} は、コントローラーをどちらの手で持つことが想定されているかを返します。
- {{domxref("Gamepad.hapticActuators")}} は、コントローラーで利用できるハプティックアクチュエータの配列を返します。ここでは、それぞれが利用できる数を確認するために、その長さを返しています。
- 最後に、{{domxref("GamepadPose.hasPosition")}} と {{domxref("GamepadPose.hasOrientation")}} によって、コントローラーが位置と向きのデータを返せるかどうかを確認します。ディスプレイの場合と同じですが、ゲームパッドではこれらの値は capabilities オブジェクトではなく pose オブジェクトにあります。

コントローラー情報を含むリスト項目には、それぞれ `gamepad` というクラス名を付けていることに注意してください。これが何のためにあるのかは、後で説明します。

最後に、`initialRun` 変数を `false` に設定します。これで初期実行は終わりです。

### ゲームパッドのイベント

この章の仕上げとして、ゲームパッドに関連するイベントを見ていきます。ここで確認するイベントは 2 つあります。{{domxref("Window.gamepadconnected_event", "gamepadconnected")}} と {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} です。どのようなイベントかは名前から明らかでしょう。

この例の終わりには、まず `removeGamepads()` 関数を記載しています。

```js
function removeGamepads() {
  const gpLi = document.querySelectorAll(".gamepad");
  for (const li of gpLi) {
    list.removeChild(li);
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

ここでも、スクリプト上部の初期化コードと同様に `setTimeout()` を使い、それぞれの場合に `reportGamepads()` が呼び出されるとき、ゲームパッドが情報を報告できる状態になっているようにします。

もう 1 点注意があります。`gamepadconnected` ハンドラー内では、`initialRun` が `false` の場合にのみタイムアウトを実行します。文書の初回読み込み時に複数のゲームパッドが接続されていると、ゲームパッドごとに `gamepadconnected` が発生し、`removeGamepads()` と `reportGamepads()` が複数回実行されて不正確な結果になる可能性があります。そのため、`gamepadconnected` ハンドラー内で `removeGamepads()` を実行するのは、初回実行が終わった後だけにします。これが `initialRun` を使う理由です。

## 実際のデモの紹介

実際の WebVR デモで使われているゲームパッド API を見てみましょう。このデモは[raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-controller-example)で、[ライブデモ](https://mdn.github.io/webvr-tests/webvr/raw-webgl-controller-example/)も確認できます。

このデモは、[raw-webgl-example](https://github.com/mdn/webvr-tests/tree/main/webvr/raw-webgl-example)（詳しくは[WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)を参照）と同様に、回転する 3D キューブを描画し、VR ディスプレイに表示できます。違いは、VR 表示中に VR コントローラーを動かしてキューブを移動できる点です（元のデモでは VR ヘッドセットを動かしてキューブを移動します）。

このバージョンでのコードの違いを以下で見ていきます。[webgl-demo.js](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-controller-example/webgl-demo.js)を参照してください。

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

{{domxref("Navigator.getGamepads")}} を使って接続中のゲームパッドを取得し、最初に検出されたゲームパッドを `gp` 変数に格納します。このデモではゲームパッドを 1 つしか使わないため、ほかのゲームパッドは無視します。

次に、{{domxref("Gamepad.pose")}} を参照してコントローラーの {{domxref("GamepadPose")}} オブジェクトを取得し、現在のフレームにおけるゲームパッドの位置と向きを変数に格納して、後から簡単に使えるようにします。また、`displayPoseStats()` 関数でこのフレームの姿勢の統計情報を DOM に表示します。これらの処理は `gp` に値がある場合（つまり、ゲームパッドが接続されている場合）にのみ実行されるため、ゲームパッドを接続していなくてもデモでエラーは発生しません。

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

ここでは、接続されたコントローラーから受け取った {{domxref("GamepadPose.position", "position")}} と {{domxref("GamepadPose.orientation", "orientation")}} のデータに従って、画面上のキューブの位置を変更します。これらの値は `curPos` と `curOrient` に格納される {{jsxref("Float32Array")}} で、X、Y、Z の値を含みます（ここでは X の `[0]` と Y の `[1]` だけを使用します）。

`gp` に `Gamepad` オブジェクトがあり、位置データを返せる場合（`gpPose.hasPosition` が真の場合）は、6DoF コントローラーを示します。この場合は位置と向きの値を使ってキューブの位置を変更します。`gp` にオブジェクトがあるものの位置データを返せない場合は、3DoF コントローラーを示すため、向きの値だけを使います。ゲームパッドが接続されていない場合、キューブの位置は変更しません。

### ゲームパッドの姿勢データの表示

`displayPoseStats()` 関数では、渡された {{domxref("GamepadPose")}} オブジェクトから表示するデータを取得し、デモ内の UI パネルに出力します。

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

この記事では、WebVR アプリで VR コントローラーを使用するためのゲームパッド拡張機能の基本を説明しました。実際のアプリでは、コントローラーのボタンに操作を割り当てるなど、より複雑な制御システムを実装するでしょう。また、ディスプレイとコントローラー両方の姿勢情報を使って、ディスプレイを更新する必要もあります。ここでは、ゲームパッド拡張機能そのものに焦点を当てました。

## 関連情報

- [WebVR API](/ja/docs/Web/API/WebVR_API)
- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API)
- [WebVR API の使用](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [ゲームパッド API を使用した制御の実装](/ja/docs/Games/Techniques/Controls_Gamepad_API)
