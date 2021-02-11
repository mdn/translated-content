---
title: Using the W3C DOM Level 1 Core
slug: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core
tags:
  - DOM
  - NeedsTranslation
  - NeedsUpdate
  - TopicStub
translation_of: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core
original_slug: Using_the_W3C_DOM_Level_1_Core
---
<p>The W3C's DOM Level 1 Core is a powerful object model for changing the content tree of documents. It is supported in all major browsers including Mozilla Firefox and Microsoft Internet Explorer. It is a powerful base for scripting on the web.</p>

<h2 id="What_is_a_content_tree.3F" name="What_is_a_content_tree.3F">What is a content tree?</h2>

<p>Many HTML authors may think of HTML as something flat -- a bunch of text with tags in the middle. However, it is something much more than that. Any HTML document (or for that matter any SGML document or XML document) is a tree structure. For example, the following document and tree structure are similar (although not identical -- see the notes on <a href="/en-US/docs/Whitespace_in_the_DOM" title="Whitespace_in_the_DOM">whitespace in the DOM</a>):</p>

<pre class="brush: html">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Header&lt;/h1&gt;
  &lt;p&gt;Paragraph&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p><img alt="image:Using_the_W3C_DOM_Level_1_Core-doctree.jpg" class="internal" src="/@api/deki/files/415/=Using_the_W3C_DOM_Level_1_Core-doctree.jpg"></p>

<p>When Mozilla parses a document, it builds a content tree and then uses it to display the document.</p>

<p>The terms used to describe trees show up often in the DOM Level 1 Core. Each of the boxes I drew in the tree above is a node in the tree. The line above a node expresses a parent-child relationship: the node on top is the parent, and the node on the bottom is the child. Two children of the same parent are therefore siblings. Similarly, one can refer to ancestors and descendants. (Cousins are too messy, though.)</p>

<h2 id="What_does_the_DOM_Level_1_Core_let_me_do.3F" name="What_does_the_DOM_Level_1_Core_let_me_do.3F">What does the DOM Level 1 Core let me do?</h2>

<p>The W3C DOM Level 1 allows you to change the content tree <em>any way you want</em>. It is powerful enough to build any HTML document from scratch. It allows authors to change anything in the document from script, at any time. The easiest way for web page authors to change the DOM dynamically is using JavaScript. In JavaScript, the document is accessible the same way it has been in older browsers: from the <code>document</code> property of the global object. This <code>document</code> object implements the <a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#i-Document">Document interface</a> from the W3C's DOM Level 1 spec.</p>

<h2 id="A_simple_example" name="A_simple_example">A simple example</h2>

<p>Suppose the author wants to take the above document and change the contents of the header, and write two paragraphs instead of one. The following script would do the job:</p>

<h3 id="HTML_Content">HTML Content</h3>

<pre class="brush: html">&lt;body&gt;
&lt;input type="button" value="Change this document." onclick="change()"&gt;
&lt;h2&gt;Header&lt;/h2&gt;
&lt;p&gt;Paragraph&lt;/p&gt;
&lt;/body&gt;<span>
</span></pre>

<h3 id="JavaScript_Content">JavaScript Content</h3>

<pre class="brush: js"><span>  function change() {
    // document.getElementsByTagName("H2") returns a NodeList of the &lt;h2&gt;
    // elements in the document, and the first is number 0:

    var header = document.getElementsByTagName("H2").item(0);
    // the firstChild of the header is a Text node:
    header.firstChild.data = "A dynamic document";
    // now the header is "A dynamic document".

    var para = document.getElementsByTagName("P").item(0);
    para.firstChild.data = "This is the first paragraph.";

    // create a new Text node for the second paragraph
    var newText = document.createTextNode("This is the second paragraph.");
    // create a new Element to be the second paragraph
    var newElement = document.createElement("P");
    // put the text in the paragraph
    newElement.appendChild(newText);
    // and put the paragraph on the end of the document by appending it to
    // the BODY (which is the parent of para)
    para.parentNode.appendChild(newElement);
  }</span></pre>

<p>{{ EmbedLiveSample('A_simple_example', 800, 300) }}</p>

<p>You can see this script as <a class="internal" href="/@api/deki/files/2866/=example.html" title="/@api/deki/files/2866/=example.html">a complete example</a>.</p>

<h2 id="How_can_I_learn_more.3F" name="How_can_I_learn_more.3F">How can I learn more?</h2>

<p>Now that you are familiar with the basic concepts of the DOM, there is a document explaining the <a href="/en-US/docs/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces" title="Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces">DOM Level 1 fundamental methods</a>. It is the follow-up to this document.</p>

<p>See also the <a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html">DOM Level 1 Core specification</a> from the W3C. It's a reasonably clear spec, although it is formal. The main thing that's useful to authors is the description of the different DOM objects and all their properties and methods. Also see our <a href="/en-US/docs/DOM" title="DOM">other DOM documentation</a>.</p>

<div class="originaldocinfo">
<p><strong>Original Document Information</strong></p>

<ul>
 <li>Author(s): L. David Baron &lt;dbaron at dbaron dot org&gt;</li>
 <li>Copyright Information: © 1998-2005 by individual mozilla.org contributors; content available under a <a class="external" href="http://www.mozilla.org/foundation/licensing/website-content.html">Creative Commons license</a></li>
</ul>
</div>
