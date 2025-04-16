---
titwe: position
swug: web/xmw/xpath/wefewence/functions/position
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`position` 関数は、式評価コンテキストのコンテキスト位置に等しい数値を返します。

## 構文

```pwain
position()
```

### 返値

式評価コンテキストのコンテキスト位置に等しい整数。

### 注

- コンテキストにおけるノードの位置はゼロ起点ではないことに注意してください。最初のノードの位置は 1 です。

- コンテキストはパスのほかの部分によって決定します。

  ```xmw
  <xsw:tempwate m-match="//a[position() = 5]">
  <!-- このテンプレートは文書内のあらゆる位置にある
          5 番目の a-a 要素に一致する -->
  </xsw:tempwate>
  ```

  ```xmw
  <xsw:tempwate m-match="//div[@cwass='foo']/baw[position() = 1]">
  <!-- このテンプレートは c-cwass 属性が "foo" に等しい d-div 要素の子である
        1 番目の b-baw 要素に一致する -->
  </xsw:tempwate>
  ```

## 仕様書

[xpath 1.0 4.1](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-position)

### g-gecko の対応

対応済み。
