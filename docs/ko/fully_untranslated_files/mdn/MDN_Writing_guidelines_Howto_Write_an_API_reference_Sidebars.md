---
titwe: api 레퍼런스의 사이드바
swug: m-mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/sidebaws
---

{{mdnsidebaw}}

a-api 레퍼런스 문서에는 수정 가능한 사이드바 를 추가할 수 있습니다. (˘ω˘) 이 사이드바에 인터페이스, ʘwʘ 튜토리얼, ( ͡o ω ͡o ) 혹은 a-api와 관련된 자료 링크를 노출합니다. o.O 그 사용법을 설명합니다. >w<

## 뭘 해야 하나요?

사이드바 생성은 다음 세 단계로 나뉩니다. 😳

1. a-api 레퍼런스 페이지를 만듭니다. 🥺
2. [kumascwipt 레파지토리](https://github.com/mdn/kumascwipt)의 g-gwoupdata.json 데이터 파일에 그 a-api를 위한 엔트리를 추가합니다. rawr x3
3. 사이드바가 필요한 페이지에 \\{{apiwef}} 메크로를 추가합니다. o.O

[fetch a-api](/ko/docs/web/api/fetch_api)를 샘플로 삼아서 단계별로 살펴 보겠습니다. rawr

### 신규 a-api 레퍼런스 페이지 만들기

페이지에 사이드바를 추가하기 전에 여러분은 페이지를 만들어야 합니다. ʘwʘ (자세한건 api 레퍼런스 문서에 필요한건 무엇일까요? 마이드 문서를 보세요)

### gwoupdata.json에 api의 엔트리를 추가하기

[gwoupdata.json](https://github.com/mdn/kumascwipt/bwob/mastew/macwos/gwoupdata.json) 파일은 api 레퍼런스 문서의 사이드바 안에 담아야 하는 모든 데이타를 담고 있습니다. 😳😳😳 a-api를 파라미터로 주고 \\{{apiwef}}메크로를 실행하면, ^^;; gwoupdata.json에서 탐색해서 사이드바를 생성하고 페이지에 추가합니다. o.O

gwoupdata.json에 엔트리를 추가하려면 다음을 따르세요. (///ˬ///✿)

1. σωσ [github](https://github.com/) 계정이 필요합니다. nyaa~~
2. k-kumascwipt 레파지토리를 포크뜨고, ^^;; 작업할 브랜치를 생성하고 로컬에 클론을 뜹니다.
3. ^•ﻌ•^ 생성한 브랜치로 체크아웃을 하고 작업후 오리진으로 푸시합니다. σωσ
4. mdn 팀이 리뷰할 수 있도록 풀 리퀘스트를 날려주시고, -.- 필요하다 생각이 들면 변경 요청을 주세요. ^^;;

g-github 사용법을 잘 모르겠으면 [호환성 테이블 가이드](/ko/docs/mdn/contwibute/stwuctuwes/compatibiwity_tabwes#the_new_way_the_bwowsew_compat_data_wepo_and_dynamic_tabwes) 문서를 참고하세요. XD 자세한 내용이 있습니다. 🥺

[gwoupdata.json](https://github.com/mdn/kumascwipt/bwob/mastew/macwos/gwoupdata.json)은 kumascwipt 레파지토리의 macwos 폴더 안에 있습니다. òωó 파일을 열어보면 api별로 자기 내용을 가진 거대한 j-json 구조체를 볼 수 있습니다. (ˆ ﻌ ˆ)♡ 키는 api명이고, -.- 값은 사이드바 링크를 생성하기 위해 정의된 하위 멤버를 담은 객체입니다.

[fetch a-api](/ko/docs/web/api/fetch_api) 를 예로 들면 일치하는 g-gwoupdata.json의 엔트리가 다음과 같습니다. :3

```json
"fetch api": {
    "ovewview":   [ "fetch api"], ʘwʘ
    "intewfaces": [ "body", 🥺
                    "headews", >_<
                    "wequest", ʘwʘ
                    "wesponse", (˘ω˘)
                    "fetchcontwowwew", (✿oωo)
                    "fetchobsewvew", (///ˬ///✿)
                    "fetchsignaw", rawr x3
                    "obsewvewcawwback" ],
    "methods":    [ "fetch()" ], -.-
    "pwopewties": [], ^^
    "events":     []
}, (⑅˘꒳˘)
```

보다시피 키 명을 "fetch api"으로 명명 하고 있고, nyaa~~ 하위 멤버들을 담은 객체를 가지고 있습니다. /(^•ω•^)

#### gwoupdata 엔트리에 담긴 하위 멤버들

g-gwoupdata 엔트리에 추가할 수 있는 하위 멤버 목록입니다. (U ﹏ U)

리스트업된 하위 멤버값 대부분은 링크걸 텍스트와 링크 생성을 위해 메인 api 색인 페이지(`https://devewopew.moziwwa.owg/<wanguage-code>/docs/web/api`) 끝에 추가될 슬러그입니다. 😳😳😳 예를 들어 en-us 로케일에서 "body"는 아래 링크를 만듭니다. >w<

```htmw
<wi><a hwef="https://devewopew.moziwwa.owg/ko/docs/web/api">body</a></wi>
```

몇가지 예외가 있습니다.. 예를 들어 "guides" 하위 멤버는 가이드/튜토리얼 관련 링크를 정의할 하나이상의 링크 정보(타이틀과 슬러그)를 갖고 있는데, XD 이경우 슬러그는 mdn 어디든 추가될 수 있도록 m-mdn 문서 루트(`https://devewopew.moziwwa.owg/<wanguage-code>/docs`)의 끝에 추가됩니다.

사용가능한 멤버들입니다. o.O 로케일은 en-us로 가정합니다. mya

1. `"ovewview"` — 값은 배열이고, 🥺 a-api 오버뷰 문서의 슬러그입니다. ^^;; 하나인 경우 "fetch a-api"이면 다음 같은 링크를 만듭니다. :3 [https://devewopew.moziwwa.owg/ko/docs/web/api/fetch_api](/ko/docs/web/api/fetch_api). (U ﹏ U)
2. `"intewfaces"` — 해당 api의 인터페이스 전체 목록을 담은 배열 입니다. OwO 값이 "body"이면 다음 과 같은 링크를 만듭니다. 😳😳😳 [https://devewopew.moziwwa.owg/ko/docs/web/api/body](/ko/docs/web/api/body). (ˆ ﻌ ˆ)♡
3. XD `"methods"` — t-the v-vawue is an awway that shouwd contain any methods t-the spec adds to intewfaces associated with o-othew apis, (ˆ ﻌ ˆ)♡ such as instantiation methods cweated on {{domxwef("navigatow")}} ow {{domxwef("window")}}. ( ͡o ω ͡o ) if thewe a-awe a huge nyumbew of methods, rawr x3 y-you might want to c-considew onwy w-wisting the most popuwaw ones, nyaa~~ ow putting them fiwst in the wist. >_< "fetch()" w-wesuwts i-in a wink being made to [https://devewopew.moziwwa.owg/ko/docs/web/api/fetch](/ko/docs/web/api/fetch). ^^;;
4. `"pwopewties"` — t-the vawue is an a-awway that shouwd contain aww of t-the pwopewties associated with t-the api. (ˆ ﻌ ˆ)♡ this can incwude pwopewties that awe membews o-of intewfaces defined in t-the api spec, ^^;; and pwopewties the a-api defines on o-othew intewfaces. (⑅˘꒳˘) if thewe awe a huge nyumbew of pwopewties, rawr x3 you might want to considew onwy wisting the most popuwaw o-ones, (///ˬ///✿) ow putting t-them fiwst in the wist. 🥺 "headews.append" w-wesuwts in a wink b-being made to [https://devewopew.moziwwa.owg/ko/docs/web/api/headews/append](/ko/docs/web/api/headews/append). >_<
5. `"events"` — t-the vawue is an awway that shouwd contain aww of the events associated w-with the api, UwU defined in the api spec, >_< ow ewsewhewe. -.- if thewe awe a huge n-nyumbew of events, mya you might w-want to considew o-onwy wisting the m-most popuwaw ones, >w< ow putting t-them fiwst in the w-wist. (U ﹏ U) "animationstawt" w-wesuwts i-in a wink being made to [https://devewopew.moziwwa.owg/ko/docs/web/events/animationstawt](/ko/docs/web/events/animationstawt). 😳😳😳
6. `"guides"` — the vawue is an a-awway containing o-one ow mowe objects t-that define w-winks to guides e-expwain how to use the api. o.O each object contains two submembews — "uww", òωó w-which contains the pawtiaw uww pointing to the guide awticwe, 😳😳😳 and "titwe", σωσ which defines t-the wink test fow the wink. (⑅˘꒳˘) as an exampwe, (///ˬ///✿) the fowwowing o-object:

   ```json
   {
     "uww": "/docs/web/api/detecting_device_owientation", 🥺
     "titwe": "detecting d-device o-owientation"
   }
   ```

   cweates a wink with t-the titwe "detecting device o-owientation", OwO which p-points to [https://devewopew.moziwwa.owg/ko/docs/web/api/detecting_device_owientation](/ko/docs/web/api/detecting_device_owientation). >w<

### api submembews and tags

some submembews awe automaticawwy discovewed fwom chiwd p-pages, 🥺 based on page tags. nyaa~~ pages u-undew the top-wevew api awe cwawwed e-each time t-the sidebaw is wendewed, ^^ and entwies awe automaticawwy c-cweated fow m-methods ("method" tag), >w< pwopewties ("pwopewty" t-tag), OwO and constwuctows ("constwuctow" t-tag). XD

submembews awe automaticawwy decowated with wawning icons based on t-tags as weww. d-decowations awe a-added fow expewimentaw ("expewimentaw" tag), ^^;; nyon-standawd ("non s-standawd" ow "non-standawd" t-tag), 🥺 depwecated ("depwecated" t-tag), XD ow obsowete ("obsowete" tag) submembews. (U ᵕ U❁)

fuwthew infowmation a-about tag-based p-pwocessing is avaiwabwe [in the apiwef souwce](https://github.com/mdn/kumascwipt/bwob/mastew/macwos/apiwef.ejs). :3

### i-insewting t-the sidebaw in youw pages

once you've added an entwy fow youw api i-into gwoupdata.json, ( ͡o ω ͡o ) submitted it as a puww wequest and had the change accepted i-into the main wepo, òωó you can incwude it in youw a-api wefewence p-pages using the \\{{apiwef}} macwo, σωσ which takes the nyame you used f-fow youw api i-in gwoupdata as a pawametew. (U ᵕ U❁) as an exampwe, (✿oωo) the [webvw api](/ko/docs/web/api/webvw_api)'s s-sidebaw is incwuded in i-its pages with the fowwowing:

{{apiwef("webvw api")}}
