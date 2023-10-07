---
title: Your first extension
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---

{{AddonSidebar}}

이 글에서 우리는 "mozilla.org"와 그 하위 도메인 페이지에서 불러온 페이지에 붉은 테두리를 추가하는 확장 기능을 만들게 됩니다. 이를 통해 어떻게 Firefox를 위한 확장 기능을 만들 수 있는지 알아보고자 합니다.

이 예제의 소스코드는 GitHub에서 받을 수 있습니다.
<https://github.com/mdn/webextensions-examples/tree/master/borderify>

우선, 파이어폭스의 버전이 45 이상이여야 합니다.

## 확장기능 만들기

새 디렉토리를 만들고 그 디렉토리 안으로 들어갑니다.

```bash
mkdir borderify
cd borderify
```

### manifest.json

이제 "borderify" 폴더 안에 "manifest.json" 파일을 만들어야 합니다. 아래 내용을 작성해 주세요.

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- [`manifest_version`](/en-US/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/en-US/Add-ons/WebExtensions/manifest.json/name), [`version`](/en-US/Add-ons/WebExtensions/manifest.json/version), 이 세가지 키는 반드시 필요합니다. 확장의 기본 메타 데이터를 담고 있습니다.
- [`description`](/en-US/Add-ons/WebExtensions/manifest.json/description)은 없어도 괜찮지만 포함하는 게 좋습니다. 확장 관리자 화면에서 볼 수 있습니다.
- [`icons`](/en-US/Add-ons/WebExtensions/manifest.json/icons)은 없어도 괜찮지만 역시 포함하는 편이 좋습니다. 이는 확장의 아이콘을 결정하며 확장 관리자 화면에서 볼 수 있습니다.

가장 재밌는 키는 [`content_scripts`](/en-US/Add-ons/WebExtensions/manifest.json/content_scripts) 입니다. 이 키는 URL이 패턴과 일치하는 페이지에 스크립트를 주입하도록 Firefox에 요청하는 역할을 합니다. 이 예제의 경우, "mozilla.org"와 그 하위 도메인에서 제공되는 모든 HTTP와 HTTPS 페이지에 "borderify.js" 스크립트를 주입하도록 Firefox에 요청합니다.

- [content scripts에 대해 더 알아보기](/en-US/Add-ons/WebExtensions/Content_scripts)
- [match patterns에 대해 더 알아보기](/en-US/Add-ons/WebExtensions/Match_patterns)

> **경고:** [확장에 ID를 지정해야 할 수도 있습니다](/en-US/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID). 애드온 ID를 지정해야 한다면, `manifest.json` 파일에 `application` 키를 작성한 다음 gecko.id 프로퍼티를 설정하면 됩니다.```json
> "applications": {
> "gecko": {
> "id": "borderify@example.com"
> }
> }
>
> ```
>
> ```

### icons/border-48.png

확장기능에는 아이콘이 필요합니다. 이 아이콘은 확장 관리자의 목록에 나타납니다. 우리의 manifest.json은 "icons/border-48.png"를 아이콘으로 사용하겠다고 정했습니다.

borderify 디렉토리 안에 icons 디렉토리를 만들고, "border-48.png"라는 이름으로 아이콘을 저장합니다. [예제에 포함된 아이콘](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png)이나, [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) 라이선스로 배포되는 Google Material Design 아이콘 세트에서 골라도 좋습니다.

사용할 아이콘은 48픽셀 정사각형이여야 합니다. 원한다면 고해상도 디스플레이를 위해서 96x96 픽셀의 아이콘과 같이 제공할 수도 있습니다. 만약 그렇게 한다면 manifest.json의 icons 객체에 `96` 프로퍼티로 지정해줘야 합니다.

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

대신 SVG 파일을 사용할 수도 있습니다. 그러면 자동으로 딱 맞게 조절되어 적용됩니다. (만약 SVG에 텍스트가 포함되어 있다면 사용하는 툴에서 "패스로 변환하기" 기능을 사용해 텍스트를 패스로 변경해주세요. 그래야 원하는 위치와 크기로 확대/축소가 이뤄집니다.)

- [아이콘을 지정하는 방법에 대해 더 알아보기](/en-US/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

마지막으로 borderify.js 파일을 borderify 디렉토리에 만들고 아래 내용으로 저장해주세요.

```js
document.body.style.border = "5px solid red";
```

이 스크립트는 manifest.json의 `content_scripts`키로 주어진 패턴에 매칭 될 때 페이지에 삽입됩니다. 스크립트는 원래 페이지에 포함되어 있던 스크립트처럼, 문서 자체에 직접 접근할 수 있게 됩니다.

- [content scripts에 대해 더 알아보기](/en-US/Add-ons/WebExtensions/Content_scripts)

## 사용해보기

우선 파일들이 원하는 위치에 있는지 다시 확인 해보세요.

```
    borderify/
        icons/
            border-48.png
        borderify.js
        manifest.json
```

### 설치

Firefox로 "about:debugging" 페이지에 들어갑니다. "임시 확장기능 로드"를 클릭해 확장기능 디렉토리를 선택합니다.

{{EmbedYouTube("cer9EUKegG4")}}

이제 확장기능이 설치될 것이고, Firefox가 재시작 되더라도 유지될 것입니다.

대신 [web-ext](/ko/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext) 툴을 사용해 커맨드라인에서 확장기능을 실행할 수도 있습니다.

### 테스트

이제 "mozilla.org" 페이지에 들어가 봅시다. 페이지 전체를 둘러싸고 있는 붉은 색의 테두리를 볼 수 있습니다.

{{EmbedYouTube("rxBQl2Z9IBQ")}}

> **참고:** addons.mozilla.org에 들어가서 테스트 하지 마세요! Content script는 현재 이 도메인에 사용할 수 없도록 차단됩니다.

좀 더 파고들어 봅시다. 테두리의 색을 변경하거나, 페이지 컨텐츠에 다른 것들을 해볼 수 있겠죠. content script를 저장하고 about:debugging 페이지에서 Reload 버튼을 눌러 확장기능 파일을 새로고침 할 수 있습니다. 그리고 나서는 곧바로 변경된 기능을 확인할 수 있죠.

{{EmbedYouTube("NuajE60jfGY")}}

- [확장기능을 불러오는 것에 대해 더 알아보기](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)

## 패키징과 배포

다른 사람들이 확장기능을 사용할 수 있게 하려면, 확장을 패키징하고 Mozilla에 제출해 서명을 받아야 합니다. [확장기능 배포에 대해 더 알아보기.](/ko/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)

## 다음으로

이제 어떻게 Firefox용 WebExtension을 개발해야 하는지 알게 되었습니다. 다음 글들을 읽고 시도해 보세요.

- [확장기능의 구조에 대해 더 자세히 알아보기](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [좀 더 복잡한 확장기능을 만들기](/en-US/Add-ons/WebExtensions/Your_second_WebExtension)
- [확장기능에서 사용할 수 있는 JavaScript API 문서](/en-US/Add-ons/WebExtensions/API)
