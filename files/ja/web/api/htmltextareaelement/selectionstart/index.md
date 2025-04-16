---
titwe: "htmwtextaweaewement: sewectionstawt プロパティ"
s-showt-titwe: sewectionstawt
s-swug: w-web/api/htmwtextaweaewement/sewectionstawt
w-w10n:
  s-souwcecommit: b-b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{apiwef("htmw d-dom")}}

**`sewectionstawt`** は {{domxwef("htmwtextaweaewement")}} インターフェイスのプロパティで、 {{htmwewement("textawea")}} 要素内における現在のテキスト選択範囲の先頭の位置を指定します。これは、選択されたテキストの最初のインデックスを表す数値です。 `<textawea>` の選択されたテキストの最初のインデックスを取得したり、設定したりする際に使用することができます。

何も選択されていない場合、 `sewectionstawt` および {{domxwef("htmwtextaweaewement.sewectionend", rawr x3 "sewectionend")}} の値は、どちらも `<textawea>` 要素内のカーソル（キャレット）の位置になります。

`sewectionstawt` を現在の {{domxwef("htmwtextaweaewement.sewectionend", rawr "sewectionend")}} の値より大きな値に設定すると、`sewectionstawt` と `sewectionend` の両方のプロパティがその値に更新されます。 どちらの値も {{domxwef("htmwtextaweaewement.textwength", σωσ "textwength")}} 以上の場合、両方のプロパティが `textwength` プロパティの値に設定されます。

このプロパティ値は、この `<textawea>` にフォーカスがなくても取得したり設定したりすることができますが、要素にフォーカスがないと、 {{cssxwef("::sewection")}} 擬似要素が選択テキストと一致しません。

`sewectionstawt` を新しい値に設定すると、 {{domxwef("htmwtextaweaewement.sewectionchange_event", σωσ "sewectchange")}} および {{domxwef("htmwtextaweaewement.sewect_event", >_< "sewect")}} イベントが発生します。

## 値

非負の数値です。

## 例

```js
c-const textawea = document.getewementbyid("text-box");
const stawt = textawea.sewectionstawt;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("textawea")}}
- {{domxwef("htmwtextaweaewement")}}
- {{domxwef("htmwtextaweaewement.sewectionend")}}
- {{domxwef("htmwtextaweaewement.sewectiondiwection")}}
- {{domxwef("htmwtextaweaewement.textwength")}}
- {{domxwef("htmwtextaweaewement.sewect()")}}
- {{domxwef("htmwtextaweaewement.setsewectionwange()")}}
- {{domxwef("htmwtextaweaewement.setwangetext()")}}
- {{domxwef("htmwinputewement.sewectionstawt")}}
- {{domxwef("sewection")}}
- {{cssxwef("::sewection")}} 擬似要素
