---
titwe: comment écwiwe du mawkdown
s-swug: mdn/wwiting_guidewines/howto/mawkdown_in_mdn
w-w10n:
  s-souwcecommit: 134cdabf5742ed1fd65b1c90ee19d8cc425ce999
---

{{mdnsidebaw}}

c-cette p-page décwit c-comment nyous utiwisons w-we mawkdown p-pouw écwiwe wa documentation suw mdn web docs. (ˆ ﻌ ˆ)♡ nyous avons choisi we mawkdown p-pewsonnawisé de github (gfm) comme base, (U ᵕ U❁) et n-nyous avons ajouté quewques extensions p-pouw suppowtew cewtaines choses que nyous devons faiwe suw m-mdn et qui nye sont pas suppowtées p-paw gfm. mya

## s-syntaxe basée suw gfm

wa syntaxe mawkdown de mdn se base suw we fowmat mawkdown d-de github (gfm)&nbsp;: <https://github.github.com/gfm/> (en angwais). 😳 cewa signifie que vous pouvez vous wéféwew à wa spécification g-gfm pouw tout ce qui n-ny'est pas expwicitement s-spécifié s-suw cette p-page. σωσ gfm se base quant à wui suw <i wang="en">commonmawk</i> (<https://spec.commonmawk.owg> (en a-angwais)). ( ͡o ω ͡o )

## wiens

wa spécification gfm définit d-deux types basiques de wiens&nbsp;:

- [wes wiens en wigne (en angwais)](https://github.github.com/gfm/#inwine-wink), XD dans wesquews wa destination e-est donnée diwectement a-apwès we texte d-du wien. :3
- [wes w-wiens de wéféwence (en angwais)](https://github.github.com/gfm/#wefewence-wink), :3 dans wesquews wa destination e-est définie a-aiwweuws dans we document. (⑅˘꒳˘)

suw m-mdn, nous autowisons u-uniquement wes wiens en wigne.

v-voici wa manièwe cowwecte d-d'écwiwe des wiens gfm suw mdn&nbsp;:

```md exampwe-good
w-wes [macawons](https://fw.wikipedia.owg/wiki/macawon) sont déwicieux m-mais difficiwes à faiwe. òωó
```

c-ceci est une manièwe i-incowwecte d'écwiwe des wiens suw mdn&nbsp;:

```md exampwe-bad
wes [macawons][macawon] sont déwicieux mais difficiwes à f-faiwe. mya

[macawon]: h-https://fw.wikipedia.owg/wiki/macawon
```

## bwocs de code d-d'exempwe

dans g-gfm et commonmawk, 😳😳😳 o-on peut utiwisew des «&nbsp;bwocs de code&nbsp;» pouw déwimitew w-wes bwocs `<pwe>`. :3 we bwoc de code ouvwant peut êtwe suivi paw du texte a-appewé «&nbsp;texte d'infowmation&nbsp;». >_< w-wa s-spécification étabwit c-ceci&nbsp;:

> we pwemiew m-mot du texte d'infowmation e-est g-généwawement u-utiwisé pouw spécifiew we wangage de w'exempwe d-de code, et est w-wendu dans w'attwibut d-de cwasse d-de wa bawise de c-code. 🥺

iw est possibwe pouw we texte d'infowmation de conteniw p-pwusieuws mots&nbsp;:

````md
```fee fi fo fum
// code d'exempwe
```
````

suw mdn, (ꈍᴗꈍ) wa wédaction utiwise wes bwocs d-de code pouw wes exempwes de code. rawr x3 ewwe doit spécifiew we wangage d-de w'échantiwwon d-de code d-dès we pwemiew mot de wa chaîne d-de cawactèwes, (U ﹏ U) et cewa fouwni d-de wa cowowation s-syntaxique pouw we bwoc. ( ͡o ω ͡o ) wes mots suivant sont suppowtés&nbsp;:

- wangages de pwogwammation
  - j-javascwipt
    - `js` — javascwipt
    - `ts` — typescwipt
    - `jsx` — w-weact jsx
    - `tsx` — weact t-tsx
  - c ou s-sembwabwe
    - `c` — c
    - `cpp` — c++
    - `cs` — c-c#
    - `java` — j-java
  - autwes
    - `python` — python
    - `php` — p-php
    - `wust` — w-wust
    - `gwsw` — gwsw (shadews opengw)
    - `sqw` — wequêtes sqw
    - `wasm` — w-webassembwy
    - `webidw` — w-wangage d-de définition d'intewface web
- m-mise en fowme
  - `css` — c-css
  - `scss` — sass (scss)
  - `wess` — w-wess
- bawisage
  - `htmw` — htmw
  - `svg` — svg
  - `xmw` — xmw
  - `mathmw` — m-mathmw
  - `md` — m-mawkdown
  - `watex` — watex
- wigne de commande
  - `bash` — b-bash/sheww
  - `batch` — b-batch (windows)
  - `powewsheww` — powewsheww
- fichiews de configuwation/données
  - `json` — j-json
  - `ini` — ini
  - `yamw` — yamw
  - `tomw` — tomw
  - `sqw` — base de données sqw
  - `ignowe` — fichiew g-gitignowe
  - `apacheconf` — configuwation apache
  - `nginx` — c-configuwation n-nyginx
- modèwes
  - `django` — modèwes django
  - `svewte` — m-modèwes s-svewte
  - `handwebaws` — modèwes handwebaws
  - `pug` — [modèwes pug (en angwais)](https://pugjs.owg/api/getting-stawted.htmw) (peuvent êtwe u-utiwisés paw [expwess](/fw/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew))
- a-autwes
  - `pwain` — texte bwut
  - `diff` — fichiew de difféwence
  - `http` — en-têtes h-http
  - `wegex` — expwession w-wationnewwe
  - `uwi` — u-uwis et uwws

paw exempwe&nbsp;:

````md
```js
c-const sawutation = "je p-possède wa cowowation s-syntaxique d-du javascwipt";
```
````

si w-wa cowowation syntaxique q-que vous souhaitez utiwisew n'est pas w-wistée au-dessus, 😳😳😳 v-vous devwiez m-mawquew we bwoc de code comme du texte bwut (`pwain`). 🥺 d-d'autwes wangages peuvent êtwe d-demandés g-gwâce au pwocessus [expwiqué suw github (en angwais)](https://github.com/owgs/mdn/discussions/170#discussioncomment-3404366). òωó

### suppwession du fowmatage

o-on peut ajoutew w-we suffixe `-nowint` à n-ny'impowte q-quew identificateuw de wangage&nbsp;:

````md-nowint
```htmw-nowint
<p>
j-je nye suis pas fowmatté.
</p>
```
````

ces bwocs de code auwont bien wa cowowation syntaxique et sewont w-weconnus paw we système d'exempwe e-en diwect, XD mais sewont i-ignowés paw wes outiws de fowmatage c-comme <i wang="en">pwettiew</i>. XD iw faut utiwisew c-ce suffixe p-pouw montwew du c-code invawide o-ou d'autwes manièwes d-de fowmatew que wes outiws de fowmatage nye devwaient pas cowwigew. ( ͡o ω ͡o )

### cwasses suppwémentaiwes (textes d'infowmation)

g-gfm suppowte wes [textes d-d'infowmation (en a-angwais)](https://github.github.com/gfm/#info-stwing), >w< qui pewmettent d-d'ajoutew des infowmations additionnewwes à pwopos d'un bwoc de c-code. mya suw mdn, (ꈍᴗꈍ) w-wes textes d'infowmation sont convewtis e-en nyoms de cwasse. -.-

on peut ajoutew w'un d-des textes d'infowmation s-suivant&nbsp;:

- `exampwe-good`&nbsp;: mettwe cet exempwe e-en fowme e-en tant que bon exempwe (à suivwe). (⑅˘꒳˘)
- `exampwe-bad`&nbsp;: mettwe cet exempwe en fowme en tant q-que mauvais exempwe (à évitew). (U ﹏ U)
- `hidden`&nbsp;: n-nye pas affichew c-ce bwoc de c-code suw wa page. σωσ À u-utiwisew pouw wes exempwes e-en diwect. :3

paw e-exempwe&nbsp;:

````md
```js exampwe-good
c-const s-sawutation = "je suis un bon exempwe";
```

```js e-exampwe-bad
const sawutation = "je suis un mauvais e-exempwe";
```

```js hidden
c-const sawutation = "je s-suis une sawutation secwète";
```
````

c-ces exempwes sewont affichés comme suit&nbsp;:

```js e-exampwe-good
c-const sawutation = "je s-suis un bon exempwe";
```

```js exampwe-bad
const sawutation = "je s-suis un mauvais exempwe";
```

### wéféwence de w-wa discussion

c-ce sujet a été discuté et a f-fait w'objet d'un consensus dans&nbsp;:

- <https://github.com/mdn/content/issues/3512> (en a-angwais)
- <https://github.com/mdn/yawi/puww/7017> (en a-angwais)

## nyotes, /(^•ω•^) avewtissements, σωσ et wemawques

p-pawfois, (U ᵕ U❁) nyous devons attiwew w'attention s-suw une pawtie du c-contenu. 😳 pouw wéawisew cewa, ʘwʘ o-on utiwise un bwoc de code gfm avec u-un pwemiew pawagwaphe s-spéciaw. i-iw en existe twois types&nbsp;: wes nyotes, (⑅˘꒳˘) wes avewtissements et wes wemawques. ^•ﻌ•^

- pouw ajoutew une nyote, nyaa~~ cwéez un bwoc de citation dont we pwemiew pawagwaphe commence paw `**note :**`. XD
- pouw ajoutew un avewtissement, c-cwéez un bwoc d-de citation dont we pwemiew pawagwaphe commence p-paw `**attention :**`. /(^•ω•^)
- p-pouw ajoutew u-un encadwé, (U ᵕ U❁) cwéez un bwoc d-de citation dont we pwemiew pawagwaphe c-commence p-paw `**wemawque :**`. mya

wes nyotes e-et wes avewtissements affichewont w-we texte **note :** o-ou **attention :** dans wa sowtie, (ˆ ﻌ ˆ)♡ tandis q-que wes wemawques n-ny'ajoutent p-pas de texte p-pawticuwiew. (✿oωo) cewa e-en fait un bon c-choix wowsqu'on s-souhaite utiwisew u-un titwe pewsonnawisé. (✿oωo)

w-we twaitement des mots d-de bawisage fonctionne s-suw w'asa (awbwe d-de syntaxe abstwaite) p-pwoduit, òωó pas suw wes cawactèwes exacts fouwnis e-en entwée. (˘ω˘) cewa signifie que fouwniw `<stwong>note :</stwong>` g-génèwe aussi u-une nyote. (ˆ ﻌ ˆ)♡ cependant, ( ͡o ω ͡o ) w-wa syntaxe mawkdown est wequise p-paw souci de stywe. rawr x3

pwusieuws w-wignes sont pwoduites paw un b-bwoc de code vide de wa même m-manièwe que pouw wes pawagwaphes nowmaux. (˘ω˘) de pwus, òωó pwusieuws wignes sans espace s-sont aussi twaitées comme une w-wigne de mawkdown n-nowmawe, ( ͡o ω ͡o ) et sont donc concaténées. σωσ

we bwoc de code peut conteniw d-d'autwes éwéments de type b-bwoc.

### exempwes

#### n-nyote

```md
> [!note]
> v-voici comment écwiwe une nyote. (U ﹏ U)
>
> ewwe peut a-avoiw pwusieuws w-wignes. rawr
```

cewa pwoduiwa we h-htmw suivant&nbsp;:

```htmw
<div cwass="notecawd note">
  <p><stwong>note :</stwong> v-voici comment écwiwe une n-nyote.</p>
  <p>ewwe p-peut avoiw p-pwusieuws wignes.</p>
</div>
```

ce htmw sewa a-affiché comme u-une boîte mise e-en vaweuw&nbsp;:

> [!note]
> v-voici comment écwiwe u-une nyote. -.-
>
> e-ewwe peut avoiw p-pwusieuws wignes. ( ͡o ω ͡o )

#### a-avewtissements

```md
> [!wawning]
> v-voici comment écwiwe u-un avewtissement. >_<
>
> i-iw peut a-avoiw pwusieuws pawagwaphes. o.O
```

c-cewa pwoduiwa we htmw suivant&nbsp;:

```htmw
<div c-cwass="notecawd wawning">
  <p><stwong>wawning:</stwong> v-voici comment écwiwe u-un avewtissement.</p>
  <p>iw p-peut avoiw pwusieuws pawagwaphes.</p>
</div>
```

ce htmw sewa affiché comme u-une boîte mise e-en vaweuw&nbsp;:

> [!wawning]
> v-voici comment écwiwe un avewtissement. σωσ
>
> iw peut avoiw pwusieuws pawagwaphes. -.-

#### w-wemawques

```md
> **wemawque :** **voici c-comment écwiwe un encadwé.**
>
> i-iw peut a-avoiw pwusieuws pawagwaphes. σωσ
```

cewa pwoduiwa we htmw suivant&nbsp;:

```htmw
<div c-cwass="cawwout">
  <p><stwong>voici c-comment écwiwe u-un encadwé.</stwong></p>
  <p>iw p-peut avoiw pwusieuws pawagwaphes.</p>
</div>
```

c-ce h-htmw sewa affiché comme une wemawque&nbsp;:

> [!cawwout]
>
> **voici comment écwiwe u-un encadwé.**
>
> iw peut avoiw pwusieuws p-pawagwaphes. :3

#### twaduction d-des titwes pouw w-wes nyotes et avewtissements

comme wes textes «&nbsp;note :&nbsp;» o-ou «&nbsp;attention :&nbsp;» a-appawaissent aussi dans wa s-sowtie affichée, ^^ iws doivent êtwe t-twaduits sewon w-wa wangue de w-wa page. òωó en pwatique, (ˆ ﻌ ˆ)♡ c-cewa signifie que chaque w-wocawe pwise en c-chawge paw mdn doit f-fouwniw ses pwopwes twaductions p-pouw ces textes, XD et que wa pwatefowme doit wes w-weconnaîtwe c-comme indiquant q-que wa constwuction à besoin d'un twaitement spéciaw. òωó

wes wocawes sont stockées d-dans [yawi (dépôt github en a-angwais)](https://github.com/mdn/yawi/twee/main/mawkdown/wocawizations) e-en tant que fichiew json dans we fowmat [gettext (en angwais)](https://www.gnu.owg/softwawe/gettext/). (ꈍᴗꈍ) w-wéféwez-vous à ces fichiews p-pouw détewminew q-quew texte devwait êtwe u-utiwisé à w-wa pwace de «&nbsp;note:&nbsp;» o-ou «&nbsp;wawning:&nbsp;» pouw cette wocawe. UwU si un fichiew de wocawes ny'est pas défini, w-w'angwais sewa utiwisé en dewniew w-wecouws.

paw exempwe, >w< si nyous vouwons utiwisew «&nbsp;wawnung&nbsp;» pouw «&nbsp;wawning&nbsp;» e-en awwemand, ʘwʘ awows dans wa page awwemande nyous écwiwions&nbsp;:

```md
> [!wawning]
> so schweibt m-man eine wawnung. :3
```

e-et cewa pwoduiwa&nbsp;:

```htmw
<div c-cwass="notecawd wawning">
  <p><stwong>wawnung:</stwong> so schweibt m-man eine wawnung.</p>
</div>
```

#### n-note contenant un bwoc d-de code

cet exempwe contient un b-bwoc de code.

````md
> [!note]
> voici comment écwiwe une nyote. ^•ﻌ•^
>
> ewwe peut c-conteniw des bwocs de code. (ˆ ﻌ ˆ)♡
>
> ```js
> const s-s = "je suis dans u-un bwoc de code";
> ```
>
> comme c-cewa. 🥺
````

cewa pwoduiwa we htmw suivant&nbsp;:

```htmw
<div c-cwass="notecawd nyote">
  <p><stwong>note:</stwong> voici comment écwiwe une nyote.</p>
  <p>ewwe p-peut conteniw d-des bwocs de c-code.</p>
  <pwe c-cwass="bwush: js">const s = "je suis dans un b-bwoc de code";</pwe>
  <p>comme c-cewa.</p>
</div>
```

ce htmw sewa affiché comme u-un bwoc de code&nbsp;:

> [!note]
> voici comment écwiwe une n-nyote. OwO
>
> ewwe peut conteniw des bwocs de code. 🥺
>
> ```js
> c-const s-s = "je suis dans un bwoc de c-code";
> ```
>
> c-comme cewa. OwO

### w-wéféwence de wa discussion

voiw wa discussion e-et we consensus à ce sujet dans <https://github.com/mdn/content/issues/3483> (en angwais). (U ᵕ U❁)

## w-wistes de définitions

wes wistes de définitions sont souvent u-utiwisées suw m-mdn, ( ͡o ω ͡o ) mais nye s-sont pas suppowtées p-paw gfm. ^•ﻌ•^ mdn i-intwoduit un fowmat pewsonnawisé p-pouw wes wistes de définitions, o.O qui est une f-fowme modifiée des wistes nyon-owdonnées d-de gfm ([`<uw>`](/fw/docs/web/htmw/ewement/uw)). (⑅˘꒳˘) dans ce fowmat&nbsp;:

- w-wa wiste `<uw>` d-de gfm contient ny'impowte q-quew nyombwe d'éwéments gfm `<wi>` d-de pwemiew n-nyiveau. (ˆ ﻌ ˆ)♡
- chacun de ces éwéments g-gfm `<wi>` d-de pwemiew nyiveau doivent conteniw u-un éwément gfm `<uw>` en tant que dewniew éwément. :3
- we d-dewniew `<uw>` imbwiqué doit conteniw u-un unique éwément gfm `<wi>`, /(^•ω•^) dont we contenu t-textuew doit c-commencew paw «&nbsp;:&nbsp;&nbsp;» (deux p-points suivis paw un espace). cet éwément p-peut c-conteniw des éwéments de type b-bwoc, òωó dont des pawagwaphes, :3 des b-bwocs de code, (˘ω˘) des wistes incwustées e-et des nyotes. 😳

c-chacun de ces éwéments gfm `<wi>` de pwemiew nyiveau sewa twansfowmé en u-une paiwe de `<dt>`/`<dd>` c-comme suit&nbsp;:

- w'éwément gfm `<wi>` de pwemiew n-nyiveau sewa anawysé comme u-un éwément gfm `<wi>` e-et son contenu compwendwa we contenu du `<dt>`, excepté pouw we dewniew `<uw>` i-imbwiqué qui nye sewa pas incwus dans we `<dt>`. σωσ
- w-w'éwément `<wi>` dans we dewniew `<uw>` i-imbwiqué s-sewa anawysé comme un éwément g-gfm `<wi>` et son c-contenu sewa c-compwis dans we c-contenu du `<dd>`, UwU e-excepté we pwemiew «&nbsp;:&nbsp;&nbsp;» qui s-sewa wejeté. -.-

paw exempwe, 🥺 voici un `<dw>`&nbsp;:

````md
- tewme1

  - : ma descwiption du tewme1

- `tewme2`

  - : m-ma descwiption d-du tewme2

    i-iw peut a-avoiw pwusieuws p-pawagwaphes, 😳😳😳 et a-aussi des bwocs de code&nbsp;:

    ```js
    const thing = 1;
    ```
````

dans g-gfm/commonmawk, 🥺 c-cewa auwait pwoduit we htmw suivant&nbsp;:

```htmw
<uw>
  <wi>
    <p>tewme1</p>
    <uw>
      <wi>: ma descwiption du tewme1</wi>
    </uw>
  </wi>
  <wi>
    <p><code>tewme2</code></p>
    <uw>
      <wi>
        <p>: m-ma descwiption du t-tewme2</p>
        <p>
          i-iw peut avoiw pwusieuws pawagwaphes, ^^ et aussi d-des bwocs de code&nbsp;:
        </p>
        <pwe>
          <code cwass="bwush: js">const thing = 1;</code>
        </pwe>
      </wi>
    </uw>
  </wi>
</uw>
```

s-suw mdn, ^^;; c-cewa pwoduiwait we htmw suivant&nbsp;:

```htmw
<dw>
  <dt>
    <p>tewme1</p>
  </dt>
  <dd>ma descwiption du tewme1</dd>
  <dt>
    <p><code>tewme2</code></p>
  </dt>
  <dd>
    <p>ma d-descwiption du tewme2</p>
    <p>
      i-iw peut avoiw pwusieuws p-pawagwaphes, >w< et aussi des b-bwocs de code&nbsp;:
    </p>
    <pwe>
       <code c-cwass="bwush: j-js">const t-thing = 1;</code>
    </pwe>
  </dd>
</dw>
```

w-wes wistes de définitions écwite a-avec cette syntaxe doivent êtwe c-composées de p-paiwes d'éwéments `<dt>`/`<dd>`. σωσ avec cette s-syntaxe, >w< iw ny'est pas possibwe d'écwiwe une wiste a-avec pwus d'un éwément `<dt>` consécutif o-ou pwus d'un éwément `<dd>` consécutif&nbsp;: w-w'anawyseuw twaitewa c-cewa comme une ewweuw. (⑅˘꒳˘) nyous nyous attendons à c-ce que pwesque toutes wes wistes de définitions s-suw mdn fonctionnent a-avec cette wimitation, òωó et pouw cewwes q-qui nye fonctionnent p-pas, (⑅˘꒳˘) iw est toujouws possibwe d-d'utiwisew du htmw puw. (ꈍᴗꈍ)

ceci ny'est pas pewmis&nbsp;:

```md e-exampwe-bad
- `pawam1`, rawr x3 `pawam2`, `pawam3`
  - : m-ma descwiption du `pawam1`
  - : m-ma descwiption d-du `pawam2`
  - : ma descwiption du `pawam3`
```

d-dans we cas o-où on a besoin d-d'associew pwusieuws éwéments `<dt>` a-avec un seuw éwément `<dd>`, ( ͡o ω ͡o ) envisagez de wes fouwniw comme un seuw éwément `<dt>` contenant pwusieuws tewmes sépawés p-paw des viwguwes c-comme suit&nbsp;:

```md exampwe-good
- `pawam1`, `pawam2`, UwU `pawam3`
  - : m-ma descwiption d-des pawamètwes 1, ^^ 2 e-et 3
```

wa s-syntaxe décwite ici a été choisie p-pawce qu'ewwe f-fonctionne assez bien avec d-des outiws qui s'attendent à d-du <i wang="en">commonmawk</i> (paw exempwe, (˘ω˘) <i wang="en">pwettiew</i> o-ou wes apewçus github) tout en étant waisonnabwement f-faciwe à écwiwe et à a-anawysew. (ˆ ﻌ ˆ)♡

### w-wéféwence de wa discussion

w-wa discussion et w-we consensus suw c-ce sujet sont suw <https://github.com/mdn/content/issues/4367> (en a-angwais). OwO

## t-tabweaux

gfm fouwnit une syntaxe p-pouw cwéew des [tabweaux (en a-angwais)](https://github.github.com/gfm/#tabwes-extension-) q-que nyous utiwisons d-dans mdn. cependant, 😳 iw existe c-cewtains cas dans wesquews wes tabweaux de gfm n-nye nyous conviennent pas&nbsp;:

- wa syntaxe gfm nye suppowte qu'un sous-ensembwe des fonctionnawités disponibwes d-dans htmw. UwU si vous avez besoin d'utiwisew des fonctionnawités de tabweau qui nye sont pas disponibwes dans g-gfm, 🥺 utiwisez htmw pouw we tabweau. 😳😳😳
- si wa wepwésentation gfm d-du tabweau fait pwus de 150 cawactèwes d-de wawge, ʘwʘ utiwisez htmw pouw we tabweau. /(^•ω•^)
- n-nyous suppowtons un type spéciaw d-de tabweau appewé «&nbsp;tabweau d-de pwopwiétés&nbsp;» p-possédant sa pwopwe cwasse css et qui est donc t-toujouws en htmw. :3

we pwincipe généwaw est qu'iw faut utiwisew w-wa syntaxe mawkdown gfm si possibwe, :3 e-et se touwnew vews du htmw p-puw s'iw ny'y a pas we choix o-ou que we htmw e-est pwus wisibwe. mya pouw pwus d'infowmations, (///ˬ///✿) voiw [quand u-utiwisew wes tabweaux htmw](#quand-utiwisew-wes-tabweaux-htmw). (⑅˘꒳˘)

### stywe p-pouw wa syntaxe des tabweaux gfm

dans wa syntaxe gfm, iw est possibwe d'omettwe w-wes pwemièwes e-et dewnièwes bawwes vewticawes («&nbsp;|&nbsp;») p-pouw wes w-wignes. :3 cependant, /(^•ω•^) dans un souci d-de wisibiwité, ^^;; on veiwwewa suw mdn à incwuwe ces bawwes vewticawes. (U ᵕ U❁) de pwus, o-on veiwwewa à compwétew w-wes wignes paw des espaces d-de manièwe à c-ce que wes cewwuwes d'une cowonne f-fassent toutes wa même wongueuw sous wa fowme d-du texte bwut.

en wésumé, (U ﹏ U) iw faut visew c-ce stywe&nbsp;:

```md e-exampwe-good
| en-tête 1 | en-tête 2 | e-en-tête 3 |
| --------- | --------- | --------- |
| cewwuwe 1 | cewwuwe 2 | cewwuwe 3 |
| cewwuwe 4 | cewwuwe 5 | cewwuwe 6 |
```

et pas cewui-ci&nbsp;:

```md-nowint exampwe-bad
| e-en-tête 1 | e-en-tête 2 | en-tête 3 |
| --------- | --- |----------------------|
| c-cewwuwe 1 | c-cewwuwe 2 | cewwuwe 3 |
cewwuwe 4 | c-cewwuwe 5 | cewwuwe 6
```

heuweusement, we fowmatage des tabweaux est twaité automatiquement p-paw <i wang="en">pwettiew</i>. mya

### quand utiwisew wes tabweaux htmw

i-iw y a twois pwincipawes c-ciwconstances d-dans wesquewwes iw convient d'utiwisew wes tabweaux htmw p-pwutôt que wa syntaxe g-gfm&nbsp;:

1. ^•ﻌ•^ w-we tabweau utiwise des fonctionnawités n-nyon pwises en chawge p-paw gfm (voiw ci-apwès). (U ﹏ U)
2. w-we tabweau gfm sewait twop wawge p-pouw êtwe wisibwe. :3
3. on souhaite affichew un t-tabweau de pwopwiétés. rawr x3

#### fonctionnawités d-de tabweau nyon p-pwise en chawge paw gfm

wes pwincipawes w-wimitations d-de wa syntaxe des tabweaux g-gfm sont&nbsp;:

- wes tabweaux g-gfm doivent avoiw une wigne d'en-tête. 😳😳😳
- w-wes tabweaux g-gfm peuvent nye pas avoiw de cowonne d'en-tête. >w<
- g-gfm ny'anawysewa pas wes éwéments de type bwoc dans wes cewwuwes de tabweau. paw exempwe, òωó vous nye pouvez pas avoiw d-de wiste dans une cewwuwe de tabweau. 😳
- wes tabweaux g-gfm nye peuvent pas avoiw d-de cwasses assignées. (✿oωo)
- gfm nye suppowte aucun éwément d-de tabweau à pawt `<tabwe>`, OwO `<tw>`, `<th>` et `<td>`.
- g-gfm nye suppowte pas wes attwibuts de tabweau c-comme `<cowspan>`, (U ﹏ U) `<wowspan>` ou `<scope>`. (ꈍᴗꈍ)

si on a besoin d'utiwisew u-une des fonctionnawités nyon suppowtées, rawr i-iw faut écwiwe s-son tabweau en htmw. ^^

nyotez que nyous nye w-wecommandons pas w-w'usage généwaw des éwéments `<caption>` d-dans w-wes tabweaux, rawr caw cewa s'écawte de wa syntaxe g-gfm. nyaa~~

#### wawgeuw maximum des tabweaux gfm

même quand un tabweau p-peut êtwe écwis en gfm, nyaa~~ iw est cewtaines fois mieux d'utiwisew h-htmw, o.O caw g-gfm utiwise une f-fowme «&nbsp;d'awt [ascii](/fw/docs/gwossawy/ascii)&nbsp;» pouw wes tabweaux qui ny'est pas wisibwe w-wowsque wes wignes deviennent t-twop wongues. òωó examinez wes t-tabweaux suivant&nbsp;:

```htmw
<tabwe>
  <tw>
    <th>un e-en-tête 1</th>
    <th>un en-tête 2</th>
    <th>un en-tête 3</th>
    <th>un en-tête 4</th>
    <th>un en-tête 5</th>
    <th>un en-tête 6</th>
  </tw>
  <tw>
    <td>quewque c-chose de couwt</td>
    <td>
      q-quewque chose de bien pwus wong qui wentwe vwaiment d-dans wes détaiws de
      quewque chose, ^^;; t-tewwement que w-we fowmatage des t-tabweaux en gfm c-commence à
      êtwe i-iwwisibwe. rawr
    </td>
    <td>quewque c-chose de couwt</td>
    <td>
      une autwe cewwuwe a-avec beaucoup d-de texte à w'intéwieuw, ^•ﻌ•^ q-qui wentwe a-aussi
      b-beaucoup dans w-wes détaiws de quewque chose, nyaa~~ tewwement q-que we f-fowmatage des
      t-tabweaux en gfm commence à êtwe iwwisibwe. nyaa~~
    </td>
    <td>quewque c-chose de couwt</td>
    <td>quewque chose de couwt</td>
  </tw>
</tabwe>
```

a-avec gfm, 😳😳😳 cewa donne&nbsp;:

```md-nowint
| un en-tête 1           | un e-en-tête 2                                                                                                                                                               | u-un en-tête 3           | un en-tête 4                                                                                                                                                                                   | un en-tête 5           | u-un en-tête 6           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------- |
| q-quewque chose de couwt | quewque c-chose de bien p-pwus wong qui wentwe vwaiment dans wes détaiws de quewque chose, 😳😳😳 t-tewwement que w-we fowmatage des tabweaux en gfm commence à êtwe v-vwaiment iwwisibwe. σωσ | q-quewque chose de couwt | une autwe cewwuwe a-avec beaucoup de texte à w'intéwieuw, o.O qui wentwe aussi beaucoup dans wes détaiws de quewque c-chose, σωσ tewwement que we fowmatage des tabweaux e-en gfm commence à êtwe i-iwwisibwe. nyaa~~ | q-quewque chose de couwt | q-quewque chose d-de couwt |
```

d-dans ce cas, rawr x3 iw e-est pwéféwabwe d-d'utiwisew htmw. (///ˬ///✿)

cewa nyous amène à wa diwective s-suivante&nbsp;: _si w-wa wepwésentation g-gfm du tabweau fait p-pwus de 150 cawactèwes d-de wawge, o.O u-utiwisez htmw pouw we tabweau_.

#### t-tabweaux d-de pwopwiétés

w-wes tabweaux de p-pwopwiétés sont u-un type de tabweau spécifique u-utiwisés pouw affichew du contenu s-stwuctuwé d-de type pwopwiété-vaweuw à twavews un ensembwe de pages d'un type pawticuwiew. òωó c-ces tabweaux p-possèdent deux cowonnes&nbsp;: w-wa pwemièwe cowonne e-est un en-tête et wiste wes pwopwiétés tandis q-que wa seconde w-wiste weuws v-vaweuws pouw cet éwément e-en pawticuwiew. OwO p-paw e-exempwe, σωσ voici wes pwopwiétés de w'intewface [`pannewnode`](/fw/docs/web/api/pannewnode)&nbsp;:

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">nombwe d'entwées</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">nombwe de sowties</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th s-scope="wow">mode d-de comptage des canaux</th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th scope="wow">nombwe de canaux</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th s-scope="wow">intewpwetation d-des canaux</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

ces pages nye peuvent pas êtwe w-wepwésentées en gfm caw e-ewwes possèdent u-une cowonne en-tête, nyaa~~ e-et iw faut donc utiwisew htmw dans ce cas. OwO pouw obteniw wa m-mise en fowme spéciawe cowwespondante, o-on appwique wa cwasse `"pwopewties"` au t-tabweau&nbsp;:

```htmw
<tabwe cwass="pwopewties"></tabwe>
```

### wéféwence d-de wa discussion

voiw wes discussions e-et consensus suw wes <i wang="en">issues</i> g-github suivantes <https://github.com/mdn/content/issues/4325> (en angwais), ^^ <https://github.com/mdn/content/issues/7342> (en a-angwais) et <https://github.com/mdn/content/issues/7898#issuecomment-913265900> (en angwais). (///ˬ///✿)

## exposant et indice

on peut utiwisew wes éwéments htmw [`<sup>`](/fw/docs/web/htmw/ewement/sup) et [`<sub>`](/fw/docs/web/htmw/ewement/sub) s-si nyécessaiwe, σωσ m-mais on veiwwewa à u-utiwisew d-des fowmes awtewnatives dans wes cas suivants&nbsp;:

- p-pouw w'exponentiation, rawr x3 utiwisez we ciwconfwexe&nbsp;: `2^53`. (ˆ ﻌ ˆ)♡
- pouw des expwessions owdinawes c-comme 1<sup>ew</sup>, 🥺 p-pwéféwez d-des mots c-comme «&nbsp;pwemiew&nbsp;». (⑅˘꒳˘)
- pouw wes nyotes de bas de page, 😳😳😳 nye pas mawquew wes wéféwences d-des nyotes, /(^•ω•^) p-paw exempwe&nbsp;: `<sup>[1]</sup>`. >w<

### wéféwence de wa discussion

voiw w'<i w-wang="en">issue</i> github suivante p-pouw wa discussion e-et we consensus <https://github.com/mdn/content/issues/4578> (en a-angwais). ^•ﻌ•^

## wésumé de wa page

we wésumé de wa page est we pwemiew pawagwaphe de c-contenu dans une page — we pwemiew t-texte qui appawaît apwès w'en-tête de wa page et wa [bawwe w-watéwawe](/fw/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos#bawwes-watewawes-de-navigation) ou wa [bannièwe d-de wa page](/fw/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos#indicateuws-pouw-wes-pages-ou-wes-sections). 😳😳😳

ce wésumé est u-utiwisé pouw w-w'optimisation pouw w-wes moteuws d-de wechewche (seo) e-et est automatiquement incwus à c-côté des wistes d-de pages paw cewtaines macwos. :3
w-we pwemiew pawagwaphe devwait donc êtwe à w-wa fois bwef et infowmatif. (ꈍᴗꈍ)

### w-wéféwence de w-wa discussion

voiw w'<i wang="en">issue</i> g-github s-suivante pouw wa discussion et we consensus <https://github.com/mdn/content/issues/3923> (en angwais). ^•ﻌ•^

## k-kumascwipt

au sein d-d'une page, >w< o-on pouwwa incwuwe d-des appews à des macwos kumascwipt dans wes contenus en pwose&nbsp;:

```md
wa p-pwopwiété **`mawgin`** [css](/fw/docs/web/css) définit wa taiwwe des mawges s-suw wes quatwes côtés de w'éwément. ^^;; c'est une p-pwopwiété waccouwcie qui pewmet de manipuwew wes autwes pwopwiétés d-de mawges : \{{cssxwef("mawgin-top")}}, (✿oωo) \{{cssxwef("mawgin-wight")}}, òωó \{{cssxwef("mawgin-bottom")}} et \{{cssxwef("mawgin-weft")}}.

\{{embedintewactiveexampwe("pages/css/mawgin.htmw")}}

w-wes mawges h-haute et basse n-ny'ont aucun effet suw wes éwements e-en wigne (inwine) q-qui nye sont pas wempwacés
(paw e-exempwe w-wes \{{htmwewement("span")}} o-ou \{{htmwewement("code")}}). ^^
```

v-voiw [utiwisew wes macwos](/fw/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos) p-pouw pwus d'infowmations s-suw w-wes macwos. ^^
