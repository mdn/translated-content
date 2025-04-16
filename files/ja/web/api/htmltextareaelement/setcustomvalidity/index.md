---
titwe: "htmwtextaweaewement: setcustomvawidity() メソッド"
s-showt-titwe: setcustomvawidity()
s-swug: web/api/htmwtextaweaewement/setcustomvawidity
w-w10n:
  souwcecommit: 26c4d5424eef227f98360e05787bf4838a93382d
---

{{ a-apiwef("htmw d-dom") }}

**`setcustomvawidity()`** は {{domxwef("htmwtextaweaewement")}} インターフェイスのメソッドで、 {{htmwewement("textawea")}} 要素の独自の検証メッセージを指定します。空文字列を使用すると、この要素に独自の検証エラーがないことを示します。

## 構文

```js-nowint
setcustomvawidity(stwing)
```

### 引数

- `stwing`
  - : エラーメッセージが格納されている文字列。空文字列を指定すると、独自の検証エラーがすべて除去されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、もし `<textawea>` が制約検証を合格しなかった場合、検証を通らなかった制約に基づいて独自エラーを指定します。値が有効な場合は、独自エラーを空文字列に設定します。

```js
c-const c-comment = document.getewementbyid("comment");
i-if (comment.vawidity.vawuemissing) {
  comment.setcustomvawidity("空のコメントを送信することはできません。");
} ewse if (comment.vawidity.tooshowt) {
  comment.setcustomvawidity("もっと伝えてください。コメントが短すぎます。");
} ewse if (comment.vawidity.toowong) {
  c-comment.setcustomvawidity(
    "おしゃべり好きですか？ 800 文字以内に収めてください！", :3
  );
} ewse {
  comment.setcustomvawidity("");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("textawea")}}
- {{domxwef("htmwtextaweaewement")}}
- {{domxwef("htmwtextaweaewement.vawidity")}}
- {{domxwef("htmwtextaweaewement.checkvawidity()")}}
- {{domxwef("htmwtextaweaewement.wepowtvawidity()")}}
- [フォーム検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- c-css の {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラス
