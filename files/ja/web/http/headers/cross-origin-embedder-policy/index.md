---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
---

{{HTTPSidebar}}

HTTP の **`Cross-Origin-Embedder-Policy`** (COEP) レスポンスヘッダーは、（[CORP](</ja/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>) または [CORS](/ja/docs/Web/HTTP/CORS) を使用して）文書に明示的に許可を与えていない外部オリジンのリソースが、文書に読み込まれることを防止するものです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Cross-Origin-Embedder-Policy: unsafe-none | require-corp
```

### ディレクティブ

- `unsafe-none`
  - : これが既定値です。 CORS プロトコルや {{HTTPHeader("Cross-Origin-Resource-Policy")}} ヘッダーで明示的に許可していなくても、文書が外部オリジンのリソースを取得することを許可します。
- `require-corp`
  - : 文書は、同じオリジンからのリソース、または他のオリジンからロード可能であると明示的にマークされたリソースのみをロードすることができます。
    外部オリジンのリソースが CORS に対応している場合、 COEP でブロックされずに読み込むには、[`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) 属性や {{HTTPHeader("Cross-Origin-Resource-Policy")}} ヘッダーを使用する必要があります。

## 例

### 一部の機能はクロスオリジン分離に依存する

{{jsxref("SharedArrayBuffer")}} オブジェクトや {{domxref("Performance.now()")}} のような特定の機能には、文書に `require-corp` 値を設定した COEP ヘッダーがある場合のみ、スロットルなしタイマーを使用してアクセスすることができます。

```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

また、 {{HTTPHeader("Cross-Origin-Opener-Policy")}} ヘッダーも同様に設定する必要がありますので、参照してください。

クロスオリジンの分離に成功したかどうかを確認するには、ウィンドウとワーカーのコンテキストで利用可能な {{domxref("crossOriginIsolated")}} プロパティで検査してください。

```js
if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

### CORS による COEP の遮断の回避

`require-corp` を使用して COEP を有効にし、読み込む必要があるクロスオリジンリソースがある場合、それは [CORS](/ja/docs/Web/HTTP/CORS) に対応する必要があり、 COEP によるブロックを回避するには、他のオリジンからロード可能であると明示的にマークする必要があります。例えば、サードパーティーサイトから読み込むこの画像には、[`crossorigin`](/ja/docs/Web/HTML/Attributes/crossorigin) 属性を使用することができます。

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{httpheader("Cross-Origin-Opener-Policy")}}
