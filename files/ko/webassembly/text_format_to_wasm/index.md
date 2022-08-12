---
title: Converting WebAssembly text format to wasm
slug: WebAssembly/Text_format_to_wasm
translation_of: WebAssembly/Text_format_to_wasm
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">WebAssembly에는 S- expression 기반의 텍스트 표현, 텍스트 편집기, 브라우저 개발자 도구 등에서 노출되도록 고안된 중간 양식이 있습니다.이 기사에서는 어떻게 작동하는지, 텍스트 형식 파일을 <code>.wasm</code> 어셈블리 형식으로 변환할 수 있는 도구를 사용하는 방법에 대해 설명합니다.</p>

<div class="note">
<p><strong>Note</strong>: 텍스트 형식 파일은 대개 <code>.wat</code> 확장자로 저장됩니다. 때로는 <code>.wast</code>도 사용됩니다.이 파일은 변환 할 때 <code>.wast</code>으로 변환되지 않는 파일에 허용되는 추가 테스트 명령을 포함하는 파일을 가리 킵니다 - assertions 등</p>
</div>

<h2 id="A_first_look_at_the_text_format">A first look at the text format</h2>

<p>이 간단한 예제를 보자 - 다음 프로그램은 <code>imports</code>라는 모듈에서 <code>imported_func</code>라는 함수를 가져오고 <code>exported_func</code>라는 함수를 내 보냅니다.</p>

<pre>(module
  (func $i (import "<code>imports</code>" "<code>imported_func</code>") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)</pre>

<p>WebAssembly 함수 <code>exported_func</code>는 Google 환경에서 사용하기 위해 내보내집니다 (예 : WebAssembly 모듈을 사용하는 웹 앱). 이 함수를 호출하면 <code>imported_func</code>라는 가져온 JavaScript 함수가 호출됩니다.이 함수는 매개 변수로 제공된 값 (42)으로 실행됩니다.</p>

<h2 id="Converting_the_text_.wat_into_a_binary_.wasm_file">Converting the text .wat into a binary .wasm file</h2>

<p>위의 <code>.wat</code> 텍스트 표현 예제를 <code>.wasm</code> 어셈블리 형식으로 변환 해 봅시다.</p>

<ol>
 <li>시작하려면 <code>simple.wat</code> 라는 텍스트 파일 안에 위의 목록을 복사하십시오. </li>
 <li>이 텍스트 표현을 우리가 사용하기 전에 브라우저가 실제로 읽는 어셈블리 언어로 어셈블해야합니다. 이를 위해 wabt 도구를 사용할 수 있습니다.이 도구에는 WebAssembly의 텍스트 표현과 wasm을 변환하는 컴파일러가 포함되어 있으며 그 반대의 경우도 가능합니다. <a href="https://github.com/webassembly/wabt">https://github.com/webassembly/wabt</a>로 이동 -이 페이지의 지침에 따라 도구를 설정하십시오.</li>
 <li>일단 도구를 만들었 으면 시스템 <code>PATH</code>에 <code>/wabt/out/clang/Debug</code> 디렉토리를 추가하십시오.</li>
 <li>그런 다음, wat2wasm 프로그램을 실행하여 입력 파일의 경로와 <code>-o</code> 매개 변수 다음에 출력 파일의 경로를 전달하십시오.
  <pre class="brush: bash">wat2wasm simple.wat -o simple.wasm</pre>
 </li>
</ol>

<p>wasm을 <code>.wasm</code> 어셈블리 코드가 들어있는 <code>simple.wasm</code> 파일로 변환합니다.</p>

<div class="note">
<p><strong>Note</strong>: wasm2wat 도구를 사용하여 어셈블리를 다시 텍스트 표현으로 변환 할 수도 있습니다. 예 : <code>wasm2wat simple.wasm -o text.wat</code>.</p>
</div>

<h2 id="Viewing_the_assembly_output">Viewing the assembly output</h2>

<p>출력 파일은 어셈블리 기반이므로 일반 텍스트 편집기에서는 볼 수 없습니다. 그러나 wat2wasm 도구의 <code>-v</code> 옵션을 사용하여 볼 수 있습니다. 아래 코드를 실행해 보세요:</p>

<pre class="brush: bash">wat2wasm simple.wat -v</pre>

<p>이렇게하면 다음과 같은 방법으로 터미널에 출력을 줄 수 있습니다.</p>

<p><img alt="several strings of binary with textual descriptions beside them. For example: 0000008: 01 ; section code " src="https://mdn.mozillademos.org/files/14653/assembly-output.png" style="display: block; margin: 0px auto;"></p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/ko/docs/WebAssembly/Understanding_the_text_format">Understanding WebAssembly text format</a> — 텍스트 형식 구문에 대한 자세한 설명.</li>
 <li><a href="/ko/docs/WebAssembly/C_to_wasm">Compiling from C/C++ to WebAssembly</a> — Binaryen / Emscripten과 같은 도구는 소스 코드를 wasm으로 컴파일하고 JavaScript 컨텍스트에서 모듈을 실행하는 데 필요한 API 코드를 만듭니다. 그들을 사용하는 방법에 대해 자세히 알아보십시오.</li>
 <li><a href="/ko/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly JavaScript API</a> — WebAssembly API 코드가 작동하는 방식에 대해 자세히 알고 싶다면이 내용을 읽으십시오.</li>
 <li><a href="https://github.com/WebAssembly/design/blob/master/TextFormat.md">Text format</a> — WebAssembly GitHub repo에서 텍스트 형식에 대한 자세한 설명.</li>
 <li><a href="https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader">wast-loader</a> — 이 모든 것을 처리하는 WebPack 용 로더입니다.</li>
</ul>
