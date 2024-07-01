---
title: Compile
slug: Glossary/Compile
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**컴파일(Compiling)**은 주어진 {{Glossary("computer programming", "language")}}로 작성된 컴퓨터 프로그램을 다른 언어의 동등한 프로그램으로 변환하는 프로세스입니다. **컴파일러**는 이러한 작업을 실행하는 소프트웨어입니다.

때로는 이 작업을 "조립(assembling)"또는 "빌드(build)"라고도 합니다. 이 작업들은 보통 컴파일과 같은 것(예를 들면 바이너리 형식으로 패키지를 만드는 일) 이상의 작업을 수행합니다 .

일반적으로 컴파일러는 [C++](https://en.wikipedia.org/wiki/C++) 또는 [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) 또는 [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>)와 같은 고급 언어로 작성된 코드를 **이진 코드** or **기계 코드**라고 하는 실행 가능한(runnable) 코드로 변환합니다. 예를 들어, [WebAssembly](/ko/docs/WebAssembly)는 [C++, Rust, C#, Go, Swift, 다양한 언어로 작성된 코드를 컴파일 할 수 있는](https://webassembly.org/getting-started/developers-guide/) 실행 가능한 바이너리 코드 형식입니다. WebAssembly는 또한 모든 웹 페이지, 모든 브라우저에서 실행할 수 있습니다.

대부분의 컴파일러는 선행(AOT(Ahead-Of-Time)) 또는 적기(JIT(Just-In-Time))로 컴파일을 수행합니다.

GNU `gcc` 컴파일러는 AOT 컴파일러의 잘 알려진 예제입니다. AOT 컴파일러는 일반적으로 셸 환경 커멘드라인(터미널 또는 콘솔) 또는 {{Glossary("IDE")}} 내에서 호출됩니다.

JIT 컴파일러는 일반적으로 직접 호출되지 않지만, 성능 향상을 위해 내부적으로 소프트웨어 런타임에 내장됩니다. 예를 들어, 모든 주요 브라우저는 이제 JIT 컴파일러가 내장된 JavaScript 엔진을 사용합니다.

컴파일러는 또한 TypeScript에서 {{Glossary("JavaScript")}}로의 고급 언어로의 번역이 가능합니다. 이러한 경우에 컴파일러를 종종 **트랜스파일러** 라고 합니다.

## 같이 보기

- [C/C++을 WebAssembly로 컴파일하기](/ko/docs/WebAssembly/C_to_Wasm)
- [Rust를 WebAssembly로 컴파일하기](/ko/docs/WebAssembly/Rust_to_Wasm)
- 위키피디아: [컴파일러](https://en.wikipedia.org/wiki/Compiler)
