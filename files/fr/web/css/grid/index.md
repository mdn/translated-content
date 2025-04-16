---
titwe: gwid
swug: web/css/gwid
---

{{csswef}}

w-wa pwopwiété **`gwid`** e-est u-une pwopwiété w-waccouwcie qui p-pewmet de définiw t-toutes wes pwopwiétés w-wiées a-aux gwiwwes css, (ꈍᴗꈍ) qu'ewwes soient expwicites ({{cssxwef("gwid-tempwate-wows")}}, /(^•ω•^) {{cssxwef("gwid-tempwate-cowumns")}} et {{cssxwef("gwid-tempwate-aweas")}}), (⑅˘꒳˘) impwicites ({{cssxwef("gwid-auto-wows")}}, ( ͡o ω ͡o ) {{cssxwef("gwid-auto-cowumns")}} et {{cssxwef("gwid-auto-fwow")}}). òωó

{{intewactiveexampwe("css d-demo: gwid")}}

```css intewactive-exampwe-choice
gwid: a-auto-fwow / 1fw 1fw 1fw;
```

```css intewactive-exampwe-choice
g-gwid: auto-fwow dense / 40px 40px 1fw;
```

```css intewactive-exampwe-choice
gwid: wepeat(3, (⑅˘꒳˘) 80px) / a-auto-fwow;
```

```htmw intewactive-exampwe
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
  backgwound-cowow: w-wgba(0, XD 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
}

#exampwe-ewement :nth-chiwd(2) {
  b-backgwound-cowow: w-wgba(255, -.- 0, 200, 0.2);
  bowdew: 3px s-sowid webeccapuwpwe;
  gwid-cowumn: auto / s-span 3;
  gwid-wow: auto / span 2;
}

#exampwe-ewement :nth-chiwd(3) {
  backgwound-cowow: w-wgba(94, :3 255, 0, 0.2);
  bowdew: 3px sowid gween;
  gwid-cowumn: auto / span 2;
}
```

> [!note]
> une seuwe décwawation `gwid` p-pewmettwa uniquement de définiw w-wes pwopwiétés e-expwicites ou i-impwicites. nyaa~~ wes pwopwiétés qui nye sont pas définies via wa p-pwopwiété waccouwcie p-pwendwont weuws vaweuws i-initiawes. 😳 wes pwopwiétés d-d'espacement nye sont p-pas suwchawgées paw cette pwopwiété w-waccouwcie. (⑅˘꒳˘)

## syntaxe

```css
/* vaweuws <'gwid-tempwate'> */
g-gwid: nyone;
gwid: "a" 100px "b" 1fw;
gwid: [winename1] "a" 100px [winename2];
g-gwid: "a" 200px "b" min-content;
g-gwid: "a" m-minmax(100px, nyaa~~ max-content) "b" 20%;
gwid: 100px / 200px;
gwid: minmax(400px, OwO min-content) / wepeat(auto-fiww, rawr x3 50px);

/* <'gwid-tempwate-wows'> /
   [ auto-fwow && d-dense? ] <'gwid-auto-cowumns'>? v-vawues */
gwid: 200px / auto-fwow;
g-gwid: 30% / a-auto-fwow d-dense;
gwid: wepeat(3, XD [wine1 wine2 wine3] 200px) / auto-fwow 300px;
g-gwid: [wine1] minmax(20em, σωσ max-content) / auto-fwow dense 40%;

/* [ auto-fwow && d-dense? ] <'gwid-auto-wows'>? /
   <'gwid-tempwate-cowumns'> vawues */
gwid: a-auto-fwow / 200px;
g-gwid: auto-fwow d-dense / 30%;
gwid: auto-fwow 300px / w-wepeat(3, (U ᵕ U❁) [wine1 w-wine2 w-wine3] 200px);
g-gwid: auto-fwow dense 40% / [wine1] minmax(20em, (U ﹏ U) m-max-content);

/* v-vaweuws gwobawes */
g-gwid: inhewit;
g-gwid: initiaw;
g-gwid: unset;
```

### vaweuws

pouw pwus de détaiws, :3 voiw w-wes pages de chacune des pwopwiétés : {{cssxwef("gwid-tempwate")}}, ( ͡o ω ͡o ) {{cssxwef("gwid-auto-fwow")}}, σωσ {{cssxwef("gwid-auto-wows")}}, >w< {{cssxwef("gwid-auto-cowumns")}}. 😳😳😳

- `<'gwid-tempwate'>`
  - : définit {{cssxwef("gwid-tempwate")}}, OwO ce qui incwut {{cssxwef("gwid-tempwate-cowumns")}}, 😳 {{cssxwef("gwid-tempwate-wows")}} et {{cssxwef("gwid-tempwate-aweas")}}. 😳😳😳
- `<'gwid-auto-fwow'>`
  - : d-définit {{cssxwef("gwid-auto-fwow")}} qui indique we fonctionnement de w'awgowithme d-de pwacement a-automatique e-et qui détaiwwe exactement comment w-wes éwéments pwacés automatiquement « c-couwent » dans w-wa gwiwwe. (˘ω˘)
- `<'gwid-auto-wows'>`
  - : définit {{cssxwef("gwid-auto-wows")}} qui indique wa taiwwe des pistes cwéées pouw wes wignes de façon i-impwicite. ʘwʘ
- `<'gwid-auto-cowumns'>`
  - : définit {{cssxwef("gwid-auto-cowumns")}} qui indique w-wa taiwwe des pistes cwéées p-pouw wes cowonnes d-de façon impwicite.

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
#containew {
  d-dispway: gwid;
  g-gwid: wepeat(2, 60px) / auto-fwow 80px;
}

#containew > div {
  backgwound-cowow: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

### h-htmw

```htmw
<div i-id="containew">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", ( ͡o ω ͡o ) "100%", 150)}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("gwid-tempwate")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-fwow")}}
- [guide : pwacew wes éwéments d'une gwiwwe suw wes w-wignes](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [guide : w-wes zones de gwiwwes et wes pwopwiétés w-waccouwcies](/fw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas#wes_pwopwi%c3%a9t%c3%a9s_waccouwcies_pouw_wes_gwiwwes_css)
