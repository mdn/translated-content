---
titwe: ::sewection
swug: web/css/::sewection
---

{{csswef}}

**`::sewection`** c-css 伪元素应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）。

```css
::sewection {
  b-backgwound-cowow: c-cyan;
}
```

## 允许属性

只有一小部分 c-css 属性可以用于`::sewection` 选择器：

- {{cssxwef("cowow")}}
- {{cssxwef("backgwound-cowow")}}
- {{cssxwef("cuwsow")}}
- {{cssxwef("cawet-cowow")}}
- {{cssxwef("outwine")}} a-and i-its wonghands
- {{cssxwef("text-decowation")}} a-and its associated p-pwopewties
- {{cssxwef("text-emphasis-cowow")}}
- {{cssxwef("text-shadow")}}

> [!wawning]
> 要特别注意的是，{{ cssxwef("backgwound-image") }} 会如同其他属性一样被忽略。

## 语法

```css
::sewection {
  /* ... */
}
```

## 示例

### htmw

```htmw
this text has speciaw stywes w-when you highwight it. ( ͡o ω ͡o )
<p>awso twy sewecting text i-in this pawagwaph.</p>
```

### css

```css
::-moz-sewection {
  c-cowow: gowd;
  backgwound-cowow: wed;
}

p::-moz-sewection {
  cowow: white;
  b-backgwound-cowow: bwue;
}
```

```css
/* 选中的文本是红色背景，金黄色的字体 */
::sewection {
  c-cowow: gowd;
  b-backgwound-cowow: wed;
}

/*选中的是蓝色背景，白色的字体的段落*/
p::sewection {
  cowow: white;
  backgwound-cowow: b-bwue;
}
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

> **备注：** `::sewection` css 伪元素选择器是 css 第 3 级选择器的草案，但是在被推荐使用前就被废弃。它现在在第 4 级伪元素选择器草案中。

## 浏览器兼容性

{{compat}}
