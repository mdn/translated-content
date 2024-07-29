---
title: 최초 입력 지연 (First input delay, FID)
slug: Glossary/First_input_delay
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**최초 입력 지연 (First input delay, FID)** 은 사용자가 사이트와 처음 상호작용할 때(예, 링크를 클릭 또는 버튼을 탭하거나 사용자 정의 JavaScript 기반 컨트롤 UI를 사용할 때)부터 실제로 해당 상호작용에 응답할 수 있는 시간까지 측정합니다.

웹 페이지에서 첫 번째 사용자와의 상호작용과 해당 상호 작용에 대한 브라우저의 응답 사이의 시간(밀리초)입니다. 스크롤 및 확대/축소는 이 측정 부분에 포함되지 않습니다.

콘텐츠가 페이지에 그려지는 시점과 모든 기능이 사람과의 상호작용에 반응하는 시점 사이의 시간은 메인 스레드에서 다운로드, 구문 분석 및 실행해야 하는 JavaScript의 크기와 복잡성 및 장치 속도에 따라 달라지는 경우가 많거나 부족합니다(저사양 모바일 장치를 생각해보세요). 지연 시간이 길어질수록, 사용자 경험은 더욱 안 좋아집니다. 사이트 초기화 시간을 줄이고 [시간이 오래 걸리는 작업](/ko/docs/Web/API/PerformanceLongTaskTiming)을 제거하면 최초 입력 지연을 제거하는 데 도움이 될 수 있습니다.

## 같이 보기

- [requestIdleCallback](/ko/docs/Web/API/Window/requestIdleCallback)
- [지연 로딩](/ko/docs/Web/Performance/Lazy_loading)
