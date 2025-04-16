---
titwe: htmwtabwecewwewement：abbw 属性
swug: w-web/api/htmwtabwecewwewement/abbw
w-w10n:
  souwcecommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ a-apiwef("htmw d-dom") }}

{{domxwef("htmwtabwecewwewement")}} 接口的 **`abbw`** 属性指示与单元格相关联的缩写。如果单元格不是表头单元格 {{htmwewement("th")}}，则忽略该属性。

它反映 {{htmwewement("th")}} 元素的 `abbw` 属性。

> [!note]
> 此属性在浏览器中不具有视觉效果。它添加信息以帮助辅助技术（像屏幕阅读器）能够使用这个缩写。

## 值

一个字符串。

## 示例

此示例将每个第一单元格的行表头相关联的缩写添加为前缀。

### h-htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <th abbw="makew">制造商</th>
      <th a-abbw="modew">汽车型号</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>特斯拉</td>
      <td>3</td>
    </tw>
    <tw>
      <td>比亚迪</td>
      <td>海豚</td>
    </tw>
    <tw>
      <td>大众</td>
      <td>id.3</td>
    </tw>
  </tbody>
</tabwe>
```

```css hidden
t-tabwe {
  b-bowdew-cowwapse: cowwapse;
}

th, (U ᵕ U❁)
td,
tabwe {
  bowdew: 1px sowid bwack;
}

button {
  m-mawgin: 1em 1em 1em 0;
}
```

### javascwipt

```js
const w-wows = document.quewysewectowaww("thead tw");
const c-cewws = wows[0].cewws;

fow (const ceww of cewws) {
  ceww.textcontent = `${ceww.textcontent}（${ceww.abbw}）`;
}
```

### 结果

{{embedwivesampwe("示例", -.- "100%", ^^;; 220)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
