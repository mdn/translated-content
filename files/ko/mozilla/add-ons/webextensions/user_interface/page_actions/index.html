---
title: Address bar button
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
tags:
  - 사용자 인터페이스
  - 웹확장
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
---
<div>{{AddonSidebar}}</div>

<p>주소줄에 추가되는 버튼으로 사용자가 확장 프로그램과 상호작용하는 일명 <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction">페이지 </a><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction">액션</a>을 말한다.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15745/address_bar_button.png" style="display: block; height: 174px; margin-left: auto; margin-right: auto; width: 350px;"></p>

<h2 id="페이지_액션과_브라우저_액션">페이지 액션과 브라우저 액션</h2>

<p>주소줄 버튼(또는 페이지 액션)은 툴바 버튼(또는 브라우저 액션)과 아주 비슷하다.</p>

<p>차이점은:</p>

<ul>
 <li>위치:
  <ul>
   <li>페이지 액션은 브라우저의 주소줄에 표시된다.</li>
   <li>브라우저 액션은 주소줄 밖 브라우저의 툴바에 표시된다.</li>
  </ul>
 </li>
 <li>보임:
  <ul>
   <li>페이지 액션은 평소에는 보통 숨겨지고(show_matches와 hide_matches <a href="/en-US/Add-ons/WebExtensions/manifest.json/page_action">매니페스트 항목</a>으로 바꿀 수 있다),  해당 탭에 보이거나 숨길 때는 <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/show" title="Shows the page action for a given tab. The page action is shown whenever the given tab is the active tab."><code>pageAction.show()</code></a>와 <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/hide" title="Hides the page action for a given tab."><code>pageAction.hide()</code></a> 를 호출한다.</li>
   <li>브라우저 액션은 항상 보인다.</li>
  </ul>
 </li>
</ul>

<p>하고자 하는 동작이 현재 페이지에 대한 것이면 페이지 액션을 사용하고, 전체 또는 여러 페이지가 대상이라면 브라우저 액션을 사용한다. 예를 들어:</p>

<table class="fullwidth-table standard-table">
 <thead>
  <tr>
   <th scope="row">유형</th>
   <th scope="col">Bookmarks action</th>
   <th scope="col">Content action</th>
   <th scope="col">Tabs operation</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">페이지 액션</th>
   <td>Bookmark this page</td>
   <td>Reddit enhancement</td>
   <td>Send tab</td>
  </tr>
  <tr>
   <th scope="row">브라우저 액션</th>
   <td>Show all bookmarks</td>
   <td>Enable ad-blocking</td>
   <td>Sync all open tabs</td>
  </tr>
 </tbody>
</table>

<p> </p>

<h2 id="페이지_액션_기술하기">페이지 액션 기술하기</h2>

<p> </p>

<p>페이지 액션의 속성은 manifest.json의 <code><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a></code> 항목에서 정의한다:</p>

<pre class="brush: json line-numbers  language-json"><code class="language-json">"page_action": {
  "browser_style": true,
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}</code></pre>

<p>꼭 있어야 하는 항목은 <code>default_icon</code>이다.</p>

<p>페이지 액션을 기술하는 길은 두 가지다: <a href="/en-US/Add-ons/WebExtensions/Popups">팝업</a>이 있는가. 없는가. 팝업이 없으면, 사용자 클릭은 <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked" title="Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup."><code>pageAction.onClicked</code></a>을 청취하는 확장 프로그램에 이벤트를 전달된다:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">browser.pageAction.onClicked.addListener(handleClick);</code></pre>

<p>팝업이 있으면, 클릭 이벤트는 없다: 대신, 팝업창이 열린다. 사용자는 팝업으로 일을 하고, 팝업창 바깥을 클릭하면 자동으로 닫힌다. <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Popups">팝업</a> 글에 팝업을 만들고 관리하는 보다 자세한 내용이 있다.</p>

<p>주목! 확장 프로그램은 페이지 액션을 하나만 가질 수 있다.</p>

<p>페이지 액션의 속성은 <code><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction">pageAction</a></code> API로 프로그램적으로 바꿀 수 있다.</p>

<h2 id="아이콘">아이콘</h2>

<p>페이지 액션에서 어떻게 아이콘을 만들고 사용하는지에 대한 자세한 내용은 <a class="grey-90 no-underline hover-no-underline" href="https://design.firefox.com/photon/index.html">Photon Design System</a> 문서에서 <a href="https://design.firefox.com/photon/visuals/iconography.html">Iconography</a>을 보라.</p>

<h2 id="예제">예제</h2>

<p>GitHub <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> 저장소에 팝업없는 페이지 액션 예제 <a href="https://github.com/mdn/webextensions-examples/tree/master/chill-out">chill-out</a>가 있다.</p>
