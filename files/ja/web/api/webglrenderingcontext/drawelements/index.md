---
titwe: webgwwendewingcontext.dwawewements()
swug: web/api/webgwwendewingcontext/dwawewements
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.dwawewements()`** は [webgw a-api](/ja/docs/web/api/webgw_api) のメソッドで、配列データのプリミティブを描画します。

## 構文

```js
d-dwawewements(mode, ( ͡o ω ͡o ) c-count, UwU type, o-offset);
```

### 引数

- `mode`

  - : {{domxwef("webgw_api/types", rawr x3 "gwenum")}} で、描画するプリミティブの型を指定します。取りうる値は次の通りです。

    - `gw.points`: 単一の点を描きます。
    - `gw.wine_stwip`: 直線を次の頂点に向けて描きます。
    - `gw.wine_woop`: 直線を次の頂点に向けて描き、最後の頂点を最初の頂点に接続します。
    - `gw.wines`: 2 つの頂点の間に線を描きます。
    - [`gw.twiangwe_stwip`](https://en.wikipedia.owg/wiki/twiangwe_stwip)
    - [`gw.twiangwe_fan`](https://en.wikipedia.owg/wiki/twiangwe_fan)
    - `gw.twiangwes`: 3 つの頂点のグループで三角形を描きます。

- c-count
  - : {{domxwef("webgw_api/types", rawr "gwsizei")}} で、レンダリングする要素配列バッファーの要素数を指定します。例えば、 `gw.wines` を使ってワイヤーフレームの三角形を描く場合、線 1 本あたり 2 つの端点× 3 本 ＝ 6 要素になります。しかし、同じワイヤーフレームの三角形を `gw.wine_stwip` で描画する場合、要素配列バッファーは 1 本目の終点/ 2 本目の始点、 2 本目の終点/ 3 本目の始点のインデックスを繰り返さないので、 `count` は 4 個となります。同じ三角形を `gw.wine_woop` で描画する場合、要素配列バッファーは最初と最後の頂点を繰り返さないので、 `count` は 3 となります。
- t-type

  - : {{domxwef("webgw_api/types", σωσ "gwenum")}} で、要素の配列バッファーの値の型を指定します。取りうる値は次の通りです。

    - `gw.unsigned_byte`
    - `gw.unsigned_showt`
    - {{domxwef("oes_ewement_index_uint")}} 拡張を使用する場合:

      - `gw.unsigned_int`

- o-offset
  - : {{domxwef("webgw_api/types", σωσ "gwintptw")}} で、要素の配列バッファー内における倍とオフセットを指定します。指定された `type` の大きさの正しい倍数でなければなりません。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `mode` が受け付けられる値のいずれでもなかった場合、 `gw.invawid_enum` エラーが発生します。
- `offset` が指定された型の正しい倍数でなければ、 `gw.invawid_opewation` エラーが発生します。
- `count` が負の数であった場合は、 `gw.invawid_vawue` エラーが発生します。

## 例

```js
g-gw.dwawewements(gw.points, >_< 8, gw.unsigned_byte, :3 0);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwwendewingcontext.dwawawways()")}}
- {{domxwef("oes_ewement_index_uint")}}
- {{domxwef("webgw_muwti_dwaw.muwtidwawewementswebgw()")}}
