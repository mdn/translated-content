---
title: 既定の Accept 値の一覧
slug: Web/HTTP/Content_negotiation/List_of_default_Accept_values
tags:
  - Accept
  - コンテンツネゴシエーション
  - HTTP
  - リファレンス
translation_of: Web/HTTP/Content_negotiation/List_of_default_Accept_values
---
{{HTTPSidebar}}

この記事では、特定の入力とブラウザーのバージョンにおける HTTP の [`Accept`](/ja/docs/Web/HTTP/Headers/Accept) ヘッダーの既定値について説明します。

## 既定値

これらは、コンテキストから良い情報が得られない場合に送信される値です。なお、すべてのブラウザーがすべての場合をカバーするために `*/*` MIME タイプを追加します。これは通常、ブラウザのアドレスバーを介して開始されるリクエスト、または HTML の {{HTMLElement("a")}} 要素を介して開始されるリクエストに使用されます。

| ユーザーエージェント                 | 値                                                                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 92 以降 [1]   | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                                                                 |
| Firefox 72 ～ 91 [1]       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                                                            |
| Firefox 66 ～ 71 [1]       | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                                       |
| Firefox 65 [1]             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                                                            |
| Firefox 64 以前 [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                                       |
| Safari, Chrome             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                                                                 |
| Safari 5 [2]               | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                                       |
| Internet Explorer 8 [3]    | `image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*` |
| Edge                       | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                                                      |
| Opera                      | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1`                                     |

\[1] この値は [`network.http.accept.default`](http://kb.mozillazine.org/Network.http.accept.default) 設定値を使用して変更することができます。

\[2] これは以前の `Accept` ヘッダーと比べて、 `image/png` を `text/html` より上にランク付けしなくなった点で改良されています。

\[3] [IE and the Accept Header (IEInternals' MSDN blog)](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/ie-and-the-accept-header) を参照。

## 画像の値

ユーザエージェントは HTML の {{HTMLElement("img")}} 要素などを通して画像をリクエストするときに、しばしば歓迎されるメディア種別のリストを設定します。

| ユーザーエージェント                                                                                                                     | 値                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Firefox 92 以降 [1]                                                                                                       | `image/avif,image/webp,*/*`                                                 |
| Firefox 65 ～ 91 [1]                                                                                                           | `image/webp,*/*`                                                           |
| Firefox 47 ～ 63 [1]                                                                                                           | `*/*`                                                                      |
| Firefox 47 以前 [1]                                                                                                        | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| Safari (Mac OS Big Sur 以降)                                                                                                  | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| Safari (Mac OS Big Sur 以前)                                                                                                 | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| Chrome                                                                                                                         | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |
| Internet Explorer 9                                                                                                            | `image/png,image/svg+xml,image/*;q=0.8, */*;q=0.5`                         |
| Internet Explorer 8 以前 _[情報源](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/ie-and-the-accept-header)_ | `*/*`                                                                      |

\[1] この値は `image.http.accept` 設定値を使用して変更することができます (_[情報源](https://searchfox.org/mozilla-central/search?q=image.http.accept)_).

## 動画の値

HTML の {{HTMLElement("video")}} 要素を介して動画をリクエストする際、ほとんどのブラウザーは特定の値を使用します。

| ユーザーエージェント                     | 値                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------- |
| Firefox 3.6 以降          | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox 3.6 以前       | _{{HTMLElement("video")}} に未対応_                                          |
| Chrome                         | `*/*`                                                                              |
| Internet Explorer 8 以前 | _{{HTMLElement("video")}} に未対応_                                          |

## 音声リソースの値

HTML の {{HTMLElement("audio")}} 要素などを使用して音声ファイルをリクエストする際、ほとんどのブラウザーは特定の値を使用します。

| ユーザーエージェント                     | 値                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 以降 [1]      | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari, Chrome                 | `*/*`                                                                                        |
| Internet Explorer 8 以前 | _{{HTMLElement("audio")}} に未対応_                                            |
| Internet Explorer 9            | ?                                                                                            |

\[1] [bug 489071](https://bugzilla.mozilla.org/show_bug.cgi?id=489071) を参照。

## スクリプトの値

HTML の {{HTMLElement("script")}} 要素などを通してスクリプトをリクエストする際、ブラウザーによっては特定の値を使用します。

| ユーザーエージェント                         | 値                               |
| ---------------------------------- | ----------------------------------- |
| Firefox [1]                        | `*/*`                               |
| Safari, Chrome                     | `*/*`                               |
| Internet Explorer 8 以前 [2] | `*/*`                               |
| Internet Explorer 9                | `application/javascript, */*;q=0.8` |

\[1] [bug 170789](https://bugzilla.mozilla.org/show_bug.cgi?id=170789) を参照。

\[2] [IE and the Accept Header (IEInternals' MSDN blog)](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/ie-and-the-accept-header) を参照。

## CSS スタイルシートの値

HTML の `<link rel="stylesheet">` 要素を使用して CSS スタイルシートをリクエストする際、ほとんどのブラウザーは特定の値を使用します。</p>

| ユーザーエージェント                         | 値                                                                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1]                      | `text/css,*/*;q=0.1`                                                                                                                |
| Internet Explorer 8 以前 [2] | `*/*`                                                                                                                               |
| Internet Explorer 9                | `text/css`                                                                                                                          |
| Safari, Chrome                     | `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10                        | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6                      | `text/css,*/*;q=0.1`                                                                                                                |

\[1] [bug 170789](https://bugzilla.mozilla.org/show_bug.cgi?id=170789) を参照。

\[2] [IE and the Accept Header (IEInternals' MSDN blog)](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/ie-and-the-accept-header) を参照。
