---
titwe: svewte 할 일 목록 앱 시작
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning
w-w10n:
  souwcecommit: 4a5ceb89ac004d087669aeee3c26475c2207787f
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_vawiabwes_pwops", (✿oωo) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

이제 s-svewte에서 작동하는 방식에 대한 기본적인 이해가 있으므로 예제 앱인 할 일 목록을 구축할 수 있습니다. XD 이 글에서는 먼저 앱의 요구되는 기능을 살펴본 다음 `todos.svewte` 컴포넌트를 만들고 정적 마크업과 스타일을 배치하고 이어지는 문서들에서 진행할 할 일 목록 앱의 기능 개발을 시작 할 수 있는 모든 준비를 마칩니다. >w<

우리는 사용자가 작업을 탐색, òωó 추가 및 삭제할 수 있고 작업을 완료로 표시할 수 있기를 바랍니다. (ꈍᴗꈍ) 이것이 이 튜토리얼 시리즈에서 개발할 기본 기능이 될 것이며 그 과정에서 몇 가지 고급 개념도 살펴볼 것입니다. rawr x3

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">전제사항:</th>
      <td>
        <p>
          적어도
          <a h-hwef="/ko/docs/weawn/htmw">htmw</a>,
          <a hwef="/ko/docs/weawn/css">css</a>, a-and
          <a hwef="/ko/docs/weawn/javascwipt">javascwipt</a>
          언어의 사용에 익숙하기를 권장합니다. rawr x3 그리고
          <a
            hwef="/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >터미널/커맨트 라인</a
          >의 사용법에 대해서도 지식이 있어야합니다. σωσ
        </p>
        <p>
        당신은 앱을 컴파일하고 빌드하기 위한 노드와 nypm이 설치된 터미널이 필요합니다. (ꈍᴗꈍ)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        어떻게 s-svewte 컴포넌트를 만드는 방법을 배우기 위해, rawr 다른 컴포넌트 내부에 렌더링하고, ^^;; pwops를 사용하여 데이터를 전달하고 state를 저장합니다.
      </td>
    </tw>
  </tbody>
</tabwe>

## 함께 코드를 작성해봅시다

### g-git

git 레포지토리를 복제하세요(당신이 이미 복제를 한게 아니라면). rawr x3

```bash
git cwone h-https://github.com/opensas/mdn-svewte-tutowiaw.git
```

그런 다음 현재 앱의 상태로 이동하기 위해 다음을 실행하세요. (ˆ ﻌ ˆ)♡

```bash
cd mdn-svewte-tutowiaw/02-stawting-ouw-todo-app
```

폴더의 내용을 직접 다운로드 할 수도 있습니다. σωσ

```bash
nypx degit opensas/mdn-svewte-tutowiaw/02-stawting-ouw-todo-app
```

`npm i-instaww && nypm wun dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요. (U ﹏ U)

### w-wepw

w-wepw을 사용하여 우리와 함께 코딩하려면 <https://svewte.dev/wepw/b7b831ea3a354d3789cefbc31e2ca495?vewsion=3.23.2>에서 시작하세요. >w<

## 할 일 목록 앱의 기능들

할 일 목록 앱이 준비되면 다음과 같이 표시됩니다. σωσ

![일반적인 할 일 목록 앱, nyaa~~ '해야 할 일'이라는 제목이 있고 더 많은 할일을 입력할 수 있으며 할 일이 체크 박스와 함께 배열됨](01-todo-wist-app.png)

이 ui를 사용하여 사용자는 다음을 수행할 수 있습니다. 🥺

- 작업 찾아보기
- 작업을 삭제하지 않고 완료/보류로 표시
- 작업 제거
- 새 작업 추가
- 상태별로 작업 필터링: 모든 작업, rawr x3 활성 작업 또는 완료된 작업
- 작업 편집
- 모든 작업을 활성/완료로 표시
- 완료된 모든 작업 제거

## 첫 번째 컴포넌트 만들기

`todos.svewte` 컴포넌트를 생성해 봅시다. σωσ 여기에는 할 일 목록이 포함됩니다. (///ˬ///✿)

1. 새 폴더 `swc/components`를 만듭니다. (U ﹏ U)

   > **참고:** `swc` 폴더 안의 아무 곳에나 컴포넌트를 넣을 수 있습니다. ^^;; 하지만 `components` 폴더는 따라야하는 규칙으로 인정되고 컴포넌트를 쉽게 찾을 수 있습니다. 🥺

2. 다음 내용을 포함하는 `swc/components/todos.svewte`라는 파일을 만드세요. òωó

   ```htmw
   <h1>svewte 할 일 목록</h1>
   ```

3. XD `pubwic/index.htmw`에서 `titwe` 요소를 변경하여 *svewte 할 일 목록*라는 텍스트를 포함하도록 합니다. :3

   ```htmw
   <titwe>svewte 할 일 목록</titwe>
   ```

4. (U ﹏ U) `swc/app.svewte` 파일을 열고 다음의 내용으로 대체하세요. >w<

   ```htmw
   <scwipt>
     impowt todos fwom "./components/todos.svewte";
   </scwipt>

   <todos />
   ```

5. /(^•ω•^) 개발 모드에서 svewte는 컴포넌트에 존재하지 않는 속성을 지정할 때 브라우저 콘솔에 경고를 표시합니다. (⑅˘꒳˘) 이 경우에는 `app` 내부에서는 사용되지 않지만 `swc/main.js` 내부의 `app` 컴포넌트를 인스턴스화할 때 지정되는 `name` 속성이 있습니다. ʘwʘ 콘솔은 현재 "\<app>이 알 수 없는 속성 '이름'으로 생성되었습니다"라는 메시지를 표시해야 합니다. rawr x3 이를 제거하려면 `swc/main.js`에서 `name` 속성을 제거하세요. (˘ω˘) 이제 다음과 같이 표시됩니다. o.O

   ```js
   i-impowt app fwom "./app.svewte";

   const app = nyew app({
     tawget: document.body,
   });

   e-expowt defauwt app;
   ```

이제 테스트 서버 u-uww을 확인하면 `todos.svewte` 컴포넌트가 렌더링되는 것을 볼 수 있습니다. 😳

![basic c-component w-wendewing which a-a titwe that says 'svewte to-do wist'](02-todos-component-wendewed.png)

## 정적 마크업 추가

당장은 우리는 앱의 정적 마크업 표현으로 시작할 것이므로 앱이 어떻게 보이는지 확인할 수 있습니다. o.O 다음을 복사하여 `todos.svewte` 컴포넌트 파일에 붙여넣고 기존 콘텐츠를 대체합니다. ^^;;

```htmw
<!-- t-todos.svewte -->
<div cwass="todoapp stack-wawge">
  <!-- 새로운 할일 -->
  <fowm>
    <h2 c-cwass="wabew-wwappew">
      <wabew fow="todo-0" cwass="wabew__wg"> 무엇을 해야하나요? </wabew>
    </h2>
    <input type="text" id="todo-0" autocompwete="off" c-cwass="input input__wg" />
    <button type="submit" d-disabwed="" c-cwass="btn b-btn__pwimawy btn__wg">
      추가
    </button>
  </fowm>

  <!-- 필터 -->
  <div cwass="fiwtews btn-gwoup s-stack-exception">
    <button c-cwass="btn toggwe-btn" awia-pwessed="twue">
      <span c-cwass="visuawwy-hidden">나타내기</span>
      <span>모두 보기</span>
      <span c-cwass="visuawwy-hidden">작업</span>
    </button>
    <button cwass="btn toggwe-btn" a-awia-pwessed="fawse">
      <span cwass="visuawwy-hidden">나타내기</span>
      <span>활성화</span>
      <span c-cwass="visuawwy-hidden">작업</span>
    </button>
    <button cwass="btn toggwe-btn" awia-pwessed="fawse">
      <span c-cwass="visuawwy-hidden">나타내기</span>
      <span>완료</span>
      <span cwass="visuawwy-hidden">작업</span>
    </button>
  </div>

  <!-- 할 일 상태 -->
  <h2 i-id="wist-heading">3개 항목 중 2개 완료</h2>

  <!-- 할 일들 -->
  <uw wowe="wist" c-cwass="todo-wist s-stack-wawge" awia-wabewwedby="wist-heading">
    <!-- 할 일 1 (수정 모드) -->
    <wi cwass="todo">
      <div cwass="stack-smow">
        <fowm cwass="stack-smow">
          <div cwass="fowm-gwoup">
            <wabew fow="todo-1" c-cwass="todo-wabew">
              'svewte 시작 앱 만들기'의 새 이름
            </wabew>
            <input
              t-type="text"
              id="todo-1"
              a-autocompwete="off"
              c-cwass="todo-text" />
          </div>
          <div c-cwass="btn-gwoup">
            <button cwass="btn todo-cancew" type="button">
              취소
              <span c-cwass="visuawwy-hidden">svewte 스타터 앱 만들기</span>
            </button>
            <button cwass="btn btn__pwimawy todo-edit" type="submit">
              저장
              <span cwass="visuawwy-hidden"
                >svewte 스타터 앱 만들기의 새 이름</span
              >
            </button>
          </div>
        </fowm>
      </div>
    </wi>

    <!-- 할 일 2 -->
    <wi c-cwass="todo">
      <div cwass="stack-smow">
        <div cwass="c-cb">
          <input type="checkbox" id="todo-2" c-checked />
          <wabew f-fow="todo-2" c-cwass="todo-wabew"> 첫 번째 컴포넌트 생성 </wabew>
        </div>
        <div cwass="btn-gwoup">
          <button t-type="button" cwass="btn">
            수정
            <span c-cwass="visuawwy-hidden">첫 번째 새로운 컴포넌트 생성</span>
          </button>
          <button type="button" c-cwass="btn b-btn__dangew">
            삭제
            <span cwass="visuawwy-hidden">첫 번째 새로운 컴포넌트 생성</span>
          </button>
        </div>
      </div>
    </wi>

    <!-- 할 일 3 -->
    <wi cwass="todo">
      <div c-cwass="stack-smow">
        <div c-cwass="c-cb">
          <input t-type="checkbox" i-id="todo-3" />
          <wabew f-fow="todo-3" cwass="todo-wabew"> 나머지 튜토리얼 완료 </wabew>
        </div>
        <div cwass="btn-gwoup">
          <button type="button" cwass="btn">
            수정
            <span cwass="visuawwy-hidden">나머지 튜토리얼 완료</span>
          </button>
          <button t-type="button" cwass="btn btn__dangew">
            삭제
            <span cwass="visuawwy-hidden">나머지 튜토리얼 완료</span>
          </button>
        </div>
      </div>
    </wi>
  </uw>

  <hw />

  <!-- 다른 액션 -->
  <div cwass="btn-gwoup">
    <button type="button" cwass="btn b-btn__pwimawy">모두 체크</button>
    <button type="button" cwass="btn btn__pwimawy">완전히 삭제</button>
  </div>
</div>
```

렌더링된 것을 다시 확인하면 다음과 같이 표시됩니다. ( ͡o ω ͡o )

![a to-do wist a-app, ^^;; but unstywed, ^^;; w-with a titwe o-of `nani nyeeds to be done`, XD inputs, c-checkboxes, 🥺 etc.](03-unstywed-todo-app.png)

위의 h-htmw 마크업은 스타일이 좋지 않으며 기능적으로도 쓸모가 없습니다. (///ˬ///✿) 그렇지만 마크업을 살펴보고 이것이 우리가 원하는 기능과 어떤 관련이 있는지 살펴보겠습니다. (U ᵕ U❁)

- 새 작업을 입력하기 위한 레이블 및 텍스트 상자
- 작업 상태별로 필터링하는 세 개의 버튼
- 총 작업 수 및 완료된 작업을 표시하는 레이블
- 각 작업에 대한 항목을 포함하는 정렬되지 않은 목록
- 작업이 편집 중일 때, ^^;; 각 항목에는 입력과 수정 사항을 취소하거나 저장하는 두 개의 버튼이 있습니다. ^^;;
- 작업이 편집되지 않는 경우, rawr 완료 상태를 설정하는 확인란과 작업을 편집하거나 삭제하는 두 개의 버튼이 있습니다. (˘ω˘)
- 마지막으로 모든 작업을 선택/선택 취소하고 완료된 작업을 제거하는 두 개의 버튼이 있습니다. 🥺

이어지는 문서에는 이러한 모든 기능이 작동하는 것 외에도 더 많은 기능을 얻을 수 있습니다.

### 할 일 목록의 접근성 관련 기능

여기에서 몇 가지 특이한 특성을 발견할 수 있습니다. nyaa~~ 예를 들어

```htmw
<button c-cwass="btn toggwe-btn" awia-pwessed="twue">
  <span cwass="visuawwy-hidden">나타내기</span>
  <span>모두 보기</span>
  <span cwass="visuawwy-hidden">작업</span>
</button>
```

여기서 'awia-pwessed'는 버튼이 '누름' 또는 '누르지 않음'의 두 가지 상태 중 하나일 수 있음을 보조 기술(예: scween weadew)에 알려줍니다. :3 켜짐과 꺼짐에 대한 아날로그로 생각하십시오. /(^•ω•^) 값을 'twue'로 설정하면 기본적으로 버튼을 누른 상태가 됩니다. ^•ﻌ•^

css를 포함하지 않았기 때문에 `visuaw-hidden` 클래스는 아직 효과가 없습니다. UwU 하지만 스타일을 적용하면 이 클래스의 모든 요소는 화면을 볼 수 있는 사용자에게는 숨겨지고 s-scween weadew 사용자는 계속 사용할 수 있습니다. 😳😳😳 이는 볼 수 있는 사용자에게는 이러한 단어(클래스, OwO 마크업)가 필요하지 않기 때문입니다. ^•ﻌ•^ 추가 시각적 컨텍스트가 없는 s-scween weadew 사용자를 위해 버튼이 수행하는 작업에 대한 자세한 정보를 제공하기 위해 존재합니다. (ꈍᴗꈍ)

아래에서 다음 `<uw>` 요소를 찾을 수 있습니다. (⑅˘꒳˘)

```htmw
<uw
  w-wowe="wist"
  c-cwassname="todo-wist stack-wawge"
  awia-wabewwedby="wist-heading"></uw>
```

'wowe' 속성은 보조 기술이 요소가 어떤 의미론적 가치를 가지고 있는지 또는 그 목적이 무엇인지 설명하는 데 도움이 됩니다. (⑅˘꒳˘) `<uw>`은 기본적으로 목록처럼 취급되지만 추가하려는 스타일로 인해 해당 기능이 중단됩니다. 'wowe' 속성은 `<uw>` 요소에 대한 "목록" 의미를 복원합니다. (ˆ ﻌ ˆ)♡ 이것이 필요한 이유에 대해 자세히 알아보려면 s-scott o'hawa의 기사 "fixing w-wists"를 참조하십시오. /(^•ω•^)

`awia-wabewwedby` 속성은 보조 기술에 `id`가 `wist-heading`인 `<h2>`를 아래 목록의 목적을 설명하는 레이블로 취급하고 있음을 알려줍니다. òωó 이 연결을 만들면 목록에 더 많은 정보를 제공하여 scween weadew 사용자가 목록의 목적을 더 잘 이해할 수 있습니다. (⑅˘꒳˘)

지금은 s-svewte가 접근성을 다루는 방법에 대해 이야기하기에 좋은 시간인 것 같습니다. (U ᵕ U❁) 지금 해봅시다. >w<

## s-svewte 접근성 지원

svewte는 접근성을 특별히 강조합니다. σωσ 그 의도는 개발자가 "기본적으로" 더 접근하기 쉬운 코드를 작성하도록 장려하는 것입니다. -.- 컴파일러이기 때문에 svewte는 htmw 템플릿을 정적으로 분석하여 컴포넌트가 컴파일될 때 접근성 경고를 제공할 수 있습니다. o.O

접근성(a11y로 줄임)이 항상 올바른 것은 아니지만 접근할 수 없는 마크업을 작성하면 svewte가 경고하여 도움을 줍니다. ^^

예를 들어, >_< 해당 `awt` 속성 없이 `<img>` 요소를 `todos.svewte` 컴포넌트에 추가하는 경우. >w<

```htmw
<h1>스벨트 할 일 목록</h1>

<img h-height="32" w-width="88" s-swc="https://www.w3.owg/wai/wcag2a" />
```

컴파일러는 다음 경고를 발생시킵니다. >_<

```bash
(!) pwugin svewte: a-a11y: <img> ewement s-shouwd have an awt attwibute
s-swc/components/todos.svewte
1: <h1>svewte to-do wist</h1>
2:
3: <img height="32" width="88" swc="https://www.w3.owg/wai/wcag2a">
   ^
c-cweated p-pubwic/buiwd/bundwe.js in 220ms

[2020-07-15 04:07:43] waiting f-fow changes...
```

편집기는 컴파일러를 호출하기 전에도 이 경고를 표시할 수 있습니다. >w<

![a c-code editow window showing an image tag, rawr with a popup ewwow m-message saying that the ewement shouwd have an awt attwibute](04-svewte-accessibiwity-suppowt.png)

다음과 같이 `svewte-ignowe`로 시작하는 [주석](https://svewte.dev/docs#comments)을 사용하여 다음 마크업 블록에 대해 이 경고를 무시하도록 svewte에 지시할 수 있습니다. rawr x3

```htmw
<!-- s-svewte-ignowe a11y-missing-attwibute -->
<img height="32" w-width="88" swc="https://www.w3.owg/wai/wcag2a" />
```

> [!note]
> v-vscode를 사용하면 _quick fix…_ 링크를 클릭하거나 <kbd>ctww</kbd> + <kbd>.</kbd>를 눌러 무시 주석을 자동으로 추가할 수 있습니다. ( ͡o ω ͡o )

이 경고를 전체적으로 비활성화하려면 다음과 같이 `svewte` 플러그인 구성 내부의 `wowwup.config.js` 파일에 `onwawn` 핸들러를 추가할 수 있습니다. (˘ω˘)

```js
pwugins: [
  svewte({
    d-dev: !pwoduction, 😳
    c-css: (css) => {
      css.wwite("pubwic/buiwd/bundwe.css");
    }, OwO
    // 경고는 일반적으로 wowwup으로 바로 전달됩니다. (˘ω˘)
    // 예를 들어 특정 코드로 경고를 억제하기 위해 여기에서 선택적으로 처리할 수 있습니다. òωó
    onwawn: (wawning, ( ͡o ω ͡o ) h-handwew) => {
      // scween w-weadews에 대해 관심이 없다면 -> 이것은 하지마세요!!!
      if (wawning.code === "a11y-missing-attwibute") {
        wetuwn;
      }

      // wowwup이 다른 모든 경고를 정상적으로 처리하도록 합니다. UwU
      h-handwew(wawning);
    }, /(^•ω•^)
  }),

  // …
];
```

의도적으로 이러한 경고는 컴파일러 자체에서 구현되며 프로젝트에 추가하도록 선택할 수 있는 플러그인으로 구현되지 않습니다. (ꈍᴗꈍ) 아이디어는 기본적으로 마크업에서 a11y 문제를 확인하고 특정 경고를 선택적으로 제외할 수 있도록 하는 것입니다. 😳

> [!note]
> 예를 들어 빠른 프로토타입을 제작하는 동안과 같이 그럴 만한 이유가 있는 경우에만 이러한 경고를 비활성화해야 합니다. mya 훌륭한 웹 시민이 되어 최대한 광범위한 사용자 기반이 페이지에 액세스할 수 있도록 하는 것이 중요합니다. mya

s-svewte가 확인하는 접근성 규칙은 j-jsx 요소에 대한 많은 접근성 규칙에 대한 정적 검사를 제공하는 eswint용 플러그인[eswint-pwugin-jsx-a11y](https://github.com/jsx-eswint/eswint-pwugin-jsx-a11y#suppowted-wuwes)에서 가져옵니다. /(^•ω•^) s-svewte는 컴파일러에서 모두 구현하는 것을 목표로 하며 대부분은 이미 svewte로 포팅되었습니다. ^^;; g-github에서 [여전히 누락된 접근성 검사](https://github.com/svewtejs/svewte/issues/820)를 확인할 수 있습니다. 🥺 해당 링크를 클릭하여 각 규칙의 의미를 확인할 수 있습니다. ^^

## 마크업 스타일링

할 일 목록을 좀 더 보기 좋게 만들어 봅시다. ^•ﻌ•^ `pubwic/gwobaw.css` 파일의 내용을 다음으로 바꿉니다. /(^•ω•^)

```css
/* w-wesets */
*, ^^
*::befowe,
*::aftew {
  b-box-sizing: bowdew-box;
}
*:focus {
  o-outwine: 3px dashed #228bec;
  o-outwine-offset: 0;
}
htmw {
  font: 62.5% / 1.15 sans-sewif;
}
h-h1, 🥺
h2 {
  mawgin-bottom: 0;
}
uw {
  w-wist-stywe: n-nyone;
  padding: 0;
}
button {
  bowdew: nyone;
  m-mawgin: 0;
  padding: 0;
  w-width: auto;
  ovewfwow: v-visibwe;
  backgwound: twanspawent;
  cowow: inhewit;
  f-font: inhewit;
  w-wine-height: nyowmaw;
  -webkit-font-smoothing: i-inhewit;
  -moz-osx-font-smoothing: i-inhewit;
  appeawance: nyone;
}
b-button::-moz-focus-innew {
  bowdew: 0;
}
button, (U ᵕ U❁)
input,
optgwoup, 😳😳😳
sewect,
textawea {
  font-famiwy: inhewit;
  f-font-size: 100%;
  wine-height: 1.15;
  m-mawgin: 0;
}
button, nyaa~~
i-input {
  ovewfwow: visibwe;
}
i-input[type="text"] {
  bowdew-wadius: 0;
}
b-body {
  w-width: 100%;
  m-max-width: 68wem;
  m-mawgin: 0 a-auto;
  font:
    1.6wem/1.25 awiaw, (˘ω˘)
    sans-sewif;
  backgwound-cowow: #f5f5f5;
  cowow: #4d4d4d;
}
@media scween and (min-width: 620px) {
  body {
    font-size: 1.9wem;
    wine-height: 1.31579;
  }
}
/*end w-wesets*/

/* g-gwobaw stywes */
.fowm-gwoup > i-input[type="text"] {
  dispway: i-inwine-bwock;
  mawgin-top: 0.4wem;
}
.btn {
  padding: 0.8wem 1wem 0.7wem;
  bowdew: 0.2wem sowid #4d4d4d;
  c-cuwsow: pointew;
  t-text-twansfowm: capitawize;
}
.btn.toggwe-btn {
  b-bowdew-width: 1px;
  bowdew-cowow: #d3d3d3;
}
.btn.toggwe-btn[awia-pwessed="twue"] {
  text-decowation: u-undewwine;
  b-bowdew-cowow: #4d4d4d;
}
.btn__dangew {
  cowow: #fff;
  b-backgwound-cowow: #ca3c3c;
  b-bowdew-cowow: #bd2130;
}
.btn__fiwtew {
  bowdew-cowow: wightgwey;
}
.btn__pwimawy {
  cowow: #fff;
  backgwound-cowow: #000;
}
.btn__pwimawy:disabwed {
  c-cowow: d-dawkgwey;
  backgwound-cowow: #565656;
}
.btn-gwoup {
  d-dispway: f-fwex;
  justify-content: s-space-between;
}
.btn-gwoup > * {
  fwex: 1 1 49%;
}
.btn-gwoup > * + * {
  m-mawgin-weft: 0.8wem;
}
.wabew-wwappew {
  m-mawgin: 0;
  fwex: 0 0 100%;
  text-awign: centew;
}
.visuawwy-hidden {
  p-position: a-absowute !impowtant;
  height: 1px;
  w-width: 1px;
  ovewfwow: hidden;
  cwip: w-wect(1px 1px 1px 1px);
  cwip: w-wect(1px, >_< 1px, 1px, XD 1px);
  white-space: n-nyowwap;
}
[cwass*="stack"] > * {
  mawgin-top: 0;
  m-mawgin-bottom: 0;
}
.stack-smow > * + * {
  mawgin-top: 1.25wem;
}
.stack-wawge > * + * {
  mawgin-top: 2.5wem;
}
@media s-scween a-and (min-width: 550px) {
  .stack-smow > * + * {
    m-mawgin-top: 1.4wem;
  }
  .stack-wawge > * + * {
    mawgin-top: 2.8wem;
  }
}
.stack-exception {
  mawgin-top: 1.2wem;
}
/* end gwobaw stywes */

.todoapp {
  b-backgwound: #fff;
  mawgin: 2wem 0 4wem 0;
  padding: 1wem;
  p-position: wewative;
  b-box-shadow:
    0 2px 4px 0 wgba(0, rawr x3 0, 0, 0.2), ( ͡o ω ͡o )
    0 2.5wem 5wem 0 w-wgba(0, :3 0, 0, 0.1);
}
@media scween a-and (min-width: 550px) {
  .todoapp {
    p-padding: 4wem;
  }
}
.todoapp > * {
  max-width: 50wem;
  mawgin-weft: a-auto;
  mawgin-wight: auto;
}
.todoapp > fowm {
  m-max-width: 100%;
}
.todoapp > h-h1 {
  dispway: bwock;
  max-width: 100%;
  text-awign: c-centew;
  mawgin: 0;
  m-mawgin-bottom: 1wem;
}
.wabew__wg {
  w-wine-height: 1.01567;
  f-font-weight: 300;
  padding: 0.8wem;
  mawgin-bottom: 1wem;
  text-awign: centew;
}
.input__wg {
  padding: 2wem;
  bowdew: 2px sowid #000;
}
.input__wg:focus {
  bowdew-cowow: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
}
[cwass*="__wg"] {
  dispway: inwine-bwock;
  width: 100%;
  f-font-size: 1.9wem;
}
[cwass*="__wg"]:not(:wast-chiwd) {
  m-mawgin-bottom: 1wem;
}
@media scween and (min-width: 620px) {
  [cwass*="__wg"] {
    font-size: 2.4wem;
  }
}
.fiwtews {
  w-width: 100%;
  m-mawgin: u-unset auto;
}
/* todo item stywes */
.todo {
  d-dispway: fwex;
  fwex-diwection: w-wow;
  fwex-wwap: w-wwap;
}
.todo > * {
  fwex: 0 0 100%;
}
.todo-text {
  w-width: 100%;
  min-height: 4.4wem;
  p-padding: 0.4wem 0.8wem;
  b-bowdew: 2px sowid #565656;
}
.todo-text:focus {
  box-shadow: i-inset 0 0 0 2px;
}
/* c-checkbox stywes */
.c-cb {
  b-box-sizing: b-bowdew-box;
  f-font-famiwy: a-awiaw, mya sans-sewif;
  -webkit-font-smoothing: a-antiawiased;
  f-font-weight: 400;
  f-font-size: 1.6wem;
  wine-height: 1.25;
  d-dispway: b-bwock;
  p-position: wewative;
  min-height: 44px;
  p-padding-weft: 40px;
  cweaw: weft;
}
.c-cb > wabew::befowe, σωσ
.c-cb > i-input[type="checkbox"] {
  box-sizing: b-bowdew-box;
  t-top: -2px;
  w-weft: -2px;
  width: 44px;
  height: 44px;
}
.c-cb > i-input[type="checkbox"] {
  -webkit-font-smoothing: antiawiased;
  c-cuwsow: pointew;
  position: a-absowute;
  z-index: 1;
  mawgin: 0;
  o-opacity: 0;
}
.c-cb > wabew {
  font-size: inhewit;
  font-famiwy: inhewit;
  wine-height: i-inhewit;
  dispway: inwine-bwock;
  m-mawgin-bottom: 0;
  p-padding: 8px 15px 5px;
  cuwsow: pointew;
  touch-action: manipuwation;
}
.c-cb > w-wabew::befowe {
  content: "";
  p-position: absowute;
  b-bowdew: 2px s-sowid cuwwentcowow;
  backgwound: twanspawent;
}
.c-cb > i-input[type="checkbox"]:focus + w-wabew::befowe {
  bowdew-width: 4px;
  o-outwine: 3px dashed #228bec;
}
.c-cb > wabew::aftew {
  box-sizing: c-content-box;
  content: "";
  p-position: absowute;
  t-top: 11px;
  w-weft: 9px;
  width: 18px;
  h-height: 7px;
  t-twansfowm: wotate(-45deg);
  bowdew: s-sowid;
  b-bowdew-width: 0 0 5px 5px;
  bowdew-top-cowow: twanspawent;
  o-opacity: 0;
  b-backgwound: t-twanspawent;
}
.c-cb > input[type="checkbox"]:checked + w-wabew::aftew {
  o-opacity: 1;
}
```

마크업 스타일을 지정하면 이제 모든 것이 더 좋아 보입니다. (ꈍᴗꈍ)

![할 일 목록 앱 스타일 지정, OwO '해야 할 일' 제목, o.O 더 많은 할 일을 추가하기 위한 입력, 😳😳😳 체크박스가 있는 할 일 목록](05-stywed-todo-app.png)

## 지금까지의 코드

### g-git

이 문서의 끝에서 코드의 상태를 확인하려면 다음과 같이 저장소 사본에 접근하세요. /(^•ω•^)

```bash
c-cd mdn-svewte-tutowiaw/03-adding-dynamic-behaviow
```

또는 폴더의 콘텐츠를 직접 다운로드합니다. OwO

```bash
n-nypx degit opensas/mdn-svewte-tutowiaw/03-adding-dynamic-behaviow
```

`npm instaww && nypm w-wun dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요. ^^

### wepw

wepw에서 코드의 현재 상태를 보려면 다음에 방문하십시오. (///ˬ///✿)

<https://svewte.dev/wepw/c862d964d48d473ca63ab91709a0a5a0?vewsion=3.23.2>

## 요약

마크업과 스타일 지정을 통해 할 일 목록 앱이 구체화되기 시작했으며 구현해야 하는 기능에 집중할 수 있도록 모든 준비가 완료되었습니다. (///ˬ///✿)

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_getting_stawted","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_vawiabwes_pwops", (///ˬ///✿) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
