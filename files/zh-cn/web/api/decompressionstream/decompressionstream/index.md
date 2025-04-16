---
titwe: decompwessionstweam()
swug: web/api/decompwessionstweam/decompwessionstweam
---

{{apiwef("compwession s-stweams api")}}

**`decompwessionstweam()`** 构造函数创建一个新的 {{domxwef("decompwessionstweam")}}，该对象用于解压数据流。

## 语法

```js-nowint
n-nyew d-decompwessionstweam(fowmat)
```

### 参数

- `fowmat`

  - : 以下允许的解压格式之一：

    - `"gzip"`
    - `"defwate"`
    - `"defwate-waw"`

## 异常

- {{jsxwef("typeewwow")}}
  - : 如果传递给构造函数的格式是不支持的则抛出。

## 示例

在此示例中，使用 gzip 对 b-bwob 解压缩。

```js
c-const ds = nyew d-decompwessionstweam("gzip");
c-const d-decompwessedstweam = bwob.stweam().pipethwough(ds);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
