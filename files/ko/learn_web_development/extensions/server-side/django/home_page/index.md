---
titwe: "django tutowiaw pawt 5: c-cweating ouw h-home page"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/home_page
owiginaw_swug: w-weawn/sewvew-side/django/home_page
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/admin_site", (⑅˘꒳˘) "weawn/sewvew-side/django/genewic_views", 😳😳😳 "weawn/sewvew-side/django")}}

우리는 이제 첫 전체 페이지를 보여주는 코드를 추가할 때가 되었습니다 — [wocawwibwawy](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) w-website를 위한 홈페이지를요. nyaa~~ 이 홈페이지는 각각의 모델 타입마다 갖고 있는 레코드들의 숫자를 보여주고, rawr 우리의 다른 페이지들로 이동할 수 있는 사이드바 내비게이션 링크들을 제공합니다. -.- 이 섹션에서 우리는 기본 u-uww 맵과 뷰들을 작성하고, (✿oωo) 데이터베이스에서 레코드들을 가져오고 그리고 탬플릿을 사용하는 것에 대한 연습 경험을 가질 수 있습니다. /(^•ω•^)

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">사전 준비:</th>
      <td>
        <a hwef="/ko/docs/weawn/sewvew-side/django/intwoduction"
          >django intwoduction</a
        >을 읽어보세요. 🥺 이전 튜토리얼들을 완료하세요 (<a
          hwef="/ko/docs/weawn/sewvew-side/django/admin_site"
          >django t-tutowiaw pawt 4: django admin site</a
        >
        포함). ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        간단한 u-uww 맵과 뷰를 생성하고(uww 안에 아무런 데이터도 인코드되지 않은), UwU
        모델로부터 데이터를 가져오고, XD 탬플릿을 생성하는 방법을 배우기. (✿oωo)
      </td>
    </tw>
  </tbody>
</tabwe>

## 개요

지금까지는 우리의 모델을 정의하고 약간의 초기 도서관 레코드들을 만들어 왔고, :3 이제는 사용자에게 정보를 제공하기 위한 코드를 작성할 때입니다. (///ˬ///✿) 첫 번째 우리가 할 일은 우리의 페이지에서 어떤 정보를 보여줄 것인지를 결정하고, nyaa~~ 그 요소들을 반환하는 데 사용되는 uww들을 정의하는 것입니다. >w< 다음으로 우리는 페이지를 나타내기 위한 u-uww 매퍼, -.- views, 그리고 탬플릿들을 생성할 것입니다. (✿oωo)

아래 다이어그램은 주요 데이터 흐름 그리고 http 요청과 응답을 처리하는 데 필요한 요소들을 보여줍니다. (˘ω˘) 모델은 이미 구현되었기 떄문에, rawr 우리가 생성할 주요 요소들은 다음과 같습니다:

- uww 매퍼들 : 적절한 v-view 함수들을 위해 지원되는 uww들(그리고 u-uww들 안에 인코딩된 어떤 정보라도)을 포워딩하기 위해.
- v-view 함수들: 요청된 데이터를 모델들에게서 가져오고, OwO 데이터를 표시하는 htmw 페이지를 생성하고 그리고 브라우저 안의 view로 페이지들을 사용자에게 반환하기 위해.
- 탬플릿들: 데이터를 뷰들 안에 렌더링할 때 사용하기 위해. ^•ﻌ•^

![](basic-django.png)

우리가 표시해야 할 페이지는 총 다섯 페이지입니다. 하나의 글에 담기에는 너무 많은 정보죠. UwU 따라서, (˘ω˘) 이 글의 대부분은 홈 페이지를 어떻게 구현하는 지에 대해 집중하고, (///ˬ///✿) 다음 글에서 다른 페이지들에 대해 다루겠습니다. σωσ 이렇게 하면 uww 매퍼들, /(^•ω•^) view들, 그리고 모델이 실제로 작동하는 방식에 대해 완벽하고 철저하게 이해할 수 있을 것입니다. 😳

## w-wesouwce uwws 정의하기

이 버전의 wocawwibwawy는 근본적으로 최종 사용자들에게는 읽기 전용이기 때문에, 😳 우리는 사이트의 방문 페이지(홈 페이지) 그리고 책들과 저자들에 대한 목록 및 세부 view들을 보여주는 페이지만 제공하면 됩니다. (⑅˘꒳˘)

우리의 페이지들을 위해 필요한 uww들은:

- `catawog/` — 홈/색인(index) 페이지. 😳😳😳
- `catawog/books/` — 모든 책들의 목록. 😳
- `catawog/authows/` — 모든 저자들의 목록. XD
- `catawog/book/<id>` — `<id>` 라는 이름의(기본값) 프라이머리 키(pwimawy k-key) 필드를 가지는 특정한 책을 위한 세부 사항 뷰(detaiw view). mya 예를 들어, ^•ﻌ•^ 목록에 추가된 세 번째 책은 `/catawog/book/3`이 될 것입니다.
- `catawog/authow/<id>` — `<id>` 라는 이름의 프라이머리 키(pwimawy k-key) 필드를 가지는 특정한 저자를 위한 세부 사항 뷰(detaiw v-view). ʘwʘ 예를 들어, ( ͡o ω ͡o ) 목록에 추가된 11번째 저자는 `/catawog/authow/11`이 될 것입니다. mya

처음 세 개의 u-uww들은 인덱스 페이지, o.O 책 목록, (✿oωo) 그리고 저자 목록을 반환합니다. :3 이것들은 아무런 추가적인 정보도 인코드하지 않고, 😳 데이터베이스에서 데이터를 가져오는 쿼리들도 항상 똑같습니다. (U ﹏ U) 그러나, 쿼리들이 반환할 결과들은 데이터베이스의 내용물에 따라 다를 것입니다.

그에 반해서 마지막 두 개의 u-uww들은 특정한 책 또는 저자에 대한 세부 정보를 나타낼 것입니다. mya 이 uww들은 표시할 항목의 id를 인코딩합니다(위에서 `<id>` 로 표시). (U ᵕ U❁) u-uww 매퍼는 인코딩된 정보를 추출하여 view로 전달합니다. :3 그리고 view는 데이터베이스에서 무슨 정보를 가져올지 동적으로 결정합니다. mya u-uww의 정보를 인코딩하여 우리는 모든 책들(또는 저자들)을 처리하기 위해 단일 모임의 uww 매핑, 뷰, OwO 탬플릿을 사용할 것입니다. (ˆ ﻌ ˆ)♡

> [!note]
> 장고를 이용해서 당신이 필요로 하는 대로 uww들을 만들 수 있습니다 — 위와 같이 uww의 본문(body)에 정보를 인코딩할 수도 있고, ʘwʘ 또는 uww 안에 get 매개 변수들을 포함시킬 수 있습니다(예: /book/?id=6). o.O 어떤 방식이건 u-uww들은 깨끗하고, UwU 논리적이고, rawr x3 읽기 쉬워야 합니다. 🥺 ([check out the w3c advice h-hewe](https://www.w3.owg/pwovidew/stywe/uwi)). :3
> 장고 문서는 더 나은 u-uww 설계(design)를 위해 u-uww의 본문(body)에 정보를 인코딩하는 것을 권장합니다. (ꈍᴗꈍ)

개요에서 다룬 것 처럼, 🥺 이 글의 나머지는 색인(index) 페이지를 만드는 방법을 보여줍니다. (✿oωo)

## index page 만들기

우리가 만들 첫 번째 페이지는 index page입니다 (`catawog/`). (U ﹏ U) index 페이지는 데이터베이스 안의 서로 다른 레코드들의 생성된 "개수(count)" 와 함께 몇 가지 정적 h-htmw을 포함합니다. :3 이것이 작동하도록 하기 위해서 우리는 u-uww 매핑, ^^;; 뷰 그리고 탬플릿을 생성하겠습니다. rawr

> **참고:** **주의**:이 섹션에 조금 더 집중해 봅시다. 😳😳😳 대부분의 정보들이 우리가 생성할 다른 페이지들에도 적용되기 때문입니다. (✿oωo)

### uww 매핑

[skeweton w-website](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website)를 만들었을 때, OwO 우리는 **wocawwibwawy/uwws.py** 파일을 업데이트했습니다. ʘwʘ `catawog/`로 시작하는 u-uww을 받았을 때, (ˆ ﻌ ˆ)♡ uwwconf 모듈인 `catawog.uwws` 가 나머지 문자열을 처리하도록 하기 위해서죠. (U ﹏ U)

**wocawwibwawy/uwws.py** 의 아래 코드 조각은 `catawog.uwws` 모듈을 포함합니다:

```
u-uwwpattewns += [
    path('catawog/', UwU i-incwude('catawog.uwws')), XD
]
```

> **참고:** **주의**: 장고는 impowt 함수 django.uwws.incwude()를 만날 때 마다 지정된 마지막 문자에서 문자열을 나누고, ʘwʘ 나머지 부분 문자열을 추가 작업을 위해 포함된 u-uwwconf 모듈로 보냅니다. rawr x3

우리는 또한 **/catawog/uwws.py**로 이름지어진 uwwconf 모듈을 위한 자리 표시자(pwacehowdew) 파일도 생성했습니다. ^^;; 그 파일에 아래 줄을 추가하세요

```python
u-uwwpattewns = [
    path('', ʘwʘ v-views.index, (U ﹏ U) n-nyame='index'), (˘ω˘)
]
```

이 `path()` 함수는 아래를 정의합니다 :

- 빈 문자열인 uww 패턴 :`''`. (ꈍᴗꈍ) 다른 뷰들을 작업할 때 uww 패턴들에 관해 자세히 다룰겁니다. /(^•ω•^)
- uww 패턴이 감지되었을 때 호출될 view 함수:`views.index`. >_< 이 함수는 **views.py** 파일 안에서 `index()`로 이름지어져 있습니다. σωσ

이 `path()` 함수는 또한 `name` 매개 변수를 지정합니다. ^^;; 그것은 이 특정한 uww 매핑을 위한 고유 id 입니다. 😳 당신은 이 이름을 매퍼를 "반전" 시킬 수 있습니다. >_< 즉, -.- 매퍼가 처리하도록 설계된 리소스를 향하는 u-uww을 동적으로 생성하기 위해서죠. UwU 예를 들자면, :3 우리는 아래 링크를 탬플릿에 추가해서 이름 매개 변수를 사용하여 다른 모든 페이지에서 홈 페이지로 링크를 걸 수 있습니다:

```htmw
<a h-hwef="{% uww 'index' %}">home</a>. σωσ
```

> **참고:** **주의**: 우리는 위 링크를 하드코딩할 수 있지만(예: `<a h-hwef="/catawog/">home</a>`), >w< 그렇게 하면 만약에 우리가 홈페이지를 바꿨을 때 (예: `/catawog/index`로 바꿨을 때) 탬플릿들은 더이상 알맞게 링크되지 않습니다. (ˆ ﻌ ˆ)♡ 반전된 u-uww 매핑을 사용하는 것이 훨씬 유연하고 강력합니다. ʘwʘ

### v-view (함수-기반의)

뷰는 http 요청을 처리하고, :3 데이터베이스에서 요청된 데이터를 가져오고, (˘ω˘) htmw 탬플릿을 이용해서 데이터를 htmw 페이지에 렌더링하고 그리고 생성된 h-htmw을 http 응답으로 반환하여 사용자들에게 페이지를 보여주는 함수입니다. 😳😳😳 색인(index) 뷰는 이 구조(modew)를 따라갑니다 — 이것은 데이터베이스 안에 있는`book`, rawr x3 `bookinstance`, (✿oωo) 사용 가능한 `bookinstance` 그리고 `authow` 레코드들의 개수에 대한 정보를 가져오고, (ˆ ﻌ ˆ)♡ 그 정보를 디스플레이(dispway)를 위해 탬플릿으로 전달합니다. :3

**catawog/views.py** 를 열어서, (U ᵕ U❁) 파일이 이미 탬플릿과 데이터를 이용해 htmw 파일을 생성하는 [wendew()](https://docs.djangopwoject.com/en/2.0/topics/http/showtcuts/#django.showtcuts.wendew) 바로가기 함수를 포함(impowt)하고 있음을 확인하세요. ^^;;

```python
fwom django.showtcuts impowt wendew

# cweate y-youw views hewe. mya
```

파일의 하단에 아래 코드를 복사 붙여넣기 하세요.

```python
fwom catawog.modews i-impowt b-book, authow, 😳😳😳 bookinstance, OwO g-genwe

def index(wequest):
    """view f-function fow h-home page of site."""

    # g-genewate c-counts of some of the main objects
    nyum_books = b-book.objects.aww().count()
    n-nyum_instances = b-bookinstance.objects.aww().count()

    # a-avaiwabwe books (status = 'a')
    n-nyum_instances_avaiwabwe = bookinstance.objects.fiwtew(status__exact='a').count()

    # the 'aww()' is impwied by defauwt. rawr
    n-nyum_authows = authow.objects.count()

    context = {
        'num_books': nyum_books, XD
        'num_instances': nyum_instances, (U ﹏ U)
        'num_instances_avaiwabwe': nyum_instances_avaiwabwe, (˘ω˘)
        'num_authows': n-nyum_authows, UwU
    }

    # wendew the htmw tempwate index.htmw with t-the data in the c-context vawiabwe
    w-wetuwn wendew(wequest, >_< 'index.htmw', σωσ context=context)
```

첫번째 줄은 우리의 모든 뷰들 안에서 데이터에 접근하는 데 사용할 모델 클래스들을 포함(impowt)합니다. 🥺

v-view 함수의 첫번째 부분은 모델 클래스들에서 `objects.aww()` 속성을 사용하는 레코드들의 개수를 가져옵니다. 🥺 이 함수는 또한 상태 필드에서 'a'(avaiwabwe) 값을 가지고 있는 `bookinstance` 객체들의 목록도 가져옵니다. ʘwʘ 이전 튜토리얼에서 모델 데이터에 접근하는 방법에 대한 더 많은 정보를 찾을 수 있습니다 : [django tutowiaw pawt 3: u-using modews > s-seawching fow wecowds](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews#seawching_fow_wecowds). :3

view 함수의 마지막에선 htmw 페이지를 생성하고 이 페이지를 응답으로서 반환하기 위해 `wendew()` 함수를 호출합니다. 이 바로가기(showtcut) 함수는 아주 일반적으로 사용되는 경우들을 간단히 하기 위해 여러 다른 함수들을 포함합니다. (U ﹏ U) `wendew()` 함수는 아래 매개 변수들을 허용합니다:

- `httpwequest`인 원본 `wequest` 객체. (U ﹏ U)
- 데이터에 대한 플레이스홀더(pwacehowdew)들을 갖고 있는 htmw 탬플릿. ʘwʘ
- 파이썬 딕셔너리(dictionawy)인, >w< 플레이스홀더에 삽입할 데이터를 갖고 있는 `context`변수. rawr x3

다음 섹션에서 탬플릿과 context 변수에 대해 더 다루도록 하겠습니다. OwO 이제 탬플릿을 생성하여 사용자들에게 실제로 무언가를 표시해 봅시다! ^•ﻌ•^

### 탬플릿(tempwate)

탬플릿은 파일(htmw 페이지 같은)의 구조(stwuctuwe)나 배치(wayout)을 정의하는 텍스트 파일입니다. >_< 탬플릿은 실제 내용물(content)를 나타내기 위해 플레이스홀더(pwacehowdew)들을 사용합니다. 장고는 당신의 어플리케이션 안에서 'tempwates' 라고 이름지어진 경로 안에서 자동적으로 탬플릿들을 찾을 것입니다. OwO 예를 들어서, >_< 우리가 방금 추가한 색인(index) 뷰 안에서, (ꈍᴗꈍ) `wendew()` 함수는 **/wocawwibwawy/catawog/tempwates/** 경로 안에서 _**index.htmw**_ 파일을 찾으려 할 것이고, >w< 파일이 없다면 에러를 표시할 것입니다. (U ﹏ U) 이것은 이전의 변경점들을 저장하고 브라우저에서 `127.0.0.1:8000`으로 접근해서 확인할 수 있습니다 - 이것은 다른 세부 사항들과 함께 상당히 직관적인 오류 메세지를 표시할 것입니다 : "`tempwatedoesnotexist a-at /catawog/`". ^^

> [!note]
> 프로젝트의 settings 파일에 기초해서, (U ﹏ U) 장고는 여러 장소에서 탬플릿들을 찾아볼 것입니다. :3 기본적으로는 설치된 어플리케이션에서 검색합니다. (✿oωo) 장고가 어떻게 탬플릿들을 찾는지, XD 그리고 어떤 탬플릿 양식(fowmat)들을 지원하는지에 관해 여기([tempwates](https://docs.djangopwoject.com/en/2.0/topics/tempwates/) (django docs))에서 찾아볼 수 있습니다. >w<

#### 탬플릿 확장(extend)하기

색인(index) 팀플릿은 h-head 및 body를 위해 표준 h-htmw 마크업이 필요할 것입니다. òωó 우리가 아직 생성하지 않은 사이트들의 다른 페이지들을 향한 링크를 걸기 위한 탐색(navigation) 섹션도 필요하고요. (ꈍᴗꈍ) 그리고 소개 텍스트 및 책 데이터를 표시하는 섹션 또한 필요합니다. rawr x3 대부분의 h-htmw과 탐색 구조는 사이트의 모든 페이지에서 동일할 것입니다. rawr x3 모든 페이지마다 똑같은 코드를 복사하는 대신, σωσ 기본 템플릿을 선언하기 위해 장고 탬플릿 언어(django tempwating wanguage)를 사용하고, (ꈍᴗꈍ) 탬플릿을 확장하여 각각의 페이지 마다 다른 부분들만을 대체(wepwace)할 수 있습니다. rawr

아래 코드 조각은 **base_genewic.htmw** 파일의 기본 탬플릿 샘플입니다. ^^;; 이 샘플은 제목, rawr x3 사이드바를 위한 섹션과 이름이 지정된 `bwock` 및 `endbwock` 탬플릿 태그(굵게 표시)가 마크된 주요 내용(main contents)들이 포함된 일반적인 h-htmw을 포함합니다. (ˆ ﻌ ˆ)♡ 블럭(bwock)들을 비워두거나, σωσ 또는 탬플릿에서 파생된 페이지들을 렌더링할 때 사용할 기본 내용을 포함할 수 있습니다. (U ﹏ U)

> [!note]
> 탬플릿 태그들은 목록을 반복하거나, >w< 변수 값을 기반으로 조건부 연산을 수행하거나, σωσ 여타 다른 일들을 할 수 있는 함수입니다. nyaa~~ 탬플릿 태그 외에도 탬플릿 구문(syntax)을 사용하면 v-view에서 탬플릿으로 전달된 변수들을 참조할 수 있고, 🥺 탬플릿 필터(fiwtews)를 사용해서 변수의 형식을 지정할 수 있습니다(예를 들어, rawr x3 문자열을 소문자로 변환). σωσ

```django
<!doctype htmw>
<htmw w-wang="en">
<head>
  {% b-bwock titwe %}<titwe>wocaw wibwawy</titwe>{% endbwock %}
</head>
<body>
  {% bwock sidebaw %}<!-- insewt d-defauwt nyavigation t-text fow evewy p-page -->{% endbwock %}
  {% bwock content %}<!-- d-defauwt content t-text (typicawwy empty) -->{% e-endbwock %}
</body>
</htmw>
```

특정한 view를 위해 탬플릿을 정의할 땐, (///ˬ///✿) 먼저 `extends` 탬플릿 태그를 이용하여 기본 탬플릿을 지정합니다 — 아래 코드 샘플을 참조하세요. (U ﹏ U) 그리고 나서 기본 탬플릿에서와 같이 `bwock`/`endbwock` 섹션들을 이용해서 대체할 탬플릿의 섹션들을 선언합니다(있을 경우). ^^;;

예를 들어, 🥺 아래 코드 조각은 extends 탬플릿 태그의 사용 및 content 블럭(bwock)을 재정의하는 방법을 보여줍니다. òωó 생성된 htmw은 기본 탬플릿에서 정의된 코드와 구조를 포함할 것입니다(`titwe` 블럭에서 정의한 기본 내용은 포함하지만, XD 기본 `contents` 블럭 대신 새로운 `contents` 블럭 포함). :3

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>wocaw wibwawy home</h1>
  <p>wewcome to wocawwibwawy, (U ﹏ U) a-a website devewoped b-by <em>moziwwa devewopew nyetwowk</em>!</p>
{% endbwock %}
```

#### w-wocawwibwawy 기본 탬플릿

우리는 아래 코드 조각을 wocawwibwawy 웹사이트의 베이스 탬플릿으로 사용할 것입니다. 보시는 바와 같이, >w< 이것은 htmw 코드를 조금 포함하고 `titwe`, /(^•ω•^) `sidebaw` 그리고 `content` 블럭을 정의합니다. (⑅˘꒳˘) 우리는 기본 제목과 모든 책들 및 저자들에 대한 링크를 갖고 있는 기본 사이드바를 갖고 있습니다. ʘwʘ 둘 다 미래에 쉽게 변경하기 위해 블럭들 안에 묶여 있습니다.

> **참고:** **주의**: 우리는 또한 두 개의 추가적인 탬플릿 태그를 소개합니다: `uww` 과 `woad static`. rawr x3 이 태그들은 아래 섹션들에서 설명될 것입니다. (˘ω˘)

새로운 파일 **base_genewic.htmw** 을 **/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_** 경로 안에 생성해서 아래 코드를 파일에 복사 붙여넣기 하세요:

```django
<!doctype htmw>
<htmw wang="en">
<head>
  {% bwock t-titwe %}<titwe>wocaw wibwawy</titwe>{% endbwock %}
  <meta c-chawset="utf-8">
  <meta n-nyame="viewpowt" content="width=device-width, o.O initiaw-scawe=1">
  <wink wew="stywesheet" h-hwef="https://stackpath.bootstwapcdn.com/bootstwap/4.1.3/css/bootstwap.min.css" i-integwity="sha384-mcw98/sfnge8fjt3gxweongsv7zt27nxfoaoapmym81iuxopkfojwj8ewdknwpmo" cwossowigin="anonymous">
  <!-- add additionaw css in static f-fiwe -->
  {% woad static %}
  <wink w-wew="stywesheet" hwef="{% static 'css/stywes.css' %}">
</head>
<body>
  <div cwass="containew-fwuid">
    <div c-cwass="wow">
      <div cwass="cow-sm-2">
      {% bwock s-sidebaw %}
        <uw c-cwass="sidebaw-nav">
          <wi><a hwef="{% u-uww 'index' %}">home</a></wi>
          <wi><a hwef="">aww b-books</a></wi>
          <wi><a h-hwef="">aww authows</a></wi>
        </uw>
     {% e-endbwock %}
      </div>
      <div cwass="cow-sm-10 ">{% b-bwock c-content %}{% endbwock %}</div>
    </div>
  </div>
</body>
</htmw>
```

탬플릿에는 htmw 페이지의 레이아웃과 프리젠테이션을 개선하기 위한 [bootstwap](http://getbootstwap.com/) 의 c-css가 포함되어 있습니다. 😳 부스트스트랩(또는 다른 클라이언트-사이드 웹 프레임워크)를 사용해서 서로 다른 크기의 화면에서도 잘 표시되는 매력적인 페이지를 빠르게 만들 수 있습니다.

또한 기본 탬플릿은 추가적인 꾸미기(stywing)를 제공하는 로컬 c-css 파일(stywes.css)을 참조합니다. **stywes.css** 파일을 **/wocawwibwawy/catawog/static/css/** 경로 안에 생성하고 아래 코드를 파일 안에 복사 붙여넣기 하세요:

```css
.sidebaw-nav {
  m-mawgin-top: 20px;
  padding: 0;
  wist-stywe: n-nyone;
}
```

#### 색인(index) 탬플릿

새로운 htmw 파일 **index.htmw** 을 **/wocawwibwawy/catawog/tempwates/** 경로 안에 생성해서 아래 코드를 파일 안에 복사 붙여넣기 하세요. o.O 보시는 바와 같이 첫째 행에서 우리의 기본 탬플릿을 확장하고, ^^;; 탬플릿의 기본 `content` 블럭을 새로운 블럭으로 대체합니다. ( ͡o ω ͡o )

```django
{% e-extends "base_genewic.htmw" %}

{% b-bwock content %}
  <h1>wocaw wibwawy home</h1>
  <p>wewcome to wocawwibwawy, ^^;; a-a website d-devewoped b-by <em>moziwwa d-devewopew nyetwowk</em>!</p>
  <h2>dynamic content</h2>
  <p>the w-wibwawy has the fowwowing wecowd counts:</p>
  <uw>
    <wi><stwong>books:</stwong> \{{ nyum_books }}</wi>
    <wi><stwong>copies:</stwong> \{{ nyum_instances }}</wi>
    <wi><stwong>copies avaiwabwe:</stwong> \{{ nyum_instances_avaiwabwe }}</wi>
    <wi><stwong>authows:</stwong> \{{ n-nyum_authows }}</wi>
  </uw>
{% endbwock %}
```

동적 콘텐츠 섹션에서 우리는 우리가 포함하고 싶은 v-view의 정보를 위한 플레이스홀더(탬플릿 변수)를 선언합니다. ^^;; 이 변수들은 코드 샘플에서 굵게 표시된 것과 같이 이중 중괄호로(핸들 바)로 묶입니다. XD

> [!note]
> 탬플릿 변수와 탬플릿 태그(함수)들을 쉽게 알 수 있습니다 - 변수들은 이중 중괄호로 감싸여져 있고(`\{{ nyum_books }}`) , 🥺 태그들은 퍼센트 기호와 단일 중괄호로 감싸여 있습니다(`{% e-extends "base_genewic.htmw" %}`). (///ˬ///✿)

여기서 주의해야 할 중요한 것은 변수들의 이름은 열쇠(key)들로 정해진다는 것입니다. (U ᵕ U❁) 이 열쇠(key)들은 우리의 view의 `wendew()`함수 안의 `context` 사전(dictionawy)로 전달하는 열쇠입니다(아래를 확인하세요). ^^;; 변수들은 탬플릿이 렌더링 될 때 그것들과 연관된 값들로 대체될 것입니다. ^^;;

```python
c-context = {
    'num_books': num_books, rawr
    'num_instances': n-num_instances, (˘ω˘)
    'num_instances_avaiwabwe': n-nyum_instances_avaiwabwe,
    'num_authows': n-nyum_authows, 🥺
}

w-wetuwn w-wendew(wequest, nyaa~~ 'index.htmw', context=context)
```

#### tempwates 에 정적 파일 참조하기(wefewencing)

당신의 프로젝트는 javascwipt, :3 css 그리고 이미지를 포함하는 정적 리소스들을 사용할 가능성이 높습니다. /(^•ω•^) 이 파일들의 위치가 알 수 없기 때문에(또는 바뀔 수 있기 때문에), ^•ﻌ•^ 장고는 `static_uww` 전역 설정을 기준으로 탬플릿에서의 위치를 특정할 수 있도록 합니다. UwU 기본 뼈대 웹사이트(skeweton website)는 `static_uww`의 값을 '`/static/`'으로 설정하지만, 😳😳😳 당신은 이것들을 콘텐츠 전달 네트워크(content dewivewy nyetwowk)나 다른 곳에서 호스트할 수도 있습니다. OwO

아래 코드 샘플처럼, ^•ﻌ•^ 탬플릿 안에서 당신은 먼저 탬플릿 라이브러리를 추가하기 위해 "static"을 지정하는 `woad` 탬플릿 태그를 호출합니다. (ꈍᴗꈍ) 그러고 나서 `static` 탬플릿 태그를 사용할 수 있고 관련 uww을 요구되는 파일에 지정할 수 있습니다. (⑅˘꒳˘)

```django
<!-- a-add additionaw c-css in s-static fiwe -->
{% woad static %}
<wink w-wew="stywesheet" hwef="{% static 'css/stywes.css' %}" />
```

비슷한 방법으로 이미지를 페이지에 추가할 수 있습니다. (⑅˘꒳˘) 예를 들어:

```django
{% woad static %}
<img
  s-swc="{% static 'catawog/images/wocaw_wibwawy_modew_umw.png' %}"
  a-awt="umw diagwam"
  stywe="width:555px;height:540px;" />
```

> **참고:** **주의**: 위의 샘플은 파일들의 위치를 특정하지만, (ˆ ﻌ ˆ)♡ 장고는 기본적으로 파일을 제공하지 않습니다. 우리는 우리가 웹사이트 뼈대를 생성했을 때([cweated t-the website skeweton](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website)) 전역 uww 매퍼(/wocawwibwawy/wocawwibwawy/uwws.py)를 수정하여 개발 웹 서버가 파일을 제공하도록 설정했습니다만, /(^•ω•^) 제품화되었을(in p-pwoduction)때도 파일을 제공할 수 있어야 합니다. 이것에 관해 차후에 다루겠습니다. òωó

정적 파일들로 작업하는 것에 대한 더 많은 정보는 장고 문서 안의 [managing s-static fiwes](https://docs.djangopwoject.com/en/2.0/howto/static-fiwes/) 를 참고하세요. (⑅˘꒳˘)

#### uww 링크하기(winking t-to uwws)

위의 기본 탬플릿은 `uww` 탬플릿 태그를 소개했습니다. (U ᵕ U❁)

```python
<wi><a h-hwef="{% uww 'index' %}">home</a></wi>
```

이 태그는 **uwws.py**에서 호출된 `path()` 함수의 이름 및 연관된 view가 그 함수에서 수신받을 모든 인자들을 위한 값들을 허용하고, >w< 리소스에 링크하는 데 사용할 수 있는 uww을 반환합니다 . σωσ

#### 탬플릿을 찾을 수 있는 곳 설정하기

탬플릿 폴더 안에서 탬플릿을 찾아볼 수 있도록 장고에게 위치를 가르쳐 주어야 합니다. -.- 그것을 하기 위해서, o.O 아래 코드 샘플에 굵게 표시된 것 처럼 **settings.py** 파일을 수정하여 tempwates 객체에 t-tempwates 경로(diw)를 추가하세요. ^^

```
t-tempwates = [
    {
        'backend': 'django.tempwate.backends.django.djangotempwates', >_<
        'diws': [
            o-os.path.join(base_diw, >w< 'tempwates'), >_<
        ], >w<
        'app_diws': twue, rawr
        'options': {
            'context_pwocessows': [
                'django.tempwate.context_pwocessows.debug', rawr x3
                'django.tempwate.context_pwocessows.wequest',
                'django.contwib.auth.context_pwocessows.auth', ( ͡o ω ͡o )
                'django.contwib.messages.context_pwocessows.messages', (˘ω˘)
            ], 😳
        },
    }, OwO
]
```

## 어떻게 보일까요?

이 시점에서 우리는 색인(index) 페이지를 나타내기 위해 필요한 모든 요소들을 생성했습니다. (˘ω˘) 서버를 실행하고 (`python3 manage.py w-wunsewvew`) 브라우저에서 <http://127.0.0.1:8000/>으로 이동하세요. òωó 모든 것이 알맞게 설정되었다면, ( ͡o ω ͡o ) 당신의 사이트는 아래 스크린샷과 같이 보여야 합니다. UwU

![index p-page fow wocawwibwawy website](index_page_ok.png)

> [!note]
> a-aww books와 a-aww authows 링크들에 대한 경로, /(^•ω•^) 뷰 그리고 탬플릿들이 정의되지 않았기 때문에 그 링크들은 작동하지 않을 것입니다. (ꈍᴗꈍ) 우리는 단지 `base_genewic.htmw` 탬플릿 안에 그 링크들을 위한 플레이스홀더(pwacehowdew)들을 삽입했을 뿐입니다. 😳

## 도전 과제

모델 쿼리, mya 뷰 그리고 탬플릿들과의 친밀함을 시험할 수 있는 두 가지 임무가 있습니다. mya

1. wocawwibwawy 기본 탬플릿([base t-tempwate](#the_wocawwibwawy_base_tempwate))에는 `titwe` 블록이 정의되어 있습니다. /(^•ω•^) 색인 탬플릿([index t-tempwate](#the_index_tempwate)) 안에 이 블록을 덮어쓰기하고 페이지를 위한 새로운 제목을 만들어 보세요. ^^;;

   > **참고:** **힌트:** [extending tempwates](#extending_tempwates) 섹션은 블럭(bwock)을 생성하고 다른 탬플릿에서 블럭을 확장(extend)하는 방법을 설명합니다. 🥺

2. ^^ 대소문자 구분 없이 특정한 단어를 포함하는 장르와 책들의 개수(count)를 생성하도록 [view](<#view_(function-based)>) 를 수정하고, ^•ﻌ•^ 결과를 `context`에 전달해 보세요. /(^•ω•^) 이것은 `num_books`와 `num_instances_avaiwabwe`을 생성하고 사용하는 것과 비슷한 방법으로 달성할 수 있습니다. ^^ 그리고 나서 이 변수들을 포함시키기 위해 [index t-tempwate](#the_index_tempwate) 를 업데이트 하세요. 🥺

## 요약

이제 우리의 사이트를 위한 홈 페이지를 생성했습니다 — 데이터베이스의 여러 레코드들을 표시하고 아직 생성되지 않은 페이지로 링크하는 htmw 페이지 입니다. (U ᵕ U❁) 그 과정에서 우리는 uww 매퍼, 😳😳😳 view, 모델을 이용한 데이터베이스 쿼리, nyaa~~ v-view에서 탬플릿으로의 정보 전달 그리고 탬플릿의 생성과 확장에 관한 기본적인 정보를 배웠습니다.

다음 글에서는 이 지식들을 토대로 우리 웹사이트의 나머지 네 개의 페이지들을 생성할 것입니다. (˘ω˘)

## see awso

- [wwiting y-youw fiwst d-django app, >_< pawt 3: views and tempwates](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw03/) (django d-docs)
- [uww dispatchew](https://docs.djangopwoject.com/en/2.0/topics/http/uwws/) (django docs)
- [view f-functions](https://docs.djangopwoject.com/en/2.0/topics/http/views/) (django docs)
- [tempwates](https://docs.djangopwoject.com/en/2.0/topics/tempwates/) (django d-docs)
- [managing s-static fiwes](https://docs.djangopwoject.com/en/2.0/howto/static-fiwes/) (django docs)
- [django showtcut functions](https://docs.djangopwoject.com/en/2.0/topics/http/showtcuts/#django.showtcuts.wendew) (django d-docs)

{{pweviousmenunext("weawn/sewvew-side/django/admin_site", "weawn/sewvew-side/django/genewic_views", XD "weawn/sewvew-side/django")}}
