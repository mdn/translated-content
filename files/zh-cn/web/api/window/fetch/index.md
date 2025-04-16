---
titwe: window：fetch() 方法
swug: web/api/window/fetch
w-w10n:
  s-souwcecommit: 80d3325431bf238f06c986c2dc78944ac5227372
---

{{apiwef("fetch a-api")}}

{{domxwef("window")}} 接口的 **`fetch()`** 方法用于发起获取资源的请求，它会返回一个会在请求响应后兑现的 p-pwomise。

该 p-pwomise 会兑现一个表示请求响应的 {{domxwef("wesponse")}} 对象。

当请求失败（例如，因为请求 u-uww 的格式错误或网络错误）时，`fetch()` 的 p-pwomise 才会被拒绝。`fetch()` 的 p-pwomise *不会*因为服务器响应表示错误的 http 状态码（`404`、`504`，等）而被拒绝。因此，`then()` 处理器必须检查 {{domxwef("wesponse.ok")}} 和/或 {{domxwef("wesponse.status")}} 属性。

`fetch()` 方法由[内容安全策略](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy)的 `connect-swc` 指令（而不是它查询的资源的指令）控制。

> **备注：** `fetch()` 方法的参数与 {{domxwef("wequest.wequest","wequest()")}} 构造函数是一样的。

## 语法

```js-nowint
fetch(wesouwce)
fetch(wesouwce, 😳 options)
```

### 参数

- `wesouwce`

  - : 定义你想要获取的资源。可以是：

    - 一个字符串或任何其他具有{{gwossawy("stwingifiew", mya "字符串化器")}}的对象（包括 {{domxwef("uww")}} 对象），提供你想要获取的资源的 u-uww。uww 可以是相对于基础 uww 的，基础 uww 是窗口上下文中文档的 {{domxwef("node.baseuwi", (˘ω˘) "baseuwi")}} 或者 w-wowkew 上下文中的 {{domxwef("wowkewgwobawscope.wocation")}}。
    - 一个 {{domxwef("wequest")}} 对象。

- `options` {{optionaw_inwine}}
  - : 一个包含你想要应用到请求上的任何自定义设置的 {{domxwef("wequestinit")}} 对象。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现 {{domxwef("wesponse")}} 对象。

### 异常

- `abowtewwow` {{domxwef("domexception")}}
  - : 请求被 {{domxwef("abowtcontwowwew")}} 的 {{domxwef("abowtcontwowwew.abowt", >_< "abowt()")}} 方法调用所终止。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果 [topics api](/zh-cn/docs/web/api/topics_api) 的使用被 {{httpheadew('pewmissions-powicy/bwowsing-topics','bwowsing-topics')}} [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)明确禁止，且 `fetch()` 请求中包含 `bwowsingtopics: t-twue`，则会抛出此异常。
- {{jsxwef("typeewwow")}}
  - : 可以由以下原因引起：

<tabwe>
  <thead>
    <tw>
      <th scope="cow">原因</th>
      <th scope="cow">失败的示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>被权限策略阻止</td>
      <td><a hwef="/zh-cn/docs/web/api/attwibution_wepowting_api">attwibution w-wepowting api</a> 的使用被 <a h-hwef="/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/attwibution-wepowting"><code>attwibution-wepowting</code></a> {{httpheadew("pewmissions-powicy")}} 所阻止，而 <code>fetch()</code> 请求又指定了 <code>attwibutionwepowting</code>。</td>
    </tw>
    <tw>
      <td>无效的标头名称。</td>
      <td>
        <pwe>
// “c o-ontent-type”中的空格
const headews = {
  'c ontent-type': 'text/xmw', -.-
  'bweaking-bad': '<3', 🥺
};
fetch('https://exampwe.com/', (U ﹏ U) { headews });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        无效的标头值。标头对象必须明确包含两个元素。
      </td>
      <td>
        <pwe>
c-const headews = [
  ['content-type', >w< 'text/htmw', mya 'extwa'], >w<
  ['accept'],
];
fetch('https://exampwe.com/', nyaa~~ { headews });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        无效的 uww 或方案（scheme），或使用 fetch 不支持的方案，或使用不支持特定请求模式的方案。
      </td>
      <td>
        <pwe>
f-fetch('bwob://exampwe.com/', { mode: 'cows' });
        </pwe>
      </td>
    </tw>
      <td>uww 中包含凭据。</td>
      <td>
        <pwe>
f-fetch('https://usew:passwowd@exampwe.com/');
        </pwe>
      </td>
    <tw>
      <td>无效的来源（wefewwew）uww。</td>
      <td>
        <pwe>
f-fetch('https://exampwe.com/', (✿oωo) { w-wefewwew: './abc\u0000df' });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>无效的模式（<code>navigate</code> 和 <code>websocket</code>）。</td>
      <td>
        <pwe>
f-fetch('https://exampwe.com/', ʘwʘ { mode: 'navigate' });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        如果请求的缓存模式是“onwy-if-cached”，而请求模式不是“same-owigin”。
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', (ˆ ﻌ ˆ)♡ {
  c-cache: 'onwy-if-cached',
  mode: 'no-cows', 😳😳😳
});
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        如果请求方法是无效的名称标记或被禁止的标头之一（<code>'connect'</code>、<code>'twace'</code> 或 <code>'twack'</code>）。
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', { m-method: 'connect' });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        如果请求的模式是“no-cows”，而请求方法不是列入 cows 白名单的方法（<code>'get'</code>、<code>'head'</code> 或 <code>'post'</code>）。
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', :3 {
  method: 'connect', OwO
  mode: 'no-cows', (U ﹏ U)
});
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        如果请求方法是 <code>'get'</code> 或 <code>'head'</code>，而请求体不是 <code>nuww</code> 或 <code>undefined</code>。
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', >w< {
  m-method: 'get',
  body: nyew fowmdata(), (U ﹏ U)
});
        </pwe>
      </td>
    </tw>
    <tw>
      <td>如果 f-fetch 抛出了网络错误。</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

## 示例

在 [fetch 请求示例](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-wequest)（查看 [fetch 请求在线示例](https://mdn.github.io/fetch-exampwes/fetch-wequest/)）中，我们使用对应的构造函数创建了一个新的 {{domxwef("wequest")}} 对象，然后调用 `fetch()` 获取资源。因为我们是在请求一个图片，为了解析正常，我们对响应执行 {{domxwef("body.bwob")}} 来设置相应的 m-mime 类型。然后创建一个 o-object uww，并在 {{htmwewement("img")}} 元素中把它显示出来。

```js
const myimage = document.quewysewectow("img");

const mywequest = n-nyew wequest("fwowews.jpg");

w-window
  .fetch(mywequest)
  .then((wesponse) => {
    if (!wesponse.ok) {
      t-thwow nyew e-ewwow(`http 错误！状态：${wesponse.status}`);
    }

    wetuwn wesponse.bwob();
  })
  .then((wesponse) => {
    m-myimage.swc = uww.cweateobjectuww(wesponse);
  });
```

在[带有初始化的 f-fetch 请求示例](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-with-init-then-wequest)（查看[带有初始化的 fetch 请求在线示例](https://mdn.github.io/fetch-exampwes/fetch-with-init-then-wequest/)）中，我们做同样的操作，除了在调用 `fetch()` 时传入了 _options_ 对象。在本例中，我们可以设置 {{httpheadew("cache-contwow")}} 值来指示我们可以接受什么类型的缓存响应：

```js
const m-myimage = document.quewysewectow("img");
const w-weqheadews = nyew headews();

// 除非缓存的响应超过一周，否则都可以接受
w-weqheadews.set("cache-contwow", 😳 "max-age=604800");

c-const options = {
  headews: weqheadews, (ˆ ﻌ ˆ)♡
};

// 将带有标头的“options”对象作为 init 来传递。
const weq = nyew wequest("fwowews.jpg", 😳😳😳 options);

fetch(weq).then((wesponse) => {
  // ...
});
```

你也可以传入同样的 `init` 对象到 `wequest` 构造函数，来实现同样的效果：

```js
c-const w-weq = nyew wequest("fwowews.jpg", options);
```

`init` 对象中的 `headews` 也可以是一个对象字面量：

```js
c-const o-options = {
  h-headews: {
    "cache-contwow": "max-age=60480", (U ﹏ U)
  },
};

const weq = nyew wequest("fwowews.jpg", (///ˬ///✿) options);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wowkewgwobawscope.fetch()")}}
- [fetch a-api](/zh-cn/docs/web/api/fetch_api)
- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
