---
title: 'Django 튜토리얼 파트 10: Django 웹 어플리케이션 테스트하기'
slug: Learn/Server-side/Django/Testing
---
## {{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}

웹사이트가 성장함에 따라 손으로 일일히 테스트하는 것은 점점 더 어려워진다. 테스트 할 내용이 늘어날 뿐만 아니라, 컴포넌트간의 상호작용도 복잡해지고, 한 쪽의 작은 수정이 다른쪽에 큰 영향을 줄수 있기 때문에, 모든것이 잘 동작할 수 있도록 더 많은 수정이 필요해지며, 그렇게 추가된 수정이 새로운 에러를 유발하지 않도록 확인되어야 한다. 이러한 문제들의 해결책중 하나는, 쉽고 안정적으로 수정사항이 발생할 때마다 실행되는 자동화된 테스트를 작성하는 것이다. 이 튜토리얼은 Django의 테스트 프레임워크를 사용하여 당신의 웹 사이트에 대한 Unit Testing을 자동화하는 방법을 보여줄것이다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전학습:</th>
      <td>
        아래 파트를 포함하여 앞선 모든 튜토리얼 파트의 학습을 완료할 것.
        <a href="/en-US/docs/Learn/Server-side/Django/Forms"
          >Django 튜토리얼 파트 9: 폼으로 작업하기</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">학습목표:</th>
      <td>Django 기반 웹사이트의 Unit Test 작성방법 이해하기.</td>
    </tr>
  </tbody>
</table>

## 개요

이제까지 개발된 [LocalLibrary](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website) 의 현재 상태는 다음과 같다. 모든 book과 author의 목록, `Book` 과 `Author` 항목별 상세 뷰, `BookInstance` 갱신용 페이지, `Author` 항목의 생성,갱신,삭제를 위한 페이지( [forms tutorial](/ko/docs/Learn/Server-side/Django/Forms) 편의 도전과제도 완성 했다면 `Book` 편집 페이지도 포함)가 완성 되었다. 상대적으로 작은 이 사이트조차, 각 페이지가 기대한 대로 동작하는지 손으로 대강 체크하는 것만 해도 몇 분 정도는 걸린다. 사이트가 성장하면서 수정사항이 늘어날수록 적절하게 동작하는지 우리가 수동으로 체크해야 하는 양도 늘어날 수 밖에 없다. 손으로 직접 테스트 하는 방법을 계속 유지한다면, 결국은 대부분의 시간을 테스트에 사용하고 코드를 개선할 수 있는 시간은 거의 없어질 것이다.

자동화된 테스트는 이러한 문제를 진짜로 해결할 수 있다! 명백한 이점은 수동 테스트보다는 훨신 빠르고, 훨씬 세부적인 내용까지도 테스트 할수 있으며, 매번 정확히 같은 기능을 테스트할 수 있다는 점(사람이 테스트한다면 결코 신뢰성있게 할 수 없는 부분!) 이다. 자동화 테스트는 빠르기 때문에 좀 더 정기적으로 실행할 수 있고, 테스트 실패시 코드가 기대대로 동작하지 않았던 부분을 정확히 지목할 수 있다.

게다가, 자동화된 테스트는 당신의 코드의 첫번째 실전 고객으로 역할을 수행하여, 당신의 웹사이트가 어떻게 동작해야하는지 엄격하게 정의하고 문서화하도록 압력을 준다. 종종 이 내용이 당신이 작성하게될 코드 예제나 관련문서의 기초 자료가 된다. 이러한 이유 때문에, 어떤 소프트웨어 개발 프로세스는 테스트 정의와 구현으로 시작되어, 테스트가 요구하는 동작을 충족하도록 코드가 작성되기도 한다. ( 예를 들면, [test-driven](https://en.wikipedia.org/wiki/Test-driven_development) 과 [behaviour-driven](https://en.wikipedia.org/wiki/Behavior-driven_development) 개발론).

이 튜토리얼은 , LocalLibrary 웹사이트에 몇가지 테스트를 추가하면서, Django에 대한 자동화된 테스트를 작성하는 방법을 보여준다.

### Testing의 종류

테스트의 성격, 수준, 테스트의 종류및 테스트에 대한 접근방법은 수없이 많다. 가장 중요한 방법들은 다음과 같다. :

- Unit tests (유닛 테스트)
  - : 독립적인 콤포넌트의 (성능이 아닌) 기능적인 동작을 검증한다. 흔히 class나 function 레벨로 수행한다.
- Regression tests ( 버그수정 확인 테스트 )
  - : 기존에 보고된 버그들이 재발하는지 테스트한다. 각 테스트는, 먼저 이전에 발생했던 버그가 수정되었는지 체크한 이후에, 버그 수정으로 인해 새롭게 발생되는 버그가 없는지 확인차 재수행하게 된다.
- Integration tests ( 통합 테스트 )
  - : 유닛 테스트를 완료한 각각의 독립적인 콤포넌트들이 함께 결합되어 수행하는 동작을 검증한다. 통합 테스트는 콤포넌트간에 요구되는 상호작용을 검사하며, 각 콤포넌트의 내부적인 동작까지 검증할 필요는 없다. 이 테스트는 단지 전체 웹사이트에 걸쳐 각 콤포넌트가 결합하여 수행하는 동작을 대상으로 한다.

> **참고:** **참고사항 :** 이외의 일반적인 테스트의 종류는 다음과 같다. 블랙박스, 화이트 박스, 수동, 자동, 카나리아, 스모크, 적합성 평가(conformance), 인수(acceptance), 기능성, 시스템, 성능, 로드, 스트레스 테스트등. 더 자세한 정보는 위의 키워드로 검색 바람.

### Django가 testing을 위해 제공하는 것은?

웹사이트를 테스트하는 것은 복잡한 작업입니다. 왜냐하면 이것이 HTTP 레벨의 리퀘스트 핸들링, 쿼리모델들, 폼 인증과 처리 그리고 템플릿 렌더링과 같은 여러 로직 레이어로 만들어졌기 때문입니다.

Django는 파이선 표준 라이브러리 unittest로 만들어진 작은 클라스계층의 테스트 프레임워크를 제공합니다. 그 이름과 다르게 이 테스트 프레임워크는 유닛테스트와 통합테스트 모두에게 적당합니다. 이 Django 프레임워크는 웹과 Django의 독특한 특징을 테스트하는 것을 돕기 위한 API메소드와 도구들을 추가합니다. 이것들은 당신이 리퀘스트를 시험하고, 시험 데이터를 삽입하고 그리고 당신의 애플리케이션의 결과물을 검사할 수 있게 합니다. Django는 또한 다른 테스트 프레임워크들을 사용하기 위한 API (LiveServerTestCase)와 도구들을 제공합니다. 예를 들면 당신은 사용자가 생중계 브라우저와 소통하는 것을 시뮬레이션하는 유명한 Selenium 프레임워크와 통합할 수 있습니다.

테스트를 작성하기 위해서는 Django(또는 unittest) 테스트기반 클라스들([SimpleTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/2.1/topics/testing/tools/#liveservertestcase))로부터 어떤 것을 가져오고 그리고 그 다음에 특별한 기능이 기대했던대로 작동하는지 체크하기 위한 분리된 메소드들을 작성합니다. (테스트들은 그 표현식의 결과가 True 또는 False 값인지 또는 그 두 값들이 동등한지 등을 테스트하기 위해 "assert" 메소드를 사용합니다) 당신이 테스트를 시작하면, 그 프레임워크는 당신의 가져온 클라스들안에서 선택된 테스트 메소드들을 실행합니다. 아래에 보이는 것과 같이, 그 테스트 메소드들은 클라스에서 정의된 보통의 셋업 그리고/또는 tear-down 방식을 가지고 독립적으로 실행됩니다.

```python
class YourTestClass(TestCase):
    def setUp(self):
        # Setup run before every test method.
        pass

    def tearDown(self):
        # Clean up run after every test method.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
```

대부분의 테스트들을 위한 최선의 기본 클라스는 [django.test.TestCase](https://docs.djangoproject.com/en/2.0/topics/testing/tools/#testcase) 입니다. 이 테스트 클라스는 이것이 실행되기 전에 하나의 깨끗한 데이터베이스를 생성하고, 그리고 이 자체의 트랜젝션에서 모든 테스트를 실행합니다. 이 클라스는 자체의 테스트 클라이언트를 갖고있는데, 이것은 당신이 view 레벨에서 그 코드가 사용자와 상호작용하는 것을 시뮬레이션할 수 있게 합니다. 아래 섹션에서는 이 [TestCase](https://docs.djangoproject.com/en/2.0/topics/testing/tools/#testcase) 기본 클라스를 이용하여 유닛테스트들에 집중할 것입니다.

> **참고:** 이[django.test.TestCase](https://docs.djangoproject.com/en/2.0/topics/testing/tools/#testcase) 클라스는 매우 편리합니다. 그러나 어떤 테스트들은 그들이 필요로하는 것보다 느려지는 결과가 올 수 있습니다(모든 테스트들이 그들 자체의 데이터베이스나 또는 view 상호작용의 셋업이 필요한 것은 아닙니다) 한번 당신이 이 클라스를 통해서 무엇을 할 수 있는지 익숙해진다면, 당신은 더 심플한 테스트 클라스들을 가지고 당신의 몇몇 테스트들을 대체하게 될 것입니다.

### 무엇을 테스트해야 하는가?

Python 또는 Django의 일부분으로서 제공되는 라이브러리들 또는 기능들을 제외한 당신 코드의 모든 면을 테스트해야합니다.

예를 들면, 아래에 정의된 Author 모델을 가정합니다. 당신은 first_name과 last_name이 데이터베이스 CharField로서 적당하게 저장됐는지에 대해 명시적으로 테스트할 필요가 없습니다. 왜냐하면, 그것은 Django에 의해 정의된 것이기 때문입니다. (물론 사실은 당신이 개발하는 중에 이 기능들을 필연적으로 테스트했음에도 불구하고요) 또한 date_of_birth가 날짜 필드에 적합한 값을 갖었는지 테스트하는 것도 필요없습니다. 왜냐하면 그렇게 하는 것은 Django에서 다시한번 더 실행하는 것이 되니까요.

그러나 당신은 그 레이블들(_First name, Last name, Date of birth, Died_)로 사용된 텍스트 그리고 그 텍스트(100 chars)을 위해 할당한 그 필드의 크기를 확인해야 합니다. 왜냐하면 이것들은 당신이 디자인한 것이고 추후에 깨지거나 변경될 수 있는 것이기 때문입니다.

```python
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'
```

단순히, 당신은 당신의 요구에 따라 만들어지 메소드들 `get_absolute_url()` 과 `__str__()` 이 원래 요구된 대로 작동하는지 체크해야합니다. 왜냐하면 이것들은 당신이 만들어낸 코드/비즈니스 로직이기 때문입니다. `get_absolute_url()`의 경우에 있어서는 Django의 reverse() 메소드는 적당하게 작동되었다고 신뢰할 수 있습니다, 그래서 당신이 테스트해야 하는 것은 실제로 정의되어온 관련된 view 입니다.

> **참고:** 영특한 독자들은 date of birth와 date of death를 합리적인 값으로 제한해야 한다고 적어야 하고, 그리고 death는 birth보다 뒤에 왔는지를 체크해야 한다고 할 것입니다. Django에 있어서 이 제약은 당신의 폼클라스에 추가될 것입니다(당신이 그 필드들의 이러한 모습을 모델 레벨이 아니라 오직 폼 레벨에서 사용될 수 있도록 인증을 정의할 수 있다고 할지라도 말입니다)

이런 것들을 마음에 두고서 테스트를 정의하고 실행해봅시다.

## 테스트 구조 개요

무엇을 테스트 할 지 자세히 보기 전에, 간단히 어디서 그리고 어떻게 테스트가 정의되는지 대략 살펴 봅시다.

장고는 유닛테스트의 모듈인 [built-in test discovery](https://docs.python.org/3/library/unittest.html#unittest-test-discovery "(in Python v3.5)")을 사용하는데, 이는 현재 작업중인 디렉토리의 **test\*.py**라는 패턴을 가진 모든 파일들을 체크합니다. 그 파일들의 이름을 적당하게 붙이는 한, 당신은 당신이 원하는 어떤 구조라도 이용할 수 있습니다. 우리는 당신의 테스트코드를 위한 한 모듈을 만들 것을 추천합니다. 그리고 모델들, 뷰들, 폼들 그리고 테스트가 필요한 어떤 다른 타입의 코드라도 각각을 분리하기를 바랍니다. 예를 들면:

```
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

당신의 LocalLibrary 프로젝트에서 위와 같은 구조의 파일을 만드십시오. \_\_init\_\_.py 파일은 비어있는 파일입니다.(이것은 Python에게 이 디렉토리가 패키지임을 알려줍니다) skeleton 테스트파일인 /catalog/tests.py를 복사하여 이름을 바꿔서 위의 세개의 테스트파일을 만드십시오.

> **참고:** 이 skeleton 테스트파일 **/catalog/tests.py 은 우리가** [Django skeleton website](/ko/docs/Learn/Server-side/Django/skeleton_website) 를 만들었을 때 자동으로 생성됩니다. 당신의 테스트들을 여기에 모두 넣는 것도 괜찮습니다만, 당신이 적절하게 테스트를 해나가면 당신은 금방 매우 크고, 관리할 필요 없는 테스트파일로 끝나게 될 것입니다.
>
> 이 skeleton 파일은 우리에게 필요하지 않으니 지우십시오.

**/catalog/tests/test_models.py** 파일을 오픈하십시오. 이 파일은 아래와 같이 `django.test.TestCase` 가 import 되었을 것입니다.

```python
from django.test import TestCase

# Create your tests here.
```

당신은 종종 특정한 기능을 테스트하기 위한 개별적인 메소드들을 가지고 당신이 테스트하기를 원하는 각각의 모델/뷰/폼을 위한 테스트 클라스를 추가할 것입니다. 또 다른 경우에는 당신은 그 사용사례의 다방면을 테스트하기 위한 개별적인 테스트기능을 가지고, 특별한 사용사례를 테스트하기 위한 별도의 클라스를 갖기를 원할 것입니다. (예를 들면, 실패한 사례들을 테스트하는 기능을 가지고 모델 필드가 적정하게 인증되었는지 테스트하는 한 클라스) 다시한번, 그 구조는 오직 당신 자신에게 달렸습니다. 그러나 당신이 일관되게 하는 것이 최선의 방법입니다.

아래의 테스트 클라스를 파일 맨아랫부분에 추가하십시오. 이 클라스는 `TestCase`으로부터 이끌어내어서 어떻게 테스트케이스 클라스를 구축하는지 예시를 보여줍니다.

```python
class YourTestClass(TestCase):
    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")
        pass

    def setUp(self):
        print("setUp: Run once for every test method to setup clean data.")
        pass

    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Method: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)
```

이 새로운 클래스는 테스트 전 준비를 위해 사용할 수 있는 메쏘드 두 개를 정의합니다. (예를 들면 테스트에 필요한 모델이나 객체를 생성해 놓을 수 있습니다):

- `setUpTestData()` 는 클래스 전체에서 사용되는 설정을 위해서 테스트 시작 때 딱 한 번만 실행됩니다. 테스트 메쏘드가 실행되면서 수정되거나 변경되지 않을 객체들을 이곳에서 생성할 수 있습니다.
- `setUp()` 은 각각의 테스트 메쏘드가 실행될 때마다 실행됩니다. 테스트 중 내용이 변경될 수 있는 객체를 이곳에서 생성할 수 있습니다 (모든 테스트 메쏘드는 방금 막 생성된 ("fresh") 오브젝트를 입력받게 됩니다).

> **참고:** 테스트 클래스는 위 예제에서 사용하지 않은 `tearDown(`h 메소드를 가지고 있습니다. 이 메소드는 특히 데이터베이스 테스트에는 유용하지가 않은데 바로 베이스 클래스인 `TestCase` 가 데이터베이스 삭제(teardown) 을 처리해주기 때문입니다.

아래에는 `Assert` 함수를 사용하여 조건이 참, 거짓 또는 동일한지 테스트하는 여러 가지 테스트 메서드가 있습니다 (`AssertTrue`, `AssertFalse`, `AssertEqual`). 조건이 예상대로 실행되지 않으면 테스트가 실패하고 콘솔에 오류를 보고합니다.

> **참고:** 일반적으로 위와 같이 테스트에 **print()** 함수를 포함하면 **안**됩니다. 여기서는 setup 함수들이 콘솔에서 호출되는 순서를 (다음 절에서) 볼 수 있도록 하기 위해 사용되었습니다.

## 어떻게 테스트를 작동시키는가

모든 테스트를 실행하는 가장 쉬운 방법은 다음 명령을 사용하는 것입니다.

```bash
python3 manage.py test
```

이 명령은 현재 경로에서 **test\*.py** 패턴을 만족하는 모든 파일을 찾은 후 이들 테스트를 적합한 베이스 클래스를 이용해서 실행합니다 (우리는 현재 여러 개의 테스트 파일을 가지고 있지만 **/catalog/tests/test_models.py** 만이 실제 테스트를 포함하고 있습니다. 기본적으로 각각의 테스트는 실패 결과만을 보고하며, 마지막으로 테스트 결과 요약을 출력합니다.

> **참고:** 만약 `ValueError: Missing staticfiles manifest entry ...` 과 같은 에러를 마주칠 수 있습니다. 이런 에러는 보통 테스팅 도구가 기본적으로 collectstatic을 실행하지 않고, 당신의 앱이 이를 요구하는 storage 클래스를 사용하기 때문일 수 있습니다 ([manifest_strict](https://docs.djangoproject.com/en/2.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) 에 더 자세한 정보가 적혀 있습니다). 이 문제를 해결할 수 있는 다양한 방법이 있지만 가장 간단한 방법은 테스트 실행 전에 collectstatic을 실행하는 것입니다.
>
> ```bash
> python3 manage.py collectstatic
> ```

*LocalLibrary*의 루트 디렉토리에서 테스트를 실행하세요. 당신은 아래와 같은 출력output을 볼 것입니다.

```bash
> python3 manage.py test

Creating test database for alias 'default'...
setUpTestData: Run once to set up non-modified data for all class methods.
setUp: Run once for every test method to setup clean data.
Method: test_false_is_false.
setUp: Run once for every test method to setup clean data.
Method: test_false_is_true.
setUp: Run once for every test method to setup clean data.
Method: test_one_plus_one_equals_two.
.
======================================================================
FAIL: test_false_is_true (catalog.tests.tests_models.YourTestClass)
-------------------------------------------------------------------