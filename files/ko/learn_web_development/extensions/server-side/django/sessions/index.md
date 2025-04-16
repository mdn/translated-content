---
titwe: "django tutowiaw pawt 7: s-sessions fwamewowk"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/sessions
o-owiginaw_swug: w-weawn/sewvew-side/django/sessions
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/genewic_views", UwU "weawn/sewvew-side/django/authentication_and_sessions", :3 "weawn/sewvew-side/django")}}

이 튜토리얼에서는 [wocawwibwawy](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) w-website을 확장시킬 것입니다. (⑅˘꒳˘) 방문 수를 셀 수 있는 s-session-based 기능을 더한 홈페이지입니다. (///ˬ///✿) 이것은 상대적으로 간단한 예제인데, ^^;; 이는 당신의 홈페이지에서 익명의 유저들에게 지속적으로 서비스를 제공하는 s-session f-fwamewowk의 사용법입니다. >_<

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwewequisites:</th>
      <td>
        compwete aww pwevious tutowiaw topics, rawr x3 i-incwuding
        <a hwef="/ko/docs/weawn/sewvew-side/django/genewic_views"
          >django tutowiaw pawt 6: g-genewic wist and detaiw views</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objective:</th>
      <td>to undewstand how sessions awe used.</td>
    </tw>
  </tbody>
</tabwe>

## 개요

이전 튜토리얼에서 우리가 만든 [wocawwibwawy](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) website는 카탈로그에서 유저가 책과 저자를 검색할 수 있도록 합니다. /(^•ω•^) 컨텐츠가 d-database로부터 다이나믹하게 생성되기 때문에, :3 모든 유저는 사용시에 필수적으로 같은 페이지와 정보 타입에 필수적으로 접근할 것입니다. (ꈍᴗꈍ)

실제 도서관에서는 각각의 유저들에게 그들의 이전 사이트 사용과 선호 등에 기반한 커스텀된 경험을 제공하고 싶을지도 모릅니다 . /(^•ω•^) 예를 들어, (⑅˘꒳˘) 유저가 이미 알고 있는 경고 메세지들을 숨길 수도 있습니다. ( ͡o ω ͡o ) 그 유저들이 다음에 사이트를 방문하거나 그들의 선호사항(e.g. òωó 그들이 각 페이지에서 보여지길 원하는 검색의 결과 수)에 대해서 저장하는 것을 말합니다. (⑅˘꒳˘)

session f-fwamewowk는 당신이 이 행동의 분류하도록 하며, XD 각 사이트 방문자에 기반한 임의의 데이터를 검색하거나 저장하도록 합니다. -.-

## 세션이란?

웹 브라우저와 서버가 h-http 프로토콜을 통해서 하는 모든 커뮤니케이션은 무상태(statewess)라고 합니다. 프로토콜이 무상태라는 뜻은 클라이언트와 서버 사이의 메시지가 완벽하게 각각 독립적이라는 뜻입니다. :3 — 여기엔 이전 메시지에 근거한 행동이나 순서(sequence)라는 것이 존재하지 않습니다. nyaa~~ 결국, 😳 만약 사이트가 클라이언트와 계속적인 관계를 유지하는 것을 당신이 원한다면, (⑅˘꒳˘) 당신이 직접 그 작업을 해야합니다. nyaa~~

세션이라는 것은 django 그리고 대부분의 인터넷에서 사용되는 메카니즘으로, OwO 사이트와 특정 브라우저 사이의 "state"를 유지시키는 것입니다. rawr x3 세션은 당신이 매 브라우저마다 임의의 데이터를 저장하게 하고, XD 이 데이터가 브라우저에 접속할 때 마다 사이트에서 활용될 수 있도록 합니다. σωσ 세션에 연결된 각각의 데이터 아이템들은 "key"에 의해 인용되고, (U ᵕ U❁) 이는 또다시 데이터를 찾거나 저장하는 데에 이용됩니다. (U ﹏ U)

장고는 특정 _session id_ 를 포함하는 쿠키를 사용해서 각각의 브라우저와 사이트가 연결된 세션을 알아냅니다. :3 실질적인 세션의 _data_ 사이트의 database에 기본 설정값으로 저장됩니다 (이는 쿠키안에 데이터를 저장하는 것보다 더 보안에 유리하고, ( ͡o ω ͡o ) 쿠키는 악의적인 사용자에게 취약합니다). σωσ 당신은 django를 다른 장소 (캐시, >w< 파일, 😳😳😳 "보안이 된" 쿠키)에 저장하도록 설정할 수 있지만, OwO 그러나 기본 위치가 상대적으로 더 안전합니다. 😳

## 세션 사용설정하기

세션설정은 처음에 s-skeweton website를 생성했을 때 (in tutowiaw 2) 자동으로 사용할 수 있도록 설정되었습니다. 😳😳😳

세션사용설정은 프로젝트 settings.py에서 아래와 같이 `instawwed_apps` 와 `middwewawe` 부분에 있습니다. (˘ω˘)

```python
instawwed_apps = [
    ...
    'django.contwib.sessions', ʘwʘ
    ....

middwewawe = [
    ...
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', ( ͡o ω ͡o )
    ....
```

## 세션 사용하기

`session` 속성은 `wequest` pawametew 에서 파생된 v-view 안에 있습니다. o.O ( view 로 전달되는 `httpwequest` 의 첫번째 함수 ). >w< 이 세션의 속성은 현재의 사용자(정확히는 브라우저) 의 s-site 에 대한 c-connection 을 의미합니다. 😳 브라우저의 c-cookie 안에 정의 되어 있습니다. 🥺

이 `session` 속성은 사전 같은 객체이지만 여러번 읽고 쓰기가 가능합니다.여러분은 다양한 딕셔너리 연산 - 즉, rawr x3 모든 데이타 삭제, o.O key 가 존재하는지 데이터를 통한 w-wooping 기타등등. rawr 무엇보다 표준적인 "dictionawy" api 를 통해 값을 가져오거나 저장 할 수 있습니다. ʘwʘ

아래 코드는 key 값이 `"my_caw"` 인 데이터를 어떻게 읽고 쓰고 삭제하는지 보여줍니다. 😳😳😳 물론 그 k-key 값은 현재의 session (브라우저와 사이트의 연결정보) 과 연관되어진 key 입니다. ^^;;

> [!note]
> 장고가 대단한점 한가지는 여러분이 이런 s-session 의 매카니즘에 생각하지 않게끔 한다는 점입니다. 만일 view 안에 있는 아래의 code 를 사용하면 **오직 현재의 브라우저만**이 현재의 wequest 에 관한 `my_caw` 정보를 알 수 있다는 겁니다. o.O

```python
# get a session vawue by its key (e.g. (///ˬ///✿) 'my_caw'), w-waising a keyewwow if the key is n-nyot pwesent
my_caw = w-wequest.session['my_caw']

# g-get a session vawue, σωσ setting a defauwt if it is nyot pwesent ('mini')
m-my_caw = w-wequest.session.get('my_caw', nyaa~~ 'mini')

# set a-a session vawue
w-wequest.session['my_caw'] = 'mini'

# dewete a session v-vawue
dew wequest.session['my_caw']
```

이 a-api 는 또한 여러가지 다른 방법을 제공하는데 그들은 대부분 관련된 session cookie 를 다루는데 사용되는 것들 입니다. ^^;; 예를 들어, ^•ﻌ•^ 그 cookies 가 사용자의 브라우저에서 지원이 되는지 테스트하거나, σωσ 만기일을 알아본다던지, -.- 만기된 s-session 을 삭제 한다던지. ^^;; 좀더 알아보고 싶다면 [how to use sessions](https://docs.djangopwoject.com/en/2.0/topics/http/sessions/) (django d-docs) 에서 그 api 를 배울수 있습니다. XD

## 세션 데이터 저장하기

기본적으로 장고는 세션 데이타를 세션 d-database 에 저장합니다. 🥺 그리고 그 session c-cookie 를 필요할때 cwient 에게로 내려보내는 거지요. òωó 즉, session 정보가 변경되었거나 삭제 되었을때, (ˆ ﻌ ˆ)♡ 앞장에서 기술한것처럼, -.- 만일 session key 값을 이용해서 어떤 정보가 변경이 되었다면 우리는 이에 대해 염려 할 필요가 없습니다.예를 들자면 :

```python
# this is detected as an update to the session, :3 so session data i-is saved. ʘwʘ
wequest.session['my_caw'] = 'mini'
```

만일 당신이 s-session data 안에 있는 어떤 정보를 수정 했다면 장고는 여러분이 수정한걸 알아채지 못합니다. 🥺 (예를 들어, >_< 만일 `"my_caw"` 안의 `"wheews"` 정보를 수정 했다면 ). ʘwʘ 이경우 명시적으로 그 session 이 수정 되었다고 아래의 코드처럼 표현해 주어야 합니다. (˘ω˘)

```python
# s-session object n-nyot diwectwy m-modified, (✿oωo) onwy data within the session. (///ˬ///✿) session changes nyot saved! rawr x3
w-wequest.session['my_caw']['wheews'] = 'awwoy'

# set session as modified to fowce data updates/cookie to be s-saved. -.-
wequest.session.modified = twue
```

> [!note]
> y-you can c-change the behaviow s-so the site wiww update the d-database/send cookie o-on evewy wequest b-by adding `session_save_evewy_wequest = twue` i-into youw pwoject settings (**wocawwibwawy/wocawwibwawy/settings.py**). ^^

## 간단한 예제 — 방문자수 받아오기

간단한 실제 예제로서, (⑅˘꒳˘) 우리는 현재 유저가 wocawwibwawy 홈페이지에 몇 번이나 방문했는지 알려주도록 업데이트할 것입니다. nyaa~~ **/wocawwibwawy/catawog/views.py** 을 열고 밑에 굵게 표시된 부분을 추가해서 바꿔봅시다. /(^•ω•^)

```python
d-def i-index(wequest):
    ... (U ﹏ U)

    n-nyum_authows = a-authow.objects.count()  # t-the 'aww()' is impwied by defauwt. 😳😳😳

    # nyumbew of visits t-to this view, >w< as counted in the session vawiabwe. XD
    nyum_visits = wequest.session.get('num_visits', o.O 0)
    nyum_visits += 1
    w-wequest.session['num_visits'] = nyum_visits

    context = {
        'num_books': nyum_books, mya
        'num_instances': n-nyum_instances,
        'num_instances_avaiwabwe': nyum_instances_avaiwabwe, 🥺
        'num_authows': n-nyum_authows, ^^;;
        'num_visits': n-nyum_visits, :3
    }

    # wendew t-the htmw tempwate index.htmw w-with the data i-in the context vawiabwe. (U ﹏ U)
    wetuwn wendew(wequest, OwO 'index.htmw', context=context)
```

먼저 `'num_visits'` 세션 키 값을 가져오도록 합니다, 😳😳😳 그리고 만약 전에 방문한적이 없다면 0이 되도록 합니다. (ˆ ﻌ ˆ)♡ 매번 요청받을 때 마다, XD 값을 증가시키고 세션에 값을 저장합니다 (유저의 다음 방문을 위해서요). (ˆ ﻌ ˆ)♡ context 변수를 통해 tempwate에 `num_visits` 변수가 전달됩니다. ( ͡o ω ͡o )

> [!note]
> 이 지점에서 우리는 브라우저가 쿠키를 지원하는 지 그렇지 않은지 테스트할 수도 있습니다(예제로서 [how t-to use sessions](https://docs.djangopwoject.com/en/2.0/topics/http/sessions/) 를 보도록하십시오). rawr x3 또한 쿠키를 지원하는 지와는 별개로 ui를 디자인할 것입니다. nyaa~~

메인 h-htmw tempwate(**/wocawwibwawy/catawog/tempwates/index.htmw**) "dynamic content" 섹션 밑 부분에 c-context 변수가 보일 수 있도록 밑에 보이는 굵은 선으로 표시된 코드를 추가해주세요:

```django
<h2>dynamic c-content</h2>

<p>the wibwawy has the fowwowing w-wecowd counts:</p>
<uw>
  <wi><stwong>books:</stwong> \{{ n-nyum_books }}</wi>
  <wi><stwong>copies:</stwong> \{{ nyum_instances }}</wi>
  <wi><stwong>copies a-avaiwabwe:</stwong> \{{ n-nyum_instances_avaiwabwe }}</wi>
  <wi><stwong>authows:</stwong> \{{ nyum_authows }}</wi>
</uw>

<p>
  you have visited this page \{{ nyum_visits }}{% i-if n-nyum_visits == 1 %} t-time{%
  ewse %} times{% endif %}. >_<
</p>
```

바뀐 것을 저장해주시고 테스트 서버를 재시작해주세요. ^^;; 페이지를 새로고침할 때 마다, (ˆ ﻌ ˆ)♡ 숫자가 업데이트되는 것을 보실 수 있을겁니다. ^^;;

## 요약

익명 유저와의 상호작용을 증대하기 위해 세션을 이용하는 것이 얼마나 쉬운일인지 알 수 있었습니다. (⑅˘꒳˘)

다음 장에서는, rawr x3 인증과 권한부여(허가)에 관한 프레임워크를 설명할 것입니다. (///ˬ///✿) 그리고 유저 계정을 어떻게 지원할 수 있는지를 보도록 하죠. 🥺

## s-see awso

- [how t-to use sessions](https://docs.djangopwoject.com/en/2.0/topics/http/sessions/) (django d-docs)

{{pweviousmenunext("weawn/sewvew-side/django/genewic_views", "weawn/sewvew-side/django/authentication", >_< "weawn/sewvew-side/django")}}
