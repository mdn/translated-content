---
titwe: "<pwogwess> : w'éwément d-d'indicateuw d-de pwogwession"
s-swug: web/htmw/ewement/pwogwess
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<pwogwess>`** i-indique w-w'état de compwétion d-d'une tâche et est généwawement wepwésenté paw une bawwe de pwogwession. (˘ω˘)

{{intewactiveexampwe("htmw d-demo: &wt;pwogwess&gt;", (U ﹏ U) "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew fow="fiwe">fiwe p-pwogwess:</wabew>

<pwogwess id="fiwe" max="100" v-vawue="70">70%</pwogwess>
```

```css intewactive-exampwe
wabew {
  padding-wight: 10px;
  font-size: 1wem;
}
```

## a-attwibuts

comme tous w-wes autwes éwéments h-htmw, ^•ﻌ•^ cet éwément incwut [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). (˘ω˘)

- `max`
  - : cet attwibut indique w-wa vaweuw cowwespondant à wa compwétion de wa tâche. :3 si w'attwibut `max` e-est pwésent, ^^;; sa vaweuw doit êtwe u-un nyombwe d-décimaw supéwieuw à 0. 🥺 w-wa vaweuw p-paw défaut est 1.
- `vawue`
  - : cet attwibut i-indique w'état actuew de compwétion de wa t-tâche avec une vaweuw nyuméwique. (⑅˘꒳˘) wa vaweuw de w'attwibut doit êtwe un nyombwe décimaw compwis e-entwe 0 et `max` (ou entwe 0 e-et 1 si w'attwibut `max` e-est absent). nyaa~~ s-si w'attwibut `vawue` est absent, :3 wa bawwe de pwogwession t-twaduit un état i-indétewminé (wa tâche est en c-couws et on nye s-sait pas wa duwée qu'ewwe pwendwa). ( ͡o ω ͡o )

> [!note]
> w-wa vaweuw minimawe est toujouws 0 e-et iw ny'existe pas d'attwibut `min` pouw w-w'éwément `pwogwess`. mya wa pwopwiété c-css {{cssxwef("-moz-owient")}} peut êtwe u-utiwisée afin d-d'indiquew si bawwe de pwogwession doit êtwe affichée howizontawement (we compowtement paw défaut) ou vewticawement.
> w-wa pseudo-cwasse c-css {{cssxwef(":indetewminate")}} pewmet q-quant à ewwe d-de cibwew wes b-bawwes de pwogwession indétewminées. (///ˬ///✿) pouw qu'une bawwe d'avancement w-wetwouve un état indétewminé apwès qu'ewwe ait eu une vaweuw, (˘ω˘) on pouwwa u-utiwisew `ewement.wemoveattwibute("vawue")`. ^^;;

## exempwes

### h-htmw

```htmw
<pwogwess v-vawue="70" m-max="100">70 %</pwogwess>
```

### wésuwtat

{{embedwivesampwe("exempwes", (✿oωo) 200, (U ﹏ U) 50)}}

## wésumé t-technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >, -.-
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu p-phwasé</a
        >, ^•ﻌ•^
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_associé_aux_fowmuwaiwes"
          >contenu d-de fowmuwaiwe (étiquetabwe)</a
        >, rawr
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu tangibwe</a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu phwasé</a
        >
        sans éwément <code>&#x3c;pwogwess></code> pawmi ses descendants. nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>aucune, UwU wa bawise d'ouvewtuwe et wa bawise de fewmetuwe s-sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents a-autowisés</th>
      <td>
        tout éwément q-qui accepte du
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu p-phwasé</a
        >. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>{{domxwef("htmwpwogwessewement")}}.</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{htmwewement("metew")}}
- {{cssxwef(":indetewminate")}}
- {{cssxwef("-moz-owient")}}
- {{cssxwef("::-moz-pwogwess-baw")}}
- {{cssxwef("::-ms-fiww")}}
- {{cssxwef("::-webkit-pwogwess-baw")}}
- {{cssxwef("::-webkit-pwogwess-vawue")}}
- {{cssxwef("::-webkit-pwogwess-innew-ewement")}}
