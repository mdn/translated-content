---
title: "RTCPeerConnection: idpLoginUrl プロパティ"
short-title: idpLoginUrl
slug: Web/API/RTCPeerConnection/idpLoginUrl
l10n:
  sourceCommit: efb84732016b60b17f81358960f9d5ebf516c5fe
---

{{APIRef("WebRTC")}}

**`idpLoginUrl`** は {{domxref("RTCPeerConnection")}} インターフェイスの読み取り専用プロパティで、アプリケーションが{{Glossary("Identity provider", "アイデンティティプロバイダー")}} (IdP) へのユーザーログインを行うために開くことができる URL エンドポイントを含む文字列を返します。この値は、IdP がログインが必要であることを示すまでは `null` です。

IdP がユーザー認証を要求しているため、{{domxref("RTCPeerConnection.getIdentityAssertion()")}} の呼び出しが失敗した場合、結果として返されるプロミスは {{domxref("RTCError")}} によって拒否され、その {{domxref("RTCError.errorDetail", "errorDetail")}} は `"idp-need-login"` となります。その後、ブラウザーはこのプロパティを、IdP から指定されたログイン URL に設定します。アプリケーションはこの URL を開くことができる（例えば、ポップアップウィンドウや `<iframe>` などで）、ユーザーがログインプロセスを完了してから、ID アサーションを再試行することができます。

## 値

IdP のログイン URL が指定された文字列。ログインが必要でない場合は `null`。

## 例

### IdP によるログイン要件の処理

この例では、アプリケーションは ID アサーションの取得を試みます。ユーザーが認証されていないことを理由に IdP がこの試みを拒否した場合、アプリケーションは `idpLoginUrl` が提供するログイン URL を開きます。

```js
const pc = new RTCPeerConnection();
pc.setIdentityProvider("login.example.com");

pc.getIdentityAssertion().catch((error) => {
  if (pc.idpLoginUrl) {
    console.log(`IdP login required at: ${pc.idpLoginUrl}`);
    // Open the login page in a popup window
    const loginWindow = window.open(
      pc.idpLoginUrl,
      "idp-login",
      "width=500,height=600",
    );
  } else {
    console.error("ID アサーションに失敗しました:", error);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.peerIdentity")}}
- {{domxref("RTCPeerConnection.getIdentityAssertion()")}}
- {{domxref("RTCPeerConnection.setIdentityProvider()")}}
- {{domxref("RTCIdentityAssertion")}}
