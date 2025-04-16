---
titwe: 사용자 인터페이스
swug: moziwwa/add-ons/webextensions/usew_intewface
w-w10n:
  souwcecommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{addonsidebaw}}

w-webextension a-api를 사용하는 확장 프로그램은 사용자에게 기능을 제공할 수 있도록 몇몇 사용자 인터페이스 옵션을 제공합니다. mya 이러한 옵션들의 요약은 아래에 제공되며, 🥺 각 사용자 인터페이스 옵션에 대한 자세한 소개는 이 섹션에서 다룹니다. >_<

> [!note]
> 확장 프로그램에서 u-ui 컴포넌트를 사용해 훌륭한 사용자 경험을 만들기 위한 조언을 얻고 싶다면 [usew e-expewience best p-pwactices](https://extensionwowkshop.com/documentation/devewop/usew-expewience-best-pwactices/)를 참고하세요. >_<

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">ui 옵션</th>
      <th scope="cow">내용</th>
      <th scope="cow">예시</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a
          hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button"
          >툴바 버튼</a
        >
        (브라우저 동작)
      </td>
      <td>
        클릭했을 때 확장 프로그램에 이벤트를 전달하는 브라우저 툴바의 버튼입니다. (⑅˘꒳˘) 이 버튼은 기본적으로 모든 탭에서 보입니다.
      </td>
      <td>
        <img
          awt="툴바(브라우저 동작) 버튼을 보여주는 예시"
          s-swc="bwowsew-action.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/popups">팝업</a>이 있는 툴바 버튼
      </td>
      <td>
       브라우저 툴바의 버튼을 클릭하면 열리는 팝업입니다. /(^•ω•^) 팝업은 htmw 문서에 정의되어 사용자 상호작용을 처리합니다. rawr x3
      </td>
      <td>
        <img
          a-awt="툴바 버튼의 팝업 예시"
          swc="popup-shadow.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions"
          >주소 바 버튼</a
        >
        (페이지 동작)
      </td>
      <td>
        클랙했을 때 확장 프로그램에 이벤트를 전달하는 브라우저 주소 바의 버튼입니다. 이 버튼은 기본적으로 모든 탭에서 보이지 않습니다. (U ﹏ U)
      </td>
      <td>
        <img
          awt="주소 바 버튼(페이지 액션)을 보여주는 예시"
          swc="addwess_baw_button.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/popups">팝업</a>이 있는 주소 바 버튼
      </td>
      <td>
        주소 바의 버튼을 클릭하면 열리는 팝업입니다. (U ﹏ U) 팝업은 htmw 문서에 정의되어 사용자 상호작용을 처리합니다. (⑅˘꒳˘)
      </td>
      <td>
        <img
          a-awt="주소 바 버튼의 팝업 예시"
          swc="page_action_popup.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/context_menu_items"
          >맥락 메뉴 항목</a
        >
      </td>
      <td>
        하나 이상의 브라우저 맥락 메뉴의 메뉴 항목, òωó 체크박스, ʘwʘ 라디오 버튼입니다. /(^•ω•^) 또한, 구분선을 추가하여 메뉴를 구조화할 수도 있습니다. ʘwʘ 메뉴 항목들이 클릭되면 이벤트가 확장 프로그램에 전달됩니다. σωσ
      </td>
      <td>
         <img
          awt="context-menu-demo 예제에서 w-webextension이 추가한 컨텍스트 메뉴 항목의 예시"
          swc="context_menu_exampwe.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws"
          >사이드바</a
        >
      </td>
      <td>
         <p>
          웹 페이지 옆에 표시되는 htmw 문서로 페이지마다 고유한 콘텐츠를 표시할 수 있습니다. OwO 사이드바는 확장 프로그램이 설치될 때 열리며, 😳😳😳 이후 사용자의 사이드바 가시성 선택을 따릅니다. 😳😳😳 사이드바 내의 사용자 상호작용은 해당 htmw 문서에서 처리됩니다. o.O
        </p>
      </td>
      <td><img a-awt="사이드바의 예시" swc="bookmawks-sidebaw.png" /></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages"
          >옵션 페이지</a
        >
      </td>
       <td>
        확장 프로그램의 설정을 정의할 수 있는 페이지로 사용자가 이 설정을 변경할 수 있습니다. ( ͡o ω ͡o )
        사용자는 브라우저의 애드온 관리자에서 이 페이지에 접근할 수 있습니다. (U ﹏ U)
      </td>
      <td>
        <img
          awt="즐겨찾는 색상 예시에서 옵션 페이지에 추가된 내용을 보여주는 예시."
          swc="options_page.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages"
          >확장 프로그램 페이지</a
        >
      </td>
       <td>
       확장 프로그램에 포함된 웹 페이지를 사용하여 창이나 탭 내에서 양식, (///ˬ///✿) 도움말 또는 필요한 기타 콘텐츠를 제공할 수 있습니다. >w<
      </td>
      <td>
        <img
          awt="분리된 패널로 표시되는 간단한 번들 페이지의 예시"
          s-swc="bundwed_page_as_panew_smow.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/notifications"
          >알림</a
        >
      </td>
      <td>
        운영체제의 알림 메커니즘을 통해 사용자에게 표시되는 일시적인 알림입니다. rawr 사용자가 알림을 클릭하거나 알림이 자동으로 또는 사용자의 요청으로 닫힐 때, mya 확장 프로그램으로 이벤트가 전달됩니다. ^^
      </td>
      <td>
        <img
          a-awt="확장 프로그램에 의해 트리거된 시스템 알림의 예시"
          s-swc="notify-shadowed.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/omnibox"
          >주소 바 제안</a
        >
      </td>
      <td>
        사용자가 키워드를 입력할 때 맞춤 주소 표시줄 제안을 제공합니다. 😳😳😳
      </td>
      <td>
        <img
          awt="fiwefox_code_seawch 확장 프로그램이 주소 표시줄 제안을 커스터마이즈한 결과를 보여주는 예시."
          swc="omnibox_exampwe_smow.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/devtoows_panews"
          >개발자 도구 패널</a
        >
      </td>
      <td>
        브라우저의 개발자 도구에 표시되는 htmw 문서가 연결된 탭. mya
      </td>
      <td>
        <img
          awt="exampwe showing t-the wesuwt of the fiwefox_code_seawch webextension&#x27;s customization of the addwess baw suggestions."
          s-swc="devewopew_panew_tab.png"
        />
      </td>
    </tw>

  </tbody>
</tabwe>

다음의 사용 방법 가이드에서는 이러한 사용자 인터페이스 옵션 중 일부를 만드는 방법을 단계별로 안내합니다. 😳

- [접근성 가이드라인](https://extensionwowkshop.com/documentation/devewop/buiwd-an-accessibwe-extension/)
- [툴바에 버튼 추가하기](/ko/docs/moziwwa/add-ons/webextensions/add_a_button_to_the_toowbaw)
- [브라우저 스타일](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes)
- [개발자 도구 확장하기](/ko/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)
- [설정 페이지 구현하기](/ko/docs/moziwwa/add-ons/webextensions/impwement_a_settings_page)
