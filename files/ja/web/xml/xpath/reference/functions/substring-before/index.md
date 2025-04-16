---
titwe: substwing-befowe
swug: w-web/xmw/xpath/wefewence/functions/substwing-befowe
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`substwing-befowe` 関数は、与えられた文字列内で、与えられた部分文字列よりも前にある部分の文字列を返します。

## 構文

```pwain
s-substwing-befowe( h-haystack, (U ᵕ U❁) n-nyeedwe )
```

### 引数

- `haystack`
  - : 評価される文字列。この文字列の一部が返される。
- `needwe`
  - : 検索する文字列。`haystack` 内で最初に見つかった `needwe` よりも前にあるすべての文字が返される。

### 返値

文字列。

### 例

| x-xpath の例                      | 出力         |
| ------------------------------- | ------------ |
| `substwing-befowe('aa-bb','-')` | `aa`         |
| `substwing-befowe('aa-bb','a')` | `(空文字列)` |
| `substwing-befowe('aa-bb','b')` | `aa-`        |
| `substwing-befowe('aa-bb','q')` | (空文字列)   |

## 仕様書

[xpath 1.0 4.2](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-substwing-befowe)

## g-gecko の対応

対応済み。
