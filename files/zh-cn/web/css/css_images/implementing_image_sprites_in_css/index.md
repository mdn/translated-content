---
title: 在 CSS 中实现图像合并
slug: Web/CSS/CSS_images/Implementing_image_sprites_in_CSS
---

{{CSSRef}}

CSS **图像合并**（**Image sprites**）技术，亦作 CSS 贴图定位、图像精灵（sprite，意为精灵），被运用于众多使用大量小图标的网页应用之上。它可取图像的一部分来使用，使得使用一个图像文件替代多个小文件成为可能。相较于一个小图标一个图像文件，单独一张图片所需的 HTTP 请求更少，对内存和带宽更加友好。

> **备注：** 备注：当使用 HTTP/2 时，使用多个小流量请求实际上可能更为带宽友好。

## 实现

若要为所有类名为 `toolbtn` 的元素附加上一张图片：

```css
.toolbtn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

为设置 `background-position` 以使每个按钮得到合并后图片中的正确部分，可以在 `background` 属性中的 {{cssxref("url()")}} 后添加 x, y 两个坐标值，或直接使用 {{cssxref("background-position")}} 属性。例如：

```css
#btn1 {
  background-position: -20px 0px;
}
#btn2 {
  background-position: -40px 0px;
}
```

这会将 ID 为 btn1 的元素的背景向左移 20px，ID 为 btn2 的元素的背景向左移 40px（假设这两个元素都带有 `toolbtn` 这个类且应用了上面 `background` 属性中定义的图片背景）

类似的，你也可以使用下面的代码添加悬停效果：

```css
#btn:hover {
  background-position: <pixels shifted right>px <pixels shifted down>px;
}
```

### 深入阅读

CSS Tricks 上的完整 Demo：<http://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/>
