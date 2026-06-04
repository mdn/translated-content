---
title: proxy.settings
slug: Mozilla/Add-ons/WebExtensions/API/proxy/settings
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

{{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} オブジェクトで、ブラウザーのプロキシー設定を変更するために使用されます。

> [!NOTE]
> プロキシー設定の変更には、プライベートブラウジングウィンドウへのアクセスが必要です。これは、プロキシー設定がプライベートウィンドウと通常ウィンドウの両方に影響するためです。拡張機能がプライベートブラウジングウィンドウにアクセスできるかどうかは、ユーザーが制御できます。詳細については、[プライベートブラウジングでの拡張機能](https://support.mozilla.org/ja/kb/extensions-private-browsing) をご覧ください。拡張機能は、{{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} を使用して、シークレットウィンドウへのアクセス権があるかどうかを確認できます。拡張機能にシークレットウィンドウへのアクセス権がない場合、`proxy.settings.set()` を呼び出すと例外が発生します。

基礎となる値はオブジェクトです。このオブジェクトを設定する際、すべてのプロパティはオプションです。省略されたプロパティはすべて、それぞれのデフォルト値にリセットされます。

- `autoConfigUrl` {{optional_inline}}
  - : `string` です。プロキシーの構成に使用する URL です。
- `autoLogin` {{optional_inline}}
  - : `boolean` です。パスワードが保存されている場合、プロンプトを表示しません。デフォルト値は `false` です。
- `ftp` {{optional_inline}} {{Deprecated_Inline}}
  - : `string` です。FTP プロキシーのアドレスです。ポート番号を含めることができます。
- `http` {{optional_inline}}
  - : `string` です。HTTP プロキシーのアドレスです。ポート番号を含めることができます。
- `httpProxyAll` {{optional_inline}}
  - : `boolean` です。すべてのプロトコルに HTTP を使用します。デフォルト値は `false` です。
- `passthrough` {{optional_inline}}
  - : `string` です。プロキシーを使用しないホストをカンマ区切りで指定します。次のように指定することができます。
    - `HOST_NAME[:PORT]`。例えば `example.com` または `example.com:1234`
    - `IP_LITERAL[:PORT]`
    - `IP_LITERAL/PREFIX_LENGTH_IN_BITS`。[CIDR 記法](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)を使用します。
    - `<local>`。ピリオドを含まないすべてのホスト名に対してプロキシーをバイパスします。

    IPv6 アドレスを使用することができます。例えば `[::123]` にようにします。

    `localhost`, `127.0.0.1`, `[::1]` の各ホストはプロキシーが使われません。

- `proxyDNS` {{optional_inline}}
  - : `boolean` です。 SOCKS プロキシーを使用する際に DNS をプロキシー経由で転送するかどうか。SOCKS5 を使用する場合のデフォルト値は `true`、SOCKS4 を使用する場合は `false` になります。Firefox 128 以前では、SOCKS4 および SOCKS5 のデフォルト値は `false` でした。
- `proxyType` {{optional_inline}}
  - : `string` です。使用するプロキシーの種類です。これは "none", "autoDetect", "system", "manual", "autoConfig" のいずれかの値を取ります。デフォルト値は "system" です。
- `socks` {{optional_inline}}
  - : `string` です。SOCKS プロキシーのアドレスです。ポート番号を含めることができます。
- `socksVersion` {{optional_inline}}
  - : `integer` です。SOCKS プロキシーのバージョンです。4 または 5 です。デフォルトは 5 です。
- `ssl` {{optional_inline}}
  - : `string` です。TLS/SSL プロキシーのアドレスです。ポート番号を含めることができます。

## 例

```js
let proxySettings = {
  proxyType: "manual",
  http: "http://proxy.org:8080",
  socksVersion: 4,
  passthrough: ".example.org",
};

browser.proxy.settings.set({ value: proxySettings });
```

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat}}
