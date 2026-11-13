---
title: マッチパターン
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

マッチパターンは URL のグループを指定する方法です。マッチパターンはいくつかの URL に一致します。マッチパターンは WebExtensions API を使う拡張機能向けに、いくつかの場所で使用されます。特に[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)をロードする文書を指定するときや、[`webRequest`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) リスナーを追加する URL を指定する時に使用します。

マッチパターンを使用する API は通常マッチパターンのリストを受け取り、URL がパターンのいずれかに一致する場合は適切なアクションを実行します。たとえば manifest.json 内の [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) キーを参照してください。

## マッチパターンの構造

> [!NOTE]
> ブラウザーによっては未対応のスキームがあります。
> 詳しくは[ブラウザー互換性一覧表](#ブラウザーの互換性)を見てください。

すべてのマッチパターンは文字列で指定します。特別な値 [`<all_urls>`](#all_urls) を除き、マッチパターンは 3 つの部分から成り立っています。 _scheme_, _host_, _path_ です。 scheme と host の間は `://` で句切られます。

```plain
<scheme>://<host><path>
```

### scheme

_scheme_ 成分は 2 つの形式のうち、どちらかを指定します。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">形式</th>
      <th scope="col">一致するもの</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>
        "http" か "https" のみ、一部のブラウザーでは <a href="/ja/docs/Web/API/WebSockets_API">"ws" と "wss"</a> も
      </td>
    </tr>
    <tr>
      <td>
        <code>http</code>, <code>https</code>, <code>ws</code>,
        <code>wss</code>, <code>ftp</code>, <code>data</code>,
        <code>file</code>, <code>(chrome-)extension</code> のうちどれか 1 つ
      </td>
      <td>指定したスキームのみ</td>
    </tr>
  </tbody>
</table>

### host

_host_ 成分は以下の形式のうちどれか 1 つを取ります。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">形式</th>
      <th scope="col">一致するもの</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>すべてのホスト。</td>
    </tr>
    <tr>
      <td><code>*.</code> に続くホスト名の一部分。オプションでポート番号を含む。</td>
      <td>指定されたホスト（とポート）およびそのサブドメインすべて。</td>
    </tr>
    <tr>
      <td>ワイルドカードを含まない完全なホスト名。オプションでポート番号を含む。</td>
      <td>ホスト名（とポート番号）のみ。</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Firefox では、([Firefox のバグ 1362809](https://bugzil.la/1362809)) および ([Firefox のバグ 1468162](https://bugzil.la/1468162)) の影響により、ポート番号の指定には対応していません。

_host_ がオプションとなるのは、_scheme_ が "file" の場合に限ります。

ワイルドカードは先頭でのみ使用できる点に注意してください。

### path

_path_ 成分は、必ず `/` で始まる必要があります。

その後、`*` ワイルドカードと、URL パスまたはクエリー文字列で許可されている任意の文字の任意の組み合わせを含むことができます。_host_ とは異なり、_path_ 成分では、`*` ワイルドカードを中央または末尾に含めることができ、また `*` ワイルドカードは複数回出現する可能性があります。

_path_ の値は、URL パスに [URL クエリー文字列](https://ja.wikipedia.org/wiki/クエリ文字列)を加えた文字列と一致します。これには、URL にクエリー文字列が含まれている場合、その 2 つの間の `?` も含まれます。たとえば、URL パスが `foo.bar` で終わる任意のドメインの URL に一致させたい場合は、`["*://*/*foo.bar", "*://*/*foo.bar?*"]` のようなマッチパターンの配列を使用する必要があります。単に `bar*` とするのではなく、`?*` が必要なのは、末尾の `*` が URL パスの一部ではなく、URL クエリー文字列に適用されるように固定するためです。

[URL フラグメント識別子](https://en.wikipedia.org/wiki/Fragment_identifier)も、その前にある `#` も、_path_ の一部とは見なされず、パターンマッチングの際には無視されます。`#` を含むマッチパターンは、どの URL に対しても一致しません。

### \<all_urls>

特殊な値である `<all_urls>` は、サポートしているすべての scheme の URL（ "http", "https", "file", "ftp", "app" ）に一致します。

## 例

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">パターン</th>
      <th scope="col">一致する例</th>
      <th scope="col">一致しない例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>&#x3C;all_urls></code></p>
        <p>すべての URL に一致。</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
        <p><code>ftp://files.somewhere.org/</code></p>
      </td>
      <td>
        <p><code>resource://a/b/c/</code><br />（未対応のスキーム）</p>
        <p>
          <code>ftps://files.somewhere.org/</code><br />（未対応のスキーム）
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*/*</code></p>
        <p>すべての HTTP、HTTPS、WebSocket の URL に一致します。</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
      </td>
      <td>
        <p><code>ftp://ftp.example.org/</code><br />（スキームが不一致）</p>
        <p><code>file:///a/</code><br />（パスが不一致）</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*.mozilla.org/*</code></p>
        <p>
          "mozilla.org" またはそのサブドメインのいずれかでホストされている、すべての HTTP、HTTPS、WebSocket の URL に一致します。
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>http://a.mozilla.org/</code></p>
        <p><code>http://a.b.mozilla.org/</code></p>
        <p><code>https://b.mozilla.org/path/</code></p>
        <p><code>ws://ws.mozilla.org/</code></p>
        <p><code>wss://secure.mozilla.org/something</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />（スキームが不一致）</p>
        <p><code>http://mozilla.com/</code><br />（パスが不一致）</p>
        <p><code>http://firefox.org/</code><br />（ホストが不一致）</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://mozilla.org/</code></p>
        <p>
          正確に "mozilla.org/" でホストされているすべての HTTP、HTTPS、WebSocket URL に一致します。
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>ws://mozilla.org/</code></p>
        <p><code>wss://mozilla.org/</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />（スキームが不一致）</p>
        <p><code>http://a.mozilla.org/</code><br />（パスが不一致）</p>
        <p><code>http://mozilla.org/a</code><br />（パスが不一致）</p>
      </td>
    </tr>
    <tr>
    <tr>
      <td>
        <p><code>https://mozilla.org:8080/</code></p>
        <p>
          ポート 8080 の "mozilla.org/" でホストされているすべての HTTPS URL に一致させます。
          注：ポートの設定は Chrome では対応していますが、Firefox では対応していません。
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org:8080/</code></p>
      </td>
      <td>
        <p><code>http://a.mozilla.org/</code><br />（ホストが不一致）</p>
        <p><code>http://mozilla.org:8081</code><br />（ホストが不一致）</p>
      </td>
    </tr>
      <td>
        <p><code>ftp://mozilla.org/</code></p>
        <p>Match only "ftp://mozilla.org/".</p>
      </td>
      <td><code>ftp://mozilla.org</code></td>
      <td>
        <p><code>http://mozilla.org/</code><br />（スキームが不一致）</p>
        <p><code>ftp://sub.mozilla.org/</code><br />（パスが不一致）</p>
        <p><code>ftp://mozilla.org/path</code><br />（パスが不一致）</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path</code></p>
        <p>パスが "path" である、任意のホスト上の HTTPS URL に一致します。</p>
      </td>
      <td>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://a.mozilla.org/path</code></p>
        <p><code>https://something.com/path</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />（スキームが不一致）</p>
        <p><code>https://mozilla.org/path/</code><br />（パスが不一致）</p>
        <p><code>https://mozilla.org/a</code><br />（パスが不一致）</p>
        <p><code>https://mozilla.org/</code><br />（パスが不一致）</p>
        <p>
          <code>https://mozilla.org/path?foo=1</code><br />（URL クエリー文字列があるためパスが不一致）
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path/</code></p>
        <p>
          任意のホスト上の、パスが "path/" であり、URL クエリー文字列を含まない HTTPS URL に一致させます。
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/path/</code></p>
        <p><code>https://a.mozilla.org/path/</code></p>
        <p><code>https://something.com/path</code>/</p>
      </td>
      <td>
        <p><code>http://mozilla.org/path/</code><br />（スキームが不一致）</p>
        <p><code>https://mozilla.org/path</code><br />（パスが不一致）</p>
        <p><code>https://mozilla.org/a</code><br />（パスが不一致）</p>
        <p><code>https://mozilla.org/</code><br />（パスが不一致）</p>
        <p>
          <code>https://mozilla.org/path/?foo=1</code
          ><br />（URL クエリー文字列があるためパスが不一致）
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*</code></p>
        <p>
          "mozilla.org" に任意の URL パスと URL クエリー文字列が付いた HTTPS URL 飲みに一致します。
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/</code></p>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://mozilla.org/another</code></p>
        <p><code>https://mozilla.org/path/to/doc</code></p>
        <p><code>https://mozilla.org/path/to/doc?foo=1</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />（スキームが不一致）</p>
        <p><code>https://mozilla.com/path</code><br />（パスが不一致）</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p>この URL、またはこの URL に任意の URL フラグメントが付いたもののみ一致します。</p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/a/b/c/#section1</code></p>
      </td>
      <td>その他のものすべて。</td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*/b/*/</code></p>
        <p>
          "mozilla.org" でホストされているHTTPS URLのうち、パスのどこかに "b" という部分が含まれるものに一致します。クエリー文字列を含む URL についても、その文字列が <code>/</code> で終わる場合は一致します。
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/d/b/f/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/#section1</code></p>
        <p><code>https://mozilla.org/a/b/c/d/?foo=/</code></p>
        <p>
          <code
            >https://mozilla.org/a?foo=21314&#x26;bar=/b/&#x26;extra=c/</code
          >
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/b/*/</code><br />（パスが不一致）</p>
        <p><code>https://mozilla.org/a/b/</code><br />（パスが不一致）</p>
        <p>
          <code>https://mozilla.org/a/b/c/d/?foo=bar</code><br />（URL クエリー文字列があるためパスが不一致）
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>file:///blah/*</code></p>
        <p>パスが "blah" で始まる任意のファイル URL に一致します。</p>
      </td>
      <td>
        <p><code>file:///blah/</code></p>
        <p><code>file:///blah/bleh</code></p>
      </td>
      <td><code>file:///bleh/</code><br />（パスが不一致）</td>
    </tr>
  </tbody>
</table>

### 無効なマッチパターン

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">パターン</th>
      <th scope="col">問題</th>
      <th scope="col">理由</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>resource://path/</code></td>
      <td>無効</td>
      <td>未対応のスキーム。</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org</code></td>
      <td>無効</td>
      <td>パスがない。</td>
    </tr>
    <tr>
      <td><code>https://www.mozilla.org/#section1</code></td>
      <td>不一致</td>
      <td>参照フラグメントを含みます。パターンと照合される URL からは、照合の前に参照フラグメントがすべて削除されます。</td>
    </tr>
    <tr>
      <td><code>https://mozilla.*.org/</code></td>
      <td>無効</td>
      <td>ホスト名の "*" は先頭に配置する必要があります。</td>
    </tr>
    <tr>
      <td><code>https://*zilla.org/</code></td>
      <td>無効</td>
      <td>ホスト名の "*" は、単独で指定するか、その後に "." が続く必要があります。</td>
    </tr>
    <tr>
      <td><code>http*://mozilla.org/</code></td>
      <td>無効</td>
      <td>スキーム内の "*" は、その文字のみである必要があります。</td>
    </tr>
    <tr>
      <td><code>*://*</code></td>
      <td>無効</td>
      <td>空のパス: <code>*://*/*</code> であるべき。</td>
    </tr>
    <tr>
      <td><code>file://*</code></td>
      <td>無効</td>
      <td>空のパス: <code>file:///*</code> であるべき。 Chrome では、<code>host_permissions</code> で宣言された場合、<code>file://*</code> が受け入れられ、この項目は自動的に <code>file:///*</code> に修正されます。</td>
    </tr>
  </tbody>
</table>

## ブラウザーの互換性

{{Compat}}
