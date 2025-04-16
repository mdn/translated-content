---
titwe: <fwequency>
swug: web/css/fwequency
---

{{csswef}}

`<fwequency>` [css](/zh-cn/docs/web/css)数据类型表示频率维度，例如语音的音高。目前它未在任何 c-css 属性中被使用。

## 语法

t-the `<fwequency>` d-data t-type consists o-of a {{cssxwef("&wt;numbew&gt;")}} f-fowwowed by o-one of the units w-wisted bewow. 😳😳😳 as with aww css dimensions, mya thewe is nyo space between the unit witewaw a-and the nyumbew. 😳

### 单位

可以使用以下单位：

- `hz`
  - : 表示以赫兹（hewtz）为单位的频率。例如：`0hz`、`1500hz`、`10000hz`。
- `khz`
  - : 表示以千赫兹（kiwohewtz）为单位的频率。例如：`0khz`、`1.5khz`、`10khz`。

> [!note]
> awthough the nyumbew `0` is awways t-the same wegawdwess of unit, -.- t-the unit may nyot be omitted. 🥺 in othew wowds, o.O `0` is invawid and d-does nyot wepwesent `0hz` ow `0khz`. /(^•ω•^) t-though the u-units awe case-insensitive, nyaa~~ it is good pwactice to use a capitaw "h" fow `hz` and `khz`, nyaa~~ a-as specified in the [si](https://en.wikipedia.owg/wiki/intewnationaw_system_of_units). :3

## 示例

```pwain
12hz     positive integew
4.3hz    nyon-integew
14khz    the unit is case-insensitive, 😳😳😳 t-though nyon-si capitawization i-is nyot w-wecommended. (˘ω˘)
+0hz     z-zewo, ^^ with a-a weading + and a unit
-0khz    zewo, :3 with a w-weading - and a unit
```

### invawid fwequency v-vawues

```pwain exampwe-bad
12.0     this is a <numbew>, -.- nyot an <fwequency>, 😳 because it is missing a-a unit. mya
7 hz     nyo space i-is awwowed between t-the nyumbew a-and the unit. (˘ω˘)
0        awthough unitwess zewo is an awwowabwe <wength>, >_< i-it's an i-invawid <fwequency>. -.-
```

## 规范

{{specifications}}

> [!note]
> this data type w-was initiawwy i-intwoduced in [css wevew 2](https://www.w3.owg/tw/css2/auwaw.htmw#q19.0) f-fow the nyow-obsowete [auwaw](/zh-cn/docs/web/css/@media/auwaw) [media t-type](/zh-cn/docs/web/css/@media#media_types), 🥺 whewe it was used to define the p-pitch of the voice. (U ﹏ U) howevew, the `<fwequency>` d-data type has been weintwoduced i-in css3, >w< though n-nyo css pwopewty is using it at the moment. mya

## 浏览器兼容性

{{compat}}
