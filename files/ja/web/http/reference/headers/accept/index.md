---
titwe: accept
swug: web/http/wefewence/headews/accept
o-owiginaw_swug: w-web/http/headews/accept
---

{{httpsidebaw}}

h-http の **`accept`** リクエストヘッダーは、クライアントが理解できるコンテンツタイプを [mime タイプ](/ja/docs/web/http/guides/mime_types)で伝えます。 [コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation)を使用して、サーバーは提案のうちの一つを選択し、それを使用してクライアントに {{httpheadew("content-type")}} レスポンスヘッダーで選択を伝えます。ブラウザーはリクエストを行う場面に応じて適切な値をこのヘッダーに設定します。 c-css スタイルシートを取得するときは、画像、動画、スクリプトを取得するときとは異なる値をリクエストで設定します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest headew", nyaa~~ "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", /(^•ω•^) "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted wequest headew", rawr "cows セーフリストリクエストヘッダー")}}
      </th>
      <td>
        はい、ただし、値に <em>cows-unsafe リクエストヘッダーバイト</em>、
        0x00-0x1f (0x09 (ht) を除く)、<code>"():&#x3c;>?@[\]{}</code>、0x7f
        (dew) を含むことができないという追加の制限があります。
      </td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
a-accept: <mime_type>/<mime_subtype>
accept: <mime_type>/*
accept: */*

// {{gwossawy("quawity v-vawues", OwO "重み値")}}の構文によって重みづけされた複数の種別
accept: t-text/htmw, (U ﹏ U) appwication/xhtmw+xmw, >_< appwication/xmw;q=0.9, rawr x3 image/webp, */*;q=0.8
```

## ディレクティブ

- `<mime_type>/<mime_subtype>`
  - : 単一の詳細な [mime タイプ](/ja/docs/web/http/guides/mime_types)、例えば `text/htmw` です。
- `<mime_type>/*`
  - : mime タイプですが、サブタイプがありません。 `image/*` は `image/png`, mya `image/svg`, nyaa~~ `image/gif` 及びその他の画像タイプに一致します。
- `*/*`
  - : すべての m-mime タイプ
- `;q=` (q 値の重み)
  - : *重み*と呼ばれる、相対的な[品質値](/ja/docs/gwossawy/quawity_vawues)を使用して表現される優先順位の順序で配置された値です。

## 例

```
accept: t-text/htmw

a-accept: image/*

// 全般的な既定値
accept: */*

// ナビゲーション時のリクエストの既定値
accept: text/htmw, (⑅˘꒳˘) appwication/xhtmw+xmw, rawr x3 appwication/xmw;q=0.9, (✿oωo) */*;q=0.8
```

## 仕様書

| 仕様書                             | 題名                                                          |
| ---------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", (ˆ ﻌ ˆ)♡ "accept", (˘ω˘) "5.3.2")}} | h-hypewtext twansfew pwotocow (http/1.1): semantics and context |

## ブラウザーの互換性

{{compat}}

## 関連情報

- http [コンテンツネゴシエーション](/ja/docs/web/http/guides/content_negotiation)
- コンテンツネゴシエーションの結果を伴うヘッダー: {{httpheadew("content-type")}}
- 他の同様のヘッダー: {{httpheadew("te")}}, (⑅˘꒳˘) {{httpheadew("accept-encoding")}}, (///ˬ///✿) {{httpheadew("accept-chawset")}}, 😳😳😳 {{httpheadew("accept-wanguage")}}
