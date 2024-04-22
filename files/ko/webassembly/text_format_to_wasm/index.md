---
title: Converting WebAssembly text format to wasm
slug: WebAssembly/Text_format_to_Wasm
---

{{WebAssemblySidebar}}

WebAssembly에는 S- expression 기반의 텍스트 표현, 텍스트 편집기, 브라우저 개발자 도구 등에서 노출되도록 고안된 중간 양식이 있습니다.이 기사에서는 어떻게 작동하는지, 텍스트 형식 파일을 `.wasm` 어셈블리 형식으로 변환할 수 있는 도구를 사용하는 방법에 대해 설명합니다.

> **참고:** 텍스트 형식 파일은 대개 `.wat` 확장자로 저장됩니다. 때로는 `.wast`도 사용됩니다.이 파일은 변환 할 때 `.wast`으로 변환되지 않는 파일에 허용되는 추가 테스트 명령을 포함하는 파일을 가리 킵니다 - assertions 등

## A first look at the text format

이 간단한 예제를 보자 - 다음 프로그램은 `imports`라는 모듈에서 `imported_func`라는 함수를 가져오고 `exported_func`라는 함수를 내 보냅니다.

```js
    (module
      (func $i (import "imports" "imported_func") (param i32))
      (func (export "exported_func")
        i32.const 42
        call $i
      )
    )
```

WebAssembly 함수 `exported_func`는 Google 환경에서 사용하기 위해 내보내집니다 (예 : WebAssembly 모듈을 사용하는 웹 앱). 이 함수를 호출하면 `imported_func`라는 가져온 JavaScript 함수가 호출됩니다.이 함수는 매개 변수로 제공된 값 (42)으로 실행됩니다.

## Converting the text .wat into a binary .wasm file

위의 `.wat` 텍스트 표현 예제를 `.wasm` 어셈블리 형식으로 변환 해 봅시다.

1. 시작하려면 `simple.wat` 라는 텍스트 파일 안에 위의 목록을 복사하십시오.
2. 이 텍스트 표현을 우리가 사용하기 전에 브라우저가 실제로 읽는 어셈블리 언어로 어셈블해야합니다. 이를 위해 wabt 도구를 사용할 수 있습니다.이 도구에는 WebAssembly의 텍스트 표현과 wasm을 변환하는 컴파일러가 포함되어 있으며 그 반대의 경우도 가능합니다. <https://github.com/webassembly/wabt>로 이동 -이 페이지의 지침에 따라 도구를 설정하십시오.
3. 일단 도구를 만들었 으면 시스템 `PATH`에 `/wabt/out/clang/Debug` 디렉토리를 추가하십시오.
4. 그런 다음, wat2wasm 프로그램을 실행하여 입력 파일의 경로와 `-o` 매개 변수 다음에 출력 파일의 경로를 전달하십시오.

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

wasm을 `.wasm` 어셈블리 코드가 들어있는 `simple.wasm` 파일로 변환합니다.

> **참고:** wasm2wat 도구를 사용하여 어셈블리를 다시 텍스트 표현으로 변환 할 수도 있습니다. 예 : `wasm2wat simple.wasm -o text.wat`.

## Viewing the assembly output

출력 파일은 어셈블리 기반이므로 일반 텍스트 편집기에서는 볼 수 없습니다. 그러나 wat2wasm 도구의 `-v` 옵션을 사용하여 볼 수 있습니다. 아래 코드를 실행해 보세요:

```bash
wat2wasm simple.wat -v
```

이렇게하면 다음과 같은 방법으로 터미널에 출력을 줄 수 있습니다.

![several strings of binary with textual descriptions beside them. For example: 0000008: 01 ; section code ](assembly-output.png)

## See also

- [Understanding WebAssembly text format](/ko/docs/WebAssembly/Understanding_the_text_format) — 텍스트 형식 구문에 대한 자세한 설명.
- [Compiling from C/C++ to WebAssembly](/ko/docs/WebAssembly/C_to_wasm) — Binaryen / Emscripten과 같은 도구는 소스 코드를 wasm으로 컴파일하고 JavaScript 컨텍스트에서 모듈을 실행하는 데 필요한 API 코드를 만듭니다. 그들을 사용하는 방법에 대해 자세히 알아보십시오.
- [Using the WebAssembly JavaScript API](/ko/docs/WebAssembly/Using_the_JavaScript_API) — WebAssembly API 코드가 작동하는 방식에 대해 자세히 알고 싶다면이 내용을 읽으십시오.
- [Text format](https://github.com/WebAssembly/design/blob/master/TextFormat.md) — WebAssembly GitHub repo에서 텍스트 형식에 대한 자세한 설명.
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — 이 모든 것을 처리하는 WebPack 용 로더입니다.
