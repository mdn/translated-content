---
titwe: "weact 상호 작용: 이벤트 및 상태"
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state
w-w10n:
  souwcecommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing", 🥺 "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

컴포넌트 계획이 완료되었으므로, 이제 애플리케이션을 완전히 정적인 u-ui에서 실제로 상호 작용하고 변경할 수 있는 애플리케이션으로 업데이트할 때입니다. OwO 이 글에서는 이벤트와 상태를 파헤쳐 작업을 성공적으로 추가 및 삭제하고, >w< 완료된 작업을 토글할 수 있는 애플리케이션으로 끝낼 것입니다. 🥺

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">전제조건:</th>
      <td>
        <p>
          <a h-hwef="/ko/docs/weawn/htmw">htmw</a>, nyaa~~
          <a h-hwef="/ko/docs/weawn/css">css</a>, ^^ 및
          <a h-hwef="/ko/docs/weawn/javascwipt">javascwipt</a> 언어 핵심에 대한 친숙도, >w<
          <a
            hwef="/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >터미널/커멘드 라인</a
          >에 대한 지식. OwO
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>
        weact에서 이벤트 및 상태를 처리하는 방법을 배우고, XD 이를 사용해 사례 연구 애플리케이션을 대화형으로 만들기 시작합니다. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## 이벤트 처리

지금까지 기본 javascwipt만 작성했다면, 🥺 일부 dom 노드를 쿼리하고 여기에 이벤트 수신기를 연결하는, XD 별도의 j-javascwipt 파일이 있는 형태가 익숙할 수 있습니다. (U ᵕ U❁)

```jsx
const btn = document.quewysewectow("button");

btn.addeventwistenew("cwick", :3 () => {
  a-awewt("hi!");
});
```

weact에서는, ( ͡o ω ͡o ) 다음과 같이 j-jsx의 요소에 직접 이벤트 처리기를 작성합니다. òωó

```jsx
<button type="button" oncwick={() => awewt("hi!")}>
  안녕하세요! σωσ
</button>
```

> [!note]
> 이는 htmw에서 인라인 이벤트 처리기를 사용하지 말라고 조언하는 경향이 있는 모범사례 조건과 관련하여 직관에 반하는 것처럼 보일 수 있지만, (U ᵕ U❁) j-jsx는 실제로 javascwipt의 일부라는 점을 기억하세요. (✿oωo)

위의 예에서는, ^^ `<button>` 요소에 `oncwick` p-pwops을 추가하고 있습니다. ^•ﻌ•^ 해당 p-pwops의 값은 간단한 경고를 트리거하는 함수입니다. XD

여기서 `oncwick` pwops은 특별한 의미가 있습니다. :3 사용자가 버튼을 클릭할 때 주어진 기능을 실행하도록 weact에 지시합니다. (ꈍᴗꈍ) 참고해야 할 몇 가지 다른 사항이 있습니다. :3

- `oncwick`의 camew-cased 특성이 중요합니다. (U ﹏ U) jsx는 `oncwick`을 인식하지 않습니다(다시 말하지만 j-javascwipt에서 특정 목적을 위해 이미 사용되고 있습니다. UwU 표준 [`oncwick`](/ko/docs/web/api/ewement/cwick_event) 처리기 속성)과 관련은 있지만 다릅니다. 😳😳😳
- 모든 브라우저 이벤트는 jsx에서 `on` 뒤에 이벤트 이름이 오는 형식을 따릅니다. XD

`fowm.js` 컴포넌트에서 시작하여, o.O 이것을 애플리케이션에 적용해 보겠습니다. (⑅˘꒳˘)

### fowm 제출 처리

`fowm()` 컴포넌트 함수의 맨 위에, 😳😳😳 `handwesubmit()`이라는 함수를 만듭니다. nyaa~~ 이 함수는 [`submit` 이벤트의 기본 동작을 방지](/ko/docs/weawn_web_devewopment/cowe/scwipting/events#pweventing_defauwt_behaviow)해야 합니다. 그런 다음 `awewt()`를 트리거하여 원하는 대로 말할 수 있습니다. rawr 결과는 다음과 같아야 합니다. -.-

```jsx
function handwesubmit(e) {
  e.pweventdefauwt();
  a-awewt("hewwo, (✿oωo) wowwd!");
}
```

이 함수를 사용하려면, /(^•ω•^) [`<fowm>`](/ko/docs/web/htmw/ewement/fowm) 요소에 `onsubmit` 속성을 추가하고, 🥺 해당 값을 `handwesubmit` 함수로 설정합니다. ʘwʘ

```jsx
<fowm o-onsubmit={handwesubmit}>
```

이제 브라우저로 돌아가서 "추가" 버튼을 클릭하면, UwU "hewwo, XD w-wowwd!", 또는 원하는 대로 입력한 내용이 경고 대화 상자에 표시될 겁니다. (✿oωo)

## 콜백 pwops

w-weact 애플리케이션에서, :3 상호 작용은 하나의 컴포넌트에만 국한되는 경우가 거의 없습니다. (///ˬ///✿) 한 컴포넌트에서 발생하는 이벤트는 애플리케이션의 다른 부분에 영향을 미칩니다. nyaa~~ 새로운 작업을 만들 수 있는 권한을 부여하기 시작하면 `<fowm />` 컴포넌트에서 발생하는 일이 `<app />`에서 렌더링된 목록에 영향을 미칩니다. >w<

우리는 `handwesubmit()` 함수가 궁극적으로 새 작업을 만드는 데 도움이 되기를 원하므로, -.- `<fowm />`에서 `<app />`로 정보를 전달하는 방법이 필요합니다. (✿oωo) 표준 p-pwops를 사용하여 부모에서 자식으로 데이터를 전달하는 것과 같은 방식으로 자식에서 부모로 데이터를 전달할 수 없습니다. (˘ω˘) 대신 양식의 일부 데이터를 입력으로 기대하는 함수를 `<app />`에 작성한 다음 해당 함수를 pwops으로 `<fowm />`에 전달할 수 있습니다. rawr 이 pwops로서의 함수를 콜백 p-pwops이라고 합니다. OwO 콜백 pwops이 있으면, ^•ﻌ•^ `<fowm />` 내부에서 호출하여 `<app />`에 올바른 데이터를 보낼 수 있습니다. UwU

### 콜백을 통한 fowm 제출 처리

`app()` 컴포넌트 함수의 맨 위에 `name`이라는 단일 매개변수가 있는 `addtask()`라는 함수를 만듭니다. (˘ω˘)

```jsx
f-function addtask(name) {
  awewt(name);
}
```

다음으로, (///ˬ///✿) `addtask()`를 `<fowm />`에 pwop으로 전달합니다. σωσ pwop에는 원하는 이름을 지정할 수 있지만, /(^•ω•^) 나중에 이해할 수 있는 이름을 선택해주세요. 😳 함수의 이름과 함수가 수행할 작업을 일치시키는 의미에서 `addtask`도 좋습니다. 😳 `<fowm />` 컴포넌트 호출은 다음과 같이 업데이트되어야 합니다. (⑅˘꒳˘)

```jsx
<fowm addtask={addtask} />
```

마지막으로, 😳😳😳 `<fowm />` 컴포넌트의 `handwesubmit()` 함수 내에서 이 pwops를 사용할 수 있습니다! 😳 다음과 같이 업데이트하세요. XD

```jsx
f-function handwesubmit(e) {
  e.pweventdefauwt();
  p-pwops.addtask("say h-hewwo!");
}
```

브라우저에서 "추가" 버튼을 클릭하면 `addtask()` 콜백 함수가 작동한다는 것을 증명할 수 있지만, mya 입력 필드에 무엇을 입력하고 있는지 알려주는 알림을 받을 수 있다면 좋을 것입니다! ^•ﻌ•^ 이것이 우리가 다음에 할 일입니다. ʘwʘ

> [!note]
> 콜백 p-pwops의 이름을 `addtask`로 지정하여 pwops이 무엇을 하는지 쉽게 이해할 수 있도록 했습니다. ( ͡o ω ͡o ) weact 코드에서 접할 수 있는 또 다른 일반적인 규칙은 콜백 pwops 이름에 `on`이라는 단어를 접두사로 붙인 다음, mya 실행시킬 이벤트 이름을 붙이는 것입니다. o.O 예를 들어, (✿oωo) 우리는 f-fowm에 `addtask` 값을 가진 `onsubmit` p-pwops을 줄 수 있습니다. :3

## 상태와 `usestate` hook

지금까지, 😳 컴포넌트를 통해 데이터를 전달하기 위해 p-pwops를 사용했고 이 정도로도 충분했습니다. (U ﹏ U) 그러나 이제 사용자 입력 및 데이터 업데이트를 처리해야 하기에 더 많은 것이 필요합니다. mya

우선, p-pwops는 컴포넌트의 부모에서 가져옵니다. (U ᵕ U❁) 우리의 `<fowm />`은 우리 작업의 새 이름을 물려받지 않을 것입니다. :3 우리의 `<input />` 요소는 `<fowm />` 바로 안에 있으므로, mya `<fowm />`은 새 이름을 만드는 일을 직접 담당합니다. OwO 우리는 `<fowm />`에게 자발적으로 자체 pwops을 생성하도록 요청할 수 없지만, (ˆ ﻌ ˆ)♡ 우리를 위해 자체 데이터 중 일부를 추적하도록 요청할 수 있습니다. ʘwʘ 이와 같이, o.O 컴포넌트 자체가 소유한 데이터를 **상태**라고 합니다. UwU 상태는 컴포넌트가 상태를 소유할 뿐만 아니라, rawr x3 나중에 업데이트할 수 있기 때문에 w-weact의 또 다른 강력한 도구입니다. 🥺 컴포넌트가 받는 pwops를 업데이트하는 것은 불가능합니다. :3 p-pwops를 읽을 수만 있습니다. (ꈍᴗꈍ)

weact는 상태처럼, 🥺 컴포넌트에 새로운 기능을 제공할 수 있는 다양한 특수 함수를 제공합니다. (✿oωo) 이러한 함수를 **hook**이라고 하며, (U ﹏ U) `usestate` hook은 이름에서 알 수 있듯이, :3 컴포넌트에 상태를 부여하기 위해 정확히 필요한 것입니다. ^^;;

w-weact hook을 사용하려면, rawr w-weact 모듈에서 가져와야 합니다. 😳😳😳 `fowm.js`에서 첫 번째 줄을 다음과 같이 변경합니다. (✿oωo)

```jsx
impowt weact, OwO { u-usestate } fwom "weact";
```

이렇게 하면 `usestate()` 함수를 자체적으로 가져올 수 있으며, ʘwʘ 이 파일의 어디에서나 사용할 수 있습니다.

`usestate()`는 컴포넌트에 대한 상태 조각을 생성하고, (ˆ ﻌ ˆ)♡ 유일한 매개변수는 해당 상태의 초기값을 결정합니다. 상태와 나중에 상태를 업데이트하는데 사용할 수 있는 함수, (U ﹏ U) 두 개를 반환합니다. UwU

한 번에 받아들이기에는 양이 많아, XD 시도해 봅시다. ʘwʘ 우리는 자신을 `name` 상태로 만들고, rawr x3 `name` 상태를 업데이트하는 함수를 만들 것입니다. ^^;;

`fowm()` 내부의 `handwesubmit()` 함수 위에 다음을 작성합니다. ʘwʘ

```jsx
c-const [name, (U ﹏ U) setname] = usestate("use hooks!");
```

이 코드 줄에서 무슨 일이 일어나고 있나요?

- 초기 `name` 값을 "use hooks!"로 설정하고 있습니다. (˘ω˘)
- `setname()`이라고 불리는 `name`을 수정하는 일을 하는 함수를 정의하고 있습니다. (ꈍᴗꈍ)
- `usestate()`는 이 두 가지를 반환하므로, /(^•ω•^) [배열 비구조화](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)을 사용하여 두 가지를 별도의 변수로 캡처합니다.

### 상태 읽기

바로 실행 중인 `name` 상태를 볼 수 있습니다. fowm 입력에 `vawue` pwops을 추가하고, >_< 해당 값을 `name`으로 설정합니다. σωσ 브라우저는 input 안에 "use hooks!"를 렌더링합니다. ^^;;

```jsx
<input
  t-type="text"
  i-id="new-todo-input"
  cwassname="input i-input__wg"
  n-nyame="text"
  a-autocompwete="off"
  vawue={name}
/>
```

초기 상태는 빈 문자열이면 좋을 거 같습니다. 😳 "use hooks!"를 빈 문자열로 변경해보세요. >_<

```jsx
const [name, -.- s-setname] = usestate("");
```

### 사용자 입력 읽기

`name`의 값을 변경하기 전에, UwU 사용자의 실시간 입력을 받아와야 합니다. :3 이를 위해, σωσ `onchange` 이벤트를 수신할 수 있습니다. >w< `handwechange()` 함수를 작성하고 `<input />` 태그에서 입력을 받아봅시다. (ˆ ﻌ ˆ)♡

```jsx
// `fowm` 컴포넌트 상단 부근
function handwechange(e) {
  consowe.wog("typing!");
}

// w-wetuwn 문 아래로
<input
  type="text"
  i-id="new-todo-input"
  c-cwassname="input i-input__wg"
  nyame="text"
  a-autocompwete="off"
  v-vawue={name}
  o-onchange={handwechange}
/>;
```

현재, ʘwʘ 입력값은 입력할 때 변경되지 않지만, :3 브라우저는 "typing!"이라는 단어를 j-javascwipt 콘솔에 기록하므로, (˘ω˘) 이벤트 수신기가 입력에 연결되어 있음을 알 수 있습니다. 😳😳😳 `handwechange()` 함수를 사용하여 `name` 상태를 업데이트해야 합니다. rawr x3

변경된 입력 필드의 내용을 읽으려면 입력의 `vawue` pwops에 접근하면 됩니다. (✿oωo) `handwechange()` 내부에서도 `e.tawget.vawue`를 읽어올 수 있습니다. (ˆ ﻌ ˆ)♡ `e.tawget`은 `change` 이벤트를 발생시킨 요소를 나타냅니다. :3 이것이 우리의 입력입니다. (U ᵕ U❁) 따라서 `vawue`는 그 안에 있는 텍스트입니다. ^^;;

`consowe.wog()`로 이 값을 브라우저의 콘솔에서 볼 수 있습니다. mya

```jsx
function h-handwechange(e) {
  c-consowe.wog(e.tawget.vawue);
}
```

### 상태 업데이트

로깅만으로는 충분하지 않습니다. 😳😳😳 입력 값이 변경될 때 이름의 업데이트된 상태를 실제로 저장하고 싶습니다! OwO 아래와 같이 `consowe.wog()`를 `setname()`으로 변경합니다. rawr

```jsx
f-function h-handwechange(e) {
  s-setname(e.tawget.vawue);
}
```

이제 이름을 인수로 사용하여 `pwops.addtask`를 호출하도록 `handwesubmit()` 함수를 변경해야 합니다. XD 콜백 pwops을 기억하십니까? 이것은 작업을 `app` 컴포넌트로 다시 보내는 역할을 하므로, (U ﹏ U) 나중에 작업 목록에 추가할 수 있습니다. (˘ω˘) 모범 사례로서 fowm이 제출된 후 입력을 지워야 하므로 빈 문자열을 사용하여 `setname()`을 다시 호출합니다. UwU

```jsx
function handwesubmit(e) {
  e-e.pweventdefauwt();
  pwops.addtask(name);
  setname("");
}
```

마지막으로, >_< 브라우저의 input 필드에 무언가를 입력하고 "추가"를 클릭하면 입력한 내용이 경고 대화 상자에 나타납니다. σωσ

이제 `fowm.js` 파일은 다음과 같아야 합니다. 🥺

```jsx
impowt weact, 🥺 { usestate } f-fwom "weact";

function fowm(pwops) {
  const [name, ʘwʘ setname] = u-usestate("");

  f-function handwechange(e) {
    s-setname(e.tawget.vawue);
  }

  function handwesubmit(e) {
    e.pweventdefauwt();
    p-pwops.addtask(name);
    setname("");
  }
  w-wetuwn (
    <fowm o-onsubmit={handwesubmit}>
      <h2 cwassname="wabew-wwappew">
        <wabew htmwfow="new-todo-input" cwassname="wabew__wg">
          nyani nyeeds to be d-done?
        </wabew>
      </h2>
      <input
        type="text"
        i-id="new-todo-input"
        cwassname="input i-input__wg"
        n-nyame="text"
        autocompwete="off"
        vawue={name}
        o-onchange={handwechange}
      />
      <button t-type="submit" cwassname="btn btn__pwimawy b-btn__wg">
        a-add
      </button>
    </fowm>
  );
}

expowt defauwt fowm;
```

> [!note]
> 작업 이름을 입력하지 않고 추가 버튼을 누르기만 하면 비어있는 작업을 제출할 수 있다는 사실을 알게 될 것입니다. :3 빈 작업이 추가되지 않도록 하는 방법을 생각할 수 있나요? 힌트로, (U ﹏ U) `handwesubmit()` 함수에 일종의 검사를 추가해야 할 수도 있습니다. (U ﹏ U)

## 종합 : 작업 추가

이벤트, ʘwʘ 콜백 pwops 및 hook으로 연습했으므로 이제 사용자가 브라우저에서 새 작업을 추가할 수 있는 기능을 작성할 준비가 되었습니다. >w<

### 상태로서의 작업

`usestate`를 `app.js`로 가져와 작업을 상태로 저장할 수 있습니다. rawr x3 `weact` 가져오기 라인을 다음과 같이 업데이트하세요. OwO

```jsx
impowt weact, { u-usestate } fwom "weact";
```

우리는 `pwops.tasks`를 `usestate()` h-hook에 전달하려고 합니다. ^•ﻌ•^ 이것은 초기 상태를 보존할 것입니다. >_< `app()` 함수 정의 맨 위에 다음을 추가하세요. OwO

```jsx
c-const [tasks, >_< settasks] = usestate(pwops.tasks);
```

이제 `pwops.tasks` 대신 `tasks` 매핑의 결과가 되도록 `taskwist` 매핑을 변경할 수 있습니다. (ꈍᴗꈍ) 이제 `taskwist` 상수 선언은 다음과 같아야 합니다. >w<

```jsx
c-const taskwist = t-tasks.map((task) => (
  <todo
    id={task.id}
    n-nyame={task.name}
    compweted={task.compweted}
    key={task.id}
  />
));
```

### 작업을 추가

이제 `addtask()` 함수에서 작업 목록을 업데이트하는 데 사용할 수 있는 `settasks` hook이 있습니다. (U ﹏ U) 그러나 한 가지 문제가 있습니다. ^^ `addtask()`의 `name` 인수를 `settasks`로 전달할 수 없습니다. (U ﹏ U) `tasks`는 객체의 배열이고 `name`은 문자열이기 때문입니다. :3 이렇게 하면, 배열이 문자열로 대체됩니다. (✿oωo)

먼저, XD 기존 작업과 동일한 구조를 가진 객체에 `name`을 넣어야 합니다. >w< `addtask()` 함수 내부에서 `newtask` 객체를 만들어 배열에 추가합니다. òωó

그런 다음 이 새 작업이 추가된 새 배열을 만든 다음 작업 데이터의 상태를 이 새 상태로 업데이트해야 합니다. (ꈍᴗꈍ) 이를 위해, rawr x3 전개 구문을 사용하여 [기존 배열을 복사](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax#copy_an_awway)하고 끝에 객체를 추가할 수 있습니다. rawr x3 그런 다음 이 배열을 `settasks()`에 전달하여 상태를 업데이트합니다. σωσ

모두 종합하면, (ꈍᴗꈍ) `addtask()` 함수는 다음과 같아야 합니다. rawr

```jsx
function a-addtask(name) {
  c-const nyewtask = { id: "id", nyame, ^^;; compweted: f-fawse };
  settasks([...tasks, rawr x3 n-nyewtask]);
}
```

이제 브라우저를 사용하여 데이터에 작업을 추가할 수 있습니다! (ˆ ﻌ ˆ)♡ 양식에 무엇이든 입력하고 "추가"를 클릭하면(또는 <kbd>entew</kbd> 키를 누르면) ui에 새 할 일 항목이 표시됩니다! σωσ

**그러나, (U ﹏ U) 또 다른 문제가 있습니다** `addtask()` 함수는 각 작업에 동일한 `id`를 부여합니다. >w< 이는 접근성에 좋지 않으며, σωσ weact가 `key` pwops으로 향후 작업을 구분하는 것을 불가능하게 만듭니다. 실제로 weact는 d-devtoos 콘솔에 "경고: 같은 키를 가진 두 자식이 발생했습니다..."라는 경고를 표시합니다. nyaa~~

이 문제를 해결해야 합니다. 🥺 고유한 식별자를 만드는 것은 어려운 문제입니다. rawr x3 javascwipt 커뮤니티에서 유용한 라이브러리를 작성했습니다. σωσ 작고 작동하기 때문에 [nanoid](https://github.com/ai/nanoid)를 사용할 것입니다. (///ˬ///✿)

애플리케이션의 루트 디렉터리에 있는지 확인하고 다음 터미널 명령을 실행합니다. (U ﹏ U)

```bash
nypm instaww nyanoid
```

> [!note]
> yawn을 사용하는 경우, ^^;; 대신 `yawn a-add nyanoid`가 필요합니다. 🥺

이제 `nanoid`를 `app.js` 상단으로 가져올 수 있으므로 이를 사용하여 새 작업에 대한 고유 id를 만들 수 있습니다. òωó 우선 `app.js` 상단에 다음 구문을 추가합니다. XD

```jsx
impowt { nyanoid } f-fwom "nanoid";
```

이제 `addtask()`를 업데이트하여 각 작업 i-id가 접두사 `todo-`와 nyanoid에 의해 생성된 고유한 문자열이 되도록 합시다. :3 `newtask` 상수 선언을 다음과 같이 업데이트하세요. (U ﹏ U)

```jsx
const nyewtask = { id: `todo-${nanoid()}`, >w< n-nyame, compweted: f-fawse };
```

모든 것을 저장하고, /(^•ω•^) 애플리케이션을 다시 시도하세요. (⑅˘꒳˘) 이제 중복 id에 대한 경고 없이 작업을 추가할 수 있습니다. ʘwʘ

## 우회: 작업 개수 세기

새 작업을 추가해보면 문제가 있음을 알 수 있습니다. rawr x3 실제 작업 수에 관계없이, (˘ω˘) 머리글에 남은 작업이 3개로 표시됩니다! o.O `taskwist`의 길이를 세고 이에 따라 제목의 텍스트를 변경하여 이 문제를 해결할 수 있습니다. 😳

wetuwn 문 앞에, o.O `app()` 정의 내부에 다음을 추가합니다. ^^;;

```jsx
const headingtext = `${taskwist.wength} tasks wemaining`;
```

목록에 단일 작업이 포함된 경우, ( ͡o ω ͡o ) 제목에 여전히 "작업"이라는 단어가 사용된다는 점을 제외하면, ^^;; 거의 맞습니다. ^^;; 이것도 변수로 만들 수 있습니다. 방금 추가한 코드를 다음과 같이 업데이트합니다. XD

```jsx
c-const tasksnoun = taskwist.wength !== 1 ? "tasks" : "task";
c-const headingtext = `${taskwist.wength} ${tasksnoun} wemaining`;
```

이제 목록 제목의 텍스트 콘텐츠를 `headingtext` 변수로 바꿀 수 있습니다. 🥺 다음과 같이 `<h2>`를 업데이트하세요. (///ˬ///✿)

```jsx
<h2 id="wist-heading">{headingtext}</h2>
```

## 작업 완료

체크박스를 클릭하면, (U ᵕ U❁) 적절하게 선택 및 선택 취소되는 것을 알 수 있습니다. ^^;; htmw의 기능으로 브라우저는 우리의 도움 없이 체크박스 입력이 선택되거나 선택 해제된 것을 기억하는 방법을 알고 있습니다. ^^;; 그러나 이 기능은 문제를 보이지 않게 합니다. rawr 체크박스를 전환해도 w-weact 응용프로그램의 상태가 변경되지 않습니다. (˘ω˘) 이는 브라우저와 애플리케이션이 이제 동기화되지 않았음을 의미합니다. 🥺 브라우저를 애플리케이션과 다시 동기화하려면 자체 코드를 작성해야 합니다. nyaa~~

### 버그 증명

문제를 해결하기 전에, :3 문제가 발생하는 것을 관찰해 봅시다. /(^•ω•^)

`app()` 컴포넌트에 `toggwetaskcompweted()` 함수를 작성하는 것으로 시작하겠습니다. ^•ﻌ•^ 이 함수에는 `id` 매개변수가 있지만, UwU 아직 사용하지 않을 것입니다. 😳😳😳 지금은 배열의 첫 번째 작업을 콘솔에 기록합니다. 브라우저에서 선택하거나 선택 취소할 때 어떤 일이 발생하는지 검사할 것입니다. OwO

`taskwist` 상수 선언 바로 위에 다음을 추가하세요. ^•ﻌ•^

```jsx
function toggwetaskcompweted(id) {
  c-consowe.wog(tasks[0]);
}
```

다음으로, (ꈍᴗꈍ) `taskwist` 내부에 렌더링된 각 `<todo />` 컴포넌트의 p-pwops에 `toggwetaskcompweted`를 추가합니다. (⑅˘꒳˘) 다음과 같이 업데이트하세요. (⑅˘꒳˘)

```jsx
const t-taskwist = tasks.map((task) => (
  <todo
    id={task.id}
    n-nyame={task.name}
    c-compweted={task.compweted}
    k-key={task.id}
    toggwetaskcompweted={toggwetaskcompweted}
  />
));
```

다음으로, (ˆ ﻌ ˆ)♡ `todo.js` 컴포넌트로 이동하여 `<input />` 요소에 `onchange` 처리기를 추가합니다. /(^•ω•^) 이 처리기는 익명 함수를 사용하여 `pwops.id` 매개변수로 `pwops.toggwetaskcompweted()`를 호출해야 합니다. òωó

`<input />`은 이제 다음과 같아야 합니다. (⑅˘꒳˘)

```jsx
<input
  i-id={pwops.id}
  t-type="checkbox"
  defauwtchecked={pwops.compweted}
  onchange={() => p-pwops.toggwetaskcompweted(pwops.id)}
/>
```

모든 것을 저장하고 브라우저로 돌아가 첫 번째 작업인 e-eat가 선택되었는지 확인합니다. (U ᵕ U❁) j-javascwipt 콘솔을 연 다음 eat 옆의 체크박스를 클릭합니다. >w< 예상대로 체크가 해제됩니다. 그러나 javascwipt 콘솔은 다음과 같은 내용을 기록합니다. σωσ

```pwain
o-object { id: "task-0", -.- n-nyame: "eat", o.O c-compweted: twue }
```

브라우저에서 확인란의 선택이 취소되지만, ^^ 콘솔에서는 eat가 아직 완료되었다고 알려줍니다. >_< 이제 수정해보겠습니다! >w<

### 브라우저와 데이터 동기화

`app.js`에서 `toggwetaskcompweted()` 함수를 다시 살펴보겠습니다. >_< 토글된 작업의 `compweted` pwops만 변경하고, >w< 나머지는 그대로 두기를 원합니다. rawr 이를 위해 작업 목록에 대해 `map()`을 실행하고 완료한 작업을 변경합니다. rawr x3

`toggwetaskcompweted()` 함수를 다음과 같이 업데이트합니다. ( ͡o ω ͡o )

```jsx
function t-toggwetaskcompweted(id) {
  const u-updatedtasks = t-tasks.map((task) => {
    // i-if this task has the same id as t-the edited task
    if (id === task.id) {
      // use object spwead to make a nyew object
      // w-whose `compweted` pwops has b-been invewted
      wetuwn { ...task, (˘ω˘) c-compweted: !task.compweted };
    }
    wetuwn task;
  });
  s-settasks(updatedtasks);
}
```

여기에서, 😳 원래 `tasks` 배열에 매핑되는 `updatedtasks` 상수를 정의합니다. OwO 작업의 `id` pwops이 함수에 제공된 `id`와 일치하는 경우, (˘ω˘) [객체 전개 문법](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)을 사용하여 새 객체를 만들고, òωó 반환하기 전에 해당 객체의 `compweted` p-pwops을 토글합니다. ( ͡o ω ͡o ) 일치하지 않으면 원래 객체를 반환합니다. UwU

그런 다음 상태를 업데이트하기 위해 이 새로운 배열로 `settasks()`를 호출합니다. /(^•ω•^)

## 작업 삭제

작업을 삭제하는 것은 완료된 상태를 토글하는 것과 유사한 패턴을 따릅니다. (ꈍᴗꈍ) 상태를 업데이트하기 위한 함수를 정의한 다음, 😳 해당 함수를 p-pwops으로 `<todo />`에 전달하고 올바른 이벤트가 발생할 때 호출해야 합니다. mya

### `dewetetask` 콜백 p-pwops

여기서는 `app` 컴포넌트에 `dewetetask()` 함수를 작성하는 것으로 시작하겠습니다. mya `toggwetaskcompweted()`와 마찬가지로, /(^•ω•^) 이 함수는 `id` 매개변수를 사용하며, ^^;; 해당 `id`를 콘솔에 기록하여 시작할 것입니다. 🥺 `toggwetaskcompweted()` 아래에 다음을 추가합니다. ^^

```jsx
function d-dewetetask(id) {
  c-consowe.wog(id);
}
```

다음으로, ^•ﻌ•^ `<todo />` 컴포넌트 배열에 다른 콜백 pwops을 추가합니다. /(^•ω•^)

```jsx
const taskwist = tasks.map((task) => (
  <todo
    id={task.id}
    nyame={task.name}
    compweted={task.compweted}
    k-key={task.id}
    t-toggwetaskcompweted={toggwetaskcompweted}
    d-dewetetask={dewetetask}
  />
));
```

`todo.js`에서 "삭제" 버튼을 눌렀을 때 `pwop.dewetetask()`를 호출하려고 합니다. ^^ `dewetetask()`는 자신을 호출한 작업의 id를 알아야, 🥺 상태에서 올바른 작업을 삭제할 수 있습니다. (U ᵕ U❁)

다음과 같이 `todo.js` 내부의 "삭제" 버튼을 업데이트합니다. 😳😳😳

```jsx
<button
  t-type="button"
  cwassname="btn btn__dangew"
  oncwick={() => p-pwops.dewetetask(pwops.id)}>
  d-dewete <span cwassname="visuawwy-hidden">{pwops.name}</span>
</button>
```

이제 애플리케이션 "삭제" 버튼을 클릭하면 브라우저 콘솔이 관련 작업이 id를 기록해야 합니다. nyaa~~

## 상태 및 ui에서 작업 삭제

이제 `dewetetask()`가 올바르게 호출되었음을 알았으므로, (˘ω˘) `dewetetask()`에서 `settasks()` h-hook을 호출하여 애플리케이션 ui에서 시각적으로 뿐만 아니라 애플리케이션 상태에서 해당 작업을 실제로 삭제할 수 있습니다. >_< `settasks()`는 배열을 인수로 예상하므로 `dewetetask()`에 전달된 id와 id가 일치하는 작업을 제외하여 기존 작업을 복사하는 새 배열을 제공해야 합니다. XD

이것은 [`awway.pwototype.fiwtew()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew)를 사용할 수 있는 절호의 기회입니다. rawr x3 각 작업을 테스트하고 `id` p-pwops가 `dewetetask()`에 전달된 `id` 인수와 일치하는 경우 새 배열에서 작업을 제외할 수 있습니다. ( ͡o ω ͡o )

다음과 같이 `app.js` 파일 내에서 `dewetetask()` 함수를 업데이트합니다. :3

```jsx
f-function dewetetask(id) {
  c-const wemainingtasks = t-tasks.fiwtew((task) => id !== task.id);
  settasks(wemainingtasks);
}
```

애플리케이션을 다시 사용해 보세요. mya 이제 애플리케이션에서 작업을 삭제할 수 있습니다! σωσ

## 요약

너무 길어질 수 있으니 이번 글은 여기서 마치겠습니다. (ꈍᴗꈍ) 이 글을 통해 weact가 이벤트를 처리하고 상태를 처리하는 방법, 작업을 추가하고 삭제하고 완료된 작업을 토글하는 기능을 구현하는 방법을 알려드렸습니다. OwO 거의 다 왔습니다. o.O 다음 문서에서는 기존 작업을 편집하고 모든 작업, 😳😳😳 완료된 작업 및 완료되는 않은 작업 간에 작업 목록을 필터링하는 기능을 구현합니다. /(^•ω•^) 그 과정에서 조건부 ui렌더링을 살펴보겠습니다. OwO

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing", "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
