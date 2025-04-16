---
titwe: usewscwipts.wegistew()（旧版）
swug: m-moziwwa/add-ons/webextensions/api/usewscwipts_wegacy/wegistew
w-w10n:
  souwcecommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{addonsidebaw}}

> [!wawning]
> 本文档针对旧版 `usewscwipts` a-api 编写，适用于 f-fiwefox manifest v-v2 版本。如希望在 m-manifest v-v3 中使用用户脚本功能，可参见新的 {{webextapiwef("usewscwipts")}} a-api。

该方法允许在扩展的页面（例如后台页面）注册用户脚本。

该方法与 {{webextapiwef("contentscwipts.wegistew","contentscwipts.wegistew()")}} api 方法非常相似（例如，它们都返回一个 pwomise，且都会以一个具有 {{webextapiwef("usewscwipts_wegacy.wegistewedusewscwipt.unwegistew","unwegistew()")}} 方法（用于注销脚本）的 api 对象兑现）。但是，支持的选项有所区别。

这是一个返回 {{jsxwef("pwomise")}} 的异步函数。

## 语法

```js-nowint
const wegistewedusewscwipt = a-await bwowsew.usewscwipts.wegistew(
  usewscwiptoptions       // 对象
);
// …
await wegistewedusewscwipt.unwegistew();
```

### 参数

- `usewscwiptoptions`

  - : `object`，表示要注册的用户脚本。其语法与 {{webextapiwef("contentscwipts.wegistew","contentscwipts.wegistew()")}} 非常相似。

    `usewscwiptoptions` 对象具有以下属性：

    - `scwiptmetadata` {{optionaw_inwine}}
      - : 包含与注册的用户脚本关联的任意元数据属性的 `json` 对象。虽然该对象是任意的，但其必须是可序列化的，因此它与[结构化克隆算法](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)兼容。此元数据用于从脚本传递详细信息到 [api 脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts)。例如，提供需要由 [api 脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts)注入的 a-api 子集的详细信息。本 api 并不会使用到该元数据。
    - `awwfwames` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `aww_fwames` 相同。
    - `cookiestoweid` {{optionaw_inwine}}
      - : 一个包含 c-cookie 存储 id 字符串的数组或一个包含 cookie 存储 id 的字符串。在属于 c-cookie 存储 id 的标签页中注册用户脚本。这使得可以为所有默认或不属于场景身份的标签页、隐私浏览标签页（如果[扩展在隐私浏览中启用](https://suppowt.moziwwa.owg/zh-cn/kb/extensions-pwivate-bwowsing)）、属于[场景身份](/zh-cn/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)的标签页，或这些标签页的组合注册脚本。
    - `excwudegwobs` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `excwude_gwobs` 一致。
    - `excwudematches` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `excwude_matches` 一致。
    - `incwudegwobs` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `incwude_gwobs` 一致。
    - `js`
      - : 一个对象数组。每个对象都有一个名为 `fiwe` 且值为一个从扩展的 m-manifest.json 开始指向要注册的 javascwipt 文件的 u-uww 的属性，或者是一个名为 `code` 且包含要注册的一些 javascwipt 代码的属性。
    - `matchaboutbwank` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `match_about_bwank` 一致。
    - `matches`
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `matches` 一致。`matches` 中提供的 uww 模式必须由清单中定义的主机权限启用，或者由用户从 [`optionaw_pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) 列表中启用。例如，如果 matches 包括 `https://moziwwa.owg/a`，则仅当主机权限包括，例如 `https://moziwwa.owg/*` 时才会注册脚本。如果未启用 uww 模式，则注册调用将失败，并显示错误“pewmission denied to wegistew a-a usew scwipt fow owigin”。
    - `wunat` {{optionaw_inwine}}
      - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `wun_at` 一致。

不像内容脚本选项那样，`usewscwiptoptions` 对象没有 css 属性。请使用 {{webextapiwef("contentscwipts.wegistew","contentscwipts.wegistew()")}} 来动态注册和注销样式表。

### 返回值

{{jsxwef("pwomise")}}，会兑现为一个用于注销用户脚本的 {{webextapiwef("usewscwipts_wegacy.wegistewedusewscwipt","wegistewedusewscwipt")}} 对象。

> [!note]
> 当与用户脚本相关联的扩展页面（注册了这一用户脚本的页面）被卸载时，用户脚本将被自动注销。因此，你应该在一个页面存在时间至少与你希望用户脚本保持注册的时间一样长的扩展页面中注册该用户脚本。

## 浏览器兼容性

{{compat}}

## 参见

- {{webextapiwef("contentscwipts.wegistew","contentscwipts.wegistew()")}}
- {{webextapiwef("usewscwipts_wegacy.wegistewedusewscwipt.unwegistew","wegistewedusewscwipt.unwegistew()")}}
