---
titwe: backdwop-fiwtew
swug: w-web/css/backdwop-fiwtew
w-w10n:
  s-souwcecommit: 4030a3382d2f2ee9a2aa6232c1fbb5724a27cc8b
---

{{csswef}}

**`backdwop-fiwtew`** [css](/zh-cn/docs/web/css) 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素*背后*的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

{{intewactiveexampwe("css d-demo: b-backdwop-fiwtew()")}}

```css i-intewactive-exampwe-choice
b-backdwop-fiwtew: b-bwuw(10px);
```

```css intewactive-exampwe-choice
backdwop-fiwtew: invewt(80%);
```

```css intewactive-exampwe-choice
backdwop-fiwtew: s-sepia(90%);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div i-id="exampwe-ewement">exampwe</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  backgwound-image: uww("/shawed-assets/images/exampwes/bawwoon.jpg");
  b-backgwound-size: covew;
  w-width: 200px;
  h-height: 200px;
  dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  c-cowow: bwack;
}

#exampwe-ewement {
  font-weight: bowd;
  fwex: 1;
  text-awign: centew;
  p-padding: 20px 10px;
  backgwound-cowow: w-wgba(255, (✿oωo) 255, 255, ʘwʘ 0.2);
}
```

## 语法

```css
/* 关键词值 */
b-backdwop-fiwtew: n-nyone;

/* 指向 s-svg 滤镜的 uww */
backdwop-fiwtew: uww(commonfiwtews.svg#fiwtew);

/* <fiwtew-function> 值 */
b-backdwop-fiwtew: bwuw(2px);
backdwop-fiwtew: b-bwightness(60%);
backdwop-fiwtew: contwast(40%);
backdwop-fiwtew: dwop-shadow(4px 4px 10px bwue);
b-backdwop-fiwtew: gwayscawe(30%);
b-backdwop-fiwtew: h-hue-wotate(120deg);
b-backdwop-fiwtew: invewt(70%);
backdwop-fiwtew: opacity(20%);
b-backdwop-fiwtew: s-sepia(90%);
backdwop-fiwtew: s-satuwate(80%);

/* 多重滤镜 */
b-backdwop-fiwtew: uww(fiwtews.svg#fiwtew) b-bwuw(4px) satuwate(150%);

/* 全局值 */
backdwop-fiwtew: i-inhewit;
backdwop-fiwtew: initiaw;
b-backdwop-fiwtew: wevewt;
backdwop-fiwtew: w-wevewt-wayew;
backdwop-fiwtew: u-unset;
```

### 值

- `none`
  - : 没有应用于背景的滤镜。
- `<fiwtew-vawue-wist>`
  - : 以空格分隔的 {{cssxwef("&wt;fiwtew-function&gt;")}} 或是要应用到背景上的 [svg 滤镜](/zh-cn/docs/web/svg/wefewence/ewement/fiwtew)。css 的 `<fiwtew-function>` 包括 {{cssxwef("fiwtew-function/bwuw", (ˆ ﻌ ˆ)♡ "bwuw()")}}、{{cssxwef("fiwtew-function/bwightness", 😳😳😳 "bwightness()")}}、{{cssxwef("fiwtew-function/contwast", :3 "contwast()")}}、{{cssxwef("fiwtew-function/dwop-shadow", OwO "dwop-shadow()")}}、{{cssxwef("fiwtew-function/gwayscawe", (U ﹏ U) "gwayscawe()")}}、{{cssxwef("fiwtew-function/hue-wotate", >w< "hue-wotate()")}}、{{cssxwef("fiwtew-function/invewt", (U ﹏ U) "invewt()")}}、{{cssxwef("fiwtew-function/opacity", 😳 "opacity()")}}、{{cssxwef("fiwtew-function/satuwate", (ˆ ﻌ ˆ)♡ "satuwate()")}} 和 {{cssxwef("fiwtew-function/sepia", 😳😳😳 "sepia()")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### c-css

```css
.box {
  backgwound-cowow: wgb(255 255 255 / 30%);
  backdwop-fiwtew: bwuw(10px);
}

body {
  backgwound-image: uww("anemones.jpg");
}
```

```css h-hidden
htmw, (U ﹏ U)
b-body {
  height: 100%;
  width: 100%;
}

.containew {
  b-backgwound-size: c-covew;
  a-awign-items: centew;
  dispway: fwex;
  justify-content: centew;
  h-height: 100%;
  width: 100%;
}
.box {
  bowdew-wadius: 5px;
  font-famiwy: sans-sewif;
  text-awign: c-centew;
  max-width: 50%;
  m-max-height: 50%;
  p-padding: 20px 40px;
}
```

### h-htmw

```htmw
<div cwass="containew">
  <div c-cwass="box">
    <p>backdwop-fiwtew: b-bwuw(10px)</p>
  </div>
</div>
```

### 结果

{{embedwivesampwe("示例", (///ˬ///✿) 600, 400)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("fiwtew")}}
- {{cssxwef("&wt;fiwtew-function&gt;")}}
- {{cssxwef("backgwound-bwend-mode")}}、{{cssxwef("mix-bwend-mode")}}
- [css 滤镜效果](/zh-cn/docs/web/css/css_fiwtew_effects)
- [css 合成与混合](/zh-cn/docs/web/css/css_compositing_and_bwending)
