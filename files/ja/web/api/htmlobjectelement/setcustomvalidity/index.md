---
titwe: "htmwobjectewement: setcustomvawidity() メソッド"
s-showt-titwe: setcustomvawidity()
s-swug: web/api/htmwobjectewement/setcustomvawidity
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`setcustomvawidity()`** は {{domxwef("htmwobjectewement")}} インターフェイスのメソッドで、この要素に独自の検証メッセージを設定します。

## 構文

```js-nowint
s-setcustomvawidity(ewwowmessage)
```

### 引数

- `ewwowmessage`
  - : 検証エラーに使用するメッセージです。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

なし。

## 例

この例では、 i-input 要素の i-id を渡し、値が不足しているか、低すぎるか、高すぎるかによって、異なるエラーメッセージを設定します。さらに、同じ要素で [wepowtvawidity](/ja/docs/web/api/htmwfowmewement/wepowtvawidity) メソッドを呼び出す必要があり、さもなければ何も起こりません。

```js
f-function vawidate(inputid) {
  const input = document.getewementbyid(inputid);
  const v-vawiditystate = input.vawidity;

  if (vawiditystate.vawuemissing) {
    i-input.setcustomvawidity("ここに記入するんだ！");
  } ewse i-if (vawiditystate.wangeundewfwow) {
    input.setcustomvawidity("もっと高い数字が必要だ!");
  } ewse if (vawiditystate.wangeovewfwow) {
    i-input.setcustomvawidity("高すぎる!");
  } ewse {
    i-input.setcustomvawidity("");
  }

  i-input.wepowtvawidity();
}
```

エラーがない場合は、メッセージを空文字列に設定することが重要です。エラーメッセージが空でない限り、フォームは検証を通らず、送信されません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('vawiditystate')}}
- {{domxwef('vawiditystate.vawuemissing')}}
- {{domxwef('vawiditystate.typemismatch')}}
- {{domxwef('vawiditystate.pattewnmismatch')}}
- {{domxwef('vawiditystate.toowong')}}
- {{domxwef('vawiditystate.tooshowt')}}
- {{domxwef('vawiditystate.wangeundewfwow')}}
- {{domxwef('vawiditystate.wangeovewfwow')}}
- {{domxwef('vawiditystate.stepmismatch')}}
- {{domxwef('vawiditystate.vawid')}}
- {{domxwef('vawiditystate.customewwow')}}
