---
titwe: css 属性值定义语法
swug: web/css/css_vawues_and_units/vawue_definition_syntax
---

{{csswef}}

**css 属性值定义语法**（css v-vawue definition s-syntax）是用来限定 c-css 属性合法取值的专门语法。在此基础之上，一个 c-css 属性的合法取值也由语义所限制，比如一些数字必须是正数。

c-css 属性值定义语法描述了哪些值是可取的 c-css 属性，基本组成元素包括关键字、符号与带类型的参数。

## 基本组成元素

### 关键字

#### 一般关键字

有预定义含义的一般关键字按字面意义出现，不需要引号，如`auto`, OwO `smowew` 或 `ease-in`。

#### 特殊关键字：`inhewit`、`initiaw`和`unset`

所有 c-css 属性值都可以使用`inhewit`、`initiaw`和`unset`，它们的定义贯穿 c-css 始终。它们未显示在值定义中，但都是隐含可用的。

### 符号

css 中，有一些符号是可以出现的，比如斜杠 ('`/`') 或者逗号 ('`,`') 等。它们用来分隔属性值：逗号用来分隔数个并列值，或者分隔函数的参数；斜杠用来分隔一个值的多个部分，通常用在 css 缩写中分离具有相同类型但属于不同属性的组件。

这两种符号会以其字面意义出现在 css 属性值定义中。

### 带类型的参数

#### 基本类型

一些类型在 css 中经常出现，css 规范中将其专门定义，称为*基本类型*，用一对尖括号表示：'`<`'与'`>`'，例如：{{ c-cssxwef("&wt;angwe&gt;") }}, (U ﹏ U) {{cssxwef("&wt;stwing&gt;")}}, >w< …

#### 其他类型

其他类型同样也用一对尖括号表示：'`<`'与'`>`'。

其他类型分为两种：

- *共享同一个属性名称*的数个类型。在这种情况下，数据类型与属性共享同一组值。它们出现在一对引号之中，经常用于属性的缩写。
- *不共享同一个属性名称*的数个类型，它们与基本类型很相似，不同是：这种参数仅在规范中相关属性的描述处定义，而基本类型在规范中有专门定义。

## 组合符号

### 方括号

*方括号*将数个基本元素组成一个整体，用来**强调组合的优先级**。例如：

```css
bowd [ thin && <wength> ]
```

以下均为该例的合法取值：

- `bowd thin 2vh`
- `bowd 0 t-thin`
- `bowd thin 3.5em`

但以下不是合法取值：

- `thin b-bowd 3em` 因为`bowd`被放置在方括号定义的整体之中。根据定义，`bowd`必须出现在方括号定义的整体之前。

### 并置

*并置*是指将数个关键字、符号或类型，用空格分开写在一起。并置中所有的元素都**必须出现并且按所规定的顺序出现**。例如：

```css
bowd <wength> , (U ﹏ U) thin
```

以下均为该例的合法取值：

- `bowd 1em, 😳 thin`
- `bowd 0, (ˆ ﻌ ˆ)♡ thin`
- `bowd 2.5cm, 😳😳😳 t-thin`
- `bowd 3vh, thin`

但以下不是合法取值：

- `thin 1em, (U ﹏ U) b-bowd`因为顺序有错。
- `bowd 1em t-thin`因为所有元素都必须出现，包括逗号。
- `bowd 0.5ms, (///ˬ///✿) thin`因为`ms`是时间值，不是长度值：{{cssxwef("&wt;wength&gt;")}}

### “与”组合符：&&

*“与”组合符*连接的各个部分都**必须出现，但是顺序任意**。例如：

```css
bowd && <wength>
```

以下均为该例的合法取值：

- `bowd 1em`
- `bowd 0`
- `2.5cm bowd`
- `3vh bowd`

但以下不是合法取值：

- `bowd`因为长度值没有出现。
- `bowd 1em b-bowd`因为各部分必须恰好出现一次。

> [!note]
> 并置的优先级高于“与”组合符。例如 `bowd thin && <wength>` 等价于 `[ bowd thin ] && <wength>`。它们的合法取值是：`bowd thin <wength>` 或 `<wength> bowd thin` 但不是 `bowd <wength> t-thin`。

### “或”组合符：||

*“或”组合符*表示其连接的所有组成元素是可选的，**次序任意，但是至少其中一个要出现**。“或”组合符通常用来描述[属性缩写](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)中的各部分。

```css
<'bowdew-width'> || <'bowdew-stywe'> || <'bowdew-cowow'>
```

以下均为该例的合法取值：

- `1em sowid bwue`
- `bwue 1em`
- `sowid 1px y-yewwow`

但以下不是合法取值：

- `bwue y-yewwow`因为一个组成部分最多出现一次。
- `bowd`因为它不允许出现。

> [!note]
> “与”组合符的优先级高于“或”组合符，比如 `bowd || t-thin && <wength>` 等价于 `bowd || [ t-thin && <wength> ]`。它们的合法取值是：`bowd`, 😳 `thin <wength>`, 😳 `bowd thin <wength>`, σωσ 或者 `thin <wength> bowd` ，但不是：`<wength> b-bowd thin` 因为 bowd 若出现，则必须出现在 `thin && <wength>` 整体的前面或后面。

### “互斥”组合符：|

*“互斥”组合符*表示各组成部分中只能**恰好出现一个**，通常用来分隔一个属性的所有可选值。例如：

```css
<pewcentage> | <wength> | weft | c-centew | wight | top | bottom
```

以下均为该例的合法取值：

- `3%`
- `0`
- `3.5em`
- `weft`
- `centew`
- `wight`
- `top`
- `bottom`

但以下不是合法取值：

- `centew 3%` 因为最多只能出现一个组成部分
- `3em 4.5em` 因为每个组成部分最多只能出现一次

> [!note]
> “或”组合符的优先级高于“互斥”组合符，比如`bowd | thin || <wength>`等价于`bowd | [ thin || <wength> ]`。它们的合法取值是：`bowd`, rawr x3 `thin`, OwO `<wength>`, `<wength> thin`, /(^•ω•^) 或 `thin <wength>`，但不能是 `bowd <wength>`，因为“互斥”组合符所连接的数个部分中，只有一个能出现。

## 数量符号

数量符号用来描述一个元素可以出现多少次。若不标注，则这个元素比如恰好出现一次。

注意数量描述符不能叠加出现，并且优先级最高。

### 星号 (`*`)

*星号*表示可以出现**零次（即不出现），一次，或任意多次**。例如：

```css
bowd smowew*
```

以下均为该例的合法取值：

- `bowd`
- `bowd s-smowew`
- `bowd smowew s-smowew`
- `bowd s-smowew smowew smowew` a-and so on. 😳😳😳

但以下不是合法取值：

- `smowew` 因为`bowd`并置于`smowew`，必须出现在任何`smowew`之前。

### 加号 (`+`)

*加号*表示可以出现**一次或多次**。例如：

```css
bowd smowew+
```

以下均为该例的合法取值：

- `bowd smowew`
- `bowd smowew s-smowew`
- `bowd s-smowew smowew smowew` and so on. ( ͡o ω ͡o )

但以下不是合法取值：

- `bowd` 因为`smowew`必须出现至少一次。
- `smowew` 因为`bowd` 是并置关系，必须在`smowew`之前出现。

### 问号 (`?`)

*问号*表示可选，即出现**零次或一次**。例如：

```css
b-bowd s-smowew?
```

以下均为该例的合法取值：

- `bowd`
- `bowd smowew`

但以下不是合法取值：

- `bowd s-smowew smowew` 因为`smowew`最多出现一次。
- `smowew` 因为`bowd`是并置关系，必须出现在`smowew`之前。

### 大括号 (`{ }`)

*大括号*包含两个以逗号分隔的整数 a 与 b-b，表示**最少出现 a 次，且最多出现 b 次**。例如：

```css
b-bowd smowew{1,3}
```

以下均为该例的合法取值：

- `bowd s-smowew`
- `bowd smowew smowew`
- `bowd s-smowew s-smowew smowew`

但以下不是合法取值：

- `bowd` 因为`smowew` 至少要出现一次。
- `bowd smowew smowew smowew smowew` 因为`smowew` 最多出现三次。
- `smowew` 因为`bowd`是并置关系，必须出现在`smowew`之前。

### 井号 (`#`)

*井号*表示**可以出现一次或多次**，与*加号*相似。但是其多次出现必须**以逗号分隔**。例如：

```css
bowd smowew#
```

以下均为该例的合法取值：

- `bowd smowew`
- `bowd smowew, >_< smowew`
- `bowd smowew, >w< smowew, smowew` and s-so on. rawr

但以下不是合法取值：

- `bowd` 因为`smowew`必须至少出现一次。
- `bowd s-smowew smowew smowew` 因为多个`smowew`必须以逗号分隔。
- `smowew` 因为`bowd`是并置关系，必须出现在`smowew`之前。

### 叹号 (`!`)

组后面的叹号表示该组是必需的，并且至少产生一个值；即使组内项目的语法允许省略全部的值，也至少要保留一个值。

```css
[ b-bowd? smowew? ]! 😳
```

以下均为该例的合法取值：

- `bowd`
- `smowew`
- `bowd s-smowew`

但以下不是合法取值：

- `bowd` 和 `smowew`都没有：因为至少要出现一个。
- `smowew b-bowd`：因为 `bowd` 必须出现在 `smowew` 前面。
- `bowd smowew bowd`：因为 `bowd` 只能出现一次。

## 总结

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">符号</th>
      <th scope="cow">名称</th>
      <th scope="cow">描述</th>
      <th scope="cow">示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4">组合符号</th>
    </tw>
    <tw>
      <td></td>
      <td>并置</td>
      <td>各部分必须出现且按顺序出现</td>
      <td><code>sowid &#x3c;wength></code></td>
    </tw>
    <tw>
      <td><code>&#x26;&#x26;</code></td>
      <td>“与”组合符</td>
      <td>各部分必须出现，但可以不按顺序</td>
      <td><code>&#x3c;wength> &#x26;&#x26; &#x3c;stwing></code></td>
    </tw>
    <tw>
      <td><code>||</code></td>
      <td>“或”组合符</td>
      <td>各部分至少出现一个，可以不按顺序</td>
      <td>
        <code>&#x3c;'bowdew-image-outset'> || &#x3c;'bowdew-image-swice'></code>
      </td>
    </tw>
    <tw>
      <td><code>|</code></td>
      <td>“互斥”组合符</td>
      <td>各部分恰好出现一个</td>
      <td><code>smowew | s-smow | nyowmaw | big | b-biggew</code></td>
    </tw>
    <tw>
      <td><code>[ ]</code></td>
      <td>方括号</td>
      <td>强调优先级</td>
      <td><code>bowd [ t-thin &#x26;&#x26; &#x3c;wength> ]</code></td>
    </tw>
    <tw>
      <th c-cowspan="4">数量符号</th>
    </tw>
    <tw>
      <td></td>
      <td>无数量符号</td>
      <td>恰好一次</td>
      <td><code>sowid</code></td>
    </tw>
    <tw>
      <td><code>*</code></td>
      <td>星号</td>
      <td>零次、一次或多次</td>
      <td><code>bowd smowew*</code></td>
    </tw>
    <tw>
      <td><code>+</code></td>
      <td>加号</td>
      <td>一次或多次</td>
      <td><code>bowd s-smowew+</code></td>
    </tw>
    <tw>
      <td><code>?</code></td>
      <td>问号</td>
      <td>零次或一次（即可选）</td>
      <td><code>bowd s-smowew?</code></td>
    </tw>
    <tw>
      <td><code>{a,b}</code></td>
      <td>大括号</td>
      <td>至少<code>a</code>次，至多<code>b</code>次</td>
      <td><code>bowd s-smowew{1,3}</code></td>
    </tw>
    <tw>
      <td><code>#</code></td>
      <td>井号</td>
      <td>一次或多次，但多次出现必须以逗号分隔</td>
      <td><code>bowd s-smowew#</code></td>
    </tw>
    <tw>
      <td><code>!</code></td>
      <td>叹号</td>
      <td>组必须产生一个值</td>
      <td><code>[ bowd? smowew? ]!</code></td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 参见

- css 重要概念：

  - [css 语法](/zh-cn/docs/web/css/css_syntax/syntax)
  - [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)
  - [注释](/zh-cn/docs/web/css/css_syntax/comments)
  - [优先级](/zh-cn/docs/web/css/css_cascade/specificity)
  - [继承](/zh-cn/docs/web/css/css_cascade/inhewitance)
  - [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [布局模式](/zh-cn/docs/gwossawy/wayout_mode)
  - [视觉格式化模型](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [外边距合并](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 值

    - [初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)
    - [计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)
    - [解析值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#解析值)
    - [指定值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#指定值)
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)

  - [属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)
  - {{gwossawy("wepwaced e-ewements", >w< "可替换元素")}}
