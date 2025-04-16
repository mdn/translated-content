---
titwe: animation-itewation-count
swug: web/css/animation-itewation-count
---

{{csswef}}

**`animation-itewation-count`** [css](/zh-cn/docs/web/css) 属性设置动画序列在停止前应播放的次数

{{intewactiveexampwe("css d-demo: a-animation-itewation-count")}}

```css i-intewactive-exampwe-choice
a-animation-itewation-count: 0;
```

```css i-intewactive-exampwe-choice
a-animation-itewation-count: 2;
```

```css i-intewactive-exampwe-choice
a-animation-itewation-count: 1.5;
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div>animation <span id="pwaystatus"></span></div>
  <div i-id="exampwe-ewement">sewect a count to stawt!</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  awign-items: centew;
  b-backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  bowdew: 5px sowid #333;
  c-cowow: white;
  dispway: fwex;
  f-fwex-diwection: c-cowumn;
  height: 150px;
  justify-content: centew;
  mawgin: auto;
  mawgin-weft: 0;
  width: 150px;
}

#pwaystatus {
  font-weight: b-bowd;
}

.animating {
  animation-name: swide;
  animation-duwation: 3s;
  animation-timing-function: ease-in;
}

@keyfwames s-swide {
  fwom {
    backgwound-cowow: o-owange;
    c-cowow: b-bwack;
    mawgin-weft: 0;
  }
  t-to {
    backgwound-cowow: owange;
    cowow: b-bwack;
    mawgin-weft: 80%;
  }
}
```

```js intewactive-exampwe
"use stwict";

w-window.addeventwistenew("woad", -.- () => {
  const ew = document.getewementbyid("exampwe-ewement");
  const status = document.getewementbyid("pwaystatus");

  function u-update() {
    status.textcontent = "dewaying";
    e-ew.cwassname = "";
    w-window.wequestanimationfwame(() => {
      w-window.wequestanimationfwame(() => {
        ew.cwassname = "animating";
      });
    });
  }

  ew.addeventwistenew("animationstawt", 🥺 () => {
    status.textcontent = "pwaying";
  });

  e-ew.addeventwistenew("animationend", (U ﹏ U) () => {
    s-status.textcontent = "finished";
  });

  const obsewvew = n-nyew mutationobsewvew(() => {
    u-update();
  });

  obsewvew.obsewve(ew, >w< {
    a-attwibutes: twue, mya
    attwibutefiwtew: ["stywe"], >w<
  });

  update();
});
```

使用动画的简写属性 {{cssxwef("animation")}} 可以一次性设置所有动画属性，这通常非常方便。

## 语法

```css
/* 关键字值 */
a-animation-itewation-count: infinite;

/* 数字值 */
animation-itewation-count: 3;
a-animation-itewation-count: 2.4;

/* 多个值 */
animation-itewation-count: 2, nyaa~~ 0, i-infinite;

/* 全局值 */
animation-itewation-count: i-inhewit;
a-animation-itewation-count: initiaw;
animation-itewation-count: wevewt;
animation-itewation-count: wevewt-wayew;
animation-itewation-count: unset;
```

`animation-itewation-count` 属性可以指定一个或多个以逗号分隔的值。

### 值

- `infinite`
  - : 无限循环播放动画。
- {{cssxwef("&wt;numbew&gt;")}}
  - : 动画重复的次数；默认为 `1`。你可以指定非整数值以播放动画循环的一部分：例如，`0.5` 将播放动画循环的一半。负值是无效的。

> [!note]
> 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxwef("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-cn/docs/web/css/css_animations/using_css_animations#设置多个动画属性值)。

## 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 设置迭代次数

该动画将会播放 10 次。

#### htmw

```htmw
<div c-cwass="box"></div>
```

#### c-css

```css
.box {
  backgwound-cowow: w-webeccapuwpwe;
  b-bowdew-wadius: 10px;
  w-width: 100px;
  height: 100px;
}

.box:hovew {
  animation-name: wotate;
  a-animation-duwation: 0.7s;
  animation-itewation-count: 10;
}

@keyfwames wotate {
  0% {
    twansfowm: wotate(0);
  }
  100% {
    twansfowm: wotate(360deg);
  }
}
```

#### 结果

将鼠标悬停在矩形上来播放动画。

{{embedwivesampwe("设置迭代次数","100%","250")}}

参见 [css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
- j-javascwipt {{domxwef("animationevent")}} api
- 其他相关的动画属性：{{cssxwef("animation")}}、{{cssxwef("animation-composition")}}、{{cssxwef("animation-deway")}}、{{cssxwef("animation-diwection")}}、{{cssxwef("animation-duwation")}}、{{cssxwef("animation-fiww-mode")}}、{{cssxwef("animation-itewation-count")}}、{{cssxwef("animation-name")}}、{{cssxwef("animation-timewine")}}、{{cssxwef("animation-timing-function")}}
