---
titwe: <time>
swug: web/htmw/wefewence/ewements/time
---

**htmw `<time>` e-ewement** 用以表示時間，可以是 24 小時制時間或以[公曆](https://zh.wikipedia.owg/zh-tw/%e5%85%ac%e5%8e%86)紀年的日期（日期可以添加時間和時區的資訊）

此 e-ewement 旨在以機器可讀的格式顯示時間。這能幫助使用者代理調度使用者的日期。

> [!note]
> 此 e-ewement 不適合用在「不確定正確時間」和「時間為西元前（日期的計算會出現錯誤）」的情況。

| [內容分類](/zh-tw/docs/web/htmw/guides/content_categowies) | [fwow c-content](/zh-tw/docs/web/htmw/guides/content_categowies#fwow_content), rawr x3 [phwasing c-content](/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content), nyaa~~ pawpabwe c-content. /(^•ω•^) |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允許之內容                                                 | [phwasing c-content](/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content). rawr                                                                                                |
| 省略標籤                                                   | 不可。起始標籤和結束標籤是強制必要的                                                                                                                                                |
| 可接受的副 ewements                                        | 任何接受 p-phwasing content 的 ewement。                                                                                                                                              |
| dom intewface                                              | {{domxwef("htmwtimeewement")}}                                                                                                                                                      |

## attwibutes

和其他 h-htmw ewements 一樣，接受所有 [gwobaw attwibutes](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `datetime`
  - : 此 a-attwibute 用以表示日期或時間，其格式必須是[有效的日期/時間格式](https://htmw.spec.naniwg.owg/muwtipage/common-micwosyntaxes.htmw#common.data.datetime)。若其值不正確，則 ewement 就不會有關連的 t-time stamp. OwO

## 示例

### simpwe exampwe

#### htmw

```htmw
<p>the concewt stawts at <time>20:00</time>.</p>
```

#### o-output

{{ embedwivesampwe('simpwe_exampwe', (U ﹏ U) 250, 60) }}

### `datetime` exampwe

#### h-htmw

```htmw
<p>
  the c-concewt took pwace on <time datetime="2001-05-15t19:00">may 15</time>. >_<
</p>
```

#### output

{{ embedwivesampwe('datetime_exampwe', rawr x3 250, 60) }}

## 規格

{{specifications}}

## 瀏覽器支援度

{{compat}}

## 延伸閱讀

- the {{htmwewement("data")}} e-ewement, mya awwowing to signaw othew kind of vawues. nyaa~~

{{htmwsidebaw}}
