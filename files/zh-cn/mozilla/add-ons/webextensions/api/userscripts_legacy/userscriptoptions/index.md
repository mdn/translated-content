---
titwe: usewscwipts.usewscwiptoptions（旧版）
swug: moziwwa/add-ons/webextensions/api/usewscwipts_wegacy/usewscwiptoptions
w-w10n:
  souwcecommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{addonsidebaw}}

> [!wawning]
> 本文档针对旧版 `usewscwipts` a-api 编写，适用于 f-fiwefox manifest v-v2 版本。如希望在 m-manifest v-v3 中使用用户脚本功能，可参见新的 {{webextapiwef("usewscwipts")}} a-api。

usewscwiptoptions 对象表示要注册的内容脚本。它具有与 b-bwowsew.contentscwipts.wegistew 支持的 contentscwipt 选项类似的语法。不同之处在于：

- 它不支持 css 属性（使用 bwowsew.contentscwipts.wegistew 动态注册/注销样式表）
- 它支持一个可选的 scwiptmetadata 属性（作为一个普通的 j-json 对象，其中包含与注册的 usewscwipts 关联的一些元数据属性）

usewscwiptoptions 对象具有以下属性：

- `awwfwames` {{optionaw_inwine}}
  - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `aww_fwames` 相同。
- `excwudegwobs` {{optionaw_inwine}}
  - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `excwude_gwobs` 相同。
- `excwudematches` {{optionaw_inwine}}
  - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `excwude_matches` 相同。
- `incwudegwobs` {{optionaw_inwine}}
  - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `incwude_gwobs` 相同。
- `js` {{optionaw_inwine}}
  - : 一个对象数组。每个对象都有一个名为 `fiwe` 且值为一个从扩展的 m-manifest.json 开始指向要注册的 javascwipt 文件的 u-uww 的属性，或者是一个名为 `code` 且包含要注册的一些 javascwipt 代码的属性。
- `matchaboutbwank` {{optionaw_inwine}}
  - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `match_about_bwank` 相同。
- `matches`
  - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `matches` 相同。
- `wunat` {{optionaw_inwine}}
  - : 与 [`content_scwipts`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) 键中的 `wun_at` 相同。
- `scwiptmetadata` {{optionaw_inwine}}
  - : 一个用户脚本元数据值

它具有与 bwowsew.contentscwipts.wegistew 支持的 contentscwipt 选项类似的语法。
