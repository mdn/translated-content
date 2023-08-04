---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"page_action": {
  "browser_style": true,
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

페이지 액션은 브라우저의 URL 바 안에 추가되는 아이콘이다.

필요하면 HTML, CSS, 그리고 자바스크립트를 사용하는 팝업을 띄울 수 있다.

팝업이 있으면, 아이콘을 클릭할 때 팝업이 열리고, 팝업 안의 자바스크립트가 사용자와의 상호작업을 처리할 수 있다. 팝업이 없으면, 아이콘을 클릭할 때 확장의 [background 스크립트](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_pages)에 click 이벤트가 전달된다.

[pageAction API](/en-US/Add-ons/WebExtensions/API/pageAction)을 사용하면 프로그램적으로 페이지 액션을 만들고 관리할 수 있다.

페이지 액션은 브라우저 액션과 비슷하다. 단지 브라우저 전체가 아니라 특정 웹페이지와만 연관된다는 점이 다르다. 액션의 대상 페이지가 분명하다면 그 페이지에서만 표시되는 페이지 액션을 사용해야 한다. 액션이 모든 페이지를 대상으로 하거나 브라우저 그 자체가 대상이라면 브라우저 액션을 사용하라.

브라우저 액션은 기본이 표시되는 것이지만 페이지 액션은 기본적으로 숨겨진다. 탭에 [`pageAction.show()`](/en-US/Add-ons/WebExtensions/API/pageAction/show)를 호출하거나, `show_matches` 속성을 줘야 표시할 수 있다.

## 문법

`page_action`은 세 가지 속성들 중에 몇 가지를 가지는 객체다(역주: 파이어폭스 외의 브라우저에서도 지원되는 속성은 세가지 뿐이다). 모두 선택사항이다:

| Name                                                                                    | Type                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`browser_style`](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) | `Boolean`                                      | 선택, 기본값은 `false`.사용하면, 팝업과 브라우저의 UI와 `browser_style`을 사용하는 다른 확장의 모습이 일관되게 보이게 하는 스타일시트를 포함한다. 기본값은 `false`지만 팝업이 브라우저의 다른 UI와 일관되게 하려면, 스타일시트가 포함될 수 있도록 `true`로 하는 것이 권장한다.파이어폭스에서, 이 스타일시트는 chrome://browser/content/extension.css에서 볼 수 있다. OS X에서는 chrome://browser/content/extension-mac.css다.[파이어폭스 스타일 가이드](https://firefoxux.github.io/StyleGuide/#/controls)는 팝업의 요소가 특정 스타일을 갖게하는 클래스들에 대해 설명한다.[최종-다운로드](https://github.com/mdn/webextensions-examples/tree/master/latest-download) 예제 확장 프로그램은 팝업에 `browser_style`을 사용한다.                                                                   |
| `default_icon`                                                                          | `Object` or `String`                           | 액션이 사용하는 아이콘.권장은 19x19 픽셀과 38x38 픽셀 두 종류가 제공되는 것이다. 아래처럼 각각 "19" 와 "38"이라는 속성 이름을 사용한다:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | <pre class="brush: json">"page_action": {"browser_style": true,"default_icon": {"19": "button/geo-19.png","38": "button/geo-38.png"},"default_title": "Whereami?","default_popup": "popup/geo.html"}</pre>이렇게 하면 화면 해상도에 따라 적절한 크기를 사용하게 된다.아래처럼 하나의 문자열로 할 수도 있다:<pre class="brush: json">"default_icon": "geo.png"</pre>이렇게 하면 툴바에 맞게 크기가 조정될 것이다. 흐릿해질 수 있다. |
| `default_popup`                                                                         | `String`                                       | 팝업으로 띄울 HTML 파일의 경로.HTML 파일은 일반 웹 페이지처럼 [`<link>`](/ko/docs/Web/HTML/Element/link)와 [`<script>`](/ko/docs/Web/HTML/Element/script) 요소를 사용해서 CSS와 자바스크립트를 포함할 수 있다. 하지만 [`<script>`](/ko/docs/Web/HTML/Element/script) 사이에 코드를 직접 포함하면 Content Violation Policy 에러가 발생하므로, [`src`](/ko/docs/Web/HTML/Element/script) 속성으로 분리된 스크립트 파일을 올려야 한다.보통의 웹페이지와 달리, 팝업에서 실행되는 자바스크립트는 모든 [WebExtension API](/en-US/Add-ons/WebExtensions/API)를 사용할 수 있다(당연히 필요한 [권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)을 가져야 한다).이것은 [지역화 가능 속성](/en-US/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)이다. |
| `default_title`                                                                         | `String`                                       | 아이콘에 마우스가 올려지면 표시되는 툴팁.이것은 [지역화 가능 속성](/en-US/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)이다.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `hide_matches`                                                                          | `Array` of `Match Pattern` except `<all_urls>` | 주어진 [선별식](/en-US/Add-ons/WebExtensions/match_patterns)에 맞는 URL에 대해 페이지 액션을 숨긴다.하지만 페이지 액션은 기본적으로 숨겨지고 `show_matches`와 맞아야만 보이기 때문에, `반드시 show_matches`가 있어야 의미가 있다. 이 값은 `show_matches` 일부를 제외하는 역할을 한다. 예를 들어 값이 다음과 같다면:<pre class="brush: json">"page_action": { "show_matches": ["https://*.mozilla.org/*"], "hide_matches": ["https://developer.mozilla.org/*"] }</pre>pre>기본은 "mozilla.org"인 모든 HTTPS URL에 대해 페이지 액션이 표시되는 것이지만, "developer.mozilla.org"인 경우는 제외라 표시되지 않는다.                                                                                                                                                                                 |
| `show_matches`                                                                          | `Array` of `Match Pattern`                     | 주어진 패턴에 일치하는 URL에 대해 페이지 액션을 보인다.`hide_matches`도 보기.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `pinned`                                                                                | `Boolean`                                      | 선택, 기본값은 `true`.주소창에 페이지 액션이 기본적으로 나타나는지를 결정한다.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## 예제

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }
}
```

그냥 아이콘만 있는 페이지 액션으로 아이콘을 누르면 확장의 background 스크립트는 아래처럼 해서 click 이벤트를 받을 수 있다:

```js
browser.pageAction.onClicked.addListener(handleClick);
```

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

아이콘, 제목, 팝업이 있는 페이지 액션으로 아이콘을 누르면 팝업이 보일 것이다.

## 브라우저 호환성

{{Compat}}

## See also

- [`browser_action`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser styles](/ko/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
