---
title: MediaQueryList
slug: Web/API/MediaQueryList
---

{{APIRef("CSSOM View")}}{{SeeCompatTable}}

`MediaQueryList` 物件維護一組針對 {{ domxref("document") }} 的 [media querie](/zh-TW/docs/CSS/Media_queries) , 並且當 media querie 相對應的文件狀態改變時，觸發註冊的事件處理器通知之。

MediaQueryList 物件讓我們不用一直定期去偵測，而是直接去觀察文件的狀態變化。

## Method overview

| `void addListener(MediaQueryListListener listener);`    |
| ------------------------------------------------------- |
| `void removeListener(MediaQueryListListener listener);` |

## Properties

| Property  | Type        | Description                                                                                             |
| --------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `matches` | `boolean`   | `true` 當 {{ domxref("document") }} 目前狀態符合 media query list 所維護的條件; 否則 false。 唯獨**。** |
| `media`   | `DOMString` | 序列化 (serialized) 的 media query list.                                                                |

## Methods

### addListener()

添加一個新的事件處理器 (listener)，若 listener 已存在則無作用。

```plain
void addListener(
  MediaQueryListListener listener
);
```

#### Parameter (for addListener method)

- `listener`
  - : 當 media query 對應的狀態改變時所觸發的事件處理函數 ({{ domxref("MediaQueryListListener") }})。

### removeListener()

移除一個事件處理器 (listener)，若 listener 不存在則無作用。

```plain
void removeListener(
  MediaQueryListListener listener
);
```

#### Parameter (for removeListener method)

- `listener`
  - : 欲移除的事件處理函數 ({{ domxref("MediaQueryListListener") }})。

## 瀏覽器相容性

{{Compat}}

## 規範標準

- [The CSSOM View Module: The MediaQueryList Interface](http://dev.w3.org/csswg/cssom-view/#the-mediaquerylist-interface)

## 延伸閱讀

- [Media queries](/zh-TW/docs/CSS/Media_queries)
- [Using media queries from code](/zh-TW/docs/CSS/Using_media_queries_from_code)
- {{ domxref("window.matchMedia()") }}
- {{ domxref("MediaQueryListListener") }}
