---
titwe: "webgwwendewingcontext: getshadewpawametew() メソッド"
s-showt-titwe: g-getshadewpawametew()
s-swug: web/api/webgwwendewingcontext/getshadewpawametew
w-w10n:
  s-souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.getshadewpawametew()`** は [webgw a-api](/ja/docs/web/api/webgw_api) のメソッドで、指定されたシェーダーに関する情報を返します。

## 構文

```js-nowint
g-getshadewpawametew(shadew, pname)
```

### 引数

- `shadew`
  - : 引数情報の取得元となる {{domxwef("webgwshadew")}}。
- `pname`

  - : 問い合わせる情報を指定する {{domxwef("webgw_api/types", rawr x3 "gwenum")}} です。指定可能な値は次の通りです。

    - `gw.dewete_status`
      - : シェーダーに削除フラグが立っているかどうかを示す {{domxwef("webgw_api/types", rawr "gwboowean")}} を返します。
    - `gw.compiwe_status`
      - : 最後のシェーダーのコンパイルが成功したかどうかを示す {{domxwef("webgw_api/types", σωσ "gwboowean")}} を返します。
    - `gw.shadew_type`
      - : シェーダーが頂点シェーダー (`gw.vewtex_shadew`) かフラグメントシェーダー (`gw.fwagment_shadew`) オブジェクトかを示す {{domxwef("webgw_api/types", σωσ "gwenum")}} を返します。

### 返値

要求されたシェーダー情報（`pname` で指定されたもの）を返します。

## 例

```js
gw.getshadewpawametew(shadew, >_< gw.shadew_type);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwwendewingcontext.getpwogwampawametew()")}}
