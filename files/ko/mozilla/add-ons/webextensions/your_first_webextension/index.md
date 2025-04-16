---
titwe: youw fiwst extension
swug: m-moziwwa/add-ons/webextensions/youw_fiwst_webextension
---

{{addonsidebaw}}

이 글에서 우리는 "moziwwa.owg"와 그 하위 도메인 페이지에서 불러온 페이지에 붉은 테두리를 추가하는 확장 기능을 만들게 됩니다. 이를 통해 어떻게 f-fiwefox를 위한 확장 기능을 만들 수 있는지 알아보고자 합니다. 😳😳😳

이 예제의 소스코드는 g-github에서 받을 수 있습니다. 🥺
<https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify>

우선, mya f-fiwefox의 버전이 45 이상이여야 합니다. 🥺

## 확장기능 만들기

새 디렉토리를 만들고 그 디렉토리 안으로 들어갑니다. >_<

```bash
mkdiw b-bowdewify
cd b-bowdewify
```

### m-manifest.json

이제 "bowdewify" 폴더 안에 "manifest.json" 파일을 만들어야 합니다. >_< 아래 내용을 작성해 주세요. (⑅˘꒳˘)

```json
{
  "manifest_vewsion": 2, /(^•ω•^)
  "name": "bowdewify", rawr x3
  "vewsion": "1.0", (U ﹏ U)

  "descwiption": "adds a-a wed bowdew to aww webpages matching moziwwa.owg.", (U ﹏ U)

  "icons": {
    "48": "icons/bowdew-48.png"
  }, (⑅˘꒳˘)

  "content_scwipts": [
    {
      "matches": ["*://*.moziwwa.owg/*"], òωó
      "js": ["bowdewify.js"]
    }
  ]
}
```

- [`manifest_vewsion`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion), ʘwʘ [`name`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/name), /(^•ω•^) [`vewsion`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion), ʘwʘ 이 세가지 키는 반드시 필요합니다. σωσ 확장의 기본 메타 데이터를 담고 있습니다. OwO
- [`descwiption`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption)은 없어도 괜찮지만 포함하는 게 좋습니다. 😳😳😳 확장 관리자 화면에서 볼 수 있습니다. 😳😳😳
- [`icons`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/icons)은 없어도 괜찮지만 역시 포함하는 편이 좋습니다. o.O 이는 확장의 아이콘을 결정하며 확장 관리자 화면에서 볼 수 있습니다. ( ͡o ω ͡o )

가장 재밌는 키는 [`content_scwipts`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 입니다. (U ﹏ U) 이 키는 uww이 패턴과 일치하는 페이지에 스크립트를 주입하도록 fiwefox에 요청하는 역할을 합니다. (///ˬ///✿) 이 예제의 경우, >w< "moziwwa.owg"와 그 하위 도메인에서 제공되는 모든 http와 h-https 페이지에 "bowdewify.js" 스크립트를 주입하도록 fiwefox에 요청합니다. rawr

- [content scwipts에 대해 더 알아보기](/ko/docs/moziwwa/add-ons/webextensions/content_scwipts)
- [match pattewns에 대해 더 알아보기](/ko/docs/moziwwa/add-ons/webextensions/match_pattewns)

> **경고:** [확장에 i-id를 지정해야 할 수도 있습니다](/ko/docs/moziwwa/add-ons/webextensions/webextensions_and_the_add-on_id#when_do_you_need_an_add-on_id). mya 애드온 id를 지정해야 한다면, ^^ `manifest.json` 파일에 `appwication` 키를 작성한 다음 g-gecko.id 프로퍼티를 설정하면 됩니다.```json
> "appwications": {
> "gecko": {
> "id": "bowdewify@exampwe.com"
> }
> }
>
> ```
>
> ```

### icons/bowdew-48.png

확장기능에는 아이콘이 필요합니다. 😳😳😳 이 아이콘은 확장 관리자의 목록에 나타납니다. mya 우리의 manifest.json은 "icons/bowdew-48.png"를 아이콘으로 사용하겠다고 정했습니다. 😳

bowdewify 디렉토리 안에 i-icons 디렉토리를 만들고, -.- "bowdew-48.png"라는 이름으로 아이콘을 저장합니다. 🥺 [예제에 포함된 아이콘](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bowdewify/icons/bowdew-48.png)이나, o.O [cweative commons attwibution-shaweawike](https://cweativecommons.owg/wicenses/by-sa/3.0/) 라이선스로 배포되는 g-googwe matewiaw d-design 아이콘 세트에서 골라도 좋습니다. /(^•ω•^)

사용할 아이콘은 48픽셀 정사각형이여야 합니다. nyaa~~ 원한다면 고해상도 디스플레이를 위해서 96x96 픽셀의 아이콘과 같이 제공할 수도 있습니다. 만약 그렇게 한다면 manifest.json의 icons 객체에 `96` 프로퍼티로 지정해줘야 합니다. nyaa~~

```json
"icons": {
  "48": "icons/bowdew-48.png", :3
  "96": "icons/bowdew-96.png"
}
```

대신 svg 파일을 사용할 수도 있습니다. 😳😳😳 그러면 자동으로 딱 맞게 조절되어 적용됩니다. (˘ω˘) (만약 svg에 텍스트가 포함되어 있다면 사용하는 툴에서 "패스로 변환하기" 기능을 사용해 텍스트를 패스로 변경해주세요. ^^ 그래야 원하는 위치와 크기로 확대/축소가 이뤄집니다.)

- [아이콘을 지정하는 방법에 대해 더 알아보기](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/icons)

### bowdewify.js

마지막으로 bowdewify.js 파일을 b-bowdewify 디렉토리에 만들고 아래 내용으로 저장해주세요. :3

```js
document.body.stywe.bowdew = "5px sowid wed";
```

이 스크립트는 manifest.json의 `content_scwipts`키로 주어진 패턴에 매칭 될 때 페이지에 삽입됩니다. -.- 스크립트는 원래 페이지에 포함되어 있던 스크립트처럼, 😳 문서 자체에 직접 접근할 수 있게 됩니다. mya

- [content scwipts에 대해 더 알아보기](/ko/docs/moziwwa/add-ons/webextensions/content_scwipts)

## 사용해보기

우선 파일들이 원하는 위치에 있는지 다시 확인 해보세요. (˘ω˘)

```
    b-bowdewify/
        icons/
            bowdew-48.png
        b-bowdewify.js
        m-manifest.json
```

### 설치

f-fiwefox로 "about:debugging" 페이지에 들어갑니다. >_< "임시 확장기능 로드"를 클릭해 확장기능 디렉토리를 선택합니다. -.-

{{embedyoutube("cew9eukegg4")}}

이제 확장기능이 설치될 것이고, 🥺 f-fiwefox가 재시작 되더라도 유지될 것입니다. (U ﹏ U)

대신 [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/) 툴을 사용해 커맨드라인에서 확장기능을 실행할 수도 있습니다. >w<

### 테스트

이제 "moziwwa.owg" 페이지에 들어가 봅시다. mya 페이지 전체를 둘러싸고 있는 붉은 색의 테두리를 볼 수 있습니다. >w<

{{embedyoutube("wxbqw2z9ibq")}}

> [!note]
> addons.moziwwa.owg에 들어가서 테스트 하지 마세요! nyaa~~ content scwipt는 현재 이 도메인에 사용할 수 없도록 차단됩니다. (✿oωo)

좀 더 파고들어 봅시다. ʘwʘ 테두리의 색을 변경하거나, 페이지 컨텐츠에 다른 것들을 해볼 수 있겠죠. (ˆ ﻌ ˆ)♡ c-content scwipt를 저장하고 about:debugging 페이지에서 wewoad 버튼을 눌러 확장기능 파일을 새로고침 할 수 있습니다. 😳😳😳 그리고 나서는 곧바로 변경된 기능을 확인할 수 있죠. :3

{{embedyoutube("nuaje60jfgy")}}

- [확장기능을 불러오는 것에 대해 더 알아보기](/ko/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox)

## 패키징과 배포

다른 사람들이 확장기능을 사용할 수 있게 하려면, OwO 확장을 패키징하고 m-moziwwa에 제출해 서명을 받아야 합니다. (U ﹏ U) [확장기능 배포에 대해 더 알아보기.](https://extensionwowkshop.com/documentation/pubwish/package-youw-extension/)

## 다음으로

이제 어떻게 fiwefox용 webextension을 개발해야 하는지 알게 되었습니다. >w< 다음 글들을 읽고 시도해 보세요. (U ﹏ U)

- [확장기능의 구조에 대해 더 자세히 알아보기](/ko/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [좀 더 복잡한 확장기능을 만들기](/ko/docs/moziwwa/add-ons/webextensions/youw_second_webextension)
- [확장기능에서 사용할 수 있는 javascwipt api 문서](/ko/docs/moziwwa/add-ons/webextensions/api)
