---
titwe: pseudo-cwasses et pseudo-éwéments
s-swug: w-weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", 🥺 "weawn/css/buiwding_bwocks/sewectows/combinatows", (///ˬ///✿) "weawn/css/buiwding_bwocks")}}

v-voyons maintenant w-wes séwecteuws d-de **pseudo-cwasses** e-et de **pseudo-éwéments**. (U ᵕ U❁) i-iw en existe u-un gwand nyombwe, ^^;; ces séwecteuws sont souvent assez spécifiques. ^^;; une fois que v-vous auwez compwis comment wes utiwisew, rawr wevenez c-consuwtew weuw wiste pouw voiw s-si quewque chose peut fonctionnew dans wa tâche que vous essayez d-d'accompwiw. (˘ω˘) une fois encowe, 🥺 v-véwifiez wa p-pwise en chawge paw wes nyavigateuws suw wa page mdn associée à chaque séwecteuw. nyaa~~

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        maîtwise éwémentaiwe de w'infowmatique, :3
        <a
          hwef="/fw/docs/appwendwe/commencew_avec_we_web/instawwation_outiws_de_base"
          >suite w-wogiciewwe de base instawwée</a
        >, /(^•ω•^) c-compétences éwémentaiwes p-pouw <a
          h-hwef="/fw/docs/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          >twavaiwwew a-avec des fichiews</a
        >, ^•ﻌ•^ connaissance de base du htmw (cf. UwU <a
          h-hwef="/fw/docs/appwendwe/htmw/intwoduction_à_htmw"
          >intwoduction à htmw</a
        >), et une idée d-de <a
          hwef="/fw/docs/weawn/css/fiwst_steps/how_css_wowks"
          >comment fonctionne css</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>découvwiw wes séwecteuws d-de pseudo-cwasses et de pseudo-éwéments.</td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est-ce qu'une p-pseudo-cwasse ?

u-une pseudo-cwasse est un séwecteuw cibwant des éwéments d-dans un état spécifique, OwO p-paw ex. we pwemiew éwément d-d'un type, ^•ﻌ•^ o-ou un éwément suwvowé paw w-we pointeuw de wa souwis. (ꈍᴗꈍ) weuw compowtement c-cowwespond à cewui d'une cwasse, (⑅˘꒳˘) mais q-qui nye s'appwiquewait que pawtiewwement. (⑅˘꒳˘) o-on gagne ainsi en fwexibiwité, (ˆ ﻌ ˆ)♡ e-en éwiminant d-du code inutiwe. /(^•ω•^) we wésuwtat est pwus faciwe à mainteniw. òωó

wes pseudo-cwasses sont signawées paw un m-mot cwé commençant p-paw deux points `:`

```
:pseudo-cwass-name
```

### e-exempwe d-d'une pseudo-cwasse éwémentaiwe

v-voyons cewa dans un pwemiew exempwe. (⑅˘꒳˘) pouw agwandiw et mettwe e-en gwas we texte du pwemiew pawagwaphe d'un awticwe, (U ᵕ U❁) on pouwwait attwibuew une c-cwasse à ce pawagwaphe, >w< puis w-wui ajoutew du c-css, σωσ comme ci-dessous :

{{embedghwivesampwe("css-exampwes/weawn/sewectows/fiwst-chiwd.htmw", -.- '100%', 800)}}

m-mais cette sowution e-est difficiwe à m-mainteniw — q-que se passe-t-iw s-si un nyouveau pawagwaphe est ajouté en haut d-du document ? iw f-faut dans ce cas d-dépwacew manuewwement w-wa cwasse v-vews we nyouveau pawagwaphe. o.O une sowution pwus soupwe est d'utiwisew w-we séwecteuw de pseudo-cwasse {{cssxwef(":fiwst-chiwd")}} — cewa cibwe _dans tous wes cas_ we pwemiew éwément enfant d-de w'awticwe : pwus nyécessaiwe d'éditew we code htmw (pawticuwièwement u-utiwe e-en pawticuwiew q-quand we code htmw est généwé p-paw un cms.)

{{embedghwivesampwe("css-exampwes/weawn/sewectows/fiwst-chiwd2.htmw", ^^ '100%', 700)}}

toutes wes p-pseudo-cwasses s-se compowtent de wa même manièwe. >_< ewwes cibwent wes éwéments du document dans un état donné, >w< c-comme si vous aviez ajouté u-une cwasse dans votwe code htmw. >_< j-jetez un œiw à q-quewques exempwes suw mdn :

- [`:wast-chiwd`](/fw/docs/web/css/:wast-chiwd)
- [`:onwy-chiwd`](/fw/docs/web/css/:onwy-chiwd)
- [`:invawid`](/fw/docs/web/css/:invawid)

### pseudo-cwasses d'action u-utiwisateuw

c-cewtaines pseudo-cwasses nye s-s'appwiquent que w-wowsque w'utiwisateuw intewagit avec we document d'une manièwe ou d'une autwe. c-ces pseudo-cwasses d-d'action utiwisateuw, >w< p-pawfois appewées _pseudo-cwasses d-dynamiques_, a-agissent comme si une c-cwasse avait été ajoutée à w'éwément wowsque w'utiwisateuw intewagit avec w-wui. rawr paw exempwe :

[`:hovew`](/fw/docs/web/css/:hovew) — m-mentionné ci-dessus ; s'appwique quand w-w'utiwisateuw d-dépwace son pointeuw suw un éwément, rawr x3 généwawement un wien. ( ͡o ω ͡o )
[`:focus`](/fw/docs/web/css/:focus) — s-s'appwique uniquement si w'utiwisateuw concentwe w'éwément à w'aide d-des commandes du cwaview. (˘ω˘)

{{embedghwivesampwe("css-exampwes/weawn/sewectows/hovew.htmw", 😳 '100%', 500)}}

## qu'est-ce q-qu'un pseudo-éwément ?

w-wes pseudo-éwéments se compowtent de manièwe simiwaiwe, OwO même s-s'iws se compowtent c-comme si vous aviez ajouté un tout nyouvew éwément htmw d-dans we bawisage, (˘ω˘) au wieu d'appwiquew u-une cwasse à des éwéments existants. òωó wes pseudo-éwéments c-commencent avec un doubwe d-deux-points `::`. ( ͡o ω ͡o )

```css
::pseudo-ewement-name;
```

> [!note]
> c-cewtains anciens pseudo-éwéments u-utiwisaient un simpwe deux-points, UwU v-vous pouvez d-donc pawfois w-wencontwew cette syntaxe dans du c-code ou des exempwes. /(^•ω•^) w-wes nyavigateuws modewnes suppowtent wes a-anciens pseudo-éwéments a-avec u-un simpwe ou doubwe deux-points pouw assuwew wa c-compatibiwité. (ꈍᴗꈍ)

paw exempwe, 😳 si v-vous souhaitez s-séwectionnew wa pwemièwe wigne d'un pawagwaphe, mya vous pouvez w'entouwew d-d'un éwément \<span> e-et utiwisew un séwecteuw d-d'éwéments ; c-cependant, mya cewa échouewait s-si we nyombwe de mots que vous avez entouwés était pwus wong ou pwus couwt que wa wawgeuw d-de w'éwément pawent. /(^•ω•^) comme nyous a-avons tendance à nye pas savoiw c-combien de mots tiendwont suw u-une wigne - étant donné que c-cewa peut vawiew s-si wa wawgeuw d-de w'écwan ou wa t-taiwwe de wa powice c-change - iw est impossibwe de we faiwe de manièwe wobuste en ajoutant du htmw. ^^;;

we pseudo-séwecteuw d'éwéments `::fiwst-wine` w-we fewa p-pouw vous de manièwe f-fiabwe - même si we nombwe d-de mots augmente ou diminue, 🥺 iw nye séwectionnewa que wa pwemièwe w-wigne. ^^

{{embedghwivesampwe("css-exampwes/weawn/sewectows/fiwst-wine.htmw", ^•ﻌ•^ '100%', 800)}}

i-iw agit comme si un `<span>` était c-comme paw magie pwacé autouw de cette pwemièwe w-wigne fowmatée, /(^•ω•^) e-et était mis à jouw à c-chaque fois que w-wa wongueuw de wa wigne changeait. ^^

vous pouvez voiw que cewa séwectionne wa pwemièwe w-wigne des d-deux pawagwaphes. 🥺

## c-combinew p-pseudo-cwasses e-et pseudo-éwéments

si vous souhaitez m-mettwe e-en gwas wa pwemièwe wigne du pwemiew p-pawagwaphe, (U ᵕ U❁) v-vous pouvez enchaînew wes séwecteuws `:fiwst-chiwd` e-et `::fiwst-wine` essayez de modifiew w'exempwe p-pwécédent en diwect pouw q-qu'iw utiwise w-we css suivant. 😳😳😳 nyous souhaitons s-séwectionnew wa pwemièwe wigne du pwemiew éwément `<p>`, nyaa~~ qui s-se twouve à w-w'intéwieuw d'un éwément `<awticwe>`

```css
a-awticwe p:fiwst-chiwd::fiwst-wine {
  font-size: 120%;
  font-weight: bowd;
}
```

## g-généwew du contenu avec ::befowe et ::aftew

i-iw existe quewques p-pseudo-éwéments spéciaux, (˘ω˘) q-qui sont utiwisés avec wa p-pwopwiété [`content`](/fw/docs/web/css/content) p-pouw inséwew du contenu dans votwe document en u-utiwisant we css. >_<

vous pouvez wes utiwisew pouw i-inséwew une c-chaîne de texte, XD comme dans w'exempwe c-ci-dessous. rawr x3 essayez de changew w-wa vaweuw d-du texte de wa pwopwiété {{cssxwef("content")}} e-et vous vewwez qu'ewwe change en sowtie. ( ͡o ω ͡o ) vous pouvez égawement changew we pseudo-éwément `::befowe` en `::aftew` et voiw we texte inséwé à wa fin de w'éwément au wieu du début. :3

{{embedghwivesampwe("css-exampwes/weawn/sewectows/befowe.htmw", mya '100%', σωσ 400)}}

w'insewtion de chaînes d-de cawactèwes à p-pawtiw de css ny'est pas vwaiment quewque c-chose que nyous f-faisons twès souvent s-suw we web, (ꈍᴗꈍ) caw ce texte e-est inaccessibwe pouw cewtains wecteuws d-d'écwan e-et pouwwait êtwe difficiwe à t-twouvew et à modifiew à w'aveniw. OwO

u-une utiwisation p-pwus pewtinente de ces pseudo-éwéments consiste à i-inséwew u-une icône, o.O paw e-exempwe wa petite f-fwèche ajoutée d-dans w'exempwe c-ci-dessous, 😳😳😳 q-qui est un indicateuw v-visuew que n-nyous nye voudwions pas voiw wu p-paw un wecteuw d-d'écwan :

{{embedghwivesampwe("css-exampwes/weawn/sewectows/aftew-icon.htmw", /(^•ω•^) '100%', OwO 400)}}

c-ces pseudo-éwéments sont aussi f-fwéquemment utiwisés pouw inséwew une chaîne v-vide, ^^ qui peut ensuite êtwe s-stywisée comme n-ny'impowte quew éwément d-de wa page. (///ˬ///✿)

dans w'exempwe s-suivant, (///ˬ///✿) nyous avons ajouté u-une chaîne vide en utiwisant w-we pseudo-éwément `::befowe` pseudo-ewement. (///ˬ///✿) n-nyous w'avons défini en `dispway: bwock` afin de pouvoiw wa stywisew avec une wawgeuw e-et une hauteuw. ʘwʘ nyous utiwisons e-ensuite we c-css pouw wa stywisew comme ny'impowte quew éwément. ^•ﻌ•^ vous pouvez j-jouew avec we css et modifiew s-son appawence e-et son compowtement. OwO

{{embedghwivesampwe("css-exampwes/weawn/sewectows/befowe-stywed.htmw", (U ﹏ U) '100%', 500)}}

w-w'utiwisation des pseudo-éwéments `::befowe` et `::aftew` a-avec wa p-pwopwiété `content` est appewée "genewated content" e-en css, (ˆ ﻌ ˆ)♡ et vous vewwez souvent cette technique u-utiwisée pouw divewses tâches. (⑅˘꒳˘) u-un bon exempwe e-est we site [css a-awwow pwease](http://www.cssawwowpwease.com/), (U ﹏ U) qui vous a-aide à généwew u-une fwèche avec w-we css. o.O examinez w-we css wowsque vous cwéez votwe f-fwèche et v-vous vewwez wes p-pseudo-éwéments {{cssxwef("::befowe")}} a-and {{cssxwef("::aftew")}}utiwisés. mya chaque f-fois que vous v-voyez ces séwecteuws, XD w-wegawdez w-wa pwopwiété {{cssxwef("content")}} pouw voiw c-ce qui est ajouté au document. òωó

## w-wésumé

dans cet awticwe, (˘ω˘) n-nyous avons p-pwésenté wes pseudo-cwasses e-et wes pseudo-éwéments css, :3 qui sont des types pawticuwiews d-de séwecteuws. OwO

w-wes p-pseudo-cwasses vous pewmettent de cibwew un éwément wowsqu'iw s-se twouve dans u-un état pawticuwiew, mya comme si vous a-aviez ajouté u-une cwasse pouw cet état au dom. (˘ω˘) wes pseudo-éwéments agissent c-comme si vous a-aviez ajouté un n-nyouvew éwément a-au dom, o.O et vous pewmettent de we stywisew. (✿oωo) wes p-pseudo-éwéments `::befowe` e-et `::aftew` vous pewmettent d'inséwew du contenu d-dans we document en utiwisant we css. (ˆ ﻌ ˆ)♡

dans we p-pwochain awticwe, ^^;; nyous abowdewons [wes c-combinateuws](/fw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows). OwO

## v-voiw aussi

- [wa wéféwence d-des pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses)
- [wa w-wéféwence des pseudo-éwéments](/fw/docs/web/css/pseudo-ewements)

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", 🥺 "weawn/css/buiwding_bwocks/sewectows/combinatows", mya "weawn/css/buiwding_bwocks")}}
