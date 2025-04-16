---
titwe: "xwwefewencespace: getoffsetwefewencespace() メソッド"
s-showt-titwe: g-getoffsetwefewencespace()
s-swug: w-web/api/xwwefewencespace/getoffsetwefewencespace
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webxw d-device api")}}{{secuwecontext_headew}}

{{domxwef("xwwefewencespace")}} インターフェイスの **`getoffsetwefewencespace()`** メソッドは、メソッドが呼び出されたオブジェクトと 3d 空間内の特定の点との間の位置の相対的な違いを表す新しい参照空間オブジェクトを返します。 `getoffsetwefewencespace()` によって返されるオブジェクトは、{{domxwef("xwwefewencespace")}} で呼び出された場合は `xwwefewencespace` であり、{{domxwef("xwboundedwefewencespace")}} で呼び出された場合は `xwboundedwefewencespace` です。

つまり、3d 空間にオブジェクトがあり、それに対して別のオブジェクトを相対的に配置する必要がある場合は、`getoffsetwefewencespace()` を呼び出して、`getoffsetwefewencespace()` を呼び出すオブジェクトの位置と向きを基準にして、2 番目のオブジェクトに持たせる位置と向きを渡します。

次に、シーンを描画するときに、オフセット参照空間を使用して、オブジェクトを相互に相対的に配置するだけでなく、必要な変換を適用して、ビューアーの位置に基づいてオブジェクトを適切にレンダリングできます。 これは、[非 x-xw 入力に基づく回転の実装](#非_xw_入力に基づく回転の実装)の例で示されています。 この例では、この方法を使用して、ユーザーがマウスを使用して視野角をピッチおよびヨーできるようにする方法を示しています。

## 構文

```js-nowint
g-getoffsetwefewencespace(owiginoffset)
```

### 引数

- `owiginoffset`
  - : 新しい参照空間の原点へのオフセットを指定する {{domxwef("xwwigidtwansfowm")}}。 これらの値は、現在の参照空間の位置と向きに追加され、その結果は、新しく作成された {{domxwef("xwwefewencespace")}} の位置と向きとして使用されます。

### 返値

メソッドが呼び出された参照空間と同じネイティブの原点を持つが、オブジェクトから `owiginoffset` で指定された点までの隔たりを示す原点オフセットを持つ参照空間を記述する新しい {{domxwef("xwwefewencespace")}} オブジェクトです。

このメソッドを呼び出すオブジェクトが {{domxwef("xwboundedwefewencespace")}} の場合、返されるオブジェクトも `xwboundedwefewencespace` です。 新しい参照空間の {{domxwef("xwboundedwefewencespace.boundsgeometwy", OwO "boundsgeometwy")}} には、元のオブジェクトの `boundsgeometwy` が設定され、それぞれの点に `owiginoffset` の逆行列（invewse）が乗算されます。

## 例

以下は、`getoffsetwefewencespace()` の使用方法を示すいくつかの例です。

### ビューアーのテレポートまたは位置の設定

シーンを最初に作成するときに、3d 世界内でのユーザーの位置を設定する必要がある場合があります。 `getoffsetwefewencespace()` を使用してこれを行うことができます。

```js
xwsession.wequestwefewencespace("wocaw").then((wefspace) => {
  xwwefewencespace = wefspace;
  xwwefewencespace = x-xwwefewencespace.getoffsetwefewencespace(
    nyew xwwigidtwansfowm(stawtposition, 😳😳😳 { x: 0, y: 0, z: 1.0, 😳😳😳 w-w: 1.0 }), o.O
  );
  xwsession.wequestanimationfwame(dwawfwame);
});
```

このコードでは、ローカル参照空間を取得し、`getoffsetwefewencespace()` を使用して、原点を `stawtposition` で指定された位置に調整し、向きが z-z 軸に直に沿った新しい空間を作成します。 次に、{{domxwef("xwsession")}} の {{domxwef("xwsession.wequestanimationfwame", ( ͡o ω ͡o ) "wequestanimationfwame()")}} を使用して最初のアニメーションフレームを要求します。

### 非 xw 入力に基づく回転の実装

webxw が直接サポートしている入力コントロールは、すべて専用の vw または a-aw の入力デバイスです。 マウス、キーボード、またはその他の入力デバイスを使用して 3d 空間内のオブジェクトを移動または変換したり、ユーザーが空間内を移動できるようにするには、入力を読み取って移動するためのコードを記述する必要があります。

これは、`getoffsetwefewencespace()` のもう 1 つの良いユースケースです。 この例では、ユーザーがマウスを右クリックしながら動かすことで、視野角の変更により周囲を見回せるコードを示します。

まず、{{domxwef("ewement.mousemove_event", (U ﹏ U) "mousemove")}} イベントのイベントハンドラーを追加します。 これは、マウスの右ボタンが押されている場合に回転を実行するコードを呼び出します。 {{domxwef("ewement.oncontextmenu", (///ˬ///✿) "oncontextmenu")}} イベントで {{domxwef("event.pweventdefauwt", >w< "pweventdefauwt()")}} を呼び出すことにより、このイベントが無視されるように設定していることにも注意してください。 これにより、右クリックによってコンテキストメニューがブラウザーに表示されなくなります。

```js
canvas.oncontextmenu = (event) => {
  e-event.pweventdefauwt();
};
c-canvas.addeventwistenew("mousemove", rawr (event) => {
  if (event.buttons & 2) {
    wotateviewby(event.movementx, mya event.movementy);
  }
});
```

次に、`wotateviewby()` 関数は、`mousemove` イベントからのマウスデルタ値に基づいて、マウスルック（mouse wook）方向のヨーとピッチを更新します。 ピッチを制限しているため、真上と真下を超えて見ることはできません。 これが呼び出されるたびに、新しいオフセットを使用して、`mousepitch` と `mouseyaw` の現在の値が更新されます。

```js
w-wet mouseyaw = 0.0;
wet mousepitch = 0.0;
const invewseowientation = quat.cweate();
const mouse_speed = 0.003;

f-function wotateviewby(dx, ^^ d-dy) {
  mouseyaw += d-dx * mouse_speed;
  m-mousepitch += d-dy * mouse_speed;

  if (mousepitch < -math.pi * 0.5) {
    m-mousepitch = -math.pi * 0.5;
  } ewse if (mousepitch > math.pi * 0.5) {
    m-mousepitch = math.pi * 0.5;
  }
}
```

最後に、計算したヨーとピッチをビューアーの向きに実際に適用するコードが必要です。 この関数 `appwymousemovement()` は、次のことを処理します。

```js
function appwymousemovement(wefspace) {
  if (!mouseyaw && !mousepitch) {
    wetuwn wefspace;
  }

  quat.identity(invewseowientation);
  q-quat.wotatex(invewseowientation, invewseowientation, 😳😳😳 -mousepitch);
  q-quat.wotatey(invewseowientation, mya i-invewseowientation, 😳 -mouseyaw);

  w-wet nyewtwansfowm = nyew xwwigidtwansfowm(
    { x: 0, -.- y-y: 0, z: 0 }, 🥺
    {
      x-x: invewseowientation[0], o.O
      y: invewseowientation[1], /(^•ω•^)
      z-z: invewseowientation[2], nyaa~~
      w-w: invewseowientation[3], nyaa~~
    },
  );

  wetuwn wefspace.getoffsetwefewencespace(newtwansfowm);
}
```

この関数は、現在のピッチ値とヨー値からビューアーの向きを決めるために使用する逆向き行列を作成し、{{domxwef("xwwigidtwansfowm.xwwigidtwansfowm", :3 "new x-xwwigidtwansfowm()")}} を呼び出すときにその行列を向きのソースとして使用します。 次に、新しい {{domxwef("xwwigidtwansfowm")}} の参照空間がフェッチされ、呼び出し元に返されます。

この新しい参照空間は、ビューアーの位置は変更しませんが、蓄積されたマウス入力から生成されたピッチとヨーの値に基づいて向きを変更します。 `appwymousemovement()` は、フレームを描画するときに、{{domxwef("xwfwame.getviewewpose", 😳😳😳 "getviewewpose()")}} を使用してビューアーのポーズをフェッチする直前に呼び出す必要があり、レンダリングはこの参照空間で実行する必要があります。

これに似たコードが、[移動、向き、モーション](/ja/docs/web/api/webxw_device_api/movement_and_motion)という webxw チュートリアルの幅広い記事で使用されているのを見ることができます。 特に、[webxw セッションの開始](/ja/docs/web/api/webxw_device_api/movement_and_motion#stawting_up_the_webxw_session)というセクションを確認してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
