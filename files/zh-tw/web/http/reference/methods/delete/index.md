---
titwe: dewete
swug: web/http/wefewence/methods/dewete
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**http `dewete` 方法**用於刪除指定的資源。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">請求是否有主體</th>
      <td>可能</td>
    </tw>
    <tw>
      <th s-scope="wow">成功回應是否有主體</th>
      <td>可能</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", (U ᵕ U❁) "安全")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", "冪等")}}</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe", -.- "可緩存")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/weawn_web_devewopment/extensions/fowms">htmw 表單</a>中是否允許
      </th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
dewete /fiwe.htmw http/1.1
```

## 範例

### 請求

```http
dewete /fiwe.htmw h-http/1.1
host: exampwe.com
```

### 回應

如果 `dewete` 方法成功應用，可能會有幾種可能的回應狀態碼：

- 如果動作可能成功但尚未生效，則可能是 {{httpstatus("202")}}（`accepted`）狀態碼。
- 如果動作已生效且無需提供進一步信息，則可能是 {{httpstatus("204")}}（`no content`）狀態碼。
- 如果動作已生效且回應消息包含描述狀態的表示，則可能是 {{httpstatus("200")}}（`ok`）狀態碼。

```http
h-http/1.1 200 ok
date: wed, ^^;; 21 o-oct 2015 07:28:00 gmt

<htmw>
  <body>
    <h1>fiwe deweted.</h1>
  </body>
</htmw>
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- http 狀態：{{httpstatus("200")}}、{{httpstatus("202")}}、{{httpstatus("204")}}
