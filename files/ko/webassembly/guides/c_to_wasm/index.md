---
title: C/C++ 모듈을 웹어셈블리로 컴파일하기
slug: WebAssembly/Guides/C_to_Wasm
original_slug: WebAssembly/C_to_Wasm
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{WebAssemblySidebar}}

C/C++ 같은 언어로 새로운 모듈을 작성한 경우, [Emscripten](https://emscripten.org/)같은 도구를 이용해서 WebAssembly로 컴파일 할 수 있습니다. 작동원리를 살펴보겠습니다.

## Emscripten 환경 준비하기

필요한 개발 환경을 설정해 봅시다.

### 필요한 사전 준비 사항

Emscripten SDK를 설치하기 위해, 아래 설명을 참고하세요.
<https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html>

## 예제 컴파일 하기

환경설정이 완료되었다면, Emscripten로 C로 작성된 예제를 어떻게 컴파일하는지 살펴보겠습니다. Emscripten으로 컴파일하는 방법은 여러 가지가 있지만, 여기서는 주요 시나리오 두 가지만 다루도록 하겠습니다.

- wasm으로 컴파일 하고 코드를 실행하기 위해 HTML을 만듭니다. 그리고 wasm을 실행하기 위한 JavaScript "glue"코드를 추가합니다.
- wasm으로 컴파일하고 바로 JavaScript 코드를 만듭니다.

아래에서 자세히 보겠습니다.

### HTML와 JavaScript 만들기

이 방법은 브라우저에서 WebAssembly 코드를 실행하는 데 필요한 모든 것을 emscripten에서 생성하도록 하는 가장 간단한 방법입니다.

1. 먼저 컴파일 할 예제가 필요합니다. 다음 C 예제 코드를 복사하여 로컬 드라이브의 새 폴더에 `hello.c` 파일을 만듭니다.

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Emscripten 컴파일 환경에 접속하는 데 사용한 terminal을 통해 hello.c 파일과 동일한 폴더로 이동한 후 다음 명령을 실행하세요.

   ```bash
   emcc hello.c -o hello.html
   ```

명령과 함께 전달된 옵션은 다음과 같습니다.

- `-o hello.html`
  : Emscripten이 코드를 실행할 HTML 페이지 (및 사용할 파일 이름)를 생성하고 Wasm 모듈과 JavaScript "접착제" 코드를 생성하여 Wasm을 컴파일하고 인스턴스화하도록 지정합니다. Wasm을 사용해 웹 환경에서 사용할 수 있도록 지정합니다.

이 때, 소스 폴더에는 아래 파일이 있어야 합니다.

- 바이너리 Wasm 모듈 코드 (`hello.wasm`)
- native c 함수와 Javascript/Wasm을 번역해주는 접착제 코드를 포함한 Javascript 파일 (`hello.js`)
- Wasm 코드를 로드, 컴파일 및 인스턴스화하고 브라우저에 출력을 표시하는 HTML 파일 (`hello.html`)

### 예제 실행하기

이제 WebAssembly를 지원하는 브라우저에서 `hello.html`을 로드해야합니다. Firefox 52, Chrome 57, Edge 57, Opera 44에서 기본적으로 활성화됩니다.

> [!NOTE]
> 생성된 HTML 파일 (`hello.html`) 을 로컬 하드 드라이브(예: `file://your_path/hello.html`)에서 직접 열려고 하면 오류가 발생합니다(`Wasm의 동기, 비동기 가져오기가 모두 실패했습니다`라는 메시지가 표시됩니다). HTTP 서버(`http://`)로 HTML 파일을 실행해야 합니다. [로컬 테스팅 서버를 설정하는 방법](/ko/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)을 참고하세요.

모든 것이 계획대로 작동했다면, Emscripten 콘솔의 "Hello world" 출력이 웹 페이지와 브라우저의 JavaScript 콘솔에 나타나야 합니다. 축하합니다. WebAssembly로 C를 컴파일하고 브라우저에서 실행했습니다!
![image](helloworld.png)

### 사용자 정의 HTML 템플릿 사용하기

때로는 사용자 정의 HTML 템플릿을 사용하고 싶을 수도 있습니다. 방법에 대해 알아보도록 하겠습니다.

1. 우선 다음 C 코드를 새로운 폴더의 `hello2.c`파일로 만듭니다.

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. emsdk 저장소에서 `shell_minimal.html` 파일을 검색하세오. 이전의 새 폴더에서 `html_template`이라는 하위 폴더로 복사하십시오.
3. Emscripten 컴파일러 환경 터미널 창에서 새 폴더로 이동 한 후 다음 명령을 실행합니다.

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   이번 명령어의 옵션은 약간 다릅니다.
   - 컴파일러가 여전히 JavaScript 접착제 코드와 `.html`을 출력한다는 것을 의미하는 `-o hello2.html`을 지정했습니다.
   - 코드를 최적화하는 데 사용되는 `-O3`를 지정했습니다. Emcc에는 `-O0` (최적화 없음), `-O1`, `-O2`, `-Os`, `-Oz`, `-Og` 및 `-O3`을 포함해 다른 C 컴파일러와 마찬가지로 최적화 수준이 존재합니다. `-O3`는 릴리스 빌드에 적합한 설정입니다.
   - 또한 `--shell-file html_template/shell_minimal.html`을 지정했습니다.이 예제는 예제를 실행할 HTML을 만드는 데 사용할 HTML 템플릿의 경로를 제공합니다.

4. 예제를 실행해 봅니다. 위 명령어를 실행하면 `hello2.html`파일을 생성합니다. 생성된 Wasm을 로드하고 실행할 때 추가되는 접착제 코드가 있는 템플릿과 거의 동일한 내용을 갖습니다. 브라우저에서 열면 마지막 예제와 같은 결과를 볼 수 있습니다.

> [!NOTE]
> `-o` 플래그에 HTML 파일 대신 .js 파일을 지정하여 전체 HTML이 아닌 JavaScript "접착제" 파일\* 만 출력하도록 지정할 수 있습니다(예, `emcc -o hello2.js hello2.c -O3`). 이 고급 방법으로, 사용자 정의 HTML을 처음부터 완전히 빌드 할 수 있습니다. 제공된 HTML 템플릿을 사용하는 것이 보통 더 쉽습니다.
>
> Emscripten은 메모리 할당, 메모리 누수 및 기타 여러가지 문제를 처리하기 위해 다양한 JavaScript "접착제" 코드가 필요합니다.

### C 코드에서 사용자 정의 함수 호출

JavaScript에서 C 코드에 정의된 함수를 쓰고 싶은 경우 Emscripten `ccall()` 함수와 `EMSCRIPTEN_KEEPALIVE`(외부에서 사용가능한 함수 목록에 추가해주는 기능)을 통해 함수를 사용 할 수 있습니다([JavaScript로 컴파일 할 때 C/C++ 소스 코드의 함수가 사라지고 처리 할 함수가없는 이유는 무엇입니까?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)를 참조하세요). 어떻게 작동하는지 살펴 보겠습니다.

1. 시작하려면, 다음 코드를 새 폴더에 `hello3.c`로 저장하세요.

   ```cpp
   #include <stdio.h>
   #include <emscripten/emscripten.h>

   int main() {
      printf("Hello World\n");
      return 0;
   }

   #ifdef __cplusplus
   #define EXTERN extern "C"
   #else
   #define EXTERN
   #endif

   EXTERN EMSCRIPTEN_KEEPALIVE void myFunction(int argc, char ** argv) {
      printf("MyFunction Called\n");
   }
   ```

   기본적으로, Emscripten에서 생성된 코드는 항상 `main()` 함수를 호출하고 다른 함수는 불필요한 코드로 제거됩니다. 함수 이름 앞에 `EMSCRIPTEN_KEEPALIVE`를 쓰면 제거되지 않습니다. `EMSCRIPTEN_KEEPALIVE`를 사용하려면 `emscripten.h` 라이브러리를 가져와야 합니다.

   > [!NOTE]
   > `#ifdef` 블록을 포함하여 C++ 코드에 이 코드를 포함 시켜도 이 예제는 계속 작동합니다. C코드를 넣으면 C와 C++ name mangling 규칙으로 인해 문제가 생길 수 있지만, C++를 사용하는 경우 외부 C 함수를 사용하여 이 문제를 해결하면 됩니다.

2. 편리성을 위해 `\{\{{ SCRIPT }}}`가 포함된 `html_template/shell_minimal.html`을 이 새로운 폴더에 콘텐츠로 추가하십시오(개발환경에 넣고 개발하는 것이 편합니다).
3. 이제 컴파일 단계를 다시 실행해 봅시다. 최신 폴더 내부(Emscripten 컴파일러 환경 터미널 창 내부)에서 다음 명령으로 C 코드를 컴파일하십시오. `NO_EXIT_RUNTIME`으로 컴파일해야 합니다. `main()`이 종료될 때 런타임이 종료 및 컴파일된 코드를 호출하는 게 유효하지 않게 됩니다. 이 방법은 적절한 C 에뮬레이션에 필요합니다. 예를 들어, [`atexit()`](https://en.cppreference.com/w/c/program/atexit) 함수가 호출되는지 확인하는 데 필요합니다.

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. 브라우저에서 예제를 다시 로드하면 이전과 동일한 내용을 볼 수 있습니다!
5. 이제 JavaScript에 있는 새로운 `myFunction()`함수를 실행해야 합니다. 먼저, 텍스트 편집기에서 hello3.html을 열어주세요.
6. 아래와 같이, `<script type='text/javascript'>` 태그 바로 위에 {{HTMLElement("button")}}을 추가합니다.

   ```html
   <button id="mybutton">Run myFunction</button>
   ```

7. 이제 첫 번째 {{HTMLElement("script")}} 요소의 끝에 다음 코드를 추가합니다.

   ```js
   document.getElementById("mybutton").addEventListener("click", () => {
     alert("check console");
     const result = Module.ccall(
       "myFunction", // name of C function
       null, // return type
       null, // argument types
       null, // arguments
     );
   });
   ```

이 방법은 `ccall()`을 사용하여 내보낸 함수를 호출하는 방법을 보여줍니다.

## 같이 보기

- [emscripten.org](http://emscripten.org/)
  : Emscripten과 다양한 옵션에 대해 자세히 알아보세요.
- [ccall/cwrap을 사용하여 JavaScript에서 컴파일된 C 함수 호출](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [JavaScript로 컴파일할 때 C/C++ 소스 코드의 함수가 사라지거나, 처리할 함수가 없다는 메시지가 나타나는 이유는 무엇인가요?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [Mozilla Research의 WebAssembly](https://research.mozilla.org/webassembly/)
- [기존 C 모듈을 WebAssembly로 컴파일](/ko/docs/WebAssembly/Guides/Existing_C_to_Wasm)
