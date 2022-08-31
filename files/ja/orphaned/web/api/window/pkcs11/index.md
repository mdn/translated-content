---
title: Window.pkcs11
slug: orphaned/Web/API/Window/pkcs11
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Deprecated
  - Property
  - Reference
  - Window
translation_of: Web/API/Window/pkcs11
original_slug: Web/API/Window/pkcs11
---
{{APIRef()}}{{deprecated_header}}

## 概要

`pkcs11` オブジェクトを返します。これは [pkcs11 プロトコル](/ja/docs/Pkcs11_protocol)に関連付けられたドライバーやその他のソフトウェアをインストールするために使用されます。 `pkcs11` に対応していない場合、このプロパティは `null` を返します。

> **Note:** **注:** このプロパティはセキュリティ上の理由から、 Gecko 1.9.0.14 (Firefox 3.0.14) 以降で `null` を返すようになり、 Gecko 29.0 {{geckoRelease(29)}}) で**削除されました**。 PKCS11 モジュールのインストールに関する詳細情報は、 [PKCS11 モジュールのインストール](/ja/docs/PKCS11_Module_Installation)を参照してください。このプロパティが削除された理由の詳細については、 {{ Bug(326628) }} にを参照してください。

## 構文

```
objRef = window.pkcs11
```

## 例

```
 window.pkcs11.addModule(sMod, secPath, 0, 0);
```

## 注

`pkcs11` オブジェクトの操作方法について詳しい情報は、 `nsIDOMPkcs11` を参照してください。

## 仕様書

仕様書にはありません。

## ブラウザーの互換性

{{Compat("api.Window.pkcs11")}}
