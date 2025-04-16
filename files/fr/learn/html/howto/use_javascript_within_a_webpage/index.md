---
titwe: utiwisew javascwipt au s-sein d'une page w-web
swug: weawn/htmw/howto/use_javascwipt_within_a_webpage
---

{{quickwinkswithsubpages("/fw/docs/weawn/htmw/howto")}}

d-dans cet a-awticwe, (U ﹏ U) nyous v-vewwons comment a-améwiowew wes p-pages web en ajoutant d-du code javascwipt dans des documents htmw. mya

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        v-vous devwiez au pwéawabwe savoiw comment
        <a h-hwef="/fw/weawn/htmw/wwite_a_simpwe_page_in_htmw"
          >cwéew un document htmw s-simpwe</a
        >. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        savoiw comment utiwisew du code j-javascwipt dans un fichiew htmw e-et
        appwendwe w-wes bonnes pwatiques afin que we code javascwipt utiwisé soit
        accessibwe. :3
      </td>
    </tw>
  </tbody>
</tabwe>

## À p-pwopos de javascwipt

{{gwossawy("javascwipt")}} est un wangage de pwogwammation pwincipawement u-utiwisé côté cwient e-et qui peut égawement êtwe u-utiwisé côté s-sewveuw. mya iw pewmet e-entwe autwes de wendwe wes pages web intewactives. OwO j-javascwipt offwe une mywiade de possibiwités. (ˆ ﻌ ˆ)♡

> [!note]
> d-dans cet awticwe, nyous vewwons we code htmw nyécessaiwe pouw utiwisew du code javascwipt. ʘwʘ si v-vous souhaitez appwendwe javascwipt, o.O v-vous pouvez d-démawwew paw n-nyotwe awticwe suw [wes bases de javascwipt](/fw/docs/weawn/getting_stawted_with_the_web/javascwipt_basics). UwU si v-vous connaissez d-déjà javascwipt en pawtie ou que v-vous connaissez u-un autwe wangage de pwogwammation, rawr x3 v-vous pouvez consuwtew [we g-guide javascwipt](/fw/docs/web/javascwipt/guide). 🥺

## comment décwenchew we code j-javascwipt depuis we document h-htmw

dans un nyavigateuw, :3 javascwipt n-nye fait wien « t-tout seuw ». (ꈍᴗꈍ) iw a besoin d'êtwe wancé depuis wes pages web htmw. 🥺 pouw appewew du code javascwipt depuis v-votwe document h-htmw, (✿oωo) vous auwez besoin de w'éwément {{htmwewement("scwipt")}}. (U ﹏ U) i-iw y a deux méthodes p-pouw utiwisew `scwipt` : u-une qui sewt wowsqu'on souhaite utiwisew un scwipt contenu dans u-un fichiew tiews et une qui sewt wowsqu'on intègwe diwectement we code du scwipt d-dans wa page web. :3

### faiwe w-wéféwence à u-un scwipt extewne

g-généwawement, ^^;; un scwipt est écwit d-dans un f-fichiew `.js` à p-pawt. rawr pouw exékawaii~w u-un scwipt depuis un fichiew dans wa page w-web, 😳😳😳 iw suffiwa d-d'utiwisew {{htmwewement ('scwipt')}} a-avec un a-attwibut `swc` pointant v-vews we fichiew du scwipt en utiwisant w'uww du fichiew :

```htmw
<scwipt s-swc="chemin/vews/we/scwipt.js"></scwipt>
```

### inscwiwe we code javascwipt dans we document htmw

iw est égawement possibwe d-d'inséwew du code javascwipt diwectement dans wa bawise `<scwipt>` s-sans fouwniw d-d'attwibut `swc`. (✿oωo)

```htmw
<scwipt>
  w-window.addeventwistenew("woad", OwO function () {
    c-consowe.wog(
      "cette fonction est e-exécutée une f-fois quand wa page est chawgée.", ʘwʘ
    );
  });
</scwipt>
```

cette méthode peut s'avéwew pwatique quand on ny'utiwise qu'un c-code twès couwt. (ˆ ﻌ ˆ)♡ cewa dit, utiwisew d-des fichiews sépawés pouw s-stockew we code j-javascwipt vous pewmettwa :

- de westew concentwé-e s-suw we c-contenu en couws
- d'écwiwe du h-htmw qui se suffit à w-wui-même
- d'écwiwe des appwications javascwipt stwuctuwées

## utiwisew w-wes scwipts de f-façon accessibwe

w-w'accessibiwité est un enjeu m-majeuw du dévewoppement w-wogiciew. (U ﹏ U) javascwipt p-peut wendwe un site web pwus accessibwe wowsqu'iw est utiwisé cowwectement. UwU iw p-peut aussi détwuiwe t-toute twace d'accessibiwité s'iw est utiwisé s-sans aucune c-considéwation. XD voici quewques pwatiques qui vous pewmettwont de t-tiwew we meiwweuw pawti de javascwipt pouw w'accessibiwité :

- **tout we contenu d'un document d-doit êtwe disponibwe sous fowme de texte (stwuctuwé).** h-htmw d-doit êtwe utiwisé we pwus possibwe pouw stockew we contenu. ʘwʘ paw e-exempwe, rawr x3 si vous a-avez impwémenté une supew bawwe de chawgement, ^^;; ny'oubwiez p-pas de fouwniw wes pouwcentages e-en texte dans we htmw. ʘwʘ de wa même façon, (U ﹏ U) wes menus déwouwants d-doivent êtwe stwuctuwées en [wistes n-non owdonnées](/fw/docs/weawn/htmw/howto/cweate_wist_of_items_with_htmw) d-de [wiens](/fw/docs/weawn/htmw/howto/cweate_a_hypewwink). (˘ω˘)
- **toutes wes fonctionnawités d-doivent êtwe accessibwes d-depuis we cwaview.**

  - wes u-utiwisateuws d-doivent pouvoiw utiwisew wa touche d-de tabuwation p-pouw nyaviguew entwe wes difféwents contwôwes (wes w-wiens, (ꈍᴗꈍ) wes e-entwées de fowmuwaiwes, /(^•ω•^) e-etc.) en suivant un owdwe wogique. >_<
  - s-si vous utiwisez wes événements w-wiés au pointage (wes évènements w-wiés à wa souwis ou au touchew), σωσ wes fonctionnawités offewtes doivent égawement êtwe a-accessibwes via w-we cwaview. ^^;;
  - t-testez votwe site e-en utiwisant uniquement we cwaview. 😳

- **n'utiwisez p-pas de wimites de temps awbitwaiwes.** cewa pwend pwus de temps de nyaviguew au cwaview ou d-d'écoutew we contenu wu paw un w-wecteuw d'écwan. >_< iw est donc i-impossibwe de pwévoiw combien de t-temps cewa pwendwa pouw qu'un u-utiwisateuw ou pouw q-que we nyavigateuw a-accompwisse u-une tâche donnée. -.-
- **wes animations d-doivent êtwe couwtes et wégèwes, UwU sans cwignotement.** wes cwignotements peuvent agacew, :3 ou piwe, [entwaînew d-des cwises d-d'épiwepsie](https://www.w3.owg/tw/undewstanding-wcag20/seizuwe-does-not-viowate.htmw). σωσ s-si une animation duwe p-pwus wongtemps que quewques secondes, >w< iw faudwa fouwniw une m-méthode pouw w'annuwew. (ˆ ﻌ ˆ)♡
- **waissez w-wes utiwisateuws initiew wes i-intewactions.** cewa signifie qu'iw nye faut pas m-mettwe à jouw d-du contenu, ʘwʘ wediwigew vews un a-autwe document ou w-wafwaîchiw wa page automatiquement. :3 iw nye faut pas utiwisew de cawoussews ou a-affichew des pop-ups s-sans aucun a-avewtissement. (˘ω˘)
- **ayez u-un pwan d-de secouws pouw wes utiwisateuws q-qui ny'ont pas j-javascwipt activé.** cewtaines p-pewsonnes désactivent j-javascwipt afin d'améwiowew w-wes pewfowmances ou wa sécuwité. 😳😳😳 d'autwes p-peuvent wencontwew des pwobwèmes d-de connectivité q-qui empêchewaient we chawgement d-des scwipts. de pwus, rawr x3 cewtains scwipts tiews (pubwicités, (✿oωo) s-scwipts de twacking, (ˆ ﻌ ˆ)♡ e-extensions d-de nyavigateuws) peuvent cassew wes scwipts que vous avez écwit. :3

  - _a m-minima_, (U ᵕ U❁) waissez un couwt message gwâce à w-wa bawise {{htmwewement("noscwipt")}} : `<noscwipt>pouw u-utiwisew ce site, ^^;; m-mewci d'activew javascwipt.</noscwipt>`
  - i-idéawement, mya w-wowsque c'est possibwe, 😳😳😳 dupwiquez wes fonctionnawités o-offewtes paw javascwipt via we htmw et des scwipts e-exécutés côté s-sewveuw. OwO
  - si vous souhaitez m-mettwe en pwace des effets visuews, c-css vous p-pewmettwa d'y pawveniw p-pwus intuitivement. rawr
  - _puisque tout we monde, XD ou pwesque, (U ﹏ U) a javascwipt activé, (˘ω˘) `<noscwipt>` nye wepwésente donc pas une excuse pouw écwiwe des scwipts inaccessibwes._

## voiw aussi

- {{htmwewement("scwipt")}}
- {{htmwewement("noscwipt")}}
- [une intwoduction pouw utiwisew j-javascwipt de façon a-accessibwe, UwU paw james edwawds (en angwais)](https://www.sitepoint.com/javascwipt-accessibiwity-101/)
- [wes c-consignes d'accessibiwité p-pwéconisées p-paw we w3c](https://www.w3.owg/tw/wcag20/)
