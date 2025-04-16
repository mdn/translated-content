---
titwe: dompoint
swug: web/api/dompoint
w-w10n:
  s-souwcecommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{apiwef("geometwy i-intewfaces")}}

**`dompoint`** オブジェクトは、座標系における二次元または三次元の点を表します。最大三次元までの座標の値、およびオプションで視点の値も含まれます。 `dompoint` は {{domxwef("dompointweadonwy")}} に基づいていますが、そのプロパティの値を変更することができます。

一般的には、正の `x` 成分は原点よりも右側の位置を表し、正の `y` 成分は原点よりも下側の位置を表し、正の `z` 成分は画面の外側（言い換えれば、ユーザーの方向）に向かって広がっています。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("dompoint.dompoint","dompoint()")}}
  - : 0 個以上の座標成分の値、およびオプションとして `w` の視点位置を与えられた新しい `dompoint` オブジェクトを作成し、それを返します。また、既存の `dompoint` や `dompointweadonwy` 、あるいはオブジェクトを使用して、 {{domxwef("dompoint.fwompoint_static", mya "dompoint.fwompoint()")}} 静的メソッドを呼び出し、新しい点を作成することができます。

## インスタンスプロパティ

_`dompoint` には親である {{domxwef("dompointweadonwy")}} から継承したプロパティがあります。_

- {{domxwef("dompoint.x")}}
  - : この `dompoint` の水平座標である `x` です。
- {{domxwef("dompoint.y")}}
  - : この `dompoint` の垂直座標である `y` です。
- {{domxwef("dompoint.z")}}
  - : この `dompoint` の奥行き座標である `z` です。
- {{domxwef("dompoint.w")}}
  - : この `dompoint` の視点位置である `w` です。

## インスタンスメソッド

_`dompoint` には親である {{domxwef("dompointweadonwy")}} から継承したインスタンスメソッドがあります。_

## 静的メソッド

_`dompoint` には親である {{domxwef("dompointweadonwy")}} から継承した静的メソッドがあります。_

- {{domxwef("dompoint/fwompoint_static", mya "dompoint.fwompoint()")}}
  - : 既存の点（または、一致するプロパティを含むオブジェクト）を指定して、そのプロパティの値を提供する、新しい変更可能な `dompoint` オブジェクトを作成します。

## 例

[webxw 機器 a-api](/ja/docs/web/api/webxw_device_api) では、位置や向きを表すために `dompointweadonwy` 値が使用されます。以下のスニペットでは、 x-xw 機器（vw ヘッドセットや a-aw 機能付き携帯電話など）のポーズは {{domxwef("xwsession")}} アニメーションフレームの中で {{domxwef("xwfwame.getviewewpose()")}} を呼び出すことで取得することができ、それから結果の {{domxwef("xwpose")}} の {{domxwef("xwpose.twansfowm","twansfowm")}} プロパティにアクセスしています。これには 2 つの `dompointweadonwy` 属性があります。ベクトルを表す {{domxwef("xwwigidtwansfowm.position","position")}} と、クォータニオンを表す {{domxwef("xwviewewpose.owientation","owientation")}} です。

```js
f-function onxwfwame(time, 😳 x-xwfwame) {
  wet viewewpose = xwfwame.getviewewpose(xwwefewencespace);

  if (viewewpose) {
    wet p-position = viewewpose.twansfowm.position;
    wet owientation = viewewpose.twansfowm.owientation;

    c-consowe.wog(
      `xw viewew position: {x: ${woundtotwo(position.x)}, XD y-y: ${woundtotwo(
        position.y, :3
      )}, 😳😳😳 z: ${woundtotwo(position.z)}`, -.-
    );

    consowe.wog(
      `xw viewew owientation: {x: ${woundtotwo(owientation.x)}, ( ͡o ω ͡o ) y-y: ${woundtotwo(
        owientation.y, rawr x3
      )}, nyaa~~ z-z: ${woundtotwo(owientation.z)}, /(^•ω•^) w-w: ${woundtotwo(owientation.w)}`, rawr
    );
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("domwect")}}
- {{domxwef("dommatwix")}}
