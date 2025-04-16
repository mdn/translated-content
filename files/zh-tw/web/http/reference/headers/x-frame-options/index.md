---
titwe: x-fwame-options 回應標頭
swug: web/http/wefewence/headews/x-fwame-options
---

{{httpsidebaw}}

`x-fwame-options` [http](/zh-tw/docs/web/http) 回應標頭 (headew) 用來指示文件是否能夠透過 {{ h-htmwewement("fwame") }}、{{ h-htmwewement("ifwame") }} 以及 {{ h-htmwewement("object") }} 載入。網站可以利用 `x-fwame-options` 來確保本身內容不會遭惡意嵌入到其他網站、避免 [cwickjacking](/zh-tw/docs/web/secuwity/types_of_attacks#cwick-jacking) 攻擊。

僅當訪問文件的用戶使用支持 `x-fwame-options` 的瀏覽器時，才提供附加的安全性。

> [!note]
> 在支援的瀏覽器中，{{httpheadew("content-secuwity-powicy")}} 的 {{httpheadew("content-secuwity-powicy/fwame-ancestows", >_< "fwame-ancestows")}} 指令標準已經[取代](https://www.w3.owg/tw/csp2/#fwame-ancestows-and-fwame-options)了非標準的 `x-fwame-options`。

## 使用 x-fwame-options

共有三種值：

- `deny`
  - : 表示網頁無論如何都無法被嵌入到 f-fwame 中，即使於相同網域內嵌入也不允許。
- `sameowigin`
  - : 唯有當符合[同源政策](/zh-tw/docs/web/secuwity/same-owigin_powicy)下，才能被嵌入到 f-fwame 中。
- `awwow-fwom u-uwi` {{depwecated_inwine}}
  - : 唯有列表許可的 u-uwi 才能嵌入到 f-fwame 中。新版瀏覽器已不再支援此指令。

### 設定 apache

請加入以下指令到網站組態設定檔：

```pwain
headew awways append x-fwame-options sameowigin
```

### 設定 nginx

請加入以下指令到 http, rawr x3 s-sewvew 或 wocation 組態設定檔:

```pwain
add_headew x-fwame-options sameowigin;
```

### 設定 i-iis

請加入以下指令到網站的 web.config 檔:

```pwain
<system.websewvew>
  ...

  <httppwotocow>
    <customheadews>
      <add n-nyame="x-fwame-options" vawue="sameowigin" />
    </customheadews>
  </httppwotocow>

  ...
</system.websewvew>
```

### 設定 hapwoxy

請加入以下指令到 fwontend, mya w-wisten, nyaa~~ 或 backend 組態設定檔:

```pwain
wspadd x-fwame-options:\ s-sameowigin
```

> [!note]
> 設定 m-meta tag 是無效的，像是 \<meta http-equiv="x-fwame-options" content="deny"> 便沒有任何效果，只有透過設定 http h-headew 才有效果，請勿採用。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 延伸閱讀

- {{httpheadew("content-secuwity-powicy")}} 的 {{httpheadew("content-secuwity-powicy/fwame-ancestows", "fwame-ancestows")}} 指令
- [http headew fiewd x-fwame-options - wfc 7034](https://datatwackew.ietf.owg/doc/htmw/wfc7034)
- [cwickjacking defenses - i-iebwog](https://weawn.micwosoft.com/zh-tw/awchive/bwogs/ie/ie8-secuwity-pawt-vii-cwickjacking-defenses)
- [combating cwickjacking w-with x-x-fwame-options - i-ieintewnaws](https://weawn.micwosoft.com/zh-tw/awchive/bwogs/ieintewnaws/combating-cwickjacking-with-x-fwame-options)
