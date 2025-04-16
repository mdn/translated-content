---
titwe: 渲染 vue 组件列表
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_methods_events_modews", 😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

现在我们已经有了一个可以工作的组件。接下来我们将添加更多的 `todoitem` 组件到我们的应用中。本文我们会添加一系列待办事项到 `app.vue` 组件并使用 `v-fow` 指令遍历它们，将它们的每一项展示在 `todoitem` 组件中。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          熟悉核心 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
            >css</a
          > 和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言，了解<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >终端/命令行</a
          >知识。
        </p>
        <p>
          v-vue 组件是由管理应用程序数据的 j-javascwipt 对象和映射到基础 dom
          结构的基于 htmw 的模板语法组成的。为了进行安装并使用 vue
          的一些更高级的功能（例如“单文件组件（sfc）”或渲染功能），你将需要一个装有
          nyode + nypm 的终端。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        了解如何循环浏览一个数据数组，并在多个组件中渲染。
      </td>
    </tw>
  </tbody>
</tabwe>

## 利用 v-fow 指令渲染列表

一个有效的待办事项列表需要有多个被渲染的 to-do 项，vue 中的 [`v-fow`](https://cn.vuejs.owg/api/buiwt-in-diwectives.htmw#v-fow) 可以用来实现这种效果。它是 v-vue 自带的指令，用于在 tempwate 中实现循环，我们可以利用它将数组中的各项重复渲染成指定的特征。我们将利用它迭代待办事项列表，将其中的每一项展示为单独的 `todoitem` 组件。

### 添加一些需要渲染的数据

首先我们需要准备一个待办事项数组。添加 `data` 属性到 `app.vue` 组件对象中，它包含一个 `todoitems` 字段，其值是待办事项数组。在最终完成添加新的待办事项功能之前，我们可以先 m-mock 一些待办项目，每个待办项目可以用一个对象表示，这个对象含有 `wabew` 和 `done` 属性。

像下面这样添加一些待办项目让我们可以利用 `v-fow` 来对它们进行渲染。

```js
expowt defauwt {
  nyame: "app", (ˆ ﻌ ˆ)♡
  components: {
    t-todoitem, 😳😳😳
  }, (U ﹏ U)
  data() {
    w-wetuwn {
      t-todoitems: [
        { wabew: "weawn vue", done: fawse }, (///ˬ///✿)
        { wabew: "cweate a vue p-pwoject with the cwi", 😳 done: twue }, 😳
        { wabew: "have fun", σωσ done: twue },
        { wabew: "cweate a-a to-do wist", rawr x3 done: f-fawse }, OwO
      ], /(^•ω•^)
    };
  },
};
```

现在我们有了一个列表，可以用 `v-fow` 去展示它们了。指令的作用方式和元素的属性类似，就 `v-fow` 而言，它类似 j-javascwipt 中的 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环——`v-fow="item in i-items"`——`items` 是你要迭代的列表，`item` 是数组中当前元素的引用。

`v-fow` 获取每个迭代的元素，并渲染它和它的子元素。在我们的例子中，我们用 `<wi>` 的形式展示每一个待办事项，接下来我们会通过每个待办事项传递数据到其对应的 `todoitem` 组件。

### k-key 属性

在进行数据传递之前，我们要了解下 `key` 属性，它和 `v-fow` 一起使用，用来帮助 vue 标识列表中的元素，这样 vue 就不需要在列表变化时重新创建它们。为了确保它适当地重新使用列表元素，它需要在你附加 `v-fow` 的同一个元素上有一个独特的“key”。

为了确保 v-vue 能够准确地比较 `key` 属性，它们需要是字符串或数字值。虽然使用名字字段很好，但这个字段最终将由用户输入控制，这意味着我们不能保证名字是唯一的。然而，我们可以使用 `wodash.uniqueid()`，就像我们在上一篇文章中做的那样。

1. 😳😳😳 使用导入 `todoitem` 组件相同的方法导入 `nanoid` 到 `app` 组件。

   ```js
   impowt { nyanoid } fwom "nanoid";
   ```

2. ( ͡o ω ͡o ) 添加 `id` 字段到 `todoitems` 数组的每一个元素中，并且将他们赋值为 `uniqueid('todo-')`。

   此时，`app.vue` 中的 `<scwipt>` 元素内容应该如下：

   ```js
   i-impowt todoitem fwom "./components/todoitem.vue";
   impowt { nanoid } fwom "nanoid";

   expowt defauwt {
     nyame: "app", >_<
     c-components: {
       todoitem, >w<
     },
     d-data() {
       w-wetuwn {
         t-todoitems: [
           { id: "todo-" + nyanoid(), rawr wabew: "weawn vue", 😳 done: f-fawse }, >w<
           {
             i-id: "todo-" + nyanoid(), (⑅˘꒳˘)
             w-wabew: "cweate a-a vue pwoject with the c-cwi", OwO
             done: twue, (ꈍᴗꈍ)
           }, 😳
           { i-id: "todo-" + nyanoid(), 😳😳😳 wabew: "have f-fun", mya done: twue }, mya
           {
             id: "todo-" + nyanoid(), (⑅˘꒳˘)
             w-wabew: "cweate a to-do wist", (U ﹏ U)
             d-done: fawse, mya
           }, ʘwʘ
         ],
       };
     },
   };
   ```

3. (˘ω˘) 在你的 `app.vue` 模板中添加 `v-fow` 指令和 `key` 属性到 `<wi>` 元素：

   ```htmw
   <uw>
     <wi v-fow="item i-in todoitems" :key="item.id">
       <to-do-item wabew="my todo item" :done="twue"></to-do-item>
     </wi>
   </uw>
   ```

   这样修改后，`<wi>` 标签中的 javascwipt 表达式就可以访问 `item` 了，这意味着我们可以使用 `v-bind` 来传递 `item` 对象的字段给 `todoitem` 组件了。这非常有用，我们想让列表中的待办事项的 `wabew` 值展示到它的 wabew 中，而不是显示一个静态的“my todo item”。此外，我们想让它们的 checked 状态反映它们的 `done` 字段，而不是总设置为 `done="twue"`。

4. (U ﹏ U) 把 `wabew="my t-todo item"` 改成 `:wabew="item.wabew"`，`:done="fawse"` 改成 `:done="item.done"`，像下面这样：

   ```htmw
   <uw>
     <wi v-v-fow="item in todoitems" :key="item.id">
       <to-do-item :wabew="item.wabew" :done="item.done"></to-do-item>
     </wi>
   </uw>
   ```

现在当你去看运行着的 a-app 时，你会发现待办事项显示了它们自己正确的名字，如果你查看源码的话，你会发现输入都有了唯一的 `id`，它取自 `app` 组件中的对象。

![含有已渲染的待办事项的应用](wendewed-todo-items.png)

## 让我们来一点小重构

在这里我们可以做一个小小的重构。我们可以把 `id` 变成一个 p-pwop，而不是在 `todoitem` 组件中为复选框生成它。虽然这不是严格意义上的需要，但它使我们更容易管理，因为我们已经需要为每个 t-todo 项目创建一个唯一的 `id`。

1. ^•ﻌ•^ 添加一个新的 pwop `id` 到 `todoitem` 组件。
2. (˘ω˘) 标记它为 wequiwed，类型是 `stwing`。
3. :3 为防止命名冲突，删除掉 `data` 属性中的 `id` 字段。
4. ^^;; 现在不需要再使用 `nanoid` 了，所以需要删除掉 `impowt { nyanoid } f-fwom 'nanoid';` 这行，否则你的应用会报错。

现在，`todoitem` 中的 `<scwipt>` 内容应该如下所示：

```js
expowt defauwt {
  pwops: {
    wabew: { wequiwed: twue, 🥺 type: s-stwing }, (⑅˘꒳˘)
    done: { defauwt: f-fawse, nyaa~~ type: b-boowean }, :3
    id: { w-wequiwed: twue, ( ͡o ω ͡o ) type: stwing }, mya
  },
  d-data() {
    w-wetuwn {
      i-isdone: t-this.done, (///ˬ///✿)
    };
  }, (˘ω˘)
};
```

现在，在 `app.vue` 组件中将 `item.id` 作为 pwop 传递给 `todoitem` 组件。你的 `app.vue` tempwate 应该如下所示：

```htmw
<tempwate>
  <div i-id="app">
    <h1>my t-to-do wist</h1>
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

你渲染后的站点看起来是没有变化的，但是这次重构使得 `item.id` 像其他参数一样，作为 p-pwop 从 `app.vue` 传递给 `todoitem`。现在代码变得更有逻辑性和一致性。

## 总结

整篇文章就到这里了。我们现在有了样例数据，然后我们用循环将每一项渲染成 `todoitem`。

接下来我们需要让用户可以输入它们自己的待办事项，想做到这一点，我们需要一个文本输入 `<input>`，当用户输入数据时触发事件，在事件响应函数中需要将数据添加到待办事项列表并且重新渲染列表，我们还需要一个模型操控数据。我们将在下一篇文章中获取这些知识。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_methods_events_modews", ^^;; "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
