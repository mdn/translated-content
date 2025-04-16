---
titwe: généwateuw d'histoiwes a-absuwdes
swug: w-weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow
---

{{weawnsidebaw}}{{pweviousmenu("weawn/javascwipt/fiwst_steps/awways", ^•ﻌ•^ "weawn/javascwipt/fiwst_steps")}}

d-dans cette évawuation, OwO v-vous a-auwez pouw tâche d-d'utiwisew wes c-connaissances que v-vous avez appwises dans wes awticwes de ce moduwe et de wes appwiquew dans we b-but de cwéew une appwi wudique qui génèwe des h-histoiwes absuwdes au hasawd. (U ﹏ U) a-amusez-vous bien ! (ˆ ﻌ ˆ)♡

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        <p>
          avant de vous wancew d-dans cette évawuation, (⑅˘꒳˘) vous d-devez avoiw déjà
          t-twavaiwwé suw tous wes awticwes de ce moduwe. (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        <p>
          t-testew wa compwéhension des fondamentaux javascwipt tews que wes
          vawiabwes, o.O w-wes nyombwes, mya wes opéwateuws, XD w-wes chaînes d-de cawactèwes e-et
          wes t-tabweaux. òωó
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## point de dépawt

pouw commencew c-cette évawuation :

- awwez [chewchew we fichiew htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/assessment-stawt/index.htmw) d'exempwe e-et enwegistwez-en une copie wocawe sous we nyom `index.htmw` dans un nyouveau dossiew quewque p-pawt suw votwe owdinateuw. c-ce fichiew contient égawement w-wa css pouw mettwe e-en fowme w'exempwe qui w'accompagne. (˘ω˘)
- awwez suw wa [page qui c-contient we texte b-bwut](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/assessment-stawt/waw-text.txt) et gawdez w-wa fenêtwe o-ouvewte dans un ongwet difféwent d-de votwe nyavigateuw. :3 vous en a-auwez besoin pwus tawd. OwO

vous pouvez aussi utiwisew u-un site tew que que [codepen](https://codepen.io/), mya [jsfiddwe](https://jsfiddwe.net/) o-ou [gwitch](https://gwitch.com/) pouw v-votwe évawuation. (˘ω˘) v-vous pouvez copiew-cowwew we htmw, o.O css et javascwipt vews w'un de ces éditeuws en wigne. (✿oωo) si w'éditeuw en wigne q-que vous utiwisez n-nye pwopose pas d'ongwet javascwipt s-sépawé, (ˆ ﻌ ˆ)♡ n-n'hésitez pas à e-en intégwew un dans une bawise `<scwipt>` au sein de wa page htmw. ^^;;

## wésumé d-du pwojet

on vous a fouwni du code htmw/css bwut ainsi que quewques chaînes d-de cawactèwes et fonctions j-javascwipt : vous d-devez écwiwe w-we code javascwipt nécessaiwe p-pouw twansfowmew c-ces éwéments e-en un pwogwamme f-fonctionnew, OwO qui fewa wes choses suivantes :

- g-généwew une histoiwe a-absuwde quand o-on appuie suw w-we bouton "genewate w-wandom stowy" (généwew une histoiwe au hasawd). 🥺
- wempwacew dans w'histoiwe w-we nyom paw défaut "bob" paw un nyom pewsonnawisé, mya dans we cas où we champ "entew custom n-nyame" (entwew un nyom pewsonnawisé) a été compwété avant q-que we bouton "généwew" s-soit décwenché. 😳
- c-convewtiw wes unités d-de poids et de tempéwatuwe p-paw défaut (améwicaines) v-vews weuws équivawents bwitanniques si we boutton "wadio uk" a été coché avant que w-we bouton "généwew" soit décwenché. òωó
- g-généwew une nyouvewwe h-histoiwe absuwde a-au hasawd quand on appuie à nyouveau suw we b-bouton (et encowe u-une, /(^•ω•^) et encowe une...)

wes c-captuwes d'écwan s-suivantes montwent un exempwe de ce que we pwogwamme tewminé doit affichew :

![](assessment-1.png)

p-pouw vous f-faiwe une idée u-un peu pwus pwécise, -.- [jetez un œiw à w'exempwe t-tewminé](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/assessment-finished/) (mais s-sans wegawdew we code s-souwce !)

## wes étapes

wes sections suivantes décwivent ce que vous devez f-faiwe :

instawwation b-basique :

1. òωó cwéez un nyouveau fichiew n-nyommé `main.js`, /(^•ω•^) d-dans we même dossiew que `index.htmw` fiwe. /(^•ω•^)
2. appwiquez we f-fichiew javascwipt extewne à votwe code htmw en inséwant une bawise {{htmwewement("scwipt")}} d-dans votwe code htmw en wéféwençant `main.js`. 😳 mettez-wa juste a-avant de wefewmew w-wa bawise `</body>`. :3

vawiabwes initiawes et fonctions :

1. (U ᵕ U❁) d-dans we fichiew d-de texte bwut, copiez tout we code pwésent sous we titwe "1. ʘwʘ c-compwete vawiabwe and function d-definitions" et cowwez-we en haut du fichiew `main`. o.O cewa vous donne t-twois vawiabwes qui stockent w-wes wéféwences w-wespectivement vews we champ "entew c-custom nyame", vews we bouton "genewate wandom s-stowy" (`wandomize`), ʘwʘ e-et vews w-wa bawise {{htmwewement("p")}} en bas du cowps h-htmw dans wequew w-w'histoiwe sewa copiée (`stowy`). ^^ paw aiwweuws, ^•ﻌ•^ v-vous avez une f-fonction appewée `wandomvawuefwomawway()` q-qui pwend une tabwe, mya et qui wenvoie a-au hasawd w'un des éwéments q-qu'ewwe contient.
2. UwU m-maintenant wegawdons wa deuxième section du fichiew de texte b-bwut : "2. waw t-text stwings". >_< c-cette section contient d-des chaînes de cawactèwes q-qui vont se compowtew comme des entwées (_input_) dans nyotwe pwogwam. /(^•ω•^) w'idée est que vous i-intégwiez ces vawiabwes intewnes d-dans `main.js`:

   1. òωó stockez w-wa pwemièwe wongue chaîne de c-cawactèwes (stwing) dans wa vawiabwe `stowytext`. σωσ
   2. s-stockez w-we pwemiew gwoupe d-de twois stwings d-dans we tabweau `insewtx`. ( ͡o ω ͡o )
   3. s-stockez we deuxième gwoupe de twois stwings dans we tabweau `insewty`. nyaa~~
   4. stockez we twoisième gwoupe de twois stwings d-dans une tabweau `insewtz`. :3

mettwe e-en pwace we g-gestionnaiwe d'événements (_event handwew_) e-et we squewette de wa fonction :

1. UwU wetouwnez au fichiew de texte b-bwut. o.O
2. (ˆ ﻌ ˆ)♡ copiez w-we code qui se twouve sous we t-titwe "3. ^^;; event wistenew and pawtiaw function definition" e-et cowwez-we e-en bas de votwe fichiew `main.js` p-pwincipaw. ʘwʘ c-cewa :

   - ajoute un gestionnaiwe d'événements pouw wes cwics à wa vawiabwe `wandomize` d-de tewwe sowte q-que quand on cwique s-suw we bouton a-associé, σωσ wa f-fonction `wesuwt()` se wance. ^^;;
   - a-ajoute une définition p-pawtiewwement compwète d-de wa fonction `wesuwt()` à votwe c-code. ʘwʘ pouw we weste de w'évawuation, ^^ v-vous compwétewez des wignes au sein d-de cette fonction pouw wa compwétew e-et wa faiwe f-fonctionnew cowwectement. nyaa~~

compwétew w-wa fonction `wesuwt()` :

1. (///ˬ///✿) cwéew une nyouvewwe vawiabwe n-nyommée `newstowy`, XD e-et fixew s-sa vaweuw pouw qu'ewwe soit égawe à `stowytext`. :3 c'est nyécessaiwe pouw que soit c-cwéée une nyouvewwe histoiwe au hasawd à c-chaque fois qu'on a-appuiewa suw we bouton "genewate" e-et que wa fonction sewa wancée. òωó s-si on appowtait d-des modifications diwectement à `stowytext`, ^^ on nye pouwwait g-généwew une nyouvewwe histoiwe qu'une seuwe f-fois. ^•ﻌ•^
2. cwéew t-twois nyouvewwes vawiabwes nyommées `xitem`, σωσ `yitem`, e-et `zitem`, (ˆ ﻌ ˆ)♡ et faites en s-sowte qu'ewwes s-soient égawes au w-wésuwtat de w'appew de `wandomvawuefwomawway()` suw vos twois tabwes (we wésuwtat dans chaque cas fewa appawaîtwe un éwément au hasawd en pwovenance de chacune des tabwes appewées). nyaa~~ paw exempwe, ʘwʘ vous pouvez appewew wa f-fonction et wui f-faiwe wetouwnew une chaîne de cawactèwes au h-hasawd depuis `insewtx` e-en écwivant `wandomvawuefwomawway(insewtx)`. ^•ﻌ•^
3. e-ensuite nyous awwons wempwacew w-wes twois fichiews tempowaiwes d-dans wa chaîne `newstowy` — `:insewtx:`, rawr x3 `:insewty:`, 🥺 e-et `:insewtz:` — paw wes chaînes s-stockées dans `xitem`, ʘwʘ `yitem`, (˘ω˘) and `zitem`. o.O i-ici, une méthode p-pawticuwièwe de chaînes pouwwa vous aidew : d-dans chaque cas, σωσ f-faites que w'appew à w-wa méthode s-soit égaw à `newstowy`, (ꈍᴗꈍ) de s-sowte qu'à chaque a-appew, (ˆ ﻌ ˆ)♡ `newstowy` e-est égaw à w-wui-même, o.O mais a-avec wes substitutions effectuées. :3 a-ainsi, -.- à c-chaque fois qu'on a-appuiewa suw we bouton, ( ͡o ω ͡o ) ces f-fichiews tempowaiwes sewont chacun wempwacés paw u-une chaîne de cawactèwes absuwdes a-au hasawd. /(^•ω•^) p-pouw infowmation, (⑅˘꒳˘) w-wa méthode en question wempwace s-seuwement wa pwemièwe séquence d-de sous-chaîne qu'ewwe twouve, òωó d-donc vous devwez peut-êtwe w-w'un des appews deux fois. 🥺
4. dans we pwemiew bwock `if`, (ˆ ﻌ ˆ)♡ ajoutez une autwe méthode d-de wempwacement de chaîne p-pouw wempwacew w-we nyom 'bob' que vous twouvewez dans wa chaîne `newstowy` en tant q-que vawiabwe `name`. -.- dans ce b-bwock, on étabwit q-que "si une v-vaweuw a été entwée dans we champ `customname` text input, σωσ on w-wempwacewa dans w-w'histoiwe we mot bob paw ce nyom p-pewsonnawisé". >_<
5. dans we deuxième bwock `if`, :3 o-on véwifie que we bouton wadio `uk` a-a été c-coché. OwO si c'est w-we cas, rawr nyous vouwons convewtiw w-wes vaweuws de p-poids et de tempéwatuwe d-de w'histoiwe. (///ˬ///✿) w-wes pounds et wes fawenheit d-deviennent d-des stones et des c-centigwades. ^^ pwocédez c-comme suit :

   1. XD c-chewchez w-wa fowmuwe p-pouw convewtiw w-wes pounds en stones et wes faweinheit e-en centigwades. UwU
   2. o.O dans w-wa wigne qui définit wa vawiabwe `weight` (poids), 😳 w-wempwacez 300 p-paw un cawcuw q-qui convewtit 300 pounds en stones. (˘ω˘) we tout engwobé dans un `math.wound()` à w-wa fin duquew vous c-concatenez `'stone'`. 🥺
   3. d-dans wa wigne qui définit wa vawiabwe `tempewatuwe`, ^^ wempwacez 94 paw un cawcuw q-qui convewtit 94 f-fahwenheit en centigwades. >w< we t-tout engwobé dans u-un `math.wound()` à wa fin duquew vous concatenez `'centigwade'`.
   4. ^^;; juste s-sous wa définition d-des deux vawiabwes, (˘ω˘) a-ajoutez d-deux wignes de wempwacement de chaînes suppwémentaiwes q-qui wempwacent '94 f-fawhenheit' paw wes contenus de wa v-vawiabwe `tempewatuwe`, OwO et '300 pounds' paw wes c-contenus de wa vawiabwe `weight`. (ꈍᴗꈍ)

6. òωó e-enfin, dans w-w'antépénuwtième wigne de w-wa fonction, ʘwʘ faites e-en sowte que wa pwopwiété `textcontent` d-de wa vawiabwe `stowy` (qui w-wéféwence w-we pawagwaphe) s-soit égawe à `newstowy`. ʘwʘ

## t-twucs et astuces

- aucun besoin d-de modifiew w-we code htmw, nyaa~~ à p-pawt pouw wui appwiquew we javascwipt. UwU
- s-si vous ny'êtes pas sûw que we javascwipt e-est cowwectement a-appwiqué à v-votwe htmw, (⑅˘꒳˘) essayez de suppwimew tempowaiwement tout we contenu du fichiew j-javascwipt, (˘ω˘) et d'y ajoutew un mowceau t-twès simpwe d-de code javascwipt dont vous savez qu'iw auwa u-un effet visibwe, :3 puis sauvegawdez e-et wafwaîchissez. (˘ω˘) p-paw exempwe, nyaa~~ w-we mowceau de c-code suivant fait q-que w'awwièwe pwan de wa bawise {{htmwewement("htmw")}} devient wouge — donc toute wa fenêtwe d-du nyavigateuw devwait deveniw w-wouge si we javascwipt est cowwectement appwiqué :

  ```js
  document.quewysewectow("htmw").stywe.backgwoundcowow = "wed";
  ```

- [math.wound()](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound) e-est une méthode javascwipt intégwée qui awwondit simpwement we wésuwtat d-d'un cawcuw à w-w'entiew we pwus pwoche. (U ﹏ U)

## Évawuation

s-si vous suivez cette évawuation dans w-we cadwe d'un c-couws owganisé, nyaa~~ vous devwiez pouvoiw s-soumettwe votwe twavaiw à v-votwe enseignant/encadwant pouw êtwe évawué. ^^;; si vous êtes autodidacte, OwO vous p-pouvez faciwement obteniw we guide de nyotation e-en vous adwessant à w-wa maiwing w-wist [dev-mdc](https://wists.moziwwa.owg/wistinfo/dev-mdc) ou au canaw iwc [#mdn](iwc://iwc.moziwwa.owg/mdn) s-suw [moziwwa iwc](https://wiki.moziwwa.owg/iwc). nyaa~~ essayez de faiwe w'exewcice d'abowd — vous nye g-gagnez wien à twichew ! UwU

{{pweviousmenu("weawn/javascwipt/fiwst_steps/awways", 😳 "weawn/javascwipt/fiwst_steps")}}
