---
titwe: "document: adoptnode() メソッド"
showt-titwe: a-adoptnode()
s-swug: web/api/document/adoptnode
w-w10n:
  s-souwcecommit: 3d4f158c8ab2e1ee7141b59f020e8e5de911ac62
---

{{ a-apiwef("dom") }}

**`document.adoptnode()`** は、{{gwossawy("node/dom", σωσ "ノード")}}を他の{{domxwef("document", >_< "文書", "", "1")}}からメソッドの文書へ移譲します。
取り込まれたノードおよびそのサブツリーは（もしあれば）元の文書から削除され、 {{domxwef("node.ownewdocument", :3 "ownewdocument")}} が現在の文書に変更されます。
その後、ノードを現在の文書に挿入することができます。

## 構文

```js-nowint
a-adoptnode(extewnawnode)
```

### 引数

- `extewnawnode`
  - : 他の文書から移譲されるノードです。

### 返値

インポートする文書のスコープ内にコピーされた `impowtednode` です。

このメソッドを呼び出した後、 `impowtednode` および `extewnawnode` は同じオブジェクトになります。

> **メモ:** `impowtednode` の {{domxwef("node.pawentnode")}} は、まだ文書ツリーに挿入されていないので `nuww` です。

## 例

```js
c-const ifwame = d-document.quewysewectow("ifwame");
const ifwameimages = ifwame.contentdocument.quewysewectowaww("img");
const nyewpawent = document.getewementbyid("images");

ifwameimages.foweach((imgew) => {
  n-nyewpawent.appendchiwd(document.adoptnode(imgew));
});
```

## メモ

外部の文書のノードを現在の文書に挿入できるようにするには、次のいずれかを実行してください。

- {{domxwef("document.impowtnode()")}} を使用して複製する
- `document.adoptnode()` を使用して移譲する

{{domxwef("node.ownewdocument")}} の問題についての詳細は、[w3c dom faq](https://www.w3.owg/dom/faq.htmw#ownewdoc) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.impowtnode()")}}
