---
title: Example extensions
slug: Mozilla/Add-ons/WebExtensions/Examples
---

{{AddonSidebar}}

확장앱 개발하는 방법을 설명하기 위해 간단한 예제를 저장해놓은 저장소를 두고 있다 <https://github.com/mdn/webextensions-examples>. 이번장에서는 해당 저장소에서 사용되는 WebExtension API에 대해 설명한다.

여기에 나오는 예제는 Firefox Nightly에서 동작한다. 대부분은 이전 버전에서도 동작하지만 확장앱의 manifest.json에서 [strict_min_version](/en-US/Add-ons/WebExtensions/manifest.json/applications) 키를 확인한다.

이 예제를 실행해보려면 세가지 방법이 있다.

1. 레파지토리를 클론한뒤 소스 디렉토리를 ["Load Temporary Add-on"](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)기능으로 로드한다. 확장앱은 Firefox를 재시작하기 전까지 로드되어있다.
2. 레파지토리를 클론한뒤 [web-ext](/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext) 커멘드 라인 툴을 이용해서 확장앱을 Firefox에 설치한다.
3. 레파지토리를 클론한뒤 [빌드](https://github.com/mdn/webextensions-examples/tree/master/build) 디렉토리로 이동한다. 여기에는 빌드된 예제들이 있으므로 Firefox에서 (파일 / 파일 열기를 사용해) 파일을 열고 [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/)에서 설치하는것 처럼 영구적으로 설치할 수 있습니다.

레파지토리에 공헌하려한다면 [pull request를 보내면 된다](https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md)

{{WebExtAllExamples}}
