---
title: 機能ポリシーの使用
slug: Web/HTTP/Feature_Policy/Using_Feature_Policy
---

{{HTTPSidebar}}

[機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)によって、最上位のページと埋め込んだフレームの両方で、どのオリジンでどの機能を使用することができるかを制御することができます。基本的にポリシーは、それぞれの機能について許可するオリジンのリストで記述します。各機能は機能ポリシーで制御され、機能は現在の文書か、許可されたオリジンのリストに一致するオリジンのフレームでのみ有効になります。

ポリシーで制御されるそれぞれの機能について、ブラウザーは昨日を有効にするオリジンのリストを許可リストとして管理します。機能のポリシーを指定しない場合、既定の許可リストが使用されます。既定の許可リストは、機能ごとに決まっています。

> **メモ:** `Feature-Policy` ヘッダーは仕様書で `Permissions-Policy` に改名されたので、この記事もそのうち、変更を反映するために更新されます。

## ポリシーの記述

ポリシーは個別のポリシーディレクティブのセットを使用して記述されます。ポリシーディレクティブは、定義された機能名と、機能を使用することができるオリジンの許可リストの組み合わせです。ポリシー内の機能はセミコロンで区切ります。

### 許可リスト

許可リストは、以下のうち一つ以上を取るオリジンの空白区切りのリストです。

- `*`: この機能はこの文書と、含まれるすべての閲覧コンテキスト (iframe) でオリジンに関係なく許可されます。
- `'self'`: この機能はこの文書と、含まれるすべての閲覧コンテキスト (iframe) のうち、同じオリジンのものに許可されます。
- `'src'`: (iframe の allow 属性のみ) この iframe に読み込まれた文書が iframe の {{HTMLElement('iframe','src','#Attributes')}} 属性の URL と同じオリジンから来ている限り、この機能はこの iframe で許可されます。
- `'none'`: この機能は最上位および含まれる閲覧コンテキストで無効になります。
- \<origin(s)>: この機能は特定のオリジン (例えば、 `https://example.com`) で許可されます。オリジンは空白で区切ってください。

`*` の値 (すべてのオリジンで有効) または `'none'` (すべてのオリジンで無効) は単独でのみ使用できますが、 `'self'` と `'src'` は一つ以上のオリジンと一緒に使用することができます。

機能はそれぞれ、既定の許可リストを持つよう定義されています。

- `*`: この機能は既定で、最上位の閲覧コンテキストとそれに含まれるすべての閲覧コンテキスト (iframe) で許可されます。
- `'self'`: この機能は既定で、最上位の閲覧コンテキストとそれに含まれるすべての閲覧コンテキスト (iframe) のうち、同じオリジンにあるもので許可されます。この機能は、含まれる閲覧コンテキストにある別なオリジンの文書では許可されません。
- `'none'`: この機能は最上位および含まれる閲覧コンテキストで無効になります。

## ポリシーの指定

機能ポリシーは、機能を制御するポリシーの指定に二つの方法を用意しています。

- HTTP の {{httpheader('Feature-Policy')}} ヘッダー
- {{htmlelement("iframe")}} の {{htmlattrxref("allow", "iframe")}} 属性

HTTP ヘッダーと `allow` 属性の一番の違いは、 allow 属性は iframe 内の機能しか制御しないことです。ヘッダーはレスポンスで、ページ内の任意の埋め込みコンテンツの機能を制御します。

### HTTP の Feature-Policy ヘッダー

ページのレスポンスで HTTP の `Feature-Policy` ヘッダーを送信することができます。このヘッダーの値は、指定されたページに対してブラウザーが適用するポリシーです。以下のような構造になっています。

```bash
Feature-Policy: <feature name> <allowlist of origin(s)>
```

For example, to block all content from using the Geolocation API across your site:

```bash
Feature-Policy: geolocation 'none'
```

Several features can be controlled at the same time by sending the HTTP header with a semicolon-separated list of policy directives, or by sending a separate header for each policy.

For example, the following are equivalent:

```bash
Feature-Policy: unsized-media 'none'; geolocation 'self' https://example.com; camera *;

Feature-Policy: unsized-media 'none'
Feature-Policy: geolocation 'self' https://example.com
Feature-Policy: camera *;
```

### iframe の allow 属性

Feature Policy を使用する 2 つ目の方法は、iframe 内のコンテンツを制御することです。 `allow` 属性を使用して、埋め込みコンテンツのポリシーリストを指定します。

たとえば、以下は iframe 内のすべてのブラウジングコンテキストに、フルスクリーンの使用を許可する方法です。

```html
<iframe src="https://example.com..." allow="fullscreen"></iframe>
```

`<iframe>` がデフォルトで許可している [allowlist](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy#allowlist) の値は `'src'` です。したがって、以下のようにも書いても同じとなります。

```html
<iframe src="https://example.com..." allow="fullscreen 'src'"></iframe>
```

以下の例は、特定のオリジンの `<iframe>` のコンテンツに、ユーザーの位置情報へのアクセスを許可する方法です。

```html
<iframe src="https://google-developers.appspot.com/demos/..."
        allow="geolocation https://google-developers.appspot.com"></iframe>
```

HTTP ヘッダーと同様に、セミコロンで区切られたポリシーディレクティブのリストを指定することによって、複数の機能を同時に制御することが可能です。

たとえば、以下は、`<iframe>` がカメラとマイクを使用できないようにブロックする方法です。

```html
<iframe allow="camera 'none'; microphone 'none'">
```

## 埋め込みコンテンツのポリシーの継承

Scripts inherit the policy of their browsing context, regardless of their origin. That means that top-level scripts inherit the policy from the main document.

All iframes inherit the policy of their parent page. If the iframe has an `allow` attribute, the policies of the parent page and the `allow` attribute are combined, using the most restrictive subset. For an iframe to have a feature enabled, the origin must be in the allowlist for both the parent page and the allow attribute.

Disabling a feature in a policy is a one-way toggle. If a feature has been disabled for a child frame by its parent frame, the child cannot re-enable it, and neither can any of the child's descendants.

## Enforcing best practices for good user experiences

It's difficult to build a website that uses all the latest best practices and provides great performance and user experiences. As the website evolves, it can become even harder to maintain the user experience over time. You can use feature policies to specify the desired best practices, and rely on the browser to enforce the policies to prevent regressions.

There are several policy-controlled features designed to represent functionality that can negatively impact the user experience. These features include:

- Layout-inducing Animations
- Unoptimized (poorly compressed) images
- Oversized images
- Synchronous scripts
- Synchronous XMLHttpRequest
- Unsized media

To avoid breaking existing web content, the default for such policy-controlled features is to allow the functionality to be used by all origins. That is, the default allowlist is `'*'` for each feature. Preventing the use of the sub-optimal functionality requires explicitly specifying a policy that disables the features.

For new content, you can start developing with a policy that disables all the features. This approach ensures that none of the functionality is introduced. When applying a policy to existing content, testing is likely required to verify it continues to work as expected. This is especially important for embedded or third-party content that you do not control.

To turn on the enforcement of all the best practices, specify the policy as below.

Send the following the HTTP header:

```bash
Feature-Policy: layout-animations 'none'; unoptimized-images 'none'; oversized-images 'none'; sync-script 'none'; sync-xhr 'none'; unsized-media 'none';
```

Using the `<iframe>` `allow` attribute:

```html
<iframe src="https://example.com..." allow="layout-animations 'none'; unoptimized-images 'none'; oversized-images 'none'; sync-script 'none'; sync-xhr 'none'; unsized-media 'none';"></iframe>
```

## 関連情報

- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- {{HTTPHeader("Feature-Policy")}} ヘッダー
- iframe の {{HTMLElement('iframe','allow','#Attributes')}} 属性
- {{HTTPHeader("Content-Security-Policy")}} ヘッダー
- {{HTTPHeader("Referrer-Policy")}} ヘッダー
- [プライバシー、アクセス許可、情報セキュリティ](/ja/docs/Web/Privacy)
