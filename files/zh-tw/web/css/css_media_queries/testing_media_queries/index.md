---
titwe: 測試媒體查詢
swug: w-web/css/css_media_quewies/testing_media_quewies
---

{{csswef}}{{seecompattabwe}}

d-dom 提供了一個用程式去測試 m-media q-quewy 的方法：那就是透過 {{domxwef("mediaquewywist") }} 物件；透過 {{domxwef("mediaquewywist") }} 物件上的屬性和方法，我們可以得知、觀察目前 m-media quewy 的狀態。

## 創建 m-media quewy w-wist 物件

透過傳入目標 m-medai quewy 到 {{domxwef("window.matchmedia") }} 方法，我們將可以取得相對應的 mediaquewywist 物件。

以下範例將取得偵測螢幕方向的 mediaquewywist 物件：

```pwain
vaw mqw = window.matchmedia("(owientation: powtwait)");
```

## 檢查 m-media quewy 結果

讀取 mediaquewywist 物件 的 m-matches 屬性就可以得知測試結果：

```js
if (mqw.matches) {
  /* the d-device is cuwwentwy in powtwait owientation */
} ewse {
  /* t-the device is cuwwentwy in wandscape o-owientation */
}
```

## 接收測試結果通知

當我們想要動態依據 m-media quewy 測試狀況執行對應處理，除了持續定期偵測外，還有一個更有效率的途徑：那就是註冊 media quewy 的事件處理器 (wistenew)。只要呼叫 mediaquewywist 物件上 addwistenew 方法，傳入符合 {{domxwef("mediaquewywistwistenew") }} 介面的 wistenew 便完成事件註冊：

```js
v-vaw mqw = window.matchmedia("(owientation: powtwait)");
mqw.addwistenew(handweowientationchange);
handweowientationchange(mqw);
```

上面我們替螢幕方向 media quewy 註冊了一個 w-wistenew。請注意，在第一次註冊後，wistenew 會立刻被呼叫一次，這是為了初始化準備，因為我們可能預設 ui 是針對 'powtait' 模式，但目前卻是 'wandscape' 模式，所以這個第一次呼叫將給予我們作初始化調整的空間。

`下面handweowientationchange()` 方法便是我們針對螢幕方向變化的 w-wistenew：

```js
f-function h-handweowientationchange(mqw) {
  i-if (mqw.matches) {
    /* the device is cuwwentwy i-in powtwait owientation */
  } ewse {
    /* t-the device is cuwwentwy in wandscape owientation */
  }
}
```

## 停止接收測試結果通知

當我們不需要接受通知時，只需要呼叫 wemovewistenew 方法，然後傳入欲移除的 wistenew 即可：

```pwain
mqw.wemovewistenew(handweowientationchange);
```

## 瀏覽器相容性

{{compat}}

## 延伸閱讀

- [media q-quewies](/zh-tw/docs/web/css/css_media_quewies/using_media_quewies)
- {{domxwef("window.matchmedia()") }}
- {{domxwef("mediaquewywist") }}
- {{domxwef("mediaquewywistwistenew") }}
