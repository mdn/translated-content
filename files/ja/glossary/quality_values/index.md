---
title: Quality values
slug: Glossary/Quality_values
---

**品質値**、もしくは q 値と q ファクターは、値の優先順位をコンマ区切りのリストで記述するために使用されます。これはいくつかの [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)と HTML で許される特別な構文です。 値の重要性はサフィックス `';q='` の直後に `0` と `1` の間の値が含まれ、最大 3 つの 10 進数で最高の優先度を示します。存在しない場合、デフォルト値は `1` です。

## 例

次の構文

```
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

優先順位を示します。

| 値                                      | 優先度 |
| --------------------------------------- | ------ |
| `text/html` and `application/xhtml+xml` | `1.0`  |
| `application/xml`                       | `0.9`  |
| `*/*`                                   | `0.8`  |

最初の 2 つの値に優先順位が定義されていない場合、リスト内の順序は関係ありません。それにもかかわらず、同じ品質であれば、より具体的な値よりも優先度が低くなります。

```
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| 値          | 優先度                        |
| ----------- | ----------------------------- |
| `text/html` | `0.8` (but totally specified) |
| `text/*`    | `0.8` (partially specified)   |
| `*/*`       | `0.8` (not specified)         |

{{HTTPHeader("Accept")}} のようないくつかの構文は、`text/html;level=1` のような追加の指定子を許可します。これらは価値の特異性を高めます。それらを使用することは非常にまれです。

## ブラウザ固有の情報

### Firefox

Firefox 18 以降、品質係数の値は小数点以下 2 桁に固定されます。 以前のバージョン ([Firefox バグ 672448](https://bugzil.la/672448)) では小数点以下 1 桁にしかクランプされませんでした。

## 詳細情報

- [HTTP headers](/ja/docs/Web/HTTP/Headers) using q-values in their syntax: {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("TE")}}.
