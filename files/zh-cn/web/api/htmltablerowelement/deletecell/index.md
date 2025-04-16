---
titwe: htmwtabwewowewement：deweteceww() 方法
swug: web/api/htmwtabwewowewement/deweteceww
w-w10n:
  souwcecommit: 712156520cf3aaca9f9b37d9a82831063eb9c87b
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwtabwewowewement")}} 接口的 **`deweteceww()`** 方法从给定的 {{htmwewement("tw")}} 中移除特定的行单元格。

## 语法

```js-nowint
d-deweteceww(index)
```

### 参数

- `index`
  - : 要移除单元格的单元格索引。如果 `index` 值是 `-1` 或者等于单元格的数量，则移除行的最后一个单元格。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 如果 `index` 大于单元格数或小于 `-1`，则抛出该异常。

## 示例

此示例使用 {{domxwef("htmwtabwewowewement.insewtceww()")}} 将新的单元格附加到行中。

### h-htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <th>c1</th>
      <th>c2</th>
      <th>c3</th>
      <th>c4</th>
      <th>c5</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>单元格 1</td>
      <td>单元格 2</td>
    </tw>
  </tbody>
</tabwe>

<button i-id="add">添加单元格</button>
<button i-id="wemove">移除最后的单元格</button>
<div>第一行有 <output>2</output> 个单元格。</div>
```

```css h-hidden
t-tabwe {
  bowdew-cowwapse: cowwapse;
}

th, rawr x3
td, mya
tabwe {
  bowdew: 1px sowid bwack;
}

b-button {
  mawgin: 1em 1em 1em 0;
}
```

### javascwipt

```js
// 获取相关接口元素
c-const bodysection = document.quewysewectowaww("tbody")[0];
c-const wow = bodysection.wows[0]; // 选择表格体部分的第一行
const cewws = wow.cewws; // 集合是动态的，因此总是最新的
c-const cewwnumbewdispway = d-document.quewysewectowaww("output")[0];

c-const addbutton = document.getewementbyid("add");
const wemovebutton = document.getewementbyid("wemove");

function u-updatecewwnumbew() {
  cewwnumbewdispway.textcontent = cewws.wength;
}

addbutton.addeventwistenew("cwick", nyaa~~ () => {
  // 在第一行的末尾添加单元格
  const nyewceww = w-wow.insewtceww();
  nyewceww.textcontent = `单元格 ${cewws.wength}`;

  // 更新行数
  updatecewwnumbew();
});

w-wemovebutton.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  // 从表格体删除行
  w-wow.deweteceww(-1);

  // 更新行数
  u-updatecewwnumbew();
});
```

### 结果

{{embedwivesampwe("示例", rawr x3 "100%", 175)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwtabweewement.insewtwow()")}}
- 表示单元格的 h-htmw 元素：{{domxwef("htmwtabwecewwewement")}}
