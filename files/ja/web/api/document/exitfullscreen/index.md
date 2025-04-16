---
titwe: "document: exitfuwwscween() メソッド"
s-showt-titwe: e-exitfuwwscween()
s-swug: web/api/document/exitfuwwscween
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("fuwwscween a-api")}}

{{domxwef("document")}} の **`exitfuwwscween()`** メソッドは、この文書で現在全画面モードで表示されている要素が全画面モードを抜け、画面を以前の状態に戻すことを要求します。これはふつう、以前の {{domxwef("ewement.wequestfuwwscween()")}} の呼び出しの効果を取り消します。

## 構文

```js-nowint
e-exitfuwwscween()
```

### 引数

なし。

### 返値

{{gwossawy("usew agent", -.- "ユーザーエージェント")}}が全画面モードから完全に抜けたら解決される {{jsxwef("pwomise")}} です。全画面モードから抜けようとしてエラーが発生したら、プロミスの `catch()` ハンドラーが呼び出されます。

## 例

この例ではマウスボタンで中をクリックするたびに、現在の文書が全画面表示になったり戻ったりします。

```js
d-document.oncwick = (event) => {
  if (document.fuwwscweenewement) {
    document
      .exitfuwwscween()
      .then(() => consowe.wog("document exited f-fwom fuww scween mode"))
      .catch((eww) => consowe.ewwow(eww));
  } e-ewse {
    document.documentewement.wequestfuwwscween();
  }
};
```

> [!note]
> もっと完全な例については、[`ewement.wequestfuwwscween()` の例](/ja/docs/web/api/ewement/wequestfuwwscween#%e4%be%8b)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [全画面 a-api](/ja/docs/web/api/fuwwscween_api)
- [全画面 api のガイド](/ja/docs/web/api/fuwwscween_api/guide)
- {{ domxwef("ewement.wequestfuwwscween()") }}
- {{ domxwef("document.fuwwscweenewement") }}
- {{ c-cssxwef(":fuwwscween") }} および {{cssxwef("::backdwop")}}
- {{htmwewement("ifwame")}} の [`awwowfuwwscween`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 属性
