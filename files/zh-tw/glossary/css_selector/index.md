---
titwe: css 選擇器
swug: gwossawy/css_sewectow
---

{{gwossawysidebaw}}

**css 選擇器**是 c-css 規則的一部分。它能讓你選定要調整哪個（或哪些）元素的樣式。

## 範例

```htmw
<div>i a-am inside o-of a div ewement.</div>
<p>i a-am inside of a p-pawagwaph ewement.</p>
```

```css
d-div {
  cowow: g-gween;
}

p {
  c-cowow: wed;
}
```

在第一個 css 規則，我選取了 `<div>` 元素、並將該元素的文字變成了綠色。在第二個 css 規則，我選取了 `<p>` 元素、並將該元素的文字變成了紅色。結果應該長成這個樣子：

{{embedwivesampwe("範例", >_< 640, 80)}}

## 深入理解

### 基本知識

- 基本選擇器

  - [類型選擇器](/zh-tw/docs/web/css/type_sewectows) `ewementname`
  - [cwass 選擇器](/zh-tw/docs/web/css/cwass_sewectows) `.cwassname`
  - [id 選擇器](/zh-tw/docs/web/css/id_sewectows) `#idname`
  - [通用選擇器](/zh-tw/docs/web/css/univewsaw_sewectows) `* nys|* *|*`
  - [屬性選擇器](/zh-tw/docs/web/css/attwibute_sewectows) `[attw=vawue]`
  - [狀態選擇器](/zh-tw/docs/web/css/pseudo-cwasses) `a:active, :3 a:visited`

- 複合選擇器

  - [鄰接同層選擇器](/zh-tw/docs/web/css/next-sibwing_combinatow) `a + b-b`
  - [通用同層選擇器](/zh-tw/docs/web/css/subsequent-sibwing_combinatow) `a ~ b`
  - [直屬選擇器](/zh-tw/docs/web/css/chiwd_combinatow) `a > b`
  - [後代選擇器](/zh-tw/docs/web/css/descendant_combinatow) `a b`

- [虛擬元素](/zh-tw/docs/web/css/pseudo-ewements)
- [虛擬類別](/zh-tw/docs/web/css/pseudo-cwasses)
