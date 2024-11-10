---
title: JavaScript 概觀
slug: Web/JavaScript/Guide/Introduction
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

這個章節的內容主要是介紹 JavaScript 和討論一些 JavaScript 的基本概念。

## 在開始前需具備之能力

本手冊假設你具有以下基本背景：

- 對網際網路及全球資訊網有大致上的了解
- 對 HTML(HyperText Markup Language )語法理解至一定程度
- 有寫過程式的經驗，若你是完全的新手，可嘗試在主頁上有關[JavaScript](/zh-TW/docs/Web/JavaScript)的教程。

## 什麼是 JavaScript？

JavaScript 是個跨平台、物件導向、輕小型的腳本語言。作為獨立語言並不實用，而是為了能簡單嵌入其他產品和應用程式（例如：網頁瀏覽器）而設計。JavaScript 若寄宿在主體環境（Host environment）時，可以與環境中的物件 （Object）相連，並以程式控制這些物件。

Core JavaScript 包含了物件的核心集合（例如: `Array、` `Date、` `Math`）及語言成份的核心集合（例如：運算子、控制結構、敘述）。在 Core JavaScript 增加額外的物件即可擴充各式各樣的功能，例如：

- 用戶端 - JavaScript 藉由提供物件來擴增核心語言達到控制網頁瀏覽器和其文件物件模型（DOM，Document Object Model）的目的。

舉例來說：用戶端的擴充套件允許某個應用程式將元素放置在 HTML 的表單上及對使用者的操作（例如：滑鼠點選、表單輸入、頁面導覽等）做出回應。

- 伺服器端 - JavaScript 藉由提供和伺服器上執行 JavaScript 相關的物件來擴增核心語言。

舉例來說：伺服器端的擴充套件允許某個應用程式和相關的資料庫交換訊息、對一個其他應用程式的呼叫提供連續性的資訊、在伺服器上執行檔案操作。

透過 JavaScript 的 LiveConnect 功能，你可以使 Java 和 JavaScript 的程式碼彼此相連。在 JavaScript 的程式碼中，你可以實例化（instantiate）Java 的物件並存取那些物件的公有方法（public methods）及欄位（fields）。在 Java 的程式碼中，你可以存取 JavaScript 的物件、屬性（properties）及方法（methods）。

Netscape 公司發明了 JavaScript ，而 JavaScript 的第一次使用正是在 Netscape 自家的瀏覽器上。

## JavaScript 與 Java

JavaScript 與 Java 在某些方面非常相似但本質上卻是不同的。 JavaScript 雖然和 Java 類似，卻沒有 Java 的靜態定型（static typing）及強型態確認（strong type checking）特性。 JavaScript 遵從大部份的 Java 表達式語法、命名傳統和基本的流程控制概念，這特性同時也是為何要將 LiveScript 重新命名為 JavaScript 的原因。

相較於 Java 由許多類別中的宣告建立的 compile-time 系統，JavaScript 支援一個由少數代表數值（numeric）、布林值（Boolean）、字串（string）的資料類型所構成的執行期函式庫（runtime system）。JavaScript 擁有一個基於原型的物件模型（prototype-based object model）而不是普遍使用的基於類別的物件模型（class-based object model）。基於原型的物件模型提供動態繼承（dynamic inheritance）的功能，意即被繼承的物件可以根據個別的物件而改變。JavaScript 也支援不需任何特殊宣告的函式，函式可以是物件的屬性，如同鬆散型態方法（loosely typed method）那樣執行。

JavaScript 和 Java 相比起來，算是一個格式非常自由的語言。你不需要宣告所有的變數、類別（class）、方法，你不需要注意哪些方法是公有（public）或私有（private）或受保護的（protected），你不需要實作介面（interface）。變數、參數及函式回傳的型態並不是顯性型態。

Java 是一個為了快速執行與安全型態而設計的基於類別的程式語言（class-based programming language）。安全型態意即你在 Java 中無法將整數丟給一個物件參考，也無法藉由中斷 Java bytecodes 來存取私有的記憶體。 Java 的基於類別模型（class-based model）意思是程式由專門的類別及其方法所組成。Java 的類別繼承（class inheritance）和強型別（strong typing）通常需要嚴謹的耦合對象階級（coupled object hierarchies）。這些需求使得 Java 在程式的撰寫上比 JavaScript 來的複雜。

相反的，JavaScript 承襲了如同 HyperTalk 和 dBASE 相同的精神：較小、動態類型。 這些腳本語言因為較簡單的語法、特殊化的功能、較寬鬆的要求等特性，進而提供了許多軟體開發工具（programming tool）給更多更廣大的愛好者。

表 1.1 - JavaScript 和 Java 比較

| JavaScript                                                                                                                          | Java                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 物件導向。物件的型態之間無區別。藉由原型機制（prototype mechanism）和屬性（properties）實行繼承。屬性和方法可被動態新增至任何物件。 | 類別導向。物件藉由類別階級（class hierarchy）而被分離至類別和所有繼承的實體（instance）中。類別和實體無法動態新增屬性和方法。 |
| 變數資料型態沒有宣告就可使用（動態定型，dynamic typing）。                                                                          | 變數資料型態必須宣告才可使用（靜態定型，static typing）。                                                                     |
| 無法自動覆寫到硬碟。                                                                                                                | 無法自動覆寫到硬碟。                                                                                                          |

更多關於 JavaScript 和 Java 的差異比較，請參見 [Details of the Object Model](/zh-TW/docs/JavaScript/Guide/Details_of_the_Object_Model) 。

## JavaScript 與 ECMAScript 規格

Netscape 公司發明了 JavaScript ，而 JavaScript 的第一次應用正是在 Netscape 瀏覽器。然而，Netscape 後來和 [Ecma International](https://ecma-international.org/)（一個致力於將資訊及通訊系統標準化的歐洲組織，前身為 ECMA - 歐洲計算機製造商協會）合作，開發一個基於 JavaScript 核心並同時兼具標準化與國際化的程式語言，這個經過標準化的 JavaScript 便稱作 ECMAScript ，和 JavaScript 有著相同的應用方式並支援相關標準。各個公司都可以使用這個開放的標準語言去開發 JavaScript 的專案。ECMAScript 標準記載於 ECMA-262 這個規格中。

ECMA-262 標準同時也經過 [ISO](https://www.iso.org/home.html)（國際標準化組織）認証，成為 ISO-16262 標準。你可以在 Mozilla 的網站上找到 [PDF 版本的 ECMA-262](https://www-archive.mozilla.org/js/language/E262-3.pdf)，但這板本已過期；你也可以在 [Ecma International 的網站](https://ecma-international.org/publications-and-standards/standards/ecma-262/) 找到這個規格。 ECMAScript 規格中並沒有描述已經被 W3C（全球資訊網協會）標準化的文件物件模型（DOM）。文件物件模型定義了 HTML 文件物件（document objects）和腳本之間運作的方式。

### JavaScript 版本與 ECMAScript 版本之間的關係

ECMAScript 規格（ECMA-262）在 Netscape 和 Ecma International 的密切合作下產生。下表描述了 JavaScript 的版本和 ECMAScript 的版本之間的關係。

表 1.2 - JavaScript 版本及 ECMAScript 版本

<table>
  <caption></caption>
  <thead>
    <tr>
      <th scope="row">JavaScript 的版本</th>
      <th scope="col">和 ECMAScript 版本的關係</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>JavaScript 1.1</td>
      <td>ECMA-262 第1版是基於 JavaScript 1.1 建立的。</td>
    </tr>
    <tr>
      <td>JavaScript 1.2</td>
      <td>
        <p>
          ECMA-262 在 JavaScript 1.2 發行之際尚未完成。以下是 JavaScript 1.2
          並未完全相容於 ECMA-262 第1版的原因：
        </p>
        <ul>
          <li>
            Netscape 在 JavaScript 1.2 中新增了一些特性，而這些特性在 ECMA-262
            並未被考慮到。
          </li>
          <li>
            ECMA-262 新增了兩個新的特性：使用國際化的 Unicode
            編碼及統一了不同平台之間的行為。JavaScript 1.2
            中的一些特性，例如：日期物件（Date
            object）是具有平台依賴性（platform-dependent）並且使用平台特製化行為（platform-specific
            behavior）的。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>JavaScript 1.3</td>
      <td>
        <p>JavaScript 1.3 完全相容於 ECMA-262 第1版。</p>
        JavaScript 1.3 藉由保留所有在 JavaScript 1.2 新增的特性（除了 == 和 ！=
        以外，因為要和 ECMA-262 一致），解決了 JavaScript 1.2 和 ECMA-262
        之間的衝突。
      </td>
    </tr>
    <tr>
      <td>JavaScript 1.4</td>
      <td>
        <p>JavaScript 1.4 完全相容於 ECMA-262 第1版。</p>
        ECMAScript 第3版規格在 JavaScript 1.4 發行之際尚未完成。
      </td>
    </tr>
    <tr>
      <td>JavaScript 1.5</td>
      <td>JavaScript 1.5 完全相容於 ECMA-262 第3版。</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> ECMA-262 第 2 版是由已修正錯誤的第 1 版並加上些微的更動構成。現今由 Ecma International 的 TC39 工作組（TC39 Working Group）所發行的版本是 ECMAScript 5.1 版

[JavaScript Reference](/zh-TW/docs/JavaScript/Reference) 指出了哪些 JavaScript 的特性是相容於 ECMAScript 的。

JavaScript 永遠包含許多非 ECMAScript 規格中的特性；

JavaScript 不僅相容於 ECMAScript 更提供了額外的特性。

### JavaScript 使用說明 v.s ECMAScript 規格

ECMAScript 規格是執行 ECMAScript 所必須的條件，當你想判斷某個 JavaScript 的特性是否在其他 ECMAScript 實作中有被支援時，ECMAScript 規格是非常有用的。如果你打算撰寫 JavaScript 程式碼並在程式碼中使用僅有 ECMAScript 所支援的特性，那你可能需要查閱一下 ECMAScript 規格。

ECMAScript 文件並不是為了幫助腳本程式設計師而撰寫，如果想知道撰寫腳本的相關資訊，請參考 JavaScript 使用說明。

### JavaScript 和 ECMAScript 的專門術語

ECMAScript 規格使用的術語和語法對於 JavaScript 的程式設計師來說可能不是那麼的親切。雖然語言的描述在 ECMAScript 中可能會有所不同，但語言本身的性質仍然是不變的。JavaScript 支援所有在 ECMAScript 規格中被描述到的功能。

JavaScript 使用說明對於語言的觀點的描述較適合 JavaScript 的程式設計師。例如：

- 因為全域物件（Global Object）並不會被直接使用，所以並沒有在 JavaScript 文件說明中被論及。而像是全域物件的方法和屬性這些有被使用到的，就有在 JavaScript 使用說明中被論及，但被稱作頂層（top-level）函式和頂層屬性。
- 無參數建構函式（no parameter constructor，也稱作零參數建構函式，zero-argument constructor）。帶有 Number 物件及 String 物件的無參數建構函式並沒有在 JavaScript 使用說明中被論及，因為其產生出來的東西用途有限：一個沒有參數的 Number 建構函式回傳 +0 、一個沒有參數的 String 建構函式回傳 "" （一個空字串）
