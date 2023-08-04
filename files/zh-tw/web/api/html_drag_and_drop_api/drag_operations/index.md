---
title: 拖曳操作
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

本文會一一說明拖曳各步驟的作業。

The drag operations described in this document use the {{domxref("DataTransfer")}} interface. This document does _not_ use the {{domxref("DataTransferItem")}} interface nor the {{domxref("DataTransferItemList")}} interface.

## Draggable 屬性

網頁中有些預設的拖曳行為，例如文字選擇、圖片或超連結，當拖曳圖片或超連結時，圖片或超連結的 URL 會被當作拖曳作業中所攜帶的資料，而其他類型元素則必須另外處理才能拖曳，試試看選擇網頁某一部分，然後按住滑鼠鍵來進行拖曳，依據 OS 不同，或許會有一些跟著滑鼠移動的效果，但這僅僅只是預設效果行為，實際上沒有任何資料跟著被拖曳。

In HTML, apart from the default behavior for images, links, and selections, no other elements are draggable by default. In [XUL](/zh-TW/docs/Mozilla/Tech/XUL), all elements are draggable.

除了文字選擇、圖片或超連結之外，沒有元素預設是可拖曳的。所以要讓一個元素可以拖曳，有幾件事必須要做：

- 在想要拖曳的元素上設定 [`draggable`](/zh-TW/docs/Web/HTML/Global_attributes#draggable) 屬性為 `true`。
- 註冊 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 事件之事件處理器。
- {{domxref("DataTransfer.setData","Set the drag data")}} within the listener defined above.

以下是一段簡單的範例。

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

draggable 為 true 後，該 DIV 元素便可以拖曳，反之，倘若 draggable 為 false 或無設定則不可拖曳，只有其中下含的文字可以被選擇。draggable 屬性適用於任何元素，一般來說預設為 false，除了圖片和連結預設為 true，所以說如果想要阻止圖片和連結被拖曳，則可以設定 draggable 為 false。

請注意，一旦元素被定為可拖曳之後，其下內含的文字或其他元素便無法像平常一樣用滑鼠選擇，使用者之能夠改用鍵盤或按住 Alt 鍵搭配滑鼠進行選擇。

至於 XUL 元素則是預設皆可拖曳。

```html
<button
  label="Drag Me"
  ondragstart="event.dataTransfer.setData('text/plain', 'Drag Me Button');"></button>
```

## 開始拖曳

下方範例在 dragstart 註冊一個事件處理器。

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

當拖曳作業開始，dragstart 事件會觸發，然後我們可以在事件處理器中準備好我們所要攜帶的資料、想要的拖曳回饋效果，不過基本上其實只需要準備資料就好，因為預設拖曳回饋效果已經足以應付大多數的狀況，此外，我們也可以改在上一層父元素註冊事件處理器，因為拖曳事件會上向傳遞 ( Bubble up ) 。

## 拖曳資料

所有的拖曳事件物件都有一個 [dataTransfer](/zh-TW/docs/DragDrop/DataTransfer) 屬性，這個屬性是用來攜帶資料。

當拖曳時，資料必須和被拖曳目標作連結，比如說拖曳文字框中反白選擇的文字，那麼文字本身便是連結資料，同理，拖曳連結時 URL 便是連結資料。

資料包含兩個部分，一是資料型態(或格式)、二是資料值。所謂資料型態是用文字描述資料型態(如[text/plain](/zh-TW/docs/DragDrop/Recommended_Drag_Types#text)代表文字資料)，而資料值則是文字，要加入拖曳資料需要提供資料的型態和內容值；有了資料後，我們可以在 dragenter 或 dragover 事件處理器中，透過檢查資料型態來決定是否可以接受後續的放置操作，比如說只接受連結類資料的拖曳目標區(drop target)，會檢查資料型態是否為[text/uri-list](/zh-TW/docs/DragDrop/Recommended_Drag_Types#link)。

資料型態符合 MIME 型態，如[text/plain](/zh-TW/docs/DragDrop/Recommended_Drag_Types#text)或[image/jpeg](/zh-TW/docs/DragDrop/Recommended_Drag_Types#image)等等，而我們自己也可以自定義其他型態，最常使用的型態請見[推薦拖曳資料型態](/zh-TW/docs/DragDrop/Recommended_Drag_Types)。

一趟拖曳作業中可以攜帶多個多種型態的資料，所以我們可以自定義自己的型態同時，還提供其他資料給不認得自定義資料型態的其他拖曳目標區使用。通常最通用的資料會是文字類型資料。

呼叫[setData](/zh-TW/docs/DragDrop/DataTransfer#setData.28.29)方法，傳入資料型態和資料，這樣就可以攜帶想要的資料了：

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

上例資料是「Text to drag」文字，型態是 text/plain。

呼叫多次 setData 我們就可以攜帶多種資料。

```js
var dt = event.dataTransfer;
dt.setData("application/x-bookmark", bookmarkString);
dt.setData("text/uri-list", "http://www.mozilla.org");
dt.setData("text/plain", "http://www.mozilla.org");
```

這裡加入了三種資料，第一種是自定義的「application/x-bookmark」，雖然有更豐富的內容可使用，但只有我們自己認識，而另外我們又為其他網站或應用加入了兩種比較常見的資料，「text/uri-list」以及「text/plain」。

如果對同一種資料型態加入兩次資料，則新加資料會取代舊資料。

呼叫[clearData](/zh-TW/docs/DragDrop/DataTransfer#clearData.28.29)會清除資料。

```js
event.dataTransfer.clearData("text/uri-list");
```

如果呼叫 clearData 時有傳入資料型態，則只會清除該型態資料，如果沒有傳入任何型態，則所有資料皆會被清除。

## 設定拖曳圖片

當拖曳進行中，以拖曳元素為基礎，一個半透明的圖片會自動產生出來，並且跟著滑鼠移動。如果想要，我們也可以呼叫 {{domxref("DataTransfer.setDragImage","setDragImage()")}} 來指定我們自己的拖曳使用圖片。

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

setDragImage 需要三個參數，一是圖片來源(通常是圖片元素，但也可以是 canvas 元素或其他元素)，拖曳使用圖片會依照圖片來源在螢幕上所顯示的樣子產生；二和三是圖片相對於滑鼠指標的位置位移量。

不過也是能夠使用文件外部的圖片或 canvas 元素，當需要透過 canvas 元素產生客製圖片時，這個技巧很有用，如下範例所示：

```js
function dragWithCustomImage(event) {
  var canvas = document.createElementNS(
    "http://www.w3.org/1999/xhtml",
    "canvas",
  );
  canvas.width = canvas.height = 50;

  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();

  var dt = event.dataTransfer;
  dt.setData("text/plain", "Data to Drag");
  dt.setDragImage(canvas, 25, 25);
}
```

上面我們的 canvas 是 50 x 50px 大小，然後我們位移一半 25 讓圖片落在滑鼠指標中央。

## 拖曳效果

拖曳作業有好機種；copy 作業代表被拖曳資料會被複製一份到拖曳目標區，move 作業代表移動被拖曳的資料，link 作業代表拖曳來源區和拖曳目標區有某種關係。

在 dragstart 事件中可以設定[effectAllowed](/zh-TW/docs/DragDrop/DataTransfer#effectAllowed.28.29)屬性，指定拖曳源頭允許的作業。

```js
event.dataTransfer.effectAllowed = "copy";
```

上面只有 copy 被允許，但還有其他種類：

只能移動或連結。

- none
  - : 不允許任何作業。
- copy
  - : 只能複製。
- move
  - : 只能移動。
- link
  - : 只有連結。
- copyMove
  - : 只能複製或移動。
- copyLink
  - : 只能複製或連結。
- linkMove

  all

  - : 複製、移動或連結皆可。

[effectAllowed](/zh-TW/docs/DragDrop/DataTransfer#effectAllowed.28.29) 屬性預設所有作業都接受，如 all 值。

在 dragenter 或 dragover 事件中，我們可以藉由檢查 effectAllowed 來知道那些作業是被允許的，另外，另一個相關聯的[dropEffect](/zh-TW/docs/DragDrop/DataTransfer#dropEffect.28.29)屬性應該要是 effectAllowed 的其中一個作業，但是 dropEffect 不接受多重作業，只可以是 none, copy, move 和 link。

dropEffect 屬性會在在 dragenter 以及 dragover 事件中初始化為使用者想要執行的作業效果，使用者能夠透過按鍵(依平台不同，通常是 Shift 或 Ctrl 鍵)，在複製、移動、連接作業之間切換，同時滑鼠指標也會跟著相應變換，例如複製作業的滑鼠旁會多出一個+的符號。

effectAllowed 和 dropEffect 屬性可以在 dragenter 或 dragover 事件中更改，更改 effectAllowed 屬性能讓拖曳作業只能在支援被允許作業類型的拖曳目標上執行，好比說 effectAllowed 為 copyMove 的作業就會阻止使用者進行 link 類型的作業。

我們也可以更改 dropEffect 來強迫使用者執行某項作業，而且應該要是 effectAllowed 所列舉的作業。

```js
event.dataTransfer.effectAllowed = "copyMove";
event.dataTransfer.dropEffect = "copy";
```

上面的範例中 copy 就是會被執行的作業效果。

若 effectAllowed 或 dropEffect 為 none，那麼沒有放置作業可以被執行。

## 指定拖曳目標

dragenter 和 dragover 事件就是用來指定拖曳目標區，也就是放置資料的目標區，絕大多數的元素預設的事件都不准放置資料。

所以想要放置資料到元素上，就必須取消預設事件行為。取消預設事件行為能夠藉由回傳 false 或呼叫[event.preventDefault](/zh-TW/docs/DOM/event.preventDefault)方法。

```html
<div ondragover="return false">
  <div ondragover="event.preventDefault()"></div>
</div>
```

通常我們只有在適當的時機點才需要呼叫 event.preventDefault 方法、取消預設事件行為，比如說被拖曳進來的是連結。所以檢查被拖曳進來的物件，當符合條件後再來取消預設事件行為。

藉由檢查拖曳資料型態來決定是否允許放置，是最常見的作法。dataTransfer 物件的[types](/zh-TW/docs/DragDrop/DataTransfer#types.28.29)屬性是一個拖曳資料型態的列表，其中順序按照資料被加入之先後排序。

```js
function doDragOver(event) {
  var isLink = event.dataTransfer.types.contains("text/uri-list");
  if (isLink) event.preventDefault();
}
```

上面我們呼叫 contains 方法檢察 text/uri-list 是否存在拖曳資料型態的列表之內，有的話才取消預設行為、准許放置作業，否則，不取消預設行為、不准許放置作業。

檢查拖曳資料型態後，我們也可以依此更動 effectAllowed 和 dropEffect 屬性，只不過，如果沒有取消預設行為，更動並不會有甚麼影響。

### Updates to DataTransfer.types

Note that the latest spec now dictates that {{domxref("DataTransfer.types")}} should return a frozen array of {{domxref("DOMString")}}s rather than a {{domxref("DOMStringList")}} (this is supported in Firefox 52 and above).

As a result, the [contains](/zh-TW/docs/Web/API/Node/contains) method no longer works on the property; the [includes](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method should be used instead to check if a specific type of data is provided, using code like the following:

```js
if ([...event.dataTransfer.types].includes("text/html")) {
  // Do something
}
```

You could always use some feature detection to determine which method is supported on `types`, and run code as appropriate.

## 放置回饋

有好幾種方法回饋使用者，告訴使用者甚麼元素可以接受放置作業，最簡單的是滑鼠會指標會自動變換樣式(視平台而定)。

滑鼠指標提示雖然夠用了，不過有時我們還是會想做其他 UI 上的樣式變化。-moz-drag-over 的 CSS pseudo-class 便可以應用在拖曳目標元素上。

```css
.droparea:-moz-drag-over {
  border: 1px solid black;
}
```

當目標元素的 dragenter 預設事件有被取消時，這個 pseudo-class 就會啟動，目標 UI 會套用 1px 的黑色 border，請注意 dragover 並不會檢查這項設定。

其他比如說插入圖片等，在 dragenter 事件內執行更多更複雜的樣式變化也是可以的。

倘若想要做出圖片更著滑鼠在拖曳目標區上面移動的效果，那麼可以在 dragover 事件內來取得的[clientX](/zh-TW/docs/DOM/event.clientX)和[clientY](/zh-TW/docs/DOM/event.clientY)的滑鼠座標資訊。

最後，應該要在 dragleave 事件內復原之前所做樣式變更，dragleave 事件不需要取消預設事件行為、永遠都會觸發，即使拖曳被取消了；至於使用-moz-drag-over 的 CSS 方法的話，樣式復原會自動執行，不用擔心。

## 執行放置作業

當使用者在拖曳目標區上放開滑鼠時，drop 事件就會觸發。當 drop 事件發生，我們需要取出被丟入的資料，然後處理之。

要取出被丟入的資料，那就要呼叫 dataTransfer 物件的[getData](/zh-TW/docs/DragDrop/DataTransfer#getData.28.29)方法。getData 方法接受資料型態的參數，它會回傳[setData](/zh-TW/docs/DragDrop/DataTransfer#setData.28.29)所存入的對應資料型態的資料，倘若沒有對應型態資料，那空字串就會被回傳。

```js
function onDrop(event) {
  var data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

上面的範例會取出文字資料，假設拖曳目標區是文字區域，例如 p 或 div 元素，那麼資料就會被當作文字內容，插入目標元素之中。

網頁之中，如果我們已經處理過放置資料，那應該要呼叫{preventDefault}方法防止瀏覽器再次處理資料，比如說，Firefox 預設是會開啟拖入的連結，但我們可以取消這項預設行為來避免開啟連結。

當然也可以取得其他種類資料來使用，比如說連結資料，[text/uri-list](/zh-TW/docs/DragDrop/Recommended_Drag_Types#link)。

```js
function doDrop(event)
{
  var links = event.dataTransfer.getData("text/uri-list").split("\n");
  for each (var link in links) {
    if (link.indexOf("#") == 0)
      continue;

    var newlink = document.createElement("a");
    newlink.href = link;
    newlink.textContent = link;
    event.target.appendChild(newlink);
  }
  event.preventDefault();
}
```

上面的範例取得連結資料，然後生成連結元素、加入頁面。從 text/uri-list 字面上不難猜出這種資料是一行行的 URL，所以我們呼叫 [split](/zh-TW/docs/JavaScript/Reference/Global_Objects/String/split) 方法拆開一行行的 URL，再將 URL 一個一個加入頁面。請注意我們有避開開頭為「#」字元的註解。

更簡單的作法是採用特別 URL 型態。URL 型態是一個特殊簡寫用途形態，它不會出現在{types}屬性中，但它可以方便的取得第一個連結，如下:

```js
var link = event.dataTransfer.getData("URL");
```

這個作法能夠省去檢查註解和一個一個掃過 URL，但只會得到第一個 URL。

下面的例子會從多個支援的資料型態中，找出支援的資料。

```js
function doDrop(event)
{
  var types = event.dataTransfer.types;
  var supportedTypes = ["application/x-moz-file", "text/uri-list", "text/plain"];
  types = supportedTypes.filter(function (value) types.contains(value));
  if (types.length)
    var data = event.dataTransfer.getData(types[0]);
  event.preventDefault();
}
```

## 完成拖曳

拖曳作業完成後，不論成功或取消於否，被拖曳元素的[`dragend`](/zh-TW/docs/Web/Reference/Events/dragend)事件都會觸發，如果想要判別作業是否完成，可以檢查 dropEffect 屬性，若是 dropEffect 為 none，代表拖曳作業被取消，否則 dropEffect 的值代表所完成的作業類型。

有一個 Gecko 專屬的[mozUserCancelled](/zh-TW/docs/DragDrop/DataTransfer#mozUserCancelled.28.29)屬性，當使用者按 ESC 鍵取消拖曳後，這個屬性會為 true，但若是因其他理由被取消或成功，則為 false

拖曳作業的放置可以發生在同一個視窗或其他應用程式，而且 dragend 事件還是會觸發，不過事件中的[screenX](/zh-TW/docs/DOM/event.screenX)與[screenY](/zh-TW/docs/DOM/event.screenY)屬性會是放置發生點的資訊。

當 dragend 事件結束傳遞後，拖曳作業也完成了。

\[1] 在 Gecko，如果被拖曳元素在拖曳作業還在進行中移動或刪除，那麼 dragend 事件就不會觸發。[bug 460801](https://bugzilla.mozilla.org/show_bug.cgi?id=460801)

## 參見

- [HTML Drag and Drop API (Overview)](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API)
- [Dragging and Dropping Multiple Items](/zh-TW/docs/Web/Guide/HTML/Dragging_and_Dropping_Multiple_Items)
- [Recommended Drag Types](/zh-TW/docs/Web/Guide/HTML/Recommended_Drag_Types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
