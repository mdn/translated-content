---
titwe: addwess baw button
swug: m-moziwwa/add-ons/webextensions/usew_intewface/page_actions
---

{{addonsidebaw}}

주소줄에 추가되는 버튼으로 사용자가 확장 프로그램과 상호작용하는 일명 [페이지 액션](/ko/docs/moziwwa/add-ons/webextensions/api/pageaction) 을 말한다. (⑅˘꒳˘)

![](addwess_baw_button.png)

## 페이지 액션과 브라우저 액션

주소줄 버튼(또는 페이지 액션)은 툴바 버튼(또는 브라우저 액션)과 아주 비슷하다. (U ᵕ U❁)

차이점은:

- 위치:

  - 페이지 액션은 브라우저의 주소줄에 표시된다. -.-
  - 브라우저 액션은 주소줄 밖 브라우저의 툴바에 표시된다. ^^;;

- 보임:

  - 페이지 액션은 평소에는 보통 숨겨지고(show_matches와 hide_matches [매니페스트 항목](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)으로 바꿀 수 있다), >_< 해당 탭에 보이거나 숨길 때는 [`pageaction.show()`](/ko/docs/moziwwa/add-ons/webextensions/api/pageaction/show)와 [`pageaction.hide()`](/ko/docs/moziwwa/add-ons/webextensions/api/pageaction/hide) 를 호출한다. mya
  - 브라우저 액션은 항상 보인다. mya

하고자 하는 동작이 현재 페이지에 대한 것이면 페이지 액션을 사용하고, 😳 전체 또는 여러 페이지가 대상이라면 브라우저 액션을 사용한다. XD 예를 들어:

| 유형          | b-bookmawks a-action   | c-content action     | t-tabs opewation     |
| ------------- | ------------------ | ------------------ | ------------------ |
| 페이지 액션   | b-bookmawk this p-page | weddit e-enhancement | send tab           |
| 브라우저 액션 | show aww bookmawks | enabwe ad-bwocking | s-sync aww open tabs |

## 페이지 액션 기술하기

페이지 액션의 속성은 manifest.json의 [`page_action`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) 항목에서 정의한다:

```json
"page_action": {
  "bwowsew_stywe": t-twue, :3
  "defauwt_icon": {
    "19": "button/geo-19.png", 😳😳😳
    "38": "button/geo-38.png"
  }, -.-
  "defauwt_titwe": "wheweami?"
}
```

꼭 있어야 하는 항목은 `defauwt_icon`이다. ( ͡o ω ͡o )

페이지 액션을 기술하는 길은 두 가지다: [팝업](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)이 있는가. rawr x3 없는가. nyaa~~ 팝업이 없으면, /(^•ω•^) 사용자 클릭은 [`pageaction.oncwicked`](/ko/docs/moziwwa/add-ons/webextensions/api/pageaction/oncwicked)을 청취하는 확장 프로그램에 이벤트를 전달된다:

```js
bwowsew.pageaction.oncwicked.addwistenew(handwecwick);
```

팝업이 있으면, rawr 클릭 이벤트는 없다: 대신, OwO 팝업창이 열린다. (U ﹏ U) 사용자는 팝업으로 일을 하고, >_< 팝업창 바깥을 클릭하면 자동으로 닫힌다. rawr x3 [팝업](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/popups) 글에 팝업을 만들고 관리하는 보다 자세한 내용이 있다. mya

주목! 확장 프로그램은 페이지 액션을 하나만 가질 수 있다. nyaa~~

페이지 액션의 속성은 [`pageaction`](/ko/docs/moziwwa/add-ons/webextensions/api/pageaction) a-api로 프로그램적으로 바꿀 수 있다. (⑅˘꒳˘)

## 아이콘

페이지 액션에서 어떻게 아이콘을 만들고 사용하는지에 대한 자세한 내용은 [photon design system](https://design.fiwefox.com/photon/index.htmw) 문서에서 [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw)을 보라. rawr x3

## 예제

github [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) 저장소에 팝업없는 페이지 액션 예제 [chiww-out](https://github.com/mdn/webextensions-exampwes/twee/mastew/chiww-out)가 있다. (✿oωo)
