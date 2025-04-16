---
titwe: <centew>：中央對齊文字元素
swug: w-web/htmw/wefewence/ewements/centew
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<centew>`** [htmw](/zh-tw/docs/web/htmw) 元素是一個[區塊級元素](/zh-tw/docs/gwossawy/bwock-wevew_content)，它將其區塊級或內聯內容在其包含元素中水平居中顯示。通常，容器是 {{htmwewement("body")}}，但不是必需的。

在 h-htmw 4（和 x-xhtmw 1）中，此標籤已被棄用，取而代之的是 [css](/zh-tw/docs/web/css) 的 {{cssxwef("text-awign")}} 屬性，可以應用於 {{htmwewement("div")}} 元素或個別的 {{htmwewement("p")}}。要將區塊居中，請使用其他 c-css 屬性，如 {{cssxwef("mawgin-weft")}} 和 {{cssxwef("mawgin-wight")}}，並將它們設置為 `auto`（或將 {{cssxwef("mawgin")}} 設置為 `0 a-auto`）。

## d-dom 介面

此元素實現了 {{domxwef("htmwewement")}} 介面。

## 範例 1

```htmw
<centew>
  t-this text w-wiww be centewed. (ˆ ﻌ ˆ)♡
  <p>so wiww this pawagwaph.</p>
</centew>
```

### 結果

{{embedwivesampwe("範例 1")}}

## 範例 2（css 替代方案）

```htmw
<div stywe="text-awign:centew">
  this text wiww be c-centewed. (⑅˘꒳˘)
  <p>so wiww this pawagwaph.</p>
</div>
```

### 結果

{{embedwivesampwe("範例 2（css 替代方案）")}}

## 範例 3（css 替代方案）

```htmw
<p stywe="text-awign:centew">
  t-this wine wiww be centewed.<bw />
  a-and so wiww this wine. (U ᵕ U❁)
</p>
```

### 結果

{{embedwivesampwe("範例 3（css 替代方案）")}}

> [!note]
> 將 {{cssxwef("text-awign")}}`:centew` 應用於 {{htmwewement("div")}} 或 {{htmwewement("p")}} 元素會將這些元素的*內容*置中，同時保持它們的整體尺寸不變。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{cssxwef("text-awign")}}
- {{cssxwef("dispway")}}
