---
title: Rust를 WebAssembly로 컴파일하기
slug: WebAssembly/Rust_to_wasm
tags:
  - rust
  - 웹어셈블리
  - 컴파일
translation_of: WebAssembly/Rust_to_wasm
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">여러분이 Rust 코드를 가지고 있다면 WebAssembly로 컴파일 할 수 있습니다. 이 튜토리얼은 Rust 프로젝트를 컴파일하여 기존 웹 애플리케이션에서 사용하기 위해 알아야 할 모든 것을 설명합니다.</p>

<h2 id="Rust_및_WebAssembly_사용_사례">Rust 및 WebAssembly 사용 사례</h2>

<p>Rust와 WebAssembly를 위한 두가지 주요 사용 사례가 있습니다.</p>

<ul>
 <li>어플리케이션 전체를 만드는것 - Rust기반 Web app 만들기</li>
 <li>어플리케이션의 일부를 만드는것 - Rust를 기존에 존재하는 JavaScript frontend에서 사용하는것</li>
</ul>

<p>당분간, Rust 팀은 후자의 경우에 초점을 맞출 것입니다.그래서 여기서는 두번째 내용에 대해 다루겠습니다. 첫번째 use-case는 <a href="https://github.com/DenisKolodin/yew"><code>yew</code></a>와 같은 프로젝트를 한번 확인해보세요.</p>

<p>이 튜토리얼에서는 Rust의 npm 패키지를 빌드하는 도구인 <code>wasm-pack</code>을 사용하여 npm 패키지를 빌드합니다. 이 패키지에는 WebAssembly 및 JavaScript 코드만 포함되므로 패키지 사용자는 Rust를 설치할 필요가 없습니다. 심지어 WebAssembly에서 작성된 것임을 알지 못할 수도 있습니다.</p>

<h2 id="Rust_환경_설치">Rust 환경 설치</h2>

<p>환경을 설치하기 위해 필요한 모든 단계를 수행해 봅시다.</p>

<h3 id="Rust_설치">Rust 설치</h3>

<p><a href="https://www.rust-lang.org/install.html">Install Rust</a>와 다음 설명에 따라 Rust를 설치합니다. "rustup"이라는 툴을 설치할건데 다양한 버전의 Rust를 관리할 수 있게 해줍니다. 기본적으로 최신 배포버전의 Rust가 설치됩니다. Rustup은 Rust 컴파일러인 <code>rustc</code> Rust의 표준 라이브러리 인 <code>rust-std</code>, Rust의 패키지 메니저 <code>cargo</code>및 <code>rust-docs</code> 등 유용한 문서를 설치합니다.</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: 설치를 완료한 뒤 cargo의 <code>bin</code> 디렉토리가 시스템의 <code>PATH</code>에 등록되어 있어야 함에 주의하십시오. 보통은 자동으로 등록되지만, 터미널을 재시작해야 할 수도 있습니다.</p>
</div>

<h3 id="wasm-pack">wasm-pack</h3>

<p>패키지를 빌드하기 위해, <code>wasm-pack</code>이라는 추가적인 툴이 필요합니다. 이것을 통해 코드를 WebAssembly로 컴파일하고, <code>npm</code>에 적합한 패키징을 생성할 수 있습니다. 설치를 하려면 터미널에 다음 명령을 입력합니다.</p>

<pre class="notranslate"><code>$ cargo install wasm-pack</code></pre>

<h3 id="Node.js_설치와_npm_계정_생성">Node.js 설치와 npm 계정 생성</h3>

<p>이 튜토리얼에서 우리는 npm 패키지를 생성할 것이므로 Node.js와 npm이 설치되어 있어야 합니다. 추가적으로, 우리는 npm에 패키지를 배포할 것이며 npm 계정 역시 필요합니다. 이것들은 모두 무료입니다. 당신은 <em>기술적으로는</em> 패키지를 배포할 필요가 없지만, 패키지를 사용하는 것이 더 쉬우므로 이 튜토리얼에서 수행한다고 가정합니다.</p>

<p>Node.js와 npm을 설치하려면 <a href="https://www.npmjs.com/get-npm">Get npm!</a> 페이지를 열고 안내를 따라하시면 됩니다. 버전을 선택할 때, 원하는 것을 선택하면 됩니다. 이 튜토리얼은 버전과는 무관합니다.</p>

<p>npm 계정을 만드려면 <a href="https://www.npmjs.com/signup">npm 가입 페이지</a> 에서 양식을 작성하시면 됩니다.</p>

<p>그 다음은, 명령줄에서 <code>npm adduser</code> 명령을 실행합니다.</p>

<pre class="notranslate"><code>$ npm adduser
Username: yournpmusername
Password:
Email: (this IS public) you@example.com</code></pre>

<p>계정명과 패스워드, 그리고 이메일을 입력하세요. 제대로 작동했다면, 다음 출력을 볼 수 있습니다.</p>

<pre class="notranslate"><code>Logged in as yournpmusername on https://registry.npmjs.org/.</code></pre>

<p>만약 제대로 되지 않았다면, 문제 해결을 위해 npm에 문의를 해보세요.</p>

<h2 id="WebAssembly_npm_패키지_빌드하기">WebAssembly npm 패키지 빌드하기</h2>

<p>설치가 다 되었으므로, Rust의 새 패키지를 만듭시다. 개인 프로젝트를 담는 디렉터리로 이동한 뒤, 다음 명령어를 입력합니다.</p>

<pre class="notranslate"><code>$ cargo new --lib hello-wasm
     Created library `hello-wasm` project</code></pre>

<p>이 명령어는 <code>hello-wasm</code>으로 이름지어진 하위 디렉터리에 새 라이브러리를 생성합니다.</p>

<pre class="notranslate"><code>+-- Cargo.toml
+-- src
    +-- lib.rs</code></pre>

<p>첫번째로, <code>Cargo.toml</code>은 빌드를 위해 설정하는 파일입니다. Bundler에서 <code>Gemfile</code>이나 npm에서 <code>package.json</code>을 써보셨다면 꽤 익숙할 것입니다. Cargo는 이것들과 비슷한 방식으로 작동합니다.</p>

<p>다음은, Cargo가 <code>src/lib.rs</code>에 다음 Rust 코드를 생성했을 것입니다.</p>

<pre class="notranslate"><code>#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}</code></pre>

<p>우리는 이 테스트 코드를 사용하지 않을 것이므로, 삭제해도 좋습니다.</p>

<h3 id="Rust로_무언가를_써보기">Rust로 무언가를 써보기</h3>

<p><code>src/lib.rs</code>에 다음 코드를 적어봅시다.</p>

<pre class="notranslate"><code>use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &amp;str);
}

#[wasm_bindgen]
pub fn greet(name: &amp;str) {
    alert(&amp;format!("Hello, {}!", name));
}</code></pre>

<p>이것은 우리의 Rust project의 내용으로, 세가지 주요 부분이 있습니다. 그들에 대해 차례대로 얘기해봅시다. 여기서는 고수준의 설명을 제공하고 일부 세부 사항에 대해서 설명합니다. Rust 언어에 대해 좀 더 배우고 싶으시면 <a href="https://doc.rust-lang.org/book/">The Rust Programming Language</a> 에서 확인하시면 됩니다.</p>

<h4 id="Rust와_JavaScript간의_통신을_위한_wasm-bindgen_사용">Rust와 JavaScript간의 통신을 위한 <code>wasm-bindgen</code> 사용</h4>

<p>첫 부분은 다음과 같습니다.</p>

<pre class="notranslate"><code>use wasm_bindgen::prelude::*;</code></pre>

<p>Rust에서 라이브러리는 크레이트(crate)라고 합니다.</p>

<p>알 것 같나요? <em>Cargo(화물) </em>는 배에 <em>crate(상자) </em>들을 실어 나릅니다.</p>

<p>세번째 줄의 <code>use</code> 키워드는 라이브러리로부터 코드를 불러옵니다. 이 경우, 우리는 <code>wasm_bindgen::prelude</code> 모듈 내에 있는 모든 것을 불러오게 됩니다. 다음 섹션에서 이것들의 기능에 대해 다룰 것입니다.</p>

<p>다음 섹션으로 넘어가기 전에 <code>wasm-bindgen</code>에 대해 좀 더 얘기해야 합니다.</p>

<p><code>wasm-pack</code>은 다른 도구인 <code>wasm-bindgen</code>을 사용해 JavaScript와 Rust의 타입들 사이에 다리를 제공합니다. 이는 JavaScript가 문자열을 통해 Rust의 API를 호출하거나, JavaScript의 예외를 포착하기 위해 Rust의 함수를 호출할 수 있습니다.</p>

<p>우리는 패키지에서 <code>wasm-bindgen</code>의 기능을 사용할 것입니다. 실은, 그것들은 다음 섹션에 있습니다.</p>

<h4 id="Rust에서_JavaScript의_외부함수_호출">Rust에서 JavaScript의 외부함수 호출</h4>

<p>다음 부분은 이렇게 되어있을 것입니다.</p>

<pre class="notranslate"><code>#[wasm_bindgen]
extern {
    pub fn alert(s: &amp;str);
}</code></pre>

<p><code>#[ ]</code> 안에 있는 것을 속성이라고 부르는데, 이것은 다음에 오는 구문을 수정합니다. 이 경우에, 그 구문은 <code>extern</code>이며, Rust에게 외부에 정의된 함수를 호출할 것임을 알립니다. 이 속성의 경우, "<code>wasm-bindgen</code>은 이 함수들을 어떻게 찾을 것인지 알고 있다"고 알리는 것입니다.</p>

<p>세번째 줄의 함수 시그니처는 Rust로 작성되어있습니다. <code>alert</code> 함수는 문자열 타입의 <code>s</code> 하나를 인자로서 받는다는 의미입니다.</p>

<p>짐작하셨듯이, 이것은 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert">JavaScript에 의해 제공되는 <code>alert</code> 함수</a>입니다. 다음 섹션에서 이 함수를 호출할 것입니다.</p>

<p>JavaScript 함수를 호출하고 싶을 때면 언제든지 이들을 파일에 추가할 수 있으며, `wasm-bindgen`이 당신을 위해 그 모든 것을 설정할 것입니다. 아직 모든 것이 지원되지는 않지만, 우리는 노력하고 있습니다. 빠진 것이 있다면, <a href="https://github.com/rustwasm/wasm-bindgen/issues/new">버그를 제출해주십시오.</a> </p>

<h4 id="JavaScript가_호출할_수_있는_Rust_함수_작성">JavaScript가 호출할 수 있는 Rust 함수 작성</h4>

<p>마지막 부분은 여기 있습니다.</p>

<pre class="notranslate"><code>#[wasm_bindgen]
pub fn greet(name: &amp;str) {
    alert(&amp;format!("Hello, {}!", name));
}</code></pre>

<p><code>#[wasm_bindgen]</code> 속성이 한번 더 나왔습니다. 이번엔 <code>extern</code> 구문이 수정되는 대신, <code>fn</code> 구문이 수정됩니다. 이것은 Rust 함수를 JavaScript에 의해 호출될 수 있도록 함을 의미하며, <code>extern</code> 과는 반대 기능이 됩니다. 이것은 우리가 필요로 하는 기능이 아니라, 우리가 세상에 제공하는 기능이 될 것입니다.</p>

<p>이 함수의 이름은 <code>greet</code>이며, (<code>&amp;str</code> 이라고 쓰여진) 문자열 타입의 <code>name</code> 하나를 인자로 갖습니다. 이것은 우리가 위에 있는 <code>extern</code> 블록에서 요구한 <code>alert</code> 함수를 호출하여, 문자열을 연결하는 <code>format!</code> 매크로를 전달합니다.</p>

<p><code>format!</code>매크로는 이 경우에 서식 문자열과 변수를 두개의 인자로 받습니다. 서식 문자열은 <code>"Hello, {}!"</code> 입니다. 이것은 두번째 인자의 변수를 표시할 <code>{}</code>를 담고 있습니다. 변수의 경우 함수의 인자로 전달받은 <code>name</code>을 전달하므로, 우리가 <code>greet("Steve")</code>를 호출하였다면 매크로는 <code>"Hello, Steve!"</code>를 반환할 것입니다.</p>

<p>이것은 <code>alert()</code>에 인자로 전달되므로, 이 함수를 호출한다면 우리는 브라우저의 경고창에서 "Hello, Steve!"를 볼 수 있을 것입니다.</p>

<p>라이브러리가 모두 작성되었으므로, 빌드를 해봅시다.</p>

<h3 id="작성된_코드를_WebAssembly로_컴파일">작성된 코드를 WebAssembly로 컴파일</h3>

<p>컴파일이 올바르게 되려면, 먼저 <code>Cargo.toml</code>에서 설정을 해줘야 합니다. 파일을 열면, 다음과 같은 내용이 있을 것입니다.</p>

<pre class="notranslate"><code>[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name &lt;you@example.com&gt;"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"</code></pre>

<p>리포지토리 이름을 작성하고, <code>author</code> 필드를 <code>git</code>이 사용하는 것과 같게 설정해주세요.</p>

<p>추가해야 할 커다란 부분은 아래에 있습니다. <code>[lib]</code> 섹션은 패키지를 <code>cdylib</code> 형식으로 빌드할 것이라고 Rust에게 알리는데, 이 튜토리얼에선 그 의미가 무엇인지 다루지 않을 것입니다. 자세한 설명은 <a href="https://doc.rust-lang.org/cargo/guide/">Cargo</a> 와 <a href="https://doc.rust-lang.org/reference/linkage.html">Rust Linkage</a> 문서를 참조하십시오.</p>

<p>마지막의 <code>[dependencies]</code> 섹션에서, Cargo에게 어떤 버전의 <code>wasm-bindgen</code>에 의존하고 있는지 알립니다. 이 경우, 버전 <code>0.2.z</code>는 어떤 것이든 사용할 수 있지만, <code>0.3.0</code>이상부터는 사용하지 않습니다.</p>

<h3 id="패키지_빌드하기">패키지 빌드하기</h3>

<p>모든 셋팅이 끝났으므로, 패키지를 빌드합시다. 터미널에 다음을 입력합니다.</p>

<pre class="notranslate"><code>$ wasm-pack build --scope mynpmusername</code></pre>

<p>이 명령어를 입력하면 많은 일이 일어납니다. (그리고 특히 <code>wasm-pack</code>을 처음 실행했을 때 처럼 많은 시간이 걸립니다.) 이에 대한 자세한 사항을 알고 싶으면, <a href="https://hacks.mozilla.org/2018/04/hello-wasm-pack/">Mozilla Hacks의 블로그 포스트</a>를 확인해보세요. 간단히 요약하자면, <code>wasm-pack build</code>는:</p>

<ol>
 <li>Rust 코드를 WebAssembly로 컴파일 합니다.</li>
 <li>그 WebAssembly 위에서 <code>wasm-bindgen</code>을 실행하여, WebAssembly를 npm이 이해할 수 있는 모듈로 감싸는 JavaScript 파일을 생성합니다.</li>
 <li><code>pkg</code> 디렉터리를 만들고 JavaScript 파일과 WebAssembly 코드를 그 안으로 옮깁니다.</li>
 <li><code>Cargo.toml</code>을 읽고 동등한 <code>package.json</code>을 생성합니다.</li>
 <li><code>README.md</code>가 있다면 패키지로 복사합니다.</li>
</ol>

<p>빌드가 끝났다면, <code>pkg</code> 디렉터리에 npm 패키지가 생성될 것입니다.</p>

<h4 id="코드_사이즈에_대한_오류">코드 사이즈에 대한 오류</h4>

<p>생성된 WebAssembly 코드의 크기를 확인해보면, 몇백 킬로바이트가 될 것입니다. 우리는 Rust에게 코드의 크기를 최적화하라고 지시하지 않았으며, 만약 그렇게 지시한다면 크기가 <em>많이</em> 줄어들 것입니다. 이것은 이 튜토리얼에서 다루는 내용을 벗어나지만, 자세한 내용을 보려면 <a href="https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size">Shrinking .wasm Size</a>에 대한 Rust WebAssembly Working Group의 문서를 참조하십시오.</p>

<h3 id="npm에_패키지_배포">npm에 패키지 배포</h3>

<p>npm에 우리의 새 패키지를 배포해봅시다.</p>

<pre class="notranslate"><code>$ cd pkg
$ npm publish --access=public</code></pre>

<p>우리는 이제 Rust로 쓰여졌으나, WebAssembly로 컴파일된 npm 패키지를 갖고 있습니다. 이것은 JavaScript에 쓰일 수 있도록 준비되었으며, 다른 사용자들은 Rust를 설치할 필요가 없습니다. 왜냐하면 패키지에는 WebAssembly 코드만 포함되어있으며, Rust 소스는 없기 때문입니다.</p>

<h2 id="웹상의_패키지_사용하기">웹상의 패키지 사용하기</h2>

<p>우리의 새 패키지를 사용하는 웹사이트를 빌드해봅시다. 많은 사람들이 여러가지 번들러 도구를 사용해 npm패키지를 사용하는데, 이 튜토리얼에선 이들 중 하나인 <code>webpack</code>을 사용할 것입니다. 이것은 조금 복잡하고, 현실적인 사용 사례를 보여줄 것입니다.</p>

<p><code>pkg</code> 와 <code>hello-wasm</code> 디렉터리를 빠져나가서, 다음처럼 <code>site</code>라는 이름의 새 디렉터리를 만들고 진입합니다.</p>

<pre class="notranslate"><code>$ cd ../..
$ mkdir site
$ cd site</code></pre>

<p><code>package.json</code> 이라는 이름의 새 파일을 만들어, 다음 코드를 작성합니다.</p>

<pre class="notranslate"><code>{
  "scripts": {
    "serve": "webpack-dev-server"
  },
  "dependencies": {
    "@mynpmusername/hello-wasm": "^0.1.0"
  },
  "devDependencies": {
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}</code></pre>

<p><code>dependencies</code> 섹션에서 <code>@</code> 뒤에 실제 npm 계정명을 넣어주세요.</p>

<p>그 다음은 Webpack을 설정해야 합니다. <code>webpack.config.js</code> 파일을 만든 뒤, 다음 코드를 작성합니다.</p>

<pre class="notranslate"><code>const path = require('path');
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development"
};</code></pre>

<p>그리고 HTML 파일도 필요합니다. <code>index.html</code>을 만들고, 다음 내용을 작성합니다.</p>

<pre class="notranslate"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;hello-wasm example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src="./index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>마지막으로, HTML에서 참조되는 <code>index.js</code>를 만들어 다음 내용을 작성합니다.</p>

<pre class="notranslate"><code>const js = import("./node_modules/@yournpmusername/hello-wasm/hello_wasm.js");
js.then(js =&gt; {
  js.greet("WebAssembly");
});</code></pre>

<p>npm 계정명을 한번 더 입력해야 합니다.</p>

<p>이것은 <code>node_modules</code> 폴더에 있는 새 모듈을 불러옵니다. 이것은 모범 사례로 여겨지진 않지만, 데모이므로 지금은 괜찮습니다. 모듈이 로드되었면, 모듈로부터 <code>greet</code> 함수를 호출하여 <code>"WebAssembly"</code> 를 문자열로서 전달합니다. 여기엔 특별한 것이 없지만, Rust 코드를 호출한 방법에 주목해주세요. JavaScript 코드가 알 수 있는 한, 이것은 그저 정상적인 모듈일 뿐입니다.</p>

<p>파일들을 모두 만들었으니, 한번 보도록 합시다.</p>

<pre class="notranslate"><code>$ npm install
$ npm run serve</code></pre>

<p>이것은 간단한 웹 서버를 시작합니다. <a href="http://localhost:8080/">http://localhost:8080</a>을 열면 화면에 <code>Hello, WebAssembly!</code> 라고 쓰여진 alert box가 나타납니다. 우리는 성공적으로 JavaScript로부터 Rust를, Rust로부터 JavaScript를 호출하였습니다.</p>

<h2 id="결론">결론</h2>

<p>이것이 튜토리얼의 끝입니다. 우리는 당신이 이것이 쓸모있다는 것을 알게 되었길 기대합니다.</p>

<p>여기에 많은 흥미로운 작업이 진행되고 있습니다. 이것을 좀 더 낫게 만들고 싶다면, <a href="http://fitzgeraldnick.com/2018/02/27/wasm-domain-working-group.html">the Rust Webassembly Working Group</a>을 확인해보세요.</p>
