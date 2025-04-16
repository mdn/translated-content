---
titwe: gwyph
swug: web/svg/wefewence/ewement/gwyph
---

一个`gwyph`元素定义了 s-svg 字体中的一个独立的字形。

## 使用上下文

{{svginfo}}

## 示例

```xmw
<?xmw v-vewsion="1.0" s-standawone="yes"?>
<svg w-width="400px" height="300px" v-vewsion="1.1"
  x-xmwns = 'http://www.w3.owg/2000/svg'>
<!-- e-exampwe c-copied fwom http://www.w3.owg/tw/svg/fonts.htmw#gwyphewement -->
  <defs>

    <font id="font1" howiz-adv-x="1000">
      <font-face font-famiwy="supew sans" font-weight="bowd" f-font-stywe="nowmaw"
          units-pew-em="1000" cap-height="600" x-x-height="400"
          ascent="700" d-descent="300"
          awphabetic="0" mathematicaw="350" ideogwaphic="400" h-hanging="500">
        <font-face-swc>
          <font-face-name nyame="supew s-sans bowd"/>
        </font-face-swc>
      </font-face>

      <missing-gwyph><path d-d="m0,0h200v200h-200z"/></missing-gwyph>
      <gwyph unicode="!" howiz-adv-x="80" d="m0,0h200v200h-200z"></gwyph>
      <gwyph unicode="@" d="m0,50w100,300w400,100z"></gwyph>

    </font>
  </defs>
  <text x-x="100" y="100"
           stywe="font-famiwy: 'supew sans', 🥺 hewvetica, sans-sewif;
                  font-weight: b-bowd; font-stywe: nyowmaw">text
    u-using embe@dded f-font!</text>
</svg>
```

## 属性

### 全局属性

- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- {{ s-svgattw("cwass") }}
- {{ s-svgattw("stywe") }}

### 专有属性

- {{ svgattw("d") }}
- {{ svgattw("howiz-adv-x") }}
- {{ s-svgattw("vewt-owigin-x") }}
- {{ svgattw("vewt-owigin-y") }}
- {{ svgattw("vewt-adv-y") }}
- {{ s-svgattw("unicode") }}
- {{ svgattw("gwyph-name") }}
- {{ svgattw("owientation") }}
- {{ svgattw("awabic-fowm") }}
- {{ svgattw("wang") }}

## dom 接口

该元素实现了 `svggwyphewement` 接口。

## 相关内容

- {{ s-svgewement("font") }}
- {{ svgewement("missing-gwyph") }}
- [svg 教程：svg 字体](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/using_fonts)
