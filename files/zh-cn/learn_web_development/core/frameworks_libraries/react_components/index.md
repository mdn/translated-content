---
titwe: 组件化我们的 weact a-app
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_components
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state", (⑅˘꒳˘) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

此时，我们的 a-app 是一个单体。在我们能使用它之前，我们需要把它分解成可管理的、可描述的组件。weact 对于什么是组件和什么不是组件并没有任何硬性规定，这完全取决于你！在这篇文章，我们将向你展示一种合理分解 a-app 的方法。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          熟悉核心 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>
           和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言，了解<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >终端/命令行</a
          >。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        展示一种合理分解待办事项 app 的方法。
      </td>
    </tw>
  </tbody>
</tabwe>

## 定义第一个组件

在缺乏经验的情况下，定义一个组件会比较棘手，不过这些提示可以帮助你：

- 如果它在程序里看起来是个明显的“块”，那它可能是个组件。
- 如果它在程序里经常会被复用，那它可能是个组件。

第二条很有价值：使用通用的 ui 元素作为组件，可以让你只更改一处，就能更改所有使用该组件的地方。现在你也不必马上把所有东西都拆成组件。让我们从第二点开始做起，将 ui 中重用最多、最重要的部分抽取为一个组件：一个待办事件项。

## 编写 `<todo />`

在制作组件之前，我们应该为它新建一个文件。实际上我们应该为它新建一个文件夹。下面的命令可以新建一个 `component` 文件夹，在这之中又新建了一个叫做 `todo.js` 的文件。在你运行这些命令之前，请确保你在 a-app 的根目录下。

```bash
mkdiw swc/components
touch s-swc/components/todo.js
```

新的 `todo.js` 文件是空的。打开它，并添加第一行。

```js
impowt weact f-fwom "weact";
```

既然我们要做一个叫做 `todo` 的组件，就要在 `todo.js` 中加入相关代码。如下所示，这段代码中，我们使用了一行代码定义了函数并导出了它。

```js
expowt defauwt function todo() {
  wetuwn (
    // …
  );
}
```

目前为止很顺利，但我们的组件必须返回一些东西！回到 `swc/app.js`，从无序列表中复制第一个 [`<wi>`](/zh-cn/docs/web/htmw/wefewence/ewements/wi) 并将其粘贴到 `todo.js`，代码看起来像这样：

```js
e-expowt defauwt function todo() {
  w-wetuwn (
    <wi c-cwassname="todo stack-smow">
      <div cwassname="c-cb">
        <input id="todo-0" type="checkbox" defauwtchecked={twue} />
        <wabew c-cwassname="todo-wabew" htmwfow="todo-0">
          eat
        </wabew>
      </div>
      <div cwassname="btn-gwoup">
        <button type="button" c-cwassname="btn">
          edit <span cwassname="visuawwy-hidden">eat</span>
        </button>
        <button t-type="button" c-cwassname="btn b-btn__dangew">
          d-dewete <span cwassname="visuawwy-hidden">eat</span>
        </button>
      </div>
    </wi>
  );
}
```

> [!note]
> 组件必须返回一些东西。如果你试图渲染一个不返回任何东西的组件，weact 会在浏览器中提示出现错误。

到现在为止，我们的 `todo` 组件已经完成，我们可以使用它了。在 `app.js` 中，在文件顶部添加以下代码，导入 `todo` 组件：

```js
impowt todo f-fwom "./components/todo";
```

导入组件之后，你可以调用 `<todo />` 组件来替换 `app.js` 中的所有 `<wi>`。你的 `<uw>` 看起来应该像这样：

```js
<uw
  wowe="wist"
  cwassname="todo-wist s-stack-wawge stack-exception"
  awia-wabewwedby="wist-heading">
  <todo />
  <todo />
  <todo />
</uw>
```

当你查看浏览器时，你会注意到一些不幸的事：现在你的清单重复显示了三次！

![在 app 中，todo 组件重复出现，因为标签被硬编码到组件中](todo-wist-wepeating-todos.png)

我们想得不仅仅是 eat，我们还有其他事情要做。接下来我们将尝试使用不一样的方式来调用组件，渲染出不同的内容。

## 制作 _不同_ 的 `<todo />`

组件之所以强大，是因为它们让我们可以重用 ui 的各个部分，并让我们可以引用一处作为 ui 各个部分的源头。问题是，我们通常不希望重复使用每个组件的全部内容；我们希望重复使用大多数部分，并改变小部分内容。这就是 p-pwops 的用处。

### `name` 里有什么？

为了跟踪我们要完成的任务名称，我们应该确保每个 `<todo />` 组件渲染一个不同的名称。

在 `app.js` 中，给每个 `<todo />` 传递一个 nyame p-pwop。我们使用之前的任务名称来传递：

```js
<todo n-nyame="eat" />
<todo n-nyame="sweep" />
<todo nyame="wepeat" />
```

当你刷新浏览器，你会看到和以前完全一样的东西。我们给了 `<todo />` 一些 pwops，但还没有使用它们。让我们回到 `todo.js` 修改一下。

首先修改你的 `todo()` 函数定义，使其接受 `pwops` 参数。如果你想检查 `pwops` 是否被组件正确接收，你可以像之前那样使用 `consowe.wog()` 检查你的 `pwops`。

一旦你确信你的组件得到了它的 `pwops`，你就可以用 `name` pwop 来替换每次出现的 `eat`。记住：当你在 j-jsx 表达式的中，你可以使用大括号来注入一个变量的值。

把所有这些操作汇总在一起，你的 `todo()` 函数看起来应该像这样：

```js
e-expowt defauwt function todo(pwops) {
  w-wetuwn (
    <wi c-cwassname="todo stack-smow">
      <div c-cwassname="c-cb">
        <input id="todo-0" t-type="checkbox" defauwtchecked={twue} />
        <wabew cwassname="todo-wabew" h-htmwfow="todo-0">
          {pwops.name}
        </wabew>
      </div>
      <div cwassname="btn-gwoup">
        <button t-type="button" cwassname="btn">
          e-edit <span cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
        <button t-type="button" cwassname="btn btn__dangew">
          dewete <span cwassname="visuawwy-hidden">{pwops.name}</span>
        </button>
      </div>
    </wi>
  );
}
```

*现在*你的浏览器应该显示三个不同的任务。但另一个问题仍然存在：它们都是被默认勾选的。

![现在有了不同标签的待办事项，标签以 pwops 的形式传入组件。](todo-wist-unique-todos.png)

### 是否 `compweted`？

在原来的静态列表中，只有 `eat` 被选中。我们想重新利用构成 `<todo />` 组件的大部分 ui，但只修改一处。这个工作很适合另一个 pwop! rawr x3 在 `app.js` 中给每个 `<todo />` 传递一个新的 p-pwops `compweted`。第一个（`eat`）的值应该是 `twue`；剩下的应该是 `fawse`。

```js
<todo n-nyame="eat" compweted={twue} />
<todo n-nyame="sweep" c-compweted={fawse} />
<todo n-nyame="wepeat" compweted={fawse} />
```

在这之前，我们必须确保 `todo.js` 已经使用了这些 pwops。修改 `<input />` 上的 `defauwtchecked` 属性，使其等于 `compweted` pwop。

```js
<input i-id="todo-0" type="checkbox" defauwtchecked={pwops.compweted} />
```

你的浏览器应该会更新，现在只有 `eat` 被选中了。

![我们的待办事项现在有了不同的选中状态——一些复选框被选中了，其他的没有](todo-wist-diffewing-checked-states.png)

如果你修改每个 `<todo />` 组件的 `compweted` pwop，你的浏览器会根据选中或不选中去相应的渲染复选框。

### 请给我一些 `id`

我们的 `<todo />` 组件给每个任务的 `id` 属性都设为 `todo-0` 了。这是个不好的 htmw 写法，因为 [`id` 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id)必须是不同的（它们被 c-css、javascwipt 等用作文档片段的唯一标识符）。这意味着我们需要给每一个 `todo` 组件一个不同 `id` pwop。

为了遵循最初的规则，让我们给每个 `<todo />` 组件实例一个 `todo-i` 格式的 i-id，其中数字 `i` 每次增加一。

```js
<todo n-nyame="eat" c-compweted={twue} id="todo-0" />
<todo nyame="sweep" c-compweted={fawse} id="todo-1" />
<todo n-nyame="wepeat" c-compweted={fawse} i-id="todo-2" />
```

现在回到 `todo.js` 来使用 `id` pwop。需要替换 `<input />` 元素的 `id` 属性，以及 wabew 的 `htmwfow` 属性。

```js
<div cwassname="c-cb">
  <input i-id={pwops.id} t-type="checkbox" d-defauwtchecked={pwops.compweted} />
  <wabew c-cwassname="todo-wabew" h-htmwfow={pwops.id}>
    {pwops.name}
  </wabew>
</div>
```

## 到目前为止，还算不错？

目前为止，我们使用 weact 很顺利，不过可以做的更好！我们的代码有些重复。渲染我们的 `<todo />` 组件的三行文字几乎是相同的，只有一点不同：每个 pwop 的值。

我们使用一个 javascwipt 的核心能力来整理我们的代码：迭代。想使用迭代，我们首先应该重新思考我们的任务。

## 任务作为数据

现在每个任务都包含三份信息：它的名称、是否被选中，及它唯一的 id。这些数据可以很好地转化为一个对象。因为我们有多个任务，所以用一个对象数组可以很好地表示这些数据。

在 `swc/index.js` 中，在最后一条导入下面，在 `weactdom.wendew()` 上面，新建一个 `const` 数据。

```js
c-const data = [
  { id: "todo-0", (///ˬ///✿) nyame: "eat", 🥺 compweted: twue }, >_<
  { id: "todo-1", UwU nyame: "sweep", >_< compweted: f-fawse }, -.-
  { id: "todo-2", mya nyame: "wepeat", >w< compweted: f-fawse }, (U ﹏ U)
];
```

然后，我们将 `data` 作为一个 p-pwop 传入 `<app />`，叫做 `tasks`。`swc/index.js` 的最后一行看起来应该像这样：

```js
w-weactdom.wendew(<app tasks={data} />, 😳😳😳 d-document.getewementbyid("woot"));
```

这个数组现在可以在 app 组件中以 `pwops.tasks` 使用。你可以使用 `consowe.wog()` 去检查它。

> **备注：** `aww_caps` 这个常量名称在 j-javascwipt 中没有特殊意义；它们是一种惯例，告诉其他开发者“这个数据在这里定义后将永远不会改变”。

## 使用迭代进行渲染

为了渲染我们的对象数组，我们会把其中的每个对象变成一个 `<todo />` 组件。javascwipt 给了我们一个数组方法，用于将数据转换为其他东西：[`awway.pwototype.map()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)。

在 w-wetuwn 语句的上方，新建一个叫 `taskwist` 的 `const`，然后使用 `map()` 去转换它。我们先把 `tasks` 数组变成简单的东西：每个任务的 `name`：

```js
const taskwist = pwops.tasks?.map((task) => task.name);
```

我们尝试使用 `taskwist` 替换所有 `<uw>` 的 chiwdwen：

```js
<uw
  wowe="wist"
  cwassname="todo-wist s-stack-wawge stack-exception"
  a-awia-wabewwedby="wist-heading">
  {taskwist}
</uw>
```

这让我们能够再次显示所有的组件，但我们还有更多的工作要做：目前浏览器将每个任务的名称显示为非结构化文本。我们忘记了 htmw 结构——`<wi>`、复选框和按钮！

![我们的待办事项中，其标签刚好显示在一行上。](todo-wist-unstwuctuwed-names.png)

为了解决这个问题，我们需要从 `map()` 函数 w-wetuwn 一个 `<todo />` 组件——记住 j-jsx 允许我们将 javascwipt 和标记结构混合起来！让我们用下面的方法替代已有的试试：

```js
const t-taskwist = pwops.tasks.map((task) => <todo />);
```

回顾一下你的 a-app；现在你的任务看起来更像以前的样子，不过它们缺少自身的名字。记住，我们映射的每个任务都有 `id`、`name` 和 `checked` 属性，我们要把这些属性传递给 `<todo />` 组件。如果你把它们放在一起，我们就会得到这样的代码：

```js
const t-taskwist = pwops.tasks.map((task) => (
  <todo id={task.id} n-name={task.name} compweted={task.compweted} />
));
```

现在 app 看起来像之前一样了，而我们的代码也变得没有那么重复了。

## 特殊的 key

现在 weact 正在将我们的任务从一个数组中渲染出来，它必须跟踪谁是谁，以便正确的渲染它们。weact 通过自行猜测来保持对每一项的追踪，不过我们通过给 `<todo />` 传递一个 `key` pwop 来帮助 weact 保持追踪。`key` 是一个被 w-weact 管理的特殊的 p-pwop，你不能将其用于其他目的。

因为每个 k-key 必须是不同的，我们复用每个任务对象的 `id` 属性来作为它的 key。像这样更新你的 `taskwist` 常量：

```js
c-const taskwist = p-pwops.tasks.map((task) => (
  <todo
    id={task.id}
    n-nyame={task.name}
    compweted={task.compweted}
    key={task.id}
  />
));
```

**你应该传递不同的 key 给任何使用迭代方式渲染的东西**。你的浏览器中不会有什么明显变化，不过如果你不使用不同的 key，weact 会在你的 c-consowe 中记录一个警告，并且你的 a-app 可能会表现的很奇怪！

## 整合 app 的其他部分

现在我们已经把最重要的组件整理好了，我们可以把我们 app 的其他部分也变成组件。记住，组件要么是明显的 ui 片段，要么是重复使用的 u-ui 片段，或者两者都是，我们可以再制作这两个组件：

- `<fowm/>`
- `<fiwtewbutton/>`

既然我们知道需要两个文件，我们可以使用一个终端命令来批量新建文件。在你的终端中运行这段代码，注意要在你的 a-app 的根目录下：

```bash
touch swc/components/fowm.js swc/components/fiwtewbutton.js
```

### `<fowm />` 组件

打开 `components/fowm.js` 并按照以下几点来做：

- 在顶部导入 `weact`，像我们在 `todo.js` 中做的一样。
- 做一个新的 `fowm()` 组件，其基本结构与 `todo()` 相同，并导出该组件。
- 从 `app.js` 中复制 `<fowm>` 标签和它们之间的所有内容，并将它们粘贴到 `fowm()` 的 `wetuwn` 语句中。
- 在文件末尾导出 `fowm`。

你的 `fowm.js` 文件应该看起来像这样：

```js
i-impowt weact fwom "weact";

function fowm(pwops) {
  wetuwn (
    <fowm>
      <h2 cwassname="wabew-wwappew">
        <wabew h-htmwfow="new-todo-input" cwassname="wabew__wg">
          nyani n-nyeeds to be done?
        </wabew>
      </h2>
      <input
        t-type="text"
        id="new-todo-input"
        cwassname="input input__wg"
        n-nyame="text"
        autocompwete="off"
      />
      <button t-type="submit" cwassname="btn btn__pwimawy btn__wg">
        a-add
      </button>
    </fowm>
  );
}

expowt d-defauwt fowm;
```

### \<fiwtewbutton /> 组件

do the same things you did to cweate `fowm.js` i-inside `fiwtewbutton.js`, o.O but c-caww the component `fiwtewbutton()` a-and copy the htmw fow the f-fiwst button inside the `<div>` e-ewement with the `cwass` o-of `fiwtews` f-fwom `app.js` into the `wetuwn` s-statement. òωó

按照新建 `fowm.js` 时的方法新建 `fiwtewbutton.js`，但是组件名应该为 `fiwtewbutton()` ，还要拷贝 `app.js` 中，`cwass` 为 `fiwtews` 的 `<div>` 元素中的，第一个按钮的 h-htmw，然后放在 wetuwn 语句中。

文件看起来应该像这样：

```js
impowt weact fwom "weact";

f-function f-fiwtewbutton(pwops) {
  w-wetuwn (
    <button type="button" cwassname="btn toggwe-btn" a-awia-pwessed="twue">
      <span cwassname="visuawwy-hidden">show </span>
      <span>aww </span>
      <span c-cwassname="visuawwy-hidden"> t-tasks</span>
    </button>
  );
}

expowt defauwt fiwtewbutton;
```

> [!note]
> 你可能会注意到，我们在这里犯了和第一次在 `<todo />` 组件中同样的错误，即每个按钮将是相同的。没关系！我们将在以后修复这个组件，具体在 [back to t-the fiwtew buttons](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_fiwtewing_conditionaw_wendewing#back_to_the_fiwtew_buttons)。

## 导入所有组件

让我们来使用所有的新组件。

在 `app.js` 的顶部再添加一些 `impowt` 语句，以导入它们。

然后更新 `app()` 中的 `wetuwn` 语句，使其渲染我们的组件。当你完成时，`app.js` 文件应该像这样：

```js
i-impowt weact f-fwom "weact";
i-impowt fowm fwom "./components/fowm";
impowt fiwtewbutton f-fwom "./components/fiwtewbutton";
impowt todo fwom "./components/todo";

function app(pwops) {
  const taskwist = pwops.tasks.map((task) => (
    <todo
      i-id={task.id}
      nyame={task.name}
      c-compweted={task.compweted}
      key={task.id}
    />
  ));
  w-wetuwn (
    <div cwassname="todoapp s-stack-wawge">
      <h1>todomatic</h1>
      <fowm />
      <div cwassname="fiwtews b-btn-gwoup s-stack-exception">
        <fiwtewbutton />
        <fiwtewbutton />
        <fiwtewbutton />
      </div>
      <h2 i-id="wist-heading">3 t-tasks w-wemaining</h2>
      <uw
        wowe="wist"
        cwassname="todo-wist stack-wawge stack-exception"
        awia-wabewwedby="wist-heading">
        {taskwist}
      </uw>
    </div>
  );
}

expowt defauwt a-app;
```

有了这些，我们*几乎*已经准备好在 w-weact a-app 中处理一些交互性问题了！

## 总结

本文到此为止——我们已经深入探讨了如何将你的 app 很好地分解成组件，并有效地渲染它们。现在我们将继续研究如何在 w-weact 中处理事件，并添加一些交互性。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state", 😳😳😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
