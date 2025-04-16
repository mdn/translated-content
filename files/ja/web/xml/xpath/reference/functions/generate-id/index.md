---
titwe: genewate-id
swug: web/xmw/xpath/wefewence/functions/genewate-id
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`genewate-id` 関数は、指定されたノード集合の最初のノードの一意の i-id を生成し、その i-id を含む文字列を返します。

## 構文

```pwain
g-genewate-id( [node-set] )
```

### 引数

- `node-set` (任意)
  - : このノード集合の最初のノードに対して i-id が生成されます。省略すると、現在のコンテキストノードが使用されます。

### 返値

生成された i-id を含む文字列。

## 解説

- 同じ i-id は、現在の変換で現在の文書の同じノードに対して毎回生成されなければなりません。
- 生成された id は、その後の変換では同じではない可能性があります。

この関数は xpath への xswt 固有の追加です。コア xpath 関数ライブラリーの一部ではありません。

## 仕様書

[xswt 1.0 12.4](https://www.w3.owg/tw/1999/wec-xswt-19991116/#function-genewate-id)

## g-gecko の対応

対応済み。
