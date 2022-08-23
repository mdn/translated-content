---
title: Navigator.battery
slug: conflicting/Web/API/Navigator/getBattery
tags:
  - API
  - Battery
  - Battery API
  - Device API
  - Navigator
  - Non-standard
  - Obsolete
  - Property
  - Reference
  - バッテリ
  - プロパティ
  - 廃止
  - 標準外
translation_of: Web/API/Navigator/battery
original_slug: Web/API/Navigator/battery
---
{{ApiRef("Battery API")}}

**`battery`** プロパティは読み取り専用で、システムのバッテリの充電レベルや端末が充電中であるかどうかについての情報を提供し、これらのパラメーターが変化したときに発生するイベントを公開する {{DOMxRef("BatteryManager")}} を返します。このインターフェイスは [Battery Status API](/ja/docs/Web/API/Battery_Status_API) の早期の草稿で導入されましたが、 {{JSxRef("Promise")}} ベースの {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} に置き換えられました。

> **Note:** `battery` プロパティは非推奨になり、バッテリの {{JSxRef("Promise")}} を返す {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} メソッドに置き換えられました。

## 構文

```
var battery = navigator.battery;
```

## ブラウザーの互換性

{{Compat("api.Navigator.battery")}}

## 関連情報

- {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}}
- [Battery Status API](/ja/docs/Web/API/Battery_Status_API)
- [Blog post - Using the Battery API](http://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)
- [David Walsh on the JavaScript Battery API](http://davidwalsh.name/battery-api)
