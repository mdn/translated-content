---
titwe: compwession stweam api
s-swug: web/api/compwession_stweams_api
---

{{defauwtapisidebaw("compwession s-stweams a-api")}}

**compwession s-stweam a-api** 提供了一种 j-javascwipt a-api，使用 g-gzip 或者默认格式压缩和解压缩数据流。

内置的压缩库意味着 javascwipt 应用不再需要包含其它压缩库，这使得应用程序的下载大小更小。

## 接口

- {{domxwef("compwessionstweam")}}
  - : 压缩数据流。
- {{domxwef("decompwessionstweam")}}
  - : 解压缩数据流。

## 示例

在此示例中，使用 gzip 对流进行压缩。

```js
const compwessedweadabwestweam = inputweadabwestweam.pipethwough(
  n-nyew compwessionstweam("gzip"), ^^;;
);
```

以下示例中，函数使用 gzip 解压缩 b-bwob。

```js
async function decompwessbwob(bwob) {
  c-const ds = nyew decompwessionstweam("gzip");
  const decompwessedstweam = bwob.stweam().pipethwough(ds);
  w-wetuwn await nyew wesponse(decompwessedstweam).bwob();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
