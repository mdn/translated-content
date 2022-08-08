---
title: 웹 리소스 식별
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
translation_of: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
---
<div>{{HTTPSidebar}}</div>

<p class="summary">HTTP 요청 대상을 "리소스"라고 부르는데, 그에 대한 본질을 이 이상으로 정의할 수 없습니다; 그것은 문서, 사진 또는 다른 어떤 것이든 될 수 있습니다. 각 리소스는 리소스 식별을 위해 HTTP 전체에서 사용되는 Uniform Resource Identifier ({{Glossary("URI")}})에 의해 식별됩니다.</p>

<p>웹에서 리소스에 대한 식별과 위치는 대부분 단일 URL(Uniform Resource Locator, URI의 한 종류)로 제공됩니다. 그러나 때로 식별과 위치가 동일한 URI로 제공되지 않는데에는 이유가 있습니다: 요청된 리소스에 대해 클라이언트가 다른 위치에서 접근하도록 해야 할 경우, HTTP는 특정 HTTP 헤더인 {{HTTPHeader("Alt-Svc")}}을 사용합니다.</p>

<h2 id="URLs_그리고_URNs">URLs 그리고 URNs</h2>

<h3 id="URLs">URLs</h3>

<p>URI의 가장 일반적인 형식은 <em>웹 주소</em>라고하는 Uniform Resource Locator ({{Glossary("URL")}})입니다.</p>

<pre>https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL</pre>

<p>그런 URL 중 어떤 것이든 당신의 브라우저 주소 표시줄에 입력하여 그와 연관된 페이지(리소스)를 로드하도록 지정할 수 있습니다.</p>

<p>URL은 서로 다른 파트들로 구성되며, 어떤 것들은 필수이며 그 외에는 선택 사항입니다. 좀 더 복잡한 예제는 다음과 같습니다:</p>

<pre>http://www.example.com:80/path/to/myfile.html?key1=value1&amp;key2=value2#SomewhereInTheDocument</pre>

<h3 id="URNs">URNs</h3>

<p>URN은 개별적인 네임스페이스 내에서 이름에 의해 리소스를 식별하는 URI를 말합니다.</p>

<pre>urn:isbn:9780141036144
urn:ietf:rfc:7230
</pre>

<p>위 두 개의 URN은 다음 내용을 나타냅니다</p>

<ul>
 <li>George Orwell이 쓴 1984년이라는 책</li>
 <li>IETF 스펙 문서 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.</li>
</ul>

<h2 id="Uniform_Resource_Identifiers_(URIs)_구문">Uniform Resource Identifiers (URIs) 구문</h2>

<h3 id="스킴_혹은_프로토콜">스킴 혹은 프로토콜</h3>

<dl>
 <dt><img alt="Protocol" src="https://mdn.mozillademos.org/files/8013/mdn-url-protocol@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>http://</code> 는 프로토콜입니다. 브라우저가 사용해야 하는 프로토콜을 나타냅니다. 일반적으로 그것은 HTTP 프로토콜이거나 혹은 보안이 적용된 버전인 HTTPS일 겁니다. 웹은 이들 중 하나를 반드시 필요로 하지만, 브라우저들은 <code>mailto:</code> (메일 클라이언트를 열기 위해) 혹은 파일 전송을 다루기 위한 <code>ftp:</code> 와 같은 다른 프로토콜도 처리하는 방법을 알고 있으므로 그런 프로토콜들을 보게 되더라도 놀라지마세요. 일반적인 스킴은 다음과 같습니다: </dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">설명</th>
   <th scope="col">설명</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>data</td>
   <td><a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs">데이터 URIs</a></td>
  </tr>
  <tr>
   <td>file</td>
   <td>호스트가 지정하는 파일 이름들</td>
  </tr>
  <tr>
   <td>ftp</td>
   <td><a href="/en-US/docs/Glossary/FTP">파일 전송 프로토콜</a></td>
  </tr>
  <tr>
   <td>http/https</td>
   <td><a href="/en-US/docs/Glossary/HTTP">하이퍼텍스트 전송 프로토콜 (보안)</a></td>
  </tr>
  <tr>
   <td>mailto</td>
   <td>전자 메일 주소</td>
  </tr>
  <tr>
   <td>ssh</td>
   <td>보안 쉘</td>
  </tr>
  <tr>
   <td>tel</td>
   <td>전화번호</td>
  </tr>
  <tr>
   <td>urn</td>
   <td>Uniform Resource Names</td>
  </tr>
  <tr>
   <td>view-source</td>
   <td>리소스의 소스 코드</td>
  </tr>
  <tr>
   <td>ws/wss</td>
   <td>(암호화된) <a href="/en-US/docs/Web/API/WebSockets_API">웹소켓</a> 연결</td>
  </tr>
 </tbody>
</table>

<h3 id="도메인_이름(Authority)">도메인 이름(Authority)</h3>

<dl>
 <dt><img alt="Domaine Name" src="https://mdn.mozillademos.org/files/8015/mdn-url-domain@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>www.example.com</code> 은 네임스페이스를 관리하는 도메인 이름 혹은 권한입니다. 그것은 어떤 웹 서버가 요청을 받게 될지를 나타냅니다.  혹은, {{Glossary("IP address")}}를 직접 사용할 수도 있지만, 불편하므로 웹에서 그리 자주 사용되지는 않습니다.</dd>
</dl>

<h3 id="포트">포트</h3>

<dl>
 <dt><img alt="Port" src="https://mdn.mozillademos.org/files/8017/mdn-url-port@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd>이 예제에서 <code>:80</code> 는 포트를 말합니다. 그것은 웹 서버 상의 리소스에 접근하는데 사용되는 기술적인 "문(gate)"을 나타냅니다. 리소스에 접근하기 위한 권한을 얻기 위해 웹 서버가 HTTP 프로토콜의 표준 포트(HTTP는 80, HTTPS는 443)를 사용하는 경우 일반적으로 생략됩니다. 그게 아니라면 포트 입력은 필수입니다.</dd>
</dl>

<h3 id="경로">경로</h3>

<dl>
 <dt><img alt="Path to the file" src="https://mdn.mozillademos.org/files/8019/mdn-url-path@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>/path/to/myfile.html</code> 는 웹 서버 상의 리소스 경로입니다. 초기 웹에서, 이와 같은 경로는 웹 서버 상에 있는 파일의 실제 위치를 나타냈었습니다. 오늘날에는, 대부분 물리적인 실제 위치를 사용하지 않고 웹 서버에 의해 다뤄지는 추상화를 사용합니다.</dd>
</dl>

<h3 id="쿼리">쿼리</h3>

<dl>
 <dt><img alt="Parameters" src="https://mdn.mozillademos.org/files/8021/mdn-url-parameters@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>?key1=value1&amp;key2=value2</code> 는 웹 서버에 제공되는 추가적인 파라메터입니다. 이런 파라메터들은 <code>&amp;</code> 심볼로 구분되는 키/값 쌍의 목록입니다. 웹 서버는 리소스를 사용자에게 반환하기 이전에 무언가 추가적인 작업을 하기 위해 이 파라메터들을 사용할 수 있습니다. 각각의 웹 서버는 파라메터들을 따르는 자신만의 규칙을 가지며, 특정 웹서버가 파라메터들을 다루는 방식을 알기 위한 신뢰할 수 있는 유일한 방법은 웹 서버 소유자에게 요청하는 것입니다.</dd>
</dl>

<h3 id="프래그먼트">프래그먼트</h3>

<dl>
 <dt><img alt="Anchor" src="https://mdn.mozillademos.org/files/8023/mdn-url-anchor@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>#SomewhereInTheDocument</code> 는 리소스 자체의 다른 부분을 가리키는 앵커입니다. 앵커는 리소스 내에서의 "북마크"의 한 종류를 나타내며, 브라우저에게 그런 "북마크된" 지점에 위치한 컨텐츠를 보여주기 위한 방법을 제공합니다. 예를 들자면, HTML 문서 상에서, 브라우저는 앵커가 정의된 지점으로 스크롤될 것입니다; 비디오 혹은 오디오 문서에서, 브라우저는 앵커가 나타내는 시점으로 이동하려고 할 겁니다. 프래그먼트 식별자로 알려져 있기도 한, # 뒤의 부분은 요청과 함께 서버에 전달되지 않는다는 것을 알아두어야 합니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<pre>https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="함께_참고할_내용">함께 참고할 내용</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Common_questions/What_is_a_URL">URL이란 무엇인가?</a></li>
 <li><a href="http://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml">URI 스킴에 대한 IANA 목록</a></li>
</ul>
