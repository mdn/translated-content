---
title: 可理解性
slug: Web/Accessibility/Guides/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

本文提供了有关如何编写 Web 内容以符合 Web 内容无障碍指南（WCAG）2.0 和 2.1 中**可理解性**原则所列成功标准的实用建议。可理解性要求信息和用户界面的操作必须易于理解。

> [!NOTE]
> 要了解 W3C 对可理解性及其准则和成功标准的定义，请参阅[原则 3：可理解性——信息和用户界面的操作必须易于理解](https://w3c.github.io/wcag/guidelines/22/#understandable)。

## 准则 3.1——可读性：使文本内容可读且易于理解

该准则重点关注如何使文本内容尽可能易于理解。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">成功标准</th>
      <th scope="col">如何符合标准</th>
      <th scope="col">实用资源</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.1.1 网页语言（A）</td>
      <td>
        每个网页的默认人类语言应能通过代码确定。这对于确保读者访问以适合他们的语言编写的页面等目的至关重要。实现这一目标的最简单方法是在页面的 {{htmlelement("html")}} 元素上设置 <a href="/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang">lang</a> 属性，并将其值设为最能代表页面所用语言的语言代码。
      </td>
      <td>
        参见<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#为文档设定主语言">为文档设定主语言</a>。
      </td>
    </tr>
    <tr>
      <td>3.1.2 局部语言（AA）</td>
      <td>
        <p>
          如果页面内容包含与主要语言不同的单词或短语，请在包裹这些单词或短语的元素上使用 <a href="/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang">lang</a> 属性，为其设置适当的语言。例如，如果没有可用的语义元素，可以使用 {{htmlelement("span")}}。
        </p>
        <p>
          对于不因语言而变化的单词或短语（例如专有名称、不属于特定语言的技术术语），无需设置不同的语言。
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 特殊单词（AAA）</td>
      <td>
        使用技术术语、行话、习语或俚语时，应提供这些词语的定义。你的网站应提供包含这些词语定义的术语表，以便在词语出现时链接到相应条目。至少也应在上下文中，或在页面底部的<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Lists#描述列表">描述列表</a>中提供定义。
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 缩写（AAA）</td>
      <td>
        <p>
          使用缩写时，应提供其完整形式，或根据需要提供定义。
        </p>
        <p>
          {{htmlelement("abbr")}} 元素通常被认为是提供缩写完整形式的首选方式——它可以通过 <a href="/zh-CN/docs/Web/HTML/Reference/Global_attributes/title">title</a> 属性包含完整形式，并在鼠标悬停于缩写上时显示。然而，键盘无法访问 title 属性的内容，屏幕阅读器也不一定会将其读出。更好的处理方式是提供指向术语表页面的链接，其中包含缩写的完整形式及解释，或者至少在上下文中包含这些信息。
        </p>
      </td>
      <td>
        参见<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#缩略语">缩略语</a>。
      </td>
    </tr>
    <tr>
      <td>3.1.5 阅读水平（AAA）</td>
      <td>
        <p>
          如果文本所需的阅读水平高于初中教育水平（通常对应 11 至 14 岁的儿童），请提供补充说明材料，以帮助无法读懂这些文本的人，或提供以初中阅读水平撰写的替代版本。
        </p>
        <p>
          这并不意味着所有人都应理解每个主题，而是写作风格应便于所有人阅读。最好以初中阅读水平撰写所有内容，即使是编程教程等技术文档也不例外，除非有充分理由采用其他风格（例如为了营造诗意），或者必须使用严谨的写作风格（例如 W3C 规范）。
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 发音（AAA）</td>
      <td>
        <p>
          当理解词语的发音对于完整理解内容是必要的时，应提供让用户获取这些发音的机制。
        </p>
        <p>
          可以使用 HTML {{htmlelement("audio")}} 元素创建控件，让读者播放包含正确发音的音频文件。对于难读的词语，也可以像词典条目一样，在其后附上文字形式的发音指南。
        </p>
      </td>
      <td>
        参见<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio">视频和音频内容</a>以及<a href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html">英语词典发音指南</a>。
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 另请参阅 WCAG 对[准则 3.1 可读性：使文本内容可读且易于理解](https://w3c.github.io/wcag/guidelines/22/#readable)的描述。

## 准则 3.2——可预测性：让网页以可预测的方式呈现和操作

该准则重点关注如何使用户界面直观且易于理解。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">成功标准</th>
      <th scope="col">如何符合标准</th>
      <th scope="col">实用资源</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.2.1 焦点（A）</td>
      <td>
        <p>
          当控件或页面上的其他功能获得焦点时，不应以可能使用户困惑或迷失方向的方式改变上下文。
        </p>
        <p>
          这需要合理的设计——用户不希望界面出乎意料，而是希望界面直观且符合预期。例如，使导航菜单选项获得焦点不应改变当前显示的页面——应在激活该选项后才改变显示内容。
        </p>
      </td>
      <td>
        <code>Element</code> 的 {{domxref("Element.focus_event", "focus")}} 事件文档包含一些有用的信息。另请参阅<a href="/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#重新建立键盘的无障碍">重新建立键盘的无障碍</a>，了解一些实用的实现思路。
      </td>
    </tr>
    <tr>
      <td>3.2.2 输入（A）</td>
      <td>
        <p>
          当用户向控件输入数据或更改设置时，上下文不应发生意料之外的变化。在变化发生之前，应提醒或告知用户即将发生的变化。
        </p>
        <p>
          同样，应采用合理的设计。例如，如果按下按钮会使应用程序退出当前视图，应要求用户确认此操作，并在适当时保存其工作等。
        </p>
      </td>
      <td>
        {{domxref("Element/input_event", "input")}} 事件在此很有用。
      </td>
    </tr>
    <tr>
      <td>3.2.3 一致性导航（AA）</td>
      <td>
        <p>
          导航菜单或控件的样式和位置应在不同页面或视图之间保持一致，即使添加了新项目，已有项目也应以相同顺序出现。如果用户主动进行了更改，例如选择不同的配色方案或导航位置，则所有页面都应遵循用户的选择。
        </p>
        <p>
          同样，这需要合理的设计——使所有页面或视图中的导航控件保持一致。
        </p>
      </td>
      <td>
        参见<a href="/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#页面布局">合理组织页面分区</a>，了解用于布局的现代标记方式。另请参阅<a href="/zh-CN/docs/Learn_web_development/Core/Text_styling/Styling_links#样式化链接为按钮">样式化链接为按钮</a>，其中包含一个实用的无障碍导航菜单示例。
      </td>
    </tr>
    <tr>
      <td>3.2.4 一致性标识（AA）</td>
      <td>
        <p>
          具有相同功能的控件或组件应在不同页面或视图中以相同方式标识。例如，全球旅行网站每个页面上出现的货币转换器，无论在语义还是标签上都应完全一致。
        </p>
        <p>同样，这需要合理的设计！</p>
      </td>
      <td>
        “标签”可以指文本内容中的描述性信息，也可以指 HTML 表单标签。参见<a href="/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#有意义的文字标签">使用有意义的文字标签</a>，了解更多信息。
      </td>
    </tr>
    <tr>
      <td>3.2.5 按请求改变（AAA）</td>
      <td>
        <p>
          可能使用户困惑或迷失方向的上下文变化，应仅在用户请求时发生，或者用户应能够关闭这些变化。
        </p>
        <p>
          如果需要显著改变当前视图（例如内容或控件），应让用户控制变化发生的时机（例如显示哪个页面、何时切换到图库中的下一张照片等）。
        </p>
        <p>
          如果需要在页面上提供轮播等功能，请提供停止自动切换的选项。如有可能，最好避免此类功能。
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.2.6 一致性帮助（A）</td>
      <td>
        <p>
          如果网页包含在多个页面上重复出现的帮助机制（包括自助选项和人工联系方式），这些机制应在所有页面中以相同顺序排列，除非用户主动进行了更改。
        </p>
      </td>
      <td>
        <p>
          参阅此标准的<a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">一致性帮助文档</a>，了解更多信息。
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 另请参阅 WCAG 对[准则 3.2 可预测性：让网页以可预测的方式呈现和操作](https://w3c.github.io/wcag/guidelines/22/#predictable)的描述。

## 准则 3.3——辅助输入：帮助用户避免和纠正错误

该准则重点关注如何帮助用户在需要时输入正确的信息，并尽可能减少错误。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">成功标准</th>
      <th scope="col">如何符合标准</th>
      <th scope="col">实用资源</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3.3.1 错误标识（A）</td>
      <td>
        <p>
          当用户填写表单或选择选项时，应明确告知用户检测到的任何错误，并指出与错误相关的表单控件。
        </p>
        <p>
          建议根据实际情况，通过 HTML 表单验证功能、JavaScript 或两者结合，实现客户端的错误检测和处理。当检测到错误时，应在出错的表单输入控件旁显示直观的错误消息，帮助用户纠正输入。对于屏幕阅读器用户，可以使用 ARIA 实时区域提醒他们页面发生了变化。
        </p>
        <div class="note notecard">
          <p>
            <strong>备注：</strong>服务器端验证应<em>始终</em>与客户端验证同时使用。客户端验证很容易被关闭或绕过，因此不能仅依赖它。
          </p>
        </div>
      </td>
      <td>
        参见<a href="/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation">表单数据验证</a>，了解全面的验证信息；参见 <a href="/zh-CN/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#动态内容更新">WAI-ARIA：动态内容更新</a>，了解实时区域的信息。
      </td>
    </tr>
    <tr>
      <td>3.3.2 标签或说明（A）</td>
      <td>
        <p>
          需要输入数据时，应提供清晰的说明。如果只需要简短的说明或提示，可以为姓名、年龄等单个输入控件使用 {{htmlelement("label")}} 元素；对于相关联的多个输入控件（例如出生日期或邮寄地址的各个部分），可以结合使用 {{htmlelement("label")}}、{{htmlelement("fieldset")}} 和 {{htmlelement("legend")}} 元素。
        </p>
        <p>
          如果需要更复杂的解释，也可以添加说明段落，或者尝试让表单更直观。
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a href="/zh-CN/docs/Learn_web_development/Core/Accessibility/HTML#有意义的文字标签">使用有意义的文字标签</a>
          </li>
          <li>
            <a href="/zh-CN/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form">如何构建 HTML 表单</a>
          </li>
          <li>
            <a href="/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names">文本标签和名称</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 错误建议（AA）</td>
      <td>
        <p>
          当检测到错误且有已知的纠正建议时，应向用户提供这些建议（例如，用户选择的用户名已被占用时，建议其他可用的用户名），除非这样做会导致安全问题（例如输入密码时）或不符合当前情境（例如用户正在问答应用中回答问题时）。
        </p>
        <p>
          在适当的情况下，你可能需要结合 JavaScript 和服务器端功能，检查输入是否正确。如果不正确，则确定可以向用户提供哪些可行的建议。这些建议应像错误消息一样（参见 3.3.1），在相关上下文中以实用的方式显示。
        </p>
      </td>
      <td>暂无推荐教程。</td>
    </tr>
    <tr>
      <td>3.3.4 错误预防（法律、金融、数据）（AA）</td>
      <td>
        <p>
          对于涉及敏感数据输入的表单（例如法律协议、电子商务交易或个人数据），应至少满足以下条件之一：
        </p>
        <ul>
          <li>提交可以撤销。</li>
          <li>检查数据中的错误，并给用户纠正错误的机会。</li>
          <li>提供在最终提交之前确认和纠正信息的机制。</li>
        </ul>
      </td>
      <td>
        <p>
          <strong>可撤销</strong>——对于任何可以输入数据的视图，应提供相应的视图，让用户能够根据需要编辑甚至删除条目（例如，参见 <a href="/zh-CN/docs/Learn_web_development/Extensions/Server-side/Django">Django Web 框架</a>）。
        </p>
        <p>
          <strong>检查数据</strong>——如 3.3.1 所述，应结合客户端和服务器端验证来检测错误，并向用户显示有用的消息，以便他们纠正输入。
        </p>
        <p>
          <strong>确认并纠正</strong>——在适当的情况下，当用户填写一系列表单字段以完成任务（例如购买商品）后，应向其显示确认页面，让用户检查输入并纠正任何不妥之处。这种模式常用于亚马逊等电子商务网站。
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 提供上下文相关的帮助（AAA）</td>
      <td>
        在上下文中提供说明及其他适当提示，帮助用户填写和提交表单。
      </td>
      <td>
        这实际上是在 3.3.1 等类似标准的基础上，要求提供更详尽的上下文相关帮助信息和服务。例如，在每个页面上提供指向帮助页面或服务的专用链接，或提供示例，展示成功填写表单后的样子。
      </td>
    </tr>
    <tr>
      <td>3.3.6 错误预防（全部）（AAA）</td>
      <td>
        该原则以 3.3.4 为基础，将其要求扩展到所有用户输入场景，而不仅仅是涉及敏感数据的场景。
      </td>
      <td>同样，参见 3.3.4。</td>
    </tr>
    <tr>
      <td>3.3.7 冗余输入（A）</td>
      <td>
        对于同一过程或用户流程中，用户已经输入或提供过、但再次需要的信息，应自动填充，或提供选项列表供用户选择。例外情况包括：重新输入信息至关重要、出于安全原因必须重新输入，或信息已不再有效。
      </td>
      <td>
        参阅<a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">理解冗余输入</a>，了解更多信息。
      </td>
    </tr>
    <tr>
      <td>3.3.8 无障碍身份验证（最低）（AA）</td>
      <td>
        身份验证过程中的任何步骤都不应要求进行记忆密码等认知功能测试，除非提供替代方式，例如识别物体或个人内容（如图像、视频和音频），或者提供辅助机制（例如复制粘贴和自动保存密码）。
      </td>
      <td>
        参阅此标准的<a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">无障碍身份验证文档</a>，了解更多信息。
      </td>
    </tr>
    <tr>
      <td>3.3.9 无障碍身份验证（增强）（AAA）</td>
      <td>
        身份验证过程中的任何步骤都不得要求进行记忆密码等认知功能测试，除非提供不依赖认知功能测试的替代方式，或提供帮助用户完成认知功能测试的机制。允许要求用户识别物体或识别其提供给网站的非文本内容的身份验证测试。
      </td>
      <td>
        参阅<a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">增强的无障碍身份验证文档（AAA）</a>，了解更多信息。
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 另请参阅 WCAG 对[准则 3.3 辅助输入：帮助用户避免和纠正错误](https://w3c.github.io/wcag/guidelines/22/#input-assistance)的描述。

## 参见

- [WCAG](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [可感知性](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [可操作性](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. 可理解性
  4. [健壮性](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
