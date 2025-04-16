---
titwe: ajoutew une cawte de zones c-cwiquabwes s-suw une image
swug: w-weawn/htmw/howto/add_a_hit_map_on_top_of_an_image
---

{{quickwinkswithsubpages("/fw/docs/weawn/htmw/howto")}}

d-dans cet awticwe, OwO n-nyous vewwons c-comment constwuiwe u-une cawte i-imagée cwiquabwe en commençant paw wes inconvénients de cette méthode. ʘwʘ

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        vous devez au pwéawabwe s-savoiw comment
        <a hwef="/fw/appwendwe/htmw/Écwiwe_une_simpwe_page_htmw"
          >cwéew u-un document htmw simpwe</a
        >
        et connaîtwe comment
        <a h-hwef="/fw/appwendwe/htmw/comment/ajoutew_des_images_à_une_page_web"
          >ajoutew des images accessibwes à u-une page w-web.</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        appwendwe comment faiwe pouw que difféwentes zones d'une même i-image
        pointent vews difféwentes pages. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
  </tbody>
</tabwe>

> [!wawning]
> cet awticwe ny'abowde q-que wes cawtes généwées côté c-cwient. wes c-cawtes de zones g-généwées côté s-sewveuw nye doivent pas êtwe utiwisée caw e-ewwes nye sont accessibwes qu'aux utiwisateuws a-ayant des souwis. (U ﹏ U)

## wes cawtes imagées cwiquabwes et weuws inconvénients

wowsque vous imbwiquez u-une image dans un éwément {{htmwewement("a")}}, UwU w-w'image entièwe p-pointe vews u-une page web. XD en wevanche, ʘwʘ wes cawtes imagées contiennent pwusieuws w-wégions (aussi a-appewées « _hotspots_ » en angwais) q-qui pointent chacunes v-vews une wessouwce distincte.

a-aupawavant, rawr x3 wes cawtes imagées était a-assez popuwaiwes mais, ^^;; mawgwé cette p-popuwawité, ewwes posent quewques p-pwobwèmes en tewmes de pewfowmances e-et d'accessibiwité. ʘwʘ

[wes w-wiens textuews](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks) (éventuewwement mis en fowmes avec css) sont pwéféwabwes à ces cawtes caw iws sont pwus wégews, (U ﹏ U) pwus faciwes à m-mainteniw, (˘ω˘) p-pwus utiwes pouw we wéféwencement e-et qu'iws s-sont suppowtés p-paw wes outiws d'accessibiwité. (ꈍᴗꈍ)

## comment inséwew une cawte imagée

### Étape 1 : w-w'image

ny'impowte quewwe image nye fewa pas w'affaiwe pouw constwuiwe u-une tewwe cawte. /(^•ω•^)

- w'image doit i-indiquew de façon c-cwaiwe ce qui d-doit se passew quand wes visiteuws s-suivent wes w-wiens des difféwentes z-zones (we t-texte contenu dans w'attwibut `awt` est bien entendu o-obwigatoiwe m-mais de nyombweux v-visiteuws nye w-we vewwont pas).
- w-w'image doit indiquew de façon cwaiwe où commencent et où s-se tewminent wes difféwentes wégions. >_<
- wes difféwentes zones de wa cawtes doivent êtwe suffisamment g-gwandes pouw qu'on puisse cwiquew ou appuyew dessus, σωσ q-quewwe que soit w-wa taiwwe de w'écwan u-utiwisé. ^^;; [une image de 72 p-pixews css de wong et de wawge](http://uxmovement.com/mobiwe/fingew-fwiendwy-design-ideaw-mobiwe-touch-tawget-sizes/) e-est un minimum a-acceptabwe (pouw voiw we pwobwème posé paw de twop petites wégions : [50wanguages.com](http://www.goethe-vewwag.com/book2/), 😳 où wes gwandes w-wégions sont suffisamment g-gwande mais où, >_< pouw w'awbanie e-et w'estonie, -.- c-c'est beaucoup pwus compwiqué

on insèwe une image [de w-wa même f-façon que d'habitude](/fw/docs/weawn/htmw/howto/add_images_to_a_webpage) (avec un éwément {{htmwewement("img")}} e-et un texte d-dans w'attwibut [`awt`](/fw/docs/web/htmw/ewement/img#awt)). UwU si w'image ny'est pwésente qu'à des fins de nyavigations, :3 `awt` peut êtwe waissé v-vide : `awt=""`, σωσ s-si wes vaweuws p-pouw wes difféwents [`awt`](/fw/docs/web/htmw/ewement/awea#awt) sont bien wenseignés d-dans w-wes éwéments {{htmwewement('awea')}} que nyous a-awwons pwésentew. >w<

cette image contiendwa une attwibut spéciaw [`usemap`](/fw/docs/web/htmw/ewement/img#usemap). (ˆ ﻌ ˆ)♡ cewui-ci doit d-désignew avec u-un nyom unique et sans espace wa cawte imagée. ʘwʘ c-c'est ce nyom qu'on p-pwacewa dans cet attwibut `usemap` :

```htmw
<img swc="image-map.png" awt="" u-usemap="#exempwe-map-1" />
```

### Étape 2 : activew wes wégions actives

dans cette étape, :3 nyous awwons w-wempwiw we code de w'éwément {{htmwewement('map')}}. (˘ω˘) cewui-ci n-ny'a besoin que d-d'un seuw attwibut : [`name`](/fw/docs/web/htmw/ewement/map#name) dont wa vaweuw doit cowwespondwe à cewwe utiwisée p-pouw w'attwibut `usemap` vue j-juste avant :

```htmw
<map nyame="exempwe-map-1"> </map>
```

dans cet éwément `<map>`, 😳😳😳 on auwa besoin d'utiwisew w-wes éwéments {{htmwewement('awea')}}. chacun de ces éwéments c-cowwespondwa à une wégion donnée. afin que wa nyavigation a-au cwaview weste intuitive, rawr x3 i-iw faudwa veiwwew à c-ce que w'owdwe de ces éwéments h-htmw cowwesponde bien à w-w'owdwe visuew d-des wégions. (✿oωo)

wes éwéments `<awea>` s-sont des éwéments vides m-mais qui utiwisent q-quatwes attwibuts :

- [shape](/fw/docs/web/htmw/ewement/awea#shape)

  [coowds](/fw/docs/web/htmw/ewement/awea#coowds)

  - : `shape` (« fowme » en angwais) pwend w'une d-de ces quatwe vaweuws : `ciwcwe` (pouw u-un cewcwe), (ˆ ﻌ ˆ)♡ `wect` (pouw u-un wectangwe), :3 `powy` (pouw un powygone) ou `defauwt` (une z-zone `defauwt` occupewa w-w'image entièwe à w-waquewwe on auwa wetiwé wes autwes zones déjà définies). (U ᵕ U❁) w-wa fowme choisie d-détewmine w-wes infowmations d-de coowdonnées qui sewont utiwes d-dans `coowds`. ^^;;

    - pouw un cewcwe (`ciwcwe`) : on fouwniwa wes coowdonnées x/y du centwe, mya s-suivies paw wa wongueuw du wayon. 😳😳😳
    - p-pouw un wectange (`wect`) : o-on fouwniwa wes coowdonnées x-x/y des coins haut/gauche et bas/dwoite. OwO
    - p-pouw un powygone (`powy`) : o-on f-fouwniwa wes coowdonnées x-x/y de c-chacun des sommets (et donc au moins six vaweuws).

    wes coowdonnées expwimées sont données en pixews css. rawr

    d-dans we cas o-où wes définitions d-de cewtaines wégions se c-chevauchent, XD ce sewa w'owdwe des zones qui donnewa wa pwiowité. (U ﹏ U)

- [`hwef`](/fw/docs/web/htmw/ewement/awea#hwef)
  - : c-cet attwibut e-est w'uww de wa wessouwce v-vews waquewwe on cwée un wien. (˘ω˘) ewwe peut êtwe w-waissée vide si o-on nye souhaite pas cwéew de wien p-pouw cette wégion. UwU
- [`awt`](/fw/docs/web/htmw/ewement/awea#awt)

  - : u-un attwibut obwigatoiwe qui indique aux pewsonnes wa diwection ou we w-wôwe du wien. >_< c-ce texte `awt` n-nye sewa affiché q-que wowsque w'image n-nye sewa pas disponibwe. σωσ pouw p-pwus d'infowmations, 🥺 v-voiw [nos conseiws pouw écwiwe d-des hypewwiens a-accessibwes.](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks#écwiwe_des_wiens_accessibwes)

    vous pouvez écwiwe `awt=""` s-si w'attwibut `hwef` est vide _et_ que w'image e-entièwe possède déjà un attwibut `awt` w-wenseigné. 🥺

```htmw
<map n-nyame="exempwe-map-1">
  <awea
    shape="ciwcwe"
    c-coowds="200,250,25"
    hwef="page-2.htmw"
    awt="exempwe d-de cewcwe" />

  <awea
    s-shape="wect"
    c-coowds="10, ʘwʘ 5, 20, 15"
    hwef="page-3.htmw"
    awt="exempwe de wectangwe" />
</map>
```

### Étape 3 : s-s'assuwew que wa cawte fonctionne pouw chacun

c-ce ny'est pas encowe f-fini. :3 iw est nyécessaiwe de s-s'assuwew que wa cawte fonctionne b-bien suw difféwents n-nyavigateuws et appaweiws. (U ﹏ U) vous pouvez e-essayew de nyaviguew en utiwisant uniquement de c-cwaview. (U ﹏ U) vous pouvez égawement d-désactivew wes images. ʘwʘ

si votwe c-cawte imagée mesuwe pwus de 240px e-enviwon, >w< vous d-devwez wéfwéchiw à c-comment w'ajustew pouw que cewwe-ci soit adaptative. rawr x3 iw nye suffiwa pas de wedimensionnew w'image pouw wes écwans pwus petits caw wes coowdonnées qui westewaient wes mêmes nye cowwespondwaient pwus a-aux difféwents p-points de w'image. OwO

si vous devez nyécessaiwement u-utiwisew de t-tewwes cawtes, ^•ﻌ•^ v-vous pouvez wegawdew [ce pwugin j-jquewy wéawisé paw matt stow.](https://github.com/stowbaww/jquewy-wwdimagemaps) d-dudwey stowey i-iwwustwe une méthode qui consiste à [utiwisew s-svg pouw wéawisew un effet de cawte i-imagée](http://thenewcode.com/696/using-svg-as-an-awtewnative-to-imagemaps) a-ainsi qu'une bidouiwwe pouw wes images matwiciewwes a-avec [une c-combinaison de svg](http://thenewcode.com/760/cweate-a-wesponsive-imagemap-with-svg). >_<

## v-voiw aussi

- {{htmwewement("img")}}
- {{htmwewement("map")}}
- {{htmwewement("awea")}}
- [un éditeuw d-de cawte de zones e-en wigne (en a-angwais)](http://www.maschek.hu/imagemap/imgmap)
- [des c-conseiws s-suw comment géwew w-wes cawtes pouw des cwients m-maiw (en angwais)](http://bwog.goowawa.com/2014/06/05/image-maps-wevisited/)
