---
title: Server-side web frameworks
slug: Learn/Server-side/First_steps/Web_frameworks
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}

이전 기사에서는 웹 클라이언트와 서버 간의 통신 모습, HTTP 요청 및 응답의 성격, 서버 측 웹 애플리케이션이 웹 브라우저의 요청에 응답하기 위해 수행해야하는 작업에 대해 설명했습니다. 이러한 지식을 바탕으로, 지금 시간에는 웹 프레임 워크가 어떻게 그러한 작업을 간단히 만드는지 탐색하고, 당신의 첫 서버측 애플리케이션을 위한 프레임 워크를 어떻게 선택하는지 의견을 드리겠습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        기본적인 컴퓨터 활용법. HTTP 요청을 서버측 코드가 어떻게 다루고
        응답하는지에 대한 높은 수준의 이해 (<a
          href="https://developer.mozilla.org/ko/docs/Learn/Server-side/First_steps/Client-Server_overview"
          >Client-Server overview</a
        >를 참고 하십시오).
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        웹 프레임 워크가 어떻게 서버측 코드를 개발/유지하기 간단하게 만들 수
        있는지 이해하고 , 독자들이 그들의 개발에 어떤 프레임워크를 선택 할지에
        대해 생각해보게 합니다.
      </td>
    </tr>
  </tbody>
</table>

이 섹션에서 실제 웹 프레임 워크에서 가져온 코드 조각을 설명할 것 입니다. 지금 **전부** 이해가 가지 않는것에 대해 당황하지 마세요; 우리는 프레임 워크 특정 모듈의 코드를 통해 작업 할 것입니다.

## 개요

서버측 웹 프레임워크("웹 어플리케이션 프레임워크"라고 알려진)는 작성하기 쉽고, 웹 어플리케이션을 유지및 보수하기 쉽게 만드는 소프트웨어 프레임 워크입니다. 적절한 URL핸들러로 라우팅, 데이테베이스와 상호작용, 유저 인증과 세션 지원, 출력 형식(예: HTML, JSON, XML), 웹 공격에 대처하기 위한 보안 강화 같은 일반적인 웹 개발 작업을 단순화하는 도구와 라이브러리를 제공합니다.

다음 섹션은 어떻게 웹 프레임워크가 웹 애플리케이션 개발을 쉽게 하는지 더 상세히 살펴 보겠습니다. 우리는 당신이 사용할 웹 프레임워크를 선택하는 기준을 설명하고 몇 가지 옵션을 나열하겠습니다.

## 웹 프레임워크는 무엇을 지원하는가?

웹 프레임워크는 일반적인 웹 개발 작업을 단순화 하는 도구와 라이브러리를 제공합니다. 당신은 서버측 웹 프레임 워크를 사용하지 않을 수 있지만 이는 권고 되지 않습니다 — 서버측 웹 프레임워크를 사용하면 당신의 삶이 더 편해질 것입니다.

이 섹션에서는 웹 프레임워크가 제공하는 몇몇 기능에 대해 논의 하겠습니다(모든 프레임 워크가 그 기능을 제공하지는 않습니다!)

### Work directly with HTTP requests and responses

우리가 마지막 기사에서 봤듯이 웹 서버와 브라우저는 HTTP protocol을 통해 통신합니다 — 서버는 브라우저에서 오는 HTTP요청을 기다리고, HTTP응답에 정보를 반환 합니다. 웹 프레임워크는 이러한 요청과 응답을 할 서버측 코드를 만드는데 작성할 문법을 단순화 합니다. 이것은 당신의 일과 상호작용을 쉽게 하고, 저수준 네트워킹 프리미티브보다 높은 수준의 코드를 이용한다는 것을 의미합니다.

Django (Python) 웹 프레임워크가 어떻게 작동 하는지의 대한 예가 아래에 나와 있습니다. 모든 "view"함수는(요청 핸들러) 요청 정보가 포함된`HttpRequest`객체를 받고, 형식화된 출력(이번 케이스에선 string)이 있는`HttpResponse` 객체를 반환합니다.

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Route requests to the appropriate handler

대부분의 사이트는 여러개의 다른 리소스를 특정된 URL을 통해 접근 할 수 있도록 제공합니다. 통합된 함수로 모든것을 처리하는건 유지하기가 매우 힘듭니다, 그래서 웹 프레임워크는 특별한 처리 함수로 URL패턴을 매핑하는 기능을 제공합니다. 이러한 접근 방법은 유지 보수 기간에 이점이 있습니다. 왜냐하면 기본 코드를 변경하지 않고도 특정 기능을 제공하는 데 사용되는 URL을 변경할 수 있기 때문입니다.

각각의 프레임 워크들은 다른 매핑 메커니즘을 사용합니다. 예를 들면 Flask (Python) 웹 프레임 워크는데코레이터를 사용하여 view함수에 경로를 추가합니다.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Django는 개발자가 URL 패턴과 뷰 함수 사이에 URL 매핑 목록을 정의 할 것을 기대합니다.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/myteamname/5/
    url(r'^(?P<team_name>\w.+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Make it easy to access data in the request

데이터는 다양한 방법으로 HTTP응답에 인코딩 될 수 있습니다. 서버에서 파일이나 데이터를 얻기 위한 HTTP GET 요청은 URL인자나 URL구조를 요구한 데이터를 인코딩 할 수 있습니다. 서버에 있는 리소스를 업데이트를 요청하는 HTTP `POST`는 요청 본문에 "POST data"로 업데이트 정보를 대신 포함합니다. 또한 HTTP 요청은 클라이언트 측 쿠키에서 현재 세션 또는 사용자에 관한 정보를 포함 할 수있습니다.

웹 프레임 워크는 정보에 액세스하기위한 프로그래밍 언어에 적합한 메커니즘을 제공합니다. 예를 들어 Django가 모든 뷰 함수에 전달하는 HttpRequest 객체는 대상 URL, 요청 유형 (예 : HTTP GET), GET 또는 POST 매개 변수, 쿠키 및 세션 데이터 등에 접근 하기 위한 메소드 및 속성을 포함합니다. Django는 URL 매퍼에 "캡처 패턴"을 정의한 URL 구조로 인코딩 된 정보를 전달할 수도 있습니다 (위 섹션의 마지막 코드 단편 참조).

### Abstract and simplify database access

웹 사이트는 사용자와 사용자에 대한 정보 공유를 위한 데이터를 저장 하기 위해서 데이터베이스를 사용합니다. 웹 프레임 워크는 종종 데이터베이스 읽기, 쓰기, 쿼리, 삭제 조작을 추상화 할 수 있는 데이터베이스 계층을 제공 합니다. 이러한 추상 계층을 객체 관계형 매퍼(ORM)라고 합니다.

ORM을 사용 하는 것은 2가지 장점이 있습니다:

- 사용하던 코드를 수정하지 않고 기본 데이터베이스를 바꿀 수 있습니다. 이것을 통해 개발자가 사용법에 따른 데이터베이스의 특성을 최적화 할 수 있습니다.
- 기본적인 데이터의 확인은 프레임워크 안에서 구현 될 수 있습니다. 이를 통해 올바른 타입의 데이터베이스 필드에 데이터를 저장하는지, 올바른 타입인지(예: 이메일 주소), 악의적인 방식 (크래커는 특정 코드 패턴을 사용하여 데이터베이스 레코드를 지우는 것과 같은 나쁜 행동을 할 수 있습니다)인지 쉽고 안전하게 확인 할 수 있습니다.

예를들어 Django 웹 프레임워크는 ORM을 제공하고 레코드 구조 모델로 정의하는데 사용한 객체를 참조합니다. 모델은 저장 될 필드 유형을 지정하며, 저장 될 수있는 정보에 대한 필드 레벨 검증을 제공 할 수 있습니다(예 : 이메일 입력란은 유효한 이메일 주소 만 허용). 또한 필드 정의는 최대 크기, 기본 값, 선택 목록 옵션, 문서를 위한 도움말, 양식 레이블 텍스트 등을 지정할 수도 있습니다. 모델은 코드와 별도로 변경 될 수있는 구성 설정이므로 기본 데이터베이스에 대한 정보는 명시하지 않습니다.

첫번째 코드 스니펫은 아래에 보이는 매우 간단한 `Django` 모델인 `Team`객체 입니다. 이 객체는 팀 이름과 팀의 레벨을 문자 필드로 저장하고 각각의 레코드마다 최대 한도의 문자 길이를 저장 합니다. `team_level`은 선택 필드이므로 우리는 디폴트 값과 함께 표시할 선택 항목과 데이터를 저장하는 것 사이를 매핑하는 것을 제공합니다.

```python
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11, 'Under 11s'),
        ...  #list our other teams
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

Django 모델은 데이터베이스 검색을 위한 간단한 쿼리를 제공 합니다. 다른 기준을 사용하여 한 번에 여러 필드와 일치시킬 수 있습니다. (예 : 대소 문자를 구분하지 않음,보다 큼, 등), 그리고 복잡한 명령문을 지원 할 수 있습니다 (예를 들어 당신이 "Fr"로 시작하거나 "al"로 끝나는 특별한 U11팀을 찾을 수 있습니다).

두번째 코드 스니펫은 U09의 모든 팀을 보여주는 view function(요청 핸들러)을 보겠습니다. 이 경우 우리는 **`team_level`** 필드의 텍스트가 정확히 'U09'인 모든 레코드를 필터링하도록 지정합니다. ( 이 기준이 필드 이름과 일치 유형이 두 개의 밑줄로 구분 된 인수로 `filter()` 함수에 전달되는 방법을 아래에 기록하십시오. **`team_level__exact`** ).

```python
#best/views.py

from django.shortcuts import render
from .models import Team

def youngest(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

### Rendering data

웹 프레임워크는 종종 템플릿 시스템을 제공합니다. 이것은 페이지가 생성될 때 데이터를 추가하기 위한 자리 표시 자를 사용하여 출력 문서 구조를 지정 할 수 있습니다. 템플릿들은 보통 HTML로 만들어지지만, 다른 형식의 문서로도 작성될 수 있습니다.

웹 프레임워크는 보통 저장된 데이터를 다른 형식으로 쉽게 생성 할 수 있는,{{glossary("JSON")}}, {{glossary("XML")}}을 포함한, 틀을 제공합니다.

예를들어, Django 템플릿 시스템은 구체화된 "double-handlebars" 구조 (예를 들어 `\{{ variable_name }}`)를 사용하도록 허용하는데, 이것은 페이지가 로딩될 때 뷰 함수의 값들로 대체될 수 있습니다. 템플릿 시스템은 또한 다양한 표현식을 지원하는데 (예를 들어 : `{% expression %}`), 템플리트가 템플리트에 전달 된 목록 값을 반복하는 것과 같은 간단한 조작을 수행 할 수 있습니다.

> [!NOTE]
> 다른 대부분의 템플릿 시스템들은 비슷한 문법을 사용합니다, 예: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript), 등등.

아래의 코드 스니펫은 그것이 어떻게 작동 하는지 보여줍니다. 이전 섹션에 사용한 "youngest team" 예제를 다시 보겠습니다, HTML 템플릿은 뷰에서 `youngest_teams`이라고 불리는 목록 변수를 전달 받습니다. HTML 골격 내에는 `youngest_teams`이 있는지 체크하는 표현식이 있고, 있다면 `for` 루프를 통해 반복문을 만드는 것을 볼 수 있습니다. 각 반복당 템플릿은 팀리스트에 있는 `team_name`을 출력해줍니다.

```django
<!-- best/templates/best/index.html -->

<!doctype html>
<html lang="en">
  <body>
    {% if youngest_teams %}
      <ul>
        {% for team in youngest_teams %}
          <li>\{\{ team.team_name \}\}</li>
        {% endfor %}
      </ul>
    {% else %}
      <p>No teams are available.</p>
    {% endif %}
  </body>
</html>
```

## 웹프레임워크를 선택하는 방법

여러분이 쓰고싶은 언어 대부분에 많은 웹 프레임워크들이 존재합니다(그중 보다 인기 있는 몇개의 프레임워크들을 다음 섹션에 나열합니다). 선택의 폭이 넓어지기 때문에 새로운 웹 애플리케이션을위한 최고의 출발점을 제공하는 프레임워크를 찾기가 어려울 수 있습니다.

여러분의 선택에 영향을 줄 수 있는 요인은 다음과 같습니다.

- **학습 노력 :** 웹 프레임워크를 배우기 위한 노력은 당신이 얼마나 프로그래밍 언어에 익숙한지, 그 언어의 API가 일관성 있는지, 그 언어의 문서의 품질이 괜찮은지, 그리고 그 언어의 커뮤니티의 크기와 활동량에 따라 다릅니다. 만약 여러분이 아무런 프로그래밍 경험이 없다면, 장고를 고려해보세요(장고는 위의 기준에 맞는 가장 배우기 쉬운 프레임 워크입니다). 만약 여러분이 개발팀의 일원이며 이미 특정 웹프레임워크와 언어에 상당한 경험이 있다면, 그것에 충실하는 것이 좋습니다.
- **생산성:** 생산성은 프레임 워크에 익숙해지면 얼마나 빨리 새 기능을 만들 수 있는지 측정하는 척도이며 코드를 작성하고 유지 관리하는 노력(이전 기능이 손상된 상태에서 새 기능을 작성할 수 없기 때문에)을 모두 포함합니다. "학습 노력"에서 다루었던 요인들과 비슷한 많은 요인들이 생산성에 영향을 미칩니다. — 예를들어 문서, 커뮤니티, 프로그래밍 경험 등. — 다른 요인들:

  - _프레임워크의 목적/출처_: 몇몇 웹 프레임워크들은 처음엔 특정 타입의 문제들을 풀기위해 만들어졌고, 여전히 비슷한 제약조건을 가진 웹앱을 만드는 데 좋습니다. 예를 들어 Django는 신문형식의 웹사이트 개발을 지원하기 위해 만들어졌기 때문에 블로그나 무언가를 출판하는 사이트들에 쓰기 좋습니다. 반대로 Flask는 모다 가벼운 무게의 프레임워크이고 임베디드 장치에서 실행되는 웹앱을 만드는데 좋습니다.
  - _의도적인 vs 의도를 갖지 않는_: 의도적인 프레임워크는 특정유형의 문제를 풀기에 가장 좋은 방법으로 추천됩니다. 의도적인 프레임워크들은 일반적인 문제들을 풀려고 할 때 생산적으로 기능하기 때문에 여러분을 옳은 방향으로 이끌어주지만 유연성이 부족하기도 합니다.
  - _배터리 포함 vs 직접 구매_: 몇몇 웹프레임워크는 개발자들이 "기본 적으로" 생각할 수 있는 모든 문제들을 해결하는 툴과 라이브러리를 포함합니다. 반면에 보다 가벼운 프레임웨크들은 웹개발자들이 직접 분리된 라이브러리들을 고르고 쓰기를 기대합니다. (Django는 전자의 예고 Flask는 아주 가벼운 프레임워크의 예입니다). 모든 것을 포함하는 프레임워크는 여러분이 필요한 모든 것을 이미 가지고 있고, 잘 병합/문서화되어있어 종종 시작하기에 더 쉽습니다. 그러나 더 작은 프레임 워크에 필요한 모든 것이 있다면 제약이 많은 환경에서 실행할 수 있으며 배우기에 더 작고 쉬울 것입니다.
  - _프레임워크는 좋은 개발 관행을 장려 할 수 있습니다:_ 예를 들어,
    [Model-View-Controller](/ko/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture) 아키텍처를 권장하는 프레임 워크는 코드를 로직 함수로 분리하여 개발자에게 기대하지 않는 코드보다 더 유지 관리가 쉬운 코드가 생성됩니다. 비슷하게도, 프레임워크의 디자인은 테스트 하기 쉽고 재사용 하기 쉬운 코드를 만드는데에 큰 영향을 줄 수 있습니다.

- **프레임워크/프로그래밍 언어의 성능:** 종종 "속도"는 선택의 중요한 한 요소가 되지 않습니다. 왜냐하면 Python과 같은 비교적 느린 런타임도 중간정도의 하드웨어에서 실행되는 중간 크기의 사이트에서 사용 하기에 "충분" 이상으로 좋기 때문입니다. 속도에 강점이 있는 언어들(예: C++ 또는 JavaScript)은 교육 비용이나 유지 비용에 의해 상쇄 될 수 있습니다.
- **캐싱 지원:** 웹 사이트가 더욱 성공적이 되면 당신은 웹 사이트에 액세스 할 때 수신하는 요청 수에 더 이상 대처할 수 없다는 것을 알게 될 것입니다. 이 시점에 캐싱 지원을 추가하는 것을 고려 할 수 있습니다. 캐싱은 웹 요청의 전체 또는 일부를 저장하여 후속 요청에서 다시 계산할 필요가 없도록하는 최적화 방법 입니다. 캐시된 요청에 대한 응답은 처음에 요청을 계산하는 것보다 훨씬 빠릅니다. 캐싱은 당신의 코드에 구현 하거나 서버에 구현 할 수 있습니다([reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)를 참조하세요). 웹 프레임 워크는 캐시 할 수있는 컨텐츠를 정의하기 위해 서로 다른 레벨의 지원을 제공합니다.
- **확장성:** 웹 사이트가 환상적인 성공을하면 캐싱의 이점을 모두 활용하고 *수직 확장(*웹 애플리케이션을 보다 강력한 하드웨어에서 실행*)*의 한계에 도달 할 수 있습니다. 이 시점에서 일부 고객은 서버와 멀리 떨어져 있기 때문에 _수평 확장_(여러 웹 서버와 데이터베이스에 사이트를 분산 시켜서 부하를 공유)하거나 "지리적으로" 확장해야 할 수도 있습니다. 선택한 웹 프레임워크는 사이트 확장을 쉽게 하는지에 대해 큰 차이를 만들 수 있습니다.
- **웹 보안:** 어떤 웹 프레임워크는 일반적인 웹 공격 처리에 대한 더 나은 지원을 제공 합니다. 장고을 예를 들자면 사용자 입력에 들어간 모든 HTML 템플릿을 삭제하여 사용자가 작성한 JavaScript를 실행하지 못하게 합니다. 다른 프레임 워크도 유사한 보호 기능을 제공하지만 기본적으로 항상 활성화되어있는 것은 아닙니다.

라이센싱, 프레임워크가 활발하게 개발 중인지 여부 등 여러 가지 가능한 요소가 있습니다.

프로그래밍을 처음 접하는 생초보라면 "학습 편의성"에 따라 프레임 워크를 선택하게 될 것입니다. 언어 자체의 "사용 편의성"외에도 고품질 문서 / 자습서 및 새로운 사용자를 돕는 활동적인 커뮤니티가 가장 소중한 리소스입니다. 우리는 [Django](https://www.djangoproject.com/) (Python) 와 [Express](http://expressjs.com/) (Node/JavaScript)를 선택하여 강의 후반에 예제를 작성했습니다. 배우기 쉽고 지원을 잘 받고 있기 때문입니다.

> **참고:** [Django](https://www.djangoproject.com/) (Python) 와 [Express](http://expressjs.com/) (Node/JavaScript)의 메인 웹사이트로 가보십시오, 그리고 문서와 커뮤니티를 확인하십시오.
>
> 1. (위 링크들의) 메인 사이트를 둘러보기
>
>    - Documentation 메뉴에 링크들(Documentation, Guide, API Reference, Getting Started등)을 클릭해보십시오.
>    - URL routing, templates, and databases/models등을 설정하는 주제들이 보이십니까?
>    - 해당 문서들은 명료하게 작성이 되어있습니까?
>
> 2. 각각의 사이트에서 mailing lists(해당 커뮤니티의 링크들을 통해서 접근할 수 있습니다)를 둘러보기
>
>    - 지난 며칠동안 얼마나 많은 질문들이 올라왔습니까?
>    - 얼마나 많은 답변이 있습니까?
>    - 왕성한 활동을 보이는 커뮤니티를 갖고 있습니까?

## A few good web frameworks?

더 나아가, 몇몇 server-side 웹 프레임워크들에 대해 다루어보겠습니다.

밑에 있는 server-side 프레임워크들은 이 글을 쓰는 시점에 인기 있는 프레임워크들 중 일부입니다. 몇이 프레임워크들은 생산성을 위해 필요한 것들을 갖추었습니다. — they are open source, are under active development, have enthusiastic communities creating documentation and helping users on discussion boards, and are used in large numbers of high-profile websites. 인터넷 검색을 통해 여기서 언급하지 않은 좋은 프레임워크들 찾을 수 있습니다.

**Note**: 여기에 기술되어있는 (일부) 내용들은 프레임워크의 사이트로부터 왔습니다!

### Django (Python)

[Django](https://www.djangoproject.com/) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It's free and open source.

Django follows the "Batteries included" philosophy and provides almost everything most developers might want to do "out of the box". Because everything is included, it all works together, follows consistent design principles, and has extensive and up-to-date documentation. It is also fast, secure, and very scalable. Being based on Python, Django code is easy to read and to maintain.

Popular sites using Django (from Django home page) include: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](http://flask.pocoo.org/) is a microframework for Python.

While minimalist, Flask can create serious websites out of the box. It contains a development server and debugger, and includes support for [Jinja2](https://github.com/pallets/jinja) templating, secure cookies, [unit testing](https://en.wikipedia.org/wiki/Unit_testing), and [RESTful](http://www.restapitutorial.com/lessons/restfulresourcenaming.html) request dispatching. It has good documentation and an active community.

Flask has become extremely popular, particularly for developers who need to provide web services on small, resource-constrained systems (e.g. running a web server on a [Raspberry Pi](https://www.raspberrypi.org/), [Drone controllers](http://blogtarkin.com/drone-definitions-learning-the-drone-lingo/), etc.)

### Express (Node.js/JavaScript)

[Express](http://expressjs.com/) is a fast, unopinionated, flexible and minimalist web framework for [Node.js](https://nodejs.org/en/) (node is a browserless environment for running JavaScript). It provides a robust set of features for web and mobile applications and delivers useful HTTP utility methods and [middleware](/ko/docs/Glossary/Middleware).

Express is extremely popular, partially because it eases the migration of client-side JavaScript web programmers into server-side development, and partially because it is resource-efficient (the underlying node environment uses lightweight multitasking within a thread rather than spawning separate processes for every new web request).

Because Express is a minimalist web framework it does not incorporate every component that you might want to use (for example, database access and support for users and sessions are provided through independent libraries). There are many excellent independent components, but sometimes it can be hard to work out which is the best for a particular purpose!

Many popular server-side and full stack frameworks (comprising both server and client-side frameworks) are based on Express, including [Feathers](http://feathersjs.com/), [ItemsAPI](https://www.itemsapi.com/), [KeystoneJS](http://keystonejs.com/), [Kraken](http://krakenjs.com/), [LoopBack](http://loopback.io/), [MEAN](http://mean.io/), and [Sails](http://sailsjs.org/).

A lot of high profile companies use Express, including: Uber, Accenture, IBM, etc. (a list is provided [here](http://expressjs.com/en/resources/companies-using-express.html)).

### Ruby on Rails (Ruby)

[Rails](http://rubyonrails.org/) (usually referred to as "Ruby on Rails") is a web framework written for the Ruby programming language.

Rails follows a very similar design philosophy to Django. Like Django it provides standard mechanisms for routing URLs, accessing data from a database, generating HTML from templates and formatting data as {{glossary("JSON")}} or {{glossary("XML")}}. It similarly encourages the use of design patterns like DRY ("dont repeat yourself" — write code only once if at all possible), MVC (model-view-controller) and a number of others.

There are of course many differences due to specific design decisions and the nature of the languages.

Rails has been used for high profile sites, including: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://shopify.com/), [Airbnb](https://airbnb.com/), [Twitch](https://twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://hulu.com/), [Zendesk](https://zendesk.com/), [Square](https://square.com/), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) is a web application framework with expressive, elegant syntax. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, yet powerful, providing tools needed for large, robust applications.

### ASP.NET

[ASP.NET](http://www.asp.net/) is an open source web framework developed by Microsoft for building modern web applications and services. With ASP.NET you can quickly create web sites based on HTML, CSS, and JavaScript, scale them for use by millions of users and easily add more complex capabilities like Web APIs, forms over data, or real time communications.

One of the differentiators for ASP.NET is that it is built on the [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR), allowing programmers to write ASP.NET code using any supported .NET language (C#, Visual Basic, etc.). Like many Microsoft products it benefits from excellent tools (often free), an active developer community, and well-written documentation.

ASP.NET is used by Microsoft, Xbox.com, Stack Overflow, and many others.

### Mojolicious (Perl)

[Mojolicious](http://mojolicious.org/) is a next generation web framework for the Perl programming language.

Back in the early days of the web, many people learned Perl because of a wonderful Perl library called [CGI](https://metacpan.org/module/CGI). It was simple enough to get started without knowing much about the language and powerful enough to keep you going. Mojolicious implements this idea using bleeding edge technologies.

Some of the features provided by Mojolicious are: **Real-time web framework**, to easily grow single file prototypes into well-structured MVC web applications; RESTful routes, plugins, commands, Perl-ish templates, content negotiation, session management, form validation, testing framework, static file server, CGI/[PSGI](http://plackperl.org/) detection, first class Unicode support; Full stack HTTP and WebSocket client/server implementation with IPv6, TLS, SNI, IDNA, HTTP/SOCKS5 proxy, UNIX domain socket, Comet (long polling), keep-alive, connection pooling, timeout, cookie, multipart and gzip compression support; JSON and HTML/XML parsers and generators with CSS selector support; Very clean, portable and object-oriented pure-Perl API with no hidden magic; Fresh code based upon years of experience, free and open source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot) is one of a number of projects provided by [Spring](http://spring.io/). It is a good starting point for doing server-side web development using [Java](https://www.java.com/).

Although definitely not the only framework based on [Java](https://www.java.com/) it is easy to use to create stand-alone, production-grade Spring-based Applications that you can "just run". It is an opinionated view of the Spring platform and third-party libraries but allows to start with minimum fuss and configuration.

It can be used for small problems but its strength is building larger scale applications that use a cloud approach. Usually multiple applications run in parallel talking to each other, with some providing user interaction and others just do back end work (e.g. accessing databases or other services). Load balancers help to ensure redundancy and reliability or allow geolocated handling of user requests to ensure responsiveness.

## Summary

This article has shown that web frameworks can make it easier to develop and maintain server-side code. It has also provided a high level overview of a few popular frameworks, and discussed criteria for choosing a web application framework. You should now have at least an idea of how to choose a web framework for your own server-side development. If not, then don't worry — later on in the course we'll give you detailed tutorials on Django and Express to give you some experience of actually working with a web framework.

For the next article in this module we'll change direction slightly and consider web security.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}
