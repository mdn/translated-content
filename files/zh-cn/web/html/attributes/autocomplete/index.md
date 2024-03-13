---
title: HTML 属性：autocomplete
slug: Web/HTML/Attributes/autocomplete
---

{{HTMLSidebar}}

HTML `autocomplete` 属性允许 web 开发人员指定{{Glossary("user agent","用户代理")}}是否有权限在填写表单字段值时提供自动帮助，并指导浏览器填写该字段的预期信息类型。

可用于以文本或数字作为输入的 {{HTMLElement("input")}} 元素、{{HTMLElement("textarea")}} 元素、{{HTMLElement("select")}} 元素和 {{HTMLElement("form")}} 元素。

建议值的来源通常取决于浏览器。通常，值来自用户曾经输入过的值，但它们也可能来自预先配置的值。例如，浏览器可能允许用户保存其姓名、地址、电话号码和电子邮件地址，以实现自动完成目的。也许浏览器提供了保存加密的信用卡信息的功能，以便自动完成身份验证功能。

如果一个 {{HTMLElement("input")}}、{{HTMLElement("select")}} 或 {{HTMLElement("textarea")}} 元素没有 `autocomplete` 属性，则该浏览器将使用该元素的表单所有者的 `autocomplete` 属性，它们可以是元素的后代 {{HTMLElement("form")}} 元素，或由该元素的 [`form`](/zh-CN/docs/Web/HTML/Element/input#form) 属性指定的 `<form>` 元素的 `id`。

更多信息，请参见 {{HTMLElement("form")}} 中的 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/form#autocomplete) 属性。

> **备注：** 为了提供自动完成功能，用户代理可能需要 `<input>`/`<select>`/`<textarea>` 元素具有如下条件：
>
> 1. 具有 `name` 和/或 `id` 属性
> 2. 作为 `<form>` 元素的后代
> 3. 具有 {{HTMLElement("input/submit", "submit")}} 按钮的表单

{{EmbedInteractiveExample("pages/tabbed/attribute-autocomplete.html", "tabbed-shorter")}}

## 值

- "`off`"

  - : 浏览器不允许为此字段自动输入或选择一个值。文档或应用程序可能提供其自己的自动完成功能，或者出于安全方面的考虑，要求不要自动输入该字段的值。

    > **备注：** 在大多数现代浏览器中，`autocomplete` 设置为“`off`”不会阻止密码管理器询问用户是否要保存用户名和密码信息，或者自动在网站的登录表单中填写这些值。请参阅 [autocomplete 属性与登录表单](/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#autocomplete_属性和登录字段)一文。

- "`on`"
  - : 允许浏览器自动完成输入。没有提供有关该字段中期望的数据类型的指导，因此浏览器可以使用自己的判断。
- "`name`"

  - : 该字段期望该值是一个人的全名。通常首选使用“`name`”而不是将名称分解为各个组成部分，因为这样可以避免处理各种各样的人类名称及其结构。但是，如果需要将名称分解为各个组成部分，则可以使用以下 `autocomplete` 值：

    - "`honorific-prefix`"
      - : 前缀或头衔，例如“Mrs.”、“Mr.”、“Miss”、“Ms.”、“Dr.”或“Mlle.”。
    - "`given-name`"
      - : 名字。
    - "`additional-name`"
      - : 中间名。
    - "`family-name`"
      - : 姓氏。
    - "`honorific-suffix`"
      - : 后缀，例如“Jr.”、“B.Sc.”、“PhD.”、“MBASW”或“IV”。
    - "`nickname`"
      - : 昵称或绰号。

- "`email`"
  - : 电子邮件地址。
- "`username`"
  - : 用户名或账户名。
- "`new-password`"
  - : 新密码。创建新账户或更改密码时，应将其用于“输入新密码”或“确认新密码”字段，而不是通常出现的“输入当前密码”字段。浏览器可以使用它来避免意外填写现有密码，并在创建安全密码时提供帮助（参见[使用 autocomplete="new-password" 阻止自动填充](/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#使用_autocompletenew-password_阻止自动填充)）。
- "`current-password`"
  - : 用户的当前密码。
- "`one-time-code`"
  - : 用于验证用户身份的一次性代码。
- "`organization-title`"
  - : 职务或组织内某人的职务，例如“高级技术作家”、“总裁”或“助理部队负责人”。
- "`organization`"
  - : 公司或组织名称，例如“Acme Widget Company”或“American Girl Scouts of America”。
- "`street-address`"
  - : 街道地址。它可以是多行文本，应在第二个行政级别（通常是城市或城镇）内完全标识地址的位置，但不应包括城市名称，邮政编码或邮政编码或国家/地区名称。
- "`address-line1`", "`address-line2`", `"address-line3"`
  - : 街道地址的每一行。仅在“`street-address`”不存在的情况下，才应提供这些内容。
- "`address-level4`"
  - : 在具有四个行政级别的地址中，粒度最细的[地址的行政级别](#地址的行政级别)。
- "`address-level3`"
  - : 在具有至少三个行政级别的地址中，第三个[地址的行政级别](#地址的行政级别)。
- "`address-level2`"
  - : 在具有至少有两个行政级别的地址中，第二个[地址的行政级别](#地址的行政级别)。在具有两个行政级别的国家/地区中，通常是地址所在的城市，城镇，村庄或其他地区。
- "`address-level1`"
  - : 地址中的第一个[地址的行政级别](#地址的行政级别)，通常是地址所在的省份。在美国，是州。在瑞士，是州。在英国，是邮镇。
- "`country`"
  - : 一个国家或地区的代码。
- "`country-name`"
  - : 一个国家或地区的名字。
- "`postal-code`"
  - : 邮政编码（在美国，是 ZIP 编码）。
- "`cc-name`"
  - : 打印在付款工具（例如信用卡）上或与之关联的全名。通常，使用全名字段比将名称分成多个部分更可取。
- "`cc-given-name`"
  - : 在信用卡等支付工具上的名字。
- "`cc-additional-name`"
  - : 信用卡等支付工具上的中间名。
- "`cc-family-name`"
  - : 信用卡上的姓氏。
- "`cc-number`"
  - : 信用卡号码或其他标识付款方式的号码，例如账号。
- "`cc-exp`"
  - : 付款方式的到期日期，通常为“月份 / 两位年份”或“月份 / 四位年份”形式。
- "`cc-exp-month`"
  - : 付款方式到期的月份。
- "`cc-exp-year`"
  - : 付款方式到期的年份。
- "`cc-csc`"
  - : 付款工具的安全码；在信用卡上，这是信用卡背面的 3 位数验证码。
- "`cc-type`"
  - : 付款方式的类型（例如“Visa”或“Master Card”）。
- "`transaction-currency`"
  - : 进行交易的货币。
- "`transaction-amount`"
  - : 以“`transaction-currency`”指定的货币表示的金额，用于支付形式。
- "`language`"
  - : 首选语言，由有效的 [BCP 47 语言标记](https://zh.wikipedia.org/wiki/IETF語言標籤)给出。
- "`bday`"
  - : 完整的出生日期。
- "`bday-day`"
  - : 出生日期的月份中的某天。
- "`bday-month`"
  - : 出生日期的年份中的某月。
- "`bday-year`"
  - : 出生日期的年份。
- "`sex`"
  - : 性别身份（例如“女性”、“Fa'afafine”、“海吉拉”、“男性”、“非二元性别”），不带换行符的自由格式文本。
- "`tel`"

  - : 完整的电话号码，包括国家/地区代码。如果需要将电话号码分为几个部分，则可以将以下值用于这些字段：

    - "`tel-country-code`"
      - : 国家/地区代码，例如美国、加拿大和北美其他地区以及加勒比海部分地区使用“1”。
    - "`tel-national`"
      - : 不含国家/地区代码部分的完整电话号码，包括国家/地区内部前缀。对于电话号码“1-855-555-6502”，该字段的值为“855-555-6502”。
    - "`tel-area-code`"
      - : 区号，如果适用，可应用任何国家或地区内部前缀。
    - "`tel-local`"
      - : 不带国家或地区代码的电话号码。这可以进一步分为两部分，分别是具有交换号码的电话号码，然后是交换局中的号码。对于电话号码“555-6502”，对于“555”使用“`tel-local-prefix`”，对于“6502”使用“`tel-local-suffix`”。

- "`tel-extension`"
  - : 电话号码中的电话分机代码，例如旅馆中的房间或套房号或公司中的办公室分机号。
- "`impp`"
  - : 即时消息协议端点的 URL，例如“xmpp：username\@example.net”。
- "`url`"
  - : 在给定表单中其他字段的上下文的情况下的主页或公司网站地址等情况下给定的 URL。
- "`photo`"
  - : 代表表单中其他字段中提供的个人、公司或联系信息的图像的 URL。

有关更多详细信息，请参见 [WHATWG 标准](https://html.spec.whatwg.org/multipage/forms.html#autofill)。

> **备注：** 与其他浏览器不同，`autocomplete` 属性还控制 Firefox [是否在整个页面加载期间保持](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) `<input>` 元素、`<textarea>` 元素、或整个 `<form>` 元素的动态禁用状态和动态选择状态（如果适用）。持久性功能默认情况下处于启用状态。将 `autocomplete` 属性的值设置为 `off` 将禁用此特性。即使 `autocomplete` 属性通常由于其 `type` 而不适用，也可以这样做。参见 [Firefox bug 654072](https://bugzil.la/654072)。

## 示例

```html
<div>
  <label for="cc-number">输入你的信用卡编号</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

## 地址的行政级别

四个行政级别字段（从 `address-level1` 到 `address-level4`）以提高地址所在国家内的精确度的方式描述地址。每个国家都有自己的行政级别系统，在写地址时可以按不同的顺序排列。

`address-level1` 始终代表最广泛的行政区划，它是地址中除国家名之外最不特定的部分。

### 表单布局的灵活性

鉴于不同国家的地址书写方式不同，每个字段在地址中的位置也不同，甚至字段的设置和数量也完全不同，如果在可能的情况下，你的网站能够根据地址所在的国家，在呈现地址输入表单时切换到用户所期望的布局，这将是很有帮助的。

### 变化

每个行政级别的使用方式因国家/地区而异。以下是一些示例；这并不是详尽的清单。

#### 美国

美国境内的典型家庭住址如下所示：

432 Anywhere St
Exampleville CA 95555

在美国，地址中最不明确的部分是州，在这种情况下为“CA”（美国邮政服务的正式缩写为“California”）。因此，`address-level1` 是州，在这种情况下为“CA”。

地址的倒数第二个特定部分是城市或城镇名称，因此在此示例地址中， `address-level2` 为“Exampleville”。

美国地址不使用 3 级及更高级别。

#### 英国

在英国，地址输入表单通常包含两个地址级别以及一个、两个或三个地址行，具体取决于地址。完整的地址如下所示：

103 Frogmarch Street
Upper-Wapping
Winchelsea
TN99 8ZZ

地址级别为：

- `address-level1`: 邮镇名——在这种情况下，为“Winchelsea”。
- `address-level2`: 地方——在这种情况下，为“Upper-Wapping”。
- `address-line1`: 房屋/街道详情——“103 Frogmarch Street”

邮政编码是分开的。请注意，实际上可以仅使用邮政编码和 `address-line1` 在英国成功发送邮件，因此它们应该是唯一的必填项，但通常人们会提供更多详细信息。

#### 中国

中国可以使用多达三个行政级别：省、市和区。

6 位数的邮政编码并不总是需要的，但在提供时，为了清楚起见，将其与标签分开放置。例如：

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### 日本

日本的地址通常**书写在同一行**，从最不具体的部分到更具体的部分的顺序（**与美国的顺序相反**）。一个地址有两到三个行政级别。额外的一行可以用来显示建筑物名称和房间号。邮政编码是单独的。例如：

〒 381-0000
長野県長野市某町 123

“〒”和紧随的七位数字是邮政编码。

`address-level1` 用于各县或东京都，如本例的“長野県”。`address-level2` 通常用于市、县、镇和村，如本例的“長野市”。“某町 123”属于 `address-line1` 字段，其中包括区域名称和地段编号。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{htmlelement("input")}} 元素。
- {{htmlelement("select")}} 元素。
- {{htmlelement("textarea")}} 元素。
- {{htmlelement("form")}} 元素。
- [HTML 表单](/zh-CN/docs/Learn/Forms)
- 所有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。
