---
title: "Django 튜토리얼 파트 10: Django 웹 어플리케이션 테스트하기"
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
        <a href="/ko/docs/Learn/Server-side/Django/Forms"
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

장고는 유닛테스트의 모듈인 [built-in test discovery](https://docs.python.org/3/library/unittest.html#unittest-test-discovery)을 사용하는데, 이는 현재 작업중인 디렉토리의 **test\*.py**라는 패턴을 가진 모든 파일들을 체크합니다. 그 파일들의 이름을 적당하게 붙이는 한, 당신은 당신이 원하는 어떤 구조라도 이용할 수 있습니다. 우리는 당신의 테스트코드를 위한 한 모듈을 만들 것을 추천합니다. 그리고 모델들, 뷰들, 폼들 그리고 테스트가 필요한 어떤 다른 타입의 코드라도 각각을 분리하기를 바랍니다. 예를 들면:

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
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\Github\django_tmp\library_w_t_2\locallibrary\catalog\tests\tests_models.py", line 22, in test_false_is_true
    self.assertTrue(False)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.075s

FAILED (failures=1)
Destroying test database for alias 'default'...
```

여기서 우리는 테스트 하나가 실패했음을 알 수 있으며, 실패한 함수와 실패한 이유를 정확히 볼 수 있습니다 (False가 True가 아니기 때문에 실패하는 것이 당연합니다).

> **참고:** **팁**: 우리는 위의 출력 결과를 통해서 객체와 메소드에 설명적인, 정보가 많은 이름을 사용하는 것이 테스트 결과를 이해하는데 도움이 된다는 것을 배울 수 있습니다.

**굵게** 표시된 텍스트는 보통은 테스트 결과에 출력되지 않습니다 (우리가 테스트에서 사용한 `print()` 함수가 출력한 것입니다). 이는 `setUpTestData()` 가 클래스 당 한 번, `setUp()` 이 메소드 당 한 번 실행되는 것을 보여줍니다.

다음 섹션은 특정 테스트만 실행하는 방법과 테스트가 출력하는 정보를 조절하는 방법을 알려줍니다.

### 테스트에 대해 더 많은 정보를 출력하기

테스트 실행에 대한 자세한 정보를 얻으려면 verbosity를 조절할 수 있습니다. 예를 들어 테스트 실패와 더불어 성공 (그리고 테스트 데이터베이스 생성 과정에 대한 정보)를 나열하려면 다음과 같이 verbosity를 "2"로 설정할 수 있습니다.

```bash
python3 manage.py test --verbosity 2
```

허용되는 verbosity levels 은 0, 1, 2, and 3, 이며 기본값은 "1" 입니다.

### 테스트의 일부만 실행하기

테스트 중 일부만 실행하려면 패키지, 모듈, `TestCase` 서브클래스, 메서드의 전체 경로를 지정해주면 됩니다.

```bash
# Run the specified module
python3 manage.py test catalog.tests

# Run the specified module
python3 manage.py test catalog.tests.test_models

# Run the specified class
python3 manage.py test catalog.tests.test_models.YourTestClass

# Run the specified method
python3 manage.py test catalog.tests.test_models.YourTestClass.test_one_plus_one_equals_two
```

## LocalLibrary 테스트

테스트를 어떻게 돌릴지와 어떤 내용을 테스트할지를 알았으니 이제 실제 예제들을 봅시다.

> **참고:**우리는 가능한 모든 테스트를 작성하지는 않을 것입니다. 하지만 아래의 예제만으로도 테스트가 어떻게 동작하는지와 어떤 테스트를 작성할 수 있을지 아이디어를 얻을 수 있을 것입니다.

### 모델

위에서 논의했듯이 우리는 우리가 디자인 했거나, 우리가 작성한 코드의 동작만을 테스트해야하지 Django 또는 Python 개발팀에서 이미 테스트 한 라이브러리 / 코드는 테스트하지 않아야 합니다.

예를 들어, 아래 `Author` 모델을 봅시다. 여기서 우리는 모든 필드의 라벨을 테스트해야 합니다. 우리가 필드의 라벨을 지정하지는 않았지만 우리의 디자인은 라벨의 값이 어때야하는지를 이미 정해놓고 있기 때문입니다. 우리가 이 값들을 테스트하지 않는다면 필드 라벨에 의도된 값을 가지는지 알 수 없습니다. 마찬가지로 비록 우리는 Django가 필드들을 지정된 길이대로 만들 것이라고 믿지만, 그래도 필드의 길이를 테스트해보는 것이 헛되지는 않습니다.

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

**/catalog/tests/test_models.py** 을 열어서 기존 코드를 다음의 `Author` 모델 테스트 코드로 바꿔주세요.

먼저 우리는 `TestCase` 를 불러온 후 이를 상속해서 우리의 테스트 케이스인 `AuthorModelTest` 를 작성합니다. 테스트가 실패할 경우 출력에서 테스트 명을 쉽게 파악할 수 있도록 이름을 작성한 것에 주목해 주세요. 또 우리는 `setUpTestData()`를 불러서 테스트 시에 이용되지만 수정은 가하지 않는 저자 객체를 생성합니다.

```python
from django.test import TestCase

from catalog.models import Author

class AuthorModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Author.objects.create(first_name='Big', last_name='Bob')

    def test_first_name_label(self):
        author = Author.objects.get(id=1)
        field_label = author._meta.get_field('first_name').verbose_name
        self.assertEquals(field_label, 'first name')

    def test_date_of_death_label(self):
        author=Author.objects.get(id=1)
        field_label = author._meta.get_field('date_of_death').verbose_name
        self.assertEquals(field_label, 'died')

    def test_first_name_max_length(self):
        author = Author.objects.get(id=1)
        max_length = author._meta.get_field('first_name').max_length
        self.assertEquals(max_length, 100)

    def test_object_name_is_last_name_comma_first_name(self):
        author = Author.objects.get(id=1)
        expected_object_name = f'{author.last_name}, {author.first_name}'
        self.assertEquals(expected_object_name, str(author))

    def test_get_absolute_url(self):
        author = Author.objects.get(id=1)
        # This will also fail if the urlconf is not defined.
        self.assertEquals(author.get_absolute_url(), '/catalog/author/1')
```

필드 테스트들은 필드 라벨의 값(`verbose_name`)을 확인하고 character 필드의 크기가 예상대로인지를 확인합니다. 이들 테스트 메소드의 변수명은 모두 메소드의 기능을 묘사하고 있으며 같은 규칙을 따릅니다.

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEquals(field_label, 'first name')
```

몇 가지 흥미로운 점들이 있습니다:

- 우리는 `author.first_name.verbose_name` 을 이용해서 `verbose_name`을 얻지 않습니다. 왜냐면 `author.first_name`은 문자열이지 우리가 속성에 접근할 수 있는 `first_name`객체가 아니기 때문입니다. 대신 우리는 author 객체의 `_meta` 속성을 이용해서 필드에 접근하여 필요한 정보를 얻습니다.
- 우리는 `assertTrue(field_label == 'first name'` 대신 `assertEquals(field_label,'first name')` 을 이용했습니다. 왜냐면 만약 테스트가 실패할 경우 후자는 실제 라벨의 값을 알려주어 디버깅을 조금 더 용이하게 만들어주기 때문입니다.

> **참고:** `last_name` 과 `date_of_birth` 필드의 라벨에 대한 테스트와 `last_name` 필드의 길이에 대한 테스트는 생략되었습니다. 기존 테스트의 이름 작성 규칙 (naming convention)과 테스트 작성법을 이용해서 직접 테스트를 작성해보세요.

우리는 우리가 작성한 메서드도 테스트를 해야 합니다. 객체의 이름이 우리가 예상한 대로 "Last Name", "First Name" 규칙에 맞게 생성되었는지와 `Author` 객체의 URL이 우리가 예상한 대로 생성되는지를 보면 됩니다.

```python
def test_object_name_is_last_name_comma_first_name(self):
    author = Author.objects.get(id=1)
    expected_object_name = f'{author.last_name}, {author.first_name}'
    self.assertEquals(expected_object_name, str(author))

def test_get_absolute_url(self):
    author = Author.objects.get(id=1)
    # This will also fail if the urlconf is not defined.
    self.assertEquals(author.get_absolute_url(), '/catalog/author/1')
```

테스트들을 돌려봅시다. Author 모델을 앞선 튜토리얼에 따라 만들었다면 아마 다음과 같이 `date_of_death` 라벨에 대한 에러가 나올 것입니다. 이 테스트는 라벨명이 라벨의 첫글자를 대문자로 처리하지 않는 장고의 컨벤션에 따라 생성된 것을 가정했기 때문에 실패합니다.

```bash
======================================================================
FAIL: test_date_of_death_label (catalog.tests.test_models.AuthorModelTest)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\...\locallibrary\catalog\tests\test_models.py", line 32, in test_date_of_death_label
    self.assertEquals(field_label,'died')
AssertionError: 'Died' != 'died'
- Died
? ^
+ died
? ^
```

이는 아주 사소한 버그이지만, 테스트를 작성하는 것이 코드를 작성할 때 하는 가정들을 얼마나 꼼꼼히 체크하는지를 보여줍니다.

> **참고:**date_of_death 필드의 라벨을 (/catalog/models.py) "died" 로 바꾸고 테스트를 다시 돌려보세요.

다른 모델을 테스트하는 패턴도 이와 비슷하므로 여기서는 더 다루지 않겠습니다. 다른 모델에 대한 테스트 코드도 직접 작성해 보세요.

### Forms

Forms를 테스트 하는 것은 모델을 테스트 하는 것과 비슷합니다; 당신이 만들고 디자인한 세세한 모든 것들은 테스트가 필요하며, 프레임워크나 써드 파티 라이브러리 등에 대해서는 테스트를 작성하지 않아도 좋습니다.

따라서 폼에 대한 테스트 코드를 작성할 때는 보통 폼이 우리가 원하는 필드를 가지고 있는지, 그리고 이들 필드들이 적절한 라벨과 도움말과 함께 나타나는지를 테스트하면 됩니다. 직접 별도의 필드와 검증 로직을 작성하지 않은 이상 장고가 필드 타입을 제대로 검증하는지는 테스트 하지 않아도 됩니다 - 예를 들어 이메일 필드가 정말로 이메일 주소 값만을 받아들이는지 직접 테스트 할 필요가 없습니다. 하지만 필드에 대한 다른 추가적인 유효성 검증 로직과 다른 에러 메시지에 대해서는 테스트가 필요합니다.

책 정보를 갱신하기 위한 우리의 Form을 생각해봅시다. 이 Form은 갱신 날짜를 위한 하나의 필드를 가지고 있으며 해당 필드는 우리가 테스트해야 할 라벨과 도움말을 가지고 있습니다.

```python
class RenewBookForm(forms.Form):
    """Form for a librarian to renew books."""
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if date is in the allowed range (+4 weeks from today).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

**/catalog/tests/test_forms.py** 을 열어서 기존 코드를 아래의 `RenewBookForm` 테스트 코드로 바꿔주세요. 아래 코드는 우선 우리의 Form과 시간에 관련한 로직 테스트를 도와줄 파이썬 및 장고 라이브러리를 불러옵니다. 그리고 우리는 모델을 테스트 했을 때와 마찬가지로 Form 테스트 클래스를 선언하고, 마찬가지로 테스트의 목적과 기능을 알려주는 이름을 지어줬습니다.

```python
import datetime

from django.test import TestCase
from django.utils import timezone

from catalog.forms import RenewBookForm

class RenewBookFormTest(TestCase):
    def test_renew_form_date_field_label(self):
        form = RenewBookForm()
        self.assertTrue(form.fields['renewal_date'].label == None or form.fields['renewal_date'].label == 'renewal date')

    def test_renew_form_date_field_help_text(self):
        form = RenewBookForm()
        self.assertEqual(form.fields['renewal_date'].help_text, 'Enter a date between now and 4 weeks (default 3).')

    def test_renew_form_date_in_past(self):
        date = datetime.date.today() - datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_too_far_in_future(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4) + datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_today(self):
        date = datetime.date.today()
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())

    def test_renew_form_date_max(self):
        date = timezone.now() + datetime.timedelta(weeks=4)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())
```

앞의 두 함수는 필드의 라벨과 도움말이 예상대로 생성되었는지를 확인합니다. 우리는 필드를 fields 딕셔너리를 통해서 접근했습니다 (e.g. `form.fields['renewal_date']`). 라벨의 값이 `None` 인지도 확인해야하는 것을 기억해 두세요. 장고가 올바른 라벨을 렌더하더라도 만약 라벨의 값이 명시적으로 정해지지 않았다면 `None` 이 반환됩니다.

나머지 함수들은 폼이 적절한 구간 내에 있는 갱신 일자를 수락하는지와 더불어 부적합한 구간에 있는 일자를 거절하는지를 테스트 합니다. 우리가 테스트용 날짜들을 `datetime.timedelta()` (몇 일이나 몇 주를 나타냅니다)을 이용해서 현재 날짜 근처로(`datetime.date.today()` ) 생성하는 것을 기억해두세요. 그리고나서 우리는 폼을 만들고, 데이터를 집어넣고, 데이터가 유효한지를 테스트합니다.

> **참고:** 여기서 우리는 데이터베이스나 테스트 클라이언트를 사용하지 않습니다. [SimpleTestCase](https://docs.djangoproject.com/en/2.0/topics/testing/tools/#django.test.SimpleTestCase)를 이용해서 테스트 클래스를 만드는 것을 고려해보세요.
>
> 또한 우리는 만약 폼이 유효하지 않을 경우 적절한 에러가 발생하는지 역시 검증해야 합니다. 하지만 보통 이 부분은 view processing의 일부로 처리되기 때문에 다음 섹션에서 다루도록 하겠습니다.

이것이 form에 대한 전부입니다. 비록 다른 폼들이 있지만, 이들은 우리의 클래스 기반 편집 뷰에 의해 생성된 것들이기 때문에 그쪽에서 테스트 되어야 합니다. 테스트를 실행하고 우리의 코드가 여전히 테스트를 통과하는지 확인해 보세요.

### Views

우리의 뷰 동작을 유효하게 하기 위해서 우리는 Django test [Client](https://docs.djangoproject.com/en/2.0/topics/testing/tools/#django.test.Client)를 사용합니다. 이 클래스는 더미 웹 브라우저와 같이 동작하는데, 우리는 URL의 `GET` 과 `POST` 요청을 동시에 하여 그 반응을 살핍니다. 우리는 저수준의 HTTP (응답의 헤더와 상태 코드) 부터 HTML을 렌더하기 위한 템플릿, 그리고 우리가 템플릿에 입력하는 컨텍스트 데이터까지 응답에 대한 거의 모든 것을 확인할 수 있습니다. 또한 우리는 (만약 이뤄진다면) redirect가 진행되는 단계와 각 단계에 대한 URL 및 상태 코드 역시 확인할 수 있습니다. 이를 통해서 우리는 각 뷰가 예상된 대로 동작하는지를 확인할 수 있습니다.

우리의 가장 간단한 뷰 중 하나인 모든 저자들의 목록을 반환하는 뷰부터 시작해봅시다. 이 뷰는 **/catalog/authors/** URL(URL 설정 상에서 'authors'로 명명되었습니다) 에서 출력됩니다.

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

이 뷰가 generic list 뷰이다 보니 거의 모든 것이 장고에 의해서 처리됩니다. 만약 장고를 믿는다면 우리는 오로지 뷰가 올바른 URL과 뷰 이름으로 접근 가능한지만 테스트하면 됩니다. 하지만 만약 테스트 주도 방법론 (TDD)를 따른다면 우리는 (코드를 작성하기 전에) 뷰가 모든 저자들을 10명 씩 paginate해서 보여주는지를 확인하는 테스트부터 작성해야 합니다.

**/catalog/tests/test_views.py**를 열어서 기존 코드를 다음의 `AuthorListView` 테스트 코드로 바꿔주세요. 앞서와 마찬가지로 우리 모델과 유용한 클래스들을 불러옵니다.`setUpTestData()` 에서는 pagination을 테스트하기 위해 `Author` 객체 여러 개를 생성합니다.

```python
from django.test import TestCase
from django.urls import reverse

from catalog.models import Author

class AuthorListViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Create 13 authors for pagination tests
        number_of_authors = 13

        for author_id in range(number_of_authors):
            Author.objects.create(
                first_name=f'Christian {author_id}',
                last_name=f'Surname {author_id}',
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/catalog/authors/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'catalog/author_list.html')

    def test_pagination_is_ten(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertTrue(len(response.context['author_list']) == 10)

    def test_lists_all_authors(self):
        # Get second page and confirm it has (exactly) remaining 3 items
        response = self.client.get(reverse('authors')+'?page=2')
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertTrue(len(response.context['author_list']) == 3)
```

모든 테스트는 `TestCase`를 상속한 우리 테스트 클래스에 있는 클라이언트를 이용해서 `GET` 요청을 하고 그에 따른 응답을 받습니다. 첫번째 테스트는 특정 URL (도메인이 아닌 상대 경로임을 기억하세요) 을 확인하고 두번째 테스트는 URL 설정에서 설정해준 뷰의 이름에서 얻은 URL을 확인합니다.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

응답을 받으면 우리는 응답에서 상태 코드, 사용된 템플릿, pagination이 되었는지 여부, 반환된 객체의 갯수, 그리고 전체 아이템의 갯수를 확인합니다.

우리가 검증하는 변수 중 가장 흥미로운 변수는 바로 `response.context`로 뷰에 의해서 템플릿에 전달되는 context 변수입니다. 이는 템플릿이 필요한 모든 데이터를 받는지를 검증할 수 있게 해주기 때문에 테스팅에 정말 유용합니다. 즉 우리는 어떤 템플릿이 사용되고 또 어떤 데이터가 템플릿에 전달되는지를 확인할 수 있기 때문에 자신있게 렌더링에 관한 나머지 문제들은 오로지 템플릿의 문제라고 생각할 수 있습니다.

#### 로그인한 사용자에게만 보이는 뷰

종종 우리는 로그인 한 사용자에게만 보이는 뷰를 테스트하고 싶습니다. 예를 들어서 `LoanedBooksByUserListView`는 방금 테스트한 뷰와 비슷하지만 로그인한 유저만 접근할 수 있으며, 현재 유저가 대출한, '대출 중' 상태의 `BookInstance` 만 보여주며 가장 오래된 것 부터 먼저 보여줍니다.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin, generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

아래 코드를 **/catalog/tests/test_views.py** 에 추가해주세요. 여기서 우리는 `SetUp()` 을 이용해서 계정을 생성한 다음 테스트에 사용할 `BookInstance` 객체와 관련된 책 및 기타 정보를 생성합니다. 각각의 테스트 계정에 의해서 책이 반반씩 대출되었지만 일단 우리는 모든 책의 상태를 "maintenance"로 설정합니다. 우리는 테스트 하면서 이들 객체들을 수정할 것이기 때문에 `setUpTestData()` 대신 `SetUp()`을 사용했습니다.

> **참고:** 아래의 `setUp()` 코드는 특정 `Language`의 책을 생성하지만, `Language` 모델이 이전 튜토리얼에서 도전 과제로 생성되었기 때문에 여러분의 코드에는 존재하지 않을 수 있습니다. 이때는 간단히 `Language` 객체를 불러오거나 생성하는 코드를 주석처리 해주세요. 같은 작업을 곧 나올 `RenewBookInstancesViewTest` 에도 해줘야 합니다.

```python
import datetime

from django.utils import timezone
from django.contrib.auth.models import User # Required to assign User as a borrower

from catalog.models import BookInstance, Book, Genre, Language

class LoanedBookInstancesByUserListViewTest(TestCase):
    def setUp(self):
        # Create two users
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create 30 BookInstance objects
        number_of_book_copies = 30
        for book_copy in range(number_of_book_copies):
            return_date = timezone.now() + datetime.timedelta(days=book_copy%5)
            the_borrower = test_user1 if book_copy % 2 else test_user2
            status = 'm'
            BookInstance.objects.create(
                book=test_book,
                imprint='Unlikely Imprint, 2016',
                due_back=return_date,
                borrower=the_borrower,
                status=status,
            )

    def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('my-borrowed'))
        self.assertRedirects(response, '/accounts/login/?next=/catalog/mybooks/')

    def test_logged_in_uses_correct_template(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/bookinstance_list_borrowed_user.html')
```

뷰가 로그인하지 않은 사용자를 로그인 화면으로 redirect 하는 것을 확인하기 위해 우리는 `assertRedirects`를 사용함을 `test_redirect_if_not_logged_in()`에서 확인할 수 있습니다. 페이지가 로그인 한 사용자에게 보임을 확인하기 위해서 우리는 테스트 유저로 로그인을 한 후에 페이지에 접근해서 응답의 상태코드가 200번임을 확인합니다 (성공을 의미).

나머지 테스트 코드는 뷰가 현재 로그인 한 사용자가 대출한 책만을 반환하는지를 검증합니다. 아래의 코드를 위의 테스트 클래스 아래에 붙여 넣어 주세요.

```python
    def test_only_borrowed_books_in_list(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check that initially we don't have any books in list (none on loan)
        self.assertTrue('bookinstance_list' in response.context)
        self.assertEqual(len(response.context['bookinstance_list']), 0)

        # Now change all books to be on loan
        books = BookInstance.objects.all()[:10]

        for book in books:
            book.status = 'o'
            book.save()

        # Check that now we have borrowed books in the list
        response = self.client.get(reverse('my-borrowed'))
        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        self.assertTrue('bookinstance_list' in response.context)

        # Confirm all books belong to testuser1 and are on loan
        for bookitem in response.context['bookinstance_list']:
            self.assertEqual(response.context['user'], bookitem.borrower)
            self.assertEqual('o', bookitem.status)

    def test_pages_ordered_by_due_date(self):
        # Change all books to be on loan
        for book in BookInstance.objects.all():
            book.status='o'
            book.save()

        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Confirm that of the items, only 10 are displayed due to pagination.
        self.assertEqual(len(response.context['bookinstance_list']), 10)

        last_date = 0
        for book in response.context['bookinstance_list']:
            if last_date == 0:
                last_date = book.due_back
            else:
                self.assertTrue(last_date <= book.due_back)
                last_date = book.due_back
```

당신은 pagination 역시 테스트 할 수 있습니다. 한 번 해보셨으면 좋겠습니다 :)

#### Form을 이용하는 view를 테스트하기

Form을 이용하는 뷰를 테스트하는 것은 앞선 경우에 비해 살짝 더 복잡합니다. 왜냐면 우리는 코드의 더 다양한 부분을 - 첫 화면, 데이터 유효성 검증이 실패한 화면, 데이터 유효성 검증이 성공한 화면 - 모두를 테스트해야 하기 때문입니다. 다행히 우리는 데이터를 보여주기만 하는 뷰를 테스트 할 때 사용했던 클라이언트를 거의 그대로 사용할 수 있습니다.

대출을 갱신하기 위한 뷰를 테스트하기 위한 코드를 짜봅시다 (`renew_book_librarian()`):

```python
from catalog.forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
def renew_book_librarian(request, pk):
    """View function for renewing a specific BookInstance by librarian."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        book_renewal_form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        book_renewal_form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'book_renewal_form': book_renewal_form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

이제 우리는 `can_mark_returned` permission을 가진 사용자만이 view를 사용할 수 있는지, 그리고 그 사용자들이 가지고 있지 않은 `BookInstance` 을 수정하려고 시도하면 HTTP 404 에러 페이지로 리다이렉트 되는지 테스트해봐야 합니다. We should check that the initial value of the form is seeded with a date three weeks in the future, and that if validation succeeds we're redirected to the "all-borrowed books" view. As part of checking the validation-fail tests we'll also check that our form is sending the appropriate error messages.

Add the first part of the test class (shown below) to the bottom of **/catalog/tests/test_views.py**. This creates two users and two book instances, but only gives one user the permission required to access the view. The code to grant permissions during tests is shown in bold:

```python
import uuid

from django.contrib.auth.models import Permission # Required to grant the permission needed to set a book as returned.

class RenewBookInstancesViewTest(TestCase):
    def setUp(self):
        # Create a user
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        permission = Permission.objects.get(name='Set book as returned')
        test_user2.user_permissions.add(permission)
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create a BookInstance object for test_user1
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance1 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user1,
            status='o',
        )

        # Create a BookInstance object for test_user2
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance2 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user2,
            status='o',
        )
```

Add the following tests to the bottom of the test class. These check that only users with the correct permissions (_testuser2_) can access the view. We check all the cases: when the user is not logged in, when a user is logged in but does not have the correct permissions, when the user has permissions but is not the borrower (should succeed), and what happens when they try to access a `BookInstance` that doesn't exist. We also check that the correct template is used.

```python
   def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        # Manually check redirect (Can't use assertRedirect, because the redirect URL is unpredictable)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(response.url.startswith('/accounts/login/'))

    def test_redirect_if_logged_in_but_not_correct_permission(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))

        # Manually check redirect (Can't use assertRedirect, because the redirect URL is unpredictable)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(response.url.startswith('/accounts/login/'))

    def test_logged_in_with_permission_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance2.pk}))

        # Check that it lets us login - this is our book and we have the right permissions.
        self.assertEqual(response.status_code, 200)

    def test_logged_in_with_permission_another_users_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))

        # Check that it lets us login. We're a librarian, so we can view any users book
        self.assertEqual(response.status_code, 200)

    def test_HTTP404_for_invalid_book_if_logged_in(self):
        # unlikely UID to match our bookinstance!
        test_uid = uuid.uuid4()
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk':test_uid}))
        self.assertEqual(response.status_code, 404)

    def test_uses_correct_template(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/book_renew_librarian.html')
```

아래에 보이는 것처럼 새로운 테스트 방법을 추가해봅시다. 이것은 form의 초기 날짜가 3주 후인지를 확인합니다. 어떻게 우리가 form 필드의 첫 번째 값에 접근하는 것이 가능한지 참고해보세요. (굵게 표시된 부분에서 확인할 수 있습니다.)

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

> **경고:** 만약 당신이 class `RenewBookForm(forms.Form)` 대신에 class `RenewBookModelForm(forms.ModelForm)` 을 사용한다면, form의 필드명은 **'renewal_date'** 대신 **'due_back'**으로 나타날 것입니다.

The next test (add this to the class too) checks that the view redirects to a list of all borrowed books if renewal succeeds. What differs here is that for the first time we show how you can `POST` data using the client. The post _data_ is the second argument to the post function, and is specified as a dictionary of key/values.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> **경고:** The _all-borrowed_ view was added as a _challenge_, and your code may instead redirect to the home page '/'. If so, modify the last two lines of the test code to be like the code below. The `follow=True` in the request ensures that the request returns the final destination URL (hence checking `/catalog/` rather than `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True )
>  self.assertRedirects(response, '/catalog/')
> ```

Copy the last two functions into the class, as seen below. These again test `POST` requests, but in this case with invalid renewal dates. We use `assertFormError()` to verify that the error messages are as expected.

```python
    def test_form_invalid_renewal_date_past(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        date_in_past = datetime.date.today() - datetime.timedelta(weeks=1)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': date_in_past})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'renewal_date', 'Invalid date - renewal in past')

    def test_form_invalid_renewal_date_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        invalid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=5)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': invalid_date_in_future})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response, 'form', 'renewal_date', 'Invalid date - renewal more than 4 weeks ahead')
```

The same sorts of techniques can be used to test the other view.

### Templates

Django provides test APIs to check that the correct template is being called by your views, and to allow you to verify that the correct information is being sent. There is however no specific API support for testing in Django that your HTML output is rendered as expected.

## Other recommended test tools

Django's test framework can help you write effective unit and integration tests — we've only scratched the surface of what the underlying **unittest** framework can do, let alone Django's additions (for example, check out how you can use [unittest.mock](https://docs.python.org/3.5/library/unittest.mock-examples.html) to patch third party libraries so you can more thoroughly test your own code).

While there are numerous other test tools that you can use, we'll just highlight two:

- [Coverage](http://coverage.readthedocs.io/en/latest/): This Python tool reports on how much of your code is actually executed by your tests. It is particularly useful when you're getting started, and you are trying to work out exactly what you should test.
- [Selenium](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) is a framework to automate testing in a real browser. It allows you to simulate a real user interacting with the site, and provides a great framework for system testing your site (the next step up from integration testing).

## Challenge yourself

There are a lot more models and views we can test. As a simple task, try to create a test case for the `AuthorCreate` view.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = '__all__'
    initial = {'date_of_death':'12/10/2016'}
    permission_required = 'catalog.can_mark_returned'
```

Remember that you need to check anything that you specify or that is part of the design. This will include who has access, the initial date, the template used, and where the view redirects on success.

## Summary

Writing test code is neither fun nor glamorous, and is consequently often left to last (or not at all) when creating a website. It is however an essential part of making sure that your code is safe to release after making changes, and cost-effective to maintain.

In this tutorial we've shown you how to write and run tests for your models, forms, and views. Most importantly we've provided a brief summary of what you should test, which is often the hardest thing to work out when you're getting started. There is a lot more to know, but even with what you've learned already you should be able to create effective unit tests for your websites.

The next and final tutorial shows how you can deploy your wonderful (and fully tested!) Django website.

## See also

- [Writing and running tests](https://docs.djangoproject.com/en/2.0/topics/testing/overview/) (Django docs)
- [Writing your first Django app, part 5 > Introducing automated testing](https://docs.djangoproject.com/en/2.0/intro/tutorial05/) (Django docs)
- [Testing tools reference](https://docs.djangoproject.com/en/2.0/topics/testing/tools/) (Django docs)
- [Advanced testing topics](https://docs.djangoproject.com/en/2.0/topics/testing/advanced/) (Django docs)
- [A Guide to Testing in Django](http://toastdriven.com/blog/2011/apr/10/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Test-Driven Web Development with Django](http://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testing in Django (Part 1) - Best Practices and Examples](https://realpython.com/blog/python/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}
