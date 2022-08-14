---
title: 'Django 튜토리얼 파트 11: Django 웹사이트 공개하기'
slug: Learn/Server-side/Django/Deployment
tags:
  - Django deployment
  - django
  - heroku
  - whitenoise
  - 웹 서버
  - 장고
  - 장고 배포
translation_of: Learn/Server-side/Django/Deployment
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}</div>

<p class="summary">당신은 이제 놀라운 <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">LocalLibrary</a> 웹사이트를 (테스트도 마치고) 만들었으니, 도서관 스태프나 회원들이 인터넷을 통해 이용할 수 있도록 공개된 웹 서버에 설치하길 원할 것이다. 이번 장에서는 웹사이트를 배포할수 있는 호스트를 살펴보는 방법에 대한 개요와 사이트를 실제 운운영하기위해 필요한 것들에 대해 설명한다.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">사전학습:</th>
   <td>아래 파트를 포함하여 앞선 모든 튜토리얼 파트의 학습을 완료할 것.  <a href="/en-US/docs/Learn/Server-side/Django/Testing">Django 튜토리얼 파트 10: Django 웹 어플리케이션 테스트하기</a></td>
  </tr>
  <tr>
   <th scope="row">학습목표:</th>
   <td>Django 앱을 공개 운영할 수 있는 네트워크상의 장소와 방법을 배우기.</td>
  </tr>
 </tbody>
</table>

<h2 id="개요">개요</h2>

<p>일단 사이트 개발이 완료되면( 혹은 공개 테스트를 시작할 정도로 "충분히" 완료되었다면 ) 개인 컴퓨터 환경보다는 좀더 공개되고 접근성이 있는 네트워크상의 장소가 필요할 것이다.</p>

<p>이제까지는, Django 개발용 웹 서버를 사용하여 사이트를 로컬 브라우저/네트워크 범위 내에서 공개하고,  암호를 포함한 개인정보및 디버깅정보가 노출되는  (보안이 부실한) 개발용 환경 설정으로 웹사이트를 실행하면서, 개발환경에서만 작업을 해왔다.  외부에서 웹사이트를 운영하기 전에 해야할 일은 다음과 같다:</p>

<ul>
 <li>프로젝트 설정에서 몇가지를 고쳐야 한다.</li>
 <li>Django 앱을 호스팅할 환경을 선택해야 한다.</li>
 <li>정적 파일들(static files)을 호스팅할 환경을 선택해야 한다.</li>
 <li>웹 사이트를 서비스할 공개단계 레벨의 기반환경을 구축한다.</li>
</ul>

<p>이 튜토리얼은 호스팅사이트를 선택하기위한 몇가지 지침과 Django 앱을 공개하는데 대비하기 위해 필요한 사항에 대한 간단한 개요및 LocalLibrary 웹사이트를 <a href="https://www.heroku.com/">Heroku</a> 클라우드 호스팅 서비스 위에서 운영되도록 설치하는 방법에 대해 동작하는 예제를 제공한다.</p>

<h2 id="운영환경_(Production_envrionment)_이란">운영환경 (Production envrionment) 이란?</h2>

<p>운영환경은 외부공개를 위한 웹사이트를 운영하는 서버 컴퓨터로 부터 제공되는 환경이다. 운영환경은 다음 요소로 구성된다 :</p>

<ul>
 <li>웹사이트가 실행되는 컴퓨터 하드웨어.</li>
 <li>Linux, Windows와 같은 운영체제.</li>
 <li>웹 사이트를 작성한 프로그래밍 언어 구동 환경(runtime)과 프레임웍 라이브러리.</li>
 <li>콘텐츠및 페이지를 서비스 하기위한 Nginx, Apache와 같은 웹 서버.</li>
 <li>Django 웹사이트와 웹서버간에 "동적인" request 를 전달하기위한 어플리케이션 서버.</li>
 <li>웹사이트의 정보를 저장하는 데이타베이스.</li>
</ul>

<div class="note">
<p><strong>주목할점</strong>: 운영환경의 설정에 따라 역방향 프록시(reverse proxy)나 로드 밸런서(load balancer)등이 추가될 수도 있다.</p>
</div>

<p>서버 컴퓨터는 빠른 인터넷으로 연결되어 당신의 사무실내에 위치할 수도 있지만, 보통 "클라우드 상에서" 사용하는것이 훨씬 더 흔한 방법이다. 이말은 실제로는 당신의 코드가 호스팅 업체의 데이터센터에 위치한 어떤 원격 컴퓨터에서(혹은 아마도 "가상환경의" 컴퓨터상에서) 실행된다는 것을 의미한다.  원격지 서버는 대개는 어느 정도 검증된 수준의 컴퓨터 자원(예를들면, CPU, 램, 저장 메모리 공간등)과 가격대별 인터넷 연결을 제공한다.</p>

<p>이런 종류의 원격 접속가능한 컴퓨터/네트워크 하드웨어를 IaaS ( <em>Infrastructure as a Service) 라고 줄여 부른다</em>. 많은 IaaS 업체들은 미리 설치된 특정 OS 환경에 대한 여러가지 옵션을 제공하는데 당신은 그 위에 운영환경에 필요한 것들을 설치해야 한다. 또 다른 업체는 장고와 웹서버등을 포함하여 완전히 갖추어진 환경을 선택할수 있도록 옵션을 제공하기도 한다.</p>

<div class="note">
<p><strong>주목할점:</strong> 미리 구성된 환경에서는 환경설정에 대한 부담을 덜 수 있어서 웹사이트 구성을 매우 쉽게할 수 있지만, 익숙하지 않은 서버환경이나 다른 콤포넌트 때문에, 혹은 구형 OS 버전 때문에 선택가능한 구성수단이 줄어들 수도 있다.  많은 경우에, 당신이 원하는 결과를 얻기 위해, 당신이 직접 필요한 콤포넌트를 설치하는 것이 낫다. 그러면 시스템 업그레이드가 필요한 경우에,  어떻게 시작해야 하는지 알아챌 수 있을 것이다 !</p>
</div>

<p>다른 호스팅 업체들은 Django를 플랫폼의 일부분으로 지원하는데 이런 업체를 PaaS( <em>Platform as a Service)로 줄여 부른다</em>. 이런 종류의 호스팅에서는 호스트 플랫폼이 (어플리케이션의 규모의 변화에 따라 조정해야하는 거의 모든 것을 포함하여)  대신 관리해주므로 운영환경(웹 서버, 어플리케이션 서버, 로드 밸런서등)에 대해 거의 고민할 필요가 없다. 이 경우, 다른 서버 기반환경에 신경쓸 필요없이, 웹 어플리케이션에만 집중할수 있기 때문에 웹사이트 배포가 엄청 쉽다.</p>

<p>어떤 개발자들은 PaaS에 비해 좀더 높은 자유도를 가진 IaaS를 선택하는 반면, 다른 개발자들은 관리부담이 덜하고 웹사이트 규모를 쉽게 조정할수 있는 PaaS를 선택할 것이다. 당신은 이제 막 개발을 시작했기에, PaaS에 웹사이트를 설정하는 것이 더 쉬울 것이다. 그리고 그것이 이 튜토리얼에서 우리가 공부할 내용이다.</p>

<div class="note">
<p><strong>한가지 팁:</strong> Python/Django 친화적인 호스팅 업체를 선정했다면, 웹서버,어플리케이션 서버, 역방향 프록시( 혹시 PaaS 업체를 선정했다면  별로 신경쓸 필요없는  내용임)의 여러가지 설정을 이용한 Django 웹사이트를 구성하는 방법에 대한 설명이 제공될 것이다. 예를 들면, 이곳 ( <a href="https://www.digitalocean.com/community/tutorials?q=django">Digital Ocean Django community docs</a> ) 에는 다양한 설정에 대한 단계적인 가이드가 있다.</p>
</div>

<h2 id="호스팅_업체_선정하기">호스팅 업체 선정하기</h2>

<p>Django에 대한 지원이 활발하게 이루어지거나 Django가 잘 동작한다고 알려진  호스팅 업체는 약 100여곳이 있다. ( 꽤 광범위한 목록을 <a href="http://djangofriendly.com/hosts/">Djangofriendly hosts</a> 에서 찾아볼 수 있다.) 이 업체들은 서로 다른 타입(IaaS, PaaS)이거나 서로 다른 가격대에 여러가지 수준의 컴퓨팅/네트워크 자원을 제공한다.</p>

<p>호스팅 업체를 선정할 때 고려해야할 몇가지는 다음과 같다:</p>

<ul>
 <li>당신의 사이트가 얼마나 바쁘게 돌아갈 것인지와 이 요구조건을 감당할수 있는 데이터와 컴퓨팅 자원의 비용 수준.</li>
 <li>수평적인(같은 머신을 더 많이 사용하기)  혹은 수직적인(좀더 고성능의 머신을 사용하기) 사이트 규모조정 수준과 이 작업에 필요한 비용.</li>
 <li>공급자의 데이터 센터가 위치한 장소와 그에 따른 가장 빠르게 접속할 수 있는 장소.</li>
 <li>호스트의 역대 가동시간및 가동중지시간 상의 성능.</li>
 <li>사이트 관리용으로 제공되는 도구 - 가 사용하기 쉬운지와 안전한지 ( 예를들면  SFTP vs FTP )</li>
 <li>당신의 서버를 모니터링 하기위하 내장 프레임워크.</li>
 <li>알려진 제한사항들. 어떤 호스트 업체는 의도적 특정 서비스(예를 들면  email)를 제한한다. 또 다른 업체는 특정 가격대에 일정 시간의 "가동시간"이나 일정량의 저장공간만을 제공한다.</li>
 <li>추가적인 혜택들. 어떤 업체들은 다른곳에서는 유료로 지원되는 도메인 네임과 SSL인증에 대한 지원을 무료로 제공한다. </li>
 <li>당신이 사용하던 "무료"계정이 시간초과로 중지되거나 좀더 비싼 계정으로 이전하는데 비용들거나 하게된다는 것은 처음에 선택한 호스팅 서비스와 다른 선택을 했다면 웹사이트가 좀더 성공적일 수도 있었다는 것을 의미한다! </li>
</ul>

<p>당신이 개발을 시작했다면 좋은 소식은 "평가용", "개발자용"혹은 "취미개발용" 컴퓨터 환경을 "무료"로 제공하는 업체가 꽤 있다는 것이다. 이들은 항상 자원을 아주 제한적으로만 사용할 수 있고, 처음 신규 가입 기간이 지나 중지되지 않는지 주의를 기울여야 한다.  하지만, 트래픽이 낮은 사이트를 실제 운영환경에서 테스트 하기에 좋으며, 사이트가 좀더 바빠질 경우 더 많은 자원을 제공하는 유료환경으로 쉽게 이전할 수 있다.이런 종류의 환경으로 인기있는 곳은 <a href="https://www.heroku.com/">Heroku</a>, <a href="https://www.pythonanywhere.com/">Python Anywhere</a>, <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html">Amazon Web Services</a>, <a href="https://azure.microsoft.com/en-us/pricing/details/app-service/">Microsoft Azure</a> 등등이다.</p>

<p>많은 업체가 좀더 쓸만한 수준의 컴퓨팅 파워와 제한사항을 완화한 "기본"계정을 가지고 있다. <a href="https://www.digitalocean.com/">Digital Ocean</a> 과 <a href="https://www.pythonanywhere.com/">Python Anywhere</a> 는  상대적으로 비용이 낮은( 1달에 5~10 USD 가격의) 기본 계정을 제공하는 인기있는 호스팅 업체의 대표적인 예이다.</p>

<div class="note">
<p><strong>주목할점:</strong> 사용가격이 유일한 선택기준이 아니라는 것을 명심하라. 당신의 웹사이트가 성공적이라면 사이트의 확장성이 가장 중요한 기준이 될것이다.</p>
</div>

<h2 id="웹사이트에서_공개(publish)준비_하기">웹사이트에서 공개(publish)준비 하기</h2>

<p>django-admin과 manage.py 도구로 생성된 <a href="/en-US/docs/Learn/Server-side/Django/skeleton_website">Django 뼈대 웹사이트</a>는 개발환경에 최적화 되어 설정되었다. 개발환경이 아닌 운영환경에서는 ( <strong>settings.py</strong>에 설정되어 있는 ) Django 프로젝트 설정의 많은 부분이, 보안상 혹은 성능상 이유로, 변경되어야 한다.</p>

<div class="note">
<p><strong>한가지 팁:</strong> 운영환경용으로 별도의 <strong>settings.py</strong> 파일을 유지하고 민감한 설정들은 별도의 파일이나 시스템의 환경변수에 저장하는  것이 일반적이다. 소스코드의 다른 부분은 공개된 저장소에 보관하더라도, 이 파일은 격리되어 보호되어야 한다. </p>
</div>

<p>반드시 체크되어야 할 가장 중요한 설정은 다음과 같다 :</p>

<ul>
 <li><code>DEBUG</code>. 이 설정은 운영환경에서 <code>False</code> 로 설정되어야 한다 (<code>DEBUG = False</code>). 이 설정은 민감하고 / 보호가 필요한 디버그 정보나 변수정보가 외부로 보여지지 않도록 막는다.</li>
 <li><code>SECRET_KEY</code>. CRSF 보안등을 위해 사용되는 큰 숫자의 랜덤 값이다. 운영환경에서 사용되는 key 값이 형상관리툴에 등록되지 않도록 하거나 운영 서버 밖에서 접근할 수 없도록 관리하는 것이 중요하다. Django 문서에서는 이 값을 환경 변수에서 로딩하거나 serve-only 파일에서 읽어오도록 제안하고 있다.
  <pre># Read SECRET_KEY from an environment variable
import os
SECRET_KEY = os.environ['SECRET_KEY']

#OR

#Read secret key from a file
with open('/etc/secret_key.txt') as f:
    SECRET_KEY = f.read().strip()</pre>
 </li>
</ul>

<p><em> </em><code>SECRET_KEY</code><em> 와 </em><code>DEBUG</code><em> 변수를, 이 변수들이 정의되어 있다면, 시스템의 환경 변수에서 읽어오도록  LocalLibrary</em> 어플리케이션을 수정하자. 정의되어 있지 않다면 설정 파일의 디폴트 값을 사용하도록 한다.</p>

<p><strong>/locallibrary/settings.py</strong> 파일을 열고, 기존의 <code>SECRET_KEY</code> 설정을 비활성화 하고 아래 코드에서 <strong>bold</strong>체로 보이는 부분을 추가한다. 개발 과정중에는 보통 key와 관련하여 환경변수가 설정되지 않으므로 초기값이 사용되고 있을것이다. ( 키가 노출되면 당신이 그 키를 운영환경에 사용하지는 않을것이므로 여기서 어떤키를 사용하는지는 중요하지 않다).</p>

<pre class="brush: python"># SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'cg#p$g+j9tax!#a3cup@1$8obt2_+&amp;k3q+pmu)5%asj6yjpkag'
<strong>import os</strong>
<strong>SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'cg#p$g+j9tax!#a3cup@1$8obt2_+&amp;k3q+pmu)5%asj6yjpkag')</strong>
</pre>

<p>그리고나서 기존의 <code>DEBUG</code> 설정을 주석처리 하고 신규 라인을 아래와 같이 추가 하라.</p>

<pre class="brush: python"># SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
<strong>DEBUG = bool( os.environ.get('DJANGO_DEBUG', True) )</strong>
</pre>

<p><code>DEBUG</code> 의 초기값은 <code>True</code> 이지만, <code>DJANGO_DEBUG</code> 환경변수가 비어있는 문자열로 설정 되면 (즉, <code>DJANGO_DEBUG=''</code> 와 같이) <code>False</code> 로 설정될 것이다.</p>

<div class="note">
<p><strong>주목할 점</strong>: <code>DJANGO_DEBUG</code> 환경변수를 "값을 가진 문자열"이나 "빈 문자열" 로 설정하기 보다, 그냥 <code>True</code> 나 <code>False</code> 로 (각각) 직접 설정할 수 있다면 이런 방식이 좀더 직관적으로 보일것이다. 하지만 불행히도 환경변수는 파이썬 문자열로 저장되며, <code>False</code> 로 평가받을수 있는 문자열은 "빈 문자열"이 유일하다.</p>

<p>역자주: os.environ.get의 사용법에 대해서는 이 <a href="https://bugs.python.org/msg277165">링크</a>를 참조 하라</p>
</div>

<p>변경해야할 설정의 전체 체크리스트는 <a href="https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/">배포 체크리스트</a> (장고 문서) 로 제공된다. 아래 터미널 명령으로도 몇몇 목록을 뽑을 수 있다:</p>

<pre class="brush: python">python3 manage.py check --deploy
</pre>

<h2 id="예제_LocalLibrary를_Heroku에_설치하기">예제: LocalLibrary를 Heroku에 설치하기</h2>

<p>이번 섹션에서는 <a href="http://heroku.com">Heroku PaaS 클라우드</a> 에 LocalLibrary를 설치하는 방법에 대한 실제적인 예제를 제공한다.</p>

<h3 id="왜_Heroku_인가">왜 Heroku 인가?</h3>

<p>Heroku는 현재까지 가장 오래 운영된 서비스들중 하나이며, 인기있는 클라우드기반 PaaS 서비스이다. 원래는 Ruby 앱들만 지원했지만, 현재는 많은 프로그래밍 환경의 앱들을 지원할수 있으며, 여기에는 Django 또한 포함된다!</p>

<p>우리는 다음과 같은 이유로 Heroku 를 사용하기로 결정했다:</p>

<ul>
 <li>Heroku는 정말 돈 낼 필요가 없는 <a href="https://www.heroku.com/pricing">무료 단계 (free tier)</a> 를 지원한다. (물론 약간의 제약이 있긴하다).</li>
 <li>Heroku는 PaaS 개념의 서비스로 많은 웹 기반환경의 관리를 제공한다. 서버관리, 로드 밸런싱, 역방향 프록시등 여러가지 웹 기반환경들을 Heroku가 내부적으로 모두 제공하므로 이에 대한 걱정을 덜고 쉽게 개발을 시작할수 있다.</li>
 <li>제약이 있긴하지만, 이 제약들은 우리가 진행하려는 어플리케이션 개발에는 영향이 없을 것이다. 예를 들면 다음과 같다:
  <ul>
   <li>무료 단계의 Heroku는 활성주기가 짧은 저장공간을 제공하므로 유저가 업로드한 파일을 Heroku 자체에 안전하게 저장할 수는 없다.</li>
   <li>무료 단계에서는 30분동안 아무런 요청도 없다면 웹 앱은 비활성화 될 것이다. 이 후에 요청이 오면 응답하는데 몇 초정도 약간의 시간이 더 필요하게 될것이다. </li>
   <li>무료 단계에서는 웹 사이트의 동작 가능 시간이 매월 특정시간 만큼으로 제한된다 ( 사이트가 "비활성(asleep)"상태인 경우의 시간은 제외된다). 이 제약은 사용빈도가 낮고/ 예제 확인용 사이트인 경우는 문제가 되지 않지만, 계속 활성화 상태가 필요한 앱의 경우에는 적합하지 않을것이다.</li>
   <li>다른 제약 사항은 <a href="https://devcenter.heroku.com/articles/limits">Limits</a> (Heroku 문서) 에서 찾아볼 수 있다.</li>
  </ul>
 </li>
 <li>대부분의 경우 문제없이 사용할 수 있을것이고, 당신이 결국 Heroku에 만족하게 되었다면, 당신의 앱을 확장하는 것도 매우 쉽다.</li>
</ul>

<p>Heroku로 이 예제를 호스팅 하는데는 부족함이 없겠지만, 당신이 개발하고자 하는 실제 웹사이트의 요구조건에는 부족할 수도 있다. Heroku는 설치하여 사용하고 확장하기는 쉽지만 대신 모든 요구조건을 충족할 정도로 유연하지는 않으며 일단 무료 단계를 벗어나면 당신의 요구조건을 만족시키기 위해 좀더  비싼 비용을 요구할 가능성이 잠재되어있다.</p>

<h3 id="Heroku는_어떻게_동작하는가">Heroku는 어떻게 동작하는가?</h3>

<p>Heroku는 Django 웹사이트를 한 개이상의 "<a href="https://devcenter.heroku.com/articles/dynos">다이노(Dyno</a>)"에서 실행한다.  다이노란 고립적이고, 가상화된 Unix 콘테이너이며 어플리케이션을 실행하는데 필요한 환경을 제공한다. 다이노는 완전히 고립적이며 <em>ephemeral </em>( <em>다이노가 재시작될 때마다 깨끗이 비워지는 단기 수명의 )</em> 파일 시스템을 가지고 있다. 다이노간에 공유하는 유일한 항목은 어플리케이션 <a href="https://devcenter.heroku.com/articles/config-vars">설정 변수</a> 이다. Heroku 는 웹 트래픽을 모든 "웹" 다이노들로 분배하기 위해 내부적으로 로드 밸런서를 사용한다. 다이노들간에 공유하는것이 없기때문에 Heroku는 단지 다이노를 좀더 추가하는 것으로 앱을 수평적으로 확장할 수있다. ( 사실은 당연히 추가적인 접속자를 받기위해 다이노 뿐만 아니라 데이타베이스도 확장할 필요가 있긴 하다).</p>

<p>파일 시스템이 단기 수명의 특성이 있어서, 어플리케이션에 필요한 서비스(즉, 데이타베이스, 큐, 캐싱 시스템, 저장공간, 이메일 서비스 등등) 를 직접 설치할 수는 없다.  대신에 Heroku 웹 어플리케이션들은 Heroku나 써드파티로 부터 제공되는 독립적인 "애드온"들로 부터의 지원 서비스를 이용한다. 일단 애드온이 웹 어플리케이션에 부착되면, 다이노는 어플리케이션 설정 변수에 포함된 정보를 사용하여 서비스에 접속한다. </p>

<p>어플리케이션을 실행하기위해서, Heroku는 적절한 환경과 의존성을 셋업하고 어떻게 런칭되는지 이해할 필요가 있다. Django 앱에 대해서는 아래 정보를 몇개의 텍스트 파일로 제공한다.</p>

<ul>
 <li><strong>runtime.txt</strong>:<strong> </strong>프로그래밍 언어와 사용 버전.</li>
 <li><strong>requirements.txt</strong>: Django를 포함한 파이썬 관련 라이브러리 의존성.</li>
 <li><strong>Procfile</strong>: 웹 어플리케이션을 구동하기 위해 실행되어야 하는 프로세스의 목록. 장고의 예를 들자면, Gunicorn 웹 어플리케이션 서버( .wsgi 스크립트와 함께) 가 될것이다.  </li>
 <li><strong>wsgi.py</strong>: Heroku 환경에서 Django 어플리케이션을 호출 하기 위한 <a href="http://wsgi.readthedocs.io/en/latest/what.html">WSGI</a> 설정.</li>
</ul>

<p>개발자들은 Unix bash 스크립트와 매우 유사한, 특별한 클라이언트 앱/터미널로 Heroku와 통신한다. 이 도구는 git 저장소에 보관된 코드를 업로드 할수 있도록 지원하며, 실행중인 프로세스의 모니터링과, 로그를 보고 환경변수를 설정하는등 그외 많은 일을 할수 있도록 지원한다!</p>

<p>Heroku 상에서 어플리케이션을 실행하기 위해서는 Django 웹 어플리케이션을 git 저장소에 보관하고, 위에서 언급한 파일을 추가하며, 데이터베이스 애드온과 통합하고, 스태틱 파일을 다룰수 있도록 수정할 필요가 있다.</p>

<p>일단 Heroku 계정에서 준비할수 있는 모든것을 완료 했으니, Heroku 클라이언트를 다운로드 받아서 웹 사이트를 설치하라.</p>

<div class="note">
<p><strong>주목할 점:</strong> 아래 지시사항은 이 글을 쓸 당시의 Heroku로 작업하는 방법을 반영했다. Heroku 서비스의 절차가 상당히 많이 바뀐다면, 이글 대신 다음링크의 Heroku 문서를 참조하는 것이 좋다: <a href="https://devcenter.heroku.com/articles/getting-started-with-python#introduction">Django로 Heroku 시작하기</a>.</p>
</div>

<p>이것으로 시작을 하기위한 준비를 모두 마친다. ( 좀 더 포괄적인 이해를 위해서는 <a href="https://devcenter.heroku.com/articles/how-heroku-works">Heroku의 동작 방식</a>(Heroku 문서) 가이드를 참고하라).</p>

<h3 id="Github에_애플리케이션_저장소(repository)_생성하기"> Github에 애플리케이션 저장소(repository) 생성하기</h3>

<p>Heroku는 <strong>git</strong> 형상관리 시스템과 밀접하게 통합되어있는데, git을 이용하여 활성화된 시스템에 수정사항의 업로드및 동기화를 수행한다. git은 Heroku 클라우드 상에서 당신의 소스코드 저장소를 가리키도록 이름붙여진 신규 heroku "원격" 저장소를 추가함으로 이 작업을 수행한다. 개발기간동안 "master" 저장소에 변경사항을 저장하기 위에 git을 사용하게된다. 사이트를 배포할 때가 되면, Heroku 저장소에 수정사항을 동기화 한다.</p>

<div class="note">
<p><strong>주목할 점:</strong>  좋은 소프트웨어 개발 예제를 따라서 작성하는데 익숙하다면, 아마도 당신은 이미 git 이나 다른 SCM 도구를 사용하고 있을 것이다. 당신이 이미 git 저장소를 소유하고 있다면, 이 단계를 건너뛰어도 좋다.</p>
</div>

<p>git 으로 작업하는 수많은 방법이 있지만, <a href="https://github.com/">Github</a>에 계정을 생성하여, 저장소를 생성하고, 로컬 컴퓨터와 동기화 하는것이 가장 쉬운 방법중 하나이다 :</p>

<ol>
 <li>이곳( <a href="https://github.com/">https://github.com/</a> )을 방문하여 계정을 생성하라.</li>
 <li>로그인 해서 꼭대기 툴바의 <strong>+</strong> 링크를 클릭하여 <strong>New repository</strong>를 선택하라.</li>
 <li>이 폼의 모든 필드에 기입하라. 그렇지 않으면 진행이 불가한 것은 아니지만, 모두 채울것을 강력 추천한다.
  <ul>
   <li>새로운 저장소 이름 (예시: <em>django_local_library</em>)과 설명 (예시: "Local Library website written in Django")을 입력하라.</li>
   <li>"<em>Add .gitignore" 선택 목록에서 "</em><strong>Python</strong><em>"을 선택하라</em>.</li>
   <li>"<em>Add a license" 선택 목록에서 선호하는 라이센스 유형을 선택하라</em>.</li>
   <li>"<strong>Initialize this repository with a README</strong>." 체크박스에 체크하라</li>
  </ul>
 </li>
 <li>" <strong>Create repository" </strong>버튼을 누른다</li>
 <li>신규 저장소 페이지에서 초록색의  "<strong>Clone or download</strong>" 버튼을 클릭한다.</li>
 <li>아래와 같은 형태의 URL 값을 다이얼로그 박스내의 텍스트 필드에서 복사한다.(예시: <strong>https://github.com/<em>&lt;your_git_user_id&gt;</em>/django_local_library.git</strong>).</li>
</ol>

<p>이제 원격 저장소 ("repo")가 생성되었으니 로컬 컴퓨터에 복제(clone)하길 원할 것이다:</p>

<ol>
 <li><em>git을 로컬 컴퓨터에 설치하라</em> (플랫폼별 버전은 <a href="https://git-scm.com/downloads">이곳</a> 에서 찾을 수 있다).</li>
 <li>커맨드 프롬프트/터미널 을 열고 위에서 복사한 URL을 이용하여 저장소 내용을 복제(clone) 한다 :
  <pre class="brush: bash">git clone https://github.com/<strong><em>&lt;your_git_user_id&gt;</em></strong>/django_local_library.git
</pre>
  이 명령은 현재 프롬프트의 위치에 저장소를 생성할 것이다.</li>
 <li>새로운 저장소 위치로 이동한다.
  <pre class="brush: bash">cd django_local_library.git</pre>
 </li>
</ol>

<p>마지막 단계는 어플리케이션을 복사하여 git을 이용해 저장소에 파일을 추가하는 것이다 :</p>

<ol>
 <li>이 폴더에 Django 어플리케이션을 복사해 넣는다. (locallibrary 폴더를 포함한 위치가 아니라 <strong>manage.py</strong> 와 그 하위 폴더와 같은 위치의 모든 파일에  대해 작업한다).</li>
 <li><strong>.gitignore</strong> 파일을 열어서, 아래 코드를 맨 밑에 복사하고, 저장하라 ( 이 파일은 기본 설정에 의해 git에 저장되지 말아야할 파일을 구분하는데 사용된다).
  <pre># Text backup files
*.bak

#Database
*.sqlite3</pre>
 </li>
 <li>커맨드 프로프트/터미널을 열고 <code>add</code>명령으로 모든 파일을 git에 등록한다.
  <pre class="brush: bash">git add -A
</pre>
 </li>
 <li>status 명령을 사용하여 등록하고자 하는 파일이 맞는지 확인한다 ( 당신은 소스파일만 등록 하길 원하고 바이너리나 임시 파일은 원치 않을 것이다). 명령을 실행하면 아래와 유사하게 나온다.
  <pre>&gt; git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD &lt;file&gt;..." to unstage)

        modified:   .gitignore
        new file:   catalog/__init__.py
        ...
        new file:   catalog/migrations/0001_initial.py
        ...
        new file:   templates/registration/password_reset_form.html</pre>
 </li>
 <li>위의 결과에 만족했다면, commit 명령으로 파일의 로컬 저장소 등록을 확정한다:
  <pre class="brush: bash">git commit -m "First version of application moved into github"</pre>
 </li>
 <li>다음 명령을 이용하여 Github 웹사이트와 로컬 저장소를 동기화 한다:
  <pre>git push origin master</pre>
 </li>
</ol>

<p>이런 작업이 완료된 후, repo를 생성한 Github 페이지로 다시 가서, 페이지를 새로 로딩하여, 전체 어플리케이션이 모두 업로드된것인지 확인할 수 있어야 한다. 이후로 파일 변경 사항이 발생하면 add/commit/push 순서로 명령을 사용하여 저장소를 업데이트 할 수 있다.</p>

<div class="note">
<p><strong>한가지 팁:</strong> 이쯤에서 당신의 "변형 없이 순수한(<a href="https://en.wikipedia.org/wiki/Vanilla_software">vanilla</a>)" 프로젝트를 백업하는것이 좋다. - 이어지는 섹션에서 해볼 작업들은 어떤 플랫폼(혹은 개발작업) 에서는 유용하지만 다른 곳에서는 그렇지 않을 수 있기 때문이다.</p>

<p>백업을 하는 가장 좋은 방법은 git을 사용하여 관리하는 것이다. git을 사용하면, 특정 구 버전으로 갈수 있을 뿐만 아니라, 이것을 운영관련 변경사항으로 부터 분리된 "브랜치(branch)"로 유지보수할 수있고, 운영 브랜치와 개발 브랜치간에 좋은 부분만 선별하여 적용할 수 있다. <a href="https://help.github.com/articles/good-resources-for-learning-git-and-github/">Git 공부하기</a> 는 수고를 들여 배울가치가 있지만 이 글의 주제를 벗어난다.</p>

<p>백업을 하는 가장 쉬운방법은 단순히 파일을 다른 위치에  복제하는 것이다. 당신의 git 관련 지식에 맞춰, 어떤 방법이든 사용하도록 하자 !</p>
</div>

<h3 id="Heroku에_맞춰_앱을_수정하기">Heroku에 맞춰 앱을 수정하기</h3>

<p>이번 섹션에서는 LocalLibray 어플리케이션이 Heroku상에서 작동할 수 있도록 수정할 필요가 있는 변경사항에 대해 설명한다. Heroku 문서인 <a href="https://devcenter.heroku.com/articles/getting-started-with-python#introduction">Django로 Heroku 시작해보기</a> 에서 나온 지시사항들은 당신이 로컬 개발 환경의 실행 또한 Heroku 클라이언트를 사용할 것으로 가정하고 있지만, 우리가 여기서 제시할 변경사항은 기존의 Django 개발 서버및 이제껏 배워온 작업방식과 호환될 것이다.</p>

<h4 id="Procfile_작성하기">Procfile 작성하기</h4>

<p>어플리케이션의 프로세스 타입과 엔트리 포인트를 선언하기 위해  GiHub 저장소의 root 폴더에  <code>Procfile</code> 파일을 (확장자 없이 ) 생성한다. 아래 문장을 해당 파일에 작성한다:</p>

<pre>web: gunicorn locallibrary.wsgi --log-file -</pre>

<p>"<code>web:</code>" 구문은 Heroku에게 이것이 웹 다이노이며 HTTP 트래픽을 받을수 있다는 것을 알려준다. 이 다이노에서 시작할 프로세스는 <em>gunicorn 인데 Heroku가 추천하는 인기있는 웹 어플리케이션 서버이다. </em><code>locallibrary.wsgi</code><em> ( 어플리케이션 뼈대로 생성된: </em><strong>/locallibrary/wsgi.py</strong>) <em>모듈의 설정 정보를 이용하여 </em>Gunicorn을 구동시킨다.</p>

<h4 id="Gunicorn_설치하기">Gunicorn 설치하기</h4>

<p><a href="http://gunicorn.org/">Gunicorn</a> 은 Django와 함께 사용되는 용도로 Heroku에서 추천되는 HTTP server 이다  (바로 위의 Procfile 에서 미리 본 바와 같다). 하나의 다이노에서 여러개의 Python 동시 프로세스를 실행할 수 있는 WSGI 어플리케이션을 위한 순수 Python으로 작성된 HTTP server 다. ( 추가 정보를 얻으려면  <a href="https://devcenter.heroku.com/articles/python-gunicorn">Gunicorn으로 Python 어플리케이션 배포하기</a> ( Heroku 문서) 참고하라).</p>

<p>개발기간중에는 LocalLibrary 어플리케이션을 서비스하기 위해 Gunicorn을 필요로 하진 않겠지만, Heroku에서 원격 서버를 셋업하기 위한 <a href="https://developer.mozilla.org/ko/docs/Learn/Server-side/Django/Deployment$edit#requirements">요구조건</a> 의 일부이므로 Gunicorn을 설치할 것이다. </p>

<p>아래와 같이 커맨드라인에서 pip를 이용하여 <em>Gunicorn</em> 설치한다 (pip는 <a href="/en-US/docs/Learn/Server-side/Django/development_environment">개발 환경 구축하기</a> 단계에서 설치했다):</p>

<pre class="brush: bash">pip3 install gunicorn
</pre>

<h4 id="Database_설정하기">Database 설정하기</h4>

<p>디폴트로 설정되었던 SQLite 데이타베이스는 Heroku에서는 사용할 수 없다. 이유는 SQLite가 파일 베이스로 동작하는 시스템인데, Heroku는 단기-수명(ephemeral) 파일 시스템을 사용하므로 어플리케이션이 재시작되면 파일이 삭제되기 때문이다 ( 보통 하루에 한 번, 어플리케이션이나 그에 딸린 설정 변수가 변경되면 재시작 된다) . </p>

<p>이런 상황에 대처하는 Heroku의 메커니즘은 <a href="https://elements.heroku.com/addons#data-stores">database 애드온</a>을 사용하고 애드온에 의해 설정되는 환경 <a href="https://devcenter.heroku.com/articles/config-vars">설정 변수</a>로 부터의 정보를 이용하여 웹 어플리케이션을 설정하는 것이다. 많은 데이타베이스 옵션이 있지만, Heroku postgres 데이터베이스의 <a href="https://devcenter.heroku.com/articles/heroku-postgres-plans#plan-tiers">Hobby tier</a>를 사용할것인데, 이것은 무료이고, Django가 지원하며, 무료 hobby dyno plan tier를 사용할 때 신규 Heroku 앱에 자동으로 추가된다.</p>

<p>데이터베이스 연결 정보는 <code>DATABASE_URL</code> 라는 설졍변수를 사용해 웹 다이노에 제공된다. Heroku는 , 이 정보를 Django에 하드 코딩 해넣기 보다는, 개발자들이 <a href="https://warehouse.python.org/project/dj-database-url/">dj-database-url</a> 패키지를 사용하여 <code>DATABASE_URL</code> 환경 변수를 분석하여 자동적으로 Django가 원하는 설정 형식으로 변환하는 것을 추천한다. <em>dj-database-url</em> 패키지를 설치하는것에 외에도, Django에서 Postgres 데이터베이스로 작업하기 위해서는 <a href="http://initd.org/psycopg/">psycopg2</a> 도 설치해야 한다.</p>

<h5 id="dj-database-url_(환경_변수를_통한_Django_데이터베이스_설정_)_설치하기">dj-database-url (환경 변수를 통한 Django 데이터베이스 설정 ) 설치하기</h5>

<p>Heroku에서 원격 서버에 설치하기 위한  <a href="https://developer.mozilla.org/ko/docs/Learn/Server-side/Django/Deploymentt#requirements">요구조건</a>의 일부가 되었으니, <em>dj-database-url</em> 를 로컬에 설치한다:</p>

<pre>$ pip3 install dj-database-url
</pre>

<h5 id="settings.py_수정하기">settings.py 수정하기</h5>

<p><strong>/locallibrary/settings.py</strong> 를 열고 아래 설정코드를 파일의 맨 밑에 복사해 넣는다:</p>

<pre># Heroku: Update database configuration from $DATABASE_URL.
import dj_database_url
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)</pre>

<div class="note">
<p><strong>주목할 점:</strong></p>

<ul>
 <li><code>DATABASE_URL</code> 환경변수가 개발용 컴퓨터에는 없을것이므로 개발단계에서는 계속 SQLite를 사용한다.</li>
 <li> <code>conn_max_age=500</code> 설정을 하면 연결상태가 지속될 수 있는데, 매번 요청 주기에 연결을 새로 하는것보다 이렇게 하는 것이 훨신 효율적이다. 하지만 이것은 옵션이며 불 필요하면 제거해도 된다.</li>
</ul>
</div>

<h5 id="psycopg2_(Python_Postgres_데이터베이스_지원용)_설치하기">psycopg2 (Python Postgres 데이터베이스 지원용) 설치하기</h5>

<p>Django에서 Postgres 데이터베이스로 작업하기 위해서는 <em>psycopg2</em> 가 필요하므로 Heroku에 원격 서버를 생성하기 위해서는( 아래 요구조건 섹션에 논의된 바와 같이) <a href="#requirements">requirements.txt</a> 파일에 이 항목을 추가할 필요가 있다.</p>

<p>환경 변수가 로컬 환경에서 존재하지 않기 때문에, 로컬에서 Django는 디폴트로 SQLite를 사용할 것이다. 당신이 Postgres로 완전히 전환해서 개발과 운영 모두 Heroku 무료 단계 데이터베이스를 사용하길 원한다면 그렇게 할 수 있다. 예를 들면, Linux 기반 시스템에 psycopg2와 관련 모듈을 설치하려면, 아래 bash/터미널 명령을 사용하면 된다:</p>

<pre class="brush: bash"><code>sudo apt-get install python-pip python-dev libpq-dev postgresql postgresql-contrib</code>
pip3 install psycopg2
</pre>

<p>다른 플랫폼에 대한 설치방법은 <a href="http://initd.org/psycopg/docs/install.html">이곳 psycopg2 웹사이트</a> 에서 찾아볼 수 있다.</p>

<p>하지만, 당신이 Heroku에 사이트를 적용하기 위한 ( <code>requirements.txt</code> (아래에 나옴)에서) 요구조건 으로서만 맞추려고 한다면, 굳이 이렇게 PostGreSQL을 로컬 컴퓨터에 설치할 필요까지는 없다.</p>

<h4 id="운영환경에서_정적_파일(static_file)_지원하기">운영환경에서 정적 파일(static file) 지원하기</h4>

<p>개발 단계동안 Django와 Django 개발용 웹 서버를 사용하여 정적 파일을 지원해 왔다 (CSS, JavaScript, 등등.). 운영 환경에서는 보통 콘텐츠 전달 네트웍 ( CDN) 이나 웹서버에서 정적 파일을 지원한다.</p>

<div class="note">
<p><strong>주목할 점:</strong> Django/웹 어플리케이션으로 직접 정적 파일을 지원하는 것은 비효율적이다. 웹서버에 의해 직접 조작되거나 CDN으로 완전히 분리하는 것에 비해,  불필요한 추가적인 코드가 요청(requests)에 추가되기 때문이다. 이런 사항은 로컬에서 진행되는 개발단계에서는 영향이 크진 않지만, 운영 단계에서 같은 방식으로 사용하려 한다면 심각한 성능저하 상황이 발생할 수 있다. </p>
</div>

<p>Django 웹 어플리케이션으로부터 분리하여 정적파일을 쉽게 호스팅하기 위해, Django는 개발용 정적 파일을 수집하는 collectstatic 도구를 제공한다 (collectstatic이 실행될 때 어느곳에서 파일이 수집되어야 하는지 정의한 설정 변수들이 있다). Django 템플릿은 정적 파일 종류의 호스팅 위치를 <code>STATIC_URL</code> 설정 변수로 알려주며, 정적 파일의 위치가 다른 호스트/서버로 이동되면 여기서 바꿀 수 있도록 한다.</p>

<p>관련 설정 변수는 다음과 같다:</p>

<ul>
 <li><code>STATIC_URL</code>: 이것은 베이스 URL 위치인데 이곳에서 정적 파일들이 지원된다. 예를 들면 CDN과 같은곳이다. 베이스 템플릿에서 접근하는 정적 템플릿 변수에 사용된다. ( <a href="/en-US/docs/Learn/Server-side/Django/Home_page">Django 튜토리얼 파트 5: 홈페이지 작성하기</a> 를 참고하라).</li>
 <li><code>STATIC_ROOT</code>: 이것은 Django의 "collectstatic" 도구로 템플릿에서 참조하는 모든 정적 파일을 모집하는 디렉토리로 가는 절대 경로이다. 일단 수집되면, 이것들은 파일이 어떤곳에서 호스팅되든지 단체로 업로드 될 수 있다.</li>
 <li><code>STATICFILES_DIRS</code>: 이것은 Django의 colletstatic 도구가 정적 파일을 탐색할 추가적인 디렉토리를 나열한다.</li>
</ul>

<h5 id="settings.py_수정하기_2">settings.py 수정하기</h5>

<p><strong>/locallibrary/settings.py</strong> 파일을 열고 아래 설정을 파일의 맨 밑으로 복사한다. <code>BASE_DIR</code> 는 파일에 이미 정의되어 있었어야 한다. ( <code>STATIC_URL</code> 도 설정파일이 생성될 때 정의되었을 것이다. 중복되는 이전의 설정은, 지우지 않아도 문제는 없겠지만, 제거하는 것이 좋다).</p>

<pre># Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.0/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
</pre>

<p>실제로는, 다음 섹션에서 설치하고 설정할, <a href="https://warehouse.python.org/project/whitenoise/">WhiteNoise</a> 라는 이름의 라이브러리를 이용하여 파일을 관리할 것이다.</p>

<p>더 많은 정보가 필요하면  <a href="https://devcenter.heroku.com/articles/django-assets">Django and Static Assets</a> (Heroku docs) 를 참고한다.</p>

<h4 id="Whitenoise_적용하기">Whitenoise 적용하기</h4>

<p>운영환경에서 정적 파일을 관리하기 위한 수많은 방법이 있다 (바로 앞 섹션에서 관련된 Django 설정을 봤다). Heroku는 <a href="https://warehouse.python.org/project/whitenoise/">WhiteNoise</a> 프로젝트를 이용하여 운영환경의 Gunicorn상에서 직접 정적 자원을 관리하는 것을 추천한다.</p>

<div class="note">
<p><strong>주목할 점: </strong>Heroku는 자동적으로 collectstatic을 호출하고 사용자 어플리케이션을 업로드한 후 WhiteNoise로 정적파일을 사용할 수 있도록 준비한다. WhiteNoise의 동작 방식과 이 도구를 적용하는 것이 좀더 효율적인 이유에 대한 설명은 <a href="https://warehouse.python.org/project/whitenoise/">WhiteNoise</a> 문서를 참조한다.</p>
</div>

<p>본 프로젝트에 <em>WhiteNoise를 적용하는 단계적 방법은 다음과 같다 </em>:</p>

<h5 id="WhiteNoise_설치하기">WhiteNoise 설치하기</h5>

<p>아래 명령으로 whitenoise를 로컬에 설치한다 :</p>

<pre>$ pip3 install whitenoise
</pre>

<h5 id="settings.py_수정하기_3">settings.py 수정하기</h5>

<p>사용자 Django 어플리케이션에 WhiteNoise를 설치하기 위해, <strong>/locallibrary/settings.py</strong> 를 열고, <code>MIDDLEWARE</code> 설정을 찾아서 <code>SecurityMiddleware</code> 바로 밑의 목록의 윗부분에  <code>WhiteNoiseMiddleware</code> 를 추가 한다 :</p>

<pre>MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    <strong>'whitenoise.middleware.WhiteNoiseMiddleware',</strong>
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
</pre>

<p>선택 사항으로, 파일이 서빙될 때 정적 파일의 크기를 줄일 수 있다. (이 방식이 좀더 효율적이다). Just add the following to the bottom of <strong>/locallibrary/settings.py</strong>:</p>

<pre># Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
</pre>

<h4 id="파이썬_관련_라이브러리_(Requirements)_설치하기">파이썬 관련 라이브러리 (Requirements) 설치하기</h4>

<p>웹 어플리케이션의 Python 관련 라이브러리들은 저장소의 루트에 위치한 <strong>requirements.txt</strong> 라는 파일에 저장되어야 한다. 그러면 Heroku는 환경을 재구성할 때 이 패키지들을 자동적으로 설치할 것이다. 커맨드 라인에서 pip 명령을 이용해 이 파일을 생성할 수 있다. ( 아래 명령을 repo 루트 디렉토리에서 실행한다):</p>

<pre class="brush: bash">pip3 freeze &gt; requirements.txt</pre>

<p>여러가지 관련 라이브러리를 위에서 설치했다면,  <strong>requirements.txt</strong> 파일은 최소한 아래 나열된 항목들을 가지고 있어야 한다. ( 버전 숫자는 다를수도 있다). 명확히 이 어플리케이션을 위해 설치한것이 아니라면 , 아래 목록을 제외한 라이브러리는 지우는 것이 좋다.</p>

<pre>dj-database-url==0.4.1
Django==2.0
gunicorn==19.6.0
<strong>psycopg2==2.6.2</strong>
whitenoise==3.2.2
</pre>

<div class="note">
<p>위 목록에  <strong>psycopg2</strong> 줄이 있다는 것을 주의해야 한다! 로컬환경에서 이 라이브러리를 설치한 적이 없더라도 이 줄은 <strong>requirements.txt</strong> 파일에 추가해야 한다.</p>
</div>

<h4 id="Runtime_파일_추가하기">Runtime 파일 추가하기</h4>

<p><strong>runtime.txt</strong> 파일이 존재한다면 Heroku에게 웹사이트에서 사용할 프로그래밍 언어를 알려준다. 아래 문구를 추가하여 저장소의 루트에 runtime.txt 파일을 생성한다:</p>

<pre>python-3.6.4</pre>

<div class="note">
<p><strong>주목할 점:</strong> Heroku가 지원하는  <a href="https://devcenter.heroku.com/articles/python-support#supported-python-runtimes">Python 실행버전</a> ( 이 글을 쓰는 당시에는 위 버전을 포함한다)은 그리 많지 않다. Heroku는 이 파일에 지정된 버전에 개의치 않고 지원되는 실행버전을 사용할 것이다.</p>
</div>

<h4 id="Github에_변경사항을_저장하고_테스트_다시하기">Github에 변경사항을 저장하고 테스트 다시하기</h4>

<p>다음으로 모든 변경사항을 Github에 저장하자. 아래 명령을 ( 저장소 범위내 위치에서) 터미널에 입력한다 :</p>

<pre class="brush: bash">git add -A
git commit -m "Added files and changes required for deployment to heroku"
git push origin master</pre>

<p>계속 진행하기전에, 로컬에서 사이트를 다시 테스트 해서 위의 변경사항에 의해 영향받은부분이 없는지 확인한다. 지금까지 해온 것 처럼 개발용 웹 서버를 실행하고 브라우저 상에서 여전히 기대한 대로 동작하는지 체크한다.</p>

<pre class="brush: bash">python3 manage.py runserver</pre>

<p>이제 Heroku에 LocalLibrary의 배포를 시작할 준비가 다 되었다.</p>

<h3 id="Heroku_계정_생성하기">Heroku 계정 생성하기</h3>

<p>Heroku 이용을 시작 하려면 계정을 한 개 생성해야 한다 :</p>

<ul>
 <li><a href="https://www.heroku.com/">www.heroku.com</a> 사이트로 가서 <strong>SIGN UP FOR FREE</strong> 버튼을 클릭한다.</li>
 <li>세부 정보를 입력하고 <strong>CREATE FREE ACCOUNT</strong> 버튼을 누른다. 당신은 가입 이메일에서 계정을 확인 하도록 요청받을 것이다.</li>
 <li>가입 이메일에서 계정 활성화 요청 링크 (account activation link) 를 클릭하면 웹 브라우저 상에서 당신의 계정 위치로 이동될 것이다.</li>
 <li>당신의 암호를 입력하고 <strong>SET PASSWORD AND LOGIN</strong> 버튼을 클릭하라</li>
 <li>로그인이 되면 Heroku 대시보드로 이동될 것이다: <a href="https://dashboard.heroku.com/apps">https://dashboard.heroku.com/apps</a>.</li>
</ul>

<h3 id="client_설치하기">client 설치하기</h3>

<p>여기의 <a href="https://devcenter.heroku.com/articles/getting-started-with-python#set-up">Heroku 지시사항</a> 에 따라 Heroku 클라이언트를 다운로드하고 설치하라.</p>

<p>클라이언트를 설치한후에 명령어를 실행할 수 있다. 예를 들면, 클라이언트에 대한 도움말을 얻고 싶다면 아래 명령을 실행한다:</p>

<pre class="brush: bash">heroku help
</pre>

<h3 id="웹사이트를_생성하고_업로드하기">웹사이트를 생성하고 업로드하기</h3>

<p>앱을 생성하기 위해 "create" 명령을 저장소의 루트 디렉토리에서 실행한다. 이명령은 로컬 컴퓨터의 git 환경에 heroku라는 이름의 git의 원격 저장소(remote) ("원격 저장소의 지정자(pointer)")를 생성한다.</p>

<pre class="brush: bash">heroku create</pre>

<div class="note">
<p><strong>주목할 점:</strong> 원한다면 원격 저장소(remote)에 이름을 붙일 수 있는데 . "create" 다음에 값을 추가하면 된다. 아무것도 붙이지 않으면 랜덤으로 생성된 이름을 가진다. 이 이름은 기본 URL로 사용된다.</p>
</div>

<p>그다음에 아래와 같은 명령으로 앱을 Heroku 저장소에 등록(push)할  수 있다. 이 명령은 앱을 업로드하고, 다이노안에 앱을 포장(pakage)하며, colletstatic을 실행하고 사이트가 시작 되도록 한다.</p>

<pre class="brush: bash">git push heroku master</pre>

<p>운이 좋다면, 앱은 이제 사이트상에서 "실행(running)" 상태에 있게되겠지만, 어플리케이션을 위한 데이터베이스 테이블을 구성하지 않았기 때문에 제대로 동작하지 않을 것이다. 이 작업을 위해 <code>heroku run</code> 명령을 사용해 migrate 작업을 수행할 "<a href="https://devcenter.heroku.com/articles/deploying-python#one-off-dynos">one off 다이노</a>" 를 시작시켜야 한다. 아래 명령을 터미널에 입력하라 :</p>

<pre class="brush: bash">heroku run python manage.py migrate</pre>

<p>책과 저자도 추가할 수 있어야 하니까 다시 one-off 다이노를 이용하여 관리자 아이디 또한 생성하자:</p>

<pre class="brush: bash">heroku run python manage.py createsuperuser</pre>

<p>일단 이 작업이 완료되면, 사이트를 볼 수 있다. 아직 아무 책도 없긴 하지만 사이트가 동작한다. 신규 웹사이트를 브라우저로 보고 싶으면 아래 명령을 사용하라 :</p>

<pre class="brush: bash">heroku open</pre>

<p>admin 사이트에서 책 몇개를 생성하고 사이트가 기대한대로 동작하는지 확인하라.</p>

<h3 id="애드온_관리하기">애드온 관리하기</h3>

<p><code>heroku addons</code> 명령으로 앱의 애드온 적용에 대해 확인할 수 있다. 이 명령은 모든 애드온을 나열하고, 가격과 상태를 보여준다.</p>

<pre class="brush: bash">&gt;heroku addons

Add-on                                     Plan       Price  State
─────────────────────────────────────────  ─────────  ─────  ───────
heroku-postgresql (postgresql-flat-26536)  hobby-dev  free   created
 └─ as DATABASE</pre>

<p>여기서 단 한개의 애드온만 있는데, 바로 postgres SQL 데이터베이스 이다. 이것은 무료이고, 앱을 생성할 때 자동적으로 생성되었다. 데이터베이스 애드온을 ( 다른 어떤 애드온이라도) 좀 더 자세히 조사하기 위해 아래 명령으로 웹 페이지 열 수 있다 (open)  :</p>

<pre class="brush: bash">heroku addons:open heroku-postgresql
</pre>

<p>애드온을 생성하고(create), 제거하고(destroy), 업그레이드하고(upgrade), 다운그레이드하는(downgrade) 다른 명령들도 있다. ( 여는 명령(open)과 유사한 문법을 사용한다). 좀 더 자세한 정보는 <a href="https://devcenter.heroku.com/articles/managing-add-ons">Managing Add-ons</a> (Heroku 문서) 를 참조하라.</p>

<h3 id="구성_변수_(_configuration_variables)_설정하기">구성 변수 ( configuration variables) 설정하기</h3>

<p><code>heroku config</code> 명령을 이용하여 사이트의 구성 변수를 확인할 수 있다. 아래에서 현재 한개의 변수만 가지는 것을 확인할 수있는데, <code>DATABASE_URL</code> 변수는 데이터베이스를 설정하는 데 사용된다.</p>

<pre class="brush: bash">&gt;heroku config

=== locallibrary Config Vars
DATABASE_URL: postgres://uzfnbcyxidzgrl:j2jkUFDF6OGGqxkgg7Hk3ilbZI@ec2-54-243-201-144.compute-1.amazonaws.com:5432/dbftm4qgh3kda3</pre>

<p>위에서 공부한 <a href="#Getting_your_website_ready_to_publish">웹 사이트 공개(publish) 준비하기</a> 섹션을 다시 떠올려보면, <code>DJANGO_SECRET_KEY</code>와 <code>DJANGO_DEBUG</code> 환경 변수를 설정해야 한다. 지금 이 작업을 하자.</p>

<div class="note">
<p><strong>주목할 점:</strong> secret key는 정말로 비밀이 유지되어야 한다!  새로운 키를 만들어 내는 한가지 방법은 새로운 Django 프로젝트를 생성하고 (<code>django-admin startproject someprojectname</code>) 신규 프로젝트의 <strong>settings.py</strong>에서 생성된 키를 가져오는 것이다.</p>
</div>

<p><code>DJANGO_SECRET_KEY</code> 를 <code>config:set</code> 명령을 통해 설정한다(아래 예제와 같이).  당신 자신의 secret key를 사용해야 한다는 것을 기억하자!</p>

<pre class="brush: bash">&gt;heroku config:set DJANGO_SECRET_KEY=eu09(ilk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh&amp;=

Setting DJANGO_SECRET_KEY and restarting locallibrary... done, v7
DJANGO_SECRET_KEY: eu09(ilk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh
</pre>

<p><code>DJANGO_DEBUG</code> 도 유사하게 설정한다 :</p>

<pre class="brush: bash">&gt;heroku config:set <code>DJANGO_DEBUG=

Setting DJANGO_DEBUG and restarting locallibrary... done, v8</code></pre>

<p>지금 웹사이트를 방문한다면 "Bad request" 에러를 만나게 되는데 이것은 (보안 조치상) <code>DEBUG=False</code> 로 설정되어 있여서 <a href="https://docs.djangoproject.com/en/2.0/ref/settings/#allowed-hosts">ALLOWED_HOSTS</a> 설정이 요구되기 때문이다. <strong>/locallibrary/settings.py</strong> 파일을 열고 아래와 같이  <code>ALLOWED_HOSTS</code> 설정을 수정하여 베이스 앱 url과 (예를들면, 'locallibrary1234.herokuapp.com') 로컬 개발 환경 웹서버에서 지금까지 사용해온 URL을 추가하라.</p>

<pre class="brush: python">ALLOWED_HOSTS = ['&lt;your app URL without the https:// prefix&gt;.herokuapp.com','127.0.0.1']
# For example:
# ALLOWED_HOSTS = ['fathomless-scrubland-30645.herokuapp.com','127.0.0.1']
</pre>

<p>그다음 지금 설정한 것들을 저장하고 Github 저장소와 Herok에 반영한다 :</p>

<pre class="brush: bash">git add -A
git commit -m 'Update ALLOWED_HOSTS with site and development server URL'
git push origin master
git push heroku master</pre>

<div class="note">
<p>Heroku에 사이트 업데이트하는 것을 완료한후, 존재하지 않는 주소URL(예를 들면, <strong>/catalog/doesnotexist/</strong>) 을 입력해 보자.  이전에는 이런 경우 자세한 설명이 담긴 디버그 페이지를 보여주었었지만, 이제는 단순한 "Not Found" 페이지가 보일것이다.</p>
</div>

<h3 id="디버깅_하기">디버깅 하기</h3>

<p>Heroku 클라이언트는 디버깅을 위한 몇가지 도구를 제공한다 :</p>

<pre class="brush: bash">heroku logs  # Show current logs
heroku logs --tail # Show current logs and keep updating with any new results
heroku config:set DEBUG_COLLECTSTATIC=1 # Add additional logging for collectstatic (this tool is run automatically during a build)
heroku ps   #Display dyno status
</pre>

<p>이것들보다 더 자세한 정보가 필요하다면 <a href="https://docs.djangoproject.com/en/2.0/topics/logging/">Django Logging</a> 을 자세히 살펴보는 것이 좋을것이다.</p>

<ul>
</ul>

<h2 id="요약">요약</h2>

<p>이렇게 Django 앱을 운영환경에서 구성해보는 튜토리얼이 끝났고. 지금까지 공부해온 Django 튜토리얼 시리즈도 이것으로 마무리가 되었다. 이 시리즈가 당신에 유용한 자료이길 바란다. 앞에서 설명한 모든 단계를 커버하는 버전의, <a href="https://github.com/mdn/django-locallibrary-tutorial">Github상의 소스 코드는 이곳에서</a> 확인할 수 있다.<br>
 <br>
 다음 단계는 마지막으로 몇개의 기사를 읽어보고, 평가작업을 완성하는 것이다.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://docs.djangoproject.com/en/2.0/howto/deployment/">Deploying Django</a> (Django docs)

  <ul>
   <li><a href="https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/">Deployment checklist</a> (Django docs)</li>
   <li><a href="https://docs.djangoproject.com/en/2.0/howto/static-files/deployment/">Deploying static files</a> (Django docs)</li>
   <li><a href="https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/">How to deploy with WSGI</a> (Django docs)</li>
   <li><a href="https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/modwsgi/">How to use Django with Apache and mod_wsgi</a> (Django docs)</li>
   <li><a href="https://docs.djangoproject.com/en/2.0/howto/deployment/wsgi/gunicorn/">How to use Django with Gunicorn</a> (Django docs)</li>
  </ul>
 </li>
 <li>Heroku
  <ul>
   <li><a href="https://devcenter.heroku.com/articles/django-app-configuration">Configuring Django apps for Heroku</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/articles/getting-started-with-python#introduction">Getting Started on Heroku with Django</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/articles/django-assets">Django and Static Assets</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/articles/python-concurrency-and-database-connections">Concurrency and Database Connections in Django</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/articles/how-heroku-works">How Heroku works</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/articles/dynos">Dynos and the Dyno Manager</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/articles/config-vars">Configuration and Config Vars</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/articles/limits">Limits</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/articles/python-gunicorn">Deploying Python applications with Gunicorn</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/articles/deploying-python">Deploying Python and Django apps on Heroku</a> (Heroku docs)</li>
   <li><a href="https://devcenter.heroku.com/search?q=django">Other Heroku Django docs</a></li>
  </ul>
 </li>
 <li>Digital Ocean
  <ul>
   <li><a href="https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-16-04">How To Serve Django Applications with uWSGI and Nginx on Ubuntu 16.04</a></li>
   <li><a href="https://www.digitalocean.com/community/tutorials?q=django">Other Digital Ocean Django community docs</a></li>
  </ul>
 </li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Django/Testing", "Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}</p>

<p> </p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Introduction">Django introduction</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/development_environment">Setting up a Django development environment</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Django Tutorial: The Local Library website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/skeleton_website">Django Tutorial Part 2: Creating a skeleton website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Models">Django Tutorial Part 3: Using models</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Admin_site">Django Tutorial Part 4: Django admin site</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Home_page">Django Tutorial Part 5: Creating our home page</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Generic_views">Django Tutorial Part 6: Generic list and detail views</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Sessions">Django Tutorial Part 7: Sessions framework</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Authentication">Django Tutorial Part 8: User authentication and permissions</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Forms">Django Tutorial Part 9: Working with forms</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Testing">Django Tutorial Part 10: Testing a Django web application</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Django Tutorial Part 11: Deploying Django to production</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/web_application_security">Django web application security</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/django_assessment_blog">DIY Django mini blog</a></li>
</ul>

<p> </p>
