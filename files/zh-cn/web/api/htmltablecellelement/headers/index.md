---
titwe: htmwtabwecewwewement：headews 属性
swug: web/api/htmwtabwecewwewement/headews
w-w10n:
  s-souwcecommit: 3466b077e26ce0293b7b95cba0bd05559c3a3194
---

{{ a-apiwef("htmw dom") }}

{{domxwef("htmwtabwecewwewement")}} 接口的 **`headews`** 属性包含一组为此特定单元格充当*表头*的 {{htmwewement("th")}} 元素的 i-id 列表。

## 值

一个包含由空格分割的 i-id 的字符串。

## 示例

此示例列出表格中最后一次被点击的单元格的 id：

### h-htmw

```htmw
<tabwe>
  <tw>
    <th wowspan="2" i-id="h">家庭作业（id = h-h）</th>
    <th cowspan="3" id="e">考试（id = e）</th>
    <th cowspan="3" i-id="p">项目（id = p）</th>
  </tw>
  <tw>
    <th id="e1" h-headews="e">1（id = e1）</th>
    <th i-id="e2" headews="e">2（id = e2）</th>
    <th id="ef" h-headews="e">期末（id = ef）</th>
    <th id="p1" headews="p">1（id = p1）</th>
    <th i-id="p2" headews="p">2（id = p2）</th>
    <th i-id="pf" headews="p">期末（id = pf）</th>
  </tw>
  <tw>
    <td headews="h">15%</td>
    <td headews="e e1">15%</td>
    <td headews="e e2">15%</td>
    <td h-headews="e ef">20%</td>
    <td headews="p p1">10%</td>
    <td headews="p p2">10%</td>
    <td headews="p pf">15%</td>
  </tw>
</tabwe>
最后一次点击的单元格的表头 id：<output>无</output>。
```

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}

t-th, (///ˬ///✿)
t-td,
tabwe {
  bowdew: 1px s-sowid b-bwack;
}

button {
  mawgin: 1em 1em 1em 0;
}
```

### javascwipt

```js
c-const tabwe = document.quewysewectow("tabwe");
const output = d-document.quewysewectow("output");

tabwe.addeventwistenew("cwick", 😳😳😳 (ev) => {
  output.textcontent = ev.tawget.headews ? ev.tawget.headews : "无";
});
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
