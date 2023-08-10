---
title: 웹사이트 출판하기
slug: Learn/Getting_started_with_the_web/Publishing_your_website
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}

일단 여러분의 웹사이트를 만들기 위한 코드 작성과 파일 구성을 끝내셨다면, 이 모든 것을 온라인에 올려 사람들이 찾을 수 있게 할 필요가 있습니다. 이 글은 어떻게 최소한의 노력으로 간단한 예시 코드를 온라인에서 얻을 수 있는지 보여줍니다.

## 옵션들은 뭐가 있나요?

웹사이트를 출판하는 것은 간단한 것이 아닙니다, 주된 이유는 이것에 아주 많은 다른 방법이 있다는 것입니다. 이 글에서는 모든 가능한 방법을 문서화 하는 것이 목적이 아닙니다. 대신에, 초심자의 관점에서 세가지 큰 전략에 대한 장단점에 대해 이야기 할 것입니다, 그리고나서 현재로써 적합할 하나의 방법을 보여드릴 것입니다.

### 호스팅과 도메인 이름 얻기

만약 여러분이 출판된 웹사이트에 대한 모든 컨트롤를 원한다면, 이것들을 구매해야 할 것입니다:

- 호스팅 — 호스팅 회사의 [웹 서버](/en-US/Learn/What_is_a_web_server) 에서 빌린 파일 공간. 이 공간에 여러분의 웹사이트 파일을 놓을 것입니다, 그리고 웹 서버는 컨텐트를 요청하는 웹 유저에게 그 컨텐트를 제공합니다.
- [도메인 이름](/en-US/Learn/Understanding_domain_names) — `http://www.mozilla.org`, `또는 http://www.bbc.co.uk` 같이, 사람들이 여러분의 웹사이트를 찾을 수 있는 특정 주소. **도메인 등록 기관**으로부터 몇 년간 사용할 수 있는 여러분의 도메인을 빌리세요.

많은 전문적인 웹사이트들은 이 방법으로 온라인에 진출합니다.

게다가, 여러분은 서버로 웹사이트 파일들을 실제로 전송하기 위한 파일 전송 프로토콜 (FTP) 프로그램 (자세한 내용은 [얼마나 드나요: 소프트웨어](/en-US/Learn/How_much_does_it_cost#Software) 에서 확인하세요) 이 필요할 것입니다. FTP 프로그램은 아주 다양합니다, 하지만 일반적으로 호스팅 회사에 의해 제공된 정보 (예로 사용자 이름, 비밀번호, 호스트 이름) 를 사용해 여러분의 웹서버에 로그인을 해야 합니다. 그러면 프로그램은 여러분의 로컬 파일들과 웹 서버의 파일을 두 창에서 보여주므로, 그것들을 외부로 전송하거나 다시 돌려 놓을 수 있습니다:

![](ftp.jpg)

#### 호스팅과 도메인을 찾는 팁

- 저희는 여기서 상업적인 호스팅 회사를 홍보하는 것이 아닙니다. 호스팅 회사와 도메인 이름 등록 기관을 찾기 위해서는, 일단 "웹 호스팅" 과 도메인 이름 등록을 팔고있는 회사를 찾기 위한 "도메인 이름" 을 위한 검색을 하세요. 이러한 모든 회사들은 여러분이 원하는 도메인이름을 위한 검색에 있어 특징을 갖고 있을 것입니다.
- 여러분의 집이나 사무실 인터넷 서비스 공급자는 작은 웹사이트를 위한 어떤 제한된 호스팅을 공급할지도 모릅니다. 가능한 특징들은 제한적일 것이지만, 여러분의 첫 번째 시도를 위해서는 완벽할 것 같습니다 — 그들에게 연락해 요청하세요!
- [Neocities](https://neocities.org/), [Blogspot](https://www.blogger.com), 그리고 [Wordpress](https://wordpress.com/) 같은 몇 개의 무료로 이용가능한 서비스가 있습니다. 다시 말해, 여러분이 지불한 만큼 얻을 수 있지만, 이것들은 여러분의 첫 시도를 위해선 완벽합니다. 무료 서비스들은 대부분 업로드를 위한 FTP 소프트웨어도 요구하지 않습니다 — 그들의 웹 인터페이스에 그냥 끌어다 놓으면 됩니다.
- 어떤 회사들은 하나의 패키지에 호스팅과 도메인 모두를 제공하기도 합니다.

### GitHub 또는 Dropbox 같은 온라인 도구 사용하기

어떤 도구들은 여러분이 여러분의 웹사이트를 온라인에 출판할 수 있게 해줍니다:

- [GitHub](https://github.com/) 은 "소셜 코딩" 사이트입니다. 여러분이 [Git](http://git-scm.com/) **버전 관리 시스템** 안에 저장을 위한 코드 저장소를 업로드하게 해줍니다. 코드 프로젝트에서 협업할 수 있고, 기본적으로 시스템은 오픈 소스가 됩니다, 이 것은 세상의 누구든 여러분의 GitHub 코드를 찾아볼 수 있다는 말입니다, 사용하세요, 이것으로부터 배우세요, 그리고 개선하세요. 여러분으 다른 사람들의 코드에도 마찬가지로 작업 할 수 있습니다! 이건 참여하기에 아주 중요하고 유용한 커뮤니티입니다, 그리고 Git/GitHub 은 아주 유명한 [버전 관리 시스템](http://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) 입니다 — 대부분의 기술 회사들은 현재 이것을 그들의 작업흐름에서 사용하고 있습니다. GitHub 은 웹에서 존재하는 웹사이트 코드를 전시할 수 있도록 해주는 [GitHub pages](https://pages.github.com/) 라는 아주 유용한 특징을 갖습니다.
- [Dropbox](https://www.dropbox.com/) 는 웹에 여러분의 파일들을 저장하고 어떤 컴퓨터에서든 사용가능하게 해주는 파일 저장 시스템입니다. 인터넷 접속이 되는 누구든 여러분이 공개적으로 접근가능하게 해둔 Dropbox 폴더에 접근할 수 있습니다. 만약 그 폴더가 웹사이트 파일을 포함한다면, 자동적으로 웹사이트로써 제공될 것입니다. 더 많은 정보는 [Dropbox 로 웹사이트 관리하기](http://www.dropboxwiki.com/tips-and-tricks/host-websites-with-dropbox) 를 확인하세요.

대부분의 호스팅과 다르게, 많은 도구들은 일반적으로 무료이지만, 여러분은 제한된 기능들만 사용할 수 있습니다.

### Thimble 같은 웹-기반 IDE 사용하기

HTML, CSS 그리고 JavaScript 를 입력할 수 있게 하고 웹사이트로 만들어 질 때 코드의 결과를 보여주는 웹사이트 개발 환경을 대행하는 웹 앱은 많습니다 — 모든것이 한 브라우저 탭 안에 있습니다! 일반적으로 이러한 도구들을 이야기하기는 매우 쉽고, 배우기에 최고이고, 무료이고 (기본적 기능에대해), 그들은 여러분의 특정 웹 주소에 있는 만들어진 페이지를 관리합니다. 하지만, 그 기본적인 기능들은 매우 한정적이고, 그 앱들은 보통 자원들 (이미지 같은) 을 위한 관리 공간을 제공하지 않습니다.

여기 몇 개의 예시들을 실행해보시고, 어떤것이 제일 좋은지 확인해보세요:

- [JSFiddle](https://jsfiddle.net/)
- [Thimble](https://thimble.webmaker.org/)
- [JSBin](http://jsbin.com/)

![](jsbin-screen.png)

## GitHub 를 통한 출판

이제 어떻게 GitHub 페이지를 통해 여러분의 사이트를 출판할 수 있는지 알아보도록 합시다. 이게 여러분의 사이트를 출판하는데 유일한 방법이거나 최고의 방법이라고 이야기 하지는 않을 것입니다, 하지만 이것은 무료이고, 꽤 간단하고, 앞으로 유용할 여러분이 알게 될 몇 가지 새로운 기술도 다룰 것입니다.

### 기본 설치

1. 먼저, 여러분의 장치에 [Git 을 설치](http://git-scm.com/downloads) 하세요. 이것은 GitHub 이 위에서 작동하게 되는 기초가 되는 버전 컨트롤 시스템 소프트웨어 입니다.
2. 다음으로, [GitHub 계정을 위해 가입하세요](https://github.com/join). 간단하고 쉽습니다.
3. 가입을 하셨다면, github.com 에 여러분의 유저 이름과 암호로 로그인하세요.
4. 그리고나서, 여러분의 파일들이 들어가게될 새로운 repo 를 생성해야 합니다. GitHub 홈페이지의 오른쪽 상단에 있는 플러스 (+) 를 클릭하고, _New Repository_ 를 선택하세요.
5. 이 페이지에서, _Repository name_ 박스 안에, _username_.github.io 를 입력하세요, _username_ 가 있는 곳이 여러분의 유저 이름입니다. 그러니까 예를 들어, 우리 친구 bobsmith 는 _bobsmith.github.io_ 를 입력할 것입니다.![](github-create-repo.png)
6. _Create repository_ 를 클릭하세요. 다음과 같은 페이지로 이동하실 겁니다:![](github-populate-repo.png)

### GitHub 에 파일 올리기

이것은 GitHub 에 있는 우리의 repository 를 놓기 위해 사용해볼 커맨드 라인입니다. 커맨드 라인은 파일을 생성하거나 프로그램을 실행하는 것 같은 일을 하기 위해 유저 인터페이스 안에서 클릭을 하는 것 대신 명령어를 입력하는 창입니다. 이렇게 생긴 것입니다:

![](command-line.png)

> **참고:** 만약 커맨드라인이 불편하시다면, 같은 일을 하기 위해서 [Git graphical user interface](http://git-scm.com/downloads/guis) 를 사용하는것도 고려해 볼 수 있습니다.

모든 운영 체제는 커맨드 라인 도구를 갖습니다:

- **윈도우즈**: **Command Prompt** 는 윈도우 키를 누르고 명령 프롬프트 를 입력하고 나타난 리스트에서 이것을 선택하는 것으로 접근할 수 있습니다. 윈도우즈는 리눅스와 맥 OS 와는 다른 그들만의 명령 규칙이 있으므로, 여러분의 장치에 따라 서로 다르다는것을 기억하세요.
- **맥 OS**: _Applications > Utilities 안에 _**Terminal**\_ 이 있습니다.
- **리눅스**: 보통 _Ctrl + Alt + T_ 로 터미널을 꺼낼 수 있습니다. 만약 작동하지 않는다면 app 바 또는 메뉴에서 **Terminal** 을 찾아보세요.

처음에는 좀 두려우실 수 있지만, 걱정하지마세요 — 기본적인 것들은 금방 익히실 수 있을 것입니다. 무언가를 하기 위해선 명령어를 입력하고 엔터를 누르는 것으로 컴퓨터에게 알려줘야합니다.

1. 커맨드 라인을 여러분의 `test-site` 폴더로 향하게 합니다 (또는 여러분의 웹사이트가 포함된 어디든지). 그러기 위해선, `cd` 명령을 사용합니다 (말하자면 "**c**hange **d**irectory"). 여기 만약 `test-site` 폴더 안에 여러분의 웹사이트를 놓으셨다면 여러분이 입력해야 하는 것이 있습니다:

   ```bash
   cd Desktop/test-site
   ```

2. 커맨드 라인이 여러분의 웹사이트 폴더 안을 가리킬 때, 그 폴더를 git repository 가 되도록 `git` 도구에게 알려주는 다음의 명령을 입력하세요:

   ```bash
   git init
   ```

3. 다음으로, GitHub 사이트로 돌아가세요. 현재 페이지에서, you are interested in the section _…or push an existing repository from the command line_. 이 구역에 나열된 두 코드를 보게 되실 겁니다. 첫 번째 줄의 코드 전체를 복사하고, 커맨드 라인에 붙여넣은 다음, 엔터를 누르세요. 그 명령은 이렇게 보일 것입니다:

   ```bash
   git remote add origin https://github.com/bobsmith/bobsmith.github.io.git
   ```

4. 다음으로, 다음 두 명령어를 입력하고, 각 명령마다 엔터를 누릅니다. 이것은 GitHub 에 코드를 올릴 준비를 하는 것이고, Git 에게 그 파일들을 관리하도록 요청합니다.

   ```bash
   git add --all
   git commit -m "adding my files to my repository"
   ```

5. 마지막으로, GitHub 웹 페이지로 가서 3단계에서 봤던 두 개의 명령어중 두 번째 줄을 터미널에 입력하는 것으로 코드를 푸시합니다:

   ```bash
   git push -u origin master
   ```

6. 이제 새 브라우저 탭 (_username.github.io_) 에서 여러분의 GitHub 페이지의 웹 주소로 갈 때, 여러분의 사이트를 온라인에서 보실 수 있습니다! 친구들에게 메일을 보내서 여러분의 실력을 뽐내보세요.

> **참고:** 만약 막히셨다면, [GitHub Pages 홈페이지](https://pages.github.com/) 또한 아주 도움이 될 것입니다.

### 더 많은 GitHub 이해

만약 여러분이 테스트 사이트에 더 많은 변화를 주고 GitHub에 그것들을 업로드하길 원하신다면, 이전에 하신것 처럼 간단하게 파일에 변화를 주면 됩니다. 그리고나서, GitHub에 변화를 푸시하기 위해 다음 명령어를 입력 (각 명령 다음에 엔터누르기) 해야 합니다:

```
git add --all
git commit -m 'another commit'
git push
```

_another commit_ 대신에 여러분이 막 변경했던 것을 설명할 수 있는 더 적합한 메시지로 바꾸세요.

우리는 Git 의 겉을 살짝 건드려 보았습니다. 더 많이 배우시려면, [GitHub Help 사](https://help.github.com/index.html)이트 에서 시작하세요.

## 마무리

이 지점에서, 특정 웹 주소에서 여러분의 예시 웹사이트를 사용하실 수 있을 것입니다. 수고하셨습니다!

![](hosted-final-site.png)

## 더 읽을거리

- [웹 서버는 무엇일까요](/en-US/Learn/What_is_a_web_server)
- [도메인 이름 이해하기](/en-US/Learn/Understanding_domain_names)
- [웹에서 무언가를 하기 위한 비용은 얼마나 들까요](/en-US/Learn/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website): A nice tutorial from Codecademy that goes a bit further and shows some additional techniques.
- Scott Murray 의 [Cheap or free static web hosting](http://alignedleft.com/resources/cheap-web-hosting) 에는 이용가능한 서비스를 위한 유용한 정보가 있습니다.

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}
