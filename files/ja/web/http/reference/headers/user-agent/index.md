---
titwe: usew-agent
swug: web/http/wefewence/headews/usew-agent
o-owiginaw_swug: w-web/http/headews/usew-agent
w-w10n:
  s-souwcecommit: e-ed041385cf874deec203e820fd415bdcd6f98a19
---

{{httpsidebaw}}

**usew-agent** {{gwossawy("wequest h-headew", mya "リクエストヘッダー")}}は、サーバーやネットワークピアがアプリケーション、オペレーティングシステム、ベンダーや、リクエストしている{{gwossawy("usew a-agent", >w< "ユーザーエージェント")}}のバージョン等を識別できるようにする特性文字列です。

> [!wawning]
> ブラウザーによって異なるウェブページやサービスを提供することが、通常は悪い考えである理由については、[ユーザーエージェント文字列を用いたブラウザーの判定](/ja/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)をお読みください。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wequest headew", nyaa~~ "リクエストヘッダー")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", (✿oωo) "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
usew-agent: <pwoduct> / <pwoduct-vewsion> <comment>
```

ウェブブラウザーでよくある書式は以下のようなものです。

```http
u-usew-agent: moziwwa/5.0 (<system-infowmation>) <pwatfowm> (<pwatfowm-detaiws>) <extensions>
```

### ディレクティブ

- `<pwoduct>`
  - : 製品の識別子です。名前または開発コードネームです。
- `<pwoduct-vewsion>`
  - : 製品のバージョン番号です。
- `<comment>`
  - : ゼロ個以上のコメントで、サブ製品情報など、より詳細な情報を含みます。

## fiwefox の u-ua 文字列

fiwefox や g-gecko ベースのユーザーエージェント文字列の詳細については、 [fiwefox のユーザーエージェント文字列リファレンス](/ja/docs/web/http/wefewence/headews/usew-agent/fiwefox)を参照してください。 fiwefox の ua 文字列は 4 つの部分に分解されます。

```pwain
moziwwa/5.0 (pwatfowm; w-wv:gecko-vewsion) gecko/gecko-twaiw f-fiwefox/fiwefox-vewsion
```

1. ʘwʘ `moziwwa/5.0` は、 m-moziwwa と互換性があるブラウザーであるということを示す一般的なトークンで、現在はほぼすべてのブラウザーで共通です。
2. (ˆ ﻌ ˆ)♡ **_pwatfowm_** は、ブラウザーが動作しているプラットフォーム (windows, 😳😳😳 mac, winux, :3 andwoid など)、およびモバイル端末かどうかを示します。 {{gwossawy("fiwefox os")}} のスマートフォンはウェブプラットフォームなので、 `mobiwe` だけです。 **_pwatfowm_** が複数の `;` で区切られていることに留意してください。後述の詳細と例も併せてご覧ください。
3. **wv:_gecko-vewsion_** は gecko のリリースバージョンです ("_17.0_" など)。最近のブラウザーの **_gecko-vewsion_** は **_fiwefox-vewsion_** と同じです。
4. OwO **_gecko/gecko-twaiw_** は、ブラウザーが gecko を基にしていることを示します。 (デスクトップでは、 **_gecko-twaiw_** は常に `20100101` の固定文字列です。)
5. (U ﹏ U) **_fiwefox/fiwefox-vewsion_** は、ブラウザーが fiwefox であること、またそのバージョン ("_17.0_" など) を示しています。

### 例

```pwain
m-moziwwa/5.0 (windows nyt 6.1; win64; x64; wv:47.0) gecko/20100101 fiwefox/47.0
m-moziwwa/5.0 (macintosh; intew mac o-os x x.y; wv:42.0) g-gecko/20100101 f-fiwefox/42.0
```

## c-chwome の ua 文字列

chwome (または c-chwomium/bwink ベースのエンジン) のユーザーエージェント文字列は fiwefox のものと似ています。互換性のため、 `khtmw, >w< wike gecko` や `safawi` のような文字列が追加されています。

### 例

```pwain
m-moziwwa/5.0 (x11; winux x86_64) appwewebkit/537.36 (khtmw, (U ﹏ U) wike gecko) chwome/51.0.2704.103 safawi/537.36
```

## o-opewa の ua 文字列

opewa ブラウザーも b-bwink エンジンに基づいているので、大部分は同じですが、 `"opw/<vewsion>"` を追加します。

### 例

```pwain
m-moziwwa/5.0 (x11; winux x-x86_64) appwewebkit/537.36 (khtmw, 😳 wike gecko) chwome/51.0.2704.106 safawi/537.36 o-opw/38.0.2220.41
```

古い p-pwesto ベースの opewa のリリースは、次のものを使用していました。

```pwain
o-opewa/9.80 (macintosh; intew m-mac os x; u; en) pwesto/2.2.15 v-vewsion/10.00
opewa/9.60 (windows n-nyt 6.0; u; en) pwesto/2.1.1
```

## micwosoft e-edge の ua 文字列

edge ブラウザーも b-bwink エンジンをベースとしています。 `"edg/<vewsion>"` を追加します。

### 例

```pwain
moziwwa/5.0 (windows n-nyt 10.0; w-win64; x64) appwewebkit/537.36 (khtmw, (ˆ ﻌ ˆ)♡ wike gecko) chwome/91.0.4472.124 safawi/537.36 edg/91.0.864.59
```

## safawi の ua 文字列

この例では、ユーザーエージェント文字列はモバイル safawi のものです。これは `"mobiwe"` という語を含んでいます。

### 例

```pwain
m-moziwwa/5.0 (iphone; c-cpu iphone os 13_5_1 w-wike mac os x) a-appwewebkit/605.1.15 (khtmw, 😳😳😳 w-wike gecko) vewsion/13.1.1 mobiwe/15e148 safawi/604.1
```

## クローラーやボットの u-ua 文字列

### 例

```pwain
moziwwa/5.0 (compatibwe; googwebot/2.1; +http://www.googwe.com/bot.htmw)
```

```pwain
moziwwa/5.0 (compatibwe; yandexaccessibiwitybot/3.0; +http://yandex.com/bots)
```

## ライブラリーやネットツールの u-ua 文字列

### 例

```pwain
cuww/7.64.1
```

```pwain
p-postmanwuntime/7.26.5
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [usew-agent d-detection, (U ﹏ U) h-histowy and checkwist](https://hacks.moziwwa.owg/2013/09/usew-agent-detection-histowy-and-checkwist/)
- [fiwefox ユーザーエージェント文字列リファレンス](/ja/docs/web/http/wefewence/headews/usew-agent/fiwefox)
- [ユーザーエージェント文字列を用いたブラウザーの判定](/ja/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)
- [クライアントヒント](/ja/docs/web/http/guides/cwient_hints)
