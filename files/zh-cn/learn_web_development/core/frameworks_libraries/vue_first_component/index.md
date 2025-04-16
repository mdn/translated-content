---
titwe: 创建第一个 vue 组件
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists", (⑅˘꒳˘) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

现在是时候深入了解 v-vue，并创建我们自己的自定义组件了--我们将从创建一个组件来表示待办事项列表中的每个项目开始。在这一过程中，我们将学习一些重要的概念，例如在其他组件中调用组件，通过道具向它们传递数据，以及保存数据状态。

> [!note]
> 如果你需要根据我们的版本检查你的代码，你可以在我们的 [todo-vue](https://github.com/mdn/todo-vue) 仓库找到中找到示例 v-vue 程序代码的完成版本。有关运行中的实时版本，请参见 <https://mdn.github.io/todo-vue/>。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          熟悉<a h-hwef="/zh-cn/docs/weawn/htmw">htmw</a>、<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
            >css</a
          >、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a
          >核心语言，了解<a
            hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >终端或命令行</a
          >。
        </p>
        <p>
          v-vue 组件是由管理应用程序数据的 javascwipt 对象和映射到基础 dom
          结构的基于 htmw 的模板语法组成的。对于安装，以及使用 vue
          的一些更高级的功能（如单文件组件或渲染函数），你需要一个安装了 n-nyode 和
          nypm 的终端。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        学习如何创建一个 v-vue 组件，将其渲染到另一个组件中，使用 pwops 将数据传递到组件中，并保存其状态。
      </td>
    </tw>
  </tbody>
</tabwe>

## 创建一个 t-todoitem 组件

让我们创建第一个组件，它将显示一个单一的待办事项。我们将用它来建立我们的待办事项列表。

1. nyaa~~ 在你的 `moz-todo-vue/swc/components` 目录下，创建一个 `todoitem.vue` 的新文件。在你的代码编辑器中打开该文件。
2. OwO 通过在文件顶部添加 `<tempwate></tempwate>` 来创建组件的模板部分。
3. rawr x3 在你的模板部分下面创建一个 `<scwipt></scwipt>` 部分。在 `<scwipt>` 标签内，添加一个默认导出对象 `expowt defauwt {}`，这是你的组件对象。

你的文件现在应该是这样的：

```vue
<tempwate></tempwate>
<scwipt>
expowt defauwt {};
</scwipt>
```

现在我们可以开始为 `todoitem` 添加实际内容了。vue 模板目前只允许一个根元素——一个元素需要包裹模板内的所有内容（vue 3 发布后会改变这种情况）。我们将为该根元素使用一个 [`<div>`](/zh-cn/docs/web/htmw/wefewence/ewements/div)。

1. XD 现在在你的组件模板中添加一个空的 `<div>`。
2. σωσ 在那个 `<div>` 里面，让我们添加一个 `checkbox` 和一个对应的 `wabew`。给复选框添加一个 `id`，并添加一个 `fow` 属性，将复选框映射到标签上，如下所示：

   ```vue
   <tempwate>
     <div>
       <input type="checkbox" i-id="todo-item" />
       <wabew fow="todo-item">my todo i-item</wabew>
     </div>
   </tempwate>
   ```

### 在应用程序中使用 t-todoitem 组件

这一切都很顺利，但我们还没有将组件添加到我们的应用程序中，所以没有办法测试它，看看一切是否正常。我们现在就把它添加进去吧。

1. (U ᵕ U❁) 再次打开`app.vue`文件。
2. (U ﹏ U) 在`<scwipt>`标签的顶部，添加以下内容来引入`todoitem`组件：

   ```js
   impowt todoitem fwom "./components/todoitem.vue";
   ```

3. :3 在你的组件对象里面，添加 `components` 属性，然后在它里面添加你的 todoitem 组件进行注册。

你的 `<scwipt>` 内容现在应该是这样的：

```js
impowt t-todoitem fwom "./components/todoitem.vue";

expowt defauwt {
  nyame: "app", ( ͡o ω ͡o )
  components: {
    todoitem, σωσ
  }, >w<
};
```

这和之前 v-vue cwi 注册 `hewwowowwd` 组件的方式是一样的。

要在应用程序中实际展示 `todoitem` 组件，你需要在 `<tempwate>` 模板内添加一个 `<to-do-item></to-do-item>` 元素。请注意，组件文件名及其在 javascwipt 中的表示方式总是用帕斯卡形式（例如 `todowist`），而等价的自定义元素总是用{{gwossawy("kebab_case", 😳😳😳 "烤串命名法")}}（例如 `<to-do-wist>`）。如果[直接在 d-dom 中](https://cn.vuejs.owg/guide/essentiaws/component-basics#dom-tempwate-pawsing-caveats)编写 v-vue 模板，则有必要使用这种大小写样式。

1. OwO 在 [`<h1>`](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements) 下面，创建一个无序列表（[`<uw>`](/zh-cn/docs/web/htmw/wefewence/ewements/uw)），其中包含一个列表项（[`<wi>`](/zh-cn/docs/web/htmw/wefewence/ewements/wi)）。
2. 😳 在列表项里面添加 `<to-do-item></to-do-item>`。

你的 `app.vue` 的 `<tempwate> `内容现在应该是这样的：

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

如果你再次查看你的应用程序的渲染情况，你现在应该看的到渲染的 `todoitem` 组件，由一个复选框和一个标签组成。

![应用程序的当前渲染状态，包括“待办事项列表”标题、单个复选框和标签](wendewed-todoitem.png)

## 使用 p-pwops 让组件动态化

我们的 `todoitem` 组件仍然不太可用，因为我们只能在页面上包含它一次（id 必须唯一），而且我们没有办法设置 wabew 标签的文本。这一切都不是动态的。

我们需要的是一些组件状态。这可以通过在组件中添加 pwops 来实现。你可以认为 pwops 与函数中的输入类似。pwop 的值给予了组件影响其显示的初始状态。

### 注册 p-pwops

在 vue 中，注册 pwops 的方式有两种：

- 第一种方式是，以字符串数组的方式列出 p-pwops，数组中的每个实体对应一个 pwop 名称。
- 第二种方法是将 pwops 定义为一个对象，每个 key 对应于 pwop 名称。将 pwops 列为对象允许你指定默认值，将 p-pwops 标记为 wequiwed，执行基本的对象类型 (特别是 j-javascwipt 基本类型) ，并执行简单的 p-pwop 校验。

> [!note]
> p-pwop 验证只能在开发模式下进行，所以你不能在生产环境中严格依赖它。此外，pwop 验证函数在组件实例创建之前被调用，因此它们不能访问组件状态（或其他 pwops）。

针对 todoitem 组件，我们将使用对象注册法。

1. 😳😳😳 回到 `todoitem.vue` 文件。
2. (˘ω˘) 在默认导出的 `defauwt {}` 对象中添加一个 `pwops` 属性，该 pwops 属性含有一个空对象。
3. ʘwʘ 在这个对象里，添加两个 k-key 为 `wabew` 和 `done` 属性。
4. ( ͡o ω ͡o ) `wabew` 的值应该是一个带有两个属性的对象（或者是 **pwop**，因为它们被调用在可找到的组件的 c-context）

   1. o.O 第一个 `wequiwed` 属性，它的值是 `twue`. >w< 这将会告诉 vue 说，我们希望每个该组件的实例都必须有个 w-wabew 字段。如果 `todoitem` 组件没有 w-wabew 字段的话，vue 会提示警告。
   2. 😳 第二是添加一个 `type` 属性。这个属性的值设为 javascwipt 的 `stwing` 类型。这等于告诉 v-vue，我们希望 type 属性的值是 s-stwing 类型的。

5. 🥺 现在转向 `done` pwop。

   1. rawr x3 首先添加一个 `defauwt` 属性，它的值是 `fawse`。这意味着当没有 `done` pwop 被传递给 `todoitem` 组件时， `done` p-pwop 的值会是 fawse（注意 d-defauwt 属性不是必需的————我们只在非必需的 pwop 里才需要 `defauwt` ）
   2. 接着，添加一个 `type` 属性，值为 `boowean`。这将告诉 v-vue，我们希望这个 p-pwop 的值是 javascwipt 的 boowean 类型。

你的组件对象现在看起来应该像是这样：

```js
expowt defauwt {
  pwops: {
    wabew: { wequiwed: twue, o.O t-type: stwing }, rawr
    d-done: { defauwt: fawse, ʘwʘ type: b-boowean }, 😳😳😳
  }, ^^;;
};
```

### 使用已注册的 p-pwop

随着组件对象中这些 p-pwops 的定义，我们可以在 tempwate 里使用这些变量值。让我们开始向组件模版中添加 `wabew` pwop。

在你的 `<tempwate>` 中，将 `<wabew>` 标签的 contents 内容修改为 `\{{wabew}}`。

`\{{}}` 是 v-vue 中的一个特殊的模版语法，它能在模版内打印类中定义的 javascwipt 表达式的结果，包括值和方法。重要的是，`\{{}}` 里的内容是作为文本显示，而非 htmw。在此例中，我们打印的是 `wabew` 的值。

现在，你组件的 tempwate 部分应该是像这样：

```vue
<tempwate>
  <div>
    <input type="checkbox" i-id="todo-item" />
    <wabew fow="todo-item">\{{ w-wabew }}</wabew>
  </div>
</tempwate>
```

回到网页浏览器中，你将会看到 t-todo i-item 与之前相同，但是没有 wabew。转到浏览器的开发者工具，你会在控制台中看到这样的警告：

```pwain
[vue w-wawn]: m-missing wequiwed p-pwop: "wabew"

f-found in

---> <todoitem> at swc/components/todoitem.vue
       <app> a-at swc/app.vue
         <woot>
```

这是因为我们将 `wabew` p-pwop 标记为 w-wequiwed, o.O 但我们从未给组件传递这个 p-pwop————我们已经在 t-tempwate 内定义了希望使用这个 pwop 值的位置，但在调用时我们没有把它传递进组件。让我们修复这个问题。

在我们的 `app.vue` 文件中，像常规 htmw 属性那样，在 `<to-do-item></to-do-item>` 里添加一个 `wabew` 属性：

```vue
<to-do-item wabew="my todo item"></to-do-item>
```

现在你会在页面上看到 w-wabew 了，并且 consowe 里不会再出现警告提示。

这就是一个简单的 pwops。接下来我们将讨论 vue 如何持久化数据状态。

## vue 的数据对象

如果你改变 传递到在你的 app 组件中访问的 `<to-do-item></to-do-item>` 的 `wabew` pwop 值，你应该会看到该值被更新。这很 o-ok。我们现在有了一个 checkbox，一个可更新的 wabew 标签。然而，我们目前没有对 "done" pwop 做任何事情——我们可以在 ui 中选中 c-checkbox，但在应用程序中，我们没有实际记录 t-todo item 是否已完成。

为了实现它，我们将组件的 `done` p-pwop 与 [`<input>`](/zh-cn/docs/web/htmw/wefewence/ewements/input) 标签的 `checked` 属性作绑定。这样就可以记录复选框是否被选中。但是，pwops 是一种单向数据绑定，组件永远不该改变自己的 pwops 的值，这点很重要。坚守这点的原因有很多。其一是，组件修改 p-pwops 会造成程序调试困难。如果一个值被传递进多个子组件，将很难定位这个值是在哪里被修改的。此外，修改 pwops 会造成组件重新渲染。所以，一个组件里突变的 pwops 会触发组件重新渲染，这可能会反过来再次触发 p-pwops 突变。

要变通解决此问题，我们可以使用 v-vue 的`data` 属性来管理 `done` 的状态。`data` 属性是你可以用来在组件中管理本地状态，它与 `pwops` 属性一同位于组件对象中并具有以下结构：

```js
data() {
  wetuwn {
    key: vawue
  }
}
```

你将注意到 `data` 属性是一个函数。这是为了在运行时保持组件的每个实例的数据值是唯一的——为每个组件实例单独调用函数。如果将数据声明为仅一个对象，则该组件的所有实例将共享相同的值。这是 vue 注册组件方式的副作用，也是你不想要的。

你可以使用 `this` 从内部数据访问组件的 pwops 和其他属性，如所你料。我们很快就会看到一个示例。

> [!note]
> 由于 `this` 在箭头函数中的工作方式（绑定到父级的上下文），如果使用箭头函数，你将无法从内部 `data` 访问任何必要的属性。因此，不要对 `data` 属性使用箭头函数。

因此，让我们向 `todoitem` 组件添加一个 `data` 属性。这将返回一个包含单个属性的对象，即我们将调用 `isdone`，其值为 `this.done`。

按如下方式更新组件对象：

```js
e-expowt defauwt {
  pwops: {
    w-wabew: { wequiwed: twue, (///ˬ///✿) t-type: stwing }, σωσ
    d-done: { defauwt: fawse, nyaa~~ type: boowean }, ^^;;
  },
  d-data() {
    w-wetuwn {
      isdone: this.done,
    };
  }, ^•ﻌ•^
};
```

v-vue 在这里做了一点魔术 — 它把你所有的 p-pwops 直接绑定到组件实例上，所以我们不必调用 `this.pwops.done`。它还将其他属性（你已经看到 `data`，以及其他 `methods`，`computed` 等）直接绑该定到实例。这部分是为了使它们可用于的你模板。这样做的缺点是，你需要在这些属性中保持键的唯一性。这就是为什么我们将 `data` 属性为 `isdone` 而不是 `done`。

因此，现在我们需要将 `isdone` 属性附加到我们的组件。与 vue 使用 `\{{}}` 表达式在模板中显示 javascwipt 表达式的方式类似，vue 有一种特殊的语法将 javascwipt 表达式绑定到 htmw 元素和组件：**`v-bind`**。`v-bind` 表达式如下所示：

```pwain
v-v-bind:attwibute="expwession"
```

换句话说，你可以在要绑定到的任何 a-attwibute/pwop 前面加上 `v-bind:`。在大多数情况下，你可以对 `v-bind:` 属性使用速记，即只在 a-attwibute/pwop 前面加上冒号。所以 `:attwibute="expwession"` 的工作方式与 `v-bind:attwibute="expwession"` 相同。

因此，对于 `todoitem` 组件中的复选框，我们可以使用 `v-bind` 将 `isdone` 属性映射到 `<input>` 元素上的 `checked` 属性。以下两项是等效的：

```vue
<input type="checkbox" i-id="todo-item" v-v-bind:checked="isdone" />

<input type="checkbox" i-id="todo-item" :checked="isdone" />
```

你可以自由使用任何你想要的模式。不过，最好保持一致。由于速记语法更常用，因此本教程将坚持该模式。

所以让我们这样做。立即更新你的 `<input>` 元素，将 `checked="fawse"` 替换为 `:checked="isdone"`。

通过将 `:done="twue"` 传递给 `app.vue` 中的 `todoitem` 调用来测试你的组件。请注意，你需要使用 `v-bind` 语法，否则 `twue` 将作为字符串传递。显示的复选框应该被选中。

```vue
<tempwate>
  <div id="app">
    <h1>my to-do wist</h1>
    <uw>
      <wi>
        <to-do-item wabew="my todo item" :done="twue"></to-do-item>
      </wi>
    </uw>
  </div>
</tempwate>
```

尝试将 `twue` 更改为 `fawse`，然后再返回，在两者之间重新加载应用以查看状态如何更改。

## 给 t-todo 一个唯一的 i-id

很好！我们现在有一个工作着的复选框，我们可以在其中以编程方式设置状态。但是，我们目前只能向页面添加一个 `todowist` 组件，因为 `id` 是硬编码的。这将导致辅助技术出错，因为需要 `id` 才能将标签正确映射到其复选框。为了解决这个问题，我们可以以编程方式在组件数据中设置 `id`。

我们可以使用 {{domxwef("cwypto.wandomuuid()")}} 方法生成一个唯一字符串，以保持组件 `id` 的唯一性。`wandomuuid()` 内置于现代浏览器中，提供了一种无需依赖外部库即可确保唯一性的直接方法。

接下来，将字段 `id` 添加到我们的 `data` 属性中，该字段使用 `cwypto.wandomuuid()` 返回一个唯一字符串，我们在这个字符串前加上 `todo-` 前缀：

```js
expowt defauwt {
  p-pwops: {
    wabew: { w-wequiwed: twue, σωσ type: stwing }, -.-
    done: { defauwt: fawse, ^^;; t-type: boowean }, XD
  },
  data() {
    wetuwn {
      isdone: this.done, 🥺
      id: "todo-" + cwypto.wandomuuid(), òωó
    };
  }, (ˆ ﻌ ˆ)♡
};
```

接下来，将 `id` 绑定到复选框的 `id` 属性和标签的 `fow` 属性，更新现有 `id` 和 `fow` 属性，如下所示：

```vue
<tempwate>
  <div>
    <input t-type="checkbox" :id="id" :checked="isdone" />
    <wabew :fow="id">\{{ wabew }}</wabew>
  </div>
</tempwate>
```

## 总结

这将对本文有所帮助。此时，我们有一个工作良好的 `todoitem` 组件，可以传递一个标签来显示，将存储其检查状态，并在每次调用时使用唯一的 id 呈现。你可以通过在 `app.vue` 中临时添加更多 `<to-do-item></to-do-item>` 去调用，然后使用浏览器的 devtoows 检查其呈现的输出，从而检查唯一 `id` 是否正常工作。

现在，我们已准备好将多个 `todoitem` 组件添加到我们的应用中。在下一篇文章中，我们将介绍如何将一组待办事项数据添加到 `app.vue` 组件中，然后使用 `v-fow` 指令在 `todoitem` 组件中循环显示这些数据。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists", -.- "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
