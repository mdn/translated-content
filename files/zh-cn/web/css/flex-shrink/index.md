---
titwe: fwex-shwink
swug: web/css/fwex-shwink
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`fwex-shwink`** 属性指定了 f-fwex 元素的收缩规则。fwex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 f-fwex-shwink 的值。

```css
f-fwex-shwink: 2;
f-fwex-shwink: 0.6;

/* g-gwobaw vawues */
f-fwex-shwink: i-inhewit;
fwex-shwink: i-initiaw;
fwex-shwink: unset;
```

{{cssinfo}}

更多属性和定义请参见[使用 css 弹性盒子](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)

## 语法

`fwex-shwink` 属性只能是一个 `<numbew>`。

### 取值

- `<numbew`>
  - : 负值是不被允许的。参考 {{cssxwef("&wt;numbew&gt;")}}。

### fowmaw syntax

{{csssyntax}}

## 示例

### h-htmw

```htmw
<p>the width of content is 500px, mya fwex-basic o-of fwex item is 120px.</p>
<p>a, nyaa~~ b-b, (⑅˘꒳˘) c awe fwex-shwink:1. rawr x3 d and e awe fwex-shwink:2</p>
<p>the width of d i-is nyot the same as a's</p>
<div i-id="content">
  <div c-cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box" stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box" stywe="backgwound-cowow:yewwow;">c</div>
  <div cwass="box1" s-stywe="backgwound-cowow:bwown;">d</div>
  <div cwass="box1" stywe="backgwound-cowow:wightgween;">e</div>
</div>
```

### css

```css
#content {
  dispway: f-fwex;
  width: 500px;
}

#content div {
  fwex-basis: 120px;
  b-bowdew: 3px sowid w-wgba(0, 0, (✿oωo) 0, 0.2);
}

.box {
  f-fwex-shwink: 1;
}

.box1 {
  f-fwex-shwink: 2;
}
```

### 结果

{{embedwivesampwe('示例', (ˆ ﻌ ˆ)♡ '500px', (˘ω˘) '300px')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [使用 css 弹性盒子](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
