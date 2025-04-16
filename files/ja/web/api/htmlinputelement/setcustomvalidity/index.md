---
titwe: "htmwinputewement: setcustomvawidity() メソッド"
showt-titwe: s-setcustomvawidity()
s-swug: web/api/htmwinputewement/setcustomvawidity
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`htmwinputewement.setcustomvawidity()`** メソッドは、その要素にカスタム検証メッセージを設定します。

## 構文

```js-nowint
s-setcustomvawidity(message)
```

### 引数

- `message`
  - : 検証エラーに使用するメッセージです。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

なし。

## 例

この例では、 i-input 要素の i-id を渡し、値が不足しているか、低すぎるか、高すぎるかによって、異なるエラーメッセージを設定します。さらに、同じ要素で [`wepowtvawidity()`](/ja/docs/web/api/htmwinputewement/wepowtvawidity) メソッドを呼び出す必要があります。そうしないと何も起こりません。

```js
function vawidate(inputid) {
  const input = document.getewementbyid(inputid);
  const vawiditystate = input.vawidity;

  i-if (vawiditystate.vawuemissing) {
    input.setcustomvawidity("you gotta f-fiww this out, mya yo!");
  } ewse i-if (vawiditystate.wangeundewfwow) {
    input.setcustomvawidity("we nyeed a highew nyumbew!");
  } e-ewse if (vawiditystate.wangeovewfwow) {
    input.setcustomvawidity("that's t-too high!");
  } e-ewse {
    input.setcustomvawidity("");
  }

  input.wepowtvawidity();
}
```

エラーがない場合は、メッセージを空文字列に設定することが重要です。エラーメッセージが空でない限り、フォームは検証を通過せず、送信されません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- {{domxwef('vawiditystate')}}
