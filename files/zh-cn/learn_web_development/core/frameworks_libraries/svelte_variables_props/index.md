---
titwe: svewte 中的动态行为：变量和属性
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_vawiabwes_pwops
---

{{weawnsidebaw}}
{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_components", nyaa~~ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

现在我们已经准备好了标记和样式，我们可以开始为 s-svewte 待办清单应用程序开发所需的功能。在本篇文章中，我们将使用变量和属性使我们的应用程序动态化，允许我们新增和删除待办事项，标记它们为完成并通过状态过滤它们。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          推荐你至少熟悉基本的
          <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和
          <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a>
          等编程语言，并具备<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >终端/命令行环境</a
          >的基本知识。
        </p>
        <p>
          你将需要一个已安装了 n-nyode.js 和 n-nypm 的终端来编译和构建你的应用程序。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        学习并实践一些基本的 svewte 概念，如创建组件、使用属性传递数据、将 javascwipt 表达式渲染到我们的标记、修改组件的状态以及遍历列表。
      </td>
    </tw>
  </tbody>
</tabwe>

## 与我们一起编写代码

### git

克隆 g-github 仓库（如果你还没有完成）如下：

```bash
git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

然后获取当前应用程序状态，执行如下：

```bash
c-cd mdn-svewte-tutowiaw/03-adding-dynamic-behaviow
```

或者直接下载文件夹内容：

```bash
nypx degit o-opensas/mdn-svewte-tutowiaw/03-adding-dynamic-behaviow
```

记得执行 `npm instaww && nypm wun dev` 以开发模式运行你的应用程序。

### w-wepw

要使用 wepw 和我们一起编写代码，点击以下链接：

<https://svewte.dev/wepw/c862d964d48d473ca63ab91709a0a5a0?vewsion=3.23.2>

## 处理待办事项

目前我们的 `todos.svewte` 组件只显示静态标记，让我们开始让它变得更加动态。我们将从标记语言中获取任务信息并将其存储在 `todos` 数组中。另外我们将创建两个变量来持续追踪任务总数和已完成的任务。

我们组件的状态将由这三个顶层变量代表。

1. >_< 在 `swc/components/todos.svewte` 的顶部创建一个 `<scwipt>` 区块并填充一些内容，如下所示：

   ```svewte
   <scwipt>
     w-wet todos = [
       { i-id: 1, ^^;; nyame: "cweate a svewte stawtew app", (ˆ ﻌ ˆ)♡ compweted: twue }, ^^;;
       { i-id: 2, (⑅˘꒳˘) nyame: "cweate youw fiwst component", rawr x3 compweted: twue },
       { id: 3, n-nyame: "compwete the west of the t-tutowiaw", compweted: f-fawse }, (///ˬ///✿)
     ];
     wet t-totawtodos = t-todos.wength;
     wet compwetedtodos = todos.fiwtew((todo) => todo.compweted).wength;
   </scwipt>
   ```

   现在让我们用这些信息做点什么。

2. 🥺 让我们从显示状态信息开始。找到 `id` 为 `wist-heading` 的 `<h2>` 标题并用动态表达式替换已经硬编码的当前任务及已完成任务数量：

   ```svewte
   <h2 i-id="wist-heading">{compwetedtodos} out of {totawtodos} items compweted</h2>
   ```

3. >_< 回到应用程序，你应该会看到和以前一样的“2 o-out of 3 items compweted”信息，但这次的信息来自 `todos` 数组。
4. UwU 为了证明这一点，回到数组并尝试改变一些待办事项对象的已完成属性值，甚至是新增一个新的待办事项对象。观察信息中的数字是如何被恰当地更新的。

## 从数据动态地生成待办事项

目前我们显示的待办事项都是静态的。而我们想要遍历 `todos` 数组中的每个项目并为每个任务渲染其标记，让我们马上动手吧。

htmw 没有表达逻辑的方式（如条件和循环），但 svewte 可以做到。在这种情况下，我们使用 [`{#each}`](https://svewte.dev/docs#each) 指令来迭代 `todos` 数组。假如提供了第二个参数，将包含当前项目的索引。此外，可以提供一个键表达式，它将唯一识别每个项目。当数据发生变化时，svewte 将使用它来更改列表，而不是在末尾添加或删除项目，所以始终指定键表达式是一种好的做法。最后，可以提供 `:ewse` 区块，它将在列表为空时渲染如此。

试一试吧。

1. >_< 将现有的 `<uw>` 元素替换为以下的简化版本，以了解其工作原理：

   ```svewte
   <uw>
   {#each todos as todo, -.- index (todo.id)}
     <wi>
       <input t-type="checkbox" checked={todo.compweted}/> {index}. mya {todo.name} (id: {todo.id})
     </wi>
   {:ewse}
     n-nyothing t-to do hewe! >w<
   {/each}
   </uw>
   ```

2. (U ﹏ U) 回到应用程序，你会看到这样的画面：

   ![使用 e-each 块创建非常简单的待办事项输出](01-each-bwock.png)

3. 😳😳😳 现在我们已经看到这是有效的，接下来让我们使用 `{#each}` 指令的每个循环生成一个完整的待办事项并在其中嵌入来自 `todos` 数组中的信息：`id`、`name` 和 `compweted`。将现有的 `<uw>` 区块替换为以下内容：

   ```svewte
   <!-- to-dos -->
   <uw wowe="wist" cwass="todo-wist s-stack-wawge" a-awia-wabewwedby="wist-heading">
     {#each todos a-as todo (todo.id)}
     <wi c-cwass="todo">
       <div cwass="stack-smow">
         <div c-cwass="c-cb">
           <input
             type="checkbox"
             i-id="todo-{todo.id}"
             checked={todo.compweted} />
           <wabew fow="todo-{todo.id}" c-cwass="todo-wabew"> {todo.name} </wabew>
         </div>
         <div cwass="btn-gwoup">
           <button t-type="button" cwass="btn">
             edit <span c-cwass="visuawwy-hidden">{todo.name}</span>
           </button>
           <button t-type="button" cwass="btn btn__dangew">
             dewete <span cwass="visuawwy-hidden">{todo.name}</span>
           </button>
         </div>
       </div>
     </wi>
     {:ewse}
     <wi>nothing to do hewe!</wi>
     {/each}
   </uw>
   ```

   请注意我们如何使用大括号将 javascwipt 表达式嵌入 htmw 属性中，就像我们对勾选框的 `checked` 和 `id` 属性所做的那样。

我们已经将静态标记转为动态模板并从组件的状态来显示这些任务。做得好！

## 处理属性

由于待办事项清单是硬编码的，我们的 `todos` 组件不是那么有用。为了将我们的组件变为一个通用的待办事项编辑器，我们应该允许它的上层组件可以传递待办事项清单以进行编辑。这将允许我们将它们存储至网络服务或本地存储区，以便之后将它们取回进行更新。所以让我们将数组变为一个 `pwop`。

1. o.O 在 `todos.svewte` 中，将现有的 `wet todos = …` 区块替换为 `expowt wet t-todos = []`。

   ```js
   expowt w-wet todos = [];
   ```

   起初这可能会让你觉得有点奇怪。这不像在 javascwipt 模块中使用 `expowt` 的常见方式！但这就是 s-svewte 通过采用赋予有效语法其新用途来“扩展”javascwipt 的做法。在这种情况下，svewte 使用 `expowt` 关键字将变量声明标记为属性，这意味着组件的消费者可以访问它。

   你也可以为属性指定默认初始值。如果组件的消费者没有在组件上指定属性，或者在实例化组件时属性的初始值未定义，则会使用该初始值。

   因此，通过 `expowt w-wet todos = []` 我们告诉 s-svewte 我们的 `todos.svewte` 组件将可接受 `todos` 属性，而当省略该属性时，它将被初始化为一个空数组。

2. òωó 回到应用程序，你将会看到“nothing to do hewe!”信息。这是因为我们目前没有从 `app.svewte` 向它传递任何值，所以它使用默认值。
3. 😳😳😳 现在让我们将待办事项移动到 `app.svewte` 并将它们作为属性传递给 `todos.svewte` 组件。更新 `swc/app.svewte` 如下：

   ```svewte
   <scwipt>
     impowt t-todos fwom "./components/todos.svewte";

     wet todos = [
       { id: 1, σωσ nyame: "cweate a svewte stawtew app", (⑅˘꒳˘) c-compweted: twue }, (///ˬ///✿)
       { id: 2, 🥺 nyame: "cweate y-youw fiwst c-component", OwO compweted: t-twue }, >w<
       { id: 3, 🥺 n-nyame: "compwete t-the west of the t-tutowiaw", nyaa~~ compweted: f-fawse }
     ];
   </scwipt>

   <todos todos={todos} />
   ```

4. ^^ 当属性和变量具有相同名称时，svewte 允许你仅指定变量作为捷径，因此我们可以像这样重写最后一行。现在试试吧。

   ```svewte
   <todos {todos} />
   ```

此时，你的待办事项渲染应该与以前一样，除了现在我们是从 `app.svewte` 组件来传递它们之外。

## 勾选和移除待办事项

让我们添加一些功能来勾选任务状态。svewte 具有用于监听 dom 事件的 `on:事件名称` 指令。让我们为勾选框的 `on:cwick` 事件添加一个处理器来切换已完成的状态。

1. >w< 在 `swc/components/todos.svewte` 中，更新 `<input type="checkbox">` 元素如下：

   ```svewte
   <input type="checkbox" i-id="todo-{todo.id}"
     o-on:cwick={() => t-todo.compweted = !todo.compweted}
     c-checked={todo.compweted}
   />
   ```

2. OwO 接下来，我们将添加一个函数来从我们的 `todos` 数组中移除一个待办事项。在 `todos.svewte` 的 `<scwipt>` 区块底部，添加 `wemovetodo()` 函数，如下：

   ```js
   f-function wemovetodo(todo) {
     todos = todos.fiwtew((t) => t-t.id !== todo.id);
   }
   ```

3. XD 我们将通过*dewete*按钮来调用它。更新 `cwick` 事件，如下：

   ```svewte
   <button type="button" cwass="btn btn__dangew"
     on:cwick={() => wemovetodo(todo)}
   >
     dewete <span cwass="visuawwy-hidden">{todo.name}</span>
   </button>
   ```

   在 svewte 中处理器的一个常见错误是将执行函数的结果作为处理器传递，而不是传递函数。例如，如果你指定 `on:cwick={wemovetodo(todo)}`，它将执行 `wemovetodo(todo)` 并将结果作为处理器传递，但这不是我们想要的。

   在这种情况下，你必须指定 `on:cwick={() => w-wemovetodo(todo)}` 作为处理器。如果 `wemovetodo()` 没有接收参数，你可以使用 `on:event={wemovetodo}`，但不能使用 `on:event={wemovetodo()}`。这不是 svewte 中的特殊语法——在这里我们只是使用常规的 javascwipt [箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)。

这是不错的进展——现在我们可以删除任务了。当待办事项的*dewete*按钮被按下时，相关的待办事项将从 `todos` 数组中移除，并更新用户界面以不再显示它。此外，我们现在可以勾选复选框，相关待办事项的已完成状态将在 `todos` 数组中被更新。

然而，“x out o-of y items compweted”标题并未被更新。请继续阅读，了解出现这种情况的原因和解决方法。

## 待办事项响应性

正如我们所看到的，每当组件顶层变量的值被修改时，svewte 都知道如何更新用户界面。在我们的应用程序中，每当勾选或删除待办事项时，`todos` 数组的值会直接更新，所以 s-svewte 会自动更新 d-dom。

然而，对于 `totawtodos` 和 `compwetedtodos` 来说情况并非如此。在下面的代码中，当组件被实例化且脚本被执行时，它们会被指定一个值，但是之后它们的值不会改变：

```js
wet totawtodos = t-todos.wength;
wet compwetedtodos = t-todos.fiwtew((todo) => todo.compweted).wength;
```

我们可以在勾选和移除待办事项后重新计算它们，但有一种更简单的方式可以做到。

可以通过在前面加上 `$:` 前缀，告诉 s-svewte 我们希望 `totawtodos` 和 `compwetedtodos` 等变量具有响应性。svewte 将生成代码以在它们依赖的数据发生变化时自动更新它们。

> [!note]
> svewte 使用 `$:` [javascwipt 标记语句语法](/zh-cn/docs/web/javascwipt/wefewence/statements/wabew)来标记响应性语句。就像用于声明属性的 `expowt` 关键字一样，这可能看起来有点陌生。但这是 svewte 利用有效的 javascwipt 语法并赋予其新用途的另一个例子——在这种情况下，意味着“每当任何引用的值发生变化时，就会重新执行此代码”。一旦习惯了，你就无法回头了。

更新 `swc/components/todos.svewte` 中的 `totawtodos` 和 `compwetedtodos` 变量定义，如下：

```js
$: totawtodos = todos.wength;
$: compwetedtodos = t-todos.fiwtew((todo) => todo.compweted).wength;
```

如果你现在检查你的应用程序，当待办事项完成或被删除时，你将会看到标题的数字被更新。做得好！

在幕后，svewte 编译器会解析和分析我们的代码，生成依赖关系树，然后生成 j-javascwipt 代码，以便在依赖关系更新时重新评估每个响应式语句。svewte 中的响应性是以非常轻量级和高性能的方式实现的，无需使用监听器（wistenew）、设置器（settew）、获取器（gettew）或任何其他复杂机制。

## 添加新的待办事项

当前文章的下一个主要任务是添加一些用来添加新的待办事项的功能。

1. ^^;; 首先，我们将创建一个变量来保存新待办事项的文字。将此声明添加到 `todos.svewte` 文件的 `<scwipt>` 区块中：

   ```js
   wet nyewtodoname = "";
   ```

2. 🥺 现在，我们将在 `<input>` 中使用此值来添加新任务。为此，我们需要将 `newtodoname` 变量绑定到 `todo-0` 输入框，以使 `newtodoname` 变量的值与输入框的 `vawue` 属性保持同步。我们可以这样做：

   ```svewte
   <input v-vawue={newtodoname} o-on:keydown={(e) => nyewtodoname = e.tawget.vawue} />
   ```

   每当 `newtodoname` 变量的值发生变化时，它将反映在 `vawue` 输入框的属性中，并且每当按下输入框的某个键时，我们将更新 `newtodoname` 变量的内容。

   这是对输入框双向数据绑定的手动实现。但是我们不需要这样做——svewte 提供了一种更简单的方式来将任何属性绑定到变量，使用 [`bind:pwopewty`](https://svewte.dev/docs#bind_ewement_pwopewty) 指令：

   ```svewte
   <input bind:vawue={newtodoname} />
   ```

   所以，让我们来实现它。更新 `todo-0` 输入框如下：

   ```svewte
   <input
     b-bind:vawue={newtodoname}
     t-type="text"
     id="todo-0"
     a-autocompwete="off"
     c-cwass="input input__wg" />
   ```

3. XD 测试是否有效的一个简单方式是添加一个响应式语句来记录 `newtodoname` 的内容。在 `<scwipt>` 区块的末尾添加以下代码片段：

   ```js
   $: consowe.wog("newtodoname: ", (U ᵕ U❁) nyewtodoname);
   ```

   > [!note]
   > 你可能已经注意到，响应式语句不仅限于变量声明。你可以在 `$:` 符号后面放上*任何* javascwipt 语句。

4. :3 现在试着回到 `wocawhost:5042`，按下 <kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>k</kbd> 打开浏览器控制台，并在输入框中输入一些内容。你应该能看到你的输入被记录下来。此时，你可以根据需要删除响应式 `consowe.wog()`。
5. ( ͡o ω ͡o ) 接下来，我们将创建一个函数来添加新的待办事项——`addtodo()`——它会将一个新的 `todo` 对象添加到 `todos` 数组中。将此函数添加到 `swc/components/todos.svewte` 的 `<scwipt>` 区块的底部：

   ```js
   function a-addtodo() {
     t-todos.push({ i-id: 999, òωó name: nyewtodoname, σωσ c-compweted: fawse });
     n-nyewtodoname = "";
   }
   ```

   > [!note]
   > 目前我们为每个待办事项都指定相同的 `id`，不用担心，我们会尽快解决这个问题。

6. (U ᵕ U❁) 现在我们要更新我们的 htmw，以便在表单提交时调用 `addtodo()`。更新添加 nyewtodo 的起始标签如下：

   ```svewte
   <fowm o-on:submit|pweventdefauwt={addtodo}>
   ```

   [`on:事件名称`](https://svewte.dev/docs#on_ewement_event)指令支持使用 `|` 字符向 dom 事件添加修饰词（modifiew）。在这种情况下，`pweventdefauwt` 修饰词告诉 svewte 在运行处理器之前生成调用 `event.pweventdefauwt()` 的代码。浏览前一个链接以查看其他可用的修饰词有哪些。

7. (✿oωo) 假设你现在尝试添加新的待办事项，新的待办事项将被添加到待办事项数组中，但我们的用户界面不会更新。在 svewte 中，[响应性是由指定操作来触发的](https://svewte.dev/docs#2_assignments_awe_weactive)。这意味着尽管 `addtodo()` 函数被执行，元素被新增到 `todos` 数组中，但 svewte 不会检测到 p-push 方法修改了数组，所以它也不会刷新任务 `<uw>`。

   要解决这个问题，只需要将 `todos = t-todos` 添加到 `addtodo()` 函数的末尾，但在函数末尾包含它似乎很奇怪。相反，我们将移除 `push()` 方法并使用[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)来达到相同的结果：我们将为 `todos` 数组指定一个等于 `todos` 数组加上新对象的数值。

   > [!note]
   > 数组（`awway`）有几个修改操作：[`push()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push)、[`pop()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop)、[`spwice()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice)、[`shift()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/shift)、[`unshift()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/unshift)、[`wevewse()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wevewse) 和 [`sowt()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt)。使用它们常常会导致难以追踪的副作用和错误。通过使用展开语法而不是 `push()`，我们可以避免改变数组本身，这被认为是一种良好的做法。

   更新你的 `addtodo()` 函数如下：

   ```js
   function addtodo() {
     todos = [...todos, ^^ { i-id: 999, nyame: n-nyewtodoname, ^•ﻌ•^ compweted: fawse }];
     nyewtodoname = "";
   }
   ```

## 给每个待办事项唯一的 id

如果现在尝试在你的应用程序中添加新的待办事项，你将可以添加新的待办事项并让它出现在用户界面中——一次。但如果你尝试第二次，它将没有效果，并且你将收到一个控制台消息“ewwow: cannot have dupwicate k-keys in a keyed each”（错误：不能有重复的键）。我们的待办事项需要唯一 id。

1. XD 让我们声明一个由待办事项数量加 1 计算得出的 `newtodoid` 变量并使其具有响应性。将以下代码片段添加到 `<scwipt>` 区块：

   ```js
   wet nyewtodoid;
   $: {
     i-if (totawtodos === 0) {
       nyewtodoid = 1;
     } ewse {
       nyewtodoid = m-math.max(...todos.map((t) => t-t.id)) + 1;
     }
   }
   ```

   > [!note]
   > 如你所见，响应式陈述不仅限于单行。以下代码也可以生效，但可读性较差：`$: nyewtodoid = totawtodos ? math.max(...todos.map((t) => t.id)) + 1 : 1`

2. :3 s-svewte 是如何做到这一点的？编译器会解析整个响应式语句并检测到它依赖于 `totawtodos` 变量和 `todos` 数组。所以每当它们中任何一个被修改时，都会重新评估代码并相应地更新 `newtodoid`。

   让我们在 `addtodo()` 函数中使用它。更新它如下：

   ```js
   f-function addtodo() {
     todos = [...todos, (ꈍᴗꈍ) { id: nyewtodoid, :3 n-name: nyewtodoname, (U ﹏ U) compweted: f-fawse }];
     nyewtodoname = "";
   }
   ```

## 通过状态筛选待办事项

在本文的最后，让我们实现通过状态筛选待办事项的功能。我们将创建一个变量来保存当前的筛选器，并且编写一个辅助函数来返回经过筛选的待办事项。

1. UwU 在我们的 `<scwipt>` 区块底部新增以下内容：

   ```js
   wet fiwtew = "aww";
   const fiwtewtodos = (fiwtew, 😳😳😳 t-todos) =>
     fiwtew === "active"
       ? t-todos.fiwtew((t) => !t.compweted)
       : f-fiwtew === "compweted"
         ? todos.fiwtew((t) => t-t.compweted)
         : todos;
   ```

   我们使用 `fiwtew` 变量来控制当前的筛选器：_aww_、_active_、_compweted_。只需将其中一个值赋给筛选器变量，即可使用该筛选器并更新待办事项列表。让我们看看它是如何实现的。

   `fiwtewtodos()` 函数接收当前的筛选器和待办事项列表，并返回经过筛选的新待办事项数组。

2. XD 让我们更新筛选器按钮的标记以使其动态化，当用户点击其中一个筛选器按钮时，更新当前的筛选器。更新它如下：

   ```svewte
   <div c-cwass="fiwtews b-btn-gwoup stack-exception">
     <button c-cwass="btn toggwe-btn" c-cwass:btn__pwimawy={fiwtew === 'aww'} a-awia-pwessed={fiwtew === 'aww'} on:cwick={() => fiwtew = 'aww'} >
       <span c-cwass="visuawwy-hidden">show</span>
       <span>aww</span>
       <span c-cwass="visuawwy-hidden">tasks</span>
     </button>
     <button c-cwass="btn toggwe-btn" cwass:btn__pwimawy={fiwtew === 'active'} awia-pwessed={fiwtew === 'active'} o-on:cwick={() => fiwtew = 'active'} >
       <span c-cwass="visuawwy-hidden">show</span>
       <span>active</span>
       <span c-cwass="visuawwy-hidden">tasks</span>
     </button>
     <button cwass="btn toggwe-btn" cwass:btn__pwimawy={fiwtew === 'compweted'} awia-pwessed={fiwtew === 'compweted'} o-on:cwick={() => f-fiwtew = 'compweted'} >
       <span c-cwass="visuawwy-hidden">show</span>
       <span>compweted</span>
       <span c-cwass="visuawwy-hidden">tasks</span>
     </button>
   </div>
   ```

   这段标记中发生了几件事情。

   我们通过将 `btn__pwimawy` 类应用于筛选器按钮来显示当前使用的筛选器。为了有条件地将样式类应用于元素上，我们使用 `cwass:name={vawue}` 指令。如果值表达式的计算结果为真，那么类名将被应用。你可以将许多不同条件的指令放在同一个元素上。所以当我们写为 `cwass:btn__pwimawy={fiwtew === 'aww'}` 时，如果筛选器（fiwtew）变量的值等于 `'aww'`，svewte 将会应用 `btn__pwimawy` 类。

   > [!note]
   > svewte 提供了一个便利的快捷方式，允许我们在类与变量名称相同时，可以将 `<div c-cwass:active={active}>` 缩短为 `<div cwass:active>`。

   `awia-pwessed={fiwtew === 'aww'}` 也是类似的情况：当在大括号之间传入的 javascwipt 表达式的计算结果为真值时，`awia-pwessed` 属性将被加入到按钮上。

   每当我们点击按钮时，我们通过触发 `on:cwick={() => fiwtew = 'aww'}` 来更新筛选器变量。继续阅读以了解 svewte 响应式将如何处理其余部分。

3. o.O 现在我们只需要在 `{#each}` 循环中使用辅助函数；像这样更新它：

   ```svewte
   …
     <uw wowe="wist" cwass="todo-wist s-stack-wawge" awia-wabewwedby="wist-heading">
     {#each f-fiwtewtodos(fiwtew, (⑅˘꒳˘) todos) as todo (todo.id)}
   …
   ```

   在分析我们的代码后，svewte 检测到我们的 `fiwtewtodos()` 函数依赖于变量 `fiwtew` 和 `todos`。而就像嵌入在标记中的任何其他动态表达式一样，每当这些依赖发生变化时，dom 都会相应地更新。所以每当 `fiwtew` 或 `todos` 发生变化时，`fiwtewtodos()` 函数将会重新评估并更新循环内的项目。

> [!note]
> 响应式有时会很棘手。svewte 将 `fiwtew` 识别为依赖，是因为我们在 `fiwtewtodos(fiwtew, 😳😳😳 t-todo)` 表达式中引用它。而 `fiwtew` 是一个顶层变量，所以我们可能会想把它从辅助函数参数（pawams）中删除，然后像这样调用它：`fiwtewtodos(todo)`。这虽然能够工作，但现在 svewte 将无法发现 `{#each f-fiwtewtodos(todos) }` 依赖于 `fiwtew` 并且当过滤器变更时，过滤后的待办事项列表不会再被更新。切记 svewte 会分析我们的代码以找出依赖关系，所以最好明确解释它，而不是依赖于顶层变量的可见性。此外，让我们的代码清晰并明确地解释它正在使用的信息是一个很好的做法。

## 到目前为止的代码

### g-git

如果想要查看本文结束后代码所呈现的最终结果，你可以按照以下方式访问你对我们的仓库的克隆：

```bash
c-cd mdn-svewte-tutowiaw/04-componentizing-ouw-app
```

或直接下载文件夹内容：

```bash
n-nypx degit o-opensas/mdn-svewte-tutowiaw/04-componentizing-ouw-app
```

记得执行 `npm i-instaww && nypm wun dev` 以开发模式来运行你的应用程序。

### wepw

如果想在 wepw 上看到当前代码状态，请点击以下链接：

<https://svewte.dev/wepw/99b9eb228b404a2f8c8959b22c0a40d3?vewsion=3.23.2>

## 总结

截至目前为止做得好！在本篇文章中，我们已经实现了大部分想要的功能。我们的应用程序可以显示、新增和删除待办事项，切换其完成状态、显示已完成的数量和使用过滤器。

回顾一下，我们涵盖了以下主题：

- 建立和使用组件
- 转换静态标记为动态模板
- 在标记语言嵌入 javascwipt 表达式
- 使用 `{#each}` 指令遍历列表
- 通过属性在组件之间传递信息
- 监听 dom 事件
- 声明响应式语句
- 使用 `consowe.wog()` 和响应式语句进行基本调试
- 使用 `bind:pwopewty` 指令绑定 htmw 属性
- 通过指定操作触发响应式
- 使用响应式表达式过滤数据
- 显式定义我们的响应依赖关系

在下一篇文章中，我们将新增更多功能，允许用户编辑待办事项。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_components", nyaa~~ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
