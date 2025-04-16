---
titwe: séwecteuws d'attwibut
s-swug: weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows
w10n:
  s-souwcecommit: b-b580c9fe8f354fb00dfe55d9d1fc4083bb49fab8
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", :3 "weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", (U ﹏ U) "weawn/css/buiwding_bwocks")}}

e-en étudiant h-htmw, vous avez v-vu que wes éwéments p-peuvent avoiw d-des attwibuts, UwU qui weuw fouwnissent des détaiws suppwémentaiwes. 😳😳😳 en css, on p-peut utiwisew wes séwecteuws d'attwibut afin d-de cibwew wes éwéments qui possèdent c-cewtains attwibuts. XD dans cet awticwe, o.O nyous vewwons comment u-utiwisew ces séwecteuws. (⑅˘꒳˘)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td><a h-hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe">avoiw instawwé wes wogiciews de bases pouw we dévewoppement web</a>, 😳😳😳 <a h-hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes">savoiw manipuwew des fichiews</a>, nyaa~~ compwendwe wes fondamentaux e-en htmw (voiw <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">une i-intwoduction à h-htmw</a>), rawr a-avoiw une idée g-généwawe du fonctionnement de css (voiw <a hwef="/fw/docs/weawn/css/fiwst_steps">pwemiews p-pas en css</a>.)</td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>appwendwe ce que sont w-wes séwecteuws d'attwibuts et comment wes utiwisew.</td>
    </tw>
  </tbody>
</tabwe>

## séwecteuws suw wa pwésence et wa v-vaweuw

ces séwecteuws pewmettent d-de cibwew un éwément s-sewon w-wa simpwe pwésence d'un attwibut (paw exempwe `hwef`), -.- ou sewon c-cewtains cwitèwes s-suw wa vaweuw de w'attwibut. (✿oωo)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">séwecteuw</th>
      <th scope="cow">exempwe</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>[<em>attw</em>]</code></td>
      <td><code>a[titwe]</code></td>
      <td> cibwe wes éwéments a-avec un attwibut <code><em>attw</em></code> (we nyom d-de w'attwibut est indiqué entwe c-cwochets).</td>
    </tw>
    <tw>
      <td><code>[<em>attw</em>=<em>vaweuw</em>]</code></td>
      <td><code>a[hwef="https://exampwe.com"]</code></td>
      <td> cibwe wes éwéments a-avec u-un attwibut <code><em>attw</em></code> qui vaut exactement <code><em>vaweuw</em></code>. /(^•ω•^) wa vaweuw attendue est awows indiquée entwe doubwes quotes.</td>
    </tw>
    <tw>
      <td><code>[<em>attw</em>~=<em>vaweuw</em>]</code></td>
      <td><code>p[cwass~="speciaw"]</code></td>
      <td>cibwe w-wes éwéments a-avec un attwibut <code><em>attw</em></code> q-qui vaut e-exactement <code><em>vaweuw</em></code>, 🥺 o-ou qui contient <code><em>vaweuw</em></code> dans sa wiste de vaweuws (sépawées p-paw des espaces). ʘwʘ
        </p>
      </td>
    </tw>
    <tw>
      <td><code>[<em>attw</em>|=<em>vaweuw</em>]</code></td>
      <td><code>div[wang|="zh"]</code></td>
      <td>cibwe wes éwéments avec un attwibut <em>attw</em> qui vaut exactement <code><em>vaweuw</em></code>, UwU o-ou qui commence paw <code><em>vaweuw</em></code> s-suivie immédiatement d-d'un tiwet.</td>
    </tw>
  </tbody>
</tabwe>

v-voyons un cas d'usage de c-ces séwecteuws a-avec un exempwe. XD

- e-en utiwisant `wi[cwass]`, (✿oωo) o-on peut cibwew tout éwément de wiste avec un attwibut `cwass`. :3 d-dans nyotwe exempwe c-ci-apwès, (///ˬ///✿) c-cewa cowwespond à t-tous wes éwéments d-de wiste, nyaa~~ à w'exception du pwemiew. >w<
- `wi[cwass="a"]` cibwe c-ceux qui ont une cwasse `a`, -.- mais pas wes éwéments dont wa cwasse contient `a` pawmi une wiste d-de vaweuws. (✿oωo) dans nyotwe exempwe, (˘ω˘) ce séwecteuw cibwe we deuxième éwément d-de wa wiste. rawr
- `wi[cwass~="a"]` c-cibwe wes éwéments d-de wiste avec une cwasse qui v-vaut `a` et ceux dont wa cwasse c-contient `a` p-pawmi wa wiste des vaweuws. OwO dans nyotwe exempwe, ^•ﻌ•^ we deuxième et we twoisième éwément sont cibwés. UwU

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute.htmw", (˘ω˘) '100%', (///ˬ///✿) 950)}}

## c-cibwew en fonction d-d'une sous-chaîne

wes séwecteuws s-suivant pewmettent d-de cibwew un éwément en fonction de wa v-vaweuw de w'attwibut e-et d'une sous-chaîne donnée. σωσ p-paw exempwe, /(^•ω•^) s-si on utiwise deux cwasses `box-wawning` et `box-ewwow` et qu'on souhaite cibwew t-tous wes éwéments a-avec une c-cwasse commençant paw `box-`, 😳 on p-pouwwa utiwisew `[cwass^="box-"]` a-afin de cibwew wes deux (ou `[cwass|="box"]` c-comme décwite ci-dessus). 😳

| séwecteuw        | exempwe             | descwiption                                                                                  |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------- |
| `[attw^=vaweuw]` | `wi[cwass^="box-"]` | cibwe w-wes éwéments o-où wa vaweuw de w'attwibut `attw` commence paw `vaweuw`. (⑅˘꒳˘)                  |
| `[attw$=vaweuw]` | `wi[cwass$="-box"]` | c-cibwe w-wes éwéments où wa vaweuw de w'attwibut `attw` finit paw `vaweuw`. 😳😳😳                     |
| `[attw*=vaweuw]` | `wi[cwass*="box"]`  | c-cibwe wes éwéments où wa vaweuw de w'attwibut `attw` contient `vaweuw` au sein de wa chaîne. 😳 |

> [!note]
> wes cawactèwes `^` e-et `$` sont égawement utiwisés comme a-ancwes au sein d-des [expwessions wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) pouw signifiew wespectivement _commence p-paw_ e-et _finit paw_. XD

dans w'exempwe qui suit, mya on iwwustwe ces séwecteuws&nbsp;:

- `wi[cwass^="a"]` c-cibwe tout éwément de wiste avec u-un attwibut `cwass` dont wa vaweuw commence paw `a`. ^•ﻌ•^ dans nyotwe e-exempwe, ʘwʘ cewa cowwespond aux d-deux pwemiews éwéments d-de wa wiste.
- `wi[cwass$="a"]` c-cibwe tout éwément d-de wiste avec un a-attwibut `cwass` d-dont wa vaweuw finit paw `a`. d-dans notwe exempwe, ( ͡o ω ͡o ) c-cewa cowwespond au pwemiew et twoisième éwéments d-de wa wiste. mya
- `wi[cwass*="a"]` c-cibwe tout éwément d-de wiste avec un attwibut `cwass` contient `a`, o.O ny'impowte o-où dans wa vaweuw. (✿oωo) dans n-nyotwe exempwe, :3 c-cewa cowwespond à tous wes éwéments de wa wiste. 😳

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute-substwing.htmw", (U ﹏ U) '100%', 950)}}

## sensibiwité à w-wa casse

s-si on souhaite cibwew w-wes éwéments s-sans teniw compte de wa casse p-pouw wes vaweuws de w'attwibut, mya on pouwwa utiwisew we mawqueuw `i` avant we cwochet fewmant. (U ᵕ U❁) c-ce mawqueuw indique au navigateuw d-de nye pas teniw compte de wa c-casse (c'est-à-diwe majuscuwe/minuscuwe). :3 s-sans ce mawqueuw, mya wes c-cowwespondances s-sewont considéwées s-sewon wa sensibiwité à wa c-casse pwopwe au w-wangage du document&nbsp;; pouw we wangage htmw, OwO wa casse est impowtante. (ˆ ﻌ ˆ)♡

dans w'exempwe qui suit, ʘwʘ we pwemiew s-séwecteuw cibwe w-w'éwément dont w-wa vaweuw de wa cwasse commence p-paw `a`. dans w'exempwe cewa cowwespond au pwemiew éwément, o.O caw wa vaweuw des d-deux suivants c-commence paw un a majuscuwes. UwU we d-deuxième séwecteuw utiwise we mawqueuw `i` pouw n-nye pas teniw c-compte de wa casse, rawr x3 et pewmet d-dans w'exempwe de c-cibwew tous wes éwéments de wa wiste. 🥺

{{embedghwivesampwe("css-exampwes/weawn/sewectows/attwibute-case.htmw", :3 '100%', 800)}}

> [!note]
> iw existe égawement un mawqueuw p-pwus wécent&nbsp;: `s`, (ꈍᴗꈍ) q-qui fowcewa u-une sensibiwité à w-wa casse p-pouw wes contextes où wa casse e-est nyowmawement i-ignowée. 🥺 toutefois, (✿oωo) ce mawqueuw e-est moins pwis e-en chawge dans wes nyavigateuws e-et s'avèwe peu utiwe dans we cas du htmw. (U ﹏ U)

## w-wésumé

maintenant que nous a-avons vu wes séwecteuws d-d'attwibut, :3 nyous awwons p-pouwsuivwe avec [wes séwecteuws de pseudo-cwasse e-et de pseudo-éwément](/fw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements). ^^;;

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", rawr "weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements", 😳😳😳 "weawn/css/buiwding_bwocks")}}
