---
title: API 레퍼런스의 사이드바
slug: MDN/Writing_guidelines/Howto/Write_an_API_reference/Sidebars
---

{{MDNSidebar}}

API 레퍼런스 문서에는 수정 가능한 사이드바 를 추가할 수 있습니다. 이 사이드바에 인터페이스, 튜토리얼, 혹은 API와 관련된 자료 링크를 노출합니다. 그 사용법을 설명합니다.

## 뭘 해야 하나요?

사이드바 생성은 다음 세 단계로 나뉩니다.

1. API 레퍼런스 페이지를 만듭니다.
2. [KumaScript 레파지토리](https://github.com/mdn/kumascript)의 GroupData.json 데이터 파일에 그 API를 위한 엔트리를 추가합니다.
3. 사이드바가 필요한 페이지에 \\{{APIRef}} 메크로를 추가합니다.

[Fetch API](/ko/docs/Web/API/Fetch_API)를 샘플로 삼아서 단계별로 살펴 보겠습니다.

### 신규 API 레퍼런스 페이지 만들기

페이지에 사이드바를 추가하기 전에 여러분은 페이지를 만들어야 합니다. (자세한건 API 레퍼런스 문서에 필요한건 무엇일까요? 마이드 문서를 보세요)

### GroupData.json에 API의 엔트리를 추가하기

[GroupData.json](https://github.com/mdn/kumascript/blob/master/macros/GroupData.json) 파일은 API 레퍼런스 문서의 사이드바 안에 담아야 하는 모든 데이타를 담고 있습니다. API를 파라미터로 주고 \\{{APIRef}}메크로를 실행하면, GroupData.json에서 탐색해서 사이드바를 생성하고 페이지에 추가합니다.

GroupData.json에 엔트리를 추가하려면 다음을 따르세요.

1. [GitHub](https://github.com/) 계정이 필요합니다.
2. KumaScript 레파지토리를 포크뜨고, 작업할 브랜치를 생성하고 로컬에 클론을 뜹니다.
3. 생성한 브랜치로 체크아웃을 하고 작업후 오리진으로 푸시합니다.
4. MDN 팀이 리뷰할 수 있도록 풀 리퀘스트를 날려주시고, 필요하다 생각이 들면 변경 요청을 주세요.

GitHub 사용법을 잘 모르겠으면 [호환성 테이블 가이드](/ko/docs/MDN/Contribute/Structures/Compatibility_tables#The_new_way_The_browser_compat_data_repo_and_dynamic_tables) 문서를 참고하세요. 자세한 내용이 있습니다.

[GroupData.json](https://github.com/mdn/kumascript/blob/master/macros/GroupData.json)은 KumaScript 레파지토리의 macros 폴더 안에 있습니다. 파일을 열어보면 API별로 자기 내용을 가진 거대한 JSON 구조체를 볼 수 있습니다. 키는 API명이고, 값은 사이드바 링크를 생성하기 위해 정의된 하위 멤버를 담은 객체입니다.

[Fetch API](/ko/docs/Web/API/Fetch_API) 를 예로 들면 일치하는 GroupData.json의 엔트리가 다음과 같습니다.

```json
"Fetch API": {
    "overview":   [ "Fetch API"],
    "interfaces": [ "Body",
                    "Headers",
                    "Request",
                    "Response",
                    "FetchController",
                    "FetchObserver",
                    "FetchSignal",
                    "ObserverCallback" ],
    "methods":    [ "fetch()" ],
    "properties": [],
    "events":     []
},
```

보다시피 키 명을 "Fetch API"으로 명명 하고 있고, 하위 멤버들을 담은 객체를 가지고 있습니다.

#### GroupData 엔트리에 담긴 하위 멤버들

GroupData 엔트리에 추가할 수 있는 하위 멤버 목록입니다.

리스트업된 하위 멤버값 대부분은 링크걸 텍스트와 링크 생성을 위해 메인 API 색인 페이지(`https://developer.mozilla.org/<language-code>/docs/Web/API`) 끝에 추가될 슬러그입니다. 예를 들어 en-US 로케일에서 "Body"는 아래 링크를 만듭니다.

```html
<li><a href="https://developer.mozilla.org/ko/docs/Web/API">Body</a></li>
```

몇가지 예외가 있습니다.. 예를 들어 "guides" 하위 멤버는 가이드/튜토리얼 관련 링크를 정의할 하나이상의 링크 정보(타이틀과 슬러그)를 갖고 있는데, 이경우 슬러그는 MDN 어디든 추가될 수 있도록 MDN 문서 루트(`https://developer.mozilla.org/<language-code>/docs`)의 끝에 추가됩니다.

사용가능한 멤버들입니다. 로케일은 en-US로 가정합니다.

1. `"overview"` — 값은 배열이고, API 오버뷰 문서의 슬러그입니다. 하나인 경우 "Fetch API"이면 다음 같은 링크를 만듭니다. [https://developer.mozilla.org/ko/docs/Web/API/Fetch_API](/ko/docs/Web/API/Fetch_API).
2. `"interfaces"` — 해당 API의 인터페이스 전체 목록을 담은 배열 입니다. 값이 "Body"이면 다음 과 같은 링크를 만듭니다. [https://developer.mozilla.org/ko/docs/Web/API/Body](/ko/docs/Web/API/Body).
3. `"methods"` — the value is an array that should contain any methods the spec adds to interfaces associated with other APIs, such as instantiation methods created on {{domxref("Navigator")}} or {{domxref("Window")}}. If there are a huge number of methods, you might want to consider only listing the most popular ones, or putting them first in the list. "fetch()" results in a link being made to [https://developer.mozilla.org/ko/docs/Web/API/fetch](/ko/docs/Web/API/fetch).
4. `"properties"` — the value is an array that should contain all of the properties associated with the API. This can include properties that are members of interfaces defined in the API spec, and properties the API defines on other interfaces. If there are a huge number of properties, you might want to consider only listing the most popular ones, or putting them first in the list. "Headers.append" results in a link being made to [https://developer.mozilla.org/ko/docs/Web/API/Headers/append](/ko/docs/Web/API/Headers/append).
5. `"events"` — the value is an array that should contain all of the events associated with the API, defined in the API spec, or elsewhere. If there are a huge number of events, you might want to consider only listing the most popular ones, or putting them first in the list. "animationstart" results in a link being made to [https://developer.mozilla.org/ko/docs/Web/Events/animationstart](/ko/docs/Web/Events/animationstart).
6. `"guides"` — the value is an array containing one or more objects that define links to guides explain how to use the API. Each object contains two submembers — "url", which contains the partial URL pointing to the guide article, and "title", which defines the link test for the link. As an example, the following object:

   ```json
   {
     "url": "/docs/Web/API/Detecting_device_orientation",
     "title": "Detecting device orientation"
   }
   ```

   Creates a link with the title "Detecting device orientation", which points to [https://developer.mozilla.org/ko/docs/Web/API/Detecting_device_orientation](/ko/docs/Web/API/Detecting_device_orientation).

### API Submembers and Tags

Some submembers are automatically discovered from child pages, based on page tags. Pages under the top-level API are crawled each time the sidebar is rendered, and entries are automatically created for methods ("Method" tag), properties ("Property" tag), and constructors ("Constructor" tag).

Submembers are automatically decorated with warning icons based on tags as well. Decorations are added for experimental ("Experimental" tag), non-standard ("Non Standard" or "Non-standard" tag), deprecated ("Deprecated" tag), or obsolete ("Obsolete" tag) submembers.

Further information about tag-based processing is available [in the APIRef source](https://github.com/mdn/kumascript/blob/master/macros/APIRef.ejs).

### Inserting the sidebar in your pages

Once you've added an entry for your API into GroupData.json, submitted it as a pull request and had the change accepted into the main repo, you can include it in your API reference pages using the \\{{APIRef}} macro, which takes the name you used for your API in GroupData as a parameter. As an example, the [WebVR API](/ko/docs/Web/API/WebVR_API)'s sidebar is included in its pages with the following:

{{APIRef("WebVR API")}}
