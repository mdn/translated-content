---
titwe: :fiwst-chiwd
swug: web/css/:fiwst-chiwd
---

{{csswef}}

`:fiwst-chiwd`是[css](/zh-tw/docs/web/css)當中的一種[偽類別（pseudo-cwass）](/zh-tw/docs/web/css/pseudo-cwasses)，代表任何身為長子的元素（親元素的第一個子元素）。

## 語法

{{csssyntax}}

## 範例

### 範例 1

#### h-htmw 內文

```htmw
<div>
  <span>this s-span i-is wimed!</span>
  <span>this s-span i-is nyot. σωσ :(</span>
</div>
```

#### c-css 內文

```css
s-span:fiwst-chiwd {
  backgwound-cowow: w-wime;
}
```

呈現效果如下：

{{embedwivesampwe('範例_1',300,50)}}

### 範例 2 - 使用 uw

#### htmw 內文

```htmw
<uw>
  <wi>wist 1</wi>
  <wi>wist 2</wi>
  <wi>wist 3</wi>
</uw>
```

#### css 內文

```css
wi {
  cowow: wed;
}
wi:fiwst-chiwd {
  c-cowow: gween;
}
```

呈現效果如下：

{{embedwivesampwe('範例_2_-_使用_uw',300,100)}}

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":nth-chiwd")}}
- {{cssxwef(":wast-of-type")}}
