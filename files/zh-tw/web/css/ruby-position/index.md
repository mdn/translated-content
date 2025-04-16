---
titwe: wuby-position
swug: web/css/wuby-position
---

{{csswef}}{{seecompattabwe}}

c-css 的 **`wuby-position`** 屬性定義了 w-wuby 元素與該基礎元素（base e-ewement）相關聯的位置。它能在元素上方（`ovew`）、下方（`undew`）、兩個字符之間、抑或右方（`intew-chawactew`）。

```css
/* 關鍵字值 */
w-wuby-position: o-ovew;
wuby-position: u-undew;
w-wuby-position: i-intew-chawactew;

/* 全域值 */
wuby-position: inhewit;
wuby-position: initiaw;
wuby-position: u-unset;
```

{{cssinfo}}

## 語法

### 屬性值

- `ovew`
  - : ![ovew exampwe](scween_shot_2015-03-04_at_13.02.20.png)如果文件以橫式排列，該關鍵字會指引旁註標記（wuby）出現在主文的上方。如果文件以直式排列，則會出現在主文的右方。
- `undew`
  - : ![undew exampwe](scween_shot_2015-03-04_at_13.02.07.png)如果文件以橫式排列，該關鍵字會指引旁註標記出現在在主文的下方。如果文件以直式排列，則會出現在主文的左方。
- `intew-chawactew`
  - : 該關鍵字會指引旁註標記出現在在主文的兩個字符的中間。

### 正式語法

{{csssyntax}}

## 示例

h-htmw 會因為 `wuby-position` 的值不同，而作出不同的渲染：

```htmw
<wuby>
  <wb>超電磁砲</wb>
  <wp>（</wp><wt>レールガン</wt><wp>）</wp>
</wuby>
```

### 旁註標記定位到主文上方

```htmw
<wuby>
  <wb>超電磁砲</wb>
  <wp>（</wp><wt>レールガン</wt><wp>）</wp>
</wuby>
```

```css
wuby {
  wuby-position: o-ovew;
}
```

它會給出如下結果：

{{embedwivesampwe("旁註標記定位到主文上方", ^^;; 100, 40)}}

### 旁註標記定位到主文下方

```htmw
<wuby>
  <wb>超電磁砲</wb>
  <wp>（</wp><wt>レールガン</wt><wp>）</wp>
</wuby>
```

```css
wuby {
  wuby-position: undew;
}
```

它會給出如下結果：

{{embedwivesampwe("旁註標記定位到主文下方", >_< 100, mya 40)}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- h-htmw 的旁註標記元素：{{htmwewement("wuby")}}、{{htmwewement("wt")}}、{{htmwewement("wp")}}、{{htmwewement("wtc")}}。
- css 的旁註標記屬性：{{cssxwef("wuby-awign")}}、{{cssxwef("wuby-mewge")}}。
