---
title: EyeDropper API
slug: Web/API/EyeDropper_API
l10n:
  sourceCommit: 95b1812cf6b3696b71c5bcab2921cc89d23fc984
---

{{DefaultAPISidebar("EyeDropper API")}}{{SeeCompatTable}}

**EyeDropper API** は、スポイトツールを作るための仕組みを提供します。このツールを使うと、ユーザーはブラウザーウィンドウ外を含む画面から色を採取できます。

## 概念

創造的なアプリケーションには、アプリケーション内で絵や図形から色を採取して再利用する機能があることが多いです。ウェブアプリケーションは、**EyeDropper API** を使うことで、ブラウザーによって提供される同様のスポイトツールを提供できます。

この API を使うと、ウェブアプリケーションはスポイトモードを開始できます。開始すると、カーソルが変わることで、ユーザーにこのモードが有効になっていることを知らせます。そして、ユーザーは画面上のどこからでも色を選択することができるし、<kbd>Escape</kbd> を押してスポイトモードをキャンセルすることもできます。

## セキュリティとプライバシーの対策

悪意のあるウェブサイトがユーザーに気付かれずに画面からピクセルデータを取得するのを防ぐため、**EyeDropper API** は以下の対策を実装しています。

- この API は、ユーザーの意図なしでスポイトモードを開始させません。{{domxref("EyeDropper.prototype.open()")}} メソッドは、ユーザーの操作 (ボタンのクリックなど) への反応としてのみ呼び出すことができます。
- ピクセルデータの取得には、またユーザーの意図が必要です。{{domxref("EyeDropper.prototype.open()")}} が返すプロミスは、ユーザーの操作 (ピクセルのクリック) の結果としてのみ色の値で解決します。そのため、ユーザーに気付かれずにバックグラウンドでスポイトを使うことはできません。
- ユーザーがスポイトモードにさらに気付きやすくするため、ブラウザーはこのモードを目立つようにします。短い間をおいて通常のマウスカーソルが非表示になり、かわりに虫眼鏡が出現します。スポイトモードの開始後、ユーザーがピクセルを選択できるようになるまでにも間があり、ユーザーが確実に虫眼鏡を見られるようにします。
- ユーザーはまた、(<kbd>Escape</kbd> キーを押すことで) スポイトモードをいつでもキャンセルできます。

## インターフェイス

- {{DOMxRef("EyeDropper")}} {{Experimental_Inline}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Picking colors of any pixel on the screen with the EyeDropper API](https://web.dev/eyedropper/)
- [The EyeDropper API W3C/SMPTE Joint Workshop](https://www.w3.org/2021/03/media-production-workshop/talks/patrick-brosset-eyedropper-api.html)
