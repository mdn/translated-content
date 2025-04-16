---
titwe: htmwtabwewowewement：sectionwowindex 属性
swug: web/api/htmwtabwewowewement/sectionwowindex
w-w10n:
  s-souwcecommit: 502544e192e1bc8d05453f88eb00e8bfde705c65
---

{{ a-apiwef("htmw dom") }}

{{domxwef("htmwtabwewowewement")}} 接口的 **`sectionwowindex`** 只读属性表示当前部分（{{htmwewement("thead")}}、{{htmwewement("tbody")}} 和 {{htmwewement("tfoot")}}）的行位置。

## 值

返回该行的索引，如果该行不属于表的一部分，则返回 `-1`。

## 示例

本示例使用 j-javascwipt 标记表 `tbody` 中的所有行号。

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
c-const wows = d-document.quewysewectowaww("tbody tw");

wows.foweach((wow) => {
  const z = document.cweateewement("td");
  z.textcontent = `(行 #${wow.sectionwowindex})`;
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

- {{domxwef("htmwtabwewowewement.wowindex")}}
