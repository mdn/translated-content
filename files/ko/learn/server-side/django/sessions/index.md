---
title: "Django Tutorial Part 7: Sessions framework"
slug: Learn/Server-side/Django/Sessions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django")}}

이 튜토리얼에서는 [LocalLibrary](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) website을 확장시킬 것입니다. 방문 수를 셀 수 있는 session-based 기능을 더한 홈페이지입니다. 이것은 상대적으로 간단한 예제인데, 이는 당신의 홈페이지에서 익명의 유저들에게 지속적으로 서비스를 제공하는 session framework의 사용법입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Complete all previous tutorial topics, including
        <a href="/ko/docs/Learn/Server-side/Django/Generic_views"
          >Django Tutorial Part 6: Generic list and detail views</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To understand how sessions are used.</td>
    </tr>
  </tbody>
</table>

## 개요

이전 튜토리얼에서 우리가 만든 [LocalLibrary](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) website는 카탈로그에서 유저가 책과 저자를 검색할 수 있도록 합니다. 컨텐츠가 Database로부터 다이나믹하게 생성되기 때문에, 모든 유저는 사용시에 필수적으로 같은 페이지와 정보 타입에 필수적으로 접근할 것입니다.

실제 도서관에서는 각각의 유저들에게 그들의 이전 사이트 사용과 선호 등에 기반한 커스텀된 경험을 제공하고 싶을지도 모릅니다 . 예를 들어, 유저가 이미 알고 있는 경고 메세지들을 숨길 수도 있습니다. 그 유저들이 다음에 사이트를 방문하거나 그들의 선호사항(e.g. 그들이 각 페이지에서 보여지길 원하는 검색의 결과 수)에 대해서 저장하는 것을 말합니다.

session framework는 당신이 이 행동의 분류하도록 하며, 각 사이트 방문자에 기반한 임의의 데이터를 검색하거나 저장하도록 합니다.

## 세션이란?

웹 브라우저와 서버가 HTTP 프로토콜을 통해서 하는 모든 커뮤니케이션은 무상태(stateless)라고 합니다. 프로토콜이 무상태라는 뜻은 클라이언트와 서버 사이의 메시지가 완벽하게 각각 독립적이라는 뜻입니다. — 여기엔 이전 메시지에 근거한 행동이나 순서(sequence)라는 것이 존재하지 않습니다. 결국, 만약 사이트가 클라이언트와 계속적인 관계를 유지하는 것을 당신이 원한다면, 당신이 직접 그 작업을 해야합니다.

세션이라는 것은 Django 그리고 대부분의 인터넷에서 사용되는 메카니즘으로, 사이트와 특정 브라우저 사이의 "state"를 유지시키는 것입니다. 세션은 당신이 매 브라우저마다 임의의 데이터를 저장하게 하고, 이 데이터가 브라우저에 접속할 때 마다 사이트에서 활용될 수 있도록 합니다. 세션에 연결된 각각의 데이터 아이템들은 "key"에 의해 인용되고, 이는 또다시 데이터를 찾거나 저장하는 데에 이용됩니다.

장고는 특정 _session id_ 를 포함하는 쿠키를 사용해서 각각의 브라우저와 사이트가 연결된 세션을 알아냅니다. 실질적인 세션의 _data_ 사이트의 Database에 기본 설정값으로 저장됩니다 (이는 쿠키안에 데이터를 저장하는 것보다 더 보안에 유리하고, 쿠키는 악의적인 사용자에게 취약합니다). 당신은 Django를 다른 장소 (캐시, 파일, "보안이 된" 쿠키)에 저장하도록 설정할 수 있지만, 그러나 기본 위치가 상대적으로 더 안전합니다.

## 세션 사용설정하기

세션설정은 처음에 skeleton website를 생성했을 때 (in tutorial 2) 자동으로 사용할 수 있도록 설정되었습니다.

세션사용설정은 프로젝트 settings.py에서 아래와 같이 `INSTALLED_APPS` 와 `MIDDLEWARE` 부분에 있습니다.

```python
INSTALLED_APPS = [
    ...
    'django.contrib.sessions',
    ....

MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',
    ....
```

## 세션 사용하기

`session` 속성은 `request` parameter 에서 파생된 view 안에 있습니다. ( view 로 전달되는 `HttpRequest` 의 첫번째 함수 ). 이 세션의 속성은 현재의 사용자(정확히는 브라우저) 의 site 에 대한 connection 을 의미합니다. 브라우저의 cookie 안에 정의 되어 있습니다.

이 `session` 속성은 사전 같은 객체이지만 여러번 읽고 쓰기가 가능합니다.여러분은 다양한 딕셔너리 연산 - 즉, 모든 데이타 삭제, Key 가 존재하는지 데이터를 통한 looping 기타등등. 무엇보다 표준적인 "dictionary" API 를 통해 값을 가져오거나 저장 할 수 있습니다.

아래 코드는 key 값이 `"my_car"` 인 데이터를 어떻게 읽고 쓰고 삭제하는지 보여줍니다. 물론 그 key 값은 현재의 session (브라우저와 사이트의 연결정보) 과 연관되어진 key 입니다.

> **참고:** 장고가 대단한점 한가지는 여러분이 이런 session 의 매카니즘에 생각하지 않게끔 한다는 점입니다. 만일 view 안에 있는 아래의 code 를 사용하면 **오직 현재의 브라우저만**이 현재의 request 에 관한 `my_car` 정보를 알 수 있다는 겁니다.

```python
# Get a session value by its key (e.g. 'my_car'), raising a KeyError if the key is not present
my_car = request.session['my_car']

# Get a session value, setting a default if it is not present ('mini')
my_car = request.session.get('my_car', 'mini')

# Set a session value
request.session['my_car'] = 'mini'

# Delete a session value
del request.session['my_car']
```

이 API 는 또한 여러가지 다른 방법을 제공하는데 그들은 대부분 관련된 session cookie 를 다루는데 사용되는 것들 입니다. 예를 들어, 그 cookies 가 사용자의 브라우저에서 지원이 되는지 테스트하거나, 만기일을 알아본다던지, 만기된 session 을 삭제 한다던지. 좀더 알아보고 싶다면 [How to use sessions](https://docs.djangoproject.com/en/2.0/topics/http/sessions/) (Django docs) 에서 그 API 를 배울수 있습니다.

## 세션 데이터 저장하기

기본적으로 장고는 세션 데이타를 세션 database 에 저장합니다. 그리고 그 session cookie 를 필요할때 client 에게로 내려보내는 거지요. 즉, session 정보가 변경되었거나 삭제 되었을때, 앞장에서 기술한것처럼, 만일 session key 값을 이용해서 어떤 정보가 변경이 되었다면 우리는 이에 대해 염려 할 필요가 없습니다.예를 들자면 :

```python
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

만일 당신이 session data 안에 있는 어떤 정보를 수정 했다면 장고는 여러분이 수정한걸 알아채지 못합니다. (예를 들어, 만일 `"my_car"` 안의 `"wheels"` 정보를 수정 했다면 ). 이경우 명시적으로 그 session 이 수정 되었다고 아래의 코드처럼 표현해 주어야 합니다.

```python
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
```

> **참고:** You can change the behavior so the site will update the database/send cookie on every request by adding `SESSION_SAVE_EVERY_REQUEST = True` into your project settings (**locallibrary/locallibrary/settings.py**).

## 간단한 예제 — 방문자수 받아오기

간단한 실제 예제로서, 우리는 현재 유저가 LocalLibrary 홈페이지에 몇 번이나 방문했는지 알려주도록 업데이트할 것입니다. **/locallibrary/catalog/views.py** 을 열고 밑에 굵게 표시된 부분을 추가해서 바꿔봅시다.

```python
def index(request):
    ...

    num_authors = Author.objects.count()  # The 'all()' is implied by default.

    # Number of visits to this view, as counted in the session variable.
    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
        'num_visits': num_visits,
    }

    # Render the HTML template index.html with the data in the context variable.
    return render(request, 'index.html', context=context)
```

먼저 `'num_visits'` 세션 키 값을 가져오도록 합니다, 그리고 만약 전에 방문한적이 없다면 0이 되도록 합니다. 매번 요청받을 때 마다, 값을 증가시키고 세션에 값을 저장합니다 (유저의 다음 방문을 위해서요). context 변수를 통해 template에 `num_visits` 변수가 전달됩니다.

> **참고:** 이 지점에서 우리는 브라우저가 쿠키를 지원하는 지 그렇지 않은지 테스트할 수도 있습니다(예제로서 [How to use sessions](https://docs.djangoproject.com/en/2.0/topics/http/sessions/) 를 보도록하십시오). 또한 쿠키를 지원하는 지와는 별개로 UI를 디자인할 것입니다.

메인 HTML template(**/locallibrary/catalog/templates/index.html**) "Dynamic content" 섹션 밑 부분에 context 변수가 보일 수 있도록 밑에 보이는 굵은 선으로 표시된 코드를 추가해주세요:

```django
<h2>Dynamic content</h2>

<p>The library has the following record counts:</p>
<ul>
  <li><strong>Books:</strong> \{{ num_books }}</li>
  <li><strong>Copies:</strong> \{{ num_instances }}</li>
  <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
  <li><strong>Authors:</strong> \{{ num_authors }}</li>
</ul>

<p>
  You have visited this page \{{ num_visits }}{% if num_visits == 1 %} time{%
  else %} times{% endif %}.
</p>
```

바뀐 것을 저장해주시고 테스트 서버를 재시작해주세요. 페이지를 새로고침할 때 마다, 숫자가 업데이트되는 것을 보실 수 있을겁니다.

## 요약

익명 유저와의 상호작용을 증대하기 위해 세션을 이용하는 것이 얼마나 쉬운일인지 알 수 있었습니다.

다음 장에서는, 인증과 권한부여(허가)에 관한 프레임워크를 설명할 것입니다. 그리고 유저 계정을 어떻게 지원할 수 있는지를 보도록 하죠.

## See also

- [How to use sessions](https://docs.djangoproject.com/en/2.0/topics/http/sessions/) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/Authentication", "Learn/Server-side/Django")}}
