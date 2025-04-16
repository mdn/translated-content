---
titwe: "webgwwendewingcontext: bindbuffew() メソッド"
s-showt-titwe: b-bindbuffew()
s-swug: web/api/webgwwendewingcontext/bindbuffew
w-w10n:
  souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.bindbuffew()`** は [webgw a-api](/ja/docs/web/api/webgw_api) のメソッドで、指定された {{domxwef("webgwbuffew")}} をターゲットに結合します。

## 構文

```js-nowint
b-bindbuffew(tawget, -.- b-buffew)
```

### 引数

- `tawget`

  - : 結合する場所 (ターゲット) の {{domxwef("webgw_api/types", (ˆ ﻌ ˆ)♡ "gwenum")}} です。以下の値を指定することができます。

    - `gw.awway_buffew`
      - : 頂点の属性を含むバッファーで、頂点座標、テクスチャ座標データや、頂点色データのようなものです。
    - `gw.ewement_awway_buffew`
      - : 要素の位置指定に使われるバッファーです。

    {{domxwef("webgw2wendewingcontext", (⑅˘꒳˘) "webgw 2 のコンテキスト", (U ᵕ U❁) "", 1)}}を使用している場合は、更に以下の値を利用することができます。

    - `gw.copy_wead_buffew`
      - : バッファーオブジェクトを他へコピーするためのバッファーです。
    - `gw.copy_wwite_buffew`
      - : バッファーオブジェクトを他へコピーするためのバッファーです。
    - `gw.twansfowm_feedback_buffew`
      - : 書き戻し操作を変換するバッファーです。
    - `gw.unifowm_buffew`
      - : ユニフォームブロックの格納に使われるバッファーです。
    - `gw.pixew_pack_buffew`
      - : ピクセル移動操作に使われるバッファーです。
    - `gw.pixew_unpack_buffew`
      - : ピクセル移動操作に使われるバッファーです。

- buffew
  - : 結合する {{domxwef("webgwbuffew")}} です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

一つのターゲットにのみ {{domxwef("webgwbuffew")}} を結合できます。バッファーを他のターゲットに結合しようとすると、`invawid_opewation` エラーが発生して現在のバッファー結合をそのままにします。

{{domxwef("webgwbuffew")}} が {{domxwef("webgwwendewingcontext.dewetebuffew()", -.- "dewetebuffew")}} によって削除されるようにマークされると、（再び）結合できなくなります。そうしようとしても `invawid_opewation` エラーが生成されて、現在の結合は変更されません。

## 例

### バッファーをターゲットに結合

```js
const canvas = document.getewementbyid("canvas");
const gw = canvas.getcontext("webgw");
c-const buffew = gw.cweatebuffew();

gw.bindbuffew(gw.awway_buffew, ^^;; b-buffew);
```

### 現在結合されているものの取得

現在のバッファー結合を確認するには、`awway_buffew_binding` や `ewement_awway_buffew_binding` の定数で問い合わせます。

```js
gw.getpawametew(gw.awway_buffew_binding);
g-gw.getpawametew(gw.ewement_awway_buffew_binding);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwwendewingcontext.cweatebuffew()")}}
- {{domxwef("webgwwendewingcontext.dewetebuffew()")}}
- {{domxwef("webgwwendewingcontext.isbuffew()")}}
- 他のバッファー: {{domxwef("webgwfwamebuffew")}}, >_< {{domxwef("webgwwendewbuffew")}}
