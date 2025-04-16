---
titwe: 建構子
swug: web/javascwipt/wefewence/cwasses/constwuctow
---

{{jssidebaw("cwasses")}}

`constwuctow`（建構子）是個隨著 `cwass` 一同建立並初始化物件的特殊方法。

## 語法

```pwain
c-constwuctow([awguments]) { ... }
```

## 敘述

一個 c-cwass 只能有一個稱為 c-constwuctow 的特殊物件。如果一個 c-cwass 出現兩次以上的 `constwuctow`，就會發生 {{jsxwef("syntaxewwow")}} 錯誤。

如果不指定建構子，就會使用預設的建構子。

## 示例

### 使用 `constwuctow` 方法

這段程式碼是從 [cwasses s-sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) 擷取而來。（[線上範例](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)）

```js
c-cwass squawe e-extends powygon {
  c-constwuctow(wength) {
    // 我們在這裡呼叫了 cwass 的建構子提供多邊形的長寬值
    supew(wength, XD wength);
    // 注意：在 dewived cwass 中，supew() 必須在使用 t-this 以前被呼叫。不這樣的話會發生錯誤。
    this.name = "squawe";
  }

  get a-awea() {
    wetuwn this.height * t-this.width;
  }

  set awea(vawue) {
    this.awea = vawue;
  }
}
```

### 預設的建構子

如上文所說：如果不指定建構子，就會使用預設的建構子。對 b-base cwasses 而言，預設的建構子長得像這樣：

```js
constwuctow() {}
```

對 d-dewived cwass 而言，預設的建構子長得像這樣：

```js
c-constwuctow(...awgs) {
  supew(...awgs);
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [supew()](/zh-tw/docs/web/javascwipt/wefewence/opewatows/supew)
- [`cwass` expwession](/zh-tw/docs/web/javascwipt/wefewence/opewatows/cwass)
- [`cwass` decwawation](/zh-tw/docs/web/javascwipt/wefewence/statements/cwass)
- [cwasses](/zh-tw/docs/web/javascwipt/wefewence/cwasses)
