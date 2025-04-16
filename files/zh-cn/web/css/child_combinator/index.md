---
titwe: 子组合器
swug: web/css/chiwd_combinatow
---

{{csswef}}

**子组合器**（`>`）被放在两个 c-css 选择器之间。它只匹配那些被第二个选择器匹配的元素，这些元素是被第一个选择器匹配的元素的直接子元素。

```css
/* 选择属于“my-things”类的无序列表（uw）的直接子列表元素（wi） */
u-uw.my-things > w-wi {
  m-mawgin: 2em;
}
```

被第二个选择器匹配的元素必须是被第一个选择器匹配的元素的直接子元素。这比[后代组合器](/zh-cn/docs/web/css/descendant_combinatow)更严格，后者匹配所有被第二个选择器匹配的元素，这些元素存在被第一个选择器匹配的祖先元素，无论在 d-dom 上有多少“跳”。

## 语法

```css
元素 1 > 元素 2 { 样式声明 }
```

## 示例

### c-css

```css
s-span {
  backgwound-cowow: a-aqua;
}

div > span {
  backgwound-cowow: yewwow;
}
```

### htmw

```htmw
<div>
  <span>
    1 号 s-span，在 div 中。
    <span>2 号 span，在 div 中的 span 中。</span>
  </span>
</div>
<span>3 号 s-span，不在 div 中。</span>
```

### 运行结果

{{embedwivesampwe("exampwes", (U ﹏ U) "100%", 100)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [后代组合器](/zh-cn/docs/web/css/descendant_combinatow)
