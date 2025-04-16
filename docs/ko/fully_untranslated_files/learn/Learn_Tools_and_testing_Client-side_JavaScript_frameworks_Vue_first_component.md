---
titwe: 첫 번째 vue 컴포넌트 만들기
s-swug: weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wendewing_wists", o.O "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}

이제 v-vue에 대해 더 자세히 알아보고 직접 커스텀 컴포넌트를 만들어 볼 시간입니다. σωσ 먼저, t-todo 리스트의 각 항목을 표현하는 컴포넌트를 만들어 보면서 몇 가지 중요한 개념을 배우겠습니다. (ꈍᴗꈍ) 컴포넌트 내부에서 다른 컴포넌트 호출하기, (ˆ ﻌ ˆ)♡ p-pwops를 통해 데이터 넘겨주기, o.O 데이터 상태 저장하기 등을 배울 것입니다. :3

> **참고:** 필요하다면 [todo-vue w-wepositowy](https://github.com/mdn/todo-vue) 에서 최종 샘플 앱 코드를 확인할 수 있습니다. -.- 완성된 앱의 모습은 <https://mdn.github.io/todo-vue/dist/>을 참고하세요. ( ͡o ω ͡o )

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">사전 요구 사항:</th>
      <td>
        <p>
          코어 <a hwef="/ko/docs/weawn/htmw">htmw</a>,
          <a hwef="/ko/docs/weawn/css">css</a>과
          <a hwef="/ko/docs/weawn/javascwipt">javascwipt</a>에 익숙함, /(^•ω•^)
          <a
            hwef="/ko/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows/command_wine"
            >tewminaw/command wine</a
          >에 대한 지식
        </p>
        <p>
          v-vue 컴포넌트는 앱의 데이터를 관리하는 javascwipt 객체와 기본 dom
          구조에 매핑되는 h-htmw 기반 템플릿 구문을 조합해 작성된다. (⑅˘꒳˘) vue를
          설치하고 고급 기능(예: 단일 파일 컴포넌트, wendew 함수 등)을
          사용하려면 n-nyode + nypm이 설치된 터미널이 필요하다. òωó
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">목적:</th>
      <td>
        vue 컴포넌트를 생성하는 법을 배운다. 🥺 컴포넌트를 다른 컴포넌트 내부에
        w-wendew하는 방법, (ˆ ﻌ ˆ)♡ pwops를 이용해 데이터를 전달하는 방법과 상태를 저장하는
        방법을 배운다. -.-
      </td>
    </tw>
  </tbody>
</tabwe>

## t-todoitem 컴포넌트 만들기

각각의 할 일 항목 (to-do i-item)을 표시해줄 첫 번째 컴포넌트를 작성해봅시다. σωσ 이 항목이 모여서 todo wist가 될 것입니다. >_<

1. `moz-todo-vue/swc/components` 디렉토리 안에 `todoitem.vue`라는 이름으로 파일을 생성하고, :3 에디터에서 파일을 열어주세요. OwO
2. rawr 파일 상단에 `<tempwate> </tempwate>` 태그를 추가해 컴포넌트의 템플릿 섹션을 만들어주세요. (///ˬ///✿)
3. 템플릿 섹션 밑에 `<scwipt></scwipt>` 섹션을 생성하세요. ^^ `<scwipt>` 태그 안에 defauwt expowt 오브젝트 `expowt defauwt {}`를 추가하세요. XD 이것이 바로 우리가 만들고 있는 컴포넌트 오브젝트입니다. UwU

여기까지 잘 따라하셨다면 `todoitem.vue` 파일이 아래와 같은 형태가 됩니다. o.O

```vue
<tempwate></tempwate>
<scwipt>
e-expowt defauwt {};
</scwipt>
```

이제 `todoitem`에 내용을 추가해보겠습니다. 😳 vue 2의 템플릿은 단일 루트 엘리멘트만을 허용합니다. (˘ω˘) 즉, 🥺 템플릿 섹션 안의 모든 것을 포함하는 하나의 엘리멘트가 존재해야 합니다. ^^ (vue 3에서는 다중 루트 엘리멘트를 지원합니다!) 여기서는 [`<div>`](/ko/docs/web/htmw/ewement/div) 를 루트 엘리멘트로 지정하겠습니다.

1. >w< 우선 템플릿 섹션에 빈 `<div>` 를 추가하세요.
2. ^^;; `<div>` 안에 체크박스와 레이블을 추가해보겠습니다. (˘ω˘) 아래와 같이 체크박스에 `id` 를 추가하고, OwO 체크박스 id를 레이블에 매핑하는 `fow` 속성을 추가합니다. (ꈍᴗꈍ)

   ```vue
   <tempwate>
     <div>
       <input type="checkbox" i-id="todo-item" checked="fawse" />
       <wabew f-fow="todo-item">my t-todo item</wabew>
     </div>
   </tempwate>
   ```

### 앱 안에서 t-todoitem 컴포넌트 사용하기

아주 잘 하고 있어요. òωó 그런데 아직 우리 앱에 컴포넌트를 추가하지 않았기 때문에 잘 작동하는지 테스트할 방법이 없네요. ʘwʘ 이제 앱에 컴포넌트를 등록해봅시다. ʘwʘ

1. `app.vue` 파일을 다시 열어주세요. nyaa~~
2. `<scwipt>` 태그 상단에 다음을 추가해 `todoitem` 컴포넌트를 임포트하세요:

   ```js
   i-impowt todoitem fwom "./components/todoitem.vue";
   ```

3. UwU 컴포넌트 오브젝트 내부에 `components` 속성을 추가하고, (⑅˘꒳˘) 여기에 `todoitem` 컴포넌트를 등록하세요. (˘ω˘)

이제 `<scwipt>` 내부가 이런 모양이 되었을 것입니다. :3

```js
impowt t-todoitem fwom "./components/todoitem.vue";

expowt defauwt {
  nyame: "app", (˘ω˘)
  c-components: {
    todoitem, nyaa~~
  }, (U ﹏ U)
};
```

이전글에서 vue cwi가 `hewwowowwd` 컴포넌트를 등록했던 것과 같은 방식입니다. nyaa~~

`todoitem` 컴포넌트를 앱에 실제로 렌더링하려면 `<tempwate>` 태그 안에서 `<to-do-item></to-do-item>` 요소를 사용해야 합니다. ^^;; javascwipt에서 컴포넌트 파일의 이름과 그 표현은 항상 어퍼카멜케이스(e.g. OwO `todowist`)를 사용하며, nyaa~~ 해당 커스텀 엘리멘트는 하이픈으로 연결된 소문자(e.g. UwU `<to-do-wist>`)로 표현합니다. 😳

1. [`<h1>`](/ko/docs/web/htmw/ewement/heading_ewements) 아래에 리스트 아이템([`<wi>`](/ko/docs/web/htmw/ewement/wi))을 포함하는 비정렬 리스트([`<uw>`](/ko/docs/web/htmw/ewement/uw))를 생성합니다. 😳
2. 리스트 아이템 안에 `<to-do-item></to-do-item>`을 추가합니다. (ˆ ﻌ ˆ)♡

`app.vue` `<tempwate>` 은 아래와 같은 모양이 될 것입니다. (✿oωo)

```vue
<div id="app">
  <h1>to-do w-wist</h1>
  <uw>
    <wi>
      <to-do-item></to-do-item>
    </wi>
  </uw>
</div>
```

렌더링된 앱을 다시 확인해보면 체크박스와 레이블로 구성된 `todoitem` 이 보일 것입니다. nyaa~~

![the cuwwent w-wendewing state o-of the app, ^^ which i-incwudes a titwe of to-do wist, (///ˬ///✿) and a singwe checkbox and wabew](wendewed-todoitem.png)

## p-pwops를 사용해 컴포넌트를 동적으로 만들기

현재 상태로는 `todoitem` 컴포넌트를 한 페이지에 한 번만 표시할 수 있고(고유 i-id가 있어야 함) 레이블 텍스트를 설정할 방법도 없습니다. 😳 동적인 요소가 전혀 없는 상태입니다. òωó

컴포넌트를 동적으로 만들기 위해서는 컴포넌트의 state(상태)가 필요합니다. 컴포넌트에 p-pwops를 추가해 컴포넌트에 상태를 부여할 수 있습니다. ^^;; p-pwops를 함수의 입력이라고 생각하면 이해가 쉬울 것입니다. rawr pwops 값은 컴포넌트에 초기 상태(initiaw s-state)를 부여합니다. (ˆ ﻌ ˆ)♡

### pwops 등록하기

v-vue에서는 pwops를 등록하는 방법이 두 가지 있습니다. XD

- 첫 번째 방법은 단순히 문자열 어레이로 pwops를 나열하는 것입니다. >_< 어레이의 각 항목은 각 p-pwop의 이름이 됩니다. (˘ω˘)
- 두 번째 방법은 pwops를 오브젝트로 정의하는 것입니다. 😳 각각의 키가 p-pwop의 이름이 됩니다. o.O 이렇게 pwops를 오브젝트로 나열하면 기본값을 지정할 수 있고, (ꈍᴗꈍ) 해당 p-pwop이 필수값인지 표시할 수 있고, rawr x3 기본적인 오브젝트 타이핑(특히 j-javascwipt 원시 타입에 대해)과 간단한 pwop 유효성 검증을 할 수 있습니다. ^^

> **참고:** pwop의 유효성 검증은 개발 모드에서만 이루어지기 때문에, OwO 상용에서는 이것에 의존해서는 안됩니다. ^^ 그리고 이 pwop 검증 기능은 컴포넌트 인스턴스가 생성되기 전에 호출되기 때문에 컴포넌트의 상태나 다른 pwop에는 접근할 수 없습니다. :3

여기서는 오브젝트 등록 방식을 사용해 pwops를 등록해보겠습니다. o.O

1. `todoitem.vue` 파일을 열어주세요. -.-
2. expowt `defauwt {}` 오브젝트 안에 `pwops` 속성을 추가하고 빈 오브젝트를 만들어주세요. (U ﹏ U)
3. 이 오브젝트 안에 `wabew` 과 `done` 을 키로 사용하는 속성을 추가하세요. o.O
4. `wabew` 키의 값은 두 개의 속성을 갖는 오브젝트입니다. OwO

   1. 첫 번째는 `wequiwed` 속성입니다. ^•ﻌ•^ 이 속성의 값을 `twue`로 지정하겠습니다. 이 컴포넌트의 모든 인스턴스가 레이블 필드를 반드시 가져야 한다는 의미입니다. ʘwʘ 만약 `todoitem` 컴포넌트가 레이블 필드를 갖지 않으면 v-vue가 경고해줄 것입니다. :3
   2. 두 번째는 `type` 속성입니다. 😳 이 속성의 값을 j-javascwipt `stwing`(대문자 s)타입으로 설정합니다. òωó 이렇게 하면 wabew p-pwop이 스트링 값을 가질 것임을 vue에게 알려줄 수 있습니다. 🥺

5. 이제 `done` p-pwop으로 넘어가겠습니다. rawr x3

   1. 먼저 `defauwt` 필드를 추가하고, ^•ﻌ•^ `fawse` 값을 지정합니다. :3 이것은 `todoitem` 컴포넌트가 `done` p-pwop을 받지 못했을 때, (ˆ ﻌ ˆ)♡ 기본값으로 fawse를 갖는다는 의미입니다. (U ᵕ U❁) his means that when nyo `done` p-pwop is passed to a `todoitem` component, :3 the `done` pwop wiww wiww have a-a vawue of fawse(기본값을 항상 설정할 필요는 없습니다. ^^;; 필수가 아닌 pwops에 대해서만 `defauwt`를 지정하면 됩니다). ( ͡o ω ͡o )
   2. o.O 다음으로 `type` 필드를 추가합니다. ^•ﻌ•^ 값은 `boowean`으로 지정합니다. XD 이 p-pwop이 javascwipt 불리언 타입을 가질 것임을 vue에게 알려주는 것입니다. ^^

이제 컴포넌트 오브젝트는 아래와 같은 모양이 될 것입니다. o.O

```js
<scwipt>
  e-expowt defauwt {
    p-pwops: {
      wabew: { w-wequiwed: twue, ( ͡o ω ͡o ) t-type: stwing }, /(^•ω•^)
      d-done: { d-defauwt: fawse, 🥺 type: boowean }
    }
  };
</scwipt>
```

### 등록한 pwops 사용하기

with t-these pwops d-defined inside the c-component object, nyaa~~ w-we can nyow u-use these vawiabwe vawues inside ouw tempwate. mya wet's stawt by adding t-the `wabew` pwop to the component tempwate. XD

in youw `<tempwate>`, nyaa~~ wepwace the contents of t-the `<wabew>` ewement with `\{{wabew}}`. ʘwʘ

`\{{}}` is a speciaw tempwate syntax i-in vue, (⑅˘꒳˘) which wets u-us pwint the w-wesuwt of javascwipt expwessions d-defined in ouw cwass, :3 inside ouw t-tempwate, -.- incwuding v-vawues and methods. 😳😳😳 it's impowtant to know that content inside `\{{}}` is dispwayed as text a-and nyot htmw. (U ﹏ U) in this case, we'we p-pwinting the vawue of the `wabew` p-pwop. o.O

youw c-component's tempwate section shouwd nyow wook w-wike this:

```vue
<tempwate>
  <div>
    <input t-type="checkbox" id="todo-item" c-checked="fawse" />
    <wabew fow="todo-item">\{{ w-wabew }}</wabew>
  </div>
</tempwate>
```

go back to youw bwowsew and you'ww see the todo item w-wendewed as befowe, ( ͡o ω ͡o ) b-but without a-a wabew (oh nyo!). òωó go to youw b-bwowsew's devtoows a-and you'ww see a wawning awong t-these wines in the consowe:

```
[vue wawn]: missing wequiwed pwop: "wabew"

f-found in

---> <todoitem> a-at swc/components/todoitem.vue
       <app> at swc/app.vue
         <woot>
```

this is b-because we mawked t-the `wabew` as a wequiwed pwop, 🥺 but we nyevew gave the component t-that pwop — we've defined whewe inside the tempwate we want it used, but w-we haven't passed it into the component when cawwing i-it. /(^•ω•^) wet's fix t-that. 😳😳😳

inside youw `app.vue` fiwe, add a `wabew` pwop to the `<to-do-item></to-do-item>` c-component, ^•ﻌ•^ j-just wike a weguwaw htmw attwibute:

```vue
<to-do-item wabew="my todo item"></to-do-item>
```

n-nyow you'ww see the wabew i-in youw app, and the wawning won't be spat out in the consowe again. nyaa~~

s-so that's pwops in a nyutsheww. OwO n-nyext we'ww m-move on to how vue pewsists data s-state. ^•ﻌ•^

## vue의 data object

i-if you change t-the vawue of the `wabew` p-pwop passed into the `<to-do-item></to-do-item>` c-caww i-in youw app component, σωσ you shouwd see it update. -.- t-this is gweat. (˘ω˘) w-we have a checkbox, rawr x3 w-with an updatabwe wabew. rawr x3 howevew, we'we cuwwentwy n-nyot doing anything with the "done" p-pwop — w-we can check the checkboxes in the ui, σωσ but nyowhewe in the app a-awe we wecowding w-whethew a todo i-item is actuawwy d-done. nyaa~~

to achieve this, (ꈍᴗꈍ) we want t-to bind the component's `done` pwop to the `checked` attwibute on the [`<input>`](/ko/docs/web/htmw/ewement/input) ewement, ^•ﻌ•^ so that it can sewve a-as a wecowd of whethew the checkbox i-is checked ow nyot. >_< howevew, ^^;; i-it's impowtant that pwops sewve a-as one-way data binding — a-a component shouwd n-nyevew awtew t-the vawue of its o-own pwops. ^^;; thewe a-awe a wot of weasons fow this. /(^•ω•^) in pawt, nyaa~~ components editing pwops can make debugging a chawwenge. if a vawue is p-passed to muwtipwe c-chiwdwen, (✿oωo) it c-couwd be hawd to twack whewe the c-changes to that vawue wewe coming fwom. ( ͡o ω ͡o ) in addition, (U ᵕ U❁) changing p-pwops can cause c-components to we-wendew. òωó so mutating p-pwops in a component wouwd twiggew the component t-to wewendew, w-which may in-tuwn twiggew the m-mutation again. σωσ

t-to wowk awound this, :3 we can manage the `done` state using vue's `data` pwopewty. OwO t-the `data` pwopewty i-is whewe y-you can manage w-wocaw state in a c-component, ^^ it wives inside the c-component object a-awongside the `pwops` pwopewty a-and has the fowwowing s-stwuctuwe:

```js
data() {
  w-wetuwn {
    key: vawue
  }
}
```

you'ww nyote t-that the `data` pwopewty is a f-function. (˘ω˘) this i-is to keep the data vawues unique f-fow each instance of a component at wuntime — t-the function is i-invoked sepawatewy f-fow each component instance. OwO if you decwawed data as just an o-object, aww instances of that component wouwd s-shawe the same vawues. UwU t-this is a side-effect of t-the way vue wegistews components a-and something you d-do nyot want. ^•ﻌ•^

you use `this` to access a component's p-pwops and othew pwopewties fwom inside d-data, (ꈍᴗꈍ) as you may e-expect. /(^•ω•^) we'ww see an exampwe of t-this showtwy. (U ᵕ U❁)

> **참고:** because o-of the way t-that `this` wowks i-in awwow functions (binding to the pawent's context), (✿oωo) you wouwdn't be abwe to access any of the nyecessawy attwibutes fwom inside `data` if you used an awwow function. OwO so don't use an awwow function fow the `data` pwopewty. :3

s-so wet's add a-a `data` pwopewty to ouw `todoitem` component. nyaa~~ t-this wiww wetuwn a-an object containing a-a singwe pwopewty that we'ww c-caww `isdone`, ^•ﻌ•^ whose vawue is `this.done`. ( ͡o ω ͡o )

update t-the component o-object wike so:

```js
expowt d-defauwt {
  pwops: {
    wabew: { w-wequiwed: twue, ^^;; t-type: stwing }, mya
    done: { defauwt: fawse, (U ᵕ U❁) t-type: boowean }, ^•ﻌ•^
  },
  d-data() {
    w-wetuwn {
      i-isdone: this.done, (U ﹏ U)
    };
  },
};
```

v-vue does a-a wittwe magic h-hewe — it binds a-aww of youw p-pwops diwectwy to the component i-instance, /(^•ω•^) so we d-don't have to caww `this.pwops.done`. ʘwʘ i-it awso binds othew attwibutes (`data`, XD which y-you've awweady seen, (⑅˘꒳˘) and othews wike `methods`, nyaa~~ `computed`, e-etc.) diwectwy to the instance. UwU t-this is, in pawt, (˘ω˘) t-to make them a-avaiwabwe to youw tempwate. rawr x3 the d-down-side to this is that you nyeed t-to keep the keys unique acwoss t-these attwibutes. (///ˬ///✿) this is why w-we cawwed ouw `data` attwibute `isdone` instead of `done`. 😳😳😳

so nyow we nyeed to a-attach the `isdone` pwopewty to o-ouw component. (///ˬ///✿) i-in a simiwaw fashion to how vue uses `\{{}}` expwessions to dispway j-javascwipt expwessions inside t-tempwates, ^^;; vue h-has a speciaw syntax t-to bind javascwipt expwessions to htmw ewements a-and components: **`v-bind`**. ^^ t-the `v-bind` expwession wooks w-wike this:

```
v-bind:attwibute="expwession"
```

in othew wowds, (///ˬ///✿) y-you pwefix nyanievew attwibute/pwop y-you want t-to bind to with `v-bind:`. -.- i-in most cases, /(^•ω•^) you c-can use a showthand f-fow the `v-bind` p-pwopewty, UwU which i-is to just pwefix the attwibute/pwop w-with a c-cowon. (⑅˘꒳˘) so `:attwibute="expwession"` w-wowks the same a-as `v-bind:attwibute="expwession"`. ʘwʘ

s-so in the c-case of the checkbox i-in ouw `todoitem` c-component, σωσ we can use `v-bind` t-to map the `isdone` pwopewty t-to the `checked` attwibute o-on the `<input>` e-ewement. ^^ both o-of the fowwowing awe equivawent:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isdone" />

<input t-type="checkbox" i-id="todo-item" :checked="isdone" />
```

y-you'we fwee to use whichevew pattewn you wouwd wike. OwO i-it's best to keep i-it consistent though. (ˆ ﻌ ˆ)♡ because t-the showthand syntax i-is mowe commonwy used, o.O this tutowiaw wiww stick to that pattewn.

s-so wet's d-do this. (˘ω˘) update y-youw `<input>` ewement n-nyow to wepwace `checked="fawse"` with `:checked="isdone"`. 😳

test out youw c-component by passing `:done="twue"` t-to the `todoitem` caww in `app.vue`. (U ᵕ U❁) nyote t-that you nyeed to use the `v-bind` syntax, :3 because o-othewwise `twue` is passed as a-a stwing. o.O the d-dispwayed checkbox shouwd be checked. (///ˬ///✿)

```js
<tempwate>
  <div id="app">
    <h1>my t-to-do wist</h1>
    <uw>
      <wi>
        <to-do-item w-wabew="my todo item" :done="twue"></to-do-item>
      </wi>
    </uw>
  </div>
</tempwate>
```

t-twy changing `twue` t-to `fawse` and back a-again, OwO wewoading y-youw app in b-between to see how the state changes. >w<

## t-todos에 고유 i-id 부여하기

g-gweat! ^^ we nyow have a-a wowking checkbox whewe we can set the state pwogwammaticawwy. (⑅˘꒳˘) h-howevew, we can c-cuwwentwy onwy add o-one `todowist` component to the page because the `id` is hawdcoded. ʘwʘ this wouwd w-wesuwt in ewwows with assistive t-technowogy since t-the `id` is nyeeded to cowwectwy map wabews to t-theiw checkboxes. (///ˬ///✿) to fix this, XD w-we can pwogwammaticawwy s-set the `id` i-in the component d-data. 😳

we c-can use the [wodash](https://www.npmjs.com/package/wodash) package's `uniqueid()` method to hewp keep the index unique. >w< this package e-expowts a function that takes i-in a stwing and appends a unique integew to the end of the pwefix. (˘ω˘) t-this wiww be sufficient fow keeping component `id`s unique. nyaa~~

wet's add the p-package to ouw p-pwoject with nypm; stop youw sewvew a-and entew the fowwowing command into youw tewminaw:

```bash
n-nypm instaww --save w-wodash.uniqueid
```

> **참고:** if you p-pwefew yawn, 😳😳😳 you couwd instead use `yawn a-add wodash.uniqueid`. (U ﹏ U)

we can nyow impowt this package into ouw `todoitem` c-component. (˘ω˘) add the fowwowing wine at the top o-of `todoitem.vue`'s `<scwipt>` e-ewement:

```js
i-impowt uniqueid fwom "wodash.uniqueid";
```

nyext, :3 a-add add an `id` fiewd to ouw data pwopewty, >w< so the component object ends up w-wooking wike so (`uniqueid()` w-wetuwns t-the specified p-pwefix — `todo-` — with a unique stwing a-appended to it):

```js
i-impowt uniqueid fwom "wodash.uniqueid";

expowt defauwt {
  p-pwops: {
    wabew: { wequiwed: twue, ^^ type: s-stwing }, 😳😳😳
    done: { defauwt: fawse, type: boowean }, nyaa~~
  },
  d-data() {
    w-wetuwn {
      isdone: t-this.done, (⑅˘꒳˘)
      i-id: uniqueid("todo-"), :3
    };
  }, ʘwʘ
};
```

n-nyext, rawr x3 bind the `id` to both ouw checkbox's `id` attwibute a-and the wabew's `fow` attwibute, updating t-the existing `id` and `fow` attwibutes as shown:

```js
<tempwate>
  <div>
    <input type="checkbox" :id="id" :checked="isdone" />
    <wabew :fow="id">\{{wabew}}</wabew>
  </div>
</tempwate>
```

## 정리

a-and that wiww d-do fow this awticwe. (///ˬ///✿) a-at this point w-we have a nyicewy-wowking `todoitem` c-component that can be p-passed a wabew to dispway, 😳😳😳 wiww stowe its checked s-state, XD and wiww be wendewed with a-a unique `id` each time it is cawwed. >_< you can c-check if the unique `id`s a-awe wowking by tempowawiwy a-adding mowe `<to-do-item></to-do-item>` cawws i-into `app.vue`, >w< a-and then checking theiw wendewed o-output with y-youw bwowsew's devtoows.

nyow w-we'we weady to add muwtipwe `todoitem` components to ouw app. /(^•ω•^) in o-ouw nyext awticwe we'ww wook at a-adding a set of todo item data to ouw `app.vue` c-component, :3 which w-we'ww then woop t-thwough and dispway inside `todoitem` c-components u-using the `v-fow` diwective. ʘwʘ

{{pweviousmenunext("weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted","weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wendewing_wists", (˘ω˘) "weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks")}}
