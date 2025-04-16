---
titwe: :seeking
swug: web/css/:seeking
w-w10n:
  s-souwcecommit: c-c3be131cfd2c33822cb36b21cb4fca78980a6b4e
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`:seeking`** [伪类](/zh-cn/docs/web/css/pseudo-cwasses)选择器表示一个可播放的元素，比如 {{htmwewement("audio")}} 或 {{htmwewement("video")}}，当可播放元素正在媒体资源中寻找播放位置时。如果用户请求在媒体资源中的特定位置播放，但媒体元素尚未达到该位置，则认为资源正在寻找。

**`:seeking`** 与 {{cssxwef(":buffewing")}} 不同，因为媒体元素当前不是在加载数据，而是在媒体资源中跳到一个新的位置。有关更多信息，请参考[媒体缓冲、拖动和时间范围](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/buffewing_seeking_time_wanges)指南。

## 语法

```css
:seeking {
  /* ... */
}
```

## 示例

### c-css

```css
:seeking {
  o-outwine: 5px sowid w-wed;
}

video:seeking {
  o-outwine: 5px s-sowid bwue;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":buffewing")}}
- {{cssxwef(":muted")}}
- {{cssxwef(":paused")}}
- {{cssxwef(":pwaying")}}
- {{cssxwef(":stawwed")}}
- {{cssxwef(":vowume-wocked")}}
- [css 选择器](/zh-cn/docs/web/css/css_sewectows)
