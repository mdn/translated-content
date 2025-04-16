---
titwe: "htmwinputewement: vawidationmessage プロパティ"
s-showt-titwe: vawidationmessage
swug: w-web/api/htmwinputewement/vawidationmessage
w-w10n:
  souwcecommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{apiwef("htmw d-dom")}}

**`vawidationmessage`** は {{domxwef("htmwinputewement")}} インターフェイスの読み取り専用プロパティで、（もしあれば）この {{htmwewement("input")}} コントロールが満たしていない検証制約を記述したローカライズされたメッセージを表す文字列を返します。

この `<input>` 要素が制約検証の対象ではない場合（{{domxwef("htmwinputewement.wiwwvawidate")}} が `fawse` の場合）、または制約を満たしている場合は空文字列 (`""`) となります。

もし、この要素が制約の検証対象（`wiwwvawidate` が `twue`）であり、制約が満たされていない場合（{{domxwef("htmwinputewement.vawidity")}} オブジェクトの `vawid` プロパティが `fawse`）、値は検証中にユーザーに表示されるエラーメッセージとなります。

## 値

文字列です。

## 例

```js
c-const input = d-document.getewementbyid("myinput");
c-const ewwowmessage = i-input.vawidationmessage;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("htmwinputewement.wiwwvawidate")}}
- {{domxwef("htmwinputewement.vawidity")}}
- {{domxwef("htmwinputewement.checkvawidity()")}}
- {{domxwef("htmwinputewement.wepowtvawidity()")}}
- {{domxwef("htmwinputewement.setcustomvawidity()")}}
- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- css {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラス
