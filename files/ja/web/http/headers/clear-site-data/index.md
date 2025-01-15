---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
l10n:
  sourceCommit: cbfee97866847077a5c7feb3b337ed7d4f3d3424
---

{{securecontext_header}}{{HTTPSidebar}}

**`Clear-Site-Data`** ヘッダーは、リクエストしているウェブサイトに関連付けられた閲覧用データ（クッキー、ストレージ、キャッシュ）を消去します。ウェブ開発者がそのオリジンのためにブラウザーがローカルに保存したデータをより制御できます。

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

`Clear-Site-Data` ヘッダーは、1 つ以上のディレクティブを受け付けます。すべての種類のデータを消去する場合は、ワイルドカードのディレクティブ (`"*"`) を使用することができます。

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

- `"cache"` {{Experimental_Inline}}
  - : サーバーが、レスポンス URL のオリジンに関するローカルにキャッシュされたデータ（つまり、ブラウザーキャッシュ、[HTTP キャッシュ](/ja/docs/Web/HTTP/Caching)を参照）の消去を望んでいることを示します。ブラウザーによっては、予備レンダリングページ、スクリプトキャッシュ、 WebGL シェーダーキャッシュ、アドレスバーのサジェスト等のようなものも消去します。
- `"cookies"`
  - : サーバーが、レスポンス URL のオリジンに関するすべてのクッキーの消去を望んでいることを示します。これは登録されたドメインにサブドメインを含め影響します。ですから、 `https://example.com` と同様に `https://stage.example.com` のクッキーも消去されます。
- `"storage"`

  - : サーバーが、レスポンス URL のオリジンに関するすべての DOM ストレージの消去を望んでいることを示します。これは以下のようなストレージ機構を含みます。

    - localStorage （`localStorage.clear` を実行）
    - sessionStorage （`sessionStorage.clear` を実行）
    - IndexedDB （それぞれのデータベースに {{domxref("IDBFactory.deleteDatabase")}} を実行）
    - サービスワーカーの登録（登録されたそれぞれのサービスワーカーに対して、 {{domxref("ServiceWorkerRegistration.unregister")}} を実行）
    - Web SQL データベース
    - [FileSystem API のデータ](/ja/docs/Web/API/File_and_Directory_Entries_API)
    - プラグインのデータ（[`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData) によって消去）

- `"executionContexts"`
  - : サーバーが、レスポンスのオリジンに関するすべての閲覧コンテキストの再読み込みを望んでいることを示します。 ({{domxref("Location.reload")}})
- `"*"` （ワイルドカード）
  - : サーバーが、レスポンスのオリジンに関するすべての種類のデータの消去を望んでいることを示します。このヘッダーの将来のバージョンでデータの種類が追加された場合、それも消去します。

## 例

### ウェブサイトのログアウト

ユーザーがウェブサイトやサービスからログアウトした場合、ローカルに保存されているデータを削除したい場合があります。サイトからのログアウトが正常に完了したことを確認するページ (`https://example.com/logout` など)を送信する際に `Clear-Site-Data` ヘッダーを追加することで、これを実現することができます。

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### クッキーの消去

以下のヘッダーが `https://example.com/clear-cookies` のレスポンスで配信された場合、同じドメイン `https://example.com` 及びあらゆるサブドメイン（`https://stage.example.com` など）が消去されます。

```http
Clear-Site-Data: "cookies"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Cache-Control")}}
