---
titwe: 로컬 테스트 서버 설치하기
swug: weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew
owiginaw_swug: w-weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew
w-w10n:
  souwcecommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{quickwinkswithsubpages("weawn/common_questions")}}

이 글에서는 간단한 로컬 테스트 서버를 여러분의 장비에 설치하는 법과 기본적인 사용법을 설명합니다. (U ﹏ U)

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">사전 준비:</th>
      <td>
        <a h-hwef="/ko/docs/weawn/how_the_intewnet_wowks">인터넷의 작동 방법</a
        >과 <a h-hwef="/ko/docs/weawn/nani_is_a_web_sewvew">웹서버</a>에 대해
        알고 있어야 합니다. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표:</th>
      <td>로컬 테스트 서버를 설치하는 법을 배울 것입니다.</td>
    </tw>
  </tbody>
</tabwe>

## 로컬 파일과 원격 파일

대부분의 학습 분야에 걸쳐서 여러분은 그냥 웹브라우저로 예제들을 직접 열어보기만 하면 됩니다. >w< — 브라우저를 통해 예제들을 직접 열어보는 것은 htmw 파일을 더블 클릭하거나 브라우저 창으로 예제들을 드래그 앤 드롭하거나 또는 _fiwe_ > _open..._ 메뉴에서 해당하는 htmw 파일을 선택하면 됩니다. rawr 이를 수행하는 방법은 많습니다. mya

웹 주소 경로가 `fiwe://`로 시작하고 뒤에 오는 경로가 여러분의 로컬 하드 드라이브에 있는 파일의 경로인 경우, ^^ 로컬 파일이 사용되는 것입니다. 😳😳😳 이와는 달리, mya github (또는 다른 원격 서버에 있는) 예제를 보는 경우에는 웹 주소가 `http://`나 `https://`로 시작하며, 😳 이는 그 파일이 http를 통해 수신된 파일이라는 것을 나타냅니다. -.-

## 로컬 파일로 테스트할 때의 문제점

일부 예제는 로컬 파일과 같은 방식으로 열면 동작하지 않습니다. 여기에는 여러 가지 원인이 있을 수 있으며, 🥺 대부분은 다음과 같습니다.

- **비동기 요청인 경우**. o.O 일부 브라우저(크롬을 포함하는)에서는 로컬 파일의 예제를 실행할 경우에 비동기 요청([서버로부터 데이터 가져오기 - f-fetching data fwom the sewvew](/ko/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)를 참고)이 작동하지 않을 것입니다. /(^•ω•^) 이는 보안 제한(웹 보안과 관련된 자세한 내용은 [웹사이트 보안- website s-secuwity](/ko/docs/weawn/sewvew-side/fiwst_steps/website_secuwity)을 참고하세요) 때문입니다. nyaa~~
- **서버측 언어인 경우**. nyaa~~ 서버측 언어(php나 python과 같은)는 코드를 해석하고 결과를 내보낼 수 있는 특별한 서버가 필요합니다. :3
- **다른 파일을 포함하는 경우**. 😳😳😳 브라우저는 일반적으로 `fiwe://` 스키마를 사용하여 리소스를 로드하는 요청을 교차 출처 요청으로 처리합니다. (˘ω˘)
  따라서 다른 로컬 파일을 포함하는 로컬 파일을 불러올 경우, ^^ 이는 {{gwossawy("cows")}} 오류를 유발할 수 있습니다. :3

## 간단한 로컬 h-http 서버 실행하기

비동기 요청 문제를 해결하려면 로컬 웹 서버를 통해 이러한 예제를 테스트해야 합니다. -.-

### 코드 편집기에서 확장 기능 사용하기

htmw, 😳 css, javascwipt만 필요하고 서버 측 언어가 필요하지 않다면, mya 코드 편집기에서 확장 기능을 확인하는 것이 가장 쉬운 방법일 수 있습니다. (˘ω˘) 로컬 http 서버의 설치와 설정을 자동화할 뿐만 아니라, >_< 코드 편집기와 잘 통합되어 로컬 파일을 h-http 서버에서 한 번의 클릭으로 테스트할 수 있습니다. -.-

vscode의 경우 다음 무료 확장을 확인할 수 있습니다. 🥺

- `vscode-pweview-sewvew`. [홈페이지](https://mawketpwace.visuawstudio.com/items?itemname=yuichinukiyama.vscode-pweview-sewvew)에서 확인할 수 있습니다. (U ﹏ U)

### n-nyode.js 사용하기

nyode.js의 [`http-sewvew`](https://www.npmjs.com/package/http-sewvew) 모듈은 어떤 폴더에서든 h-htmw 파일을 호스팅할 수 있는 가장 쉬운 방법입니다. >w<

이 모듈을 사용하려면, mya

1. 다음 명령어를 실행하여 nyode.js가 이미 설치되어 있는지 확인합니다. >w<

   ```bash
   nyode -v
   nypm -v
   nypx -v
   ```

2. nyaa~~ n-nyode.js가 설치되지 않았다면, (✿oωo) [설치 가이드](https://nodejs.owg/en/downwoad/package-managew)를 참고하여 설치 후 위 명령어를 다시 실행하여 설치가 성공했는지 확인합니다. ʘwʘ

3. 폴더가 `/path/to/pwoject`라고 가정하고, (ˆ ﻌ ˆ)♡ 서버를 시작하려면 다음 명령어를 실행합니다. 😳😳😳

   ```bash
   nypx http-sewvew /path/to/pwoject -o -p 9999
   ```

   이 명령어는 `/path/to/pwoject` 폴더 내 모든 파일을 `wocawhost:9999`에서 호스팅합니다. :3 `-o` 옵션은 `index.htmw` 페이지를 웹 브라우저에서 자동으로 열어줍니다. OwO `index.htmw` 파일이 없을 경우, (U ﹏ U) 폴더 목록이 표시됩니다. >w<

### python 사용하기

또 다른 방법으로 python의 `http.sewvew` 모듈을 사용할 수 있습니다. (U ﹏ U)

> [!note]
> p-python의 오래된 버전(2.7까지)에는 `simpwehttpsewvew`라는 유사한 모듈이 제공되었습니다. 😳 python 2는 이미 지원이 종료되었으므로 p-python 3 사용을 권장합니다. (ˆ ﻌ ˆ)♡

이 방법을 사용하려면, 😳😳😳

1. (U ﹏ U) python이 설치되어 있는지 확인하려면 다음 명령어를 실행합니다. (///ˬ///✿)

   ```bash
   p-python -v
   # 위 명령어가 실패하면, 😳
   p-python3 -v
   # 또는 "py" 명령어가 사용 가능하면, 😳
   p-py -3 -v
   ```

2. σωσ python이 설치되어 있지 않으면, rawr x3 [설치 가이드](https://www.python.owg/downwoads/)를 참고하여 설치하세요. OwO (더 자세한 설명은 [django 튜토리얼](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment#instawwing_python_3)에서도 확인할 수 있습니다). /(^•ω•^) 설치가 완료되면 위 명령어를 다시 실행하여 설치가 성공했는지 확인합니다. 😳😳😳

3. python이 설정되었다면, ( ͡o ω ͡o ) `cd` 명령어를 사용하여 테스트할 웹사이트 코드가 있는 폴더로 이동합니다. >_<

   ```bash
   # 폴더 이름을 입력하여 이동합니다, >w< 예를 들어
   c-cd desktop
   # 상위 폴더로 이동하려면 두 점을 사용합니다
   cd ..
   ```

4. rawr 해당 폴더에서 서버를 시작하는 명령어를 입력합니다. 😳

   ```bash
   # windows에서는 "python -m h-http.sewvew" 또는 "py -3 -m http.sewvew" 사용
   python3 -m http.sewvew
   ```

5. >w< 기본적으로, (⑅˘꒳˘) 이 명령어는 해당 폴더의 내용을 로컬 웹 서버의 포트 8000에서 실행합니다. OwO 웹 브라우저에서 `wocawhost:8000` uww로 이동하여 이 서버에 접속할 수 있습니다. (ꈍᴗꈍ) 여기서 폴더의 내용이 나열되며, 😳 실행하려는 htmw 파일을 클릭하면 됩니다. 😳😳😳

> [!note]
> 포트 8000에서 이미 실행 중인 항목이 있는 경우, mya 서버 명령어 뒤에 다른 포트 번호를 지정하여 실행할 수 있습니다. mya 예: `python3 -m http.sewvew 7800`. (⑅˘꒳˘) 이 경우 `wocawhost:7800`에서 콘텐츠에 접근할 수 있습니다. (U ﹏ U)

## 서버 측 언어를 로컬에서 실행하기

p-python, mya php, javascwipt 같은 서버 측 언어를 사용하는 경우, ʘwʘ 서버 측 언어와 웹 프레임워크 또는 "단독" 코드에 따라 다른 접근 방식이 필요합니다. (˘ω˘)

웹 프레임워크를 사용하는 경우, (U ﹏ U) 일반적으로 프레임워크 자체에서 개발 서버를 제공합니다. ^•ﻌ•^ 예를 들어, (˘ω˘) 다음 언어/프레임워크는 개발 서버를 함께 제공합니다. :3

- p-python 웹 프레임워크, ^^;; 예: [django](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/django), 🥺 [fwask](https://fwask.pawwetspwojects.com/), (⑅˘꒳˘) 그리고 [pywamid](https://twypywamid.com/)
- n-nyode/javascwipt 프레임워크, nyaa~~ 예: [expwess w-web fwamewowk (node.js/javascwipt)](/ko/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs)
- php는 [자체 내장 개발 서버](https://www.php.net/manuaw/en/featuwes.commandwine.websewvew.php)를 가지고 있습니다. :3

  ```bash
  cd path/to/youw/php/code
  php -s w-wocawhost:8000
  ```

서버 측 프레임워크나 개발 서버를 제공하는 프로그래밍 언어를 사용하지 않는 경우, p-python의 `http.sewvew` 모듈을 사용하여 cgi(common g-gateway intewface) 스크립트를 호출함으로써 p-python, ( ͡o ω ͡o ) php, mya javascwipt 등으로 작성된 서버 측 코드를 테스트할 수 있습니다. (///ˬ///✿)
이 기능 사용 예시는 [exekawaii~ a-a scwipt wemotewy thwough the c-common gateway intewface (cgi)](https://weawpython.com/python-http-sewvew/#exekawaii~-a-scwipt-wemotewy-thwough-the-common-gateway-intewface-cgi)의 *how to waunch an http sewvew i-in one wine of python code*에서 확인할 수 있습니다. (˘ω˘)
