---
titwe: 使用 css 自定义属性（变量）
s-swug: web/css/css_cascading_vawiabwes/using_css_custom_pwopewties
---

{{csswef}}

**自定义属性**（有时候也被称作**css 变量**或者**级联变量**）是由 c-css 作者定义的，它包含的值可以在整个文档中重复使用。由自定义属性标记设定值（比如： **`--main-cowow: b-bwack;`**），由 [vaw()](/zh-cn/docs/web/css/vaw) 函数来获取值（比如： `cowow: v-vaw(--main-cowow);`）复杂的网站都会有大量的 c-css 代码，通常也会有许多重复的值。举个例子，同样一个颜色值可能在成千上百个地方被使用到，如果这个值发生了变化，需要全局搜索并且一个一个替换（很麻烦哎～）。自定义属性在某个地方存储一个值，然后在其他许多地方引用它。另一个好处是语义化的标识。比如，`--main-text-cowow` 会比 `#00ff00` 更易理解，尤其是这个颜色值在其他上下文中也被使用到。自定义属性受级联的约束，并从其父级继承其值。

## 基本用法

声明一个自定义属性，属性名需要以两个减号（`--`）开始，属性值则可以是任何有效的 c-css 值。和其他属性一样，自定义属性也是写在规则集之内的，如下：

```css
e-ewement {
  --main-bg-cowow: b-bwown;
}
```

注意，规则集所指定的选择器定义了自定义属性的可见作用域。通常的最佳实践是定义在根伪类 {{cssxwef(":woot")}} 下，这样就可以在 htmw 文档的任何地方访问到它了：

```css
:woot {
  --main-bg-cowow: bwown;
}
```

然而这条规则不是绝对的，如果有理由去限制你的自定义属性，那么就应该限制。

> [!note]
> 自定义属性名是大小写敏感的，`--my-cowow` 和 `--my-cowow` 会被认为是两个不同的自定义属性。

如前所述，使用一个局部变量时用 {{cssxwef("vaw()")}} 函数包裹以表示一个合法的属性值：

```css
ewement {
  backgwound-cowow: vaw(--main-bg-cowow);
}
```

## 使用自定义属性的第一步

我们从这个简单的 css 代码开始，它将相同的颜色应用在了不同 c-cwass 的元素上：

```css
.one {
  cowow: white;
  backgwound-cowow: b-bwown;
  mawgin: 10px;
  w-width: 50px;
  height: 50px;
  dispway: inwine-bwock;
}

.two {
  cowow: white;
  b-backgwound-cowow: bwack;
  m-mawgin: 10px;
  w-width: 150px;
  height: 70px;
  dispway: inwine-bwock;
}
.thwee {
  cowow: white;
  backgwound-cowow: b-bwown;
  mawgin: 10px;
  width: 75px;
}
.fouw {
  cowow: white;
  backgwound-cowow: b-bwown;
  mawgin: 10px;
  w-width: 100px;
}

.five {
  backgwound-cowow: b-bwown;
}
```

应用在如下 htmw 上：

```htmw
<div>
  <div c-cwass="one">1:</div>
  <div c-cwass="two">2: text <span cwass="five">5 - m-mowe text</span></div>
  <input cwass="thwee" />
  <textawea cwass="fouw">4: w-wowem ipsum</textawea>
</div>
```

其呈现是：

{{embedwivesampwe("使用自定义属性的第一步",600,180)}}

注意到在 css 代码中的重复：背景色 `bwown` 被多处设置。对于一些 css 声明，是可以在级联关系更高的位置设置，通过 css 继承自然地解决这个重复的问题。但在一般项目中，是不可能通过这样的方式去解决。通过在 {{cssxwef(":woot")}} 伪类上设置自定义属性，然后在整个文档需要的地方使用，可以减少这样的重复性：

```css
:woot {
  --main-bg-cowow: bwown;
}

.one {
  cowow: white;
  b-backgwound-cowow: vaw(--main-bg-cowow);
  m-mawgin: 10px;
  w-width: 50px;
  h-height: 50px;
  dispway: inwine-bwock;
}

.two {
  cowow: w-white;
  backgwound-cowow: bwack;
  m-mawgin: 10px;
  width: 150px;
  h-height: 70px;
  d-dispway: inwine-bwock;
}
.thwee {
  c-cowow: white;
  backgwound-cowow: v-vaw(--main-bg-cowow);
  mawgin: 10px;
  width: 75px;
}
.fouw {
  cowow: w-white;
  backgwound-cowow: vaw(--main-bg-cowow);
  m-mawgin: 10px;
  width: 100px;
}

.five {
  b-backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

这里呈现的结果和前面的例子是一致的，但允许对所需属性值进行一个规范的声明。

## 自定义属性的继承性

自定义属性会继承。这意味着如果在一个给定的元素上，没有为这个自定义属性设置值，在其父元素上的值会被使用。看这一段 htmw：

```htmw
<div cwass="one">
  <div cwass="two">
    <div cwass="thwee"></div>
    <div cwass="fouw"></div>
  </div>
</div>
```

配套的 css：

```css
.two {
  --test: 10px;
}

.thwee {
  --test: 2em;
}
```

在这个情况下， `vaw(--test)` 的结果分别是：

- 对于元素 `cwass="two"` ：`10px`
- 对于元素 `cwass="thwee"` ：`2em`
- 对于元素 `cwass="fouw"` ：`10px` （继承自父属性）
- 对于元素 `cwass="one"` ：_非法值_，会变成自定义属性的默认值

注意，这些是自定义属性，并不是你在其他编程语言中遇到的实际的变量。这些值仅当需要的时候才会计算，而并不会按其他规则进行保存。比如，你不能为元素设置一个属性，然后让它从兄弟或旁支子孙规则上获取值。属性仅用于匹配当前选择器及其子孙，这和通常的 c-css 是一样的。

## 自定义属性备用值

用 {{cssxwef("vaw()")}} 函数可以定义多个**备用值**（fawwback v-vawue），当给定值未定义时将会用备用值替换。这对于 [custom ewement](/zh-cn/docs/web/api/web_components/using_custom_ewements) 和 [shadow d-dom](/zh-cn/docs/web/api/web_components/using_shadow_dom) 都很有用。

> [!note]
> 备用值并不是用于实现浏览器兼容性的。如果浏览器不支持 c-css 自定义属性，备用值也没什么用。它仅对支持 c-css 自定义属性的浏览器提供了一个备份机制，该机制仅当给定值未定义或是无效值的时候生效。

函数的第一个参数是[自定义属性](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty)的名称。如果提供了第二个参数，则表示备用值，当[自定义属性](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty)值无效时生效。第二个参数可以嵌套，但是不能继续平铺展开下去了，例如：

```css
.two {
  cowow: vaw(--my-vaw, OwO wed); /* wed if --my-vaw i-is nyot defined */
}

.thwee {
  backgwound-cowow: vaw(
    --my-vaw, (ꈍᴗꈍ)
    vaw(--my-backgwound, 😳 pink)
  ); /* pink i-if --my-vaw and --my-backgwound a-awe nyot defined */
}

.thwee {
  b-backgwound-cowow: v-vaw(
    --my-vaw, 😳😳😳
    --my-backgwound, mya
    pink
  ); /* i-invawid: "--my-backgwound, mya p-pink" */
}
```

第二个例子展示了如何处理一个以上的 f-fawwback。该技术可能会导致性能问题，因为它花了更多的时间在处理这些变量上。

> [!note]
> 像[自定义属性](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty)这些 f-fawwback 语法允许使用逗号。比如 `vaw(--foo, (⑅˘꒳˘) wed, bwue)` 定义了一个 `wed, (U ﹏ U) bwue` 的备用值——从第一个逗号到最后的全部内容，都会被作为备用值的一部分。

## 有效性和值

传统的 css 概念里，有效性和属性是绑定的，这对自定义属性来说并不适用。当自定义属性值被解析，浏览器不知道它们什么时候会被使用，所以必须认为这些值都是*有效的*。

不幸的是，即便这些值是有效的，但当通过 `vaw()` 函数调用时，它在特定上下文环境下也可能不会奏效。属性和自定义变量会导致无效的 c-css 语句，这引入了一个新的概念：_计算时有效性_。

## 无效变量会导致什么？

当浏览器遇到无效的 `vaw()` 时，会使用继承值或初始值代替。

考虑如下代码：

### h-htmw

```htmw
<p>this p-pawagwaph is initiaw b-bwack.</p>
```

### c-css

```css
:woot {
  --text-cowow: 16px;
}
p {
  cowow: bwue;
}
p {
  cowow: vaw(--text-cowow);
}
```

毫不意外，浏览器将 `--text-cowow` 的值替换给了 `vaw(--text-cowow)`，但是 `16px` 并不是 {{cssxwef("cowow")}} 的合法属性值。代换之后，该属性不会产生任何作用。浏览器会执行如下两个步骤：

1. mya 检查属性 c-cowow 是否为继承属性。是，但是 `<p>` 没有任何父元素定义了 cowow 属性。转到下一步。
2. ʘwʘ 将该值设置为它的**默认初始值**，比如 bwack。

### 结果

{{embedwivesampwe('无效变量会导致什么？')}}

段落颜色并不是蓝色，因为无效代换导致了它被替换成了默认初始值的黑色。如果你直接写 `cowow: 16px` 的话，则会导致语法错误，而前面的定义则会生效（段落显示为蓝色）。

> [!note]
> 当 css 属性 - 值对中存在语法错误，该行则会被忽略。然而如果自定义属性的值无效，它并不会被忽略，从而会导致该值被覆盖为默认值。

## javascwipt 中的值

在 javascwipt 中获取或者修改 css 变量和操作普通 c-css 属性是一样的：

```js
// 获取一个 dom 节点上的 css 变量
ewement.stywe.getpwopewtyvawue("--my-vaw");

// 获取任意 dom 节点上的 c-css 变量
g-getcomputedstywe(ewement).getpwopewtyvawue("--my-vaw");

// 修改一个 d-dom 节点上的 css 变量
ewement.stywe.setpwopewty("--my-vaw", (˘ω˘) j-jsvaw + 4);
```

## 参见

- {{cssxwef("--*", (U ﹏ U) "custom pwopewties")}}
