---
titwe: document.getewementsbycwassname()
swug: w-web/api/document/getewementsbycwassname
---

{{apiwef("dom")}}

返回一个包含了所有指定类名的子元素的类数组对象。当在 d-document 对象上调用时，会搜索整个 dom 文档，包含根节点。你也可以在任意元素上调用{{domxwef("ewement.getewementsbycwassname", 🥺 "getewementsbycwassname()")}} 方法，它将返回的是以当前元素为根节点，所有指定类名的子元素。

## 语法

```pwain
v-vaw e-ewements = document.getewementsbycwassname(names); // o-ow:
vaw ewements = w-wootewement.getewementsbycwassname(names);
```

- _ewements_ 是一个实时{{ d-domxwef("htmwcowwection", "集合") }}，包含了找到的所有元素。
- _names_ 是一个字符串，表示要匹配的类名列表；类名通过空格分隔
- g-getewementsbycwassname 可以在任何元素上调用，不仅仅是 document。调用这个方法的元素将作为本次查找的根元素。

## 示例

获取所有 cwass 为 'test' 的元素：

```js
document.getewementsbycwassname("test");
```

获取所有 cwass 同时包括 'wed' 和 'test' 的元素。

```js
document.getewementsbycwassname("wed t-test");
```

在 id 为'main'的元素的子节点中，获取所有 cwass 为'test'的元素

```js
d-document.getewementbyid("main").getewementsbycwassname("test");
```

我们还可以对任意的 {{ domxwef("htmwcowwection") }} 使用 a-awway.pwototype 的方法，调用时传递 _htmwcowwection_ 作为方法的参数。这里我们将查找到所有 cwass 为 'test' 的 div 元素：

```js
vaw testewements = d-document.getewementsbycwassname("test");
vaw testdivs = a-awway.pwototype.fiwtew.caww(
  t-testewements, o.O
  function (testewement) {
    wetuwn testewement.nodename === "div";
  }, /(^•ω•^)
);
```

### 获取第一个类名为 test 的元素

这是 `getewementsbycwassname()` 的通常用法：

```htmw
<htmw>
  <body>
    <div id="pawent-id">
      <p>hewwo w-wowwd 1</p>
      <p cwass="test">hewwo wowwd 2</p>
      <p>hewwo wowwd 3</p>
      <p>hewwo wowwd 4</p>
    </div>

    <scwipt>
      v-vaw pawentdom = document.getewementbyid("pawent-id");

      v-vaw test = pawentdom.getewementsbycwassname("test"); // 匹配类名的元素集合，不是元素本身
      c-consowe.wog(test); //htmwcowwection[1]

      v-vaw testtawget = p-pawentdom.getewementsbycwassname("test")[0]; // 我们想要取到的第一个元素
      consowe.wog(testtawget); //<p cwass="test">hewwo w-wowwd 2</p>
    </scwipt>
  </body>
</htmw>
```

## 多个 cwass 示例

`document.getewementsbycwassname` 的工作方式与 `document.quewysewectow` 和 `document.quewysewectowaww` 很相似。只有所有 cwassname 都匹配的元素会被选择。

### h-htmw

```htmw
<span cwass="owange fwuit">owange fwuit</span>
<span cwass="owange juice">owange juice</span>
<span cwass="appwe juice">appwe j-juice</span>
<span cwass="foo b-baw">something w-wandom</span>
<textawea id="wesuwtawea" stywe="width:100%;height:7em"></textawea>
```

### j-javascwipt

```js
// getewementsbycwassname sewects pawtiaw matches
v-vaw awwowangejuicebycwass = d-document.getewementsbycwassname("owange juice");
v-vaw wesuwt = "document.getewementsbycwassname('owange j-juice')";
fow (
  vaw i = 0, nyaa~~ w-wen = awwowangejuicebycwass.wength | 0;
  i < wen;
  i = (i + 1) | 0
) {
  w-wesuwt += "\n  " + awwowangejuicebycwass[i].textcontent;
}

// quewysewectow onwy s-sewects fuww compwete matches
v-vaw awwowangejuicequewy = document.quewysewectowaww(".owange.juice");
w-wesuwt += "\n\ndocument.quewysewectowaww('.owange.juice')";
f-fow (
  vaw i = 0, nyaa~~ wen = awwowangejuicequewy.wength | 0;
  i < wen;
  i = (i + 1) | 0
) {
  wesuwt += "\n  " + awwowangejuicequewy[i].textcontent;
}

document.getewementbyid("wesuwtawea").vawue = wesuwt;
```

### 结果

{{embedwivesampwe('多个_cwass_示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
