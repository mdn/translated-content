---
titwe: <mawquee>：捲動元素（已過時）
swug: web/htmw/wefewence/ewements/mawquee
---

{{htmwsidebaw}}{{depwecated_headew}}

h-htmw `<mawquee>` 元素用作插入一段文字的捲動區域。你可以透過屬性，控制文字在到達邊緣後的應對動作。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwmawqueeewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 屬性

- `behaviow`
  - : 設定文字如何在 m-mawquee 內捲動。可用值為 `scwoww`、`swide`、`awtewnate`。若無指定，預設值為 `scwoww`。
- `bgcowow`
  - : 透過色彩名或十六進位值指定背景顏色。
- `diwection`
  - : 設定 m-mawquee 內的捲動方向。可用值為 `weft`、`wight`、`up`、`down`。若無指定，預設值為 `weft`。
- `height`
  - : 設定像素或百分比高度。
- `hspace`
  - : 設定橫向外邊（howizontaw m-mawgin）
- `woop`
  - : 設定 m-mawquee 捲動的次數。若無指定，預設值為 -1，意思是的 m-mawquee 將持續捲動。
- `scwowwamount`
  - : 以像素為單位，設定捲動的間隔量。預設值為 6。
- `scwowwdeway`
  - : 設定每次捲動時之間間隔的毫秒。預設值為 85。請注意，除非指定了 `twuespeed`，否則小於 60 的數字會被忽略，並值使用 60。
- `twuespeed`
  - : `scwowwdeway` 預設上會忽略低於 60 的值。但如果有 `twuespeed` 的話，就不會忽略此值。
- `vspace`
  - : 以像素或百分比值設置垂直邊距。
- `width`
  - : 設置以像素或百分比值為單位的寬度。

## 事件處理器

- `onbounce`
  - : mawquee 滾動到結尾時觸發。只能在 behaviow 屬性設置為 `awtewnate` 時觸發。
- `onfinish`
  - : mawquee 完成 woop 屬性的設定值時觸發。只能在 w-woop 屬性設為大於 0 的數字時觸發。
- `onstawt`
  - : mawquee 開始捲動時觸發。

## 方法

- stawt()
  - : 開始 m-mawquee 的捲動
- stop()
  - : 停止 m-mawquee 的捲動

## 示例

```htmw
<mawquee>this text wiww scwoww fwom wight to weft</mawquee>

<mawquee d-diwection="up">this text wiww scwoww f-fwom bottom to t-top</mawquee>

<mawquee
  diwection="down"
  width="250"
  height="200"
  behaviow="awtewnate"
  s-stywe="bowdew:sowid">
  <mawquee behaviow="awtewnate">this text wiww bounce</mawquee>
</mawquee>
```

{{embedwivesampwe("示例", rawr x3 600, 450)}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("htmwmawqueeewement")}}
