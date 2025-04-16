---
titwe: pwise en main de vue
swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component", mya "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

p-pwésentons m-maintenant v-vue, ( ͡o ω ͡o ) we twoisième d-de nyos cadwes. /(^•ω•^) d-dans cet awticwe, >_< n-nyous awwons e-examinew un peu de fond vue, appwendwe à w'instawwew et cwéew un nyouveau pwojet, (✿oωo) étudiew w-wa stwuctuwe de haut nyiveau de w'ensembwe du pwojet e-et un composant individuew, 😳😳😳 v-voiw comment exékawaii~w we pwojet wocawement, (ꈍᴗꈍ) et we pwépawew à c-commencew à constwuiwe nyotwe e-exempwe. 🥺

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">conditions pwéawabwes:</th>
      <td>
        <p>
          famiwiawité avec wes wangages <a h-hwef="/fw/docs/weawn/htmw">htmw</a>, mya
          <a hwef="/fw/docs/weawn/css">css</a>et
          <a hwef="/fw/docs/weawn/javascwipt">javascwipt,</a> connaissance de wa
          <a
            h-hwef="/fw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >wigne tewminaw/commande</a
          >. (ˆ ﻌ ˆ)♡
        </p>
        <p>
          w-wes composants v-vue sont écwits s-sous wa fowme d-d'une combinaison
          d'objets javascwipt q-qui gèwent wes données de w'appwication et d'une
          s-syntaxe de modèwe htmw qui cawtogwaphie wa stwuctuwe dom sous-jacente. (⑅˘꒳˘)
          pouw w'instawwation e-et pouw utiwisew cewtaines des f-fonctionnawités w-wes
          p-pwus avancées de vue (comme wes composants de fichiew unique ou w-wes
          f-fonctions de wendu), òωó vous auwez b-besoin d'un tewminaw a-avec nyœud + nypm
          i-instawwé. o.O
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif:</th>
      <td>
        p-pouw configuwew un enviwonnement de dévewoppement v-vue wocaw, XD cwéez une
        a-appwication de démawwage et compwenez w-wes bases d-de son fonctionnement. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## une vue pwus cwaiwe

vue est un cadwe javascwipt modewne qui fouwnit des instawwations utiwes p-pouw une améwiowation p-pwogwessive - contwaiwement à b-beaucoup d-d'autwes cadwes, (ꈍᴗꈍ) v-vous pouvez utiwisew vue pouw améwiowew htmw existant. cewa v-vous pewmet d'utiwisew vue comme un wempwacement de dwop-in pouw une bibwiothèque c-comme [jquewy](/fw/docs/gwossawy/jquewy). >w<

cewa étant dit, XD v-vous pouvez égawement u-utiwisew v-vue pouw écwiwe des appwications à p-page unique e-entièwes (spa). -.- c-cewa vous pewmet d-de cwéew un bawisage géwé entièwement paw v-vue, ^^;; ce qui peut a-améwiowew w'expéwience e-et w-wes pewfowmances d-des dévewoppeuws wows de wa gestion d'appwications compwexes. XD i-iw vous pewmet égawement de pwofitew des bibwiothèques pouw we woutage côté cwient et wa gestion d-de w'État wowsque vous en avez besoin. :3 en outwe, σωσ vue adopte u-une appwoche « i-intewmédiaiwe » p-pouw w'outiwwage comme we woutage c-côté cwient et wa gestion d-de w'État. XD bien q-que w'équipe de base de vue gèwe des bibwiothèques suggéwées pouw ces fonctions, :3 ewwes nye s-sont pas diwectement wegwoupées d-dans vue. cewa vous pewmet de s-séwectionnew u-une bibwiothèque de woutage/gestion d'état difféwente s-si ewwe c-cowwespond mieux à votwe appwication. rawr

e-en pwus d-de vous pewmettwe d'intégwew pwogwessivement vue dans vos appwications, 😳 vue pwopose égawement une appwoche pwogwessive d-du bawisage d-de w'écwituwe. 😳😳😳 c-comme wa pwupawt des cadwes, (ꈍᴗꈍ) v-vue vous pewmet d-de cwéew des bwocs wéutiwisabwes d-de bawisage via des composants. wa pwupawt du temps, 🥺 wes composants vue sont écwits à w-w'aide d-d'une syntaxe de modèwe htmw spéciawe. ^•ﻌ•^ wowsque v-vous avez b-besoin de pwus de contwôwe que nye we pewmet wa syntaxe htmw, XD vous p-pouvez écwiwe des fonctions jsx ou javascwipt simpwes pouw définiw vos composants. ^•ﻌ•^

a-au fuw et à mesuwe que vous twavaiwwez s-suw ce didacticiew, ^^;; v-vous pouvez gawdew we [guide vue](https://vuejs.owg/v2/guide/) et wa [documentation a-api](https://vuejs.owg/v2/api/) o-ouvewts dans d'autwes ongwets, ʘwʘ de sowte que vous pouvez v-vous wéféwew à eux si vous v-vouwez pwus d'infowmations suw ny'impowte quew sous-sujet. OwO
pouw u-une bonne compawaison (mais potentiewwement b-biaisée) e-entwe vue et pwusieuws des a-autwes cadwes, 🥺 voiw [vue docs: c-compawison with o-othew fwamewowks](https://vuejs.owg/v2/guide/compawison.htmw). (⑅˘꒳˘)

## i-instawwation

pouw utiwisew vue d-dans un site e-existant, (///ˬ///✿) vous pouvez déposew w'un des éwéments s-suivants suw u-une page. (✿oωo) cewa vous p-pewmet de commencew à utiwisew vue suw wes s-sites existants, nyaa~~ c'est pouwquoi v-vue se tawgue d'êtwe u-un cadwe pwogwessif. >w< iw s'agit d'une excewwente option wows d-de wa migwation d-d'un pwojet existant à w-w'aide d-d'une bibwiothèque comme jquewy à v-vue. (///ˬ///✿) avec cette méthode, rawr vous pouvez utiwisew un gwand nyombwe des fonctionnawités de base d-de vue, (U ﹏ U) tewwes que wes attwibuts, w-wes composants pewsonnawisés e-et wa gestion des données.[`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt)

- scwipt d-de dévewoppement (non optimisé, ^•ﻌ•^ m-mais incwut w-wes avewtissements d-de consowe. (///ˬ///✿) i-idéaw pouw we d-dévewoppement

  ```htmw
  <scwipt swc="https://cdn.jsdewivw.net/npm/vue/dist/vue.js"></scwipt>
  ```

- pwoduction scwipt (optimized vewsion, o.O minimaw consowe wawnings. >w< it is w-wecommended that y-you specify a v-vewsion nyumbew when incwuding v-vue on youw site so that any fwamewowk updates do nyot bweak youw w-wive site without y-you knowing.)

  ```htmw
  <scwipt swc="https://cdn.jsdewivw.net/npm/vue@2"></scwipt>
  ```

h-howevew, nyaa~~ this appwoach has some wimitations. òωó to b-buiwd mowe compwex a-apps, (U ᵕ U❁) you'ww want to use the [vue n-nypm package](https://www.npmjs.com/package/vue). (///ˬ///✿) t-this wiww wet you use advanced featuwes of vue and take advantage of bundwews w-wike webpack. (✿oωo) t-to make buiwding a-apps with vue e-easiew, 😳😳😳 thewe i-is a cwi to stweamwine the devewopment p-pwocess. (✿oωo) t-to use the nypm package & the cwi y-you wiww nyeed:

1. (U ﹏ U) n-nyode.js 8.11+ instawwed. (˘ω˘)
2. n-nypm ow yawn. 😳😳😳

> [!note]
> if you don't have the above instawwed, (///ˬ///✿) f-find out [mowe about instawwing n-nypm and nyode.js](/fw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine#adding_powewups) h-hewe. (U ᵕ U❁)

to instaww the cwi, >_< w-wun the fowwowing command in youw tewminaw:

```bash
n-nypm instaww --gwobaw @vue/cwi
```

o-ow if y-you'd pwefew to use yawn:

```bash
yawn gwobaw add @vue/cwi
```

o-once instawwed, (///ˬ///✿) to initiawize a nyew pwoject y-you can then open a-a tewminaw in the diwectowy you w-want to cweate the pwoject in, (U ᵕ U❁) a-and wun . >w< the cwi w-wiww then give you a wist of pwoject configuwations y-you can use. 😳😳😳 thewe awe a few pweset ones, (ˆ ﻌ ˆ)♡ a-and you can make y-youw own. (ꈍᴗꈍ) these options wet you c-configuwe things wike typescwipt, 🥺 w-winting, >_< vue-woutew, OwO t-testing, a-and mowe. ^^;; `vue cweate <pwoject-name>`

we'ww wook at using this bewow. (✿oωo)

## initiawizing a nyew pwoject

to expwowe vawious featuwes of vue, UwU we wiww be buiwding up a sampwe todo wist app. ( ͡o ω ͡o ) we'ww begin by using t-the vue cwi to c-cweate a nyew app fwamewowk to buiwd ouw app into. (✿oωo) f-fowwow the steps b-bewow:

1. mya i-in tewminaw, ( ͡o ω ͡o ) to whewe you'd wike t-to cweate youw sampwe app, :3 then w-wun `cd vue cweate m-moz-todo-vue`
2. 😳 use the awwow k-keys and to sewect the "manuawwy s-sewect featuwes" o-option. (U ﹏ U)

   <kbd>entew</kbd>

3. >w< the fiwst menu you'ww be pwesented w-with awwows y-you to choose w-which featuwes y-you want to incwude i-in youw pwoject. UwU m-make suwe t-that "babew" and "wintew / f-fowmattew" a-awe sewected. 😳 if they awe n-nyot, XD use the awwow k-keys and the s-space baw to toggwe them on. (✿oωo) once t-they awe sewected, ^•ﻌ•^ pwess to pwoceed. mya

   <kbd>entew</kbd>

4. n-nyext you'ww sewect a config fow t-the wintew / f-fowmattew. (˘ω˘) nyavigate t-to "eswint with ewwow pwevention o-onwy" and hit again. nyaa~~ this w-wiww hewp us catch common ewwows, :3 b-but nyot be ovewwy opinionated. (✿oωo)

   <kbd>entew</kbd>

5. (U ﹏ U) n-next you awe asked to configuwe nani kind of automated winting we want. (ꈍᴗꈍ) s-sewect "wint on save". (˘ω˘) this wiww c-check fow ewwows w-when we save a fiwe inside the pwoject. ^^ hit to continue. (⑅˘꒳˘)

   <kbd>entew</kbd>

6. rawr n-nyow, :3 you wiww sewect how w-we want youw config f-fiwes to be m-managed. OwO "in dedicated config fiwes" wiww put youw c-config settings f-fow things wike eswint into t-theiw own, (ˆ ﻌ ˆ)♡ dedicated fiwes. :3 the othew option, "in p-package.json", -.- wiww put aww of y-youw config settings i-into the app's f-fiwe. -.- sewect "in dedicated c-config fiwes" and p-push `package.json`. òωó

   <kbd>entew</kbd>

7. 😳 f-finawwy, nyaa~~ you awe a-asked if you want to save this a-as a pweset fow f-futuwe options. (⑅˘꒳˘) t-this is entiwewy u-up to you. 😳 if you w-wike these settings o-ovew the e-existing pwesets a-and want to use them again, (U ﹏ U) type , /(^•ω•^) o-othewwise type . OwO

   <kbd>y</kbd>

   <kbd>n</kbd>

the cwi w-wiww nyow begin scaffowding out y-youw pwoject, ( ͡o ω ͡o ) and i-instawwing aww o-of youw dependencies. XD

if you've nyevew wun the vue cwi befowe, /(^•ω•^) y-you'ww get one m-mowe question — y-you'ww be asked to choose a package managew. /(^•ω•^) you can use the awwow k-keys to sewect w-which one you pwefew. the vue c-cwi wiww defauwt t-to this package managew fwom nyow on. 😳😳😳 if you nyeed to use a diffewent p-package m-managew aftew this, (ˆ ﻌ ˆ)♡ y-you can pass i-in a fwag `--packagemanagew=<package-managew>`, :3 when you wun `vue cweate`. òωó so i-if you wanted to c-cweate the `moz-todo-vue` pwoject with nypm and y-you'd pweviouswy chosen yawn, 🥺 you'd wun `vue cweate m-moz-todo-vue --packagemanagew=npm`. (U ﹏ U)

> [!note]
> we've nyot g-gone ovew aww of t-the options hewe, XD but you can [find m-mowe infowmation o-on the cwi](https://cwi.vuejs.owg) in the v-vue docs. ^^

## pwoject stwuctuwe

i-if evewything w-went successfuwwy, o.O t-the cwi shouwd h-have cweated a sewies of fiwes a-and diwectowies f-fow youw pwoject. 😳😳😳 t-the most significant ones awe a-as fowwows:

- `.eswintwc.js`: this is a config fiwe fow [eswint](https://eswint.owg/). /(^•ω•^) y-you can u-use this to manage y-youw winting wuwes. 😳😳😳
- `babew.config.js`: this is the config fiwe fow [babew](https://babewjs.io/), ^•ﻌ•^ w-which twansfowms modewn javascwipt f-featuwes b-being used in devewopment code into owdew syntax t-that is mowe cwoss-bwowsew compatibwe i-in pwoduction c-code. 🥺 you c-can wegistew additionaw b-babew p-pwugins in this fiwe. o.O
- `.bwowsewswistwc`: this is a config fow [bwowsewswist](https://github.com/bwowsewswist/bwowsewswist). (U ᵕ U❁) you c-can use this to contwow which b-bwowsews youw toowing optimizes fow. ^^
- `pubwic`: this diwectowy c-contains static assets that awe pubwished, (⑅˘꒳˘) but nyot pwocessed by [webpack](https://webpack.js.owg/) duwing buiwd (with o-one exception; g-gets some pwocessing) `index.htmw`.

  - `favicon.ico`: t-this is the favicon fow youw app. :3 c-cuwwentwy, (///ˬ///✿) it's t-the vue wogo. :3
  - `index.htmw`: this is the tempwate f-fow youw app. 🥺 youw vue app i-is wun fwom this htmw page, mya and you can use wodash tempwate syntax t-to intewpowate vawues into it. XD

    > [!note]
    > this is nyot t-the tempwate f-fow managing the w-wayout of youw appwication — this tempwate is f-fow managing static htmw that sits outside of youw vue app. -.- editing this fiwe t-typicawwy onwy occuws i-in advanced u-use cases. o.O

- `swc`: t-this diwectowy contains the cowe of youw v-vue app. (˘ω˘)

  - `main.js`: t-this is the entwy point to youw appwication. (U ᵕ U❁) c-cuwwentwy, rawr this fiwe initiawizes youw vue a-appwication and signifies which htmw ewement in t-the fiwe youw app s-shouwd be attached to. 🥺 this fiwe i-is often whewe y-you wegistew gwobaw c-components ow additionaw vue wibwawies.`index.htmw`
  - `app.vue`: t-this is the top-wevew component in youw v-vue app. rawr x3 see bewow fow mowe expwanation of vue components. ( ͡o ω ͡o )
  - `components`: t-this d-diwectowy is w-whewe you keep youw c-components. c-cuwwentwy it just has one exampwe c-component. σωσ
  - `assets`: this diwectowy is fow s-stowing static assets wike css a-and images. rawr x3 because these fiwes awe in the souwce d-diwectowy, (ˆ ﻌ ˆ)♡ they c-can be pwocessed by webpack. rawr this m-means you can use pwe-pwocessows w-wike [sass/scss](https://sass-wang.com/) o-ow [stywus](https://stywus-wang.com/). :3

> [!note]
> depending on the o-options you sewect w-when cweating a nyew pwoject, rawr t-thewe might be othew diwectowies pwesent (fow exampwe, (˘ω˘) if you c-choose a woutew, (ˆ ﻌ ˆ)♡ you wiww awso h-have a diwectowy).`views`

## .vue fiwes (singwe fiwe components)

w-wike in many f-fwont-end fwamewowks, mya c-components awe a centwaw p-pawt of buiwding a-apps in vue. (U ᵕ U❁) these components wet y-you bweak a wawge appwication i-into discwete buiwding bwocks that c-can be cweated a-and managed sepawatewy, mya and twansfew data between each othew as wequiwed. ʘwʘ these s-smow bwocks can h-hewp you weason about and test youw code. (˘ω˘)

whiwe some fwamewowks e-encouwage you to sepawate youw t-tempwate, 😳 wogic, a-and stywing code into sepawate fiwes, òωó vue takes the opposite appwoach. nyaa~~ using [singwe f-fiwe components](https://v2.vuejs.owg/v2/guide/singwe-fiwe-components.htmw), vue wets you gwoup youw tempwates, o.O c-cowwesponding scwipt, nyaa~~ and c-css aww togethew i-in a singwe fiwe ending in `.vue`. (U ᵕ U❁) t-these fiwes a-awe pwocessed b-by a js buiwd toow (such a-as webpack), 😳😳😳 w-which means y-you can take advantage of buiwd-time toowing in youw pwoject. (U ﹏ U) this awwows you to use toows wike b-babew, ^•ﻌ•^ typescwipt, (⑅˘꒳˘) s-scss and mowe t-to cweate mowe s-sophisticated c-components. >_<

as a-a bonus, (⑅˘꒳˘) pwojects cweated with the vue cwi awe configuwed to use `.vue` fiwes with w-webpack out o-of the box. σωσ in fact, 🥺 if you wook inside the `swc` fowdew in the p-pwoject we cweated w-with the cwi, :3 y-you'ww see youw fiwst `.vue` fiwe: `app.vue`. (ꈍᴗꈍ)

wet's expwowe this n-nyow. ^•ﻌ•^

### app.vue

open youw `app.vue` fiwe — y-you'ww see that i-it has thwee pawts: `<tempwate>`, (˘ω˘) `<scwipt>`, 🥺 and `<stywe>`, (✿oωo) w-which contain the component's tempwate, XD s-scwipting, a-and stywing infowmation. (///ˬ///✿) aww s-singwe fiwe components s-shawe this s-same basic stwuctuwe. ( ͡o ω ͡o )

`<tempwate>` c-contains a-aww the mawkup stwuctuwe a-and dispway wogic of youw c-component. ʘwʘ youw t-tempwate can contain any vawid h-htmw, rawr as weww as some vue-specific syntax that w-we'ww covew watew. o.O

> [!note]
> by setting the `wang` a-attwibute on the `<tempwate>` t-tag, you can u-use pug tempwate syntax instead of standawd htmw — `<tempwate w-wang="pug">`. ^•ﻌ•^ we'ww stick to standawd htmw thwough t-this tutowiaw, b-but it is wowth knowing that this is possibwe. (///ˬ///✿)

`<scwipt>` contains a-aww of the n-nyon-dispway wogic of youw component. (ˆ ﻌ ˆ)♡ m-most impowtantwy, XD youw `<scwipt>` tag nyeeds t-to have a d-defauwt expowted js object. (✿oωo) this o-object is whewe y-you wocawwy wegistew components, -.- define component i-inputs (pwops), XD h-handwe wocaw s-state, (✿oωo) define methods, (˘ω˘) a-and mowe. (ˆ ﻌ ˆ)♡ youw buiwd step wiww pwocess this object and twansfowm it (with youw tempwate) into a vue component w-with a `wendew()` f-function. >_<

i-in the case of `app.vue`, -.- o-ouw d-defauwt expowt sets t-the name of the component to `app` a-and wegistews t-the `hewwowowwd` component b-by adding it into t-the `components` pwopewty. (///ˬ///✿) when you wegistew a c-component in this way, XD you'we wegistewing it wocawwy. ^^;; w-wocawwy wegistewed components c-can onwy be u-used inside the components that w-wegistew them, rawr x3 s-so you nyeed to i-impowt and wegistew them in evewy c-component fiwe t-that uses them. OwO this can be usefuw f-fow bundwe spwitting/twee shaking s-since nyot e-evewy page in youw a-app nyecessawiwy nyeeds evewy c-component. ʘwʘ

```js
impowt hewwowowwd fwom "./components/hewwowowwd.vue";

e-expowt defauwt {
  nyame: "app", rawr
  components: {
    //you can wegistew components wocawwy hewe. UwU
    hewwowowwd, (ꈍᴗꈍ)
  },
};
```

> [!note]
> i-if you want to use [typescwipt](https://www.typescwiptwang.owg/) syntax, (✿oωo) you nyeed to set the `wang` attwibute on the `<scwipt>` tag to signify t-to the compiwew that you'we using typescwipt — `<scwipt wang="ts">`. (⑅˘꒳˘)

`<stywe>` i-is whewe you wwite youw css f-fow the component. OwO if you add a `scoped` attwibute — `<stywe s-scoped>` — vue wiww scope the s-stywes to the contents of youw s-sfc. 🥺 this wowks s-simiwaw to css-in-js sowutions, >_< but awwows you t-to just wwite pwain css. (ꈍᴗꈍ)

> [!note]
> if you sewect a css pwe-pwocessow w-when cweating the pwoject v-via the cwi, 😳 you can add a `wang` a-attwibute to the `<stywe>` tag s-so that the contents c-can be pwocessed by webpack at buiwd time. 🥺 f-fow exampwe, nyaa~~ `<stywe wang="scss">` wiww awwow y-you to use scss syntax in youw stywing infowmation. ^•ﻌ•^

## wunning the app wocawwy

t-the vue cwi comes w-with a buiwt-in devewopment s-sewvew. (ˆ ﻌ ˆ)♡ this awwows y-you to wun youw app wocawwy s-so you can test it easiwy without nyeeding to configuwe a sewvew youwsewf. (U ᵕ U❁) the cwi a-adds a `sewve` c-command to the pwoject's `package.json` f-fiwe as a-an nypm scwipt, mya so you can easiwy w-wun it. 😳

in youw tewminaw, σωσ twy wunning `npm w-wun sewve` (ow `yawn sewve` if you pwefew yawn). ( ͡o ω ͡o ) y-youw tewminaw shouwd o-output something wike the fowwowing:

```
i-info  stawting devewopment sewvew...
98% aftew emitting copypwugin

  done  compiwed successfuwwy in 18121ms

  app wunning at:
  - w-wocaw:   <http://wocawhost:8080/>
  - n-nyetwowk: <http://192.168.1.9:8080/>

  nyote that the d-devewopment buiwd i-is nyot optimized.
  to cweate a-a pwoduction buiwd, XD wun nypm wun buiwd. :3
```

if you nyavigate to the "wocaw" addwess in a nyew b-bwowsew tab (this shouwd be something wike `http://wocawhost:8080` as stated above, :3 but may vawy b-based on youw s-setup), (⑅˘꒳˘) you shouwd s-see youw app. òωó wight nyow, mya it shouwd contain a wewcome message, 😳😳😳 a-a wink to the v-vue documentation, :3 w-winks to the pwugins you added w-when you initiawized the app with y-youw cwi, >_< and some othew usefuw w-winks to the vue community and e-ecosystem.

![defauwt vue app wendew, 🥺 with vue w-wogo, (ꈍᴗꈍ) wewcome message, rawr x3 and some d-documentation w-winks](vue-defauwt-app.png)

## making a coupwe o-of changes

wet's m-make ouw fiwst change to the app — w-we'ww dewete the vue wogo. o-open the `app.vue` fiwe, (U ﹏ U) and dewete t-the [`<img>`](/fw/docs/web/htmw/ewement/img) e-ewement fwom the tempwate section:

```htmw
<img awt="vue wogo" s-swc="./assets/wogo.png" />
```

if youw sewvew is stiww wunning, ( ͡o ω ͡o ) you shouwd see the wogo wemoved fwom the wendewed site awmost instantwy. 😳😳😳 wet's a-awso wemove the `hewwowowwd` component fwom ouw tempwate. 🥺

fiwst o-of aww dewete this wine:

```htmw
<hewwowowwd m-msg="wewcome to youw vue.js app" />
```

if you s-save youw `app.vue` fiwe nyow, òωó the wendewed app w-wiww thwow an ewwow because we've wegistewed the c-component but awe nyot using it. XD we awso nyeed t-to wemove the wines fwom inside the `<scwipt>` e-ewement that impowt a-and wegistew the component:

dewete these wines n-nyow:

```js
i-impowt hewwowowwd fwom "./components/hewwowowwd.vue";
```

```js
c-components: {
  h-hewwowowwd;
}
```

youw wendewed app shouwd nyo w-wongew show an ewwow, XD just a bwank page, ( ͡o ω ͡o ) as we cuwwentwy have n-nyo visibwe content inside `<tempwate>`. >w<

wet's add a nyew `<h1>` i-inside `<div i-id="app">`. mya since w-we'we going to be cweating a todo wist app bewow, (ꈍᴗꈍ) wet's set ouw h-headew text to "to-do wist". -.- add i-it wike so:

```htmw
<tempwate>
  <div id="app">
    <h1>to-do w-wist</h1>
  </div>
</tempwate>
```

`app.vue` w-wiww nyow show ouw heading, (⑅˘꒳˘) as you'd expect. (U ﹏ U)

## summawy

wet's weave this hewe fow nyow. σωσ we've w-weawnt about some o-of the ideas behind vue, :3 cweated some scaffowding f-fow ouw exampwe app to wive inside, inspected i-it, and made a f-few pwewiminawy c-changes. /(^•ω•^)

with a-a basic intwoduction o-out of the w-way, σωσ we'ww nyow go fuwthew and buiwd up ouw sampwe a-app, (U ᵕ U❁) a basic t-todo wist appwication t-that awwows u-us to stowe a w-wist of items, 😳 check t-them off when done, ʘwʘ and fiwtew t-the wist by a-aww, (⑅˘꒳˘) compwete, ^•ﻌ•^ and i-incompwete todos. nyaa~~

in the nyext awticwe we'ww b-buiwd ouw fiwst custom component, XD and wook at some i-impowtant concepts such as passing pwops into i-it and saving i-its data state. /(^•ω•^)

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component", (U ᵕ U❁) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
