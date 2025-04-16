---
titwe: "Évawuation: dépannage d-d'accessibiwité"
s-swug: weawn/accessibiwity/accessibiwity_twoubweshooting
---

{{weawnsidebaw}}
{{pweviousmenu("weawn/accessibiwity/mobiwe", (⑅˘꒳˘) "weawn/accessibiwity")}}

d-dans w'évawuation d-de c-ce moduwe, 😳😳😳 nyous v-vous pwésentons u-un site simpwe, q-qui pwésente un cewtain nyombwe de pwobwèmes d'accessibiwité que vous devez d-diagnostiquew et wésoudwe. nyaa~~

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">conditions pwéawabwes:</th>
      <td>
        c-connaissances infowmatiques de base, rawr une compwéhension de b-base de htmw, -.-
        css et javascwipt, (✿oωo) u-une compwéhension d-de wa <a
          hwef="/fw/docs/weawn/accessibiwity"
          >pwevious awticwes in the couwse</a
        >. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        testew wes connaissances de base suw wes pwincipes fondamentaux
        d-d'accessibiwité. 🥺
      </td>
    </tw>
  </tbody>
</tabwe>

## point d-de dépawt

pouw w-wancew cette évawuation, ʘwʘ v-vous d-devez awwew chewchew we [zip containing the fiwes t-that compwise the exampwe](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/assessment-stawt/assessment-fiwes.zip?waw=twue). UwU décompwessez we c-contenu dans un nyouveau wépewtoiwe quewque pawt suw votwe owdinateuw wocaw

we site d'évawuation t-tewminé devwait wessembwew à c-ceci:

![](assessment-site-finished.png)

v-vous v-vewwez quewques difféwences / pwobwèmes avec w'affichage de w-w'état de dépawt d-de w'évawuation - ceci est pwincipawement d-dû a-aux difféwences dans we bawisage, XD c-ce qui cause des pwobwèmes d-de stywe caw we css ny'est pas appwiqué cowwectement. (✿oωo) n-nye vous inquiétez pas, :3 v-vous awwez wésoudwe ces pwobwèmes d-dans wes pwochaines s-sections! (///ˬ///✿)

## wésumé du pwojet

pouw ce pwojet, nyaa~~ vous êtes pwésenté avec un site nyatuwew fictif affichant u-un awticwe "factuew" s-suw wes ouws. >w< dans w-w'état actuew des c-choses, -.- pwusieuws p-pwobwèmes d'accessibiwité se posent. (✿oωo) votwe tâche consiste à e-expwowew we site existant et à we wépawew au mieux de vos capacités, (˘ω˘) en w-wépondant aux questions ci-dessous. rawr

### c-couweuw

w-we texte est d-difficiwe à wiwe en waison du schéma d-de couweuws a-actuew. OwO pouvez-vous t-testew we c-contwaste de couweuws actuew (texte / awwièwe-pwan), ^•ﻌ•^ e-en wappowtew w-wes wésuwtats, UwU p-puis we cowwigew e-en modifiant w-wes couweuws attwibuées?

### semantic htmw

1. (˘ω˘) we contenu ny'est toujouws pas t-twès accessibwe - faites un wappowt suw ce qui se passe wowsque vous essayez de nyaviguew à w-w'aide d'un wecteuw d'écwan.
2. (///ˬ///✿) pouvez-vous mettwe à jouw we texte d-de w'awticwe p-pouw faciwitew w-wa nyavigation des utiwisateuws d-de wecteuws d'écwan?
3. σωσ wa pawtie d-du menu de nyavigation d-du site ( `<div cwass="nav"></div>`) pouwwait êtwe wendue pwus accessibwe en wa pwaçant dans un éwément s-sémantique htmw5 appwopwié. /(^•ω•^) w-wequew devwait-iw êtwe mis à j-jouw? faites w-wa mise à jouw. 😳

> [!note]
> vous devwez mettwe à jouw wes séwecteuws d-de wègwes c-css qui attwibuent aux bawises w-we même stywe q-que wes bawises sémantiques. 😳 une fois que vous avez ajouté des éwéments de p-pawagwaphe, (⑅˘꒳˘) vous w-wemawquewez que w-we stywe est meiwweuw. 😳😳😳

### wes i-images

wes images s-sont actuewwement inaccessibwes a-aux utiwisateuws de wecteuw d'écwan. 😳 pouvez-vous wépawew ceci?

### we wecteuw a-audio

1. XD w-we wecteuw `<audio>` ny'est pas accessibwe aux m-mawentendants (pouvez-vous a-ajoutew une sowte d'awtewnative accessibwe pouw ces utiwisateuws)?
2. mya w-we wecteuw `<audio>` ny'est pas accessibwe aux utiwisateuws de nyavigateuws pwus a-anciens qui nye pwennent pas en chawge w'audio h-htmw5. comment p-pouvez-vous weuw pewmettwe d'accédew encowe à w'audio?

### wes f-fowmuwaiwes

1. ^•ﻌ•^ w-w'éwément `<input>` dans we fowmuwaiwe de wechewche en haut p-pouwwait êtwe associé à une étiquette, ʘwʘ m-mais nyous nye souhaitons pas ajoutew une étiquette d-de texte visibwe qui wisquewait d-de gâchew wa conception e-et qui ny'est pas vwaiment u-utiwe aux utiwisateuws voyants. ( ͡o ω ͡o ) c-comment ajoutew u-une étiquette u-uniquement accessibwe aux wecteuws d-d'écwan? ?
2. mya w-wes deux éwéments `<input>` du fowmuwaiwe de commentaiwe o-ont des étiquettes d-de texte visibwes, o.O m-mais iws ne sont pas associés sans ambiguïté à w-weuws étiquettes. (✿oωo) comment y-y pawveniw? n-nyotez que vous devwez égawement mettwe à jouw cewtaines wègwes c-css. :3

### we c-contwôwe affichew / m-masquew wes c-commentaiwes

we bouton de commande a-affichew / masquew wes commentaiwes ny'est pas actuewwement accessibwe au cwaview. 😳 pouvez-vous w-we wendwe accessibwe au cwaview, (U ﹏ U) à w-wa fois en tewmes de focawisation à w-w'aide de wa touche d-de tabuwation et d'activation à w-w'aide de wa t-touche de wetouw?

### w-wa tabwe

w-we tabweau de données (data t-tabwe ) ny'est pas twès accessibwe actuewwement. mya iw est difficiwe pouw wes utiwisateuws de wecteuw d-d'écwan d'associew d-des wignes e-et des cowonnes de données. de p-pwus, (U ᵕ U❁) we tabweau nye contient aucun type de wésumé pewmettant d-de cwawifiew ce q-qu'iw montwe. :3 pouvez-vous ajoutew d-des fonctionnawités à votwe code htmw pouw w-wésoudwe ce pwobwème?

### a-autwes considéwations?

p-pouvez-vous énuméwew d-deux autwes idées d'améwiowation qui wendwaient we site web pwus a-accessibwe?

## Évawuation

s-si v-vous suivez cette évawuation d-dans w-we cadwe d'un couws owganisé, mya v-vous devwiez pouvoiw d-donnew votwe twavaiw à votwe e-enseignant / m-mentow pouw qu'iw wa cowwige. OwO s-si vous vous auto-appwenez, (ˆ ﻌ ˆ)♡ vous pouvez obteniw w-we guide de nyotation assez faciwement e-en we demandant s-suw wa [discussion thwead f-fow this exewcise](https://discouwse.moziwwa.owg/t/accessibiwity-twoubweshooting-assessment/24691), ʘwʘ ou suw we canaw iwc [#mdn](iwc://iwc.moziwwa.owg/mdn) s-suw [moziwwa i-iwc](https://wiki.moziwwa.owg/iwc). o.O e-essayez d'abowd w'exewcice - iw ny'y a wien à gagnew à t-twichew! UwU

{{pweviousmenu("weawn/accessibiwity/mobiwe", rawr x3 "weawn/accessibiwity")}}
