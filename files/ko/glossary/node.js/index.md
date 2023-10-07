---
title: Node.js
slug: Glossary/Node.js
l10n:
  sourceCommit: 70736395f85541545fc0b384f2d091e35cfeadae
---

{{GlossarySidebar}}

**Node.js**는 개발자가 서버 사이드 및 네트워크 응용 프로그램을 만들 수 있도록 지원하는 크로스 플랫폼 {{Glossary("JavaScript")}} 런타임 환경입니다.

## Node 패키지 매니저 (npm)

[npm](https://www.npmjs.com)은 Node.js와 함께 다운로드되어 번들로 제공되는 패키지 관리자입니다. 명령줄(CLI) 클라이언트 `npm`을 사용하여 Node.js 프로젝트에서 사용할 패키지를 다운로드, 구성 및 생성할 수 있습니다. 다운로드한 패키지는 종속성 디렉토리 `node_modules/`를 포함하지 않고 [ES imports](/ko/docs/Web/JavaScript/Reference/Statements/import)문 및 [CommonJS `require()`](https://en.wikipedia.org/wiki/CommonJS)문을 통해서 가져올 수 있습니다. Node.js는 패키지를 가져올 때 지정된 상대 또는 절대 경로 없이 패키지를 [확인](https://nodejs.org/api/modules.html#loading-from-node_modules-folders)하기 때문입니다.

npm에서 호스팅되는 패키지는 [https://registry.npmjs.org/](https://registry.npmjs.org/)의 레지스트리에서 다운로드되지만, 호환되는 인스턴스를 사용하도록 CLI를 구성할 수 있습니다.

## 같이 보기

- 위키백과 [Node.js](https://ko.wikipedia.org/wiki/Node.js)
- [Node.js 웹사이트](https://nodejs.org/)
- [API 참조 문서](https://nodejs.org/api/)
- [가이드](https://nodejs.org/en/docs/guides/)
- [npm 문서](https://docs.npmjs.com/)
