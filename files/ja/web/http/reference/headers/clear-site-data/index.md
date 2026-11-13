---
title: Clear-Site-Data ヘッダー
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{securecontext_header}}

HTTP の **`Clear-Site-Data`** {{Glossary("response header", "レスポンスヘッダー")}}は、クライアントに対して、リクエスト元のウェブサイトに関連付けられた特定の種類の閲覧データ（クッキー、ストレージ、キャッシュ）をすべて削除するよう指示します。
これにより、ウェブ開発者は、自身のオリジンに関してブラウザーが保有するデータをより細かく制御できるようになります。

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
// 単一のディレクティブ
Clear-Site-Data: "cache"

// 複数のディレクティブ（カンマ区切り）
Clear-Site-Data: "cache", "cookies"

// ワイルドカード
Clear-Site-Data: "*"
```

## ディレクティブ

> [!NOTE]
> すべてのディレクティブは[引用符で囲まれた文字列の文法](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6)に従わなければなりません。二重引用符を含まないディレクティブは無効です。

- `"cache"`
  - : サーバーが、レスポンス URL のオリジンに関するローカルにキャッシュされたデータ（つまり、ブラウザーキャッシュ、[HTTP キャッシュ](/ja/docs/Web/HTTP/Guides/Caching)を参照）の消去を望んでいることを示します。
    ブラウザーによっては、予備レンダリングページ、{{glossary("bfcache","バック/フォワードキャッシュ")}}、スクリプトキャッシュ、 WebGL シェーダーキャッシュ、アドレスバーのサジェスト等のようなものも消去します。

- `"clientHints"` {{Experimental_Inline}}
  - : サーバーが、レスポンス URL のオリジンに対して格納されているすべての[クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)（{{HTTPHeader("Accept-CH")}} を通じてリクエストされたもの）を消去することを示します。

    > [!NOTE]
    > `"clientHints"` データ型に対応しているブラウザーでは、`"cache"`、`"cookies"`、`"*"` のいずれかの型が指定された場合、クライアントヒントもクリアされます。したがって、`"clientHints"` が必要となるのは、これらの他の型が一切指定されていない場合のみです。

- `"cookies"`
  - : サーバーが、レスポンス URL のオリジンに関するすべてのクッキーの消去を望んでいることを示します。これは登録されたドメインにサブドメインを含め影響します。ですから、 `https://example.com` と同様に `https://stage.example.com` のクッキーも消去されます。

- `"executionContexts"` {{Experimental_Inline}}
  - : サーバーが、レスポンスのオリジンに関するすべての閲覧コンテキストの再読み込みを望んでいることを示します。 ({{domxref("Location.reload")}})

- `"prefetchCache"` {{experimental_inline}} {{non-standard_inline}}
  - : リファラーのオリジンをスコープとする{{domxref("Speculation Rules API", "投機ルール", "", "nocode")}}の先読みをクリアするために使用されます。

- `"prerenderCache"` {{experimental_inline}} {{non-standard_inline}}
  - : リファラーのオリジンをスコープとする{{domxref("Speculation Rules API", "投機ルール", "", "nocode")}}の予備レンダリングをクリアするために使用されます。

- `"storage"`
  - : サーバーが、レスポンス URL のオリジンに関するすべての DOM ストレージの消去を望んでいることを示します。これは以下のようなストレージ機構を含みます。
    - localStorage （`localStorage.clear` を実行）
    - sessionStorage （`sessionStorage.clear` を実行）
    - IndexedDB （それぞれのデータベースに {{domxref("IDBFactory.deleteDatabase")}} を実行）
    - サービスワーカーの登録（登録されたそれぞれのサービスワーカーに対して、 {{domxref("ServiceWorkerRegistration.unregister")}} を実行）
    - Web SQL データベース（非推奨）
    - [FileSystem API のデータ](/ja/docs/Web/API/File_and_Directory_Entries_API)
    - プラグインのデータ（[`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData) によって消去）

- `"*"` （ワイルドカード）
  - : サーバーが、レスポンスのオリジンに関するすべての種類のデータの消去を望んでいることを示します。このヘッダーの将来のバージョンでデータの種類が追加された場合、それも消去します。

## 例

### ウェブサイトのログアウト

ユーザーがウェブサイトやサービスからログアウトした場合、{{domxref("Speculation Rules API", "投機的ナビゲーション","", "nocode")}}の先読みまたは予備レンダリングされたコンテンツを含め、ローカルに保存されたデータを削除することをお勧めします。
これを行うには、`Clear-Site-Data` ヘッダーを、サイトからのログアウトが正常に完了したことを確認するページ（例えば`https://example.com/logout`）に追加します。

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts", "prefetchCache", "prerenderCache"
```

### クッキーの消去

以下のヘッダーが `https://example.com/clear-cookies` のレスポンスで配信された場合、同じドメイン `https://example.com` およびあらゆるサブドメイン（`https://stage.example.com` など）が消去されます。

```http
Clear-Site-Data: "cookies"
```

### 推測のクリア

このヘッダーが `https://example.com/change-state.json` へのレスポンスとともに配信された場合、同じドメイン `https://example.com` およびそのサブドメイン（`https://stage.example.com` など）におけるすべての{{domxref("Speculation Rules API", "投機ナビゲーション","", "nocode")}}の予備レンダリングがクリアされます。

```http
Clear-Site-Data: "prerenderCache"
```

先読みと事前レンダリングの両方の推測をクリアするには、`prefetchCache` と `prerenderCache` の両方を送信しなければなりません。

```http
Clear-Site-Data: "prefetchCache", "prerenderCache"
```

どちらか一方、あるいは両方をクリアする方が適切な場合もあります。

例えば、JavaScript からデータを取得するクライアントサイドレンダリングのアプリケーションでは、状態が変更された際に `prerenderCache` を使用して事前レンダリングされたページを破棄しつつ、ページのレンダリング（または再事前レンダリング）時に使用するために先読みされた HTML は保持することができます。

一方、先読みされた HTML 文書に古いデータが含まれているものの、対応する事前レンダリングされたページが表示時にデータを更新するように設定されている場合は、`prerenderCache` を使用する必要はないかもしれませんが、`prefetchCache` ディレクティブを使用することをお勧めします。そうすることで、将来の事前レンダリングで古い HTML が使用されるのを防ぐことができます。

最後に、先読みされた HTML 文書に古いデータが含まれており、かつ事前レンダリングされたページ上の古いコンテンツも更新されない場合は、`prefetchCache` と `prerenderCache` の両方を指定するのが最も適切です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Cache-Control")}}
