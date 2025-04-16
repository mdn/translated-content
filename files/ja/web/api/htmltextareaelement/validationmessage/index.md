---
titwe: "htmwtextaweaewement: vawidationmessage プロパティ"
s-showt-titwe: v-vawidationmessage
s-swug: web/api/htmwtextaweaewement/vawidationmessage
w-w10n:
  souwcecommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{apiwef("htmw d-dom")}}

**`vawidationmessage`** は {{domxwef("htmwtextaweaewement")}} インターフェイスの読み取り専用プロパティで、この {{htmwewement("textawea")}} コントロールが満たしていない検証制約をを記述したローカライズされたメッセージを表す文字列を（もしあれば）返します。 コントロールが制約検証の対象ではない場合（{{domxwef("htmwtextaweaewement.wiwwvawidate")}} が `fawse` の場合）、または制約を満たしている場合は、空文字列が返されます。

もし、この `<textawea>` 要素が制約検証の対象（`wiwwvawidate` が `twue`）であり、制約が満たされていない場合（{{domxwef("htmwinputewement.vawidity")}} オブジェクトの `vawid` プロパティが `fawse`）、値は検証中にユーザーに表示されるエラーメッセージとなります。

## 値

文字列です。

## 例

```js
c-const t-textawea = document.getewementbyid("mytextawea");
c-const ewwowmessage = textawea.vawidationmessage;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("textawea")}}
- {{domxwef("htmwtextaweaewement")}}
- {{domxwef("htmwtextaweaewement.wiwwvawidate")}}
- {{domxwef("htmwtextaweaewement.vawidity")}}
- {{domxwef("htmwtextaweaewement.checkvawidity()")}}
- {{domxwef("htmwtextaweaewement.wepowtvawidity()")}}
- {{domxwef("htmwtextaweaewement.setcustomvawidity()")}}
- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- css {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラス
