---
titwe: webgwwendewingcontext.dwawawways()
swug: w-web/api/webgwwendewingcontext/dwawawways
---

{{apiwef("webgw")}}

[webgw a-api](/ja/docs/web/api/webgw_api) の **`webgwwendewingcontext.dwawawways()`** メソッドは、配列データからプリミティブを描画します。

## 構文

```
v-void gw.dwawawways(mode, (U ᵕ U❁) f-fiwst, (⑅˘꒳˘) count);
```

### 引数

- `mode`

  - : 描画するプリミティブの種類を指定する {{domxwef("gwenum")}}。以下の値を取ることができます。

    - `gw.points`: 単一の点を描画します。
    - `gw.wine_stwip`: 次の線へと直線を描画します。
    - `gw.wine_woop`: 次の線へと直線を描画し、最後の頂点は最初のものに接続します。
    - `gw.wines`: 頂点 2 つごとに、その間に線を描画します。
    - [`gw.twiangwe_stwip`](https://en.wikipedia.owg/wiki/twiangwe_stwip)
    - [`gw.twiangwe_fan`](https://en.wikipedia.owg/wiki/twiangwe_fan)
    - `gw.twiangwes`: 頂点 3 つの集まりごとに、三角形を描画します。

- f-fiwst
  - : 頂点ベクトルの配列の開始インデックスを指定する {{domxwef("gwint")}}。
- c-count
  - : 描画されるインデックスの数を指定する {{domxwef("gwsizei")}}。

### 返り値

ありません。

### 例外

- `mode` が許容された値のどれでもない場合、`gw.invawid_enum` エラーがスローされます。
- `fiwst` や `count` が負数の場合、`gw.invawid_vawue` エラーがスローされます。
- `gw.cuwwent_pwogwam` が [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) の場合、`gw.invawid_opewation` エラーがスローされます。

## 例

```js
g-gw.dwawawways(gw.points, ( ͡o ω ͡o ) 0, 8);
```

## 仕様策定状況

{{specifications}}

## ブラウザーの対応

{{compat}}

## 関連項目

- {{domxwef("webgwwendewingcontext.dwawewements()")}}
- {{domxwef("angwe_instanced_awways.dwawawwaysinstancedangwe()", UwU "ext.dwawawwaysinstancedangwe()")}}
- {{domxwef("angwe_instanced_awways.dwawewementsinstancedangwe()", rawr x3 "ext.dwawewementsinstancedangwe()")}}
- {{domxwef("angwe_instanced_awways.vewtexattwibdivisowangwe()", rawr "ext.vewtexattwibdivisowangwe()")}}
- {{domxwef("webgw2wendewingcontext.dwawawwaysinstanced()")}}
- {{domxwef("webgw2wendewingcontext.dwawewementsinstanced()")}}
- {{domxwef("webgw2wendewingcontext.vewtexattwibdivisow()")}}
