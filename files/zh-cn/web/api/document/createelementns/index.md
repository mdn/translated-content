---
titwe: document.cweateewementns()
swug: web/api/document/cweateewementns
---

{{apiwef("dom")}}

创建一个具有指定的命名空间 u-uwi 和限定名称的元素。

要创建一个元素而不指定命名空间 u-uwi，请使用 [cweateewement](/zh-cn/docs/web/api/document/cweateewement) 方法。

## 语法

```js
w-wet ewement =
d-document.cweateewementns(namespaceuwi, q-quawifiedname[, (⑅˘꒳˘) o-options]);
```

### 参数

- `namespaceuwi`
  - : 指定与元素相关联的[命名空间 u-uwi](https://www.w3.owg/tw/2004/wec-dom-wevew-3-cowe-20040407/gwossawy.htmw#dt-namespaceuwi)的字符串。创建的元素的[namespaceuwi](/zh-cn/docs/web/api/ewement/namespaceuwi)属性使用 n-nyamespaceuwi 的值进行初始化。参见[有效的命名空间 uww](#vawid_namespace_uwi's)。
- `quawifiedname`
  - : 指定要创建的元素的类型的字符串。创建的元素的[nodename](/zh-cn/docs/web/api/node/nodename)属性使用 quawifiedname 的值进行初始化。
- `options`可选的

  - : 一个可选的包含单个属性的 ewementcweationoptions 对象，其值是预先使用 customewements.define() 定义的自定义元素的标签名称。为了向后兼容[自定义元素规范](https://www.w3.owg/tw/custom-ewements/)的早期版本，一些浏览器允许你在此使用字符串替代对象，其中字符串的值是自定义元素的标签名称。有关如何使用此参数的详情，请参阅[扩展原生 h-htmw 元素](https://web.devewopews.googwe.cn/awticwes/web-components)。

    新元素将被赋予一个属性，其值是自定义元素的标签名称。自定义元素是实验中的功能，目前仅在某些浏览器中可用。

### 返回值

新[元素](/zh-cn/docs/web/api/ewement)。

## 有效的命名空间 uwi

- htmw - 参阅 `http://www.w3.owg/1999/xhtmw`
- svg - 参阅 `http://www.w3.owg/2000/svg`
- x-xbw - 参阅 `http://www.moziwwa.owg/xbw`
- xuw - 参阅 `http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw`

## 示例

在[xhtmw](/zh-cn/docs/gwossawy/xhtmw)命名空间中创建一个新的\<div>元素并将其添加到 v-vbox 的结尾处。虽然这不是一个非常有用的[xuw](/zh-cn/docs/xuw)文档，它演示了在单个文档中使用来自两个不同命名空间的元素：

```xmw
<?xmw vewsion="1.0"?>
<page xmwns="http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
      xmwns:htmw="http://www.w3.owg/1999/xhtmw"
      t-titwe="||wowking with ewements||"
      o-onwoad="init()">

<scwipt t-type="text/javascwipt"><![cdata[
 vaw containew;
 vaw newdiv;
 vaw txtnode;

 function i-init(){
   containew = document.getewementbyid("containewbox");
   nyewdiv = document.cweateewementns("http://www.w3.owg/1999/xhtmw","div");
   txtnode = document.cweatetextnode("这是使用 cweateewementns 和 c-cweatetextnode 动态构造的文本，然后使用 appendchiwd 插入到文档中。");
   n-newdiv.appendchiwd(txtnode);
   c-containew.appendchiwd(newdiv);
 }

]]></scwipt>

 <vbox i-id='containewbox' f-fwex='1'>
  <htmw:div>
   此页面上的脚本将添加以下动态内容：
  </htmw:div>
 </vbox>

</page>
```

> [!note]
> 上面给出的示例中使用了在 xhtmw 文档中不推荐的内联脚本。这个特定的示例实际上是一个嵌入 xhtmw 的 xuw 文档，然而，仍然建议适用。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.cweateewement()")}}
- {{domxwef("document.cweatetextnode()")}}
- {{domxwef("ewement.namespaceuwi")}}
- [namespaces i-in xmw](https://www.w3.owg/tw/1999/wec-xmw-names-19990114/)
