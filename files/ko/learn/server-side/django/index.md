---
title: Django 웹 프레임워크 (파이썬)
slug: Learn/Server-side/Django
---

{{LearnSidebar}}

Django는 파이썬으로 구성된, 인기 많고 완벽한 기능을 갖춘 서버-사이드 웹 프레임워크입니다. 이 모듈은 Django가 웹 서버 프레임워크 중 가장 유명한 이유, 개발환경을 설정하는 방법, 그리고 이를 통해 자신만의 웹 애플리케이션을 만드는 방법을 알려줍니다.

## 전제조건

이 모듈을 시작하기에 앞서, 당신이 Django에 대해 미리 알 필요는 전혀 없습니다. 하지만 [Server-side website programming first steps](/ko/docs/Learn/Server-side/First_steps) 모듈을 보면서 과연 서버-사이드 웹 프로그래밍과 웹 프레임워크가 무엇인가에 대해서는 이해 할 필요가 있습니다.

프로그래밍 개념 그리고 [Python](/ko/docs/Glossary/Python)에 대한 일반적인 지식을 공부하는 것은 권장합니다. 하지만 이것이 Django의 핵심 개념을 이해하는데 반드시 필요한 것은 아닙니다.

> **참고:**: Python은 초보자가 읽고 이해할 수 있는 가장 쉬운 프로그래밍 언어 중 하나 입니다. 즉, 만약 당신이 이 모듈을 더 깊이 이해하고 싶다면, 인터넷에서 많은 무료 서적과 자습서들을 이용할 수 있습니다. ( 초보 프로그래머들은 python.org wiki 에서 [Python for Non Programmers](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) 페이지를 확인해도 좋습니다.).

## 가이드

- [Django 소개](/ko/docs/Learn/Server-side/Django/Introduction)
  - : 이 문서에서는 "Django란 무엇인가?" 라는 물음에 답을 합니다. 그리고 이 웹 프레임워크를 특별하게 만드는 요소에 대해 대략적으로 살펴볼 것입니다. 우리는 여기서 Django의 주요 특징들 (자세히 설명할 시간은 없는 심화된 기능들 포함) 을 훑어볼 것입니다. 또한 Django 애플리케이션의 주요 구성 요소들 중 일부를 보여줍니다. 따라서 당신이 Django 애플리케이션을 설정하고 시작하기 전에, 우리는 Django가 무슨 일을 해 줄 수 있는지에 대해 알려줄 것입니다.
- [Django 개발 환경 설정](/ko/docs/Learn/Server-side/Django/development_environment)
  - : 이제 Django가 무엇인지 알았으므로 Windows, Linux (Ubuntu) 및 Mac OS X에서 Django 개발 환경을 설정하고 테스트하는 방법을 살펴봅시다. 이 문서에서는 당신이 어떠한 운영 체제를 사용하든지 상관없습니다. 우리는 당신이 Django로 앱 개발을 시작하기 전에 필요한 것을 마땅히 알려줘야 합니다.
- [Django Tutorial: The Local Library website](/ko/docs/Learn/Server-side/Django/Tutorial_local_library_website)
  - : 이 (실용적) 튜토리얼의 첫번째 문서에서는 앞으로 무엇을 배울지 알아봅니다. - 우리가 후속 문서에서 계속 작업하고 개발해 나갈 "로컬 저장소" 의 예제 웹사이트를 살펴봅니다.
- [Django Tutorial Part 2: Creating a skeleton website](/ko/docs/Learn/Server-side/Django/skeleton_website)
  - : 이 수업에서는 웹사이트의 기본인 "뼈대"를 만드는 방법을 살펴봅니다. 그런 다음 사이트별로 settings, urls, models, views, templates 을 사용하여 채워 넣을 것입니다.
- [Django Tutorial Part 3: Using models](/ko/docs/Learn/Server-side/Django/Models)
  - : 이 수업에서는 로컬 저장소 웹사이트에서 모델을 저장하는 방법에 대해 알아봅니다. 모델이란 웹 앱의 자료구조를 나타내며, Django의 데이터 베이스에 데이터를 저장할 수 있도록 해줍니다. 여기서는 모델이 무엇인지, 어떻게 선언하는지, 그리고 몇몇 중요한 필드 타입도 살펴볼 것입니다. 그리고 모델 데이터에 접근하는 몇가지 주요 방법도 간단하게 알아봅니다.
- [Django Tutorial Part 4: Django admin site](/ko/docs/Learn/Server-side/Django/Admin_site)
  - : 앞에서 로컬라이브러리 웹사이트의 모델을 생성했다면, 이제는 Django 관리자 사이트를 사용해서 "실제" 책 데이터를 추가할 차례입니다. 먼저 관리자 사이트에 모델에 등록하는 방법을 보여줄 것입니다. 그 다음에 로그인 하고 데이터를 생성하는 방법도 배울 것입니다. 마지막 순서에서는 관리자 사이트의 PT를 향상시키는 더 많은 방법도 알아볼 것입니다.
- [Django Tutorial Part 5: Creating our home page](/ko/docs/Learn/Server-side/Django/Home_page)
  - : 이제 우리는 처음으로 완성된 페이지(홈페이지 개념으로 모델 종류를 기록하고 사이드바나 다른 페이지의 링크들이 있음)를 표시하기 위한 코드를 입력할 준비가 되었습니다. 이 방법을 통해 기본적인 URL 맵이나 뷰를 작성하고, 데이터베이스에 기록하고, 템플릿을 사용하는 실용적인 경험을 얻을 것입니다.
- [Django Tutorial Part 6: Generic list and detail views](/ko/docs/Learn/Server-side/Django/Generic_views)
  - : 이 수업에서는 우리가 만든 local library의 웹사이트를 확장해 볼 것입니다. 목록, 책이나 저자 정보를 담은 자세한 페이지들을 추가할 것입니다. 여기서는 일반적인 클래스 기반의 view를 배우고 보통 상황에서 어떻게 코드의 양을 줄일 수 있는지 살펴볼 것입니다. 우리는 또한 URL 핸들링에 대해 정말 자세히 들어가서, 기본적인 패턴 매칭을 어떻게 해야 하는지도 볼 것입니다.
- [Django Tutorial Part 7: Sessions framework](/ko/docs/Learn/Server-side/Django/Sessions)
  - : 여기서는 우리가 만든 로컬 라이브러리의 웹사이트에 '세션 기반 방문자 수 계산기' 를 홈페이지에 추가할 것입니다. 이것은 비교적 간단한 예제입니다. 하지만 귀하는 이 예제를 통해, 세션 프레임워크를 사용해서 어떻게 사이트에 방문하는 이름없는 사용자들의 반복적인 행동을 볼 수 있는지 (그 방법을) 알 수 있습니다.
- [Django Tutorial Part 8: User authentication and permissions](/ko/docs/Learn/Server-side/Django/Authentication)
  - : 이 수업에서는 유저들에게 그들의 계정으로 웹사이트에 로그인 하게 하는 방법에 대해 배웁니다. 그리고 로그인 상태에 따라 그들이 보고 작성할 수 있는 범위를 통제하는 방법, 그들에게 허가를 내주는 방법을 배웁니다. 우리는 연습을 위해서 로컬 라이브러리 웹사이트를 확장해 볼 것입니다. 로그인 및 로그아웃 페이지를 추가하고, 대출 도서를 보여주는 페이지를 사용자용, 관리자용 각각 따로 만들어 볼 것입니다.
- [Django Tutorial Part 9: Working with forms](/ko/docs/Learn/Server-side/Django/Forms)
  - : 여기서는 Django에서 [HTML Forms](/ko/docs/Web/Guide/HTML/Forms)을 어떻게 사용하는 살펴볼 것입니다. HTML은 특히 모델을 생성하고, 갱신하고, 지우는 등의 폼을 작성하는 가장 쉬운 방법입니다. 이번 연습에서는 로컬 라이브러리의 웹사이트를 확장하는 것도 포함되어 있습니다. 여기서 우리는 도서관 사서들이 (관리자 어플리케이션 보다는) 우리가 작성한 폼을 이용해서 책을 고치고, 생성하고, 업데이트하고 정보를 삭제할 수 있도록 웹사이트를 확장해 볼 것입니다.
- [Django Tutorial Part 10: Testing a Django web application](/ko/docs/Learn/Server-side/Django/Testing)
  - : 웹사이트가 확장되어감에 따라 일일이 확인하기가 점점 어려워질 것입니다. 테스트해야할 요소 자체가 많아질 뿐만 아니라 요소간의 상호관계도 복잡해지면서 작은 요소의 변화가 다른 큰 요소들에까지 영향을 미치게됩니다. 이런 문제에 대한 걱정을 덜어줄 수 있는 방법은 자동 테스트 코드를 작성하는 것입니다. 자동 테스트 코드는 소스에 변화가 생길때마다 작동하는 코드입니다. 이번 강좌에서는 성능이 우수하면서도 작성이 간단한 Django의 테스트 프레임워크로 어떻게 당신의 웹사이트를 단위 테스트할수 있는지 알아봅니다.
- [Django Tutorial Part 11: Deploying Django to production](/ko/docs/Learn/Server-side/Django/Deployment)
  - : 이제 당신은 훌륭한 로컬저장소 웹사이트를 만들었으니, 로컬저장소가 아닌 공개 서버에 업로드 함으로써 인터넷을 통해 관리자와 사용자들이 접근할 수 있도록 하고싶을 겁니다. 이 수업에서는 호스트 업체를 찾고 웹사이트를 등록하는 방법과 사이트에 상품가치를 부여하는 방법을 알아봅니다.
- [Django web application security](/ko/docs/Learn/Server-side/Django/web_application_security)
  - : 사용자의 데이터를 보호하는 것은 웹사이트 디자인에서 중요한 부분입니다. 이전에 [Web security](/ko/docs/Web/Security) 수업에서 일반적인 보안 위협들에 대해 알아보았습니다. 이번 항목에서는 Django에 내장된 보호 시스템이 이런 위협을 어떻게 처리하는지 실질적인 예시에 대해 살펴봅니다.

## 평가

밑에 제시되어있는 평가는 위에 설명 된 대로, 장고(Django)를 사용하여 웹 사이트를 만드는 방법에 대한 이해도를 테스트합니다.

- [DIY Django 미니 블로그](/ko/docs/Learn/Server-side/Django/django_assessment_blog)
  - : 이 평가에서, 귀하는 여기서 배운 지식을 활용해서 자신만의 블로그를 만들 수 있습니다.
