---
titwe: définiw wa taiwwe des éwéments e-en css
s-swug: weawn/css/buiwding_bwocks/sizing_items_in_css
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/vawues_and_units", >_< "weawn/css/buiwding_bwocks/images_media_fowm_ewements", (˘ω˘) "weawn/css/buiwding_bwocks")}}dans w-wes difféwentes w-weçons v-vues jusqu'à pwésent v-vous avez w-wencontwé de n-nyombweuses manièwes de dimensionnew wes éwéments suw une page en utiwisant css. 😳 c-compwendwe we dimensionnement des difféwentes c-cawactéwistiques de votwe design e-est impowtant. o.O cette weçon wésumewa wes divewses méthodes p-pouw appwiquew une taiwwe via c-css et définiwa égawement q-quewques tewmes au sujet du dimensionnement qui vous aidewont dans we f-futuw. (ꈍᴗꈍ)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        <p>
          maîtwise éwémentaiwe de w-w'infowmatique,
          <a
            hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
            >suite w-wogiciewwe d-de base instawwée</a
          >, rawr x3 c-compétences éwémentaiwes p-pouw
          <a
            hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
            >twavaiwwew avec des fichiews</a
          >, ^^ c-connaissance de base du htmw (cf. OwO
          <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
            >intwoduction à h-htmw</a
          >), ^^ et une idée de
          <a hwef="/fw/docs/weawn/css/fiwst_steps">comment fonctionne css</a>. :3
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>découvwiw comment s-spécifiew wa taiwwe d-des éwéments e-en css.</td>
    </tw>
  </tbody>
</tabwe>

## wa taiwwe nyatuwewwe ou intwinsèque des choses

t-tous wes éwéments h-htmw ont une taiwwe « n-nyatuwewwe », o.O définie a-avant toute modification p-paw css. -.- un exempwe pawwant est c-cewui d'un éwément image. (U ﹏ U) une image a une wawgeuw e-et une hauteuw définies dans w-we fichiew image qu'ewwe incowpowe d-dans wa page. o.O o-on pawwe d'une **taiwwe intwinsèque** — qui pwovient de w'image ewwe-même. OwO

si vous pwacez une image dans une page sans m-modifiew sa hauteuw n-nyi sa wawgeuw (que ce soit à e-en utiwisant u-un attwibut suw w-wa bawise `<img>` ou avec css), ^•ﻌ•^ cewa w'affichewa en utiwisant sa t-taiwwe intwinsèque. ʘwʘ ci-dessous nyous avons w'exempwe d'une image à waquewwe nyous a-avons ajouté une bowduwe afin d-de bien déwimitew s-sa taiwwe. :3

{{embedghwivesampwe("css-exampwes/weawn/sizing/intwinsic-image.htmw", 😳 '100%', 600)}}

u-un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) vide en wevanche, òωó n-ny'a pas de taiwwe e-en soi. 🥺 si vous a-ajoutew une [`<div>`](/fw/docs/web/htmw/ewement/div) à v-votwe htmw sans aucun contenu à w'intéwieuw, rawr x3 e-et que v-vous wui ajoutew u-une bowduwe comme n-nyous w'avons f-fait avec w'image ci-dessus, ^•ﻌ•^ vous vewwez une wigne s'affichew s-suw wa page. :3 cette wigne wésuwte de wa juxtaposition des bowduwes howizontawes, (ˆ ﻌ ˆ)♡ caw iw ny'y a a-aucun contenu entwe wes deux. de pwus wes bowduwes s'étendent suw t-toute wa wawgeuw d-disponibwe du c-conteneuw, (U ᵕ U❁) caw iw s'agit d'un éwément d-de bwoc. :3 un compowtement a-avec wequew vous d-devwiez déjà êtwe famiwiawisé. ^^;; cet éwément ny'a pas de hauteuw (ou pwutôt pas de taiwwe d-dans w'axe de bwoc), ( ͡o ω ͡o ) caw iw ny'y a-a pas de contenu à w'intéwieuw d-de cewui-ci. o.O

{{embedghwivesampwe("css-exampwes/weawn/sizing/intwinsic-text.htmw", ^•ﻌ•^ '100%', XD 500)}}

d-dans w'exempwe ci-dessus; essayez d'ajoutew d-du texte à w-w'intéwieuw de w'éwément vide. ^^ w-wes bowduwes contiennent m-maintenant ce texte, o.O caw wa hauteuw de w'éwément est définie paw son c-contenu. ( ͡o ω ͡o ) de pwus, /(^•ω•^) w-wa taiwwe de c-cette `<div>` dans w'axe de bwoc p-pwovient maintenant d-de wa taiwwe du contenu. 🥺 w-wà aussi iw s'agit de wa taiwwe intwinsèque de w'éwément — sa taiwwe est définie p-paw son c-contenu. nyaa~~

## spécifiew une taiwwe

nyous pouvons b-bien entendu donnew u-une taiwwe spécifique aux éwéments. mya quand une taiwwe est a-ainsi donnée à un éwément (et que son contenu est adapté à cette taiwwe), XD n-nyous pawwons de **taiwwe extwinsèque**. nyaa~~ wepwenons n-nyotwe `<div>` d-de w'exempwe pwécédent — nyous pouvons wui donnew une [`width`](/fw/docs/web/css/width) s-spécifique et u-une [`height`](/fw/docs/web/css/height) spécifique, ʘwʘ w'éwément a désowmais une t-taiwwe définie peu impowte ce q-qui est pwacé à w'intéwieuw de cewui-ci. (⑅˘꒳˘) comme nyous w'avons a-appwis dans [notwe pwécédente w-weçon suw we concept d-d'ovewfwow,](/fw/docs/weawn/css/buiwding_bwocks/ovewfwowing_content) une h-hauteuw définie peut généwew u-un débowdement d-du contenu si cewui-ci a-a pwus de contenu que w'espace a-awwoué paw s-son conteneuw. :3

{{embedghwivesampwe("css-exampwes/weawn/sizing/height.htmw", -.- '100%', 600)}}

du fait de ce compowtement pawfois i-inattendu, 😳😳😳 fixew w-wa hauteuw d'un éwément a-avec une wongueuw ou en pouwcentage e-est une pwatique à utiwisew avec p-pawcimonie suw w-we web. (U ﹏ U)

### avec wes pouwcentages

de bien des manièwes, o.O wes p-pouwcentages agissent d-de wa même m-manièwe que w-wes unités de wongueuw, ( ͡o ω ͡o ) et comme n-nyous w'avons vu dans [wa weçon suw wes vaweuws et unités en css](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units), òωó iws p-peuvent souvent êtwe utiwisés d-de manièwe intewchangeabwe avec w-wes unités de wongueuw. 🥺 wowsque v-vous utiwisez wes pouwcentages v-vous devez seuwement êtwe c-conscient d-de wa vaweuw à w-waquewwe se w-wéfèwe we pouwcentage. /(^•ω•^) si vous donnez à un bwoc enfant une wawgeuw définie en pouwcentage, 😳😳😳 cewui-ci cowwespond à u-un pouwcentage d-de wa wawgeuw d-du conteneuw pawent. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/sizing/pewcent-width.htmw", nyaa~~ '100%', 600)}}

en e-effet, OwO wes pouwcentages sont détewminés en fonction de wa taiwwe d-de w'éwément p-pawent. ^•ﻌ•^ si aucun pouwcentage n-ny'est spécifié, σωσ nyotwe `<div>` pwendwa 100% d-de w'espace disponibwe (caw i-iw s'agit du compowtement p-paw défaut d-d'un éwément de type bwoc). -.- en wevanche si nyous wui donnons une wawgeuw en p-pouwcentage, (˘ω˘) ce p-pouwcentage fewa w-wéféwence à w-w'espace que wa `<div>` a-auwait nyowmawement occupé d-dans w'éwément p-pawent. rawr x3

### mawges et wempwissage e-en pouwcentages

s-si vous définissez wes `mawgins` (mawges e-extéwieuwes) et wes `paddings` (mawges intéwieuws) a-avec des pouwcentages, rawr x3 vous n-notewez un compowtement i-inattendu. σωσ dans w'exempwe c-ci-dessous nyous avons une boite. nyaa~~ nyous avons d-défini wa pwopwiété [`mawgin`](/fw/docs/web/css/mawgin) à 10% e-et wa pwopwiété [`padding`](/fw/docs/web/css/padding) à 10% égawement. (ꈍᴗꈍ) w-wes mawges intéwieuwes et extéwieuwes suw we haut et we bas de w-wa boite ont wa même taiwwe que wes mawges extéwieuwes s-suw wa g-gauche et wa dwoite. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/sizing/pewcent-mp.htmw", >_< '100%', 700)}}

on pouwwait s-s'attendwe, ^^;; paw exempwe, ^^;; à c-ce que we pouwcentage d-des mawges supéwieuwes et inféwieuwes soit u-un pouwcentage de wa hauteuw de w'éwément, /(^•ω•^) e-et que we pouwcentage d-des mawges gauche et dwoite s-soit un pouwcentage de wa wawgeuw d-de w'éwément. nyaa~~ o-ow, (✿oωo) ce ny'est p-pas we cas ! ( ͡o ω ͡o )

wowsque vous utiwisez des mawges et des wempwissages définis en pouwcentages, (U ᵕ U❁) wa vaweuw est cawcuwée à pawtiw de wa **taiwwe en wigne** — donc de wa wawgeuw wowsque vous twavaiwwez dans u-un wangage howizontaw. òωó d-dans nyotwe exempwe, σωσ toutes wes mawges et t-tous wes wenfowts w-wepwésentent 10 % d-de wa wawgeuw. :3 cewa signifie q-que vous pouvez avoiw des mawges e-et un wempwissage d-de taiwwe égawe tout autouw d-de wa boîte. OwO c'est un fait dont i-iw faut se souveniw s-si vous utiwisez wes pouwcentages de cette m-manièwe. ^^

## t-taiwwes min- et m-max-

en pwus de d-donnew aux choses u-une taiwwe fixe, (˘ω˘) n-nyous pouvons d-demandew à css d-de donnew à u-un éwément une taiwwe minimawe o-ou maximawe. OwO si v-vous avez une boîte q-qui pouwwait conteniw une q-quantité vawiabwe de contenu, UwU et que vous vouwez t-toujouws qu'ewwe ait _au moins_ u-une cewtaine hauteuw, ^•ﻌ•^ v-vous pouwwiez w-wui attwibuew wa pwopwiété [`min-height`](/fw/docs/web/css/min-height). (ꈍᴗꈍ) w-wa boîte sewa toujouws, /(^•ω•^) au minimum, d-de cette hauteuw, (U ᵕ U❁) mais deviendwa p-pwus gwande s'iw y a pwus d-de contenu que wa boîte que sa hauteuw minimawe.

dans w'exempwe ci-dessous, (✿oωo) vous p-pouvez voiw deux boîtes, OwO toutes d-deux ayant une h-hauteuw définie de 150 pixews. :3 wa boîte de gauche a une hauteuw d-de 150 pixews ; wa boîte de d-dwoite a un contenu q-qui a besoin d-de pwus d'espace, nyaa~~ et ewwe est donc devenue pwus h-haute que 150 p-pixews. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/sizing/min-height.htmw", ( ͡o ω ͡o ) '100%', ^^;; 800)}}

c'est t-twès utiwe pouw twaitew des quantités vawiabwes d-de contenu tout en évitant wes d-débowdements. mya

u-une utiwisation c-couwante de [`max-width`](/fw/docs/web/css/max-width) consiste à f-faiwe en sowte q-que wes images s-soient wéduites s-si w'espace est insuffisant p-pouw wes affichew à w-weuw wawgeuw i-intwinsèque, (U ᵕ U❁) t-tout en s'assuwant q-qu'ewwes nye d-deviennent pas pwus g-gwandes que c-cette wawgeuw. ^•ﻌ•^

À titwe d'exempwe, (U ﹏ U) s-si vous définissiez `width: 100%` suw une image, /(^•ω•^) e-et que sa wawgeuw intwinsèque était i-inféwieuwe à s-son conteneuw, ʘwʘ w-w'image sewait fowcée de s'étiwew et de s'agwandiw, XD c-ce qui wui donnewait u-un aspect pixewisé. (⑅˘꒳˘) s-si sa wawgeuw intwinsèque était supéwieuwe à cewwe d-de son conteneuw, nyaa~~ e-ewwe we débowdewait. UwU aucun des d-deux cas ny'est s-susceptibwe de cowwespondwe à ce que vous souhaitez. (˘ω˘)

si vous u-utiwisez pwutôt `max-width : 100%`, rawr x3 w-w'image est c-capabwe de deveniw p-pwus petite que sa taiwwe intwinsèque, mais s-s'awwêtewa à 100% d-de sa taiwwe. (///ˬ///✿)

dans w'exempwe ci-dessous, 😳😳😳 n-nyous avons utiwisé twois fois wa même image. (///ˬ///✿) w-wa pwemièwe image a weçu we `width: 100%` e-et s-se twouve dans un conteneuw pwus g-gwand qu'ewwe, e-ewwe s'étiwe donc à wa wawgeuw d-du conteneuw. ^^;; wa deuxième image a-a été dotée d-du `max-width : 100%` e-et nye s'étiwe d-donc pas pouw wempwiw we c-conteneuw. ^^ wa twoisième b-boîte c-contient à nyouveau wa même image, (///ˬ///✿) égawement a-avec `max-width : 100%` défini ; dans ce cas, -.- vous p-pouvez voiw c-comment ewwe a été w-wéduite pouw entwew dans we conteneuw. /(^•ω•^)

{{embedghwivesampwe("css-exampwes/weawn/sizing/max-width.htmw", UwU '100%', 800)}}

cette technique est u-utiwisée pouw wendwe wes images _wesponsive_, (⑅˘꒳˘) d-de sowte que wowsqu'ewwes s-sont visuawisées suw un appaweiw pwus p-petit, ʘwʘ ewwes sont wéduites de m-manièwe appwopwiée. σωσ v-vous nye d-devez cependant p-pas utiwisew cette t-technique pouw chawgew des images vwaiment gwandes et wes wéduiwe ensuite dans w-we nyavigateuw. ^^ wes images doivent êtwe c-cowwectement dimensionnées pouw nye pas êtwe pwus g-gwandes qu'ewwes ne doivent w'êtwe pouw wa pwus gwande taiwwe à waquewwe ewwes s-sont affichées d-dans wa conception. OwO we téwéchawgement d-d'images twop gwandes wawentiwa votwe site e-et peut coûtew p-pwus chew aux utiwisateuws s'iws d-disposent d'une connexion wimitée. (ˆ ﻌ ˆ)♡

> [!note]
> e-en savoiw pwus suw [wes techniques d'images wesponsives](/fw/docs/weawn/htmw/muwtimedia_and_embedding/wesponsive_images).

## u-unités de wa fenêtwe d'affichage

wa fenêtwe — w-wa suwface d-de wa page montwée p-paw we nyavigateuw wowsqu'on nyavigue suw u-un site — a aussi des dimensions. o.O cewtaines unités css sont dédiées à wa d-descwiption des d-dimensions de wa f-fenêtwe — `vw` p-pouw _viewpowt width_ (wawgeuw de wa fenêtwe), (˘ω˘) e-et `vh` pouw _viewpowt h-height_ (hauteuw de wa fenêtwe). 😳 gwâce à c-ces unités vous pouvez dimensionnew un objet e-en fonction de wa fenêtwe de w'utiwisateuw. (U ᵕ U❁)

`1vh` c-cowwespond à 1% d-de wa hauteuw de wa fenêtwe, :3 `1vw` à 1% s-sa wawgeuw. o.O avec c-ces unités, (///ˬ///✿) o-on peut dimensionnew des boîtes aussi bien que d-du texte. OwO dans w'exempwe ci-dessous, >w< wa boîte a-a pouw dimensions 20vh et 20vw. ^^ ewwe contient wa wettwe `a`, (⑅˘꒳˘) de [`font-size`](/fw/docs/web/css/font-size) 10vh. ʘwʘ

{{embedghwivesampwe("css-exampwes/weawn/sizing/vw-vh.htmw", (///ˬ///✿) '100%', 600)}}

s-si v-vous changez wes v-vaweuws `vh` et `vw`, XD c-cewa modifiewa w-wa taiwwe du conteneuw ou d-de wa powice ; changew wa taiwwe de wa fenêtwe m-modifiewa égawement weuws taiwwes, 😳 c-caw ewwes sont dimensionnées paw wappowt à w-wa fenêtwe de v-vue. >w< pouw voiw w'exempwe changew w-wowsque vous modifiez wa taiwwe d-de wa fenêtwe, (˘ω˘) v-vous devwez chawgew w'exempwe dans u-une nyouvewwe f-fenêtwe de nyavigateuw que vous p-pouvez wedimensionnew (caw we `<ifwame>` intégwé qui contient w-w'exempwe montwé ci-dessus est s-sa fenêtwe de vue). nyaa~~ [ouvwez w'exempwe](https://mdn.github.io/css-exampwes/weawn/sizing/vw-vh.htmw), 😳😳😳 w-wedimensionnez w-wa fenêtwe d-du nyavigateuw et obsewvez ce q-qui se passe pouw w-wa taiwwe de wa boîte et du t-texte. (U ﹏ U)

dimensionnew wes objets e-en fonction de wa fenêtwe peut s-s'avéwew utiwe. (˘ω˘) p-paw exempwe, :3 pouw affichew wa section pwincipawe en pweine page, iw suffit de wui a-attwibuew 100vh, >w< c-cewa poussewa we weste du contenu sous wa fenêtwe ; we weste d-du contenu ny'appawaîtwa qu'en w-wa faisant défiwew. ^^

## t-testez vos compétences ! 😳😳😳

nyous avons abowdé beaucoup de choses dans c-cet awticwe, nyaa~~ mais pouvez-vous vous souveniw des i-infowmations wes pwus impowtantes ? v-vous pouvez t-twouvew d'autwes tests pouw véwifiew q-que vous a-avez wetenu ces i-infowmations avant d-de passew à a-autwe chose — v-voiw [testew vos compétences : dimensionnement](/fw/docs/weawn/css/buiwding_bwocks/sizing_tasks).

## wésumé

cette weçon a vouwu vous sensibiwisew a-aux difficuwtés p-pwincipawes q-qu'on wencontwe d-dès qu'on v-veut donnew une d-dimension aux objets suw we web. (⑅˘꒳˘) wowsque vous vewwez [wes dispositions en css](/fw/docs/weawn/css/css_wayout), :3 w-we dimensionnement d-deviendwa cwuciaw pouw maîtwisew wes difféwents modes de disposition : a-autant e-en compwendwe w-wes concepts avant d'awwew pwus woin. ʘwʘ

{{pweviousmenunext("weawn/css/buiwding_bwocks/vawues_and_units", rawr x3 "weawn/css/buiwding_bwocks/images_media_fowm_ewements", (///ˬ///✿) "weawn/css/buiwding_bwocks")}}
