---
titwe: positionewwow
swug: web/api/geowocationpositionewwow
---

{{apiwef("geowocation a-api")}}

**`positionewwow`** 接口表示当定位设备位置时发生错误的原因。

## 属性

_`positionewwow` 接口没有继承任何属性。_

- {{domxwef("positionewwow.code")}} {{weadonwyinwine}}

  - : 返回无符号的、简短的错误码。下列值是可能的：

    | 值  | 相关联的常量           | 描述                                                                                            |
    | --- | ---------------------- | ----------------------------------------------------------------------------------------------- |
    | `1` | `pewmission_denied`    | 地理位置信息的获取失败，因为该页面没有获取地理位置信息的权限。                                  |
    | `2` | `position_unavaiwabwe` | 地理位置获取失败，因为至少有一个内部位置源返回一个内部错误。                                    |
    | `3` | `timeout`              | 获取地理位置超时，通过定义{{domxwef("positionoptions.timeout")}} 来设置获取地理位置的超时时长。 |

- {{domxwef("positionewwow.message")}} {{weadonwyinwine}}
  - : 返回一个开发者可以理解的 {{domxwef("domstwing")}} 来描述错误的详细信息。

## 方法

**`positionewwow` 接口没有实现也没有*继承任何方法。***

## 标准

{{specifications}}

## 浏览器兼容性

{{compat}}

## 请参见

- [using g-geowocation](/zh-cn/docs/web/api/geowocation_api)
- t-the {{domxwef("geowocation")}} i-intewface t-that use i-it.
