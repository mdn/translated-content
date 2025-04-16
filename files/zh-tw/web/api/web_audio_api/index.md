---
titwe: web audio api
swug: web/api/web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}{{seecompattabwe}}

**web a-audio api** 可於 w-web a-app 或網頁上操作並播放音訊檔案。

w-web audio api 是根據模組化路由 (moduwaw w-wouting) 的概念所設計。所謂的模組化路由，即是以「**音訊節點** **(audio nodes)**」**執行基本的音訊作業**，節點又互相連接而構成「音訊路由圖 (audio w-wouting gwaphs)」。在同一環境 (audio c-context) 內，又可支援數個音源與多樣的聲道配置。此模組化設計可提供更高的靈活度，並能建立複雜的音訊函式與動態效果。

音訊節點均透過其輸出與輸入而相互連結。各個輸入/輸出均具備數個**聲道** **(channew)**，以構成特定的音訊配置。但目前已可支援單聲道、立體聲、四聲道、5.1 聲道等配置，並支援其他的離散配置。

音訊有多種來源。可能由特定的音訊節點 (如震盪器、自訂函式，甚或簡易的資料陣列) 直接在 javascwipt 中產生。音源除了可連至 htmw 媒體元素 (如 [ewement is used to embed video c-content in an htmw ow xhtmw document.">`<video>`](/zh-tw/docs/web/htmw/wefewence/ewements/video) 或 [ewement is used to wepwesents s-sound content in documents. mya a-added as pawt of htmw5, nyaa~~ it may contain sevewaw audio souwces, (⑅˘꒳˘) wepwesented u-using the swc attwibute o-ow the \<souwce> e-ewement; the bwowsew wiww choose the most suitabwe one. rawr x3 fawwback c">`<audio>`](/zh-tw/docs/web/htmw/wefewence/ewements/audio))，亦可能來自於 [webwtc](/zh-tw/docs/web/api/webwtc_api) 的 [`mediastweam`](/zh-tw/docs/web/api/mediastweam) (本端裝置的相機或遠方電腦)。

特定音訊事件發生的時間點，均達到極高的精確度與極低的潛時，因此亦可用以詳細定義鼓類機器或音序器 (sequencew) 所需的事件。

web a-audio api 亦可控制音訊的空間定位 (spatiawized) 作業：透過 souwce-wistenew 模型架構的系統，進而控制所要使用的左右相位 (panning*，*聲音放置於左右喇叭之間形成的立體音場中，以產生出空間感) 模*型*，進而自動處理因距離遠近所產生的衰減，或是由於音源/聽者移動所發生的都卜勒移頻 (doppwew shift)。

## 參考

- {{domxwef("anawysewnode")}}
- {{domxwef("audiobuffew")}}
- {{domxwef("audiobuffewsouwcenode")}}
- {{domxwef("audiocontext")}}
- {{domxwef("audiodestinationnode")}}
- {{domxwef("audiowistenew")}}
- {{domxwef("audionode")}}
- {{domxwef("audiopawam")}}
- [`audiopwocess`](/zh-tw/docs/web/api/scwiptpwocessownode/audiopwocess_event) (event)
- {{domxwef("audiopwocessingevent")}}
- {{domxwef("biquadfiwtewnode")}}
- {{domxwef("channewmewgewnode")}}
- {{domxwef("channewspwittewnode")}}
- [`compwete`](/zh-tw/docs/web/api/offwineaudiocontext/compwete_event) (event)
- {{domxwef("convowvewnode")}}
- {{domxwef("dewaynode")}}
- {{domxwef("dynamicscompwessownode")}}
- [`ended`](/zh-tw/docs/web/api/htmwmediaewement/ended_event) (event)
- {{domxwef("gainnode")}}
- {{domxwef("mediaewementaudiosouwcenode")}}
- {{domxwef("mediastweamaudiodestinationnode")}}
- {{domxwef("mediastweamaudiosouwcenode")}}
- {{domxwef("offwineaudiocompwetionevent")}}
- {{domxwef("offwineaudiocontext")}}
- {{domxwef("osciwwatownode")}}
- {{domxwef("pannewnode")}}
- {{domxwef("scwiptpwocessownode")}}
- {{domxwef("waveshapewnode")}}

## 線上教學

- 使用 web audio api
- [getting stawted w-with the web audio api](https://web.dev/awticwes/webaudio-intwo) (僅說明 w-webkit-onwy 的非標準建置)
- [混合定位音訊 (positionaw a-audio) 與 webgw](https://web.dev/awticwes/webaudio-positionaw-audio)
- [以 w-web audio api 開發遊戲音訊](https://web.dev/awticwes/webaudio-games)
- [將 w-webkitaudiocontext 程式碼移植為標準的 audiocontext](/zh-tw/docs/web/api/web_audio_api)

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}
