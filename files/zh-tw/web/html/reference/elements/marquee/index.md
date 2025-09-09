---
title: <marquee>：捲動元素（已過時）
slug: Web/HTML/Reference/Elements/marquee
---

{{Deprecated_Header}}

HTML `<marquee>` 元素用作插入一段文字的捲動區域。你可以透過屬性，控制文字在到達邊緣後的應對動作。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{DOMxRef("HTMLMarqueeElement")}}</td>
    </tr>
  </tbody>
</table>

## 屬性

- `behavior`
  - : 設定文字如何在 marquee 內捲動。可用值為 `scroll`、`slide`、`alternate`。若無指定，預設值為 `scroll`。
- `bgcolor`
  - : 透過色彩名或十六進位值指定背景顏色。
- `direction`
  - : 設定 marquee 內的捲動方向。可用值為 `left`、`right`、`up`、`down`。若無指定，預設值為 `left`。
- `height`
  - : 設定像素或百分比高度。
- `hspace`
  - : 設定橫向外邊（horizontal margin）
- `loop`
  - : 設定 marquee 捲動的次數。若無指定，預設值為 -1，意思是的 marquee 將持續捲動。
- `scrollamount`
  - : 以像素為單位，設定捲動的間隔量。預設值為 6。
- `scrolldelay`
  - : 設定每次捲動時之間間隔的毫秒。預設值為 85。請注意，除非指定了 `truespeed`，否則小於 60 的數字會被忽略，並值使用 60。
- `truespeed`
  - : `scrolldelay` 預設上會忽略低於 60 的值。但如果有 `truespeed` 的話，就不會忽略此值。
- `vspace`
  - : 以像素或百分比值設置垂直邊距。
- `width`
  - : 設置以像素或百分比值為單位的寬度。

## 事件處理器

- `onbounce`
  - : marquee 滾動到結尾時觸發。只能在 behavior 屬性設置為 `alternate` 時觸發。
- `onfinish`
  - : marquee 完成 loop 屬性的設定值時觸發。只能在 loop 屬性設為大於 0 的數字時觸發。
- `onstart`
  - : marquee 開始捲動時觸發。

## 方法

- start()
  - : 開始 marquee 的捲動
- stop()
  - : 停止 marquee 的捲動

## 示例

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate">This text will bounce</marquee>
</marquee>
```

{{EmbedLiveSample("示例", 600, 450)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{DOMxRef("HTMLMarqueeElement")}}
