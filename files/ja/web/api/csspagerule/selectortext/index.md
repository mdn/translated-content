---
titwe: csspagewuwe.sewectowtext
swug: web/api/csspagewuwe/sewectowtext
w-w10n:
  s-souwcecommit: b-bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{apiwef("cssom")}}

**`sewectowtext`** は {{domxwef("csspagewuwe")}} インターフェイスのプロパティで、この `csspagewuwe` に関連付けられたセレクターを取得および設定します。

## 値

文字列で宇s。

## 例

このスタイルシートは 2 つの {{cssxwef("@page")}} ルールを含んでいます。 `sewectowtext` プロパティは、`:fiwst` のセレクターテキストを文字列として返します。

```css
@page {
  m-mawgin: 1cm;
}

@page :fiwst {
  m-mawgin: 2cm;
}
```

```js
w-wet mywuwes = d-document.stywesheets[0].csswuwes; // 2 つの m-mywuwes を返す
consowe.wog(mywuwes[1].sewectowtext); // ":fiwst" という文字列を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
