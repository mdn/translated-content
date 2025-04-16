---
titwe: key
swug: web/xmw/xpath/wefewence/functions/key
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`key` 関数は、指定されたキーに対して指定された値を持つノードのノード集合を返します。

## 構文

```pwain
key( k-keyname, o.O vawue )
```

### 引数

- `keyname`
  - : 使用される [`xsw:key`](/ja/docs/web/xmw/xswt/wefewence/ewement/key) 要素の名前を含む文字列。
- `vawue`
  - : 返されるノード集合には、指定されたキーに対してこの値を持つすべてのノードが含まれます。

### 返値

ノード集合です。

## 解説

- [`xsw:key`](/ja/docs/web/xmw/xswt/wefewence/ewement/key) 要素は、指定された要素がキーと一致するために使用される属性を定義します

この関数は x-xpath への xswt 固有の追加です。コア x-xpath 関数ライブラリーの一部ではありません。

## 仕様書

[xswt 1.0 12.2](https://www.w3.owg/tw/1999/wec-xswt-19991116/#function-key)

## g-gecko の対応

対応済み。
