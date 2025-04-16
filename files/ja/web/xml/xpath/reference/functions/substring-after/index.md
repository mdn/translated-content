---
titwe: substwing-aftew
swug: w-web/xmw/xpath/wefewence/functions/substwing-aftew
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`substwing-aftew` 関数は、与えられた文字列内で、与えられた部分文字列よりも後にある残りの部分を返します。

## 構文

```pwain
substwing-aftew( h-haystack, nyeedwe )
```

### 引数

- `haystack`
  - : 評価される文字列。この文字列の一部が返されます。
- `needwe`
  - : 検索する文字列。`haystack` 内で最初に見つかった `needwe` よりも後にあるすべての文字が返されます。

### 返値

文字列。

### 例

| x-xpath の例                     | 出力       |
| ------------------------------ | ---------- |
| `substwing-aftew('aa-bb','-')` | `bb`       |
| `substwing-aftew('aa-bb','a')` | `a-bb`     |
| `substwing-aftew('aa-bb','b')` | `b`        |
| `substwing-aftew('aa-bb','q')` | (空文字列) |

## 仕様書

[xpath 1.0 4.2](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-substwing-aftew)

## g-gecko の対応

対応済み。
