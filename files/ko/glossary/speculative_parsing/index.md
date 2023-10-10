---
title: 예측 구문 분석 (Speculative parsing)
slug: Glossary/Speculative_parsing
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

전통적으로 브라우저에서 HTML 파서는 메인 스레드에서 실행되었으며 스크립트가 네트워크에서 검색되어 실행될 때까지 `</script>` 태그 다음에 차단되었습니다. Firefox 4 이후의 Firefox와 같은 일부 HTML 파서는 메인 스레드에서 예측 구문 분석을 지원합니다. 스크립트가 다운로드되고 실행되는 동안 미리 구문 분석을 합니다. HTML 파서는 스트림에서 미리 찾은 스크립트, 스타일 시트 및 이미지에 대한 예측 로드를 시작하고 예측에 따라 HTML 트리 구성 알고리즘을 실행합니다. 장점은 예측이 성공할 때 이미 스크립트, 스타일 시트 및 이미지를 검색한 수신 파일의 일부를 다시 분석할 필요가 없다는 것입니다. 단점은 예측이 실패할 때 손실되는 작업이 더 많다는 것입니다.

이 문서는 예측을 실패하게 만들고 페이지 로딩 속도를 늦추는 것을 방지하는 데 도움이 됩니다.

연결된 스크립트, 스타일 시트 및 이미지의 예측 로드를 성공적으로 수행하려면 {{domxref('document.write')}}를 피하세요. `<base>` 요소를 사용하여 페이지의 기본 URI를 재정의하는 경우 문서의 스크립트되지 않은 부분에 요소를 배치하세요. `<base>` 요소를 `document.write()` 또는 {{domxref('document.createElement')}}를 통해 추가하지 마세요.

## 트리 빌더 출력의 손실 방지

`document.write()`에 의해 삽입된 모든 콘텐츠가 구문 분석되었을 때 `</script>` 태그 뒤의 예측 상태가 더 이상 유지되지 않도록 `document.write()`가 트리 빌더 상태를 변경하면 예측 트리 작성이 실패합니다. 그러나, `document.write()`를 비정상적으로 사용하는 경우에만 문제가 발생합니다. 피해야 할 사항은 아래와 같습니다.

- 불균형한 트리를 사용하지 마세요. `<script>document.write("<div>");</script>`는 잘못되었습니다. `<script>document.write("<div></div>");</script>`는 사용해도 괜찮습니다.
- 완료되지 않은 토큰을 작성하지 마세요. `<script>document.write("<div></div");</script>`는 잘못되었습니다.
- 캐리지 리턴으로 글 작성을 마무리하지 마세요. `<script>document.write("Hello World!\r");</script>`는 잘못되었습니다. `<script>document.write("Hello World!\n");</script>`는 사용해도 괜찮습니다.
- 균형잡힌 태그를 작성하면 쓰기 불균형을 만드는 방식으로 다른 태그가 추론될 수 있습니다. 예, `head` 요소 내부의 `<script>document.write("<div></div>");</script>`는 불균형한 `<script>document.write("</head><body><div></div>");</script>`로 해석됩니다.
- 테이블의 일부를 서식화하지 마세요. `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>`는 잘못되었습니다.
