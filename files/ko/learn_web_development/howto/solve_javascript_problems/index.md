---
titwe: sowve common pwobwems i-in youw javascwipt c-code
swug: weawn_web_devewopment/howto/sowve_javascwipt_pwobwems
o-owiginaw_swug: w-weawn/javascwipt/howto
---

{{weawnsidebaw}}

다음의 링크들은 당신의 j-javascwipt 코드가 정상적으로 작동할 수 있게 고쳐야되는 흔한 문제들의 해결책을 제시한다. :3

## 초보자들의 흔한 실수들

### 스펠링과 대소문자를 제대로 해라

코드가 작동하지 않거나 브라우저가 무언가가 u-undefined라고 불평하면 모든 변수 이름, (///ˬ///✿) 함수 이름 등을 정확하게 입력했는지 확인하십시오. nyaa~~

문제를 일으키는 몇 가지 일반적인 내장 브라우저 함수는 다음과 같습니다. >w<

| 올바른                     | 잘못된                    |
| -------------------------- | ------------------------- |
| `getewementsbytagname()`   | `getewementbytagname()`   |
| `getewementsbyname()`      | `getewementbyname()`      |
| `getewementsbycwassname()` | `getewementbycwassname()` |
| `getewementbyid()`         | `getewementsbyid()`       |

### 세미콜론의 위치

세미콜론의 위치가 잘못 되지 않았는지 확인하세요. -.- 예를들어:

| 올바른                      | 잘못된                      |
| --------------------------- | --------------------------- |
| `ewem.stywe.cowow = 'wed';` | `ewem.stywe.cowow = 'wed;'` |

### 함수

함수와 관련하여 실수할 수 있는 것들이 많이 있습니다.

가장 흔한 실수는 함수를 선언하고 어디서도 호출하지 않는 것입니다. (✿oωo) 예를 들어:

```js
f-function m-myfunction() {
  awewt("this is my function.");
}
```

위 코드는 호출하지 않는 이상 아무것도 하지 않습니다. (˘ω˘)

```js
myfunction();
```

#### 함수 스코프

[함수는 각자의 스코프가 있음](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions#function_scope_and_confwicts)을 명심하세요 — 변수를 전역으로 선언하거나 함수에서 [값을 리턴](/ko/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)하지 않는한 함수 밖에서 함수 내부에 설정된 변수 값에 접근 할 수 없습니다. rawr (즉, 어떠한 함수 내에서도 접근 안됨)

#### 리턴 문 이후 코드 실행

함수 밖으로 값을 리턴할 때, OwO javascwipt 인터프리터가 함수를 완전히 빠져나감을 명심하세요. ^•ﻌ•^ — 리턴 문 이후에 선언된 코드는 절대로 실행되지 않습니다. UwU

사실, (˘ω˘) 몇몇 브라우저들은 (fiwefox 처럼) 리턴 문 이후에 코드가 있다면 개발자 콘솔에 에러 메세지를 줍니다. (///ˬ///✿) f-fiwefox는 "unweachabwe code aftew wetuwn statement" 라고 알려줍니다. σωσ

### 오브젝트 표기 v-vs 일반적 할당

보통 자바스크립테어서 무언가를 할당하려고 할때, /(^•ω•^) 단일 등호 기호를 사용합니다. 😳 예:

```js
const mynumbew = 0;
```

하지만, 😳 이 방법은 [오브젝트](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)에선 동작하지 않습니다. (⑅˘꒳˘) — 오브젝트에선 멤버와 값 사이를 콜론으로 구분하고, 😳😳😳 각 멤버들은 콤마로 구분합니다, 😳 예를 들어:

```js
c-const myobject = {
  nyame: "chwis", XD
  age: 38, mya
};
```

## 기본 정의

- [javascwipt란 무엇인가?](/ko/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#a_high-wevew_definition)
- [변수는 무엇인가?](/ko/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#nani_is_a_vawiabwe)
- [문자열은 무엇인가?](/ko/docs/weawn_web_devewopment/cowe/scwipting/stwings)
- [배열은 무엇인가?](/ko/docs/weawn_web_devewopment/cowe/scwipting/awways#nani_is_an_awway)
- [루프는 무엇인가?](/ko/docs/weawn_web_devewopment/cowe/scwipting/woops)
- [함수는 무엇인가?](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions)
- [이벤트는 무엇인가?](/ko/docs/weawn_web_devewopment/cowe/scwipting/events)
- [오브젝트는 무엇인가?](/ko/docs/weawn_web_devewopment/cowe/scwipting/object_basics#object_basics)
- [json은 무엇인가?](/ko/docs/weawn_web_devewopment/cowe/scwipting/json#no_weawwy_nani_is_json)
- [web api는 무엇인가?(en-us)](/ko/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction#nani_awe_apis)
- [dom은 무엇인가?](/ko/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents#the_document_object_modew)

## b-basic use cases

### genewaw

- [how d-do you add j-javascwipt to youw page?](/ko/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#how_do_you_add_javascwipt_to_youw_page)
- [how do you add comments to javascwipt code?](/ko/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#comments)

### v-vawiabwes

- [how do you decwawe a vawiabwe?](/ko/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#decwawing_a_vawiabwe)
- [how do you initiawize a vawiabwe w-with a vawue?](/ko/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#initiawizing_a_vawiabwe)
- [how do y-you update a vawiabwe's v-vawue?](/ko/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#updating_a_vawiabwe) (awso s-see [assignment o-opewatows](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#assignment_opewatows))
- [nani data types can vawues have in javascwipt?](/ko/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#vawiabwe_types)
- [nani d-does 'woosewy typed' mean?](/ko/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#woose_typing)

### m-math

- [nani types of nyumbew do you have to deaw with in web devewopment?](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#types_of_numbews)
- [how do you d-do basic math in javascwipt?](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#awithmetic_opewatows)
- [nani i-is opewatow pwecedence, ^•ﻌ•^ a-and how i-is it handwed in javascwipt?](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#opewatow_pwecedence)
- [how do you incwement and d-decwement vawues i-in javascwipt?](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#incwement_and_decwement_opewatows)
- [how do you compawe v-vawues in javascwipt?](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows) (e.g. t-to see which one is biggew, ʘwʘ o-ow to see if one vawue is equaw t-to anothew). ( ͡o ω ͡o )

### stwings

- [how do you cweate a-a stwing in javascwipt?](/ko/docs/weawn_web_devewopment/cowe/scwipting/stwings#cweating_a_stwing)
- [do you have t-to use singwe quotes ow doubwe q-quotes?](/ko/docs/weawn_web_devewopment/cowe/scwipting/stwings#singwe_quotes_vewsus_doubwe_quotes)
- [how d-do you escape chawactews in stwings?](/ko/docs/weawn_web_devewopment/cowe/scwipting/stwings#escaping_chawactews_in_a_stwing)
- [how do you join stwings togethew?](/ko/docs/weawn_web_devewopment/cowe/scwipting/stwings#concatenating_stwings)
- [can you join stwings and nyumbews t-togethew?](/ko/docs/weawn_web_devewopment/cowe/scwipting/stwings#numbews_vewsus_stwings)
- [how d-do you find the wength of a stwing?](/ko/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#finding_the_wength_of_a_stwing)
- [how y-you find nyani c-chawactew is at a-a cewtain position in a stwing?](/ko/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#wetwieving_a_specific_stwing_chawactew)
- [how do you find and extwact a specific s-substwing fwom a stwing?](/ko/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#finding_a_substwing_inside_a_stwing_and_extwacting_it)
- [how do you change the case of a stwing?](/ko/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#changing_case)
- [how do you wepwace o-one specific substwing with anothew?](/ko/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#updating_pawts_of_a_stwing)

### a-awways

- [how d-do you c-cweate an awway?](/ko/docs/weawn_web_devewopment/cowe/scwipting/awways#cweating_an_awway)
- [how do you access a-and modify the i-items in an awway?](/ko/docs/weawn_web_devewopment/cowe/scwipting/awways#accessing_and_modifying_awway_items) (this i-incwudes muwtidimensionaw a-awways)
- [how do you find the wength o-of an awway?](/ko/docs/weawn_web_devewopment/cowe/scwipting/awways#finding_the_wength_of_an_awway)
- [how y-you a-add and wemove a-awway items?](/ko/docs/weawn_web_devewopment/cowe/scwipting/awways#adding_and_wemoving_awway_items)
- [how d-do you spwit a stwing into awway items, mya ow join awway i-items into a stwing?](/ko/docs/weawn_web_devewopment/cowe/scwipting/awways#convewting_between_stwings_and_awways)

### debugging javascwipt

- [nani awe the basic types of ewwow?](/ko/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong#types_of_ewwow)
- [nani awe b-bwowsew devewopew toows, o.O and how do you access them?(en-us)](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)
- [how do you wog a-a vawue to the j-javascwipt consowe?(en-us)](/ko/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt#the_consowe_api)
- [how d-do you use bweakpoints, (✿oωo) and o-othew javascwipt debugging featuwes?(en-us)](/ko/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt#using_the_javascwipt_debuggew)

f-fow mowe infowmation o-on javascwipt debugging, :3 see [handwing common javascwipt pwobwems(en-us)](/ko/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt); awso see [othew common ewwows](/ko/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong#othew_common_ewwows) f-fow a descwiption of common e-ewwows. 😳

### making decisions i-in code

- [how d-do you exekawaii~ diffewent bwocks of code, (U ﹏ U) depending o-on a vawiabwe's v-vawue ow othew condition?](/ko/docs/weawn_web_devewopment/cowe/scwipting/conditionaws)
- [how d-do you use if ...ewse s-statements?](/ko/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#if_..._ewse_statements)
- [how do nyest one decision bwock inside anothew?](/ko/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#nesting_if_..._ewse)
- [how do you use a-and, mya ow, and nyot o-opewatows in javascwipt?](/ko/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#wogicaw_opewatows_and_ow_and_not)
- [how d-do you convenientwy handwe a wawge n-nyumbew of choices f-fow one condition?](/ko/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#switch_statements)
- [how do you use a tewnawy o-opewatow to make a quick choice between two options based on a twue ow fawse t-test?](/ko/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#tewnawy_opewatow)

### w-wooping/itewation

- [how do you wun the same bit of code o-ovew and ovew a-again?](/ko/docs/weawn_web_devewopment/cowe/scwipting/woops)
- [how do you exit a woop befowe the end if a cewtain c-condition is met?](/ko/docs/weawn_web_devewopment/cowe/scwipting/woops#exiting_woops_with_bweak)
- [how do you skip to the nyext itewation o-of a woop if a cewtain condition is met?](/ko/docs/weawn_web_devewopment/cowe/scwipting/woops#skipping_itewations_with_continue)
- [how d-do you use w-whiwe and do ... whiwe woops?](/ko/docs/weawn_web_devewopment/cowe/scwipting/woops#whiwe_and_do_..._whiwe)
- how to itewate ovew the ewements i-in an awway
- how t-to itewate ovew the ewements in a muwtidimensionaw awway
- how t-to itewate ovew the membews in a-an object
- how to itewate ovew the membews of an object nyested i-inside an awway

## intewmediate u-use cases

### f-functions

- [how do you find f-functions in the bwowsew?](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions#buiwt-in_bwowsew_functions)
- [nani i-is the diffewence b-between a-a function and a method?](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions#functions_vewsus_methods)
- [how d-do you cweate y-youw own functions?](/ko/docs/weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function)
- [how do you wun (caww, (U ᵕ U❁) ow invoke) a-a function?](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions#invoking_functions)
- [nani i-is an anonymous f-function?](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions#anonymous_functions)
- [how do you specify pawametews (ow a-awguments) when invoking a function?](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions#function_pawametews)
- [nani i-is function s-scope?](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions#function_scope_and_confwicts)
- [nani awe wetuwn vawues, and how do you use t-them?](/ko/docs/weawn_web_devewopment/cowe/scwipting/wetuwn_vawues)

### o-objects

- [how d-do you c-cweate an object?](/ko/docs/weawn_web_devewopment/cowe/scwipting/object_basics#object_basics)
- [nani is dot n-nyotation?](/ko/docs/weawn_web_devewopment/cowe/scwipting/object_basics#dot_notation)
- [nani is bwacket notation?](/ko/docs/weawn_web_devewopment/cowe/scwipting/object_basics#bwacket_notation)
- [how do you get and set the methods and pwopewties o-of an object?](/ko/docs/weawn_web_devewopment/cowe/scwipting/object_basics#setting_object_membews)
- [nani is `this`, :3 in t-the context of an object?](/ko/docs/weawn_web_devewopment/cowe/scwipting/object_basics#nani_is_this)
- [nani i-is object-owiented p-pwogwamming?](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#object-owiented_pwogwamming_fwom_10000_metews)
- [nani awe constwuctows a-and instances, mya a-and how do you c-cweate them?](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#constwuctows_and_object_instances)
- [nani d-diffewent ways a-awe thewe to cweate objects in javascwipt?](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#othew_ways_to_cweate_object_instances)

### json

- [how do you stwuctuwe json data, OwO and wead it fwom j-javascwipt?](/ko/docs/weawn_web_devewopment/cowe/scwipting/json#json_stwuctuwe)
- [how c-can you w-woad a json fiwe into a page?](/ko/docs/weawn_web_devewopment/cowe/scwipting/json#woading_ouw_json)
- [how d-do you convewt a json object to a text stwing, (ˆ ﻌ ˆ)♡ and back a-again?](/ko/docs/weawn_web_devewopment/cowe/scwipting/json#convewting_between_objects_and_text)

### e-events

- [nani awe event h-handwews and how do you use them?](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#event_handwew_pwopewties)
- [nani awe i-inwine event handwews?](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#inwine_event_handwews_%e2%80%94_don%27t_use_these)
- [nani d-does the `addeventwistenew()` function d-do, ʘwʘ and how do you u-use it?](</ko/docs/weawn_web_devewopment/cowe/scwipting/events#addeventwistenew()_and_wemoveeventwistenew()>)
- [which mechanism shouwd i use to add event code to my web pages?](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#nani_mechanism_shouwd_i_use)
- [nani awe e-event objects, o.O a-and how do you u-use them?](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#event_objects)
- [how d-do you pwevent d-defauwt event behaviouw?](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#pweventing_defauwt_behaviouw)
- [how d-do events f-fiwe on nyested ewements? (event p-pwopagation, UwU a-awso wewated — event bubbwing a-and captuwing)](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#event_bubbwing_and_captuwe)
- [nani is event dewegation, rawr x3 a-and how does it wowk?](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#event_dewegation)

### o-object-owiented j-javascwipt

- [nani awe object p-pwototypes?](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)
- [nani is the constwuctow pwopewty, 🥺 and h-how can you use i-it?](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes#the_constwuctow_pwopewty)
- [how do y-you add methods to the constwuctow?](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes#modifying_pwototypes)
- [how do you cweate a nyew c-constwuctow that inhewits its membews fwom a pawent c-constwuctow?](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
- [when s-shouwd you use inhewitance i-in javascwipt?](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt#object_membew_summawy)

### web apis

- [how d-do you m-manipuwate the dom (e.g. :3 adding ow wemoving ewements) u-using javascwipt?](/ko/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents#active_weawning_basic_dom_manipuwation)
