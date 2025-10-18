---
title: PAC
slug: Glossary/PAC
page-type: glossary-definition
sidebar: glossarysidebar
---

Proxy Auto-Configuration ファイル (**PAC ファイル**) は、`FindProxyForURL()` 関数を含むファイルです。ブラウザーはこの関数を使用して、どのリクエスト (HTTP, HTTPS, FTP 等) を直接宛先に送信するか、または Web プロキシーサーバーを経由する必要があるかを判断します。

```js
function FindProxyForURL(url, host) {
  // …
}

ret = FindProxyForURL(url, host);
```

詳細な使用方法や PAC ファイルの作成方法については、[プロキシー自動構成ファイル (PAC)](/ja/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) を参照してください。

## See also

- [PAC](https://en.wikipedia.org/wiki/Proxy_auto-config) on Wikipedia
- [Proxy Auto-Configuration file](/en-US/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) on MDN
