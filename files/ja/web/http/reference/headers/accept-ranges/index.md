---
title: Accept-Ranges ヘッダー
short-title: Accept-Ranges
slug: Web/HTTP/Reference/Headers/Accept-Ranges
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

HTTP の **`Accept-Ranges`** {{Glossary("response header", "レスポンスヘッダー")}}は、サーバーが[範囲付きリクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)への対応を通知するために使用され、これによりクライアントはリソースの一部または複数の部分をリクエストできるようになります。
このヘッダーの値は、範囲を定義するために使用できる単位を示します。

例えば、`Accept-Ranges` ヘッダーを含むレスポンスは、クライアントが転送を最初からやり直すのではなく、中断されたダウンロードを再開できることを示しています。

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
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## ディレクティブ

- `<range-unit>`
  - : サーバーが対応している範囲の単位を定義します。 `bytes` は {{RFC("7233")}} で公式に定義されている唯一の範囲の単位ですが、追加の範囲の単位が [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters#range-units) に登録されている可能性があります。
- `none`
  - : 対応している範囲の単位はありません。
    これはこのヘッダー自体がないのと等価になりますので、滅多に使用されません。
    この値は、サーバーが範囲付きリクエストに対応していない場合、古いブラウザーにおいてダウンロードマネージャーの「一時停止」ボタンを無効化または除去するために使用されていました。

## 例

```http
Accept-Ranges: bytes
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP 範囲付きリクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)ガイド
- [HTTP 条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)ガイド
- {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}} リクエストヘッダー
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters#range-units)
