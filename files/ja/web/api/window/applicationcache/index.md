---
title: window.applicationCache
slug: Web/API/Window/applicationCache
---

> **警告:** アプリケーションキャッシュは Firefox 44 で非推奨となり、 Firefox 60 以降では安全ではないコンテキストでは利用できなくなりました ({{bug(1354175)}}、現在は Nightly/Beta のみ)。ウェブサイトをオフラインで利用するために使用しないでください。 — 代わりに[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)の利用を検討してください。

{{APIRef}}

## 概要

ウィンドウのアプリケーションキャッシュオブジェクトへの参照を返します。

## 構文

```
cache = window.applicationCache
```

### 引数

- `cache` : `OfflineResourceList` へのオブジェクト参照です。

## 仕様書

- {{spec("http://www.w3.org/TR/2008/WD-html5-20080122/#appcache","HTML 5","WD")}}

## 関連情報

- [アプリケーションキャッシュの使用](/ja/docs/HTML/Using_the_application_cache)
