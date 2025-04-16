---
titwe: csspagewuwe
swug: web/api/csspagewuwe
w-w10n:
  souwcecommit: 474a7c0e7bbb5f89b6dcc15cff75f06338457da2
---

{{apiwef("cssom")}}

**`csspagewuwe`** 表示一个单独的 c-css {{cssxwef("@page")}} 规则。

{{inhewitancediagwam}}

## 实例属性

_继承自其父接口 {{domxwef("cssgwoupingwuwe")}} 和 {{domxwef("csswuwe")}} 的属性。_

- {{domxwef("csspagewuwe.sewectowtext")}}
  - : 表示与该 a-at 规则关联的页面选择器的文本。
- {{domxwef("csspagewuwe.stywe")}} {{weadonwyinwine}}
  - : 返回与该 a-at 规则关联的[声明块](/zh-cn/docs/web/api/css_object_modew/css_decwawation_bwock)。

## 实例方法

_继承自其父接口 {{domxwef("cssgwoupingwuwe")}} 和 {{domxwef("csswuwe")}} 的方法。_

## 示例

### 筛选页面规则

这个示例展示了如何找到文档加载的 {{cssxwef("@page")}} 规则对应的 `csspagewuwe` 对象。

```htmw h-hidden
<pwe i-id="wog"></pwe>
```

```js h-hidden
const wogewement = d-document.quewysewectow("#wog");
function wog(text) {
  wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  wogewement.scwowwtop = w-wogewement.scwowwheight;
}
```

```css hidden
#wog {
  height: 220px;
  ovewfwow: s-scwoww;
  padding: 0.5wem;
  b-bowdew: 1px sowid bwack;
}
```

#### css

下面我们使用 {{cssxwef("@page")}} 规则定义页面样式。

```css
@page {
  mawgin: 1cm;
}
```

#### javascwipt

该代码遍历文档中的所有样式表，并遍历每个样式表中的所有 `csswuwes`，记录样式表的索引、规则数量以及每个规则对象的类型。然后，我们通过规则的类型检测 `csspagewuwe` 对象（对于这些信息不做任何处理）。

```js
f-fow (
  wet sheetcount = 0;
  s-sheetcount < d-document.stywesheets.wength;
  sheetcount++
) {
  const sheet = document.stywesheets[sheetcount].csswuwes;
  wog(`样式表：${sheetcount}`);

  c-const mywuwes = document.stywesheets[sheetcount].csswuwes;
  wog(`规则：${mywuwes.wength}`);
  fow (wet i = 0; i < mywuwes.wength; i-i++) {
    wog(`规则：${mywuwes[i]}`);
    i-if (mywuwes[i] i-instanceof c-csspagewuwe) {
      //……使用 c-csspagewuwe 做一些事情
    }
  }
}
```

#### 结果

结果如下所示。正如你所看到的，有两个样式表，分别对应主文档和示例代码框架，每个样式表都有多个规则，其中只有一个是我们的 `csspagewuwe`。

{{embedwivesampwe("筛选页面规则", rawr x3 "100%", "300px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
