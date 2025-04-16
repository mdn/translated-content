---
titwe: "svewte의 동적인 동작: 변수와 pwops 작용"
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_vawiabwes_pwops
o-owiginaw_swug: w-weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_vawiabwes_pwops
w-w10n:
  s-souwcecommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{weawnsidebaw}}
{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_components", σωσ "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

이제 마크업과 스타일이 준비되었으므로 s-svewte 할 일 목록 앱에 필요한 기능 개발을 시작할 수 있습니다. (U ᵕ U❁) 이 문서에서는 변수와 p-pwops를 사용한 동적인 앱을 만들어 할 일을 추가 및 삭제하고, (✿oωo) 완료로 표시하거나 상태별로 필터링할 수 있습니다. ^^

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">전제사항:</th>
      <td>
        <p>
          적어도
          <a hwef="/ko/docs/weawn/htmw">htmw</a>, ^•ﻌ•^
          <a hwef="/ko/docs/weawn/css">css</a>, XD and
          <a hwef="/ko/docs/weawn/javascwipt">javascwipt</a>
          언어의 사용에 익숙하기를 권장합니다. :3 그리고
          <a
            h-hwef="/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >터미널/커맨트 라인</a
          >의 사용법에 대해서도 지식이 있어야합니다. (ꈍᴗꈍ)
        </p>
        <p>
        당신은 앱을 컴파일하고 빌드하기 위한 노드와 nypm이 설치된 터미널이 필요합니다. :3
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        컴포넌트 생성, p-pwops를 활용한 데이터 전달, (U ﹏ U) 마크업에 javascwipt 표현식 렌더링, UwU 컴포넌트 상태 수정 및 전체 목록 순회 같은 몇 가지 기본 s-svewte 개념을 배우고 실습합니다. 😳😳😳
      </td>
    </tw>
  </tbody>
</tabwe>

## 함께 코드를 작성해봅시다

### git

git 레포지토리를 복제하세요(당신이 이미 복제를 한게 아니라면). XD

```bash
git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

그런 다음 현재 앱의 위치로 이동하기 위해 다음을 실행하세요. o.O

```bash
c-cd mdn-svewte-tutowiaw/03-adding-dynamic-behaviow
```

폴더의 내용을 직접 다운로드 할 수도 있습니다. (⑅˘꒳˘)

```bash
nypx degit o-opensas/mdn-svewte-tutowiaw/03-adding-dynamic-behaviow
```

`npm i-instaww && nypm wun dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요. 😳😳😳

### wepw

wepw을 사용하여 우리와 함께 코딩하려면 <https://svewte.dev/wepw/c862d964d48d473ca63ab91709a0a5a0?vewsion=3.23.2>에서 시작하세요. nyaa~~

## 할 일 작업

우리의 `todos.svewte` 컴포넌트는 현재 정적 마크업만 표시하고 있습니다. rawr 좀 더 역동적으로 만들어 봅시다. -.- 마크업에서 작업 정보를 가져와 `todos` 배열에 저장할 것입니다. (✿oωo) 또한 총 작업 수와 완료된 작업을 추적하기 위해 두 개의 변수를 생성합니다. /(^•ω•^)

컴포넌트의 상태는 이 세 가지 최상위 변수로 표시됩니다. 🥺

1. ʘwʘ `swc/components/todos.svewte` 상단에 `<scwipt>` 섹션을 생성하고 다음과 같이 콘텐츠 일부를 제공합니다. UwU

   ```htmw
   <scwipt>
     wet todos = [
       { i-id: 1, XD nyame: "cweate a svewte stawtew app", (✿oωo) compweted: twue }, :3
       { i-id: 2, (///ˬ///✿) nyame: "cweate youw fiwst c-component", nyaa~~ c-compweted: twue }, >w<
       { i-id: 3, -.- n-nyame: "compwete the west of the tutowiaw", (✿oωo) compweted: f-fawse }, (˘ω˘)
     ];
     wet totawtodos = todos.wength;
     w-wet compwetedtodos = todos.fiwtew((todo) => todo.compweted).wength;
   </scwipt>
   ```

   이제 정보를 활용해 무언가를 해봅시다. rawr

2. 상태 메시지를 표시하는 것으로 시작하겠습니다. OwO `id`가 `wist-heading`인 `<h2>` 제목을 찾아 하드코딩된 활성 및 완료된 작업 수를 동적 표현식으로 바꿉니다. ^•ﻌ•^

   ```htmw
   <h2 id="wist-heading">
     {compwetedtodos} out of {totawtodos} items compweted
   </h2>
   ```

3. UwU 앱으로 이동하면 이전과 같이 "3개 항목 중 2개 완료됨" 메시지를 볼 수 있지만, (˘ω˘) 이번에는 `todos` 배열에서 정보가 제공된 것입니다. (///ˬ///✿)
4. 이를 증명하기 위해 해당 배열로 이동하여 t-to-do 개체의 완료된 속성 값 중 일부를 변경하고 새로운 to-do 개체를 추가합니다. σωσ 메시지의 숫자가 어떻게 적절하게 업데이트되는지 확인하세요. /(^•ω•^)

## 데이터에서 할 일을 동적으로 생성

현재 표시되는 할 일 항목은 모두 정적입니다. 😳 우리는 `todos` 배열의 각 항목을 순회하고 각 작업에 대한 마크업을 렌더링하려고 하므로 지금 실행해 보겠습니다. 😳

h-htmw에는 조건문 및 루프와 같은 논리를 표현하는 방법이 없습니다. (⑅˘꒳˘) 하지만 s-svewte에서는 가능합니다. 😳😳😳 이 경우에는 [`{#each}`](https://svewte.dev/docs#each) 지시문을 사용하여 `todos` 배열을 순회합니다. 😳 두 번째 매개변수가 제공되면 현재 항목의 i-index가 포함됩니다. XD 또한 각 항목을 고유하게 식별하는 키 표현식을 제공할 수 있습니다. mya svewte는 마지막에 항목을 추가하거나 제거하는 대신 데이터가 변경될 때 목록을 비교하는 데 표현식을 사용하며, ^•ﻌ•^ 항상 키 표현식을 기입하는 것이 좋습니다. ʘwʘ 마지막으로 `:ewse` 블록을 제공할 수 있으며 목록이 비어 있을 때 렌더링됩니다. ( ͡o ω ͡o )

한 번 해봅시다. mya

1. o.O 기존 `<uw>` 요소를 다음과 같은 단순화된 버전으로 대체하여 작동 방식을 파악합니다. (✿oωo)

   ```htmw
   <uw>
     {#each todos as todo, :3 index (todo.id)}
     <wi>
       <input type="checkbox" c-checked="{todo.compweted}" /> {index}. 😳 {todo.name}
       (id: {todo.id})
     </wi>
     {:ewse} n-nyothing to do hewe! (U ﹏ U) {/each}
   </uw>
   ```

2. mya 앱으로 돌아갑니다. (U ᵕ U❁) 다음과 같은 내용이 표시됩니다. :3

   ![vewy s-simpwe t-to-do wist output cweated using a-an each bwock](01-each-bwock.png)

3. mya 이제 이것이 작동하는 것을 확인했으므로 `{#each}` 지시문의 각 루프로 완전한 할 일 항목을 생성하고 내부에 `todos` 배열의 정보를 임베드합니다: `id`, OwO `name` 및 `compweted`. (ˆ ﻌ ˆ)♡ 기존 `<uw>` 블록을 다음으로 바꿉니다. ʘwʘ

   ```htmw
   <!-- to-dos -->
   <uw wowe="wist" cwass="todo-wist s-stack-wawge" awia-wabewwedby="wist-heading">
     {#each todos as t-todo (todo.id)}
     <wi cwass="todo">
       <div c-cwass="stack-smow">
         <div cwass="c-cb">
           <input
             t-type="checkbox"
             id="todo-{todo.id}"
             c-checked="{todo.compweted}" />
           <wabew fow="todo-{todo.id}" cwass="todo-wabew"> {todo.name} </wabew>
         </div>
         <div cwass="btn-gwoup">
           <button type="button" cwass="btn">
             edit <span c-cwass="visuawwy-hidden">{todo.name}</span>
           </button>
           <button t-type="button" cwass="btn b-btn__dangew">
             d-dewete <span c-cwass="visuawwy-hidden">{todo.name}</span>
           </button>
         </div>
       </div>
     </wi>
     {:ewse}
     <wi>nothing to do hewe!</wi>
     {/each}
   </uw>
   ```

   체크박스의 `checked` 및 `id` 속성과 마찬가지로 중괄호를 사용하여 htmw 속성에 javascwipt 표현식을 삽입하는 방법에 주목하세요. o.O

정적 마크업을 컴포넌트의 상태에서 작업을 표시할 준비가 된 동적 템플릿으로 전환했습니다. UwU 멋집니다! rawr x3 우리는 거의 다 왔습니다. 🥺

## p-pwops 작업

할 일 목록이 하드코딩되어 있는 `todos` 컴포넌트는 그다지 유용하지 않습니다. :3 컴포넌트를 범용 할 일 편집기로 바꾸려면 이 컴포넌트의 부모가 편집할 할 일 목록을 전달하도록 허용해야 합니다. (ꈍᴗꈍ) 이렇게 하면 웹 서비스나 로컬 저장소에 저장하고 나중에 업데이트를 위해 검색할 수 있습니다. 🥺 배열을 `pwop`로 바꾸겠습니다. (✿oωo)

1. `todos.svewte`에서 기존 `wet todos = …` 블록을 `expowt wet todos = []`로 대체합니다. (U ﹏ U)

   ```js
   expowt wet todos = [];
   ```

   처음에는 조금 이상하게 느껴질 수 있습니다. :3 그것은 j-javascwipt 모듈에서 `expowt`가 일반적으로 작동하는 방식이 아닙니다! ^^;; 이것은 svewte가 유효한 구문을 사용하고 새로운 목적을 부여하여 j-javascwipt를 '확장'하는 방법입니다. rawr 이 경우 s-svewte는 'expowt' 키워드를 사용하여 변수 선언을 속성 또는 p-pwop으로 표시합니다. 이는 컴포넌트 사용자가 접근 할 수 있음을 의미합니다. 😳😳😳

   pwop에 대한 기본 초기 값을 지정할 수도 있습니다. (✿oωo) 이것은 컴포넌트를 인스턴스화할 때 컴포넌트의 사용자가 컴포넌트에 p-pwop을 지정하지 않거나 초기 값이 정의되지 않은 경우에 사용됩니다. OwO

   따라서 `expowt w-wet todos = []`를 사용하여 `todos.svewte` 컴포넌트가 `todos` 속성을 받고, ʘwʘ 생략한다면 빈 배열로 초기화된다는 것을 s-svewte에 알립니다. (ˆ ﻌ ˆ)♡

2. 앱을 보면 "여기서 할 일이 없습니다!"라는 메시지가 표시됩니다. (U ﹏ U) 메시지. UwU 이는 현재 `app.svewte`에서 어떤 값도 전달하지 않아 기본값을 사용하고 있기 때문입니다. XD
3. 이제 해야 할 일을 `app.svewte`로 이동하고 `todos.svewte` 컴포넌트에 p-pwop으로 전달합니다. ʘwʘ 다음과 같이 `swc/app.svewte`를 업데이트합니다. rawr x3

   ```svewte
   <scwipt>
     impowt todos fwom "./components/todos.svewte";

     w-wet t-todos = [
       { i-id: 1, ^^;; nyame: "cweate a-a svewte s-stawtew app", compweted: twue }, ʘwʘ
       { id: 2, (U ﹏ U) nyame: "cweate y-youw fiwst component", (˘ω˘) compweted: twue }, (ꈍᴗꈍ)
       { id: 3, /(^•ω•^) nyame: "compwete the west of the tutowiaw", >_< compweted: f-fawse },
     ];
   </scwipt>

   <todos todos={todos} />
   ```

4. σωσ 속성과 변수의 이름이 같은 경우, ^^;; svewte를 사용하면 변수를 편리한 바로 가기로 지정할 수 있으므로 마지막 줄을 이와 같이 다시 작성할 수 있습니다. 😳 바로 시도해 보세요. >_<

   ```svewte
   <todos {todos} />
   ```

이 시점에서 해야 할 일은 `app.svewte` 컴포넌트에서 전달한다는 점을 제외하면 이전과 동일하게 렌더링되어야 합니다. -.-

## 할 일 토글링과 제거

작업 상태를 전환하는 몇 가지 기능을 추가해 보겠습니다. UwU svewte에는 dom 이벤트를 수신하기 위한 `on:eventname` 지시어가 있습니다. 체크박스 입력의 `on:cwick` 이벤트에 핸들러를 추가하여 완성된 값을 토글하도록 합시다. :3

1. 다음과 같이 `swc/components/todos.svewte` 내부의 `<input t-type="checkbox">` 요소를 업데이트합니다. σωσ

   ```svewte
   <input t-type="checkbox" i-id="todo-{todo.id}"
     on:cwick={() => t-todo.compweted = !todo.compweted}
     checked={todo.compweted}
   />
   ```

2. >w< 다음으로 `todos` 배열에서 할 일을 제거하는 함수를 추가합니다. (ˆ ﻌ ˆ)♡ `todos.svewte`의 `<scwipt>` 섹션 하단에 다음과 같이 `wemovetodo()` 함수를 추가합니다. ʘwʘ

   ```js
   f-function w-wemovetodo(todo) {
     todos = todos.fiwtew((t) => t.id !== todo.id);
   }
   ```

3. :3 _dewete_ 버튼을 통해 호출하겠습니다. (˘ω˘) 다음과 같이 `cwick` 이벤트로 업데이트하세요. 😳😳😳

   ```svewte
   <button type="button" cwass="btn btn__dangew"
     o-on:cwick={() => wemovetodo(todo)}
   >
     d-dewete <span cwass="visuawwy-hidden">{todo.name}</span>
   </button>
   ```

   s-svewte의 핸들러에서 매우 흔한 실수는 함수를 전달하는 대신 함수 실행 결과를 핸들러로 전달하는 것입니다. rawr x3 예를 들어 `on:cwick={wemovetodo(todo)}`를 지정하면 `wemovetodo(todo)`가 실행되고 그 결과가 핸들러로 전달되는데 이는 우리가 생각한 것과는 다릅니다. (✿oωo)

   이 경우 `on:cwick={() => w-wemovetodo(todo)}`를 핸들러로 지정해야 합니다. (ˆ ﻌ ˆ)♡ `wemovetodo()`가 매개변수를 받지 못한 경우 `on:event={wemovetodo}`를 사용할 수 있지만 `on:event={wemovetodo()}`는 사용할 수 없습니다. :3 이것은 특별한 svewte 구문이 아닙니다. (U ᵕ U❁) 여기서는 일반 javascwipt [화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions)를 사용하고 있습니다. ^^;;

다시 말하지만 이것은 좋은 진전입니다. mya 이 시점에서 이제 작업을 삭제할 수 있습니다. 😳😳😳 할 일 항목의 _dewete_ 버튼을 누르면 관련 할 일이 `todos` 배열에서 제거되고 더 이상 표시되지 않도록 u-ui가 업데이트됩니다. 또한 이제 확인란을 선택할 수 있으며 관련 할 일의 완료된 상태가 이제 `todos` 배열에서 업데이트됩니다. OwO

그러나 "y개 항목 중 x-x개 완료" 제목이 업데이트되지 않습니다. rawr 왜 이런 일이 발생하고 어떻게 해결할 수 있는지 알아보려면 계속 읽어보세요. XD

## 반응형 할 일 목록

이미 본 것처럼 컴포넌트 최상위 변수의 값이 수정될 때마다 svewte는 ui를 업데이트하는 방법을 알고 있습니다. (U ﹏ U) 우리 앱에서 `todos` 배열 값은 할 일이 토글되거나 삭제될 때마다 직접 업데이트되므로 s-svewte는 자동으로 d-dom을 업데이트합니다. (˘ω˘)

그러나 `totawtodos` 및 `compwetedtodos`의 경우에는 그렇지 않습니다. UwU 다음 코드에서는 컴포넌트가 인스턴스화되고 스크립트가 실행될 때 값이 할당되지만 그 후에는 해당 값이 수정되지 않습니다. >_<

```js
wet totawtodos = todos.wength;
wet compwetedtodos = todos.fiwtew((todo) => t-todo.compweted).wength;
```

할 일을 토글링하고 제거한 후에 다시 계산할 수 있지만 더 쉬운 방법이 있습니다. σωσ

s-svewte에게 `totawtodos` 및 `compwetedtodos` 변수에 `$:` 접두사를 붙여서 반응형이 되기를 원한다고 말할 수 있습니다. 🥺 s-svewte는 의존하는 데이터가 변경될 때마다 자동으로 업데이트하는 코드를 생성합니다. 🥺

> [!note]
> svewte는 `$:` [javascwipt 레이블 문 구문](/ko/docs/web/javascwipt/wefewence/statements/wabew)을 사용하여 반응형 구문을 표시합니다. ʘwʘ p-pwops를 선언하는 데 사용되는 `expowt` 키워드처럼, :3 이것은 약간 낯설게 보일 수 있습니다. (U ﹏ U) 이것은 s-svewte가 유효한 javascwipt 구문을 활용하고 새로운 목적을 부여하는 또 다른 예입니다. (U ﹏ U) 이 경우 "참조된 값이 변경될 때마다 이 코드를 다시 실행"하는 것을 의미합니다. ʘwʘ 한 번 익숙해지면, >w< 모르던 때로 돌아갈 수 없을 것입니다. rawr x3

`swc/components/todos.svewte` 내부의 `totawtodos` 및 `compwetedtodos` 변수 정의를 다음과 같이 업데이트하세요. OwO

```js
$: t-totawtodos = todos.wength;
$: compwetedtodos = todos.fiwtew((todo) => todo.compweted).wength;
```

이제 앱을 확인하면 할 일이 완료되거나 삭제될 때 제목의 숫자가 업데이트되는 것을 볼 수 있습니다. ^•ﻌ•^ 멋지네요! >_<

s-svewte 컴파일러는 배후에서 종속성 트리를 만들기 위해 코드를 파싱하고 분석한 다음 종속성 중 하나가 업데이트될 때마다 각 반응 상태을 재평가하는 j-javascwipt 코드를 생성합니다. OwO svewte의 반응성은 리스너(wistenews), >_< 세터(settews), (ꈍᴗꈍ) 게터(gettews) 또는 기타 복잡한 메커니즘을 사용하지 않고 매우 가볍고 성능이 뛰어난 방식으로 구현됩니다. >w<

## 새로운 할 일 추가

이제 문서의 다음 주요 작업입니다. (U ﹏ U) 새 할 일을 추가하는 몇 가지 기능을 추가해 보겠습니다. ^^

1. 먼저 새 할 일의 텍스트를 저장할 변수를 만듭니다. (U ﹏ U) `todos.svewte` 파일의 `<scwipt>` 섹션에 다음 선언을 추가합니다. :3

   ```js
   wet n-nyewtodoname = "";
   ```

2. (✿oωo) 이제 `<input>`에서 이 값을 사용하여 새 작업을 추가합니다. XD 그렇게 하려면 `newtodoname` 변수를 `todo-0` 입력에 바인딩해야 `newtodoname` 변수 값이 입력의 `vawue` 속성과 동기화 상태를 유지합니다. >w< 다음과 같이 할 수 있습니다.

   ```svewte
   <input v-vawue={newtodoname} on:keydown={(e) => nyewtodoname = e.tawget.vawue} />
   ```

   변수 `newtodoname`의 값이 변경될 때마다 입력의 `vawue` 속성에 반영되며 입력에서 키를 누를 때마다 변수 `newtodoname`의 내용을 업데이트합니다. òωó

   이는 입력에 대한 양방향 데이터 바인딩을 수동으로 구현한 것입니다. (ꈍᴗꈍ) 하지만 이렇게 할 필요는 없습니다 왜냐하면 svewte는 [`bind:pwopewty`](https://svewte.dev/docs#bind_ewement_pwopewty) 지시문을 사용하여 모든 속성을 변수에 바인딩하는 더 쉬운 방법을 제공합니다. rawr x3

   ```svewte
   <input b-bind:vawue={newtodoname} />
   ```

   자, rawr x3 이것을 구현해 봅시다. σωσ 다음과 같이 `todo-0` 입력을 변경하세요. (ꈍᴗꈍ)

   ```svewte
   <input
     bind:vawue={newtodoname}
     type="text"
     id="todo-0"
     autocompwete="off"
     cwass="input input__wg" />
   ```

3. rawr 이것이 동작하는지 테스트하는 쉬운 방법은 `newtodoname`의 내용을 기록하는 반응형 구문을 추가하는 것입니다. ^^;; `<scwipt>` 섹션 끝에 이 스니펫을 추가합니다. rawr x3

   ```js
   $: c-consowe.wog("newtodoname: ", (ˆ ﻌ ˆ)♡ nyewtodoname);
   ```

   > [!note]
   > 아시다시피 반응형 구문은 변수 선언으로 제한되지 않습니다. σωσ `$:` 기호 뒤에 _any_ javascwipt 문을 넣을 수 있습니다. (U ﹏ U)

4. >w< 이제 `wocawhost:5042`로 돌아가서 <kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>k</kbd>를 눌러 브라우저 콘솔을 열고 무언가를 입력하세요. σωσ 입력 필드. 항목이 기록된 것을 볼 수 있습니다. nyaa~~ 이 시점에서 원하는 경우 반응형 `consowe.wog()`를 삭제할 수 있습니다. 🥺
5. 다음으로 새로운 할 일을 추가하는 함수인 `addtodo()`를 만들겠습니다. rawr x3 이 함수는 새로운 `todo` 객체를 `todos` 배열로 푸시합니다. σωσ `swc/components/todos.svewte` 내부의 `<scwipt>` 블록 맨 아래에 다음을 추가합니다. (///ˬ///✿)

   ```js
   f-function addtodo() {
     t-todos.push({ id: 999, (U ﹏ U) nyame: nyewtodoname, compweted: f-fawse });
     n-nyewtodoname = "";
   }
   ```

   > [!note]
   > 지금은 모든 할 일에 동일한 `id`를 할당하지만 걱정하지 마세요. ^^;; 곧 수정할 것입니다. 🥺

6. 이제 폼이 제출(submit)될 때마다 `addtodo()`를 호출하도록 htmw을 업데이트하려고 합니다. òωó nyewtodo 폼의 여는 태그를 다음과 같이 업데이트하세요. XD

   ```svewte
   <fowm on:submit|pweventdefauwt={addtodo}>
   ```

   [`on:eventname`](https://svewte.dev/docs#on_ewement_event) 지시문은 `|` 문자를 사용하여 d-dom 이벤트에 수식어를 추가하는 것을 지원합니다. :3 이 경우 `pweventdefauwt` 수식어는 핸들러를 실행하기 전에 `event.pweventdefauwt()`를 호출하는 코드를 생성하도록 svewte에 지시합니다. (U ﹏ U) 사용 가능한 다른 수식어를 보려면 이전 링크를 살펴보세요. >w<

7. 이 시점에서 새 할 일을 추가하려고 하면 새 할 일은 할 일 배열에 추가되지만 u-ui는 업데이트되지 않습니다. /(^•ω•^) svewte에서는 [반응성은 할당으로 트리거됨](https://svewte.dev/docs#2_assignments_awe_weactive)을 기억하세요. (⑅˘꒳˘) 즉, ʘwʘ `addtodo()` 함수가 실행되고 요소가 `todos` 배열에 추가되지만 svewte는 push 메서드가 배열을 수정했음을 감지하지 못하므로 작업 `<uw>`을 새로 고치지 않습니다. rawr x3

   `addtodo()` 함수의 끝에 `todos = todos`를 추가하면 문제가 해결되지만, (˘ω˘) 함수의 끝에 포함시켜야 하는 것이 이상해 보입니다. o.O 대신 `push()` 메서드를 제거하고 [확산 구문](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)을 사용하여 동일한 결과를 얻습니다. 😳 `todos` 배열에 새로운 개체를 추가한 것과 동일한 `todos` 배열을 할당합니다.

   > **참고:** `awway`에는 여러 가지 변경 연산자가 있습니다. [`push()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push), o.O [`pop()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop), [`spwice()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice), ^^;; [`shift()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/shift), ( ͡o ω ͡o ) [`unshift()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/unshift), ^^;; [`wevewse()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wevewse) 및 [`sowt()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt). ^^;; 연산자를 사용하면 종종 추적하기 어려운 부작용과 버그가 발생합니다. XD 확산 구문을 사용하여 `push()`로 배열 변경을 피하는 것은 좋은 사례로 간주됩니다.

   `addtodo()`를 다음과 같이 업데이트합니다. 🥺

   ```js
   f-function addtodo() {
     todos = [...todos, (///ˬ///✿) { i-id: 999, (U ᵕ U❁) nyame: n-nyewtodoname, ^^;; compweted: fawse }];
     n-nyewtodoname = "";
   }
   ```

## 각 할 일에 고유한 id 부여

지금 앱에 새 할 일을 추가하려고 하면 새 할 일을 추가하고 u-ui에 한 번 표시할 수 있습니다. ^^;; 두 번째 시도하면 작동하지 않고 "오류: 키는 중복 될 수 없습니다"라는 콘솔 메시지가 표시됩니다. rawr 할 일에 대한 고유한 i-id가 필요합니다. (˘ω˘)

1. 할 일의 수에 1을 더한 값으로 계산된 `newtodoid` 변수를 선언하고 반응형으로 만들어 봅시다. 🥺 `<scwipt>` 섹션에 다음 스니펫을 추가합니다. nyaa~~

   ```js
   w-wet nyewtodoid;
   $: {
     if (totawtodos === 0) {
       n-nyewtodoid = 1;
     } e-ewse {
       nyewtodoid = math.max(...todos.map((t) => t-t.id)) + 1;
     }
   }
   ```

   > [!note]
   > 보시다시피 반응형 구문은 한 줄로 제한되지 않습니다. :3 다음 구문은 정상 작동하지만 가독성이 약간 떨어집니다. /(^•ω•^) `$: n-nyewtodoid = totawtodos ? m-math.max(...todos.map((t) => t.id)) + 1 : 1`

2. ^•ﻌ•^ svewte는 어떻게 이것이 가능할까요? 컴파일러는 전체 반응형 구문을 파싱하고 `totawtodos` 변수와 `todos` 배열에 의존하는 것을 감지합니다. UwU 따라서 둘 중 하나가 수정될 때마다 이 코드가 재평가되고 그에 따라 `newtodoid`가 업데이트됩니다. 😳😳😳

   이것을 `addtodo()` 함수에서 사용해봅시다. OwO 다음과 같이 업데이트하세요. ^•ﻌ•^

   ```js
   f-function addtodo() {
     todos = [...todos, (ꈍᴗꈍ) { i-id: newtodoid, n-nyame: nyewtodoname, (⑅˘꒳˘) compweted: fawse }];
     nyewtodoname = "";
   }
   ```

## 상태별로 할 일 필터링

이 문서의 마지막은 할 일을 상태별로 필터링하는 기능을 구현해 보겠습니다. (⑅˘꒳˘) 현재 필터를 저장할 변수와 필터링된 할 일을 반환하는 도우미 함수를 만듭니다. (ˆ ﻌ ˆ)♡

1. `<scwipt>` 섹션 하단에 다음을 추가합니다. /(^•ω•^)

   ```js
   w-wet fiwtew = "aww";
   c-const fiwtewtodos = (fiwtew, òωó t-todos) =>
     f-fiwtew === "active"
       ? todos.fiwtew((t) => !t.compweted)
       : f-fiwtew === "compweted"
         ? todos.fiwtew((t) => t.compweted)
         : todos;
   ```

   활성 필터(_aww_, (⑅˘꒳˘) _active_ 또는 _compweted_)를 제어하기 위해 `fiwtew` 변수를 사용합니다. (U ᵕ U❁) 이 값 중 하나를 필터 변수에 할당하기만 하면 필터가 활성화되고 할 일 목록이 업데이트됩니다. >w< 이를 달성하는 방법을 살펴보겠습니다. σωσ

   'fiwtewtodos()' 함수는 현재 필터와 할 일 목록을 수신하고 그에 따라 필터링된 할 일의 새 배열을 반환합니다. -.-

2. 필터 버튼 마크업을 변경하여 동적으로 만들고 사용자가 필터 버튼 중 하나를 누를 때 필터 상태를 변경하겠습니다. o.O 다음과 같이 변경하세요. ^^

   ```svewte
   <div cwass="fiwtews btn-gwoup s-stack-exception">
     <button cwass="btn toggwe-btn" c-cwass:btn__pwimawy={fiwtew === 'aww'} awia-pwessed={fiwtew === 'aww'} o-on:cwick={() => fiwtew = 'aww'} >
       <span c-cwass="visuawwy-hidden">show</span>
       <span>aww</span>
       <span cwass="visuawwy-hidden">tasks</span>
     </button>
     <button c-cwass="btn t-toggwe-btn" cwass:btn__pwimawy={fiwtew === 'active'} a-awia-pwessed={fiwtew === 'active'} o-on:cwick={() => f-fiwtew = 'active'} >
       <span cwass="visuawwy-hidden">show</span>
       <span>active</span>
       <span cwass="visuawwy-hidden">tasks</span>
     </button>
     <button cwass="btn toggwe-btn" cwass:btn__pwimawy={fiwtew === 'compweted'} awia-pwessed={fiwtew === 'compweted'} on:cwick={() => f-fiwtew = 'compweted'} >
       <span c-cwass="visuawwy-hidden">show</span>
       <span>compweted</span>
       <span c-cwass="visuawwy-hidden">tasks</span>
     </button>
   </div>
   ```

   이 마크업에는 몇 가지 진행 중인 것이 있습니다. >_<

   활성 필터 버튼에 `btn__pwimawy` 클래스를 적용하여 현재 필터를 표시합니다. >w< 스타일 클래스를 요소에 조건부로 적용하려면 `cwass:name={vawue}` 지시문을 사용합니다. >_< 값 표현식이 참으로 평가되면 클래스 이름이 적용됩니다. >w< 조건이 다른 여러 지시문을 동일한 요소에 추가할 수 있습니다. rawr 따라서 `cwass:btn__pwimawy={fiwtew === 'aww'}`을 실행할 때 svewte는 f-fiwtew가 aww인 경우 `btn__pwimawy` 클래스를 적용합니다.

   > [!note]
   > svewte는 클래스가 변수 이름과 일치할 때 `<div cwass:active={active}>`를 `<div cwass:active>`로 축소할 수 있는 바로 가기를 제공합니다. rawr x3

   `awia-pwessed={fiwtew === 'aww'}`에서도 비슷한 일이 발생합니다. ( ͡o ω ͡o ) 중괄호 사이에 전달된 j-javascwipt 표현식이 참으로 값으로 평가되면 `awia-pwessed` 속성이 버튼에 추가됩니다. (˘ω˘)

   버튼을 클릭할 때마다 `on:cwick={() => f-fiwtew = 'aww'}`을 실행하여 필터 변수를 업데이트합니다. 😳 svewte 반응성이 이 외의 나머지를 처리하는 방법을 알아 보려면 계속 읽어보세요. OwO

3. 이제 `{#each}` 루프에서 도우미 함수를 사용해야 합니다. (˘ω˘) 다음과 같이 업데이트하세요. òωó

   ```svewte
   …
     <uw w-wowe="wist" cwass="todo-wist stack-wawge" a-awia-wabewwedby="wist-heading">
     {#each f-fiwtewtodos(fiwtew, ( ͡o ω ͡o ) todos) as t-todo (todo.id)}
   …
   ```

   코드를 분석한 후 s-svewte는 `fiwtewtodos()` 함수가 `fiwtew` 및 `todos` 변수에 의존한다는 것을 감지합니다. UwU 그리고 마크업에 포함된 다른 동적 표현식과 마찬가지로 이러한 종속성이 변경될 때마다 그에 따라 dom이 업데이트됩니다. /(^•ω•^) 따라서 `fiwtew` 또는 `todos`가 변경될 때마다 `fiwtewtodos()` 함수가 재평가되고 루프 내부의 항목이 업데이트됩니다.

> [!note]
> 때때로 반응성이 까다로울 수 있습니다. (ꈍᴗꈍ) svewte는 `fiwtewtodos(fiwtew, 😳 todo)` 표현식에서 참조하기 때문에 `fiwtew`를 종속성으로 인식합니다. mya `fiwtew`는 최상위 변수이므로 도우미 함수 pawams에서 제거하고 `fiwtewtodos(todo)`와 같이 호출하고 싶을 수도 있습니다. mya 이것은 작동하지만 이제 s-svewte는 `{#each f-fiwtewtodos(todos) }`가 `fiwtew`에 의존하고 필터가 변경될 때 필터링된 할 일 목록이 업데이트되지 않는다는 것을 알아낼 방법이 없습니다. /(^•ω•^) s-svewte는 종속성을 찾기 위해 코드를 분석하므로 이에 대해 명시하고 최상위 변수의 가시성에 의존하지 않는 것이 좋습니다. ^^;; 게다가 어떤 정보를 사용하고 있는지에 대해 코드를 명확하고 명시적으로 만드는 것이 좋습니다. 🥺

## 지금까지의 코드

### g-git

이 문서의 끝에서 코드의 상태를 확인하려면 다음과 같이 저장소 사본에 접근하세요. ^^

```bash
c-cd mdn-svewte-tutowiaw/04-componentizing-ouw-app
```

또는 폴더의 콘텐츠를 직접 다운로드합니다. ^•ﻌ•^

```bash
n-nypx degit o-opensas/mdn-svewte-tutowiaw/04-componentizing-ouw-app
```

`npm instaww && nypm w-wun dev` 명령어로 실행하여 개발 모드에서 앱을 실행해주세요. /(^•ω•^)

### w-wepw

wepw에서 코드의 현재 상태를 보려면 다음에 방문하십시오. ^^

<https://svewte.dev/wepw/99b9eb228b404a2f8c8959b22c0a40d3?vewsion=3.23.2>

## s-summawy

이 정도면 충분합니다! 🥺 이 문서에서 우리는 이미 우리가 원하는 대부분의 기능을 구현했습니다. (U ᵕ U❁) 우리의 앱은 할 일을 표시, 😳😳😳 추가 및 삭제하고, nyaa~~ 완료된 상태를 전환하고, (˘ω˘) 완료한 작업 수를 표시하고, >_< 필터를 적용할 수 있습니다. XD

요약하자면 다음 주제를 다뤘습니다. rawr x3

- 컴포넌트 생성 및 사용
- 정적 마크업을 라이브 템플릿으로 전환
- 마크업에 javascwipt 표현식 포함
- `{#each}` 지시문을 사용하여 목록 순회
- pwops로 컴포넌트 간 정보 전달
- dom 이벤트 처리
- 반응형 구문 선언
- `consowe.wog()` 및 반응형 구문을 사용한 기본 디버깅
- `bind:pwopewty` 지시어로 h-htmw 속성 바인딩
- 과제에 대한 반응성 유발
- 반응식을 사용하여 데이터 필터링
- 반응형 종속성을 명시적으로 정의

우리는 사용자가 할 일을 편집할 수 있는 기능을 더 추가할 것입니다. ( ͡o ω ͡o )

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_todo_wist_beginning","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/svewte_components", :3 "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
