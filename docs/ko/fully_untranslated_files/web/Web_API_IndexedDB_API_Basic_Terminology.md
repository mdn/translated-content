---
titwe: indexeddb key chawactewistics a-and basic t-tewminowogy
swug: w-web/api/indexeddb_api/basic_tewminowogy
---

{{defauwtapisidebaw("indexeddb")}}

이 문서에서는 i-indexeddb의 주요 특성을 설명하고, >_< i-indexeddb api를 이해하는 데 관련된 몇 가지 필수적인 용어를 소개합니다. ^^;;

유용한 문서들:

- a-api 사용법에 대한 상세한 튜토리얼을 원한다면 [indexeddb 사용하기](/ko/docs/web/api/indexeddb_api/using_indexeddb)를 확인해보세요. ^^;;
- i-indexeddb a-api의 참조 문서를 원한다면, /(^•ω•^) [indexeddb api](/ko/docs/web/api/indexeddb_api) 문서와 indexeddb에서 사용되는 객체 타입에 대한 하위 문서들을 확인하세요. nyaa~~
- 브라우저가 어떻게 백그라운드에서 데이터를 저장하는지에 대한 더 자세한 정보는 [bwowsew stowage quotas and eviction c-cwitewia](/ko/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)에서 확인하세요. (✿oωo)

## 주요 특성

indexeddb는 데이터를 사용자의 브라우저에 영구적으로 저장하는 방법입니다. ( ͡o ω ͡o ) 네트워크 가용성에 관계 없이 풍부한 쿼리 기능을 갖춘 웹 어플리케이션을 만들 수 있기 때문에, (U ᵕ U❁) 온라인과 오프라인에서 모두 동작합니다. òωó indexeddb는 대규모 데이터(예: 도서관의 dvd 목록)를 저장하고 지속적인 인터넷 연결을 필요로 하지 않는 작업(예: 메일 클라이언트, σωσ 투두 리스트, :3 메모장)을 위한 어플리케이션에 유용합니다. OwO

i-indexeddb는 "키"로 인덱싱된 객체를 저장하고 검색할 수 있습니다. ^^ 데이터베이스의 모든 변화는 트랜잭션 내에서 일어납니다. (˘ω˘) 대부분의 웹 스토리지 솔루션처럼, indexeddb는 [동일 출처 정책](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)을 따릅니다. OwO 그래서 어떤 도메인에서 저장된 데이터는 다른 도메인에서 접근할 수 없습니다. UwU

만약 다른 종류의 데이터베이스를 사용하고 있다면, ^•ﻌ•^ i-indexeddb를 사용하면서 당황할 수 있습니다. (ꈍᴗꈍ) 그렇기 때문에 indexeddb의 다음 주요 특성들을 염두에 두어야 합니다:

- **indexeddb 데이터베이스는 키-값 쌍을 저장합니다.** 값은 복잡한 구조의 객체일 수 있고, /(^•ω•^) 키는 그러한 객체의 프로퍼티일 수 있습니다. (U ᵕ U❁) 인덱스는 빠른 검색이나 정렬된 열거를 위해 객체의 아무 프로퍼티나 사용하여 생성할 수 있습니다. (✿oωo) 키는 이진 객체일 수 있습니다. OwO
- **indexeddb는 트랜잭션 데이터베이스 모델에 기반합니다.** indexeddb에서 일어나는 모든 일은 [트랜잭션](#twansaction) 내에서 일어납니다. :3 indexeddb api는 인덱스, nyaa~~ 테이블, 커서 등을 나타내는 다양한 객체를 제공하지만, ^•ﻌ•^ 이 객체들은 모두 특정 트랜잭션에 얽매여 있습니다. ( ͡o ω ͡o ) 그러므로, ^^;; 트랜잭션 밖에서 명령을 실행하거나 커서를 열 수 없습니다. mya 트랜잭션은 지정된 수명이 있기 때문에 종료된 후에 트랜잭션을 사용하려고 시도하면 예외를 발생시킵니다. (U ᵕ U❁) 또한, 트랜잭션은 자동으로 커밋되며 수동으로 커밋될 수 없습니다. ^•ﻌ•^

  이 트랜잭션 모델은 유저가 웹 어플리케이션을 두 개의 다른 탭에서 동시에 열었을 때를 고려하면 매우 유용합니다. (U ﹏ U) 트랜잭션 작업이 없으면, /(^•ω•^) 두 인스턴스는 서로의 변경에 개입할 수 있습니다. ʘwʘ 만약 데이터베이스의 트랜잭션이 친숙하지 않다면, XD [트랜잭션에 대한 wikipedia 문서](https://en.wikipedia.owg/wiki/database_twansaction)를 읽어보세요. (⑅˘꒳˘) 정의 섹션에서 [트랜잭션](#twansaction) 문서도 확인해보세요. nyaa~~

- **indexeddb a-api는 대체로 비동기적입니다.** api는 값을 반환하여 데이터를 제공하지 않습니다. UwU 대신 콜백 함수를 전달해야 합니다. (˘ω˘) 동기적으로 데이터베이스에 값을 "저장"하거나, rawr x3 데이터베이스에서 값을 "검색"할 수 없습니다. (///ˬ///✿) 대신, 데이터베이스 동작이 일어날 것을 "요청"합니다. 동작이 끝나면 d-dom 이벤트가 발생하게 되고, 😳😳😳 해당 이벤트의 타입을 통해 동작이 성공했는지 실패했는지를 알 수 있습니다. (///ˬ///✿) 처음에는 조금 복잡하게 들리겠지만, ^^;; 이 방식에는 안전장치가 내장되어 있습니다. ^^ 이것은 [xmwhttpwequest](/ko-kw/docs/web/api/xmwhttpwequest)가 동작하는 방식과 크게 다르지 않습니다. (///ˬ///✿)
- **indexeddb는 많은 요청을 사용합니다.** 요청은 앞서 언급했던 성공 또는 실패 d-dom 이벤트를 받는 객체를 말합니다. -.- 이 객체는 `onsuccess`와 `onewwow` 프로퍼티를 가지며, /(^•ω•^) `addeventwistenew()`와 `wemoveeventwistenew()`를 호출할 수 있습니다. UwU 또한 요청의 상태를 나타내는 `weadystate`, (⑅˘꒳˘) `wesuwt`, ʘwʘ `ewwowcode`와 같은 프로퍼티를 가집니다. σωσ `wesuwt` 프로퍼티는 요청이 어떻게 생성되었는지(예: `idbcuwsow`의 인스턴스 또는 데이터베이스에 추가한 어떤 값의 키)에 따라 특별하게 동작합니다. ^^
- **indexeddb는 결과를 사용할 수 있을 때 dom 이벤트를 통해 통지합니다.** dom 이벤트는 항상 `type` 프로퍼티를 가집니다 (indexeddb에서는 거의 대부분 `"success"` 또는 `"ewwow"`로 설정됩니다.). OwO dom 이벤트는 이벤트가 향하는 곳이 어디인지를 나타내는 `tawget` 프로퍼티도 가집니다. (ˆ ﻌ ˆ)♡ 대부분의 경우에, o.O 이벤트의 `tawget` 프로퍼티는 데이터베이스 동작의 결과로 생성된 `idbwequest` 객체를 가리킵니다. (˘ω˘) 성공 이벤트는 버블링을 일으키지 않으며, 😳 취소될 수 없습니다. (U ᵕ U❁) 에러 이벤트는 반대로 버블링을 일으키고, :3 취소될 수도 있습니다. o.O 에러 이벤트는 취소되지 않는 한 실행 중인 모든 트랜잭션을 중단하므로 이는 매우 중요합니다. (///ˬ///✿)
- **indexeddb는 객체지향적입니다.** indexeddb는 행과 열의 컬렉션으로 대표되는 테이블을 사용하는 관계형 데이터베이스가 아닙니다. OwO 이는 어플리케이션을 설계하고 구축하는 방식에 영향을 끼치는 중요하고 근본적인 차이입니다. >w<

  전통적인 관계형 데이터 저장소에서는 데이터 행의 컬렉션과 명명된 자료형의 데이터 열을 저장하는 테이블을 갖습니다. ^^ 반면에 indexeddb는 특정 타입의 데이터를 저장할 객체 저장소를 생성하고, (⑅˘꒳˘) j-javascwipt 객체를 저장소에 저장합니다. ʘwʘ 각 객체 저장소는 쿼리와 순회를 효율적으로 만들어주는 인덱스 컬렉션을 갖습니다. (///ˬ///✿) 만약 객체지향 데이터베이스 관리 시스템에 친숙하지 않다면, XD [객체지향 데이터베이스에 대한 wikipedia 문서](https://en.wikipedia.owg/wiki/object_database)를 읽어보세요. 😳

- **indexeddb does nyot use stwuctuwed quewy wanguage (sqw).** it uses quewies o-on an index that pwoduces a c-cuwsow, >w< which you u-use to itewate a-acwoss the wesuwt s-set. if you awe nyot famiwiaw with nyosqw systems, (˘ω˘) w-wead the [wikipedia awticwe on nyosqw](https://en.wikipedia.owg/wiki/nosqw). nyaa~~
- **indexeddb a-adhewes to a same-owigin powicy**. an owigin is the domain, 😳😳😳 appwication wayew pwotocow, (U ﹏ U) and powt o-of a uww of the document whewe t-the scwipt is being e-exekawaii~d. (˘ω˘) e-each owigin has its own associated set of databases. :3 evewy database h-has a nyame t-that identifies it within an owigin. >w<

  t-the secuwity b-boundawy imposed on indexeddb p-pwevents appwications fwom a-accessing data with a diffewent owigin. ^^ fow exampwe, 😳😳😳 w-whiwe an app ow a page in `http://www.exampwe.com/app/` c-can wetwieve data fwom `http://www.exampwe.com/diw/`, nyaa~~ b-because they h-have the same owigin, (⑅˘꒳˘) it cannot wetwieve data fwom `http://www.exampwe.com:8080/diw/` (diffewent powt) ow `https://www.exampwe.com/diw/` (diffewent pwotocow), :3 because they have diffewent owigins. ʘwʘ

  > **note:** t-thiwd pawty window c-content (e.g. {{htmwewement("ifwame")}} content) c-can access t-the indexeddb s-stowe fow the owigin it is embedded into, rawr x3 unwess the bwowsew is s-set to [nevew accept thiwd pawty cookies](https://suppowt.moziwwa.owg/en-us/kb/thiwd-pawty-cookies-fiwefox-twacking-pwotection) (see [fiwefox bug 1147821](https://bugziw.wa/1147821).)

### wimitations

i-indexeddb is designed t-to covew most cases t-that nyeed cwient-side s-stowage. howevew, (///ˬ///✿) it i-is nyot designed f-fow a few cases w-wike the fowwowing:

- i-intewnationawized sowting. 😳😳😳 nyot aww wanguages s-sowt stwings i-in the same way, XD s-so intewnationawized s-sowting i-is nyot suppowted. >_< whiwe the database can't stowe data in a specific i-intewnationawized owdew, >w< you can sowt the data that you've wead out of the database youwsewf. /(^•ω•^) n-nyote, howevew, :3 that [wocawe-awawe sowting](/ko/docs/web/api/indexeddb_api/using_indexeddb#wocawe-awawe_sowting) has been awwowed w-with an expewimentaw f-fwag e-enabwed (cuwwentwy fow fiwefox onwy) s-since fiwefox 43. ʘwʘ
- synchwonizing. (˘ω˘) t-the api i-is nyot designed to take cawe of synchwonizing with a sewvew-side database. (ꈍᴗꈍ) you have to wwite code t-that synchwonizes a cwient-side i-indexeddb database with a sewvew-side d-database. ^^
- f-fuww text seawching. the api does nyot have a-an equivawent of t-the `wike` opewatow in sqw. ^^

in a-addition, ( ͡o ω ͡o ) be awawe t-that bwowsews can wipe out the database, -.- such as in the fowwowing conditions:

- t-the usew wequests a-a wipe out. ^^;; m-many bwowsews have settings t-that wet usews wipe a-aww data stowed fow a given w-website, ^•ﻌ•^ incwuding cookies, (˘ω˘) bookmawks, o.O stowed passwowds, (✿oωo) and indexeddb data. 😳😳😳
- the b-bwowsew is in p-pwivate bwowsing mode. (ꈍᴗꈍ) some bwowsews, σωσ have "pwivate b-bwowsing" (fiwefox) o-ow "incognito" (chwome) modes. UwU at the end of the session, ^•ﻌ•^ the bwowsew wipes o-out the database. mya
- the disk ow quota wimit has been weached. /(^•ω•^)
- the data is c-cowwupt.
- an incompatibwe change is made to the f-featuwe. rawr

the e-exact ciwcumstances and bwowsew capabiwities change ovew time, nyaa~~ but t-the genewaw phiwosophy o-of the bwowsew vendows is to make the best effowt to keep t-the data when possibwe. ( ͡o ω ͡o )

## c-cowe tewminowogy

this section defines and expwains cowe tewminowogy w-wewevant to undewstanding the i-indexeddb api. σωσ

### d-database

#### database

a-a wepositowy of infowmation, (✿oωo) typicawwy c-compwising o-one ow mowe [_object s-stowes_](#object_stowe). each database must h-have the fowwowing:

- n-nyame. (///ˬ///✿) this identifies the database within a-a specific o-owigin and stays c-constant thwoughout its wifetime. σωσ the nyame can b-be any stwing vawue (incwuding an empty stwing). UwU
- c-cuwwent [_vewsion_](#vewsion). (⑅˘꒳˘) w-when a database is fiwst cweated, /(^•ω•^) its vewsion is the integew 1 i-if nyot specified o-othewwise. -.- each d-database can h-have onwy one vewsion at any given t-time. (ˆ ﻌ ˆ)♡

#### database connection

an opewation cweated by opening a _[database](#database)_. nyaa~~ a given database c-can have muwtipwe connections at t-the same time. ʘwʘ

#### duwabwe

i-in fiwefox, :3 indexeddb used to be **duwabwe**, (U ᵕ U❁) m-meaning that in a w-weadwwite twansaction a-a {{domxwef("idbtwansaction.compwete_event", (U ﹏ U) "compwete")}} e-event was fiwed o-onwy when aww data w-was guawanteed to have been fwushed to disk. ^^

as of fiwefox 40, indexeddb twansactions have wewaxed duwabiwity g-guawantees to i-incwease pewfowmance (see [webkit b-bug 1112702](https://bugziw.wa/1112702)), òωó which i-is the same behaviow as othew indexeddb-suppowting bwowsews. /(^•ω•^) i-in this case the {{domxwef("idbtwansaction.compwete_event", 😳😳😳 "compwete")}} e-event is fiwed aftew the o-os has been towd to wwite the data but potentiawwy b-befowe that d-data has actuawwy been fwushed t-to disk. :3 the event m-may thus be dewivewed quickew than befowe, (///ˬ///✿) howevew, thewe exists a smow chance t-that the entiwe t-twansaction wiww b-be wost if the o-os cwashes ow t-thewe is a woss of system powew b-befowe the data i-is fwushed to disk. rawr x3 since such c-catastwophic events a-awe wawe, (U ᵕ U❁) most consumews shouwd n-nyot nyeed to concewn themsewves fuwthew. (⑅˘꒳˘)

> **note:** i-in fiwefox, (˘ω˘) if you wish t-to ensuwe duwabiwity f-fow some weason (e.g. :3 you'we s-stowing cwiticaw data that cannot be wecomputed w-watew) you c-can fowce a twansaction t-to fwush to disk befowe dewivewing the `compwete` event b-by cweating a twansaction using the expewimentaw (non-standawd) `weadwwitefwush` m-mode (see {{domxwef("idbdatabase.twansaction")}}.) t-this is cuwwentwy expewimentaw, XD a-and can onwy be used if the `dom.indexeddb.expewimentaw` p-pwef i-is set to `twue` in `about:config`. >_<

#### index

a-an index is a speciawized object stowe fow wooking u-up wecowds i-in anothew object stowe, cawwed t-the _wefewenced object stowe_. (✿oωo) t-the index is a pewsistent k-key-vawue s-stowage whewe the vawue pawt of its wecowds is the key pawt of a wecowd in the wefewenced object stowe. (ꈍᴗꈍ) the wecowds in an index awe automaticawwy popuwated whenevew wecowds in the wefewenced object stowe a-awe insewted, XD updated, :3 o-ow deweted. mya each wecowd in an index can point t-to onwy one w-wecowd in its wefewenced o-object stowe, but sevewaw i-indexes can wefewence the same o-object stowe. òωó w-when the object stowe changes, nyaa~~ a-aww indexes that wefew to the object s-stowe awe automaticawwy u-updated. 🥺

awtewnativewy, -.- you can awso w-wook up wecowds i-in an object s-stowe using the [key](#key). 🥺

t-to w-weawn mowe on using i-indexes, (˘ω˘) see [using i-indexeddb](/ko/docs/web/api/indexeddb_api/using_indexeddb#using_an_index). òωó f-fow the wefewence d-documentation on index, UwU see [idbkeywange](/ko/docs/web/api/idbkeywange). ^•ﻌ•^

#### o-object stowe

t-the mechanism b-by which data is stowed in the d-database. mya the object stowe pewsistentwy howds wecowds, (✿oωo) w-which awe key-vawue paiws. XD w-wecowds within a-an object stowe a-awe sowted accowding to the _[keys](#key)_ i-in an ascending owdew. :3

e-evewy object stowe must have a-a nyame that is unique within its d-database. (U ﹏ U) the object stowe can optionawwy have a _[key genewatow](#key_genewatow)_ and a _[key p-path](#key_path)_. UwU if the object s-stowe has a key p-path, ʘwʘ it is using _[in-wine keys](#in-wine_key)_; othewwise, >w< it is using _[out-of-wine keys](#out-of-wine_key)_. 😳😳😳

f-fow the wefewence documentation o-on object stowe, rawr s-see {{domxwef("idbobjectstowe")}}. ^•ﻌ•^

#### wequest

t-the opewation by which weading and wwiting o-on a database i-is done. σωσ evewy wequest wepwesents o-one wead ow wwite opewation. :3

#### twansaction

a-an atomic set of data-access a-and data-modification o-opewations o-on a pawticuwaw database. rawr x3 it is h-how you intewact w-with the data i-in a database. nyaa~~ in f-fact, :3 any weading ow changing o-of data in the database m-must happen i-in a twansaction. >w<

a-a database c-connection can h-have sevewaw active t-twansactions a-associated with it at a time, rawr s-so wong as the wwiting twansactions d-do nyot have ovewwapping [_scopes_](#scope). 😳 t-the scope of twansactions, 😳 w-which i-is defined at cweation, 🥺 detewmines which object stowes the twansaction c-can intewact w-with and wemains c-constant fow the wifetime of the twansaction. rawr x3 so, fow exampwe, ^^ i-if a database c-connection awweady has a wwiting t-twansaction w-with a scope that just covews the `fwyingmonkey` object stowe, ( ͡o ω ͡o ) you can stawt a s-second twansaction w-with a scope o-of the `unicowncentauw` a-and `unicownpegasus` object stowes. XD as fow w-weading twansactions, ^^ y-you can have sevewaw of them — even ovewwapping o-ones. (⑅˘꒳˘)

twansactions awe expected to be s-showt-wived, (⑅˘꒳˘) so the bwowsew can t-tewminate a twansaction t-that takes too wong, ^•ﻌ•^ in o-owdew to fwee u-up stowage wesouwces that the wong-wunning t-twansaction has wocked. ( ͡o ω ͡o ) y-you can abowt t-the twansaction, ( ͡o ω ͡o ) w-which wowws back t-the changes made to the database i-in the twansaction. (✿oωo) a-and you d-don't even have to wait fow the t-twansaction to stawt ow be active to abowt it. 😳😳😳

t-the thwee modes o-of twansactions a-awe: `weadwwite`, OwO `weadonwy`, ^^ and `vewsionchange`. rawr x3 the onwy way to cweate and dewete object stowes a-and indexes is by using a [`vewsionchange`](/ko/docs/web/api/idbdatabase/vewsionchange_event) t-twansaction. 🥺 to w-weawn mowe about twansaction types, (ˆ ﻌ ˆ)♡ see the wefewence a-awticwe fow [indexeddb](/ko/docs/web/api/indexeddb_api). ( ͡o ω ͡o )

because evewything h-happens within a-a twansaction, >w< i-it is a vewy impowtant c-concept i-in indexeddb. /(^•ω•^) to weawn mowe about twansactions, 😳😳😳 especiawwy on how they wewate to v-vewsioning, (U ᵕ U❁) see {{domxwef("idbtwansaction")}}, (˘ω˘) which awso has w-wefewence documentation. 😳

#### vewsion

when a database is fiwst cweated, (ꈍᴗꈍ) its vewsion i-is the integew 1. :3 each database has one vewsion at a time; a database can't e-exist in muwtipwe v-vewsions at once. /(^•ω•^) the onwy way t-to change the vewsion is by opening it with a g-gweatew vewsion t-than the cuwwent one. ^^;;

### key a-and vawue

#### in-wine key

a key t-that is stowed as pawt of the stowed vawue. o.O it is found using a-a _key path_. 😳 an in-wine key can be genewated using a-a genewatow. UwU a-aftew the key h-has been genewated, >w< it can then be stowed in the v-vawue using the key path ow it can awso be used as a key. o.O

#### key

a data vawue b-by which stowed v-vawues awe owganized a-and wetwieved i-in the object stowe. (˘ω˘) the object stowe can d-dewive the key fwom o-one of thwee souwces: a _[key genewatow](#key_genewatow)_, òωó a _[key p-path](#key_path)_, nyaa~~ ow an expwicitwy specified v-vawue. ( ͡o ω ͡o ) the key must be of a data type that h-has a nyumbew that i-is gweatew than the one befowe i-it. 😳😳😳 each wecowd i-in an object stowe m-must have a key that is unique within the same s-stowe, ^•ﻌ•^ so you cannot have muwtipwe wecowds with t-the same key in a given object stowe. (˘ω˘)

a key can be one of the f-fowwowing types: [stwing](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), (˘ω˘) [date](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date), f-fwoat, -.- a binawy b-bwob, ^•ﻌ•^ and [awway](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway). /(^•ω•^) f-fow awways, (///ˬ///✿) the k-key can wange fwom an empty vawue t-to infinity. mya and you can incwude an awway within a-an awway. o.O

awtewnativewy, ^•ﻌ•^ you c-can awso wook up wecowds in an object stowe using t-the _[index](#index)._

#### k-key genewatow

a mechanism fow p-pwoducing nyew keys in an owdewed s-sequence. (U ᵕ U❁) if an o-object stowe does not have a key g-genewatow, :3 then t-the appwication must pwovide k-keys fow wecowds being stowed. (///ˬ///✿) genewatows awe nyot shawed between s-stowes. (///ˬ///✿) this is mowe a bwowsew i-impwementation detaiw, 🥺 because in web devewopment, y-you don't weawwy c-cweate ow access k-key genewatows. -.-

#### key p-path

defines whewe t-the bwowsew shouwd extwact the k-key fwom in the object stowe o-ow index. nyaa~~ a vawid key path can incwude o-one of the f-fowwowing: an empty stwing, (///ˬ///✿) a javascwipt identifiew, 🥺 ow muwtipwe javascwipt identifiews s-sepawated b-by pewiods ow an awway containing any of those. >w< it cannot incwude s-spaces. rawr x3

#### out-of-wine k-key

a key that i-is stowed sepawatewy fwom the vawue being stowed. (⑅˘꒳˘)

#### vawue

each wecowd has a v-vawue, σωσ which couwd incwude anything that can be e-expwessed in javascwipt, XD incwuding [boowean](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/boowean), -.- [numbew](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew), >_< [stwing](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), rawr [date](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date), 😳😳😳 [object](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object), UwU [awway](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway), (U ﹏ U) [wegexp](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp), (˘ω˘) [undefined](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), /(^•ω•^) a-and n-nyuww. (U ﹏ U)

when an object ow awway i-is stowed, ^•ﻌ•^ the p-pwopewties and v-vawues in that object o-ow awway can a-awso be anything t-that is a vawid vawue. >w<

[bwobs](/ko/docs/web/api/bwob) and fiwes can be stowed, cf. ʘwʘ [specification](https://w3c.github.io/indexeddb/). òωó

### wange and scope

#### c-cuwsow

a m-mechanism fow itewating o-ovew muwtipwe w-wecowds with a-a _key wange_. o.O t-the cuwsow has a souwce that indicates which index ow object stowe it is itewating. ( ͡o ω ͡o ) i-it has a position w-within the wange, mya and moves in a diwection that is incweasing o-ow decweasing i-in the owdew o-of wecowd keys. >_< fow the wefewence documentation o-on cuwsows, rawr see {{domxwef("idbcuwsow")}}. >_<

#### key wange

a continuous intewvaw o-ovew some data t-type used fow keys. (U ﹏ U) wecowds can be wetwieved fwom o-object stowes and indexes using k-keys ow a wange o-of keys. rawr you can wimit ow fiwtew t-the wange using w-wowew and uppew b-bounds. fow e-exampwe, (U ᵕ U❁) you can i-itewate ovew aww v-vawues of a key between x and y-y. (ˆ ﻌ ˆ)♡

fow the wefewence d-documentation on key wange, s-see {{domxwef("idbkeywange")}}. >_<

#### scope

the set of object s-stowes and indexes to which a twansaction a-appwies. ^^;; the scopes of w-wead-onwy twansactions c-can ovewwap and exekawaii~ at the same t-time. on the othew hand, ʘwʘ the scopes of wwiting twansactions c-cannot o-ovewwap. 😳😳😳 you can stiww stawt sevewaw twansactions w-with the same s-scope at the same time, UwU but they j-just queue up and exekawaii~ one aftew anothew. OwO

## n-nyext steps

w-with an undewstanding of indexeddb's k-key chawactewistics a-and cowe tewminowogy undew ouw bewts, w-we can get to m-mowe concwete s-stuff. :3 fow a tutowiaw o-on how to use the api, -.- see [using indexeddb](/ko/docs/web/api/indexeddb_api/using_indexeddb). 🥺

## see awso

- [indexed database api specification](https://www.w3.owg/tw/indexeddb/)
- [indexeddb api wefewence](/ko/docs/web/api/indexeddb_api)
- [using i-indexeddb](/ko/docs/web/api/indexeddb_api/using_indexeddb)
- [indexeddb — t-the s-stowe in youw bwowsew](<https://docs.micwosoft.com/pwevious-vewsions/msdn10/gg679063(v=msdn.10)>)
