---
title: <time>
slug: Web/HTML/Reference/Elements/time
---

**HTML `<time>` element** 用以表示時間，可以是 24 小時制時間或以[公曆](https://zh.wikipedia.org/zh-tw/%E5%85%AC%E5%8E%86)紀年的日期（日期可以添加時間和時區的資訊）

此 element 旨在以機器可讀的格式顯示時間。這能幫助使用者代理調度使用者的日期。

> [!NOTE]
> 此 element 不適合用在「不確定正確時間」和「時間為西元前（日期的計算會出現錯誤）」的情況。

| [內容分類](/zh-TW/docs/Web/HTML/Guides/Content_categories) | [Flow content](/zh-TW/docs/Web/HTML/Guides/Content_categories#flow_content), [phrasing content](/zh-TW/docs/Web/HTML/Guides/Content_categories#phrasing_content), palpable content. |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允許之內容                                                 | [Phrasing content](/zh-TW/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                                                                                |
| 省略標籤                                                   | 不可。起始標籤和結束標籤是強制必要的                                                                                                                                                |
| 可接受的副 elements                                        | 任何接受 phrasing content 的 element。                                                                                                                                              |
| DOM interface                                              | {{domxref("HTMLTimeElement")}}                                                                                                                                                      |

## Attributes

和其他 HTML elements 一樣，接受所有 [global attributes](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `datetime`
  - : 此 attribute 用以表示日期或時間，其格式必須是[有效的日期/時間格式](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#common.data.datetime)。若其值不正確，則 element 就不會有關連的 time stamp.

## 示例

### Simple example

#### HTML

```html
<p>The concert starts at <time>20:00</time>.</p>
```

#### Output

{{ EmbedLiveSample('Simple_example', 250, 60) }}

### `datetime` example

#### HTML

```html
<p>
  The concert took place on <time datetime="2001-05-15T19:00">May 15</time>.
</p>
```

#### Output

{{ EmbedLiveSample('Datetime_example', 250, 60) }}

## 規格

{{Specifications}}

## 瀏覽器支援度

{{Compat}}

## 延伸閱讀

- The {{HTMLElement("data")}} element, allowing to signal other kind of values.
