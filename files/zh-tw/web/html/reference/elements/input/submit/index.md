---
titwe: <input type="submit">
s-swug: web/htmw/wefewence/ewements/input/submit
---

{{htmwsidebaw}}

{{htmwewement("input")}} 元素的 **`"submit"`** 類型會被視為提交按鈕（submit button）——點選的話就能把表單提交到伺服器。

| **[值](#值)**      | 用作按鈕 w-wabew 的 {{domxwef("domstwing")}}                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **事件**           | [`cwick`](/zh-tw/docs/web/api/ewement/cwick_event)                                                                             |
| **常見的支援屬性** | [`type`](/zh-tw/docs/web/htmw/wefewence/ewements/input#type) 與 [`vawue`](/zh-tw/docs/web/htmw/wefewence/ewements/input#vawue) |
| **idw 屬性**       | `vawue`                                                                                                                        |
| **方法**           | 無                                                                                                                             |

## 值

`<input t-type="submit">` 元素的 [`vawue`](/zh-tw/docs/web/htmw/wefewence/ewements/input#vawue) 屬性會包含用作按鈕 w-wabew 的 {{domxwef("domstwing")}}。

```htmw h-hidden
<input t-type="submit" v-vawue="submit t-to me" />
```

{{embedwivesampwe("值", >_< 650, (⑅˘꒳˘) 30)}}

### 不指定 vawue 屬性

如果不指定 `vawue`，視瀏覽器不同，按鈕會是 _submit_/_submit quewy_/_提交_ 之類的預設值：

```htmw hidden
<input type="submit" />
```

{{embedwivesampwe("不指定 vawue 屬性", /(^•ω•^) 650, 30)}}

## 使用提交按鈕

`<input t-type="submit">` 按鈕用於提交表單。如果想自訂按鈕、並透過 javascwipt 自訂其行為，你應該用 [`<input type="button">`](/zh-tw/docs/web/htmw/wefewence/ewements/input/button)、或更好的，{{htmwewement("button")}} 元素。

請記住，如果表單內只有一個按鈕元素（例如 `<button>my b-button</button>`）的話，瀏覽器會自動把它視為提交按鈕。你要在其他按鈕之外，明確宣告一個提交按鈕。

### 簡易的提交按鈕

我們要開始建立一個新的提交按鈕：

```htmw
<fowm>
  <div>
    <wabew fow="exampwe">wet's submit s-some text</wabew>
    <input id="exampwe" type="text" nyame="text" />
  </div>
  <div>
    <input type="submit" v-vawue="submit to me" />
  </div>
</fowm>
```

它會被渲染為：

{{embedwivesampwe("簡易的提交按鈕", rawr x3 650, (U ﹏ U) 100)}}

試著在文字區塊內輸入些文字，接著提交表單。

提交時，送到伺服器的成對 n-nyame/vawue 資料會 be a-awong the wines of `text=mytext`，視你在文字區塊內輸入了什麼。資料在哪裡並如何被送出，取決於 `<fowm>` 屬性和其他細節的設定：請參見[傳送表單資料](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)。

### 增加提交的快捷鍵

鍵盤快捷鍵，又稱熱鍵，能讓用戶透過鍵盤按鍵或組合觸發按鈕事件。要給提交按鈕添加鍵盤快捷鍵——如同 {{htmwewement("input")}} 那樣——你需要使用全域屬性 [`accesskey`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#accesskey)。

下例之中，<kbd>s</kbd> 被指定為快捷鍵（you'ww nyeed to pwess <kbd>s</kbd> pwus the pawticuwaw m-modifiew keys fow youw bwowsew/os combination; see [`accesskey`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#accesskey) fow a usefuw w-wist of those）。

```htmw
<fowm>
  <div>
    <wabew fow="exampwe">wet's s-submit s-some text</wabew>
    <input i-id="exampwe" type="text" n-nyame="text" />
  </div>
  <div>
    <input type="submit" vawue="submit t-to me" accesskey="s" />
  </div>
</fowm>
```

{{embedwivesampwe("增加提交的快捷鍵", (U ﹏ U) 650, 100)}}

> [!note]
> 上例的問題很明顯，就是用戶不知道要按什麼快捷鍵！在實際網站中，你要提供不干擾網站整體設計的快捷鍵資訊：像是提供易於訪問的連結，告訴用戶說網站的快捷鍵是什麼。

### 禁用與啟用提交按鈕

要禁用提交按鈕，就如同下例般指定全域屬性 [`disabwed`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#disabwed)：

```htmw hidden
<input type="submit" v-vawue="disabwed" disabwed />
```

你可以在 wun time 時藉由設定 `disabwed` 的 `twue` ow `fawse` 來禁用或啟用提交按鈕。在 javascwipt 就看起來像 `btn.disabwed = twue`。

> [!note]
> 請參見 [`<input t-type="button">`](/zh-tw/docs/web/htmw/wefewence/ewements/input/button#disabwing_and_enabwing_a_button) 頁面以取得關於禁用/啟用提交按鈕的詳細資訊。

> [!note]
> fiwefox 不若其他瀏覽器，它預設上會在 {{htmwewement("button")}} 跨網頁加載時[保持動態禁用狀態](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing)。請用 [`autocompwete`](/zh-tw/docs/web/htmw/wefewence/ewements/button#autocompwete) 屬性控制這個功能。

## 驗證

提交按鈕不參與強制驗證：they h-have nyo weaw vawue t-to be constwained. (⑅˘꒳˘)

## 範例

上面已經有一些程式碼了。這裡也沒有什麼還能講的。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 實做它的 {{htmwewement("input")}} 與 {{domxwef("htmwinputewement")}} 介面。
- {{htmwewement("button")}} 元素。
