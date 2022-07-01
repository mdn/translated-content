---
title: 异步
slug: Glossary/Asynchronous
tags:
  - 异步
  - 术语表
translation_of: Glossary/Asynchronous
original_slug: Glossary/异步
---
<p><strong>异步</strong>指两个或两个以上的对象或事件<strong>不</strong>同时存在或发生（或多个相关事物的发生无需等待其前一事物的完成）。在计算机技术中，"异步"一词被用于两大语境。</p>

<dl>
 <dt>网络与通信</dt>
 <dd>
 <p>异步通信是一种在双方或多方之间交换消息的方式。其中每个参与方各自在他们方便或可操作的情况下接收并处理消息，而不是在收到消息后立即进行处理。另外，消息的发送无需等待确认信息，前提是如果出现问题，接收方将请求更正或以其他方式处理该情况。</p>

 <p>对人类来说，电子邮件就是一种异步通信方式；发送者发送了一封邮件，接着接收者会在方便时读取和回复该邮件，而不是马上这样做。双方可以继续随时发送和接收信息，而无需双方安排何时进行操作。</p>

 <p>在软件进行异步通信时，一个程序可能会向另一软件（如服务器）请求信息，并在等待回复的同时继续执行其他操作。例如，<a href="/zh-CN/docs/Web/Guide/AJAX">AJAX</a>(Asynchronous JavaScript and {{Glossary("XML")}}) 编程技术（现在通常简写为"Ajax"，不过现在的应用不常用 XML，而是用{{Glossary("JSON")}}）就是这样一种机制，它通过 HTTP 从服务器请求较少的数据，当结果可被返回时才返回结果，而不是立即返回。</p>
 </dd>
 <dt>软件设计</dt>
 <dd>
 <p>异步软件设计通过构建代码扩展了异步的概念，按照这种设计编写的代码使得程序能够要求一个任务与先前的一个（或多个）任务一起执行，而无需为了等待它们完成而停止执行。当后来的任务完成时，程序将使用约定好的机制通知先前的任务，以便让它知道任务已经完成，以及如果有结果存在的话，这个结果是可用的。</p>

 <p>还有许多用来实现异步软件的编程技术。查看文章<a href="/zh-CN/docs/Learn/JavaScript/Asynchronous">Asynchronous JavaScript</a>来了解它们吧。</p>
 </dd>
</dl>

<h2 id="了解更多">了解更多</h2>

<h3 id="技术参考">技术参考</h3>

<ul>
 <li><a href="/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data">Fetching data from the server</a> (Learning Area) 从服务器获取数据</li>
 <li>{{glossary("Synchronous")}} 同步</li>
</ul>
