---
title: The HTML 自动完成属性
slug: Web/HTML/Attributes/autocomplete
original_slug: Web/HTML/Attributes/自动完成属性
---

{{HTMLSidebar("Global_attributes")}}

HTML `autocomplete` 属性可用于以文本或数字值作为输入的 {{HTMLElement("input")}} 元素， {{HTMLElement("textarea")}} 元素，{{HTMLElement("select")}} 元素，和{{HTMLElement("form")}} 元素。 `autocomplete` 允许 web 开发人员指定，如果有任何权限 {{Glossary("user agent")}} 必须提供填写表单字段值的自动帮助，并为浏览器提供关于字段中所期望的信息类型的指导。

建议值的来源通常取决于浏览器。通常，值来自用户输入的过去值，但它们也可能来自预先配置的值。例如，浏览器可能允许用户保存其姓名，地址，电话号码和电子邮件地址，以实现自动完成目的。也许浏览器提供了保存加密的信用卡信息的功能，以便在身份验证过程后自动完成。

如果 {{HTMLElement("input")}}, {{HTMLElement("select")}} 或{{HTMLElement("textarea")}} 元素 没有 `autocomplete` 属性，则该浏览器将使用该元素的表单的 `autocomplete` 属性所有者，它们可是元素的后代 {{HTMLElement("form")}} 元素 也可以是其 `id` 由元素{{htmlattrxref("form", "input")}} 属性指定的 `<form>`。

有关更多信息，请参见 {{HTMLElement("form")}} 中的{{htmlattrxref("autocomplete", "form")}} 属性。

> **备注：** 为了提供自动完成功能，用户代理可能需要 `<input>` / `<select>` / `<textarea>` 元素才能：
>
> 1. 具有 `name` 和/或 `id` 属性
> 2. 成为 `<form>` 的后代
> 3. 具有 {{HTMLElement("input/submit", "submit")}} 按钮的表单

## 价值

- "`off`"
  - : 浏览器不允许为此字段自动输入或选择一个值。文档或应用程序可能提供其自己的自动完成功能，或者出于安全方面的考虑，要求不要自动输入该字段的值。

    > **备注：** 在大多数现代浏览器中， `autocomplete` 设置为 "`off`" 不会阻止密码管理器询问用户是否要保存用户名和密码信息，或者自动在网站的登录表单中填写这些值。请参阅 [the autocomplete attribute and login fields](/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).
- "`on`"
  - : 允许浏览器自动完成输入。没有提供有关该字段中期望的数据类型的指导，因此浏览器可以使用自己的判断。
- "`name`"
  - : 该字段期望该值是一个人的全名。通常首选使用“名称”而不是将名称分解为各个组成部分，因为这样可以避免处理各种各样的人类名称及其结构。但是，如果需要将名称分解为各个组成部分，则可以使用以下自动完成值：
    - "`honorific-prefix`"
      - : 前缀或标题，例如“Mrs.”，“Mr.”，“Miss”，“Ms.”，“Dr.”或“Mlle.”。
    - "`given-name`"
      - : 给定的（或“名字”）名称。
    - "`additional-name`"
      - : 中间名。
    - "`family-name`"
      - : 姓氏（或“姓氏”）。
    - "`honorific-suffix`"
      - : 后缀，例如 "Jr.", "B.Sc.", "PhD.", "MBASW", or "IV".
    - "`nickname`"
      - : 昵称或名称。
- "`email`"
  - : 电子邮件地址。
- "`username`"
  - : 用户名或帐户名。
- "`new-password`"
  - : 新密码。创建新帐户或更改密码时，应将其用于“输入新密码”或“确认新密码”字段，而不是通常出现的“输入当前密码”字段。浏览器可以使用它来避免意外填写现有密码，并在创建安全密码时提供帮助（另请参见 [Preventing autofilling with autocomplete="new-password"](/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#Preventing_autofilling_with_autocompletenew-password)).
- "`current-password`"
  - : 用户的当前密码
- "`one-time-code`"
  - : 用于验证用户身份的一次性代码。
- "`organization-title`"
  - : 职务或组织内某人的职务，例如“高级技术作家”，“总裁”或“助理部队负责人”。
- "`organization`"
  - : 公司或组织名称，例如“Acme Widget Company”或“American Girl Scouts of America”。
- "`street-address`"
  - : 街道地址。它可以是多行文本，应在第二个行政级别（通常是城市或城镇）内完全标识地址的位置，但不应包括城市名称，邮政编码或邮政编码或国家/地区名称。
- "`address-line1`", "`address-line2`", `"address-line3"`
  - : 街道地址的每一行。仅在还存在 "`street-address`" 的情况下，才应提供这些内容。.
- "`address-level4`"
  - : 在具有四个级别的地址中，粒度最细的[地址的行政级别](#地址的行政级别)。
- "`address-level3`"
  - : 第三个[地址的行政级别](#地址的行政级别)，在具有至少三个管理级别的地址中。
- "`address-level2`"
  - : 第二个[地址的行政级别](#地址的行政级别)，在地址中至少有两个。在具有两个行政级别的国家/地区中，通常是地址所在的城市，城镇，村庄或其他地区。
- "`address-level1`"
  - : 地址中的第一个[地址的行政级别](#地址的行政级别) 。通常是地址所在的省份。在美国，这就是州。在瑞士，行政区。在英国，小镇。
    “国家”
- "`country`"
  - : 国家代码。
- "`country-name`"
  - : 一个国家的名字。
- "`postal-code`"
  - : 邮政编码（在美国，这是邮政编码）。
- "`cc-name`"
  - : 打印在付款工具（例如信用卡）上或与之关联的全名。通常，使用全名字段比将名称分成多个部分更可取。
- "`cc-given-name`"
  - : 在信用卡之类的付款工具上给出的给定（名字）名称。
- "`cc-additional-name`"
  - : 付款工具或信用卡上的中间名。
- "`cc-family-name`"
  - : 信用卡上的姓氏。
- "`cc-number`"
  - : 信用卡号码或其他标识付款方式的号码，例如帐号。
- "`cc-exp`"
  - : 付款方式的到期日期，通常为“月份 / 年份”或“月份 / 年份”形式。
- "`cc-exp-month`"
  - : 付款方式到期的月份。
- "`cc-exp-year`"
  - : 付款方式到期的年份。.
- "`cc-csc`"
  - : 付款工具的安全码；在信用卡上，这是信用卡背面的 3 位数验证码。
- "`cc-type`"
  - : 付款方式的类型（例如“Visa”或“Master Card”）。
- "`transaction-currency`"
  - : 进行交易的货币。
- "`transaction-amount`"
  - : 以 "`transaction-currency`" 指定的货币表示的金额，用于支付形式。
- "`language`"
  - : 作为有效的 [BCP 47 语言标记](https://en.wikipedia.org/wiki/IETF_language_tag)提供的首选语言。
- "`bday`"
  - : 出生日期，作为完整日期。
- "`bday-day`"
  - : 出生日期的月份中的一天。
- "`bday-month`"
  - : 出生日期的月份。
- "`bday-year`"
  - : 出生日期的年份。
- "`sex`"
  - : 性别身份（例如“女性”，“法法芬”，“男性”），不带换行符的自由格式文本。
- "`tel`"
  - : 完整的电话号码，包括国家/地区代码。如果您需要将电话号码分为几个部分，则可以将以下值用于这些字段：
    - "`tel-country-code`"
      - : 国家/地区代码，例如美国，加拿大和北美其他地区以及加勒比海部分地区的“1”。
    - "`tel-national`"
      - : 不含国家/地区代码部分的完整电话号码，包括国家/地区内部前缀。对于电话号码“1-855-555-6502”，该字段的值为“855-555-6502”。
    - "`tel-area-code`"
      - : 区号，如果适用，可应用任何国家或地区内部前缀。
    - "`tel-local`"
      - : 不带国家或地区代码的电话号码。这可以进一步分为两部分，分别是具有交换号码的电话号码，然后是交换局中的号码。对于电话号码“555-6502”，对于“555”使用 "`tel-local-prefix`" ，对于"6502"使用 "`tel-local-suffix`" 。
- "`tel-extension`"
  - : 电话号码中的电话分机代码，例如旅馆中的房间或套房号或公司中的办公室分机号。
- "`impp`"
  - : 即时消息协议端点的 URL，例如“xmpp：username\@example.net”。
- "`url`"
  - : URL，例如在给定表单中其他字段的上下文的情况下的主页或公司网站地址等。
- "`photo`"
  - : 代表表单中其他字段中提供的个人，公司或联系信息的图像的 URL。

有关更多详细信息，请参见 [WHATWG 标准。](https://html.spec.whatwg.org/multipage/forms.html#autofill)

> **备注：** 与其他浏览器不同， `autocomplete` 属性还控制 Firefox 是否会跨页面加载保持— [是否在整个页面加载期间保持](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) `<input>` 元素，`<textarea>` 元素，或整个 `<form>` 的动态禁用状态和（如果适用）动态检查状态。持久性功能默认情况下处于启用状态。将 `autocomplete` 属性的值设置为`off` 将禁用此功能。即使`autocomplete` 属性通常由于其`type`而不适用，也可以这样做。参考 {{bug(654072)}}.

## 例子

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input type="number" name="cc-number" id="cc-number" autocomplete="off">
</div>
```

## 地址的行政级别

四个行政级别字段 (`address-level1` 到 `address-level4`) 以提高地址所在国家内的精确度的方式描述地址。每个国家都有自己的行政级别系统，在写地址时可以按不同的顺序排列。

`address-level1` 始终代表最广泛的行政区划;它是地址中除国家名之外最不特定的部分。

### 表单布局的灵活性

鉴于不同的国家/地区以不同的方式写出地址，每个字段都位于地址内的不同位置，甚至完全是不同的字段集和数量，因此，如果可能的话，您的站点能够切换到预期的布局会很有帮助 由您的用户在提供地址输入表格时给出，并给出地址所在的国家/地区。

### 变化

每个行政级别的使用方式因国家/地区而异。以下是一些示例；这并不是详尽的清单。

#### 美国

美国境内的典型家庭住址如下所示：

大街 432 号
Exampleville CA 95555

在美国，地址中最不明确的部分是州，在这种情况下为“CA”（美国邮政服务的正式缩写为“California”）。因此，`address-level1` 是状态，在这种情况下为“CA”。

地址的倒数第二个特定部分是城市或城镇名称，因此在此示例地址中， `address-level2` 为“Exampleville”。

美国地址不使用 3 级及更高级别。

#### 英国

在英国，地址输入表单通常包含两个地址级别以及一个，两个或三个地址行，具体取决于地址。完整的地址如下所示：

Frogmarch 街 103 号
上层包装
苏塞克斯
TN99 8ZZ

地址级别为：

- `address-level1`: 在这种情况下，该县为“苏塞克斯”。
- `address-level2`: 在这种情况下，城镇为“上层包装”。.
- `address-line1`: 房屋/街道详情 - “Frogmarch 街道 103 号”

邮政编码是分开的。请注意，您实际上可以仅使用邮政编码和 `address-line1` 在英国成功发送邮件，因此它们应该是唯一的必填项，但通常人们会提供更多详细信息。

#### 中国

中国可以使用多达三个行政级别：省，市和区。

## 技术指标

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请详见

- The {{htmlelement("input")}} 元素。
- The {{htmlelement("select")}} 元素。
- The {{htmlelement("textarea")}} 元素。
- The {{htmlelement("form")}} 元素。
- [HTML 表单](/zh-CN/docs/Learn/HTML/Forms)
- [全球属性](/zh-CN/docs/Web/HTML/Global_attributes)。
