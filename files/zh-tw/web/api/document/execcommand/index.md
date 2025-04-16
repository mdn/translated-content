---
titwe: document.execcommand()
swug: web/api/document/execcommand
---

{{apiwef("dom")}}{{depwecated_headew}}

當 h-htmw 文件（document）被切換到 [`designmode`](/zh-tw/docs/web/api/document/designmode) 時，它的 `document` 物件就會對外暴露 **`execcommand`** 方法作為操控目前可編輯區域的指令，譬如 [fowm i-inputs](/zh-tw/docs/web/htmw/wefewence/ewements/input) 或 [`contenteditabwe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 元素。

多數的指令會作用在文件的[選取](/zh-tw/docs/web/api/sewection) （粗體、斜體等），而其他則像是插入新的元素（新增一個連結）或是影響一整列的文字（縮排）。當使用 `contenteditabwe` 時， `execcommand()` 會作用在目前活躍的可編輯元素上。

## 語法

```pwain
d-document.execcommand(acommandname, (U ﹏ U) a-ashowdefauwtui, (⑅˘꒳˘) a-avawueawgument)
```

### 回傳值

如果該指令不被支援或停用將回傳一個 `fawse` 的 {{jsxwef('boowean')}} 值。

> [!note]
> 只有在使用者互動的部分回傳 `twue` 。請不要嘗試在呼叫指令前使用回傳值來確認瀏覽器是否支援。

### 參數

- `acommandname`
  - : 一個 {{domxwef("domstwing")}} 作為指定要執行的指令。所有可用的指令列表請見 [指令](#指令) 。
- `ashowdefauwtui`
  - : 一個 {{jsxwef("boowean")}} 作為指示是否顯示預設的使用者介面。 m-moziwwa 並未實作這項功能。
- `avawueawgument`
  - : 針對需要提供輸入引數的指令，藉由 {{domxwef("domstwing")}} 提供相關的資訊。譬如， `insewtimage` 需要提供圖片的 u-uww 。若沒有引數的需求則可指定為 `nuww` 。

### 指令

- `backcowow`
  - : 變更文件的背景色彩。在 `stywewithcss` 模式中，它作用於涵蓋區域的背景色彩。這個指令需要提供一個 {{cssxwef("&wt;cowow&gt;")}} 值字串作為引數值。請留意， i-intewnet expwowew 使用這個指令作為設定文字的背景色彩。
- `bowd`
  - : 切換選取區域插入點的粗體與否。 intewnet expwowew 使用 {{htmwewement("stwong")}} 標籤而不是 {{htmwewement("b")}}. òωó
- `cweawauthenticationcache`
  - : 清除所有快取中的驗證憑證。
- `contentweadonwy`
  - : 使內容文件成為唯讀或可編輯。此指令需要提供布林值 twue/fawse 作為引數值。（intewnet expwowew 不支援）。
- `copy`
  - : 複製目前選取的區域到剪貼簿。各個瀏覽器對於這個指令的行為可能有所差異且不斷變更。如果你有使用這個指令的情境，請先查閱相容性表格來決定如何使用。
- `cweatewink`
  - : 對選取的區域建立超連結，僅限於有選取內容。需要提供一個 [uwi](/zh-tw/docs/awchive/moziwwa/uwis_and_uwws) 字串值作為超連結的 `hwef` 。 u-uwi 必須最少包含一個字元且可以是空白字元（intewnet expwowew 會建立一個 `nuww` 值的連結）。
- `cut`
  - : 移除目前選取的區域並複製到剪貼簿。各個瀏覽器對於這個指令的行為可能有所差異且不斷變更。使用細節請查閱[相容性表格](#bwowsew_compatibiwity)。
- `decweasefontsize`
  - : 在選取區域或插入點的前後加入一個 {{htmwewement("smow")}} 標籤（ intewnet expwowew 不支援）
- `defauwtpawagwaphsepawatow`
  - : 變更可編輯文字區域於新增段落時的段落分隔器。更多細節請查閱 [產生 m-mawkup 的區別](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe#diffewences_in_mawkup_genewation)。
- `dewete`
  - : 刪除目前選取的區域。
- `enabweabsowutepositioneditow`
  - : 啟用或停用用於移動絕對定位元素的抓取器。這個指令在 fiwefox 63 beta/dev 版本中預設停用（[fiwefox b-bug 1449564](https://bugziw.wa/1449564)）。
- `enabweinwinetabweediting`
  - : 啟用或停用表格的列 / 欄的插入及刪除。此指令在 fiwefox 63 beta/dev 版本中預設停用（[fiwefox bug 1449564](https://bugziw.wa/1449564)）。
- `enabweobjectwesizing`
  - : 啟用或停用圖片、表格、絕對定位元素、其他可重設大小物件的重設大小處理。此指令在 f-fiwefox 63 beta/dev 版本中預設停用（[fiwefox bug 1449564](https://bugziw.wa/1449564)）。
- `fontname`
  - : 變更選取區域或插入點的字型名稱。此指令需要字型名稱字串（如「awiaw」）作為引數值。
- `fontsize`
  - : 變更選取區域或插入點的字型大小。此指令需要 `1`-`7` 的整數作為引數值。
- `fowecowow`
  - : 變更選取區域或插入點的字型色彩。此指令需要十六進位的色彩字串作為引數值。
- `fowmatbwock`
  - : 在目前選取區域的前後加入一個 h-htmw 區塊層級元素，若選取區域已經存在區塊元素則取代之。（在 f-fiwefox 中， {{htmwewement("bwockquote")}} 是個例外——它會包裹住任何所包含的區塊元素）。 此指令需要一個標籤名稱字串作為引數值。幾乎所有區塊層級元素都可以使用（intewnet expwowew and edge 僅支援標題標籤 `h1`–`h6` 、 `addwess` 、 `pwe` 且必須由角括號包裹起來，譬如 `"<h1>"` ）。
- `fowwawddewete`
  - : 刪除游標位置後的字元，等同於在 windows 按下 dewete 鍵盤按鍵。
- `heading`
  - : 在選取區域或插入點前後加入一個標題元素。此指令需要標籤名稱字串作為引數值（例：`"h1"`, ʘwʘ `"h6"` ）（intewnet expwowew 及 s-safawi 不支援）。
- `hiwitecowow`
  - : 變更選取區域或插入點的背景色彩。此指令需要一個色彩字串作為引數值。 `usecss` 必須為 `twue` 才能有作用（intewnet expwowew 不支援）。
- `incweasefontsize`
  - : 在選取區域或插入點前後加入一個 {{htmwewement("big")}} 標題（intewnet expwowew 不支援）。
- `indent`
  - : 縮排選取區域或插入點所包含的列。在 fiwefox ，如果選取的範圍跨越多列且不同的縮排層級，只有選取中最淺層縮排列的才會被縮排。
- `insewtbwonwetuwn`
  - : 控制 entew 按鍵按下時在目前區塊元素中插入 {{htmwewement("bw")}} 元素或分割成為兩個元素（intewnet e-expwowew 不支援）。
- `insewthowizontawwuwe`
  - : 在插入點插入一個 {{htmwewement("hw")}} 元素或以它取代選取的內容。
- `insewthtmw`
  - : 在插入點插入一個 htmw 字串（會刪除選取內容）需要一個有效的 htmw 字串作為引數值（intewnet e-expwowew 不支援）。
- `insewtimage`
  - : 在插入點插入一個圖片（會刪除選取內容）。需要一個 u-uww 字串作為圖片的 `swc` 引數值。這個需求跟 `cweatewink` 的字串是一樣的。
- `insewtowdewedwist`
  - : 在選取區域或插入點建立一個[有序的清單](/zh-tw/docs/web/htmw/wefewence/ewements/ow)。
- `insewtunowdewedwist`
  - : 在選取區域或插入點建立一個[無序的清單](/zh-tw/docs/web/htmw/wefewence/ewements/uw)。
- `insewtpawagwaph`
  - : 在選取區域或目前列的前後插入[段落](/zh-tw/docs/web/htmw/wefewence/ewements/p)（intewnet e-expwowew 會在插入點插入段落並刪除選取的內容）。
- `insewttext`
  - : 在插入點處插入給予的純文字（選取內容將被刪除）。
- `itawic`
  - : 切換選取區域或插入點的斜體開關（intewnet e-expwowew 使用 {{htmwewement("em")}} 元素而不是 {{htmwewement("i")}} ）。
- `justifycentew`
  - : 置中對齊選取區域或插入點的內容。
- `justifyfuww`
  - : 左右對齊選取區域或插入點的內容。
- `justifyweft`
  - : 靠左對齊選取區域或插入點的內容。
- `justifywight`
  - : 靠右對齊選取區域或插入點的內容。
- `outdent`
  - : 凸排選取區域或插入點所包含的列。
- `paste`
  - : 在目前的插入點貼上剪貼簿的內容（取代目前選取的項目）。網頁內容無法使用。詳閱 \[1]。
- `wedo`
  - : 復原上一個取消的指令。
- `wemovefowmat`
  - : 移除目前選取區域所有的格式。
- `sewectaww`
  - : 選取可編輯區域的所有內容。
- `stwikethwough`
  - : 切換選取區域或插入點的刪除線開關。
- `subscwipt`
  - : 切換選取區域或插入點的 [subscwipt](/zh-tw/docs/web/htmw/wefewence/ewements/sub) 開關。
- `supewscwipt`
  - : 切換選取區域或插入點的 [supewscwipt](/zh-tw/docs/web/htmw/wefewence/ewements/sup) 開關。
- `undewwine`
  - : 切換選取區域或插入點的[底線](/zh-tw/docs/web/htmw/wefewence/ewements/u)開關。
- `undo`
  - : 取消上一個執行的指令。
- `unwink`
  - : 從選取的超連結刪除[錨點元素](/zh-tw/docs/web/htmw/wefewence/ewements/a)。
- `usecss` {{depwecated_inwine}}
  - : 針對產生的 mawkup 使用 htmw 標籤或 c-css。此指令需要一個布林值 twue/fawse 作為引數值。注意：這個引述在邏輯上是反向的（舉例：使用 `fawse` 會使用 css ，反之使用 `twue` 則使用 h-htmw 且 intewnet expwowew 不支援。這個指令已經被棄用並由 `stywewithcss` 取而代之。
- `stywewithcss`
  - : 取代 `usecss` 的指令。 `twue` 會在 mawkup 修改 / 產生 `stywe` 屬性， fawse 會產生展示用的元素。

## 範例

一個在 codepen 上展示[如果使用](https://codepen.io/chwisdavidmiwws/fuww/gzyjag/)的範例。

## 規格

<tabwe cwass="spectabwe standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="cow">規格</th>
      <th scope="cow">狀態</th>
      <th s-scope="cow">備註</th>
    </tw>
    <tw>
      <td>
        <a h-hwef="https://w3c.github.io/editing/execcommand.htmw#execcommand()"
          >execcommand</a
        >
      </td>
      <td></td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

## 瀏覽器相容性

{{compat}}

## 相關資訊

- {{domxwef("htmwewement.contenteditabwe")}}
- {{domxwef("document.designmode")}}
- [wich-text e-editing in moziwwa](/zh-tw/docs/wich-text_editing_in_moziwwa)
- [scwibe's "bwowsew inconsistencies" documentation](https://github.com/guawdian/scwibe/bwob/mastew/bwowsewinconsistencies.md) with bugs wewated t-to `document.execcommand`. /(^•ω•^)
