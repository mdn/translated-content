---
title: "Django Tutorial Part 5: Creating our home page"
slug: Learn/Server-side/Django/Home_page
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

우리는 이제 첫 전체 페이지를 보여주는 코드를 추가할 때가 되었습니다 — [LocalLibrary](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) website를 위한 홈페이지를요. 이 홈페이지는 각각의 모델 타입마다 갖고 있는 레코드들의 숫자를 보여주고, 우리의 다른 페이지들로 이동할 수 있는 사이드바 내비게이션 링크들을 제공합니다. 이 섹션에서 우리는 기본 URL 맵과 뷰들을 작성하고, 데이터베이스에서 레코드들을 가져오고 그리고 탬플릿을 사용하는 것에 대한 연습 경험을 가질 수 있습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 준비:</th>
      <td>
        <a href="/ko/docs/Learn/Server-side/Django/Introduction"
          >Django Introduction</a
        >을 읽어보세요. 이전 튜토리얼들을 완료하세요 (<a
          href="/ko/docs/Learn/Server-side/Django/Admin_site"
          >Django Tutorial Part 4: Django admin site</a
        >
        포함).
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        간단한 url 맵과 뷰를 생성하고(URL 안에 아무런 데이터도 인코드되지 않은),
        모델로부터 데이터를 가져오고, 탬플릿을 생성하는 방법을 배우기.
      </td>
    </tr>
  </tbody>
</table>

## 개요

지금까지는 우리의 모델을 정의하고 약간의 초기 도서관 레코드들을 만들어 왔고, 이제는 사용자에게 정보를 제공하기 위한 코드를 작성할 때입니다. 첫 번째 우리가 할 일은 우리의 페이지에서 어떤 정보를 보여줄 것인지를 결정하고, 그 요소들을 반환하는 데 사용되는 URL들을 정의하는 것입니다. 다음으로 우리는 페이지를 나타내기 위한 URL 매퍼, views, 그리고 탬플릿들을 생성할 것입니다.

아래 다이어그램은 주요 데이터 흐름 그리고 HTTP 요청과 응답을 처리하는 데 필요한 요소들을 보여줍니다. 모델은 이미 구현되었기 떄문에, 우리가 생성할 주요 요소들은 다음과 같습니다:

- URL 매퍼들 : 적절한 view 함수들을 위해 지원되는 URL들(그리고 URL들 안에 인코딩된 어떤 정보라도)을 포워딩하기 위해.
- View 함수들: 요청된 데이터를 모델들에게서 가져오고, 데이터를 표시하는 HTML 페이지를 생성하고 그리고 브라우저 안의 view로 페이지들을 사용자에게 반환하기 위해.
- 탬플릿들: 데이터를 뷰들 안에 렌더링할 때 사용하기 위해.

![](basic-django.png)

우리가 표시해야 할 페이지는 총 다섯 페이지입니다. 하나의 글에 담기에는 너무 많은 정보죠. 따라서, 이 글의 대부분은 홈 페이지를 어떻게 구현하는 지에 대해 집중하고, 다음 글에서 다른 페이지들에 대해 다루겠습니다. 이렇게 하면 URL 매퍼들, view들, 그리고 모델이 실제로 작동하는 방식에 대해 완벽하고 철저하게 이해할 수 있을 것입니다.

## resource URLs 정의하기

이 버전의 LocalLibrary는 근본적으로 최종 사용자들에게는 읽기 전용이기 때문에, 우리는 사이트의 방문 페이지(홈 페이지) 그리고 책들과 저자들에 대한 목록 및 세부 view들을 보여주는 페이지만 제공하면 됩니다.

우리의 페이지들을 위해 필요한 URL들은:

- `catalog/` — 홈/색인(index) 페이지.
- `catalog/books/` — 모든 책들의 목록.
- `catalog/authors/` — 모든 저자들의 목록.
- `catalog/book/<id>` — `<id>` 라는 이름의(기본값) 프라이머리 키(primary key) 필드를 가지는 특정한 책을 위한 세부 사항 뷰(detail view). 예를 들어, 목록에 추가된 세 번째 책은 `/catalog/book/3`이 될 것입니다.
- `catalog/author/<id>` — `<id>` 라는 이름의 프라이머리 키(primary key) 필드를 가지는 특정한 저자를 위한 세부 사항 뷰(detail view). 예를 들어, 목록에 추가된 11번째 저자는 `/catalog/author/11`이 될 것입니다.

처음 세 개의 URL들은 인덱스 페이지, 책 목록, 그리고 저자 목록을 반환합니다. 이것들은 아무런 추가적인 정보도 인코드하지 않고, 데이터베이스에서 데이터를 가져오는 쿼리들도 항상 똑같습니다. 그러나, 쿼리들이 반환할 결과들은 데이터베이스의 내용물에 따라 다를 것입니다.

그에 반해서 마지막 두 개의 URL들은 특정한 책 또는 저자에 대한 세부 정보를 나타낼 것입니다. 이 URL들은 표시할 항목의 ID를 인코딩합니다(위에서 `<id>` 로 표시). URL 매퍼는 인코딩된 정보를 추출하여 view로 전달합니다. 그리고 view는 데이터베이스에서 무슨 정보를 가져올지 동적으로 결정합니다. URL의 정보를 인코딩하여 우리는 모든 책들(또는 저자들)을 처리하기 위해 단일 모임의 url 매핑, 뷰, 탬플릿을 사용할 것입니다.

> **참고:** **주의:** 장고를 이용해서 당신이 필요로 하는 대로 URL들을 만들 수 있습니다 — 위와 같이 URL의 본문(body)에 정보를 인코딩할 수도 있고, 또는 URL 안에 GET 매개 변수들을 포함시킬 수 있습니다(예: /book/?id=6). 어떤 방식이건 URL들은 깨끗하고, 논리적이고, 읽기 쉬워야 합니다. ([check out the W3C advice here](https://www.w3.org/Provider/Style/URI)).
> 장고 문서는 더 나은 URL 설계(design)를 위해 URL의 본문(body)에 정보를 인코딩하는 것을 권장합니다.

개요에서 다룬 것 처럼, 이 글의 나머지는 색인(index) 페이지를 만드는 방법을 보여줍니다.

## index page 만들기

우리가 만들 첫 번째 페이지는 index page입니다 (`catalog/`). index 페이지는 데이터베이스 안의 서로 다른 레코드들의 생성된 "개수(count)" 와 함께 몇 가지 정적 HTML을 포함합니다. 이것이 작동하도록 하기 위해서 우리는 URL 매핑, 뷰 그리고 탬플릿을 생성하겠습니다.

> **참고:** **주의**:이 섹션에 조금 더 집중해 봅시다. 대부분의 정보들이 우리가 생성할 다른 페이지들에도 적용되기 때문입니다.

### URL 매핑

[skeleton website](/ko/docs/Learn/Server-side/Django/skeleton_website)를 만들었을 때, 우리는 **locallibrary/urls.py** 파일을 업데이트했습니다. `catalog/`로 시작하는 URL을 받았을 때, URLConf 모듈인 `catalog.urls` 가 나머지 문자열을 처리하도록 하기 위해서죠.

**locallibrary/urls.py** 의 아래 코드 조각은 `catalog.urls` 모듈을 포함합니다:

```
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> **참고:** **주의**: 장고는 import 함수 django.urls.include()를 만날 때 마다 지정된 마지막 문자에서 문자열을 나누고, 나머지 부분 문자열을 추가 작업을 위해 포함된 URLconf 모듈로 보냅니다.

우리는 또한 **/catalog/urls.py**로 이름지어진 URLConf 모듈을 위한 자리 표시자(placeholder) 파일도 생성했습니다. 그 파일에 아래 줄을 추가하세요

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

이 `path()` 함수는 아래를 정의합니다 :

- 빈 문자열인 URL 패턴 :`''`. 다른 뷰들을 작업할 때 URL 패턴들에 관해 자세히 다룰겁니다.
- URL 패턴이 감지되었을 때 호출될 view 함수:`views.index`. 이 함수는 **views.py** 파일 안에서 `index()`로 이름지어져 있습니다.

이 `path()` 함수는 또한 `name` 매개 변수를 지정합니다. 그것은 이 특정한 URL 매핑을 위한 고유 ID 입니다. 당신은 이 이름을 매퍼를 "반전" 시킬 수 있습니다. 즉, 매퍼가 처리하도록 설계된 리소스를 향하는 URL을 동적으로 생성하기 위해서죠. 예를 들자면, 우리는 아래 링크를 탬플릿에 추가해서 이름 매개 변수를 사용하여 다른 모든 페이지에서 홈 페이지로 링크를 걸 수 있습니다:

```html
<a href="{% url 'index' %}">Home</a>.
```

> **참고:** **주의**: 우리는 위 링크를 하드코딩할 수 있지만(예: `<a href="/catalog/">Home</a>`), 그렇게 하면 만약에 우리가 홈페이지를 바꿨을 때 (예: `/catalog/index`로 바꿨을 때) 탬플릿들은 더이상 알맞게 링크되지 않습니다. 반전된 url 매핑을 사용하는 것이 훨씬 유연하고 강력합니다.

### View (함수-기반의)

뷰는 HTTP 요청을 처리하고, 데이터베이스에서 요청된 데이터를 가져오고, HTML 탬플릿을 이용해서 데이터를 HTML 페이지에 렌더링하고 그리고 생성된 HTML을 HTTP 응답으로 반환하여 사용자들에게 페이지를 보여주는 함수입니다. 색인(index) 뷰는 이 구조(model)를 따라갑니다 — 이것은 데이터베이스 안에 있는`Book`, `BookInstance`, 사용 가능한 `BookInstance` 그리고 `Author` 레코드들의 개수에 대한 정보를 가져오고, 그 정보를 디스플레이(display)를 위해 탬플릿으로 전달합니다.

**catalog/views.py** 를 열어서, 파일이 이미 탬플릿과 데이터를 이용해 HTML 파일을 생성하는 [render()](https://docs.djangoproject.com/en/2.0/topics/http/shortcuts/#django.shortcuts.render) 바로가기 함수를 포함(import)하고 있음을 확인하세요.

```python
from django.shortcuts import render

# Create your views here.
```

파일의 하단에 아래 코드를 복사 붙여넣기 하세요.

```python
from catalog.models import Book, Author, BookInstance, Genre

def index(request):
    """View function for home page of site."""

    # Generate counts of some of the main objects
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    # Available books (status = 'a')
    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    # The 'all()' is implied by default.
    num_authors = Author.objects.count()

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)
```

첫번째 줄은 우리의 모든 뷰들 안에서 데이터에 접근하는 데 사용할 모델 클래스들을 포함(import)합니다.

view 함수의 첫번째 부분은 모델 클래스들에서 `objects.all()` 속성을 사용하는 레코드들의 개수를 가져옵니다. 이 함수는 또한 상태 필드에서 'a'(Available) 값을 가지고 있는 `BookInstance` 객체들의 목록도 가져옵니다. 이전 튜토리얼에서 모델 데이터에 접근하는 방법에 대한 더 많은 정보를 찾을 수 있습니다 : [Django Tutorial Part 3: Using models > Searching for records](/ko/docs/Learn/Server-side/Django/Models#Searching_for_records).

view 함수의 마지막에선 HTML 페이지를 생성하고 이 페이지를 응답으로서 반환하기 위해 `render()` 함수를 호출합니다. 이 바로가기(shortcut) 함수는 아주 일반적으로 사용되는 경우들을 간단히 하기 위해 여러 다른 함수들을 포함합니다. `render()` 함수는 아래 매개 변수들을 허용합니다:

- `HttpRequest`인 원본 `request` 객체.
- 데이터에 대한 플레이스홀더(placeholder)들을 갖고 있는 HTML 탬플릿.
- 파이썬 딕셔너리(dictionary)인, 플레이스홀더에 삽입할 데이터를 갖고 있는 `context`변수.

다음 섹션에서 탬플릿과 context 변수에 대해 더 다루도록 하겠습니다. 이제 탬플릿을 생성하여 사용자들에게 실제로 무언가를 표시해 봅시다!

### 탬플릿(Template)

탬플릿은 파일(HTML 페이지 같은)의 구조(structure)나 배치(layout)을 정의하는 텍스트 파일입니다. 탬플릿은 실제 내용물(content)를 나타내기 위해 플레이스홀더(placeholder)들을 사용합니다. 장고는 당신의 어플리케이션 안에서 'templates' 라고 이름지어진 경로 안에서 자동적으로 탬플릿들을 찾을 것입니다. 예를 들어서, 우리가 방금 추가한 색인(index) 뷰 안에서, `render()` 함수는 **/locallibrary/catalog/templates/** 경로 안에서** _index.html_ **_파일을 찾으려 할 것이고, 파일이 없다면 에러를 표시할 것입니다. 이것은 이전의 변경점들을 저장하고 브라우저에서 `127.0.0.1:8000`으로 접근해서 확인할 수 있습니다 - 이것은 다른 세부 사항들과 함께 상당히 직관적인 오류 메세지를 표시할 것입니다 : "`TemplateDoesNotExist at /catalog/`"._

> **참고:** **주의:** 프로젝트의 settings 파일에 기초해서, 장고는 여러 장소에서 탬플릿들을 찾아볼 것입니다. 기본적으로는 설치된 어플리케이션에서 검색합니다. 장고가 어떻게 탬플릿들을 찾는지, 그리고 어떤 탬플릿 양식(format)들을 지원하는지에 관해 여기([Templates](https://docs.djangoproject.com/en/2.0/topics/templates/) (Django docs))에서 찾아볼 수 있습니다.

#### 탬플릿 확장(extend)하기

색인(index) 팀플릿은 head 및 body를 위해 표준 HTML 마크업이 필요할 것입니다. 우리가 아직 생성하지 않은 사이트들의 다른 페이지들을 향한 링크를 걸기 위한 탐색(navigation) 섹션도 필요하고요. 그리고 소개 텍스트 및 책 데이터를 표시하는 섹션 또한 필요합니다. 대부분의 HTML과 탐색 구조는 사이트의 모든 페이지에서 동일할 것입니다. 모든 페이지마다 똑같은 코드를 복사하는 대신, 기본 템플릿을 선언하기 위해 장고 탬플릿 언어(Django templating language)를 사용하고, 탬플릿을 확장하여 각각의 페이지 마다 다른 부분들만을 대체(replace)할 수 있습니다.

아래 코드 조각은 **base_generic.html** 파일의 기본 탬플릿 샘플입니다. 이 샘플은 제목, 사이드바를 위한 섹션과 이름이 지정된 `block` 및 `endblock` 탬플릿 태그(굵게 표시)가 마크된 주요 내용(main contents)들이 포함된 일반적인 HTML을 포함합니다. 블럭(block)들을 비워두거나, 또는 탬플릿에서 파생된 페이지들을 렌더링할 때 사용할 기본 내용을 포함할 수 있습니다.

> **참고:** **주의:** 탬플릿 태그들은 목록을 반복하거나, 변수 값을 기반으로 조건부 연산을 수행하거나, 여타 다른 일들을 할 수 있는 함수입니다. 탬플릿 태그 외에도 탬플릿 구문(syntax)을 사용하면 view에서 탬플릿으로 전달된 변수들을 참조할 수 있고, 탬플릿 필터(filters)를 사용해서 변수의 형식을 지정할 수 있습니다(예를 들어, 문자열을 소문자로 변환).

```django
<!DOCTYPE html>
<html lang="en">
<head>
  {% block title %}<title>Local Library</title>{% endblock %}
</head>
<body>
  {% block sidebar %}<!-- insert default navigation text for every page -->{% endblock %}
  {% block content %}<!-- default content text (typically empty) -->{% endblock %}
</body>
</html>
```

특정한 view를 위해 탬플릿을 정의할 땐, 먼저 `extends` 탬플릿 태그를 이용하여 기본 탬플릿을 지정합니다 — 아래 코드 샘플을 참조하세요. 그리고 나서 기본 탬플릿에서와 같이 `block`/`endblock` 섹션들을 이용해서 대체할 탬플릿의 섹션들을 선언합니다(있을 경우).

예를 들어, 아래 코드 조각은 extends 탬플릿 태그의 사용 및 content 블럭(block)을 재정의하는 방법을 보여줍니다. 생성된 HTML은 기본 탬플릿에서 정의된 코드와 구조를 포함할 것입니다(`title` 블럭에서 정의한 기본 내용은 포함하지만, 기본 `contents` 블럭 대신 새로운 `contents` 블럭 포함).

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>Welcome to LocalLibrary, a website developed by <em>Mozilla Developer Network</em>!</p>
{% endblock %}
```

#### LocalLibrary 기본 탬플릿

우리는 아래 코드 조각을 LocalLibrary 웹사이트의 베이스 탬플릿으로 사용할 것입니다. 보시는 바와 같이, 이것은 HTML 코드를 조금 포함하고 `title`, `sidebar` 그리고 `content` 블럭을 정의합니다. 우리는 기본 제목과 모든 책들 및 저자들에 대한 링크를 갖고 있는 기본 사이드바를 갖고 있습니다. 둘 다 미래에 쉽게 변경하기 위해 블럭들 안에 묶여 있습니다.

> **참고:** **주의**: 우리는 또한 두 개의 추가적인 탬플릿 태그를 소개합니다: `url` 과 `load static`. 이 태그들은 아래 섹션들에서 설명될 것입니다.

새로운 파일 **base_generic.html** 을 **/locallibrary/catalog/templates/_base_generic.html_** 경로 안에 생성해서 아래 코드를 파일에 복사 붙여넣기 하세요:

```django
<!doctype html>
<html lang="en">
<head>
  {% block title %}<title>Local Library</title>{% endblock %}
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <!-- Add additional CSS in static file -->
  {% load static %}
  <link rel="stylesheet" href="{% static 'css/styles.css' %}">
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2">
      {% block sidebar %}
        <ul class="sidebar-nav">
          <li><a href="{% url 'index' %}">Home</a></li>
          <li><a href="">All books</a></li>
          <li><a href="">All authors</a></li>
        </ul>
     {% endblock %}
      </div>
      <div class="col-sm-10 ">{% block content %}{% endblock %}</div>
    </div>
  </div>
</body>
</html>
```

탬플릿에는 HTML 페이지의 레이아웃과 프리젠테이션을 개선하기 위한 [Bootstrap](http://getbootstrap.com/) 의 CSS가 포함되어 있습니다. 부스트스트랩(또는 다른 클라이언트-사이드 웹 프레임워크)를 사용해서 서로 다른 크기의 화면에서도 잘 표시되는 매력적인 페이지를 빠르게 만들 수 있습니다.

또한 기본 탬플릿은 추가적인 꾸미기(styling)를 제공하는 로컬 css 파일(styles.css)을 참조합니다. **styles.css** 파일을 **/locallibrary/catalog/static/css/** 경로 안에 생성하고 아래 코드를 파일 안에 복사 붙여넣기 하세요:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### 색인(index) 탬플릿

새로운 HTML 파일 **index.html** 을 **/locallibrary/catalog/templates/** 경로 안에 생성해서 아래 코드를 파일 안에 복사 붙여넣기 하세요. 보시는 바와 같이 첫째 행에서 우리의 기본 탬플릿을 확장하고, 탬플릿의 기본 `content` 블럭을 새로운 블럭으로 대체합니다.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>Welcome to LocalLibrary, a website developed by <em>Mozilla Developer Network</em>!</p>
  <h2>Dynamic content</h2>
  <p>The library has the following record counts:</p>
  <ul>
    <li><strong>Books:</strong> \{{ num_books }}</li>
    <li><strong>Copies:</strong> \{{ num_instances }}</li>
    <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
    <li><strong>Authors:</strong> \{{ num_authors }}</li>
  </ul>
{% endblock %}
```

동적 콘텐츠 섹션에서 우리는 우리가 포함하고 싶은 view의 정보를 위한 플레이스홀더(탬플릿 변수)를 선언합니다. 이 변수들은 코드 샘플에서 굵게 표시된 것과 같이 이중 중괄호로(핸들 바)로 묶입니다.

> **참고:** **주의:** 탬플릿 변수와 탬플릿 태그(함수)들을 쉽게 알 수 있습니다 - 변수들은 이중 중괄호로 감싸여져 있고(`\{{ num_books }}`) , 태그들은 퍼센트 기호와 단일 중괄호로 감싸여 있습니다(`{% extends "base_generic.html" %}`).

여기서 주의해야 할 중요한 것은 변수들의 이름은 열쇠(key)들로 정해진다는 것입니다. 이 열쇠(key)들은 우리의 view의 `render()`함수 안의 `context` 사전(dictionary)로 전달하는 열쇠입니다(아래를 확인하세요). 변수들은 탬플릿이 렌더링 될 때 그것들과 연관된 값들로 대체될 것입니다.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Templates 에 정적 파일 참조하기(referencing)

당신의 프로젝트는 자바스크립트, CSS 그리고 이미지를 포함하는 정적 리소스들을 사용할 가능성이 높습니다. 이 파일들의 위치가 알 수 없기 때문에(또는 바뀔 수 있기 때문에), 장고는 `STATIC_URL` 전역 설정을 기준으로 탬플릿에서의 위치를 특정할 수 있도록 합니다. 기본 뼈대 웹사이트(skeleton website)는 `STATIC_URL`의 값을 '`/static/`'으로 설정하지만, 당신은 이것들을 콘텐츠 전달 네트워크(content delivery network)나 다른 곳에서 호스트할 수도 있습니다.

아래 코드 샘플처럼, 탬플릿 안에서 당신은 먼저 탬플릿 라이브러리를 추가하기 위해 "static"을 지정하는 `load` 탬플릿 태그를 호출합니다. 그러고 나서 `static` 탬플릿 태그를 사용할 수 있고 관련 URL을 요구되는 파일에 지정할 수 있습니다.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

비슷한 방법으로 이미지를 페이지에 추가할 수 있습니다. 예를 들어:

```django
{% load static %}
<img
  src="{% static 'catalog/images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> **참고:** **주의**: 위의 샘플은 파일들의 위치를 특정하지만, 장고는 기본적으로 파일을 제공하지 않습니다. 우리는 우리가 웹사이트 뼈대를 생성했을 때([created the website skeleton](/ko/docs/Learn/Server-side/Django/skeleton_website)) 전역 URL 매퍼(/locallibrary/locallibrary/urls.py)를 수정하여 개발 웹 서버가 파일을 제공하도록 설정했습니다만, 제품화되었을(in production)때도 파일을 제공할 수 있어야 합니다. 이것에 관해 차후에 다루겠습니다.

정적 파일들로 작업하는 것에 대한 더 많은 정보는 장고 문서 안의 [Managing static files](https://docs.djangoproject.com/en/2.0/howto/static-files/) 를 참고하세요.

#### URL 링크하기(Linking to URLs)

위의 기본 탬플릿은 `url` 탬플릿 태그를 소개했습니다.

```python
<li><a href="{% url 'index' %}">Home</a></li>
```

이 태그는 **urls.py**에서 호출된 `path()` 함수의 이름 및 연관된 view가 그 함수에서 수신받을 모든 인자들을 위한 값들을 허용하고, 리소스에 링크하는 데 사용할 수 있는 URL을 반환합니다 .

#### 탬플릿을 찾을 수 있는 곳 설정하기

탬플릿 폴더 안에서 탬플릿을 찾아볼 수 있도록 장고에게 위치를 가르쳐 주어야 합니다. 그것을 하기 위해서, 아래 코드 샘플에 굵게 표시된 것 처럼 **settings.py** 파일을 수정하여 TEMPLATES 객체에 templates 경로(dir)를 추가하세요.

```
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

## 어떻게 보일까요?

이 시점에서 우리는 색인(index) 페이지를 나타내기 위해 필요한 모든 요소들을 생성했습니다. 서버를 실행하고 (`python3 manage.py runserver`) 브라우저에서 <http://127.0.0.1:8000/>으로 이동하세요. 모든 것이 알맞게 설정되었다면, 당신의 사이트는 아래 스크린샷과 같이 보여야 합니다.

![Index page for LocalLibrary website](index_page_ok.png)

> **참고:** **주의:** All books와 All authors 링크들에 대한 경로, 뷰 그리고 탬플릿들이 정의되지 않았기 때문에 그 링크들은 작동하지 않을 것입니다. 우리는 단지 `base_generic.html` 탬플릿 안에 그 링크들을 위한 플레이스홀더(placeholder)들을 삽입했을 뿐입니다.

## 도전 과제

모델 쿼리, 뷰 그리고 탬플릿들과의 친밀함을 시험할 수 있는 두 가지 임무가 있습니다.

1. LocalLibrary 기본 탬플릿([base template](#The_LocalLibrary_base_template))에는 `title` 블록이 정의되어 있습니다. 색인 탬플릿([index template](#The_index_template)) 안에 이 블록을 덮어쓰기하고 페이지를 위한 새로운 제목을 만들어 보세요.

   > **참고:** **힌트:** [Extending templates](#Extending_templates) 섹션은 블럭(block)을 생성하고 다른 탬플릿에서 블럭을 확장(extend)하는 방법을 설명합니다.

2. 대소문자 구분 없이 특정한 단어를 포함하는 장르와 책들의 개수(count)를 생성하도록 [view](<#View_(function-based)>) 를 수정하고, 결과를 `context`에 전달해 보세요. 이것은 `num_books`와 `num_instances_available`을 생성하고 사용하는 것과 비슷한 방법으로 달성할 수 있습니다. 그리고 나서 이 변수들을 포함시키기 위해 [index template](#The_index_template) 를 업데이트 하세요.

## 요약

이제 우리의 사이트를 위한 홈 페이지를 생성했습니다 — 데이터베이스의 여러 레코드들을 표시하고 아직 생성되지 않은 페이지로 링크하는 HTML 페이지 입니다. 그 과정에서 우리는 url 매퍼, view, 모델을 이용한 데이터베이스 쿼리, view에서 탬플릿으로의 정보 전달 그리고 탬플릿의 생성과 확장에 관한 기본적인 정보를 배웠습니다.

다음 글에서는 이 지식들을 토대로 우리 웹사이트의 나머지 네 개의 페이지들을 생성할 것입니다.

## See also

- [Writing your first Django app, part 3: Views and Templates](https://docs.djangoproject.com/en/2.0/intro/tutorial03/) (Django docs)
- [URL dispatcher](https://docs.djangoproject.com/en/2.0/topics/http/urls/) (Django docs)
- [View functions](https://docs.djangoproject.com/en/2.0/topics/http/views/) (DJango docs)
- [Templates](https://docs.djangoproject.com/en/2.0/topics/templates/) (Django docs)
- [Managing static files](https://docs.djangoproject.com/en/2.0/howto/static-files/) (Django docs)
- [Django shortcut functions](https://docs.djangoproject.com/en/2.0/topics/http/shortcuts/#django.shortcuts.render) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}
