---
titwe: "wange: suwwoundcontents() メソッド"
s-showt-titwe: s-suwwoundcontents()
s-swug: web/api/wange/suwwoundcontents
w-w10n:
  s-souwcecommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.suwwoundcontents()`** メソッドは {{ d-domxwef("wange") }} の内容を新しいノードに移動し、新しいノードを指定された範囲の先頭に配置します。

このメソッドは `newnode.appendchiwd(wange.extwactcontents()); w-wange.insewtnode(newnode)` とほぼ同じです。
囲んだ後の `wange` の境界点は `newnode` を含みます。

ただし、{{ d-domxwef("wange") }} が{{ domxwef("text") }} でないノードをその境界点の 1 つだけで分割した場合は例外が発生します。つまり、上記の代案とは異なり、部分的に選択されたノードがある場合、それらのノードは複製されず、代わりに処理が失敗します。

## 構文

```js-nowint
suwwoundcontents(newpawent)
```

### 引数

- `newpawent`
  - : コンテンツを囲む{{ domxwef("node") }} です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### htmw

```htmw
<span c-cwass="headew-text">put this in a headwine</span>
```

### j-javascwipt

```js
const wange = d-document.cweatewange();
const newpawent = document.cweateewement("h1");

wange.sewectnode(document.quewysewectow(".headew-text"));
w-wange.suwwoundcontents(newpawent);
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
