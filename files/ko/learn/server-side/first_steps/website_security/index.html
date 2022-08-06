---
title: Website security
slug: Learn/Server-side/First_steps/Website_security
tags:
  - 가이드
  - 보안
  - 서버측 프로그래밍
  - 웹 보안
  - 초보자
  - 학습
translation_of: Learn/Server-side/First_steps/Website_security
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}</div>

<p class="summary">웹사이트 보안은 설계와 사용의 모든 측면에서 주의를 기울여야 한다. 이 글은 입문자용이므로 당신을 웹사이트 보안 전문가로 만들어주지는 않지만, 보안 위협 요소가 어디에서 발생하는지와, 가장 일반적인 공격으로부터 웹 응용 프로그램을 어떻게 강화할 수 있는지 이해하는데 도움을 줄 것이다.</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">사전 요구 지식 :</th>
   <td>기본적인 컴퓨터 활용 능력.</td>
  </tr>
  <tr>
   <th scope="row">학습목표 :</th>
   <td>
    <p>웹 애플리케이션 보안을 위협하는 가장 일반적인 요소들과, 해킹 당할 위험을 줄이는 방법을 이해한다.</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="웹사이트_보안이란_무엇인가">웹사이트 보안이란 무엇인가?</h2>

<p>인터넷은 위험한 곳이다! 구체적인 사례로, 우리는 정기적으로 웹사이트가 서비스 거부 공격으로 마비되거나, 홈페이지에 수정된 (그리고 종종 위해한) 정보가 게시된 소식을 듣는다. 또 다른 영향력이 큰 사례로, 수백만 개의 비밀번호, 이메일 주소, 신용카드 정보가 공용 도메인으로 유출되어, 웹사이트 사용자들에게 심리적 당혹감과 경제적인 위험을 유발한다.</p>

<p>웹사이트 보안의 목적은 이러한 (또는 어떤) 종류의 공격을 방지하는 것이다. 딱딱하게 말하자면, <em>웹사이트 보안이란, 비승인된 접근, 사용, 수정, 파괴, 중단으로부터 웹사이트를 보호하는 행동 또는 실행을 가리킨다.</em></p>

<p>웹사이트 보안을 효과적으로 하기 위해서는 웹사이트를 설계하는 과정의 전반에 걸쳐 노력을 기울여야 한다: 웹 애플리케이션에서, 웹 서버 설정에서, 비밀번호를 생성하고 재발급하는 정책에서, 클라이언트측 코드에서 말이다. 이 말이 보안에 필요한 많은 작업들을 당신이 직접 세세하게 해주어야 한다는 불길한 말로 들릴 수 있다. 하지만 다행스럽게도 서버측 웹 프레임워크를 사용한다면, 일반적인 보안 공격에 대해 이미 견고하고 잘 검증 된 방어 메커니즘이 "기본으로" 제공된다. 다른 공격들은 HTTPS를 활성화하는 등의 웹 서버 설정을 통해 방지할 수 있다. 마지막으로, 공개된 취약점 스캐너 도구를 사용하여 알려진 보안 실수들은 잡아낼 수 있을 것이다.</p>

<p>이 글의 나머지 부분은 몇 가지 일반적인 보안 위협들과 사이트를 보호하기 위해 취할 수 있는 간단한 지침들을 제공한다.</p>

<p><strong>Note</strong>: 입문자를 위한 주제이고, 웹사이트 보안에 대해 처음 생각해보는 이들을 돕기 위해 작성되었다. 완전하지 않으니 유의하길 바란다.</p>

<h2 id="웹사이트_보안_위협들">웹사이트 보안 위협들</h2>

<p>이 부분은 몇가지 일반적인 웹사이트 위협 요소들의 목록과 그 위협들을 어떻게 최소화할 수 있는지를 다룬다. 다음을 상기하며 읽자. 브라우저에서 전달되는 데이터를 신뢰하기만 하고 <em>충분한 피해망상을 가지지 않으면 </em>보안 위협 요소는 꼭 성공한다는 것을 상기해두자.</p>

<h3 id="사이트_간_스크립팅_(Cross-Site_Scripting_XSS)">사이트 간 스크립팅 (Cross-Site Scripting, XSS)</h3>

<p>XSS는 공격자가 클라이언트 측 스크립트를 웹 사이트에 삽입하여 다른 사용자의 부라우저에서 수행되게 하는 공격의 유형을 말한다. 삽입된 코드는 웹 사이트에서 피해 사용자의 브라우저로 전송이 됨으로 피해 사용자에게 의심받지 않는다. 따라서, 그 삽입된 코드는 피해 사용자의 사이트 권한 쿠키를 공격자에게 보내는 종류의 악성 작업을 수행할 수 있다. 그리고 그것을 전달 받은 공격자는 마치 피해 사용자인 것처럼 위장하여 사이트에 로그인하고 피해 사용자가 할 수 있는 모든 작업을 수행할 수 있다. 가령, 신용 카드 세부 정보에 접근하거나, 연락처 세부 정보를 확인하거나, 암호를 변경하는 작업 등을 수행할 수 있다.</p>

<div class="note">
<p><strong>Note</strong>: XSS 취약점은 전통적으로 다른 유형보다 일반적이었다.</p>
</div>

<p>삽입된 스크립트를 브라우저에 반환하도록 사이트를 속이는 데에는 두 가지 주요 접근방법이 있다. 그것은 반사적 XSS 취약점과 지속적 XSS 취약점이다.</p>

<ul>
 <li>A <em>reflected</em> XSS vulnerability occurs when user content that is passed to the server is returned <em>immediately</em> and <em>unmodified</em> for display in the browser — any scripts in the original user content will be run when the new page is loaded!<br>
  For example, consider a site search function where the search terms are encoded as URL parameters, and these terms are displayed along with the results. An attacker can construct a search link containing a malicious script as a parameter (e.g. <code>http://mysite.com?q=beer&lt;script%20src="http://evilsite.com/tricky.js"&gt;&lt;/script&gt;</code>) and email it to another user. If the target user clicks this "interesting link", the script will be executed when the search results are displayed. As discussed above, this gives the attacker all the information they need to enter the site as the target user — potentially making purchases as the user or sharing their contact information.</li>
 <li>A <em>persistent</em> XSS vulnerability is one where the malicious script is <em>stored</em> by the website and then later redisplayed unmodified for other users to unwittingly execute.<br>
  For example, a discussion board that accepts comments containing unmodified HTML could store a malicious script from an attacker. When the comments are displayed the script is executed and can then send the attacker information required to access the user's account. This sort of attack is extremely popular and powerful, because the attacker doesn't have to have any direct engagement with the victims.<br>
  <br>
  While <code>POST</code> or <code>GET</code> data is the most common source of XSS vulnerabilities, any data from the browser is potentially vulnerable (including cookie data rendered by the browser, or user files that are uploaded and displayed).</li>
</ul>

<p>The best defence against XSS vulnerabilities is to remove or disable any markup that can potentially contain instructions to run code. For HTML this includes tags like <code>&lt;script&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;embed&gt;</code>, and <code>&lt;link&gt;</code>.</p>

<div>
<p>The process of modifying user data so that it can't be used to run scripts or otherwise affect the execution of server code is known as input sanitization. Many web frameworks automatically sanitize user input from HTML forms by default.</p>
</div>

<h3 id="SQL_injection">SQL injection</h3>

<p>SQL injection vulnerabilities enable malicious users to execute arbitrary SQL code on a database, allowing data to be accessed, modified or deleted irrespective of the user's permissions. A successful injection attack might spoof identities, create new identities with administration rights, access all data on the server, or destroy/modify the data to make it unusable.</p>

<p>This vulnerability is present if user input that is passed to an underlying SQL statement can change the meaning of the statement. For example, consider the code below, which is intended to list all users with a particular name (<code>userName</code>) that has been supplied from an HTML form:</p>

<pre class="brush: sql">statement = "SELECT * FROM users WHERE name = '" + <strong>userName</strong> + "';"</pre>

<p>If the user enters a real name, this will work as intended. However a malicious user could completely change the behaviour of this SQL statement to the new statement below, simply by specifying the "<strong>bold</strong>" text below for the <code>userName</code>. The modified statement creates a valid SQL statement that deletes the <code>users</code> table and selects all data from the <code>userinfo</code> table (revealing the information of every user). This works because the first part of the injected text (<code>a';</code>) completes the original statement (' is the symbol to deliniate a string literal in SQL).</p>

<pre class="brush: sql">SELECT * FROM users WHERE name = '<strong>a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't'</strong>;
</pre>

<p>The way to avoid this sort of attack is to ensure that any user data that is passed to an SQL query cannot change the nature of the query. One way to do this is to <a href="https://en.wikipedia.org/wiki/Escape_character">escape</a> all the characters in the user input that have a special meaning in SQL.</p>

<div class="note">
<p><strong>Note</strong>: The SQL statement treats the ' character as the beginning and end of a string literal. By putting a backslash in front we "escape" the symbol (\'), and tell SQL to instead treat it as a character (just part of the string).</p>
</div>

<p>In the statement below we escape the ' character. The SQL will now interpret the name as the whole string shown in bold (a very odd name indeed, but not harmful!)</p>

<pre class="brush: sql">SELECT * FROM users WHERE name = '<strong>a\';DROP TABLE users; SELECT * FROM userinfo WHERE \'t\' = \'t'</strong>;

</pre>

<p>Web frameworks will often take care of this escaping for you. Django, for example, ensures that any user-data passed to querysets (model queries) is escaped.</p>

<div class="note">
<p><strong>Note</strong>: This section draws heavily on the information in <a href="https://en.wikipedia.org/wiki/SQL_injection">Wikipedia here</a>.</p>
</div>

<h3 id="Cross_Site_Request_Forgery_(CSRF)">Cross Site Request Forgery (CSRF)</h3>

<p>CSRF attacks allow a malicious user to execute actions using the credentials of another user without that user’s knowledge or consent.</p>

<p>This type of attack is best explained by example. John is a malicious user who knows that a particular site allows logged-in users to send money to a specified account using an HTTP <code>POST</code> request that includes the account name and an amount. John constructs a form that includes his bank details and an amount of money as hidden fields, and emails it to other site users (with the <em>Submit</em> button disguised as a link to a "get rich quick" site).</p>

<p>If a user clicks the submit button, an HTTP <code>POST</code> request will be sent to the server containing the transaction details and <em>any client-side cookies that the browser associates with the site</em> (adding associated site cookies to requests is normal browser behaviour). The server will check the cookies, and use them to determine whether or not the user is logged in and has permission to make the transaction.</p>

<p>The result is that a<span style="line-height: 1.5;">ny user who clicks the <em>Submit</em> button while they are logged in to the trading site will make the transaction. John gets rich!</span></p>

<div class="note">
<p><strong>Note</strong>: The trick here is that John doesn't need to have access to the user's cookies (or access credentials) — the user's browser stores this information, and automatically includes it in all requests to the associated server.</p>
</div>

<p>One way to prevent this type of attack is for the server to require that <code>POST</code> requests includes a user-specific site-generated secret (the secret would be supplied by the server when sending the web form used to make transfers). This approach prevents John from creating his own form because he would have to know the secret that the server is providing for the user. Even if he found out the secret and created a form for a particular user, he would no longer be able to use that same form to attack every user.</p>

<p>Web frameworks often include such CSRF prevention mechanisms.</p>

<h3 id="Other_threats">Other threats</h3>

<p>Other common attacks/vulnerabilities include:</p>

<ul>
 <li><a href="https://www.owasp.org/index.php/Clickjacking">Clickjacking</a>. In this attack a malicious user hijacks clicks meant for a visible top level site and routes them to a hidden page beneath. This technique might be used, for example, to display a legitimate bank site but capture the login credentials into an invisible {{htmlelement("iframe")}} controlled by the attacker. It could alternatively be used to get the user to click a button on a visible site, but in doing so actually unwittingly click a completely different button. As a defence your site can prevent itself from being embedded in an iframe in another site by setting appropriate HTTP headers.</li>
 <li><a href="/en-US/docs/Glossary/Distributed_Denial_of_Service">Denial of Service</a> (DoS). DoS is usually achieved by flooding a target site with spurious requests so that access to a site is disrupted for legitimate users. The requests may simply be numerous, or they may individually consume large amounts of resource (e.g. slow reads, uploading of large files, etc.) DoS defences usually work by identifying and blocking "bad" traffic while allowing legitimate messages through. These defences are typically within or before the web server (they are not part of the web application itself).</li>
 <li><a href="https://en.wikipedia.org/wiki/Directory_traversal_attack">Directory Traversal</a>/File and disclosure. In this type of attack a malicious user attempts to access parts of the web server file system that they should not be able to access. This vulnerability occurs when the user is able to pass filenames that include file system navigation characters (e.g. <code>../../</code>). The solution is to sanitize input before using it.</li>
 <li><a href="https://en.wikipedia.org/wiki/File_inclusion_vulnerability">File Inclusion</a>. In this attack a user is able to specify an "unintended" file for display or execution in data passed to the server. Once loaded this file might be executed on the web server or in the client-side (leading to an XSS attack). The solution is to sanitize input before using it.</li>
 <li><a href="https://www.owasp.org/index.php/Command_Injection">Command Injection</a>. Command injection attacks allow a malicious user to execute arbitrary system commands on the host operating system. The solution is to sanitize user input before it might be used in system calls.</li>
</ul>

<p>There are many more. For a comprehensive listing see <a href="https://en.wikipedia.org/wiki/Category:Web_security_exploits">Category:Web security exploits</a> (Wikipedia) and <a href="https://www.owasp.org/index.php/Category:Attack">Category:Attack</a> (Open Web Application Security Project).</p>

<h2 id="A_few_key_messages">A few key messages</h2>

<p>Almost all the exploits in the previous sections are successful when the web application trusts data from the browser. Whatever else you do to improve the security of your website, you should sanitize all user-originating data before it is displayed in the browser, used in SQL queries, or passed to an operating system or file system call.</p>

<div class="warning">
<p>Important: The single most important lesson you can learn about website security is to <strong>never trust data from the browser</strong>. This includes <code>GET</code> request data in URL parameters, <code>POST</code> data, HTTP headers and cookies, user-uploaded files, etc. Always check and sanitize all incoming data. Always assume the worst.</p>
</div>

<p>A number of other concrete steps you can take are:</p>

<ul>
 <li>Use more effective password management. Encourage strong passwords that are changed regularly. Consider two-factor authentication for your site, so that in addition to a password the user must enter another authentication code (usually one that is delivered via some physical hardware that only the user will have, such as a code in an SMS sent to their phone).</li>
 <li>Configure your web server to use <a href="/en-US/docs/Glossary/https">HTTPS</a> and <a href="/en-US/docs/Web/Security/HTTP_strict_transport_security">HTTP Strict Transport Security</a> (HSTS). HTTPS encrypts data sent between your client and server. This ensures that login credentials, cookies, <code>POST</code> data and header information are all much less available to attackers.</li>
 <li>Keep track of the most popular threats (the <a href="/en-US/docs/">current OWASP list is here</a>) and address the most common vulnerabilities first.</li>
 <li>Use <a href="https://www.owasp.org/index.php/Category:Vulnerability_Scanning_Tools">vulnerability scanning tools</a> to perform automated security testing on your site (later on, your very successful website may also find bugs by offering a bug bounty <a href="https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/">like Mozilla does here</a>).</li>
 <li>Only store and display data that you need to. For example, if your users must store sensitive information like credit card details, only display enough of the card number that it can be identified by the user, and not enough that it can be copied by an attacker and used on another site. The most common pattern these days is to only display the last 4 digits of a credit card number.</li>
</ul>

<p>Web frameworks can help mitigate many of the more common vulnerabilities.</p>

<h2 id="Summary">Summary</h2>

<p>This article has explained the concept of web security and some of the more common threats that your website should attempt to protect against. Most importantly, you should understand that a web application cannot trust any data from the web browser! All user data should be sanitized before it is displayed, or used in SQL queries or file system calls.</p>

<p>That's the end of <a href="/en-US/docs/Learn/Server-side/First_steps">this module</a>, covering your first steps in server-side website programming. We hope you've enjoyed learning the fundamental concepts, and you're now ready to select a Web Framework and start programming.</p>

<p>{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}</p>
