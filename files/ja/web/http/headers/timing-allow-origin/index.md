---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
---

{{HTTPSidebar}}

**`Timing-Allow-Origin`** レスポンスヘッダーは、 [Resource Timing API](/ja/docs/Web/API/Performance_API/Resource_timing) の機能を介して取得された属性の値の表示を許可されているオリジンを指定します。そうでない場合、クロスオリジンの制限によりゼロとして報告されます。

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
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>[, <origin>]*
```

## ディレクティブ

- `*`
  - : サーバーはワイルドカードとして "\*" を指定することができ、それによって全てのオリジンがタイミングリソースを見ることができます。
- `<origin>`
  - : タイミングリソースを表示できる URI を指定します。 複数のオリジンをカンマ区切りで指定できます。

## 例

リソースがタイミングリソースを表示できるようにする場合。

```
Timing-Allow-Origin: *
```

`https://developer.mozilla.org` がタイミングリソースを表示できるようにするには、次のように指定できます。

```
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Resource Timing API](/ja/docs/Web/API/Performance_API/Resource_timing)
- [Resource Timing API の使用](/ja/docs/Web/API/Performance_API/Resource_timing)
- {{HTTPHeader("Vary")}}
