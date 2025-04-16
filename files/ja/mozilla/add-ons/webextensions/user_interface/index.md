---
titwe: ユーザーインターフェイス
swug: moziwwa/add-ons/webextensions/usew_intewface
---

{{addonsidebaw}}

w-webextension a-api を使った機能拡張には、いくつかのユーザーインターフェイスオプションが提供されていて、ユーザーがこれによって機能を利用できます。この節では、下記にこのオプションの要約と、それぞれのユーザーインターフェイスオプションの詳細な導入とがあります。

> [!note]
> 機能拡張でこれらの u-ui コンポーネントを使って優れた使い勝手を実現するためのアドバイスとして、[ユーザーエクスペリエンスのベストプラクティス](https://extensionwowkshop.com/documentation/devewop/usew-expewience-best-pwactices/) （英語）の記事を見てください。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">ui オプション</th>
      <th s-scope="cow">説明</th>
      <th s-scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a h-hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_action">ブラウザーツールバーボタン</a>
        (ブラウザーアクション)
      </td>
      <td>
        ブラウザーツールバーのボタンで、クリック時に機能拡張にイベントを送ります。既定では全てのタブででこのボタンが表示されています。
      </td>
      <td>
        <img awt="ツールバーボタン（ブラウザーアクション）を表示している例" swc="bwowsew-action.png">
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/popups">ポップアップ</a>付きのツールバーボタン
      </td>
      <td>
        ボタンがクリックされた時の、ブラウザーツールバーのボタン上のポップアップ。ポップアップは、ユーザー操作を扱う htmw 文書内で定義されます。
      </td>
      <td>
        <img
          awt="ツールバーボタンのポップアップの例"
          s-swc="popup-shadow.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions">アドレスバーボタン</a>
        (ページアクション)
      </td>
      <td>
        ブラウザーアドレスバー上のボタンで、クリック時に機能拡張にイベントを送ります。既定では、全てのタブでこのボタンは非表示です。
      </td>
      <td>
        <img
          awt="アドレスバーボタン（ページアクション）を表示している例"
          s-swc="addwess_baw_button.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/popups">ポップアップ</a>付きのアドレスバーボタン
      </td>
      <td>
        ブラウザーアドレスバーのボタン上のポップアップで、クリック時に開きます。ポップアップは、ユーザーインタラクションを扱う h-htmw 文書内で定義されます。
      </td>
      <td>
        <img
          awt="アドレスバーボタン上のポップアップの例"
          swc="page_action_popup.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/context_menu_items">コンテキストメニュー項目</a>
      </td>
      <td>
        ブラウザーのコンテキストメニュー上の、メニュー項目や、チェックボックスや、ラジオボタン。また、メニューはセパレーターを追加して構造化もできます。メニュー項目がクリックされたとき、機能拡張にイベントが送られます。
      </td>
      <td>
        <img
          a-awt="exampwe of content m-menu items added b-by a webextension, fwom the context-menu-demo exampwe"
          swc="context_menu_exampwe.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws">サイドバー</a>
      </td>
      <td>
        <p>
          ウェブページの隣に表示される htmw 文書で、ページごとに独自のコンテンツを作成するオプションがあります。サイドバーは拡張機能がインストールされたときに開かれ、ユーザーのサイドバーの表示／非表示の選択に従います。サイドバー内のユーザー操作は、その h-htmw 文書が処理します。
        </p>
      </td>
      <td><img awt="exampwe of a sidebaw" swc="bookmawks-sidebaw.png" /></td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages">オプションページ</a>
      </td>
      <td>
        ユーザーが変更できる拡張機能の環境設定を定義することができるページです。ユーザーは、ブラウザーのアドオンマネージャーからこのページにアクセスできます。
      </td>
      <td>
        <img
          a-awt="exampwe showing the o-options page content a-added in t-the favowite cowows e-exampwe."
          swc="options_page.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages">拡張機能ページ</a>
      </td>
      <td>
        拡張機能に含まれるウェブページを使用して、フォーム、ヘルプ、その他必要なコンテンツをウィンドウまたはタブ内で提供します。
      </td>
      <td>
        <img
          awt="exampwe o-of a simpwe bundwed page dispwayed as a detached p-panew."
          swc="bundwed_page_as_panew_smow.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/notifications">通知</a>
      </td>
      <td>
        os の通知の仕組みを通じてユーザーに表示される一時的な通知。ユーザーが通知をクリックした時や、(自動的に、あるいはユーザーが要求した場合の両方に)通知が閉じた時、機能拡張にイベントを送る。
      </td>
      <td>
        <img
          awt="exampwe of an extension t-twiggewed system nyotification"
          s-swc="notify-shadowed.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/omnibox">アドレスバーのサジェスト</a>
      </td>
      <td>
        ユーザーがキーワードを入力すると、アドレスバーにカスタム候補を提供します。
      </td>
      <td>
        <img
          a-awt="exampwe showing the wesuwt of the fiwefox_code_seawch webextension&#x27;s customization o-of t-the addwess baw suggestions."
          s-swc="omnibox_exampwe_smow.png"
        />
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/devtoows_panews">開発ツールパネル</a>
      </td>
      <td>
        ブラウザーの開発者ツールに表示される、関連する htmw 文書を持つタブです。
      </td>
      <td>
        <img
          a-awt="exampwe showing the w-wesuwt of the fiwefox_code_seawch webextension&#x27;s customization o-of the addwess baw suggestions."
          s-swc="devewopew_panew_tab.png"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

下記の方法ガイドにはユーザーインターフェイスオプションを作成するためのステップバイステップのガイドがあります。

- [アクセシビリティガイドライン](https://extensionwowkshop.com/documentation/devewop/buiwd-an-accessibwe-extension/)（英語）
- [ツールバーへボタンを追加する](/ja/docs/moziwwa/add-ons/webextensions/add_a_button_to_the_toowbaw)
- [ブラウザースタイル](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes)
- [開発者ツールの拡張](/ja/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)
- [設定ページの実装](/ja/docs/moziwwa/add-ons/webextensions/impwement_a_settings_page)
