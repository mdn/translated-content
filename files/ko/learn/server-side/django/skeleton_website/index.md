---
title: "장고 튜토리얼 강좌 2 : 뼈대 사이트 만들기"
slug: Learn/Server-side/Django/skeleton_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

[장고 튜토리얼](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website)의 두 번째 기사에서는 웹 사이트 프로젝트의 기본 뼈대(skeleton)를 만들고, 사이트의 특성에 맞춰 설정, 경로, 모델, 뷰 및 템플릿을 다루는 방법을 보여줍니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 준비:</th>
      <td>
        <a href="/ko/docs/Learn/Server-side/Django/development_environment"
          >장고 개발 환경을 설치하세요. (Set up a Django development
          environment.)</a
        >
        <a
          href="/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website"
          >장고 튜토리얼</a
        >을 복습하세요.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        당신만의 새로운 웹사이트 프로젝트를 시작하기 위해 장고의 도구들을 사용할
        수 있는 능력 기르기.
      </td>
    </tr>
  </tbody>
</table>

## 개요

이 글은 웹사이트의 "뼈대"를 생성하는 법을 보여줍니다. 그리고 이 사이트는 사이트에 특화된 설정, 경로, 모델, 뷰, 템플릿 등을 작성할 수 있습니다. (이후 글에서 이것들에 관해 다루겠습니다)

과정은 직관적입니다:

1. 프로젝트 폴더, 기본적인 파일 템플릿과 프로젝트 관리 스크립트(**manage.py**)를 만들기 위해서 `django-admin`을 사용합니다.
2. 하나 또는 그 이상의 애플리케이션을 만들기 위해서 **manage.py**를 사용합니다.

   > [!NOTE]
   > 하나의 웹사이트는 하나 또는 그 이상의 섹션으로 구성될 수 있습니다. (예를 들어 main site, blog, wiki, downloads area 등). 장고는 필요할 때에 다른 프로젝트에서 재사용이 가능할 수 있게 , 이 요소들을 분리된 어플리케이션으로 개발하는 것을 추천합니다.

3. 프로젝트에 포함시키기 위해 새 어플리케이션들을 등록(register)합니다.
4. 각 어플리케이션에 대해 url/mapper를 연결(hook up)합니다.

[Local Library website](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) 용으로 웹사이트 폴더와 프로젝트 폴더는 locallibrary라고 이름지어질 것입니다. 그리고 catalog라는 단 하나의 어플리케이션을 가질 겁니다. 그러므로 최상위 폴더 구조는 아래와 같습니다:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

다음 섹션에서는 프로세스 단계를 자세히 설명하고 변화를 테스트할 수 있는 방법을 설명합니다. 글의 마지막에서 당신이 이 단계에서 수행해야 하는 몇 가지 다른 사이트 전체 설정에 관해 논의합니다.

## 프로젝트 만들기

먼저 명령 프롬프트 또는 터미널을 열어서, 당신이 [virtual environment](/ko/docs/Learn/Server-side/Django/development_environment#Using_a_virtual_environment) 안에 있는지 확인하고, 어디에 당신의 장고 앱을 (당신의 '문서'와 같이 찾기 쉬운 어딘가로 하세요) 저장하기 원하는지 탐색합니다. 그리고 당신의 새로운 웹사이트 폴더를 만드세요 (이 예제에서는: _locallibrary_). 그리고 cd 명령어를 사용하여 해당 폴더로 들어가세요:

```bash
mkdir locallibrary
cd locallibrary
```

다음과 같이 `django-admin startproject` 명령을 사용하여 새로운 프로젝트를 만들고, 그 폴더 안으로 들어가세요. (변역자주: 실제 해보니 위의 문장은 하지 말아야 합니다. 하나의 parent folder 가 더 만들어집니다. 즉, locallibrary-locallibrary-locallibrary )

```bash
django-admin startproject locallibrary
cd locallibrary
```

`django-admin` 도구가 아래와 같이 폴더/파일 구조를 생성합니다. (번역자주: 윈도우 환경에서는 `tree /f locallibrary_path` 명령으로 구조를 확인할 수 있습니다.)

```bash
locallibrary/
    manage.py
    locallibrary/
        __init__.py
        settings.py
        urls.py
        wsgi.py
```

locallibrary 프로젝트의 하위 폴더는 웹사이트의 시작점입니다:

- **\_\_init\_\_.py**는 빈 파일입니다. 이 파일은 파이썬에게 이 디렉토리를 하나의 파이썬 패키지로 다루도록 지시합니다.
- **settings.py**는 웹사이트의 모든 설정을 포함하고 있습니다. 이 파일에는 우리가 만드는 모든 어플리케이션, 정적 파일의 위치, 데이터베이스 세부 설정 등을 등록합니다.
- **urls.py**는 사이트의 URL과 뷰의 연결을 지정해줍니다. 여기에는 모든 URL 매핑 코드가 포함될 수 있지만, 특정한 어플리케이션에 매핑의 일부를 할당해주는 것이 일반적입니다.
- **wsgi.py**는 당신의 장고 어플리케이션이 웹서버와 연결 및 소통하는 것을 돕습니다. 당신은 이것을 표준 형식(boilerplate)으로 다뤄도 무방합니다.
- **asgi.py** is a standard for Python asynchronous web apps and servers to communicate with each other and positioned as an asynchronous successor to WSGI, where WSGI provided a standard for synchronous Python apps, ASGI provides one for both asynchronous and synchronous apps, with a WSGI backward-compatibility implementation and multiple servers and application frameworks.

**manage.py**는 어플리케이션을 생성하고, 데이터베이스와 작업하고, 그리고 개발 웹 서버를 시작하기 위해 사용됩니다.

## catalog application 만들기

다음으로, locallibrary 프로젝트 안에 생성될 catalog 어플리케이션을 만들기 위해 아래 명령어를 실행하세요. 이것은 프로젝트의 **manage.py**와 같은 폴더 안에서 실행되어야 합니다.

```bash
python3 manage.py startapp catalog
```

> **참고:** **주의** : 위 명령어는 리눅스/macOS X를 위한 명령어입니다. 윈도우에서의 명령어는 다음과 같습니다. `py -3 manage.py startapp catalog`
>
> 만약 윈도우에서 작업한다면, 이 튜토리얼 전체에서 `python3`를 `py -3`로 바꾸십시오.
>
> 만약 파이썬 3.7.0 이상을 사용한다면 `py manage.py startapp catalog`를 사용하면 됩니다.

이 도구는 새로운 폴더를 생성하고 폴더를 어플리케이션의 파일들로 채웁니다(아래에 굵게 표시). 대부분의 파일들은 그것의 목적에서 따온 이름을 갖고 있습니다. 예를들어, 뷰는 **views.py**에, 모델은 **models.py**에, 테스트는 **tests.py**에, 관리자 사이트 설정은 **admin.py**에, 어플리케이션 등록(registration)은 **apps.py**에 있습니다. 그리고 관련 객체(object)에 대한 작업을 위한 최소한의 표준 코드를 포함합니다.

이제 업데이트된 프로젝트 디렉토리는 다음과 같아야 합니다.

```bash
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```

추가로 다음을 갖게 됐습니다:

- **migrations 폴더** — 모델을 수정할 때 마다 자동으로 데이터베이스를 업데이트하는 것을 가능하게 해 줄 마이그레이션 파일들을 저장할 폴더
- **\_\_init\_\_.py** — 장고/파이썬이 폴더를 [파이썬 패키지](https://docs.python.org/3/tutorial/modules.html#packages)로 인식하게 할 빈 파일입니다. 또한 프로젝트의 다른 부분에서 객체(object)를 사용할 수 있게 합니다.

> **참고:** **주의** : 위의 파일 리스트에서 뭔가 부족한게 있다는 것을 알아챘나요? 뷰와 모델 관련 파일은 있는 반면 URL 맵핑, 템플릿, 정적 파일(static file)과 연관된 파일이 없습니다. 그들을 어떻게 생성하는지에 관해서는 추후에 보여드리겠습니다 (이것들은 모든 웹사이트에서 필요하진 않지만 우리 프로젝트에서는 필요합니다).

## catalog application 등록하기

이제 어플리케이션이 생성되었으니 프로젝트에 등록(register)해야합니다. 도구가 실행될 때 프로젝트에 포함시키기 위해서 말이죠(예를 들어 모델을 데이터베이스에 추가할 때 처럼요). 어플리케이션들은 프로젝트 설정 안의 `INSTALLED_APPS` 리스트에 추가함으로써 등록할 수 있습니다.

프로젝트의 설정 파일(**locallibrary/locallibrary/settings.py**)을 열고 `INSTALLED_APPS` 리스트의 정의 부분을 찾으세요. 그리고 그 리스트 제일 아래에 다음과 같이 기입해 주세요.

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'catalog.apps.CatalogConfig',
]
```

새로운 행은 어플리케이션 구성 객체(application configuration object)(`CatalogConfig`)를 지정하게 됩니다. 이것은 어플리케이션을 생성할 때 **/locallibrary/catalog/apps.py** 안에 생성됩니다.

> **참고:** **주의**: 설정 파일에 이미 많은 `INSTALLED_APPS` 항목과 `MIDDLEWARE` 항목이 있음을 알 수 있습니다. 이를 통해 [장고 관리 사이트](/ko/docs/Learn/Server-side/Django/Admin_site)를 지원할 수 있으며 결과적으로 세션, 인증 등을 포함한 많은 기능이 사용됩니다.

## 데이터베이스 설정

이제 보통 프로젝트에 사용할 데이터베이스를 지정하는 시점입니다— 가능한 한 개발과 결과물에 동일한 데이터베이스를 사용하여 사소한 동작 차이를 방지해야 합니다. [Databases에 대한 장고 문서](https://docs.djangoproject.com/en/2.0/ref/settings/#databases)에서 가능한 다른 옵션을 확인할 수 있습니다.

이 예제에서는 SQLite 데이터베이스를 사용합니다. 데모 데이터베이스에서 많은 동시 접속을 예상하지 않고, 설정에 추가적인 작업이 필요없기 때문입니다. 이 데이터베이스가 어떻게 설정되어 있는지 **settings.py**에서 확인할 수 있습니다.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

우리는 SQLite를 사용하기 때문에 여기서 다른 어떤 작업도 할 필요가 없습니다. 다음으로 가죠!

## 프로젝트의 다른 설정

**settings.py** 파일은 다른 많은 설정을 조정하는 데에 사용됩니다. 그러나 지금은 [TIME_ZONE](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-TIME_ZONE) 만 바꿔 봅시다— 이 부분은 표준화된 [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)과 일치되는 문자열을 사용해야 합니다 (테이블의 TZ 열의 값들을 참고하세요). `TIME_ZONE` 값을 당신의 타임존에 알맞은 문자열로 바꾸세요. (역자주: 한국은 `'Asia/Seoul'`로 설정)

```python
TIME_ZONE = 'Europe/London'
```

지금은 바꾸지 않지만 알아둬야 할 두 가지 설정이 있습니다:

- `SECRET_KEY` : 이것은 장고의 웹사이트 보안 전략의 일부로 사용되는 비밀키입니다. 만약 이 코드를 개발 과정에서 보호하지 않는다면 제품화(production) 과정에서 다른 코드(아마 환경변수나 파일에서 읽어오는)를 사용해야 할 것입니다.
- `DEBUG` : 이것은 에러가 발생했을 때 HTTP 상태코드 응답 대신 디버깅 로그가 표시되게 합니다. 디버깅 정보는 공격자에게 유용하기 때문에 제품화된(production) 환경에서는 `False` 로 설정해야 합니다. 하지만, 지금은 `True`로 설정합니다.

## URL 맵퍼 연결

웹사이트는 프로젝트 폴더 안의 URL 맵퍼 파일(**urls.py**)과 같이 생성됩니다. **urls.py**를 통해 모든 URL 맵핑을 관리할 수 있지만, 연관된 어플리케이션에 따라 매핑을 다르게 하는 것이 일반적입니다.

**locallibrary/locallibrary/urls.py** 파일을 열어서 URL 맵퍼를 사용하는 몇 가지 방법을 설명하는 문서를 살펴보세요.

```python
"""locallibrary URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
예제:
Function views 일 경우
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views 일 경우
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
다른 참조할 URL FILE 들을 포함시켜야 하는경우
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

URL 맵핑은 `urlpatterns` 변수를 통해 관리되는데, 이 변수는 `path()` 함수의 파이썬 `list` 타입입니다. 각각의 `path()` 함수는 패턴이 일치할 때 표시될 뷰에 URL 패턴을 연결하거나, 다른 URL 패턴 테스트 코드 목록에 연결합니다(이 두 번째 경우에서 패턴은 대상 모듈에서 정의된 패턴의 "기본 URL"이 됩니다). `urlpatterns` 리스트는 맨 처음에 관리자 어플리케이션의 고유한 URL 맵핑 정의를 갖고 있는 `admin.site.urls` 모듈에 `admin/` 패턴을 가지고 있는 모든 URL을 매핑하는 단일 함수를 정의합니다.

> **참고:** **주의**: `path()` 속의 경로는 일치시킬 URL 패턴을 정의하는 문자열입니다. 이 문자열은 명명된(named) 변수를 꺽쇠 괄호(`< >`) 안에 포함할 수 있습니다. (예시: `'catalog/<id>/'`) 이 패턴은 URL을 **/catalog/**_any_chars_**/** 처럼 일치시키고 *any_chars*를 뷰에 매개 변수 이름이 `id` 인 문자열로 전달합니다. 경로(path) 함수(method)와 경로(route) 패턴에 대해서는 추후에 더 논의하겠습니다.

`urlpatterns` 리스트에 새로운 리스트 항목을 추가하기 위해서 아래 코드를 파일의 마지막에 추가하세요. 이 새로운 항목은 요청(request)을 모듈 `catalog.urls`(관련 URL **/catalog/urls.py**가 있는 파일)에 `catalog/` 패턴과 함께 전달하는 `path()`를 포함합니다. (번역자주: 만일 `www.xxxx.com/catalog`로 시작되는 요청이 들어 오면 `catalog/urls.py`를 참조해서 맵핑하겠다는 의미)

```python
# Use include() to add paths from the catalog application
from django.conf.urls import include
from django.urls import path

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

이제 사이트의 루트 URL(즉, `127.0.0.1:8000`)을 `127.0.0.1:8000/catalog/`로 리다이렉트 하도록 합시다. 이것이 우리가 이 프로젝트에서 사용하는 유일한 어플리케이션입니다. 이것을 하기 위해서는 특별한 뷰 함수(`RedirectView`)를 사용할 겁니다. 이 함수는 `path()`에서 지정된 URL 패턴이 일치할 때(위의 경우에선 루트 URL이죠) 첫 번째 인자를 (`/catalog/`)로 리다이렉트할 새로운 상대 URL로 간주합니다.

파일의 하단에 아래 코드를 다시 추가하세요:

```python
#Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
```

```
urlpatterns += [
    path('', RedirectView.as_view(url='/catalog/', permanent=True)),
]
```

`path()` 함수의 첫 번째 매개변수(parameter)를 비워 놓으면 `'/'`를 의미합니다. 만약 첫 번째 매개변수(parameter)를 `'/'`라고 작성한다면 개발 서버를 시작할 때 장고는 아래의 경고를 보여줄 겁니다.

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

장고는 기본적으로 CSS, JavaScript, 그리고 이미지와 같은 정적 파일을 제공하지 않지만, 이들은 사이트에 매우 유용할 수 있습니다. 최종적으로 이 URL 매퍼에 추가할 것은 개발 중에 정적 파일들을 제공하는 것을 가능하게 하는 아래 코드입니다.

아래 코드를 파일의 하단에 추가하세요:

```
# Use static() to add url mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> **참고:** **주의**: `urlpatterns` 리스트를 확장하는 여러 가지 방법들이 있습니다(위에서는 코드들을 명백하게 구분하기 위해서 간단히 `+=` 연산자를 사용해서 새로운 리스트 항목을 추가했습니다). 대신 원래의 리스트 정의 안에 새로운 패턴-맵을 추가하는 방법이 있습니다:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='/catalog/', permanent=True)),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```
>
> 추가적으로 임포트(import) 코드(`from django.urls import include`)를 그것을 사용하는 코드 바로 위에 선언했지만(무엇을 추가했는지 보기 쉽도록) 대개 import 문장은 파이썬 파일의 상단에 포함하는 것이 일반적입니다.

마지막으로 **urls.py**라는 파일을 catalog 폴더 안에 생성하세요. 그리고 임포트된 (텅 빈(emptyt))`urlpatterns`를 정의하기 위해 아래 코드를 추가하세요. 어플리케이션을 만들면서 패턴들을 이곳에 추가할 것입니다.

```python
from django.urls import path
from catalog import views


urlpatterns = [

]
```

## Website framework 테스트 하기

우리는 이 프로젝트의 뼈대(skeleton)를 만들었습니다. 웹사이트는 아직 아무것도 하지 않지만, 우리들이 여기까지 완성한 프로젝트가 오류 없이 돌아가는지 한번 실행해 볼 필요가 있습니다.

그 전에 먼저 데이터베이스로의 마이그레이션(migration) 작업을 해야 합니다. 이것은 데이터베이스에 우리의 어플리케이션에 속한 모든 모델을 포함하도록 업데이트합니다(그리고 몇몇 빌드 경고의 원인을 제거합니다).

### 데이터베이스 마이그레이션(migration) 실행하기

장고는 ORM(Object-Relational-Mapper : 객체-관계-매퍼)를 사용하여 장고 코드 안에 있는 모델 정의(객체)를 기본 데이터베이스에서 사용하는 데이터 구조(관계형 DB)에 매핑합니다. 모델의 정의를 바꿀 때 마다, 장고는 변화를 추적해서, 데이터베이스 안의 기본 데이터 구조가 모델과 일치하도록 자동적으로 이전(migrate)하는 스크립트를(**/locallibrary/catalog/migrations/**안에)생성할 수 있습니다.

웹사이트를 생성할 때 장고는 사이트의 관리자 섹션(나중에 살펴볼)에서 사용할 여러 모델들을 자동으로 추가했습니다. 데이터베이스 안의 그 모델들을 위한 테이블들을 정의하기 위해 아래 명령어를 실행하세요(**manage.py**파일이 포함되어 있는 디렉토리에서 실행합니다).

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> **경고:** **중요**: 저장되어야 할 데이터의 구조에 영향을 미치는 방식으로 모델이 변경될 때마다 위의 명령어를 실행해야 합니다(모든 모델과 개별적인 필드의 추가와 제거를 포함하여).

`makemigrations` 명령어는 프로젝트에 설치된 모든 어플리케이션에 대한 migration을 생성합니다(하지만 적용하진 않습니다)(또한 그저 단일 프로젝트를 위한 migration을 실행하기 위해 어플리케이션 이름을 지정할 수 있습니다). 이것으로 migration이 적용되기 전에 코드를 점검할 기회를 가질 수 있습니다 — 당신이 장고 전문가가 되었을 땐 그것들을 조금 조정할 수도 있습니다!

`migrate` 명령어는 migration을 실제로 데이터베이스에 적용합니다(장고는 현재 데이터베이스에 어떤 것들이 추가되었는지 추적합니다).

> **참고:** **주의**: 덜 사용되는 migration 명령어에 대한 추가적인 정보는 [Migrations](https://docs.djangoproject.com/en/2.0/topics/migrations/) (장고 문서)를 참고하세요.

### 웹사이트 실행하기

개발 중에 먼저 개발 웹 서버를 사용해서 웹사이트를 서비스한 후 로컬 웹 브라우저에서 볼 수 있습니다.

> **참고:** **주의**: 개발용 웹 서버는 견고하거나 제품에 쓰일 만큼 충분하진 않지만, 개발 중에 편하고 빠른 테스트를 위해 장고 웹사이트를 실행할 수 있는 아주 쉬운 방법입니다. 기본적으로 사이트를 당신의 로컬 컴퓨터에(`http://127.0.0.1:8000/)`서비스 하지만, 네트워크에 있는 다른 컴퓨터를 지정해서 서비스하도록 할 수 있습니다. [django-admin and manage.py: runserver](https://docs.djangoproject.com/en/2.0/ref/django-admin/#runserver) (장고 문서)에서 더 많은 정보를 확인하세요.

**manage.py**와 같은 디렉터리 안에 있는 `runserver` 명령어를 실행해 개발 웹 서버를 실행해 보세요.

```bash
python3 manage.py runserver

 Performing system checks...

 System check identified no issues (0 silenced).
 August 15, 2018 - 16:11:26
 Django version 2.1, using settings 'locallibrary.settings'
 Starting development server at http://127.0.0.1:8000/
 Quit the server with CTRL-BREAK.
```

서버가 실행된다면 로컬 웹 브라우저에서 `http://127.0.0.1:8000/` 으로 이동하여 사이트를 볼 수 있습니다. 아래와 같은 사이트 에러 페이지가 뜰 겁니다:

![Django Debug page for Django 2.0](django_404_debug_page.png)

걱정 마세요! 예상된 에러 페이지입니다. 그 이유는 아직(사이트의 루트에 대한 URL을 가져올 때 리다이렉트되는) `catalogs.urls` 모듈 안에 정의된 page/url들이 없기 때문입니다.

> **참고:** **주의**: 위 페이지는 중요한 장고 기능을 보여줍니다— 자동화된 디버그 기록(logging)이죠. 에러 화면은 페이지를 찾을 수 없거나, 코드에서 에러가 발생했을 어떤 때라도 유용한 정보가 표시될 겁니다. 이 경우엔 (목록에 있는 대로) 우리가 제공한 URL과 일치하는 어떤 URL 패턴도 없다는 것을 볼 수 있습니다. 디버그 기록(logging)은 제품화되었을 (웹에 라이브로 사이트를 올려놓으면) 때는 꺼져 있을 겁니다. 정보는 더 적지만, 사용자 친화적인 페이지가 서비스되는 것이죠.

이 지점에서 장고가 작동한다는 것을 알 수 있습니다!

> **참고:** **주의**: 어떤 때라도 중요한 변경이 있은 후에는 migration들을 재실행하고 사이트를 다시 테스트해야 합니다. 그렇게 오래 걸리진 않으니까 꼭 하세요!

## 도전 과제

**catalog/** 디렉토리는 뷰, 모델, 그리고 어플리케이션의 다른 부분들을 위한 파일들을 포함하고 있습니다. 이 파일들을 열어 표준 코드(boilerplate)들을 점검해 보세요.

위에서 본 것처럼, 관리자 사이트를 위한 URL 매핑은 이미 프로젝트의 **urls.py** 안에 추가되어 있습니다. 브라우저에서 관리자 영역으로 이동하여 어떤 일이 일어나는지 살펴보세요(위서 살펴본 매핑에서 올바른 URL을 추론할 수 있습니다).

## 요약

이제 urls, models, views, 그리고 templates으로 채울 수 있는 완벽한 뼈대 웹사이트 프로젝트를 만들었습니다.

[Local Library website](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website)를 위한 뼈대는 완성되어서 실행되고 있고, 이제는 이 웹사이트가 해야 할 일을 하게 만드는 코드를 작성할 시간입니다.

## 참고 항목

- [Writing your first Django app - part 1](https://docs.djangoproject.com/en/2.0/intro/tutorial01/) (Django docs)
- [Applications](https://docs.djangoproject.com/en/2.0/ref/applications/#configuring-applications) (Django Docs). 어플리케이션의 구성(configuring)에 관한 정보를 갖고 있습니다.

{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}
