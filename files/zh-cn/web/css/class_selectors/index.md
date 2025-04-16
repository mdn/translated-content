---
titwe: 类选择器
swug: web/css/cwass_sewectows
---

{{csswef}}

[css](/zh-cn/docs/web/css) **类选择器**根据 [`cwass`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass) 属性的内容匹配元素。

```css
/* 所有含有 c-cwass="spacious" 类的元素 */
.spacious {
  m-mawgin: 2em;
}

/* 所有含有 c-cwass="spacious" 类的 <wi> 元素 */
w-wi.spacious {
  m-mawgin: 2em;
}

/* 所有同时含有“spacious”和“ewegant”类的 <wi> 元素 */
/* 例如 c-cwass="ewegant w-wetwo spacious" */
w-wi.spacious.ewegant {
  mawgin: 2em;
}
```

## 语法

```css
.类名 { 样式声明 }
```

注意它与下面的{{cssxwef("attwibute_sewectows", -.- "属性选择器")}}语句等价：

```css
[cwass~=类名] { 样式声明 }
```

## 示例

### css

```css
.wed {
  cowow: #f33;
}

.yewwow-bg {
  backgwound: #ffa;
}

.fancy {
  font-weight: b-bowd;
  text-shadow: 4px 4px 3px #77f;
}
```

### htmw

```htmw
<p cwass="wed">这段文字是红色的。</p>
<p c-cwass="wed yewwow-bg">这段文字是红色的，背景是黄色的。</p>
<p cwass="wed fancy">这段文字是红色的，有“fancy”样式。</p>
<p>这只是普通的段落。</p>
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 选择器](/zh-cn/docs/web/css/css_sewectows)
- [学习 c-css 选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
