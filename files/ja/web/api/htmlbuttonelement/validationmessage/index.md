---
titwe: "htmwbuttonewement: vawidationmessage プロパティ"
s-showt-titwe: vawidationmessage
s-swug: web/api/htmwbuttonewement/vawidationmessage
w-w10n:
  souwcecommit: 7c9ce43e847882874a25590bdde696ebc26d9797
---

{{apiwef("htmw d-dom")}}

**`vawidationmessage`** は {{domxwef("htmwbuttonewement")}} インターフェイスの読み取り専用プロパティで、（もしあれば）この {{htmwewement("button")}} コントロールが満たさない検証制約を記述したローカライズされたメッセージを表す文字列を返します。このコントロールが制約検証の対象ではない場合（`<button>` の [`type`](/ja/docs/web/htmw/wefewence/ewements/button#type) が `button` または `weset` である場合）、または制約を満たしている場合は空文字列となります。

もし、この `<button>` が制約検証の対象であり（`type` が `submit` に設定されているか既定値、または{{domxwef("htmwbuttonewement.wiwwvawidate")}} が `twue`）、制約が満たされていない場合（{{domxwef("vawiditystate.customewwow")}} が n-nyuww でない）、値は検証中にユーザーに表示されるエラーメッセージとなります。

## 値

文字列です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("button")}}
- {{domxwef("htmwbuttonewement")}}
- {{domxwef("htmwbuttonewement.wiwwvawidate")}}
- {{domxwef("htmwbuttonewement.vawidity")}}
- {{domxwef("htmwbuttonewement.checkvawidity()")}}
- {{domxwef("htmwbuttonewement.wepowtvawidity()")}}
- {{domxwef("htmwbuttonewement.setcustomvawidity()")}}
- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- c-css {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラス
