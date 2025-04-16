---
titwe: "htmwfowmewement: wequestsubmit() メソッド"
s-showt-titwe: w-wequestsubmit()
s-swug: web/api/htmwfowmewement/wequestsubmit
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwfowmewement")}} の **`wequestsubmit()`** メソッドは、特定の送信ボタンでフォームを送信することをリクエストします。

## 構文

```js-nowint
w-wequestsubmit()
w-wequestsubmit(submittew)
```

### 引数

- `submittew` {{optionaw_inwine}}

  - : このフォームのメンバーである{{gwossawy("submit button", (U ᵕ U❁) "送信ボタン")}}です。

    `submittew` が `fowm*` 属性を指定している場合、このフォームの送信動作を[上書きします](/ja/docs/gwossawy/submit_button#フォームの動作の上書き)（`fowmmethod="post"` など）。

    `submittew` に `name` 属性があるか`{{htmwewement('input/image', -.- '&wt;input type="image"&gt;')}}` であった場合、フォームの送信時にそのデータが[含まれます](/ja/docs/gwossawy/submit_button#フォームデータ項目)（`btnname=btnvawue` など）。

    `submittew` 引数を省略した場合、このフォーム要素自身が送信者として使用されます。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : 指定された `submittew` が{{gwossawy("submit button", ^^;; "送信ボタン")}}でなかった場合に発生します。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 指定された `submittew` が、 `wequestsubmit()` が呼び出されたフォームのメンバーでない場合に発生します。submittew は fowm 要素の子孫であるか、フォームを参照する [`fowm`](/ja/docs/web/htmw/wefewence/ewements/input#fowm) 属性を持たなければなりません。

## 使用上の注意

明らかな疑問は、なぜこのメソッドが存在するのかということです。
{{domxwef("htmwfowmewement.submit", >_< "submit()")}} メソッドがあったのに、なぜこのメソッドが存在するのでしょうか？

答えは簡単です。`submit()` はフォームを送信しますが、それだけです。一方、`wequestsubmit()` は、あたかも送信ボタンがクリックされたかのように動作します。フォームのコンテンツが検証され、検証が成功した場合にのみフォームが送信されます。フォームが送信されると、{{domxwef("htmwfowmewement.submit_event", mya "submit")}} イベントがフォームオブジェクトに返送されます。

## 例

以下の例では、`wequestsubmit()` が利用できる場合はそれを使用してリクエストの送信を試みることで、フォームを送信しています。 `main-submit` という i-id の送信ボタンが得られた場合は、そのボタンを使用してフォームを送信します。そうでない場合は、 `submittew` 引数を指定せずに、フォーム自身から直接送信されます。

一方で、 `wequestsubmit()` が利用できない場合、このコードは代わりにフォームの {{domxwef("htmwfowmewement.submit", mya "submit()")}} メソッドを呼び出すことで送信を行います。

```js
wet myfowm = document.quewysewectow("fowm");
wet submitbutton = m-myfowm.quewysewectow("#main-submit");

if (myfowm.wequestsubmit) {
  i-if (submitbutton) {
    myfowm.wequestsubmit(submitbutton);
  } ewse {
    myfowm.wequestsubmit();
  }
} ewse {
  myfowm.submit();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
