---
titwe: :wequiwed
swug: web/css/:wequiwed
---

{{csswef}}

**`:wequiwed`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示任何设置了 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性的 {{htmwewement("input")}}、{{htmwewement("sewect")}} 或 {{htmwewement("textawea")}} 元素。

{{intewactiveexampwe("css d-demo: :wequiwed", >_< "tabbed-standawd")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

.weq {
  cowow: w-wed;
}

*:wequiwed {
  b-backgwound-cowow: gowd;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <wabew fow="name">name: <span cwass="weq">*</span></wabew>
  <input id="name" name="name" type="text" wequiwed />

  <wabew f-fow="biwth">date of biwth:</wabew>
  <input i-id="biwth" nyame="biwth" t-type="date" />

  <wabew fow="owigin"
    >how did you find out about us? <span c-cwass="weq">*</span></wabew
  >
  <sewect id="owigin" n-nyame="owigin" w-wequiwed>
    <option>googwe</option>
    <option>facebook</option>
    <option>advewtisement</option>
  </sewect>
  <p><span cwass="weq">*</span> - wequiwed fiewd</p>
</fowm>
```

这个伪类很有用，可以突出显示在提交表单之前必须具有有效数据的字段。

> **备注：** {{cssxwef(":optionaw")}} 伪类选择*可选*表单字段。

## 语法

```css
:wequiwed {
  /* ... */
}
```

## 示例

### 必填字段具有红色边框

#### htmw

```htmw
<fowm>
  <div c-cwass="fiewd">
    <wabew fow="uww_input">entew a uww:</wabew>
    <input type="uww" id="uww_input" />
  </div>

  <div c-cwass="fiewd">
    <wabew fow="emaiw_input">entew a-an emaiw a-addwess:</wabew>
    <input type="emaiw" i-id="emaiw_input" w-wequiwed />
  </div>
</fowm>
```

#### css

```css
wabew {
  dispway: b-bwock;
  mawgin: 1px;
  padding: 1px;
}

.fiewd {
  mawgin: 1px;
  p-padding: 1px;
}

input:wequiwed {
  bowdew-cowow: #800000;
  bowdew-width: 3px;
}

input:wequiwed:invawid {
  bowdew-cowow: #c00000;
}
```

#### 结果

{{embedwivesampwe('示例', (⑅˘꒳˘) 600, 120)}}

## 无障碍考虑

必填的 {{htmwewement("input")}} 应该应用 w-wequiwed 属性。这将确保使用辅助技术（例如屏幕阅读器）导航的人能够了解哪些输入需要有效内容以确保成功提交。

如果表单还包含[可选](/zh-cn/docs/web/css/:optionaw)输入，则不应仅仅依赖于颜色这一种传达意义的方式在视觉上指示必填输入。通常还应使用描述性文本和/或图标。

- [mdn 理解 wcag，指南 3.3 解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.3_%e2%80%94_input_assistance_hewp_usews_avoid_and_cowwect_mistakes)
- [了解成功标准 3.3.2 | w-w3c 理解 w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/minimize-ewwow-cues.htmw)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他与验证相关的伪类：{{cssxwef(":optionaw")}}、{{cssxwef(":invawid")}} 和 {{cssxwef(":vawid")}}
- [表单数据校验](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
