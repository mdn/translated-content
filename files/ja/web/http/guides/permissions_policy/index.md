---
title: 権限ポリシー
slug: Web/HTTP/Guides/Permissions_Policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{SeeCompatTable}}

**権限ポリシー**は、ウェブ開発者がウェブサイト上でどの機能が使用できるか (または使用できないか) を明示的に宣言する仕組みを提供します。サイトのコードがアクセスできる API や、特定の機能についてブラウザーの既定の動作を変更するかどうかを制限する「ポリシー」を設定します。これにより、使用可能な機能を制限することによって、コードベースが時とともに進化しても — サードパーティーのコンテンツをより安全に構成する場合と同様に — ベストプラクティスを維持することができます。

権限ポリシーは{{Glossary("CSP", "コンテンツセキュリティポリシー")}}に似ていますが、セキュリティ動作ではなく機能を制御します。

権限ポリシーで行うことができるものの例です。

- モバイル環境でサードパーティの動画の自動再生の既定の動作を変更する。
- カメラやマイクなどの注意が必要な API をサイトが使用することを制限する。
- iframe から[全画面 API](/ja/docs/Web/API/Fullscreen_API) が利用できるようにする。
- 画像が正しい大きさであり、ビューポートに対して大きすぎないことを確認する。

> [!NOTE]
> その権限ポリシーは、かつては機能ポリシーと呼ばれていました。名前が変更され、HTTPヘッダーの構文も変更されました。過去に機能ポリシーを使用していた場合は、この点を念頭に置いて、ブラウザーの対応一覧表をチェックしてください。 `<iframe allow=" ... ">` 構文は変更されていません。

## 概念と使い方

ウェブは、悪用された場合にプライバシーやセキュリティ上のリスクを持つことができる機能や API を指定しています。そのような場合、ウェブサイト上で機能が使用される方法を厳しく制限したいと考えるかもしれません。いずれの場合も、ウェブ開発者が機能が使用できない場合を検知し、処理するための直感的な方法または中断されない方法があるべきです。

いくつかのアプローチがあります。

- ユーザー権限の付与が要求される JavaScript API に対しては、「権限が拒否されました」が返されます。
- 機能にアクセスするための JavaScript API は、 `false` 値を返すか、エラーを発生させます。
- API は公開されることがなく、まるで存在しないかのようになります。
- 機能の動作を制御するオプションは、異なる既定値になります。

> [!NOTE]
> 新たに導入された機能は、状態を伝える明示的な API を持つことがあります。既存の機能で、後に権限ポリシーと統合されるものは、通常、既存のメカニズムを使用します。

権限ポリシーを使用すると、最上位ページと埋め込み {{htmlelement("iframe")}} の両方で、どのオリジンがどの機能を使用できるかを制御できます。基本的には、各機能が許可されたオリジンの一覧であるポリシーを記述します。権限ポリシーによって制御されるそれぞれの機能は、その機能がオリジンが許可されたオリジンのリスト内で一致した場合のみ現在の文書やフレームで有効になります。

権限ポリシーでは、機能を制御するポリシーを指定する方法を 2 つ提供しています。

- {{httpheader("Permissions-Policy")}} ヘッダーは、受信したレスポンスおよびページ内の埋め込みコンテンツ（{{htmlelement("iframe")}} も含まれます）内の機能の使用を制御します。
- {{htmlelement("iframe")}} の [`allow`](/ja/docs/Web/HTML/Reference/Elements/iframe#属性) 属性は、特定の {{htmlelement("iframe")}} でのみ機能の使用を制御します。

これらは別個のものですが、関連しています。詳しくは、[埋め込みコンテンツのポリシーの継承](#埋め込みコンテンツのポリシーの継承)をご覧ください。

> [!NOTE]
> スクリプトは、文書内の {{DOMxRef("FeaturePolicy")}} オブジェクト（{{DOMxRef("Document.featurePolicy")}} または {{DOMxRef("HTMLIFrameElement.featurePolicy")}}）を介して、その権限ポリシーに関する情報をプログラムで照会することができます。

各機能を制御するには、ポリシーを以下のように書きます。

- **ディレクティブ**は、制御する機能の名前を識別します。利用できるさまざまな[ディレクティブ](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#ディレクティブ)のリストをご覧ください。
- **許可リスト**は、その機能が制御できるオリジンのリストです。すべてのオリジン、または特定のオリジンに対して機能を許可したり、すべてのオリジンでその機能の使用をブロックしたりすることができます。

以下に複数の例を記載しています。

## 権限 API との関係

権限ポリシーと{{domxref("Permissions API", "権限 API", "", "nocode")}} は密接に関連していますが、別物です。両方の技術によって権限が制御されている機能は重複しています。

- 権限ポリシーにより、サーバーは特定の文書（またはその文書内の埋め込み `<frame>`）で機能を使用できるかどうかを設定することができます。これらは**ポリシー制御**機能と呼ばれています。[権限ポリシーディレクティブのリスト](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#ディレクティブ)を参照してください。
- 権限 API は、ユーザーに付与された権限に基づいて機能にアクセスする権限を制御します。これらの機能は、[権限レジストリー](https://w3c.github.io/permissions-registry/)に記録されます。

それぞれの機能で使用される識別文字列は、どちらも一貫性が保たれています。例えば、 `geolocation` なら{{domxref("Geolocation API", "位置情報 API", "", "nocode")}} です。権限レジストリーの API 機能の大半は、対応する権限ポリシーディレクティブも持っています。例外のひとつは、{{domxref("Notifications API", "通知 API", "", "nocode")}} です。

一般的に、権限ポリシーが強力な機能の使用をブロックする場合、ユーザーはその使用許可を求められることすらなく、権限 API の {{domxref("Permissions.query", "query()")}} メソッドは、 {{domxref("PermissionStatus.state", "state")}} の値として `denied` を返します。

[Permissions > Relationship to the Permissions Policy specification](https://w3c.github.io/permissions/#relationship-to-permissions-policy) を参照してください。

## 許可リスト

許可リストとは、括弧内に次の値の 1 つ以上が含まれ、空間で区切られている掲載されているオリジンのリストです。

- `*`: この機能は、この文書内で許可され、すべての元を問わず、入れ子になった閲覧コンテキスト (`<iframe>`) すべてに適用されます。
- `()` （空の許可リスト）: この機能は、最上位の閲覧コンテキストおよび入れ子の閲覧コンテキストでは無効です。 `<iframe>` の `allow` 属性の同等な値は `'none'` です。
- `self`: この機能は、この文書内、および同一オリジンに属するすべての埋め込み閲覧コンテキスト (`<iframe>`) でのみ許可されます。オリジン同士が異なる文書間の埋め込み閲覧コンテキストでは、この機能は許可されません。 `self` は `https://your-site.example.com` の省略形と考えることができます。 `<iframe>` の `allow` 属性の同等な値は `'self'` です。
- `'src'`: この機能は、この `<iframe>` では許可されます。ただし、その {{HTMLElement('iframe','src','#Attributes')}} 属性に指定された URL と同じドメインから読み込まれた文書であることが条件となります。この値は、 `<iframe>` の `allow` 属性でのみ使用され、 `<iframe>` の既定での許可リスト値となります。
- `"<origin>"`: この機能は、特定のオリジン（例えば、`"https://a.example.com"`）に対して許可されています。オリジンは、区切り文字で別個の行として指定します。メモ： `<iframe>` の許可属性のオリジンは引用されていません。

値 `*` と `()` は自分自身で使用される場合のみであり、一方、 `self` と `src` は 1 つ以上のオリジンと結合して使用される場合があります。

> [!NOTE]
> ディレクティブには既定の許可リストがあり、これは常に HTTP ヘッダー `Permissions-Policy` の `*`、`self`、`none` のいずれかであり、ポリシーに明示的に掲載されていない場合の既定の動作を規定します。これらは個々の[ディレクティブのリファレンスページ](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#ディレクティブ)で指定されています。 `<iframe>` の `allow` 属性については、既定の動作は常に `src` です。

対応している場合、許可ポリシーのオリジンにワイルドカードを含めることができます。 これには、許可リストに複数の異なるサブドメインを明示的に指定する代わりに、ワイルドカードを使用して単一のオリジンですべてのサブドメインを指定できるという意味があります。

ですから、次の指定の代わりに、

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

次のように指定することができます。

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` は `"https://example.com"` と一致しません。

許可リストの例です。

- `*`
- `()`
- `(self)`
- `(src)`
- `("https://a.example.com")`
- `("https://a.example.com" "https://b.example.com")`
- `(self "https://a.example.com" "https://b.example.com")`
- `(src "https://a.example.com" "https://b.example.com")`
- `("https://*.example.com")`

## Permissions-Policy ヘッダーの構文

一般的な構文は次のようになります。

```http
Permissions-Policy: <directive>=<allowlist>
```

例えば、位置情報へのアクセスをすべてブロックするには、次のようにします。

```http
Permissions-Policy: geolocation=()
```

または、特定のオリジンにアクセスできるようにするには、次のようにします。

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

ヘッダーにカンマ区切りでポリシーのリストを記載して送信するか、またはそれぞれのポリシーに対して別個のヘッダーを送信することで、同時に複数の機能を制御することができます。

例えば、次のものは等価です。

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## 埋め込みフレームの構文

{{htmlelement("iframe")}} が機能を許可するには、その許可されたオリジンが親ページの許可リストにも含まれている必要があります。この[継承動作](#埋め込みコンテンツのポリシーの継承)のため、 HTTP ヘッダーで機能について最も広く受け入れられるサポートを指定し、次にそれぞれの `<iframe>` で必要なサポートのサブセットを指定することがよい考えです。

一般的な構文は次のようになります。

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

例えば、位置情報へのアクセスをすべてブロックするには、次のようにします。

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

現在のオリジンやそれ以外にもポリシーを適用するには、次のようにします。

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

これは重要です。既定では、 `<iframe>` が別のオリジンに移動する場合、その `<iframe>` の移動先のオリジンにはポリシーが適用されません。 `<iframe>` の移動先のオリジンが `allow` 属性内に含まれている場合、 `<iframe>` の移動先のオリジンには移動元の `<iframe>` に適用された権限ポリシーが適用されます。

セミコロンで区切られたポリシーディレクティブのリストを `allow` 属性内に記載することで、同時に複数の機能を制御することができます。

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

`src` 値について、特に言及する価値があります。この許可リスト値を使用すると、その {{HTMLElement('iframe','src','#Attributes')}} 属性の URL と同じオリジンから読み込まれた文書内の機能が、この `<iframe>` で許可されることを意味すると、上記で述べました。この値は、 `allow` に掲載されている機能の既定の `allowlist` 値です。従って、次の 2 つは同等です。

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> お気づきのように、`<iframe>` ポリシーの構文は、`Permissions-Policy` ヘッダーの構文とは若干異なります。前者は、権限ポリシーに取って代わられた旧機能ポリシー仕様と同じ構文を使用しています。

### フェンスフレームと権限ポリシー

{{htmlelement("fencedframe")}} は、 `<iframe>` と同じ方法で権限ポリシーを操作しますが、より制限された機能です。 `<fencedframe>` で使用するように設計された特定の機能のみ、それらに設定された権限ポリシーを介して有効にすることができます。それ以外のポリシーで制御された機能は、このコンテキストでは利用できません。

詳しくは、[フェンスフレームに利用できる権限ポリシー](/ja/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames)を参照してください。

## 埋め込みコンテンツのポリシーの継承

スクリプトは、そのオリジンに関わらず、閲覧コンテキストのポリシーを継承します。つまり、最上位のスクリプトは、メイン文書内のポリシーを継承します。

すべて `<iframe>` は親ページのポリシーを継承します。 `<iframe>` に `allow` 属性があり、かつ、親ページに {{HTTPHeader("Permissions-Policy")}} がある場合、親ページのポリシーと `allow` 属性は結合され、最も制限の厳しいサブセットが使用されます。 `<iframe>` が特定の機能を有効にするには、親ページと `allow` 属性の両方で、オリジンが許可リストに含まれている必要があります。

ポリシーで機能を無効にすることは、一方的な切り替えです。 親フレームによって子フレームで機能が無効に指定された場合、子フレームでその機能を再度有効にすることはできません。また、その子フレームの子孫フレームでも同様です。

## 例

### HTTP ヘッダーと `<iframe>` ポリシー

例えば、自分自身のオリジンとなるコンテンツと、信頼できる広告ネットワークから決まる埋め込みコンテンツで、地理位置情報の利用を可能にしたいとしましょう。 ページ全体に適用される権限ポリシーを次のように設定します。

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

広告の `<iframe>` では、次のように `https://trusted-ad-network.com` のオリジンにアクセスするように設定することができます。

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

異なるオリジンが最終的に `<iframe>` に読み込まれた場合、そのオリジンは位置情報にアクセスできません。

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダー
- iframe の {{HTMLElement("iframe", "allow", "#Attributes")}} 属性
- [Controlling browser features with Permissions Policy](https://developer.chrome.com/docs/privacy-security/permissions-policy): 使用ガイドには、いくつかのデモリンクも含まれています。
- [Permissions/Feature policies on chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [プライバシー、アクセス許可、情報セキュリティ](/ja/docs/Web/Privacy)
