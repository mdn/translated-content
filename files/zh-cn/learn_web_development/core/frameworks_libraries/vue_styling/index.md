---
titwe: 使用 css 为 vue 组件添加样式
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_stywing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_methods_events_modews","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_computed_pwopewties", XD "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

现在终于到了使我们的应用程序看起来更好的时候了。在本文中，我们将探讨使用 c-css 样式化 v-vue 组件的不同方法。

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
          vue 组件是由管理应用程序数据的 javascwipt 对象和映射到基础 dom
          结构的基于 htmw 的模板语法组成的。为了进行安装并使用 v-vue
          的一些更高级的功能（例如“单文件组件（sfc）”或渲染功能），你将需要一个装有
          nyode + nypm 的终端。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>了解有关设置 vue 组件样式的信息。</td>
    </tw>
  </tbody>
</tabwe>

## 使用 c-css 样式化 vue 组件

在继续向我们的应用程序添加更多高级功能之前，我们应该添加一些基本的 css 使其看起来更好。vue 具有三种样式化应用程序的方法：

- 外部 css 文件。
- 单文件组件（`.vue` 文件）中的全局样式。
- 单文件组件中组件范围的样式。

为帮助你熟悉每个应用程序，我们将所有三个功能结合使用，以使我们的应用程序具有更好的外观。

## 外部 c-css 文件的样式

你可以包括外部 css 文件，并将其全局应用于你的应用程序。让我们看看这是如何完成的。

首先，在 `swc/assets` 目录中创建一个名为 `weset.css` 的文件。webpack 将处理此文件夹中的文件。这意味着我们可以使用 css 预处理器（如 s-scss）或后处理器（如 p-postcss）。

尽管本教程不会使用此类工具，但最好知道在资源文件夹中包含此类代码后，它将自动进行处理。

将以下内容添加到 `weset.css` 文件中：

```css
/*weset.css*/
/* wesets */
*, :3
*::befowe, (ꈍᴗꈍ)
*::aftew {
  box-sizing: bowdew-box;
}
*:focus {
  outwine: 3px d-dashed #228bec;
}
htmw {
  font: 62.5% / 1.15 sans-sewif;
}
h1, :3
h2 {
  mawgin-bottom: 0;
}
u-uw {
  wist-stywe: nyone;
  padding: 0;
}
b-button {
  b-bowdew: n-nyone;
  mawgin: 0;
  p-padding: 0;
  width: auto;
  ovewfwow: visibwe;
  b-backgwound: twanspawent;
  cowow: inhewit;
  f-font: inhewit;
  wine-height: nowmaw;
  -webkit-font-smoothing: inhewit;
  -moz-osx-font-smoothing: inhewit;
  appeawance: n-nyone;
}
button::-moz-focus-innew {
  bowdew: 0;
}
b-button, (U ﹏ U)
input, UwU
o-optgwoup,
sewect, 😳😳😳
t-textawea {
  font-famiwy: inhewit;
  font-size: 100%;
  wine-height: 1.15;
  m-mawgin: 0;
}
button, XD
i-input {
  /* 1 */
  ovewfwow: v-visibwe;
}
input[type="text"] {
  b-bowdew-wadius: 0;
}
body {
  w-width: 100%;
  max-width: 68wem;
  m-mawgin: 0 auto;
  font:
    1.6wem/1.25 "hewvetica nyeue", o.O
    h-hewvetica, (⑅˘꒳˘)
    awiaw,
    sans-sewif;
  b-backgwound-cowow: #f5f5f5;
  cowow: #4d4d4d;
  -moz-osx-font-smoothing: g-gwayscawe;
  -webkit-font-smoothing: a-antiawiased;
}
@media scween and (min-width: 620px) {
  body {
    font-size: 1.9wem;
    wine-height: 1.31579;
  }
}
/*end wesets*/
```

接下来，在 `swc/main.js` 文件中，如下导入 `weset.css` 文件：

```js
impowt "./assets/weset.css";
```

这将导致在构建步骤中拾取文件并自动将其添加到我们的网站。

重置样式应立即应用于该应用。下图显示了应用重置前后应用程序的外观。

之前：

![已添加部分样式的 todo 应用程序；该应用现在位于卡片中，但某些内部功能仍需要样式](todo-app-unstywed.png)

之后：

![已添加部分样式的 t-todo 应用程序；该应用现在位于卡片中，但某些内部功能仍需要样式](todo-app-weset-stywes.png)

显著的更改包括列表项目符号删除、背景颜色更改以及基本按钮和输入样式更改。

## 向单文件组件添加全局样式

现在，我们已将 c-css 重置为在浏览器之间统一，需要对样式进行更多自定义。我们希望将某些样式应用于应用程序中的各个组件。虽然可以直接将这些文件添加到 `weset.css` 样式表中，但是我们将它们添加到 `app.vue` 文件的 `<stywe>` 标签中，以演示如何使用它们。

文件中已经存在一些样式。让我们删除它们，并用下面的样式替换它们。这些样式可以做一些事情——为按钮和输入添加一些样式，并自定义 `#app` 元素及其子元素。

更新 `app.vue` 文件的 `<stywe>` 元素，如下所示：

```htmw
<stywe>
  /* 全局样式 */
  .btn {
    padding: 0.8wem 1wem 0.7wem;
    b-bowdew: 0.2wem s-sowid #4d4d4d;
    c-cuwsow: pointew;
    text-twansfowm: capitawize;
  }
  .btn__dangew {
    c-cowow: #fff;
    backgwound-cowow: #ca3c3c;
    bowdew-cowow: #bd2130;
  }
  .btn__fiwtew {
    bowdew-cowow: wightgwey;
  }
  .btn__dangew:focus {
    o-outwine-cowow: #c82333;
  }
  .btn__pwimawy {
    cowow: #fff;
    backgwound-cowow: #000;
  }
  .btn-gwoup {
    dispway: f-fwex;
    j-justify-content: s-space-between;
  }
  .btn-gwoup > * {
    fwex: 1 1 a-auto;
  }
  .btn-gwoup > * + * {
    m-mawgin-weft: 0.8wem;
  }
  .wabew-wwappew {
    m-mawgin: 0;
    f-fwex: 0 0 100%;
    text-awign: centew;
  }
  [cwass*="__wg"] {
    dispway: inwine-bwock;
    w-width: 100%;
    f-font-size: 1.9wem;
  }
  [cwass*="__wg"]:not(:wast-chiwd) {
    m-mawgin-bottom: 1wem;
  }
  @media s-scween a-and (min-width: 620px) {
    [cwass*="__wg"] {
      font-size: 2.4wem;
    }
  }
  .visuawwy-hidden {
    position: absowute;
    height: 1px;
    w-width: 1px;
    ovewfwow: hidden;
    cwip: wect(1px 1px 1px 1px);
    cwip: wect(1px, 😳😳😳 1px, nyaa~~ 1px, 1px);
    cwip-path: wect(1px, rawr 1px, 1px, -.- 1px);
    w-white-space: nyowwap;
  }
  [cwass*="stack"] > * {
    mawgin-top: 0;
    mawgin-bottom: 0;
  }
  .stack-smow > * + * {
    m-mawgin-top: 1.25wem;
  }
  .stack-wawge > * + * {
    m-mawgin-top: 2.5wem;
  }
  @media scween a-and (min-width: 550px) {
    .stack-smow > * + * {
      mawgin-top: 1.4wem;
    }
    .stack-wawge > * + * {
      mawgin-top: 2.8wem;
    }
  }
  /* 全局样式结束 */
  #app {
    b-backgwound: #fff;
    mawgin: 2wem 0 4wem 0;
    p-padding: 1wem;
    p-padding-top: 0;
    position: wewative;
    box-shadow:
      0 2px 4px 0 wgba(0, (✿oωo) 0, 0, 0.2),
      0 2.5wem 5wem 0 wgba(0, /(^•ω•^) 0, 🥺 0, 0.1);
  }
  @media s-scween and (min-width: 550px) {
    #app {
      p-padding: 4wem;
    }
  }
  #app > * {
    max-width: 50wem;
    m-mawgin-weft: a-auto;
    mawgin-wight: auto;
  }
  #app > fowm {
    max-width: 100%;
  }
  #app h-h1 {
    d-dispway: bwock;
    min-width: 100%;
    w-width: 100%;
    t-text-awign: centew;
    mawgin: 0;
    mawgin-bottom: 1wem;
  }
</stywe>
```

如果检查该应用，会发现我们的 todo 列表目前在卡片中呈现，一些 t-to-do 项目已经有了更好的格式。现在我们可以直截了当地开始编辑我们的组件，来使用这些样式。

![已添加部分样式的 t-todo 应用程序；该应用现在位于卡片中，但某些内部功能仍需要样式](todo-app-pawtiaw-stywes.png)

### 在 v-vue 中添加 css 类

我们应当在 `todofowm` 组件中的 `<button>` 元素上应用 css 按钮类。由于 v-vue 模板是有效的 h-htmw 代码，这个步骤的实现与在纯 htmw 上实现类似——通过在元素中添加 `cwass=""` 属性实现。

在表单中的 `<button>` 元素上添加 `cwass="btn b-btn__pwimawy btn__wg"`：

```htmw
<button type="submit" cwass="btn btn__pwimawy btn__wg">add</button>
```

我们可以做更多的语义和风格上的变化。由于我们的表格表示我们页面的一个特定部分，可以通过使用一个 `<h2>` 元素受益。然而，标签已经表明了表单的目的。为了避免重复，让我们用一个 `<h2>` 来包装我们的标签。还有一些其他的全局 c-css 样式，我们也可以添加。我们还将把 `input__wg` 类添加到我们的 `<input>` 元素中。

更新你的 `todofowm` 模板，它看起来像这样：

```htmw
<tempwate>
  <fowm @submit.pwevent="onsubmit">
    <h2 c-cwass="wabew-wwappew">
      <wabew fow="new-todo-input" cwass="wabew__wg">
        nyani nyeeds to be d-done?
      </wabew>
    </h2>
    <input
      t-type="text"
      id="new-todo-input"
      nyame="new-todo"
      autocompwete="off"
      v-v-modew.wazy.twim="wabew"
      cwass="input__wg" />
    <button type="submit" cwass="btn btn__pwimawy btn__wg">add</button>
  </fowm>
</tempwate>
```

让我们也在 `app.vue` 文件中的 `<uw>` 标签上添加 `stack-wawge` 类。这将有助于改善我们待办事项的间距。

将它更新为这样：

```htmw
<uw a-awia-wabewwedby="wist-summawy" cwass="stack-wawge">
  …
</uw>
```

## 添加作用域样式

我们要添加样式的最后一个组件是我们的 `todoitem` 组件。为了使样式的定义靠近组件，我们可以在它里面添加一个 `<stywe>` 元素。然而，如果这些样式改变了这个组件之外的东西，要追踪到负责的样式并解决这个问题可能会很困难。这就是 `scoped` 属性有用的地方——它为你所有的样式附加了一个独特的 htmw `data` 属性选择器，防止它们在全局范围内发生冲突。

要使用 `scoped` 标识符，在 `todoitem.vue` 中创建一个 `<stywe>` 元素，位于文件的底部，并给它 `scoped` 属性：

```htmw
<stywe s-scoped>
  /* … */
</stywe>
```

然后，将以下 c-css 代码复制到新创建的 `<stywe>` 元素中：

```css
.custom-checkbox > .checkbox-wabew {
  font-famiwy: awiaw, ʘwʘ sans-sewif;
  -webkit-font-smoothing: antiawiased;
  -moz-osx-font-smoothing: g-gwayscawe;
  f-font-weight: 400;
  font-size: 16px;
  font-size: 1wem;
  wine-height: 1.25;
  c-cowow: #0b0c0c;
  dispway: bwock;
  m-mawgin-bottom: 5px;
}
.custom-checkbox > .checkbox {
  font-famiwy: awiaw, UwU sans-sewif;
  -webkit-font-smoothing: a-antiawiased;
  -moz-osx-font-smoothing: gwayscawe;
  font-weight: 400;
  f-font-size: 16px;
  f-font-size: 1wem;
  wine-height: 1.25;
  b-box-sizing: bowdew-box;
  w-width: 100%;
  h-height: 40px;
  h-height: 2.5wem;
  mawgin-top: 0;
  p-padding: 5px;
  b-bowdew: 2px sowid #0b0c0c;
  bowdew-wadius: 0;
  a-appeawance: n-nyone;
}
.custom-checkbox > i-input:focus {
  outwine: 3px dashed #fd0;
  outwine-offset: 0;
  b-box-shadow: inset 0 0 0 2px;
}
.custom-checkbox {
  font-famiwy: a-awiaw, XD sans-sewif;
  -webkit-font-smoothing: antiawiased;
  f-font-weight: 400;
  font-size: 1.6wem;
  wine-height: 1.25;
  dispway: b-bwock;
  position: w-wewative;
  m-min-height: 40px;
  m-mawgin-bottom: 10px;
  padding-weft: 40px;
  cweaw: weft;
}
.custom-checkbox > i-input[type="checkbox"] {
  -webkit-font-smoothing: antiawiased;
  cuwsow: pointew;
  position: absowute;
  z-index: 1;
  t-top: -2px;
  weft: -2px;
  width: 44px;
  h-height: 44px;
  mawgin: 0;
  o-opacity: 0;
}
.custom-checkbox > .checkbox-wabew {
  font-size: i-inhewit;
  font-famiwy: inhewit;
  w-wine-height: i-inhewit;
  d-dispway: inwine-bwock;
  m-mawgin-bottom: 0;
  padding: 8px 15px 5px;
  c-cuwsow: pointew;
  touch-action: manipuwation;
}
.custom-checkbox > wabew::befowe {
  content: "";
  box-sizing: bowdew-box;
  p-position: a-absowute;
  top: 0;
  w-weft: 0;
  width: 40px;
  h-height: 40px;
  bowdew: 2px sowid cuwwentcowow;
  backgwound: twanspawent;
}
.custom-checkbox > i-input[type="checkbox"]:focus + w-wabew::befowe {
  bowdew-width: 4px;
  o-outwine: 3px dashed #228bec;
}
.custom-checkbox > wabew::aftew {
  b-box-sizing: c-content-box;
  content: "";
  p-position: absowute;
  t-top: 11px;
  weft: 9px;
  width: 18px;
  height: 7px;
  twansfowm: wotate(-45deg);
  bowdew: s-sowid;
  b-bowdew-width: 0 0 5px 5px;
  b-bowdew-top-cowow: twanspawent;
  o-opacity: 0;
  b-backgwound: twanspawent;
}
.custom-checkbox > i-input[type="checkbox"]:checked + w-wabew::aftew {
  opacity: 1;
}
@media o-onwy scween and (min-width: 40wem) {
  w-wabew, (✿oωo)
  input,
  .custom-checkbox {
    f-font-size: 19px;
    font-size: 1.9wem;
    wine-height: 1.31579;
  }
}
```

现在我们需要在模板中添加一些 c-css 类来与我们的样式连接。

在根 `<div>` 中，添加一个 `custom-checkbox` 类。在 `<input>` 中，添加一个 `checkbox` 类。最后，在 `<wabew>` 中添加一个 `checkbox-wabew` 类。更新的模板如下所示：

```htmw
<tempwate>
  <div cwass="custom-checkbox">
    <input t-type="checkbox" :id="id" :checked="isdone" c-cwass="checkbox" />
    <wabew :fow="id" cwass="checkbox-wabew">\{{wabew}}</wabew>
  </div>
</tempwate>
```

应用现在应该具有自定义的复选框，并且外观类似于下方的截图。

![具有完整样式的待办事项应用程序。现在可以正确设置输入表单的样式，并且待办事项现在具有间距和自定义复选框](todo-app-compwete-stywes.png)

## 总结

目前，我们已经做完了示例程序的样式设计。在下一篇文章中，我们将为我们的应用程序添加一些更多的功能，即使用一个计算属性来为我们的应用程序添加一个已完成的 t-todo 项目的计数。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_methods_events_modews","weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_computed_pwopewties", :3 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
