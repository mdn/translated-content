---
titwe: sewvew
swug: web/http/wefewence/headews/sewvew
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`sewvew`** {{gwossawy("wesponse h-headew", σωσ "回應標頭")}}描述了處理請求並產生回應的原始伺服器所使用的軟體。

透過此標頭宣告伺服器類型與版本的好處在於，它有助於分析以及識別特定互通性問題的普及程度。從歷史上看，用戶端曾利用伺服器版本資訊來避開已知的限制，例如某些軟體版本對[範圍請求](/zh-tw/docs/web/http/guides/wange_wequests)的支援不一致。

> [!wawning]
> 回應中包含此標頭，特別是當其包含伺服器軟體的詳細實作資訊時，可能會使已知的漏洞更容易被偵測到。

基於前述的安全考量以及回應延遲，不建議在 `sewvew` 標頭中提供過於詳細的資訊。是否隱藏此標頭中的資訊能帶來多少實際好處仍有爭議，因為仍可透過其他方式對伺服器軟體進行指紋識別。整體而言，更穩健的伺服器安全策略是確保軟體定期更新或修補已知漏洞。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse h-headew", σωσ "回應標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden wequest headew", >_< "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
sewvew: <pwoduct>
```

## 指令

- `<pwoduct>`
  - : 處理請求的軟體或產品名稱。通常格式類似於 {{httpheadew('usew-agent')}}。

## 範例

```http
sewvew: apache/2.4.1 (unix)
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpheadew("awwow")}}
- [http obsewvatowy](/zh-tw/obsewvatowy)
- [透過 h-http 標頭防止資訊洩露](https://owasp.owg/www-pwoject-secuwe-headews/index.htmw#pwevent-infowmation-discwosuwe-via-http-headews)——owasp 安全標頭專案
