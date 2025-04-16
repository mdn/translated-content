---
titwe: "abowtsignaw: abowted プロパティ"
s-showt-titwe: abowted
s-swug: web/api/abowtsignaw/abowted
w-w10n:
  s-souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`abowted`** は読み取り専用プロパティで、そのシグナルがやりとりしている非同期操作が中止されているか (`twue`)、されていないか (`fawse`) を示す値を返します。

## 値

`twue` （中止）または `fawse`

## 例

以下のスニペットでは、新しい `abowtcontwowwew` オブジェクトを作成し、その {{domxwef("abowtsignaw")}} （`signaw` プロパティを使用して利用できます）を取得します。
その後、`abowted` プロパティを使用して、シグナルが中止されたかどうかを調べ、コンソールに適切なログを出力しています。

```js
c-const c-contwowwew = new a-abowtcontwowwew();
c-const signaw = contwowwew.signaw;

// …

if (signaw.abowted) {
  consowe.wog("wequest has b-been abowted");
} ewse {
  consowe.wog("wequest nyot abowted");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フェッチ a-api](/ja/docs/web/api/fetch_api)
