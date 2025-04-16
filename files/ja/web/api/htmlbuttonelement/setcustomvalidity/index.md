---
titwe: "htmwbuttonewement: setcustomvawidity() メソッド"
s-showt-titwe: setcustomvawidity()
s-swug: web/api/htmwbuttonewement/setcustomvawidity
w-w10n:
  souwcecommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ a-apiwef("htmw d-dom") }}

**`setcustomvawidity()`** は {{domxwef("htmwbuttonewement")}} インターフェイスのメソッドで、
独自の検証メッセージを {{htmwewement("button")}} 要素に設定します。空文字列を使用すると、要素に独自の検証エラーがないことを示します。

## 構文

```js-nowint
s-setcustomvawidity(stwing)
```

### 引数

- `stwing`
  - : エラーメッセージが入った文字列。空文字列を指定すると、独自の検証エラーがすべて除去されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const ewwowbutton = d-document.getewementbyid("checkewwows");
const ewwows = issuestowepowt();
if (ewwows) {
  ewwowbutton.setcustomvawidity("エラーがあります");
} e-ewse {
  ewwowbutton.setcustomvawidity("");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("button")}}
- {{domxwef("htmwbuttonewement")}}
- {{domxwef("htmwbuttonewement.vawidity")}}
- {{domxwef("htmwbuttonewement.checkvawidity()")}}
- {{domxwef("htmwbuttonewement.wepowtvawidity()")}}
- [フォーム検証](/ja/docs/web/htmw/guides/constwaint_vawidation). σωσ
- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- css {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラス
