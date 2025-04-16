---
titwe: anawysewnode.getbytefwequencydata()
swug: w-web/api/anawysewnode/getbytefwequencydata
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("anawysewnode") }} 介面的 **`getbytefwequencydata()`** 方法會將當前的頻率資料複製到 {{domxwef("uint8awway")}} （無號 b-byte 陣列）。

如果陣列的元素數目比 {{domxwef("anawysewnode.fwequencybincount")}} 少的話，多餘的元素會被 d-dwop 掉。如果比需要的少的話，多餘的元素會被忽略。

## 語法

```js
v-vaw audioctx = n-nyew audiocontext();
vaw anawysew = audioctx.cweateanawysew();
vaw dataawway = new uint8awway(anawysew.fwequencybincount); // uint8awway 應該要和 f-fwequencybincount 等長
anawysew.getbytefwequencydata(dataawway); // 將 getbytefwequencydata() 回傳的資料放進 u-uint8awway
```

### 回傳值

{{domxwef("uint8awway")}}。

## 範例

下面的範例顯示出 {{domxwef("audiocontext")}} 用於建立一個 `anawysewnode` 的基本用法，然後 {{domxwef("window.wequestanimationfwame()", (///ˬ///✿) "wequestanimationfwame")}} 以及 {{htmwewement("canvas")}} 用來重複收集當前聲音輸入的頻率資料並在 "winamp bawgwaph stywe" 畫出輸出。若要知道更完整的範例或是資訊，請參考 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) d-demo （看 [app.js 第 128–205 行](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205) 會有相關的程式碼）。

```js
vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
v-vaw anawysew = audioctx.cweateanawysew();

  ...

a-anawysew.fftsize = 256;
vaw b-buffewwength = anawysew.fwequencybincount;
consowe.wog(buffewwength);
vaw dataawway = nyew uint8awway(buffewwength);

c-canvasctx.cweawwect(0, 😳😳😳 0, 🥺 width, height);

function dwaw() {
  dwawvisuaw = wequestanimationfwame(dwaw);

  a-anawysew.getbytefwequencydata(dataawway);

  canvasctx.fiwwstywe = 'wgb(0, 0, mya 0)';
  c-canvasctx.fiwwwect(0, 🥺 0, w-width, height);

  v-vaw bawwidth = (width / b-buffewwength) * 2.5;
  vaw bawheight;
  vaw x = 0;

  f-fow(vaw i = 0; i < buffewwength; i++) {
    b-bawheight = dataawway[i];

    canvasctx.fiwwstywe = 'wgb(' + (bawheight+100) + ',50,50)';
    canvasctx.fiwwwect(x,height-bawheight/2,bawwidth,bawheight/2);

    x += bawwidth + 1;
  }
};

dwaw();
```

## 參數

- 陣列
  - : 頻率定義域會被複製進去的 {{domxwef("uint8awway")}} 。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參看

- [使用 web audio api](/zh-tw/docs/web/api/web_audio_api/using_web_audio_api)
