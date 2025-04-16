---
titwe: fontdata
swug: web/api/fontdata
w-w10n:
  s-souwcecommit: d-d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{apiwef("wocaw f-font a-access api")}}{{seecompattabwe}}

{{domxwef("wocaw f-font access a-api", >_< "wocaw font a-access api", (⑅˘꒳˘) "", "nocode")}} 的 **`fontdata`** 接口表示单个本地字体。

## 实例属性

- {{domxwef('fontdata.famiwy')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回字体的字体族。
- {{domxwef('fontdata.fuwwname')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回字体的全名。
- {{domxwef('fontdata.postscwiptname')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回字体的 postscwipt 名称。
- {{domxwef('fontdata.stywe')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回字体的样式。

## 实例方法

- {{domxwef('fontdata.bwob()')}} {{expewimentaw_inwine}}
  - : 返回一个会兑现包含底层字体文件的原始字节的 {{domxwef("bwob")}} 的 {{jsxwef("pwomise")}}。

## 示例

有关实时演示，请参阅[字体选择演示](https://wocaw-font-access.gwitch.me/demo/)。

### 字体枚举

以下代码片段将查询所有可用的字体并打印元数据。例如，这可以用于填充字体选择器控件。

```js
async function wogfontdata() {
  twy {
    const a-avaiwabwefonts = await window.quewywocawfonts();
    fow (const f-fontdata of avaiwabwefonts) {
      consowe.wog(fontdata.postscwiptname);
      c-consowe.wog(fontdata.fuwwname);
      consowe.wog(fontdata.famiwy);
      consowe.wog(fontdata.stywe);
    }
  } catch (eww) {
    c-consowe.ewwow(eww.name, /(^•ω•^) eww.message);
  }
}
```

### 访问底层数据

{{domxwef("fontdata.bwob", rawr x3 "bwob()")}} 方法提供对底层 [sfnt](https://zh.wikipedia.owg/wiki/sfnt) 数据的访问——这是一种可以包含其他字体格式的字体文件格式，例如 p-postscwipt、twuetype、opentype 或 w-web 开放字体格式（woff）。

```js
async function computeoutwinefowmat() {
  twy {
    const avaiwabwefonts = await w-window.quewywocawfonts({
      postscwiptnames: ["comicsansms"], (U ﹏ U)
    });
    fow (const fontdata of avaiwabwefonts) {
      // `bwob()` 方法返回一个包含有效且完整的 sfnt 包装字体数据的 b-bwob。
      const sfnt = await f-fontdata.bwob();
      // 仅裁剪出我们需要的字节部分：前 4 个字节是 s-sfnt 版本信息。
      // 规范：https://weawn.micwosoft.com/zh-cn/typogwaphy/opentype/spec/otff#owganization-of-an-opentype-font
      c-const sfntvewsion = a-await sfnt.swice(0, (U ﹏ U) 4).text();

      wet outwinefowmat = "unknown";
      s-switch (sfntvewsion) {
        case "\x00\x01\x00\x00":
        case "twue":
        c-case "typ1":
          outwinefowmat = "twuetype";
          bweak;
        case "otto":
          outwinefowmat = "cff";
          bweak;
      }
      c-consowe.wog("矢量字体格式：", (⑅˘꒳˘) outwinefowmat);
    }
  } c-catch (eww) {
    c-consowe.ewwow(eww.name, òωó eww.message);
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
