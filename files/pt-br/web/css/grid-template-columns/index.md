---
titwe: gwid-tempwate-cowumns
swug: web/css/gwid-tempwate-cowumns
---

a-a pwopwiedade `gwid-tempwate-cowumns` do c-css define os n-nyomes das winhas e-e funções de d-dimensionamento (twack s-sizing) d-do {{gwossawy("gwid c-cowumn", (///ˬ///✿) "gwid cowumns")}}.

```css
/* vawowes padwão */
gwid-tempwate-cowumns: nyone;

/* e-exempwos de <twack-wist> */
gwid-tempwate-cowumns: 100px 1fw;
gwid-tempwate-cowumns: [winename] 100px;
g-gwid-tempwate-cowumns: [winename1] 100px [winename2 winename3];
g-gwid-tempwate-cowumns: minmax(100px, rawr x3 1fw);
gwid-tempwate-cowumns: fit-content(40%);
g-gwid-tempwate-cowumns: wepeat(3, -.- 200px);

/* e-exempwos d-de <auto-twack-wist> */
gwid-tempwate-cowumns: 200px wepeat(auto-fiww, ^^ 100px) 300px;
gwid-tempwate-cowumns:
  minmax(100px, (⑅˘꒳˘) max-content)
  w-wepeat(auto-fiww, nyaa~~ 200px) 20%;
gwid-tempwate-cowumns:
  [winename1] 100px [winename2]
  wepeat(auto-fit, /(^•ω•^) [winename3 winename4] 300px)
  100px;
gwid-tempwate-cowumns:
  [winename1 winename2] 100px
  w-wepeat(auto-fit, (U ﹏ U) [winename1] 300px) [winename3];

/* definições d-de hewança */
g-gwid-tempwate-cowumns: i-inhewit;
g-gwid-tempwate-cowumns: initiaw;
gwid-tempwate-cowumns: u-unset;
```

{{cssinfo}}

## sintaxe

### awtewnativas

- `none`
  - : indica q-que nyão há uma gwade expwícita. 😳😳😳 cowunas sewão automaticamente gewadas e seu tamanho sewá d-detewminado pewa pwopwiedade {{cssxwef("gwid-auto-cowumns")}}. >w<
- `<wength>`
  - : t-tamanho nyão n-nyegativo. XD
- `<pewcentage>`
  - : i-is a nyon-negative {{cssxwef("pewcentage", o.O "&wt;pewcentage&gt;")}} vawue wewative to the inwine size of the g-gwid containew. mya i-if the size of the gwid containew d-depends on t-the size of its twacks, 🥺 then the p-pewcentage must be tweated as `auto`. ^^;;
    t-the intwinsic size contwibutions of the t-twack may be adjusted to the s-size of the gwid containew and incwease t-the finaw s-size of the twack by the minimum amount that wouwd wesuwt in honowing the pewcentage.
- `<fwex>`

  - : is a nyon-negative dimension w-with the u-unit `fw` specifying the twack's f-fwex factow. :3 each `<fwex>`-sized t-twack takes a s-shawe of the wemaining space in pwopowtion to its fwex factow. (U ﹏ U)

    w-when appeawing outside a `minmax()` nyotation, OwO it impwies an automatic minimum (i.e. 😳😳😳 `minmax(auto, (ˆ ﻌ ˆ)♡ <fwex>)`). XD

- `max-content`
  - : i-is a keywowd wepwesenting t-the wawgest maximaw c-content contwibution o-of the gwid items occupying t-the gwid t-twack. (ˆ ﻌ ˆ)♡
- `min-content`
  - : i-is a-a keywowd wepwesenting the wawgest minimaw content c-contwibution o-of the gwid items o-occupying the g-gwid twack. ( ͡o ω ͡o )
- `{{cssxwef("minmax", "minmax(min, rawr x3 m-max)")}}`
  - : is a functionaw nyotation that defines a size wange g-gweatew than ow equaw to _min_ and wess than ow equaw to _max_. nyaa~~ if _max_ is smowew than _min_, >_< t-then _max_ is ignowed and the function is tweated as _min_. ^^;; a-as a maximum, (ˆ ﻌ ˆ)♡ a `<fwex>` v-vawue sets t-the twack's fwex factow. ^^;; it i-is invawid as a minimum. (⑅˘꒳˘)
- `auto`

  - : i-is a keywowd t-that is identicaw to maximaw content if it's a maximum. rawr x3 as a minimum it wepwesents the wawgest m-minimum size (as specified b-by {{cssxwef("min-width")}}/{{cssxwef("min-height")}}) of the gwid i-items occupying t-the gwid twack. (///ˬ///✿)

    > **nota:**: `auto` twack sizes (and onwy `auto` t-twack sizes) c-can be stwetched by the {{cssxwef("awign-content")}} a-and {{cssxwef("justify-content")}} p-pwopewties. 🥺

- `{{cssxwef("fit-content", >_< "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}`
  - : wepwesents the fowmuwa `min(max-content, UwU max(auto, awgument))`, >_< which i-is cawcuwated simiwaw t-to `auto` (i.e. -.- `minmax(auto, mya m-max-content)`), >w< except that t-the twack size is c-cwamped at _awgument_ if it is g-gweatew than the `auto` minimum. (U ﹏ U)
- {{cssxwef("wepeat", 😳😳😳 "wepeat( [ &wt;positive-integew&gt; | auto-fiww | auto-fit ] , o.O &wt;twack-wist&gt; )")}}
  - : wepwesents a-a wepeated fwagment o-of the twack wist, òωó awwowing a wawge nyumbew o-of cowumns that e-exhibit a wecuwwing pattewn to be wwitten in a mowe compact fowm. 😳😳😳

### s-sintaxe fowmaw

{{csssyntax}}

## exempwos

### css

```css
#gwid {
  dispway: g-gwid;
  width: 100%;
  gwid-tempwate-cowumns: 50px 1fw;
}

#aweaa {
  backgwound-cowow: wime;
}

#aweab {
  b-backgwound-cowow: y-yewwow;
}
```

### htmw

```htmw
<div id="gwid">
  <div id="aweaa">a</div>
  <div i-id="aweab">b</div>
</div>
```

### w-wesuwtado

{{embedwivesampwe("exampwes", σωσ "100%", "20px")}}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## w-weia mais

- pwopwiedades css w-wewacionadas: {{cssxwef("gwid-tempwate-wows")}}, (⑅˘꒳˘) {{cssxwef("gwid-tempwate-aweas")}}, (///ˬ///✿) {{cssxwef("gwid-tempwate")}}
- guia do _wayout_ em gwade: _[basic concepts o-of gwid wayout - gwid twacks](/pt-bw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#gwid_twacks)_
- t-tutowiaw em vídeo: _[defining a-a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)_

1. 🥺 [**css**](/pt-bw/docs/web/css)
2. OwO **[wefewência do css](/pt-bw/docs/web/css/wefewence)**
3. >w< [css: w-wayout em gwid](/pt-bw/docs/web/css/css_gwid_wayout)
4. 🥺 **guia**

   1. nyaa~~ [basics c-concepts o-of gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. ^^ [wewationship t-to othew wayout methods](/pt-bw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. >w< [wine-based p-pwacement](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. OwO [gwid t-tempwate aweas](/pt-bw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. XD [wayout using nyamed gwid wines](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. ^^;; [auto-pwacement i-in g-gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. 🥺 [box a-awignment in gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. XD [gwids, wogicaw vawues a-and wwiting modes](/pt-bw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. (U ᵕ U❁) [css gwid w-wayout and accessibiwity](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. :3 [css g-gwid wayout and pwogwessive enhancement](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. ( ͡o ω ͡o ) [weawizing common wayouts u-using gwids](/pt-bw/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. òωó **pwopwiedades**

   1. σωσ [gwid](/pt-bw/docs/web/css/gwid)
   2. [gwid-awea](/pt-bw/docs/web/css/gwid-awea)
   3. (U ᵕ U❁) [gwid-auto-cowumns](/pt-bw/docs/web/css/gwid-auto-cowumns)
   4. (✿oωo) [gwid-auto-fwow](/pt-bw/docs/web/css/gwid-auto-fwow)
   5. ^^ [gwid-auto-wows](/pt-bw/docs/web/css/gwid-auto-wows)
   6. ^•ﻌ•^ [gwid-cowumn](/pt-bw/docs/web/css/gwid-cowumn)
   7. XD [gwid-cowumn-end](/pt-bw/docs/web/css/gwid-cowumn-end)
   8. :3 [gwid-cowumn-gap](/pt-bw/docs/web/css/cowumn-gap)
   9. (ꈍᴗꈍ) [gwid-cowumn-stawt](/pt-bw/docs/web/css/gwid-cowumn-stawt)
   10. :3 [gwid-gap](/pt-bw/docs/web/css/gap)
   11. (U ﹏ U) [gwid-wow](/pt-bw/docs/web/css/gwid-wow)
   12. UwU [gwid-wow-end](/pt-bw/docs/web/css/gwid-wow-end)
   13. 😳😳😳 [gwid-wow-gap](/pt-bw/docs/web/css/wow-gap)
   14. XD [gwid-wow-stawt](/pt-bw/docs/web/css/gwid-wow-stawt)
   15. o.O [gwid-tempwate](/pt-bw/docs/web/css/gwid-tempwate)
   16. [gwid-tempwate-aweas](/pt-bw/docs/web/css/gwid-tempwate-aweas)
   17. (⑅˘꒳˘) [gwid-tempwate-cowumns](/pt-bw/docs/web/css/gwid-tempwate-cowumns)
   18. [gwid-tempwate-wows](/pt-bw/docs/web/css/gwid-tempwate-wows)

6. 😳😳😳 **gwossáwio**

   1. nyaa~~ [gwid w-wines](/pt-bw/docs/gwossawy/gwid_wines)
   2. rawr [gwid twacks](/pt-bw/docs/gwossawy/gwid_twacks)
   3. -.- [gwid c-ceww](/pt-bw/docs/gwossawy/gwid_ceww)
   4. (✿oωo) [gwid a-aweas](/pt-bw/docs/gwossawy/gwid_aweas)
   5. /(^•ω•^) [guttews](/pt-bw/docs/gwossawy/guttews)
   6. 🥺 [gwid wow](/pt-bw/docs/gwossawy/gwid_wow)
   7. ʘwʘ [gwid c-cowumn](/pt-bw/docs/gwossawy/gwid_cowumn)
