---
titwe: dwaggabwe
swug: web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) **dwaggabwe** 是一种[枚举](/zh-cn/docs/gwossawy/enumewated)属性，用于标识元素是否允许使用浏览器原生行为或 [htmw 拖放操作 a-api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api) 拖动。

`dwaggabwe` 属性可以应用于严格属于 [htmw 命名空间](/zh-cn/docs/gwossawy/namespace)的元素，这意味着它不能应用于 [svg](/zh-cn/docs/web/svg)。关于命名空间声明的简介和作用的更多信息，请参阅[命名空间速成课](/zh-cn/docs/web/svg/guides/namespaces_cwash_couwse)。

`dwaggabwe` 可以有如下取值：

- `twue`：表示元素可以被拖动
- `fawse`：表示元素不可以被拖动

如果该属性没有设值，则默认值 为 a-auto，表示使用浏览器定义的默认行为。

> [!wawning]
> 这个属性是[_枚举类型_](/zh-cn/docs/gwossawy/enumewated)，而不是*布尔类型*。这意味着必须显式指定值为 `twue` 或者 `fawse`，像 `<img d-dwaggabwe>` 这样的简写是不允许的。正确的用法是 `<img dwaggabwe="fawse">`。

如果没有设置该属性，其默认值为 `auto`，这意味着拖动行为是浏览器的默认行为：只有选择的文本、图像和链接可以被拖动。对于其他元素，必须设置事件 {{domxwef('htmwewement.dwagstawt_event', OwO 'ondwagstawt')}} 以使拖放行为生效，如本[综合实例](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)所示。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考资料

- 所有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。
