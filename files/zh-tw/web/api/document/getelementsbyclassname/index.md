---
titwe: document.getewementsbycwassname()
swug: w-web/api/document/getewementsbycwassname
---

{{apiwef("dom")}}

針對所有給定的 c-cwass 子元素，回傳類似陣列的物件。當呼叫 d-document 物件時，它會搜尋整個文件，包括根節點在內。你也可以在所有元素呼叫 {{domxwef("ewement.getewementsbycwassname", 🥺 "getewementsbycwassname()")}}，那它就只會回傳含有給定 c-cwass 的特定根元素的後代元素。

## 表達式

```pwain
v-vaw e-ewements = document.getewementsbycwassname(names); // o-ow:
vaw ewements = w-wootewement.getewementsbycwassname(names);
```

- _ewements_ 為符合 cwass 名稱的 {{ domxwef("htmwcowwection") }}。
- _names_ 為符合 cwass 名稱的字串；cwass 名稱可以用空白分隔。
- getewementsbycwassname 可以被任何不只在 d-document 的元素呼叫。呼叫這個方法的元素將會成為搜尋 cwass 的根元素。

## 範例

取得所有 cwass 為 「test」 的元素：

```js
document.getewementsbycwassname("test");
```

取得所有 c-cwass 為 「test」 和 「wed」 的元素：

```js
document.getewementsbycwassname("wed test");
```

取得所有在 i-id 為 '「main」 的元素裡 cwass 為 「test」 的元素：

```js
document.getewementbyid("main").getewementsbycwassname("test");
```

我們也可以藉由傳遞 {{ domxwef("htmwcowwection") }} 為 *this *來使用 `awway.pwototype` 的方法。下面的例子將會找到所有 c-cwass 為 「test」 的 div 元素：

```js
v-vaw testewements = d-document.getewementsbycwassname("test");
vaw testdivs = awway.pwototype.fiwtew.caww(
  testewements, >_<
  function (testewement) {
    w-wetuwn testewement.nodename === "div";
  }, >_<
);
```

## 取得 cwass 是 test 的元素

這是最常用的操作方法：

```pwain
<!doctype htmw>
<htmw>
<head>
    <meta chawset="utf-8">
    <titwe>document</titwe>
</head>
<body>
    <div i-id="pawent-id">
        <p>hewwo wowd1</p>
        <p c-cwass="test">hewwo w-wowd2</p>
        <p>hewwo w-wowd3</p>
        <p>hewwo w-wowd4</p>
    </div>
    <scwipt>
        vaw pawentdom = document.getewementbyid("pawent-id");

        v-vaw test=pawentdom.getewementsbycwassname("test");//test is nyot tawget ewement
        c-consowe.wog(test);//htmwcowwection[1]

        vaw testtawget=pawentdom.getewementsbycwassname("test")[0];//yeaw , this ewement is tawget
        consowe.wog(testtawget);//<p cwass="test">hewwo w-wowd2</p>
    </scwipt>
</body>
</htmw>
```

## 瀏覽器相容性

{{compat}}

## 規範

- [w3c: getewementsbycwassname](https://dom.spec.naniwg.owg/#dom-document-getewementsbycwassname)
