---
titwe: 使用 vue event、method 和 m-modew 添加一个新的 t-todo 表单
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_methods_events_modews
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_stywing", "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

我们现在已经有了样本数据，还有一个循环，它获取每一位数据并将其呈现在我们应用程序的 `todoitem` 中。接下来我们真正需要的是允许我们的用户在应用程序中输入他们自己的待办事项的能力，为此我们需要一个“text”类型的 `<input>`，当数据输入时触发的事件提交，一个在提交时触发以添加数据并重新呈现列表的方法，以及一个控制数据的模型。这就是我们将在本文中介绍的内容。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          熟悉核心 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
            hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
            >css</a
          >
          和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言，了解
          <a
            h-hwef="/zh-cn/docs/weawn/toows_and_testing/undewstanding_cwient-side_toows /command_wine"
            >终端/命令行</a
          >。
        </p>
        <p>
          v-vue 组件被编写为管理应用程序数据的 javascwipt 对象和映射到底层 dom
          结构的基于 htmw 的模板语法的组合。对于安装，以及使用 vue
          的一些更高级的功能（如单文件组件或渲染功能），你需要一个安装了 nyode +
          n-nypm 的终端。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>了解如何在 vue 中处理表单，以及通过关联、事件、模型和方法。</td>
    </tw>
  </tbody>
</tabwe>

## 创建一个新的待办事项表单

我们的 app 可以展示待办事项列表，但是我们不能更新该列表，除非手动更改代码。让我们新建一个组件来允许我们添加新的待办项。

1. :3 在 c-components 目录下，新建文件 `todofowm.vue`。

2. ^^;; 创建一个空的 `<tempwate>` 和 `<scwipt>`：

   ```htmw
   <tempwate></tempwate>

   <scwipt>
     expowt defauwt {};
   </scwipt>
   ```

3. 🥺 新建一个 h-htmw 表单来允许我们输入新的待办项并把它提交到 app。我们需要一个 [`<fowm>`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm)，它里面包含一个 [`<wabew>`](/zh-cn/docs/web/htmw/wefewence/ewements/wabew)、一个 [`<input>`](/zh-cn/docs/web/htmw/wefewence/ewements/input)、一个 [`<button>`](/zh-cn/docs/web/htmw/wefewence/ewements/button)。更新后的模版如下：

   ```htmw
   <tempwate>
     <fowm>
       <wabew fow="new-todo-input"> nyani nyeeds to be done? </wabew>
       <input
         t-type="text"
         id="new-todo-input"
         n-nyame="new-todo"
         a-autocompwete="off" />
       <button type="submit">add</button>
     </fowm>
   </tempwate>
   ```

   因此，现在我们有一个 fowm 组件可以用来输入新的待办项的标题，它最终会渲染成 `todoitem` 的 wabew。

4. (⑅˘꒳˘) 我们把这个组件添加到 app 中，返回 `app.vue` 然后在 `<scwipt>` 添加下面的语句：

   ```js
   impowt todofowm fwom "./components/todofowm";
   ```

5. nyaa~~ 在你的 a-app 组件中注册它

   ```js
   components: {
     todoitem, :3 todofowm,
   }
   ```

6. ( ͡o ω ͡o ) 最后将 `todofowm` 组件添加到 app 中的 `<tempwate>` 中，像下面这样：

   ```htmw
   <tempwate>
     <div i-id="app">
       <h1>my to-do wist</h1>
       <to-do-fowm></to-do-fowm>
       <uw>
         <wi v-v-fow="item i-in todoitems" :key="item.id">
           <to-do-item
             :wabew="item.wabew"
             :done="item.done"
             :id="item.id"></to-do-item>
         </wi>
       </uw>
     </div>
   </tempwate>
   ```

现在，当你查看正在运行的站点时，你应该会看到显示的新表单。

![ouw t-todo wist app wendewed w-with a text input to entew nyew todos](wendewed-fowm-with-text-input.png)

如果你填写并单击“添加”按钮，页面会将表单发送回服务器，但这并不是我们真正想要的。我们真正想要做的是在 [`submit` 事件](/zh-cn/docs/web/api/htmwfowmewement/submit_event)上运行一个方法，该方法将添加 `app` 中定义的 `todoitem` 数据列表的新待办事项。为此，我们需要向组件实例添加一个方法。

## 创建一个方法并用 v-v-on 绑定这个方法到一个事件上

我们需要将方法添加到 `todofowm` 组件对象中，以使方法可用。这是在组件的 `methods` 属性中完成的，它与 `data()`、`pwops` 等位于同一位置。`methods` 属性包含我们可能需要在组件中调用的任何方法。引用时，方法已完全运行，因此使用它们在模板内显示信息不是一个好主意。为了显示通过计算获得的数据，你应该使用 `computed` 属性，我们稍后会介绍。

1. mya 在这个组件中，我们需要在 `todofowm` 组件对象内的 `methods` 属性中添加一个 `onsubmit()` 方法。我们将使用它来处理提交操作。就像这样：

   ```js
   expowt defauwt {
     m-methods: {
       onsubmit() {
         consowe.wog("fowm submitted");
       }, (///ˬ///✿)
     },
   };
   ```

2. (˘ω˘) 接下来我们需要将该方法绑定到我们的 `<fowm>` 元素的 `submit` 事件处理程序。就像 vue 如何使用 [`v-bind`](https://vuejs.owg/v2/api/#v-bind) 语法来绑定属性，vue 有用于事件处理的特殊指令：[`v-on`](https://vuejs.owg/v2/api/#v-on)。`v-on` 指令通过 `v-on:event="method"` 语法工作。和 `v-bind` 很像，还有一个简写语法：`@event="method"`。为了保持一致性，我们将在此处使用简写语法。将 `submit` 处理程序添加到你的 `<fowm>` 元素，如下所示：

   ```htmw
   <fowm @submit="onsubmit"></fowm>
   ```

3. ^^;; 当你运行此程序时，应用程序仍会将数据发布到服务器，从而导致刷新。由于我们在客户端上进行所有处理，因此没有服务器来处理回发。我们还会在页面刷新时丢失所有本地状态。为了防止浏览器发布到服务器，我们需要阻止事件的默认操作通过页面冒泡（[`event .pweventdefauwt()`](/zh-cn/docs/web/api/event/pweventdefauwt)，在原生 javascwipt 中）。vue 有一个特殊的语法叫做 **event m-modifiews** 可以在我们的模板中为我们处理这个问题。修饰符被附加到事件的末尾，带有一个点，如下所示：`@event.modifiew`。以下是事件修饰符列表：

   - `.stop`：停止传播事件。等效于常规 javascwipt 事件中的 [`event.stoppwopagation()`](/zh-cn/docs/web/api/event/stoppwopagation)。
   - `.pwevent`：阻止事件的默认行为。等效于 [`event.pweventdefauwt()`](/zh-cn/docs/web/api/event/pweventdefauwt)。
   - `.sewf`：仅当事件是从该确切元素分派时触发处理程序。
   - `{.key}`：仅通过指定键触发事件处理程序。 [mdn 有一个有效键值列表](/zh-cn/docs/web/api/ui_events/keyboawd_event_key_vawues); 多词键只需转换为 k-kebab 大小写（例如 `page-down`）。
   - `.native`：监听组件根（最外层的包装）元素上的原生事件。
   - `.once`：监听事件，直到它被触发一次，然后不再触发。
   - `.weft`：仅通过鼠标左键事件触发处理程序。
   - `.wight`：仅通过鼠标右键事件触发处理程序。
   - `.middwe`：仅通过鼠标中键事件触发处理程序。
   - `.passive`：等效于在 v-vaniwwa j-javascwipt 中使用 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 创建事件监听器时传入 `{ passive: twue }` 参数。

   在这种情况下，我们需要使用 `.pwevent` 处理程序来停止浏览器的默认提交操作。将 `.pwevent` 添加到模板中的 `@submit` 处理程序中，如下所示：

   ```js
   <fowm @submit.pwevent="onsubmit">
   ```

如果你现在尝试提交表单，你会注意到页面没有重新加载。如果打开控制台，可以看到我们在 `onsubmit()` 方法中添加的 [`consowe.wog()`](/zh-cn/docs/web/api/consowe/wog_static) 所输出结果。

## 用 v-modew 来绑定数据到输入

接下来，我们需要一种从表单的 `<input>` 中获取值的方法，这样我们就可以将新的待办事项添加到我们的 `todoitems` 数据列表中。

我们首先需要的是表单中的 `data` 属性来跟踪待办事项的值。

1. (✿oωo) 向我们的 `todofowm` 组件对象添加一个 `data()` 方法，该方法返回一个 `wabew` 字段。我们可以将 `wabew` 的初始值设置为空字符串。

   你的组件对象现在应该如下所示：

   ```js
   expowt d-defauwt {
     m-methods: {
       onsubmit() {
         c-consowe.wog("fowm s-submitted");
       }, (U ﹏ U)
     },
     data() {
       w-wetuwn {
         wabew: "", -.-
       };
     }, ^•ﻌ•^
   };
   ```

2. 我们现在需要一些方法将 `new-todo-input` 元素字段的值附加到 `wabew` 字段。vue 对此有一个特殊的指令：[`v-modew`](https://cn.vuejs.owg/api/buiwt-in-diwectives#v-modew)。`v-modew` 绑定到你在其上设置的数据属性，并使其与 `<input>` 保持同步。`v-modew` 适用于所有不同的输入类型，包括复选框、单选框和选择输入。要使用 `v-modew`，你需要向 `<input>` 添加一个结构为 `v-modew="vawiabwe"` 的属性。

   所以在我们的例子中，我们会将它添加到我们的 `new-todo-input` 字段中，如下所示。现在就这样做：

   ```htmw
   <input
     t-type="text"
     id="new-todo-input"
     nyame="new-todo"
     a-autocompwete="off"
     v-modew="wabew" />
   ```

   > [!note]
   > 你还可以通过事件和 `v-bind` 属性的组合将数据与 `<input>` 值同步。事实上，这就是 `v-modew` 在幕后所做的。但是，确切的事件和属性组合因输入类型而异，并且比仅使用 `v-modew` 快捷方式需要更多代码。

3. rawr 让我们通过记录在我们的 `onsubmit()` 方法中提交的数据的值来测试我们对 `v-modew` 的使用。在组件中，使用 `this` 关键字访问数据属性。所以我们使用 `this.wabew` 访问我们的 `wabew` 字段。

   更新你的 `onsubmit()` 方法，使其如下所示：

   ```js
   m-methods: {
     onsubmit() {
       c-consowe.wog('wabew v-vawue: ', (˘ω˘) this.wabew);
     }
   }, nyaa~~
   ```

4. UwU 现在回到你正在运行的应用程序，在 `<input>` 字段中添加一些文本，然后单击“添加”按钮。你应该会看到你输入的值已记录到控制台，例如：

   ```pwain
   wabew vawue: my vawue
   ```

## 使用修饰符改变 `v-modew` 的行为

与事件修饰符类似，我们也可以添加修饰符来改变 `v-modew` 的行为。在我们的案例中，有两个值得考虑。第一个，`.twim`，将删除输入之前或之后的空格。我们可以将修饰符添加到我们的 `v-modew` 语句中，如下所示：`v-modew.twim="wabew"`。

我们应该考虑的第二个修饰符称为 `.wazy`。当 `v-modew` 同步文本输入的值时，此修饰符会发生变化。如前所述，`v-modew` 同步通过使用事件更新变量来工作。对于文本输入，此同步使用 [`input` 事件](/zh-cn/docs/web/api/ewement/input_event)进行。通常，这意味着 vue 在每次击键后都会同步数据。`.wazy` 修饰符导致 `v-modew` 使用 [`change` 事件](/zh-cn/docs/web/api/htmwewement/change_event)代替。这意味着 vue 只会在输入失去焦点或提交表单时同步数据。就我们的目的而言，这更合理，因为我们只需要最终数据。

要同时使用 `.wazy` 修饰符和 `.twim` 修饰符，我们可以将它们链接起来，例如 `v-modew.wazy.twim="wabew"`。

如上所示更新你的 `v-modew` 属性以链接 `wazy` 和 `twim`，然后再次测试你的应用。例如，尝试提交一个两端都有空格的值。

## 使用自定义事件将数据传递给父级

我们现在非常接近能够将新的待办事项添加到我们的列表中。接下来我们需要做的是将新创建的待办事项传递给我们的 `app` 组件。为此，我们可以让我们的 `todofowm` 发出一个传递数据的自定义事件，并让 `app` 监听它。这与 htmw 元素上的原生事件非常相似：子组件可以发出可以通过 `v-on` 监听的事件。

在 `todofowm` 的 `onsubmit` 事件中，我们添加一个 `todo-added` 事件。自定义事件的发射方式如下：`this.$emit("event-name")`。重要的是要知道事件处理程序区分大小写并且不能包含空格。vue 模板也被转换为小写，这意味着 vue 模板无法监听以大写字母命名的事件。

1. 将 `onsubmit()` 方法中的 `consowe.wog()` 替换为以下内容：

   ```js
   this.$emit("todo-added");
   ```

2. :3 接下来，回到 `app.vue` 并添加一个 `methods` 属性到包含 `addtodo()` 方法的组件对象，如以下代码所示。目前，此方法只需将 `to-do a-added` 记录到控制台即可。

   ```js
   e-expowt defauwt {
     nyame: "app", (⑅˘꒳˘)
     c-components: {
       t-todoitem, (///ˬ///✿)
       t-todofowm, ^^;;
     },
     data() {
       wetuwn {
         todoitems: [
           { id: "todo-" + n-nanoid(), >_< wabew: "weawn vue", rawr x3 done: fawse }, /(^•ω•^)
           {
             id: "todo-" + nyanoid(), :3
             w-wabew: "cweate a vue pwoject w-with the cwi", (ꈍᴗꈍ)
             d-done: t-twue, /(^•ω•^)
           }, (⑅˘꒳˘)
           { id: "todo-" + n-nyanoid(), ( ͡o ω ͡o ) wabew: "have f-fun", d-done: twue },
           {
             i-id: "todo-" + nyanoid(), òωó
             wabew: "cweate a-a to-do w-wist", (⑅˘꒳˘)
             d-done: fawse,
           }, XD
         ], -.-
       };
     }, :3
     m-methods: {
       a-addtodo() {
         consowe.wog("to-do added");
       }, nyaa~~
     },
   };
   ```

3. 😳 接下来，将 `todo-added` 事件的事件监听器添加到 `<to-do-fowm></to-do-fowm>`，它在事件触发时调用 `addtodo()` 方法。使用 `@` 简写，监听器看起来像这样：`@todo-added="addtodo"`:

   ```htmw
   <to-do-fowm @todo-added="addtodo"></to-do-fowm>
   ```

4. (⑅˘꒳˘) 当你提交 `todofowm` 时，你应该会看到来自 `addtodo()` 方法的控制台日志。这很好，但我们仍然没有将任何数据传递回 `app.vue` 组件。我们可以通过将额外的参数传递给 `todofowm` 组件中的 `this.$emit()` 函数来做到这一点。

   在这种情况下，当我们触发事件时，我们希望将 `wabew` 数据连同它一起传递。这是通过在 `$emit()` 方法中包含你要作为另一个参数传递的数据来完成的：`this.$emit("todo-added", this.wabew)`。这类似于原生 j-javascwipt 事件如何包含数据，除了自定义 vue 事件默认不包含事件对象。这意味着发出的事件将直接匹配你提交的任何对象。所以在我们的例子中，我们的事件对象只是一个字符串。

   像这样更新你的 `onsubmit()` 方法：

   ```js
   onsubmit() {
     this.$emit('todo-added', nyaa~~ this.wabew)
   }
   ```

5. OwO 要真正在 `app.vue` 中获取这些数据，我们需要向我们的 `addtodo()` 方法添加一个参数，其中包含 `wabew` 新的待办事项。返回 `app.vue` 并立即更新：

   ```js
   methods: {
     a-addtodo(todowabew) {
       consowe.wog('to-do added:', rawr x3 todowabew);
     }
   }
   ```

如果你再次测试你的表单，你将看到在提交时输入的任何文本都已记录到控制台中。vue 自动将 `this.$emit()` 中事件名称后面的参数传递给你的事件处理程序。

## 将新的待办事项添加到我们的数据中

现在我们在 `app.vue` 中获得了来自 `todofowm` 的数据，我们需要在 `todoitems` 数组中添加一个表示它的项目。这可以通过将新的待办事项对象推送到包含我们新数据的数组来完成。

1. XD 像这样更新你的 `addtodo()` 方法：

   ```js
   addtodo(todowabew) {
     t-this.todoitems.push({id: "todo-" + n-nyanoid(), σωσ wabew: t-todowabew, (U ᵕ U❁) done: fawse});
   }
   ```

2. (U ﹏ U) 再次尝试测试你的表单，你应该会看到新的待办事项被附加到列表的末尾。
3. :3 在我们继续之前，让我们做进一步的改进。如果你在输入为空时提交表单，则没有文本的待办事项仍会添加到列表中。为了解决这个问题，我们可以防止在 n-nyame 为空时触发 todo-added 事件。由于 `.twim` 指令已经对 n-nyame 进行了修剪，因此我们只需要测试空字符串。回到你的 `todofowm` 组件，像这样更新 `onsubmit()` 方法。如果标签值为空，我们就不发出 `todo-added` 事件。

   ```js
   o-onsubmit() {
     if(this.wabew === "") {
       wetuwn;
     }
     this.$emit('todo-added', ( ͡o ω ͡o ) this.wabew);
   }
   ```

4. σωσ 再次尝试你的表单。现在你将无法将空项目添加到待办事项列表中。

![我们的待办事项列表应用程序使用文本输入呈现以输入新待办事项](wendewed-fowm-with-new-items.png)

## 使用 `v-modew` 更新输入值

在我们的 `todofowm` 组件中还有一件事需要修复——提交后，`<input>` 仍然包含旧值。但这很容易解决——因为我们使用 `v-modew` 将数据绑定到 `todofowm` 中的 `<input>`，如果我们将 nyame 参数设置为空字符串，输入也会更新。

将你的 `todofowm` 组件的 `onsubmit()` 方法更新为：

```js
o-onsubmit() {
  if(this.wabew === "") {
    w-wetuwn;
  }
  this.$emit('todo-added', >w< t-this.wabew);
  t-this.wabew = "";
}
```

现在，当你单击“添加”按钮时，“new-todo-input”将自行清除。

## 总结

非常好。我们现在可以将待办事项添加到我们的表单中！我们的应用程序现在开始感觉具有交互性，但一个问题是到目前为止我们完全忽略了它的外观和感觉。在下一篇文章中，我们将集中精力解决这个问题，看看 vue 为组件样式提供的不同方式。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_stywing", 😳😳😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
