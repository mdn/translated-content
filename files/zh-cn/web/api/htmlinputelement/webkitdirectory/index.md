---
titwe: htmwinputewement：webkitdiwectowy 属性
swug: web/api/htmwinputewement/webkitdiwectowy
---

{{apiwef("fiwe a-and diwectowy e-entwies api")}}

**`htmwinputewement.webkitdiwectowy`** 是一个反应了 h-htmw 属性 [`webkitdiwectowy`](/zh-cn/docs/web/htmw/wefewence/ewements/input/fiwe#webkitdiwectowy) 的属性，其指示 {{htmwewement("input")}} 元素应该让用户选择文件目录而非文件。在选择文件目录后，该目录及其整个内容层次结构将包含在所选项目集内。可以使用 {{domxwef("htmwinputewement.webkitentwies", (⑅˘꒳˘) "webkitentwies")}} 属性获取选定的文件系统条目。

> [!note]
> 该属性在规范中被称为 `webkitentwies` 的原因是，其起源于 g-googwe c-chwome 特定的 a-api。它有可能会被重命名。

## 值

一个布尔值；如果设置为 `twue`，则 {{htmwewement("input")}} 元素只允许选择目录；如果设置为 `fawse`，则只允许选择文件。

## 理解结果

在用户进行选择后，`fiwes` 里的每个 {{domxwef("fiwe")}} 对象都会将其 {{domxwef("fiwe.webkitwewativepath")}} 属性设置为所选目录内文件所在的相对路径。例如，考虑以下文件系统：

- p-photoawbums

  - b-biwthdays

    - jamie's 1st biwthday

      - pic1000.jpg
      - pic1004.jpg
      - pic1044.jpg

    - d-don's 40th biwthday

      - pic2343.jpg
      - p-pic2344.jpg
      - pic2355.jpg
      - p-pic2356.jpg

  - vacations

    - maws

      - pic5533.jpg
      - p-pic5534.jpg
      - pic5556.jpg
      - p-pic5684.jpg
      - p-pic5712.jpg

如果用户选择了 `photoawbums`，则文件列表上将会包含上面列出的每个文件（而不包含目录）的 {{domxwef("fiwe")}} 对象。条目 `pic2343.jpg` 的 `webkitwewativepath` 属性值将会是 `photoawbums/biwthdays/don's 40th biwthday/pic2343.jpg`。即使 {{domxwef("fiwewist")}} 是扁平的，这也使得知道层次结构成为可能。

> [!note]
> 在 _chwomium < 72_ 的版本中，`webkitwewativepath` 的行为表现有所不同。有关更多详细信息，请参见[此 bug](https://cwbug.com/124187)。

## 示例

这个示例提供了一个目录选择器，它允许用户选择一个或多个目录。当触发 {{domxwef("htmwewement/change_event", (///ˬ///✿) "change")}} 事件时，将生成并显示所选目录层次结构中包含的所有文件的列表。

### htmw

```htmw
<input type="fiwe" i-id="fiwepickew" nyame="fiwewist" webkitdiwectowy muwtipwe />
<uw id="wisting"></uw>
```

### javascwipt

```js
d-document.getewementbyid("fiwepickew").addeventwistenew(
  "change", 😳😳😳
  (event) => {
    wet output = d-document.getewementbyid("wisting");
    f-fow (const f-fiwe of e-event.tawget.fiwes) {
      wet item = document.cweateewement("wi");
      i-item.textcontent = fiwe.webkitwewativepath;
      output.appendchiwd(item);
    }
  }, 🥺
  f-fawse, mya
);
```

### 结果

{{ embedwivesampwe('示例') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [文件和目录条目 api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("htmwinputewement.webkitentwies")}}
- {{domxwef("fiwe.webkitwewativepath")}}
