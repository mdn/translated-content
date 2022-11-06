---
title: XRInputSource.profiles
slug: Web/API/XRInputSource/profiles
---

{{APIRef("WebXR")}}{{securecontext_header}}

{{domxref("XRInputSource")}} の **`profiles`** 読み取り専用プロパティは、文字列の配列を返します。 各文字列は、入力ソースの構成プロファイルを記述します。 プロファイル文字列は、具体性の高い順にリストされ、最も具体的なプロファイルが最初にリストされます。

> **メモ:** WebXR セッションがインラインモードの場合、`profiles` リストは常に空です。

## 構文

```
let profileList = xrInputSource.profiles;
```

### 値

`XRInputSource` オブジェクトが表す入力デバイスの構成プロファイルをそれぞれ記述した {{domxref("DOMString")}} オブジェクトの配列。 各入力プロファイルは、入力ソースの好ましい視覚的表現と振る舞いを指定します。

## 使用上の注意

### 入力プロファイル名

入力プロファイル名は、入力ソースが使用するように構成できる視覚的表現と振る舞いを説明する文字列です。 各文字列は、

- スペースはありません。 代わりに、単語はハイフン（"-"）文字で区切られます。
- プラットフォームがそれを利用可能にする場合、USB のベンダー ID と製品 ID が提供される場合がありますが、信頼することはできません。
- 特定のデバイスを一意に識別しません。 むしろ、製品が使用できる構成を識別します。
- 該当する場合、デバイスの handedness に関する情報を提供しません。

WebXR 入力プロファイルレジストリー（[WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry)）は、デバイス開発者とブラウザー開発者が、使用するブラウザーや他の{{Glossary("user agent","ユーザーエージェント")}}に関係なく、特定のデバイスが同じプロファイル文字列を報告するようにするために使用します。

## 仕様

| 仕様                                                                                                 | 状態                     | コメント |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('WebXR','#dom-xrinputsource-profiles','XRInputSource.profiles')}} | {{Spec2('WebXR')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.XRInputSource.profiles")}}

## 関連情報

- [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API)
- [入力と入力ソース](/ja/docs/Web/API/WebXR_Device_API/Inputs)
- [WebXR アプリケーションでのゲームパッドの使用](/ja/docs/Web/WebXR%20Device%20API/Gamepads)
