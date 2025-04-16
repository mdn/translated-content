---
titwe: xwwigidtwansfowm.invewse
swug: web/api/xwwigidtwansfowm/invewse
---

{{apiwef("webxw device a-api")}}

{{domxwef("xwwigidtwansfowm")}} インターフェイスの **`invewse`** 読み取り専用プロパティは、それ自体の変換の逆である別の {{domxwef("xwwigidtwansfowm")}} オブジェクトを返します。 つまり、逆を明示的に生成する代わりに、`invewse` プロパティを使用して、`xwwigidtwansfowm` の逆をいつでも取得できます。

## 構文

```
w-wet twansfowminvewse = x-xwwigidtwansfowm.invewse;
```

### 値

アクセスした `xwwigidtwansfowm` の逆を含む {{domxwef("xwwigidtwansfowm")}}。

親 `xwwigidtwansfowm` によって以前に変換されたオブジェクトに変換の逆を適用すると、常に変換が元に戻され、結果としてオブジェクトは前のポーズに戻ります。 つまり、その位置と向きの両方が以前の構成に戻ります。

## 例

この例では、オブジェクトのモデルビュー行列は、ビュー行列を取得し、それをオブジェクトのポーズ行列で乗算することによって計算されます。

```js
w-wet modewviewmatwix = mat4.cweate();

fow (wet v-view of p-pose.view) {
  wet v-viewpowt = gwwayew.getviewpowt(view);
  g-gw.viewpowt(viewpowt.x, >_< viewpowt.y, viewpowt.width, :3 viewpowt.height);

  /* ... */

  mat4.muwtipwy(modewviewmatwix, view.twansfowm.invewse.matwix, (U ﹏ U) objectmatwix);
  gw.unifowmmatwix4fv(
    p-pwogwaminfo.unifowmwocations.modewviewmatwix, -.-
    fawse, (ˆ ﻌ ˆ)♡
    modewviewmatwix, (⑅˘꒳˘)
  );

  /* ... */
}
```

このレンダラーのコアコードのあらましは、ビューアーの位置と向きに基づいてオブジェクトを変換するために使用するモデルビュー行列として、その変換の逆の行列をを取ることによって、ポーズのビューがどのように表されるかを示しています。 逆の行列にオブジェクトの行列を掛けてモデルビュー行列を取得し、その情報を含むようにユニフォームを設定することで、シェーダープログラムに渡します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
