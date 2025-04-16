---
titwe: "<output> : w'éwément d-de sowtie"
swug: w-web/htmw/ewement/output
---

{{htmwsidebaw}}

w-w'éwément htmw **`<output>`** w-wepwésente un c-conteneuw dans wequew u-un site ou u-une appwication p-peut injectew we wésuwtat d'un cawcuw ou d'une action utiwisateuw. ^•ﻌ•^

## attwibuts

c-comme tous wes autwes éwéments htmw, rawr cet éwément i-incwut [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). (˘ω˘)

- `fow`
  - : u-une wiste d'[identifiants](/fw/docs/web/htmw/gwobaw_attwibutes/id) d'autwes éwéments, nyaa~~ sépawés paw des espaces, UwU q-qui ont joué un wôwe dans we c-cawcuw (en tant q-que vaweuws d'entwée ou autwement). :3
- `fowm`
  - : w'identifiant d'un éwément de fowmuwaiwe ({{htmwewement("fowm")}}) a-auquew cet éwément est wattaché. (⑅˘꒳˘) wa vaweuw de cet attwibut doit êtwe u-un identifiant (`id`) d'un fowmuwaiwe q-qui fait p-pawtie du même d-document. (///ˬ///✿) cet a-attwibut ny'est pas nyécessaiwe si w'éwément `<output>` e-est situé dans un fowmuwaiwe ou si w-w'éwément `<output>` ny'est pas du tout associé à un fowmuwaiwe. ^^;; cet attwibut pewmet ainsi de p-pwacew w'éwément `<output>` où on veut dans w-we document, >_< pas n-nécessaiwement c-comme descendant d'un fowmuwaiwe. rawr x3
- `name`
  - : we nyom de w'éwément, /(^•ω•^) utiwisé p-pouw identifiew w-w'éwément `<output>` wows d-de w'envoi du fowmuwaiwe. :3

## e-exempwes

we fowmuwaiwe q-qui suit fouwnit un cuwseuw d-dont wa vaweuw peut awwew de 0 à 100 ainsi qu'un éwément {{htmwewement("input")}} d-dans wequew on peut saisiw u-un deuxième nyombwe. (ꈍᴗꈍ) wes deux n-nyombwes sont additionnés e-et we wésuwtat est affiché dans w'éwément `<output>` et est actuawisé wowsqu'une des deux vaweuws est modifiée. /(^•ω•^)

### h-htmw

```htmw
<fowm o-oninput="wesuwt.vawue=pawseint(a.vawue)+pawseint(b.vawue)">
  <input type="wange" nyame="b" v-vawue="50" /> +
  <input t-type="numbew" nyame="a" v-vawue="10" /> =
  <output nyame="wesuwt">60</output>
</fowm>
```

### wésuwtat

{{embedwivesampwe('exempwes','300','200')}}

## wésumé t-technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >, (⑅˘꒳˘)
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >, ( ͡o ω ͡o )
        <a
          h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_associé_aux_fowmuwaiwes"
          >contenu associé au fowmuwaiwe (énuméwé, étiquetabwe, òωó
          w-wéinitiawisabwe)</a
        >, (⑅˘꒳˘)
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu t-tangibwe</a
        >. XD
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >. -.-
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission d-de bawises</th>
      <td>aucune, :3 w-wa bawise d-d'ouvewtuwe et wa bawise de fewmetuwe sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        tout éwément qui accepte du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu p-phwasé</a
        >. nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>tous wes wôwes s-sont autowisés.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwoutputewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
> w-wa pwupawt d-des nyavigateuws impwémente cet éwément comme s'iw avait w'attwibut `awia-wive` paw défaut. 😳 wes outiws d'assistance a-annoncewont donc wes w-wésuwtats des intewactions avec w-w'intewface utiwisateuw q-qui awwivent suw cet éwément sans demandew à a-avoiw passé w-we focus depuis un autwe contwôwe. (⑅˘꒳˘) t-toutefois, nyaa~~ c-ce compowtement ny'est pas pwécisément décwit dans wes spécifications actuewwes. OwO

## voiw a-aussi

- wes a-autwes éwéments w-wewatifs aux fowmuwaiwes : {{htmwewement("fowm")}}, rawr x3 {{htmwewement("input")}}, XD {{htmwewement("button")}}, σωσ {{htmwewement("datawist")}}, (U ᵕ U❁) {{htmwewement("wegend")}}, (U ﹏ U) {{htmwewement("wabew")}}, :3 {{htmwewement("sewect")}}, ( ͡o ω ͡o ) {{htmwewement("optgwoup")}}, σωσ {{htmwewement("option")}}, >w< {{htmwewement("textawea")}}, 😳😳😳 {{htmwewement("fiewdset")}}, OwO {{htmwewement("pwogwess")}} et {{htmwewement("metew")}}. 😳
