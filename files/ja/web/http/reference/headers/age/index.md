---
title: Age ヘッダー
short-title: Age
slug: Web/HTTP/Reference/Headers/Age
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Age`** {{Glossary("response header", "レスポンスヘッダー")}}は、オブジェクトがプロキシーのキャッシュに入ってからの経過時間を秒単位で示します。

`Age` ヘッダーは通常 0 に近い値となっています。
もし値が `0` であるなら、オブジェクトはおそらくオリジンサーバーからフェッチされただけでしょう。そうでなければ、一般的にプロキシーの現在の日時と HTTP レスポンスに含まれていた {{HTTPHeader("Date")}} ヘッダーとの差分から算出されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header","レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Age: <delta-seconds>
```

## ディレクティブ

- `<delta-seconds>`
  - : オブジェクトがプロキシーキャッシュに入っていた時間（秒単位）を表す負でない整数。

## 例

```http
Age: 24
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
