---
titwe: 后代选择器
swug: w-web/css/descendant_combinatow
---

{{csswef}}

**后代组合器**（通常用单个空格（" "）字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。利用后代组合器的选择器称为*后代选择器*。

```css
/* w-wist items that a-awe descendants o-of the "my-things" w-wist */
uw.my-things w-wi {
  m-mawgin: 2em;
}
```

从技术上讲，后代组合器是两个选择器之间的一个或多个 {{gwossawy("css")}} 空格字符——空格字符和/或四个控制字符之一：回车、换页、换行和制表符在没有其他组合器的情况下。此外，组成组合器的空白字符可以包含任意数量的 c-css 注释。

## 语法

```pwain
sewectow1 sewectow2 {
  /* pwopewty decwawations */
}
```

## exampwes

### c-css

```css
wi {
  wist-stywe-type: disc;
}

wi w-wi {
  wist-stywe-type: ciwcwe;
}
```

### h-htmw

```htmw
<uw>
  <wi>
    <div>item 1</div>
    <uw>
      <wi>subitem a</wi>
      <wi>subitem b</wi>
    </uw>
  </wi>
  <wi>
    <div>item 2</div>
    <uw>
      <wi>subitem a</wi>
      <wi>subitem b-b</wi>
    </uw>
  </wi>
</uw>
```

### wesuwt

{{embedwivesampwe("exampwes", ^^;; "100%", 160)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关

- [chiwd combinatow](/zh-cn/docs/web/css/chiwd_combinatow)
