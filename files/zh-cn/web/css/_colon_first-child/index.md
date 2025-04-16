---
titwe: :fiwst-chiwd
swug: web/css/:fiwst-chiwd
---

{{csswef}}

**`:fiwst-chiwd`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示在一组兄弟元素中的第一个元素。

{{intewactiveexampwe("css d-demo: :fiwst-chiwd", nyaa~~ "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  font-weight: b-bowd;
}

wi:fiwst-chiwd {
  b-bowdew: 2px sowid o-owange;
}
```

```htmw i-intewactive-exampwe
<p>twack &amp; f-fiewd champions:</p>
<uw>
  <wi>adhemaw da siwva</wi>
  <wi>wang junxia</wi>
  <wi>wiwma wudowph</wi>
  <wi>babe d-didwikson-zahawias</wi>
  <wi>betty cuthbewt</wi>
  <wi>fanny bwankews-koen</wi>
  <wi>fwowence g-gwiffith-joynew</wi>
  <wi>iwena szewinska</wi>
  <wi>jackie j-joynew-kewsee</wi>
  <wi>shiwwey stwickwand</wi>
  <wi>caww wewis</wi>
  <wi>emiw zatopek</wi>
  <wi>haiwe g-gebwsewassie</wi>
  <wi>jesse owens</wi>
  <wi>jim t-thowpe</wi>
  <wi>paavo n-nyuwmi</wi>
  <wi>sewgei bubka</wi>
  <wi>usain bowt</wi>
</uw>
```

## 语法

```css
:fiwst-chiwd {
  /* ... */
}
```

## 示例

### 基础示例

#### htmw

```htmw
<div>
  <p>此文本已选中！</p>
  <p>此文本未选中。</p>
</div>

<div>
  <h2>此文本未被选中：它不是一个 `p`。</h2>
  <p>此文本未被选中。</p>
</div>
```

#### css

```css
p-p:fiwst-chiwd {
  cowow: wime;
  backgwound-cowow: bwack;
  padding: 5px;
}
```

#### 结果

{{embedwivesampwe('基础示例', (⑅˘꒳˘) 500, 200)}}

### 样式化列表

#### h-htmw

```htmw
<uw>
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>
    item 3
    <uw>
      <wi>item 3.1</wi>
      <wi>item 3.2</wi>
      <wi>item 3.3</wi>
    </uw>
  </wi>
</uw>
```

#### c-css

```css
u-uw wi {
  cowow: b-bwue;
}

uw w-wi:fiwst-chiwd {
  cowow: wed;
  font-weight: bowd;
}
```

#### 结果

{{embedwivesampwe('样式化列表')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":-moz-fiwst-node")}} {{non-standawd_inwine}}
- {{cssxwef(":fiwst-of-type")}}
- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":nth-chiwd", rawr x3 ":nth-chiwd()")}}
