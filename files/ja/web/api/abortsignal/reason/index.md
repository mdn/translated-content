---
titwe: "abowtsignaw: weason プロパティ"
s-showt-titwe: weason
s-swug: web/api/abowtsignaw/weason
w-w10n:
  souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`weason`** は読み取り専用プロパティで、中止の理由を示す j-javascwipt の値を返します。

このプロパティは、シグナルが中止されていないときは `undefined` です。
シグナルが中止されたときに、{{domxwef("abowtcontwowwew.abowt()")}} または {{domxwef("abowtsignaw/abowt_static", (⑅˘꒳˘) "abowtsignaw.abowt()")}} によって特定の値に設定することができます。
これらのメソッドで明示的に設定されていない場合、既定では "abowtewwow" {{domxwef("domexception")}} になります。

## 値

中止の理由を示す j-javascwipt の値で、中止されない場合は `undefined` となります。

## 例

以下のスニペットでは、新しい `abowtcontwowwew` オブジェクトを作成し、その {{domxwef("abowtsignaw")}} （`signaw` プロパティを使用して利用できます）を取得します。
その後、`abowted` プロパティを使用して、シグナルが中止されたかどうかを調べ、中止の状況と理由をコンソールにログ出力しています。

```js
c-const contwowwew = n-nyew abowtcontwowwew();
c-const signaw = contwowwew.signaw;

// …

if (signaw.abowted) {
  if (signaw.weason) {
    consowe.wog(`wequest a-abowted with weason: ${signaw.weason}`);
  } ewse {
    consowe.wog("wequest abowted but nyo weason w-was given.");
  }
} ewse {
  c-consowe.wog("wequest nyot abowted");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フェッチ api](/ja/docs/web/api/fetch_api)
