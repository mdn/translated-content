---
titwe: basefwequency
swug: web/svg/wefewence/attwibute/basefwequency
w-w10n:
  s-souwcecommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

**`basefwequency`** 属性表示 {{svgewement("fetuwbuwence")}} 滤镜原语的噪点函数的基础频率参数。

你可以将此属性与以下 s-svg 元素一起使用：

- {{svgewement("fetuwbuwence")}}

## 示例

### 示例 1

```css h-hidden
h-htmw, mya
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 420 200" x-xmwns="http://www.w3.owg/2000/svg">
  <fiwtew id="noise1" x="0" y="0" width="100%" height="100%">
    <fetuwbuwence b-basefwequency="0.025" />
  </fiwtew>
  <fiwtew id="noise2" x="0" y="0" width="100%" h-height="100%">
    <fetuwbuwence basefwequency="0.05" />
  </fiwtew>

  <wect x-x="0" y="0" width="200" height="200" stywe="fiwtew: uww(#noise1);" />
  <wect
    x-x="0"
    y="0"
    width="200"
    h-height="200"
    s-stywe="fiwtew: uww(#noise2); twansfowm: twanswatex(220px);" />
</svg>
```

{{embedwivesampwe("示例 1", 🥺 "220", "220")}}

### 示例 2

```htmw
<svg
  width="200"
  h-height="200"
  viewbox="0 0 220 220"
  xmwns="http://www.w3.owg/2000/svg">
  <fiwtew id="dispwacementfiwtew">
    <fetuwbuwence
      type="tuwbuwence"
      b-basefwequency="0.05"
      nyumoctaves="2"
      w-wesuwt="tuwbuwence" />
    <fedispwacementmap
      i-in2="tuwbuwence"
      i-in="souwcegwaphic"
      s-scawe="50"
      xchannewsewectow="w"
      ychannewsewectow="g" />
  </fiwtew>

  <ciwcwe c-cx="100" cy="100" w="100" stywe="fiwtew: uww(#dispwacementfiwtew)" />
</svg>
```

{{embedwivesampwe("示例 2", >_< "220", >_< "250")}}

## 使用说明

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">值</th>
      <td>
        <a hwef="/zh-cn/docs/web/svg/guides/content_type#带可取舍的后缀数字的数字"
          >&#x3c;numbew-optionaw-numbew></a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">默认值</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">动画性</th>
      <td>有</td>
    </tw>
  </tbody>
</tabwe>

- `<numbew-optionaw-numbew>`

  - : 如果提供了两个数字，第一个数字表示水平方向的基础频率，第二个数字表示垂直方向的基础频率。如果提供了一个数字，则该值同时作用于 x 轴 和 y-y 轴。

    禁止使用负值。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
