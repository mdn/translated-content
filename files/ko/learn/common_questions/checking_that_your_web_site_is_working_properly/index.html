---
title: 웹 사이트가 제대로 동작하는지 확인하는 방법
slug: Learn/Common_questions/Checking_that_your_web_site_is_working_properly
translation_of: Learn/Common_questions/Checking_that_your_web_site_is_working_properly
original_slug: Learn/Common_questions/웹_사이트가_제대로_동작하는지_확인
---
<div class="summary">
<p>이번에는 웹사이트 동작과 관련한 다양한 문제해결 단계와 그 문제들을 해결하기 위한 방법들을 알아보겠습니다.</p>
</div>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">전제 조건:</th>
   <td>먼저, <a href="/en-US/docs/Learn/Upload_files_to_a_web_server">upload files웹 서버에 파일 업로드 방법</a>을 알아야 합니다.</td>
  </tr>
  <tr>
   <th scope="row">목표:</th>
   <td>웹 사이트에서 발생할 수 있는 기본적인 문제들과 해결방법을 알아봅시다.</td>
  </tr>
 </tbody>
</table>

<p id="Summary">개발하신 웹 사이트를 온라인상에 배포를 하였나요? 잘 했어요! 그런데 문제없이 동작하는게 확실한가요?</p>

<p>종종 온라인에 배포한 웹 서버는 로컬에서 모습과는 꽤 다르게 동작할 때가 있습니다. 그 때문에 온라인에 배포할 때마다 한 번씩 확인이 필요합니다. 아마 많은 문제가 발생해 놀라게 될 텐데요: 이미지가 나오지 않거나, 페이지가 로딩이 안되거나 느리게 로딩되는 등 하는 문제들요. 대부분의 경우는 큰 문제가 아닙니다, 간단한 실수나 호스팅 세팅 같은 문제죠.</p>

<p>이런 문제들을 어떻게 진단하고 해결하는지 살펴봅시다.</p>

<h2 id="Active_Learning">Active Learning</h2>

<p><em>There is no active learning available yet. <a href="/en-US/docs/MDN/Getting_started">Please, consider contributing</a>.</em></p>

<h2 id="Dig_deeper">Dig deeper</h2>

<h3 id="브라우저에서_테스트하기">브라우저에서 테스트하기</h3>

<p>웹 사이트가 잘 동작하는지 알고 싶다면, 먼저 브라우저를 시작하고 테스트하려는 페이지로 이동하세요.</p>

<h4 id="어_이미지가_어디갔죠">어?, 이미지가 어디갔죠?</h4>

<p>우리의 개인 사이트를 봅시다.(동작x), <code>http://demozilla.examplehostingprovider.net/</code>. It's not showing the image we expected!</p>

<p><img alt="Oops, the ‘unicorn’ image is missing" src="https://mdn.mozillademos.org/files/9643/image-missing.png" style="height: 189px; width: 380px;"></p>

<p>Open Firefox's Network tool (<strong>Tools ➤ Web Developer ➤ Network</strong>) and reload the page:</p>

<p><img alt="The image has a 404 error" src="https://mdn.mozillademos.org/files/9645/error404.png" style="height: 304px; width: 562px;"></p>

<p>There's the problem, that "404" at the bottom. "404" means "resource not found", and that's why we didn't see the image.</p>

<h4 id="HTTP_statuses">HTTP statuses</h4>

<p>Servers respond with a status message whenever they receive a request. Here are the most common statuses:</p>

<dl>
 <dt><strong><span id="cke_bm_110S" class="hidden"> </span>200: OK</strong></dt>
 <dd>The resource you asked for was delivered.</dd>
 <dt><strong>301: Moved permanently</strong></dt>
 <dd>The resource has moved to a new location. You won't see this much in your browser, but it's good to know about "301" since search engines use this information a lot to update their indexes.</dd>
 <dt><strong>304: Not modified</strong></dt>
 <dd>The file has not changed since the last time you asked for it, so your browser can display the version from its cache, resulting in faster response times and more efficient use of bandwidth.</dd>
 <dt><strong>403: Forbidden</strong></dt>
 <dd>You aren't allowed to display the resource. Usually it has to do with a configuration mistake (e.g. your hosting provider forgot to give you access rights to a directory).</dd>
 <dt><strong>404: Not found</strong></dt>
 <dd>Self-explanatory. We'll discuss how to solve this below.</dd>
 <dt><strong>500: Internal server error</strong></dt>
 <dd>Something went wrong on the server. For instance, maybe the server-side language ({{Glossary("PHP")}}, .Net, etc.) stopped working, or the web server itself has a configuration problem. Usually it's best to resort to your hosting provider's support team.</dd>
 <dt><strong>503: Service unavailable</strong></dt>
 <dd>Usually resulting from a shortterm system overload. The server has some sort of problem. Try again in a little while.</dd>
</dl>

<ul>
</ul>

<p>As beginners checking our (simple) website, we'll deal most often with 200, 304, 403, and 404.</p>

<h4 id="Fixing_the_404">Fixing the 404</h4>

<p>So what went wrong?</p>

<p><img alt="Le list of images in our project" src="https://mdn.mozillademos.org/files/9649/demozilla-images-list.png" style="height: 71px; width: 407px;"></p>

<p>At first glance, the image we asked for seems to be in the right place... but the Network tool reported a "404". It turns out that we made a typo in our HTML code: <code>unicorn_pics.png</code> rather than <code>unicorn_pic.png</code>. So correct the typo in your code editor by changing the image's <code>src</code> attribute:</p>

<p><img alt="Deleting the ‘s’" src="https://mdn.mozillademos.org/files/9651/code-correct.png" style="height: 125px; width: 775px;"></p>

<p>Save, <a href="/en-US/Learn/Upload_files_to_a_web_server">push to the server</a>, and reload the page in your browser:</p>

<p><img alt="The image loads corectly in the browser" src="https://mdn.mozillademos.org/files/9655/image-corrected.png" style="height: 554px; width: 565px;"></p>

<p>There you go! Let's look at the {{Glossary("HTTP")}} statuses again:</p>

<ul>
 <li><strong>200</strong> for <code>/</code> and for <code>unicorn_pic.png</code> means that we succeeded in reloading the page and the image.</li>
 <li><strong>304</strong> for <code>basic.css</code> means that this file has not changed since the last request, so the browser can use the file in its cache rather than receiving a fresh copy.</li>
</ul>

<p>So we fixed the error and learned a few HTTP statuses along the way!</p>

<h3 id="Frequent_errors">Frequent errors</h3>

<p>The most frequent errors that we find are these:</p>

<h4 id="Typos_in_the_address">Typos in the address</h4>

<p>We wanted to type <code>http://demozilla.examplehostingprovider.net/</code> but typed too fast and forgot an “l”:</p>

<p><img alt="Address unreachable" src="https://mdn.mozillademos.org/files/9657/cannot-find-server.png" style="height: 425px; width: 908px;"></p>

<p>The address cannot be found. Indeed.</p>

<h4 id="404_errors">404 errors</h4>

<p>Many times the error just results just from a typo, but sometimes maybe you either forgot to upload a resource or you lost your network connection while you were uploading your resources. First check the spelling and accuracy of the file path, and if there's still a problem, upload your files again. That will likely fix the problem.</p>

<h4 id="JavaScript_errors">JavaScript errors</h4>

<p>Someone (possibly you) added a script to the page and made a mistake. This will not prevent the page from loading but you will feel something went wrong.</p>

<p>Open the console (<strong>Tools ➤ Web developer ➤ Web Console</strong>) and reload the page:</p>

<p><img alt="A Javascript error is shown in the Console" src="https://mdn.mozillademos.org/files/9659/js-error.png" style="height: 511px; width: 523px;"></p>

<p>In this example, we learn (quite clearly) what the error is, and we can go fix it (we will cover JavaScript in <a href="/en-US/Learn/JavaScript">another series </a>of articles).</p>

<h3 id="More_things_to_check">More things to check</h3>

<p>We have listed a few simple ways to check that your website works properly, as well as the most common errors you may run across and how to fix them. You can also test if your page meets these criteria:</p>

<h4 id="Hows_the_performance">How's the performance?</h4>

<p>Does the page load fast enough? Resources like <a href="http://www.webpagetest.org/">WebPagetest.org</a> or browser add-ons like <a href="https://addons.mozilla.org/en-US/firefox/addon/yslow/">YSlow</a> can tell you a few interesting things:</p>

<p><img alt="Yslow diagnostics" src="https://mdn.mozillademos.org/files/9661/yslow-diagnostics.png" style="height: 766px; width: 637px;"></p>

<p>Grades go from A to F. Our page is just small and meets most criteria. But we can already note it would have been better to use a {{Glossary("CDN")}}. That doesn't matter very much when we're only serving one image, but it would be critical for a high-bandwidth website serving many thousands of images.</p>

<h4 id="Is_the_server_responsive_enough">Is the server responsive enough?</h4>

<p><code>ping</code> is a useful shell tool that tests the domain name you provide and tells you if the server's responding or not:</p>

<pre>$ ping mozilla.org
PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=44 time=148.741 ms
64 bytes from 63.245.215.20: icmp_seq=1 ttl=44 time=148.541 ms
64 bytes from 63.245.215.20: icmp_seq=2 ttl=44 time=148.734 ms
64 bytes from 63.245.215.20: icmp_seq=3 ttl=44 time=147.857 ms
^C
--- mozilla.org ping statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 147.857/148.468/148.741/0.362 ms</pre>

<p>Just keep in mind a handy keyboard shortcut: <strong>Ctrl+C</strong>.  Ctrl+C sends an “interrupt” signal to the runtime and tells it to stop.  If you don't stop the runtime, <code>ping</code> will ping the server indefinitely.</p>

<h3 id="A_simple_checklist">A simple checklist</h3>

<ul>
 <li>Check for 404s</li>
 <li>Make sure all webpages are behaving as you expect</li>
 <li>Check your website in several browsers to make sure it renders consistently</li>
</ul>

<h2 id="Next_steps">Next steps</h2>

<p>Congratulations, your website is up and running for anyone to visit. That's a huge achievement. Now, you can start digging deeper into various subjects.</p>

<ul>
 <li>Since people can come to your website from all over the world, you should consider making it <a href="/en-US/docs/Learn/What_is_accessibility">accessible to everybody</a>.</li>
 <li>Is the design of your website a bit too rough? It's time to <a href="/en-US/docs/Learn/CSS/Using_CSS_in_a_web_page">learn more about CSS</a>.</li>
</ul>
