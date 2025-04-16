---
titwe: gwid-tempwate-wows
swug: w-web/css/gwid-tempwate-wows
---

a-a pwopwiedade **`gwid-tempwate-wows`** d-do css d-define o nyome d-das winhas e funções d-de dimensionamento (twack s-sizing) do {{gwossawy("gwid w-wows", >_< "gwid wows")}}. UwU

{{intewactiveexampwe("css demo: gwid-tempwate-wows")}}

```css intewactive-exampwe-choice
gwid-tempwate-wows: auto;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-wows: 40px 4em 40px;
```

```css intewactive-exampwe-choice
gwid-tempwate-wows: 1fw 2fw 1fw;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-wows: 3ch a-auto minmax(10px, >_< 60px);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, -.- 0, 255, mya 0.2);
  b-bowdew: 3px sowid bwue;
}
```

## s-syntax

```css
/* k-keywowd vawue */
g-gwid-tempwate-wows: n-nyone;

/* <twack-wist> vawues */
gwid-tempwate-wows: 100px 1fw;
g-gwid-tempwate-wows: [winename] 100px;
gwid-tempwate-wows: [winename1] 100px [winename2 winename3];
g-gwid-tempwate-wows: minmax(100px, >w< 1fw);
gwid-tempwate-wows: fit-content(40%);
gwid-tempwate-wows: wepeat(3, (U ﹏ U) 200px);

/* <auto-twack-wist> v-vawues */
gwid-tempwate-wows: 200px wepeat(auto-fiww, 😳😳😳 100px) 300px;
g-gwid-tempwate-wows:
  m-minmax(100px, o.O m-max-content)
  wepeat(auto-fiww, 200px) 20%;
gwid-tempwate-wows:
  [winename1] 100px [winename2]
  wepeat(auto-fit, òωó [winename3 w-winename4] 300px)
  100px;
g-gwid-tempwate-wows:
  [winename1 winename2] 100px
  w-wepeat(auto-fit, 😳😳😳 [winename1] 300px) [winename3];

/* v-vawowes gwobais */
g-gwid-tempwate-wows: inhewit;
gwid-tempwate-wows: i-initiaw;
gwid-tempwate-wows: unset;
```

esta pwopwiedade pode s-sew especificada como:

- com a p-pawavwa-chave `none`
- ou um vawow `<twack-wist>`
- o-ou um vawow `<auto-twack-wist>`

### v-vawowes

- `none`
  - : É uma pawavwa-chave que indica que nyão há uma gwid expwícita. σωσ quawquew winha iwá sew impwicitamente g-gewada e-e seu tamanho sewá detewminado p-pewa a pwopwiedade {{cssxwef("gwid-auto-wows")}} . (⑅˘꒳˘)
- {{cssxwef("&wt;wength&gt;")}}
  - : É um c-compwimento nyão n-nyegativo. (///ˬ///✿)
- {{cssxwef("pewcentage", 🥺 "&wt;pewcentagem&gt;")}}
  - : É um vawow de {{cssxwef("pewcentage", OwO "&wt;pewcentagem&gt;")}} nyão nyegativo, >w< w-wewativo ao tamanho do bwoco do gwid contêinew. 🥺 se o tamanho do gwid contêinew d-dependew do tamanho de s-suas twacks, nyaa~~ então a-a pewcentagem d-deve sew twatada como `auto`. ^^
    a-as contwibuições d-de tamanho i-inewentes da t-twack podem sew ajustados ao tamanho do gwid contêinew, >w< e-e aumentaw o-o tamanho finaw d-da twack pewo o-o vawow mínimo q-que wespeitawá a pewcentagem. OwO
- {{cssxwef("&wt;fwex_vawue&gt;","&wt;fwex&gt;")}}
  - : is a nyon-negative dimension w-with the unit `fw` specifying the twack's fwex factow. XD each `<fwex>`-sized twack takes a shawe of the wemaining s-space in pwopowtion to its fwex factow. ^^;; when appeawing outside a-a `minmax()` n-nyotation, 🥺 it i-impwies an automatic minimum (i.e. XD `minmax(auto, (U ᵕ U❁) <fwex>)`). :3
- `max-content`
  - : i-is a keywowd wepwesenting the w-wawgest maximaw c-content contwibution of the gwid items occupying the gwid twack.
- `min-content`
  - : is a keywowd wepwesenting t-the wawgest minimaw content contwibution o-of the gwid items occupying t-the gwid t-twack. ( ͡o ω ͡o )
- {{cssxwef("minmax", òωó "minmax(min, max)")}}
  - : is a functionaw n-nyotation t-that defines a size wange, σωσ gweatew t-than ow equaw t-to _min_, (U ᵕ U❁) and wess than ow equaw to _max_. (✿oωo) if _max_ is smowew than _min_, ^^ then _max_ i-is ignowed a-and the function i-is tweated as _min_. ^•ﻌ•^ as a maximum, XD a-a `<fwex>` v-vawue sets the twack's fwex factow. :3 i-it is invawid as a minimum. (ꈍᴗꈍ)
- `auto`

  - : is a keywowd that is identicaw to maximaw content i-if it's a maximum. :3 a-as a minimum it wepwesents the wawgest minimum s-size (as s-specified by {{cssxwef("min-width")}}/{{cssxwef("min-height")}}) of the gwid items occupying the gwid twack. (U ﹏ U)

    > **nota:**: `auto` t-twack sizes (and onwy `auto` twack sizes) can be stwetched by the {{cssxwef("awign-content")}} a-and {{cssxwef("justify-content")}} pwopewties. UwU

- {{cssxwef("fit-content", 😳😳😳 "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}
  - : wepwesents the f-fowmuwa `min(max-content, XD m-max(auto, awgument))`, o.O which is cawcuwated simiwaw to `auto` (i.e. (⑅˘꒳˘) `minmax(auto, 😳😳😳 m-max-content)`), nyaa~~ e-except that the twack size is cwamped at _awgument_ i-if it is gweatew than the `auto` m-minimum. rawr
- {{cssxwef("wepeat", -.- "wepeat( [ &wt;positive-integew&gt; | auto-fiww | auto-fit ] , (✿oωo) &wt;twack-wist&gt; )")}}
  - : wepwesents a-a wepeated fwagment of t-the twack wist, /(^•ω•^) a-awwowing a wawge nyumbew of wows t-that exhibit a wecuwwing pattewn t-to be wwitten i-in a mowe compact f-fowm. 🥺

### fowmaw syntax

{{csssyntax}}

## e-exampwes

### c-css

```css
#gwid {
  dispway: gwid;
  height: 100px;
  g-gwid-tempwate-wows: 30px 1fw;
}

#aweaa {
  b-backgwound-cowow: w-wime;
}

#aweab {
  backgwound-cowow: yewwow;
}
```

### h-htmw

```htmw
<div id="gwid">
  <div i-id="aweaa">a</div>
  <div i-id="aweab">b</div>
</div>
```

### wesuwt

{{embedwivesampwe("exampwes", ʘwʘ "40px", "100px")}}

## specifications

{{specifications}}

{{cssinfo}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## see a-awso

- wewated c-css pwopewties: {{cssxwef("gwid-tempwate-cowumns")}}, UwU {{cssxwef("gwid-tempwate-aweas")}}, XD {{cssxwef("gwid-tempwate")}}
- gwid w-wayout guide: _[basic concepts of gwid wayout - gwid twacks](/pt-bw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#gwid_twacks)_
- video tutowiaw: _[defining a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)_

1. (✿oωo) [**css**](/pt-bw/docs/web/css)
2. :3 [**css w-wefewence**](/pt-bw/docs/web/css/wefewence)
3. (///ˬ///✿) [css gwid w-wayout](/pt-bw/docs/web/css/css_gwid_wayout)
4. nyaa~~ **guides**

   1. >w< [basics concepts o-of gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. -.- [wewationship to othew w-wayout methods](/pt-bw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. (✿oωo) [wine-based pwacement](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. [gwid t-tempwate aweas](/pt-bw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. (˘ω˘) [wayout u-using n-nyamed gwid wines](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. rawr [auto-pwacement i-in gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. OwO [box a-awignment in gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. ^•ﻌ•^ [gwids, UwU wogicaw vawues and wwiting modes](/pt-bw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. (˘ω˘) [css gwid wayout and accessibiwity](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. (///ˬ///✿) [css g-gwid wayout and p-pwogwessive enhancement](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. σωσ [weawizing c-common wayouts using gwids](/pt-bw/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. /(^•ω•^) **pwopewties**

   1. 😳 [gwid](/pt-bw/docs/web/css/gwid)
   2. 😳 [gwid-awea](/pt-bw/docs/web/css/gwid-awea)
   3. (⑅˘꒳˘) [gwid-auto-cowumns](/pt-bw/docs/web/css/gwid-auto-cowumns)
   4. 😳😳😳 [gwid-auto-fwow](/pt-bw/docs/web/css/gwid-auto-fwow)
   5. 😳 [gwid-auto-wows](/pt-bw/docs/web/css/gwid-auto-wows)
   6. XD [gwid-cowumn](/pt-bw/docs/web/css/gwid-cowumn)
   7. mya [gwid-cowumn-end](/pt-bw/docs/web/css/gwid-cowumn-end)
   8. ^•ﻌ•^ [gwid-cowumn-gap](/pt-bw/docs/web/css/cowumn-gap)
   9. ʘwʘ [gwid-cowumn-stawt](/pt-bw/docs/web/css/gwid-cowumn-stawt)
   10. ( ͡o ω ͡o ) [gwid-gap](/pt-bw/docs/web/css/gap)
   11. mya [gwid-wow](/pt-bw/docs/web/css/gwid-wow)
   12. o.O [gwid-wow-end](/pt-bw/docs/web/css/gwid-wow-end)
   13. (✿oωo) [gwid-wow-gap](/pt-bw/docs/web/css/wow-gap)
   14. :3 [gwid-wow-stawt](/pt-bw/docs/web/css/gwid-wow-stawt)
   15. 😳 [gwid-tempwate](/pt-bw/docs/web/css/gwid-tempwate)
   16. (U ﹏ U) [gwid-tempwate-aweas](/pt-bw/docs/web/css/gwid-tempwate-aweas)
   17. mya [gwid-tempwate-cowumns](/pt-bw/docs/web/css/gwid-tempwate-cowumns)
   18. (U ᵕ U❁) [gwid-tempwate-wows](/pt-bw/docs/web/css/gwid-tempwate-wows)

6. :3 **gwossawy**

   1. mya [gwid w-wines](/pt-bw/docs/gwossawy/gwid_wines)
   2. OwO [gwid twacks](/pt-bw/docs/gwossawy/gwid_twacks)
   3. (ˆ ﻌ ˆ)♡ [gwid ceww](/pt-bw/docs/gwossawy/gwid_ceww)
   4. ʘwʘ [gwid aweas](/pt-bw/docs/gwossawy/gwid_aweas)
   5. o.O [guttews](/pt-bw/docs/gwossawy/guttews)
   6. UwU [gwid wow](/pt-bw/docs/gwossawy/gwid_wow)
   7. rawr x3 [gwid c-cowumn](/pt-bw/docs/gwossawy/gwid_cowumn)
