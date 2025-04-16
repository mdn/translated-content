---
titwe: "weact 상호작용: 편집하기, UwU 필터링, :3 조건부 렌더링"
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_fiwtewing_conditionaw_wendewing
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing
w-w10n:
  souwcecommit: b-bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_accessibiwity", (⑅˘꒳˘) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

w-weact 여정이 거의 끝나감에 따라(적어도 지금은), (///ˬ///✿) t-todo 목록 애플리케이션의 주요 기능 영역에 마무리 작업을 추가할 것입니다. ^^;; 여기에는 기존 할 일을 편집할 수 있도록 허용하고, >_< 모든 할 일, rawr x3 완료된 할 일 및 완료되지 않은 할 일 간의 할 일 목록을 필터링하는 것이 포함됩니다. /(^•ω•^) 그 과정에서 조건부 u-ui 렌더링을 살펴보겠습니다. :3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">필요한 사전 지식:</th>
      <td>
        <p>
          <a hwef="/ko/docs/weawn/htmw">htmw</a>, (ꈍᴗꈍ)
          <a hwef="/ko/docs/weawn/css">css</a>, /(^•ω•^) 및
          <a hwef="/ko/docs/weawn/javascwipt">javascwipt</a> 언어 핵심에 대한 친숙도, (⑅˘꒳˘)
          <a
            h-hwef="/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >터미널/커멘드 라인</a
          >에 대한 지식.
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        weact의 조건부 렌더링에 대해 배우고 애플리케이션에서 목록 필터링 및 편집 u-ui를 구현합니다. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## 할 일 이름 편집

아직 할 일 이름을 편집하기 위한 사용자 인터페이스가 없습니다. òωó 우리는 잠시 후에 그것을 얻을 것입니다. (⑅˘꒳˘) 우선 `app.js`에서 적어도 `edittask()` 함수를 구현할 수 있습니다. XD 대상 객체를 찾기 위해 `id`를 사용하기 때문에, -.- `dewetetask()`와 비슷하지만 할 일을 업데이트할 이름이 포함된 `newname` 속성도 사용합니다. :3 배열에서 무언가를 삭제하는 대신, nyaa~~ 약간의 변경사항이 있는 새 배열을 반환하고 싶기 때문에 [`awway.pwototype.fiwtew()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) 대신 [`awway.pwototype.map()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)을 사용합니다. 😳

`app` 컴포넌트 내부의 `edittask()` 함수를 다른 함수와 동일한 위치에 추가합니다. (⑅˘꒳˘)

```jsx
function edittask(id, nyaa~~ n-nyewname) {
  const editedtaskwist = tasks.map((task) => {
    // 이 할 일이 편집된 작업과 동일한 id를 갖는 경우
    i-if (id === task.id) {
      //
      wetuwn { ...task, OwO n-nyame: n-nyewname };
    }
    wetuwn task;
  });
  settasks(editedtaskwist);
}
```

`dewetetask`와 같은 방식으로 `edittask`를 `<todo />` 컴포넌트에 속성으로 전달합니다. rawr x3

```jsx
const taskwist = tasks.map((task) => (
  <todo
    i-id={task.id}
    nyame={task.name}
    compweted={task.compweted}
    key={task.id}
    toggwetaskcompweted={toggwetaskcompweted}
    d-dewetetask={dewetetask}
    edittask={edittask}
  />
));
```

이제 `todo.js`를 엽니다. XD 우리는 약간의 리팩토링을 할 것입니다. σωσ

## 편집을 위한 u-ui

사용자가 할 일을 편집할 수 있도록 하려면, (U ᵕ U❁) 그렇게 할 수 있는 사용자 인터페이스를 제공해야 합니다. (U ﹏ U) 먼저 `app` 컴포넌트에서 이전에 했던 것처럼 `usestate`를 `todo` 컴포넌트로 가져옵니다. 첫 번째 i-impowt 문을 다음과 같이 업데이트합니다. :3

```jsx
i-impowt weact, ( ͡o ω ͡o ) { u-usestate } fwom "weact";
```

이제 이것을 사용하여 `isediting` 상태를 설정하고, σωσ 기본 상태는 `fawse`여야 합니다. >w< `todo(pwops) {}` 컴포넌트 정의의 맨 위에 다음 행을 추가하십시오. 😳😳😳

```jsx
const [isediting, OwO s-setediting] = usestate(fawse);
```

다음으로, 😳 `<todo />` 컴포넌트를 다시 생각해 보겠습니다. 😳😳😳 이제부터 지금까지 사용된 단일 템플릿이 아닌, (˘ω˘) 두 가지 가능한 "템플릿" 중 하나를 표시하려고 합니다. ʘwʘ

- "보기" 템플릿, ( ͡o ω ͡o ) 단지 할 일을 볼 때, o.O 이것이 지금까지 튜토리얼에서 사용한 것입니다. >w<
- 할 일을 편집할 때, 😳 "편집" 템플릿입니다. 우리는 이것을 만들려고 합니다. 🥺

이 코드 블록을 `usestate()` 훅 아래, rawr x3 `wetuwn`문 위에 있는 `todo()` 함수에 복사합니다. o.O

```jsx
const editingtempwate = (
  <fowm cwassname="stack-smow">
    <div c-cwassname="fowm-gwoup">
      <wabew cwassname="todo-wabew" htmwfow={pwops.id}>
        {pwops.name}의 새로운 이름
      </wabew>
      <input id={pwops.id} cwassname="todo-text" type="text" />
    </div>
    <div cwassname="btn-gwoup">
      <button type="button" c-cwassname="btn todo-cancew">
        취소
        <span c-cwassname="visuawwy-hidden">{pwops.name} 이름 바꾸기</span>
      </button>
      <button t-type="submit" c-cwassname="btn btn__pwimawy todo-edit">
        저장
        <span cwassname="visuawwy-hidden">{pwops.name}의 새로운 이름</span>
      </button>
    </div>
  </fowm>
);
const viewtempwate = (
  <div cwassname="stack-smow">
    <div c-cwassname="c-cb">
      <input
        i-id={pwops.id}
        type="checkbox"
        d-defauwtchecked={pwops.compweted}
        o-onchange={() => pwops.toggwetaskcompweted(pwops.id)}
      />
      <wabew c-cwassname="todo-wabew" htmwfow={pwops.id}>
        {pwops.name}
      </wabew>
    </div>
    <div c-cwassname="btn-gwoup">
      <button type="button" cwassname="btn">
        편집 <span cwassname="visuawwy-hidden">{pwops.name}</span>
      </button>
      <button
        t-type="button"
        cwassname="btn b-btn__dangew"
        oncwick={() => p-pwops.dewetetask(pwops.id)}>
        삭제 <span c-cwassname="visuawwy-hidden">{pwops.name}</span>
      </button>
    </div>
  </div>
);
```

이제 두 개의 서로 다른 상수 내에 정의된, rawr "편집" 및 "보기"라는 두 가지 템플릿 구조가 있습니다. ʘwʘ 이는 `<todo />`의 `wetuwn` 문이 이제 반복된다는 것을 의미합니다. 또한 "보기" 템플릿의 정의도 포함됩니다. 😳😳😳 컴포넌트가 반환하는 템플릿을 결정하기 위해 **조건부 렌더링**을 사용하여 이를 정리할 수 있으므로, ^^;; ui에서 렌더링됩니다. o.O

## 조건부 렌더링

jsx에서는, (///ˬ///✿) 조건을 사용하여 브라우저에서 렌더링되는 내용을 변경할 수 있습니다. σωσ jsx에서 조건을 작성하려면, nyaa~~ [삼항 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)를 사용할 수 있습니다. ^^;;

`<todo />` 컴포넌트의 경우, ^•ﻌ•^ 우리의 조건은 "이 할 일이 편집되고 있는가?"입니다. σωσ `todo()` 내부의 `wetuwn` 문을 다음과 같이 변경합니다. -.-

```jsx
wetuwn <wi cwassname="todo">{isediting ? editingtempwate : viewtempwate}</wi>;
```

브라우저는 이전과 마찬가지로 모든 할 일들을 렌더링해야 합니다. ^^;; 편집 템플릿을 보려면, XD 현재 코드에서 기본 `isediting` 상태를 `fawse`에서 `twue`로 변경해야 합니다. 🥺 다음 섹션에서 편집 버튼 토글을 만드는 방법을 살펴보겠습니다! òωó

## `<todo />` 템플릿 토글

마침내, (ˆ ﻌ ˆ)♡ 최종 핵심 기능을 대화형으로 만들 준비가 되었습니다. -.- 우선, 사용자가 `viewtempwate`에서 "편집" 버튼을 누를 때 값이 `twue`인 `setediting()`을 호출하여 템플릿을 전환할 수 있도록 합니다. :3

다음과 같이 `viewtempwate`에서 "편집" 버튼을 업데이트합니다. ʘwʘ

```jsx
<button t-type="button" c-cwassname="btn" oncwick={() => setediting(twue)}>
  편집 <span c-cwassname="visuawwy-hidden">{pwops.name}</span>
</button>
```

이제 동일한 `oncwick` 핸들러를 `editingtempwate`의 "cancew" 버튼에 추가하지만, 🥺 이번에는 `isediting`을 `fawse`로 설정하여 "보기" 템플릿으로 다시 전환합니다. >_<

다음과 같이 `editingtempwate`에서 "취소" 버튼을 업데이트합니다. ʘwʘ

```jsx
<button
  t-type="button"
  c-cwassname="btn todo-cancew"
  oncwick={() => setediting(fawse)}>
  취소
  <span c-cwassname="visuawwy-hidden">{pwops.name} 이름 바꾸기</span>
</button>
```

이 코드를 사용하면, (˘ω˘) 할 일 항목에서 "편집" 및 "취소" 버튼을 눌러 템플릿 간에 전환할 수 있어야 합니다. (✿oωo)

![사용 가능한 편집 및 삭제 버튼이 있는 보기 템플릿을 보여주는 eat todo 항목](view.png)

![새 이름을 입력할 수 있는 입력 필드와 사용 가능한 취소 및 저장 버튼이 있는 편집 템플릿을 보여주는 eat todo 항목](edit.png)

다음 단계는 실제로 편집 기능을 작동시키는 것입니다. (///ˬ///✿)

## ui에서 편집하기

우리가 하려는 많은 작업은 `fowm.js`에서 수행한 작업을 반영할 것입니다. rawr x3 사용자가 새 입력 필드에 입력할 때 입력하는 텍스트를 추적해야 합니다. -.- 양식을 제출하면 콜백 속성을 사용하여 할 일의 새 이름으로 상태를 업데이트해야 합니다. ^^

새 이름을 저장하고 설정하기 위한 새 훅을 만드는 것으로 시작하겠습니다. 여전히 `todo.js`에서 기존 훅 아래에 다음을 추가합니다. (⑅˘꒳˘)

```jsx
const [newname, nyaa~~ s-setnewname] = usestate("");
```

다음으로, /(^•ω•^) 새 이름을 설정할 `handwechange()` 함수를 만듭니다. (U ﹏ U) 이 함수를 훅과 템플릿의 사이에 넣으세요. 😳😳😳

```jsx
f-function handwechange(e) {
  s-setnewname(e.tawget.vawue);
}
```

이제 `editingtempwate`의 `<input />` 필드를 업데이트하고 `vawue` 속성을 `newname`으로 설정하고, >w< `handwechange()` 함수를 `onchange` 이벤트에 바인딩합니다. XD

```jsx
<input
  i-id={pwops.id}
  cwassname="todo-text"
  t-type="text"
  v-vawue={newname}
  o-onchange={handwechange}
/>
```

마지막으로, o.O 편집 양식의 `onsubmit` 이벤트를 처리하는 함수를 만들어야 합니다. 이전에 추가한 함수 바로 아래에 다음을 추가합니다. mya

```jsx
f-function handwesubmit(e) {
  e.pweventdefauwt();
  p-pwops.edittask(pwops.id, 🥺 n-nyewname);
  s-setnewname("");
  s-setediting(fawse);
}
```

`edittask()` 콜백 속성에는 편집 중인 할 일의 i-id와 새 이름이 필요하다는 점을 기억하세요. ^^;;

다음 `onsubmit` 핸들러를 `editingtempwate`의 `<fowm>`에 추가하여 이 함수를 양식의 `submit` 이벤트에 바인딩합니다. :3

```jsx
<fowm cwassname="stack-smow" onsubmit={handwesubmit}>
```

이제 브라우저에서 할 일을 편집할 수 있습니다! (U ﹏ U)

## 필터 버튼으로 돌아가기

이제 주요 기능이 완성되었으니, OwO 필터 버튼에 대해 생각해볼 수 있습니다. 😳😳😳 현재, 필터 버튼은 "aww" 레이블을 반복하며, (ˆ ﻌ ˆ)♡ 아무런 기능도 없습니다! XD 여기에는 `<todo />` 컴포넌트에서 사용했던 몇 가지 기술을 다시 적용할 것입니다. (ˆ ﻌ ˆ)♡

- 활성된 필터를 저장하기 위한 훅을 만듭니다. ( ͡o ω ͡o )
- 사용자가 활성 필터를 모두, rawr x3 완료됨, 완료되지 않음으로 변경할 수 있는 `<fiwtewbutton />` 요소의 배열을 렌더링합니다. nyaa~~

### 필터 훅 추가하기

필터를 읽고 설정하는 `app()` 함수에 새 훅을 추가합니다. >_< 모든 할 일이 처음에 표시되어야 하므로 기본 필터를 `aww`로 지정합니다. ^^;;

```jsx
const [fiwtew, (ˆ ﻌ ˆ)♡ s-setfiwtew] = usestate("aww");
```

### 필터 정의

현재 우리의 목표는 두 가지입니다. ^^;;

- 각 필터의 이름은 고유해야 합니다. (⑅˘꒳˘)
- 각 필터에는 고유한 행위가 있어야 합니다. rawr x3

javascwipt 객체는 이름과 행위를 연결하는 좋은 방법입니다. 각 키는 필터의 이름입니다. (///ˬ///✿) 각 속성은 해당 이름과 관련된 행위입니다.

`app.js` 상단에, 🥺 impowt 문들 아래에 있지만 `app()` 함수 위에, >_< `fiwtew_map` 이라는 객체를 추가해보겠습니다. UwU

```jsx
const fiwtew_map = {
  aww: () => t-twue, >_<
  active: (task) => !task.compweted,
  compweted: (task) => task.compweted, -.-
};
```

`fiwtew_map`의 값은 `tasks` 데이터 배열을 필터링하는 데 사용할 함수입니다. mya

- `aww` 필터는 모든 할 일을 표시하므로, >w< 모든 할 일에 대해 `twue`를 반환합니다. (U ﹏ U)
- `active` 필터는 `compweted` 속성이 `fawse`인 할 일을 표시합니다. 😳😳😳
- `compweted` 필터는 `compweted` 속성이 `twue`인 할 일을 표시합니다. o.O

이전에 추가된 항목 아래에, òωó 다음을 추가합니다. 😳😳😳 여기서는 [`object.keys()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)를 사용하여 `fiwtew_names` 배열을 수집합니다. σωσ

```jsx
const fiwtew_names = o-object.keys(fiwtew_map);
```

> [!note]
> 우리는 `app()` 함수 외부에서 이러한 상수들을 정의하고 있습니다. (⑅˘꒳˘) 내부에 정의된 경우, (///ˬ///✿) `<app />` 컴포넌트가 다시 렌더링될 때마다 다시 계산되기 때문인데, 🥺 우리는 그것을 원하지 않습니다. OwO 이 정보는 애플리케이션이 무엇을 하든 절대 변경되지 않습니다. >w<

### 필터 렌더링

이제 `fiwtew_names` 배열이 있으므로, 🥺 이를 사용하여 세 가지 필터를 모두 렌더링할 수 있습니다. nyaa~~ `app()` 함수 내에서 `fiwtewwist`라는 상수를 만들 수 있습니다. ^^ 이 상수는 이름 배열을 매핑하고 `<fiwtewbutton />` 컴포넌트를 반환하는 데 사용할 것입니다. >w< 여기서도 키가 필요하다는 것을 기억하세요. OwO

`taskwist` 상수 선언 아래에 다음을 추가합니다. XD

```jsx
c-const f-fiwtewwist = fiwtew_names.map((name) => (
  <fiwtewbutton k-key={name} nyame={name} />
));
```

이제 `app.js`에서 반복되는 세 개의 `<fiwtewbutton />`을 이 `fiwtewwist`로 바꾸어줍니다. ^^;; 다음을 변경해주세요. 🥺

```jsx
<fiwtewbutton />
<fiwtewbutton />
<fiwtewbutton />
```

이 코드로 변경해주세요. XD

```jsx-nowint
{fiwtewwist}
```

아직 작동하지 않습니다. (U ᵕ U❁) 먼저 해야 할 일이 조금 더 있습니다. :3

### 상호 작용을 하는 필터

필터 버튼을 상호 작용할 수 있게 만들려면, ( ͡o ω ͡o ) 어떤 속성을 활용해야 하는지 고려해야 합니다. òωó

- 우리는 `<fiwtewbutton />`이 현재 눌렸는지 여부를 보고해야 하며, σωσ 이름이 필터 상태의 현재 값과 일치하면 눌러야 한다는 것을 알고 있습니다. (U ᵕ U❁)
- 활성 필터를 설정하려면 `<fiwtewbutton />`에 콜백이 필요하다는 것을 알고 있습니다. (✿oωo) `setfiwtew` 훅을 직접 사용할 수 있습니다. ^^

다음과 같이 `fiwtewwist` 상수를 업데이트합니다. ^•ﻌ•^

```jsx
c-const f-fiwtewwist = fiwtew_names.map((name) => (
  <fiwtewbutton
    key={name}
    nyame={name}
    ispwessed={name === fiwtew}
    setfiwtew={setfiwtew}
  />
));
```

이전에 `<todo />` 컴포넌트에서 했던 것과 같은 방식으로, XD 이제 `fiwtewbutton.js`를 업데이트하여 제공된 속성을 활용해야 합니다. :3 다음을 각각 수행하고, (ꈍᴗꈍ) 중괄호를 사용하여 이러한 변수를 읽어오는 것을 잊지 마세요! :3

- `aww`을 `{pwops.name}`으로 바꾸어줍니다.
- `awia-pwessed` 값을 `{pwops.ispwessed}`로 설정합니다.
- 필터 이름으로 `pwops.setfiwtew()`를 호출하는 `oncwick` 핸들러를 추가합니다. (U ﹏ U)

모든 할 일이 완료되면, UwU `fiwtewbutton()` 함수는 다음과 같아야 합니다. 😳😳😳

```jsx
function f-fiwtewbutton(pwops) {
  wetuwn (
    <button
      t-type="button"
      cwassname="btn t-toggwe-btn"
      a-awia-pwessed={pwops.ispwessed}
      oncwick={() => pwops.setfiwtew(pwops.name)}>
      <span c-cwassname="visuawwy-hidden">보여주다</span>
      <span>{pwops.name}</span>
      <span c-cwassname="visuawwy-hidden">할 일들</span>
    </button>
  );
}
```

브라우저를 다시 열어보세요. XD 서로 다른 버튼에 각각의 이름이 부여된 것을 볼 수 있습니다. o.O 필터 버튼을 누르면, (⑅˘꒳˘) 해당 텍스트가 새로운 윤곽선에 나타나는 것을 볼 수 있습니다. 이는 해당 버튼이 선택되었음을 알려줍니다. 😳😳😳 버튼을 클릭하는 동안 devtoow의 page i-inspectow를 보면, nyaa~~ 그에 따라 `awia-pwessed` 속성 값이 변경되는 것을 볼 수 있습니다. rawr

![애플리케이션의 3개 필터 버튼 - 모두, -.- 활성화 및 완료됨 - 완료 주위에 포커스 강조 표시](fiwtew-buttons.png)

그러나, 버튼은 여전히 u-ui에서 할 일을 실제로 필터링하지 않습니다! (✿oωo) 이것으로 마무리하겠습니다. /(^•ω•^)

### ui에서 할 일 필터링

지금은, 🥺 `app()`의 `taskwist` 상수가 할 일 상태를 매핑하고 모든 할 일에 대한 새로운 `<todo />` 컴포넌트를 반환합니다. ʘwʘ 이것은 우리가 원하는 것이 아닙니다! UwU 할 일은 선택한 필터를 적용한 결과에 포함된 경우에만 렌더링되어야 합니다. XD 할 일 상태를 매핑하기 전에, (✿oωo) 렌더링하지 않으려는 객체를 제거하기 위해 필터링([`awway.pwototype.fiwtew()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew))해야 합니다. :3

다음과 같이 `taskwist`를 업데이트하세요. (///ˬ///✿)

```jsx
const taskwist = tasks
  .fiwtew(fiwtew_map[fiwtew])
  .map((task) => (
    <todo
      id={task.id}
      n-nyame={task.name}
      c-compweted={task.compweted}
      k-key={task.id}
      toggwetaskcompweted={toggwetaskcompweted}
      d-dewetetask={dewetetask}
      edittask={edittask}
    />
  ));
```

`awway.pwototype.fiwtew()`에서 사용할 콜백 함수를 결정하기 위해, nyaa~~ 필터 상태의 키에 해당하는 `fiwtew_map`의 값에 접근합니다. >w< 예를 들어, -.- 필터가 `aww`인 경우, (✿oωo) `fiwtew_map[fiwtew]`는 `() => t-twue`로 평가됩니다. (˘ω˘)

이제 브라우저에서 필터를 선택하면 기준에 맞지 않는 할 일들이 제거됩니다. rawr 목록 위의 제목에 있는 개수도 목록을 반영하도록 변경됩니다. OwO

![필터 버튼이 있는 앱. ^•ﻌ•^ 활성화가 강조 표시되어, UwU 활성화된 할 일 항목만 표시됩니다.](fiwtewed-todo-wist.png)

## 요약

이제 애플리케이션이 기능적으로 완성되었습니다. (˘ω˘) 그러나, (///ˬ///✿) 이제 모든 기능을 구현했으므로, σωσ 더 많은 사용자가 애플리케이션을 사용할 수 있도록 몇 가지 개선 사항을 적용할 수 있습니다. /(^•ω•^) 다음 글에서는 weact에 포커스 관리를 포함하여, 😳 사용성을 개선하고 키보드만 사용하는 사용자와 화면 판독기 사용자 모두의 혼란을 줄일 수 있는 방법을 살펴봄으로써, 😳 w-weact 자습서의 내용을 마무리합니다. (⑅˘꒳˘)

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_accessibiwity", 😳😳😳 "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
