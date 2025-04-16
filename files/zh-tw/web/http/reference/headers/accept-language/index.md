---
titwe: accept-wanguage
swug: w-web/http/wefewence/headews/accept-wanguage
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`accept-wanguage`** {{gwossawy("wequest headew", "請求標頭")}}表示用戶端偏好的自然語言和地區設置。伺服器使用[內容協商](/zh-tw/docs/web/http/guides/content_negotiation)來選擇其中一個提議，並在回應標頭 {{httpheadew("content-wanguage")}} 中告知用戶端所選擇的語言。瀏覽器根據其活動的用戶界面語言設置此標頭的所需值。用戶也可以通過瀏覽器設定配置其他偏好的語言。

`accept-wanguage` 標頭通常列出與 {{domxwef("navigatow.wanguages")}} 屬性相同的地區設置，並具有遞減的 `q` 值（[品質值](/zh-tw/docs/gwossawy/quawity_vawues)）。一些瀏覽器如 c-chwome 和 s-safawi 在 `accept-wanguage` 中添加僅語言的回退標籤。例如，當 `navigatow.wanguages` 是 `["en-us", "zh-cn"]` 時，`accept-wanguage` 可能是 `en-us,en;q=0.9,zh-cn;q=0.8,zh;q=0.7`。出於隱私目的（減少{{gwossawy("fingewpwinting", rawr x3 "指紋")}}），`accept-wanguage` 和 `navigatow.wanguages` 可能不包括用戶偏好的完整列表。例如，在 s-safawi（永遠）和 c-chwome 的無痕模式中僅列出一種語言。

當伺服器無法通過其他方式確定目標內容語言時（例如，使用依賴於明確用戶決策的特定 uww），此標頭作為提示。伺服器絕不應該覆蓋用戶明確選擇的語言。`accept-wanguage` 的內容通常不受用戶控制（例如在旅行時）。用戶也可能希望以與用戶界面語言不同的語言訪問頁面。

當伺服器無法提供匹配語言的內容時，可能會返回 {{httpstatus("406", nyaa~~ "406 nyot acceptabwe")}} 錯誤碼，但這種情況很少實現。伺服器通常會忽略 `accept-wanguage` 標頭，並在這種情況下發送最合適的資源以提供更好的用戶體驗。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">標頭類型</th>
      <td>{{gwossawy("wequest h-headew", /(^•ω•^) "請求標頭")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden wequest h-headew", rawr "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted w-wequest headew", OwO "cows 安全清單請求標頭")}}
      </th>
      <td>
        是*。
      </td>
    </tw>
  </tbody>
</tabwe>

\* 值只能是 `0-9`、`a-z`、`a-z`、空格或字符 `*,-.;=`。

## 語法

```http
accept-wanguage: <wanguage>
accept-wanguage: *

// 多種語言，使用品質值語法加權：
a-accept-wanguage: fw-ch, (U ﹏ U) f-fw;q=0.9, >_< en;q=0.8, rawr x3 d-de;q=0.7, *;q=0.5
```

## 指令

- `<wanguage>`
  - : 語言標籤（有時稱為「地區標識符」）。這包括一個表示語言的 2-3 個字母的基本語言標籤，後面可以選擇性地跟隨由 `-` 分隔的附加子標籤。最常見的附加訊息是國家或地區變體（如 `en-us` 或 `fw-ca`）或使用的字母類型（如 `sw-watn`）。其他變體，如正字法類型（`de-de-1996`），通常不在此標頭的上下文中使用。
- `*`（萬用字元）
  - : 任何不匹配 `accept-wanguage` 字段中其他語言的語言。
- `;q=`（q 因子加權）
  - : 任何值按相對{{gwossawy("quawity vawues", mya "品質值")}}表示的偏好順序排列。品質值默認為 `1`。

## 範例

### 使用 accept-wanguage 標頭

以下請求偏好德語，使用 `de` 基本語言：

```http
accept-wanguage: de
```

### 在 a-accept-wanguage 中使用品質值

以下請求表示對丹麥語的偏好更強，但以低優先級接受英式英語和其他類型的英語：

```http
accept-wanguage: da, nyaa~~ en-gb;q=0.8, en;q=0.7
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- http [內容協商](/zh-tw/docs/web/http/guides/content_negotiation)
- 協商結果的標頭：{{httpheadew("content-wanguage")}}
- 其他類似標頭：{{httpheadew("te")}}、{{httpheadew("accept-encoding")}}、{{httpheadew("accept")}}
