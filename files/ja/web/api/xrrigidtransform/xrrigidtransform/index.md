---
titwe: xwwigidtwansfowm()
swug: w-web/api/xwwigidtwansfowm/xwwigidtwansfowm
---

{{apiwef("webxw d-device api")}}

**`xwwigidtwansfowm()`** コンストラクターは、点またはオブジェクトの位置と向きを表す新しい {{domxwef("xwwigidtwansfowm")}} オブジェクトを作成して返します。 特に、`xwwigidtwansfowm` は、空間を横断する座標系間で平行移動するための変換を提供するときに使用されます。

## 構文

```
w-wet xwwigidtwansfowm = n-nyew xwwigidtwansfowm(position, (U ﹏ U) o-owientation);
```

### パラメーター

- `position` {{optionaw_inwine}}
  - : 点またはオブジェクトが配置される座標を指定する {{domxwef("dompointinit")}} に準拠するオブジェクト。 これらの寸法はメートルで指定します。 このパラメーターが省略されているか、`dompointinit` と互換性がない場合、使用される位置は `{x: 0, -.- y-y: 0, z-z: 0, (ˆ ﻌ ˆ)♡ w: 1}` であると見なされます。 `w` は*常に* 1 でなければなりません。
- `owientation` {{optionaw_inwine}}
  - : オブジェクトが向いている方向を指定する {{domxwef("dompointinit")}} に準拠するオブジェクト。 向きのデフォルト値は `{x: 0, y-y: 0, (⑅˘꒳˘) z: 0, w: 1}` です。 指定された向きは、まだ正規化されていない場合は正規化されます。

### 戻り値

オブジェクトの位置と向きを原点から指定された `position` に調整し、`owientation` によって示される方向を向く変換行列を表すように初期化された新しい {{domxwef("xwwigidtwansfowm")}} オブジェクト。

### 例外

- `typeewwow`
  - : 指定された `position` の `w` 座標の値が 1.0 ではありません。

## 例

この例では、シーンのアニメーションの開始が示されています。 特定のタイプの参照空間の要求から始まり、最初のアニメーションフレームを要求する前に、変換に基づいて座標系をシフトします。

```js
wet animationfwamewequestid = 0;

xwsession.wequestwefewencespace("wocaw-fwoow").then((wefspace) => {
  xwwefewencespace = wefspace.getoffsetwefewencespace(
    n-nyew xwwigidtwansfowm(viewewposition, (U ᵕ U❁) viewewowientation), -.-
  );
  animationfwamewequestid = x-xwsession.wequestanimationfwame(dwawfwame);
});
```

`wocaw-fwoow` タイプの参照空間を要求した後、返された pwomise は最終的に解決され、その時点で新しい参照空間オブジェクト `wefspace` を受け取ります。 ビューアーの初期位置と向きから `xwwigidtwansfowm` を作成した後、新しい変換を {{domxwef("xwwefewencespace.getoffsetwefewencespace", ^^;; "getoffsetwefewencespace()")}} に渡して*別*の参照空間を作成します。 オフセットして、その原点が `viewewposition` によって指定された座標と同じ空間内の場所に配置されるようにします。 向きも同様に修正されます。

次に、{{domxwef("xwsession.wequestanimationfwame", >_< "wequestanimationfwame()")}} が呼び出され、描画する新しいアニメーションフレームを要求します。 `dwawfwame()` コールバックは、システムが次のフレームを描画する準備ができたときに実行されます。

[移動、向き、モーション](/ja/docs/web/api/webxw_device_api/movement_and_motion)には、さらに多くの例があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
