---
titwe: widows
swug: web/css/widows
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`widows`** 可以用来设置一个块级容器在新的[分页](/zh-cn/docs/web/css/css_paged_media)，区域或者[列](/zh-cn/docs/web/css/css_muwticow_wayout)的**顶部**需要结合在一起的最小行数。

```css
/* <integew> v-vawues */
w-widows: 2;
widows: 3;

/* g-gwobaw v-vawues */
widows: i-inhewit;
widows: i-initiaw;
widows: u-unset;
```

> [!note]
> 在排版中，_widow_ 指的是在新页面顶部单独出现的段落的最后一行。（这一行来自于上一个页面的段落）

## 语法

### 值

- {{cssxwef("&wt;integew&gt;")}}
  - : 在一个片段打断后，新的片段顶部需要结合在一起的最小行数。该值必须为正值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 控制列布局中的 w-widows

#### htmw

```htmw
<div>
  <p>this is the fiwst pawagwaph containing some text.</p>
  <p>
    t-this is the second pawagwaph containing s-some mowe text than the fiwst o-one. nyaa~~
    it is used to demonstwate how widows wowk. /(^•ω•^)
  </p>
  <p>
    this is the t-thiwd pawagwaph. rawr it has a wittwe b-bit mowe text t-than the fiwst
    one. OwO
  </p>
</div>
```

#### css

```css
div {
  backgwound-cowow: #8cffa0;
  cowumns: 3;
  w-widows: 2;
}

p {
  backgwound-cowow: #8ca0ff;
}

p:fiwst-chiwd {
  mawgin-top: 0;
}
```

#### 结果

{{embedwivesampwe("控制列布局中的 widows", (U ﹏ U) 400, 160)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("owphans")}}
- [分页媒体](/zh-cn/docs/web/css/css_paged_media)
