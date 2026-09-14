---
title: prefer_related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}

`prefer_related_applications` マニフェストメンバーは、 [`related_applications`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) マニフェストメンバーで指定されたネイティブアプリケーションをウェブアプリケーションよりも優先してインストールするかどうかをブラウザーに指定するためのヒントを提供するために使用されます。

## 構文

```json-nolint
/* 論理値 */
"prefer_related_applications": true
"prefer_related_applications": false
```

### 値

- `prefer_related_applications`
  - : 論理値:
    - `true` に設定すると、ブラウザーはユーザーにウェブアプリの代わりに [`related_applications`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) に掲載されているアプリケーションのいずれかをインストールするよう促すことがあります。
    - `false` に設定するか、省略すると、ブラウザーは関連のネイティブアプリケーションよりもウェブアプリをインストールすることを推奨します。
      > [!NOTE]
      > Chromium ベースのブラウザーでは、ウェブアプリをインストール可能にするには、`prefer_related_applications` を `false` に設定するか、省略するかしてください。

## 例

### ウェブアプリのインストール環境設定を指定

Google Play Store と Windows Store の両方で、ウェブアプリとネイティブアプリの両方を保有している状況を考えてみましょう。相対するネイティブアプリをオプションとして提供したいが、ユーザーにはウェブアプリをインストールすることを推奨したい場合、下記のようにマニフェストファイルで設定することができます。 ブラウザーウィンドウにウェブアプリのインストールを促します。 ネイティブアプリは引き続き代替案として利用できます。

```json
{
  "prefer_related_applications": false,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hiking-app"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/detail/9nqx6sv74srz"
    }
  ]
}
```

### 関連のネイティブアプリのインストールに関する環境設定を指定

ウェブアプリのマニフェストファイルを下記に示す方法で構成することで、ユーザーに、ウェブアプリよりも Google Play ストアから Android ネイティブのハイキングアプリをインストールすることを推奨することができます。

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hiking-app"
    }
  ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`related_applications`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) マニフェストメンバー
- [ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest)で、ウェブアプリをインストール可能にする
