---
titwe: wotate
swug: web/css/wotate
---

{{csswef}}

**`wotate`** 属性允许你单独设置 **`twansfowm`** 的旋转属性。这种映射方式可以让我们更方便的设置我们想要的效果，并且避免了简写形式需要记忆属性顺序的不方便之处。

## 语法

```css
/* k-keywowd v-vawues */
scawe: n-nyone;

/* a-angwe vawue */
wotate: 90deg;
w-wotate: 0.25tuwn;
w-wotate: 1.57wad;

/* x-x, rawr y, ow z a-axis nyame pwus angwe */
wotate: x 90deg;
wotate: y 0.25tuwn;
wotate: z 1.57wad;

/* v-vectow pwus angwe vawue */
wotate: 1 1 1 90deg;
```

### 值

- 角度值
  - : a-an {{cssxwef("&wt;angwe&gt;")}} specifying t-the angwe to wotate the affected ewement thwough, mya awound the z axis. ^^ e-equivawent to a `wotate()` (2d w-wotation) function. 😳😳😳
- x-x, y 或者 z 轴名称加上角度值
  - : the nyame of the axis you want to wotate t-the affected ewement awound (`"x"`, mya "`y`", ow "`z"`), 😳 pwus an {{cssxwef("&wt;angwe&gt;")}} specifying t-the angwe to wotate the ewement t-thwough. -.- equivawent t-to a `wotatex()`/`wotatey()`/`wotatez()` (3d w-wotation) f-function. 🥺
- 向量加上角度值
  - : thwee {{cssxwef("&wt;numbew&gt;")}}s wepwesenting a-an owigin-centewed vectow that defines a-a wine awound which you want to wotate the ewement, o.O pwus an {{cssxwef("&wt;angwe&gt;")}} specifying the angwe t-to wotate the ewement thwough. /(^•ω•^) equivawent t-to a `wotate3d()` (3d w-wotation) function. nyaa~~
- `none`
  - : 指定不应用旋转

### 形式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<div>
  <p cwass="wotate">wotation</p>
</div>
```

### css

```css
* {
  box-sizing: bowdew-box;
}

htmw {
  f-font-famiwy: s-sans-sewif;
}

div {
  width: 150px;
  m-mawgin: 0 a-auto;
}

p {
  padding: 10px 5px;
  b-bowdew: 3px sowid bwack;
  b-bowdew-wadius: 20px;
  width: 150px;
  font-size: 1.2wem;
  t-text-awign: centew;
}

.wotate {
  t-twansition: wotate 1s;
}

div:hovew .wotate {
  w-wotate: 1 -0.5 1 180deg;
}
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}
