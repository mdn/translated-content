---
title: WebVRでの VRコントローラーの使用
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
---

{{APIRef("WebVR API")}}

多くの WebVR ハードウェアは、ヘッドセットとコントローラーがセットになっています。WebVR アプリにおいては、ヘッドセットとコントローラーは[Gamepad API](/ja/docs/Web/API/Gamepad_API)を通じて接続されます。中でも、[Gamepad Extensions API](/ja/docs/Web/API/Gamepad_API#Experimental_Gamepad_extensions)は、コントローラーの状態([controller pose](/ja/docs/Web/API/GamepadPose))、触覚アクチュエータ([haptic actuators](/ja/docs/Web/API/GamepadHapticActuator))などの情報を取得します。この記事では、その基礎となる部分を解説いたします。

## The WebVR API

[WebVR API](/ja/docs/Web/API/WebVR_API) は初期段階ではあるが、開発者がウェブベースのバーチャルリアリティー経験を生み出すことのできるとても興味深いウェブの新しい機能です。コンピュータとつながっている VR ヘッドセット（VR ディスプレイ）へのアクセスを与えることで，ディスプレイをスタートしたり、ストップする操作ができます．動きのデータ（例：方向や位置）へアクセスして得られたデータは，各アニメーションループのフレームごとにディスプレイをアップデートするためなどに使用されます。

この記事を読む前提として、Web VR API の基礎についてすでに知っていることを想定しています。 — もしまだ[Using the WebVR API](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)にを読んでいない場合には、まずはそちらを読んでみましょう．その記事の中では，ブラウザ側がハードウェアの設定をサポートしたり，設定を要求したりすることについて詳しく説明しています。

## The Gamepad API

[Gamepad API](/ja/docs/Web/API/Gamepad_API) はよくサポートされた API であり， これを使用することで PC につながっているゲームパッドやコントローラーに開発者がアクセスすることができるようになります。また、ウェブアプリケーションをゲームパッドやコントローラーを通じて操作することもできるようになります。基本として Gamepad API は、ゲームパッドオブジェクトとしてつながっているコントローラーに対してアクセスの許可を与えます。そしてどのボタンが押されているか、軸がどの方向に向いているかなどの情報を取得するよう要求します。

Gamepad API の基本的な使い方については、[Using the Gamepad API](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)や[Implementing controls using the Gamepad API](/ja/docs/Games/Techniques/Controls_Gamepad_API)の中で詳しく知ることができます。

しかしながら，この記事では主に、位置、方向、触覚アクチュエーター（バイブレーション）などの高度なコントローラー情報へのアクセスのような、Gamepad Extensions API で与えられたいくつかの新しい特徴に注目します。この API はとても新しく，Firefox 55+ Beta や Firefox Nightly のブラウザでのみデフォルトで WebVR API がサポートされています。

## コントローラーの種類

VR ハードウェアに付随するコントローラーには、２つの種類があります。

- ６軸に対して自由度を持つコントローラーは位置と方向のデータを取得することができる。具体的には、コントローラーが VR シーンや動きや回転のある物体を操作することができる。例えば、HTC VIVE のコントローラーがそれにあたる。
- ３軸に対して自由度を持つコントローラーは、位置データは取得できないが方向のデータを取得することができる．例えば Google Daydream のコントローラーである。具体的には、3D 空間で異なる物体をレーザーポインターのように指し示すことはできるが、3D 空間を動き回ることはできない。

## コントローラーへのアクセス方法

ここではいくつかのコードを紹介します。まず、Gamepad API を使用して VR コントローラーへの基本的なアクセス方法を見ていきましょう。いくつかのおかしなニュアンスを心に留めておきましょう、それは後から調べる価値があるものです。

シンプルな例を紹介します。-[vr-controller-basic-info](https://github.com/mdn/webvr-tests/blob/master/vr-controller-basic-info/index.html)　のソースコード([see it running live here also](https://mdn.github.io/webvr-tests/vr-controller-basic-info/))を御覧ください。この例は VR ディスプレイやコンピューターと接続したゲームコントローラーへ情報を出力するシンプルなものです。

### ディスプレイの情報を取得

最初のコードです。

```js
var initialRun = true;

if(navigator.getVRDisplays && navigator.getGamepads) {
  info.textContent = 'WebVR API and Gamepad API supported.'
  reportDisplays();
} else {
  info.textContent = 'WebVR API and/or Gamepad API not supported by this browser.'
}
```

ここでは、`initialRun`　というトラッキングの変数を使います。これは、「このページを初めてロードした」ことを示します。この点については、あとで詳しく述べます。次に、{{domxref("Navigator.getVRDisplays()")}} と {{domxref("Navigator.getGamepads()")}}メソッドがあるかないかをチェックして、WebVR と Gamepad APIs がサポートされているかどうかを検知します。もし、サポートされていれば、検知するプロセスを OFF にするために、カスタム機能である `reportDisplays()` を実行します。 `reportDisplays()` は、以下のような構成になっています。

```js
function reportDisplays() {
  navigator.getVRDisplays().then(function(displays) {
      console.log(displays.length + ' displays');
    for(var i = 0; i < displays.length; i++) {
      var cap = displays[i].capabilities;
      // cap is a VRDisplayCapabilities object
      var listItem = document.createElement('li');
      listItem.innerHTML = '<strong>Display ' + (i+1) + '</strong>'
                   + '<br>VR Display ID: ' + displays[i].displayId
                   + '<br>VR Display Name: ' + displays[i].displayName
                   + '<br>Display can present content: ' + cap.canPresent
                   + '<br>Display is separate from the computer\'s main display: ' + cap.hasExternalDisplay
                   + '<br>Display can return position info: ' + cap.hasPosition
                   + '<br>Display can return orientation info: ' + cap.hasOrientation
                   + '<br>Display max layers: ' + cap.maxLayers;
      list.appendChild(listItem);
    }

    setTimeout(reportGamepads, 1000);
    // For VR, controllers will only be active after their corresponding headset is active
  });
}
```

This function first uses the promise-based {{domxref("Navigator.getVRDisplays()")}} method, which resolves with an array containing {{domxref("VRDisplay")}} objects representing the connected displays. Next, it prints out each display's {{domxref("VRDisplay.displayId")}} and {{domxref("VRDisplay.displayName")}} values, and a number of useful values contained in the display's associated {{domxref("VRCapabilities")}} object. The most useful of these are {{domxref("VRCapabilities.hasOrientation","hasOrientation")}} and {{domxref("VRCapabilities.hasPosition","hasPosition")}}, which allow you to detect whether the device can return orientation and position data and set up your app accordingly.

The last line contained in this function is a {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}} call, which runs the `reportGamepads()` function after a 1 second delay. Why do we need to do this? First of all, VR controllers will only be ready after their associated VR headset is active, so we need to invoke this after `getVRDisplays()` has been called and returned the display information. Second, the Gamepad API is much older than the WebVR API, and not promise-based. As you'll see later, the `getGamepads()` method is synchronous, and just returns the `Gamepad` objects immediately — it doesn't wait for the controller to be ready to report information. Unless you wait for a little while, returned information may not be accurate (at least, this is what we found in our tests).

### ゲームコントローラーの情報を取得

`reportGamepads()` 関数は、このような構成になっています。

```js
function reportGamepads() {
    var gamepads = navigator.getGamepads();
    console.log(gamepads.length + ' controllers');
    for(var i = 0; i < gamepads.length; ++i) {
        var gp = gamepads[i];
        var listItem = document.createElement('li');
        listItem.classList = 'gamepad';
        listItem.innerHTML = '<strong>Gamepad ' + gp.index + '</strong> (' + gp.id + ')'
                 + '<br>Associated with VR Display ID: ' + gp.displayId
                 + '<br>Gamepad associated with which hand: ' + gp.hand
                 + '<br>Available haptic actuators: ' + gp.hapticActuators.length
                 + '<br>Gamepad can return position info: ' + gp.pose.hasPosition
                 + '<br>Gamepad can return orientation info: ' + gp.pose.hasOrientation;
        list.appendChild(listItem);
    }
    initialRun = false;
}
```

This works in a similar manner to `reportDisplays()` — we get an array of {{domxref("Gamepad")}} objects using the non-promise-based `getGamepads()` method, then cycle through each one and print out information on each:

- The {{domxref("Gamepad.displayId")}} property is the same as the `displayId` of the headet the controller is associated with, and therefore useful for tying controller and headset information together.
- The {{domxref("Gamepad.index")}} property is unique numerical index that identifies each connected controller.
- {{domxref("Gamepad.hand")}} returns which hand the controller is expected to be held in.
- {{domxref("Gamepad.hapticActuators")}} returns an array of the haptic actuators available in the controller. Here we are returning its length so we can see how many each has available.
- Finally, we return {{domxref("GamepadPose.hasPosition")}} and {{domxref("GamepadPose.hasOrientation")}} to show whether the controller can return position and orientation data. This works just the same as for the displays, except that in the case of gamepads these values are available on the pose object, not the capabilities object.

Note that we also gave each list item containing controller information a class name of `gamepad`. We'll explain what this is for later.

The last thing to do here is set the `initialRun` variable to `false`, as the initial run is now over.

### コントローラーのイベント

To finish off this section, we'll look at the gamepad-associated events. There are two we need concern ourselves with — {{event("gamepadconnected")}} and {{event("gamepaddisconnected")}} — and it is fairly obvious what they do.

At the end of our example we first include the `removeGamepads()` function:

```js
function removeGamepads() {
    var gpLi = document.querySelectorAll('.gamepad');
    for(var i = 0; i < gpLi.length; i++) {
    list.removeChild(gpLi[i]);
    }

    reportGamepads();
}
```

This function simply grabs references to all list items with a class name of `gamepad`, and removes them from the DOM. Then it re-runs `reportGamepads()` to populate the list with the updated list of connected controllers.

`removeGamepads()` will be run each time a gamepad is connected or disconnected, via the following event handlers:

```js
window.addEventListener('gamepadconnected', function(e) {
  info.textContent = 'Gamepad ' + e.gamepad.index + ' connected.';
  if(!initialRun) {
      setTimeout(removeGamepads, 1000);
  }
});

window.addEventListener('gamepaddisconnected', function(e) {
  info.textContent = 'Gamepad ' + e.gamepad.index + ' disconnected.';
  setTimeout(removeGamepads, 1000);
});
```

We have `setTimeout()` calls in place here — like we did with the initialization code at the top of the script — to make sure that the gamepads are ready to report their information when `reportGamepads()` is called in each case.

But there's one more thing to note — you'll see that inside the `gamepadconnected` handler, the timeout is only run if `initialRun` is `false`. This is because if your gamepads are connected when the document first loads, `gamepadconnected` is fired once for each gamepad, therefore `removeGamepads()`/`reportGamepads()` will be run several times. This could lead to inaccurate results, therefore we only want to run `removeGamepads()` inside the `gamepadconnected` handler after the initial run, not during it. This is what `initialRun` is for.

## 実際のデモの紹介

実際の WebVR のデモで使用された Gamepad API を見てみましょう。このデモは[raw-webgl-controller-example](https://github.com/mdn/webvr-tests/tree/master/raw-webgl-controller-example) ([see it live here also](https://mdn.github.io/webvr-tests/raw-webgl-controller-example/)).で見ることができます。

私達の[raw-webgl-example](https://github.com/mdn/webvr-tests/tree/master/raw-webgl-example) (詳しくは [Using the WebVR API](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API) を御覧ください。)と同じ方法で、このデモにおいても回転する 3D 立方体をレンダリングしています。また、これを VR ディスプレイへ投影することもできます。

唯一の違いとしては、VR ディスプレイへ投影モードでは、VR コントローラーを使って立方体を動かすことができます。（オリジナルのデモ動画では、VR ヘッドセットを動かすことで、立方体を動かすことができる。）

以下に、このバージョンでのコードの違いをより詳しく紹介します。[webgl-demo.js](https://github.com/mdn/webvr-tests/blob/master/raw-webgl-controller-example/webgl-demo.js).を御覧ください。

### コントローラーデータへのアクセス

`drawVRScene()` 関数についてのコードの一部です。

```js
var gamepads = navigator.getGamepads();
var gp = gamepads[0];

if(gp) {
  var gpPose = gp.pose;
  var curPos = gpPose.position;
  var curOrient = gpPose.orientation;
  if(poseStatsDisplayed) {
    displayPoseStats(gpPose);
  }
}
```

{{domxref("Navigator.getGamepads")}}を利用して、コントローラーが接続されました。また `gp` 変数の中に最初に認識したコントローラーを保存します。 デモでは、コントローラーを一つしか使用しないので、その他のコントローラーは無視します。

The next thing we do is to get the {{domxref("GamepadPose")}} object for the controller stored in gpPose (by querying {{domxref("Gamepad.pose")}}), and also store the current gamepad position and orientation for this frame in variables so they are easuy to access later. We also display the post stats for this frame in the DOM using the `displayPoseStats()` function. All of this is only done if `gp` actually has a value (if a gamepad is connected), which stops the demo erroring if we don't have our gamepad connected.

Slightly later in the code, you can find this block:

```js
if(gp && gpPose.hasPosition) {
  mvTranslate([
                0.0 + (curPos[0] * 15) - (curOrient[1] * 15),
                0.0 + (curPos[1] * 15) + (curOrient[0] * 15),
                -15.0 + (curPos[2] * 25)
             ]);
} else if(gp) {
  mvTranslate([
                0.0 + (curOrient[1] * 15),
                0.0 + (curOrient[0] * 15),
                -15.0
             ]);
} else {
  mvTranslate([
                0.0,
                0.0,
                -15.0
             ]);
}
```

Here we alter the position of the cube on the screen according to the {{domxref("GamepadPose.position","position")}} and {{domxref("GamepadPose.orientation","orientation")}} data received from the connected controller. These values (stored in `curPos` and `curOrient`) are {{domxref("Float32Array")}}s containing the X, Y, and Z values (here we are just using \[0] which is X, and \[1] which is Y).

If the `gp` variable has a `Gamepad` object inside it and it can return position values (`gpPose.hasPosition`), indicating a 6DoF controller, we modify the cube position using position and orientation values. If only the former is true, indicating a 3DoF controller, we modify the cube position using the orientation values only. If there is no gamepad connected, we don't modify the cube position at all.

### コントローラーの姿勢データの表示

`displayPoseStats()` 関数では、{{domxref("GamepadPose")}} オブジェクトのうちの表示したいすべての情報を取得することができます。そして、そのようなデータを表示するためのデモの中に存在する UI パネルに表示します。

```js
function displayPoseStats(pose) {
  var pos = pose.position;
  var orient = pose.orientation;
  var linVel = pose.linearVelocity;
  var linAcc = pose.linearAcceleration;
  var angVel = pose.angularVelocity;
  var angAcc = pose.angularAcceleration;

  if(pose.hasPosition) {
    posStats.textContent = 'Position: x ' + pos[0].toFixed(3) + ', y ' + pos[1].toFixed(3) + ', z ' + pos[2].toFixed(3);
  } else {
    posStats.textContent = 'Position not reported';
  }

  if(pose.hasOrientation) {
    orientStats.textContent = 'Orientation: x ' + orient[0].toFixed(3) + ', y ' + orient[1].toFixed(3) + ', z ' + orient[2].toFixed(3);
  } else {
    orientStats.textContent = 'Orientation not reported';
  }

  linVelStats.textContent = 'Linear velocity: x ' + linVel[0].toFixed(3) + ', y ' + linVel[1].toFixed(3) + ', z ' + linVel[2].toFixed(3);
  angVelStats.textContent = 'Angular velocity: x ' + angVel[0].toFixed(3) + ', y ' + angVel[1].toFixed(3) + ', z ' + angVel[2].toFixed(3);

  if(linAcc) {
    linAccStats.textContent = 'Linear acceleration: x ' + linAcc[0].toFixed(3) + ', y ' + linAcc[1].toFixed(3) + ', z ' + linAcc[2].toFixed(3);
  } else {
    linAccStats.textContent = 'Linear acceleration not reported';
  }

  if(angAcc) {
    angAccStats.textContent = 'Angular acceleration: x ' + angAcc[0].toFixed(3) + ', y ' + angAcc[1].toFixed(3) + ', z ' + angAcc[2].toFixed(3);
  } else {
    angAccStats.textContent = 'Angular acceleration not reported';
  }
}
```

## まとめ

この記事は，WebVR アプリの中で VR コントローラーを使うためには，どのように Gamepad Extensions を用いればよいのかというとても基本的な概念を解説したものです．実際の WebVR アプリの中では，VR コントローラーのボタンに紐付けられたコントローラーにより，おそらくより複雑なコントロールシステムをもたせることになるでしょう． そして，ディスプレイとコントローラーの両方の情報（位置や方向）を同期的にディスプレイへフィードバックするという複雑な処理を行うことになります．しかし，この記事でやりたかったのは，Gamepad Extensions の中の純粋な Gamepad Extensions 部分を切り分けるということです．

## 関連項目

- [WebVR API](/ja/docs/Web/API/WebVR_API)
- [Gamepad API](/ja/docs/Web/API/Gamepad_API)
- [Using the WebVR API](/ja/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Implementing controls using the Gamepad API](/ja/docs/Games/Techniques/Controls_Gamepad_API)
