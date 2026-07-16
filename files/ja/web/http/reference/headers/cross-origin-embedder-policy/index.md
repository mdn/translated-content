---
title: Cross-Origin-Embedder-Policy (COEP) ヘッダー
short-title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Cross-Origin-Embedder-Policy`** (COEP) {{Glossary("response header", "レスポンスヘッダー")}}は、現在の文書における別なオリジンのリソースの読み込み及び埋め込みを行う場合のポリシーを構成します。

特定のリソースがサイトをまたいで埋め込み可能かどうかに関するポリシーは、`no-cors` フェッチに対する {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP) ヘッダー、または [CORS](/ja/docs/Web/HTTP/Guides/CORS) を使用して定義できます。
これらのポリシーがどちらも設定されていない場合、デフォルトで、リソースは CORP 値が `cross-origin` であるかのように文書に読み込んだり埋め込んだりできます。

**`Cross-Origin-Embedder-Policy`** を使用すると、別なサイトのリソースを現在の文書内に読み込む際に、CORP または CORS ヘッダーを設定することを要求することができます。
ポリシーをデフォルト動作のままにするか、リソースの読み込みをすることができるように設定することもできます。送信される可能性のある資格情報を削除するように設定することもできます。
このポリシーは読み込まれたリソース、および {{htmlelement("iframe")}} や内包されたフレーム内のリソースに適用されます。

> [!NOTE]
> `Cross-Origin-Embedder-Policy` は、CORP または CORS が設定されているリソースの埋め込み動作を上書きしたり影響を与えたりするものではありません。
> CORP がリソースの埋め込みを `same-origin` に制限している場合、COEP の値にかかわらず、別なオリジンのリソースが読み込まれることはありません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Cross-Origin-Embedder-Policy: unsafe-none | require-corp | credentialless
```

### ディレクティブ

- `unsafe-none`
  - : CORS プロトコルや {{HTTPHeader("Cross-Origin-Resource-Policy")}} ヘッダーで明示的に許可していなくても、文書が別なオリジンのリソースを取得することを許可します。
    これがデフォルト値です。
- `require-corp`
  - : 文書は、同じオリジンからのリソース、または別なオリジンから読み込み可能であると明示的にマークされたリソースのみを読み込むことができます。

    別なオリジンから読み込まれるリソースは、次の場合を除き COEP によってブロックされます。
    - リソースは `no-cors` モードでリクエストされ、レスポンスには {{HTTPHeader("Cross-Origin-Resource-Policy")}} ヘッダーが含まれており、これにより文書のオリジンに読み込むことができる。
    - リソースは `cors` モードでリクエストされ、リソースは CORS を対応しており、CORS によって許可されている。
      例えば、HTML では [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性を使用したり、JavaScript で [`{mode="cors"}`](/ja/docs/Web/API/RequestInit#cors) でリクエストを行うことで実現できます。

- `credentialless`
  - : 文書は、[`no-cors` モード](/ja/docs/Web/API/Request/mode)でリクエストされた別なオリジンからのリソースを、{{HTTPHeader("Cross-Origin-Resource-Policy")}} ヘッダーを介した明示的な許可を必要と**せずに**読み込むことができます。
    この場合、リクエストは資格情報なしで送信されます。リクエストではクッキーが省略され、レスポンスでは無視されます。

    他の[リクエストモード](/ja/docs/Web/API/Request/mode#cors)における別なオリジンからの読み込み動作は、[`require-corp`](#require-corp) の場合と同様です。
    例えば、`cors` モードでリクエストされた別なオリジンのリソースは、CORS に対応している（かつ許可されている）必要があります。

## 例

### 一部の機能はオリジン間分離に依存する

{{jsxref("SharedArrayBuffer")}} オブジェクトにアクセスしたり {{domxref("Performance.now()")}} を使用したりするような特定の機能は、文書が{{domxref("Window.crossOriginIsolated","オリジン間分離","","nocode")}}されている場合のみ利用できます。

これらの機能を文書内で使用するには、COEP ヘッダーを `require-corp` または `credentialless` に設定し、{{HTTPHeader("Cross-Origin-Opener-Policy")}} ヘッダーを`same-origin` に設定する必要があります。
さらに、{{HTTPHeader("Permissions-Policy/cross-origin-isolated","Permissions-Policy: cross-origin-isolated")}} によって機能がブロックされてはいけません。

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

{{domxref("Window.crossOriginIsolated")}} プロパティと {{domxref("WorkerGlobalScope.crossOriginIsolated")}} プロパティを使用すると、この機能がウィンドウまたはワーカーコンテキストでそれぞれ制限されているかどうかをチェックすることができます。

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

### CORS による COEP の遮断の回避

`require-corp` を使用して [CORS](/ja/docs/Web/HTTP/Guides/CORS) に対応している別オリジンのリソースを埋め込みたい場合、明示的に `cors` モードでリクエストを行うことを指定する必要があります。

例えば、HTML で宣言された画像を CORS に対応しているサードパーティサイトから取得する場合、[`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性を使用することで、`cors` モードでリクエストされます。

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

また、[`HTMLScriptElement.crossOrigin`](/ja/docs/Web/API/HTMLScriptElement/crossOrigin) 属性を使用するか、fetch 使用時に `{ mode: 'cors' }` を指定することで、JavaScript で CORS モードでファイルをリクエストすることができます。

一部の画像で CORS が対応していない場合、別なオリジンのサーバーからの明示的な許可なしに画像を読み込む代替手段として、COEP に `credentialless` の値を使用する方法があります。ただし、クッキーなしでリクエストを行うという代償を伴います。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{domxref("Window.crossOriginIsolated")}} および {{domxref("WorkerGlobalScope.crossOriginIsolated")}}
- [Cross Origin Opener Policy](https://web.dev/articles/why-coop-coep#coep) - _Why you need "cross-origin isolated" for powerful features_, web.dev (2020)
- [COOP and COEP explained: Artur Janc, Charlie Reis, Anne van Kesteren](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit?tab=t.0) (2020)
