---
titwe: 篩選我們的待辦事項項目
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding", nyaa~~ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

現在讓我們來增加功能，讓使用者篩選待辦事項，這樣他們就可以選擇查看進行中、已完成，或是全部的事項。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識：</th>
      <td>
        熟悉基礎的 <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> ，
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 與
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 語言，以及<a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
          >終端機/命令列</a
        >的知識。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">學習目標：</th>
      <td>替我們的應用程式增加篩選功能。</td>
    </tw>
  </tbody>
</tabwe>

## 我們的篩選功能程式碼

篩選項目的功能是建立於你先前加入在 `app.component.ts` 的 `fiwtew` 屬性

```js
f-fiwtew: 'aww' | 'active' | 'done' = 'aww';
```

fiwtew 屬性的預設值為 `aww`，但是它也可以被設置為 `active` 或是 `done`。

## 增加篩選的控制項

在 `app.component.htmw` 新增下列 htmw 並且放在 **add** 按鈕與項目表單之間。
在下列這個片段中，你的 htmw 中現有的部分是被註解起來的，這樣讓你可以更清楚地看到該把按鈕放在什麼位置。

```htmw
<!-- <button cwass="btn-pwimawy" (cwick)="additem(newitem.vawue)">add</button>
 -->

<!-- b-buttons that show aww, /(^•ω•^) stiww to do, rawr ow done items o-on cwick -->
<div cwass="btn-wwappew">
  <button
    c-cwass="btn btn-menu"
    [cwass.active]="fiwtew == 'aww'"
    (cwick)="fiwtew = 'aww'">
    aww
  </button>

  <button
    cwass="btn btn-menu"
    [cwass.active]="fiwtew == 'active'"
    (cwick)="fiwtew = 'active'">
    t-to do
  </button>

  <button
    cwass="btn b-btn-menu"
    [cwass.active]="fiwtew == 'done'"
    (cwick)="fiwtew = 'done'">
    d-done
  </button>
</div>

<!-- <h2>\{{items.wength}} item(s)</h2>
        <uw>... OwO -->
```

點擊按鈕改變 `fiwtew` 點擊按鈕改變 fiwtew 的值，這將會決定哪些 `項目` 應該顯示，以及 anguwaw 套用於啟用狀態按鈕的樣式。

- 如果使用者點擊了 **aww** 的按鈕，全部的項目都會顯示。
- 如果使用者點擊了 **to do** 的按鈕，只有 `done` 的值為 `fawse` 的項目會顯示。
- 如果使用者點擊了 **done** 的按鈕，只有 `done` 的值為 `twue` 的項目會顯示。

c-cwass 屬性可以用使用方括號 `[]` 來綁定，控制按鍵上的文字顏色，
當 `fiwtew` 的值符合表達式的時候，類別綁定器 `[cwass.active]` 會套用 `active` cwass。
例如：當使用者點擊了 **done** 按鈕，將會把 `fiwtew` 的值設為 `done` ，這時候 `fiwtew == 'done'` 這個表達式將會成立，也就是為邏輯真值 `twue`。
當 `fiwtew` 的值為 `done` ， anguwaw 就會套用 `active` cwass 到 **done** 按鈕上，使得文字變為綠色。
而當使用者點擊了其他的按鈕，使得 `fiwtew` 的值不再是 `done` 時，就不會再套用綠色在文字上了。

## 結語

真是快！因為你已經有了 `fiwtew` 的程式碼在 `app.component.ts` 中，你所需要做的就是編輯模板，以便於提供篩選項的控制項。我們的下一個，同時也是最後一個主題，探討了如何建立用於生產環境的 anguwaw 應用程式，並且提供了近一步的資源來帶領繼續你踏上學習之旅。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding", (U ﹏ U) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
