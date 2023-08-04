---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
---

{{APIRef("DOM")}}

**`Element.scrollHeight`** 是衡量元素包含因為 overflow 而沒顯示在螢幕上的內容高度的唯讀屬性. `scrollHeight` 的值相等於元素要求 `clientHeight` 在視域中沒有使用滾動條顯示所有內容的最小高度值 . 這當中只包含 padding, 並不包含 margin.

> **備註：** 這個屬性會以四捨五入進位取整數. 如果要使用非整數值, 使用 {{ domxref("Element.getBoundingClientRect()") }}.

## 表達式

```js
var intElemScrollHeight =
  document.getElementById(id_attribute_value).scrollHeight;
```

_intElemScrollHeight_ 是個儲存了元素 scrollHeight 的正整數變數. scrollHeight 是唯讀的屬性.

## 範例

padding-top

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

![Image:scrollHeight.png](scrollheight.png)

## 問題與解決方法

### 了解元素是否被滾輪完全滾過

下面的等式代表`如果元素被完全滾過將會`回傳 `true`, 否則回傳 `false`.

```js
element.scrollHeight - element.scrollTop === element.clientHeight;
```

## scrollHeight 範例

藉由 [`onscroll`](/zh-TW/docs/DOM/element.onscroll) 事件, 這個等式對於決定使用者是否已經讀完文字內容是很有用 (參見 [`element.scrollTop`](/zh-TW/docs/DOM/element.scrollTop), [`element.clientHeight`](/zh-TW/docs/DOM/element.clientHeight) 屬性). 範例:

### HTML

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
Fusce in arcu arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
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
    <input type="checkbox" name="accept" id="agree" />
    <label for="agree">I agree</label>
    <input type="submit" id="nextstep" value="Next" />
  </p>
</form>
```

### CSS

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

### JavaScript

```js
function checkReading() {
  if (checkReading.read) {
    return;
  }
  checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
  document.registration.accept.disabled = document.getElementById(
    "nextstep",
  ).disabled = !checkReading.read;
  checkReading.noticeBox.innerHTML = checkReading.read
    ? "Thank you."
    : "Please, scroll and read the following text.";
}

onload = function () {
  var oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
};
```

{{ EmbedLiveSample('scrollHeight 範例', '640', '400') }}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [MSDN: Measuring Element Dimension and Location with CSSOM in Windows Internet Explorer 9](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.offsetHeight")}}
- [Determining the dimensions of elements](/zh-TW/docs/Determining_the_dimensions_of_elements)
