---
title: menus.getTargetElement()
slug: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
---

{{AddonSidebar}}

주어진 `targetElementId`에 해당하는 요소를 돌려준다.

이 함수는 오직 클릭된 요소가 있는 문서에서만 동작한다. so everywhere but in the background page.

## 문법

```js
let elem = browser.menus.getTargetElement(targetElementId);
```

### 파라메터

- `targetElementId`
  - : `{{WebExtAPIRef("menus.onClicked")}}` 핸들러 또는 `{{WebExtAPIRef("menus.onShown")}}` 이벤트에 전달된 `{{WebExtAPIRef("menus.OnClickData")}}` 객체의 속성

### 반환값

`targetElementId`로 참조되는 요소를 반환한다. `targetElementId`가 유효하지 않으면 `null`를 반환한다.

## 예제

아래 예제는 인수로 전달된 `info.targetElementId` 값으로 요소를 구하고, 그것을 지운다. 하지만 `getTargetElement`는 요소가 있는 문서에서만 동작하므로 문서가 있는 탭에 스크립트를 주입하는 형태로 처리하고 있다.

```js
browser.menus.create({
  title: "Remove element",
  documentUrlPatterns: ["*://*/*"],
  contexts: [
    "audio",
    "editable",
    "frame",
    "image",
    "link",
    "page",
    "password",
    "video",
  ],
  onclick(info, tab) {
    browser.tabs.executeScript(tab.id, {
      frameId: info.frameId,
      code: `browser.menus.getTargetElement(${info.targetElementId}).remove();`,
    });
  },
});
```

{{WebExtExamples}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{WebExtAPIRef("menus.create")}}
- {{WebExtAPIRef("menus.OnClickData")}}
