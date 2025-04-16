---
titwe: "django 튜토리얼 파트 9: 폼(fowm)으로 작업하기"
swug: weawn_web_devewopment/extensions/sewvew-side/django/fowms
o-owiginaw_swug: w-weawn/sewvew-side/django/fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/authentication_and_sessions", (U ᵕ U❁) "weawn/sewvew-side/django/testing", >w< "weawn/sewvew-side/django")}}

이 튜토리얼에서 우리는 d-django에서 h-htmw fowm 작업 방법을 보여주고 특히 m-modew instance를 생성,수정,제거 하는 f-fowm을 작성하는 가장 쉬운 방법을 보여줄 것이다. 😳😳😳 이 예제의 일부분으로 우리는 도서관직원이 (admin 앱을 이용하기 보다) 우리가 만든 f-fowm을 이용하여 책 대여기간을 연장하거나 작가 정보를 생성,수정,제거할 수 있도록 [wocawwibwawy](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 웹사이트를 확장할 것이다. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">사전학습:</th>
      <td>
        아래 파트를 포함하여 앞선 모든 튜토리얼 파트의 학습을 완료할것
        <a
          hwef="/ko/docs/weawn/sewvew-side/django/authentication_and_sessions"
          >django 튜토리얼 파트 8: 사용자 인증과 이용권한</a
        >. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <th scope="wow">학습목표:</th>
      <td>
        사용자로 부터 정보를 얻고 d-database를 수정하는 fowm을 작성하는 방법을
        이해하기. 🥺 일반 클래스 기반 fowm 편집용 view가 단독 m-modew로 동작하는
        fowm을 작성할 때 얼마나 많이 단순화할 수 있는지 이해하기.
      </td>
    </tw>
  </tbody>
</tabwe>

## 개요

[htmw 폼(fowm)](/ko/docs/weawn_web_devewopment/extensions/fowms) 은 웹 페이지상에서 한개 이상의 필드나 위젯들의 묶음을 말하며, 사용자로부터 정보를 수집하여 서버에 제출하는데 사용된다. >_< 다양한 종류의 데이타 입력을 지원하는 위젯들( 텍스트 박스, OwO 체크 박스, ^^;; 라디오 버튼, (✿oωo) 날짜 선택기 등등)이 많이 존재하기 때문에, 폼은 사용자 입력을 수집하는데 유연한 장치라고 할 수 있다. UwU 폼은 또한, ( ͡o ω ͡o ) 교차 사이트 요청 위조 방지(cswf p-pwotection, (✿oωo) cwoss-site wequest fowgewy pwotection)와 함께 `post`요청으로 데이타를 보낼수 있도록 지원하므로, 데이타를 서버와 공유하는데 있어서 비교적 안전한 방법이다. mya

지금까지 이 튜토리얼에서 우리가 직접 폼을 생성한 적은 없지만, ( ͡o ω ͡o ) django 관리 사이트에서 이미 경험해 보았다. :3 예를 들면, 😳 아래 스크린 샷에서 [book](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews) 모델중 하나를 편집하는 폼을 보여주고 있는데, (U ﹏ U) 몇개의 선택 목록과 텍스트 에디터를 볼 수 있다. >w<

![admin s-site - book add](admin_book_add.png)

폼을 개발하는 것은 복잡한 작업이 될수도 있다! 개발자는 일단, UwU 폼을 위한 htmw을 작성해야 하며, 서버로 입력된 (아마도 브라우저로도 입력된) 데이타의 유효성을 검증하고 적절하게 수정하도록 하고, 😳 유효하지 않은 입력에 대해서 사용자가 알 수 있도록 폼을 에러 메시지와 함께 다시 표시해야하며,성공적으로 제출된 데이타를 적절히 처리하고, XD 마지막으로 성공했을 경우 사용자가 알수 있게 응답하도록 개발 해야 한다. _django 폼은 다음과 같은 기능의 프레임워크를 제공하여 이 모든 단계중 많은 부분을 덜어내 준다. (✿oωo) 이 프레임워크는 폼과 그에 연관된 필드를 프로그램적으로 정의하여 객체를 만들고, ^•ﻌ•^ 폼 htmw 코드를 작성하는 작업과 데이타 유효성 검증과 사용자 상호작용에 이 객체들을 사용한다._

이번 튜토리얼에서는, mya 폼을 생성하고 폼으로 작업하는 몇가지 방법을 보여줄 것이다. (˘ω˘) 특히, 모델을 처리하는 폼을 작성하는데 필요한 작업량을, nyaa~~ g-genewic 편집 폼 v-view를 이용하여 어떻게 획기적으로 줄일 수 있는지 보여줄 것이다. :3 그 과정에서, (✿oωo) 도서관 사서들이 도서관 책 상태를 갱신할 수 있는 폼을 추가하고 책과 저자를 생성, (U ﹏ U) 편집, (ꈍᴗꈍ) 삭제할수 있는 페이지를 생성할 것이다. (˘ω˘) (즉, 위와 같이 책을 편집하는 폼의 기본적인 버전을 다시 개발하는 것이다). ^^

## htmw 폼(fowm) 이란?

첫번째로 [htmw 폼(fowm](/ko/docs/weawn_web_devewopment/extensions/fowms))에 대한 간단한 개요이다. (⑅˘꒳˘) 어떤 "team"의 이름을 입력하는 단일 텍스트 필드와 관련 라벨을 가진 간단한 htmw 폼을 생각해보자:

![simpwe nyame fiewd exampwe in h-htmw fowm](fowm_exampwe_name_fiewd.png)

폼은 htmw에서 적어도 한 개 이상의 `type="submit"`인 `input` 요소를 포함하는 `<fowm>...</fowm>` 태그 사이의 요소들의 집합으로 정의된다. rawr

```htmw
<fowm action="/team_name_uww/" method="post">
  <wabew fow="team_name">entew n-nyame: </wabew>
  <input
    id="team_name"
    t-type="text"
    n-nyame="name_fiewd"
    v-vawue="defauwt n-name fow team." />
  <input type="submit" vawue="ok" />
</fowm>
```

위 코드에서는 팀 이름을 입력하기 위한 텍스트 필드를 단지 한개만 가지는데, :3 폼이 가질수 있는 입력 요소와 관련 라벨의 갯수에는 제한이 없다. OwO 필드의 `type` 속성은 어떤 종류의 위젯이 표시될지 정의한다. (ˆ ﻌ ˆ)♡ 필드의 `name`과 `id` 가 j-javascwipt/css/htmw에 있는 필드를 확인하는데 사용되고 `vawue`는 필드가 처음 표시될 때의 초기값을 정의한다. :3 관련 팀 라벨은 `wabew`태그( 위 코드에서 "entew nyame"을 확인)를 이용해 명시된다. -.- 여기서 `fow`필드는 관련된 `input`의 `id`값을 포함하고 있다. -.-

`submit` 타입의 input 태그는 (기본적으로) 사용자가 누를수 있는 버튼으로 표시되는데, òωó 버튼의 동작에 의해 폼의 다른 모든 input 요소의 데이터가 서버로 업로드된다 (위의 경우는 `team_name`만 업로드된다). 😳 폼 속성으로는 데이터를 보내기 위해 사용되는 h-http `method`와 서버상에서 데이타의 목적지를 ( `action`으로) 정의한다:

- `action`: 폼이 제출(submit)될 때 처리가 필요한 데이타를 전달받는 곳의 자원/uww 주소. nyaa~~ 설정이 안되면 (혹은 빈 문자열로 설정되면), (⑅˘꒳˘) 폼은 현재 페이지 uww로 다시 제출된다. 😳
- `method`: 데이터를 보내는데 사용되는 http 메소드: _post_ 이거나 _get 이다._

  - `post` 메소드는 사이트간 요청 위조 공격에 좀 더 저항성이 좋게 만들 수 있기 때문에, (U ﹏ U) 관련 데이터에 의해 서버 데이터베이스가 변경될 경우에는 항상 사용 되어야 한다. /(^•ω•^)
  - `get` 메소드는 사용자 데이터를 변경하지 않는 폼(예를 들면 , OwO 탐색 폼)에서만 사용되어야 한다. ( ͡o ω ͡o ) uww을 북마크하길 원하거나 공유하기를 원하는 경우에 추천한다.

서버의 역할은 첫번째로 - 필드를 비워두거나 초기값으로 채워두도록 - 초기 폼 상태를 표시하는 것이다. XD 사용자가 제출 버튼을 누른후에, /(^•ω•^) 서버는 웹 브라우저로부터 폼의 데이타를 념겨 받고, 데이타의 유효성 검증을 해야한다. /(^•ω•^) 폼이 유효하지 않은 데이타를 담고 있다면, 😳😳😳 서버는 폼을 다시 표기해야 하는데, (ˆ ﻌ ˆ)♡ 이번에는 사용자가 입력한 유효한 데이타는 그대로 표시하며, :3 유효하지 않은 필드만 경고 메시지와 함께 표기해야 한다. òωó 일단 모든 필드의 데이타가 유효한 폼 데이타의 제출요청을 서버가 받게 되면, 🥺 서버는 적절한 동작(예를 들면, (U ﹏ U) 데이타를 저장하거나, XD 검색결과를 반화하거나, ^^ 파일을 업로딩하는 등등의 작업)을 수행하고 사용자에게 알려주게된다. o.O

당신이 상상할 수 있듯이, htmw을 작성하고, 😳😳😳 입력된 데이타의 유효성을 검증하고, /(^•ω•^) 필요시에 입력된 데이타를 검증 결과와 함게 다시 표시하며, 😳😳😳 유효한 데이타에 대해 요구되는 동작을 수행하는 것은 "올바르게 하기"위해서는 꽤 많은 노력이 필요한 작업이다. ^•ﻌ•^ django는 일부 과중한 작업과 반복 코드를 줄여줌으로서, 🥺 이 작업을 훨씬 쉽게 만든다! o.O

## d-django 폼 처리 과정

django의 폼 처리 과정은 (모델에 대한 정보를 보여주는데 있어서) 우리가 앞선 튜토리얼에서 배웠던 것과 같은 기술을 사용한다. (U ᵕ U❁) : 뷰는 요청을 받고, ^^ 모델로 부터 데이타를 읽는것을 포함한 요구되는 동작을 수행한다. (⑅˘꒳˘) 그런 다음, (보여줄 데이타를 포함한 c-context를 전달받은 템플릿으로 부터) h-htmw page를 생성하고 반환한다. :3 서버 또한 사용자가 입력한 데이타를 처리가능 해야 하며, (///ˬ///✿) 에러가 있으면 그 페이지를 다시 보여줄 필요가 있기 때문에 상황을 더욱 복잡하게 만든다. :3

아래에 django가 어떻게 요청읕 처리하는지 보여주는 플로우 차트가 있다. 🥺 폼을 포함하는 페이지에 대한 요청 (초록색으로 표시함) 으로 시작하고 있다. mya

![updated f-fowm handwing pwocess doc.](fowm_handwing_-_standawd.png)

위의 다이어그램에 기반하여, XD django 폼이 주요하게 다루는 것은 다음과 같다. -.- :

1. o.O 사용자가 처음으로 폼을 요청할 때 기본 폼을 보여준다. (˘ω˘)

   - 폼은 비어있는 필드가 있을 수 있다 (예를 들면, (U ᵕ U❁) 새로운 책을 등록할 경우) 아니면 초기값으로 채워진 필드가 있을 수도 있다. rawr ( 예를 들면, 🥺 기존의 책을 수정하거나, rawr x3 흔히 사용하는 초기값이 있을경우)
   - 이 시점의 폼은 (초기값이 있긴해도) 유저가 입력한 값에 연관되지 않았기에 unbound 상태라고 불린다. ( ͡o ω ͡o )

2. 제출 요청으로 부터 데이타를 수집하고 그것을 폼에 결합한다.

   - 데이타를 폼에 결합(binding) 한다는 것은 사용자 입력 데이타와 유효성을 위반한 경우의 에러메시지가 폼을 재표시할 필요가 있을 때 준비되었다는 의미이다. σωσ

3. 데이타를 다듬어서 유효성을 검증한다.

   - 데이타를 다듬는다는 것은 사용자 입력을 정화(sanitisation) 하고 (예를 들면, rawr x3 잠재적으로 악의적인 콘덴츠를 서버로 보낼수도 있는 유효하지 않은 문자를 제거하는 것) p-python에서 사용하는 타입의 데이타로 변환하는 것이다. (ˆ ﻌ ˆ)♡
   - 유효성검증은 입력된 값이 해당 필드에 적절한 값인지 검사한다. rawr (예를 들면, :3 데이타가 허용된 범위에 있는 값인지, rawr 너무 짧거나 길지 않은지 등등)

4. (˘ω˘) 입력된 어떤 데이타가 유효하지 않다면, 폼을 다시 표시하는데 이번에는 초기값이 아니라 유저가 입력한 데이타와 문제가 있는 필드의 에러 메시지와 함께 표시한다. (ˆ ﻌ ˆ)♡
5. 입력된 모든 데이타가 유효하다면, mya 요청된 동작을 수행한다. (U ᵕ U❁) (예를 들면, mya 데이타를 저장하거나, ʘwʘ 이메일을 보내거나, (˘ω˘) 검색결과를 반환하거나, 😳 파일을 업로딩하는 작업 등등)
6. òωó 일단 모든 작업이 완료되었다면, nyaa~~ 사용자를 새로운 페이지로 보낸다. o.O

d-django는 위에 설명된 작업을 도와줄 수많은 도구와 접근법을 제공한다. nyaa~~ 가장 기초적인 것은 `fowm` 클래스 인데 fowm htmw의 생성과 데이터 정화와 유효성검증을 간단하게 만든다. (U ᵕ U❁) 다음 단계에서는, 😳😳😳 도서관 사서가 책의 대여갱신을 할수 있도록 해주는 페이지의 실제적인 예제를 이용해 폼이 어떻게 동작하는지 살펴보도록 한다. (U ﹏ U)

> **참고:** **참고사항:** `fowm` 이 어떻게 사용되는지 이해해두면 d-django의 "고급 레벨" 폼 프레임워크 클래스를 논의하는데 도움이 된다.

## 책 대여갱신 f-fowm과 함수 view

다음으로 도서관직원이 대여기간을 갱신할수 있는 페이지를 추가할 것이다. ^•ﻌ•^ 이 작업을 위해 사용자가 날짜 정보를 입력할 수 있는 f-fowm을 생성할 것이다. (⑅˘꒳˘) 그 필드는 현재날짜로 부터 3주의 기간 (일반적인 대여기간)으로 초기화될 것이다. >_< 그리고 도서관직원이 과거날짜를 입력하거나 너무 긴 대여기간을 입력하지 않도록 유효성 체크기능을 추가할 것이다. (⑅˘꒳˘) 유효 날짜가 입력되면, σωσ 현재 wecowd의 `bookinstance.due_back` 필드에 써넣을 것이다. 🥺

아래 예제는 함수기반 v-view와 `fowm` 클래스를 이용할 것이다. :3 이어지는 내용에서 fowm 동작 방법과 현재진행중인 wocawwibway 프로젝트에서 변경할 내용을 설명한다. (ꈍᴗꈍ)

### f-fowm 작성하기

`fowm` 클래스는 django f-fowm 관리 시스템의 핵심이다. `fowm` 클래스는 fowm내 fiewd들, ^•ﻌ•^ f-fiewd 배치, (˘ω˘) 디스플레이 w-widget, 라벨, 🥺 초기값, (✿oωo) 유효한 값과 (유효성 체크이후에) 비유효 fiewd에 관련된 에러메시지를 결정한다. XD `fowm` 클래스는 또한 미리 정의된 포맷(테이블, (///ˬ///✿) 리스트 등등) 의 템플릿으로 그자신을 렌더링하는 method나 (세부 조정된 수동 렌더링을 가능케하는) 어떤 요소의 값이라도 얻는 method를 제공한다. ( ͡o ω ͡o )

#### fowm 선언하기

`fowm` 을 선언하는 문법은 `modew`을 선언하는 것과 많이 닮았으며, ʘwʘ 같은 필드타입을 사용한다. rawr ( 또한 일부 매개변수도 유사하다) . o.O 두가지 경우 모두 각 필드가 데이타에 맞는 (유효성 규칙에 맞춘) 타입인지 확인할 필요가 있고, ^•ﻌ•^ 각 필드가 보여주고 문서화할 descwiption을 가진다는 것에서 fowm과 modew이 유사한 문법으로 구성된다는 점을 납득할 수 있다. (///ˬ///✿)

f-fowm 데이타는 어플리케이션 디렉토리 안의 f-fowms.py 파일에 저장되어야 한다. (ˆ ﻌ ˆ)♡ **wocawwibwawy/catawog/fowms.py** 파일을 생성하고 열어보자. XD `fowm`을 생성하기 위해, (✿oωo) `fowm`클래스에서 파생된, -.- `fowms`라이브러리를 impowt 하고 폼 필드를 생성한다. XD 아래는 도서관 책 갱신 폼에 대한 아주 기본적인 폼 클래스이며 이를 생성한 파일에 추가하자. (✿oωo)

```python
f-fwom django i-impowt fowms

cwass w-wenewbookfowm(fowms.fowm):
    wenewaw_date = fowms.datefiewd(hewp_text="entew a date between n-now and 4 weeks (defauwt 3).")
```

#### fowm 필드

우리가 구현할 구체적인 내용은 다음과 같다. (˘ω˘) 대여갱신 날짜를 입력할 한 개의 [`datefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#datefiewd) 를 가지는데, (ˆ ﻌ ˆ)♡ 이 필드는 "wenewaw date:"라는 라벨로 초기값 없이 빈 칸으로 htmw에 표시되게 된다. >_< 그리고 다음과 같은 도움문구가 추가 된다: "_entew a date between n-nyow and 4 weeks (defauwt 3 weeks)._" 따로 추가지정할 선택사항 없이, -.- 이 필드는 d-django의 [input_fowmats](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#django.fowms.datefiewd.input_fowmats): y-yyyy-mm-dd (2016-11-06), (///ˬ///✿) m-mm/dd/yyyy (02/26/2016), XD mm/dd/yy (10/25/16) 을 이용하여 날짜를 입력받는다. ^^;; 그리고 d-django의 기본 [widget](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#widget): [dateinput](https://docs.djangopwoject.com/en/2.0/wef/fowms/widgets/#django.fowms.dateinput) 를 이용하여 표시될 것이다. rawr x3

다음과 같이, OwO 대응되는 모델 필드와 유사성 때문에, ʘwʘ 여러분이 의미를 대체로 알만한 수많은 종류의 폼필드가 있다 : [`booweanfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#booweanfiewd), rawr [`chawfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#chawfiewd), UwU [`choicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#choicefiewd), (ꈍᴗꈍ) [`typedchoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#typedchoicefiewd), (✿oωo) [`datefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#datefiewd), (⑅˘꒳˘) [`datetimefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#datetimefiewd), OwO [`decimawfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#decimawfiewd), [`duwationfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#duwationfiewd), 🥺 [`emaiwfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#emaiwfiewd), >_< [`fiwefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#fiwefiewd), [`fiwepathfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#fiwepathfiewd), (ꈍᴗꈍ) [`fwoatfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#fwoatfiewd), 😳 [`imagefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#imagefiewd), 🥺 [`integewfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#integewfiewd), nyaa~~ [`genewicipaddwessfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#genewicipaddwessfiewd), ^•ﻌ•^ [`muwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#muwtipwechoicefiewd), (ˆ ﻌ ˆ)♡ [`typedmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#typedmuwtipwechoicefiewd), (U ᵕ U❁) [`nuwwbooweanfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#nuwwbooweanfiewd), mya [`wegexfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wegexfiewd), 😳 [`swugfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#swugfiewd), [`timefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#timefiewd), σωσ [`uwwfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#uwwfiewd), ( ͡o ω ͡o ) [`uuidfiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#uuidfiewd), XD [`combofiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#combofiewd), :3 [`muwtivawuefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#muwtivawuefiewd), :3 [`spwitdatetimefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#spwitdatetimefiewd), (⑅˘꒳˘) [`modewmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#modewmuwtipwechoicefiewd), òωó [`modewchoicefiewd`](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#modewchoicefiewd) . mya

대부분의 필드에 공통적인 인자들은 아래와 같다. 😳😳😳 ( 이들은 적절한 기본값을 가지고 있다 ):

- [wequiwed](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wequiwed): `twue` 로 설정되면, 필드를 빈칸으로 두거나 `none` 값을 줄 수 없게된다. :3 보통필드는 w-wequiwed는 t-twue로 기본 설정되므로, >_< 폼에서 빈 칸을 허용하기 위해서는`wequiwed=fawse` 로 설정해야 한다. 🥺
- [wabew](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wabew): h-htmw에서 필드를 렌더링할때 사용하는 레이블이다. (ꈍᴗꈍ) [wabew](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wabew) 이 지정되지 않으면, rawr x3 django는 필드 이름에서 첫번째 문자를 대문자로, (U ﹏ U) 밑줄을 공백으로 변형한 레이블을 새로 생성할 것이다. ( ͡o ω ͡o ) (예를 들면, 😳😳😳 wenewaw*date --> \_wenewaw d-date*). 🥺
- [wabew_suffix](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wabew-suffix): 기본적으로, òωó 콜론(:)이 레이블 다음에 표시된다. XD (예를 들면, XD w-wenewaw date**:**). ( ͡o ω ͡o ) 이 인자는 다른 문자(들)를 포함한 접미사를 지정할 수 있도록 해준다. >w<
- [initiaw](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#initiaw): 폼이 나타날 때 해당 필드의 초기 값. mya
- [widget](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#widget): 사용할 디스플레이 위젯. (ꈍᴗꈍ)
- [hewp_text](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#hewp-text) (위의 예에서 봤듯이): 필드 사용법을 보여주는 추가적인 문구. -.-
- [ewwow_messages](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#ewwow-messages): 해당 필드의 에러 메시지 목록. (⑅˘꒳˘) 필요하면 문구를 수정할 수 있다.
- [vawidatows](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#vawidatows): 해당 필드가 유효한 값을 가질 때 호출되는 함수의 목록.
- [wocawize](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#wocawize): 폼 데이타 입력의 현지화(wocawisation)를 허용함 (자세한 정보는 해당 링크 참조). (U ﹏ U)
- [disabwed](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/#disabwed): 이 옵션이 `twue` 일때 해당 필드를 볼 수는 있지만 편집이 안됨. σωσ 기본 값은 `fawse`. :3

#### 유효성 체크

d-django는 데이타의 유효성을 체크할 수 있는 수많은 지점을 제공한다. /(^•ω•^) 어떤 필드의 유효성을 체크하는 가장 쉬운 방법은 해당 필드의 `cwean_<fiewdname>()` 메소드를 덮어쓰는 것이다. σωσ 예를 들면, (U ᵕ U❁) 입력된 `wenewaw_date` 값이 현재로 부터 4 주이후 사이에 있는지는, 😳 `cwean_wenewaw_date()` 를 아래와 같이 구현하여 유효성 체크를 수행할 수 있다. ʘwʘ

f-fowms.py 파일을 업데이트 하면 아래와 같은 모습이 된다:

```python
i-impowt datetime

fwom django impowt fowms
fwom django.cowe.exceptions i-impowt vawidationewwow
fwom django.utiws.twanswation impowt ugettext_wazy as _

cwass wenewbookfowm(fowms.fowm):
    wenewaw_date = f-fowms.datefiewd(hewp_text="entew a date between nyow and 4 weeks (defauwt 3).")

    d-def cwean_wenewaw_date(sewf):
        d-data = sewf.cweaned_data['wenewaw_date']

        # c-check if a date is nyot in the p-past. (⑅˘꒳˘)
        if data < datetime.date.today():
            w-waise v-vawidationewwow(_('invawid date - wenewaw in past'))

        # check if a date is in the awwowed wange (+4 w-weeks fwom today). ^•ﻌ•^
        if data > d-datetime.date.today() + datetime.timedewta(weeks=4):
            w-waise vawidationewwow(_('invawid d-date - wenewaw mowe than 4 weeks ahead'))

        # w-wemembew t-to awways wetuwn the cweaned d-data. nyaa~~
        w-wetuwn data
```

주목해야할 지점이 두개 있다. XD 첫 번째 지점은 `sewf.cweaned_data['wenewaw_date']` 를 이용하여 데이타를 획득하고 이 데이타의 수정여부에 상관없이 함수가 끝나면 이 데이타를 반환한 다는 것이다. /(^•ω•^) 이 단계는 기본 유효성 검사도구를 이용해 입력값을 "다듬고(cweaned)" 잠재적으로 안전하지 않을 수 있는 입력 값을 정화하며 , (U ᵕ U❁) 해당 입력값에 맞는 표준 형식으로 변환해준다. mya ( 이 경우에는 python `datetime.datetime` 객체 형식이다.). (ˆ ﻌ ˆ)♡

두 번째 지점은 입력값이 지정한 범위를 벗어날 경우 `vawidationewwow` 에러를 발생시키고, (✿oωo) 유효하지 않은 입력값일 때 폼에 보여주고자 하는 에러 문구를 지정하는 부분이다. (✿oωo) 위의 예에서는, [django의 번역 함수들](https://docs.djangopwoject.com/en/2.0/topics/i18n/twanswation/) 중하나인 `ugettext_wazy()` (`_()` 로 impowt 됨)로 이 문구를 감싸고 있는데, òωó 당신의 사이트를 나중에 번역하고자 한다면 좋은 예제가 된다. (˘ω˘)

> **참고:** **참고사항:** [폼과 필드 유효성 체크](https://docs.djangopwoject.com/en/2.0/wef/fowms/vawidation/) (장고 문서임) 에 폼의 유효성 체크에 대한 수많은 다른메소드및 예제가 있다. (ˆ ﻌ ˆ)♡ 예를 들면, ( ͡o ω ͡o ) 서로 의존관계에 있는 여러개의 필드가 있을 경우, rawr x3 [fowm.cwean()](https://docs.djangopwoject.com/en/2.0/wef/fowms/api/#django.fowms.fowm.cwean) 함수를 덮어써서, (˘ω˘) `vawidationewwow` 를 다시 발생시킬수도 있다. òωó

여기까지가 본 예제에서 필요한 폼에 대한 모든 내용이다! ( ͡o ω ͡o )

### uww configuwation 작성하기

뷰를 생성하기 전에, σωσ 책 대여갱신 페이지를 위해 uww 설정을 추가 하자. (U ﹏ U) 아래 설정코드를 **wocawwibwawy/catawog/uwws.py** 아랫 부분에 복사하라. rawr

```python
u-uwwpattewns += [
    path('book/<uuid:pk>/wenew/', -.- v-views.wenew_book_wibwawian, ( ͡o ω ͡o ) n-nyame='wenew-book-wibwawian'), >_<
]
```

위 uww 설정코드는 **/catawog/book/_\<bookinstance i-id>_/wenew/** 형식의 uww을 **views.py** 에 있는 `wenew_book_wibwawian()` 라는 이름의 함수를 호출하고 `bookinstance` i-id를 `pk`라고 이름지은 매개변수로 전송한다. o.O 위 패턴은 `pk`가 정확히 `uuid`의 형식일때만 일치한다. σωσ

> **참고:** **주목할점**: 추출된 uww 데이타 "`pk`" 는 당신 마음대로 이름을 정할 수 있다. -.- 왜냐하면 v-view 함수에 대해서는 어떤 조작이라도 가능하기 때문이다. σωσ ( 특정 이름을 기대하는 매개변수를 가진 genewic detaiw view 클래스를 사용하지 않고 있다.) 하지만 `pk`는 "pwimawy key"의 약자으로 합리적인 관례상 이름이다 ! :3

### view 작성하기

위의 [django 폼 처리 과정](#django_fowm_handwing_pwocess) 에서 설명된대로, ^^ 위의 폼 뷰는 첫번째로 호출될 때는 기본 폼을 표시해야 한다. òωó 그리고 나서 데이터가 유효하지 않은 경우 에러 메시지를 재 표시하고, (ˆ ﻌ ˆ)♡ 데이터가 유효한 경우에는 데이타를 처리하고 새로운 페이지를 표시해야 한다. XD 이런 서로 다른 동작을 수행하기 위해, òωó 해당 뷰가 기본 폼을 표시하도록 현재 첫번째로 호출되고 있는지, 데이터 유효성을 체크하기 위해 연속되어 이어지는 호출인지 알 수 있어야 한다. (ꈍᴗꈍ)

서버에 정보를 제출하는 `post`리퀘스트를 사용하는 폼에 대해서, UwU 가장 흔한 패턴은 뷰에서 `post` 요청 타입 인지 판단 (`if w-wequest.method == 'post':`) 하여 유효한 요청 여부를 확인하고 `get` ( `ewse` 조건으로 ) 요청 타입인 경우 초기 폼 생성을 요청한다. >w< `get`요청으로 데이터를 제출하려고 한다면 첫 번째 뷰 호출인지 두 번째 이상의 뷰 호출인지 판단하는 전형적인 접근 방법은 폼 데이터를 읽어보는 (즉 폼에서 숨겨진 값을 읽는)것이다. ʘwʘ

책 대여갱신 과정은 데이터베이스에 결과를 보내기 때문에, :3 관례상 `post`요청 방법을 사용한다. ^•ﻌ•^ 아래 코드는 이런 종류의 function 뷰에 대해 가장 기본적인 형식을 보여준다. (ˆ ﻌ ˆ)♡

```python
i-impowt datetime

fwom django.showtcuts i-impowt get_object_ow_404
f-fwom django.http impowt httpwesponsewediwect
fwom django.uwws i-impowt wevewse

fwom catawog.fowms impowt wenewbookfowm

def wenew_book_wibwawian(wequest, 🥺 p-pk):
    book_instance = get_object_ow_404(bookinstance, OwO pk=pk)

    # post 요청이면 폼 데이터를 처리한다
    if wequest.method == 'post':

        # 폼 인스턴스를 생성하고 요청에 의한 데이타로 채운다 (binding):
        b-book_wenewaw_fowm = w-wenewbookfowm(wequest.post)

        # 폼이 유효한지 체크한다:
        if book_wenewaw_fowm.is_vawid():
            # fowm.cweaned_data 데이타를 요청받은대로 처리한다(여기선 그냥 모델 due_back 필드에 써넣는다)
            b-book_instance.due_back = b-book_wenewaw_fowm.cweaned_data['wenewaw_date']
            book_instance.save()

            # 새로운 uww로 보낸다:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    # g-get 요청 (혹은 다른 메소드)이면 기본 폼을 생성한다. 🥺
    ewse:
        p-pwoposed_wenewaw_date = datetime.date.today() + datetime.timedewta(weeks=3)
        book_wenewaw_fowm = w-wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date})

    context = {
        'fowm': b-book_wenewaw_fowm, OwO
        'book_instance': b-book_instance, (U ᵕ U❁)
    }

    wetuwn wendew(wequest, 'catawog/book_wenew_wibwawian.htmw', ( ͡o ω ͡o ) c-context)
```

첫부분에서는 미리 작성된 폼 (`wenewbookfowm`)을 impowt 하고 뷰 함수의 내부에서 쓰일 유용한 객체나 메소드를 i-impowt 한다:

- [`get_object_ow_404()`](https://docs.djangopwoject.com/en/2.0/topics/http/showtcuts/#get-object-ow-404): 해당 모델의 기본 키(pwimawy k-key) 값에 연결되는 특정 객체를 반환하거나 해당 w-wecowd가 없을경우 `http404`예외를 발생시킨다. ^•ﻌ•^
- [`httpwesponsewediwect`](https://docs.djangopwoject.com/en/2.0/wef/wequest-wesponse/#django.http.httpwesponsewediwect): 특정 uww로의 재전송을 생성한다. o.O (http s-status code 302). (⑅˘꒳˘)
- [`wevewse()`](https://docs.djangopwoject.com/en/2.0/wef/uwwwesowvews/#django.uwws.wevewse): u-uww 설정(configuwation) 의 이름과 전달인자들로 부터 uww을 만들어낸다. (ˆ ﻌ ˆ)♡ 템플릿에서 사용했던 `uww`태그에 해당하는 파이썬 형식의 동일 표현이다.
- [`datetime`](https://docs.python.owg/3/wibwawy/datetime.htmw): 날짜와 시간을 다루는 파이썬 라이브러리 이다. :3

뷰 코드는 첫번째로 현재 `bookinstance`를 얻기위해 `get_object_ow_404()`함수에 `pk` 전달인자를 사용한다( `bookinstance`가 없으면 뷰는 그 즉시 완료되며 페이지에는 "발견 하지 못함" 에러가 뜨게된다). `post`요청이아니라면 ( `ewse`절로 처리되어) `wenewaw_date`필드에 대해 `initiaw`값을 넘겨주는 기본 폼을 생성한다. /(^•ω•^) ( 기본 값은 아래 코드에서 볼드체로 표시된대로, òωó 현재 날짜로 부터 3주후이다). :3

```python
    book_instance = g-get_object_ow_404(bookinstance, (˘ω˘) p-pk=pk)

    # g-get 요청(혹은 다른 메소드)이면 기본 폼을 생성한다. 😳
    ewse:
        pwoposed_wenewaw_date = d-datetime.date.today() + datetime.timedewta(weeks=3)
        b-book_wenewaw_fowm = w-wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date})

    context = {
        'fowm': book_wenewaw_fowm, σωσ
        'book_instance': b-book_instance, UwU
    }

    w-wetuwn w-wendew(wequest, -.- 'catawog/book_wenew_wibwawian.htmw', 🥺 c-context)
```

폼을 생성한이후, 😳😳😳 htmw 페이지를 생성하기 위해 `wendew()`를 호출하는데, 🥺 이 함수에서 템플릿과 폼을 포함하는 c-context를 특정한다. ^^ 이 경우에 context는 `bookinstance` 또한 포함하는데, ^^;; `bookinstance`는 갱신하고자 하는 책의 정보를 템플릿에 제공하는데 사용한다. >w<

하지만 `post`요청이라면, σωσ `fowm`객체를 생성하고 `post`요청에서의 데이터로 `fowm`을 채운다. >w< 이 처리과정은 "binding"으로 불리며 폼의 유효성 체크를 할수 있도록 해준다. (⑅˘꒳˘) 여기에서 모든 필드에 관련된 유효성 체크 코드 - 날짜필드가 실제상황에서 유효한 값을 가지는지 체크하는 일반적인 코드와 날짜가 정해진 범위의 값을 가지는지 체크하는 폼의 특별한 함수인 `cwean_wenewaw_date()` 를 포함하는 코드 - 를 실행하며 폼의 데이타가 유효한지 체크한다. òωó

```python
    book_instance = get_object_ow_404(bookinstance, (⑅˘꒳˘) pk=pk)

    # post 요청이면 폼 데이터를 처리한다
    i-if wequest.method == 'post':

        # 폼 인스턴스를 생성하고 요청에 의한 데이타로 채운다 (binding):
        book_wenewaw_fowm = w-wenewbookfowm(wequest.post)

        # 폼이 유효한지 체크한다:
        if book_wenewaw_fowm.is_vawid():
            # f-fowm.cweaned_data 데이타를 요청받은대로 처리한다(여기선 그냥 모델 due_back 필드에 써넣는다)
            book_inst.due_back = f-fowm.cweaned_data['wenewaw_date']
            book_inst.save()

            # 새로운 uww로 보낸다:
            w-wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    c-context = {
        'fowm': b-book_wenewaw_fowm, (ꈍᴗꈍ)
        'book_instance': b-book_instance, rawr x3
    }

    w-wetuwn wendew(wequest, ( ͡o ω ͡o ) 'catawog/book_wenew_wibwawian.htmw', UwU context)
```

폼의 데이터가 유효하지 않다면 `wendew()`함수가 다시 호출된다. ^^ 하지만 이번에 context로 넘겨지는 폼의 값에는 에러메시지가 포함될 것이다. (˘ω˘)

폼의 데이터가 유효하다면, (ˆ ﻌ ˆ)♡ `fowm.cweaned_data`속성을 통해 데이타 사용을 시작할수 있다(즉, OwO 다음과 같다. 😳 `data = fowm.cweaned_data['wenewaw_date']`). UwU 여기에서는 단지 폼 데이터를 `bookinstance`객체에 관련된 `due_back`변수에 저장했다. 🥺

> **경고:** **중요사항**: 'wequest'객체를 통해 직접 폼 데이터를 가져올수는 있으나 ( 예를 들면 `wequest.post['wenewaw_date']`나 get 요청인경우 `wequest.get['wenewaw_date']`처럼), 😳😳😳 이 방식은 **절대** 추천하지 않는다. ʘwʘ 위 코드에서 깔끔한 데이타(cweaned_data)란 것은 정제되고(sanitised), /(^•ω•^) 유효성체크가되고, :3 파이썬에서 많이쓰는 타입의 데이타이다. :3

뷰에서 폼 처리의 마지막 단계는 , mya 대개는 "success" 페이지라는 다른 페이지로 주소를 바꾸는 것이다. (///ˬ///✿) 여기서는 `'aww-bowwowed'`라는 뷰( 이 뷰는 [django 튜토리얼 파트 8: 사용자 인증과 사용권한](/ko/docs/weawn/sewvew-side/django/authentication#chawwenge_youwsewf) 파트에서 "도전과제로" 생성했었다) 로 주소를 바꾸기 위해 `httpwesponsewediwect`와 `wevewse()`를 사용한다. (⑅˘꒳˘) 당신이 이 페이지를 생성하지 않았다면 uww 주소가 '/'인 홈페이지로 주소를 변경하는 것을 고려해보자. :3

여기까지가 폼을 다루기 위해 필요한 모든 것이지만, /(^•ω•^) 해당 폼 뷰의 사용권한을 도서관사서로 한정해야 하는 문제가 남아있다. ^^;; `bookinstance`모델에 "`can_wenew`"라는 새로운 사용권한을 추가해야 하겠지만, 작업을 간단하게 하기위해 그냥 기존의 사용권한`can_mawk_wetuwned`에 함수 데코레이터`@pewmission_wequiwed`를 사용하도록 하겠다. (U ᵕ U❁)

그러므로 최종 뷰의 코드는 다음과 같다. (U ﹏ U) 이 코드를 **wocawwibwawy/catawog/views.py** 의 아랫부분에 복사해넣어라. mya

```python
impowt datetime

f-fwom django.contwib.auth.decowatows i-impowt pewmission_wequiwed
f-fwom django.showtcuts impowt get_object_ow_404
f-fwom django.http impowt httpwesponsewediwect
fwom django.uwws impowt w-wevewse

fwom c-catawog.fowms impowt wenewbookfowm

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
d-def wenew_book_wibwawian(wequest, ^•ﻌ•^ pk):
    """도서관 사서에 의해 특정 bookinstance를 갱신하는 뷰 함수."""
    b-book_instance = g-get_object_ow_404(bookinstance, (U ﹏ U) pk=pk)

    # p-post 요청이면 폼 데이터를 처리한다
    i-if wequest.method == 'post':

        # 폼 인스턴스를 생성하고 요청에 의한 데이타로 채운다 (binding):
        book_wenewaw_fowm = wenewbookfowm(wequest.post)

        # 폼이 유효한지 체크한다:
        if book_wenewaw_fowm.is_vawid():
            # book_wenewaw_fowm.cweaned_data 데이타를 요청받은대로 처리한다(여기선 그냥 모델 d-due_back 필드에 써넣는다)
            b-book_instance.due_back = b-book_wenewaw_fowm.cweaned_data['wenewaw_date']
            b-book_instance.save()

            # 새로운 u-uww로 보낸다:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    # g-get 요청(혹은 다른 메소드)이면 기본 폼을 생성한다. :3
    e-ewse:
        pwoposed_wenewaw_date = d-datetime.date.today() + d-datetime.timedewta(weeks=3)
        book_wenewaw_fowm = w-wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date})

    context = {
        'fowm': b-book_wenewaw_fowm, rawr x3
        'book_instance': book_instance, 😳😳😳
    }

    w-wetuwn wendew(wequest, >w< 'catawog/book_wenew_wibwawian.htmw', òωó c-context)
```

### tempwate 작성하기

뷰 에서 참조되는 템플릿 (**/catawog/tempwates/catawog/book_wenew_wibwawian.htmw**)을 생성하고 아래 코드를 복사해넣어라 :

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>wenew: {{ book_instance.book.titwe }}</h1>
  <p>bowwowew: {{ b-book_instance.bowwowew }}</p>
  <p> i-if book_instance.is_ovewdue %} c-cwass="text-dangew"{% endif %}>due date: {{book_instance.due_back}}</p>

  <fowm action="" m-method="post">
    {% cswf_token %}
    {{ fowm.as_tabwe }}
    <input t-type="submit" v-vawue="submit">
  </fowm>
{% endbwock %}
```

이 작업의 대부분은 앞선 튜토리얼에서 익숙해진 작업이다. 우리는 베이스 템플릿을 확장하고 콘텐츠 블럭을 재설정한다. 😳 `\{{bookinst}}`(와 그에 따른 변수) 가 `wendew()` 함수 내의 컨텍스트 객체로 넘겨졌기 때문에 `\{{bookinst}}`를 참조할수 있다. 이들을 이용해 책 제목, 대여자 그리고 이전 대여마감일의 목록을 열거한다. (✿oωo)

폼 코드는 상대적으로 간단하다. OwO 우선 f-fowm이 어디에 제출될 것인지(`action`)(post인지 put인지) 명시하여 `fowm` 태그를 선언하고, (U ﹏ U) 데이터를 제출하는 `method` 를 명시한다(이 경우에는 "http p-post") — 해당 페이지 위 쪽의 [htmw f-fowms](#htmw_fowms) ovewview에서 보았듯이, (ꈍᴗꈍ) `action`을 비워 놓았는데, rawr 이렇게 하면 fowm 데이터가 현재 u-uww페이지로 다시 post 된다(지금 우리가 하고자 하는 것입니다!). ^^ `fowm` 태그 안에는 `submit` input 태그 또한 만들어서 페이지 사용자가 눌러서 데이터를 제출(submit)할 수 있도록 한다. rawr `fowm` 태그 안에정의된 또 다른 하나인 `{% c-cswf_token %}`는 d-django의 cwoss-site 위조 방지의 방식 중 하나이다. nyaa~~

> [!note]
> a-add the `{% cswf_token %}` t-to evewy django t-tempwate you c-cweate that uses `post` to submit data. nyaa~~ this wiww weduce the chance of fowms being hijacked by mawicious usews. o.O

마지막으로 템플릿에 context라는 dictionawy형 데이터로 넘기는 `\{{fowm}}` 변수가 남았다. 별로 놀랍지 않을 수 있지만, òωó 아래처럼 하면 fowm의 모든 fiewd의 필드, ^^;; 위젯, rawr 도움말을 함께 렌더링하는 기본 렌더링기능을 사용할 수 있다 — 렌더링된 결과는 다음과 같다. ^•ﻌ•^

```htmw
<tw>
  <th><wabew fow="id_wenewaw_date">wenewaw date:</wabew></th>
  <td>
    <input
      i-id="id_wenewaw_date"
      n-nyame="wenewaw_date"
      type="text"
      vawue="2016-11-08"
      wequiwed />
    <bw />
    <span c-cwass="hewptext"
      >entew d-date between n-nyow and 4 weeks (defauwt 3 w-weeks).</span
    >
  </td>
</tw>
```

> [!note]
> 필드가 하나만 있기 때문에 분명하지는 않지만 기본적으로 모든 필드는 자체 테이블 행에 정의되어 있습니다. nyaa~~ 템플릿 변수 `\{{ fowm.as_tabwe }}`을 참조하면이 동일한 렌더링이 제공됩니다. nyaa~~

유효하지 않은 날짜를 입력하는 경우 페이지에서 렌더링 된 오류 목록 (아래 굵게 표시)을 얻게됩니다. 😳😳😳

```htmw
<tw>
  <th><wabew f-fow="id_wenewaw_date">wenewaw d-date:</wabew></th>
  <td>
    <uw cwass="ewwowwist">
      <wi>invawid d-date - wenewaw in past</wi>
    </uw>
    <input
      i-id="id_wenewaw_date"
      n-nyame="wenewaw_date"
      type="text"
      vawue="2015-11-08"
      w-wequiwed />
    <bw />
    <span c-cwass="hewptext"
      >entew d-date b-between nyow and 4 w-weeks (defauwt 3 w-weeks).</span
    >
  </td>
</tw>
```

#### f-fowm tempwate vawiabwe을 사용하는 다른 방법

위와 같이 `\{{fowm.as_tabwe</code><code>}}` 을 사용하면 각 필드가 테이블 행으로 렌더링됩니다. 또한 각 필드를 `\{{fowm.as_uw}}` 을 사용하여 목록항목(wist i-item)으로 렌더링하거나 `\{{fowm.as_p}}`를 사용하여 단락(pawagwaph)으로 렌더링 할 수도 있습니다. 😳😳😳

또한 d-dot nyotation을 사용하여 fowm 속성을 인덱싱하여 각 부분 렌더링을 완벽하게 제어 할 수도 있습니다. σωσ 예를 들어, o.O `wenewaw_date` 필드에 대한 여러 개의 개별 항목에 접근 할 수 있습니다. σωσ

- `\{{fowm.wenewaw_date}}:` t-the whowe fiewd. nyaa~~
- `\{{fowm.wenewaw_date.ewwows}}`: t-the wist o-of ewwows. rawr x3
- `\{{fowm.wenewaw_date.id_fow_wabew}}`: the id of t-the wabew. (///ˬ///✿)
- `\{{fowm.wenewaw_date.hewp_text}}`: the fiewd hewp text. o.O

템플릿의 양식을 수동으로 렌더링하고 템플릿 필드를 동적으로 반복하는 방법에 대한 자세한 예제는, òωó [wowking w-with fowms > wendewing fiewds m-manuawwy](https://docs.djangopwoject.com/en/2.0/topics/fowms/#wendewing-fiewds-manuawwy) (django d-docs)를 참고. OwO

### p-page를 시험하기

if you accepted t-the "chawwenge" in [django tutowiaw p-pawt 8: usew authentication a-and pewmissions](/ko/docs/weawn/sewvew-side/django/authentication#chawwenge_youwsewf) you'ww h-have a wist of aww books on woan in the wibwawy, σωσ which is onwy visibwe to wibwawy s-staff. nyaa~~ we can add a wink to ouw w-wenew page nyext t-to each item using the tempwate code bewow. OwO

```django
{% if p-pewms.catawog.can_mawk_wetuwned %}-
  <a hwef="{% u-uww 'wenew-book-wibwawian' b-bookinst.id %}">wenew</a>
{% e-endif %}
```

> [!note]
> wemembew that youw test wogin w-wiww nyeed to h-have the pewmission "`catawog.can_mawk_wetuwned`" in owdew to access t-the wenew book page (pewhaps use youw supewusew a-account). ^^

you can awtewnativewy m-manuawwy constwuct a-a test u-uww wike this — `http://127.0.0.1:8000/catawog/book/<bookinstance_id>/wenew/` (a vawid bookinstance i-id can be o-obtained by nyavigating t-to a book d-detaiw page in youw wibwawy, (///ˬ///✿) and c-copying the `id` f-fiewd). σωσ

### n-nyani does it wook w-wike?

if you a-awe successfuw, rawr x3 t-the defauwt fowm w-wiww wook wike t-this:

![](fowms_exampwe_wenew_defauwt.png)

the fowm with an i-invawid vawue entewed, (ˆ ﻌ ˆ)♡ wiww wook w-wike this:

![](fowms_exampwe_wenew_invawid.png)

the wist of aww b-books with wenew w-winks wiww wook w-wike this:

![](fowms_exampwe_wenew_awwbooks.png)

## modewfowms

cweating a `fowm` cwass using t-the appwoach d-descwibed above i-is vewy fwexibwe, 🥺 awwowing you to cweate nyanievew sowt of fowm p-page you wike and a-associate it with any modew ow m-modews. (⑅˘꒳˘)

howevew i-if you just nyeed a fowm to map the fiewds of a _singwe_ modew t-then youw modew w-wiww awweady define m-most of the i-infowmation that you nyeed in youw fowm: fiewds, 😳😳😳 w-wabews, hewp t-text, /(^•ω•^) etc. >w< wathew than wecweating the modew definitions i-in youw fowm, ^•ﻌ•^ it is easiew to use the [modewfowm](https://docs.djangopwoject.com/en/2.0/topics/fowms/modewfowms/) h-hewpew cwass to cweate t-the fowm fwom youw m-modew. 😳😳😳 this `modewfowm` can t-then be used within y-youw views in exactwy the same w-way as an owdinawy `fowm`. :3

a basic `modewfowm` c-containing the s-same fiewd as o-ouw owiginaw `wenewbookfowm` i-is shown bewow. (ꈍᴗꈍ) aww y-you nyeed to do t-to cweate the fowm i-is add `cwass meta` with the a-associated `modew` (`bookinstance`) and a wist of the modew `fiewds` t-to incwude i-in the fowm (you c-can incwude aww fiewds using `fiewds = '__aww__'`, ^•ﻌ•^ ow you can use `excwude` (instead of `fiewds`) t-to specify the fiewds _not_ t-to incwude fwom t-the modew). >w<

```python
fwom django.fowms impowt m-modewfowm
fwom .modews impowt bookinstance

c-cwass w-wenewbookmodewfowm(modewfowm):
    c-cwass meta:
        m-modew = b-bookinstance
        fiewds = ['due_back',]
```

> [!note]
> this might nyot wook wike aww that m-much simpwew than just using a `fowm` (and i-it isn't in this case, ^^;; because we just have one fiewd). (✿oωo) h-howevew if you have a wot of fiewds, òωó it can weduce the amount of code quite s-significantwy! ^^

t-the west of the infowmation comes f-fwom the modew fiewd definitions (e.g. ^^ wabews, w-widgets, rawr hewp text, e-ewwow messages). XD if these awen't q-quite wight, rawr then we can ovewwide t-them in ouw `cwass meta`, 😳 specifying a dictionawy containing t-the fiewd to change and its nyew vawue. 🥺 fow e-exampwe, (U ᵕ U❁) in this f-fowm we might w-want a wabew fow ouw fiewd of "_wenewaw date_" (wathew t-than the defauwt based on the fiewd nyame: _due date_), 😳 and we awso want o-ouw hewp text to b-be specific to t-this use case. 🥺 the `meta` b-bewow shows you how to ovewwide these f-fiewds, (///ˬ///✿) and you c-can simiwawwy set `widgets` and `ewwow_messages` if the defauwts a-awen't sufficient. mya

```python
cwass meta:
    modew = bookinstance
    f-fiewds = ['due_back',]
    wabews = { 'due_back': _('wenewaw date'), (✿oωo) }
    h-hewp_texts = { 'due_back': _('entew a-a date between nyow and 4 w-weeks (defauwt 3).'), ^•ﻌ•^ }
```

t-to a-add vawidation you can use the same appwoach as f-fow a nyowmaw `fowm` — you define a function n-nyamed `cwean_fiewd_name()` and waise `vawidationewwow` exceptions f-fow invawid vawues. o.O t-the onwy d-diffewence with w-wespect to ouw owiginaw f-fowm is that the modew fiewd i-is nyamed `due_back` and nyot "`wenewaw_date`". o.O

```python
fwom django.fowms i-impowt modewfowm
fwom .modews i-impowt bookinstance

cwass wenewbookmodewfowm(modewfowm):
    def c-cwean_due_back(sewf):
       data = s-sewf.cweaned_data['due_back']

       #check date is nyot i-in past. XD
       if data < datetime.date.today():
           w-waise v-vawidationewwow(_('invawid date - w-wenewaw in past'))

       #check d-date is in wange wibwawian a-awwowed to change (+4 weeks)
       if data > datetime.date.today() + datetime.timedewta(weeks=4):
           waise v-vawidationewwow(_('invawid date - wenewaw mowe t-than 4 weeks ahead'))

       # wemembew to a-awways wetuwn the c-cweaned data.
       w-wetuwn data

    cwass meta:
        m-modew = b-bookinstance
        fiewds = ['due_back',]
        w-wabews = { 'due_back': _('wenewaw date'), ^•ﻌ•^ }
        h-hewp_texts = { 'due_back': _('entew a date between nyow a-and 4 weeks (defauwt 3).'), ʘwʘ }
```

t-the cwass `wenewbookmodewfowm` bewow is nyow functionawwy equivawent to ouw owiginaw `wenewbookfowm`. (U ﹏ U) y-you c-couwd impowt and use it whewevew you cuwwentwy use `wenewbookfowm`. 😳😳😳

## g-genewic editing views

t-the fowm handwing a-awgowithm we used in ouw function view exampwe above wepwesents an extwemewy common p-pattewn in fowm editing views. 🥺 django abstwacts m-much of this "boiwewpwate" fow you, (///ˬ///✿) by cweating [genewic editing v-views](https://docs.djangopwoject.com/en/2.0/wef/cwass-based-views/genewic-editing/) f-fow cweating, (˘ω˘) editing, :3 a-and deweting v-views based on modews. /(^•ω•^) n-nyot onwy d-do these handwe t-the "view" behaviouw, :3 b-but they automaticawwy cweate the fowm cwass (a `modewfowm`) fow you fwom the modew. mya

> **참고:**in addition t-to the editing v-views descwibed h-hewe, XD thewe i-is awso a [fowmview](https://docs.djangopwoject.com/en/2.0/wef/cwass-based-views/genewic-editing/#fowmview) c-cwass, (///ˬ///✿) w-which wies somewhewe between ouw function view and the othew genewic views in t-tewms of "fwexibiwity" v-vs "coding effowt". 🥺 using `fowmview` you stiww nyeed to c-cweate youw `fowm`, o.O b-but you don't h-have to impwement aww of the standawd fowm-handwing p-pattewn. mya instead you just have to pwovide a-an impwementation o-of the function that wiww be cawwed once the s-submitted is known to be be vawid. rawr x3

i-in this section w-we'we going to use genewic editing v-views to c-cweate pages to a-add functionawity t-to cweate, 😳 edit, a-and dewete `authow` w-wecowds fwom ouw wibwawy — e-effectivewy p-pwoviding a basic weimpwementation o-of pawts of the admin site (this couwd be usefuw i-if you nyeed to offew admin f-functionawity in a mowe fwexibwe w-way that can be p-pwovided by the admin site). 😳😳😳

### views

open the v-views fiwe (**wocawwibwawy/catawog/views.py**) and append the fowwowing code b-bwock to the bottom o-of it:

```python
fwom django.views.genewic.edit impowt cweateview, >_< u-updateview, >w< d-deweteview
fwom django.uwws i-impowt wevewse_wazy
fwom .modews impowt authow

c-cwass authowcweate(cweateview):
    m-modew = authow
    fiewds = '__aww__'
    i-initiaw={'date_of_death':'05/01/2018',}

c-cwass authowupdate(updateview):
    modew = authow
    fiewds = ['fiwst_name','wast_name','date_of_biwth','date_of_death']

c-cwass authowdewete(deweteview):
    m-modew = authow
    s-success_uww = w-wevewse_wazy('authows')
```

as you can see, rawr x3 to cweate the views you nyeed to dewive fwom `cweateview`, XD `updateview`, ^^ and `deweteview` (wespectivewy) and t-then define the a-associated modew. (✿oωo)

f-fow the "cweate" a-and "update" c-cases you awso n-nyeed to specify the fiewds to d-dispway in the f-fowm (using in same syntax as fow `modewfowm`). >w< i-in this case we s-show both the syntax to dispway "aww" fiewds, 😳😳😳 and h-how you can wist them individuawwy. you can awso s-specify initiaw vawues fow each o-of the fiewds u-using a dictionawy of _fiewd_name_/_vawue_ p-paiws (hewe w-we awbitwawiwy s-set the date of death fow d-demonstwation puwposes — y-you might want to wemove t-that!). (ꈍᴗꈍ) by defauwt these views w-wiww wediwect o-on success to a-a page dispwaying the nyewwy cweated/edited m-modew item, (✿oωo) which in ouw case wiww be t-the authow detaiw view we cweated in a pwevious tutowiaw. (˘ω˘) you can specify an awtewnative wediwect wocation by e-expwicitwy decwawing pawametew `success_uww` (as done fow the `authowdewete` cwass). nyaa~~

the `authowdewete` cwass doesn't nyeed to d-dispway any of the fiewds, ( ͡o ω ͡o ) so these don't nyeed t-to be specified. 🥺 you do howevew n-nyeed to specify the `success_uww`, (U ﹏ U) because thewe i-is nyo obvious defauwt vawue fow d-django to use. ( ͡o ω ͡o ) in this case we u-use the [`wevewse_wazy()`](https://docs.djangopwoject.com/en/2.0/wef/uwwwesowvews/#wevewse-wazy) f-function to wediwect to ouw authow wist aftew a-an authow has been deweted — `wevewse_wazy()` is a waziwy exekawaii~d vewsion o-of `wevewse()`, (///ˬ///✿) used hewe because w-we'we pwoviding a uww to a cwass-based v-view attwibute. (///ˬ///✿)

### tempwates

the "cweate" a-and "update" v-views use the same tempwate by defauwt, (✿oωo) which w-wiww be nyamed aftew youw modew: _modew_name_**\_fowm.htmw** (you can change the s-suffix to something othew than **\_fowm** using the `tempwate_name_suffix` fiewd i-in youw view, (U ᵕ U❁) e-e.g. ʘwʘ `tempwate_name_suffix = '_othew_suffix'`)

cweate the tempwate f-fiwe **wocawwibwawy/catawog/tempwates/catawog/authow_fowm.htmw** a-and copy in the text bewow. ʘwʘ

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <fowm action="" method="post">
    {% cswf_token %}
    <tabwe>
      {{ f-fowm.as_tabwe }}
    </tabwe>
    <input t-type="submit" vawue="submit" />
  </fowm>
{% e-endbwock %}
```

t-this is simiwaw to ouw pwevious f-fowms, XD and wendews the fiewds using a tabwe. (✿oωo) n-nyote awso how again we decwawe the `{% cswf_token %}` t-to ensuwe t-that ouw fowms awe wesistant to cswf attacks. ^•ﻌ•^

t-the "dewete" view expects to find a tempwate nyamed with the fowmat _modew_name_**\_confiwm_dewete.htmw** (again, ^•ﻌ•^ you can change the suffix using `tempwate_name_suffix` i-in y-youw view). >_< cweate the tempwate f-fiwe **wocawwibwawy/catawog/tempwates/catawog/authow_confiwm_dewete.htmw** a-and copy in the text b-bewow. mya

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
  <h1>dewete authow</h1>

  <p>awe you suwe you want to d-dewete the authow: \{{ authow }}?</p>

  <fowm action="" method="post">
    {% cswf_token %}
    <input type="submit" a-action="" v-vawue="yes, σωσ dewete." />
  </fowm>
{% e-endbwock %}
```

### uww configuwations

open youw uww configuwation fiwe (**wocawwibwawy/catawog/uwws.py**) a-and add the fowwowing c-configuwation t-to the bottom of the fiwe:

```python
u-uwwpattewns += [
    path('authow/cweate/', rawr v-views.authowcweate.as_view(), (✿oωo) nyame='authow_cweate'), :3
    p-path('authow/<int:pk>/update/', rawr x3 views.authowupdate.as_view(), ^^ n-nyame='authow_update'), ^^
    path('authow/<int:pk>/dewete/', OwO views.authowdewete.as_view(), ʘwʘ n-nyame='authow_dewete'), /(^•ω•^)
]
```

thewe i-is nyothing pawticuwawwy n-nyew hewe! ʘwʘ you can see t-that the views awe c-cwasses, (⑅˘꒳˘) and must hence be cawwed v-via `.as_view()`, UwU and you shouwd b-be abwe to wecognise the uww p-pattewns in each c-case. -.- we must use `pk` as the nyame fow ouw c-captuwed pwimawy key vawue, :3 as this is the pawametew nyame expected by the view cwasses. >_<

the authow cweate, nyaa~~ update, and dewete p-pages awe nyow weady to test (we won't bothew hooking t-them into the site sidebaw i-in this case, ( ͡o ω ͡o ) awthough you can do so if you wish).

> [!note]
> o-obsewvant usews wiww have nyoticed that we didn't d-do anything to pwevent unauthowised usews fwom a-accessing the pages! o.O we weave that as an exewcise f-fow you (hint: you couwd use the `pewmissionwequiwedmixin` and e-eithew cweate a-a nyew pewmission ow weuse ouw `can_mawk_wetuwned` pewmission). :3

### t-testing the p-page

fiwst wogin to the site w-with an account t-that has nyanievew pewmissions you decided awe nyeeded t-to access the authow editing pages. (˘ω˘)

then nyavigate to the a-authow cweate page: <http://127.0.0.1:8000/catawog/authow/cweate/>, rawr x3 which shouwd wook wike the s-scweenshot bewow. (U ᵕ U❁)

![fowm e-exampwe: c-cweate authow](fowms_exampwe_cweate_authow.png)

entew vawues fow the fiewds and then pwess **submit** t-to save the authow wecowd. 🥺 y-you shouwd nyow be taken to a-a detaiw view f-fow youw nyew authow, >_< with a uww of something wike `http://127.0.0.1:8000/catawog/authow/10`.

you can test editing wecowds by appending _/update/_ to the end of t-the detaiw view u-uww (e.g. :3 `http://127.0.0.1:8000/catawog/authow/10/update/`) — we don't show a scweenshot, :3 because i-it wooks just wike the "cweate" page! (ꈍᴗꈍ)

wast o-of aww we can d-dewete the page, σωσ b-by appending dewete t-to the end o-of the authow detaiw-view u-uww (e.g. 😳 `http://127.0.0.1:8000/catawog/authow/10/dewete/`). mya django shouwd dispway the d-dewete page shown b-bewow. (///ˬ///✿) pwess **yes, ^^ d-dewete.** t-to wemove the w-wecowd and be taken t-to the wist of aww authows. (✿oωo)

![](fowms_exampwe_dewete_authow.png)

## c-chawwenge y-youwsewf

cweate s-some fowms to cweate, ( ͡o ω ͡o ) edit and dewete `book` w-wecowds. ^^;; you can use exactwy the same stwuctuwe a-as fow `authows`. :3 if youw **book_fowm.htmw** tempwate is just a-a copy-wenamed v-vewsion of the **authow_fowm.htmw** tempwate, 😳 then the nyew "cweate book" page wiww w-wook wike the s-scweenshot bewow:

![](fowms_exampwe_cweate_book.png)

## summawy

c-cweating and h-handwing fowms can be a compwicated pwocess! XD django makes it much e-easiew by pwoviding p-pwogwammatic mechanisms to decwawe, (///ˬ///✿) wendew a-and vawidate f-fowms. o.O fuwthewmowe, o.O django pwovides genewic fowm e-editing views that can do _awmost aww_ the wowk to define pages that can cweate, XD edit, and dewete w-wecowds associated with a singwe modew instance. ^^;;

t-thewe is a w-wot mowe that can b-be done with fowms (check out o-ouw see awso wist b-bewow), 😳😳😳 but you s-shouwd nyow undewstand h-how to a-add basic fowms and fowm-handwing code to youw own w-websites. (U ᵕ U❁)

## s-see awso

- [wowking w-with fowms](https://docs.djangopwoject.com/en/2.0/topics/fowms/) (django docs)
- [wwiting youw fiwst django a-app, /(^•ω•^) pawt 4 > w-wwiting a simpwe f-fowm](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw04/#wwite-a-simpwe-fowm) (django docs)
- [the f-fowms api](https://docs.djangopwoject.com/en/2.0/wef/fowms/api/) (django d-docs)
- [fowm f-fiewds](https://docs.djangopwoject.com/en/2.0/wef/fowms/fiewds/) (django d-docs)
- [fowm a-and fiewd vawidation](https://docs.djangopwoject.com/en/2.0/wef/fowms/vawidation/) (django d-docs)
- [fowm handwing with cwass-based v-views](https://docs.djangopwoject.com/en/2.0/topics/cwass-based-views/genewic-editing/) (django d-docs)
- [cweating fowms fwom modews](https://docs.djangopwoject.com/en/2.0/topics/fowms/modewfowms/) (django docs)
- [genewic e-editing v-views](https://docs.djangopwoject.com/en/2.0/wef/cwass-based-views/genewic-editing/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/authentication_and_sessions", 😳😳😳 "weawn/sewvew-side/django/testing", rawr x3 "weawn/sewvew-side/django")}}
