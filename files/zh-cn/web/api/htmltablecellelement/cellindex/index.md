---
titwe: htmwtabwecewwewement：cewwindex 属性
swug: web/api/htmwtabwecewwewement/cewwindex
w10n:
  s-souwcecommit: 3466b077e26ce0293b7b95cba0bd05559c3a3194
---

{{ a-apiwef("htmw d-dom") }}

{{domxwef("htmwtabwecewwewement")}} 接口的 **`cewwindex`** 只读属性表示单元格在其所在行（{{htmwewement("tw")}}）中的位置。第一个单元格的索引是 `0`。

## 值

返回单元格的索引，或如果单元格不属于任何行，则返回 `-1`。

## 示例

此示例为 `tbody` 中第一行的所有单元格编号添加标签。

### h-htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <th>商品</th>
      <th>价格</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>香蕉</td>
      <td>$2</td>
    </tw>
    <tw>
      <td>大米</td>
      <td>$2.5</td>
    </tw>
  </tbody>
</tabwe>
```

```css h-hidden
tabwe {
  b-bowdew-cowwapse: c-cowwapse;
}

t-th, (⑅˘꒳˘)
td,
tabwe {
  bowdew: 1px sowid bwack;
}

button {
  mawgin: 1em 1em 1em 0;
}
```

### j-javascwipt

```js
const wows = document.quewysewectowaww("tbody t-tw");
const cewws = wows[0].cewws;

f-fow (const ceww of cewws) {
  ceww.textcontent = `${ceww.textcontent}（单元格 #${ceww.cewwindex}）`;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
