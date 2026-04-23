---
title: "CSP: script-src"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/script-src
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`script-src`** ディレクティブは、 JavaScript の情報なソースを指定します。これは {{HTMLElement("script")}} 要素の中に直接読み込まれる URL だけでなく、インラインのスクリプトイベントハンドラー (`onclick`) やスクリプト実行のトリガーとなりうる [XSLT スタイルシート](/ja/docs/Web/XML/XSLT)のようなものも含まれます。

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

```http
Content-Security-Policy: script-src 'none';
Content-Security-Policy: script-src <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : この種類のリソースは読み込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、[フェッチディレクティブの構文](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#フェッチディレクティブの構文)に掲載されているソース表現のいずれかが適用できます。

## 例

### 信頼されたドメインからのリソースを許可リストに追加

この CSP ヘッダーがある場合、 `https://example.com` からのスクリプトのみを許可します。

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

### ハッシュを使用して外部スクリプトを許可リストに追加

上記で示したように、信頼されたドメインを許可することは、コードが安全に読み込まれた場所を指定するための大まかな手法です。
これは、特にサイトが多くのリソースを使用しており、信頼されたサイトが侵害されることはないと確信している場合の現実的な手法です。

代替の方法として、ファイルハッシュを使用して許可するスクリプトを指定する方法があります。
この手法を使用すると、`<script>` 要素内の外部ファイルは、 [`integrity`](/ja/docs/Web/HTML/Reference/Elements/script#integrity) 属性の有効なハッシュ値がすべて CSP ヘッダーで許可された値と一致した場合にのみ、読み込まれ実行されます。
[サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)の機能は、ダウンロードしたファイルが示すハッシュ値を持ち、変更されていないことを追加的に調べます。
これはドメインを信頼するよりも安全です。ファイルは、たとえ侵害されたサイトから読み込まれたとしても、改変されていない場合にのみ使用されるからです。
しかし、これはより粒度の細かいものであり、関連付けられたスクリプトが変更されるたびに、 CSP とスクリプト要素でハッシュ値を更新することが要求されます。
下記の CSP ヘッダーは、その手法を示しています。
SHA384 ハッシュが `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC` であるか、または SHA256 ハッシュが `fictional_value` であるスクリプトを許可します。

```http
Content-Security-Policy: script-src 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC' 'sha256-fictional_value'
```

下記の `example-framework.js` スクリプトは読み込まれるはずです。なぜなら、その `integrity` 属性のハッシュ値が CSP 内にも存在するからです（ダウンロードしたファイルに実際にそのハッシュが存在することを指定した場合は）。

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

`integrity` 属性は複数の値を持つことができ、それぞれ異なるアルゴリズムを使用して計算されたファイルのハッシュを指定することができます。
外部スクリプトが読み込まれるためには、 CSP では、属性内のすべての有効なハッシュ値が CSP の `script-src` 宣言にも指定されていることが要求されます。
したがって、下記のスクリプトは読み込まれません。なぜなら、 2 つ目のハッシュは上記 CSP ヘッダーには存在しないからです。

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC sha256-not-in-csp"
  crossorigin="anonymous"></script>
```

このルールは、有効なハッシュ値のみに適用されます。
ブラウザーがハッシュとして認識しない値は無視されるため、次のスクリプトは読み込まれるはずです。

```html
<script
  src="https://example.com/example-framework.js"
  integrity="invalid-or-unsupported-hash sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

[サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)には、ハッシュの計算と `integrity` 属性の使用に関するより多くの情報が含まれています。

### 安全ではないインラインスクリプト

> [!NOTE]
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
nonce-source を使用してインラインスクリプトとスタイル設定を許可するには、（暗号的に安全なランダムトークン生成器を使用して）ランダムなノンス値を生成し、ポリシーに記載する必要があります。
これにはメモが必要ですが、このノンス値は HTTP リクエストごとに一意である必要があるため、動的に生成する必要があります。

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
<!-- I want to use addEventListener, but I can't :( -->
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
  - {{domxref("Window.setTimeout", "setTimeout()")}}
  - {{domxref("Window.setInterval", "setInterval()")}}
  - {{domxref("Window.setImmediate", "setImmediate()")}}

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

### 投機ルールを許可

script 要素に[投機ルール](/ja/docs/Web/API/Speculation_Rules_API)を入れる場合は（[`<script type="speculationrules">`](/ja/docs/Web/HTML/Reference/Elements/script/type/speculationrules) も参照）、 `script-src` ディレクティブを `'inline-speculation-rules'` ソース、ハッシュソース、ノンスソースのいずれかと共に使用する必要があります。例を示します。

```http
Content-Security-Policy: script-src 'inline-speculation-rules'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
