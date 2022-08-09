---
title: 原因：缺少 CORS 標頭 'Access-Control-Allow-Origin'
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
translation_of: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---
<div>{{HTTPSidebar}}</div>

<h2 id="原因">原因</h2>

<pre class="syntaxbox">Reason: CORS header 'Access-Control-Allow-Origin' missing</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>The response to the {{Glossary("CORS")}} request is missing the required {{HTTPHeader("Access-Control-Allow-Origin")}} header, which is used to determine whether or not the resource can be accessed by content operating within the current origin.</p>

<p>If the server is under your control, add the origin of the requesting site to the set of domains permitted access by adding it to the <code>Access-Control-Allow-Origin</code> header's value.</p>

<p>For example, to allow a site at https://amazing.site to access the resource using CORS, the header should be:</p>

<pre>Access-Control-Allow-Origin: https://amazing.site</pre>

<p>You can also configure a site to allow any site to access it by using the <code>"*"</code> wildcard. You should only use this for public APIs. Private APIs should never use <code>"*"</code>, and should instead have a specific domain or domains set. In addition, the wildcard only works for requests made with the {{htmlattrxref("crossorigin")}} attribute set to <code>"anonymous"</code>.</p>

<pre>Access-Control-Allow-Origin: *</pre>

<div class="warning">
<p><strong>Warning:</strong> Using the wildcard to allow all sites to access a private API is a bad idea for what should be obvious reasons.</p>
</div>

<p> </p>

<p>For example, in Apache, add a line such as the following to the server's configuration (within the appropriate <code>&lt;Directory&gt;</code>, <code>&lt;Location&gt;</code>, <code>&lt;Files&gt;</code>, or <code>&lt;VirtualHost&gt;</code> section). The configuration is typically found in a <code>.conf</code> file (<code>httpd.conf</code> and <code>apache.conf</code> are common names for these), or in an <code>.htaccess</code> file.</p>

<pre>Header set Access-Control-Allow-Origin '<em>origin-list</em>'</pre>

<p>For Nginx, the command to set up this header is:</p>

<pre>add_header 'Access-Control-Allow-Origin' '<em>origin-list</em>'</pre>

<p> </p>

<h2 id="參見">參見</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors</a></li>
 <li>Glossary: {{Glossary("CORS")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction</a></li>
</ul>
