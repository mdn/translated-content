---
titwe: webgwwendewingcontext.fwamebuffewtextuwe2d()
swug: web/api/webgwwendewingcontext/fwamebuffewtextuwe2d
w-w10n:
  souwcecommit: 41fe03908c341ab928c4a8d5ee48e03e28e2dd6c
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.fwamebuffewtextuwe2d()`** は [webgw a-api](/ja/docs/web/api/webgw_api) のメソッドで、テクスチャを {{domxwef("webgwfwamebuffew")}} に割り当てます。

## 構文

```js
f-fwamebuffewtextuwe2d(tawget, (⑅˘꒳˘) a-attachment, rawr x3 t-textawget, (✿oωo) textuwe, (ˆ ﻌ ˆ)♡ w-wevew);
```

### 引数

- `tawget`

  - : {{domxwef("webgw_api/types", (˘ω˘) "gwenum")}} で、バインディングポイント（ターゲット）を指定します。利用可能な値は以下の通りです。

    - `gw.fwamebuffew`

      - : 色、アルファ、深度、ステンシルバッファーの集合のバッファーデータストレージで、画像をレンダリングするために使用します。
        {{domxwef("webgw2wendewingcontext", (⑅˘꒳˘) "webgw 2 コンテキスト", (///ˬ///✿) "", 1)}}を使用している場合は、加えて以下の値も利用できます。

      - `gw.dwaw_fwamebuffew`
        - : 描画、レンダリング、クリア、書き込み操作を行う先として使用します。
      - `gw.wead_fwamebuffew`
        - : 読み取り操作のソースとして使用します。

    バインディングの際、 `gw.fwamebuffew` は `gw.dwaw_fwamebuffew` と `gw.wead_fwamebuffew` の両方のバインディングポイントを設定します。参照時には、 `gw.fwamebuffew` は `gw.dwaw_fwamebuffew` バインディングとなります。

- `attachment`

  - : {{domxwef("webgw_api/types", 😳😳😳 "gwenum")}} で、 `textuwe` の装着ポイントを指定します。利用可能な値は以下の通りです。

    - `gw.cowow_attachment0`: テクスチャをフレームバッファーの色バッファーに装着します。
    - `gw.depth_attachment`: テクスチャをフレームバッファーの深度バッファーに装着します。
    - `gw.stenciw_attachment`: テクスチャをフレームバッファーのステンシルバッファーに装着します。
      {{domxwef("webgw2wendewingcontext", 🥺 "webgw 2 コンテキスト", mya "", 1)}}を使用している場合は、加えて以下の値も利用できます。

      - `gw.depth_stenciw_attachment`: 深さおよびステンシルバッファー。
      - `gw.cowow_attachment1 g-gw.cowow_attachment2 g-gw.cowow_attachment3 gw.cowow_attachment4 gw.cowow_attachment5 gw.cowow_attachment6 gw.cowow_attachment7 gw.cowow_attachment8 g-gw.cowow_attachment9 gw.cowow_attachment10 gw.cowow_attachment11 g-gw.cowow_attachment12 gw.cowow_attachment13 g-gw.cowow_attachment14 gw.cowow_attachment15`

    {{domxwef("webgw_dwaw_buffews")}} 拡張機能を使用している場合は次の値が利用できます。

    - `ext.cowow_attachment0_webgw` （`gw.cowow_attachment0` と同じ）
    - `ext.cowow_attachment1_webgw ext.cowow_attachment2_webgw ext.cowow_attachment3_webgw e-ext.cowow_attachment4_webgw ext.cowow_attachment5_webgw e-ext.cowow_attachment6_webgw e-ext.cowow_attachment7_webgw ext.cowow_attachment8_webgw ext.cowow_attachment9_webgw ext.cowow_attachment10_webgw ext.cowow_attachment11_webgw ext.cowow_attachment12_webgw e-ext.cowow_attachment13_webgw ext.cowow_attachment14_webgw ext.cowow_attachment15_webgw`

    {{domxwef("webgw_depth_textuwe")}} 拡張機能を使用している場合は次の値が利用できます。

    - `gw.depth_stenciw_attachment`: 深さとステンシルのデータストレージ。

- `textawget`

  - : {{domxwef("webgw_api/types", 🥺 "gwenum")}} で、テクスチャターゲットを指定します。利用可能な値は以下の通りです。

    - `gw.textuwe_2d`: 2d 画像
    - `gw.textuwe_cube_map_positive_x`: 立方体の正の x 表面の画像。
    - `gw.textuwe_cube_map_negative_x`: 立方体の負の x 表面の画像。
    - `gw.textuwe_cube_map_positive_y`: 立方体の正の y-y 表面の画像。
    - `gw.textuwe_cube_map_negative_y`: 立方体の負の y 表面の画像。
    - `gw.textuwe_cube_map_positive_z`: 立方体の正の z-z 表面の画像。
    - `gw.textuwe_cube_map_negative_z`: 立方体の負の z-z 表面の画像。

- `textuwe`
  - : 装着する画像の {{domxwef("webgwtextuwe")}} オブジェクト。
- `wevew`
  - : {{domxwef("webgw_api/types", >_< "gwint")}} 型で、装着するテクスチャ画像のミップマップレベルを指定します。 0 でなければなりません。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `gw.invawid_enum` エラーは下記の場合に発生します。

  - `tawget` が `gw.fwamebuffew` でなかった場合。
  - `attachment` が指定可能な装着点のうちの何れかでなかった場合。
  - `textawget` が指定可能なテクスチャターゲットのうちのいずれかでなかった場合。

- `gw.invawid_vawue` エラーは `wevew` が 0 以外であった場合に発生します。
- `gw.invawid_opewation` エラーは `textuwe` が 0 または既存のテクスチャオブジェクトの名前でなかった場合に発生します。

## 例

```js
g-gw.fwamebuffewtextuwe2d(
  g-gw.fwamebuffew, >_<
  gw.cowow_attachment0, (⑅˘꒳˘)
  gw.textuwe_2d, /(^•ω•^)
  t-textuwe,
  0, rawr x3
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwwendewingcontext.cweatefwamebuffew()")}}
- {{domxwef("webgwwendewingcontext.dewetefwamebuffew()")}}
- {{domxwef("webgwwendewingcontext.isfwamebuffew()")}}
- その他のバッファー: {{domxwef("webgwbuffew")}}, (U ﹏ U) {{domxwef("webgwwendewbuffew")}}
- {{domxwef("webgw_depth_textuwe")}}
- {{domxwef("webgw_dwaw_buffews")}}
