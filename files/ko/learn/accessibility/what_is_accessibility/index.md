---
title: What is accessibility?
slug: Learn/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 3f24b87ec5ef32a046aa9cabd19a4ced0041385c
---

{{LearnSidebar}}

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

이 글에서는 접근성이 실제로 무엇인지 자세히 살펴보기로 합니다. 웹 개발에서 고려해야 할 사용자 그룹, 다양한 사람들이 웹과 상호 작용하기 위해 사용하는 도구들, 그리고 개발 워크 플로우에 접근성을 포함시키는 방법에 대한 내용을 다룹니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>기본적인 컴퓨터 사용 능력, HTML과 CSS에 대한 기본적인 이해.</td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        접근성과 친해지기. 접근성이 무엇이고 웹 개발자에게 어떤 영향을 미치는지 알아보기.
      </td>
    </tr>
  </tbody>
</table>

## 그렇다면 접근성이란 무엇일까요?

접근성은 가능한 한 많은 사람이 웹 사이트를 사용할 수 있도록 하는 방법입니다. 통상적으로 장애인만을 대상으로 한다고 생각하지만, 실제로는 모바일 장치나 느린 네트워크 연결을 사용하는 사람들 등 다른 사용자들에게도 도움을 줍니다.

접근성을 모든 사람을 동일하게 대하고, 그들의 능력이나 상황에 상관 없이 그들에게 같은 기회를 주는 것으로 생각할 수도 있습니다. 현대의 공공 건물에는 일반적으로 휠체어 경사로나 엘리베이터가 있습니다. 휠체어를 타고있다는 이유로 누군가를 물리적 건물에서 제외시키는 것이 옳지 않기 때문입니다. 같은 맥락에서 시각 장애가 있다는 이유로 누군가를 웹 사이트에서 제외시키는 것도 옳지 않습니다. 우리 모두는 다르지만 인간으로서 동일한 권리를 가집니다.

접근성은 당연히 지켜져야 할 일입니다. 일부 국가에서는 법의 일부이기도 하며, 이것은 서비스 사용이나 제품 구매가 불가능했던 사람들을 불러모아 중요한 시장을 만들 수 있다는 것을 의미합니다.

접근성을 갖춘 웹 사이트를 만드는 일은 다음과 같이 모든 사람에게 도움이 될 수 있습니다.

- 접근성이 향상된 시맨틱 HTML은 SEO도 개선해 사이트를 찾기 쉽고 시장성 있게 해줍니다.
- 접근성을 고려하는것은 좋은 윤리와 도덕 관념을 보여 주는데, 이것은 서비스의 대중적인 이미지를 개선합니다.
- 접근성을 향상시키려는 좋은 노력은 당신의 사이트를 다른 여러 사용자가 사용하기 쉽게 만듭니다. 휴대폰 사용자, 낮은 네트워크 속도의 사용자 등이 포함됩니다.
- 일부 지역에서는 법적으로 규정되어 있다고도 언급하지 않았나요?

## 우리가 살펴볼 장애 유형은 무엇일까요?

장애가 있는 사람들은 그렇지 않은 사람들만큼 다양하고 그들의 장애 역시 그렇습니다. 여기서 중요한 교훈은 당신의 컴퓨터, 그리고 당신이 웹을 사용하는 방식을 넘어서 생각하는 방법에 대해 배우는 것입니다. 당신이 아닌 유저, 다른 사람들이 그것을 어떻게 사용하는지에 대해서 말이죠.

아래에는 생각해보아야 하는 장애의 주요 유형들이 설명되어 있습니다. 웹 콘텐츠에 접근하기 위해 사용하는 특별한 도구가 있다면 함께 살펴보겠습니다. 이런 도구들은 보조 기술(**assistive technologies**, 또는 **ATs**)이라고 불립니다.

> **참고:** 세계 보건 기구(WHO)의 [장애 및 보건 현황 보고서](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health)에 따르면 전 세계 인구의 약 15%에 해당하는 10억명 이상의 사람들이 장애를 갖고 있으며 1억 1천만명에서 1억 9천만명 사이의 성인들이 심각한 장애를 갖고 있습니다.

### 시각 장애가 있는 사람

여기에는 전맹, 저시력 장애인 및 색각 장애인등이 포함됩니다. 많은 경우 물리적 돋보기나 소프트웨어의 확대 기능을 통해 화면을 확대해서 이용합니다. 요즘에는 대부분의 브라우저와 운영체제가 확대 기능을 제공합니다. 일부 사용자는 디지털 텍스트를 소리내어 읽어주는 소프트웨어인 스크린 리더(screen reader)를 사용합니다. 이런 예시들이 있습니다.

- [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) and [Dolphin Screen Reader](https://yourdolphin.com/en-gb/products/individuals/screen-reader) (Windows) 와 [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows) 같은 상업 소프트웨어
- [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome), 그리고 [Orca](https://wiki.gnome.org/Projects/Orca) (Linux)와 같은 무료 소프트웨어
- [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://www.chromevox.com/) (on Chrome OS), 그리고 [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android)와 같은 OS 자체 소프트웨어

이런 스크린 리더에 익숙해지기를 권장합니다. 직접 설치하고 다루어보면서 어떻게 동작하는지 감을 익혀보면 좋습니다. [Cross-browser testing screen readers guide](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders)에서 사용 방법에 대한 더 자세한 내용을 확인할 수 있습니다. 아래의 영상에서도 이 경험에 대한 간단한 예시를 보여줍니다.

{{EmbedYouTube("IK97XMibEws")}}

통계적으로 세계 보건 기구(WHO)는 "전 세계적으로 2억 8,500만 명이 시각 장애를 가진 것으로 추정되고, 그 중 3,900만 명이 맹인이고 2억 4,600만 명이 저시력자이다." 라고 추정합니다. ([Visual impairment and blindness](http://www.who.int/mediacentre/factsheets/fs282/en/) 참고) 이것은 미국 인구와 비슷한 크기를 가진 중요한 비중의 인구입니다. 당신의 사이트는 제대로 코딩되지 않았다는 이유만으로 이 사용자들을 놓칠 수 있습니다.

### 청각 장애가 있는 사람

[청각 장애 및 난청 (Deaf and hard-of-hearing, DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) 사람들은 경도에서 심도까지 다양한 수준의 난청을 가지고 있습니다. 이들 중 일부는 보조 기술(AT, [청각, 음성, 언어 장애가 있는 사람들을 위한 보조 장치](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders) 참고)을 사용하지만 보편적이지는 않습니다.

따라서 접근성을 위해서는 대체 텍스트가 제공되어야 합니다. 영상에는 수동으로 자막을 달고 오디오 콘텐츠에 대해서도 대본을 제공해야 합니다. 또, DHH 인구의 높은 [언어 박탈 (language deprivation)](https://www.notion.so/6673cd1146724a14aa4f009c6b05af9c))을 고려해 [텍스트 단순화](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/)가 필요할 수 있습니다.

청각 장애 및 난청 인구도 의미있는 비중을 차지하는 유저입니다. 세계 보건 기구(WHO)의 [Deafness and hearing loss](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss) fact sheet에 따르면 전 세계 4억 6,600만 명의 사람들이 난청을 겪고 있습니다.

### 운동 장애가 있는 사람

운동 장애(mobility impairments)는 사지의 상실이나 마비 등 물리적인 원인 또는 신경학적/유전적인 장애에 기인하는 팔 다리 통제력의 약화/상실로 인해 움직임에 제약이 생기는 것입니다. 이런 사람들은 마우스를 사용하기 위해 필요한 정교한 손의 움직임이 어려울 수도 있고, 심각한 경우 컴퓨터와의 상호작용을 위해 [헤드 포인터](https://www.performancehealth.com/adjustable-headpointer)를 사용해야 할 정도로 마비가 진행되었을 수도 있습니다.

이런 장애의 원인은 특정한 트라우마나 질병이 아닐 수도 있습니다. 노화가 될 수도 있고, 마우스가 없는 사용자처럼 하드웨어의 제약이 될 수도 있습니다.

운동 장애를 고려한 웹 개발의 보편적인 요구 사항은 키보드를 통해 컨트롤(이 가능한 요소들)에 접근할 수 있도록 해야 한다는 것입니다. 이 과정의 다른 아티클에서 키보드 접근성에 대해 이야기하겠지만, 웹 사이트를 키보드만으로 사용하는 일을 한번 해보세요. 어떻게 될까요? Tab 키를 사용해 웹 form의 컨트롤 요소들을 왔다갔다 할 수 있나요? 키보드 컨트롤에 관련된 더 많은 이야기는 [Cross browser testing Using native keyboard accessibility](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility) 섹션에서 다루어집니다.

통계적으로도 많은 수의 사람들이 운동 장애를 가지고 있습니다. US Centers for Disease Control and Prevention의 [Disability and Functioning (Non-institutionalized Adults 18 Years and Over)](https://www.cdc.gov/nchs/fastats/disability.htm)에 따르면 미국에서 신체 기능 장애가 있는 성인 비율은 16.1%입니다.

### 인지 장애가 있는 사람

인지 장애의 정의는 광범위합니다. 가장 제한된 인지 능력을 가지는 지적 장애부터 시작해, 나이가 들며 생각하고 기억하는 데 어려움을 느끼는 우리 모두를 가리키기도 합니다. [우울증](https://www.nimh.nih.gov/health/topics/depression)이나 [정신분열증](https://www.nimh.nih.gov/health/topics/schizophrenia) 같은 정신 질환 그리고 [난독증](https://www.ninds.nih.gov/health-information/disorders/learning-disabilities), [ADHD](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd) 같은 학습 장애도 포함합니다. 인지 장애에 대한 임상적인 정의는 다양하지만, 중요한 것은 모두가 공통적으로 겪는 기능 문제가 있다는 것입니다. 예를 들어 콘텐츠를 제대로 이해하거나 작업을 완료하는 방법을 기억하는 과정에서 발생하는 어려움과 일관성 없는 웹 페이지의 레이아웃으로 발생하는 혼란이 있습니다.

인지 장애를 고려한 접근성의 좋은 기반은 다음과 같습니다.

- 콘텐츠를 하나 이상의 방식으로 제공합니다. 텍스트-음성 변환 또는 비디오 등의 방법을 사용할 수 있습니다.
- 표준 문법을 지켜 작성된 텍스트처럼 쉽게 이해할 수 있는 콘텐츠를 제공합니다.
- 중요한 콘텐츠에는 주의가 집중될 수 있도록 합니다.
- 불필요한 내용이나 광고처럼 산만한 요소들을 최소화합니다.
- 일관된 웹 페이지 레이아웃과 네비게이션을 사용합니다.
- 방문하지 않은 경우 파란색, 방문한 경우는 보라색 밑줄이 그어지는 링크처럼 친숙한 요소를 사용합니다.
- 프로세스를 논리적이고 중요한 단계로 나누어서 생각할 수 있게 진행 상황을 표시해주는 장치를 사용합니다.
- 보안과 타협하지 않는 선에서 웹 사이트 인증은 가능한 쉽게 구현합니다.
- 양식은 완성하기 쉽게 만듭니다. 에러는 명확한 메세지를 보여주고 간단하게 복구되어야 합니다.

### 참고

- [인지적 접근성](/ko/docs/Web/Accessibility/Cognitive_accessibility)을 고려한 디자인은 좋은 디자인입니다. 모든 사람들에게 이점을 제공합니다.
- 많은 경우 인지 장애는 신체 장애를 동반합니다. 웹 사이트는 [인지적 접근성 가이드라인](/ko/docs/Web/Accessibility/Cognitive_accessibility#wcag_guidelines)을 포함해 W3C의 [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)를 준수해야 합니다.
- W3C의 [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/)에서 인지 장애가 있는 사람들을 위한 웹 접근성 가이드를 제공합니다.
- WebAIM [Cognitive page](https://webaim.org/articles/cognitive/)에서 관련 정보와 자료를 제공합니다.
- 미국 질병통제센터(The United States Centers for Disease Control)는 2018년 기준으로 미국 시민 4명 중 1명이 장애를 가지고 있으며, 그 중에서 [인지 장애는 젊은 사람들에게서 가장 흔하다](https://www.cdc.gov/media/releases/2018/p0816-disability.html)고 추정합니다.
- 미국에서 역사적으로 일부 지적 장애가 "정신 지체(mental retardation)"라고 불려왔습니다. 현재는 혐오 표현으로 생각되어 사용을 권장하지 않습니다.
- 영국에서 일부 지적 장애는 "학습 장애(learning disabilities 또는 learning difficulties)"로 불리기도 합니다.

## 프로젝트에 접근성 구현하기

실제 프로젝트 구현 단계에서 접근성은 "비싼 추가 사항"으로 간주되는 경우가 많은데, 아래와 같은 경우에는 사실이 될 수 있습니다.

- 심각한 접근성 이슈가 있는 기존의 웹 사이트에 접근성을 추가하며 개조하려고 하는 경우
- 프로젝트가 한참 진행된 뒤에야 접근성을 고려하며 관련된 이슈들을 발견한 경우

하지만, 프로젝트를 시작할 때부터 접근성을 고려한다면 대부분의 콘텐츠를 접근성있게 만드는 데에 드는 비용은 꽤 적습니다.

프로젝트 계획을 세울 때, 대상 데스크탑이나 모바일 브라우저와 같은 중요한 타겟 오디언스 세그먼트를 위한 테스팅과 함께 접근성 테스팅을 고려하세요. 빠르게, 자주 테스트하세요. 이상적인 방식은 자동화된 테스트를 통해 누락되어 있는 접근성 관련 기능들(예를 들어 이미지의 [대체 텍스트](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Text_alternatives)나 잘못된 링크 텍스트. [Element relationships and context](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Element_relationships_and_context)를 참고하세요)을 잡아내는 것입니다. 또, 장애가 있는 유저 그룹을 대상으로 일부 테스팅을 진행하며 그들이 복잡한 사이트 기능을 얼마나 잘 활용할 수 있는지 확인할 수 있습니다. 다음과 같은 기준을 사용할 수 있습니다.

- 날짜 선택 위젯은 스크린 리더에서 사용성이 있나요?
- 동적으로 업데이트되는 콘텐츠를 시각 장애인도 인지할 수 있나요?
- UI 버튼들이 키보드와 터치 인터페이스 유저들 모두에게 접근성을 제공하나요?

접근성을 위한 작업이 필요한 잠재적 문제 영역에 대해 기록하고, 철저하게 테스팅 될 수 있도록 하며 해결 방안과 대안을 생각해야 합니다. 텍스트 콘텐츠는 (다음 아티클에서 살펴볼 것처럼) 쉬운 편이지만, 멀티미디어 콘텐츠나 최신 3D 기술로 만들어진 그래픽들은 어떻게 해야할까요? 프로젝트 예산을 고려해 이런 콘텐츠들을 접근성 있게 만들기 위해서 어떤 일을 할 수 있는지 생각해보세요. 비용은 많이 들겠지만 모든 멀티미디어에 대해 다른 형태의 기록, 음성 등을 제공하는 것도 가능합니다.

동시에 현실적으로 생각하세요. "100% 접근성"은 실현 불가능한 이상입니다. 언제나 예외가 존재하고 어떤 사용자는 어떤 콘텐츠를 사용하기 어렵다고 느낄 것입니다. 하지만 할 수 있는 만큼 노력해야 합니다. 만약 WebGL을 사용해 멋진 3D 파이 차트 그래픽을 만들 계획이라면, 같은 데이터에 대한 데이터 테이블을 접근성 있는 형태로 포함할 수 있습니다. 또는 3D 파이 차트를 테이블로 대체할 수도 있겠습니다. 테이블은 모두에게 접근성 있으며, 더 빠르게 개발 가능하고, CPU 집약적이지도 않으며 유지보수도 더 쉽습니다.

반면에 흥미로운 3D 아트를 전시하는 갤러리 웹사이트를 작업하고 있다면, 모든 작품이 전적으로 시각적인 매체이므로 시각 장애인에게 완벽한 접근성을 제공하기는 어려울 것입니다.

당신이 접근성에 대해 고민하고 생각하고 있다는 것을 드러내기 위해서는 사이트에 접근성 설명을 발행하는 것이 좋습니다. 접근성에 대한 당신의 정책과 어떤 노력을 기울였는지 게시해두세요. 누군가 사이트에서 접근성 문제를 발견했다고 알려준다면, 공감하며 대화하고 문제 해결을 위해 합리적인 절차를 거치세요.

> **참고:** [Handling common accessibility problems article](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) 에서 보다 세부적으로 테스트 되어야 하는 접근성에 대해 다룹니다.

요약하자면,

- 프로젝트 초기부터 접근성을 고려하고, 빠르게 자주 테스트하세요. 접근성 문제도 다른 버그들과도 마찬가지로 늦게 발견될수록 더 많은 비용이 발생합니다.
- 좋은 접근성은 장애인 사용자 뿐만 아니라 모든 사용자들에게 도움이 된다는 것을 기억하세요. 예를 들어, 간결한 시맨틱 마크업은 스크린 리더에게 좋을 뿐만 아니라 빠르게 로드되고 성능이 좋습니다. 특히 모바일이나 느린 네트워크 환경의 사용자 경험을 향상시킵니다.
- 사이트에 접근성 성명을 게시하고 문제를 겪는 사람들과 소통하세요.

## 접근성 지침 및 법률

접근성 테스트를 위한 가이드로 사용할 수 있는 체크리스트와 가이드라인들은 언뜻 보기에 압도적으로 많아 보입니다. 우리의 조언은 당신이 신경써야 하는 가장 기본적인 영역에 익숙해지는 것이 좋다는 것입니다. 물론 관련된 가이드라인의 고차원적인 구조들을 이해하는 것도 필요합니다.

- 우선 W3C에서 아주 길고 디테일한 문서를 발행했습니다. 여기에서 접근성 적합성에 대해 상세하고 사용 기술에 구애받지 않는 기준을 제시합니다. [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG)라고 불리는 이 문서는 간단하게 읽어지지는 않습니다. 기준은 네 개의 메인 카테고리로 나뉘고, 구현을 인식 가능하게, 작동 가능하게, 이해 가능하게, 또 견고하게 만드는 방법을 설명합니다. 가벼운 소개를 읽고 학습을 시작하기 좋은 곳은 [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) 입니다. WCAG의 모든 기준을 배울 필요는 없습니다. 주요 관심 분야에 대해 인지하고, WCAG 기준을 충족시키지 못하는 영역을 하이라이트 해주는 다양한 기술과 도구를 사용하세요 (아래쪽에 더 설명되어 있습니다).
- 당신의 국가에 웹 사이트의 접근성 제공 필요성에 대한 법률이 있을 수도 있습니다. 예를 들어 EU의 [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf), 미국의 [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/), 독일의 [Federal Ordinance on Barrier-Free Information Technology](https://www.einfach-fuer-alle.de/artikel/bitv_english/), 영국의 [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made), 이탈리아의 [Accessibilità](https://www.agid.gov.it/it/design-servizi/accessibilita), 호주의 [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver) 등이 있습니다. WC3에서 나라 별로 [웹 접근성 법률 및 정책](https://www.w3.org/WAI/policies/) 목록을 관리하고 있습니다.

WCAG는 가이드라인일 뿐이지만 당신의 국가에 웹 접근성, 또는 대중을 상대로 한 서비스의 접근성에 대한 법률이 있을 것입니다. 당신에게 적용되는 법이 무엇인지 알아보는 것을 권장합니다. 접근성을 위해 노력하지 않으면 사람들이 불만을 제기할 경우 법적인 책임이 생길 수 있습니다.

심각하게 들리겠지만, 지금까지 설명한 것처럼 웹 개발에 있어서 접근성을 정말로 주된 우선순위로 고려하세요. 잘 모르겠다면 자격을 갖춘 변호사에게 조언을 구하세요. 우리는 변호사가 아니기 때문에 이 이상의 조언은 드리지 않겠습니다.

## 접근성 API

웹 브라우저는 보조 기술(AT)에 유용한 정보를 드러내는 운영체제의 **접근성 API**를 활용합니다. 보조 기술은 대부분 시맨틱 관련 정보를 사용하므로 여기에는 스타일 정보나 JavaScript 같은 것들이 포함되지 않습니다. 이 정보들은 **접근성 트리**라고 불리는 트리로 구조화됩니다.

각각의 운영체제는 다른 접근성 API를 사용합니다.

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

웹 앱의 HTML 요소들이 제공하는 네이티브 시맨틱 정보가 부족한 경우는 접근성 트리에 시맨틱 정보를 추가해 접근성을 개선하는 [WAI-ARIA 명세서](https://www.w3.org/TR/wai-aria/)의 기능들로 보완이 가능합니다. 이 과정의 [WAI-ARIA basics](/ko/docs/Learn/Accessibility/WAI-ARIA_basics)에서 더 많은 내용을 설명합니다.

## 요약

이 문서에서는 접근성에 대한 고차원적인 개요를 제공했습니다. 이것이 왜 중요한지, 워크플로우에 어떻게 적용할 수 있을지 살펴봤습니다. 이제 접근성있는 사이트를 만들기 위해서 어떤 구현 디테일이 필요한지 궁금할텐데요. 이 과정을 통해 배울 수 있을 것입니다. 다음 섹션에서는 왜 HTML이 접근성을 위한 좋은 토대가 되는지 살펴보며 그 과정을 시작하겠습니다.

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}
