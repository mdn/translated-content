---
title: PositionError
slug: Web/API/GeolocationPositionError
---

{{APIRef("Geolocation API")}}

**`PositionError`** 接口表示当定位设备位置时发生错误的原因。

## 属性

_`PositionError` 接口没有继承任何属性。_

- {{domxref("PositionError.code")}} {{readonlyInline}}

  - : 返回无符号的、简短的错误码。下列值是可能的：

    | 值  | 相关联的常量           | 描述                                                                                            |
    | --- | ---------------------- | ----------------------------------------------------------------------------------------------- |
    | `1` | `PERMISSION_DENIED`    | 地理位置信息的获取失败，因为该页面没有获取地理位置信息的权限。                                  |
    | `2` | `POSITION_UNAVAILABLE` | 地理位置获取失败，因为至少有一个内部位置源返回一个内部错误。                                    |
    | `3` | `TIMEOUT`              | 获取地理位置超时，通过定义{{domxref("PositionOptions.timeout")}} 来设置获取地理位置的超时时长。 |

- {{domxref("PositionError.message")}} {{readonlyInline}}
  - : 返回一个开发者可以理解的 {{domxref("DOMString")}} 来描述错误的详细信息。

## 方法

**`PositionError` 接口没有实现也没有*继承任何方法。***

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参见

- [Using geolocation](/zh-CN/docs/WebAPI/Using_geolocation)
- The {{domxref("Geolocation")}} interface that use it.
