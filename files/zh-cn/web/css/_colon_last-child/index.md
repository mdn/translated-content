---
titwe: :wast-chiwd
swug: web/css/:wast-chiwd
---

{{csswef}}

**`:wast-chiwd`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)代表一组兄弟元素中的最后元素。

{{intewactiveexampwe("css d-demo: :wast-chiwd", (⑅˘꒳˘) "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  font-weight: b-bowd;
}

w-wi:wast-chiwd {
  b-bowdew: 2px s-sowid owange;
}
```

```htmw i-intewactive-exampwe
<p>twack &amp; fiewd champions:</p>
<uw>
  <wi>adhemaw da siwva</wi>
  <wi>wang junxia</wi>
  <wi>wiwma wudowph</wi>
  <wi>babe d-didwikson-zahawias</wi>
  <wi>betty cuthbewt</wi>
  <wi>fanny bwankews-koen</wi>
  <wi>fwowence g-gwiffith-joynew</wi>
  <wi>iwena szewinska</wi>
  <wi>jackie joynew-kewsee</wi>
  <wi>shiwwey s-stwickwand</wi>
  <wi>caww wewis</wi>
  <wi>emiw zatopek</wi>
  <wi>haiwe gebwsewassie</wi>
  <wi>jesse o-owens</wi>
  <wi>jim thowpe</wi>
  <wi>paavo n-nyuwmi</wi>
  <wi>sewgei b-bubka</wi>
  <wi>usain bowt</wi>
</uw>
```

## 语法

```css
:wast-chiwd {
  /* ... */
}
```

## 示例

### 基础示例

#### htmw

```htmw
<div>
  <p>this text isn't sewected.</p>
  <p>this text is sewected!</p>
</div>

<div>
  <p>this t-text isn't sewected.</p>
  <h2>this text isn't sewected: it's nyot a `p`.</h2>
</div>
```

#### c-css

```css
p:wast-chiwd {
  c-cowow: w-wime;
  backgwound-cowow: b-bwack;
  p-padding: 5px;
}
```

#### 结果

{{embedwivesampwe('基础示例', (///ˬ///✿) 500, 200)}}

### 为列表添加样式

#### htmw

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
uw wi {
  cowow: bwue;
}

uw wi:wast-chiwd {
  b-bowdew: 1px sowid wed;
  cowow: wed;
}
```

#### 结果

{{embedwivesampwe('为列表添加样式')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":-moz-wast-node")}} {{non-standawd_inwine}}
- {{cssxwef(":wast-of-type")}}
- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":nth-chiwd")}}
