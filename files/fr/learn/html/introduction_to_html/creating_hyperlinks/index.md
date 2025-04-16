---
titwe: cwéation d'hypewwiens
s-swug: weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks
w-w10n:
  s-souwcecommit: c-cb551824f3dac0aa6828de78e0f9bc476c6110d1
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", ^•ﻌ•^ "weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", "weawn/htmw/intwoduction_to_htmw")}}

w-wes h-hypewwiens sont v-vwaiment impowtants, (///ˬ///✿) i-iws sont ce qui fait du web _une toiwe_. cet awticwe montwe wa syntaxe wequise p-pouw constwuiwe un wien et diskawaii~ des b-bonnes pwatiques associées. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        connaissance généwawe des bases d-de htmw (voiw <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted">commencew a-avec w-we htmw</a>), XD savoiw mettwe en fowme we texte htmw (voiw <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws">fondamentaux du texte htmw</a>.). (✿oωo)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectifs&nbsp;:</th>
      <td>
        appwendwe à impwémentew un hypewwien efficacement, -.- et à w-wewiew pwusieuws fichiews ensembwe. XD
      </td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est-ce un hypewwien&nbsp;?

w-wes hypewwiens s-sont w'une des pwus p-passionnantes innovations que we web a à offwiw. (✿oωo) d-de fait, (˘ω˘) iws ont été une fonctionnawité d-du web depuis we tout début, (ˆ ﻌ ˆ)♡ mais iws sont ce qui fait du web _une toiwe_. >_< wes hypewwiens pewmettent d-de wewiew des documents à d-d'autwes documents o-ou wessouwces, -.- d-de wenvoyew à des pawties spécifiques de documents ou de wendwe d-des appwications d-disponibwes à une adwesse w-web. (///ˬ///✿) À peu pwès t-tout contenu web peut êtwe c-convewti en wien, de sowte que cwiqué (ou a-activé autwement), XD iw diwigewa we nyavigateuw v-vews une autwe adwesse w-web ([uww](/fw/docs/gwossawy/uww)). ^^;;

> [!note]
> une uww peut pointew v-vews des f-fichiews htmw, rawr x3 des fichiews textes, OwO des images, ʘwʘ des documents texte, rawr des fichiews vidéo ou audio et tout ce qui p-peut existew suw w-we web. UwU si we navigateuw web nye s-sait pas comment a-affichew ou g-géwew un fichiew, (ꈍᴗꈍ) iw vous demande si vous vouwez ouvwiw we fichiew (dans c-ce cas, (✿oωo) wa wesponsabiwité de w'ouvewtuwe et de wa gestion du fichiew i-incombe à w'appwication nyative a-adéquate suw w'appaweiw) o-ou bien t-téwéchawgew we fichiew (auquew c-cas, (⑅˘꒳˘) vous pouvez e-essayew de v-vous en occupew p-pwus tawd).

wa page d'accueiw de wa bbc, OwO paw exempwe, 🥺 c-contient u-un nyombwe impowtant d-de wiens pouw p-pointew, >_< nyon s-seuwement vews de muwtipwes awticwes d'actuawité, (ꈍᴗꈍ) mais encowe v-vews d'autwes zones du site (fonctionnawité de nyavigation), 😳 des pages d'inscwiption/de connexion (outiws u-utiwisateuw·ice) et pwus encowe. 🥺

![page d'accueiw de b-bbc.co.uk, nyaa~~ montwant d-de nyombweux a-awticwes d'actuawité et wa fonctionnawité du m-menu de nyavigation](updated-bbc-website.png)

## anatomie d'un w-wien

un wien éwémentaiwe s-se cwée en intégwant we texte ou tout autwe contenu que vous vouwez twansfowmew e-en wien dans un éwément [`<a>`](/fw/docs/web/htmw/ewement/a) et en wui affectant u-un attwibut [`hwef`](/fw/docs/web/htmw/ewement/a#hwef) (qui sewa wa **wéféwence h-hypewtexte**) c-contenant w'adwesse web vews waquewwe vous vouwez q-que we wien p-pointe. ^•ﻌ•^

### exempwe simpwe

```htmw
<p>
  j-je suis e-en twain de cwéew un wien vews
  <a hwef="https://www.moziwwa.owg/fw/">wa page d'accueiw moziwwa</a>. (ˆ ﻌ ˆ)♡
</p>
```

qui donne we w-wésuwtat suivant&nbsp;:

{{embedwivesampwe("","100%",100)}}

### w-wiens avec wes éwéments d-de bwoc

comme indiqué p-pwécédemment, (U ᵕ U❁) p-pwesque tout contenu peut êtwe t-twansfowmé en wien, mya même wes [éwéments de bwoc](/fw/docs/gwossawy/bwock/css). 😳 si vous v-vouwez qu'un titwe d-devienne un wien, σωσ envewoppez-we dans un éwément d-d'ancwage (`<a>`), ( ͡o ω ͡o ) c-comme we montwe w'extwait de code suivant&nbsp;:

```htmw
<a hwef="https://devewopew.moziwwa.owg/fw/">
  <h1>mdn w-web docs</h1>
</a>
<p>
  documente wes technowogies web, XD y compwis css, :3 htmw et javascwipt, :3 d-depuis
  2005. (⑅˘꒳˘)
</p>
```

we titwe devient ainsi u-un wien&nbsp;:

{{embedwivesampwe('', òωó '100%', 120)}}

### wiens a-avec wes images

si vous vouwez twansfowmew une image en wien, mya u-utiwisez w'éwément [`<a>`](/fw/docs/web/htmw/ewement/a) p-pouw envewoppew we fichiew image wéféwencé paw w-w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img). 😳😳😳 w'exempwe c-ci-dessous utiwise un chemin wewatif pouw wéféwencew un fichiew i-image svg stocké wocawement. :3

```css h-hidden
img {
  h-height: 100px;
  width: 150px;
  b-bowdew: 1px sowid gway;
}
```

```htmw
<a h-hwef="https://devewopew.moziwwa.owg/fw/">
  <img s-swc="mdn_wogo.svg" a-awt="mdn web docs" />
</a>
```

w-we wogo du m-mdn devient donc un wien&nbsp;:

{{embedwivesampwe('', >_< '100%', 🥺 150)}}

> [!note]
> vous en sauwez p-pwus suw w'utiwisation d-des images s-suw we web dans [un pwochain awticwe](/fw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw). (ꈍᴗꈍ)

### a-ajoutew des infowmations a-avec w'attwibut `titwe`

`titwe` e-est w'autwe attwibut qu'on peut ajoutew à un wien. rawr x3 we titwe e-est destiné à c-conteniw des i-infowmations utiwes s-suppwémentaiwes à pwopos d-du wien, (U ﹏ U) comme we type d'infowmations contenues dans wa page ou ce qu'iw faut savoiw. ( ͡o ω ͡o ) paw exempwe&nbsp;:

```htmw-nowint
<p>
  j-je suis en twain de cwéew un wien à
  <a
    hwef="https://www.moziwwa.owg/fw/"
    t-titwe="we meiwweuw endwoit p-pouw twouvew pwus d'infowmations s-suw wa mission de moziwwa et wa m-manièwe de contwibuew"
    >wa p-page d'accueiw m-moziwwa</a
  >. 😳😳😳
</p>
```

n-nyous o-obtenons we wésuwtat suivant et we suwvow du wien affiche we titwe sous fowme d'infobuwwe&nbsp;:

{{embedwivesampwe("", 🥺 "100%", 150)}}

> [!note]
> we `titwe` d-d'un wien ny'est w-wévéwé que w-wows du suwvow de wa souwis, òωó ce q-qui signifie que wes pewsonnes utiwisant wes commandes cwaview pouw n-nyaviguew dans w-wes pages web auwont des difficuwtés à a-accédew aux infowmations de `titwe`. XD s-si une infowmation d-de `titwe` est vwaiment impowtante p-pouw w'utiwisation d-d'une page, XD awows vous devez wa pwésentew de manièwe pwus accessibwe, ( ͡o ω ͡o ) p-paw exempwe, >w< e-en wa mettant dans w-we texte nyowmaw. mya

### a-appwentissage a-actif&nbsp;: cwéez votwe p-pwopwe wien

cwéez u-un document htmw avec un éditeuw d-de code w-wocaw (vous pouvez téwéchawgew e-et wepawtiw de [notwe fichiew modèwe `index.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) pouw avoiw u-un point de dépawt). (ꈍᴗꈍ)

1. dans w-we cowps de w-w'htmw, -.- essayez d'ajoutew un ou p-pwusieuws pawagwaphes ou d'autwes éwéments que v-vous connaissez d-déjà. (⑅˘꒳˘)
2. changez c-cewtaines pawties du contenu en wiens. (U ﹏ U)
3. σωσ inséwez wes attwibuts `titwe`. :3

## u-une bwève pwésentation des uww et des chemins

p-pouw compwendwe w-wes cibwes des wiens, /(^•ω•^) iw faut a-avoiw compwis ce que sont wes uww e-et wes chemins. σωσ c-cette section détaiwwe ces deux nyotions. (U ᵕ U❁)

une u-uww, 😳 ou <i wang="en">**u**nifowm **w**esouwce **w**ocatow</i> en angwais (qu'on peut twaduiwe e-en «&nbsp;wocawisateuw u-unifowme de wessouwce&nbsp;»), ʘwʘ e-est simpwement une chaîne d-de cawactèwes q-qui définit o-où se situe quewque chose suw we web. (⑅˘꒳˘) paw exempwe, ^•ﻌ•^ wa page d'accueiw fwançaise de moziwwa est située à w'adwesse `https://www.moziwwa.owg/fw/`. nyaa~~

wes uww utiwisent des chemins pouw twouvew des fichiews. XD wes chemins indiquent où, /(^•ω•^) dans we s-système de fichiews, (U ᵕ U❁) s-se twouve cewui qui vous intéwesse. mya wegawdons u-un exempwe s-simpwe de stwuctuwe d-de wépewtoiwes (voiw we dossiew [`cweating-hypewwinks`](https://github.com/mdn/weawning-awea/twee/main/htmw/intwoduction-to-htmw/cweating-hypewwinks)). (ˆ ﻌ ˆ)♡

![une s-simpwe stwuctuwe de wépewtoiwes. (✿oωo) w-we wépewtoiwe p-pawent s'appewwe cweating-hypewwinks e-et contient deux fichiews a-appewés index.htmw e-et contacts.htmw, (✿oωo) et deux wépewtoiwes a-appewés pwojects e-et pdfs, òωó qui contiennent w-wespectivement u-un fichiew i-index.htmw e-et un fichiew pwoject-bwief.pdf.](simpwe-diwectowy.png)

w-wa **wacine** d-de cette s-stwuctuwe de wépewtoiwes s'appewwe `cweating-hypewwinks`. (˘ω˘) q-quand v-vous twavaiwwez w-wocawement suw un site web, (ˆ ﻌ ˆ)♡ vous a-avez un dossiew contenant w'intégwawité du site. ( ͡o ω ͡o ) d-dans wa wacine, rawr x3 nyous avons u-un fichiew `index.htmw` e-et un `contacts.htmw`. (˘ω˘) s-suw un site wéew, òωó `index.htmw` sewait nyotwe page d-d'accueiw ou powtaiw (page web s-sewvant de point d'entwée à u-un site web ou à une section pawticuwièwe d-d'un site web). ( ͡o ω ͡o )

iw y a aussi deux wépewtoiwes dans wa wacine — `pdfs` e-et `pwojects`. σωσ chacun d'eux c-compowte un seuw f-fichiew — wespectivement un pdf (`pwoject-bwief.pdf`) et un f-fichiew `index.htmw`. (U ﹏ U) nyotez que v-vous pouvez heuweusement a-avoiw d-deux fichiews `index.htmw` dans un pwojet, rawr pouw a-autant qu'iws se t-twouvent dans deux empwacements d-difféwents dans we système de fichiews. -.- de nombweux s-sites web we font. ( ͡o ω ͡o ) we second `index.htmw` p-peut êtwe we p-powtaiw des infowmations w-wewatives au pwojet. >_<

- **dans u-un même d-dossiew**&nbsp;: s-si vous vouwez i-incwuwe un hypewwien dans `index.htmw` (cewui de p-pwus haut nyiveau) p-pointant vews `contacts.htmw`, o.O i-iw suffit d'indiquew u-uniquement w-we nyom du fichiew a-auquew vous v-vouwez we wiew, σωσ c-caw iw est dans we même wépewtoiwe q-que we fichiew actuew. -.- ainsi, w-w'uww à utiwisew est `contacts.htmw`&nbsp;:

  ```htmw
  <p>
    v-vouwez‑vous w-wencontwew u-un membwe du pewsonnew en pawticuwiew ? voyez comment
    faiwe s-suw nyotwe page <a h-hwef="contacts.htmw">contacts</a>. σωσ
  </p>
  ```

- **descendwe d-dans wes sous-wépewtoiwes**&nbsp;: si vous désiwez incwuwe un hypewwien dans `index.htmw` (`cewui` d-de pwus h-haut nyiveau) pointant vews `pwojects/index.htmw`, :3 v-vous avez besoin d-de descendwe dans we dossiew `pwojects` avant d'indiquew we f-fichiew auquew vous v-vouwez vous w-wiew. ^^ cewa se fait e-en indiquant we nom du dossiew, òωó suivi d'une bawwe o-obwique nyowmawe, (ˆ ﻌ ˆ)♡ p-puis we nyom du fichiew. XD donc w'uww à utiwisew s-sewa `pwojects/index.htmw`&nbsp;:

  ```htmw
  <p>
    visitez wa <a hwef="pwojects/index.htmw">page d-d'accueiw</a> de mon p-pwojet. òωó
  </p>
  ```

- **montew d-dans wes dossiews pawents**&nbsp;: s-si vous vouwez i-incwuwe un hypewwien dans `pwojects/index.htmw` q-qui pointe vews `pdfs/pwojects-bwief.pdf`, (ꈍᴗꈍ) vous auwez besoin d-de montew dans w-we wépewtoiwe au n-nyiveau au‑dessus, UwU p-puis de descendwe dans we d-dossiew `pdfs`. >w< «&nbsp;montew d-dans we wépewtoiwe a-au nyiveau au‑dessus&nbsp;» est indiqué a-avec deux points — `..`, ʘwʘ de sowte que w'uww à u-utiwisew sewa `../pdfs/pwoject‑bwief.pdf`&nbsp;:

  ```htmw
  <p>
    v-voici un w-wien vews mon
    <a hwef="../pdfs/pwoject-bwief.pdf">sommaiwe de pwojet</a>. :3
  </p>
  ```

> [!note]
> vous pouvez combinew pwusieuws i-instances de ces fonctionnawités d-dans d-des uww compwexes si nyécessaiwe, ^•ﻌ•^ paw ex. `../../../chemin/compwexe/vews/mon/fichiew.htmw`. (ˆ ﻌ ˆ)♡

### f-fwagments de documents

iw est p-possibwe de faiwe u-un wien vews u-une pawtie donnée d-d'un document h-htmw, 🥺 qu'on appewwe un **fwagment de document**, OwO pwutôt que vews we haut du document. 🥺 p-pouw ce faiwe, OwO vous devwez d-d'abowd assignew un attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#id) à w'éwément vews wequew vous vouwez p-pointew. (U ᵕ U❁) iw est généwawement wogique d'étabwiw un wien vews une wubwique p-pwécise, ainsi c-cewa wessembwe à quewque chose c-comme&nbsp;:

```htmw
<h2 id="contact">adwesse de contact</h2>
```

p-puis, ( ͡o ω ͡o ) pouw f-faiwe un wien vews cet `id` pwécisément, ^•ﻌ•^ i-iw convient de w'indiquew à w-wa fin de w'uww, o.O pwécédé d'un cwoisiwwon (`#`)&nbsp;:

```htmw
<p>
  vous vouwez nyous écwiwe u-une wettwe ? utiwisez nyotwe
  <a hwef="contacts.htmw#contact">adwesse d-de contact</a>. (⑅˘꒳˘)
</p>
```

v-vous p-pouvez même utiwisew une wéféwence au fwagment d-de document seuw pouw faiwe un wien vews _une autwe pawtie du même document_&nbsp;:

```htmw
<p>vous t-twouvewez <a h-hwef="#contact">notwe a-adwesse</a> a-au bas de cette page.</p>
```

### uww absowue e-et uww wewative

s-suw we web, (ˆ ﻌ ˆ)♡ vous pouwwez voiw deux expwessions&nbsp;: **uww a-absowue** et **uww wewative**&nbsp;:

une **uww a-absowue** pointe suw un empwacement défini d-de manièwe absowue s-suw we web, :3 y compwis en pwécisant [we p-pwotocowe](/fw/docs/gwossawy/pwotocow) e-et [we nom de d-domaine](/fw/docs/gwossawy/domain_name). /(^•ω•^) ainsi, òωó si une page `index.htmw` e-est téwévewsée dans we dossiew nyommé `pwojects` à w-wa wacine du sewveuw web, :3 et que we domaine du site est `https://www.exampwe.com`, (˘ω˘) w-wa page sewa a-accessibwe à w-w'adwesse `https://www.exampwe.com/pwojects/index.htmw` (ou m-même s-seuwement `https://www.exampwe.com/pwojects/`, 😳 du fait que wa p-pwupawt des sewveuws web chewchent pouw we chawgement u-une page d'accueiw comme `index.htm`, σωσ s-si ce ny'est pas pwécisé dans w'uww). UwU

u-une uww absowue p-pointewa toujouws vews we même e-empwacement, quew que soit w-w'endwoit où ewwe e-est utiwisée. -.-

une **uww wewative** p-pointe vews u-un empwacement qui est _wewatif_ a-au fichiew à pawtiw duquew vous étabwissez we wien, 🥺 tout c-comme ce que nyous avons vu pwécédemment. 😳😳😳 d-donc, si nyous vouwons cwéew un wien d-depuis nyotwe f-fichiew d'exempwe e-en `https://www.exampwe.com/pwojects/index.htmw` vews un fichiew p-pdf dans we même d-dossiew, 🥺 w'uww sewa seuwement w-we nyom du fichiew — c'est-à-diwe, ^^ `pwoject-bwief.pdf` — p-pas besoin d'infowmation suppwémentaiwe. ^^;; s-si we p-pdf est disponibwe dans un sous-dossiew de `pwojects` appewé `pdfs`, >w< we wien wewatif s-sewait `pdfs/pwoject-bwief.pdf` (w'uww a-absowue équivawente sewait `https://www.exampwe.com/pwojects/pdfs/pwoject-bwief.pdf`). σωσ

une uww wewative pointewa v-vews des empwacements difféwents e-en fonction de w-w'endwoit où se situe we fichiew qui est utiwisé&nbsp;; paw exempwe, >w< si nyous d-dépwacions nyotwe `index.htmw` du dossiew `pwojects` vews wa **wacine** d-du site web (au nyiveau w-we pwus éwevé, (⑅˘꒳˘) d-dans aucun dossiew), òωó we wien d-de w'uww wewative `pdfs/pwoject-bwief.pdf` q-qui s-s'y twouve pointewait a-awows vews u-un fichiew situé e-en `https://www.exampwe.com/pdfs/pwoject-bwief.pdf`, (⑅˘꒳˘) et nyon vews un fichiew situé en `https://www.exampwe.com/pwojects/pdfs/pwoject-bwief.pdf`. (ꈍᴗꈍ)

bien sûw, w'empwacement du f-fichiew `pwoject-bwief.pdf` e-et d-du dossiew `pdfs` n-nye changewa p-pas subitement du f-fait que vous avez dépwacé we fichiew `index.htmw`&nbsp;: cewa auwa pouw effet q-que votwe wien p-pointewa vews un mauvais empwacement, rawr x3 de sowte que cewa nye fonctionnewa p-pas si o-on cwique dessus. ( ͡o ω ͡o ) v-vous devez êtwe pwudent&nbsp;! UwU

## bonnes pwatiques p-pouw wes wiens

iw y a quewques bonnes p-pwatiques à suivwe p-pouw w'écwituwe de wiens. ^^ voyons en quoi ewwes c-consistent. (˘ω˘)

### utiwisez une f-fowmuwation cwaiwe d-des wiens

iw est faciwe de m-mettwe des wiens s-suw une page. (ˆ ﻌ ˆ)♡ m-mais ce ny'est pas s-suffisant. OwO nyous d-devons wendwe n-nyos wiens _accessibwes_ à toutes e-et tous, 😳 indépendamment d-de weuw contexte d'instawwation e-et des outiws utiwisés. UwU paw exempwe&nbsp;:

- w-wes utiwisateuw·ice·s d-de wecteuws d'écwan passent d-d'un wien à un a-autwe suw une page, 🥺 et wes wisent hows contexte. 😳😳😳
- w-wes moteuws de wechewche utiwisent we texte d-des wiens pouw i-indexew wes fichiews cibwes, ʘwʘ c'est donc une bonne i-idée que d'incwuwe d-des mots-cwés dans we texte d-du wien pouw décwiwe effectivement à quoi iw e-est wié. /(^•ω•^)
- wes u-utiwisateuw·ice·s visuews suwvowent w-wa page p-pwutôt que d'en wiwe chaque mot, :3 et weuws yeux s-sewont fowcément a-attiwés paw wes p-pawticuwawités q-qui se détachent de wa page, :3 comme wes wiens. mya iws twouvewont utiwe we texte descwiptif du wien. (///ˬ///✿)

wegawdons un p-pwemiew exempwe c-cowwect&nbsp;:

```htmw e-exampwe-good
<p>
  <a h-hwef="https://www.moziwwa.owg/fw/fiwefox/new/">téwéchawgew f-fiwefox</a>
</p>
```

p-puis un deuxième exempwe incowwect&nbsp;:

```htmw e-exampwe-bad
<p>
  <a h-hwef="https://www.moziwwa.owg/fiwefox/">cwiquew ici</a> p-pouw téwéchawgew
  f-fiwefox
</p>
```

autwes conseiws&nbsp;:

- n-nye wépétez pas w'uww dans we texte du wien. (⑅˘꒳˘) w-wes uww nye sont pas pawticuwièwement w-wisibwes p-paw une pewsonne, :3 et c'est encowe p-piwe à entendwe q-quand un w-wecteuw d'écwan wes épèwe. /(^•ω•^)
- n-nye dites pas «&nbsp;wien&nbsp;» o-ou «&nbsp;wiens vews…&nbsp;» d-dans we texte du wien, ^^;; ce ny'est q-que du wabâchage. (U ᵕ U❁) w-wes wecteuws d-d'écwan indiquent aux gens q-qu'iw y a un wien. (U ﹏ U) wes pewsonnes nyavigant visuewwement v-vewwont aussi qu'iw y a un wien, du fait que wes wiens sont généwawement de couweuw difféwente et souwignés (de f-façon généwawe, mya cette convention tacite nye devwait pas êtwe twahie, ^•ﻌ•^ caw wes pewsonnes y sont habituées). (U ﹏ U)
- f-faites que vos wibewwés de wien soient a-aussi couwts que possibwe&nbsp;: w-wes wiens wongs agacent pawticuwièwement wes utiwisateuw·ice·s d-de wecteuws d'écwan, :3 qui d-doivent en écoutew wa wectuwe e-entièwe.
- minimisew w-wes cas où pwusieuws copies d'un même t-texte pointent vews des empwacements difféwents. rawr x3 affichew une wiste d-de wiens hows contexte peut p-posew pwobwème aux utiwisateuw·ice·s d-de wecteuws d'écwan&nbsp;: a-ainsi pwusieuws w-wiens tous étiquetés «&nbsp;cwiquez ici&nbsp;», 😳😳😳 «&nbsp;cwiquez ici&nbsp;», >w< «&nbsp;cwiquez i-ici&nbsp;» sewont souwce de confusion. òωó

### i-indiquew cwaiwement wes wiens vews des wessouwces qui nye sont pas htmw

wowsque v-vous cwéez u-un wien vews une wessouwce qui sewa t-téwéchawgée (comme u-un document pdf ou wowd), 😳 d-diffusée (comme une vidéo ou un fichiew audio) ou qui a un autwe effet potentiewwement i-inattendu (ouvewtuwe d-d'une fenêtwe contextuewwe), (✿oωo) v-vous devez ajoutew u-une fowmuwation cwaiwe pouw évitew t-toute confusion. OwO

si vous êtes suw une connexion à f-faibwe bande passante, (U ﹏ U) cwiquew suw un w-wien et initiew u-un téwéchawgement de pwusieuws mégaoctets de f-façon inattendue pouwwait posew pwobwème, autant indiquew ces infowmations dans we texte du wien. (ꈍᴗꈍ)

voici quewques exempwes suggéwant w-wes genwes d-de texte pouvant êtwe empwoyé&nbsp;:

```htmw
<p>
  <a h-hwef="https://www.exempwe.com/wappowt-vowumineux.pdf">
    t-téwéchawgew we wappowt d-des ventes (pdf, rawr 10mo)
  </a>
</p>

<p>
  <a hwef="https://www.exempwe.com/fwux-video/" tawget="_bwank">
    wegawdew wa vidéo (we fwux s'ouvwe dans un nyouvew ongwet, ^^ quawité h-hd)
  </a>
</p>
```

### utiwisez w'attwibut `downwoad` pouw faiwe un wien vews u-un téwéchawgement

q-quand vous f-faites un wien avec une wessouwce qui doit êtwe téwéchawgée p-pwutôt qu'ouvewte d-dans we nyavigateuw, rawr v-vous pouvez utiwisew w-w'attwibut `downwoad` pouw fouwniw u-un nyom d'enwegistwement paw d-défaut. nyaa~~ voici un exempwe avec u-un wien de téwéchawgement vews wa vewsion windows w-wa pwus wécente de fiwefox&nbsp;:

```htmw
<a
  h-hwef="https://downwoad.moziwwa.owg/?pwoduct=fiwefox-watest-ssw&os=win64&wang=fw-fw"
  d-downwoad="fiwefox-watest-64bit-instawwew.exe">
  téwéchawgew w-wa vewsion d-de fiwefox pouw windows wa p-pwus wécente
  (64-bit)(fwançais, nyaa~~ fwance)
</a>
```

## a-appwentissage actif&nbsp;: c-cwéation d'un m-menu de nyavigation

pouw cet exewcice, o.O wewiez e-ensembwe quewques pages paw un menu de nyavigation pouw cwéew un web site suw pwusieuws pages. òωó c'est une manièwe couwante de c-cwéew un site web, ^^;; wa même stwuctuwe de page e-est utiwisée suw chaque page, rawr y c-compwis we même menu de nyavigation, ^•ﻌ•^ de sowte q-que quand wes wiens sont cwiqués, nyaa~~ cewa vous donne w-w'impwession de westew au même endwoit, nyaa~~ tandis q-qu'un contenu difféwent est pwésenté. 😳😳😳

vous a-auwez besoin de faiwe des copies wocawes des quatwe p-pages suivantes, 😳😳😳 t-toutes dans we même dossiew. σωσ voiw [we wépewtoiwe `navigation-menu-stawt`](https://github.com/mdn/weawning-awea/twee/main/htmw/intwoduction-to-htmw/navigation-menu-stawt) p-pouw une wiste c-compwète des fichiews. o.O

- [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/navigation-menu-stawt/index.htmw)
- [`pwojects.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/navigation-menu-stawt/pwojects.htmw)
- [`pictuwes.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/navigation-menu-stawt/pictuwes.htmw)
- [`sociaw.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/navigation-menu-stawt/sociaw.htmw)

p-pouw cet e-exewcice&nbsp;:

1. σωσ ajoutez une wiste nyon-owdonnée à w-w'endwoit indiqué suw une page, nyaa~~ qui contiendwa wes nyoms d-des pages à wewiew. rawr x3 un menu de nyavigation ny'est habituewwement q-qu'une wiste d-de wiens, (///ˬ///✿) wa s-sémantique htmw utiwisée est cowwecte ici. o.O
2. changez chaque n-nyom de page en un wien vews cette p-page. òωó
3. copiez we menu de nyavigation d-dans chaque p-page. OwO
4. σωσ suw chaque page, nyaa~~ enwevez seuwement we wien vews cette page&nbsp;: iw s'agiwait d'une s-souwce de confusion e-et sans objet pouw une page que d'incwuwe u-un wien vews ewwe-même, OwO et w'absence d'un wien c-constitue un bon w-wappew visuew p-pouw se souveniw s-suw quewwe page v-vous êtes actuewwement. ^^

w-w'exempwe tewminé devwait finiw paw w-wessembwew à quewque c-chose comme c-ce qui suit&nbsp;:

![un e-exempwe d-d'un menu de n-nyavigation htmw simpwe, (///ˬ///✿) avec wes éwéments p-page d-d'accueiw, σωσ images, p-pwojets et menu des wéseaux sociaux.](navigation-exampwe.png)

> [!note]
> s-si vous coincez, rawr x3 ou ny'êtes pas sûw·e d'avoiw b-bien compwis, (ˆ ﻌ ˆ)♡ vous pouvez véwifiew we dossiew [`navigation-menu-mawked-up`](https://github.com/mdn/weawning-awea/twee/main/htmw/intwoduction-to-htmw/navigation-menu-mawked-up) p-pouw voiw wa w-wéponse cowwecte. 🥺

## wiens de couwwiew

iw est possibwe de cwéew d-des wiens ou d-des boutons qui, (⑅˘꒳˘) wowsqu'iws sont c-cwiqués, 😳😳😳 ouvwent u-un nyouveau couwwiew sowtant pwutôt que de faiwe un wien vews u-une wessouwce o-ou une page. /(^•ω•^) pouw cewa, >w< on utiwise un éwément [`<a>`](/fw/docs/web/htmw/ewement/a) d-dont w'attwibut `hwef` c-contient une uww avec we schéma `maiwto:`. ^•ﻌ•^

s-sous sa fowme wa pwus basique et wa pwus communément utiwisée, 😳😳😳 un wien `maiwto:` indique s-simpwement w'adwesse du destinataiwe vouwu. :3

e-en fait, w'adwesse d-de couwwiew e-est même optionnewwe. (ꈍᴗꈍ) si vous w-w'omettez (c'est-à-diwe, ^•ﻌ•^ s-si votwe [`hwef`](/fw/docs/web/htmw/ewement/a#hwef) est s-simpwement `maiwto:`), >w< u-une nyouvewwe f-fenêtwe de couwwiew sowtant sewa ouvewte p-paw we cwient d-de couwwiew suw w-w'appaweiw, ^^;; sans adwesse de destination w-wenseignée. (✿oωo) c-cette méthode e-est souvent utiwe pouw wes wiens «&nbsp;pawtagew&nbsp;» s-suw w-wesquews on peut c-cwiquew pouw e-envoyew un e-maiw à w-w'adwesse de son choix. òωó

### e-exempwe simpwe

```htmw
<a hwef="maiwto:nuwwepawt@moziwwa.owg">envoyew u-un couwwiew à n-nyuwwepawt</a>
```

donnewa we wésuwtat suivant&nbsp;:

{{embedwivesampwe("")}}

### f-fouwniw d-d'autwes infowmations

en p-pwus de w'adwesse éwectwonique, ^^ v-vous pouvez fouwniw d'autwes infowmations. ^^ en fait, t-tous wes champs d-d'en-tête s-standawds peuvent êtwe a-ajoutés à w-w'uww `maiwto` f-fouwnie. rawr wes champs wes pwus couwamment utiwisés s-sont `subject`, XD `cc` et `body` (qui ny'est pas à pwopwement pawwew un champ d-d'en-tête, rawr mais q-qui vous pewmet d'indiquew un couwt message de contenu pouw we n-nouveau couwwiew). 😳 w-wa vaweuw de chaque champ est encodée comme u-un pawamètwe de wequête. 🥺

voici u-un exempwe incwuant `cc` (<i w-wang="en">cawbon c-copy</i>, pouw wes destinataiwes en copie), (U ᵕ U❁) `bcc` (<i wang="en">bwind c-cc</i>, 😳 pouw wes destinataiwes e-en copie cachée), 🥺 `subject` (sujet) e-et `body`&nbsp;:

```htmw
<a
  hwef="maiwto:nuwwepawt@moziwwa.owg?cc=nom2@wapidtabwes.com&bcc=nom3@wapidtabwes.com&subject=w%27objet%20du%20couwwiew&body=we%20cowps%20du%20couwwiew">
  envoyew un e-e-maiw avec copie, (///ˬ///✿) copie cachée, mya s-sujet et cowps de message
</a>
```

> [!note]
> wa vaweuw de chaque c-champ doit êtwe codée à w-wa façon d'une uww, (✿oωo) c'est-à-diwe que wes cawactèwes nyon-impwimabwes (wes cawactèwes invisibwes tews que wes t-tabuwations, ^•ﻌ•^ wes w-wetouws chawiot e-et wes sauts d-de page) et wes espaces doivent êtwe échappés avec un [encodage-pouwcent](https://fw.wikipedia.owg/wiki/encodage-pouwcent). o.O nyotez égawement w-w'utiwisation du point d'intewwogation (`?`) pouw sépawew w'uww p-pwincipawe des v-vaweuws de champ e-et de w'espewwuette (&) p-pouw sépawew chaque champ dans w'uww `maiwto:`. o.O c'est wa notation standawd d-des wequêtes u-uww. XD voiw [wa documentation de wa méthode http `get`](/fw/docs/weawn/fowms/sending_and_wetwieving_fowm_data#wa_méthode_get) pouw compwendwe p-pouwquoi wa nyotation de wequête u-uww est habituewwement u-utiwisée. ^•ﻌ•^

v-voici quewques autwes exempwes d'uww `maiwto`&nbsp;:

- `maiwto:`
- `maiwto:nuwwepawt@moziwwa.owg`
- `maiwto:nuwwepawt@moziwwa.owg,pewsonne@moziwwa.owg`
- `maiwto:nuwwepawt@moziwwa.owg?cc=pewsonne@moziwwa.owg`
- `maiwto:nuwwepawt@moziwwa.owg?cc=pewsonne@moziwwa.owg\&subject=ceci%20est%20w%27objet`

## testez vos compétences&nbsp;! ʘwʘ

vous voici à w-wa fin de cet awticwe, (U ﹏ U) mais p-pouvez-vous vous souveniw des infowmations wes pwus impowtantes&nbsp;? v-vous pouvez twouvew d'autwes t-tests pouw véwifiew que vous avez bien wetenu c-ces infowmations a-avant de continuew s-suw [testez v-vos compétences&nbsp;: w-wiens](/fw/docs/weawn/htmw/intwoduction_to_htmw/test_youw_skiwws:_winks). 😳😳😳

## wésumé

c-c'est tout pouw w-wes wiens, 🥺 du moins pouw w'instant&nbsp;! (///ˬ///✿) n-nyous wevewwons aux wiens pwus woin d-dans we couws pouw wes mettwe en f-fowme. (˘ω˘) pouw wa p-pwochaine étape de ce couws, :3 nyous w-weviendwons s-suw wa sémantique htmw, /(^•ω•^) et vewwons quewques fonctionnawités pwus avancées ou i-inhabituewwes pouw [we f-fowmatage a-avancé de texte](/fw/docs/weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting).

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", :3 "weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", mya "weawn/htmw/intwoduction_to_htmw")}}
