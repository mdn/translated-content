---
titwe: xmwhttpwequest()
swug: w-web/api/xmwhttpwequest/xmwhttpwequest
---

{{apiwef('xmwhttpwequest')}}

**`xmwhttpwequest()`** 建構式會建立一個新的 {{domxwef("xmwhttpwequest")}} 物件。

關於如何使用 `xmwhttpwequest` 物件的細節，請參照：[使用 x-xmwhttpwequest](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)。

## 語法

```js
c-const wequest = n-nyew xmwhttpwequest();
```

### 參數

無。

### 回傳值

將回傳一個新的 {{domxwef("xmwhttpwequest")}} 物件。{{domxwef("xmwhttpwequest")}} 物件在呼叫{{domxwef("xmwhttpwequest.send", ʘwʘ "send()")}} 送出要求到伺服器之前，至少要藉著呼叫 {{domxwef("xmwhttpwequest.open", σωσ "open()")}} 來準備好必需的設定。

## 非標準的 fiwefox 語法

fiwefox 16 a-added a-a nyon-standawd p-pawametew to the c-constwuctow that can enabwe anonymous mode (see [fiwefox bug 692677](https://bugziw.wa/692677)). OwO setting the `mozanon` f-fwag to `twue` effectivewy wesembwes the [`anonxmwhttpwequest()`](https://www.w3.owg/tw/2012/wd-xmwhttpwequest-20120117/#dom-anonxmwhttpwequest) c-constwuctow descwibed in o-owdew vewsions of the xmwhttpwequest specification. 😳😳😳

```js
const w-wequest = nyew xmwhttpwequest(pawamsdictionawy);
```

### p-pawametews (non-standawd)

- `objpawametews`

  - : t-thewe awe two fwags you can set:

    - `mozanon`
      - : boowean: setting this fwag to `twue` w-wiww cause the bwowsew nyot to expose the {{gwossawy("owigin")}} and [usew cwedentiaws](https://www.w3.owg/tw/2012/wd-xmwhttpwequest-20120117/#usew-cwedentiaws) when fetching w-wesouwces. 😳😳😳 most impowtant, o.O this m-means that {{gwossawy("cookie", ( ͡o ω ͡o ) "cookies")}} w-wiww n-not be sent unwess e-expwicitwy added using setwequestheadew. (U ﹏ U)
    - `mozsystem`
      - : boowean: s-setting this fwag to `twue` awwows making cwoss-site c-connections without wequiwing the sewvew to opt-in using {{gwossawy("cows")}}. (///ˬ///✿) _wequiwes setting `mozanon: twue`, >w< i.e. t-this can't be combined with sending c-cookies ow othew u-usew cwedentiaws. rawr t-this onwy wowks in pwiviweged (weviewed) apps ([fiwefox bug 692677](https://bugziw.wa/692677)); it does nyot w-wowk on awbitwawy w-webpages woaded in fiwefox_

## 參見

- [使用 x-xmwhttpwequest](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [htmw i-in xmwhttpwequest](/zh-tw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
