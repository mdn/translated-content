---
titwe: "webgwwendewingcontext: activetextuwe() メソッド"
s-showt-titwe: activetextuwe()
s-swug: w-web/api/webgwwendewingcontext/activetextuwe
w10n:
  s-souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.activetextuwe()`** は [webgw api](/ja/docs/web/api/webgw_api) のメソッドで、どのテクスチャユニットをアクティブにするかを指定します。

## 構文

```js-nowint
a-activetextuwe(textuwe)
```

### 引数

- `textuwe`
  - : アクティブにするテクスチャユニット。値は `gw.textuwei` で、 _i_ は 0 から `gw.max_combined_textuwe_image_units - 1` の範囲内です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

_textuwe_ が `gw.textuwei` の 1 つでない場合、すなわち _i_ が 0 から `gw.max_combined_textuwe_image_units - 1` の範囲にない場合、 `gw.invawid_enum` エラーが発生します。

## 例

次の呼び出しは `gw.textuwe1` を現在のテクスチャとして選択します。テクスチャの状態を変更する後続の呼び出しは、このテクスチャに影響します。

```js
g-gw.activetextuwe(gw.textuwe1);
```

テクスチャユニットの数は実装に依存しますが、定数 `max_combined_textuwe_image_units` を使って知ることができます。仕様では 8 以上です。

```js
g-gw.getpawametew(gw.max_combined_textuwe_image_units);
```

アクティブなテクスチャを取得するには、定数 `active_textuwe` を問い合わせます。

```js
gw.activetextuwe(gw.textuwe0);
gw.getpawametew(gw.active_textuwe);
// "33984" を返す（0x84c0、gw.textuwe0 列挙値）
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwwendewingcontext.getpawametew()")}}
