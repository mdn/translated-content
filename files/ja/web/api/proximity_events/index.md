---
title: 近接イベント
slug: Web/API/Proximity_Events
original_slug: WebAPI/Proximity
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{DefaultAPISidebar("Proximity Events")}}{{Deprecated_Header}}

> **警告:** 接近イベントは現在の主要なブラウザーがどれも対応しておらず、使用すべきではありません。このページは歴史的な関心のために提供されています。

**近接イベント** (proximity events) は、ユーザーが端末の近くにいるときを知るのに便利な手段です。これらのイベントは近接度の変化への対応、例えばユーザーがスマートフォンを耳の近くに持ってきて電話をしているときにスクリーンを休止することを可能にします。

近接イベントは 2 つあります（ドキュメントはリンク先を参照）。

- {{domxref("UserProximityEvent")}}: `window.onuserproximity` で扱う
- {{domxref("DeviceProximityEvent")}}: `window.ondeviceproximity` で扱う

両者の違いは、 {{domxref("UserProximityEvent")}} はユーザーが「近い」と判断されたときに単純に `true` を通知するのに対し、 {{domxref("DeviceProximityEvent")}} は近くのオブジェクトまでの実際の距離の見積もりを提供する点です。

> **メモ:** この API は端末に近接センサーを必要とすることが明らかです。近接センサーは、たいていモバイル端末のみで使用できます。センサーを搭載していない端末もイベントをサポートするかもしれませんが、イベントは発生しません。

## 仕様書

この機能は、標準化路線ではなくなりました。過去の仕様はまだ[利用できます](https://w3c.github.io/proximity/)。
