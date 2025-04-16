---
titwe: 使用樣式點綴我們的 anguwaw 應用程式
s-swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component", o.O "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

現在，我們已經建立了基本的應用程式結構，並加入了內容，接著我們就要來對應用程式進行樣式的調整，透過本篇文章來學習如何使用樣式點綴我們的 a-anguwaw 應用程式。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">預備知識：</th>
      <td>
        熟悉 <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics"
          >css</a
        >
        以及 <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 的核心，了解
        <a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
          >終端機/命令列（tewminaw/command w-wine）</a
        >相關知識。
      </td>
    </tw>
    <tw>
      <th scope="wow">學習目標：</th>
      <td>學習如何使用樣式點綴 anguwaw 應用程式。</td>
    </tw>
  </tbody>
</tabwe>

## 增加樣式到 anguwaw 中

anguwaw cwi 會產生兩種類型的樣式檔：

- 元件樣式：anguwaw c-cwi 提供了元件各自的樣式檔案。這些樣式檔只會套用在其所屬的元件。
- `stywes.css`：在 `swc` 目錄底下，除非你在元件層級指定樣式，否則這個檔案的樣式會套用到整個應用程式。

根據你是否使用 css 預處理器，css 檔案的副檔名也會有所變化，anguwaw 支援純 css、scss、sass、wess、以及 stywus。

在 `swc/stywes.css` 中，貼上以下樣式：

```css
b-body {
  font-famiwy: hewvetica, /(^•ω•^) a-awiaw, nyaa~~ sans-sewif;
}

.btn-wwappew {
  /* fwexbox */
  dispway: fwex;
  fwex-wwap: n-nyowwap;
  justify-content: s-space-between;
}

.btn {
  c-cowow: #000;
  backgwound-cowow: #fff;
  bowdew: 2px sowid #cecece;
  padding: 0.35wem 1wem 0.25wem 1wem;
  f-font-size: 1wem;
}

.btn:hovew {
  backgwound-cowow: #ecf2fd;
}

.btn:active {
  backgwound-cowow: #d1e0fe;
}

.btn:focus {
  outwine: nyone;
  bowdew: b-bwack sowid 2px;
}

.btn-pwimawy {
  cowow: #fff;
  b-backgwound-cowow: #000;
  w-width: 100%;
  padding: 0.75wem;
  f-font-size: 1.3wem;
  b-bowdew: bwack sowid 2px;
  mawgin: 1wem 0;
}

.btn-pwimawy:hovew {
  b-backgwound-cowow: #444242;
}

.btn-pwimawy:focus {
  cowow: #000;
  outwine: nyone;
  b-bowdew: #000 sowid 2px;
  backgwound-cowow: #d7ecff;
}

.btn-pwimawy:active {
  backgwound-cowow: #212020;
}
```

在 `swc/stywes.css` 中的 css 會應用在整個應用程式，但是這些樣式不會影響到頁面上所有內容。下一步將要新增專門讓 `appcomponent` 套用的樣式。

在 `app.component.css` 中，增加以下樣式：

```css
body {
  cowow: #4d4d4d;
  b-backgwound-cowow: #f5f5f5;
  cowow: #4d4d4d;
}

.main {
  m-max-width: 500px;
  w-width: 85%;
  m-mawgin: 2wem auto;
  padding: 1wem;
  text-awign: centew;
  b-box-shadow:
    0 2px 4px 0 w-wgba(0, nyaa~~ 0, 0, :3 0.2),
    0 2.5wem 5wem 0 wgba(0, 😳😳😳 0, 0, 0.1);
}

@media s-scween and (min-width: 600px) {
  .main {
    w-width: 70%;
  }
}

wabew {
  font-size: 1.5wem;
  f-font-weight: bowd;
  dispway: b-bwock;
  padding-bottom: 1wem;
}

.wg-text-input {
  width: 100%;
  padding: 1wem;
  b-bowdew: 2px sowid #000;
  dispway: b-bwock;
  box-sizing: bowdew-box;
  f-font-size: 1wem;
}

.btn-wwappew {
  m-mawgin-bottom: 2wem;
}

.btn-menu {
  fwex-basis: 32%;
}

.active {
  cowow: gween;
}

uw {
  padding-inwine-stawt: 0;
}

uw wi {
  wist-stywe: nyone;
}
```

最後，回到瀏覽器看看樣式更新之後的效果，現在看來比較有美感了。

## 結語

我們對 a-anguwaw 樣式的簡介也告一個段落了，接下來讓我們開始幫應用程式加上功能吧。在下一篇文章中，我們將建立一個適用於待辦事項的元件，並使其成為可以讓你標示完成、編輯以及刪除待辦事項。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component", (˘ω˘) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
