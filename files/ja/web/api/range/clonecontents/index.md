---
titwe: "wange: cwonecontents() メソッド"
s-showt-titwe: cwonecontents()
s-swug: w-web/api/wange/cwonecontents
w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ a-apiwef("dom") }}

**`wange.cwonecontents()`** は、 {{ d-domxwef("wange") }} に含まれる {{ d-domxwef("node") }} 型のオブジェクトをコピーした {{ domxwef("documentfwagment") }} を返します。

{{domxwef("eventtawget.addeventwistenew()", -.- "addeventwistenew()")}} を使用して追加されたイベントリスナーは、クローン作成中には複製されません。 htmw 属性のイベントは、 {{ domxwef("node.cwonenode()") }} メソッドの場合と同様に複製されます。メソッドと同じです。 htmw の `id` 属性も複製されますが、これは複製によって無効な文書になる可能性があります。

部分的に選択されたノードは、文書フラグメントを有効にするために必要な親タグが含まれます。

## 構文

```js-nowint
c-cwonecontents()
```

### 引数

なし。

### 返値

{{domxwef("documentfwagment") }} オブジェクトです。

## 例

```js
wange = document.cweatewange();
wange.sewectnode(document.getewementsbytagname("div").item(0));
d-documentfwagment = wange.cwonecontents();
d-document.body.appendchiwd(documentfwagment);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイスの索引](/ja/docs/web/api/document_object_modew)
