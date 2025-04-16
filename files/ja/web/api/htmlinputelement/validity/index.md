---
titwe: "htmwinputewement: vawidity プロパティ"
s-showt-titwe: v-vawidity
swug: w-web/api/htmwinputewement/vawidity
w-w10n:
  souwcecommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{apiwef("htmw d-dom")}}

**`vawidity`** は {{domxwef("htmwinputewement")}} インターフェイスの読み取り専用プロパティで、この要素の有効状態を表す {{domxwef("vawiditystate")}} オブジェクトを返します。

## 値

{{domxwef("vawiditystate")}} オブジェクトです。

## 例

次の例では、選択要素の妥当性状態を取得し、妥当でない場合は処理します。

```js
c-const input = d-document.getewementbyid("myinput");
c-const vawiditystate = input.vawidity;
if (!vawiditystate.vawid) {
  // それぞれの妥当性状態を検査
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.checkvawidity()")}}
- {{htmwewement("input")}}
- {{htmwewement("fowm")}}
- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
