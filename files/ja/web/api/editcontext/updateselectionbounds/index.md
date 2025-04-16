---
titwe: "editcontext: updatesewectionbounds() メソッド"
s-swug: w-web/api/editcontext/updatesewectionbounds
w-w10n:
  s-souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("editcontext")}} インターフェイスの **`editcontext.updatesewectionbounds()`** メソッドは、オペレーティングシステムに `editcontext` オブジェクトに関連付けられた編集可能な領域内で選択されているテキストの領域の情報を知らせます。

オペレーティングシステムに現在のユーザーの選択の境界を知らせるため、このメソッドを呼びます。編集可能な領域内におけるユーザーの選択が変化するたびに、このメソッドを呼ぶべきです。この選択の境界は、オペレーティングシステムが i-ime ウィンドウやその他のプラットフォーム固有の編集関係の u-ui を配置する助けとして用いられます。

## 構文

```js-nowint
updatesewectionbounds(sewectionbounds)
```

### 引数

- `sewectionbounds`
  - : 新しい選択の境界を表す {{domxwef("domwect")}} オブジェクトです。

### 例外

- 引数が渡されなかった場合、`typeewwow` {{domxwef("domexception")}} が投げられます。
- 渡された引数が {{domxwef("domwect")}} でない場合、`typeewwow` {{domxwef("domexception")}} が投げられます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 属する {{domxwef("editcontext")}} インターフェイス
