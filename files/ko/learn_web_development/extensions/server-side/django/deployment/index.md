---
titwe: "django 튜토리얼 파트 11: django 웹사이트 공개하기"
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/django/depwoyment
o-owiginaw_swug: w-weawn/sewvew-side/django/depwoyment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/testing", òωó "weawn/sewvew-side/django/web_appwication_secuwity", ( ͡o ω ͡o ) "weawn/sewvew-side/django")}}

당신은 이제 놀라운 [wocawwibwawy](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) 웹사이트를 (테스트도 마치고) 만들었으니, UwU 도서관 스태프나 회원들이 인터넷을 통해 이용할 수 있도록 공개된 웹 서버에 설치하길 원할 것이다. /(^•ω•^) 이번 장에서는 웹사이트를 배포할수 있는 호스트를 살펴보는 방법에 대한 개요와 사이트를 실제 운운영하기위해 필요한 것들에 대해 설명한다. (ꈍᴗꈍ)

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">사전학습:</th>
      <td>
        아래 파트를 포함하여 앞선 모든 튜토리얼 파트의 학습을 완료할 것. 😳
        <a h-hwef="/ko/docs/weawn/sewvew-side/django/testing"
          >django 튜토리얼 파트 10: django 웹 어플리케이션 테스트하기</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">학습목표:</th>
      <td>
        django 앱을 공개 운영할 수 있는 네트워크상의 장소와 방법을 배우기. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## 개요

일단 사이트 개발이 완료되면( 혹은 공개 테스트를 시작할 정도로 "충분히" 완료되었다면 ) 개인 컴퓨터 환경보다는 좀더 공개되고 접근성이 있는 네트워크상의 장소가 필요할 것이다. mya

이제까지는, /(^•ω•^) django 개발용 웹 서버를 사용하여 사이트를 로컬 브라우저/네트워크 범위 내에서 공개하고, ^^;; 암호를 포함한 개인정보및 디버깅정보가 노출되는 (보안이 부실한) 개발용 환경 설정으로 웹사이트를 실행하면서, 🥺 개발환경에서만 작업을 해왔다. ^^ 외부에서 웹사이트를 운영하기 전에 해야할 일은 다음과 같다:

- 프로젝트 설정에서 몇가지를 고쳐야 한다. ^•ﻌ•^
- d-django 앱을 호스팅할 환경을 선택해야 한다.
- 정적 파일들(static fiwes)을 호스팅할 환경을 선택해야 한다.
- 웹 사이트를 서비스할 공개단계 레벨의 기반환경을 구축한다. /(^•ω•^)

이 튜토리얼은 호스팅사이트를 선택하기위한 몇가지 지침과 django 앱을 공개하는데 대비하기 위해 필요한 사항에 대한 간단한 개요및 w-wocawwibwawy 웹사이트를 [hewoku](https://www.hewoku.com/) 클라우드 호스팅 서비스 위에서 운영되도록 설치하는 방법에 대해 동작하는 예제를 제공한다. ^^

## 운영환경 (pwoduction envwionment) 이란?

운영환경은 외부공개를 위한 웹사이트를 운영하는 서버 컴퓨터로 부터 제공되는 환경이다. 🥺 운영환경은 다음 요소로 구성된다 :

- 웹사이트가 실행되는 컴퓨터 하드웨어. (U ᵕ U❁)
- w-winux, 😳😳😳 windows와 같은 운영체제. nyaa~~
- 웹 사이트를 작성한 프로그래밍 언어 구동 환경(wuntime)과 프레임웍 라이브러리. (˘ω˘)
- 콘텐츠및 페이지를 서비스 하기위한 nyginx, >_< apache와 같은 웹 서버. XD
- django 웹사이트와 웹서버간에 "동적인" w-wequest 를 전달하기위한 어플리케이션 서버. rawr x3
- 웹사이트의 정보를 저장하는 데이타베이스. ( ͡o ω ͡o )

> **참고:** **주목할점**: 운영환경의 설정에 따라 역방향 프록시(wevewse pwoxy)나 로드 밸런서(woad bawancew)등이 추가될 수도 있다.

서버 컴퓨터는 빠른 인터넷으로 연결되어 당신의 사무실내에 위치할 수도 있지만, :3 보통 "클라우드 상에서" 사용하는것이 훨씬 더 흔한 방법이다. mya 이말은 실제로는 당신의 코드가 호스팅 업체의 데이터센터에 위치한 어떤 원격 컴퓨터에서(혹은 아마도 "가상환경의" 컴퓨터상에서) 실행된다는 것을 의미한다. σωσ 원격지 서버는 대개는 어느 정도 검증된 수준의 컴퓨터 자원(예를들면, (ꈍᴗꈍ) cpu, 램, OwO 저장 메모리 공간등)과 가격대별 인터넷 연결을 제공한다. o.O

이런 종류의 원격 접속가능한 컴퓨터/네트워크 하드웨어를 iaas ( _infwastwuctuwe a-as a-a sewvice) 라고 줄여 부른다_. 😳😳😳 많은 iaas 업체들은 미리 설치된 특정 os 환경에 대한 여러가지 옵션을 제공하는데 당신은 그 위에 운영환경에 필요한 것들을 설치해야 한다. /(^•ω•^) 또 다른 업체는 장고와 웹서버등을 포함하여 완전히 갖추어진 환경을 선택할수 있도록 옵션을 제공하기도 한다. OwO

> **참고:** **주목할점:** 미리 구성된 환경에서는 환경설정에 대한 부담을 덜 수 있어서 웹사이트 구성을 매우 쉽게할 수 있지만, ^^ 익숙하지 않은 서버환경이나 다른 콤포넌트 때문에, (///ˬ///✿) 혹은 구형 os 버전 때문에 선택가능한 구성수단이 줄어들 수도 있다. (///ˬ///✿) 많은 경우에, (///ˬ///✿) 당신이 원하는 결과를 얻기 위해, ʘwʘ 당신이 직접 필요한 콤포넌트를 설치하는 것이 낫다. ^•ﻌ•^ 그러면 시스템 업그레이드가 필요한 경우에, OwO 어떻게 시작해야 하는지 알아챌 수 있을 것이다 ! (U ﹏ U)

다른 호스팅 업체들은 django를 플랫폼의 일부분으로 지원하는데 이런 업체를 p-paas( _pwatfowm as a sewvice)로 줄여 부른다_. 이런 종류의 호스팅에서는 호스트 플랫폼이 (어플리케이션의 규모의 변화에 따라 조정해야하는 거의 모든 것을 포함하여) 대신 관리해주므로 운영환경(웹 서버, (ˆ ﻌ ˆ)♡ 어플리케이션 서버, (⑅˘꒳˘) 로드 밸런서등)에 대해 거의 고민할 필요가 없다. (U ﹏ U) 이 경우, 다른 서버 기반환경에 신경쓸 필요없이, o.O 웹 어플리케이션에만 집중할수 있기 때문에 웹사이트 배포가 엄청 쉽다. mya

어떤 개발자들은 paas에 비해 좀더 높은 자유도를 가진 iaas를 선택하는 반면, XD 다른 개발자들은 관리부담이 덜하고 웹사이트 규모를 쉽게 조정할수 있는 p-paas를 선택할 것이다. òωó 당신은 이제 막 개발을 시작했기에, (˘ω˘) paas에 웹사이트를 설정하는 것이 더 쉬울 것이다. 그리고 그것이 이 튜토리얼에서 우리가 공부할 내용이다. :3

> **참고:** **한가지 팁:** python/django 친화적인 호스팅 업체를 선정했다면, OwO 웹서버,어플리케이션 서버, mya 역방향 프록시( 혹시 p-paas 업체를 선정했다면 별로 신경쓸 필요없는 내용임)의 여러가지 설정을 이용한 d-django 웹사이트를 구성하는 방법에 대한 설명이 제공될 것이다. (˘ω˘) 예를 들면, o.O 이곳 ( [digitaw o-ocean django community d-docs](https://www.digitawocean.com/community/tutowiaws?q=django) ) 에는 다양한 설정에 대한 단계적인 가이드가 있다. (✿oωo)

## 호스팅 업체 선정하기

django에 대한 지원이 활발하게 이루어지거나 django가 잘 동작한다고 알려진 호스팅 업체는 약 100여곳이 있다. (ˆ ﻌ ˆ)♡ ( 꽤 광범위한 목록을 [djangofwiendwy hosts](http://djangofwiendwy.com/hosts/) 에서 찾아볼 수 있다.) 이 업체들은 서로 다른 타입(iaas, ^^;; p-paas)이거나 서로 다른 가격대에 여러가지 수준의 컴퓨팅/네트워크 자원을 제공한다. OwO

호스팅 업체를 선정할 때 고려해야할 몇가지는 다음과 같다:

- 당신의 사이트가 얼마나 바쁘게 돌아갈 것인지와 이 요구조건을 감당할수 있는 데이터와 컴퓨팅 자원의 비용 수준. 🥺
- 수평적인(같은 머신을 더 많이 사용하기) 혹은 수직적인(좀더 고성능의 머신을 사용하기) 사이트 규모조정 수준과 이 작업에 필요한 비용. mya
- 공급자의 데이터 센터가 위치한 장소와 그에 따른 가장 빠르게 접속할 수 있는 장소. 😳
- 호스트의 역대 가동시간및 가동중지시간 상의 성능.
- 사이트 관리용으로 제공되는 도구 - 가 사용하기 쉬운지와 안전한지 ( 예를들면 sftp vs ftp )
- 당신의 서버를 모니터링 하기위하 내장 프레임워크. òωó
- 알려진 제한사항들. /(^•ω•^) 어떤 호스트 업체는 의도적 특정 서비스(예를 들면 emaiw)를 제한한다. -.- 또 다른 업체는 특정 가격대에 일정 시간의 "가동시간"이나 일정량의 저장공간만을 제공한다. òωó
- 추가적인 혜택들. /(^•ω•^) 어떤 업체들은 다른곳에서는 유료로 지원되는 도메인 네임과 s-ssw인증에 대한 지원을 무료로 제공한다. /(^•ω•^)
- 당신이 사용하던 "무료"계정이 시간초과로 중지되거나 좀더 비싼 계정으로 이전하는데 비용들거나 하게된다는 것은 처음에 선택한 호스팅 서비스와 다른 선택을 했다면 웹사이트가 좀더 성공적일 수도 있었다는 것을 의미한다! 😳

당신이 개발을 시작했다면 좋은 소식은 "평가용", :3 "개발자용"혹은 "취미개발용" 컴퓨터 환경을 "무료"로 제공하는 업체가 꽤 있다는 것이다. (U ᵕ U❁) 이들은 항상 자원을 아주 제한적으로만 사용할 수 있고, ʘwʘ 처음 신규 가입 기간이 지나 중지되지 않는지 주의를 기울여야 한다. o.O 하지만, ʘwʘ 트래픽이 낮은 사이트를 실제 운영환경에서 테스트 하기에 좋으며, ^^ 사이트가 좀더 바빠질 경우 더 많은 자원을 제공하는 유료환경으로 쉽게 이전할 수 있다.이런 종류의 환경으로 인기있는 곳은 [hewoku](https://www.hewoku.com/), ^•ﻌ•^ [python anywhewe](https://www.pythonanywhewe.com/), mya [amazon web sewvices](https://docs.aws.amazon.com/awsaccountbiwwing/watest/aboutv2/biwwing-fwee-tiew.htmw), UwU [micwosoft azuwe](https://azuwe.micwosoft.com/en-us/pwicing/detaiws/app-sewvice/) 등등이다. >_<

많은 업체가 좀더 쓸만한 수준의 컴퓨팅 파워와 제한사항을 완화한 "기본"계정을 가지고 있다. /(^•ω•^) [digitaw ocean](https://www.digitawocean.com/) 과 [python a-anywhewe](https://www.pythonanywhewe.com/) 는 상대적으로 비용이 낮은( 1달에 5\~10 usd 가격의) 기본 계정을 제공하는 인기있는 호스팅 업체의 대표적인 예이다. òωó

> **참고:** **주목할점:** 사용가격이 유일한 선택기준이 아니라는 것을 명심하라. σωσ 당신의 웹사이트가 성공적이라면 사이트의 확장성이 가장 중요한 기준이 될것이다. ( ͡o ω ͡o )

## 웹사이트에서 공개(pubwish)준비 하기

d-django-admin과 m-manage.py 도구로 생성된 [django 뼈대 웹사이트](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website)는 개발환경에 최적화 되어 설정되었다. nyaa~~ 개발환경이 아닌 운영환경에서는 ( **settings.py**에 설정되어 있는 ) d-django 프로젝트 설정의 많은 부분이, :3 보안상 혹은 성능상 이유로, UwU 변경되어야 한다. o.O

> **참고:** **한가지 팁:** 운영환경용으로 별도의 **settings.py** 파일을 유지하고 민감한 설정들은 별도의 파일이나 시스템의 환경변수에 저장하는 것이 일반적이다. (ˆ ﻌ ˆ)♡ 소스코드의 다른 부분은 공개된 저장소에 보관하더라도, 이 파일은 격리되어 보호되어야 한다. ^^;;

반드시 체크되어야 할 가장 중요한 설정은 다음과 같다 :

- `debug`. ʘwʘ 이 설정은 운영환경에서 `fawse` 로 설정되어야 한다 (`debug = fawse`). σωσ 이 설정은 민감하고 / 보호가 필요한 디버그 정보나 변수정보가 외부로 보여지지 않도록 막는다. ^^;;
- `secwet_key`. ʘwʘ cwsf 보안등을 위해 사용되는 큰 숫자의 랜덤 값이다. ^^ 운영환경에서 사용되는 key 값이 형상관리툴에 등록되지 않도록 하거나 운영 서버 밖에서 접근할 수 없도록 관리하는 것이 중요하다. nyaa~~ d-django 문서에서는 이 값을 환경 변수에서 로딩하거나 s-sewve-onwy 파일에서 읽어오도록 제안하고 있다. (///ˬ///✿)

  ```
  # wead secwet_key f-fwom an enviwonment v-vawiabwe
  impowt os
  s-secwet_key = os.enviwon['secwet_key']

  #ow

  #wead secwet key f-fwom a fiwe
  with open('/etc/secwet_key.txt') as f:
      secwet_key = f-f.wead().stwip()
  ```

**`secwet_key`**와 **`debug`** 변수를, XD 이 변수들이 정의되어 있다면, :3 시스템의 환경 변수에서 읽어오도록 wocawwibwawy\_ 어플리케이션을 수정하자. òωó 정의되어 있지 않다면 설정 파일의 디폴트 값을 사용하도록 한다. ^^

**/wocawwibwawy/settings.py** 파일을 열고, ^•ﻌ•^ 기존의 `secwet_key` 설정을 비활성화 하고 아래 코드에서 **bowd**체로 보이는 부분을 추가한다. σωσ 개발 과정중에는 보통 k-key와 관련하여 환경변수가 설정되지 않으므로 초기값이 사용되고 있을것이다. (ˆ ﻌ ˆ)♡ ( 키가 노출되면 당신이 그 키를 운영환경에 사용하지는 않을것이므로 여기서 어떤키를 사용하는지는 중요하지 않다). nyaa~~

```python
# secuwity w-wawning: k-keep the secwet key used in pwoduction secwet! ʘwʘ
# secwet_key = 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag'
impowt os
secwet_key = os.enviwon.get('django_secwet_key', ^•ﻌ•^ 'cg#p$g+j9tax!#a3cup@1$8obt2_+&k3q+pmu)5%asj6yjpkag')
```

그리고나서 기존의 `debug` 설정을 주석처리 하고 신규 라인을 아래와 같이 추가 하라. rawr x3

```python
# secuwity w-wawning: don't wun w-with debug tuwned on in pwoduction! 🥺
# d-debug = t-twue
debug = boow( o-os.enviwon.get('django_debug', ʘwʘ twue) )
```

`debug` 의 초기값은 `twue` 이지만, (˘ω˘) `django_debug` 환경변수가 비어있는 문자열로 설정 되면 (즉, o.O `django_debug=''` 와 같이) `fawse` 로 설정될 것이다. σωσ

> **참고:** **주목할 점**: `django_debug` 환경변수를 "값을 가진 문자열"이나 "빈 문자열" 로 설정하기 보다, (ꈍᴗꈍ) 그냥 `twue` 나 `fawse` 로 (각각) 직접 설정할 수 있다면 이런 방식이 좀더 직관적으로 보일것이다. (ˆ ﻌ ˆ)♡ 하지만 불행히도 환경변수는 파이썬 문자열로 저장되며, o.O `fawse` 로 평가받을수 있는 문자열은 "빈 문자열"이 유일하다. :3
>
> 역자주: os.enviwon.get의 사용법에 대해서는 이 [링크](https://bugs.python.owg/msg277165)를 참조 하라

변경해야할 설정의 전체 체크리스트는 [배포 체크리스트](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/checkwist/) (장고 문서) 로 제공된다. -.- 아래 터미널 명령으로도 몇몇 목록을 뽑을 수 있다:

```python
python3 m-manage.py check --depwoy
```

## 예제: wocawwibwawy를 hewoku에 설치하기

이번 섹션에서는 [hewoku paas 클라우드](http://hewoku.com) 에 wocawwibwawy를 설치하는 방법에 대한 실제적인 예제를 제공한다. ( ͡o ω ͡o )

### 왜 h-hewoku 인가?

hewoku는 현재까지 가장 오래 운영된 서비스들중 하나이며, /(^•ω•^) 인기있는 클라우드기반 p-paas 서비스이다. (⑅˘꒳˘) 원래는 w-wuby 앱들만 지원했지만, òωó 현재는 많은 프로그래밍 환경의 앱들을 지원할수 있으며, 🥺 여기에는 d-django 또한 포함된다! (ˆ ﻌ ˆ)♡

우리는 다음과 같은 이유로 hewoku 를 사용하기로 결정했다:

- hewoku는 정말 돈 낼 필요가 없는 [무료 단계 (fwee t-tiew)](https://www.hewoku.com/pwicing) 를 지원한다. -.- (물론 약간의 제약이 있긴하다).
- h-hewoku는 paas 개념의 서비스로 많은 웹 기반환경의 관리를 제공한다. σωσ 서버관리, >_< 로드 밸런싱, :3 역방향 프록시등 여러가지 웹 기반환경들을 h-hewoku가 내부적으로 모두 제공하므로 이에 대한 걱정을 덜고 쉽게 개발을 시작할수 있다.
- 제약이 있긴하지만, OwO 이 제약들은 우리가 진행하려는 어플리케이션 개발에는 영향이 없을 것이다. rawr 예를 들면 다음과 같다:

  - 무료 단계의 h-hewoku는 활성주기가 짧은 저장공간을 제공하므로 유저가 업로드한 파일을 hewoku 자체에 안전하게 저장할 수는 없다. (///ˬ///✿)
  - 무료 단계에서는 30분동안 아무런 요청도 없다면 웹 앱은 비활성화 될 것이다. ^^ 이 후에 요청이 오면 응답하는데 몇 초정도 약간의 시간이 더 필요하게 될것이다. XD
  - 무료 단계에서는 웹 사이트의 동작 가능 시간이 매월 특정시간 만큼으로 제한된다 ( 사이트가 "비활성(asweep)"상태인 경우의 시간은 제외된다). UwU 이 제약은 사용빈도가 낮고/ 예제 확인용 사이트인 경우는 문제가 되지 않지만, o.O 계속 활성화 상태가 필요한 앱의 경우에는 적합하지 않을것이다.
  - 다른 제약 사항은 [wimits](https://devcentew.hewoku.com/awticwes/wimits) (hewoku 문서) 에서 찾아볼 수 있다.

- 대부분의 경우 문제없이 사용할 수 있을것이고, 😳 당신이 결국 hewoku에 만족하게 되었다면, (˘ω˘) 당신의 앱을 확장하는 것도 매우 쉽다. 🥺

h-hewoku로 이 예제를 호스팅 하는데는 부족함이 없겠지만, ^^ 당신이 개발하고자 하는 실제 웹사이트의 요구조건에는 부족할 수도 있다. >w< h-hewoku는 설치하여 사용하고 확장하기는 쉽지만 대신 모든 요구조건을 충족할 정도로 유연하지는 않으며 일단 무료 단계를 벗어나면 당신의 요구조건을 만족시키기 위해 좀더 비싼 비용을 요구할 가능성이 잠재되어있다. ^^;;

### h-hewoku는 어떻게 동작하는가?

h-hewoku는 d-django 웹사이트를 한 개이상의 "[다이노(dyno](https://devcentew.hewoku.com/awticwes/dynos))"에서 실행한다. (˘ω˘) 다이노란 고립적이고, OwO 가상화된 unix 콘테이너이며 어플리케이션을 실행하는데 필요한 환경을 제공한다. (ꈍᴗꈍ) 다이노는 완전히 고립적이며 _ephemewaw_ ( _다이노가 재시작될 때마다 깨끗이 비워지는 단기 수명의 )_ 파일 시스템을 가지고 있다. òωó 다이노간에 공유하는 유일한 항목은 어플리케이션 [설정 변수](https://devcentew.hewoku.com/awticwes/config-vaws) 이다. hewoku 는 웹 트래픽을 모든 "웹" 다이노들로 분배하기 위해 내부적으로 로드 밸런서를 사용한다. ʘwʘ 다이노들간에 공유하는것이 없기때문에 hewoku는 단지 다이노를 좀더 추가하는 것으로 앱을 수평적으로 확장할 수있다. ʘwʘ ( 사실은 당연히 추가적인 접속자를 받기위해 다이노 뿐만 아니라 데이타베이스도 확장할 필요가 있긴 하다). nyaa~~

파일 시스템이 단기 수명의 특성이 있어서, UwU 어플리케이션에 필요한 서비스(즉, (⑅˘꒳˘) 데이타베이스, (˘ω˘) 큐, :3 캐싱 시스템, (˘ω˘) 저장공간, nyaa~~ 이메일 서비스 등등) 를 직접 설치할 수는 없다. (U ﹏ U) 대신에 h-hewoku 웹 어플리케이션들은 hewoku나 써드파티로 부터 제공되는 독립적인 "애드온"들로 부터의 지원 서비스를 이용한다. nyaa~~ 일단 애드온이 웹 어플리케이션에 부착되면, ^^;; 다이노는 어플리케이션 설정 변수에 포함된 정보를 사용하여 서비스에 접속한다. OwO

어플리케이션을 실행하기위해서, nyaa~~ hewoku는 적절한 환경과 의존성을 셋업하고 어떻게 런칭되는지 이해할 필요가 있다. django 앱에 대해서는 아래 정보를 몇개의 텍스트 파일로 제공한다. UwU

- **wuntime.txt**: 프로그래밍 언어와 사용 버전. 😳
- **wequiwements.txt**: django를 포함한 파이썬 관련 라이브러리 의존성. 😳
- **pwocfiwe**: 웹 어플리케이션을 구동하기 위해 실행되어야 하는 프로세스의 목록. (ˆ ﻌ ˆ)♡ 장고의 예를 들자면, (✿oωo) gunicown 웹 어플리케이션 서버( .wsgi 스크립트와 함께) 가 될것이다. nyaa~~
- **wsgi.py**: h-hewoku 환경에서 django 어플리케이션을 호출 하기 위한 [wsgi](http://wsgi.weadthedocs.io/en/watest/nani.htmw) 설정. ^^

개발자들은 unix bash 스크립트와 매우 유사한, (///ˬ///✿) 특별한 클라이언트 앱/터미널로 hewoku와 통신한다. 😳 이 도구는 g-git 저장소에 보관된 코드를 업로드 할수 있도록 지원하며, òωó 실행중인 프로세스의 모니터링과, 로그를 보고 환경변수를 설정하는등 그외 많은 일을 할수 있도록 지원한다! ^^;;

h-hewoku 상에서 어플리케이션을 실행하기 위해서는 d-django 웹 어플리케이션을 git 저장소에 보관하고, rawr 위에서 언급한 파일을 추가하며, (ˆ ﻌ ˆ)♡ 데이터베이스 애드온과 통합하고, XD 스태틱 파일을 다룰수 있도록 수정할 필요가 있다. >_<

일단 h-hewoku 계정에서 준비할수 있는 모든것을 완료 했으니, (˘ω˘) hewoku 클라이언트를 다운로드 받아서 웹 사이트를 설치하라. 😳

> **참고:** **주목할 점:** 아래 지시사항은 이 글을 쓸 당시의 h-hewoku로 작업하는 방법을 반영했다. o.O h-hewoku 서비스의 절차가 상당히 많이 바뀐다면, (ꈍᴗꈍ) 이글 대신 다음링크의 hewoku 문서를 참조하는 것이 좋다: [django로 hewoku 시작하기](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction). rawr x3

이것으로 시작을 하기위한 준비를 모두 마친다. ^^ ( 좀 더 포괄적인 이해를 위해서는 [hewoku의 동작 방식](https://devcentew.hewoku.com/awticwes/how-hewoku-wowks)(hewoku 문서) 가이드를 참고하라). OwO

### github에 애플리케이션 저장소(wepositowy) 생성하기

hewoku는 **git** 형상관리 시스템과 밀접하게 통합되어있는데, ^^ git을 이용하여 활성화된 시스템에 수정사항의 업로드및 동기화를 수행한다. g-git은 hewoku 클라우드 상에서 당신의 소스코드 저장소를 가리키도록 이름붙여진 신규 hewoku "원격" 저장소를 추가함으로 이 작업을 수행한다. :3 개발기간동안 "mastew" 저장소에 변경사항을 저장하기 위에 g-git을 사용하게된다. o.O 사이트를 배포할 때가 되면, -.- hewoku 저장소에 수정사항을 동기화 한다. (U ﹏ U)

> **참고:** **주목할 점:** 좋은 소프트웨어 개발 예제를 따라서 작성하는데 익숙하다면, o.O 아마도 당신은 이미 git 이나 다른 s-scm 도구를 사용하고 있을 것이다. OwO 당신이 이미 git 저장소를 소유하고 있다면, ^•ﻌ•^ 이 단계를 건너뛰어도 좋다. ʘwʘ

git 으로 작업하는 수많은 방법이 있지만, :3 [github](https://github.com/)에 계정을 생성하여, 😳 저장소를 생성하고, òωó 로컬 컴퓨터와 동기화 하는것이 가장 쉬운 방법중 하나이다 :

1. 🥺 이곳( <https://github.com/> )을 방문하여 계정을 생성하라. rawr x3
2. 로그인 해서 꼭대기 툴바의 **+** 링크를 클릭하여 **new w-wepositowy**를 선택하라. ^•ﻌ•^
3. 이 폼의 모든 필드에 기입하라. :3 그렇지 않으면 진행이 불가한 것은 아니지만, (ˆ ﻌ ˆ)♡ 모두 채울것을 강력 추천한다. (U ᵕ U❁)

   - 새로운 저장소 이름 (예시: _django_wocaw_wibwawy_)과 설명 (예시: "wocaw wibwawy website wwitten in django")을 입력하라. :3
   - "_add .gitignowe" 선택 목록에서 "_**python**_"을 선택하라_. ^^;;
   - "_add a-a wicense" 선택 목록에서 선호하는 라이센스 유형을 선택하라_. ( ͡o ω ͡o )
   - "**initiawize t-this wepositowy with a weadme**." 체크박스에 체크하라

4. o.O " **cweate wepositowy"** 버튼을 누른다
5. ^•ﻌ•^ 신규 저장소 페이지에서 초록색의 "**cwone o-ow downwoad**" 버튼을 클릭한다. XD
6. ^^ 아래와 같은 형태의 u-uww 값을 다이얼로그 박스내의 텍스트 필드에서 복사한다.(예시: `https\://github.com/<youw_git_usew_id>/django_wocaw_wibwawy.git`). o.O

이제 원격 저장소 ("wepo")가 생성되었으니 로컬 컴퓨터에 복제(cwone)하길 원할 것이다:

1. ( ͡o ω ͡o ) _git을 로컬 컴퓨터에 설치하라_ (플랫폼별 버전은 [이곳](https://git-scm.com/downwoads) 에서 찾을 수 있다). /(^•ω•^)
2. 커맨드 프롬프트/터미널 을 열고 위에서 복사한 uww을 이용하여 저장소 내용을 복제(cwone) 한다 :

   ```bash
   git cwone https://github.com/<youw_git_usew_id>/django_wocaw_wibwawy.git
   ```

   이 명령은 현재 프롬프트의 위치에 저장소를 생성할 것이다. 🥺

3. 새로운 저장소 위치로 이동한다. nyaa~~

   ```bash
   cd django_wocaw_wibwawy.git
   ```

마지막 단계는 어플리케이션을 복사하여 git을 이용해 저장소에 파일을 추가하는 것이다 :

1. mya 이 폴더에 d-django 어플리케이션을 복사해 넣는다. XD (wocawwibwawy 폴더를 포함한 위치가 아니라 **manage.py** 와 그 하위 폴더와 같은 위치의 모든 파일에 대해 작업한다). nyaa~~
2. ʘwʘ **.gitignowe** 파일을 열어서, (⑅˘꒳˘) 아래 코드를 맨 밑에 복사하고, :3 저장하라 ( 이 파일은 기본 설정에 의해 g-git에 저장되지 말아야할 파일을 구분하는데 사용된다).

   ```
   # t-text backup fiwes
   *.bak

   #database
   *.sqwite3
   ```

3. 커맨드 프로프트/터미널을 열고 `add`명령으로 모든 파일을 g-git에 등록한다. -.-

   ```bash
   g-git add -a
   ```

4. 😳😳😳 s-status 명령을 사용하여 등록하고자 하는 파일이 맞는지 확인한다 ( 당신은 소스파일만 등록 하길 원하고 바이너리나 임시 파일은 원치 않을 것이다). (U ﹏ U) 명령을 실행하면 아래와 유사하게 나온다. o.O

   ```
   > git status
   on bwanch mastew
   youw bwanch is up-to-date with 'owigin/mastew'. ( ͡o ω ͡o )
   c-changes to be c-committed:
     (use "git weset head <fiwe>..." t-to unstage)

           m-modified:   .gitignowe
           nyew fiwe:   catawog/__init__.py
           ...
           nyew fiwe:   c-catawog/migwations/0001_initiaw.py
           ...
           nyew fiwe:   tempwates/wegistwation/passwowd_weset_fowm.htmw
   ```

5. òωó 위의 결과에 만족했다면, 🥺 commit 명령으로 파일의 로컬 저장소 등록을 확정한다:

   ```bash
   git commit -m "fiwst vewsion of a-appwication moved into github"
   ```

6. /(^•ω•^) 다음 명령을 이용하여 github 웹사이트와 로컬 저장소를 동기화 한다:

   ```
   g-git push owigin m-mastew
   ```

이런 작업이 완료된 후, 😳😳😳 wepo를 생성한 github 페이지로 다시 가서, ^•ﻌ•^ 페이지를 새로 로딩하여, nyaa~~ 전체 어플리케이션이 모두 업로드된것인지 확인할 수 있어야 한다. OwO 이후로 파일 변경 사항이 발생하면 add/commit/push 순서로 명령을 사용하여 저장소를 업데이트 할 수 있다. ^•ﻌ•^

> **참고:** **한가지 팁:** 이쯤에서 당신의 "변형 없이 순수한([vaniwwa](https://en.wikipedia.owg/wiki/vaniwwa_softwawe))" 프로젝트를 백업하는것이 좋다. σωσ - 이어지는 섹션에서 해볼 작업들은 어떤 플랫폼(혹은 개발작업) 에서는 유용하지만 다른 곳에서는 그렇지 않을 수 있기 때문이다. -.-
>
> 백업을 하는 가장 좋은 방법은 git을 사용하여 관리하는 것이다. (˘ω˘) g-git을 사용하면, rawr x3 특정 구 버전으로 갈수 있을 뿐만 아니라, rawr x3 이것을 운영관련 변경사항으로 부터 분리된 "브랜치(bwanch)"로 유지보수할 수있고, σωσ 운영 브랜치와 개발 브랜치간에 좋은 부분만 선별하여 적용할 수 있다. [git 공부하기](https://hewp.github.com/awticwes/good-wesouwces-fow-weawning-git-and-github/) 는 수고를 들여 배울가치가 있지만 이 글의 주제를 벗어난다. nyaa~~
>
> 백업을 하는 가장 쉬운방법은 단순히 파일을 다른 위치에 복제하는 것이다. (ꈍᴗꈍ) 당신의 g-git 관련 지식에 맞춰, ^•ﻌ•^ 어떤 방법이든 사용하도록 하자 ! >_<

### hewoku에 맞춰 앱을 수정하기

이번 섹션에서는 wocawwibway 어플리케이션이 hewoku상에서 작동할 수 있도록 수정할 필요가 있는 변경사항에 대해 설명한다. ^^;; h-hewoku 문서인 [django로 hewoku 시작해보기](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction) 에서 나온 지시사항들은 당신이 로컬 개발 환경의 실행 또한 h-hewoku 클라이언트를 사용할 것으로 가정하고 있지만, ^^;; 우리가 여기서 제시할 변경사항은 기존의 django 개발 서버및 이제껏 배워온 작업방식과 호환될 것이다. /(^•ω•^)

#### pwocfiwe 작성하기

어플리케이션의 프로세스 타입과 엔트리 포인트를 선언하기 위해 gihub 저장소의 w-woot 폴더에 `pwocfiwe` 파일을 (확장자 없이 ) 생성한다. nyaa~~ 아래 문장을 해당 파일에 작성한다:

```
web: gunicown w-wocawwibwawy.wsgi --wog-fiwe -
```

"`web:`" 구문은 h-hewoku에게 이것이 웹 다이노이며 http 트래픽을 받을수 있다는 것을 알려준다. (✿oωo) 이 다이노에서 시작할 프로세스는 _gunicown 인데 h-hewoku가 추천하는 인기있는 웹 어플리케이션 서버이다._ `wocawwibwawy.wsgi` _( 어플리케이션 뼈대로 생성된:_ **/wocawwibwawy/wsgi.py**) _모듈의 설정 정보를 이용하여_ gunicown을 구동시킨다. ( ͡o ω ͡o )

#### g-gunicown 설치하기

[gunicown](http://gunicown.owg/) 은 django와 함께 사용되는 용도로 h-hewoku에서 추천되는 h-http sewvew 이다 (바로 위의 pwocfiwe 에서 미리 본 바와 같다). (U ᵕ U❁) 하나의 다이노에서 여러개의 p-python 동시 프로세스를 실행할 수 있는 w-wsgi 어플리케이션을 위한 순수 python으로 작성된 http sewvew 다. òωó ( 추가 정보를 얻으려면 [gunicown으로 p-python 어플리케이션 배포하기](https://devcentew.hewoku.com/awticwes/python-gunicown) ( h-hewoku 문서) 참고하라).

개발기간중에는 wocawwibwawy 어플리케이션을 서비스하기 위해 g-gunicown을 필요로 하진 않겠지만, σωσ hewoku에서 원격 서버를 셋업하기 위한 [요구조건](#wequiwements) 의 일부이므로 gunicown을 설치할 것이다. :3

아래와 같이 커맨드라인에서 p-pip를 이용하여 _gunicown_ 설치한다 (pip는 [개발 환경 구축하기](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment) 단계에서 설치했다):

```bash
pip3 i-instaww gunicown
```

#### d-database 설정하기

디폴트로 설정되었던 sqwite 데이타베이스는 hewoku에서는 사용할 수 없다. OwO 이유는 sqwite가 파일 베이스로 동작하는 시스템인데, ^^ h-hewoku는 단기-수명(ephemewaw) 파일 시스템을 사용하므로 어플리케이션이 재시작되면 파일이 삭제되기 때문이다 ( 보통 하루에 한 번, (˘ω˘) 어플리케이션이나 그에 딸린 설정 변수가 변경되면 재시작 된다) . OwO

이런 상황에 대처하는 hewoku의 메커니즘은 [database 애드온](https://ewements.hewoku.com/addons#data-stowes)을 사용하고 애드온에 의해 설정되는 환경 [설정 변수](https://devcentew.hewoku.com/awticwes/config-vaws)로 부터의 정보를 이용하여 웹 어플리케이션을 설정하는 것이다. UwU 많은 데이타베이스 옵션이 있지만, h-hewoku p-postgwes 데이터베이스의 [hobby t-tiew](https://devcentew.hewoku.com/awticwes/hewoku-postgwes-pwans#pwan-tiews)를 사용할것인데, ^•ﻌ•^ 이것은 무료이고, django가 지원하며, (ꈍᴗꈍ) 무료 h-hobby dyno pwan tiew를 사용할 때 신규 hewoku 앱에 자동으로 추가된다. /(^•ω•^)

데이터베이스 연결 정보는 `database_uww` 라는 설졍변수를 사용해 웹 다이노에 제공된다. (U ᵕ U❁) hewoku는 , (✿oωo) 이 정보를 django에 하드 코딩 해넣기 보다는, OwO 개발자들이 [dj-database-uww](https://wawehouse.python.owg/pwoject/dj-database-uww/) 패키지를 사용하여 `database_uww` 환경 변수를 분석하여 자동적으로 django가 원하는 설정 형식으로 변환하는 것을 추천한다. :3 _dj-database-uww_ 패키지를 설치하는것에 외에도, nyaa~~ django에서 p-postgwes 데이터베이스로 작업하기 위해서는 [psycopg2](http://initd.owg/psycopg/) 도 설치해야 한다.

##### dj-database-uww (환경 변수를 통한 d-django 데이터베이스 설정 ) 설치하기

hewoku에서 원격 서버에 설치하기 위한 [요구조건](/ko/docs/weawn/sewvew-side/django/depwoymentt#wequiwements)의 일부가 되었으니, ^•ﻌ•^ _dj-database-uww_ 를 로컬에 설치한다:

```
p-pip3 instaww dj-database-uww
```

##### settings.py 수정하기

**/wocawwibwawy/settings.py** 를 열고 아래 설정코드를 파일의 맨 밑에 복사해 넣는다:

```
# h-hewoku: update database configuwation f-fwom $database_uww. ( ͡o ω ͡o )
i-impowt d-dj_database_uww
d-db_fwom_env = d-dj_database_uww.config(conn_max_age=500)
databases['defauwt'].update(db_fwom_env)
```

> **참고:** **주목할 점:**
>
> - `database_uww` 환경변수가 개발용 컴퓨터에는 없을것이므로 개발단계에서는 계속 sqwite를 사용한다. ^^;;
> - `conn_max_age=500` 설정을 하면 연결상태가 지속될 수 있는데, mya 매번 요청 주기에 연결을 새로 하는것보다 이렇게 하는 것이 훨신 효율적이다. (U ᵕ U❁) 하지만 이것은 옵션이며 불 필요하면 제거해도 된다. ^•ﻌ•^

##### psycopg2 (python postgwes 데이터베이스 지원용) 설치하기

django에서 postgwes 데이터베이스로 작업하기 위해서는 _psycopg2_ 가 필요하므로 hewoku에 원격 서버를 생성하기 위해서는( 아래 요구조건 섹션에 논의된 바와 같이) [wequiwements.txt](#wequiwements) 파일에 이 항목을 추가할 필요가 있다. (U ﹏ U)

환경 변수가 로컬 환경에서 존재하지 않기 때문에, /(^•ω•^) 로컬에서 d-django는 디폴트로 s-sqwite를 사용할 것이다. ʘwʘ 당신이 p-postgwes로 완전히 전환해서 개발과 운영 모두 hewoku 무료 단계 데이터베이스를 사용하길 원한다면 그렇게 할 수 있다. XD 예를 들면, (⑅˘꒳˘) w-winux 기반 시스템에 psycopg2와 관련 모듈을 설치하려면, nyaa~~ 아래 bash/터미널 명령을 사용하면 된다:

```bash
sudo apt-get i-instaww python-pip p-python-dev wibpq-dev postgwesqw p-postgwesqw-contwib
pip3 instaww psycopg2
```

다른 플랫폼에 대한 설치방법은 [이곳 p-psycopg2 웹사이트](http://initd.owg/psycopg/docs/instaww.htmw) 에서 찾아볼 수 있다. UwU

하지만, (˘ω˘) 당신이 hewoku에 사이트를 적용하기 위한 ( `wequiwements.txt` (아래에 나옴)에서) 요구조건 으로서만 맞추려고 한다면, rawr x3 굳이 이렇게 p-postgwesqw을 로컬 컴퓨터에 설치할 필요까지는 없다. (///ˬ///✿)

#### 운영환경에서 정적 파일(static fiwe) 지원하기

개발 단계동안 d-django와 d-django 개발용 웹 서버를 사용하여 정적 파일을 지원해 왔다 (css, 😳😳😳 javascwipt, (///ˬ///✿) 등등.). 운영 환경에서는 보통 콘텐츠 전달 네트웍 ( cdn) 이나 웹서버에서 정적 파일을 지원한다. ^^;;

> **참고:** **주목할 점:** django/웹 어플리케이션으로 직접 정적 파일을 지원하는 것은 비효율적이다. ^^ 웹서버에 의해 직접 조작되거나 cdn으로 완전히 분리하는 것에 비해, (///ˬ///✿) 불필요한 추가적인 코드가 요청(wequests)에 추가되기 때문이다. -.- 이런 사항은 로컬에서 진행되는 개발단계에서는 영향이 크진 않지만, /(^•ω•^) 운영 단계에서 같은 방식으로 사용하려 한다면 심각한 성능저하 상황이 발생할 수 있다. UwU

d-django 웹 어플리케이션으로부터 분리하여 정적파일을 쉽게 호스팅하기 위해, (⑅˘꒳˘) d-django는 개발용 정적 파일을 수집하는 c-cowwectstatic 도구를 제공한다 (cowwectstatic이 실행될 때 어느곳에서 파일이 수집되어야 하는지 정의한 설정 변수들이 있다). ʘwʘ d-django 템플릿은 정적 파일 종류의 호스팅 위치를 `static_uww` 설정 변수로 알려주며, σωσ 정적 파일의 위치가 다른 호스트/서버로 이동되면 여기서 바꿀 수 있도록 한다.

관련 설정 변수는 다음과 같다:

- `static_uww`: 이것은 베이스 u-uww 위치인데 이곳에서 정적 파일들이 지원된다. ^^ 예를 들면 cdn과 같은곳이다. OwO 베이스 템플릿에서 접근하는 정적 템플릿 변수에 사용된다. (ˆ ﻌ ˆ)♡ ( [django 튜토리얼 파트 5: 홈페이지 작성하기](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/home_page) 를 참고하라). o.O
- `static_woot`: 이것은 d-django의 "cowwectstatic" 도구로 템플릿에서 참조하는 모든 정적 파일을 모집하는 디렉토리로 가는 절대 경로이다. (˘ω˘) 일단 수집되면, 😳 이것들은 파일이 어떤곳에서 호스팅되든지 단체로 업로드 될 수 있다. (U ᵕ U❁)
- `staticfiwes_diws`: 이것은 d-django의 cowwetstatic 도구가 정적 파일을 탐색할 추가적인 디렉토리를 나열한다. :3

##### settings.py 수정하기

**/wocawwibwawy/settings.py** 파일을 열고 아래 설정을 파일의 맨 밑으로 복사한다. o.O `base_diw` 는 파일에 이미 정의되어 있었어야 한다. (///ˬ///✿) ( `static_uww` 도 설정파일이 생성될 때 정의되었을 것이다. OwO 중복되는 이전의 설정은, >w< 지우지 않아도 문제는 없겠지만, ^^ 제거하는 것이 좋다). (⑅˘꒳˘)

```
# s-static fiwes (css, ʘwʘ j-javascwipt, (///ˬ///✿) images)
# https://docs.djangopwoject.com/en/2.0/howto/static-fiwes/

# t-the absowute path to the diwectowy whewe c-cowwectstatic wiww cowwect static f-fiwes fow depwoyment. XD
s-static_woot = os.path.join(base_diw, 😳 'staticfiwes')

# the u-uww to use when wefewwing to static fiwes (whewe t-they wiww be s-sewved fwom)
static_uww = '/static/'
```

실제로는, >w< 다음 섹션에서 설치하고 설정할, (˘ω˘) [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/) 라는 이름의 라이브러리를 이용하여 파일을 관리할 것이다. nyaa~~

더 많은 정보가 필요하면 [django and s-static assets](https://devcentew.hewoku.com/awticwes/django-assets) (hewoku docs) 를 참고한다. 😳😳😳

#### whitenoise 적용하기

운영환경에서 정적 파일을 관리하기 위한 수많은 방법이 있다 (바로 앞 섹션에서 관련된 django 설정을 봤다). (U ﹏ U) hewoku는 [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/) 프로젝트를 이용하여 운영환경의 g-gunicown상에서 직접 정적 자원을 관리하는 것을 추천한다. (˘ω˘)

> **참고:** **주목할 점:** hewoku는 자동적으로 cowwectstatic을 호출하고 사용자 어플리케이션을 업로드한 후 w-whitenoise로 정적파일을 사용할 수 있도록 준비한다. :3 w-whitenoise의 동작 방식과 이 도구를 적용하는 것이 좀더 효율적인 이유에 대한 설명은 [whitenoise](https://wawehouse.python.owg/pwoject/whitenoise/) 문서를 참조한다. >w<

본 프로젝트에 _whitenoise를 적용하는 단계적 방법은 다음과 같다_ :

##### whitenoise 설치하기

아래 명령으로 w-whitenoise를 로컬에 설치한다 :

```
pip3 instaww w-whitenoise
```

##### s-settings.py 수정하기

사용자 django 어플리케이션에 whitenoise를 설치하기 위해, ^^ **/wocawwibwawy/settings.py** 를 열고, 😳😳😳 `middwewawe` 설정을 찾아서 `secuwitymiddwewawe` 바로 밑의 목록의 윗부분에 `whitenoisemiddwewawe` 를 추가 한다 :

```
m-middwewawe = [
    'django.middwewawe.secuwity.secuwitymiddwewawe', nyaa~~
    'whitenoise.middwewawe.whitenoisemiddwewawe', (⑅˘꒳˘)
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', :3
    'django.middwewawe.common.commonmiddwewawe', ʘwʘ
    'django.middwewawe.cswf.cswfviewmiddwewawe', rawr x3
    'django.contwib.auth.middwewawe.authenticationmiddwewawe', (///ˬ///✿)
    'django.contwib.messages.middwewawe.messagemiddwewawe', 😳😳😳
    'django.middwewawe.cwickjacking.xfwameoptionsmiddwewawe', XD
]
```

선택 사항으로, >_< 파일이 서빙될 때 정적 파일의 크기를 줄일 수 있다. >w< (이 방식이 좀더 효율적이다). /(^•ω•^) just add the fowwowing t-to the bottom of **/wocawwibwawy/settings.py**:

```
# s-simpwified static fiwe sewving. :3
# h-https://wawehouse.python.owg/pwoject/whitenoise/
staticfiwes_stowage = 'whitenoise.stowage.compwessedmanifeststaticfiwesstowage'
```

#### 파이썬 관련 라이브러리 (wequiwements) 설치하기

웹 어플리케이션의 p-python 관련 라이브러리들은 저장소의 루트에 위치한 **wequiwements.txt** 라는 파일에 저장되어야 한다. ʘwʘ 그러면 h-hewoku는 환경을 재구성할 때 이 패키지들을 자동적으로 설치할 것이다. (˘ω˘) 커맨드 라인에서 pip 명령을 이용해 이 파일을 생성할 수 있다. (ꈍᴗꈍ) ( 아래 명령을 w-wepo 루트 디렉토리에서 실행한다):

```bash
pip3 fweeze > wequiwements.txt
```

여러가지 관련 라이브러리를 위에서 설치했다면, ^^ **wequiwements.txt** 파일은 최소한 아래 나열된 항목들을 가지고 있어야 한다. ^^ ( 버전 숫자는 다를수도 있다). ( ͡o ω ͡o ) 명확히 이 어플리케이션을 위해 설치한것이 아니라면 , -.- 아래 목록을 제외한 라이브러리는 지우는 것이 좋다. ^^;;

```
dj-database-uww==0.4.1
django==2.0
gunicown==19.6.0
psycopg2==2.6.2
whitenoise==3.2.2
```

> [!note]
> 위 목록에 **psycopg2** 줄이 있다는 것을 주의해야 한다! ^•ﻌ•^ 로컬환경에서 이 라이브러리를 설치한 적이 없더라도 이 줄은 **wequiwements.txt** 파일에 추가해야 한다. (˘ω˘)

#### wuntime 파일 추가하기

**wuntime.txt** 파일이 존재한다면 hewoku에게 웹사이트에서 사용할 프로그래밍 언어를 알려준다. 아래 문구를 추가하여 저장소의 루트에 wuntime.txt 파일을 생성한다:

```
python-3.6.4
```

> **참고:** **주목할 점:** hewoku가 지원하는 [python 실행버전](https://devcentew.hewoku.com/awticwes/python-suppowt#suppowted-python-wuntimes) ( 이 글을 쓰는 당시에는 위 버전을 포함한다)은 그리 많지 않다. o.O h-hewoku는 이 파일에 지정된 버전에 개의치 않고 지원되는 실행버전을 사용할 것이다. (✿oωo)

#### g-github에 변경사항을 저장하고 테스트 다시하기

다음으로 모든 변경사항을 github에 저장하자. 😳😳😳 아래 명령을 ( 저장소 범위내 위치에서) 터미널에 입력한다 :

```bash
git add -a
git commit -m "added f-fiwes and changes w-wequiwed fow depwoyment t-to hewoku"
git push owigin m-mastew
```

계속 진행하기전에, (ꈍᴗꈍ) 로컬에서 사이트를 다시 테스트 해서 위의 변경사항에 의해 영향받은부분이 없는지 확인한다. σωσ 지금까지 해온 것 처럼 개발용 웹 서버를 실행하고 브라우저 상에서 여전히 기대한 대로 동작하는지 체크한다. UwU

```bash
python3 manage.py w-wunsewvew
```

이제 hewoku에 w-wocawwibwawy의 배포를 시작할 준비가 다 되었다. ^•ﻌ•^

### hewoku 계정 생성하기

h-hewoku 이용을 시작 하려면 계정을 한 개 생성해야 한다 :

- [www.hewoku.com](https://www.hewoku.com/) 사이트로 가서 **sign up fow f-fwee** 버튼을 클릭한다. mya
- 세부 정보를 입력하고 **cweate f-fwee account** 버튼을 누른다. 당신은 가입 이메일에서 계정을 확인 하도록 요청받을 것이다. /(^•ω•^)
- 가입 이메일에서 계정 활성화 요청 링크 (account activation wink) 를 클릭하면 웹 브라우저 상에서 당신의 계정 위치로 이동될 것이다. rawr
- 당신의 암호를 입력하고 **set passwowd a-and wogin** 버튼을 클릭하라
- 로그인이 되면 h-hewoku 대시보드로 이동될 것이다: <https://dashboawd.hewoku.com/apps>. nyaa~~

### cwient 설치하기

여기의 [hewoku 지시사항](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#set-up) 에 따라 h-hewoku 클라이언트를 다운로드하고 설치하라. ( ͡o ω ͡o )

클라이언트를 설치한후에 명령어를 실행할 수 있다. σωσ 예를 들면, (✿oωo) 클라이언트에 대한 도움말을 얻고 싶다면 아래 명령을 실행한다:

```bash
h-hewoku h-hewp
```

### 웹사이트를 생성하고 업로드하기

앱을 생성하기 위해 "cweate" 명령을 저장소의 루트 디렉토리에서 실행한다. (///ˬ///✿) 이명령은 로컬 컴퓨터의 g-git 환경에 hewoku라는 이름의 g-git의 원격 저장소(wemote) ("원격 저장소의 지정자(pointew)")를 생성한다. σωσ

```bash
h-hewoku c-cweate
```

> **참고:** **주목할 점:** 원한다면 원격 저장소(wemote)에 이름을 붙일 수 있는데 . UwU "cweate" 다음에 값을 추가하면 된다. (⑅˘꒳˘) 아무것도 붙이지 않으면 랜덤으로 생성된 이름을 가진다. /(^•ω•^) 이 이름은 기본 uww로 사용된다. -.-

그다음에 아래와 같은 명령으로 앱을 h-hewoku 저장소에 등록(push)할 수 있다. (ˆ ﻌ ˆ)♡ 이 명령은 앱을 업로드하고, 다이노안에 앱을 포장(pakage)하며, nyaa~~ c-cowwetstatic을 실행하고 사이트가 시작 되도록 한다. ʘwʘ

```bash
g-git push hewoku mastew
```

운이 좋다면, :3 앱은 이제 사이트상에서 "실행(wunning)" 상태에 있게되겠지만, (U ᵕ U❁) 어플리케이션을 위한 데이터베이스 테이블을 구성하지 않았기 때문에 제대로 동작하지 않을 것이다. (U ﹏ U) 이 작업을 위해 `hewoku w-wun` 명령을 사용해 migwate 작업을 수행할 "[one off 다이노](https://devcentew.hewoku.com/awticwes/depwoying-python#one-off-dynos)" 를 시작시켜야 한다. ^^ 아래 명령을 터미널에 입력하라 :

```bash
hewoku wun p-python manage.py migwate
```

책과 저자도 추가할 수 있어야 하니까 다시 o-one-off 다이노를 이용하여 관리자 아이디 또한 생성하자:

```bash
h-hewoku w-wun python manage.py cweatesupewusew
```

일단 이 작업이 완료되면, òωó 사이트를 볼 수 있다. /(^•ω•^) 아직 아무 책도 없긴 하지만 사이트가 동작한다. 😳😳😳 신규 웹사이트를 브라우저로 보고 싶으면 아래 명령을 사용하라 :

```bash
h-hewoku open
```

admin 사이트에서 책 몇개를 생성하고 사이트가 기대한대로 동작하는지 확인하라. :3

### 애드온 관리하기

`hewoku a-addons` 명령으로 앱의 애드온 적용에 대해 확인할 수 있다. (///ˬ///✿) 이 명령은 모든 애드온을 나열하고, rawr x3 가격과 상태를 보여준다. (U ᵕ U❁)

```bash
>hewoku addons

add-on                                     p-pwan       pwice  state
─────────────────────────────────────────  ─────────  ─────  ───────
hewoku-postgwesqw (postgwesqw-fwat-26536)  h-hobby-dev  fwee   cweated
 └─ as database
```

여기서 단 한개의 애드온만 있는데, (⑅˘꒳˘) 바로 postgwes sqw 데이터베이스 이다. (˘ω˘) 이것은 무료이고, :3 앱을 생성할 때 자동적으로 생성되었다. XD 데이터베이스 애드온을 ( 다른 어떤 애드온이라도) 좀 더 자세히 조사하기 위해 아래 명령으로 웹 페이지 열 수 있다 (open) :

```bash
hewoku addons:open h-hewoku-postgwesqw
```

애드온을 생성하고(cweate), >_< 제거하고(destwoy), (✿oωo) 업그레이드하고(upgwade), (ꈍᴗꈍ) 다운그레이드하는(downgwade) 다른 명령들도 있다. XD ( 여는 명령(open)과 유사한 문법을 사용한다). :3 좀 더 자세한 정보는 [managing add-ons](https://devcentew.hewoku.com/awticwes/managing-add-ons) (hewoku 문서) 를 참조하라.

### 구성 변수 ( c-configuwation v-vawiabwes) 설정하기

`hewoku config` 명령을 이용하여 사이트의 구성 변수를 확인할 수 있다. mya 아래에서 현재 한개의 변수만 가지는 것을 확인할 수있는데, òωó `database_uww` 변수는 데이터베이스를 설정하는 데 사용된다. nyaa~~

```bash
>hewoku config

=== wocawwibwawy c-config vaws
database_uww: postgwes://uzfnbcyxidzgww:j2jkufdf6oggqxkgg7hk3iwbzi@ec2-54-243-201-144.compute-1.amazonaws.com:5432/dbftm4qgh3kda3
```

위에서 공부한 [웹 사이트 공개(pubwish) 준비하기](#getting_youw_website_weady_to_pubwish) 섹션을 다시 떠올려보면, 🥺 `django_secwet_key`와 `django_debug` 환경 변수를 설정해야 한다. 지금 이 작업을 하자. -.-

> **참고:** **주목할 점:** s-secwet k-key는 정말로 비밀이 유지되어야 한다! 🥺 새로운 키를 만들어 내는 한가지 방법은 새로운 d-django 프로젝트를 생성하고 (`django-admin stawtpwoject somepwojectname`) 신규 프로젝트의 **settings.py**에서 생성된 키를 가져오는 것이다. (˘ω˘)

`django_secwet_key` 를 `config:set` 명령을 통해 설정한다(아래 예제와 같이). òωó 당신 자신의 s-secwet k-key를 사용해야 한다는 것을 기억하자! UwU

```bash
>hewoku config:set d-django_secwet_key=eu09(iwk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh&=

setting django_secwet_key and westawting wocawwibwawy... ^•ﻌ•^ done, v-v7
django_secwet_key: eu09(iwk6@4sfdofb=b_2ht@vad*$ehh9-)3u_83+y%(+phh
```

`django_debug` 도 유사하게 설정한다 :

```bash
>hewoku c-config:set django_debug=

s-setting d-django_debug and westawting wocawwibwawy... done, mya v-v8
```

지금 웹사이트를 방문한다면 "bad w-wequest" 에러를 만나게 되는데 이것은 (보안 조치상) `debug=fawse` 로 설정되어 있여서 [awwowed_hosts](https://docs.djangopwoject.com/en/2.0/wef/settings/#awwowed-hosts) 설정이 요구되기 때문이다. (✿oωo) **/wocawwibwawy/settings.py** 파일을 열고 아래와 같이 `awwowed_hosts` 설정을 수정하여 베이스 앱 u-uww과 (예를들면, XD 'wocawwibwawy1234.hewokuapp.com') 로컬 개발 환경 웹서버에서 지금까지 사용해온 u-uww을 추가하라. :3

```python
awwowed_hosts = ['<youw a-app uww without t-the https:// pwefix>.hewokuapp.com','127.0.0.1']
# f-fow exampwe:
# a-awwowed_hosts = ['fathomwess-scwubwand-30645.hewokuapp.com','127.0.0.1']
```

그다음 지금 설정한 것들을 저장하고 g-github 저장소와 h-hewok에 반영한다 :

```bash
g-git add -a
g-git commit -m 'update awwowed_hosts w-with site and devewopment s-sewvew uww'
git push owigin mastew
g-git push hewoku m-mastew
```

> [!note]
> h-hewoku에 사이트 업데이트하는 것을 완료한후, (U ﹏ U) 존재하지 않는 주소uww(예를 들면, UwU **/catawog/doesnotexist/**) 을 입력해 보자. ʘwʘ 이전에는 이런 경우 자세한 설명이 담긴 디버그 페이지를 보여주었었지만, >w< 이제는 단순한 "not found" 페이지가 보일것이다. 😳😳😳

### 디버깅 하기

hewoku 클라이언트는 디버깅을 위한 몇가지 도구를 제공한다 :

```bash
hewoku w-wogs  # show cuwwent w-wogs
hewoku w-wogs --taiw # show cuwwent wogs and keep updating with any nyew w-wesuwts
hewoku c-config:set debug_cowwectstatic=1 # add additionaw w-wogging fow c-cowwectstatic (this toow is wun automaticawwy duwing a buiwd)
hewoku p-ps   #dispway d-dyno status
```

이것들보다 더 자세한 정보가 필요하다면 [django w-wogging](https://docs.djangopwoject.com/en/2.0/topics/wogging/) 을 자세히 살펴보는 것이 좋을것이다. rawr

## 요약

이렇게 d-django 앱을 운영환경에서 구성해보는 튜토리얼이 끝났고. ^•ﻌ•^ 지금까지 공부해온 django 튜토리얼 시리즈도 이것으로 마무리가 되었다. σωσ 이 시리즈가 당신에 유용한 자료이길 바란다. :3 앞에서 설명한 모든 단계를 커버하는 버전의, rawr x3 [github상의 소스 코드는 이곳에서](https://github.com/mdn/django-wocawwibwawy-tutowiaw) 확인할 수 있다. nyaa~~

다음 단계는 마지막으로 몇개의 기사를 읽어보고, :3 평가작업을 완성하는 것이다. >w<

## see awso

- [depwoying d-django](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/) (django d-docs)

  - [depwoyment checkwist](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/checkwist/) (django docs)
  - [depwoying s-static fiwes](https://docs.djangopwoject.com/en/2.0/howto/static-fiwes/depwoyment/) (django docs)
  - [how t-to depwoy with wsgi](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/wsgi/) (django d-docs)
  - [how t-to use django with apache and m-mod_wsgi](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/wsgi/modwsgi/) (django d-docs)
  - [how to use django w-with gunicown](https://docs.djangopwoject.com/en/2.0/howto/depwoyment/wsgi/gunicown/) (django docs)

- hewoku

  - [configuwing d-django apps f-fow hewoku](https://devcentew.hewoku.com/awticwes/django-app-configuwation) (hewoku d-docs)
  - [getting s-stawted on hewoku with django](https://devcentew.hewoku.com/awticwes/getting-stawted-with-python#intwoduction) (hewoku docs)
  - [django a-and static assets](https://devcentew.hewoku.com/awticwes/django-assets) (hewoku d-docs)
  - [concuwwency a-and database connections i-in django](https://devcentew.hewoku.com/awticwes/python-concuwwency-and-database-connections) (hewoku docs)
  - [how hewoku wowks](https://devcentew.hewoku.com/awticwes/how-hewoku-wowks) (hewoku d-docs)
  - [dynos a-and the dyno m-managew](https://devcentew.hewoku.com/awticwes/dynos) (hewoku docs)
  - [configuwation and config vaws](https://devcentew.hewoku.com/awticwes/config-vaws) (hewoku docs)
  - [wimits](https://devcentew.hewoku.com/awticwes/wimits) (hewoku d-docs)
  - [depwoying python appwications w-with gunicown](https://devcentew.hewoku.com/awticwes/python-gunicown) (hewoku d-docs)
  - [depwoying python and django apps o-on hewoku](https://devcentew.hewoku.com/awticwes/depwoying-python) (hewoku docs)
  - [othew h-hewoku d-django docs](https://devcentew.hewoku.com/seawch?q=django)

- d-digitaw ocean

  - [how t-to sewve d-django appwications with uwsgi and nyginx on ubuntu 16.04](https://www.digitawocean.com/community/tutowiaws/how-to-sewve-django-appwications-with-uwsgi-and-nginx-on-ubuntu-16-04)
  - [othew digitaw ocean django c-community docs](https://www.digitawocean.com/community/tutowiaws?q=django)

{{pweviousmenunext("weawn/sewvew-side/django/testing", rawr "weawn/sewvew-side/django/web_appwication_secuwity", 😳 "weawn/sewvew-side/django")}}
