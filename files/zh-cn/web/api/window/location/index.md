---
title: Window：location 属性
short-title: location
slug: Web/API/Window/location
---

{{APIRef}}

**`Window.location`** 只读属性返回一个 {{domxref("Location")}} 对象，其中包含有关文档当前位置的信息。

尽管 `Window.location` 是一个*只读* `Location` 对象，你仍然可以将字符串赋值给它。这意味着可以在大多数情况下像字符串一样处理 `location`——`location = 'http://www.example.com'`——与 `location.href = 'http://www.example.com'` 等价。

参见 {{domxref("Location")}} 的文档以查看所有可能的属性值。

## 值

一个 {{domxref("Location")}} 对象。

## 示例

### 简单示例

```js
alert(location);
// 弹出“https://developer.mozilla.org/zh-CN/docs/Web/API/window.location”
```

### 示例 1：导航到一个新页面

只要赋给 location 对象一个新值，文档就会使用新的 URL 加载，就好像使用修改后的 URL 调用了 `location.assign()` 一样。

请注意，[与导航相关的沙箱标志](https://html.spec.whatwg.org/multipage/browsers.html#allowed-to-navigate)可能会导致抛出异常和导航失败。

```js
location.assign("https://www.mozilla.org"); // 或
location = "https://www.mozilla.org";
```

### 示例 2：重新加载当前页面

```js
location.reload();
```

### 示例 3

考虑下面的示例，该例使用 [`replace()`](/zh-CN/docs/Web/API/Location/replace) 方法重新加载页面，并将 `location.pathname` 的值插入到 hash：

```js
function reloadPageWithHash() {
  location.replace(`https://example.com/#${location.pathname}`);
}
```

### 示例 4：弹出警告框，显示当前 URL 的属性：

```js
function showLoc() {
  const logLines = [
    "属性（类型）值",
    `location (${typeof location})：${location}`,
  ];
  for (const prop in location) {
    logLines.push(
      `${prop} (${typeof location[prop]})：${location[prop] || "n/a"}`,
    );
  }
  alert(logLines.join("\n"));
}

// HTML 代码形式：<button onclick="showLoc();">显示 location 属性</button>
```

### 示例 5：通过修改 `search` 属性向服务器发送字符串数据：

```js
function sendData(data) {
  location.search = data;
}

// HTML 代码形式：<button onclick="sendData('一些数据');">发送数据</button>
```

当前 URL 将带上“?Some%20data”发送到服务端（如果服务端不处理，则使用修改后的查询字符串重新加载当前文档）。

### 示例 6：不改变 `hash` 属性情况下使用书签

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>MDN 示例</title>
    <script>
      function showNode(node) {
        document.documentElement.scrollTop = node.offsetTop;
        document.documentElement.scrollLeft = node.offsetLeft;
      }

      function showBookmark(bookmark, useHash) {
        if (arguments.length === 1 || useHash) {
          location.hash = bookmark;
          return;
        }
        const bookmarkElement = document.querySelector(bookmark);
        if (bookmarkElement) {
          showNode(bookmarkElement);
        }
      }
    </script>
    <style>
      span.intLink {
        cursor: pointer;
        color: #0000ff;
        text-decoration: underline;
      }
    </style>
  </head>

  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices
      dolor ac dolor imperdiet ullamcorper. Suspendisse quam libero, luctus
      auctor mollis sed, malesuada condimentum magna. Quisque in ante tellus, in
      placerat est. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Donec a mi magna, quis mattis dolor.
      Etiam sit amet ligula quis urna auctor imperdiet nec faucibus ante. Mauris
      vel consectetur dolor. Nunc eget elit eget velit pulvinar fringilla
      consectetur aliquam purus. Curabitur convallis, justo posuere porta
      egestas, velit erat ornare tortor, non viverra justo diam eget arcu.
      Phasellus adipiscing fermentum nibh ac commodo. Nam turpis nunc, suscipit
      a hendrerit vitae, volutpat non ipsum.
    </p>
    <p>
      Duis lobortis sapien quis nisl luctus porttitor. In tempor semper libero,
      eu tincidunt dolor eleifend sit amet. Ut nec velit in dolor tincidunt
      rhoncus non non diam. Morbi auctor ornare orci, non euismod felis gravida
      nec. Curabitur elementum nisi a eros rutrum nec blandit diam placerat.
      Aenean tincidunt risus ut nisi consectetur cursus. Ut vitae quam elit.
      Donec dignissim est in quam tempor consequat. Aliquam aliquam diam non
      felis convallis suscipit. Nulla facilisi. Donec lacus risus, dignissim et
      fringilla et, egestas vel eros. Duis malesuada accumsan dui, at fringilla
      mauris bibendum quis. Cras adipiscing ultricies fermentum. Praesent
      bibendum condimentum feugiat.
    </p>
    <p id="myBookmark1">
      [&nbsp;<span class="intLink" onclick="showBookmark('#myBookmark2');"
        >前往 2 号书签</span
      >&nbsp;]
    </p>
    <p>
      Vivamus blandit massa ut metus mattis in fringilla lectus imperdiet. Proin
      ac ante a felis ornare vehicula. Fusce pellentesque lacus vitae eros
      convallis ut mollis magna pellentesque. Pellentesque placerat enim at
      lacus ultricies vitae facilisis nisi fringilla. In tincidunt tincidunt
      tincidunt. Nulla vitae tempor nisl. Etiam congue, elit vitae egestas
      mollis, ipsum nisi malesuada turpis, a volutpat arcu arcu id risus.
    </p>
    <p>
      Nam faucibus, ligula eu fringilla pulvinar, lectus tellus iaculis nunc,
      vitae scelerisque metus leo non metus. Proin mattis lobortis lobortis.
      Quisque accumsan faucibus erat, vel varius tortor ultricies ac. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero nunc.
      Nullam tortor nunc, elementum a consectetur et, ultrices eu orci. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisl eu
      sem vehicula egestas.
    </p>
    <p>
      Aenean viverra varius mauris, sed elementum lacus interdum non. Phasellus
      sit amet lectus vitae eros egestas pellentesque fermentum eget magna.
      Quisque mauris nisl, gravida vitae placerat et, condimentum id metus.
      Nulla eu est dictum dolor pulvinar volutpat. Pellentesque vitae
      sollicitudin nunc. Donec neque magna, lobortis id egestas nec, sodales
      quis lectus. Fusce cursus sollicitudin porta. Suspendisse ut tortor in
      mauris tincidunt rhoncus. Maecenas tincidunt fermentum facilisis.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas.
    </p>
    <p>
      Suspendisse turpis nisl, consectetur in lacinia ut, ornare vel mi. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Proin non lectus eu
      turpis vulputate cursus. Mauris interdum tincidunt erat id pharetra.
      Nullam in libero elit, sed consequat lectus. Morbi odio nisi, porta vitae
      molestie ut, gravida ut nunc. Ut non est dui, id ullamcorper orci.
      Praesent vel elementum felis. Maecenas ornare, dui quis auctor hendrerit,
      turpis sem ullamcorper odio, in auctor magna metus quis leo. Morbi at odio
      ante.
    </p>
    <p>
      Curabitur est ipsum, porta ac viverra faucibus, eleifend sed eros. In sit
      amet vehicula tortor. Vestibulum viverra pellentesque erat a elementum.
      Integer commodo ultricies lorem, eget tincidunt risus viverra et. In enim
      turpis, porttitor ac ornare et, suscipit sit amet nisl. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
      Pellentesque vel ultrices nibh. Sed commodo aliquam aliquam. Nulla
      euismod, odio ut eleifend mollis, nisi dui gravida nibh, vitae laoreet
      turpis purus id ipsum. Donec convallis, velit non scelerisque bibendum,
      diam nulla auctor nunc, vel dictum risus ipsum sit amet est. Praesent ut
      nibh sit amet nibh congue pulvinar. Suspendisse dictum porttitor tempor.
    </p>
    <p>
      Vestibulum dignissim erat vitae lectus auctor ac bibendum eros semper.
      Integer aliquet, leo non ornare faucibus, risus arcu tristique dolor, a
      aliquet massa mauris quis arcu. In porttitor, lectus ac semper egestas,
      ligula magna laoreet libero, eu commodo mauris odio id ante. In hac
      habitasse platea dictumst. In pretium erat diam, nec consequat eros.
      Praesent augue mi, consequat sed porttitor at, volutpat vitae eros. Sed
      pretium pharetra dapibus. Donec auctor interdum erat, lacinia molestie
      nibh commodo ut. Maecenas vestibulum vulputate felis, ut ullamcorper arcu
      faucibus in. Curabitur id arcu est. In semper mollis lorem at
      pellentesque. Sed lectus nisl, vestibulum id scelerisque eu, feugiat et
      tortor. Pellentesque porttitor facilisis ultricies.
    </p>
    <p id="myBookmark2">
      [&nbsp;<span class="intLink" onclick="showBookmark('#myBookmark1');"
        >前往 1 号书签</span
      >
      |
      <span class="intLink" onclick="showBookmark('#myBookmark1', false);"
        >不使用 location.hash 前往 1 号书签</span
      >
      |
      <span class="intLink" onclick="showBookmark('#myBookmark3');"
        >前往 3 号书签</span
      >&nbsp;]
    </p>
    </p>
    <p>
      Fusce cursus pulvinar aliquam. Duis justo enim, ornare vitae elementum
      sed, porta a quam. Aliquam eu enim eu libero mollis tempus. Morbi ornare
      aliquam posuere. Proin faucibus luctus libero, sed ultrices lorem sagittis
      et. Vestibulum malesuada, ante nec molestie vehicula, quam diam mollis
      ipsum, rhoncus posuere mauris lectus in eros. Nullam feugiat ultrices
      augue, ac sodales sem mollis in.
    </p>
    <p id="myBookmark3"><em>Here is the bookmark #3</em></p>
    <p>
      Proin vitae sem non lorem pellentesque molestie. Nam tempus massa et
      turpis placerat sit amet sollicitudin orci sodales. Pellentesque enim
      enim, sagittis a lobortis ut, tempus sed arcu. Aliquam augue turpis,
      varius vel bibendum ut, aliquam at diam. Nam lobortis, dui eu hendrerit
      pellentesque, sem neque porttitor erat, non dapibus velit lectus in metus.
      Vestibulum sit amet felis enim. In quis est vitae nunc malesuada consequat
      nec nec sapien. Suspendisse aliquam massa placerat dui lacinia luctus sed
      vitae risus. Fusce tempus, neque id ultrices volutpat, mi urna auctor
      arcu, viverra semper libero sem vel enim. Mauris dictum, elit non placerat
      malesuada, libero elit euismod nibh, nec posuere massa arcu eu risus.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna
      velit, dapibus eget varius feugiat, pellentesque sit amet ligula. Maecenas
      nulla nisl, facilisis eu egestas scelerisque, mollis eget metus.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Morbi sed congue mi.
    </p>
    <p>
      Fusce metus velit, pharetra at vestibulum nec, facilisis porttitor mi.
      Curabitur ligula sapien, fermentum vel porttitor id, rutrum sit amet
      magna. Sed sit amet sollicitudin turpis. Aenean luctus rhoncus dolor, et
      pulvinar ante egestas et. Donec ac massa orci, quis dapibus augue. Vivamus
      consectetur auctor pellentesque. Praesent vestibulum tincidunt ante sed
      consectetur. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Fusce purus metus, imperdiet vitae iaculis
      convallis, bibendum vitae turpis.
    </p>
    <p>
      Fusce aliquet molestie dolor, in ornare dui sodales nec. In molestie
      sollicitudin felis a porta. Mauris nec orci sit amet orci blandit
      tristique congue nec nunc. Praesent et tellus sollicitudin mauris accumsan
      fringilla. Morbi sodales, justo eu sollicitudin lacinia, lectus sapien
      ullamcorper eros, quis molestie urna elit bibendum risus. Proin eget
      tincidunt quam. Nam luctus commodo mauris, eu posuere nunc luctus non.
      Nulla facilisi. Vivamus eget leo rhoncus quam accumsan fringilla. Aliquam
      sit amet lorem est. Nullam vel tellus nibh, id imperdiet orci. Integer
      egestas leo eu turpis blandit scelerisque.
    </p>
    <p>
      Etiam in blandit tellus. Integer sed varius quam. Vestibulum dapibus mi
      gravida arcu viverra blandit. Praesent tristique augue id sem adipiscing
      pellentesque. Sed sollicitudin, leo sed interdum elementum, nisi ante
      condimentum leo, eget ornare libero diam semper quam. Vivamus augue urna,
      porta eget ultrices et, dapibus ut ligula. Ut laoreet consequat faucibus.
      Praesent at lectus ut lectus malesuada mollis. Nam interdum adipiscing
      eros, nec sodales mi porta nec. Proin et quam vitae sem interdum aliquet.
      Proin vel odio at lacus vehicula aliquet.
    </p>
    <p>
      Etiam placerat dui ut sem ornare vel vestibulum augue mattis. Sed semper
      malesuada mi, eu bibendum lacus lobortis nec. Etiam fringilla elementum
      risus, eget consequat urna laoreet nec. Etiam mollis quam non sem
      convallis vel consectetur lectus ullamcorper. Aenean mattis lacus quis
      ligula mattis eget vestibulum diam hendrerit. In non placerat mauris.
      Praesent faucibus nunc quis eros sagittis viverra. In hac habitasse platea
      dictumst. Suspendisse eget nisl erat, ac molestie massa. Praesent mollis
      vestibulum tincidunt. Fusce suscipit laoreet malesuada. Aliquam erat
      volutpat. Aliquam dictum elementum rhoncus. Praesent in est massa,
      pulvinar sodales nunc. Pellentesque gravida euismod mi ac convallis.
    </p>
    <p>
      Mauris vel odio vel nulla facilisis lacinia. Aliquam ultrices est at leo
      blandit tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia Curae; Suspendisse porttitor adipiscing
      facilisis. Duis cursus quam iaculis augue interdum porttitor. Vestibulum
      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      Curae; Duis vulputate magna ac metus pretium condimentum. In tempus, est
      eget vestibulum blandit, velit massa dignissim nisl, ut scelerisque lorem
      neque vel velit. Maecenas fermentum commodo viverra. Curabitur a nibh non
      velit aliquam cursus. Integer semper condimentum tortor a pellentesque.
      Pellentesque semper, nisl id porttitor vehicula, sem dui feugiat lacus,
      vitae consequat augue urna vel odio.
    </p>
    <p>
      Vestibulum id neque nec turpis iaculis pulvinar et a massa. Vestibulum sed
      nibh vitae arcu eleifend egestas. Mauris fermentum ultrices blandit.
      Suspendisse vitae lorem libero. Aenean et pellentesque tellus. Morbi quis
      neque orci, eu dignissim dui. Fusce sollicitudin mauris ac arcu vestibulum
      imperdiet. Proin ultricies nisl sit amet enim imperdiet eu ornare dui
      tempus. Maecenas lobortis nisi a tortor vestibulum vel eleifend tellus
      vestibulum. Donec metus sapien, hendrerit a fermentum id, dictum quis
      libero.
    </p>
    <p>
      Pellentesque a lorem nulla, in tempor justo. Duis odio nisl, dignissim sed
      consequat sit amet, hendrerit ac neque. Nunc ac augue nec massa tempor
      rhoncus. Nam feugiat, tellus a varius euismod, justo nisl faucibus velit,
      ut vulputate justo massa eu nibh. Sed bibendum urna quis magna facilisis
      in accumsan dolor malesuada. Morbi sit amet nunc risus, in faucibus sem.
      Nullam sollicitudin magna sed sem mollis id commodo libero condimentum.
      Duis eu massa et lacus semper molestie ut adipiscing sem.
    </p>
    <p>
      Sed id nulla mi, eget suscipit eros. Aliquam tempus molestie rutrum. In
      quis varius elit. Nullam dignissim neque nec velit vulputate porttitor.
      Mauris ac ligula sit amet elit fermentum rhoncus. In tellus urna, pulvinar
      quis condimentum ut, porta nec justo. In hac habitasse platea dictumst.
      Proin volutpat elit id quam molestie ac commodo lacus sagittis. Quisque
      placerat, augue tempor placerat pulvinar, nisi nisi venenatis urna, eget
      convallis eros velit quis magna. Suspendisse volutpat iaculis quam, ut
      tristique lacus luctus quis.
    </p>
    <p>
      Nullam commodo suscipit lacus non aliquet. Phasellus ac nisl lorem, sed
      facilisis ligula. Nam cursus lobortis placerat. Sed dui nisi, elementum eu
      sodales ac, placerat sit amet mauris. Pellentesque dapibus tellus ut ipsum
      aliquam eu auctor dui vehicula. Quisque ultrices laoreet erat, at ultrices
      tortor sodales non. Sed venenatis luctus magna, ultricies ultricies nunc
      fringilla eget. Praesent scelerisque urna vitae nibh tristique varius
      consequat neque luctus. Integer ornare, erat a porta tempus, velit justo
      fermentum elit, a fermentum metus nisi eu ipsum. Vivamus eget augue vel
      dui viverra adipiscing congue ut massa. Praesent vitae eros erat, pulvinar
      laoreet magna. Maecenas vestibulum mollis nunc in posuere. Pellentesque
      sit amet metus a turpis lobortis tempor eu vel tortor. Cras sodales
      eleifend interdum.
    </p>
  </body>
</html>
```

下面代码做同样的事，但是页面滚动带有动画效果：

```js
const showBookmark = (() => {
  let _useHash;
  let _scrollX;
  let _scrollY;
  let _nodeX;
  let _nodeY;
  let _itFrame;
  let _scrollId = -1;
  let _bookMark;

  // duration：每帧的毫秒数
  // frames：每个滚动下的帧数
  let duration = 200;
  let frames = 10;

  function _next() {
    if (_itFrame > frames) {
      clearInterval(_scrollId);
      _scrollId = -1;
      return;
    }
    _isBot = true;
    document.documentElement.scrollTop = Math.round(
      _scrollY + ((_nodeY - _scrollY) * _itFrame) / frames,
    );
    document.documentElement.scrollLeft = Math.round(
      _scrollX + ((_nodeX - _scrollX) * _itFrame) / frames,
    );
    if (_useHash && _itFrame === frames) {
      location.hash = _bookMark;
    }
    _itFrame++;
  }

  function _chkOwner() {
    if (_isBot) {
      _isBot = false;
      return;
    }
    if (_scrollId > -1) {
      clearInterval(_scrollId);
      _scrollId = -1;
    }
  }

  window.addEventListener("scroll", _chkOwner, false);

  return (bookmark, useHash) => {
    const node = document.querySelector(bookmark);
    _scrollY = document.documentElement.scrollTop;
    _scrollX = document.documentElement.scrollLeft;
    _bookMark = bookmark;
    _useHash = useHash === true;
    _nodeX = node.offsetLeft;
    _nodeY = node.offsetTop;
    _itFrame = 1;
    if (_scrollId === -1) {
      _scrollId = setInterval(_next, Math.round(duration / frames));
    }
  };
})();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 返回值所在的 {{domxref("Location")}} 接口
- 含有相似信息，但在文档对象中的 {{domxref("Document.location")}}。
- [修改浏览器历史记录](/zh-CN/docs/Web/API/History_API)
- {{domxref("Window/hashchange_event", "hashchange")}}
