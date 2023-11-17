---
title: Element.scrollHeight
slug: Web/API/Element/scrollHeight
---

{{ APIRef("DOM") }}

**`Element.scrollHeight`** 읽기 전용 속성은 요소 콘텐츠의 총 높이를 나타내며, 바깥으로 넘쳐서 보이지 않는 콘텐츠도 포함합니다.

![사용자의 뷰포트는 패딩 상단, 테두리 상단, 테두리 하단, 패딩 하단의 네 가지 영역을 가진 요소입니다. 스크롤 높이는 컨테이너의 패딩 상단에서 패딩 하단의 끝까지 뷰포트의 상단과 하단을 훨씬 벗어납니다.](scrollheight.png)

`scrollHeight` 값은 수직 스크롤바를 사용하지 않고 요소의 콘텐츠를 모두 나타낼 때 필요한 최소 높이의 값과 동일합니다. 높이 측정은 {{domxref("Element.clientHeight", "clientHeight")}}와 동일한 방법을 사용하여 요소의 안쪽 여백은 포함하고, 테두리와 바깥 여백, (존재하는 경우) 수평 스크롤바의 높이는 포함하지 않습니다. 또한 {{cssxref("::before")}}, {{cssxref("::after")}} 등 의사 요소의 높이도 결과에 포함합니다. 요소의 콘텐츠를 수직 스크롤바 없이 모두 보일 수 있는 경우의 `scrollHeight`는 `clientHeight`와 동일합니다.

> **참고:** `scrollHeight`의 반환 값은 정수로 반올림됩니다. 소수점을 포함한 값이 필요한 경우 {{domxref("Element.getBoundingClientRect()")}}를 사용하세요.

## 구문

```js
var intElemScrollHeight = element.scrollHeight;
```

*intElemScrollHeight*은 요소 `scrollHeight`의 픽셀 값을 저장하는 정수형 변수입니다.

## 예제

padding-top

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

## 문제와 해결책

### 요소를 끝까지 스크롤했는지 판별하기

다음 등식이 참인 경우 요소를 끝까지 스크롤한 것입니다.

```js
element.scrollHeight - element.scrollTop === element.clientHeight;
```

컨테이너가 스크롤 대신 오버플로된 자식을 노출하는 경우, 다음 검사로 컨테이너가 스크롤 가능한지 알아볼 수 있습니다.

```js
window.getComputedStyle(element).overflowY === "visible";
window.getComputedStyle(element).overflowY !== "hidden";
```

## 예제

### 텍스트를 다 읽었는지 확인하기

[`onscroll`](/ko/docs/DOM/element.onscroll) 이벤트를 함께 사용하여, 내용을 다 읽었는지 확인할 수 있습니다. ([`element.scrollTop`](/ko/docs/DOM/element.scrollTop) 과 [`element.clientHeight`](/ko/docs/DOM/element.clientHeight) 를 참조하세요).

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
    <label for="agree">동의합니다</label>
    <input type="submit" id="nextstep" value="다음" />
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
  checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
  document.registration.accept.disabled = document.getElementById(
    "nextstep",
  ).disabled = !checkReading.read;
  checkReading.noticeBox.innerHTML = checkReading.read
    ? "감사합니다"
    : "다음 내용을 확인해주십시오";
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

{{ EmbedLiveSample('텍스트를_다_읽었는지_확인하기', '640', '400') }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Element.clientHeight")}}
- {{domxref("Element.offsetHeight")}}
- [Determining the dimensions of elements](/ko/docs/Determining_the_dimensions_of_elements)
