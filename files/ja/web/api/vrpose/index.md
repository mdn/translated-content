---
title: VRPose
slug: Web/API/VRPose
---

{{APIRef("WebVR API")}}{{SeeCompatTable}}

[WebVR API](/ja/docs/Web/API/WebVR_API) の **`VRPose`** インターフェイスは，特定のタイムスタンプにおける VR センサーの状態（向き，位置，速度，加速度の情報を含みます）を示します．

このインターフェイスには，{{domxref("VRDisplay.getPose()")}} と {{domxref("VRDisplay.getImmediatePose()")}} メソッドを通じてアクセスします．

## プロパティ

- {{domxref("VRPose.timeStamp")}} {{readonlyInline}}
  - : システムの現在のタイムスタンプを返します — これは単調増加する値で，位置データが更新されたか，どんな順番で更新が発生しているかを決めるのに使えます．
- {{domxref("VRPose.position")}} {{readonlyInline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の位置を 3D ベクトルとして返します．
- {{domxref("VRPose.linearVelocity")}} {{readonlyInline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の（線形の）速度を返します．単位はメートル/秒です．
- {{domxref("VRPose.linearAcceleration")}} {{readonlyInline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の（線形の）加速度を返します．単位はメートル/秒/秒です．
- {{domxref("VRPose.orientation")}} {{readonlyInline}}
  - : 現在の {{domxref("VRPose.timestamp")}} におけるセンサーの向きをクォータニオンとして返します．
- {{domxref("VRPose.angularVelocity")}} {{readonlyInline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の角速度を返します．単位はラジアン/秒です．
- {{domxref("VRPose.angularAcceleration")}} {{readonlyInline}}
  - : 現在の {{domxref("VRPose.timestamp")}} における {{domxref("VRDisplay")}} の角加速度を返します．単位はラジアン/秒/秒です．

## 例

```
TBD.
```

## 仕様

| Specification                                                        | Status                   | Comment            |
| -------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('WebVR', '#interface-vrpose', 'VRPose')}} | {{Spec2('WebVR')}} | Initial definition |

## ブラウザの互換性

{{Compat("api.VRPose")}}

## 参照

- [WebVR API homepage](/ja/docs/Web/API/WebVR_API).
- [MozVr.com](http://mozvr.com/) — Mozilla VR チームのデモ，ダウンロード，その他のリソース．
