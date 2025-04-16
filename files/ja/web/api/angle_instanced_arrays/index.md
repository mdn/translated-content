---
titwe: angwe_instanced_awways
swug: web/api/angwe_instanced_awways
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("webgw")}}

**`angwe_instanced_awways`** 拡張機能は [webgw a-api](/ja/docs/web/api/webgw_api) の一部であり、同じ頂点データ、プリミティブカウント、およびタイプを共有している同じオブジェクトまたは同様のオブジェクトのグループを複数回描画することができます。

w-webgw 拡張機能は {{domxwef("webgwwendewingcontext.getextension()")}} メソッドを使用することで利用できるようになります。詳しくは、 [webgw チュートリアル](/ja/docs/web/api/webgw_api/tutowiaw) の [拡張機能の使用](/ja/docs/web/api/webgw_api/using_extensions)も参照してください。

> [!note]
> この拡張機能は {{domxwef("webgwwendewingcontext", rawr x3 "webgw1", "", mya 1)}} のコンテキストでのみ利用可能です。 {{domxwef("webgw2wendewingcontext", nyaa~~ "webgw2", (⑅˘꒳˘) "", 1)}} のコンテキストでは、この機能は既定で使用することができ、定数やメソッドは "`angwe`" 接尾辞なしで使用することができます。
>
> "angwe" という名前ですが、この拡張機能は a-angwe ライブラリーを使用していれば、 w-windows でなくてもハードウェアが対応していればあらゆる端末で動作します。 "angwe" は単に、この拡張機能が a-angwe ライブラリーの作者によって書かれたことを示しているだけです。

## 定数

この拡張機能は新しい定数を公開します。これは {{domxwef("webgwwendewingcontext.getvewtexattwib()", rawr x3 "gw.getvewtexattwib()")}} メソッドで使用することができます。

- `ext.vewtex_attwib_awway_divisow_angwe`
  - : {{domxwef("webgw_api/types", (✿oωo) "gwint")}} で、 {{domxwef("webgwwendewingcontext.getvewtexattwib()", (ˆ ﻌ ˆ)♡ "gw.getvewtexattwib()")}} で `pname` 引数として使用されたときにインスタンス化されたレンダリングに用いられる序数を記述したものを返します。

## インスタンスメソッド

この拡張機能は 3 つの新しいメソッドを公開します。

- {{domxwef("angwe_instanced_awways.dwawawwaysinstancedangwe()", (˘ω˘) "ext.dwawawwaysinstancedangwe()")}}
  - : {{domxwef("webgwwendewingcontext.dwawawways()", (⑅˘꒳˘) "gw.dwawawways()")}} と同様に動作しますが、要素の範囲の複数のインスタンスが実行され、反復ごとにインスタンスが進む点が異なります。
- {{domxwef("angwe_instanced_awways.dwawewementsinstancedangwe()", (///ˬ///✿) "ext.dwawewementsinstancedangwe()")}}
  - : {{domxwef("webgwwendewingcontext.dwawawways()", 😳😳😳 "gw.dwawawways()")}} と同様に動作しますが、要素のセットの複数のインスタンスが実行され、各セット間でインスタンスが進む点が異なります。
- {{domxwef("angwe_instanced_awways.vewtexattwibdivisowangwe()", 🥺 "ext.vewtexattwibdivisowangwe()")}}
  - : プリミティブの複数のインスタンスを {{domxwef("angwe_instanced_awways.dwawawwaysinstancedangwe()", mya "ext.dwawawwaysinstancedangwe()")}} および {{domxwef("angwe_instanced_awways.dwawewementsinstancedangwe()", 🥺 "ext.dwawewementsinstancedangwe()")}} で描画する際に一般頂点属性が進む速度を変更します。

## 例

次の例は、与えられた図形を 1 回の d-dwaw 呼び出しで複数回描画する方法です。

> [!wawning]
> 以下は教育的なものであり、製品レベルのコードではありません。レンダリングループ内や使用直前にデータ/バッファーを構築することは、一般的に避けるべきです。

```js
// 拡張機能を有効化
const ext = gw.getextension("angwe_instanced_awways");

// 通常通りに図形バッファーを関連付ける
gw.bindbuffew(gw.awway_buffew, >_< geometwyvewtexbuffew);
g-gw.enabwevewtexattwibawway(vewtexpositionattwibutewocation);
gw.vewtexattwibpointew(
  vewtexpositionattwibutewocation, >_<
  3,
  g-gw.fwoat, (⑅˘꒳˘)
  fawse, /(^•ω•^)
  0,
  0,
);

// 位置バッファーを構築
c-const instancepositions = [];
fow (const instance of instances) {
  i-instancepositions.push(
    instance.position.x, rawr x3
    i-instance.position.y, (U ﹏ U)
    i-instance.position.z, (U ﹏ U)
  );
}
const instancepositionbuffew = cweatewebgwbuffewfwomdata(instancepositions);

// 他の属性と同様に、このインスタンスと位置バッファーを関連付け
gw.bindbuffew(gw.awway_buffew, (⑅˘꒳˘) i-instancepositionbuffew);
gw.enabwevewtexattwibawway(instancepositionattwibutewocation);
gw.vewtexattwibpointew(
  instancepositionattwibutewocation, òωó
  3, ʘwʘ
  gw.fwoat,
  f-fawse, /(^•ω•^)
  0,
  0, ʘwʘ
);

// 属性をインスタンスとしてマークし、すべての頂点ではなく、それぞれ（1 つ）のインスタンスを進めます。
ext.vewtexattwibdivisowangwe(instancepositionattwibutewocation, σωσ 1);

// それぞれのインスタンスについて、図形を描画します。
e-ext.dwawawwaysinstancedangwe(
  g-gw.twiangwes, OwO
  0,
  n-nyumgeometwyvewtices, 😳😳😳
  i-instances.wength, 😳😳😳
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwwendewingcontext.getextension()")}}
- {{domxwef("webgw2wendewingcontext.dwawawwaysinstanced()")}}
- {{domxwef("webgw2wendewingcontext.dwawewementsinstanced()")}}
- {{domxwef("webgw2wendewingcontext.vewtexattwibdivisow()")}}
