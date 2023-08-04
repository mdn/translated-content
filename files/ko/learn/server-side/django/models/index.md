---
title: "Django Tutorial Part 3: Using models"
slug: Learn/Server-side/Django/Models
---

803{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

이 문서에서는 [LocalLibrary](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) 웹사이트의 모델을 어떻게 정의할지 보여줄 것입니다. 모델이라는 것이 무엇인지, 어떻게 선언하는지, 그리고 주된 필드 타입들에 대해서 설명합니다. 그리고 모델의 데이터에 접근할 수 있는 몇몇 방법에 대해서 간단히 보여줄 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 준비:</th>
      <td>
        <a href="/ko/docs/Learn/Server-side/Django/skeleton_website"
          >Django Tutorial Part 2: Creating a skeleton website</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>적절한 필드를 사용하여 모델을 설계 및 생성할 줄 알기.</td>
    </tr>
  </tbody>
</table>

## 개요

장고 웹 어플리케이션들은 모델이라는 파이썬 객체를 통해 데이터에 접속하고 관리합니다. 모델은 저장된 데이터의 구조를 정의합니다. 그것엔 필드 타입, 그리고 데이터의 최대 크기, 기본값, 선택 리스트 옵션, 문서를 위한 도움 텍스트, 폼을 위한 라벨 텍스트 등등이 있습니다. 모델의 정의는 기초 데이터베이스에 대해 독립적입니다 — 프로젝트 설정의 일부로 여러 옵션 중 하나를 선택할 수 있습니다. 사용할 데이터베이스를 정했다면 데이터베이스에 직접적으로 말할 필요가 없습니다 — 그저 모델 구조와 기타 코드를 작성하면, 장고가 데이터베이스와 소통하는 모든 더러운 작업을 대신해줍니다.

이 튜토리얼은 [LocalLibrary website](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) 예제에서 어떻게 모델을 정의하고 그것에 접근하는지에 대해 보여줍니다.

## LocalLibrary models 디자인하기

모델을 코딩하기 전에, 우리가 어떤 데이터를 저장할 것인지, 그리고 다른 객체(object)들에 대한 관계를 어떻게 지정할 것인지 생각해 봅시다.

우리는 책에 관한 정보들을 저장할 필요가 있고 (제목, 요약, 저자, 작성된 언어, 분류, ISBN) 여러 개의 사본을 사용할 수 있어야 합니다(전 세계적으로 고유한 ID, 가용성 상태 등). 저자에 대해서 그들의 이름 뿐만 아니라 더 많은 정보를 저장해야 할 수도 있습니다. 여러 명의 같거나 비슷한 이름의 저자가 있을 수도 있기 때문이죠. 우리는 정보를 책 제목, 저자, 언어, 그리고 분류에 따라 정렬할 수 있기를 원합니다.

모델을 디자인할 때는 각각의 "객체(object: 관련된 정보의 모임)" 마다 분리된 모델을 가지는 것이 타당합니다. 이 예시에서 명백히 확인할 수 있는 객체(object)들은 책, 책 인스턴스, 저자입니다.

선택을 웹사이트 자체에 하드코딩하는 것 보다는 모델을 사용해서 선택-리스트 옵션을 나타내도록(예시: 드롭 다운 목록)할 수 있습니다 — 이것은 모든 옵션들을 미리 알 수 없거나 옵션들이 변할 수 있을 때에 추천됩니다. 이 경우에 명백한 모델의 후보자로 책의 장르(예시: 공상 과학, 프랑스 시, 등등)와 언어(영어, 프랑스어, 한국어)가 있습니다.

우리가 우리의 모델과 필드를 결정하고 나면, 우리는 그 관계에 대해서 생각해야 합니다. 장고는 당신이 그 관계를 다음과 같이 세 가지로 설정할 수 있게 하는데, 일대일(`OneToOneField`), 일대다(`ForeignKey`), 다대다(`ManyToManyField`) 관계가 그것입니다.

그것들을 염두에 두고 아래의 UML 관계 다이어그램을 살펴봅시다. 이 다이어그램은 우리가 이 예시에서 정의할 모델들을 상자로 보여줍니다. 위에서 살펴본 바와 같이, 우리는 책(Book, 책의 일반적인 세부 사항들), 책 인스턴스(BookInstance, 시스템에서 사용 가능한 책의 특정한 물리적 복사본의 상태), 그리고 저자(Author)를 모델로 생성했습니다. 우리는 또한 장르(Genre)에 대한 모델을 만들어서 값들이 관리자 인터페이스에서 생성/선택이 가능하도록 만들었습니다. 우리는 `BookInstance:status`에 대한 모델을 생성하지 않았습니다 — 값들을(`LOAN_STATUS`) 하드코딩 했죠. 왜냐하면 그것은 변하지 않는 값들이기 때문입니다. 각각의 상자 안에서 모델 이름, 필드 이름과 타입, 그리고 또한 함수(method)와 그들의 반환 타입(return type)을 확인할 수 있습니다.

이 다이어그램은 또한 다중도(multiplicities)을 포함한 모델 간의 관계를 보여줍니다. 다중도(multiplicities)는 관계 안에 존재하는 각각의 모델의 숫자(최대 그리고 최소)를 보여주는 다이어그램 위의 숫자입니다. 예를 들어, 상자 사이를 연결하는 선은 책과 장르가 연관되어 있다는 것을 보여줍니다. 장르(Genre) 모델에 가까이 있는 숫자들은 책이 하나 또는 그 이상의 장르(원하는 만큼 많이)를 가지고 있어야 함을 보여주는 반면, 선의 반대편 끝에 있는 책(Book) 모델 옆의 숫자들은 장르 모델이 0 또는 여러 개의 관련된 책 모델을 가질 수 있음을 보여줍니다 .

![LocalLibrary Model UML](local_library_model_uml.png)

> **참고:** **주의**: 다음 섹션은 모델이 어떻게 정의되고 사용되는지에 대한 초보적인 설명입니다. 읽으면서 위 다이어그램의 각각의 모델들을 어떻게 구성할 지 생각해 보십시오.

## 모델 입문서

이 부분에서는 어떻게 모델을 정의하는지, 그리고 더 중요할 지도 모르는 필드와 필드의 인자에 대해서 간단한 개요를 제공합니다.

### 모델의 정의

모델들은 보통 어플리케이션의 **models.py** 파일에서 정의됩니다. 이들은 `django.db.models.Model`의 서브 클래스로 구현되며 필드, 메소드 그리고 메타데이터를 포함할 수 있습니다. 아래의 코드 조각은 `MyModelName`라고 이름지어진 "전형적인" 모델을 보여줍니다:

```python
from django.db import models

class MyModelName(models.Model):
    """A typical class defining a model, derived from the Model class."""

    # Fields
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    ...

    # Metadata
    class Meta:
        ordering = ['-my_field_name']

    # Methods
    def get_absolute_url(self):
        """Returns the url to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.field_name
```

아래 섹션에서 모델 안에 있는 각각의 요소들을 세부적으로 다뤄봅시다:

#### 필드(Fields)

모델은 모든 타입의, 임의의 숫자의 필드를 가질 수 있습니다 — 각각의 필드는 우리의 데이터베이스 목록(table)에 저장하길 원하는 데이터 열(column)을 나타냅니다. 각각의 데이터베이스 레코드(행, row)는 각 필드 값들 중 하나로 구성되어 있습니다. 위의 예제를 살펴봅시다:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

위 예제는 `my_field_name`이라는 하나의 필드를 가지고 있고, `models.CharField` 타입입니다 — 즉, 이 필드가 영숫자(alphanumeric) 문자열을 포함한다는 뜻이죠. 필드 타입들은 특정한 클래스들을 사용하여 등록되며, HTML 양식(form)에서 값을 수신할 때 사용할 유효성 검증 기준과 함께 데이터베이스에 데이터를 저장하는데 사용되는 레코드의 타입을 결정합니다. 또한 필드 타입은 필드가 어떻게 저장되고 사용될지 지정하는 인수를 사용할 수 있습니다. 이 예제에서는 필드에 두 가지 인수를 줍니다:

- `max_length=20` — 이 필드 값의 최대 길이는 20자임을 알립니다.
- `help_text='Enter field documentation'` — 이 값이 HTML 양식(form)에서 사용자들에게 입력될 때 어떤 값을 입력해야 하는지 사용자들에게 알려주기 위해 보여주는 텍스트 라벨을 제공합니다.

필드 이름은 쿼리 및 탬플릿에서 이를 참조하는데 쓰입니다. 필드는 또한 인수로 지정된 라벨(`verbose_name`)을 가지고 있거나, 또는 필드 변수 이름의 첫자를 대문자로 바꾸고 밑줄을 공백으로 바꿔서 기본 라벨을 추정할 수 있습니다(예를 들어 `my_field_name` 은 My field name을 기본 라벨로 가지고 있습니다) .

필드가 선언된 순서는 모델이 폼에서 렌더링 된다면(예시 : 관리자 사이트) 기본 순서에 영향을 미치지만, 이것은 재정렬될 수 있습니다.

##### 일반적(common) 필드 인수

아래의 일반적인 인수들은 많은/거의 대부분의 서로 다른 필드 타입들을 선언할 때 사용할 수 있습니다:

- [help_text](https://docs.djangoproject.com/en/2.0/ref/models/fields/#help-text): 위에서 다뤘던 것 처럼, HTML 양식(form)에 대해 텍스트 라벨을 제공합니다 (예시 : 관리자 사이트).
- [verbose_name](https://docs.djangoproject.com/en/2.0/ref/models/fields/#verbose-name): 필드 라벨 안에서 사용되는 인간이 읽을 수 있는 필드 이름입니다. 지정되지 않았다면, 장고가 기본 verbose_name을 필드 이름으로부터 유추합니다.
- [default](https://docs.djangoproject.com/en/2.0/ref/models/fields/#default): 필드를 위한 기본값입니다. 이것은 값 또는 호출 가능한 객체일 수 있습니다. 이때 객체는 새로운 레코드가 생성될 때 마다 호출됩니다.
- [null](https://docs.djangoproject.com/en/2.0/ref/models/fields/#null): 만약 `True`라면, 장고는 빈 `NULL` 값을 필드를 위한 데이터베이스에 저장할 것입니다(`CharField`는 대신 빈 문자열을 저장할 것입니다). 기본값은 `False`입니다.
- [blank](https://docs.djangoproject.com/en/2.0/ref/models/fields/#blank): 만약 `True`라면, 필드는 양식(form) 안에서 비워두는 것이 허락됩니다. 기본값은 `False`이며, 이것은 장고의 양식(form) 검증이 값을 입력하도록 강제한다는 뜻입니다. 이것은 종종 `null=True`와 함께 사용됩니다. blank 값을 허락할 때, 데이터베이스에서도 공백값을 적절하게 표시할 수 있어야 하기 때문입니다.
- [choices](https://docs.djangoproject.com/en/2.0/ref/models/fields/#choices): 필드를 위한 선택들의 모임입니다. 이 인수가 제공된다면, 대응하는 기본 양식(form) 위젯은 표준 텍스트 필드가 아닌 이 선택 항목을 가진 선택 상자입니다.
- [primary_key](https://docs.djangoproject.com/en/2.0/ref/models/fields/#primary-key): 만약 `True`라면, 현재 필드를 모델의 primary key로 설정합니다(primary key는 모든 다른 테이블 레코드들을 고유하게 확인하도록 지정된 특별한 데이터베이스 열입니다). primary key로 지정된 필드가 없다면 장고가 자동적으로 이 목적의 필드를 추가합니다.

다른 많은 옵션들이 있습니다 — 여기([full list of field options here](https://docs.djangoproject.com/en/2.0/ref/models/fields/#field-options))에서 모든 필드 옵션 목록을 볼 수 있습니다.

##### 일반적인(common) 필드 타입

아래의 목록은 일반적으로 사용되는 필드 타입들을 보여줍니다.

- [CharField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.CharField)는 작거나 중간 크기의 고정된 길이의 문자열을 정의할 때 사용합니다. 저장되기 위해서는 데이터의 최대 길이(`max_length`)를 정해주어야 합니다.
- [TextField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.TextField)는 임의의 긴 문자열에 사용됩니다. 필드의 최대 길이(`max_length`)를 지정해야 할 수도 있지만, 그것은 필드가 양식(form) 안에 표시될 때만 지정하면 됩니다(데이터베이스 레벨에서 강제되지 않습니다).
- [IntegerField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#django.db.models.IntegerField)은 정수값(모든 숫자)을 저장하는 필드입니다. 그리고 양식(form)에 입력된 값이 정수임을 검증하기도 합니다.
- [DateField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#datefield)와 [DateTimeField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#datetimefield)는 날짜와 날짜시간 정보를 저장, 표현하는데 사용됩니다 (각각 파이썬 `datetime.date`와 `datetime.datetime` 객체로). 이 필드들은 추가적으로 (서로 독점적인) `auto_now=True` (모델이 저장될 때 마다 필드를 현재 날짜로 설정하기 위해), `auto_now_add` (모델이 처음 생성되었을 때만 날짜를 설정하기 위해) , 그리고 `default` (사용자에 의해 변경될 수 있는 기본 날짜를 설정하기 위해) 매개 변수를 선언할 수 있습니다.
- [EmailField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#emailfield)는 이메일 주소를 저장하고 검증하기 위해 사용합니다.
- [FileField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#filefield)와 [ImageField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#imagefield)는 각각 파일과 이미지를 업로드하기 위해 사용됩니다 (`ImageField`는 단지 업로드된 파일이 이미지임을 확인하는 추가 검증을 더할 뿐입니다). 이것들은 업로드된 파일들이 어디에 어떻게 저장되는지 정의하는 매개 변수를 가집니다.
- [AutoField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#autofield)는 자동적으로 증가하는 `IntegerField`의 특별한 타입입니다. 이 타입의 primary key는 명시적으로 지정하지 않는 이상 모델에 자동적으로 추가됩니다.
- [ForeignKey](https://docs.djangoproject.com/en/2.0/ref/models/fields/#foreignkey)는 다른 데이터베이스 모델과 일대다 관계를 지정하기 위해 사용됩니다 (예시: 차는 하나의 제조사를 갖고 있지만 제조사는 많은 차들을 만들 수 있습니다). 일대다에서 "일"쪽이 key를 포함하는 모델입니다.
- [ManyToManyField](https://docs.djangoproject.com/en/2.0/ref/models/fields/#manytomanyfield)는 다대다 관계를 지정하기 위해 사용됩니다 (예시: 책은 여러 장르를 가질 수 있고, 각각의 장르에도 많은 책들이 있습니다). 우리 예제인 도서관 어플리케이션에서는 이 필드를 `ForeignKeys`와 매우 유사하게 사용할 겁니다. 하지만 그룹 사이의 관계를 보여주기 위해서는 더욱 복잡한 방식으로 사용될 수 있습니다. 이것은 레코드가 삭제됐을 때 어떤 일이 일어나는지 정의하기 위해 `on_delete` 매개변수를 가집니다 (예시: `models.SET_NULL`의 값은 단순히 `NULL`값으로 설정될 겁니다).

다른 많은 타입의 필드들이 많이 있습니다. 서로 다른 타입의 숫자를 위한 필드 (큰 정수, 작은 정수, 부동소수(float)), 불리언(booleans), URL, slug, unique id, 그리고 다른 "시간-관련된" 정보들(duration, time, 등등)들을 포함해서요. 모든 목록을 여기([full list here](https://docs.djangoproject.com/en/2.0/ref/models/fields/#field-types))에서 확인할 수 있습니다.

#### 메타데이터

아래와 같이 `class Meta`를 선언하여 모델에 대한 모델-레벨의 메타데이타를 선언할 수 있습니다.

```python
class Meta:
    ordering = ['-my_field_name']
```

이 메타데이터의 가장 유용한 기능들 중 하나는 모델 타입을 쿼리(query)할 때 반환되는 기본 레코드 순서를 제어하는 것입니다. 이렇게 하려면 위와 같이 필드 이름 목록의 일치 순서를 `ordering` 속성에 지정해야 합니다. 순서는 필드의 타입에 따라 달라질 것입니다(문자 필드는 알파벳 순서에 따라 정렬될 것이고, 반면 날짜 필드는 날짜순으로 정렬될 것입니다). 위와 같이, 반대로 정렬하고 싶다면 마이너스 기호(-)를 필드 이름 앞에 접두사로 붙이면 됩니다.

예를 들어, 우리가 기본적으로 아래와 같이 책들을 정렬하려고 한다면:

```python
ordering = ['title', '-pubdate']
```

책들은 A-Z까지 알파벳 순으로 정렬되고, 그 후에는 제목(title) 안에 있는 발행일 별로 가장 최근 것부터 가장 오래된 것 순으로 정렬될 것입니다.

다른 일반적인(common) 속성은 `verbose_name`이며, 단일 및 복수 형식(form)의 클래스를 위한 자세한(verbose) 이름입니다:

```python
verbose_name = 'BetterName'
```

다른 유용한 속성들은 모델을 위한 새로운 "접근 권한"을 생성 및 적용 가능하게 하며(기본 권한은 자동적으로 적용됨), 다른 필드에 기반한 순서 정렬을 허용하거나, 또는 클래스가 "추상(abstract: 레코드를 생성할 수 없고, 대신 다른 모델들을 만들기 위해 파생되는 기본 클래스)"임을 선언할 수 있습니다.

여러가지 메타데이터 옵션들은 모델에 무슨 데이터베이스를 사용해야만 하는가 그리고 데이터가 어떻게 저장되는가를 제어한다 (이것들은 모델을 기존 데이터베이스에 매핑할 때만 유용하다).

메타데이터 옵션의 모든 목록은 여기에서 볼 수 있습니다: [Model metadata options](https://docs.djangoproject.com/en/2.0/ref/models/options/) (장고 문서).

#### 메소드(Methods)

모델은 또한 메소드를 가질 수 있습니다.

**`최소한, 모든 모델마다 표준 파이썬 클래스의 메소드인 __str__()` 을 정의하여 각각의 object가 사람이 읽을 수 있는 문자열을 반환(return)하도록 합니다.** 이 문자열은 관리자 사이트에 있는 개별적인 레코드들을 보여주는 데 사용됩니다(그리고 모델 인스턴스를 참조해야 하는 다른 모든 곳에도요). 종종 이것은 모델에서 제목(title)이나 이름 필드(name field)를 반환할 것입니다 .

```python
def __str__(self):
    return self.field_name
```

장고 모델에 포함할 다른 일반적인 메소드는 `get_absolute_url()`입니다. 웹사이트의 개별적인 모델 레코드들을 보여주기 위한 URL을 반환하는 메소드입니다(만약 이 메소드를 정의했다면 장고는 관리자 사이트 안의 모델 레코드 수정 화면에 "View on Site" 버튼을 자동적으로 추가할 것입니다). 아래에서 `get_absolute_url()`의 표준적인 사용을 볼 수 있습니다.

```python
def get_absolute_url(self):
    """Returns the url to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> **참고:** **주의**: 모델의 개별적인 레코드들을 보여주기 위해서 `/myapplication/mymodelname/2` 와 같은 URL을 사용한다고 가정한다면("2"는 특정한 레코드를 위한 `id` 입니다), 응답과 id를 "모델 디테일 뷰(model detail view)"에 전달하기 위해 (레코드를 표시하기 위한 작업을 할) URL 매퍼를 만들 필요가 있습니다 . 위의 `reverse()` 함수는 알맞은 포맷의 URL을 생성하기 위해서 URL 매퍼를(위 경우에선 'model-detail-view'라고 명명됨) "반전" 시킬 수 있습니다.
>
> 물론 이것이 작동하기 위해선 URL 매핑, 뷰, 그리고 탬플릿을 작성해야 합니다!

또한 원하는 메소드를 정의해서 (그들이 어떤 변수도 가지고 있지 않다면) 코드나 탬플릿에서 불러올 수 있습니다.

### 모델 관리(management)

모델 클래스들을 정의한 이후엔 클래스들을 사용해서 레코드들을 생성, 업데이트, 또는 삭제할 수 있고, 모든 레코드 또는 레코드의 특정 하위 집합을 가져오기 위해 쿼리를 실행할 수 있습니다. 튜토리얼에서 뷰를 정의할 때 그 방법을 보여줄 것이지만, 아래에 간략한 요약이 있습니다.

#### 레코드의 생성과 수정

레코드를 생성하려먼 모델의 인스턴스를 정의하고 `save()`를 호출할 수 있습니다.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> **참고:** 만약 당신이 어떤 필드도 `primary_key`를 선언하지 않았다면, 새로운 레코드는 자동적으로 `id`라는 필드 이름을 가진 `primary_key`가 주어지게 됩니다. 위의 레코드를 저장한 후 이 `id` 필드를 쿼리할 수 있는데, 1의 값을 가질 겁니다.

이 새로운 레코드 안의 필드에 점 구문(.)을 사용해서 접근하여 값을 변경할 수 있습니다. 수정된 값들을 데이터베이스에 저장하기 위해 `save()`를 호출해야 합니다.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### 레코드 검색하기

모델의 객체(`objects`) 속성(기본 클래스에서 제공됨)을 사용하여 특정 기준과 일치하는 레코드를 검색할 수 있습니다.

> **참고:** **주의:** "추상(abstract)" 모델과 필드 이름을 사용하여 레코드들을 검색하는 방법을 설명하는 것은 조금 혼란스러울 수 있습니다. 아래에서는 `title`과 `genre` 필드가 있는 `Book` 모델을 참조하겠습니다. 이 때 `genre`는 또한 `name`이라는 단일 필드를 가지고 있는 모델입니다.

우리는 `objects.all()`을 사용하여 모델의 모든 레코드들을 `QuerySet`으로 가져올 수 있습니다. `QuerySet`은 반복가능한(iterable) 객체이며, 이것은 반복/루프할 수 있는 많은 객체들을 포함하고 있다는 의미입니다.

```python
all_books = Book.objects.all()
```

장고의 `filter()`는 반환된 `QuerySet`이 지정된 문자(**text**) 또는 숫자(**numeric**) 필드를 특정한 기준에 맞추어 필터링할 수 있게 합니다. 예를 들어서, "wild"를 제목 안에 포함하는 책들을 필터링하여 그 숫자를 세어 보려면, 아래와 같이 하면 됩니다.

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = Book.objects.filter(title__contains='wild').count()
```

기준이 될 필드와 타입은 필터 매개 변수 이름에서 정의됩니다. 다음 포맷을 이용해서요: `field_name__match_type` (주의: 위의 `title`과 `contains` 사이 밑줄은 두 개입니다). 위에서 우리는 대소문자를 구분하여 `title`을 필터링합니다. 다른 많은 유형의 일치 방법이 있습니다: `icontains`(대소문자를 구분하지 않음), `iexact`(대소문자를 구분하지 않는 정확히 일치), `exact`(대소문자를 구분하는 정확한 일치) 그리고 `in`, `gt`(보다 더 큰(greater than)), `startswith` 등등이 있습니다. 모든 일치방법 목록은 여기([full list is here](https://docs.djangoproject.com/en/2.0/ref/models/querysets/#field-lookups)) 있습니다.

어떤 경우엔 일대다 관계를 다른 모델에 정의하는 필드를 필터링해야 할 때도 있습니다(예:`ForeignKey`). 이 경우에 추가적인 이중 밑줄을 사용하여 관련 모델 안의 필드에 "색인(index)"할 수 있습니다. 예를 들어 특정한 장르 패턴을 가진 책들을 필터링하려면, 아래와 같이 `genre` 필드를 통해서 `name`에 색인(index)해야 할 겁니다.

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> **참고:** **주의**: 밑줄(\_\_)을 사용하여 원하는 만큼 다양한 레벨의 관계(`ForeignKey`/`ManyToManyField`)를 탐색할 수 있습니다. 예를 들어서 추가적인 "cover" 관계를 사용하여 정의된 다른 타입의 `Book`은 다음과 같은 매개 변수 이름을 가질겁니다 :`type__cover__name__exact='hard'.`

관련된 모델의 역방향 검색, 필터 변경, 값의 더 작은 집합 반환하기 등 쿼리로 할 수 있는 일들은 더욱 많이 있습니다. 더 많은 정보를 보려면 [Making queries](https://docs.djangoproject.com/en/2.0/topics/db/queries/) (장고 문서)를 참고하세요.

## LocalLibrary 모델 정의하기

이 섹션에서는 도서관을 위한 모델을 정의하기 시작할 겁니다. models.py ( /locallibrary/catalog/에 있음)파일을 여세요. 페이지 상단의 표준 코드(boilerplate)는 우리들의 모델이 상속받을 모델 기본 클래스 `models.Model`을 포함하는 models 모듈을 가져옵니다.

```python
from django.db import models

# Create your models here.
```

### 장르(Genre) 모델

아래의 장르(`Genre`) 모델 코드를 복사해서 `models.py` 파일에 붙여넣기 하세요. 이 모델은 책 카테고리에 관한 정보를 저장하는데 사용됩니다 — 예를 들어 소설인지, 논픽션인지, 로맨스인지 군사 역사물인지 등등. 위에서 말했던 것 처럼, 우리는 장르를 자유 텍스트나 선택 목록으로 만들지 않고 모델을 이용해 만들었습니다. 가능한 값들이 하드코딩되기 보다는 데이터베이스를 통해 관리되도록 하기 위해서입니다.

```python
class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(max_length=200, help_text='Enter a book genre (e.g. Science Fiction)')

    def __str__(self):
        """String for representing the Model object."""
        return self.name
```

`모델은 하나의 CharField` 필드(`name`)을 가지고 있습니다. 이것은 장르의 이름을 나타냅니다 . 이것은 200자로 제한되어 있고 `help_text`를 갖고 있습니다. 모델의 마지막에서 우리는 `__str__()` 메소드를 선언합니다. 이 메소드는 특정한 레코드에 의해 정의된 장르의 이름을 단지 반환합니다. 아무런 자세한 이름(verbose name)도 정의되지 않았기 때문에, 필드는 폼(form)에서 `Name`으로 호출(call)될 겁니다.

### 책(Book) 모델

아래의 책(Book) 모델을 복사해서 파일의 아래에 붙여넣기 하세요. 책 모델은 일반적으로 사용 가능한 책에 대한 모든 정보들을 보여주지만, 대여 가능한 특정한 물리적 "인스턴스(instance)"나 "복사본(copy)"은 보여주지 않습니다. 모델은 `CharField`를 사용하여 책의 `title`과 `isbn`을 나타냅니다(`isbn`이 이름을 지정하지 않은 첫 번째 매개변수를 사용하여 라벨을 "ISBN"으로 지정한 것에 주목하세요. 만약 그러지 않았다면 기본 라벨은 "Isbn"이었을 것입니다). 텍스트가 상당히 길 것이기 때문에 `summery`에는 `TextField`를 사용합니다.

```python
from django.urls import reverse # Used to generate URLs by reversing the URL patterns

class Book(models.Model):
    """Model representing a book (but not a specific copy of a book)."""
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.SET_NULL, null=True)

    # Foreign Key used because book can only have one author, but authors can have multiple books
    # Author as a string rather than object because it hasn't been declared yet in the file.
    summary = models.TextField(max_length=1000, help_text='Enter a brief description of the book')
    isbn = models.CharField('ISBN', max_length=13, help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a>')

    # ManyToManyField used because genre can contain many books. Books can cover many genres.
    # Genre class has already been defined so we can specify the object above.
    genre = models.ManyToManyField(Genre, help_text='Select a genre for this book')

    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the url to access a detail record for this book."""
        return reverse('book-detail', args=[str(self.id)])
```

장르는 책이 여러 개의 장르를 가지고, 장르도 여러 개의 책을 가질 수 있는 다대다 필드(`ManyToManyField`)입니다. 저자는 `ForeignKey` 로 선언됩니다. 따라서 각각의 책은 하나의 저자만 가질 수 있지만, 저자는 여러 개의 책들을 가질 수 있습니다(실제로는 책이 여러 명의 작가를 가질 수 있지만, 이 구현에서는 아닙니다!).

두 필드 타입들 안에서 관련된 모델 클래스는 모델 클래스나 관련된 모델의 이름을 포함하는 문자열을 사용하여 이름없는 첫 번째 매개 변수로 선언됩니다. 연관된 클래스가 참조되기 전에 파일 안에서 아직 정의되지 않았다면 모델의 이름을 문자열로 사용해야 합니다! 저자 ( `author` )필드에서 관심을 가져야 할 다른 변수는 `null=True`와 `on_delete=models.SET_NULL`입니다. `null=True`는 어떤 저자도 선택되지 않았다면 데이터베이스에 `Null` 값을 저장하도록 하고, `on_delete=models.SET_NULL`은 관련된 저자(author) 레코드가 삭제되었을 때 저자(author)의 값을 `Null`로 설정할 겁니다.

모델은 또한 `Book` 레코드를 나타내는 책의 `title` 필드를 사용하여 `__str__()` 를 정의합니다. 마지막 메소드 `get_absolute_url()` 은 이 모델의 세부 레코드에 접근하는 데에 사용될 수 있는 URL을 반환합니다 (이것이 작동하도록 하기 위해선 `book-detail`이라는 이름의 URL 매핑을 정의하고, 관련 뷰와 탬플릿을 정의해야 합니다).

### 책 인스턴스(BookInstance) 모델

다음으로, `BookInstance` 모델(아래에 있는)을 다른 모델들 아래에 복사하세요. `BookInstance` 은 누군가 빌릴지도 모를 특정한 책의 복사본을 나타냅니다. 그리고 복사본이 사용 가능한지 여부, 언제 되돌려받을 수 있을지, "출판사(imprint)" 또는 버전 세부 사항, 그리고 도서관 안에 있는 책의 고유 id에 대한 정보를 포함합니다.

이제 몇몇 필드와 메소드는 친숙할 겁니다. BookInstance 모델은 아래를 사용합니다

- `ForeignKey` : 연관된 `Book` 을 식별하기 위해(각각의 책은 많은 복사본을 가질 수 있지만, 복사본은 하나의 `Book`만을 가질 수 있음).
- `CharField` : 책의 출판사(imprint)(특정한 발간일)을 나타내기 위해.

```python
import uuid # Required for unique book instances

class BookInstance(models.Model):
    """Model representing a specific copy of a book (i.e. that can be borrowed from the library)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for this particular book across whole library')
    book = models.ForeignKey('Book', on_delete=models.SET_NULL, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.book.title})'
```

추가적으로 몇 가지 새로운 타입의 필드를 선언합니다:

- `UUIDField` 는 `id` 필드가 이 모델의 `primary_key` 로 설정되는 데 사용됩니다. 이 타입의 필드는 각 인스턴스에 전역적으로 고유한 값을 할당합니다 (도서관에서 찾을 수 있는 모든 책 마다 하나씩).
- `DateField` 는 `due_back` (만기일) 날짜에 사용됩니다 (책이 빌려지거나 유지 보수된 이후 사용할 수 있을 것으로 예상되는 날짜). 이 값은 `blank` 나 `null` 이 될 수 있습니다(책을 사용할 수 있는 경우 필요). 메타데이터 모델 (`Class Meta`) 은 레코드들이 쿼리에서 반환되었을 때 레코드들을 정렬하기 위해서 이 필드를 사용합니다 .
- `status` 는 선택/선택 목록(choice/selection list)을 정의하는 `CharField` 입니다. 보시다시피, 우리는 열쇠-값(key-value) 쌍의 튜플(tuple)을 포함하는 튜플을 정의해서 choices 인자에 전달합니다. 열쇠/값(key/value) 쌍에서 값(value)은 사용자가 선택할 수 있는 표시값인 반면, 열쇠(key)는 그 옵션이 선택되었을 때 실제로 저장되는 값입니다. 또한 책이 선반에 저장되기 전에는 사용할 수 없으므로 기본값인 'm'(유지 관리, maintenanace)을 설정했습니다.

모델 `__str__()` 은 그것의 고유한 id 그리고 연관된 `Book`의 제목을 조합하여 `BookInstance` 객체를 나타냅니다.

> **참고:** **주의**: 조금의 파이썬:
>
> - 파이썬 3.6에서부터 문자열 보간 구문을 쓸 수 있습니다 (f-strings로 잘 알려진): `f'{self.id} ({self.book.title})'`.
> - 이 튜토리얼의 옛 버전에서는 [formatted string](https://www.python.org/dev/peps/pep-3101/) 구문을 사용했고, 이것 또한 파이썬 안에 문자열을 형식화(formatting)하는 유효한 방법입니다 (예 : `'{0} ({1})'.format(self.id,self.book.title)`).

### 저자(Author) 모델

**models.py** 안에 작성된 코드 아래에 `Author` 모델을 복사 붙여넣기 하세요 (아래에 있습니다).

이제 모든 필드/메소드들이 익숙할 겁니다. 모델은 저자를 이름(first name), 성(last name), 생일, 그리고 (선택적으로) 사망일을 가진다고 정의합니다. 기본적으로 `__str__()` 는 name을 첫째로 성(last name), 그 다음 이름(first name)이 오는 순서로 반환합니다. `get_absolute_url()` 메소드는 개별 저자를 나타내기 위한 URL을 가져오기 위해 `author-detail` URL 매핑을 반대로 합니다.

```python
class Author(models.Model):
    """Model representing an author."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the url to access a particular author instance."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.last_name}, {self.first_name}'
```

## 데이터베이스 마이그레이션 재실행하기

모든 모델이 생성되었습니다. 이제 데이터베이스 migration을 재실행하여 모델들을 데이터베이스에 추가하세요.

```
python3 manage.py makemigrations
python3 manage.py migrate
```

## 도전과제 - 언어(Language) 모델

지역 후원자가 다른 언어로 저술된 새로운 책들을 후원한다고 생각해 보세요(아마도, 프랑스어?). 도전과제는 이것이 도서관 웹사이트에서 이것을 가장 잘 나타낼 수 있는 방법을 찾아내고, 모델에 추가하는 것입니다.

고려해야 할 사항들:

- "언어"(language)는 `Book`, `BookInstance`, 아니면 어떤 다른 객체와 연관되어야 할까요?
- 서로 다른 언어들은 모델로 나타내어야 할까요? 아니면 자유 텍스트 필드?그것도 아니라면 하드-코딩된 선택 리스트로 나타내어야 할까요?

결정을 내린 후에, 필드를 추가하세요. 우리가 선택한 것은 여기([here](https://github.com/mdn/django-locallibrary-tutorial/blob/master/catalog/models.py)) 깃허브에서 볼 수 있습니다.

## 요약

이 글에서 우리는 모델이 어떻게 정의되는지 배웠고, 이 정보를 지역 도서관 웹사이트를 위한 적절한 모델을 설계하고 구현하기 위해 사용했습니다.

At this point we'll divert briefly from creating the site, and check out the _Django Administration site_. This site will allow us to add some data to the library, which we can then display using our (yet to be created) views and templates.

## See also

- [Writing your first Django app, part 2](https://docs.djangoproject.com/en/2.0/intro/tutorial02/) (Django docs)
- [Making queries](https://docs.djangoproject.com/en/2.0/topics/db/queries/) (Django Docs)
- [QuerySet API Reference](https://docs.djangoproject.com/en/2.0/ref/models/querysets/) (Django Docs)

{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}
