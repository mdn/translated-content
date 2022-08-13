---
title: DataTransferItem.webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
---
<div>{{APIRef("HTML Drag and Drop API")}}{{Non-standard_header}}</div>

<p>如果由文件描述的项目<a href="/en-US/docs/Web/API/DataTransferItem"><code>DataTransferItem</code></a>是文件，则<code>webkitGetAsEntry()</code>返回<a href="/en-US/docs/Web/API/FileSystemFileEntry"><code>FileSystemFileEntry</code></a>或<a href="/en-US/docs/Web/API/FileSystemDirectoryEntry"><code>FileSystemDirectoryEntry</code></a>表示它。如果该项不是文件，<code>null</code>则返回。</p>

<div class="note">
<p>此功能<code>webkitGetAsEntry()</code>在此时非包含 Firefox 的非 WebKit 浏览器中实现; 它可能会<code>getAsEntry()</code>在以后简单地重命名，所以你应该进行防御性编码，寻找两者。</p>
</div>

<h2 id="语法"><a href="/en-US/docs/Web/API/DataTransferItem/webkitGetAsEntry#Syntax">语法</a></h2>

<pre class="syntaxbox"><em>DataTransferItem</em>.webkitGetAsEntry();</pre>

<h3 id="参数">参数</h3>

<p>没有。</p>

<h3 id="返回值">返回值</h3>

<p><a href="/en-US/docs/Web/API/FileSystemEntry"><code>FileSystemEntry</code></a>基于 A 的对象描述被删除的项目。这将是<a href="/en-US/docs/Web/API/FileSystemFileEntry"><code>FileSystemFileEntry</code></a>或<a href="/en-US/docs/Web/API/FileSystemDirectoryEntry"><code>FileSystemDirectoryEntry</code></a>。</p>

<h2 id="Example">示例</h2>

<p>在此示例中，创建了一个放置区域，该放置区域<code><a href="/en-US/docs/Web/Events/drop">drop</a></code>通过扫描已删除的文件和目录来响应事件，从而输出分层目录列表。</p>

<h3 id="HTML内容">HTML 内容</h3>

<p>HTML 建立了放置区本身，它是<a href="/en-US/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a>具有 ID 的元素<code>"dropzone"</code>，以及带有 ID 的无序列表元素<code>"listing"</code>。</p>

<pre><code>&lt;p&gt;Drag files and/or directories to the box below!&lt;/p&gt;

&lt;div id="dropzone"&gt;
  &lt;div id="boxtitle"&gt;
    Drop Files Here
  &lt;/div&gt;
&lt;/div&gt;

&lt;h2&gt;Directory tree:&lt;/h2&gt;

&lt;ul id="listing"&gt;
&lt;/ul&gt;</code></pre>

<h3 id="CSS内容">CSS 内容</h3>

<p>此处显示示例使用的样式。</p>

<pre><code>#dropzone {
  text-align: center;
  width: 300px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  border: 4px dashed red;
  border-radius: 10px;
}

#boxtitle {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: black;
  font: bold 2em "Arial", sans-serif;
  width: 300px;
  height: 100px;
}

body {
  font: 14px "Arial", sans-serif;
}</code></pre>

<h3 id="JavaScript内容">JavaScript 内容</h3>

<p>首先，让我们看一下递归<code>scanFiles()</code>函数。该函数将<a href="/en-US/docs/Web/API/FileSystemEntry"><code>FileSystemEntry</code></a>表示要扫描和处理的文件系统中的条目（<code>item</code>参数）和插入内容列表（<code>container</code>参数）的元素作为输入。</p>

<div class="blockIndicator note">
<p>请注意，要读取目录中的所有文件，<code>readEntries</code>需要重复调​​用，直到它返回一个空数组。在基于 Chromium 的浏览器中，以下示例仅返回最多 100 个条目。</p>
</div>

<pre class="brush: js">let dropzone = document.getElementById("dropzone");
let listing = document.getElementById("listing");

function scanFiles(item, container) {
  let elem = document.createElement("li");
  elem.innerHTML = item.name;
  container.appendChild(elem);

 if (item.isDirectory) {
    let directoryReader = item.createReader();
    let directoryContainer = document.createElement("ul");
    container.appendChild(directoryContainer);
    directoryReader.readEntries(function(entries) {
        entries.forEach(function(entry) {
          scanFiles(entry, directoryContainer);
      });
    });
  }
}
</pre>

<p><code>scanFiles()</code>首先创建一个新<a href="/en-US/docs/Web/HTML/Element/li"><code>&lt;li&gt;</code></a>元素来表示正在扫描的项目，将项目的名称作为文本内容插入其中，然后将其附加到容器中。容器在此示例中始终是列表元素，您很快就会看到。</p>

<p>一旦当前项目在列表中，<a href="/en-US/docs/Web/API/FileSystemEntry/isDirectory"><code>isDirectory</code></a>就会检查项目的属性。如果该项目是目录，我们需要递归到该目录。第一步是创建一个<a href="/en-US/docs/Web/API/FileSystemDirectoryReader"><code>FileSystemDirectoryReader</code></a>to 来处理获取目录的内容。这是通过调用 item 的<a href="/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader"><code>createReader()</code></a>方法完成的。然后<a href="/en-US/docs/Web/HTML/Element/ul"><code>&lt;ul&gt;</code></a>创建一个 new 并将其附加到父列表; 这将包含列表层次结构中下一级别的目录内容。</p>

<p>之后，<a href="/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries"><code>directoryReader.readEntries()</code></a>调用读取目录中的所有条目。反过来，这些都被传递到递归调用<code>scanFiles()</code>以处理它们。其中任何文件都只是插入到列表中; 将任何目录插入到列表中，并在下面添加列表层次结构的新级别，依此类推。</p>

<p>然后是事件处理程序。首先，我们阻止<code><a href="/en-US/docs/Web/Events/dragover">dragover</a></code>事件由默认处理程序处理，以便我们的 drop 区域可以接收 drop：</p>

<pre class="brush: js">dropzone.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);
</pre>

<p>当然，关闭所有事件的事件处理程序是事件的处理程序<code><a href="/en-US/docs/Web/Events/drop">drop</a></code>：</p>

<pre class="brush: js">dropzone.addEventListener("drop", function(event) {
  let items = event.dataTransfer.items;

  event.preventDefault();
  listing.innerHTML = "";

  for (let i=0; i&lt;items.length; i++) {
    let item = items[i].webkitGetAsEntry();

    if (item) {
        scanFiles(item, listing);
    }
  }
}, false);</pre>

<p>这将获取<a href="/en-US/docs/Web/API/DataTransferItem"><code>DataTransferItem</code></a>表示从中删除的项目的对象列表<code>event.dataTransfer.items</code>。然后我们打电话<a href="/en-US/docs/Web/API/Event/preventDefault"><code>Event.preventDefault()</code></a>来防止事件在完成后被进一步处理。</p>

<p>现在是时候开始构建列表了。首先，通过设置<a href="/en-US/docs/Web/API/Element/innerHTML"><code>listing.innerHTML</code></a>为空来清空列表。这使我们<a href="/en-US/docs/Web/API/Ul"><code>ul</code></a>开始插入目录条目为空。</p>

<p>然后我们遍历已删除项目列表中的项目。对于每一个，我们调用它的<a href="/en-US/docs/Web/API/DataTransferItem/webkitGetAsEntry"><code>webkitGetAsEntry()</code></a>方法来获得<a href="/en-US/docs/Web/API/FileSystemEntry"><code>FileSystemEntry</code></a>表示文件。如果成功，我们会调用<code>scanFiles()</code>处理项目 - 如果它只是一个文件，或者添加它，如果它是一个目录，则将其添加到列表中。</p>

<h3 id="结果">结果</h3>

<p>你可以通过下面的尝试看看它是如何工作的。 找到一些文件和目录并将其拖入，然后查看生成的输出。</p>

<p>{{ EmbedLiveSample('Example', 600, 400) }}</p>

<h2 id="Specifications">规范</h2>

<p>此 API 没有官方的 W3C 或 WHATWG 规范。</p>

<h2 id="Browser_compatibility">浏览器兼容性</h2>

<p>{{COMPAT("api.DataTransferItem.webkitGetAsEntry")}}</p>

<h2 id="也可以看看">也可以看看</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/File_and_Directory_Entries_API">文件和目录条目 API</a></li>
 <li><a href="/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction">文件系统 API 简介</a></li>
 <li>{{domxref("DataTransferItem")}}</li>
 <li>{{domxref("FileSystemEntry")}}，{{domxref("FileSystemFileEntry")}}和{{domxref("FileSystemDirectoryEntry")}}</li>
 <li>活动：{{event("dragover")}}和{{event("drop")}}</li>
</ul>
