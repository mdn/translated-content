---
title: Cross-site scripting（跨站脚本攻击）
slug: Glossary/Cross-site_scripting
tags:
  - DOM
  - XSS
  - 安全
  - 术语
  - 跨站脚本攻击
translation_of: Glossary/Cross-site_scripting
---
<p>跨站脚本攻击（Cross-site scripting，XSS）是一种安全漏洞，攻击者可以利用这种漏洞在网站上注入恶意的客户端代码。若受害者运行这些恶意代码，攻击者就可以突破网站的访问限制并冒充受害者。根据开放式 Web 应用安全项目（OWASP），XSS 在 2017 年被认为 <a href="https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)">7 种最常见的 Web 应用程序漏洞之一</a>。</p>

<p>如果 Web 应用程序没有部署足够的安全验证，那么，这些攻击很容易成功。浏览器无法探测到这些恶意脚本是不可信的，所以，这些脚本可以任意读取 cookie，session tokens，或者其它敏感的网站信息，或者让恶意脚本重写{{glossary("HTML")}}内容。</p>

<p>在以下 2 种情况下，容易发生 XSS 攻击：</p>

<ol>
 <li>数据从一个不可靠的链接进入到一个 Web 应用程序。</li>
 <li>没有过滤掉恶意代码的动态内容被发送给 Web 用户。</li>
</ol>

<p>恶意内容一般包括 {{glossary("JavaScript")}}，但是，有时候也会包括 HTML，FLASH 或是其他浏览器可执行的代码。XSS 攻击的形式千差万别，但他们通常都会：将 cookies 或其他隐私信息发送给攻击者，将受害者重定向到由攻击者控制的网页，或是经由恶意网站在受害者的机器上进行其他恶意操作。</p>

<p>XSS 攻击可以分为 3 类：存储型（持久型）、反射型（非持久型）、DOM 型。</p>

<dl>
 <dt><strong>存储型 XSS</strong></dt>
 <dd>注入型脚本永久存储在目标服务器上。当浏览器请求数据时，脚本从服务器上传回并执行。</dd>
 <dt><strong>反射型 XSS</strong></dt>
 <dd>当用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。Web 服务器将注入脚本，比如一个错误信息，搜索结果等 返回到用户的浏览器上。由于浏览器认为这个响应来自"可信任"的服务器，所以会执行这段脚本。</dd>
 <dt><strong>基于 DOM 的 XSS</strong></dt>
 <dd>通过修改原始的客户端代码，受害者浏览器的 DOM 环境改变，导致有效载荷的执行。也就是说，页面本身并没有变化，但由于 DOM 环境被恶意修改，有客户端代码被包含进了页面，并且意外执行。</dd>
</dl>

<h2 id="更多相关">更多相关</h2>

<h3 id="基本知识">基本知识</h3>

<ul>
 <li>{{Interwiki("wikipedia", "Cross-site scripting")}} on Wikipedia</li>
 <li><a href="https://www.owasp.org/index.php/XSS">Cross-site scripting on OWASP</a></li>
 <li><a href="https://www.acunetix.com/blog/web-security-zone/articles/dom-xss-explained/">Another article about Cross-site scripting</a></li>
 <li><a href="https://secure.wphackedhelp.com/blog/wordpress-xss-attack/">XSS Attack – Exploit &amp; Protection</a></li>
</ul>
