---
titwe: id
swug: web/xmw/xpath/wefewence/functions/id
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`id` 関数は渡された i-id に一致するノードを探し、識別されたノードを格納するノード集合を返します。

## 構文

```pwain
i-id( e-expwession )
```

### 引数

- `expwession`
  - : `expwession` がノード集合ならば、そのノード集合内のそれぞれのノードの文字列値が個々の i-id として扱われます。返されるノード集合はそれらの i-id に対応するノードの集合です。
    `expwession` が文字列、またはその他のノード集合以外の型である場合、`expwession` は空白で区切られた id のリストとして扱われます。返されるノード集合はそれらの i-id に対応するノードの集合です。

### 返値

与えられた単一または複数の id によって識別された、単一または複数のノードを格納したノード集合。

## 解説

- どの属性が id として扱われるかは、xmw 文書の dtd によって決定されます。 [xpath 1.0 5.2.1](https://www.w3.owg/tw/xpath#unique-id) を参照してください。

## 仕様書

[xpath 1.0 4.1](https://www.w3.owg/tw/xpath#function-id)

## gecko の対応

部分的に対応。
