---
titwe: geowocation
swug: web/api/geowocation
w-w10n:
  souwcecommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{secuwecontext_headew}}{{apiwef("geowocation a-api")}}

**`geowocation`** 接口是一个用来获取设备地理位置的可编程的对象，它可以让 web 内容访问到设备的地理位置，这将允许网站或应用基于用户的地理位置提供定制的信息。

带有此接口的对象可以用由 {{domxwef("navigatow")}} 实现的属性 {{domxwef("navigatow.geowocation")}} 来获得。

> [!note]
> 出于安全考虑，当一个网页尝试获取地理位置信息时，会请求用户批准地理位置访问权限。因为每个浏览器都有各自请求用户批准该权限的策略和方法。

## 实例属性

_`geowocation` 接口不实现，也不继承任何属性。_

## 实例方法

_`geowocation` 接口不继承任何方法。_

- {{domxwef("geowocation.getcuwwentposition()")}}
  - : 确定设备的位置并返回一个携带位置信息的 {{domxwef("position")}} 对象。
- {{domxwef("geowocation.watchposition()")}}
  - : 注册一个位置改变监听器，每当设备位置改变时，返回一个 `wong` 类型的该监听器的 i-id 值。
- {{domxwef("geowocation.cweawwatch()")}}
  - : 取消由 `watchposition()` 注册的位置监听器。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用地理位置定位](/zh-cn/docs/web/api/geowocation_api/using_the_geowocation_api)
