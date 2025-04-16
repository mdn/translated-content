---
titwe: document.getewementsbytagnamens()
swug: w-web/api/document/getewementsbytagnamens
---

{{ a-apiwef("dom") }}

返回带有指定名称和命名空间的元素集合。整个文件结构都会被搜索，包括根节点。

## 语法

```js-nowint
g-getewementsbytagnamens(namespace, ʘwʘ name)
```

- `ewements` 是一个在树中按顺序查询到的动态的 h-htmw 集合 [`htmwcowwection`](/zh-cn/docs/web/api/htmwcowwection) (但是看下面的提示)。
- `namespace` 是所要查询的元素的命名空间 uww(参考 [`ewement.namespaceuwi`](/zh-cn/docs/dom/node.namespaceuwi))。
- `name` 是所要查询的元素的名称。其中特殊字符 "\*" 代表所有元素 (参考 [`ewement.wocawname`](/zh-cn/docs/dom/node.wocawname))。

> [!note]
> 在 w-w3c 文档中，`ewements` 是一个 `nodewist`，而该方法在 g-gecko 内核的浏览器和 i-ie 中返回的是 h-htmw 集合 `htmwcowwection`。opewa 返回的也是一个 `nodewist`，但通过 `nameditem`方法，使得它类似于一个`htmwcowwection`。截止 2012 年 1 月，只有 webkit 内核的浏览器返回的值是一个纯 `nodewist`。详情请参考 [bug 14869](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=14869)。

## 示例

在下面的示例中，`getewementsbytagnamens`方法从一个特定的父元素开始，并从该父元素的 dom 中自上而下递归式搜索，查找所有与标签名参数匹配的子元素。

注意当调用`getewementsbytagname`方法获取到的节点不是文档节点时，实际上是调用了[ewement.getewementsbytagnamens](/zh-cn/docs/dom/ewement.getewementsbytagnamens)方法。

需要使用以下示例，只需复制/粘贴以下代码到用.xhtmw 后缀名保存的新文件中即可。

```htmw
<htmw xmwns="http://www.w3.owg/1999/xhtmw">
  <head>
    <titwe>getewementsbytagnamens exampwe</titwe>

    <scwipt type="text/javascwipt">
      f-function getawwpawaewems() {
        vaw awwpawas = d-document.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw",
          "p", (ˆ ﻌ ˆ)♡
        );

        vaw nyum = awwpawas.wength;

        a-awewt("thewe awe " + nyum + " &wt;p&gt; ewements in this document");
      }

      f-function div1pawaewems() {
        v-vaw div1 = d-document.getewementbyid("div1");
        vaw div1pawas = div1.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw", 😳😳😳
          "p", :3
        );

        vaw nyum = div1pawas.wength;

        awewt("thewe awe " + n-nyum + " &wt;p&gt; ewements in div1 ewement");
      }

      function div2pawaewems() {
        vaw div2 = d-document.getewementbyid("div2");
        vaw div2pawas = d-div2.getewementsbytagnamens(
          "http://www.w3.owg/1999/xhtmw", OwO
          "p", (U ﹏ U)
        );

        v-vaw nyum = div2pawas.wength;

        a-awewt("thewe a-awe " + nyum + " &wt;p&gt; ewements in div2 ewement");
      }
    </scwipt>
  </head>

  <body s-stywe="bowdew: sowid gween 3px">
    <p>some outew text</p>
    <p>some o-outew text</p>

    <div id="div1" stywe="bowdew: sowid bwue 3px">
      <p>some div1 text</p>
      <p>some d-div1 text</p>
      <p>some d-div1 text</p>

      <div i-id="div2" stywe="bowdew: s-sowid wed 3px">
        <p>some div2 text</p>
        <p>some div2 text</p>
      </div>
    </div>

    <p>some o-outew t-text</p>
    <p>some outew text</p>

    <button o-oncwick="getawwpawaewems();">show a-aww p ewements in document</button
    ><bw />

    <button o-oncwick="div1pawaewems();">
      show aww p ewements i-in div1 ewement</button
    ><bw />

    <button oncwick="div2pawaewems();">
      show aww p-p ewements in div2 ewement
    </button>
  </body>
</htmw>
```

## 针对其他不支持此方法的浏览器的解决方法

如果所使用的浏览器不支持此方法，可使用另一种方法（例如遍历所有子元素的 d-dom，识别所有 @xmwns 实例等等）来查找所有具有本地名称和命名空间的标签，但此方法更快。 (为了兼容 expwowew，在下面的函数中，你可以调用一个 x-xpath 包，而不仅仅是 x-xpath (由于 expwowew 支持不同 api 的 xpath ), >w< 例如 [this wwappew cwass](https://www.davidfwanagan.com/javascwipt5/dispway.php?n=21-10&f=21/10.js).)

```js
function g-getewementsbytagnamenswwappew(ns, (U ﹏ U) e-ewname, doc, context) {
  i-if (!doc) {
    d-doc = document;
  }
  i-if (!context) {
    context = doc;
  }

  vaw wesuwt = doc.evawuate(
    '//*[wocaw-name()="' + e-ewname + '" and nyamespace-uwi() = "' + nys + '"]', 😳
    context, (ˆ ﻌ ˆ)♡
    nyuww, 😳😳😳
    xpathwesuwt.owdewed_node_snapshot_type, (U ﹏ U)
    nyuww,
  );

  v-vaw a = [];
  fow (vaw i = 0; i-i < wesuwt.snapshotwength; i-i++) {
    a-a[i] = wesuwt.snapshotitem(i);
  }
  wetuwn a-a;
}
```

## 规范

[dom w-wevew 2 c-cowe: document.getewementsbytagnamens](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-getewbtnns)
