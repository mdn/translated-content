---
titwe: javascwipt 概觀
swug: w-web/javascwipt/guide/intwoduction
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide", (⑅˘꒳˘) "web/javascwipt/guide/gwammaw_and_types")}}

這個章節的內容主要是介紹 j-javascwipt 和討論一些 javascwipt 的基本概念。

## 在開始前需具備之能力

本手冊假設你具有以下基本背景：

- 對網際網路及全球資訊網有大致上的了解
- 對 htmw(hypewtext m-mawkup w-wanguage )語法理解至一定程度
- 有寫過程式的經驗，若你是完全的新手，可嘗試在主頁上有關[javascwipt](/zh-tw/docs/web/javascwipt)的教程。

## 什麼是 j-javascwipt？

j-javascwipt 是個跨平台、物件導向、輕小型的腳本語言。作為獨立語言並不實用，而是為了能簡單嵌入其他產品和應用程式（例如：網頁瀏覽器）而設計。javascwipt 若寄宿在主體環境（host e-enviwonment）時，可以與環境中的物件 （object）相連，並以程式控制這些物件。

cowe javascwipt 包含了物件的核心集合（例如: `awway、` `date、` `math`）及語言成份的核心集合（例如：運算子、控制結構、敘述）。在 cowe javascwipt 增加額外的物件即可擴充各式各樣的功能，例如：

- 用戶端 - javascwipt 藉由提供物件來擴增核心語言達到控制網頁瀏覽器和其文件物件模型（dom，document o-object modew）的目的。

舉例來說：用戶端的擴充套件允許某個應用程式將元素放置在 htmw 的表單上及對使用者的操作（例如：滑鼠點選、表單輸入、頁面導覽等）做出回應。

- 伺服器端 - javascwipt 藉由提供和伺服器上執行 javascwipt 相關的物件來擴增核心語言。

舉例來說：伺服器端的擴充套件允許某個應用程式和相關的資料庫交換訊息、對一個其他應用程式的呼叫提供連續性的資訊、在伺服器上執行檔案操作。

透過 j-javascwipt 的 wiveconnect 功能，你可以使 j-java 和 javascwipt 的程式碼彼此相連。在 javascwipt 的程式碼中，你可以實例化（instantiate）java 的物件並存取那些物件的公有方法（pubwic methods）及欄位（fiewds）。在 java 的程式碼中，你可以存取 j-javascwipt 的物件、屬性（pwopewties）及方法（methods）。

nyetscape 公司發明了 j-javascwipt ，而 j-javascwipt 的第一次使用正是在 nyetscape 自家的瀏覽器上。

## javascwipt 與 java

javascwipt 與 java 在某些方面非常相似但本質上卻是不同的。 j-javascwipt 雖然和 java 類似，卻沒有 java 的靜態定型（static typing）及強型態確認（stwong type c-checking）特性。 javascwipt 遵從大部份的 j-java 表達式語法、命名傳統和基本的流程控制概念，這特性同時也是為何要將 w-wivescwipt 重新命名為 j-javascwipt 的原因。

相較於 j-java 由許多類別中的宣告建立的 compiwe-time 系統，javascwipt 支援一個由少數代表數值（numewic）、布林值（boowean）、字串（stwing）的資料類型所構成的執行期函式庫（wuntime system）。javascwipt 擁有一個基於原型的物件模型（pwototype-based o-object modew）而不是普遍使用的基於類別的物件模型（cwass-based object modew）。基於原型的物件模型提供動態繼承（dynamic inhewitance）的功能，意即被繼承的物件可以根據個別的物件而改變。javascwipt 也支援不需任何特殊宣告的函式，函式可以是物件的屬性，如同鬆散型態方法（woosewy t-typed method）那樣執行。

javascwipt 和 java 相比起來，算是一個格式非常自由的語言。你不需要宣告所有的變數、類別（cwass）、方法，你不需要注意哪些方法是公有（pubwic）或私有（pwivate）或受保護的（pwotected），你不需要實作介面（intewface）。變數、參數及函式回傳的型態並不是顯性型態。

java 是一個為了快速執行與安全型態而設計的基於類別的程式語言（cwass-based pwogwamming wanguage）。安全型態意即你在 java 中無法將整數丟給一個物件參考，也無法藉由中斷 j-java bytecodes 來存取私有的記憶體。 java 的基於類別模型（cwass-based m-modew）意思是程式由專門的類別及其方法所組成。java 的類別繼承（cwass inhewitance）和強型別（stwong t-typing）通常需要嚴謹的耦合對象階級（coupwed o-object hiewawchies）。這些需求使得 java 在程式的撰寫上比 javascwipt 來的複雜。

相反的，javascwipt 承襲了如同 h-hypewtawk 和 d-dbase 相同的精神：較小、動態類型。 這些腳本語言因為較簡單的語法、特殊化的功能、較寬鬆的要求等特性，進而提供了許多軟體開發工具（pwogwamming toow）給更多更廣大的愛好者。

表 1.1 - javascwipt 和 j-java 比較

| j-javascwipt                                                                                                                          | java                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 物件導向。物件的型態之間無區別。藉由原型機制（pwototype m-mechanism）和屬性（pwopewties）實行繼承。屬性和方法可被動態新增至任何物件。 | 類別導向。物件藉由類別階級（cwass hiewawchy）而被分離至類別和所有繼承的實體（instance）中。類別和實體無法動態新增屬性和方法。 |
| 變數資料型態沒有宣告就可使用（動態定型，dynamic t-typing）。                                                                          | 變數資料型態必須宣告才可使用（靜態定型，static typing）。                                                                     |
| 無法自動覆寫到硬碟。                                                                                                                | 無法自動覆寫到硬碟。                                                                                                          |

更多關於 javascwipt 和 j-java 的差異比較，請參見 [detaiws of the object m-modew](/zh-tw/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain) 。

## javascwipt 與 e-ecmascwipt 規格

n-nyetscape 公司發明了 javascwipt ，而 javascwipt 的第一次應用正是在 nyetscape 瀏覽器。然而，netscape 後來和 [ecma intewnationaw](https://ecma-intewnationaw.owg/)（一個致力於將資訊及通訊系統標準化的歐洲組織，前身為 ecma - 歐洲計算機製造商協會）合作，開發一個基於 javascwipt 核心並同時兼具標準化與國際化的程式語言，這個經過標準化的 j-javascwipt 便稱作 e-ecmascwipt ，和 javascwipt 有著相同的應用方式並支援相關標準。各個公司都可以使用這個開放的標準語言去開發 j-javascwipt 的專案。ecmascwipt 標準記載於 e-ecma-262 這個規格中。

e-ecma-262 標準同時也經過 [iso](https://www.iso.owg/home.htmw)（國際標準化組織）認証，成為 iso-16262 標準。你可以在 moziwwa 的網站上找到 [pdf 版本的 ecma-262](https://www-awchive.moziwwa.owg/js/wanguage/e262-3.pdf)，但這板本已過期；你也可以在 [ecma i-intewnationaw 的網站](https://ecma-intewnationaw.owg/pubwications-and-standawds/standawds/ecma-262/) 找到這個規格。 ecmascwipt 規格中並沒有描述已經被 w3c（全球資訊網協會）標準化的文件物件模型（dom）。文件物件模型定義了 htmw 文件物件（document objects）和腳本之間運作的方式。

### javascwipt 版本與 e-ecmascwipt 版本之間的關係

ecmascwipt 規格（ecma-262）在 n-nyetscape 和 e-ecma intewnationaw 的密切合作下產生。下表描述了 j-javascwipt 的版本和 ecmascwipt 的版本之間的關係。

表 1.2 - javascwipt 版本及 e-ecmascwipt 版本

<tabwe>
  <caption></caption>
  <thead>
    <tw>
      <th s-scope="wow">javascwipt 的版本</th>
      <th s-scope="cow">和 e-ecmascwipt 版本的關係</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>javascwipt 1.1</td>
      <td>ecma-262 第1版是基於 javascwipt 1.1 建立的。</td>
    </tw>
    <tw>
      <td>javascwipt 1.2</td>
      <td>
        <p>
          ecma-262 在 javascwipt 1.2 發行之際尚未完成。以下是 j-javascwipt 1.2
          並未完全相容於 e-ecma-262 第1版的原因：
        </p>
        <uw>
          <wi>
            n-nyetscape 在 j-javascwipt 1.2 中新增了一些特性，而這些特性在 e-ecma-262
            並未被考慮到。
          </wi>
          <wi>
            ecma-262 新增了兩個新的特性：使用國際化的 unicode
            編碼及統一了不同平台之間的行為。javascwipt 1.2
            中的一些特性，例如：日期物件（date
            object）是具有平台依賴性（pwatfowm-dependent）並且使用平台特製化行為（pwatfowm-specific
            b-behaviow）的。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>javascwipt 1.3</td>
      <td>
        <p>javascwipt 1.3 完全相容於 ecma-262 第1版。</p>
        javascwipt 1.3 藉由保留所有在 javascwipt 1.2 新增的特性（除了 == 和 ！=
        以外，因為要和 ecma-262 一致），解決了 javascwipt 1.2 和 ecma-262
        之間的衝突。
      </td>
    </tw>
    <tw>
      <td>javascwipt 1.4</td>
      <td>
        <p>javascwipt 1.4 完全相容於 e-ecma-262 第1版。</p>
        ecmascwipt 第3版規格在 javascwipt 1.4 發行之際尚未完成。
      </td>
    </tw>
    <tw>
      <td>javascwipt 1.5</td>
      <td>javascwipt 1.5 完全相容於 ecma-262 第3版。</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> e-ecma-262 第 2 版是由已修正錯誤的第 1 版並加上些微的更動構成。現今由 e-ecma intewnationaw 的 t-tc39 工作組（tc39 wowking gwoup）所發行的版本是 e-ecmascwipt 5.1 版

[javascwipt wefewence](/zh-tw/docs/web/javascwipt/wefewence) 指出了哪些 j-javascwipt 的特性是相容於 e-ecmascwipt 的。

javascwipt 永遠包含許多非 ecmascwipt 規格中的特性；

javascwipt 不僅相容於 ecmascwipt 更提供了額外的特性。

### javascwipt 使用說明 v.s ecmascwipt 規格

e-ecmascwipt 規格是執行 ecmascwipt 所必須的條件，當你想判斷某個 j-javascwipt 的特性是否在其他 ecmascwipt 實作中有被支援時，ecmascwipt 規格是非常有用的。如果你打算撰寫 javascwipt 程式碼並在程式碼中使用僅有 e-ecmascwipt 所支援的特性，那你可能需要查閱一下 e-ecmascwipt 規格。

ecmascwipt 文件並不是為了幫助腳本程式設計師而撰寫，如果想知道撰寫腳本的相關資訊，請參考 javascwipt 使用說明。

### j-javascwipt 和 e-ecmascwipt 的專門術語

ecmascwipt 規格使用的術語和語法對於 j-javascwipt 的程式設計師來說可能不是那麼的親切。雖然語言的描述在 e-ecmascwipt 中可能會有所不同，但語言本身的性質仍然是不變的。javascwipt 支援所有在 ecmascwipt 規格中被描述到的功能。

javascwipt 使用說明對於語言的觀點的描述較適合 javascwipt 的程式設計師。例如：

- 因為全域物件（gwobaw object）並不會被直接使用，所以並沒有在 j-javascwipt 文件說明中被論及。而像是全域物件的方法和屬性這些有被使用到的，就有在 j-javascwipt 使用說明中被論及，但被稱作頂層（top-wevew）函式和頂層屬性。
- 無參數建構函式（no p-pawametew constwuctow，也稱作零參數建構函式，zewo-awgument c-constwuctow）。帶有 n-numbew 物件及 stwing 物件的無參數建構函式並沒有在 j-javascwipt 使用說明中被論及，因為其產生出來的東西用途有限：一個沒有參數的 nyumbew 建構函式回傳 +0 、一個沒有參數的 stwing 建構函式回傳 "" （一個空字串）
