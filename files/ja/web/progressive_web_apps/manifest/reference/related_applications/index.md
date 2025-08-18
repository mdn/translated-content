---
title: related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/related_applications
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

`related_applications` はマニフェストメンバーで、ウェブアプリケーションに関連する 1 つまたは複数のネイティブアプリケーションを指定するために使用します。
関連のネイティブアプリケーションまたはウェブアプリケーションのどちらかをインストールする環境設定を示す、 [`prefer_related_applications`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) マニフェストメンバーと一緒に使用することができます。

## 構文

```json-nolint
/* url と id の両方を指定した 1 つのプラットフォーム上の関連のネイティブアプリケーション */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }
]

/* id のみを指定した 1 つのプラットフォーム上の関連のネイティブアプリケーション */
"related_applications": [
  {
    "platform": "windows",
    "id": "example.app1"
  }
]

/* 2つのプラットフォーム上の関連のネイティブアプリケーション */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  },
  {
    "platform": "amazon",
    "url": "https://www.amazon.com/product/dp/B000XA1000"
  }
]
```

### 値

- `related_applications`
  - : オブジェクトの配列で、それぞれがウェブアプリに関連するプラットフォーム専用のネイティブアプリケーションを表します。各オブジェクトには、 `platform` プロパティと、 `url` または `id` （またはその両方）の少なくとも 1 つを記載する必要があります。
    - `platform`
      - : アプリケーションが得られるプラットフォームを識別する文字列。
        例えば、`amazon` (Amazon App Store)、`play` (Google Play Store)、`windows` (Windows Store) などがあります。
        取りうる[プラットフォーム値](https://github.com/w3c/manifest/wiki/Platforms)の一覧を確認してください。
    - `url` {{Optional_Inline}}
      - : プラットフォーム固有のアプリケーションが得られる URL を表します。
        指定しなかった場合は、 `id` を指定する必要があります。
    - `id` {{Optional_Inline}}
      - : 指定したプラットフォーム上でアプリケーションを表すために使用されている ID を含む文字列。
        指定しない場合は、`url` を指定する必要があります。

## 解説

「関連アプリケーション」とは、ウェブアプリと似た機能を提供する{{Glossary("Native","ネイティブ")}}アプリケーションで、追加機能やユーザー端末とのより優れた統合機能をよく備えています。

`related_applications` マニフェストメンバーを使用すると、ウェブアプリケーションに関連するプラットフォーム固有のネイティブアプリケーションを識別することができます。
例えば、 Google Play ストアで利用できる、製品の Android ネイティブアプリケーションがあるとします。
このアプリケーションはウェブアプリケーションと同じコア機能を提供し、端末の通知システムとより良く統合されているとします。
`related_applications` を使用すると、ウェブアプリケーションのマニフェストファイルでこの Android ネイティブアプリケーションを指定することができます。

`related_applications` メンバーに関する主なポイントとして、以下が含まれます。

- これにより、異なるプラットフォーム上の複数の関連アプリを指定することができ、さまざまな端末や OS 向けのネイティブアプリのオプションをユーザーに与えてくれます。
- ウェブアプリと指定したネイティブアプリの間に単一方向の関係を作成します。
  ネイティブアプリは、逆にウェブアプリを参照することが要求されることはありません。
- ウェブクローラーがこのデータを使用して、自分のウェブアプリに関連するネイティブアプリに関するより多くの情報を収集し、これらのネイティブアプリの検索性を向上させる可能性があります。

- [`prefer_related_applications`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) メンバーセットを `true` に設定して使用すると、ブラウザーがウェブアプリではなく、関連のネイティブアプリのインストールを提案として表示できるようになります。

  > [!NOTE]
  > Chromium ベースのブラウザーでは、ウェブアプリをインストール可能にするには、`prefer_related_applications` を `false` に設定するか、省略するかします。

## 例

### 関連ネイティブアプリケーションの指定

この例では、ウェブアプリのマニフェストファイルで関連する Android アプリを指定する方法を示します。 Google Play ストアで利用できるネイティブアプリを識別するために、最小限の情報のみを使用しています。

```json
{
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.app1"
    }
  ]
}
```

### 複数のプラットフォーム上の関連のネイティブアプリケーションの指定

Google Play ストアと Windows ストアの両方でネイティブ版のウェブアプリが利用できる場合は、ウェブアプリのマニフェストファイルに次のような指定をします。

```json
{
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.app1",
      "id": "com.example.app1"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/store/detail/example-app1/9WZDNCRFHVJL"
    }
  ]
}
```

### 関連のネイティブアプリのインストールに関する環境設定

ウェブアプリではなく、 Google App Store で利用できるネイティブアプリをインストールするオプションをユーザーに指定してほしい場合、 `prefer_related_applications` を `true` に設定します。これにより、ブラウザーはウェブアプリではなく、 Android ネイティブアプリのインストールをユーザーに促すことがあります。

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.app1"
    }
  ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`prefer_related_applications`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) マニフェストメンバー
- [ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest)で、ウェブアプリをインストール可能にする
- {{domxref("Navigator.getInstalledRelatedApps()")}}
