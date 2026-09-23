---
title: Firefox ユーザーエージェント文字列リファレンス
short-title: Firefox UA 文字列
slug: Web/HTTP/Reference/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 0bd99260a605fec40b453f2e6178f15b0b2a6c03
---

この文書では、 Firefox 4 以降および Gecko 2.0 以降ベースのアプリケーションで用いられるユーザーエージェント文字列について説明します。 Gecko 2.0 での変更点について詳しくは [Final ユーザーエージェント文字列 for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/)E (ブログ記事) をご覧ください。[ユーザーエージェントの検出](/ja/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)に関する文書や [Hacks の投稿](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)もご覧ください。

## 全般的な形式

Firefox 自身のユーザーエージェント文字列は、 4 つの部分に分けられます。

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version`

- `Mozilla/5.0` はブラウザーが Mozilla 互換であることを示す一般的なトークンであり、今日のほとんどすべてのブラウザーで共通しています。
- `platform` は、ブラウザーが動作しているネイティブプラットフォーム (例: Windows、Mac、Linux、または Android)、およびモバイル端末であるかを表します。 Firefox OS 端末は単に `Mobile` となり、ウェブがプラットフォームです。 `platform` は `;` (セミコロン) 区切りの複数トークンで構成されることがある点に注意してください。詳細や例については後述します。

- `rv:gecko-version` は、Gecko のリリースバージョンを示します (例: "`17.0`")。
- `Gecko/gecko-trail` は、ブラウザーが Gecko ベースであることを示します。
- デスクトップ版では、 `gecko-trail` は固定文字列 "`20100101`" です。
- `Firefox/firefox-version` はブラウザーが Firefox であることを示すとともに、バージョン番号を提供します (例: `17.0`)。
- モバイル版は Firefox 10 より、 `gecko-trail` と `firefox-version` が同じです。

> [!NOTE]
> Gecko ベースのブラウザー向けに推奨する推定法（機能の検出を行う代わりにブラウザーエンジンの推定を行わ**なければならない**場合）は、 `Gecko` および `rv:` の文字列が存在するかの検出です。これは、他ブラウザーの一部に `like Gecko` というトークンが含まれるためです。

Gecko ベースの他製品では下記 2 つの形式のいずれかであり、各トークンの意味は以下に記載した内容を除いて同じです。

`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail app-name/app-version`
`Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version app-name/app-version`

- `appname/appversion` は、アプリケーションの名称とバージョンを示します。例えばこれは、`Camino/2.1.1` や `SeaMonkey/2.7.1` となります。
- `Firefox/firefox-version` は、Firefox を想定するウェブサイトと最大限の互換性を得るために一部の Gecko ベースのブラウザーが組み入れる場合がある、省略可能な互換性トークンです。 `firefox-version` は一般的に、導入した Gecko のバージョンに相当する Firefox のリリースを表します。一部の Gecko ベースのブラウザーはこのトークンを使用しないかもしれません。従って、推定の際は Firefox ではなく Gecko を探してください!

## モバイルおよびタブレットの標示

UA 文字列で `platform` の部分は、 Firefox が携帯電話サイズまたはタブレットの機器で動作しているかを示します。携帯電話フォームファクターの機器で Firefox が動作している場合は、 `Mobile;` というトークンが UA 文字列で `platform` の部分に現れます。一方タブレット機器で Firefox が動作している場合は、 `Tablet;` というトークンが UA 文字列で `platform` の部分に現れます。

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> バージョン番号は重要ではありません。バージョン番号を基に判断しないでください。

ある機器のフォームファクター向けのコンテンツを決めるために好ましい方法は、CSS メディアクエリーの使用です。しかし機器のフォームファクターの対象コンテンツを決めるために UA 推定を用いている場合は、携帯電話フォームファクターでは **Mobi** (Opera Mobile が "Mobile" ではなく "Mobi" と表記するため) を検索するようにして、"Android" と機器のフォームファクターに対応関連があるとは**考えない**ようにしてください。そうすることで Firefox を他の携帯電話やタブレットのオペレーティングシステム向けに公開した場合や Android がラップトップ PC に使用された場合でもコードが動作します。また、タッチ対応端末を検出するには "Mobi" や "Tablet" を検索するのではなく、タッチ機能を検出してください。タブレットではないタッチ対応端末の場合もあります。

> [!NOTE]
> Firefox OS 端末では、オペレーティングシステムを示す部分がない形式となります (例: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0")。ウェブがプラットフォームです。

## Windows

Windows のユーザーエージェントには以下のバリエーションがあり、その中で _x.y_ は Windows NT のバージョンを表します（例えば、Windows NT 6.1）。

| Windows バージョン   | Gecko ユーザーエージェント文字列                                                  |
| -------------------- | --------------------------------------------------------------------------------- |
| Windows NT (x86 CPU) | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT (x64 CPU) | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> aarch64 CPU は、Windows 11 では x86_64 として、Windows 10 では x86 として認識されます（Windows 10 は x64 エミュレーションに対応していないため）。
> [Bugzilla #1763310](https://bugzil.la/1763310) を参照してください。

## macOS

ここで、 _x.y_ は macOS のバージョンです（例えば、 macOS 10.15）。 Firefox 87 から、 Firefox は報告する macOS のバージョン数値を 10.15 に制限するため、 macOS 11.0 Big Sur 以降はユーザーエージェント文字列で "10.15" と報告されます。 ARM ベースの Mac はユーザーエージェント文字列で "Intel" と報告されます。

| Mac OS X バージョン             | Gecko ユーザーエージェント文字列                                                   |
| ------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X (x86, x86_64, aarch64) | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X (PowerPC)              | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux には多様なプラットフォームが存在します。 Linux ディストリビューションによってはユーザーエージェント文字列を変更する拡張機能を含んでいることがあります。いくつかの一般的な例は以下のとおりです。

| Linux のバージョン              | Gecko のユーザーエージェント文字列                                   |
| ------------------------------- | -------------------------------------------------------------------- |
| Linux デスクトップ (i686 CPU)   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux デスクトップ (x86_64 CPU) | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

> [!NOTE]
> Firefox 127.0 以降では、32 ビット x86 が Firefox のユーザーエージェント文字列内で x86_64 として報告されるようになりました。{{domxref("navigator.platform")}} および {{domxref("navigator.oscpu")}} において、32 ビット x86 が x86_64 として報告されるようになりました（[Firefox 127.0 リリースノート](https://www.firefox.com/en-US/firefox/127.0/releasenotes/) を参照）。

## Android 版 Firefox

Android 版 Firefox では platform トークンに Android のバージョンが含まれます。相互運用性向上のため、 Android 4 以前のバージョンでブラウザーが動作している場合は 4.4 と出力します。 Android のバージョン 4 以降では実際のバージョン番号が出力されます。なお、Gecko エンジンはすべての Android のバージョンに対して同じ機能を提供しています。

| フォームファクター | Gecko のユーザーエージェント文字列                                 |
| ------------------ | ------------------------------------------------------------------ |
| 携帯電話           | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| タブレット         | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus for Android

バージョン 1 から、 Focus は Android WebView によって実現されており、以下のユーザーエージェント文字列書式を使用しています。

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focus version> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

タブレット版の WebView はモバイル版のミラーですが、 `Mobile` トークンを含みません。

バージョン 6 から、ユーザーが GeckoView ベースの Focus for Android を隠し設定で選択できるようになっています。 Gecko との互換性を示すため、 GeckoView の UA 文字列を使用します。

| Focus のバージョン (レンダリングエンジン) | ユーザーエージェント文字列                                                                                                             |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)                      | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)                      | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                           | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

Klar ユーザーエージェントは [Focus](#focus_for_ios) と同じです。

## iOS 版 Firefox

iOS 版 Firefox は既定の Mobile Safari UA 文字列を使用し、追加で **FxiOS/\<version>** トークンを iPod と iPhone に追加します。これは [Chrome for iOS が自分自身を識別する方法](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/ios/user_agent.md)と同じです。

| フォームファクター | iOS 版 Firefox ユーザーエージェント文字列                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod               | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone             | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad               | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

iPad では、ユーザーエージェント文字列は Safari とまったく同じように現れます。 iOS で `FxiOS` が含まれていないことに関する様々な問題は、 [mozilla-mobile/firefox-ios#6620](https://github.com/mozilla-mobile/firefox-ios/issues/6620) を参照してください。

## Focus for iOS

Focus for iOS のバージョン 7 は、以下の形式のユーザーエージェント文字列を使用します。

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

メモ: このユーザーエージェント文字列は iPhone XR シミュレーターから取得したもので、端末によって異なるかもしれません。

## 関連情報

- [クロスブラウザー対応のための UA 文字列の推定](/ja/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)における推奨事項
- [`navigator.userAgent`](/ja/docs/Web/API/Window/navigator)
