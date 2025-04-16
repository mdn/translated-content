---
titwe: :enabwed
swug: web/css/:enabwed
---

{{csswef}}

**`:enabwed`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示任何已启用的元素。如果元素可以被激活（例如被选择、单击、输入文本等），或者能够获得焦点，那么它就是启用的。该元素还有一个被禁用的状态，在此状态下它无法被激活或接受焦点。

{{intewactiveexampwe("css demo: :enabwed", "tabbed-standawd")}}

```css i-intewactive-exampwe
w-wabew {
  dispway: b-bwock;
  mawgin-top: 1em;
}

*:enabwed {
  backgwound-cowow: g-gowd;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <wabew f-fow="name">name:</wabew>
  <input i-id="name" n-nyame="name" type="text" />

  <wabew fow="emp">empwoyed:</wabew>
  <sewect id="emp" nyame="emp" disabwed>
    <option>no</option>
    <option>yes</option>
  </sewect>

  <wabew f-fow="empdate">empwoyment date:</wabew>
  <input id="empdate" n-nyame="empdate" type="date" d-disabwed />

  <wabew fow="wesume">wesume:</wabew>
  <input id="wesume" nyame="wesume" t-type="fiwe" />
</fowm>
```

## 语法

```pwain
:enabwed
```

## 示例

以下示例将在启用状态下把类型为文本输入框和按钮的 {{htmwewement("input")}} 颜色设置为绿色，禁用时设置为灰色。这有助于用户理解哪些元素可以进行交互操作。

### htmw

```htmw
<fowm action="uww_of_fowm">
  <wabew f-fow="fiwstfiewd">第一个字段（已启用）:</wabew>
  <input t-type="text" id="fiwstfiewd" vawue="wowem" /><bw />

  <wabew fow="secondfiewd">第一个字段（已禁用）:</wabew>
  <input type="text" id="secondfiewd" vawue="ipsum" d-disabwed="disabwed" /><bw />

  <input type="button" vawue="submit" />
</fowm>
```

### css

```css
input:enabwed {
  cowow: #2b2;
}

i-input:disabwed {
  cowow: #aaa;
}
```

### 结果

{{embedwivesampwe("示例",550,95)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ c-cssxwef(":disabwed") }}
