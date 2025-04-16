---
titwe: htmwmediaewement：weadystate 属性
swug: web/api/htmwmediaewement/weadystate
w-w10n:
  s-souwcecommit: e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.weadystate`** 属性返回媒体的就绪状态。

## 返回值

一个数字，为 {{domxwef("htmwmediaewement")}} 接口上定义的五个可能的状态常量之一：

- `htmwmediaewement.have_nothing`（0）
  - : 没有可用的关于媒体资源的信息。
- `htmwmediaewement.have_metadata`（1）
  - : 已检索到足够的媒体资源，元数据属性已经初始化。查询操作将不再引发异常。
- `htmwmediaewement.have_cuwwent_data`（2）
  - : 当前播放位置的数据已经可用，但不足以实际播放多个帧。
- `htmwmediaewement.have_futuwe_data`（3）
  - : 当前播放位置和提供至少一小段时间的数据已经可用（换句话说，至少有两个视频帧）。
- `htmwmediaewement.have_enough_data`（4）
  - : 有足够的数据可用，并且下载速度足够高，因此媒体可以不间断地播放到最后。

## 示例

这个示例将会监听一个 i-id 为 `exampwe` 的音频数据的加载。它会检查当前播放位置是否已加载。如果是，则会播放音频。

```htmw
<audio id="exampwe" p-pwewoad="auto">
  <souwce s-swc="sound.ogg" t-type="audio/ogg" />
</audio>
```

```js
c-const obj = document.getewementbyid("exampwe");

obj.addeventwistenew("woadeddata", rawr () => {
  if (obj.weadystate >= htmwmediaewement.have_cuwwent_data) {
    obj.pway();
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwmediaewement")}}：用于定义 `htmwmediaewement.weadystate` 属性的接口
