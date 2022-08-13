---
title: Feature Policy
slug: Web/HTTP/Feature_Policy
tags:
  - Feature-Policy
  - HTTP
  - Reference
  - セキュリティ
  - ヘッダー
  - 機能ポリシー
translation_of: Web/HTTP/Feature_Policy
---
<div>{{HTTPSidebar}}</div>

<p class="summary"><span class="seoSummary">機能ポリシーで、ウェブ開発者はブラウザーの特定の機能や API を有効化、無効化したり、動作を変更したりすることができます。これは{{Glossary("CSP", "コンテンツセキュリティポリシー")}}に似ていますが、セキュリティの動作ではなく機能の制御を行うものです。</span></p>

<div class="note">
<p><code>Feature-Policy</code> ヘッダーは仕様書で <code>Permissions-Policy</code> に改名されたので、この記事もそのうち、変更を反映するために更新されます。</p>
</div>

<h2 id="In_a_nutshell" name="In_a_nutshell">概要</h2>

<p>機能ポリシーは、ウェブサイト全体でどの機能が使用されるか (または使用されないか) を明示的に宣言する仕組みを提供します。これにより、使用可能な機能を制限することによって、コードベースが時とともに進化し — サードパーティーのコンテンツをより安全に構成する場合と同様に — ベストプラクティスを維持することができます。</p>

<p>機能ポリシーでは、ブラウザーがウェブサイト全体で使用されている特定の機能を実施するための一連の「ポリシー」を選択します。これらのポリシーは、サイトがアクセスできる API を制限したり、特定の機能についてブラウザーの既定の動作を変更したりすることができます。</p>

<p>機能ポリシーで行うことができるものの例です。</p>

<ul>
 <li>モバイル環境でサードパーティの動画の自動再生の既定の動作を変更する。</li>
 <li>カメラやマイクなどの注意が必要な API をサイトが使用することを制限する。</li>
 <li>iframe から<a href="/ja/docs/Web/API/Fullscreen_API">全画面 API</a> が利用できるようにする。</li>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">同期 XHR</a> や {{domxref("document.write()")}} のような古い API の使用をブロックする。</li>
 <li>画像が正しい大きさであり、ビューポートに対して大きすぎないことを確認する。</li>
</ul>

<h2 id="Concepts_and_usage" name="Concepts_and_usage">概念と使い方</h2>

<p>機能ポリシーを使用すると、最上位ページと埋め込みフレームの両方で、どのオリジンがどの機能を使用できるかを制御できます。基本的には、各機能が許可されたオリジンの一覧であるポリシーを記述します。機能ポリシーによって制御されるそれぞれの機能は、その機能がオリジンが許可されたオリジンのリスト内で一致した場合のみ現在の文書やフレームで有効になります。</p>

<p>ポリシーによって制御される各機能について、ブラウザーは機能が有効になっているオリジンの一覧、すなわち許可リストを管理します。ある機能のポリシーを設定していない場合は、既定の許可リストが使用されます。既定の許可リストは機能別に定められています。</p>

<h3 id="Writing_a_policy" name="Writing_a_policy">ポリシーを書く</h3>

<p>ポリシーは、個々のポリシーディレクティブのセットを使用して記述します。ポリシーディレクティブは定義済みの機能名と、その機能を使用することができるオリジンの許可リストの組み合わせです。</p>

<h3 id="Specifying_your_policy" name="Specifying_your_policy">ポリシーの指定</h3>

<p>機能ポリシーでは、機能を制御するポリシーを指定する方法を2つ提供しています。</p>

<ul>
 <li>{{httpheader("Feature-Policy")}} HTTP ヘッダー</li>
 <li>iframe の {{HTMLElement("iframe","<code>allow</code>","#Attributes")}} 属性</li>
</ul>

<p>HTTP ヘッダーと allow 属性の主な違いは、 allow 属性が iframe 内の機能のみを制御することです。ヘッダーは、レスポンス内とそのページ内の埋め込みコンテンツの機能を制御します。</p>

<p>詳細は<a href="/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy">機能ポリシーの使用</a>を参照してください。</p>

<h3 id="Inferring_the_policy" name="Inferring_the_policy">ポリシーの推定</h3>

<p>スクリプトは、 {{DOMxRef("Document.featurePolicy")}} または {{DOMxRef("HTMLIFrameElement.featurePolicy")}} にある {{DOMxRef("FeaturePolicy")}} オブジェクトを通して機能ポリシーに関する情報をプログラム的に取得することができます。</p>

<h2 id="Types_of_policy-controlled_features" name="Types_of_policy-controlled_features">ポリシーで制御する機能の種類</h2>

<p>機能ポリシーは一貫した構文を使用して複数の機能の制御を提供しますが、ポリシー制御機能の動作はさまざまで、いくつかの要因によって異なります。</p>

<p>一般的な原則では、機能が無効になっているときにウェブ開発者がそれを判断し、対策するための直感的または妨害しない方法があるべきであるということです。新しく導入された機能には、状態を通知するための明示的な API がある場合があります。後で機能ポリシーと統合される既存の機能は、通常、既存のメカニズムを使用します。アプローチには次のようなものがあります。</p>

<ul>
 <li>Return "permission denied" for JavaScript APIs that require user permission grants.</li>
 <li>Return <code>false</code> or error from an existing JavaScript API that provides access to feature.</li>
 <li>Change the default values or options that control the feature behavior.</li>
</ul>

<p>現在のポリシー制御機能のセットは、大きく2つのカテゴリに分類されます。</p>

<ul>
 <li>Enforcing best practices for good user experiences.</li>
 <li>Providing granular control over sensitive or powerful features.</li>
</ul>

<h3 id="Best_practices_for_good_user_experiences" name="Best_practices_for_good_user_experiences">使い勝手を高めるためのベストプラクティス</h3>

<p>優れたパフォーマンスとユーザーエクスペリエンスを提供するためのベストプラクティスを実施するのに役立つポリシー制御の機能がいくつかあります。</p>

<p>ほとんどの場合、ポリシーによって制御される機能は、使用時にユーザーエクスペリエンスに悪影響を与える機能を表します。既存のウェブコンテンツが壊れるのを防ぐため、このようなポリシー制御機能のデフォルトは、すべての起点で機能を使用できるようにすることです。ベストプラクティスは、ポリシー制御機能を無効にするポリシーを使用することによって実施されます。詳細は「優れたユーザーエクスペリエンスのためのベストプラクティスの実施」を参照してください。</p>

<p>The features include:</p>

<ul>
 <li>Layout-inducing animations</li>
 <li>Legacy image formats</li>
 <li>Oversized images</li>
 <li>Synchronous scripts</li>
 <li>Synchronous XMLHTTPRequest</li>
 <li>Unoptimized images</li>
 <li>Unsized media</li>
</ul>

<h3 id="Granular_control_over_certain_features" name="Granular_control_over_certain_features">特定の機能に対する細かい制御</h3>

<p>ウェブは、悪用された場合にプライバシーやセキュリティ上のリスクを伴う可能性のある機能や API を提供します。場合によっては、そのような機能がウェブサイト上でどのように使用されるかを厳密に制限することもできます。ウェブサイト内の特定の原点やフレームに対して機能を有効/無効にするポリシー制御の機能があります。利用可能な場合、機能は Permissions API、または機能が利用可能かどうかを確認する機能固有のメカニズムと統合されます。</p>

<p>機能には以下のものが含まれます (<a href="/ja/docs/Web/HTTP/Headers/Feature-Policy#Directives">機能一覧</a>を参照してください)。</p>

<ul>
 <li>Accelerometer</li>
 <li>Ambient light sensor</li>
 <li>Autoplay</li>
 <li>Camera</li>
 <li>Encrypted media</li>
 <li>Fullscreen</li>
 <li>Geolocation</li>
 <li>Gyroscope</li>
 <li>Magnetometer</li>
 <li>Microphone</li>
 <li>Midi</li>
 <li>PaymentRequest</li>
 <li>Picture-in-picture</li>
 <li>USB</li>
 <li>VR / XR</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy">機能ポリシーの使用</a></li>
 <li>数多くのポリシーの使用例については <a href="http://feature-policy-demos.appspot.com/">Feature Policy Demos</a> をご覧ください。</li>
</ul>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("Feature Policy","#feature-policy-http-header-field","Feature-Policy")}}</td>
   <td>{{Spec2("Feature Policy")}}</td>
   <td>初回定義。 {{httpheader("Feature-Policy")}} ヘッダーの定義。ディレクティブは制御する機能の仕様書で定義。詳細はそれぞれのディレクティブのページを参照。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Feature-Policy")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy">機能ポリシーの使用</a></li>
 <li>HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダー</li>
 <li>iframe の {{HTMLElement("iframe","<code>allow</code>","#Attributes")}} 属性</li>
 <li><a href="https://developers.google.com/web/updates/2018/06/feature-policy">Introduction to Feature Policy</a></li>
 <li><a href="https://www.chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy">Feature policies on www.chromestatus.com</a></li>
 <li><a href="https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop">Feature-Policy Tester (Chrome Developer Tools extension)</a></li>
 <li><a href="/ja/docs/Web/Privacy">プライバシー、アクセス許可、情報セキュリティ</a></li>
</ul>
