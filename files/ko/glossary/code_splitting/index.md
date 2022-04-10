---
title: Code splitting (코드분할)
slug: Glossary/Code_splitting
tags:
  - Glossary
  - Reference
  - Web Performance
  - code splitting
  - latency
---

**코드분할**은 번들한 여러 코드 혹은 컴포넌트를 분리하는 것입니다. 이렇게하면 필요에 따라 특정한 컴포넌트만 로딩하거나, 병렬로 로딩할 수 있습니다.

애플리케이션 복잡화나 유지 관리에 의해 CSS와 JavaScript 파일이나 번들이 커지며, 특히 포함하고 있는 서드파티 라이브러리 개수, 용량이 클수록 커집니다. 큰 파일을 다운로드하지 않도록 스크립트를 작게 여러 파일로 분할할 수 있습니다. 그렇게하면 화면 로딩할 때 필요한 기능은 바로 다운로드할 수 있으며, 추가 스크립트는 화면이나 애플리케이션 상호 작용시에 [지연 로딩](/ko/docs/Glossary/Lazy_load)해서 기능 향상할 수 있습니다. 코드 총량은 같지만(아마 파일 숫자나 용량은 늘어납니다.), 초기 로딩에 필요한 코드는 적어집니다.

코드분할은 [Webpack](https://webpack.js.org/)이나[Browserify](http://browserify.org/) 같이 번들 제공 기능으로 런타임에 동적으로 로딩하는 여러 번들을 만들 수 있습니다.

## See also

- Bundling
- [Lazy loading](/ko/docs/Web/Performance/Lazy_loading)
- [HTTP/2](/ko/docs/Glossary/HTTP_2)
- [Tree shaking](/ko/docs/Glossary/Tree_shaking)
