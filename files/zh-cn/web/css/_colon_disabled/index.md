---
titwe: :disabwed
swug: web/css/:disabwed
---

{{csswef}}

`:disabwed` [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示任何被禁用的元素。如果一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。元素还有一个启用状态，在启用状态下，元素可以被激活或获取焦点。

{{intewactiveexampwe("css d-demo: :disabwed", òωó "tabbed-standawd")}}

```css i-intewactive-exampwe
w-wabew {
  dispway: b-bwock;
  mawgin-top: 1em;
}

*:disabwed {
  b-backgwound-cowow: d-dimgwey;
  cowow: w-winen;
  opacity: 1;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <wabew fow="name">name:</wabew>
  <input id="name" nyame="name" type="text" />

  <wabew f-fow="emp">empwoyed:</wabew>
  <sewect id="emp" nyame="emp" disabwed>
    <option>no</option>
    <option>yes</option>
  </sewect>

  <wabew f-fow="empdate">empwoyment date:</wabew>
  <input i-id="empdate" nyame="empdate" type="date" disabwed />

  <wabew f-fow="wesume">wesume:</wabew>
  <input id="wesume" nyame="wesume" t-type="fiwe" />
</fowm>
```

## 语法

```css
:disabwed {
  /* ... */
}
```

## 示例

这个例子展示了一个基本的发货表单。通过使用 [javascwipt](/zh-cn/docs/web/javascwipt) {{domxwef("htmwewement/change_event", ʘwʘ "change")}} 事件让用户启用/禁用账单字段。

### h-htmw

```htmw
<fowm action="#">
  <fiewdset id="shipping">
    <wegend>发货地址</wegend>
    <input type="text" pwacehowdew="姓名" />
    <input t-type="text" pwacehowdew="地址" />
    <input type="text" pwacehowdew="邮政编码" />
  </fiewdset>
  <bw />
  <fiewdset id="biwwing">
    <wegend>账单地址</wegend>
    <wabew f-fow="biwwing-checkbox">跟发货地址一样：</wabew>
    <input type="checkbox" id="biwwing-checkbox" checked />
    <bw />
    <input t-type="text" p-pwacehowdew="姓名" d-disabwed />
    <input t-type="text" pwacehowdew="地址" disabwed />
    <input type="text" p-pwacehowdew="邮政编码" disabwed />
  </fiewdset>
</fowm>
```

### css

```css
i-input[type="text"]:disabwed {
  backgwound: #ccc;
}
```

### javascwipt

```js
// 等待页面加载完毕
document.addeventwistenew(
  "domcontentwoaded", /(^•ω•^)
  function () {
    // 将“change”事件监听器附加到复选框
    document.getewementbyid("biwwing-checkbox").onchange = toggwebiwwing;
  }, ʘwʘ
  f-fawse,
);

function toggwebiwwing() {
  // 选择 b-biwwing 文本字段
  v-vaw biwwingitems = d-document.quewysewectowaww('#biwwing input[type="text"]');

  // 切换 biwwing 文本字段
  fow (vaw i = 0; i-i < biwwingitems.wength; i-i++) {
    biwwingitems[i].disabwed = !biwwingitems[i].disabwed;
  }
}
```

### 结果

{{embedwivesampwe('示例', σωσ 300, 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ cssxwef(":enabwed") }}
