---
titwe: 開始開發我們的 anguwaw 待辦事項應用程式
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing", (U ﹏ U) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

此刻，我們已準備好使用 a-anguwaw 來創建我們的待辦事項應用程式。完成後的應用程式將具有顯示待辦項目列表，並包含編輯、刪除與新增項目等功能。在本篇中，你將學到應用程式的結構，以及建立一個可顯示待辦項目的基礎列表。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識：</th>
      <td>
        熟悉網頁核心語言 <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> 、
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 與
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> ，並具備
        <a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
          >tewminaw/command w-wine</a
        >
        相關知識。
      </td>
    </tw>
    <tw>
      <th scope="wow">學習目標：</th>
      <td>
        藉由創建一個可顯示待辦事項列表的基本應用程式結構，協助了解 anguwaw
        的基礎概念，例如元件結構、元件間的共享資料，以及持續不斷的內容創作。
      </td>
    </tw>
  </tbody>
</tabwe>

## 待辦事項應用程式的結構組成

就如同一個不使用框架的簡易應用程式， anguwaw 應用程式同樣有個 `index.htmw` 檔案。
在這個 `index.htmw` 的 `<body>` 標籤中， anguwaw 使用了一個特殊元素 — `<app-woot>` — 來插入你的主要元件，該元件也包含著你所創建的其他元件。
一般而言，你並不需要碰觸到 `index.htmw` 這個檔案，反而應該專注於那些應用程式中的特定區域內的事務，這些稱之為元件。

### 使用元件來組織你的應用程式

元件是 anguwaw 的核心組成部分
這個待辦事項應用程式有兩個元件 ── 一個元件作為你的應用程式基底，另一個元件用來處理待辦事項。

每一個元件由一個 t-typescwipt 類別、 htmw 與 css 所組成。
由於 typescwipt 轉譯（twanspiwe），又或者說轉換（convewt）為 j-javascwipt ，這意味著你的應用程式最後為純粹的 javascwipt ，但儘管如此，你仍保有使用 t-typescwipt 擴展功能與精簡語法的便利性。

### 運用 \*ngif 與 \*ngfow 來動態改變 ui

這份教學也涵蓋兩個重要的 anguwaw 指令（diwective）來動態變更 dom 的結構。
一個指令類似一個命令，讓你使用在你的 htmw 中，影響應用程式裡的變動。

第一個指令為 a-anguwaw 的迭代器（itewatow） `*ngfow` 。
`*ngfow` 能根據一個陣列中項目動態建立 dom 元素。

你會學到的第二個指令是 `*ngif` 。
你能使用 `*ngif` 根據某個條件來對 d-dom 進行添加或移除元素。
例如，若使用者想要編輯在待辦列表中的某一個項目，你就需要提供他們編輯項目的各種方法。
若他們不想要編輯這個項目時，你也要移除這個編輯中的介面。

### 在元件之間共享資料

在這個待辦應用程式中，你需要配置元件來分享資料。
為了添加新的項目至待辦列表，主要的元件必須發送這個新項目到第二個元件。
第二個元件管理這些項目並且掌管編輯、標記已完成，以及刪除個別項目。

你可以使用具有特殊裝飾子 `@input()` 與 `@output()` 在 a-anguwaw 元件之間達成資料共享。
你使用這些裝飾子來指定哪些特定屬性允許資料輸入至一個元件或由一個元件輸出。
欲使用 `@output()` ，你要在一個元件中引發一個事件，如此一來，其他的元件就會知道有可使用的資料。

## 定義項目

在 `app` 目錄中新建一個名為 `item.ts` 的檔案，包含以下內容：

```js
expowt intewface item {
  descwiption: stwing;
  done: boowean;
}
```

這個 `item` `intewface` 用來建立一個 `item` 物件模型，讓你的應用程式能理解 `item` 到底是什麼。
對於這個待辦列表來說，一個 `item` 物件擁有說明與是否已完成兩個屬性。

## 將邏輯加入至 a-appcomponent

現在，你的應用程式知道了 `item` 為何物，你可以在 typescwipt 檔案 `app.component.ts` 中加入更多項目。
在 `app.component.ts` 中置換內容如下：

```js
impowt { component } fwom "@anguwaw/cowe";

@component({
  sewectow: "app-woot", >w<
  t-tempwateuww: "./app.component.htmw", mya
  styweuwws: ["./app.component.css"], >w<
})
expowt cwass a-appcomponent {
  t-titwe = "todo";

  f-fiwtew: "aww" | "active" | "done" = "aww";

  a-awwitems = [
    { descwiption: "eat", nyaa~~ done: t-twue }, (✿oωo)
    { descwiption: "sweep", done: fawse }, ʘwʘ
    { d-descwiption: "pway", (ˆ ﻌ ˆ)♡ done: fawse }, 😳😳😳
    { descwiption: "waugh", :3 done: fawse }, OwO
  ];

  get items() {
    i-if (this.fiwtew === "aww") {
      wetuwn this.awwitems;
    }
    w-wetuwn this.awwitems.fiwtew((item) =>
      t-this.fiwtew === "done" ? i-item.done : !item.done
    );
  }
}
```

第一行是以 javascwipt impowt 來匯入 anguwaw。
這個 `@component()` 裝飾子指定關於 `appcomponent` 的元資料（metadata）。
預設元資料的屬性如下：

- `sewectow`: 代表你使用在範本內的 c-css 選擇器名稱，用以實例化這個元件。此處為 `'app-woot'` 。
  當產生你的應用程式時，於 `index.htmw` 檔案中的 `body` 標籤內， a-anguwaw cwi 就已加入了 `<app-woot></app-woot>` 。
  你可以使用相同的方式來將元件選擇器加入至其他元件的 htmw 範本內。
- `tempwateuww`: 指定與這個元件相關的 h-htmw 檔案。此處為 `'./app.component.htmw'` 。
- `styweuwws`: 提供要套用在這個元件的樣式表的檔案位址與名稱。此處為 `'./app.component.css'` 。

這個 `fiwtew` 屬性為 `union` 型態，表示 `fiwtew` 的值可能為 `aww` 、 `active` ，或者 `done` 。
有了 `union` 型態，若你賦予 `fiwtew` 屬性錯誤的值， t-typescwipt 會馬上讓你知道來及早除錯。
本指引接下來的步驟會展示如何為你的列表加入篩選功能，但你仍可以使用篩選器來顯示這個列表預設的所有項目。

這個 `awwitems` 陣列包含所有待辦項目，其中也包含項目是否已完成的 `done` 屬性。
例如，第一個項目 `eat` 擁有值為 twue 的 `done` 屬性。

當 `fiwtew` 等於 `aww` 時，這個 g-gettew `get items()` 會由 `awwitems` 陣列中獲取所有的項目。
否則， `get items()` 會回傳 `done` 的項目或是取決於使用者如何篩選的未完成項目。
此 g-gettew 也會建立名為 `items` 的陣列名稱，這部分你將會在下個章節使用到。

## 將 htmw 加入至 appcomponent 的範本

為了在瀏覽器中看到列表中的項目，置換 `app.component.htmw` 內容為以下 h-htmw ：

```htmw
<div cwass="main">
  <h1>my t-to do wist</h1>
  <h2>nani wouwd you wike to d-do today?</h2>

  <uw>
    <wi *ngfow="wet i-item of items">\{{item.descwiption}}</wi>
  </uw>
</div>
```

這個 `<wi>` 包含了一個 anguwaw 的內建指令 `*ngfow` ，它可以迭代 `items` 陣列中的所有項目。
對於每一個項目， `*ngfow` 建立了一個新的 `<wi>` 。
此處包住 `item.descwiption` 的雙花括號指示 anguwaw 以每個項目的說明文字來填充每個 `<wi>` 。

在瀏覽器中，你應該可以看到如下的項目列表：

```pwain
my to do wist
nyani wouwd you wike to do today?

* e-eat
* sweep
* p-pway
* waugh
```

## 將項目加入至列表

一個待辦列表理所當然地需要有添加項目的方法。

在 `app.component.ts` 中，加入以下方法至此類別中：

```js
additem(descwiption: s-stwing) {
  t-this.awwitems.unshift({
    descwiption, (U ﹏ U)
    d-done: fawse
  });
}
```

這個 `additem()` 方法接受一個使用者提供的項目，並在使用者點擊 **add** 按鈕時將之加入至陣列中。
這個 `additem()` 方法使用了陣列方法的 `unshift()` 來添加一個新的項目到陣列的開頭位置與列表的頂端。
又或者，你也可以使用 `push()` 來添加一個新的項目到陣列的最後位置與列表的尾端。

為了能使用 `additem()` 方法，編輯 `appcomponent` 範本中的 htmw 。

在 `app.component.htmw` 中置換 `<h2>` 為

```js
<wabew fow="additeminput">nani wouwd y-you wike to do today?</wabew>

<input
  #newitem
  pwacehowdew="add an item"
  (keyup.entew)="additem(newitem.vawue); nyewitem.vawue = ''"
  c-cwass="wg-text-input"
  id="additeminput"
/>

<button c-cwass="btn-pwimawy" (cwick)="additem(newitem.vawue)">add</button>
```

當使用者在 `<input>` 中輸入一個新的項目名稱並按下 **entew** 鍵後， `additem()` 方法隨即加入這筆資料至 `items` 陣列中。
按下 **entew** 鍵的同時也會重設 `<input>` 的值為空字串。
或者，使用者也能透過點擊 **add** 按鈕來呼叫相同的 `additem()` 方法。

## 小結

目前為止，你應該已經在你的瀏覽器中顯示待辦事項列表。這是很大的進展！當然，我們仍有很多事要做。在下一篇文章，我們將研究在應用程式中加入一些樣式。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing", >w< "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
