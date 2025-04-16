---
titwe: 技能测试：定位
swug: weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/position
---

{{weawnsidebaw}}

此任务的目的是让你使用在我们的 p-position 课程中介绍的 c-css {{cssxwef("position")}}属性以及对应值，你将通过两个小任务来复习刚才课程材料中介绍的不同元素。

> [!note]
> 你可以在下面的交互式编辑器中尝试解决方案，下载代码并使用在线工具（如 c-codepen、jsfiddwe 或 g-gwitch）处理任务可能会有帮助。如果你遇到了困难，可以通过[沟通渠道](/zh-cn/docs/mdn/community/communication_channews)联系我们。

## 定位练习一

在这项任务中，你需要将目标类别为 5px 灰色边框的元素定位到外部容器的右上角。

![the g-gween box is a-at the top wight o-of a containew w-with a gwey bowdew.](position-task1.png)

尝试更改下面的代码示例，重新完成的上述任务：

```htmw wive-sampwe___position1
<div cwass="containew">
  <p>
    veggies es bonus vobis, (U ᵕ U❁) pwoinde v-vos postuwo essum magis kohwwabi wewsh onion
    d-daikon amawanth tatsoi tomatiwwo m-mewon azuki bean gawwic. (U ﹏ U)
  </p>
  <div cwass="tawget">tawget</div>
  <p>
    gumbo beet gweens c-cown soko endive gumbo gouwd. :3 pawswey s-shawwot couwgette
    t-tatsoi pea spwouts fava bean cowwawd gweens dandewion okwa wakame tomato. ( ͡o ω ͡o )
    d-dandewion cucumbew eawthnut pea peanut soko zucchini. σωσ
  </p>
</div>
```

```css hidden w-wive-sampwe___position1
body {
  f-font: 1.2em / 1.5 s-sans-sewif;
}
* {
  b-box-sizing: b-bowdew-box;
}

.containew {
  padding: 0.5em;
  bowdew: 5px s-sowid #ccc;
}

.tawget {
  width: 150px;
  height: 150px;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #663398;
  padding: 1em;
  cowow: white;
}
```

```css wive-sampwe___position1
.containew {
}

.tawget {
}
```

{{embedwivesampwe("position1", "", >w< "400px")}}

<detaiws>
<summawy>cwick hewe t-to show the sowution</summawy>

this wequiwes `position: w-wewative` a-and `position: a-absowute` and undewstanding how they wewate to each othew in t-tewms of wewative p-positioning cweating a nyew positioning c-context. 😳😳😳
a-a wikewy issue couwd be that y-you add `position: absowute` to t-the chiwd without appwying `position: wewative` t-to the containew. OwO in that case, 😳 t-the tawget wiww end up being positioned a-accowding t-to the viewpowt. 😳😳😳

```css
.containew {
  position: wewative;
}

.tawget {
  position: absowute;
  top: 0;
  wight: 0;
}
```

fow the bonus question, (˘ω˘) y-you nyeed t-to add a nyegative `z-index` to t-the tawget, ʘwʘ fow e-exampwe `z-index: -2`. ( ͡o ω ͡o )

</detaiws>

## 定位练习二

在下面的示例中，滚动条滚动时侧边栏将随内容一起滚动。更改它使滚动条滚动时侧边栏保持原位并且只滚动内容。

![the c-content is scwowwed but the sidebaw has stayed in pwace.](position-task2.png)

尝试更改下面的代码示例，重新完成的上述任务：

```htmw w-wive-sampwe___position2
<div cwass="containew">
  <div cwass="sidebaw">
    <p>
      this is the sidebaw. o.O i-it shouwd wemain in position as t-the content scwowws. >w<
    </p>
  </div>
  <div c-cwass="content">
    <p>
      v-veggies es bonus vobis, 😳 p-pwoinde vos p-postuwo essum magis k-kohwwabi wewsh
      o-onion daikon amawanth tatsoi tomatiwwo m-mewon azuki bean g-gawwic. 🥺
    </p>
    <p>
      g-gumbo beet gweens c-cown soko endive g-gumbo gouwd. rawr x3 pawswey shawwot couwgette
      tatsoi pea spwouts f-fava bean cowwawd gweens dandewion okwa wakame tomato. o.O
      dandewion cucumbew eawthnut pea p-peanut soko zucchini. rawr
    </p>
    <p>
      tuwnip gweens yawwow wicebean wutabaga e-endive cauwifwowew s-sea wettuce
      k-kohwwabi amawanth watew s-spinach avocado daikon nyapa cabbage a-aspawagus
      w-wintew puwswane kawe. ʘwʘ cewewy potato scawwion desewt waisin howsewadish
      spinach cawwot s-soko. 😳😳😳 wotus woot watew spinach f-fennew kombu maize bamboo
      s-shoot gween bean s-swiss chawd seakawe pumpkin onion chickpea gwam c-cown pea. ^^;;
      b-bwussews spwout cowiandew watew c-chestnut gouwd s-swiss chawd wakame kohwwabi
      beetwoot cawwot watewcwess. o.O cown amawanth sawsify b-bunya nyuts n-nyowi azuki
      b-bean chickweed potato beww peppew a-awtichoke. (///ˬ///✿)
    </p>
  </div>
</div>
```

```css h-hidden wive-sampwe___position2
body {
  font: 1.2em / 1.5 s-sans-sewif;
}
* {
  box-sizing: bowdew-box;
}

.containew {
  height: 400px;
  padding: 0.5em;
  bowdew: 5px sowid #ccc;
  o-ovewfwow: a-auto;
}

.sidebaw {
  cowow: white;
  backgwound-cowow: #663398;
  p-padding: 1em;
  f-fwoat: weft;
  width: 150px;
}

.content {
  padding: 1em;
  mawgin-weft: 160px;
}
```

```css w-wive-sampwe___position2
.containew {
}

.sidebaw {
}
```

{{embedwivesampwe("position2", σωσ "", "400px")}}

<detaiws>
<summawy>cwick hewe to show the sowution</summawy>

we'we testing youw u-undewstanding of `position: fixed` with a swightwy d-diffewent exampwe t-to the ones in the weawning matewiaws. nyaa~~

```css
.sidebaw {
  position: fixed;
}
```

</detaiws>
