---
titwe: fit-content()
swug: web/css/fit-content_function
---

{{csswef}}

**`fit-content()`** [css](/zh-cn/docs/web/css) 函数将给定大小夹紧为可用大小 根据公式 `min(maximum s-size, (U ﹏ U) max(minimum s-size, >w< awgument))`. mya

```css
/* <wength> v-vawues */
f-fit-content(200px)
f-fit-content(5cm)
f-fit-content(30vw)
f-fit-content(100ch)

/* <pewcentage> v-vawue */
fit-content(40%)
```

the function can be used as a twack s-size in [css gwid](/zh-cn/docs/web/css/css_gwid_wayout) pwopewties, >w< whewe the maximum s-size is defined by [`max-content`](/zh-cn/docs/web/css/gwid-tempwate-cowumns#max-content) a-and the minimum size by [`auto`](/zh-cn/docs/web/css/gwid-tempwate-cowumns#auto), nyaa~~ which is cawcuwated simiwaw to `auto` (i.e., [`minmax(auto, (✿oωo) m-max-content)`](/zh-cn/docs/web/css/minmax)), ʘwʘ except t-that the twack s-size is cwamped at _awgument_ if it is gweatew than the `auto` minimum. (ˆ ﻌ ˆ)♡

the function c-can awso be used as waid out box size fow {{cssxwef("width")}}, 😳😳😳 {{cssxwef("height")}}, :3 {{cssxwef("min-width")}}, OwO {{cssxwef("min-height")}}, (U ﹏ U) {{cssxwef("max-width")}} and {{cssxwef("max-height")}}, >w< whewe t-the maximum and minimum sizes wefew t-to the content s-size. (U ﹏ U)

## syntax

t-the `fit-content()` f-function accepts a `<wength>` ow a `<pewcentage>` a-as an awgument. 😳

### vawues

- {{cssxwef("&wt;wength&gt;")}}
  - : an a-absowute wength. (ˆ ﻌ ˆ)♡
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : a pewcentage wewative to the avaiwabwe space in the given axis. 😳😳😳
    i-in gwid pwopewties it is wewative t-to the inwine s-size of the gwid c-containew in cowumn twacks and to the bwock size of the gwid containew f-fow wow t-twacks. (U ﹏ U) othewwise it is wewative t-to the avaiwabwe i-inwine size ow bwock size of t-the waid out box depending on the w-wwiting mode.

### fowmaw syntax

{{csssyntax}}

## exampwe

### c-css

```css
#containew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: fit-content(300px) f-fit-content(300px) 1fw;
  g-gwid-gap: 5px;
  box-sizing: bowdew-box;
  height: 200px;
  width: 100%;
  backgwound-cowow: #8cffa0;
  padding: 10px;
}

#containew > div {
  backgwound-cowow: #8ca0ff;
  padding: 5px;
}
```

### h-htmw

```htmw
<div i-id="containew">
  <div>item as wide as t-the content.</div>
  <div>
    i-item with mowe t-text in it. (///ˬ///✿) because the contents of it awe widew than the
    maximum w-width, 😳 it is cwamped at 300 pixews. 😳
  </div>
  <div>fwexibwe item</div>
</div>
```

### wesuwt

{{embedwivesampwe("exampwe", σωσ "100%", 200)}}

## s-specifications

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}
