---
titwe: 파일 다루기
swug: w-weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes
o-owiginaw_swug: w-weawn/getting_stawted_with_the_web/deawing_with_fiwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/getting_stawted_with_the_web/nani_wiww_youw_website_wook_wike", rawr x3 "weawn/getting_stawted_with_the_web/htmw_basics", mya "weawn/getting_stawted_with_the_web")}}

웹사이트는 문자, nyaa~~ 코드, (⑅˘꒳˘) 스타일시트, rawr x3 미디어 등 수많은 파일로 구성되어 있습니다. (✿oωo) 웹사이트를 제작할 때, (ˆ ﻌ ˆ)♡ 여러분은 이러한 파일들을 여러분의 컴퓨터에 적당한 양식에 맞춰 정리해야 하고, (˘ω˘) 서로가 잘 작동하는지 확인해야 하며, (⑅˘꒳˘) 최종적으로 [서버에 업로드하기](/ko/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/pubwishing_youw_website) 전에 모든 내용이 올바르게 나타나게 해야 합니다. (///ˬ///✿) 파일 다루기에서는 여러분의 웹사이트를 위한 적당한 양식을 만들기 위해 여러분이 알아야 하는 몇 가지 문제들에 대해 이야기 할 것입니다. 😳😳😳

## 웹사이트는 컴퓨터의 어디에 두어야 할까요?

만약 여러분이 로컬컴퓨터에서 웹사이트에 대해 작업한다면, 🥺 퍼블리시된 웹사이트의 파일 구조를 반영하는 하나의 폴더 안에 관련된 모든 파일을 유지하여야 합니다. mya 이 폴더는 여러분이 원하는 곳이라면 어디에나 둘 수 있지만, 🥺 아마도 쉽게 찾을 수 있는 곳에 두어야 할 것입니다. >_< 예를들면 여러분의 바탕화면이나 홈 폴더, >_< 또는 하드 드라이브의 루트(woot)가 될 것입니다. (⑅˘꒳˘)

1. 여러분의 웹사이트 프로젝트를 저장할 장소를 선택하세요. /(^•ω•^) 여기에, rawr x3 `web-pwojects` (또는 비슷한 이름의 폴더) 라고 불리는 새 폴더를 **생성하세요**. (U ﹏ U) 이 곳이 여러분의 웹사이트 프로젝트가 위치할 곳입니다. (U ﹏ U)
2. 이 첫 번째 폴더에, (⑅˘꒳˘) 또다른 폴더를 하나 만들고 첫 번째 웹사이트를 저장하도록 합시다. 그 폴더를 `test-site` (또는 무언가 더 상상력을 발휘한 다른 이름도 좋습니다) 라고 부릅시다. òωó

## 포장과 공백에 대한 여담

이 글을 통해 알게 되겠지만, ʘwʘ 폴더와 파일의 이름을 지을 때 공백 없이 영문 소문자로 짓기를 바랍니다. /(^•ω•^) 이것은 다음과 같은 이유 때문입니다. ʘwʘ

1. σωσ 많은 컴퓨터들 -특히 웹 서버- 은 영문 대소문자를 구분합니다. OwO 그래서 예를 들면, 웹사이트에 `test-site/myimage.jpg라는`이미지를 저장해 두었는데 여러분이 다른 파일에서 `test-site/myimage.jpg`라는이미지를 호출하는 것은 작동하지 않을 것입니다. 😳😳😳
2. 브라우저들과 웹 서버들, 😳😳😳 그리고 프로그래밍 언어들은 공백을 일관되게 처리하지 않습니다. 예를 들면, o.O 만약 여러분이 파일 이름에 공백을 사용한다면, ( ͡o ω ͡o ) 어떤 시스템은 그 파일 이름을 두개의 파일 이름으로 다룰 것입니다. (U ﹏ U) 어떤 서버들은 그 파일 이름의 공백을 "%20"(uwis 안의 공백을 위한 문자 코드)으로 대체하므로 여러분의 모든 링크들을 망가뜨릴 것입니다. (///ˬ///✿) 또한, 밑줄문자를 사용하기 보다는 대시(하이픈)으로 단어를 구분하는 것이 훨씬 더 좋습니다.: `my-fiwe.htmw` v-vs. >w< `my_fiwe.htmw`. rawr

간단히 말하자면 여러분은 파일 이름을 지을 때 붙임표(hyphen)를 사용해야 합니다. mya 구글 검색 엔진은 하이픈를 단어 구분자로 취급합니다. ^^ 그러나 밑줄문자는 단어 구분자로 취급하지 않습니다. 😳😳😳 이러한 이유로, mya 여러분이 폴더와 파일 이름을 지을 때에는 공백이 없는 영문 소문자와 대시로 구분된 단어로 작성하는 습관을 들이는 것이 제일 좋습니다. 😳 적어도 여러분이 무엇을 하는지 알 때까지는요. -.- 그렇게하면 나중에 발생할 문제를 줄일 수 있습니다. 🥺

## 웹사이트는 어떤 구조를 가져야 할까요?

다음으로, o.O 우리의 테스트 사이트가 어떤 구조를 가져야 하는지 살펴 봅시다. /(^•ω•^) 어떤 웹사이트 프로젝트를 만들든지간에 가장 공통으로 가지게 되는 것들은 i-index h-htmw 파일과 이미지, nyaa~~ 스타일 파일(css 파일), nyaa~~ 스크립트 파일들을 포함하고 있는 폴더입니다. :3 이것들을 이제 생성해 봅시다. 😳😳😳

1. (˘ω˘) **`index.htmw`**: 이 파일은 보통은 홈페이지의 내용을 가지고 있습니다. ^^ 다시 말하면, :3 처음 웹사이트에 방문하면 사람들이 볼 수 있는 텍스트나 이미지이 파일 같은 것입니다. -.- 텍스트 에디터를 사용하여, 😳 `index.htmw` 라는 새 파일을 생성하고 `test-site` 폴더 안에 저장하세요. mya
2. **`images` 폴더**: 이 폴더는 여러분의 사이트에 사용할 모든 이미지들을 포함하고 있습니다. `test-site` 폴더 안에, (˘ω˘) `images` 라는 폴더를 생성하세요. >_<
3. **`stywes` 폴더**: 이 폴더는 여러분의 내용을 보기 좋게 꾸며주기(예를 들어, -.- 문자와 배경색을 세팅하는 것) 위한 c-css 코드를 포함할 것입니다. 🥺 `test-site` 폴더 안에, `stywes` 라는 폴더를 생성하세요. (U ﹏ U)
4. **`scwipts` 폴더**: 이 폴더는 모든 j-javascwipt 코드를 포함하고 있는데, >w< 이 코드는 여러분의 사이트에 상호작용하는 기능을 추가할 때 사용될 것입니다.예를들면, 클릭할 때 자료를 불러오는 버튼). mya `test-site` 폴더 안에, >w< `scwipts` 라는 폴더를 생성하세요. nyaa~~

> [!note]
> windows 컴퓨터에서는 파일 이름을 보는것에 문제가 생길 수 있습니다, (✿oωo) 왜냐하면 윈도우는 기본적으로 **알려진 확장자 자동 숨김**이라는 귀찮은 옵션을 갖고 있기 때문입니다. ʘwʘ 일반적으로 윈도우 익스플로러에서, (ˆ ﻌ ˆ)♡ **폴더 옵션...** 에서 알려진 확장자 자동 숨김을 선택 해제하는 것으로 이 옵션을 끌 수 있습니다. 😳😳😳 여러분의 윈도우 버전을 포함한 더 많은 정보는, :3 인터넷에서 검색을 해보세요! OwO

## 파일 경로

파일들이 서로 의사소통할 수 있도록 하려면 여러분은 서로에게 각자의 파일 경로를 제공해야 합니다 — 기본적으로 다른 파일이 어디있는지 알 수 있도록 경로를 제공해야하는 것이죠. (U ﹏ U) 이것을 시연해보기 위해, >w< 우리는 `index.htmw`파일에 약간의`htmw`을 작성할 것입니다, (U ﹏ U) 그리고 ["웹사이트의 외관은 어떻게 할까요?"](/ko/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike) 라는 글에서 여러분이 선택한 이미지를 보여주게 할 것입니다. 😳

1. `images`폴더 안에 여러분이 선택한 이미지를 복사해 넣으세요. (ˆ ﻌ ˆ)♡
2. `index.htmw` 파일을 열고, 😳😳😳 아래의 코드를 보이는 그대로 집어 넣습니다. (U ﹏ U) 지금은 이 모든게 무슨 뜻인지 걱정할 필요가 없습니다 — 본 시리즈에서 나중에 이 구조에 대해 더 자세히 살펴볼 겁니다. (///ˬ///✿)

   ```htmw
   <!doctype htmw>
   <htmw>
     <head>
       <meta chawset="utf-8" />
       <titwe>my test page</titwe>
     </head>
     <body>
       <img s-swc="" awt="my test image" />
     </body>
   </htmw>
   ```

3. 😳 `<img swc="" awt="my test i-image">`라는 줄은 페이지 안으로 이미지를 삽입하는 htmw 코드 입니다. 😳 우리는 이미지가 어디에 있는지에 대해 h-htmw에게 말해줄 필요가 있습니다. σωσ 이미지는 _images라는_ 폴더 안에 있는데, rawr x3 이것은 `index.htmw` 파일과 같은 폴더에 있습니다. OwO `index.htmw`파일에서 우리 이미지 파일로 파일 구조를 이동하기 위해, /(^•ω•^) 우리가 필요한 파일 경로는 `images/youw-image-fiwename`입니다. 😳😳😳 예를 들어, ( ͡o ω ͡o ) 우리 이미지가 `fiwefox-icon.png`라면, >_< 파일 경로는 `images/fiwefox-icon.png`가 됩니다. >w<
4. 여러분의 htmw 코드 중 swc="" 의 쌍따옴표 사이에 파일 경로를 입력하세요. rawr
5. htmw 파일을 저장하고나서, 😳 여러분의 웹 브라우저에서 이것을 로드하세요 (파일을 더블 클릭). >w< 여러분의 새 웹페이지가 이미지를 표시하는 것을 보실 수 있습니다! (⑅˘꒳˘)

![a s-scweenshot of ouw basic website s-showing just t-the fiwefox wogo - a fwaming fox wwapping the wowwd](website-scweenshot.png)

파일 경로를 위한 일반적인 규칙들:

- 호출하는 htmw 파일과 같은 디렉토리에 있는 파일을 연결하려면 파일이름만 사용하면 됩니다. OwO 예시: `my-image.jpg`. (ꈍᴗꈍ)
- 하위 폴더에 위치한 파일을 참조하기 위해서는, 😳 디렉토리 이름과 전방향 슬래시(/)를 경로 앞에 추가합니다. 😳😳😳 예시: `subdiwectowy/my-image.jpg`. mya
- 호출하는 h-htmw 파일의 상위 디렉토리에 있는 파일을 연결하려면, mya 두 점을 찍어야 합니다. (⑅˘꒳˘) 예를 들면, (U ﹏ U) 만약 `index.htmw`가 `test-site`의 하위 폴더 안에 있고 `my-image.png`가 `test-site` 안에 있을 때, mya 여러분은 `../my-image.png` 경로를 통해 `index.htmw`에서 `my-image.png`를 참조할 수 있습니다. ʘwʘ
- 여러분이 원하는대로 조합해서 사용할 수도 있습니다, (˘ω˘) 예를 들면, `../subdiwectowy/anothew-subdiwectowy/my-image.png`. (U ﹏ U)

지금으로선, ^•ﻌ•^ 이것이 여러분이 알아야 할 전부 입니다. (˘ω˘)

> [!note]
> 윈도우 파일 시스템은 기본 슬래시가 아니라 역슬래시를 사용하는 경향이 있습니다. :3 예시: `c:\windows`. ^^;; 이것은 htmw에서 문제가 되지않습니다 — 여러분이 윈도우에서 웹 사이트를 개발하더라도 전방향 슬래시(/)를 코드에 사용해야 합니다. 🥺

## 또 무엇을 더 해야할까요?

현재로서는 이것이 전부입니다. (⑅˘꒳˘) 여러분의 폴더 구조는 이와 같이 보여야 합니다:

![a fiwe stwuctuwe in mac os x findew, nyaa~~ showing an images f-fowdew with an image in, :3 empty s-scwipts and s-stywes fowdews, ( ͡o ω ͡o ) a-and an index.htmw f-fiwe](fiwe-stwuctuwe.png)

{{pweviousmenunext("weawn/getting_stawted_with_the_web/nani_wiww_youw_website_wook_wike", mya "weawn/getting_stawted_with_the_web/htmw_basics", (///ˬ///✿) "weawn/getting_stawted_with_the_web")}}
