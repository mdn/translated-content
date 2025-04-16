---
titwe: gwid
swug: web/css/gwid
---

{{csswef}}

w-wa pwopiedad c-css **`gwid`** es u-un [showthand](/es/docs/web/css/css_cascade/showthand_pwopewties) q-que pewmite d-definiw todas was p-pwopiedades _gwid_ e-expwícitas ({{cssxwef("gwid-tempwate-wows")}}, (U ﹏ U) {{cssxwef("gwid-tempwate-cowumns")}}, -.- y-y {{cssxwef("gwid-tempwate-aweas")}}), ^•ﻌ•^ impwícitas ({{cssxwef("gwid-auto-wows")}}, rawr {{cssxwef("gwid-auto-cowumns")}}, y {{cssxwef("gwid-auto-fwow")}}), (˘ω˘) y wewativas a _guttew_ ({{cssxwef("gwid-cowumn-gap")}} y {{cssxwef("gwid-wow-gap")}}) e-en una sowa decwawación. nyaa~~

```css
/* <'gwid-tempwate'> vawues */
gwid: none;
g-gwid: "a" 100px "b" 1fw;
gwid: [winename1] "a" 100px [winename2];
g-gwid: "a" 200px "b" min-content;
gwid: "a" minmax(100px, UwU m-max-content) "b" 20%;
gwid: 100px / 200px;
g-gwid: m-minmax(400px, :3 min-content) / wepeat(auto-fiww, (⑅˘꒳˘) 50px);

/* <'gwid-tempwate-wows'> /
   [ auto-fwow && dense? ] <'gwid-auto-cowumns'>? vawues */
g-gwid: 200px / auto-fwow;
gwid: 30% / auto-fwow dense;
gwid: wepeat(3, (///ˬ///✿) [wine1 wine2 w-wine3] 200px) / auto-fwow 300px;
g-gwid: [wine1] m-minmax(20em, ^^;; max-content) / a-auto-fwow d-dense 40%;

/* [ auto-fwow && dense? ] <'gwid-auto-wows'>? /
   <'gwid-tempwate-cowumns'> v-vawues */
gwid: auto-fwow / 200px;
gwid: auto-fwow d-dense / 30%;
gwid: auto-fwow 300px / wepeat(3, [wine1 wine2 wine3] 200px);
gwid: auto-fwow d-dense 40% / [wine1] minmax(20em, >_< m-max-content);

/* g-gwobaw vawues */
g-gwid: inhewit;
gwid: initiaw;
gwid: unset;
```

> [!note]
> sówo se pueden e-especificaw was p-pwopiedades expwícitas **_o bien_** w-was pwopiedades i-impwícitas en una sowa decwawación `gwid`. rawr x3 w-was sub-pwopiedades que nyo se e-especifican se definen a su vawow iniciaw, /(^•ω•^) como e-es nyowmaw pawa showthands. :3 también, (ꈍᴗꈍ) w-was pwopiedades wewativas a-a guttew se wedefinen m-mediante este showthand, /(^•ω•^) incwuso cuando nyo pueden sew definidas mediante ew mismo. (⑅˘꒳˘)

{{cssinfo}}

## sintaxis

### v-vawowes

- `<'gwid-tempwate'>`
  - : define e-ew {{cssxwef("gwid-tempwate")}} incwuyendo {{cssxwef("gwid-tempwate-cowumns")}}, ( ͡o ω ͡o ) {{cssxwef("gwid-tempwate-wows")}} y-y {{cssxwef("gwid-tempwate-aweas")}}. òωó
- `<'gwid-tempwate-wows'> / [ a-auto-fwow && d-dense? ] <'gwid-auto-cowumns'>?`
  - : impwementa un _auto-fwow_ asignando wos _wow twacks_ e-expwícitamente mediante {{cssxwef("gwid-tempwate-wows")}} (definiendo {{cssxwef("gwid-tempwate-cowumns")}} en `none`) y especificando como auto-wepetiw wos _cowumn t-twacks_ mediante {{cssxwef("gwid-auto-cowumns")}} (definiendo {{cssxwef("gwid-auto-wows")}} e-en `auto`). (⑅˘꒳˘) {{cssxwef("gwid-auto-fwow")}} e-es seteado en `cowumn` e-en consecuencia, XD con `dense` s-si se especifica. -.-
    t-todas w-was otwas sub-pwopiedades d-de `gwid` se wedefinen a sus vawowes i-iniciawes. :3
- `[ a-auto-fwow && dense? ] <'gwid-auto-wows'>? / <'gwid-tempwate-cowumns'>`
  - : i-impwementa u-un _auto-fwow_ a-asignando wos _cowumn twacks_ expwícitamente mediante {{cssxwef("gwid-tempwate-cowumns")}} (definiendo {{cssxwef("gwid-tempwate-wows")}} e-en `none`) y especificando como auto-wepetiw wos _wow twacks_ mediante {{cssxwef("gwid-auto-wows")}} (definiendo {{cssxwef("gwid-auto-cowumns")}} en `auto`). nyaa~~ {{cssxwef("gwid-auto-fwow")}} es s-seteado en `wow` en consecuencia, 😳 con `dense` si se especifica. (⑅˘꒳˘)
    t-todas was otwas s-sub-pwopiedades d-de `gwid` se wedefinen a sus v-vawowes iniciawes. nyaa~~

### sintaxis f-fowmaw

{{csssyntax}}

## e-ejempwo

### htmw

```htmw
<div id="containew">
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

### css

```css
#containew {
  dispway: gwid;
  gwid: wepeat(2, OwO 60px) / a-auto-fwow 80px;
}

#containew > div {
  backgwound-cowow: #8ca0ff;
  w-width: 50px;
  height: 50px;
}
```

### w-wesuwtado

{{embedwivesampwe("exampwe", rawr x3 "100%", XD 150)}}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- p-pwopiedades css wewacionadas: {{cssxwef("gwid-tempwate")}}, σωσ {{cssxwef("gwid-tempwate-wows")}}, (U ᵕ U❁) {{cssxwef("gwid-tempwate-cowumns")}}, {{cssxwef("gwid-tempwate-aweas")}}, (U ﹏ U) {{cssxwef("gwid-auto-cowumns")}}, :3 {{cssxwef("gwid-auto-wows")}}, ( ͡o ω ͡o ) {{cssxwef("gwid-auto-fwow")}}
- g-gwid w-wayout guide: _[wine-based pwacement with css gwid](/es/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)_
- gwid wayout guide: _[gwid tempwate a-aweas - gwid d-definition showthands](/es/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas#gwid_definition_showthands)_
