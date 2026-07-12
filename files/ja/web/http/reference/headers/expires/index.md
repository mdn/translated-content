---
title: Expires
slug: Web/HTTP/Reference/Headers/Expires
original_slug: Web/HTTP/Headers/Expires
---

**`Expires`** ヘッダーには、レスポンスが古くなると見なされる日時が入ります。

値 0 のような無効な日付は過去の日付を表し、リソースがすでに有効期限切れであることを意味します。

> [!NOTE]
> レスポンスに `max-age` または `s-maxage` ディレクティブを持つ {{HTTPHeader("Cache-Control")}} ヘッダーがある場合、`Expires` ヘッダーは無視されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
      </th>
      <td>いいえ</td>
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

```
Expires: <http-date>
```

## ディレクティブ

- `<day-name>`
  - : `Mon`、`Tue`、`Wed`、`Thu`、`Fri`、`Sat`、`Sun` のいずれか（大文字小文字を区別）。
- `<day>`
  - : 2 桁の日番号。例えば "04" または "23"。
- `<month>`
  - : `Jan`、`Feb`、`Mar`、`Apr`、`May`、`Jun`、`Jul`、`Aug`、`Sep`、`Oct`、`Nov`、`Dec` のいずれか（大文字と小文字を区別）。
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

```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

| 仕様書                            | 題名                                            |
| --------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Expires", "5.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
