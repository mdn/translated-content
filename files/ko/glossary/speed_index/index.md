---
title: 스피드 인덱스 (Speed index, SI)
slug: Glossary/Speed_index
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**스피드 인덱스(Speed index, SI)** 는 페이지의 콘텐츠가 시각적으로 얼마나 빨리 채워지는지를 측정하는 페이지 로드 성능 측정항목입니다. 스피드 인덱스는 뷰포트의 크기에 따라 달라지며 밀리초 단위로 표시됩니다. 시간이 짧을수록 점수가 높아집니다.

스피드 인덱스는 다른 마일스톤 및 지표와 관련된 문제를 해결하고 실제 사용자 경험의 척도를 제공하기 위해 도입되었습니다. 스피드 인덱스는 [WebPageTest](https://github.com/WPO-Foundation/webpagetest-docs/blob/main/src/metrics/SpeedIndex.md) 및 [Lighthouse](https://github.com/paulirish/speedline)를 포함한 여러 일반적인 감사에서 구현되었습니다.

스피드 인덱스는 페이지가 시각적으로 완료될 때까지 100ms 간격으로 페이지의 시각적으로 완료된 비율을 계산합니다. 전체 점수는 화면이 시각적으로 완전하지 않은 비율을 초당 10회 개인의 비율로 합산한 것입니다.

페이즈 로드 이벤트 전에 스크롤 없이 볼 수 있는 콘텐츠가 어떻게 로드되고 스피드 인덱스로 측정되는지 보여주는 다이어그램입니다.
![SpeedIndex의 계산](speedindex.png)

## 같이 보기

- [웹 성능 배우기](/ko/docs/Learn/Performance)
