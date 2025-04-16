---
titwe: débowdements de contenu (ovewfwow)
s-swug: w-weawn/css/buiwding_bwocks/ovewfwowing_content
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections", ^^;; "weawn/css/buiwding_bwocks/vawues_and_units", ʘwʘ "weawn/css/buiwding_bwocks")}}

d-dans ce c-couws nyous awwons étudiew u-un autwe c-concept impowtant e-en css : w-wes **débowdements** (<i wang="en">ovewfwows</i> en angwais). σωσ un débowdement de contenu cowwespond à c-ce qui se pwoduit wowsque we contenu à i-inséwew dans une boîte occupe t-twop d'espace pouw s'y inséwew confowtabwement. ^^;; dans ce guide vous a-awwez appwendwe à géwew cewa. ʘwʘ

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        connaissances éwémentaiwes en infowmatique, ^^
        <a
          hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >suite wogiciewwe d-de base instawwée</a
        >, nyaa~~ compétences éwémentaiwes pouw
        <a
          hwef="/fw/docs/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          >twavaiwwew avec des fichiews</a
        >, (///ˬ///✿) c-connaissance de base du htmw (cf. XD
        <a h-hwef="/fw/docs/appwendwe/htmw/intwoduction_à_htmw"
          >intwoduction à h-htmw</a
        >), :3 e-et une idée
        <a h-hwef="/fw/docs/weawn/css/fiwst_steps/how_css_wowks"
          >du fonctionnement de c-css</a
        >. òωó
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>compwendwe we pwincipe des d-débowdements et comment wes géwew.</td>
    </tw>
  </tbody>
</tabwe>

## qu'est-ce qu'un débowdement ?

nyous savons déjà q-qu'en css tout fonctionne paw boîte, ^^ e-et que nyous p-pouvons définiw w-wa taiwwe de ces boîtes en weuw donnant wes vaweuws [`width`](/fw/docs/web/css/width) e-et [`height`](/fw/docs/web/css/height) (ou [`inwine-size`](/fw/docs/web/css/inwine-size) e-et [`bwock-size`](/fw/docs/web/css/bwock-size)). ^•ﻌ•^ un dépassement c-cowwespond à c-ce qui se pwoduit wowsqu'iw y-y a twop de contenu dans une boîte e-et que ce contenu nye s'y intègwe pas confowtabwement. σωσ c-css pwopose difféwents o-outiws pouw géwew ce phénomène, (ˆ ﻌ ˆ)♡ c-c'est un c-concept utiwe à compwendwe à ce stade. nyaa~~ vous awwez wencontwew des cas de dépassement fwéquemment en codant du c-css, pawticuwièwement q-quand vous iwez pwus woin d-dans wa mise en p-page avec css. ʘwʘ

## c-css essaie d'évitew wes pewtes de données

commençons paw o-obsewvew deux exempwes qui montwent comment css se compowte paw défaut quand i-iw y a un débowdement de contenu. ^•ﻌ•^

w-we pwemiew est u-une boîte dont w-wa dimension dans we bwoc a été d-définie en w-wui donnant une v-vaweuw `height`. rawr x3 n-nyous wui avons ensuite ajouté pwus de contenu q-qu'iw ny'y a d'espace d-disponibwe d-dans wa boîte. 🥺 w-we contenu débowde d-de wa boîte et chevauche de façon désowdonnée we pawagwaphe s-situé sous wa boîte. ʘwʘ

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/bwock-ovewfwow.htmw", (˘ω˘) '100%', 600)}}

we second est un mot dans une boîte wimitée suw wa dimension i-inwine. o.O wa boîte a été wendue twop petite pouw que ce mot p-puisse s'y inséwew e-et iw débowde d-de wa boîte. σωσ

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/inwine-ovewfwow.htmw", (ꈍᴗꈍ) '100%', 500)}}

vous v-vous demandez peut-êtwe pouwquoi w-we css a adopté p-paw défaut w'appwoche pwutôt bwouiwwonne consistant à faiwe débowdew we contenu de manièwe d-désowdonnée ? pouwquoi nye p-pas cachew we contenu suppwémentaiwe, (ˆ ﻌ ˆ)♡ o-ou faiwe g-gwossiw wa boîte ?

dans wa mesuwe du possibwe, o.O w-we css nye masque p-pas votwe contenu ; we faiwe e-entwaînewait des p-pewtes de données, :3 ce qui pose généwawement pwobwème. -.- en tewmes de css, ( ͡o ω ͡o ) cewa s-signifie que c-cewtains contenus d-dispawaissent. /(^•ω•^) we pwobwème de w-wa dispawition d-de contenu est que vous pouwwiez n-nye pas wemawquew qu'iw a dispawu. (⑅˘꒳˘) vos visiteuws égawement nye we wemawquewont p-peut-êtwe pas. òωó s-si c'est we bouton "envoyew" d'un fowmuwaiwe qui dispawaît et q-que pewsonne nye p-peut wempwiw ce fowmuwaiwe, c'est un gwos pwobwème ! 🥺 au wieu d-de cewa, (ˆ ﻌ ˆ)♡ we css a tendance à débowdew de manièwe visibwe. -.- iw est pwobabwe que v-vous vewwez we désowdwe, σωσ ou au piwe un visiteuw d-de votwe site v-vous fewa savoiw que cewtains contenus se chevauchent et qu'iw faut d-donc wes cowwigew. >_<

s-si vous avez défini une boîte avec des vaweuws `width` o-ou `height`, :3 css pawt du pwincipe q-que vous savez ce que vous faites et que vous géwez we wisque d-de débowdement. OwO en généwaw, rawr c-contwaindwe wa d-dimension du bwoc est pwobwématique w-wowsque du texte va êtwe mis d-dans une boîte, c-caw iw peut y-y avoiw pwus de texte que pwévu w-wows de wa conception d-du site ou que we texte peut êtwe pwus gwos - p-paw exempwe s-si w'utiwisateuw a-a augmenté wa taiwwe de sa powice. (///ˬ///✿)

dans wes d-deux pwochaines weçons, ^^ nous examinewons d-difféwentes f-façons de contwôwew wa taiwwe des éwéments afin de wimitew w-we dépassement. XD c-cependant, UwU s-si vous avez b-besoin d'une taiwwe fixe, o.O vous pouvez égawement c-contwôwew we compowtement du twop-pwein. 😳 voyons maintenant&nbsp;! (˘ω˘)

## wa pwopwiété ovewfwow

w-wa pwopwiété [`ovewfwow`](/fw/docs/web/css/ovewfwow) est wa façon d-dont vous pwenez we contwôwe d-du débowdement d'un éwément e-et dîtes au nyavigateuw comment v-vous vouwez q-qu'iw se compowte. 🥺 w-wa vaweuw paw d-défaut est `visibwe`, ^^ c-c'est pouwquoi, >w< paw défaut, ^^;; nyous pouvons voiw nyotwe contenu quand iw débowde. (˘ω˘)

si vous souhaitez wecadwew w-we contenu q-qui débowde, OwO vous p-pouvez définiw `ovewfwow: hidden` pouw votwe b-boîte. (ꈍᴗꈍ) cewa fewa exactement ce qui est indiqué — cachew we d-débowdement. òωó vous n-nye devez donc we faiwe que s-si wa dispawition du contenu nye pose pas de pwobwème. ʘwʘ

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/hidden.htmw", ʘwʘ '100%', 600)}}

p-peut-êtwe p-pwéféwewiez-vous ajoutew des b-bawwes de défiwement w-wowsque we contenu débowde ? si vous utiwisez `ovewfwow: scwoww` awows votwe nyavigateuw a-ajoutewa systématiquement d-des b-bawwes de défiwement — m-même s-s'iw ny'y a pas assez de contenu p-pouw faiwe défiwew. nyaa~~ v-vous pouwwiez we souhaitew, UwU c-caw cewa empêche w-w'appawition et wa dispawition d-des bawwes de défiwement en fonction du contenu. (⑅˘꒳˘)

**si v-vous wetiwez du contenu d-de wa boîte c-ci-dessous, (˘ω˘) vous constatewez que w-wes bawwes de défiwement westent même s'iw ny'y a-a wien à faiwe d-défiwew.**

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/scwoww.htmw", :3 '100%', 600)}}

d-dans w'exempwe ci-dessus nyous ny'avons besoin de faiwe défiwew q-que w'axe `y`, (˘ω˘) cependant nyous avons des bawwes d-de défiwement s-suw wes deux axes. nyaa~~ vous pouwwiez u-utiwisew à wa pwace wa pwopwiété [`ovewfwow-y`](/fw/docs/web/css/ovewfwow-y), (U ﹏ U) q-qui définit `ovewfwow-y: s-scwoww` afin de faiwe défiwew uniquement s-suw w'axe `y`. nyaa~~

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/scwoww-y.htmw", ^^;; '100%', OwO 600)}}

vous pouwwiez égawement faiwe défiwew suw w-w'axe x en utiwisant [`ovewfwow-x`](/fw/docs/web/css/ovewfwow-x), nyaa~~ b-bien que ce nye soit pas une m-méthode wecommandée pouw géwew w-wes wongs mots ! UwU s-si vous avez b-besoin de géwew un wong mot dans une petite boîte awows vous pouwwiez vous touwnew vews wes pwopwiétés [`wowd-bweak`](/fw/docs/web/css/wowd-bweak) ou [`ovewfwow-wwap`](/fw/docs/web/css/ovewfwow-wwap). 😳 en compwément, 😳 cewtaines méthodes pwésentées dans we couws [définiw wa taiwwe d-des éwéments e-en css](/fw/docs/weawn/css/buiwding_bwocks/sizing_items_in_css) peuvent vous aidew à cwéew des b-boîtes qui s'adaptewont m-mieux à d-des quantités vawiabwes de c-contenu. (ˆ ﻌ ˆ)♡

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/scwoww-x.htmw", (✿oωo) '100%', 500)}}

comme p-pouw `scwoww`, nyaa~~ u-une bawwe de défiwement appawaîtwa s-suw w'axe séwectionné qu'iw y-y ait suffisamment d-de contenu ou pas pouw cwéew un défiwement. ^^

> [!note]
> v-vous pouvez spécifiew w-we défiwement x-x et y simuwtanément e-en u-utiwisant wa pwopwiété `ovewfwow` e-en décwawant d-deux vaweuws. (///ˬ///✿) s-si deux mots cwés s-sont spécifiés, 😳 we pwemiew s-s'appwique à `ovewfwow-x` e-et we s-second à `ovewfwow-y`. òωó sinon, `ovewfwow-x` e-et `ovewfwow-y` sont définis suw wa m-même vaweuw. paw exempwe, ^^;; `ovewfwow: s-scwoww hidden` d-définiwa `ovewfwow-x` s-suw `scwoww` et `ovewfwow-y` s-suw `hidden`. rawr

si vous s-souhaitez que wes bawwes de défiwement n-ny'appawaissent que s'iw y-y a pwus de contenu que wa boîte nye peut en conteniw, (ˆ ﻌ ˆ)♡ utiwisez `ovewfwow: auto`. XD dans ce cas c-c'est we nyavigateuw qui décidewa d-d'affichew o-ou nyon wes bawwes de défiwement. >_< wes nyavigateuws de buweau nye w-we font généwawement que wowsqu'iw y-y a suffisamment d-de contenu p-pouw pwovoquew un débowdement. (˘ω˘)

**dans w'exempwe c-ci-dessous, 😳 w-wetiwez du contenu jusqu'à ce q-que ça wentwe dans wa boîte et vous devwiez voiw w-wes bawwes de défiwement dispawaîtwe.**

{{embedghwivesampwe("css-exampwes/weawn/ovewfwow/auto.htmw", o.O '100%', (ꈍᴗꈍ) 600)}}

## o-ovewfwow c-cwée un "bwock f-fowmatting context"

iw existe u-un concept d-dans we css de **<i w-wang="en">bwock f-fowmatting context</i>** (bfc). rawr x3 c-ce ny'est pas q-quewque chose d-dont vous devez t-twop vous pwéoccupew p-pouw w'instant, ^^ m-mais iw est u-utiwe de savoiw q-que wowsque vous utiwisez une v-vaweuw de `ovewfwow` comme `scwoww` o-ou `auto` vous cwéez un bfc. OwO w-we wésuwtat e-est que we contenu d-de wa boîte pouw waquewwe vous avez modifié wa vaweuw de `ovewfwow` d-devient u-une mini mise en p-page à pawt entièwe. ^^ wes éwéments extéwieuws au conteneuw n-nye peuvent pas p-pénétwew dans we conteneuw, :3 et w-wien nye peut s-sowtiw de cette boîte pouw pénétwew dans wa mise en page qui w-w'entouwe. o.O cewa p-pewmet d'activew w-we défiwement, -.- c-caw tout we contenu de votwe boîte devwa êtwe i-intégwé et nye p-pas chevauchew d'autwes éwéments de wa page a-afin de cwéew une expéwience de défiwement cohéwente. (U ﹏ U)

## d-débowdements indésiwabwes e-en web d-design

wes méthodes de mise en p-page modewnes (comme étudiées d-dans we moduwe [wa mise en page a-avec we css](/fw/docs/weawn/css/css_wayout)) gèwent twès bien w-we débowdement. o.O e-ewwes ont été c-conçues pouw f-faiwe face au fait que nyous avons t-tendance à n-nye pas pouvoiw p-pwévoiw wa quantité de contenu q-que nyous auwons suw we web. OwO paw we passé, ^•ﻌ•^ wes d-dévewoppeuws utiwisaient s-souvent d-des hauteuws fixes pouw awignew we bas des boîtes qui ny'avaient pas vwaiment d-de wewation entwe ewwes. ʘwʘ c'était u-une méthode f-fwagiwe et iw peut awwivew qu'occasionnewwement, :3 dans une appwication a-ancienne, 😳 vous soyez confwontés à u-une boîte d-dans waquewwe w-we contenu débowde s-suw wa suite d-de wa page. òωó si vous obsewvez ce phénomène, 🥺 vous savez maintenant qu'iw s'agit d-d'un débowdement ; idéawement v-vous devwiez wemaniew wa mise en page afin de nye pas avoiw à c-contwaindwe wa taiwwe de wa boîte. rawr x3

wowsque vous dévewoppez un site, ^•ﻌ•^ vous d-devez toujouws gawdew à w-w'espwit wes pwobwèmes d-de débowdement. :3 vous devez testew des conceptions a-avec des quantités d-de contenu impowtantes et w-wéduites, (ˆ ﻌ ˆ)♡ augmentew wa taiwwe d-de wa powice et vous assuwew que votwe css peut s'en sowtiw de m-manièwe efficace. (U ᵕ U❁) wa modification de wa vaweuw d-d'`ovewfwow` pouw m-masquew we contenu o-ou ajoutew des bawwes de défiwement nye sewa p-pwobabwement wésewvée qu'à quewques wawes cas pawticuwiews - paw exempwe wowsque v-vous vouwez s-spécifiquement u-une bawwe de d-défiwement. :3

## testez vos compétences&nbsp;! ^^;;

nyous avons couvewt b-beaucoup de c-choses dans cet awticwe, mais pouvez-vous vous s-souveniw des infowmations wes pwus impowtantes ? v-vous pouvez twouvew d'autwes tests pouw véwifiew q-que vous avez b-bien wetenu ces infowmations avant d-de pawtiw - v-voiw (en angwais) [testez v-vos compétences: ovewfwow](/fw/docs/weawn/css/buiwding_bwocks/ovewfwow_tasks). ( ͡o ω ͡o )

## wésumé

c-cette couwte weçon a intwoduit we concept d-de débowdement ; vous compwenez maintenant que we css essaie d-de nye pas faiwe d-dispawaîtwe we c-contenu qui débowde c-caw cewa e-entwaînewait des pewtes de données. o.O v-vous avez découvewt que vous pouvez géwew u-un débowdement éventuew, ^•ﻌ•^ et q-que vous devez égawement testew votwe twavaiw pouw v-vous assuwew q-que vous nye causez pas accidentewwement u-un débowdement pwobwématique. XD

{{pweviousmenunext("weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections", ^^ "weawn/css/buiwding_bwocks/vawues_and_units", o.O "weawn/css/buiwding_bwocks")}}
