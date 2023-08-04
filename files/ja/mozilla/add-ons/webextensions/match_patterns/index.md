---
title: マッチパターン
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
---

{{AddonSidebar}}

マッチパターンは URL のグループを指定する方法です。マッチパターンはいくつかの URL にマッチします。マッチパターンは WebExtensions API を使う拡張機能向けに、いくつかの場所で使用されます。特に[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)をロードする文書を指定するときや、[`webRequest`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) リスナーを追加する URL を指定する時に使用します。

マッチパターンを使用する API は通常マッチパターンのリストを受け取り、URL がパターンのいずれかにマッチする場合は適切なアクションを実行します。たとえば manifest.json 内の [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) キーを参照してください。

## マッチパターンの構造

> **メモ:** ブラウザーによってはサポートしていないスキームがあります。
> 詳しくは[ブラウザー互換性テーブル](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#Browser_compatibility)を見てください。

すべてのマッチパターンは文字列で指定します。特別な値 [`<all_urls>`](/ja/Add-ons/WebExtensions/Match_patterns#%3Call_urls%3E) を除き、マッチパターンは３つの部分から成り立っています。 _scheme_, _host_, _path_ です。 scheme と host の間は `://` で句切られます。

```
<scheme>://<host><path>
```

### scheme

_scheme_ 部は２つの形式のうち、どちらかを指定します。

| 形式                                                                          | マッチするもの                                                                                 |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `*`                                                                           | "http"か"https"のみ、いくつかのブラウザーでは ["ws" と "wss"](/ja/docs/Web/API/WebSockets_API) |
| `http`, `https`, `ws`, `wss`, `ftp`, `ftps`, `data`, `file` のうちどれか 1 つ | 指定したスキームのみ                                                                           |

### host

*host*部は３つ形式のうちどれか 1 つを取ります。

| 形式                               | マッチするもの                     |
| ---------------------------------- | ---------------------------------- |
| `*`                                | すべてのホスト                     |
| `*.` に続くホスト名の一部分        | 指定したホストと任意のサブドメイン |
| ワイルドカード無しの完全なホスト名 | 指定したホストのみ                 |

*host 部*にはポート番号は入りません。

"file"スキームだけは、*host*部はオプションです。

ワイルドカード "\*" は _host_ の最初のみに適用できることに注意してください。

### path

パス部は `/` で開始しなければいけません。

その後、ワイルドカード `*` と、URL パスとして許可される文字とを組み合わせたものが続けて入るかもしれません。ホスト部と異なり、パス部はワイルドカード `*` を途中や終わりに含むことができて、さらに 2 つ以上の `*` を含められます。

_path_ の値は、URL パスに [URL クエリーストリング](https://en.wikipedia.org/wiki/Query_string)を加えた文字列と一致します。クエリーストリングがある場合、それらの間に `?` を含んでいます。例えば、`foo.bar` で終わる URL パスのあらゆるドメインに URL マッチしたい場合、マッチパターンは `['*://*/*foo.bar', '*://*/*foo.bar?*']`です。単に `bar*` ではなく `?*` は必要で、最後の `*` は URL クエリーストリングにも、URL パスの部分でないものにも適用するためです。

[URL フラグメント識別子](https://en.wikipedia.org/wiki/Fragment_identifier)や、`#` の後についているものは、_path_ とみなされません。

> **メモ:** path パターン文字列にポート番号を含めるべきではありません。`http://localhost:1234/*` のようにポート番号を追加するとマッチパターンは無視されます。しかし、`http://localhost:1234` は `http://localhost/*` にマッチします。

### \<all_urls>

特殊な値である `<all_urls>` は、サポートしているすべての scheme の URL（ "http", "https", "file", "ftp", "app" ）にマッチします。

## 例

| パターン                                                                                                                                                         | マッチする例                                                                                                                                                                                                             | マッチしない例                                                                                                                                                                                                                                                   |     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| `<all_urls>`すべての URL にマッチ                                                                                                                                | `http://example.org/` `https://a.org/some/path/` `ws://sockets.somewhere.org/` `wss://ws.example.com/stuff/` `ftp://files.somewhere.org/` `ftps://files.somewhere.org/`                                                  | `resource://a/b/c/` (サポートされていないスキーム)                                                                                                                                                                                                               |     |
| `*://*/*`すべての HTTP, HTTPS, WebSocket URL にマッチ                                                                                                            | `http://example.org/` `https://a.org/some/path/` `ws://sockets.somewhere.org/` `wss://ws.example.com/stuff/`                                                                                                             | `ftp://ftp.example.org/` (マッチしないスキーム)`ftps://ftp.example.org/` (マッチしないスキーム)`file:///a/` (マッチしないスキーム)                                                                                                                               |     |
| `*://*.mozilla.org/*`"mozilla.org" かそのサブドメインでホストされている HTTP, HTTPS, WebSocket の URL にマッチ                                                   | `http://mozilla.org/` `https://mozilla.org/` `http://a.mozilla.org/` `http://a.b.mozilla.org/` `https://b.mozilla.org/path/` `ws://ws.mozilla.org/` `wss://secure.mozilla.org/something`                                 | `ftp://mozilla.org/` (マッチしないスキーム)`http://mozilla.com/` (マッチしないホスト)`http://firefox.org/` (マッチしないホスト)                                                                                                                                  |     |
| `*://mozilla.org/`HTTP や HTTPS や WebSocket の"mozilla.org/"のホストのみマッチ                                                                                  | `http://mozilla.org/` `https://mozilla.org/` `ws://mozilla.org/` `wss://mozilla.org/`                                                                                                                                    | `ftp://mozilla.org/` (マッチしないスキーム)`http://a.mozilla.org/` (マッチしないホスト)`http://mozilla.org/a` (マッチしないパス)                                                                                                                                 |     |
| `ftp://mozilla.org/`"ftp\://mozilla.org/"のみマッチ                                                                                                              | `ftp://mozilla.org`                                                                                                                                                                                                      | `http://mozilla.org/` (マッチしないスキーム)`ftp://sub.mozilla.org/` (マッチしないホスト)`ftp://mozilla.org/path` (マッチしないパス)                                                                                                                             |     |
| `https://*/path`HTTPS URL で path が "path"のホストのみマッチ                                                                                                    | `https://mozilla.org/path` `https://a.mozilla.org/path` `https://something.com/path`                                                                                                                                     | `http://mozilla.org/path` (マッチしないスキーム)`https://mozilla.org/path/` (マッチしないパス)`https://mozilla.org/a` (マッチしないパス)`https://mozilla.org/` (マッチしないパス)`https://mozilla.org/path?foo=1` (URL クエリーストリングによりマッチしないパス) |     |
| `https://*/path/`あらゆるホスト上の HTTPS URL で、パスが "path/" で URL にクエリーストリングのないものにマッチ                                                   | `https://mozilla.org/path/` `https://a.mozilla.org/path/` `https://something.com/path`/                                                                                                                                  | `http://mozilla.org/path/` (マッチしないスキーム)`https://mozilla.org/path` (マッチしないパス)`https://mozilla.org/a` (マッチしないパス)`https://mozilla.org/` (マッチしないパス)`https://mozilla.org/path?foo=1` (URL クエリーストリングによりマッチしないパス) |     |
| `https://mozilla.org/*`HTTPS URL のみにマッチで、"mozilla.org"だけ、パスやクエリーストリングは問わない                                                           | `https://mozilla.org/` `https://mozilla.org/path` `https://mozilla.org/another` `https://mozilla.org/path/to/doc` `https://mozilla.org/path/to/doc?foo=1`                                                                | `http://mozilla.org/path` (マッチしないスキーム)`https://mozilla.com/path` (マッチしないホスト)                                                                                                                                                                  |     |
| `https://mozilla.org/a/b/c/`この URL 、あるいはフラグメント付きのこの URL にのみマッチ                                                                           | `https://mozilla.org/a/b/c/` `https://mozilla.org/a/b/c/#section1`                                                                                                                                                       | これ以外のすべて                                                                                                                                                                                                                                                 |     |
| `https://mozilla.org/*/b/*/`"mozilla.org"でホストされた HTTPS URL で、パスは中間のどこかに "b" を含むもの。クエリーストリングが / で終了していればそれにもマッチ | `https://mozilla.org/a/b/c/` `https://mozilla.org/d/b/f/` `https://mozilla.org/a/b/c/d/` `https://mozilla.org/a/b/c/d/#section1` `https://mozilla.org/a/b/c/d/?foo=/` `https://mozilla.org/a?foo=21314&bar=/b/&extra=c/` | `https://mozilla.org/b/*/` (マッチしないパス)`https://mozilla.org/a/b/` (マッチしないパス)`https://mozilla.org/a/b/c/d/?foo=bar` (URL クエリーストリングによりマッチしないパス)                                                                                  |     |
| `file:///blah/*`FILE URL でパスが "blah" で始まるもの                                                                                                            | `file:///blah/` `file://blah/bleh`                                                                                                                                                                                       | `file:///bleh/` (マッチしないパス)                                                                                                                                                                                                                               |     |

### 無効なマッチパターン

| 無効なパターン           | 理由                                                                |     |
| ------------------------ | ------------------------------------------------------------------- | --- |
| `resource://path/`       | サポートされていないスキーム。                                      |     |
| `https://mozilla.org`    | パスがない。                                                        |     |
| `https://mozilla.*.org/` | "\*" はホストの先頭に使用する必要があります。                       |     |
| `https://*zilla.org/`    | ホスト内の "\*" は唯一の文字であるか、"."が続かなければいけません。 |     |
| `http*://mozilla.org/`   | スキーム内の "\*" は唯一の文字であるべきです。                      |     |
| `*://*`                  | パスが空: "`*://*/*`"であるべき。                                   |     |
| `file://*`               | パスが空: "`file:///*`"であるべき 。                                |     |

## ブラウザーの互換性

### scheme

{{Compat("webextensions.match_patterns.scheme",10)}}
