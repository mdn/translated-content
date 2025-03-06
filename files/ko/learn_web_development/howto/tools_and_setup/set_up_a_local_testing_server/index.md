---
title: 로컬 테스트 서버 설치하기
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
original_slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

이 글에서는 간단한 로컬 테스트 서버를 여러분의 장비에 설치하는 법과 기본적인 사용법을 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 준비:</th>
      <td>
        <a href="/ko/docs/Learn/How_the_Internet_works">인터넷의 작동 방법</a
        >과 <a href="/ko/docs/Learn/What_is_a_Web_server">웹서버</a>에 대해
        알고 있어야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>로컬 테스트 서버를 설치하는 법을 배울 것입니다.</td>
    </tr>
  </tbody>
</table>

## 로컬 파일과 원격 파일

대부분의 학습 분야에 걸쳐서 여러분은 그냥 웹브라우저로 예제들을 직접 열어보기만 하면 됩니다. — 브라우저를 통해 예제들을 직접 열어보는 것은 HTML 파일을 더블 클릭하거나 브라우저 창으로 예제들을 드래그 앤 드롭하거나 또는 _File_ > _Open..._ 메뉴에서 해당하는 HTML 파일을 선택하면 됩니다. 이를 수행하는 방법은 많습니다.

웹 주소 경로가 `file://`로 시작하고 뒤에 오는 경로가 여러분의 로컬 하드 드라이브에 있는 파일의 경로인 경우, 로컬 파일이 사용되는 것입니다. 이와는 달리, GitHub (또는 다른 원격 서버에 있는) 예제를 보는 경우에는 웹 주소가 `http://`나 `https://`로 시작하며, 이는 그 파일이 HTTP를 통해 수신된 파일이라는 것을 나타냅니다.

## 로컬 파일로 테스트할 때의 문제점

일부 예제는 로컬 파일과 같은 방식으로 열면 동작하지 않습니다. 여기에는 여러 가지 원인이 있을 수 있으며, 대부분은 다음과 같습니다.

- **비동기 요청인 경우**. 일부 브라우저(크롬을 포함하는)에서는 로컬 파일의 예제를 실행할 경우에 비동기 요청([서버로부터 데이터 가져오기 - Fetching data from the server](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)를 참고)이 작동하지 않을 것입니다. 이는 보안 제한(웹 보안과 관련된 자세한 내용은 [웹사이트 보안- Website security](/ko/docs/Learn/Server-side/First_steps/Website_security)을 참고하세요) 때문입니다.
- **서버측 언어인 경우**. 서버측 언어(PHP나 Python과 같은)는 코드를 해석하고 결과를 내보낼 수 있는 특별한 서버가 필요합니다.
- **다른 파일을 포함하는 경우**. 브라우저는 일반적으로 `file://` 스키마를 사용하여 리소스를 로드하는 요청을 교차 출처 요청으로 처리합니다.
  따라서 다른 로컬 파일을 포함하는 로컬 파일을 불러올 경우, 이는 {{Glossary("CORS")}} 오류를 유발할 수 있습니다.

## 간단한 로컬 HTTP 서버 실행하기

비동기 요청 문제를 해결하려면 로컬 웹 서버를 통해 이러한 예제를 테스트해야 합니다.

### 코드 편집기에서 확장 기능 사용하기

HTML, CSS, JavaScript만 필요하고 서버 측 언어가 필요하지 않다면, 코드 편집기에서 확장 기능을 확인하는 것이 가장 쉬운 방법일 수 있습니다. 로컬 HTTP 서버의 설치와 설정을 자동화할 뿐만 아니라, 코드 편집기와 잘 통합되어 로컬 파일을 HTTP 서버에서 한 번의 클릭으로 테스트할 수 있습니다.

VSCode의 경우 다음 무료 확장을 확인할 수 있습니다.

- `vscode-preview-server`. [홈페이지](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server)에서 확인할 수 있습니다.

### Node.js 사용하기

Node.js의 [`http-server`](https://www.npmjs.com/package/http-server) 모듈은 어떤 폴더에서든 HTML 파일을 호스팅할 수 있는 가장 쉬운 방법입니다.

이 모듈을 사용하려면,

1. 다음 명령어를 실행하여 Node.js가 이미 설치되어 있는지 확인합니다.

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. Node.js가 설치되지 않았다면, [설치 가이드](https://nodejs.org/en/download/package-manager)를 참고하여 설치 후 위 명령어를 다시 실행하여 설치가 성공했는지 확인합니다.

3. 폴더가 `/path/to/project`라고 가정하고, 서버를 시작하려면 다음 명령어를 실행합니다.

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   이 명령어는 `/path/to/project` 폴더 내 모든 파일을 `localhost:9999`에서 호스팅합니다. `-o` 옵션은 `index.html` 페이지를 웹 브라우저에서 자동으로 열어줍니다. `index.html` 파일이 없을 경우, 폴더 목록이 표시됩니다.

### Python 사용하기

또 다른 방법으로 Python의 `http.server` 모듈을 사용할 수 있습니다.

> [!NOTE]
> Python의 오래된 버전(2.7까지)에는 `SimpleHTTPServer`라는 유사한 모듈이 제공되었습니다. Python 2는 이미 지원이 종료되었으므로 Python 3 사용을 권장합니다.

이 방법을 사용하려면,

1. Python이 설치되어 있는지 확인하려면 다음 명령어를 실행합니다.

   ```bash
   python -V
   # 위 명령어가 실패하면,
   python3 -V
   # 또는 "py" 명령어가 사용 가능하면,
   py -3 -V
   ```

2. Python이 설치되어 있지 않으면, [설치 가이드](https://www.python.org/downloads/)를 참고하여 설치하세요. (더 자세한 설명은 [Django 튜토리얼](/ko/docs/Learn/Server-side/Django/development_environment#installing_python_3)에서도 확인할 수 있습니다). 설치가 완료되면 위 명령어를 다시 실행하여 설치가 성공했는지 확인합니다.

3. Python이 설정되었다면, `cd` 명령어를 사용하여 테스트할 웹사이트 코드가 있는 폴더로 이동합니다.

   ```bash
   # 폴더 이름을 입력하여 이동합니다, 예를 들어
   cd Desktop
   # 상위 폴더로 이동하려면 두 점을 사용합니다
   cd ..
   ```

4. 해당 폴더에서 서버를 시작하는 명령어를 입력합니다.

   ```bash
   # Windows에서는 "python -m http.server" 또는 "py -3 -m http.server" 사용
   python3 -m http.server
   ```

5. 기본적으로, 이 명령어는 해당 폴더의 내용을 로컬 웹 서버의 포트 8000에서 실행합니다. 웹 브라우저에서 `localhost:8000` URL로 이동하여 이 서버에 접속할 수 있습니다. 여기서 폴더의 내용이 나열되며, 실행하려는 HTML 파일을 클릭하면 됩니다.

> [!NOTE]
> 포트 8000에서 이미 실행 중인 항목이 있는 경우, 서버 명령어 뒤에 다른 포트 번호를 지정하여 실행할 수 있습니다. 예: `python3 -m http.server 7800`. 이 경우 `localhost:7800`에서 콘텐츠에 접근할 수 있습니다.

## 서버 측 언어를 로컬에서 실행하기

Python, PHP, JavaScript 같은 서버 측 언어를 사용하는 경우, 서버 측 언어와 웹 프레임워크 또는 "단독" 코드에 따라 다른 접근 방식이 필요합니다.

웹 프레임워크를 사용하는 경우, 일반적으로 프레임워크 자체에서 개발 서버를 제공합니다. 예를 들어, 다음 언어/프레임워크는 개발 서버를 함께 제공합니다.

- Python 웹 프레임워크, 예: [Django](/ko/docs/Learn/Server-side/Django), [Flask](https://flask.palletsprojects.com/), 그리고 [Pyramid](https://trypyramid.com/)
- Node/JavaScript 프레임워크, 예: [Express Web Framework (Node.js/JavaScript)](/ko/docs/Learn/Server-side/Express_Nodejs)
- PHP는 [자체 내장 개발 서버](https://www.php.net/manual/en/features.commandline.webserver.php)를 가지고 있습니다.

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

서버 측 프레임워크나 개발 서버를 제공하는 프로그래밍 언어를 사용하지 않는 경우, Python의 `http.server` 모듈을 사용하여 CGI(Common Gateway Interface) 스크립트를 호출함으로써 Python, PHP, JavaScript 등으로 작성된 서버 측 코드를 테스트할 수 있습니다.
이 기능 사용 예시는 [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi)의 *How to Launch an HTTP Server in One Line of Python Code*에서 확인할 수 있습니다.
