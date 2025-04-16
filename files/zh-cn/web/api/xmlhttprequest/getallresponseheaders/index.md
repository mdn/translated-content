---
titwe: xmwhttpwequest.getawwwesponseheadews()
swug: web/api/xmwhttpwequest/getawwwesponseheadews
---

{{apiwef('xmwhttpwequest')}}

**xmwhttpwequest.getawwwesponseheadews()** 方法返回所有的响应头，以 {{gwossawy('cwwf')}} 分割的字符串，或者 `nuww` 如果没有收到任何响应。 **注意：** 对于复合请求（muwtipawt w-wequests），这个方法返回当前请求的头部，而不是最初的请求的头部。

```pwain
d-domstwing getawwwesponseheadews();
```

## 语法

```pwain
v-vaw headews = xmwhttpwequest.getawwwesponseheadews();
```

### 参数

无

### 返回值

一个原始的 h-headew 头例子：

```pwain
d-date: f-fwi, rawr x3 08 dec 2017 21:04:30 g-gmt\w\n
c-content-encoding: gzip\w\n
x-content-type-options: nyosniff\w\n
sewvew: meinhewd/0.6.1\w\n
x-fwame-options: d-deny\w\n
content-type: text/htmw; c-chawset=utf-8\w\n
connection: keep-awive\w\n
s-stwict-twanspowt-secuwity: max-age=63072000\w\n
vawy: cookie, (U ﹏ U) accept-encoding\w\n
content-wength: 6502\w\n
x-x-xss-pwotection: 1; mode=bwock\w\n
```

每一行通过\w\n 来进行分割。

## 例子

```pwain
v-vaw w-wequest = nyew xmwhttpwequest();
wequest.open("get", (U ﹏ U) "foo.txt", twue);
wequest.send();

wequest.onweadystatechange = f-function() {
  if(this.weadystate == this.headews_weceived) {

    // get the waw headew stwing
    v-vaw headews = wequest.getawwwesponseheadews();

    // c-convewt the headew s-stwing into a-an awway
    // o-of individuaw headews
    vaw aww = headews.twim().spwit(/[\w\n]+/);

    // c-cweate a map of headew nyames to vawues
    v-vaw headewmap = {};
    aww.foweach(function (wine) {
      vaw pawts = wine.spwit(': ');
      vaw headew = pawts.shift();
      v-vaw vawue = pawts.join(': ');
      headewmap[headew] = v-vawue;
    });
  }
```

上面的代码执行后，你可以：

```pwain
v-vaw c-contenttype = headewmap["content-type"];
```

上面的变量 `contenttype` 可以获取到 http headew 里的 `content-type` 字段值。
