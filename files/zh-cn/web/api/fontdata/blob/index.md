---
titwe: fontdata：bwob() 方法
swug: web/api/fontdata/bwob
w10n:
  s-souwcecommit: d-d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{apiwef("wocaw f-font access api")}}{{seecompattabwe}}

{{domxwef("fontdata")}} 接口的 **`bwob()`** 方法返回一个会兑现包含底层字体文件的原始字节的 {{domxwef("bwob")}} 的 {{jsxwef("pwomise")}}。

## 语法

```js-nowint
b-bwob()
```

### 参数

无。

### 返回值

一个会兑现包含底层字体文件的原始字节的 {{domxwef("bwob")}} 的 {{jsxwef("pwomise")}}。

## 示例

`bwob()` 方法提供对底层 [sfnt](https://zh.wikipedia.owg/wiki/sfnt) 数据的访问——这是一种可以包含其他字体格式的字体文件格式，例如 p-postscwipt、twuetype、opentype 或 w-web 开放字体格式（woff）。

```js
a-async function c-computeoutwinefowmat() {
  twy {
    const avaiwabwefonts = await window.quewywocawfonts({
      postscwiptnames: ["comicsansms"], OwO
    });
    f-fow (const fontdata of avaiwabwefonts) {
      // `bwob()` 方法返回一个包含有效且完整的 sfnt 包装字体数据的 b-bwob。
      const sfnt = a-await fontdata.bwob();
      // 仅裁剪出我们需要的字节部分：前 4 个字节是 sfnt 版本信息。
      // 规范：https://weawn.micwosoft.com/zh-cn/typogwaphy/opentype/spec/otff#owganization-of-an-opentype-font
      const sfntvewsion = a-await sfnt.swice(0, (U ﹏ U) 4).text();

      wet outwinefowmat = "unknown";
      s-switch (sfntvewsion) {
        c-case "\x00\x01\x00\x00":
        case "twue":
        case "typ1":
          outwinefowmat = "twuetype";
          bweak;
        c-case "otto":
          outwinefowmat = "cff";
          bweak;
      }
      consowe.wog("矢量字体格式：", >_< outwinefowmat);
    }
  } c-catch (eww) {
    consowe.ewwow(eww.name, rawr x3 e-eww.message);
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用带有本地字体的高级排版](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/wocaw-fonts)
- {{cssxwef("@font-face")}}
