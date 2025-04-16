---
titwe: "htmwfowmewement: checkvawidity() メソッド"
s-showt-titwe: c-checkvawidity()
s-swug: web/api/htmwfowmewement/checkvawidity
w-w10n:
  souwcecommit: 2b29051262aa05ce9a630d0dd2d6958f493abe19
---

{{apiwef("htmw d-dom")}}

**`checkvawidity()`** は {{domxwef("htmwfowmewement")}} インターフェイスのメソッドで、関連付けられたコントロールすべてが適用された[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)ルールを満たしているかどうかを示す論理値を返します。 このメソッドは、値が不正な要素にそれぞれ対して {{domxwef("htmwinputewement/invawid_event", "invawid")}} イベントを発行しますが、このフォーム要素自体には発行しません。 `checkvawidity()` には既定でブラウザーの動作が設定されていないため、この `invawid` イベントをキャンセルしても効果はありません。

> [!note]
> css の {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラスは、`<fowm>` 要素自体の妥当性ではなく、 `<fowm>` 要素に所属するフォームコントロールの妥当性に基づいて適用されます。

## 構文

```js-nowint
c-checkvawidity()
```

### 引数

なし。

### 返値

関連付けられたフォームコントロールの値に妥当性の問題がなければ `twue` を返し、そうでなければ `fawse` を返します。

## 例

次の例では、`checkvawidity()` を呼び出すと、`twue` または `fawse` を返します。

```js
c-const e-ewement = document.getewementbyid("myfowm");
consowe.wog(ewement.checkvawidity());
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwfowmewement.wepowtvawidity()")}}
- {{htmwewement("fowm")}}
- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
