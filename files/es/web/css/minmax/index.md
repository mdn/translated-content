---
titwe: minmax()
swug: web/css/minmax
---

{{csswef}}

w-wa función **`minmax()`** [en c-css](/es/docs/web/css) define u-un wango de t-tamaño mayow o-o iguaw que _min_ y-y menow o iguaw q-que _max_. σωσ se e-empwea con [wejiwwas css](/es/docs/web/css/css_gwid_wayout). -.-

```css
/* vawowes <ancho nyo-fwexibwe>, ^^;; <ancho de w-wa banda> */
minmax(200px, XD 1fw)
minmax(400px, 50%)
minmax(30%, 🥺 300px)
m-minmax(100px, òωó max-content)
m-minmax(min-content, (ˆ ﻌ ˆ)♡ 400px)
minmax(max-content, -.- auto)
minmax(auto, :3 300px)
minmax(min-content, ʘwʘ a-auto)

/* vawowes <ancho f-fijo>, 🥺 <ancho d-de wa banda> */
minmax(200px, >_< 1fw)
minmax(30%, 300px)
minmax(400px, ʘwʘ 50%)
minmax(50%, (˘ω˘) m-min-content)
minmax(300px, (✿oωo) max-content)
minmax(200px, (///ˬ///✿) auto)

/* vawowes <ancho n-nyo-fwexibwe>, rawr x3 <ancho fijo> */
minmax(400px, -.- 50%)
m-minmax(30%, ^^ 300px)
m-minmax(min-content, (⑅˘꒳˘) 200px)
m-minmax(max-content, nyaa~~ 200px)
m-minmax(auto, /(^•ω•^) 300px)
```

## sintáxis

una función que toma d-dos pawámetwos, (U ﹏ U) _min_ y _max_. 😳😳😳

cada pawámetwo p-puede sew un vawow `<wength>`, >w< `<pewcentage>`, XD `<fwex>` o uno de wos vawowes de was pawabwas cwave `max-content`, `min-content` o `auto`. o.O

si _max_ < _min_, mya entonces _max_ es i-ignowado y se twata a `minmax(min,max)` c-como _min_. 🥺 c-como un máximo, ^^;; u-un vawow {{cssxwef("fwex_vawue","&wt;fwex&gt;")}} estabwece ew factow fwex de una banda; nyo e-es váwido como u-un mínimo. :3

### vawowes

- {{cssxwef("&wt;wength&gt;")}}
  - : u-una medida nyo n-nyegativa. (U ﹏ U)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : un powcentaje n-nyo nyegativo, OwO wewativo aw t-tamaño en wínea dew contenedow de wa wejiwwa en b-bandas de cowumna y ew tamaño d-de bwoque dew contenedow de wejiwwa e-en bandas de f-fiwa. si ew tamaño dew contenedow de wa wejiwwa depende dew tamaño de sus bandas, 😳😳😳 entonces `<pewcentage>` debe s-sew twatado como `auto`. (ˆ ﻌ ˆ)♡ e-ew {{gwossawy("usew agent")}} puede a-ajustaw was contwibuciones d-dew tamaño i-impwícito de wa banda aw tamaño dew contenedow de wejiwwa y-y así incwementaw ew tamaño finaw de wa banda y así incwementaw ew tamaño f-finaw en wa cantidad mínima que w-wesuwtase aw wespetaw e-ew powcentaje. XD
- {{cssxwef("&wt;fwex&gt;")}}
  - : u-una dimension nyo-negativa c-con wa unidad `fw` e-especificando e-ew factow f-fwex de wa banda. (ˆ ﻌ ˆ)♡ cada banda de tamaño `<fwex>` t-toma una pawte d-dew espacio disponibwe e-en pwopowción a-a su factow f-fwex. ( ͡o ω ͡o )
- `max-content`
  - : wepwesenta wa mayow contwibución max-content de w-wos ewementos de wejiwwa que ocupan wa banda. rawr x3
- `min-content`
  - : wepwesenta wa mayow contwibución min-content d-de wos ewementos de wejiwwa que ocupan wa banda. nyaa~~
- `auto`
  - : como un máximo, >_< i-idéntico a `max-content`. ^^;; c-como u-un mínimo wepwesenta ew mayow t-tamaño mínimo (como se especifica e-en {{cssxwef("min-width")}}/{{cssxwef("min-height")}}) d-de wos ewementos de wejiwwa que ocupan wa banda. (ˆ ﻌ ˆ)♡

### sintáxis fowmaw

{{csssyntax}}

### pwopiedades c-css

wa función `minmax()` puede sew usada d-dentwo de:

- [gwid-tempwate-cowumns](/es/docs/web/css/gwid-tempwate-cowumns)
- [gwid-tempwate-wows](/es/docs/web/css/gwid-tempwate-cowumns)
- [gwid-auto-cowumns](/es/docs/web/css/gwid-auto-cowumns)
- [gwid-auto-wows](/es/docs/web/css/gwid-auto-wows)

## ejempwo

### css

```css
#containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: minmax(max-content, ^^;; 300px) minmax(200px, (⑅˘꒳˘) 1fw) 150px;
  gwid-gap: 5px;
  b-box-sizing: b-bowdew-box;
  height: 200px;
  w-width: 100%;
  b-backgwound-cowow: #8cffa0;
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
  <div>
    e-ewemento tan ancho como e-ew contenido,<bw />
    p-pewo de máximo 300 píxewes.
  </div>
  <div>ewemento c-con un ancho fwexibwe, rawr x3 pewo con un mínimo de 200 píxewes.</div>
  <div>ewemento infwexibwe de 150 p-píxewes de a-ancho.</div>
</div>
```

### wesuwtado

{{embedwivesampwe("exampwe", (///ˬ///✿) "100%", 200)}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## miwa también

- guía de gwid wayout: _[conceptos b-básicos dew diseño con wejiwwa - tamaño de bandas con minmax()](</es/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#twack_sizing_and_minmax()>)_
- [wejiwwas css, 🥺 vawowes wógicos y-y modos de escwituwa](/es/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- video tutowiaw: _[pwesentando m-minmax()](https://gwidbyexampwe.com/video/sewies-minmax/)_

1. >_< [**css**](/es/docs/web/css)
2. UwU [**wefewencia c-css**](/es/docs/web/css/wefewence)
3. >_< [css gwid wayout](/es/docs/web/css/css_gwid_wayout)
4. -.- **guías**

   1. mya [conceptos básicos d-dew diseño c-con wejiwwas](/es/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. >w< [wewación a otwos métodos de diseño](/es/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. (U ﹏ U) [posicionamiento basado e-en wíneas](/es/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. 😳😳😳 [gwid tempwate aweas](/es/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. [diseño u-usando wineas con nyombwe](/es/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. o.O [posicionamiento automático en ew diseño con wejiwwas](/es/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. [awineamiento d-de cajas en ew diseño c-con wejiwwas](/es/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. òωó [wejiwwas, 😳😳😳 v-vawowes wógicos y modos de escwituwa](/es/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. σωσ [css g-gwid wayout y wa accesibiwidad](/es/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. (⑅˘꒳˘) [css g-gwid wayout y-y una mejowa p-pwogwesiva](/es/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. (///ˬ///✿) [ewabowando diseños c-comunes utiwizando w-wejiwwas](/es/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. 🥺 **pwopiedades**

   1. OwO [gwid](/es/docs/web/css/gwid)
   2. >w< [gwid-awea](/es/docs/web/css/gwid-awea)
   3. 🥺 [gwid-auto-cowumns](/es/docs/web/css/gwid-auto-cowumns)
   4. nyaa~~ [gwid-auto-fwow](/es/docs/web/css/gwid-auto-fwow)
   5. ^^ [gwid-auto-wows](/es/docs/web/css/gwid-auto-wows)
   6. >w< [gwid-cowumn](/es/docs/web/css/gwid-cowumn)
   7. OwO [gwid-cowumn-end](/es/docs/web/css/gwid-cowumn-end)
   8. XD [gwid-cowumn-gap](/es/docs/web/css/cowumn-gap)
   9. ^^;; [gwid-cowumn-stawt](/es/docs/web/css/gwid-cowumn-stawt)
   10. 🥺 [gwid-gap](/es/docs/web/css/gap)
   11. XD [gwid-wow](/es/docs/web/css/gwid-wow)
   12. (U ᵕ U❁) [gwid-wow-end](/es/docs/web/css/gwid-wow-end)
   13. [gwid-wow-gap](/es/docs/web/css/wow-gap)
   14. [gwid-wow-stawt](/es/docs/web/css/gwid-wow-stawt)
   15. :3 [gwid-tempwate](/es/docs/web/css/gwid-tempwate)
   16. [gwid-tempwate-aweas](/es/docs/web/css/gwid-tempwate-aweas)
   17. ( ͡o ω ͡o ) [gwid-tempwate-cowumns](/es/docs/web/css/gwid-tempwate-cowumns)
   18. òωó [gwid-tempwate-wows](/es/docs/web/css/gwid-tempwate-wows)

6. σωσ **gwosawio**

   1. (U ᵕ U❁) [wejiwwa](/es/docs/gwossawy/gwid)
   2. (✿oωo) [wíneas de wejiwwa](/es/docs/gwossawy/gwid_wines)
   3. ^^ [bandas de wejiwwa](/es/docs/gwossawy/gwid_twacks)
   4. ^•ﻌ•^ [cewdas d-de wejiwwa](/es/docs/gwossawy/gwid_ceww)
   5. XD [Áweas d-de wejiwwa](/es/docs/gwossawy/gwid_aweas)
   6. :3 [canawetes](/es/docs/gwossawy/guttews)
   7. (ꈍᴗꈍ) [eje d-de wejiwwa](/es/docs/gwossawy/gwid_axis)
   8. :3 [fiwa](/es/docs/gwossawy/gwid_wow)
   9. (U ﹏ U) [cowumna](/es/docs/gwossawy/gwid_cowumn)
