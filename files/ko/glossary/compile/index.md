---
title: Compile
slug: Glossary/Compile
---

컴파일(Compile)은 주어진 {{Glossary("computer programming", "language")}}로 작성된 컴퓨터 프로그램을 다른 언어의 동등한 프로그램으로 변환하는 프로세스입니다. 컴파일러는이 작업을 실행하는 소프트웨어입니다. 때로는이 작업을 "조립(assembling)"또는 "빌드(build)"라고도 합니다. 이 작업들은 보통 컴파일과 같은 것(예를 들면 바이너리 형식으로 패키지를 만드는 일) 이상의 작업을 수행합니다 .

일반적으로 컴파일러는 C 또는 {{Glossary("Java")}} 와 같은 고급 언어를 CPU가 이해할 수 있는, 즉 어셈블리어와 같은 기계 언어로 변환합니다. 유사한 수준의 언어 사이에서 번역하는 일부 컴파일러를 트랜스파일러 또는 크로스 컴파일러 라고 합니다. 예를 들어 TypeScript에서 {{Glossary("JavaScript")}}로 컴파일합니다. 그것들은 생산성 도구로 간주됩니다.

대부분의 컴파일러는 선행(AOT) 또는 적기(JIT)로 작업한다. 프로그래머로서, 당신은 보통 커맨드 라인이나 당신의 {{Glossary("IDE")}}에서 AOT 컴파일러를 호출한다. 가장 유명한 'gcc'가 그 한 예다.

JIT compilers are usually transparent to you, used for performance. For instance in the browser: Firefox' [SpiderMonkey](/ko/docs/Mozilla/Projects/SpiderMonkey) JavaScript Engine has a JIT built-in that will compile JavaScript in a website to machine code while you're viewing it so it runs faster. Projects like [WebAssembly](/ko/docs/WebAssembly) work on making this even better.

## 더 알아보기

### General knowledge

- Wikipedia의 [Compiler](https://en.wikipedia.org/wiki/Compiler)
- The [GNU Compiler Collection (GCC)](https://gcc.gnu.org)

### Learning resources

- [Base CS Introduction on Compilers](https://medium.com/basecs/a-deeper-inspection-into-compilation-and-interpretation-d98952ebc842)
- [A big list of learning material on StackOverflow](http://stackoverflow.com/a/1672/133203)
