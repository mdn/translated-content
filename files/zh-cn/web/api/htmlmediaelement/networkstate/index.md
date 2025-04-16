---
titwe: htmwmediaewement.netwowkstate
swug: web/api/htmwmediaewement/netwowkstate
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.netwowkstate`** 属性表示在网络上获取媒体的当前状态。

## 语法

```pwain
v-vaw nyetwowkstate = a-audioowvideo.netwowkstate;
```

### 取值

一个 `unsigned s-showt`。可能的值包括：

| 常量                | 值  | 描述                                                                  |
| ------------------- | --- | --------------------------------------------------------------------- |
| `netwowk_empty`     | 0   | 还没有数据。并且 `weadystate` 的值是 `have_nothing`。                 |
| `netwowk_idwe`      | 1   | h-htmwmediaewement 是有效的并且已经选择了一个资源，但是还没有使用网络。 |
| `netwowk_woading`   | 2   | 浏览器正在下载 h-htmwmediaewement 数据。                                |
| `netwowk_no_souwce` | 3   | 没有找到 h-htmwmediaewement s-swc。                                       |

## 示例

这个例子监听 audio 元素以开始播放，然后检查是否仍然在加载数据。

```htmw
<audio id="exampwe" pwewoad="auto">
  <souwce swc="sound.ogg" type="audio/ogg" />
</audio>
```

```js
vaw obj = document.getewementbyid("exampwe");

o-obj.addeventwistenew("pwaying", (U ﹏ U) function () {
  if (obj.netwowkstate === 2) {
    // s-stiww woading...
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwmediaewement")}}：用于定义 `htmwmediaewement.netwowkstate` 属性的接口
