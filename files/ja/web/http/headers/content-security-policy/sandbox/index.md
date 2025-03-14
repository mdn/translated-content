---
title: "CSP: sandbox"
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: c49f6dcd20b14f28218aa26030ebbb2f54143521
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`sandbox`** ディレクティブは、 {{HTMLElement("iframe")}} の [`sandbox`](/ja/docs/Web/HTML/Element/iframe#sandbox) 属性と同様に、要求されたリソースに対してサンドボックスを有効にします。これは、ポップアップの防止、プラグインやスクリプトの実行の防止、同一オリジンポリシーの強制などを含むページ操作の制限を適用します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Document directive", "文書ディレクティブ")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        このディレクティブは {{HTMLElement("meta")}} 要素や {{HTTPHeader("Content-Security-policy-Report-Only")}} ヘッダーフィールドでは対応していません。
      </th>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox <value>;
```

`<value>` は省略可能で、以下の値の内の一つです。

- `allow-downloads`
  - : [download](/ja/docs/Web/HTML/Element/a#attr-download) 属性がついた {{HTMLElement("a")}} または {{HTMLElement("area")}} 要素における、ファイルのダウンロードのための操作を通してファイルのダウンロードを可能にします。これは、ユーザーがリンクをクリックしたか、JS コードがユーザーとの対話なしに開始したかに関係なく、動作します。
- `allow-downloads-without-user-activation` {{experimental_inline}}
  - : ユーザーによる指示のないダウンロードを許可します。
- `allow-forms`
  - : ページがフォームを送信することを許可します。このキーワードを使用しない場合、フォームは通常通り表示されますが、フォームを送信しても入力の検証、ウェブサーバへのデータ送信、ダイアログの終了は行われません。
- `allow-modals`
  - : ページが {{domxref("Window.alert()")}}、{{domxref("Window.confirm()")}}、{{domxref("Window.print()")}}、{{domxref("Window.prompt()")}} によってモーダルウィンドウを開けるようにします。一方、 {{HTMLElement("dialog")}} を開くことはこのキーワードと無関係に許可されます。また、ページが {{domxref("BeforeUnloadEvent")}} イベントを受信することもできるようにします。
- `allow-orientation-lock`
  - : リソースが、[画面の向きをロック](/ja/docs/Web/API/Screen/lockOrientation)できるようにします。
- `allow-pointer-lock`
  - : このページが、[ポインターロック API](/ja/docs/Web/API/Pointer_Lock_API) を使用することを許可します。
- `allow-popups`
  - : ポップアップ（ {{domxref("Window.open()")}}、`target="_blank"`、{{domxref("Window.showModalDialog()")}} などによるもの）を許可します。このキーワードが使用されなかった場合、この機能は暗黙に失敗します。
- `allow-popups-to-escape-sandbox`
  - : サンドボックス化された文書が、サンドボックスフラグを強制することなく新しいウィンドウを開くことを許可します。これによって、例えば、サードパーティの広告が安全にサンドボックス化される一方、ランディングページには同じ制限が強制されなくなります。
- `allow-presentation`
  - : 埋め込みを行った者が、 iframe がプレゼンテーションセッションを開始できるかどうかを制御できるようになります。
- `allow-same-origin`
  - : このトークンが使用されなかった場合、リソースは{{Glossary("same-origin policy", "同一オリジンポリシー")}}に常に失敗する特別なオリジンからのものとして扱われます（潜在的に[データストレージやクッキー](/ja/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access)へのアクセスや、一部の JavaScript API の使用を阻止することが可能です）。
- `allow-scripts`
  - : このページががスクリプトを実行することを許可します（ポップアップウィンドウの生成を除く）。このキーワードが使用されなかった場合は、この操作は許可されません。
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : リソースが親のストレージ機能に[ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API) でアクセスを要求できるようにします。
- `allow-top-navigation`
  - : リソースが、（`_top` という名前の）最上位の閲覧コンテキストを移動させることを許可します。
- `allow-top-navigation-by-user-activation`
  - : ユーザーの指示で開始された場合に限り、リソースが最上位の閲覧コンテキストを移動させます。
- `allow-top-navigation-to-custom-protocols`
  - : ブラウザーに組み込まれている、または[ウェブサイトによって登録された](/ja/docs/Web/API/Navigator/registerProtocolHandler) `http` 以外のプロトコルへのナビゲーションを可能にします。この機能は `allow-popups` または `allow-top-navigation` キーワードでも有効になる。

## 例

```http
Content-Security-Policy: sandbox allow-scripts;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("iframe")}} 要素の [`sandbox`](/ja/docs/Web/HTML/Element/iframe#sandbox) 属性
