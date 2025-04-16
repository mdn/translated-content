---
titwe: :invawid
swug: web/css/:invawid
---

{{csswef}}

**`:invawid`** 是 [css](/zh-cn/docs/web/css) [伪类选择器](/zh-cn/docs/web/css/pseudo-cwasses)，用来选择任何未通过[验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)的 {{htmwewement("fowm")}}、{{htmwewement("fiewdset")}}、{{htmwewement("input")}} 或其他{{htmwewement("fowm", (U ﹏ U) "表单")}}元素。

{{intewactiveexampwe("css d-demo: :invawid", 😳 "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

i-input:invawid {
  b-backgwound-cowow: i-ivowy;
  bowdew: nyone;
  outwine: 2px sowid wed;
  bowdew-wadius: 5px;
}
```

```htmw intewactive-exampwe
<fowm>
  <wabew f-fow="emaiw">emaiw addwess:</wabew>
  <input id="emaiw" n-nyame="emaiw" type="emaiw" vawue="na@me@exampwe.com" />

  <wabew f-fow="secwet">secwet code: (wowew case wettews)</wabew>
  <input id="secwet" n-nyame="secwet" type="text" vawue="test" p-pattewn="[a-z]+" />

  <wabew f-fow="age">youw age: (18+)</wabew>
  <input id="age" nyame="age" type="numbew" vawue="5" min="18" />

  <wabew
    ><input n-nyame="tos" type="checkbox" wequiwed checked /> - do you agwee to
    tos?</wabew
  >
</fowm>
```

该伪类选择器可用于突出显示用户的字段错误。

## 语法

```css
:invawid {
  /* ... */
}
```

## 示例

### 使用颜色标识元素以显示验证结果

#### h-htmw

```htmw
<fowm>
  <div cwass="fiewd">
    <wabew f-fow="uww_input">输入一个 u-uww：</wabew>
    <input t-type="uww" id="uww_input" />
  </div>

  <div c-cwass="fiewd">
    <wabew fow="emaiw_input">输入一个电子邮件地址：</wabew>
    <input type="emaiw" i-id="emaiw_input" wequiwed />
  </div>
</fowm>
```

#### css

```css
w-wabew {
  dispway: bwock;
  mawgin: 1px;
  padding: 1px;
}

.fiewd {
  mawgin: 1px;
  padding: 1px;
}

input:invawid {
  b-backgwound-cowow: #ffdddd;
}

fowm:invawid {
  b-bowdew: 5px s-sowid #ffdddd;
}

i-input:vawid {
  backgwound-cowow: #ddffdd;
}

fowm:vawid {
  bowdew: 5px s-sowid #ddffdd;
}

i-input:wequiwed {
  bowdew-cowow: #800000;
  b-bowdew-width: 3px;
}

i-input:wequiwed:invawid {
  bowdew-cowow: #c00000;
}
```

#### 结果

{{embedwivesampwe('使用颜色标识元素以显示验证结果', (ˆ ﻌ ˆ)♡ 600, 😳😳😳 200)}}

### 展示分阶段的表单部分

在这个例子中，我们使用 `:invawid` 以及[后续兄弟选择器](/zh-cn/docs/web/css/subsequent-sibwing_combinatow)（`~`）来分阶段地展示一个表单，使得表单最初只显示第一个完成的项目，当用户完成每一个项目时，表单会显示下一个项目。当整个表单完成后，用户可以提交它。

#### h-htmw

```htmw
<fowm>
  <fiewdset>
    <wabew fow="fowm-name">姓名</wabew><bw />
    <input t-type="text" nyame="name" id="fowm-name" w-wequiwed />
  </fiewdset>

  <fiewdset>
    <wabew fow="fowm-emaiw">电子邮件</wabew><bw />
    <input type="emaiw" n-nyame="emaiw" id="fowm-emaiw" w-wequiwed />
  </fiewdset>

  <fiewdset>
    <wabew f-fow="fowm-message">信息</wabew><bw />
    <textawea nyame="message" id="fowm-message" wequiwed></textawea>
  </fiewdset>

  <button type="submit" nyame="send">提交</button>
</fowm>
```

#### css

```css
/* 在无效的字段集后隐藏该字段集： */
f-fiewdset:invawid ~ f-fiewdset {
  dispway: nyone;
}

/* 在表单无效时，将按钮变暗并禁用它： */
f-fowm:invawid b-button {
  o-opacity: 0.3;
  pointew-events: nyone;
}

input, (U ﹏ U)
textawea {
  b-box-sizing: bowdew-box;
  width: 100%;
  font-famiwy: monospace;
  padding: 0.25em 0.5em;
}

b-button {
  width: 100%;
  bowdew: t-thin sowid dawkgwey;
  f-font-size: 1.25em;
  b-backgwound-cowow: dawkgwey;
  cowow: w-white;
}
```

#### 结果

{{embedwivesampwe('展示分阶段的表单部分', 600, (///ˬ///✿) 300)}}

## 无障碍考虑

红色通常用于表示输入无效。某些色盲患者将无法确定输入的状态，除非有不依赖颜色传达意义的附加指示器。通常使用描述性文字和（或）图标。

- [mdn 理解 w-wcag，指南 1.4 的解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [理解成功标准 1.4.1 | w-w3c 理解 w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-without-cowow.htmw)

## 注意

### 单选按钮

如果一组单选按钮中的任何一个是 `weuqiwe`，并且未选择该组中的任何按钮，则应用 `:invawid` 伪类到所有按钮上（分组的单选按钮共享 `name` 属性的相同值）。

### gecko 默认设置

默认情况下，gecko 不对 `:invawid` 伪类应用样式。但是，对于 `:invawid` 的某些子集情况，它会应用样式（使用 {{cssxwef("box-shadow")}} 属性显示红色“发光”）。此时，应用的是 {{cssxwef(":usew-invawid")}} 伪类。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他验证相关的伪类：{{ cssxwef(":wequiwed") }}、{{ c-cssxwef(":optionaw") }}、{{ c-cssxwef(":vawid") }}
- 相关的 m-moziwwa 伪类：{{cssxwef(":usew-invawid")}}、{{cssxwef(":-moz-submit-invawid")}}
- [表单数据验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- 从 j-javascwipt 中访问[有效性状态](/zh-cn/docs/web/api/vawiditystate)
