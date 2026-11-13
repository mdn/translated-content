---
title: CRLF
slug: Glossary/CRLF
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**CR と LF** はテキストファイルで改行に用いることができる[制御文字](https://ja.wikipedia.org/wiki/制御文字)または[バイトコード](https://ja.wikipedia.org/wiki/バイトコード)です。

- CR = **キャリッジリターン** (`\r`、16 進数で `0x0D`、10 進数で 13) — 次の行へ進まずに、カーソルを行の先頭へ移動する。
- LF = **ラインフィード** (`\n`、16 進数で `0x0A`、10 進数で 10) — カーソルを行の先頭へ移動せずに、次の行へ下に移動する。

CR に直接 LF が続くと (CRLF, `\r\n`, or `0x0D0A`)、カーソルを下へ移動してから行の先頭へ移動します。

## 関連情報

- [改行コード](https://ja.wikipedia.org/wiki/改行コード) - ウィキペディア
- [キャリッジ・リターン](https://ja.wikipedia.org/wiki/キャリッジ・リターン) - ウィキペディア
