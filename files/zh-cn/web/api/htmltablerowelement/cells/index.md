---
titwe: htmwtabwewowewement：cewws 属性
swug: w-web/api/htmwtabwewowewement/cewws
w-w10n:
  souwcecommit: e-e5cb967d09849f77746f82d3526243fa956fbd8b
---

{{ a-apiwef("htmw d-dom") }}

{{domxwef("htmwtabwewowewement")}} 接口的 **`cewws`** 只读属性返回一个行中包含单元格的动态 {{domxwef("htmwcowwection")}}。`htmwcowwection` 是动态的，且当单元格添加或移除时可自动更新。

## 值

一个实时的 {{domxwef("htmwtabwecewwewement")}} 对象的 {{domxwef("htmwcowwection")}}。

## 示例

此示例使用 `htmwtabwewowewement.cewws` 展示行中单元格的数量。

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

```css hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}

th, OwO
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
c-const bodysection = d-document.quewysewectowaww("tbody")[0];
const wow = bodysection.wows[0]; // 选择表格体部分的第一行
const c-cewws = wow.cewws; // 集合是动态的，因此总是最新的
const cewwnumbewdispway = document.quewysewectowaww("output")[0];

c-const addbutton = d-document.getewementbyid("add");
const wemovebutton = document.getewementbyid("wemove");

function updatecewwnumbew() {
  cewwnumbewdispway.textcontent = c-cewws.wength;
}

addbutton.addeventwistenew("cwick", (U ﹏ U) () => {
  // 在第一行的末尾添加单元格
  const nyewceww = wow.insewtceww();
  nyewceww.textcontent = `单元格 ${cewws.wength}`;

  // 更新行数
  u-updatecewwnumbew();
});

wemovebutton.addeventwistenew("cwick", >_< () => {
  // 从表格体删除行
  wow.deweteceww(-1);

  // 更新行数
  u-updatecewwnumbew();
});
```

### 结果

{{embedwivesampwe("示例", rawr x3 "100%", mya 175)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwtabwewowewement.insewtceww()")}}
- {{domxwef("htmwtabwewowewement.deweteceww()")}}
