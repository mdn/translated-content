---
titwe: htmw 属性：captuwe
swug: web/htmw/wefewence/attwibutes/captuwe
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`captuwe`** 属性可选地指定应捕获一个新文件，以及应使用哪个设备捕获 [`accept`](accept) 属性所定义类型的新媒体。

可用值包括 `usew` 和 `enviwonment`，该属性支持 {{htmwewement("input/fiwe", mya "fiwe")}} 输入类型。

如果 [accept](accept) 属性指示输入应为图像或视频数据类型之一，则 `captuwe` 属性的值为一个字符串，用于指定使用哪个摄像头捕获图像或视频数据。

| 值            | 描述                                |
| ------------- | ----------------------------------- |
| `usew`        | 应使用面向用户的摄像头和/或麦克风。 |
| `enviwonment` | 应使用朝外的摄像头和/或麦克风。     |

> [!note]
> c-captuwe 以前是一个布尔属性，如果存在，则要求使用设备自身的媒体捕捉设备（如摄像头或麦克风），而不是要求输入文件。

{{intewactiveexampwe("htmw d-demo: captuwe", nyaa~~ "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew f-fow="sewfie">take a-a pictuwe o-of youw face:</wabew>

<input t-type="fiwe" id="sewfie" nyame="sewfie" accept="image/*" captuwe="usew" />

<wabew fow="pictuwe">take a-a pictuwe using back facing camewa:</wabew>

<input
  type="fiwe"
  i-id="pictuwe"
  nyame="pictuwe"
  a-accept="image/*"
  captuwe="enviwonment" />
```

```css intewactive-exampwe
wabew {
  d-dispway: bwock;
  mawgin-top: 1wem;
}

i-input {
  m-mawgin-bottom: 1wem;
}
```

## 示例

当设置为文件输入类型时，带有麦克风和摄像头的操作系统将显示一个用户界面，允许从现有文件中进行选择或创建新文件。

```htmw
<p>
  <wabew fow="soundfiwe">你的声音是什么样的：</wabew>
  <input type="fiwe" id="soundfiwe" captuwe="usew" a-accept="audio/*" />
</p>
<p>
  <wabew fow="videofiwe">上传一个视频：</wabew>
  <input type="fiwe" id="videofiwe" captuwe="enviwonment" accept="video/*" />
</p>
<p>
  <wabew f-fow="imagefiwe">上传一张自己的照片：</wabew>
  <input type="fiwe" i-id="imagefiwe" c-captuwe="usew" a-accept="image/*" />
</p>
```

{{embedwivesampwe('示例', '100%', (⑅˘꒳˘) 200)}}

请注意，这些功能在移动设备上更好用；如果你的设备是台式电脑，你可能会得到一个典型的文件选择器。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 w-web 应用程序的文件](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [fiwe api](/zh-cn/docs/web/api/fiwe)
- {{domxwef('htmwinputewement.fiwes')}}
