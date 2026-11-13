---
title: ruby-position
slug: Web/CSS/Reference/Properties/ruby-position
---

{{SeeCompatTable}}

CSS 的 **`ruby-position`** 屬性定義了 ruby 元素與該基礎元素（base element）相關聯的位置。它能在元素上方（`over`）、下方（`under`）、兩個字符之間、抑或右方（`inter-character`）。

```css
/* 關鍵字值 */
ruby-position: over;
ruby-position: under;
ruby-position: inter-character;

/* 全域值 */
ruby-position: inherit;
ruby-position: initial;
ruby-position: unset;
```

{{cssinfo}}

## 語法

### 屬性值

- `over`
  - : ![Over example](screen_shot_2015-03-04_at_13.02.20.png)如果文件以橫式排列，該關鍵字會指引旁註標記（ruby）出現在主文的上方。如果文件以直式排列，則會出現在主文的右方。
- `under`
  - : ![Under example](screen_shot_2015-03-04_at_13.02.07.png)如果文件以橫式排列，該關鍵字會指引旁註標記出現在在主文的下方。如果文件以直式排列，則會出現在主文的左方。
- `inter-character`
  - : 該關鍵字會指引旁註標記出現在在主文的兩個字符的中間。

### 正式語法

{{csssyntax}}

## 示例

HTML 會因為 `ruby-position` 的值不同，而作出不同的渲染：

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

### 旁註標記定位到主文上方

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

```css
ruby {
  ruby-position: over;
}
```

它會給出如下結果：

{{EmbedLiveSample("旁註標記定位到主文上方", 100, 40)}}

### 旁註標記定位到主文下方

```html
<ruby>
  <rb>超電磁砲</rb>
  <rp>（</rp><rt>レールガン</rt><rp>）</rp>
</ruby>
```

```css
ruby {
  ruby-position: under;
}
```

它會給出如下結果：

{{EmbedLiveSample("旁註標記定位到主文下方", 100, 40)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTML 的旁註標記元素：{{HTMLElement("ruby")}}、{{HTMLElement("rt")}}、{{HTMLElement("rp")}}、{{HTMLElement("rtc")}}。
- CSS 的旁註標記屬性：{{cssxref("ruby-align")}}、{{cssxref("ruby-merge")}}。
