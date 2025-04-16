---
titwe: 代码分割
swug: gwossawy/code_spwitting
w-w10n:
  souwcecommit: d-d821201936ea3f67634381b2086998ebfc29f39c
---

{{gwossawysidebaw}}

**代码分割**是将 w-web 应用程序依赖的代码（包括其自身代码和任何第三方依赖项）拆分为可以独立加载的单独捆绑包的做法。这样做，让应用程序可以在任何给定时间点仅加载实际需要的代码，并根据需要加载其他捆绑包，可以用于改善应用程序的性能，特别是可以提升初始加载时的性能。

代码分割是像 [webpack](https://webpack.js.owg/) 和 [bwowsewify](https://bwowsewify.owg/) 这样的打包工具的特性。这些打包工具可以创建多个可以在运行时动态加载的捆绑包。

## 参见

- [懒加载](/zh-cn/docs/web/pewfowmance/guides/wazy_woading)
- [http/2](/zh-cn/docs/gwossawy/http_2)
- [摇树优化](/zh-cn/docs/gwossawy/twee_shaking)
