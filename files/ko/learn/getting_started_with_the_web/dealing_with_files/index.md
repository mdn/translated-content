---
title: 파일 다루기
slug: Learn/Getting_started_with_the_web/Dealing_with_files
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

웹사이트는 문자, 코드, 스타일시트, 미디어 등 수많은 파일로 구성되어 있습니다. 웹사이트를 제작할 때, 여러분은 이러한 파일들을 여러분의 컴퓨터에 적당한 양식에 맞춰 정리해야 하고, 서로가 잘 작동하는지 확인해야 하며, 최종적으로 [서버에 업로드하기](/en-US/Learn/Getting_started_with_the_web/Publishing_your_website) 전에 모든 내용이 올바르게 나타나게 해야 합니다. 파일 다루기에서는 여러분의 웹사이트를 위한 적당한 양식을 만들기 위해 여러분이 알아야 하는 몇 가지 문제들에 대해 이야기 할 것입니다.

## 웹사이트는 컴퓨터의 어디에 두어야 할까요?

만약 여러분이 로컬컴퓨터에서 웹사이트에 대해 작업한다면, 퍼블리시된 웹사이트의 파일 구조를 반영하는 하나의 폴더 안에 관련된 모든 파일을 유지하여야 합니다. 이 폴더는 여러분이 원하는 곳이라면 어디에나 둘 수 있지만, 아마도 쉽게 찾을 수 있는 곳에 두어야 할 것입니다. 예를들면 여러분의 바탕화면이나 홈 폴더, 또는 하드 드라이브의 루트(root)가 될 것입니다.

1. 여러분의 웹사이트 프로젝트를 저장할 장소를 선택하세요. 여기에, `web-projects` (또는 비슷한 이름의 폴더) 라고 불리는 새 폴더를 **생성하세요**. 이 곳이 여러분의 웹사이트 프로젝트가 위치할 곳입니다.
2. 이 첫 번째 폴더에, 또다른 폴더를 하나 만들고 첫 번째 웹사이트를 저장하도록 합시다. 그 폴더를 `test-site` (또는 무언가 더 상상력을 발휘한 다른 이름도 좋습니다) 라고 부릅시다.

## 포장과 공백에 대한 여담

이 글을 통해 알게 되겠지만, 폴더와 파일의 이름을 지을 때 공백 없이 영문 소문자로 짓기를 바랍니다. 이것은 다음과 같은 이유 때문입니다.

1. 많은 컴퓨터들 -특히 웹 서버- 은 영문 대소문자를 구분합니다. 그래서 예를 들면, 웹사이트에 `test-site/MyImage.jpg라는`이미지를 저장해 두었는데 여러분이 다른 파일에서 `test-site/myimage.jpg`라는이미지를 호출하는 것은 작동하지 않을 것입니다.
2. 브라우저들과 웹 서버들, 그리고 프로그래밍 언어들은 공백을 일관되게 처리하지 않습니다. 예를 들면, 만약 여러분이 파일 이름에 공백을 사용한다면, 어떤 시스템은 그 파일 이름을 두개의 파일 이름으로 다룰 것입니다. 어떤 서버들은 그 파일 이름의 공백을 "%20"(URIs 안의 공백을 위한 문자 코드)으로 대체하므로 여러분의 모든 링크들을 망가뜨릴 것입니다. 또한, 밑줄문자를 사용하기 보다는 대시(하이픈)으로 단어를 구분하는 것이 훨씬 더 좋습니다.: `my-file.html` vs. `my_file.html`.

간단히 말하자면 여러분은 파일 이름을 지을 때 붙임표(hyphen)를 사용해야 합니다. 구글 검색 엔진은 하이픈를 단어 구분자로 취급합니다. 그러나 밑줄문자는 단어 구분자로 취급하지 않습니다. 이러한 이유로, 여러분이 폴더와 파일 이름을 지을 때에는 공백이 없는 영문 소문자와 대시로 구분된 단어로 작성하는 습관을 들이는 것이 제일 좋습니다. 적어도 여러분이 무엇을 하는지 알 때까지는요. 그렇게하면 나중에 발생할 문제를 줄일 수 있습니다.

## 웹사이트는 어떤 구조를 가져야 할까요?

다음으로, 우리의 테스트 사이트가 어떤 구조를 가져야 하는지 살펴 봅시다. 어떤 웹사이트 프로젝트를 만들든지간에 가장 공통으로 가지게 되는 것들은 index HTML 파일과 이미지, 스타일 파일(CSS 파일), 스크립트 파일들을 포함하고 있는 폴더입니다. 이것들을 이제 생성해 봅시다.

1. **`index.html`**: 이 파일은 보통은 홈페이지의 내용을 가지고 있습니다. 다시 말하면, 처음 웹사이트에 방문하면 사람들이 볼 수 있는 텍스트나 이미지이 파일 같은 것입니다. 텍스트 에디터를 사용하여, `index.html` 라는 새 파일을 생성하고 `test-site` 폴더 안에 저장하세요.
2. **`images` 폴더**: 이 폴더는 여러분의 사이트에 사용할 모든 이미지들을 포함하고 있습니다. `test-site` 폴더 안에, `images` 라는 폴더를 생성하세요.
3. **`styles` 폴더**: 이 폴더는 여러분의 내용을 보기 좋게 꾸며주기(예를 들어, 문자와 배경색을 세팅하는 것) 위한 CSS 코드를 포함할 것입니다. `test-site` 폴더 안에, `styles` 라는 폴더를 생성하세요.
4. **`scripts` 폴더**: 이 폴더는 모든 JavaScript 코드를 포함하고 있는데, 이 코드는 여러분의 사이트에 상호작용하는 기능을 추가할 때 사용될 것입니다.예를들면, 클릭할 때 자료를 불러오는 버튼). `test-site` 폴더 안에, `scripts` 라는 폴더를 생성하세요.

> **참고:** Windows 컴퓨터에서는 파일 이름을 보는것에 문제가 생길 수 있습니다, 왜냐하면 윈도우는 기본적으로 **알려진 확장자 자동 숨김**이라는 귀찮은 옵션을 갖고 있기 때문입니다. 일반적으로 윈도우 익스플로러에서, **폴더 옵션...**에서 알려진 확장자 자동 숨김을 선택 해제하는 것으로 이 옵션을 끌 수 있습니다. 여러분의 윈도우 버전을 포함한 더 많은 정보는, 인터넷에서 검색을 해보세요!

## 파일 경로

파일들이 서로 의사소통할 수 있도록 하려면 여러분은 서로에게 각자의 파일 경로를 제공해야 합니다 — 기본적으로 다른 파일이 어디있는지 알 수 있도록 경로를 제공해야하는 것이죠. 이것을 시연해보기 위해, 우리는 `index.html`파일에 약간의`HTML`을 작성할 것입니다, 그리고 ["웹사이트의 외관은 어떻게 할까요?"](/en-US/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like) 라는 글에서 여러분이 선택한 이미지를 보여주게 할 것입니다.

1. `images`폴더 안에 여러분이 선택한 이미지를 복사해 넣으세요.
2. `index.html` 파일을 열고, 아래의 코드를 보이는 그대로 집어 넣습니다. 지금은 이 모든게 무슨 뜻인지 걱정할 필요가 없습니다 — 본 시리즈에서 나중에 이 구조에 대해 더 자세히 살펴볼 겁니다.

   ```html
   <!doctype html>
   <html>
     <head>
       <meta charset="utf-8" />
       <title>My test page</title>
     </head>
     <body>
       <img src="" alt="My test image" />
     </body>
   </html>
   ```

3. `<img src="" alt="My test image">`라는 줄은 페이지 안으로 이미지를 삽입하는 HTML 코드 입니다. 우리는 이미지가 어디에 있는지에 대해 HTML에게 말해줄 필요가 있습니다. 이미지는 _images라는_ 폴더 안에 있는데, 이것은 `index.html` 파일과 같은 폴더에 있습니다. `index.html`파일에서 우리 이미지 파일로 파일 구조를 이동하기 위해, 우리가 필요한 파일 경로는 `images/your-image-filename`입니다. 예를 들어, 우리 이미지가 `firefox-icon.png`라면, 파일 경로는 `images/firefox-icon.png`가 됩니다.
4. 여러분의 HTML 코드 중 src="" 의 쌍따옴표 사이에 파일 경로를 입력하세요.
5. HTML 파일을 저장하고나서, 여러분의 웹 브라우저에서 이것을 로드하세요 (파일을 더블 클릭). 여러분의 새 웹페이지가 이미지를 표시하는 것을 보실 수 있습니다!

![A screenshot of our basic website showing just the firefox logo - a flaming fox wrapping the world](website-screenshot.png)

파일 경로를 위한 일반적인 규칙들:

- 호출하는 HTML 파일과 같은 디렉토리에 있는 파일을 연결하려면 파일이름만 사용하면 됩니다. 예시: `my-image.jpg`.
- 하위 폴더에 위치한 파일을 참조하기 위해서는, 디렉토리 이름과 전방향 슬래시(/)를 경로 앞에 추가합니다. 예시: `subdirectory/my-image.jpg`.
- 호출하는 HTML 파일의 상위 디렉토리에 있는 파일을 연결하려면, 두 점을 찍어야 합니다. 예를 들면, 만약 `index.html`가 `test-site`의 하위 폴더 안에 있고 `my-image.png`가 `test-site` 안에 있을 때, 여러분은 `../my-image.png` 경로를 통해 `index.html`에서 `my-image.png`를 참조할 수 있습니다.
- 여러분이 원하는대로 조합해서 사용할 수도 있습니다, 예를 들면, `../subdirectory/another-subdirectory/my-image.png`.

지금으로선, 이것이 여러분이 알아야 할 전부 입니다.

> **참고:** 윈도우 파일 시스템은 기본 슬래시가 아니라 역슬래시를 사용하는 경향이 있습니다. 예시: `C:\windows`. 이것은 HTML에서 문제가 되지않습니다 — 여러분이 윈도우에서 웹 사이트를 개발하더라도 전방향 슬래시(/)를 코드에 사용해야 합니다.

## 또 무엇을 더 해야할까요?

현재로서는 이것이 전부입니다. 여러분의 폴더 구조는 이와 같이 보여야 합니다:

![A file structure in mac os x finder, showing an images folder with an image in, empty scripts and styles folders, and an index.html file](file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
