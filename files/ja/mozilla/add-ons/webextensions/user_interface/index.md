---
title: ユーザーインターフェイス
slug: Mozilla/Add-ons/WebExtensions/user_interface
tags:
  - Landing
  - ユーザーインターフェイス
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface
---
{{AddonSidebar}}

WebExtension API を使った機能拡張には、いくつかのユーザーインターフェイスオプションが提供されていて、ユーザーがこれによって機能を利用できます。この節では、下記にこのオプションの要約と、それぞれのユーザーインターフェイスオプションの詳細な導入とがあります。

> **Note:** 機能拡張でこれらの UI コンポーネントを使って優れた使い勝手を実現するためのアドバイスとして、[ユーザーエクスペリエンスのベストプラクティス](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) （英語）の記事を見てください。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">UI オプション</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action">ブラウザーツールバーボタン</a>
        (ブラウザーアクション)
      </td>
      <td>
        ブラウザーツールバーのボタンで、クリック時に機能拡張にイベントを送ります。既定では全てのタブででこのボタンが表示されています。
      </td>
      <td>
        <img alt="ツールバーボタン（ブラウザーアクション）を表示している例" src="browser-action.png">
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups">ポップアップ</a>付きのツールバーボタン
      </td>
      <td>
        ボタンがクリックされた時の、ブラウザーツールバーのボタン上のポップアップ。ポップアップは、ユーザー操作を扱う HTML 文書内で定義されます。
      </td>
      <td>
        <img
          alt="ツールバーボタンのポップアップの例"
          src="popup-shadow.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions">アドレスバーボタン</a>
        (ページアクション)
      </td>
      <td>
        ブラウザーアドレスバー上のボタンで、クリック時に機能拡張にイベントを送ります。既定では、全てのタブでこのボタンは非表示です。
      </td>
      <td>
        <img
          alt="アドレスバーボタン（ページアクション）を表示している例"
          src="address_bar_button.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups">ポップアップ</a>付きのアドレスバーボタン
      </td>
      <td>
        ブラウザーアドレスバーのボタン上のポップアップで、クリック時に開きます。ポップアップは、ユーザーインタラクションを扱う HTML 文書内で定義されます。
      </td>
      <td>
        <img
          alt="アドレスバーボタン上のポップアップの例"
          src="page_action_popup.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items">コンテキストメニュー項目</a>
      </td>
      <td>
        ブラウザーのコンテキストメニュー上の、メニュー項目や、チェックボックスや、ラジオボタン。また、メニューはセパレーターを追加して構造化もできます。メニュー項目がクリックされたとき、機能拡張にイベントが送られます。
      </td>
      <td>
        <img
          alt="Example of content menu items added by a WebExtension, from the context-menu-demo example"
          src="context_menu_example.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars">サイドバー</a>
      </td>
      <td>
        <p>
          ウェブページの隣に表示される HTML 文書で、ページごとに独自のコンテンツを作成するオプションがあります。サイドバーは拡張機能がインストールされたときに開かれ、ユーザーのサイドバーの表示／非表示の選択に従います。サイドバー内のユーザー操作は、その HTML 文書が処理します。
        </p>
      </td>
      <td><img alt="Example of a sidebar" src="bookmarks-sidebar.png" /></td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages">オプションページ</a>
      </td>
      <td>
        ユーザーが変更できる拡張機能の環境設定を定義することができるページです。ユーザーは、ブラウザーのアドオンマネージャーからこのページにアクセスできます。
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
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages">拡張機能ページ</a>
      </td>
      <td>
        拡張機能に含まれるウェブページを使用して、フォーム、ヘルプ、その他必要なコンテンツをウィンドウまたはタブ内で提供します。
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
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications">通知</a>
      </td>
      <td>
        OS の通知の仕組みを通じてユーザーに表示される一時的な通知。ユーザーが通知をクリックした時や、(自動的に、あるいはユーザーが要求した場合の両方に)通知が閉じた時、機能拡張にイベントを送る。
      </td>
      <td>
        <img
          alt="Example of an extension triggered system notification"
          src="notify-shadowed.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox">アドレスバーのサジェスト</a>
      </td>
      <td>
        ユーザーがキーワードを入力すると、アドレスバーにカスタム候補を提供します。
      </td>
      <td>
        <img
          alt="Example showing the result of the firefox_code_search WebExtension&#x27;s customization of the address bar suggestions."
          src="omnibox_example_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels">開発ツールパネル</a>
      </td>
      <td>
        ブラウザーの開発者ツールに表示される、関連する HTML 文書を持つタブです。
      </td>
      <td>
        <img
          alt="Example showing the result of the firefox_code_search WebExtension&#x27;s customization of the address bar suggestions."
          src="developer_panel_tab.png"
        />
      </td>
    </tr>
  </tbody>
</table>

下記の方法ガイドにはユーザーインターフェイスオプションを作成するためのステップバイステップのガイドがあります。

- [アクセシビリティガイドライン](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)（英語）
- [ツールバーへボタンを追加する](/ja/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [ブラウザースタイル](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [開発者ツールの拡張](/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [設定ページの実装](/ja/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
