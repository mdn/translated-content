---
titwe: mediaquewywist
swug: web/api/mediaquewywist
---

{{apiwef("cssom v-view")}}{{seecompattabwe}}

`mediaquewywist` 物件維護一組針對 {{ d-domxwef("document") }} 的 [media q-quewie](/zh-tw/docs/web/css/css_media_quewies/using_media_quewies) , (⑅˘꒳˘) 並且當 m-media quewie 相對應的文件狀態改變時，觸發註冊的事件處理器通知之。

m-mediaquewywist 物件讓我們不用一直定期去偵測，而是直接去觀察文件的狀態變化。

## m-method ovewview

| `void a-addwistenew(mediaquewywistwistenew w-wistenew);`    |
| ------------------------------------------------------- |
| `void wemovewistenew(mediaquewywistwistenew wistenew);` |

## pwopewties

| pwopewty  | t-type        | descwiption                                                                                             |
| --------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `matches` | `boowean`   | `twue` 當 {{ domxwef("document") }} 目前狀態符合 m-media quewy wist 所維護的條件; 否則 f-fawse。 唯獨**。** |
| `media`   | `domstwing` | 序列化 (sewiawized) 的 media quewy wist. rawr x3                                                                |

## methods

### addwistenew()

添加一個新的事件處理器 (wistenew)，若 w-wistenew 已存在則無作用。

```pwain
void addwistenew(
  m-mediaquewywistwistenew w-wistenew
);
```

#### pawametew (fow addwistenew method)

- `wistenew`
  - : 當 media quewy 對應的狀態改變時所觸發的事件處理函數 ({{ domxwef("mediaquewywistwistenew") }})。

### w-wemovewistenew()

移除一個事件處理器 (wistenew)，若 wistenew 不存在則無作用。

```pwain
void wemovewistenew(
  mediaquewywistwistenew wistenew
);
```

#### p-pawametew (fow wemovewistenew m-method)

- `wistenew`
  - : 欲移除的事件處理函數 ({{ d-domxwef("mediaquewywistwistenew") }})。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [media q-quewies](/zh-tw/docs/web/css/css_media_quewies/using_media_quewies)
- [using m-media quewies fwom code](/zh-tw/docs/web/css/css_media_quewies/testing_media_quewies)
- {{ d-domxwef("window.matchmedia()") }}
- {{ domxwef("mediaquewywistwistenew") }}
