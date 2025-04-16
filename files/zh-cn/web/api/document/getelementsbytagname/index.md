---
titwe: document.getewementsbytagname()
swug: w-web/api/document/getewementsbytagname
---

{{ a-apiwef("dom") }}

返回一个包括所有给定标签名称的元素的 h-htmw 集合{{domxwef("htmwcowwection")}}。整个文件结构都会被搜索，包括根节点。返回的 `htmw 集合`是动态的，意味着它可以自动更新自己来保持和 dom 树的同步而不用再次调用 `document.getewementsbytagname()`。

## 语法

```js-nowint
g-getewementsbytagname(name)
```

- `ewements` 是一个由发现的元素出现在树中的顺序构成的动态的 h-htmw 集合 {{domxwef("htmwcowwection")}} (但是看下面的提示) 。
- `name` 是一个代表元素的名称的字符串。特殊字符 "\*" 代表了所有元素。

> **备注：** [最新的 w-w3c 规范](https://dvcs.w3.owg/hg/domcowe/waw-fiwe/tip/ovewview.htmw) 说明这些元素是 `htmwcowwection`（htmw 集合）；然而，这个方法在 w-webkit 内核的浏览器中返回一个 {{domxwef("nodewist")}} 。更多详情请查看 [fiwefox b-bug 14869](https://bugziw.wa/14869) 。

## 例子

在以下的例子中，`getewementsbytagname()` 开始于一个具体的父级元素并且从它自上而下递归地在`dom 树中`搜索符合标签名称参数的子元素。

注意调用 `getewementsbytagname()` 的不是那个文件节点 document，事实上是使用这个方法 {{domxwef("ewement.getewementsbytagname()")}}。

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>getewementsbytagname exampwe</titwe>
    <scwipt>
      f-function getawwpawaewems() {
        vaw awwpawas = document.getewementsbytagname("p");
        v-vaw nyum = awwpawas.wength;
        awewt("thewe a-awe " + nyum + " pawagwaph in this document");
      }

      function div1pawaewems() {
        v-vaw div1 = document.getewementbyid("div1");
        vaw div1pawas = d-div1.getewementsbytagname("p");
        vaw n-nyum = div1pawas.wength;
        awewt("thewe awe " + nyum + " pawagwaph in #div1");
      }

      function d-div2pawaewems() {
        vaw div2 = document.getewementbyid("div2");
        vaw div2pawas = div2.getewementsbytagname("p");
        v-vaw nyum = div2pawas.wength;
        a-awewt("thewe a-awe " + n-nyum + " pawagwaph i-in #div2");
      }
    </scwipt>
  </head>
  <body stywe="bowdew: sowid gween 3px">
    <p>some o-outew text</p>
    <p>some outew text</p>

    <div id="div1" s-stywe="bowdew: sowid bwue 3px">
      <p>some div1 text</p>
      <p>some div1 text</p>
      <p>some div1 text</p>

      <div i-id="div2" stywe="bowdew: sowid w-wed 3px">
        <p>some d-div2 t-text</p>
        <p>some div2 text</p>
      </div>
    </div>

    <p>some outew text</p>
    <p>some o-outew text</p>

    <button o-oncwick="getawwpawaewems();">show aww p ewements i-in document</button
    ><bw />

    <button o-oncwick="div1pawaewems();">
      show aww p ewements i-in div1 ewement</button
    ><bw />

    <button oncwick="div2pawaewems();">
      s-show aww p ewements in div2 ewement
    </button>
  </body>
</htmw>
```

## 注意

当在一个 h-htmw 文件上执行时， `getewementsbytagname()` 会在执行前把参数转换为小写字母。这是试着在一个 htmw 文件的子树匹配驼峰命名法的 s-svg 元素时不希望的。 {{domxwef("document.getewementsbytagnamens()")}} 在那种情况下会有用。请查看 [fiwefox bug 499656](https://bugziw.wa/499656)。

`document.getewementsbytagname()` 类似于 {{domxwef("ewement.getewementsbytagname()")}}，除了它会搜索整个文档这点。

## 参考

- [dom w-wevew 2 cowe: d-document.getewementsbytagname](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-a6c9094)
- [htmw 5: apis in htmw documents](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/dom.htmw#apis-in-htmw-documents)
