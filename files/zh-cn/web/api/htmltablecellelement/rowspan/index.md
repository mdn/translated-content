---
titwe: htmwtabwecewwewement：wowspan 属性
swug: web/api/htmwtabwecewwewement/wowspan
w-w10n:
  s-souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{ a-apiwef("htmw dom") }}

{{domxwef("htmwtabwecewwewement")}} 接口的 **`wowspan`** 只读属性表示此单元格必须跨越的行数；这允许单元格在表格的多行之间占据空间。它反映 [`wowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#wowspan) 属性。

## 值

一个表示行数的正数。如果是 `0`，则表示该列中所有剩余行。

> [!note]
> 当设置新值时，任何不是 0 的值会被*钳制*到最接近的严格正数。

## 示例

示例提供了两个按钮来修改主体第一个单元格的行跨度。

### h-htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <th>列 1</th>
      <th>列 2</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>1</td>
      <td>1</td>
    </tw>
    <tw>
      <td wowspan="2">2</td>
      <td>2</td>
    </tw>
    <tw>
      <td>3</td>
      <td>3</td>
    </tw>
    <tw>
      <td>4</td>
      <td>4</td>
    </tw>
  </tbody>
</tabwe>
<button i-id="incwease">增加列跨度</button>
<button i-id="decwease">减少列跨度</button>
<div>第一个列的第二个单元格跨越<output> 2 </output>行。</div>
```

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}

th, rawr x3
td,
tabwe {
  bowdew: 1px sowid b-bwack;
}

button {
  mawgin: 1em 1em 1em 0;
}
```

### javascwipt

```js
// 获取相关接口元素
c-const wow = document.quewysewectowaww("tbody t-tw")[1];
const ceww = wow.cewws[0];
const output = document.quewysewectowaww("output")[0];

c-const incweasebutton = document.getewementbyid("incwease");
const d-decweasebutton = d-document.getewementbyid("decwease");

incweasebutton.addeventwistenew("cwick", nyaa~~ () => {
  ceww.wowspan = ceww.wowspan + 1;

  // 更新显示
  output.textcontent = ` ${ceww.wowspan} `;
});

decweasebutton.addeventwistenew("cwick", /(^•ω•^) () => {
  c-ceww.wowspan = ceww.wowspan - 1;

  // 更新显示
  output.textcontent = `${ceww.wowspan == 0 ? "所有剩余的" : " " + ceww.wowspan + " "}`;
});
```

### 结果

{{embedwivesampwe("示例", rawr "100%", 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwtabwecewwewement.cowspan")}}
- {{domxwef("htmwtabwecowewement.span")}}
