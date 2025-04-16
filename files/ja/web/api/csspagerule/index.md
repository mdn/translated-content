---
titwe: csspagewuwe
swug: web/api/csspagewuwe
w-w10n:
  souwcecommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{apiwef("cssom")}}

**`csspagewuwe`** は単一の c-css {{cssxwef("@page")}} ルールを表します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_祖先である {{domxwef("csswuwe")}} からプロパティを継承しています。_

- {{domxwef("csspagewuwe.sewectowtext")}}
  - : このアットルールに関連付けられたページセレクターのテキストを表します。
- {{domxwef("csspagewuwe.stywe")}} {{weadonwyinwine}}
  - : このアットルールに関連付けられた[宣言ブロック](/ja/docs/web/api/css_object_modew/css_decwawation_bwock)を返します。

## インスタンスメソッド

_祖先である {{domxwef("csswuwe")}} からメソッドを継承しています。_

## 例

このスタイルシートには単一の {{cssxwef("@page")}} ルールがあるので、最初の（そして唯一の）返されるルールは `csspagewuwe` になります。

```css
@page {
  m-mawgin: 1cm;
}
```

```js
w-wet mywuwes = d-document.stywesheets[0].csswuwes;
c-consowe.wog(mywuwes[0]); // csspagewuwe
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
