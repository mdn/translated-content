---
title: "XRInputSource: profiles プロパティ"
short-title: profiles
slug: Web/API/XRInputSource/profiles
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}

{{domxref("XRInputSource")}} の **`profiles`** は読み取り専用プロパティで、文字列の配列を返します。 各文字列は、入力ソースの構成プロファイルを記述します。 プロファイル文字列は、具体性の高い順にリストされ、最も具体的なプロファイルが最初にリストされます。

> [!NOTE]
> WebXR セッションがインラインモードの場合、`profiles` リストは常に空です。

## 値

`XRInputSource` オブジェクトが表す入力機器の構成プロファイルをそれぞれ記述した文字列の配列。 各入力プロファイルは、入力ソースの好ましい視覚的表現と振る舞いを指定します。

### 入力プロファイル名

入力プロファイル名は、入力ソースが使用するように構成できる視覚的表現と振る舞いを説明する文字列です。 各文字列は、

- スペースはありません。 代わりに、単語はハイフン（"-"）文字で区切られます。
- プラットフォームがそれを利用可能にする場合、USB のベンダー ID と製品 ID が提供される場合がありますが、信頼することはできません。
- 特定の機器を一意に識別しません。 むしろ、製品が使用できる構成を識別します。
- 該当する場合、機器の handedness に関する情報を提供しません。

WebXR 入力プロファイルレジストリー（[WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry)）は、機器開発者とブラウザー開発者が、使用するブラウザーや他の{{Glossary("user agent","ユーザーエージェント")}}に関係なく、特定の機器が同じプロファイル文字列を報告するようにするために使用します。

### 一般的な入力プロファイル名

以下の入力プロファイル名は一般的なもので、機器を最も大まかな意味で記述するフォールバックとして機能します。

- generic-button
- generic-hand-select-grasp
- generic-hand-select
- generic-hand
- generic-touchpad
- generic-touchscreen
- generic-trigger-squeeze-thumbstick
- generic-trigger-squeeze-touchpad-thumbstick
- generic-trigger-squeeze-touchpad
- generic-trigger-squeeze
- generic-trigger-thumbstick
- generic-trigger-touchpad-thumbstick
- generic-trigger-touchpad
- generic-trigger

## 例

profiles` のリストは、詳細度の逆順です。つまり、最も詳細な記述が最初で、最も詳細でない記述は最後です。リストの最初の項目は、通常、コントローラーの正確なモデル、またはコントローラーと互換性のあるモデルを示します。

例えば、Oculus Touch コントローラーの `profiles` の項目 0 は `oculus-touch` です。次の項目は `generic-trigger-squeeze-thumbstick` で、トリガー、スクイーズコントロール、サムスティックを備えた一般的な機器を示しています。 Oculus Touch コントローラーは実際にはサムスティックではなくサムパッドがありますが、全体的な記述が「十分に近い」ので、名前に照合するプロファイル内の詳細がコントローラを有益に解釈します。

```js
inputSource.profiles;
// ['oculus-touch', 'generic-trigger-squeeze-thumbstick']
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
