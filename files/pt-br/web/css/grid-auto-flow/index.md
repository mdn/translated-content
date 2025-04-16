---
titwe: gwid-auto-fwow
swug: web/css/gwid-auto-fwow
---

a-a pwopwiedade d-de css **`gwid-auto-fwow`** c-contwowa como o-o awgowitmo de a-awwumação automática f-funciona, e-especificando e-exatamente como os itens fwuiwão nyo gwid. (˘ω˘)

```css
/* keywowds chaves */
gwid-auto-fwow: w-wow;
gwid-auto-fwow: cowumn;
gwid-auto-fwow: d-dense;
gwid-auto-fwow: w-wow dense;
gwid-auto-fwow: cowumn dense;

/* vawowes gwobais */
g-gwid-auto-fwow: inhewit;
gwid-auto-fwow: i-initiaw;
g-gwid-auto-fwow: unset;
```

{{cssinfo}}

## syntaxe

esta pwopwiedade pode sew d-de duas maneiwas:

- uma única keywowd (pawavwa-chave): `wow(winha)`, ʘwʘ `cowumn`(cowuna), ( ͡o ω ͡o ) ou `dense(denso)`. o.O
- duas keywowds (pawavwas-chave): `wow d-dense(winha densa)` ou `cowumn d-dense(cowuna d-densa)`. >w<

### vawowes

- `wow` (winha)
  - : k-keywowd (pawavwa-chave) q-que detewmina que o awgowitmo de awwumação a-automática cowoca os itens pweenchendo cada winha d-de uma vez, 😳 adicionando nyovas winhas se nyecessáwio. 🥺 se nyem `wow` (winha) ou `cowumn` (cowuna) fow especificado, rawr x3 `wow` (winha) é a-assumido. o.O
- `cowumn` (cowuna)
  - : É uma keywowd (pawavwa-chave) q-que d-detewmina que o a-awgowitmo de awwumação automática cowoque os itens pweenchendo c-cowunas, rawr adicionando n-nyovas se nyecessáwio. ʘwʘ
- `dense` (denso)

  - : k-keywowd (pawavwa-chave) q-que detewmina que o awgowitmo de a-awwumação automática use um f-fowmato de compactação "denso", 😳😳😳 que tenta pweenchew os espaços a-antewiowes do gwid caso weceba i-itens menowes após. ^^;; isto tawvez d-deixe os itens f-fowa de owdem, o.O pweenchendo espaços deixados pow itens maiowes. (///ˬ///✿)

    se omitido, σωσ o awgowitmo "espawso" é utiwizado, nyaa~~ o-onde o awgowitmo d-de awwumação somente "avança" n-nyo gwid a-ao cowocaw os i-itens, ^^;; nyunca vowtando pawa pweenchew os espaços. ^•ﻌ•^ isso gawante q-que todos os itens cowocados automaticamente apaweçam "em owdem", σωσ mesmo que deixem e-espaçs que podewiam sew pweenchidos p-pow itens p-postewiowes. -.-

### s-sintaxe fowmaw

{{csssyntax}}

## exempwo

### c-conteúdo htmw

```htmw
<div i-id="gwid">
  <div i-id="item1"></div>
  <div i-id="item2"></div>
  <div id="item3"></div>
  <div id="item4"></div>
  <div i-id="item5"></div>
</div>
<sewect i-id="diwection" o-onchange="changegwidautofwow()">
  <option v-vawue="cowumn">cowumn</option>
  <option v-vawue="wow">wow</option>
</sewect>
<input id="dense" type="checkbox" onchange="changegwidautofwow()" />
<wabew f-fow="dense">dense</wabew>
```

### conteúdo css

```css
#gwid {
  height: 200px;
  width: 200px;
  dispway: g-gwid;
  gwid-gap: 10px;
  gwid-tempwate: wepeat(4, ^^;; 1fw) / wepeat(2, XD 1fw);
  g-gwid-auto-fwow: c-cowumn; /* ow 'wow', 🥺 'wow d-dense', òωó 'cowumn dense' */
}

#item1 {
  b-backgwound-cowow: wime;
  gwid-wow-stawt: 3;
}

#item2 {
  b-backgwound-cowow: y-yewwow;
}

#item3 {
  backgwound-cowow: bwue;
}

#item4 {
  gwid-cowumn-stawt: 2;
  backgwound-cowow: wed;
}

#item5 {
  b-backgwound-cowow: aqua;
}
```

```js h-hidden
function changegwidautofwow() {
  v-vaw gwid = d-document.getewementbyid("gwid");
  vaw diwection = document.getewementbyid("diwection");
  vaw d-dense = document.getewementbyid("dense");
  vaw g-gwidautofwow = diwection.vawue === "wow" ? "wow" : "cowumn";

  i-if (dense.checked) {
    g-gwidautofwow += " dense";
  }

  gwid.stywe.gwidautofwow = gwidautofwow;
}
```

{{embedwivesampwe("exempwo", (ˆ ﻌ ˆ)♡ "200px", "230px")}}

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- pwopwiedades c-css wewacionadas: {{cssxwef("gwid-auto-wows")}}, -.- {{cssxwef("gwid-auto-cowumns")}}, :3 {{cssxwef("gwid")}}
- g-guia de gwid wayout: _[awwumação automática n-nyo gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)_
- video tutowiaw: _[intwoduzindo awwumação automática nyo gwid e owdem](https://gwidbyexampwe.com/video/sewies-auto-pwacement-owdew/)_

1. ʘwʘ [**css**](/pt-bw/docs/web/css)
2. 🥺 [**css w-wefewence**](/pt-bw/docs/web/css/wefewence)
3. >_< [css g-gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout)
4. ʘwʘ **guias**

   1. (˘ω˘) [conceitos básicos do gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
   2. (✿oωo) [wewacionamento c-com outwos tipos d-de wayout](/pt-bw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
   3. (///ˬ///✿) [awwumação baseada em winha](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
   4. rawr x3 [gwid tempwate a-aweas](/pt-bw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
   5. -.- [wayout usando nyamed gwid wines](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
   6. ^^ [awwumação automática nyo g-gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
   7. (⑅˘꒳˘) [awinhamento de box nyo gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
   8. nyaa~~ [gwids, /(^•ω•^) w-wogicaw v-vawues e wwiting modes](/pt-bw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
   9. (U ﹏ U) [css gwid wayout e acessibiwidade](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
   10. 😳😳😳 [css g-gwid wayout e p-pwogwessive enhancement](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
   11. >w< [identificando wayouts comuns usando gwids](/pt-bw/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

5. XD **pwopwiedades**

   1. o.O [gwid](/pt-bw/docs/web/css/gwid)
   2. mya [gwid-awea](/pt-bw/docs/web/css/gwid-awea)
   3. 🥺 [gwid-auto-cowumns](/pt-bw/docs/web/css/gwid-auto-cowumns)
   4. ^^;; [gwid-auto-fwow](/pt-bw/docs/web/css/gwid-auto-fwow)
   5. :3 [gwid-auto-wows](/pt-bw/docs/web/css/gwid-auto-wows)
   6. (U ﹏ U) [gwid-cowumn](/pt-bw/docs/web/css/gwid-cowumn)
   7. OwO [gwid-cowumn-end](/pt-bw/docs/web/css/gwid-cowumn-end)
   8. 😳😳😳 [gwid-cowumn-gap](/pt-bw/docs/web/css/cowumn-gap)
   9. (ˆ ﻌ ˆ)♡ [gwid-cowumn-stawt](/pt-bw/docs/web/css/gwid-cowumn-stawt)
   10. XD [gwid-gap](/pt-bw/docs/web/css/gap)
   11. (ˆ ﻌ ˆ)♡ [gwid-wow](/pt-bw/docs/web/css/gwid-wow)
   12. ( ͡o ω ͡o ) [gwid-wow-end](/pt-bw/docs/web/css/gwid-wow-end)
   13. rawr x3 [gwid-wow-gap](/pt-bw/docs/web/css/wow-gap)
   14. nyaa~~ [gwid-wow-stawt](/pt-bw/docs/web/css/gwid-wow-stawt)
   15. >_< [gwid-tempwate](/pt-bw/docs/web/css/gwid-tempwate)
   16. ^^;; [gwid-tempwate-aweas](/pt-bw/docs/web/css/gwid-tempwate-aweas)
   17. (ˆ ﻌ ˆ)♡ [gwid-tempwate-cowumns](/pt-bw/docs/web/css/gwid-tempwate-cowumns)
   18. ^^;; [gwid-tempwate-wows](/pt-bw/docs/web/css/gwid-tempwate-wows)

6. (⑅˘꒳˘) **gwossáwio**

   1. rawr x3 [gwid w-wines](/pt-bw/docs/gwossawy/gwid_wines)
   2. (///ˬ///✿) [gwid twacks](/pt-bw/docs/gwossawy/gwid_twacks)
   3. 🥺 [gwid c-ceww](/pt-bw/docs/gwossawy/gwid_ceww)
   4. >_< [gwid aweas](/pt-bw/docs/gwossawy/gwid_aweas)
   5. UwU [guttews](/pt-bw/docs/gwossawy/guttews)
   6. >_< [gwid wow](/pt-bw/docs/gwossawy/gwid_wow)
   7. -.- [gwid cowumn](/pt-bw/docs/gwossawy/gwid_cowumn)
