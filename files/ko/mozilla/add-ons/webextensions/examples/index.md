---
title: Example extensions
slug: Mozilla/Add-ons/WebExtensions/Examples
translation_of: Mozilla/Add-ons/WebExtensions/Examples
---
<div>{{AddonSidebar}}</div>

<p>확장앱 개발하는 방법을 설명하기 위해 간단한 예제를 저장해놓은 저장소를 두고 있다 <a href="https://github.com/mdn/webextensions-examples">https://github.com/mdn/webextensions-examples</a>. 이번장에서는 해당 저장소에서 사용되는 WebExtension API에 대해 설명한다.</p>

<p>여기에 나오는 예제는 Firefox Nightly에서 동작한다. 대부분은 이전 버전에서도 동작하지만 확장앱의 manifest.json에서 <a href="/en-US/Add-ons/WebExtensions/manifest.json/applications">strict_min_version</a> 키를 확인한다.</p>

<p>이 예제를 실행해보려면 세가지 방법이 있다.</p>

<ol>
 <li>레파지토리를 클론한뒤 소스 디렉토리를 <a href="/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">"Load Temporary Add-on"</a>기능으로 로드한다. 확장앱은 Firefox를 재시작하기 전까지 로드되어있다.</li>
 <li>레파지토리를 클론한뒤 <a href="/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext">web-ext</a> 커멘드 라인 툴을 이용해서 확장앱을 Firefox에 설치한다.</li>
 <li>레파지토리를 클론한뒤 <a href="https://github.com/mdn/webextensions-examples/tree/master/build">빌드</a> 디렉토리로 이동한다. 여기에는 빌드된 예제들이 있으므로 Firefox에서 (파일 / 파일 열기를 사용해) 파일을 열고 <a href="https://addons.mozilla.org/en-US/firefox/">addons.mozilla.org</a>에서 설치하는것 처럼 영구적으로 설치할 수 있습니다.</li>
</ol>

<p>레파지토리에 공헌하려한다면 <a href="https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md">pull request를 보내면 된다</a></p>

<p>{{WebExtAllExamples}}</p>
