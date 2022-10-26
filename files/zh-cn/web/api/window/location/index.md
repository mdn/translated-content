---
title: window.location
slug: Web/API/Window/location
---

{{ APIRef() }}

**window\.location** 只读属性，返回一个 {{domxref("Location")}} 对象，其中包含有关文档当前位置的信息。

> **备注：** window\.location : 所有字母必须小写！

尽管 window\.location 是一个*只读* Location 对象，你仍然可以赋给它一个 {{domxref("DOMString")}}。这意味着您可以在大多数情况下处理 **location**，就像它是一个字符串一样：window\.location = 'http\://www\.example.com'，是 window\.location.href = 'http\://www\.example.com'的同义词。

## 语法

```
let oldLocation = location;
location = newLocation;
```

## 示例

### 简单例子

```js
alert(location);
// 弹出 "https://developer.mozilla.org/en-US/docs/Web/API/window.location"
```

### 例子#1：导航到一个新页面

只要赋给 location 对象一个新值，文档就会使用新的 URL 加载，就好像使用修改后的 URL 调用了 `window.location.assign()` 一样。需要注意的是，安全设置，如 CORS（跨域资源共享），可能会限制实际加载新页面。

```js
window.location.assign("http://www.mozilla.org"); // or
window.location = "http://www.mozilla.org";
```

### 例子#2：强制从服务器重新加载当前页面

```js
window.location.reload(true);
```

### 例子#3

考虑下面的例子，该例使用 `replace()` 方法重新加载页面，并将 `window.location.pathname` 的值插入到 hash：

```js
function reloadPageWithHash() {
  var initialPage = window.location.pathname;
  window.location.replace('http://example.com/#' + initialPage);
}
```

> **备注：** The example above works in situations where `window.location.hash` does not need to be retained. However, in Gecko-based browsers, setting `window.location.pathname` in this manner will erase any information in `window.location.hash`, whereas in WebKit (and possibly other browsers), setting the pathname will not alter the the hash. If you need to change pathname but keep the hash as is, use the `replace()` method instead, which should work consistently across browsers.

### 例子#4：弹出警告框，显示当前 URL 的属性：

```js
function showLoc() {
  var oLocation = window.location, aLog = ["Property (Typeof): Value", "window.location (" + (typeof oLocation) + "): " + oLocation ];
  for (var sProp in oLocation){
    aLog.push(sProp + " (" + (typeof oLocation[sProp]) + "): " +  (oLocation[sProp] || "n/a"));
  }
  alert(aLog.join("\n"));
}

// in html: <button onclick="showLoc();">Show location properties</button>
```

### 例子#5：通过修改 `search` 属性向服务器发送字符串数据：

```js
function sendData (sData) {
  window.location.search = sData;
}

// in html: <button onclick="sendData('Some data');">Send data</button>
```

当前 URL 带上 "?Some%20data"，被发送到服务端（如果服务端不处理，则使用修改后的查询字符串 \[search string] 重新加载当前文档）。

### 例子#6：获取一个 `window.location.search` 键值（key value）：

```js
function loadPageVar (sVar) {
  return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

alert(loadPageVar("name"));
```

### 例子#7：通过 `window.location.search` 字符串获取查询参数，存入对象 `oGetVars` 中：

```js
var oGetVars = {};

if (window.location.search.length > 1) {
  for (var aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
    aItKey = aCouples[nKeyId].split("=");
    oGetVars[decodeURIComponent(aItKey[0])] = aItKey.length > 1 ? decodeURIComponent(aItKey[1]) : "";
  }
}

// alert(oGetVars.yourVar);
```

同样可以通过一个匿名构造函数来获取，这样只声明了一个全局变量。

```js
var oGetVars = new (function (sSearch) {
  if (sSearch.length > 1) {
    for (var aItKey, nKeyId = 0, aCouples = sSearch.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
      aItKey = aCouples[nKeyId].split("=");
      this[decodeURIComponent(aItKey[0])] = aItKey.length > 1 ? decodeURIComponent(aItKey[1]) : "";
    }
  }
})(window.location.search);

// alert(oGetVars.yourVar);
```

### 例子#8：通过 `window.location.search` 字符串获取查询参数，存入对象 `oGetVars` 中，并尝试识别参数类型（typeof）：

```js
var oGetVars = {};

function buildValue(sValue) {
  if (/^\s*$/.test(sValue)) { return null; }
  if (/^(true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
  if (isFinite(sValue)) { return parseFloat(sValue); }
  if (isFinite(Date.parse(sValue))) { return new Date(sValue); } // this conditional is unreliable in non-SpiderMonkey browsers
  return sValue;
}

if (window.location.search.length > 1) {
  for (var aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
    aItKey = aCouples[nKeyId].split("=");
    oGetVars[unescape(aItKey[0])] = aItKey.length > 1 ? buildValue(unescape(aItKey[1])) : null;
  }
}

// alert(oGetVars.yourVar);
```

同样可以通过一个匿名构造函数来获取，这样只声明了一个全局变量。

```js
var oGetVars = new (function (sSearch) {
  var rNull = /^\s*$/, rBool = /^(true|false)$/i;
  function buildValue(sValue) {
    if (rNull.test(sValue)) { return null; }
    if (rBool.test(sValue)) { return sValue.toLowerCase() === "true"; }
    if (isFinite(sValue)) { return parseFloat(sValue); }
    if (isFinite(Date.parse(sValue))) { return new Date(sValue); }
    return sValue;
  }
  if (sSearch.length > 1) {
    for (var aItKey, nKeyId = 0, aCouples = sSearch.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
      aItKey = aCouples[nKeyId].split("=");
      this[unescape(aItKey[0])] = aItKey.length > 1 ? buildValue(unescape(aItKey[1])) : null;
    }
  }
})(window.location.search);

// alert(oGetVars.yourVar);
```

### 例子#9：不改变 `window.location.hash` 属性情况下使用书签

```html
<!doctype html>
<html>
<head>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<title>MDN Example</title>
<script type="text/javascript">
function showNode (oNode) {
  var nLeft = 0, nTop = 0;
  for (var oItNode = oNode; oItNode; nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent);   window.scrollTo(nLeft, nTop); }

function showBookmark (sBookmark, bUseHash) {
  if (arguments.length === 1 || bUseHash) { window.location.hash = sBookmark; return; }
  var oBookmark = document.querySelector(sBookmark);
  if (oBookmark) { showNode(oBookmark); }
}
</script>
<style type="text/css">
span.intLink {
    cursor: pointer;
    color: #0000ff;
    text-decoration: underline;
}
</style>
</head>

<body>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices dolor ac dolor imperdiet ullamcorper. Suspendisse quam libero, luctus auctor mollis sed, malesuada condimentum magna. Quisque in ante tellus, in placerat est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a mi magna, quis mattis dolor. Etiam sit amet ligula quis urna auctor imperdiet nec faucibus ante. Mauris vel consectetur dolor. Nunc eget elit eget velit pulvinar fringilla consectetur aliquam purus. Curabitur convallis, justo posuere porta egestas, velit erat ornare tortor, non viverra justo diam eget arcu. Phasellus adipiscing fermentum nibh ac commodo. Nam turpis nunc, suscipit a hendrerit vitae, volutpat non ipsum.</p>
<p>Duis lobortis sapien quis nisl luctus porttitor. In tempor semper libero, eu tincidunt dolor eleifend sit amet. Ut nec velit in dolor tincidunt rhoncus non non diam. Morbi auctor ornare orci, non euismod felis gravida nec. Curabitur elementum nisi a eros rutrum nec blandit diam placerat. Aenean tincidunt risus ut nisi consectetur cursus. Ut vitae quam elit. Donec dignissim est in quam tempor consequat. Aliquam aliquam diam non felis convallis suscipit. Nulla facilisi. Donec lacus risus, dignissim et fringilla et, egestas vel eros. Duis malesuada accumsan dui, at fringilla mauris bibendum quis. Cras adipiscing ultricies fermentum. Praesent bibendum condimentum feugiat.</p>
<p id="myBookmark1">[&nbsp;<span class="intLink" onclick="showBookmark('#myBookmark2');">Go to bookmark #2</span>&nbsp;]</p>
<p>Vivamus blandit massa ut metus mattis in fringilla lectus imperdiet. Proin ac ante a felis ornare vehicula. Fusce pellentesque lacus vitae eros convallis ut mollis magna pellentesque. Pellentesque placerat enim at lacus ultricies vitae facilisis nisi fringilla. In tincidunt tincidunt tincidunt. Nulla vitae tempor nisl. Etiam congue, elit vitae egestas mollis, ipsum nisi malesuada turpis, a volutpat arcu arcu id risus.</p>
<p>Nam faucibus, ligula eu fringilla pulvinar, lectus tellus iaculis nunc, vitae scelerisque metus leo non metus. Proin mattis lobortis lobortis. Quisque accumsan faucibus erat, vel varius tortor ultricies ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero nunc. Nullam tortor nunc, elementum a consectetur et, ultrices eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl eu sem vehicula egestas.</p>
<p>Aenean viverra varius mauris, sed elementum lacus interdum non. Phasellus sit amet lectus vitae eros egestas pellentesque fermentum eget magna. Quisque mauris nisl, gravida vitae placerat et, condimentum id metus. Nulla eu est dictum dolor pulvinar volutpat. Pellentesque vitae sollicitudin nunc. Donec neque magna, lobortis id egestas nec, sodales quis lectus. Fusce cursus sollicitudin porta. Suspendisse ut tortor in mauris tincidunt rhoncus. Maecenas tincidunt fermentum facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
<p>Suspendisse turpis nisl, consectetur in lacinia ut, ornare vel mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lectus eu turpis vulputate cursus. Mauris interdum tincidunt erat id pharetra. Nullam in libero elit, sed consequat lectus. Morbi odio nisi, porta vitae molestie ut, gravida ut nunc. Ut non est dui, id ullamcorper orci. Praesent vel elementum felis. Maecenas ornare, dui quis auctor hendrerit, turpis sem ullamcorper odio, in auctor magna metus quis leo. Morbi at odio ante.</p>
<p>Curabitur est ipsum, porta ac viverra faucibus, eleifend sed eros. In sit amet vehicula tortor. Vestibulum viverra pellentesque erat a elementum. Integer commodo ultricies lorem, eget tincidunt risus viverra et. In enim turpis, porttitor ac ornare et, suscipit sit amet nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vel ultrices nibh. Sed commodo aliquam aliquam. Nulla euismod, odio ut eleifend mollis, nisi dui gravida nibh, vitae laoreet turpis purus id ipsum. Donec convallis, velit non scelerisque bibendum, diam nulla auctor nunc, vel dictum risus ipsum sit amet est. Praesent ut nibh sit amet nibh congue pulvinar. Suspendisse dictum porttitor tempor.</p>
<p>Vestibulum dignissim erat vitae lectus auctor ac bibendum eros semper. Integer aliquet, leo non ornare faucibus, risus arcu tristique dolor, a aliquet massa mauris quis arcu. In porttitor, lectus ac semper egestas, ligula magna laoreet libero, eu commodo mauris odio id ante. In hac habitasse platea dictumst. In pretium erat diam, nec consequat eros. Praesent augue mi, consequat sed porttitor at, volutpat vitae eros. Sed pretium pharetra dapibus. Donec auctor interdum erat, lacinia molestie nibh commodo ut. Maecenas vestibulum vulputate felis, ut ullamcorper arcu faucibus in. Curabitur id arcu est. In semper mollis lorem at pellentesque. Sed lectus nisl, vestibulum id scelerisque eu, feugiat et tortor. Pellentesque porttitor facilisis ultricies.</p>
<p id="myBookmark2">[&nbsp;<span class="intLink" onclick="showBookmark('#myBookmark1');">Go to bookmark #1</span> | <span class="intLink" onclick="showBookmark('#myBookmark1', false);">Go to bookmark #1 without using location.hash</span> | <span class="intLink" onclick="showBookmark('#myBookmark3');">Go to bookmark #3</span>&nbsp;]</p>
<p>Phasellus tempus fringilla nunc, eget sagittis orci molestie vel. Nulla sollicitudin diam non quam iaculis ac porta justo venenatis. Quisque tellus urna, molestie vitae egestas sit amet, suscipit sed sem. Quisque nec lorem eu velit faucibus tristique ut ut dolor. Cras eu tortor ut libero placerat venenatis ut ut massa. Sed quis libero augue, et consequat libero. Morbi rutrum augue sed turpis elementum sed luctus nisl molestie. Aenean vitae purus risus, a semper nisl. Pellentesque malesuada, est id sagittis consequat, libero mauris tincidunt tellus, eu sagittis arcu purus rutrum eros. Quisque eget eleifend mi. Duis pharetra mi ac eros mattis lacinia rutrum ipsum varius.</p>
<p>Fusce cursus pulvinar aliquam. Duis justo enim, ornare vitae elementum sed, porta a quam. Aliquam eu enim eu libero mollis tempus. Morbi ornare aliquam posuere. Proin faucibus luctus libero, sed ultrices lorem sagittis et. Vestibulum malesuada, ante nec molestie vehicula, quam diam mollis ipsum, rhoncus posuere mauris lectus in eros. Nullam feugiat ultrices augue, ac sodales sem mollis in.</p>
<p id="myBookmark3"><em>Here is the bookmark #3</em></p>
<p>Proin vitae sem non lorem pellentesque molestie. Nam tempus massa et turpis placerat sit amet sollicitudin orci sodales. Pellentesque enim enim, sagittis a lobortis ut, tempus sed arcu. Aliquam augue turpis, varius vel bibendum ut, aliquam at diam. Nam lobortis, dui eu hendrerit pellentesque, sem neque porttitor erat, non dapibus velit lectus in metus. Vestibulum sit amet felis enim. In quis est vitae nunc malesuada consequat nec nec sapien. Suspendisse aliquam massa placerat dui lacinia luctus sed vitae risus. Fusce tempus, neque id ultrices volutpat, mi urna auctor arcu, viverra semper libero sem vel enim. Mauris dictum, elit non placerat malesuada, libero elit euismod nibh, nec posuere massa arcu eu risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna velit, dapibus eget varius feugiat, pellentesque sit amet ligula. Maecenas nulla nisl, facilisis eu egestas scelerisque, mollis eget metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi sed congue mi.</p>
<p>Fusce metus velit, pharetra at vestibulum nec, facilisis porttitor mi. Curabitur ligula sapien, fermentum vel porttitor id, rutrum sit amet magna. Sed sit amet sollicitudin turpis. Aenean luctus rhoncus dolor, et pulvinar ante egestas et. Donec ac massa orci, quis dapibus augue. Vivamus consectetur auctor pellentesque. Praesent vestibulum tincidunt ante sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce purus metus, imperdiet vitae iaculis convallis, bibendum vitae turpis.</p>
<p>Fusce aliquet molestie dolor, in ornare dui sodales nec. In molestie sollicitudin felis a porta. Mauris nec orci sit amet orci blandit tristique congue nec nunc. Praesent et tellus sollicitudin mauris accumsan fringilla. Morbi sodales, justo eu sollicitudin lacinia, lectus sapien ullamcorper eros, quis molestie urna elit bibendum risus. Proin eget tincidunt quam. Nam luctus commodo mauris, eu posuere nunc luctus non. Nulla facilisi. Vivamus eget leo rhoncus quam accumsan fringilla. Aliquam sit amet lorem est. Nullam vel tellus nibh, id imperdiet orci. Integer egestas leo eu turpis blandit scelerisque.</p>
<p>Etiam in blandit tellus. Integer sed varius quam. Vestibulum dapibus mi gravida arcu viverra blandit. Praesent tristique augue id sem adipiscing pellentesque. Sed sollicitudin, leo sed interdum elementum, nisi ante condimentum leo, eget ornare libero diam semper quam. Vivamus augue urna, porta eget ultrices et, dapibus ut ligula. Ut laoreet consequat faucibus. Praesent at lectus ut lectus malesuada mollis. Nam interdum adipiscing eros, nec sodales mi porta nec. Proin et quam vitae sem interdum aliquet. Proin vel odio at lacus vehicula aliquet.</p>
<p>Etiam placerat dui ut sem ornare vel vestibulum augue mattis. Sed semper malesuada mi, eu bibendum lacus lobortis nec. Etiam fringilla elementum risus, eget consequat urna laoreet nec. Etiam mollis quam non sem convallis vel consectetur lectus ullamcorper. Aenean mattis lacus quis ligula mattis eget vestibulum diam hendrerit. In non placerat mauris. Praesent faucibus nunc quis eros sagittis viverra. In hac habitasse platea dictumst. Suspendisse eget nisl erat, ac molestie massa. Praesent mollis vestibulum tincidunt. Fusce suscipit laoreet malesuada. Aliquam erat volutpat. Aliquam dictum elementum rhoncus. Praesent in est massa, pulvinar sodales nunc. Pellentesque gravida euismod mi ac convallis.</p>
<p>Mauris vel odio vel nulla facilisis lacinia. Aliquam ultrices est at leo blandit tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse porttitor adipiscing facilisis. Duis cursus quam iaculis augue interdum porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis vulputate magna ac metus pretium condimentum. In tempus, est eget vestibulum blandit, velit massa dignissim nisl, ut scelerisque lorem neque vel velit. Maecenas fermentum commodo viverra. Curabitur a nibh non velit aliquam cursus. Integer semper condimentum tortor a pellentesque. Pellentesque semper, nisl id porttitor vehicula, sem dui feugiat lacus, vitae consequat augue urna vel odio.</p>
<p>Vestibulum id neque nec turpis iaculis pulvinar et a massa. Vestibulum sed nibh vitae arcu eleifend egestas. Mauris fermentum ultrices blandit. Suspendisse vitae lorem libero. Aenean et pellentesque tellus. Morbi quis neque orci, eu dignissim dui. Fusce sollicitudin mauris ac arcu vestibulum imperdiet. Proin ultricies nisl sit amet enim imperdiet eu ornare dui tempus. Maecenas lobortis nisi a tortor vestibulum vel eleifend tellus vestibulum. Donec metus sapien, hendrerit a fermentum id, dictum quis libero.</p>
<p>Pellentesque a lorem nulla, in tempor justo. Duis odio nisl, dignissim sed consequat sit amet, hendrerit ac neque. Nunc ac augue nec massa tempor rhoncus. Nam feugiat, tellus a varius euismod, justo nisl faucibus velit, ut vulputate justo massa eu nibh. Sed bibendum urna quis magna facilisis in accumsan dolor malesuada. Morbi sit amet nunc risus, in faucibus sem. Nullam sollicitudin magna sed sem mollis id commodo libero condimentum. Duis eu massa et lacus semper molestie ut adipiscing sem.</p>
<p>Sed id nulla mi, eget suscipit eros. Aliquam tempus molestie rutrum. In quis varius elit. Nullam dignissim neque nec velit vulputate porttitor. Mauris ac ligula sit amet elit fermentum rhoncus. In tellus urna, pulvinar quis condimentum ut, porta nec justo. In hac habitasse platea dictumst. Proin volutpat elit id quam molestie ac commodo lacus sagittis. Quisque placerat, augue tempor placerat pulvinar, nisi nisi venenatis urna, eget convallis eros velit quis magna. Suspendisse volutpat iaculis quam, ut tristique lacus luctus quis.</p>
<p>Nullam commodo suscipit lacus non aliquet. Phasellus ac nisl lorem, sed facilisis ligula. Nam cursus lobortis placerat. Sed dui nisi, elementum eu sodales ac, placerat sit amet mauris. Pellentesque dapibus tellus ut ipsum aliquam eu auctor dui vehicula. Quisque ultrices laoreet erat, at ultrices tortor sodales non. Sed venenatis luctus magna, ultricies ultricies nunc fringilla eget. Praesent scelerisque urna vitae nibh tristique varius consequat neque luctus. Integer ornare, erat a porta tempus, velit justo fermentum elit, a fermentum metus nisi eu ipsum. Vivamus eget augue vel dui viverra adipiscing congue ut massa. Praesent vitae eros erat, pulvinar laoreet magna. Maecenas vestibulum mollis nunc in posuere. Pellentesque sit amet metus a turpis lobortis tempor eu vel tortor. Cras sodales eleifend interdum.</p>
</body>
</html>
```

> **备注：** The function `showNode` is also an example of the use of the [`for`](/zh-CN/JavaScript/Reference/Statements/for) cycle without a `statement`section. In this case **a semicolon is always put immediately after the declaration of the cycle**.

下面代码做同样的事，但是页面滚动带有动画效果：

```js
var showBookmark = (function () {
  var  _useHash, _scrollX, _scrollY, _nodeX, _nodeY, _itFrame, _scrollId = -1, _bookMark,
       /*
       * nDuration: the duration in milliseconds of each frame
       * nFrames: number of frames for each scroll
       */
       nDuration = 200, nFrames = 10;

  function _next () {
    if (_itFrame > nFrames) { clearInterval(_scrollId); _scrollId = -1; return; }
    _isBot = true;
    document.documentElement.scrollTop = Math.round(_scrollY + (_nodeY - _scrollY) * _itFrame / nFrames);
    document.documentElement.scrollLeft = Math.round(_scrollX + (_nodeX - _scrollX) * _itFrame / nFrames);
    if (_useHash && _itFrame === nFrames) { location.hash = _bookMark; }
    _itFrame++;
  }

  function _chkOwner () {
    if (_isBot) { _isBot = false; return; }
    if (_scrollId > -1) { clearInterval(_scrollId); _scrollId = -1; }
  }

  if (window.addEventListener) { window.addEventListener("scroll", _chkOwner, false); }
  else if (window.attachEvent) { window.attachEvent("onscroll", _chkOwner); }

  return function (sBookmark, bUseHash) {
    _scrollY = document.documentElement.scrollTop;
    _scrollX = document.documentElement.scrollLeft;
    _bookMark = sBookmark;
    _useHash = arguments.length === 1 || bUseHash;
    for (
      var nLeft = 0, nTop = 0, oNode = document.querySelector(sBookmark);
      oNode;
      nLeft += oNode.offsetLeft, nTop += oNode.offsetTop, oNode = oNode.offsetParent
    );
    _nodeX = nLeft, _nodeY = nTop, _itFrame = 1;
    if (_scrollId === -1) { _scrollId = setInterval(_next, Math.round(nDuration / nFrames)); }
  };
})();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The interface of the returned value, {{domxref("Location")}}.
- A similar information, but attached to the browsing context, {{domxref("Document.location")}}
- [Manipulating the browser history](/zh-CN/DOM/Manipulating_the_browser_history)
- [hashchange](/zh-CN/docs/DOM/Mozilla_event_reference/hashchange)
