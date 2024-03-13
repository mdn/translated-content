---
title: Storage
slug: Web/API/Storage
---

{{APIRef("Web Storage API")}}

[Web Storage API](/ko/docs/Web/API/Web_Storage_API)의 **`Storage`** 인터페이스는 특정 도메인을 위한 세션 저장소 또는 로컬 저장소의 접근 경로로서 데이터를 추가하고 수정하거나 삭제할 수 있습니다.

도메인의 세션 저장소를 수정해야 하면 {{domxref("Window.sessionStorage")}}에, 로컬 저장소를 수정해야 하면 {{domxref("Window.localStorage")}}에 접근하세요.

## 속성

- {{domxref("Storage.length")}} {{readonlyInline}}
  - : `Storage` 객체에 저장된 데이터 항목의 수를 반환합니다.

## 메서드

- {{domxref("Storage.key()")}}
  - : 주어진 숫자 `n`에 대하여 저장소의 `n`번째 항목 키를 반환합니다.
- {{domxref("Storage.getItem()")}}
  - : 주어진 키에 연결된 값을 반환합니다.
- {{domxref("Storage.setItem()")}}
  - : 키가 저장소에 존재하는 경우 값을 재설정합니다. 존재하지 않으면 키와 값을 저장소에 추가합니다.
- {{domxref("Storage.removeItem()")}}
  - : 주어진 키를 저장소에서 제거합니다.
- {{domxref("Storage.clear()")}}
  - : 저장소의 모든 키를 저장소에서 제거합니다.

## 예제

아래 코드에서는 `localStorage`에 접근해 `Storage` 객체를 접근합니다. 우선 `!localStorage.getItem('bgcolor')`를 사용해 데이터가 저장소에 존재하는지 알아냅니다. 데이터가 있으면 {{domxref("Storage.getItem()")}}으로 회수한 후 `setStyles()`로 페이지 스타일을 바꿉니다. 데이터가 없으면 `populateStorage()` 함수를 호출하고, 그 안에서는 {{domxref("Storage.setItem()")}}을 통해 데이터를 설정합니다. 그 후에는 동일하게 `setStyles()`를 사용합니다.

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);
}

function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> **참고:** 실제 작동 예제는 저희의 [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/)에서 볼 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Storage API 사용하기](/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
- {{domxref("Window.sessionStorage")}}
- {{domxref("CacheStorage")}}
