---
title: C/C++ 모듈을 웹어셈블리로 컴파일하기
slug: WebAssembly/C_to_Wasm
---

{{WebAssemblySidebar}}

당신이 C/C++ 같은 언어로 새로운 모듈을 작성하고 있다면, 당신은 [Emscripten](https://emscripten.org/)같은 툴을 이용해서 WebAssembly로 컴파일 할 수 있습니다. 이것이 어떻게 가능한지 봅시다.

## Emscripten 환경 준비하기

필요한 개발 환경을 설정해 봅시다.

### 요구 사항

Emscripten SDK를 설치하기 위해, 아래 설명을 참고하세요.
<https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html>

## 예제 컴파일 하기

환경설정이 완료되었다면, Emscripten로 C로 작성된 예제를 어떻게 컴파일하는지 살펴보겠습니다. Emscripten으로 컴파일하는 방법은 여러 가지가 있지만, 여기서는 주요 시나리오 두 가지만 다루도록 하겠습니다.

- wasm으로 컴파일 하고 코드를 실행하기 위해 HTML을 만듭니다. 그리고 wasm을 실행하기 위한 JavaScript "glue"코드를 추가합니다.
- wasm으로 컴파일하고 바로 JavaScript 코드를 만듭니다.

아래에서 자세히 보겠습니다.

### HTML와 JavaScript 만들기

이 방법은 브라우저에서 WebAssembly 코드를 실행하는 데 필요한 모든 것을 emscripten에서 생성하도록 하는 가장 간단한 방법입니다.

1. 먼저 컴파일 할 예제가 필요합니다. 다음 C 예제 코드를 복사하여 hello.c 파일을 만듭니다.

   ```C
   #include <stdio.h>

   int main(int argc, char ** argv) {
       printf("Hello World\n");
   }
   ```

2. terminal을 사용하여 Emscripten 컴파일 환경에서 다음의 명령어를 실행합니다. hello.c 파일과 동일한 경로에서 실행하세요

```bash
    emcc hello.c -s WASM=1 -o hello.html
```

명령과 함께 전달된 옵션은 다음과 같습니다.

- `-s WASM=1` — wasm으로 결과물을 만들어 내는 옵션. 이것을 지정하지 않으면 기본적으로 Emscripten이 [asm.js](http://asmjs.org/)를 출력합니다
- `-o hello.html` — Emscripten이 코드를 실행할 HTML 페이지 (및 사용할 파일 이름)를 생성하고 wasm 모듈과 JavaScript "glue"코드를 생성하여 wasm을 컴파일하고 인스턴스화하여 웹 환경에서 사용할 수 있도록 지정합니다.

코드를 실행하면 소스 폴더에 3개의 파일이 생길 것입니다.

- 바이너리 wasm 모듈 코드 (`hello.wasm`)
- native c 함수와 Javascript/wasm을 번역해주는 glue코드를 포함한 자바스크립트 파일 (`hello.js`)
- Wasm 코드를 로드, 컴파일 및 인스턴스화하고 브라우저에 출력을 표시하는 HTML 파일 (`hello.html`)

### 예제 실행하기

이제 WebAssembly를 지원하는 브라우저에서 `hello.html`을 로드해야합니다. Firefox 52+ 및 Chrome 57+, 최신 Opera에서 기본적으로 활성화됩니다 (about:config 또는 `javascript.options.wasm` 플래그를 활성화하여 Firefox 47+에서 wasm 코드를 실행하거나 Chrome (51+) 및 Opera (38+) *chrome://flags*로 이동하여 Experimental WebAssembly 플래그를 사용하도록 설정합니다.)

> **참고:** 생성된 HTML 파일 (`hello.html`) 을 로컬 하드(예: `file://your_path/hello.html`)에서 직접 읽으려고 하면 wasm의 동기, 비동기 패치(fetch)라인에 따라 에러메시지가 표시됩니다. HTTP 서버로 HTML파일을 실행해야 합니다. — [로컬 테스팅 서버를 셋업하는 방법](/ko/docs/Learn/Common_questions/set_up_a_local_testing_server)을 참고하세요.

모든 것이 계획대로 작동했다면 Emscripten 콘솔의 "Hello world" 출력이 웹 페이지와 브라우저의 JavaScript 콘솔에 나타나야 합니다. 축하합니다. WebAssembly에 C를 컴파일하고 브라우저에서 실행했습니다!

### 사용자 정의 HTML 템플릿 사용하기

사용자 정의 HTML 템플릿을 사용하는 방법에 대해 보도록 하겠습니다.

1. 우선 다음 C 코드를 새로운 폴더의 `hello2.c`파일로 만듭니다.

   ```c
   #include <stdio.h>

   int main(int argc, char ** argv) {
       printf("Hello World\n");
   }
   ```

2. emsdk 저장소에서 `shell_minimal.html` 파일을 검색하십시오. 이전의 새 디렉토리에서 `html_template`이라는 서브 디렉토리로 복사하십시오.
3. 이제 Emscripten 컴파일러 환경 터미널 창에서 새 디렉토리로 이동 한 후 다음 명령을 실행합니다.

   ```bash
   emcc -o hello2.html hello2.c -O3 -s WASM=1 --shell-file html_template/shell_minimal.html
   ```

   이번 명령어의 옵션은 이전에 입력한것과 조금 다릅니다.

   - 컴파일러가 여전히 JavaScript 글루 코드와 `.html`을 출력한다는 것을 의미하는 `-o hello2.html`을 지정했습니다.
   - 또한 `--shell-file html_template/shell_minimal.html`을 지정했습니다.이 예제는 예제를 실행할 HTML을 만드는 데 사용할 HTML 템플릿의 경로를 제공합니다.

4. 자 이제 예제를 실행해 봅니다. 위에있는 명령어를 실행하면 `hello2.html`파일을 생성해 냅니다. 생성 된 wasm을 로드하고 실행할 때 추가되는 글루 코드가있는 템플릿과 거의 동일한 내용을 갖습니다. 브라우저에서 열면 마지막 예제와 같은 결과를 볼 수 있습니다.

> **참고:** **Note**: `-o` 플래그에 HTML 파일 대신 .js 파일을 지정하여 전체 HTML이 아닌 JavaScript "glue"파일\* 을 출력하도록 지정할 수 있습니다 (예 : `emcc -o hello2.js hello2.c -O3 -s WASM=1)`. 이것은 고급진 방법인데 사용자 정의 HTML을 처음부터 완전히 빌드 할 수 있습니다. 제공된 HTML 템플리트를 사용하는 것이 보통 더 쉽습니다.\* Emscripten은 메모리 할당, 메모리 누수 및 기타 여러 가지 문제를 처리하기 위해 다양한 JavaScript "접착제"코드가 필요합니다.

### C 코드에서 사용자 정의된 함수 호출

JavaScript에서 C 코드에 정의된 함수를 쓰고 싶은 경우 Emscripten `ccall()` 함수와 `EMSCRIPTEN_KEEPALIVE`(외부에서 사용가능한 함수 목록에 추가해주는 기능)을 통해 함수를 사용 할 수 있습니다 (자세한 내용은 다음 참조 : [JavaScript로 컴파일 할 때 C / C ++ 소스 코드의 함수가 사라지고 처리 할 함수가없는 이유는 무엇입니까?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)). 어떻게 작동하는지 살펴 보겠습니다.

1. 다음 코드를 새 디렉토리에 `hello3.c`로 저장하십시오.

   ```c
   #include <stdio.h>
   #include <emscripten/emscripten.h>

   int main(int argc, char ** argv) {
       printf("Hello World\n");
   }

   #ifdef __cplusplus
   extern "C" {
   #endif

   void EMSCRIPTEN_KEEPALIVE myFunction(int argc, char ** argv) {
       printf("MyFunction Called\n");
   }

   #ifdef __cplusplus
   }
   #endif
   ```

   기본적으로 Emscripten이 생성 한 코드는 항상 `main()` 함수를 호출하고 다른 함수는 불필요한 코드로 제거됩니다. 함수 이름 앞에 `EMSCRIPTEN_KEEPALIVE`를 쓰면 데드코드로 제거되지 않습니다. `EMSCRIPTEN_KEEPALIVE`를 사용하려면 `emscripten.h` 라이브러리를 가져와야합니다.

   > **참고:** #ifdef 블록을 포함하여 C++ 코드에 이 코드를 포함 시켜도 이 예제는 계속 작동합니다. 그냥 C코드를 넣으면 C와 C++ name mangling 규칙으로 인해 문제가 생길 수 있지만 `extern "C"`를 사용하여 이 문제를 해결하면 됩니다.

2. 이제 `html_template/shell_minimal.html`을 이 새로운 디렉토리에 추가하십시오. (개발환경에 넣고 개발하는것이 편합니다).
3. 이제 컴파일 단계를 다시 실행 해 봅시다. 최신 디렉토리 (Emscripten 컴파일러 환경 터미널 창 내부)에서 다음 명령으로 C 코드를 컴파일하십시오. (우리가 `NO_EXIT_RUNTIME`으로 컴파일 할 필요가 있다는 것을 기억하십시오. `main()`이 종료 될 때 런타임이 종료 될 것입니다 - 적절한 C 에뮬레이션에 필요합니다. 예를 들어 atexits가 호출됩니다 - 컴파일 된 코드를 호출하는 것은 유효하지 않습니다 .)

   ```bash
   emcc -o hello3.html hello3.c -O3 -s WASM=1 --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1  -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]'
   ```

4. 브라우저에 예제를 다시로드하면 이전과 같은 것을 볼 수 있습니다!
5. 이제 JavaScript에 있는 새로운 `myFunction()` `함수를 실행`해보겠습니다. 먼저, 텍스트 에디터에서 hello.html을 열어주세요
6. `<script type='text/javascript'>` 태그 바로 위에 {{HTMLElement("button")}}을 추가해 보겠습니다.

   ```html
   <button class="mybutton">Run myFunction</button>
   ```

7. 이제 첫 번째 {{HTMLElement("script")}} 요소의 끝에 다음 코드를 추가합니다.

   ```js
   document.querySelector(".mybutton").addEventListener("click", function () {
     alert("check console");
     var result = Module.ccall(
       "myFunction", // name of C function
       null, // return type
       null, // argument types
       null, // arguments
     );
   });
   ```

`ccall()`을 사용하여 내보낸 함수를 호출하는 방법이었습니다.

## 바깥 고리

- [emscripten.org](http://emscripten.org/) — learn more about Emscripten and its large variety of options.
- [Calling compiled C functions from JavaScript using ccall/cwrap](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [Compiling an Existing C Module to WebAssembly](/ko/docs/WebAssembly/existing_C_to_wasm)
