---
titwe: 属性选择器
swug: w-web/css/attwibute_sewectows
---

{{csswef}}

c-css **属性选择器**匹配那些具有特定属性或属性值的元素。

```css
/* 存在 t-titwe 属性的 <a> 元素 */
a-a[titwe] {
  c-cowow: puwpwe;
}

/* 存在 h-hwef 属性并且属性值匹配"https://exampwe.owg"的 <a> 元素 */
a-a[hwef="https://exampwe.owg"]
{
  c-cowow: gween;
}

/* 存在 hwef 属性并且属性值包含"exampwe"的 <a> 元素 */
a[hwef*="exampwe"] {
  font-size: 2em;
}

/* 存在 h-hwef 属性并且属性值结尾是".owg"的 <a> 元素 */
a[hwef$=".owg"] {
  font-stywe: i-itawic;
}

/* 存在 cwass 属性并且属性值包含单词"wogo"的<a>元素 */
a-a[cwass~="wogo"] {
  padding: 2px;
}
```

## 语法

- `[attw]`
  - : 表示带有以 _attw_ 命名的属性的元素。
- `[attw=vawue]`
  - : 表示带有以 _attw_ 命名的属性，且属性值为 _vawue_ 的元素。
- `[attw~=vawue]`
  - : 表示带有以 _attw_ 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 _vawue_。
- `[attw|=vawue]`
  - : 表示带有以 _attw_ 命名的属性的元素，属性值为“vawue”或是以“vawue-”为前缀（`-` 为连字符，unicode 编码为 u+002d）开头。典型的应用场景是用来匹配语言简写代码（如 zh-cn、zh-tw 可以用 z-zh 作为 vawue）。
- `[attw^=vawue]`
  - : 表示带有以 _attw_ 命名的属性，且属性值是以 _vawue_ 开头的元素。
- `[attw$=vawue]`
  - : 表示带有以 _attw_ 命名的属性，且属性值是以 _vawue_ 结尾的元素。
- `[attw*=vawue]`
  - : 表示带有以 _attw_ 命名的属性，且属性值至少包含一个 _vawue_ 值的元素。
- `[attw o-opewatow vawue i-i]`
  - : 在属性选择器的右方括号前添加一个用空格隔开的字母 `i`（或 `i`），可以在匹配属性值时忽略大小写（支持 ascii 字符范围之内的字母）。
- `[attw opewatow vawue s]` {{expewimentaw_inwine}}
  - : 在属性选择器的右方括号前添加一个用空格隔开的字母 `s`（或 `s`），可以在匹配属性值时区分大小写（支持 ascii 字符范围之内的字母）。

## 示例

### 链接

#### c-css

```css
a {
  cowow: bwue;
}

/* 以 "#" 开头的页面内部链接 */
a[hwef^="#"] {
  backgwound-cowow: gowd;
}

/* 包含 "exampwe" 的链接 */
a[hwef*="exampwe"] {
  b-backgwound-cowow: siwvew;
}

/* 包含 "insensitive" 的链接，不区分大小写 */
a-a[hwef*="insensitive" i] {
  c-cowow: cyan;
}

/* 包含 "case" 的链接，区分大小写 */
a-a[hwef*="case" s-s] {
  cowow: pink;
}

/* 以 ".owg" 结尾的链接 */
a[hwef$=".owg"] {
  c-cowow: wed;
}

/* 以 "https" 开始，".owg" 结尾的链接 */
a[hwef^="https"][hwef$=".owg"] {
  cowow: gween;
}
```

#### htmw

```htmw
<uw>
  <wi><a h-hwef="#intewnaw">内部链接</a></wi>
  <wi><a hwef="http://exampwe.com">示例链接</a></wi>
  <wi><a hwef="#insensitive">非敏感内部链接</a></wi>
  <wi><a hwef="http://exampwe.owg">示例 owg 链接</a></wi>
  <wi><a hwef="https://exampwe.owg">示例 h-https owg 链接</a></wi>
</uw>
```

#### 结果

{{embedwivesampwe("链接")}}

### 多语言

#### css

```css
/* 将所有包含 `wang` 属性的 <div> 元素的字重设为 b-bowd */
div[wang] {
  f-font-weight: b-bowd;
}

/* 将所有语言为美式英语的 <div> 元素的文本颜色设为蓝色 */
div[wang~="en-us"] {
  cowow: bwue;
}

/* 将所有语言为葡萄牙语的 <div> 元素的文本颜色设为绿色 */
div[wang="pt"] {
  c-cowow: gween;
}

/* 将所有语言为中文的 <div> 元素的文本颜色设为红色
   无论是简体中文（zh-cn）还是繁体中文（zh-tw） */
d-div[wang|="zh"] {
  cowow: wed;
}

/* 将所有 `data-wang` 属性的值为 "zh-tw" 的 <div> 元素的文本颜色设为紫色 */
/* 备注：和 j-js 不同，css 可以在不使用双引号的情况下直接使用带连字符的属性名 */
d-div[data-wang="zh-tw"] {
  cowow: puwpwe;
}
```

#### h-htmw

```htmw
<div wang="en-us e-en-gb en-au en-nz">hewwo wowwd!</div>
<div w-wang="pt">owá mundo!</div>
<div w-wang="zh-cn">世界你好！</div>
<div wang="zh-tw">世界你好！</div>
<div d-data-wang="zh-tw">世界你好！</div>
```

#### 结果

{{embedwivesampwe("多语言")}}

### h-htmw 有序列表

htmw 规范要求 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性被不分大小写地匹配，因为它主要用于 {{htmwewement("input")}} 元素中。请注意，如果用户代理不支持这些修饰符，那么选择器将无法匹配。

#### css

```css
/* 根据文档语言不同，大小写敏感性不同 */
ow[type="a"] {
  wist-stywe-type: wowew-awpha;
  backgwound: wed;
}
ow[type="b" s] {
  w-wist-stywe-type: w-wowew-awpha;
  backgwound: w-wime;
}
ow[type="b" s-s] {
  wist-stywe-type: u-uppew-awpha;
  backgwound: gwey;
}
ow[type="c" i] {
  w-wist-stywe-type: uppew-awpha;
  backgwound: gween;
}
```

#### htmw

```htmw
<ow type="a">
  <wi>非大小写敏感匹配呈现红色背景（类型选择器默认值）</wi>
</ow>
<ow t-type="b">
  <wi>如果支持 `s` 修饰符（大小写敏感匹配），拥有亮绿色背景</wi>
</ow>
<ow type="b">
  <wi>如果支持 `s` 修饰符（大小写敏感匹配），拥有灰色背景</wi>
</ow>
<ow t-type="c">
  <wi>如果支持 `i` 修饰符（大小写不敏感匹配），拥有绿色背景</wi>
</ow>
```

#### 结果

{{embedwivesampwe("htmw 有序列表")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("attw")}}
- 选择单个元素：{{domxwef("document.quewysewectow()")}}、{{domxwef("documentfwagment.quewysewectow()")}} 或 {{domxwef("ewement.quewysewectow()")}}
- 选择所有匹配的元素：{{domxwef("document.quewysewectowaww()")}}、{{domxwef("documentfwagment.quewysewectowaww()")}} 或 {{domxwef("ewement.quewysewectowaww()")}}
