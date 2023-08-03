---
title: 로컬 테스트 서버 설치하기
slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
---

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

일부 예제는 로컬 파일과 같은 방식으로 열면 동작하지 않습니다. 여기에는 여러 가지 원인이 있을 수 있으며, 대부분은 다음과 같습니다:

- **비동기 요청인 경우**. 일부 브라우저(크롬을 포함하는)에서는 로컬 파일의 예제를 실행할 경우에 비동기 요청([서버로부터 데이터 가져오기 - Fetching data from the server](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)를 참고)이 작동하지 않을 것입니다. 이는 보안 제한(웹 보안과 관련된 자세한 내용은 [웹사이트 보안- Website security](/ko/docs/Learn/Server-side/First_steps/Website_security)을 참고하세요) 때문입니다.
- **서버측 언어인 경우**. 서버측 언어(PHP나 Python과 같은)는 코드를 해석하고 결과를 내보낼 수 있는 특별한 서버가 필요합니다.

## 간단한 로컬 HTTP 서버 실행하기

비동기 요청 문제를 해결하려면 로컬 웹 서버에서 예제를 실행하여 테스트해야 합니다. 이를 위한 가장 쉬운 방법은 파이썬(Python)의 `SimpleHTTPServer` 모듈을 사용하는 것입니다. (설치된 파이썬 버전에 따라 `http.server` 모듈을 사용해야 할 수도 있습니다.)

이를 위해:

1. 파이썬을 설치합니다. 리눅스나 맥OS 사용자라면 이미 시스템에 설치되어 있을 것입니다. 윈도우 사용자일 경우, 다음과 같이 파이썬 홈페이지로부터 설치 프로그램을 다운 받고 설치합니다:

   - 파이썬 홈페이지([python.org](https://www.python.org/))로 이동합니다.
   - 다운로드(download) 영역에서 Python "3.xxx" 링크를 클릭합니다.
   - 페이지의 아래쪽에 있는 *Windows x86 executable installer*를 선택하고 다운로드 받습니다.
   - 다운로드가 완료되면 실행합니다.
   - 설치 프로그램의 첫 번째 페이지에서 "Add Python 3.xxx to PATH" 체크박스를 체크해야 합니다.
   - *Install*을 클릭하고 설치가 완료되면 *Close*를 클릭합니다.

2. 명령 실행창(윈도우의 경우는 command prompt, OS/X나 리눅스인 경우에는 터미널창)을 엽니다. 파이썬이 설치되었는지 확인하기 위해 다음 명령을 입력합니다.:

   ```bash
   python -V
   ```

3. 이 명령은 버전 번호를 반환합니다. 정상적으로 작동하면, `cd` 명령을 이용해 여러분의 예제가 존재하는 디렉토리로 이동합니다.

   ```bash
   # 들어가고자 하는 디렉토리 명을 입력합니다. 예를 들어,
   cd Desktop
   # 한 단계 상위 디렉토리로 이동하려면 점 두 개를 사용합니다.
   cd ..
   ```

4. 그 경로에 있는 서버를 구동하기 위한 명령을 입력합니다:

   ```bash
   # 위에서 반환된 파이썬 버전이 3.X인 경우
   python -m http.server
   # 위에서 반환된 파이썬 버전이 2.X인 경우
   python -m SimpleHTTPServer
   ```

5. 이 명령은 기본적으로 로컬 웹 서버의 8000번 포트를 이용해 해당 경로의 컨텐츠를 실행시킵니다. 웹 브라우저에서 주소줄에 `localhost:8000`를 입력하면 이 서버로 이동할 수 있습니다. 그러면 그 디렉토리의 컨텐츠 목록을 볼 수 있는데 실행하고자 하는 HTML 파일을 클릭합니다.

> **참고:** 8000번 포트에 이미 실행 중인 무언가가 있다면 서버 실행 명령에 다음과 같이 대체 포트 번호를 명시함으로써 다른 포트로 서버를 구동할 수 있습니다.
>
> 예: `python -m http.server 7800` (Python 3.x일 경우) 또는 `python -m SimpleHTTPServer 7800` (Python 2.x일 경우). 이 경우, `localhost:7800`를 통해 서버로 이동할 수 있습니다.

## 서버측 언어를 로컬에서 실행하기

파이썬의 `SimpleHTTPServer (python 2.0) http.server (python 3.0)` 모듈은 유용하기는 하나 파이썬이나 PHP 또는 자바스크립트와 같은 언어로 작성된 코드를 실행하지 못합니다. 이런 코드를 처리하기 위해서는 뭔가가 더 필요합니다 — 정확하게 무엇이 필요한지는 실행하고자 하는 서버측 언어가 무엇인지에 따라 다릅니다. 다음에 몇 가지 사례를 소개합니다:

- 파이썬으로된 서버측 코드를 실행하기 위해서는 파이썬 웹 프레임워크(Python web framework)를 사용할 필요가 있습니다. [Django Web Framework (Python)](/ko/docs/Learn/Server-side/Django)를 읽어보면 Django framework를 이용하는 법을 알 수 있습니다. [Flask](http://flask.pocoo.org/)는 Djang를 대신할 좋은(조금 더 가벼운) 대안이될 수 있습니다. Flask를 실행하기 위해서는 Python/PIP([install Python/PIP](/ko/docs/Learn/Server-side/Django/development_environment#Installing_Python_3))를 설치하고, `pip3 install flask` 명령으로 Flask를 설치해야 합니다. 이 때부터 파이썬 Flask 예제를 실행할 수 있는데, 예를 들어, `python3 python-example.py`명령을 실행하고 브라우저에서 `localhost:5000`으로 이동하면 됩니다.
- Node.js (JavaScript)라는 서버측 코드를 실행하기 위해서는 기본 node(raw node)나 그 위에 설치되는 프레임워크를 이용해야 합니다. Express가 좋은 선택이될 수 있습니다 — [Express Web Framework (Node.js/JavaScript)](/ko/docs/Learn/Server-side/Express_Nodejs)를 살펴보시기 바랍니다.
- PHP로된 서버측 코드를 실행하려면 PHP에 내장된 개발서버([PHP's built-in development server](http://php.net/manual/en/features.commandline.webserver.php))를 실행시킵니다:

```bash
cd path/to/your/php/code
php -S localhost:8000
```
