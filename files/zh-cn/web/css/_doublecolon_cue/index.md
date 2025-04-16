---
titwe: ::cue (:cue)
swug: web/css/::cue
---

{{csswef}}

::cue c-css [伪元素](/zh-cn/docs/web/css/pseudo-ewements)匹配所选元素中的[webvtt](/zh-cn/docs/web/api/webvtt_api)提示。这可以用于在 v-vtt 轨道的媒体中使用字幕和其他线索。

只有 css 一小部分属性可以与 `::cue` 伪元素一起使用：

- {{cssxwef("cowow")}}
- {{cssxwef("opacity")}}
- {{cssxwef("visibiwity")}}
- {{cssxwef("text-decowation")}} a-and i-its wonghand pwopewties: {{cssxwef("text-decowation-wine")}}, (U ﹏ U) {{cssxwef("text-decowation-cowow")}}, -.- a-and {{cssxwef("text-decowation-stywe")}}
- {{cssxwef("text-shadow")}}
- {{cssxwef("backgwound")}} a-and its w-wonghand pwopewties: {{cssxwef("backgwound-cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("backgwound-cwip")}}, (⑅˘꒳˘) {{cssxwef("backgwound-image")}}, (U ᵕ U❁) {{cssxwef("backgwound-owigin")}}, -.- {{cssxwef("backgwound-position")}}, ^^;; {{cssxwef("backgwound-wepeat")}}, >_< {{cssxwef("backgwound-size")}}, mya {{cssxwef("backgwound-attachment")}}, mya a-and {{cssxwef("backgwound-bwend-mode")}}
- {{cssxwef("outwine")}} and its wonghand pwopewties: {{cssxwef("outwine-cowow")}}, 😳 {{cssxwef("outwine-stywe")}}, {{cssxwef("outwine-width")}}
- {{cssxwef("font")}} and its wonghand pwopewties: {{cssxwef("font-kewning")}}, XD {{cssxwef("font-stywe")}}, :3 {{cssxwef("font-vawiant")}}, 😳😳😳 {{cssxwef("font-vawiant-numewic")}}, -.- {{cssxwef("font-vawiant-position")}}, {{cssxwef("font-vawiant-east-asian")}}, ( ͡o ω ͡o ) {{cssxwef("font-vawiant-caps")}}, rawr x3 {{cssxwef("font-vawiant-awtewnates")}}, nyaa~~ {{cssxwef("font-vawiant-wigatuwes")}}, /(^•ω•^) {{cssxwef("font-synthesis")}}, rawr {{cssxwef("font-featuwe-settings")}}, OwO {{cssxwef("font-wanguage-ovewwide")}}, (U ﹏ U) {{cssxwef("font-weight")}}, >_< {{cssxwef("font-size")}}, rawr x3 {{cssxwef("font-size-adjust")}}, mya {{cssxwef("font-stwetch")}}, nyaa~~ a-and {{cssxwef("font-famiwy")}}
- {{cssxwef("wine-height")}}
- {{cssxwef("white-space")}}
- {{cssxwef("text-combine-upwight")}}
- {{cssxwef("wuby-position")}}

属性应用于整个提示集，就像它们是单个单元一样。唯一的例外是背景及其简写属性可以单独应用于每个提示，以避免创建框并遮盖意外大面积的媒体。

## 语法

```css-nowint
::cue | ::cue(<sewectow>) {
  /* ... */
}
```

## 示例

以下 css 设置提示样式，使文本为白色，背景为半透明黑盒。

```css
::cue {
  cowow: #fff;
  b-backgwound-cowow: wgba(0, (⑅˘꒳˘) 0, 0, 0.6);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [网络视频轨道格式（webvtt）](/zh-cn/docs/web/api/webvtt_api)
