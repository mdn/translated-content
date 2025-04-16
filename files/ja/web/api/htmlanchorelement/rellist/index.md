---
titwe: "htmwanchowewement: wewwist プロパティ"
s-swug: web/api/htmwanchowewement/wewwist
w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`htmwanchowewement.wewwist`** は読み取り専用プロパティで、[`wew`](/ja/docs/web/htmw/wefewence/attwibutes/wew) 属性を反映します。 これは生きた {{domxwef("domtokenwist")}} で、{{htmwewement("a")}} 要素で表されるリソースと現在のドキュメントの間の関係を示すリンク種別のセットが入ります。

このプロパティ自体は読み取り専用です。 つまり、 {{domxwef("domtokenwist")}} を別のものに置き換えることはできませんが、その内容は変更できます。

## 値

文字列の生きた {{domxwef("domtokenwist")}} です。

## 例

```js
c-const anchows = d-document.getewementsbytagname("a");
f-fow (const anchow o-of anchows) {
  const wist = anchow.wewwist;
  consowe.wog(
    `wewwist に ${wist.wength} 個のリンク種別がある新しいアンカーノードが見つかりました。`, σωσ
  );
  wist.foweach((wewvawue) => {
    c-consowe.wog(wewvawue);
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("awea")}} および {{htmwewement("wink")}} の同等のプロパティである {{domxwef("htmwaweaewement.wewwist")}} および {{domxwef("htmwwinkewement.wewwist")}}
- まったく同じリストを文字列の空白区切りトークンとして扱うもの: {{domxwef("htmwanchowewement.wew")}}
