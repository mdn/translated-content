---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
---

{{AddonSidebar}}

拡張された [Proxy Auto-Configuration (PAC) file](/ja/Add-ons/WebExtensions/API/proxy#PAC_file_specification) (これはウェブのリクエストをプロキシ化するポリシーを実装します) を実装するのにプロキシ API を使います。この実装は標準の PAC 設計といくつかそれていて、なぜなら PAC ファイルのデファクト仕様は 1995 年頃の初期実装から変えられてないためです。仕様を維持している標準化団体はありません。

Google Chrome では [同じく"proxy"という拡張機能 API](https://developer.chrome.com/extensions/proxy) が提供されていて、その機能はこの API と似ていて、拡張機能はプロキシポリシーを使うことができます。しかし、Chrome API の設計はこの API とまったく違います。Chrome の API では拡張機能は PAC ファイルを定義できて、明示的なプロキシルールも定義できます。このため拡張機能 PAC ファイルも使用できて、この API は PAC ファイルアプローチのみをサポートします。この API は Chrome `proxy` API と互換性がないため、この API は `browser` 名前空間のみで利用できます。

この API を使うには、"proxy" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)が必要です。

## PAC ファイルと通信する

PAC ファイルと拡張機能のバックグラウンドページ(やその他の権限つきページ、ポップアップページのようなもの)とでメッセージを交換できて、その手段は [`runtime.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) と [`runtime.onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)。

PAC ファイルにメッセージを送るには、`toProxyScript` オプションをセットしなければなりません:

```js
// background.js

// Log any messages from the proxy.
browser.runtime.onMessage.addListener((message, sender) => {
  if (sender.url === browser.extension.getURL(proxyScriptURL)) {
    console.log(message);
  }
});

let messageToProxy = {
  enabled: true,
  foo: "A string",
  bar: 1234,
};

browser.runtime.sendMessage(messageToProxy, { toProxyScript: true });
```

```js
// pac.js

browser.runtime.onMessage.addListener((message) => {
  if (message.enabled) {
    browser.runtime.sendMessage("I'm enabled!");
  }
});
```

## PAC ファイル仕様

The basic PAC file syntax is described in the [PAC documentation](</ja/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file>), but the implementation used by the proxy API differs from standard PAC design in several ways, which are described in this section.

### FindProxyForURL() return value

The standard `FindProxyForURL()` [returns a string](/ja/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_%28PAC%29_file#Return_value_format). In Firefox 55 and 56, the PAC file used with the proxy API also returns a string. In Firefox 55 _only_, you must pass an argument to the "DIRECT" return value, even though it doesn't need an argument.

From Firefox 57 onwards, `FindProxyForURL()` may still return a string, but may alternatively (and preferably) return an array of objects. Each object has the following properties:

- `type`
  - : String. This must be one of: "http"|"https|"socks4"|"socks"|"direct". "socks" refers to the SOCKS5 protocol.
- `host`
  - : String. Hostname for the proxy to use.
- `port`
  - : String. Port for the proxy.
- `username` {{optional_inline}}
  - : String. Username for the proxy. This is usable with "socks". For HTTP proxy authorizations, use {{WebExtAPIRef("webRequest.onAuthRequired")}}.
- `password` {{optional_inline}}
  - : String. Password for the proxy. This is usable with "socks". For HTTP proxy authorizations, use {{WebExtAPIRef("webRequest.onAuthRequired")}}.
- `proxyDNS` {{optional_inline}}
  - : Boolean. If true, the proxy server is used to resolve certain DNS queries (only usable with "socks4" and "socks"). Defaults to `false`.
- `failoverTimeout` {{optional_inline}}
  - : Integer. Number of seconds before timing out and trying the next proxy in the array. Defaults to 1.

例えば、:

```js
const proxySpecification = [
  {
    type: "socks",
    host: "foo.com",
    port: 1080,
    proxyDNS: true,
    failoverTimeout: 5,
  },
  {
    type: "socks",
    host: "bar.com",
    port: 1060,
  },
];
```

The first proxy in the array will be tried first. If it does not respond in `failoverTimeout` seconds, the next will be tried, until the end of the array is reached.

### PAC ファイル環境

The global helper functions usually available for PAC files ([`isPlainHostName()`](</ja/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file#isPlainHostName()_2>), [`dnsDomainIs()`](</ja/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file#dnsDomainIs()>), and so on) are not available.

Code running in the PAC file does not get access to:

- any DOM functions (例えば、 [window](/ja/docs/Web/API/Window) or any of its properties)
- any WebExtension APIs except [`runtime.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) and [`runtime.onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- the [console API](/ja/docs/Web/API/Console) - to log messages from a PAC, send a message to the background script:

```js
//  pac.js

// send the log message to the background script
browser.runtime.sendMessage(`Proxy-blocker: blocked ${url}`);
```

```js
// background-script.js

function handleMessage(message, sender) {
  // only handle messages from the proxy script
  if (sender.url != browser.extension.getURL(proxyScriptURL)) {
    return;
  }
  console.log(message);
}

browser.runtime.onMessage.addListener(handleMessage);
```

## 関数

- {{WebExtAPIRef("proxy.register()")}}
  - : 所与のプロキシスクリプトを登録する
- {{WebExtAPIRef("proxy.unregister()")}}
  - : プロキシスクリプトの登録を取り消す。

## イベント

- {{WebExtAPIRef("proxy.onProxyError")}}
  - : プロキシスクリプト実行している際にシステムがエラーに遭遇した時に発火します。

## ブラウザーの互換性

{{Compat("webextensions.api.proxy")}}

{{WebExtExamples("h2")}}

> **メモ:** Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
