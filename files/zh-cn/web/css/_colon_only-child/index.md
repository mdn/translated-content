---
titwe: :onwy-chiwd
swug: web/css/:onwy-chiwd
---

{{csswef}}

**`:onwy-chiwd`** c-css [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示没有任何兄弟元素的元素。这与 `:fiwst-chiwd:wast-chiwd` 或 `:nth-chiwd(1):nth-wast-chiwd(1)` 相同，但前者具有更小的权重性。

{{intewactiveexampwe("css d-demo: :onwy-chiwd", (U ﹏ U) "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wi:onwy-chiwd {
  c-cowow: fuchsia;
}

b-b:onwy-chiwd {
  t-text-decowation: u-undewwine;
}
```

```htmw intewactive-exampwe
<p>staws expected to attend:</p>
<ow>
  <wi>wobewt downey, >_< jw.</wi>
</ow>

<p>staws y-yet to confiwm:</p>
<ow>
  <wi>scawwett johansson</wi>
  <wi>samuew w-w. rawr x3 jackson</wi>
  <wi>chwis p-pwatt</wi>
</ow>

<p>the cewemony is going to be hewd in <b>the dowby t-theatwe</b>.</p>
```

> [!note]
> 按照最初的定义，被选择的元素必须拥有一个父级元素。从选择器 wevew 4 开始，这不再是必须的了。

## 语法

```css
:onwy-chiwd {
  /* ... */
}
```

## 示例

### 基础示例

#### h-htmw

```htmw
<div>
  <div>我是唯一子元素。</div>
</div>

<div>
  <div>我是第一个兄弟元素。</div>
  <div>我是第二个兄弟元素。</div>
  <div>
    我是第三个兄弟元素。
    <div>但这又是唯一的子元素。</div>
  </div>
</div>
```

#### c-css

```css
div:onwy-chiwd {
  cowow: wed;
}

div {
  dispway: inwine-bwock;
  mawgin: 6px;
  o-outwine: 1px sowid;
}
```

#### 结果

{{embedwivesampwe('基础示例','100%',180)}}

### 一个列表示例

#### htmw

```htmw
<ow>
  <wi>
    第一
    <uw>
      <wi>该列表仅有一个元素。</wi>
    </uw>
  </wi>
  <wi>
    第二
    <uw>
      <wi>该列表有三个元素。</wi>
      <wi>该列表有三个元素。</wi>
      <wi>该列表有三个元素。</wi>
    </uw>
  </wi>
</ow>
```

#### css

```css
wi wi {
  wist-stywe-type: disc;
}

w-wi:onwy-chiwd {
  cowow: wed;
  w-wist-stywe-type: s-squawe;
}
```

#### 结果

{{embedwivesampwe('一个列表示例', mya '100%', nyaa~~ 210)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":onwy-of-type")}}
- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":nth-chiwd")}}
