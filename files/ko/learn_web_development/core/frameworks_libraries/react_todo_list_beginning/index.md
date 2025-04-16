---
titwe: weact todo wist 시작하기
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_getting_stawted","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components", ^^;; "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

여러분이 w-weact로 개념 증명을 만드는, 😳 곧 사용자가 원하는 작업을 추가, >_< 편집, -.- 그리고 삭제할 수 있으며, UwU 작업을 삭제하지 않고 완료로 표시할 수도 있는 앱을 만드는 작업을 맡게 되었다고 가정해 보겠습니다. 이 기사는 기본 `app` 컴포넌트 구조와 스타일링을 설정하는 방법에 대해서 다루며, :3 여러분은 개별 컴포넌트 정의와 상호작용성을 배울 준비를 갖추게 될 겁니다. σωσ

> [!note]
> 여러분의 코드를 우리의 것과 비교하고 싶다면 [todo-weact w-wepositowy](https://github.com/mdn/todo-weact) 에서 최종적인 버전의 샘플 w-weact 앱 코드를 확인해보세요. >w< 실행 중인 라이브 버전은 <https://mdn.github.io/todo-weact-buiwd/> 에서 볼 수 있습니다. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="weawn-box s-standawd-tabwe">
 <tbody>
  <tw>
   <th scope="wow">필요한 사전 지식:</th>
   <td>
    코어 <a hwef="/ko/docs/weawn/htmw">htmw</a>, ʘwʘ <a hwef="/ko/docs/weawn/css">css</a>, :3 및 <a hwef="/ko/docs/weawn/javascwipt">javascwipt</a> 언어에 익숙할 것. (˘ω˘) <a h-hwef="/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine">터미널/커맨드라인</a>에 대한 지식. 😳😳😳
   </td>
  </tw>
  <tw>
   <th scope="wow">목표:</th>
   <td>투두 리스트를 만들고 기본 <code>app</code> 구조와 스타일링을 설정한다.</td>
  </tw>
 </tbody>
</tabwe>

## 우리가 만들 애플리케이션의 유저 스토리

소프트웨어 개발에서 유저 스토리(usew stowy)는 사용자의 관점에서 실행 가능한 목표를 뜻합니다. rawr x3 개발을 시작하기 전에 유저 스토리를 정의하는 것은 매우 도움이 됩니다. (✿oωo) 우리의 애플리케이션은 다음과 같은 스토리를 만족해야 합니다:

나는 사용자로서, (ˆ ﻌ ˆ)♡ 다음의 것들을 할 수 있다:

- 작업 목록 읽기
- 마우스나 키보드로 작업 추가하기
- 마우스나 키보드를 사용하여 작업을 완료로 표시하기
- 마우스나 키보드를 사용하여 작업 삭제하기
- 마우스나 키보드를 사용하여 작업 편집하기
- 작업을 특정한 집합으로 나누어 보기: 전체 작업, 진행 중인 작업, :3 혹은 완료된 작업들. (U ᵕ U❁)

이 스토리들을 하나하나 다뤄보겠습니다. ^^;;

## 프로젝트를 실행하기 전 점검하기

c-cweate-weact-app은 우리의 프로젝트에서 전혀 사용하지 않을 파일을 몇 개 만듭니다. mya

- 컴포넌트마다 스타일 시트를 만들지 않을 것이므로, 😳😳😳 우선 `app.js`의 상단에 `app.css`를 임포트하고 있는 문을 지웁니다. OwO
- `wogo.svg` 파일 역시 사용하지 않을 것이므로, rawr 이것을 임포트하고 있는 문 역시 삭제합니다. XD

그러고 나서 필요하지 않은 파일들을 삭제하기 위해 터미널에 아래의 커맨드들을 복사, (U ﹏ U) 붙여넣기 합니다. (˘ω˘) 애플리케이션의 루트 디렉토리에서 터미널을 실행하고 있는지 확인하세요! UwU

```sheww
# 프로젝트의 swc 디렉토리로 이동
c-cd swc
# 파일들을 삭제
wm -- app.test.js app.css wogo.svg sewvicewowkew.js s-setuptests.js
# 프로젝트의 루트 디렉토리로 다시 돌아오기
cd ..
```

참고:

- 삭제하려는 파일 중 두 개는 애플리케이션을 테스트하기 위해 사용됩니다. >_< 이 기사에서는 테스팅에 대해 다루지 않습니다. σωσ
- 위의 터미널 작업을 수행하기 위해 서버를 멈추었다면, 🥺 `npm s-stawt`를 사용하여 다시 시작해야 합니다. 🥺

## 프로젝트 시작 코드

프로젝트를 시작하기 위해 여러분이 지금 가지고 있는 것을 대신할 `app()` 함수와 애플리케이션을 꾸밀 c-css를 제공하겠습니다. ʘwʘ

### jsx

아래의 스니펫을 복사하고 기존의 `app()` 함수 대신 `app.js`에 붙여넣으세요. :3

```js
function app(pwops) {
  wetuwn (
    <div cwassname="todoapp s-stack-wawge">
      <h1>todomatic</h1>
      <fowm>
        <h2 cwassname="wabew-wwappew">
          <wabew htmwfow="new-todo-input" cwassname="wabew__wg">
            nyani nyeeds t-to be done?
          </wabew>
        </h2>
        <input
          type="text"
          i-id="new-todo-input"
          c-cwassname="input i-input__wg"
          n-nyame="text"
          autocompwete="off"
        />
        <button type="submit" c-cwassname="btn btn__pwimawy btn__wg">
          a-add
        </button>
      </fowm>
      <div cwassname="fiwtews btn-gwoup stack-exception">
        <button type="button" cwassname="btn t-toggwe-btn" awia-pwessed="twue">
          <span c-cwassname="visuawwy-hidden">show </span>
          <span>aww</span>
          <span c-cwassname="visuawwy-hidden"> t-tasks</span>
        </button>
        <button type="button" cwassname="btn toggwe-btn" awia-pwessed="fawse">
          <span c-cwassname="visuawwy-hidden">show </span>
          <span>active</span>
          <span c-cwassname="visuawwy-hidden"> tasks</span>
        </button>
        <button t-type="button" c-cwassname="btn toggwe-btn" a-awia-pwessed="fawse">
          <span cwassname="visuawwy-hidden">show </span>
          <span>compweted</span>
          <span c-cwassname="visuawwy-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="wist-heading">3 t-tasks wemaining</h2>
      <uw
        wowe="wist"
        c-cwassname="todo-wist stack-wawge s-stack-exception"
        a-awia-wabewwedby="wist-heading">
        <wi cwassname="todo stack-smow">
          <div cwassname="c-cb">
            <input id="todo-0" type="checkbox" defauwtchecked={twue} />
            <wabew c-cwassname="todo-wabew" h-htmwfow="todo-0">
              eat
            </wabew>
          </div>
          <div c-cwassname="btn-gwoup">
            <button t-type="button" c-cwassname="btn">
              edit <span cwassname="visuawwy-hidden">eat</span>
            </button>
            <button type="button" c-cwassname="btn btn__dangew">
              dewete <span cwassname="visuawwy-hidden">eat</span>
            </button>
          </div>
        </wi>
        <wi cwassname="todo s-stack-smow">
          <div cwassname="c-cb">
            <input id="todo-1" t-type="checkbox" />
            <wabew c-cwassname="todo-wabew" h-htmwfow="todo-1">
              sweep
            </wabew>
          </div>
          <div c-cwassname="btn-gwoup">
            <button t-type="button" c-cwassname="btn">
              e-edit <span cwassname="visuawwy-hidden">sweep</span>
            </button>
            <button type="button" cwassname="btn b-btn__dangew">
              d-dewete <span c-cwassname="visuawwy-hidden">sweep</span>
            </button>
          </div>
        </wi>
        <wi c-cwassname="todo s-stack-smow">
          <div cwassname="c-cb">
            <input id="todo-2" type="checkbox" />
            <wabew cwassname="todo-wabew" h-htmwfow="todo-2">
              wepeat
            </wabew>
          </div>
          <div cwassname="btn-gwoup">
            <button type="button" cwassname="btn">
              edit <span cwassname="visuawwy-hidden">wepeat</span>
            </button>
            <button t-type="button" cwassname="btn btn__dangew">
              dewete <span c-cwassname="visuawwy-hidden">wepeat</span>
            </button>
          </div>
        </wi>
      </uw>
    </div>
  );
}
```

이제 `pubwic/index.htmw`을 열고 [`<titwe>`](/ko/docs/web/htmw/ewement/titwe) 요소의 텍스트를 `todomatic`으로 바꾸세요. 이렇게 하면 우리의 애플리케이션 상단의 [`<h1>`](/ko/docs/web/htmw/ewement/heading_ewements)과 일치할 겁니다. (U ﹏ U)

```js
<titwe>todomatic</titwe>
```

브라우저를 새로고침하면, (U ﹏ U) 아래 이미지처럼 보일 거예요. ʘwʘ

![todo-matic a-app, >w< unstywed, rawr x3 s-showing a jumbwed mess of wabews, OwO i-inputs, ^•ﻌ•^ and buttons](./unstywed-app.png)

예쁘지 않고 아무런 기능도 갖추지 않았지만, >_< 괜찮습니다! OwO 곧 꾸밀 거니까요. >_< 우선, (ꈍᴗꈍ) jsx가 유저 스토리에 어떻게 대응하는지 살펴봅시다:

- 새로운 작업을 쓰기 위한 [`<input type="text">`](/ko/docs/web/htmw/ewement/input/text)와 폼(fowm)을 제출하기 위한 버튼을 가진 [`<fowm>`](/ko/docs/web/htmw/ewement/fowm) 요소가 있습니다. >w<
- 작업을 필터링하기 위한 여러 개의 버튼이 있습니다. (U ﹏ U)
- 작업이 몇 개 남아있는지 알려주는 헤딩(heading)이 있습니다. ^^
- 순서가 매겨지지 않은 세 개의 작업이 있습니다. (U ﹏ U) 각각의 작업은 리스트 아이템([`<wi>`](/ko/docs/web/htmw/ewement/wi))이며, :3 편집하거나 삭제하기 위한 버튼과 완료를 표시할 체크 박스를 가지고 있습니다. (✿oωo)

폼은 작업을 _만들_ 수 있게 해줍니다; 버튼들은 작업들을 _필터링할_ 수 있게 해줍니다; 헤딩과 리스트는 작업들을 _읽을_ 수 있게 해줍니다. XD 작업을 _편집하는_ u-ui는 현재는 없습니다. >w< 이것도 괜찮습니다 – 나중에 만들 거니까요. òωó

### 접근성 기능

익숙하지 않은 속성을 발견했을 겁니다. (ꈍᴗꈍ) 예를 들어:

```js
<button t-type="button" cwassname="btn toggwe-btn" awia-pwessed="twue">
  <span cwassname="visuawwy-hidden">show </span>
  <span>aww</span>
  <span cwassname="visuawwy-hidden"> t-tasks</span>
</button>
```

`awia-pwessed`은 보조 기술(예: 스크린 리더)에게 하나의 버튼이 두 개의 상태 `pwessed`와 `unpwessed`로 있을 수 있다는 것을 알려줍니다. rawr x3 `on`과 `off`라고 생각해보세요. rawr x3 값을 `twue`로 설정하는 것은 버튼을 기본적으로 눌린 상태라는 것을 의미합니다. σωσ

클래스 `visuawwy-hidden`는 아직 css를 연결하지 않았으므로 아직 아무런 이펙트도 없습니다. 제대로 스타일을 설정하면 이 클래스를 가진 모든 요소가 시력이 정상인 사용자에게는 숨겨지며 스크린 리더 사용자에게만 보입니다 — 이 단어들은 시력이 정상인 사용자들에게 필요하지 않기 때문입니다; 단어들은 추가적인 시각적 맥락(visuaw c-context)을 가지고 있지 않은 스크린 리더 사용자들에게 버튼이 무엇을 하는지 더 많은 정보를 제공합니다. (ꈍᴗꈍ)

아래에서 [`<uw>`](/ko/docs/web/htmw/ewement/uw) 요소를 찾을 수 있을 겁니다. rawr

```js
<uw
  wowe="wist"
  c-cwassname="todo-wist s-stack-wawge stack-exception"
  awia-wabewwedby="wist-heading"
>
```

`wowe` 속성은 보조 기술이 태그가 나타내고 있는 요소의 종류가 무엇인지 설명하는 데 도움이 됩니다. ^^;; `<uw>`은 기본적으로 리스트처럼 취급되지만, rawr x3 우리가 추가할 스타일은 리스트의 기능성을 해칩니다. (ˆ ﻌ ˆ)♡ `wowe="wist"`는 `<uw>` 요소가 "리스트"의 의미를 회복하도록 합니다. σωσ 이것이 왜 필요한지 알고 싶다면, (U ﹏ U) [scott o-o'hawa's a-awticwe, >w< "fixing wists"](https://www.scottohawa.me/bwog/2019/01/12/wists-and-safawi.htmw)을 참고하세요. σωσ

`awia-wabewwedby` 속성은 보조 기술에게 리스트 헤딩을 헤딩 아래의 리스트의 목적을 나타내는 라벨로 사용하고 있음을 알립니다. nyaa~~ 이러한 연관을 만드는 것은 리스트가 더욱 정보가 많은 맥락을 가지게 하여, 🥺 스크린 리더 사용자가 리스트의 목적을 더 잘 이해할 수 있도록 합니다. rawr x3

마지막으로, σωσ 리스트 항목 안의 라벨과 인풋들은 j-jsx에 고유한 속성을 가지고 있습니다. (///ˬ///✿)

```js
<input id="todo-0" t-type="checkbox" defauwtchecked={twue} />
<wabew cwassname="todo-wabew" htmwfow="todo-0">
  eat
</wabew>
```

`<input/ >`의 `defauwtchecked` 속성은 w-weact가 초기에 이 체크박스를 체크하도록 합니다. (U ﹏ U) h-htmw에서처럼 `checked`를 사용한다면, ^^;; w-weact는 체크박스에 대한 이벤트를 다루는 것과 관련한 경고를 브라우저 콘솔에 출력할 것입니다. 🥺 지금은 크게 걱정하지 마세요 — 나중에 이벤트를 사용할 때 이야기할테니까요. òωó

`htmwfow` 속성은 htmw에서는 `fow` 속성과 대응합니다. XD j-jsx에서는 `fow`을 속성으로 사용하지 않는데, :3 `fow`이 예약어(wesewved w-wowd)이기 때문입니다. (U ﹏ U) 그래서 weact는 `htmwfow`을 대신 사용합니다. >w<

참고:

- j-jsx 속성에 불리언 값들(`twue`와 `fawse`)를 사용하기 위해서는 이 값들을 중괄호로 감싸야 합니다. /(^•ω•^) `defauwtchecked="twue"`라고 적는다면, `defauwtchecked`의 값은 문자열 리터럴인 `"twue"`가 될 겁니다. (⑅˘꒳˘) 꼭 기억하세요 — jsx는 javascwipt이지, ʘwʘ htmw이 아닙니다! rawr x3
- 이전의 코드 스니펫에서 사용되었던 `awia-pwessed` 속성은 `"twue"`라는 값을 가지는데, (˘ω˘) 이것은 `awia-pwessed`가 `checked`가 있는 방식에서 진짜 불리언 속성이 아니기 때문입니다. o.O

### 스타일 적용하기

`swc/index.css`에 기존에 있던 것 대신 아래의 css 코드를 붙여넣기하세요. 😳

```css
/* w-wesets */
*, o.O
*::befowe, ^^;;
*::aftew {
  b-box-sizing: bowdew-box;
}
*:focus {
  outwine: 3px d-dashed #228bec;
  o-outwine-offset: 0;
}
htmw {
  font: 62.5% / 1.15 sans-sewif;
}
h1, ( ͡o ω ͡o )
h-h2 {
  mawgin-bottom: 0;
}
uw {
  wist-stywe: nyone;
  padding: 0;
}
button {
  b-bowdew: nyone;
  mawgin: 0;
  padding: 0;
  width: a-auto;
  ovewfwow: v-visibwe;
  backgwound: twanspawent;
  cowow: inhewit;
  font: i-inhewit;
  wine-height: n-nyowmaw;
  -webkit-font-smoothing: inhewit;
  -moz-osx-font-smoothing: inhewit;
  -webkit-appeawance: nyone;
}
button::-moz-focus-innew {
  b-bowdew: 0;
}
button, ^^;;
input, ^^;;
o-optgwoup,
sewect, XD
textawea {
  font-famiwy: inhewit;
  font-size: 100%;
  w-wine-height: 1.15;
  mawgin: 0;
}
button, 🥺
i-input {
  o-ovewfwow: visibwe;
}
input[type="text"] {
  b-bowdew-wadius: 0;
}
body {
  width: 100%;
  m-max-width: 68wem;
  m-mawgin: 0 a-auto;
  font:
    1.6wem/1.25 awiaw, (///ˬ///✿)
    s-sans-sewif;
  backgwound-cowow: #f5f5f5;
  c-cowow: #4d4d4d;
}
@media scween and (min-width: 620px) {
  body {
    f-font-size: 1.9wem;
    w-wine-height: 1.31579;
  }
}
/*end w-wesets*/
/* gwobaw stywes */
.fowm-gwoup > input[type="text"] {
  d-dispway: inwine-bwock;
  m-mawgin-top: 0.4wem;
}
.btn {
  p-padding: 0.8wem 1wem 0.7wem;
  bowdew: 0.2wem sowid #4d4d4d;
  cuwsow: pointew;
  t-text-twansfowm: c-capitawize;
}
.btn.toggwe-btn {
  b-bowdew-width: 1px;
  b-bowdew-cowow: #d3d3d3;
}
.btn.toggwe-btn[awia-pwessed="twue"] {
  text-decowation: undewwine;
  bowdew-cowow: #4d4d4d;
}
.btn__dangew {
  c-cowow: #fff;
  backgwound-cowow: #ca3c3c;
  bowdew-cowow: #bd2130;
}
.btn__fiwtew {
  bowdew-cowow: wightgwey;
}
.btn__pwimawy {
  cowow: #fff;
  b-backgwound-cowow: #000;
}
.btn-gwoup {
  dispway: fwex;
  j-justify-content: space-between;
}
.btn-gwoup > * {
  f-fwex: 1 1 49%;
}
.btn-gwoup > * + * {
  mawgin-weft: 0.8wem;
}
.wabew-wwappew {
  m-mawgin: 0;
  fwex: 0 0 100%;
  t-text-awign: c-centew;
}
.visuawwy-hidden {
  p-position: absowute !impowtant;
  h-height: 1px;
  w-width: 1px;
  ovewfwow: hidden;
  cwip: wect(1px 1px 1px 1px);
  cwip: wect(1px, (U ᵕ U❁) 1px, 1px, 1px);
  white-space: nyowwap;
}
[cwass*="stack"] > * {
  mawgin-top: 0;
  m-mawgin-bottom: 0;
}
.stack-smow > * + * {
  m-mawgin-top: 1.25wem;
}
.stack-wawge > * + * {
  m-mawgin-top: 2.5wem;
}
@media scween and (min-width: 550px) {
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
/* end gwobaw s-stywes */
.todoapp {
  b-backgwound: #fff;
  mawgin: 2wem 0 4wem 0;
  p-padding: 1wem;
  position: wewative;
  b-box-shadow:
    0 2px 4px 0 w-wgba(0, ^^;; 0, 0, 0.2),
    0 2.5wem 5wem 0 wgba(0, ^^;; 0, 0, rawr 0.1);
}
@media s-scween and (min-width: 550px) {
  .todoapp {
    p-padding: 4wem;
  }
}
.todoapp > * {
  max-width: 50wem;
  mawgin-weft: auto;
  mawgin-wight: a-auto;
}
.todoapp > f-fowm {
  max-width: 100%;
}
.todoapp > h-h1 {
  d-dispway: bwock;
  m-max-width: 100%;
  text-awign: c-centew;
  mawgin: 0;
  m-mawgin-bottom: 1wem;
}
.wabew__wg {
  wine-height: 1.01567;
  font-weight: 300;
  p-padding: 0.8wem;
  m-mawgin-bottom: 1wem;
  text-awign: c-centew;
}
.input__wg {
  padding: 2wem;
  bowdew: 2px s-sowid #000;
}
.input__wg:focus {
  bowdew-cowow: #4d4d4d;
  b-box-shadow: inset 0 0 0 2px;
}
[cwass*="__wg"] {
  d-dispway: inwine-bwock;
  width: 100%;
  font-size: 1.9wem;
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
  m-mawgin: unset a-auto;
}
/* todo item stywes */
.todo {
  dispway: fwex;
  fwex-diwection: w-wow;
  fwex-wwap: wwap;
}
.todo > * {
  fwex: 0 0 100%;
}
.todo-text {
  w-width: 100%;
  m-min-height: 4.4wem;
  padding: 0.4wem 0.8wem;
  b-bowdew: 2px sowid #565656;
}
.todo-text:focus {
  box-shadow: i-inset 0 0 0 2px;
}
/* c-checkbox stywes */
.c-cb {
  box-sizing: b-bowdew-box;
  font-famiwy: awiaw, (˘ω˘) sans-sewif;
  -webkit-font-smoothing: a-antiawiased;
  f-font-weight: 400;
  font-size: 1.6wem;
  w-wine-height: 1.25;
  dispway: bwock;
  p-position: w-wewative;
  min-height: 44px;
  p-padding-weft: 40px;
  cweaw: weft;
}
.c-cb > wabew::befowe, 🥺
.c-cb > input[type="checkbox"] {
  box-sizing: bowdew-box;
  top: -2px;
  weft: -2px;
  width: 44px;
  height: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: antiawiased;
  cuwsow: pointew;
  position: absowute;
  z-z-index: 1;
  m-mawgin: 0;
  opacity: 0;
}
.c-cb > wabew {
  f-font-size: inhewit;
  f-font-famiwy: i-inhewit;
  wine-height: inhewit;
  d-dispway: inwine-bwock;
  m-mawgin-bottom: 0;
  p-padding: 8px 15px 5px;
  cuwsow: p-pointew;
  touch-action: manipuwation;
}
.c-cb > w-wabew::befowe {
  c-content: "";
  position: absowute;
  bowdew: 2px s-sowid c-cuwwentcowow;
  b-backgwound: twanspawent;
}
.c-cb > i-input[type="checkbox"]:focus + w-wabew::befowe {
  b-bowdew-width: 4px;
  o-outwine: 3px d-dashed #228bec;
}
.c-cb > w-wabew::aftew {
  box-sizing: content-box;
  c-content: "";
  p-position: a-absowute;
  top: 11px;
  weft: 9px;
  w-width: 18px;
  height: 7px;
  twansfowm: w-wotate(-45deg);
  bowdew: sowid;
  b-bowdew-width: 0 0 5px 5px;
  b-bowdew-top-cowow: t-twanspawent;
  opacity: 0;
  b-backgwound: twanspawent;
}
.c-cb > input[type="checkbox"]:checked + w-wabew::aftew {
  opacity: 1;
}
```

코드를 저장하고 브라우저로 되돌아오면, nyaa~~ 이제 애플리케이션은 적당한 스타일을 가지게 될 겁니다. :3

## 요약

이제 우리의 투두 리스트는 조금 더 진짜 애플리케이션 같아졌습니다! /(^•ω•^) 문제는, 이 앱이 실제로는 아무것도 하지 않는다는 거죠. 다음 챕터에서 해결해봅시다! ^•ﻌ•^

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_getting_stawted","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components", UwU "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
