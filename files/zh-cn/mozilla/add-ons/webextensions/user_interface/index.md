---
title: User interface
slug: Mozilla/Add-ons/WebExtensions/user_interface
---

为了能给用户提供在不同场景下都具有价值的功能，WebExtensions 提供了许多的用户界面选项。下面是这些选项的摘要，在本章中将会对每个选项做出更详细的说明。

> [!NOTE]
> 想要使你的扩展能提供良好的用户体验吗？请查看文章[用户体验的最佳实践](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">UI 选项</th>
      <th scope="col">描述</th>
      <th scope="col">实例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action"
          >浏览器工具栏按钮</a
        >(浏览器行为)
      </td>
      <td>
        工具栏上一个可点击的按钮，点击时将事件派发到附件组件上。默认情况下，这个按钮在栏位中是可见的。
      </td>
      <td>
        <img
          alt="Example of a WebExtension toolbar button"
          src="browser-action.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions"
          >带有弹出面板的工具栏按钮</a
        >
      </td>
      <td>
        当这个在工具栏上的按钮被点击时，它会弹出一个面板。这个面板使用 HTML
        文档编写，用于处理与用户的交互行为。
      </td>
      <td>
        <img
          alt="Example of a WebExtension toolbar button with a popup"
          src="popup-shadow.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions"
          >地址栏菜单按钮</a
        >(页面行为)
      </td>
      <td>
        这个按钮位于浏览器地址栏菜单条，按钮被点击的时候可以派发一个事件出来。默认情况下，这个按钮在所有
        tab 上都是隐藏的。
      </td>
      <td>
        <img
          alt="Example showing an address bar button (page action)"
          src="address_bar_button.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        带有<a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >弹出面板</a
        >的地址栏菜单按钮
      </td>
      <td>
        地址栏菜单按钮被点击时，会弹出一个面板，这个面板通过 HTML
        文档定义，用于处理用户交互。
      </td>
      <td>
        <img
          alt="Example of a popup on the address bar button"
          src="page_action_popup.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items"
          >上下文菜单项</a
        >
      </td>
      <td>
        在一个或多个网页上下文菜单中的菜单项，复选框和单选按钮。菜单项也可以通过添加分隔栏进行分组，当一个菜单项被点击时，一个事件将会被派发至附加组件。
      </td>
      <td><img src="context_menu_example.png" /></td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars"
          >侧边栏</a
        >
      </td>
      <td>
        <p>
          一个在网页边显示的 HTML
          文档，每页都有其特定的内容。每当扩展安装时侧边栏将会打开，但最终还是遵循用户的侧边栏可见性设置。侧边栏内的用户交互通过
          HTML 文档处理。
        </p>
      </td>
      <td>
        <img
          alt="Example of a WebExtension&#x27;s sidebar"
          src="bookmarks-sidebar.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages"
          >选项页面</a
        >
      </td>
      <td>
        一个可以使你定义可以更改的扩展首选项的页面。用户可以从浏览器的附加组件管理器中访问此页面。
      </td>
      <td>
        <img
          alt="Example showing the options page content added in the favorite colors example."
          src="options_page.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Bundled_web_pages"
          >扩展页面</a
        >
      </td>
      <td>
        <p>
          在单独的窗口或页面中使用扩展提供的页面来提供表单，帮助或其他任何需要的内容。
        </p>
      </td>
      <td>
        <img
          alt="Example of a simple bundled page displayed as a detached panel."
          src="bundled_page_as_panel_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications"
          >通知</a
        >
      </td>
      <td>
        通过底层操作系统的通知机制向用户显示的短暂通知。当用户点击或者通知关闭时
        (用户关闭或超时关闭) 派发事件到扩展程序。
      </td>
      <td>
        <img
          alt="Example notification from a WebExtension"
          src="notify-shadowed.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox"
          >地址栏建议</a
        >
      </td>
      <td>当用户输入关键词时提供自定义的地址栏建议。</td>
      <td>
        <img
          alt="Example showing the result of the firefox_code_search WebExtension&#x27;s customization of the address bar suggestions."
          src="omnibox_example_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels"
          >开发者工具面板</a
        >
      </td>
      <td>在浏览器的开发者工具中显示的一个关联了 HTML 文档的标签。</td>
      <td>
        <img
          alt="New panel tab in the Developer Tools tab bar"
          src="developer_panel_tab.png"
        />
      </td>
    </tr>
  </tbody>
</table>

以下的操作指南提供了一些创建用户界面选项的指导;

- [在工具栏中添加一个按钮](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [实现一个设置页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [扩展开发人员工具](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [浏览器样式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
