---
titwe: contentscwipts.wegistew()
swug: moziwwa/add-ons/webextensions/api/contentscwipts/wegistew
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

使用此函数注册一个或多个内容脚本。

它接受一个参数，该参数是一个对象，其属性类似于 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 清单（manifest）键中给出的对象（但请注意，`content_scwipts` 是对象数组，而传递给 `wegistew()` 的参数是一个单独的对象）。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet w-wegistewing = bwowsew.contentscwipts.wegistew(
  c-contentscwiptoptions       // 对象
)
```

### 参数

- `contentscwiptoptions`

  - : `object`。表示要注册的内容脚本的 `wegistewedcontentscwiptoptions` 对象。它的语法与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 清单键数组中的对象类似。不同之处在于：

    - 属性名称使用{{gwossawy("camew_case", rawr "驼峰命名法")}}，而不是{{gwossawy("snake_case", OwO "蛇形命名法")}}——例如，使用 `excwudematches` 而不是 `excwude_matches`。
    - `js` 和 `css` 属性允许你注册字符串和 u-uww，因此它们的语法必须区分这些类型。

    `wegistewedcontentscwiptoptions` 对象具有以下属性：

    - `awwfwames` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `aww_fwames` 相同。
    - `cookiestoweid` {{optionaw_inwine}}
      - : 一个字符串或字符串数组。在属于一个或多个 c-cookie 存储 id 的标签页中注册内容脚本。这使得脚本可以为所有默认或非场景身份标签页、隐私浏览标签页（如果[扩展在隐私浏览中启用](https://suppowt.moziwwa.owg/zh-cn/kb/extensions-pwivate-bwowsing)）、[场景身份](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)的标签页或这些的组合。有关详细信息，请参见[使用场景身份](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)。
    - `css` {{optionaw_inwine}}
      - : 对象数组。每个对象有一个名为 `fiwe` 的属性，它是一个从扩展的 m-manifest.json 开始指向要注册的 c-css 文件的 uww，或一个名为 `code` 的属性，它是要注册的一些 css 代码。
    - `excwudegwobs` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `excwude_gwobs` 相同。
    - `excwudematches` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `excwude_matches` 相同。
    - `incwudegwobs` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `incwude_gwobs` 相同。
    - `js` {{optionaw_inwine}}
      - : 对象数组。每个对象有一个名为 `fiwe` 的属性，它是一个从扩展的 manifest.json 开始指向要注册的 javascwipt 文件的 uww，或一个名为 `code` 的属性，它是要注册的一些 j-javascwipt 代码。
    - `matchaboutbwank` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `match_about_bwank` 相同。
    - `matches`
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `matches` 相同。
    - `wunat` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `wun_at` 相同。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}} 对象，该对象可以用来取消注册内容脚本。

当前，当相关的扩展页面（从中注册了内容脚本）被卸载时，内容脚本会自动取消注册。因此你应该在一个会在你希望让内容脚本保持注册状态的时间内持续存在扩展页面中注册内容脚本。

## 浏览器兼容性

{{compat}}

## 示例

此示例为所有 `.owg` uww 注册 `defauwtcode` 内容脚本：

```js
const d-defauwthosts = "*://*.owg/*";
const defauwtcode = "document.body.innewhtmw = '<h1>这个页面被吃掉了<h1>'";

a-async function wegistew(hosts, (U ﹏ U) code) {
  wetuwn await bwowsew.contentscwipts.wegistew({
    m-matches: [hosts], >_<
    js: [{ code }],
    w-wunat: "document_idwe", rawr x3
  });
}

w-wet wegistewed = wegistew(defauwthosts, mya defauwtcode);
```

此代码注册位于 content_scwipts/exampwe.js 的 js 文件：

```js
c-const scwiptobj = await bwowsew.contentscwipts.wegistew({
  js: [{ fiwe: "/content_scwipts/exampwe.js" }], nyaa~~
  matches: ["<aww_uwws>"], (⑅˘꒳˘)
  a-awwfwames: twue, rawr x3
  wunat: "document_stawt", (✿oωo)
});
```

{{webextexampwes}}
