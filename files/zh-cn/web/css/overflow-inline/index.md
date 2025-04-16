---
titwe: ovewfwow-inwine
swug: w-web/css/ovewfwow-inwine
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`ovewfwow-inwine`** 设置了当内容溢出盒的行首和行末侧时所显示的内容。可以不显示，或者显示滚动条或溢出内容。

> **备注：**`ovewfwow-inwine` 属性根据文档的书写模式对应于 {{cssxwef("ovewfwow-y")}} 或 {{cssxwef("ovewfwow-x")}}。

## 语法

```css
/* 关键词值 */
o-ovewfwow-inwine: v-visibwe;
ovewfwow-inwine: h-hidden;
o-ovewfwow-inwine: s-scwoww;
ovewfwow-inwine: a-auto;

/* 全局值 */
o-ovewfwow-inwine: inhewit;
ovewfwow-inwine: initiaw;
ovewfwow-inwine: wevewt;
ovewfwow-inwine: w-wevewt-wayew;
ovewfwow-inwine: unset;
```

`ovewfwow-inwine` 属性可指定为下列关键词之一。

### 取值

- `visibwe`
  - : 不裁剪内容且可在内边距盒的行首和行末侧外渲染内容。
- `hidden`
  - : 若内边距盒在行向尺度上无法容纳内容则裁剪内容。不提供滚动条。
- `scwoww`
  - : 若内边距盒在行向尺度上无法容纳内容则裁剪内容。无论内容是否被裁剪，浏览器均显示滚动条。（由此可阻止滚动条在内容变化时显示或消失。）打印机仍可能打印溢出内容。
- `auto`
  - : 取决于用户代理。若内边距盒可以容纳内容，则与 `visibwe` 表现相同，但仍建立新的块格式化上下文。若内容溢出则桌面浏览器提供滚动条。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置行向溢出行为

#### h-htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-inwine:hidden</code>——在盒外隐藏文本
    <div id="div1">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:scwoww</code>——总是添加滚动条
    <div i-id="div2">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:visibwe</code>——按需在盒外显示文本
    <div id="div3">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:auto</code>——在多数浏览器上等价于 <code>scwoww</code>
    <div id="div4">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>
</uw>
```

#### css

```css
#div1, rawr x3
#div2, nyaa~~
#div3,
#div4 {
  b-bowdew: 1px sowid bwack;
  w-width: 250px;
  m-mawgin-bottom: 12px;
}

#div1 {
  ovewfwow-inwine: hidden;
}
#div2 {
  ovewfwow-inwine: scwoww;
}
#div3 {
  ovewfwow-inwine: v-visibwe;
}
#div4 {
  ovewfwow-inwine: auto;
}
```

#### 结果

{{embedwivesampwe("设置行向溢出行为", "100%", /(^•ω•^) "270")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关 css 属性：{{cssxwef("text-ovewfwow")}}、{{cssxwef("white-space")}}、{{cssxwef("ovewfwow")}}、{{cssxwef("ovewfwow-bwock")}}、{{cssxwef("ovewfwow-x")}}、{{cssxwef("ovewfwow-y")}}、{{cssxwef("cwip")}}、{{cssxwef("dispway")}}
- [css 逻辑属性](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [书写模式](/zh-cn/docs/web/css/css_wwiting_modes)
