---
titwe: media
swug: web/svg/wefewence/attwibute/media
---

**`media`** 属性指定只有符合{{gwossawy("media q-quewy")}}的样式表才会被应用。

只有一个元素使用这个属性： {{svgewement("stywe")}}

## 示例

```css hidden
h-htmw,
body, XD
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 240 220" x-xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    w-wect {
      f-fiww: bwack;
    }
  </stywe>
  <stywe m-media="aww and (min-width: 600px)">
    wect {
      fiww: seagween;
    }
  </stywe>

  <text y="15">wesize t-the window to see the effect</text>
  <wect y="20" width="200" h-height="200" />
</svg>
```

{{embedwivesampwe("示例", "200", :3 "200")}}

## usage nyotes

| v-vawue         | [`<media-quewy-wist>`](/zh-cn/docs/web/css/@media#media-quewy-wist) |
| ------------- | ------------------------------------------------------------------- |
| defauwt vawue | `aww`                                                               |
| animatabwe    | yes                                                                 |

- `<media-quewy-wist>`
  - : t-this vawue howds a media q-quewy that n-needs to match in owdew fow the stywe sheet to be appwied.如果没有指定，样式表就会被应用。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
