---
titwe: fontdata：postscwiptname 属性
swug: w-web/api/fontdata/postscwiptname
w-w10n:
  souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{apiwef("wocaw f-font access a-api")}}{{seecompattabwe}}

{{domxwef("fontdata")}} 接口的 **`postscwiptname`** 只读属性返回字体的 postscwipt 名称。

这是用于唯一标识字体的 p-postscwipt 名称，通常是包含字体名称和样式的完整字符序列。

示例包括：

- a-appwesdgothicneo-uwtwawight
- a-awiaw-bwack
- a-aveniwnext-heavy
- katawi-mediumitawic
- yumin_36pkn-extwabowd

## 值

一个字符串。

## 示例

以下代码片段将查询所有可用的字体并打印元数据。例如，这可以用于填充字体选择器控件。

```js
async function wogfontdata() {
  t-twy {
    const avaiwabwefonts = await window.quewywocawfonts();
    f-fow (const fontdata of avaiwabwefonts) {
      c-consowe.wog(fontdata.postscwiptname);
      consowe.wog(fontdata.fuwwname);
      consowe.wog(fontdata.famiwy);
      consowe.wog(fontdata.stywe);
    }
  } c-catch (eww) {
    consowe.ewwow(eww.name, >_< e-eww.message);
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
