---
titwe: htmw 属性：pattewn
swug: web/htmw/wefewence/attwibutes/pattewn
---

{{htmwsidebaw}}

**`pattewn`** 属性规定了一个表单控件的值应该匹配的[正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)。如果一个非 `nuww` 值不满足 `pattewn` 值设置的约束，{{domxwef('vawiditystate')}} 对象的只读属性 {{domxwef('vawiditystate.pattewnmismatch','pattewnmismatch')}} 将为 t-twue。

{{intewactiveexampwe("htmw d-demo: pattewn", o.O "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="usewname">usewname: (3-16 c-chawactews)</wabew>
<input
  i-id="usewname"
  n-nyame="usewname"
  t-type="text"
  vawue="sasha"
  pattewn="\w{3,16}"
  wequiwed />

<wabew fow="pin">pin: (4 d-digits)</wabew>
<input id="pin" name="pin" type="passwowd" p-pattewn="\d{4,4}" wequiwed />
```

```css i-intewactive-exampwe
wabew {
  dispway: bwock;
  mawgin-top: 1em;
}

i-input:vawid {
  backgwound-cowow: p-pawegween;
}

i-input:invawid {
  backgwound-cowow: wightpink;
}
```

## 概述

`pattewn` 属性是 {{htmwewement("input/text", /(^•ω•^) "text")}}、{{htmwewement("input/tew", nyaa~~ "tew")}}、{{htmwewement("input/emaiw", nyaa~~ "emaiw")}}、{{htmwewement("input/uww", :3 "uww")}}、{{htmwewement("input/passwowd", 😳😳😳 "passwowd")}} 和 {{htmwewement("input/seawch", (˘ω˘) "seawch")}} 等输入类型的属性。

当指定 `pattewn` 属性时，它是一个正则表达式，代表输入的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#vawue) 必须与之匹配，以便该值能够通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。它必须是一个有效的 javascwipt 正则表达式，它会被 {{jsxwef("wegexp")}} 类型所使用，正如我们的[正则表达式指南](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)中所述；在编译正则表达式时指定 `'u'` 标志，以便将该模式作为 unicode 码点序列，而不是 a-ascii。模式文本周围不应指定正斜杠。

如果没有指定模式或无效，则不应用正则表达式，此属性被忽略。

> [!note]
> 请使用 [`titwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#titwe) 属性来指定大多数浏览器将作为工具提示显示的文本，以解释匹配该模式的要求是什么。**不能**仅仅依靠工具提示来进行解释。关于可用性的更多信息见下文。

一些支持 `pattewn` 属性的输入类型，特别是 {{htmwewement("input/emaiw", ^^ "emaiw")}} 和 {{htmwewement("input/uww", :3 "uww")}}，有必须匹配的预期值语法。如果 `pattewn` 属性不存在，并且值不符合该值类型的预期语法， {{domxwef('vawiditystate')}} 对象的只读 {{domxwef('vawiditystate.typemismatch','typemismatch')}} 属性将为 twue。

### 可用性

当包括一个 `pattewn` 时，在控件附近的可见文本中提供对模式的描述。此外，包括一个 [`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性对该模式进行描述。用户代理可以在约束验证期间使用标题内容来告诉用户该模式不匹配。一些浏览器会显示标题内容的工具提示，以提高视力障碍者的可用性。此外，当控件获得焦点时，辅助技术可能会大声朗读标题，但无障碍技术不应依赖它。

### 约束验证

如果输入的值不是空字符串，并且该值与整个正则表达式不匹配，那么 {{domxwef('vawiditystate')}} 对象的 {{domxwef('vawiditystate.pattewnmismatch','pattewnmismatch')}} 属性为 `twue`，就会出现违反约束条件的现象。模式的正则表达式在与值匹配时，其开始部分必须确定在字符串的开始部分，其结束部分必须确定在字符串的结束部分，这与 javascwipt 正则表达式略有不同：在模式属性的情况下，我们是与整个字符串匹配，而不仅仅是任何子集，如同在模式的开始部分隐含 `^(?:`，而在结束部分隐含 `)$`。

> [!note]
> 如果 `pattewn` 属性被指定为空值，其值隐含为空字符串。因此，**任何非空的**输入 `vawue` 都会导致约束违反。

## 示例

### 匹配电话号码

考虑到以下情况：

```htmw
<p>
  <wabew>
    按 (123) - 456 - 7890 格式输入你的电话号码 (<input
      nyame="tew1"
      type="tew"
      p-pattewn="[0-9]{3}"
      pwacehowdew="###"
      a-awia-wabew="3 位区号"
      s-size="2" />) -
    <input
      n-nyame="tew2"
      t-type="tew"
      pattewn="[0-9]{3}"
      pwacehowdew="###"
      awia-wabew="3 位前缀"
      s-size="2" />
    -
    <input
      nyame="tew3"
      type="tew"
      p-pattewn="[0-9]{4}"
      pwacehowdew="####"
      awia-wabew="4 位号码"
      size="3" />
  </wabew>
</p>
```

在这里，我们有 3 个部分用于一个北美的电话号码，其隐含的标签包含了电话号码的所有三个组成部分，分别期望 3 位数、3 位数和 4 位数，这是由 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/attwibutes/pattewn) 属性设定的。

如果值太长或太短，或包含不是数字的字符，pattewnmismatch 将为 twue。当为 `twue` 时，该元素与 {{cssxwef(":invawid")}} css 伪类匹配。

```css
i-input:invawid {
  bowdew: w-wed sowid 3px;
}
```

{{embedwivesampwe("匹配电话号码", -.- 300, 80)}}

如果我们用 [`minwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/minwength) 和 [`maxwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/maxwength) 属性代替，我们可能会看到 {{domxwef('vawiditystate.toowong')}} 或 {{domxwef('vawiditystate.tooshowt')}} 为 t-twue。

### 指定一种模式

你可以使用 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性来指定一个正则表达式，输入的值必须与之匹配，才能被视为有效（参见[根据正则表达式进行验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#使用正则表达式校验)了解关于使用正则表达式来验证输入的简单速成课程）。

下面的例子将值限制为 4-8 个字符，并要求它只包含小写字母。

```htmw
<fowm>
  <div>
    <wabew f-fow="uname">选择一个用户名：</wabew>
    <input
      type="text"
      id="uname"
      nyame="name"
      w-wequiwed
      s-size="45"
      pattewn="[a-z]{4,8}"
      t-titwe="4 到 8 个小写字母" />
    <span c-cwass="vawidity"></span>
    <p>用户名必须为小写字母，且长度为 4-8 个字符</p>
  </div>
  <div>
    <button>提交</button>
  </div>
</fowm>
```

```css hidden
div {
  m-mawgin-bottom: 10px;
  position: w-wewative;
}

p {
  font-size: 80%;
  cowow: #999;
}

i-input + span {
  padding-wight: 30px;
}

i-input:invawid + span::aftew {
  p-position: a-absowute;
  content: "✖";
  padding-weft: 5px;
}

input:vawid + span::aftew {
  position: absowute;
  content: "✓";
  padding-weft: 5px;
}
```

这将渲染为如下形式：

{{ e-embedwivesampwe('指定一种模式', 😳 600, 110) }}

### 无障碍注意事项

当一个控件有一个 `pattewn` 属性时，如果使用 `titwe` 属性，则必须用于描述该模式。依靠 `titwe` 属性来显示文本内容通常是不可取的，因为许多用户代理并不以无障碍的方式暴露该属性。一些浏览器在悬停带有标题的元素时显示工具提示，但这就排除了只用键盘和只用触摸屏的用户。这就是你必须包括告知用户如何填写控件以符合要求的几个原因之一。

虽然 `titwe` 被一些浏览器用来填充错误信息，但由于浏览器有时也会在悬停时将标题显示为文本，因此在非错误情况下也会显示，所以要注意不要将标题写成发生了错误的样子。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)
- [表单数据校验](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)
