---
title: Web Audio API
slug: Web/API/Web_Audio_API
---

{{DefaultAPISidebar("Web Audio API")}}{{SeeCompatTable}}

**Web Audio API** 可於 Web App 或網頁上操作並播放音訊檔案。

Web Audio API 是根據模組化路由 (Modular routing) 的概念所設計。所謂的模組化路由，即是以「**音訊節點** **(Audio nodes)**」**執行基本的音訊作業**，節點又互相連接而構成「音訊路由圖 (Audio routing graphs)」。在同一環境 (Audio context) 內，又可支援數個音源與多樣的聲道配置。此模組化設計可提供更高的靈活度，並能建立複雜的音訊函式與動態效果。

音訊節點均透過其輸出與輸入而相互連結。各個輸入/輸出均具備數個**聲道** **(Channel)**，以構成特定的音訊配置。但目前已可支援單聲道、立體聲、四聲道、5.1 聲道等配置，並支援其他的離散配置。

音訊有多種來源。可能由特定的音訊節點 (如震盪器、自訂函式，甚或簡易的資料陣列) 直接在 JavaScript 中產生。音源除了可連至 HTML 媒體元素 (如 [element is used to embed video content in an HTML or XHTML document.">`<video>`](/zh-TW/docs/Web/HTML/Element/video) 或 [element is used to represents sound content in documents. Added as part of HTML5, it may contain several audio sources, represented using the src attribute or the \<source> element; the browser will choose the most suitable one. Fallback c">`<audio>`](/zh-TW/docs/Web/HTML/Element/audio))，亦可能來自於 [WebRTC](/zh-TW/docs/Web/API/WebRTC_API) 的 [`MediaStream`](/zh-TW/docs/Web/API/MediaStream) (本端裝置的相機或遠方電腦)。

特定音訊事件發生的時間點，均達到極高的精確度與極低的潛時，因此亦可用以詳細定義鼓類機器或音序器 (Sequencer) 所需的事件。

Web Audio API 亦可控制音訊的空間定位 (Spatialized) 作業：透過 source-listener 模型架構的系統，進而控制所要使用的左右相位 (Panning*，*聲音放置於左右喇叭之間形成的立體音場中，以產生出空間感) 模*型*，進而自動處理因距離遠近所產生的衰減，或是由於音源/聽者移動所發生的都卜勒移頻 (Doppler shift)。

## 參考

- {{domxref("AnalyserNode")}}
- {{domxref("AudioBuffer")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("AudioContext")}}
- {{domxref("AudioDestinationNode")}}
- {{domxref("AudioListener")}}
- {{domxref("AudioNode")}}
- {{domxref("AudioParam")}}
- [`audioprocess`](/zh-TW/docs/Web/API/ScriptProcessorNode/audioprocess_event) (event)
- {{domxref("AudioProcessingEvent")}}
- {{domxref("BiquadFilterNode")}}
- {{domxref("ChannelMergerNode")}}
- {{domxref("ChannelSplitterNode")}}
- [`complete`](/zh-TW/docs/Web/API/OfflineAudioContext/complete_event) (event)
- {{domxref("ConvolverNode")}}
- {{domxref("DelayNode")}}
- {{domxref("DynamicsCompressorNode")}}
- [`ended`](/zh-TW/docs/Web/API/HTMLMediaElement/ended_event) (event)
- {{domxref("GainNode")}}
- {{domxref("MediaElementAudioSourceNode")}}
- {{domxref("MediaStreamAudioDestinationNode")}}
- {{domxref("MediaStreamAudioSourceNode")}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("OfflineAudioContext")}}
- {{domxref("OscillatorNode")}}
- {{domxref("PannerNode")}}
- {{domxref("ScriptProcessorNode")}}
- {{domxref("WaveShaperNode")}}

## 線上教學

- 使用 Web Audio API
- [Getting Started with the Web Audio API](https://web.dev/articles/webaudio-intro) (僅說明 WebKit-only 的非標準建置)
- [混合定位音訊 (Positional Audio) 與 WebGL](https://web.dev/articles/webaudio-positional-audio)
- [以 Web Audio API 開發遊戲音訊](https://web.dev/articles/webaudio-games)
- [將 webkitAudioContext 程式碼移植為標準的 AudioContext](/zh-TW/docs/Web/API/Web_Audio_API)

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
