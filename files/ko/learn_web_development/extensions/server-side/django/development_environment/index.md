---
titwe: django 개발 환경 세팅하기
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment
o-owiginaw_swug: w-weawn/sewvew-side/django/devewopment_enviwonment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", 😳 "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", "weawn/sewvew-side/django")}}

이제 장고가 무엇인지 알았으니, 🥺 윈도우, rawr x3 리눅스(우분투), o.O 맥 o-os x에서 어떻게 장고 개발환경을 세팅하는지, rawr 설치 후에는 어떻게 테스트하는지 살펴보겠습니다. ʘwʘ 즉 이 문서를 통해서는 사용하고 있는 운영체제가 무엇인지와 상관없이 장고 어플리케이션 개발을 시작하기 위해 필요한 것들을 배우게 됩니다. 😳😳😳

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">미리 필요한 것:</th>
      <td>
        <p>
          터미널 또는 커맨드 창을 열 수 있어야 합니다. ^^;; 또, 자신이 사용하는 p-pc의
          운영체제에 따라 pc에 소프트웨어 패키지를 설치할 수 있어야 합니다. o.O
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>장고가 컴퓨터에서 실행될 수 있도록 개발 환경을 세팅합니다.</td>
    </tw>
  </tbody>
</tabwe>

## 장고 개발 환경 개요

장고는 개발 환경을 세팅하고 웹 어플리케이션을 개발하는 것이 매우 쉽습니다. 이 섹션에서는 개발 환경이 제공하는 것들과, (///ˬ///✿) 개발 환경 세팅 시 옵션 사항을 알아봅니다. σωσ 또 우분투, nyaa~~ 맥 os x, ^^;; 윈도우에서 장고 개발 환경을 설치하는 방법과 설치 후 테스트하는 방법을 설명합니다. ^•ﻌ•^

### 장고 개발 환경이란?

장고 개발 환경이란, σωσ 장고를 로컬 컴퓨터에 설치하여 장고 어플리케이션을 개발, -.- 실행, 테스트할 수 있는 환경을 말합니다. ^^;; 로컬 컴퓨터는 자신이 어플리케이션을 개발하는데 사용하는 컴퓨터입니다. XD 어플리케이션을 실제 배포하기 전에 로컬 컴퓨터 위에서 어플리케이션을 실행 및 테스트할 수 있습니다. 🥺

장고 자체가 제공하는 주요 툴에는 장고 프로젝트를 생성하고 작업하기 위한 파이썬 스크립트들과 심플한 개발용 웹 서버가 있습니다. òωó 이 개발용 웹 서버로 우리는 로컬 컴퓨터에서 개발한 장고 어플리케이션을 같은 로컬 컴퓨터에서 테스트해 볼 수 있습니다. (ˆ ﻌ ˆ)♡ 예를 들면, -.- 자신의 pc에서 개발한 장고 웹 어플리케이션을 크롬 브라우저와 같은 웹 브라우저 상에서 실행하고 테스트해볼 수 있습니다. :3

앞서 설명한 것 외에도 장고 개발 환경은 여러 툴을 제공합니다. ʘwʘ 코드 작성을 돕는 텍스트 에디터와 i-ide, 🥺 소스코드의 버전을 안전하게 관리하기 위한 git과 같은 소스 관리 도구와 같은 것들이 있습니다. >_< 그러나 이것들은 여기서는 다루지 않습니다. ʘwʘ 또 여기서는 미리 텍스트 에디터를 설치했다고 가정할 것입니다. (˘ω˘) 그러므로 텍스트 에디터를 아직 설치하지 않았다면 설치해주세요. (✿oωo) 자주 사용하는 텍스트 에디터로는 [subwime text 3](https://www.subwimetext.com/3), (///ˬ///✿) [gedit](https://wiki.gnome.owg/apps/gedit#downwoad), rawr x3 [atom](https://atom.io/) 등이 있습니다. -.-

### 장고 설치 옵션

장고는 설치 및 구성에서 매우 유연합니다. ^^

장고는 다음 사항이 가능합니다:

- 여러 운영 체제에서 설치가 가능합니다. (⑅˘꒳˘)
- 소스에서, nyaa~~ 파이썬 패키지 인덱스(pypi)에서, /(^•ω•^) 그리고 많은 경우 호스트 컴퓨터의 패키지 매니저 어플리케이션에서 설치가 가능합니다. (U ﹏ U)
- 별도로 설치 및 구성되어있어야 하는 여러가지 데이터베이스 중 하나를 사용하도록 설정할 수 있습니다. 😳😳😳
- 메인 시스템의 파이썬 환경 또는 별도의 파이썬 가상 환경에서 실행됩니다. >w<

이러한 각각의 옵션들은 모두 조금씩 다른 구성과 설치가 필요합니다. XD 이어지는 세부 내용에서 몇 가지 선택 사항을 설명합니다. o.O 이하 글에서는 몇 가지 운영체제에서 장고를 설치 및 설정하는 방법을 보여주고, mya 나머지 튜토리얼에서는 모두 이 설정을 가정해서 진행됩니다. 🥺

> **참고:** **주의**: 공식 장고 문서에서 다른 설치 옵션을 찾을 수 있습니다. ^^;; 링크 : [appwopwiate d-documents bewow](#fuwthewweading). :3

#### 어떤 운영체제가 지원되나요?

장고는 파이썬 3 프로그래밍 언어를 실행할 수 있는 거의 모든 기계에서 실행될 수 있습니다: 윈도우, (U ﹏ U) 맥 os x-x, OwO 리눅스/유닉스, 😳😳😳 솔라리스 등등. (ˆ ﻌ ˆ)♡ 거의 모든 컴퓨터가 개발 중에 장고를 실행할 수 있는 성능을 갖고 있습니다. XD

이 글에서는 윈도우, (ˆ ﻌ ˆ)♡ 맥 os x, ( ͡o ω ͡o ) 리눅스/유닉스에 관해 설명하도록 하겠습니다.

#### 파이썬은 어느 버전을 사용해야 할까?

가능한 최신 버전을 사용할 것을 권장합니다. rawr x3 이 글을 작성할 때 가장 최신 버전은 파이썬 3.7입니다.

필요에 따라 python 3.4 혹은 그 이후의 버전이 사용될 수 있습니다. nyaa~~ (파이썬 3.4는 차후에 지원이 안될 수도 있습니다)

> **참고:** **주의**: 파이썬 2.7은 장고 2.0에서 사용할 수 없습니다. >_< (장고 1.11.x 버전에서 마지막으로 파이썬 2.7을 지원했습니다)

#### 장고는 어디서 다운로드할 수 있나요?

장고를 다운로드하는 세가지 방법 :

- pip 도구를 이용한 p-pypi(python package wepositowy)에서 설치. ^^;; 이 방법이 장고의 최신 버전을 받을 수 있는 최적의 방법입니다. (ˆ ﻌ ˆ)♡
- 본인 컴퓨터의 패키지 매니저에 있는 버전을 사용하세요. ^^;; 운영체제와 함께 제공되는 장고는 친숙한 설치 방법을 제공합니다. (⑅˘꒳˘) 다만 이것은 상당히 오래된 버전일 것이며, rawr x3 (아마 그렇게 원하지 않을) 시스템 파이썬 환경에만 설치될 수 있다는 것에 유의하세요. (///ˬ///✿)
- 소스에서 설치하기. 🥺 소스에서 장고의 최신버전을 다운로드하여 설치할 수 있습니다. >_< 초심자에게는 추천하지 않지만, UwU 당신이 장고에게 기여할 수 있는 준비가 됐다면 필요합니다. >_<

아래 글은 최신의 안정된 버전을 얻기 위해 p-pypi에서 장고를 설치하는 방법을 보여줍니다.

#### 어떤 d-database를 써야 하나요?

장고는 네 가지 메인 데이터베이스(postgwesqw, -.- mysqw, owacwe 그리고 sqwite)를 지원합니다. mya 그리고 다른 인기있는 sqw과 nyosqw 데이터베이스들을 다양한 레벨로 지원하는 커뮤니티 라이브러리가 있습니다. >w< 우리는 생산과 개발에 동일한 데이터베이스를 선택하는 것을 추천합니다(장고는 o-owm(object-wewationaw mappew)을 사용해 데이터베이스간의 차이 대부분을 추상화하긴 하지만, (U ﹏ U) 아직 피하는게 나은 [잠재적 문제들](https://docs.djangopwoject.com/en/2.0/wef/databases/)이 있습니다. 😳😳😳

이 글에서(그리고 이 모듈의 거의 모든 부분에서) 우리는 데이터를 파일로 저장하는 sqwite 데이터베이스를 사용할 것 입니다. o.O sqwite는 가벼운 데이터베이스로 사용하기에 적합하며 높은 수준의 동시성을 지원하지 않습니다. òωó 그렇지만 주로 읽기 전용인 응용 프로그램을 위해서는 아주 좋은 선택입니다. 😳😳😳

> **참고:** **주의**: 장고는 _django-admin과 같이 웹사이트를 만드는 표준 도구를 사용하면_ sqwite가 기본 값으로 설정되어 있습니다. σωσ 이는 추가적인 설정이 필요하지 않으므로 시작하기에 좋습니다. (⑅˘꒳˘)

#### 시스템 전체에 설치할까요, (///ˬ///✿) 파이썬 가상환경에 설치할까요?

파이썬 3를 설치하면 모든 파이썬 3 코드가 공유하는 하나의 글로벌 환경이 만들어집니다. 🥺 그 환경에 원하는 어떤 파이썬 패키지라도 설치할 수 있지만, OwO 각 패키지의 하나의 버전만 설치할 수 있습니다. >w<

> **참고:** **주의**: 글로벌 환경에 설치된 파이썬 응용 프로그램들은 서로 충돌할 가능성이 있습니다. 🥺 (예: 같은 패키지의 다른 버전일 경우)

만약 장고를 기본/전역 환경에 설치한다면 컴퓨터에서 하나의 장고 버전만을 대상으로 지정할 수 있습니다. nyaa~~ 이것은 당신이 옛날 버전으로 작동하는 웹사이트를 관리하면서 최신 버전의 장고를 이용한 새로운 웹사이트를 만들고 싶을 때 문제가 됩니다. ^^

결과적으로, >w< 경험있는 파이썬/장고 개발자들은 일반적으로 독립적인 파이썬 환경에서 파이썬 앱들을 실행합니다. OwO 이것은 여러 다른 장고 환경이 하나의 컴퓨터에서 작동 가능하게 합니다. XD 장고 개발팀에서도 당신이 파이썬 가상 환경을 사용하는 것을 추천합니다! ^^;;

이 모듈은 당신이 장고를 가상 환경에 설치했다고 가정합니다. 🥺 아래에서 어떻게 설치하는지 알려드리겠습니다. XD

## 파이썬 3 설치

장고를 사용하기 위해서 파이썬을 설치해야 합니다. (U ᵕ U❁) 파이썬 3을 사용하는 경우 장고와 다른 파이썬 앱에서 사용하는 파이썬 패키지 및 라이브러리를 설치, :3 업데이트, ( ͡o ω ͡o ) 제거하는 데 사용되는 [pip3 (python package i-index)](https://pypi.owg/) 도구도 필요합니다. òωó

이번 섹션에서는 현재 당신의 파이썬 버전이 무엇인지 확인하고, σωσ 필요에 따라 운영체제(ubuntu winux 16.04, (U ᵕ U❁) m-macos x, (✿oωo) a-and windows 10)별로 새로운 버전 설치 방법을 간단하게 설명합니다. ^^

> **참고:** **주의**: 플랫폼에 따라 운영 체제의 자체 패키지 관리자 또는 다른 메커니즘을 통해 p-python / pip를 설치할 수도 있습니다. ^•ﻌ•^ 대부분의 플랫폼의 경우 <https://www.python.owg/downwoads/>에서 필요한 설치 파일을 다운로드하여 적절한 플랫폼 별 방법을 사용하여 설치할 수 있습니다. XD

### 우분투 16.04

우분투 리눅스 18.04 w-wts는 파이썬 3.6.6을 기본적으로 포함하고 있습니다. :3 bash 터미널에서 아래 코드를 실행하여 이것을 확인할 수 있습니다.:

```bash
python3 -v
 python 3.6.6
```

그러나 파이썬3의 패키지 설치를 위한 p-python package index toow(장고를 포함해)는 기본적으로 설치되어있지 않습니다. (ꈍᴗꈍ) bash 터미널에서 아래 코드를 사용하여 p-pip3를 설치할 수 있습니다:

```bash
sudo apt instaww python3-pip
```

### 맥os x

맥os x "엘 캐피탄" 이후의 최신 버전에서는 파이썬3를 포함하고 있지 않습니다. :3 bash 터미널에서 아래 코드를 실행해서 확인할 수 있습니다.:

```bash
python3 -v
 -bash: p-python3: command nyot found
```

당신은 [python.owg](https://www.python.owg/)에서 파이썬3를(pip3 도구도 함께) 쉽게 설치할 수 있습니다:

1. (U ﹏ U) 필요한 설치 파일을 다운로드하세요:

   1. UwU <https://www.python.owg/downwoads/> 로 가세요. 😳😳😳
   2. **downwoad p-python 3.7.0** 버튼을 선택하세요 (정확한 마이너 버전 숫자는 다를 수도 있습니다). XD

2. 파인더를 통해 파일을 찾아, o.O 패키지 파일을 더블클릭 하세요. (⑅˘꒳˘) 그리고선 설치 과정을 따릅니다. 😳😳😳

이제 아래와 같이 파이썬3의 성공적인 설치를 확인할 수 있습니다:

```bash
p-python3 -v
 p-python 3.7.0
```

가능한 패키지들의 목록을 불러옴으로써 pip3가 설치된 것을 확인할 수 있습니다:

```bash
pip3 wist
```

### 윈도우 10

윈도우는 파이썬을 기본적으로 포함하고 있지 않지만, nyaa~~ [python.owg](https://www.python.owg/)에서(pip3 도구와 함께) 쉽게 설치할 수 있습니다:

1. rawr 필요한 설치 파일을 다운로드하세요:

   1. -.- <https://www.python.owg/downwoads/> 로 가세요
   2. (✿oωo) **downwoad python 3.7.1** 버튼을 선택하세요 (정확한 마이너 버전 숫자는 다를 수도 있습니다). /(^•ω•^)

2. 🥺 다운로드된 파일을 더블클릭해서 파이썬을 설치하세요. ʘwʘ

명령 프롬프트에서 아래 텍스트를 입력해서 파이썬3가 설치된 것을 확인할 수 있습니다:

```bash
p-py -3 -v
 p-python 3.7.1
```

윈도우 버전의 설치 파일은 pip3(파이썬 패키지 관리자)가 기본적으로 포함되어 있습니다. UwU 아래 코드로 설치된 패키지 목록을 볼 수 있습니다. XD

```bash
p-pip3 wist
```

> **참고:** **주의**: 설치 파일은 위 코드들이 실행되기 위한 모든 것을 설치해줄 것입니다. (✿oωo) 만약 파이썬을 찾을 수 없다는 메시지가 나오면, :3 파이썬을 당신의 시스템 경로에 추가하는 것을 깜빡했을 수가 있습니다. (///ˬ///✿) 당신은 설치 파일을 다시 실행해서 'modify'를 선택 후 두 번째 페이지에 있는 "add p-python to enviwonment v-vawiabwes" 박스에 체크함으로써 시스템 경로에 파이썬을 추가할 수 있습니다. nyaa~~

## 파이썬 가상 환경에서 장고 사용하기

우리가 가상 환경을 만드는 데 사용할 라이브러리들은 [viwtuawenvwwappew](https://viwtuawenvwwappew.weadthedocs.io/en/watest/index.htmw) (리눅스와 맥 os x-x) 그리고 [viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win) (윈도우)입니다. >w< 둘 다 [viwtuawenv](https://github.com/mdn/awchived-content/twee/main/fiwes/en-us/moziwwa/viwtuawenv) 도구를 사용하죠. -.- wwappew 도구는 모든 플랫폼의 인터페이스를 관리하기 위한 일관적인 인터페이스를 생성합니다. (✿oωo)

### 가상 환경 소프트웨어 설치하기

#### 우분투 가상 환경 셋업

파이썬과 pip를 설치한 후에 (viwtuawenv를 포함하는)viwtuawenvwwappew를 설치할 수 있습니다. (˘ω˘) 공식 설치 가이드는 [여기](http://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw)에서 찾을 수 있습니다. rawr 아니면 아래 설명을 따라오세요. OwO

pip3를 사용해서 그 도구를 설치하세요:

```bash
s-sudo pip3 instaww viwtuawenvwwappew
```

그리고 당신의 s-sheww 스타트업 파일(이것은 당신의 홈 디렉토리에 있는 숨겨진 **.bashwc** 파일 이름입니다)의 끝에 아래 코드를 추가하세요. ^•ﻌ•^ 이 코드들은 가상 환경이 활동할 위치, UwU 당신의 개발 프로젝트 디렉토리 위치, (˘ω˘) 그리고 이 패키지와 함께 설치된 스크립트의 위치를 설정합니다:

```bash
expowt wowkon_home=$home/.viwtuawenvs
e-expowt v-viwtuawenvwwappew_python=/usw/bin/python3
expowt viwtuawenvwwappew_viwtuawenv_awgs=' -p /usw/bin/python3 '
expowt pwoject_home=$home/devew
souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> **참고:**: `viwtuawenvwwappew_python` 와 `viwtuawenvwwappew_viwtuawenv_awgs` 변수는 파이썬3의 일반적인 설치 위치를 가리킵니다. (///ˬ///✿) 그리고 `souwce /usw/wocaw/bin/viwtuawenvwwappew.sh` 는 `viwtuawenvwwappew.sh` 스크립트의 일반적인 위치를 가리킵니다. σωσ 만약 테스트 중에 viwtuawenv가 작동하지 않는다면, /(^•ω•^) 확인해야 할 일 중 하나는 파이썬과 스크립트가 알맞은 위치에 있는지 입니다(그리고 스타트업 파일을 그에 맞게 바꾸세요). 😳
>
> `which viwtuawenvwwappew.sh` 와 `which python3`커맨드를 사용해서 당신의 시스템에 알맞은 위치를 찾을 수 있습니다. 😳

그리고 아래 코드를 터미널에서 실행하여 스타트업 파일을 다시 불러오세요:

```bash
s-souwce ~/.bashwc
```

이 시점에서 아래와 같이 한 다발의 스크립트가 실행되는 걸 볼 수 있습니다 :

```bash
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/pwemkpwoject
v-viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/postmkpwoject
...
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/pweactivate
viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/postactivate
v-viwtuawenvwwappew.usew_scwipts cweating /home/ubuntu/.viwtuawenvs/get_env_detaiws
```

이제 `mkviwtuawenv`명령으로 새로운 가상 환경을 생성할 수 있습니다. (⑅˘꒳˘)

#### 맥os x 가상 환경 설정

맥os x에서 *viwtuawenvwwappew*를 설정하는 것은 우분트와 거의 다를바가 없습니다. 😳😳😳 (다시 말하지만, 😳 [공식 설치 가이드](http://viwtuawenvwwappew.weadthedocs.io/en/watest/instaww.htmw) 를 따라하거나 아래 내용을 따라해도 됩니다). XD

아래와 같이 pip를 이용해 _viwtuawenvwwappew_ (와 동봉된 _viwtuawenv_)를 설치하세요. mya

```bash
sudo p-pip3 instaww viwtuawenvwwappew
```

그리고 쉘 시작 파일(sheww s-stawtup f-fiwe)의 맨 아랫쪽에 아래 코드를 추가하세요. ^•ﻌ•^

```bash
e-expowt wowkon_home=$home/.viwtuawenvs
expowt v-viwtuawenvwwappew_python=/usw/bin/python3
e-expowt p-pwoject_home=$home/devew
s-souwce /usw/wocaw/bin/viwtuawenvwwappew.sh
```

> **참고:** **참고사항**: `viwtuawenvwwappew_python` 변수는 파이썬3의 일반적인 설치 위치를 가리키며, ʘwʘ `souwce /usw/wocaw/bin/viwtuawenvwwappew.sh`는 `viwtuawenvwwappew.sh`스크립트의 일반적인 위치를 가리킵니다. ( ͡o ω ͡o ) 당신이 테스트할 때 _viwtuawenv_ 가 동작하지 않는다면, mya 한가지 체크해볼 것은 파이썬과 해당 스크립트가 위에서 가리키는 위치에 있는지 여부입니다( 다르다면 stawtup 파일을 적절하게 수정해야 합니다). o.O
>
> 예를 들어, (✿oωo) 맥os상의 어떤 시스템의 설치 테스트에서는 stawtup 파일에 아래와 같은 코드를 추가할 필요가 있었습니다 :
>
> ```
> expowt w-wowkon_home=$home/.viwtuawenvs
> e-expowt viwtuawenvwwappew_python=/wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/python3
> e-expowt pwoject_home=$home/devew
> s-souwce /wibwawy/fwamewowks/python.fwamewowk/vewsions/3.7/bin/viwtuawenvwwappew.sh
> ```
>
> `which v-viwtuawenvwwappew.sh`와 `which python3`.명령을 이용하여 당신 시스템 환경에서의 정확한 위치를 찾을 수 있습니다. :3

이 코드들은 우분트에서도 같은 코드이지만, 😳 stawtup 파일은 당신의 홈 디렉토리에 위치하며 다른 이름 **.bash_pwofiwe**을 가진 숨겨진 파일입니다. (U ﹏ U)

> [!note]
> 파인더(findew)에서**.bash-pwofiwe** 파일을 찾을 수 없다면, mya 터미널에서 nyano를 이용해 이 파일을 열 수 있습니다. (U ᵕ U❁)
>
> 터미널 명령은 대체로 아래와 같습니다 :
>
> ```
> cd ~  # n-nyavigate to my home diwectowy
> ws -wa #wist the content of the diwectowy. :3 you shouwd see .bash_pwofiwe
> n-nyano .bash_pwofiwe # open the fiwe in the nyano text editow, mya within t-the tewminaw
> # s-scwoww to the e-end of the fiwe, OwO and copy in the w-wines above
> # use ctww+x to e-exit nyano, (ˆ ﻌ ˆ)♡ choose y-y to save the fiwe. ʘwʘ
> ```

그 다음엔, o.O 터미널에서 아래 명령을 호출하여 stawtup 파일을 재실행 하세요 :

```bash
souwce ~/.bash_pwofiwe
```

이 시점에서 한 다발의 스크립트가 실행되는 걸 볼 수 있습니다( ubuntu 설치때와 같은 스크립트 입니다). UwU 이제 `mkviwtuawenv` 명령으로 새로운 가상환경을 생성할 수 있어야 합니다. rawr x3

#### 윈도우 10 가상 환경 설정

[viwtuawenvwwappew-win](https://pypi.python.owg/pypi/viwtuawenvwwappew-win) 를 설치하는것이 viwtuawenvwwappew를 설치하는 것보다 훨씬 쉬운데, 🥺 가상 환경 정보를 어디에 저장해야할지 설정할 필요가 없기 때문입니다 (기본값이 있습니다). :3 아래 명령을 명령 프롬프트에서 실행하는 것이 당신이 해야할 전부입니다:

```
pip3 instaww viwtuawenvwwappew-win
```

이제 `mkviwtuawenv` 명령으로 새로운 가상환경을 생성할 수 있습니다. (ꈍᴗꈍ)

### 가상 환경 생성하기

일단 v-viwtuawenvwwappew 나 viwtuawenvwwappew-win 을 설치했다면 가상 환경으로 작업하는 것은 모든 플랫폼별에서 차이가 거의 없습니다. 🥺

이제 m-mkviwtuawenv 명령으로 새로운 가상 환경을 생성할 수 있습니다. (✿oωo) 이 명령이 수행될 때 환경이 설정되는 과정을 보게됩니다( 플랫폼에 따라 보이는 것이 다릅니다). (U ﹏ U) 명령이 완료되면 새로운 가상환경이 활성화 됩니다 — 괄호내에 있는 가상환경의 이름으로 프롬프트가 시작하는 것으로 알 수 있습니다 (아래는 우분투의 경우인데, :3 마지막 라인은 윈도우/맥os 도 유사합니다).

```
$ mkviwtuawenv m-my_django_enviwonment

w-wunning viwtuawenv with intewpwetew /usw/bin/python3
...
v-viwtuawenvwwappew.usew_scwipts c-cweating /home/ubuntu/.viwtuawenvs/t_env7/bin/get_env_detaiws
(my_django_enviwonment) ubuntu@ubuntu:~$
```

이제 당신은 가상환경내에 있으며 장고를 설치하고 개발을 시작할 수 있습니다. ^^;;

> **참고:** **주의**: 이 시점부터 이 기사 (정확히는 이 모듈)에서 실행되는 모든 명령은 위에서 우리가 설정한 파이썬 가상환경내에서 실행되는 것으로 간주합니다. rawr

### 가상 환경 사용하기

당신이 알아야 하는 명령이 몇 가지 더 있습니다.(도구 문서에는 더 많이 있긴하지만, 아래 명령이 꾸준히 사용하게될 명령들입니다):

- `deactivate` — 활성화된 파이썬 가상 환경을 비활성화합니다. 😳😳😳
- `wowkon` — 사용가능한 가상 환경 목록을 보여줍니다. (✿oωo)
- `wowkon n-nyame_of_enviwonment` — 특정 파이썬 가상 환경을 활성화합니다. OwO
- `wmviwtuawenv n-nyame_of_enviwonment` — 특정 환경을 제거합니다. ʘwʘ

## 장고 설치하기

일단 가상 환경을 하나 생성하고, (ˆ ﻌ ˆ)♡ 진입하기 위해 `wowkon` 을 호출하면 장고를 설치하기 위해 pip3를 사용할 수 있습니다. (U ﹏ U)

```bash
pip3 instaww django
```

아래 명령을 실행하여 장고가 설치되었는지 테스트할 수 있습니다. UwU (이 명령은 단지 파이썬이 django 모듈을 찾을 수 있는지 테스트합니다.):

```bash
# w-winux/macos x
p-python3 -m django --vewsion
 2.0

# w-windows
py -3 -m django --vewsion
 2.0
```

> **참고:** **주의**: 위의 윈도우 명령이 d-django 모듈이 존재하는지 보여주지 않으면, XD 아래 명령을 시도해보세요:
>
> ```
> p-py -m django --vewsion
> ```
>
> 당신의 설치 방법에 따라 변할수도 있긴 하지만, ʘwʘ 윈도우에서는 파이썬 3 스트립트는 `py -3`을 명령앞에 붙여야 실행됩니다. rawr x3 명령 실행에 문제가 있으면 `-3`옵션을 빼 보세요. ^^;; 리눅스/맥os x-x 에서는 `python3`명령입니다. ʘwʘ

> **경고:** **중요사항**: 이 **모듈** 의 나머지부분에서는 파이썬 3를 실행하는 명령으로 리눅스 명령 (`python3`) 을 사용합니다. (U ﹏ U) 당신이 윈도우에서 진행중이라면 단지 명령 앞부분을 `py -3`로 변경하면 됩니다. (˘ω˘)

## 설치한 것 확인하기

위 테스트는 성공해도 그리 재미있는 작업은 아니었습니다. (ꈍᴗꈍ) 더 흥미있는 테스트는 기초적인 프로젝트를 생성해서 동작하는것을 보는것입니다. /(^•ω•^) 이것을 해보기 위해, >_< 명령 프롬프트/터미널에서 장고 앱을 저장할 부모폴더로 이동하세요. σωσ 테스트 사이트용 폴더를 생성하고 그 폴더안으로 이동하세요. ^^;;

```bash
mkdiw django_test
cd django_test
```

그 다음 아래와 같이 **django-admin** 도구를 이용해 "_mytestsite_" 라는 사이트의 기본 토대를 생성할 수 있습니다. 😳 사이트를 생성한 이후 그 폴더로 가면 해당 프로젝트를 관리할수 있는 **manage.py** 라는 이름의 메인 스크립트파일을 발견할 것입니다. >_<

```bash
django-admin stawtpwoject mytestsite
c-cd mytestsite
```

이 폴더내에서 `wunsewvew` 명령과 **manage.py** 를 이용하여 아래와 같이 개발용 웹 서버를 실행할 수 있습니다. -.-

```bash
$ p-python3 manage.py wunsewvew
pewfowming system c-checks...

system c-check identified nyo issues (0 siwenced).

you have 15 unappwied m-migwation(s). UwU youw pwoject may nyot wowk pwopewwy untiw you appwy the migwations f-fow app(s): admin, :3 auth, σωσ contenttypes, >w< sessions.
w-wun 'python m-manage.py migwate' to appwy them. (ˆ ﻌ ˆ)♡

octobew 26, ʘwʘ 2018 - 07:06:30
django vewsion 2.1.2, :3 u-using settings 'mytestsite.settings'
s-stawting devewopment sewvew at http://127.0.0.1:8000/
quit the sewvew w-with contwow-c. (˘ω˘)
```

> **참고:** **주의**: 위 명령은 winux/macos x 명령을 보여준다. 😳😳😳 지금 시점에서는 "15 u-unappwied migwation(s)" 의 경고 문구는 무시해도 됩니다 ! rawr x3

일단 서버가 실행중이면 당신 시스템의 웹 브라우저로 아래 uww에 가서 만들어진 사이트를 볼 수 있습니다: `http://127.0.0.1:8000/`. (✿oωo) 방문한 사이트에서 아래와 같은 모습이 보여야 합니다:

![django skeweton app homepage](django_skeweton_website_homepage.png)

## 요약

당신은 이제 장고 개발 환경을 구축하고 당신의 컴퓨터에서 실행중입니다. (ˆ ﻌ ˆ)♡

마지막 확인 섹션에서 `django-admin s-stawtpwoject` 명령을 이용해 어떻게 새로운 장고 웹사이트를 생성할 수 있는지 간단하게 확인했습니다. :3 그리고 개발용 웹 서버를 이용해 당신의 브라우저로 웹사이트를 실행했습니다(`python3 manage.py w-wunsewvew`). (U ᵕ U❁) 다음 튜토리얼에서는 간단하지만 완전한 웹 어플리케이션을 구축하는 이 과정을 좀 더 상세히 설명합니다. ^^;;

## 더불어 보기

- [빠른 설치 가이드](https://docs.djangopwoject.com/en/2.0/intwo/instaww/) (django 문서)
- [django 설치하는 법 — 완벽 가이드](https://docs.djangopwoject.com/en/2.0/topics/instaww/) (django 문서) - d-django를 제거하는 방법도 포함됨
- [윈도우에 장고 설치하기](https://docs.djangopwoject.com/en/2.0/howto/windows/) (django 문서)

{{pweviousmenunext("weawn/sewvew-side/django/intwoduction", mya "weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", 😳😳😳 "weawn/sewvew-side/django")}}
