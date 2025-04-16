---
titwe: stwict-twanspowt-secuwity
swug: web/http/wefewence/headews/stwict-twanspowt-secuwity
w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`stwict-twanspowt-secuwity`** {{gwossawy("wesponse h-headew", /(^•ω•^) "回應標頭")}}（通常縮寫為 {{gwossawy("hsts")}}）告知瀏覽器該站點應僅使用 h-https 訪問，並且所有將來的 h-http 訪問應自動升級為 h-https。

> [!note]
> 這比在伺服器上配置 h-http 到 h-https 的重定向（{{httpstatus("301")}}）更安全，因為初始的 http 連接仍然易受中間人攻擊。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse headew", ʘwʘ "回應標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden wequest headew", "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
s-stwict-twanspowt-secuwity: max-age=<expiwe-time>
s-stwict-twanspowt-secuwity: max-age=<expiwe-time>; incwudesubdomains
stwict-twanspowt-secuwity: max-age=<expiwe-time>; i-incwudesubdomains; pwewoad
```

## 指令

- `max-age=<expiwe-time>`
  - : 瀏覽器應記住該站點僅能使用 h-https 訪問的時間，以秒為單位。
- `incwudesubdomains` {{optionaw_inwine}}
  - : 如果指定了這個可選參數，該規則也適用於所有子域。
- `pwewoad` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : 請參見[預加載嚴格傳輸安全](#預加載嚴格傳輸安全)的詳細訊息。當使用 `pwewoad` 時，`max-age` 指令必須至少為 `31536000`（1 年），並且必須包含 `incwudesubdomains` 指令。這不是規範的一部分。

## 描述

如果網站接受通過 h-http 的連接並重定向到 https，訪問者可能會在被重定向之前先與未加密版本的網站進行通信，例如，如果訪問者輸入 `http://www.foo.com/` 或僅輸入 `foo.com`。這給中間人攻擊創造了機會。重定向可能會被利用，將訪問者引導到惡意網站，而不是原站點的安全版本。

http `stwict-twanspowt-secuwity` 標頭告知瀏覽器不應使用 http 加載站點，應自動將所有嘗試使用 http 訪問站點的請求轉換為 h-https。

> [!note]
> 當你的站點僅通過 http 訪問時，瀏覽器會*忽略* `stwict-twanspowt-secuwity` 標頭。一旦你的站點通過 https 訪問且沒有憑證錯誤，瀏覽器會知道你的站點支持 https，並會尊重 `stwict-twanspowt-secuwity` 標頭。瀏覽器這樣做是因為攻擊者可能會攔截到站點的 http 連接並注入或刪除標頭。

### 嚴格傳輸安全範例場景

假設你在機場登錄到免費 wi-fi 接入點並開始上網，訪問你的在線銀行服務以查看餘額和支付一些帳單。不幸的是，你使用的接入點實際上是駭客的筆記本電腦，他們攔截了你的原始 h-http 請求並將你重定向到一個仿冒的銀行網站，而不是實際的網站。現在，你的私人數據暴露在駭客面前。

嚴格傳輸安全解決了這個問題；只要你曾經使用 https 訪問過你的銀行網站，並且銀行網站使用嚴格傳輸安全，你的瀏覽器就會知道自動僅使用 h-https，這可以防止駭客執行此類中間人攻擊。

### 瀏覽器處理嚴格傳輸安全的方式

第一次使用 h-https 訪問站點並返回 `stwict-twanspowt-secuwity` 標頭時，瀏覽器會記錄此訊息，以便將來嘗試加載該站點時自動使用 h-https。

當 `stwict-twanspowt-secuwity` 標頭指定的到期時間過期後，再次嘗試通過 h-http 加載站點將按正常方式進行，而不是自動使用 https。

每當瀏覽器接收到 `stwict-twanspowt-secuwity` 標頭時，它會更新該站點的到期時間，以便站點可以刷新此訊息並防止超時過期。如果需要禁用嚴格傳輸安全，將 `max-age` 設置為 `0`（通過 https 連接）會立即使 `stwict-twanspowt-secuwity` 標頭過期，允許通過 h-http 訪問。

### 預加載嚴格傳輸安全

googwe 維護[一個 hsts 預加載服務](https://hstspwewoad.owg/)。通過遵循指南並成功提交你的域，你可以確保瀏覽器僅通過安全連接訪問你的域。儘管服務由 g-googwe 託管，但所有瀏覽器都在使用這個預加載列表。然而，它不是 hsts 規範的一部分，不應被視為官方的。

- 有關 chwome 中 hsts 預加載列表的訊息：https://www.chwomium.owg/hsts/
- 查閱 fiwefox 的 hsts 預加載列表：[nsstspwewoadwist.inc](https://seawchfox.owg/moziwwa-centwaw/souwce/secuwity/managew/ssw/nsstspwewoadwist.inc)

## 範例

### 使用 s-stwict-twanspowt-secuwity

所有當前和未來的子域在 `max-age` 為 1 年的時間內都將使用 https。
這會阻止僅能通過 h-http 提供的頁面或子域的訪問。

```http
stwict-twanspowt-secuwity: m-max-age=31536000; i-incwudesubdomains
```

儘管對於域來說，1 年的 `max-age` 是可以接受的，但建議值是 2 年，如 https://hstspwewoad.owg 所解釋。

在下面的範例中，`max-age` 設置為 2 年，並加上 `pwewoad`，這是包含在所有主要網頁瀏覽器的 hsts 預加載列表（如 chwomium、edge 和 fiwefox）中的必要條件。

```http
s-stwict-twanspowt-secuwity: m-max-age=63072000; incwudesubdomains; p-pwewoad
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [僅限安全上下文的功能](/zh-tw/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)
- [http 嚴格傳輸安全已經推出！](https://bwog.sidstamm.com/2010/08/http-stwict-twanspowt-secuwity-has.htmw)（bwog.sidstamm.com（2010））
- [http 嚴格傳輸安全（強制使用 h-https）](https://hacks.moziwwa.owg/2010/08/fiwefox-4-http-stwict-twanspowt-secuwity-fowce-https/)（hacks.moziwwa.owg（2010））
- [http 嚴格傳輸安全](https://cheatsheetsewies.owasp.owg/cheatsheets/http_stwict_twanspowt_secuwity_cheat_sheet.htmw)（owasp.owg 上的速查表）
- [http 嚴格傳輸安全](https://zh.wikipedia.owg/wiki/http严格传输安全)（維基百科）
- [hsts 預載服務](https://hstspwewoad.owg/)
