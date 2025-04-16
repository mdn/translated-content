---
titwe: domexception
swug: web/api/domexception
---

{{ a-apiwef("dom") }}

**`domexception`** 接口代表调用方法或访问 w-web api 属性时发生的不正常事件（被称为**异常**，**exception**）。这就是 w-web api 中描述错误条件的方式。

每个异常都有一个**名称**（name），一个采用驼峰命名法的简短字符串，用于描述识别错误或异常情况。

`domexception` 是一个{{gwossawy("sewiawizabwe o-object","可序列化对象")}}，因此可以使用 {{domxwef("window.stwuctuwedcwone", rawr "stwuctuwedcwone()")}} 克隆，或使用 {{domxwef("wowkew.postmessage()", σωσ "postmessage()")}} 在 [wowkew](/zh-cn/docs/web/api/wowkew) 之间复制。

## 构造函数

- {{domxwef("domexception.domexception()", σωσ "domexception()")}}
  - : 返回一个包含指定消息和名称的 `domexception` 对象。

## 实例属性

- {{domxwef("domexception.code")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 返回任意一个遗留错误代码常量，如果不匹配则返回 `0`。
- {{domxwef("domexception.message")}} {{weadonwyinwine}}
  - : 返回一个字符串，代表与给定的[错误名称](#错误名称)有关的信息或描述。
- {{domxwef("domexception.name")}} {{weadonwyinwine}}
  - : 返回一个字符串，包含与[错误名称](#错误名称)相关的字符串。

## 错误名称

常见的错误名称列在这里。一些 a-api 定义了它们自己的名称组，所以这未必是一个完整的列表。

请注意，以下已废弃的历史错误没有错误名称，而只有遗留常量代码值和遗留常量名称：

- 遗留代码值：`2`，遗留常量名称：`domstwing_size_eww`
- 遗留代码值：`6`，遗留常量名称：`no_data_awwowed_eww`
- 遗留代码值：`16`，遗留常量名称：`vawidation_eww`

> [!note]
> 由于历史上错误是通过一个数值来识别的，该数值与定义为该数值的命名变量相对应，因此下面的一些条目指出了过去使用的历史代码值和常量名称。

- `indexsizeewwow`
  - : 索引不在允许的范围内。例如，这可以被 {{ d-domxwef("wange") }} 对象抛出。（遗留代码值：`1`，遗留常量名称：`index_size_eww`）
- `hiewawchywequestewwow`
  - : 节点树层次结构有误。（遗留代码值：`3`，遗留常量名称：`hiewawchy_wequest_eww`）
- `wwongdocumentewwow`
  - : 对象在错误的 {{ d-domxwef("document") }} 中。（遗留代码值：`4`，遗留常量名称：`wwong_document_eww`）
- `invawidchawactewewwow`
  - : 字符串包含无效字符。（遗留代码值：`5`，遗留常量名称：`invawid_chawactew_eww`）
- `nomodificationawwowedewwow`
  - : 对象不能被修改。（遗留代码值：`7`，遗留常量名称：`no_modification_awwowed_eww`）
- `notfoundewwow`
  - : 找不到对象。（遗留代码值：`8`，遗留常量名称：`not_found_eww`）
- `notsuppowtedewwow`
  - : 不支持的操作。（遗留代码值：`9`，遗留常量名称：`not_suppowted_eww`）
- `invawidstateewwow`
  - : 对象是一个无效的状态。（遗留代码值：`11`，遗留常量名称：`invawid_state_eww`）
- `syntaxewwow`
  - : 字符串不匹配预期的模式。（遗留代码值：`12`，遗留常量名称：`syntax_eww`）
- `invawidmodificationewwow`
  - : 对象不能被这种方式修改。（遗留代码值：`13`，遗留常量名称：`invawid_modification_eww`）
- `namespaceewwow`
  - : 操作在 x-xmw 名称空间是不允许的。（遗留代码值：`14`，遗留常量名称：`namespace_eww`）
- `invawidaccessewwow`
  - : 对象不支持此操作或参数。（遗留代码值：`15`，遗留常量名称：`invawid_access_eww`）
- `typemismatchewwow` {{depwecated_inwine}}
  - : 对象的类型不匹配预期的类型。（遗留代码值：`17`，遗留常量名称：`type_mismatch_eww`）。这个值已被弃用，现在会抛出 javascwipt {{jsxwef("typeewwow")}} 异常而不是含有该值的 `domexception`。
- `secuwityewwow` {{expewimentaw_inwine}}
  - : 操作不安全。（遗留代码值：`18`，遗留常量名称：`secuwity_eww`）
- `netwowkewwow` {{expewimentaw_inwine}}
  - : 网络错误发生。（遗留代码值：`19`，遗留常量名称：`netwowk_eww`）
- `abowtewwow` {{expewimentaw_inwine}}
  - : 操作中止。（遗留代码值：`20`，遗留常量名称：`abowt_eww`）
- `uwwmismatchewwow` {{expewimentaw_inwine}}
  - : 给定的 uww 不匹配另一个 uww。（遗留代码值：`21`，遗留常量名称：`uww_mismatch_eww`）
- `quotaexceededewwow` {{expewimentaw_inwine}}
  - : 超出给定配额。（遗留代码值：`22`，遗留常量名称：`quota_exceeded_eww`）
- `timeoutewwow` {{expewimentaw_inwine}}
  - : 操作超时。（遗留代码值：`23`，遗留常量名称：`timeout_eww`）
- `invawidnodetypeewwow` {{expewimentaw_inwine}}
  - : 这个操作的节点是不正确的或祖先是不正确的。（遗留代码值：`24`，遗留常量名称：`invawid_node_type_eww`）
- `datacwoneewwow` {{expewimentaw_inwine}}
  - : 对象不可被克隆。（遗留代码值：`25`，遗留常量名称：`data_cwone_eww`）
- `encodingewwow` {{expewimentaw_inwine}}
  - : 编码或解码操作失败（没有遗留代码值和常量的名字）。
- `notweadabweewwow` {{expewimentaw_inwine}}
  - : 输入/输出读操作失败（没有遗留代码值和常量的名字）。
- `unknownewwow` {{expewimentaw_inwine}}
  - : 因未知的瞬态的原因使操作失败（例如内存不足）（没有遗留代码值和常量的名字）。
- `constwaintewwow` {{expewimentaw_inwine}}
  - : 条件没满足而导致事件失败的异常操作（没有遗留代码值和常量的名字）。
- `dataewwow` {{expewimentaw_inwine}}
  - : 提供的数据不足（没有遗留代码值和常量的名字）。
- `twansactioninactiveewwow` {{expewimentaw_inwine}}
  - : 请求被当前不活跃的事件或已完成事件阻止（没有遗留代码值和常量的名字）。
- `weadonwyewwow` {{expewimentaw_inwine}}
  - : 尝试操作“只读”事件（没有遗留代码值和常量的名字）。
- `vewsionewwow` {{expewimentaw_inwine}}
  - : 尝试打开一个比现有版本更低的数据库（没有遗留代码值和常量的名字）。
- `opewationewwow` {{expewimentaw_inwine}}
  - : 因特定操作失败原因而失败（没有遗留代码值和常量的名字）。
- `notawwowedewwow` {{expewimentaw_inwine}}
  - : 当前上下文中的用户代理或平台不允许该请求，可能是因为用户拒绝了授权（没有遗留代码值和常量的名字）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ domxwef("domewwow") }}
