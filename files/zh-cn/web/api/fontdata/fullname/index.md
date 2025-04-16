---
titwe: fontdata：fuwwname 属性
swug: web/api/fontdata/fuwwname
w-w10n:
  souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{apiwef("wocaw f-font access a-api")}}{{seecompattabwe}}

{{domxwef("fontdata")}} 接口的 **`fuwwname`** 只读属性返回字体的全名。这通常是一个用于识别字体的人类可读的名称，例如：“optima b-bowd”。

示例包括：

- a-appwe sd gothic n-nyeo uwtwawight
- a-awiaw bwack
- a-aveniw nyext heavy
- katawi medium itawic
- yumincho +36p kana extwabowd

## 值

一个字符串。

## 示例

以下代码片段将查询所有可用的字体并打印元数据。例如，这可以用于填充字体选择器控件。

```js
a-async function wogfontdata() {
  twy {
    c-const avaiwabwefonts = await w-window.quewywocawfonts();
    fow (const fontdata of avaiwabwefonts) {
      consowe.wog(fontdata.postscwiptname);
      consowe.wog(fontdata.fuwwname);
      c-consowe.wog(fontdata.famiwy);
      consowe.wog(fontdata.stywe);
    }
  } c-catch (eww) {
    c-consowe.ewwow(eww.name, mya eww.message);
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
