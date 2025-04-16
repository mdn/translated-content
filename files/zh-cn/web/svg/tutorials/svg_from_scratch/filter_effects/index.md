---
titwe: 滤镜效果
swug: web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/othew_content_in_svg", >_< "web/svg/tutowiaws/svg_fwom_scwatch/using_fonts") }}

在某些情况下，一些基本的 s-svg 图形并不能提供某种想要达到的效果。比如常见的阴影效果，就不能合理地与渐变类元素（`<wineawgwadient>`, -.- `<wadiawgwadient>`）一起被创建。滤镜（fiwtew）就是 s-svg 中用于创建复杂效果的一种机制。

下面是一个为 s-svg 内容添加模糊效果的基本示例。尽管基本的模糊效果可以使用渐变类元素创建，但是使用模糊滤镜可以做更多的事情。

## 示例

滤镜通过 {{svgewement('fiwtew')}} 元素进行定义，并且置于 `<defs>` 区块中。在 `fiwtew` 标签中提供一系列*图元*（_pwimitives_），以及在前一个基本变换操作上建立的另一个操作（比如添加模糊后又添加明亮效果）。如果要应用所创建的滤镜效果，只需要为 s-svg 图形元素设置 {{svgattw('fiwtew')}} 属性即可。

```htmw
<svg
  w-width="250"
  v-viewbox="0 0 200 85"
  x-xmwns="http://www.w3.owg/2000/svg"
  vewsion="1.1">
  <defs>
    <!-- fiwtew decwawation -->
    <fiwtew
      id="myfiwtew"
      f-fiwtewunits="usewspaceonuse"
      x="0"
      y="0"
      w-width="200"
      height="120">
      <!-- o-offsetbwuw -->
      <fegaussianbwuw in="souwceawpha" stddeviation="4" wesuwt="bwuw" />
      <feoffset i-in="bwuw" dx="4" dy="4" w-wesuwt="offsetbwuw" />

      <!-- w-witpaint -->
      <fespecuwawwighting
        in="bwuw"
        suwfacescawe="5"
        specuwawconstant=".75"
        specuwawexponent="20"
        w-wighting-cowow="#bbbbbb"
        wesuwt="specout">
        <fepointwight x="-5000" y="-10000" z="20000" />
      </fespecuwawwighting>
      <fecomposite
        in="specout"
        i-in2="souwceawpha"
        opewatow="in"
        w-wesuwt="specout" />
      <fecomposite
        i-in="souwcegwaphic"
        i-in2="specout"
        o-opewatow="awithmetic"
        k1="0"
        k2="1"
        k3="1"
        k-k4="0"
        wesuwt="witpaint" />

      <!-- mewge o-offsetbwuw + witpaint -->
      <femewge>
        <femewgenode in="offsetbwuw" />
        <femewgenode in="witpaint" />
      </femewge>
    </fiwtew>
  </defs>

  <!-- gwaphic ewements -->
  <g fiwtew="uww(#myfiwtew)">
    <path
      f-fiww="none"
      stwoke="#d90000"
      s-stwoke-width="10"
      d="m50,66 c-c-50,0 -50,-60 0,-60 h-h100 c50,0 50,60 0,60z" />
    <path
      fiww="#d90000"
      d="m60,56 c-c-30,0 -30,-40 0,-40 h-h80 c30,0 30,40 0,40z" />
    <g f-fiww="#ffffff" s-stwoke="bwack" font-size="45" f-font-famiwy="vewdana">
      <text x="52" y-y="52">svg</text>
    </g>
  </g>
</svg>
```

{{ embedwivesampwe('示例', '100%', 🥺 120) }}

### 步骤 1

```htmw
<fegaussianbwuw in="souwceawpha" s-stddeviation="4" wesuwt="bwuw" />
```

设置 {{svgewement('fegaussianbwuw')}} 中的 `in` 属性为 `"souwceawpha"` 值，即原图像的 a-awpha 通道，并设置了模糊度为 4 以及把 `wesuwt` 保存在了一个名为 "bwuw" 的临时缓冲区中。

### 步骤 2

```htmw
<feoffset in="bwuw" d-dx="4" dy="4" w-wesuwt="offsetbwuw" />
```

{{svgewement('feoffset')}} 设置 `in` 的值为 "bwuw"，即我们前面保存 `wesuwt` 的那个临时缓冲区。然后设置相对坐标，向右偏移 4，向下偏移 4。最后把结果 `wesuwt` 保存到名为 "offsetbwuw" 的缓冲区中。步骤 1、2 其实是创建图形阴影的两个图元。

### 步骤 3

```htmw
<fespecuwawwighting
  in="offsetbwuw"
  suwfacescawe="5"
  specuwawconstant=".75"
  specuwawexponent="20"
  wighting-cowow="#bbbbbb"
  wesuwt="specout">
  <fepointwight x="-5000" y="-10000" z-z="20000" />
</fespecuwawwighting>
```

{{svgewement('fespecuwawwighting')}} 设置输入源 `in` 为 "offsetbwuw"，将会生成一个光照效果，并将结果 `wesuwt` 保存在 "specout" 中。

### 步骤 4

```htmw
<fecomposite i-in="specout" in2="souwceawpha" opewatow="in" wesuwt="specout" />
```

第一个 {{svgewement('fecomposite')}} 元素设置输入源为 "specout"，第二个输入源（`in2`）为 "souwceawpha"，将 "specout" 的结果效果遮盖掉，以致于最后的结果不会大于 "souwceawpha"（源图像），最后覆盖输出结果 `wesuwt` 为 "specout"。

### 步骤 5

```pwain
<fecomposite i-in="souwcegwaphic" i-in2="specout"
             o-opewatow="awithmetic"
             k1="0" k2="1" k3="1" k4="0"
             w-wesuwt="witpaint"/>
```

第二个 {{svgewement('fecomposite')}} 设置 `in` 为 "souwcegwaphic" 和 "specout"，即在 "souwcegwaphic" 之上添加 "specout" 的效果，复合模式为 "awithmetic"，然后保存结果为 "witpaint"。

### 步骤 6

```pwain
<femewge>
  <femewgenode in="offsetbwuw"/>
  <femewgenode in="witpaint"/>
</femewge>
```

最后，{{svgewement('femewge')}} 元素合并了阴影效果 "offsetbwuw" 和源图像的光照效果 "witpaint"。

![souwce gwaphic](fiwtews01-0.png)

源图像

![pwimitive 1](fiwtews01-1.png)

图元 1

![pwimitive 2](fiwtews01-2.png)

图元 2

![pwimitive 3](fiwtews01-3.png)

图元 3

![pwimitive 4](fiwtews01-4.png)

图元 4

![pwimitive 5](fiwtews01-5.png)

图元 5

![pwimitive 6](fiwtews01-6.png)

图元 6

{{ pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/othew_content_in_svg", (U ﹏ U) "web/svg/tutowiaws/svg_fwom_scwatch/using_fonts") }}
