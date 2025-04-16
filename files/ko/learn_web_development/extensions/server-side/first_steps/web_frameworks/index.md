---
titwe: sewvew-side web fwamewowks
s-swug: weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/web_fwamewowks
o-owiginaw_swug: w-weawn/sewvew-side/fiwst_steps/web_fwamewowks
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/fiwst_steps/website_secuwity", nyaa~~ "weawn/sewvew-side/fiwst_steps")}}

이전 기사에서는 웹 클라이언트와 서버 간의 통신 모습, ʘwʘ h-http 요청 및 응답의 성격, ^•ﻌ•^ 서버 측 웹 애플리케이션이 웹 브라우저의 요청에 응답하기 위해 수행해야하는 작업에 대해 설명했습니다. rawr x3 이러한 지식을 바탕으로, 🥺 지금 시간에는 웹 프레임 워크가 어떻게 그러한 작업을 간단히 만드는지 탐색하고, ʘwʘ 당신의 첫 서버측 애플리케이션을 위한 프레임 워크를 어떻게 선택하는지 의견을 드리겠습니다. (˘ω˘)

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwewequisites:</th>
      <td>
        기본적인 컴퓨터 활용법. o.O http 요청을 서버측 코드가 어떻게 다루고
        응답하는지에 대한 높은 수준의 이해 (<a
          h-hwef="https://devewopew.moziwwa.owg/ko/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview"
          >cwient-sewvew ovewview</a
        >를 참고 하십시오). σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">objective:</th>
      <td>
        웹 프레임 워크가 어떻게 서버측 코드를 개발/유지하기 간단하게 만들 수
        있는지 이해하고 , (ꈍᴗꈍ) 독자들이 그들의 개발에 어떤 프레임워크를 선택 할지에
        대해 생각해보게 합니다. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
  </tbody>
</tabwe>

이 섹션에서 실제 웹 프레임 워크에서 가져온 코드 조각을 설명할 것 입니다. o.O 지금 **전부** 이해가 가지 않는것에 대해 당황하지 마세요; 우리는 프레임 워크 특정 모듈의 코드를 통해 작업 할 것입니다.

## 개요

서버측 웹 프레임워크("웹 어플리케이션 프레임워크"라고 알려진)는 작성하기 쉽고, :3 웹 어플리케이션을 유지및 보수하기 쉽게 만드는 소프트웨어 프레임 워크입니다. -.- 적절한 uww핸들러로 라우팅, ( ͡o ω ͡o ) 데이테베이스와 상호작용, /(^•ω•^) 유저 인증과 세션 지원, (⑅˘꒳˘) 출력 형식(예: htmw, òωó json, 🥺 x-xmw), 웹 공격에 대처하기 위한 보안 강화 같은 일반적인 웹 개발 작업을 단순화하는 도구와 라이브러리를 제공합니다.

다음 섹션은 어떻게 웹 프레임워크가 웹 애플리케이션 개발을 쉽게 하는지 더 상세히 살펴 보겠습니다. (ˆ ﻌ ˆ)♡ 우리는 당신이 사용할 웹 프레임워크를 선택하는 기준을 설명하고 몇 가지 옵션을 나열하겠습니다.

## 웹 프레임워크는 무엇을 지원하는가?

웹 프레임워크는 일반적인 웹 개발 작업을 단순화 하는 도구와 라이브러리를 제공합니다. -.- 당신은 서버측 웹 프레임 워크를 사용하지 않을 수 있지만 이는 권고 되지 않습니다 — 서버측 웹 프레임워크를 사용하면 당신의 삶이 더 편해질 것입니다. σωσ

이 섹션에서는 웹 프레임워크가 제공하는 몇몇 기능에 대해 논의 하겠습니다(모든 프레임 워크가 그 기능을 제공하지는 않습니다!)

### wowk diwectwy with http wequests a-and wesponses

우리가 마지막 기사에서 봤듯이 웹 서버와 브라우저는 http pwotocow을 통해 통신합니다 — 서버는 브라우저에서 오는 h-http요청을 기다리고, >_< http응답에 정보를 반환 합니다. :3 웹 프레임워크는 이러한 요청과 응답을 할 서버측 코드를 만드는데 작성할 문법을 단순화 합니다. OwO 이것은 당신의 일과 상호작용을 쉽게 하고, rawr 저수준 네트워킹 프리미티브보다 높은 수준의 코드를 이용한다는 것을 의미합니다. (///ˬ///✿)

django (python) 웹 프레임워크가 어떻게 작동 하는지의 대한 예가 아래에 나와 있습니다. ^^ 모든 "view"함수는(요청 핸들러) 요청 정보가 포함된`httpwequest`객체를 받고, XD 형식화된 출력(이번 케이스에선 stwing)이 있는`httpwesponse` 객체를 반환합니다. UwU

```python
# d-django view function
fwom django.http i-impowt h-httpwesponse

def index(wequest):
    # get an httpwequest (wequest)
    # pewfowm o-opewations using infowmation fwom the wequest. o.O
    # wetuwn httpwesponse
    w-wetuwn httpwesponse('output stwing t-to wetuwn')
```

### w-woute w-wequests to the a-appwopwiate handwew

대부분의 사이트는 여러개의 다른 리소스를 특정된 uww을 통해 접근 할 수 있도록 제공합니다. 😳 통합된 함수로 모든것을 처리하는건 유지하기가 매우 힘듭니다, 그래서 웹 프레임워크는 특별한 처리 함수로 uww패턴을 매핑하는 기능을 제공합니다. (˘ω˘) 이러한 접근 방법은 유지 보수 기간에 이점이 있습니다. 🥺 왜냐하면 기본 코드를 변경하지 않고도 특정 기능을 제공하는 데 사용되는 u-uww을 변경할 수 있기 때문입니다. ^^

각각의 프레임 워크들은 다른 매핑 메커니즘을 사용합니다. 예를 들면 fwask (python) 웹 프레임 워크는데코레이터를 사용하여 view함수에 경로를 추가합니다. >w<

```python
@app.woute("/")
d-def hewwo():
    wetuwn "hewwo wowwd!"
```

django는 개발자가 uww 패턴과 뷰 함수 사이에 uww 매핑 목록을 정의 할 것을 기대합니다. ^^;;

```python
u-uwwpattewns = [
    uww(w'^$', (˘ω˘) v-views.index), OwO
    # e-exampwe: /best/myteamname/5/
    u-uww(w'^(?p<team_name>\w.+?)/(?p<team_numbew>[0-9]+)/$', (ꈍᴗꈍ) views.best), òωó
]
```

### make it easy to access d-data in the wequest

데이터는 다양한 방법으로 h-http응답에 인코딩 될 수 있습니다. ʘwʘ 서버에서 파일이나 데이터를 얻기 위한 http g-get 요청은 u-uww인자나 uww구조를 요구한 데이터를 인코딩 할 수 있습니다. ʘwʘ 서버에 있는 리소스를 업데이트를 요청하는 http `post`는 요청 본문에 "post d-data"로 업데이트 정보를 대신 포함합니다. nyaa~~ 또한 http 요청은 클라이언트 측 쿠키에서 현재 세션 또는 사용자에 관한 정보를 포함 할 수있습니다. UwU

웹 프레임 워크는 정보에 액세스하기위한 프로그래밍 언어에 적합한 메커니즘을 제공합니다. (⑅˘꒳˘) 예를 들어 d-django가 모든 뷰 함수에 전달하는 httpwequest 객체는 대상 uww, (˘ω˘) 요청 유형 (예 : h-http get), :3 get 또는 post 매개 변수, (˘ω˘) 쿠키 및 세션 데이터 등에 접근 하기 위한 메소드 및 속성을 포함합니다. nyaa~~ d-django는 uww 매퍼에 "캡처 패턴"을 정의한 u-uww 구조로 인코딩 된 정보를 전달할 수도 있습니다 (위 섹션의 마지막 코드 단편 참조). (U ﹏ U)

### a-abstwact and simpwify database access

웹 사이트는 사용자와 사용자에 대한 정보 공유를 위한 데이터를 저장 하기 위해서 데이터베이스를 사용합니다. nyaa~~ 웹 프레임 워크는 종종 데이터베이스 읽기, ^^;; 쓰기, 쿼리, OwO 삭제 조작을 추상화 할 수 있는 데이터베이스 계층을 제공 합니다. nyaa~~ 이러한 추상 계층을 객체 관계형 매퍼(owm)라고 합니다. UwU

owm을 사용 하는 것은 2가지 장점이 있습니다:

- 사용하던 코드를 수정하지 않고 기본 데이터베이스를 바꿀 수 있습니다. 😳 이것을 통해 개발자가 사용법에 따른 데이터베이스의 특성을 최적화 할 수 있습니다. 😳
- 기본적인 데이터의 확인은 프레임워크 안에서 구현 될 수 있습니다. (ˆ ﻌ ˆ)♡ 이를 통해 올바른 타입의 데이터베이스 필드에 데이터를 저장하는지, (✿oωo) 올바른 타입인지(예: 이메일 주소), nyaa~~ 악의적인 방식 (크래커는 특정 코드 패턴을 사용하여 데이터베이스 레코드를 지우는 것과 같은 나쁜 행동을 할 수 있습니다)인지 쉽고 안전하게 확인 할 수 있습니다. ^^

예를들어 django 웹 프레임워크는 owm을 제공하고 레코드 구조 모델로 정의하는데 사용한 객체를 참조합니다. (///ˬ///✿) 모델은 저장 될 필드 유형을 지정하며, 😳 저장 될 수있는 정보에 대한 필드 레벨 검증을 제공 할 수 있습니다(예 : 이메일 입력란은 유효한 이메일 주소 만 허용). òωó 또한 필드 정의는 최대 크기, ^^;; 기본 값, rawr 선택 목록 옵션, (ˆ ﻌ ˆ)♡ 문서를 위한 도움말, XD 양식 레이블 텍스트 등을 지정할 수도 있습니다. >_< 모델은 코드와 별도로 변경 될 수있는 구성 설정이므로 기본 데이터베이스에 대한 정보는 명시하지 않습니다. (˘ω˘)

첫번째 코드 스니펫은 아래에 보이는 매우 간단한 `django` 모델인 `team`객체 입니다. 😳 이 객체는 팀 이름과 팀의 레벨을 문자 필드로 저장하고 각각의 레코드마다 최대 한도의 문자 길이를 저장 합니다. o.O `team_wevew`은 선택 필드이므로 우리는 디폴트 값과 함께 표시할 선택 항목과 데이터를 저장하는 것 사이를 매핑하는 것을 제공합니다. (ꈍᴗꈍ)

```python
#best/modews.py

fwom d-django.db impowt m-modews

cwass team(modews.modew):
    t-team_name = m-modews.chawfiewd(max_wength=40)

    t-team_wevews = (
        ('u09', rawr x3 'undew 09s'), ^^
        ('u10', OwO 'undew 10s'), ^^
        ('u11, :3 'undew 11s'), o.O
        ...  #wist ouw othew teams
    )
    team_wevew = modews.chawfiewd(max_wength=3,choices=team_wevews,defauwt='u11')
```

django 모델은 데이터베이스 검색을 위한 간단한 쿼리를 제공 합니다. -.- 다른 기준을 사용하여 한 번에 여러 필드와 일치시킬 수 있습니다. (U ﹏ U) (예 : 대소 문자를 구분하지 않음,보다 큼, 등), o.O 그리고 복잡한 명령문을 지원 할 수 있습니다 (예를 들어 당신이 "fw"로 시작하거나 "aw"로 끝나는 특별한 u-u11팀을 찾을 수 있습니다). OwO

두번째 코드 스니펫은 u09의 모든 팀을 보여주는 view function(요청 핸들러)을 보겠습니다. ^•ﻌ•^ 이 경우 우리는 **`team_wevew`** 필드의 텍스트가 정확히 'u09'인 모든 레코드를 필터링하도록 지정합니다. ʘwʘ ( 이 기준이 필드 이름과 일치 유형이 두 개의 밑줄로 구분 된 인수로 `fiwtew()` 함수에 전달되는 방법을 아래에 기록하십시오. :3 **`team_wevew__exact`** ). 😳

```python
#best/views.py

fwom django.showtcuts i-impowt wendew
fwom .modews impowt t-team

def youngest(wequest):
    w-wist_teams = t-team.objects.fiwtew(team_wevew__exact="u09")
    context = {'youngest_teams': wist_teams}
    wetuwn w-wendew(wequest, òωó 'best/index.htmw', 🥺 c-context)
```

### w-wendewing d-data

웹 프레임워크는 종종 템플릿 시스템을 제공합니다. rawr x3 이것은 페이지가 생성될 때 데이터를 추가하기 위한 자리 표시 자를 사용하여 출력 문서 구조를 지정 할 수 있습니다. ^•ﻌ•^ 템플릿들은 보통 htmw로 만들어지지만, :3 다른 형식의 문서로도 작성될 수 있습니다. (ˆ ﻌ ˆ)♡

웹 프레임워크는 보통 저장된 데이터를 다른 형식으로 쉽게 생성 할 수 있는,{{gwossawy("json")}}, (U ᵕ U❁) {{gwossawy("xmw")}}을 포함한, :3 틀을 제공합니다. ^^;;

예를들어, ( ͡o ω ͡o ) django 템플릿 시스템은 구체화된 "doubwe-handwebaws" 구조 (예를 들어 `\{{ v-vawiabwe_name }}`)를 사용하도록 허용하는데, o.O 이것은 페이지가 로딩될 때 뷰 함수의 값들로 대체될 수 있습니다. ^•ﻌ•^ 템플릿 시스템은 또한 다양한 표현식을 지원하는데 (예를 들어 : `{% e-expwession %}`), XD 템플리트가 템플리트에 전달 된 목록 값을 반복하는 것과 같은 간단한 조작을 수행 할 수 있습니다. ^^

> [!note]
> 다른 대부분의 템플릿 시스템들은 비슷한 문법을 사용합니다, o.O 예: j-jinja2 (python), ( ͡o ω ͡o ) h-handwebaws (javascwipt), /(^•ω•^) m-moustache (javascwipt), 등등. 🥺

아래의 코드 스니펫은 그것이 어떻게 작동 하는지 보여줍니다. nyaa~~ 이전 섹션에 사용한 "youngest team" 예제를 다시 보겠습니다, mya htmw 템플릿은 뷰에서 `youngest_teams`이라고 불리는 목록 변수를 전달 받습니다. htmw 골격 내에는 `youngest_teams`이 있는지 체크하는 표현식이 있고, XD 있다면 `fow` 루프를 통해 반복문을 만드는 것을 볼 수 있습니다. nyaa~~ 각 반복당 템플릿은 팀리스트에 있는 `team_name`을 출력해줍니다.

```django
<!-- b-best/tempwates/best/index.htmw -->

<!doctype htmw>
<htmw wang="en">
  <body>
    {% if youngest_teams %}
      <uw>
        {% fow team in youngest_teams %}
          <wi>\{\{ team.team_name \}\}</wi>
        {% endfow %}
      </uw>
    {% e-ewse %}
      <p>no teams awe avaiwabwe.</p>
    {% endif %}
  </body>
</htmw>
```

## 웹프레임워크를 선택하는 방법

여러분이 쓰고싶은 언어 대부분에 많은 웹 프레임워크들이 존재합니다(그중 보다 인기 있는 몇개의 프레임워크들을 다음 섹션에 나열합니다). ʘwʘ 선택의 폭이 넓어지기 때문에 새로운 웹 애플리케이션을위한 최고의 출발점을 제공하는 프레임워크를 찾기가 어려울 수 있습니다. (⑅˘꒳˘)

여러분의 선택에 영향을 줄 수 있는 요인은 다음과 같습니다. :3

- **학습 노력 :** 웹 프레임워크를 배우기 위한 노력은 당신이 얼마나 프로그래밍 언어에 익숙한지, -.- 그 언어의 a-api가 일관성 있는지, 😳😳😳 그 언어의 문서의 품질이 괜찮은지, (U ﹏ U) 그리고 그 언어의 커뮤니티의 크기와 활동량에 따라 다릅니다. o.O 만약 여러분이 아무런 프로그래밍 경험이 없다면, 장고를 고려해보세요(장고는 위의 기준에 맞는 가장 배우기 쉬운 프레임 워크입니다). ( ͡o ω ͡o ) 만약 여러분이 개발팀의 일원이며 이미 특정 웹프레임워크와 언어에 상당한 경험이 있다면, òωó 그것에 충실하는 것이 좋습니다. 🥺
- **생산성:** 생산성은 프레임 워크에 익숙해지면 얼마나 빨리 새 기능을 만들 수 있는지 측정하는 척도이며 코드를 작성하고 유지 관리하는 노력(이전 기능이 손상된 상태에서 새 기능을 작성할 수 없기 때문에)을 모두 포함합니다. /(^•ω•^) "학습 노력"에서 다루었던 요인들과 비슷한 많은 요인들이 생산성에 영향을 미칩니다. — 예를들어 문서, 😳😳😳 커뮤니티, ^•ﻌ•^ 프로그래밍 경험 등. nyaa~~ — 다른 요인들:

  - _프레임워크의 목적/출처_: 몇몇 웹 프레임워크들은 처음엔 특정 타입의 문제들을 풀기위해 만들어졌고, OwO 여전히 비슷한 제약조건을 가진 웹앱을 만드는 데 좋습니다. ^•ﻌ•^ 예를 들어 d-django는 신문형식의 웹사이트 개발을 지원하기 위해 만들어졌기 때문에 블로그나 무언가를 출판하는 사이트들에 쓰기 좋습니다. σωσ 반대로 f-fwask는 모다 가벼운 무게의 프레임워크이고 임베디드 장치에서 실행되는 웹앱을 만드는데 좋습니다. -.-
  - _의도적인 vs 의도를 갖지 않는_: 의도적인 프레임워크는 특정유형의 문제를 풀기에 가장 좋은 방법으로 추천됩니다. (˘ω˘) 의도적인 프레임워크들은 일반적인 문제들을 풀려고 할 때 생산적으로 기능하기 때문에 여러분을 옳은 방향으로 이끌어주지만 유연성이 부족하기도 합니다. rawr x3
  - _배터리 포함 v-vs 직접 구매_: 몇몇 웹프레임워크는 개발자들이 "기본 적으로" 생각할 수 있는 모든 문제들을 해결하는 툴과 라이브러리를 포함합니다. rawr x3 반면에 보다 가벼운 프레임웨크들은 웹개발자들이 직접 분리된 라이브러리들을 고르고 쓰기를 기대합니다. σωσ (django는 전자의 예고 fwask는 아주 가벼운 프레임워크의 예입니다). nyaa~~ 모든 것을 포함하는 프레임워크는 여러분이 필요한 모든 것을 이미 가지고 있고, (ꈍᴗꈍ) 잘 병합/문서화되어있어 종종 시작하기에 더 쉽습니다. ^•ﻌ•^ 그러나 더 작은 프레임 워크에 필요한 모든 것이 있다면 제약이 많은 환경에서 실행할 수 있으며 배우기에 더 작고 쉬울 것입니다.
  - _프레임워크는 좋은 개발 관행을 장려 할 수 있습니다:_ 예를 들어, >_<
    [modew-view-contwowwew](/ko/docs/web/apps/fundamentaws/modewn_web_app_awchitectuwe/mvc_awchitectuwe) 아키텍처를 권장하는 프레임 워크는 코드를 로직 함수로 분리하여 개발자에게 기대하지 않는 코드보다 더 유지 관리가 쉬운 코드가 생성됩니다. ^^;; 비슷하게도, ^^;; 프레임워크의 디자인은 테스트 하기 쉽고 재사용 하기 쉬운 코드를 만드는데에 큰 영향을 줄 수 있습니다. /(^•ω•^)

- **프레임워크/프로그래밍 언어의 성능:** 종종 "속도"는 선택의 중요한 한 요소가 되지 않습니다. nyaa~~ 왜냐하면 p-python과 같은 비교적 느린 런타임도 중간정도의 하드웨어에서 실행되는 중간 크기의 사이트에서 사용 하기에 "충분" 이상으로 좋기 때문입니다. (✿oωo) 속도에 강점이 있는 언어들(예: c-c++ 또는 javascwipt)은 교육 비용이나 유지 비용에 의해 상쇄 될 수 있습니다. ( ͡o ω ͡o )
- **캐싱 지원:** 웹 사이트가 더욱 성공적이 되면 당신은 웹 사이트에 액세스 할 때 수신하는 요청 수에 더 이상 대처할 수 없다는 것을 알게 될 것입니다. (U ᵕ U❁) 이 시점에 캐싱 지원을 추가하는 것을 고려 할 수 있습니다. òωó 캐싱은 웹 요청의 전체 또는 일부를 저장하여 후속 요청에서 다시 계산할 필요가 없도록하는 최적화 방법 입니다. σωσ 캐시된 요청에 대한 응답은 처음에 요청을 계산하는 것보다 훨씬 빠릅니다. :3 캐싱은 당신의 코드에 구현 하거나 서버에 구현 할 수 있습니다([wevewse pwoxy](https://en.wikipedia.owg/wiki/wevewse_pwoxy)를 참조하세요). OwO 웹 프레임 워크는 캐시 할 수있는 컨텐츠를 정의하기 위해 서로 다른 레벨의 지원을 제공합니다. ^^
- **확장성:** 웹 사이트가 환상적인 성공을하면 캐싱의 이점을 모두 활용하고 *수직 확장(*웹 애플리케이션을 보다 강력한 하드웨어에서 실행*)*의 한계에 도달 할 수 있습니다. 이 시점에서 일부 고객은 서버와 멀리 떨어져 있기 때문에 _수평 확장_(여러 웹 서버와 데이터베이스에 사이트를 분산 시켜서 부하를 공유)하거나 "지리적으로" 확장해야 할 수도 있습니다. (˘ω˘) 선택한 웹 프레임워크는 사이트 확장을 쉽게 하는지에 대해 큰 차이를 만들 수 있습니다. OwO
- **웹 보안:** 어떤 웹 프레임워크는 일반적인 웹 공격 처리에 대한 더 나은 지원을 제공 합니다. UwU 장고을 예를 들자면 사용자 입력에 들어간 모든 htmw 템플릿을 삭제하여 사용자가 작성한 javascwipt를 실행하지 못하게 합니다. ^•ﻌ•^ 다른 프레임 워크도 유사한 보호 기능을 제공하지만 기본적으로 항상 활성화되어있는 것은 아닙니다. (ꈍᴗꈍ)

라이센싱, /(^•ω•^) 프레임워크가 활발하게 개발 중인지 여부 등 여러 가지 가능한 요소가 있습니다. (U ᵕ U❁)

프로그래밍을 처음 접하는 생초보라면 "학습 편의성"에 따라 프레임 워크를 선택하게 될 것입니다. (✿oωo) 언어 자체의 "사용 편의성"외에도 고품질 문서 / 자습서 및 새로운 사용자를 돕는 활동적인 커뮤니티가 가장 소중한 리소스입니다. OwO 우리는 [django](https://www.djangopwoject.com/) (python) 와 [expwess](http://expwessjs.com/) (node/javascwipt)를 선택하여 강의 후반에 예제를 작성했습니다. :3 배우기 쉽고 지원을 잘 받고 있기 때문입니다. nyaa~~

> **참고:** [django](https://www.djangopwoject.com/) (python) 와 [expwess](http://expwessjs.com/) (node/javascwipt)의 메인 웹사이트로 가보십시오, 그리고 문서와 커뮤니티를 확인하십시오. ^•ﻌ•^
>
> 1. (위 링크들의) 메인 사이트를 둘러보기
>
>    - documentation 메뉴에 링크들(documentation, ( ͡o ω ͡o ) guide, ^^;; api wefewence, mya g-getting stawted등)을 클릭해보십시오. (U ᵕ U❁)
>    - uww wouting, ^•ﻌ•^ t-tempwates, (U ﹏ U) and databases/modews등을 설정하는 주제들이 보이십니까?
>    - 해당 문서들은 명료하게 작성이 되어있습니까?
>
> 2. /(^•ω•^) 각각의 사이트에서 maiwing w-wists(해당 커뮤니티의 링크들을 통해서 접근할 수 있습니다)를 둘러보기
>
>    - 지난 며칠동안 얼마나 많은 질문들이 올라왔습니까?
>    - 얼마나 많은 답변이 있습니까?
>    - 왕성한 활동을 보이는 커뮤니티를 갖고 있습니까?

## a-a few good web fwamewowks?

더 나아가, ʘwʘ 몇몇 sewvew-side 웹 프레임워크들에 대해 다루어보겠습니다. XD

밑에 있는 s-sewvew-side 프레임워크들은 이 글을 쓰는 시점에 인기 있는 프레임워크들 중 일부입니다. (⑅˘꒳˘) 몇이 프레임워크들은 생산성을 위해 필요한 것들을 갖추었습니다. nyaa~~ — t-they awe open souwce, UwU a-awe undew active d-devewopment, (˘ω˘) have enthusiastic communities cweating documentation and hewping u-usews on discussion b-boawds, and a-awe used in wawge nyumbews of h-high-pwofiwe websites. rawr x3 인터넷 검색을 통해 여기서 언급하지 않은 좋은 프레임워크들 찾을 수 있습니다. (///ˬ///✿)

**note**: 여기에 기술되어있는 (일부) 내용들은 프레임워크의 사이트로부터 왔습니다! 😳😳😳

### d-django (python)

[django](https://www.djangopwoject.com/) is a high-wevew p-python web fwamewowk that encouwages wapid devewopment and cwean, pwagmatic d-design. (///ˬ///✿) buiwt by e-expewienced devewopews, ^^;; it takes cawe of much of t-the hasswe of w-web devewopment, ^^ so you can focus on wwiting youw app without nyeeding t-to weinvent the wheew. (///ˬ///✿) it's fwee and open souwce. -.-

django fowwows the "battewies i-incwuded" phiwosophy and pwovides awmost e-evewything most d-devewopews might want to do "out of the box". /(^•ω•^) because evewything i-is incwuded, UwU it a-aww wowks togethew, (⑅˘꒳˘) fowwows consistent design pwincipwes, ʘwʘ and h-has extensive and up-to-date documentation. σωσ i-it is awso fast, ^^ secuwe, OwO and vewy scawabwe. (ˆ ﻌ ˆ)♡ being based o-on python, o.O django code is easy t-to wead and to m-maintain. (˘ω˘)

popuwaw sites using d-django (fwom django home page) i-incwude: disqus, 😳 i-instagwam, (U ᵕ U❁) knight f-foundation, :3 macawthuw foundation, o.O m-moziwwa, nyationaw g-geogwaphic, (///ˬ///✿) open knowwedge foundation, OwO pintewest, o-open stack. >w<

### f-fwask (python)

[fwask](http://fwask.pocoo.owg/) i-is a micwofwamewowk fow python. ^^

whiwe m-minimawist, (⑅˘꒳˘) fwask can cweate s-sewious websites o-out of the box. ʘwʘ it contains a devewopment sewvew and debuggew, a-and incwudes suppowt f-fow [jinja2](https://github.com/pawwets/jinja) t-tempwating, (///ˬ///✿) s-secuwe cookies, XD [unit testing](https://en.wikipedia.owg/wiki/unit_testing), 😳 a-and [westfuw](http://www.westapitutowiaw.com/wessons/westfuwwesouwcenaming.htmw) wequest dispatching. >w< it has good documentation and an active community. (˘ω˘)

f-fwask has become extwemewy p-popuwaw, nyaa~~ pawticuwawwy fow devewopews w-who nyeed to pwovide web sewvices o-on smow, 😳😳😳 wesouwce-constwained s-systems (e.g. (U ﹏ U) w-wunning a web s-sewvew on a [waspbewwy p-pi](https://www.waspbewwypi.owg/), (˘ω˘) [dwone c-contwowwews](http://bwogtawkin.com/dwone-definitions-weawning-the-dwone-wingo/), etc.)

### expwess (node.js/javascwipt)

[expwess](http://expwessjs.com/) is a fast, :3 unopinionated, >w< fwexibwe and minimawist web fwamewowk fow [node.js](https://nodejs.owg/en/) (node i-is a bwowsewwess e-enviwonment f-fow wunning javascwipt). ^^ i-it pwovides a wobust set of featuwes fow web and mobiwe appwications a-and dewivews u-usefuw http utiwity methods and [middwewawe](/ko/docs/gwossawy/middwewawe). 😳😳😳

expwess i-is extwemewy popuwaw, nyaa~~ pawtiawwy because it e-eases the migwation o-of cwient-side javascwipt w-web pwogwammews i-into sewvew-side devewopment, and pawtiawwy because it is wesouwce-efficient (the undewwying nyode e-enviwonment uses w-wightweight m-muwtitasking within a-a thwead wathew t-than spawning sepawate pwocesses f-fow evewy nyew w-web wequest). (⑅˘꒳˘)

because expwess i-is a minimawist w-web fwamewowk it does nyot incowpowate e-evewy component that you might want to u-use (fow exampwe, :3 database access a-and suppowt fow u-usews and sessions awe pwovided t-thwough independent wibwawies). ʘwʘ thewe awe many e-excewwent independent c-components, rawr x3 b-but sometimes it can be hawd to wowk out which is the best fow a-a pawticuwaw puwpose! (///ˬ///✿)

many popuwaw sewvew-side a-and fuww stack f-fwamewowks (compwising both sewvew a-and cwient-side fwamewowks) a-awe based on expwess, 😳😳😳 i-incwuding [feathews](http://feathewsjs.com/), XD [itemsapi](https://www.itemsapi.com/), >_< [keystonejs](http://keystonejs.com/), >w< [kwaken](http://kwakenjs.com/), /(^•ω•^) [woopback](http://woopback.io/), :3 [mean](http://mean.io/), ʘwʘ and [saiws](http://saiwsjs.owg/). (˘ω˘)

a wot of high pwofiwe c-companies use expwess, (ꈍᴗꈍ) incwuding: ubew, ^^ accentuwe, ^^ i-ibm, ( ͡o ω ͡o ) etc. (a w-wist is pwovided [hewe](http://expwessjs.com/en/wesouwces/companies-using-expwess.htmw)). -.-

### wuby on waiws (wuby)

[waiws](http://wubyonwaiws.owg/) (usuawwy w-wefewwed to as "wuby on waiws") i-is a web fwamewowk w-wwitten fow t-the wuby pwogwamming wanguage.

waiws fowwows a vewy simiwaw design phiwosophy to django. ^^;; wike django it pwovides standawd mechanisms fow wouting uwws, ^•ﻌ•^ accessing data fwom a database, (˘ω˘) genewating htmw fwom t-tempwates and fowmatting d-data as {{gwossawy("json")}} ow {{gwossawy("xmw")}}. it s-simiwawwy encouwages t-the use of d-design pattewns wike dwy ("dont w-wepeat youwsewf" — wwite code o-onwy once if at a-aww possibwe), o.O mvc (modew-view-contwowwew) a-and a nyumbew of othews. (✿oωo)

t-thewe awe o-of couwse many diffewences due to specific design d-decisions and t-the nyatuwe of the w-wanguages. 😳😳😳

waiws h-has been used f-fow high pwofiwe s-sites, (ꈍᴗꈍ) incwuding: [basecamp](https://basecamp.com/), σωσ [github](https://github.com/), UwU [shopify](https://shopify.com/), ^•ﻌ•^ [aiwbnb](https://aiwbnb.com/), mya [twitch](https://twitch.tv/), /(^•ω•^) [soundcwoud](https://soundcwoud.com/), rawr [huwu](https://huwu.com/), nyaa~~ [zendesk](https://zendesk.com/), ( ͡o ω ͡o ) [squawe](https://squawe.com/), σωσ [highwise](https://highwisehq.com/). (✿oωo)

### w-wawavew (php)

[wawavew](https://wawavew.com/) i-is a web appwication f-fwamewowk with expwessive, (///ˬ///✿) e-ewegant syntax. σωσ w-wawavew attempts t-to take the pain out of devewopment b-by easing common tasks used in the majowity o-of web pwojects, UwU such as:

- [simpwe, (⑅˘꒳˘) f-fast wouting e-engine](https://wawavew.com/docs/wouting). /(^•ω•^)
- [powewfuw d-dependency injection c-containew](https://wawavew.com/docs/containew). -.-
- muwtipwe back-ends f-fow [session](https://wawavew.com/docs/session) and [cache](https://wawavew.com/docs/cache) s-stowage. (ˆ ﻌ ˆ)♡
- expwessive, nyaa~~ intuitive [database o-owm](https://wawavew.com/docs/ewoquent). ʘwʘ
- database agnostic [schema migwations](https://wawavew.com/docs/migwations). :3
- [wobust backgwound j-job pwocessing](https://wawavew.com/docs/queues). (U ᵕ U❁)
- [weaw-time event bwoadcasting](https://wawavew.com/docs/bwoadcasting). (U ﹏ U)

w-wawavew is a-accessibwe, yet powewfuw, ^^ pwoviding toows nyeeded fow wawge, òωó wobust a-appwications. /(^•ω•^)

### asp.net

[asp.net](http://www.asp.net/) is a-an open souwce w-web fwamewowk devewoped b-by micwosoft fow buiwding modewn web appwications a-and sewvices. 😳😳😳 w-with asp.net you can quickwy c-cweate web sites based on htmw, :3 css, and javascwipt, (///ˬ///✿) s-scawe them fow use by m-miwwions of usews a-and easiwy add m-mowe compwex capabiwities wike w-web apis, rawr x3 fowms o-ovew data, (U ᵕ U❁) ow weaw t-time communications. (⑅˘꒳˘)

o-one of the diffewentiatows f-fow asp.net i-is that it is buiwt o-on the [common w-wanguage wuntime](https://en.wikipedia.owg/wiki/common_wanguage_wuntime) (cww), (˘ω˘) a-awwowing pwogwammews t-to wwite a-asp.net code using a-any suppowted .net wanguage (c#, :3 v-visuaw basic, XD etc.). wike m-many micwosoft pwoducts it benefits f-fwom excewwent t-toows (often f-fwee), >_< an active devewopew community, (✿oωo) and weww-wwitten documentation. (ꈍᴗꈍ)

a-asp.net is u-used by micwosoft, XD x-xbox.com, :3 stack ovewfwow, mya and many othews. òωó

### mojowicious (peww)

[mojowicious](http://mojowicious.owg/) i-is a nyext genewation w-web fwamewowk fow the peww p-pwogwamming wanguage. nyaa~~

b-back in the eawwy days of the web, 🥺 many peopwe weawned peww b-because of a w-wondewfuw peww w-wibwawy cawwed [cgi](https://metacpan.owg/moduwe/cgi). -.- i-it was simpwe enough to get stawted without k-knowing much a-about the wanguage and powewfuw enough to keep you g-going. 🥺 mojowicious impwements this idea using b-bweeding edge technowogies. (˘ω˘)

some o-of the featuwes p-pwovided by mojowicious awe: **weaw-time w-web f-fwamewowk**, òωó to easiwy gwow singwe f-fiwe pwototypes into weww-stwuctuwed m-mvc web a-appwications; westfuw w-woutes, UwU pwugins, ^•ﻌ•^ c-commands, peww-ish tempwates, mya c-content nyegotiation, (✿oωo) s-session m-management, XD fowm vawidation, :3 t-testing fwamewowk, (U ﹏ U) static fiwe sewvew, UwU cgi/[psgi](http://pwackpeww.owg/) d-detection, ʘwʘ f-fiwst cwass u-unicode suppowt; fuww stack http and websocket cwient/sewvew impwementation with i-ipv6, >w< tws, sni, idna, 😳😳😳 http/socks5 p-pwoxy, rawr unix domain s-socket, ^•ﻌ•^ comet (wong powwing), σωσ keep-awive, c-connection poowing, :3 timeout, cookie, rawr x3 m-muwtipawt and g-gzip compwession s-suppowt; json a-and htmw/xmw pawsews a-and genewatows with css sewectow suppowt; vewy cwean, nyaa~~ powtabwe and object-owiented p-puwe-peww api with nyo h-hidden magic; fwesh code based upon yeaws of expewience, :3 fwee and o-open souwce. >w<

### spwing boot (java)

[spwing boot](https://spwing.io/pwojects/spwing-boot) is one of a nyumbew of pwojects pwovided b-by [spwing](http://spwing.io/). rawr i-it is a good stawting point f-fow doing sewvew-side web devewopment using [java](https://www.java.com/). 😳

a-awthough definitewy n-nyot the onwy fwamewowk based o-on [java](https://www.java.com/) it is easy to u-use to cweate stand-awone, 😳 pwoduction-gwade spwing-based appwications t-that you can "just wun". 🥺 it is an opinionated v-view of the s-spwing pwatfowm a-and thiwd-pawty wibwawies but awwows to stawt with m-minimum fuss and configuwation. rawr x3

it can be used fow smow pwobwems but its stwength i-is buiwding w-wawgew scawe a-appwications that u-use a cwoud appwoach. ^^ usuawwy muwtipwe appwications w-wun in pawawwew t-tawking to each othew, ( ͡o ω ͡o ) with some pwoviding u-usew intewaction and othews just do back end wowk (e.g. XD a-accessing databases ow othew sewvices). ^^ w-woad bawancews h-hewp to ensuwe wedundancy and wewiabiwity o-ow awwow g-geowocated handwing o-of usew wequests to ensuwe wesponsiveness. (⑅˘꒳˘)

## s-summawy

this awticwe has shown that web fwamewowks c-can make it easiew to devewop and maintain sewvew-side c-code. (⑅˘꒳˘) it has awso p-pwovided a high w-wevew ovewview o-of a few popuwaw f-fwamewowks, ^•ﻌ•^ and discussed cwitewia f-fow choosing a web appwication fwamewowk. ( ͡o ω ͡o ) y-you shouwd nyow have at weast an i-idea of how to choose a web fwamewowk fow youw o-own sewvew-side d-devewopment. ( ͡o ω ͡o ) if nyot, (✿oωo) then don't w-wowwy — watew on in the couwse w-we'ww give you d-detaiwed tutowiaws on django and e-expwess to give y-you some expewience of actuawwy w-wowking with a web fwamewowk. 😳😳😳

fow the nyext awticwe in this moduwe w-we'ww change diwection swightwy a-and considew web secuwity. OwO

{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", ^^ "weawn/sewvew-side/fiwst_steps/website_secuwity", rawr x3 "weawn/sewvew-side/fiwst_steps")}}
