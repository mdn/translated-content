---
title: Firefox ユーザーエージェント文字列リファレンス
slug: Web/HTTP/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 5767d8da976ac5f53142a83dd1552490223ba42e
---

{{HTTPSidebar}}

この文書では、 Firefox 4 以降および Gecko 2.0 以降ベースのアプリケーションで用いられるユーザーエージェント文字列について説明します。 Gecko 2.0 での変更点について詳しくは [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/)E (ブログ記事) をご覧ください。[ユーザーエージェントの検出](/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent)に関する文書や [Hacks の投稿](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)もご覧ください。

## 全般的な形式

Firefox 自身のユーザーエージェント文字列は、 4 つの部分に分けられます。

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion`

- `Mozilla/5.0` はブラウザーが Mozilla 互換であることを示す一般的なトークンであり、今日のほとんどすべてのブラウザーで共通しています。
- `platform` は、ブラウザーが動作しているネイティブプラットフォーム (例: Windows、Mac、Linux、または Android)、およびモバイル端末であるかを表します。 Firefox OS 端末は単に "`Mobile`" となり、ウェブがプラットフォームです。 `platform` は "; " (セミコロン) 区切りの複数トークンで構成されることがある点に注意してください。詳細や例については後述します。

- `rv:geckoversion` は、Gecko のリリースバージョンを示します (例: "`17.0`")。最近のブラウザーでは `geckoversion` と `firefoxversion` が同じです。
- `Gecko/geckotrail` は、ブラウザーが Gecko ベースであることを示します。
- デスクトップ版では、 `geckotrail` は固定文字列 "`20100101`" です。
- `Firefox/firefoxversion` はブラウザーが Firefox であることを示すとともに、バージョン番号を提供します (例: "`17.0`")。
- モバイル版は Firefox 10 より、 `geckotrail` と `firefoxversion` が同じです。

> [!NOTE]
> Gecko ベースのブラウザー向けに推奨する推定法（機能の検出を行う代わりにブラウザーエンジンの推定を行わ**なければならない**場合）は、 "`Gecko`" および "`rv:`" の文字列が存在するかの検出です。これは、他ブラウザーの一部に "`like Gecko`" というトークンが含まれるためです。

Gecko ベースの他製品では下記 2 つの形式のいずれかであり、各トークンの意味は以下に記載した内容を除いて同じです。

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail appname/appversion`
`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion appname/appversion`

- `appname/appversion` は、アプリケーションの名称とバージョンを示します。例えばこれは、"`Camino/2.1.1`" や "`SeaMonkey/2.7.1`" となります。
- `Firefox/firefoxversion` は、Firefox を想定するウェブサイトと最大限の互換性を得るために一部の Gecko ベースのブラウザーが組み入れる場合がある、省略可能な互換性トークンです。 `firefoxversion` は一般的に、導入した Gecko のバージョンに相当する Firefox のリリースを表します。一部の Gecko ベースのブラウザーはこのトークンを使用しないかもしれません。従って、推定の際は Firefox ではなく Gecko を探してください!

Firefox 4 と Gecko 2.0 以前では、拡張機能やプラグインがユーザーエージェント部を持つことが可能でしたが、[Firefox バグ 581008](https://bugzil.la/581008) 以降はそれが不可能になりました。

## モバイルおよびタブレットの標示

UA 文字列で `platform` の部分は、 Firefox が携帯電話サイズまたはタブレットの機器で動作しているかを示します。携帯電話フォームファクターの機器で Firefox が動作している場合は、 `Mobile;` というトークンが UA 文字列で `platform` の部分に現れます。一方タブレット機器で Firefox が動作している場合は、 `Tablet;` というトークンが UA 文字列で `platform` の部分に現れます。

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> のバージョン番号は重要ではありません。バージョン番号を基に判断しないでください。

ある機器のフォームファクター向けのコンテンツを決めるために好ましい方法は、CSS メディアクエリーの使用です。しかし機器のフォームファクターの対象コンテンツを決めるために UA 推定を用いている場合は、携帯電話フォームファクターでは **Mobi** (Opera Mobile が "Mobile" ではなく "Mobi" と表記するため) を検索するようにして、"Android" と機器のフォームファクターに対応関連があるとは**考えない**ようにしてください。そうすることで Firefox を他の携帯電話やタブレットのオペレーティングシステム向けに公開した場合や Android がラップトップ PC に使用された場合でもコードが動作します。また、タッチ対応端末を検出するには "Mobi" や "Tablet" を検索するのではなく、タッチ機能を検出してください。タブレットではないタッチ対応端末の場合もあります。

> [!NOTE]
> Firefox OS 端末では、オペレーティングシステムを示す部分がない形式となります (例: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0")。ウェブがプラットフォームです。

## Windows

Windows のユーザーエージェントには以下のバリエーションがあり、その中で _x.y_ は Windows NT のバージョンを表します（例えば、Windows NT 6.1）。

## Linux

Linux には多様なプラットフォームが存在します。 Linux ディストリビューションによってはユーザーエージェント文字列を変更する拡張機能を含んでいることがあります。いくつかの一般的な例は以下のとおりです。

| Linux のバージョン              | Gecko のユーザーエージェント文字列                                   |
| ------------------------------- | -------------------------------------------------------------------- |
| Linux デスクトップ (i686 CPU)   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| Linux デスクトップ (x86_64 CPU) | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Android (バージョン 40 以下)

| フォームファクター | Gecko のユーザーエージェント文字列                             |
| ------------------ | -------------------------------------------------------------- |
| 携帯電話           | Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0 |
| タブレット         | Mozilla/5.0 (Android; Tablet; rv:40.0) Gecko/40.0 Firefox/40.0 |

## Android (バージョン 41 以降)

バージョン 41 以降の Android 版 Firefox では platform トークンに Android のバージョンが含まれます。相互運用性向上のため、 Android 4 以前のバージョンでブラウザーが動作している場合は 4.4 と出力します。 Android のバージョン 4 以降では実際のバージョン番号が出力されます。なお、Gecko エンジンはすべての Android のバージョンに対して同じ機能を提供しています。

| フォームファクター | Gecko のユーザーエージェント文字列                                 |
| ------------------ | ------------------------------------------------------------------ |
| 携帯電話           | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| タブレット         | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus for Android

バージョン 1 から、 Focus は Android WebView によって実現されており、以下のユーザーエージェント文字列書式を使用しています。

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

タブレット版の WebView はモバイル版のミラーですが、 `Mobile` トークンを含みません。

バージョン 6 から、ユーザーが GeckoView ベースの Focus for Android を隠し設定で選択できるようになっています。 Gecko との互換性を示すため、 GeckoView の UA 文字列を使用します。

| Focus のバージョン (レンダリングエンジン) | ユーザーエージェント文字列                                                                                                             |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)                      | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)                      | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                           | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

## Klar for Android

バージョン 4.1 以降、 Klar for Android は [Focus for Android](#focus_for_android) と同じ UA 文字列を使用します。バージョン 4.1 より前では、 _Klar/\<version>_ _product/version_ のトークンを送っていました。

| Klar のバージョン (レンダリングエンジン) | ユーザーエージェント文字列                                                                                                             |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView)                            | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Klar/1.0 Chrome/58.0.3029.83 Mobile Safari/537.36  |
| 4.1+ (WebView)                           | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/4.1 Chrome/62.0.3029.83 Mobile Safari/537.36 |
| 6.0+ (GeckoView)                         | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

## Focus for iOS

Focus for iOS のバージョン 7 は、以下の形式のユーザーエージェント文字列を使用します。

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

メモ: このユーザーエージェント文字列は iPhone XR シミュレーターから取得したもので、端末によって異なるかもしれません。

## Firefox for Fire TV

Firefox for Fire TV のバージョン 3 (およびそれ以前もおそらく) は、以下の書式のユーザーエージェント文字列を使用します。

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV のバージョン | ユーザーエージェント文字列                                                                                                         |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0                    | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox for Echo Show

Firefox for Echo Show はバージョン 1.1 から、以下の書式のユーザーエージェント文字列を使用しています。

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox for Echo Show のバージョン | ユーザーエージェント文字列                                                                                                         |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                               | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| フォームファクター | Gecko のユーザーエージェント文字列                                |
| ------------------ | ----------------------------------------------------------------- |
| 携帯電話           | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| タブレット         | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| テレビ             | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| 端末特有           | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### 端末特有のユーザーエージェント文字列

Mozilla は**強く反対**していますが、残念ながら一部の機器メーカーは端末の ID を表すトークンを、ユーザーエージェント文字列に含めています。これに当てはまる場合は Firefox OS のユーザーエージェント文字列が、前出の表で示したように端末特有の文字列になります。 **_nnnn;_** が、端末を示すメーカーのコードです ([ガイドライン](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)もご覧ください)。私たちは "**NexusOne;**", "**ZTEOpen;**", "**Open C;**" などを見つけました（空白を入れることも非推奨です）。ユーザーエージェント検出のロジックを支援するためにこの情報を提供しますが、 Mozilla はユーザーエージェント文字列で端末 ID を検出することを推奨しません。

ユーザーエージェント文字列に端末 ID を持つ場合を含むすべてのモバイル端末を検出するであろう、JavaScript の正規表現は以下のとおりです。

```js
/mobi/i;
```

`i` は大文字・小文字を区別しないことを示し、 `mobi` がすべてのモバイルブラウザーに一致します。

### Firefox OS のバージョン番号

Firefox OS のバージョン番号は UA 文字列に含まれませんが、 UA 文字列には Gecko のバージョンからバージョン情報を特定することができます。

| Firefox OS のバージョン番号 | Gecko のバージョン番号 |
| --------------------------- | ---------------------- |
| 1.0.1                       | 18.0                   |
| 1.1                         | 18.1                   |
| 1.2                         | 26.0                   |
| 1.3                         | 28.0                   |
| 1.4                         | 30.0                   |
| 2.0                         | 32.0                   |
| 2.1                         | 34.0                   |
| 2.2                         | 37                     |
| 2.5                         | 44                     |

> [!NOTE]
> この対応関係は [Mercurial リポジトリー名](https://hg.mozilla.org/releases)から容易に判断できます。`mozilla-b2g` で始まるリポジトリーが Firefox OS のリリースリポジトリーであり、Firefox OS と Gecko の両バージョンがその名前に含まれています。

Firefox OS のバージョン番号は 4 つの数字があります: `X.X.X.Y`. 始めの 2 つの数字は Mozilla の製品チームが管理しており、新機能を伴うバージョンを表します（例: v1.1、1.2 など）。3 番目の番号はセキュリティ更新向けの定期的なバージョンの識別 (最大 6 週間ごと) として増えていきます。4 番目の番号は OEM が管理します。

## 関連情報

- [クロスブラウザー対応のための UA 文字列の推定](/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent)における推奨事項
- [window.navigator.userAgent](/ja/docs/Web/API/Window/navigator)
