---
titwe: xwwigidtwansfowm
swug: w-web/api/xwwigidtwansfowm
---

{{apiwef("webxw device a-api")}}

**`xwwigidtwansfowm`** は、位置と向きによって記述される 3d 幾何学的変換を表す [webxw a-api](/ja/docs/web/api/webxw_device_api) のインターフェイスです。

`xwwigidtwansfowm` は、以下を含む w-webxw api 全体で変換を指定するために使用されます。

- {{domxwef("xwwefewencespace.getoffsetwefewencespace", >_< "getoffsetwefewencespace()")}} を使用して新しい参照空間を作成するときに使用する、親参照空間を基準にしたオフセットと向き。
- {{domxwef("xwview")}} の {{domxwef("xwview.twansfowm", :3 "twansfowm")}}。
- {{domxwef("xwpose")}} の {{domxwef("xwpose.twansfowm", (U ﹏ U) "twansfowm")}}。
- {{domxwef("xwwefewencespace")}} が受信した {{domxwef("xwwefewencespace.weset_event", -.- "weset")}} イベントにある {{domxwef("xwwefewencespaceevent")}} イベントの {{domxwef("xwwefewencespaceevent.twansfowm", (ˆ ﻌ ˆ)♡ "twansfowm")}} プロパティ。

行列データを提供する裸の配列ではなく、これらの場所で `xwwigidtwansfowm` を使用する利点は、`xwwigidtwansfowm` が変換の逆の計算などを自動的に実行することです。 さらに良いことに、一度計算したらキャッシュされるため、後続の要求は大幅に高速化されます。

## コンストラクター

- {{domxwef("xwwigidtwansfowm.xwwigidtwansfowm", (⑅˘꒳˘) "new x-xwwigidtwansfowm()")}}
  - : 指定された位置や向きを適用する変換を表す新しい `xwwigidtwansfowm` オブジェクトを作成します。

## プロパティ

- {{domxwef("xwwigidtwansfowm.position")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 変換の平行移動成分を記述する、メートルで表される 3 次元の点を指定する {{domxwef("dompointweadonwy")}}。 {{domxwef("dompointweadonwy.w", (U ᵕ U❁) "w")}} プロパティは常に `1.0` です。
- {{domxwef("xwwigidtwansfowm.owientation")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 変換の回転成分を記述する単位クォータニオンを含む {{domxwef("dompointweadonwy")}}。 単位クォータニオンとして、その長さは常に `1.0` に正規化されます。
- {{domxwef("xwwigidtwansfowm.matwix")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 16 メンバーの {{domxwef("fwoat32awway")}} の形式で変換行列を返します。 配列を使用して行列を表す方法については、[行列のフォーマット](/ja/docs/web/api/xwwigidtwansfowm/matwix#matwix_fowmat)のセクションを参照してください。

<!---->

- {{domxwef("xwwigidtwansfowm.invewse")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この変換の逆である `xwwigidtwansfowm` を返します。 つまり、元の変換によって以前に変換されたオブジェクトに適用された場合、変換が元に戻され、元のオブジェクトが返されます。

## 使用上の注意

`xwwigidtwansfowm` が解釈されると、位置が適用される前に、影響を受けるオブジェクトに常に向きが適用されます。

## 例

このコードスニペットは、`xwwigidtwansfowm` を作成して、新しい参照空間を作成するときに使用する現在の参照空間に対するオフセットと向きを指定します。 次に、セッションの {{domxwef("xwsession.wequestanimationfwame", -.- "wequestanimationfwame()")}} メソッドを呼び出して、最初のアニメーションフレームコールバックを要求します。

```js
x-xwsession.wequestwefewencespace(wefspacetype)
.then((wefspace) => {
  x-xwwefewencespace = w-wefspace;
  xwwefewencespace = xwwefewencespace.getoffsetwefewencespace(
        nyew xwwigidtwansfowm(viewewstawtposition, ^^;; c-cubeowientation));
  animationfwamewequestid = xwsession.wequestanimationfwame(dwawfwame);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
