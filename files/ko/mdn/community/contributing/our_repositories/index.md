---
title: MDN 웹 문서 저장소
slug: MDN/Community/Contributing/Our_repositories
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

[MDN 웹 문서](/)는 동적이고 복잡한 프로젝트입니다. 이 프로젝트의 다양한 저장소를 익히는 것이 좋습니다. 이 문서는 MDN 웹 문서 프로젝트의 다양한 부분에 기여할 때 필요한 저장소(repos)를 찾는 데 도움이 되고자 작성되었습니다.

## 저장소의 계층

### 제 1 등급

이 저장소의 코드는 MDN 웹 문서의 핵심이며 Mozilla 소유의 도메인에서 실행됩니다.

- [mdn/content](https://github.com/mdn/content)
- [Yari](https://github.com/mdn/yari)
- [rumba](https://github.com/mdn/rumba)
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
- [interactive-examples](https://github.com/mdn/interactive-examples)
- [bob](https://github.com/mdn/bob)

1등급 프로젝트는 최소 3명의 구성원을 가져야 하며, 그 중 최소 두 명은 관리자 권한을 가지고 있어야 합니다.

### 제 2 등급

이 저장소는 주로 코드 예제, MDN 웹 문서 학습 영역, 지역화 및 예제 프로젝트와 같은 콘텐츠 지원에 집중되어 있습니다. 예시는 다음과 같습니다.

- [dom-examples](https://github.com/mdn/dom-examples)
- [translated-content](https://github.com/mdn/translated-content)
- [learning-area](https://github.com/mdn/learning-area)

1등급 프로젝트는 최소 2명의 구성원을 가져야 하며, 그 중 최소 한 명은 관리자 권한을 가지고 있어야 합니다.

### 제 3 등급

이 저장소는 프로젝트 계획, 프로젝트 자체 문서화 및 커뮤니티 참여를 위한 것입니다. 예시는 다음과 같습니다.

- [mdn-community](https://github.com/mdn/mdn-community)
- [mdn/mdn](https://github.com/mdn/mdn)
- [content-team-projects](https://github.com/mdn/content-team-projects)

3등급 프로젝트는 한 명의 관리자가 필요합니다.

## 핵심 저장소

- **핵심 콘텐츠**: <https://github.com/mdn/content>. MDN 웹 문서 콘텐츠에서 가장 중요한 저장소입니다. 이곳에 사이트의 모든 핵심 영어 콘텐츠를 저장하고, 페이지의 내용에 대한 모든 표준 변경 사항을 적용합니다.
- **MDN 웹 문서 플랫폼**: <https://github.com/mdn/yari>. 이곳은 MDN 웹 문서 플랫폼을 저장하는 위치로, 상위 페이지 구조나 렌더링 기계를 변경하고자 할 때 방문하는 곳입니다.
- **브라우저 호환성 데이터**: <https://github.com/mdn/browser-compat-data>. 이곳에는 저희가 참조하는 페이지의 브라우저 호환성 정보 표를 위한 데이터가 저장되어 있습니다 ([예시](/ko/docs/Web/HTML/Element/progress#browser_compatibility)). 웹 기능의 브라우저 호환성에 관한 정보를 가지고 있거나, 연구 및 실험을 하고자 하신다면 MDN의 [브라우저 호환성 데이터](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md)를 업데이트하는 데 도움을 줄 수 있습니다.
- **인터랙티브 예제**: <https://github.com/mdn/interactive-examples>. 이곳에는 많은 참조 페이지 상단에 있는 예제 코드 블록이 저장되어 있습니다 ([예시](/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis)). 여기에서 해당 예제를 수정해 보세요.
- **Bob** 일명 Builder of Bits: <https://github.com/mdn/bob>
  이곳에는 많은 참조 페이지 상단의 편집 및 복사할 수 있는 예제를 생성하는 렌더링 코드가 저장되어 있습니다 ([예시](/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis)).
- **번역된 콘텐츠**: <https://github.com/mdn/translated-content>. 이 저장소에는 지역화된 콘텐츠가 있습니다. 페이지 [지역화 활성화](https://github.com/mdn/translated-content#locales)에 도움이 되고 싶다면 이곳을 방문해 보세요.
- **워크플로우**: <https://github.com/mdn/workflows>
  MDN 웹 문서 저장소에서 사용할 수 있는 재사용 가능한 GitHub Actions 모음집입니다.

## 코드 예제

### 코드 예제와 데모

[//]: # "TODO : 저장소를 분류하여 업데이트하기"

MDN 웹 문서 GitHub에는 많은 예제 저장소가 있습니다. 이 저장소는 일반적으로 종종 저희 페이지와 연결되는 독립적인 코드 예제를 포함하고 있습니다. 그러나 가끔 다음과 같은 매크로 호출을 사용하여 이러한 예제들이 페이지에 포함되기도 합니다. `\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}`.

항상 기억하세요. 특정 페이지의 코드를 업데이트할 때는 해당 예제를 담고 있는 저장소도 함께 업데이트해야 합니다.

- [**dom-예제**](https://github.com/mdn/dom-examples)
- [**css-예제**](https://github.com/mdn/css-examples)
- [**webaudio-예제**](https://github.com/mdn/webaudio-examples)
- [**webassembly-예제**](https://github.com/mdn/webassembly-examples)
- [**indexeddb-예제**](https://github.com/mdn/indexeddb-examples)
- [**js-예제**](https://github.com/mdn/js-examples)
- [**html-예제**](https://github.com/mdn/html-examples)
- [**web-components-예제**](https://github.com/mdn/web-components-examples)
- [**webextension-예제**](https://github.com/mdn/webextensions-examples)
- [**pwa-예제**](https://github.com/mdn/pwa-examples)
- [**houdini-예제**](https://github.com/mdn/houdini-examples)
- [**headless-예제**](https://github.com/mdn/headless-examples)
- [**perf-예제**](https://github.com/mdn/perf-examples)
