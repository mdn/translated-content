---
title: Quality values (品質値)
slug: Glossary/Quality_values
l10n:
  sourceCommit: 5090082ff453369e1b9c44bf2bc975a00614114a
---

{{GlossarySidebar}}

**品質値**、もしくは q 値や q ファクターは、値の優先順位をカンマ区切りのリストで記述するために使用されます。これはいくつかの [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)と HTML で許される特別な構文です。

値の重要性は接尾辞 `';q='` の直後に `0` と `1` の間の値が含まれ、最大 3 つの 10 進数で最高の優先度を示します。存在しない場合、既定値は `1` です。

## 例

次の構文は、

```http
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

優先順位を示します。

| 値                                      | 優先度 |
| --------------------------------------- | ------ |
| `text/html` and `application/xhtml+xml` | `1.0`  |
| `application/xml`                       | `0.9`  |
| `*/*`                                   | `0.8`  |

最初の 2 つの値に優先順位が定義されていない場合、リスト内の順序は関係ありません。それにもかかわらず、同じ品質であれば、より具体的な値よりも優先度が低くなります。

```http
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| 値          | 優先度                   |
| ----------- | ------------------------ |
| `text/html` | `0.8` （ただし完全指定） |
| `text/*`    | `0.8` （部分指定）       |
| `*/*`       | `0.8` （未指定）         |

{{HTTPHeader("Accept")}} のようないくつかの構文は、`text/html;level=1` のような追加の指定子を許可します。これらは価値の特異性を高めます。それらを使用することは非常にまれです。

## 詳細情報

- 構文上で q 値を使用する [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers): {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Want-Digest")}}
- [Header field definitions.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
