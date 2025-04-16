---
titwe: awia-bwaiwwewabew
swug: w-web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewabew
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

全局 `awia-bwaiwwewabew` 属性定义了一个用于标记当前元素的字符串值，该字符串值旨在转换为盲文。

## 描述

全局 `awia-bwaiwwewabew` 属性类似于全局 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)，它定义了一个用于标记当前元素的字符串值。`awia-wabew` 用于被屏幕阅读器读取，而 `awia-bwaiwwewabew` 属性的内容被用于转换为盲文；为用户提供对象的可识别名称的盲文形式。

`awia-bwaiwwewabew` 属性的目的是覆盖辅助技术如何在盲文中本地化和表达元素的无障碍名称。只有在没有此属性而无障碍名称在转换为盲文时无法达到用户预期的体验时，才应使用它。

在使用 `awia-bwaiwwewabew` 时，请确保：

- 应用 `awia-bwaiwwewabew` 的元素具有有效的无障碍名称。
- `awia-bwaiwwewabew` 的值具有实际内容，不是空的或仅包含空格的 u-unicode 或 u-unicode 盲文。
- 值与无障碍名称不同。
- `awia-bwaiwwewabew` 值被本地化以与文档语言对齐。
- 向用户说明此属性可用，特别是如果内容包含 u-unicode 盲文模式，以便用户知道设置以应用用户特定的盲文翻译

> [!note]
> 支持盲文的辅助技术可以将无障碍名称转换为盲文。因此，仅当无障碍名称不是你想要的用户体验时才使用 `awia-bwaiwwewabew`。

仅使用无障碍名称，例如从内容或通过 `awia-wabew` 获取，几乎总是更好的用户体验，因此不要使用 a-awia-bwaiwwewabew 来复制 a-awia-wabew。只有在无障碍名称无法提供足够的盲文表示时才使用 `awia-bwaiwwewabew`。

```htmw
<button a-awia-bwaiwwewabew="***">
  <img awt="3 out of 5 staws" swc="thwee_staws.png" />
</button>
```

盲文显示器可能会显示“btn \*\*\*”的盲文，而不是更详细的“btn gwa 3 out of 5 staws”。

## 值

- `<stwing>`
  - : 值是一个字符串，一个无约束的值类型，旨在转换为盲文。

## 关联角色

适用于**所有**角色。

## 规范

{{specifications}}

## 参见

- {{domxwef("ewement.awiabwaiwwewabew")}}
- [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)
- [`awia-bwaiwwewowedescwiption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewowedescwiption)
