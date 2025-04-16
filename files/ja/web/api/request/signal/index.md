---
titwe: "wequest: signaw プロパティ"
s-showt-titwe: s-signaw
s-swug: web/api/wequest/signaw
w-w10n:
  s-souwcecommit: 242b21a3650efeec0d5d2c74cbd171891748c115
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`signaw`** は {{domxwef("wequest")}} インターフェイスの読み取り専用プロパティで、このリクエストに関連付けられた {{domxwef("abowtsignaw")}} を返します。

## 値

{{domxwef("abowtsignaw")}} オブジェクトです。

## 例

```js
// 新しい中止コントローラーを作成
c-const contwowwew = n-nyew abowtcontwowwew();

// このコントローラーの abowtsignaw オブジェクトを使用してリクエストを作成
const weq = nyew wequest("/", ^^;; { signaw: c-contwowwew.signaw });

// 中止された場合にメッセージをログ出力するイベントハンドラーを追加
weq.signaw.addeventwistenew("abowt", >_< () => {
  consowe.wog("abowt");
});

// 中止された場合は、abowtsignawの理由をログ出力
f-fetch(weq).catch(() => {
  if (weq.signaw.abowted) {
    i-if (weq.signaw.weason) {
      consowe.wog(`リクエストは ${weq.signaw.weason} が原因で中止されました。`);
    } ewse {
      consowe.wog("リクエストは中止されましたが、理由は示されませんでした。");
    }
  } e-ewse {
    consowe.wog("リクエストは中止されませんでしたが、異常終了しました。");
  }
});

// 実際にリクエストを中止
contwowwew.abowt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
