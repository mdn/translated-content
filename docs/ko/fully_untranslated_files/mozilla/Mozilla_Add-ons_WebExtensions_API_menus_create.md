---
title: menus.create()
slug: Mozilla/Add-ons/WebExtensions/API/menus/create
---

{{AddonSidebar()}}

주어진 객체대로 새 메뉴 항목을 만든다.

이 함수는 다른 비공기 함수들과 달리 promise가 아니라 새 항목의 ID를 반환한다. 성공과 실패에 대한 처리는 필요하면 콜백으로 한다.

다른 브라우저와의 호환성을 위해, `menus` 이름공간 뿐 아니라 `contextMenus` 이름공간으로도 이 메소드를 사용할 수 있다. 하지만 `contextMenus`로는 툴 메뉴 항목(`contexts: ["tools_menu"]`)은 만들 수 없다.

## 문법

```js
browser.menus.create(
  createProperties, // object
  function() {...}  // optional function
)
```

### 매개변수

- `createProperties`

  - : `object`. 새 메뉴 항목의 속성들

    - `checked` {{optional_inline}}
      - : `boolean`. checkbox나 radio 항목의 초기값: 선택은 `true`, 선택이 아니면 `false`. radio 항목이라면 그룹 중에서 하나만 선택된 것으로 할 수 있다.
    - `command` {{optional_inline}}</dt>
      - : `string`. 클릭 했을 때 수행할 동작을 기술한다. 가능한 값은:<
        - `"_execute_browser_action"`: 확장의 브라우저 액션을 클릭한 것처럼 한다. 팝업이 있으면 팝업이 열린다.
        - `"_execute_page_action"`: 확장의 페이지 액션을 클릭한 것처럼 한다. 팝업이 있으면 팝업이 열린다.
        - `"_execute_sidebar_action"`: 확장의 사이드바를 연다.
        - 항목을 클릭하면 여전히 {{WebExtAPIRef("menus.onClicked")}} 이벤트도 발생한다. 어느게 먼저 인지는 보장되지 않지만 `onClicked`이 발생하기 전에 명령이 실행될 것이다.
    - `contexts` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ContextType')}}`의 `배열`. 메뉴 항목이 표시할 콘텍스트의 배열. 생략되면:
        - 상위 항목에 콘텍스트가 설정되었으면 그걸 물려받는다.
        - 아니면, 항목은 ["page"]로 설정된다.
    - `documentUrlPatterns` {{optional_inline}}
      - : `string`의 `배열`. 메뉴 항목의 표시를 URL이 주어진 [match patterns](/ko/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)과 일치하는 문서로 제한한다. 프레임에도 적용된다.
    - `enabled` {{optional_inline}}
      - : `boolean`. 메뉴 항목이 사용 가능한지 아닌지를 지정한다. 기본값은 `true`.
    - `icons` {{optional_inline}}

      - : `object`. One or more custom icons to display next to the item. Custom icons can only be set for items appearing in submenus. This property is an object with one property for each supplied icon: the property's name should include the icon's size in pixels, and path is relative to the icon from the extension's root directory. The browser tries to choose a 16x16 pixel icon for a normal display or a 32x32 pixel icon for a high-density display. To avoid any scaling, you can specify icons like this:

        ```json
        "icons": {
                "16": "path/to/geo-16.png",
                "32": "path/to/geo-32.png"
              }
        ```

        Alternatively, you can specify a single SVG icon, and it will be scaled appropriately:

        ```json
        "icons": {
                "16": "path/to/geo.svg"
              }
        ```

        > **Note:** The top-level menu item uses the [icons](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) specified in the manifest rather than what is specified with this key.

    - `id` {{optional_inline}}1
      - : `string`. The unique ID to assign to this item. Is mandatory for non-persistent [background (event) pages](/ko/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) in Manifest V2 and in Manifest V3. Cannot be the same as another ID for this extension.
    - `onclick` {{optional_inline}}
      - : `function`. A function that will be called when the menu item is clicked. Event pages cannot use this: instead, they should register a listener for {{WebExtAPIRef('menus.onClicked')}}.
    - `parentId` {{optional_inline}}
      - : `integer` or `string`. The ID of a parent menu item; this makes the item a child of a previously added item. Note: If you have created more than one menu item, then the items will be placed in a submenu. The submenu's parent will be labeled with the name of the extension.
    - `targetUrlPatterns` {{optional_inline}}
      - : `array` of `string`. Similar to `documentUrlPatterns`, but lets you filter based on the `href` of anchor tags and the `src` attribute of img/audio/video tags. This parameter supports any URL scheme, even those that are usually not allowed in a match pattern.
    - `title` {{optional_inline}}

      - : `string`. The text to be displayed in the item. Mandatory unless `type` is "separator".

        You can use "`%s`" in the string. If you do this in a menu item, and some text is selected in the page when the menu is shown, then the selected text will be interpolated into the title. For example, if `title` is "Translate '%s' to Pig Latin" and the user selects the word "cool", then activates the menu, then the menu item's title will be: "Translate 'cool' to Pig Latin".

        If the title contains an ampersand "&" then the next character will be used as an access key for the item, and the ampersand will not be displayed. Exceptions to this are:

        - If the next character is also an ampersand: then a single ampersand will be displayed and no access key will be set. In effect, "&&" is used to display a single ampersand.
        - If the next characters are the interpolation directive "%s": then the ampersand will not be displayed and no access key will be set.
        - If the ampersand is the last character in the title: then the ampersand will not be displayed and no access key will be set.

        Only the first ampersand will be used to set an access key: subsequent ampersands will not be displayed but will not set keys. So "\&A and \&B" will be shown as "A and B" and set "A" as the access key.

        In some localized versions of Firefox (Japanese and Chinese), the access key is surrounded by parentheses and appended to the menu label, _unless_ the menu title itself already ends with the access key (`"toolkit(&K)"` for example). For more details, see [Firefox bug 1647373](https://bugzil.la/1647373).

    - `type` {{optional_inline}}
      - : `{{WebExtAPIRef('menus.ItemType')}}`. The type of menu item: "normal", "checkbox", "radio", "separator". Defaults to "normal".
    - `viewTypes` {{optional_inline}}
      - : `{{WebExtAPIRef('extension.ViewType')}}`. List of view types where the menu item will be shown. Defaults to any view, including those without a `viewType`.
    - `visible` {{optional_inline}}
      - : `boolean`. Whether the item is shown in the menu. Defaults to `true`.

- `callback` {{optional_inline}}
  - : `function`. Called when the item has been created. If there were any problems creating the item, details will be available in {{WebExtAPIRef('runtime.lastError')}}.

### Return value

`integer` or `string`. The ID of the newly created item.

## 브라우저 호환성

{{Compat}}

## 예제

이 예제는 페이지에 선택된 텍스트가 있을 때 표시되는 콘텍스트 메뉴 항목을 만든다. 동작은 선택된 텍스트를 콘솔에 로그로 남기는 것이다:

```js
browser.menus.create({
  id: "log-selection",
  title: "Log '%s' to the console",
  contexts: ["selection"],
});

browser.menus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "log-selection") {
    console.log(info.selectionText);
  }
});
```

이 예제는 두 개의 radio 항목을 추가한다. 선택해서 테두리의 색을 녹색이나 청색으로 할 수 있다. 이 예제는 [activeTab 권한](/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission)이 필요하다.

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("error creating item:" + browser.runtime.lastError);
  } else {
    console.log("item created successfully");
  }
}

browser.menus.create(
  {
    id: "radio-green",
    type: "radio",
    title: "Make it green",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.menus.create(
  {
    id: "radio-blue",
    type: "radio",
    title: "Make it blue",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

var makeItBlue = 'document.body.style.border = "5px solid blue"';
var makeItGreen = 'document.body.style.border = "5px solid green"';

browser.menus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "radio-blue") {
    browser.tabs.executeScript(tab.id, {
      code: makeItBlue,
    });
  } else if (info.menuItemId == "radio-green") {
    browser.tabs.executeScript(tab.id, {
      code: makeItGreen,
    });
  }
});
```

{{WebExtExamples}}

> **참고:** **Acknowledgements**This API is based on Chromium's [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus#method-create) API. This documentation is derived from [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) in the Chromium code.

```
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
