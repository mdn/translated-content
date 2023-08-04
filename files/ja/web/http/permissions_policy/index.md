---
title: Permissions Policy
slug: Web/HTTP/Permissions_Policy
---

{{HTTPSidebar}}

機能ポリシーで、ウェブ開発者はブラウザーの特定の機能や API を有効化、無効化したり、動作を変更したりすることができます。これは{{Glossary("CSP", "コンテンツセキュリティポリシー")}}に似ていますが、セキュリティの動作ではなく機能の制御を行うものです。

## 概要

機能ポリシーは、ウェブサイト全体でどの機能が使用されるか (または使用されないか) を明示的に宣言する仕組みを提供します。これにより、使用可能な機能を制限することによって、コードベースが時とともに進化し — サードパーティーのコンテンツをより安全に構成する場合と同様に — ベストプラクティスを維持することができます。

機能ポリシーでは、ブラウザーがウェブサイト全体で使用されている特定の機能を実施するための一連の「ポリシー」を選択します。これらのポリシーは、サイトがアクセスできる API を制限したり、特定の機能についてブラウザーの既定の動作を変更したりすることができます。

機能ポリシーで行うことができるものの例です。

- モバイル環境でサードパーティの動画の自動再生の既定の動作を変更する。
- カメラやマイクなどの注意が必要な API をサイトが使用することを制限する。
- iframe から[全画面 API](/ja/docs/Web/API/Fullscreen_API) が利用できるようにする。
- [同期 XHR](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) や {{domxref("document.write()")}} のような古い API の使用をブロックする。
- 画像が正しい大きさであり、ビューポートに対して大きすぎないことを確認する。

## 概念と使い方

機能ポリシーを使用すると、最上位ページと埋め込みフレームの両方で、どのオリジンがどの機能を使用できるかを制御できます。基本的には、各機能が許可されたオリジンの一覧であるポリシーを記述します。機能ポリシーによって制御されるそれぞれの機能は、その機能がオリジンが許可されたオリジンのリスト内で一致した場合のみ現在の文書やフレームで有効になります。

ポリシーによって制御される各機能について、ブラウザーは機能が有効になっているオリジンの一覧、すなわち許可リストを管理します。ある機能のポリシーを設定していない場合は、既定の許可リストが使用されます。既定の許可リストは機能別に定められています。

### ポリシーを書く

ポリシーは、個々のポリシーディレクティブのセットを使用して記述します。ポリシーディレクティブは定義済みの機能名と、その機能を使用することができるオリジンの許可リストの組み合わせです。

### ポリシーの指定

機能ポリシーでは、機能を制御するポリシーを指定する方法を 2 つ提供しています。

- {{httpheader("Permissions-Policy")}} HTTP ヘッダー
- iframe の {{HTMLElement("iframe","<code>allow</code>","#Attributes")}} 属性

HTTP ヘッダーと allow 属性の主な違いは、 allow 属性が iframe 内の機能のみを制御することです。ヘッダーは、レスポンス内とそのページ内の埋め込みコンテンツの機能を制御します。

詳細は[機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)を参照してください。

### ポリシーの推定

スクリプトは、 {{DOMxRef("Document.featurePolicy")}} または {{DOMxRef("HTMLIFrameElement.featurePolicy")}} にある {{DOMxRef("FeaturePolicy")}} オブジェクトを通して機能ポリシーに関する情報をプログラム的に取得することができます。

## ポリシーで制御する機能の種類

機能ポリシーは一貫した構文を使用して複数の機能の制御を提供しますが、ポリシー制御機能の動作はさまざまで、いくつかの要因によって異なります。

一般的な原則では、機能が無効になっているときにウェブ開発者がそれを判断し、対策するための直感的または妨害しない方法があるべきであるということです。新しく導入された機能には、状態を通知するための明示的な API がある場合があります。後で機能ポリシーと統合される既存の機能は、通常、既存のメカニズムを使用します。アプローチには次のようなものがあります。

- Return "permission denied" for JavaScript APIs that require user permission grants.
- Return `false` or error from an existing JavaScript API that provides access to feature.
- Change the default values or options that control the feature behavior.

現在のポリシー制御機能のセットは、大きく 2 つのカテゴリに分類されます。

- Enforcing best practices for good user experiences.
- Providing granular control over sensitive or powerful features.

### 使い勝手を高めるためのベストプラクティス

優れたパフォーマンスとユーザーエクスペリエンスを提供するためのベストプラクティスを実施するのに役立つポリシー制御の機能がいくつかあります。

ほとんどの場合、ポリシーによって制御される機能は、使用時にユーザーエクスペリエンスに悪影響を与える機能を表します。既存のウェブコンテンツが壊れるのを防ぐため、このようなポリシー制御機能のデフォルトは、すべての起点で機能を使用できるようにすることです。ベストプラクティスは、ポリシー制御機能を無効にするポリシーを使用することによって実施されます。詳細は「優れたユーザーエクスペリエンスのためのベストプラクティスの実施」を参照してください。

The features include:

- Layout-inducing animations
- Legacy image formats
- Oversized images
- Synchronous scripts
- Synchronous XMLHTTPRequest
- Unoptimized images
- Unsized media

### 特定の機能に対する細かい制御

ウェブは、悪用された場合にプライバシーやセキュリティ上のリスクを伴う可能性のある機能や API を提供します。場合によっては、そのような機能がウェブサイト上でどのように使用されるかを厳密に制限することもできます。ウェブサイト内の特定の原点やフレームに対して機能を有効/無効にするポリシー制御の機能があります。利用可能な場合、機能は Permissions API、または機能が利用可能かどうかを確認する機能固有のメカニズムと統合されます。

機能には以下のものが含まれます ([機能一覧](/ja/docs/Web/HTTP/Headers/Permissions-Policy#directives)を参照してください)。

- Accelerometer
- Ambient light sensor
- Autoplay
- Camera
- Encrypted media
- Fullscreen
- Geolocation
- Gyroscope
- Magnetometer
- Microphone
- Midi
- PaymentRequest
- Picture-in-picture
- USB
- VR / XR

## 例

- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- 数多くのポリシーの使用例については [Feature Policy Demos](http://feature-policy-demos.appspot.com/) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("http.headers.Permissions-Policy")}}

## 関連情報

- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダー
- iframe の {{HTMLElement("iframe","<code>allow</code>","#Attributes")}} 属性
- [Introduction to Feature Policy](https://developers.google.com/web/updates/2018/06/feature-policy)
- [Feature policies on www.chromestatus.com](https://www.chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Feature-Policy Tester (Chrome Developer Tools extension)](https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- [プライバシー、アクセス許可、情報セキュリティ](/ja/docs/Web/Privacy)
