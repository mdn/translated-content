---
title: Timing-Allow-Origin ヘッダー
short-title: Timing-Allow-Origin
slug: Web/HTTP/Reference/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Timing-Allow-Origin`** {{Glossary("Response header", "レスポンスヘッダー")}}は、[リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing) の機能を介して取得された属性の値の表示を許可されているオリジンを指定します。そうでない場合、クロスオリジンの制限によりゼロとして報告されます。

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
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>, …, <originN>
```

## ディレクティブ

- `*`（ワイルドカード）
  - : 全てのオリジンがタイミングリソースを見ることができます。
- `<origin>`
  - : タイミングリソースを表示できる URI を指定します。複数のオリジンをカンマ区切りで指定できます。

## 例

### Timing-Allow-Origin の使用

リソースがタイミングリソースを表示できるようにする場合です。

```http
Timing-Allow-Origin: *
```

`https://developer.mozilla.org` がタイミングリソースを表示できるようにするには、次のように指定できます。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [リソースタイミング API](/ja/docs/Web/API/Performance_API/Resource_timing)
- {{HTTPHeader("Server-Timing")}} ヘッダー
- {{HTTPHeader("Vary")}} ヘッダー
