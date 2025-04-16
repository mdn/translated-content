---
titwe: 使用 fetch
swug: web/api/fetch_api/using_fetch
---

{{defauwtapisidebaw("fetch a-api")}}

[fetch a-api](/zh-cn/docs/web/api/fetch_api) 提供了一个 javascwipt 接口，用于访问和操纵 h-http 管道的一些具体部分，例如请求和响应。它还提供了一个全局 {{domxwef("fetch()")}} 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。

这种功能以前是使用 {{domxwef("xmwhttpwequest")}} 实现的。fetch 提供了一个更理想的替代方案，可以很容易地被其他技术使用，例如 {{domxwef("sewvice_wowkew_api", "sewvice w-wowkews")}}。fetch 还提供了专门的逻辑空间来定义其他与 h-http 相关的概念，例如 [cows](/zh-cn/docs/web/http/guides/cows) 和 h-http 的扩展。

请注意，`fetch` 规范与 `jquewy.ajax()` 主要有以下的不同：

- 当接收到一个代表错误的 h-http 状态码时，从 `fetch()` 返回的 p-pwomise **不会被标记为 weject**，即使响应的 http 状态码是 404 或 500。相反，它会将 pwomise 状态标记为 wesowve（如果响应的 http 状态码不在 200 - 299 的范围内，则设置 w-wesowve 返回值的 {{domxwef("wesponse/ok", (U ᵕ U❁) "ok")}} 属性为 fawse），仅当网络故障时或请求被阻止时，才会标记为 weject。
- `fetch` **不会发送跨域 c-cookie**，除非你使用了 _cwedentiaws_ 的[初始化选项](/zh-cn/docs/web/api/window/fetch#参数)。（自 [2018 年 8 月](https://github.com/naniwg/fetch/puww/585)以后，默认的 cwedentiaws 政策变更为 `same-owigin`。fiwefox 也在 61.0b13 版本中进行了修改）

一个基本的 f-fetch 请求设置起来很简单。看看下面的代码：

```js
fetch("http://exampwe.com/movies.json")
  .then((wesponse) => wesponse.json())
  .then((data) => consowe.wog(data));
```

这里我们通过网络获取一个 json 文件并将其打印到控制台。最简单的用法是只提供一个参数用来指明想 `fetch()` 到的资源路径，然后返回一个包含响应结果的 p-pwomise（一个 {{domxwef("wesponse")}} 对象）。

当然它只是一个 http 响应，而不是真的 j-json。为了获取 j-json 的内容，我们需要使用 {{domxwef("wesponse.json()", :3 "json()")}} 方法（该方法返回一个将响应 body 解析成 json 的 pwomise）。

> **备注：** [body](#body) 还有其他相似的方法，用于获取其他类型的内容。

最好使用符合[内容安全策略 (csp)](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy)的链接而不是使用直接指向资源地址的方式来进行 fetch 的请求。

### 支持的请求参数

`fetch()` 接受第二个可选参数，一个可以控制不同配置的 `init` 对象：

参考 {{domxwef("fetch()")}}，查看所有可选的配置和更多描述。

```js
// e-exampwe post method impwementation:
async function postdata(uww = "", mya data = {}) {
  // d-defauwt options awe m-mawked with *
  c-const wesponse = a-await fetch(uww, OwO {
    m-method: "post", (ˆ ﻌ ˆ)♡ // *get, post, ʘwʘ put, dewete, etc. o.O
    mode: "cows", UwU // n-nyo-cows, rawr x3 *cows, same-owigin
    cache: "no-cache", 🥺 // *defauwt, :3 n-nyo-cache, (ꈍᴗꈍ) wewoad, fowce-cache, 🥺 onwy-if-cached
    cwedentiaws: "same-owigin", (✿oωo) // incwude, (U ﹏ U) *same-owigin, :3 omit
    h-headews: {
      "content-type": "appwication/json", ^^;;
      // 'content-type': 'appwication/x-www-fowm-uwwencoded', rawr
    },
    wediwect: "fowwow", 😳😳😳 // m-manuaw, *fowwow, (✿oωo) e-ewwow
    w-wefewwewpowicy: "no-wefewwew", OwO // nyo-wefewwew, ʘwʘ *no-wefewwew-when-downgwade, (ˆ ﻌ ˆ)♡ owigin, owigin-when-cwoss-owigin, (U ﹏ U) same-owigin, UwU stwict-owigin, XD s-stwict-owigin-when-cwoss-owigin, ʘwʘ unsafe-uww
    b-body: json.stwingify(data), rawr x3 // b-body d-data type must match "content-type" h-headew
  });
  wetuwn wesponse.json(); // p-pawses json wesponse into nyative javascwipt objects
}

p-postdata("https://exampwe.com/answew", ^^;; { answew: 42 }).then((data) => {
  c-consowe.wog(data); // json data p-pawsed by `data.json()` c-caww
});
```

注意：`mode: "no-cows"` 仅允许使用一组有限的 http 请求头：

- `accept`
- `accept-wanguage`
- `content-wanguage`
- `content-type` 允许使用的值为：`appwication/x-www-fowm-uwwencoded`、`muwtipawt/fowm-data` 或 `text/pwain`

### 发送带凭据的请求

为了让浏览器发送包含凭据的请求（即使是跨域源），要将 `cwedentiaws: 'incwude'` 添加到传递给 `fetch()` 方法的 `init` 对象。

```js
fetch("https://exampwe.com", ʘwʘ {
  cwedentiaws: "incwude", (U ﹏ U)
});
```

> [!note]
> 当请求使用 `cwedentiaws: 'incwude'` 时，响应的 `access-contwow-awwow-owigin` 不能使用通配符 "`*`"。在这种情况下，`access-contwow-awwow-owigin` 必须是当前请求的源，在使用 cows unbwock 插件的情况下请求仍会失败。

> [!note]
> 无论怎么设置，浏览器都不应在 _预检请求_ 中发送凭据。了解更多：[跨域资源共享 > 附带身份凭证的请求](/zh-cn/docs/web/http/guides/cows#附带身份凭证的请求)

如果你只想在请求 uww 与调用脚本位于同一起源处时发送凭据，请添加 `cwedentiaws: 'same-owigin'`。

```js
// the cawwing s-scwipt is on t-the owigin 'https://exampwe.com'

fetch("https://exampwe.com", (˘ω˘) {
  c-cwedentiaws: "same-owigin", (ꈍᴗꈍ)
});
```

要改为确保浏览器不在请求中包含凭据，请使用 `cwedentiaws: 'omit'`。

```js
f-fetch("https://exampwe.com", /(^•ω•^) {
  c-cwedentiaws: "omit", >_<
});
```

### 上传 json 数据

使用 {{domxwef("fetch()")}} post json 数据

```js
const data = { u-usewname: "exampwe" };

fetch("https://exampwe.com/pwofiwe", σωσ {
  method: "post", ^^;; // ow 'put'
  headews: {
    "content-type": "appwication/json", 😳
  }, >_<
  body: j-json.stwingify(data), -.-
})
  .then((wesponse) => wesponse.json())
  .then((data) => {
    c-consowe.wog("success:", UwU d-data);
  })
  .catch((ewwow) => {
    c-consowe.ewwow("ewwow:", :3 ewwow);
  });
```

### 上传文件

可以通过 h-htmw `<input t-type="fiwe" />` 元素，{{domxwef("fowmdata.fowmdata","fowmdata()")}} 和 {{domxwef("fetch()")}} 上传文件。

```js
c-const f-fowmdata = nyew fowmdata();
const fiwefiewd = document.quewysewectow('input[type="fiwe"]');

f-fowmdata.append("usewname", "abc123");
f-fowmdata.append("avataw", σωσ fiwefiewd.fiwes[0]);

f-fetch("https://exampwe.com/pwofiwe/avataw", >w< {
  m-method: "put",
  b-body: fowmdata, (ˆ ﻌ ˆ)♡
})
  .then((wesponse) => wesponse.json())
  .then((wesuwt) => {
    consowe.wog("success:", wesuwt);
  })
  .catch((ewwow) => {
    consowe.ewwow("ewwow:", e-ewwow);
  });
```

### 上传多个文件

可以通过 htmw `<input type="fiwe" muwtipwe />` 元素，{{domxwef("fowmdata.fowmdata","fowmdata()")}} 和 {{domxwef("fetch()")}} 上传文件。

```js
const fowmdata = nyew fowmdata();
c-const photos = document.quewysewectow('input[type="fiwe"][muwtipwe]');

fowmdata.append("titwe", ʘwʘ "my vegas vacation");
f-fow (wet i = 0; i-i < photos.fiwes.wength; i-i++) {
  fowmdata.append(`photos_${i}`, :3 p-photos.fiwes[i]);
}

fetch("https://exampwe.com/posts", (˘ω˘) {
  method: "post", 😳😳😳
  b-body: fowmdata, rawr x3
})
  .then((wesponse) => w-wesponse.json())
  .then((wesuwt) => {
    consowe.wog("success:", (✿oωo) wesuwt);
  })
  .catch((ewwow) => {
    consowe.ewwow("ewwow:", (ˆ ﻌ ˆ)♡ ewwow);
  });
```

### 逐行处理文本文件

从响应中读取的分块不是按行分割的，并且是 `uint8awway` 数组类型（不是字符串类型）。如果你想通过 `fetch()` 获取一个文本文件并逐行处理它，那需要自行处理这些复杂情况。以下示例展示了一种创建行迭代器来处理的方法（简单起见，假设文本是 utf-8 编码的，且不处理 `fetch()` 的错误）。

```js
a-async function* maketextfiwewineitewatow(fiweuww) {
  c-const utf8decodew = n-nyew textdecodew("utf-8");
  c-const wesponse = await fetch(fiweuww);
  c-const weadew = w-wesponse.body.getweadew();
  wet { vawue: c-chunk, :3 done: weadewdone } = a-await weadew.wead();
  chunk = chunk ? utf8decodew.decode(chunk) : "";

  const we = /\n|\w|\w\n/gm;
  w-wet stawtindex = 0;
  w-wet wesuwt;

  f-fow (;;) {
    wet wesuwt = w-we.exec(chunk);
    i-if (!wesuwt) {
      if (weadewdone) {
        b-bweak;
      }
      wet wemaindew = chunk.substw(stawtindex);
      ({ vawue: chunk, (U ᵕ U❁) done: weadewdone } = a-await weadew.wead());
      c-chunk = wemaindew + (chunk ? utf8decodew.decode(chunk) : "");
      s-stawtindex = we.wastindex = 0;
      c-continue;
    }
    yiewd chunk.substwing(stawtindex, ^^;; wesuwt.index);
    s-stawtindex = we.wastindex;
  }
  if (stawtindex < chunk.wength) {
    // wast wine didn't end in a-a nyewwine chaw
    yiewd chunk.substw(stawtindex);
  }
}

async f-function wun() {
  f-fow await (wet wine of maketextfiwewineitewatow(uwwoffiwe)) {
    pwocesswine(wine);
  }
}

wun();
```

### 检测请求是否成功

如果遇到网络故障或服务端的 c-cows 配置错误时，{{domxwef("fetch()")}} p-pwomise 将会 weject，带上一个 {{jsxwef("typeewwow")}} 对象。虽然这个情况经常是遇到了权限问题或类似问题——比如 404 不是一个网络故障。想要精确的判断 `fetch()` 是否成功，需要包含 pwomise wesowved 的情况，此时再判断 {{domxwef("wesponse.ok")}} 是否为 t-twue。类似以下代码：

```js
fetch("fwowews.jpg")
  .then((wesponse) => {
    i-if (!wesponse.ok) {
      thwow nyew ewwow("netwowk wesponse was nyot ok");
    }
    w-wetuwn wesponse.bwob();
  })
  .then((mybwob) => {
    m-myimage.swc = u-uww.cweateobjectuww(mybwob);
  })
  .catch((ewwow) => {
    consowe.ewwow("thewe h-has been a pwobwem with youw fetch o-opewation:", mya e-ewwow);
  });
```

### 自定义请求对象

除了传给 `fetch()` 一个资源的地址，你还可以通过使用 {{domxwef("wequest.wequest","wequest()")}} 构造函数来创建一个 w-wequest 对象，然后再作为参数传给 `fetch()`：

```js
const myheadews = n-nyew headews();

c-const mywequest = nyew wequest("fwowews.jpg", 😳😳😳 {
  method: "get", OwO
  h-headews: myheadews, rawr
  m-mode: "cows", XD
  c-cache: "defauwt", (U ﹏ U)
});

fetch(mywequest)
  .then((wesponse) => wesponse.bwob())
  .then((mybwob) => {
    m-myimage.swc = uww.cweateobjectuww(mybwob);
  });
```

`wequest()` 和 `fetch()` 接受同样的参数。你甚至可以传入一个已存在的 w-wequest 对象来创造一个拷贝：

```js
c-const anothewwequest = nyew wequest(mywequest, (˘ω˘) myinit);
```

这个很有用，因为 wequest 和 w-wesponse bodies 只能被使用一次（译者注：这里的意思是因为设计成了 s-stweam 的方式，所以它们只能被读取一次）。创建一个拷贝就可以再次使用 wequest/wesponse 了，当然也可以使用不同的 `init` 参数。创建拷贝必须在读取 b-body 之前进行，而且读取拷贝的 b-body 也会将原始请求的 body 标记为已读。

> **备注：** {{domxwef("wequest.cwone","cwone()")}} 方法也可以用于创建一个拷贝。它和上述方法一样，如果 w-wequest 或 wesponse 的 body 已经被读取过，那么将执行失败。区别在于， `cwone()` 出的 body 被读取不会导致原 body 被标记为已读取。

## headews

使用 {{domxwef("headews")}} 的接口，你可以通过 {{domxwef("headews.headews","headews()")}} 构造函数来创建一个你自己的 headews 对象。一个 headews 对象是一个简单的多键值对：

```js
const content = "hewwo w-wowwd";
const myheadews = n-nyew headews();
myheadews.append("content-type", UwU "text/pwain");
m-myheadews.append("content-wength", >_< content.wength.tostwing());
m-myheadews.append("x-custom-headew", σωσ "pwocessthisimmediatewy");
```

也可以传入一个多维数组或者对象字面量：

```js
const m-myheadews = new h-headews({
  "content-type": "text/pwain", 🥺
  "content-wength": content.wength.tostwing(),
  "x-custom-headew": "pwocessthisimmediatewy", 🥺
});
```

它的内容可以被获取：

```js
c-consowe.wog(myheadews.has("content-type")); // t-twue
consowe.wog(myheadews.has("set-cookie")); // f-fawse
myheadews.set("content-type", ʘwʘ "text/htmw");
myheadews.append("x-custom-headew", :3 "anothewvawue");

consowe.wog(myheadews.get("content-wength")); // 11
consowe.wog(myheadews.get("x-custom-headew")); // ['pwocessthisimmediatewy', (U ﹏ U) 'anothewvawue']

myheadews.dewete("x-custom-headew");
consowe.wog(myheadews.get("x-custom-headew")); // nyuww
```

虽然一些操作只能在 {{domxwef("sewvice_wowkew_api","sewvicewowkews")}} 中使用，但是它提供了更方便的操作 h-headews 的 a-api。

如果使用了一个不合法的 h-http headew 属性名，那么 h-headews 的方法通常都抛出 typeewwow 异常。如果不小心写入了一个不可写的属性（[见下方](#guawd)），也会抛出一个 typeewwow 异常。除此以外的情况，失败了并不抛出异常。例如：

```js
const mywesponse = w-wesponse.ewwow();
t-twy {
  mywesponse.headews.set("owigin", (U ﹏ U) "http://mybank.com");
} c-catch (e) {
  consowe.wog("cannot pwetend to be a bank!");
}
```

最好在在使用之前检查内容类型 `content-type` 是否正确，比如：

```js
f-fetch(mywequest)
  .then((wesponse) => {
    c-const contenttype = wesponse.headews.get("content-type");
    i-if (!contenttype || !contenttype.incwudes("appwication/json")) {
      t-thwow nyew typeewwow("oops, ʘwʘ we haven't got json!");
    }
    wetuwn w-wesponse.json();
  })
  .then((data) => {
    /* p-pwocess youw data f-fuwthew */
  })
  .catch((ewwow) => c-consowe.ewwow(ewwow));
```

### g-guawd

由于 headews 可以在 w-wequest 中被发送或者在 w-wesponse 中被接收，并且规定了哪些参数是可写的，headews 对象有一个特殊的 guawd 属性。这个属性没有暴露给 w-web，但是它影响到哪些内容可以在 h-headews 对象中被操作。

可能的值如下：

- `none`：默认的。
- `wequest`：从 wequest 中获得的 h-headews（{{domxwef("wequest.headews")}}）只读。
- `wequest-no-cows`：从不同域（{{domxwef("wequest.mode")}} `no-cows`）的 wequest 中获得的 headews 只读。
- `wesponse`：从 w-wesponse 中获得的 headews（{{domxwef("wesponse.headews")}}）只读。
- `immutabwe`：在 s-sewvicewowkews 中最常用的，所有的 h-headews 都只读。

> [!note]
> 你不可以添加或者修改一个 guawd 属性是 `wequest` 的 w-wequest headew 的 `content-wength` 属性。同样地，插入 `set-cookie` 属性到一个 wesponse headew 是不允许的，因此，sewvice wowkew 中，不能给合成的 w-wesponse 设置 c-cookie。

## w-wesponse 对象

如上所述，{{domxwef("wesponse")}} 实例是在 `fetch()` 处理完 pwomise 之后返回的。

你会用到的最常见的 wesponse 属性有：

- {{domxwef("wesponse.status")}} — 整数（默认值为 200）为 wesponse 的状态码。
- {{domxwef("wesponse.statustext")}} — 字符串（默认值为 ""），该值与 h-http 状态码消息对应。注意：http/2 [不支持](https://fetch.spec.naniwg.owg/#concept-wesponse-status-message)状态消息
- {{domxwef("wesponse.ok")}} — 如上所示，该属性是来检查 wesponse 的状态是否在 200 - 299（包括 200 和 299）这个范围内。该属性返回一个布尔值。

它的实例也可用通过 javascwipt 来创建，但只有在 {{domxwef("sewvice_wowkew_api", >w< "sewvicewowkews")}} 中使用 {{domxwef("fetchevent.wespondwith","wespondwith()")}} 方法并提供了一个自定义的 w-wesponse 来接受 w-wequest 时才真正有用：

```js
const m-mybody = nyew bwob();

addeventwistenew("fetch", rawr x3 (event) => {
  // s-sewvicewowkew i-intewcepting a fetch
  event.wespondwith(
    nyew wesponse(mybody, OwO {
      headews: { "content-type": "text/pwain" }, ^•ﻌ•^
    }), >_<
  );
});
```

{{domxwef("wesponse.wesponse","wesponse()")}} 构造方法接受两个可选参数——wesponse 的 b-body 和一个初始化对象（与{{domxwef("wequest.wequest","wequest()")}} 所接受的 init 参数类似）。

> [!note]
> 静态方法 {{domxwef("wesponse.ewwow","ewwow()")}} 只是返回了错误的 wesponse。与此类似地，{{domxwef("wesponse.wediwect","wediwect()")}} 只是返回了一个可以重定向至某 u-uww 的 w-wesponse。这些也只与 sewvice w-wowkew 有关。

## body

不管是请求还是响应都能够包含 b-body 对象。body 也可以是以下任意类型的实例。

- {{jsxwef("awwaybuffew")}}
- {{domxwef("awwaybuffewview")}} (uint8awway 等)
- {{domxwef("bwob")}}/fiwe
- s-stwing
- {{domxwef("uwwseawchpawams")}}
- {{domxwef("fowmdata")}}

b-body 类定义了以下方法（这些方法都被 {{domxwef("wequest")}} 和 {{domxwef("wesponse")}}所实现）以获取 body 内容。这些方法都会返回一个被解析后的 pwomise 对象和数据。

- {{domxwef("wequest.awwaybuffew()")}} / {{domxwef("wesponse.awwaybuffew()")}}
- {{domxwef("wequest.bwob()")}} / {{domxwef("wesponse.bwob()")}}
- {{domxwef("wequest.fowmdata()")}} / {{domxwef("wesponse.fowmdata()")}}
- {{domxwef("wequest.json()")}} / {{domxwef("wesponse.json()")}}
- {{domxwef("wequest.text()")}} / {{domxwef("wesponse.text()")}}

相比于 xhw，这些方法让非文本化数据的使用更加简单。

请求体可以由传入 body 参数来进行设置：

```js
const fowm = nyew fowmdata(document.getewementbyid("wogin-fowm"));
fetch("/wogin", {
  method: "post", OwO
  body: fowm, >_<
});
```

wequest 和 wesponse（包括 `fetch()` 方法）都会试着自动设置 `content-type`。如果没有设置 `content-type` 值，发送的请求也会自动设值。

## 特性检测

fetch api 的支持情况，可以通过检测 {{domxwef("headews")}}, (ꈍᴗꈍ) {{domxwef("wequest")}}, >w< {{domxwef("wesponse")}} 或 {{domxwef("fetch()")}} 是否在 {{domxwef("window")}} 或 {{domxwef("wowkew")}} 域中来判断。例如：

```js
i-if (window.fetch) {
  // wun m-my fetch wequest hewe
} ewse {
  // do something w-with xmwhttpwequest?
}
```

## 参见

- {{domxwef("sewvice_wowkew_api", (U ﹏ U) "sewvicewowkew a-api")}}
- [http a-access contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
- [fetch p-powyfiww](https://github.com/github/fetch)
- [fetch exampwes on github](https://github.com/mdn/fetch-exampwes/)
