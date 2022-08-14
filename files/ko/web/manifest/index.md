---
title: Web app manifests
slug: Web/Manifest
tags:
  - App
  - Manifest
  - PWA
  - Progressive web apps
  - Reference
  - Web
translation_of: Web/Manifest
---
<div>{{QuickLinksWithSubpages("/ko/docs/Web/Manifest")}}</div>

<div>{{SeeCompatTable}}</div>

<p><strong>웹 앱 매니페스트</strong>(Web app manifest)는 프로그레시브 웹 앱(PWA)라고 칭하는 웹 기술 모음집의 일부로서, 앱 스토어를 거치지 않고 장치의 홈 화면에 설치할 수 있는 웹사이트를 구성합니다. 단순한 홈 화면 링크/북마크를 통한 일반적인 웹 앱과 달리, PWA는 사전 다운로드를 통해 오프라인에서도 동작하며 일반적인 <a href="/ko/docs/Web/API">Web API</a>도 사용할 수 있습니다.</p>

<p>웹 앱 매니페스트는 웹 애플리케이션의 정보를 {{glossary("JSON")}} 텍스트 파일로 제공하여, 웹 앱의 다운로드 및 네이티브 앱과 유사한 형태로 제공(홈 화면 설치를 통한 더 빠른 접근 및 풍부한 사용자 경험 제공)을 가능케 합니다. PWA 매니페스트는 자신의 이름, 저작자, 아이콘, 버전, 설명, 기타 필요한 리소스 등을 포함합니다.</p>

<div class="hidden">
<p>Can PWA manifest contain comments?<br>
 It is a {{Glossary("JSON")}}-formatted file, with one exception: it is allowed to contain "<code>//</code>"-style comments.</p>
</div>

<h2 id="구성요소">구성요소</h2>

<p>웹 앱 매니페스트는 다음의 키를 포함할 수 있습니다. 각각의 링크를 클릭해 더 많은 정보를 알아보세요.</p>

<p>{{ListSubpages("/en-US/docs/Web/Manifest")}}</p>

<h2 id="예제">예제</h2>

<pre class="brush: json notranslate">{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#fff",
  "description": "A simply readable Hacker News app.",
  "icons": [{
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen72.png",
    "sizes": "72x72",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen96.png",
    "sizes": "96x96",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen144.png",
    "sizes": "144x144",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen168.png",
    "sizes": "168x168",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "related_applications": [{
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
  }]
}</pre>

<h2 id="Deploying_a_manifest_with_the_link_tag" name="Deploying_a_manifest_with_the_link_tag">매니페스트 배포</h2>

<p>웹 앱 매니페스트는 HTML 페이지 {{HTMLElement("head")}} 요소 내의 {{HTMLElement("link")}} 요소를 사용해 연결합니다.</p>

<pre class="brush: html notranslate">&lt;link rel="manifest" href="/manifest.webmanifest"&gt;</pre>

<div class="note">
<p><strong>참고</strong>: <code>.webmanifest</code> 확장자는 명세의 <a href="https://w3c.github.io/manifest/#media-type-registration">Media type registration</a> 구획에 정의(매니페스트 파일의 응답은 <code>Content-Type: application/manifest+json</code>을 반환해야 함)되어 있습니다. 브라우저는 <code>.json</code>과 같은 기타 적절한 확장자도 지원합니다. (<code>Content-Type: application/json</code>).</p>
</div>

<div class="note">
<p><strong>참고</strong>: 매니페스트를 가져오려면 인증 정보가 필요한 경우, 매니페스트 파일이 현재 페이지와 동일한 출처에 위치하더라도 반드시 {{domxref("HTML/CORS_settings_attributes", "crossorigin")}} 특성을 <code>use-credentials</code>로 지정해야 합니다.</p>
</div>

<h2 id="스플래시_화면">스플래시 화면</h2>

<p>Chrome 47 이후 버전에서는, 홈 화면에서 실행한 사이트가 스플래시 화면을 사용합니다. 스플래시 화면은 웹 앱 매니페스트의 다음 속성을 사용해 자동으로 생성합니다.</p>

<ul>
 <li><code><a href="/ko/docs/Web/Manifest/name">name</a></code></li>
 <li><code><a href="/ko/docs/Web/Manifest/background_color">background_color</a></code></li>
 <li><code><a href="/ko/docs/Web/Manifest/icons">icons</a></code> 배열에서 장치 해상도 기준 128dpi에 제일 근접한 아이콘.</li>
</ul>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.manifest")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Web/Progressive_web_apps">프로그레시브 웹 앱(PWA)</a></li>
</ul>
