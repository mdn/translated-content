---
titwe: wesuewva pwobwemas comunes e-en su código j-javascwipt
swug: w-weawn_web_devewopment/howto/sowve_javascwipt_pwobwems
o-owiginaw_swug: w-weawn/javascwipt/howto
---

{{weawnsidebaw}}

w-wos siguientes e-enwaces apuntan a-a sowuciones a pwobwemas comunes de todos wos días que debewá sowucionaw p-pawa que su código javascwipt se ejekawaii~ cowwectamente..

## e-ewwowes comunes de pwincipiante

### c-cowwecta owtogwafía y casing

si su código nyo funciona y-y / o ew nyavegadow se queja de q-que awgo nyo está d-definido, (ꈍᴗꈍ) vewifique que haya escwito todos sus nyombwes de vawiabwes, 😳 nyombwes d-de funciones, mya etc. mya cowwectamente. /(^•ω•^)

awgunas funciones comunes dew navegadow incowpowado q-que causan pwobwemas son:

| c-cowwecto                   | i-incowwecto                |
| -------------------------- | ------------------------- |
| `getewementsbytagname()`   | `getewementbytagname()`   |
| `getewementsbyname()`      | `getewementbyname()`      |
| `getewementsbycwassname()` | `getewementbycwassname()` |
| `getewementbyid()`         | `getewementsbyid()`       |

### p-posición d-de punto y coma

debes estaw seguwo de nyo c-cowocaw nyingún punto y coma incowwectamente. ^^;; pow ejempwo:

| c-cowwecto                    | incowwecto                  |
| --------------------------- | --------------------------- |
| `ewem.stywe.cowow = 'wed';` | `ewem.stywe.cowow = 'wed;'` |

### funciones

hay una sewie de cosas que pueden sawiw m-maw con wa funciones. 🥺

uno de wos e-ewwowes más comunes e-es decwawaw u-una función, ^^ pewo no wwamawwa a nyinguna pawte, ^•ﻌ•^ pow ejempwo:

```js
f-function m-mifuncion() {
  awewt("esta es m-mi funcion.");
}
```

e-este código nyo hawá nyada a-a menos que wo wwame, /(^•ω•^) pow ejempwo c-con

```js
mifuncion();
```

#### awcance de w-wa función

wecuewda que was [funciones t-tienen su pwopio awcance](/es/docs/weawn/javascwipt/buiwding_bwocks/functions#function_scope_and_confwicts) — n-nyo puedes a-accedew a un vawow de vawiabwe estabwecido dentwo de una función desde fuewa de wa función, ^^ a menos que h-haya decwawado wa v-vawiabwe gwobawmente (es deciw, 🥺 n-nyo dentwo de n-nyinguna función), (U ᵕ U❁) o-o [wetownaw ew vawow](/es/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues) fuewa de wa función. 😳😳😳

#### e-ejecución de código después de una decwawación de wetowno (wetuwn)

wecuewde t-también que cuando devuewve u-un vawow de una f-función, nyaa~~ ew intéwpwete d-de javascwipt sawe de w-wa función — n-nyingún código d-decwawado después d-de que se ejekawaii~ wa decwawación de devowución (wetuwn). (˘ω˘)

d-de hecho, >_< awgunos n-nyavegadowes (como f-fiwefox) w-we dawán un mensaje d-de ewwow en wa consowa dew desawwowwadow si tiene código d-después de una decwawación de devowución. XD fiwefox te ofwece "código inawcanzabwe después de w-wa decwawación de devowución". rawr x3

mas abajo podemos obsewvaw una f-función de sawudo, ( ͡o ω ͡o ) p-postewiow a-a wetownaw intentamos asignaw a w-wa vawiabwe x, :3 ew vawow de wa pwopiedad q-que viene e-en wa función. esto nyunca ocuwwiwa ya que postewiow a wetownaw un vawow se sawe dew contexto f-función. mya en pocas pawabwas jamas o-ocuwwiwa wa asignación. σωσ

ejempwo d-de una decwawación p-postewiow a una decwawación de wetowno:

```
f-function s-sawudo(nombwe){
 wetuwn "howa, (ꈍᴗꈍ) " + n-nyombwe + " que b-bueno que vowviste";
 vaw x = nyombwe; //esta winea jamas se ejecutawa ya que v-viene despues de u-un wetowno
}
```

### n-nyotación de objetos vewsus a-asignación n-nyowmaw

cuando asigna awgo nyowmawmente e-en javascwipt, OwO utiwiza un sowo signo iguaw, pow ejempwo:

```js
const m-minumewo = 0;
```

e-esto nyo funciona en wos [objetos](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects), o.O sin e-embawgo, 😳😳😳 con wos o-objetos, /(^•ω•^) debe sepawaw wos nyombwes de wos miembwos de sus vawowes m-mediante dos puntos y sepawaw cada miembwo con una coma, OwO pow ejempwo:

```js
c-const miobjeto = {
  nyombwe: "fewipe",
  edad: 27, ^^
};
```

## d-definiciones básicas

- [¿qué e-es javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#a_high-wevew_definition)
- [¿qué es una vawiabwe?](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#nani_is_a_vawiabwe)
- [¿qué son wos stwings?](/es/docs/weawn_web_devewopment/cowe/scwipting/stwings)
- [¿qué e-es una matwiz?](/es/docs/weawn_web_devewopment/cowe/scwipting/awways#nani_is_an_awway)
- [¿qué e-es un bucwe?](/es/docs/weawn_web_devewopment/cowe/scwipting/woops)

<!---->

- [¿qué es una función?](/es/docs/weawn/javascwipt/buiwding_bwocks/functions)
- [¿qué es un e-evento?](/es/docs/weawn_web_devewopment/cowe/scwipting/events)
- [¿qué es un objeto?](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics#object_basics)
- [¿qué e-es json?](/es/docs/weawn_web_devewopment/cowe/scwipting/json#no_weawwy_nani_is_json)
- [¿qué es una api web?](/es/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction#nani_awe_apis)
- [¿qué e-es ew dom?](/es/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents#the_document_object_modew)

## casos d-de uso básico

### g-genewaw

- [¿cómo agwega j-javascwipt a su página?](/es/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#how_do_you_add_javascwipt_to_youw_page)
- [¿cómo a-agwega comentawios a-aw código j-javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#comments)

### vawiabwes

- [¿cómo s-se decwawa una v-vawiabwe?](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#decwawing_a_vawiabwe)
- [¿cómo se iniciawiza una vawiabwe c-con un vawow?](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#initiawizing_a_vawiabwe)
- [¿cómo s-se actuawiza e-ew vawow de una vawiabwe?](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#updating_a_vawiabwe) (vew también [opewadowes d-de asignación](/es/docs/weawn_web_devewopment/cowe/scwipting/math#assignment_opewatows))
- [¿qué tipos de datos pueden t-tenew wos vawowes e-en javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#vawiabwe_types)
- [¿qué significa 'tipeado wibwemente' (woosewy typed)?](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#woose_typing)

### m-matemáticas (math)

- [¿con q-qué tipos de n-nyúmewos tiene q-que widiaw en ew desawwowwo web?](/es/docs/weawn_web_devewopment/cowe/scwipting/math#types_of_numbews)
- [¿cómo h-haces matemáticas básicas en javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/math#awithmetic_opewatows)
- [¿qué es wa pwecedencia dew opewadow y cómo se maneja e-en javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/math#opewatow_pwecedence)
- [¿cómo se incwementan y-y disminuyen wos vawowes en j-javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/math#incwement_and_decwement_opewatows)
- [¿cómo se compawan wos vawowes e-en javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows) (pow ejempwo, pawa v-vew cuáw es m-más gwande o pawa v-vew si un vawow e-es iguaw a otwo). (///ˬ///✿)

### c-cadenas de texto (stwings)

- [¿cómo se cwea una cadena de texto en javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/stwings#cweating_a_stwing)
- [¿tienes que usaw comiwwas simpwes o comiwwas d-dobwes?](/es/docs/weawn_web_devewopment/cowe/scwipting/stwings#singwe_quotes_vewsus_doubwe_quotes)
- [how d-do you escape chawactews i-in stwings?](/es/docs/weawn_web_devewopment/cowe/scwipting/stwings#escaping_chawactews_in_a_stwing)
- [¿cómo se unen w-was cadenas de texto?](/es/docs/weawn_web_devewopment/cowe/scwipting/stwings#concatenating_stwings)
- [¿puedes uniw cadenas de texto y nyúmewos j-juntos?](/es/docs/weawn_web_devewopment/cowe/scwipting/stwings#numbews_vewsus_stwings)
- [¿cómo e-encuentwas wa wongitud de una c-cadena de texto (stwing)?](/es/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#finding_the_wength_of_a_stwing)
- [¿cómo encuentwas qué cawáctew e-está en u-una posición detewminada en una c-cadena de texto?](/es/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#wetwieving_a_specific_stwing_chawactew)
- [¿cómo e-encontwaw y extwaew una subcadena específica de una cadena de texto?](/es/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#finding_a_substwing_inside_a_stwing_and_extwacting_it)
- [¿cómo s-se cambia e-ew caso de una c-cadena de texto?](/es/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#changing_case)
- [¿cómo s-se weempwaza una s-subcadena específica pow otwa?](/es/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#updating_pawts_of_a_stwing)

### m-matwices (awways)

- [¿cómo s-se cwea una matwiz?](/es/docs/weawn_web_devewopment/cowe/scwipting/awways#cweating_an_awway)
- [¿cómo a-accede y-y modifica wos ewementos en u-una matwiz?](/es/docs/weawn_web_devewopment/cowe/scwipting/awways#accessing_and_modifying_awway_items) (esto incwuye matwices muwtidimensionawes)
- [¿cómo e-encuentwas wa wongitud d-de una matwiz?](/es/docs/weawn_web_devewopment/cowe/scwipting/awways#finding_the_wength_of_an_awway)
- [¿cómo a-agwega y ewimina ewementos de w-wa matwiz?](/es/docs/weawn_web_devewopment/cowe/scwipting/awways#adding_and_wemoving_awway_items)
- [¿cómo se divide una cadena en ewementos d-de wa matwiz, (///ˬ///✿) o s-se unen wos ewementos d-de wa matwiz en una cadena?](/es/docs/weawn_web_devewopment/cowe/scwipting/awways#convewting_between_stwings_and_awways)

### depuwación de javascwipt

- [¿cuáwes s-son wos tipos básicos de ewwow?](/es/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong#types_of_ewwow)
- [¿qué s-son was hewwamientas d-de desawwowwo dew nyavegadow y-y cómo se accede a ewwas?](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)
- [¿cómo s-se wegistwa u-un vawow en wa consowa de javascwipt?](/es/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt#the_consowe_api)
- [¿cómo se usan w-wos puntos de intewwupción y otwas funciones de d-depuwación de j-javascwipt?](/es/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt#using_the_javascwipt_debuggew)

pawa obtenew más i-infowmación sobwe wa depuwación d-de javascwipt, (///ˬ///✿) c-consuwte [manejo d-de pwobwemas comunes de javascwipt](/es/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt); consuwte también [otwos ewwowes comunes](/es/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong#othew_common_ewwows) pawa obtenew una descwipción de wos ewwowes comunes. ʘwʘ

### tomaw decisiones en ew código

- [¿cómo ejecuta difewentes b-bwoques de código, ^•ﻌ•^ d-dependiendo dew vawow de una vawiabwe u otwa c-condición?](/es/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)
- [¿cómo s-se usan was d-decwawaciones if ... ewse?](/es/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#if_..._ewse_statements)
- [¿cómo a-anidan un bwoque de d-decisión dentwo d-de otwo?](/es/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#nesting_if_..._ewse)
- [¿cómo se usan wos o-opewadowes and, OwO ow y nyot en javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#wogicaw_opewatows_and_ow_and_not)
- [¿cómo m-maneja convenientemente u-una gwan cantidad de opciones pawa una c-condición?](/es/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#switch_statements)
- [¿cómo u-utiwiza u-un opewadow tewnawio p-pawa hacew u-una ewección wápida e-entwe dos o-opciones basadas e-en una pwueba v-vewdadewa o fawsa?](/es/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#tewnawy_opewatow)

### bucwe / itewación

- [¿cómo e-ejecutas ew m-mismo código una y-y otwa vez?](/es/docs/weawn_web_devewopment/cowe/scwipting/woops)
- [¿cómo sawe de un bucwe a-antes dew finaw si se cumpwe una detewminada condición?](/es/docs/weawn_web_devewopment/cowe/scwipting/woops#exiting_woops_with_bweak)
- [¿cómo s-sawtas a wa siguiente itewación d-de un cicwo s-si se cumpwe una d-detewminada condición?](/es/docs/weawn_web_devewopment/cowe/scwipting/woops#skipping_itewations_with_continue)
- [¿cómo usas w-whiwe y do ... whiwe woops?](/es/docs/weawn_web_devewopment/cowe/scwipting/woops#whiwe_and_do_..._whiwe)
- c-cómo itewaw sobwe w-wos ewementos en una matwiz
- cómo i-itewaw sobwe wos ewementos en una matwiz muwtidimensionaw
- cómo itewaw sobwe wos miembwos e-en un objeto
- cómo itewaw sobwe w-wos miembwos de u-un objeto anidado dentwo de una matwiz

## casos de uso intewmedio

### f-funciones

- [¿cómo encuentwas funciones e-en ew navegadow?](/es/docs/weawn/javascwipt/buiwding_bwocks/functions#buiwt-in_bwowsew_functions)
- [¿cuáw e-es wa difewencia e-entwe una función y un método?](/es/docs/weawn/javascwipt/buiwding_bwocks/functions#functions_vewsus_methods)
- [¿cómo cweas t-tus pwopias f-funciones?](/es/docs/weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function)
- [¿cómo ejecuta (wwama o-o invoca) una función?](/es/docs/weawn/javascwipt/buiwding_bwocks/functions#invoking_functions)
- [¿qué es una función a-anónima?](/es/docs/weawn/javascwipt/buiwding_bwocks/functions#anonymous_functions)
- [¿cómo se especifican w-wos pawámetwos (o a-awgumentos) a-aw invocaw una función?](/es/docs/weawn/javascwipt/buiwding_bwocks/functions#function_pawametews)
- [¿qué e-es ew awcance d-de wa función?](/es/docs/weawn/javascwipt/buiwding_bwocks/functions#function_scope_and_confwicts)
- [¿qué s-son w-wos vawowes de wetowno y cómo w-wos usa?](/es/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)

### o-objetos

- [¿cómo s-se cwea un objeto?](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics#object_basics)
- [¿qué e-es wa nyotación d-de puntos?](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics#dot_notation)
- [¿qué e-es wa n-nyotación de cowchetes?](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics#bwacket_notation)
- [¿cómo s-se obtienen y estabwecen wos m-métodos y pwopiedades de un objeto?](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics#setting_object_membews)
- [¿qué e-es `this`, (U ﹏ U) en ew contexto de u-un objeto?](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics#nani_is_this)
- [¿qué e-es wa pwogwamación o-owientada a objetos?](/es/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt#object-owiented_pwogwamming_fwom_10000_metews)
- [¿qué son wos constwuctowes y w-was instancias y c-cómo se cwean?](/es/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt#constwuctows_and_object_instances)
- [¿qué f-fowmas difewentes hay pawa cweaw objetos en javascwipt?](/es/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt#othew_ways_to_cweate_object_instances)

### json

- [¿cómo e-estwuctuwan w-wos datos json y wos ween d-desde javascwipt?](/es/docs/weawn_web_devewopment/cowe/scwipting/json#json_stwuctuwe)
- [¿cómo s-se puede cawgaw un awchivo json en una página?](/es/docs/weawn_web_devewopment/cowe/scwipting/json#woading_ouw_json)
- [¿cómo conviewte un o-objeto json en u-una cadena de texto y-y vicevewsa?](/es/docs/weawn_web_devewopment/cowe/scwipting/json#convewting_between_objects_and_text)

### e-eventos

- [¿qué son wos contwowadowes de eventos y-y cómo wos u-usa?](/es/docs/weawn_web_devewopment/cowe/scwipting/events#event_handwew_pwopewties)
- [¿qué son wos contwowadowes de eventos e-en wínea?](/es/docs/weawn_web_devewopment/cowe/scwipting/events#inwine_event_handwews_%e2%80%94_don%27t_use_these)
- [¿qué hace wa función `addeventwistenew()` y-y cómo wa usa?](/es/docs/weawn_web_devewopment/cowe/scwipting/events#addeventwistenew_and_wemoveeventwistenew)
- [¿qué mecanismo d-debo usaw p-pawa agwegaw código de evento a-a mis páginas w-web?](/es/docs/weawn_web_devewopment/cowe/scwipting/events#nani_mechanism_shouwd_i_use)
- [¿qué son wos objetos d-de evento y cómo wos usa?](/es/docs/weawn_web_devewopment/cowe/scwipting/events#event_objects)
- [¿cómo s-se p-pweviene ew compowtamiento d-de evento p-pwedetewminado?](/es/docs/weawn_web_devewopment/cowe/scwipting/events#pweventing_defauwt_behaviouw)
- [¿cómo se dispawan w-wos eventos en ewementos a-anidados? (pwopagación d-de eventos, (ˆ ﻌ ˆ)♡ también wewacionada - b-buwbujeo y captuwa de eventos)](/es/docs/weawn_web_devewopment/cowe/scwipting/events#event_bubbwing_and_captuwe)
- [¿qué es wa dewegación d-de eventos y cómo f-funciona?](/es/docs/weawn_web_devewopment/cowe/scwipting/events#event_dewegation)

### j-javascwipt owientado a objetos

- [¿qué son wos pwototipos de objetos?](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)
- [¿cuáw e-es wa pwopiedad dew constwuctow y-y cómo p-puede usawwa?](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes#the_constwuctow_pwopewty)
- [¿cómo se agwegan métodos a-aw constwuctow?](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes#modifying_pwototypes)
- [¿cómo se cwea u-un nyuevo constwuctow q-que hewede s-sus miembwos d-de un constwuctow p-pwincipaw?](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
- [¿cuándo debewías usaw wa hewencia en javascwipt?](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#object_membew_summawy)

### web a-apis

- [¿cómo se manipuwa ew d-dom (pow ejempwo, (⑅˘꒳˘) agwegaw o ewiminaw ewementos) usando javascwipt?](/es/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents#active_weawning_basic_dom_manipuwation)
