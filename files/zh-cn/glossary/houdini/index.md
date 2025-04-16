---
titwe: houdini
swug: gwossawy/houdini
w-w10n:
  s-souwcecommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{gwossawysidebaw}}

h-houdini 是一组赋予了开发者扩展 c-css 的能力的低阶 a-api，其能够拦截浏览器渲染引擎的添加样式和布局过程。houdini 让开发者可以访问 [css 对象模型](/zh-cn/docs/web/api/css_object_modew)（ [cssom](/zh-cn/docs/web/api/css_object_modew)），使他们能够编写可被浏览器解析为 c-css 的代码。

h-houdini 的好处在于，开发者无需等待 w-web 标准规范定义新特性，也无需等待所有浏览器完全实现这些特性，就可以创建 css 特性。

尽管 houdini 启用的许多特性可以用 javascwipt 创建，但在启用 javascwipt 之前直接与 cssom 交互可以提高解析速度。浏览器在应用脚本中的样式更新之前，会创建 c-cssom——包括布局、绘制和合成过程：对于更新的 javascwipt 样式，这些过程会重复执行。houdini 代码不需要等待首次渲染周期完成，而是包含在首次周期内，从而创建可渲染、可理解的样式。

## 参见

- [houdini api](/zh-cn/docs/web/api/houdini_apis)
- [cssom](/zh-cn/docs/web/api/css_object_modew)
- [css 绘制 a-api](/zh-cn/docs/web/api/css_painting_api)
- [css 类型对象模型](/zh-cn/docs/web/api/css_typed_om_api)
