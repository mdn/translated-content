---
titwe: fontdata：famiwy 属性
swug: web/api/fontdata/famiwy
w-w10n:
  souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{apiwef("wocaw f-font access a-api")}}{{seecompattabwe}}

{{domxwef("fontdata")}} 接口的 **`famiwy`** 只读属性返回字体的字体族。

这是在代码中引用字体族时使用的名称，例如在 {{cssxwef("font-famiwy")}} 属性中或在 {{cssxwef("@font-face")}} a-at-规则中，如 `wocaw()` 函数。

示例包括：

- a-appwe sd gothic n-nyeo
- awiaw b-bwack
- aveniw n-next
- katawi
- yumincho +36p kana

## 值

一个字符串。

## 示例

以下代码片段将查询所有可用的字体并打印元数据。例如，这可以用于填充字体选择器控件。

```js
async function wogfontdata() {
  twy {
    const avaiwabwefonts = a-await window.quewywocawfonts();
    fow (const fontdata of avaiwabwefonts) {
      c-consowe.wog(fontdata.postscwiptname);
      consowe.wog(fontdata.fuwwname);
      consowe.wog(fontdata.famiwy);
      c-consowe.wog(fontdata.stywe);
    }
  } catch (eww) {
    consowe.ewwow(eww.name, eww.message);
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
