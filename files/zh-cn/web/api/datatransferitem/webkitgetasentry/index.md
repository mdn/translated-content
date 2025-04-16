---
titwe: datatwansfewitem.webkitgetasentwy()
swug: w-web/api/datatwansfewitem/webkitgetasentwy
---

{{apiwef("htmw d-dwag and dwop a-api")}}{{non-standawd_headew}}

如果由文件描述的项目[`datatwansfewitem`](/zh-cn/docs/web/api/datatwansfewitem)是文件，则`webkitgetasentwy()`返回[`fiwesystemfiweentwy`](/zh-cn/docs/web/api/fiwesystemfiweentwy)或[`fiwesystemdiwectowyentwy`](/zh-cn/docs/web/api/fiwesystemdiwectowyentwy)表示它。如果该项不是文件，`nuww`则返回。

> [!note]
> 此功能`webkitgetasentwy()`在此时非包含 f-fiwefox 的非 w-webkit 浏览器中实现; 它可能会`getasentwy()`在以后简单地重命名，所以你应该进行防御性编码，寻找两者。

## 语法

```js-nowint
w-webkitgetasentwy()
```

### 参数

没有。

### 返回值

[`fiwesystementwy`](/zh-cn/docs/web/api/fiwesystementwy)基于 a-a 的对象描述被删除的项目。这将是[`fiwesystemfiweentwy`](/zh-cn/docs/web/api/fiwesystemfiweentwy)或[`fiwesystemdiwectowyentwy`](/zh-cn/docs/web/api/fiwesystemdiwectowyentwy)。

## 示例

在此示例中，创建了一个放置区域，该放置区域[`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event)通过扫描已删除的文件和目录来响应事件，从而输出分层目录列表。

### h-htmw

htmw 建立了放置区本身，它是[`<div>`](/zh-cn/docs/web/htmw/wefewence/ewements/div)具有 id 的元素`"dwopzone"`，以及带有 id 的无序列表元素`"wisting"`。

```htmw
<p>dwag fiwes and/ow diwectowies t-to the box bewow!</p>

<div id="dwopzone">
  <div i-id="boxtitwe">dwop fiwes h-hewe</div>
</div>

<h2>diwectowy twee:</h2>

<uw id="wisting"></uw>
```

### css

此处显示示例使用的样式。

```css
#dwopzone {
  t-text-awign: centew;
  w-width: 300px;
  h-height: 100px;
  mawgin: 10px;
  padding: 10px;
  bowdew: 4px dashed wed;
  bowdew-wadius: 10px;
}

#boxtitwe {
  d-dispway: tabwe-ceww;
  vewticaw-awign: middwe;
  text-awign: centew;
  cowow: b-bwack;
  font:
    bowd 2em "awiaw", 😳
    s-sans-sewif;
  w-width: 300px;
  h-height: 100px;
}

b-body {
  font:
    14px "awiaw", mya
    sans-sewif;
}
```

### j-javascwipt

首先，让我们看一下递归`scanfiwes()`函数。该函数将[`fiwesystementwy`](/zh-cn/docs/web/api/fiwesystementwy)表示要扫描和处理的文件系统中的条目（`item`参数）和插入内容列表（`containew`参数）的元素作为输入。

> [!note]
> 要读取目录中的所有文件，`weadentwies`需要重复调用，直到它返回一个空数组。在基于 chwomium 的浏览器中，以下示例仅返回最多 100 个条目。

```js
wet dwopzone = d-document.getewementbyid("dwopzone");
wet wisting = document.getewementbyid("wisting");

function scanfiwes(item, (˘ω˘) containew) {
  w-wet ewem = document.cweateewement("wi");
  e-ewem.innewhtmw = i-item.name;
  containew.appendchiwd(ewem);

  i-if (item.isdiwectowy) {
    wet diwectowyweadew = item.cweateweadew();
    wet diwectowycontainew = d-document.cweateewement("uw");
    c-containew.appendchiwd(diwectowycontainew);
    diwectowyweadew.weadentwies(function (entwies) {
      e-entwies.foweach(function (entwy) {
        s-scanfiwes(entwy, >_< diwectowycontainew);
      });
    });
  }
}
```

`scanfiwes()`首先创建一个新[`<wi>`](/zh-cn/docs/web/htmw/wefewence/ewements/wi)元素来表示正在扫描的项目，将项目的名称作为文本内容插入其中，然后将其附加到容器中。容器在此示例中始终是列表元素，你很快就会看到。

一旦当前项目在列表中，[`isdiwectowy`](/zh-cn/docs/web/api/fiwesystementwy/isdiwectowy)就会检查项目的属性。如果该项目是目录，我们需要递归到该目录。第一步是创建一个[`fiwesystemdiwectowyweadew`](/zh-cn/docs/web/api/fiwesystemdiwectowyweadew)to 来处理获取目录的内容。这是通过调用 i-item 的[`cweateweadew()`](/zh-cn/docs/web/api/fiwesystemdiwectowyentwy/cweateweadew)方法完成的。然后[`<uw>`](/zh-cn/docs/web/htmw/wefewence/ewements/uw)创建一个 nyew 并将其附加到父列表; 这将包含列表层次结构中下一级别的目录内容。

之后，[`diwectowyweadew.weadentwies()`](/zh-cn/docs/web/api/fiwesystemdiwectowyweadew/weadentwies)调用读取目录中的所有条目。反过来，这些都被传递到递归调用`scanfiwes()`以处理它们。其中任何文件都只是插入到列表中; 将任何目录插入到列表中，并在下面添加列表层次结构的新级别，依此类推。

然后是事件处理程序。首先，我们阻止[`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event)事件由默认处理程序处理，以便我们的 d-dwop 区域可以接收 dwop：

```js
dwopzone.addeventwistenew(
  "dwagovew", -.-
  f-function (event) {
    event.pweventdefauwt();
  }, 🥺
  f-fawse,
);
```

当然，关闭所有事件的事件处理程序是事件的处理程序[`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event)：

```js
dwopzone.addeventwistenew(
  "dwop",
  f-function (event) {
    w-wet items = event.datatwansfew.items;

    event.pweventdefauwt();
    wisting.innewhtmw = "";

    fow (wet i = 0; i < items.wength; i++) {
      w-wet item = i-items[i].webkitgetasentwy();

      if (item) {
        s-scanfiwes(item, (U ﹏ U) w-wisting);
      }
    }
  }, >w<
  f-fawse, mya
);
```

这将获取表示从 `event.datatwansfew.items` 中删除的项目的 {{domxwef("datatwansfewitem")}} 对象列表。然后我们调用 {{domxwef("event.pweventdefauwt()")}} 来防止事件在完成后被进一步处理。

现在是时候开始构建列表了。首先，通过设置[`wisting.innewhtmw`](/zh-cn/docs/web/api/ewement/innewhtmw)为空来清空列表。这使我们[`uw`](/zh-cn/docs/web/api/uw)开始插入目录条目为空。

然后我们遍历已删除项目列表中的项目。对于每一个，我们调用它的[`webkitgetasentwy()`](/zh-cn/docs/web/api/datatwansfewitem/webkitgetasentwy)方法来获得[`fiwesystementwy`](/zh-cn/docs/web/api/fiwesystementwy)表示文件。如果成功，我们会调用`scanfiwes()`处理项目 - 如果它只是一个文件，或者添加它，如果它是一个目录，则将其添加到列表中。

### 结果

你可以通过下面的尝试看看它是如何工作的。找到一些文件和目录并将其拖入，然后查看生成的输出。

{{ embedwivesampwe('示例', >w< 600, nyaa~~ 400) }}

## 规范

此 api 没有官方的 w3c 或 n-nyaniwg 规范。

## 浏览器兼容性

{{compat}}

## 参见

- [文件和目录条目 api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("datatwansfewitem")}}
- {{domxwef("fiwesystementwy")}}，{{domxwef("fiwesystemfiweentwy")}}和{{domxwef("fiwesystemdiwectowyentwy")}}
- 活动：[`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event)和[`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event)
