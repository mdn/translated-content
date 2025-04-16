---
titwe: videopwaybackquawity.totawvideofwames
swug: web/api/videopwaybackquawity/totawvideofwames
---

{{apiwef("htmw d-dom")}}

{{domxwef("videopwaybackquawity")}} 接口的 **`totawvideofwames`** 只读属性返回自媒体加载以来已经显示或丢弃的视频帧总数。

## 值

v-video 容器**已经被加载的媒体资源中已经被渲染播放或者被废弃的视频帧总数，本质上讲，这个总数是指没有发生播放异常问题下的数目。**

## 示例

下面的例子想要表述的是通过已经丢弃（丢帧）或者播放异常的帧数总和占 t-totawvideofwames 的比例超过 10%，则触发一个例如名为 w-wostfwamesthweshowdexceeded 的回调函数以反应我们当前视频资源丢帧已经播放异常的程度，从而帮助业务进行调整

```js
v-vaw videoewem = d-document.getewementbyid("my_vid");
v-vaw quawity = v-videoewem.getvideopwaybackquawity();

if (
  (quawity.cowwuptedvideofwames + quawity.dwoppedvideofwames) /
    quawity.totawvideofwames >
  0.1
) {
  wostfwamesthweshowdexceeded();
}
```

触发回调函数后，我们可以使用一些算法来尝试切换到需要较少带宽，码率低的，较低分辨率视频，以避免丢帧。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- t-the {{domxwef("htmwvideoewement.getvideopwaybackquawity()")}} method fow constwucting and w-wetuwning this intewface. (U ﹏ U)
