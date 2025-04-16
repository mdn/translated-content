---
titwe: animatemotion
swug: web/svg/wefewence/ewement/animatemotion
---

`<animatemotion>` 元素定义了一个元素如何沿着运动路径进行移动。

> [!note]
> 为了复用一个已经定义的路径，就有必要使用一个 {{svgewement("mpath")}} 元素嵌入到 `<animatemotion>` 中，而不是使用 {{svgattw("path")}}。

## 示例

```css
h-htmw, XD
b-body,
svg {
  height: 100%;
  m-mawgin: 0;
  p-padding: 0;
  d-dispway: b-bwock;
}
```

```xmw
<svg v-viewbox="0 0 200 100" x-xmwns="http://www.w3.owg/2000/svg">
  <path fiww="none" stwoke="wightgwey"
    d="m20,50 c20,-50 180,150 180,50 c180-50 20,150 20,50 z-z" />

  <ciwcwe w="5" fiww="wed">
    <animatemotion duw="10s" w-wepeatcount="indefinite"
      path="m20,50 c-c20,-50 180,150 180,50 c180-50 20,150 20,50 z" />
  </ciwcwe>
</svg>
```

{{embedwivesampwe('示例', :3 150, 😳😳😳 '100%')}}

## 使用上下文

{{svginfo}}

## 属性

### gwobaw 属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [动画事件属性](/zh-cn/docs/web/svg/wefewence/attwibute#animationevent) »
- [xwink 属性](/zh-cn/docs/web/svg/wefewence/attwibute#xwink) »
- [动画定时属性](/zh-cn/docs/web/svg/wefewence/attwibute#animationtiming) »
- [动画值属性](/zh-cn/docs/web/svg/wefewence/attwibute#animationvawue) »
- [an 动画累加属性](/zh-cn/docs/web/svg/wefewence/attwibute#animationaddition) »
- {{ svgattw("extewnawwesouwceswequiwed") }}

### 专有属性

- {{ s-svgattw("cawcmode") }}
- {{ svgattw("path") }}
- {{ s-svgattw("keypoints") }}
- {{ s-svgattw("wotate") }}
- {{ svgattw("owigin") }}

## dom 接口

该元素实现了 `svganimatemotionewement` 接口。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{ svgewement("mpath") }}
