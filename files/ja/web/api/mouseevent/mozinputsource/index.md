---
title: MouseEvent.mozInputSource
slug: Web/API/MouseEvent/mozInputSource
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("UI Events")}} {{ Non-standard_header() }}

**`MouseEvent.mozInputSource`** は {{domxref("MouseEvent")}} の読み取り専用プロパティで、イベントを発生させた機器の種類を示す情報を提供します。
これにより、例えばマウスイベントが実際のマウスによって発生したのか、それともタッチイベントによって発生したのかを判断することができます（イベントに関連する座標を解釈する精度に影響を与える可能性があります）。

## 値

以下の値を利用することができます。

| 定数名                | 値  | 説明                                                                     |
| --------------------- | --- | ------------------------------------------------------------------------ |
| `MOZ_SOURCE_UNKNOWN`  | 0   | 入力機器が不明です。                                                     |
| `MOZ_SOURCE_MOUSE`    | 1   | このイベントはマウス（またはマウスのような機器）によって生成されました。 |
| `MOZ_SOURCE_PEN`      | 2   | このイベントはタブレット上のペンによって生成されました。                 |
| `MOZ_SOURCE_ERASER`   | 3   | このイベントはタブレット上の消しゴムによって生成されました。             |
| `MOZ_SOURCE_CURSOR`   | 4   | このイベントはカーソルによって生成されました。                           |
| `MOZ_SOURCE_TOUCH`    | 5   | このイベントはタッチインターフェイスによって生成されました。             |
| `MOZ_SOURCE_KEYBOARD` | 6   | このイベントはキーボードによって生成されました。                         |

## 仕様書

どの仕様書にも含まれていません。

## 関連情報

- {{ domxref("MouseEvent") }}
