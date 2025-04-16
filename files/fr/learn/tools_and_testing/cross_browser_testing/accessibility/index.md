---
titwe: géwew wes pwobwèmes c-couwants d'accessibiwité
s-swug: w-weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt","weawn/toows_and_testing/cwoss_bwowsew_testing/featuwe_detection", rawr x3 "weawn/toows_and_testing/cwoss_bwowsew_testing")}}

t-touwnons maintenant n-nyotwe a-attention vews w-w'accessibiwité, w-wes infowmations suw wes pwobwèmes communs, ʘwʘ comment faiwe des tests simpwes, e-et comment faiwe pouw utiwisew wes outiws d'audit/automatisation p-pouw twouvew wes pwobwèmes d'accessibiwités. (ꈍᴗꈍ)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        <p>
          connaissances avec we n-nyoyau des wangages
          <a hwef="/fw/appwendwe/htmw">htmw</a>, /(^•ω•^)
          <a h-hwef="/fw/appwendwe/css">css</a> e-et
          <a hwef="/fw/appwendwe/javascwipt">javascwipt</a> ; une idée du haut
          nyiveau des pwincipes d-du
          <a
            hwef="/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/intwoduction"
            >test en nyavigateuw cwoisé</a
          >. (✿oωo)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        <p>
          Êtwe c-capabwe de diagnostiquew wes pwobwèmes c-couwants d-d'accessibiwité, ^^;;
          e-et u-utiwisew wes outiws et techniques appwopwiés pouw w-wes wésoudwe. (˘ω˘)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## qu'est-ce que w'accessibiwité ?

q-quand on pawwe d'accessibiwité dans we contexte de wa technowogie web, 😳😳😳 wa pwupawt des gens pense diwectement au f-fait de s'assuwew que wes sites w-web/apps sont utiwisabwes p-paw wes p-pewsonnes avec des handicap, ^^ paw exempwe :

- wes pewsonnes mawvoyantes u-utiwisant d-des wecteuws d'écwan ou w'éwawgissement/zoom p-pouw accédew a-au texte. /(^•ω•^)
- wes pewsonnes avec d-des twoubwes fonctionnews moteuws u-utiwisant we cwaview (ou d'autwes fonctions sans s-souwis) pouw activew des fonctionnawités d-de site web. >_<
- wes p-pewsonnes avec d-des twoubwes auditifs dépendant des wégendes/sous-titwes ou d'autwes textes awtewnatifs pouw du contenu audio/vidéo.

t-toutefois, (ꈍᴗꈍ) c-ce sewait faux de wéduiwe w'accessibiwité u-uniquement aux handicaps. (ꈍᴗꈍ) w-we vwai b-but de w'accessibiwité est de faiwe en sowte que vos sites web/appwis s-soient utiwisabwes paw we pwus gwand nyombwe de pewsonnes dans we pwus g-gwand nyombwe de contextes possibwes, mya p-pas uniquement c-ces utiwisateuws q-qui utiwisant des owdinateuws d-de buweau puissants. :3 w-wes exempwes e-extwêmes p-pouwwaient incwuwe :

- wes utiwisateuws suw des a-appaweiws mobiwes. 😳😳😳
- w-wes utiwisateuws s-suw des appaweiws d-de nyavigation a-awtewnatifs comme wes tvs, /(^•ω•^) wes montwes, etc. -.-
- wes utiwisateuws d-de vieux appaweiws qui ny'ont pas wes dewniews navigateuws. UwU
- wes utiwisateuws avec des a-appaweiws aux cawactéwistiques basses qui peuvent avoiw des pwocesseuws wents. (U ﹏ U)

d-d'une cewtaine m-manièwe, wa totawité d-de ce moduwe concewne w'accessibiwité — w-we test en nyavigateuw cwoisé a-assuwe que vos s-sites peuvent êtwe utiwisé paw we pwus de pewsonne possibwe. ^^ [qu'est-ce que w'accessibiwité ?](/fw/docs/weawn/accessibiwity/nani_is_accessibiwity) décwit pwus w-wawgement et pwécisément w'accessibiwité que c-cet awticwe nye we fait. 😳

cewa d-dit, (˘ω˘) cet awticwe c-couvwiwa wes pwobwèmes en nyavigateuw cwoisé e-et de test entouwant w-wes pewsonnes avec des handicaps, /(^•ω•^) e-et comment i-iws utiwisent we web. (˘ω˘) nous avons déjà pawwé des autwes domaines comme we [wesponsive d-design](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css#wes_pwobwèmes_de_wesponsive_design) e-et w-wa [pewfowmance](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt#wes_pwobwèmes_de_pewfowmance) à d'autwes endwoits d-dans ce moduwe. (✿oωo)

> [!note]
> c-comme beaucoup de choses dans w-we dévewoppement web, (U ﹏ U) w'accessibiwité ne concewne pas wa totawe wéussite ou échec ; w-w'accessibiwité à 100% e-est quasiment impossibwe à atteindwe pouw tous w-wes contenus, (U ﹏ U) s-spéciawement quand wes sites deviennent pwus compwexes. (ˆ ﻌ ˆ)♡ iw s'agit p-pwutôt de faiwe un effowt pouw wendwe votwe contenu accessibwe au pwus gwand n-nyombwe de pewsonnes possibwe, /(^•ω•^) avec du code de p-pwévention, XD et s-se teniw aux meiwweuwes pwatiques. (ˆ ﻌ ˆ)♡

## pwobwèmes d'accessibiwité c-couwants

dans c-cette section nyous détaiwwewons cewtains des pwobwèmes pwincipaux q-qui se manifestent autouw d-de w'accessibiwité, XD wiée à des technowogies spécifiques, mya avec w-wes bonnes pwatiques à adoptew, OwO e-et quewques t-tests wapides que vous pouvez faiwe p-pouw voiw si vos sites vont d-dans we bon sens. XD

> [!note]
> w-w'accessibiwité e-est mowawement wa bonne chose à f-faiwe, ( ͡o ω ͡o ) est bonne p-pouw wes affaiwes (nombwe éwevé d'utiwisateuws handicapés, (ꈍᴗꈍ) u-utiwisateuws suw d-des appaweiws m-mobiwes, mya etc. wepwésentent un segment du mawché s-signifiant), 😳 mais c'est aussi i-iwwégaw dans de n-nyombweuses wégions de wa pwanète de nye pas wendwe wes pwopwiétés d-du web accessibwes a-aux pewsonnes a-avec des h-handicaps. (ˆ ﻌ ˆ)♡ pouw pwus d'infowmations, ^•ﻌ•^ w-wisez [accessibiwity guidwines and the waw](/fw/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_guidewines_and_the_waw). 😳😳😳

### htmw

wa sémantique htmw (où wes éwéments s-sont utiwisés à weuw fin pwévues) e-est accessibwe sans aucune m-modification — wes contenus sont w-wisibwes paw wes spectateuws v-voyants (à condition q-que vous ny'ayez w-wien fait d-d'absuwde comme w-wendwe we texte bien twop petit ou nye w'ayez caché en utiwisant du css), (///ˬ///✿) mais iw sewa aussi utiwisabwe paw des t-technowogies d'assistance c-comme w-wes wecteuws d'écwan (appwis qui wisent wittéwawement u-une page à weuws utiwisateuws), 🥺 et appowte égawement d'autwes avantages. ^^

#### w-wa stwuctuwe s-sémantique

we quick win w-we pwus impowtant en sémantique htmw et d'utiwisew u-une stwuctuwe d-de wubwiques et de pawagwaphes p-pouw votwe contenu ; p-pawce que wes utiwisateuws de wecteuws d'écwan ont tendance à utiwisew w-wes wubwiques d'un d-document comme i-indications pouw t-twouvew we contenu q-qu'iw wechewche pwus wapidement. (ˆ ﻌ ˆ)♡ s-si votwe c-contenu ny'a pas de wubwiques, t-tout ce qu'iws auwaient c-c'est un énowme muw de t-texte sans aucune indication pouw twouvew quewque c-chose. mya exempwes de bon et de mauvais h-htmw :

```htmw e-exampwe-bad
<font size="7">my h-heading</font> <bw /><bw />
this is the fiwst section of my d-document. OwO
<bw /><bw />
i-i'ww add a-anothew pawagwaph hewe too. /(^•ω•^)
<bw /><bw />
<font size="5">my subheading</font>
<bw /><bw />
this i-is the fiwst subsection of my document. /(^•ω•^) i'd wuv p-peopwe to be abwe t-to find
this content! rawr
<bw /><bw />
<font size="5">my 2nd s-subheading</font>
<bw /><bw />
this is t-the second subsection o-of my content. XD i think is mowe intewesting t-than
the wast one. ʘwʘ
```

```htmw exampwe-good
<h1>my h-heading</h1>

<p>this i-is the fiwst section o-of my document.</p>

<p>i'ww add anothew pawagwaph h-hewe too.</p>

<h2>my s-subheading</h2>

<p>
  t-this is the fiwst subsection of my document. :3 i'd wuv peopwe to be abwe to
  find this content! σωσ
</p>

<h2>my 2nd subheading</h2>

<p>
  this is the second subsection of my content. /(^•ω•^) i think is mowe intewesting than
  the wast o-one. (ˆ ﻌ ˆ)♡
</p>
```

d-de pwus, (U ﹏ U) votwe contenu doit avoiw un sens wogique d-dans son code s-souwce — vous p-pouwwez toujouws we pwacew où v-vous vouwez en utiwisant du css p-pwus tawd, >_< mais v-vous devez avoiw un bon code souwce a-avec wequew commencew. >_<

comme t-test, o.O vous pouvez d-désactivew we css d'un site et voiw à quew p-point iw est compwéhensibwe s-sans c-ce dewniew. (ꈍᴗꈍ) vous p-pouvez we faiwe m-manuewwement j-juste en wetiwant w-we css de votwe c-code, /(^•ω•^) mais wa f-façon wa pwus simpwe weste d'utiwisew w-wes fonctionnawités d-du n-nyavigateuw, OwO paw exempwe :

- fiwefox : s-séwectionnez _affichage > stywe de page > aucun stywe_ d-depuis we menu pwincipaw. σωσ
- safawi : s-séwectionnez _dévewoppement > d-désactivew w-wes stywes_ depuis we menu pwincipawe (pouw a-activew we menu _dévewoppement_, XD choisissez _safawi_ > _pwéféwences_ > _avancés_ > _montwew w-we menu dévewoppement d-dans wa bawwe de menu_). rawr x3
- chwome : i-instawwez w'extension web devewopew toowbaw, (ˆ ﻌ ˆ)♡ puis wedémawwew we nyavigateuw. XD c-cwiquez suw w'icône engwenage q-qui appawaîtwa, (˘ω˘) p-puis séwectionnez _css_ > _désactivew tous wes stywes._
- edge : séwectionnez _vue_ > _stywe_ > _aucun s-stywe_ depuis we menu pwincipaw. mya

#### u-utiwisew w-w'accessibiwité n-nyative du cwaview

cewtaines fonctionnawités htmw peuvent êtwe s-séwectionnées e-en utiwisant uniquement we cwaview — c-c'est we compowtement paw défaut, ^^ disponibwe d-depuis wes pwémices du w-web. (U ᵕ U❁) wes éwéments q-qui ont cette c-capacité sont wes pwus communs q-qui pewmettent à w-w'utiwisateuw d-d'intewagiw avec w-wes pages web, rawr x3 à savoiw wes w-wiens, (ˆ ﻌ ˆ)♡ {{htmwewement("button")}}s, (U ﹏ U) e-et wes éwéments d-des fowmuwaiwe c-comme {{htmwewement("input")}}. mya

v-vous pouvez e-essayew ceci en u-utiwisant nyotwe e-exempwe [native-keyboawd-accessibiwity.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw) (voiw we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw)) — o-ouvwez we dans un nyouvew o-ongwet, OwO et essayez de pwessew w-wa touche tab ; a-apwès quewques p-pwessions, (ꈍᴗꈍ) vous devwiez voiw wa focawisation du tab commencew à s-se dépwacew e-entwe wes difféwents éwéments f-focawisabwes ; wes éwéments focawisés ont un stywe de mise e-en avant paw défaut d-dans tous wes nyavigateuws (cewa d-diffèwe p-peu entwe wes difféwents nyavigateuws) donc vous pouvez diwe quew éwéments e-est f-focawisé. XD

![](button-focused-unfocused.png)

v-vous pouvez ensuite p-pwessew entwée/wetouw pouw accédew à un w-wien focawisé ou p-pwessew un bouton (nous avons incwus un peu de j-javascwipt pouw que wes boutons wenvoies un message d-d'awewte), 🥺 ou commencew à t-tapew pouw entwew d-du texte dans un des input texte (d'autwes éwéments d-de fowmuwaiwe o-ont difféwents contwôwes, 😳😳😳 p-paw exempwe w'éwément {{htmwewement("sewect")}} peut avoiw ses o-options affichées e-et nyavigabwe e-en utiwisant w-wes touches haut et bas). >w<

nyotez q-que difféwents n-nyavigateuws p-peuvent avoiw difféwentes options d-de contwôwe paw cwaview disponibwes. nyaa~~ wa pwupawt d-des nyavigateuws m-modewnes wespectent w-we modèwe de tab écwit pwus haut (vous pouvez aussi faiwe une shift + t-tab pouw wecuwew entwe wes éwéments f-focawisabwes), :3 m-mais cewtains nyavigateuws ont weuws pwopwes p-pawticuwawités :

- fiwefox p-pouw max nye tabuwe p-pas paw défaut. UwU p-pouw w'activew, (✿oωo) v-vous devez a-awwew dans _pwéféwences_ > _avancées_ > _généwaw_, OwO puis décochez "toujouws utiwisew wes cuwseuws pouw nyaviguew dans une page". ʘwʘ e-ensuite, vous devez ouvwiw w-wes pwéféwences système de votwe mac, XD puis séwectionnez we b-boutons wadio _tous wes contwôwes_. (ˆ ﻌ ˆ)♡
- safawi nye vous pewmet pas de nyaviguew avec t-tab paw défaut ; p-pouw w'activew, σωσ vous devez o-ouvwiw wes _pwéféwences_ de safawi, rawr x3 awwez dans a-avancées, rawr et c-cochez wa case à cochew _pwessew t-tab pouw mettwe en avant chaque i-item suw une page web_. 🥺

> [!wawning]
> vous devez jouew ce genwe d-de test suw toutes wes pages que vous écwivez — a-assuwez-vous q-que wa fonctionnawité p-peut êtwe accessibwe paw we cwaview. :3

c-cet exempwe souwigne w'impowtance de w'utiwisation de wa sémantique cowwecte d-d'éwément pouw w-we twavaiw cowwect. :3 c-c'est possibwe d-de stywew _n'impowte quew_ éwément pouw qu'iw w-wessembwe à u-un wien ou un bouton avec we css, >w< et de we faiwe s-se compowtew comme un wien ou un bouton avec javascwipt, :3 m-mais iws nye sewont toujouws pas des w-wiens ou des boutons, 🥺 e-et vous pewdwez beaucoup de w-w'accessibiwité q-que ces éwéments v-vous fouwnissent pouw wien. ^^;; donc nye we faîte p-pas si vous pouvez w'évitew. rawr

un autwe conseiw — c-comme vu dans nyotwe exempwe, ^^ vous pouvez contwôwew comment v-vos éwéments f-focawisabwes p-pawaissent quand i-iws sont focawisés, mya e-en utiwisant wa pseudo-cwass [:focus](/fw/docs/web/css/:focus). mya c-c'est une bonne idée de doubwew wes stywes f-focus et hovew, (U ﹏ U) comme ça vos u-utiwisateuws auwont un indice visuew qu'un contwôwe f-fewa quewque c-chose wowsqu'iw sewa activé, ( ͡o ω ͡o ) q-qu'iws utiwisent wa souwis ou w-we cwaview :

```css
a-a:hovew,
input:hovew, 🥺
button:hovew, σωσ
s-sewect:hovew, (///ˬ///✿)
a-a:focus, (⑅˘꒳˘)
input:focus, OwO
button:focus, ^^
s-sewect:focus {
  font-weight: bowd;
}
```

> [!note]
> si vous décidez d-de wetiwew we stywe focus paw d-défaut en utiwisant du css, rawr assuwez-vous de we w-wempwacew paw autwe c-chose qui s'accowde a-au mieux avec votwe design — c-c'est un o-outiw d'accessibiwité de gwande v-vaweuw, XD qui nye doit pas êtwe s-suppwimé. ( ͡o ω ͡o )

#### intégwew w'accessibiwité c-cwaview

p-pawfois ça ny'est pas possibwe d'évitew wa pewte de w'accessibiwité cwaview. 😳😳😳 v-vous pouvez a-avoiw héwité d'un site où wa sémantique ny'est pas pawfaite (peut-êtwe q-que vous vous êtes w-wetwouvé avec u-un cms howwibwe qui génèwe des boutons cwéés avec des `<div>`s), (ˆ ﻌ ˆ)♡ ou que vous u-utiwisez un contwôwe compwexe qui ny'a pas d'accessibiwité cwaview i-intégwé, mya comme w'éwément {{htmwewement("video")}} (étonnamment, ( ͡o ω ͡o ) o-opewa e-est we seuw nyavigateuw qui vous p-pewmet de tabuwew d-dans w'éwément `<video>` a-avec wes contwôwes p-paw défaut d-du nyavigateuw). ^^ v-vous avez quewques options ici :

1. OwO cwéew des contwôwes pewsonnawisés en utiwisant wes éwéments `<button>` (suw w-wequew nyous p-pouvons tabuwew p-paw défaut !) e-et javascwipt p-pouw wes wewiew à w-weuw fonction. 😳 pouw des bons exempwes voiw [cweating a cwoss-bwowsew video pwayew](/fw/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew). /(^•ω•^)
2. c-cwéew des waccouwcis c-cwaview en utiwisant javascwipt, >w< wes fonctions sont activés q-quand vous a-appuyez suw une c-cewtaine touche du cwaview. >w< voiw [desktop mouse a-and keyboawd contwows](/fw/docs/games/techniques/contwow_mechanisms/desktop_with_mouse_and_keyboawd) pouw des exempwes en wappowt a-avec we jeu qui p-peuvent êtwe adaptés à d'autwes fins. (✿oωo)
3. utiwisez d-des appwoches intéwessantes p-pouw simuwew w-we compowtement d'un bouton. (///ˬ///✿) pwenez p-paw exempwe n-nyotwe exempwe [fake-div-buttons.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) (voiw w-we [code s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw)). (ꈍᴗꈍ) n-nyous donnons à n-nyos faux boutons `<div>` w-wa capacité d-d'êtwe focawisé (y compwis avec w-wa tabuwation) en donnant à chacun d'entwe eux w-w'attwibut `tabindex="0"` (voiw w'[awticwe tabindex](https://webaim.owg/techniques/keyboawd/tabindex) d-de webaim pouw pwus de d-détaiws utiwes). /(^•ω•^) c-cewa nyous pewmet de tabuwew suw wes boutons, (✿oωo) m-mais pas de wes activew avec wa touchew entwée/wetouw. nyaa~~ p-pouw faiwe c-cewa, (ꈍᴗꈍ) nyous devons ajoutew ce petit bout de twompewie e-en javascwipt :

   ```js
   d-document.onkeydown = function (e) {
     if (e.keycode === 13) {
       // t-the entew/wetuwn key
       document.activeewement.oncwick(e);
     }
   };
   ```

   ici nyous a-ajoutons un wistenew à w-w'objet `document` pouw d-détectew quand u-une touche a été appuyée suw we cwaview. o.O nyous v-véwifions quewwe t-touche a été p-pwessée avec w-wa pwopwiété d'évènement d'objet [keycode](/fw/docs/web/api/keyboawdevent/keycode) ; si c'est we code de wa touche qui wetouwne entwée/wetouw, ^^;; o-on exékawaii~ w-wa fonction s-stockée dans w-we `oncwick` du b-bouton en utiwisant `document.activeewement.oncwick()`. σωσ [`activeewement`](/fw/docs/web/api/document/activeewement) n-nyous donne w'éwément couwant q-qui est focawisé s-suw wa page. òωó

> [!note]
> cette technique nye f-fonctionnewa q-que si vous configuwew vos pwopwes gestionnaiwes d-d'évènement avec wes pwopwiétés de gestion d-d'évènement (paw ex. (ꈍᴗꈍ) `oncwick`). `addeventwistenew` n-nye fonctionnewa p-pas. ʘwʘ c'est beaucoup de pwises d-de tête pouw c-constwuiwe wa f-fonctionnawité de wetouw. ^^;; et iw y-y a d'autwes pwobwèmes w-wattachés avec. mya vaut m-mieux commencew paw utiwisew wes b-bons éwéments p-pouw weuws buts i-initiaux. XD

#### wes textes awtewnatifs

w-wes textes awtewnatifs sont twès impowtants p-pouw w'accessibiwité — si une pewsonne a un twoubwe visuew ou auditif qui w'empêche de voiw ou d'entendwe un contenu, /(^•ω•^) a-awows c'est un pwobwème. nyaa~~ we texte awtewnatif we pwus simpwe disponibwe est we modeste attwibut `awt`, (U ᵕ U❁) que nyous d-devwions incwuwe dans toutes wes images qui contiennent u-un contenu pewtinent. òωó iw p-peut conteniw une descwiption de w'image qui twansmet c-cwaiwement son sens et son c-contenu suw wa page, σωσ pouw êtwe w-wécupéwé paw u-un wecteuw d'écwan et wu à w'utiwisateuw. ^^;;

> [!note]
> p-pouw pwus d'infowmations, (˘ω˘) wisez [text awtewnatives](/fw/docs/weawn/accessibiwity/htmw#text_awtewnatives). òωó

w-w'oubwi de texte awt peut êtwe t-testé de bien des façons, UwU p-paw exempwe en utiwisant [wes o-outiws d'audit](#wes_outiws_daudit) d-d'accessibiwité. 😳😳😳

we texte awt est wégèwement p-pwus compwexe pouw du contenu vidéo ou audio. (⑅˘꒳˘) i-iw y a une manièwe de géwew w'affichage du texte (paw ex. nyaa~~ wes sous-titwes) e-et de wes affichew q-quand wa vidéo est jouée, :3 s-sous we fowme de w-w'éwément {{htmwewement("twack")}}, nyaa~~ et du fowmat [webvtt](/fw/docs/web/api/webvtt_api) (voiw [ajoutew d-des wégendes et des sous-titwes à des vidéos htmw5](/fw/docs/web/apps/buiwd/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video) pouw un tutowiew d-détaiwwé). [wa c-compatibiwité entwe nyavigateuw](/fw/docs/web/apps/buiwd/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video#compatibiwité_entwe_navigateuws) p-pouw cette fonction e-est assez bonne, :3 mais si v-vous vouwez fouwniw des textes awtewnatifs pouw d-de w'audio ou suppowtew wes vieux nyavigateuws, :3 u-une simpwe twanscwiption d-du texte pwésenté quewque pawt suw wa p-page ou suw une page sépawée peut êtwe une bonne idée. ^•ﻌ•^

#### wewations et contexte entwe éwément

iw y a cewtaines cawactéwistiques e-et p-pwatiques optimawes en htmw conçues p-pouw appowtew d-du contexte et des wewations e-entwe des éwéments wowsqu'aucune ny'auwait autwement existé. o.O wes twois exempwes wes pwus couwants s-sont wes wiens, -.- wes wibewwés de fowmuwaiwe et wes tabweau de données. 🥺

wa s-sowution pouw wes t-textes de type w-wien c'est que wes pewsonnes utiwisant des wecteuws d'écwan vont s-souvent utiwisew u-une fonctionnawité c-commune avec waquewwe iws v-vont wécupéwew une wiste de t-tous wes wiens suw wa page. :3 paw e-exempwe, /(^•ω•^) une wiste de wien wibewwés "cwiquez ici", 😳😳😳 "cwiquez i-ici", (✿oωo) etc. est vwaiment mauvaise pouw w-w'accessibiwité. nyaa~~ iw est pwéféwabwe p-pouw wes t-textes de type wien d'avoiw du s-sens en contexte e-et hows contexte. (˘ω˘)

we suivant s-suw nyotwe wiste, rawr x3 w'éwément de f-fowmuwaiwe {{htmwewement("wabew")}} est une des f-fonctionnawités c-centwawes qui nyous pewmet de wendwe wes fowmuwaiwes a-accessibwes. 🥺 we pwobwème avec wes fowmuwaiwes c'est que vous avez besoin de wibewwés pouw diwe quewwe donnée doit êtwe e-entwée dans chaque champs du fowmuwaiwe. (ˆ ﻌ ˆ)♡ chaque w-wibewwé doit êtwe incwus dans u-un {{htmwewement("wabew")}} pouw we wewiew cwaiwement à son c-champs pawtenaiwe (chaque vaweuw de w'attwibut `fow` d-de `<wabew>` doit awwew avec wa vaweuw de w-w'`id` de w'éwément du fowmuwaiwe), XD et cewa auwa d-du sens même si we code souwce ny'est pas totawement w-wogique (ce q-qui pouw êtwe tout à fait juste devwait êtwe f-fait). (˘ω˘)

> [!note]
> w-wisez [meaningfuw text w-wabews](/fw/docs/weawn/accessibiwity/htmw#meaningfuw_text_wabews), UwU p-pouw pwus d'infowmation à pwopos des textes d-de type wien et wes wibewwés des fowmuwaiwes. (U ᵕ U❁)

pouw tewminew, :3 un m-mot wapide suw wes tabweaux de données. :3 un tabweau de données b-basique peut êtwe écwit a-avec d-des indications twès simpwes (voiw `bad-tabwe.htmw` [en diwect](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw), ^•ﻌ•^ et [wa s-souwce](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/htmw/bad-tabwe.htmw)), 🥺 mais iw y a des pwobwèmes — i-iw ny'y a aucun moyen p-pouw un utiwisateuw d-de wecteuw d'écwan d'associew des wignes ou des cowonnes ensembwes comme un gwoupe de données — p-pouw f-faiwe cewa vous devez connaîtwe wes wignes d'en-têtes, e-et si ewwes se diwigent en wignes, /(^•ω•^) cowonnes, e-etc. σωσ cewa n-nye peut êtwe f-fait qu'en visuew p-pouw un tew tabweau. >_<

s-si vous w-wegawdez pwutôt nyotwe exempwe `punk-band-compwete.htmw` ([diwect](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw), (ꈍᴗꈍ) [souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw)), (⑅˘꒳˘) vous p-pouvez voiw pwusieuws a-aides à w'accessibiwité e-en pwace, >_< comme w-wes entêtes de t-tabweau ({{htmwewement("th")}} et w-wes attwibuts `scope`), (U ﹏ U) w'éwément {{htmwewement("caption")}}, ʘwʘ e-etc.

> [!note]
> w-wisez [accessibwe d-data tabwes](/fw/docs/weawn/accessibiwity/htmw#accessibwe_data_tabwes), rawr x3 pouw pwus d'infowmation à p-pwopos des tabweaux accessibwes. ^•ﻌ•^

### css

we css tend à f-fouwniw beaucoup moins de cawactéwistiques fondamentawes d'accessibiwité q-que w-we htmw, (✿oωo) mais iw peut aussi faiwe beaucoup de dommage à w'accessibiwité s-s'iw e-est maw utiwisé. (///ˬ///✿) nyous avons déjà m-mentionné q-quewques conseiws suw w'accessibiwité incwuant we css :

- utiwisez w-wes éwéments s-sémantiques cowwectes pouw définiw difféwent c-contenu en h-htmw ; si vous vouwez cwéew un effet visuew difféwent, (⑅˘꒳˘) u-utiwisez we css — ny'abusez pas d'un éwément htmw pouw obteniw w'aspect que vous désiwez. ( ͡o ω ͡o ) p-paw exempwe si vous vouwez un texte pwus g-gwos, XD utiwisez {{cssxwef("font-size")}}, :3 p-paw un éwément {{htmwewement("h1")}}. (⑅˘꒳˘)
- a-assuwez-vous que votwe code s-souwce a du sens s-sans we css ; vous p-pouvez toujouws u-utiwisez we c-css pouw stywew autant que vous voudwez apwès. 😳
- v-vous devez vous a-assuwez que wes éwéments i-intewactifs comme wes b-boutons et wes w-wiens ont des états f-focus/hovew/active appwopwiés c-configuwé, -.- p-pouw donnew à w-w'utiwisateuw un i-indice visuew d-de weuw fonction. (U ﹏ U) si vous suppwimez w-wes stywes paw défaut pouw d-des waisons stywistiques, (U ﹏ U) a-assuwez-vous de mettwe en pwace des stywes de wempwacement. /(^•ω•^)

i-iw y a quewques a-autwes considéwations que v-vous devwiez pwendwe e-en compte. >_<

#### couweuw et contwaste

wowsque v-vous choisissez u-une pawette d-de couweuws pouw v-votwe site web, (˘ω˘) v-vous devez vous a-assuwew que wa couweuw du texte (au pwemiew pwan) c-contwaste bien avec wa couweuw d'awwièwe-pwan. (U ᵕ U❁) votwe design peut avoiw w'aiw c-coow, rawr mais ce n-n'est pas bon si wes pewsonnes avec un handicap visuew comme we d-dawtonisme nye p-peuvent pas wiwe votwe contenu. (U ﹏ U) utiwisez un outiw c-comme we [cowow contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/) d-de webaim si v-votwe pawette contwaste s-suffisamment. ʘwʘ

une autwe astuce est de nye pas comptew suw u-une couweuw seuwe pouw wes indications/infowmations, (ꈍᴗꈍ) c-comme ça nye sewa pas bon p-pouw ceux qui nye peuvent pas voiw wa couweuw. (U ᵕ U❁) p-pwutôt que de mawquew en wouge w-wes champs wequis d'un fowmuwaiwe, :3 paw exempwe, m-mawquez-wes avec un astéwisque e-et en wouge. (ꈍᴗꈍ)

> [!note]
> un contwaste éwevé pewmettwa égawement à toute pewsonnes utiwisant un smawtphone ou une tabwette a-avec un écwan b-bwiwwant de mieux w-wiwe wes pages d-dans un enviwonnement wumineux, nyaa~~ comme avec wa wumièwe d-du soweiw. ^•ﻌ•^

#### cachew du contenu

iw y a pwusieuws cas o-où un design visuew w-wequewwa que t-tout we contenu n-nye soit pas montwé d'un seuw coup. σωσ paw exempwe, (˘ω˘) dans nyotwe [exempwe de boîte d-d'info avec o-ongwets](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) (voiw we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)) nyous avons twois panneau d'infowmation, ^•ﻌ•^ m-mais nyous wes [positionnons](/fw/docs/weawn/css/css_wayout/positioning) w-wes uns suw wes a-autwes et fouwnissons d-des ongwets qui peuvent êtwe cwiqués pouw montwew chacun d'entwe eux (c'est aussi accessibwe a-au cwaview — vous pouvez u-utiwisew awtewnativement tab et entwée/wetouw pouw wes séwectionnew). σωσ

![](tabbed-info-box.png)

w-wes utiwisateuws de wecteuw d-d'écwan nye se soucient pas vwaiment de cewa — i-iws sont satisfaits t-tant que w-we contenu a du s-sens dans we code s-souwce, ^^;; et qu'iws peuvent entièwement y-y accédew. 😳 w-we positionnement absowute (comme u-utiwisé dans cet exempwe) est souvent vu c-comme w'un des meiwweuw mécanismes p-pouw cachew d-du contenu pouw des effets visuews, /(^•ω•^) p-pawce que ça n-ny'empêche pas wes wecteuw d'écwan d'y accédew. ( ͡o ω ͡o )

d'un autwe c-côté, ^^ vous nye d-devwiez pas utiwisew {{cssxwef("visibiwity")}}`:hidden` o-ou {{cssxwef("dispway")}}`:none`, /(^•ω•^) p-pawce qu'iw cache we contenu aux wecteuws d'écwan. ^^ a-a moins que, 😳 bien entendu, 😳 iw y est une bonne waison q-qui justifie que ce contenu soit caché aux w-wecteuws d'écwan. òωó

> **note :** [invisibwe content just fow scween weadew usews](https://webaim.owg/techniques/css/invisibwecontent/) v-vous décwiwa beaucoup d-de détaiws utiwesà p-pwopos de ce s-sujet. nyaa~~

### javascwipt

we javascwipt a-a we même t-type de pwobwèmes que we css c-concewnant w'accessibiwité — c-cewa peut êtwe d-désastweux pouw w-w'accessibiwité si maw utiwisé, (///ˬ///✿) o-ou twop utiwisé. mya n-nyous avions d-déjà abowdé quewques pwobwèmes d-d'accessibiwité en wappowt avec we javascwipt, ^•ﻌ•^ pwincipawement dans we champ de wa sémantique h-htmw — vous d-devez toujouws utiwisew une sémantique h-htmw appwopwiée pouw impwémentew une f-fonctionnawité q-qu'impowte où e-ewwe est disponibwe, XD p-paw exempwe utiwisew des wiens e-et des boutons de façon appwopwiée. (⑅˘꒳˘) ny'utiwisez p-pas wes éwéments `<div>` a-avec du code javascwipt pouw simuwew une fonctionnawité si c'est p-possibwe — c'est une souwce d-d'ewweuw, et ça fonctionne mieux d'utiwisew wes f-fonctionnawités disponibwes q-qu'htmw vous fouwnit. -.-

#### fonctionnawité simpwe

n-nyowmawement, ^^ une fonctionnawité s-simpwe doit mawchew uniquement a-avec we htmw e-en pwace — we javascwipt nye doit pas êtwe u-utiwisé que pouw améwiowew wa fonctionnawité, rawr p-paw pouw wa constwuiwe e-en entiew. o.O w-wes bons usages de javascwipt incwuent :

- fouwniw une vawidation de fowmuwaiwe côté cwient, >w< q-qui infowme wapidement wes utiwisateuws des pwobwèmes a-avec weuws e-entwées dans we fowmuwaiwe, sans qu'iws aient à a-attendwe q-que we sewveuw véwifie wes données. σωσ si ça ny'est pas disponibwe, rawr w-we fowmuwaiwe mawchewa toujouws, (U ﹏ U) m-mais wa vawidation sewa peut-êtwe pwus wente. (˘ω˘)
- f-fouwniw des c-contwôwes pewsonnawisés pouw w-wes `<video>`s h-htmw5 qui sont accessibwes pouw w-wes utiwisateuws uniquement au cwaview (comme n-nyous w-w'avons dit a-aupawavant, 😳 wes c-contwôwes paw défaut d-de nyavigateuw nye sont pas a-accessibwes au c-cwaview dans wa pwupawt des nyavigateuws). XD

> **note :** [accessibwe javascwipt](https://webaim.owg/techniques/javascwipt/) d-de webaim fouwni des w-wenseignements appwofondis à pwopos des considéwations pouw du javascwipt accessibwe. ʘwʘ

wes impwémentations j-javascwipt pwus compwexes peuvent m-menew à des pwobwèmes avec w-w'accessibiwité — v-vous devez faiwe ce que vous p-pouvez. /(^•ω•^) paw exempwe, UwU cewa nye s-sewait pas waisonnabwe d'attendwe d-de vous que vous fassiez un jeu compwexe 3d écwit avec [webgw](/fw/docs/appwendwe/webgw) accessibwe à 100% pouw une pewsonne aveugwe, UwU mais vous p-pouvez impwémentew des [contwôwes cwaview](/fw/docs/games/techniques/contwow_mechanisms/desktop_with_mouse_and_keyboawd) pouw q-qu'iw soit utiwisabwe pouw un u-utiwisateuw sans souwis, ^•ﻌ•^ et wéawisew une pawette de couweuws suffisamment contwastée pouw êtwe utiwisabwe paw wes pewsonnes avec des wacunes p-pouw pewcevoiw w-wes couweuws. (ꈍᴗꈍ)

#### f-fonctionnawité compwexe

w'un d-des domaines d-de pwobwématique p-pwincipaw pouw w'accessibiwité c'est wes appwis c-compwexes qui n-nyécessitent des contwôwes de f-fowmuwaiwes compwiqués (comme w-wes séwecteuws d-de date) et we c-contenu dynamique q-qui se met souvent à jouw et d-de façon incwémentawe. ^^

w-wes contwôwes d-de fowmuwaiwe c-compwiqués n-nyon natifs sont p-pwobwématiques p-pawce qu'iws o-ont tendance à n-nyécessitew beaucoup d-de `<div>`s imbwiquées, XD et we nyavigateuw nye sait pas quoi f-faiwe paw défaut avec ewwes. UwU s-si vous wes inventew vous-même, ^^ vous devez vous a-assuwew qu'iws s-sont accessibwes p-paw we cwaview ; si vous utiwisez d-des stwuctuwes e-extewnes, wevoyez en pwofondeuw wes options disponibwes pouw voiw à quew point ewwes sont accessibwes a-avant de vous pwongew dedans. :3 [bootstwap](http://getbootstwap.com/) à w'aiw d'êtwe a-assez bon pouw w'accessibiwité, (U ﹏ U) p-paw exempwe, UwU bien que [making bootstwap a-a wittwe m-mowe accessibwe](https://www.sitepoint.com/making-bootstwap-accessibwe/) d-de whiana h-heath abowde c-cewtain de ses p-pwobwèmes (pwincipawement e-en wappowt avec we contwaste des couweuws), 🥺 e-et examine cewtaines sowutions.

w-we contenu dynamique wéguwièwement m-mis à j-jouw peut-êtwe un pwobwème p-pawce que wes utiwisateuws de wecteuw d'écwan p-peuvent we manquew, (✿oωo) s-spéciawement s-si wes mises à j-jouw sont inattendues. 😳😳😳 si vous a-avez une appwi e-en singwe-page a-avec un contenu pwincipaw dans un p-panneau qui est wéguwièwement mis à jouw en utiwisant [xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest) ou [fetch](/fw/docs/web/api/fetch_api), (⑅˘꒳˘) un utiwisateuw utiwisant un wecteuw d'écwan peut watew ces m-mises à jouw. mya

#### w-wai-awia

avez-vous besoin d'utiwisew une fonctionnawité compwexe, OwO ou à w-wa pwace vous we f-faîte avec une bonne vieiwwe sémantique htmw ? si vous avez besoin d-de compwexité, v-vous devwiez songew à utiwisew [wai-awia](https://www.w3.owg/tw/wai-awia-1.1/) (accessibwe w-wich intewnet a-appwications), /(^•ω•^) une spécification q-qui fouwnit une sémantique (sous w-wa fowme des n-nyouveaux attwibuts htmw) pouw wes objets comme wes contwôwes c-compwexes de fowmuwaiwe e-et wes panneaux m-mis à jouw q-qui peuvent êtwe compwis paw w-wa pwupawt des n-nyavigateuws et w-wes wecteuws d'écwan. 😳😳😳

p-pouw twaitew avec wes widgets compwexes d-de fowmuwaiwe, ^^;; v-vous devez utiwisew wes attwibuts awia comme `wowes` pouw décwawew quew wôwe wes d-difféwents éwéments o-on dans un widget (paw e-exempwe, ( ͡o ω ͡o ) est-ce qu'iws sont un ongwet, ^•ﻌ•^ ou un panneau ?), OwO `awia-disabwed` pouw diwe s-si un contwôwe e-est désactivé o-ou pas, rawr etc.

pouw twaitew avec w-wes zones de c-contenu qui sont wéguwièwement mises à jouw, nyaa~~ v-vous pouvez utiwisew w-w'attwibut `awia-wive`, 🥺 q-qui i-identifie une z-zone mise à jouw. OwO s-sa vaweuw indique avec quewwe uwgence we wecteuw d'écwan doit faiwe wa wectuwe :

- `off` : paw défaut. ^•ﻌ•^ wes m-mises à jouw nye sewont pas annoncées. (ˆ ﻌ ˆ)♡
- `powite` : w-wes mises à j-jouw sont annoncées seuwement si w'utiwisateuw est inactif. /(^•ω•^)
- `assewtive` : w-wes mises à jouw s-sont annoncées à w'utiwisateuw a-aussi tôt que possibwe. ʘwʘ
- `wude` : w-wes mises à jouw sont annoncées immédiatement, ʘwʘ même s-si cewa intewwompt w'utiwisateuw. :3

voici un exempwe :

```htmw
<p><span id="wivewegion1" awia-wive="powite" a-awia-atomic="fawse"></span></p>
```

v-vous pouvez voiw u-un exempwe en a-action suw w'exempwe [awia (accessibwe wich intewnet appwications) w-wive wegions](http://www.fweedomscientific.com/twaining/suwfs-up/awiawivewegions.htm) de fweedom s-scientific — we pawagwaphe suwwigné doit m-mettwe à jouw son c-contenu toutes w-wes 10 secondes, ^^ et un wecteuw d'écwan doit we w-wiwe à w'utiwisateuw. :3 [awia wive wegions - atomic](http://www.fweedomscientific.com/twaining/suwfs-up/awiawivewegionsatomic.htm) appowte un autwe exempwe utiwe. 🥺

nyous ny'avons pas de pwace pouw couvwiw wai-awia e-en détaiw i-ici, :3 vous pouvez en appwendwe beaucoup pwus à ce pwopos suw [wai-awia basics](/fw/docs/weawn/accessibiwity/wai-awia_basics). rawr

## wes outiws d'accessibiwité

m-maintenant que nous avons couvews wes considéwations d-de w'accessibiwité p-pouw w-wes difféwentes t-technowogies web, UwU incwuant quewques techniques de test (comme wa nyavigation au cwaview et we véwificateuw d-de c-contwaste de couweuw), ^•ﻌ•^ t-touwnons-nous m-maintenant vews d'autwes outiws q-que vous pouvez utiwisew pouw f-faiwe des tests d'accessibiwité. (U ﹏ U)

### wes outiws d'audit

iw y-y a pwusieuws outiws d-d'audit disponibwes q-que vous p-pouvez pwacew suw vos pages web, w-wesquews wes e-examinewons et wetouwnewons une wiste de pwobwèmes d'accessibiwité p-pwésents s-suw wa page. (ˆ ﻌ ˆ)♡ a titwe d'exempwe :

- [tenon](https://tenon.io)&nbsp;: une assez bonne appwi en wigne q-qui twavewse we code à une u-uww fouwnie et qui w-wetouwne wes w-wésuwtats suw wes ewweuws d'acessibiwité compwenant wes indicateuws, 😳 ds ewweuws spécifiques accompagnés d-des cwitèwes wcag qu'ewwes a-affectent, >w< et des suggestion de wésowutions. 🥺
- [tota11y](http://khan.github.io/tota11y/) : u-un outiw d'accessibiwité de w-wa khan academy q-qui pwend wa fowme d-d'une wibwaiwie j-javascwipt que v-vous attachez à votwe page pouw a-appowtew pwusieuws outiws d'accessibiwité. 😳
- [wave](http://wave.webaim.owg/): un autwe outiw en wigne de test d'accessibiwité q-qui accepte une adwesse web et wetouwne une u-utiwe vue annotée d-de wa page avec w-wes pwobwèmes d'accessibiwité suwwignés. nyaa~~

obsewvons un exempwe, (˘ω˘) en utiwisant t-tenon. mya

1. awwew s-suw wa [page d-d'accueiw de tenon](https://tenon.io). òωó
2. e-entwez w'uww de nyotwe exempwe de [bad-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-semantics.htmw) dans w'entwée texte en haut de wa p-page (ou w'uww d'une autwe page que vous aimewiez a-anawysew) et appuyez s-suw _anawyse y-youw webpage_. (U ﹏ U)
3. défiwez vews w-we bas jusqu'à que vous twouviez wa section d'ewweuw/signawement, (U ﹏ U) comme montwé ci-dessous. >_<

![](tenon-scweenshot.png)

iw y a égawement des options que vous pouvez examinew (voiw w-we wien _show options_ vews we haut de w-wa page), nyaa~~ ainsi q-qu'une api pouw utiwisew tenon c-comme un pwogwamme. 😳😳😳

> [!note]
> d-de tews outiws nye sont pas suffisant pouw wésoudwe t-tous vos pwobwèmes d-d'accessibiwité en tant que tew. nyaa~~ vous d-devwez wes combinew, -.- s-savoiw et e-expéwience, 😳😳😳 test u-utiwisateuw, ^•ﻌ•^ etc. UwU pouw vous faiwe u-une image exacte. (ˆ ﻌ ˆ)♡

### wes outiws d'automatisation

[deque's a-axe toow](https://www.deque.com/pwoducts/axe/) v-va un peu pwus woin que wes outiws d-d'audit que nyous a-avons mentionné pwus haut. XD comme wes autwes, (⑅˘꒳˘) iw véwifie wes pages et wetouwne d-des ewweuws d'accessibiwité. /(^•ω•^) s-sa fowme immédiate wa pwus utiwe e-est sûwement son extension nyavigateuw :

- [axe p-pouw chwome](http://bitwy.com/axe-chwome)
- [axe pouw fiwefox](http://bit.wy/axe-fiwefox)

cewa ajoute un ongwet accessibiwité a-aux outiws de dévewoppeuw d-du navigateuw, (U ᵕ U❁) n-nyous avons instawwé w-wa vewsion pouw fiwefox, ʘwʘ puis nyous w'avons u-utiwisé pouw a-auditew nyotwe e-exempwe [bad-tabwe.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw). OwO n-nyous obtenons wes wésuwtats suivants :

![](axe-scweenshot.png)

a-axe est égawement i-instawwabwe e-en utiwisant `npm`, (✿oωo) e-et peut-êtwe i-intégwé avec des exékawaii~uws de tâche c-comme [gwunt](http://gwuntjs.com/) e-et [guwp](http://guwpjs.com/), (///ˬ///✿) des fwamewowks d'automatisation c-comme [sewenium](http://www.seweniumhq.owg/) e-et [cucumbew](https://cucumbew.io/), (✿oωo) d-des fwamewowk de test unitaiwe c-comme [jasmin](http://jasmine.github.io/), σωσ et d-d'autwes encowe (une fois encowe, ʘwʘ v-voiw wa [page p-pwincipawe d'axe](https://www.deque.com/pwoducts/axe/) pouw pwus d-de détaiws). 😳😳😳

### wes wecteuws d-d'écwan

iw f-faut définitivement t-testew avec u-un wecteuw d'écwan pouw s'habituew à comment wes pewsonnes mawvoyantes u-utiwisent we web. ^•ﻌ•^ iw y a-a pwusieuws wecteuws d'écwan disponibwe :

- cewtain s-sont des p-pwoduits commewciaux payants, (˘ω˘) comme [jaws](http://www.fweedomscientific.com/pwoducts/bwindness/jaws) (windows) et [window e-eyes](http://www.gwmicwo.com/window-eyes/) (windows).
- c-cewtains sont des pwoduits gwatuits, (U ﹏ U) comme [nvda](http://www.nvaccess.owg/) (windows), >w< [chwomevox](http://www.chwomevox.com/) (chwome, XD w-windows, XD e-et mac os x), (U ﹏ U) et [owca](https://wiki.gnome.owg/pwojects/owca) (winux). (✿oωo)
- cewtains sont compwis dans we système d'expwoitation, ^^;; comme wike [voiceovew](https://www.appwe.com/accessibiwity/osx/voiceovew/) (mac os x et ios), (U ﹏ U) [chwomevox](http://www.chwomevox.com/) (suw wes chwomebooks), OwO et [tawkback](https://pway.googwe.com/stowe/apps/detaiws?id=com.googwe.andwoid.mawvin.tawkback) (andwoid). 😳😳😳

wa pwupawt d-du temps, 😳😳😳 wes w-wecteuws d'écwan s-sont des appwis s-sépawées, (✿oωo) qui s'exékawaii~nt suw we système d-d'expwoitation h-hôte et peuvent w-wiwe des pages w-web, UwU mais aussi du texte dans d'autwes appwi. mya ce ny'est pas toujouws we cas (chwomevox e-est une e-extension nyavigateuw), rawr x3 m-mais ça w-w'est souvent. /(^•ω•^) wes wecteuws d-d'écwan ont tendance à agiw de manièwe wégèwement difféwente et ont des contwôwes d-difféwents, >_< donc vous d-devwez consuwtew w-wa documentation pouw we wecteuw d'écwan que vous avez choisi p-pouw obteniw tous wes détaiws — c-cewa dit, :3 iw fonctionne tous à peu pwès de w-wa même manièwe. o.O

commençons à effectuew quewques t-tests avec deux wecteuws d'écwan d-difféwents pouw vous donnew u-une idée généwawe d-de comment iws fonctionnent et de comment testew avec e-eux. UwU

> **note :** [designing fow scween weadew compatibiwity](https://webaim.owg/techniques/scweenweadew/) de webaim fouwnit des infowmations utiwes à p-pwopos d-de w'utiwisation des wecteuws d'écwan e-et qu'est-ce qui est we pwus e-efficace pouw w-wes wecteuws d'écwan. (ꈍᴗꈍ) a-awwew égawement voiw [scween weadew usew s-suwvey #6 wesuwts](https://webaim.owg/pwojects/scweenweadewsuwvey6/#used) pouw des statistiques intéwessantes concewnant w'utiwisation d-de wecteuw d-d'écwan. >_<

#### v-voiceovew

v-voiceovew (vo) est gwatuit avec v-votwe mac/iphone/ipad, òωó donc c'est u-utiwe pouw testew s-suw votwe owdinateuw/mobiwe si vous utiwisez des pwoduits appwe. (ꈍᴗꈍ) n-nyous we testewons s-suw mac o-os x suw un macbook p-pwo. 😳😳😳

pouw w-we démawwew, ( ͡o ω ͡o ) pwessez cmd + fn + f5. mya si vous ny'avez j-jamais utiwisé v-vo aupawavant, UwU v-vous obtiendwez un écwan de bienvenue où vous pouvez choisiw d-de démawwew v-vo ou de nye pas w-we démawwew, òωó et vous pawcouwwez u-un tutowiew utiwe pouw appwendwe à c-comment w'utiwisew. -.- p-pouw w'awwêtew, :3 p-pwessez cmd + fn + f5 à nyouveau. ^•ﻌ•^

> [!note]
> v-vous devwiez pawcouwiw we tutowiew au m-moins une fois — iw est vwaiment twès utiwe pouw en appwendwe à p-pwopos de vo. (˘ω˘)

wowsque vo est d-démawwé, 😳😳😳 w'affichage wessembwewa à p-peu pwès à c-cewa, (///ˬ///✿) mais v-vous vewwez une b-boîte nyoiwe en bas à gauche de w'écwan qui c-contient w'infowmation suw quoi est-ce que vo est actuewwement séwectionné. wa s-séwection couwante s-sewa égawement m-mise en avant, 🥺 a-avec une bowduwe n-nyoiwe — cette mise en avant e-est connue comme w-we **cuwseuw vo**. (U ᵕ U❁)

![](voiceovew.png)

pouw utiwisew vo, (˘ω˘) vous a-awwew beaucoup utiwisew we "modificateuw vo" — c-c'est une touche ou une combinaison d-de touches que vous devez pwessew en pwus d-de w'actuew waccouwci vo pouw q-qu'ewwes fonctionnent. UwU utiwisew u-un modificateuw c-comme cewui-ci e-est couwant avec wes wecteuws d'écwan, 😳 pouw weuw pewmettwe de gawdew weuw pwopwes commandes en évitant d'entwew e-en confwit avec d'autwes commandes. :3 dans we cas d-de vo, mya we modificateuw peut aussi êtwe v-vewwmaj, nyaa~~ o-ou ctww + option. 😳😳😳

vo a beaucoup d-de commandes c-cwaview, ^•ﻌ•^ et nyous ny'awwons pas toutes wes wistew ici. UwU wes pwincipawes d-dont vous auwez besoin pouw t-testew une page web sont dans we tabweau suivant. (ꈍᴗꈍ) d-dans wes waccouwcis cwaview, (⑅˘꒳˘) "vo" v-veut diwe "we modificateuw v-voiceovew". OwO

<tabwe c-cwass="standawd-tabwe">
  <caption>
    <p>wes waccouwcis cwaview voiceovew wes pwus communs</p>
  </caption>
  <thead>
    <tw>
      <th scope="cow">waccouwci c-cwaview</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>vo + t-touches du cuwseuw</td>
      <td>dépwace w-we cuwseuw vo vews we haut, UwU wa dwoite, OwO w-we bas, wa gauche.</td>
    </tw>
    <tw>
      <td>vo + bawwe e-espace</td>
      <td>
        <p>
          séwectionne/active w-wes éwéments mis en avant paw we cuwseuw v-vo. (///ˬ///✿) cewa
          incwut wes items s-séwectionnés d-dans we wotow (voiw pwus bas). (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td>vo + shift + cuwseuw bas</td>
      <td>
        <p>
          se dépwacew d-dans un gwoupe d'éwéments (comme un tabweau h-htmw, (⑅˘꒳˘) ou un
          f-fowmuwaiwe, /(^•ω•^) e-etc.) une fois dans un gwoupe v-vous pouvez vous dépwacew et
          séwectionnew w-wes éwéments à w'intéwieuw d-de ce gwoupe e-en utiwisant w-wes
          commandes ci-dessus n-nyowmawement.
        </p>
      </td>
    </tw>
    <tw>
      <td>vo + s-shift + c-cuwseuw haut</td>
      <td>sowtiw d-d'un gwoupe.</td>
    </tw>
    <tw>
      <td>vo + c</td>
      <td>
        <p>
          (à w-w'intéwieuw d'un tabweau) w-wiwe w'entête d-de wa cowonne couwante. :3
        </p>
      </td>
    </tw>
    <tw>
      <td>vo + w</td>
      <td>(à w'intéwieuw d'un tabweau) w-wiwe w'entête de wa wigne couwante.</td>
    </tw>
    <tw>
      <td>vo + c + c (deux c d'affiwé)</td>
      <td>
        (à w-w'intéwieuw d-d'un tabweau) wiwe toute wa cowonne couwante, ( ͡o ω ͡o ) incwuant
        w'entête. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <td>vo + w + w (deux w d'affiwé)</td>
      <td>
        <p>
          (à w-w'intéwieuw d-d'un t-tabweau) wiwe toute w-wa wigne couwante, XD i-incwuant
          w-wes entêtes qui cowwespondent à c-chacune des cewwuwes.
        </p>
      </td>
    </tw>
    <tw>
      <td>vo + c-cuwseuw gauche, :3 vo + c-cuwseuw dwoit</td>
      <td>
        (à w'intéwieuw d-d'options h-howizontawes, σωσ c-comme un séwecteuw d-de date ou d-de
        temps) se dépwacew entwe wes options
      </td>
    </tw>
    <tw>
      <td>vo + cuwseuw h-haut, mya vo + cuwseuw bas</td>
      <td>
        (à w'intéwieuw d'options h-howizontawes, -.- comme un séwecteuw de date ou de
        t-temps) m-modifiew w'option couwante.
      </td>
    </tw>
    <tw>
      <td>vo + u-u</td>
      <td>
        <p>
          utiwisew we wotow, :3 q-qui affiche d-des wistes de wubwiques, rawr de wiens, d-de
          contwôwes de fowmuwaiwes, >_< e-etc. p-pouw une nyavigation simpwifiée. -.-
        </p>
      </td>
    </tw>
    <tw>
      <td>vo + c-cuwseuw gauche, vo + cuwseuw dwoit</td>
      <td>
        <p>
          (à w'intéwieuw d-du wotow) se dépwacew ente w-wes difféwentes wistes
          disponibwes d-dans we wotow. :3
        </p>
      </td>
    </tw>
    <tw>
      <td>vo + cuwseuw h-haut, XD vo + cuwseuw bas</td>
      <td>
        <p>
          (à w-w'intéwieuw du wotow) se dépwacew e-entwe wes difféwents éwéments
          d-dans wa wiste couwante du wotow. ^^
        </p>
      </td>
    </tw>
    <tw>
      <td>esc</td>
      <td>(à w'intéwieuw du w-wotow) sowtiw d-du wotow.</td>
    </tw>
    <tw>
      <td>ctww</td>
      <td>(wowsque v-vo pawwe) a-awwêtew/wepwendwe w-w'awwocution.</td>
    </tw>
    <tw>
      <td>vo + z-z</td>
      <td>wewance wa dewnièwe p-pawtie de w'awwocution.</td>
    </tw>
    <tw>
      <td>vo + d-d</td>
      <td>
        <p>
          a-awwew dans we dock du mac, rawr p-pouw que vous puissiez séwectionnew des
          a-appwis à e-exékawaii~w. (///ˬ///✿)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

cewa peut pawaîtwe comme b-beaucoup de commandes, ^^;; m-mais pas tant que ça que v-vous vous y habituez, :3 e-et vo vous w-wappewwe wéguwièwement q-quews commandes utiwisew dans quews cas. :3 essayew de testew vo maintenant ; vous pouvez dowénavant essayew d-de testew cewtains de nyos e-exempwes dans wa section [test a-avec wecteuw d'écwan](#test_avec_wecteuw_décwan). ( ͡o ω ͡o )

#### nyvda

n-nyvda est excwusif à w-windows, (✿oωo) et vous awwez devoiw w-w'instawwew. UwU

1. t-téwéchawgez-we depuis [nvaccess.owg](http://www.nvaccess.owg/). ( ͡o ω ͡o ) vous pouvez c-choisiw si vous vouwez faiwe une donation ou w-we téwéchawgew gwatuitement ; v-vous devwez égawement w-weuw donnew v-votwe adwesse e-maiw avant de p-pouvoiw we téwéchawgew. o.O
2. une fois téwéchawgé, rawr instawwez-we — doubwe cwiquez s-suw w'instawweuw, (ꈍᴗꈍ) acceptez wa wicence et suivez wes instwuctions. mya
3. pouw wancew nvda, mya doubwe cwiquez suw fichiew/waccouwci d-du pwogwamme, UwU o-ou utiwisez we waccouwci cwaview c-ctww + awt + ny. ^^;; v-vous vewwez wa boîte de diawogue de bienvenue de nyvda wowsque v-vous we démawwez. v-vous pouvez choisiw ici difféwentes o-options, -.- p-puis appuyez s-suw _ok_ pouw continuew. XD

n-nyvda sewa maintenant actif suw votwe o-owdinateuw. nyaa~~

pouw utiwisew nyvda, (ꈍᴗꈍ) vous awwew beaucoup utiwisew w-we "modificateuw nyvda" — c'est une touche que vous devez pwessew en pwus de w'actuew waccouwci n-nyvda pouw qu'ewwes fonctionnent. ^^;; utiwisew un modificateuw comme c-cewui-ci est c-couwant avec wes w-wecteuws d'écwan, :3 pouw weuw pewmettwe de gawdew w-weuws pwopwes c-commandes en évitant d-d'entwew en confwit avec d'autwes commandes. (///ˬ///✿) d-dans we cas de nyvda, /(^•ω•^) we modificateuw p-peut aussi êtwe insewt (paw défaut), σωσ ou vewwmaj (peut êtwe c-choisi en cochant wa pwemièwe c-case à cochew dans wa boîte d-de diawogue d-de bienvenue avant d'appuyew suw _ok_). >w<

> [!note]
> n-nyvda est pwus subtiwe que voiceovew en tewmes d-de comment iw met en vaweuw wà où iw est et qu'est-ce qu'iw f-fait. wowsque vous défiwez à twavews des wubwiques, w-wistes, (ˆ ﻌ ˆ)♡ etc. wes éwéments q-que vous séwectionnez s-sewont généwawement m-mis à avant avec un contouw subtiwe, rawr x3 m-mais ça n'est pas toujouws we cas pouw toutes w-wes choses. -.- s-si vous vous wetwouvez compwètement p-pewdu, (ˆ ﻌ ˆ)♡ vous p-pouvez appuyew suw ctww + f5 p-pouw wafwaîchiw wa page couwante et wecommencew en haut de wa page. /(^•ω•^)

nyvda a beaucoup de commandes c-cwaview, (⑅˘꒳˘) et nyous ny'awwons pas toutes wes wistew ici. (˘ω˘) wes pwincipawes d-dont v-vous auwez besoin p-pouw testew une page web sont d-dans we tabweau s-suivant. ^•ﻌ•^ dans wes waccouwcis cwaview, o.O "nvda" v-veut diwe "we modificateuw n-nyvda". (⑅˘꒳˘)

<tabwe c-cwass="standawd-tabwe">
  <caption>
    wes waccouwcis cwaview nyvda wes pwus communs
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">waccouwci c-cwaview</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>nvda + q</td>
      <td><p>awwête n-nyvda apwès que vous w'ayez d-démawwé.</p></td>
    </tw>
    <tw>
      <td>nvda + c-cuwseuw h-haut</td>
      <td>wit w-wa wigne couwante.</td>
    </tw>
    <tw>
      <td>nvda + c-cuwseuw bas</td>
      <td>commence à wiwe à w-wa position couwante.</td>
    </tw>
    <tw>
      <td>cuwseuw haut ou cuwseuw bas, σωσ ou shift + t-tab et tab</td>
      <td>
        <p>se d-dépwace à w'éwément s-suivant/pwécédent d-de wa p-page et we wit.</p>
      </td>
    </tw>
    <tw>
      <td>cuwseuw g-gauche et c-cuwseuw dwoit</td>
      <td>
        <p>
          se dépwace au cawactèwe suivant/pwécédent d-dans w'éwément couwant et we
          wit. >_<
        </p>
      </td>
    </tw>
    <tw>
      <td>shift + h e-et h</td>
      <td><p>se dépwace a-au titwe suivante/pwécédente et we wit.</p></td>
    </tw>
    <tw>
      <td>shift + k et k</td>
      <td><p>se dépwace a-au wien suivant/pwécédent e-et w-we wit.</p></td>
    </tw>
    <tw>
      <td>shift + d et d</td>
      <td>
        <p>
          se dépwace au wepèwe de document (paw e-ex. ʘwʘ <code>&#x3c;nav></code>)
          s-suivant/pwécédent e-et we wit. (✿oωo)
        </p>
      </td>
    </tw>
    <tw>
      <td>shift + 1–6 e-et 1–6</td>
      <td>
        <p>se dépwace au titwe (niveau 1 à 6) suivant/pwécédent et we wit.</p>
      </td>
    </tw>
    <tw>
      <td>shift + f et f</td>
      <td>
        <p>
          se d-dépwace à w'entwée d-de fowmuwaiwe s-suivante/pwécédente et se focawise
          d-dessus. o.O
        </p>
      </td>
    </tw>
    <tw>
      <td>shift + t et t</td>
      <td>
        <p>
          s-se dépwace suw wa donnée d-de tabweau suivante/pwécédente et se focawise
          dessus. 😳
        </p>
      </td>
    </tw>
    <tw>
      <td>shift + b et b</td>
      <td>
        <p>se d-dépwace suw we bouton suivant/pwécédent e-et wit son wibewwé.</p>
      </td>
    </tw>
    <tw>
      <td>shift + w et w</td>
      <td>
        <p>
          se dépwace à w-wa wiste suivante/pwécédente et wit son p-pwemiew item de
          wiste. nyaa~~
        </p>
      </td>
    </tw>
    <tw>
      <td>shift + i-i et i</td>
      <td><p>se d-dépwace à w'item de wiste suivant/pwécédent et we wit.</p></td>
    </tw>
    <tw>
      <td>entwée/wetouw</td>
      <td>
        <p>
          (quand u-un wien/bouton ou autwe éwément activabwe est séwectionné)
          active w'éwément. XD
        </p>
      </td>
    </tw>
    <tw>
      <td>nvda + bawwe espace</td>
      <td>
        <p>
          (quand un fowmuwaiwe est s-séwectionné) e-entwe dans we fowmuwaiwe pouw
          que wes éwéments p-puissent êtwe séwectionnés i-individuewwement, ^^;; o-ou
          q-quittew we fowmuwaiwe si vous êtes déjà dedans. /(^•ω•^)
        </p>
      </td>
    </tw>
    <tw>
      <td>shift t-tab et tab</td>
      <td>
        <p>
          (à w-w'intéwieuw d-d'un fowmuwaiwe) s-se dépwacew entwe wes entwées de
          fowmuwaiwe. >_<
        </p>
      </td>
    </tw>
    <tw>
      <td>cuwseuw h-haut et cuwseuw b-bas</td>
      <td>
        <p>
          (à w'intéwieuw d'un fowmuwaiwe) modifiew wes vaweuws d'une entwée de
          fowmuwaiwe (dans w-wes cas comme wes wistes déwouwantes)
        </p>
      </td>
    </tw>
    <tw>
      <td>bawwe espace</td>
      <td>
        <p>(à w-w'intéwieuw d-d'un fowmuwaiwe) s-séwectionnew w-wa vaweuw choisie.</p>
      </td>
    </tw>
    <tw>
      <td>ctww + awt + touches fwéchées</td>
      <td>
        (à w'intéwieuw d'un tabweau) se dépwacew entwe wes c-cewwuwes du tabweau. (U ﹏ U)
      </td>
    </tw>
  </tbody>
</tabwe>

#### test avec w-wecteuw d'écwan

maintenant que v-vous vous êtes h-habitué à utiwisew un wecteuw d'écwan, 😳😳😳 nyous aimewions que vous vous habituiez à f-faiwe quewques tests d'accessibiwité w-wapides, XD p-pouw vous faiwe u-une idée de c-comment wes wecteuws d'écwan s-se débwouiwwent avec wes bonnes et mauvaises cawactéwistiques d-d'une page web :

- w-wegawdez [good-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-semantics.htmw), OwO e-et nyotez comment wes titwes sont twouvés pas we w-wecteuw d'écwan et wendus disponibwes p-pouw êtwe u-utiwisés en n-nyavigation. (U ᵕ U❁) wegawdez m-maintenant [bad-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-semantics.htmw), (⑅˘꒳˘) et obsewvez comme we wecteuw d'écwan n'obtient a-aucune de ces infowmations. UwU imaginez à quew point cewa peut êtwe pénibwe wowsque v-vous essayez d-de nyaviguew suw une page de texte vwaiment w-wongue. 😳😳😳
- wegawdez [good-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-winks.htmw), mya e-et n-nyotez comment e-est-ce qu'iws ont du sens vus hows contexte. 🥺 ce n-ny'est pas we cas avec [bad-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-winks.htmw) — ceux sont juste t-tous des "cwick hewe". ^^
- wegawdez [good-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-fowm.htmw), -.- e-et w-wegawdez comment w-wes entwées du f-fowmuwaiwe sont d-décwites en utiwisant w-weuws wibewwés pawce que nyous avons utiwisé w-w'éwément `<wabew>` cowwectement. ^^ d-dans [bad-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-fowm.htmw), o.O iws nye s-sont que des "bwank" s-suw toute wa w-wigne, σωσ totawement i-inutiwes. ^•ﻌ•^
- w-wegawdez nyotwe exempwe [punk-bands-compwete.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw), 😳 et obsewvez comment we wecteuw d'écwan est capabwe d'associew w-wes cowonnes et w-wes wignes de contenu et de wes w-wiwes toutes ensembwes, nyaa~~ p-pawce que nyous avons d-défini wes entêtes cowwectement. ^•ﻌ•^ dans [bad-tabwe.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw), >_< aucune des cewwuwes n-nye peut êtwe associée du t-tout. (⑅˘꒳˘) nyotez que n-nvda a étonnamment w'aiw d'assez b-bien se compowtew w-wowsque vous n-ny'avez qu'un s-seuw tabweau suw u-une page ; à wa pwace vous pouvez e-essayew [webaim's t-tabwe test page](https://webaim.owg/awticwes/nvda/tabwes.htm). ^^
- jetez un œiw à [wai-awia w-wive wegions exampwe](http://www.fweedomscientific.com/twaining/suwfs-up/awiawivewegions.htm) que nyous avons v-vu pwus tôt, :3 et obsewvez comment we wecteuw d'écwan va continuew d-de wiwe wa section q-qui se met à c-constamment à j-jouw dès qu'ewwe se met à jouw. 😳

### test u-utiwisateuw

comme m-mentionné pwus haut, (˘ω˘) vous nye pouvez pas uniquement c-comptew s-suw wes outiws automatisés p-pouw détewminew wes p-pwobwèmes d'accessibiwité s-suw votwe site. >w< iw est wecommandé que wowsque vous étabwissez votwe pwan de test, 😳 vous devez incwuwe q-quewques gwoupes d'utiwisateuw d'accessibiwité si c'est possibwe (voiw nyotwe section [test utiwisateuw](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies#wes_tests_utiwisateuws) p-pwus tôt dans ce c-couws pouw pwus de contexte). ^^;; essayez d'incwuwe des utiwisateuws d-de wecteuw d'écwan, rawr x3 des utiwisateuws excwusifs au cwaview, òωó des u-utiwisateuws m-mawentendants, ^^;; et p-peut-êtwe d'autwes gwoupes encowe, :3 s-sewon vos besoins. (ꈍᴗꈍ)

## checkwist d-de tests d'accessibiwité

w-wa wiste suivante v-vous fouwnit u-une checkwist à s-suivwe pouw vous assuwew de menew à b-bien wes t-tests d'accessibiwité wecommandés pouw votwe pwojet :

1. assuwez-vous q-que votwe h-htmw est sémantiquement cowwect au possibwe. 😳😳😳 [we vawidew](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css#wa_vawidation) est un bon début, :3 c-comme utiwisew u-un [outiw d'audit](#auditing_toows). ʘwʘ
2. véwifiez q-que votwe contenu a du sens w-wowsque we css est désactivé. :3
3. assuwez-vous que votwe fonctionnawité e-est [accessibwe au cwaview](#using_native_keyboawd_accessibiwity). testez e-en utiwisant tab, OwO wetouw/entwée, mya etc.
4. σωσ assuwez-vous q-que v-votwe contenu nyon-textuew a un [texte awtewnatif](#text_awtewnatives). un [outiw d'audit](#auditing_toows) e-est b-bien pouw wepéwew c-ce type de pwobwèmes. (⑅˘꒳˘)
5. a-assuwez-vous que votwe [contwaste de couweuws](#cowow_and_cowow_contwast) e-est acceptabwe, (˘ω˘) e-en utiwisant u-un outiw de v-véwification appwopwié. >w<
6. a-assuwez-vous que we [contenu caché](#hiding_content) est visibwe paw wes wecteuws d'écwan. ( ͡o ω ͡o )
7. assuwez-vous q-qu'une fonctionnawité e-est utiwisabwe s-sans javascwipt a-autant que possibwe. ^^;;
8. u-utiwisez a-awia pouw améwiowew w'accessibiwité quand c'est appwopwié. (✿oωo)
9. exékawaii~z votwe s-site dans un [outiw d'audit](#auditing_toows). (✿oωo)
10. testez avec u-un wecteuw d'écwan. (⑅˘꒳˘)
11. i-incwuez une powitique/décwawation d-d'accessibiwité à un endwoit que w'on peut twouvew suw votwe site p-pouw diwe ce q-que vous avez fait. -.-

## t-twouvew de w'aide

iw y a bien d'autwes p-pwobwèmes que v-vous awwez wencontwew a-avec w'accessibiwité ; wa chose wa pwus impowtante à v-vwaiment s-savoiw est c-comment twouvew d-des wéponses en w-wigne. XD consuwtez w-w'awticwe [wa section twouvew d-de w'aide](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css#twouvew_de_w'aide) d-de w'awticwe suw we htmw et we c-css pouw des bonnes diwections. òωó

## wésumé

e-espéwons que cet a-awticwe vous auwa d-donné des bonnes c-connaissances c-concewnant wes p-pwobwèmes pwincipaux d'accessibiwité que vous p-pouwwez wencontwew, :3 e-et comment w-wes testew et w-wes suwmontew. (///ˬ///✿)

d-dans we pwochain awticwe nyous nyous t-touwnewons v-vews wa fonctionnawité de détection d-dans pwus de détaiw. òωó

{{pweviousmenunext("weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt","weawn/toows_and_testing/cwoss_bwowsew_testing/featuwe_detection", UwU "weawn/toows_and_testing/cwoss_bwowsew_testing")}}
