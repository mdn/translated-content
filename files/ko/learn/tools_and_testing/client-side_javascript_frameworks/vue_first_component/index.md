---
title: 첫 번째 Vue 컴포넌트 만들기
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component
translation_of: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</div>

<p class="summary">이제 Vue에 대해 더 자세히 알아보고 직접 커스텀 컴포넌트를 만들어 볼 시간입니다. 먼저,  Todo 리스트의 각 항목을 표현하는 컴포넌트를 만들어 보면서 몇 가지 중요한 개념을 배우겠습니다. 컴포넌트 내부에서 다른 컴포넌트 호출하기, props를 통해 데이터 넘겨주기, 데이터 상태 저장하기 등을 배울 것입니다. </p>

<div class="blockIndicator note">
<p class="summary"><strong>Note</strong>: 필요하다면 <a href="https://github.com/mdn/todo-vue">todo-vue repository</a> 에서 최종 샘플 앱 코드를 확인할 수 있습니다. 완성된 앱의 모습은 <a href="https://mdn.github.io/todo-vue/dist/">https://mdn.github.io/todo-vue/dist/</a>을 참고하세요.</p>
</div>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">사전 요구 사항:</th>
   <td>
    <p>코어 <a href="/en-US/docs/Learn/HTML">HTML</a>, <a href="/en-US/docs/Learn/CSS">CSS</a>과 <a href="/en-US/docs/Learn/JavaScript">JavaScript</a>에 익숙함, <a href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">terminal/command line</a>에 대한 지식</p>

    <p>Vue 컴포넌트는 앱의 데이터를 관리하는 JavaScript 객체와 기본 DOM 구조에 매핑되는 HTML 기반 템플릿 구문을 조합해 작성된다. Vue를 설치하고 고급 기능(예: 단일 파일 컴포넌트, render 함수 등)을 사용하려면 node + npm이 설치된 터미널이 필요하다.</p>
   </td>
  </tr>
  <tr>
   <th scope="row">목적:</th>
   <td>Vue 컴포넌트를 생성하는 법을 배운다. 컴포넌트를 다른 컴포넌트 내부에 render하는 방법, props를 이용해 데이터를 전달하는 방법과 상태를 저장하는 방법을 배운다.</td>
  </tr>
 </tbody>
</table>

<h2 id="ToDoItem_컴포넌트_만들기">ToDoItem 컴포넌트 만들기</h2>

<p>각각의 할 일 항목 (To-Do Item)을 표시해줄 첫 번째 컴포넌트를 작성해봅시다. 이 항목이 모여서 Todo List가 될 것입니다.</p>

<ol>
 <li><code>moz-todo-vue/src/components</code> 디렉토리 안에  <code>ToDoItem.vue</code>라는 이름으로 파일을 생성하고, 에디터에서 파일을 열어주세요.</li>
 <li>파일 상단에 <code>&lt;template&gt; &lt;/template&gt;</code> 태그를 추가해 컴포넌트의 템플릿 섹션을 만들어주세요.</li>
 <li>템플릿 섹션 밑에 <code>&lt;script&gt;&lt;/script&gt;</code> 섹션을 생성하세요.  <code>&lt;script&gt;</code> 태그 안에 default export 오브젝트 <code>export default {}</code>를 추가하세요. 이것이 바로 우리가 만들고 있는 컴포넌트 오브젝트입니다.</li>
</ol>

<p>여기까지 잘 따라하셨다면 <code>ToDoItem.vue</code> 파일이 아래와 같은 형태가 됩니다.</p>

<pre class="brush: html notranslate">&lt;template&gt; &lt;/template&gt;
&lt;script&gt;
  export default {};
&lt;/script&gt;</pre>

<p>이제 <code>ToDoItem</code>에 내용을 추가해보겠습니다. Vue 2의 템플릿은 단일 루트 엘리멘트만을 허용합니다. 즉, 템플릿 섹션 안의 모든 것을 포함하는 하나의 엘리멘트가 존재해야 합니다.  (Vue 3에서는 다중 루트 엘리멘트를 지원합니다!) 여기서는 <code><a href="/en-US/docs/Web/HTML/Element/div">&lt;div&gt;</a></code> 를 루트 엘리멘트로 지정하겠습니다.</p>

<ol>
 <li>
  <p>우선 템플릿 섹션에 빈 <code>&lt;div&gt;</code> 를 추가하세요.</p>
 </li>
 <li>
  <p><code>&lt;div&gt;</code> 안에 체크박스와 레이블을 추가해보겠습니다. 아래와 같이 체크박스에 <code>id</code> 를 추가하고, 체크박스 id를 레이블에 매핑하는 <code>for</code> 속성을 추가합니다.</p>

  <pre class="brush: html notranslate">&lt;template&gt;
  &lt;div&gt;
    &lt;input type="checkbox" id="todo-item" checked="false" /&gt;
    &lt;label for="todo-item"&gt;My Todo Item&lt;/label&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>
 </li>
</ol>

<h3 id="앱_안에서_TodoItem_컴포넌트_사용하기">앱 안에서 TodoItem 컴포넌트 사용하기</h3>

<p>아주 잘 하고 있어요. 그런데 아직 우리 앱에 컴포넌트를 추가하지 않았기 때문에 잘 작동하는지 테스트할 방법이 없네요. 이제 앱에 컴포넌트를 등록해봅시다. </p>

<ol>
 <li>
  <p><code>App.vue</code> 파일을 다시 열어주세요.</p>
 </li>
 <li>
  <p><code>&lt;script&gt;</code> 태그 상단에 다음을 추가해 <code>ToDoItem</code> 컴포넌트를 임포트하세요:</p>

  <pre class="brush: js notranslate">import ToDoItem from './components/ToDoItem.vue';</pre>
 </li>
 <li>
  <p>컴포넌트 오브젝트 내부에 <code>components</code> 속성을 추가하고, 여기에 <code>ToDoItem</code> 컴포넌트를 등록하세요.</p>
 </li>
</ol>

<p>이제 <code>&lt;script&gt;</code> 내부가 이런 모양이 되었을 것입니다.</p>

<pre class="brush: js notranslate">import ToDoItem from './components/ToDoItem.vue';

export default {
  name: 'app',
  components: {
    ToDoItem
  }
};</pre>

<p>이전글에서 Vue CLI가 <code>HelloWorld</code> 컴포넌트를 등록했던 것과 같은 방식입니다. </p>

<p><code>ToDoItem</code> 컴포넌트를 앱에 실제로 렌더링하려면 <code>&lt;template&gt;</code> 태그 안에서 <code>&lt;to-do-item&gt;&lt;/to-do-item&gt;</code> 요소를 사용해야 합니다. JavaScript에서 컴포넌트 파일의 이름과 그 표현은 항상 어퍼카멜케이스(e.g. <code>ToDoList</code>)를 사용하며, 해당 커스텀 엘리멘트는 하이픈으로 연결된 소문자(e.g. <code>&lt;to-do-list&gt;</code>)로 표현합니다.</p>

<ol>
 <li><code><a href="/en-US/docs/Web/HTML/Element/Heading_Elements">&lt;h1&gt;</a></code> 아래에 리스트 아이템(<code><a href="/en-US/docs/Web/HTML/Element/li">&lt;li&gt;</a></code>)을 포함하는 비정렬 리스트(<code><a href="/en-US/docs/Web/HTML/Element/ul">&lt;ul&gt;</a></code>)를 생성합니다.</li>
 <li>리스트 아이템 안에 <code>&lt;to-do-item&gt;&lt;/to-do-item&gt;</code>을 추가합니다.</li>
</ol>

<p><code>App.vue</code> <code>&lt;template&gt;</code> 은 아래와 같은 모양이 될 것입니다. </p>

<pre class="brush: html notranslate">&lt;div id="app"&gt;
  &lt;h1&gt;To-Do List&lt;/h1&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;to-do-item&gt;&lt;/to-do-item&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<p>렌더링된 앱을 다시 확인해보면 체크박스와 레이블로 구성된 <code>ToDoItem</code> 이 보일 것입니다.</p>

<p><img alt="The current rendering state of the app, which includes a title of To-Do List, and a single checkbox and label" src="https://mdn.mozillademos.org/files/17243/rendered-todoitem.png" style="border-style: solid; border-width: 1px; display: block; height: 142px; margin: 0 auto; width: 385px;"></p>

<h2 id="props를_사용해_컴포넌트를_동적으로_만들기">props를 사용해 컴포넌트를 동적으로 만들기</h2>

<p>현재 상태로는 <code>ToDoItem</code> 컴포넌트를 한 페이지에 한 번만 표시할 수 있고(고유 ID가 있어야 함) 레이블 텍스트를 설정할 방법도 없습니다. 동적인 요소가 전혀 없는 상태입니다. </p>

<p>컴포넌트를 동적으로 만들기 위해서는 컴포넌트의 state(상태)가 필요합니다. 컴포넌트에 props를 추가해 컴포넌트에 상태를 부여할 수 있습니다. props를 함수의 입력이라고 생각하면 이해가 쉬울 것입니다. props 값은 컴포넌트에 초기 상태(initial state)를 부여합니다.</p>

<h3 id="props_등록하기">props 등록하기</h3>

<p>Vue에서는 props를 등록하는 방법이 두 가지 있습니다.</p>

<ul>
 <li>첫 번째 방법은 단순히 문자열 어레이로 props를 나열하는 것입니다. 어레이의 각 항목은 각 prop의 이름이 됩니다. </li>
 <li>두 번째 방법은 props를 오브젝트로 정의하는 것입니다. 각각의 키가 prop의 이름이 됩니다. 이렇게 props를 오브젝트로 나열하면 기본값을 지정할 수 있고, 해당 prop이 필수값인지 표시할 수 있고, 기본적인 오브젝트 타이핑(특히 JavaScript 원시 타입에 대해)과 간단한 prop 유효성 검증을 할 수 있습니다.</li>
</ul>

<div class="blockIndicator note">
<p><strong>Note</strong>: prop의 유효성 검증은 개발 모드에서만 이루어지기 때문에, 상용에서는 이것에 의존해서는 안됩니다. 그리고 이 prop 검증 기능은 컴포넌트 인스턴스가 생성되기 전에 호출되기 때문에 컴포넌트의 상태나 다른 prop에는 접근할 수 없습니다. </p>
</div>

<p>여기서는 오브젝트 등록 방식을 사용해 props를 등록해보겠습니다.</p>

<ol>
 <li><code>ToDoItem.vue</code> 파일을 열어주세요.</li>
 <li>export <code>default {}</code> 오브젝트 안에 <code>props</code> 속성을 추가하고 빈 오브젝트를 만들어주세요.</li>
 <li>이 오브젝트 안에 <code>label</code> 과 <code>done</code> 을 키로 사용하는 속성을 추가하세요.</li>
 <li><code>label</code> 키의 값은 두 개의 속성을 갖는 오브젝트입니다.
  <ol>
   <li>첫 번째는 <code>required</code> 속성입니다. 이 속성의 값을 <code>true</code>로 지정하겠습니다. 이 컴포넌트의 모든 인스턴스가 레이블 필드를 반드시 가져야 한다는 의미입니다. 만약 <code>ToDoItem</code> 컴포넌트가 레이블 필드를 갖지 않으면 Vue가 경고해줄 것입니다.</li>
   <li>두 번째는 <code>type</code> 속성입니다. 이 속성의 값을 JavaScript <code>String</code>(대문자 S)타입으로 설정합니다. 이렇게 하면 label prop이 스트링 값을 가질 것임을 Vue에게 알려줄 수 있습니다. </li>
  </ol>
 </li>
 <li>이제 <code>done</code> prop으로 넘어가겠습니다.
  <ol>
   <li>먼저 <code>default</code> 필드를 추가하고, <code>false</code> 값을 지정합니다. 이것은 <code>ToDoItem</code> 컴포넌트가 <code>done</code> prop을 받지 못했을 때, 기본값으로 false를 갖는다는 의미입니다. his means that when no <code>done</code> prop is passed to a <code>ToDoItem</code> component, the <code>done</code> prop will will have a value of false(기본값을 항상 설정할 필요는 없습니다. 필수가 아닌 props에 대해서만 <code>default</code>를 지정하면 됩니다).</li>
   <li>다음으로 <code>type</code> 필드를 추가합니다. 값은 <code>Boolean</code>으로 지정합니다. 이 prop이 JavaScript 불리언 타입을 가질 것임을 Vue에게 알려주는 것입니다.</li>
  </ol>
 </li>
</ol>

<p>이제 컴포넌트 오브젝트는 아래와 같은 모양이 될 것입니다.</p>

<pre class="brush: js notranslate">&lt;script&gt;
  export default {
    props: {
      label: { required: true, type: String },
      done: { default: false, type: Boolean }
    }
  };
&lt;/script&gt;</pre>

<h3 id="등록한_props_사용하기">등록한 props 사용하기</h3>

<p>With these props defined inside the component object, we can now use these variable values inside our template. Let's start by adding the <code>label</code> prop to the component template.</p>

<p>In your <code>&lt;template&gt;</code>, replace the contents of the <code>&lt;label&gt;</code> element with <code>\{{label}}</code>.</p>

<p><code>\{{}}</code> is a special template syntax in Vue, which lets us print the result of JavaScript expressions defined in our class, inside our template, including values and methods. It’s important to know that content inside <code>\{{}}</code> is displayed as text and not HTML. In this case, we’re printing the value of the <code>label</code> prop.</p>

<p>Your component’s template section should now look like this:</p>

<pre class="brush: html notranslate">&lt;template&gt;
  &lt;div&gt;
    &lt;input type="checkbox" id="todo-item" checked="false" /&gt;
    &lt;label for="todo-item"&gt;\{{label}}&lt;/label&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>

<p>Go back to your browser and you'll see the todo item rendered as before, but without a label (oh no!). Go to your browser's DevTools and you’ll see a warning along these lines in the console:</p>

<pre class="notranslate">[Vue warn]: Missing required prop: "label"

found in

---&gt; &lt;ToDoItem&gt; at src/components/ToDoItem.vue
       &lt;App&gt; at src/App.vue
         &lt;Root&gt;
</pre>

<p>This is because we marked the <code>label</code> as a required prop, but we never gave the component that prop — we've defined where inside the template we want it used, but we haven't passed it into the component when calling it. Let’s fix that.</p>

<p>Inside your <code>App.vue </code>file, add a <code>label</code> prop to the <code>&lt;to-do-item&gt;&lt;/to-do-item&gt;</code> component, just like a regular HTML attribute:</p>

<pre class="brush: html notranslate">&lt;to-do-item label="My ToDo Item"&gt;&lt;/to-do-item&gt;</pre>

<p>Now you'll see the label in your app, and the warning won't be spat out in the console again.</p>

<p>So that's props in a nutshell. Next we'll move on to how Vue persists data state.</p>

<h2 id="Vue의_data_object">Vue의 data object</h2>

<p>If you change the value of the <code>label</code> prop passed into the <code>&lt;to-do-item&gt;&lt;/to-do-item&gt;</code> call in your App component, you should see it update. This is great. We have a checkbox, with an updatable label. However, we're currently not doing anything with the "done" prop — we can check the checkboxes in the UI, but nowhere in the app are we recording whether a todo item is actually done.</p>

<p>To achieve this, we want to bind the component's <code>done</code> prop to the <code>checked</code> attribute on the <code><a href="/en-US/docs/Web/HTML/Element/input">&lt;input&gt;</a></code> element, so that it can serve as a record of whether the checkbox is checked or not. However, it's important that props serve as one-way data binding — a component should never alter the value of its own props. There are a lot of reasons for this. In part, components editing props can make debugging a challenge. If a value is passed to multiple children, it could be hard to track where the changes to that value were coming from. In addition, changing props can cause components to re-render. So mutating props in a component would trigger the component to rerender, which may in-turn trigger the mutation again.</p>

<p>To work around this, we can manage the <code>done</code> state using Vue’s <code>data</code> property. The <code>data</code> property is where you can manage local state in a component, it lives inside the component object alongside the <code>props</code> property and has the following structure:</p>

<pre class="brush: js notranslate">data() {
  return {
    key: value
  }
}</pre>

<p>You'll note that the <code>data</code> property is a function. This is to keep the data values unique for each instance of a component at runtime — the function is invoked separately for each component instance. If you declared data as just an object, all instances of that component would share the same values. This is a side-effect of the way Vue registers components and something you do not want.</p>

<p>You use <code>this</code> to access a component's props and other properties from inside data, as you may expect. We'll see an example of this shortly.</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: Because of the way that <code>this</code> works in arrow functions (binding to the parent’s context), you wouldn’t be able to access any of the necessary attributes from inside <code>data</code> if you used an arrow function. So don’t use an arrow function for the <code>data</code> property.</p>
</div>

<p>So let's add a <code>data</code> property to our <code>ToDoItem</code> component. This will return an object containing a single property that we'll call <code>isDone</code>, whose value is <code>this.done</code>.</p>

<p>Update the component object like so:</p>

<pre class="brush: js notranslate">export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean }
  },
  data() {
    return {
      isDone: this.done
    };
  }
};</pre>

<p>Vue does a little magic here — it binds all of your props directly to the component instance, so we don’t have to call <code>this.props.done</code>. It also binds other attributes (<code>data</code>, which you’ve already seen, and others like <code>methods</code>, <code>computed</code>, etc.) directly to the instance. This is, in part, to make them available to your template. The down-side to this is that you need to keep the keys unique across these attributes. This is why we called our <code>data</code> attribute <code>isDone</code> instead of <code>done</code>.</p>

<p>So now we need to attach the <code>isDone</code> property to our component. In a similar fashion to how Vue uses <code>\{{}}</code> expressions to display JavaScript expressions inside templates, Vue has a special syntax to bind JavaScript expressions to HTML elements and components: <code><strong>v-bind</strong></code>. The <code>v-bind</code> expression looks like this:</p>

<pre class="notranslate">v-bind:attribute="expression"</pre>

<p>In other words, you prefix whatever attribute/prop you want to bind to with <code>v-bind:</code>. In most cases, you can use a shorthand for the <code>v-bind</code> property, which is to just prefix the attribute/prop with a colon. So <code>:attribute="expression"</code> works the same as <code>v-bind:attribute="expression"</code>.</p>

<p>So in the case of the checkbox in our <code>ToDoItem</code> component, we can use <code>v-bind</code> to map the <code>isDone</code> property to the <code>checked</code> attribute on the <code>&lt;input&gt;</code> element. Both of the following are equivalent:</p>

<pre class="brush: html notranslate">&lt;input type="checkbox" id="todo-item" v-bind:checked="isDone" /&gt;

&lt;input type="checkbox" id="todo-item" :checked="isDone" /&gt;</pre>

<p>You're free to use whichever pattern you would like. It's best to keep it consistent though. Because the shorthand syntax is more commonly used, this tutorial will stick to that pattern.</p>

<p>So let's do this. Update your <code>&lt;input&gt;</code> element now to replace <code>checked="false"</code> with <code>:checked="isDone"</code>.</p>

<p>Test out your component by passing <code>:done="true"</code> to the <code>ToDoItem</code> call in <code>App.vue</code>. Note that you need to use the <code>v-bind</code> syntax, because otherwise <code>true</code> is passed as a string. The displayed checkbox should be checked.</p>

<pre class="brush: js notranslate">&lt;template&gt;
  &lt;div id="app"&gt;
    &lt;h1&gt;My To-Do List&lt;/h1&gt;
    &lt;ul&gt;
      &lt;li&gt;
        &lt;to-do-item label="My ToDo Item" :done="true"&gt;&lt;/to-do-item&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;
</pre>

<p>Try changing <code>true</code> to <code>false</code> and back again, reloading your app in between to see how the state changes.</p>

<h2 id="Todos에_고유_id_부여하기">Todos에 고유 id 부여하기</h2>

<p>Great! We now have a working checkbox where we can set the state programmatically. However, we can currently only add one <code>ToDoList</code> component to the page because the <code>id</code> is hardcoded. This would result in errors with assistive technology since the <code>id</code> is needed to correctly map labels to their checkboxes. To fix this, we can programmatically set the <code>id</code> in the component data.</p>

<p>We can use the <a href="https://www.npmjs.com/package/lodash">lodash</a> package's <code>uniqueid()</code> method to help keep the index unique. This package exports a function that takes in a string and appends a unique integer to the end of the prefix. This will be sufficient for keeping component <code>id</code>s unique.</p>

<p>Let’s add the package to our project with npm; stop your server and enter the following command into your terminal:</p>

<pre class="brush: bash notranslate">npm install --save lodash.uniqueid</pre>

<div class="blockIndicator note">
<p><strong>Note</strong>: If you prefer yarn, you could instead use <code>yarn add lodash.uniqueid</code>.</p>
</div>

<p>We can now import this package into our <code>ToDoItem</code> component. Add the following line at the top of <code>ToDoItem.vue</code>’s <code>&lt;script&gt;</code> element:</p>

<pre class="brush: js notranslate">import uniqueId from 'lodash.uniqueid';</pre>

<p>Next, add add an <code>id</code> field to our data property, so the component object ends up looking like so (<code>uniqueId()</code> returns the specified prefix — <code>todo-</code> — with a unique string appended to it):</p>

<pre class="brush: js notranslate">import uniqueId from 'lodash.uniqueid';

export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean }
  },
  data() {
    return {
      isDone: this.done,
      id: uniqueId('todo-')
    };
  }
};</pre>

<p>Next, bind the <code>id</code> to both our checkbox’s <code>id</code> attribute and the label’s <code>for</code> attribute, updating the existing <code>id</code> and <code>for</code> attributes as shown:</p>

<pre class="brush: js notranslate">&lt;template&gt;
  &lt;div&gt;
    &lt;input type="checkbox" :id="id" :checked="isDone" /&gt;
    &lt;label :for="id"&gt;\{{label}}&lt;/label&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>

<h2 id="정리">정리</h2>

<p>And that will do for this article. At this point we have a nicely-working <code>ToDoItem</code> component that can be passed a label to display, will store its checked state, and will be rendered with a unique <code>id</code> each time it is called. You can check if the unique <code>id</code>s are working by temporarily adding more <code>&lt;to-do-item&gt;&lt;/to-do-item&gt;</code> calls into <code>App.vue</code>, and then checking their rendered output with your browser's DevTools.</p>

<p><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qoxwoxz78zz83zz84zz69z2z80zgwxsgnz83zfkt5e5tz70zz68zmsnjz122zz71z">Now we're ready to add multiple <code>ToDoItem</code> components to our App. In our next article we'll look at adding a set of todo item data to our <code>App.vue</code> component, which we'll then loop through and display inside <code>ToDoItem</code> components using the <code>v-for</code> directive.   </span></p>

<p>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction">Introduction to client-side frameworks</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features">Framework main features</a></li>
 <li>React
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">Getting started with React</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning">Beginning our React todo list</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components">Componentizing our React app</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state">React interactivity: Events and state</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering">React interactivity: Editing, filtering, conditional rendering</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility">Accessibility in React</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources">React resources</a></li>
  </ul>
 </li>
 <li>Ember
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started">Getting started with Ember</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization">Ember app structure and componentization</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state">Ember interactivity: Events, classes and state</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer">Ember Interactivity: Footer functionality, conditional rendering</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing">Routing in Ember</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources">Ember resources and troubleshooting</a></li>
  </ul>
 </li>
 <li>Vue
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started">Getting started with Vue</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component">Creating our first Vue component</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists">Rendering a list of Vue components</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models">Adding a new todo form: Vue events, methods, and models</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling">Styling Vue components with CSS</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties">Using Vue computed properties</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering">Vue conditional rendering: editing existing todos</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management">Focus management with Vue refs</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources">Vue resources</a></li>
  </ul>
 </li>
 <li>Svelte
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started">Getting started with Svelte</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning">Starting our Svelte Todo list app</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props">Dynamic behavior in Svelte: working with variables and props</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components">Componentizing our Svelte app</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility">Advanced Svelte: Reactivity, lifecycle, accessibility</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores">Working with Svelte stores</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript">TypeScript support in Svelte</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next">Deployment and next steps</a></li>
  </ul>
 </li>
</ul>
