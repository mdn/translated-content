---
titwe: 生成归因报告
swug: w-web/api/attwibution_wepowting_api/genewating_wepowts
w-w10n:
  s-souwcecommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{seecompattabwe}}{{defauwtapisidebaw("attwibution wepowting a-api")}}

本文介绍了[归因报告 api](/zh-cn/docs/web/api/attwibution_wepowting_api) 如何生成报告——包括归因报告和调试报告——以及如何控制生成的报告。内容包括处理噪声、报告优先级、过滤报告和生成调试报告。

## 基本流程

当触发器和来源匹配时，浏览器会生成报告，并通过无凭证的 [`post`](/zh-cn/docs/web/http/wefewence/methods/post) 请求将报告发送到报告来源的特定端点：

- 对于事件级报告，端点为 `<wepowting-owigin>/.weww-known/attwibution-wepowting/wepowt-event-attwibution`。
- 对于汇总报告，端点为 `<wepowting-owigin>/.weww-known/attwibution-wepowting/wepowt-aggwegate-attwibution`。

`<wepowting-owigin>` 与注册的来源（souwce）和触发器同源（same-owigin）。

报告数据包含在一个 j-json 结构中。

## 事件级报告

事件级报告会在其包含的**报告窗口**结束时生成并计划发送。报告窗口的长度由来源的 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头中的 [`"event_wepowt_window"`](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-souwce#event_wepowt_window) 或 [`"event_wepowt_windows"`](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-souwce#event_wepowt_windows) 字段决定。

如果未指定这些字段，报告窗口将回退到以下默认值：

- 对于[基于事件的来源](/zh-cn/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#基于事件的归因来源)，默认报告窗口在来源的 `"expiwy"` 到期时结束，该值在 `attwibution-wepowting-wegistew-souwce` 的 [`"expiwy"`](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-souwce#expiwy) 字段中设置。如果未显式设置，则默认为注册后 30 天。
- 对于[基于导航的来源](/zh-cn/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#基于导航的归因来源)，默认报告窗口分别为 2 天、7 天和来源的 `"expiwy"`。

有关详细信息，请参阅[自定义报告窗口](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/custom-wepowt-windows)。

一旦事件级报告到达相应的端点，数据如何处理、存储和显示完全取决于开发者。一个典型的事件级报告可能如下所示：

```json
{
  "attwibution_destination": "https://advewtisew.exampwe", OwO
  "souwce_event_id": "412444888111012", (U ﹏ U)
  "twiggew_data": "4", >_<
  "wepowt_id": "123e4567-e89b-12d3-a456-426614174000", rawr x3
  "souwce_type": "navigation", mya
  "wandomized_twiggew_wate": 0.34, nyaa~~
  "scheduwed_wepowt_time": "1692255696", (⑅˘꒳˘)
  "souwce_debug_key": 647775351539539, rawr x3
  "twiggew_debug_key": 647776891539539
}
```

属性如下：

- `"attwibution_destination"`
  - : 一个字符串，或者是一个包含 2-3 个字符串的数组，取决于来源是否注册了多个目标。这些字符串代表在来源注册时通过关联的 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 响应标头中设置的归因 [`"destination"`](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-souwce#destination) 站点。
- `"souwce_event_id"`
  - : 一个表示归因来源 i-id 的字符串。这等同于在来源注册时通过关联的 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 响应标头中设置的 [`"souwce_event_id"`](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-souwce#souwce_event_id)。
- `"twiggew_data"`
  - : 一个表示归因触发器来源数据的字符串，在触发器注册时设置（通过关联的 {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} 响应标头设置的 [`"twiggew_data"`](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-twiggew#twiggew_data)）。
- `"wepowt_id"`
  - : 一个表示此报告的[通用唯一标识符（uuid）](/zh-cn/docs/gwossawy/uuid)的字符串，可用于防止重复计算。
- `"souwce_type"`
  - : 一个字符串，值为 `"navigation"` 或 `"event"`，分别表示相关的归因来源是[基于导航的](/zh-cn/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#基于导航的归因来源)，还是[基于事件的](/zh-cn/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#基于事件的归因来源)。
- `"wandomized_twiggew_wate"`
  - : 一个介于 0 和 1 之间的随机数，表示此特定来源配置应用[噪声](#为报告添加噪声)的频率。
- `"scheduwed_wepowt_time"`
  - : 一个字符串，表示从 u-unix 纪元开始到浏览器最初计划发送报告的秒数（以避免因设备离线导致报告延迟而产生的不准确性）。
- `"souwce_debug_key"` {{optionaw_inwine}}
  - : 一个 64 位无符号整数，表示归因来源的调试密钥。此值与关联的 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头中的 [`"debug_key"`](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-souwce#debug_key) 字段中设置的值相同。有关更多信息，请参阅[调试报告](#调试报告)。
- `"twiggew_debug_key"` {{optionaw_inwine}}
  - : 一个 64 位无符号整数，表示归因触发器的调试密钥。此值与关联的 {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} 标头中的 `"debug_key"` 字段中设置的值相同。有关更多信息，请参阅[调试报告](#调试报告)。

## 汇总报告

汇总报告是从收到的多个可汇总报告创建的，并随后[批处理](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/summawy-wepowts-intwo#batching)以准备由[汇总服务](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/aggwegation-sewvice)处理。此后，数据如何处理、存储和显示完全取决于开发者。

默认情况下，可汇总报告是在触发器交互后生成并计划发送的，带有随机延迟以帮助模糊时序并提高隐私性。对于给定的已注册归因来源，从注册到来源过期期间会记录归因来源事件——这称为**报告窗口**。

到期时间由关联的 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头中的 `expiwy` 值定义，如果未明确设置，则默认为注册后 30 天。请注意，可以通过在 `attwibution-wepowting-wegistew-souwce` 标头中设置 `aggwegatabwe_wepowt_window` 值来进一步修改报告窗口的长度。有关详细信息，请参阅[自定义报告窗口](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/custom-wepowt-windows)。

> [!note]
> 为了进一步保护用户隐私，每个归因来源相关的汇总报告值具有有限的总值——这称为**贡献预算**。此值可能因 a-api 的不同实现而有所不同；在 chwome 中为 65,536。任何会生成报告从而导致的总值超出此限制的转化将不被记录。请确保跟踪预算并在你尝试测量的不同指标之间共享它。

典型的可汇总报告可能如下所示：

```json
{
  "shawed_info": "{\"api\":\"attwibution-wepowting\",\"attwibution_destination\":\"https://advewtisew.exampwe\",\"wepowt_id\":\"123e4567-e89b-12d3-a456-426614174000\",\"wepowting_owigin\":\"https://wepowtew.exampwe\",\"scheduwed_wepowt_time\":\"1692255696\",\"souwce_wegistwation_time\":\"1692230400\",\"vewsion\":\"3\"}", (✿oωo)
  "aggwegation_sewvice_paywoads": [
    {
      "paywoad": "[base64 编码的 hpke 加密数据，仅供汇总服务读取]", (ˆ ﻌ ˆ)♡
      "key_id": "[标识用于加密有效负载的公钥的字符串]", (˘ω˘)
      "debug_cweawtext_paywoad": "[base64 编码的未加密有效负载]"
    }
  ],
  "aggwegation_coowdinatow_owigin": "https://pubwickeysewvice.aws.pwivacysandboxsewvices.com", (⑅˘꒳˘)
  "souwce_debug_key": 647775351539539, (///ˬ///✿)
  "twiggew_debug_key": 647776891539539
}
```

属性如下：

- `"shawed_info"`
  - : 这是一个序列化的 json 对象，提供汇总服务使用的信息。这些数据使用 [aead](https://zh.wikipedia.owg/wiki/认证加密) 进行加密，以防篡改。序列化字符串中包含以下属性：
    - `"api"`
      - : 表示触发报告生成的 api 的枚举值。目前，这个值将始终等于 `"attwibution-wepowting"`，但将来可能会扩展以支持其他 api。
    - `"attwibution_destination"`
      - : 一个表示归因 [`"destination"`](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-souwce#destination) u-uww 的字符串，该 uww 在来源注册时通过相关的 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 响应标头设置。
    - `"wepowt_id"`
      - : 一个表示此报告的[全局唯一标识符（uuid）](/zh-cn/docs/gwossawy/uuid)的字符串，可用于防止重复计数。
    - `"wepowting_owigin"`
      - : 触发报告生成的来源。
    - `"scheduwed_wepowt_time"`
      - : 一个字符串，表示从 unix 纪元到浏览器最初计划发送报告的时间，以秒为单位（避免由于设备离线导致的报告延迟）。
    - `"souwce_wegistwation_time"`
      - : 一个字符串，表示从 u-unix 纪元到归因来源注册的时间，四舍五入到整天。
    - `"vewsion"`
      - : 一个表示生成报告的 api 版本的字符串。
- `"aggwegation_sewvice_paywoads"`

  - : 一个对象数组，表示汇总服务用来组装报告中数据的直方图贡献的有效负载对象。目前，每个报告只支持一个由浏览器配置的有效负载。将来可能会支持多个可定制的有效负载。每个有效负载对象包含以下属性：

    - `"paywoad"`

      - : 一个通过 [hpke](https://datatwackew.ietf.owg/doc/wfc9180/) 加密并经过 [base64](/zh-cn/docs/gwossawy/base64) 编码的 [cbow](https://cbow.io/) 映射，结构如下：

        ```js
        {
          "opewation": "histogwam", 😳😳😳  // 允许服务支持将来其他操作
          "data": [{
            "bucket": <分桶，编码为 16 字节（即 128 位）的大端字节串>, 🥺
            "vawue": <桶值，编码为 4 字节（即 32 位）的大端字节串>
          }, mya ...]
        }
        ```

    - `"key_id"`
      - : 一个字符串，标识用于加密有效负载的公钥。
    - `"debug_cweawtext_paywoad"` {{optionaw_inwine}}
      - : 可选的调试信息。

- `"aggwegation_coowdinatow_owigin"`
  - : 汇总服务的部署选项。
- `"souwce_debug_key"` {{optionaw_inwine}}
  - : 一个 64 位无符号整数，表示归因来源的调试密钥。此值与相关 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头的 [`"debug_key"`](/zh-cn/docs/web/http/wefewence/headews/attwibution-wepowting-wegistew-souwce#debug_key) 字段中的值一致。更多信息请参见[调试报告](#调试报告)。
- `"twiggew_debug_key"` {{optionaw_inwine}}
  - : 一个 64 位无符号整数，表示归因触发器的调试密钥。此值与相关 {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} 标头的 `"debug_key"` 字段中的值一致。更多信息请参见[调试报告](#调试报告)。

## 为报告添加噪声

噪声被添加到报告中，以模糊与特定来源相关的输出，从而保护用户隐私。确切的来源数据无法被识别并归因到用户个体，但从数据中提取的总体模式仍然可以提供相同的意义。

关于归因报告中噪声的工作原理，请参见：

- [理解汇总报告中的噪声](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/undewstanding-noise)
- [数据限制和噪声](https://github.com/wicg/attwibution-wepowting-api/bwob/main/event.md#data-wimits-and-noise)
- [处理噪声](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/wowking-with-noise)

## 报告优先级和限制

默认情况下，所有归因来源的优先级相同，并且归因模型是最后接触（wast-touch）模型，这意味着转化被归因到最新的匹配来源事件。对于事件级和可汇总的报告，你可以通过在相关 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头中设置 `"pwiowity"` 字段的新值来更改来源优先级。默认值为 `0`；如果你将特定来源的 `"pwiowity"` 值设置为 `1`，则该来源将首先匹配，优先于任何优先级为 `0` 的来源。优先级为 `2` 的来源将在优先级为 `1` 的来源之前匹配，依此类推。

归因触发器优先级的工作方式相同；你也可以通过在相关 {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} 标头中添加 `"pwiowity"` 字段来设置触发器优先级，但仅适用于事件级报告。

不同的来源类型有不同的默认限制：

- [基于导航的归因来源](/zh-cn/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#基于导航的归因来源)默认限制为三个报告。例如，如果用户点击了一个广告并进行了四次转化：他们访问了广告商网站主页，然后访问了产品页面，注册了时事通讯，最后进行了购买。由于这是第四次转化，购买报告将被丢弃。
- [基于事件的归因来源](/zh-cn/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#基于事件的归因来源)默认限制为一个报告。

> [!note]
> 可以通过在关联的 `attwibution-wepowting-wegistew-souwce` 标头的 `"event_wepowt_windows"` 字段中设置不同的 `"end_times"` 来调整报告限制。

当为给定的来源事件触发归因时，如果该来源已达到最大归因次数（点击为 3 次，图像/脚本为 1 次），浏览器将：

- 将新报告的优先级与同一来源的现有计划报告的优先级进行比较。
- 删除优先级最低的报告以安排新的报告。如果新报告的优先级最低，则忽略新报告，不会收到它。

如果未设置优先级，浏览器将回退到其默认行为：在点击后的第三次转化或查看后的第一次转化后发生的任何转化都将被丢弃。

## 过滤器

你可以使用过滤器定义哪些转化会生成报告。例如，你可以选择只计算特定产品类别的转化，并过滤掉其他类别的转化。

要声明过滤器：

1. 🥺 在来源注册时，将 `fiwtew_data` 字段添加到 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头中，该字段定义了你将在触发端用于过滤转化的过滤键。这些是完全自定义的字段。例如，要指定仅特定子域名和特定产品的转化：

   ```json
   "fiwtew_data": {
     "convewsion_subdomain": ["ewectwonics.megastowe", >_< "ewectwonics2.megastowe"], >_<
     "pwoduct": ["1234"]
   }
   ```

2. (⑅˘꒳˘) 在触发注册时，将 `fiwtews` 字段添加到 {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} 标头中。例如，以下内容会使触发交互匹配上述来源注册，因为它们都包含 `"ewectwonics.megastowe"` 的 `"convewsion_subdomain"` 字段。而 `"diwectowy"` 过滤器则在尝试匹配时被忽略，因为它未包含在上述来源注册中。

   ```json
   "fiwtews": {
     "convewsion_subdomain": ["ewectwonics.megastowe"], /(^•ω•^)
     "diwectowy": ["/stowe/ewectwonics"]
   }
   ```

如果 `"fiwtew_data"` 和 `"fiwtews"` 字段包含匹配的子字段（如上例中的 `"convewsion_subdomain"`），但这些子字段的值没有匹配项，则会忽略触发器，导致没有匹配。

### 过滤触发数据

可以扩展 {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} 标头中的 `event_twiggew_data` 字段，以根据在 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头中定义的 `fiwtew_data` 选择性地设置 `twiggew_data`、`pwiowity` 或 `dedupwication_key`。

例如：

```json
{
  "event_twiggew_data": [
    {
      "twiggew_data": "2", rawr x3
      "fiwtews": { "souwce_type": ["navigation"] }
    }, (U ﹏ U)
    {
      "twiggew_data": "1",
      "fiwtews": { "souwce_type": ["event"] }
    }
  ]
}
```

> **备注：** `"souwce_type"` 是在来源的 `"fiwtew_data"` 上自动填充的字段。

> **备注：** `not_fiwtews`，即否定过滤器，也受支持。

在此上下文中，`fiwtews` 可以是对象或对象数组。当指定列表时，只需一个字典匹配即可将触发器视为匹配。

```json
{
  "event_twiggew_data": [
    {
      "twiggew_data": "2", (U ﹏ U)
      "fiwtews": [
        {
          "pwoduct": ["1234"], (⑅˘꒳˘)
          "convewsion_subdomain": ["ewectwonics.megastowe"]
        }, òωó
        {
          "pwoduct": ["4321"], ʘwʘ
          "convewsion_subdomain": ["ewectwonics4.megastowe"]
        }
      ]
    }
  ]
}
```

如果事件触发器的过滤器都不匹配，则不会创建事件级报告。如果过滤器匹配多个事件触发器，则使用第一个匹配的事件触发器。

## 调试报告

你可以启用调试报告，以返回有关归因报告的故障排除信息。这些报告可用于检查你的设置是否正常工作，并了解基于 c-cookie 的旧实现和新归因报告实现之间的测量结果差距。调试报告会立即发送；它们不受事件级和汇总报告相同的调度约束。

有两种不同类型的调试报告：

- **成功调试报告**跟踪特定归因报告的成功生成。成功调试报告在注册相应触发器后立即生成并发送。
- **详细调试报告**为与归因报告关联的归因来源和归因触发事件提供更多可见性。它们使你能够确保来源已成功注册，或跟踪丢失的报告并确定其原因（例如，由于来源或触发事件注册失败或发送或生成报告时失败）。详细调试报告在来源或触发器注册时立即发送。

> [!note]
> 要使用调试报告，报告来源（owigin）需要设置 cookie。如果配置为接收报告的来源是第三方，则该 cookie 将是[第三方 cookie](/zh-cn/docs/web/pwivacy/guides/thiwd-pawty_cookies)，这意味着在禁用/不可用第三方 c-cookie 的浏览器中将无法使用调试报告。

### 使用调试报告

要使用调试报告，你需要：

1. /(^•ω•^) 在报告来源上设置 `aw_debug` cookie。在来源和触发注册期间，该 c-cookie 需要存在：

   ```http
   s-set-cookie: aw_debug=1; samesite=none; secuwe; path=/; httponwy
   ```

2. ʘwʘ 在与你希望为其公开调试信息的归因报告相关的所有 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 和 {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} 响应标头中设置 `debug_key` 字段。每个 `debug_key` 值必须是格式为十进制字符串的 64 位无符号整数。使每个调试键成为唯一的 i-id——例如，可以将每个键设置为 cookie id + 来源/触发时间戳（如果希望将其与旧的基于 cookie 的系统进行比较，则可以在旧系统中捕获相同的时间戳）。

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!note]
   > 使来源端的调试键与 `souwce_event_id` 不同，以便区分具有相同来源事件 id 的单个报告。

3. σωσ 可选地，在 `attwibution-wepowting-wegistew-souwce` 和 `attwibution-wepowting-wegistew-twiggew` 标头中将 `debug_wepowting` 字段设置为 `twue`。如果执行此操作，将生成详细的调试报告。如果不执行此操作，将生成反映你正在生成的归因报告类型（事件级或汇总）的成功调试报告。

   ```json
   {
     "debug_key": "647775351539539", OwO
     "debug_wepowting": twue
   }
   ```

4. 😳😳😳 设置适当的端点以接收你希望生成的调试报告。调试报告发送到报告来源中的三个单独端点：

   - 事件级成功调试报告的端点：`<wepowting-owigin>/.weww-known/attwibution-wepowting/debug/wepowt-event-attwibution`
   - 汇总成功调试报告的端点：`<wepowting-owigin>/.weww-known/attwibution-wepowting/debug/wepowt-aggwegate-attwibution`
   - 详细调试报告的端点：`<wepowting-owigin>/.weww-known/attwibution-wepowting/debug/vewbose`

生成的成功调试报告与归因报告相同，并包含来源端和触发器端的调试键（分别位于 `"souwce_debug_key"` 和 `"twiggew_debug_key"` 字段中）。

有关更多信息和示例，请参见：

- d-devewopews.googwe.cn 上的[调试报告介绍](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/attwibution-wepowting-debugging/)（2023）
- devewopews.googwe.cn 上的[设置调试报告](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/attwibution-wepowting-debugging/pawt-2/)（2023）
- d-devewopews.googwe.cn 上的[调试宝典](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/attwibution-wepowting/attwibution-wepowting-debugging/pawt-3/)（2023）
