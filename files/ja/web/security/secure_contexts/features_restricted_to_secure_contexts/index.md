---
title: 安全なコンテキストに制限されている機能
slug: Web/Security/Secure_Contexts/features_restricted_to_secure_contexts
tags:
  - API
  - Browsers
  - Reference
  - Secure contexts
  - Security
  - Web
  - features
  - support
  - セキュリティ
  - ブラウザー
  - 安全なコンテキスト
translation_of: Web/Security/Secure_Contexts/features_restricted_to_secure_contexts
---
<p>このリファレンスは、安全なコンテキストでのみ使用できるウェブプラットフォーム機能の一覧です — 定義や詳細については、<a href="/ja/docs/Web/Security/Secure_Contexts">安全なコンテキスト</a>を参照してください。</p>

<h2 id="Current_features_available_only_in_secure_contexts" name="Current_features_available_only_in_secure_contexts">安全なコンテキストでのみ使用できる現在の機能</h2>

<p>この節では、安全なコンテキストでのみ利用できる API の一覧を、制限が導入されたブラウザーのバージョンと共に示します。</p>

<div class="note">
<p><strong>メモ</strong>: 実際に安全なコンテキストに対応しているブラウザーのみ表示しています。安全なコンテキストの対応の詳細は<a href="/ja/docs/Web/Security/Secure_Contexts#Browser_compatibility">こちらをご覧ください</a>。</p>
</div>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">API</th>
   <th scope="col">Chrome/Opera</th>
   <th scope="col">Edge</th>
   <th scope="col">Safari</th>
   <th scope="col">Firefox</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/ja/docs/Web/API/Clipboard">Async Clipboard API</a></td>
   <td>66</td>
   <td>対応なし</td>
   <td>対応なし</td>
   <td>63</td>
  </tr>
  <tr>
   <td><a href="https://wicg.github.io/BackgroundSync/spec/">Background Sync</a> (例えば {{domxref("SyncManager")}} を参照)</td>
   <td>49</td>
   <td>対応なし</td>
   <td>対応なし</td>
   <td>対応なし</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/HTTP/Headers/Cache-Control"><code>Cache-Control: immutable</code></a></td>
   <td>対応なし</td>
   <td>15</td>
   <td>11</td>
   <td>49</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Credential_Management_API">Credential Management API</a></td>
   <td>51</td>
   <td>対応なし</td>
   <td>対応なし</td>
   <td>対応なし</td>
  </tr>
  <tr>
   <td><a href="https://w3c.github.io/sensors/">Generic Sensor API</a></td>
   <td>67</td>
   <td>対応なし</td>
   <td>対応なし</td>
   <td>対応なし</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Payment_Request_API">Payment Request API</a> (および <a href="https://w3c.github.io/payment-method-basic-card/">Basic Card Payment</a>)</td>
   <td>61</td>
   <td><a href="https://blogs.windows.com/msedgedev/2017/04/11/introducing-edgehtml-15/">15</a></td>
   <td><a href="https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/">11.1</a></td>
   <td>開発中 (<code>dom.payments.request.enabled</code> の設定で隠蔽)。</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Push_API">プッシュ API</a></td>
   <td>42</td>
   <td><a href="https://blogs.windows.com/msedgedev/2017/12/19/service-workers-going-beyond-page/">17</a></td>
   <td>対応なし</td>
   <td>44</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Reporting_API">Reporting API</a></td>
   <td>対応あり</td>
   <td>対応なし</td>
   <td>対応なし</td>
   <td>Firefox 65 以降はフラグで隠ぺい</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Service_Worker_API">サービスワーカー</a></td>
   <td>40</td>
   <td><a href="https://blogs.windows.com/msedgedev/2017/12/19/service-workers-going-beyond-page/">17</a></td>
   <td><a href="https://webkit.org/blog/8216/new-webkit-features-in-safari-11-1/">11.1</a></td>
   <td>44</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Storage_API">Storage API</a></td>
   <td>55</td>
   <td>対応なし</td>
   <td>対応なし</td>
   <td>51</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Web_Authentication_API">Web Authentication API</a></td>
   <td>65</td>
   <td><a href="https://blogs.windows.com/msedgedev/2018/07/30/introducing-web-authentication-microsoft-edge/">In preview (17)</a></td>
   <td><a href="https://bugs.webkit.org/show_bug.cgi?id=181943">開発中</a></td>
   <td>60</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Web_Bluetooth_API">Web Bluetooth</a></td>
   <td>56</td>
   <td>対応なし</td>
   <td>対応なし</td>
   <td>対応なし</td>
  </tr>
  <tr>
   <td><a href="https://webaudio.github.io/web-midi-api/">Web MIDI</a> (たとえば、 {{domxref("MIDIAccess")}} を参照)</td>
   <td>43</td>
   <td>対応なし</td>
   <td>対応なし</td>
   <td>対応なし</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Web_Crypto_API">Web Crypto API </a></td>
   <td>60</td>
   <td>79</td>
   <td>対応なし</td>
   <td>75</td>
  </tr>
 </tbody>
</table>

<h2 id="Secure_context_restrictions_that_vary_by_browser" name="Secure_context_restrictions_that_vary_by_browser">ブラウザー独自の安全なコンテキストの制限</h2>

<p>ブラウザーによっては、仕様書の要件になくても、特定の API を安全ではないコンテキストでは無効にしたり、その他の制限やセキュリティ要件を課したりしていることがあります。この節では、ブラウザーによって違いがあるものの一覧を示しています。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th>API</th>
   <th>Chrome</th>
   <th>Edge</th>
   <th>Safari</th>
   <th>Firefox</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/ja/docs/Web/HTML/Using_the_application_cache">Application Cache</a></td>
   <td><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=588931#c19">Chrome 70 で安全なコンテキストに限定することを計画中</a></td>
   <td><a href="https://twitter.com/patrickkettner/status/961999450016239616">2018年2月に非推奨化の検討が開始</a></td>
   <td><a href="https://twitter.com/johnwilander/status/959423900470800384">非推奨化に対する一般の関心</a> {{webkitbug(182442)}}</td>
   <td>Firefox 62 で安全なコンテキストに限定</td>
  </tr>
  <tr>
   <td>{{domxref("Geolocation")}}</td>
   <td><a href="https://developers.google.com/web/updates/2016/04/geolocation-on-secure-contexts-only">50で安全なコンテキストに限定</a></td>
   <td></td>
   <td>10で安全なコンテキストに限定</td>
   <td>55で安全なコンテキストに限定</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Detecting_device_orientation">Device Orientaion / Device Motion</a></td>
   <td>非推奨の警告</td>
   <td></td>
   <td></td>
   <td>60から非推奨の警告。なお、これは安全なコンテキストでも同様に適用されます。</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Encrypted_Media_Extensions_API">Encrypted Media Extensions</a></td>
   <td><a href="https://developers.google.com/web/updates/2017/03/chrome-58-deprecations#remove_eme_from_non-secure_contexts">58で安全なコンテキストに限定</a></td>
   <td></td>
   <td></td>
   <td><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1322517">計画中</a>。</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/MediaDevices/getUserMedia">getUserMedia()</a></td>
   <td><a href="https://codereview.chromium.org/1336633002">Chrome 47 以降、安全なコンテキストに限定</a></td>
   <td></td>
   <td></td>
   <td>一時的なアクセスのみ可能 (ユーザーは許可ダイアログで "この設定を記憶する" を選べない)。</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Notifications_API">Notifications</a></td>
   <td><a href="https://developers.google.com/web/updates/2017/09/chrome-62-deprecations#remove_usage_of_notifications_from_insecure_iframes">Chrome 62 で安全なコンテキストに限定</a></td>
   <td></td>
   <td></td>
   <td><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1429432">Firefox 67 で安全なコンテキストに限定</a></td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/HTML/Element/a#attr-ping">&lt;a ping&gt; 属性</a></td>
   <td></td>
   <td>安全でないコンテキストでは無効</td>
   <td></td>
   <td>Firefox 3 で対応が追加、但し既定では有効化されていない (<code>browser.send_pings</code> の設定で隠蔽)。</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Presentation_API">Presentation</a></td>
   <td><a href="https://developers.google.com/web/updates/2017/08/chrome-61-deprecations#deprecate_and_remove_presentation_api_on_insecure_contexts">61 で非推奨の警告</a></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Web_Crypto_API">Web Crypto API</a></td>
   <td>早期から HTTPS に限定 (API は HTTP で見えたが、操作には失敗した)。 <a href="https://developers.google.com/web/updates/2017/06/chrome-60-deprecations#cryptosubtle_now_requires_a_secure_origin">Chrome 60 で安全なコンテキストに限定</a> (API は安全ではないコンテキストから見えなくなった).</td>
   <td></td>
   <td></td>
   <td><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1333140">計画中</a>。</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Navigator/registerProtocolHandler">registerProtocolHandler()</a></td>
   <td></td>
   <td></td>
   <td></td>
   <td>Firefox 62 で安全なコンテキストに限定。</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Security/Secure_Contexts">安全なコンテキスト</a></li>
 <li><a href="https://www.fxsitecompat.dev/en-CA/categories/privacy-security/">Privacy &amp; Security section on Firefox Site Compatibility</a></li>
 <li><a href="https://www.chromestatus.com/features#secure%20context">"secure context" query on Chrome Platform Status</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}</div>
