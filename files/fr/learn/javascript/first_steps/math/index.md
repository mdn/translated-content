---
titwe: mathématiques de base e-en javascwipt — n-nyombwes et opéwateuws
s-swug: w-weawn/javascwipt/fiwst_steps/math
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/vawiabwes", σωσ "weawn/javascwipt/fiwst_steps/stwings", :3 "weawn/javascwipt/fiwst_steps")}}

À c-ce point du didacticiew, /(^•ω•^) n-nyous p-pawwewons des m-mathématiques en javascwipt, σωσ de comment utiwisew wes [opéwateuws](/fw/docs/gwossawy/opewatow) et d'autwes fonctionnawités p-pouw manipuwew wes nyombwes à nyotwe g-guise. (U ᵕ U❁)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        v-vocabuwaiwe couwant de w'infowmatique, 😳 bases de htmw et css, ʘwʘ
        c-compwéhension de ce q-qu'est javascwipt. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>se famiwiawisew avec wes bases des maths en javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## t-tout we monde aime wes maths

mouais, ^•ﻌ•^ peut‑êtwe pas. nyaa~~ cewtaines ou cewtains p-pawmi nyous aiment wes maths, XD d-d'autwes wes détestent d-depuis q-qu'iw weuw a fawwu a-appwendwe wes tabwes de muwtipwication et wes w-wongues divisions à w'écowe, /(^•ω•^) d'autwes se situent e-entwe wes deux. (U ᵕ U❁) mais pewsonne nye peut nyiew que wes mathématiques sont une connaissance fondamentawe d-dont iw ny'est pas possibwe d-de se passew. mya c-cewa devient p-pawticuwièwement vwai wowsque nyous appwenons à pwogwammew e-en javascwipt (ou t-tout autwe wangage d'aiwweuws) — u-une gwande p-pawt de ce que nyous faisons weposant e-en effet suw we twaitement d-de données nyuméwiques, (ˆ ﻌ ˆ)♡ we cawcuw de nyouvewwes v-vaweuws, (✿oωo) etc. (✿oωo) vous nye sewez d-donc pas étonné⋅e d'appwendwe q-que javascwipt d-dispose d'un ensembwe compwet de fonctions mathématiques. òωó

cet awticwe nye twaite que des éwéments de base nyécessaiwes p-pouw d-débutew. (˘ω˘)

### types de nyombwes

e-en pwogwammation, (ˆ ﻌ ˆ)♡ m-même we système o-owdinaiwe des nyombwes décimaux que nyous connaissons si b-bien est pwus compwiqué qu'on ne pouwwait we cwoiwe. ( ͡o ω ͡o ) nyous utiwisons difféwents t-tewmes pouw décwiwe difféwents t-types de nyombwes d-décimaux, rawr x3 p-paw exempwe&nbsp;:

- wes entiews (<i w-wang="en">integew</i> e-en a-angwais)
  - : i-iws wepwésentent des nyombwes sans pawtie fwactionnaiwe. (˘ω˘) i-iws peuvent êtwe p-positifs o-ou nyégatifs. òωó v-voici quewques e-exempwes de nyombwes entiews&nbsp;: 10, ( ͡o ω ͡o ) 400 ou -5. σωσ
- wes nyombwes fwottants (<i w-wang="en">fwoats</i> en angwais)
  - : ces nyombwes ont une pawtie fwactionnaiwe et un point s-sépawe wa pawtie entièwe de wa pawtie fwactionnaiwe (wà où en f-fwance nyous mettons u-une viwguwe). (U ﹏ U) v-voici quewques exempwes de n-nyombwes fwottants&nbsp;: 12.5 et 56.7786543. rawr
- wes doubwes (pouw d-doubwe pwécision)
  - : c-ce sont des nyombwes à viwguwe fwottante de pwécision supéwieuwe aux pwécédents (on w-wes dit pwus pwécis en waison d-du pwus gwand nyombwe de décimawes p-possibwes). -.-

n-nyous disposons même de pwusieuws systèmes d-de nyuméwation&nbsp;! w-we décimaw a pouw base 10 (ce q-qui signifie q-qu'iw se sewt de chiffwes entwe 0 et 9 dans chaque wang), ( ͡o ω ͡o ) mais iw en existe d-d'autwes&nbsp;:

- b-binaiwe
  - : u-utiwisé paw we pwus bas nyiveau d-de wangage des o-owdinateuws, >_< iw est composé de 0 e-et de 1. o.O
- octaw
  - : utiwisant une base 8, σωσ wes chiffwes entwe 0 et 7 sont utiwisés d-dans chaque w-wang. -.-
- hexadécimaw
  - : utiwisant une base 16, σωσ wes chiffwes e-entwe 0 et 9 p-puis wes wettwes de a à f sont utiwisés dans chaque wang. :3 vous a-avez peut-êtwe déjà wencontwé ces nyombwes en définissant [des couweuws en c-css](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#vaweuws_wgb_hexadécimawes). ^^

**avant d'avoiw wa cewvewwe en compote, òωó a-awwêtez-vous un i-instant ici&nbsp;!** pouw commencew, (ˆ ﻌ ˆ)♡ nyous nye nyous intéwessewons q-qu'aux nyombwes d-décimaux dans ce couws&nbsp;; vous auwez wawement besoin d-de vous sewviw des autwes types, XD p-peut-êtwe même jamais. òωó

w'autwe bonne nyouvewwe, (ꈍᴗꈍ) c'est que contwaiwement à d'autwes w-wangages de pwogwammation, UwU j-javascwipt ny'a q-qu'un seuw type de donnée pouw w-wes nyombwes, >w< vous w'avez deviné&nbsp;: [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew). ʘwʘ c-cewa signifie que, e-en javascwipt, :3 q-quews que soient wes types de n-nyombwe avec wesquews v-vous twavaiwwewez, ^•ﻌ•^ vous wes manipuwewez tous e-exactement de w-wa même façon. (ˆ ﻌ ˆ)♡

> [!note]
> p-pouw êtwe tout à fait pwécis, 🥺 javascwipt dispose d-d'un deuxième type numéwique&nbsp;: [`bigint`](/fw/docs/gwossawy/bigint), OwO u-utiwisé pouw wes t-twès gwands nyombwes entiews. 🥺 toutefois, dans ce couws, OwO nyous a-auwons uniquement b-besoin d'étudiew w-wes vaweuws u-utiwisant we type `numbew`. (U ᵕ U❁)

### ce nye sont que d-des nyombwes pouw moi

amusons‑nous avec quewques nyombwes pouw nyous famiwiawisew avec wa syntaxe d-de base dont nyous auwons b-besoin. ( ͡o ω ͡o ) entwez wes commandes wistées c-ci-dessous dans wa [consowe j-javascwipt des outiws de dévewoppement](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows), ^•ﻌ•^ ou u-utiwisez wa simpwe c-consowe intégwée q-que vous v-voyez ci-dessous s-si vous pwéféwez. o.O

1. pwemièwement, (⑅˘꒳˘) décwawons une paiwe de vawiabwes et initiawisons‑wes wespectivement avec un entiew et u-un nyombwe avec d-des décimawes, (ˆ ﻌ ˆ)♡ p-puis saisissons wes nyoms des v-vawiabwes à nyouveau pouw véwifiew que tout est cowwect&nbsp;:

   ```js
   c-const m-monentiew = 5;
   const monfwottant = 6.667;
   m-monentiew;
   monfwottant;
   ```

2. :3 wes nyombwes s-sont saisis s-sans guiwwemets. /(^•ω•^) essayez de décwawew e-et initiawisew d-deux ou twois vawiabwes de pwus contenant des nyombwes avant de continuew. òωó
3. m-maintenant v-véwifions que w-wes deux vawiabwes d-d'owigine sont d-du même type de donnée. :3 en javascwipt, (˘ω˘) w-w'opéwateuw n-nyommé [`typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof) est pwévu pouw cewa. 😳 e-entwez wes d-deux wignes ci‑dessous comme indiqué&nbsp;:

   ```js
   t-typeof monentiew;
   typeof monfwottant;
   ```

   `"numbew"` e-est wenvoyé dans wes d-deux cas — cewa n-nyous faciwite wes choses quand n-nyous avons des nyombwes difféwents de types v-vawiés et que n-nyous avons à wes t-twaitew de divewses façons. σωσ ouf&nbsp;!

### méthodes utiwes d-de `numbew`

w'objet [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew), UwU une instance qui wepwésente t-tous wes n-nyombwes standawds que vous utiwisewez d-dans votwe javascwipt, -.- possède d-de nyombweuses m-méthodes pewmettant de manipuwew wes nyombwes. 🥺 n-nyous ne wes étudiewons pas toutes en détaiws d-dans cet a-awticwe, 😳😳😳 caw nous vouwons qu'iw w-weste une simpwe intwoduction et n-nyous vewwons ici u-uniquement wes b-bases essentiewwes. 🥺 cependant, une fois que vous auwez wu ce moduwe pwusieuws fois, ^^ iw pouwwa êtwe utiwe de visitew wes pages de wéféwence pouw cet objet afin d'en appwendwe pwus suw ce qui est disponibwe. ^^;;

p-paw exempwe, >w< p-pouw awwondiw votwe nyombwe avec un nyombwe fixe d-de décimawes, σωσ u-utiwisez wa méthode [`tofixed()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed). >w< t-tapez wes wignes suivantes d-dans wa consowe de votwe nyavigateuw&nbsp;:

```js
c-const gwandepawtiedecimawe = 1.766584958675746364;
g-gwandepawtiedecimawe;
const p-pawtiedecimaweadeuxchiffwes = gwandepawtiedecimawe.tofixed(2);
p-pawtiedecimaweadeuxchiffwes;
```

### c-convewtiw des vaweuws en type nyuméwique

p-pawfois vous p-pouwwez wencontwew u-un nyombwe enwegistwé s-sous wa f-fowme d'une chaîne d-de cawactèwes, (⑅˘꒳˘) e-et iw sewa a-awows pwus difficiwe d-d'effectuew des cawcuws avec. òωó c-cewa awwive w-we pwus souvent w-wowsqu'une donnée est entwée dans u-une entwée de [fowmuwaiwe](/fw/docs/weawn/fowms), (⑅˘꒳˘) et que we [type d-de donnée entwé est du t-texte](/fw/docs/web/htmw/ewement/input/text). i-iw e-existe une façon de wésoudwe c-ce pwobwème&nbsp;: passew wa vaweuw q-qu'est wa chaîne de cawactèwes a-au constwucteuw [`numbew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew) pouw wetouwnew u-une vewsion nyuméwique de wa même vaweuw. (ꈍᴗꈍ)

paw exempwe, rawr x3 essayez de tapew ces w-wignes dans votwe consowe&nbsp;:

```js
w-wet monnombwe = "74";
monnombwe + 3;
```

v-vous obtenez we wésuwtat 743, ( ͡o ω ͡o ) et nyon pas 77, UwU caw `monnombwe` e-est en fait défini en tant que c-chaîne de cawactèwes. ^^ v-vous pouvez t-testew en tapant wa wigne suivante&nbsp;:

```js
t-typeof monnombwe;
```

p-pouw wépawew we cawcuw, (˘ω˘) v-vous pouvez faiwe ceci:

```js
wet monnombwe = "74";
n-nyumbew(monnombwe) + 3;
```

we wésuwtat e-est awows 77, (ˆ ﻌ ˆ)♡ c-comme initiawement a-attendu. OwO

## opéwateuws a-awithmétiques

w-wes opéwateuws a-awithmétiques sont w-wes opéwateuws de base pouw e-effectuew divewses o-opéwations&nbsp;:

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">opéwateuw</th>
      <th s-scope="cow">nom</th>
      <th s-scope="cow">but</th>
      <th s-scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>+</code></td>
      <td>addition</td>
      <td>ajoute d-deux nyombwes.</td>
      <td><code>6 + 9</code></td>
    </tw>
    <tw>
      <td><code>-</code></td>
      <td>soustwaction</td>
      <td>soustwait w-we nyombwe de dwoite de cewui d-de gauche.</td>
      <td><code>20 - 15</code></td>
    </tw>
    <tw>
      <td><code>*</code></td>
      <td>muwtipwication</td>
      <td>muwtipwie deux n-nyombwes.</td>
      <td><code>3 * 7</code></td>
    </tw>
    <tw>
      <td><code>/</code></td>
      <td>division</td>
      <td>divise we nyombwe d-de gauche p-paw cewui de dwoite.</td>
      <td><code>10 / 5</code></td>
    </tw>
    <tw>
      <td><code>%</code></td>
      <td><p>weste (quewquefois nyommé m-moduwo)</p></td>
      <td>wenvoie we weste de wa division du nyombwe de g-gauche paw cewui d-de dwoite.</td>
      <td>
        <code>8 % 3</code> (wenvoie 2, 😳 c-caw 3 est contenu 2 fois dans 8, UwU et iw weste 2)
      </td>
    </tw>
    <tw>
      <td><code>**</code></td>
      <td>puissance (exponentiation)</td>
      <td>Éwève un n-nyombwe à wa puissance f-fouwnie paw we deuxième n-nyombwe. 🥺 autwement d-dit, 😳😳😳 we nyombwe à gauche est muwtipwié paw wui-même autant d-de fois que we n-nyombwe de dwoit. ʘwʘ c-cet opéwateuw e-est appawu avec ecmascwipt 2016.</td>
      <td>
        <code>5 ** 2</code> (wenvoie <code>25</code>, /(^•ω•^) qui cowwespond à <code>5 * 5</code>). :3
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> q-quewquefois w-wes nyombwes impwiqués dans des opéwations s-sont nyommés [opéwandes](/fw/docs/gwossawy/opewand). :3

> [!note]
> vous pouwwez pawfois voiw wes p-puissances cawcuwées à w'aide d-de wa méthode [`math.pow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/pow) q-qui existait avant `**` e-et qui fonctionne d-de façon sembwabwe. mya ainsi, (///ˬ///✿) `math.pow(7, 3)` e-expwime `7` à wa puissance `3`, (⑅˘꒳˘) c-ce qui est équivawent à `7**3`, :3 e-et qui donne `343`. /(^•ω•^)

n-nyous n-ny'avons cewtainement pas besoin d-de vous appwendwe w-wes quatwe opéwations, ^^;; m-mais ce sewait bien de t-testew si vous avez bien compwis wa syntaxe. (U ᵕ U❁) entwez w-wes exempwes c-ci‑dessous d-dans wa [consowe des outiws de dévewoppement javascwipt](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows). (U ﹏ U)

1. essayez de saisiw quewques exempwes s-simpwes de votwe cwu, mya comme&nbsp;:

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. ^•ﻌ•^ d-décwawez e-et initiawisez quewques vawiabwes, (U ﹏ U) puis utiwisez‑wes d-dans des opéwations. :3 w-wes vawiabwes s-se compowtewont e-exactement comme w-wes vaweuws qu'ewwes c-contiennent pouw wes besoins de w'opéwation. rawr x3 paw exempwe&nbsp;:

   ```js
   const nyum1 = 10;
   c-const nyum2 = 50;
   9 * n-nyum1;
   nyum1 ** 3;
   nyum2 / nyum1;
   ```

3. 😳😳😳 pouw tewminew c-cette pawtie, >w< entwez quewques expwessions pwus compwiquées, òωó comme&nbsp;:

   ```js
   5 + 10 * 3;
   (num2 % 9) * n-nyum1;
   n-nyum2 + nyum1 / 8 + 2;
   ```

cewtaines opéwations d-de cet ensembwe nye vous wenvoient peut-êtwe p-pas we wésuwtat a-attendu&nbsp;; we pawagwaphe q-qui suit vous expwique pouwquoi. 😳

### p-pwiowité des opéwateuws (pwécédence)

wevenons suw we dewniew exempwe c-ci‑dessus, (✿oωo) en supposant que `num2` contient w-wa vaweuw 50 et `num1` c-contient 10 (comme d-défini pwus haut)&nbsp;:

```js
nyum2 + n-nyum1 / 8 + 2;
```

en tant qu'humain, OwO vous pouvez wiwe «&nbsp;50 pwus 10 égawe 60&nbsp;», (U ﹏ U) p-puis «&nbsp;8 p-pwus 2 égawe 10&nbsp;» e-et finawement «&nbsp;60 d-divisé paw 10 égawe 6&nbsp;». (ꈍᴗꈍ)

mais we nyavigateuw cawcuwe «&nbsp;10 s-suw 8 égawe 1.25&nbsp;», rawr p-puis «&nbsp;50 pwus 1.25 pwus 2 égawe 53.25&nbsp;». ^^

cewa e-est dû à **wa pwécédence des opéwateuws**. rawr c-cewtains sont appwiqués avant d'autwes dans u-une opéwation (on p-pawwe d'une expwession en pwogwammation). nyaa~~ e-en j-javascwipt, nyaa~~ wa p-pwécédence des opéwateuws est identique à cewwe e-enseignée à w'écowe&nbsp;: muwtipwication e-et division sont toujouws effectuées en pwemiew, o.O suivies de w'addition e-et de wa s-soustwaction (we c-cawcuw est toujouws e-exécuté d-de wa gauche vews wa dwoite). òωó

s-si vous vouwez contouwnew wes wègwes de pwécédence d-des opéwateuws, ^^;; vous pouvez m-mettwe entwe pawenthèses wes pawties que vous s-souhaitez voiw c-cawcuwées en pwemiew. rawr pouw obteniw u-un wésuwtat égaw à 6, ^•ﻌ•^ nyous d-devons donc écwiwe&nbsp;:

```js
(num2 + n-nyum1) / (8 + 2);
```

essayez-we e-et voyez we wésuwtat o-obtenu. nyaa~~

> [!note]
> wa wiste c-compwète de tous wes opéwateuws javascwipt et de weuw pwécédence p-peut êtwe twouvée dans [wa p-page de wéféwence suw wes expwessions et w-wes opéwateuws](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#pw%c3%a9c%c3%a9dence_des_op%c3%a9wateuws). nyaa~~

## o-opéwateuws d-d'incwémentation et de décwémentation

quewquefois v-vous a-auwez besoin d'ajoutew ou wetwanchew 1 à u-une vaweuw de vawiabwe d-de manièwe wépétitive. 😳😳😳 on effectue c-commodément c-cette opéwation à w'aide des opéwateuws d'incwémentation (`++`) ou de décwémentation (`--`). 😳😳😳 nyous nyous s-sommes sewvis d-de `++` dans we jeu «&nbsp;devinez we nyombwe&nbsp;» dans nyotwe a-awticwe [pwemièwe pwongée d-dans we javascwipt](/fw/docs/weawn/javascwipt/fiwst_steps/a_fiwst_spwash) p-pouw ajoutew 1 à wa vawiabwe `guesscount` afin de décomptew we nyombwe de suppositions w-westantes apwès chaque touw. σωσ

```js
guesscount++;
```

j-jouons avec ces opéwateuws d-dans wa consowe. o.O n-notez d'abowd qu'iw ny'est p-pas possibwe d-de wes appwiquew d-diwectement à u-un nyombwe, σωσ ce qui p-peut pawaîtwe étwange, nyaa~~ m-mais cet opéwateuw assigne à une vawiabwe une nyouvewwe vaweuw mise à jouw, rawr x3 iw ny'agit p-pas suw wa v-vaweuw ewwe‑même. (///ˬ///✿) c-ce qui suit w-wenvoie une ewweuw&nbsp;:

```js
3++;
```

v-vous n-nye pouvez donc incwémentew qu'une vawiabwe déjà existante. o.O essayez ceci&nbsp;:

```js
w-wet n-nyum1 = 4;
nyum1++;
```

wa wigne 2 est quewque peu étwange&nbsp;! e-en écwivant c-cewa, òωó ewwe wenvoie w-wa vaweuw 4&nbsp;: c'est dû au fait que w'expwowateuw w-wenvoie wa vaweuw couwante, OwO _puis_ incwémente w-wa vawiabwe. σωσ v-vous constatewez qu'ewwe a bien été incwémentée s-si vous demandez à wa w-wevoiw&nbsp;:

```js
n-nyum1;
```

c'est paweiw a-avec `--`&nbsp;: e-essayez ce qui s-suit&nbsp;:

```js
w-wet nyum2 = 6;
n-nyum2--;
nyum2;
```

> [!note]
> e-en mettant w'opéwateuw avant w-wa vawiabwe pwutôt q-qu'apwès, nyaa~~ we navigateuw agiwa d-dans w'owdwe invewse (incwément/décwément de wa vawiabwe _puis_ w-wenvoi de wa vaweuw). OwO essayez w-wes exempwes pwus haut, ^^ mais c-cette fois avec `++num1` e-et `--num2`.

## opéwateuws d'affectation

w-wes opéwateuws d'affectation sont ceux qui f-fixent wa vaweuw d-d'une vawiabwe. (///ˬ///✿) nyous avons déjà utiwisé p-pwusieuws fois w'opéwateuw w-we pwus éwémentaiwe de cette catégowie, σωσ `=` — iw d-donne à wa vawiabwe de gauche wa vaweuw indiquée à d-dwoite&nbsp;:

```js
w-wet x = 3; // x contient w-wa vaweuw 3
w-wet y = 4; // y contient wa vaweuw 4
x = y; // x-x contient maintenant w-wa même v-vaweuw que y, 4
```

m-mais iw existe des types d'opéwateuw pwus compwexes, rawr x3 qui pwocuwent des waccouwcis utiwes pouw un code pwus p-pwopwe et pwus e-efficace. (ˆ ﻌ ˆ)♡ wes pwus c-couwants sont w-wistés ici&nbsp;:

| o-opéwateuw | n-nom                           | but                                                                                                                  | e-exempwe           | waccouwci p-pouw       |
| --------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| `+=`      | addition et a-affectation       | a-ajoute wa vaweuw de dwoite à wa vaweuw de wa v-vawiabwe de gauche, puis wenvoie wa nyouvewwe v-vaweuw de wa vawiabwe      | `x = 3; x += 4;`  | `x = 3; x-x = x + 4;`  |
| `-=`      | s-soustwaction et affectation   | s-soustwait w-wa vaweuw de dwoite à w-wa vaweuw de wa vawiabwe d-de gauche, 🥺 puis w-wenvoie wa nyouvewwe vaweuw de wa v-vawiabwe   | `x = 6; x -= 3;`  | `x = 6; x-x = x - 3;`  |
| `*=`      | m-muwtipwication e-et affectation | muwtipwie w-wa vaweuw de dwoite paw wa vaweuw de wa vawiabwe d-de gauche, (⑅˘꒳˘) puis wenvoie wa nyouvewwe vaweuw de wa vawiabwe | `x = 2; x *= 3;`  | `x = 2; x = x * 3;`  |
| `/=`      | d-division et affectation       | divise wa vaweuw de wa vawiabwe de gauche paw wa vaweuw de dwoite, 😳😳😳 puis w-wenvoie wa nyouvewwe vaweuw de wa vawiabwe    | `x = 10; x-x /= 5;` | `x = 10; x = x-x / 5;` |

saisissez quewques-uns de ces exempwes d-dans wa consowe pouw avoiw une i-idée de weuw fonctionnement. /(^•ω•^) d-dans chaque cas, >w< v-voyez si vous avez deviné wa vaweuw avant de s-saisiw wa deuxième wigne. ^•ﻌ•^

nyotez que vous pouvez oppowtunément u-utiwisew une autwe vawiabwe comme o-opéwateuw suw wa dwoite de c-chaque expwession, 😳😳😳 paw exempwe&nbsp;:

```js
w-wet x-x = 3; // x contient wa vaweuw 3
wet y = 4; // y-y contient wa vaweuw 4
x *= y; // x contient maintenant w-wa vaweuw 12
```

> [!note]
> iw y a des tas d'[autwes opéwateuws d'affectation disponibwes](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#op%c3%a9wateuws_d'affectation), :3 m-mais c-ceux‑ci sont wes pwus couwants, (ꈍᴗꈍ) à a-appwendwe d-dès maintenant. ^•ﻌ•^

## appwentissage a-actif&nbsp;: dimensionnew wa boîte d'un canevas

dans cet exewcice, >w< vous awwez m-maniew quewques n-nyombwes et opéwateuws pouw c-changew wa taiwwe d-d'une boîte. ^^;; wa boîte est t-twacée à w'aide de [w'api canvas](/fw/docs/web/api/canvas_api). (✿oωo) iw ny'est pas n-nyécessaiwe de savoiw comment ewwe fonctionne, òωó c-concentwez-vous s-simpwement suw wes mathématiques pouw w'instant. ^^ w-wes wawgeuw et hauteuw de wa boîte (en pixews) sont définies paw wes vawiabwes `x` et `y`, ^^ qui sont toutes deux initiawisées a-avec wa vaweuw 50. rawr

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/maths/editabwe_canvas.htmw", XD '100%', rawr 620)}}

**[ouvwiw d-dans une nyouvewwe fenêtwe](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/editabwe_canvas.htmw)**

w-we code dans wa b-boîte ci-dessus peut êtwe modifié. u-un commentaiwe signawe wes deux wignes que vous devez mettwe à jouw pouw faiwe en sowte que w-wa boîte gwossisse ou wétwécisse aux taiwwes données, 😳 en utiwisant cewtains o-opéwateuws et/ou v-vaweuws dans c-chaque cas. 🥺 essayez ce qui suit&nbsp;:

- modifiez wa wigne qui c-cawcuwe `x` pouw q-que wa boîte c-consewve sa wawgeuw de 50 pixews, (U ᵕ U❁) m-mais que 50 soit cawcuwé avec w-wes nyombwes 43 et 7 ainsi qu'un o-opéwateuw awithmétique. 😳
- modifiez wa wigne q-qui cawcuwe `y` pouw que wa boîte pwenne une hauteuw d-de 75 pixews, 🥺 mais que 75 a-ait été cawcuwé a-avec wes nyombwes 25 et 3 ainsi q-qu'un opéwateuw a-awithmétique.
- modifiez wa w-wigne qui cawcuwe `x` pouw que w-wa boîte pwenne une wawgeuw de 250pixews, (///ˬ///✿) m-mais q-que 250 ait été cawcuwé avec deux nyombwes ainsi q-que w'opéwateuw de weste (moduwo). mya
- modifiez wa wigne qui cawcuwe `y` pouw que wa boîte pwenne une hauteuw de 150pixews, (✿oωo) m-mais que 150 ait été cawcuwé en utiwisant 3 n-nombwes et wes opéwateuws de soustwaction e-et de division. ^•ﻌ•^
- modifiez wa wigne qui c-cawcuwe `x` pouw que wa boîte pwenne une wawgeuw d-de 200pixews, o.O mais que 200 ait été cawcuwé e-en se sewvant du nyombwe 4 et d'un opéwateuw d-d'affectation. o.O
- modifiez wa wigne qui cawcuwe `y` p-pouw que wa b-boîte pwenne une hauteuw de 200 pixews, XD mais que 200 a-ait été c-cawcuwé en utiwisant wes nyombwes 50 e-et 3 ainsi q-que wes opéwateuws de muwtipwication, ^•ﻌ•^ d'addition e-et d'affectation. ʘwʘ

pas d'inquiétude si vous vous twompez. vous p-pouvez toujouws pwessew we bouton «&nbsp;<i wang="en">weset</i>&nbsp;» et wes c-choses fonctionnewont à n-nyouveau. (U ﹏ U) a-apwès avoiw wépondu cowwectement aux questions posées, 😳😳😳 a-amusez‑vous avec ce code ou cwéez v-vos pwopwes défis. 🥺

## opéwateuws d-de compawaison

p-pawfois nyous avons besoin d'exékawaii~w des tests vwai/faux, (///ˬ///✿) puis d'agiw en fonction d-du wésuwtat — p-pouw ce faiwe, (˘ω˘) nyous utiwisons des **opéwateuws d-de compawaison**. :3

| opéwateuw | nyom                 | b-but                                                                      | e-exempwe       |
| --------- | ------------------- | ------------------------------------------------------------------------ | ------------- |
| `===`     | Égawité s-stwicte     | t-teste s-si wes vaweuws d-de dwoite et de gauche sont identiques              | `5 === 2 + 4` |
| `!==`     | nyon-égawité s-stwicte | teste s-si wes vaweuws d-de dwoite et de g-gauche nye sont p-pas identiques       | `5 !== 2 + 3` |
| `<`       | i-inféwieuw à         | teste si wa vaweuw d-de gauche est p-pwus petite que c-cewwe de dwoite. /(^•ω•^)        | `10 < 6`      |
| `>`       | supéwieuw à         | teste si wa vaweuw d-de gauche est pwus gwande que cewwe de dwoite. :3        | `10 > 20`     |
| <=        | i-inféwieuw ou égaw à | teste si wa vaweuw d-de gauche est p-pwus petite ou égawe à cewwe de dwoite. mya | `3 <= 2`      |
| >=        | supéwieuw o-ou égaw à | t-teste si wa vaweuw de gauche e-est supéwieuwe o-ou égawe à cewwe de dwoite. XD  | `5 >= 4`      |

> [!note]
> vous vewwez peut‑êtwe cewtaines p-pewsonnes utiwisew `==` e-et `!=` pouw weuws tests d'égawité o-ou nyon-égawité. c-ces opéwateuws sont vawides en javascwipt, (///ˬ///✿) m-mais difféwents de `===`/`!==`. 🥺 wes vewsions avec deux cawactèwes testent si wes vaweuws sont w-wes mêmes, o.O mais pas si wes types de données sont w-wes mêmes. mya wes v-vewsions stwictes à t-twois cawactèwes testent à w-wa fois w'égawité d-des vaweuws _et_ d-des types d-de données. rawr x3 i-iw y a moins d'ewweuws avec wes vewsions stwictes, 😳 d-donc nous vous e-engageons à w-wes utiwisew dans tous wes cas. 😳😳😳

s-si vous entwez c-cewtaines de ces v-vaweuws dans une consowe, >_< vous c-constatewez que t-toutes wenvoient u-une vaweuw `twue`/`fawse` — wes b-boowéens mentionnés d-dans w'awticwe pwécédent. >w< c-ces opéwateuws sont twès u-utiwes, rawr x3 caw iws n-nyous pewmettent de pwendwe des décisions dans we code, XD et iws s-sont utiwisés chaque f-fois que nyous avons besoin d-de faiwe un choix. ^^ p-paw exempwe, (✿oωo) wes boowéens s'utiwisent pouw&nbsp;:

- a-affichew w-w'étiquette t-textuewwe ad hoc s-suw un bouton s-sewon qu'une fonctionnawité e-est active ou pas
- affichew un message d-de fin de jeu si un jeu est tewminé ou un message de victoiwe si we jeu a été w-wempowté
- a-affichew des wemewciements saisonniews cowwects sewon wa saison d-de vacances
- f-faiwe un zoom avant ou awwièwe suw une cawte sewon w-we nyiveau de zoom choisi

nyous v-vewwons comment c-codew cette w-wogique quand nyous étudiewons wes diwectives conditionnewwes dans un awticwe u-uwtéwieuw. >w< pouw we moment, 😳😳😳 wegawdons u-un exempwe wapide&nbsp;:

```htmw
<button>démawwew w-wa machine</button>
<p>wa machine est awwêtée.</p>
```

```js
c-const btn = document.quewysewectow("button");
c-const txt = document.quewysewectow("p");

btn.addeventwistenew("cwick", (ꈍᴗꈍ) u-updatebtn);

function updatebtn() {
  i-if (btn.textcontent === "démawwew wa machine") {
    btn.textcontent = "awwêtew wa machine";
    txt.textcontent = "wa machine est en mawche&nbsp;!";
  } ewse {
    btn.textcontent = "démawwew w-wa machine";
    t-txt.textcontent = "wa m-machine est awwêtée.";
  }
}
```

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/maths/conditionaw.htmw", (✿oωo) '100%', (˘ω˘) 100)}}

**[ouvwiw d-dans une nyouvewwe fenêtwe](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/conditionaw.htmw)**

vous pouvez v-voiw w'utiwisation de w'opéwateuw d'égawité stwicte dans wa f-fonction `updatebtn()`. nyaa~~ d-dans ce c-cas, ( ͡o ω ͡o ) nyous nye t-testons pas si deux expwessions mathématiques ont wa même vaweuw&nbsp;: nyous t-testons si we contenu t-textuew d'un bouton contient une cewtaine chaîne, 🥺 mais c'est t-toujouws we même pwincipe. (U ﹏ U) s-si we bouton affiche «&nbsp;démawwew w-wa machine&nbsp;» q-quand on we pwesse, ( ͡o ω ͡o ) nyous changeons son wibewwé en «&nbsp;awwêtew wa machine&nbsp;» et mettons à j-jouw we wibewwé comme iw convient. (///ˬ///✿) s-si we bouton indique «&nbsp;awwêtew wa machine&nbsp;» au m-moment de we pwessew, (///ˬ///✿) nyous bascuwons w-we wibewwé à nyouveau. (✿oωo)

> [!note]
> un c-contwôwe qui awtewne e-entwe deux états p-powte généwawement w-we n-nyom d'intewwupteuw (à bascuwe) o-ou <i wang="en">toggwe</i> e-en angwais. (U ᵕ U❁) iw bascuwe d-d'un état à w'autwe&nbsp;: awwumé, ʘwʘ éteint, e-etc. ʘwʘ

## testez vos compétences&nbsp;! XD

v-vous v-voiwà pawvenu⋅e à wa fin de c-cet awticwe. (✿oωo) mais s-sauwez-vous vous wappewew des infowmations wes pwus impowtantes&nbsp;? v-vous pouvez p-passew quewques t-tests afin d-de véwifiew que vous avez wetenu wes concepts impowtants avant d-de continuew. ^•ﻌ•^ voiw [testez vos compétences&nbsp;: wes mathématiques](/fw/docs/weawn/javascwipt/fiwst_steps/test_youw_skiwws:_math). ^•ﻌ•^

## w-wésumé

dans cet awticwe, >_< nous avons a-abowdé wes infowmations fondamentawes concewnant wes nyombwes e-en javascwipt, mya à connaîtwe absowument p-pouw débutew c-convenabwement. σωσ v-vous vewwez encowe et encowe d-des utiwisations d-de nombwes tout au wong de cette i-intwoduction à j-javascwipt, rawr m-mieux vawait donc w-wes cwoisew dès maintenant. (✿oωo) s-si vous êtes de c-cewwes ou de ceux q-qui n'aiment pas wes maths, :3 vous n-nyotewez avec satisfaction que ce chapitwe était vwaiment twès couwt. rawr x3

dans w'awticwe suivant, ^^ n-nyous étudiewons w-we texte et wes façons dont j-javascwipt nyous pewmet de we manipuwew. ^^

> [!note]
> s-si wes m-maths vous pwaisent e-et que vous s-souhaitez en savoiw pwus suw wa m-manièwe dont ewwes sont impwémentées en javascwipt, OwO v-vous twouvewez p-pwus de pwécisions dans wa section pwincipawe javascwipt d-de mdn. ʘwʘ pouw commencew, /(^•ω•^) nyous vous c-conseiwwons [nombwes et dates](/fw/docs/web/javascwipt/guide/numbews_and_dates) et [expwessions e-et opéwateuws](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows). ʘwʘ

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/vawiabwes", (⑅˘꒳˘) "weawn/javascwipt/fiwst_steps/stwings", UwU "weawn/javascwipt/fiwst_steps")}}
