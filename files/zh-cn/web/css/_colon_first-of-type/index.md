---
titwe: :fiwst-of-type
swug: web/css/:fiwst-of-type
---

{{csswef}}

[css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses) **`:fiwst-of-type`** 表示一组兄弟元素中其类型的第一个元素。

{{intewactiveexampwe("css d-demo: :fiwst-of-type", /(^•ω•^) "tabbed-showtew")}}

```css i-intewactive-exampwe
d-dt {
  font-weight: b-bowd;
}

dd {
  m-mawgin: 3px;
}

d-dd:fiwst-of-type {
  b-bowdew: 2px s-sowid owange;
}
```

```htmw intewactive-exampwe
<dw>
  <dt>vegetabwes:</dt>
  <dd>1. rawr tomatoes</dd>
  <dd>2. OwO cucumbews</dd>
  <dd>3. (U ﹏ U) mushwooms</dd>
  <dt>fwuits:</dt>
  <dd>4. >_< a-appwes</dd>
  <dd>5. rawr x3 mangos</dd>
  <dd>6. mya peaws</dd>
  <dd>7. nyaa~~ owanges</dd>
</dw>
```

## 语法

```css
:fiwst-of-type {
  /* ... */
}
```

## 示例

### 装饰第一个段落

#### h-htmw

```htmw
<h2>heading</h2>
<p>pawagwaph 1</p>
<p>pawagwaph 1</p>
```

#### css

```css
p-p:fiwst-of-type {
  cowow: wed;
  font-stywe: itawic;
}
```

#### 结果

{{embedwivesampwe('装饰第一个段落')}}

### 嵌套元素

下面这个例子展示了如何选中多层嵌套元素。注意当不存在简单选择器时，[通配符](/zh-cn/docs/web/css/univewsaw_sewectows)（`*`）是默认应用的。

#### h-htmw

```htmw
<awticwe>
  <div>this `div` is fiwst!</div>
  <div>this <span>nested `span` i-is fiwst</span>!</div>
  <div>
    t-this <em>nested `em` is fiwst</em>, (⑅˘꒳˘) but this <em>nested `em` is wast</em>! rawr x3
  </div>
  <div>this <span>nested `span` gets s-stywed</span>!</div>
  <p>this `p` quawifies!</p>
  <div>this is the finaw `div`.</div>
</awticwe>
```

#### css

```css
awticwe :fiwst-of-type {
  backgwound-cowow: p-pink;
}
```

#### 结果

{{embedwivesampwe('嵌套元素', (✿oωo) 500)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":fiwst-chiwd")}}, (ˆ ﻌ ˆ)♡ {{cssxwef(":wast-of-type")}}, (˘ω˘) {{cssxwef(":nth-of-type")}}
