---
title: Address bar button
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
---

{{AddonSidebar}}

주소줄에 추가되는 버튼으로 사용자가 확장 프로그램과 상호작용하는 일명 [페이지 액션](/ko/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) 을 말한다.

![](address_bar_button.png)

## 페이지 액션과 브라우저 액션

주소줄 버튼(또는 페이지 액션)은 툴바 버튼(또는 브라우저 액션)과 아주 비슷하다.

차이점은:

- 위치:

  - 페이지 액션은 브라우저의 주소줄에 표시된다.
  - 브라우저 액션은 주소줄 밖 브라우저의 툴바에 표시된다.

- 보임:

  - 페이지 액션은 평소에는 보통 숨겨지고(show_matches와 hide_matches [매니페스트 항목](/en-US/Add-ons/WebExtensions/manifest.json/page_action)으로 바꿀 수 있다), 해당 탭에 보이거나 숨길 때는 [`pageAction.show()`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/show)와 [`pageAction.hide()`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/hide) 를 호출한다.
  - 브라우저 액션은 항상 보인다.

하고자 하는 동작이 현재 페이지에 대한 것이면 페이지 액션을 사용하고, 전체 또는 여러 페이지가 대상이라면 브라우저 액션을 사용한다. 예를 들어:

| 유형          | Bookmarks action   | Content action     | Tabs operation     |
| ------------- | ------------------ | ------------------ | ------------------ |
| 페이지 액션   | Bookmark this page | Reddit enhancement | Send tab           |
| 브라우저 액션 | Show all bookmarks | Enable ad-blocking | Sync all open tabs |

## 페이지 액션 기술하기

페이지 액션의 속성은 manifest.json의 [`page_action`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) 항목에서 정의한다:

```json
"page_action": {
  "browser_style": true,
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

꼭 있어야 하는 항목은 `default_icon`이다.

페이지 액션을 기술하는 길은 두 가지다: [팝업](/en-US/Add-ons/WebExtensions/Popups)이 있는가. 없는가. 팝업이 없으면, 사용자 클릭은 [`pageAction.onClicked`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked)을 청취하는 확장 프로그램에 이벤트를 전달된다:

```js
browser.pageAction.onClicked.addListener(handleClick);
```

팝업이 있으면, 클릭 이벤트는 없다: 대신, 팝업창이 열린다. 사용자는 팝업으로 일을 하고, 팝업창 바깥을 클릭하면 자동으로 닫힌다. [팝업](/en-US/Add-ons/WebExtensions/Popups) 글에 팝업을 만들고 관리하는 보다 자세한 내용이 있다.

주목! 확장 프로그램은 페이지 액션을 하나만 가질 수 있다.

페이지 액션의 속성은 [`pageAction`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/pageAction) API로 프로그램적으로 바꿀 수 있다.

## 아이콘

페이지 액션에서 어떻게 아이콘을 만들고 사용하는지에 대한 자세한 내용은 [Photon Design System](https://design.firefox.com/photon/index.html) 문서에서 [Iconography](https://design.firefox.com/photon/visuals/iconography.html)을 보라.

## 예제

GitHub [webextensions-examples](https://github.com/mdn/webextensions-examples) 저장소에 팝업없는 페이지 액션 예제 [chill-out](https://github.com/mdn/webextensions-examples/tree/master/chill-out)가 있다.
