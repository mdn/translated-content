---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
---

{{APIRef("DOM")}}

**`Element.scrollHeight`** 只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。

![](scrollheight.png)

`scrollHeight` 的值等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。高度的度量方式与 {{domxref("Element.clientHeight", "clientHeight")}} 相同：包括元素的内边距，但不包括元素的边框、外边距以及水平滚动条（如果存在）。它也包括 {{cssxref("::before")}} 和 {{cssxref("::after")}} 这样的伪元素的高度。如果元素的内容不需要垂直滚动条就可以容纳，则其 `scrollHeight` 等于 {{domxref("Element.clientHeight", "clientHeight")}}。

> **备注：** 属性将会对值取整。如果需要小数值，请使用 {{domxref("Element.getBoundingClientRect()")}}。

## 值

与元素的滚动高度像素值相对应的整数。

## 问题与解决方案

### 判断元素是否滚动到底

`scrollTop` 是一个非整数，而 `scrollHeight` 和 `clientHeight` 是四舍五入的，因此确定滚动区域是否滚动到底的唯一方法是查看滚动量是否足够接近某个阈值（在本例中为 `1`）：

```js
Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1;
```

以下内容*不*会一直有效，因为 `scrollTop` 可能包含小数：

```js
element.scrollHeight - Math.abs(element.scrollTop) === element.clientHeight;
```

### 判断元素是否能滚动

当容器不滚动但有溢出的子容器时，这些检查可以确定容器能否滚动：

```js
window.getComputedStyle(element).overflowY === "visible";
window.getComputedStyle(element).overflowY !== "hidden";
```

## 示例

### 判定用户是否阅读过文本

监听 {{domxref("GlobalEventHandlers/onscroll", "onscroll")}} 事件，这个等价事件可以用来判定用户是否阅读过文本。 (参见 {{domxref("element.scrollTop")}} 和 {{domxref("element.clientHeight")}} 属性)。

下面演示中的复选框已禁用，文本区域的内容滚动倒底部时，复选框才能被选中表示同意。

#### HTML

```html
<form name="registration">
  <p>
    <textarea id="rules">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at laoreet magna.
Aliquam erat volutpat. Praesent molestie, dolor ut eleifend aliquam, mi ligula ultrices sapien, quis cursus
neque dui nec risus. Duis tincidunt lobortis purus eu aliquet. Quisque in dignissim magna. Aenean ac lorem at
velit ultrices consequat. Nulla luctus nisi ut libero cursus ultrices. Pellentesque nec dignissim enim. Phasellus
ut quam lacus, sed ultricies diam. Vestibulum convallis rutrum dolor, sit amet egestas velit scelerisque id.
Proin non dignissim nisl. Sed mi odio, ullamcorper eget mattis id, malesuada vitae libero. Integer dolor lorem,
mattis sed dapibus a, faucibus id metus. Duis iaculis dictum pulvinar. In nisi nibh, dapibus ac blandit at, porta
at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
dictum ipsum aliquet erat eleifend sit amet sollicitudin felis tempus. Aliquam congue cursus venenatis. Maecenas
luctus pellentesque placerat. Mauris nisl odio, condimentum sed fringilla a, consectetur id ligula. Praesent sem
sem, aliquet non faucibus vitae, iaculis nec elit. Nullam volutpat, lectus et blandit bibendum, nulla lorem congue
turpis, ac pretium tortor sem ut nibh. Donec vel mi in ligula hendrerit sagittis. Donec faucibus viverra fermentum.
Fusce in arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
ligula. Vivamus vitae urna mauris, eget euismod nunc. Aenean semper gravida enim non feugiat. In hac habitasse
platea dictumst. Cras eleifend nisl volutpat ante condimentum convallis. Donec varius dolor malesuada erat
consequat congue. Donec eu lacus ut sapien venenatis tincidunt. Quisque sit amet tellus et enim bibendum varius et
a orci. Donec aliquet volutpat scelerisque. Proin et tortor dolor. Ut aliquet, dolor a mattis sodales, odio diam
pulvinar sem, egestas pretium magna eros vitae felis. Nam vitae magna lectus, et ornare elit. Morbi feugiat, ipsum
ac mattis congue, quam neque mollis tortor, nec mollis nisl dolor a tortor. Maecenas varius est sit amet elit
interdum quis placerat metus posuere. Duis malesuada justo a diam vestibulum vel aliquam nisi ornare. Integer
laoreet nisi a odio ornare non congue turpis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Cras vulputate libero sed arcu iaculis nec lobortis orci fermentum.
    </textarea>
  </p>
  <p>
    <input type="checkbox" id="agree" name="accept" />
    <label for="agree">I agree</label>
    <input type="submit" id="nextstep" value="Next" />
  </p>
</form>
```

#### CSS

```css
#notice {
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 5px;
  width: 600px;
  padding: 5px;
  border: 2px #7fdf55 solid;
}

#rules {
  width: 600px;
  height: 130px;
  padding: 5px;
  border: #2a9f00 solid 2px;
  border-radius: 5px;
}
```

#### JavaScript

```js
function checkReading() {
  if (checkReading.read) {
    return;
  }
  checkReading.read =
    this.scrollHeight - Math.round(this.scrollTop) === this.clientHeight;
  document.registration.accept.disabled = document.getElementById(
    "nextstep",
  ).disabled = !checkReading.read;
  checkReading.noticeBox.textContent = checkReading.read
    ? "Thank you."
    : "Please, scroll and read the following text.";
}

onload = () => {
  const oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
};
```

{{EmbedLiveSample('判定用户是否阅读过文本', '640', '400')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.clientHeight")}}
- {{domxref("HTMLElement.offsetHeight")}}
- [确定元素的尺寸](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
