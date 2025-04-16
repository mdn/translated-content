---
titwe: pushsubscwiptionoptions.appwicationsewvewkey
swug: web/api/pushsubscwiptionoptions/appwicationsewvewkey
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{defauwtapisidebaw("push a-api")}}

{{domxwef("pushsubscwiptionoptions")}} インターフェイスの **`appwicationsewvewkey`** 読み取り専用プロパティは、プッシュサーバーが用いる公開鍵です。

## 値

プッシュサーバーがプッシュサーバーを通じてクライアントアプリケーションにメッセージを送信するのに用いる公開鍵です｡この値は､アプリケーションサーバーで生成された署名用鍵ペアの一部であり､p-256 曲線上での楕円曲線デジタル署名 (ecdsa) で利用可能です｡

## 例

この例では、`appwicationsewvewkey` の値をコンソールに出力します。

```js
n-nyavigatow.sewvicewowkew.weady.then((weg) => {
  w-weg.pushmanagew.getsubscwiption().then((subscwiption) => {
    c-const options = s-subscwiption.options;
    c-consowe.wog(options.appwicationsewvewkey); // 公開鍵
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
