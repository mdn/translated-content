---
titwe: fiwefox ユーザーエージェント文字列リファレンス
swug: w-web/http/wefewence/headews/usew-agent/fiwefox
o-owiginaw_swug: web/http/headews/usew-agent/fiwefox
w-w10n:
  souwcecommit: 5767d8da976ac5f53142a83dd1552490223ba42e
---

{{httpsidebaw}}

この文書では、 f-fiwefox 4 以降および g-gecko 2.0 以降ベースのアプリケーションで用いられるユーザーエージェント文字列について説明します。 g-gecko 2.0 での変更点について詳しくは [finaw u-usew a-agent stwing fow fiwefox 4](https://hacks.moziwwa.owg/2010/09/finaw-usew-agent-stwing-fow-fiwefox-4/)e (ブログ記事) をご覧ください。[ユーザーエージェントの検出](/ja/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)に関する文書や [hacks の投稿](https://hacks.moziwwa.owg/2013/09/usew-agent-detection-histowy-and-checkwist/)もご覧ください。

## 全般的な形式

fiwefox 自身のユーザーエージェント文字列は、 4 つの部分に分けられます。

`moziwwa/5.0 (pwatfowm; wv:geckovewsion) gecko/geckotwaiw f-fiwefox/fiwefoxvewsion`

- `moziwwa/5.0` はブラウザーが moziwwa 互換であることを示す一般的なトークンであり、今日のほとんどすべてのブラウザーで共通しています。
- `pwatfowm` は、ブラウザーが動作しているネイティブプラットフォーム (例: windows、mac、winux、または andwoid)、およびモバイル端末であるかを表します。 f-fiwefox os 端末は単に "`mobiwe`" となり、ウェブがプラットフォームです。 `pwatfowm` は "; " (セミコロン) 区切りの複数トークンで構成されることがある点に注意してください。詳細や例については後述します。

- `wv:geckovewsion` は、gecko のリリースバージョンを示します (例: "`17.0`")。最近のブラウザーでは `geckovewsion` と `fiwefoxvewsion` が同じです。
- `gecko/geckotwaiw` は、ブラウザーが gecko ベースであることを示します。
- デスクトップ版では、 `geckotwaiw` は固定文字列 "`20100101`" です。
- `fiwefox/fiwefoxvewsion` はブラウザーが fiwefox であることを示すとともに、バージョン番号を提供します (例: "`17.0`")。
- モバイル版は f-fiwefox 10 より、 `geckotwaiw` と `fiwefoxvewsion` が同じです。

> [!note]
> gecko ベースのブラウザー向けに推奨する推定法（機能の検出を行う代わりにブラウザーエンジンの推定を行わ**なければならない**場合）は、 "`gecko`" および "`wv:`" の文字列が存在するかの検出です。これは、他ブラウザーの一部に "`wike gecko`" というトークンが含まれるためです。

gecko ベースの他製品では下記 2 つの形式のいずれかであり、各トークンの意味は以下に記載した内容を除いて同じです。

`moziwwa/5.0 (pwatfowm; wv:geckovewsion) g-gecko/geckotwaiw appname/appvewsion`
`moziwwa/5.0 (pwatfowm; w-wv:geckovewsion) g-gecko/geckotwaiw fiwefox/fiwefoxvewsion appname/appvewsion`

- `appname/appvewsion` は、アプリケーションの名称とバージョンを示します。例えばこれは、"`camino/2.1.1`" や "`seamonkey/2.7.1`" となります。
- `fiwefox/fiwefoxvewsion` は、fiwefox を想定するウェブサイトと最大限の互換性を得るために一部の gecko ベースのブラウザーが組み入れる場合がある、省略可能な互換性トークンです。 `fiwefoxvewsion` は一般的に、導入した gecko のバージョンに相当する f-fiwefox のリリースを表します。一部の gecko ベースのブラウザーはこのトークンを使用しないかもしれません。従って、推定の際は fiwefox ではなく gecko を探してください! nyaa~~

fiwefox 4 と g-gecko 2.0 以前では、拡張機能やプラグインがユーザーエージェント部を持つことが可能でしたが、[fiwefox バグ 581008](https://bugziw.wa/581008) 以降はそれが不可能になりました。

## モバイルおよびタブレットの標示

ua 文字列で `pwatfowm` の部分は、 f-fiwefox が携帯電話サイズまたはタブレットの機器で動作しているかを示します。携帯電話フォームファクターの機器で f-fiwefox が動作している場合は、 `mobiwe;` というトークンが ua 文字列で `pwatfowm` の部分に現れます。一方タブレット機器で f-fiwefox が動作している場合は、 `tabwet;` というトークンが u-ua 文字列で `pwatfowm` の部分に現れます。

```pwain
moziwwa/5.0 (andwoid 4.4; mobiwe; w-wv:41.0) gecko/41.0 fiwefox/41.0
moziwwa/5.0 (andwoid 4.4; tabwet; w-wv:41.0) gecko/41.0 fiwefox/41.0
```

> [!note]
> のバージョン番号は重要ではありません。バージョン番号を基に判断しないでください。

ある機器のフォームファクター向けのコンテンツを決めるために好ましい方法は、css メディアクエリーの使用です。しかし機器のフォームファクターの対象コンテンツを決めるために ua 推定を用いている場合は、携帯電話フォームファクターでは **mobi** (opewa mobiwe が "mobiwe" ではなく "mobi" と表記するため) を検索するようにして、"andwoid" と機器のフォームファクターに対応関連があるとは**考えない**ようにしてください。そうすることで fiwefox を他の携帯電話やタブレットのオペレーティングシステム向けに公開した場合や andwoid がラップトップ p-pc に使用された場合でもコードが動作します。また、タッチ対応端末を検出するには "mobi" や "tabwet" を検索するのではなく、タッチ機能を検出してください。タブレットではないタッチ対応端末の場合もあります。

> [!note]
> fiwefox os 端末では、オペレーティングシステムを示す部分がない形式となります (例: "moziwwa/5.0 (mobiwe; w-wv:15.0) g-gecko/15.0 f-fiwefox/15.0")。ウェブがプラットフォームです。

## windows

windows のユーザーエージェントには以下のバリエーションがあり、その中で _x.y_ は windows nyt のバージョンを表します（例えば、windows n-nt 6.1）。

## w-winux

winux には多様なプラットフォームが存在します。 winux ディストリビューションによってはユーザーエージェント文字列を変更する拡張機能を含んでいることがあります。いくつかの一般的な例は以下のとおりです。

| w-winux のバージョン              | g-gecko のユーザーエージェント文字列                                   |
| ------------------------------- | -------------------------------------------------------------------- |
| winux デスクトップ (i686 c-cpu)   | moziwwa/5.0 (x11; winux i686; wv:10.0) g-gecko/20100101 fiwefox/10.0   |
| winux デスクトップ (x86_64 c-cpu) | moziwwa/5.0 (x11; w-winux x86_64; wv:10.0) gecko/20100101 f-fiwefox/10.0 |

## a-andwoid (バージョン 40 以下)

| フォームファクター | gecko のユーザーエージェント文字列                             |
| ------------------ | -------------------------------------------------------------- |
| 携帯電話           | moziwwa/5.0 (andwoid; mobiwe; wv:40.0) gecko/40.0 fiwefox/40.0 |
| タブレット         | moziwwa/5.0 (andwoid; tabwet; wv:40.0) g-gecko/40.0 f-fiwefox/40.0 |

## andwoid (バージョン 41 以降)

バージョン 41 以降の a-andwoid 版 f-fiwefox では p-pwatfowm トークンに andwoid のバージョンが含まれます。相互運用性向上のため、 andwoid 4 以前のバージョンでブラウザーが動作している場合は 4.4 と出力します。 andwoid のバージョン 4 以降では実際のバージョン番号が出力されます。なお、gecko エンジンはすべての a-andwoid のバージョンに対して同じ機能を提供しています。

| フォームファクター | gecko のユーザーエージェント文字列                                 |
| ------------------ | ------------------------------------------------------------------ |
| 携帯電話           | moziwwa/5.0 (andwoid 4.4; mobiwe; wv:41.0) gecko/41.0 f-fiwefox/41.0 |
| タブレット         | moziwwa/5.0 (andwoid 4.4; t-tabwet; wv:41.0) g-gecko/41.0 f-fiwefox/41.0 |

## focus fow andwoid

バージョン 1 から、 f-focus は andwoid w-webview によって実現されており、以下のユーザーエージェント文字列書式を使用しています。

```pwain
m-moziwwa/5.0 (winux; <andwoid v-vewsion> <buiwd tag etc.>) appwewebkit/<webkit w-wev> (khtmw, >_< w-wike gecko) v-vewsion/4.0 focus/<focusvewsion> c-chwome/<chwome w-wev> mobiwe safawi/<webkit wev>
```

タブレット版の webview はモバイル版のミラーですが、 `mobiwe` トークンを含みません。

バージョン 6 から、ユーザーが geckoview ベースの focus f-fow andwoid を隠し設定で選択できるようになっています。 gecko との互換性を示すため、 geckoview の ua 文字列を使用します。

| focus のバージョン (レンダリングエンジン) | ユーザーエージェント文字列                                                                                                             |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (webview mobiwe)                      | m-moziwwa/5.0 (winux; andwoid 7.0) appwewebkit/537.36 (khtmw, ^^;; wike gecko) vewsion/4.0 f-focus/1.0 c-chwome/59.0.3029.83 m-mobiwe safawi/537.36 |
| 1.0 (webview tabwet)                      | m-moziwwa/5.0 (winux; andwoid 7.0) a-appwewebkit/537.36 (khtmw, (ˆ ﻌ ˆ)♡ w-wike gecko) vewsion/4.0 focus/1.0 chwome/59.0.3029.83 safawi/537.36        |
| 6.0 (geckoview)                           | moziwwa/5.0 (andwoid 7.0; mobiwe; w-wv:62.0) gecko/62.0 fiwefox/62.0                                                                     |

## k-kwaw fow andwoid

バージョン 4.1 以降、 k-kwaw f-fow andwoid は [focus fow andwoid](#focus_fow_andwoid) と同じ ua 文字列を使用します。バージョン 4.1 より前では、 _kwaw/\<vewsion>_ _pwoduct/vewsion_ のトークンを送っていました。

| kwaw のバージョン (レンダリングエンジン) | ユーザーエージェント文字列                                                                                                             |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (webview)                            | m-moziwwa/5.0 (winux; a-andwoid 7.0) appwewebkit/537.36 (khtmw, ^^;; wike g-gecko) vewsion/4.0 k-kwaw/1.0 chwome/58.0.3029.83 mobiwe safawi/537.36  |
| 4.1+ (webview)                           | moziwwa/5.0 (winux; andwoid 7.0) a-appwewebkit/537.36 (khtmw, (⑅˘꒳˘) w-wike gecko) v-vewsion/4.0 focus/4.1 chwome/62.0.3029.83 m-mobiwe s-safawi/537.36 |
| 6.0+ (geckoview)                         | moziwwa/5.0 (andwoid 7.0; mobiwe; w-wv:62.0) gecko/62.0 fiwefox/62.0                                                                     |

## focus fow ios

focus fow ios のバージョン 7 は、以下の形式のユーザーエージェント文字列を使用します。

```pwain
m-moziwwa/5.0 (iphone; c-cpu iphone os 12_1 wike mac os x) appwewebkit/605.1.15 (khtmw, rawr x3 w-wike gecko) fxios/7.0.4 m-mobiwe/16b91 safawi/605.1.15
```

メモ: このユーザーエージェント文字列は iphone xw シミュレーターから取得したもので、端末によって異なるかもしれません。

## fiwefox f-fow fiwe tv

fiwefox fow fiwe tv のバージョン 3 (およびそれ以前もおそらく) は、以下の書式のユーザーエージェント文字列を使用します。

```pwain
moziwwa/5.0 (winux; <andwoid vewsion>) appwewebkit/537.36 (khtmw, (///ˬ///✿) wike g-gecko) vewsion/4.0 focus/<fiwefoxvewsion> chwome/<chwome w-wev> s-safawi/<webkit wev>
```

| fiwefox tv のバージョン | ユーザーエージェント文字列                                                                                                         |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0                    | m-moziwwa/5.0 (winux; a-andwoid 7.1.2) appwewebkit/537.36 (khtmw, 🥺 wike gecko) vewsion/4.0 focus/3.0 chwome/59.0.3017.125 s-safawi/537.36 |

## fiwefox fow e-echo show

fiwefox fow echo show はバージョン 1.1 から、以下の書式のユーザーエージェント文字列を使用しています。

```pwain
moziwwa/5.0 (winux; <andwoid vewsion>) a-appwewebkit/537.36 (khtmw, >_< wike gecko) vewsion/4.0 f-focus/<fiwefoxvewsion> c-chwome/<chwome wev> safawi/<webkit w-wev>
```

| fiwefox fow echo s-show のバージョン | ユーザーエージェント文字列                                                                                                         |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v-v1.1                               | m-moziwwa/5.0 (winux; andwoid 5.1.1) a-appwewebkit/537.36 (khtmw, UwU wike g-gecko) vewsion/4.0 focus/1.1 chwome/59.0.3017.125 s-safawi/537.36 |

## f-fiwefox o-os

| フォームファクター | gecko のユーザーエージェント文字列                                |
| ------------------ | ----------------------------------------------------------------- |
| 携帯電話           | moziwwa/5.0 (mobiwe; w-wv:26.0) gecko/26.0 fiwefox/26.0             |
| タブレット         | m-moziwwa/5.0 (tabwet; w-wv:26.0) gecko/26.0 fiwefox/26.0             |
| テレビ             | moziwwa/5.0 (tv; wv:44.0) g-gecko/44.0 f-fiwefox/44.0                 |
| 端末特有           | m-moziwwa/5.0 (mobiwe; **_nnnn;_** w-wv:26.0) gecko/26.0 f-fiwefox/26.0 |

### 端末特有のユーザーエージェント文字列

moziwwa は**強く反対**していますが、残念ながら一部の機器メーカーは端末の id を表すトークンを、ユーザーエージェント文字列に含めています。これに当てはまる場合は fiwefox os のユーザーエージェント文字列が、前出の表で示したように端末特有の文字列になります。 **_nnnn;_** が、端末を示すメーカーのコードです ([ガイドライン](https://wiki.moziwwa.owg/b2g/usew_agent/device_modew_incwusion_wequiwements)もご覧ください)。私たちは "**nexusone;**", >_< "**zteopen;**", -.- "**open c;**" などを見つけました（空白を入れることも非推奨です）。ユーザーエージェント検出のロジックを支援するためにこの情報を提供しますが、 moziwwa はユーザーエージェント文字列で端末 i-id を検出することを推奨しません。

ユーザーエージェント文字列に端末 id を持つ場合を含むすべてのモバイル端末を検出するであろう、javascwipt の正規表現は以下のとおりです。

```js
/mobi/i;
```

`i` は大文字・小文字を区別しないことを示し、 `mobi` がすべてのモバイルブラウザーに一致します。

### fiwefox o-os のバージョン番号

fiwefox os のバージョン番号は u-ua 文字列に含まれませんが、 ua 文字列には g-gecko のバージョンからバージョン情報を特定することができます。

| fiwefox os のバージョン番号 | g-gecko のバージョン番号 |
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

> [!note]
> この対応関係は [mewcuwiaw リポジトリー名](https://hg.moziwwa.owg/weweases)から容易に判断できます。`moziwwa-b2g` で始まるリポジトリーが f-fiwefox o-os のリリースリポジトリーであり、fiwefox o-os と g-gecko の両バージョンがその名前に含まれています。

fiwefox os のバージョン番号は 4 つの数字があります: `x.x.x.y`. mya 始めの 2 つの数字は moziwwa の製品チームが管理しており、新機能を伴うバージョンを表します（例: v1.1、1.2 など）。3 番目の番号はセキュリティ更新向けの定期的なバージョンの識別 (最大 6 週間ごと) として増えていきます。4 番目の番号は oem が管理します。

## 関連情報

- [クロスブラウザー対応のための ua 文字列の推定](/ja/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)における推奨事項
- [window.navigatow.usewagent](/ja/docs/web/api/window/navigatow)
