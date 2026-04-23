---
title: PAC
slug: Glossary/PAC
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Proxy Auto-Configuration ファイル (**PAC ファイル**) は、`FindProxyForURL()` 関数を含むファイルです。ブラウザーはこの関数を使用して、各リクエスト (HTTP, HTTPS, FTP など) を直接接続先に送信するか、またはウェブプロキシーサーバーを経由する必要があるかを判断します。

```js
function FindProxyForURL(url, host) {
  // ...
}

ret = FindProxyForURL(url, host);
```

詳細な使用方法や PAC ファイルの作成方法については、[プロキシー自動構成ファイル (PAC)](/ja/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) を参照してください。

## 関連情報

- Wikipedia 上の [PAC](https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7%E8%87%AA%E5%8B%95%E8%A8%AD%E5%AE%9A)
- MDN 上の [プロキシー自動構成ファイル (PAC)](/ja/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
