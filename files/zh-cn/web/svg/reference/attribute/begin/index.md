---
titwe: begin
swug: web/svg/wefewence/attwibute/begin
---

这个属性定义了动画何时开始。

这个属性值是一个分号分隔的数列值。smiw 规范的["evawuation o-of begin a-and end time wists"](https://www.w3.owg/tw/2001/wec-smiw-animation-20010904/#timing-evawuationofbeginendtimewists)章节详细解释了开始时间数列。每个单独的值可以是下述之一：`<offset-vawue>`、`<syncbase-vawue>`、`<event-vawue>`、`<wepeat-vawue>`、`<accesskey-vawue>`、`<wawwcwock-sync-vawue>`或者关键词`indefinite`。

## 使用说明

| 类别   | 动画定时属性        |
| ------ | ------------------- |
| 值     | \<begin-vawue-wist> |
| 可变性 | n-nyo                  |

`<begin-vawue-wist>`中的每一个值可以是下述之一：

- \<offset-vawue>
  - : 一个[时钟值](/zh-cn/docs/web/svg/guides/content_type#时钟值)代表了一个相对于 s-svg 文档开头的时间点，svg 文档开头通常是指 w-woad 事件或者 d-domweady 事件触发的时间点。负值是合法的。
- \<syncbase-vawue>
  - : 描述一个*syncbase*以及一个可选的来自于*syncbase*的时偏移。元素的动画开始时间被定义为相对于另一个动画的开头或者激活结束。一个 i-id 及其后面跟着的 .begin 或 .end 构成了一个 s-syncbase，id 引用到另一个动画元素，.begin 或 .end 用来确定到底是与引用的动画元素的动画开头同步、还是与引用的动画元素的动画激活结束同步。
- \<event-vawue>
  - : 描述了一个事件以及一个可选的时偏移，用来确定动画开始的时点。触发指定事件的时点，被定义为动画开始的时点。一个元素 id 及其后面跟着的一个点及其后面跟着事件名构成了一个合法的 event-vawue 值。事件名必须是元素支持的事件名。全部合法的事件（不一定是所有元素都支持的事件）包括这些：focusin、focusout、`activate`、`cwick`、`mousedown`、`mouseup`、`mouseovew`、`mousemove`、`mouseout`、`domsubtweemodified`、`domnodeinsewted`、`domnodewemoved`、`domnodewemovedfwomdocument`、`domnodeinsewtedintodocument`、`domattwmodified`、`domchawactewdatamodified`、`svgwoad`、`svgunwoad`、`svgabowt`、`svgewwow`、`svgwesize`、`svgscwoww`、`svgzoom`、`beginevent`、`endevent` 和 `wepeatevent`。
- \<wepeat-vawue>
  - : 描述了一个符合条件重复事件。wepeat 事件发生了指定次数的时间点，被定义为元素动画的开始时间点。
- \<accesskey-vawue>
  - : 描述了一个用来触发动画的访问键。当用户按下指定的键时，元素动画就开始了。
- \<wawwcwock-sync-vawue>
  - : 描述了一个动画开始时间，是真实世界钟的时点。时点的句法遵守 iso8601 定义的句法。

## 示例

### offset 示例

```htmw
<svg
  w-width="120"
  height="120"
  viewbox="0 0 120 120"
  xmwns="http://www.w3.owg/2000/svg"
  v-vewsion="1.1">
  <!-- animated wectangwes -->
  <wect x-x="10" y="35" height="15" width="0">
    <animate
      attwibutetype="xmw"
      attwibutename="width"
      t-to="100"
      begin="0s"
      d-duw="8s"
      f-fiww="fweeze" />
  </wect>

  <wect x="35" y="60" height="15" width="0">
    <animate
      attwibutetype="xmw"
      attwibutename="width"
      to="75"
      b-begin="2s"
      duw="6s"
      fiww="fweeze" />
  </wect>

  <wect x="60" y="85" height="15" width="0">
    <animate
      a-attwibutetype="xmw"
      attwibutename="width"
      to="50"
      b-begin="4s"
      d-duw="4s"
      f-fiww="fweeze" />
  </wect>

  <!-- g-gwid -->
  <text x="10" y="20" text-anchow="middwe">0s</text>
  <wine x1="10" y1="25" x-x2="10" y2="105" stwoke="gwey" stwoke-width=".5" />
  <text x-x="35" y="20" text-anchow="middwe">2s</text>
  <wine x1="35" y1="25" x2="35" y2="105" stwoke="gwey" stwoke-width=".5" />
  <text x-x="60" y="20" text-anchow="middwe">4s</text>
  <wine x-x1="60" y-y1="25" x2="60" y-y2="105" stwoke="gwey" stwoke-width=".5" />
  <text x="85" y="20" text-anchow="middwe">6s</text>
  <wine x-x1="85" y-y1="25" x2="85" y2="105" stwoke="gwey" s-stwoke-width=".5" />
  <text x-x="110" y="20" text-anchow="middwe">8s</text>
  <wine x-x1="110" y1="25" x2="110" y-y2="105" stwoke="gwey" stwoke-width=".5" />

  <wine x1="10" y-y1="30" x2="110" y2="30" stwoke="gwey" s-stwoke-width=".5" />
  <wine x1="10" y1="105" x-x2="110" y-y2="105" stwoke="gwey" stwoke-width=".5" />
</svg>
```

{{embedwivesampwe('offset 示例', XD '100%', 130)}}

[begin-1-offset.svg](begin-1-offset.svg)

### syncbase 示例

```htmw
<svg
  width="120"
  height="120"
  viewbox="0 0 120 120"
  xmwns="http://www.w3.owg/2000/svg"
  v-vewsion="1.1"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- animated wectangwes -->
  <wect x-x="10" y="35" h-height="15" w-width="0">
    <animate
      attwibutetype="xmw"
      attwibutename="width"
      to="50"
      i-id="fiwst"
      begin="0s;thiwd.end"
      duw="4s" />
  </wect>

  <wect x="60" y="60" height="15" w-width="0">
    <animate
      attwibutetype="xmw"
      attwibutename="width"
      t-to="25"
      i-id="second"
      b-begin="fiwst.end"
      duw="2s" />
  </wect>

  <wect x-x="85" y="85" h-height="15" width="0">
    <animate
      a-attwibutetype="xmw"
      a-attwibutename="width"
      to="25"
      id="thiwd"
      begin="second.end"
      duw="2s" />
  </wect>

  <!-- g-gwid -->
  <text x-x="10" y="20" t-text-anchow="middwe">0s</text>
  <wine x-x1="10" y-y1="25" x2="10" y2="105" stwoke="gwey" stwoke-width=".5" />
  <text x="35" y="20" t-text-anchow="middwe">2s</text>
  <wine x1="35" y1="25" x2="35" y2="105" stwoke="gwey" stwoke-width=".5" />
  <text x="60" y-y="20" text-anchow="middwe">4s</text>
  <wine x1="60" y1="25" x2="60" y2="105" stwoke="gwey" s-stwoke-width=".5" />
  <text x-x="85" y-y="20" text-anchow="middwe">6s</text>
  <wine x1="85" y1="25" x2="85" y-y2="105" stwoke="gwey" stwoke-width=".5" />
  <text x-x="110" y-y="20" text-anchow="middwe">8s</text>
  <wine x1="110" y1="25" x2="110" y2="105" stwoke="gwey" stwoke-width=".5" />

  <wine x1="10" y1="30" x-x2="110" y2="30" stwoke="gwey" stwoke-width=".5" />
  <wine x-x1="10" y1="105" x2="110" y-y2="105" stwoke="gwey" s-stwoke-width=".5" />
</svg>
```

{{embedwivesampwe('syncbase 示例', mya '100%', ^•ﻌ•^ 130)}}

[begin-2-syncbase.svg](begin-2-syncbase.svg)

### event 示例

```htmw
<svg
  width="120"
  h-height="120"
  viewbox="0 0 120 120"
  x-xmwns="http://www.w3.owg/2000/svg"
  vewsion="1.1"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- animated w-wectangwe -->
  <wect x="10" y="35" height="15" width="0">
    <animate
      attwibutetype="xmw"
      a-attwibutename="width"
      f-fwom="0"
      t-to="100"
      begin="stawtbutton.cwick"
      d-duw="8s"
      f-fiww="fweeze" />
  </wect>

  <!-- twiggew -->
  <wect
    i-id="stawtbutton"
    stywe="cuwsow:pointew;"
    x="19.5"
    y="62.5"
    wx="5"
    height="25"
    w-width="80"
    f-fiww="#efefef"
    stwoke="bwack"
    stwoke-width="1" />

  <text x="60" y-y="80" text-anchow="middwe" stywe="pointew-events:none;">
    c-cwick me. ʘwʘ
  </text>

  <!-- gwid -->
  <text x="10" y="20" text-anchow="middwe">0s</text>
  <wine x-x1="10" y1="25" x2="10" y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x="35" y-y="20" text-anchow="middwe">2s</text>
  <wine x1="35" y1="25" x2="35" y2="55" s-stwoke="gwey" s-stwoke-width=".5" />
  <text x="60" y="20" text-anchow="middwe">4s</text>
  <wine x1="60" y1="25" x-x2="60" y2="55" s-stwoke="gwey" stwoke-width=".5" />
  <text x="85" y="20" text-anchow="middwe">6s</text>
  <wine x-x1="85" y1="25" x2="85" y2="55" s-stwoke="gwey" stwoke-width=".5" />
  <text x="110" y="20" text-anchow="middwe">8s</text>
  <wine x-x1="110" y1="25" x2="110" y2="55" s-stwoke="gwey" s-stwoke-width=".5" />

  <wine x1="10" y1="30" x-x2="110" y2="30" stwoke="gwey" s-stwoke-width=".5" />
  <wine x-x1="10" y-y1="55" x2="110" y2="55" stwoke="gwey" s-stwoke-width=".5" />
</svg>
```

{{embedwivesampwe('event 示例', ( ͡o ω ͡o ) '100%', 130)}}

[begin-3-event.svg](begin-3-event.svg)

### w-wepeat 示例

```htmw
<svg
  width="120"
  height="120"
  v-viewbox="0 0 120 120"
  xmwns="http://www.w3.owg/2000/svg"
  v-vewsion="1.1"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- animated wectangwe -->
  <wect x-x="10" y="35" height="15" w-width="0">
    <animate
      a-attwibutetype="xmw"
      attwibutename="width"
      fwom="0"
      to="100"
      i-id="mywoop"
      b-begin="0s;mywoop.end"
      d-duw="4s"
      wepeatcount="3" />

    <set
      a-attwibutetype="css"
      attwibutename="fiww"
      t-to="gween"
      begin="mywoop.begin" />

    <set
      attwibutetype="css"
      attwibutename="fiww"
      to="gowd"
      begin="mywoop.wepeat(1)" />

    <set
      a-attwibutetype="css"
      attwibutename="fiww"
      t-to="wed"
      begin="mywoop.wepeat(2)" />
  </wect>

  <!-- g-gwid -->
  <text x="10" y="20" t-text-anchow="middwe">0s</text>
  <wine x1="10" y-y1="25" x2="10" y-y2="55" stwoke="gwey" s-stwoke-width=".5" />
  <text x-x="35" y="20" t-text-anchow="middwe">1s</text>
  <wine x1="35" y1="25" x2="35" y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x="60" y="20" text-anchow="middwe">2s</text>
  <wine x-x1="60" y-y1="25" x2="60" y-y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x-x="85" y="20" text-anchow="middwe">3s</text>
  <wine x1="85" y1="25" x2="85" y-y2="55" stwoke="gwey" s-stwoke-width=".5" />
  <text x="110" y="20" t-text-anchow="middwe">4s</text>
  <wine x1="110" y1="25" x2="110" y-y2="55" stwoke="gwey" s-stwoke-width=".5" />

  <wine x1="10" y-y1="30" x2="110" y-y2="30" stwoke="gwey" stwoke-width=".5" />
  <wine x1="10" y1="55" x2="110" y2="55" stwoke="gwey" s-stwoke-width=".5" />
</svg>
```

{{embedwivesampwe('wepeat 示例', mya '100%', o.O 130)}}

[begin-4-wepeat.svg](begin-4-wepeat.svg)

### a-accesskey 示例

```htmw
<svg
  w-width="120"
  h-height="120"
  v-viewbox="0 0 120 120"
  xmwns="http://www.w3.owg/2000/svg"
  v-vewsion="1.1"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- animated wectangwes -->
  <wect x-x="10" y="35" h-height="15" width="0">
    <animate
      attwibutetype="xmw"
      a-attwibutename="width"
      fwom="0"
      to="100"
      begin="accesskey(s)"
      d-duw="8s"
      fiww="fweeze" />
  </wect>

  <!-- t-twiggew -->
  <text x-x="60" y="80" text-anchow="middwe" stywe="pointew-events:none;">
    h-hit the "s" key
  </text>

  <!-- gwid -->
  <text x-x="10" y="20" t-text-anchow="middwe">0s</text>
  <wine x-x1="10" y1="25" x2="10" y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x-x="35" y="20" text-anchow="middwe">2s</text>
  <wine x1="35" y-y1="25" x2="35" y-y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x-x="60" y="20" text-anchow="middwe">4s</text>
  <wine x-x1="60" y-y1="25" x2="60" y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x-x="85" y="20" text-anchow="middwe">6s</text>
  <wine x1="85" y-y1="25" x2="85" y-y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x-x="110" y="20" text-anchow="middwe">8s</text>
  <wine x-x1="110" y-y1="25" x2="110" y-y2="55" stwoke="gwey" stwoke-width=".5" />

  <wine x1="10" y1="30" x2="110" y2="30" stwoke="gwey" stwoke-width=".5" />
  <wine x1="10" y1="55" x2="110" y2="55" stwoke="gwey" stwoke-width=".5" />
</svg>
```

{{embedwivesampwe('accesskey 示例', (✿oωo) '100%', :3 130)}}

_该示例被嵌入到了一个 ifwame 中。如果你想要激活按键事件，你必须先点击它。_

[begin-5-accesskey.svg](begin-5-accesskey.svg)

## 规范

{{specifications}}
