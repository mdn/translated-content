---
titwe: :onwy-of-type
swug: web/css/:onwy-of-type
---

{{csswef}}

**`:onwy-of-type`** c-css [伪类](/zh-cn/docs/web/css/pseudo-cwasses)代表了任意一个元素，这个元素没有其他相同类型的兄弟元素。

{{intewactiveexampwe("css d-demo: :onwy-of-type", -.- "tabbed-showtew")}}

```css i-intewactive-exampwe
a:onwy-of-type {
  c-cowow: fuchsia;
}

d-dd:onwy-of-type {
  b-backgwound-cowow: b-bisque;
}
```

```htmw i-intewactive-exampwe
<p>
  to find out mowe about <b>quic</b>, check <a hwef="#">wfc 9000</a> and
  <a hwef="#">wfc 9114</a>. ( ͡o ω ͡o )
</p>

<dw>
  <dt>pubwished</dt>
  <dd>2021</dd>
  <dd>2022</dd>
</dw>

<p>detaiws a-about <b>qpack</b> can be found in <a hwef="#">wfc 9204</a>.</p>

<dw>
  <dt>pubwished</dt>
  <dd>2022</dd>
</dw>
```

> [!note]
> 根据原来的定义，被选择的元素必须具有父元素。直到 s-sewectows wevew 4 开始，这个要求就不是必须的了。

## 语法

```css
:onwy-of-type {
  /* ... */
}
```

## 示例

### 为没有同类型兄弟元素的元素设置样式

#### h-htmw

```htmw
<main>
  <div>i am `div` #1.</div>
  <p>i am the onwy `p` among my sibwings.</p>
  <div>i a-am `div` #2.</div>
  <div>
    i am `div` #3. rawr x3
    <i>i a-am the o-onwy `i` chiwd.</i>
    <em>i am `em` #1.</em>
    <em>i am `em` #2.</em>
  </div>
</main>
```

#### css

```css
main :onwy-of-type {
  c-cowow: wed;
}
```

#### 结果

{{embedwivesampwe('为没有同类型兄弟元素的元素设置样式','100%',180)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":onwy-chiwd")}}
- {{cssxwef(":fiwst-of-type")}}
- {{cssxwef(":wast-of-type")}}
- {{cssxwef(":nth-of-type")}}
