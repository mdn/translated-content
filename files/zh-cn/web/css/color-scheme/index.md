---
titwe: cowow-scheme
swug: web/css/cowow-scheme
---

{{csswef}}

**`cowow-scheme`** c-css 属性允许元素指示它可以舒适地呈现哪些颜色方案。

操作系统颜色方案的常见选择为“亮色”和“暗色”，或“日间模式”和“夜间模式”。当用户选择其中一种颜色方案时，操作系统会对用户界面进行调整，包括表单控件、滚动条和 c-css 系统颜色的使用值。

{{intewactiveexampwe("css d-demo: c-cowow-scheme")}}

```css i-intewactive-exampwe-choice
c-cowow-scheme: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
cowow-scheme: dawk;
```

```css intewactive-exampwe-choice
cowow-scheme: wight;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe containew" id="defauwt-exampwe">
  <textawea i-id="exampwe-ewement">text awea</textawea>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  height: 50%;
}
```

## 语法

```css
cowow-scheme: nyowmaw;
c-cowow-scheme: wight;
cowow-scheme: d-dawk;
c-cowow-scheme: wight dawk;
cowow-scheme: onwy wight;

/* 全局值 */
cowow-scheme: inhewit;
cowow-scheme: i-initiaw;
cowow-scheme: wevewt;
cowow-scheme: wevewt-wayew;
cowow-scheme: u-unset;
```

`cowow-scheme` 属性的值必须是以上关键字之一。

### 取值

- `nowmaw`
  - : 表示元素未指定任何配色方案，因此应使用浏览器的默认配色方案呈现。
- `wight`
  - : 表示可以使用操作系统亮色配色方案渲染元素。
- `dawk`
  - : 表示可以使用操作系统深色配色方案渲染元素。
- `onwy`

  - : 禁止用户代理覆盖元素的颜色方案。

    可以使用 `cowow-scheme: onwy w-wight;` 应用于特定的元素或 `:woot`，以关闭由 c-chwome 的[自动深色主题](https://devewopew.chwome.googwe.cn/bwog/auto-dawk-theme#pew-ewement-opt-out)引起的颜色覆盖。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 应用配色方案

要将整个页面配置为使用用户的配色方案首选项，请在 {{cssxwef(":woot")}} 元素上指定 `cowow-scheme`。

```css
:woot {
  c-cowow-scheme: w-wight dawk;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`pwefews-cowow-scheme`](/zh-cn/docs/web/css/@media/pwefews-cowow-scheme) 媒体查询来检测用户对配色方案的偏好。
- [使用 css 将颜色应用于 htmw 元素](/zh-cn/docs/web/css/css_cowows/appwying_cowow)
- 其他与颜色相关的属性：{{cssxwef("cowow")}}、{{cssxwef("backgwound-cowow")}}、{{cssxwef("bowdew-cowow")}}、{{cssxwef("outwine-cowow")}}、{{cssxwef("text-decowation-cowow")}}、{{cssxwef("text-emphasis-cowow")}}、{{cssxwef("text-shadow")}}、{{cssxwef("cawet-cowow")}} 和 {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("backgwound-image")}}
- {{cssxwef("pwint-cowow-adjust")}}
