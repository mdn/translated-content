---
title: "Window: crashReport プロパティ"
short-title: crashReport
slug: Web/API/Window/crashReport
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{securecontext_header}}{{APIRef("Reporting API")}}{{SeeCompatTable}}

{{domxref("Window")}} インターフェイスの読み取り専用プロパティである **`crashReport`** は、現在の最上位閲覧コンテキストに任意のデータを記録できる {{domxref("CrashReportContext")}} オブジェクトを返します。
このデータはブラウザーがクラッシュした際にレポート送信先エンドポイントへ送信される {{domxref("CrashReport")}} オブジェクトに含められます。

## 値

{{domxref("CrashReportContext")}} オブジェクトのインスタンスです。

## 例

例については {{domxref("CrashReportContext")}} のリファレンスページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [レポート API](/ja/docs/Web/API/Reporting_API)
