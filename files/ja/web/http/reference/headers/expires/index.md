---
title: Expires ヘッダー
short-title: Expires
slug: Web/HTTP/Reference/Headers/Expires
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Expires`** {{Glossary("Response header", "レスポンスヘッダー")}}は、[HTTP キャッシュ](/ja/docs/Web/HTTP/Guides/Caching)のコンテキストで、レスポンスが期限切れと見なされる日時が入ります。

値 `0` は過去の日付を表すために使用され、リソースがすでに有効期限切れであることを意味します。

> [!NOTE]
> レスポンスに `max-age` または `s-maxage` ディレクティブを持つ {{HTTPHeader("Cache-Control")}} ヘッダーがある場合、`Expires` ヘッダーは無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Expires: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## ディレクティブ

- `<day-name>`
  - : `Mon`、`Tue`、`Wed`、`Thu`、`Fri`、`Sat`、`Sun` のいずれか（大文字小文字を区別）。
- `<day>`
  - : 2 桁の日番号。例えば "04" または "23"。
- `<month>`
  - : `Jan`、`Feb`、`Mar`、`Apr`、`May`、`Jun`、`Jul`、`Aug`、`Sep"、 "Oct`、`Nov`、`Dec` のいずれか（大文字と小文字を区別）。
- `<year>`
  - : 4 桁の年の数字。たとえば "1990" または "2016"。
- `<hour>`
  - : 2 桁の時の数字。たとえば "09" または "23"。
- `<minute>`
  - : 2 桁の分の数字。たとえば "04" または "59"。
- `<second>`
  - : 2 桁の秒の数字。たとえば "04" または "59"。
- GMT
  - : グリニッジ標準時。HTTP の日付は常に GMT で表され、決して現地時間で表されることはありません。

## 例

```http
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP キャッシュ](/ja/docs/Web/HTTP/Guides/Caching)ガイド
- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
