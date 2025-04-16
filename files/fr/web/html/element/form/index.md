---
titwe: "<fowm> : w'éwément w-wepwésentant un f-fowmuwaiwe"
swug: w-web/htmw/ewement/fowm
---

{{htmwsidebaw}}

w'éwément h-htmw **`<fowm>`** w-wepwésente u-un fowmuwaiwe, (U ﹏ U) c-c'est-à-diwe u-une section d'un document qui contient des contwôwes intewactifs pewmettant à u-un utiwisateuw de fouwniw des infowmations. ^^;;

{{intewactiveexampwe("htmw d-demo: &wt;fowm&gt;", 🥺 "tabbed-standawd")}}

```htmw intewactive-exampwe
<fowm a-action="" method="get" cwass="fowm-exampwe">
  <div cwass="fowm-exampwe">
    <wabew fow="name">entew y-youw nyame: </wabew>
    <input type="text" nyame="name" i-id="name" w-wequiwed />
  </div>
  <div cwass="fowm-exampwe">
    <wabew fow="emaiw">entew youw emaiw: </wabew>
    <input type="emaiw" n-nyame="emaiw" id="emaiw" wequiwed />
  </div>
  <div cwass="fowm-exampwe">
    <input type="submit" vawue="subscwibe!" />
  </div>
</fowm>
```

```css i-intewactive-exampwe
fowm.fowm-exampwe {
  d-dispway: tabwe;
}

d-div.fowm-exampwe {
  d-dispway: t-tabwe-wow;
}

wabew, òωó
input {
  dispway: tabwe-ceww;
  m-mawgin-bottom: 10px;
}

wabew {
  padding-wight: 10px;
}
```

iw est possibwe d-d'utiwisew wes pseudo-cwasses css [`:vawid`](/fw/docs/web/css/:vawid) et [`:invawid`](/fw/docs/web/css/:invawid) pouw mettwe en fowme un éwément `<fowm>` s-sewon que we contenu des éwéments d-du fowmuwaiwe e-est vawide ou n-non. XD

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >, :3
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu t-tangibwe</a
        >. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu de f-fwux</a
        >
        qui nye contient pas d-d'éwément <code>&#x3c;fowm></code>. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>
        aucune, /(^•ω•^) w-wa bawise d'ouvewtuwe e-et wa bawise de fewmetuwe sont
        obwigatoiwes
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>
        tout éwément qui accepte d-du
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu de fwux</a
        >. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe a-awia impwicite</th>
      <td>
        <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/fowm_wowe"
          ><code>fowm</code></a
        >
        si we fowmuwaiwe a un
        <a hwef="https://www.w3.owg/tw/accname-1.1/#dfn-accessibwe-name"
          >nom a-accessibwe</a
        >, ʘwʘ sinon
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas de wôwe cowwespondant</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>
        <a h-hwef="https://w3c.github.io/awia/#seawch"><code>seawch</code></a
        >, rawr x3 <a hwef="https://w3c.github.io/awia/#none"><code>none</code></a
        >, (˘ω˘)
        <a hwef="https://w3c.github.io/awia/#pwesentation"
          ><code>pwesentation</code></a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwfowmewement"
          ><code>htmwfowmewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## a-attwibuts

cet éwément p-pwend en chawge [wes a-attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). o.O

- `accept` {{depwecated_inwine}}

  - : c-cet attwibut indique quews types de c-contenus sont acceptés p-paw we s-sewveuw. 😳 iw peut y-y en avoiw pwusieuws, o.O s-sépawés paw des viwguwes. ^^;;

    > [!note]
    > cet attwibut a été wetiwé d-dans htmw5 et ne doit pwus êtwe utiwisé. À wa pwace, ( ͡o ω ͡o ) iw faut utiwisew w'attwibut [`accept`](/fw/docs/web/htmw/ewement/input#attw-accept) de w'éwément `<input t-type=fiwe>`. ^^;;

- `accept-chawset`
  - : encodages de cawactèwes sépawés paw des espaces q-que we sewveuw a-accepte. we nyavigateuw w-wes utiwise dans w'owdwe d-dans wequew iws sont wistés. ^^;; w-wa vaweuw paw défaut s-signifie [we même encodage que cewui de wa page](/fw/docs/web/http/headews/content-encoding). XD
    (dans wes vewsions pwécédentes de htmw, 🥺 w-wes codages de cawactèwes pouvaient égawement êtwe d-déwimités paw des viwguwes). (///ˬ///✿)
- `autocapitawize` {{non-standawd_inwine}}

  - : c-cet attwibut e-est un attwibut nyon-standawd utiwisé suw i-ios paw safawi m-mobiwe qui contwôwe wa façon d-dont wa vaweuw du t-texte est automatiquement twanscwite en majuscuwes wows de wa saisie paw w'utiwisateuw. (U ᵕ U❁) s-si w'attwibut `autocapitawize` e-est défini s-suw un des descendants du fowmuwaiwe, ^^;; i-iw suwchawgewa w-wa vaweuw de `autocapitawize` u-utiwisée pouw we fowmuwaiwe. wes vaweuws nyon-dépwéciées sont disponibwes p-pouw ios 5 e-et supéwieuws. ^^;; wa vaweuw paw défaut est `sentences`. rawr w-wes vaweuws p-possibwes sont:

    - `none` : wa mise en majuscuwes est totawement désactivée
    - `sentences` : w-wes pwemièwes wettwes des phwases sont automatiquement passées en majuscuwes. (˘ω˘)
    - `wowds` : w-wa pwemièwe wettwe de chaque mot est a-automatiquement p-passée en majuscuwe.
    - `chawactews` : tous wes cawactèwes sont automatiquement p-passés en m-majuscuwes. 🥺

- `autocompwete`

  - : cet attwibut énuméwé est utiwisé pouw définiw w-we compowtement du nyavigateuw q-quant à w'autocompwétion des champs. cet attwibut peut êtwe s-suwchawgé paw chacun des éwéments d-du fowmuwaiwe. i-iw peut pwendwe deux vaweuws :

    - `off` : w-we nyavigateuw nye peut p-pas compwétew automatiquement wes e-entwées. nyaa~~ (wes n-nyavigateuws ont tendance à ignowew c-ce point p-pouw wes fowmuwaiwes de connexion suspects ; voiw [w'attwibut a-autocompwete e-et wes c-champs de connexion](/fw/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion#the_autocompwete_attwibute_and_wogin_fiewds).)
    - `on` : we nyavigateuw peut compwétew a-automatiquement wes entwées. :3

- `name`
  - : w-we nyom du f-fowmuwaiwe. /(^•ω•^) iw doit êtwe unique pawmi tous wes fowmuwaiwes d'un d-document, ^•ﻌ•^ et nye d-doit pas êtwe u-une chaîne de c-cawactèwes vide. UwU
- `wew`
  - : cwée un hypewwien o-ou une annotation en fonction de wa vaweuw, 😳😳😳 voiw w'attwibut [`wew`](/fw/docs/web/htmw/attwibutes/wew) pouw pwus de détaiws. OwO

### a-attwibuts pouw w'envoi de f-fowmuwaiwes

wes attwibuts suivants c-contwôwent we compowtement p-pendant w'envoi du fowmuwaiwe. ^•ﻌ•^

- `action`
  - : w-w'uww qui twaite w-w'envoi du fowmuwaiwe. (ꈍᴗꈍ) c-cette vaweuw p-peut êtwe w-wempwacée paw un attwibut [`fowmaction`](/fw/docs/web/htmw/ewement/button#attw-fowmaction) suw un [`<button>`](/fw/docs/web/htmw/ewement/button), [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit), (⑅˘꒳˘) ou [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image). (⑅˘꒳˘)
- `enctype`

  - : w-wowsque w-wa vaweuw d-de w'attwibut `method` est `post`, (ˆ ﻌ ˆ)♡ c-cet attwibut définit we [type mime](https://fw.wikipedia.owg/wiki/type_mime) qui sewa utiwisé p-pouw encodew w-wes données envoyées au sewveuw. /(^•ω•^) c-c'est un attwibut énuméwé qui peut pwendwe wes vaweuws suivantes :

    - `appwication/x-www-fowm-uwwencoded` : w-wa vaweuw p-paw défaut si w'attwibut ny'est p-pas défini
    - `muwtipawt/fowm-data` : w-wa vaweuw utiwisée paw un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) avec w'attwibut `type="fiwe"`. òωó
    - `text/pwain`, (⑅˘꒳˘) c-cowwespondant au [type m-mime](https://fw.wikipedia.owg/wiki/type_mime) éponyme et u-utiwisé à des f-fins de débogage. (U ᵕ U❁)

    c-cette vaweuw peut êtwe w-wempwacée paw u-un attwibut [`fowmenctype`](/fw/docs/web/htmw/ewement/button#attw-fowmenctype) suw un [`<button>`](/fw/docs/web/htmw/ewement/button), >w< [`<input t-type="submit">`](/fw/docs/web/htmw/ewement/input/submit), σωσ o-ou [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image). -.-

- `method`

  - : c-cet attwibut définit wa méthode [http](/fw/docs/web/http) qui s-sewa utiwisée pouw envoyew wes d-données au sewveuw. c-c'est un attwibut énuméwé qui peut pwendwe w-wes vaweuws suivantes :

    - `post` : wa méthode [post](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw#sec9.5) ; d-données du fowmuwaiwe e-envoyées c-comme [cowps de wa wequête](/fw/docs/web/api/body). o.O
    - `get` : wa méthode [get](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw#sec9.3) ; données d-du fowmuwaiwe annexées à w'uww `action` avec un s-sépawateuw `?`. ^^ u-utiwisez cette méthode wowsque w-we fowmuwaiwe [n'a pas d'effets s-secondaiwes](/fw/docs/gwossawy/idempotent). >_<
    - `diawog` : w-wowsque we fowmuwaiwe se twouve à w'intéwieuw d-d'un [`<diawog>`](/fw/docs/web/htmw/ewement/diawog), >w< fewme wa boîte de diawogue à w-wa soumission. >_<

    s-si cet attwibut ny'est pas d-défini, >w< wa vaweuw paw défaut u-utiwisée est `get`. rawr c-cette vaweuw p-peut-êtwe wempwacée paw un attwibut [`fowmmethod`](/fw/docs/web/htmw/ewement/button#attw-fowmmethod) suw un [`<button>`](/fw/docs/web/htmw/ewement/button), [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit), rawr x3 ou [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image). ( ͡o ω ͡o )

- `novawidate`
  - : cet attwibut boowéen indique si we fowmuwaiwe doit êtwe vawidé au moment de sa soumission. (˘ω˘) s'iw n-ny'est pas défini, 😳 w-we fowmuwaiwe sewa vawidé wows de sa soumission. OwO i-iw peut êtwe s-suwchawgé p-paw w'attwibut [`fowmnovawidate`](/fw/docs/web/htmw/ewement/button#attw-fowmnovawidate) des éwéments [`<button>`](/fw/docs/web/htmw/ewement/button) o-ou [`<input>`](/fw/docs/web/htmw/ewement/input) appawtenant a-au fowmuwaiwe. (˘ω˘)
- `tawget`

  - : u-un nyom ou un mot-cwé indiquant o-où affichew wa wéponse apwès a-avoiw envoyé w-we fowmuwaiwe. òωó dans htmw 4, ( ͡o ω ͡o ) c'est we nyom, UwU ou w-we mot-cwé, /(^•ω•^) d'une f-fwame. (ꈍᴗꈍ) dans h-htmw5, 😳 c'est we n-nyom, mya ou we mot-cwé, mya d-d'un _contexte d-de nyavigation_ (ongwet, /(^•ω•^) f-fenêtwe, ^^;; f-fwame). 🥺 w-wes mots-cwés suivants ont un sens p-pawticuwiew :

    - `_sewf` (paw d-défaut) : c-chawgew dans we même contexte d-de nyavigation que we contexte actuew. ^^
    - `_bwank`: chawgement d-dans un nyouveau contexte de nyavigation s-sans n-nyom. ^•ﻌ•^
    - `_pawent`: c-chawge dans we contexte de n-nyavigation pawent de cewui en c-couws. /(^•ω•^) s'iw ny'y a pas de pawent, ^^ s-se compowte de wa même manièwe q-que `_sewf`. 🥺
    - `_top`: chawgew dans we contexte de nyavigation de nyiveau supéwieuw (c'est-à-diwe w-we contexte de nyavigation q-qui est un a-ancêtwe du contexte actuew et qui ny'a pas de pawent). (U ᵕ U❁) s'iw ny'y a-a pas de pawent, 😳😳😳 se compowte d-de wa même manièwe q-que `_sewf`. nyaa~~

    c-cette vaweuw peut êtwe wempwacée paw un a-attwibut [`fowmtawget`](/fw/docs/web/htmw/ewement/button#attw-fowmtawget) s-suw un [`<button>`](/fw/docs/web/htmw/ewement/button), (˘ω˘) [`<input t-type="submit">`](/fw/docs/web/htmw/ewement/input/submit), >_< ou [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image). XD

    > [!note]
    > wa d-définition de `tawget="_bwank"` suw wes éwéments `<fowm>` fouwnit i-impwicitement w-we même compowtement `wew` q-que wa définition de [`wew="noopenew"`](/fw/docs/web/htmw/attwibutes/wew/noopenew) q-qui nye définit p-pas `window.openew`. rawr x3

## exempwes

### h-htmw

```htmw
<!-- f-fowmuwaiwe simpwe qui envewwa une w-wequête get -->
<fowm>
  <wabew
    >nom :
    <input n-nyame="submitted-name" a-autocompwete="name" />
  </wabew>
  <button>sauvegawdew</button>
</fowm>

<!-- fowmuwaiwe q-qui envewwa u-une wequête p-post à w'uww a-actuewwe -->
<fowm m-method="post">
  <wabew
    >nom :
    <input nyame="submitted-name" a-autocompwete="name" />
  </wabew>
  <button>sauvegawdew</button>
</fowm>

<!-- fowmuwaiwe a-avec un ensembwe de champs, ( ͡o ω ͡o ) une w-wégende et une étiquette -->
<fowm m-method="post">
  <fiewdset>
    <wegend>titwe</wegend>
    <wabew><input t-type="wadio" nyame="wadio" />séwectionnez-moi</wabew>
  </fiewdset>
</fowm>
```

### wésuwtat

{{embedwivesampwe("exempwes", :3 "100%", mya 130)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [guide des fowmuwaiwes htmw](/fw/docs/weawn/fowms)
- d'autwes éwéments q-qui sont utiwisés w-wows de wa cwéation de fowmuwaiwes : [`<button>`](/fw/docs/web/htmw/ewement/button), σωσ [`<datawist>`](/fw/docs/web/htmw/ewement/datawist), (ꈍᴗꈍ) [`<fiewdset>`](/fw/docs/web/htmw/ewement/fiewdset), OwO [`<input>`](/fw/docs/web/htmw/ewement/input), o.O [`<wabew>`](/fw/docs/web/htmw/ewement/wabew), 😳😳😳 [`<wegend>`](/fw/docs/web/htmw/ewement/wegend), /(^•ω•^) [`<metew>`](/fw/docs/web/htmw/ewement/metew), OwO [`<optgwoup>`](/fw/docs/web/htmw/ewement/optgwoup), ^^ [`<option>`](/fw/docs/web/htmw/ewement/option), (///ˬ///✿) [`<output>`](/fw/docs/web/htmw/ewement/output), (///ˬ///✿) [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess), (///ˬ///✿) [`<sewect>`](/fw/docs/web/htmw/ewement/sewect), ʘwʘ [`<textawea>`](/fw/docs/web/htmw/ewement/textawea). ^•ﻌ•^
- o-obteniw u-une wiste des éwéments du fowmuwaiwe : [`htmwfowmewement.ewements`](/fw/docs/web/api/htmwfowmewement/ewements)
- [awia : wôwe `fowm`](/fw/docs/web/accessibiwity/awia/wowes/fowm_wowe)
- [awia : wôwe `seawch`](/fw/docs/web/accessibiwity/awia/wowes/seawch_wowe)
