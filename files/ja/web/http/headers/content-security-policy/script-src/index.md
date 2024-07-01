---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: 285028948cafb37cf54df2576a1a044b70102ed8
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`script-src`** ディレクティブは、 JavaScript の情報なソースを指定します。これは {{HTMLElement("script")}} 要素の中に直接読み込まれる URL だけでなく、インラインのスクリプトイベントハンドラー (`onclick`) やスクリプト実行のトリガーとなりうる [XSLT スタイルシート](/ja/docs/Web/XSLT)のようなものも含まれます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは <code>default-src</code> ディレクティブを探します。
      </td>
    </tr>
  </tbody>
</table>

## 構文

`script-src` ポリシーには、 1 つまたは複数のソースが許可されています。

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

## 例

## 信頼できないドメインからのリソースをブロック

この CSP ヘッダーがある場合、`https://example.com` からのスクリプトのみを許可します。

```http
Content-Security-Policy: script-src https://example.com/
```

以下のスクリプトはブロックされ、読み込みや実行が行われません。

```html
<script src="https://not-example.com/js/library.js"></script>
```

なお、インラインのイベントハンドラーも同様にブロックされます。

```html
<button id="btn" onclick="doSomething()"></button>
```

これを {{domxref("EventTarget.addEventListener", "addEventListener")}} の呼び出しに置き換えてください。

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

インラインイベントハンドラーを置き換えることができない場合、 `'unsafe-hashes'` ソース式を使用してイベントハンドラーを使用することができます。
詳しい情報は[安全ではないハッシュ](#安全ではないハッシュ)を参照してください。

### 安全ではないインラインスクリプト

> **メモ:**
> インラインスタイルとインラインスクリプトを禁止することは、CSP が提供するセキュリティ上の最大の利点の一つです。
> どうしても使用しなければならない場合は、それらを許可する仕組みがいくつかあります。
> ハッシュはインラインのスクリプトやスタイルに適用されますが、イベントハンドラーには適用されません。
> 詳しい情報は[安全ではないハッシュ](#安全ではないハッシュ)を参照してください。

インラインのスクリプトやスタイルを許可するために `'unsafe-inline'` や、インラインブロックに一致するノンスソースまたはハッシュソースを指定することができます。
以下のコンテンツセキュリティポリシーでは、インラインの {{HTMLElement("script")}} 要素はすべて許可されます。

```http
Content-Security-Policy: script-src 'unsafe-inline';
```

以下の {{HTMLElement("script")}} 要素は、ポリシーによって許可されます。

```html
<script>
  const inline = 1;
  // …
</script>
```

すべてのインラインスクリプトを許可することは、セキュリティ上のリスクがあると考えられるので、代わりに nonce-source または hash-source を使用することが推奨されます。
nonce-source でインラインスクリプトとスタイルを許可するには、ランダムな値を生成して、それをポリシーに含める必要があります。

```http
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

同じノンスを {{HTMLElement("script")}} 要素に指定する必要があります。

```html
<script nonce="2726c7f26c">
  const inline = 1;
  // …
</script>
```

他にも、インラインスクリプトからハッシュを生成することができます。 CSP では sha256, sha384, sha512 に対応しています。

```http
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

ハッシュを生成するとき、 {{HTMLElement("script")}} タグを含めないようにし、大文字小文字と、ホワイトスペース、特に前後のホワイトスペースに注意してください。

```html
<script>
  const inline = 1;
</script>
```

### 安全ではないハッシュ

`script-src 'sha256-{HASHED_INLINE_SCRIPT}'` のようなハッシュを持つインラインリソースに対するポリシーは、そのハッシュによってスクリプトとスタイルを許可しますが、イベントハンドラーは許可しません。

```html
<!-- Allowed by CSP: script-src 'sha256-{HASHED_INLINE_SCRIPT}' -->
<script>
  const inline = 1;
</script>

<!-- CSP: script-src 'sha256-{HASHED_EVENT_HANDLER}'
      will not allow this event handler -->
<button onclick="myScript()">Submit</button>
```

`'unsafe-inline'` を許可する代わりに、コードが同等の {{domxref("EventTarget.addEventListener", "addEventListener")}} 呼び出しに更新できない場合は `'unsafe-hashes'` ソース表現を使用することができます。
以下のインラインイベントハンドラーを記載した HTML ページが指定されたとします。

```html
<!-- I wan't to use addEventListener, but I can't :( -->
<button onclick="myScript()">Submit</button>
```

以下の CSP ヘッダーがスクリプトの実行を許可します。

```http
Content-Security-Policy:  script-src 'unsafe-hashes' 'sha256-{HASHED_EVENT_HANDLER}'
```

### 安全ではない eval 式

`'unsafe-eval'` ソース式は、文字列からコードを生成するいくつかのスクリプト実行メソッドを制御します。
もしページに CSP ヘッダーがあり、 `'unsafe-eval'` が `script-src` ディレクティブで指定されていなかった場合、以下のメソッドはブロックされて何の効果も現れません。

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- メソッドの文字列リテラルを `setTimeout("alert(\"Hello World!\");", 500);` のように渡した場合

  - {{domxref("setTimeout()")}}
  - {{domxref("setInterval()")}}
  - {{domxref("window.setImmediate")}}

- `window.execScript()` {{non-standard_inline}} (IE < 11 のみ)

### 安全ではない WebAssembly の実行

`'wasm-unsafe-eval'` ソース式は WebAssembly の実行を制御します。
ページが CSP ヘッダーを保有し、`script-src` ディレクティブで `'wasm-unsafe-eval'` が指定されていない場合、WebAssembly はそのページでの読み込みと実行をブロックされます。

`'wasm-unsafe-eval'` ソース表現は `'unsafe-eval'` よりも詳細で、WebAssembly のコンパイラー（とインスタンス化）と、例えば JavaScript で `eval` 処理を使用することの両方を許可しています。
`'unsafe-eval'` ソースキーワードが使用された場合、CSP ポリシーの `'wasm-unsafe-eval'` が使用されると、このキーワードが上書きされます。

```http
Content-Security-Policy: script-src 'wasm-unsafe-eval'
```

### strict-dynamic

`'strict-dynamic'` ソース式は、マークアップ中のスクリプトに明示的に与えられた信頼が、ノンスやハッシュを伴って、そのルートスクリプトによって読み込まれるすべてのスクリプトに伝搬されることを指定します。同時に、 `'self'` や `'unsafe-inline'` のようなホワイトリストやソース表現は無視されます。

例えば、 `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.com/` のようなポリシーでは、 `<script nonce="R4nd0m" src="https://example.com/loader.js">` を指定したルートスクリプトの読み込みを許可し、 `loader.js` で読み込まれたすべてのスクリプトにその信頼性を伝播させますが、 `https://allowlisted.com/` からのスクリプトの読み込みは、ノンスを伴っているか、信頼されたスクリプトから読み込まれたものでない限り、許可しません。

```http
Content-Security-Policy: script-src 'strict-dynamic' 'nonce-someNonce'
```

または

```http
Content-Security-Policy: script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

ユーザーエージェントのスニッフィングを必要とせず、後方互換性のある方法として、 `strict-dynamic` を指定することができます。
以下のポリシー、

```http
Content-Security-Policy: script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

は、 CSP1 に対応したブラウザーでは `'unsafe-inline' https:` のように動作し、 CSP2 に対応したブラウザーでは `https: 'nonce-abcdefg'` のように、CSP3 に対応したブラウザーでは `'nonce-abcdefg' 'strict-dynamic'` のように動作します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("Sources")}}
- {{HTMLElement("script")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
