---
title: Quality values (品質値)
slug: Glossary/Quality_values
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**品質値**、もしくは q 値や q ファクターは、値の優先順位をカンマ区切りのリストで記述するために使用されます。これはいくつかの [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)と HTML で許される特別な構文です。

値の重要度は、接尾辞 `';q='` の直後に続く `0` 以上 `1` 以下の数値で示されます。小数部は最大 3 桁で、値が大きいほど優先度が高くなります。指定がない場合のデフォルト値は `1` です。

## 例

次の構文は、

```http
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

優先順位を示します。

| 値                                     | 優先度 |
| -------------------------------------- | ------ |
| `text/html` と `application/xhtml+xml` | `1.0`  |
| `application/xml`                      | `0.9`  |
| `*/*`                                  | `0.8`  |

最初の 2 つの値に優先順位が定義されていない場合、リスト内の順序は関係ありません。それでも、品質値が同じ場合は、より具体的な値の方が具体性の低い値より優先されます。

```http
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| 値          | 優先度                   |
| ----------- | ------------------------ |
| `text/html` | `0.8` （ただし完全指定） |
| `text/*`    | `0.8` （部分指定）       |
| `*/*`       | `0.8` （未指定）         |

{{HTTPHeader("Accept")}} のようないくつかの構文は、`text/html;level=1` のような追加の指定子を許可します。これらは値の具体性を高めます。それらを使用することは非常にまれです。

## 詳細情報

- 構文上で q 値を使用する [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers): {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}
- [Header field definitions.](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
