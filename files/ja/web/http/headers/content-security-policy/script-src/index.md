---
title: 'CSP: script-src'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) の **`script-src`** ディレクティブは、 JavaScript の情報なソースを指定します。これは {{HTMLElement("script")}} 要素の中に直接読み込まれる URL だけでなく、インラインのスクリプトイベントハンドラー (`onclick`) やスクリプト実行のトリガーとなりうる [XSLT スタイルシート](/ja/docs/Web/XSLT)のようなものも含まれます。

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

## 違反例

この CSP ヘッダーがある場合、

```http
Content-Security-Policy: script-src https://example.com/
```

以下のスクリプトはブロックされ、読み込みや実行が行われません。

```html
<script src="https://not-example.com/js/library.js"></script>
```

なお、インラインのイベントハンドラーも同様にブロックされます。

```html
<button id="btn" onclick="doSomething()">
```

これを {{domxref("EventTarget.addEventListener", "addEventListener")}} の呼び出しに置き換えてください。

```js
document.getElementById("btn").addEventListener('click', doSomething);
```

### 安全ではないインラインのスクリプト

> **メモ:** インラインスタイルとインラインスクリプトを禁止することは、 CSP が提供する最大のセキュリティ上の利点の一つです。しかし、どうしても使用しなければならない場合は、それらを許可する仕組みがいくつかあります。

インラインスクリプトとインラインのイベントハンドラーを許可するために `'unsafe-inline'` や、インラインブロックに一致するノンスソースまたはハッシュソースを指定することができます。

```
Content-Security-Policy: script-src 'unsafe-inline';
```

上記のコンテンツセキュリティポリシーは、インラインの {{HTMLElement("script")}} 要素を許可します。

```html
<script>
  var inline = 1;
</script>
```

nonce-source を使用して、特定のインラインスクリプトブロックのみ許可することができます。

```
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

同じノンスを {{HTMLElement("script")}} 要素に指定する必要があります。

```html
<script nonce="2726c7f26c">
  var inline = 1;
</script>
```

他にも、インラインスクリプトからハッシュを生成することができます。 CSP では sha256, sha384, sha512 に対応しています。

```
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

ハッシュを生成するとき、 {{HTMLElement("script")}} タグを含めないようにし、大文字小文字と、ホワイトスペース、特に前後のホワイトスペースに注意してください。

```html
<script>var inline = 1;</script>
```

### 安全ではない eval 式

`'unsafe-eval'` ソース式は、文字列からコードを生成するいくつかのスクリプト実行メソッドを制御します。もし `'unsafe-eval'` が `script-src` ディレクティブで指定されていなかった場合、以下のメソッドはブロックされて何の効果も現れません。

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Function", "Function()")}}
- メソッドの文字列リテラルを `window.setTimeout("alert(\"Hello World!\");", 500);` のように渡した場合

  - {{domxref("setTimeout()")}}
  - {{domxref("setInterval()")}}
  - {{domxref("window.setImmediate")}}

- `window.execScript()` {{non-standard_inline}} (IE < 11 のみ)

### strict-dynamic

`'strict-dynamic'` ソース式は、マークアップ中のスクリプトに明示的に与えられた信頼が、ノンスやハッシュを伴って、そのルートスクリプトによって読み込まれるすべてのスクリプトに伝搬されることを指定します。同時に、 `'self'` や `'unsafe-inline'` のようなホワイトリストやソース表現は無視されます。例えば、 `script-src 'strict-dynamic' 'nonce-R4nd0m' https://allowlisted.com/` のようなポリシーでは、 `<script nonce="R4nd0m" src="https://example.com/loader.js">` を指定したルートスクリプトの読み込みを許可し、 `loader.js` で読み込まれたすべてのスクリプトにその信頼性を伝播させますが、 `https://allowlisted.com/` からのスクリプトの読み込みは、ノンスを伴っているか、信頼されたスクリプトから読み込まれたものでない限り、許可しません。

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
- {{HTMLElement("script")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
