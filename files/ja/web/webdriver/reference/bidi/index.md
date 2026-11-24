---
title: WebDriver BiDi リファレンス
short-title: BiDi
slug: Web/WebDriver/Reference/BiDi
l10n:
  sourceCommit: fbf733732bf531a1be40a0c646bcbc4b31618476
---

WebDriver BiDi は、ブラウザーの自動化のための双方向プロトコルであり、ローカル側（自動化クライアント）とリモート側（ブラウザー）との間でイベント駆動型の通信を提供します。
このリファレンスでは、WebDriver BiDi で利用できるモジュール、コマンド、イベントについて説明します。

[WebDriver classic](/ja/docs/Web/WebDriver/Reference/Classic) の HTTP リクエスト/レスポンスモデルとは異なり、BiDi では WebSocket ベースの通信を通じてリアルタイムイベントを利用でき、高度な自動化シナリオに対応します。

- [モジュール](/ja/docs/Web/WebDriver/Reference/BiDi/Modules)
  - : 特定のブラウザー自動化の用途で使用する、関連するコマンドやイベントのまとまりです。
- [コマンド](/ja/docs/Web/WebDriver/Reference/BiDi/Modules#コマンド)
  - : ブラウザーの動作の調査や制御、ブラウザーセッションやコンテキストの管理、スクリプトの実行、ネットワーク活動の監視、DOM 要素とのやりとり、ブラウザー API のエミュレートを行う非同期操作です。
- [イベント](/ja/docs/Web/WebDriver/Reference/BiDi/Modules#イベント)
  - : 注目すべき事象が発生したことを知らせるために、リモート側（ブラウザー）から送信される通知です。
