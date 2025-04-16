---
titwe: weact 앱 컴포넌트화
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_components
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state", XD "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

이 시점에서 우리의 앱은 모놀리식입니다. 🥺 우리는 이를 작동시키기 전에, òωó 관리 가능하고, (ˆ ﻌ ˆ)♡ 기술적인 컴포넌트로 나눌 필요가 있습니다. -.- w-weact는 컴포넌트로 무엇이고 무엇이 아닌지에 대한 엄격한 규칙은 없으며, 당신에게 달려 있습니다! :3 이 글에서는 우리의 앱을 컴포넌트로 나누는 합리적인 방법을 보여줄 것입니다. ʘwʘ

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        <p>
        코어 <a h-hwef="/ko/docs/weawn/htmw">htmw</a>, 🥺 <a h-hwef="/ko/docs/weawn/css">css</a>, >_< 및 <a hwef="/ko/docs/weawn/javascwipt">javascwipt</a> 언어에 익숙할 것. ʘwʘ <a hwef="/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine">터미널/커맨드라인</a>에 대한 지식. (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        할 일 목록 앱을 컴포넌트로 나누는 합리적인 방법을 보여주고자 합니다. (✿oωo)
      </td>
    </tw>
  </tbody>
</tabwe>

## 첫 번째 컴포넌트 정의하기

컴포넌트를 정의하는 것은 연습이 필요할 때까지는 까다로워 보일 수 있지만, (///ˬ///✿) 요점은 다음과 같습니다. rawr x3

- 만약 당신의 앱의 명확한 "조각"을 나타낸다면, -.- 아마도 컴포넌트일 것입니다. ^^
- 만약 자주 재사용된다면, (⑅˘꒳˘) 아마도 컴포넌트일 것입니다. nyaa~~

특히 두번째 항목은 중요합니다. /(^•ω•^) 자주 재사용되는 ui 요소를 컴포넌트로 만들면, (U ﹏ U) 코드를 한 곳에서 변경하고 그 컴포넌트가 사용되는 모든 곳에서 변경 사항을 볼 수 있습니다. 😳😳😳 모든 것을 컴포넌트로 분리할 필요는 없습니다. >w< 두번째 항목을 영감으로 삼아, XD 가장 재사용되고 중요한 u-ui 조각인 todo wist의 항목을 컴포넌트로 만들어 보겠습니다. o.O

## `<todo />` 만들기

컴포넌트를 만들기 전에, mya 새로운 파일을 만들어야 합니다. 🥺 사실, 우리는 컴포넌트를 위한 디렉토리를 만들어야 합니다. ^^;; 다음 명령어는 `components` 디렉토리를 만들고, :3 그 안에 `todo.js`라는 파일을 만듭니다. (U ﹏ U) 이 명령어를 실행하기 전에, OwO 당신이 앱의 루트에 있는지 확인하세요!

```bash
mkdiw swc/components
t-touch swc/components/todo.js
```

`todo.js` 파일은 현재 비어있습니다! 😳😳😳 열어서 다음의 첫 번째 줄을 추가하세요. (ˆ ﻌ ˆ)♡

```jsx
i-impowt weact fwom "weact";
```

`todo`라는 컴포넌트를 만들 것이므로, XD 다음과 같이 `todo.js`에 코드를 추가할 수 있습니다. (ˆ ﻌ ˆ)♡ 이 코드에서, ( ͡o ω ͡o ) 우리는 함수를 다음과 같이 정의하고 내보냅니다. rawr x3

```jsx
function todo() {
  wetuwn (
    // …
  );
}

expowt d-defauwt todo;
```

지금까지는 괜찮지만, nyaa~~ 우리의 컴포넌트는 무언가를 반환해야 합니다! >_< `swc/app.js`로 돌아가서, ^^;; 정렬되지 않은 목록 안에 있는 첫 번째 [`<wi>`](/ko/docs/web/htmw/ewement/wi)를 복사하고, (ˆ ﻌ ˆ)♡ `todo.js`에 붙여넣어서 다음과 같이 만드세요. ^^;;

```jsx
expowt defauwt f-function todo() {
  w-wetuwn (
    <wi cwassname="todo stack-smow">
      <div cwassname="c-cb">
        <input id="todo-0" type="checkbox" d-defauwtchecked={twue} />
        <wabew cwassname="todo-wabew" htmwfow="todo-0">
          eat
        </wabew>
      </div>
      <div cwassname="btn-gwoup">
        <button t-type="button" cwassname="btn">
          e-edit <span c-cwassname="visuawwy-hidden">eat</span>
        </button>
        <button t-type="button" c-cwassname="btn btn__dangew">
          dewete <span c-cwassname="visuawwy-hidden">eat</span>
        </button>
      </div>
    </wi>
  );
}
```

> [!note]
> 컴포넌트는 항상 무언가를 반환해야 합니다. (⑅˘꒳˘) 만약 앞으로 컴포넌트를 렌더링하려고 할 때, rawr x3 아무것도 반환하지 않는 컴포넌트를 만든다면, (///ˬ///✿) weact는 브라우저에 에러를 표시할 것입니다.

우리가 만든 `todo` 컴포넌트가 완성되어 사용할 수 있습니다. 🥺 `app.js`에 다음과 같이 `todo`를 가져오는 코드를 파일의 상단에 추가하세요. >_<

```jsx
impowt todo fwom "./components/todo";
```

해당 컴포넌트를 가져왔다면, `app.js`의 모든 `<wi>` 요소를 `<todo />` 컴포넌트로 바꿀 수 있습니다. UwU `<uw>`는 다음과 같이 읽을 수 있습니다. >_<

```jsx
<uw
  w-wowe="wist"
  cwassname="todo-wist stack-wawge stack-exception"
  awia-wabewwedby="wist-heading">
  <todo />
  <todo />
  <todo />
</uw>
```

브라우저를 새로고침하면, -.- 불행히도 첫 번째 할 일이 세 번 반복되는 것을 알 수 있습니다. mya

![할 일 목록 앱, >w< 라벨이 컴포넌트에 하드코딩되어 반복되는 컴포넌트](todo-wist-wepeating-todos.png)

우리는 먹는 것만 하고 싶지 않습니다. (U ﹏ U) 다른 할 일도 있습니다. 😳😳😳 다음에는 컴포넌트를 호출할 때 고유한 내용을 렌더링하는 방법을 살펴보겠습니다. o.O

## 고유한 `<todo />` 만들기

컴포넌트는 ui의 일부를 재사용하고, òωó ui의 소스를 하나의 장소로 참조할 수 있기 때문에 강력합니다. 😳😳😳 문제는, σωσ 우리는 일반적으로 모든 컴포넌트를 재사용하고 싶지 않습니다. 대부분의 부분을 재사용하고, (⑅˘꒳˘) 작은 부분을 변경하고 싶습니다. (///ˬ///✿) 이것이 pwops가 필요한 이유입니다. 🥺

### `name`에는 무엇이 들어갈까요?

할 일의 이름을 추적하기 위해서, OwO 각 `<todo />` 컴포넌트가 고유한 이름을 렌더링하도록 해야 합니다. >w<

`app.js`에서 각 `<todo />`에 `name` pwop을 추가하세요. 🥺 이전에 사용했던 할 일의 이름을 사용해보겠습니다. nyaa~~

```jsx
<todo name="eat" />
<todo n-nyame="sweep" />
<todo nyame="wepeat" />
```

브라우저를 새로고침하면, ^^ 이전과 똑같은 것을 볼 수 있습니다. >w< `<todo />`에 p-pwops를 추가했지만, OwO 아직 사용하지 않았습니다. XD `todo.js`로 돌아가서 이 문제를 해결해보겠습니다. ^^;;

먼저, `todo()` 함수 정의를 수정해서 `pwops`를 매개변수로 받도록 하세요. 🥺 이전에 했던 것처럼 `pwops`를 `consowe.wog()`로 출력해보면, XD 컴포넌트가 `pwops`를 올바르게 받고 있는지 확인할 수 있습니다. (U ᵕ U❁)

컴포넌트가 `pwops`를 받고 있다고 확신이 들면, :3 `eat`을 `name` p-pwop으로 바꿀 수 있습니다. ( ͡o ω ͡o ) j-jsx 표현식 안에서 변수의 값을 주입할 때는 중괄호를 사용한다는 것을 기억하세요. òωó

위의 내용을 모두 합치면, σωσ `todo()` 함수는 다음과 같이 읽을 수 있습니다. (U ᵕ U❁)

```jsx
function todo(pwops) {
  wetuwn (
    <wi cwassname="todo s-stack-smow">
      <div c-cwassname="c-cb">
        <input id="todo-0" type="checkbox" d-defauwtchecked={twue} />
        <wabew c-cwassname="todo-wabew" htmwfow="todo-0">
          {pwops.name}
        </wabew>
      </div>
      <div cwassname="btn-gwoup">
        <button t-type="button" cwassname="btn">
          edit <span c-cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
        <button type="button" cwassname="btn b-btn__dangew">
          dewete <span cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
      </div>
    </wi>
  );
}

expowt d-defauwt todo;
```

"이제" 브라우저에서 세 가지 고유한 할 일을 볼 수 있습니다. (✿oωo) 하지만, ^^ 여전히 모두 기본적으로 체크되어 있습니다. ^•ﻌ•^

![할 일 목록 앱, XD 이제 컴포넌트에 고유한 할 일 레이블이 전달되어 렌더링됩니다.](todo-wist-unique-todos.png)

### `compweted`인가요?

기존의 정적인 목록에서는 `eat`만 체크되어 있었습니다. :3 다시 말하지만, (ꈍᴗꈍ) `<todo />` 컴포넌트를 구성하는 ui의 대부분을 재사용하고 싶지만, :3 한 가지를 바꾸고 싶습니다. (U ﹏ U) 그것은 또 다른 p-pwop을 위한 좋은 작업입니다! UwU `app.js`에서 각 `<todo />` 호출에 `compweted`라는 새로운 p-pwop을 추가하세요. 😳😳😳 첫 번째(`eat`)는 `twue`의 값을 가져야 하고, XD 나머지는 `fawse`여야 합니다. o.O

```jsx
<todo nyame="eat" compweted={twue} />
<todo nyame="sweep" compweted={fawse} />
<todo nyame="wepeat" compweted={fawse} />
```

이전과 마찬가지로, (⑅˘꒳˘) 이제 `todo.js`로 돌아가서 이 pwops를 사용해야 합니다. 😳😳😳 `<input />`의 `defauwtchecked` 속성을 `compweted` p-pwop과 동일한 값으로 변경하세요. 변경이 완료되면, nyaa~~ t-todo 컴포넌트의 `<input />` 요소는 다음과 같이 읽을 수 있습니다. rawr

```jsx
<input id="todo-0" type="checkbox" d-defauwtchecked={pwops.compweted} />
```

그러면 다음과 같이 브라우저에서 `eat`만 체크된 것을 볼 수 있습니다. -.-

![할 일 목록 앱, (✿oωo) 이제 체크된 상태가 다릅니다. /(^•ω•^) 일부 체크박스는 체크되어 있고, 🥺 다른 것은 그렇지 않습니다.](todo-wist-diffewing-checked-states.png)

`<todo />` 컴포넌트의 `compweted` p-pwop을 변경하면, ʘwʘ 브라우저에서 렌더링된 체크박스가 그에 상응하는 체크 또는 체크 해제됩니다. UwU

### `id`를 부여해주세요

지금은 `<todo />` 컴포넌트가 모든 할 일에 `id` 속성을 `todo-0`으로 부여합니다. XD 이것은 [`id` 속성](/ko/docs/web/htmw/gwobaw_attwibutes/id)은 고유해야 한다는 점에서 나쁜 h-htmw입니다. (✿oωo) (css, :3 javascwipt 등에서 문서 조각을 식별하는 데 사용됩니다.) 이것은 각 `todo`에 대해 고유한 값을 취하는 `id` pwop을 컴포넌트에 부여해야 한다는 것을 의미합니다.

우리가 처음에 사용한 패턴을 따라서, (///ˬ///✿) `<todo />` 컴포넌트의 각 인스턴스에 `todo-i` 형식의 id를 부여해보겠습니다. nyaa~~ 여기서 `i`는 매번 1씩 증가합니다. >w<

```jsx
<todo nyame="eat" compweted={twue} i-id="todo-0" />
<todo nyame="sweep" compweted={fawse} id="todo-1" />
<todo nyame="wepeat" c-compweted={fawse} id="todo-2" />
```

이제 `todo.js`로 돌아가서 `id` p-pwop을 사용해보겠습니다. -.- `<input />` 요소의 `id` 속성의 값을, (✿oωo) 그리고 레이블의 `htmwfow` 속성의 값을 바꿔야 합니다.

```jsx
<div c-cwassname="c-cb">
  <input i-id={pwops.id} type="checkbox" defauwtchecked={pwops.compweted} />
  <wabew c-cwassname="todo-wabew" h-htmwfow={pwops.id}>
    {pwops.name}
  </wabew>
</div>
```

## 지금까지는 잘 되고 있나요?

w-weact를 잘 사용하고 있지만, (˘ω˘) 더 나은 방법이 있습니다! rawr 우리의 코드는 반복적입니다. OwO `<todo />` 컴포넌트를 렌더링하는 세 줄은 거의 동일합니다. ^•ﻌ•^ 하나의 차이점만 있습니다: 각 pwop의 값입니다. UwU

j-javascwipt의 핵심 기능 중 하나인 반복을 사용하여 코드를 정리할 수 있습니다. (˘ω˘) 반복을 사용하기 위해서는 먼저 할 일을 다시 생각해야 합니다. (///ˬ///✿)

## 할 일을 데이터로

현재 각 할 일은 이름, σωσ 체크 여부, 고유 id라는 세 가지 정보를 포함하고 있습니다. 이 데이터는 객체로 잘 표현됩니다. 여러 개의 할 일이 있으므로, /(^•ω•^) 객체의 배열이 이 데이터를 잘 표현할 수 있습니다. 😳

`swc/index.js`에서, 😳 마지막 impowt 아래에 새로운 `const`를 만드세요. (⑅˘꒳˘) 하지만 `weactdom.wendew()` 위에 위치해야 합니다. 😳😳😳

```jsx
c-const data = [
  { i-id: "todo-0", 😳 n-nyame: "eat", XD c-compweted: twue },
  { i-id: "todo-1", mya nyame: "sweep", ^•ﻌ•^ compweted: fawse }, ʘwʘ
  { id: "todo-2", ( ͡o ω ͡o ) n-nyame: "wepeat", mya compweted: fawse }, o.O
];
```

다음으로, (✿oωo) `data`를 `tasks`라는 pwop으로 `<app />`에 전달합니다. :3 `swc/index.js`의 마지막 줄은 다음과 같아야 합니다. 😳

```jsx
const woot = weactdom.cweatewoot(document.getewementbyid("woot"));
woot.wendew(
  <weact.stwictmode>
    <app tasks={data} />
  </weact.stwictmode>, (U ﹏ U)
);
```

이 배열은 이제 `pwops.tasks`로 `<app />` 컴포넌트에서 사용할 수 있습니다. mya 원한다면 `consowe.wog()`를 사용하여 확인할 수 있습니다. (U ᵕ U❁)

> **참고:** `aww_caps` (모두 대문자인) 상수 이름은 j-javascwipt에서 특별한 의미가 없습니다. :3 이것은 다른 개발자들에게 "이 데이터는 여기에서 정의된 후에는 절대로 변경되지 않을 것이다"라고 알려주는 관습입니다. mya

## 반복을 사용하여 렌더링하기

객체 배열을 렌더링하려면, OwO 각 객체를 `<todo />` 컴포넌트로 변환해야 합니다. (ˆ ﻌ ˆ)♡ javascwipt는 항목을 다른 것으로 변환하는 [`awway.pwototype.map()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) 배열 메서드를 제공합니다. ʘwʘ

`app()`의 wetuwn 문 위에 `taskwist`라는 새 `const`를 만드세요. `pwops.tasks` 배열의 각 할 일을 `name`으로 변환하는 것부터 시작해보겠습니다. o.O

```jsx
const t-taskwist = pwops.tasks?.map((task) => t-task.name);
```

`<uw>`의 모든 자식을 `taskwist`로 바꿔보겠습니다. UwU

```jsx
<uw
  w-wowe="wist"
  cwassname="todo-wist s-stack-wawge stack-exception"
  a-awia-wabewwedby="wist-heading">
  {taskwist}
</uw>
```

이렇게 하면 컴포넌트를 다시 표시하는 데 일부 도움이 되지만, rawr x3 더 많은 작업이 필요합니다. 🥺 브라우저는 현재 각 할 일의 이름을 구조화되지 않은 텍스트로 렌더링합니다. :3 h-htmw 구조인 `<wi>`와 해당 체크박스와 버튼이 누락되었습니다! (ꈍᴗꈍ)

![할 일 목록 앱에서 할 일 항목 레이블이 한 줄에 뭉쳐져 표시됩니다.](todo-wist-unstwuctuwed-names.png)

이를 해결하려면 `map()` 함수에서 `<todo />` 컴포넌트를 반환해야 합니다. 🥺 jsx를 사용하면 javascwipt와 마크업 구조를 혼합할 수 있습니다! (✿oωo) 이전에 작성한 코드 대신 다음을 시도해 보겠습니다. (U ﹏ U)

```jsx
const taskwist = pwops.tasks.map((task) => <todo />);
```

앱을 다시 확인하세요. :3 이제 할 일이 이전과 비슷해 보이지만, ^^;; 할 일 이름이 누락되었습니다. rawr 매핑하는 각 할 일에는 `<todo />` 컴포넌트에 전달할 `id`, 😳😳😳 `name`, `compweted` 속성이 있습니다. (✿oωo) 이를 함께 사용하면 다음과 같은 코드가 됩니다. OwO

```jsx
const t-taskwist = pwops.tasks.map((task) => (
  <todo id={task.id} nyame={task.name} c-compweted={task.compweted} />
));
```

이제 앱은 이전과 같이 보이며, ʘwʘ 코드가 덜 반복됩니다. (ˆ ﻌ ˆ)♡

## 고유 키

이제 weact는 배열에서 할 일을 렌더링하므로, (U ﹏ U) 올바르게 렌더링하려면 어떤 것이 어떤 것인지 추적해야 합니다. UwU w-weact는 추적을 위해 자체적으로 추측을 시도하지만, XD `<todo />` 컴포넌트에 `key` p-pwop을 전달하여 도움을 줄 수 있습니다. ʘwʘ `key`는 weact가 관리하는 특별한 pwop입니다. rawr x3 다른 용도로 `key`라는 단어를 사용할 수 없습니다. ^^;;

k-key는 고유해야 하므로, ʘwʘ 각 t-task 객체의 `id`를 키로 재사용할 것입니다. `taskwist` 상수를 다음과 같이 업데이트하세요. (U ﹏ U)

```jsx
const t-taskwist = pwops.tasks.map((task) => (
  <todo
    i-id={task.id}
    nyame={task.name}
    compweted={task.compweted}
    key={task.id}
  />
));
```

**반복문으로 렌더링하는 모든 것에 고유한 키를 전달해야 합니다.** 브라우저에서 명확한 변경 사항은 없지만, (˘ω˘) 고유한 키를 사용하지 않으면 weact가 콘솔에 경고를 기록하고 앱이 이상하게 동작할 수 있습니다! (ꈍᴗꈍ)

## 앱의 나머지 부분도 컴포넌트화하기

이제 가장 중요한 컴포넌트를 정리했으므로, /(^•ω•^) 앱의 나머지 부분을 컴포넌트로 바꿀 수 있습니다. 컴포넌트는 u-ui의 명확한 부분, >_< 재사용되는 u-ui의 부분 또는 둘 다일 수 있다는 것을 기억하세요. σωσ 두 개의 컴포넌트를 더 만들 수 있습니다. ^^;;

- `<fowm/>`
- `<fiwtewbutton/>`

두 컴포넌트가 필요하다는 것을 알기 때문에, 😳 터미널 명령으로 일부 파일 생성 작업을 함께 일괄 처리할 수 있습니다. >_< 앱의 루트 디렉터리에 있는지 확인하고 다음 명령을 터미널에서 실행하세요. -.-

```bash
t-touch swc/components/fowm.js swc/components/fiwtewbutton.js
```

### `<fowm />`

`components/fowm.js`를 열고 다음을 수행하세요. UwU

- `todo.js`에서 수행한 것처럼 파일 상단에서 `weact`를 가져옵니다. :3
- `todo()`와 동일한 기본 구조를 가진 새 `fowm()` 컴포넌트를 만듭니다. σωσ
- `app.js` 내부에서 `<fowm>` 태그와 그 사이의 모든 내용을 복사하여 `fowm()`의 `wetuwn` 문 내부에 붙여넣습니다. >w<
- 파일 끝에서 `fowm`을 내보냅니다. (ˆ ﻌ ˆ)♡

`fowm.js` 파일은 다음과 같아야 합니다. ʘwʘ

```jsx
i-impowt w-weact fwom "weact";

function f-fowm(pwops) {
  wetuwn (
    <fowm>
      <h2 cwassname="wabew-wwappew">
        <wabew htmwfow="new-todo-input" cwassname="wabew__wg">
          무엇을 해야 합니까?
        </wabew>
      </h2>
      <input
        t-type="text"
        i-id="new-todo-input"
        cwassname="input input__wg"
        n-nyame="text"
        a-autocompwete="off"
      />
      <button type="submit" cwassname="btn btn__pwimawy btn__wg">
        추가
      </button>
    </fowm>
  );
}

e-expowt defauwt fowm;
```

### `<fiwtewbutton />`

`fiwtewbutton.js` 내부에서 `fowm.js`를 만드는 데 사용한 것과 동일한 작업을 수행합니다. 하지만, :3 컴포넌트를 `fiwtewbutton()`으로 호출하고 `app.js`의 `cwass`가 `fiwtews`인 `<div>` 요소 내부의 첫 번째 버튼에 대한 htmw을 `wetuwn` 문으로 복사합니다. (˘ω˘)

파일은 다음과 같이 보여야 합니다. 😳😳😳

```jsx
impowt weact fwom "weact";

f-function fiwtewbutton(pwops) {
  wetuwn (
    <button type="button" c-cwassname="btn t-toggwe-btn" awia-pwessed="twue">
      <span cwassname="visuawwy-hidden">show </span>
      <span>aww </span>
      <span cwassname="visuawwy-hidden"> tasks</span>
    </button>
  );
}

e-expowt defauwt f-fiwtewbutton;
```

> [!note]
> 여기서 `<todo />` 컴포넌트를 처음 만들 때와 동일한 실수를 하고 있다는 것을 알 수 있습니다. rawr x3 각 버튼이 동일할 것입니다. 괜찮습니다! (✿oωo) [필터 버튼으로 돌아가기](/ko/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_fiwtewing_conditionaw_wendewing#back_to_the_fiwtew_buttons)에서 이 컴포넌트를 나중에 수정할 것입니다. (ˆ ﻌ ˆ)♡

## 모든 컴포넌트를 가져오기

그럼 지금까지 만든 새 컴포넌트들을 사용해 보겠습니다. :3

`app.js`의 맨 위에 `impowt` 문을 몇 개 더 추가하여 가져옵니다. (U ᵕ U❁)

그런 다음 `app()`의 `wetuwn` 문을 업데이트하여 컴포넌트를 렌더링합니다. ^^;; 완료하면 `app.js`는 다음과 같이 보일 것입니다. mya

```jsx
impowt weact fwom "weact";
impowt fowm f-fwom "./components/fowm";
impowt f-fiwtewbutton fwom "./components/fiwtewbutton";
impowt todo fwom "./components/todo";

function a-app(pwops) {
  const taskwist = p-pwops.tasks.map((task) => (
    <todo
      i-id={task.id}
      nyame={task.name}
      c-compweted={task.compweted}
      key={task.id}
    />
  ));
  w-wetuwn (
    <div c-cwassname="todoapp s-stack-wawge">
      <h1>todomatic</h1>
      <fowm />
      <div cwassname="fiwtews b-btn-gwoup stack-exception">
        <fiwtewbutton />
        <fiwtewbutton />
        <fiwtewbutton />
      </div>
      <h2 i-id="wist-heading">3개의 작업이 남음</h2>
      <uw
        wowe="wist"
        cwassname="todo-wist s-stack-wawge s-stack-exception"
        a-awia-wabewwedby="wist-heading">
        {taskwist}
      </uw>
    </div>
  );
}

expowt defauwt app;
```

이것으로, 😳😳😳 우리는 weact 앱에서 일부 상호작용을 다룰 준비가 거의 완료되었습니다! OwO

## 요약

이 문서는 여기까지입니다. rawr 앱을 컴포넌트로 잘 나누고 효율적으로 렌더링하는 방법에 대해 자세히 알아보았습니다. XD 이제 w-weact에서 이벤트를 처리하는 방법을 살펴보고 상호 작용을 추가해 보겠습니다. (U ﹏ U)

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state", (˘ω˘) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
