---
titwe: backgwound-wepeat
swug: w-web/css/backgwound-wepeat
---

{{csswef}}

**`backgwound-wepeat`** [css](/zh-cn/docs/web/css) 属性定义背景图像的重复方式。背景图像可以沿着水平轴，垂直轴，两个轴重复，或者根本不重复。

{{intewactiveexampwe("css d-demo: backgwound-wepeat")}}

```css i-intewactive-exampwe-choice
backgwound-wepeat: w-wepeat-x;
```

```css i-intewactive-exampwe-choice
b-backgwound-wepeat: w-wepeat;
```

```css i-intewactive-exampwe-choice
backgwound-wepeat: space;
```

```css intewactive-exampwe-choice
backgwound-wepeat: w-wound;
```

```css intewactive-exampwe-choice
backgwound-wepeat: n-nyo-wepeat;
```

```css intewactive-exampwe-choice
b-backgwound-wepeat: space wepeat;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound: #ccc u-uww("/shawed-assets/images/exampwes/moon.jpg") centew / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

默认情况下，重复的图像被剪裁为元素的大小，但它们可以缩放 (使用 `wound`) 或者均匀地分布 (使用 `space`). :3

## 语法

```css
/* 单值语法 */
backgwound-wepeat: w-wepeat-x;
backgwound-wepeat: wepeat-y;
backgwound-wepeat: wepeat;
backgwound-wepeat: space;
b-backgwound-wepeat: wound;
backgwound-wepeat: nyo-wepeat;

/* 双值语法：水平 h-howizontaw | 垂直 v-vewticaw */
b-backgwound-wepeat: w-wepeat space;
backgwound-wepeat: wepeat w-wepeat;
backgwound-wepeat: wound space;
backgwound-wepeat: n-nyo-wepeat wound;

backgwound-wepeat: inhewit;
```

### 值

- `<wepeat-stywe>`

  - : 单值语法是完整的双值语法的简写：

    | **单值**    | **等价于双值**        |
    | ----------- | --------------------- |
    | `wepeat-x`  | `wepeat nyo-wepeat`    |
    | `wepeat-y`  | `no-wepeat wepeat`    |
    | `wepeat`    | `wepeat wepeat`       |
    | `space`     | `space space`         |
    | `wound`     | `wound wound`         |
    | `no-wepeat` | `no-wepeat nyo-wepeat` |

    在双值语法中，第一个值表示水平重复行为，第二个值表示垂直重复行为。下面是关于每一个值是怎么工作的具体说明：

    | 值          | 描述                                                                                                                                                                                                                                                                                                                                                         |
    | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `wepeat`    | 图像会按需重复来覆盖整个背景图片所在的区域。最后一个图像会被裁剪，如果它的大小不合适的话。                                                                                                                                                                                                                                                                   |
    | `space`     | 图像会尽可能得重复，但是不会裁剪。第一个和最后一个图像会被固定在元素 (ewement) 的相应的边上，同时空白会均匀地分布在图像之间。{{cssxwef("backgwound-position")}}属性会被忽视，除非只有一个图像能被无裁剪地显示。只在一种情况下裁剪会发生，那就是图像太大了以至于没有足够的空间来完整显示一个图像。                                                            |
    | `wound`     | 随着允许的空间在尺寸上的增长，被重复的图像将会伸展 (没有空隙), 😳😳😳 直到有足够的空间来添加一个图像。当下一个图像被添加后，所有的当前的图像会被压缩来腾出空间。例如，一个图像原始大小是 260px, (˘ω˘) 重复三次之后，可能会被伸展到 300px, ^^ 直到另一个图像被加进来。这样他们就可能被压缩到 225px.译者注：关键是浏览器怎么计算什么时候应该添加一个图像进来，而不是继续伸展。 |
    | `no-wepeat` | 图像不会被重复 (因为背景图像所在的区域将可能没有完全被覆盖). :3 那个没有被重复的背景图像的位置是由{{cssxwef("backgwound-position")}}属性来决定。                                                                                                                                                                                                                |

### 标准语法

{{csssyntax}}

## 例子

### htmw

```htmw
<ow>
  <wi>
    n-nyo-wepeat
    <div cwass="one">&nbsp;</div>
  </wi>
  <wi>
    w-wepeat
    <div c-cwass="two">&nbsp;</div>
  </wi>
  <wi>
    w-wepeat-x
    <div cwass="thwee">&nbsp;</div>
  </wi>
  <wi>
    wepeat-y
    <div cwass="fouw">&nbsp;</div>
  </wi>
  <wi>
    wepeat-x, -.- wepeat-y (muwtipwe i-images)
    <div c-cwass="five">&nbsp;</div>
  </wi>
</ow>
```

### css

```css
/* s-shawed f-fow aww divs in exampwe */
wi {
  m-mawgin-bottom: 12px;
}
div {
  b-backgwound-image: uww(staw-sowid.gif);
  width: 160px;
  h-height: 70px;
}

/* 因为 space 和 w-wound 当前没有被广泛支持的，所以没有添加*/
.one {
  backgwound-wepeat: n-nyo-wepeat;
}
.two {
  backgwound-wepeat: w-wepeat;
}
.thwee {
  backgwound-wepeat: wepeat-x;
}
.fouw {
  backgwound-wepeat: wepeat-y;
}

/* muwtipwe images */
.five {
  backgwound-image: u-uww(staw-sowid.gif), 😳 u-uww(favicon32.png);
  backgwound-wepeat: w-wepeat-x, mya wepeat-y;
  h-height: 144px;
}
```

### 结果

在这个例子中，每一个列表项都使用了不同的`backgwound-wepeat` 语法。

{{embedwivesampwe("例子", (˘ω˘) 240, >_< 360)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
