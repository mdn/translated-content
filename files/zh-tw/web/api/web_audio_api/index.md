---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Web Audio API")}}

Web Audio API 提供了一套強大且多功能的系統，用於控制 Web 上的音訊，允許開發者選擇音訊來源、對音訊添加效果、建立音訊視覺化、套用空間效果（例如平移）等等。

## Web audio 概念與用法

Web Audio API 涉及在**音訊上下文**中處理音訊操作，並被設計為允許**模組化路由**。基本的音訊操作是透過**音訊節點**來執行的，這些節點相互連接形成**音訊路由圖**。即使在單一上下文中，也支援多個具有不同聲道佈局類型的來源。這種模組化設計提供了建立具有動態效果的複雜音訊功能的靈活性。

音訊節點透過其輸入與輸出連結成鏈狀或簡單的網狀結構。它們通常從一個或多個來源開始。來源提供非常小時間切片內的聲音強度（樣本）陣列，通常每秒數萬個。這些可以是透過數學計算出來的（例如 {{domxref("OscillatorNode")}}），也可以是來自聲音／視訊檔案的錄音（像 {{domxref("AudioBufferSourceNode")}} 和 {{domxref("MediaElementAudioSourceNode")}}）以及音訊串流（{{domxref("MediaStreamAudioSourceNode")}}）。事實上，聲音檔案本身就是聲音強度的錄音，這些強度來自麥克風或電子樂器，並混音成單一、複雜的波形。

這些節點的輸出可以連結到其他節點的輸入，這些節點將這些聲音樣本流混合或修改成不同的流。一個常見的修改是將樣本乘以一個數值，使其變大聲或變小聲（如 {{domxref("GainNode")}} 的情況）。一旦聲音經過了足夠的處理以達到預期效果，它就可以連結到目的地（{{domxref("BaseAudioContext.destination")}}）的輸入，該目的地將聲音發送到揚聲器或耳機。只有在使用者應該聽到音訊時，才需要這最後的連接。

一個簡單、典型的 web 音訊工作流程看起來會像這樣：

1. 建立音訊上下文
2. 在上下文內，建立來源——例如 `<audio>`、振盪器、串流
3. 建立效果節點，例如殘響、雙二階濾波器、平移器、壓縮器
4. 選擇音訊的最終目的地，例如你的系統揚聲器
5. 連接來源至效果，再將效果連接至目的地。

![一個簡單的方塊圖，外部方塊標示為音訊上下文，內部有三個方塊分別標示為來源、效果與目的地。三個內部方塊之間有箭頭從左指向右，表示音訊資訊的流向。](audio-context_.png)

時間控制具有高精確度與低延遲，允許開發者撰寫能夠準確回應事件的程式碼，並且能夠針對特定的樣本，即使在高取樣率下也是如此。因此，諸如鼓機和定序器之類的應用完全可以實現。

Web Audio API 也允許我們控制音訊如何被*空間化*。它使用基於*來源—聽眾模型*的系統，允許控制*平移模型*，並處理移動中的來源（或移動中的聽眾）所引起的*距離引起的衰減*。

> [!NOTE]
> 你可以在我們的文章 [Web Audio API 背後的基本概念](/zh-TW/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)中閱讀更多關於 Web Audio API 理論的細節。

## Web Audio API 目標受眾

對於不熟悉音訊或音樂術語的人來說，Web Audio API 可能看起來令人心生畏懼，而且由於它整合了大量的功能，如果你是一名開發者，可能會發現難以入門。

它可以用來將音訊整合到你的網站或應用程式中，像是[像 futurelibrary.no 提供氛圍](https://www.futurelibrary.no/)，或是[表單上的聽覺回饋](https://css-tricks.com/form-validation-web-audio/)。然而，它也可以用來建立*進階*的互動式樂器。考慮到這一點，它同時適合開發者和音樂家。

我們有一個[簡單的入門教學](/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)，是為了那些熟悉程式設計但需要對 API 的某些術語和結構有良好介紹的人所準備的。

還有一篇 [Web Audio API 背後的基本概念](/zh-TW/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)文章，幫助你理解數位音訊的工作原理，特別是在 API 的領域中。這也包括了對 API 所建構的一些概念的良好介紹。

學習寫程式就像打牌——你先學習規則，然後玩，再回去學習規則，然後再玩。所以如果在第一個教學和文章之後，某些理論還不太合適，有一個[進階教學](/zh-TW/docs/Web/API/Web_Audio_API/Advanced_techniques)可以延伸第一個教學，幫助你練習所學，並應用一些更進階的技巧來建立一個步進定序器。

我們還有其他教學和涵蓋 API 所有功能的綜合參考資料。請參閱本頁側邊欄以獲取更多資訊。

如果你對音樂方面比較熟悉，熟悉樂理概念，想要開始製作樂器，那麼你可以繼續前進，並以進階教學和其他資源為指南開始製作東西（上述連結的教學涵蓋了排程音符、建立自訂振盪器和包絡線，以及 LFO 等等）。

如果你不熟悉程式設計基礎，你可能想要先查閱一些初學者的 JavaScript 教學，然後再回到這裡——參見我們的[初學者 JavaScript 學習模組](/zh-TW/docs/Learn_web_development/Core/Scripting)，這是個很好的入門起點。

## Web Audio API 介面

Web Audio API 擁有許多的介面與相關聯的事件，我們將其分為九類功能。

### 通用音訊圖定義

在 Web Audio API 使用中塑造音訊圖的通用容器與定義。

- {{domxref("AudioContext")}}
  - : **`AudioContext`** 介面代表由音訊模組互相連接而成的音訊處理圖，每個模組由一個 {{domxref("AudioNode")}} 代表。音訊上下文控制其包含的節點的建立以及音訊處理或解碼的執行。在你做任何事情之前，你需要建立一個 `AudioContext`，因為所有事情都發生在上下文內。
- {{domxref("AudioNode")}}
  - : **`AudioNode`** 介面代表一個音訊處理模組，像是一個*音訊來源*（例如 HTML {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 元素）、_音訊目的地_、_中間處理模組_（例如像 {{domxref("BiquadFilterNode")}} 的濾波器，或像 {{domxref("GainNode")}} 的*音量控制*）。
- {{domxref("AudioParam")}}
  - : **`AudioParam`** 介面代表一個音訊相關參數，像是 {{domxref("AudioNode")}} 的參數之一。它可以被設定為特定數值或數值的變化，並可以被排程在特定時間發生並遵循特定模式。
- {{domxref("AudioParamMap")}}
  - : 提供一個類似 Map 的介面給一組 {{domxref("AudioParam")}} 介面，這意味著它提供了 `forEach()`、`get()`、`has()`、`keys()` 和 `values()` 方法，以及 `size` 屬性。
- {{domxref("BaseAudioContext")}}
  - : **`BaseAudioContext`** 介面作為線上和離線音訊處理圖的基礎定義，分別由 {{domxref("AudioContext")}} 和 {{domxref("OfflineAudioContext")}} 代表。你不會直接使用 `BaseAudioContext`——你會透過這兩個繼承介面之一來使用其功能。
- {{domxref("AudioScheduledSourceNode/ended_event", "ended")}} 事件
  - : 當播放因為到達媒體末端而停止時，會觸發 `ended` 事件。

### 定義音訊來源

定義在 Web Audio API 中使用的音訊來源的介面。

- {{domxref("AudioScheduledSourceNode")}}
  - : **`AudioScheduledSourceNode`** 是數種音訊來源節點介面的父介面。它是一個 {{domxref("AudioNode")}}。
- {{domxref("OscillatorNode")}}
  - : **`OscillatorNode`** 介面代表一個週期性波形，例如正弦波或三角波。它是一個 {{domxref("AudioNode")}} 音訊處理模組，會產生給定*頻率*的波形。
- {{domxref("AudioBuffer")}}
  - : **`AudioBuffer`** 介面代表駐留在記憶體中的短音訊資產，由音訊檔案使用 {{ domxref("BaseAudioContext.decodeAudioData") }} 方法建立，或是使用 {{ domxref("BaseAudioContext.createBuffer") }} 透過原始資料建立。一旦解碼成這種形式，音訊就可以被放入 {{ domxref("AudioBufferSourceNode") }} 中。
- {{domxref("AudioBufferSourceNode")}}
  - : **`AudioBufferSourceNode`** 介面代表一個由儲存在 {{domxref("AudioBuffer")}} 中的記憶體內音訊資料組成的音訊來源。它是一個作為音訊來源的 {{domxref("AudioNode")}}。
- {{domxref("MediaElementAudioSourceNode")}}
  - : **`MediaElementAudioSourceNode`** 介面代表一個由 HTML {{ htmlelement("audio") }} 或 {{ htmlelement("video") }} 元素組成的音訊來源。它是一個作為音訊來源的 {{domxref("AudioNode")}}。
- {{domxref("MediaStreamAudioSourceNode")}}
  - : **`MediaStreamAudioSourceNode`** 介面代表一個由 {{domxref("MediaStream")}}（例如網路攝影機、麥克風，或從遠端電腦發送的串流）組成的音訊來源。如果串流上有多個音訊軌道，則使用其 {{domxref("MediaStreamTrack.id", "id")}} 在字典順序（字母順序）上排在第一位的軌道。它是一個作為音訊來源的 {{domxref("AudioNode")}}。
- {{domxref("MediaStreamTrackAudioSourceNode")}}
  - : {{domxref("MediaStreamTrackAudioSourceNode")}} 類型的節點代表一個音訊來源，其資料來自 {{domxref("MediaStreamTrack")}}。當使用 {{domxref("AudioContext.createMediaStreamTrackSource", "createMediaStreamTrackSource()")}} 方法建立此節點時，你可以指定要使用哪個軌道。這提供了比 `MediaStreamAudioSourceNode` 更多的控制權。

### 定義音訊效果濾波器

用於定義你想套用到音訊來源的效果的介面。

- {{domxref("BiquadFilterNode")}}
  - : **`BiquadFilterNode`** 介面代表一個簡單的低階濾波器。它是一個 {{domxref("AudioNode")}}，可以代表不同種類的濾波器、音調控制裝置或圖形等化器。一個 `BiquadFilterNode` 總是剛好有一個輸入和一個輸出。
- {{domxref("ConvolverNode")}}
  - : **`ConvolverNode`** 介面是一個 {{domxref("AudioNode")}}，它對給定的 {{domxref("AudioBuffer")}} 執行線性卷積，通常用於實現殘響效果。
- {{domxref("DelayNode")}}
  - : **`DelayNode`** 介面代表一條[延遲線](https://en.wikipedia.org/wiki/Digital_delay_line)；這是一個 {{domxref("AudioNode")}} 音訊處理模組，會在輸入資料到達與其傳播到輸出之間造成延遲。
- {{domxref("DynamicsCompressorNode")}}
  - : **`DynamicsCompressorNode`** 介面提供壓縮效果，它會降低訊號中最響亮部分的音量，以幫助防止在多個聲音同時播放和多工處理時可能發生的截波與失真。
- {{domxref("GainNode")}}
  - : **`GainNode`** 介面代表音量的變化。它是一個 {{domxref("AudioNode")}} 音訊處理模組，會在輸入資料傳播到輸出之前套用給定的*增益*。
- {{domxref("WaveShaperNode")}}
  - : **`WaveShaperNode`** 介面代表一個非線性失真器。它是一個 {{domxref("AudioNode")}}，使用曲線對訊號套用波形整形失真。除了明顯的失真效果外，它也常用於為訊號增添溫暖的感覺。
- {{domxref("PeriodicWave")}}
  - : 描述一個週期性波形，可用於塑造 {{ domxref("OscillatorNode") }} 的輸出。
- {{domxref("IIRFilterNode")}}
  - : 實作一個通用的[無限脈衝響應](https://zh.wikipedia.org/wiki/无限冲激响应)濾波器；這種類型的濾波器也可以用來實作音調控制裝置和圖形等化器。

### 定義音訊目的地

一旦你完成了音訊處理，這些介面定義了輸出的位置。

- {{domxref("AudioDestinationNode")}}
  - : **`AudioDestinationNode`** 介面代表給定上下文中音訊來源的最終目的地 — 通常是你裝置的揚聲器。
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : **`MediaStreamAudioDestinationNode`** 介面代表一個由具有單一 `AudioMediaStreamTrack` 的 [WebRTC](/zh-TW/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} 組成的音訊目的地，其使用方式類似於從 {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }} 獲得的 {{domxref("MediaStream")}}。它是一個作為音訊目的地的 {{domxref("AudioNode")}}。

### 資料分析與視覺化

如果你想從音訊中提取時間、頻率和其他資料，`AnalyserNode` 就是你需要的。

- {{domxref("AnalyserNode")}}
  - : **`AnalyserNode`** 介面代表一個能夠提供即時頻域和時域分析資訊的節點，用於資料分析和視覺化。

### 分割與合併音訊聲道

要分割與合併音訊聲道，你會使用這些介面。

- {{domxref("ChannelSplitterNode")}}
  - : **`ChannelSplitterNode`** 介面將音訊來源的不同聲道分離成一組*單聲道*輸出。
- {{domxref("ChannelMergerNode")}}
  - : **`ChannelMergerNode`** 介面將不同的單聲道輸入重新結合成單一輸出。每個輸入將用於填充輸出的一個聲道。

### 音訊空間化

這些介面允許你對音訊來源添加音訊空間化平移效果。

- {{domxref("AudioListener")}}
  - : **`AudioListener`** 介面代表在音訊空間化中使用的音訊場景的唯一聽者的位置和方向。
- {{domxref("PannerNode")}}
  - : **`PannerNode`** 介面代表音訊來源訊號在 3D 空間中的位置和行為，允許你建立複雜的平移效果。
- {{domxref("StereoPannerNode")}}
  - : **`StereoPannerNode`** 介面代表一個簡單的立體聲平移器節點，可用於將音訊流向左或向右平移。

### JavaScript 中的音訊處理

使用 audio worklet，你可以定義用 JavaScript 或 [WebAssembly](/zh-TW/docs/WebAssembly) 撰寫的自訂音訊節點。Audio worklet 實作了 {{domxref("Worklet")}} 介面，這是 {{domxref("Worker")}} 介面的輕量級版本。

- {{domxref("AudioWorklet")}}
  - : `AudioWorklet` 介面可透過 {{domxref("AudioContext")}} 物件的 {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} 獲得，讓你可以將模組新增至 audio worklet 以在主執行緒之外執行。
- {{domxref("AudioWorkletNode")}}
  - : `AudioWorkletNode` 介面代表嵌入到音訊圖中的 {{domxref("AudioNode")}}，並可以傳遞訊息給對應的 `AudioWorkletProcessor`。
- {{domxref("AudioWorkletProcessor")}}
  - : `AudioWorkletProcessor` 介面代表在 `AudioWorkletGlobalScope` 中執行的音訊處理程式碼，它直接產生、處理或分析音訊，並可以傳遞訊息給對應的 `AudioWorkletNode`。
- {{domxref("AudioWorkletGlobalScope")}}
  - : `AudioWorkletGlobalScope` 介面是一個衍生自 `WorkletGlobalScope` 的物件，代表執行音訊處理腳本的 worker 上下文；它的設計目的是為了能夠在 worklet 執行緒中直接使用 JavaScript 進行音訊資料的產生、處理和分析，而不是在主執行緒上。

#### 已過時：腳本處理器節點

在定義 audio worklet 之前，Web Audio API 使用 `ScriptProcessorNode` 進行基於 JavaScript 的音訊處理。由於程式碼在主執行緒中執行，它們的效能不佳。`ScriptProcessorNode` 因為歷史原因被保留，但已被標記為已棄用。

- {{domxref("ScriptProcessorNode")}} {{deprecated_inline}}
  - : **`ScriptProcessorNode`** 介面允許使用 JavaScript 產生、處理或分析音訊。它是一個 {{domxref("AudioNode")}} 音訊處理模組，連結到兩個緩衝區，一個包含目前的輸入，一個包含輸出。每當輸入緩衝區包含新資料時，會發送一個實作了 {{domxref("AudioProcessingEvent")}} 介面的事件給物件，並且事件處理程序會在它將資料填滿輸出緩衝區時終止。
- {{domxref("ScriptProcessorNode.audioprocess_event", "audioprocess")}}（事件）{{deprecated_inline}}
  - : 當 Web Audio API {{domxref("ScriptProcessorNode")}} 的輸入緩衝區準備好被處理時，會觸發 `audioprocess` 事件。
- {{domxref("AudioProcessingEvent")}} {{deprecated_inline}}
  - : `AudioProcessingEvent` 代表當 {{domxref("ScriptProcessorNode")}} 輸入緩衝區準備好被處理時發生的事件。

### 離線／背景音訊處理

透過以下介面，可以在背景非常快速地處理／算繪音訊圖——將其算繪到 {{domxref("AudioBuffer")}} 而不是裝置的揚聲器。

- {{domxref("OfflineAudioContext")}}
  - : **`OfflineAudioContext`** 介面是一個 {{domxref("AudioContext")}} 介面，代表由互相連接的 {{domxref("AudioNode")}} 所建構的音訊處理圖。與標準的 `AudioContext` 相比，`OfflineAudioContext` 並不真正算繪音訊，而是*盡可能快地*在緩衝區中產生它。
- {{domxref("OfflineAudioContext/complete_event", "complete")}} (event)
  - : 當 {{domxref("OfflineAudioContext")}} 的算繪終止時，會觸發 `complete` 事件。
- {{domxref("OfflineAudioCompletionEvent")}}
  - : `OfflineAudioCompletionEvent` 代表當 {{domxref("OfflineAudioContext")}} 的處理終止時發生的事件。{{domxref("OfflineAudioContext/complete_event", "complete")}} 事件使用此介面。

## 指南與教學

{{SubpagesWithSummaries}}

## 範例

你可以在 GitHub 上的 [webaudio-examples 倉儲](https://github.com/mdn/webaudio-examples/)找到許多範例。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

### 教學／指南

- [Web Audio API 背後的基本概念](/zh-TW/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [使用 Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [進階技巧：建立聲音、定序、計時、排程](/zh-TW/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [媒體與 Web Audio API 的自動播放指南](/zh-TW/docs/Web/Media/Guides/Autoplay)
- [使用 IIR 濾波器](/zh-TW/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [使用 Web Audio API 進行視覺化](/zh-TW/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Web audio 空間化基礎](/zh-TW/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [使用 ConstantSourceNode 控制多個參數](/zh-TW/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [混合定位音訊與 WebGL（2012）](https://web.dev/articles/webaudio-positional-audio)
- [使用 Web Audio API 開發遊戲音訊（2012）](https://web.dev/articles/webaudio-games)

### 函式庫

- [Tone.js](https://tonejs.github.io/)：一個在瀏覽器中建立互動式音樂的框架。
- [howler.js](https://github.com/goldfire/howler.js/)：一個 JS 音訊函式庫，預設使用 [Web Audio API](https://webaudio.github.io/web-audio-api/) 並退回到 [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)，同時提供其他有用的功能。
- [Mooog](https://github.com/mattlima/mooog)：jQuery 風格的 AudioNode 鏈接、混音器風格的 send/return 等等。
- [XSound](https://xsound.jp/)：用於合成器、效果、視覺化、錄音等的 Web Audio API 函式庫。
- [OpenLang](https://github.com/chrisjohndigital/OpenLang)：使用 Web Audio API 將來自不同來源的視訊和音訊錄製並組合成單一檔案的 HTML 視訊語言實驗室網頁應用程式（[GitHub 上的原始碼](https://github.com/chrisjohndigital/OpenLang)）
- [Pts.js](https://ptsjs.org/)：簡化 web audio 視覺化（[指南](https://ptsjs.org/guide/sound-0800)）

### 相關主題

- [Web 媒體技術](/zh-TW/docs/Web/Media)
- [Web 媒體類型與格式指南](/zh-TW/docs/Web/Media/Guides/Formats)
