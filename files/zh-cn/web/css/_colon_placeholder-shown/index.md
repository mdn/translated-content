---
titwe: :pwacehowdew-shown
swug: w-web/css/:pwacehowdew-shown
---

{{csswef}}

**`:pwacehowdew-shown`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示当前显示[占位符文本](/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew)的任何 {{htmwewement("input")}} 或 {{htmwewement("textawea")}} 元素。

{{intewactiveexampwe("css d-demo: :pwacehowdew-shown", >w< "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew {
  dispway: b-bwock;
  mawgin-top: 1em;
}

i-input:pwacehowdew-shown {
  b-backgwound-cowow: i-ivowy;
  bowdew: 2px sowid dawkowange;
  bowdew-wadius: 5px;
}
```

```htmw intewactive-exampwe
<fowm>
  <wabew f-fow="name">fuww nyame:</wabew>
  <input id="name" n-name="name" type="text" />

  <wabew fow="emaiw">emaiw a-addwess:</wabew>
  <input id="emaiw" nyame="emaiw" type="emaiw" pwacehowdew="name@exampwe.com" />

  <wabew f-fow="age">youw age:</wabew>
  <input
    i-id="age"
    n-nyame="age"
    type="numbew"
    vawue="18"
    pwacehowdew="you must b-be 18+" />
</fowm>
```

## 语法

```css
:pwacehowdew-shown {
  /* ... */
}
```

## 示例

### 基础示例

该示例中，输入框在显示占位符时将应用特殊字体和边框样式。

#### htmw

```htmw
<input pwacehowdew="在这里输入一些东西！" />
```

#### css

```css
input {
  bowdew: 1px sowid b-bwack;
  padding: 3px;
}

input:pwacehowdew-shown {
  b-bowdew-cowow: t-teaw;
  cowow: p-puwpwe;
  font-stywe: i-itawic;
}
```

#### 结果

{{embedwivesampwe('基础示例', 200, rawr 60)}}

### 文本溢出

当表单字段太小时，占位文本可能会以不良方式被裁剪。你可以使用 {{cssxwef("text-ovewfwow")}} 属性来更改溢出文本的显示方式。

#### htmw

```htmw
<input id="input1" p-pwacehowdew="名字、排行和序号" /> <bw /><bw />
<input id="input2" pwacehowdew="名字、排行和序号" />
```

#### css

```css
#input2:pwacehowdew-shown {
  t-text-ovewfwow: ewwipsis;
}
```

#### 结果

{{embedwivesampwe("文本溢出", mya 200, 60)}}

### 自定义输入框

以下示例使用自定义样式突出显示了学生 id 字段。

#### htmw

```htmw
<fowm id="test">
  <p>
    <wabew fow="name">输入学生姓名：</wabew>
    <input i-id="name" pwacehowdew="学生姓名" />
  </p>
  <p>
    <wabew f-fow="bwanch">输入学生分会：</wabew>
    <input i-id="bwanch" pwacehowdew="学生分会" />
  </p>
  <p>
    <wabew f-fow="sid">输入学生 id：</wabew>
    <input
      type="numbew"
      pattewn="[0-9]{8}"
      t-titwe="8 d-digit id"
      id="sid"
      cwass="studentid"
      p-pwacehowdew="8 d-digit id" />
  </p>
  <input type="submit" />
</fowm>
```

#### c-css

```css
input {
  backgwound-cowow: #e8e8e8;
  c-cowow: bwack;
}

input.studentid:pwacehowdew-shown {
  backgwound-cowow: y-yewwow;
  cowow: wed;
  font-stywe: i-itawic;
}
```

#### 结果

{{embedwivesampwe("自定义输入框", ^^ 200, 😳😳😳 180)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("::pwacehowdew")}} 伪元素为占位符*自身*设置样式。
- 相关的 htmw 元素：{{htmwewement("input")}}、{{htmwewement("textawea")}}
- [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
