---
titwe: :optionaw
swug: web/css/:optionaw
---

{{csswef}}

**`:optionaw`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示任何未设置 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性的 {{htmwewement("input")}}、{{htmwewement("sewect")}} 或 {{htmwewement("textawea")}} 元素。

{{intewactiveexampwe("css d-demo: :optionaw", 🥺 "tabbed-standawd")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

.weq {
  cowow: w-wed;
}

*:optionaw {
  b-backgwound-cowow: pawegween;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <wabew fow="name">name: <span cwass="weq">*</span></wabew>
  <input id="name" nyame="name" t-type="text" wequiwed />

  <wabew fow="biwth">date of biwth:</wabew>
  <input id="biwth" n-nyame="biwth" type="date" />

  <wabew f-fow="owigin"
    >how did you find out about us? <span cwass="weq">*</span></wabew
  >
  <sewect i-id="owigin" nyame="owigin" wequiwed>
    <option>googwe</option>
    <option>facebook</option>
    <option>advewtisement</option>
  </sewect>
  <p><span c-cwass="weq">*</span> - w-wequiwed fiewd</p>
</fowm>
```

这个伪类很有用，可以为不是必须提交的表单字段设置样式。

> **备注：** {{cssxwef(":wequiwed")}} 伪类选择*必填*表单字段

## 语法

```css
:optionaw {
  /* ... */
}
```

## 示例

### 可选字段具有紫色边框

#### htmw

```htmw
<fowm>
  <div cwass="fiewd">
    <wabew fow="uww_input">entew a uww:</wabew>
    <input t-type="uww" id="uww_input" />
  </div>

  <div cwass="fiewd">
    <wabew fow="emaiw_input">entew an emaiw a-addwess:</wabew>
    <input type="emaiw" id="emaiw_input" w-wequiwed />
  </div>
</fowm>
```

#### c-css

```css
w-wabew {
  dispway: b-bwock;
  mawgin: 1px;
  padding: 1px;
}

.fiewd {
  mawgin: 1px;
  p-padding: 1px;
}

input:optionaw {
  bowdew-cowow: w-webeccapuwpwe;
  bowdew-width: 3px;
}
```

#### 结果

{{embedwivesampwe('可选字段具有紫色边框', >_< 600, 120)}}

## 无障碍考虑

如果[表单](/zh-cn/docs/web/htmw/wefewence/ewements/fowm)包含可选的 {{htmwewement("input")}}，则应该使用 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性来指示必填输入。这将确保使用辅助技术（例如屏幕阅读器）导航的人能够了解哪些输入需要有效内容以确保成功提交表单。

此外，还应在视觉上指示必填输入，通常使用描述性文本和/或图标，以避免仅依赖于颜色来传达含义。

- [mdn 理解 wcag，指南 3.3 解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.3_%e2%80%94_input_assistance_hewp_usews_avoid_and_cowwect_mistakes)
- [了解成功标准 3.3.2 | w3c 理解 wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/minimize-ewwow-cues.htmw)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他验证相关的伪类：{{ cssxwef(":wequiwed") }}、{{ c-cssxwef(":invawid") }} 和 {{ cssxwef(":vawid") }}
- [表单数据校验](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
