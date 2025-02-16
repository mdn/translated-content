---
title: WebIDL 文件包含的資訊
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

在撰寫 API 文件時，可以參考多種資訊來源：規範（specification）描述了應該如何實作以及設計模型，而實作（implementation）則顯示了實際在瀏覽器中實現的內容。WebIDL 檔案以高度簡潔的方式提供大量但非全部的 API 資訊。本文提供一份參考指南，以幫助理解 WebIDL 語法。

IDL 代表**_介面定義語言_**（Interface Definition Language），其設計目的是用來描述 API。在更廣泛的計算領域中，有多種類型的 IDL，而瀏覽器所使用的 IDL 稱為 _WebIDL_。WebIDL 主要有兩種版本：一種來自 WebIDL 規範，另一種則是瀏覽器實作的版本。規範版本是正式的參考標準，而瀏覽器實作的 WebIDL 則描述特定瀏覽器實際支援的內容，並可能包含額外註解、非標準元素資訊，以及針對 IDL 規範的瀏覽器專屬擴充套件。

## 從哪找到 WebIDL 文件

WebIDL 可在多個位置找到：

- 每個 API 規範都會在文本中包含 WebIDL，這是一種精確定義 API 語法的方式。雖然規範是正式參考資料，但實際實作可能與其有所不同。在 MDN Web 文件中，我們的目標是記錄 Web 平台的實際情況，而非理想狀態。因此，請務必確認規範內容是否與瀏覽器的實作一致（若發現不一致，也請不要猶豫回報錯誤）。
- 三種瀏覽器引擎將（經過修改的）WebIDL 作為其工具鏈的一部分：Gecko、Chromium/Blink，以及 WebCore/WebKit。早期版本的 Edge（基於非 Chromium 內核）內部也曾使用 WebIDL，但這些文件並未公開。

  - **Gecko**：所有 WebIDL 檔案集中存放於單一目錄：<https://searchfox.org/mozilla-central/source/dom/webidl/>，副檔名為 `.webidl`。在 Gecko 原始碼樹中也有其它 `*.idl` 檔案，但這些並非 WebIDL，你可以忽略。舊版 Gecko 的 WebIDL 可能分散存放，甚至可能使用 Mozilla 的 IDL 來描述部分 Web 介面，但這些問題不影響 Gecko 近期版本的程式碼。
  - **Chromium**：WebIDL 檔案主要位於原始碼的 [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/) 目錄下的 [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) 與 [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/) 子目錄中。Chromium 原始碼中其它位置的 IDL 檔案主要用於測試系統，與 API 實作無關。
  - **WebCore**：IDL 檔案分散在原始碼中，可能需要進一步搜尋。例如 `<https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>`。

## WebIDL 的不同擴展

WebIDL 在[其規範](https://webidl.spec.whatwg.org/)中有正式定義，但它被設計成可擴展，以便傳遞更多資訊，各大瀏覽器供應商也因此進行延伸：

- **Gecko**（Mozilla）：Mozilla 提供了 [WebIDL 擴展文件](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) 來記錄其專屬 WebIDL 版本。
- **Chromium**（Google）：Google 也提供了一份[文件](https://www.chromium.org/blink/webidl/)來描述其 WebIDL 擴展。
- **WebCore**（Apple）：Apple 提供了 [WebKit IDL 文件](https://trac.webkit.org/wiki/WebKitIDL)來記錄其擴展語法。

> [!NOTE]
> 本文僅介紹 WebIDL 中對撰寫文件最有幫助的部分。實作端還有許多額外的註解與擴展，詳細資訊請參閱上述四份官方文件。

## 介面

本節說明 WebIDL 語法中描述 API 整體特性的部分。

### 介面名稱

介面名稱是出現在 `interface` 關鍵字之後、第一個 `{` 或 `:` 之前的字串。

```webidl
interface URL {};
```

每個 WebIDL 介面（無論是真正的介面或是混入）都會在文件中擁有專屬頁面，列出該介面定義的所有建構子、屬性與方法。

### 繼承鏈

若有父介面，則會在介面名稱之後、冒號 (`:`) 之後指定。每個介面最多只能有一個父介面（單一繼承）。

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

繼承鏈會自動顯示在側邊欄（透過 \\{{APIRef}} 巨集），也可以使用 \\{{InheritanceDiagram}} 巨集新增 SVG 圖示。

### 混入

某些屬性或方法可用於多個介面，為避免重覆定義，它們會被定義在特殊的 WebIDL 介面中，稱為*混入*（mixin）。

自 2019 年 9 月起，混入語法已更新。新的語法使用 `interface mixin` 來定義混入介面，如下所示：

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

接著，使用 `includes` 關鍵字，將混入內的屬性加到介面中：

```webidl
MyInterface includes MyMixin;
```

混入介面沒有繼承關係，且無法包含其它混入。不過，它們可以支援部分介面（partials），因此你可能會看到類似以下的語法：

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

在文件編寫方面，MDN Web 文件不會獨立記錄混入，因為它們是抽象的規範概念，不會直接出現在瀏覽器開發者工具中。相較記錄混入本身，知道哪些具體介面實作了這些方法或屬性更為實用。

如果你在 IDL 中遇到混入（例如 [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils)），請搜尋實作該混入的介面，像是 [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement)，並將混入的成員直接記錄在這些介面中。

實務上，與其單獨記錄 `HTMLHyperlinkElementUtils`，文件會將內容寫入具體的介面，例如 [`HTMLAnchorElement`](/zh-TW/docs/Web/API/HTMLAnchorElement) 與 [`HTMLAreaElement`](/zh-TW/docs/Web/API/HTMLAreaElement)。

例如，`HTMLHyperlinkElementUtils.hash` 的對應文件如下：

- [`HTMLAnchorElement.hash`](/zh-TW/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/zh-TW/docs/Web/API/HTMLAreaElement/hash)

如須相容性資料，請參閱 [BCD 中的混入資料準則](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md)。

### 舊式混入語法

舊版 WebIDL 混入語法仍可能在某些地方出現，其特徵是使用 `[NoInterfaceObject]` 註解：

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

在舊語法中，將混入應用至某個介面時，會使用 `implements` 關鍵字：

```webidl
MyInterface implements MyMixin;
```

### 在 Window 和 Worker 的可用性

介面在 Web Workers（任何類型）與 `Window` 範圍內的可用性，可透過 `[Exposed=(Window,Worker)]` 註解來定義。該註解適用於標註的部分介面。

```webidl
[Exposed=(Window,Worker)]
interface Performance {
   [DependsOn=DeviceState, Affects=Nothing]
   DOMHighResTimeStamp now();
};

[Exposed=Window]
partial interface Performance {
   [Constant]
   readonly attribute PerformanceTiming timing;
   [Constant]
   readonly attribute PerformanceNavigation navigation;

   jsonifier;
};
```

在此例中，`Performance.now()` 可在 `Window` 範圍內以及任何類型的 Worker 中使用，`Performance.timing`、`Performance.navigation` 和 `Performance.toJSON()` 則無法在 Web Workers 中使用。

最常見的 `[Exposed]` 可能值如下：

- `Window`：適用於 {{domxref('Window')}} 全域範圍。
- `Worker`：適用於所有類型的 Worker，包括 {{domxref('DedicatedWorkerGlobalScope')}}、{{domxref('SharedWorkerGlobalScope')}}、{{domxref('ServiceWorkerGlobalScope')}}（以及 `ChromeWorker`，但由於它屬於 Firefox 內部 API，因此 MDN 不記錄此部分）。
- `DedicatedWorker`：僅適用於 {{domxref('DedicatedWorkerGlobalScope')}}。
- `SharedWorker`：僅適用於 {{domxref('SharedWorkerGlobalScope')}}。
- `ServiceWorker`：僅適用於 {{domxref('ServiceWorkerGlobalScope')}}。

還有其它可能的值，例如 `System`，但這些有特殊用途（[詳細資訊](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes)），通常不需要記錄。

請注意，這些值本身也是在 WebIDL 檔案中定義的。介面可能帶有 `[Global=xyz]` 註解，表示當該類型的物件用作全域範圍時，所有使用 `[Exposed=xyz]` 的介面、屬性或方法皆可用。

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

在這裡，當全域範圍是 `DedicatedWorkerGlobalScope`（即專屬 Worker）時，所有 `[Exposed=Worker]` 或 `[Exposed=DedicatedWorker]` 的介面、屬性與方法都可使用。

### 偏好設定

> [!NOTE]
> 這部分資訊專屬於 Gecko，應僅在「瀏覽器相容性」區段使用。

在 Gecko 中，部分介面及其建構子、屬性與方法的可用性可能受偏好設定（通常稱為「pref」）控制，這些設定也會在 WebIDL 中標記：

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

在此例中，`SpeechSynthesis` 介面及其屬性（完整列表遠超過這三項）受 `media.webspeech.synth.enabled` 偏好設定的影響。

> [!NOTE]
> 預設的偏好設定值不會直接顯示在 WebIDL 中，因為不同基於 Gecko 的產品可能會使用不同預設值。

### 僅限內部系統使用

某些介面功能可能僅限於瀏覽器內部系統（chrome code）使用。在 Gecko 中，這類功能會使用 `[ChromeOnly]` 註解。例如，以下範例中的 `propName` 屬性僅能透過 chrome code 呼叫：

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## 屬性

你可以透過 `attribute` 關鍵字來識別屬性的定義。

### 屬性名稱

```webidl
readonly attribute MediaError? error;
```

在上述範例中，屬性名稱為 `error`，而在文件中會使用 `HTMLMediaElement.error` 來表示，因為它屬於 `HTMLMediaElement` 介面。在連結至該屬性時，可以**包含**介面前綴，使用 \\{{domxref('HTMLMediaElement.error')}}，或者在上下文明確時**省略**介面前綴，使用 \\{{domxref('HTMLMediaElement.error', 'error')}}。

### 屬性型態

```webidl
readonly attribute MediaError? error;
```

該屬性的值為 `MediaError` 類型的物件。問號 `?` 表示該屬性可以為 `null`，而文件中必須說明**何時**可能為 `null`。如果沒有問號，則該屬性不能為 `null`。

屬性型態前可能會有**擴充屬性**（extended attribute），例如 `[LegacyNullToEmptyString]`，用來表示特殊行為。以下是常見的擴充屬性及其對應文件說明：

- `[LegacyNullToEmptyString]`

  - `null` 值會以非標準方式轉換為字串。標準行為是轉換為字串 `"null"`，但此屬性會將 `null` 轉換為空字串 `""`。

    在*值*（Value）區段的結尾應新增以下句子：

    _當設為 `null` 值時，該 `null` 會被轉換為空字串 `""`，因此 `elt.innerHTML = null` 等同於 `elt.innerHTML = ""`。_

    必須根據每個屬性調整範例內容。

### 屬性寫入權限

```webidl
readonly attribute MediaError? error;
```

如果屬性前有 `readonly` 關鍵字，則該屬性不能被修改，並應標記為唯讀：

- 在介面頁面中，使用 \\{{ReadOnlyInline}} 巨集標記。
- 在該屬性的專屬頁面中，描述開頭應為：_唯讀的 **`HTMLMediaElement.error`** 屬性…_
- 在介面頁面的描述應以 **Returns…** 開頭。

> [!NOTE]
> 只有唯讀屬性可以描述為「回傳」某個值。非唯讀屬性則同時可以設置與取得值。

### 拋出例外

```webidl
[SetterThrows]
            attribute DOMString src;
```

在某些情況下，例如當某些值非法時，設定新值可能會拋出例外。這會使用 `[SetterThrows]` 註解來標記。當發生這種情況時，該屬性的文件**必須**在「語法」區段內包含「例外」子區段，並列出可能拋出的例外類型及條件。這些例外的詳細資訊可在 API 的規範中找到。

某些例外雖未明確標記，但由 JavaScript 綁定定義。例如，[嘗試設置非法的枚舉值](https://webidl.spec.whatwg.org/#es-enumeration)（對應於 JavaScript 的 {{jsxref('String')}}）會拋出 {{jsxref('TypeError')}} 例外。這類情況須在文件中說明，雖然 WebIDL 文件未明確標記。

雖然 Getter 通常不會拋出例外，但仍有一些特殊情況。當 Getter 可能拋出例外時，會使用 `[GetterThrows]` 註解，同時屬性的文件**必須**在「語法」區段內包含「例外」子區段。

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### 不拋出例外

當 WebIDL 規範未被遵循時，通常會拋出例外，即使 `[SetterThrows]` 或 `[GetterThrows]` 未設定亦是如此。例如，在嚴格模式下，嘗試修改唯讀屬性將導致錯誤。

但為了相容性，有時需要避免這種行為。可以使用 `[LenientSetter]` 註解來建立**無操作的 Setter**（no-op setter），這樣對該屬性的寫入操作將被靜默忽略。

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

在這些情況下，屬性描述中應額外新增一句話，例如：

_儘管此屬性為唯讀，修改它並不會拋出錯誤（即使在嚴格模式下）；Setter 無效，並會被忽略。_

### 新的物件或參考

屬性的回傳值可以是內部物件的**副本**、新建的**合成物件**，或是內部物件的**參考**。

若屬性回傳基本型態物件，例如 {{jsxref("String")}}（IDL 的 `DOMString`）、{{jsxref("Number")}}（IDL 的 `byte`、`octet`、`unsigned int`）或 {{jsxref("Boolean")}}，則它們會被**複製**，這對 JavaScript 開發者而言較為直觀，無須特別標記。

對於介面物件，預設行為是回傳內部物件的**參考**，這必須在介面頁面的簡要描述及對應子頁的描述中明確說明。

> [!NOTE]
> 當 `readonly` 用於回傳物件的屬性時，它僅適用於該物件的參考（即內部物件不可變更），但回傳物件的屬性仍然可以修改，即使它們在相應的介面中標記為唯讀。

有時 API 需要回傳**新物件**或**內部物件的副本**。這會使用 `[NewObject]` 註解來標記。

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

在此情況下，每次存取 `buffered` 時都會回傳一個新物件，修改該物件不會影響內部值，反之亦然。在文件中，這應標記為「新物件」：

_唯讀屬性 **`HTMLMediaElement.buffered`** 會回傳一個新的 \\{{domxref("TimeRanges")}} 物件…_

並在介面描述中標記：

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _回傳一個新的 \\{{domxref("TimeRanges")}} 物件…_

當屬性回傳的集合物件（如 `HTMLCollection`、`HTMLFormElementsCollection` 或 `HTMLOptionsCollection`）為**動態集合**，應明確說明底層物件的變更會反映在回傳的參考上。這些集合應在介面描述及對應子頁中標記為 **動態**（live）。

例如：

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : _回傳一個動態的 \\{{domxref("HTMLFormControlsCollection")}}，包含…_

### 在 worker 的可用性

屬性在 Web Workers 中的可用性可在 WebIDL 中找到。若無特別標記，屬性的可用性與其所屬 `interface` 或 `partial interface` 相同（即預設僅適用於 {{domxref('Window')}}）。

在文件中，「語法」區段之前應新增一段，說明該屬性是否可在 Web Workers 中使用。

### 偏好設定

> [!NOTE]
> 這部分資訊專屬於 Gecko，應僅在「瀏覽器相容性」區段使用。

在 Gecko 中，某些屬性的可用性可能受偏好設定控制，這些設定會在 WebIDL 中標記。

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

在此例中，`media.webvtt.enabled` 會影響 `textTracks` 屬性的可用性。

> [!NOTE]
> 偏好設定的預設值不會直接顯示在 WebIDL 中，因為不同的 Gecko 產品可能使用不同的預設值。

## 方法

你可以透過名稱後的括號來識別方法的定義。

### 方法名稱

```webidl
DOMString canPlayType(DOMString type);
```

此方法的名稱為 `canPlayType`，在文件中會以 `HTMLMediaElement.canPlayType()`（包含括號以表示它是方法）來指稱，因為它屬於 `HTMLMediaElement` 介面。連結至該方法時，可以**包含**介面前綴，使用 \\{{domxref('HTMLMediaElement.canPlayType()')}}，或者在上下文明確時**省略**介面前綴，使用 \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}}。**應始終包含括號**。

### 參數

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

方法的參數會列在方法子頁面的「語法」區段。參數會依 WebIDL 中的順序列出，括號內的參數用逗號分隔。每個參數都有名稱（如上所示）與型態（例如 `?` 表示 `null` 是有效值）。如果參數標記為 `optional`，則表示該參數是可選的，並且在「語法」區段中應使用 \\{{OptionalInline}} 標記。參數的預設值會列在等號 `=` 之後。

某些參數型態可能具有特殊行為，這些行為會透過擴充屬性（如 `[LegacyNullToEmptyString]`）來描述。以下是此類屬性及其對應的文件描述：

- `[LegacyNullToEmptyString]`
  - : 在參數描述的結尾新增以下句子：_[`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null) 值會被視為與空字串 `""` 相同。_

### 回傳值型態

```webidl
DOMString canPlayType(DOMString type);
```

回傳值型態定義於方法名稱之前。在上述範例中，回傳值型態為 `DOMString`。如果回傳型態後面有問號 `?`，則該方法可能回傳 `null`，文件應說明**何時**可能發生這種情況；若沒有問號，則回傳值不能為 `null`。

如果回傳值為 `void`，表示該方法沒有回傳值。這**不會被視為回傳值型態**。如果 WebIDL 條目定義為 `void`，則文件中的「回傳值」區段應該簡單地標記為「無（\{{jsxref("undefined")}}）」。

### 拋出例外

```webidl
[Throws]
   void fastSeek(double time);
```

某些方法可能會拋出例外，這會使用 `[Throws]` 註解標記。當發生這種情況時，該方法的文件**必須**在「語法」區段內包含「例外」子區段。例外的詳細資訊（拋出條件與類型）會記錄在 API 的規範中。

某些例外雖未明確標記，但由 JavaScript 綁定定義。例如，[設定非法的枚舉值](https://webidl.spec.whatwg.org/#es-enumeration)（對應於 JavaScript 的 {{jsxref('String')}}）作為參數時，會拋出 {{jsxref('TypeError')}} 例外。這類情況須在文件中記錄，雖然 WebIDL 文件未明確標記。

可參考這些[*例外*區段](/zh-TW/docs/Web/API/SubtleCrypto/importKey#exceptions)。

### 在 worker 的可用性

WebIDL 也定義了個別方法在 Workers 中的可用性。若無特殊標記，則方法的可用性與其所屬 `interface` 相同（即預設僅適用於 {{domxref('Window')}}）。

在文件中，「語法」區段之前應新增一句話，說明該方法是否可在 Web Workers 中使用。

### 偏好設定

> [!NOTE]
> 這部分資訊專屬於 Gecko，應僅在「瀏覽器相容性」區段使用。

在 Gecko 中，某些方法的可用性可能受偏好設定控制，這些設定會在 WebIDL 中標記。

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

在此例中，`media.webvtt.enabled` 會影響 `addTextTrack()` 方法的可用性。

> [!NOTE]
> 偏好設定的預設值不會直接顯示在 WebIDL 中，因為不同的 Gecko 產品可能使用不同的預設值。

## 特殊方法

某些方法不會作為一般方法列在 WebIDL 中，而是以特殊關鍵字表示，並對應至標準 JavaScript 方法。

### `toString()` 與 `toJSON()`

字串轉換方法（stringifier）會指定如何在需要字串的情境中解析基於介面的物件。（詳見[字串轉換方法](#stringifier)）。此外，該關鍵字會對應至 `toString()` 方法，並定義如下：

```webidl
stringifier;
```

`toString()` 方法應與介面的其它方法一樣獨立記錄，並有其專屬子頁（例如 {{domxref("Range.toString()")}}）。

而 `toJSON()` 則會對應至 **jsonifier**，並定義如下：

```webidl
jsonifier; // Gecko 版本
serializer; // 標準版本
```

`toJSON()` 方法應與介面的其它方法一樣獨立記錄，並有其專屬子頁（例如 {{domxref("Performance.toJSON()")}}）。

> [!NOTE]
> WebIDL 規範使用 `serializer` 取代 `jsonifier`，但 Gecko 目前僅使用 `jsonifier`，這可能是較早期的非標準提案。

### 類迭代器方法

某些介面可定義為**可迭代**（iterable），這表示它將擁有以下方法：`entries()`、`keys()`、`values()` 及 `forEach()`。這些介面也支援在其實作物件上使用 {{jsxref("Statements/for...of", "for-of")}}。

可迭代方式分為**值迭代器**與**成對迭代器**兩種類型。

#### 值迭代器

```webidl
iterable<valueType>
```

此迭代器會遍歷 `valueType` 型態的值，並生成以下方法：

- `entries()`：回傳 [`iterator`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)，產生索引（`unsigned long`）。
- `values()`：回傳 [`iterator`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)，產生值。
- `keys()`：回傳 [`iterator`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)，產生鍵（索引）。在值迭代器中，`keys()` 與 `entries()` 會產生相同的結果。
- `forEach()`：對列表中的每個項目執行指定的回呼函式。

這類迭代器允許使用 `for (const p in object)` 作為 `for (const p in object.entries())` 的簡寫，這點會在介面描述中特別標記。

可迭代的值可以透過以下方式定義：

- 在 WebIDL 檔案內使用 `iterable<valueType>` 標記，例如 {{domxref('DOMTokenList')}}。
- 在 WebIDL 檔案內，若介面支援索引屬性（indexed properties），則會隱式定義為可迭代。這通常透過 `getter` 方法，並接受 `unsigned long` 型態的參數來實作。
- 在 WebIDL 檔案外，於規範文件內的說明段落中定義。這些說明通常以「_[要迭代的值](https://webidl.spec.whatwg.org/#dfn-value-iterator)…_」開頭。

#### 成對迭代器

```webidl
iterable<keyType, valueType>
```

此迭代器會遍歷 `keyType` 和 `valueType` 的鍵值對，並生成以下方法：

- `entries()`：回傳 [`iterator`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)，產生鍵值對。例如 {{domxref('FormData.entries()')}}。
- `values()`：回傳 [`iterator`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)，產生值。例如 {{domxref('FormData.values()')}}。
- `keys()`：回傳 [`iterator`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)，產生鍵。例如 {{domxref('FormData.keys()')}}。
- `forEach()`：對每個鍵值對執行指定的回呼函式。例如 {{domxref('Headers.forEach()')}}。

這類迭代器允許使用 `for (const p in object)` 作為 `for (const p in object.entries())` 的簡寫，這點會在介面描述中特別標記，例如 {{domxref('FormData')}}。

可迭代的鍵值對可透過以下方式定義：

- 在 WebIDL 檔案內使用 `iterable<keyType, valueType>` 標記，例如 {{domxref('FormData')}}。
- 在 WebIDL 檔案外，於規範文件內的說明段落中定義。這些說明通常以「_[要迭代的鍵值對](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…_」開頭。

### 類集合方法

某些介面可定義為**類集合**（set-like），表示它代表**有序集合**，並擁有以下方法：`entries()`、`keys()`、`values()`、`forEach()` 和 `has()`（以及 `size` 屬性）。這些介面也支援在其實作物件上使用 {{jsxref("Statements/for...of", "for-of")}}。`set-like` 可以標記為 `readonly`，若未標記為唯讀，則還會實作集合修改方法，如 `add()`、`clear()` 和 `delete()`。

```webidl
setlike<valueType>
```

此 `set-like` 介面會生成以下方法：

- `entries()`：回傳 [`iterator`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)，產生索引。例如 {{domxref('NodeList.entries()')}}。
- `values()`：回傳 [`iterator`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)，產生值。例如 {{domxref('NodeList.values()')}}。
- `keys()`：回傳 [`iterator`](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)，產生鍵。例如 {{domxref('NodeList.keys()')}}。
- `forEach()`：對列表中的每個項目執行指定的回呼函式。例如 {{domxref('NodeList.forEach()')}}。

如果 `set-like` 宣告未標記為唯讀，則會額外生成以下方法：

- `add()`：新增一個項目，例如 {{domxref('FontFaceSet')}} 的 `.add()` 方法。
- `clear()`：清空 `set-like` 結構，例如 {{domxref('FontFaceSet')}} 的 `.clear()` 方法。
- `delete()`：移除一個項目，例如 {{domxref('FontFaceSet')}} 的 `.delete()` 方法。

此 `set-like` 介面允許使用 `for (const p in object)` 作為 `for (const p in object.entries())` 的簡寫。

## 特殊行為

某些 IDL 成員表示特殊行為，應在適當的頁面中加以說明。

### 字串轉換方法

除了將 `toString()` 方法新增至介面（詳見 [`toString()` 與 `toJSON()`](#tostring_and_tojson)），字串轉換方法（stringifier）還表示當物件實例用作字串時，它會回傳與預設值不同的字串（預設通常是物件的 JSON 表示）。具體行為取決於 IDL 中的指定方式。無論如何，非預設行為都應在介面頁面中說明。

當 `stringifier` 關鍵字與屬性名稱一起使用時，存取該物件名稱與存取該屬性名稱的行為相同。例如，考慮以下 IDL：

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString name;
};
```

基於此介面的類別，以下兩行程式碼等效。這種行為應記錄在屬性頁面與介面頁面中：

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

當 `stringifier` 關鍵字單獨使用時，介面物件可以像上述方式使用，但其行為是在原始碼中定義的：

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

若要了解介面參考的實際行為，請參閱該介面的規範，或透過實驗測試其輸出。

## 建構子

在 WebIDL 中，建構子不會直接出現在介面內，而是以註解的方式附加至主要介面。

### 匿名建構子

這是最常見的建構子類型。若介面 `A` 具有匿名建構子，則可使用 `a = new A(parameters);` 來建立實例。

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

使用 `Constructor` 註解定義建構子，可以帶有參數（或不帶參數，如上例）。我們會將所有匿名建構子記錄在其子頁面，例如上例的建構子會對應至 _Web/API/MessageChannel/MessageChannel_，標題為 `MessageChannel()`。

以下為具有參數的匿名建構子範例：

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

一個介面可以有多個匿名建構子，僅參數列表不同。所有語法會統一記錄在單一子頁面中。

```webidl
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### 具名建構子

```webidl
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…};
```

具名建構子是指其名稱與介面名稱不同的建構子。例如 `new Image(…)` 會建立一個 `HTMLImageElement` 物件。在 WebIDL 中，具名建構子使用 `NamedConstructor` 註解，等號 `=` 之後為建構子名稱，括號內則是參數列表，格式與方法定義相同。

某些介面可能擁有多個具名建構子，但這種情況極為罕見。如果發生，則每個建構子都會有自己的子頁面。

### 新建構子語法

自 2019 年 9 月起，WebIDL 建構子語法已更新。建構子不再作為介面的擴充屬性，而是改為方法形式：

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

新規範改為使用 `constructor` 方法語法，且無明確定義的回傳型態：

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

這種方式允許為建構子指定擴充屬性，並且建構子不再預設會拋出例外。如果建構子可能拋出例外，則須使用 `[Throws]` 註解標記：

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

目前並非所有規範都已更新為新語法，因此兩種語法都可能碰到。我們將繼續記錄這兩種語法。

### 在 worker 的可用性

建構子的可用性與其所屬的介面或部分介面相同。相關資訊會在建構子子頁面中記錄，格式與方法相同。

### 偏好設定

建構子的可用性受與其所屬介面或部分介面相同的偏好設定控制。相關資訊會在建構子子頁面中記錄，格式與方法相同。
