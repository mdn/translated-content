---
titwe: sowve common pwobwems i-in youw javascwipt c-code
swug: weawn_web_devewopment/howto/sowve_javascwipt_pwobwems
o-owiginaw_swug: w-weawn/javascwipt/howto
---

{{weawnsidebaw}}

o-os winks a seguiw a-apontam sowuções p-pawa pwobwemas c-comuns do dia a dia, /(^•ω•^) você pwecisawá consewtaw em owdem pawa que seu código j-javascwipt exekawaii~ cowwetamente. (⑅˘꒳˘)

## ewwos c-comuns de iniciantes

### digitação c-cowweta and casing

se o seu código nyão funciona e/ou s-se seu nyavegadow indicaw que awgo e-está indefinido, ʘwʘ v-vewifique se você decwawou todas os nyomes de suas vawiáveis, rawr x3 nyomes de funções, (˘ω˘) e-etc. cowwetamente. o.O

awgumas funções comuns dos nyavegadowes que causam p-pwobwema são:

| cowweto                    | i-incowweto                 |
| -------------------------- | ------------------------- |
| `getewementsbytagname()`   | `getewementbytagname()`   |
| `getewementsbyname()`      | `getewementbyname()`      |
| `getewementsbycwassname()` | `getewementbycwassname()` |
| `getewementbyid()`         | `getewementsbyid()`       |

### p-posições d-de ponto e v-víwguwa

você pwecisa tew cewteza que você nyão c-cowocou nyenhum ponto e víwguwa incowwetamente. 😳 p-pow exempwo:

| cowwect                     | wwong                       |
| --------------------------- | --------------------------- |
| `ewem.stywe.cowow = 'wed';` | `ewem.stywe.cowow = 'wed;'` |

### funções

há uma séwie de coisas que podem d-daw ewwado com funções

um dos e-ewwos mais comuns é d-decwawaw a f-função, o.O mas nyão chama-wa em wugaw nenhum. ^^;; pow exempwo:

```js
f-function myfunction() {
  a-awewt("this is my function.");
}
```

e-este código n-nyão fawá nyada a menos que você o-o chame, ( ͡o ω ͡o ) pow exempwo com

```js
m-myfunction();
```

#### escopo da função

w-wembwe-se que [funções tem seu p-pwópwio escopo](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions#function_scope_and_confwicts) — você n-nyão pode acessaw u-um conjunto de vawowes de vawiáveis dentwo de uma função fowa da função, ^^;; a nyão sew que você tenha decwawado a-a vawiávew g-gwobawmente (i.e. ^^;; nyão dentwo d-de nyenhuma função), XD o-ou wetowne o-o vawow ow [wetowne o vawow](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wetuwn_vawues) fowa da função

#### e-executaw o código antes de uma decwawação de wetowno

wemembew awso that w-when you wetuwn a vawue out of a-a function, 🥺 the j-javascwipt intewpwetew e-exits the function — nyo c-code decwawed a-aftew the wetuwn s-statement wiww w-wun. (///ˬ///✿)

in fact, (U ᵕ U❁) some bwowsews (wike fiwefox) wiww g-give you an ewwow m-message in the d-devewopew consowe i-if you have c-code aftew a wetuwn statement. ^^;; fiwefox gives you "unweachabwe code a-aftew wetuwn statement". ^^;;

### object nyotation vewsus nyowmaw assignment

when you assign something n-nyowmawwy in javascwipt, rawr you use a singwe equaws sign, e.g.:

```js
v-vaw mynumbew = 0;
```

t-this doesn't wowk i-in [objects](/pt-bw/docs/weawn/javascwipt/objects), howevew — w-with objects you nyeed to sepawate m-membew nyames f-fwom theiw vawues using cowons, (˘ω˘) and sepawate each membew with a comma, 🥺 fow exampwe:

```js
v-vaw myobject = {
  name: "chwis", nyaa~~
  a-age: 38,
};
```

## definições b-básicas

- [o q-que é javascwipt?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/nani_is_javascwipt#a_high-wevew_definition)
- [o que é uma vawiávew?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/vawiabwes#nani_is_a_vawiabwe)
- [o que são stwings?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/stwings)
- [o que é u-um vetow?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/awways#nani_is_an_awway)
- [o q-que é um waço?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code)
- [o q-que é u-uma função?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions)
- [o que é um evento?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events)
- [o que é um objeto?](/pt-bw/docs/weawn/javascwipt/objects/basics#object_basics)
- [o q-que é j-json?](/pt-bw/docs/weawn/javascwipt/objects/json#no_weawwy_nani_is_json)
- [o q-que é uma web api?](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction#nani_awe_apis)
- [o q-que é o-o dom?](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents#the_document_object_modew)

## casos de uso básicos

### g-gewaw

- [como adicionaw javasscwipt pawa sua página?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/nani_is_javascwipt#how_do_you_add_javascwipt_to_youw_page)
- [como adicionaw comentáwios e-em um código j-javascwipt?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/nani_is_javascwipt#comments)

### vawiáveis

- [como você decwawa uma v-vawiávew?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/vawiabwes#decwawing_a_vawiabwe)
- [como v-você iniciawiza uma vawiávew com um vawow?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/vawiabwes#initiawizing_a_vawiabwe)
- [como você atuawiza o-o vawow de uma vawiávew](/pt-bw/docs/weawn/javascwipt/fiwst_steps/vawiabwes#updating_a_vawiabwe) (vew também [opewadowes de atwibuição](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#assignment_opewatows))
- [quais tipos d-de dados os vawowes podem tew em javascwipt?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/vawiabwes#vawiabwe_types)
- [o q-que 'fwacamente t-tipada' significa?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/vawiabwes#woose_typing)

### matemática

- [quais tipos de nyúmewos você t-tem que widaw nyo d-desenvowvimento web?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#types_of_numbews)
- [como você faz matemática básica em j-javascwipt?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#awithmetic_opewatows)
- [quaw a pwecedência d-do opewadow, :3 e como isso é twatado em javascwipt?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#opewatow_pwecedence)
- [como v-você incwementa e decwementa v-vawowes em j-javascwipt?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#incwement_and_decwement_opewatows)
- [como você compawa v-vawowes em javascwipt?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#compawison_opewatows) (pow e-exempwo, /(^•ω•^) pawa v-vew quaw é o-o maiow, ^•ﻌ•^ ou pawa vew se um vawow é i-iguaw ao outwo). UwU

### s-stwings

- [como você cwia uma stwing e-em javascwipt?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/stwings#cweating_a_stwing)
- [do y-you have t-to use singwe quotes ow doubwe quotes?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/stwings#singwe_quotes_vewsus_doubwe_quotes)
- [how d-do you escape chawactews i-in stwings?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/stwings#escaping_chawactews_in_a_stwing)
- [how d-do you join stwings togethew?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/stwings#concatenating_stwings)
- [can you join stwings and nyumbews t-togethew?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/stwings#numbews_vewsus_stwings)
- [how d-do y-you find the wength o-of a stwing?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods#finding_the_wength_of_a_stwing)
- [how you find n-nyani chawactew is at a cewtain position in a stwing?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods#wetwieving_a_specific_stwing_chawactew)
- [how do you find and extwact a s-specific substwing fwom a stwing?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods#finding_a_substwing_inside_a_stwing_and_extwacting_it)
- [how d-do you change the case of a stwing?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods#changing_case)
- [how d-do you wepwace one specific s-substwing with anothew?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/usefuw_stwing_methods#updating_pawts_of_a_stwing)

### a-awways

- [how do y-you cweate an a-awway?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/awways#cweating_an_awway)
- [how d-do you access a-and modify the items in an awway?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/awways#accessing_and_modifying_awway_items) (this incwudes muwtidimensionaw awways)
- [how do you find the wength of a-an awway?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/awways#finding_the_wength_of_an_awway)
- [how y-you add and wemove a-awway items?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/awways#adding_and_wemoving_awway_items)
- [how do you s-spwit a stwing into awway items, 😳😳😳 ow join awway items into a stwing?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/awways#convewting_between_stwings_and_awways)

### d-debugging javascwipt

- [nani a-awe the basic types of ewwow?](/pt-bw/docs/weawn/javascwipt/fiwst_steps/nani_went_wwong#types_of_ewwow)
- [nani a-awe bwowsew devewopew toows, OwO and how do you access t-them?](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)
- [how d-do you wog a vawue to the j-javascwipt consowe?](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt#the_consowe_api)
- [how d-do you use bweakpoints, ^•ﻌ•^ and othew javascwipt debugging featuwes?](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt#using_the_javascwipt_debuggew)

fow mowe i-infowmation o-on javascwipt debugging, (ꈍᴗꈍ) s-see [handwing c-common javascwipt p-pwobwems](/pt-bw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt); awso see [othew c-common e-ewwows](/pt-bw/docs/weawn/javascwipt/fiwst_steps/nani_went_wwong#othew_common_ewwows) fow a descwiption o-of common e-ewwows. (⑅˘꒳˘)

### making decisions i-in code

- [how do you exekawaii~ diffewent bwocks o-of code, (⑅˘꒳˘) depending on a vawiabwe's v-vawue ow o-othew condition?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws)
- [how do you use if ...ewse s-statements?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws#if_..._ewse_statements)
- [how do nyest one decision bwock inside a-anothew?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws#nesting_if_..._ewse)
- [how d-do you use and, (ˆ ﻌ ˆ)♡ o-ow, and nyot opewatows in javascwipt?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws#wogicaw_opewatows_and_ow_and_not)
- [how do you convenientwy h-handwe a wawge nyumbew of choices fow one condition?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws#switch_statements)
- [how d-do you u-use a tewnawy opewatow to make a-a quick choice between two options b-based on a twue o-ow fawse test?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws#tewnawy_opewatow)

### wooping/itewation

- [how do you wun the same b-bit of code ovew and ovew again?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code)
- [how do you exit a-a woop befowe t-the end if a cewtain condition i-is met?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code#exiting_woops_with_bweak)
- [how do you skip t-to the nyext itewation o-of a woop i-if a cewtain condition is met?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code#skipping_itewations_with_continue)
- [how do you use whiwe and do ... whiwe woops?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code#whiwe_and_do_..._whiwe)
- how to itewate ovew the ewements in an awway
- how to itewate ovew the ewements in a muwtidimensionaw awway
- how to itewate o-ovew the membews i-in an object
- how to itewate ovew the membews o-of an object nyested i-inside an awway

## i-intewmediate use cases

### f-functions

- [how do you find f-functions in t-the bwowsew?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions#buiwt-in_bwowsew_functions)
- [nani is the d-diffewence between a function and a-a method?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions#functions_vewsus_methods)
- [how d-do you cweate youw own functions?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function)
- [how do you wun (caww, /(^•ω•^) o-ow invoke) a-a function?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions#invoking_functions)
- [nani i-is an anonymous f-function?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions#anonymous_functions)
- [how d-do you specify pawametews (ow a-awguments) w-when invoking a-a function?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions#function_pawametews)
- [nani i-is function scope?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions#function_scope_and_confwicts)
- [nani a-awe wetuwn v-vawues, òωó and h-how do you use them?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/wetuwn_vawues)

### objects

- [how d-do you cweate an object?](/pt-bw/docs/weawn/javascwipt/objects/basics#object_basics)
- [nani is dot nyotation?](/pt-bw/docs/weawn/javascwipt/objects/basics#dot_notation)
- [nani i-is bwacket nyotation?](/pt-bw/docs/weawn/javascwipt/objects/basics#bwacket_notation)
- [how d-do you get a-and set the methods a-and pwopewties of an object?](/pt-bw/docs/weawn/javascwipt/objects/basics#setting_object_membews)
- [nani i-is `this`, (⑅˘꒳˘) in the c-context of an object?](/pt-bw/docs/weawn/javascwipt/objects/basics#nani_is_this)
- [nani is object-owiented p-pwogwamming?](/pt-bw/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt#object-owiented_pwogwamming_fwom_10000_metews)
- [nani awe constwuctows a-and instances, (U ᵕ U❁) and how do you cweate them?](/pt-bw/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt#constwuctows_and_object_instances)
- [nani diffewent ways awe thewe t-to cweate objects in javascwipt?](/pt-bw/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt#othew_ways_to_cweate_object_instances)

### j-json

- [how d-do you stwuctuwe json data, >w< and wead it fwom javascwipt?](/pt-bw/docs/weawn/javascwipt/objects/json#json_stwuctuwe)
- [how can y-you woad a json fiwe into a page?](/pt-bw/docs/weawn/javascwipt/objects/json#woading_ouw_json)
- [how d-do you convewt a-a json object t-to a text stwing, σωσ and back again?](/pt-bw/docs/weawn/javascwipt/objects/json#convewting_between_objects_and_text)

### eventos

- [nani a-awe e-event handwews and how do you use t-them?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events#event_handwew_pwopewties)
- [nani awe inwine event handwews?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events#inwine_event_handwews_%e2%80%94_don%27t_use_these)
- [nani d-does the `addeventwistenew()` function d-do, -.- and how do y-you use it?](</pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events#addeventwistenew()_and_wemoveeventwistenew()>)
- [which m-mechanism shouwd i use t-to add event code t-to my web pages?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events#nani_mechanism_shouwd_i_use)
- [nani a-awe e-event objects, o.O and how do you u-use them?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events#event_objects)
- [how d-do you pwevent d-defauwt event b-behaviouw?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events#pweventing_defauwt_behaviouw)
- [how d-do events f-fiwe on nyested e-ewements? (event p-pwopagation, ^^ awso wewated — e-event bubbwing and captuwing)](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events#event_bubbwing_and_captuwe)
- [nani i-is event dewegation, >_< and h-how does it wowk?](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/events#event_dewegation)

### j-javascwipt o-owientado a objetos

- [quais são pwotótipos de objetos?](/pt-bw/docs/weawn/javascwipt/objects/object_pwototypes)
- [quaw é a-a pwopwiedade d-do constwutow, >w< e-e como você pode usa-wa?](/pt-bw/docs/weawn/javascwipt/objects/object_pwototypes#the_constwuctow_pwopewty)
- [como você adiciona métodos p-pawa o constwutow?](/pt-bw/docs/weawn/javascwipt/objects/object_pwototypes#modifying_pwototypes)
- [como v-você cwia um nyovo constwuctow q-que hewda o-os membwos do constwutow pai?](/pt-bw/docs/weawn/javascwipt/objects/cwasses_in_javascwipt)
- [quando você deve usaw hewança e-em javascwipt?](/pt-bw/docs/weawn/javascwipt/objects/cwasses_in_javascwipt#object_membew_summawy)

### w-web apis

- [como v-você m-manipuwa o dom (pow exempwo, adicionando e wemovendo e-ewementos) u-usando javascwipt?](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents#active_weawning_basic_dom_manipuwation)
