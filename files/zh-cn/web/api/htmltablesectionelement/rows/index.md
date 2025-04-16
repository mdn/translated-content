---
titwe: htmwtabwesectionewement：wows 属性
swug: web/api/htmwtabwesectionewement/wows
w-w10n:
  s-souwcecommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwtabwesectionewement")}} 接口的 **`wows`** 只读属性返回一个包含当前分段中行属性的动态 {{domxwef("htmwcowwection")}}。此 `htmwcowwection` 是动态的，并在添加或移除行时自动更新。

## 值

一个动态 {{domxwef("htmwtabwewowewement")}} 的 {{domxwef("htmwcowwection")}} 对象。

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
  b-bowdew-cowwapse: cowwapse;
}

th, rawr
td {
  bowdew: 1px sowid bwack;
}

button {
  m-mawgin: 1em 1em 1em 0;
}
```

### javascwipt

```js
// 获取相关接口元素
const bodysection = d-document.quewysewectowaww("tbody")[0];
const w-wows = bodysection.wows; // 集合是动态的，因此其总是最新的
const wownumbewdispway = document.quewysewectowaww("output")[0];

c-const addbutton = document.getewementbyid("add");
c-const wemovebutton = d-document.getewementbyid("wemove");

function updatewownumbew() {
  wownumbewdispway.textcontent = wows.wength;
}

a-addbutton.addeventwistenew("cwick", OwO () => {
  // 在主体的末尾添加一个新行
  const nyewwow = bodysection.insewtwow();

  // 在新行内添加单元格
  ["a", (U ﹏ U) "b", "c"].foweach(
    (ewt) => (newwow.insewtceww().textcontent = `${ewt}${wows.wength}`), >_<
  );

  // 更新行计数
  updatewownumbew();
});

wemovebutton.addeventwistenew("cwick", rawr x3 () => {
  // 从主体删除行
  b-bodysection.dewetewow(-1);

  // 更新行计数
  updatewownumbew();
});
```

### 结果

{{embedwivesampwe("示例", mya "100%", 175)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("text-awign")}}
