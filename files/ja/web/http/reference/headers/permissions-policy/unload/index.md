---
title: "Permissions-Policy: unload ディレクティブ"
short-title: unload
slug: Web/HTTP/Reference/Headers/Permissions-Policy/unload
l10n:
  sourceCommit: 75b6c08573c39a7d6557c911502912f1a3c7da9f
---

{{SeeCompatTable}}{{non-standard_header}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーの `unload` ディレクティブは、現在の文書で [`unload`](/ja/docs/Web/API/Window/unload_event) イベントハンドラーの実行を許可するかどうかを制御します。

定義されたポリシーによってこの機能の使用が許可されていない場合、その文書に登録された `unload` イベントハンドラーは実行されません。

`unload` ハンドラーの動作は信頼できず、ページが[バック/フォワードキャッシュ](https://web.dev/articles/bfcache)<sup>(英語)</sup> (bfcache) に保存されるのを妨げます。これらのハンドラーをブロックすると、ページ内のサードパーティ製スクリプトが `unload` ハンドラーを追加していても、そのページは bfcache の対象であり続けられます。代替手段については、[`unload` イベントの使用上のメモ](/ja/docs/Web/API/Window/unload_event#使用上のメモ)を参照してください。

## 構文

```http
Permissions-Policy: unload=<allowlist>;
```

- `<allowlist>`
  - : この機能の使用を許可するオリジンのリストです。詳しくは [`Permissions-Policy` の構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## デフォルトのポリシー

Chrome では、`unload` のデフォルトの許可リストは `()` です。つまり、文書がオプトインしない限り、`unload` ハンドラーは実行されません。Chrome は当初 `*` をデフォルトの許可リストとして使用していましたが、[段階的に変更しました](https://developer.chrome.com/docs/web-platform/deprecating-unload)<sup>(英語)</sup>。

## 例

### unload ハンドラーをブロックする

あるサイトが、ページを bfcache の対象に保つため、自身のページやその埋め込み iframe のいずれでも `unload` ハンドラーが実行されないようにしたいとします。その場合、次の HTTP レスポンスヘッダーを送信します。

```http
Permissions-Policy: unload=()
```

### unload ハンドラーを許可する

引き続き `unload` ハンドラーに依存しているサイトは、次の HTTP レスポンスヘッダーを送信することで、最上位のページでその実行を許可できます。

```http
Permissions-Policy: unload=self
```

オリジンが `https://example.com` のオリジンをまたぐ iframe でも `unload` ハンドラーを許可するには、埋め込み側のページがそのオリジンを許可リストに含める必要があります。

```http
Permissions-Policy: unload=(self "https://example.com")
```

さらに、`<iframe>` 要素に {{HTMLElement('iframe','allow','#allow')}} 属性を指定する必要があります。

```html
<iframe src="https://example.com/embed" allow="unload"></iframe>
```

iframe 内で読み込まれる文書も、自身の `Permissions-Policy: unload=self` レスポンスヘッダーを使用して `unload` ハンドラーを許可する必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [Permissions Policy](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- {{domxref("Window/unload_event", "unload")}} イベント
- [unload イベントの非推奨化](https://developer.chrome.com/docs/web-platform/deprecating-unload)<sup>(英語)</sup> - developer.chrome.com
