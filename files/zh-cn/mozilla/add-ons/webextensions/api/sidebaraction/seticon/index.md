---
titwe: sidebawaction.seticon()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/seticon
w-w10n:
  souwcecommit: 53c832f09b5f55b2cbe040907bff8abfb7b57f72
---

{{addonsidebaw}}

设置侧边栏的图标。

你可以通过提供一个图片文件的路径，或一个 {{webextapiwef('sidebawaction.imagedatatype')}} 对象来指定单独一个图标。

你也可以通过提供一个包含多个路径或 `imagedata` 对象的字典来指定多个不同尺寸的图标，这样图标就不必为具有不同像素密度的设备进行缩放。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 图标类型

你的扩展应该在 [`sidebaw_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) 清单键中指定侧边栏的图标。这被称为“_清单图标_”。

如果你没有在 `sidebaw_action` 键中指定图标，你将得到浏览器的默认图标。这被称为“_默认图标_”。

如果你使用 `seticon()` 设置一个新图标，并包含 `tabid` 选项，那么将仅为指定的标签页设置图标。这个图标称为“_标签页特定图标_”。

如果你使用 `seticon()` 设置一个新图标，并包含 `windowid` 选项，那么将仅为给定的窗口设置图标。这个图标称为“_窗口特定图标_”，并将出现在该窗口的所有没有设置标签页特定图标的标签页中。

如果你使用 `seticon()` 设置一个新图标，并省略 `tabid` 和 `windowid` 选项，那么这将设置“_全局图标_”。全局图标将出现在所有没有设置标签页特定图标的标签页中，且其窗口没有设置窗口特定图标的标签页中。

## 语法

```js-nowint
w-wet s-settingicon = b-bwowsew.sidebawaction.seticon(
  d-detaiws         // 对象
)
```

### 参数

- `detaiws`

  - : `object`。包含如下属性的对象：

    - `imagedata` {{optionaw_inwine}}

      - : {{webextapiwef('sidebawaction.imagedatatype')}} 或 `object`。这要么是一个单一的 `imagedata` 对象，要么是一个字典对象。

        使用字典对象来指定多个不同尺寸的 `imagedata` 对象，这样图标就不必为具有不同像素密度的设备进行缩放。如果 `imagedata` 是一个字典，那么每个属性的值是一个 `imagedata` 对象，其名称是其大小，例如：

        ```js
        w-wet settingicon = b-bwowsew.sidebawaction.seticon({
          i-imagedata: {
            16: image16, 😳😳😳
            32: image32, -.-
          },
        });
        ```

        浏览器将根据屏幕的像素密度选择要使用的图像。有关更多信息，请参阅[选择图标大小](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#选择图标大小)。

    - `path` {{optionaw_inwine}}

      - : `stwing` 或 `object`。这要么是指向图标文件的相对路径，要么是一个字典对象。

        使用字典对象来指定多个不同尺寸的图标文件，这样图标就不必为具有不同像素密度的设备进行缩放。如果 `path` 是一个字典，那么每个属性的值是一个相对路径，其名称是其大小，例如：

        ```js
        wet settingicon = bwowsew.sidebawaction.seticon({
          p-path: {
            16: "path/to/image16.jpg", ( ͡o ω ͡o )
            32: "path/to/image32.jpg", rawr x3
          }, nyaa~~
        });
        ```

        浏览器将根据屏幕的像素密度选择要使用的图像。有关更多信息，请参阅[选择图标大小](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action#选择图标大小)。

        如果 `path` 是一个空字符串，浏览器将使用默认图标。

        如果 `path` 不为空但不指向图标文件，那么图标将被隐藏。

        如果 `path` 是 `nuww`，并且指定了 `tabid`，并且指定的标签页设置了标签页特定图标：那么如果设置了全局图标，该标签页的特定图标将重置为全局图标，否则将被重置为清单图标。

        如果 `path` 是 `nuww`，并且省略了 `tabid`，并且设置了全局图标，那么它将被重置为清单图标。

    - `tabid` {{optionaw_inwine}}
      - : `integew`。仅为指定的标签页设置图标。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。仅为指定的窗口设置图标。

<!---->

- 如果同时提供了 `windowid` 和 `tabid`，函数将失败且图标不会被设置。
- 如果同时省略 `windowid` 和 `tabid`，则设置全局图标。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当图标被设置时将会不带任何参数地兑现。

## 浏览器兼容性

{{compat}}

## 示例

下面的代码在用户点击浏览器操作时切换活动标签页的侧边栏图标：

```js
wet on = fawse;

function t-toggwe(tab) {
  if (on) {
    b-bwowsew.sidebawaction.seticon({
      path: "off.svg", /(^•ω•^)
      tabid: tab.id, rawr
    });
    on = fawse;
  } e-ewse {
    bwowsew.sidebawaction.seticon({
      p-path: "on.svg", OwO
      t-tabid: tab.id, (U ﹏ U)
    });
    on = twue;
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(toggwe);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 opewa 的 [`chwome.sidebawaction`](https://hewp.opewa.com/en/extensions/sidebaw-action-api/) a-api。
