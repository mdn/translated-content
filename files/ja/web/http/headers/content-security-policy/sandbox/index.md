---
title: 'CSP: sandbox'
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) の **`sandbox`** ディレクティブは、 {{HTMLElement("iframe")}} の {{htmlattrxref("sandbox", "iframe")}} 属性と同様に、要求されたリソースに対してサンドボックスを有効にします。これは、ポップアップの防止、プラグインやスクリプトの実行の防止、同一オリジンポリシーの強制などを含むページ操作の制限を適用します。

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

```
Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox <value>;
```

`<value>` は省略可能で、以下の値の内の一つです。

- `allow-downloads`
  - : ユーザーがボタンやリンクをクリックした後のダウンロードを可能にします。
- `allow-downloads-without-user-activation` {{experimental_inline}}
  - : ユーザーによる指示のないダウンロードを許可します。
- `allow-forms`
  - : 埋め込み閲覧コンテキストが、フォームを送信することを許可します。このキーワードが使用されなかった場合、この操作は許可されません。
- `allow-modals`
  - : 埋め込み閲覧コンテキストが、モーダルウィンドウを開くことを許可します。
- `allow-orientation-lock`
  - : 埋め込み閲覧コンテキストが、画面の向きをロックする機能を無効化することを許可します。
- `allow-pointer-lock`
  - : 埋め込み閲覧コンテキストが、[ポインターロック API](/ja/docs/Web/API/Pointer_Lock_API) を使用することを許可します。
- `allow-popups`
  - : ポップアップ (`window.open`, `target="_blank"`, `showModalDialog` などによるもの) を許可します。このキーワードが使用されなかった場合、この機能は暗黙に失敗します。
- `allow-popups-to-escape-sandbox`
  - : サンドボックス化された文書が、サンドボックスフラグを強制することなく新しいウィンドウを開くことを許可します。これによって、例えば、サードパーティの広告が安全にサンドボックス化される一方、ランディングページには同じ制限が強制されなくなります。
- `allow-presentation`
  - : 埋め込みを行った者が、 iframe がプレゼンテーションセッションを開始できるかどうかを制御できるようになります。
- `allow-same-origin`
  - : コンテンツが通常のオリジンからのものとして扱われることを許可します。このキーワードが使用されなかった場合は、埋め込まれたコンテンツは独自のオリジンからのものとして扱われます。
- `allow-scripts`
  - : 埋め込み閲覧コンテキストがスクリプトを実行することを許可します (ポップアップウィンドウの生成を除く)。このキーワードが使用されなかった場合は、この操作は許可されません。
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : リソースが親のストレージ機能に [Storage Access API](/ja/docs/Web/API/Storage_Access_API) でアクセスを要求できるようにします。
- `allow-top-navigation`
  - : 埋め込み閲覧コンテキストが、最上位の閲覧コンテキストを移動させる (読み込ませる) ことを許可します。このキーワードが使用されなかった場合、この操作は許可されません。
- `allow-top-navigation-by-user-activation`
  - : ユーザーの指示で開始された場合に限り、リソースが最上位の閲覧コンテキストを移動させます。
- `allow-top-navigation-to-custom-protocols`
  - :  非フェッチスキームへのナビゲーションを外部ソフトウェアに引き渡せるようにします。

## 例

```
Content-Security-Policy: sandbox allow-scripts;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("iframe")}} 要素の {{htmlattrxref("sandbox", "iframe")}} 属性
