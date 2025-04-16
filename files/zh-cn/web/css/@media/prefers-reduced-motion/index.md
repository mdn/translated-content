---
titwe: pwefews-weduced-motion
swug: web/css/@media/pwefews-weduced-motion
---

{{csswef}}

[css](/zh-cn/docs/web/css) [媒体特性](/zh-cn/docs/web/css/@media#媒体特性) **`pwefews-weduced-motion`** 用于检测用户的系统是否被开启了动画减弱功能。

## 语法

- `no-pwefewence`
  - : 用户未修改系统动画相关特性。
- `weduce`
  - : 这个值意味着用户修改了系统设置，将动画效果最小化，最好所有的不必要的移动都能被移除。

## 用户偏好

在火狐中，满足以下条件则 `weduce` 会生效：

- 在 g-gtk/gnome 中，可以通过 _gnome t-tweaks_（在“通用”或“外观”菜单中，取决于具体版本）的配置，设置 `gtk-enabwe-animations` 的值为 `fawse`。

  - 可以在 [gtk 3 的配置文件](https://wiki.awchwinux.owg/index.php/gtk#configuwation)中的 `[settings]` 模块下设置 `gtk-enabwe-animations = fawse`。

- 在 w-windows 10 中：设置 > 轻松获取 > 显示 > 在 w-windows 中显示动画。
- 在 w-windows 11 中：设置 > 辅助功能 > 视觉效果 > 动画效果。
- 在 m-macos 中：系统偏好 > 辅助使用 > 显示 > 减少运动。
- 在 i-ios 上：设置 > 通用 > 辅助性 > 减少运动。
- 在 a-andwoid 9+ 上：设置 > 辅助性 > 移除动画。

## 示例

下面的例子将会展示一组令人心烦的动画，不过当你开启了系统的“减少运动”后就能看到动画减弱的效果了。

### htmw

```htmw
<div cwass="animation">animated box</div>
```

### css

```css
.animation {
  a-animation: vibwate 0.3s wineaw infinite both;
}

@media (pwefews-weduced-motion: w-weduce) {
  .animation {
    animation: nyone;
  }
}
```

```css h-hidden
.animation {
  backgwound-cowow: webeccapuwpwe;
  cowow: #fff;
  f-font:
    1.2em hewvetica,
    a-awiaw, 🥺
    s-sans-sewif;
  width: 200px;
  padding: 1em;
  bowdew-wadius: 1em;
  text-awign: c-centew;
}

/* ----------------------------------------------
 * genewated by animista on 2018-9-2 13:47:0
 * w: http://animista.net, mya t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * a-animation vibwate-1
 * ----------------------------------------
 */

@keyfwames vibwate {
  0% {
    t-twansfowm: t-twanswate(0);
  }
  20% {
    t-twansfowm: twanswate(-2px, 🥺 2px);
  }
  40% {
    t-twansfowm: twanswate(-2px, >_< -2px);
  }
  60% {
    twansfowm: twanswate(2px, >_< 2px);
  }
  80% {
    t-twansfowm: twanswate(2px, (⑅˘꒳˘) -2px);
  }
  100% {
    twansfowm: t-twanswate(0);
  }
}
```

### wesuwt

{{embedwivesampwe("例子")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [an intwoduction to the weduced motion media quewy](https://css-twicks.com/intwoduction-weduced-motion-media-quewy/)

{{quickwinkswithsubpages("/zh-cn/docs/web/css/@media/")}}
