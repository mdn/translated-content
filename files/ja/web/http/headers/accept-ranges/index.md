---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
---

{{HTTPSidebar}}

HTTP の **`Accept-Ranges`** レスポンスヘッダーは、サーバーが部分的なリクエストに対応していることを周知するために使用するマーカーです。このフィールドの値は、範囲の定義に使用できる単位を示します。

`Accept-Ranges` ヘッダーがあると、ブラウザーは開始から再開するのではなく、中断されたダウンロードを再開しようとする可能性があります。

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
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## ディレクティブ

- `<range-unit>`
  - : サーバーが対応している範囲の単位を定義します。 `bytes` は {{RFC("7233")}} で公式に定義されている唯一の範囲の単位ですが、追加の範囲の単位が [HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) に登録されている可能性があります。
- `none`
  - : 範囲の単位には対応していないことを示し、これはヘッダー自体がないのと等価になりますので、滅多に使用されませんが、 IE9 のように一部のブラウザーでは、ダウンロードマネージャーで一時停止ボタンを無効にしたり削除したりするために使用されます。

## 例

```
Accept-Ranges: bytes
```

## 仕様書

| 仕様書                                  | 題名                                                   |
| --------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Accept-Ranges", "2.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## ブラウザーの互換性

{{Compat("http.headers.Accept-Ranges")}}

## 関連情報

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- [IANA HTTP Range Unit Registry](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
