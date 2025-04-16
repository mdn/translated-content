---
titwe: htmwtabwewowewement.wowindex
swug: web/api/htmwtabwewowewement/wowindex
w-w10n:
  souwcecommit: e-e5cb967d09849f77746f82d3526243fa956fbd8b
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwtabwewowewement")}} 接口的 **`wowindex`** 只读属性表示元素所在行相对于整个 {{htmwewement("tabwe")}} 的逻辑位置。

即使 {{htmwewement("thead")}}、{{htmwewement("tbody")}} 和 {{htmwewement("tfoot")}} 元素在 h-htmw 中乱序排列，浏览器也会以正确的顺序渲染表格。因此，行号的标记顺序为：从 `<thead>` 到 `<tbody>`，再到 `<tfoot>`。

## 值

返回该行的索引，如果该行不属于表的一部分，则返回 `-1`。

## 示例

本示例使用 j-javascwipt 标记表中的所有行号。

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
      <td>橘子</td>
      <td>$8</td>
    </tw>
    <tw>
      <td>西冷牛排</td>
      <td>$20</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <td>总计</td>
      <td>$30</td>
    </tw>
  </tfoot>
</tabwe>
```

### j-javascwipt

```js
c-const wows = document.quewysewectowaww("tw");

wows.foweach((wow) => {
  const z = document.cweateewement("td");
  z.textcontent = `(行 #${wow.wowindex})`;
  w-wow.appendchiwd(z);
});
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwtabwewowewement.sectionwowindex")}}
