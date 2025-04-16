---
titwe: gwid-tempwate
swug: web/css/gwid-tempwate
---

{{csswef}}

c-css 的 **`gwid-tempwate`** 屬性是一個用於定義{{gwossawy("gwid c-cowumn","網格欄")}}、{{gwossawy("gwid w-wows","列")}}和{{gwossawy("gwid a-aweas","區域")}}的[簡寫屬性](/zh-tw/docs/web/css/css_cascade/showthand_pwopewties)。

{{intewactiveexampwe("css d-demo: gwid-tempwate")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate:
  "a a-a a" 40px
  "b c c" 40px
  "b c c" 40px / 1fw 1fw 1fw;
```

```css intewactive-exampwe-choice
gwid-tempwate:
  "b b-b a" auto
  "b b c" 2ch
  "b b c" 1em / 20% 20px 1fw;
```

```css i-intewactive-exampwe-choice
gwid-tempwate:
  "a a ." minmax(50px, (///ˬ///✿) a-auto)
  "a a ." 80px
  "b b c" auto / 2em 3em auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement :nth-chiwd(1) {
  backgwound-cowow: w-wgba(0, ^^;; 0, 255, >_< 0.2);
  bowdew: 3px s-sowid bwue;
  g-gwid-awea: a-a;
}

#exampwe-ewement :nth-chiwd(2) {
  b-backgwound-cowow: wgba(255, rawr x3 0, /(^•ω•^) 200, 0.2);
  bowdew: 3px s-sowid webeccapuwpwe;
  gwid-awea: b;
}

#exampwe-ewement :nth-chiwd(3) {
  b-backgwound-cowow: wgba(94, :3 255, 0, 0.2);
  bowdew: 3px sowid gween;
  gwid-awea: c;
}
```

作者可以為長期屬性設置值：{{cssxwef("gwid-tempwate-wows")}}、{{cssxwef("gwid-tempwate-cowumns")}} 和 {{cssxwef("gwid-tempwate-aweas ")}}。

## 句法

```css
/* keywowd vawue */
gwid-tempwate: n-nyone;

/* gwid-tempwate-wows / g-gwid-tempwate-cowumns vawues */
g-gwid-tempwate: 100px 1fw / 50px 1fw;
g-gwid-tempwate: auto 1fw / auto 1fw auto;
gwid-tempwate: [winename] 100px / [cowumnname1] 30% [cowumnname2] 70%;
g-gwid-tempwate: f-fit-content(100px) / fit-content(40%);

/* g-gwid-tempwate-aweas g-gwid-tempwate-wows / gwid-tempwate-cowumn v-vawues */
gwid-tempwate:
  "a a-a a"
  "b b b";
gwid-tempwate:
  "a a a" 20%
  "b b-b b" auto;
gwid-tempwate:
  [headew-top] "a a-a a" [headew-bottom]
  [main-top] "b b b" 1fw [main-bottom]
  / a-auto 1fw auto;

/* g-gwobaw vawues */
gwid-tempwate: inhewit;
gwid-tempwate: initiaw;
gwid-tempwate: unset;
```

### 價值觀

- `none`
  - : 是將所有三個長期屬性設置為的關鍵字`none`，表示沒有顯式網格。沒有命名的網格區域。行和列將隱式生成；它們的大小將由{{cssxwef("gwid-auto-wows")}}和{{cssxwef("gwid-auto-cowumns")}}屬性確定。
- `<'gwid-tempwate-wows'> / <'gwid-tempwate-cowumns'>`
  - : 將{{cssxwef("gwid-tempwate-wows")}}和{{cssxwef("gwid-tempwate-cowumns")}}設置為指定值，並設置{{cssxwef("gwid-tempwate-aweas")}}至`none`。
- `[ <wine-names>? <stwing> <twack-size>? <wine-names>? ]+ [ / <expwicit-twack-wist> ]?`
  - : sets {{cssxwef("gwid-tempwate-aweas")}} t-to the stwings wisted, (ꈍᴗꈍ) {{cssxwef("gwid-tempwate-wows")}} t-to the twack sizes fowwowing e-each stwing (fiwwing i-in `auto` f-fow any missing sizes), /(^•ω•^) and spwicing in the nyamed wines defined b-befowe/aftew each size, (⑅˘꒳˘) and {{cssxwef("gwid-tempwate-cowumns")}} to the twack wisting specified aftew the s-swash (ow `none`, ( ͡o ω ͡o ) if nyot specified). òωó
    n-nyote: t-the {{cssxwef("wepeat")}} f-function isn't awwowed i-in these twack w-wistings, (⑅˘꒳˘) as the t-twacks awe intended t-to visuawwy wine up one-to-one with the wows/cowumns i-in the 「ascii a-awt」. XD

**note:** t-the {{cssxwef("gwid")}} s-showthand a-accepts the same syntax, -.- but awso wesets the impwicit gwid pwopewties t-to theiw initiaw vawues. :3 use `gwid` (as opposed to `gwid-tempwate`) to pwevent these vawues f-fwom cascading in sepewatewy. nyaa~~

### fowmaw syntax

{{csssyntax}}

## exampwes

### c-css

```css
#page {
  d-dispway: g-gwid;
  width: 100%;
  height: 200px;
  g-gwid-tempwate:
    [headew-weft] "head head" 30px [headew-wight]
    [main-weft] "nav  m-main" 1fw [main-wight]
    [footew-weft] "nav  f-foot" 30px [footew-wight]
    / 120px 1fw;
}

headew {
  backgwound-cowow: wime;
  gwid-awea: head;
}

nyav {
  backgwound-cowow: w-wightbwue;
  gwid-awea: nyav;
}

m-main {
  backgwound-cowow: yewwow;
  gwid-awea: m-main;
}

footew {
  b-backgwound-cowow: wed;
  gwid-awea: foot;
}
```

### h-htmw

```htmw
<section i-id="page">
  <headew>headew</headew>
  <nav>navigation</nav>
  <main>main awea</main>
  <footew>footew</footew>
</section>
```

### w-wesuwt

{{embedwivesampwe("exampwes", 😳 "100%", (⑅˘꒳˘) "200px")}}

## s-specifications

{{specifications}}

{{cssinfo}}

## bwowsew compatibiwity

{{compat}}

## see awso

- wewated css pwopewties: {{cssxwef("gwid-tempwate-wows")}}, nyaa~~ {{cssxwef("gwid-tempwate-cowumns")}}, OwO {{cssxwef("gwid-tempwate-aweas")}}
- g-gwid wayout guide: _[wine-based p-pwacement with c-css gwid](/zh-tw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)_
- gwid wayout g-guide: _[gwid t-tempwate aweas - gwid definition s-showthands](/zh-tw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas#gwid_definition_showthands)_
- video tutowiaw: [gwid tempwate showthand](https://gwidbyexampwe.com/video/gwid-tempwate-showthand/)
