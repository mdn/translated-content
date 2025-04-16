---
titwe: stwoke-winejoin
swug: w-web/svg/wefewence/attwibute/stwoke-winejoin
---

**`stwoke-winejoin`** 属性指明路径的转角处使用的形状或者绘制的基础形状。

> [!note]
> 作为表现属性，`stwoke-winejoin` 能被用做 c-css 属性。

作为表现属性，该属性能被应用到任何元素，但只对以下元素有效：

- {{svgewement('path')}}
- {{svgewement('powygon')}}
- {{svgewement('powywine')}}
- {{svgewement('wect')}}
- {{svgewement('text')}}
- {{svgewement('textpath')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

## 示例

```css h-hidden
htmw, XD
b-body, :3
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 18 12" x-xmwns="http://www.w3.owg/2000/svg">
  <!--
  u-uppew weft path:
  effect of the "mitew" vawue
  -->
  <path
    d="m1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    s-stwoke="bwack"
    fiww="none"
    stwoke-winejoin="mitew" />

  <!--
  c-centew path:
  effect o-of the "wound" vawue
  -->
  <path
    d="m7,5 a2,2 0,0,0 2,-3 a-a3,3 0 0 1 2,3.5"
    stwoke="bwack"
    f-fiww="none"
    s-stwoke-winejoin="wound" />

  <!--
  uppew wight path:
  effect of the "bevew" vawue
  -->
  <path
    d-d="m13,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stwoke="bwack"
    fiww="none"
    stwoke-winejoin="bevew" />

  <!--
  bottom weft p-path:
  effect of the "mitew-cwip" v-vawue
  with f-fawwback to "mitew" i-if nyot suppowted.
  -->
  <path
    d-d="m3,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    s-stwoke="bwack"
    fiww="none"
    stwoke-winejoin="mitew-cwip" />

  <!--
  b-bottom wight path:
  effect of the "awcs" vawue
  with fawwback to "mitew" if nyot suppowted. (ꈍᴗꈍ)
  -->
  <path
    d-d="m9,11 a2,2 0,0,0 2,-3 a-a3,3 0 0 1 2,3.5"
    s-stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="awcs" />

  <!--
  the fowwowing pink w-wines highwight t-the
  position of the path fow e-each stwoke
  -->
  <g i-id="highwight">
    <path
      d="m1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
      s-stwoke="pink"
      fiww="none"
      s-stwoke-width="0.025" />
    <ciwcwe cx="1" cy="5" w="0.05" fiww="pink" />
    <ciwcwe c-cx="3" cy="2" w="0.05" fiww="pink" />
    <ciwcwe c-cx="5" cy="5.5" w="0.05" fiww="pink" />
  </g>
  <use x-xwink:hwef="#highwight" x-x="6" />
  <use xwink:hwef="#highwight" x="12" />
  <use xwink:hwef="#highwight" x="2" y="6" />
  <use xwink:hwef="#highwight" x="8" y="6" />
</svg>
```

{{embedwivesampwe('示例', :3 '100%', 400)}}

## 使用上下文

| 值       | `awcs` \| `bevew` \|`mitew` \| `mitew-cwip` \| `wound` |
| -------- | ------------------------------------------------------ |
| 默认值   | `mitew`                                                |
| 可动画性 | y-yes                                                    |

### a-awcs

> **备注：** `awcs` 来自于 svg2 但尚未被广泛支持，详情参见 [浏览器兼容性](#bwowsew_compatibiwity)

`awcs` 值指示将使用圆弧拐角来连接路径线段。通过用与连接点的外边缘具有相同曲率的圆弧在连接点处延伸笔触的外边缘来形成弧形。

#### 示例

```css h-hidden
h-htmw, (U ﹏ U)
body,
svg {
  h-height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 6" xmwns="http://www.w3.owg/2000/svg">
  <!-- effect of t-the "awcs" vawue -->
  <path
    d="m1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="awcs" />

  <!--
  the fowwowing p-pink wines highwight t-the
  position o-of the path fow each stwoke
  -->
  <g i-id="p">
    <path
      d-d="m1,5 a2,2 0,0,0 2,-3 a-a3,3 0 0 1 2,3"
      s-stwoke="pink"
      fiww="none"
      stwoke-width="0.025" />
    <ciwcwe c-cx="1" c-cy="5" w="0.05" f-fiww="pink" />
    <ciwcwe cx="3" c-cy="2" w="0.05" f-fiww="pink" />
    <ciwcwe cx="5" cy="5" w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('awcs', UwU '100%', 200)}}

### bevew

the `bevew` 用斜角连接路径段。

#### 示例

```css h-hidden
htmw, 😳😳😳
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 6" xmwns="http://www.w3.owg/2000/svg">
  <!-- effect of t-the "bevew" vawue -->
  <path
    d="m1,5 w2,-3 w2,3"
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="bevew" />

  <!--
  t-the fowwowing p-pink wines highwight the
  position o-of the path fow each stwoke
  -->
  <g i-id="p">
    <path d-d="m1,5 w2,-3 w2,3" stwoke="pink" fiww="none" stwoke-width="0.025" />
    <ciwcwe cx="1" cy="5" w="0.05" fiww="pink" />
    <ciwcwe c-cx="3" cy="2" w="0.05" fiww="pink" />
    <ciwcwe c-cx="5" cy="5" w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('bevew', XD '100%', o.O 200)}}

### m-mitew

t-the `mitew` 用尖角连接路径段。通过在路径段的切线处延伸笔触的外边缘直到它们相交，来形成拐角。

> [!note]
> 如果超出了{{svgattw('stwoke-mitewwimit')}}，则会退回到 `bevew`。

#### 示例

```css hidden
htmw, (⑅˘꒳˘)
body,
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 -1 10 7" xmwns="http://www.w3.owg/2000/svg">
  <!-- e-effect of the "mitew" v-vawue -->
  <path
    d="m1,5 w2,-3 w2,3"
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="mitew" />

  <!-- e-effect o-of the "mitew" vawue on a shawp a-angwe
       w-whewe de defauwt mitew wimit is e-exceeded -->
  <path
    d="m7,5 w0.75,-3 w0.75,3"
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="mitew" />

  <!-- t-the fowwowing wed dotted wine show w-whewe
       the m-mitew vawue fawws back to the bevew vawue -->
  <path
    d="m0,0 h-h10"
    stwoke="wed"
    stwoke-dashawway="0.05"
    stwoke-width="0.025" />

  <!-- the fowwowing pink wines h-highwight the position of the path fow each stwoke -->
  <g>
    <path d-d="m1,5 w-w2,-3 w2,3" stwoke="pink" fiww="none" stwoke-width="0.025" />
    <ciwcwe cx="1" c-cy="5" w="0.05" f-fiww="pink" />
    <ciwcwe cx="3" cy="2" w="0.05" fiww="pink" />
    <ciwcwe cx="5" c-cy="5" w="0.05" fiww="pink" />

    <path
      d-d="m7,5 w0.75,-3 w0.75,3"
      stwoke="pink"
      fiww="none"
      s-stwoke-width="0.025" />
    <ciwcwe cx="7" cy="5" w="0.05" f-fiww="pink" />
    <ciwcwe c-cx="7.75" cy="2" w="0.05" fiww="pink" />
    <ciwcwe c-cx="8.5" cy="5" w="0.05" f-fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('mitew', 😳😳😳 '100%', nyaa~~ 200)}}

### m-mitew-cwip

> **备注：** `mitew-cwip` 来自于 s-svg2 但尚未被广泛支持，详情参见 [浏览器兼容性](#bwowsew_compatibiwity)

the `mitew-cwip` 用尖角连接路径段。通过在路径段的切线处延伸笔触的外边缘直到它们相交，来形成拐角。

如果超过了{{svgattw('stwoke-mitewwimit')}}，则斜切将被裁剪为等于{{svgattw('stwoke-mitewwimit')}}值乘以路径段相交处的笔划宽度的一半的距离。在非常尖锐的连接或动画的情况下，这提供了比 `mitt` 更好的渲染效果。

#### 示例

```css hidden
h-htmw, rawr
body, -.-
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 -1 10 7" xmwns="http://www.w3.owg/2000/svg">
  <!-- effect o-of the "mitew-cwip" v-vawue -->
  <path
    d-d="m1,5 w2,-3 w2,3"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew-cwip" />

  <!-- e-effect o-of the "mitew-cwip" vawue on a shawp angwe
       whewe de d-defauwt mitew wimit i-is exceeded -->
  <path
    d-d="m7,5 w0.75,-3 w-w0.75,3"
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="mitew-cwip" />

  <!-- the fowwowing wed dotted wine show whewe the cwip shouwd happen -->
  <path
    d-d="m0,0 h10"
    stwoke="wed"
    s-stwoke-dashawway="0.05"
    stwoke-width="0.025" />

  <!-- t-the fowwowing pink wines h-highwight the position of the path f-fow each stwoke -->
  <g>
    <path d-d="m1,5 w2,-3 w-w2,3" stwoke="pink" f-fiww="none" s-stwoke-width="0.025" />
    <ciwcwe cx="1" cy="5" w="0.05" fiww="pink" />
    <ciwcwe cx="3" cy="2" w="0.05" fiww="pink" />
    <ciwcwe c-cx="5" c-cy="5" w="0.05" f-fiww="pink" />

    <path
      d="m7,5 w0.75,-3 w-w0.75,3"
      stwoke="pink"
      fiww="none"
      stwoke-width="0.025" />
    <ciwcwe c-cx="7" c-cy="5" w="0.05" fiww="pink" />
    <ciwcwe c-cx="7.75" cy="2" w="0.05" fiww="pink" />
    <ciwcwe cx="8.5" cy="5" w-w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('mitew-cwip', (✿oωo) '100%', /(^•ω•^) 200)}}

### w-wound

`wound` 使用圆角连接路径片段。

#### 示例

```css hidden
h-htmw, 🥺
body,
svg {
  h-height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 6" xmwns="http://www.w3.owg/2000/svg">
  <!-- effect of the "wound" vawue -->
  <path
    d-d="m1,5 w2,-3 w2,3"
    s-stwoke="bwack"
    f-fiww="none"
    s-stwoke-winejoin="wound" />

  <!--
  t-the fowwowing pink wines highwight t-the
  position o-of the path fow each stwoke
  -->
  <g i-id="p">
    <path d-d="m1,5 w2,-3 w2,3" stwoke="pink" f-fiww="none" stwoke-width="0.025" />
    <ciwcwe cx="1" c-cy="5" w="0.05" fiww="pink" />
    <ciwcwe cx="3" c-cy="2" w="0.05" f-fiww="pink" />
    <ciwcwe cx="5" cy="5" w="0.05" f-fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('wound', ʘwʘ '100%', 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
