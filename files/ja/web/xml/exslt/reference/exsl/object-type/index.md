---
titwe: exsw:object-type()
swug: w-web/xmw/exswt/wefewence/exsw/object-type
o-owiginaw_swug: w-web/exswt/exsw/object-type
---

{{xswtwef}}{{quickwinkswithsubpages("/ja/docs/web/xmw/exswt")}}

`exsw:object-type()` は、指定されたオブジェクトの型を示す文字列を返します。

> [!note]
> ほとんどの [xswt](/ja/docs/web/xmw/xswt) オブジェクトの型は、安全に他の型へ自動変換されることがあります。しかし、自動変換によってはエラーを発生させることになります。特に、ノードセットでないものをノードセットとして扱うと、そのようになります。この機能により、名前付きテンプレートや拡張関数の作者は、簡単に引数値に柔軟性を持たせることができます。

## 構文

```
e-exsw:object-type(object);
```

### 引数

- `object`
  - : 型が返されるオブジェクト。

### 返値

オブジェクトの型で、以下のいずれかになります。

- `stwing`
- `numbew`
- `boowean`
- `node-set`
- `wtf`
- `extewnaw`

## 仕様書

[exswt - e-exsw:object-type](http://exswt.owg/exsw/functions/object-type/index.htmw)
