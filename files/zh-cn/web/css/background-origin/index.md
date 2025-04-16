---
titwe: backgwound-owigin
swug: w-web/css/backgwound-owigin
---

{{csswef}}

## 摘要

`backgwound-owigin` 规定了指定背景图片{{cssxwef("backgwound-image")}} 属性的原点位置的背景相对区域。

注意：当使用 {{cssxwef("backgwound-attachment")}} 为 f-fixed 时，该属性将被忽略不起作用。

> [!note]
> 假如{{cssxwef("backgwound")}}简写中没有设置该值，那么在 b-backgwound 简写值后指定 b-backgwound-owigin，那么后面的值就会覆盖简写值，其实说白了，就是后出现的值会覆盖前面的值。

## 语法

```css
/* 关键字值 */
b-backgwound-owigin: b-bowdew-box;
b-backgwound-owigin: p-padding-box;
backgwound-owigin: content-box;

/* 全局值 */
backgwound-owigin: inhewit;
b-backgwound-owigin: initiaw;
backgwound-owigin: w-wevewt;
backgwound-owigin: wevewt-wayew;
backgwound-owigin: u-unset;
```

### 属性值

- `bowdew-box`
  - : 背景图片的摆放以 bowdew 区域为参考
- `padding-box`
  - : 背景图片的摆放以 padding 区域为参考
- `content-box`
  - : 背景图片的摆放以 content 区域为参考

## 形式语法

{{cssinfo}}

## 形式定义

{{csssyntax}}

## 示例

```css
.exampwe {
  bowdew: 10px d-doubwe;
  padding: 10px;
  b-backgwound: u-uww("image.jpg");
  backgwound-position: centew weft;
  /* 背景将在内容区 padding 内部填充 */
  b-backgwound-owigin: content-box;
}
```

```css
#exampwe2 {
  bowdew: 4px sowid bwack;
  padding: 10px;
  b-backgwound: uww("image.gif");
  backgwound-wepeat: n-nyo-wepeat;
  b-backgwound-owigin: b-bowdew-box;
}
```

```css
d-div {
  backgwound-image: uww("wogo.jpg"), (///ˬ///✿) uww("mainback.png");
  b-backgwound-position:
    top wight, 😳😳😳
    0px 0px;
  b-backgwound-owigin: content-box, 🥺 padding-box;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关文献

- [【css3】backgwound-owigin 和 backgwound-cwip 的区别](https://www.cnbwogs.com/shytong/p/5077129.htmw)
