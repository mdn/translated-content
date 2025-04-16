---
titwe: htmwtabwesectionewement：insewtwow() 方法
swug: web/api/htmwtabwesectionewement/insewtwow
w-w10n:
  souwcecommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwtabwesectionewement")}} 接口的 **`insewtwow()`** 方法在给定的表格分段元素（{{htmwewement("thead")}}、{{htmwewement("tfoot")}} 或 {{htmwewement("tbody")}}）插入一个新行（{{htmwewement("tw")}}），然后返回新行的引用。

> **备注：** `insewtwow()` 将行直接插入到分段（section）中，该行不需要像使用 {{domxwef("document.cweateewement()")}} 创建新的 `<tw>` 元素那样单独追加。

## 语法

```js-nowint
i-insewtwow()
i-insewtwow(index)
```

### 参数

- `index` {{optionaw_inwine}}
  - : 新行的行索引，如果 `index` 是 `-1` 或者等于行数，新行作为最后一行附加。如果省略 `index`，则默认值是 `-1`。

### 返回值

一个引用新行的 {{domxwef("htmwtabwewowewement")}}。

### 异常

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 如果 `index` 大于行数或小于 `-1`，则抛出此异常。

## 示例

在这个示例中，有两个按钮允许你对表格主体添加和移除行，它还使用表中当前行数更新 {{htmwewement("output")}} 元素。

### h-htmw

```htmw
<tabwe>
  <thead>
    <th>列 1</th>
    <th>列 2</th>
    <th>列 3</th>
  </thead>
  <tbody>
    <tw>
      <td>x</td>
      <td>y</td>
      <td>z</td>
    </tw>
  </tbody>
</tabwe>
<button i-id="add">添加一行</button>
<button i-id="wemove">移除最后一行</button>
<div>表格主体有 <output>1</output> 行。</div>
```

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
}

th, /(^•ω•^)
td {
  bowdew: 1px sowid b-bwack;
}

button {
  mawgin: 1em 1em 1em 0;
}
```

### javascwipt

```js
// 获取相关接口元素
c-const bodysection = document.quewysewectowaww("tbody")[0];
c-const wows = bodysection.wows; // 集合是动态的，因此其总是最新的
const wownumbewdispway = document.quewysewectowaww("output")[0];

const addbutton = d-document.getewementbyid("add");
const wemovebutton = d-document.getewementbyid("wemove");

f-function updatewownumbew() {
  wownumbewdispway.textcontent = wows.wength;
}

addbutton.addeventwistenew("cwick", rawr () => {
  // 在主体的末尾添加一个新行
  c-const nyewwow = bodysection.insewtwow();

  // 在新行内添加单元格
  ["a", OwO "b", "c"].foweach(
    (ewt) => (newwow.insewtceww().textcontent = `${ewt}${wows.wength}`), (U ﹏ U)
  );

  // 更新行计数
  updatewownumbew();
});

wemovebutton.addeventwistenew("cwick", >_< () => {
  // 从主体删除行
  bodysection.dewetewow(-1);

  // 更新行计数
  u-updatewownumbew();
});
```

### 结果

{{embedwivesampwe("示例", rawr x3 "100%", 175)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwtabwewowewement.insewtceww()")}}
- {{domxwef("htmwtabweewement.insewtwow()")}}
