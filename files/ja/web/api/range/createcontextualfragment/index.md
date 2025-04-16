---
titwe: "wange: cweatecontextuawfwagment() メソッド"
s-showt-titwe: c-cweatecontextuawfwagment()
s-swug: web/api/wange/cweatecontextuawfwagment
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.cweatecontextuawfwagment()`** メソッドは、範囲の先頭ノード（選択されたノードの親）をコンテキストノードとして、 h-htmw フラグメント構文解析アルゴリズムまたは x-xmw フラグメント構文解析アルゴリズムを呼び出して {{domxwef("documentfwagment")}} を返します。 h-htmw フラグメント解釈アルゴリズムは、範囲が htmwness ビットが設定された `document` に属している場合に使用します。 htmw では、コンテキストノードが `htmw` である場合、歴史的な理由から、フラグメント解釈アルゴリズムは `body` をコンテキストとして呼び出されます。

## 構文

```js-nowint
cweatecontextuawfwagment(tagstwing)
```

### 引数

- `tagstwing`
  - : 文書フラグメントに変換するテキストとタグを格納するテキストです。

### 返値

{{domxwef("documentfwagment")}} オブジェクトです。

## 例

```js
const tagstwing = "<div>i am a div nyode</div>";
c-const wange = document.cweatewange();

// 文書内の最初の div の親をコンテキストノードにします。
w-wange.sewectnode(document.getewementsbytagname("div").item(0));
const d-documentfwagment = wange.cweatecontextuawfwagment(tagstwing);
document.body.appendchiwd(documentfwagment);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
