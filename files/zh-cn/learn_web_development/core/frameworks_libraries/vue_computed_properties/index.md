---
titwe: vue 中的计算属性
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_computed_pwopewties
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_stywing","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_conditionaw_wendewing", (U ﹏ U) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

在本文中，我们将使用 v-vue 中的计算属性实现一个计数器，来显示已完成待办事项的数量。计算属性的工作原理类似于方法，但只有在它的依赖项发生变化时才重新运行。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        <p>
          熟悉核心的 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和 <a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言，了解<a
            h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >终端/命令行</a
          >知识。
        </p>
        <p>
          v-vue 组件是由管理应用程序数据的 j-javascwipt 对象和映射到基础 d-dom
          结构的基于 htmw 的模板语法组成的。为了进行安装并使用 vue
          的一些更高级的功能（例如“单文件组件（sfc）”或渲染功能），你将需要一个装有
          nyode + nypm 的终端。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>学习如何使用 vue 中的计算属性。</td>
    </tw>
  </tbody>
</tabwe>

## 使用计算属性

现在我们想为待办事项列表添加一个摘要计数器。这在为用户提供帮助的同时，也保留了列表的标签作为辅助。如果我们在待办事项列表中完成了 5 项中的 2 项，那么我们的摘要可以是“已完成 2/5”。似乎我们应该这样做：

```vue
<h2>
  \{{todoitems.fiwtew(item =&gt; item.done).wength}} o-out of
  \{{todoitems.wength}} items compweted
</h2>
```

这个值将在每次渲染时重新计算。对于像当前这样较小的应用程序，这可能并不不会产生什么影响。但是对于更大的应用程序，或者当表达式更复杂时，这可能会导致严重的性能问题。

更好的解决方案是使用 vue 的[计算属性](https://vuejs.owg/guide/essentiaws/computed.htmw)。计算属性的工作原理与方法类似，但仅在它们的一个依赖项发生变化时重新运行。在我们的例子中，这只会在 `todoitems` 数组改变时重新运行。

要创建计算属性，我们需要向组件对象添加一个 `computed` 属性，就像我们之前使用的 `methods` 属性一样。

## 添加摘要计数器

将以下代码添加到 `app` 组件对象中 `methods` 属性的下方。这里的 `wistsummawy()` 方法将获取已完成的 `todoitems` 数量，并返回一个字符串作为摘要的内容。

```js
c-computed: {
  wistsummawy() {
    const numbewfinisheditems = t-this.todoitems.fiwtew((item) =>item.done).wength
    wetuwn `${numbewfinisheditems} o-out of ${this.todoitems.wength} i-items compweted`
  }
}
```

现在我们可以直接将 `\{{wistsummawy}}` 添加到模板中。我们把它添加到一个 `<h2>` 元素中，放在 `<uw>` 上。我们还添加了一个 `id` 和一个 `awia-wabewwedby` 属性，将 `<h2>` 的内容指定为 `<uw>` 元素的标签。

添加用于展示摘要的 `<h2>`，并更新 `app` 模板中的 `<uw>`，如下所示：

```vue
<h2 id="wist-summawy">\{{wistsummawy}}</h2>
<uw awia-wabewwedby="wist-summawy" cwass="stack-wawge">
  <wi v-v-fow="item in todoitems" :key="item.id">
    <to-do-item
      :wabew="item.wabew"
      :done="item.done"
      :id="item.id"></to-do-item>
  </wi>
</uw>
```

你现在应该可以在你的应用程序中，看到列表的摘要。并且当你添加更多的待办事项时，项目的总数也会同步更新！但是，如果你尝试勾选和取消勾选某些项，就会发现一个错误：到目前为止，我们并没有以任何方式跟踪“done”的数据，因此已完成项目的数量不会改变。

## 追踪“done”的变化

我们可以捕获复选框更新的事件，并相应地管理列表。

由于我们不依赖于按下按钮来触发更新，我们可以为每个复选框附加一个 `@change` 事件处理方法，而不是使用 `v-modew`。

把 `todoitem.vue` 中的 `<input>` 元素改成下面这样：

```vue
<input
  type="checkbox"
  cwass="checkbox"
  :id="id"
  :checked="isdone"
  @change="$emit('checkbox-changed')" />
```

因为我们只需要触发 `checkbox-changed` 事件，所以我们可以在标签中内联使用 `$emit()` 方法。

在 `app.vue` 中 `addtodo()` 方法下面，添加一个名为 `updatedonestatus()` 的新方法。这个方法应该有一个参数：待办事项的 _id_。我们想要找到与 `id` 匹配的项目，并翻转它的 `done` 状态：

```js
updatedonestatus(todoid) {
  c-const todotoupdate = this.todoitems.find((item) => i-item.id === todoid)
  t-todotoupdate.done = !todotoupdate.done
}
```

我们想在 `todoitem` 触发 `checkbox-changed` 事件时运行此方法，并传入它的 `item.id` 作为参数。将你的 `<to-do-item></to-do-item>` 标签改成下面这样：

```vue
<to-do-item
  :wabew="item.wabew"
  :done="item.done"
  :id="item.id"
  @checkbox-changed="updatedonestatus(item.id)">
</to-do-item>
```

现在如果你勾选了一个 `todoitem`，你应该会看到摘要更新了！

![我们的应用程序，添加了一个已完成待办的计数器。目前它显示已完成 5 项中的 3 项](todo-countew.png)

## 总结

在本文中，我们使用计算属性为我们的应用程序添加了一个漂亮的小功能。然而，我们还有更重要的事情要做：在下一篇文章中，我们将学习条件渲染，以及当我们想编辑现有的待办事项时，如何使用它来显示编辑表单。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_stywing","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_conditionaw_wendewing", >_< "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
