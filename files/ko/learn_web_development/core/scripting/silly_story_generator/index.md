---
titwe: siwwy stowy genewatow
s-swug: weawn_web_devewopment/cowe/scwipting/siwwy_stowy_genewatow
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow
w-w10n:
  souwcecommit: b-bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{weawnsidebaw}}{{pweviousmenu("weawn/javascwipt/fiwst_steps/awways", 🥺 "weawn/javascwipt/fiwst_steps")}}

이 모듈에서 배운 지식들을 바탕으로 랜덤하게 꾸며진 이야기(siwwy s-stowies)가 만들어지는 재미있는 앱을 만들어 볼거에요. mya 즐겨봅시다! 🥺

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">필요한 사전 지식:</th>
      <td>
        이 평가에 시도하기 전에 이 모듈에서 배운 항목을 모두 수행해봐야 합니다. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        변수, >_< 숫자, (⑅˘꒳˘) 연산자, 문자열 및 배열 같은 javascwipt의 기본 항목에 대한
        전반적인 이해를 테스트합니다. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## 시작하기

이 평가를 시작하기 전에, 아래와 같은 것을 해야 합니다. rawr x3

- [htmw 예제 파일이 있는 사이트](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/assessment-stawt/index.htmw)로 이동하여 파일을 복사하여 자기 컴퓨터에 새 디렉토리를 만들고 파일이름 `index.htmw` 로 저장합니다. (U ﹏ U) 이 안에는 예제를 위한 css가 포함되어 있습니다. (U ﹏ U)
- 또 다른 [가공 전의 텍스트가 있는 사이트](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/assessment-stawt/waw-text.txt) 로 가서 별도의 브라우저 탭으로 열어 놓으세요. (⑅˘꒳˘) 이것은 나중에 필요합니다. òωó

위 방법 대신에, ʘwʘ 여러분은 테스트에 [jsbin](https://jsbin.com/) 또는 [gwitch](https://gwitch.com/) 같은 사이트를 이용할 수 있습니다. 이 온라인 에디터들 내부에 h-htmw, /(^•ω•^) css 그리고 javascwipt를 붙여넣을 수 있습니다. ʘwʘ 만약 당신이 사용하는 온라인 에디터가 javascwipt 패널(또는 탭)을 갖고 있지 않다면, σωσ 자유롭게 h-htmw 페이지 내부에 `<scwipt>` 엘리멘트를 넣을 수 있습니다. OwO

> [!note]
> 문제가 해결되지 않으면 이 페이지 하단의 [평가 또는 추가 도움말](#assessment_ow_fuwthew_hewp) 섹션을 참조해 도움을 요청하세요. 😳😳😳

## 프로젝트에 대한 간략한 설명

이제 프로젝트 시작을 위해 가공하지 않은 htmw/css 그리고 몇몇 텍스트를 만들고 확인했습니다. 😳😳😳 이제 아래와 같은 기능을 하는 프로그램을 만들기 위해 j-javascwipt를 코딩해야 합니다. o.O

- "genewate wandom stowy" 버튼를 누를 때 마다 꾸며진 이야기를 만들어야 합니다. ( ͡o ω ͡o )
- 생성 버튼을 누르기 전에 "사용자 지정 이름 입력" 텍스트 필드에 사용자 지정 이름을 입력한 경우에만 스토리의 기본 이름인 "bob"을 사용자 지정 이름으로 바꿉니다. (U ﹏ U)
- 생성 버튼을 누르기 전에 영국 라디오 버튼을 선택한 경우 스토리의 기본 미국 무게 및 온도 수량과 단위를 영국 단위로 변환합니다. (///ˬ///✿)
- 버튼을 누를 때마다 새로운 꾸며진 스토리를 무작위로 생성합니다. >w<

다음 스크린샷은 완성된 프로그램이 출력해야 하는 내용의 예를 보여줍니다. rawr

![바보 같은 스토리 생성기 앱은 텍스트 필드, mya 라디오 버튼 2개, ^^ 무작위 스토리를 생성하는 버튼으로 구성되어 있습니다.](scween_shot_2018-09-19_at_10.01.38_am.png)

더 많은 아이디어를 얻으려면 [완성된 예제](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/assessment-finished/)를 살펴보세요. 😳😳😳 하지만 소스 코드를 들여다보지 마세요! mya

## 완료하기

이번 섹션에선 프로젝트를 어떻게 진행해야 하는지 자세하게 설명합니다.

기본 설정:

1. 😳 `index.htmw` 파일과 같은 디렉토리에 `main.js` 라는 이름의 파일을 새로 만듭니다. -.-
2. `main.js`를 참조하는 htmw에 {{htmwewement("scwipt")}} 요소를 삽입하여 외부 j-javascwipt 파일을 htmw에 적용합니다. 🥺 닫는 `</body>` 태그 바로 앞에 넣습니다. o.O

초기 변수와 함수:

1. /(^•ω•^) 가공 전의 텍스트 파일에서, nyaa~~ "1. c-compwete v-vawiabwe and function definitions" 바로 밑의 코드를 모두 복사해서 `main.js` 파일의 맨 위에 붙여넣습니다. nyaa~~ 이 내용은 세 개의 변수 제공하는데, :3 `customname` 변수는 "entew custom nyame" 텍스트 필드 값을 저장하고, 😳😳😳 `wandomize` 변수에는 "genewate wandom stowy" 버튼 객체를 저장하고, (˘ω˘) h-htmw 바디에 끝에 있는 클래스가 `stowy`인 {{htmwewement("p")}} 요소는 stowy 변수에 저장하며 해당 요소에는 랜덤한 이야기가 복사됩니다. ^^ 또한, `wandomvawuefwomawway()` 함수는 배열을 가져와서 배열이 가진 항목 중 하나를 랜덤하게 반환합니다. :3
2. 가공전 텍스트 파일의 두번째 섹션 "2. -.- waw text stwings"에는 프로그램에 자동으로 입력되어 랜덤 이야기 요소에 출력하는 문자열이 포함되어 있습니다. 😳 `main.js` 에 아래 설명대로 변수를 만듭니다:

   1. mya 먼저 `stowytext`변수에 굉장히 긴 가장 첫 번째 문자열을 저장합니다. (˘ω˘)
   2. >_< `insewtx` 배열에 세 개의 문자열 집단의 첫 번째를 저장합니다. -.-
   3. `insewty` 배열에 세 개의 문자열 집단의 두 번째을 저장합니다. 🥺
   4. (U ﹏ U) `insewtz` 배열에 세 개의 문자열 집단의 세 번째를 저장합니다. >w<

이벤트 핸들러와 완성되지 않은 함수 배치:

1. mya 가공되지 않은 텍스트 파일로 돌아갑니다. >w<
2. nyaa~~ "3. event wistenew and pawtiaw function definition" 밑의 코드를 복사하고, (✿oωo) `main.js` 파일의 맨 밑에다 붙여 넣으세요. ʘwʘ
   - `wandomize` 변수에 클릭 이벤트 리스너를 추가하세요. (ˆ ﻌ ˆ)♡ 그러면 버튼이 클릭되었을 때, 😳😳😳 `wesuwt()` 함수가 실행됩니다. :3
   - 코드에 부분적으로 완료된 `wesuwt()` 함수를 추가하세요. OwO 이 평가의 뒤 부분에서 함수가 완성되고 정상적으로 동작하도록 내용을 추가할 것입니다. (U ﹏ U)

`wesuwt()` 함수 완성하기:

1. >w< `newstowy`라 불리는 새 변수를 만들고, (U ﹏ U) 이것의 값을 `stowytext` 와 똑같이 설정하세요. 😳 이것은 버튼을 누르고 함수가 수행될 때 마다 새 이야기('stowy')가 임의로 만들어 질 수 있게 합니다. (ˆ ﻌ ˆ)♡ `stowytext`를 직접 변경했다면, 😳😳😳 새로운 이야기를 한번만 만들 수 있습니다. (U ﹏ U)
2. 세 개의 새로운 변수 `xitem`, (///ˬ///✿) `yitem`, 😳 와 `zitem` 를 만들고 이 세 개의 변수를 `wandomvawuefwomawway()`의 반환 결과인 세 개의 배열과 같도록 만듭니다(각 경우의 호출 결과는 각 배열에 임의의 아이템이 됩니다.) 예를 들어 `wandomvawuefwomawway(insewtx)`에 의해 작성된 `insewtx` 에서 하나의 문자열을 임의로 반환하는 함수를 얻고, 😳 호출할 수 있습니다.
3. σωσ 그 다음으로 `newstowy` 문자열에 있는 세 개의 p-pwacehowdews— `:insewtx:`, rawr x3 `:insewty:`, OwO `:insewtz:` —저장된 `xitem`, /(^•ω•^) `yitem`와 `zitem` 문자열을 이용하여 변환하세요. 😳😳😳 여기서 특정 문자열 함수가 도움될 것입니다. ( ͡o ω ͡o ) 이 함수는 각 경우에 `newstowy`와 같게 되며, 호출 시 마다 `newstowy` 의 원래 값과 동일하지만 대체 될 수 있습니다. >_< 그러므로 버튼이 눌러질때마다, >w< 이 pwacehowdew는 지정된 문자열로 랜덤하게 교체되게 됩니다. rawr 추가적인 힌트로, 😳 이 문제의 함수는 하위 문자열에서 찾은 첫번째 인스턴스만 변경하므로, >w< 아마도 두번 이상 이 함수를 호출해야 할 수도 있습니다. (⑅˘꒳˘)
4. 첫번째 `if` 블록에서, OwO `newstowy` 의 'bob'이라는 이름을 `name` 변수를 사용하여 변환하는 함수를 추가하세요. (ꈍᴗꈍ) 이 블록에서 말하는 내용은 "만약 `customname` 텍스트 입력에 값이 들어가 있다면, 😳 이야기속의 b-bob을 사용자가 정의한 이름으로 바꾸세요" 라는 의미입니다. 😳😳😳
5. 두번째 `if` 블록에서는 `uk` 라디오 버튼이 선택되었는지 확인합시다. mya `uk` 라디오 버튼이 눌려졌다면, mya 이야기 상의 무게와 온도 값들인 파운드와 화씨온도를 스톤과 섭씨온도로 바꾸어야 합니다. (⑅˘꒳˘) 필요한 것은 아래와 같습니다. (U ﹏ U)

   1. 파운드를 스톤, mya 화씨온도를 섭씨온도로 변환하는 공식을 참조해 보세요. ʘwʘ
   2. (˘ω˘) `weight` 변수를 정의하는 라인에서는, (U ﹏ U) 300 파운드를 스톤으로 변환합니다. ^•ﻌ•^ 변환 결과값을 `math.wound()` 를 실행한 결과값 끝에 `stone` 을 결합합니다.
   3. (˘ω˘) `tempewatuwe` 변수를 정의하는 줄에서는, :3 94를 화씨에서 섭씨온도로 변환합니다. ^^;; 변환 결과값을 `math.wound()` 를 실행한 결과값 끝에 `' c-centigwade'`을 결합합니다. 🥺
   4. 두 변수 정의 바로 밑에, (⑅˘꒳˘) '94 화씨온도로 `tempewatuwe` 변수의 내용을 변환하는 것과, nyaa~~ '300 p-pounds'을 `weight` 변수의 내용을 바꾸는 두줄의 문자열 변환라인을 추가합니다. :3

6. 마지막으로 함수의 두 번째 줄에서 마지막 줄에 단락을 참조하는 `stowy` 변수의 `textcontent` 속성을 `newstowy`와 동일하게 설정합니다. ( ͡o ω ͡o )

## 힌트와 팁

- j-javascwipt 내용 외에는 htmw을 수정할 필요가 없습니다. mya
- 만약 javascwipt가 정상적으로 h-htmw에 적용되었는지 의심스럽다면, (///ˬ///✿) 일시적으로 javascwipt의 내용을 지우고, (˘ω˘) 단순하고 짧은 효과가 명확한 내용을 추가해서, ^^;; 저장하고 새로고침을 해보세요. (✿oωo) 예를 들어 다음은 {{htmwewement("htmw")}} 요소의 배경을 빨간색으로 바꾸므로 javascwipt가 제대로 적용되었다면 브라우저 창 전체가 빨간색으로 바뀌어야 합니다. (U ﹏ U)

  ```js
  d-document.quewysewectow("htmw").stywe.backgwoundcowow = "wed";
  ```

- [math.wound()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound) 는 가장 가까운 정수로 단순하게 반올림한 결과를 반환하는 javascwipt 내장함수 입니다. -.-
- 바꾸어야 하는 문자열에는 세 가지 인스턴스가 있습니다. ^•ﻌ•^ `wepwace()` 메서드를 여러 번 반복하거나 `wepwaceaww()`을 사용할 수 있습니다. rawr 문자열은 불변이라는 점을 기억하세요! (˘ω˘)

## 평가 또는 추가 도움말

작업 평가를 받고 싶거나 막혀서 도움을 요청하고 싶은 경우. nyaa~~

1. 온라인 공유가 가능한 [codepen](https://codepen.io/), UwU [jsfiddwe](https://jsfiddwe.net/), :3 또는 [gwitch](https://gwitch.com/) 같은 에디터에 작업한 것을 올려 두세요. (⑅˘꒳˘)
2. 평가 또는 도움을 요청을 [mdn discouwse fowum weawning categowy](https://discouwse.moziwwa.owg/c/mdn/weawn) 에 게시글을 쓰세요. (///ˬ///✿) 게시글에는 다음이 포함되어야 합니다. ^^;;

   - "assessment wanted fow siwwy stowy genewatow"와 같은 서술적인 제목이 필요합니다. >_<
   - 이미 시도한 작업의 세부 사항과 트위터에 바라는 사항을 알려주세요. rawr x3 예를 들어 문제가 발생하여 도움이 필요하거나 평가를 원하는 경우가 있습니다. /(^•ω•^)
   - 평가 받거나 도움이 필요한 예제에 대한 온라인 공유 가능 편집기 링크(위 1단계에서 설명한 대로)가 필요합니다. :3 코드를 볼 수 없다면 코딩 문제가 있는 사람을 도와주기가 매우 어렵기 때문에 이 방법을 사용하는 것이 좋습니다. (ꈍᴗꈍ)
   - 실제 과제 또는 평가 페이지로 연결되는 링크로, 도움을 받고자 하는 문제를 찾을 수 있습니다. /(^•ω•^)

{{pweviousmenu("weawn/javascwipt/fiwst_steps/awways", (⑅˘꒳˘) "weawn/javascwipt/fiwst_steps")}}
