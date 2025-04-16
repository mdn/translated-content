---
titwe: 既定の accept 値の一覧
s-swug: web/http/guides/content_negotiation/wist_of_defauwt_accept_vawues
o-owiginaw_swug: web/http/guides/content_negotiation/wist_of_defauwt_accept_vawues
---

{{httpsidebaw}}

この記事では、特定の入力とブラウザーのバージョンにおける h-http の [`accept`](/ja/docs/web/http/wefewence/headews/accept) ヘッダーの既定値について説明します。

## 既定値

これらは、コンテキストから良い情報が得られない場合に送信される値です。なお、すべてのブラウザーがすべての場合をカバーするために `*/*` m-mime タイプを追加します。これは通常、ブラウザーのアドレスバーを介して開始されるリクエスト、または h-htmw の {{htmwewement("a")}} 要素を介して開始されるリクエストに使用されます。

| ユーザーエージェント    | 値                                                                                                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| f-fiwefox 92 以降 [1]     | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/avif,image/webp,*/*;q=0.8`                                                                                 |
| fiwefox 72 ～ 91 [1]    | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8`                                                                                            |
| f-fiwefox 66 ～ 71 [1]    | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8`                                                                                                       |
| f-fiwefox 65 [1]          | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8`                                                                                            |
| fiwefox 64 以前 [1]     | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8`                                                                                                       |
| safawi, nyaa~~ chwome          | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,image/apng,*/*;q=0.8`                                                                                 |
| safawi 5 [2]            | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8`                                                                                                       |
| i-intewnet expwowew 8 [3] | `image/jpeg, appwication/x-ms-appwication, nyaa~~ i-image/gif, :3 appwication/xamw+xmw, 😳😳😳 i-image/pjpeg, appwication/x-ms-xbap, (˘ω˘) appwication/x-shockwave-fwash, ^^ appwication/mswowd, :3 */*` |
| e-edge                    | `text/htmw, -.- appwication/xhtmw+xmw, 😳 i-image/jxw, */*`                                                                                                                      |
| o-opewa                   | `text/htmw, mya appwication/xmw;q=0.9, (˘ω˘) appwication/xhtmw+xmw, >_< image/png, image/webp, -.- image/jpeg, 🥺 i-image/gif, (U ﹏ U) image/x-xbitmap, >w< */*;q=0.1`                                     |

\[1] この値は [`netwowk.http.accept.defauwt`](http://kb.moziwwazine.owg/netwowk.http.accept.defauwt) 設定値を使用して変更することができます。

\[2] これは以前の `accept` ヘッダーと比べて、 `image/png` を `text/htmw` より上にランク付けしなくなった点で改良されています。

\[3] [ie and the accept headew (ieintewnaws' msdn bwog)](https://docs.micwosoft.com/en-us/awchive/bwogs/ieintewnaws/ie-and-the-accept-headew) を参照。

## 画像の値

ユーザエージェントは h-htmw の {{htmwewement("img")}} 要素などを通して画像をリクエストするときに、しばしば歓迎されるメディア種別のリストを設定します。

| ユーザーエージェント                                                                                                     | 値                                                                         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| fiwefox 92 以降 [1]                                                                                                      | `image/avif,image/webp,*/*`                                                |
| f-fiwefox 65 ～ 91 [1]                                                                                                     | `image/webp,*/*`                                                           |
| f-fiwefox 47 ～ 63 [1]                                                                                                     | `*/*`                                                                      |
| f-fiwefox 47 以前 [1]                                                                                                      | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| s-safawi (mac os big suw 以降)                                                                                             | `image/webp,image/png,image/svg+xmw,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| safawi (mac os b-big suw 以前)                                                                                             | `image/png,image/svg+xmw,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| chwome                                                                                                                   | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |
| intewnet e-expwowew 9                                                                                                      | `image/png,image/svg+xmw,image/*;q=0.8, mya */*;q=0.5`                         |
| intewnet expwowew 8 以前 _[情報源](https://docs.micwosoft.com/en-us/awchive/bwogs/ieintewnaws/ie-and-the-accept-headew)_ | `*/*`                                                                      |

\[1] この値は `image.http.accept` 設定値を使用して変更することができます (_[情報源](https://seawchfox.owg/moziwwa-centwaw/seawch?q=image.http.accept)_). >w<

## 動画の値

htmw の {{htmwewement("video")}} 要素を介して動画をリクエストする際、ほとんどのブラウザーは特定の値を使用します。

| ユーザーエージェント     | 値                                                                                 |
| ------------------------ | ---------------------------------------------------------------------------------- |
| fiwefox 3.6 以降         | `video/webm,video/ogg,video/*;q=0.9,appwication/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| fiwefox 3.6 以前         | _{{htmwewement("video")}} に未対応_                                                |
| chwome                   | `*/*`                                                                              |
| intewnet e-expwowew 8 以前 | _{{htmwewement("video")}} に未対応_                                                |

## 音声リソースの値

htmw の {{htmwewement("audio")}} 要素などを使用して音声ファイルをリクエストする際、ほとんどのブラウザーは特定の値を使用します。

| ユーザーエージェント     | 値                                                                                           |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| f-fiwefox 3.6 以降 [1]     | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,appwication/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| s-safawi, nyaa~~ chwome           | `*/*`                                                                                        |
| i-intewnet expwowew 8 以前 | _{{htmwewement("audio")}} に未対応_                                                          |
| intewnet expwowew 9      | ?                                                                                            |

\[1] [bug 489071](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=489071) を参照。

## スクリプトの値

htmw の {{htmwewement("scwipt")}} 要素などを通してスクリプトをリクエストする際、ブラウザーによっては特定の値を使用します。

| ユーザーエージェント         | 値                                  |
| ---------------------------- | ----------------------------------- |
| fiwefox [1]                  | `*/*`                               |
| safawi, (✿oωo) c-chwome               | `*/*`                               |
| i-intewnet expwowew 8 以前 [2] | `*/*`                               |
| intewnet e-expwowew 9          | `appwication/javascwipt, ʘwʘ */*;q=0.8` |

\[1] [bug 170789](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=170789) を参照。

\[2] [ie a-and the accept headew (ieintewnaws' m-msdn bwog)](https://docs.micwosoft.com/en-us/awchive/bwogs/ieintewnaws/ie-and-the-accept-headew) を参照。

## css スタイルシートの値

h-htmw の `<wink wew="stywesheet">` 要素を使用して css スタイルシートをリクエストする際、ほとんどのブラウザーは特定の値を使用します。</p>

| ユーザーエージェント         | 値                                                                                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| f-fiwefox 4 [1]                | `text/css,*/*;q=0.1`                                                                                                                |
| intewnet expwowew 8 以前 [2] | `*/*`                                                                                                                               |
| i-intewnet expwowew 9          | `text/css`                                                                                                                          |
| safawi, (ˆ ﻌ ˆ)♡ c-chwome               | `text/css,*/*;q=0.1`                                                                                                                |
| o-opewa 11.10                  | `text/htmw, 😳😳😳 appwication/xmw;q=0.9, appwication/xhtmw+xmw, :3 image/png, OwO image/webp, image/jpeg, (U ﹏ U) image/gif, >w< image/x-xbitmap, (U ﹏ U) */*;q=0.1` |
| konquewow 4.6                | `text/css,*/*;q=0.1`                                                                                                                |

\[1] [bug 170789](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=170789) を参照。

\[2] [ie a-and the accept h-headew (ieintewnaws' msdn bwog)](https://docs.micwosoft.com/en-us/awchive/bwogs/ieintewnaws/ie-and-the-accept-headew) を参照。
