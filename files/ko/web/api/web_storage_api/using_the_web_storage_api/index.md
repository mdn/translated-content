---
title: Web Storage API 사용하기
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

Web Storage API는 브라우저에서 쿠키를 사용하는 것보다 훨씬 직관적으로 key/value 데이터를 안전하게 저장할 수 있는 메커니즘을 제공합니다.

이 글은 본 기술을 어떻게 사용하는지 설명합니다.

## 기본 컨셉

Storage 객체는 단순한 key-value 저장소이며, 이는 객체와 비슷합니다. 하지만 이 데이터들은 페이지 로딩에도 온전하게 유지됩니다. key와 그 value는 항상 문자열입니다. (만약 정수로 키를 사용할 경우 이는 자동으로 string으로 변경됩니다, 자바스크립트 객체의 동작방식을 생각해보세요) 객체를 사용하듯이 쉽게 값에 접근할 수 있으며, 이 때 {{domxref("Storage.getItem()")}}과 {{domxref("Storage.setItem()")}} 메서드를 사용할 수 있습니다. 아래 세 줄은 (동일한) colorSetting 엔트리에 값을 설정하는 방법입니다.

<pre style="white-space: pre;">localStorage.colorSetting = '#a4509b';
localStorage['colorSetting'] = '#a4509b';
localStorage.setItem('colorSetting', '#a4509b');
</pre>

> **참고:** 일반 객체를 key-value 저장소로 사용할 때 [pitfalls](http://www.2ality.com/2012/01/objects-as-maps.html)과 관련된 사항을 막기 위해 Web Storage API(`setItem`, `getItem`, `removeItem`, `key`, `length`)를 사용하는 걸 권장합니다.

Web Storage는 두 메커니즘을 가지고 있습니다.

- `sessionStorage` 는 페이지의 세션이 유지되는 동안 사용할 수 있는 각 origin별로 별도의 스토리지를 관리합니다. (페이지 리로딩 및 복원을 포함한, 브라우저가 열려있는 한 최대한 긴 시간 동안)
- `localStorage` 도 같은 일을 하지만, 브라우저가 닫히거나 다시 열리더라도 유지합니다.

이 메커니즘들은 {{domxref("Window.sessionStorage")}}와 {{domxref("Window.localStorage")}} 속성(좀 더 정확히 말하자면, 지원하는 브라우저에서 `Window` 객체는 `localStorage` 및 `sessionStorage` 속성 사용이 중단되는 `WindowLocalStorage`과 `WindowSessionStorage`로 구현됩니다)으로 사용 가능합니다. 이 중 하나를 호출하면 데이터를 설정, 검색 및 제거할 수 있는 {{domxref("Storage")}} 객체의 인스턴스가 생성됩니다. 각 Storage 객체는 각 origin 별 `sessionStorage` 나 `localStorage`로 사용됩니다. 동작도 제각기 동작합니다.

예를 들면, 문서에서 `localStorage`를 호출하면 {{domxref("Storage")}} 객체를 반환합니다. 문서에서 `sessionStorage`를 호출하면 다른 {{domxref("Storage")}} 객체를 반환합니다. 둘 다 같은 방법으로 조작할 수 있지만, 서로 다릅니다.

## localStorage 기능 지원 감지

localStorage를 사용하려면 먼저 현재 브라우징 세션에서 지원되고 사용 가능한지 확인해야합니다.

### 사용 가능 검사

localStorage를 지원하는 브라우저는 windows 객체에 localStorage라는 property가 존재 합니다. 그러나 여러 가지 이유로 인해 예외가 발생할 수 있습니다. 존재한다 해도 다양한 브라우저가 localStorage를 비활성화하는 설정을 제공하기 때문에 localStorage가 실제로 사용 가능하다는 보장은 없습니다. 따라서 브라우저가 localStorage를 지원한다고 해도 스크립트에서 사용 하지 못 할 수도 있습니다. 예를 들어 사파리 브라우저의 사생활 보호 모드에서 할당량이 0 인 빈 localStorage 개체를 제공하므로 효과적으로 사용할 수 없게 만듭니다. 이때 QuotaExceededError를 얻을 수도 있습니다. 이는 사용가능한 저장공간을 모두 소모 했다는 의미로, localStorage를 사용할 수 없음을 뜻합니다. 이러한 시나리오를 고려하여 사용가능 여부를 검사하여야 합니다.

다음은 localStorage가 지원되고 사용 가능한지 여부를 감지하는 함수입니다.

```js
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // Firefox를 제외한 모든 브라우저
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // 코드가 존재하지 않을 수도 있기 떄문에 이름 필드도 확인합니다.
        // Firefox를 제외한 모든 브라우저
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
      storage &&
      storage.length !== 0
    );
  }
}
```

위 함수를 다음과 같이 사용할 수 있습니다.

```js
if (storageAvailable("localStorage")) {
  // 야호! 우리는 localStorage를 사용할 수 있습니다.
} else {
  // 슬픈 소식, localStorage를 사용할 수 없습니다.
}
```

`storageAvailable('sessionStorage')`를 호출하여 sessionStorage 사용 가능 여부도 확인할 수 있습니다.

여기서 [로컬 스토리지 기능이 존재하는지 확인하는 방법에 대한 기록](https://gist.github.com/paulirish/5558557)을 볼 수 있습니다.

## 예제

To illustrate some typical web storage usage, we have created a simple example, imaginatively called **Web Storage Demo**. The [landing page](https://mdn.github.io/dom-examples/web-storage/) provides controls that can be used to customize the color, font, and decorative image:

![](landing.png)다른 색상을 선택하면, 페이지에 바로 적용됩니다. 또한 선택한 값을 `localStorage`에 저장했다면, 페이지를 나갔다가 나중에 다시 들어왔을 떄 이전에 저장한 값을 기억하고 있습니다.

We have also provided an [event output page](https://mdn.github.io/dom-examples/web-storage/event.html) — if you load this page in another tab, then make changes to your choices in the landing page, you'll see the updated storage information outputted as a {{domxref("StorageEvent")}} is fired.

![](event-output.png)

> **참고:** As well as viewing the example pages live using the above links, you can also [check out the source code](https://github.com/mdn/dom-examples/tree/master/web-storage).

### Testing whether your storage has been populated

To start with on [main.js](https://github.com/mdn/dom-examples/blob/master/web-storage/main.js), we will test whether the storage object has already been populated (i.e., the page was previously accessed):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

The {{domxref("Storage.getItem()")}} method is used to get a data item from storage; in this case, we are testing to see whether the `bgcolor` item exists; if not, we run `populateStorage()` to add the existing customization values to the storage. If there are already values there, we run `setStyles()` to update the page styling with the stored values.

**Note**: You could also use {{domxref("Storage.length")}} to test whether the storage object is empty or not.

### Getting values from storage

As noted above, values can be retrieved from storage using {{domxref("Storage.getItem()")}}. This takes the key of the data item as an argument, and returns the data value. For example:

```js
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

Here, the first three lines grab the values from local storage. Next, we set the values displayed in the form elements to those values, so that they keep in sync when you reload the page. Finally, we update the styles/decorative image on the page, so your customization options come up again on reload.

### Setting values in storage

{{domxref("Storage.setItem()")}} is used both to create new data items, and (if the data item already exists) update existing values. This takes two arguments — the key of the data item to create/modify, and the value to store in it.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

The `populateStorage()` function sets three items in local storage — the background color, font, and image path. It then runs the `setStyles()` function to update the page styles, etc.

We've also included an `onchange` handler on each form element so that the data and styling are updated whenever a form value is changed:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

### Responding to storage changes with the StorageEvent

The {{domxref("StorageEvent")}} is fired whenever a change is made to the {{domxref("Storage")}} object (note that this event is not fired for sessionStorage changes). This won't work on the same page that is making the changes — it is really a way for other pages on the domain using the storage to sync any changes that are made. Pages on other domains can't access the same storage objects.

On the events page (see [events.js](https://github.com/mdn/dom-examples/blob/master/web-storage/event.js)) the only JavaScript is as follows:

```js
window.addEventListener("storage", function (e) {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = JSON.stringify(
    e.storageArea,
  );
});
```

Here we add an event listener to the `window` object that fires when the {{domxref("Storage")}} object associated with the current origin is changed. As you can see above, the event object associated with this event has a number of properties containing useful information — the key of the data that changed, the old value before the change, the new value after that change, the URL of the document that changed the storage, and the storage object itself (which we've stringified so you can see its content).

### 데이터 제거하기

웹 스토리지에서는 데이터를 삭제하기 위한 두 가지 간단한 메소드를 제공합니다. 데모에서 사용하지는 않았지만, 간단하게 프로젝트에 추가할 수 있습니다:

- {{domxref("Storage.removeItem()")}}는 — 삭제하고 싶은 데이터의 키 — 한 개의 인자를 받습니다. 그리고 해당 도메인의 저장소 객체에서 데이터를 제거합니다.
- {{domxref("Storage.clear()")}}는 아무 인자도 받지 않습니다. 그리고 해당 도메인의 저장소 객체 전체를 비워버립니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

All browsers have varying capacity levels for both localStorage and sessionStorage. Here is a [detailed rundown of all the storage capacities for various browsers](http://dev-test.nemikor.com/web-storage/support-test/).

## See also

- [Web Storage API landing page](/ko/docs/Web/API/Web_Storage_API)
