---
title: "Django Tutorial Part 4: Django admin site"
slug: Learn/Server-side/Django/Admin_site
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}

[LocalLibrary](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) website의 모델을 만들었으므로, 우리는 Django Admin 을 이용해서 "실제" book data를 추가할 것입니다. 첫째로 우리는 당신에게 관리자 사이트에 모델들을 등록는 방법과, 이후 어떻게 로그인해서 데이터를 만들지를 보여줄 것입니다. 끝으로는 Admin site를 더 개선할 수 있는 방법들에 대해서 알아볼 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 준비:</th>
      <td>
        첫째로 완료하세요:
        <a href="/ko/docs/Learn/Server-side/Django/Models"
          >Django Tutorial Part 3: Using models</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        장고 관리자 사이트의 이득과 한계를 이해하고, 모델을 위한 여러 레코드들을
        생성하기.
      </td>
    </tr>
  </tbody>
</table>

## 개요

장고의 관리자 어플리케이션은 모델을 사용하여 당신이 만들고, 보고, 업데이트하고, 그리고 삭제하는 데에 사용할 수 있는 사이트 영역을 자동적으로 만드는 데에 사용할 수 있습니다. 이는 당신이 시간을 많이 절약할 수 있도록 돕고, 모델을 쉽게 테스트 할 수 있게 하며 당신이 정확한 데이터를 가지고 있다는 느낌을 가질수 있도록 돕습니다. 관리자 어플리케이션은 또한 웹 사이트의 유형에 따라 production의 데이터를 관리하는 데 유용합니다. 모델 중심 접근 방식은 모델에 관한 많은 불필요한 세부 사항을 사용자들에게 노출하는, 모든 사용자들에게 가장 좋은 방식이라고 말할 수 없기 때문에, 장고 프로젝트는 internal 데이터 관리만을(즉, 관리자, 또는 당신의 조직 안에 있는 사람들을 위한 사용만을) 위해서 사용하는 것을 추천합니다.

웹사이트 안에 관리자 어플리케이션을 포함시키기 위해 요구되는 모든 설정은 [created the skeleton project](/ko/docs/Learn/Server-side/Django/skeleton_website)를 생성했을 때 자동적으로 완료됩니다(실제 종속성에 대한 정보는, 여기 [Django docs here](https://docs.djangoproject.com/en/2.0/ref/contrib/admin/)를 확인하세요). 결과적으로, 모델을 관리자 어플리케이션에 추가하기 위해서 **꼭 해야만** 하는 것은 그것들을 등록하는(register) 것입니다. 이 글의 마지막에서 모델 데이터를 더 잘 나타내기 위한 관리자 영역의 추가적인 설정을 짧게 보여드리겠습니다.

모델을 등록한 뒤로는 새로운 "superuser"를 만들어서 사이트에 로그인을 하며, 이후에는 books, 저자, book instances 그리고 장르를 만들 것입니다. 이것들은 다음 튜토리얼에서 만들기 시작할 뷰와 템플릿을 테스트할 때 유용할 것입니다.

## Models 등록하기

첫째, catalog 어플리케이션 안의 **admin.py** 파일을 여세요 (**/locallibrary/catalog/admin.py**). 다음과 같을 겁니다 — `django.contrib.admin`을 이미 imoprt하고 있다는 것에 주의하세요:

```python
from django.contrib import admin

# Register your models here.
```

파일의 하단에 아래 텍스트를 복사 붙여넣기 해서 모델을 등록(register)하세요. 이 코드는 모델들을 import하고 그것들을 등록하기 위해 `admin.site.register` 를 호출합니다.

```python
from catalog.models import Author, Genre, Book, BookInstance

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
```

> **참고:** **주의**: 책의 언어를 나타내기 위한 모델을 생성하는 도전과제를 수행했다면 ([see the models tutorial article](/ko/docs/Learn/Server-side/Django/Models)), 그 모델도 import 한 후 등록하세요!

이것은 모델이나 모델들을 사이트에 등록(register)하는 가장 간단한 방법입니다. 관리자 사이트는 커스터마이즈 범위가 넓고, 아래에서 모델을 등록하는 다른 방법들에 관해 다르겠습니다.

## Superuser 만들기

관리자 사이트에 로그인하기 위해서는, 직원(_Staff)_ 상태가 활성화 된 사용자 계정이 있어야 합니다. 레코드들을 보고 생성하기 위해서는 이 사용자가 모든 객체들을 관리하기 위한 허가가 있어야 합니다. 사이트에 대한 모든 접속 권한과 필요한 허가를 가진 "superuser" 계정을 manage.py를 사용해서만들 수 있습니다.

superuser를 생성하기 위해 **manage.py**와 같은 경로 안에서 아래 명령어를 호출하세요. username, 이메일 주소, 그리고 강력한 비밀번호를 입력해야 할 것입니다.

```bash
python3 manage.py createsuperuser
```

이 명령어가 완료되면 새로운 superuser가 데이터베이스에 추가되었을 것입니다. 이제 로그인을 테스트할 수 있도록 개발 서버를 재시작 하세요:

```bash
python3 manage.py runserver
```

## 관리자 계정에 로그인하기

사이트에 로그인하기 위해서는, /admin URL(예: [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin/))을 열어서 새로운 superuser의 userid와 password를 입력하세요(세부 정보를 입력한 후에는 로그인 페이지로 리디렉션되고 /admin URL로 돌아갑니다).

이곳은 설치된 어플리케이션에 따라 그룹지어진 모든 모델들을 보여줍니다. 모델 이름을 클릭해서 모든 관련 레코드들의 목록을 볼 수 있고, 그 목록들을 클릭하여 수정할 수 있습니다. 또한 모델 오른쪽의 **Add** 링크를 클릭하여 그 타입의 레코드를 곧바로 생성할 수 있습니다.

![Admin Site - Home page](admin_home.png)

**Books 모델 오른쪽의 Add** 링크를 클릭해서 새로운 책을 만드세요(아래와 같은 화면이 보일 것입니다). 각 필드의 제목, 사용된 위젯의 타입 그리고 `help_text`(있는 경우)가 모델 안에서 지정한 값과 일치하는 방식에 유의하세요.

필드에 값들을 입력하세요. 해당 필드 옆에 있는 **+** 버튼을 눌러 새로운 저자나 장르를 생성할 수 있습니다 (이미 생성했다면 목록에서 값을 선택하세요). 모두 완료했다면 레코드를 저장하기 위해 **SAVE**, **Save and add another** 또는 **Save and continue editing**을 클릭할 수 있습니다.

![Admin Site - Book Add](admin_book_add.png)

> **참고:** **주의**: 이 지점에서 어플리케이션에 몇 가지 책들, 저자 그리고 장르(예: 판타지)를 추가하면서 시간을 보내보세요. 각각 저자와 장르에 서로 다른 두 가지 책이 포함되어 있는지 확인하세요 (이렇게 하면 나중에 리스트(list)와 디테일 뷰(detail view)들을 구현할 때 그것들을 더욱 흥미롭게 만들어 줍니다).

책을 추가했다면, 상단 북마크 안의 **Home** 링크를 클릭해서 관리자 페이지로 되돌아가세요. 그리고 **Books** 링크를 클릭해서 책들의 현재 목록을 나타내세요(아니면 다른 링크를 클릭해서 다른 모델의 목록을 보세요). 이제 몇 가지 책을 추가했으니, 목록은 아래 스크린샷과 비슷하게 보일 겁니다. 각 책의 제목이 보입니다; 이것은 지난 글에서 다뤘던 Book 모델의 `__str__()` 메소드가 반환한 값입니다.

![Admin Site - List of book objects](admin_book_list.png)

이 리스트에서 원하지 않는 책의 왼쪽에 있는 체크박스를 선택하고, Action 드랍-다운 목록에서 delete... 동작을 선택한 후, **Go** 버튼을 클릭해 책을 삭제할 수 있습니다. 또한 **ADD BOOK** 버튼을 클릭해서 새로운 책들을 추가할 수 있습니다.

링크 안의 책 이름을 선택해서 책을 편집할 수 있습니다. 아래에 보여지는 책 모델의 편집 페이지는 "Add" 페이지와 거의 동일합니다. 페이지의 제목 (_Change book_)과 **Delete**, **HISTORY** 그리고 **VIEW ON SITE** 버튼들의 추가가 큰 차이점입니다(마지막 버튼은 모델에서 `get_absolute_url()` 메소드를 정의했기 때문에 나타납니다).

![Admin Site - Book Edit](admin_book_modify.png)

이제 **Home** 페이지로 되돌아가서 (홈 링크를 사용해서) **Author** 와 **Genre** 목록들을 보세요 — 새로운 책들을 추가하면서 이미 몇 가지 목록들이 있겠지만, 조금 더 추가해도 됩니다.

아직 가지고 있지 않은 것은 Book Instance들입니다. 왜냐하면 Books에서 만들어지지 않았기 때문이죠( `BookInstance`에서 `Book`을 만들 수 있긴 하지만 — 이것은 `ForeignKey` 필드의 특성입니다). Home 페이지로 되돌아가서 연관된 **추가**(**Add**)버튼을 눌러 아래의 Add book Instance 화면을 나타내세요. 크고 전역적으로 고유한 id에 주의하세요. 이것은 도서관에서 한 권의 책을 개별적으로 식별하는 데 사용할 수 있습니다.

![Admin Site - BookInstance Add](admin_bookinstance_add.png)

각각의 책마다 여러 개의 레코드를 만드세요. 상태(Status)를 최소한 몇 개의 레코드는 대여 가능(Available)로 설정하고, 나머지는 대여 중(On loan)으로 설정하세요. 만약 상태가 대여 불가능(**not** Available)이면, 만기 날짜도 같이 설정하세요.

이게 끝입니다! 관리자 사이트를 어떻게 설정하고 사용하는지 배웠습니다. 또한 `Book`, `BookInstance`, `Genre`, 그리고 `Author` 에 대한 레코드들을 생성했고, 뷰와 탬플릿을 생성할 때 이 레코드들을 사용할 수 있을 것입니다.

## 추가 설정(Advanced configuration)

장고는 등록된(registered) 모델의 정보를 사용하여 기본적인 관리자 사이트를 만드는 일을 꽤 잘합니다:

- 각각의 모델은 모델의 `__str__()` 메소드로 생성된 문자열로 식별되는, 그리고 편집을 위한 세부 정보(detail views)/양식(forms)에 링크되어 있는 개별적인 레코드들의 목록을 가지고 있습니다. 기본적으로, 이 화면은 레코드에 대한 대량 삭제 작업을 수행할 수 있는 액션 메뉴를 상단에 가지고 있습니다.
- 레코드의 편집과 추가를 위한 모델 디테일 레코드 양식들은 모델 안의 모든 필드를 포함하고 있고, 그것들의 선언 순서에 따라 수직으로 배치되어 있습니다.

사용하기 더욱 편하도록 인터페이스를 추가적으로 사용자화 할 수 있습니다. 당신이 할 수 있는 몇 가지 일은:

- 목록 뷰(List views):

  - 각각의 레코드에 표시되는 추가적인 필드/정보를 추가하기.
  - 날짜나 다른 선택 값(예: 책의 대여 상태)에 기초해서 어떤 레코드들이 목록지어질 지 선택하는 필터들 추가하기.
  - 목록 뷰(list views) 안의 동작 메뉴(actions menu)에 추가적인 옵션을 추가하고 이 메뉴가 양식 위의 어디에 보여져야 할 지 선택하기.

- 세부 뷰(Detail views):

  - 표시할(혹은 제외할)필드, 따를 순서, 그루핑, 편집 가능할지 여부, 사용될 위젯, 방향(orientation) 등등을 선택하기.
  - 인라인 편집(inline editing)기능을 넣기 위해 관련된 필드들을 레코드에 추가하기(예: 책 레코드의 저자 레코드를 생성하는 동안 책 레코드를 추가하고 편집할 수 있는 기능을 추가하기).

이 글에서는 LocalLibrary의 인터페이스를 향상시키기 위한 몇 가지 변경점을 알아볼 겁니다. 그것들은 `Book`과 `Author` 모델 목록에 더 많은 정보를 추가하고, 그리고 그것들의 편집 보기(edit views)의 레이아웃을 향상시키는 것을 포함합니다. `Language` 와 `Genre` 모델은 변경하지 않을 겁니다. 그들은 각각 하나의 필드만을 갖고 있기 때문에 변경하는 것에 대한 이득이 없습니다!

모든 관리자 사이트 사용자화(customisation) 선택들(choices)의 완벽한 레퍼런스(reference)를 [The Django Admin site](https://docs.djangoproject.com/en/2.0/ref/contrib/admin/)(장고 문서)에서 찾을 수 있습니다.

### ModelAdmin 클래스 등록하기

관리자 인터페이스에서 모델이 보여지는 방식을 바꾸고 싶다면 [ModelAdmin](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#modeladmin-objects) 클래스(레이아웃을 나타내는)를 정의한 후 모델 안에 등록합니다.

`Author` 모델부터 시작해 봅시다. catalog 어플리케이션의 **admin.py** 파일을 여세요 (**/locallibrary/catalog/admin.py**). 원래 있던 `Author` 모델에 대한 등록(registration)을 주석처리(#를 앞에 붙여서) 하세요:

```js
# admin.site.register(Author)
```

이제 아래와 같이 새로운 `AuthorAdmin` 과 그것의 등록(registration)을 추가하세요.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

이제 우리는 `Book` 그리고 `BookInstance`를 위한 `ModelAdmin` 클래스를 추가할 겁니다. 또다시 원본 등록(registrations)를 주석처리 해야 합니다:

```js
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

이제 새로운 모델들을 생성하고 등록하기 위해서; 이것의 설명을 위해, 우리는 모델들을 등록(register)하기 위해 `@register` 데코레이터(decorator)를 대신 사용합니다(이것은 `admin.site.register()` 구문과 정확히 똑같은 일을 합니다):

```python
# Register the Admin classes for Book using the decorator
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass

# Register the Admin classes for BookInstance using the decorator
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    pass
```

현재 모든 관리자 클래스들은 비어있기 때문에("`pass"`를 보세요) 관리자 행동은 바뀌지 않았을 것입니다! 이제 우리는 모델 고유의 관리자 행동(behaviour)을 정의하기 위해 이것들을 확장할 수 있습니다.

### 목록 뷰(list view)들을 설정하기

현재 Locallibrary는 모델의 `__str__()` 메소드에서 생성되는 객체 이름을 사용하여 모든 저자들을 목록짓습니다. 이것은 단지 몇 명의 저자만 있을 때는 괜찮지만, 수많은 저자가 있을 때는 겹치는 이름의 서로 다른 저자가 있을 겁니다. 그것들을 구분하거나, 아니면 그저 각각의 저자마다 흥미로운 정보를 보여주고 싶다면, [list_display](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) 를 사용해서 view에 추가적인 필드를 추가할 수 있습니다.

아래 코드로 `AuthorAdmin` 클래스를 대체하십시오. 목록에 선언될 이름들은 필요한 순서대로 튜플(tuple)로 선언됩니다, 아래에 보시는 것 처럼요(이것들은 원래 모델에서 특정된 것과 같은 이름들입니다).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

이제 웹사이트 안의 저자 목록으로 이동하세요. 위의 필드들이 아래와 같이 보여질 것입니다:

![Admin Site - Improved Author List](admin_improved_author_list.png)

우리의 `Book` 모델을 위해서 추가적으로 `author` 그리고 `genre`를 표시해 봅시다. `author`는 `Foreignkey` 필드 관계(일-대-다)이기 때문에, 관련된 레코드의 `__str__()` 값에 의해 나타내어질 것입니다. 아래의 버전으로 `BookAdmin` 클래스를 대체하세요.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

불행하게도 `genre` 필드는 `ManyToManyField`이기 때문에 `list_display`에 직접적으로 특정할 수 없습니다.(거대한 데이터베이스 접근 "비용"이 발생할 수 있기 때문에 장고는 이것을 방지합니다). 대신 정보를 문자열로 받기 위해서 `display_genre` 함수를 정의할 겁니다(이것이 위에서 호출한 함수입니다; 아래에서 함수를 정의하겠습니다).

> **참고:** **주의**: `genre` 를 가져오는 것은 좋은 생각이 아닙니다. 왜냐하면 데이터베이스 작동의 "비용"이 너무 높기 때문입니다. 모델 안의 호출 함수들이 다른 이유로도 굉장히 유용하기 때문에 — 예를 들자면 리스트 안의 모든 항목에 delete 링크를 추가하는 것 처럼요.

아래 코드를 `Book` 모델(**models.py**) 안에 추가하세요. 이것은 `genre` 필드의 첫 세 가지 값들의 문자열을 생성합니다(만약 존재한다면요) 그리고 이 메소드를 위해 관리자 사이트에서 사용될 수 있는 `short_description` 을 만듭니다.

```python
    def display_genre(self):
        """Create a string for the Genre. This is required to display genre in Admin."""
        return ', '.join(genre.name for genre in self.genre.all()[:3])

    display_genre.short_description = 'Genre'
```

모델을 저장하고 관리자를 업데이트 했다면, 웹사이트를 열어서 Books 목록 페이지로 이동하세요; 아래와 같은 책 리스트가 있을 것입니다:

![Admin Site - Improved Book List](admin_improved_book_list.png)

`Genre` 모델 (그리고 `Language` 모델도, 정의했다면) 은 단일 필드를 갖고 있기 때문에, 추가적인 필드를 보여주기 위해 추가적인 모델을 생성하는 것은 의미가 없습니다.

> **참고:** **주의**: 최소한 상태 그리고 예상되는 반납일을 보여주는 `BookInstance` 모델 목록을 업데이트 해봅시다 . 이것은 이 글의 마지막에 도전 과제로 추가되어 있습니다!

### 목록 필터 추가하기

목록 안에 있는 항목들이 아주 많다면, 그 중에 어떤 항목들만이 표시될 지 정할 수 있는 필터를 추가하는 것이 유용합니다. 이것은 `list_filter` 속성 안에서 필드들을 목록지어서 완료됩니다. 현재 `BookInstanceAdmin` 클래스를 아래 코드 조각으로 대체하십시오.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

목록 뷰(list view)는 이제 오른쪽에 필터 상자를 갖고 있을 겁니다. 값을 필터링하기 위해 날짜와 상태를 선택하는 방법에 주의하세요:

![Admin Site - BookInstance List Filters](admin_improved_bookinstance_list_filters.png)

### 세뷰 보기 레이아웃(detail view layout) 조직하기

기본적으로, detail view들은 모든 필드들을 모델에 선언된 순서대로, 수직적으로 배치합니다. 당신은 선언 순서, 표시될(혹은 제외될) 필드들, 섹션들이 정보들을 조직하는 데 사용될 지 여부, 필드들이 수직적 또는 수평적으로 표시될 지 여부 그리고 심지어 관리자 양식에서 어떤 편집 위젯이 사용될 지 까지 변경할 수 있습니다.

> **참고:** **주의**: LocalLibrary 모델은 상대적으로 간단하기 때문에 레이아웃을 변경할 큰 필요성이 없습니다; 그러나 방법을 보여드리기 위해, 몇 가지 변경점을 만들 것입니다.

#### 어떤 필드들이 보여지고 배치될 지 제어하기

아래와 같이 `fields` 줄(굵은 글씨)을 추가하기 위해 `AuthorAdmin` 클래스를 업데이트 하세요:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

`fields` 속성은 양식에 보여져야 할 필드들만을 순서대로 목록짓습니다. 필드들은 기본적으로 수직적으로 표시되지만, 추가적으로 그것들을 튜플 안에 그룹짓는다면 수평적으로 표시됩니다(위의 "date" 필드처럼요).

웹사이트 안에서 저자 세부 사항 뷰로 이동하세요 — 이제 아래와 같이 보일겁니다:

![Admin Site - Improved Author Detail](admin_improved_author_detail.png)

> **참고:** **주의**: 당신은 또한 양식(form)에서 제외되어야 할 속성들의 목록을 선언하기 위해 `exclude` 속성을 사용할 수 있습니다 (모델 안의 다른 모든 속성들이 표시될 겁니다).

#### 세부 뷰 구역 나누기(Sectioning the detail view)

[fieldsets](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets) 속성을 사용하여, 세부 양식 안의 연관된 모델 정보를 그룹화하기 위해 "sections"를 추가할 수 있습니다.

`BookInstance` 안에서, 우리는 책이 무엇인지 (i.e. `name`, `imprint`, and `id`) 그리고 이것을 언제 빌릴 수 있는지 (`status`, `due_back`)에 대한 정보를 가지고 있습니다. 우리는 `BookInstanceAdmin` 클래스에 굵게 표시된 텍스트를 추가하여 이것들을 각각 다른 구역에 추가할 수 있습니다.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back')
        }),
    )
```

각각의 섹션엔 고유한 제목(또는 제목을 원하지 않을 경우, `None`) 그리고 사전의 필드와 관련된 튜플이 있습니다 — 양식(format)은 묘사하기 복잡하지만, 바로 위의 코드 조각을 본다면 이해하기 상당히 쉽습니다.

이제 웹사이트 안의 book instance view로 이동하세요; 이제 아래와 같은 양식이 보일겁니다:

![Admin Site - Improved BookInstance Detail with sections](admin_improved_bookinstance_detail_sections.png)

### 연관 레코드들의 인라인 편집(Inline editing of associated records)

때때로 연관된 레코드들을 동시에 추가하는 것이 가능할 때도 있습니다. 예를 들어, 세부 사항 페이지에서 책 정보 그리고 특정한 복사본에 대한 정보 둘 다 가질 수도 있습니다.

이것은 [inlines](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines)를 선언해서 할 수 있고, [TabularInline](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.TabularInline) (수평적 레이아웃)타입 또는 [StackedInline](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.StackedInline) (기본 모델 레이아웃과 같은 수직적 레이아웃)을 선택할 수 있습니다. 아래 `BookAdmin` 근처의 굵게 표시된 줄을 추가하여 `BookInstance` 정보 인라인을 `Book` 세부 사항(detail)에 추가할 수 있습니다:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
    inlines = [BooksInstanceInline]
```

이제 웹사이트의 `Book` 을 위한 화면으로 이동하세요 — 화면의 하단에서 이제 이 책과 연관된 책 인스턴스(book instances)를 볼 수 있을 겁니다(책의 장르 필드 바로 아래에):

![Admin Site - Book with Inlines](admin_improved_book_detail_inlines.png)

이 경우 우리는 인라인된 모델의 모든 필드들을 추가하는, 테이블화된 인라인 클래스를 선언했습니다. 레이아웃을 위해 모든 종류의 추가적인 정보들을 지정할 수 있습니다. 표시할 필드, 그것들의 순서, 그것들이 읽기 전용인지 아닌지, 등등을 포함해서요. (더 많은 정보를 위해 [TabularInline](https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.TabularInline) 를 보세요).

> **참고:** **주의**: 이 기능에는 몇 가지 고통스러운 한계가 있습니다! 위의 스크린샷에서 우리는 이미 존재하는 세 개의 책 인스턴스(book instance)와 그 아래에 새로운 책 인스턴스를 위한 세 개의 플레이스홀더(placeholder)를 가지고 있습니다(아주 비슷하게 보이지요!). 기본값으로 예비 책 인스턴스를 위한 플레이스를 홀더를 가지지 **않고** 새로운 북 인스턴스마다 **새로운 북 인스턴스 링크 하나씩** 추가하는 것이 좋습니다. 또는 `BookInstance` 를 여기서는 읽기 불가(non-readable) 링크로 목록화하는 것도 좋구요. 전자는 `BookInstanceInline` 모델 안의 `extra` 속성을 0으로 설정하여 완료할 수 있습니다. 직접 해보세요.

## 도전 과제

이 섹션에서 많은 것을 배웠기 때문에, 이젠 직접 몇 가지를 도전해 볼 차례입니다.

1. `BookInstance` 목록 뷰에 책, 상태, 만기 날짜, 그리고 id(book, status, due back date, id)를 표시하기 위한 코드를 추가해 보세요(기본`__str__()` 텍스트 가 아닌).
2. Book/BookInstance에서 했던 것고 같은 접근법을 사용해서 Author 세부 사항 뷰에 Book 항목들의 인라인 목록(Inline listing)을 추가해 보세요.

## 요약

이게 답니다! 이제 관리자 사이트를 어떻게 설정하는지에 대해 가장 간단한 방법으로 그리고 발전된 방법으로도 배웠습니다. superuser 만드는 방법, 관리자 사이트와 뷰들을 이동하는 방법, 레코드를 삭제 및 업데이트하는 방법 등등을 배웠습니다. 지금까지 여러 Books, BookInstances, Genres 그리고 Authors를 만들었고, 이것들은 우리가 우리만의 view와 탬플릿들을 만들었을 때 그곳에 목록화하여 나타낼 수 있을 것입니다.

## 추가 자료

- [Writing your first Django app, part 2: Introducing the Django Admin](https://docs.djangoproject.com/en/2.0/intro/tutorial02/#introducing-the-django-admin) (Django docs)
- [The Django Admin site](https://docs.djangoproject.com/en/2.0/ref/contrib/admin/) (Django Docs)

{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}
