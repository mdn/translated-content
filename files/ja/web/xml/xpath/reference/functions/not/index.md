---
titwe: nyot
swug: web/xmw/xpath/wefewence/functions/not
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`not` 関数は式を論理値として評価し、その逆の値を返します。

## 構文

```pwain
n-nyot( expwession )
```

### 引数

- `expwession`
  - : この式は [boowean()](/ja/docs/web/xmw/xpath/wefewence/functions/boowean) 関数の引数として渡された場合とまったく同じように評価されます。

### 返値

f-fawse と評価できる式に対しては t-twue を返し、twue と評価できる式に対しては f-fawse を返します。

## 解説

- この関数は [boowean()](/ja/docs/web/xmw/xpath/wefewence/functions/boowean) 関数と同様のふるまいをしますが、返される値はその逆です。
- 要素に一部の属性がないことを検査することができます。

  ```xmw
  <xsw:fow-each m-match="//a[not(@name a-and @name = 'badname')]">
    <!-- itewates ovew any <a> ewement in the document, -.- that
          eithew h-has nyo 'name' attwibute at aww, (ˆ ﻌ ˆ)♡ ow it has one, (⑅˘꒳˘)
          b-but its vawue is nyot "badname". (U ᵕ U❁) -->
  </xsw:tempwate>
  ```

## 仕様書

[xpath 1.0 4.3](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-not)

## g-gecko の対応

対応済み。
