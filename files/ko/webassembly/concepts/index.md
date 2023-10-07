---
title: 웹어셈블리의 컨셉
slug: WebAssembly/Concepts
---

{{WebAssemblySidebar}}

본 글에서는 웹어셈블리의 작동원리 뒤에 숨어있는 컨셉을 설명함과 동시에 웹어셈블리의 목표, 웹어셈블리가 해결할 수 있는 문제, 그리고 웹브라우저 렌더링 엔진 안에서 웹어셈블리가 작동하는 원리에 관해 설명하려고 합니다.

## 웹어셈블리가 뭔가요?

WebAssembly는 최신 웹 브라우저에서 실행할 수 있는 새로운 유형의 코드이며 새로운 기능과 성능 면에서 큰 이점을 제공합니다. 직접 코드를 작성하는 것이 아니라 C, C ++, RUST 등의 저급 소스 언어를 효과적으로 컴파일하도록 고안되었습니다.

이는 웹 플랫폼에 큰 영향을 미칩니다. 이전에 불가능했던 웹에서 실행되는 클라이언트 응용 프로그램을 사용하여 웹에서 여러 언어로 작성된 코드를 네이티브에 가까운 속도로 실행하는 길을 제공합니다.

게다가 WebAssembly 코드를 사용하여 이를 활용하는 방법을 알 필요조차 없습니다. WebAssembly 모듈을 웹 (또는 Node.js) 앱으로 가져와 JavaScript를 통해 사용할 수 있도록 할 수 있습니다. JavaScript 프레임 워크는 WebAssembly를 사용하여 대규모 성능 이점과 새로운 기능을 제공하면서도 웹 개발자가 쉽게 기능을 사용할 수 있도록 할 수 있습니다.

## 웹어셈블리의 목표

웹어셈블리는 [W3C 웹어셈블리 커뮤니티 그룹](https://www.w3.org/community/webassembly/)에서 다음과 같은 목표들로 만들어지고 있는 열린 표준입니다:

- 빠르고, 효과적이고, 이식성이 좋을 것 — 웹어셈블리 코드는 [일반적인 하드웨어들이 제공하는 기능](http://webassembly.org/docs/portability/#assumptions-for-efficient-execution)을 활용하여 여러종류의 플랫폼 위에서 거의 네이티브에 가까운 속도로 실행될 수 있습니다.
- 읽기 쉽고 디버깅이 가능할 것 — 웹어셈블리는 저수준 어셈블리 언어지만, 손으로 작성하고, 보고, 디버깅할 수는 있도록, 사람이 충분히 읽을 수 있는 수준의 텍스트 포맷을 갖고있습니다 (아직 스펙이 다듬어지는 중이긴 합니다).
- 안전함을 유지할 것 — 웹어셈블리는 샌드박싱된 실행환경에서 안전하게 돌아갈 수 있도록 설계되었습니다. 웹상의 다른 코드와 마찬가지로, 웹어셈블리 코드도 브라우저의 동일한 출처(same-origin)와 권한정책을 강제할 것입니다.
- 웹을 망가뜨리지 않을 것 — 웹어셈블리는 다른 웹 기술과 마찰없이 사용되면서 하위호환성을 관리할 수 있도록 설계되었습니다.

> **참고:** 웹어셈블리는 웹과 자바스크립트 환경 밖에서도 사용될 것입니다. ([Non-web embeddings](http://webassembly.org/docs/non-web/) 참고).

## WebAssembly는 웹 플랫폼에 어떻게 적용될까요?

웹 플랫폼을 다음과 같이 두 부분으로 나눠서 생각해볼 수 있습니다:

- 자바스크립트같이 우리가 만든 앱을 구성하는 코드를 돌리는 가상머신(VM).
- 웹브라우저나 하드웨어의 기능을 호출해서 웹앱이 뭔가를 하도록 만들 수 있는 [Web API](/ko/docs/Web/API)의 집합 ([DOM](/ko/docs/Web/API/Document_Object_Model), [CSSOM](/ko/docs/Web/API/CSS_Object_Model), [WebGL](/ko/docs/Web/API/WebGL_API), [IndexedDB](/ko/docs/Web/API/IndexedDB_API), [Web Audio API](/ko/docs/Web/API/Web_Audio_API) 등등).

이전까지 웹브라우저의 VM은 오직 자바스크립트만 불러올 수 있었습니다. 오늘날의 웹에서 사람들이 겪는 대부분의 문제를 해결하기에 자바스크립트가 충분히 잘 작동했다고 볼 수 있기는 합니다. 하지만 3D 게임이나, 가상/증강현실, 영상처리, 이미지/비디오 편집, 그 외 네이티브 성능을 필요로하는 여러 분야의 사례([웹어셈블리 사용례](http://webassembly.org/docs/use-cases/) 참고)에서는 성능상의 문제에 부딪혀왔죠.

거기에 더해서 아주 큰 자바스크립트 애플리케이션을 다운받고 파싱하고 컴파일하는 비용은 감당하기 힘들 수가 있습니다. 모바일이라거나 다른 리소스가 많이 제한된 환경에서는 이런 성능병목현상이 더 두드러지게 나타나기도 합니다.

WebAssembly는 자바스크립트와는 다른 언어이지만, 자바스크립트를 대체하기 위해서 만들어지지는 않았습니다. 대신 자바스크립트와 나란히 돌아가면서 서로의 부족한 점을 보완하여 웹개발자가 두 언어의 강점을 동시에 취할 수 있도록 설계되었죠:

- 자바스크립트는 웹 애플리케이션을 작성하기에 좋은 유연하고 표현력 있는 고수준 언어입니다. 게다가 동적타입 언어라 컴파일 과정이 필요 없고, 강력한 프레임웍, 라이브러리, 여타 도구들을 제공하는 거대한 생태계 또한 갖고 있습니다.
- 웹어셈블리는 어셈블리같이 컴팩트한 바이너리 포맷을 갖고있는 저수준 언어로써 네이티브에 가까운 성능을 제공하기도 하고, C++이나 Rust같이 저수준의 메모리 모델을 가진 언어의 컴파일 타겟으로써 그런 언어로 작성된 프로그램을 웹에서 돌릴 수 있게 해줍니다. (참고로 웹어셈블리는 미래에 가비지콜렉션 메모리 모델을 가진 언어들을 지원할 [고수준 목표](http://webassembly.org/docs/high-level-goals/)도 갖고 있습니다.)

브라우저에 WebAssembly 가 등장하면서 앞에서 이야기했던 VM은 이제 JavaScript와 WebAssembly 두 가지 유형의 코드를 불러오고 실행합니다.

필요하면 다른 형식의 코드끼리 서로를 호출할 수도 있습니다 — [웹어셈블리 자바스크립트 API](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly)가 익스포트된 웹어셈블리 코드를 일반적으로 부를 수 있는 자바스크립트 함수로 감싸고, 웹어셈블리 코드에서도 동기적으로 일반 자바스크립트 함수를 호출할 수 있습니다. 사실 웹어셈블리의 기본 단위는 모듈이라고 불리고, 웹어셈블리 모듈은 여러모로 ES6 모듈과 대칭적입니다.

### 웹어셈블리의 핵심 컨셉

어떻게 웹어셈블리가 브라우저에서 돌아가는지 이해하기 위해서 필요한 몇가지 핵심 컨셉들이 있습니다. 이 모든 컨셉은 [웹어셈블리 자바스크립트 API](/ko/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly)에 반영돼있습니다.

- **모듈**: 실행 가능한 컴퓨터 코드로 브라우저에서 컴파일된 WebAssembly 바이너리입니다. 모듈은 stateless이며 [Blob](/ko/docs/Web/API/Blob)처럼 Windows와 [worker](/ko/docs/MDN/Doc_status/API/WebWorkers) 간에 [`postMessage()`](/ko/docs/Web/API/MessagePort/postMessage)를 통해 명시적으로 공유 할 수 있습니다. 모듈은 ES2015 모듈과 마찬가지로 가져오기 및 내보내기를 선언합니다.
- **메모리**: 웹어셈블리의 저수준 메모리 접근 명령어에 의해 읽고 쓰여지는 바이트들의 선형 배열인, 사이즈 조절이 가능한 어레이버퍼(ArrayBuffer)입니다.
- **테이블**: (안전성이나 이식성 등을 위해서) 날(raw) 바이트로 메모리에 저장될 수 없는 (예를 들면 함수를 가리키는) 레퍼런스의, 사이즈 조절 가능한 형식 지정된 배열입니다.
- **인스턴스**: 모듈과 그 모듈이 사용하는 모든 상태의 쌍입니다. 모듈의 상태로는 메모리, 테이블, 임포트된 값의 집합 등이 있습니다. 인스턴스는 ES6 모듈처럼 특정한 전역에 특정한 임포트의 집합과 함께 로드됩니다.

자바스크립트 API는 모듈, 메모리, 테이블, 인스턴스를 생성하는 방법을 제공합니다. 자바스크립트 코드에서는, 웹어셈블리 인스턴스에서 일반 자바스크립트 함수의 형태로 노출한 익스포트를 동기적으로 호출할 수 있습니다. 웹어셈블리 코드 또한, 웹어셈블리 인스턴스의 임포트 형식으로 넘겨받은 임의의 자바스크립트 함수를 동기적으로 호출할 수 있습니다.

웹어셈블리 코드를 다운로드하고, 컴파일하고, 돌리는 일련의 과정을 온전히 자바스크립트로 제어할 수 있기 때문에, 자바스크립트 개발자는 웹어셈블리를 그저 효율적으로 고성능 함수를 생성하기 위한 자바스크립트의 기능이라고 생각해도 무방합니다.

미래에는 웹어셈블리 모듈이 (`<script type='module'>`을 사용해서) [ES2015모듈처럼 로드 가능하게](https://github.com/WebAssembly/proposals/issues/12) 될 것입니다. 이러면 웹어셈블리 모듈을 다운받고, 컴파일하고, 임포트하는 과정이 ES2015 모듈처럼 쉬워지게 되겠죠.

## 웹어셈블리를 써보고 싶은데 어떻게 시작해야하나요?

웹어셈블리의 바이너리 포맷과 이 바이너리 코드를 불러와서 돌리는 API가 있다는 기초 컨셉에 대해서 알아보았으니, 이제 어떻게 이 컨셉을 실제로 사용할 수 있는지 알아봅시다.

웹어셈블리 생태계는 이제 막 태동하는 단계입니다. 더 많은 도구들이 앞으로 쏟아져나오겠죠. 현재 네가지 방법이 있습니다:

- [엠스크립튼](https://emscripten.org/)으로 c/c++ 애플리케이션 포팅하기.
- 어셈블리 수준에서 바로 WebAssembly를 작성하거나 생성하기.
- Rust 응용 프로그램을 작성하고 WebAssembly를 출력으로 지정합니다.
- TypeScript와 비슷한 [AssemblyScript](https://www.assemblyscript.org/)를 사용하여 WebAssembly바이너리 컴파일.

이 선택지들에 대해서 얘기해봅시다:

### C/C++로부터 포팅하기

WASM 코드를 작성하기위한 많은 옵션 중 두 가지는 온라인 Wasm 어셈블러 또는 [Emscripten](https://emscripten.org/)입니다. 다음과 같은 수많은 WASM 어셈블러 선택 항목이 있습니다.

- [WasmFiddle](https://wasdk.github.io/WasmFiddle/)
- [WasmFiddle++](https://anonyco.github.io/WasmFiddle/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

이것들은 시작해야 할 곳을 찾는 사람들을 위한 훌륭한 자료이지만 도구 및 Emscripten과 같은 최적화가 부족합니다.

Emscripten 도구를 사용하면 C/C++ 소스코드를 가져와서 .wasm 모듈로 컴파일하고, 이 모듈을 불러와서 돌리는데 필요한 자바스크립트 "접착제(glue)" 코드를 끼워넣고, HTML 문서에 코드의 실행결과를 출력할 수도 있습니다.

![](emscripten-diagram.png)

핵심만 요약하면 절차는 다음과 같습니다:

1. 엠스크립튼은 우선 C/C++ 소스코드를 clang+LLVM (OSX의 XCode 등에 사용될 정도로 성숙한 오픈소스 C/C++ 컴파일러 툴체인) 에 던져줍니다.
2. 엠스크립튼이 clang+LLVM의 컴파일 결과를 받아다가 .wasm 바이너리로 변환시켜줍니다.
3. 웹어셈블리는 그 자체로는 DOM에 바로 접근할 수가 없습니다. 단지 자바스크립트를 호출하면서 정수나 부동소수점 기초 자료형을 넘겨줄 수 있을 뿐이죠. 따라서 웹 API에 접근하려면 웹 API를 호출하는 자바스크립트를 통할 필요가 있습니다. 그래서 엠스크립튼은 이걸 해주는 HTML과 자바스크립트 접착제 코드를 같이 생성해줍니다.

> **참고:** 나중에는 [웹어셈블리가 웹API를 바로 호출](http://webassembly.org/docs/gc/)하게 만들 계획입니다.

자바스크립트 접착제 코드가 아마 여러분이 생각하는 것처럼 단순하지는 않을 겁니다. 우선 엠스크립튼은 [POSIX](https://en.wikipedia.org/wiki/POSIX)의 일부분과 [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL)같은 유명 C/C++ 라이브러리를 직접 구현하는데요, 이 라이브러리들은 웹 API 위에서 구현돼야하기 때문에, 기저를 이루는 웹 API에 웹어셈블리를 연결시키기 위한 자바스크립트 접착제 코드가 각각의 라이브러리에 있어야 합니다.

그래서 접착제 코드의 일부분은 C/C++ 코드에서 사용되는 각각의 라이브러리 기능을 구현하는 코드입니다. 그리고 상기한 웹어셈블리 자바스크립트 API를 사용해서 .wasm 파일을 불러와 실행하는 로직도 같이 담고있습니다.

생성된 HTML문서는 자바스크립트 접착제 코드를 불러오고 표준출력(stdout)을 {{htmlelement("textarea")}}에 작성합니다. 만약 애플리케이션이 OpenGL을 사용하고있으면 HTML 안에 렌더링 타겟으로 사용되는 {{htmlelement("canvas")}} 엘리먼트가 포함됩니다. 이 엠스크립튼 출력물을 여러분의 웹앱에 맞도록 뜯어고치는 작업은 매우 쉽습니다.

엠스크립튼에 대한 전체 문서는 [emscripten.org](http://emscripten.org)에서 볼 수 있습니다. 툴체인을 구성하고 C/C++ 앱을 웹어셈블리로 컴파일하는 방법은 [Compiling from C/C++ to WebAssembly](/ko/docs/WebAssembly/C_to_wasm) 문서를 참고하세요.

### 웹어셈블리를 직접 작성하기

런타임에 웹어셈블리를 생성해내는 자바스크립트 라이브러리나, 여러분만의 컴파일러 또는 도구를 직접 만들고 싶으신가요?

실제 하드웨어의 어셈블리 언어처럼, 웹어셈블리의 바이너리 포맷에도 그와 1:1로 대응하는 문자형 표현이 존재합니다. [웹어셈블리 텍스트를 바이너리로 바꿔주는 도구들](http://webassembly.org/getting-started/advanced-tools/)을 활용해서 직접 작성한 텍스트 포맷을 바이너리 포맷으로 변환시켜볼 수 있습니다.

[웹어셈블리 텍스트 형식을 wasm으로 변환하기](/ko/docs/WebAssembly/Text_format_to_wasm)에서는 이를 어떻게 하는지 간단하게 설명해줍니다.

### Rust로 WebAssembly 작성하기

Rust WebAssembly 워킹 그룹의 끊임없는 노력 덕분에 Rust 코드를 작성하고 WebAssembly로 컴파일 할 수 있습니다. 필요한 툴 체인을 설치하고, 샘플 Rust 프로그램을 WebAssembly npm 패키지로 컴파일하고, 샘플 웹 애플리케이션의 샘플 [Compiling from Rust to WebAssembly](/ko/docs/WebAssembly/Rust_to_wasm) 글을 통해 시작할 수 있습니다.

### AssemblyScript 사용하기

AssemblyScript는 Rust 혹은 C를 자세히 배우지 않고 WebAssembly를 활용해 보고 싶은 개발자를 위한 최고의 선택지입니다. AssemblyScript는 작은 번들을 만들고 C나 Rust보단 살짝 느립니다. <https://docs.assemblyscript.org/> 문서에서 확인해 보실 수 있습니다.

## 요약

이 글에서는 웹어셈블리가 무엇이고, 왜 유용한지, 웹에 어떻게 적합하며 어떻게 사용할 수 있는지에 대해 설명합니다.

## 바깥 고리

- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [Loading and running WebAssembly code](/ko/docs/WebAssembly/Loading_and_running) — find out how to load your own WebAssembly module into a web page.
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API) — find out how to use the other major features of the WebAssembly JavaScript API.
