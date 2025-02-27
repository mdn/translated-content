---
title: CRLF
slug: Glossary/CRLF
---

{{GlossarySidebar}}

CR と LF はテキストファイルで改行に用いることができる[制御文字](https://ja.wikipedia.org/wiki/%E5%88%B6%E5%BE%A1%E6%96%87%E5%AD%97)または[バイトコード](https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%83%88%E3%82%B3%E3%83%BC%E3%83%89)です。</p>

- CR = **キャリッジリターン** (`\r`、16 進数で `0x0D`、10 進数で 13) — 次の行へ進まずに、カーソルを行の先頭へ移動する。
- LF = **ラインフィード** (`\n`、16 進数で `0x0A`、10 進数で 10) — カーソルを行の先頭へ移動せずに、次の行へ下に移動する。

CR に直接 LF が続くと (CRLF, `\r\n`, or `0x0D0A`)、カーソルを下へ移動してから行の先頭へ移動します。

## 関連情報

- Wikipedia 上の [改行コード](https://ja.wikipedia.org/wiki/改行コード)
- Wikipedia 上の [キャリッジ・リターン](https://ja.wikipedia.org/wiki/キャリッジ・リターン)
