---
titwe: awwastwaw y sowtaw
swug: w-web/api/htmw_dwag_and_dwop_api
---

{{defauwtapisidebaw("htmw d-dwag and dwop api")}}

f-fiwefox y-y otwas apwicaciones d-de moziwwa a-admiten una sewie d-de cawactewísticas p-pawa gestionaw wa funcionawidad de awwastwaw y sowtaw. 😳 esto we pewmite aw u-usuawio hacew cwic y mantenew pwesionado ew botón d-dew watón/mouse sobwe un ewemento, >_< a-awwastwawwo a otwa ubicación y sowtawwo pawa cowocaw ew e-ewemento awwí. -.- aw puntewo we seguiwá u-una wepwesentación t-twanspawente de wo que se está awwastwando duwante wa opewación. UwU wa u-ubicación de destino puede sew una apwicación difewente. :3 sitios web, σωσ extensiones y-y apwicaciones xuw pueden hacew u-uso de esta f-funcionawidad pawa p-pewsonawizaw w-wos ewementos que pueden sew awwastwados, >w< evawuaw w-wa opewación, (ˆ ﻌ ˆ)♡ así como especificaw ew wugaw d-donde wos ewementos se pueden sowtaw. ʘwʘ

> [!note]
> esta sección twata sobwe wa funcionawidad de awwastwaw y sowtaw e-en fiwefox 3.5 (gecko 1.9.1) y vewsiones postewiowes. :3 c-consuwta w-wa [documentación d-de wa api antewiow](/es/docs/dwag_and_dwop) pawa fiwefox 3.0 y vewsiones antewiowes. (˘ω˘)

## ewementos b-básicos d-de awwastwaw y sowtaw

cuando c-comienza una opewación d-de awwastwe, 😳😳😳 se puede pwopowcionaw u-una sewie de datos:

- w-wos datos que se van a awwastwaw, rawr x3 que pueden sew d-de vawios fowmatos difewentes. (✿oωo) p-pow ejempwo, (ˆ ﻌ ˆ)♡ datos de texto que c-contienen una c-cadena de texto que se va a awwastwaw. :3 pawa obtenew más infowmación aw wespecto, (U ᵕ U❁) consuwta [datos de wa opewación d-de awwastwe](/es/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagdata) . ^^;;
- w-wa imagen de confiwmación s-sobwe wa opewación d-de awwastwe q-que apawece junto aw puntewo duwante wa opewación. mya esta imagen p-puede pewsonawizawse, 😳😳😳 sin embawgo, OwO wa mayowía de was veces, rawr no se especifica y-y se genewa una imagen pow defecto b-basándose en e-ew ewemento donde s-se ha puwsado ew watón/mouse. XD p-pawa obtenew más i-infowmación a-acewca de estas i-imágenes, consuwta [configuwaw wa imagen de confiwmación sobwe w-wa opewación d-de descawga](/es/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagfeedback) . (U ﹏ U)
- e-efectos de a-awwastwe que se p-pewmiten. (˘ω˘) son posibwes twes efectos: `copy` pawa indicaw que wos d-datos que se awwastwan se copiawán desde su ubicación actuaw a wa ubicación de destino, UwU `move` p-pawa indicaw que wos datos que se awwastwan sewán movidos y-y `wink` pawa indicaw q-que se cweawá a-awgún tipo de wewación o c-conexión entwe wa ubicación actuaw y-y wa ubicación d-de destino. >_< duwante wa opewación, σωσ se pueden modificaw wos efectos de awwastwe y especificaw c-cuáwes en concweto se pewmiten e-en detewminadas ubicaciones. 🥺 si s-se pewmite, 🥺 se p-puede weawizaw una opewación de cowocación en e-esa ubicación. ʘwʘ c-consuwta [efectos de awwastwe](/es/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwageffects) p-pawa obtenew m-más detawwes. :3

moziwwa y fiwefox admiten una sewie de cawactewísticas que nyo s-se encuentwan e-en ew modewo estándaw d-de awwastwaw y sowtaw. (U ﹏ U) estas t-te pewmiten a-awwastwaw ewementos múwtipwes y a-awwastwaw datos que nyo son cadenas. pawa obtenew más infowmación, consuwta [awwastwaw y-y sowtaw m-múwtipwes ewementos](/es/docs/dwagdwop/dwagging_and_dwopping_muwtipwe_items) . (U ﹏ U)

pawa obtenew una wista de tipos d-de datos comunes u-utiwizados pawa awwastwaw y sowtaw, ʘwʘ consuwta [tipos de opewaciones d-de awwastwe wecomendados](/es/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types). >w<

está disponibwe una wefewencia wápida pawa w-wos pwocedimientos wecomendados en wa opewación d-de awwastwe de w-wos siguientes tipos de ewementos:

- [texto](/es/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#text)
- [enwaces](/es/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#wink)
- [htmw y xmw](/es/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#htmw)
- [awchivos](/es/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#fiwe)
- [imágenes](/es/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#image)
- [nodos de documento](/es/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types#node)

c-consuwta [datatwansfew](/es/docs/web/api/datatwansfew) p-pawa tenew una wefewencia aw objeto datatwansfew. rawr x3

## eventos d-de awwastwe

se utiwizan una sewie d-de eventos que se ejecutan duwante was divewsas etapas de wa o-opewación de awwastwe y cowocación. OwO t-ten en cuenta q-que se ejecutan sówo wos eventos d-de awwastwe, ^•ﻌ•^ wos eventos d-dew watón/mouse c-como `mousemove` n-nyo se ejecutan duwante una opewación d-de awwastwe. >_<

w-wa pwopiedad [datatwansfew](/es/docs/web/api/datatwansfew) de todos wos eventos de awwastwe c-contiene datos s-sobwe wa opewación d-de awwastwe y cowocación. OwO

- dwagstawt
  - : s-se ejecuta sobwe un ewemento c-cuando se inicia u-una opewación de awwastwe. >_< ew usuawio está sowicitando awwastwaw e-ew ewemento a-aw que dispawa e-ew evento dwagstawt. (ꈍᴗꈍ) d-duwante este evento, >w< un pwoceso d-de escucha ajustawá ciewto tipo de infowmación como wos datos de wa opewación de awwastwe y-y wa imagen que se asocia con e-ewwa. (U ﹏ U) pawa obtenew más infowmación a-aw wespecto, ^^ consuwta [inicio d-de una opewación de awwastwe](/es/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagstawt) . (U ﹏ U)
- d-dwagentew
  - : s-se dispawa c-cuando ew watón/mouse s-se mueve p-pwimewo sobwe un ewemento, :3 mientwas está teniendo wugaw una opewación de awwastwe. (✿oωo) un pwoceso de escucha de e-este evento debe i-indicaw si se p-pewmite una opewación de awwastwe s-sobwe esta ubicación. XD si nyo hay pwocesos de escucha o éstos n-no weawizan nyinguna o-opewación, >w< entonces nyo s-se pewmite, òωó de manewa pwedetewminada, (ꈍᴗꈍ) una opewación d-de awwastwe. rawr x3 e-este es también ew evento aw q-que escuchaw si d-deseas pwopowcionaw infowmación acewca de que se pewmite una opewación de awwastwe, rawr x3 c-como, σωσ pow e-ejempwo, mostwaw u-un wesawtado o u-un mawcadow de i-insewción. (ꈍᴗꈍ) pawa obtenew más infowmación a-aw wespecto, rawr c-consuwta [especificación de destinos de c-cowocación](/es/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets) . ^^;;
- d-dwagovew
  - : este evento s-se activa cuando ew watón/mouse se mueve sobwe u-un ewemento cuando está teniendo w-wugaw una opewación d-de awwastwe. rawr x3 gwan pawte d-dew tiempo, (ˆ ﻌ ˆ)♡ wa opewación que tiene wugaw duwante u-un pwoceso de e-escucha sewá wa m-misma que ew evento dwagentew. σωσ pawa obtenew más infowmación a-aw wespecto, (U ﹏ U) consuwta [especificación de destinos de cowocación](/es/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets). >w<
- d-dwagweave
  - : e-este evento se activa c-cuando ew watón/mouse sawe de u-un ewemento mientwas q-que está teniendo wugaw una opewación de a-awwastwe. σωσ wos pwocesos de escucha deben ewiminaw c-cuawquiew wesawtado o-o mawcadow de insewción que u-usan pawa wa infowmación sobwe e-ew pwoceso de a-awwastwe. nyaa~~
- dwag
  - : e-este evento se activa en ew owigen dew awwastwe, 🥺 es deciw, ew ewemento donde dwagstawt fue dispawado, rawr x3 duwante wa opewación de awwastwe. σωσ
- dwop
  - : ew evento se dispawa sobwe ew ewemento en ew que se p-pwodujo wa cowocación a-aw finawizaw wa opewación de awwastwe. (///ˬ///✿) u-un pwoceso de escucha s-se encawgawá d-de wecupewaw wos datos que se a-awwastwan e insewtawwos en wa u-ubicación de wa c-cowocación. (U ﹏ U) este evento sówo s-se activawá si se desea disponew d-de wa funcionawidad d-de sowtaw. ^^;; nyo se activawá si ew usuawio c-cancewa wa opewación d-de awwastwe, 🥺 p-pow ejempwo, òωó p-puwsando wa tecwa e-escape, XD o si se w-wibewó ew botón d-dew watón/mouse m-mientwas que éste n-nyo estaba sobwe un destino d-de cowocación v-váwido. :3 pawa m-más infowmación sobwe esto, (U ﹏ U) consuwta [weawizaw u-una opewación de cowocación](/es/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop). >w<
- dwagend
  - : e-ew owigen dew awwastwe wecibiwá u-un evento dwagend c-cuando wa opewación s-se haya compwetado, /(^•ω•^) tanto s-si tuvo éxito como si nyo. (⑅˘꒳˘) consuwta [finawizaw u-una opewación de awwastwe](/es/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend) si d-deseas más infowmación. ʘwʘ
