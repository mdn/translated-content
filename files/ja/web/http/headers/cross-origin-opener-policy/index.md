---
title: Cross-Origin-Opener-Policy
slug: Web/HTTP/Headers/Cross-Origin-Opener-Policy
tags:
  - HTTP
  - HTTP ヘッダー
  - リファレンス
  - レスポンスヘッダー
  - ヘッダー
browser-compat: http.headers.Cross-Origin-Opener-Policy
translation_of: Web/HTTP/Headers/Cross-Origin-Opener-Policy
---
{{HTTPSidebar}}

HTTP の **`Cross-Origin-Opener-Policy`** (COOP) はレスポンスヘッダーで、最上位の文書がほかのオリジンの文書と閲覧コンテキストのグループを共有していないことを保証することができます。

COOP は文書のプロセスを分離し、潜在的な攻撃者がポップアップで文書を開いていたとしても、グローバルオブジェクトにアクセスできないようにし、 [XS-Leaks](https://github.com/xsleaks/xsleaks) と呼ばれる一連のオリジン間アタックを防止します。

COOP を持つクロスオリジン文書が新しいウィンドウで開かれた場合、開いている文書はその参照を持たず、新しいウィンドウの [`window.opener`](/ja/docs/Web/API/Window/opener) プロパティは `null` になります。これは、発信するナビゲーションにのみ影響する [`rel=noopener`](/ja/docs/Web/HTML/Link_types/noopener) よりもウィンドウへの参照をより制御することができるようになります。

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
Cross-Origin-Opener-Policy: unsafe-none
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: same-origin
```

### ディレクティブ

- `unsafe-none`
  - : これが既定値です。 opener 自体が `same-origin` または `same-origin-allow-popups` という COOP を持っていない限り、文書を opener の閲覧コンテキストグループに追加することを許可します。
- `same-origin-allow-popups`
  - : COOP を設定しないか、あるいは COOP を `unsafe-none` に設定することで分離を回避した、新しく開かれたウィンドウやタブへの参照を保持します。
- `same-origin`
  - : 閲覧コンテキストを同一オリジン文書に限定します。クロスオリジン文書は同じ閲覧コンテキストには読み込まれません。

## 例

### 一部の機能はクロスオリジン分離に依存する

{{jsxref("SharedArrayBuffer")}} オブジェクトや {{domxref("Performance.now()")}} といった非スロットルタイマーなどの特定の機能は、文書に `same-origin` 値を設定した COOP ヘッダーがある場合のみ利用可能です。

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

また、同様に設定する必要がある {{HTTPHeader("Cross-Origin-Embedder-Policy")}} ヘッダーも参照してください。

クロスオリジン分離が成功したかどうかを確認するには、ウィンドウとワーカーのコンテキストで利用可能な [`crossOriginIsolated`](/ja/docs/Web/API/crossOriginIsolated) プロパティを確認してください。

```js
if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{httpheader("Cross-Origin-Embedder-Policy")}}
