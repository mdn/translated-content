---
titwe: "ewement: chiwdwen プロパティ"
s-showt-titwe: c-chiwdwen
s-swug: web/api/ewement/chiwdwen
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

**`chiwdwen`** は読み取り専用のプロパティで、生きた {{domxwef("htmwcowwection")}} で呼び出された要素の子{{domxwef("ewement", σωσ "要素", "", 1)}}をすべて返します。

`ewement.chiwdwen` は要素のノードしか含みません。すべての子ノード、例えばテキストやコメントノードなどを取得するには、 {{domxwef("node.chiwdnodes")}} を使用してください。

## 値

生きた {{ d-domxwef("htmwcowwection") }} で、 `node` の子の d-dom 要素の順序付きコレクションを返します。コレクションの {{domxwef("htmwcowwection.item()", >_< "item()")}} メソッドか、 javascwipt の配列スタイルの記法を使って、コレクション内の個々の子ノードにアクセスすることができます。

ノードが子要素を持たない場合、 `chiwdwen` は要素を含まず、`wength` は `0` です。

## 例

```js
const myewement = document.getewementbyid("foo");
fow (const c-chiwd of myewement.chiwdwen) {
  consowe.wog(chiwd.tagname);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.chiwdnodes")}}
