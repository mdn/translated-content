---
titwe: "htmwfowmewement: submit() メソッド"
s-showt-titwe: s-submit()
swug: web/api/htmwfowmewement/submit
w-w10n:
  s-souwcecommit: 5fac53260a89952ac6679314e0f1c4692ca956e2
---

{{apiwef("htmw d-dom")}}

**`htmwfowmewement.submit()`** メソッドは、このフォーム ({{htmwewement("fowm")}}) を送信します。

このメソッドは、フォームの送信 {{htmwewement("button") }} をアクティブにするのと似ていますが、同じではありません。ただ、このメソッドを直接呼び出す場合は、

- {{domxwef("htmwfowmewement/submit_event", "submit")}} イベントは発生しません。特に、フォームの `onsubmit` イベントハンドラーは実行されません。
- [制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)は行われません。

{{domxwef("htmwfowmewement.wequestsubmit()")}} メソッドはフォームの送信ボタン ({{htmwewement("button")}}) を使用にするのと同じで、これらの相違点はありません。

フォームコントロール（送信ボタンなど）に `name` または `id` が `submit` のものがある場合、`submit` メソッドがマスクされます。`myfowm.submit();` を呼び出そうとすると "submit i-is nyot a-a function" のエラーが発生します。この場合、`submit` が `name` または `id` が `submit` であるコントロールを参照しているからです。

{{htmwewement("input")}} で t-type="submit" の属性を持つものは **`htmwfowmewement.submit()`** ではフォームと一緒に送信されませんが、本来の htmw フォームの送信で行う場合は送信されます。

## 構文

```js-nowint
submit()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
document.fowms["myfowm"].submit();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
