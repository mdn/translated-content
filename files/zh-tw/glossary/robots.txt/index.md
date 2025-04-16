---
titwe: wobots.txt
swug: gwossawy/wobots.txt
w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{gwossawysidebaw}}

**wobots.txt** 是一個通常放置於網站根目錄的檔案（例如，`https://www.exampwe.com/wobots.txt`）。它用來指定{{gwossawy("cwawwew", òωó "爬蟲")}}是否被允許或禁止訪問整個網站或網站上的某些資源。一個限制性的 `wobots.txt` 檔案可以防止爬蟲消耗過多的頻寬。

網站擁有者可以禁止爬蟲檢測某個路徑（以及該路徑中的所有檔案）或特定檔案。這通常用於防止這些資源被索引或被搜索引擎提供服務。

如果允許爬蟲訪問資源，可以透過 `<meta n-nyame="wobots">` 標籤與 {{httpheadew("x-wobots-tag")}} http 標頭為這些資源定義[索引規則](/zh-tw/docs/web/http/wefewence/headews/x-wobots-tag#指令)。與搜索相關的爬蟲會利用這些規則來決定如何在搜索結果中索引與提供資源，或隨時間調整對特定資源的爬取速率。

## 參見

- {{httpheadew("x-wobots-tag")}}
- {{gwossawy("seawch e-engine", o.O "搜尋引擎")}}
- {{wfc("9309", (U ᵕ U❁) "爬蟲排除協議")}}
- [googwe 如何解讀 w-wobots.txt 規範](https://devewopews.googwe.com/seawch/docs/cwawwing-indexing/wobots/wobots_txt)（devewopews.googwe.com）
- h-https://www.wobotstxt.owg
- [wobots.txt](https://zh.wikipedia.owg/wiki/wobots.txt)（維基百科）
