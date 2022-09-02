---
title: HTTP 인증
slug: Web/HTTP/Authentication
translation_of: Web/HTTP/Authentication
---
<div>{{HTTPSidebar}}</div>

<p class="summary">HTTP는 액세스 제어와 인증을 위한 프레임워크를 제공합니다. 가장 일반적인 인증 방식은 "Basic" 인증 방식입니다. 이 페이지에서는 일반적인 HTTP 인증 프레임워크를 소개하고 서버에 HTTP의 Basic 인증 방식으로 접근을 제한하는 것을 보여 줍니다.</p>

<h2 id="일반적인_HTTP_인증_프레임워크">일반적인 HTTP 인증 프레임워크</h2>

<p>{{RFC("7235")}}는 서버에 의해 클라이언트 요청을 시도({{glossary("challenge")}})하고, 클라이언트에 의해 인증 정보를 제공하기 위해 사용될 수 있는 HTTP 인증 프레임워크를 정의합니다. 이러한 시도와 응답 과정은 다음과 같이 작동합니다. 서버는 클라이언트에게 {{HTTPStatus("401")}} (Unauthorized) 응답 코드를 가지고 응답하며, 최소한 한 번의 시도에 포함된 {{HTTPHeader("WWW-Authenticate")}} 응답 헤더로 권한을 부여하는 방법에 대한 정보를 제공합니다. 서버와 인증을 하기를 원하는 클라이언트는 {{HTTPHeader("Authorization")}} 요청 헤더 필드에 인증 정보를 포함함으로써 인증을 수행할 수 있습니다. 클라이언트는 대개 사용자에게 비밀번호 프롬프트를 표시할 것이고 정확한 <code>Authorization</code> 헤더를 포함하는 요청을 만들 것입니다.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14689/HTTPAuth.png" style="height: 335px; width: 710px;"></p>

<p>그림에서 보는 것과 같이 "Basic" 인증의 경우, 교환은 안전을 위해 HTTPS (TLS) 연결 위에서 <strong>발생하여야 합니다</strong>.</p>

<h3 id="프록시_인증">프록시 인증</h3>

<p>동일한 시도 및 응답 메커니즘이 프록시 인증을 위해서도 사용될 수 있습니다. 이 경우, 이것은 인증을 요구하는 중간 프록시입니다. 리소스 인증 및 프록시 인증은 함께 존재할 수 있기 때문에, 헤더와 상태 코드의 다른 세트가 필요합니다. 프록시의 경우, 요청에 대한 상태 코드는 {{HTTPStatus("407")}} (Proxy Authentication Required)이고, {{HTTPHeader("Proxy-Authenticate")}} 응답 헤더는 프록시에 적용 가능한 최소한 하나의 요청을 포함하며, 그리고 {{HTTPHeader("Proxy-Authorization")}} 요청 헤더는 프록시 서버에 인증 정보를 제공하기 위해 사용됩니다.</p>

<h3 id="접근_거부">접근 거부</h3>

<p>(프록시) 서버가 주어진 리소스에 대한 접근 권한을 얻기 위해 적절하지 않은 유효한 인증 정보를 수신한다면, 서버는 {{HTTPStatus("403")}} <code>Forbidden</code> 상태 코드로 응답하여야 합니다.  {{HTTPStatus("401")}} <code>Unauthorized</code>나 {{HTTPStatus("407")}} <code>Proxy Authentication Required</code>와는 다르게, 해당 사용자에 대한 인증은 불가능합니다.</p>

<h3 id="WWW-Authenticate와_Proxy-Authenticate_헤더"><code>WWW-Authenticate</code>와 <code>Proxy-Authenticate</code> 헤더</h3>

<p>{{HTTPHeader("WWW-Authenticate")}}와 {{HTTPHeader("Proxy-Authenticate")}} 응답 헤더는 자원에 대한 액세스를 얻기 위해 사용되어야 할 인증 방법을 정의합니다. 이들은 인증을 하려는 클라이언트가 인증 정보를 제공할 방법을 알기 위해, 어떤 인증 스킴이 사용될 것인지를 구체적으로 적을 필요가 있습니다. 이들 헤더의 문법은 다음과 같습니다.</p>

<pre class="syntaxbox">WWW-Authenticate: &lt;type&gt; realm=&lt;realm&gt;
Proxy-Authenticate: &lt;type&gt; realm=&lt;realm&gt;
</pre>

<p>여기서, <code>&lt;type&gt;</code>은 인증 스킴입니다("Basic"은 가장 일반적인 스킴이며 <a href="https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication#Basic_%EC%9D%B8%EC%A6%9D_%EC%8A%A4%ED%82%B4">아래에 소개되어 있습니다</a>). <em>realm</em>은 보호되는 영역을 설명하거나 보호의 범위를 알리는데 사용됩니다. 이는 어떤 공간에 사용자가 접근하려고 시도하는지를 알리기 위하여, "중간 단계의 사이트에 대한 접근"과 같거나 또는 비슷한 메시지가 될 수 있습니다.</p>

<h3 id="Authorization와_Proxy-Authorization_헤더"><code>Authorization</code>와 <code>Proxy-Authorization</code> 헤더</h3>

<p>{{HTTPHeader("Authorization")}}와 {{HTTPHeader("Proxy-Authorization")}} 요청 헤더는 사용자 에이전트가 (프록시) 서버에 인증을 하기 위한 인증 정보를 포함합니다. 여기에서 type은 다시 한 번 필요하며 credentials이 뒤에 따라옵니다. credentials 부분은 어떤 인증 스킴이 사용되는지에 따라 인코딩이 되어 있거나 암호화가 되어 있을 수 있습니다.</p>

<pre class="syntaxbox">Authorization: &lt;type&gt; &lt;credentials&gt;
Proxy-Authorization: &lt;type&gt; &lt;credentials&gt;
</pre>

<h3 id="인증_스킴">인증 스킴</h3>

<p>일반적인 HTTP 인증 프레임워크는 여러 인증 스킴에 의해 사용됩니다. 스킴은 보안 강도와 클라이언트 또는 서버 소프트웨어에서 사용 가능성에 따라 달라질 수 있습니다.</p>

<p>가장 일반적인 인증 스킴은 아래에서 좀 더 자세하게 소개할 "Basic" 인증 스킴입니다. IANA는 <a href="http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml">인증 스킴의 목록</a>을 유지하고 있으나, Amazon AWS와 같은 호스트 서비스에 의해 제공되는 다른 스킴도 존재합니다. 일반적인 인증 스킴은 아래를 포함합니다.</p>

<ul>
 <li><strong>Basic</strong> ({{rfc(7617)}}를 보십시오. base64-encoded credentials. 더 많은 정보는 아래를 확인하십시오.),</li>
 <li><strong>Bearer</strong> ({{rfc(6750)}}를 보십시오. bearer tokens to access OAuth 2.0-protected resources),</li>
 <li><strong>Digest</strong> ({{rfc(7616)}}를 보십시오. Firefox에서는 md5 해싱만 지원합니다. SHA 암호화 지원을 위하여 {{bug(472823)}}을 확인하십시오.),</li>
 <li><strong>HOBA</strong> ({{rfc(7486)}} (draft)를 보십시오. <strong>H</strong>TTP <strong>O</strong>rigin-<strong>B</strong>ound <strong>A</strong>uthentication, digital-signature-based),</li>
 <li><strong>Mutual</strong> (<a href="https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11">draft-ietf-httpauth-mutual</a>를 참조하십시오),</li>
 <li>
  <p><strong>AWS4-HMAC-SHA256</strong> (<a href="http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html">AWS docs를 참조하십시오</a>).</p>
 </li>
</ul>

<h2 id="Basic_인증_스킴">Basic 인증 스킴</h2>

<p>"Basic" HTTP 인증 스킴은 {{rfc(7617)}}에 정의되어 있는데, 이는 base64를 이용하여 인코딩된 사용자 ID/비밀번호 쌍의 인증 정보를 전달합니다.</p>

<h3 id="Basic_인증의_보안">Basic 인증의 보안</h3>

<p>사용자 ID와 비밀번호가 평문으로 네트워크를 통해 전달되기 때문에 (이것은 base64로 인코딩 되어 있으나, base64는 복호화가 가능한 인코딩이므로), Basic 인증 스킴은 안전하지 않습니다. HTTPS / TLS는 basic 인증과 함께 사용되어야 합니다. 이러한 추가적인 보안상의 향상이 없이는, basic 인증은 민감하거나 귀중한 정보를 보호하는 데 사용되어서는 안 됩니다.</p>

<h3 id="Apache와_Basic_인증으로_접근_제한하기">Apache와 Basic 인증으로 접근 제한하기</h3>

<p>Apache 서버에서 디렉터리를 비밀번호로 보호하기 위해서는, <code>.htaccess</code>와 <code>.htpasswd</code> 파일이 필요할 것입니다.</p>

<p><code>.htaccess</code> 파일은 일반적으로 이렇게 생겼습니다.</p>

<pre>AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user</pre>

<p><code>.htaccess</code> 각각의 줄이 콜론(":")으로 나뉘어져 있는 사용자 이름과 비밀번호를 포함하는 <code>.htpasswd</code> 파일을 참조합니다. 여러분은 그들이 <a href="https://httpd.apache.org/docs/2.4/misc/password_encryptions.html">암호화</a>되어 있기 때문에 (이 경우에서는 md5) 실제 비밀번호를 보지 못할 수도 있습니다. 여러분이 원한다면 <code>.htpasswd</code> 파일의 이름을 바꿀 수 있지만, 이 파일은 누구에게도 접근 가능해서는 안 됨을 유의하십시오. (Apache는 일반적으로 <code>.ht*</code> 파일에 대한 접근을 제한하도록 설정되어 있습니다)</p>

<pre>aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
</pre>

<h3 id="nginx와_Basic_인증으로_접근_제한하기">nginx와 Basic 인증으로 접근 제한하기</h3>

<p>nginx에서 여러분은 보호하려는 위치와 비밀번호로 보호될 영역의 이름을 나타내는  <code>auth_basic</code> 명령어를 적어줄 필요가 있습니다. 위의 Apache 예제에 있는 것과 같이, <code>auth_basic_user_file</code> 명령어는 암호화된 사용자 인증 정보를 가지고 있는 .htpasswd 파일을 가리킵니다.</p>

<pre>location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}</pre>

<h3 id="URL에_인증_정보를_사용하여_접근하기">URL에 인증 정보를 사용하여 접근하기</h3>

<p>또한 많은 클라이언트들은 아래와 같이 사용자 이름과 비밀번호를 포함하는 인코딩된 URL을 사용하여 로그인 프롬프트를 피하게 합니다.</p>

<pre class="example-bad">https://username:password@www.example.com/</pre>

<p><strong>이러한 방식의 URL은 더 이상 사용되지 않습니다</strong>. Chrome에서, URL의 <code>username:password@</code> 부분은 보안 상의 이유로 <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7">제거</a>됩니다. Firefox에서는, 해당 사이트가 진짜로 인증이 필요한지를 체크하며, 그렇지 않으면 Firefox는 프롬프트로 "You are about to log in to the site “www.example.com” with the username “username”, but the website does not require authentication. This may be an attempt to trick you."와 같이 경고합니다.</p>

<h2 id="함께_보기">함께 보기</h2>

<ul>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}</li>
</ul>
