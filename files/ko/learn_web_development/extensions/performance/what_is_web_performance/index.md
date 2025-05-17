---
title: 웹 성능이란
slug: Learn_web_development/Extensions/Performance/What_is_web_performance
original_slug: Learn/Performance/What_is_web_performance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}

웹 성능은 웹 사이트를 빠르게 만드는 것과, 느린 프로세스를 빠르게 보이도록 만드는 것이 전부입니다. 사이트가 빠르게 로드되고 사용자가 사이트와 빠른 상호작용을 하도록 만드나요? 로드하는 데 오랜 시간이 걸리면 로딩 스피너 같은 재확인 피드백을 보여주나요? 스크롤과 애니메이션이 부드럽게 이뤄지나요? 이번 기사에서는 객관적으로 측정 가능한 웹 성능에 대한 간략한 소개를 하고 웹 최적화와 관련된 기술과 기법 및 도구를 살펴봅니다.

<table>
  <tbody>
    <tr>
      <th scope="row">선행 지식:</th>
      <td>
        <a
          href="/ko/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >기본 소프트웨어 설치</a
        >,
        <a href="/ko/docs/Learn_web_development/Getting_started/Your_first_website"
          >클라이언트 사이드 웹 기술들</a
        >의 기본적인 지식.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        웹 성능에 포함되는 요소들에 대한 기초적인 지식을 얻을 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

객관적인 성능과 달리, [인지된 성능](/ko/docs/Learn_web_development/Extensions/Performance/Perceived_performance)은 다음 기사에서 다루고 있습니다.

## 웹 성능이란

웹 성능은 웹 사이트 또는 애플리케이션의 객관적인 지표이고 인지된 사용자 경험입니다. 이는 다음과 같은 주요 내용을 포함합니다.

- **전체 로드시간 단축하기**: 사용자 컴퓨터로 웹 사이트를 렌더링하기 위해 필요한 파일을 다운로드 하는 데 시간이 얼마나 걸리나요? 이는 파일 크기, 파일 개수, [대기시간](/ko/docs/Web/Performance/Guides/Understanding_latency), 그 외 다른 요인에 의해 영향을 받습니다. 일반적인 개선 방법으로는 가능한 파일을 작게 만들고 HTTP 요청 수를 줄이고 가능한 파일을 바로 사용할 수 있도록 [preload](/ko/docs/Web/HTML/Reference/Attributes/rel/preload)와 같은 현명한 로딩 기법을 적용하는 것입니다.
- **사이트를 가능한 빨리 사용할 수 있도록 만들기**: 이는 기본적으로 웹 사이트 자원을 논리적인 순서로 로드하여 사용자가 빠른 이용을 할 수 있도록 합니다. 다른 자원은 사용자가 주요한 일을 할 동안 보이지 않는 곳에서 계속 로드될 수 있습니다. 그리고 자원이 실제로 필요할 때만 로드하는 경우도 있습니다. 이것을 [지연 로딩](/ko/docs/Web/Performance/Guides/Lazy_loading)이라고 합니다. 로딩을 시작한 이후로 사이트 이용이 가능하기까지 걸린 시간을 측정한 지표를 [Time to interactive (TTI)](/ko/docs/Glossary/Time_to_interactive)라고 합니다.
- **매끄러움과 상호작용**: 애플리케이션을 사용하는데 신뢰감과 즐거움을 느끼나요? 스크롤이 부드럽나요? 버튼을 누를 수 있나요? 팝업창이 빠르게 열리고 팝업 또한 부드럽게 동작하나요? 애플리케이션을 부드럽게 만드는 데는 여러 가지 좋은 예제가 있습니다. 예를 들어 애니메이션을 위해 JavaScript 대신 CSS를 사용하고 DOM 변경으로 인한 UI 리페인트의 횟수를 최소화 하는 것이 있습니다.
- **[인지된 성능](/ko/docs/Learn_web_development/Extensions/Performance/Perceived_performance)**: 웹 사이트가 사용자에게 얼마나 빠르게 보여지는 지 사용자는 웹 사이트가 실제로 빠른 것보다 사용자 경험에서 더 큰 인상을 받습니다. 인지된 성능은 주관적이고 측정하기 어렵지만 사용자가 성능을 어떻게 인지하는 지 다른 객관적인 지표보다 더 중요하게 여기는 경향이 있습니다. 인지된 성능은 측정 가능한 지표가 아닌 사용자 관점입니다. 대기시간이나 어떤 이유로 동작하는 데 오랜 시간이 걸린다면 로딩 스피너나 유용한 힌트, 조언, 농담 같은 적절하다고 생각하는 것을 보여줌으로써 사용자가 기다리도록 붙잡아 둘 수 있습니다. 이러한 접근은 아무 것도 보여주지 않는 것보다 좋습니다. 아무 것도 보여주지 않는 것은 더 오랜 시간이 걸리는 것처럼 느끼게 하고 사용자가 접속을 끊거나 포기하도록 생각하게 만들 수 있습니다.
- **[웹 성능 측정하기](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance)**: 웹 성능은 애플리케이션의 실제적이고 인지된 속도를 측정하고 가능한 부분에서 최적화를 하며 최적화한 상태가 유지되도록 성능을 모니터링 하는 것을 말합니다. 이 과정은 성공과 실패를 나타낼 수 있는 다양한 측정 가능한 지표와 지표를 측정하는 도구가 필요합니다. 그리고 이번 과정에서 측정항목과 도구에 대해 논의할 것입니다.

요약하자면, 대기시간, 애플리케이션 용량, DOM 노드 수, 자원 요청 수, JavaScript 성능, CPU 로드 등 많은 요소가 성능에 영향을 미칩니다. 로딩 시간과 응답 시간을 최소화 하고 오래 걸리는 부분은 비동기적으로 로딩하면서 가능한 빠른 경험과 상호작용을 제공함으로써 지연시간을 감출 수 있는 추가적인 기능을 넣는 것이 중요합니다.

> [!NOTE]
> 웹 성능은 로드 시간과 초당 프레임과 [time to interactive](/ko/docs/Glossary/Time_to_interactive) 같은 객관적인 지표와 콘텐츠 로드가 얼마나 오래 걸리는 지 느끼는 주관적인 경험을 모두 포함합니다.

## 콘텐츠는 어떻게 로드되는가

웹 성능, 그 뒤에 숨겨진 문제들, 그리고 위에서 언급한 주요한 주제를 효과적으로 이해하기 위해서, 브라우저가 어떻게 동작하는 지 구체적인 내용을 알아야 합니다. 다음과 같은 내용을 포함합니다.

- **브라우저는 어떻게 동작하는 가**. URL을 요청하고 <kbd>Enter</kbd> / <kbd>Return</kbd> 키를 누르면, 브라우저는 해당 웹 사이트 파일을 보유한 서버를 찾아 서버와 연결을 설정한 후 파일을 요청합니다. 자세한 사항은 [웹페이지를 표시한다는 것: 브라우저는 어떻게 동작하는가](/ko/docs/Web/Performance/Guides/How_browsers_work)에서 확인할 수 있습니다.
- **자원 순서**. HTML 인덱스 파일의 자원 순서는 성능에 크게 영향을 미칠 수 있습니다. 인덱스 파일에 연결된 추가적인 자원 다운로드는 일반적으로 자원 순서에 기반하여 순차적으로 이뤄지지만, 이 다운로드 순서는 조작될 수 있고 명확하게 최적화 되어야 합니다. 일부 자원은 콘텐츠가 파싱되고 실행될 때까지 추가적인 다운로드를 차단하는 점을 알아둬야 합니다.
- **중요 경로**. 중요 경로는 서버로부터 파일이 한 번 다운로드 된 이후 브라우저가 웹 문서를 구성하는 처리과정입니다. 브라우저는 잘 정의된 단계를 따라 진행합니다. 그리고 현재 사용자 행동과 관련된 콘텐츠를 우선적으로 표시하도록 주요한 렌더링 경로를 최적화 하면 콘텐츠 렌더링 시간이 크게 향상될 수 있습니다. 더 자세한 정보는 [중요 렌더링 경로](/ko/docs/Web/Performance/Guides/Critical_rendering_path)에서 확인해보세요.
- **문서 객체 모델**. 문서 객체 모델, DOM은 HTML의 콘텐츠와 요소를 트리 형태의 노드 구조로 나타냅니다. 여기에는 HTML 속성과 노드 간의 관계가 모두 포함됩니다. 페이지가 로드된 후에 노드를 추가, 삭제하거나 이동시키는 포괄적인 DOM 조작은 성능에 영향을 줄 수 있습니다. 따라서 DOM이 어떻게 동작하는 지, 이러한 문제를 어떻게 해결할 수 있는 지 이해하는 것은 중요합니다. [문서 객체 모델 (DOM)](/ko/docs/Web/API/Document_Object_Model)에서 확인해보세요.
- **대기시간**. 이전에 간단히 언급했듯이, 대기시간은 서버에서 사용자 컴퓨터로 웹 사이트 자원이 이동하는 데 걸린 시간입니다. TCP와 HTTP 연결을 설정하는 데는 오버헤드가 있으며, 네트워크를 통해 요청과 응답 바이트를 전송하는 동안 피할 수 없는 대기시간이 있습니다. 그러나 대기시간을 줄이는 몇 가지 방법이 있습니다. 예를 들어, 더 적은 파일을 다운로드 함으로써 HTTP 요청 수를 감소하는 것, 웹 사이트를 전 세계적으로 더 빠르게 제공하기 위해 CDN을 사용하는 것, 서버로부터 파일을 더 효율적으로 받기 위해 HTTP/2를 사용하는 방법이 있습니다. 대기시간에 대한 모든 내용은 [대기 시간(Latency) 이해하기](/ko/docs/Web/Performance/Guides/Understanding_latency)에서 확인할 수 있습니다.

## 결론

이 섹션에서 웹 성능에 대해 알아보았습니다. 이 개요가 웹 성능이 무엇인지 이해하는 데 도움이 되었기를 바라며, 더 알아보고 싶은 흥미를 불러 일으켰기를 바랍니다. 다음으로는, 인지된 성능에 대해 알아보고, 불가피한 성능 저하를 어떻게 사용자에게 덜 심하게 보이게 하고 완전히 숨기기 위해 사용할 수 있는 현명한 기법에 대해 알아보겠습니다.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}
