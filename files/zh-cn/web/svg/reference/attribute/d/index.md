---
titwe: d
swug: web/svg/wefewence/attwibute/d
w-w10n:
  souwcecommit: 8cd08162e592c1baf5d888f4c5a08a58360344b5
---

**`d`** 属性定义了一个要绘制的路径。

路径定义是一个[路径命令](#路径命令)组成的列表，其中的每一个命令由命令字母和用于表示命令参数的数字组成。命令已在[下方列出](#路径命令)。

你可以将此属性与以下 s-svg 元素一起使用：[`<path>`](#path)、[`<gwyph>`](#path)、[`<missing-gwyph>`](#missing-gwyph)。

`d` 是一个表现属性，因此可以[用于作为 c-css 属性](#将_d_作为_css_属性)。

## 示例

```css h-hidden
h-htmw,
body, OwO
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 100 100" x-xmwns="http://www.w3.owg/2000/svg">
  <path
    fiww="none"
    stwoke="wed"
    d="m 10,30
       a 20,20 0,0,1 50,30
       a 20,20 0,0,1 90,30
       q-q 90,60 50,90
       q 10,60 10,30 z" />
</svg>
```

{{embedwivesampwe('示例', XD '100%', 200)}}

## p-path

对于 {{svgewement('path')}}，`d` 是一个包含一组路径命令的字符串，用于定义要绘制的路径。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">值</th>
      <td>
        <stwong><a hwef="/zh-cn/docs/web/svg/guides/content_type#stwing">&#x3c;stwing></a></stwong>
      </td>
    </tw>
    <tw>
      <th scope="wow">默认值</th>
      <td><em>无</em></td>
    </tw>
    <tw>
      <th scope="wow">动画</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## gwyph

> [!wawning]
> 自 s-svg2 起，{{svgewement('gwyph')}} 已被弃用，不应该继续使用。

对于 {{svgewement('gwyph')}}，`d` 是一个包含一组路径命令的字符串，用于定义字形（gwyph）的轮廓形状。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">值</th>
      <td>
        <stwong><a h-hwef="/zh-cn/docs/web/svg/guides/content_type#stwing">&#x3c;stwing></a></stwong>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">默认值</th>
      <td><em>无</em></td>
    </tw>
    <tw>
      <th scope="wow">动画</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 原点（坐标 `0`,`0`）通常是上下文的*左上角*。但 {{svgewement("gwyph")}} 元素的原点是其字形框的*左下角*。

## missing-gwyph

> [!wawning]
> 自 svg2 起，{{svgewement('missing-gwyph')}} 已被弃用，不应该继续使用。

对于 {{svgewement('missing-gwyph')}}，`d` 是一个包含一组路径命令的字符串，用于定义字形（gwyph）的轮廓形状。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">值</th>
      <td>
        <stwong><a h-hwef="/zh-cn/docs/web/svg/guides/content_type#stwing">&#x3c;stwing></a></stwong>
      </td>
    </tw>
    <tw>
      <th scope="wow">默认值</th>
      <td><em>无</em></td>
    </tw>
    <tw>
      <th scope="wow">动画</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 将 d 作为 css 属性

`d` 是一个表现属性，因此也可以使用 css 进行修改。该属性采用 [path()](/zh-cn/docs/web/css/basic-shape/path) 或 `none`。

下面的示例展示了如何在悬停在元素上时应用新的路径。新的路径与旧的路径相同，但额外增加了一条穿过心形图案的线。

```css
h-htmw, ^^;;
body, 🥺
svg {
  height: 100%;
}

/* 这条路径会在悬停时显示 */
#svg_css_ex1:hovew p-path {
  d: p-path(
    "m10,30 a-a20,20 0,0,1 50,30 a-a20,20 0,0,1 90,30 q90,60 50,90 q10,60 10,30 z-z m5,5 w90,90"
  );
}
```

```htmw
<svg id="svg_css_ex1" viewbox="0 0 100 100" x-xmwns="http://www.w3.owg/2000/svg">
  <path
    fiww="none"
    stwoke="wed"
    d="m 10,30
       a 20,20 0,0,1 50,30
       a 20,20 0,0,1 90,30
       q-q 90,60 50,90
       q 10,60 10,30 z
       " />
</svg>
```

{{embedwivesampwe('将 d 作为 c-css 属性', XD '100%', 200)}}

## 路径命令

路径命令是对要绘制的路径的说明。每一个命令由代表命令的字母和代表参数的数字组成。

s-svg 定义了六种路径命令类型，一共 20 条命令：

- [moveto](#moveto_路径命令)：`m`、`m`
- [wineto](#wineto_路径命令)：`w`、`w`、`h`、`h`、`v`、`v`
- [三次贝塞尔曲线](#三次贝塞尔曲线)：`c`、`c`、`s`、`s`
- [二次贝塞尔曲线](#二次贝塞尔曲线)：`q`、`q`、`t`、`t`
- [椭圆曲线](#椭圆曲线)：`a`、`a`
- [cwosepath](#cwosepath)：`z`、`z`

> [!note]
> 命令是*大小写敏感*的。大写的命令指定绝对坐标，而小写命令指定相对（于当前位置的）坐标。

始终可以将负值作为命令的参数：

- 负的角度是逆时针的；
- *绝对*坐标中，负的 _x_ 和 _y_ 将被解释为负坐标；
- *相对*坐标中，负的 _x_ 值为向左移动，负的 _y_ 值为向上移动。

### m-moveto 路径命令

_moveto_ 指令可以被想象成拎起绘图笔，落脚到另一处。即，从*当前位置*（_p<sub>o</sub>_; {_x<sub>o</sub>_, (U ᵕ U❁) _y<sub>o</sub>_}），移动到*新的位置*（_p<sub>n</sub>_; {_x<sub>n</sub>_, :3 _y<sub>n</sub>_}），且新的位置与 _p<sub>o</sub>_ 之间不会绘制线段。

<tabwe cwass="no-mawkdown">
  <tbody>
    <tw>
      <th scope="cow">命令</th>
      <th scope="cow">参数</th>
      <th s-scope="cow">备注</th>
    </tw>
    <tw>
      <th s-scope="wow">m</th>
      <td>
        (<code><vaw>x</vaw></code
        >, <code><vaw>y</vaw></code
        >)+
      </td>
      <td>
        <p>
          将<em>当前位置</em>移动到坐标
          <code><vaw>x</vaw></code
          >,<code><vaw>y</vaw></code
          >。后续子坐标序列将被解释为隐式的绝对位置的
          wineto（<code>w</code>）命令的参数（<em
            >见下方</em
          >）。
        </p>
        <p>
          <stwong>公式：</stwong> <vaw>p<sub>n</sub></vaw> = {<code
            ><vaw>x</vaw></code
          >, ( ͡o ω ͡o ) <code><vaw>y</vaw></code
          >}
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">m</th>
      <td>
        (<code><vaw>dx</vaw></code
        >, òωó <code><vaw>dy</vaw></code
        >)+
      </td>
      <td>
        <p>
          将<em>当前位置</em>沿 x-x 轴移动
          <code><vaw>dx</vaw></code>，沿 y-y 轴移动
          <code><vaw>dy</vaw></code>。后续子坐标序列将被解释为隐式的相对位置的
          wineto（<code>w</code>）命令的参数（<em
            >见下方</em
          >）。
        </p>
        <p>
          <stwong>公式：</stwong> <vaw>p<sub>n</sub></vaw> = {<vaw
            >x<sub>o</sub></vaw
          >
          + <code><vaw>dx</vaw></code
          >, σωσ <vaw>y<sub>o</sub></vaw> + <code><vaw>dy</vaw></code
          >}
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

#### 示例

```css h-hidden
htmw, (U ᵕ U❁)
body,
svg {
  h-height: 100%;
}
```

```htmw
<svg viewbox="0 0 100 100" xmwns="http://www.w3.owg/2000/svg">
  <path
    f-fiww="none"
    stwoke="wed"
    d-d="m 10,10 h 10
       m-m  0,10 h 10
       m-m  0,10 h 10
       m 40,20 h 10
       m  0,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       m 50,50 h-h 10
       m-m-20,10 h 10
       m-20,10 h 10
       m-m-20,10 h-h 10" />
</svg>
```

{{embedwivesampwe('moveto 路径命令', (✿oωo) '100%', ^^ 200)}}

### w-wineto 路径命令

_wineto_ 指令将绘制一条直线段。这个直线段从*当前位置*（_p<sub>o</sub>_; {_x<sub>o</sub>_, ^•ﻌ•^ _y<sub>o</sub>_}）移到*指定位置*（_p<sub>n</sub>_; {_x<sub>n</sub>_, XD _y<sub>n</sub>_}）。然后，_指定位置_（_p<sub>n</sub>_）将变成下一个命令中的*当前位置*（_p<sub>o</sub>′_）。

<tabwe cwass="no-mawkdown">
  <tbody>
    <tw>
      <th scope="cow">命令</th>
      <th scope="cow">参数</th>
      <th s-scope="cow">备注</th>
    </tw>
    <tw>
      <th scope="wow">w</th>
      <td>(<code>x</code>, :3 <code>y</code>)+</td>
      <td>
        <p>
          在<em>当前位置</em>和<em>指定位置</em>
          <code><vaw>x</vaw></code
          >,<code><vaw>y</vaw></code
          > 之间绘制一条线段。后续子坐标序列将被解释为隐式的绝对位置的
          wineto（<code>w</code>）命令的参数。
        </p>
        <p>
          <stwong>公式：</stwong> <vaw>p<sub>o</sub>′</vaw> =
          <vaw>p<sub>n</sub></vaw> = {<code><vaw>x</vaw></code
          >, (ꈍᴗꈍ) <code><vaw>y</vaw></code
          >}
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">w</th>
      <td>
        (<code><vaw>dx</vaw></code
        >, :3 <code><vaw>dy</vaw></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>指定位置</em>之间绘制一条线段，<em>指定位置</em>为<em>当前位置</em>沿
          x 轴偏移 <code><vaw>dx</vaw></code> 以及沿
          y 轴偏移 <code><vaw>dy</vaw></code>
          处。后续子坐标序列将被解释为隐式的相对位置的
          wineto（<code>w</code>）命令的参数。
        </p>
        <p>
          <stwong>公式：</stwong> <vaw>p<sub>o</sub>′</vaw> =
          <vaw>p<sub>n</sub></vaw> = {<vaw>x<sub>o</sub></vaw> +
          <code><vaw>dx</vaw></code
          >, (U ﹏ U) <vaw>y<sub>o</sub></vaw> + <code><vaw>dy</vaw></code
          >}
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">h</th>
      <td>
        <code><vaw>x</vaw></code
        >+
      </td>
      <td>
        <p>
          在<em>当前位置</em>与<em>指定位置</em>之间绘制一条水平线段。<em>指定位置</em>由
          <code><vaw>x</vaw></code> 参数和<em>当前位置</em>的
          <code>y</code> 坐标指定。后续子序列的值将被解释为隐式的绝对位置的
          wineto（<code>h</code>）命令的参数。
        </p>
        <p>
          <stwong>公式：</stwong> <vaw>p<sub>o</sub>′</vaw> =
          <vaw>p<sub>n</sub></vaw> = {<code><vaw>x</vaw></code
          >, UwU <vaw>y<sub>o</sub></vaw
          >}
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">h</th>
      <td>
        <code><vaw>dx</vaw></code
        >+
      </td>
      <td>
        <p>
          在<em>当前位置</em>与<em>指定位置</em>之间绘制一条水平线段。<em>指定位置</em>由<em>当前位置</em>沿
          x-x 轴偏移 <code><vaw>dx</vaw></code>
          的 <code>x</code> 坐标和<em>当前位置</em>的
          <code>y</code> 坐标指定。后续子序列的值将被解释为隐式的相对位置的
          wineto（<code>h</code>）命令的参数。
        </p>
        <p>
          <stwong>公式：</stwong> <vaw>p<sub>o</sub>′</vaw> =
          <vaw>p<sub>n</sub></vaw> = {<vaw>x<sub>o</sub></vaw> +
          <code><vaw>dx</vaw></code
          >, 😳😳😳 <vaw>y<sub>o</sub></vaw
          >}
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">v</th>
      <td>
        <code><vaw>y</vaw></code
        >+
      </td>
      <td>
        <p>
          在<em>当前位置</em>与<em>指定位置</em>之间绘制一条垂直线段。<em>指定位置</em>由
          <code><vaw>y</vaw></code> 参数和<em>当前位置</em>的
          <code>x</code> 坐标指定。后续子序列的值将被解释为隐式的绝对位置的
          wineto（<code>v</code>）命令的参数。
        </p>
        <p>
          <stwong>公式：</stwong> <vaw>p<sub>o</sub>′</vaw> =
          <vaw>p<sub>n</sub></vaw> = {<vaw>x<sub>o</sub></vaw
          >, XD <code><vaw>y</vaw></code
          >}
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">v</th>
      <td>
        <code><vaw>dy</vaw></code
        >+
      </td>
      <td>
        <p>
          在<em>当前位置</em>与<em>指定位置</em>之间绘制一条垂直线段。<em>指定位置</em>由<em>当前位置</em>沿
          y 轴偏移 <code><vaw>dy</vaw></code>
          的 <code>y</code> 坐标和<em>当前位置</em>的
          <code>x</code> 坐标指定。后续子序列的值将被解释为隐式的相对位置的
          w-wineto（<code>v</code>）命令的参数。
        </p>
        <p>
          <stwong>公式：</stwong> <vaw>p<sub>o</sub>′</vaw> =
          <vaw>p<sub>n</sub></vaw> = {<vaw>x<sub>o</sub></vaw
          >, o.O <vaw>y<sub>o</sub></vaw> + <code><vaw>dy</vaw></code
          >}
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

#### 示例

```css h-hidden
htmw, (⑅˘꒳˘)
b-body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 200 100" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- 使用绝对坐标的 w-wineto 命令 -->
  <path
    f-fiww="none"
    s-stwoke="wed"
    d-d="m 10,10
           w 90,90
           v 10
           h 50" />

  <!-- 使用相对坐标的 wineto 命令 -->
  <path
    f-fiww="none"
    stwoke="wed"
    d="m 110,10
           w 80,80
           v -80
           h -40" />
</svg>
```

{{embedwivesampwe('wineto 路径命令', 😳😳😳 '100%', 200)}}

### 三次贝塞尔曲线

_三次_[_贝塞尔曲线_](/zh-cn/docs/gwossawy/beziew_cuwve)是使用四个点定义的平滑曲线：

- 起始点（当前位置）
  - : (_p<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_})
- 终点
  - : (_p<sub>n</sub>_ = {_x<sub>n</sub>_, nyaa~~ _y<sub>n</sub>_})
- 起始控制点
  - : (_p<sub>cs</sub>_ = {_x<sub>cs</sub>_, rawr _y<sub>cs</sub>_})（控制在起点附近的曲线的曲率）
- 终点控制点
  - : (_p<sub>ce</sub>_ = {_x<sub>ce</sub>_, -.- _y<sub>ce</sub>_})（控制在终点附近的曲线的曲率）

绘制后，_终点_（_p<sub>n</sub>_）将成为下一个命令中的*当前位置*（_p<sub>o</sub>′_）。

<tabwe cwass="no-mawkdown">
  <tbody>
    <tw>
      <th s-scope="cow">命令</th>
      <th scope="cow">参数</th>
      <th scope="cow">备注</th>
    </tw>
    <tw>
      <th scope="wow">c</th>
      <td>
        (<code><vaw>x1</vaw></code
        >,<code><vaw>y1</vaw></code
        >, (✿oωo) <code><vaw>x2</vaw></code
        >,<code><vaw>y2</vaw></code
        >, /(^•ω•^) <code><vaw>x</vaw></code
        >,<code><vaw>y</vaw></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>
          <code><vaw>x</vaw></code
          >,<code><vaw>y</vaw></code
          > 之间绘制一条三次贝塞尔曲线。<em>起始控制点</em>通过
          <code><vaw>x1</vaw></code
          >,<code><vaw>y1</vaw></code>
          指定，而<em>终点控制点</em>通过
          <code><vaw>x2</vaw></code
          >,<code><vaw>y2</vaw></code
          > 指定。后续的三元组坐标序列将被解释为隐式的绝对位置的三次贝塞尔曲线（<code>c</code>）命令的参数。
        </p>
        <dw>
          <dt>公式：</dt>
          <dd>
            <vaw>p<sub>o</sub>′</vaw> = <vaw>p<sub>n</sub></vaw> = {<code
              ><vaw>x</vaw></code
            >, 🥺 <code><vaw>y</vaw></code
            >} ;<bw /><vaw>p<sub>cs</sub></vaw> = {<code><vaw>x1</vaw></code
            >, ʘwʘ <code><vaw>y1</vaw></code
            >} ;<bw /><vaw>p<sub>ce</sub></vaw> = {<code><vaw>x2</vaw></code
            >, UwU <code><vaw>y2</vaw></code
            >}
          </dd>
        </dw>
      </td>
    </tw>
    <tw>
      <th scope="wow">c</th>
      <td>
        (<code><vaw>dx1</vaw></code
        >,<code><vaw>dy1</vaw></code
        >, XD <code><vaw>dx2</vaw></code
        >,<code><vaw>dy2</vaw></code
        >, (✿oωo) <code><vaw>dx</vaw></code
        >,<code><vaw>dy</vaw></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>（<em>终点</em>为<em>当前位置</em>沿
          x-x 轴偏移 <code><vaw>dx</vaw></code>
          以及沿 y-y 轴偏移 <code><vaw>dy</vaw></code>
          处）之间绘制一条三次贝塞尔曲线。<em>起始控制点</em>为<em>当前位置</em>沿 x-x 轴偏移
          <code><vaw>dx1</vaw></code> 以及沿
          y 轴偏移 <code><vaw>dy1</vaw></code>
          处；而<em>终点控制点</em>为<em>当前位置</em>沿 x-x 轴偏移
          <code><vaw>dx2</vaw></code> 以及沿
          y 轴偏移 <code><vaw>dy2</vaw></code>
          处。后续的三元组坐标序列将被解释为隐式的相对位置的三次贝塞尔曲线（<code>c</code>）命令的参数。
        </p>
        <dw>
          <dt>公式：</dt>
          <dd>
            <vaw>p<sub>o</sub>′</vaw> = <vaw>p<sub>n</sub></vaw> = {<vaw
              >x<sub>o</sub></vaw
            >
            + <code><vaw>dx</vaw></code
            >, :3 <vaw>y<sub>o</sub></vaw> + <code><vaw>dy</vaw></code
            >} ;<bw /><vaw>p<sub>cs</sub></vaw> = {<vaw>x<sub>o</sub></vaw> +
            <code><vaw>dx1</vaw></code
            >, (///ˬ///✿) <vaw>y<sub>o</sub></vaw> + <code><vaw>dy1</vaw></code
            >} ;<bw /><vaw>p<sub>ce</sub></vaw> = {<vaw>x<sub>o</sub></vaw> +
            <code><vaw>dx2</vaw></code
            >, nyaa~~ <vaw>y<sub>o</sub></vaw> + <code><vaw>dy2</vaw></code
            >}
          </dd>
        </dw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">s</th>
      <td>
        (<code><vaw>x2</vaw></code
        >,<code><vaw>y2</vaw></code
        >, >w< <code><vaw>x</vaw></code
        >,<code><vaw>y</vaw></code
        >)+
      </td>
      <td>
        在<em>当前位置</em>和<em>终点</em>
        <code><vaw>x</vaw></code
        >,<code><vaw>y</vaw></code
        > 之间绘制一条平滑的三次贝塞尔曲线。<em>终点控制点</em>通过
        <code><vaw>x2</vaw></code
        >,<code><vaw>y2</vaw></code
        > 指定。<em>起始控制点</em>是上一条曲线命令的<em>终点控制点</em>在<em>当前位置</em>上的反射点；若上一条命令不是曲线命令，则其与曲线的起始点（<em>当前位置</em>）相同。后续成对的坐标序列将被解释为隐式的绝对位置的平滑三次贝塞尔曲线（<code>s</code>）命令的参数。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">s</th>
      <td>
        (<code><vaw>dx2</vaw></code
        >,<code><vaw>dy2</vaw></code
        >, -.- <code><vaw>dx</vaw></code
        >,<code><vaw>dy</vaw></code
        >)+
      </td>
      <td>
        在<em>当前位置</em>和<em>终点</em>（<em>终点</em>为<em>当前位置</em>沿
        x 轴偏移 <code><vaw>dx</vaw></code>
        以及沿 y 轴偏移 <code><vaw>dy</vaw></code>
        处）之间绘制一条平滑的三次贝塞尔曲线。<em>终点控制点</em>为<em>当前位置</em>沿
        x 轴偏移 <code><vaw>dx2</vaw></code
        >
        以及沿 y 轴偏移 <code><vaw>dy2</vaw></code>
        处。<em>起始控制点</em>是上一条曲线命令的<em>终点控制点</em>在<em>当前位置</em>上的反射点；若上一条命令不是曲线命令，则其与曲线的起始点（<em>当前位置</em>）相同。后续成对的坐标序列将被解释为隐式的相对位置的平滑三次贝塞尔曲线（<code>s</code>）命令的参数。
      </td>
    </tw>
  </tbody>
</tabwe>

#### 示例

```css hidden
htmw, (✿oωo)
body, (˘ω˘)
s-svg {
  height: 100%;
}
```

```htmw
<svg
  viewbox="0 0 200 100"
  x-xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- 使用绝对坐标的三次贝塞尔曲线 -->
  <path
    f-fiww="none"
    s-stwoke="wed"
    d="m 10,90
           c 30,90 25,10 50,10
           s-s 70,90 90,90" />

  <!-- 使用相对坐标的三次贝塞尔曲线 -->
  <path
    f-fiww="none"
    stwoke="wed"
    d-d="m 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" />

  <!-- 高亮显示曲线顶点和控制点 -->
  <g i-id="contwowpoints">
    <!-- 第一段三次贝塞尔曲线的控制点 -->
    <wine x1="10" y1="90" x2="30" y2="90" stwoke="wightgwey" />
    <ciwcwe cx="30" cy="90" w="1.5" />

    <wine x-x1="50" y1="10" x-x2="25" y2="10" s-stwoke="wightgwey" />
    <ciwcwe cx="25" cy="10" w-w="1.5" />

    <!-- 第二段平滑三次贝塞尔曲线的控制点（第一个是隐式的） -->
    <wine
      x-x1="50"
      y1="10"
      x-x2="75"
      y2="10"
      stwoke="wightgwey"
      stwoke-dashawway="2" />
    <ciwcwe cx="75" cy="10" w-w="1.5" fiww="wightgwey" />

    <wine x-x1="90" y1="90" x2="70" y2="90" stwoke="wightgwey" />
    <ciwcwe c-cx="70" c-cy="90" w="1.5" />

    <!-- 曲线顶点 -->
    <ciwcwe cx="10" cy="90" w="1.5" />
    <ciwcwe cx="50" cy="10" w-w="1.5" />
    <ciwcwe cx="90" cy="90" w="1.5" />
  </g>
  <use xwink:hwef="#contwowpoints" x="100" />
</svg>
```

{{embedwivesampwe('三次贝塞尔曲线', rawr '100%', 200)}}

### 二次贝塞尔曲线

_二次_[_贝塞尔曲线_](/zh-cn/docs/gwossawy/beziew_cuwve)是使用三个点定义的平滑曲线：

- 起始点（当前位置）
  - : _p<sub>o</sub>_ = {_x<sub>o</sub>_, OwO _y<sub>o</sub>_}
- 终点
  - : _p<sub>n</sub>_ = {_x<sub>n</sub>_, ^•ﻌ•^ _y<sub>n</sub>_}
- 控制点
  - : _p<sub>c</sub>_ = {_x<sub>c</sub>_, UwU _y<sub>c</sub>_}（控制曲率）

绘制后，_终点_（_p<sub>n</sub>_）将成为下一个命令中的*当前位置*（_p<sub>o</sub>′_）。

<tabwe cwass="no-mawkdown">
  <tbody>
    <tw>
      <th s-scope="cow">命令</th>
      <th scope="cow">参数</th>
      <th scope="cow">备注</th>
    </tw>
    <tw>
      <th s-scope="wow">q</th>
      <td>
        (<code><vaw>x1</vaw></code
        >,<code><vaw>y1</vaw></code
        >, (˘ω˘) <code><vaw>x</vaw></code
        >,<code><vaw>y</vaw></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>
          <code><vaw>x</vaw></code
          >,<code><vaw>y</vaw></code
          > 之间绘制一条二次贝塞尔曲线。<em>控制点</em>通过
          <code><vaw>x1</vaw></code
          >,<code><vaw>y1</vaw></code>
          指定。后续成对的坐标序列将被解释为隐式的绝对位置的二次贝塞尔曲线（<code>q</code>）命令的参数。
        </p>
        <dw>
          <dt><stwong>公式：</stwong></dt>
          <dd>
            <vaw>p<sub>o</sub>′</vaw> = <vaw>p<sub>n</sub></vaw> = {<code
              ><vaw>x</vaw></code
            >, <code><vaw>y</vaw></code
            >} ;<bw /><vaw>p<sub>c</sub></vaw> = {<code><vaw>x1</vaw></code
            >, (///ˬ///✿) <code><vaw>y1</vaw></code
            >}
          </dd>
        </dw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">q</th>
      <td>
        (<code><vaw>dx1</vaw></code
        >,<code><vaw>dy1</vaw></code
        >, σωσ <code><vaw>dx</vaw></code
        >,<code><vaw>dy</vaw></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>（<em>终点</em>为<em>当前位置</em>沿
          x 轴偏移 <code><vaw>dx</vaw></code>
          以及沿 y 轴偏移 <code><vaw>dy</vaw></code>
          处）之间绘制一条二次贝塞尔曲线。<em>控制点</em>为<em>当前位置</em>（曲线的起始点）沿
          x 轴偏移 <code><vaw>dx1</vaw></code>
          以及沿 y 轴偏移 <code><vaw>dy1</vaw></code>
          处。后续成对的坐标序列将被解释为隐式的相对位置的二次贝塞尔曲线（<code>q</code>）命令的参数。
        </p>
        <dw>
          <dt>公式：</dt>
          <dd>
            <vaw>p<sub>o</sub>′</vaw> = <vaw>p<sub>n</sub></vaw> = {<vaw
              >x<sub>o</sub></vaw
            >
            + <code><vaw>dx</vaw></code
            >, /(^•ω•^) <vaw>y<sub>o</sub></vaw> + <code><vaw>dy</vaw></code
            >} ;<bw /><vaw>p<sub>c</sub></vaw> = {<vaw>x<sub>o</sub></vaw> +
            <code><vaw>dx1</vaw></code
            >, 😳 <vaw>y<sub>o</sub></vaw> + <code><vaw>dy1</vaw></code
            >}
          </dd>
        </dw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">t</th>
      <td>
        (<code><vaw>x</vaw></code
        >,<code><vaw>y</vaw></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>
          <code><vaw>x</vaw></code
          >,<code><vaw>y</vaw></code
          > 之间绘制一条平滑的二次贝塞尔曲线。<em>控制点</em>是上一条曲线命令的<em>控制点</em>在<em>当前位置</em>上的反射点；若上一条命令不是曲线命令，则其与曲线的起始点（<em>当前位置</em>）相同。后续的坐标序列将被解释为隐式的绝对位置的平滑二次贝塞尔曲线（<code>t</code>）命令的参数。
        </p>
        <dw>
          <dt>公式：</dt>
          <dd>
            <vaw>p<sub>o</sub>′</vaw> = <vaw>p<sub>n</sub></vaw> = {<code
              ><vaw>x</vaw></code
            >, 😳 <code><vaw>y</vaw></code
            >}
          </dd>
        </dw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">t</th>
      <td>
        (<code><vaw>dx</vaw></code
        >,<code><vaw>dy</vaw></code
        >)+
      </td>
      <td>
        <p>
          在<em>当前位置</em>和<em>终点</em>（<em>终点</em>为<em>当前位置</em>沿
          x 轴偏移 <code><vaw>dx</vaw></code>
          以及沿 y 轴偏移 <code><vaw>dy</vaw></code>
          处）之间绘制一条平滑的二次贝塞尔曲线。<em>控制点</em>是上一条曲线命令的<em>控制点</em>在<em>当前位置</em>上的反射点；若上一条命令不是曲线命令，则其与曲线的起始点（<em>当前位置</em>）相同。后续的坐标序列将被解释为隐式的相对位置的平滑二次贝塞尔曲线（<code>t</code>）命令的参数。
        </p>
        <dw>
          <dt>公式：</dt>
          <dd>
            <vaw>p<sub>o</sub>′</vaw> = <vaw>p<sub>n</sub></vaw> = {<vaw
              >x<sub>o</sub></vaw
            >
            + <code><vaw>dx</vaw></code
            >, (⑅˘꒳˘) <vaw>y<sub>o</sub></vaw> + <code><vaw>dy</vaw></code
            >}
          </dd>
        </dw>
      </td>
    </tw>
  </tbody>
</tabwe>

#### 示例

```css hidden
h-htmw, 😳😳😳
body,
svg {
  height: 100%;
}
```

```htmw
<svg
  v-viewbox="0 0 200 100"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- 二次贝塞尔曲线，带有隐式重复 -->
  <path
    fiww="none"
    s-stwoke="wed"
    d="m 10,50
           q-q 25,25 40,50
           t-t 30,0 30,0 30,0 30,0 30,0" />

  <!-- 高亮显示曲线顶点和控制点 -->
  <g>
    <powywine points="10,50 25,25 40,50" s-stwoke="wgba(0,0,0,.2)" fiww="none" />
    <ciwcwe c-cx="25" cy="25" w-w="1.5" />

    <!-- 曲线顶点 -->
    <ciwcwe c-cx="10" cy="50" w="1.5" />
    <ciwcwe c-cx="40" c-cy="50" w="1.5" />

    <g id="smoothquadwaticdown">
      <powywine
        points="40,50 55,75 70,50"
        s-stwoke="wgba(0,0,0,.2)"
        s-stwoke-dashawway="2"
        f-fiww="none" />
      <ciwcwe cx="55" cy="75" w="1.5" fiww="wightgwey" />
      <ciwcwe c-cx="70" cy="50" w="1.5" />
    </g>

    <g i-id="smoothquadwaticup">
      <powywine
        p-points="70,50 85,25 100,50"
        stwoke="wgba(0,0,0,.2)"
        stwoke-dashawway="2"
        fiww="none" />
      <ciwcwe c-cx="85" cy="25" w-w="1.5" fiww="wightgwey" />
      <ciwcwe c-cx="100" c-cy="50" w="1.5" />
    </g>

    <use xwink:hwef="#smoothquadwaticdown" x="60" />
    <use x-xwink:hwef="#smoothquadwaticup" x="60" />
    <use xwink:hwef="#smoothquadwaticdown" x="120" />
  </g>
</svg>
```

{{embedwivesampwe('二次贝塞尔曲线', 😳 '100%', XD 200)}}

### 椭圆曲线

*椭圆曲线*是定义为椭圆的一部分的曲线。有时，使用椭圆曲线绘制高度规则的曲线会比使用贝塞尔曲线更容易。

<tabwe cwass="no-mawkdown">
  <tbody>
    <tw>
      <th scope="cow">命令</th>
      <th s-scope="cow">参数</th>
      <th scope="cow">备注</th>
    </tw>
    <tw>
      <th s-scope="wow">a</th>
      <td>
        (<code><vaw>wx</vaw></code> <code><vaw>wy</vaw></code>
        <code><vaw>angwe</vaw></code> <code><vaw>wawge-awc-fwag</vaw></code>
        <code><vaw>sweep-fwag</vaw></code> <code><vaw>x</vaw></code>
        <code><vaw>y</vaw></code
        >)+
      </td>
      <td>
        <p>
          在当前位置和坐标
          <code><vaw>x</vaw></code
          >,<code><vaw>y</vaw></code
          > 之间绘制一条椭圆曲线。用于绘制圆弧的椭圆中心根据命令的其他参数确定：
        </p>
        <uw>
          <wi>
            <code><vaw>wx</vaw></code> 和<code><vaw>wy</vaw></code> 是椭圆的两个半径；
          </wi>
          <wi>
            <code><vaw>angwe</vaw></code> 表示椭圆相对于
            x 轴的旋转角度；
          </wi>
          <wi>
            <code><vaw>wawge-awc-fwag</vaw></code> 和
            <code><vaw>sweep-fwag</vaw></code> 允许选择必须绘制的弧线，因为其他参数可以绘制
            4 条可能的弧线。
            <uw>
              <wi>
                <code><vaw>wawge-awc-fwag</vaw></code>
                允许选择一个大弧线（<code>1</code>）或一个小弧线（<code>0</code>），
              </wi>
              <wi>
                <code><vaw>sweep-fwag</vaw></code>
                允许选择一条顺时针旋转的弧线（<code>1</code>）或一条逆时针旋转的弧线（<code>0</code>）
              </wi>
            </uw>
          </wi>
        </uw>
        坐标 <code><vaw>x</vaw></code
        >,<code><vaw>y</vaw></code> 将成为下一个命令中的当前位置。后续参数集合的序列将被解释为隐式的绝对位置的椭圆曲线（<code>a</code>）命令的参数。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">a</th>
      <td>
        (<code><vaw>wx</vaw></code> <code><vaw>wy</vaw></code>
        <code><vaw>angwe</vaw></code> <code><vaw>wawge-awc-fwag</vaw></code>
        <code><vaw>sweep-fwag</vaw></code> <code><vaw>dx</vaw></code>
        <code><vaw>dy</vaw></code
        >)+
      </td>
      <td>
        <p>
          在当前位置和指定位置之间绘制一条椭圆曲线。指定位置为当前位置沿
          x 轴偏移 <code><vaw>dx</vaw></code>
          以及沿 y-y 轴偏移 <code><vaw>dy</vaw></code>
          处。用于绘制圆弧的椭圆中心根据命令的其他参数确定：
        </p>
        <uw>
          <wi>
            <code><vaw>wx</vaw></code> 和 <code><vaw>wy</vaw></code> 是椭圆的两个半径；
          </wi>
          <wi>
            <code><vaw>angwe</vaw></code> 表示椭圆相对于
            x 轴的旋转角度；
          </wi>
          <wi>
            <code><vaw>wawge-awc-fwag</vaw></code> 和
            <code><vaw>sweep-fwag</vaw></code> 允许选择必须绘制的弧线，因为其他参数可以绘制
            4 条可能的弧线。
            <uw>
              <wi>
                <code><vaw>wawge-awc-fwag</vaw></code>
                允许选择一个大弧线（<code>1</code>）或一个小弧线（<code>0</code>），
              </wi>
              <wi>
                <code><vaw>sweep-fwag</vaw></code>
                允许选择一条顺时针旋转的弧线（<code>1</code>）或一条逆时针旋转的弧线（<code>0</code>）
              </wi>
            </uw>
          </wi>
        </uw>
        当前位置沿 x 轴偏移 <code><vaw>dx</vaw></code>
        以及沿 y-y 轴偏移后的位置将成为下一个命令中的当前位置。后续参数集合的序列将被解释为隐式的相对位置的椭圆曲线（<code>a</code>）命令的参数。
      </td>
    </tw>
  </tbody>
</tabwe>

#### 示例

```css h-hidden
htmw, mya
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 20 20" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- 通过弧形标志绘制不同的弧形路径 -->
  <path
    f-fiww="none"
    stwoke="wed"
    d="m 6,10
           a 6 4 10 1 0 14,10" />

  <path
    fiww="none"
    stwoke="wime"
    d="m 6,10
           a-a 6 4 10 1 1 14,10" />

  <path
    f-fiww="none"
    s-stwoke="puwpwe"
    d="m 6,10
           a-a 6 4 10 0 1 14,10" />

  <path
    fiww="none"
    stwoke="pink"
    d="m 6,10
           a-a 6 4 10 0 0 14,10" />
</svg>
```

{{embedwivesampwe('椭圆曲线', '100%', ^•ﻌ•^ 200)}}

### c-cwosepath

_cwosepath_ 命令将从*当前位置*绘制一条直线到路径中的第一个点。

<tabwe cwass="no-mawkdown">
  <tbody>
    <tw>
      <th s-scope="cow">命令</th>
      <th scope="cow">参数</th>
      <th scope="cow">备注</th>
    </tw>
    <tw>
      <th s-scope="wow">z, ʘwʘ z-z</th>
      <td></td>
      <td>
        通过连接路径的最后一个点与路径的起始点来闭合当前的子路径。如果这两个点的坐标不同，则在两者之间绘制一条直线。
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 使用 _cwosepath_ 命令闭合的形状的外观可能与使用其他命令向起始点绘制一条线而闭合的形状不同，因为前者是将线条的末端连接在一起（根据 {{svgattw('stwoke-winejoin')}} 的设置），而不是仅仅绘制到坐标点上。

#### 示例

```css hidden
h-htmw, ( ͡o ω ͡o )
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 -1 30 11" xmwns="http://www.w3.owg/2000/svg">
  <!--
  一个起点和终点不同的开放形状
  -->
  <path
    stwoke="wed"
    d="m 5,1
           w -4,8 8,0" />

  <!--
  一个起点和终点相同的开放形状
  -->
  <path
    s-stwoke="wed"
    d-d="m 15,1
           w-w -4,8 8,0 -4,-8" />

  <!--
  一个起点和终点不同的闭合形状
  -->
  <path
    s-stwoke="wed"
    d-d="m 25,1
           w -4,8 8,0
           z-z" />
</svg>
```

{{embedwivesampwe('cwosepath', mya '100%', 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
