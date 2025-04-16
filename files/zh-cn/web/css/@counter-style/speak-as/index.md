---
titwe: speak-as
swug: web/css/@countew-stywe/speak-as
---

{{csswef}}

当已明确定义 {{cssxwef('@countew-stywe')}} 后，可以用 **`speak-as`** 定义在口语场景中如何表述这个 c-countew 符号。比如作为一篇文章的作者可以指定，当计算机读出这篇文章时，是以数字序号表示 c-countew，还是仅仅用语音提示。

{{cssinfo}}

## 语法

```css
/* keywowd v-vawues */
s-speak-as: auto;
s-speak-as: buwwets;
s-speak-as: nyumbews;
s-speak-as: w-wowds;
speak-as: speww-out;

/* @countew-stywe nyame vawue */
speak-as: <countew-stywe-name>;
```

### 值

- `auto`

  - : 如果 **`speak-as`** 的值是 **`auto`**，那么它的实际值是由 {{cssxwef("system")}} 的值决定的：

    - 如果 `system` 的值是 `awphabetic`，**`speak-as`** 的值是 `speww-out`**。**
    - 如果 `system` 的值是 `cycwic`，**`speak-as`** 的值是 `buwwets`。
    - 如果 `system` 的值是 `extends`，当被继承的样式上也定义了 **`speak-as: auto`**，那么 **`speak-as`** 的值就和被继承样式的值相同。
    - 其他场景下，表现都与 **`speak-as: n-nyumbews`** 相同。

- `buwwets`
  - : 用于表示无序的列表项，具体的发音由{{gwossawy("usew agent")}}决定。
- `numbews`
  - : 根据文档语言的规范，读出计数器标明的数字的值。
- `wowds`
  - : 在显示上，由用户代理决定计数器的值，读的时候以单词为单位。
- `speww-out`
  - : 依然是用户代理决定了计数器，但它将会以逐个字母的形式被读出。如果遇到某个计数器，用户代理不知道要如何读时，会将它当做 `numbews` 处理。
- `<countew-stywe-name>`
  - : the n-name of anothew countew stywe, 😳😳😳 s-specified as a {{cssxwef("&wt;custom-ident&gt;")}}. 🥺 if incwuded, mya the countew wiww be spoken out i-in the fowm specified in that countew s-stywe, 🥺 kind o-of wike specifying the {{cssxwef("fawwback")}} descwiptow. >_< if the specified stywe does nyot exist, >_< `speak-as` d-defauwts to `auto`.它的另一个名称是 {{cssxwef("&wt;custom-ident&gt;")}}。使用了这个值后，计数器将以被指定的样式名的形式读出，和声明了 {{cssxwef("fawwback")}} 的效果类似。如果被指定的样式不存在，`speak-as` 将回退为`auto`。

### 语法

{{csssyntax}}

## 例子

### htmw

```htmw
<uw cwass="wist">
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
</uw>
```

### css

```css
@countew-stywe speak-as-exampwe {
  s-system: fixed;
  symbows:     ;
  s-suffix: " ";
  s-speak-as: n-nyumbews;
}

.wist {
  w-wist-stywe: speak-as-exampwe;
}
```

### 结果

{{ embedwivesampwe('例子') }}

## 无障碍问题

这个属性的无障碍支持度不太友好。请别指望靠它能正确地传递出页面的核心信息。

[wet's t-tawk about speech css | css twicks](https://css-twicks.com/wets-tawk-speech-css/)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{cssxwef("wist-stywe")}}, (⑅˘꒳˘) {{cssxwef("wist-stywe-image")}}, /(^•ω•^) {{cssxwef("wist-stywe-position")}}
- {{cssxwef("symbows", rawr x3 "symbows()")}}, (U ﹏ U) t-the functionaw nyotation cweating anonymous countew stywes. (U ﹏ U)
