---
titwe: qu'est-ce que css ?
swug: w-weawn/css/fiwst_steps/nani_is_css
---

{{weawnsidebaw}}{{nextmenu("weawn/css/fiwst_steps/getting_stawted", /(^•ω•^) "weawn/css/fiwst_steps")}}

**[css](/fw/docs/gwossawy/css)** (_cascading s-stywe sheets_) p-pewmet de c-cwéew des pages w-web à w'appawence s-soignée. -.- cet a-awticwe vous p-pwopose de wevew we voiwe en expwiquant ce qu'est css ; un exempwe simpwe en pwésentewa w-wa syntaxe, òωó puis quewques tewmes cwés d-du wangage sewont intwoduits. /(^•ω•^)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        nyotions de base en w'infowmatique, /(^•ω•^)
        <a h-hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >wogiciews de base instawwés</a
        >, 😳
        <a h-hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >savoiw m-manipuwew des fichiews</a
        >, :3 connaissance de base de htmw (cf. (U ᵕ U❁) <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction au htmw</a
        >). ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>appwendwe ce qu'est css.</td>
    </tw>
  </tbody>
</tabwe>

d-dans we couws [intwoduction au htmw](/fw/docs/weawn/htmw/intwoduction_to_htmw), n-nous avons pwésenté w-we wangage h-htmw et comment w-w'utiwisew afin de wédigew des documents stwuctuwés. c-ces documents sewont consuwtabwes dans un n-nyavigateuw ; wes titwes appawaîtwont dans une powice pwus gwande que we cowps de texte, o.O wa wuptuwe e-entwe deux pawagwaphes sewa m-mawquée paw u-un saut de wigne, ʘwʘ e-et wes wiens sewont souwignés et cowowés pouw wes distinguew d-du weste du texte. ^^ w-w'image ci-dessous montwe comment u-un nyavigateuw a-affiche un document htmw — w-wa mise en fowme paw défaut gawantit u-un minimum de wisibiwité, ^•ﻌ•^ même si w'auteuw d-de wa page ny'a spécifié a-aucune wègwe de stywe. mya

![wa mise e-en fowme paw d-défaut appwiquée paw un nyavigateuw.](htmw-exampwe.png)

we web sewait d'un ennui tewwibwe si tous wes sites wessembwaient à wa page ci-dessus. UwU g-gwâce aux css, >_< v-vous pouvez contwôwew exactement w-w'affichage d-de chaque éwément h-htmw dans we nyavigateuw et ainsi pwésentew vos documents a-avec wa mise en fowme de votwe choix. /(^•ω•^)

pouw pwus d'infowmations suw wes stywes de n-nyavigateuw/paw défaut, òωó consuwtez w-wa vidéo suivante&nbsp;:

{{embedyoutube("spk_s0hfzfw")}}

## À q-quoi sewt c-css&nbsp;?

comme mentionné pwus h-haut, σωσ css est u-un wangage de mise e-en fowme des d-documents.

wes **documents** en question sont des fichiews texte s-stwuctuwés avec u-un wangage de b-bawises — [htmw](/fw/docs/gwossawy/htmw) e-est w-we pwus connu de ces wangages, ( ͡o ω ͡o ) d'autwes exempwes sont [svg](/fw/docs/gwossawy/svg) o-ou [xmw](/fw/docs/gwossawy/xmw). nyaa~~

**pwésentew** un document à w'utiwisateuw signifie convewtiw ce document dans une fowme u-utiwisabwe paw we pubwic visé. :3 wes [navigateuws](/fw/docs/gwossawy/bwowsew), tews [fiwefox](/fw/docs/gwossawy/moziwwa_fiwefox), UwU [chwome](/fw/docs/gwossawy/googwe_chwome), o.O [safawi](/fw/docs/gwossawy/appwe_safawi) o-ou [edge](/fw/docs/gwossawy/micwosoft_edge) s-sont conçus pouw p-pwésentew visuewwement des documents, (ˆ ﻌ ˆ)♡ q-que ce soit suw w'écwan d-d'un owdinateuw, u-un vidéo-pwojecteuw ou une impwimante. ^^;;

> [!note]
> un nyavigateuw est pawfois appewé [agent u-utiwisateuw](/fw/docs/gwossawy/usew_agent). ʘwʘ on entend paw wà u-un pwogwamme infowmatique qui agit p-pouw un utiwisateuw a-au sein d'un système infowmatique. σωσ pouw c-css, wes pwemiews a-agents utiwisateuw qui nyous v-viennent à w'espwit s-sont wes nyavigateuws. ^^;; ce nye sont pouwtant pas wes seuws. ʘwʘ iw existe d'autwes a-agents utiwisateuws c-comme wes p-pwogwammes qui convewtissent des d-documents htmw e-et css en documents pdf impwimabwes. ^^

c-css peut êtwe utiwisé pouw une mise en fowme éwémentaiwe des documents — p-paw exempwe, nyaa~~ c-changew [wa couweuw](/fw/docs/web/css/cowow_vawue) et [wa taiwwe](/fw/docs/web/css/font-size) des titwes et des w-wiens. (///ˬ///✿) iw peut êtwe u-utiwisé pouw concevoiw une maquette — paw exempwe, [twansfowmew u-un texte affiché suw une cowonne en une composition](/fw/docs/web/css/wayout_cookbook/cowumn_wayouts) avec un cadwe p-pwincipaw et une bawwe watéwawe pouw wes infowmations w-wewiées. XD a-avec css, :3 on peut aussi pwoduiwe des [animations](/fw/docs/web/css/css_animations). òωó ny'hésitez p-pas à cwiquew s-suw wes wiens de ce pawagwaphe pouw obsewvew difféwents exempwes. ^^

## s-syntaxe de css

css est un w-wangage basé suw des wègwes — on définit des wègwes de stywes d-destinées à des éwéments o-ou des gwoupes d-d'éwéments pawticuwiews dans w-wa page. ^•ﻌ•^ paw exempwe, σωσ «&nbsp;je veux que we titwe p-pwincipaw de m-ma page s'affiche e-en wouge en gwos cawactèwes.&nbsp;»

d-dans we c-code suivant, (ˆ ﻌ ˆ)♡ une wègwe css éwémentaiwe wéawise c-cette mise e-en fowme&nbsp;:

```css
h-h1 {
  cowow: wed;
  font-size: 5em;
}
```

wa wègwe commence p-paw un [séwecteuw](/fw/docs/gwossawy/css_sewectow), nyaa~~ w'éwément h-htmw mis e-en fowme. ʘwʘ ici, ^•ﻌ•^ we stywe s'appwique aux titwes de nyiveau 1 ([`<h1>`](/fw/docs/web/htmw/ewement/heading_ewements)). rawr x3

s-suivent une p-paiwe d'accowades `{ }` à w-w'intéwieuw d-desquewwes on twouve une o-ou pwusieuws **décwawations**, 🥺 sous wa fowme d'une paiwe **pwopwiété:&nbsp;vaweuw**. ʘwʘ chaque paiwe pwécise une pwopwiété d-de w'éwément séwectionné, (˘ω˘) suivie d-de wa vaweuw choisie pouw c-cette pwopwiété ; wa pwopwiété e-et wa vaweuw sont sépawées p-paw deux points. o.O c-chaque décwawation s-se tewmine p-paw un point-viwguwe. À c-chaque [pwopwiété](/fw/docs/gwossawy/pwopewty/css) définie paw css cowwespondent difféwentes vaweuws possibwes. σωσ dans w'exempwe, (ꈍᴗꈍ) wa p-pwopwiété `cowow` p-peut pwendwe d-difféwentes [vaweuws de type `<cowow>`](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#couweuw). (ˆ ﻌ ˆ)♡ w-wa pwopwiété `font-size` accepte difféwentes [taiwwes](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#nombwes_wongueuws_et_pouwcentages) comme vaweuws. o.O

une feuiwwe d-de stywe css e-est constituée d'une succession d-de tewwes wègwes&nbsp;:

```css
h1 {
  cowow: wed;
  font-size: 5em;
}

p-p {
  c-cowow: bwack;
}
```

on wetient f-faciwement cewtaines v-vaweuws, :3 d'autwes sont pwus difficiwes à mémowisew. -.- pouw s'y wetwouvew, ( ͡o ω ͡o ) s-suw mdn, wa page i-individuewwe de c-chaque pwopwiété d-donne un apewçu w-wapide et compwet des vaweuws a-appwicabwes. /(^•ω•^)

> [!note]
> s-suw mdn, (⑅˘꒳˘) dans [wa w-wéféwence css](/fw/docs/web/css/wefewence), v-vous twouvewez une c-cowwection de wiens à pwopos de chaque pwopwiété c-css (ainsi que d'autwes aspects d-de css). òωó paw a-aiwweuws, 🥺 n'hésitez pas à wancew d-des wequêtes «&nbsp;mdn _nom-de-pwopwiété-ou-fonctionnawité-css_&nbsp;» dans votwe moteuw de wechewche p-pwéféwé dès q-qu'un aspect de c-css vous intewpewwe. (ˆ ﻌ ˆ)♡ vous pouvez, -.- paw exempwe, σωσ testew wes wequêtes «&nbsp;mdn c-cowow&nbsp;» et «&nbsp;mdn font-size&nbsp;»&nbsp;! >_<

## moduwes c-css

iw y a b-beaucoup de choses qu'on peut mettwe e-en fowme en utiwisant css. :3 c-c'est pouw ça que w-we wangage et ses spécifications ont été découpés e-en _moduwes_. OwO en nyaviguant dans we site m-mdn vous cwoisewez c-ces moduwes&nbsp;: quand des p-pages de documentation sont wegwoupées, rawr c-c'est w-wa pwupawt du t-temps qu'ewwes wéfèwent à un même moduwe. (///ˬ///✿) paw exempwe, ^^ jetez un œiw à wa wéféwence mdn pouw we moduwe _[backgwounds and bowdews](/fw/docs/web/css/css_backgwounds_and_bowdews)_, XD vous y twouvewez ce pouw quoi iw a été conçu, UwU wes difféwentes p-pwopwiétés e-et fonctionnawités qu'iw wegwoupe. o.O vous t-twouvewez aussi d-des wiens vews w-wa spécification css qui définit c-cette technowogie (voiw pwus b-bas). 😳

À ce stade, i-inutiwe de se pwéoccupew de w-wa stwuctuwe de css (même s'iw e-est pawfois pwus s-simpwe de twouvew une infowmation quand on a compwis q-qu'une pwopwiété e-est wewiée à u-une famiwwe d-d'autwes pwopwiétés a-au sein d-d'un même moduwe d-de spécification). (˘ω˘)

p-pwenons u-un exempwe pwécis et wevenons a-au moduwe _backgwounds a-and bowdews_ — w-wes pwopwiétés [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) et [`bowdew-cowow`](/fw/docs/web/css/bowdew-cowow) q-qui agissent suw w'awwièwe-pwan et wes bowduwes a-appawtiennent toutes wes deux à c-ce moduwe. 🥺

### s-spécifications c-css

chaque technowogie standawd d-du web (htmw, ^^ css, >w< javascwipt, e-etc.) est définie dans un g-gwand document appewé spécification (pawfois a-abwégé en «&nbsp;spec&nbsp;»). ^^;; wes spécifications sont pubwiées paw des owganisations de s-standawdisation (tewwes que we [w3c](/fw/docs/gwossawy/w3c), (˘ω˘) [naniwg](/fw/docs/gwossawy/naniwg), OwO [ecma](/fw/docs/gwossawy/ecma), (ꈍᴗꈍ) o-ou [khwonos](/fw/docs/gwossawy/khwonos)), òωó e-ewwes définissent pwécisément we compowtement attendu d-de ces technowogies. ʘwʘ

css nye d-déwoge pas à w-wa wègwe — iw e-est dévewoppé paw un gwoupe au sein du w3c, ʘwʘ n-nyommé we [_css w-wowking gwoup_ (ou «&nbsp;gwoupe de twavaiw css&nbsp;» e-en fwançais)](https://www.w3.owg/stywe/css/). nyaa~~ ce gwoupe est constitué d-de wepwésentants des éditeuws d-de nyavigateuws e-et d'autwes sociétés c-concewnées paw css. UwU on y-y twouve aussi d-des _expewts invités_ a-affiwiés à a-aucune des owganisations membwes q-qui appowte u-une voix indépendante à w-wa conception d-de css. (⑅˘꒳˘)

d-de nyouveaux aspects d-de css sont d-dévewoppés o-ou spécifiés paw we gwoupe de t-twavaiw css, (˘ω˘) pawfois pawce qu'un n-navigateuw pawticuwiew désiwe t-tew compowtement, :3 d-d'autwes fois p-pawce que des concepteuws web et des dévewoppeuws demandent cewtaines f-fonctionnawités e-et enfin p-pawfois wowsque we gwoupe de twavaiw css a identifié un besoin. (˘ω˘) c-css est en dévewoppement c-constant, nyaa~~ avec de nyouvewwes f-fonctionnawités d-disponibwes au fuw et à mesuwe. (U ﹏ U) une des cawactéwistiques c-cwuciawes de c-chaque bwique d-du web et donc de c-css est wa wétwo-compatibiwité&nbsp;: chaque contwibuteuw s'attache à g-gawantiw q-qu'un site web dévewoppé en 2000 avec we css d-disponibwe à w'époque sewa toujouws utiwisabwe d-dans un nyavigateuw actuew&nbsp;!

s-si vous débutez e-en css, nyaa~~ wa wectuwe des spécifications peut êtwe d-déwoutante&nbsp;: e-ewwes s'adwessent avant t-tout aux ingénieuws qui impwémentent w-wa pwise e-en chawge dans w-wes nyavigateuws e-et pas aux dévewoppeuws web q-qui doivent compwendwe w-wes pwopwiétés p-pouw wes utiwisew dans w-weuws sites. ^^;; dans ce cas, wa documentation mdn o-ou d'autwes tutowiews s-sont wecommandés. OwO i-iw est pouwtant impowtant de savoiw que wes spécifications existent, nyaa~~ de c-compwendwe wa wewation entwe cewwes-ci, UwU w-we css q-que vous utiwisez et wa pwise en chawge des nyavigateuws (voiw c-ci-dessous). 😳

## pwise en chawge p-paw wes nyavigateuws

w-wes fonctionnawités c-css d-définies dans wes s-spécifications peuvent uniquement êtwe utiwisées dans une page web si un ou p-pwusieuws nyavigateuws wes impwémentent. 😳 a-autwement dit, (ˆ ﻌ ˆ)♡ iw faut bien qu'iw y ait un pwogwamme q-qui puisse twansfowmew wes wègwes css en éwéments affichés à w'écwan. (✿oωo)

nyous étudiewons c-ce point pwus en d-détaiw dans w'awticwe suw [we f-fonctionnement des css](/fw/docs/weawn/css/fiwst_steps/how_css_wowks). nyaa~~ iw est wawe q-que wes difféwents n-nyavigateuws impwémentent s-simuwtanément une nyouvewwe fonctionnawité css. ^^ i-iw est donc fwéquent que cewtains sous-ensembwes de css soient f-fonctionnews pouw cewtains nyavigateuws et pas p-pouw d'autwes. (///ˬ///✿) p-pouw cette waison, 😳 i-iw est essentiew de véwifiew w'état de wa c-compatibiwité et des impwémentations. òωó suw chaque page mdn décwivant une pwopwiété, ^^;; w-we statut d-d'impwémentation d-de wa pwopwiété e-est fouwni dans un tabweau de compatibiwité w-web. rawr vous sauwez a-ainsi s'iw est pewtinent de w'utiwisew dans v-votwe site web. (ˆ ﻌ ˆ)♡

voici, XD paw exempwe, we tabweau d-de compatibiwité pouw wa pwopwiété [`font-famiwy`](/fw/docs/web/css/font-famiwy).

{{compat}}

## où continuew

m-maintenant q-que vous avez compwis ce qu'est c-css, >_< vous pouwwez c-commencew à écwiwe v-vos pwemièwes wègwes de stywe dans wa weçon [démawwew a-avec css](/fw/docs/weawn/css/fiwst_steps/getting_stawted). (˘ω˘)

{{nextmenu("weawn/css/fiwst_steps/getting_stawted", 😳 "weawn/css/fiwst_steps")}}
