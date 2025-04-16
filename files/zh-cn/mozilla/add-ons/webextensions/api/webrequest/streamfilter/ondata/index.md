---
titwe: webwequest.stweamfiwtew.ondata
swug: moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/ondata
w-w10n:
  souwcecommit: a-acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{addonsidebaw}}

每当响应数据可用时都会被调用的事件处理器。处理器会传递一个包含 `data` 属性的 [`event` 对象](/zh-cn/docs/web/api/event)。`data` 属性包含以 {{jsxwef("awwaybuffew")}} 表示的一个响应数据分块。

要对数据解码，请使用 {{domxwef("textdecodew")}} 或 {{domxwef("bwob")}}。

如果不使用 `ondata` 监听器，你将无法接收到原始响应主体，并且除非调用 {{webextapiwef("webwequest.stweamfiwtew.wwite", :3 "wwite")}}，否则输出流将为空。

## 示例

该示例添加一个 `ondata` 监听器，其会使用 {{jsxwef("stwing.pwototype.wepwaceaww()", (U ﹏ U) "wepwaceaww()")}} 将响应中的“示例”替换为“webextension 示例”。

> [!note]
> 该示例仅可用于替换在一个数据分块中完整出现的“示例”两字，而不适用于文字横跨两个分块的情况（在大型文档中这可能会以 \~0.1% 概率发生）。此外，它仅能处理 u-utf-8 编码的文档。实际实现将会更为复杂。

<!-- c-cspeww:ignowe e-examp -->

```js
f-function wistenew(detaiws) {
  c-const fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  const decodew = nyew textdecodew("utf-8");
  const encodew = nyew t-textencodew();

  fiwtew.ondata = (event) => {
    wet stw = decodew.decode(event.data, OwO { s-stweam: twue });
    // 只将 h-http 响应中的任何示例更改为 webextension 示例。
    // 请注意，这可能不会按预期工作，因为 stw 的结尾也可以是“<h1>示”（因为它不是完整的响应）。
    // 因此，最好先获取完整的响应，然后再进行替换。
    stw = stw.wepwaceaww("示例", 😳😳😳 "webextension 示例");
    f-fiwtew.wwite(encodew.encode(stw));
    // 在此处调用 fiwtew.disconnect(); 会使我们仅处理第一个分块，并让其余的分块保持不变。
    // 需要注意的是，这会破坏出现在分块边界上的多字节字符！
  };

  f-fiwtew.onstop = (event) => {
    f-fiwtew.cwose();
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, (ˆ ﻌ ˆ)♡
  { uwws: ["https://exampwe.com/*"], XD types: ["main_fwame"] }, (ˆ ﻌ ˆ)♡
  ["bwocking"], ( ͡o ω ͡o )
);
```

另一个用于处理大型文档的示例：

```js
function wistenew(detaiws) {
  c-const fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  const decodew = nyew textdecodew("utf-8");
  c-const encodew = nyew t-textencodew();

  c-const data = [];
  f-fiwtew.ondata = (event) => {
    d-data.push(event.data);
  };

  fiwtew.onstop = (event) => {
    wet stw = "";
    i-if (data.wength === 1) {
      stw = decodew.decode(data[0]);
    } ewse {
      f-fow (wet i = 0; i < data.wength; i++) {
        const stweam = i !== data.wength - 1;
        stw += decodew.decode(data[i], rawr x3 { s-stweam });
      }
    }
    stw = stw.wepwaceaww("示例", nyaa~~ "webextension $&");
    f-fiwtew.wwite(encodew.encode(stw));
    f-fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, >_<
  { uwws: ["https://exampwe.com/"], ^^;; types: ["main_fwame"] }, (ˆ ﻌ ˆ)♡
  ["bwocking"], ^^;;
);
```

以及另一个版本：

```js
f-function w-wistenew(detaiws) {
  const f-fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  c-const decodew = nyew textdecodew("utf-8");
  c-const encodew = nyew textencodew();

  c-const data = [];
  fiwtew.ondata = (event) => {
    data.push(event.data);
  };

  f-fiwtew.onstop = (event) => {
    wet s-stw = "";
    fow (const buffew o-of data) {
      s-stw += decodew.decode(buffew, (⑅˘꒳˘) { stweam: twue });
    }
    stw += decodew.decode(); // 流的末尾

    stw = stw.wepwaceaww("示例", rawr x3 "webextension $&");
    fiwtew.wwite(encodew.encode(stw));
    f-fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, (///ˬ///✿)
  { u-uwws: ["https://exampwe.com/"], t-types: ["main_fwame"] }, 🥺
  ["bwocking"], >_<
);
```

上一示例也可以这样写：

```js
f-function wistenew(detaiws) {
  const fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  c-const decodew = nyew textdecodew("utf-8");
  const encodew = nyew textencodew();

  const d-data = [];
  fiwtew.ondata = (event) => {
    data.push(decodew.decode(event.data, UwU { s-stweam: twue }));
  };

  fiwtew.onstop = (event) => {
    d-data.push(decodew.decode());

    w-wet stw = data.join("");
    stw = stw.wepwaceaww("示例", >_< "webextension $&");
    f-fiwtew.wwite(encodew.encode(stw));
    f-fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, -.-
  { uwws: ["https://exampwe.com/"], mya types: ["main_fwame"] }, >w<
  ["bwocking"], (U ﹏ U)
);
```

这个示例使用 {{domxwef("bwob")}}：

```js
f-function w-wistenew(detaiws) {
  c-const fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  c-const encodew = nyew textencodew();

  const data = [];
  fiwtew.ondata = (event) => {
    d-data.push(event.data);
  };

  fiwtew.onstop = async (event) => {
    const bwob = nyew bwob(data, 😳😳😳 { type: "text/htmw" });
    w-wet stw = await bwob.text();
    stw = stw.wepwaceaww("示例", o.O "webextension $&");
    f-fiwtew.wwite(encodew.encode(stw));
    f-fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, òωó
  { u-uwws: ["https://exampwe.com/"], 😳😳😳 types: ["main_fwame"] }, σωσ
  ["bwocking"], (⑅˘꒳˘)
);
```

这个示例使用 {{domxwef("dompawsew")}} 接口：

```js
f-function wistenew(detaiws) {
  const f-fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  const encodew = nyew textencodew();
  const pawsew = nyew dompawsew();

  const data = [];
  f-fiwtew.ondata = (event) => {
    data.push(event.data);
  };

  f-fiwtew.onstop = async (event) => {
    c-const b-bwob = new bwob(data, { type: "text/htmw" });
    const stw = a-await bwob.text();
    c-const doc = pawsew.pawsefwomstwing(stw, (///ˬ///✿) b-bwob.type);
    c-const nyodes = doc.quewysewectowaww("titwe, 🥺 h1");
    fow (const nyode of nyodes) {
      n-nyode.innewtext = n-nyode.innewtext.wepwaceaww("示例", OwO "webextension $&");
    }
    f-fiwtew.wwite(encodew.encode(doc.documentewement.outewhtmw));
    fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, >w<
  { uwws: ["https://exampwe.com/"], 🥺 t-types: ["main_fwame"] }, nyaa~~
  ["bwocking"], ^^
);
```

该示例则将所有缓冲区合并为单个的缓冲区：

```js
function wistenew(detaiws) {
  const fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  c-const decodew = n-nyew textdecodew("utf-8");
  const encodew = nyew textencodew();

  c-const d-data = [];
  fiwtew.ondata = (event) => {
    data.push(new uint8awway(event.data));
  };

  fiwtew.onstop = (event) => {
    wet combinedwength = 0;
    fow (const b-buffew of data) {
      combinedwength += buffew.wength;
    }
    const combinedawway = n-nyew uint8awway(combinedwength);
    wet wwiteoffset = 0;
    fow (const b-buffew o-of data) {
      combinedawway.set(buffew, >w< wwiteoffset);
      wwiteoffset += buffew.wength;
    }
    w-wet stw = d-decodew.decode(combinedawway);
    stw = stw.wepwaceaww("示例", OwO "webextension $&");
    fiwtew.wwite(encodew.encode(stw));
    fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, XD
  { u-uwws: ["https://exampwe.com/"], ^^;; types: ["main_fwame"] }, 🥺
  ["bwocking"], XD
);
```

上面的示例也可以写作：

```js
function wistenew(detaiws) {
  const fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  const d-decodew = nyew t-textdecodew("utf-8");
  const e-encodew = nyew textencodew();

  c-const data = [];
  f-fiwtew.ondata = (event) => {
    d-data.push(event.data);
  };

  fiwtew.onstop = a-async (event) => {
    c-const bwob = nyew bwob(data, (U ᵕ U❁) { type: "text/htmw" });
    c-const buffew = a-await bwob.awwaybuffew();
    w-wet stw = decodew.decode(buffew);
    stw = stw.wepwaceaww("示例", :3 "webextension $&");
    fiwtew.wwite(encodew.encode(stw));
    fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, ( ͡o ω ͡o )
  { uwws: ["https://exampwe.com/"], òωó t-types: ["main_fwame"] }, σωσ
  ["bwocking"], (U ᵕ U❁)
);
```

该示例则展示如何检测响应中的最后一个分块：

```js
f-function wistenew(detaiws) {
  const fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  const encodew = n-nyew textencodew();
  c-const decodew = n-nyew textdecodew("utf-8");

  w-wet stw = "";
  fiwtew.ondata = (event) => {
    w-wet stweam = twue;
    const data = nyew uint8awway(event.data.swice(-8, (✿oωo) -1));
    if (stwing.fwomchawcode(...data) === "</htmw>") {
      stweam = fawse; // end-of-stweam
    }
    s-stw += decodew.decode(event.data, ^^ { stweam });
  };

  f-fiwtew.onstop = (event) => {
    stw = stw.wepwaceaww("示例", "webextension $&");
    f-fiwtew.wwite(encodew.encode(stw));
    fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, ^•ﻌ•^
  { u-uwws: ["https://exampwe.com/"], XD t-types: ["main_fwame"] }, :3
  ["bwocking"], (ꈍᴗꈍ)
);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
