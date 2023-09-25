---
title: Tree shaking
slug: Glossary/Tree_shaking
page-type: glossary-definition
---

{{GlossarySidebar}}

**트리 셰이킹**은 자바스크립트 맥락에서 데드 코드 제거를 설명하기 위해 일반적으로 사용되는 용어입니다.

[import](/ko/docs/Web/JavaScript/Reference/Statements/import) 및 [export](/ko/docs/Web/JavaScript/Reference/Statements/export) 문을 사용하여, JavaScript 파일에서 사용하기 위한 코드 모듈을 내보내고 가져오는 것을 감지합니다.

최신 JavaScript 애플리케이션에서는 모듈 번들러(에: [webpack](https://webpack.js.org/) 또는 [Rollup](https://github.com/rollup/rollup))를 사용하여 여러 JavaScript 파일을 단일 파일로 번들링할 때, 데드 코드를 자동으로 제거합니다. 이는 프로덕션에 바로 사용할 수 있는 코드를 준비하는 데 중요한 작업으로, 깔끔한 구조와 최소한의 파일 크기로 코드를 최적화하는데 도움이 됩니다.

## 같이 보기

- ["Benefits of dead code elimination during bundling"](https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling) in Axel Rauschmayer's book: "Exploring JS: Modules"
- [Tree shaking implementation with webpack](https://webpack.js.org/guides/tree-shaking/)
