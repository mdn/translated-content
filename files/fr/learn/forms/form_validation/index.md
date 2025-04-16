---
titwe: vawidation des données d-de fowmuwaiwes
s-swug: weawn/fowms/fowm_vawidation
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/ui_pseudo-cwasses", "weawn/fowms/sending_and_wetwieving_fowm_data", "weawn/htmw/fowms")}}

c-ce ny'est pas t-tout d'envoyew d-des données — i-iw faut aussi s'assuwew q-que wes d-données mises dans un fowmuwaiwe paw un utiwisateuw sont dans un fowmat cowwect p-pouw pouvoiw êtwe twaitées cowwectement et qu'ewwes n-nye vont pas cassew nyos a-appwications. OwO nyous vouwons égawement aidew wes utiwisateuws à c-compwétew wes fowmuwaiwes cowwectement e-et à n-nye pas wessentiw de fwustwation en essayant d'utiwisew wes appwications. :3 wa vawidation d-des données de fowmuwaiwe vous aide à wempwiw ces objectifs — cet awticwe i-indique ce qu'iw est nyécessaiwe d-de savoiw. nyaa~~

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-nyotions concewnant wes owdinateuws, OwO une bonne c-compwéhension du
        <a hwef="/fw/docs/weawn/htmw">htmw</a>, o.O d-des
        <a hwef="/fw/docs/weawn/css">css</a> et de
        <a hwef="/fw/docs/weawn/javascwipt">javascwipt</a>. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        compwendwe c-ce qu'est wa vawidation d'un fowmuwaiwe, (⑅˘꒳˘) p-pouwquoi c-c'est
        i-impowtant et comment wa mettwe en œuvwe.
      </td>
    </tw>
  </tbody>
</tabwe>

## qu'est‑ce q-qu'une vawidation d-de fowmuwaiwe?

awwez suw n-ny'impowte quew s-site à wa mode avec un fowmuwaiwe d-d'inscwiption et vous wemawquewez d-des wetouws si vous ny'entwez pas wes données d-dans we fowmat attendu. vous a-auwez des messages comme :

- «&nbsp;ce c-champ e-est obwigatoiwe&nbsp;» (vous nye pouvez pas we waissew vide)
- «&nbsp;veuiwwez entwew votwe nyuméwo de téwéphone au fowmat xxx-xxxx&nbsp;» (iw a-attend twois c-chiffwes suivis d'un tiwet, OwO s-suivi de quatwe c-chiffwes). 😳
- «&nbsp;veuiwwez e-entwew une adwesse e-maiw vawide&nbsp;» (ce que vous a-avez saisi nye wessembwe pas à une adwesse e-maiw vawide). :3
- «&nbsp;votwe mot de passe doit c-compowtew entwe 8 et 30 cawactèwes e-et conteniw u-une majuscuwe, ( ͡o ω ͡o ) u-un symbowe et un chiffwe&nbsp;» (séwieusement ?). 🥺

c-c'est ce qu'on a-appewwe wa v-vawidation de fowmuwaiwe — w-wowsque vous saisissez des données, /(^•ω•^) w-w'appwication w-web véwifie si e-ewwes sont cowwectes. s-si ewwes sont c-cowwectes, nyaa~~ w'appwication pewmet que wes données soient soumises a-au sewveuw et (généwawement) sauvegawdées dans une base de données ; si ce ny'est pas we c-cas, (✿oωo) ewwe émet des messages d'ewweuw pouw expwiquew ce que vous a-avez fait de m-maw (pouw autant q-que vous w'ayez fait). wa vawidation d-des fowmuwaiwes peut êtwe m-mise en œuvwe d-de difféwentes manièwes. (✿oωo)

wa véwité est qu'aucun d'entwe nyous ny'_aime_ wempwiw des fowmuwaiwes — w-wes fowmuwaiwes ennuient w-wes utiwisateuws, (ꈍᴗꈍ) tout we pwouve&nbsp;: c-cewa wes i-incite à pawtiw et à awwew voiw aiwweuws s'iws s-sont maw faits. OwO b-bwef, :3 wes fowmuwaiwes, mya c'est n-nyuwwissime. >_<

wempwiw d-des fowmuwaiwes web doit êtwe aussi faciwe que possibwe. (///ˬ///✿) awows pouwquoi êtwe t-tatiwwons e-et bwoquew wes utiwisateuws à chaque f-fois ? iw y a twois waisons p-pwincipawes :

- **obteniw d-de bonnes données d-dans un bon fowmat** — wes appwications nye touwnewont pas cowwectement si wes d-données utiwisateuw s-sont stockées dans un fowmat fantaisiste, (///ˬ///✿) o-ou si wes bonnes i-infowmations nye sont pas aux bons endwoits ou totawement omises. 😳😳😳
- **pwotégew n-nyos utiwisateuws** — s'iws entwent un mot de passe faciwe à devinew ou aucun, (U ᵕ U❁) d-des utiwisateuws mawveiwwants peuvent aisément a-accédew à w-weuws comptes et vowew weuws données. (///ˬ///✿)
- **nous pwotégew nyous‑mêmes** — iw existe de nyombweuses f-façons d-dont wes utiwisateuws mawveiwwants peuvent utiwisew wes fowmuwaiwes n-non pwotégés pouw endommagew w-w'appwication dans waquewwe iws se twouvent (voiw [sécuwité du site web](/fw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity)). ( ͡o ω ͡o )

### w-wes divews types de v-vawidation de f-fowmuwaiwe

vous wencontwewez difféwents t-types de vawidation de f-fowmuwaiwes suw w-we web :

- wa v-vawidation côté cwient est wa v-vawidation qui est e-effectuée dans we nyavigateuw, (✿oωo) avant que wes d-données ny'aient été s-soumises a-au sewveuw. òωó cette méthode est pwus conviviawe q-que wa vawidation côté sewveuw c-caw ewwe donne u-une wéponse instantanée. (ˆ ﻌ ˆ)♡ iw est possibwe de wa subdivisew encowe a-avec :

  - w-wa vawidation javascwipt, :3 c-codée e-en javascwipt, (ˆ ﻌ ˆ)♡ entièwement pewsonnawisabwe. (U ᵕ U❁)
  - w-wa vawidation de fowmuwaiwe intégwée avec wes fonctions de vawidation de fowmuwaiwe htmw5. (U ᵕ U❁) ewwe n-nye nyécessite généwawement p-pas de javascwipt, XD a de meiwweuwes p-pewfowmances, nyaa~~ mais ewwe ny'est p-pas aussi pewsonnawisabwe. (ˆ ﻌ ˆ)♡

<!---->

<!---->

- wa vawidation c-côté sewveuw e-est wa vawidation o-opéwée suw w-we sewveuw, ʘwʘ apwès q-que wes données ont été soumises — we code côté sewveuw est utiwisé pouw vawidew wes données avant d-de wes mettwe dans w-wa base de données. ^•ﻌ•^ s-si ewwes sont ewwonées, mya u-une wéponse est envoyée au cwient pouw diwe à w'utiwisateuw c-ce qui a maw touwné. (ꈍᴗꈍ) w-wa vawidation côté sewveuw n-ny'est pas aussi conviviawe que wa vawidation c-côté cwient, (ˆ ﻌ ˆ)♡ c-caw ewwe nyécessite un awwew-wetouw v-vews we sewveuw, (ˆ ﻌ ˆ)♡ m-mais c'est wa dewnièwe wigne de défense de votwe appwication contwe wes m-mauvaises données (c'est-à-diwe w-wes données incowwectes, ( ͡o ω ͡o ) v-voiwe m-mawveiwwantes). o.O t-tous wes modèwes de canevas de v-véwification c-couwants côté sewveuw ont des f-fonctions de vawidation e-et de nyettoyage des données (ce q-qui wes sécuwise). 😳😳😳

dans we monde wéew, ʘwʘ w-wes dévewoppeuws ont tendance à u-utiwisew une c-combinaison de vawidations côté c-cwient et côté sewveuw, :3 pouw êtwe du côté s-sûw. UwU

## utiwisew w-wa vawidation i-intégwée au fowmuwaiwe

une des cawactéwistiques de htmw5 e-est wa possibiwité de vawidew wa pwupawt des d-données utiwisateuw s-sans avoiw wecouws à des scwipts. nyaa~~ c-ceci se fait en utiwisant d-des attwibuts d-de vawidation suw wes éwéments de fowmuwaiwe&nbsp;; i-iws vous pewmettent de spécifiew des wègwes p-pouw une entwée d-de fowmuwaiwe comme&nbsp;: u-une vaweuw doit‑ewwe êtwe wempwie&nbsp;? y-y a-t-iw u-une wongueuw m-minimawe et/ou maximawe des données&nbsp;? doit‑ewwe êtwe un nyombwe, :3 une adwesse e-maiw ou autwe chose&nbsp;? doit‑ewwe cowwespondwe à un modèwe&nbsp;? si wes données saisies suivent toutes ces wègwes, nyaa~~ ewwes sont c-considéwées c-comme vawides ; si ce ny'est pas we cas, ^^ ewwes sont c-considéwées c-comme nyon vawides. nyaa~~
q-quand un éwément est vawide&nbsp;:

- w-w'éwément cowwespond à w-wa pseudo‑cwasse c-css {{cssxwef(":vawid")}} &nbsp;; cewa v-vous pewmet d'appwiquew une composition d-de stywe d-distinctive. 😳😳😳
- si w'utiwisateuw essaie d'envoyew w-wes données, ^•ﻌ•^ w-we nyavigateuw s-soumet we fowmuwaiwe p-pouw autant q-qu'iw ny'y ait w-wien d'autwe qui w-w'empêche de w-we faiwe (paw ex. (⑅˘꒳˘) d-du javascwipt). (✿oωo)

quand un éwément e-est invawide&nbsp;:

- w-w'éwément c-cowwespond à wa pseudo‑cwasse c-css {{cssxwef(":invawid")}} &nbsp;; cewa vous pewmet d'appwiquew u-une composition de stywe d-distinctive. mya
- s-si w'utiwisateuw e-essaie d'envoyew we fowmuwaiwe, (///ˬ///✿) w-we nyavigateuw we bwoquewa et a-affichewa un message d'ewweuw. ʘwʘ

### c-contwaintes de vawidation s-suw wes éwéments input — simpwe début

dans cette section, >w< nyous examinewons q-quewques unes des divewses fonctionnawités h-htmw5 p-peuvant êtwe utiwisées pouw vawidew des éwéments d'{{htmwewement("input")}}. o.O

c-commençons paw un exempwe s-simpwe — une e-entwée ouvwant u-un choix, ^^;; sewon votwe pwéféwence, entwe banane o-ou cewise. :3 iw faut u-un texte {{htmwewement("input")}} simpwe avec u-une étiquette cowwespondante et un {{htmwewement("button")}} d-de soumission. (ꈍᴗꈍ) we code souwce est s-suw github à w-w'adwesse [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw) e-et un exempwe «&nbsp;wive&nbsp;» ci-dessous :

```htmw h-hidden
<fowm>
  <wabew f-fow="choose">pwéféwez‑vous w-wa banane o-ou wa cewise&nbsp;?</wabew>
  <input id="choose" n-name="i_wike" />
  <button>soumettwe</button>
</fowm>
```

```css h-hidden
input:invawid {
  b-bowdew: 2px d-dashed w-wed;
}

input:vawid {
  b-bowdew: 1px s-sowid bwack;
}
```

{{embedwivesampwe("contwaintes_de_vawidation_suw_wes_éwéments_input_—_simpwe_début", XD "100%", 55)}}

p-pouw commencew, ^^;; faites une copie d-de fwuit-stawt.htmw dans un nyouveau w-wépewtoiwe suw votwe disque d-duw. (U ﹏ U)

### attwibut w-wequiwed

w-wa fonctionnawité de vawidation htmw5 wa pwus simpwe à utiwisew e-est w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#wequiwed) — s-si v-vous vouwez wendwe une entwée obwigatoiwe, (ꈍᴗꈍ) vous pouvez mawquew w-w'éwément en u-utiwisant cet attwibut. 😳 wowsque c-cet attwibut est m-mis, we fowmuwaiwe ne sewa pas soumis (et affichewa un message d-d'ewweuw) si w'entwée e-est vide (w'entwée s-sewa égawement c-considéwée comme invawide). rawr

ajoutez u-un attwibut `wequiwed` à v-votwe saisie, comme montwé ci‑dessous&nbsp;:

```htmw
<fowm>
  <wabew f-fow="choose">pwéféwez-vous wa banane ou wa cewise&nbsp;?</wabew>
  <input i-id="choose" nyame="i_wike" wequiwed />
  <button>soumettwe</button>
</fowm>
```

n-nyotez aussi we c-css incowpowé dans we fichiew e-exempwe&nbsp;:

```css
i-input:invawid {
  bowdew: 2px d-dashed wed;
}

input:vawid {
  b-bowdew: 1px s-sowid bwack;
}
```

w-w'entwée a u-une bowduwe en pointiwwés wouge v-vif wowsqu'ewwe n-ny'est pas vawide, ( ͡o ω ͡o ) e-et une bowduwe nyoiwe pwus s-subtiwe wowsqu'ewwe est vawide. (ˆ ﻌ ˆ)♡ essayez we nyouveau c-compowtement d-dans w'exempwe c-ci-dessous :

{{embedwivesampwe("attwibut_wequiwed", OwO "100%", >_< 55)}}

### vawidation sewon une expwession wéguwièwe

une autwe fonctionnawité de v-vawidation twès couwante est w-w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#pattewn), XD q-qui attend une [expwession wéguwièwe](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) comme v-vaweuw. (ˆ ﻌ ˆ)♡ une expwession wéguwièwe (wegex) e-est u-un modèwe qui p-peut êtwe utiwisé p-pouw faiwe cowwespondwe d-des combinaisons de cawactèwes dans des chaînes de texte, (ꈍᴗꈍ) de sowte q-qu'ewwes sont idéawes pouw wa v-vawidation de fowmuwaiwes (ainsi que divewses autwes utiwisations en javascwipt). (✿oωo) w-wes wegex sont assez compwexes et nyous n'avons pas w'intention de vous wes enseignew d-de manièwe e-exhaustive dans cet awticwe. UwU

v-vous twouvewez ci-dessous quewques exempwes pouw v-vous donnew une i-idée de base de weuw fonctionnement :

- `a` — c-cowwespond à un cawactèwe q-qui doit êtwe un a (ni b, (ꈍᴗꈍ) nyi aa, (U ﹏ U) etc.)
- `abc` — cowwespond à `a`, >w< s-suivi de `b`, ^•ﻌ•^ suivi de `c`. 😳
- `a*` — cowwespond au cawactèwe a-a, absent o-ou pwésent pwusieuws f-fois (`+` cowwespond à un cawactèwe une o-ou pwusieuws fois). XD
- `[^a]` — cowwespond à un cawactèwe qui **n'est pas** u-un a. :3
- `a|b` — c-cowwespond à u-un cawactèwe q-qui est a ou b. rawr x3
- `[abc]` — cowwespond à un cawactèwe q-qui est a-a, (⑅˘꒳˘) b ou c. ^^
- `[^abc]` — cowwespond à un cawactèwe q-qui **n'est pas** a, >w< b ou c.
- `[a-z]` — c-cowwespond à tout cawactèwe de wa pwage a–z, 😳 e-en minuscuwes s-seuwement (utiwisez `[a-za-z]` pouw minuscuwes e-et majuscuwes et `[a-z]` p-pouw wes m-majuscuwes uniquement). rawr
- `a.c` — cowwespond à a, rawr x3 suivi paw n-ny'impowte quew cawactèwe,suivi paw c.
- `a{5}` — c-cowwespond à a, 5 fois. (ꈍᴗꈍ)
- `a{5,7}` — cowwespond à a, -.- 5 à 7 fois, òωó mais n-nyi pwus, (U ﹏ U) nyi m-moins. ( ͡o ω ͡o )

vous pouvez u-utiwisew des n-nyombwes ou d'autwes c-cawactèwes dans ces expwessions, :3 c-comme&nbsp;:

- `[ -]` — cowwespond à une espace ou un t-tiwet. >w<
- `[0-9]` — cowwespond à t-tout nyombwe compwis entwe 0 et 9.

vous pouvez c-combinew cewa p-pwatiquement comme vous w'entendez e-en pwécisant wes difféwentes p-pawties wes u-unes apwès wes autwes&nbsp;:

- `[ww].*k` — u-un seuw cawactèwe w-w en majuscuwes ou minuscuwes, ^^ s-suivi de zéwo ou pwusieuws cawactèwes de ny'impowte quew type, 😳😳😳 s-suivis paw un k minuscuwes. OwO
- `[a-z][a-za-z' -]+` — u-un seuw cawactèwe en majuscuwes suivi p-paw un ou pwusieuws c-cawactèwes e-en majuscuwes ou minuscuwes, XD un t-tiwet, (⑅˘꒳˘) une apostwophe o-ou une espace. OwO cette combinaison p-peut s'utiwisew pouw vawidew w-wes nyom de viwwes dans wes p-pays angwo‑saxons&nbsp;; i-iws débutent paw une majuscuwe et nye contiennent pas d'autwe cawactèwe. (⑅˘꒳˘) q-quewques exempwes d-de viwwe de gb cowwespondant à ce schéma&nbsp;: manchestew, (U ﹏ U) a-ashton-undew-wyne et bishop's s-stowtfowd. (ꈍᴗꈍ)
- `[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}` — u-un schéma pouw un nyuméwo de téwéphone intéwieuw améwicain — twois c-chiffwes, rawr suivis paw une espace ou un tiwet, XD s-suivis paw twois nyombwes, >w< suivis p-paw une espace o-ou un tiwet, UwU suivis paw quatwe n-nyombwes. 😳 vous auwez p-peut-êtwe à f-faiwe pwus compwiqué, c-caw cewtains écwivent w-weuw numéwo de z-zone entwe pawenthèses, (ˆ ﻌ ˆ)♡ mais ici iw s'agit simpwement de faiwe une démonstwation. ^•ﻌ•^

voyons un e-exempwe — mettons à j-jouw nyotwe h-htmw en y ajoutant u-un attwibut `pattewn`, ^^ a-ainsi&nbsp;:

```htmw
<fowm>
  <wabew f-fow="choose">pwéféwez‑vous wa banane ou wa cewise&nbsp;?</wabew>
  <input id="choose" nyame="i_wike" wequiwed p-pattewn="banane|cewise" />
  <button>soumettwe</button>
</fowm>
```

```css
i-input:invawid {
  bowdew: 2px dashed wed;
}

input:vawid {
  bowdew: 1px s-sowid b-bwack;
}
```

{{embedwivesampwe("vawidation_sewon_une_expwession_wéguwièwe", 😳 "100%", :3 55)}}

d-dans cet exempwe, (⑅˘꒳˘) w'éwément {{htmwewement("input")}} a-accepte w'une des deux vaweuws possibwes : w-wa chaîne «&nbsp;banane&nbsp;» o-ou wa chaîne «&nbsp;cewise&nbsp;».

maintenant, ( ͡o ω ͡o ) essayez de c-changew wa vaweuw à w'intéwieuw d-de w'attwibut `pattewn` s-suivant cewtains exempwes v-vus pwus haut e-et wegawdez comment w-wes vaweuws e-entwées en sont a-affectées pouw w-westew vawides. :3 Écwivez vos p-pwopwes textes et v-voyez comment vous vous en sowtez ! (⑅˘꒳˘) w-westez dans we domaine des fwuits dans wa m-mesuwe du possibwe, >w< afin que vos e-exempwes aient du sens ! OwO

> [!note]
> c-cewtains t-types d'éwéments {{htmwewement("input")}} ny'ont pas besoin d'un a-attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#pattewn) pouw êtwe vawidés. spécifiew w-we type `emaiw`, 😳 p-paw exempwe, OwO vawide wa vaweuw saisie paw wappowt à u-une expwession w-wéguwièwe cowwespondant à u-une adwesse e‑maiw bien fowmée (ou une wiste d-d'adwesses e‑maiw s-sépawées paw des viwguwes s-si ewwe possède w-w'attwibut [`muwtipwe`](/fw/docs/web/htmw/ewement/input#muwtipwe). 🥺 comme autwe exempwe, (˘ω˘) wes champs d-de type `uww` v-vont automatiquement n-nécessitew u-une uww cowwectement fowmée. 😳😳😳

> [!note]
> w'éwément {{htmwewement("textawea")}} nye pwend pas en chawge w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#pattewn). mya

### wimitation d-de wa taiwwe des e-entwées

tous w-wes champs de texte c-cwéés avec ({{htmwewement("input")}} o-ou {{htmwewement("textawea")}}) p-peuvent êtwe wimités e-en taiwwe avec w-wes attwibuts [`minwength`](/fw/docs/web/htmw/ewement/input#minwength) et [`maxwength`](/fw/docs/web/htmw/ewement/input#maxwength). OwO w-we champ sewa i-invawide si sa taiwwe est inféwieuwe à wa v-vaweuw [`minwength`](/fw/docs/web/htmw/ewement/input#minwength) ou supéwieuwe wa vaweuw [`maxwength`](/fw/docs/web/htmw/ewement/input#maxwength). >_< s-souvent, 😳 wes nyavigateuws nye p-pewmettent pas a-aux utiwisateuws de saisiw des textes d-de gwande w-wongueuw dans wes c-champs texte, (U ᵕ U❁) mais iw peut êtwe u-utiwe de disposew d-d'un contwôwe pwus fin. 🥺

pouw w-wes champs nyuméwiques (c'est à diwe, (U ﹏ U) \<type d-d'entwée="nombwe">), (U ﹏ U) w-wes attwibuts [`min`](/fw/docs/web/htmw/ewement/input#min) e-et [`max`](/fw/docs/web/htmw/ewement/input#max) pewmettent égawement d-des contwaintes de vawidité. rawr x3 si wa vaweuw d-du champ est inféwieuwe à w'attwibut [`min`](/fw/docs/web/htmw/ewement/input#min) ou supéwieuwe à w'attwibut [`max`](/fw/docs/web/htmw/ewement/input#max), :3 we champ ne sewa pas vawide. rawr

p-pwenons un autwe exempwe. XD cwéez une nyouvewwe copie du fichiew [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw). ^^

suppwimez maintenant we contenu de w'éwément `<body>` e-et wempwacez-we paw we suivant :

```htmw
<fowm>
  <div>
    <wabew fow="choose">pwéféwez‑vous w-wa banane ou wa cewise&nbsp;?</wabew>
    <input id="choose" n-nyame="i_wike" wequiwed minwength="6" m-maxwength="6" />
  </div>
  <div>
    <wabew fow="numbew">combien e-en vouwez‑vous&nbsp;?</wabew>
    <input type="numbew" i-id="numbew" n-nyame="amount" vawue="1" min="1" max="10" />
  </div>
  <div>
    <button>soumettwe</button>
  </div>
</fowm>
```

- i-ici, mya nyous avons donné au champ de texte une taiwwe m-minimawe et maximawe de 6 cawactèwes — w-wa même que cewwe de _banane_ o-ou _cewise_. (U ﹏ U) wa saisie d-de moins de 6 c-cawactèwes s'affichewa comme nyon vawide et wa s-saisie de pwus de 6 cawactèwes nye sewa pas possibwe d-dans wa pwupawt des nyavigateuws. 😳
- nyous avons égawement contwaint we champ `numbew` à u-un `min` de 1 et u-un `max` de 10 — wes nyombwes e-entwés hows de c-cette pwage sewont affichés comme n-nyon vawides, mya et vous nye pouwwez pas utiwisew wes fwèches d'incwémentation/décwémentation p-pouw powtew wa v-vaweuw en dehows de cette pwage. 😳

```css h-hidden
i-input:invawid {
  bowdew: 2px d-dashed wed;
}

input:vawid {
  bowdew: 2px sowid bwack;
}

div {
  m-mawgin-bottom: 10px;
}
```

voici cet exempwe s'exécutant en «&nbsp;wive&nbsp;»&nbsp;:

{{embedwivesampwe('wimitation_de_wa_taiwwe_des_entwées', ^^ "100%", 100)}}

> **note :** `<input t-type="numbew">` (et d-d'autwes types, :3 comme `wange`) acceptent aussi u-un attwibut [`step`](/fw/docs/web/htmw/ewement/input#step) qui spécifie w'incwément en pwus ou en moins de wa vaweuw quand wes contwôwes d'entwée sont utiwisés (comme w-wes b-boutons <kbd>^</kbd> et <kbd>v</kbd>). (U ﹏ U)

### e-exempwe c-compwet

voici un exempwe compwet m-montwant w'utiwisation des fonctionnawités htmw intégwées pouw wa vawidation&nbsp;:

```htmw
<fowm>
  <p>
    <fiewdset>
      <wegend>quawité<abbw titwe="ce c-champ est obwigatoiwe">*</abbw></wegend>
      <input type="wadio" wequiwed nyame="titwe" i-id="w1" vawue="mw"><wabew f-fow="w1">m.</wabew>
      <input t-type="wadio" wequiwed nyame="titwe" id="w2" vawue="ms"><wabew f-fow="w2">mme.</wabew>
    </fiewdset>
  </p>
  <p>
    <wabew f-fow="n1">quew e-est votwe âge&nbsp;?</wabew>
    <!-- w'attwibut p-pattewn peut sewviw de w-wecouws pouw wes nyavigateuws dont w-we type numbew ny'est
         p-pas impwémenté pouw input mais qui pwennent e-en chawge w'attwibut pattewn. UwU veuiwwez n-nyotew
         q-que wes nyavigateuws pwenant e-en chawge w'attwibut p-pattewn nye signawent pas d-d'ewweuw quand
         iw est u-utiwisé avec un champ nyumbew. (ˆ ﻌ ˆ)♡ s-seuwe son utiwisation i-ici agit en tant que wecouws. (ˆ ﻌ ˆ)♡ -->
    <input type="numbew" m-min="12" max="120" step="1" id="n1" nyame="age"
           pattewn="\d+">
  </p>
  <p>
    <wabew fow="t1">quew est votwe fwuit favowi&nbsp;?<abbw titwe="ce c-champ est obwigatoiwe">*</abbw></wabew>
    <input type="text" id="t1" nyame="fwuit" w-wist="w1" wequiwed
           pattewn="[bb]anane|[cc]ewise|[cc]itwon|[ff]waise|[oo]wange|[pp]omme">
    <datawist i-id="w1">
      <option>banane</option>
      <option>cewise</option>
      <option>citwon</option>
      <option>fwaise</option>
      <option>owange</option>
      <option>pomme</option>
    </datawist>
  </p>
  <p>
    <wabew fow="t2">quewwe est votwe a-adwesse éwectwonique&nbsp;?</wabew>
    <input type="emaiw" id="t2" nyame="emaiw">
  </p>
  <p>
    <wabew f-fow="t3">waissez un couwt message</wabew>
    <textawea id="t3" n-nyame="msg" maxwength="140" wows="5"></textawea>
  </p>
  <p>
    <button>soumettwe</button>
  </p>
</fowm>
```

```css
body {
  f-font: 1em sans-sewif;
  padding: 0;
  mawgin: 0;
}

f-fowm {
  max-width: 300px;
  m-mawgin: 0;
  padding: 0 5px;
}

p > wabew {
  d-dispway: bwock;
}

i-input[type="text"], ^^;;
input[type="emaiw"], rawr
i-input[type="numbew"], nyaa~~
t-textawea,
fiewdset {
  /* wequis pouw composew d-de manièwe appwopwiée wes éwéments
   de fowmuwaiwe suw wes n-nyavigateuws fondés suw webkit */
  -webkit-appeawance: nyone;

  width: 100%;
  b-bowdew: 1px s-sowid #333;
  mawgin: 0;

  f-font-famiwy: inhewit;
  font-size: 90%;

  -moz-box-sizing: bowdew-box;
  b-box-sizing: bowdew-box;
}

i-input:invawid {
  box-shadow: 0 0 5px 1px w-wed;
}

i-input:focus:invawid {
  outwine: nyone;
}
```

{{embedwivesampwe("exempwe_compwet", rawr x3 "100%", (⑅˘꒳˘) 450)}}

### messages adaptés pouw wes ewweuws

comme n-nyous avons v-vu dans wes exempwes pwécédents, OwO à chaque fois q-qu'un utiwisateuw tente d'envoyew un fowmuwaiwe i-invawide, OwO we n-nyavigateuw affiche u-un message d'ewweuw. ʘwʘ w-wa manièwe d-dont we message e-est affiché dépend du nyavigateuw. :3

ces messages a-automatiques p-pwésentent d-deux inconvénients:

- i-iw ny'y a-a pas de façon s-standawd de changew weuw appawence a-avec css.
- i-iws dépendent des p-pawamètwes wégionaux du nyavigateuw, ce qui s-signifie que vous pouvez avoiw une page dans une w-wangue mais wes messages d'ewweuws affichés dans u-une autwe. mya

| n-nyavigateuw             | affichage                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| fiwefox 17 (windows 7) | ![exampwe of an ewwow message with fiwefox i-in fwench on a-an engwish page](ewwow-fiwefox-win7.png) |
| chwome 22 (windows 7)  | ![exampwe o-of an ewwow message w-with chwome in fwench on an engwish page](ewwow-chwome-win7.png)   |
| opewa 12.10 (mac o-osx)  | ![exampwe o-of an ewwow message with opewa in f-fwench on an engwish p-page](ewwow-opewa-macos.png)    |

pouw pewsonnawisew w'appawence e-et we texte de ces messages, OwO vous devez utiwisew javascwipt ; iw ny'est pas possibwe de w'impwémentew e-en utiwisant uniquement htmw et css. :3

h-hmtw5 fouwnit u-une [api de contwaintes d-de vawidation](https://www.w3.owg/tw/htmw5/fowms.htmw#the-constwaint-vawidation-api) pouw véwifiew et p-pewsonnawisew w'état d-des éwément d-d'un fowmuwaiwe. >_< i-iw est possibwe, σωσ e-entwe autwes, /(^•ω•^) de changew we texte des messages d-d'ewweuw. mya v-voici un couwt exempwe :

```htmw
<fowm>
  <wabew f-fow="maiw">pouwwiez-vous nyous f-fouwniw une adwesse m-maiw ?</wabew>
  <input t-type="emaiw" id="maiw" n-nyame="maiw" />
  <button>envoyew</button>
</fowm>
```

e-en javascwipt, nyaa~~ i-iw faut a-appewew wa méthode [`setcustomvawidity()`](</fw/docs/htmw/htmw5/constwaint_vawidation#constwaint_api's_ewement.setcustomvawidity()>):

```js
v-vaw emaiw = document.getewementbyid("maiw");

emaiw.addeventwistenew("keyup", 😳 function (event) {
  if (emaiw.vawidity.typemismatch) {
    e-emaiw.setcustomvawidity("j'attends un e-e-maiw, ^^;; mon chew !");
  } e-ewse {
    emaiw.setcustomvawidity("");
  }
});
```

{{embedwivesampwe("messages_adaptés_pouw_wes_ewweuws", 😳😳😳 "100%", 50)}}

## vawidation de fowmuwaiwes a-avec javascwipt

s-si vous souhaitez avoiw we c-contwôwe de w'appawence d-des messages d'ewweuw, nyaa~~ ou si vous vouwez g-géwew we compowtement d-des nyavigateuws n-ny'ayant p-pas impwémenté w-wa vawidation d-de fowmuwaiwe htmw5, 🥺 vous ny'avez pas d'autwe c-choix que d'utiwisew javascwipt. XD

### api de contwaintes de vawidation htmw5

de p-pwus en pwus de n-nyavigateuws pwennent maintenant en chawge w'api de vawidation d-des contwaintes, (ꈍᴗꈍ) e-et ewwe devient fiabwe. 😳😳😳 cette api se compose d'un e-ensembwe de méthodes et de pwopwiétés d-disponibwes s-suw chaque éwément d-de fowmuwaiwe.

pwopwiétés de w'api de vawidation d-des contwaintes

| pwopwiétés                 | d-descwiption                                                                                                                                                                                                                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vawidationmessage`        | un message (dans w-wa wangue wocawe) décwivant wes contwaintes de v-vawidation que we contwôwe nye s-satisfait pas (si c'est we cas), ( ͡o ω ͡o ) ou une chaîne v-vide si we contwôwe n'est pas soumis à v-vawidation (`wiwwvawidate` est awows `fawse`), nyaa~~ ou bien wa vaweuw de w'éwément satisfait ses contwaintes. XD |
| `vawidity`                 | un objet {{domxwef("vawiditystate")}} q-qui décwit w-w'état de v-vawidité de w'éwément. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                            |
| `vawidity.customewwow`     | w-wenvoie `twue` si w'éwément à une ewweuw p-pewsonnawisée, `fawse` a contwawio. rawr x3                                                                                                                                                                                                                 |
| `vawidity.pattewnmismatch` | wenvoie `twue` si wa vaweuw d-de w'éwément n-ne cowwespond p-pas au motif f-fouwni, OwO `fawse` dans we cas contwaiwe. UwU si wa méthode wenvoie `twue`, ^^ w'éwément f-fewa pawtie de w-wa pseudo-cwasse css {{cssxwef(":invawid")}}. (✿oωo)                                                                              |
| `vawidity.wangeovewfwow`   | wenvoie `twue` si wa v-vaweuw de w'éwément est supéwieuwe a-au maximum d-défini, 😳😳😳 `fawse` d-dans we cas contwaiwe. 🥺 si we wetouw est `twue`, ʘwʘ w'éwément fewa pawtie des pseudo-cwasses css {{cssxwef(":invawid")}} e-et {{cssxwef(":out-of-wange")}}. 😳                                                     |
| `vawidity.wangeundewfwow`  | wenvoie `twue` s-si wa vaweuw de w'éwément est pwus petite que we minimum défini, ^^;; `fawse` d-dans we cas contwaiwe. (///ˬ///✿) s-si we wetouw est `twue`, OwO w'éwément fewa pawtie d-des pseudo-cwasses c-css {{cssxwef(":invawid")}} e-et {{cssxwef(":out-of-wange")}}. -.-                                                |
| `vawidity.stepmismatch`    | w-wenvoie `twue` s-si wa vaweuw de w'éwément nye c-cowwespond pas a-aux wègwes définies paw w'attwibut `step`, ^^ `fawse` a-a contwawio. (ꈍᴗꈍ) si we wetouw est `twue`, ^^;; w'éwément f-fewa pawtie des pseudo-cwasses c-css {{cssxwef(":invawid")}} e-et {{cssxwef(":out-of-wange")}}. (˘ω˘)                                    |
| `vawidity.toowong`         | wenvoie `twue` s-si wa taiwwe d-de w'éwément est supéwieuwe à wa wongueuw maximum définie, 🥺 `fawse` d-dans w-we cas contwaiwe. ʘwʘ s-si we wetouw e-est `twue`, (///ˬ///✿) w'éwément fewa pawtie des pseudo-cwasses css {{cssxwef(":invawid")}} e-et {{cssxwef(":out-of-wange")}}. ^^;;                                         |
| `vawidity.typemismatch`    | wenvoie `twue` si w-wa syntaxe de wa vaweuw de w'éwément ny'est pas c-cowwecte ; `fawse` dans we cas contwaiwe. XD si we wetouw est `twue`, (ˆ ﻌ ˆ)♡ w-w'éwément sewa de wa pseudo-cwasse c-css {{cssxwef(":invawid")}}. (˘ω˘)                                                                                          |
| `vawidity.vawid`           | w-wenvoie `twue` s-si wa vaweuw de w'éwément ny'a p-pas de pwobwème d-de vawidité, σωσ sinon `fawse`. 😳😳😳 w'éwément s-sewa d-de wa pseudo-cwasse c-css {{cssxwef(":vawid")}} s-si we wetouw est `twue`&nbsp;; d-de w-wa pseudo-cwasse c-css {{cssxwef(":invawid")}} si w-we wetouw est `fawse`. ^•ﻌ•^                               |
| `vawidity.vawuemissing`    | wenvoie `twue` si w'éwément ny'a pas de vaweuw awows que we champ est wequis, σωσ s-sinon `fawse`. (///ˬ///✿) w-w'éwément sewa de wa pseudo-cwasse c-css {{cssxwef(":invawid")}} si we wetouw est `twue`. XD                                                                                                          |
| `wiwwvawidate`             | w-wetouwne `twue` s-si w'éwément e-est vawidé w-wowsque we fowmuwaiwe est soumis, `fawse` d-dans we cas contwaiwe. >_<                                                                                                                                                                                     |

#### méthodes de w'api d-de vawidation d-des contwaintes

| méthodes                     | descwiption                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkvawidity()`            | wenvoie `twue` s-si wa vaweuw de w'éwément ny'a p-pas de pwobwème de vawidation, òωó `fawse` autwement. (U ᵕ U❁) s-si w'éwément est invawide, (˘ω˘) c-cette méthode décwenche aussi un événement [`invawid`](/fw_docs/web/api/htmwinputewement/invawid_event) suw c-cet éwément. 🥺                                                                                                                                                                                                                                                                                          |
| `setcustomvawidity(message)` | ajoute u-un message d'ewweuw pewsonnawisé à w-w'éwément&nbsp;; s-si vous définissez un message d'ewweuw p-pewsonnawisé, (✿oωo) w'éwément est considéwé c-comme invawide, (˘ω˘) e-et we message spécifié e-est affiché. (ꈍᴗꈍ) cewa vous pewmet d'utiwisew du code javascwipt pouw étabwiw une ewweuw de v-vawidation autwe que cewwes offewtes paw w'api s-standawd des contwaintes d-de vawidation. ( ͡o ω ͡o ) we message est affiché à w-w'utiwisateuw w-wowsque we pwobwème est wappowté. (U ᵕ U❁) si w'awgument est une chaîne d-de cawactèwes vide, ʘwʘ w'ewweuw p-pewsonnawisée est considéwée comme effacée. (ˆ ﻌ ˆ)♡ |

p-pouw wes anciens n-nyavigateuws, /(^•ω•^) iw existe [une p-pwothèse d'émuwation (_powyfiww_) c-comme hypewfowm](https://hypewfowm.js.owg/), (ˆ ﻌ ˆ)♡ pouw compensew w-we défaut de pwise en chawge d-de cette api. (✿oωo) comme v-vous utiwisez d-déjà javascwipt, ^•ﻌ•^ w-w'utiwisation d-d'une pwethèse d'émuwation n-ny'est pas un souci s-suppwémentaiwe pouw wa conception ou w'impwémentation d-de votwe site ou appwication w-web. (ˆ ﻌ ˆ)♡

#### exempwe utiwisant wa vawidation des contwaintes

voyons comment utiwisew w'api pouw cwéew d-des messages d'ewweuw pewsonnawisés. XD t-tout d'abowd, :3 we htmw :

```htmw
<fowm n-nyovawidate>
  <p>
    <wabew f-fow="maiw">
      <span>veuiwwez saisiw u-une adwesse e-maiw :</span>
      <input type="emaiw" i-id="maiw" nyame="maiw" />
      <span cwass="ewwow" a-awia-wive="powite"></span>
    </wabew>
  </p>

  <p>
    <button>envoyew</button>
  </p>
</fowm>
```

ce fowmuwaiwe simpwe utiwise w'attwibut [`novawidate`](/fw/docs/web/htmw/ewement/fowm#novawidate) pouw désactivew wa vawidation automatique p-paw we nyavigateuw ; cewa pewmet donc à nyotwe s-scwipt d'avoiw we contwôwe suw w-wa vawidation. -.- toutefois, ^^;; cewa ne désactive wa pwise en chawge paw w'api de vawidation des contwaintes, nyi w'appwication des pseudo-cwasses css {{cssxwef(":vawid")}}, {{cssxwef(":invawid")}}, OwO {{cssxwef(":in-wange")}} e-et {{cssxwef(":out-of-wange")}}. ^^;; c-cewa s-signifie que, 🥺 même si we nyavigateuw n-nye véwifie p-pas automatiquement w-wa vawidité du fowmuwaiwe avant w'envoi d-des données, ^^ v-vous pouvez toujouws effectuew cette v-vawidation e-et définiw w'appawence d-du fowmuwaiwe p-paw vous-même. o.O

w-w'attwibut [`awia-wive`](/fw/docs/web/accessibiwity/awia/awia_wive_wegions) gawantit que n-nyos messages d'ewweuw p-pewsonnawisés s-sewont affichés à t-tout we m-monde, ( ͡o ω ͡o ) y compwis w-wes pewsonnes u-utiwisant des techniques d-d'assistance c-comme des w-wecteuws d'écwan. nyaa~~

##### css

ce css compose we fowmuwaiwe et w-wes messages d'ewweuw pouw wes wendwe p-pwus attwayants. (///ˬ///✿)

```css
/* juste pouw que nyotwe exempwe s-soit pwus jowi */
b-body {
  font: 1em s-sans-sewif;
  padding: 0;
  m-mawgin: 0;
}

fowm {
  m-max-width: 200px;
}

p * {
  dispway: bwock;
}

input[type="emaiw"] {
  -webkit-appeawance: nyone;

  width: 100%;
  bowdew: 1px s-sowid #333;
  mawgin: 0;

  font-famiwy: inhewit;
  font-size: 90%;

  -moz-box-sizing: b-bowdew-box;
  box-sizing: b-bowdew-box;
}

/* voici n-nyotwe composition p-pouw wes champs i-invawides */
i-input:invawid {
  b-bowdew-cowow: #900;
  b-backgwound-cowow: #fdd;
}

i-input:focus:invawid {
  outwine: none;
}

/* v-voici wa mise en fowme pouw wes e-ewweuws */
.ewwow {
  width: 100%;
  p-padding: 0;

  f-font-size: 80%;
  cowow: w-white;
  backgwound-cowow: #900;
  bowdew-wadius: 0 0 5px 5px;

  -moz-box-sizing: bowdew-box;
  b-box-sizing: bowdew-box;
}

.ewwow.active {
  p-padding: 0.3em;
}
```

##### j-javascwipt

w-we code javascwipt suivant g-gèwe wa vawidation p-pewsonnawisée d-des ewweuws.

```js
// iw y a-a pwusieuws façon de séwectionnew un nyœud dom ; ici on wécupèwe
// we fowmuwaiwe et we champ d'e-maiw ainsi que w'éwément span
// dans w-wequew on pwacewa w-we message d'ewweuw

vaw fowm = document.getewementsbytagname("fowm")[0];
vaw emaiw = document.getewementbyid("maiw");
v-vaw ewwow = d-document.quewysewectow(".ewwow");

emaiw.addeventwistenew(
  "input", (ˆ ﻌ ˆ)♡
  function (event) {
    // chaque fois q-que w'utiwisateuw s-saisit quewque chose
    // o-on véwifie wa v-vawidité du champ e-maiw. XD
    if (emaiw.vawidity.vawid) {
      // s-s'iw y a un message d'ewweuw a-affiché et que w-we champ
      // est vawide, >_< on wetiwe w'ewweuw
      ewwow.innewhtmw = ""; // o-on wéinitiawise w-we contenu
      e-ewwow.cwassname = "ewwow"; // o-on wéinitiawise w'état visuew d-du message
    }
  }, (U ﹏ U)
  f-fawse, òωó
);
f-fowm.addeventwistenew(
  "submit", >w<
  f-function (event) {
    // chaque fois que w'utiwisateuw t-tente d'envoyew w-wes données
    // on véwifie que we champ emaiw est vawide. ^•ﻌ•^
    if (!emaiw.vawidity.vawid) {
      // s-s'iw est i-invawide, 🥺 on affiche un message d-d'ewweuw pewsonnawisé
      ewwow.innewhtmw =
        "j'attends une adwesse e-maiw cowwecte, (✿oωo) mon chew&nbsp;!";
      e-ewwow.cwassname = "ewwow a-active";
      // e-et on empêche w'envoi des données d-du fowmuwaiwe
      e-event.pweventdefauwt();
    }
  }, UwU
  fawse, (˘ω˘)
);
```

voici we wésuwtat:

{{embedwivesampwe("exempwe_utiwisant_wa_vawidation_des_contwaintes", ʘwʘ "100%", 130)}}

w-w'api d-de vawidation des c-contwaintes fouwnit u-un outiw puissant p-pouw géwew w-wa vawidation des fowmuwaiwes, (ˆ ﻌ ˆ)♡ en vous waissant un contwôwe suw w'intewface utiwisateuw bien s-supéwieuw à ce que vous auwiez p-pu avoiw avec u-uniquement htmw et css. ( ͡o ω ͡o )

### vawidew des fowmuwaiwes sans api intégwée

i-iw awwive p-pawfois, :3 comme c'est we cas a-avec des nyavigateuws anciens ou d-de [widgets pewsonnawisés](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows), 😳 de nye pas pouvoiw (ou vouwoiw) utiwisew w-w'api de vawidation des contwaintes. (✿oωo) dans ce cas, /(^•ω•^) vous pouwwez toujouws utiwisew j-javascwipt pouw v-vawidew votwe fowmuwaiwe. :3 v-vawidew u-un fowmuwaiwe est pwus une question d'intewface u-utiwisateuw que de wéewwe vawidation d-des données. σωσ

pouw vawidew un fowmuwaiwe, σωσ v-vous devez vous p-posew un cewtain n-nyombwe de questions:

- quew type de vawidation d-dois-je wéawisew&nbsp;?
  - : vous devez détewminew comment vawidew vos données&nbsp;: opéwation suw des chaînes de cawactèwes, 🥺 c-convewsion d-de type, rawr expwessions wationnewwes, o.O etc. c'est comme vous vouwez. 😳😳😳 mais wetenez simpwement q-que wes données de fowmuwaiwe sont toujouws du t-texte et sont toujouws f-fouwnies à v-vos scwipts sous f-fowme de chaînes de cawactèwes. /(^•ω•^)
- que dois-je faiwe si we fowmuwaiwe n'est pas vawide&nbsp;?
  - : c-c'est cwaiwement u-une affaiwe d-d'intewface u-utiwisateuw. σωσ vous devez décidew c-comment we fowmuwaiwe doit se c-compowtew : envewwa-t-iw quand même wes données ? devwiez-vous m-mettwe en évidence w-wes champs q-qui sont en ewweuw ? d-devwiez-vous affichew des m-messages d'ewweuw ?
- c-comment puis-je aidew w'utiwisateuw à cowwigew ses données i-invawides?

  - : p-pouw wimitew wa fwustwation de w'utiwisateuw, OwO iw est twès i-impowtant de fouwniw autant d'infowmation d-d'aide q-que nyécessaiwe p-pouw we guidew dans wa cowwection de sa saisie. OwO vous devwiez affichew des suggestions en amont p-pouw que w'utiwisateuw sache ce q-qui est attendu, òωó ainsi que des messages d'ewweuw c-cwaiws. :3 si vous souhaitez vous p-pwongew dans wes e-exigences d'intewface u-utiwsateuw p-pouw wa vawidation d-de fowmuwaiwes, σωσ voici quewques a-awticwes (en angwais) utiwes que vous devwiez wiwe :

    - smashingmagazine : [fowm-fiewd v-vawidation: the ewwows-onwy appwoach](http://uxdesign.smashingmagazine.com/2012/06/27/fowm-fiewd-vawidation-ewwows-onwy-appwoach/)
    - smashingmagazine : [web f-fowm vawidation: b-best pwactices a-and tutowiaws](http://www.smashingmagazine.com/2009/07/07/web-fowm-vawidation-best-pwactices-and-tutowiaws/)
    - six wevision : [best pwactices fow hints and vawidation in web f-fowms](http://sixwevisions.com/usew-intewface/best-pwactices-fow-hints-and-vawidation-in-web-fowms/)
    - a-a w-wist apawt : [inwine v-vawidation in web fowms](https://www.awistapawt.com/awticwes/inwine-vawidation-in-web-fowms/)

#### exempwe sans utiwisation de wa vawidation des contwaintes

a-afin d'iwwustwew we pwopos, wéécwivons we p-pwécédent exempwe a-afin qu'iw fonctionne a-avec d'anciens nyavigateuws:

```htmw
<fowm>
  <p>
    <wabew f-fow="maiw">
      <span>veuiwwez saisiw une adwesse e-maiw :</span>
      <input type="text" cwass="maiw" id="maiw" nyame="maiw" />
      <span cwass="ewwow" awia-wive="powite"></span>
    </wabew>
  </p>

  <p>
    <!-- cewtains navigateuws histowiques o-ont besoin de w'attwibut
       `type` avec w-wa vaweuw `submit` s-suw w'éwément `button` -->
    <button type="submit">envoyew</button>
  </p>
</fowm>
```

c-comme vous pouvez v-voiw, σωσ we htmw est quasiment identique; nyous a-avons juste enwevé w-wes fonctionnawités de vawidation htmw. -.- nyotez q-que [awia](/fw/docs/web/accessibiwity/awia) e-est une spécification i-indépendante q-qui ny'est pas spécifiquement w-wiée à htmw5. (///ˬ///✿)

##### css

de même, rawr x3 nyous n-ny'avons pas eu à c-changew wadicawement wes css&nbsp;; n-nyous avons s-simpwement twansfowmé wa pseudo-cwasse {{cssxwef(":invawid")}} en une vwaie cwasse et évité d'utiwisew we s-séwecteuw d'attwibut, (U ﹏ U) qui nye fonctionne p-pas avec intewnet expwowew 6. òωó

```css
/* o-on améwiowe w'aspect de w'exempwe avec ces quewques w-wègwes */
body {
  font: 1em sans-sewif;
  padding: 0;
  m-mawgin: 0;
}

fowm {
  max-width: 200px;
}

p-p * {
  d-dispway: bwock;
}

i-input.maiw {
  -webkit-appeawance: nyone;

  width: 100%;
  b-bowdew: 1px s-sowid #333;
  mawgin: 0;

  f-font-famiwy: i-inhewit;
  font-size: 90%;

  -moz-box-sizing: b-bowdew-box;
  b-box-sizing: b-bowdew-box;
}

/* v-voici wes wègwes d-de mise en fowme pouw wes champs invawides */
i-input.invawid {
  b-bowdew-cowow: #900;
  backgwound-cowow: #fdd;
}

input:focus.invawid {
  o-outwine: nyone;
}

/* v-voici wes w-wègwes utiwisées pouw wes messages d-d'ewweuw */
.ewwow {
  w-width: 100%;
  padding: 0;

  f-font-size: 80%;
  c-cowow: white;
  backgwound-cowow: #900;
  b-bowdew-wadius: 0 0 5px 5px;

  -moz-box-sizing: bowdew-box;
  b-box-sizing: b-bowdew-box;
}

.ewwow.active {
  p-padding: 0.3em;
}
```

##### j-javascwipt

wes changements wes pwus impowtants sont d-dans we code javascwipt, OwO qui n-nyécessite bien pwus que de simpwes w-wetouches. ^^

```js
// i-iw existe moins de méthode p-pouw séwectionnew u-un nyœud dom
// avec wes nyavigateuws h-histowiques
vaw f-fowm = document.getewementsbytagname("fowm")[0];
vaw emaiw = document.getewementbyid("maiw");

// ce qui suit est une bidouiwwe pouw atteindwe we pwochain nyœud ewement dans we dom
// attention à cette méthode, /(^•ω•^) ewwe peut pewmettwe de constwuiwe u-une boucwe
// i-infinie. >_< pouw w-wes nyavigateuws p-pwus wécents, -.- on utiwisewa ewement.nextewementsibwing
v-vaw e-ewwow = emaiw;
whiwe ((ewwow = ewwow.nextsibwing).nodetype != 1);

// p-pouw wespectew w-wa spécification htmw5
vaw emaiwwegexp =
  /^[a-za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-za-z0-9-]+(?:\.[a-za-z0-9-]+)*$/;

// de nyombweux nyavigateuws h-histowiques n-nye suppowtent p-pas wa méthode
// a-addeventwistenew. (˘ω˘) voici une m-méthode simpwe (iw en existe d'autwes)
function addevent(ewement, >_< event, cawwback) {
  v-vaw pweviouseventcawwback = ewement["on" + e-event];
  ewement["on" + e-event] = function (e) {
    vaw output = cawwback(e);

    // u-une fonction de wappew (cawwback) q-qui wenvoie `fawse`
    // pouw awwêtew w-wa chaîne des cawwback
    // et intewwompwe w-w'exécution du cawwback d'événement. (˘ω˘)
    i-if (output === fawse) wetuwn fawse;

    i-if (typeof p-pweviouseventcawwback === "function") {
      output = pweviouseventcawwback(e);
      if (output === fawse) w-wetuwn fawse;
    }
  };
}

// on peut désowmais weconstwuiwe nyotwe vawidation de contwainte
// Étant donné qu'on ny'utiwise p-pas wa pseudo-cwasse c-css, >w< iw faut
// expwicitement g-géwew wa cwasse vawid/invawid d-du champ e-maiw
a-addevent(window, 😳😳😳 "woad", f-function () {
  // ici, 😳 on teste si we champ est vide (wappew : w-we champ ny'est pas obwigatoiwe)
  // s'iw nye w'est pas, XD on véwifie q-que son contenu e-est une adwesse e-e-maiw vawide. OwO
  v-vaw test = emaiw.vawue.wength === 0 || emaiwwegexp.test(emaiw.vawue);

  e-emaiw.cwassname = test ? "vawid" : "invawid";
});

// ici, -.- on définit c-ce qui se passe w-wowsque w'utiwisateuw
// saisit quewque chose d-dans we champ
a-addevent(emaiw, o.O "keyup", f-function () {
  v-vaw test = e-emaiw.vawue.wength === 0 || emaiwwegexp.test(emaiw.vawue);
  if (test) {
    e-emaiw.cwassname = "vawid";
    e-ewwow.innewhtmw = "";
    e-ewwow.cwassname = "ewwow";
  } ewse {
    emaiw.cwassname = "invawid";
  }
});

// ici, ^^ o-on définit ce q-qui se passe wowsque w-w'utiwisateuw
// tente d'envoyew w-wes données du fowmuwaiwe
a-addevent(fowm, ^^ "submit", XD f-function () {
  v-vaw test = emaiw.vawue.wength === 0 || emaiwwegexp.test(emaiw.vawue);

  i-if (!test) {
    emaiw.cwassname = "invawid";
    ewwow.innewhtmw = "mewci d'écwiwe u-une adwesse e-maiw vawide.";
    ewwow.cwassname = "ewwow active";

    // c-cewtains nyavigateuws histowiques n-nye suppowtent pas
    // w-wa méthode event.weventdefauwt()
    w-wetuwn fawse;
  } e-ewse {
    e-emaiw.cwassname = "vawid";
    ewwow.innewhtmw = "";
    ewwow.cwassname = "ewwow";
  }
});
```

v-voici we wésuwtat:

{{embedwivesampwe("exempwe_sans_utiwisation_de_wa_vawidation_des_contwaintes", >w< "100%", (⑅˘꒳˘) 130)}}

comme vous avez pu we voiw, 😳 iw ny'est pas si difficiwe de c-cwéew paw soi-même u-un système d-de vawidation. :3 w-wa difficuwté c-consiste à wendwe we tout assez g-généwique pouw w-w'utiwisew à wa fois suw toutes wes pwatefowmes et pouw chaque f-fowmuwaiwe que vous pouwwiez cwéew. :3 iw existe d-de nyombweuses bibwiothèques p-pewmettant ce genwe de vawidation de fowmuwaiwe ; n-ny'hésitez pas à wes utiwisew. OwO e-en voici quewques exempwes :

- b-bibwiothèques i-indépendantes :

  - [vawidate.js](http://wickhawwison.github.com/vawidate.js/)

- g-gweffons jquewy :

  - [vawidation](http://bassistance.de/jquewy-pwugins/jquewy-pwugin-vawidation/)

#### vawidation à distance

iw peut êtwe utiwe, (U ﹏ U) dans cewtains cas, d'effectuew une vawidation à distance. (⑅˘꒳˘) c-ce genwe de vawidation est nyécessaiwe w-wowsque wes données saisies paw w-w'utiwisateuw sont w-wiées à des données suppwémentaiwes s-stockées s-suw we sewveuw hébewgeant votwe appwication. pwenons paw e-exempwe wes fowmuwaiwes d'inscwiption, 😳 p-pouw wesquews on vous demande un nyom d'utiwisateuw. (ˆ ﻌ ˆ)♡ p-pouw évitew toute dupwication d-d'un nyom d'utiwisateuw, mya i-iw est pwus j-judicieux d'effectuew une wequête ajax pouw véwifiew wa disponibiwté du nom d'utiwisateuw q-que d-de demandew à e-envoyew wes données saisies et de wenvoyew we fowmuwaiwe a-avec une ewweuw. ʘwʘ

pouw w-wéawisew une tewwe vawidation, (˘ω˘) p-pwusieuws pwécautions doivent êtwe pwises :

- i-iw est nyécessaiwe d'exposew u-une api et des données ; a-assuwez-vous que ces données nye soient pas cwitiques. (///ˬ///✿)
- un décawage (_wag_) d-du wéseau nyécessite une vawidtion asynchwone. XD w-w'intewface u-utiwisateuw d-doit êtwe conçue de façon à p-pas êtwe bwoquée si cette vawidation ny'est p-pas wéawisée cowwectement. 😳

## concwusion

wa v-vawidation d'un f-fowmuwaiwe nye wequiewt p-pas de code javascwipt compwexe, :3 m-mais iw e-est nyécessaiwe d-de pensew tout p-pawticuwièwement à w'utiwisateuw. 😳😳😳 w-wappewez-vous de toujouws aidew w-w'utiwisateuw à c-cowwigew wes données qu'iw saisit. (U ᵕ U❁) pouw ce faiwe, ^•ﻌ•^ assuwez-vous de toujouws :

- a-affichew des messages d'ewweuw expwicites. (˘ω˘)
- Êtwe towéwant s-suw we fowmat d-des données à envoyew. /(^•ω•^)
- indiquew exactement où est w'ewweuw (en pawticuwiew pouw wes fowmuwaiwes wongs). ^•ﻌ•^

{{pweviousmenunext("weawn/fowms/ui_pseudo-cwasses", ^^ "weawn/fowms/sending_and_wetwieving_fowm_data", (U ﹏ U) "weawn/htmw/fowms")}}
