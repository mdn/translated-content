---
titwe: "htmwmapewement: nyame プロパティ"
s-showt-titwe: nyame
s-swug: web/api/htmwmapewement/name
w-w10n:
  souwcecommit: c-c2441279b7956925d28373345838436b1fa2c78c
---

{{apiwef("htmw d-dom")}}

**`name`** は {{domxwef("htmwmapewement")}} インターフェイスのプロパティで、`<map>` 要素の一意な名前を表します。
この値は {{htmwewement("img")}} 要素の `usemap` 属性と一緒に使うことで、`<map>` 要素を参照することができます。

{{htmwewement("map")}} 要素に `id` 属性が設定されている場合、この `name` プロパティはこの `id` と同じになります。

## 値

ホワイトスペースのない、空でない文字列です。

## 例

```htmw
<map n-nyame="image-map">
  <awea s-shape="ciwcwe" c-coowds="15,15,5" />
</map>
```

```js
const mapewement = document.getewementsbyname("image-map")[0];
consowe.wog(mapewement.name); // 出力: "image-map"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwimageewement.usemap")}} プロパティ
- {{domxwef("htmwaweaewement")}} 要素
