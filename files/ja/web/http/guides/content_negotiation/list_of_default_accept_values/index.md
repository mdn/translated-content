---
title: 既定の Accept 値の一覧
short-title: 既定の Accept 値
slug: Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

この記事では、特定の入力とブラウザーのバージョンにおける HTTP の [`Accept`](/ja/docs/Web/HTTP/Reference/Headers/Accept) ヘッダーの既定値について説明します。

## 既定値

これらは、コンテキストから良い情報が得られない場合に送信される値です。
なお、すべてのブラウザーがすべての場合をカバーするために `*/*` MIME タイプを追加します。
これは通常、ブラウザーのアドレスバーを介して開始されるリクエスト、または HTML の {{HTMLElement("a")}} 要素を介して開始されるリクエストに使用されます。

| ユーザーエージェント     | 値                                                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 132 以降 [1]     | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Firefox 128 ～ 131       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8`                           |
| Firefox 92 ～ 127        | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                                   |
| Firefox 72 ～ 91 [2]     | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                              |
| Firefox 66 ～ 71 [2]     | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Firefox 65 [2]           | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                              |
| Firefox 64 以前 [2]      | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Safari 13.1 to 18.1+ [4] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Chrome 131+ [4]          | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7` |
| Safari, Chrome [4]       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                                   |
| Safari 5 [3]             | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Edge                     | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                        |
| Opera                    | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1`       |

\[1] この値は、`network.http.accept` 環境設定 (`about:config`) を使用して、任意の文字列に設定することができます。

\[2] この値は、[`network.http.accept.default`](https://kb.mozillazine.org/Network.http.accept.default) 環境設定 (`about:config`) を使用して、任意の文字列に設定することができます。

\[3] これは、`image/png` を `text/html` より上位にランク付けしなくなったため、以前の `Accept` ヘッダーよりも改善されています。

\[4] Safari 13.1 から 18.1 および Chrome 131 について値を再確認し、追加しました。指定されたバージョンより前のバージョンでは、値が変更されている可能性があります。

## 画像の値

ユーザエージェントは HTML の {{HTMLElement("img")}} 要素などを通して画像をリクエストするときに、しばしば歓迎されるメディア種別のリストを設定します。

| ユーザーエージェント           | 値                                                                         |
| ------------------------------ | -------------------------------------------------------------------------- |
| Firefox 128 以降 [1]           | `image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`    |
| Firefox 92 ～ 127 [1]          | `image/avif,image/webp,*/*`                                                |
| Firefox 65 ～ 91 [1]           | `image/webp,*/*`                                                           |
| Firefox 47 ～ 63 [1]           | `*/*`                                                                      |
| Firefox 47 以前 [1]            | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| Safari (Mac OS Big Sur 以降)   | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| Safari (Mac OS Big Sur より前) | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| Chrome および Edge 121 以降    | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |

\[1] この値は `image.http.accept` 設定値を使用して変更することができます（[情報源](https://searchfox.org/mozilla-central/search?q=image.http.accept)）。

## 動画の値

HTML の {{HTMLElement("video")}} 要素を介して動画をリクエストする際、ほとんどのブラウザーは特定の値を使用します。

| ユーザーエージェント | 値                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------- |
| Firefox 3.6 以降     | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox 3.6 以前     | _{{HTMLElement("video")}} に未対応_                                                |
| Chrome               | `*/*`                                                                              |

## 音声リソースの値

HTML の {{HTMLElement("audio")}} 要素などを使用して音声ファイルをリクエストする際、ほとんどのブラウザーは特定の値を使用します。

| ユーザーエージェント | 値                                                                                           |
| -------------------- | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 以降 [1] | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari, Chrome       | `*/*`                                                                                        |

\[1] [バグ 489071](https://bugzil.la/489071) を参照。

## スクリプトの値

HTML の {{HTMLElement("script")}} 要素などを通してスクリプトをリクエストする際、ブラウザーによっては特定の値を使用します。

| ユーザーエージェント | 値    |
| -------------------- | ----- |
| Firefox [1]          | `*/*` |
| Safari, Chrome       | `*/*` |

\[1] [バグ 170789](https://bugzil.la/170789) を参照。

## CSS スタイルシートの値

HTML の `<link rel="stylesheet">` 要素を使用して CSS スタイルシートをリクエストする際、ほとんどのブラウザーは特定の値を使用します。

| ユーザーエージェント | 値                                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1]        | `text/css,*/*;q=0.1`                                                                                                                |
| Safari, Chrome       | `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10          | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6        | `text/css,*/*;q=0.1`                                                                                                                |

\[1] [バグ 170789](https://bugzil.la/170789) を参照。

## 関連情報

- [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)
