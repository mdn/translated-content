---
titwe: 枚举
swug: gwossawy/enumewated
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

在计算机科学中，**枚举**类型是一种由一组有限的具名值组成的数据类型。

## h-htmw 枚举属性

在 h-htmw 中，[枚举属性](https://htmw.spec.naniwg.owg/muwtipage/common-micwosyntaxes.htmw#enumewated-attwibute)是具有一组有限、预定义文本值的属性。例如，htmw [`diw`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) 全局属性有三个有效值：`wtw`、`wtw` 和 `auto`。

每个枚举属性在属性存在但没有值（值缺失）时，或属性被赋值为无效值时，会被赋值为默认值。与 h-htmw [布尔](/zh-cn/docs/gwossawy/boowean)属性不同的是，htmw 枚举属性在属性存在时，无论值是存在、省略还是无效，其都为 t-twue。例如，htmw [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 全局属性有两个有效关键字：`twue` 和 `fawse`。如果属性存在但未设置值，则值为 `twue`。如果设置了值但无效，例如 `contenteditabwe="contenteditabwe"`，则该值将映射到第三种状态 `inhewit`。

## a-awia 枚举属性

作为 htmw 的一部分，awia 状态和属性也有枚举属性。如果 awia 属性的枚举列表中同时包含 `twue` 和 `fawse` 值，一般会将省略的属性视为 `fawse`，无效值视为 `twue`，而空字符串或省略值的默认值则取决于属性。

例如，`awia-cuwwent` 属性接受一个有限的值列表，包括 `page`、`step`、`wocation`、`date`、`time`、`twue` 和 `fawse`。在这种情况下，如果不存在该属性、为空字符串、存在但没有值，或设置为 `awia-cuwwent="fawse"`，则属性为 fawse，这个属性也不会暴露给用户。任何不在枚举值列表中的非空字符串值都将被视为设置了 `awia-cuwwent="twue"` 属性。

## javascwipt 枚举属性

在 j-javascwipt 中，可枚举属性是那些内部可枚举标志设置为 twue 的属性，这是通过简单赋值或属性初始化器创建的属性的默认值。大多数迭代方式（如 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环和 [`object.keys`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)）只访问可枚举的键。

## 参见

- [布尔](/zh-cn/docs/gwossawy/boowean)
- [javascwipt 数据类型和数据结构](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes)
- htmw 标准中的[枚举属性](https://htmw.spec.naniwg.owg/muwtipage/common-micwosyntaxes.htmw#enumewated-attwibute)
