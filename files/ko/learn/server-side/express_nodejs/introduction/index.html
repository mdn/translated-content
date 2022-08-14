---
title: Express/Node 소개
slug: Learn/Server-side/Express_Nodejs/Introduction
translation_of: Learn/Server-side/Express_Nodejs/Introduction
---
<div>{{LearnSidebar}}</div>

<div>{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}</div>

<p class="summary">첫번째 Express 수업에서는 Node, Express를 알아보고, Express 웹 프레임워크 제작의 전반에 대해 배우게 됩니다.<br>
 우선 주요 특징들에 대한 틀을 정리한 후 Express 어플리케이션을 구성하는 주요 구성요소들을 살펴볼 것입니다. (테스트할 개발환경은 아직이겠지만요)</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">알아야 할 것들</th>
   <td>기본적인 컴퓨터의 이해. 서버 사이드 웹사이트 프로그래밍(<a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps">server-side website programming</a>), 그리고 특별히 웹사이트에서 클라이언트와 서버간의 상호작용(<a href="/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview">client-server interactions in websites</a>)의 메커니즘에 대한 이해</td>
  </tr>
  <tr>
   <th scope="row">목표</th>
   <td>Express에 익숙해지고, Node와 어떻게 함께 사용되는지, 기능은 어떠한지, 그리고 Express 어플리케이션의 주요한 구성요소들에 대해 배운다.</td>
  </tr>
 </tbody>
</table>

<h2 id="Express와_Node란">Express와 Node란?</h2>

<p><a href="https://nodejs.org/">Node</a> (또는 더 공식적으로는 Node.js) 는 오픈소스, 크로스 플랫폼이며, 개발자가 모든 종류의 서버 사이드 도구들과 어플리케이션을 <a href="/en-US/docs/Glossary/JavaScript">JavaScript</a>로 만들수 있도록 해주는 런타임 환경이다.런타임은 브라우져 영역 밖에서도 사용할수 있도록 의도했다.(예를들면 서버 OS 또는 컴퓨터에서 직접적으로 실행되는). 이와 같이,  이 환경에서 특정 브라우져에서의 자바스트립트 API들을 제외시키고 ,  HTTP 와 파일 시스템 라이브러리들을 포함하여 더 많은 전형적인 OS API들을 추가했다.</p>

<p>웹 서버 관점에서 노드는 많은 장점들을 가진다:</p>

<ul>
 <li>훌륭한 퍼포먼스! Node는 단위시간당 처리량과 어플리케이션에서 확장성을 최적화 시키고, 많은 공통적인 웹 개발 문제들을 맞먹는다.(예를들면  실시간 웹 어플리케이션들)</li>
 <li>코드는 순수한 자바스크립트로 작성된다, 이는 당신이 각각 브라우져와 웹 서버 코드를 작성할때 언어들 사이에 "context shift" 를 다루는 시간을 적게 할수 있을을 의미한다.</li>
 <li>자바스크립트는 비교적 새로운 프로그래밍 언어이고 또다른 전통적인 웹서버 언어들과 비교할때 언어적 설계에서 향상의 이득을 가진다. 많은 다른 새롭거나 인기있는 언어들은 자바스크립트로 컴파일하거나 변환한다 그래서 또한 당신은 커피스크립트, 클로져스크립트, 스칼라, 라이브 스크립트 등등을 사용할 수 있다.</li>
 <li>노드 패키지 매니저(NPM)는 수천만개의 재사용가능한 패키지에 접근할 수 있도록 한다. 이것은 최고의 의존성 해결과 또한 수많은 빌드 툴체인이 자동화되도록 한다.</li>
 <li>이것은 마이크로소프트 윈도우, OS X, 룩스, 솔라리스, FreeBSD, OpenBSD, WebOS, 그리고 NonStop OS 등에서 돌아가는 버전과 같이 포터플하다.  더군다나, 이것은 특정한 인프라구조를 지원하고  Node 사이트 호스팅을 위한 문서를 제공하는 많은 웹 호스팅 공급자들에 의해서 잘 지원되고 있다.</li>
 <li>도움을 주고자 하는 수많은 사람들이 존재하는 아주 활발한 개발 생태계와 커뮤니티를 지니고 있다.</li>
</ul>

<h3 id="Hello_Node.js">Hello Node.js</h3>

<p>아래 코드처럼 Node에 HTTP 모듈을 사용하여 모든 요청에 응답이 가능한 간단한 웹 서버를 쉽게 생성할 수 있습니다.</p>

<p>이렇게하면 웹 서버가 만들어지고 URL <code>http://127.0.0.1:8000/</code> 에 있는 모든 종류의 HTTP 요청에 수신하게 됩니다. 요청이 하나 들어왔을 때, "Hello World" 텍스트 응답을 보내도록 하겠습니다.</p>

<ol>
 <li>터미널을 연다. (윈도우에서는, 커맨드라인 유틸리티)<br>
  ※ 윈도우 키 + R =&gt; 'CMD'</li>
 <li>프로그램을 저장할 폴더를 생성하고(여기서는 <code>test-node</code>), 아래 명령을 입력하여 해당 폴더로 이동한다.</li>
</ol>

<pre class="notranslate">cd test-node</pre>

<ol start="3">
 <li>즐겨쓰는 텍스트에디터를 열어 아래 코드를 입력한 후, 파일명 <code>hello.js</code> 로 저장한다.</li>
</ol>

<pre class="brush: js notranslate">//Load HTTP module
var http = require("http");

//Create HTTP server and listen on port 8000 for requests
http.createServer(function (request, response) {

   // Set the response HTTP header with HTTP status and Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   response.end('Hello World\n');
}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/')</pre>

<p>4. 터미널로 돌아가 아래 명령을 입력한다.</p>

<pre class="brush: bash notranslate">node hello.js</pre>

<p>이제, 웹브라우저를 열어 다음 주소로 이동한다. <code>http://localhost:8000</code> 곧바로 좌상단에 "<strong>Hello World</strong>" 문구가 있고, 나머지 영역은 비어있는 웹페이지를 볼 수 있다.</p>

<p>Node 자체가 다른 일반적인 웹 개발 기능을 지원하지 않습니다. 만약 다른 HTTP 패턴 (예 : <code>GET</code>, <code>POST</code>, <code>DELETE</code> 등)에 대한 특정 처리를 추가하려면 서로 다른 URL 경로("routes")를 사용하여 요청을 개별적으로 처리, 정적 파일을 제공, 템플릿을 사용하여 동적으로 응답을 생성할 수 있으며, 코드를 직접 작성할 필요가가 생기게 됩니다. 또는 기본적인 것들을 직접 구현하는 작업을 피하고 웹 프레임 워크를 사용할 수 있습니다! </p>

<p><a href="https://expressjs.com/">Express</a> 는 가장 인기있는 Node 웹 프레임 워크 이며, 다른 많은 인기있는 <a href="https://expressjs.com/en/resources/frameworks.html">Node web frameworks</a>의 기본 라이브러리 입니다. Express는 다음과 같은 메커니즘을 제공합니다:</p>

<ul>
 <li>HTTP 통신 요청(Request; GET, POST, DELETE 등)에 대한 핸들러를 만든다.</li>
 <li>템플릿에 데이터를 넣어 응답(response)을 만들기 위해 view의 렌더링 엔진과 결합(integrate)한다. </li>
 <li>접속을 위한 포트나 응답 렌더링을 위한 템플릿 위치같은 공통 웹 어플리케이션 세팅을 한다. </li>
 <li>핸들링 파이프라인(reqest handling pipeline) 중 필요한 곳에 추가적인 미들웨어 처리 요청을 추가한다.</li>
</ul>

<p><em>Express</em> 자체는 꽤나 최소한의 기능만 탑재하지만 개발자들이 거의 모든 웹 개발의 문제를 다루는 호환성있는 미들웨어 패키지를 만들어왔습니다. 쿠키, 세션, 사용자 로그인, URL 파라미터, <code>POST</code> 데이터, 보안 헤더와 그외 많은 것들에 대한 라이브러리들이 있습니다. 여러분은 <a href="http://expressjs.com/en/resources/middleware.html">Express Middleware</a>에서 Express 팀이 유지보수하는 미들웨어 패키지 리스트를 확인할 수 있습니다. (유명한 서드파티 패키지들을 포함).</p>

<div class="note">
<p><strong>Note:</strong> This flexibility is a double edged sword. There are middleware packages to address almost any problem or requirement, but working out the right packages to use can sometimes be a challenge. There is also no "right way" to structure an application, and many examples you might find on the Internet are not optimal, or only show a small part of what you need to do in order to develop a web application.</p>
</div>

<h2 id="유래">유래</h2>

<p>노드(Node)는 2009년 리눅스 한정으로 배포 되었다. NPM은 2010년에 배포되었고, 네이티브 윈도우즈(Windows)는 2012년부터 지원하기 시작하였다. 현재 배포중인 최신 LTS 버전은 Node v8.9.3이 있고, 가장 최신 버전은 Node 9 이다. 이것은 유구한 역사를 짧게 적어본 것으로 더 알고 싶다면 <a href="https://ko.wikipedia.org/wiki/Node.js">위키페디아</a>를 참조하면 된다.</p>

<p>Express는 2010년 11월 처음 배포되었고 현재는 4.16 버전이 되었다. 현재 배포 버전과의 변경사항을 알고 싶다면 <a href="https://expressjs.com/en/changelog/4x.html">changelog</a> 를 확인하면 된다. 그리고 더 자세한 역사와 릴리즈 노트는 <a href="https://github.com/expressjs/express/blob/master/History.md">GitHub</a> 를 참조하면 된다.</p>

<h2 id="어떻게_NodeExpress가_유명해졌을까">어떻게 Node/Express가 유명해졌을까?</h2>

<p>유명한 웹 프레임워크 쓴다는 것은 아주 중요합니다. 바로 해당 기술에 대한 지속가능성, 문서화, 추가 라이브러리, 그리고 기술 지원 자원에 대한 지표가 되기 때문입니다. </p>

<p>There isn't any readily-available and definitive measurement of the popularity of server-side frameworks (although sites like <a href="http://hotframeworks.com/">Hot Frameworks</a> attempt to assess popularity using mechanisms like counting the number of GitHub projects and StackOverflow questions for each platform). A better question is whether Node and Express are "popular enough" to avoid the problems of unpopular platforms. Are they continuing to evolve? Can you get help if you need it? Is there an opportunity for you to get paid work if you learn Express?</p>

<p>Based on the number of <a href="https://expressjs.com/en/resources/companies-using-express.html">high profile companies</a> that use Express, the number of people contributing to the codebase, and the number of people providing both free and paid for support, then yes, <em>Express</em> is a popular framework!</p>

<h2 id="Express는_개발이_자유로울까">Express는 개발이 자유로울까?</h2>

<p>Web frameworks often refer to themselves as "opinionated" or "unopinionated".</p>

<p>Opinionated frameworks are those with opinions about the "right way" to handle any particular task. They often support rapid development <em>in a particular domain </em>(solving problems of a particular type) because the right way to do anything is usually well-understood and well-documented. However they can be less flexible at solving problems outside their main domain, and tend to offer fewer choices for what components and approaches they can use.</p>

<p>Unopinionated frameworks, by contrast, have far fewer restrictions on the best way to glue components together to achieve a goal, or even what components should be used. They make it easier for developers to use the most suitable tools to complete a particular task, albeit at the cost that you need to find those components yourself.<br>
 <br>
 Express is unopinionated. You can insert almost any compatible middleware you like into the request handling chain, in almost any order you like. You can structure the app in one file or multiple files, and using any directory structure. You may sometimes feel that you have too many choices!</p>

<h2 id="Express의_코드는_어떻게_생겼을까">Express의 코드는 어떻게 생겼을까?</h2>

<p>In a traditional data-driven website, a web application waits for HTTP requests from the web browser (or other client). When a request is received the application works out what action is needed based on the URL pattern and possibly associated information contained in <code>POST</code> data or <code>GET</code> data. Depending on what is required it may then read or write information from a database or perform other tasks required to satisify the request. The application will then return a response to the web browser, often dynamically creating an HTML page for the browser to display by inserting the retrieved data into placeholders in an HTML template.</p>

<p>Express provides methods to specify what function is called for a particular HTTP verb (<code>GET</code>, <code>POST</code>, <code>SET</code>, etc.) and URL pattern ("Route"), and methods to specify what template ("view") engine is used, where template files are located, and what template to use to render a response. You can use Express middleware to add support for cookies, sessions, and users, getting <code>POST</code>/<code>GET</code> parameters, etc. You can use any database mechanism supported by Node (Express does not define any database-related behaviour).</p>

<p>The following sections explain some of the common things you'll see when working with <em>Express</em> and <em>Node</em> code.</p>

<h3 id="Helloworld_Express">Helloworld Express</h3>

<p>First lets consider the standard Express <a href="https://expressjs.com/en/starter/hello-world.html">Hello World</a> example (we discuss each part of this below, and in the following sections).</p>

<div class="note">
<p><strong>Tip:</strong> If you have Node and Express already installed (or if you install them as shown in the <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment">next article</a>), you can save this code in a file called <strong>app.js</strong> and run it in a command prompt by calling <code>node app.js</code>.</p>
</div>

<pre class="brush: js notranslate">var express = require('express');
var app = express();

<strong>app.get('/', function (req, res) {
  res.send('Hello World!');
});</strong>

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
</pre>

<p>The first two lines <code>require()</code> (import) the express module and create an <a href="https://expressjs.com/en/4x/api.html#app">Express application</a>. This object, which is traditionally named <code>app</code>, has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying <a href="https://expressjs.com/en/4x/api.html#app.settings.table">application settings</a> that control how the application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)</p>

<p>The middle part of the code (the three lines starting with <code>app.get</code>) shows a <em>route definition</em>. The <code>app.get()</code> method specifies a callback function that will be invoked whenever there is an HTTP <code>GET</code> request with a path (<code>'/'</code>) relative to the site root. The callback function takes a request and a response object as arguments, and simply calls <code><a href="https://expressjs.com/en/4x/api.html#res.send">send()</a></code> on the response to return the string "Hello World!"</p>

<p>The final block starts up the server on port '3000' and prints a log comment to the console. With the server running, you could go to <code>localhost:3000</code> in your browser to see the example response returned.</p>

<h3 id="모듈의_생성과_불러옴Importing_and_creating_modules">모듈의 생성과 불러옴(Importing and creating modules)</h3>

<p>A module is a JavaScript library/file that you can import into other code using Node's <code>require()</code> function. <em>Express</em> itself is a module, as are the middleware and database libraries that we use in our <em>Express</em> applications.</p>

<p>The code below shows how we import a module by name, using the <em>Express</em> framework as an example. First we invoke the <code style="font-style: normal; font-weight: normal;">require()</code> function, specifying the name of the module as a string (<code>'express'</code>), and calling the returned object to create an <a href="https://expressjs.com/en/4x/api.html#app">Express application</a>. We can then access the properties and functions of the application object.</p>

<pre class="brush: js notranslate">var express = require('express');
var app = express();
</pre>

<p>You can also create your own modules that can be imported in the same way.</p>

<div class="note">
<p><strong>Tip:</strong> You will <em>want </em>to create your own modules, because this allows you to organise your code into managable parts — a monolithic single-file application is hard to understand and maintain. Using modules also helps you manage your namespace, because only the variables you explicitly export are imported when you use a module.</p>
</div>

<p>To make objects available outside of a module you just need to assign them to the <code>exports</code> object. For example, the <strong>square.js</strong> module below is a file that exports <code>area()</code> and <code>perimeter()</code> methods:</p>

<pre class="brush: js notranslate">exports.area = function (width) { return width * width; };
exports.perimeter = function (width) { return 4 * width; };
</pre>

<p>We can import this module using <code>require()</code>, and then call the exported method(s) as shown:</p>

<pre class="brush: js notranslate">var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));</pre>

<div class="note">
<p><strong>Note:</strong> You can also specify an absolute path to the module (or a name, as we did initially).</p>
</div>

<p>If you want to export a complete object in one assignment instead of building it one property at a time, assign it to <code>module.exports</code> as shown below (you can also do this to make the root of the exports object a constructor or other function):</p>

<pre class="brush: js notranslate">module.exports = {
  area: function(width) {
    return width * width;
  },

  perimeter: function(width) {
    return 4 * width;
  }
};
</pre>

<p>For a lot more information about modules see <a href="https://nodejs.org/api/modules.html#modules_modules">Modules</a> (Node API docs).</p>

<h3 id="비동기식_API의_사용">비동기식 API의 사용</h3>

<p>JavaScript 코드는 완료까지 시간이 다소 소요될 수 있는 작업에 대해 동기보다 비동기 API를 자주 사용합니다. 동기 API는 다음 작업이 시작하기 전에 각 작업이 완료되어야만 합니다. 예를 들어, 다음의 로그함수들은 동기식이며 텍스트를 순서대로 콘솔에 나타낼 것입니다.(First, Second)</p>

<pre class="brush: js notranslate">console.log('First');
console.log('Second');</pre>

<p>반면 비동기 API는 API가 작업을 시작하고, 즉시 반환(작업이 완료되기 전에)합니다. 작업이 완료되면 API는 추가적인 작업 수행을 위한 일부 매커니즘을 사용합니다. 예를 들어 아래의 코드는  "Second, First"를 출력합니다. 그   이유는 <code>setTimeout()</code> 메서드가 먼저 호출되고 즉시 반환되더라도, 작업이 몇 초 동안 완료되지 않기 때문입니다.</p>

<pre class="brush: js notranslate">setTimeout(function() {
   console.log('First');
   }, 3000);
console.log('Second');
</pre>

<p>Node는 싱글 스레드 이벤트 기반 환경이기 때문에 non-blocking 비동기 API는 브라우저보다 Node에서 훨씬 더 중요합니다.</p>

<p>'싱글 스레드'는 서버에 모든 요청이 별도의 프로세스로 생성되지 않고 동일한 스레드에서 실행되는 것을 의미합니다. 이 모델은 속도와 서버 리소스 측면에서 아주 효율적이지만, 만약 특정 함수가 완료되는데에 오랜 시간이 걸리는 동기 메서드를 호출하는 함수가 있다면 현재 요청 뿐만 아니라 웹 어플리케이션에서 다른 요청이 처리되는 것도 차단합니다.</p>

<p>비동기 API가 완료되었음을 어플리케이션에 알리는 방법은 여러가지가 있습니다. 가장 일반적인 방법은 비동기 API를 호출시 작업이 완료되면 다시 호출되는 콜백함수를 이용하는 것이며, 위의 예제에서 사용된 방식입니다.</p>

<div class="note">
<p><strong>Tip:</strong> 순서대로 수행해야하는 종속적인 비동기 작업들이 있을 경우, 콜백을 사용하는 것은 꽤 복잡할 수 있습니다. 중첩된 여러 단계의 콜백이 생성되기 때문입니다. 이 문제는 흔히 'callback hell'이라고 일컬어집니다. 이 문제는 good coding practices(<a href="http://callbackhell.com/">http://callbackhell.com/</a> 참고), <a href="https://www.npmjs.com/package/async">async</a>와 같은 모듈의 사용, <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises</a>와 같은 ES6 기능을 사용함으로써 개선될 수 있습니다.</p>
</div>

<div class="note">
<p><strong>Note:</strong> Node와 Express의 일반적인 규칙은 error-first callbacks을 사용하는 것입니다. 이 규칙에서 콜백 함수의 첫번 째 값은 에러값이고, 다음 인자에는 성공 데이터가 포함됩니다. 이 방법에 대한 좋은 설명은 이 블로그에서 확인할 수 있습니다.:: <a href="http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/ ">The Node.js Way - Understanding Error-First Callbacks</a> (fredkschott.com).</p>
</div>

<h3 id="라우트_핸들러의_사용">라우트 핸들러의 사용</h3>

<p>In our <em>Hello World</em> Express example see above we defined a (callback) route handler function for HTTP <code>GET</code> requests to the site root (<code>'/'</code>).</p>

<pre class="brush: js notranslate">app.<strong>get</strong>('/', function (req, res) {
  res.send('Hello World!');
});
</pre>

<p>The callback function takes a request and a response object as arguments. In this case the method simply calls <code><a href="https://expressjs.com/en/4x/api.html#res.send">send()</a></code> on the response to return the string "Hello World!" There are a <a href="https://expressjs.com/en/guide/routing.html#response-methods">number of other response methods</a> for ending the request/response cycle, for example you could call <code><a href="https://expressjs.com/en/4x/api.html#res.json">res.json()</a></code> to send a JSON response or <code><a href="https://expressjs.com/en/4x/api.html#res.sendFile">res.sendFile()</a></code> to send a file.</p>

<div class="note">
<p><strong>JavaScript tip:</strong> You can use any argument names you like in the callback functions; when the callback is invoked the first argument will always be the request and the second will always be the response. It makes sense to name them such that you can identify the object you're working with in the body of the callback.</p>
</div>

<p>The <em>Express application</em> object also provides methods to define route handlers for all the other HTTP verbs, which are mostly used in exactly the same way: <code>post()</code>, <code>put()</code>, <code>delete()</code>, <code>options()</code>, <code>trace()</code>, <code>copy()</code>, <code>lock()</code>, <code>mkcol()</code>, <code>move()</code>, <code>purge()</code>, <code>propfind()</code>, <code>proppatch()</code>, <code>unlock()</code>, <code>report()</code>, ​​​​​​ <code>mkactivity()</code>, <code>checkout()</code>, <code>merge()</code>, <code>m-</code><code>search()</code>, <code>notify()</code>, <code>subscribe()</code>, <code>unsubscribe()</code>, <code>patch()</code>, <code>search()</code>, and <code>connect()</code>.</p>

<p>There is a special routing method, <code>app.all()</code>, which will be called in response to any HTTP method. This is used for loading middleware functions at a particular path for all request methods. The following example (from the Express documentation) shows a handler that will be executed for requests to <code>/secret</code> irrespective of the HTTP verb used (provided it is supported by the <a href="https://nodejs.org/api/http.html#http_http_methods">http module</a>).</p>

<pre class="brush: js notranslate">app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})</pre>

<p>Routes allow you to match particular patterns of characters in a URL, and extract some values from the URL and pass them as parameters to the route handler (as attributes of the request object passed as a parameter).</p>

<p>Often it is useful to group route handlers for a particular part of a site together and access them using a common route-prefix (e.g. a site with a Wiki might have all wiki-related routes in one file and have them accessed with a route prefix of <em>/wiki/</em>). In <em>Express</em> this is achieved by using the <code><a href="http://expressjs.com/en/guide/routing.html#express-router">express.Router</a></code> object. For example, we can create our wiki route in a module named <strong>wiki.js</strong>, and then export the <code>Router</code> object, as shown below:</p>

<pre class="brush: js notranslate">// wiki.js - Wiki route module

var express = require('express')
var router = express.Router()

// Home page route
router.get('/', function (req, res) {
  res.send('Wiki home page')
})

// About page route
router.get('/about', function (req, res) {
  res.send('About this wiki')
})

module.exports = router
</pre>

<div class="note">
<p><strong>Note:</strong> Adding routes to the <code>Router</code> object is just like adding routes to the <code>app</code> object (as shown previously).</p>
</div>

<p>To use the router in our main app file we would then <code>require()</code> the route module (<strong>wiki.js</strong>), then call <code>use()</code> on the <em>Express</em> application to add the Router to the middleware handling path. The two routes will then be accessible from <code style="font-style: normal; font-weight: normal;">/wiki/</code> and <code style="font-style: normal; font-weight: normal;">/wiki/about/</code>.</p>

<pre class="brush: js notranslate">var wiki = require('./wiki.js')
// ...
app.use('/wiki', wiki)</pre>

<p>We'll show you a lot more about working with routes, and in particular about using the <code>Router</code>, later on in the linked section<a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes"> Routes and controllers .</a></p>

<h3 id="미들웨어의_사용">미들웨어의 사용</h3>

<p>미들웨어는 정적 파일 제공에서 오류 처리, HTTP 응답 압축에 이르기까지 Express 앱에서 광범위하게 사용됩니다. 라우트 함수는 <font><font>HTTP 클라이언트에 일부 응답을 반환하여 HTTP 요청-응답주기를 종료하는 반면, 미들웨어 함수는 </font></font><em><font><font>일반적으로</font></font></em><font><font> 요청 또는 응답에 대해 일부 작업을 수행 한 다음 "스택"(이는 미들웨어 혹은 라우트 핸들러일 수 있습니다.)에서 다음 함수를 호출합니다.  미들웨어가 호출되는 순서는 앱 개발자에게 달려있습니다.</font></font></p>

<div class="note">
<p><strong>Note:</strong> <font><font>미들웨어는 모든 작업을 수행하고, 코드를 실행하고, 요청 및 응답 객체를 변경할 수 </font></font><em><font><font>있으며, 요청-응답주기를 종료</font></font></em><font><font> 할 </font><em><font>수도</font></em><font> 있습니다. 만약 주기가 종료되지 않으면, 다음 미들웨어 함수의 제어를 위해 <code>next()</code>를 호출해야합니다.( 혹은 요청이 중단된 상태로 유지될 것입니다.)</font></font></p>
</div>

<p><font><font>대부분의 앱은 </font><font>쿠키, 세션, 사용자 인증,<code> POST</code>요청 </font><font>및 JSON 데이터 접근</font><font> </font><font>, logging 등과 </font><font>같은 일반적인 웹 개발 작업을 단순화하기 위해<em>서드파티</em></font></font><font><font> 미들웨어를 사용합니다 </font><font><a href="http://expressjs.com/en/resources/middleware.html" rel="noopener">. Express 팀에서 관리하는 미들웨어 패키지 목록을</a><font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);"> </span></font></font></font><font><font>이 곳에서 찾을 수 있습니다 </font><font>( 다른 인기있는 서드파티 패키지도 포함). </font><font>다른 Express 패키지는 NPM 패키지 관리자에서 사용할 수 있습니다.</font></font></p>

<p><font><font>서드파티 미들웨어를 사용하려면 먼저 NPM을 사용하여 앱에 설치해야합니다. </font><font>예를 들어 </font></font><a href="http://expressjs.com/en/resources/middleware/morgan.html" rel="noopener"><font><font>morgan</font></font></a><font><font> HTTP 요청 logger 미들웨어 </font><font>를 설치하려면 다음과 </font><font>같이 진행합니다.</font></font></p>

<pre class="brush: bash notranslate"><code>$ npm install morgan
</code></pre>

<p>그런 다음 <em>Express application object에 </em>use()를 호출해서 스택에 이 미들웨어를 추가합니다.</p>

<pre class="brush: js notranslate">var express = require('express');
<strong>var logger = require('morgan');</strong>
var app = express();
<strong>app.use(logger('dev'));</strong>
...</pre>

<div class="note">
<p><strong>Note:</strong> <font>미들웨어 및 라우팅 함수는 선언된 순서대로 호출됩니다. </font><font>일부 미들웨어의 경우 순서가 중요합니다 (예를 들어 세션 미들웨어가 쿠키 미들웨어에 의존하는 경우, 쿠키 핸들러를 먼저 추가해야합니다). 거의 항상 라우트를 설정하기 전에 미들웨어가 호출되거나,  미들웨어로 인해 추가된 기능에 라우트 핸들러가  접근할 수 없습니다.</font></p>
</div>

<p><font><font>당신은 자신만의 미들웨어 함수를 작성할 수 있으며, 그렇게 해야 할 가능성이 높습니다 (에러 처리 코드를 생성하는 경우에만 해당). 미들웨어 함수와 라우트 핸들러 콜백 </font><font>의 </font></font><strong><font><font>유일한</font></font></strong><font><font> 차이점은 미들웨어 함수에 세 번째 인자로 미들웨어 함수가 </font></font><font><font>요청 주기를 완료하지 않을 때 호출되는 <code>next</code>가 있다는 것입니다. (미들웨어 함수가 호출 될 때 여기에는 반드시 호출되는 <em>next</em></font></font><font><font> 함수가 포함됩니다.).</font></font></p>

<p><font><font>당신이 모든 응답 혹은  특정 HTTP 동사(</font></font><code>GET</code><font><font>, </font></font><code>POST</code> 등)에 미들웨어를 적용할지 여부에 따라<code>app.use()</code><font><font>또는 </font></font><code>app.add()</code>와 함께<font><font> 프로세싱 체인에 미들웨어 기능을 추가 할 수 있습니다. 두 경우 모두 라우트를 동일하게 지정하지만 </font></font><strong><font><font>app.use ()</font></font></strong><font><font> 호출시 라우트는 선택 사항 </font><font>입니다.</font></font></p>

<p><font><font>아래의  예제는 두 가지 방법을 사용하고, 경로를 사용하거나 사용하지 않고 미들웨어 기능을 추가하는 방법을 보여줍니다.</font></font></p>

<pre class="brush: js notranslate">var express = require('express')
var app = express()

// An example middleware function
var a_middleware_function = function(req, res, <em>next</em>) {
  //... perform some operations
  next(); //Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function)

//Function added with use() for a specific route
app.use('/someroute', a_middleware_function)

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function )

app.listen(3000)</pre>

<div class="note">
<p><strong>JavaScript Tip:</strong> <font>위에서 우리는 미들웨어 함수를 별도로 선언 한 다음 그것을 콜백으로 설정합니다. </font><font>이전 라우트 핸들러 함수에서는 우리는 콜백 함수가 사용될 때 선언했습니다. </font><font>JavaScript에서는 두 방법 모두 유효합니다.</font></p>
</div>

<p><font><font>Express 공식 문서에는 </font><font>Express 미들웨어 </font></font><a href="https://expressjs.com/en/guide/using-middleware.html" rel="noopener"><font><font>사용</font></font></a><font><font> 및 </font></font><a href="http://expressjs.com/en/guide/writing-middleware.html" rel="noopener"><font><font>작성</font></font></a><font><font> 에 대한 훨씬 더 우수한 자료들이 </font><font>있습니다.</font></font></p>

<h3 id="저장된_파일을_서버화하기">저장된 파일을 서버화하기</h3>

<p>You can use the <a href="http://expressjs.com/en/4x/api.html#express.static">express.static</a> middleware to serve static files, including your images, CSS and JavaScript (<code>static()</code> is the only middleware function that is actually <strong>part</strong> of <em>Express</em>). For example, you would use the line below to serve images, CSS files, and JavaScript files from a directory named '<strong>public'</strong> at the same level as where you call node:</p>

<pre class="brush: js notranslate">app.use(express.static('public'))
</pre>

<p>Any files in the public directory are served by adding their filename (<em>relative</em> to the base "public" directory) to the base URL. So for example:</p>

<pre class="notranslate"><code>http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
</code></pre>

<p>You can call <code>static()</code> multiple times to serve multiple directories. If a file cannot be found by one middleware function then it will simply be passed on to the subsequent middleware (the order that middleware is called is based on your declaration order).</p>

<pre class="brush: js notranslate">app.use(express.static('public'))
app.use(express.static('media'))
</pre>

<p>You can also create a virtual prefix for your static URLs, rather than having the files added to the base URL. For example, here we <a href="http://expressjs.com/en/4x/api.html#app.use">specify a mount path</a> so that the files are loaded with the prefix "/media":</p>

<pre class="brush: js notranslate">app.use('/media', express.static('public'))
</pre>

<p>Now, you can load the files that are in the <code>public</code> directory from the <code>/media</code> path prefix.</p>

<pre class="notranslate"><code>http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3</code>
</pre>

<p>For more information, see <a href="Serving static files in Express">Serving static files in Express</a>.</p>

<h3 id="핸들링_에러">핸들링 에러</h3>

<p>Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: <code>(err, req, res, next)</code>. For example:</p>

<pre class="brush: js notranslate">app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
</pre>

<p>These can return any content required, but must be called after all other <code>app.use()</code> and routes calls so that they are the last middleware in the request handling process!</p>

<p>Express comes with a built-in error handler, which takes care of any remaining errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack. If you pass an error to <code>next()</code> and you do not handle it in an error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace.</p>

<div class="note">
<p><strong>Note:</strong> The stack trace is not included in the production environment. To run it in production mode you need to set the the environment variable <code>NODE_ENV</code> to '<code>production'</code>.</p>
</div>

<div class="note">
<p><strong>Note:</strong> HTTP404 and other "error" status codes are not treated as errors. If you want to handle these, you can add a middleware function to do so. For more information see the <a href="http://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses">FAQ</a>.</p>
</div>

<p>For more information see <a href="http://expressjs.com/en/guide/error-handling.html">Error handling</a> (Express docs).</p>

<h3 id="데이터베이스의_사용">데이터베이스의 사용</h3>

<p><em>Express</em> apps can use any database mechanism supported by <em>Node</em> (<em>Express</em> itself doesn't define any specific additional behaviour/requirements for database management). There are many options, including PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.</p>

<p>In order to use these you have to first install the database driver using NPM. For example, to install the driver for the popular NoSQL MongoDB you would use the command:</p>

<pre class="brush: bash notranslate"><code>$ npm install mongodb
</code></pre>

<p>The database itself can be installed locally or on a cloud server. In your Express code you require the driver, connect to the database, and then perform create, read, update, and delete (CRUD) operations. The example below (from the Express documentation) shows how you can find "mammal" records using MongoDB.</p>

<pre class="brush: js notranslate">var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
  if (err) throw err

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})</pre>

<p>Another popular approach is to access your database indirectly, via an Object Relational Mapper ("ORM"). In this approach you define your data as "objects" or "models" and the ORM maps these through to the underlying database format. This approach has the benefit that as a developer you can continue to think in terms of JavaScript objects rather than database semantics, and that there is an obvious place to perform validation and checking of incoming data. We'll talk more about databases in a later article.</p>

<p>For more information see <a href="https://expressjs.com/en/guide/database-integration.html">Database integration</a> (Express docs).</p>

<h3 id="데이터_랜더링시각화">데이터 랜더링(시각화)</h3>

<p>Template engines (referred to as "view engines" by <em>Express</em>) allow you to specify the <em>structure</em> of an output document in a template, using placeholders for data that will be filled in when a page is generated. Templates are often used to create HTML, but can also create other types of document. Express has support for <a href="https://github.com/expressjs/express/wiki#template-engines">a number of template engines</a>, and there is a useful comparison of the more popular engines here: <a href="https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/">Comparing JavaScript Templating Engines: Jade, Mustache, Dust and More</a>.</p>

<p>In your application settings code you set the template engine to use and the location where Express should look for templates using the 'views' and 'view engines' settings, as shown below (you will also have to install the package containing your template library too!)</p>

<pre class="brush: js notranslate">var express = require('express');
var app = express();

// Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, 'views'));

// Set view engine to use, in this case 'some_template_engine_name'
app.set('view engine', 'some_template_engine_name');
</pre>

<p>The appearance of the template will depend on what engine you use. Assuming that you have a template file named "index.&lt;template_extension&gt;" that contains placeholders for data variables named 'title' and "message", you would call <code><a href="http://expressjs.com/en/4x/api.html#res.render">Response.render()</a></code> in a route handler function to create and send the HTML response:</p>

<pre class="brush: js notranslate">app.get('/', function (req, res) {
  res.render('index', { title: 'About dogs', message: 'Dogs rock!' })
})</pre>

<p>For more information see <a href="http://expressjs.com/en/guide/using-template-engines.html">Using template engines with Express</a> (Express docs).</p>

<h3 id="파일구조">파일구조</h3>

<p>Express makes no assumptions in terms of structure or what components you use. Routes, views, static files, and other application-specific logic can live in any number of files with any directory structure. While it is perfectly possible to have the whole <em>Express</em> application in one file, typically it makes sense to split your application into files based on function (e.g. account management, blogs, discussion boards) and architectural problem domain (e.g. model, view or controller if you happen to be using an <a href="/en-US/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture">MVC architecture</a>).</p>

<p>In a later topic we'll use the <em>Express Application Generator</em>, which creates a modular app skeleton that we can easily extend for creating web applications.</p>

<ul>
</ul>

<h2 id="요약">요약</h2>

<p id="Congratulations_you've_completed_the_first_step_in_your_ExpressNode_journey!_You_should_now_understand_Express_and_Node's_main_benefits_and_roughly_what_the_main_parts_of_an_Express_app_might_look_like_(routes_middleware_error_handling_and_template_code)._You_should_also_understand_that_with_Express_being_an_unopinionated_framework_the_way_you_pull_these_parts_together_and_the_libraries_that_you_use_are_largely_up_to_you!"><span style="color: #3b3c40; font-size: 14px; font-weight: normal; line-height: 1.5;">Congratulations, you've completed the first step in your Express/Node journey! You should now understand Express and Node's main benefits, and roughly what the main parts of an Express app might look like (routes, middleware, error handling, and template code). You should also understand that with Express being an unopinionated framework, the way you pull these parts together and the libraries that you use are largely up to you!</span></p>

<p>Of course Express is deliberately a very lightweight web application framework, so much of its benefit and potential comes from third party libraries and features. We'll look at those in more detail in the following articles. In our next article we're going to look at setting up a Node development environment, so that you can start seeing some Express code in action.</p>

<h2 id="더보기">더보기</h2>

<ul>
 <li><a href="https://nodejs.org/api/modules.html#modules_modules">Modules</a> (Node API docs)</li>
 <li><a href="https://expressjs.com/">Express</a> (home page)</li>
 <li><a href="http://expressjs.com/en/starter/basic-routing.html">Basic routing</a> (Express docs)</li>
 <li><a href="http://expressjs.com/en/guide/routing.html">Routing guide</a> (Express docs)</li>
 <li><a href="http://expressjs.com/en/guide/using-template-engines.html">Using template engines with Express</a> (Express docs)</li>
 <li><a href="https://expressjs.com/en/guide/using-middleware.html">Using middleware</a> (Express docs)</li>
 <li><a href="http://expressjs.com/en/guide/writing-middleware.html">Writing middleware for use in Express apps</a> (Express docs)</li>
 <li><a href="https://expressjs.com/en/guide/database-integration.html">Database integration</a> (Express docs)</li>
 <li><a href="Serving static files in Express">Serving static files in Express</a> (Express docs)</li>
 <li><a href="http://expressjs.com/en/guide/error-handling.html">Error handling</a> (Express docs)</li>
</ul>

<div>{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}</div>
