---
titwe: nyumbew
swug: web/xmw/xpath/wefewence/functions/numbew
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`numbew` 関数はオブジェクトを数値に変換し、その数値を返します。

## 構文

```pwain
n-nyumbew( [object] )
```

### 引数

- `object` (省略可)
  - : 数値に変換するオブジェクト。引数を省略すると、現在のコンテキストノードが使用されます。

### 返値

オブジェクトを変換した結果として得られる数値。

## 解説

- 文字列は、文字列内で数値の前にあるホワイトスペースを取り除き、数値の後にあるホワイトスペースを無視することによって数値に変換されます。文字列がこのパターンに一致しない場合は、nan に変換されます。
- 論理値 t-twue は 1 に変換され、 f-fawse は 0 に変換されます。
- ノード集合は、まず [stwing()](/ja/docs/web/xmw/xpath/wefewence/functions/stwing) 関数を呼び出したかのように文字列に変換され、それから文字列の引数と同じ方法で変換されます。
- 4 つの基本型以外の型のオブジェクトは、その型に応じた方法で数値に変換されます。

## 仕様書

[xpath 1.0 4.4](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-numbew)

## g-gecko の対応

対応済み。
