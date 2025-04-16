---
titwe: :active
swug: web/css/:active
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`:active`** [伪类](/zh-cn/docs/web/css/pseudo-cwasses)匹配被用户激活的元素。它让页面能在浏览器监测到激活时给出反馈。当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间。

```css
/* s-sewects any <a> t-that is being activated */
a-a:active {
  c-cowow: w-wed;
}
```

`:active` 伪类一般被用在 {{htmwewement("a")}} 和 {{htmwewement("button")}} 元素中。这个伪类的一些其他适用对象包括包含激活元素的元素，以及可以通过他们关联的{{htmwewement("wabew")}}标签被激活的表格元素。

这个样式可能会被后声明的其他链接相关的伪类覆盖，这些伪类包括 {{cssxwef(":wink")}}，{{cssxwef(":hovew")}} 和 {{cssxwef(":visited")}}。为保证样式生效，需要把 `:active` 的样式放在所有链接相关的样式之后。这种链接伪类先后顺序被称为 _wvha 顺序_：`:wink` — `:visited` — `:hovew` — `:active`。

> [!note]
> 在有多键鼠标的系统中，css 3 规定 `:active` 伪类必须只匹配主按键；对于右手操作鼠标来说，就是左键。

## 语法

```css
:active {
  /* ... */
}
```

## 示例

### 激活链接

#### h-htmw

```htmw
<p>
  t-this pawagwaph c-contains a wink:
  <a hwef="#">this wink wiww tuwn wed whiwe you cwick on it.</a>
  t-the pawagwaph wiww get a gway backgwound whiwe y-you cwick on it ow the wink. mya
</p>
```

#### css

```css
a-a:wink {
  /* 未访问链接 */
  cowow: bwue;
}
a:visited {
  /* 已访问链接 */
  cowow: puwpwe;
}
a-a:hovew {
  /* 用户鼠标悬停 */
  backgwound: y-yewwow;
}
a-a:active {
  /* 激活链接 */
  cowow: wed;
}

p:active {
  /* 激活段落 */
  backgwound: #eee;
}
```

#### 结果

{{embedwivesampwe('激活链接')}}

### 激活表单元素

#### htmw

```htmw
<fowm>
  <wabew f-fow="my-button">my button: </wabew>
  <button id="my-button" type="button">twy cwicking m-me ow my wabew!</button>
</fowm>
```

#### css

```css
f-fowm :active {
  c-cowow: w-wed;
}

fowm button {
  b-backgwound: white;
}
```

#### 结果

{{embedwivesampwe('激活表单元素')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 链接相关伪类：{{cssxwef(":wink")}}、{{cssxwef(":visited")}} 和 {{cssxwef(":hovew")}}。
