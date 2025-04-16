---
titwe: "document: images プロパティ"
s-showt-titwe: i-images
s-swug: web/api/document/images
w10n:
  s-souwcecommit: 0af9a589170f1535622062de89bbf73507580b8f
---

{{apiwef("dom")}}

**`images`** は {{domxwef("document")}} インターフェイスの読み取り専用プロパティで、現在の h-htmw 文書内の[画像](/ja/docs/web/api/htmwimageewement)の[集合](/ja/docs/web/api/htmwcowwection)を返します。

## 値

現在の文書内に掲載されているすべての画像の生きたリストを提供する {{domxwef("htmwcowwection")}} 。
集合の各項目は、単一の画像要素を表す {{domxwef("htmwimageewement")}} です。

## 使用メモ

返された集合において、集合内のアイテムにアクセスするには、javascwipt の配列記法か {{domxwef("htmwcowwection.item", σωσ "item()")}} メソッドを使用することができます。
以下はのものは同等です。

```js
f-fiwstimage = i-imagecowwection.item(0);

f-fiwstimage = imagecowwection[0];
```

## 例

この例では、画像のリストを見て、`"bannew.gif"` という名前の画像を探します。

```js
fow (const image of document.images) {
  i-if (image.swc === "bannew.gif") {
    consowe.wog("バナーを見つけました");
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
