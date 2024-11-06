---
title: 첫 번째 Vue 컴포넌트 만들기
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

이제 Vue에 대해 더 자세히 알아보고 직접 커스텀 컴포넌트를 만들어 볼 시간입니다. 먼저, Todo 리스트의 각 항목을 표현하는 컴포넌트를 만들어 보면서 몇 가지 중요한 개념을 배우겠습니다. 컴포넌트 내부에서 다른 컴포넌트 호출하기, props를 통해 데이터 넘겨주기, 데이터 상태 저장하기 등을 배울 것입니다.

> **참고:** 필요하다면 [todo-vue repository](https://github.com/mdn/todo-vue) 에서 최종 샘플 앱 코드를 확인할 수 있습니다. 완성된 앱의 모습은 <https://mdn.github.io/todo-vue/dist/>을 참고하세요.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 요구 사항:</th>
      <td>
        <p>
          코어 <a href="/ko/docs/Learn/HTML">HTML</a>,
          <a href="/ko/docs/Learn/CSS">CSS</a>과
          <a href="/ko/docs/Learn/JavaScript">JavaScript</a>에 익숙함,
          <a
            href="/ko/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >에 대한 지식
        </p>
        <p>
          Vue 컴포넌트는 앱의 데이터를 관리하는 JavaScript 객체와 기본 DOM
          구조에 매핑되는 HTML 기반 템플릿 구문을 조합해 작성된다. Vue를
          설치하고 고급 기능(예: 단일 파일 컴포넌트, render 함수 등)을
          사용하려면 node + npm이 설치된 터미널이 필요하다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        Vue 컴포넌트를 생성하는 법을 배운다. 컴포넌트를 다른 컴포넌트 내부에
        render하는 방법, props를 이용해 데이터를 전달하는 방법과 상태를 저장하는
        방법을 배운다.
      </td>
    </tr>
  </tbody>
</table>

## ToDoItem 컴포넌트 만들기

각각의 할 일 항목 (To-Do Item)을 표시해줄 첫 번째 컴포넌트를 작성해봅시다. 이 항목이 모여서 Todo List가 될 것입니다.

1. `moz-todo-vue/src/components` 디렉토리 안에 `ToDoItem.vue`라는 이름으로 파일을 생성하고, 에디터에서 파일을 열어주세요.
2. 파일 상단에 `<template> </template>` 태그를 추가해 컴포넌트의 템플릿 섹션을 만들어주세요.
3. 템플릿 섹션 밑에 `<script></script>` 섹션을 생성하세요. `<script>` 태그 안에 default export 오브젝트 `export default {}`를 추가하세요. 이것이 바로 우리가 만들고 있는 컴포넌트 오브젝트입니다.

여기까지 잘 따라하셨다면 `ToDoItem.vue` 파일이 아래와 같은 형태가 됩니다.

```vue
<template></template>
<script>
export default {};
</script>
```

이제 `ToDoItem`에 내용을 추가해보겠습니다. Vue 2의 템플릿은 단일 루트 엘리멘트만을 허용합니다. 즉, 템플릿 섹션 안의 모든 것을 포함하는 하나의 엘리멘트가 존재해야 합니다. (Vue 3에서는 다중 루트 엘리멘트를 지원합니다!) 여기서는 [`<div>`](/ko/docs/Web/HTML/Element/div) 를 루트 엘리멘트로 지정하겠습니다.

1. 우선 템플릿 섹션에 빈 `<div>` 를 추가하세요.
2. `<div>` 안에 체크박스와 레이블을 추가해보겠습니다. 아래와 같이 체크박스에 `id` 를 추가하고, 체크박스 id를 레이블에 매핑하는 `for` 속성을 추가합니다.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" checked="false" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### 앱 안에서 TodoItem 컴포넌트 사용하기

아주 잘 하고 있어요. 그런데 아직 우리 앱에 컴포넌트를 추가하지 않았기 때문에 잘 작동하는지 테스트할 방법이 없네요. 이제 앱에 컴포넌트를 등록해봅시다.

1. `App.vue` 파일을 다시 열어주세요.
2. `<script>` 태그 상단에 다음을 추가해 `ToDoItem` 컴포넌트를 임포트하세요:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. 컴포넌트 오브젝트 내부에 `components` 속성을 추가하고, 여기에 `ToDoItem` 컴포넌트를 등록하세요.

이제 `<script>` 내부가 이런 모양이 되었을 것입니다.

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

이전글에서 Vue CLI가 `HelloWorld` 컴포넌트를 등록했던 것과 같은 방식입니다.

`ToDoItem` 컴포넌트를 앱에 실제로 렌더링하려면 `<template>` 태그 안에서 `<to-do-item></to-do-item>` 요소를 사용해야 합니다. JavaScript에서 컴포넌트 파일의 이름과 그 표현은 항상 어퍼카멜케이스(e.g. `ToDoList`)를 사용하며, 해당 커스텀 엘리멘트는 하이픈으로 연결된 소문자(e.g. `<to-do-list>`)로 표현합니다.

1. [`<h1>`](/ko/docs/Web/HTML/Element/Heading_Elements) 아래에 리스트 아이템([`<li>`](/ko/docs/Web/HTML/Element/li))을 포함하는 비정렬 리스트([`<ul>`](/ko/docs/Web/HTML/Element/ul))를 생성합니다.
2. 리스트 아이템 안에 `<to-do-item></to-do-item>`을 추가합니다.

`App.vue` `<template>` 은 아래와 같은 모양이 될 것입니다.

```vue
<div id="app">
  <h1>To-Do List</h1>
  <ul>
    <li>
      <to-do-item></to-do-item>
    </li>
  </ul>
</div>
```

렌더링된 앱을 다시 확인해보면 체크박스와 레이블로 구성된 `ToDoItem` 이 보일 것입니다.

![The current rendering state of the app, which includes a title of To-Do List, and a single checkbox and label](rendered-todoitem.png)

## props를 사용해 컴포넌트를 동적으로 만들기

현재 상태로는 `ToDoItem` 컴포넌트를 한 페이지에 한 번만 표시할 수 있고(고유 ID가 있어야 함) 레이블 텍스트를 설정할 방법도 없습니다. 동적인 요소가 전혀 없는 상태입니다.

컴포넌트를 동적으로 만들기 위해서는 컴포넌트의 state(상태)가 필요합니다. 컴포넌트에 props를 추가해 컴포넌트에 상태를 부여할 수 있습니다. props를 함수의 입력이라고 생각하면 이해가 쉬울 것입니다. props 값은 컴포넌트에 초기 상태(initial state)를 부여합니다.

### props 등록하기

Vue에서는 props를 등록하는 방법이 두 가지 있습니다.

- 첫 번째 방법은 단순히 문자열 어레이로 props를 나열하는 것입니다. 어레이의 각 항목은 각 prop의 이름이 됩니다.
- 두 번째 방법은 props를 오브젝트로 정의하는 것입니다. 각각의 키가 prop의 이름이 됩니다. 이렇게 props를 오브젝트로 나열하면 기본값을 지정할 수 있고, 해당 prop이 필수값인지 표시할 수 있고, 기본적인 오브젝트 타이핑(특히 JavaScript 원시 타입에 대해)과 간단한 prop 유효성 검증을 할 수 있습니다.

> **참고:** prop의 유효성 검증은 개발 모드에서만 이루어지기 때문에, 상용에서는 이것에 의존해서는 안됩니다. 그리고 이 prop 검증 기능은 컴포넌트 인스턴스가 생성되기 전에 호출되기 때문에 컴포넌트의 상태나 다른 prop에는 접근할 수 없습니다.

여기서는 오브젝트 등록 방식을 사용해 props를 등록해보겠습니다.

1. `ToDoItem.vue` 파일을 열어주세요.
2. export `default {}` 오브젝트 안에 `props` 속성을 추가하고 빈 오브젝트를 만들어주세요.
3. 이 오브젝트 안에 `label` 과 `done` 을 키로 사용하는 속성을 추가하세요.
4. `label` 키의 값은 두 개의 속성을 갖는 오브젝트입니다.

   1. 첫 번째는 `required` 속성입니다. 이 속성의 값을 `true`로 지정하겠습니다. 이 컴포넌트의 모든 인스턴스가 레이블 필드를 반드시 가져야 한다는 의미입니다. 만약 `ToDoItem` 컴포넌트가 레이블 필드를 갖지 않으면 Vue가 경고해줄 것입니다.
   2. 두 번째는 `type` 속성입니다. 이 속성의 값을 JavaScript `String`(대문자 S)타입으로 설정합니다. 이렇게 하면 label prop이 스트링 값을 가질 것임을 Vue에게 알려줄 수 있습니다.

5. 이제 `done` prop으로 넘어가겠습니다.

   1. 먼저 `default` 필드를 추가하고, `false` 값을 지정합니다. 이것은 `ToDoItem` 컴포넌트가 `done` prop을 받지 못했을 때, 기본값으로 false를 갖는다는 의미입니다. his means that when no `done` prop is passed to a `ToDoItem` component, the `done` prop will will have a value of false(기본값을 항상 설정할 필요는 없습니다. 필수가 아닌 props에 대해서만 `default`를 지정하면 됩니다).
   2. 다음으로 `type` 필드를 추가합니다. 값은 `Boolean`으로 지정합니다. 이 prop이 JavaScript 불리언 타입을 가질 것임을 Vue에게 알려주는 것입니다.

이제 컴포넌트 오브젝트는 아래와 같은 모양이 될 것입니다.

```js
<script>
  export default {
    props: {
      label: { required: true, type: String },
      done: { default: false, type: Boolean }
    }
  };
</script>
```

### 등록한 props 사용하기

With these props defined inside the component object, we can now use these variable values inside our template. Let's start by adding the `label` prop to the component template.

In your `<template>`, replace the contents of the `<label>` element with `\{{label}}`.

`\{{}}` is a special template syntax in Vue, which lets us print the result of JavaScript expressions defined in our class, inside our template, including values and methods. It's important to know that content inside `\{{}}` is displayed as text and not HTML. In this case, we're printing the value of the `label` prop.

Your component's template section should now look like this:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" checked="false" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Go back to your browser and you'll see the todo item rendered as before, but without a label (oh no!). Go to your browser's DevTools and you'll see a warning along these lines in the console:

```
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
       <App> at src/App.vue
         <Root>
```

This is because we marked the `label` as a required prop, but we never gave the component that prop — we've defined where inside the template we want it used, but we haven't passed it into the component when calling it. Let's fix that.

Inside your `App.vue` file, add a `label` prop to the `<to-do-item></to-do-item>` component, just like a regular HTML attribute:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Now you'll see the label in your app, and the warning won't be spat out in the console again.

So that's props in a nutshell. Next we'll move on to how Vue persists data state.

## Vue의 data object

If you change the value of the `label` prop passed into the `<to-do-item></to-do-item>` call in your App component, you should see it update. This is great. We have a checkbox, with an updatable label. However, we're currently not doing anything with the "done" prop — we can check the checkboxes in the UI, but nowhere in the app are we recording whether a todo item is actually done.

To achieve this, we want to bind the component's `done` prop to the `checked` attribute on the [`<input>`](/ko/docs/Web/HTML/Element/input) element, so that it can serve as a record of whether the checkbox is checked or not. However, it's important that props serve as one-way data binding — a component should never alter the value of its own props. There are a lot of reasons for this. In part, components editing props can make debugging a challenge. If a value is passed to multiple children, it could be hard to track where the changes to that value were coming from. In addition, changing props can cause components to re-render. So mutating props in a component would trigger the component to rerender, which may in-turn trigger the mutation again.

To work around this, we can manage the `done` state using Vue's `data` property. The `data` property is where you can manage local state in a component, it lives inside the component object alongside the `props` property and has the following structure:

```js
data() {
  return {
    key: value
  }
}
```

You'll note that the `data` property is a function. This is to keep the data values unique for each instance of a component at runtime — the function is invoked separately for each component instance. If you declared data as just an object, all instances of that component would share the same values. This is a side-effect of the way Vue registers components and something you do not want.

You use `this` to access a component's props and other properties from inside data, as you may expect. We'll see an example of this shortly.

> **참고:** Because of the way that `this` works in arrow functions (binding to the parent's context), you wouldn't be able to access any of the necessary attributes from inside `data` if you used an arrow function. So don't use an arrow function for the `data` property.

So let's add a `data` property to our `ToDoItem` component. This will return an object containing a single property that we'll call `isDone`, whose value is `this.done`.

Update the component object like so:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
  data() {
    return {
      isDone: this.done,
    };
  },
};
```

Vue does a little magic here — it binds all of your props directly to the component instance, so we don't have to call `this.props.done`. It also binds other attributes (`data`, which you've already seen, and others like `methods`, `computed`, etc.) directly to the instance. This is, in part, to make them available to your template. The down-side to this is that you need to keep the keys unique across these attributes. This is why we called our `data` attribute `isDone` instead of `done`.

So now we need to attach the `isDone` property to our component. In a similar fashion to how Vue uses `\{{}}` expressions to display JavaScript expressions inside templates, Vue has a special syntax to bind JavaScript expressions to HTML elements and components: **`v-bind`**. The `v-bind` expression looks like this:

```
v-bind:attribute="expression"
```

In other words, you prefix whatever attribute/prop you want to bind to with `v-bind:`. In most cases, you can use a shorthand for the `v-bind` property, which is to just prefix the attribute/prop with a colon. So `:attribute="expression"` works the same as `v-bind:attribute="expression"`.

So in the case of the checkbox in our `ToDoItem` component, we can use `v-bind` to map the `isDone` property to the `checked` attribute on the `<input>` element. Both of the following are equivalent:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

You're free to use whichever pattern you would like. It's best to keep it consistent though. Because the shorthand syntax is more commonly used, this tutorial will stick to that pattern.

So let's do this. Update your `<input>` element now to replace `checked="false"` with `:checked="isDone"`.

Test out your component by passing `:done="true"` to the `ToDoItem` call in `App.vue`. Note that you need to use the `v-bind` syntax, because otherwise `true` is passed as a string. The displayed checkbox should be checked.

```js
<template>
  <div id="app">
    <h1>My To-Do List</h1>
    <ul>
      <li>
        <to-do-item label="My ToDo Item" :done="true"></to-do-item>
      </li>
    </ul>
  </div>
</template>
```

Try changing `true` to `false` and back again, reloading your app in between to see how the state changes.

## Todos에 고유 id 부여하기

Great! We now have a working checkbox where we can set the state programmatically. However, we can currently only add one `ToDoList` component to the page because the `id` is hardcoded. This would result in errors with assistive technology since the `id` is needed to correctly map labels to their checkboxes. To fix this, we can programmatically set the `id` in the component data.

We can use the [lodash](https://www.npmjs.com/package/lodash) package's `uniqueid()` method to help keep the index unique. This package exports a function that takes in a string and appends a unique integer to the end of the prefix. This will be sufficient for keeping component `id`s unique.

Let's add the package to our project with npm; stop your server and enter the following command into your terminal:

```bash
npm install --save lodash.uniqueid
```

> **참고:** If you prefer yarn, you could instead use `yarn add lodash.uniqueid`.

We can now import this package into our `ToDoItem` component. Add the following line at the top of `ToDoItem.vue`'s `<script>` element:

```js
import uniqueId from "lodash.uniqueid";
```

Next, add add an `id` field to our data property, so the component object ends up looking like so (`uniqueId()` returns the specified prefix — `todo-` — with a unique string appended to it):

```js
import uniqueId from "lodash.uniqueid";

export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
  data() {
    return {
      isDone: this.done,
      id: uniqueId("todo-"),
    };
  },
};
```

Next, bind the `id` to both our checkbox's `id` attribute and the label's `for` attribute, updating the existing `id` and `for` attributes as shown:

```js
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{label}}</label>
  </div>
</template>
```

## 정리

And that will do for this article. At this point we have a nicely-working `ToDoItem` component that can be passed a label to display, will store its checked state, and will be rendered with a unique `id` each time it is called. You can check if the unique `id`s are working by temporarily adding more `<to-do-item></to-do-item>` calls into `App.vue`, and then checking their rendered output with your browser's DevTools.

Now we're ready to add multiple `ToDoItem` components to our App. In our next article we'll look at adding a set of todo item data to our `App.vue` component, which we'll then loop through and display inside `ToDoItem` components using the `v-for` directive.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
