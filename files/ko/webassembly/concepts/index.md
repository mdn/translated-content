---
title: WebAssembly의 개념
slug: WebAssembly/Concepts
l10n:
  sourceCommit: e7dead4a3906bb4289acfee5c13fcea6bd682fa2
---

{{WebAssemblySidebar}}

이번 글에서는 WebAssembly의 작동원리 뒤에 숨어있는 컨셉을 설명함과 동시에 WebAssembly의 목표, WebAssembly가 해결할 수 있는 문제, 그리고 웹브라우저 렌더링 엔진 안에서 WebAssembly가 작동하는 원리에 관해 설명하려고 합니다.

## WebAssembly가 뭔가요?

WebAssembly는 최신 웹 브라우저에서 실행할 수 있는 새로운 유형의 코드이며, 새로운 기능과 성능 면에서 큰 이점을 제공합니다. 직접 코드를 작성하는 것이 아니라 C, C++, RUST 등의 소스 언어를 효과적으로 컴파일하도록 고안되었습니다.

WebAssembly는 웹 플랫폼에 큰 영향을 미칩니다. 이전에 불가능했던 웹에서 실행되는 클라이언트 응용 프로그램을 사용하여 웹에서 여러 언어로 작성된 코드를 네이티브에 가까운 속도로 실행하는 방법을 제공합니다.

게다가 WebAssembly 코드를 생성하는 방법을 알 필요조차 없습니다. WebAssembly 모듈을 웹(또는 Node.js) 애플리케이션으로 가져와 JavaScript를 통해 사용할 수 있도록 할 수 있습니다. JavaScript 프레임워크는 WebAssembly를 사용하여 대규모 성능 이점과 새로운 기능을 제공하면서도, 웹 개발자가 쉽게 기능을 사용할 수 있도록 할 수 있습니다.

## WebAssembly의 목표

WebAssembly는 [W3C WebAssembly 커뮤니티 그룹](https://www.w3.org/community/webassembly/)에서 아래와 같은 목표로 만들어지고 있는 열린 표준입니다.

- 빠르고, 효과적이고, 이식성이 좋을 것 - WebAssembly 코드는 [일반적인 하드웨어들이 제공하는 기능](http://webassembly.org/docs/portability/#assumptions-for-efficient-execution)을 활용하여 여러 종류의 플랫폼 위에서 거의 네이티브에 가까운 속도로 실행될 수 있습니다.
- 읽기 쉽고 디버깅이 가능할 것 - WebAssembly는 저수준 어셈블리 언어지만, 직접 작성하고, 보고, 디버깅할 수 있으며 사람이 충분히 읽을 수 있는 수준의 텍스트 형식을 갖고있습니다(명세는 아직 검토중입니다).
- 안전함을 유지할 것 - WebAssembly는 샌드박싱된 실행환경에서 안전하게 돌아갈 수 있도록 설계되었습니다. 웹상의 다른 코드와 마찬가지로, WebAssembly 코드도 브라우저의 동일한 출처(same-origin)와 권한정책을 지켜야합니다.
- 웹을 망가뜨리지 않을 것 - WebAssembly는 다른 웹 기술과 마찰없이 사용되면서 하위호환성을 관리할 수 있도록 설계되었습니다.

> [!NOTE]
> WebAssembly는 웹과 JavaScript 환경 밖에서도 사용될 것입니다([Non-web embeddings](http://webassembly.org/docs/non-web/)를 참고해주세요).

## WebAssembly는 웹 플랫폼에 어떻게 적용될까요?

웹 플랫폼을 다음과 같이 두 부분으로 나눠서 생각해볼 수 있습니다.

- JavaScript같이 우리가 만든 앱을 구성하는 코드를 돌리는 가상머신(VM).

- 웹브라우저나 하드웨어의 기능을 호출해서 웹앱이 뭔가를 하도록 만들 수 있는 [Web API](/ko/docs/Web/API)의 집합 ([DOM](/ko/docs/Web/API/Document_Object_Model), [CSSOM](/ko/docs/Web/API/CSS_Object_Model), [WebGL](/ko/docs/Web/API/WebGL_API), [IndexedDB](/ko/docs/Web/API/IndexedDB_API), [Web Audio API](/ko/docs/Web/API/Web_Audio_API) 등).

지금까지 VM은 오직 JavaScript만 불러올 수 있었습니다. 오늘날의 웹에서 사람들이 겪고 있는 대부분의 문제를 해결하기에 JavaScript가 충분히 잘 작동했다고 볼 수 있기는 합니다. 하지만 3D 게임이나, 가상/증강현실, 컴퓨터 비전, 이미지/비디오 편집, 그 외 네이티브 성능을 필요로하는 여러 분야의 사례([WebAssembly 사용 예제](http://webassembly.org/docs/use-cases/) 참고)에서는 성능 문제에 직면하게 됩니다.

거기에 더해서, 아주 큰 JavaScript 애플리케이션을 다운받고 구문 분석 및 컴파일하는 비용은 감당하기 힘들 수가 있습니다. 모바일 및 기타 리소스가 많이 제한된 환경에서는 이런 성능 병목현상이 더 두드러지게 나타나기도 합니다.

WebAssembly는 JavaScript와는 다른 언어이지만, JavaScript를 대체하기 위해서 만들어지지는 않았습니다. 대신 JavaScript와 나란히 돌아가면서 서로의 부족한 점을 보완하여 웹개발자가 두 언어의 강점을 동시에 취할 수 있도록 설계되었죠.

- JavaScript는 웹 애플리케이션을 작성하기에 좋은 유연하고 표현력 있는 고수준 언어입니다. 여기에는 많은 장점이 있습니다. 동적 타입 언어라 컴파일 과정이 필요 없고, 강력한 프레임워크, 라이브러리 및 기타 도구를 제공하는 거대한 생태계가 있습니다.
- WebAssembly는 네이티브에 가까운 성능으로 실행되고 C++ 및 Rust와 같이 저수준의 메모리 모델을 가진 언어의 컴파일 대상을 제공합니다. 또한, 웹에서 실행할 수 있는 컴팩트한 바이너리 형식을 갖고있는 저수준 어셈블리형 언어입니다(WebAssembly는 미래에 가비지 컬렉션 메모리 모델을 가진 언어를 지원한다는 [고수준 목표](http://webassembly.org/docs/high-level-goals/)도 갖고 있습니다).

브라우저에 WebAssembly가 등장하면서 앞에서 이야기했던 가상머신(VM)은 이제 JavaScript와 WebAssembly 두 가지 유형의 코드를 불러오고 실행합니다.

필요하면 다른 형식의 코드끼리 서로를 호출할 수도 있습니다. [WebAssembly JavaScript API](/ko/docs/WebAssembly/JavaScript_interface)가 내보낸 WebAssembly 코드를 일반적으로 부를 수 있는 JavaScript 함수로 감싸고, WebAssembly 코드에서도 동기적으로 일반 JavaScript 함수를 호출할 수 있습니다. 사실 WebAssembly의 기본 단위는 모듈이라고 불리고, WebAssembly 모듈은 여러모로 ES6 모듈과 대칭적입니다.

### WebAssembly의 핵심 컨셉

WebAssembly가 브라우저에서 실행되는 방식을 이해하려면 필요한 몇가지 핵심 개념이 있습니다. 모든 개념은 [WebAssembly JavaScript API](/ko/docs/WebAssembly/JavaScript_interface)에 1대 1로 반영되어 있습니다.

- **모듈**: 브라우저에서 실행 가능한 기계어 코드로 컴파일된 WebAssembly 바이너리를 나타냅니다. 모듈은 stateless이며 [Blob](/ko/docs/Web/API/Blob)처럼 Windows와 [worker](/ko/docs/MDN/Doc_status/API/WebWorkers) 간에 [`postMessage()`](/ko/docs/Web/API/MessagePort/postMessage)를 통해 명시적으로 공유 할 수 있습니다. 모듈은 ES 모듈과 마찬가지로 가져오기 및 내보내기를 선언합니다.
- **메모리**: WebAssembly의 저수준 메모리 접근 명령어에 의해 읽고 쓰여지는 바이트들의 선형 배열인, 크기 조절이 가능한 ArrayBuffer입니다.
- **테이블**: 안전성이나 이식성 이유로 원시(raw) 바이트로 메모리에 저장될 수 없는, 크기 조절 가능한 형식 지정된 배열(예, 함수)입니다.
- **인스턴스**: 모듈과 그 모듈이 사용하는 모든 상태의 쌍입니다. 모듈의 상태로는 메모리, 테이블, 가져온 값의 집합 등이 있습니다. 인스턴스는 ES 모듈처럼 특정한 전역에 특정한 가져오기의 모듈 집합과 함께 로드됩니다.

JavaScript API는 개발자에게 모듈, 메모리, 테이블 및 인스턴스를 생성하는 방법을 제공합니다. JavaScript 코드에서는, WebAssembly 인스턴스에서 일반 JavaScript 함수의 형태로 노출한 내보내기를 동기적으로 호출할 수 있습니다. WebAssembly 코드 또한, WebAssembly 인스턴스의 가져오기 형식으로 넘겨받은 임의의 JavaScript 함수를 동기적으로 호출할 수 있습니다.

WebAssembly 코드를 다운로드하고, 컴파일하고, 돌리는 일련의 과정을 온전히 JavaScript로 제어할 수 있습니다. JavaScript 개발자는 WebAssembly를 그저 효율적으로 고성능 함수를 생성하기 위한 JavaScript의 기능이라고 생각할 수도 있습니다.

앞으로, WebAssembly 모듈이(`<script type='module'>`을 사용) [ES 모듈처럼 로드 가능하게](https://github.com/WebAssembly/proposals/issues/12) 될 것입니다. ES 모듈만큼 쉽게 WebAssembly 모듈을 다운받고, 컴파일하고, 가져올 수 있습니다.

## 자신의 어플리케이션에서 WebAssembly를 어떻게 시작해야하나요?

위에서 WebAssembly가 웹 플랫폼에 추가하는 원시 기본 요소에 대해 이야기했습니다. 바이너리 형식과 이 바이너리 코드를 불러와서 돌리는 API가 있다는 기초 컨셉에 대해서 알아보았으니, 이제 어떻게 이 컨셉을 실제로 사용할 수 있는지 알아봅시다.

WebAssembly 생태계는 초기 단계입니다. 앞으로는 의심할 여지 없이, 더 많은 도구들이 앞으로 등장할 것입니다. 현재 4가지 방법이 있습니다.

- [Emscripten](https://emscripten.org/)으로 c/c++ 애플리케이션 포팅하기.
- 어셈블리 수준에서 바로 WebAssembly를 작성하거나 생성하기.
- Rust 응용 프로그램을 작성하고 WebAssembly를 출력으로 지정합니다.
- TypeScript와 비슷한 WebAssembly 바이너리 컴파일되는 [AssemblyScript](https://www.assemblyscript.org/)를 사용합니다.

아래 옵션에 대해 이야기해봅시다.

### C/C++로부터 포팅하기

Wasm 코드를 생성하는 다양한 옵션 중 두 가지는 온라인 Wasm 어셈블러 또는 [Emscripten](https://emscripten.org/)입니다. 아래와 같은 수많은 Wasm 어셈블러 선택 항목이 있습니다.

- [WasmFiddle](https://wasdk.github.io/WasmFiddle/)
- [WasmFiddle++](https://anonyco.github.io/WasmFiddle/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

이것들은 어디서부터 시작해야 할지 고민하는 사람들을 위한 훌륭한 자료이지만, Emscripten과 같은 도구 및 최적화가 부족합니다.

Emscripten 도구는 거의 모든 C/C++ 소스코드를 가져와서 wasm 모듈로 컴파일하고, 모듈을 불러와서 실행하는데 필요한 JavaScript '접착제(glue)' 코드와 코드 결과를 표시하는 HTML 문서도 포함합니다.

![다이어그램: Emscripten은 C/C++ 소스 코드를 JavaScript 접착제 코드와 함께 HTML 문서인 Wasm 모듈로 컴파일합니다.](emscripten-diagram.png)

핵심만 요약하면, 절차는 다음과 같습니다.

1. Emscripten은 먼저 C/C++ 소스코드를 clang+LLVM (OSX의 XCode 등에 사용될 정도로 성숙한 오픈소스 C/C++ 컴파일러 툴체인)에 넘겨줍니다.
2. Emscripten이 clang+LLVM의 컴파일 결과를 Wasm 바이너리로 변환합니다.
3. 현재 WebAssembly는 자체적으로 DOM에 바로 접근할 수가 없습니다. 정수나 부동 소수점 기초 데이터 타입을 단지 JavaScript를 호출할 수 있습니다. 따라서, 웹 API에 접근하려면 WebAssembly는 JavaScript를 호출한 다음 웹 API를 호출해야 합니다. 따라서 Emscripten은 이걸 달성하는 데 필요한 HTML과 JavaScript 접착제 코드를 같이 생성합니다.

> [!NOTE]
> 나중에는 [WebAssembly가 웹 API를 바로 호출하도록 허용](http://webassembly.org/docs/gc/)하게 만들 계획입니다.

JavaScript 접착제 코드가 아마 여러분이 상상하는 것만큼 간단하지 않습니다. 우선 Emscripten은 [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL), [POSIX](https://en.wikipedia.org/wiki/POSIX)의 일부와 같은 널리 사용되는 C/C++ 라이브러리를 구현합니다. 이 라이브러리는 웹 API 위에서 구현돼야하기 때문에, 기저를 이루는 웹 API에 WebAssembly를 연결시키기 위한 JavaScript 접착제 코드가 각각의 라이브러리에 있어야 합니다.

따라서, 접착제 코드의 일부는 C/C++ 코드에서 사용되는 각 라이브러리 기능을 구현하는 코드입니다. 그리고 접착제 코드에는 위에서 언급한 WebAssembly JavaScript API를 사용해서 Wasm 파일을 로드하고 실행하는 논리도 같이 담고 있습니다.

생성된 HTML 문서는 JavaScript 접착제 코드를 불러오고 표준 출력(stdout)을 {{htmlelement("textarea")}}에 작성합니다. 만약 애플리케이션이 OpenGL을 사용하고 있으면, HTML 안에 렌더링 대상으로 사용되는 {{htmlelement("canvas")}} 요소가 포함됩니다. 이 Emscripten 출력을 여러분의 웹 애플리케이션에 맞게 뜯어고치는 작업은 매우 쉽습니다.

Emscripten에 대한 전체 문서는 [emscripten.org](http://emscripten.org)에서 볼 수 있습니다. 툴체인을 구성하고 C/C++ 애플리케이션을 Wasm로 컴파일하는 방법은 [Compiling from C/C++ to WebAssembly](/ko/docs/WebAssembly/C_to_Wasm) 문서를 참고하세요.

### WebAssembly를 직접 작성하기

런타임에 WebAssembly를 생성하는 JavaScript 라이브러리나, 여러분만의 컴파일러 또는 도구를 직접 만들고 싶으신가요?

실제 하드웨어 어셈블리 언어와 동일한 방식으로, WebAssembly의 바이너리 형식에도 1:1로 대응하는 문자형 표현이 존재합니다. [WebAssembly 텍스트를 바이너리로 바꿔주는 도구들](http://webassembly.org/getting-started/advanced-tools/)을 활용해서 직접 작성한 텍스트 형식을 바이너리 형식으로 변환시켜볼 수 있습니다.

[WebAssembly 텍스트 형식을 Wasm으로 변환하기](/ko/docs/WebAssembly/Text_format_to_Wasm)에서는 이를 어떻게 하는지 간단하게 설명해줍니다.

### Rust로 WebAssembly 작성하기

Rust WebAssembly 워킹 그룹의 끊임없는 노력 덕분에, Rust 코드를 작성하고 WebAssembly로 컴파일 할 수 있습니다. 필요한 툴 체인을 설치하고, 샘플 Rust 프로그램을 WebAssembly npm 패키지로 컴파일하고, 샘플 웹 애플리케이션의 샘플 [Compiling from Rust to WebAssembly](/ko/docs/WebAssembly/Rust_to_Wasm) 글을 통해 시작할 수 있습니다.

### AssemblyScript 사용하기

Rust 혹은 C를 자세히 배우지 않고, WebAssembly를 사용해 보고 TypeScript와 같은 친숙한 언어를 편안하게 사용하려는 웹 개발자에게는 AssemblyScript는 최고의 선택지입니다. AssemblyScript는 TypeScript의 엄격한 변형을 WebAssembly로 컴파일하므로 웹 개발자는 Prettier, ESLint, VS Code IntelliSense 등과 같이 익숙한 TypeScript 호환 도구를 계속 사용할 수 있습니다. <https://docs.assemblyscript.org/> 문서에서 확인해 보실 수 있습니다.

## 요약

이 글에서는 WebAssembly가 무엇이고, 왜 유용한지, 웹에 어떻게 적용되는지, 어떻게 활용할 수 있는지에 대해 설명합니다.

## 같이 보기

- [Mozilla Hacks 블로그의 WebAssembly 글](https://hacks.mozilla.org/category/webassembly/)
- [Mozilla 연구의 WebAssembly 사용](https://research.mozilla.org/webassembly/)
- [WebAssembly 코드 로드 및 실행](/ko/docs/WebAssembly/Loading_and_running) - WebAssembly 모듈을 웹 페이지에 로드하는 방법을 알아보세요.
- [WebAssembly JavaScript API 사용하기](/ko/docs/WebAssembly/Using_the_JavaScript_API) - WebAssembly JavaScript API의 다른 주요 기능을 사용하는 방법을 알아보세요.
