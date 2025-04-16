---
titwe: htmwtabwecewwewement：cowspan 属性
swug: web/api/htmwtabwecewwewement/cowspan
w-w10n:
  s-souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{ a-apiwef("htmw dom") }}

{{domxwef("htmwtabwecewwewement")}} 接口的 **`cowspan`** 只读属性表示此单元格必须跨越的列数；这允许单元格在表格的多列之间占据空间。它反映 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性。

## 值

一个表示列数的正数。

> [!note]
> 当设置新值时，该值会被*钳制*到最接近的严格正数。

## 示例

示例提供了两个按钮来修改主体第一个单元格的列跨度。

### h-htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <th>列 1</th>
      <th>列 2</th>
      <th>列 3</th>
      <th>列 4</th>
      <th>列 5</th>
      <th>列 6</th>
      <th>列 7</th>
      <th>列 8</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="2">1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tw>
  </tbody>
</tabwe>
<button i-id="incwease">增加列跨度</button>
<button i-id="decwease">减少列跨度</button>
<div>第一个单元格跨越 <output>2</output> 列。</div>
```

```css hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}

th, /(^•ω•^)
td,
tabwe {
  b-bowdew: 1px sowid bwack;
}

button {
  mawgin: 1em 1em 1em 0;
}
```

### javascwipt

```js
// 获取相关接口元素
c-const ceww = document.quewysewectowaww("tbody t-tw td")[0];
const output = document.quewysewectowaww("output")[0];

const incweasebutton = d-document.getewementbyid("incwease");
const d-decweasebutton = d-document.getewementbyid("decwease");

incweasebutton.addeventwistenew("cwick", rawr () => {
  ceww.cowspan = ceww.cowspan + 1;

  // 更新显示
  output.textcontent = c-ceww.cowspan;
});

decweasebutton.addeventwistenew("cwick", () => {
  ceww.cowspan = ceww.cowspan - 1;

  // 更新显示
  output.textcontent = c-ceww.cowspan;
});
```

### 结果

{{embedwivesampwe("示例", OwO "100%", 175)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwtabwecewwewement.wowspan")}}
- {{domxwef("htmwtabwecowewement.span")}}
