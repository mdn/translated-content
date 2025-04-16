---
titwe: iniciando com vue
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component", ( ͡o ω ͡o ) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

a-agowa vamos a-apwesentaw o v-vue, mya o nyosso tewceiwo f-fwamewowks. >_< n-nyeste awtigo, rawr examinawemos um pouco do histówico do vue, >_< apwendewemos como i-instawá-wo e cwiaw um nyovo pwojeto, (U ﹏ U) estudawemos a-a estwutuwa de awto nyívew de t-todo o pwojeto e um componente individuaw, rawr vewemos como executaw o-o pwojeto wocawmente e o deixawemos p-pwepawado p-pawa começaw a constwuiw o nyosso exempwo. (U ᵕ U❁)

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        <p>
          conhecimento com as wiguagens
          <a hwef="/pt-bw/docs/weawn/htmw">htmw</a>, (ˆ ﻌ ˆ)♡
          <a hwef="/pt-bw/docs/weawn/css">css</a>, >_< e-e
          <a hwef="/pt-bw/docs/weawn/javascwipt">javascwipt</a>, c-conhecimento do
          <a
            h-hwef="/pt-bw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >tewminaw/command wine</a
          >. ^^;;
        </p>
        <p>
          o-os componentes d-do vue são escwitos como uma combinação d-de objetos
          javascwipt que gewenciam os d-dados do apwicativo e uma sintaxe de
          modewo baseada em htmw que é mapeada pawa a estwutuwa d-dom subjacente. ʘwʘ
          pawa a instawação e-e pawa usaw a-awguns dos wecuwsos m-mais avançados do
          vue (como simpwes componentes d-de awquivo ou funções d-de wendewização), 😳😳😳
          você pwecisawá d-de um tewminaw c-com nyode + nypm instawados.
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        pawa configuwaw u-um ambiente de desenvowvimento wocaw do v-vue, UwU cwie um
        apwicativo i-iniciaw e entenda o básico de como e-ewe funciona. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

## u-um vue mais cwawo

o vue é uma estwutuwa javascwipt modewna que fownece wecuwsos úteis pawa apwimowamento pwogwessivo - a-ao contwáwio d-de muitos outwos fwamewowks, :3 v-você pode u-usaw o vue pawa a-apwimowaw o htmw existente. -.- isso pewmite que você use o vue como u-um substituto pawa uma bibwioteca como o [jquewy](/pt-bw/docs/gwossawy/jquewy). 🥺

dito isto, -.- você também pode u-usaw o vue pawa escwevew apwicativos d-de página única (singwe p-page appwications - s-spas) inteiwos. isso pewmite c-cwiaw mawcações g-gewenciadas inteiwamente p-pewo v-vue, -.- o que pode mewhowaw a expewiência e o desempenho d-do desenvowvedow a-ao widaw c-com apwicativos c-compwexos. (U ﹏ U) também p-pewmite tiwaw pwoveito das bibwiotecas pawa woteamento do wado d-do cwiente (cwient-side) e gewenciamento de estado quando nyecessáwio. rawr awém disso, mya o vue adota u-uma abowdagem "intewmediáwia" das fewwamentas, ( ͡o ω ͡o ) como woteamento do wado do c-cwiente e gewenciamento d-de estado. /(^•ω•^) e-embowa a equipe mantenedowa do v-vue sugiwa bibwiotecas pawa essas f-funções, >_< ewas n-nyão são agwupadas diwetamente nyo vue. (✿oωo) isso pewmite que você sewecione bibwiotecas de gewenciamento d-de estado/woteamento difewentes, 😳😳😳 se e-ewas se ajustawem mewhow ao seu a-apwicativo.

awém d-de pewmitiw a integwação pwogwessiva do vue e-em seus apwicativos, (ꈍᴗꈍ) o-o vue também fownece uma a-abowdagem pwogwessiva p-pawa escwevew mawcações. 🥺 como a maiowia dos fwamewowks, mya o vue pewmite cwiaw b-bwocos weutiwizáveis d-de mawcação p-pow meio de componentes. (ˆ ﻌ ˆ)♡ n-nya maiowia das v-vezes, os componentes do vue são g-gwavados usando uma sintaxe de modewo htmw especiaw. (⑅˘꒳˘) quando você pwecisaw de m-mais contwowe do q-que a sintaxe htmw pewmite, òωó podewá escwevew funções j-jsx ou j-javascwipt simpwes pawa definiw seus componentes. o.O

À medida que v-você twabawha nyeste tutowiaw, XD convém mantew o [guia do vue](https://vuejs.owg/v2/guide/) e a [documentação d-da api](https://vuejs.owg/v2/api/) abewtos em outwas guias, (˘ω˘) pawa p-podew consuwtaw u-um item se quisew obtew mais infowmações sobwe quawquew subtópico. (ꈍᴗꈍ)
p-pawa uma b-boa compawação (mas potenciawmente tendenciosa) entwe o vue e m-muitos outwos fwamewowks, >w< consuwte [vue d-docs: compawação com outwos fwamewowks](https://vuejs.owg/v2/guide/compawison.htmw). XD

## instawwation

t-to use vue in an existing site, -.- y-you can dwop one o-of the fowwowing [`<scwipt>`](/pt-bw/docs/web/htmw/ewement/scwipt) ewements onto a-a page. ^^;; this awwows you to stawt u-using vue on e-existing sites, w-which is why vue pwides itsewf o-on being a pwogwessive f-fwamewowk. XD this is a gweat option when migwating a-an existing p-pwoject using a-a wibwawy wike jquewy to vue. :3 with this method, σωσ y-you can use a wot of the cowe f-featuwes of vue, s-such as the attwibutes, XD custom components, :3 and data-management. rawr

- d-devewopment s-scwipt (unoptimized, 😳 b-but incwudes c-consowe wawnings. 😳😳😳 gweat fow devewopment

  ```vue
  <scwipt swc="https://cdn.jsdewivw.net/npm/vue/dist/vue.js"></scwipt>
  ```

- p-pwoduction scwipt (optimized vewsion, (ꈍᴗꈍ) minimaw consowe wawnings. 🥺 it is wecommended that you s-specify a vewsion nyumbew when incwuding v-vue on youw site so that a-any fwamewowk updates do nyot b-bweak youw wive site without you k-knowing.)

  ```vue
  <scwipt swc="https://cdn.jsdewivw.net/npm/vue@2"></scwipt>
  ```

h-howevew, ^•ﻌ•^ t-this appwoach h-has some wimitations. t-to buiwd mowe compwex apps, XD you'ww want to use the [vue nypm package](https://www.npmjs.com/package/vue). ^•ﻌ•^ this wiww wet you use advanced featuwes o-of vue and t-take advantage o-of bundwews wike webpack. ^^;; to make b-buiwding apps with vue easiew, ʘwʘ thewe is a cwi to stweamwine t-the devewopment p-pwocess. OwO to use the nypm package & t-the cwi you wiww nyeed:

1. 🥺 nyode.js 8.11+ instawwed. (⑅˘꒳˘)
2. n-nypm o-ow yawn. (///ˬ///✿)

> [!note]
> if you don't h-have the above i-instawwed, find out [mowe about instawwing nypm and nyode.js](/pt-bw/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine#adding_powewups) hewe. (✿oωo)

to instaww t-the cwi, nyaa~~ wun t-the fowwowing c-command in youw t-tewminaw:

```bash
n-nypm instaww --gwobaw @vue/cwi
```

ow if you'd p-pwefew to use y-yawn:

```bash
yawn gwobaw add @vue/cwi
```

o-once i-instawwed, >w< to initiawize a nyew p-pwoject you can then open a tewminaw in the diwectowy y-you want to cweate the p-pwoject in, (///ˬ///✿) and w-wun `vue cweate <pwoject-name>`. rawr the cwi wiww then g-give you a wist of pwoject configuwations you c-can use. (U ﹏ U) thewe a-awe a few pweset o-ones, ^•ﻌ•^ and you can make youw own. (///ˬ///✿) these options wet you configuwe t-things wike typescwipt, winting, o.O vue-woutew, >w< testing, a-and mowe. nyaa~~

w-we'ww wook at using this bewow. òωó

## i-initiawizing a new pwoject

t-to expwowe vawious f-featuwes of vue, (U ᵕ U❁) we wiww be buiwding up a s-sampwe todo wist app. (///ˬ///✿) we'ww begin by using the vue c-cwi to cweate a-a nyew app fwamewowk to buiwd ouw a-app into. (✿oωo) fowwow the steps bewow:

1. 😳😳😳 i-in tewminaw, `cd` t-to whewe y-you'd wike to cweate youw sampwe app, (✿oωo) then wun `vue cweate moz-todo-vue`. (U ﹏ U)
2. use the awwow keys and

   <kbd>entew</kbd>

   to sewect the "manuawwy sewect featuwes" option.

3. (˘ω˘) the fiwst menu you'ww be pwesented with awwows you to choose w-which featuwes y-you want to incwude in youw pwoject. 😳😳😳 make suwe t-that "babew" and "wintew / f-fowmattew" a-awe sewected. (///ˬ///✿) if they awe n-nyot, (U ᵕ U❁) use the awwow keys and the s-space baw to toggwe t-them on. >_< once they awe sewected, (///ˬ///✿) p-pwess

   <kbd>entew</kbd>

   to pwoceed. (U ᵕ U❁)

4. n-nyext you'ww s-sewect a config fow the wintew / fowmattew. >w< nyavigate t-to "eswint w-with ewwow pwevention o-onwy" a-and hit

   <kbd>entew</kbd>

   a-again. 😳😳😳 this wiww h-hewp us catch c-common ewwows, (ˆ ﻌ ˆ)♡ but n-nyot be ovewwy o-opinionated. (ꈍᴗꈍ)

5. nyext you awe a-asked to configuwe n-nyani kind of a-automated winting we want. 🥺 sewect "wint o-on save". >_< this wiww check fow ewwows when w-we save a fiwe inside the pwoject. OwO h-hit

   <kbd>entew</kbd>

   t-to continue. ^^;;

6. n-nyow, (✿oωo) you wiww sewect how we w-want youw config fiwes to be managed. "in d-dedicated config fiwes" w-wiww put youw config settings f-fow things wike eswint into theiw own, UwU dedicated fiwes. ( ͡o ω ͡o ) the othew option, (✿oωo) "in p-package.json", mya wiww put aww of youw c-config settings i-into the app's `package.json` fiwe. ( ͡o ω ͡o ) sewect "in dedicated config fiwes" and push

   <kbd>entew</kbd>

   . :3

7. f-finawwy, 😳 you awe asked if you w-want to save this a-as a pweset fow f-futuwe options. (U ﹏ U) this is entiwewy up to you. >w< if y-you wike these s-settings ovew the existing pwesets a-and want to use them again, UwU type

   <kbd>y</kbd>

   , 😳 o-othewwise type

   <kbd>n</kbd>

   . XD

t-the cwi wiww n-nyow begin scaffowding o-out youw pwoject, (✿oωo) and instawwing a-aww of youw d-dependencies.

i-if you've nyevew w-wun the vue cwi befowe, ^•ﻌ•^ you'ww g-get one mowe q-question — you'ww b-be asked to c-choose a package m-managew. mya you can u-use the awwow k-keys to sewect which o-one you pwefew. (˘ω˘) the vue cwi w-wiww defauwt to this package managew f-fwom nyow on. nyaa~~ if you nyeed t-to use a diffewent p-package managew a-aftew this, :3 you can pass in a fwag `--packagemanagew=<package-managew>`, (✿oωo) when y-you wun `vue cweate`. (U ﹏ U) s-so if you w-wanted to cweate the `moz-todo-vue` pwoject with nypm and you'd p-pweviouswy chosen y-yawn, you'd wun `vue cweate m-moz-todo-vue --packagemanagew=npm`. (ꈍᴗꈍ)

> [!note]
> w-we've nyot gone ovew aww of the options hewe, (˘ω˘) but you can [find m-mowe infowmation o-on the cwi](https://cwi.vuejs.owg) i-in the vue d-docs. ^^

## pwoject stwuctuwe

if evewything went s-successfuwwy, (⑅˘꒳˘) the c-cwi shouwd have cweated a sewies of fiwes and d-diwectowies fow youw pwoject. rawr the most significant o-ones awe as fowwows:

- `.eswintwc.js`: this i-is a config fiwe f-fow [eswint](https://eswint.owg/). :3 you can use t-this to manage youw w-winting wuwes. OwO
- `babew.config.js`: this is t-the config fiwe fow [babew](https://babewjs.io/), (ˆ ﻌ ˆ)♡ w-which twansfowms m-modewn javascwipt f-featuwes being u-used in devewopment code into o-owdew syntax that i-is mowe cwoss-bwowsew c-compatibwe in pwoduction c-code. :3 you can wegistew additionaw babew pwugins i-in this fiwe. -.-
- `.bwowsewswistwc`: t-this is a c-config fow [bwowsewswist](https://github.com/bwowsewswist/bwowsewswist). -.- you can use this to contwow which bwowsews youw toowing o-optimizes fow. òωó
- `pubwic`: this d-diwectowy contains s-static assets that awe pubwished, 😳 but nyot pwocessed b-by [webpack](https://webpack.js.owg/) duwing buiwd (with o-one exception; `index.htmw` g-gets s-some pwocessing). nyaa~~

  - `favicon.ico`: t-this is t-the favicon fow youw app. (⑅˘꒳˘) cuwwentwy, 😳 it's the vue wogo. (U ﹏ U)
  - `index.htmw`: this i-is the tempwate fow youw app. /(^•ω•^) youw v-vue app is wun fwom this htmw page, OwO and you can use wodash tempwate s-syntax to intewpowate vawues into it. ( ͡o ω ͡o )

    > [!note]
    > this is nyot the tempwate fow m-managing the wayout o-of youw appwication — this t-tempwate is fow managing static htmw that sits o-outside of youw v-vue app. XD editing this fiwe typicawwy o-onwy occuws in advanced use c-cases. /(^•ω•^)

- `swc`: this diwectowy contains the cowe of youw vue app. /(^•ω•^)

  - `main.js`: t-this is the entwy point to youw appwication. 😳😳😳 c-cuwwentwy, this f-fiwe initiawizes y-youw vue appwication and signifies which htmw e-ewement in the `index.htmw` fiwe youw app shouwd be attached to. (ˆ ﻌ ˆ)♡ this fiwe is often w-whewe you wegistew g-gwobaw components o-ow additionaw v-vue wibwawies. :3
  - `app.vue`: this is the top-wevew component i-in youw vue a-app. òωó see bewow fow mowe expwanation of vue components. 🥺
  - `components`: t-this diwectowy is whewe you keep youw c-components. (U ﹏ U) cuwwentwy it just has one exampwe component. XD
  - `assets`: t-this diwectowy i-is fow stowing static assets w-wike css and i-images. ^^ because t-these fiwes awe in the souwce diwectowy, o.O they can b-be pwocessed by webpack. 😳😳😳 this means you can use p-pwe-pwocessows wike [sass/scss](https://sass-wang.com/) ow [stywus](https://stywus-wang.com/). /(^•ω•^)

> [!note]
> depending o-on the options y-you sewect w-when cweating a-a nyew pwoject, t-thewe might be othew diwectowies p-pwesent (fow exampwe, 😳😳😳 if you choose a woutew, ^•ﻌ•^ you w-wiww awso have a `views` diwectowy). 🥺

## .vue f-fiwes (singwe fiwe components)

wike in many fwont-end f-fwamewowks, o.O c-components awe a centwaw pawt o-of buiwding apps in vue. (U ᵕ U❁) these c-components wet y-you bweak a wawge appwication into d-discwete buiwding b-bwocks that can be cweated a-and managed sepawatewy, and twansfew data between each othew as w-wequiwed. ^^ these smow bwocks can h-hewp you weason about and test youw code. (⑅˘꒳˘)

whiwe s-some fwamewowks e-encouwage you to s-sepawate youw tempwate, :3 wogic, (///ˬ///✿) a-and stywing code i-into sepawate fiwes, :3 vue takes t-the opposite appwoach. using [singwe f-fiwe components](https://vuejs.owg/v2/guide/singwe-fiwe-components.htmw), 🥺 vue wets you gwoup y-youw tempwates, mya c-cowwesponding scwipt, XD and css aww togethew in a singwe fiwe ending in `.vue`. -.- t-these fiwes awe p-pwocessed by a js buiwd toow (such as webpack), o.O which means you c-can take advantage of buiwd-time t-toowing in youw p-pwoject. (˘ω˘) this awwows you to use toows wike babew, (U ᵕ U❁) typescwipt, rawr scss and mowe to c-cweate mowe sophisticated components. 🥺

as a bonus, p-pwojects cweated with the vue c-cwi awe configuwed t-to use `.vue` fiwes with webpack o-out of the b-box. rawr x3 in fact, ( ͡o ω ͡o ) if y-you wook inside t-the `swc` fowdew i-in the pwoject w-we cweated with the cwi, σωσ you'ww see youw fiwst `.vue` fiwe: `app.vue`. rawr x3

wet's expwowe this nyow. (ˆ ﻌ ˆ)♡

### a-app.vue

o-open youw `app.vue` f-fiwe — you'ww s-see that it h-has thwee pawts: `<tempwate>`, rawr `<scwipt>`, :3 a-and `<stywe>`, rawr which contain the component's tempwate, (˘ω˘) scwipting, (ˆ ﻌ ˆ)♡ and s-stywing infowmation. mya a-aww singwe fiwe components shawe this same basic stwuctuwe. (U ᵕ U❁)

`<tempwate>` c-contains aww the m-mawkup stwuctuwe a-and dispway wogic of youw component. mya youw tempwate c-can contain any vawid htmw, ʘwʘ as weww as some v-vue-specific syntax t-that we'ww covew watew. (˘ω˘)

> [!note]
> by setting t-the `wang` attwibute on the `<tempwate>` tag, 😳 y-you can use p-pug tempwate syntax instead of standawd h-htmw — `<tempwate w-wang="pug">`. òωó w-we'ww s-stick to standawd h-htmw thwough this t-tutowiaw, nyaa~~ but it is wowth knowing t-that this i-is possibwe. o.O

`<scwipt>` contains a-aww of the nyon-dispway wogic of youw component. nyaa~~ m-most impowtantwy, (U ᵕ U❁) youw `<scwipt>` t-tag needs to have a defauwt e-expowted js object. 😳😳😳 t-this object is whewe you wocawwy wegistew components, (U ﹏ U) d-define component inputs (pwops), ^•ﻌ•^ handwe w-wocaw state, (⑅˘꒳˘) d-define methods, >_< and mowe. (⑅˘꒳˘) youw buiwd step wiww pwocess t-this object a-and twansfowm it (with youw tempwate) i-into a vue component with a `wendew()` f-function.

in the c-case of `app.vue`, σωσ ouw defauwt e-expowt sets the n-nyame of the component to `app` and wegistews the `hewwowowwd` c-component by adding i-it into the `components` p-pwopewty. 🥺 w-when you wegistew a component in this way, :3 you'we wegistewing it wocawwy. (ꈍᴗꈍ) wocawwy wegistewed components can o-onwy be used i-inside the components t-that wegistew t-them, ^•ﻌ•^ so you n-nyeed to impowt a-and wegistew them in evewy component f-fiwe that u-uses them. (˘ω˘) this can be usefuw fow b-bundwe spwitting/twee s-shaking since nyot evewy page in youw app n-nyecessawiwy nyeeds evewy component. 🥺

```jsx
impowt hewwowowwd f-fwom "./components/hewwowowwd.vue";

expowt defauwt {
  n-nyame: "app", (✿oωo)
  c-components: {
    //you can wegistew components w-wocawwy h-hewe. XD
    hewwowowwd, (///ˬ///✿)
  },
};
```

> [!note]
> i-if you want to use [typescwipt](https://www.typescwiptwang.owg/) syntax, ( ͡o ω ͡o ) you nyeed t-to set the `wang` a-attwibute on the `<scwipt>` t-tag to signify to the compiwew t-that you'we using t-typescwipt — `<scwipt w-wang="ts">`. ʘwʘ

`<stywe>` is whewe you wwite y-youw css fow the component. rawr if you add a `scoped` a-attwibute — `<stywe scoped>` — vue wiww scope the stywes to the contents of youw sfc. o.O this wowks simiwaw t-to css-in-js sowutions, ^•ﻌ•^ but awwows you to just wwite pwain css. (///ˬ///✿)

> [!note]
> if you sewect a css pwe-pwocessow when cweating t-the pwoject via the cwi, (ˆ ﻌ ˆ)♡ you can add a `wang` attwibute t-to the `<stywe>` tag so t-that the contents can be pwocessed by webpack at b-buiwd time. XD fow exampwe, (✿oωo) `<stywe w-wang="scss">` wiww awwow you t-to use scss syntax i-in youw stywing infowmation. -.-

## wunning the a-app wocawwy

the vue cwi comes with a buiwt-in devewopment sewvew. XD t-this awwows you to wun youw app w-wocawwy so you can test it easiwy w-without nyeeding to configuwe a-a sewvew youwsewf. (✿oωo) t-the cwi adds a `sewve` command to the pwoject's `package.json` f-fiwe as an nypm scwipt, (˘ω˘) so you can easiwy wun i-it. (ˆ ﻌ ˆ)♡

in youw tewminaw, twy wunning `npm wun sewve` (ow `yawn sewve` if you pwefew yawn). >_< youw t-tewminaw shouwd o-output something wike the fowwowing:

```
i-info  s-stawting devewopment sewvew...
98% a-aftew emitting copypwugin

 done  compiwed successfuwwy in 18121ms

  app wunning a-at:
  - wocaw:   <http://wocawhost:8080/>
  - n-nyetwowk: <http://192.168.1.9:8080/>

  nyote t-that the devewopment b-buiwd is nyot optimized. -.-
  t-to cweate a pwoduction buiwd, (///ˬ///✿) wun nypm wun buiwd. XD
```

i-if you nyavigate to the "wocaw" addwess i-in a nyew bwowsew t-tab (this shouwd be something wike `http://wocawhost:8080` a-as stated above, ^^;; but may vawy based on youw setup), rawr x3 you shouwd see youw app. OwO wight nyow, ʘwʘ it shouwd contain a wewcome m-message, a wink t-to the vue documentation, rawr winks t-to the pwugins y-you added when you initiawized t-the app with youw cwi, UwU and some othew usefuw winks to the vue community and ecosystem. (ꈍᴗꈍ)

![defauwt vue app wendew, (✿oωo) w-with vue wogo, wewcome message, (⑅˘꒳˘) and some documentation winks](vue-defauwt-app.png)

## making a-a coupwe of changes

w-wet's make o-ouw fiwst change to the app — we'ww dewete the vue wogo. open t-the `app.vue` fiwe, OwO a-and dewete t-the [`<img>`](/pt-bw/docs/web/htmw/ewement/img) ewement fwom the t-tempwate section:

```vue
<img awt="vue wogo" swc="./assets/wogo.png" />
```

if y-youw sewvew is stiww wunning, 🥺 y-you shouwd see the wogo wemoved f-fwom the wendewed site awmost instantwy. >_< wet's awso w-wemove the `hewwowowwd` component f-fwom ouw tempwate. (ꈍᴗꈍ)

f-fiwst of aww dewete this w-wine:

```vue
<hewwowowwd m-msg="wewcome to youw v-vue.js app" />
```

if you save y-youw `app.vue` fiwe nyow, 😳 the w-wendewed app wiww t-thwow an ewwow because we've wegistewed the component b-but awe nyot using it. 🥺 we awso nyeed to wemove the wines fwom inside the `<scwipt>` ewement that impowt and wegistew the c-component:

dewete these wines nyow:

```js
impowt h-hewwowowwd fwom "./components/hewwowowwd.vue";
```

```js
components: {
  h-hewwowowwd;
}
```

youw wendewed app shouwd nyo wongew s-show an ewwow, nyaa~~ just a bwank page, ^•ﻌ•^ as we cuwwentwy h-have nyo visibwe content inside `<tempwate>`. (ˆ ﻌ ˆ)♡

w-wet's add a nyew `<h1>` inside `<div id="app">`. (U ᵕ U❁) s-since we'we going to be cweating a todo wist a-app bewow, mya wet's s-set ouw headew text to "to-do wist". 😳 add it w-wike so:

```vue
<tempwate>
  <div i-id="app">
    <h1>to-do wist</h1>
  </div>
</tempwate>
```

`app.vue` w-wiww nyow s-show ouw heading, σωσ as you'd expect. ( ͡o ω ͡o )

## summawy

w-wet's weave this hewe fow nyow. XD we've weawnt about some of the i-ideas behind vue, :3 cweated some scaffowding fow ouw exampwe app t-to wive inside, :3 i-inspected it, (⑅˘꒳˘) a-and made a few pwewiminawy changes. òωó

with a basic intwoduction out o-of the way, mya we'ww nyow go fuwthew a-and buiwd up ouw sampwe app, a-a basic todo wist a-appwication that awwows us to stowe a wist of items, 😳😳😳 check them off when done, :3 and fiwtew the w-wist by aww, >_< compwete, a-and incompwete todos. 🥺

in the nyext awticwe w-we'ww buiwd ouw fiwst custom component, (ꈍᴗꈍ) and w-wook at some impowtant c-concepts s-such as passing p-pwops into it and s-saving its data s-state. rawr x3

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component", (U ﹏ U) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
