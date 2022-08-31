---
title: Mozilla 中的富文本编辑器
slug: orphaned/Web/Guide/HTML/Editable_content/Rich-Text_Editing_in_Mozilla
original_slug: Web/Guide/HTML/Editable_content/Rich-Text_Editing_in_Mozilla
---
Mozilla 1.3 实现了微软 IE 浏览器的 designMode 特性。Mozilla 1.3 的富文本编辑器支持的 designMode 特性能将 HTML 文档转换为富文本编辑器。从 Firefox 3 开始，Mozilla 也支持 IE 的 contentEditable 属性，该属性允许将任意元素设置为可编辑或不可编辑的（后者可阻止在可编辑环境中，对固定元素的改变）。

### 配置富文本编辑

富文本编辑通过设置文档的 "designMode" 属性为 "On" 来初始化。一旦 `designMode` 设置为 "On" ，该文档即成为用户能够按使用 textarea 方式操作的富文本编辑区域。复制和粘贴等最基础的键盘操作可用，而其它命令则需通过站点实现。

类似地，将 "contentEditable" 属性设置为 "true" 后，用户能够将文档中的独立元素设置为可编辑的。

### 执行命令

当 HTML 文档切换至 designMode 时，文档对象将暴露出 "document.execCommand" 方法，允许用户运行命令以操作可编辑区域的内容。多数命令影响文档的选中区域（加粗、斜体等），而其余命令则可插入新元素（添加新行）或影响整行（缩进）。当使用 contentEditable 时，调用 execCommand 将影响当前活跃的可编辑元素。

### 与 IE 区别

Mozilla 与 IE 在 designMode 下的一个显著区别在于可编辑区域中所生成的代码。在 IE 中使用 em 与 i 等 HTML 标签，而 Mozilla 则默认生成带有内联样式规则的 span 标签。可通过 `styleWithCSS` 命令以在 CSS 与 HTML 标记中切换。

**Figure 1 : 生成 HTML 的区别**

Mozilla:

```plain
<span style="font-weight: bold;">I love geckos.</span>
<span style="font-weight: bold; font-style: italic;
    text-decoration: underline;">Dinosaurs are big.</span>
```

Internet Explorer:

```plain
<STRONG>I love geckos.</STRONG>
<STRONG><EM><U>Dinosaurs are big.</U></EM></STRONG>
```

Mozilla 与 IE 的另一个区别是在与 designMode 结合使用的场景中，其访问 iframe 中文档对象的方式。Mozilla 使用了 W3C 的标准方式，即 `IFrameElement.contentDocument，而` IE 则使用了 `IFrameElement.document`.

**_DevEdge_** 提供了一个 JavaScript 辅助工具类，`xbDesignMode，`它封装了 IE 与 Mozilla 之间的 designMode 差异特性。

**禁用事件处理**

另一额外的区别在于，Mozilla 中一旦切换至 designMode，那么该文档上绑定的全部事件将被禁用。在 designMode 关闭后（如在 Mozilla 1.5 中可用），事件重新可用。

在 [Migrate apps from Internet Explorer to Mozilla](https://developer.mozilla.org/en/Migrate_apps_from_Internet_Explorer_to_Mozilla) 中的 [Rich text editing](https://developer.mozilla.org/en/Migrate_apps_from_Internet_Explorer_to_Mozilla#Rich_text_editing) 章节可查看更多信息。

### 示例

#### 示例 1

第一个示例中，将 HTML 文档中的 `designMode` 设置为 "On"。在 Mozilla 1.3 中这将使整篇文档均可编辑。但在 IE 中并不支持通过 JavaScript 改变文档的 `designMode` 特性。需要兼容 IE 时，body 标签中的 `contentEditable` 属性需要设置为 "true"。

**Figure 2 : 第一个示例**

```plain
HTML:
<body contentEditable="true" onload="load()">

JavaScript:
function load(){
  window.document.designMode = "On";
}
```

#### 示例 2

第二个示例是一个支持文本加粗、斜体、下划线，以及添加链接、改变文本颜色等特性的富文本编辑页面。示例页面带有一个作为富文本编辑区域的 iframe 区域，以及用于实现基础编辑命令的加粗、斜体、文本颜色等编辑元素。

**Figure 3 : 配置富文本编辑**

```plain
HTML:
<body onload="load()">

JavaScript:
function load(){
  getIFrameDocument("editorWindow").designMode = "On";
}
//获取对象
function getIFrameDocument(aID){
  // if contentDocument exists, W3C compliant (Mozilla)
  if (document.getElementById(aID).contentDocument){
    return document.getElementById(aID).contentDocument;
  } else {
    // IE
    return document.frames[aID].document;
  }
}
```

该示例包含了 `doRichEditCommand` 函数以简化对 iframe 的命令操作，并保持 HTML 代码的整洁。执行所需命令的函数使用了 `execCommand()` 并将焦点设回可编辑文档，以避免点击按钮等操作时的焦点设置打断编辑流程。

**Figure 4 : 执行富文本编辑命令**

```plain
HTML:
<button onclick="doRichEditCommand('bold')" style="font-weight:bold;">B</button>

JavaScript:
function doRichEditCommand(aName, aArg){
  getIFrameDocument('editorWindow').execCommand(aName,false, aArg);
  document.getElementById('editorWindow').contentWindow.focus()
}
```

### 示例：一个简易但完整的富文本编辑器

```plain
<!doctype html>
<html>
<head>
<title>Rich Text Editor</title>
<script type="text/javascript">
var oDoc, sDefTxt;

function initDoc() {
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
  if (document.compForm.switchMode.checked) { setDocMode(true); }
}

function formatDoc(sCmd, sValue) {
  if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
}

function validateMode() {
  if (!document.compForm.switchMode.checked) { return true ; }
  alert("Uncheck \"Show HTML\".");
  oDoc.focus();
  return false;
}

function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    var oPre = document.createElement("pre");
    oDoc.contentEditable = false;
    oPre.id = "sourceText";
    oPre.contentEditable = true;
    oPre.appendChild(oContent);
    oDoc.appendChild(oPre);
  } else {
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
    }
    oDoc.contentEditable = true;
  }
  oDoc.focus();
}

function printDoc() {
  if (!validateMode()) { return; }
  var oPrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  oPrntWin.document.open();
  oPrntWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + oDoc.innerHTML + "<\/body><\/html>");
  oPrntWin.document.close();
}
</script>
<style type="text/css">
.intLink { cursor: pointer; }
img.intLink { border: 0; }
#toolBar1 select { font-size:10px; }
#textBox {
  width: 540px;
  height: 200px;
  border: 1px #000000 solid;
  padding: 12px;
  overflow: scroll;
}
#textBox #sourceText {
  padding: 0;
  margin: 0;
  min-width: 498px;
  min-height: 200px;
}
#editMode label { cursor: pointer; }
</style>
</head>
<body onload="initDoc();">
<form name="compForm" method="post" action="sample.php" onsubmit="if(validateMode()){this.myDoc.value=oDoc.innerHTML;return true;}return false;">
<input type="hidden" name="myDoc">
<div id="toolBar1">
<select onchange="formatDoc('formatblock',this[this.selectedIndex].value);this.selectedIndex=0;">
<option selected>- formatting -</option>
<option value="h1">Title 1 &lt;h1&gt;</option>
<option value="h2">Title 2 &lt;h2&gt;</option>
<option value="h3">Title 3 &lt;h3&gt;</option>
<option value="h4">Title 4 &lt;h4&gt;</option>
<option value="h5">Title 5 &lt;h5&gt;</option>
<option value="h6">Subtitle &lt;h6&gt;</option>
<option value="p">Paragraph &lt;p&gt;</option>
<option value="pre">Preformatted &lt;pre&gt;</option>
</select>
<select onchange="formatDoc('fontname',this[this.selectedIndex].value);this.selectedIndex=0;">
<option class="heading" selected>- font -</option>
<option>Arial</option>
<option>Arial Black</option>
<option>Courier New</option>
<option>Times New Roman</option>
</select>
<select onchange="formatDoc('fontsize',this[this.selectedIndex].value);this.selectedIndex=0;">
<option class="heading" selected>- size -</option>
<option value="1">Very small</option>
<option value="2">A bit small</option>
<option value="3">Normal</option>
<option value="4">Medium-large</option>
<option value="5">Big</option>
<option value="6">Very big</option>
<option value="7">Maximum</option>
</select>
<select onchange="formatDoc('forecolor',this[this.selectedIndex].value);this.selectedIndex=0;">
<option class="heading" selected>- color -</option>
<option value="red">Red</option>
<option value="blue">Blue</option>
<option value="green">Green</option>
<option value="black">Black</option>
</select>
<select onchange="formatDoc('backcolor',this[this.selectedIndex].value);this.selectedIndex=0;">
<option class="heading" selected>- background -</option>
<option value="red">Red</option>
<option value="green">Green</option>
<option value="black">Black</option>
</select>
</div>
<div id="toolBar2">
<img class="intLink" title="Clean" onclick="if(validateMode()&&confirm('Are you sure?')){oDoc.innerHTML=sDefTxt};" src="data:image/gif;base64,R0lGODlhFgAWAIQbAD04KTRLYzFRjlldZl9vj1dusY14WYODhpWIbbSVFY6O7IOXw5qbms+wUbCztca0ccS4kdDQjdTLtMrL1O3YitHa7OPcsd/f4PfvrvDv8Pv5xv///////////////////yH5BAEKAB8ALAAAAAAWABYAAAV84CeOZGmeaKqubMteyzK547QoBcFWTm/jgsHq4rhMLoxFIehQQSAWR+Z4IAyaJ0kEgtFoLIzLwRE4oCQWrxoTOTAIhMCZ0tVgMBQKZHAYyFEWEV14eQ8IflhnEHmFDQkAiSkQCI2PDC4QBg+OAJc0ewadNCOgo6anqKkoIQA7" />
<img class="intLink" title="Print" onclick="printDoc();" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oEBxcZFmGboiwAAAAIdEVYdENvbW1lbnQA9syWvwAAAuFJREFUOMvtlUtsjFEUx//n3nn0YdpBh1abRpt4LFqtqkc3jRKkNEIsiIRIBBEhJJpKlIVo4m1RRMKKjQiRMJRUqUdKPT71qpIpiRKPaqdF55tv5vvusZjQTjOlseUkd3Xu/3dPzusC/22wtu2wRn+jG5So/OCDh8ycMJDflehMlkJkVK7KUYN+ufzA/RttH76zaVocDptRxzQtNi3mRWuPc+6cKtlXZ/sddP2uu9uXlmYXZ6Qm8v4Tz8lhF1H+zDQXt7S8oLMXtbF4e8QaFHjj3kbP2MzkktHpiTjp9VH6iHiA+whtAsX5brpwueMGdONdf/2A4M7ukDs1JW662+XkqTkeUoqjKtOjm2h53YFL15pSJ04Zc94wdtibr26fXlC2mzRvBccEbz2kiRFD414tKMlEZbVGT33+qCoHgha81SWYsew0r1uzfNylmtpx80pngQQ91LwVk2JGvGnfvZG6YcYRAT16GFtW5kKKfo1EQLtfh5Q2etT0BIWF+aitq4fDbk+ImYo1OxvGF03waFJQvBCkvDffRyEtxQiFFYgAZTHS0zwAGD7fG5TNnYNTp8/FzvGwJOfmgG7GOx0SAKKgQgDMgKBI0NJGMEImpGDk5+WACEwEd0ywblhGUZ4Hw5OdUekRBLT7DTgdEgxACsIznx8zpmWh7k4rkpJcuHDxCul6MDsmmBXDlWCH2+XozSgBnzsNCEE4euYV4pwCpsWYPW0UHDYBKSWu1NYjENDReqtKjwn2+zvtTc1vMSTB/mvev/WEYSlASsLimcOhOBJxw+N3aP/SjefNL5GePZmpu4kG7OPr1+tOfPyUu3BecWYKcwQcDFmwFKAUo90fhKDInBCAmvqnyMgqUEagQwCoHBDc1rjv9pIlD8IbVkz6qYViIBQGTJPx4k0XpIgEZoRN1Da0cij4VfR0ta3WvBXH/rjdCufv6R2zPgPH/e4pxSBCpeatqPrjNiso203/5s/zA171Mv8+w1LOAAAAAElFTkSuQmCC">
<img class="intLink" title="Undo" onclick="formatDoc('undo');" src="data:image/gif;base64,R0lGODlhFgAWAOMKADljwliE33mOrpGjuYKl8aezxqPD+7/I19DV3NHa7P///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARR8MlJq7046807TkaYeJJBnES4EeUJvIGapWYAC0CsocQ7SDlWJkAkCA6ToMYWIARGQF3mRQVIEjkkSVLIbSfEwhdRIH4fh/DZMICe3/C4nBQBADs=" />
<img class="intLink" title="Redo" onclick="formatDoc('redo');" src="data:image/gif;base64,R0lGODlhFgAWAMIHAB1ChDljwl9vj1iE34Kl8aPD+7/I1////yH5BAEKAAcALAAAAAAWABYAAANKeLrc/jDKSesyphi7SiEgsVXZEATDICqBVJjpqWZt9NaEDNbQK1wCQsxlYnxMAImhyDoFAElJasRRvAZVRqqQXUy7Cgx4TC6bswkAOw==" />
<img class="intLink" title="Remove formatting" onclick="formatDoc('removeFormat')" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9oECQMCKPI8CIIAAAAIdEVYdENvbW1lbnQA9syWvwAAAuhJREFUOMtjYBgFxAB501ZWBvVaL2nHnlmk6mXCJbF69zU+Hz/9fB5O1lx+bg45qhl8/fYr5it3XrP/YWTUvvvk3VeqGXz70TvbJy8+Wv39+2/Hz19/mGwjZzuTYjALuoBv9jImaXHeyD3H7kU8fPj2ICML8z92dlbtMzdeiG3fco7J08foH1kurkm3E9iw54YvKwuTuom+LPt/BgbWf3//sf37/1/c02cCG1lB8f//f95DZx74MTMzshhoSm6szrQ/a6Ir/Z2RkfEjBxuLYFpDiDi6Af///2ckaHBp7+7wmavP5n76+P2ClrLIYl8H9W36auJCbCxM4szMTJac7Kza////R3H1w2cfWAgafPbqs5g7D95++/P1B4+ECK8tAwMDw/1H7159+/7r7ZcvPz4fOHbzEwMDwx8GBgaGnNatfHZx8zqrJ+4VJBh5CQEGOySEua/v3n7hXmqI8WUGBgYGL3vVG7fuPK3i5GD9/fja7ZsMDAzMG/Ze52mZeSj4yu1XEq/ff7W5dvfVAS1lsXc4Db7z8C3r8p7Qjf///2dnZGxlqJuyr3rPqQd/Hhyu7oSpYWScylDQsd3kzvnH738wMDzj5GBN1VIWW4c3KDon7VOvm7S3paB9u5qsU5/x5KUnlY+eexQbkLNsErK61+++VnAJcfkyMTIwffj0QwZbJDKjcETs1Y8evyd48toz8y/ffzv//vPP4veffxpX77z6l5JewHPu8MqTDAwMDLzyrjb/mZm0JcT5Lj+89+Ybm6zz95oMh7s4XbygN3Sluq4Mj5K8iKMgP4f0////fv77//8nLy+7MCcXmyYDAwODS9jM9tcvPypd35pne3ljdjvj26+H2dhYpuENikgfvQeXNmSl3tqepxXsqhXPyc666s+fv1fMdKR3TK72zpix8nTc7bdfhfkEeVbC9KhbK/9iYWHiErbu6MWbY/7//8/4//9/pgOnH6jGVazvFDRtq2VgiBIZrUTIBgCk+ivHvuEKwAAAAABJRU5ErkJggg==">
<img class="intLink" title="Bold" onclick="formatDoc('bold');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs=" />
<img class="intLink" title="Italic" onclick="formatDoc('italic');" src="data:image/gif;base64,R0lGODlhFgAWAKEDAAAAAF9vj5WIbf///yH5BAEAAAMALAAAAAAWABYAAAIjnI+py+0Po5x0gXvruEKHrF2BB1YiCWgbMFIYpsbyTNd2UwAAOw==" />
<img class="intLink" title="Underline" onclick="formatDoc('underline');" src="data:image/gif;base64,R0lGODlhFgAWAKECAAAAAF9vj////////yH5BAEAAAIALAAAAAAWABYAAAIrlI+py+0Po5zUgAsEzvEeL4Ea15EiJJ5PSqJmuwKBEKgxVuXWtun+DwxCCgA7" />
<img class="intLink" title="Left align" onclick="formatDoc('justifyleft');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JMGELkGYxo+qzl4nKyXAAAOw==" />
<img class="intLink" title="Center align" onclick="formatDoc('justifycenter');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIfhI+py+0Po5y02ouz3jL4D4JOGI7kaZ5Bqn4sycVbAQA7" />
<img class="intLink" title="Right align" onclick="formatDoc('justifyright');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JQGDLkGYxouqzl43JyVgAAOw==" />
<img class="intLink" title="Numbered list" onclick="formatDoc('insertorderedlist');" src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAADljwliE35GjuaezxtHa7P///////yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKSespwjoRFvggCBUBoTFBeq6QIAysQnRHaEOzyaZ07Lu9lUBnC0UGQU1K52s6n5oEADs=" />
<img class="intLink" title="Dotted list" onclick="formatDoc('insertunorderedlist');" src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAAB1ChF9vj1iE33mOrqezxv///////yH5BAEAAAcALAAAAAAWABYAAAMyeLrc/jDKSesppNhGRlBAKIZRERBbqm6YtnbfMY7lud64UwiuKnigGQliQuWOyKQykgAAOw==" />
<img class="intLink" title="Quote" onclick="formatDoc('formatblock','blockquote');" src="data:image/gif;base64,R0lGODlhFgAWAIQXAC1NqjFRjkBgmT9nqUJnsk9xrFJ7u2R9qmKBt1iGzHmOrm6Sz4OXw3Odz4Cl2ZSnw6KxyqO306K63bG70bTB0rDI3bvI4P///////////////////////////////////yH5BAEKAB8ALAAAAAAWABYAAAVP4CeOZGmeaKqubEs2CekkErvEI1zZuOgYFlakECEZFi0GgTGKEBATFmJAVXweVOoKEQgABB9IQDCmrLpjETrQQlhHjINrTq/b7/i8fp8PAQA7" />
<img class="intLink" title="Add indentation" onclick="formatDoc('outdent');" src="data:image/gif;base64,R0lGODlhFgAWAMIHAAAAADljwliE35GjuaezxtDV3NHa7P///yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKCQG9F2i7u8agQgyK1z2EIBil+TWqEMxhMczsYVJ3e4ahk+sFnAgtxSQDqWw6n5cEADs=" />
<img class="intLink" title="Delete indentation" onclick="formatDoc('indent');" src="data:image/gif;base64,R0lGODlhFgAWAOMIAAAAADljwl9vj1iE35GjuaezxtDV3NHa7P///////////////////////////////yH5BAEAAAgALAAAAAAWABYAAAQ7EMlJq704650B/x8gemMpgugwHJNZXodKsO5oqUOgo5KhBwWESyMQsCRDHu9VOyk5TM9zSpFSr9gsJwIAOw==" />
<img class="intLink" title="Hyperlink" onclick="var sLnk=prompt('Write the URL here','http:\/\/');if(sLnk&&sLnk!=''&&sLnk!='http://'){formatDoc('createlink',sLnk)}" src="data:image/gif;base64,R0lGODlhFgAWAOMKAB1ChDRLY19vj3mOrpGjuaezxrCztb/I19Ha7Pv8/f///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARY8MlJq7046827/2BYIQVhHg9pEgVGIklyDEUBy/RlE4FQF4dCj2AQXAiJQDCWQCAEBwIioEMQBgSAFhDAGghGi9XgHAhMNoSZgJkJei33UESv2+/4vD4TAQA7" />
<img class="intLink" title="Cut" onclick="formatDoc('cut');" src="data:image/gif;base64,R0lGODlhFgAWAIQSAB1ChBFNsRJTySJYwjljwkxwl19vj1dusYODhl6MnHmOrpqbmpGjuaezxrCztcDCxL/I18rL1P///////////////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAVu4CeOZGmeaKqubDs6TNnEbGNApNG0kbGMi5trwcA9GArXh+FAfBAw5UexUDAQESkRsfhJPwaH4YsEGAAJGisRGAQY7UCC9ZAXBB+74LGCRxIEHwAHdWooDgGJcwpxDisQBQRjIgkDCVlfmZqbmiEAOw==" />
<img class="intLink" title="Copy" onclick="formatDoc('copy');" src="data:image/gif;base64,R0lGODlhFgAWAIQcAB1ChBFNsTRLYyJYwjljwl9vj1iE31iGzF6MnHWX9HOdz5GjuYCl2YKl8ZOt4qezxqK63aK/9KPD+7DI3b/I17LM/MrL1MLY9NHa7OPs++bx/Pv8/f///////////////yH5BAEAAB8ALAAAAAAWABYAAAWG4CeOZGmeaKqubOum1SQ/kPVOW749BeVSus2CgrCxHptLBbOQxCSNCCaF1GUqwQbBd0JGJAyGJJiobE+LnCaDcXAaEoxhQACgNw0FQx9kP+wmaRgYFBQNeAoGihCAJQsCkJAKOhgXEw8BLQYciooHf5o7EA+kC40qBKkAAAGrpy+wsbKzIiEAOw==" />
<img class="intLink" title="Paste" onclick="formatDoc('paste');" src="data:image/gif;base64,R0lGODlhFgAWAIQUAD04KTRLY2tXQF9vj414WZWIbXmOrpqbmpGjudClFaezxsa0cb/I1+3YitHa7PrkIPHvbuPs+/fvrvv8/f///////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAWN4CeOZGmeaKqubGsusPvBSyFJjVDs6nJLB0khR4AkBCmfsCGBQAoCwjF5gwquVykSFbwZE+AwIBV0GhFog2EwIDchjwRiQo9E2Fx4XD5R+B0DDAEnBXBhBhN2DgwDAQFjJYVhCQYRfgoIDGiQJAWTCQMRiwwMfgicnVcAAAMOaK+bLAOrtLUyt7i5uiUhADs=" />
</div>
<div id="textBox" contenteditable="true"><p>Lorem ipsum</p></div>
<p id="editMode"><input type="checkbox" name="switchMode" id="switchBox" onchange="setDocMode(this.checked);" /> <label for="switchBox">Show HTML</label></p>
<p><input type="submit" value="Send" /></p>
</form>
</body>
</html>
```

**注意：** 如果你想查看如何将创建与插入编辑器至页面的流程标准化的内容，请查看 [more complete rich-text editor example](https://developer.mozilla.org/@api/deki/files/6243/=rich-text-editor.zip).

### 相关资源

- [mozilla.org's rich-text editing Specification](http://mozilla.org/editor/midas-spec.html)
- [mozilla.org's rich-text editing Demo](http://mozilla.org/editor/midasdemo/)
- [Converting an app using document.designMode from IE to Mozilla at mozilla.org](http://www.mozilla.org/editor/ie2midas.html)
- [`designMode`](/en-US/docs/Web/API/Document/designMode)
- [MSDN: How to Create an HTML Editor Application](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms537834(v=vs.85)>)
- [A closed source, cross-browser rich-text editing demo](http://www.kevinroth.com/rte/demo.htm)
- [xbDesignMode; a JavaScript helper class for easier cross-browser development using designMode.](https://developer.mozilla.org/en/Rich-Text_Editing_in_Mozilla/Class_xbDesignMode)
- [Firefox 3 and contentEditable](http://starkravingfinkle.org/blog/2007/07/firefox-3-contenteditable/)
